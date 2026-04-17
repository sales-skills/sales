---
name: sales-sembly
description: "Sembly AI meeting platform help — agentic meeting intelligence with AI-generated client deliverables (proposals, briefs, decks), Semblian AI chat, task auto-detection, 48-language transcription, webhook-first automations, 10 native CRM connectors (Salesforce, HubSpot, Zoho, Pipedrive, Freshsales, Attio, Close, Capsule, TeamLeader, Copper), MCP access, Zapier/n8n triggers. Use when Sembly splits long meetings into segments, calendar keeps disconnecting so Sembly misses meetings, speaker recognition failing in large calls, AI credits running out on Semblian, meeting notes not syncing to CRM, setting up Sembly webhook automations for transcripts or tasks, choosing between Basic vs Pro vs MAX plans, or configuring MCP access in Claude. Do NOT use for comparing Sembly against Fathom/Fireflies/Gong/Avoma (use /sales-note-taker) or reviewing a specific call recording (use /sales-call-review)."
argument-hint: "[describe what you need help with in Sembly]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, platform]
---

# Sembly Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated Sembly knowledge.

1. **What are you trying to do?**
   - A) Configure Sembly account/team/plan or understand pricing tiers
   - B) Build a backend integration (webhooks, Zapier, n8n, custom automations)
   - C) Troubleshoot bot joining / recording / calendar issues
   - D) Push transcripts/notes/tasks into CRM, PM tools, or Slack
   - E) Use Semblian AI chat or AI-generated documents
   - F) Evaluate Sembly vs alternatives — **route to `/sales-note-taker`**

2. **Which Sembly plan?**
   - A) Basic ($17/mo, 1 user, limited automations)
   - B) Pro ($29/user/mo, up to 40 users, MCP, workspace automations)
   - C) MAX ($39/user/mo, 3-500 users, HIPAA, custom SSO)
   - D) Enterprise (custom)
   - E) Not sure yet

3. **What platforms do you record on?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Webex
   - E) In-person (microphone recording)

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| User situation | Route to |
|---|---|
| "Sembly vs Fathom vs Fireflies — which should I pick" | `/sales-note-taker {question}` |
| "Review this Sembly recording and score it" | `/sales-call-review {question}` |
| "Build a coaching program using meeting recordings" | `/sales-coaching {question}` |
| "Build a generic Zapier/Make/n8n workflow" | `/sales-integration {question}` |
| Anything Sembly-platform-specific (pricing, integrations, automations, AI features) | Stay here |

When routing, use the exact command: `/sales-{skill} {user's original question}`.

## Step 3 — Sembly platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, integrations, plan-gated features, automation setup, CRM connectors.

Answer using only the relevant section. Don't dump the entire reference.

## Step 4 — Actionable guidance

Once you have the relevant reference content:

1. **For automation/webhook questions** — Sembly uses outbound automations (HTTPS POST to your endpoint). Configure in My Automations → Custom tab. Supports transcripts, meeting notes, and tasks. Filter by team, keywords, or conversation type. Zapier triggers: New Meeting Notes, New Tasks, New Transcription.
2. **For CRM sync** — Sembly has 10 native CRM connectors. HubSpot integration adds meeting notes as Meeting Activities under corresponding contacts/companies. Configure in Sembly account settings, no third-party app needed.
3. **For AI features** — Semblian AI chat (multi-meeting on Pro+) uses AI credits. AI-generated documents (proposals, briefs, decks) capped at 5/mo on Pro, 40/mo on MAX. MCP access requires Pro+.
4. **For plan selection** — Basic is solo users, Pro unlocks team features + MCP + workspace automations, MAX adds HIPAA + SSO + audit logs. Annual billing saves 30%.
5. **For bot/calendar issues** — Sembly bot auto-joins via calendar integration. Calendar disconnects are a known issue — reconnect in settings, check OAuth permissions.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research (2026-04) — review plan-gated features and integration gotchas that may be outdated.*

- **Long meetings (>3 hours) get split into segments.** Sembly fragments extended meetings into smaller chunks instead of keeping them as one. No workaround — monitor if this changes in future updates.
- **No DOCX/Word export.** Tasks, summaries, and key items cannot be exported to Word format. Use webhook automations to push structured data to Google Docs or Notion instead.
- **AI credits are consumed by Semblian chat.** Pro gets 5 AI documents/insights per month, MAX gets 40. Heavy users can burn through credits quickly. No unlimited option exists.
- **Speaker recognition degrades with 5+ participants.** Large meetings produce misattributed speaker labels. Smaller breakout groups improve accuracy.
- **Calendar disconnection is a recurring issue.** Sembly can silently disconnect from Google Calendar or Outlook, causing the bot to miss meetings. Check connection status regularly in settings.
- **Custom vocabulary not available on all plans.** Pro+ supports custom vocabulary for transcription accuracy — Basic does not.
- **MCP access requires Pro plan.** Basic plan cannot use MCP integrations with Claude or other AI tools.
- **No traditional REST/GraphQL API.** Sembly's integration model is webhook-first (outbound automations). No inbound API for querying meetings programmatically — use Zapier/n8n for pull-based workflows.

## Related skills

- `/sales-note-taker` — Picking a note-taker (Fathom vs Fireflies vs Avoma vs Gong vs Otter vs Fellow vs Grain vs Sembly vs Read.ai) and cross-vendor integration patterns
- `/sales-call-review` — Review a specific recording and score against MEDDPICC/SPIN/Challenger
- `/sales-coaching` — Use meeting recordings in coaching programs
- `/sales-integration` — Zapier/Make/n8n workflows to move meeting data to other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Long meetings getting fragmented
**User says**: "My 4-hour board meeting got split into 3 separate meetings in Sembly — can I merge them?"
**Skill does**:
1. Confirms this is a known Sembly behavior — meetings over ~3 hours are split into segments
2. Notes there's no native merge feature as of 2026-04
3. Suggests workaround: use Semblian AI chat (Pro+) to query across all segments as one conversation
4. For a unified export, use webhook automation to push all segments to a single Notion page or Google Doc
**Result**: Workaround via AI chat and automation, with acknowledgment of the limitation.

### Example 2: Setting up webhook automation for transcript export
**User says**: "I want Sembly to push every meeting transcript to our internal tool via webhook"
**Skill does**:
1. Walks through: My Automations → Custom tab → New Automation → select Transcription data type
2. Configure destination URL (HTTPS endpoint), set filters (team, keywords, all meetings)
3. Notes payload includes speaker labels, timestamps, meeting metadata
4. Recommends Pro+ for workspace-wide automations (Basic only gets personal automations)
**Result**: Webhook configured with correct plan requirements noted.

### Example 3: Choosing between Pro and MAX
**User says**: "My 15-person sales team needs Sembly with HIPAA compliance — which plan?"
**Skill does**:
1. HIPAA requires MAX plan ($39/user/mo, $30 annual)
2. MAX also adds audit log, HD video, custom SSO, custom SMTP, sharing groups
3. For 15 users on annual billing: $30 × 15 = $450/mo
4. Notes MAX minimum is 3 users (15 qualifies), maximum 500
5. If they need custom contracts or dedicated support → Enterprise
**Result**: Clear plan recommendation with pricing math and gating features explained.

## Troubleshooting

### Long meetings split into segments
**Symptom**: Meetings lasting 3+ hours appear as multiple separate entries
**Cause**: Sembly fragments extended meetings into shorter segments for processing
**Solution**: No native merge exists. Use Semblian AI chat (Pro+) to query across segments. For unified export, set up a webhook automation that concatenates segments by meeting title and date in your downstream tool.

### Sembly bot missing meetings
**Symptom**: Bot doesn't join some meetings even though calendar is connected
**Cause**: Calendar integration silently disconnects — known recurring issue
**Solution**: Check calendar connection in Sembly settings → reconnect if disconnected. Verify OAuth permissions haven't been revoked in Google Workspace or Microsoft 365 admin. Set a weekly reminder to check connection status until Sembly fixes the reliability.

### Meeting notes not appearing in CRM
**Symptom**: Native CRM integration configured but notes aren't syncing
**Cause**: CRM sync matches participant emails to CRM contacts — if emails don't match, notes aren't attached
**Solution**: Verify participant emails in Sembly match contact emails in CRM. For HubSpot, check that Meeting Activities are enabled in the integration settings. If using Zapier instead of native integration, ensure the trigger (New Meeting Notes) is firing — check Zapier task history for errors.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.
