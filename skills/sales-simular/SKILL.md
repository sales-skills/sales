---
name: sales-simular
description: "Simular (Sai) platform help — autonomous AI desktop agent that controls apps, browsers, and workflows via GUI like a human, running 24/7 on a secure cloud virtual desktop. Use when you need an AI agent to automate repetitive desktop tasks across multiple apps, Sai keeps failing or getting confused mid-workflow, Simulang scripts aren't executing correctly, the agent can't handle CAPTCHAs or complex UI elements, you want to compare Simular vs Lindy vs Zapier vs n8n for workflow automation, credits are running out too fast on the Starter plan, the agent won't connect to your app or website, or you need help writing custom Simulang actions. Do NOT use for building no-code AI agent workflows with integrations (use /sales-lindy), AI calendar auto-scheduling (use /sales-motion), or choosing an AI meeting note-taker (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Simular / Sai]"
license: MIT
version: 1.0.0
tags: [sales, productivity, ai-agent, desktop-automation, platform]
github: "https://github.com/simular-ai"
---

# Simular (Sai) Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your Simular challenge?**
   - A) Setting up Sai for the first time
   - B) Agent keeps failing or getting confused during tasks
   - C) Writing or debugging Simulang scripts
   - D) Browser automation with the Python API
   - E) Credit usage or pricing questions
   - F) Comparing Simular vs alternatives
   - G) Something else

2. **Which product are you using?**
   - A) Sai (cloud-based AI coworker at sai.work)
   - B) Simular Pro (local desktop agent)
   - C) Simular Browser (Python API)
   - D) Agent-S (open-source framework)

3. **Which plan are you on?**
   - A) Free trial (7 days)
   - B) Starter/Plus ($20/mo)
   - C) Pro ($500/mo)

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| No-code AI agent workflows with app integrations | `/sales-lindy [question]` |
| AI calendar auto-scheduling with project management | `/sales-motion [question]` |
| Choosing a dedicated AI meeting note-taker | `/sales-note-taker [question]` |
| General tool integration patterns | `/sales-integration [question]` |
| Everything else | Answer directly using Step 3 |

When routing, provide the exact command.

## Step 3 — Simular platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, Simulang API, pricing, integrations, and workarounds for common issues.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

- For setup: recommend starting with a simple single-app task (e.g., Gmail labeling), verify it works, then chain multi-app workflows
- For agent failures: check if the target app has changed its UI, try the `stateSatisfies` perception action to debug what the agent sees, reduce `maxSteps` to isolate where it fails
- For Simulang: start from the workflow gallery examples, modify incrementally — don't write complex scripts from scratch
- For pricing: Starter ($20/mo, 10K credits) is fine for personal automation; Pro ($500/mo) only if running business-critical 24/7 workflows
- For comparisons: Simular controls the actual desktop (GUI clicks/typing) — it can automate ANY app but is slower and less reliable than API-based tools like Zapier/Make for apps that have APIs

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about platform limitations and pricing that may be outdated.*

- **macOS-first, Windows incomplete.** Simular Pro currently runs on macOS 15.0+ only. Windows support is announced but not fully available. Don't recommend for Windows-only users.
- **GUI automation is inherently fragile.** When apps update their UI, workflows can break. CAPTCHAs, anti-bot measures, and dynamic content can confuse the agent. Always include `stateSatisfies` checks and `Respond` confirmation gates for critical actions.
- **No webhooks, no Zapier, no Make.** Simular operates by controlling the GUI — it doesn't integrate via APIs with other automation platforms. You can't trigger a Simular workflow from a Zapier zap. For API-based automation, use dedicated tools.
- **Credits are opaque.** The 10,000 credits on Starter don't map to a clear unit (not tasks, not minutes). Monitor usage closely in the first month to calibrate.
- **Pro plan is expensive for solopreneurs.** At $500/mo, Pro is positioned for businesses. Most solopreneurs should start with Starter ($20/mo) and only upgrade if they need unlimited credits or team features.
- **Agent-S open-source != Sai cloud product.** Agent-S is a research framework. Sai is the commercial product with cloud VMs and support. Don't conflate them — Agent-S requires self-hosting and your own LLM API keys.
- **Non-English text input can fail.** Users report issues entering CJK characters. If automating non-Latin-script workflows, test thoroughly.

## Related skills

- `/sales-lindy` — Lindy platform help (no-code AI agent builder with 4,000+ integrations — API-based alternative)
- `/sales-motion` — Motion platform help (AI calendar + project management)
- `/sales-saner` — Saner.AI platform help (AI personal assistant for notes/tasks)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Solopreneur automating LinkedIn prospecting
**User says**: "I want Sai to visit LinkedIn profiles from a Google Sheet list and send personalized connection requests"
**Skill does**:
1. Reads platform-guide.md for Simulang reference
2. Explains the workflow: Open Google Sheets → GetGoogleSheetCellValue for each row → Open LinkedIn profile → Click "Connect" → Type personalized note → confirm via Respond
3. Warns about LinkedIn rate limits and anti-bot detection — recommend max 20-30 connections/day
4. Shows the approval gate pattern using `Respond({requireConfirm: true})` before each send
5. Notes this is Pro-tier territory if running 24/7 on cloud VM
**Result**: Working Simulang script outline with safety guardrails

### Example 2: Debugging a failing workflow
**User says**: "My Sai agent keeps clicking the wrong button in our CRM"
**Skill does**:
1. Explains the Click disambiguation system — `at` parameter, `mode: "vision"`, spatial relations, anchor concepts
2. Recommends using `ConceptsExist` to verify the right page loaded before clicking
3. Shows how to use `GetElements` to inspect what the agent sees vs what's actually on screen
4. Suggests adding `waitForLoadComplete: true` and `waitTime` to handle slow-loading CRM pages
5. If the CRM has an API, recommends using API calls instead of GUI automation for reliability
**Result**: Diagnostic approach and Click configuration to improve accuracy

### Example 3: Comparing Simular vs Zapier vs Lindy
**User says**: "Should I use Simular, Zapier, or Lindy to automate my workflow?"
**Skill does**:
1. Clarifies the fundamental difference: Simular controls the GUI (can automate ANY app), Zapier/Make connect APIs (faster, more reliable, but limited to supported apps), Lindy builds AI agent workflows with integrations
2. Decision framework: If the app has a Zapier integration or API → use Zapier/Make. If you need AI reasoning in the loop → use Lindy. If the app has no API and you need GUI automation → use Simular.
3. Cost comparison: Zapier from $0, Lindy from $50/mo, Simular from $20/mo ($500/mo for business use)
4. Recommends Simular only for "last mile" automation where no API exists
**Result**: Clear decision framework based on whether apps have APIs

## Troubleshooting

### Agent gets stuck on CAPTCHAs
**Cause**: Google and other services detect automated interaction and present CAPTCHAs
**Solution**: Use `Respond({requireConfirm: true})` to pause and alert you when a CAPTCHA appears. Solve it manually, then let the agent continue. For Google services, consider using the Google Sheets API actions instead of navigating the web UI.

### Agent clicks wrong element
**Cause**: Ambiguous UI elements, slow page loads, or elements hidden behind overlays
**Solution**: Use `Click({mode: "vision"})` for visual targeting. Add `WaitForConcepts` before clicking to ensure the target element is loaded. Use `anchorConcept` and `spatialRelation` to disambiguate (e.g., the "Submit" button closest to "Contact Form"). Inspect with `pageContent()` to see what the agent sees.

### Credits running out quickly
**Cause**: Complex multi-step workflows burn credits per action. Long `Act()` calls with high `maxSteps` consume more.
**Solution**: Break workflows into shorter scripts with explicit steps instead of open-ended `Act()` calls. Set `maxSteps` to the minimum needed. Monitor usage in the dashboard and reload credits on Starter plan if needed.
