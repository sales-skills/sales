# Soz AI Platform Reference

## Platform overview

Soz AI is a mobile-first AI transcription and note-taking platform that converts audio and video into text in 100+ languages. It targets individual professionals — journalists, lawyers, psychologists, sales managers, consultants, doctors — who need affordable, high-volume transcription on the go. Key differentiators: YouTube URL paste transcription, $9.99/mo unlimited plan (one of the cheapest unlimited options), speaker diarization for up to 10 speakers, and mobile-native apps (iOS, Android, macOS, Chrome). GDPR, CCPA, and HIPAA compliant with AES-256 encryption.

## Key modules

### Audio-to-Text Transcription
- Upload MP3, WAV, M4A files (up to 500MB)
- Live recording with real-time processing
- 100+ languages with automatic language detection
- 95-99% accuracy depending on audio quality and conditions
- Word-level timestamps for precise navigation
- 10x faster than real-time processing

### AI Note Taker
- Automatic topic segmentation with section headers
- Key point extraction and hierarchical organization
- Action item identification and formatting
- Decision tracking and highlighting
- Searchable archive across all notes

### Speaker Diarization
- Identifies and labels up to 10 different speakers
- Timestamps per speaker segment
- Best accuracy with 2-5 speakers in clear audio conditions

### YouTube Transcript
- Direct YouTube URL paste — no manual download needed
- Automatic language detection
- LeMUR-powered AI summaries included
- Free tool available at sozai.app

### Subtitle Generator
- SRT and VTT format output
- Multi-language subtitle generation
- Free SRT validator, VTT-to-SRT converter, subtitle time-shift tools

### Voice Translator
- Real-time translation across 50+ languages
- Context-aware translations maintaining meaning

### AI Writer
- Generate summaries from transcriptions
- Content creation from transcript material

### Offline Recording
- Record audio without internet connection
- Sync and transcribe when reconnected
- Audio-synchronized editing capability

## Pricing and limits

| Feature | Free | Unlimited ($9.99/mo) |
|---|---|---|
| Transcription minutes | 30 min | Unlimited |
| Languages | 100+ | 100+ |
| Speaker diarization | Yes (up to 10) | Yes (up to 10) |
| AI summaries | Yes | Yes |
| YouTube transcription | Yes | Yes |
| Subtitle generation | Yes | Yes |
| File upload size | Up to 500MB | Up to 500MB |

- No credit card required for free tier
- No team plans documented — individual-focused pricing
- No per-seat pricing — flat monthly fee
- 99.9% uptime SLA

## Integrations

| Integration | Method | Notes |
|---|---|---|
| YouTube | Native URL paste | Direct transcription from YouTube URLs |
| SRT/VTT export | File export | Subtitle files for video editing |
| Audio upload | File upload | MP3, WAV, M4A up to 500MB |

**Not supported**: Salesforce, HubSpot, Pipedrive, Zapier, Make, n8n, Slack, Notion, or any CRM. No API, no webhooks, no third-party integrations.

## Data model

No public API — the data model is internal to the app. Key objects visible in the UI:

- **Recording**: Audio file + metadata (date, duration, language)
- **Transcript**: Full text with word-level timestamps and speaker labels
- **Summary**: LeMUR-powered AI-generated summary
- **Action items**: Extracted tasks from conversation
- **Notes**: Hierarchical AI-organized notes with topic segmentation
- **Subtitles**: SRT/VTT formatted subtitle files

## Workflow setup

### Initial setup
1. Download Soz AI from App Store (iOS), Google Play (Android), or Mac App Store (macOS)
2. Alternatively install the Chrome extension
3. Create an account — 30 free minutes included
4. Grant microphone permission when prompted

### Recording a meeting
1. Open Soz AI and tap record
2. Place device centrally among speakers for best pickup
3. Recording transcribes in real-time or after completion
4. AI generates summary, action items, and topic segmentation automatically
5. Export transcript or subtitles as needed

### YouTube transcription
1. Copy the YouTube video URL
2. Paste into Soz AI's YouTube Transcript tool
3. AI processes the video and generates transcript with timestamps
4. Review, edit, and export as needed

### Subtitle generation
1. Upload audio/video file or use a recording
2. AI generates transcript with timestamps
3. Export as SRT or VTT format
4. Use free tools (SRT validator, time-shift) to adjust if needed

## Security and compliance

- **Encryption**: TLS 1.3 in transit, AES-256 at rest
- **GDPR compliant**: EU data centers available
- **CCPA compliant**: California privacy requirements met
- **HIPAA compliant**: Suitable for medical professionals
- **Data control**: Users can permanently delete all data at any time
- **AI training**: Audio is never used for AI model training
- **Uptime**: 99.9% SLA

## Deep dives

### Language support
100+ languages with automatic detection. Can transcribe multilingual conversations and translate between languages while maintaining context. Best accuracy on major world languages (English, Spanish, French, German, Mandarin, Japanese, Korean, Hindi, Arabic, Portuguese). Less common languages may have lower accuracy.

### Mobile-first design philosophy
Unlike desktop-centric tools (Otter, Fireflies, Fathom), Soz AI is built mobile-first for iOS and Android. This means:
- Optimized for phone microphone recording (in-person meetings, interviews, lectures)
- Touch-friendly interface for on-the-go use
- Offline recording capability
- Lower barrier to entry than bot-based meeting assistants

Trade-off: no meeting bot integration (Zoom/Teams/Meet), no real-time live transcription during video calls, no CRM sync.

### Comparison positioning
| Capability | Soz AI | Otter.ai | Transkriptor | Fathom |
|---|---|---|---|---|
| Price (unlimited) | $9.99/mo | $17-30/mo | $9.99/mo (tiered) | $16-20/mo |
| Languages | 100+ | 18 | 100+ | 38 |
| YouTube URL paste | Yes | No | No | No |
| Mobile-first | Yes | Partial | No (web-first) | No (desktop-first) |
| Meeting bot | No | Yes | Yes | Yes |
| CRM integration | None | Thin | Shallow | Medium |
| API | None | Enterprise beta | Enterprise only | REST + webhooks |
| Speaker diarization | Up to 10 | Yes | Yes | Yes |
| Free tier | 30 min | Yes (limited) | ~30 min/day | Unlimited recordings |
