<!-- Source: https://sdk-docs.krisp.ai/, https://help.krisp.ai/hc/en-us/articles/24514911804316-Webhook-API, https://www.postman.com/krispai/krisp-team-management-api-s-public-workspace/ -->
<!-- Note: Primary API docs are JS-rendered or behind auth. Content below is assembled from multiple accessible sources. -->

# Krisp API Reference

## 1. Webhook API (Meeting Assistant)

The Webhook API lets you automatically send Krisp meeting outputs (transcripts, notes, outlines) to another tool or internal system via a secure URL endpoint. Available on Advanced+ plans.

### Setup

1. Go to Settings → Integrations → Webhook → Connect
2. Configure:
   - **Webhook name** — for your reference
   - **Webhook URL** — where Krisp sends events (HTTPS required)
   - **Trigger events** — select which events to receive
   - **Request headers** — add any headers your endpoint requires (e.g., `Authorization: Bearer ...`)

### Trigger events

| Event | Description |
|---|---|
| Transcript created | Fires when meeting transcription is complete |
| Notes generated | Fires when AI summary / key points / action items are ready |
| Outline generated | Fires when meeting outline is ready |

### Webhook payload structure

```json
{
  "event": "transcript_created | notes_generated | outline_generated",
  "event_id": "unique-event-id",
  "meeting": {
    "meeting_id": "...",
    "title": "...",
    "link": "https://...",
    "start_time": "ISO8601",
    "end_time": "ISO8601",
    "duration": "seconds"
  },
  "content": {
    "transcript": "...",
    "notes": "...",
    "outline": "..."
  }
}
```

Fields included depend on the trigger event type. Transcript events include transcript content; notes events include summary text; outline events include outline content.

### Authentication

Add custom headers during setup (e.g., `Authorization`, `X-API-Key`). No documented HMAC signing — verify payloads by checking custom headers or using a secret in the URL path.

---

## 2. Voice AI SDK (JS/Browser)

Full docs: https://sdk-docs.krisp.ai/

### Overview

The Krisp JS SDK provides real-time noise cancellation, accent conversion, and voice activity detection for browser-based apps. Built on WebAssembly (WASM) for high performance. The only robust JavaScript-based noise cancellation SDK available for browsers.

### Performance specs

| Metric | Value |
|---|---|
| Package size | 12 MB |
| Memory footprint | ~100 MB |
| Frame processing | 1.5-2 ms per frame |
| Frame duration | 10 ms (standard) |
| Supported sample rates | 8K, 16K, 24K, 32K, 44.1K, 48K, 88.2K, 96K Hz |

**Limitation**: 8KHz audio streams are not supported on Safari (Apple WebKit limitation).

### Core classes and methods

#### KrispSDK (main class)

| Method | Description |
|---|---|
| `KrispSDK.isSupported()` | Check browser/platform compatibility |
| `init(config)` | Initialize SDK with API key and options |
| `on(event, callback)` | Register event listeners |
| `dispose()` | Clean up resources |
| `createNoiseFilter(options)` | Create a noise cancellation audio filter |
| `createAccentReductionFilter(options)` | Create an accent conversion audio filter |

#### AudioFilterNode (returned by createNoiseFilter / createAccentReductionFilter)

**Filter control:**
- Enable/disable filter processing
- Toggle between inbound (speaker) and outbound (microphone) modes

**Status & information:**
- Get current filter state (active/inactive)
- Query processing statistics

**Voice Activity Detection (VAD):**
- Detect when voice is present in the audio stream
- Events fired on voice start/stop

**Events:**
- Filter state changes
- VAD events
- Error events
- Statistics updates

**Cleanup:**
- `dispose()` — release filter resources

### Available models

| Model | Code | Use case |
|---|---|---|
| Voice Isolation (VIVA) | VIVA | Remove background voices, noise from TV/music/kids/cars. For voice AI agents. |
| Turn-Taking | — | Detect speaker turn completion for natural AI agent conversation flow |
| Accent Conversion (AC-o) | AC-o | Real-time accent conversion: India→US, Philippines→US, LatAM→US |
| Noise Cancellation outbound (NC-o) | NC-o | Microphone stream — remove background noise + de-reverb |
| Noise Cancellation inbound (NC-i) | NC-i | Speaker stream — remove noise from incoming audio |
| Background Voice Cancellation (BVC-o) | BVC-o | Remove competing voices from microphone stream |

### SDK types

1. **RTC SDK** — for real-time human-to-human communication (calls, meetings)
   - Web Browser (JS/WASM)
   - Desktop (Windows, macOS, Linux)
   - Mobile (iOS, Android with WebRTC)

2. **VIVA SDK** — for human-to-AI communication (voice AI agents)
   - Server-side deployment (Go, Python, Node.js, Rust)
   - Voice isolation + turn-taking

### Integration support

Native integrations documented for:
- Twilio Voice SDK
- Amazon Connect
- Jitsi (self-hosted)
- SIP.js
- React
- Electron
- WebRTC (mobile — browser coming soon)
- Pipecat
- LiveKit

### Authentication

API keys generated at https://sdk.krisp.ai dashboard. Keys are workspace-scoped.

---

## 3. Platform API (Team Management)

A Postman workspace exists at `postman.com/krispai/krisp-team-management-api-s-public-workspace` but the documentation is JS-rendered and not extractable. Based on the workspace name, this covers:

- Team/workspace management
- User provisioning
- Usage analytics

Enterprise plan likely required. Contact Krisp sales for API access details.

---

## 4. Speech-to-Text API

Announced on Krisp's blog. Provides transcription capabilities for developers. Details are limited — likely part of the Voice AI SDK offering. Check sdk-docs.krisp.ai for current availability.

---

## GitHub repositories (github.com/krispai)

| Repo | Stars | Description |
|---|---|---|
| Krisp-SDK-Sample-Apps | 19 | Sample apps demonstrating SDK functionality |
| webrtc | 4 | WebRTC integration |
| webrtc-android-krisp-module | 3 | Android WebRTC module |
| WebRTC-Integration | 1 | WebRTC integration guide |
| kr-local-monitoring | 0 | Local monitoring tool |
