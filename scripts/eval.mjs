#!/usr/bin/env node

import { spawn } from "node:child_process";
import {
  readFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
  writeFileSync,
} from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SKILLS_DIR = join(ROOT, "skills");
const OUTPUT_DIR = join(ROOT, "evals-output");
const RESULTS_FILE = join(OUTPUT_DIR, "last-run.json");

// --- formatting ---

const fmt = (code, s) => `\x1b[${code}m${s}\x1b[0m`;
const green = (s) => fmt(32, s);
const red = (s) => fmt(31, s);
const dim = (s) => fmt(2, s);
const bold = (s) => fmt(1, s);
const yellow = (s) => fmt(33, s);

// --- skill discovery ---

function findSkills(filter) {
  return readdirSync(SKILLS_DIR)
    .filter((name) => {
      if (filter && name !== filter && name !== `sales-${filter}`) return false;
      return existsSync(join(SKILLS_DIR, name, "evals", "evals.json"));
    })
    .map((name) => ({
      name,
      evals: JSON.parse(
        readFileSync(join(SKILLS_DIR, name, "evals", "evals.json"), "utf-8")
      ).evals,
      skillMd: existsSync(join(SKILLS_DIR, name, "SKILL.md"))
        ? readFileSync(join(SKILLS_DIR, name, "SKILL.md"), "utf-8")
        : null,
    }));
}

// --- claude CLI wrapper ---

function claude(prompt, { model } = {}) {
  return new Promise((resolve, reject) => {
    const args = ["-p", "--no-session-persistence"];
    if (model) args.push("--model", model);

    const proc = spawn("claude", args, {
      stdio: ["pipe", "pipe", "pipe"],
      cwd: ROOT,
      timeout: 180_000,
    });

    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (d) => (stdout += d));
    proc.stderr.on("data", (d) => (stderr += d));
    proc.on("error", reject);
    proc.on("close", (code) => {
      if (code === 0) resolve(stdout.trim());
      else reject(new Error(`claude exited ${code}: ${stderr.slice(0, 500)}`));
    });

    proc.stdin.write(prompt);
    proc.stdin.end();
  });
}

// --- eval runner ---

async function runSkill(skillMd, prompt, model) {
  const fullPrompt = [
    "Follow these skill instructions to respond to the user's request.\n",
    "<skill-instructions>",
    skillMd,
    "</skill-instructions>\n",
    "<user-request>",
    prompt,
    "</user-request>",
  ].join("\n");

  return claude(fullPrompt, { model });
}

function parseJudgeResponse(raw) {
  // Try direct JSON parse
  try {
    const parsed = JSON.parse(raw);
    if (parsed.results) return parsed.results;
    if (Array.isArray(parsed)) return parsed;
  } catch {}

  // Try extracting JSON from markdown code blocks
  const codeBlock = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlock) {
    try {
      const parsed = JSON.parse(codeBlock[1].trim());
      if (parsed.results) return parsed.results;
      if (Array.isArray(parsed)) return parsed;
    } catch {}
  }

  // Try finding a JSON object anywhere in the text
  const objMatch = raw.match(/\{[\s\S]*"results"[\s\S]*\}/);
  if (objMatch) {
    try {
      return JSON.parse(objMatch[0]).results;
    } catch {}
  }

  // Try finding a JSON array
  const arrMatch = raw.match(/\[[\s\S]*\]/);
  if (arrMatch) {
    try {
      const arr = JSON.parse(arrMatch[0]);
      if (Array.isArray(arr)) return arr;
    } catch {}
  }

  return null;
}

async function judge(output, assertions, model, debug) {
  const assertionList = assertions
    .map((a, i) => `${i + 1}. ${a.name}: ${a.description}`)
    .join("\n");

  const prompt = `Judge whether this skill output satisfies each assertion. Be fair but strict — the assertion must be meaningfully addressed, not just mentioned in passing.

<output>
${output}
</output>

<assertions>
${assertionList}
</assertions>

Respond with ONLY a JSON object in this exact format, nothing else:
{"results":[{"name":"assertion_name","pass":true,"reason":"brief explanation"},{"name":"assertion_name","pass":false,"reason":"brief explanation"}]}`;

  const raw = await claude(prompt, { model });

  if (debug) {
    console.log(dim("      --- raw judge response ---"));
    for (const line of raw.split("\n").slice(0, 15)) {
      console.log(dim(`      ${line}`));
    }
    console.log(dim("      ---"));
  }

  const results = parseJudgeResponse(raw);
  if (results) return results;

  return assertions.map((a) => ({
    name: a.name,
    pass: false,
    reason: "Could not parse judge response",
  }));
}

// --- results persistence ---

function loadLastRun() {
  if (!existsSync(RESULTS_FILE)) return null;
  try {
    return JSON.parse(readFileSync(RESULTS_FILE, "utf-8"));
  } catch {
    return null;
  }
}

function getFailedEvals(lastRun) {
  if (!lastRun) return null;
  // Returns a Set of "skill:evalId" strings that had any failure
  const failed = new Set();
  for (const r of lastRun) {
    if (r.assertions.some((a) => !a.pass)) {
      failed.add(`${r.skill}:${r.evalId}`);
    }
  }
  return failed;
}

// --- commands ---

function list(filter) {
  const skills = findSkills(filter);
  if (!skills.length) {
    console.log(filter ? `No evals found for "${filter}"` : "No evals found");
    return;
  }
  console.log(bold("\nAvailable evals:\n"));
  for (const s of skills) {
    console.log(`  ${bold(s.name)} ${dim(`(${s.evals.length} tests)`)}`);
    for (const e of s.evals) {
      const short =
        e.prompt.length > 80 ? e.prompt.slice(0, 77) + "..." : e.prompt;
      console.log(`    ${dim(`#${e.id}`)} ${short}`);
      for (const a of e.assertions) {
        console.log(`         ${dim(`→ ${a.name}`)}`);
      }
    }
  }
  const total = skills.reduce((n, s) => n + s.evals.length, 0);
  console.log(
    `\n  ${dim(`${skills.length} skills · ${total} tests`)}\n`
  );
}

async function run(filter, { runOnly, evalId, verbose, debug, rerunFailed } = {}) {
  const evalModel = process.env.EVAL_MODEL || "sonnet";
  const judgeModel = process.env.JUDGE_MODEL || "haiku";

  const skills = findSkills(filter);
  if (!skills.length) {
    console.error(filter ? `No evals found for "${filter}"` : "No evals found");
    process.exit(1);
  }

  // Load previous failures for --rerun-failed
  let failedSet = null;
  if (rerunFailed) {
    const lastRun = loadLastRun();
    if (!lastRun) {
      console.error("No previous run found. Run evals first, then use --rerun-failed.");
      process.exit(1);
    }
    failedSet = getFailedEvals(lastRun);
    if (failedSet.size === 0) {
      console.log(green("\nAll evals passed on last run. Nothing to rerun.\n"));
      return;
    }

    // If filtering by skill, check if any failures match
    if (filter) {
      const skillName = skills.map((s) => s.name);
      const matching = [...failedSet].filter((key) =>
        skillName.some((n) => key.startsWith(n + ":"))
      );
      if (matching.length === 0) {
        console.log(
          green(`\nAll ${filter} evals passed on last run.`) +
            dim(` (${failedSet.size} failures in other skills)\n`)
        );
        return;
      }
      console.log(dim(`\n  Rerunning ${matching.length} previously failed ${filter} evals\n`));
    } else {
      console.log(dim(`\n  Rerunning ${failedSet.size} previously failed evals\n`));
    }
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const modeNotes = [
    `eval=${evalModel} judge=${judgeModel}`,
    runOnly ? "(judge skipped)" : "",
    rerunFailed ? "(rerun failed only)" : "",
  ].filter(Boolean).join(" ");
  console.log(dim(`\n  models: ${modeNotes}\n`));

  let totalPass = 0;
  let totalFail = 0;
  let totalSkip = 0;
  const allResults = [];

  for (const skill of skills) {
    if (!skill.skillMd) {
      console.log(bold(skill.name));
      console.log(red("  SKILL.md not found — skipping\n"));
      continue;
    }

    let cases =
      evalId != null ? skill.evals.filter((e) => e.id === evalId) : skill.evals;

    // Filter to only previously failed evals
    if (failedSet) {
      cases = cases.filter((e) => failedSet.has(`${skill.name}:${e.id}`));
    }

    if (cases.length === 0) continue;

    console.log(bold(skill.name));

    for (const ev of cases) {
      const tag = `[${ev.id + 1}/${skill.evals.length}]`;
      const short =
        ev.prompt.length > 70 ? ev.prompt.slice(0, 67) + "..." : ev.prompt;
      console.log(`  ${dim(tag)} ${short}`);

      let output;
      try {
        process.stdout.write(dim("      running... "));
        output = await runSkill(skill.skillMd, ev.prompt, evalModel);
        console.log(green("done"));
      } catch (err) {
        console.log(red("error"));
        console.log(red(`      ${err.message.split("\n")[0]}`));
        totalFail += ev.assertions.length;
        allResults.push({
          skill: skill.name,
          evalId: ev.id,
          assertions: ev.assertions.map((a) => ({
            name: a.name,
            pass: false,
            reason: `Error: ${err.message.split("\n")[0]}`,
          })),
        });
        continue;
      }

      // save output
      const outFile = join(OUTPUT_DIR, `${skill.name}-${ev.id}.md`);
      writeFileSync(
        outFile,
        `# ${skill.name} eval #${ev.id}\n\n## Prompt\n\n${ev.prompt}\n\n## Output\n\n${output}\n`
      );

      if (verbose) {
        console.log(dim("      --- output preview ---"));
        const preview = output.split("\n").slice(0, 8).join("\n");
        for (const line of preview.split("\n")) {
          console.log(dim(`      ${line}`));
        }
        if (output.split("\n").length > 8) console.log(dim("      ..."));
        console.log(dim("      ---"));
      }

      if (runOnly) {
        totalSkip += ev.assertions.length;
        console.log(dim(`      saved → ${outFile}`));
        allResults.push({
          skill: skill.name,
          evalId: ev.id,
          assertions: ev.assertions.map((a) => ({
            name: a.name,
            pass: false,
            reason: "skipped (run-only)",
          })),
        });
        continue;
      }

      // judge
      let results;
      try {
        process.stdout.write(dim("      judging... "));
        results = await judge(output, ev.assertions, judgeModel, debug);
        console.log(green("done"));
      } catch (err) {
        console.log(red("error"));
        console.log(red(`      ${err.message.split("\n")[0]}`));
        totalFail += ev.assertions.length;
        allResults.push({
          skill: skill.name,
          evalId: ev.id,
          assertions: ev.assertions.map((a) => ({
            name: a.name,
            pass: false,
            reason: `Judge error: ${err.message.split("\n")[0]}`,
          })),
        });
        continue;
      }

      allResults.push({
        skill: skill.name,
        evalId: ev.id,
        assertions: results,
      });

      for (const r of results) {
        if (r.pass) {
          totalPass++;
          console.log(`      ${green("✓")} ${r.name} ${dim("— " + r.reason)}`);
        } else {
          totalFail++;
          console.log(`      ${red("✗")} ${r.name} ${dim("— " + r.reason)}`);
        }
      }
    }
    console.log();
  }

  // Save results for --rerun-failed
  // Merge with previous results if this was a rerun (keep passing results from last run)
  if (!runOnly) {
    let finalResults = allResults;
    if (rerunFailed) {
      const lastRun = loadLastRun() || [];
      // Replace only the evals we just re-ran, keep everything else
      const reranKeys = new Set(allResults.map((r) => `${r.skill}:${r.evalId}`));
      finalResults = [
        ...lastRun.filter((r) => !reranKeys.has(`${r.skill}:${r.evalId}`)),
        ...allResults,
      ];
    }
    writeFileSync(RESULTS_FILE, JSON.stringify(finalResults, null, 2));
  }

  // failure summary — show first 10 failures so you don't have to scroll
  const failures = [];
  for (const r of allResults) {
    for (const a of r.assertions) {
      if (!a.pass) {
        failures.push({ skill: r.skill, evalId: r.evalId, ...a });
      }
    }
  }

  if (failures.length > 0) {
    const showing = Math.min(failures.length, 10);
    console.log(bold(`Failures (${showing}/${failures.length}):\n`));
    for (const f of failures.slice(0, 10)) {
      console.log(`  ${red("✗")} ${bold(f.skill)} #${f.evalId} → ${f.name}`);
      console.log(`    ${dim(f.reason)}`);
    }
    if (failures.length > 10) {
      console.log(dim(`\n  ... and ${failures.length - 10} more`));
    }
    console.log();
  }

  // summary
  const parts = [`${green(totalPass + " passed")}`];
  if (totalFail) parts.push(red(totalFail + " failed"));
  if (totalSkip) parts.push(yellow(totalSkip + " skipped"));

  console.log(`${bold("Results:")} ${parts.join(", ")}`);
  console.log(dim(`Outputs: ${OUTPUT_DIR}\n`));

  if (totalFail > 0) process.exit(1);
}

// --- CLI ---

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("-")));
const positional = args.filter((a) => !a.startsWith("-"));

if (flags.has("--help") || flags.has("-h")) {
  console.log(`
${bold("Usage:")}
  pnpm eval [skill] [options]    Run evals
  pnpm eval:list [skill]         List available evals

${bold("Options:")}
  --rerun-failed Rerun only evals that failed on the last run
  --run-only     Run skills without judging (just save outputs)
  --verbose      Show output preview for each eval
  --debug        Show raw judge response for debugging parse issues
  --id <n>       Run a single eval by ID

${bold("Environment:")}
  EVAL_MODEL     Model for running skills (default: sonnet)
  JUDGE_MODEL    Model for judging assertions (default: haiku)

${bold("Examples:")}
  pnpm eval                      Run all evals
  pnpm eval sales-compete        Run evals for one skill
  pnpm eval compete              Also works (auto-prefixes sales-)
  pnpm eval compete --id 0       Run just eval #0
  pnpm eval --run-only           Run without judging
  JUDGE_MODEL=sonnet pnpm eval   Use sonnet for judging
  pnpm eval --rerun-failed       Rerun only previously failed evals
`);
  process.exit(0);
}

if (
  args.includes("list") ||
  args.includes("--list") ||
  process.argv[1]?.endsWith("list")
) {
  list(positional.find((a) => a !== "list"));
} else {
  const idIdx = args.indexOf("--id");
  const evalId = idIdx >= 0 ? Number(args[idIdx + 1]) : undefined;

  run(positional[0], {
    runOnly: flags.has("--run-only"),
    rerunFailed: flags.has("--rerun-failed"),
    verbose: flags.has("--verbose"),
    debug: flags.has("--debug"),
    evalId,
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
