---
name: sales-tactiq
description: "Tactiq platform help — Chrome extension AI meeting note-taker with bot-free live transcription for Google Meet, Zoom, and MS Teams. Use when Tactiq transcription accuracy is poor with accents, AI credits running out too fast, setting up Tactiq workflows to push notes to Slack or Notion, connecting Tactiq to HubSpot or Salesforce via Zapier, figuring out which Tactiq plan to pick, or comparing Tactiq to Fathom or Fireflies. Do NOT use for choosing between note-takers generally (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Tactiq]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, chrome-extension, platform]
github: "https://github.com/Tactiq-HQ"
---

# Tactiq Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your situation?**
   - A) Setting up Tactiq for the first time
   - B) Troubleshooting transcription quality or accuracy
   - C) Configuring workflows or integrations (Slack, Notion, HubSpot, etc.)
   - D) Deciding on a Tactiq plan or comparing to other tools
   - E) Something else

2. **Which meeting platform?**
   - A) Google Meet
   - B) Zoom
   - C) Microsoft Teams
   - D) Multiple

3. **Team size?**
   - A) Just me
   - B) Small team (2-10)
   - C) Department (10-50)
   - D) Organization (50+)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between note-takers (Tactiq vs Fathom vs Fireflies etc.) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Tactiq platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, workflows, data model.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For transcription accuracy issues**: Check language settings (manual selection required, not auto-detect), microphone quality, speaker distance, background noise. Tactiq struggles with non-native English accents and proper nouns — suggest adding custom vocabulary if available, or consider Fireflies/Otter for better accuracy.

**For AI credit limits**: Free = 5/mo, Pro = 10/mo — both run out fast. Team ($16.67-20/mo) gives unlimited AI credits. If the user needs AI summaries on every call, Team is the minimum viable plan.

**For integration setup**: Tactiq has no public REST API — all automation goes through native integrations (HubSpot, Salesforce, Pipedrive, Slack, Notion, Linear, Confluence) or Zapier. Guide the user to the Zapier trigger "Transcription completed" for custom workflows.

**For plan selection**: Free is evaluation-only (10 transcripts/mo). Pro gives unlimited transcripts but caps AI at 10/mo. Team unlocks unlimited AI + team sharing. Business adds SSO + AI meeting agents. Compare to Fathom (unlimited free tier) and Fireflies (more API flexibility) if budget is a concern.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No video recording.** Tactiq captures text transcripts only — no audio or video. You cannot play back a recording to verify what was said. If transcript accuracy matters, this is a significant gap vs Fathom, Fireflies, or tl;dv which all record audio/video.
- **Manual language selection required.** Tactiq does not auto-detect languages. If a call switches languages mid-conversation, the transcript degrades to gibberish. You must manually set the language before the meeting starts.
- **AI credits are stingy on lower tiers.** Free gets 5 AI credits/mo, Pro gets 10. Each summary or custom AI prompt costs 1 credit. Team ($16.67-20/mo) is the first tier with unlimited AI.
- **No public API.** Unlike Fathom, Fireflies, or Gong, Tactiq has no documented REST/GraphQL API. All automation routes through native integrations or Zapier.
- **Browser extension privacy scope.** The Chrome extension requests permission to "read and change all data on all websites" — this is a common concern flagged in reviews. Tactiq is SOC 2 Type II and GDPR compliant, but IT teams may block it.
- **Transcription accuracy varies significantly.** Reviews report accuracy from "horrendously poor" to "good enough." Non-native English speakers, heavy accents, and proper nouns are the main failure modes.
- **Free tier is evaluation-only.** 10 transcripts/month is far below competitors — Fathom offers unlimited free recordings, Fireflies offers 800 min/mo storage, tl;dv offers unlimited recordings.
- **Account cancellation friction.** Some users report difficulty cancelling accounts — do it from the account settings page, not by email.

## Related skills

- `/sales-note-taker` — Compare and select AI meeting note-takers across all platforms (Fathom, Fireflies, Gong, Otter, etc.)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Transcription accuracy is terrible
**User says**: "Tactiq is mangling half my transcript — my team has people from India, Brazil, and Germany on calls."
**Skill does**:
1. Confirms Tactiq's known weakness with non-native English accents
2. Checks language settings — user may need to set language manually before each call
3. Suggests testing with a single-language call to isolate the issue
4. If accuracy is a deal-breaker, recommends evaluating Fireflies (100+ languages, better accuracy) or Otter.ai (strong English accuracy)
**Result**: Diagnosis of the root cause with a concrete workaround and an alternative if it persists.

### Example 2: Running out of AI credits mid-month
**User says**: "I'm on Pro and keep hitting the AI credit limit. I need summaries for every call."
**Skill does**:
1. Confirms Pro has only 10 AI credits/month — not enough for daily meetings
2. Recommends upgrading to Team ($16.67/mo annual) for unlimited AI credits
3. If budget is tight, suggests using Fathom (unlimited free AI summaries) as an alternative
**Result**: Clear plan recommendation with a budget-conscious alternative.

### Example 3: Pushing Tactiq notes to Salesforce automatically
**User says**: "I want every meeting summary to automatically log as an activity in Salesforce."
**Skill does**:
1. Notes Tactiq has a native Salesforce integration — guides user to Settings → Integrations → Salesforce
2. If native integration doesn't meet needs (e.g., custom field mapping), sets up Zapier: Trigger = "Transcription completed" → Action = Salesforce "Create Record"
3. Warns there's no API fallback — if Zapier + native integration can't do it, it's not possible with Tactiq
**Result**: Two integration paths with a clear ceiling on what's achievable.

## Troubleshooting

### Transcript is mostly gibberish or barely accurate
**Symptom**: Transcript output is unreadable or very low accuracy
**Cause**: Usually language mismatch (auto-detection doesn't work well), poor microphone quality, or heavy accents
**Solution**: Manually set the correct language before the meeting starts. Ensure the speaker is using a headset or directional microphone, not laptop speakers. If the call has multiple languages, Tactiq will struggle — consider Fireflies or Otter for multilingual calls.

### AI summaries not generating or "no credits remaining"
**Symptom**: Can't generate AI summaries, custom prompts fail
**Cause**: AI credit limit reached (Free = 5/mo, Pro = 10/mo)
**Solution**: Upgrade to Team plan for unlimited AI credits. Credits reset monthly. There's no way to buy additional credits à la carte on Free/Pro.

### Extension not capturing transcript in Zoom
**Symptom**: Tactiq shows as active but no text appears during a Zoom call
**Cause**: Zoom's audio routing may not be passing through the browser. Tactiq works best with browser-based meetings (Google Meet). For Zoom, the desktop app may not expose audio to the Chrome extension properly.
**Solution**: Use Zoom in the browser (join via web client instead of desktop app). Alternatively, check that Tactiq has permission to access the microphone in Chrome settings. If using Zoom desktop is required, consider Fathom or Fireflies which have native Zoom integrations.
