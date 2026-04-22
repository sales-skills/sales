# Verbit Platform Reference

## Platform overview

Verbit is an enterprise AI+human transcription, captioning, and accessibility platform. Positioning: hybrid approach combining proprietary Captivate ASR engine with professional human reviewers to deliver high-accuracy transcripts and live captions. Target verticals: higher education (ADA compliance, LMS integration), legal (depositions, court proceedings), media & entertainment (subtitles, dubbing, localization), and corporate/government (meetings, events, town halls). Key differentiator vs pure-AI tools (Sonix, Otter): human verification tier for 99%+ accuracy, enterprise compliance certifications (SOC 2, ISO 27001, HIPAA), and deep accessibility standards support (ADA, WCAG 2.0 AA, CVAA). Key differentiator vs pure-human services (Rev human tier, TranscribeMe): custom ASR models tuned per customer, Gen.V AI insights layer, and platform-level integrations. 2,500+ customers.

## Key modules

### Captivate (ASR Engine)
Proprietary automatic speech recognition tuned for niche subject matter. Enterprise customers get custom model training for domain-specific vocabulary (legal terminology, academic jargon, medical terms). Available for both live and recorded content.

### Gen.V (Generative AI Insights)
AI-powered content generation from transcripts and captions:
- **Summaries** — condensed overview of transcript content
- **Keywords** — extracted key terms and topics
- **Chapters** — segment long content into navigable sections
- **Quizzes** — auto-generated assessment questions (education use case)
- **People & Places** — named entity extraction
- **Index Transcript** — searchable transcript index
- Available via Insights API after transcription completes

### Live Captioning & Subtitling
Real-time captions for events, lectures, courtrooms, town halls. Integrates with Zoom, Microsoft Teams, and RTMP/WebSocket streams. Two modes:
- **AI-only** — automated captioning from Captivate ASR
- **Human-assisted** — professional captioners provide real-time captions (Enterprise)

### Post-Production Transcription
Upload recorded audio/video for batch processing:
- AI-only processing (minutes)
- Human review tier (hours to days, 99%+ accuracy)
- Custom ASR profiles per customer
- Output formats: text, SRT, VTT, Word, PDF

### Audio Description
Accessibility narration for video content — describes visual elements for vision-impaired viewers. Enterprise service.

### Translation & Dubbing
Translation to 50+ languages. Dubbing and localization for global content distribution. Enterprise service.

### SmartPlayer
Embeddable video player with synchronized captions:
- Create via API (`POST /job/smart_player`)
- Searchable within captions
- ADA/WCAG compliant playback
- Custom branding options

### Note-Taking / Minute-Taking
Meeting documentation service — human note-takers produce formatted meeting minutes. Enterprise service.

## Pricing and limits

*Best-effort as of 2026-04 — verify on verbit.ai.*

| Feature | Self-Service ($29/mo) | Enterprise (custom) |
|---|---|---|
| Transcription hours | 20 hrs/mo (~$1.45/hr) | Volume-based (negotiated) |
| ASR accuracy | Standard Captivate | Custom-tuned Captivate |
| Human review | Not available | Available (99%+ accuracy) |
| Live captioning | AI-only | AI + human captioners |
| Gen.V Insights | Available | Available + custom config |
| API access | Post-Production + Insights | Full API suite |
| Compliance | Basic | SOC 2, ISO 27001, HIPAA BAA |
| SmartPlayer | Available | Available + custom branding |
| Support | Email | Dedicated account manager |
| Estimated annual cost | $348/yr | ~$33K-$75K/yr (avg ~$33K) |

**No mid-market tier.** The jump from $29/mo to ~$33K/yr enterprise is the most common pricing complaint.

## Integrations

### Video platforms
Zoom, Microsoft Teams, Panopto, Kaltura, Brightcove, Vimeo, YouTube, JW Player, Limelight, VoiceThread, Mux, Mediasite

### LMS (Learning Management Systems)
Blackboard (Anthology), Canvas, Canvas Studio

### Cloud storage
AWS, Dropbox, Box, Google Drive

### Events
Cvent (free marketplace integration)

### Streaming
RTMP, WebSocket, Signiant

### Accessibility
AIM (Accessible Information Management platform)

## Data model (API)

### Key objects
- **Order** — a live booking request (live captioning/transcription session)
- **Job** — a post-production transcription job
- **Profile** — configuration template for captioning/transcription settings
- **Delivery** — a download request for completed transcripts
- **Recurrence** — recurring schedule for live orders
- **Insight** — AI-generated content (summary, keywords, quiz, chapters)

### Authentication flows
1. **OAuth 2.0 Bearer Token** (primary)
   - `POST https://users.verbit.co/api/v1/auth` with `{"data": {"api_key": "<KEY>"}}`
   - Returns JWT token valid for 24 hours
   - Use as `Authorization: Bearer <TOKEN>`
2. **API Key** (Post-Production only)
   - Pass API key as query parameter
   - Simpler for server-to-server integrations

### API base URLs
- Main API: `https://api.verbit.co/api/`
- Auth: `https://users.verbit.co/api/v1/auth`

## Workflow setup

### Live captioning for Zoom events
1. Create a profile (or use existing) — defines language, output format, captioning style
2. Book a live order via API (`POST /api/v2/orders`) or dashboard
3. Specify Zoom meeting details (meeting ID, join URL)
4. Verbit joins the meeting at scheduled time and provides captions
5. After session: retrieve transcript via `GET /api/v2/orders/{id}/transcript`
6. Optionally generate insights via `POST /api/v2/insights/generate`

### Post-production batch transcription
1. Create a job (`POST /job/new`) with profile and name
2. Upload or link media (`POST /job/add_media` with asset ID or URL)
3. Start processing (`POST /job/perform_transcription`)
4. Poll status (`GET /job/info`) until complete
5. Download transcript (`GET /job/get_caption`) in desired format
6. Optionally create SmartPlayer (`POST /job/smart_player`)

### Searchable transcript index
1. Process content through live or post-production pipeline
2. Use Search API to build searchable indexes across assets
3. Query indexes for keyword/phrase matches with timestamp references

## Deep dives

### Compliance and accessibility
Verbit holds:
- **ADA** (Americans with Disabilities Act) — captioning requirements
- **WCAG 2.0 AA** — web content accessibility guidelines
- **CVAA** (21st Century Communications and Video Accessibility Act)
- **SOC 2** — security and availability controls (Enterprise)
- **ISO 27001** — information security management (Enterprise)
- **HIPAA** — healthcare data protection with BAA (Enterprise)
- **GDPR** — data processing agreements available (Enterprise)

### Human review workflow (Enterprise)
1. Captivate ASR produces initial transcript
2. Professional transcriptionists review and correct output
3. QA layer checks for accuracy, formatting, and compliance
4. Final transcript delivered — target 99%+ accuracy
5. Turnaround: typically 4-24 hours depending on content length and priority

### Education use case
- LMS integration: Blackboard, Canvas — captions auto-attached to lecture recordings
- ADA compliance: documented certification for accessibility audits
- Student support: Gen.V quizzes and chapters for study materials
- Volume: education customers typically process hundreds to thousands of hours/semester

### Legal use case
- Deposition transcription with court-reporter-grade accuracy
- Speaker identification critical — verify and correct labels
- Compliance documentation for court admissibility
- Custom legal terminology models on Enterprise
