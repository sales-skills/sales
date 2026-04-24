---
name: sales-scribbl
description: "Scribbl platform help — bot-free AI meeting notes Chrome extension for Google Meet with instant summaries, action items, and AI Copilot chat. Use when setting up Scribbl for automatic meeting recording and transcription on Google Meet, troubleshooting Scribbl Chrome extension not recording or transcription missing, configuring team sharing and meeting library organization with collections, deciding between Scribbl free and Pro plans or evaluating whether Team plan CRM integrations are worth it, comparing Scribbl to other bot-free note-takers like Tactiq or Granola, or wondering why Scribbl only works on Google Meet and when Zoom and Teams support is coming. Do NOT use for comparing AI note-takers across all platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Scribbl]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
---

# Scribbl Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Scribbl (Chrome extension install, recording, transcription)
   - B) Team features (shared library, collections, admin controls)
   - C) AI features (summaries, action items, AI Copilot chat)
   - D) Integrations (Slack, Google Drive, CRM on Team plan)
   - E) Plan selection (Free vs Pro vs Team) or comparing to alternatives
   - F) Troubleshooting (recording not starting, transcription issues)

2. **Which meeting platform?**
   - A) Google Meet (fully supported)
   - B) Zoom (coming soon)
   - C) Microsoft Teams (coming soon)

3. **Team size?**
   - A) Solo / individual
   - B) Small team (2-5)
   - C) Larger team (6+, needs Team plan)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| General CRM/tool integration patterns | `/sales-integration [question]` |

If the question is Scribbl-specific, continue to Step 3.

## Step 3 — Scribbl platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, workflows, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Quick start**: Install Chrome extension → join Google Meet → Scribbl records silently → AI notes appear in new tab after call
- **Team workflow**: Upgrade to Team plan → set up shared library → configure auto-sharing rules → connect Slack/Google Drive/CRM
- **Plan decision**: Free (15 meetings/mo, 2-month video) → Pro ($13/mo annual, unlimited meetings, 1-year video, AI Chat) → Team (custom, CRM integrations, unlimited team size, Zoom/Teams support)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Google Meet only (currently)** — Zoom and Teams support is listed as "coming soon" but no public timeline. If you need multi-platform support today, look at Tactiq, Fathom, or Fireflies.
- **Chrome browser required** — Scribbl is a Chrome extension, not a desktop app or bot. Users on Firefox, Safari, or Arc won't be able to use it.
- **Pro plan caps teams at 5 members** — teams of 6+ must contact sales for the Team plan with custom pricing.
- **Free tier video expires after 2 months** — transcripts and AI notes persist, but video recordings are deleted. Pro extends to 1 year.
- **No public API** — no REST endpoints, no webhooks, no MCP. Custom integrations are not possible. CRM integration is Team-plan-only and details are vague.
- **CRM integration details unclear** — the Team plan advertises "CRM integrations" but doesn't specify which CRMs or how deep the sync goes. Confirm with sales before assuming Salesforce/HubSpot support.
- **AI Copilot requires Pro** — the GPT-4-powered chat with meeting content is unlimited on Pro but not available on Free.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-tactiq` — Tactiq platform help — closest competitor (also a bot-free Chrome extension for Google Meet). Install: `npx skills add sales-skills/sales --skill sales-tactiq -a claude-code`
- `/sales-granola` — Granola platform help — another bot-free AI notepad alternative. Install: `npx skills add sales-skills/sales --skill sales-granola -a claude-code`
- `/sales-integration` — Connect tools to CRM, data warehouse, or other tools via Zapier or webhooks. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I just installed Scribbl but it didn't record my last Google Meet call — nothing showed up after the meeting"
**Skill does**: Walks through troubleshooting — check Chrome extension is enabled, verify Scribbl icon is visible in browser toolbar, confirm microphone permissions, check if the 15 free meeting credit limit was hit, verify the call was on Google Meet (not Zoom/Teams).

**User**: "My team of 8 people wants to use Scribbl but the Pro plan only allows 5 — what are our options?"
**Skill does**: Explains Team plan is required for 6+ members, contact sales for custom pricing, notes that Team plan also unlocks CRM integrations and Zoom/Teams support. Suggests Fathom or Fireflies as alternatives if Team pricing is too high.

**User**: "I want to automatically push Scribbl meeting notes into our HubSpot CRM — how do I set that up?"
**Skill does**: Explains CRM integration is Team-plan-only with custom pricing, CRM details are vague — recommends confirming HubSpot support with Scribbl sales. Suggests manual Google Docs → Zapier → HubSpot as a workaround on Pro. Points to `/sales-integration` for general patterns.

## Troubleshooting

### Chrome extension not recording meetings
**Symptom**: Scribbl icon shows in toolbar but no recording happens during Google Meet calls.
**Fix**: Check that microphone permission is granted to the extension (right-click Scribbl icon → Manage Extension → Site access). Verify you're on a Google Meet call (not Zoom/Teams which aren't supported yet). Try disabling other meeting extensions that may conflict (Tactiq, Otter, etc.). Clear Chrome cache and restart the browser. If the 15-meeting free limit is reached, upgrade to Pro.

### AI summary or action items missing after call
**Symptom**: Recording appears in library but AI-generated notes are blank or incomplete.
**Fix**: AI processing happens server-side after the call ends — wait 2-5 minutes. Very short calls (<2 minutes) may not generate meaningful summaries. Check your internet connection during the call — if it dropped, the recording may be incomplete. If the issue persists, re-open the meeting page and refresh.

### Team members can't see shared meetings
**Symptom**: Meetings shared to the team library don't appear for other members.
**Fix**: Verify all team members are on the same Scribbl workspace (not separate individual accounts). Check sharing settings — meetings default to private unless explicitly shared. On Free/Pro, team size is capped at 5 — members 6+ need the Team plan. Admin must invite members through the Scribbl dashboard.
