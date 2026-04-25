---
name: sales-laxis
description: "Laxis platform help — AI meeting intelligence with bot-free and bot-based recording, universal voice keyboard with verbal cleanup, LaxisChat AI assistant for querying meeting history, 50+ report templates, CRM automation to HubSpot/Salesforce (Business+), 7,000+ app integrations via Zapier, OSO AI Earbuds and Panocore360 hardware, Enterprise-only API/SSO. Use when setting up Laxis for meeting transcription or voice dictation, Laxis transcription stopping because closed captions were turned off, Laxis speaker identification showing Speaker 1/Speaker 2 instead of names on Zoom or Teams, choosing between Laxis and Fathom or Fireflies or Otter for sales meetings, Laxis CRM sync to HubSpot or Salesforce not working, Laxis voice keyboard not cleaning up filler words, Laxis AI Writer template selection, Laxis plan selection (Basic free/Premium $15.99/Business $29.99/Enterprise custom), or Laxis hardware (OSO earbuds or Panocore360 camera) setup. Do NOT use for comparing all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your Laxis setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Laxis Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Laxis (connecting to Zoom/Meet/Teams, first meeting, voice keyboard)
   - B) Troubleshooting an issue (transcription quality, speaker ID, CRM sync, voice keyboard)
   - C) Comparing Laxis to another note-taker (Fathom, Fireflies, Otter, MeetGeek)
   - D) Understanding pricing or plan limits
   - E) CRM automation or integrations (HubSpot, Salesforce, Zapier)
   - F) Hardware setup (OSO AI Earbuds, Panocore360 camera)

2. **How are you using Laxis?**
   - A) Online meetings (Zoom, Google Meet, Teams)
   - B) Voice keyboard / dictation across apps
   - C) In-person meetings (earbuds or device mic)
   - D) File uploads
   - E) Multiple methods

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just Laxis) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Laxis platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, hardware, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Sign up at laxis.com — Basic plan is free (300 min/mo)
2. Install the Chrome extension or desktop app (Windows/macOS)
3. Choose recording method: bot-free (zero-footprint) or AI assistant bot (calendar invite)
4. Test voice keyboard in any app (Slack, Gmail, Notion) — verbal cleanup auto-removes filler words
5. For CRM sync, upgrade to Business ($29.99/mo) to connect HubSpot or Salesforce

**Comparison quick guide:**
- Laxis vs Fathom → Fathom has a more generous free tier (unlimited recordings) and cheaper CRM sync ($25/user/mo annual); Laxis adds universal voice keyboard and hardware ecosystem
- Laxis vs Fireflies → Fireflies has a richer API (GraphQL + webhooks) and deeper analytics; Laxis is bot-free by default and adds dictation beyond meetings
- Laxis vs Otter → Otter has real-time collaboration and more integrations; Laxis adds voice keyboard, bot-free recording, and 50+ report templates

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features.*

- **Closed captions must stay on for transcription to work.** If closed captions are turned off during a meeting, Laxis stops transcribing and notes may be lost. Always keep captions enabled.
- **Speaker identification varies by platform.** Google Meet identifies speakers by name, but Zoom and Teams show generic labels (Speaker 1, Speaker 2). No workaround documented.
- **No audio recording for Google Meet.** Unlike Zoom, Laxis cannot record audio from Google Meet — transcription works but playback is not available.
- **No public API.** API access is Enterprise-only with custom pricing. No public docs, no developer portal, no webhooks. For automation below Enterprise, Zapier (Business+) is the only option.
- **CRM sync requires Business plan ($29.99/mo).** HubSpot and Salesforce integration is not available on Basic (free) or Premium ($15.99/mo).
- **7,000+ app integrations claim is Zapier-based.** The "7,000+ integrations" on the Business plan goes through Zapier — there are no native integrations beyond HubSpot, Salesforce, Slack, Gmail, Notion, and Zapier.
- **Support responsiveness issues reported.** Multiple G2/Capterra reviews mention slow or no response from support. AI usage quota tracking has been reported as inaccurate.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-fathom` — Fathom platform help — free-tier leader with CRM sync and API
- `/sales-fireflies` — Fireflies.ai platform help — GraphQL API, AskFred, conversation search
- `/sales-call-review` — Review a specific call for coaching
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Laxis for Zoom meetings
**User says**: "I want to use Laxis to transcribe my Zoom sales calls. How do I get started?"
**Skill does**:
1. Walks through signing up at laxis.com and choosing between bot-free and bot-based recording
2. Explains bot-free (zero-footprint) captures audio from the device without a visible bot joining
3. Notes that Zoom speaker ID shows generic labels (Speaker 1/2) rather than names
4. Recommends keeping closed captions on to avoid transcription stopping
5. Shows how to access AI summaries and 50+ report templates after the meeting
**Result**: User is set up for Zoom transcription with awareness of platform-specific quirks.

### Example 2: Laxis CRM sync to HubSpot
**User says**: "Can I automatically sync Laxis meeting notes to HubSpot?"
**Skill does**:
1. Confirms CRM automation requires the Business plan ($29.99/mo)
2. Explains that HubSpot sync is native on Business — meeting summaries, action items, and customer data flow to CRM
3. Notes that Premium ($15.99/mo) does not include CRM sync
4. For users on Premium who need CRM sync, suggests upgrading or using Zapier as a workaround (also Business+)
5. If budget is tight, recommends evaluating Fathom Business ($25/user/mo annual) which also has HubSpot sync
**Result**: Clear path to CRM integration with plan requirements and alternatives.

### Example 3: Voice keyboard not cleaning up dictation
**User says**: "The Laxis voice keyboard isn't removing my filler words like 'um' and 'uh'. What's wrong?"
**Skill does**:
1. Checks if verbal cleanup is enabled in voice keyboard settings
2. Explains the difference between verbal cleanup (removes filler words) and precision cleanup (removes repetition)
3. Notes that custom vocabulary/dictionary may need training for domain-specific terms
4. Suggests testing in a simple app (Slack or Gmail) before using in complex environments
**Result**: User understands cleanup settings and can troubleshoot voice keyboard issues.

## Troubleshooting

### Transcription stops mid-meeting
**Symptom**: Laxis stops transcribing partway through a meeting, resulting in incomplete notes
**Cause**: Closed captions were turned off during the meeting. Laxis relies on active captions to capture audio for transcription.
**Solution**: Ensure closed captions remain enabled throughout the entire meeting. Check your meeting platform settings to prevent auto-disable of captions. If transcription stopped, the lost portion cannot be recovered — re-enable captions and continue.

### Speaker identification shows generic labels
**Symptom**: Transcript shows "Speaker 1", "Speaker 2" instead of participant names on Zoom or Teams
**Cause**: Laxis speaker identification works differently across platforms — Google Meet can identify speakers by name, but Zoom and Teams use generic labels
**Solution**: No fix available within Laxis. As a workaround, manually label speakers after the meeting. Consider Google Meet if named speaker identification is critical.

### CRM sync not working
**Symptom**: Meeting notes are not appearing in HubSpot or Salesforce after meetings
**Cause**: CRM automation is only available on the Business plan ($29.99/mo). Premium and Basic plans do not include CRM sync.
**Solution**: Verify you're on the Business plan. If on Premium, upgrade to Business or use manual export. Check that the CRM connection is properly authenticated in Laxis settings.
