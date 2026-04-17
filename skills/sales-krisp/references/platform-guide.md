# Krisp Platform Reference

## Platform overview

Krisp is a Voice AI platform that started with noise cancellation and expanded into AI meeting notes, accent conversion, and call center AI. It operates on a unified AI voice engine with three product lines: AI Meeting Assistant (individuals/teams), Call Center AI (contact centers/BPOs), and Voice AI SDK (developers). SOC 2, GDPR, HIPAA, PCI-DSS certified. Used by 200M+ devices processing 75B+ minutes of speech.

**Key differentiator**: Krisp is the only meeting AI tool that leads with noise cancellation. While competitors focus on transcription and summaries, Krisp's noise removal can reduce transcription errors by up to 39%. Bot-free recording — records via the desktop/mobile app, no bot joins the call.

## Key modules

### AI Meeting Assistant
- **Noise cancellation**: Removes background noise, echo, and cross-talk in real time (bidirectional — both your mic and incoming audio)
- **Transcription**: 16 languages (English on-device, 15 via server). Custom vocabulary up to 750 workspace-level terms.
- **AI notes**: Automatic summaries, action items, key points after each meeting
- **Recording**: Transcript-only, audio, or video modes
- **Accent conversion**: Real-time accent normalization for speaker clarity (4 English accents: Indian, Filipino, African, Latin American)
- **Laughter detection**: Emotional context tagging

### Call Center AI
- Agent and customer noise cancellation + voice isolation
- Real-time accent conversion for agents
- After-call summaries and compliance monitoring
- Agent Assist with real-time guidance (coming soon)
- Voice translation across 80+ languages (add-on)
- Knowledge chat (AI-powered)
- Voice macros for scripts
- Live captions

### Voice AI SDK
- For developers embedding Krisp features in apps
- **VIVA SDK** — voice isolation + turn-taking for AI voice agents (server-side)
- **RTC SDK** — noise cancellation, accent conversion, BVC for human-to-human calls
- Platforms: Browser (JS/WASM), Windows, macOS, Linux, iOS, Android, server
- SDK docs: https://sdk-docs.krisp.ai/
- Auth: API keys via sdk.krisp.ai dashboard
- Integrates with WebRTC, Twilio, Amazon Connect, Jitsi, SIP.js, Electron, React, Pipecat, LiveKit

## Pricing and limits

**AI Meeting Assistant (2026-04 — verify on krisp.ai/pricing):**

| Plan | Monthly | Annual | Key features | Storage |
|---|---|---|---|---|
| Free trial | $0 | $0 | 7 days, all premium features, no credit card | — |
| Core | $16/user | $8/user | Unlimited AI notes + noise cancellation, transcription, recording, mobile app, 1 hr/day accent conversion | 5 GB |
| Advanced | $30/user | $15/user | Everything in Core + 4 hr/day accent speaker + unlimited listener, Salesforce, ConnectWise, manager view, meeting link sharing | 30 GB |
| Enterprise | Custom | Custom | SSO/SCIM, SOC2 report, BAA (100+ seats), HIPAA, data center choice, private on-device transcription, super admin, dedicated AM | Unlimited |

**Integration gates by plan:**
- **Core**: HubSpot, Slack, Zapier, Pipedrive, Affinity, webhooks (basic)
- **Advanced**: Everything in Core + Salesforce, ConnectWise, advanced webhooks
- **Enterprise**: Everything + custom integrations, API access

**Call Center AI:**
- CC Core: $10+/agent/mo (40 seat min) — noise cancellation, voice isolation, after-call summaries, SSO
- CC Advanced: Custom — adds accent conversion, knowledge chat, voice macros, live captions, voice translation (add-on)

**Voice AI SDK:**
- Early Stage: Custom (application required)
- Enterprise SDK: Custom — higher quality models, batch processing, customization

**Volume discounts**: Available for 50+ members. Storage add-ons up to 5TB.

## Integrations

**Conferencing**: Zoom, Google Meet, Microsoft Teams, Webex, Discord, WeChat, Slack Huddles
**CRM**: HubSpot (Core+), Salesforce (Advanced+), Pipedrive (Core+), Affinity (Core+)
**Productivity**: Slack, Loom
**Automation**: Zapier, webhooks (Advanced+)
**Calendar**: Google Calendar, Outlook
**Mobile**: iOS app with phone recorder, Chrome extension
**SDK integrations**: WebRTC, Twilio Voice, Amazon Connect, Jitsi, SIP.js, Electron, React, Pipecat, LiveKit

## Data model

### Meeting object (webhook payload)
- Meeting ID, title, link/URL
- Start time, end time, duration
- Transcript content (speaker-diarized)
- AI notes / summary text
- Outline content
- Action items
- Event ID (unique per webhook delivery)

### Recording modes
- Transcript-only (smallest footprint)
- Audio recording
- Video recording

### Custom vocabulary
- Up to 750 workspace-level terms
- Improves transcription accuracy for technical jargon, product names, acronyms

## Workflow setup

### Setting up Krisp for a team
1. **Install**: Download from krisp.ai → install desktop app (Mac/Windows/Linux)
2. **Audio config**: In your conferencing app (Zoom/Meet/Teams), set microphone to "Krisp Microphone" and speaker to "Krisp Speaker"
3. **Enable AI notes**: Open Krisp app → toggle AI Meeting Assistant on
4. **Custom vocabulary**: Settings → Custom Vocabulary → add team-specific terms
5. **CRM integration**: Settings → Integrations → connect HubSpot (Core+) or Salesforce (Advanced+)
6. **Webhooks**: Settings → Integrations → Webhook → configure URL, headers, trigger events
7. **Team deployment**: Admin dashboard for workspace management, user provisioning

### Integrating Krisp webhooks
1. Go to Settings → Integrations → Webhook → Connect
2. Configure: webhook name, destination URL, trigger events (transcript created, notes generated, outline generated)
3. Add request headers (e.g., Authorization) as needed
4. Krisp sends POST to your URL with meeting details + generated content
5. Webhook payload includes: event type, meeting metadata (ID, title, times, duration), transcript, notes/summary, outline, event ID

### Setting up the Voice AI SDK (JS/Browser)
1. Sign up at sdk.krisp.ai → get API key
2. Install: include Krisp JS SDK in your project
3. Initialize: `KrispSDK.init()` with API key
4. Check support: `KrispSDK.isSupported()` for browser compatibility
5. Create filter: `createNoiseFilter()` or `createAccentReductionFilter()`
6. Attach to audio pipeline (WebRTC MediaStream or Web Audio API)
7. Monitor: VAD events, filter status, performance stats

## Deep dives

### Noise cancellation architecture
Krisp runs a neural network locally (on-device for desktop, WASM for browser SDK). It processes audio frames at 10ms intervals with 1.5-2ms latency per frame. The model removes background noise, echo, and cross-talk while preserving voice clarity. CPU-based (no GPU required) but resource-intensive — budget ~100MB memory for the JS SDK.

### Accent conversion details
Currently supports 4 English accents: Indian-to-US, Filipino-to-US, African-to-US, Latin American-to-US. Speaker-side conversion (your accent is normalized for the listener) has hourly limits by plan (1hr/day Core, 4hr/day Advanced). Listener-side conversion (incoming accents are normalized for you) is unlimited on Advanced+. Results can sound "slightly robotic" in edge cases.

### Security and compliance
- SOC 2 Type II certified
- GDPR compliant (data processing in EU available on Enterprise)
- HIPAA compliant (BAA available for 100+ seats on Enterprise)
- PCI-DSS certified
- Enterprise: data center location choice, private on-device transcription
- Audio processing happens locally (on-device) for noise cancellation
- English transcription is on-device; other languages require server-side processing

### Call Center AI deployment
- Minimum 40 seats for CC Core
- Deployed as browser extension or desktop app alongside existing contact center platform
- Integrates with Amazon Connect, Twilio, Five9, Genesys via SDK
- Real-time accent conversion for agents (CC Advanced)
- Agent Assist provides real-time guidance based on conversation context (coming soon)
- Speech analytics and compliance monitoring for QA teams
