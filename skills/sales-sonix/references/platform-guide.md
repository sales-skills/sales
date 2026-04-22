# Sonix Platform Reference

## Platform overview

Sonix is an AI-powered transcription, translation, and subtitling platform. It positions itself as "the world's most accurate automated transcription software" with 99% accuracy claims across 53+ languages. Unlike live meeting note-takers (Fathom, Fireflies, Otter), Sonix is upload-only — you submit audio/video files and get back transcripts, translations, and subtitles. Target audience: media producers, legal teams, researchers, podcasters, and enterprises needing batch transcription with compliance (SOC 2 Type 2, HIPAA).

## Key modules

### AI Transcription
- 53+ languages with speaker diarization
- Custom vocabulary/dictionary (Premium+) for domain-specific terms
- Verbatim transcription by default (includes filler words)
- Word-level timing in the output

### Automated Translation
- Neural machine translation across 53+ languages
- Translate from any transcribed language to any supported target
- Batch translation via API (`POST /media/{id}/translations`)

### Subtitles & Captions
- Auto-generated SRT and VTT files from transcriptions
- Video burn-in — embed subtitles directly into video files
- Frame-perfect timing synchronized with audio
- API: `POST /media/{id}/video_burn_ins`

### AI Analysis (Premium add-on, $5/mo)
- Summaries — auto-generated from transcript content
- Chapter markers — AI-detected topic boundaries
- Sentiment analysis — positive/negative/neutral per segment
- Batch folder-level summarization via API

### Sonix Editor
- In-browser editor where you edit text and audio stays in sync
- Speaker label management (merge, rename, reassign)
- Click any word to jump to that point in the audio
- Export to TXT, DOCX, PDF, SRT, VTT, JSON

### Collaboration
- Multi-user permissions (Premium+)
- Read-only sharing links
- Team folders for organizing projects
- Comments and annotations

### Sonix Recorder
- Mobile app for field recording
- Separate from the main transcription workflow

## Pricing and limits

| | Standard | Premium | Enterprise |
|---|---|---|---|
| Price | $10/hr (pay-as-you-go) | $22/seat/mo ($16.50 annual) + $5/hr | Custom |
| Users | Single user | 1+ seats | 5+ seats |
| Storage | 10 GB compressed | 100 GB original quality | 1 TB+ |
| API access | No | Yes | Yes |
| Custom dictionary | No | Yes | Yes |
| AI Analysis | No | $5/mo add-on | Included |
| SSO/SAML | No | No | Yes |
| Audit logs | No | No | Yes |
| Support | Email | Priority email | Dedicated account manager |
| Free trial | 30 min free, no credit card | — | — |

**Cost math**: Premium breaks even vs Standard at ~4.4 hrs/mo ($22/mo base + $5/hr × 4.4 = $44 vs $44 on Standard at $10/hr). For 10+ hrs/mo, Premium saves significantly ($72 vs $100).

**Plan-gated features to watch:**
- API access: Premium+ only (no workaround on Standard)
- Custom dictionary: Premium+ only
- AI Analysis (summaries/chapters/sentiment): $5/mo add-on even on Premium
- SSO/SAML and audit logs: Enterprise only
- Webhooks: Enterprise only (per API docs)

## Integrations

### Video conferencing (11)
Zoom, Microsoft Teams, Google Meet, Cisco Webex, GoToMeeting, Skype, RingCentral, UberConference, Join.me, BlueJeans, Loom — these are file import integrations, not live join. You import recordings from these platforms into Sonix.

### Cloud storage (4)
Dropbox, Google Drive, OneDrive, Box — upload files directly from cloud storage

### CRM
Salesforce — native integration

### Automation
Zapier — triggers on transcript completion, actions to submit media. Connects to 5,000+ apps.

### Media production (4)
Adobe Premiere Pro, Final Cut Pro X, Adobe Audition, Avid Media Composer — export transcripts in compatible formats

### Research / QDA (3)
Atlas.ti, NVivo, MaxQDA — qualitative data analysis tools

### Legal (2)
Clio, Relativity — legal practice management and eDiscovery

## Data model (API)

Key objects in the Sonix API:

- **Media** — the core object. Represents an uploaded audio/video file with its transcript.
  - `id` (string) — unique identifier
  - `name` (string) — file name
  - `status` (string) — processing status
  - `language` (string) — transcript language code
  - `duration` (float) — media duration in seconds
  - `created_at` (datetime) — upload timestamp

- **Transcript** — retrieved via `GET /media/{id}/transcript` in multiple formats (text, SRT, VTT, JSON, Avid DS)

- **Translation** — a translated version of a transcript
  - `language` (string) — target language code
  - `status` (string) — translation processing status

- **Summarization** — AI-generated summary, chapters, or sentiment
  - `type` (string) — summary, chapters, or sentiment

- **Folder** — organizational container for media files

- **User** — workspace member with permissions

- **Share** — sharing configuration for a media file

## Workflow setup

### Basic transcription workflow
1. Upload file via web UI or `POST /media` API endpoint
2. Wait for processing (typically minutes for audio, longer for video)
3. Review transcript in the Sonix editor
4. Fix speaker labels (merge duplicates, rename)
5. Export in desired format (TXT, DOCX, SRT, VTT, JSON)

### Translation workflow
1. Complete transcription first
2. Select target language(s)
3. Request translation via UI or `POST /media/{id}/translations`
4. Review translated transcript
5. Export translated version

### Subtitle burn-in workflow
1. Upload video file and transcribe
2. Review and correct transcript (corrections carry into subtitles)
3. Generate SRT/VTT or request video burn-in
4. For burn-in: `POST /media/{id}/video_burn_ins` — Sonix embeds subtitles into the video file
5. Download the subtitled video

### API pipeline workflow
1. Obtain API key from `https://my.sonix.ai/api` (Premium+ required; trial users must email support)
2. Submit media: `POST /media` with file upload (100 MB max) or URL
3. Poll `GET /media/{id}` for processing status
4. Retrieve transcript: `GET /media/{id}/transcript?format=json`
5. Optionally request translation: `POST /media/{id}/translations`
6. Optionally request summarization: `POST /media/{id}/summarizations`

## Deep dives

### Accuracy optimization
- **Audio quality is #1 factor.** Clean audio with minimal background noise produces dramatically better results.
- **Custom dictionary** (Premium+): Add company names, product terms, acronyms, and domain jargon. This improves recognition of specialized vocabulary.
- **Language selection**: Explicitly set the correct language — don't rely on auto-detect for best results.
- **Speaker count**: Sonix handles 2-4 speakers well. Beyond 5-6 speakers, diarization accuracy drops.

### Security & compliance
- SOC 2 Type 2 certified
- HIPAA compliant (Enterprise with BAA)
- Encrypted storage (at rest and in transit)
- Audit logs (Enterprise only)
- Data retention configurable
- PHI detection capabilities

### Sonix vs live meeting tools
Sonix is **not** a meeting note-taker. It does not:
- Join meetings live
- Provide real-time transcription
- Integrate with calendar for auto-recording
- Offer coaching or conversation intelligence features

For live meeting recording, use Fathom, Fireflies, Otter, or other tools covered in `/sales-note-taker`. Sonix is best as a post-recording transcription engine for media files, interviews, legal recordings, and content production.
