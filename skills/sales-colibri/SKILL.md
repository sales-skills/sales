---
name: sales-colibri
description: "Colibri.ai platform help — real-time transcription, AI meeting summaries, Sales Copilot with live guidance during calls, conversation analytics, legal transcription. Use when setting up Colibri for real-time transcription on Zoom or Teams, configuring the Sales Copilot for live objection handling cue cards, comparing Colibri plans to find which tier unlocks AI summaries or Salesforce, troubleshooting transcription accuracy with multiple speakers, setting up conversation analytics dashboards for team coaching, or evaluating Colibri's legal transcription for depositions. Do NOT use for choosing between AI note-takers across vendors (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Colibri]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, sales-copilot, platform]
---

# Colibri.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which Colibri module are you using (or evaluating)?**
   - A) AI Notetaker (transcription + summaries)
   - B) Sales Copilot (real-time guidance during calls)
   - C) Conversation Intelligence (analytics dashboard, team coaching)
   - D) Colibri Legal (deposition / court reporting)
   - E) Not sure — help me pick a plan

2. **What's your goal?**
   - A) Set up or configure Colibri
   - B) Troubleshoot a problem
   - C) Compare plans or evaluate pricing
   - D) Integrate with CRM or other tools

3. **What plan are you on?**
   - A) Free (5 hrs/mo)
   - B) Starter ($16/mo annual)
   - C) Pro ($40/mo annual)
   - D) Growth ($50/mo annual)
   - E) Scale ($70/mo annual)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between AI note-takers (Colibri vs Fireflies vs Fathom etc.) | `/sales-note-taker {user's question}` |
| Building a transcript pipeline to CRM or data warehouse | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Sales coaching program | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Colibri platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, integrations, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup questions:** Colibri works via Chrome extension (Google Meet, Teams, etc.) or native Zoom app. Install the extension, grant mic permissions, and Colibri starts transcribing automatically.

**For Sales Copilot questions:** Growth plan required. Set up cue cards with common objections and recommended responses. Monologue alerts notify reps when they talk too long. Sentiment analysis shows real-time customer engagement.

**For integration questions:** Colibri has very limited integrations. Salesforce is Scale-only ($70/mo). Slack is Pro+. No HubSpot, no Zapier, no webhooks, no API. If CRM integration is critical, recommend evaluating alternatives.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API or webhooks.** Colibri has no developer integration path. You cannot programmatically extract transcripts, summaries, or analytics. This is a major gap compared to Fireflies, Fathom, or MeetGeek.
- **Salesforce is Scale-only ($70-80/mo).** That's 4-5x the price of competitors with CRM sync on lower tiers.
- **No HubSpot integration at any tier.** If HubSpot is your CRM, Colibri won't sync natively.
- **AI summaries require Pro plan ($40/mo).** Free and Starter only get transcription — no AI summaries, no action items.
- **Sales Copilot requires Growth plan ($50/mo).** Real-time guidance, cue cards, and sentiment analysis are not available on lower tiers.
- **Free plan caps at 5 hrs/mo and 40-minute recordings.** Very limited for active use.
- **English-only transcription on Free plan.** Multi-language support may require paid tiers.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across vendors, plan transcript API pipelines
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs
- `/sales-integration` — General CRM/tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up real-time coaching for a sales team
**User says**: "I want my reps to get live tips during discovery calls when prospects mention competitors. How do I set that up in Colibri?"
**Skill does**: Confirms Growth plan is required for Sales Copilot. Walks through setting up cue cards for competitor mentions, configuring real-time alerts, and using monologue detection to coach reps on talk-time balance.

### Example 2: Evaluating plans for a small team
**User says**: "I have a 4-person sales team and want AI meeting summaries shared to Slack after every call. What plan do I need?"
**Skill does**: Recommends Pro plan ($40/mo annual) which includes AI summaries + Slack integration. Notes that Growth ($50/mo) adds real-time guidance and analytics. Warns that Salesforce sync requires Scale ($70/mo).

### Example 3: Troubleshooting transcription accuracy
**User says**: "Colibri keeps getting names and technical terms wrong in our engineering demos."
**Skill does**: Recommends Scale plan's custom language model feature for domain-specific vocabulary. On lower plans, suggests speaking clearly, using a quality microphone, and checking that the Chrome extension has mic permissions. Notes that multi-speaker accuracy degrades — keep meetings under 6-8 participants for best results.

## Troubleshooting

### Transcription inaccurate with multiple speakers
**Symptom**: Words are wrong, speakers are mixed up, especially with 4+ participants
**Cause**: All voice recognition tools degrade with overlapping speech and multiple speakers. Colibri's accuracy depends on audio quality and speaker separation.
**Solution**: Use a quality microphone (USB headset recommended). Ensure speakers take turns rather than talking over each other. On Scale plan, configure the custom language model with domain-specific terms. Check that Chrome extension has microphone permissions and the correct audio device is selected.

### AI summaries not appearing after meetings
**Symptom**: Transcription works but no summary or action items are generated
**Cause**: AI summaries require Pro plan or above. Free and Starter plans only provide raw transcription.
**Solution**: Upgrade to Pro ($40/mo annual) or higher. Verify the meeting duration exceeded the minimum threshold. Check the meeting in the searchable library — summaries may take a few minutes to generate after the call ends.

### Chrome extension not recording on Google Meet
**Symptom**: Colibri doesn't detect or start recording Google Meet calls
**Cause**: Chrome extension needs explicit microphone permission and may conflict with other recording extensions
**Solution**: Go to Chrome → Extensions → Colibri → Details → ensure "Allow access to microphone" is enabled. Disable other meeting recording extensions that might conflict. Try refreshing the Google Meet page after enabling the extension. If using the Zoom native app instead, the Chrome extension is not needed.
