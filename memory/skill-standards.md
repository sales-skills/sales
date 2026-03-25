# Skill Authoring Standards

Checklist and guidelines for writing first-party sales skills, based on Anthropic's "Lessons from Building Claude Code" blog post and internal experience.

## Required structure

Every skill SKILL.md must include:

```
---
name: <skill-name>
description: "<WHAT it does>. Use when <trigger phrases>. Do NOT use for <X> (use /alternative)."
argument-hint: "[brief hint]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---
```

### Body pattern (progressive disclosure)

1. **Step 1 — Gather context**: Ask 2-4 clarifying questions before acting
2. **Steps 2-4 — Core work**: Analysis, generation, or guidance
3. **Gotchas** (required): 3-5 Claude-specific failure points (see below)
4. **Related skills**: Point to adjacent skills
5. **Examples**: 2-3 concrete input/output scenarios
6. **Troubleshooting**: Common issues and fixes

## Gotchas section (required)

The highest-signal content in any skill. Include 3-5 things Claude specifically gets wrong in this domain — not generic advice, but patterns observed from actual Claude behavior.

Format each gotcha as:
- **Bold the failure pattern.** Then explain what Claude does wrong and what the correct behavior is.

Good gotchas are:
- Specific to Claude's defaults and biases (e.g., "Claude defaults to email-heavy cadences")
- Actionable (tell Claude what to do instead)
- Domain-specific (not generic like "ask clarifying questions")

Bad gotchas are:
- Generic advice ("make sure to be thorough")
- Things Claude already knows ("use proper grammar")
- User-facing tips disguised as Claude instructions

Update gotchas over time as you discover new failure patterns from real usage.

## Don't state the obvious

Focus skill content on information that pushes Claude out of its defaults. Don't repeat what Claude already knows about coding, writing, or general sales methodology. If Claude would do the right thing without the instruction, leave it out.

Examples of what to skip:
- "Write clearly and professionally" — Claude does this by default
- "Ask follow-up questions if something is unclear" — Claude does this
- Basic sales concepts Claude was trained on (BANT, SPIN, etc. — reference them, don't explain them)

Examples of what to include:
- Internal conventions (naming patterns, routing rules, template structures)
- Domain gotchas Claude wouldn't know (Salesloft v2 API, not v1)
- Non-obvious patterns (deal rooms are overkill for sub-$20k deals)

## Avoid railroading

Give Claude the information it needs, but give it the flexibility to adapt to the situation. Rigid step-by-step scripts produce cookie-cutter outputs that don't fit the user's context.

**Instead of**: "You MUST include exactly 12-15 touches"
**Write**: "A typical cadence has 12-15 touches, but adjust based on persona and sales cycle"

**Instead of**: "Always use these exact weight ranges"
**Write**: "These are typical ranges — adjust based on the team's historical conversion data"

**Instead of**: "Score every call on all 9 dimensions"
**Write**: "Use this scorecard as a framework — adapt dimensions based on call type"

Use words like "typically," "adjust based on," "consider," and "depending on" instead of "always," "must," "exactly," and "never." The exception: actual constraints (API endpoints, data model facts) should remain definitive.

## Scripts & code

For deterministic operations, include scripts in a `scripts/` directory. Code is deterministic; language interpretation isn't. If a skill involves data fetching, formatting, validation, or file manipulation, write a script for it rather than describing the steps in natural language.

```
skills/<skill-name>/
├── SKILL.md
├── scripts/
│   └── fetch-data.sh    # Deterministic operations
├── references/
│   └── api-reference.md  # Large reference material
├── assets/
│   └── template.json     # Templates, examples
└── evals/
    └── evals.json
```

Scripts should be self-contained and executable. Include usage comments at the top.

## References & progressive disclosure

Move reference material longer than ~500 words to a `references/` directory. This keeps SKILL.md focused on instructions while making detailed information available when needed.

Use references for:
- API documentation (endpoints, parameters, examples)
- Data models and field mappings
- Long lists of options or configurations
- Historical data or benchmarks

Reference from SKILL.md with: "For detailed X, consult `references/filename.md`."

## Memory & data storage

Skills can store persistent data in `${CLAUDE_PLUGIN_DATA}` — a directory that persists across skill upgrades. Use it for:
- User configuration and preferences
- Logs and usage history
- Cached data that improves over time

Example: A forecasting skill could store historical win rates in `${CLAUDE_PLUGIN_DATA}/win-rates.json` so future forecasts use team-specific data instead of generic benchmarks.

## On-demand hooks

Skills can register hooks that activate only when the skill is called. Use hooks for opinionated constraints that should apply during skill execution but not globally.

Example: A proposal skill could register a hook that enforces "no proposal over 8 sections" — this constraint makes sense during proposal generation but shouldn't apply to other skills.

## Description as trigger

The description field is scanned at session start to decide skill relevance. Write it as "when to trigger," not a summary.

**Structure**: `"<WHAT it does>. Use when <trigger phrases the user would say>. Do NOT use for <X> (use /alternative)."`

The "Do NOT use for" section is critical for routing — it prevents the router from matching this skill when a more specific skill exists.

Good trigger phrases use words salespeople actually say:
- "write a cold email" not "compose outbound correspondence"
- "prep for a discovery call" not "prepare qualification meeting agenda"
- "my deal is stuck" not "diagnose pipeline velocity issues"

## Evals

Every skill should have `evals/evals.json` with 2-3 realistic test cases:

```json
{
  "skill_name": "<skill-name>",
  "evals": [
    {
      "id": 0,
      "prompt": "realistic user prompt",
      "expected_output": "what success looks like",
      "assertions": [
        {"name": "assertion_name", "description": "specific check"}
      ]
    }
  ]
}
```

Eval prompts should be things a real user would say, not formal test cases.
