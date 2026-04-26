---
name: sales-dume
description: "Dume.ai platform help — chat-first AI executive assistant that connects Gmail, Calendar, Slack, Jira, Notion, GitHub and 50+ tools for email triage, workflow automation, custom AI agents, and daily task management. Use when email triage and smart draft responses aren't working right, a no-code workflow isn't triggering or firing correctly, you need to set up webhook-based automations on the PRO plan, a tool integration keeps disconnecting or failing to sync, you want to connect an external MCP server to Dume for real-time data, you're building custom AI agents for specialized tasks, WhatsApp integration isn't sending or receiving messages, the morning briefing isn't pulling the right calendar and email data, you're evaluating Dume.ai vs alfred_ vs Lindy vs Saner.AI for AI executive assistant, or you need help choosing the right Dume plan for your workflow. Do NOT use for AI calendar auto-scheduling with project management (use /sales-motion), choosing a dedicated AI meeting note-taker (use /sales-note-taker), or general tool integration architecture (use /sales-integration)."
argument-hint: "[describe what you need help with in Dume.ai]"
license: MIT
version: 1.0.0
tags: [sales, productivity, ai-assistant, workflow-automation, platform]
---

# Dume.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your Dume.ai challenge?**
   - A) Setting up Dume for the first time (integrations, agents)
   - B) Email triage, drafting, or morning briefing issues
   - C) Building or debugging a no-code workflow
   - D) MCP server integration
   - E) WhatsApp or Chrome extension issues
   - F) Custom AI agent creation
   - G) Evaluating Dume.ai vs alternatives
   - H) Something else

2. **Which plan are you on?**
   - A) Free (1,200 credits/year, 20 msgs/day, 1 integration)
   - B) GO ($8-9/mo — 30K credits/year, unlimited messages)
   - C) PRO ($15-18/mo — webhooks, premium models)
   - D) MAX ($33-40/mo — unlimited agents, custom builds)

3. **What are you trying to accomplish?** (describe your specific goal)

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| AI calendar auto-scheduling with project management | `/sales-motion [question]` |
| Choosing a dedicated AI meeting note-taker | `/sales-note-taker [question]` |
| General tool integration patterns | `/sales-integration [question]` |
| Everything else | Answer directly using Step 3 |

When routing, provide the exact command.

## Step 3 — Dume.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, MCP setup, workflow builder, and workarounds for common issues.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

- For setup: start with one integration (Gmail or Calendar), verify it connects, then add more
- For workflows: use the visual Workflow Studio — start with a pre-built template, then customize
- For MCP: PRO+ plan required; use Composio.dev for managed MCP or bring your own HTTP-streamable/SSE server
- For plan selection: Free is too limited for daily use (20 msgs/day, 1 integration); GO is the sweet spot; PRO only if you need webhooks or premium AI models; MAX for heavy agent/workflow usage
- For WhatsApp: ensure v3.8+ — WhatsApp was added October 2025

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

- **No public REST API.** Dume.ai has no documented API endpoints. The developer surface is limited to webhook triggers (PRO+) and consuming external MCP servers. You cannot programmatically read or write Dume data from external tools.
- **Integration connectivity is flaky.** Multiple AppSumo reviewers report that saving to Excel, uploading to OneDrive, and sending to inbox all failed. If an integration breaks, disconnect and reconnect it in Settings. Test immediately after connecting.
- **Email parsing misses in long threads.** AI responses "miss the mark" in longer conversation threads or edge-case scenarios. Keep prompts specific and reference the exact email/thread you need help with.
- **Free plan is effectively a trial.** 20 messages/day and 1 integration make it impractical for any real workflow. Budget for GO ($8/mo) minimum.
- **Webhook triggers require PRO plan.** Workflow trigger nodes using webhooks, schedules, or integration events are gated to PRO ($15-18/mo) and above.
- **MCP integration consumes external servers, doesn't expose one.** Dume connects TO MCP servers for data — it does not act as an MCP server itself. You cannot use Claude Code or ChatGPT to control Dume via MCP.
- **Still actively evolving.** Major releases every 2-4 weeks (v4.2 as of March 2026). Expect feature changes, new integrations, and occasional bugs with newer capabilities.

## Related skills

- `/sales-alfred` — alfred_ platform help (AI exec assistant — simpler, single-tier $24.99/mo, strong email triage)
- `/sales-saner` — Saner.AI platform help (ADHD-friendly AI assistant — notes + tasks + daily planning)
- `/sales-simular` — Simular (Sai) platform help (autonomous desktop agent — controls apps via GUI)
- `/sales-lindy` — Lindy platform help (no-code AI agent builder — 4,000+ integrations)
- `/sales-superhuman` — Superhuman platform help (fastest AI email client — keyboard-driven)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Setting up email triage and morning briefing
**User says**: "I connected my Gmail but the morning briefing isn't showing my emails or calendar events."
**Skill does**:
1. Reads platform-guide.md for email triage and briefing setup details
2. Checks if user is on GO+ plan (Free only allows 1 integration)
3. Walks through verifying Gmail OAuth permissions and calendar access
4. Explains that morning briefing requires both Gmail and Calendar connected — briefing fires at 8:00 AM
5. If connection fails: disconnect both, reconnect in Settings, test with a specific email query first
**Result**: Working morning briefing with email summaries and calendar preview

### Example 2: Building a webhook-triggered workflow
**User says**: "I want to trigger a Dume workflow when a new lead comes in from my website form."
**Skill does**:
1. Confirms user is on PRO+ plan (webhook triggers are plan-gated)
2. Explains the Workflow Studio: create a new workflow, add a Trigger Node set to "Webhook"
3. Shows how to copy the generated webhook URL and configure it in the form tool
4. Adds processing nodes (e.g., create Jira task, send Slack notification, draft welcome email)
5. Notes: test the webhook with a manual POST before going live
**Result**: End-to-end form submission → Dume workflow with task creation and notification

### Example 3: Evaluating Dume.ai vs alfred_ vs Lindy
**User says**: "I'm a solopreneur. Should I use Dume, alfred_, or Lindy for managing my email and tasks?"
**Skill does**:
1. Compares approaches: Dume is a workflow-first assistant (50+ tools, custom agents, workflow builder), alfred_ is an email-first assistant (autonomous triage + drafts, single focus), Lindy is an agent-first builder (modular AI agents, 4,000+ integrations)
2. Notes Dume's strengths: broadest integration set, MCP support, visual workflow builder, WhatsApp
3. Notes tradeoffs: Dume has no API (locked ecosystem), alfred_ is simpler but narrower, Lindy has more integrations but is agent-builder not assistant
4. Pricing: Dume GO $8/mo vs alfred_ $24.99/mo vs Lindy $49/mo
5. Recommends Dume if primary pain is multi-tool workflow automation; alfred_ if primary pain is email overload; Lindy if primary pain is building custom AI agents
**Result**: Clear decision framework based on primary pain point

## Troubleshooting

### Integration keeps disconnecting
**Cause**: OAuth token expiration or browser extension interference during reconnection
**Solution**: Disconnect the integration in Settings, clear browser cache, reconnect in an incognito window with no extensions. Grant all requested OAuth permissions. If it still fails after 3 attempts, contact support@dume.ai.

### Workflow not triggering
**Cause**: Trigger node misconfigured, or using webhook trigger on Free/GO plan (requires PRO)
**Solution**: Verify your plan supports the trigger type. For webhook triggers, test with a manual cURL POST to the webhook URL. For schedule triggers, check timezone settings. For integration triggers, verify the source integration is connected and active.

### Chat gives error messages
**Cause**: Credit exhaustion, model unavailability, or rate limiting
**Solution**: Check remaining credits in Settings. If credits are depleted, upgrade plan or wait for monthly reset. Try switching to a different AI model (Settings > AI Model). If errors persist across models, this is likely a service-side issue — wait and retry.
