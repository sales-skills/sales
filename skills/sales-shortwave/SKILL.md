---
name: sales-shortwave
description: "Shortwave platform help — AI-native Gmail client with natural language search, plain-English AI filters, Ghostwriter voice-learning drafts, split inbox, bundles, and MCP consumer for connecting external tools ($24-100/mo, Gmail only). Use when setting up Shortwave for Gmail, AI filters keep mislabeling important emails, Ghostwriter drafts don't sound like you, comparing Shortwave to Superhuman or Fyxer or SaneBox, wondering if Shortwave is worth the price vs free Gmail, AI search not finding old threads, connecting MCP servers to Shortwave for tool integration, Tasklet automations not triggering, or figuring out which plan tier you need. Do NOT use for choosing a meeting note-taker (use /sales-note-taker). Do NOT use for AI executive assistant comparison (use /sales-alfred)."
argument-hint: "[describe what you need help with in Shortwave]"
license: MIT
version: 1.0.0
tags: [sales, email-client, ai-email, productivity, platform]
---

# Shortwave Platform Help

Helps with everything related to using Shortwave — an AI-native Gmail client that replaces your inbox with natural language search, plain-English AI filters, Ghostwriter voice-trained drafting, split inbox organization, and MCP consumer support for connecting external tools. Founded by ex-Googlers as a spiritual successor to Google Inbox.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are you trying to do with Shortwave?**
   - A) Set up Shortwave for the first time
   - B) Configure AI filters or split inbox
   - C) Improve Ghostwriter draft quality
   - D) Connect MCP servers (Notion, HubSpot, etc.)
   - E) Set up Tasklet automations
   - F) Compare Shortwave to alternatives
   - G) Troubleshoot AI search or performance
   - H) Something else — describe it

2. **Which plan are you on (or considering)?**
   - A) Business ($24/mo) — standard AI, 3 AI filters, 5-year search
   - B) Premier ($36/mo) — advanced AI, 10 filters, unlimited search
   - C) Max ($100/mo) — expert AI, 50 filters, live training
   - D) Enterprise (custom)
   - E) Free trial / not sure yet

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Choosing a meeting note-taker → "Run: `/sales-note-taker {user's original question}`"
- AI executive assistant comparison → "Run: `/sales-alfred {user's original question}`"
- CRM integration strategy → "Run: `/sales-integration {user's original question}`"
- Meeting scheduling strategy → "Run: `/sales-meeting-scheduler {user's original question}`"

Otherwise, answer directly from the platform reference below.

## Step 3 — Shortwave platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, plan gates, MCP consumer setup, Tasklet, integrations, and competitive positioning.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For improving Ghostwriter drafts:**
1. Send more emails manually — Ghostwriter learns from your writing style over time
2. Higher plans get better AI models (Standard → Advanced → Expert intelligence)
3. Use snippets to save and reuse prompts for common reply types
4. If tone is consistently wrong after 2+ weeks, your sent history may not reflect your desired style

**For AI filter issues:**
1. AI filters use plain English rules — be specific ("Move newsletters to a Newsletter label")
2. Business plan allows only 3 filters — upgrade to Premier (10) or Max (50) if you need more
3. Over-eager labeling is common early on — refine your filter language to be more precise
4. Filters cannot trigger external actions — use Tasklet for cross-app automations

**For MCP consumer setup:**
1. Requires Business plan or higher
2. Go to Settings → AI Integrations → Add custom integration
3. Supports remote MCP servers (URL) and local servers (command + args)
4. Max 40 tools simultaneously — more tools may degrade AI assistant performance
5. MCP support is tool-calls only — resources, prompts, and sampling are not supported

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may change.*

- **Gmail only.** No Outlook, Apple Mail, Yahoo, or IMAP support. If you use Outlook, Shortwave is not an option — consider Superhuman or Fyxer instead.
- **MCP consumer, not server.** Shortwave connects TO external MCP servers (Notion, HubSpot, etc.) — it does not expose an MCP server for other tools to connect to. No programmatic way to read/write Shortwave data from outside.
- **No public API, no webhooks, no Zapier/Make.** The only automation path is Tasklet (sister product) or MCP consumer integrations.
- **AI filter limits are plan-gated.** Business: 3 filters, Premier: 10, Max: 50. If you need heavy automation, you may outgrow Business quickly.
- **"Sent with Shortwave" signature** appears on lower-tier plans. Check settings to remove it on paid plans.
- **Tasklet is a separate product.** Tasklet (tasklet.ai) handles workflow automation with 3000+ app integrations, webhook triggers, and browser automation — but it's distinct from the Shortwave email client.
- **14-day trial, no permanent free tier.** Some sources mention lower-priced personal plans ($7-8.50/mo) but the current pricing page shows Business ($24/mo) as the entry point.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-superhuman` — Superhuman email client (keyboard-driven, MCP server, CRM integrations). Install:
  `npx skills add sales-skills/sales --skill sales-superhuman -a claude-code`
- `/sales-fyxer` — Fyxer AI email assistant (inbox organization, AI drafting, meeting notes). Install:
  `npx skills add sales-skills/sales --skill sales-fyxer -a claude-code`
- `/sales-sanebox` — SaneBox server-side email filtering (smart folders, any email provider, $7/mo). Install:
  `npx skills add sales-skills/sales --skill sales-sanebox -a claude-code`
- `/sales-inbox-zero` — Inbox Zero open-source AI email assistant (auto-labeling, rules API/CLI, self-hostable, $18/mo or free). Install:
  `npx skills add sales-skills/sales --skill sales-inbox-zero -a claude-code`
- `/sales-alfred` — alfred_ AI executive assistant (email triage, reply drafting, task extraction)
- `/sales-note-taker` — Choose a dedicated AI meeting note-taker. Install:
  `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Connect an MCP server to Shortwave
**User says**: "How do I connect my Notion MCP server to Shortwave so the AI assistant can pull context from my workspace?"
**Skill does**:
1. Confirms user needs Business plan ($24+/mo) for MCP consumer support
2. Walks through Settings → AI Integrations → Add custom integration
3. Explains remote vs local MCP server configuration (URL for remote, command+args for local)
4. Notes 40-tool limit and performance tradeoffs with multiple servers
5. Warns: MCP support is beta and limited to tool calls only
**Result**: User has MCP server connected to Shortwave with clear understanding of limitations

### Example 2: Compare Shortwave to Superhuman for inbox productivity
**User says**: "Should I use Shortwave or Superhuman? I use Gmail and want AI help managing my inbox."
**Skill does**:
1. Compares: Shortwave focuses on AI filters + natural language search + bundles; Superhuman focuses on keyboard speed + MCP server + CRM integrations
2. Notes pricing: Shortwave $24/mo vs Superhuman $25-33/mo
3. Explains Shortwave is an MCP consumer (connects TO tools); Superhuman exposes an MCP server (tools connect TO it)
4. Notes Superhuman has CRM integrations (Business+); Shortwave has none natively
5. Recommends Shortwave if AI-first inbox automation matters most; Superhuman if keyboard workflow and CRM sync matter more
**Result**: Clear comparison based on workflow preference

### Example 3: AI filters keep mislabeling important emails
**User says**: "My AI filter for flagging customer emails keeps catching internal team messages too"
**Skill does**:
1. Explains AI filters use natural language — vague rules produce false positives
2. Suggests refining: "Flag emails from @customer-domain.com about support requests" instead of "Flag customer emails"
3. Notes Business plan limit of 3 filters — may need to combine rules
4. Recommends testing filter changes for a few days before trusting fully
5. If the issue persists, suggests using Gmail's native filters as a pre-sort layer
**Result**: Specific filter refinement strategy with realistic expectations

## Troubleshooting

### AI search not finding old emails
**Symptom**: Natural language search returns "no results" for emails you know exist
**Cause**: Business plan limits AI search to 5-year history and 50 threads per search. Older or high-volume queries get truncated.
**Solution**: Upgrade to Premier (unlimited history, 100 threads) or Max (150 threads). For immediate workaround, use Gmail-style structured filters alongside natural language. If emails are very recent, wait a few minutes for indexing to catch up.

### AI filters over-categorizing or mislabeling
**Symptom**: Important emails getting swept into wrong labels, filters triggering on unintended messages
**Cause**: Plain-English filter rules can be ambiguous. Shortwave's AI interprets broadly — "customer emails" might match anyone outside your org.
**Solution**: Make filter rules more specific: include sender domains, keywords, or exclusions. Reduce filter count to minimize overlaps. Review filter activity weekly for the first month. If a filter consistently mislabels, delete and rewrite it rather than tweaking.

### Tasklet automations not triggering
**Symptom**: Scheduled or email-triggered Tasklet workflows don't fire
**Cause**: Tasklet is a separate product (tasklet.ai) with its own authentication and connection state. Common issues: expired OAuth tokens, misconfigured webhook URLs, or schedule timezone mismatches.
**Solution**: Check Tasklet dashboard for error logs. Reconnect the triggering service (Gmail, calendar, etc.). For webhook triggers, verify the URL is correct and the sending service is actually firing. For scheduled triggers, confirm timezone settings match your expectation.
