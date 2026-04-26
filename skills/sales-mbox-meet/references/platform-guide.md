# MBox AI Meet Platform Reference

## Platform overview

MBox AI Meet (rebranded "MBox AI Toolkit") is a free Chrome extension for Google Meet that provides real-time transcription and AI-generated meeting summaries powered by Google's Gemini Pro model. It positions itself as a privacy-first tool — no audio or video is stored, only text transcription data. Summaries are delivered via email after each meeting.

**Key differentiators**: Free tier with no meeting limits, Gemini Pro AI model (not GPT), privacy-first architecture with zero audio/video storage, E2E encryption on Pro plan, lowest price point in the Chrome extension note-taker category ($4.99/mo Pro).

**Company**: MBox AI Meet, support@mbox-meet.com. Website: mbox-meet.com. Chrome Web Store rating: 4.7-4.8/5.

## Key modules

### Recording & Transcription (UI-only)
- Real-time transcription during Google Meet sessions via Chrome extension
- Speaker identification — tracks who said what
- Multi-language transcription (specific language list not documented)
- Processes in real-time — no audio/video files saved
- Accuracy: ~88% for transcription, ~87-92% for AI summary based on transcription

### AI Summaries (UI-only)
- Automatic AI-generated summaries sent to email after meeting ends
- Smart action item identification and extraction
- Customizable summary depth (adjustable detail level)
- Powered by Google Gemini Pro model
- Basic summaries on Free, advanced summaries on Pro

### Privacy & Security (UI-only)
- No audio or video storage — text-only processing
- End-to-end encryption on Pro plan and above
- Privacy-first architecture — real-time processing only

## Pricing and limits

*Best-effort as of 2026-04 — verify on mbox-meet.com before quoting.*

| Feature | Free | Pro | Enterprise |
|---|---|---|---|
| Price | $0/mo | $4.99/mo | Custom |
| Real-time transcription | Yes | Yes | Yes |
| AI summaries | Basic | Advanced | Advanced |
| Speaker identification | Yes | Yes | Yes |
| Action items | Yes | Yes | Yes |
| E2E encryption | No | Yes | Yes |
| API access | No | No | Yes |
| Custom analysis | No | No | Yes |
| Priority support | No | Yes | Yes |
| Dedicated support | No | No | Yes |

**No credit card required for free tier.**

## Integrations

### What's available
- **Google Meet** — full support via Chrome extension (only supported meeting platform)
- **Email** — AI summaries delivered to user's email after meetings

### What's NOT available
- No CRM integration (HubSpot, Salesforce, Pipedrive — none)
- No public API documentation (Enterprise mentions API but no docs)
- No webhooks
- No Zapier/Make/n8n automation
- No MCP server
- No Slack integration
- No calendar integration
- No Google Drive/Dropbox export
- No mobile app

## Supported platforms

| Platform | Status |
|---|---|
| Google Meet | Fully supported |
| Zoom | Not supported ("under consideration") |
| Microsoft Teams | Not supported ("under consideration") |
| In-person | Not supported |

**Browser requirement**: Chrome only (Chrome extension architecture).

## Workflow setup

### Getting started
1. Install MBox AI Meet from Chrome Web Store (search "MBox AI Toolkit")
2. Create account (no credit card needed)
3. Join any Google Meet call — MBox auto-detects and starts transcribing
4. Real-time transcription appears during the meeting
5. After call ends, AI summary is generated and emailed to you
6. Review summary with action items and speaker attribution

### Upgrading to Pro
1. Open MBox settings in Chrome extension
2. Select Pro plan ($4.99/mo)
3. Benefits: E2E encryption, advanced summaries, priority support

## Workarounds for missing integrations

### Getting summaries into CRM
MBox has no native CRM integration. Workarounds:
1. **Email forwarding**: Forward MBox summary emails to HubSpot BCC address or Salesforce email-to-case
2. **Copy-paste**: Manually copy summary text into CRM deal/contact notes
3. **Switch tools**: If CRM sync is a hard requirement, consider Tactiq ($8/mo, native HubSpot/Salesforce/Pipedrive) or Fathom (free tier + $25/mo Business for CRM)

### Automating summary processing
MBox has no webhooks or Zapier. Workarounds:
1. **Email parsing**: Set up Zapier "New Email" trigger on the email address receiving MBox summaries → parse body → push to CRM/Slack/Notion
2. **Gmail filter + Google Apps Script**: Auto-label MBox emails, trigger a script to extract content
3. **Enterprise API**: Contact MBox for Enterprise plan with API access (no public docs)

## Competitive positioning

| Feature | MBox AI Meet | Tactiq | Scribbl |
|---|---|---|---|
| Price (paid) | $4.99/mo | $8-12/mo | $13-20/mo |
| Free tier | Yes (unlimited) | Yes (10 transcripts/mo) | Yes (15 meetings/mo) |
| Meeting platforms | Google Meet only | Meet + Zoom + Teams | Google Meet only |
| AI model | Gemini Pro | GPT-4o | GPT-4 |
| CRM integration | None | HubSpot/Salesforce/Pipedrive | HubSpot (Team only) |
| API | Enterprise only (undocumented) | None (Zapier only) | None |
| Webhooks | None | None | None |
| AI chat with meeting | No | No | Yes (AI Copilot, Pro+) |
| E2E encryption | Pro ($4.99/mo) | Not documented | Not documented |
| Transcription accuracy | ~88% | Higher (not documented) | Higher (not documented) |

**Bottom line**: MBox AI Meet is the cheapest option ($4.99/mo Pro) but trades features for price — no CRM, no multi-platform support, lower transcription accuracy. Best for individuals who only use Google Meet, want basic transcription + summaries, and don't need integrations.
