# Jamy.ai Platform Reference

## Platform overview

Jamy.ai is an AI meeting assistant focused on multilingual teams. It records, transcribes, summarizes, and translates meetings in real time across Zoom, Google Meet, and Microsoft Teams. Key differentiator is real-time translation in 100+ languages with cross-language search — find insights from any meeting regardless of language spoken. SOC 2 Type II certified, enterprise-grade encryption, never trains AI on user data. Based in Europe, targets SMBs and global organizations.

## Key modules

### Meeting recording & transcription
- Automatic recording of audio and video on Zoom, Google Meet, MS Teams
- Real-time transcription with speaker labels in 100+ languages
- Auto-join via calendar integration (Pro+ for automatic, Starter requires manual)

### AI summaries & action items
- AI-generated meeting summaries customizable via templates
- Automatic action item extraction with assignment to participants
- Task syncing to Trello and Monday.com

### Translation & cross-language search
- Real-time bi-directional translation during meetings (100+ languages)
- Translation minutes are plan-gated (Starter: 60 min/mo, Pro: 300 min/mo, Global Business: unlimited)
- Cross-language search: find meeting insights regardless of source language
- 4-hour max meeting length on Global Business for translated sessions

### AI Chat
- Natural language search and retrieval across meeting history
- Ask questions about past meetings and get AI-synthesized answers

### Phone call transcription
- Transcribe and generate reports from phone calls (not just video meetings)
- Details on plan availability unclear

## Pricing and limits

All prices per user/month. No credit card required for Starter.

| Feature | Starter (Free) | Pro ($14.99/mo) | Global Business ($29.99/mo) |
|---|---|---|---|
| Transcription | 300 min/mo | Unlimited | Unlimited |
| Translation | 60 min/mo | 300 min/mo | Unlimited (4-hr max meeting) |
| Storage | 60 days | Unlimited | Unlimited |
| Max meeting length | 60 min | Unlimited | Unlimited |
| Auto-join | Manual | Automatic | Automatic |
| Audio/Video playback | Yes | Yes | Yes |
| Integrations | Zoom, Meet, Teams | All integrations | All integrations |

**Not mentioned**: Annual billing discounts, enterprise tier pricing, add-ons.

## Integrations

### Video conferencing (native)
- **Zoom** — auto-record, transcribe, summarize, translate
- **Google Meet** — auto-join, notes, translation
- **Microsoft Teams** — AI summaries, transcription, translation

### CRM
- **HubSpot** — push call notes, transcripts, summaries, and tasks into deal/contact records
- **Salesforce** — Coming Soon
- **Pipedrive** — Coming Soon
- **Close.com** — Coming Soon

### Collaboration
- **Slack** — share summaries, clips, and next steps in channels
- **Notion** — save structured meeting notes and transcripts
- **Google Docs** — export summaries (via integration page mention)

### Project management
- **Trello** — convert action items to cards with tags, owners, due dates
- **Monday.com** — sync follow-ups into project items

### Email
- **Gmail** — send meeting reports and follow-ups automatically
- **Outlook** — share summaries, control meeting participation from calendar

### Automation
- **API & Webhooks** — trigger custom automations, connect to Zapier/Make
- Zapier and Make flows supported for CRM updates, analytics pipelines, custom alerts

## API

### Overview
- Docs: `https://docs.jamy.ai/` (JS-rendered — may not be fetchable)
- Help center: `https://helpcenter.jamy.ai/articles/1664038-creating-a-meeting-or-call-report-with-jamys-api`
- Auth: API key generated at `https://app.jamy.ai/settings/apikeys` (OWNER user type required)

### Known endpoints
- **Create Report** — generate a Jamy report from a meeting/call recording uploaded via API
- **Answer Question** — query reports programmatically (ask questions about meeting content)

### Webhooks
- Trigger custom automations via webhooks
- Connect to Zapier/Make for no-code workflows
- Payload details not publicly documented beyond help center

### Limitations
- API docs site is JS-rendered and can't be scraped — partial info only from help center
- Only 2 endpoints documented in the help center (Create Report, Answer Question)
- Rate limits not publicly documented
- No OAuth — API key auth only

## Security & compliance
- SOC 2 Type II certified
- Enterprise-grade encryption (in transit + at rest)
- No AI model training on user data
- Private data storage available for enterprise customers

## Affiliate program
- Portal: `https://affiliates.jamy.ai`
- Also accessible from `https://app.jamy.ai/settings`
- Features: referral link tracking, dashboard, automated payouts
- Commission details not publicly documented

## Known issues (from 29 AppSumo reviews, 3.3/5 stars)

### Critical
- **Calendar integration breaks silently** — bot stops recognizing meetings, multiple users affected
- **AppSumo onboarding reliability** — auto-join works for direct signups but breaks for AppSumo users
- **Chrome extension inconsistent** — "almost never works" per some users

### Feature gaps
- Phone recording not included at any tier (users want at least minimal minutes)
- UI described as "basic" and lacking polish
- Folders don't sort alphabetically
- No bulk report operations
- No keyword search within folders
- No manual language selection for output

### Positive signals
- Customer support responsive when it works (some users report rapid feature deployment)
- Template customization praised
- Translation feature genuinely differentiating
- Good value vs $30/mo competitors
