# Fellow Platform Reference

## Platform overview

Fellow (fellow.ai) is an AI meeting assistant and note-taker focused on meeting management for managers and teams. Named top pick by NYT Wirecutter for transcribing and summarizing meetings. Unlike sales-first tools (Gong, Avoma), Fellow emphasizes structured agendas, 1:1 templates, and collaborative notes alongside AI transcription. SOC 2 Type II, HIPAA, and GDPR compliant. Never trains on customer data.

## Key modules

### AI Meeting Notes & Transcription
- Automatic transcription in 99 languages
- AI-generated summaries and action items with owners and due dates
- Ask Fellow AI chatbot — search across all past meetings for decisions, action items, context
- Audio/video file upload support (not just live meetings)

### Recording modes
- **Bot-based**: Fellow bot joins the meeting (Zoom, Google Meet, MS Teams, Slack huddles). Visible in participant list. Video playback available.
- **Bot-free**: Records locally via desktop app — no bot in the meeting. Works for external calls, ad-hoc conversations, in-person meetings. Requires desktop app install. **No automated disclosure for external participants.**
- Can configure which mode to use per meeting type.

### Meeting management
- Structured collaborative agendas with real-time editing
- 500+ pre-built meeting templates (1:1s, team standups, retrospectives, etc.)
- Org-wide meeting templates (Business+)
- Meeting automations (Team+)
- Action items tracked across meetings with accountability

### CRM integration
- Native HubSpot and Salesforce sync (Business+)
- Fellow identifies deal updates, contact notes, next steps from meeting content
- Suggests CRM fields to update automatically
- AI-powered CRM field updates — auto-fill without manual review (Enterprise only)

### Analytics & governance
- Keyword tracking (Business+) — monitor topics across meetings
- Org-wide meeting analytics dashboard (Enterprise)
- Advanced recording permissions (Enterprise)
- Transcript redaction (Enterprise)
- Domain control and user provisioning (Enterprise)
- Bot avatar customization (Business+)

## Pricing and limits

Pricing as of 2026-04 (best-effort — verify on fellow.ai/pricing):

| Tier | Annual | Monthly | AI Notes | AI Recordings | Key features |
|---|---|---|---|---|---|
| Free | $0 | $0 | 5 lifetime | 5 lifetime | Basic transcription, Ask Fellow, uploads |
| Team | $7/user | $11/user | 10/user/month | 10/user/month | Meeting automations, PM integrations (Confluence, Notion), **API access**, Zapier |
| Business | $15/user | $23/user | Unlimited | Unlimited | CRM sync (HubSpot, Salesforce), keyword tracking, org-wide templates, sales AI recap templates, bot avatar customization |
| Enterprise | $25/user | Custom (10+ users) | Unlimited | Unlimited | AI-powered CRM field updates, transcript redaction, org-wide analytics, domain control, user provisioning, advanced recording permissions |

**Special programs:**
- Startups: up to 25% off first year
- Non-profits and educational institutions: discounted rates available

## Integrations

### Native (50+)
- **Video platforms**: Zoom, Google Meet, Microsoft Teams, Slack huddles
- **CRM**: Salesforce, HubSpot (Business+)
- **Project management**: Jira, Asana, Linear, Monday, Notion, Confluence (Team+)
- **Other**: Slack, Glean, GitHub
- **Calendar**: Google Calendar, Outlook

### Automation
- **Zapier**: 8,000+ app connections. Triggers for agendas, AI notes, transcripts. Available on Team, Business, Enterprise.
- **n8n**: Official Fellow node (fellowapp/n8n-nodes-fellow on GitHub)
- **API**: REST API for custom integrations (Team+)

### MCP Server
Third-party MCP server exists (github.com/liba2k/fellow-mcp) wrapping the Fellow API — provides tools for meeting data, transcripts, summaries, action items, participants.

## Data model (API)

The API exposes:
- **Meetings**: metadata, timestamps, participants
- **Transcripts**: text with speaker labels and timestamps
- **Agendas**: structured agenda items
- **AI Notes**: summaries, action items
- **Action items**: with owners and due dates

API responses are JSON containing transcript text, speaker timestamps, agendas, and metadata.

## Workflow setup

### Setting up bot-free recording
1. Install Fellow desktop app (required for bot-free mode)
2. In meeting settings, enable bot-free recording for specific meeting types
3. For external calls: bot-free avoids the awkward bot-in-meeting situation
4. Note: no automated disclosure — ensure compliance with local recording laws

### Setting up CRM sync (Business+)
1. Navigate to workspace integrations
2. Connect HubSpot or Salesforce
3. Fellow auto-detects meeting participants and matches to CRM contacts
4. After each meeting, Fellow suggests CRM fields to update
5. Enterprise: enable AI-powered auto-fill for hands-free CRM updates

### Setting up Zapier automation (Team+)
1. Connect Fellow in Zapier
2. Available triggers: new agenda, new AI notes, new transcript
3. Chain to downstream apps: Slack, CRM, project management
4. Note: some triggers require manual kickoff — test your specific workflow

## Deep dives

### Security posture
- SOC 2 Type II certified
- HIPAA compliant
- GDPR compliant
- Never trains on customer data
- API access scoped to user's in-app permissions
- 90-day API audit logs with IP addresses and request body hashing
- Admin control over API enablement/disablement

### Fellow vs dedicated sales tools
Fellow is a meeting management platform, not a revenue intelligence tool. For sales teams:
- **Pick Fellow when**: You want 1:1 templates, structured agendas, and manager workflows alongside AI notes. Good for CS/leadership meetings.
- **Avoid Fellow when**: Sales conversation intelligence is the primary need — methodology scorecards, deal boards, pipeline intelligence. Use Gong, Avoma, or Fathom instead.
- Fellow's CRM sync (Business+) is solid but not as deep as Gong's deal intelligence or Avoma's MEDDIC scorecards.

### Ambassador/Affiliate program
- Ambassador program via Cello: up to $10,000 per new referred customer, 100% free to join, no minimum referrals, PayPal/Venmo payouts within 48h
- Affiliate program via Impact: 5% per sale commission
- Partner page: fellow.ai/partners
