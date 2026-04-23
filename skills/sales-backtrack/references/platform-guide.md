# Backtrack Platform Reference

## Platform overview

Backtrack is a Mac menu bar app by Yac Inc. that solves the "forgot to hit record" problem by continuously buffering audio and screen activity. Instead of requiring you to start recording before a meeting, Backtrack maintains a rolling buffer of the past 1-5 hours (depending on plan) that you can retroactively save with one click. It supports Zoom, Google Meet, Teams, Slack Huddles, and in-person conversations. AI transcription and summaries are available via cloud upload. Privacy-first: all recordings are local until you explicitly share them.

**Key differentiator**: Retroactive capture — no other note-taker in the category lets you save audio from a meeting that already happened without having started recording.

**Target audience**: Mac power users who frequently forget to record, individuals who want a safety net for ad-hoc calls, and teams that need ambient audio capture without meeting bots.

**Company**: Yac Inc. Available on Mac App Store and Setapp.

## Key modules

### Rolling audio buffer
- Continuously records system audio, microphone input, and screen activity to a local rolling buffer
- Free tier: 1-hour buffer
- Pro tier: up to 5-hour buffer
- Buffer is FIFO — oldest content is overwritten as new audio comes in
- One-click save from the menu bar icon to capture what just happened

### Screen recording
- Captures screen content alongside audio
- Useful for preserving slides, demos, and shared content from video calls
- Preview and trim before saving — you don't have to keep the full buffer

### AI transcription and summaries
- Requires cloud upload of the saved recording
- Generates AI-powered transcripts and meeting summaries
- Eliminates manual note-taking for saved recordings
- **Known reliability issue**: Some users report transcript generation fails ~10% of the time

### Sharing
- Recordings are completely private until you create a shareable link
- Shareable links can be sent to colleagues for review
- No indication to meeting participants that recording occurred (bot-free)

## Pricing and limits

| Feature | Free | Pro ($9.99/mo) | Business (custom) |
|---|---|---|---|
| Rolling buffer length | 1 hour | 5 hours | 5+ hours |
| Audio capture | Yes | Yes | Yes |
| Screen capture | Yes | Yes | Yes |
| AI transcription | Basic | Full + keyword search | Full |
| AI summaries | Basic | Yes | Yes |
| Keyword highlights | No | Yes | Yes |
| Sharing | Basic | Enhanced | Enhanced |
| Priority support | No | Yes | Yes |
| Team access | No | No | Yes |
| Admin controls | No | No | Yes |
| Data management | Basic | Enhanced | Extended |

*Pricing is best-effort as of 2026-04. Also available via Setapp subscription ($9.99/mo for 240+ Mac apps).*

## Integrations

### Native meeting platform support
- Zoom — captures audio from Zoom calls
- Google Meet — captures via browser audio
- Microsoft Teams — captures via app or browser audio
- Slack Huddles — captures ad-hoc calls
- In-person meetings — captures via microphone

### What Backtrack does NOT integrate with
- **No CRM connectors** — no Salesforce, HubSpot, Pipedrive, or any CRM
- **No Zapier/Make/n8n** — no automation platform connectors
- **No Slack/Notion/Asana export** — no productivity tool integrations
- **No API** — no programmatic access to recordings or transcripts
- **No webhooks** — no event-driven notifications
- **No calendar integration** — does not auto-join scheduled meetings (relies on rolling buffer instead)

### Available on
- Mac App Store (by Yac Inc.)
- Setapp (subscription app marketplace)

## Audio capture details

### How audio capture works
Backtrack captures audio from your Mac's audio stack:
- **Microphone input**: Always captured — your voice in calls and in-person conversations
- **System audio**: Can capture what comes through your speakers — the other person in a call
- **Headphone limitation**: If using headphones/earbuds, the other participant's audio goes directly to your ears and may NOT be captured by the microphone. This is the most common cause of "one-sided" recordings.

### Best practices for full audio capture
1. **Use speakers** instead of headphones for calls you want to capture fully
2. **Use an external USB microphone** positioned to capture room audio
3. **Test before relying on it** — make a short test call and verify both sides appear in the recording
4. **Check system audio settings** — Backtrack may support system audio capture (capturing audio output directly), which bypasses the headphone limitation

## Workflow setup

### First-time setup
1. Download Backtrack from the Mac App Store or Setapp
2. Grant macOS permissions when prompted:
   - Microphone access (required)
   - Screen Recording access (required for screen capture)
3. Verify the menu bar icon appears — if missing, check Bartender/Vanilla/Hidden Bar
4. Backtrack immediately starts buffering — the rolling buffer is always active
5. Make a test call to verify audio capture quality

### Saving a recording retroactively
1. Click the Backtrack icon in the menu bar
2. Select the time range to save (you can preview and trim)
3. The recording is saved locally to your Mac
4. Optionally upload to cloud for AI transcription and summary

### Getting AI transcripts
1. Open a saved recording in Backtrack
2. Click "Upload" to send to Backtrack's cloud
3. Wait for AI processing (usually 1-5 minutes depending on length)
4. View transcript and summary in the app
5. If transcript fails to generate, try re-uploading — known intermittent issue

## Comparison with similar tools

| Feature | Backtrack | Shadow | Granola | Jamie |
|---|---|---|---|---|
| Retroactive capture | **Yes (unique)** | No (autopilot start) | No (manual start) | No (manual start) |
| Screen capture | Yes | Yes | No | No |
| Bot-free | Yes | Yes | Yes | Yes |
| macOS | Yes | Yes | Yes | Yes |
| Windows | No | No | Yes | Yes |
| CRM integration | None | None | HubSpot, Attio | HubSpot, Salesforce, Pipedrive |
| API | None | None | REST (Business+) | REST |
| Webhooks | None | Zapier webhook | None | Yes (Plus+) |
| Free tier | 1 hr buffer | 25 AI meetings | Limited history | 10 meetings |
| Starting paid | $9.99/mo | $8/mo | $14/user/mo | €21/mo |
| AI summaries | Yes (cloud) | Yes (cloud APIs) | Yes (local + cloud) | Yes |
| In-person recording | Yes | Yes | Yes (Mac mic) | Yes |
