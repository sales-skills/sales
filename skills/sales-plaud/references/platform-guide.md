# Plaud Platform Reference

## Platform overview

Plaud is the leading hardware AI voice recorder brand with 1.5M+ global users. Unlike software-based meeting note-takers that join calls as bots, Plaud uses physical recording devices (wearable pins and credit-card recorders) to capture in-person meetings, phone calls, and ambient audio. Recordings sync to Plaud's cloud for AI-powered transcription, speaker diarization, and structured summaries. Targets professionals in sales, healthcare, consulting, legal, finance, and education who need frictionless in-person recording without phone apps or laptop dependencies.

Won Red Dot Design Award (2025) and Tom's Guide "best wearable" (2025).

## Devices

### NotePin S (newest — recommended)
- **Price**: $179
- **Form factor**: Wearable pin with clip, lanyard, and wristband options
- **Microphones**: 2 MEMS
- **Recording**: 20 hours continuous, 40-day standby
- **Storage**: 64GB internal
- **Connectivity**: Bluetooth
- **Key improvement**: Physical button — fixes unreliable touch controls on original NotePin
- **Capture range**: ~9.8 feet (3m)
- **VCS**: Yes — phone call recording via vibration conduction sensor

### NotePin (original)
- **Price**: $127-159 (sales pricing varies)
- **Form factor**: Wearable pin
- **Microphones**: 2 MEMS
- **Recording**: Standard battery life
- **Storage**: 64GB
- **Key issue**: Touch controls are unreliable — #1 user complaint
- **VCS**: Yes

### Note
- **Price**: $159
- **Form factor**: Credit-card size, portable recorder (not truly wearable)
- **Microphones**: 2 MEMS
- **Recording**: Extended battery vs NotePin
- **Storage**: 64GB
- **Features**: Real-time highlighting (not available on NotePin)
- **VCS**: Yes

### Note Pro
- **Price**: $189
- **Form factor**: Credit-card size
- **Microphones**: 4 MEMS (doubled)
- **Recording**: Nearly double battery vs Note
- **Storage**: 64GB
- **Capture range**: 16+ feet (5m) — best for large rooms
- **Features**: Real-time highlighting
- **VCS**: Yes

### Device comparison

| Feature | NotePin | NotePin S | Note | Note Pro |
|---|---|---|---|---|
| Price | $127-159 | $179 | $159 | $189 |
| Wearable | Yes | Yes | No (portable) | No (portable) |
| Microphones | 2 | 2 | 2 | 4 |
| Capture range | 9.8 ft | 9.8 ft | 9.8 ft | 16+ ft |
| Physical button | No (touch) | Yes | N/A | N/A |
| Real-time highlight | No | No | Yes | Yes |
| Battery | Standard | Standard+ | Extended | Nearly 2x Note |
| VCS phone recording | Yes | Yes | Yes | Yes |

## Pricing and subscriptions

All devices include 64GB local storage. Transcription/AI features require a subscription (or free Starter tier).

| Plan | Price | Transcription minutes | Key features |
|---|---|---|---|
| Starter | Free | 300/month | Speaker ID, custom vocabulary, AI summaries, AskPlaud chatbot, AutoFlow |
| Pro | $99.99/yr ($17.99/mo) | 1,200/month | Everything in Starter + full template library |
| Unlimited | $239.99/yr ($29.99/mo) | Unlimited (24hr/day cap) | Everything in Pro + no minute cap |

**All plans include**: Speaker identification, custom vocabulary, AI summaries with 10,000+ templates, AskPlaud chatbot, AutoFlow (auto-summarize and email summaries).

**Note**: Device purchase does not include bundled transcription minutes — subscription is separate.

Multiple devices can pair to a single subscription account.

## Compliance and security

- ISO 27001 / ISO 27701 certified
- GDPR compliant
- SOC 2 Type II
- HIPAA compliant
- EN 18031 compliant
- Cloud-based processing (recordings stored locally until synced)

## Vibration Conduction Sensor (VCS)

Plaud's key hardware differentiator. The VCS detects mechanical vibrations from the phone's earpiece voice coil, capturing both sides of a phone call without speakerphone and without any software or carrier bypass. This works by:

1. Place Plaud device on the phone's earpiece area (top edge near speaker)
2. VCS captures the caller's voice through vibrations
3. Ambient mic captures your voice simultaneously
4. Both are combined into a single recording with speaker diarization

**Tips for best VCS quality**:
- Remove thick phone cases during recording
- Place device directly on the earpiece speaker area
- Ensure VCS side faces the phone
- Speakerphone is a fallback if VCS quality is insufficient

## AI features

- **Transcription**: 112 languages, speaker diarization, custom vocabulary
- **Summaries**: 10,000+ professional templates (meeting notes, action items, key decisions, etc.)
- **AskPlaud**: Chatbot to query your recording history
- **AutoFlow**: Automatically summarize recordings and email summaries to specified recipients
- **Mind maps**: Visual summary generation
- **Custom vocabulary**: Add industry-specific terms for better accuracy

## Integrations

- **Cloud sync**: Recordings accessible across devices after upload
- **Task managers**: Integration with task management tools (details vary)
- **CRM**: Mentioned in marketing but specifics not documented publicly
- **Email**: AutoFlow sends summaries via email
- **Export**: Transcript and summary export/sharing

No documented Zapier, Make, or n8n connectors.

## Developer API (private beta)

The Plaud Developer Platform (docs.plaud.ai) is currently in private beta. It offers:

- **Capabilities**: Transcription, file management, AI summary, AI workflow, device operation
- **SDKs**: Android and iOS SDKs for building apps with Plaud devices
- **Auth**: OAuth integration for accessing user Plaud accounts (waitlisted)
- **OpenAPI spec**: Available in JSON format
- **Contact**: Reach out via the developer platform page to request access

### Unofficial Python client

The `plaud-api` package (pip install plaud-api) is a reverse-engineered, unofficial client. **Not affiliated with Plaud Inc. — use at your own risk.**

```bash
pip install plaud-api  # Requires Python 3.10+
```

**Auth**: Get token from web.plaud.ai DevTools → Network → any api.plaud.ai request → Authorization header. Then `plaud auth setup`.

**Key methods**:
- `client.recordings.list(limit=50)` — list recordings
- `client.recordings.get(file_id)` — get single recording
- `client.recordings.get_audio_url(file_id)` — S3 download URL
- `client.recordings.upload(path, name=...)` — upload MP3/OPUS
- `client.transcriptions.start(file_id, language="en")` — begin transcription
- `client.transcriptions.wait(file_id, timeout=600)` — block until done
- `client.transcriptions.get(file_id)` — get transcript segments
- `client.transcriptions.get_summary(file_id)` — get AI summary
- `client.speakers.list()` — list speakers
- `client.speakers.rename(file_id, old, new)` — rename speaker
- `client.tags.list()` — list tags

**CLI**: `plaud recordings list`, `plaud transcription start <id>`, `plaud transcription summary <id>`, `plaud speakers list`, `plaud auth setup`

## Affiliate and partner programs

- **Affiliate**: 5-10% commission via Impact. Apply at affiliate@plaud.ai. Monthly payouts, real-time tracking, dedicated affiliate manager.
- **Referral**: 10% discount codes for hardware, phased rollout to selected users
- **Reseller**: Partner program with early access to product updates. Contact via plaud.ai/pages/become-a-reseller.

## Workflow setup

### Setting up for in-person meetings
1. Charge device via proprietary dock
2. Download Plaud app (iOS/Android), pair via Bluetooth
3. Choose subscription plan (Starter free to start)
4. Before meeting: press button (NotePin S) or tap (NotePin) to start recording
5. Place device on table (Note/Pro) or wear it (NotePin/S)
6. After meeting: open app to sync — transcription begins automatically
7. Review transcript, edit speaker names, apply summary template
8. Export or share via AutoFlow email

### Setting up for phone calls (VCS)
1. Start recording on Plaud device
2. Place device on phone's earpiece area (top edge, speaker side)
3. Make or answer the call normally (earpiece, not speakerphone)
4. VCS captures both sides of the conversation
5. After call: sync via app for transcription

### Building a transcript pipeline (interim — unofficial API)
1. Install: `pip install plaud-api`
2. Get auth token from web.plaud.ai DevTools
3. Run `plaud auth setup` with the token
4. Poll `client.recordings.list()` on a schedule (e.g., every 15 min)
5. For new recordings: `client.transcriptions.get(file_id)` → normalize → push to CRM/warehouse
6. Monitor for official API access to migrate when available
