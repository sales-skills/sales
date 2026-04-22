# Temi Platform Reference

## Platform overview

Temi is a budget AI transcription service owned by Rev, offering automated speech-to-text at $0.25/min. It uses Rev's automated speech recognition engine but provides a simpler interface with fewer features. Tagline: "Transcripts at lightning speed." English only. Upload-only — no live meeting recording. Target audience: individuals and small teams needing cheap, fast English transcription for interviews, meetings, podcasts, and general audio content. Not suitable for regulated industries (no HIPAA, no SOC 2 documented), multilingual content, or high-accuracy requirements.

## Key modules

### AI Transcription
- English-only automated speech recognition (Rev's engine)
- Claims 90-95% accuracy on clear audio with American English speakers
- Speaker diarization (automatic speaker labeling)
- Typical processing: 10-minute audio transcribed in under 3 minutes
- Supported formats: WAV, MP3, MP4, WebM, OGG (audio), AVI, MP4, MOV, WebM, WMV, FLV (video)

### Online Editor
- In-browser transcript editor with audio playback sync
- Speaker label management (rename speakers)
- No custom dictionary — cannot train on domain-specific terms
- No filler word removal or cleanup tools

### Export
- TXT (plain text)
- DOCX (Microsoft Word)
- PDF
- JSON (structured with speakers and timestamps)

### Mobile App
- iOS and Android apps for recording audio
- Record → upload → transcribe workflow
- Known issue: credits purchased on web may not sync to mobile app

## Pricing and limits

| Feature | Detail |
|---|---|
| Price | $0.25/min (rounded up to nearest minute) |
| Model | Pay-as-you-go only — no subscription tiers |
| Free trial | Limited free credits (amount varies) |
| Minimum charge | 1 minute per file |
| API access | Available with paid account |
| Bulk discounts | None documented |

**Cost comparison with competitors:**

| Service | Price per hour | Notes |
|---|---|---|
| Temi | $15/hr | AI-only, English-only |
| Rev AI | $15/hr | Same engine as Temi |
| Rev Human | $90/hr ($1.50/min) | 99% accuracy, human-reviewed |
| Sonix Standard | $10/hr | AI, 53 languages, more features |
| Sonix Premium | $5/hr + $22/mo base | API, custom dictionary |
| TranscribeMe Machine Express | $4.20/hr ($0.07/min) | AI-only, cheapest option |
| TranscribeMe Standard | $75/hr ($1.25/min) | 99% accuracy, human-reviewed |

**Key takeaway**: Temi is not the cheapest AI transcription. Sonix Standard ($10/hr) and TranscribeMe Machine Express ($0.07/min ≈ $4.20/hr) are both cheaper with more features.

## Integrations

### Zapier
- **Trigger**: Job finished transcribing
- **Actions**: Submit new transcription job
- Pre-built Zaps: Gmail attachments → Temi, Google Drive files → Temi, YouTube videos → Temi, Temi transcripts → Google Drive

### Make (Integromat)
- Temi app available on Make marketplace

### Pipedream
- Temi API integration available

### No native CRM connectors
- No Salesforce, HubSpot, or other CRM integration
- CRM sync only possible via Zapier/Make or custom API pipeline

## Data model (API)

Key objects:

- **Job** — the core object. Represents a transcription request.
  - `id` (string) — unique identifier
  - `status` (string) — `queued`, `transcribing`, `transcribed`, `failed`
  - `created_on` (ISO-8601 UTC) — submission timestamp
  - `callback_url` (string) — webhook URL for completion notification
  - `web_url` (string) — link to Temi editor
  - `duration_seconds` (integer) — audio duration
  - `name` (string) — file name
  - `metadata` (string, 256 char limit) — user-provided metadata
  - `failure` / `failure_detail` (string) — error info on failed jobs
  - `last_modified_on` (ISO-8601 UTC)

- **Transcript** — retrieved via `GET /jobs/{id}/transcript`
  - Formats: text/plain, application/json, application/msword, application/pdf
  - JSON format includes `speakers[]` array and `monologues[]` with timestamped elements
  - `version` parameter: `latest` (includes editor changes) or `machine` (original AI output)

- **Account** — `GET /account` returns `{ balance, email }`

## Workflow setup

### Basic transcription workflow
1. Upload audio/video file via web UI or mobile app
2. Wait for processing (typically under 3 minutes for 10-minute audio)
3. Review transcript in the online editor
4. Fix speaker labels and errors manually
5. Export in desired format (TXT, DOCX, PDF, JSON)

### API pipeline workflow
1. Generate API key from Temi developer page (requires paid account)
2. Submit job: `POST /jobs` with `media_url` or multipart file upload
3. Either set `callback_url` for webhook notification or poll `GET /jobs/{id}` for status
4. On completion, fetch transcript: `GET /jobs/{id}/transcript` with desired Accept header
5. Optionally share editor: `POST /jobs/{id}/share` returns `editor_url`

### Zapier automation workflow
1. Set up trigger (e.g., new file in Google Drive, new Gmail attachment)
2. Use Temi "Submit Job" action to send the file
3. Set up a second Zap triggered by "Job Finished Transcribing"
4. Route transcript to destination (Google Drive, email, Slack, etc.)

## Deep dives

### Temi vs Rev
Temi is owned by Rev and uses Rev's automated transcription engine. The key differences:
- **Same price**: Both charge $0.25/min for AI transcription
- **Rev adds human options**: Rev offers human transcription at $1.50/min with 99% accuracy — Temi does not
- **Rev has more integrations**: Rev connects to Zoom, Vimeo, and has a more mature API
- **Rev has captions/subtitles**: Rev offers SRT/VTT files — Temi does not
- **Verdict**: For AI transcription there's no reason to choose Temi over Rev directly — Rev offers the same engine plus human fallback and more features

### When Temi actually wins
- **Simplicity**: No subscription, no tiers, no upsells — just upload and pay
- **Quick one-off jobs**: For someone who needs a single transcript right now without signing up for a monthly service
- **Existing Temi users**: If a workflow is already built on Temi's API, switching has a migration cost

### Security & compliance
- No SOC 2 or HIPAA certification documented
- No SSO/SAML
- No audit logs
- Basic account security only
- **Not suitable for regulated industries** — use Sonix (SOC 2/HIPAA), TranscribeMe (HIPAA), or Verbit (SOC 2/HIPAA/ADA) for compliance needs
