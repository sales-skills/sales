---
name: sales-backtrack
description: "Backtrack platform help — Mac menu bar retroactive audio/screen recorder that continuously buffers so you can save meetings you forgot to record. Use when setting up Backtrack for the first time on Mac, Backtrack not capturing system audio or only recording one side of a call, Backtrack transcripts failing to save or generate, choosing between Backtrack and Shadow or Granola or Jamie for bot-free Mac recording, Backtrack menu bar icon disappearing behind Bartender or Vanilla, or understanding Backtrack free vs Pro rolling buffer limits. Do NOT use for choosing between all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your Backtrack setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-recorder, bot-free, retroactive, platform]
---

# Backtrack Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Backtrack (install, permissions, first recording)
   - B) Troubleshooting an issue (audio capture, transcripts, menu bar icon)
   - C) Comparing Backtrack to another bot-free tool (Shadow, Granola, Jamie)
   - D) Understanding pricing or buffer limits (free vs Pro vs Business)
   - E) Sharing or exporting recordings

2. **What's your primary use case?**
   - A) Zoom/Meet/Teams calls I sometimes forget to record
   - B) In-person meetings and conversations
   - C) Slack Huddles and ad-hoc calls
   - D) General audio capture (brainstorming, lectures, interviews)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just bot-free) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Backtrack platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, rolling buffer behavior, audio capture details, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Install from Mac App Store or Setapp → grant macOS permissions (microphone, screen recording)
2. Verify the menu bar icon appears — check menu bar managers (Bartender, Vanilla) if hidden
3. Start a test call to confirm both sides of audio are captured (use speakers, not headphones for remote calls)
4. Adjust rolling buffer length in settings (1 hour free, up to 5 hours Pro)

**Bot-free comparison quick guide:**
- Backtrack vs Shadow → Backtrack's unique feature is retroactive capture (save *after* the meeting without pre-recording); Shadow requires autopilot to start recording at meeting time
- Backtrack vs Granola → Granola is an AI notepad with CRM sync; Backtrack is a raw audio/screen buffer with AI transcription as an add-on
- Backtrack vs Jamie → Jamie supports Windows + Mac and has CRM connectors; Backtrack is Mac-only with no CRM integration

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free tier is 1 hour rolling buffer, not 5 hours.** The 5-hour buffer requires Pro ($9.99/mo). If your meetings regularly exceed 1 hour, the free tier will lose the beginning.
- **Mic-only capture by default.** Backtrack records what your microphone picks up. In a video call with headphones, you'll only capture your side — use speakers so the mic picks up both sides, or ensure system audio capture is enabled.
- **macOS only.** No Windows, Linux, iOS, or web. If your team has mixed OS, Backtrack won't work for everyone — consider Jamie (Windows + Mac) or Granola (Mac + Windows).
- **No public API, no webhooks, no CRM integration.** You cannot programmatically access recordings or pipe transcripts to a CRM. For API-driven workflows, use Fathom, Fireflies, or Gong instead.
- **Transcript reliability is inconsistent.** Some users report ~1 in 10 transcripts fail to save. Always verify important transcripts saved before closing the app.
- **Menu bar managers can hide the icon.** Bartender, Vanilla, and similar tools may hide Backtrack's menu bar icon. Check your menu bar manager's hidden section if the icon disappears.
- **Cloud upload required for AI features.** On-device recording is local, but generating AI transcripts and summaries requires uploading to Backtrack's cloud servers.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-shadow` — Shadow platform help — bot-free AI meeting assistant with screen capture and autopilot on macOS
- `/sales-granola` — Granola platform help — bot-free AI notepad with REST API, MCP beta, HubSpot/Attio CRM sync
- `/sales-jamie` — Jamie platform help — bot-free AI note-taker, Windows + Mac, REST API, webhooks, CRM sync
- `/sales-call-review` — Review a specific call for coaching
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Backtrack for the first time
**User says**: "I just installed Backtrack on my Mac. How do I make sure it captures both sides of my Zoom calls?"
**Skill does**:
1. Explains that Backtrack uses a rolling buffer — it's always recording, so you save after the fact
2. Warns about the mic-only capture gotcha — headphones mean only your side is captured
3. Recommends enabling system audio capture or using speakers for remote calls
4. Suggests a test call to verify both sides are captured before relying on it
**Result**: Backtrack capturing full two-sided audio from Zoom calls.

### Example 2: Backtrack vs Shadow for a Mac user
**User says**: "I'm choosing between Backtrack and Shadow for recording my sales calls on Mac. What's the difference?"
**Skill does**:
1. Highlights Backtrack's unique retroactive capture — you don't need to start recording before the meeting
2. Notes Shadow captures screen content alongside audio (useful for demos/slides) — Backtrack captures screen too but is primarily known for the rolling buffer
3. Flags that neither has CRM connectors — if CRM sync matters, suggests Granola or Fathom Business
4. Recommends Backtrack if "forgot to record" is the primary pain; Shadow if autopilot + screen capture matters more
**Result**: Clear differentiation based on the user's primary pain point.

### Example 3: Transcripts not generating
**User says**: "I saved a recording in Backtrack but the transcript is blank. This has happened a few times now."
**Skill does**:
1. Notes the known reliability issue — transcript generation fails for some users
2. Checks if the recording was uploaded to cloud (required for AI transcription)
3. Suggests re-uploading the recording if the transcript failed
4. If the problem persists, recommends exporting the raw audio and using a separate transcription service
**Result**: Workaround for unreliable transcript generation.

## Troubleshooting

### Transcripts failing to save or generate
**Symptom**: Recording saved successfully but transcript is blank or missing
**Cause**: Cloud upload may have failed, or AI processing timed out — known reliability issue
**Solution**: Verify internet connection. Try re-uploading the recording from Backtrack's library. If the problem persists across multiple recordings, export the raw audio file and use an external transcription service (Fathom, Fireflies, or Otter free tiers all accept uploaded audio).

### Only capturing one side of a call
**Symptom**: Transcript shows only your words, not the other participant's
**Cause**: Backtrack captures microphone input — if you're wearing headphones, the other person's audio goes to your ears, not your mic
**Solution**: Use speakers instead of headphones so your mic picks up both sides. Alternatively, check Backtrack's settings for system audio capture options. Some users report better results with external USB microphones that pick up room audio.

### Menu bar icon missing
**Symptom**: Backtrack is running (visible in Activity Monitor) but no icon in the menu bar
**Cause**: Menu bar manager apps (Bartender, Vanilla, Hidden Bar) hide overflow icons
**Solution**: Check your menu bar manager's hidden section — Backtrack's icon is likely collapsed there. In Bartender, add Backtrack to the "always show" list. In Vanilla, expand the hidden section by clicking the arrow.
