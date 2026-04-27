---
name: sales-superhuman
description: "Superhuman platform help — fastest AI email client with keyboard-driven workflow, Split Inbox, AI Write, read receipts, MCP server for Claude Code, and Share Availability scheduling ($25-40/user/mo, now part of Grammarly). Use when setting up Superhuman for Gmail or Outlook, Split Inbox isn't categorizing emails correctly, AI Write drafts don't match your voice, comparing Superhuman to Shortwave or Fyxer or SaneBox, wondering if Superhuman is worth the price, connecting Superhuman MCP server to Claude Code, using Ask AI or Auto Drafts on Business plan, CRM integration with Salesforce or HubSpot not syncing, read receipts not showing opens, or troubleshooting slow AI features after the Grammarly acquisition. Do NOT use for choosing a dedicated meeting note-taker (use /sales-note-taker). Do NOT use for general AI agent building (use /sales-lindy). Do NOT use for AI executive assistant comparison (use /sales-alfred)."
argument-hint: "[describe what you need help with in Superhuman]"
license: MIT
version: 1.0.0
tags: [sales, email-client, ai-email, productivity, platform]
github: "https://github.com/superhuman"
---

# Superhuman Platform Help

Helps with everything related to using Superhuman — the fastest AI email client with keyboard-driven workflow, Split Inbox, AI drafting, read receipts, and MCP server for Claude Code integration. Now part of Grammarly (acquired June 2025).

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are you trying to do with Superhuman?**
   - A) Set up Superhuman for the first time (Gmail or Outlook)
   - B) Configure Split Inbox or Auto Labels
   - C) Improve AI Write draft quality
   - D) Connect MCP server to Claude Code or ChatGPT
   - E) Set up CRM integration (Salesforce, HubSpot, Pipedrive)
   - F) Compare Superhuman to alternatives
   - G) Troubleshoot performance issues
   - H) Something else — describe it

2. **Which email provider?**
   - A) Gmail / Google Workspace
   - B) Outlook / Microsoft 365
   - C) Both

3. **Which plan are you on (or considering)?**
   - A) Starter ($25-30/mo) — basic email, Share Availability, Team Comments
   - B) Business ($33-40/mo) — Ask AI, Auto Drafts, Auto Labels, CRM, MCP Server
   - C) Enterprise (custom) — SSO, SCIM, audit logs, BYOK
   - D) Not sure yet

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Choosing a meeting note-taker across platforms → "Run: `/sales-note-taker {user's original question}`"
- AI executive assistant comparison (alfred_ etc.) → "Run: `/sales-alfred {user's original question}`"
- CRM integration strategy → "Run: `/sales-integration {user's original question}`"
- Meeting scheduling strategy → "Run: `/sales-meeting-scheduler {user's original question}`"
- Email tracking strategy → "Run: `/sales-email-tracking {user's original question}`"

Otherwise, answer directly from the platform reference below.

## Step 3 — Superhuman platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, plan gates, MCP server tools, integrations, keyboard shortcuts, and workarounds.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For improving AI Write drafts:**
1. Send more emails manually — Superhuman learns from your writing style
2. On Business plan, AI Write uses Grammarly's voice model for better results
3. Use Cmd+J to trigger AI Write, or let Auto Drafts pre-generate replies
4. If tone is wrong, try adjusting the prompt or rewriting manually to train the model

**For MCP server setup:**
1. Requires Business plan or higher
2. Enterprise accounts need CSM to enable MCP access
3. Configure in your AI client (Claude Code, Claude Desktop, ChatGPT)
4. Available tools: `query_email_and_calendar`, `list_threads`, `create_or_update_draft`, `create_or_update_event`

**For Split Inbox issues:**
1. Split Inbox auto-sorts into Important, VIP, News, Calendar, Other
2. Move mislabeled emails manually — Superhuman learns from corrections
3. On Business plan, use Auto Labels for custom AI categorization
4. VIP contacts can be pinned to always appear in Important

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially pricing that may change post-acquisition.*

- **MCP Server requires Business plan ($33+/mo).** Starter users cannot connect Superhuman to Claude Code or ChatGPT. This is the #1 developer-relevant feature gate.
- **No public REST API.** Superhuman has no documented API endpoints, no webhooks, and no Zapier triggers. The MCP server is the only programmatic interface.
- **Grammarly acquisition changed pricing.** Since June 2025, Superhuman is bundled with Grammarly, Coda, and Go. Standalone Superhuman Mail requires at least Starter ($25-30/mo). Some users report AI features slowed post-acquisition.
- **CRM integrations are Business-only.** Salesforce, HubSpot, and Pipedrive connectors require the Business plan. No other CRMs supported.
- **No meeting notes.** Unlike Fyxer or dedicated note-takers, Superhuman is email+calendar only. Route to `/sales-note-taker` for meeting intelligence.
- **Read receipts have privacy limits.** Apple Mail Privacy Protection blocks pixel tracking. Business plan's Recent Opens Feed is best-effort, not reliable for all recipients.
- **Mobile app is limited.** Desktop keyboard-driven workflow is the core experience. Mobile lacks many power features.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-fyxer` — Fyxer AI email assistant (inbox organization, AI drafting, meeting notes). Install:
  `npx skills add sales-skills/sales --skill sales-fyxer -a claude-code`
- `/sales-shortwave` — Shortwave AI-native Gmail client (AI filters, Ghostwriter, MCP consumer). Install:
  `npx skills add sales-skills/sales --skill sales-shortwave -a claude-code`
- `/sales-sanebox` — SaneBox server-side email filtering (smart folders, any email provider, $7/mo). Install:
  `npx skills add sales-skills/sales --skill sales-sanebox -a claude-code`
- `/sales-inbox-zero` — Inbox Zero open-source AI email assistant (auto-labeling, rules API/CLI, self-hostable, $18/mo or free). Install:
  `npx skills add sales-skills/sales --skill sales-inbox-zero -a claude-code`
- `/sales-clean-email` — Clean Email inbox cleanup (bulk actions, Auto Clean rules, Unsubscriber, $29.99/yr). Install:
  `npx skills add sales-skills/sales --skill sales-clean-email -a claude-code`
- `/sales-alfred` — alfred_ AI executive assistant (email triage, reply drafting, task extraction)
- `/sales-note-taker` — Choose a dedicated AI meeting note-taker. Install:
  `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-meeting-scheduler` — Meeting scheduling strategy across tools
- `/sales-email-tracking` — Email engagement tracking strategy
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Connect Superhuman MCP server to Claude Code
**User says**: "How do I connect Superhuman to Claude Code so I can manage email from the terminal?"
**Skill does**:
1. Confirms user needs Business plan ($33+/mo) for MCP server access
2. Explains the 4 available MCP tools (query, list threads, draft, events)
3. Walks through MCP configuration in Claude Code settings
4. Notes that Enterprise accounts need CSM to enable access first
5. Warns: MCP can draft and send emails — review carefully before authorizing send actions
**Result**: User has Superhuman MCP connected to Claude Code with clear understanding of capabilities and risks

### Example 2: Compare Superhuman to Fyxer for inbox productivity
**User says**: "Should I use Superhuman or Fyxer AI for managing my sales inbox?"
**Skill does**:
1. Compares: Superhuman focuses on speed + keyboard workflow + Split Inbox; Fyxer focuses on AI organization + voice-trained drafts + meeting notes
2. Notes Superhuman has MCP server for Claude Code; Fyxer has no automation surface
3. Compares pricing: Superhuman $25-40/mo vs Fyxer $22.50-50/mo
4. Notes Fyxer includes meeting notes; Superhuman is email+calendar only
5. Recommends Superhuman if speed and keyboard workflow matter most; Fyxer if you want meeting notes and hands-off inbox sorting
**Result**: Clear comparison based on workflow preference

### Example 3: Troubleshoot slow AI features
**User says**: "Superhuman AI is really slow since the Grammarly acquisition — emails take minutes to open"
**Skill does**:
1. Acknowledges this is a widely reported issue post-July 2025 acquisition
2. Suggests: check internet speed, try disabling Ask AI/Auto Drafts temporarily to isolate
3. Notes that clearing the Superhuman cache (Cmd+K → "Clear cache") sometimes helps
4. If persistent, recommends contacting support with browser/OS details
5. If AI features are the main value, suggests evaluating alternatives like Shortwave ($7/mo) or Fyxer ($22.50/mo)
**Result**: Troubleshooting steps with honest assessment of post-acquisition issues

## Troubleshooting

### AI Write drafts sound generic or wrong
**Symptom**: AI-generated replies don't match your tone or get details wrong
**Cause**: AI Write learns from your sent email history. Short history or inconsistent style produces poor drafts. Post-acquisition, the model uses Grammarly's engine which may behave differently than the original.
**Solution**: Send more emails manually to build training data. Use Cmd+J and provide specific instructions. Always review drafts before sending. If quality doesn't improve after 2+ weeks, the tool may not fit your communication style.

### Split Inbox miscategorizing emails
**Symptom**: Important client emails ending up in News or Other instead of Important
**Cause**: Split Inbox is AI-driven and takes time to learn your patterns
**Solution**: Manually move mislabeled emails to the correct split — Superhuman learns from corrections. Pin VIP contacts. On Business plan, use Auto Labels for custom categorization rules. Give it 1-2 weeks of consistent corrections.

### CRM integration not syncing
**Symptom**: Emails and activity not appearing in Salesforce/HubSpot/Pipedrive
**Cause**: CRM integrations are Business plan only and require explicit setup
**Solution**: Verify you're on Business plan. Check Superhuman Settings → Integrations → reconnect the CRM. Ensure the contact exists in both systems. If sync is delayed, allow up to 15 minutes for propagation.
