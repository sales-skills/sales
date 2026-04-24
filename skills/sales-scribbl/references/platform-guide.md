# Scribbl Platform Reference

## Platform overview

Scribbl is a bot-free AI meeting note-taker that runs as a Chrome extension, primarily for Google Meet. It silently records, transcribes, and generates AI-powered summaries and action items that appear instantly after every call — without a bot joining the meeting. Trusted by 10,000+ organizations including Google and Spotify. Scribbl positions itself as "the AI notetaker Google Workspace users actually want."

**Key differentiators**: Bot-free Chrome extension approach (no visible participant), instant post-call AI notes in a new browser tab, AI Copilot (GPT-4 chat with meeting content), 40+ language transcription, and a generous free tier (15 meetings/month with unlimited meeting length).

## Key modules

### Recording & Transcription
- Silent in-browser recording via Chrome extension — no bot joins the meeting
- Automatic recording starts when a Google Meet call begins (configurable)
- Real-time transcription in 40+ languages
- Video recording with synchronized transcript
- Mark important moments during meetings for quick reference

### AI Notes & Summaries
- AI-generated summaries appear instantly in a new browser tab after call ends
- Automatic action item extraction with assignees
- Key decision highlighting
- Topic-based breakdown of discussions
- AI Copilot — GPT-4-powered chat to ask questions about meeting content (Pro+)

### Meeting Library & Search
- Searchable meeting library across video, transcript, and AI-generated content
- Collections for organizing meetings by project, client, or topic
- Video playback with transcript syncing
- Selective sharing via direct links or team library

### Team Collaboration
- Shared team meeting library (Team plan)
- Automated meeting sharing rules (Team plan)
- Admin controls and unified billing (Team plan)
- Up to 5 team members on Free/Pro, unlimited on Team

## Pricing and limits

*Best-effort as of 2026-04 — verify on scribbl.co/pricing before quoting.*

| Feature | Lite (Free) | Pro | Team |
|---|---|---|---|
| Price | $0/mo | $13/user/mo annual ($20 monthly) | Custom (contact sales) |
| Meetings/month | 15 | Unlimited | Unlimited |
| Meeting length | Unlimited | Unlimited | Unlimited |
| AI notes & action items | Yes | Yes | Yes |
| AI Copilot (chat) | No | Unlimited | Unlimited |
| Video retention | 2 months | 1 year | Custom |
| Storage | — | 500GB per team | Custom |
| Team size | Up to 5 | Up to 5 | Unlimited |
| CRM integrations | No | No | Yes |
| Slack integration | No | No | Yes |
| Google Drive integration | No | No | Yes |
| Zoom/Teams support | No | No | Yes (coming soon) |
| Admin controls | No | No | Yes |
| Dedicated support | No | No | Yes |

**Credit system**: Free tier uses 1 credit per meeting recorded. 15 credits refresh monthly.

## Integrations

### Native integrations (Team plan only)
- **Slack** — auto-share meeting summaries to channels
- **Google Drive** — auto-save meeting notes to Google Docs
- **CRM** — advertised but specific CRM names not confirmed (likely HubSpot/Salesforce based on category norms)

### Sharing
- Shareable meeting links (no recipient sign-up required)
- Team library for internal sharing
- Google Docs export

### What's NOT available
- No public API (REST, GraphQL, or otherwise)
- No webhooks
- No Zapier/Make/n8n automation
- No MCP server
- No OAuth for third-party apps
- No calendar integration for auto-join scheduling (extension auto-detects Meet calls)

## Supported platforms

| Platform | Status |
|---|---|
| Google Meet | Fully supported |
| Zoom | Coming soon |
| Microsoft Teams | Coming soon |

**Browser requirement**: Chrome only (Chrome extension-based architecture).

## Workflow setup

### Getting started (individual)
1. Install Scribbl Chrome extension from Chrome Web Store
2. Sign up for free account (no credit card)
3. Join any Google Meet call — Scribbl auto-detects and starts recording
4. After call ends, AI notes appear in a new browser tab
5. Review summary, action items, and transcript
6. Optionally share via link or save to library

### Setting up a team
1. Upgrade to Pro (up to 5 members) or Team plan (6+)
2. Admin invites team members from Scribbl dashboard
3. Configure shared meeting library
4. Set up auto-sharing rules (Team plan)
5. Connect Slack/Google Drive/CRM integrations (Team plan)

### Searching past meetings
1. Open Scribbl meeting library
2. Use search across video, transcript, and AI-generated content
3. Filter by date, participant, or collection
4. Click result to jump to exact moment in video/transcript
5. Use AI Copilot to ask natural language questions about meeting content (Pro+)

## Deep dives

### Bot-free vs bot-based: why it matters
Scribbl's Chrome extension approach means no bot appears as a meeting participant. This avoids:
- Participant confusion ("who is Scribbl bot?")
- IT security blocks on bot participants
- Meeting host having to admit the bot
- Guest discomfort with an unknown participant recording

The trade-off: recording only captures what the Chrome tab sees/hears. If your microphone is muted or you switch tabs, recording quality may degrade.

### AI Copilot
GPT-4-powered chat integrated into the web app. After a meeting is processed, you can ask questions like:
- "What were the key decisions made?"
- "Summarize what [person] said about the timeline"
- "What action items were assigned to me?"
- "What objections were raised about pricing?"

Available on Pro and Team plans only. Unlimited queries on Pro+.

### Privacy & security
- Scribbl does NOT train AI models with customer data
- Data stays within account boundaries
- No cross-account data sharing
- Trusted by enterprise customers (Google, Spotify cited)
- Specific compliance certifications (SOC 2, GDPR, HIPAA) not publicly documented — confirm with sales for enterprise requirements

### Affiliate program
30% commission for first 12 months of referred memberships. Via Wise payments. Contact: john@scribbl.co. No strict brand guidelines.
