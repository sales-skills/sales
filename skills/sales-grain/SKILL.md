---
name: sales-grain
description: "Grain AI meeting recorder platform help — REST API for transcripts, recordings, tags, action items, and video uploads (Business+), MCP Server for Claude/ChatGPT/Cursor with built-in SPICED/MEDDICC prompts, Zapier workspace-level automation, CRM sync to HubSpot/Salesforce (Business+). Use when Grain bot won't stop joining meetings after uninstall, transcripts formatting broken when copying, recordings locked after downgrading plan, CRM sync only logging activities not structured fields, configuring Grain MCP Server in Claude or Cursor, building a Grain API pipeline for transcript export, setting up Zapier triggers for meeting automation, or choosing between Grain Free vs Starter vs Business tiers. Do NOT use for comparing Grain against Fathom/Fireflies/Gong/Avoma (use /sales-note-taker) or reviewing a specific call recording (use /sales-call-review)."
argument-hint: "[describe what you need help with in Grain]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, platform]
github: "https://github.com/grain-team"
---

# Grain Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated Grain knowledge.

1. **What are you trying to do?**
   - A) Configure Grain account/team/plan or understand pricing tiers
   - B) Build a backend integration (API, Zapier, MCP Server)
   - C) Troubleshoot bot joining / recording issues
   - D) Push transcripts/recordings into CRM, data warehouse, or Slack
   - E) Set up AI coaching, trackers, or deal board features
   - F) Evaluate Grain vs alternatives — **route to `/sales-note-taker`**

2. **Which Grain plan?**
   - A) Free (20 meetings, 1 notetaker seat)
   - B) Starter ($15-19/seat — unlimited recordings, Slack/Zapier/Productboard)
   - C) Business ($29-39/seat — CRM sync, coaching, API, trackers, deal board)
   - D) Enterprise (SSO, full API, dedicated CS)
   - E) Not sure yet

3. **What platforms do you record on?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Webex
   - E) Slack Huddles
   - F) Uploaded recordings

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| User situation | Route to |
|---|---|
| "Grain vs Fathom vs Fireflies — which should I pick" | `/sales-note-taker {question}` |
| "Review this Grain recording and score it" | `/sales-call-review {question}` |
| "Build a coaching program using Grain recordings" | `/sales-coaching {question}` |
| "Build a generic Zapier/Make/n8n workflow" | `/sales-integration {question}` |
| Anything Grain-platform-specific (API, MCP, pricing, integrations, bot behavior) | Stay here |

When routing, use the exact command: `/sales-{skill} {user's original question}`.

## Step 3 — Grain platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, integrations, plan-gated features, MCP Server setup, API access.

Answer using only the relevant section. Don't dump the entire reference.

## Step 4 — Actionable guidance

Once you have the relevant reference content:

1. **For API questions** — note that API access requires Business plan (since Dec 2025) or Enterprise. Base URL is `api.grain.com`. Auth via Bearer token (`GRAIN_API_TOKEN`). Developer docs are at `developers.grain.com`. Rate-limit guidance: 1 req/sec recommended based on official examples.
2. **For MCP Server setup** — point to the native integration URL `https://api.grain.com/_/mcp` for Claude, or the `mcp-remote` config for Cursor/Windsurf. Free for all plans. Built-in prompts: Voice of Customer, Pipeline IQ, SPICED/MEDDICC, Sales Skill Scorecards.
3. **For CRM sync** — HubSpot and Salesforce require Business plan ($29/seat annual). Sync is activity-level (notes attached to contacts/deals), not structured field-level updates like Gong or Avoma. For structured CRM field enrichment, suggest using the API + Zapier to map specific transcript data to CRM fields.
4. **For bot issues** — Grain bot auto-joins via calendar integration. To stop it: disconnect calendar in Grain settings, remove the Grain app from Zoom/Meet/Teams. Known issue: bot can persist after uninstall — check for lingering calendar integrations and app marketplace connections.
5. **For Zapier workflows** — rebuilt March 2026 with workspace-level connections and enhanced trigger controls. Starter plan required. Cannot export video recordings via Zapier (only data like summaries/transcripts).

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research (2026-04) — review plan-gated features and integration gotchas that may be outdated.*

- **API is Business+ only.** Free and Starter plans cannot use the REST API. Developer docs at `developers.grain.com` are Notion-hosted and may load slowly.
- **CRM integrations (HubSpot, Salesforce) require Business plan.** Starter only gets Slack, Productboard, and Zapier. Aircall also requires Business.
- **Free plan caps at 20 meetings.** After 20 meetings, you need a paid seat. Free *viewer* seats are unlimited but cannot record.
- **Downgrading locks recordings.** Users report losing access to recordings/meetings when downgrading from a paid plan. Export data before downgrading.
- **Viewer seat paywall.** Grain eliminated the option to add non-recorder users for free on paid plans — colleagues who only view highlights must now have paid seats (or use the free viewer tier with limited access).
- **Transcript copy-paste formatting is poor.** Copying text directly from Grain transcripts produces badly formatted output. Export via API or download as file for cleaner results.
- **Bot takes a participant slot.** The Grain recorder bot occupies a visible meeting slot, which can be disruptive. Desktop capture mode avoids this but requires the Grain desktop app.
- **Zapier cannot export video recordings** — only meeting data (summaries, transcripts, metadata). Use the API for video/recording access.

## Related skills

- `/sales-note-taker` — Picking a note-taker (Fathom vs Fireflies vs Avoma vs Gong vs Otter vs Fellow vs Grain vs Sembly vs Read.ai) and cross-vendor integration patterns
- `/sales-call-review` — Review a specific Grain recording and score against MEDDPICC/SPIN/Challenger
- `/sales-coaching` — Use Grain recordings in coaching programs, onboarding, certifications
- `/sales-integration` — Zapier/Make/n8n workflows to move Grain data to other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Bot keeps joining after I removed Grain
**User says**: "I uninstalled Grain but the bot still joins my Zoom calls — how do I stop it?"
**Skill does**:
1. Checks if calendar integration is still connected (Google Calendar or Outlook) — this is the auto-join trigger
2. Walks through disconnecting calendar in Grain settings, then removing the Grain app from Zoom Marketplace
3. Notes that lingering Google Meet/Teams app permissions may also trigger the bot
4. Suggests desktop capture mode as a non-invasive alternative if they still want to use Grain
**Result**: Bot removed by disconnecting all trigger sources.

### Example 2: Setting up MCP Server in Claude
**User says**: "How do I connect Grain to Claude so I can query my meetings?"
**Skill does**:
1. Points to the native integration: add "Grain" in Claude settings with URL `https://api.grain.com/_/mcp`
2. Lists the four built-in prompts: Voice of Customer, Pipeline IQ, SPICED/MEDDICC, Sales Skill Scorecards
3. For Cursor/Windsurf: provides the `mcp-remote` config JSON
4. Notes it's free for all plans — no Business tier required
**Result**: MCP Server connected with ready-to-use one-click reports.

### Example 3: CRM sync only showing activity notes
**User says**: "Grain syncs to HubSpot but it just logs an activity — I need specific fields like next steps and deal amount updated"
**Skill does**:
1. Confirms Grain's native HubSpot sync is activity-level (notes/recordings on contact/deal timeline)
2. Explains this is less structured than Gong or Avoma which can map to specific CRM fields
3. Proposes a Zapier workflow: Grain meeting → extract action items via API → update HubSpot deal properties
4. If structured CRM enrichment is critical, suggests evaluating Avoma or Gong via `/sales-note-taker`
**Result**: Workaround via Zapier + API, with upgrade path if native field mapping is essential.

## Troubleshooting

### Grain bot won't stop joining meetings
**Symptom**: Bot appears in Zoom/Meet/Teams calls even after uninstalling Grain
**Cause**: Calendar integration (Google Calendar or Outlook) is still connected, triggering auto-join
**Solution**: In Grain settings, disconnect all calendar integrations. Then remove the Grain app from your video platform's marketplace (Zoom App Marketplace, Google Workspace Marketplace, Teams Admin Center). Check for any remaining OAuth app permissions in your Google/Microsoft account settings.

### Recordings disappeared after plan change
**Symptom**: Previously recorded meetings are inaccessible after downgrading
**Cause**: Downgrading from a paid plan restricts access to recordings made on the higher tier
**Solution**: Before downgrading, export all recordings and transcripts via the API (Business+) or download them individually. Contact Grain support to request temporary access for data export if already downgraded.

### Transcript formatting broken when copying
**Symptom**: Copy-pasting from the Grain transcript view produces garbled formatting
**Cause**: The web UI's rich text doesn't copy cleanly to plain text contexts
**Solution**: Use the API endpoint to fetch transcripts in JSON format (`transcript_format=json`), which gives structured speaker-labeled text. Alternatively, use the Zapier integration to export transcript text to Notion/Google Docs where formatting is preserved.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.
