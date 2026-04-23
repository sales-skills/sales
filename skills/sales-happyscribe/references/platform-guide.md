# HappyScribe Platform Reference

## Platform overview

HappyScribe is a batch transcription, subtitling, and translation platform supporting 120+ languages. It offers both AI-powered automatic transcription (~85% accuracy) and human transcription services (99% accuracy at $2.00/min). Target audience: podcasters, journalists, video editors, content teams, media production companies, and researchers who need to process uploaded audio/video files — not a live meeting tool. Key differentiators vs competitors: broadest language coverage (120+), advanced subtitle editor with styling/positioning, human transcription option, extensive export formats (15+), GDPR/SOC 2 compliance. Barcelona-based company.

## Key modules

### Transcription
- Upload audio/video files for AI transcription
- 120+ languages with regional variants
- Speaker diarization (automatic speaker labels)
- Timestamps at word/sentence level
- Interactive browser-based editor for corrections
- Custom glossaries for domain-specific terminology (Business+)
- Style guides for formatting consistency (Business+)

### Subtitles & Captions
- Automatic subtitle generation from transcription
- Subtitle editor with timing adjustment, styling, positioning
- Export formats: SRT, VTT, STL, Premiere XML, FCP XML, AVID
- Supports 120+ languages

### Translation
- AI translation of transcripts and subtitles
- Human translation available for select language pairs
- Translate to multiple target languages in one order

### Human Transcription
- 99% accuracy guarantee
- $2.00/min ($120/hr), billed separately from subscription
- 4-24 hour turnaround depending on length and language
- Available for select languages

### Organization & Collaboration
- Folders for organizing transcriptions
- Tags for filtering and categorization
- Organization-level management with admin/member roles
- Sharing with public links
- Team seats included in Pro (3) and Business (5) plans

## Pricing and limits

| Plan | Monthly | Annual (per mo) | AI Minutes | Seats | Key features |
|---|---|---|---|---|---|
| Free | $0 | — | 10 (one-time trial) | 1 | Watermarked exports |
| Basic | $17 | $8.50 | 120/mo | 1 | No watermark, unlimited recordings |
| Pro | $29 | $19 | 600/mo | 3 | Advanced subtitle exports, team collaboration |
| Business | $89 | $59 | 6,000/mo | 5 | Style guides, workspace roles, glossaries |
| Enterprise | Custom | Custom | Custom | Custom | SSO, dedicated support, SLA |

**Overages**: $0.20/min ($12/hr) for additional AI transcription beyond monthly allotment.

**Human transcription**: $2.00/min ($120/hr) — billed separately, available on all paid plans.

**Effective per-minute costs**:
- Basic: ~$0.14/min (at full usage)
- Pro: ~$0.048/min (at full usage)
- Business: ~$0.015/min (at full usage)

**Break-even analysis**: Pro is cheaper than Basic if you use more than ~180 min/mo. Business is cheaper than Pro if you use more than ~3,600 min/mo.

## Integrations

**Native integrations**:
- YouTube (direct import)
- Vimeo (direct import)
- Google Drive (import/export)

**Zapier**: 9,000+ app integrations via Zapier
- Trigger: "Automatic Transcription Finished"
- Actions: Create transcription, export

**API**: REST API at `https://www.happyscribe.com/api/v1` — see `happyscribe-api-reference.md` for full details.

**No native CRM connectors** — no direct HubSpot, Salesforce, Pipedrive integration. Use Zapier or API for CRM workflows.

## Data model (API)

Key objects:
- **Organization** — workspace containing users, transcriptions, folders
- **Transcription** — core object with states: initial → ingesting → automatic_transcribing → automatic_done
- **Order** — replaces deprecated Transcription creation endpoint; supports transcription, subtitling, and translation
- **Export** — generated output file in specified format; states: pending → processing → ready → expired
- **Glossary** — custom vocabulary list for improving accuracy
- **Style Guide** — formatting preferences applied to transcriptions
- **Organization Membership** — user access with admin/member roles

## Workflow setup

### Workflow 1: Upload and transcribe a file
1. Get a signed upload URL: `GET /uploads/new?filename=recording.mp3`
2. Upload the file via PUT to the signed S3 URL
3. Create an order: `POST /orders` with `url`, `language`, `organization_id`, `confirm: true`
4. Poll order status or receive webhook notification
5. Export: `POST /exports` with `transcription_ids` and desired `format`
6. Download from the export URL when state is `ready`

### Workflow 2: Human transcription order
1. Upload file (same as above)
2. Create order with `service: "pro"` for human transcription
3. Optionally set `confirm: false` to review cost before submitting
4. Confirm: `POST /orders/{id}/confirm`
5. Wait for fulfillment (4-24 hours)
6. Export the completed transcription

### Workflow 3: Translate a transcription
1. Have a completed transcription
2. Create translation order: `POST /orders/translation` with `source_transcription_id`, `target_languages`, `service: "auto"` or `"pro"`
3. Confirm and wait for completion
4. Export the translated transcription

## Deep dives

### Export format selection guide

| Format | Best for | Notes |
|---|---|---|
| TXT | Simple text processing, email | No timestamps or speaker labels |
| DOCX | Document sharing, Word editing | Supports timestamps, speakers, highlights |
| PDF | Final delivery, archiving | Supports timestamps, speakers, highlights |
| SRT | Video subtitles (most players) | Industry standard subtitle format |
| VTT | Web video subtitles (HTML5) | Web-native, supports styling |
| STL | Broadcast subtitles | European broadcast standard |
| Premiere XML | Adobe Premiere Pro | Import as captions track |
| FCP XML | Final Cut Pro | Import as captions track |
| AVID | Avid Media Composer | Import as subtitle/marker track |
| MAXQDA | Qualitative research | Import for coding and analysis |
| JSON | API/pipeline processing | Structured data with timestamps |
| HTML | Web publishing | Formatted transcript for embedding |

### Glossary best practices
- Add proper nouns (people, companies, products) that appear frequently
- Include technical terms, acronyms, and industry jargon
- Update glossaries regularly as new terms appear
- Glossaries are organization-scoped — shared across team members
- Requires Business plan or higher

### Security & compliance
- GDPR compliant (EU data processing)
- SOC 2 Type II certified
- Encryption at rest and in transit
- Data stored in EU
- No documented HIPAA BAA — verify with HappyScribe if needed for healthcare
