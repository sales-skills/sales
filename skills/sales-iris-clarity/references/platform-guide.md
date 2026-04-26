# IRIS Clarity Platform Reference

## Platform overview

IRIS Clarity is a desktop application by IRIS Audio Technologies that removes background noise and enhances audio quality in real-time for all call participants. The technology was originally developed for Formula 1 race communications and uses proprietary AI algorithms developed with Goldsmiths University, Mount Sinai Hospital, Queen Mary's University, and the Red Bull Athlete Performance Center. IRIS positions as a pure noise cancellation tool (no meeting notes or transcription), targeting contact centers, customer service operations, and enterprise VoIP environments. Also offers an SDK for developers embedding noise cancellation into their own platforms.

**Key differentiator**: Bidirectional noise cancellation — removes noise on both the user's microphone AND the incoming audio from the other party. Most competitors only filter outgoing audio. Demonstrated removing 130 decibels of noise in racing applications.

## Key modules

### IRIS Clarity Desktop App
- **Bidirectional noise cancellation**: Real-time AI-powered removal of background noise on both sides of a call
- **Voice isolation**: Separates speech from background noise using ML algorithms
- **Echo cancellation**: Removes acoustic echo from calls
- **Virtual audio device**: Creates a system-level audio device that any VoIP app can route through
- **Platforms**: Windows and macOS
- **No mobile app**: Desktop only for end users (SDK enables mobile via developer integration)
- **No meeting notes/transcription**: Pure noise cancellation — no AI summaries, action items, or recording

### IRIS SDK
For developers embedding noise cancellation into their own applications.

**Web SDK (client-side)**:
- WebRTC Audio Worklet Processor for browser-based applications
- No server setup required — runs on user's device
- Install: `npm install` with `IRIS_SDK_TOKEN` environment variable
- Setup wizard: `npx @irisaudiotechnologies/iris-web-sdk setup-wizard`
- Requires copying `iris-awp` directory to public folder + downloading WASM binaries
- Docs: `https://sdk.iris.audio/assets/iris-web-sdk/docs/1.4.1/index.html`

**Server SDK**:
- Languages: C++, Python, Node.js
- Platforms: Windows, macOS, Linux
- Use cases: batch post-production processing, streaming audio transcription enhancement, IVR noise removal
- Docs: `https://sdk.iris.audio/assets/iris-sdk/docs/iris-sdk-docs-3.0.1-2b9881c/html/index.html`

**Cloud deployment**:
- Terraform, Helm, and Docker solutions available
- On-premises or cloud environments
- Minimal code required for deployment

**SDK implementation flow** (Web SDK, 9 steps):
1. **Instantiate** SDK with config (company ID, auth key/license, model type, team/user IDs, file paths)
2. **Create AudioContext** — must be triggered by user click event (usually at login)
3. **Connect microphone stream** through SDK processing chain
4. **Connect speaker stream** through SDK processing chain
5. **Monitor readiness** via callbacks or custom events
6. **Start processing** — activate noise cancellation
7. **Runtime control** — start/stop calls, toggle processing per stream
8. **Mix adjustment** — set wet/dry ratio (0-1 scale) for processed vs unprocessed audio
9. **Cleanup** — `disconnect()`, `release()`, `cleanup()` for memory management

**SDK configuration parameters** (18+):
- **Required**: `audioWorkletPath`, `wasmPath`, `key`, `license`, `company`, `team`, `user`, `model`
- **Optional**: `audioAnalytics`, `eventDetection`, logging levels, startup processing states, `sampleRate`, `instanceCount`

**SDK features**:
- Automatic resampling and buffering
- Adaptive volume control
- Audio analytics (data access methods available)
- Voice isolation and noise cancellation models
- Optional super-resolution enhancement
- Webpack bundling support

**Developer portal**: `https://developer.iris.audio/` (login-gated — request access)
**SDK support**: `Support@shapedbyiris.com`

## Pricing and limits

*Best-effort as of 2026-04 — verify at iris.audio/pricing. All prices in GBP (£).*

| Plan | Monthly | Annual | Seats | Key features |
|---|---|---|---|---|
| Professional | £9.50/seat | £6.50/seat | Up to 100 | Windows/Mac app, latest voice isolation models, unlimited bidirectional noise cancellation, 14-day free trial |
| Enterprise | Custom | Custom (annual required) | 100-1,000+ | Everything in Professional + concurrent licensing, custom payment terms, custom SLAs, dedicated customer success manager, managed onboarding |

**SDK pricing**: Custom — contact via iris.audio/contactsdk or Support@shapedbyiris.com.

**Plan gates**:
- Professional: up to 100 seats, monthly billing available
- Enterprise: 100+ seats, annual commitment required, concurrent licensing (users don't need individual seats)

**No free tier** — 14-day free trial on Professional plan only.

## Integrations

### Native integrations
- **Talkdesk**: AppConnect marketplace integration (native, no SDK work needed)
- **VoIP platforms**: Works with Zoom, Google Meet, Microsoft Teams, Cisco Webex, RingCentral, 8x8, Vonage, Adobe Connect via virtual audio device
- **CRM**: Salesforce integration listed
- **Call recording**: RingCentral Automatic Call Recording integration

### SDK-based integrations
The IRIS SDK can be embedded into any VoIP, CRM, or communication platform:
- Browser-based calling (WebRTC AudioWorkletProcessor)
- Server-side audio processing (C++/Python/Node.js)
- IVR systems
- Transcription enhancement (clean audio before sending to STT)

### Partner ecosystem
- Reseller partner program at iris.audio/reseller-partner
- Listed on UK Government Digital Marketplace (G-Cloud)
- INDYCAR/IMS Productions use IRIS Clarity for broadcast audio

## Data model (SDK)

The SDK operates on audio streams, not structured data objects. Key concepts:

- **AudioContext**: Web Audio API context — must be created on user interaction (click event)
- **Streams**: Microphone (input) and speaker (output) audio streams processed through the SDK
- **Model types**: Different AI models for voice isolation, noise cancellation
- **Wet/dry ratio**: 0-1 float controlling processed vs unprocessed audio mix
- **Analytics**: SDK provides audio analytics data accessible via methods (details behind developer portal)

## Workflow setup

### Setting up IRIS Clarity desktop app for a contact center
1. Download IRIS Clarity from iris.audio for Windows/Mac
2. Install on each agent's workstation
3. IRIS Clarity creates a virtual audio device on the system
4. In the VoIP/CCaaS platform audio settings, select "IRIS Clarity" as microphone and speaker
5. Test with a call — verify noise cancellation is working bidirectionally
6. For Talkdesk: use the AppConnect integration instead of manual virtual device setup
7. Roll out to agents — Professional plan supports up to 100 seats

### Integrating the IRIS Web SDK
1. Request SDK access at developer.iris.audio
2. Set `IRIS_SDK_TOKEN` environment variable
3. Run `npx @irisaudiotechnologies/iris-web-sdk setup-wizard` (or manual: npm install + copy iris-awp to public dir + download WASM binaries via curl)
4. Instantiate SDK with config (company ID, key, license, model, paths)
5. Create AudioContext on user click event
6. Connect mic and speaker streams
7. Listen for ready callbacks, then start processing
8. Implement start/stop call controls and processing toggles

### Deploying IRIS SDK server-side
1. Install server SDK (C++, Python, or Node.js)
2. Configure with license and model selection
3. Process audio streams or batch files
4. Available for: streaming transcription enhancement, IVR noise removal, post-production batch processing
5. Cloud deployment via Terraform, Helm, or Docker

## Deep dives

### IRIS Clarity vs Krisp — detailed comparison

| Feature | IRIS Clarity | Krisp |
|---|---|---|
| **Core focus** | Pure noise cancellation | Noise cancellation + AI meeting notes |
| **Bidirectional** | Yes (key differentiator) | Yes |
| **Meeting notes/transcription** | No | Yes (16 languages) |
| **Accent conversion** | No | Yes (4 English accents) |
| **Desktop app** | Windows/Mac | Windows/Mac/mobile |
| **SDK** | C++/Python/Node/WebRTC | JS/WASM/desktop/mobile/server |
| **Pricing (annual)** | £6.50/seat/mo (~$8.25 USD) | $8/seat/mo (Core) |
| **Free tier** | 14-day trial only | 7-day trial only |
| **Contact center product** | Via app or SDK | Call Center AI ($10/agent/mo) |
| **CRM integration** | Salesforce only | HubSpot, Salesforce, Pipedrive, Affinity |
| **Certifications** | Not specified | SOC 2, GDPR, HIPAA, PCI-DSS |

**Pick IRIS Clarity when**: Pure noise cancellation is the only need, price sensitivity matters at scale, you need the SDK for embedding in your own platform, or you're on Talkdesk (native AppConnect).

**Pick Krisp when**: You also need meeting transcription/summaries/action items, accent conversion for BPO agents, wider CRM integrations, or a more mature integration ecosystem.

### Using IRIS SDK to improve transcription accuracy
IRIS Clarity's noise cancellation can be used as a preprocessing step before speech-to-text:
1. Route audio through IRIS SDK (client-side or server-side)
2. Feed cleaned audio to your STT provider (Whisper, Google, AWS Transcribe, etc.)
3. Expect improved word error rate (WER) in noisy environments
4. Server-side SDK is ideal for batch transcription pipelines
