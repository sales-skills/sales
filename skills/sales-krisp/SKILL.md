---
name: sales-krisp
description: "Krisp platform help — noise cancellation, AI meeting notes, accent conversion, Voice AI SDK, call center AI. Use when setting up Krisp noise cancellation for calls, configuring Krisp AI meeting transcription or summaries, troubleshooting Krisp app crashes or high CPU usage, integrating Krisp webhooks with CRM or Slack, building with the Krisp Voice AI SDK for noise filtering, or choosing between Krisp plans for a team. Do NOT use for choosing between AI note-takers across vendors (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Krisp]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, noise-cancellation, voice-ai, platform]
github: "https://github.com/krispai"
---

# Krisp Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which Krisp product are you using (or evaluating)?**
   - A) AI Meeting Assistant (noise cancellation + transcription + AI notes)
   - B) Call Center AI (accent conversion, agent assist, speech analytics)
   - C) Voice AI SDK (embedding noise cancellation / accent conversion in your app)
   - D) Not sure — help me pick

2. **What's your goal?**
   - A) Set up or configure Krisp
   - B) Integrate Krisp with other tools (CRM, Slack, webhooks)
   - C) Troubleshoot a problem (crashes, transcription issues, missing recordings)
   - D) Compare Krisp plans or evaluate pricing
   - E) Build with the Krisp SDK

3. **What plan are you on?**
   - A) Free trial / evaluating
   - B) Core ($8/mo annual)
   - C) Advanced ($15/mo annual)
   - D) Enterprise
   - E) Call Center or SDK

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between AI note-takers (Krisp vs Fireflies vs Fathom etc.) | `/sales-note-taker {user's question}` |
| Building a transcript pipeline to CRM or data warehouse | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| Sales coaching program | `/sales-coaching {user's question}` |

Otherwise, answer directly below.

## Step 3 — Krisp platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, integrations, data model, workflows, SDK details.

If the question involves the webhook API or Voice AI SDK, also read `references/krisp-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup questions:** Walk through the specific workflow step by step. Krisp installs as a virtual audio device — the main gotcha is selecting "Krisp Microphone" and "Krisp Speaker" in your conferencing app's audio settings.

**For integration questions:** Webhooks are the primary integration path (Advanced+ plans). Krisp fires events when transcripts, notes, or outlines are generated. For CRM sync, HubSpot is available on Core+, Salesforce on Advanced+.

**For SDK questions:** Point to sdk-docs.krisp.ai. The JS SDK (WASM) is the most documented. VIVA SDK is for voice AI agents (server-side). Auth is API key via sdk.krisp.ai dashboard.

**For troubleshooting:** Check references/platform-guide.md Troubleshooting section first, then apply the fix to the user's specific situation.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free tier was removed.** Krisp used to offer 60 min/day free noise cancellation. Now it's a 7-day trial only — Core plan ($8/mo annual) is the entry point.
- **Salesforce requires Advanced plan** ($15/mo). Core only gets HubSpot, Slack, Zapier.
- **Accent conversion is limited to 4 English accents** — Indian, Filipino, African, Latin American. Other accents are on the roadmap but not available yet.
- **Transcription supports only 16 languages.** English is on-device; other 15 are server-side. Competitors like Fireflies support 100+.
- **Webhook API requires Advanced+ plan.** Core plan users must use Zapier for integrations.
- **App can slow down laptops** — Krisp uses significant CPU for real-time neural network processing. Close other heavy apps during calls.
- **Noise cancellation only works with USB headsets** — Bluetooth and 3.5mm jack headphones may not be supported.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across vendors, plan transcript API pipelines
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Krisp for a sales team
**User says**: "My reps work from home and clients complain about background noise on calls. How do I roll out Krisp?"
**Skill does**: Recommends Core plan for the team ($8/user/mo annual), walks through deployment — install desktop app, select Krisp virtual audio device in Zoom/Teams/Meet settings, enable AI meeting transcription, set up HubSpot integration to auto-push meeting notes.

### Example 2: SDK integration for a voice AI agent
**User says**: "I'm building a voice AI agent and need noise cancellation in the browser. Can Krisp help?"
**Skill does**: Points to the JS SDK (WASM) at sdk-docs.krisp.ai. Explains the VIVA model for voice isolation + turn-taking detection. Notes 12MB package size, ~100MB memory footprint, 1.5-2ms per frame latency. Walks through createNoiseFilter API and WebRTC integration.

### Example 3: Troubleshooting missing recordings
**User says**: "Krisp recorded 9 meetings but only 3 have transcriptions. Where did the others go?"
**Skill does**: Checks common causes — Krisp microphone not selected as input (recordings captured silence), meetings under minimum duration threshold, storage limit hit (Core = 5GB). Recommends checking Settings → Recordings for failed entries, verifying audio input device in each conferencing app.

## Troubleshooting

### Transcription is inaccurate or unreliable
**Symptom**: AI notes miss key points, words are wrong, speaker names are mixed up
**Cause**: Krisp transcription accuracy depends on audio quality and speaker clarity. Non-English languages use server-side processing which can be less accurate. Speaker identification degrades with 5+ participants.
**Solution**: Ensure Krisp noise cancellation is active (improves transcription accuracy by up to 39%). Add custom vocabulary for technical terms (Settings → Custom Vocabulary, up to 750 terms). For multi-speaker meetings, ask participants to identify themselves early. Check that the correct microphone is selected.

### App crashes or slows down laptop
**Symptom**: Krisp freezes, high CPU usage, laptop fans spinning during calls
**Cause**: Real-time neural network processing is CPU-intensive. Conflicts with other audio processing apps (Discord voice, OBS, other noise cancellation tools).
**Solution**: Close competing audio apps. Check for Krisp updates (Settings → About). If on an older machine, disable video recording and use transcript-only mode. Krisp's help center documents known conflicts with specific apps — check External Applications Interferences article.

### Calendar records everything including non-meetings
**Symptom**: Krisp tries to record calendar tasks, focus time blocks, and reminders — not just actual meetings
**Cause**: Krisp auto-records based on calendar events without distinguishing meeting types
**Solution**: Use manual recording mode instead of auto-record. Or filter calendar events by excluding events without video links (Krisp should only trigger on events with Zoom/Meet/Teams links — if it's recording events without them, contact support).
