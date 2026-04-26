---
name: sales-rimo
description: "Rimo Voice platform help — Japanese-optimized AI meeting transcription and summarization with ISO 27001/27017 compliance and Japan-hosted data. Use when evaluating Rimo Voice for a Japanese-first team, setting up bot recording for Zoom/Teams/Meet/Webex, configuring custom dictionaries for domain terminology, troubleshooting transcription accuracy for Japanese or English, comparing Rimo to other note-takers for Japanese meetings, or understanding Rimo pricing (Solo $9/mo, Business $15/mo launch). Do NOT use for general note-taker comparison across all tools (use /sales-note-taker) or sales coaching program design (use /sales-coaching)."
argument-hint: "[describe what you need help with in Rimo Voice]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Rimo Voice Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need?**
   - A) Evaluate Rimo Voice for my team (features, pricing, fit)
   - B) Set up Rimo for Japanese meeting transcription
   - C) Troubleshoot an issue (bot not joining, accuracy, credits)
   - D) Compare Rimo to another note-taker
   - E) Other

2. **Which plan are you on (or considering)?**
   - A) Free trial
   - B) Solo ($9/mo launch)
   - C) Business ($15/mo launch)
   - D) Corporate (custom)
   - E) Not sure yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to |
|---|---|
| Choosing between multiple note-takers | `/sales-note-taker [user's question]` |
| Building a coaching program around call recordings | `/sales-coaching [user's question]` |
| Connecting tools via Zapier/webhooks/API in general | `/sales-integration [user's question]` |
| CRM data quality or field mapping | `/sales-data-hygiene [user's question]` |
| Anything Rimo-specific | Continue to Step 3 |

When routing to another skill, provide the exact command.

## Step 3 — Rimo platform reference

**Read `references/platform-guide.md`** for the full platform reference — pricing tiers, integrations, calendar setup, dictionary configuration, and known limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Evaluating?** Rimo's strength is Japanese transcription accuracy with ISO 27001/27017 compliance and Japan-hosted data. Key gaps: no API, no CRM integration, no Zapier/Make, AI credits are limited per plan.
- **Setting up?** Guide through calendar connection, voiceprint registration, custom dictionary entries. Do voiceprints before the first real meeting.
- **Troubleshooting?** Check calendar connection, bot join timing (30-60s delay is normal), AI credit balance.
- **Comparing?** For Japanese-first teams with compliance needs, Rimo is strong. For API/CRM integration needs, recommend Fathom or Fireflies instead.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

- **No public API** — Rimo has no API, webhooks, Zapier, or Make connectors. "API" is listed as upcoming but undated. If you need programmatic access to transcripts, use a tool with an API (Fathom, Fireflies, MeetGeek).
- **No CRM integration** — no HubSpot, Salesforce, or any CRM connector. Meeting insights must be manually exported (CSV/Excel/PDF) and pasted into CRM.
- **AI credits are limited** — Solo gets 100/mo, Business gets 1,000/mo. AI summaries and AI chat consume credits. When credits run out, only raw transcription is available (no AI features). Monitor usage.
- **iOS app only for mobile** — no Android app. Desktop is web-only. If your team is Android-heavy, this is a blocker.
- **Launch pricing is temporary** — Solo $9/mo and Business $15/mo are 50% off introductory prices. Regular prices are $18/mo and $30/mo. Price is locked while subscription stays active.
- **Bot takes 30-60 seconds to join** — the recording bot won't appear instantly when a meeting starts. Calendar integration must be connected first.

## Related skills

- `/sales-note-taker` — Compare note-takers, plan API integrations, choose between bot-based and bot-free tools
- `/sales-coaching` — Build coaching programs, onboard reps, design scorecards
- `/sales-integration` — Connect tools via Zapier, webhooks, or APIs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User prompt**: "Our Tokyo sales team needs accurate Japanese meeting notes with ISO compliance. Is Rimo Voice a good fit?"
**What the skill does**: Confirms Rimo is optimized for Japanese transcription with ISO 27001/27017 and Japan-hosted data. Notes the lack of API and CRM integration as limitations. Recommends Business plan ($15/mo) for team features. Suggests pairing with manual CRM export workflow.

**User prompt**: "Can I pull Rimo transcripts into our Snowflake warehouse via API?"
**What the skill does**: States Rimo has no API (upcoming but undated). Suggests manual CSV/Excel export as a workaround. Recommends Fathom or Fireflies if API integration is a hard requirement.

**User prompt**: "What's the difference between Rimo Solo and Business plans? We have a 5-person team."
**What the skill does**: Explains Business adds team management, shared folders, and team-wide analysis that Solo lacks. Notes AI credit difference (100 vs 1,000/mo). Recommends Business for teams since Solo lacks collaboration features.

## Troubleshooting

### Bot not joining meetings
**Symptom**: Rimo bot doesn't appear in Zoom/Teams/Meet/Webex meetings
**Solution**: Verify calendar is connected (Settings → Google Calendar or Outlook). Check the meeting has a video link in the calendar event. Bot takes 30-60 seconds to join after meeting starts — wait before troubleshooting. For ad-hoc meetings not on the calendar, manually invite the bot.

### English or non-Japanese transcription accuracy is poor
**Symptom**: Transcription errors for English or other non-Japanese speakers
**Solution**: Rimo is optimized for Japanese — English and other languages have lower baseline accuracy. Register voiceprints for all speakers (Settings → Speaker Separation). Add domain-specific terms to the Dictionary. For teams primarily speaking English, consider Fathom or Fireflies instead.

### AI credits running out mid-month
**Symptom**: AI summaries and AI chat stop working before the billing cycle resets
**Solution**: Check credit usage in account settings. Solo plan has only 100 credits/mo — heavy usage burns through this quickly. Options: upgrade to Business (1,000 credits/mo), reduce AI chat usage (each query consumes credits), or rely on raw transcripts without AI summaries until credits reset.
