# Otter.ai Platform Reference

## Platform overview

Otter.ai is an AI-powered meeting transcription and note-taking platform. Positioned as a broad-market tool (not sales-first), it's strongest for live transcription, real-time captioning, and general meeting productivity. OtterPilot is the auto-join bot that joins Zoom, Google Meet, and Microsoft Teams calls to record, transcribe, and summarize. Otter also supports in-person recording via mobile/desktop apps.

Target audience: sales teams (via Sales Notetaker on Enterprise), educators, journalists, recruiters, and general knowledge workers. G2 rating: 4.4/5 with 460+ reviews.

## Key modules

### OtterPilot (AI Meeting Assistant)
- Auto-joins Zoom, Google Meet, and Microsoft Teams meetings via calendar integration
- Records audio, generates real-time transcript, identifies speakers
- Produces AI summary with key points, decisions, and action items after the meeting ends
- Can be disabled per-meeting or for specific calendar events
- Desktop app offers "invisible" recording (no bot joins the call) — Mac/Windows only

### Live Transcription
- Real-time captioning during meetings
- Supports speaker identification (train with voice samples for better accuracy)
- Multi-language: 4 languages supported as of 2026 (English is strongest)
- Highlights and comments can be added during the meeting

### AI Summaries & Action Items
- Auto-generated after each meeting
- Summaries include key takeaways, decisions, and follow-ups
- Action items extracted and attributed to speakers
- Known limitation: action items can feel generic — manual review recommended for important meetings

### AI Chat
- Query your meetings in natural language: "What did Sarah say about the Q3 budget?"
- Works across all transcripts in your workspace
- "Hey Otter" voice activation for hands-free queries
- Query limits: Free 20/mo, Pro 50/mo, Business 200/mo
- Can query connected apps (Enterprise)

### Channels
- Organize meetings by team, project, or topic
- Share channels with team members
- Channel-level permissions and access control

### Sales Notetaker (Enterprise only)
- Automatically pushes sales insights and call notes to CRM
- Native integrations with HubSpot, Salesforce, Dynamics, Zoho
- Extracts sales-specific insights (objections, next steps, competitor mentions)
- Available on Monday.com as well

### MCP Server (announced)
- Connect AI models (Claude, ChatGPT) to Otter data via Model Context Protocol
- Enables smarter summaries, contextual suggestions, automated insights
- Setup details: check `https://help.otter.ai/hc/en-us/articles/35287607569687-Otter-MCP-Server`

## Pricing and limits

All prices as of 2026-04 — verify on otter.ai/pricing before quoting.

| Feature | Free | Pro | Business | Enterprise |
|---|---|---|---|---|
| Price | $0 | $16.99/mo ($8.33 annual) | $30/mo ($19.99 annual) | Custom |
| Transcription minutes | 300/mo | 1,200/mo | Unlimited | Unlimited |
| Per-meeting max | — | 90 min | 4 hours | 4 hours |
| Concurrent meetings | 1 | 1 | 3 | Custom |
| File imports | 3 lifetime | 10/mo | Unlimited | Unlimited |
| Conversation history | 25 max | Unlimited | Unlimited | Unlimited |
| AI Chat queries | 20/mo | 50/user/mo | 200/user/mo | Custom |
| Storage | Limited | Unlimited | Unlimited | Unlimited |
| CRM integrations | — | Salesforce, HubSpot (basic) | Salesforce, HubSpot (basic) | Full (HubSpot, Salesforce, Dynamics, Zoho, Monday.com) + Sales Notetaker |
| Zapier | — | Yes | Yes | Yes |
| API/Webhooks | — | — | — | Yes (beta) |
| SSO/SCIM | — | — | — | Yes |
| HIPAA | — | — | — | Add-on |
| Custom AI workflows | — | Advanced workflows | Custom workflows | Unlimited |
| Admin analytics | — | — | Activity logs, usage analytics | Full |
| Support | Standard | Standard | Prioritized | Dedicated CSM |

**Discounts**: Student/teacher 20% on Pro (requires .edu email). India-specific pricing available.

## Integrations

### Native integrations

**Meeting platforms**: Zoom, Google Meet, Microsoft Teams (OtterPilot auto-join)

**Communication**: Slack (share transcripts/summaries), Zoom Phone, Dialpad, RingCentral, JustCall

**CRM** (depth varies by plan):
- HubSpot — logs transcripts and pushes sales insights (full depth on Enterprise)
- Salesforce — automatic transcript and insight logging (full depth on Enterprise)
- Microsoft Dynamics — Sales Notetaker pushes insights (Enterprise)
- Zoho — Sales Notetaker pushes insights (Enterprise)
- Monday.com — Sales Notetaker pushes insights (Enterprise)
- Salesloft — auto-transcribes Salesloft calls
- Outreach — review and search recorded conversations

**Calendar**: Google Calendar, Microsoft Outlook (auto-schedule OtterPilot)

**Storage/export**:
- Google Drive — sync transcripts
- Dropbox — auto-transcribe uploaded files
- Amazon S3 — export transcripts, summaries, metadata
- Microsoft OneDrive — export transcripts
- SharePoint — export to SharePoint
- Egnyte — export transcripts and metadata

**Productivity**:
- Asana — convert action items to tasks
- ClickUp — send summaries and action items
- Notion — sync transcripts, notes, key takeaways
- Airtable — send transcripts, summaries, meeting metadata
- Jira — send key takeaways and action items
- Google Docs — sync transcriptions

**Data/analytics**:
- Snowflake — export and analyze transcripts (Enterprise)

**Automation**: Zapier (8,000+ app connections, Pro+ plans)

**Apps**: iOS, Android, Desktop (Mac/Windows), Chrome Extension

### Zapier integration (Pro+ plans)

Zapier is the primary integration path for non-Enterprise users. Key capabilities:
- **Triggers**: Meeting Recording Finished
- **Exports**: Transcripts, summaries, outlines, action items, insights, calendar guests
- **Common Zaps**: Otter → Slack (post summary), Otter → Google Sheets (log meetings), Otter → CRM (create activity), Otter → Notion (append transcript)
- Two-way: can also send recordings INTO Otter for transcription

## API (Enterprise only)

**Status**: Beta — contact Otter account manager to enable.

- Auth: API key (workspace-scoped)
- Rate limit: ~500 requests/minute (Enterprise)
- No publicly indexed API docs — documentation provided after Enterprise API access is granted
- Export formats available via API: TXT, DOCX, PDF, SRT (captions), MP3 (audio)

**Workspace Webhooks** (Enterprise):
- Docs: `https://help.otter.ai/hc/en-us/articles/35634832371735-Workspace-Webhooks`
- Available to Workspace Admins
- Push meeting events to external endpoints

**Unofficial APIs** (not recommended for production):
- Python: `github.com/gmchad/otterai-api` — users, speeches, speakers, folders, groups
- Node.js: `github.com/omerdn1/otter.ai-api` — speech-to-text service wrapper
- Neither is maintained or production-grade

**Recall.ai integration**: Third-party service (recall.ai) offers a unified API for Otter and other meeting platforms — can be a production-grade alternative to Otter's beta API.

## Workflow setup

### Setting up OtterPilot auto-join
1. Connect calendar: Settings → Calendar → Link Google Calendar or Outlook
2. Enable auto-join: Settings → OtterPilot → Toggle "Automatically join meetings"
3. Configure which meetings to join: all, only meetings you organize, only meetings with external participants, etc.
4. Verify: check that the next meeting on your calendar shows "OtterPilot will join"

### Setting up CRM sync (Enterprise)
1. Go to Settings → Integrations → select your CRM (HubSpot, Salesforce, Dynamics, Zoho)
2. Authenticate with your CRM credentials
3. Configure which fields to sync: transcripts, summaries, action items, sales insights
4. Map Otter fields to CRM fields (contact association, deal linking)
5. Test with a single meeting before rolling out to the team

### Setting up Zapier (Pro+)
1. In Zapier, search for "Otter.ai" and create a new Zap
2. Choose trigger: "Meeting Recording Finished"
3. Authenticate your Otter account
4. Choose action app (Slack, HubSpot, Google Sheets, etc.)
5. Map fields: transcript, summary, action items, participants, meeting title
6. Test and activate

### Improving transcription accuracy
1. **Audio setup**: Use external microphone, ensure quiet environment, stable internet (≥5 Mbps up)
2. **Speaker training**: Settings → Speaker Identification → add voice samples for regular participants
3. **Custom vocabulary**: Settings → Vocabulary → add industry-specific terms, names, acronyms
4. **Post-meeting corrections**: Edit speaker labels and transcript errors — Otter learns from corrections
5. **Meeting hygiene**: Mute when not speaking, avoid crosstalk, use headphones to reduce echo

## Deep dives

### Otter vs dedicated sales tools (Gong, Avoma, Fathom)

Otter is a general-purpose transcription tool, not a sales intelligence platform. Key gaps vs dedicated sales tools:
- **No methodology scorecards** (MEDDIC, BANT, SPICED) — Avoma and Gong have these built in
- **No deal intelligence** — no deal risk scoring, pipeline analytics, or win-loss analysis
- **Thin CRM depth** — even on Enterprise, CRM sync is primarily transcripts/summaries, not structured deal data
- **No coaching analytics** — no talk ratio, longest monologue, question frequency, or manager feedback workflows

Otter is a good fit when transcription and general meeting productivity are the primary needs. For sales-specific conversation intelligence, dedicated tools deliver significantly more value.

### Privacy and compliance considerations

- **Recording consent**: OtterPilot joining as a visible bot in meetings provides implicit notice, but check jurisdiction-specific consent laws (two-party consent states in the US, GDPR in EU)
- **Data storage**: Transcripts stored in Otter's cloud. Enterprise offers private storage options.
- **HIPAA**: Available as Enterprise add-on only
- **SOC 2**: Available on Enterprise
- **Class action (2026)**: Otter faces litigation around recording practices — monitor developments if deploying at scale
- **Desktop app recording**: The "invisible" recording mode (no bot joins) may create consent issues in jurisdictions requiring all-party notification
