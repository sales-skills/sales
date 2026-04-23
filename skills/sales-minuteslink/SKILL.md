---
name: sales-minuteslink
description: "MinutesLink platform help — AI meeting note-taker with bot + Chrome extension recording, shareable summary links, concurrent meeting capture. Use when setting up MinutesLink for a sales team, MinutesLink bot not joining Google Meet or Zoom calls, MinutesLink transcription accuracy issues, MinutesLink vs Fathom or Fireflies or MeetGeek for budget teams, evaluating MinutesLink free vs Pro vs Business plan limits, sharing MinutesLink meeting notes with external stakeholders, or troubleshooting MinutesLink calendar sync problems. Do NOT use for general note-taker comparison across many platforms (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe what you need help with in MinutesLink]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
github: "https://github.com/Minuteslink"
---

# MinutesLink Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your goal?**
   - A) Set up MinutesLink for my team (onboarding, calendar sync, bot config)
   - B) Fix a problem (bot not joining, transcription quality, billing)
   - C) Compare MinutesLink to other note-takers (deciding to buy or switch)
   - D) Share meeting notes externally or integrate with my stack

2. **Which plan are you on (or considering)?**
   - A) Free (10 meetings/mo, 60 min each)
   - B) Pro ($9/mo — 30 meetings, concurrent capture)
   - C) Business ($24/mo — 100 meetings, priority support)

3. **What meeting platform(s)?**
   - A) Google Meet only
   - B) Zoom only
   - C) Both Google Meet + Zoom
   - D) Microsoft Teams (not yet supported)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing many note-takers across categories | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| CRM integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — MinutesLink platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, workflows, known issues.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Budget evaluation**: Compare total cost at their meeting volume. Free covers 10 calls — fine for solo reps. Pro ($9/mo) suits small teams under 30 calls. Business ($24/mo) for orgs with concurrent meetings.
- **Platform fit check**: If user needs MS Teams, MinutesLink isn't ready — suggest Fathom, Fireflies, or tl;dv. If they need deep CRM sync, Zapier is the only path — compare to Fathom Business or Fireflies Business for native HubSpot/Salesforce.
- **Sharing workflow**: MinutesLink's shareable links (no sign-up needed) are a differentiator for external stakeholder sharing — point this out if relevant.
- **Privacy stance**: End-to-end encryption, GDPR/CCPA compliant, Estonia-based. Useful for EU-conscious teams, though not at Memoro/Jamie GDPR-native level.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No Microsoft Teams support.** Only Google Meet and Zoom. Teams support is "planned" with no public timeline. If Teams is a requirement, MinutesLink is not an option.
- **No public API.** No REST, GraphQL, or webhook endpoints. CRM integration is Zapier-only. If you need custom transcript pipelines, look elsewhere (Fathom, Fireflies, Wave).
- **No mobile app.** Desktop/web only. If reps need mobile recording for field meetings, consider Wave, Omi, or Siro.
- **AI notes are basic compared to competitors.** No methodology scorecards (MEDDIC/BANT), no coaching analytics, no deal intelligence. For sales coaching, look at tl;dv, Avoma, or Gong.
- **Meeting limits are per-month, not per-seat.** Free = 10 total calls, not 10 per user. Teams sharing an account hit the ceiling fast.
- **Concurrent meeting capture requires Pro+.** Free plan records one meeting at a time.

## Related skills

- `/sales-note-taker` — Compare note-taker platforms, build transcript API pipelines, select by budget/CRM/coaching needs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Budget team evaluating MinutesLink
**User says**: "I run a 4-person sales team on Google Meet. Is MinutesLink Pro enough or do I need Business?"
**Skill does**: Calculates meeting volume — 4 reps × ~8 calls/week = ~32 calls/month. Pro caps at 30, so they'd hit the limit. Recommends Business ($24/mo) for headroom, or suggests Fathom free (unlimited recordings) if budget is the primary concern.

### Example 2: Sharing notes with a prospect
**User says**: "I want to send my prospect a meeting summary without making them create an account."
**Skill does**: Explains MinutesLink's public sharing feature — generate a shareable link from any meeting note, recipient views without signing up. Notes this is a differentiator vs Fathom/Fireflies where sharing often requires accounts.

### Example 3: Needs Teams support
**User says**: "We use Microsoft Teams for all calls. Can MinutesLink handle that?"
**Skill does**: Explains Teams is not supported yet (planned, no timeline). Suggests Fathom, Fireflies, or tl;dv as budget-friendly alternatives with Teams support.

## Troubleshooting

### MinutesLink bot not joining scheduled meetings
**Symptom**: Calendar is synced but the bot doesn't appear in the meeting
**Cause**: Calendar sync may have disconnected, or the meeting was created after the sync window
**Solution**: Re-authorize Google Calendar in MinutesLink settings. Verify the meeting shows in MinutesLink's upcoming meetings list. For ad-hoc meetings, use the Chrome extension instead of the bot.

### Transcription quality is poor or speakers mislabeled
**Symptom**: Transcript has errors or attributes speech to wrong participants
**Cause**: Audio quality issues, overlapping speakers, or non-English content in a language not well-supported
**Solution**: Ensure good audio input (headset vs laptop mic). For multi-language meetings, verify MinutesLink's language detection is set correctly. Re-record a test meeting to compare quality.

### Subscription cancellation is unclear
**Symptom**: Can't find how to cancel the subscription
**Cause**: Cancellation flow is not prominently surfaced in the UI
**Solution**: Go to account settings → subscription → cancel. If subscribed through the website, email support@minuteslink.com. For app store subscriptions, cancel through Apple/Google subscription management.
