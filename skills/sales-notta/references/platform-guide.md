# Notta Platform Reference

## Platform overview

Notta is an AI-powered meeting transcription and note-taking platform supporting 58 languages with claimed 98% accuracy. It differentiates from competitors primarily on multilingual support (vs Otter's 3 languages) and the Notta Brain cross-meeting AI agent. Target audience ranges from individual professionals needing transcription to global sales teams requiring CRM-synced meeting notes across multiple languages.

Company: Notta Technologies (also known as Langogo), headquartered in Japan with global operations.

## Key modules

### Notta Bot
AI meeting participant that auto-joins scheduled meetings via calendar integration. Supports Zoom, Google Meet, Microsoft Teams, and Webex. Records audio (and video on Business+) and generates real-time transcription. Can be invited manually via Chrome extension for Google Meet.

### AI Transcription
Converts audio/video to text in 58 languages. Supports:
- Live transcription during meetings (3 min limit on Free, up to 5 hours on paid)
- File upload transcription (drag-and-drop, up to 5-hour files on paid)
- Speaker diarization for up to 10 speakers
- Custom vocabulary for domain-specific terms (unlimited on Enterprise)

**Important**: Language must be pre-selected before recording. No automatic language detection. Switching languages mid-call produces gibberish output.

### AI Notes & Summaries
Auto-generates structured meeting summaries with:
- Key discussion points
- Action items with assignees
- Searchable timestamps
- Speaker attribution

### Notta Brain
"Second Brain" AI agent that:
- Cross-analyzes multiple recordings and uploaded documents
- Generates PowerPoint slides and images from meeting content
- Supports web research toggle for supplementary context
- Chat-based Q&A across all meeting data in your workspace
- Document upload analysis (PDFs, reports alongside meeting data)

### Chrome Extension
Invite Notta Bot directly from Google Meet interface. Known reliability issues — may require periodic reinstallation.

### Mobile Apps
iOS and Android apps for on-the-go recording and transcription. Record in-person meetings, phone calls, and interviews.

### Export
Supported formats: TXT, PDF, DOCX, SRT (subtitle format). Export is Pro+ only — Free plan cannot export transcripts.

### Collaboration
Workspace sharing, transcript folders, snippet sharing, comments and @mentions within transcripts.

## Pricing and limits

*Best-effort as of 2026-04 — verify at notta.ai/pricing.*

| Feature | Free | Pro | Business | Enterprise |
|---|---|---|---|---|
| Monthly price | $0 | $13.99 | $44-$203 (by seats) | Custom |
| Annual price | $0 | $8.25/mo | $59-$188/mo (by seats) | Custom |
| Seats | 1 | 1 | Up to 20 | 21+ |
| Transcription minutes | 120/mo | 1,800/mo | 2,400/user/mo | Flexible |
| Live transcription limit | 3 min | Up to 5 hrs | Up to 5 hrs | Custom |
| File upload limit | 5 min | Up to 5 hrs | Up to 5 hrs | Custom |
| Transcript export | No | Yes (TXT, DOCX, PDF, SRT) | Yes | Yes |
| Speaker identification | Limited | Yes | Yes | Yes |
| AI summaries | Limited | Yes | Yes | Yes |
| Video recording | No | No | Yes | Yes |
| CRM sync | No | No | Yes | Yes |
| Chrome extension | No | No | Yes | Yes |
| Admin controls / roles | No | No | Yes | Yes |
| Usage analytics | No | No | Yes | Yes |
| SAML SSO | No | No | No | Yes |
| Audit logs | No | No | No | Yes |
| Unlimited custom vocabularies | No | No | No | Yes |
| Priority 24/7 support | No | No | No | Yes |
| AI training data opt-out | No | No | No | Yes |

**Free tier gotcha**: 120 min/mo total, 3-min live transcription limit. Credit card required for trial of paid features — auto-charges if not cancelled.

**Notta Brain**: Appears as a separate capability/add-on — specific credit pricing not fully documented publicly.

## Integrations

### Meeting platforms (native)
- Zoom (bot auto-join)
- Google Meet (bot auto-join + Chrome extension)
- Microsoft Teams (bot auto-join)
- Webex (bot auto-join)

### Calendar
- Google Calendar (auto-join scheduling)
- Microsoft Outlook (auto-join scheduling)

### CRM (Business+ plans only)
- **Salesforce** — sync to Log a Call or Tasks; associate with Deal or Contact
- **HubSpot** — sync call summaries to Contacts & Deals
- **Zoho CRM**
- **Freshsales**
- **Salesflare**

### Productivity / Storage
- Google Drive
- Google Docs
- Microsoft OneDrive
- Notion

### Communication
- Slack — notifications on comments/mentions, send AI summaries to channels

### Automation
- **Zapier** (8,000+ apps) — the only programmatic interface
  - Triggers: New AI Notes generated, New recording shared publicly, New recording transcribed
  - Actions: Upload audio/video for transcription, Generate AI summary from transcription
- No Make/Integromat support
- No n8n support
- No native webhook endpoint

### What Notta does NOT have
- No public REST/GraphQL API
- No native webhooks (only via Zapier)
- No MCP server
- No Make or n8n integration
- No CLI tool or SDK

## Security & compliance

- SOC 2 Type II certified
- ISO 27001 certified
- GDPR compliant
- CCPA compliant
- APPI compliant (Japan)
- SSL/TLS 1.2/1.3 encryption in transit
- AES-256 encryption at rest
- Infrastructure: AWS with regular backups

**Data training caveat**: Free, Pro, and Business plan data is used for AI model training by default. Only Enterprise plan can opt out. This is a significant consideration for teams handling sensitive sales conversations, competitive intelligence, or regulated industries.

## Workflow setup

### Setting up Notta Bot for auto-join
1. Sign in at notta.ai or via mobile app
2. Connect Google Calendar or Microsoft Outlook under Settings → Calendar
3. Enable "Auto-join" toggle — Notta Bot will join all scheduled meetings with video links
4. Optionally configure: which calendars to monitor, whether to record all meetings or only those with specific keywords
5. Bot appears as "Notta AI Notetaker" in the meeting participant list

### Setting up CRM sync (Business+ only)
1. Go to Settings → Integrations → CRM
2. Select Salesforce, HubSpot, Zoho, Freshsales, or Salesflare
3. Authorize the connection via OAuth
4. Configure field mapping: which Notta fields map to which CRM fields
5. Choose sync trigger: automatic after every meeting, or manual per meeting

### Setting up Zapier automation
1. Create a new Zap in Zapier
2. Select "Notta" as the trigger app
3. Choose trigger event: "New AI Notes Generated", "New Recording Transcribed", or "New Recording Shared Publicly"
4. Connect your Notta account via API key (generated in Notta Settings → Integrations → Zapier)
5. Add action steps (e.g., "Create Note in HubSpot", "Send Message in Slack", "Append to Google Sheet")
6. Test and activate

### Using Notta Brain
1. Ensure you have recordings in your workspace
2. Navigate to Notta Brain section
3. Upload any supplementary documents (PDFs, reports)
4. Ask questions in natural language — Brain searches across all your meeting data
5. Toggle "Web Research" for questions that need external context
6. Generate slides or images from meeting content for presentations
