# Superpowered Platform Reference

## Platform overview

Superpowered is a bot-free AI meeting note-taker that runs as a desktop app (macOS/Windows). It captures device audio, transcribes it live, and generates structured AI notes using customizable templates. Audio is deleted immediately after transcription; transcripts are retained for 7 days then deleted. No bot joins the call. SOC-2 Type II certified and GDPR compliant. Y Combinator-backed, trusted by 15,000+ companies.

## Key modules

### AI Notes
- Automatically transcribes device audio during meetings
- Generates structured summaries using AI Templates
- No recording stored — audio deleted immediately, transcripts retained 7 days

### AI Templates
- Pre-built templates: 1:1s, sales calls, interviews, team meetings
- Custom templates: define your own note structure and sections
- Templates enforce consistent note format across the team

### Auto-Join
- Connects to Google Calendar, Outlook, Apple Calendar (workaround)
- Automatically detects scheduled meetings and begins transcription
- Free plan: 1 calendar connection. Basic/Pro: unlimited.

### AI Chat (upcoming)
- Query an AI that understands all your past meetings
- Cross-meeting search and insights

## Pricing and limits

| Feature | Free | Basic ($25/mo) | Pro ($50/mo) | Enterprise |
|---|---|---|---|---|
| Calendar connections | 1 | Unlimited | Unlimited | Unlimited |
| Note history | 1 month | Unlimited | Unlimited | Unlimited |
| AI Notes | Limited | Unlimited | Unlimited | Unlimited |
| Slack integration | No | Yes | Yes | Yes |
| Email integration | No | Yes | Yes | Yes |
| Notion | No | No | Yes | Yes |
| Google Drive | No | No | Yes | Yes |
| Salesforce | No | No | Yes | Yes |
| HubSpot | No | No | Yes | Yes |
| Zapier | No | No | Yes | Yes |

All pricing best-effort as of 2026-04 — verify on superpowered.me.

## Integrations

### CRM (Pro plan only)
- **Salesforce**: Auto-sync meeting notes to Salesforce records
- **HubSpot**: Auto-sync meeting notes to HubSpot contacts/deals

### Productivity (Pro plan only)
- **Notion**: Push notes to Notion pages/databases
- **Google Drive**: Save notes to Drive folders
- **Zapier**: Connect to 5,000+ apps via Zapier triggers

### Communication (Basic+ plan)
- **Slack**: Share meeting notes to Slack channels
- **Email**: Auto-send summaries via email after meetings

### Meeting platforms
- Zoom, Google Meet, Microsoft Teams, Webex, Around

### Calendar
- Google Calendar, Outlook, Apple Calendar (via workaround)

## API & developer access

No public API documented. The only programmable integration point is Zapier (Pro plan). For custom data pipelines, Zapier is the sole option.

## Workflow setup

### Getting started
1. Download desktop app from superpowered.me (macOS or Windows)
2. Connect your calendar (Settings → Calendars)
3. Choose or create an AI Template for your meeting type
4. Superpowered auto-joins scheduled meetings and generates notes

### Setting up CRM sync (Pro)
1. Upgrade to Pro plan ($50/mo)
2. Go to Settings → Integrations → Salesforce or HubSpot
3. Authenticate with your CRM
4. Meeting notes auto-sync after each call

### Creating custom AI Templates
1. Go to Templates in the app
2. Click "Create Template"
3. Define sections (e.g., Action Items, Key Decisions, Follow-ups)
4. Assign the template to specific meeting types or calendar labels

## Deep dives

### Bot-free architecture
Superpowered captures audio directly from the device's audio output — it never joins the call as a participant. This means:
- No "Superpowered Bot has joined" notification to attendees
- Works with any audio source (not just supported meeting platforms)
- Requires the desktop app to be running on the device taking the call
- Cannot record if you join a meeting from your phone or a different computer

### Privacy model
- Audio: captured, transcribed in real-time, then deleted immediately
- Transcripts: retained for 7 days to generate notes, then deleted
- Notes: retained indefinitely (based on plan — 1 month on Free)
- No audio recordings are stored at any point
- SOC-2 Type II and GDPR compliant

### Language support
50+ languages supported for transcription, including: English, Spanish, French, German, Chinese, Japanese, Korean, Portuguese, Italian, Dutch, Russian, Arabic, Hindi, and many more.

### Known limitations
- Desktop only — no mobile app (iOS/Android) or Linux support
- No public API — only Zapier for automation
- CRM integrations locked behind Pro ($50/mo)
- Cannot record from mobile devices or when away from the desktop app
- No video recording — audio only
- Transcript retention limited to 7 days
