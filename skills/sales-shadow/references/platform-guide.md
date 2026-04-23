# Shadow Platform Reference

## Platform overview

Shadow is a bot-free AI meeting assistant for macOS that captures both audio and screen content without joining the meeting as a visible participant. It runs locally on your Mac, transcribes audio on-device (audio never leaves your machine), and uses SOC 2-certified cloud APIs for AI features like summaries and action items. Shadow's key differentiator is screen capture — it's the only bot-free tool that sees what's shared on screen alongside what's said. Target audience: individual professionals and small teams who want invisible meeting capture with AI post-processing. Used by teams at Intercom, Mercury, Zapier, Dropbox, Salesforce, LinkedIn, and Uber.

## Key modules

### Recording & transcription
- **On-device transcription** — audio is captured and transcribed locally on your Mac. No audio data leaves the device for transcription.
- **Screen capture** — records what's displayed on screen during meetings (slides, demos, shared content). Unique among bot-free tools.
- **Smart screenshots** — automatically captures key visual moments during calls.
- **Speaker identification** — labels speakers in real time. Accuracy improves over time.
- **Supported platforms**: Zoom, Google Meet, Microsoft Teams, Slack Huddles, Webex, Discord.

### Autopilot
- Automatically detects when a meeting starts and begins recording without manual activation.
- Works across all supported meeting platforms.
- No setup required per meeting — just enable once in settings.

### AI features (Plus plan or first 25 meetings on Free)
- **Meeting summaries** — structured overview of key points.
- **Action items** — extracted with assignees and due dates.
- **Follow-up email drafting** — AI generates a draft follow-up email after each meeting.
- **AI Skills** — custom post-meeting AI tasks you define. Shadow runs them automatically after each call.
- **AI Chat** — ask questions about past meetings, search across your meeting history.
- **Built-in notepad** — manual note-taking during calls alongside automated capture.

### Meeting memory
- Searchable archive of all past meetings.
- Retrieve past discussions, decisions, and action items.

## Pricing and limits

All pricing as of 2026-04 — verify on shadow.do/pricing.

| Plan | Price | Recording & transcription | AI features | Notes |
|------|-------|--------------------------|-------------|-------|
| Free | $0/mo | Unlimited | First 25 meetings (lifetime, not monthly) | Unlimited audio recording, transcription, smart screenshots |
| Plus | $8/mo | Unlimited | Unlimited | Unlimited AI meeting notes, Skills, and Chat |

- Monthly/annual toggle available on pricing page (only monthly pricing displayed).
- No enterprise or team-specific plans documented — custom plans available for teams with specific needs.
- **Critical**: The free tier's 25-meeting AI cap is lifetime, not monthly. After 25 meetings, recording/transcription still works but AI summaries, action items, Skills, and Chat require Plus.

## Integrations

### Export
- **Markdown export** — export meeting notes to Markdown format.
- **Obsidian integration** — Shadow has specific support for Obsidian users.

### Automation
- **Zapier webhook** — connect Shadow to 6,000+ apps via webhook triggers. Some features may still be marked as "Coming."
- **Skills system** — custom AI tasks that run post-meeting. Can be configured to generate CRM-ready insights.

### CRM
- **No native CRM connectors.** Shadow does not directly integrate with Salesforce, HubSpot, Pipedrive, or other CRMs.
- CRM data must be manually copied or routed through Zapier webhooks.
- Shadow generates "CRM-ready insights" via the Skills system, but these require manual or Zapier-based transfer.

### API
- **No public API.** No developer documentation, no REST/GraphQL endpoints, no webhooks beyond Zapier.
- No MCP server.
- No SDK.

## Technical details

### Privacy & security
- On-device transcription — audio never leaves your Mac for transcription.
- AI features (summaries, action items) use external SOC 2-certified APIs with no data retention.
- Shadow commits to never using meeting data for AI training.
- Users can disable AI features entirely for fully local processing (recording + transcription only).

### System requirements
- **macOS only** — no Windows, Linux, mobile, or web app.
- Apple Silicon Macs perform better than Intel Macs for on-device transcription.
- Requires macOS permissions: Microphone, Screen Recording, Accessibility.
- Some MDM-managed corporate Macs may restrict Screen Recording permission.

### Known limitations
- macOS only — no cross-platform support.
- No public API — cannot build pipelines or integrations programmatically.
- No native CRM connectors — manual or Zapier-only data transfer.
- Speaker diarization accuracy is imperfect (industry-wide problem, not Shadow-specific).
- Can be resource-intensive on older/Intel Macs.
- Occasionally gets stuck during meetings (restart Shadow to resolve).
- No video recording — audio + screen capture only.
- Free tier 25-meeting AI cap is lifetime, easy to burn through in a week.

## Workflow setup

### First-time setup
1. Download Shadow from shadow.do.
2. Install and launch — grant macOS permissions when prompted (Microphone, Screen Recording, Accessibility).
3. Open System Settings → Privacy & Security to verify all three permissions are granted.
4. Enable Autopilot in Shadow settings for automatic meeting detection.
5. Join a test meeting to verify recording, transcription, and screen capture work.
6. Configure AI Skills for your post-meeting workflow (summaries, action items, follow-up emails).

### Exporting to other tools
1. After a meeting, open the meeting in Shadow.
2. Export to Markdown for use in Obsidian, Notion (paste), or other tools.
3. For automated workflows, configure the Zapier webhook integration to push meeting data to your CRM, Slack, or project management tool.

### Team deployment considerations
- Shadow runs per-user on each Mac — no centralized admin console.
- Each team member needs their own Shadow account and Plus subscription.
- No shared workspace, team analytics, or admin controls documented.
- For teams needing centralized management, consider Fathom Team/Business, Fireflies Business, or tl;dv Business instead.
