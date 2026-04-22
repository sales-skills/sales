# TranscribeMe Platform Reference

## Platform overview

TranscribeMe is a human+AI hybrid transcription service targeting organizations that need higher accuracy than pure AI transcription. Founded in 2011, it differentiates by combining automatic speech recognition (ASR) with crowd-sourced human transcribers, offering accuracy guarantees up to 99% on reviewed tiers. Core verticals: legal, medical (HIPAA-compliant), academic, and call centers. Target audience is organizations in regulated industries where transcript accuracy has compliance or legal implications.

## Service tiers

| Tier | Price/min | Accuracy | Turnaround | Best for |
|---|---|---|---|---|
| Machine Express | $0.07 | No guarantee | ~3x audio duration | Bulk non-critical audio, internal notes |
| First Draft | $0.79 | ~98% (not guaranteed) | 1 business day | Business calls, interviews, general transcription |
| Standard | $1.25 | 99% guaranteed | 1-3 business days | Legal, medical, compliance-critical content |
| Verbatim | $2.00 | 99% guaranteed | 2-5 business days | Court proceedings, depositions, research requiring every utterance |

**Additional services:**
- Translation: $0.11/word, 50+ languages
- Data annotation: $0.10/task (AI dataset labeling)
- Rush service: 1 business day turnaround for quality audio under 70 minutes

**Turnaround notes:**
- Files 90-120 minutes add 1 extra business day to quoted turnaround
- Rush service availability depends on queue load
- Peak periods (end of quarter, conference seasons) may extend turnaround

## Key features by tier

**Machine Express ($0.07/min):**
- Fully automated AI transcription
- No human review
- Fastest turnaround (~3x audio length)
- No accuracy guarantee
- No speaker identification in output

**First Draft ($0.79/min):**
- Human-edited transcript
- Filler words (um, uh, like) removed
- ~98% accuracy (not formally guaranteed)
- 1 business day turnaround
- Speaker identification included

**Standard ($1.25/min):**
- Two-step human review process
- 99% accuracy guarantee
- 1-3 business day turnaround
- Speaker identification included
- Domain-specific transcribers available (medical, legal)

**Verbatim ($2.00/min):**
- Captures every utterance including fillers, false starts, stutters
- 99% accuracy guarantee
- 2-5 business day turnaround
- Required for legal proceedings, qualitative research
- Speaker identification included

## Industry-specific solutions

**Medical transcription:**
- HIPAA-compliant with BAA available
- Trained medical transcribers familiar with medical terminology
- Standard or Verbatim tiers recommended for patient records
- Supports specialty-specific vocabulary (radiology, pathology, psychiatry, etc.)

**Legal transcription:**
- Court proceedings, depositions, arbitration hearings
- Verbatim tier captures every utterance (required for legal record)
- Standard tier for general legal correspondence and meetings
- Speaker identification for multi-party proceedings

**Academic/research:**
- Qualitative research interviews
- Focus groups
- Verbatim tier preserves conversational nuance
- Translation available for multilingual research

**Call centers:**
- High-volume batch transcription
- Machine Express for non-critical QA sampling
- First Draft or Standard for compliance-monitored calls
- API integration for automated pipeline

## Integrations

**Very limited native integrations.** TranscribeMe does not offer:
- Native Zoom, Google Meet, or Microsoft Teams connectors
- Zapier triggers or actions
- Native CRM connectors (HubSpot, Salesforce, etc.)
- Webhook notifications for completed transcriptions

**Integration paths:**
- **REST API** — primary integration method. Upload files, create orders, poll for status, retrieve results programmatically.
- **Web portal** — manual upload and download via browser (transcribeme.com)
- **Mobile apps** — iOS and Android for recording and uploading on the go
- **Enterprise custom** — mentions IPSOS and Medallia integrations (likely custom API work)

## Data model (API)

**Key entities:**
- **Recording** — an uploaded audio/video file, identified by `recordingId`
- **Order** — a collection of recordings submitted for transcription, identified by `orderId`
- **Settings** — configuration per recording: language, accent, type (tier), domain, output format, turnaround, speaker count
- **Transcription** — the output, available as JSON or downloadable file

**Workflow:**
1. Upload file (chunked 5MB pieces) → get `recordingId`
2. Create order with recording IDs → get `orderId`
3. Configure settings per recording (language, tier, domain, etc.)
4. Apply promo code if applicable (must be before placing order)
5. Place order (triggers billing and queue)
6. Poll recording status until complete
7. Retrieve transcription (JSON or download)

**Settings options (retrieved from API):**
- Languages: `GET /dictionaries/languages`
- Accents: `GET /dictionaries/languages/accents?languageId={id}`
- Transcription types (tiers): `GET /transcription/types`
- Speaker counts: `GET /transcription/speakers`
- Output formats: `GET /transcription/outputgroups`
- Turnaround options: `GET /transcription/turnaround`
- Domains (legal, medical, etc.): `GET /transcription/domains`

## Platform clients and SDKs

- **.NET SDK**: github.com/TranscribeMe/TranscribeMe-SDK-dotnet
- **Node.js SDK**: github.com/TranscribeMe/NodeJS-SDK
- **Ruby wrapper** (third-party): github.com/tuttinator/transcribeme
- **Web portal**: transcribeme.com (manual upload/download)
- **Mobile apps**: iOS and Android

## Competitive positioning

**TranscribeMe vs pure AI tools (Sonix, Otter, Trint):**
- Higher accuracy on difficult audio (accents, overlap, noise) due to human review
- Significantly more expensive ($0.79-$2.00/min vs $0.07-$0.17/min for AI-only)
- Slower turnaround (hours to days vs minutes)
- Better for compliance-critical content where accuracy guarantees matter

**TranscribeMe vs other human services (Rev, GoTranscript, Scribie):**
- Competitive pricing: TranscribeMe Standard ($1.25/min) vs Rev ($1.50/min) vs GoTranscript ($0.72-$1.44/min)
- TranscribeMe offers the cheapest human-edited tier (First Draft at $0.79/min)
- Machine Express ($0.07/min) provides an AI-only option within the same platform
- All offer similar accuracy guarantees on human tiers (~99%)

**When to choose TranscribeMe:**
- You need human-level accuracy but want a cheaper entry point than Rev
- You're in a regulated industry (medical, legal) and need HIPAA compliance
- You want both AI-only and human-reviewed options in one platform
- You need API access for automated pipeline integration

**When NOT to choose TranscribeMe:**
- You need real-time/live transcription (upload-only)
- You need tight native integrations (Zoom, CRM, Zapier)
- You need word-level timestamps (only ~30-second intervals)
- Volume is very high and cost sensitivity outweighs accuracy needs → use Sonix or Whisper
