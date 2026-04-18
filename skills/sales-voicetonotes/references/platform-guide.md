# VoiceToNotes Platform Reference

## Platform overview

VoiceToNotes.ai is an AI-powered voice-to-text transcription and note-taking app for individuals. It positions as a privacy-first, HIPAA-compliant alternative to Otter.ai and Notta, emphasizing real-time transcription accuracy and ultra-low pricing ($1/mo for unlimited). Available on web, iOS, and Android. Claims 1M+ active users. Not a meeting bot — it's a personal voice recorder with AI enhancement, not a meeting participant.

**Key differentiator**: Extreme affordability ($1/mo unlimited, $10/yr with API) + HIPAA compliance. Trade-off is zero integrations and limited team features.

## Key modules

### Voice Recording & Transcription
- Real-time voice-to-text with sub-second latency
- Automatic smart formatting and punctuation
- Speaker identification for multi-person conversations
- Mid-conversation language switching
- Custom pronunciation learning for specialized terminology
- 20+ languages confirmed (homepage claims 100+, FAQ says 20+ — expect best accuracy in major languages)

### AI Operations
- **AI Summaries** — auto-generate key points from recordings
- **Grammar Check** — clean up transcription errors and improve readability
- **Custom Prompts** — user-defined processing templates for tailored output
- **Quick To-Do List** — extract action items from recordings
- **Main Points** — highlight the most important content
- **AI Stories** — narrative-style content generation from voice notes (100 lifetime on free, unlimited on Pro)
- **AI Enhance** — general-purpose content improvement

### OCR Scanning
- Image-to-text extraction (multimodal processing)
- 3 scans/day on free, unlimited on Pro

### Organization
- Project folders (5 on free, unlimited on Pro)
- Collections for grouping related notes
- Writing streak tracking for journals
- Cross-device sync across web, iOS, Android
- Archive history (unlimited on Pro Annual)

## Pricing and limits

*Best-effort as of 2026-04 — verify on voicetonotes.ai/pricing. Note: pricing pages show conflicting numbers across the site ($1/mo, $5/mo, $7/mo in different places). The /pricing page appears most current.*

| Feature | Starter (Free) | Pro Monthly | Pro Annual | Enterprise |
|---------|----------------|-------------|------------|------------|
| Price | $0 | $1/mo | $10/yr ($0.83/mo) | Custom |
| Voice notes | 10/day | Unlimited | Unlimited | Unlimited |
| Recording minutes | 300/mo | Unlimited | Unlimited | Unlimited |
| AI operations | 10/day | Unlimited | Unlimited | Unlimited |
| OCR scans | 3/day | Unlimited | Unlimited | Unlimited |
| Folders | 5 | Unlimited | Unlimited | Unlimited |
| AI Stories | 100 lifetime | Unlimited | Unlimited | Unlimited |
| Cross-device sync | Yes | Yes | Yes | Yes |
| Archive history | Limited | Yes | Unlimited | Unlimited |
| Bulk data export | No | No | Yes | Yes |
| API access | No | No | Yes | Yes |
| Beta feature access | No | No | Yes | Yes |
| Support | Standard | Priority email | 24/7 premium | Dedicated |

## Integrations

**VoiceToNotes has no native integrations.** No Zapier, no CRM connectors, no webhooks, no Make/n8n support.

**Export options**: DOCX, PDF, TXT, CSV — manual download only (one file at a time on free/Pro Monthly, bulk on Pro Annual).

**API**: Claimed HIPAA-ready speech-to-text API, but no public technical documentation (endpoints, auth, SDKs). API access gated to Pro Annual ($10/yr) and Enterprise. Dashboard at dashboard.voicetonotes.ai may contain developer docs behind login.

**Sharing**: Can share to ChatGPT, Claude, or other AI assistants for further analysis.

## Data model

No public API documentation available — data model is not externally documented.

**Visible objects from the UI:**
- **Notes** — individual voice recordings with transcription, timestamps, speaker labels
- **Folders/Collections** — organizational containers for notes
- **AI Operations** — processed outputs (summaries, grammar checks, custom prompt results)
- **OCR Scans** — image-to-text results

## Security & compliance

- **Encryption**: AES-256 at rest, TLS 1.2 in transit
- **Compliance**: Claims GDPR, CCPA, SOC 2 Type II, HIPAA
- **Data ownership**: Users maintain 100% ownership
- **Data deletion**: Within 30 days upon request
- **Zero retention policy**: Claimed for API usage (no data stored after processing)
- **Authentication**: Two-factor authentication available
- **Access controls**: Role-based access for teams (Enterprise)
- **BAA**: Business Associate Agreements offered (for HIPAA)

## Common workflows

### 1. Post-meeting voice memo capture
1. Open VoiceToNotes (web/mobile)
2. Record voice memo summarizing the meeting
3. Wait for real-time transcription
4. Run "AI Summary" or "Quick To-Do List" AI operation
5. Export as DOCX/PDF or copy-paste into CRM/notes app

### 2. Lecture/conference note-taking
1. Start recording at beginning of session
2. Transcription runs in real-time
3. Use timestamp bookmarks for key moments
4. After session, run "Main Points" for highlights
5. Organize into course/event folder

### 3. Healthcare patient documentation
1. Verify HIPAA compliance with VoiceToNotes support (request BAA)
2. Record patient encounter notes via voice
3. Custom pronunciation learning for medical terminology
4. Run "AI Summary" for structured note
5. Export to EHR system (manual — no integration)

## Comparison context

| Feature | VoiceToNotes | Voicenotes.com | Otter.ai | Notta |
|---------|-------------|----------------|----------|-------|
| Price (paid) | $1/mo | $99.99/yr | $17-30/mo | $13.99/mo |
| Free tier | 10 notes/day | Limited | 600 min/mo | 120 min/mo |
| Meeting bot | No | No | Yes | Yes |
| Zapier | No | Yes | Yes | Yes |
| CRM sync | No | No | Yes (Enterprise) | Yes (Business+) |
| API | Pro Annual only | No | Enterprise only | No |
| HIPAA | Yes (claimed) | No | No | No |
| Languages | 20+ | 60+ | 3 | 58 |
| Mobile app | iOS + Android | iOS + Android | iOS + Android | iOS + Android |
