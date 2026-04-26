---
name: sales-superpowered
description: "Superpowered platform help — bot-free AI meeting note-taker with device-audio capture, AI Templates, and CRM sync. Use when evaluating Superpowered for your team, setting up AI Templates for sales calls or 1:1s, connecting Superpowered to Salesforce or HubSpot, troubleshooting auto-join not detecting calendar meetings, or comparing Superpowered to other bot-free note-takers like Jamie or Granola. Do NOT use for general note-taker comparison across all tools (use /sales-note-taker) or sales coaching program design (use /sales-coaching)."
argument-hint: "[describe what you need help with in Superpowered]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Superpowered Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need?**
   - A) Evaluate Superpowered for my team (features, pricing, fit)
   - B) Set up AI Templates for my use case (sales, 1:1s, interviews, custom)
   - C) Connect Superpowered to my CRM or other tools
   - D) Troubleshoot an issue (auto-join, transcription, integrations)
   - E) Compare Superpowered to another bot-free note-taker
   - F) Other

2. **Which plan are you on (or considering)?**
   - A) Free
   - B) Basic ($25/mo)
   - C) Pro ($50/mo)
   - D) Enterprise
   - E) Not sure yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about… | Route to |
|---|---|
| Choosing between multiple note-takers | `/sales-note-taker [user's question]` |
| Building a coaching program around call recordings | `/sales-coaching [user's question]` |
| Connecting tools via Zapier/webhooks/API in general | `/sales-integration [user's question]` |
| CRM data quality or field mapping | `/sales-data-hygiene [user's question]` |
| Anything Superpowered-specific | Continue to Step 3 |

When routing to another skill, provide the exact command.

## Step 3 — Superpowered platform reference

**Read `references/platform-guide.md`** for the full platform reference — pricing tiers, integrations, template setup, CRM sync, and known limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Evaluating?** Compare Superpowered's bot-free approach vs alternatives. Key differentiators: no audio stored, SOC-2/GDPR, AI Templates for structured output. Key gaps: no mobile, no API, CRM is Pro-only ($50/mo).
- **Setting up templates?** Guide them through creating custom templates for their meeting type. Templates enforce consistent note structure.
- **CRM integration?** Pro plan required. Walk through Salesforce or HubSpot connection. Zapier available for other CRMs.
- **Troubleshooting?** Check calendar connection, app permissions, and audio device access.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **CRM integrations are Pro-only ($50/mo)** — Free and Basic plans have no Salesforce/HubSpot sync. If CRM sync is a must, compare to tools with cheaper CRM tiers.
- **Desktop only** — no mobile app, no Linux. If you need in-person meeting capture on a phone, look at alternatives like Wave, Omi, or Plaud.
- **No public API** — you cannot build custom integrations beyond what Zapier offers. If you need API access for a data pipeline, consider Fathom or Fireflies.
- **Audio deleted immediately, transcripts retained 7 days** — this is a privacy feature but means you cannot go back and re-listen. Notes are the only durable artifact.
- **Auto-join requires calendar connection** — it won't detect ad-hoc calls or meetings on unconnected calendars.

## Related skills

- `/sales-note-taker` — Compare note-takers, plan API integrations, choose between bot-based and bot-free tools
- `/sales-coaching` — Build coaching programs, onboard reps, design scorecards
- `/sales-integration` — Connect tools via Zapier, webhooks, or APIs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User prompt**: "I need a meeting note-taker that doesn't add a bot to the call — is Superpowered a good fit?"
**What the skill does**: Walks through Superpowered's bot-free approach (device audio capture, no recording stored), compares to other bot-free options (Jamie, Granola, Krisp), and helps the user decide based on their CRM needs and budget.

**User prompt**: "How do I set up Superpowered to auto-fill my Salesforce after every call?"
**What the skill does**: Confirms Pro plan is required, walks through Salesforce integration setup, explains which meeting data syncs, and notes limitations.

**User prompt**: "Superpowered isn't joining my Google Meet calls automatically"
**What the skill does**: Troubleshoots calendar connection, app permissions, and auto-join settings. Checks if the meeting is on a connected calendar.

## Troubleshooting

### Auto-join not detecting meetings
**Symptom**: Superpowered doesn't join scheduled meetings automatically
**Solution**: Verify the calendar is connected (Settings → Calendars). Free plan supports 1 calendar only. Check that the meeting has a video link (Zoom/Meet/Teams URL) in the calendar event. Restart the desktop app.

### CRM sync not available
**Symptom**: Can't find Salesforce or HubSpot integration options
**Solution**: CRM integrations require the Pro plan ($50/mo). Upgrade from Basic or Free. If already on Pro, check Settings → Integrations and reconnect the CRM.

### Transcription accuracy issues with accents or technical terms
**Symptom**: AI notes contain errors for non-native English speakers or domain-specific jargon
**Solution**: Superpowered supports 50+ languages — ensure the correct language is selected. For domain jargon, use custom AI Templates with specific terminology to guide the AI output.
