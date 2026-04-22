# Transkriptor Platform Reference

## Platform overview

Transkriptor is an AI-powered transcription platform claiming 99%+ accuracy across 100+ languages with dialect detection. It offers both batch file transcription (upload audio/video) and live meeting recording via bot (Zoom, Google Meet, Microsoft Teams). Target audience ranges from individual content creators and students (50% education discount) to mid-market teams needing multilingual transcription with speaker analytics. Differentiators: broad language coverage (100+), built-in subtitle generation, AI chat for querying transcripts, knowledge base creation from multiple files, and sentiment analysis on Team plan.

**Parent company**: Also operates Speaktor (text-to-speech) and Eskritor (AI writing) as sister products under the same umbrella.

## Key modules

### Transcription engine
- **Batch upload**: Drag-and-drop audio/video files for transcription
- **Meeting bot**: Auto-joins Zoom/Google Meet/Teams via calendar sync
- **URL transcription**: Transcribe from YouTube, Google Drive, Dropbox, OneDrive URLs
- **Languages**: 100+ with dialect detection
- **Speaker diarization**: Multi-speaker identification (accuracy varies — weaker than competitors for overlapping speech)
- **Custom vocabulary**: Add domain terms, acronyms, proper nouns (paid plans, via app or API)

### AI features
- **Summaries**: AI-generated meeting summaries and action items
- **Sentiment analysis**: Conversation tone detection (Team plan only)
- **AI Chat**: Query transcribed content in natural language
- **Knowledge base**: Combine multiple transcripts into a searchable knowledge base
- **Meeting templates**: Pre-built templates for sales, marketing, education, and custom

### Subtitle/caption generation
- **Formats**: SRT, VTT
- **Languages**: Same 100+ language coverage
- **Subtitle service parameter**: Use `service: "Subtitle"` in API calls for optimized subtitle output

### Editor
- Built-in transcript editor for corrections
- Speaker label editing
- Timestamp-aligned editing

### Integrations
- **Meeting platforms**: Zoom, Google Meet, Microsoft Teams (via bot auto-join)
- **Storage**: Google Drive, Dropbox, OneDrive, SharePoint
- **Productivity**: Notion, Google Docs, OneNote, Slack, Gmail, Outlook, Trello
- **CRM**: HubSpot, Salesforce, Zoho (listed — depth of integration is disputed in reviews; verify before relying on CRM field-mapping)
- **Automation**: Zapier (8,000+ apps), Make (community integration)
- **Export**: PDF, SRT, TXT, DOCX

## Pricing and limits

| Plan | Monthly | Annual | Minutes/mo | Key gates |
|---|---|---|---|---|
| Lite | $9.99/mo | — | 300 | Basic transcription, editing, translation |
| Pro | $19.99/mo | $99.99/yr ($8.33/mo) | 2,400 | Calendar sync, meeting recording, summary templates, AI knowledge base, workspaces |
| Team | $30/seat/mo | $240/seat/yr ($20/seat/mo) | 3,000/seat | Speaker analysis, sentiment detection, advanced analytics, role-based access, custom bot branding |
| Enterprise | Custom | Custom | Custom | **API access**, custom development, system integration, priority support, advanced security |

**Bulk plans** (for high-volume transcription):
| Hours | Monthly | Annual (50% off) |
|---|---|---|
| 100 hrs | $60/mo | $30/mo |
| 250 hrs | $150/mo | $75/mo |
| 500 hrs | $300/mo | $150/mo |
| 1,000 hrs | $600/mo | $300/mo |

**Other notes**:
- **Free tier**: Homepage mentions ~30 min/day, but specifics are unclear — may be a trial rather than a permanent free plan
- **Education discount**: 50% off all plans for students
- **Unused minutes do NOT roll over** — monthly allotments reset each billing cycle
- **API**: Enterprise plan only — no API access on Lite, Pro, or Team

## Data model (API — Enterprise only)

**Key objects**:
- **File** (transcription result): Contains `order_id`, segments with `text`, `StartTime`, `EndTime`, `Speaker`
- **Folder**: Organizational container for files
- **Meeting**: Scheduled or ad-hoc meeting recording
- **Custom vocabulary**: User-defined terms for improved recognition
- **Webhook**: Event subscription for async notifications

**Relationships**: Files belong to folders. Meetings produce files. Webhooks subscribe to file/meeting events.

## Workflow setup

### Workflow 1: Meeting recording via bot
1. Connect calendar in Settings → Calendar Sync (Google Calendar or Outlook)
2. Transkriptor bot auto-joins meetings with recognized meeting links
3. After meeting ends, transcript + AI summary appear in dashboard
4. Optionally configure meeting templates (sales, marketing, custom) for structured summaries
5. Export or push to connected apps (Notion, Slack, Google Docs)

### Workflow 2: Batch file transcription
1. Upload audio/video file(s) via drag-and-drop or URL (YouTube/GDrive/Dropbox/OneDrive)
2. Select language (or use auto-detect)
3. Wait for processing (time depends on file length)
4. Review and edit transcript in built-in editor
5. Export as PDF, SRT, TXT, or DOCX

### Workflow 3: API pipeline (Enterprise only)
1. Get API key from https://app.transkriptor.com/account
2. Get upload URL: `POST /transcription/local_file/get_upload_url`
3. Upload file: `PUT {returned upload_url}` with binary body
4. Start transcription: `POST /transcription/local_file/initiate_transcription` with `url`, `language`, `service` (Standard/Subtitle), optional `folder_id` and `triggering_word`
5. Poll or use webhook for completion
6. Fetch result: `GET /files/{order_id}/content`
7. Export: `POST /files/{order_id}/content/export` with format (pdf/srt/txt/docx) and options

## Deep dives

### Custom vocabulary setup
Custom vocabulary improves accuracy for domain-specific terms. Available on paid plans.

**Via app**: Settings → Custom Vocabulary → Add terms one by one or in bulk
**Via API** (Enterprise):
- Set: `POST /custom_vocabulary` with term list
- Get: `GET /custom_vocabulary`
- Delete: `DELETE /custom_vocabulary`

Tips:
- Add company names, product names, acronyms, and technical terms
- Include proper nouns that the generic model consistently misses
- Does NOT apply retroactively — only improves future transcriptions
- Test with a sample file after adding vocabulary to verify improvement

### Speaker recognition
- Transkriptor auto-detects speakers and assigns labels (Speaker 1, Speaker 2, etc.)
- You can rename speakers after transcription in the editor
- API endpoint: `POST /files/{order_id}/recognize_speakers` — triggers re-analysis
- **Known limitation**: Accuracy drops significantly with overlapping speech or similar-sounding voices

### Webhook integration (Enterprise only)
- Create: `POST /webhooks` with URL and event types
- View: `GET /webhooks`
- Update: `PUT /webhooks/{id}`
- Delete: `DELETE /webhooks/{id}`
- Events fire on transcription completion, file creation, and other lifecycle events (specific event types not fully documented)

### Affiliate program
- 30% lifetime recurring commission
- URL: https://transkriptor.com/affiliate/
- Monthly payouts via Stripe or Paddle
- Real-time tracking dashboard
- Open to anyone (bloggers, influencers, marketers)
