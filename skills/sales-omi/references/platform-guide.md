# Omi AI Platform Reference

## Platform overview

Omi (omi.me) is an open-source AI wearable necklace/pendant that captures conversations throughout the day — both in-person and online meetings — and turns them into transcripts, summaries, action items, and "memories" (AI-generated insights). Built by BasedHardware, the entire hardware and software stack is open-source on GitHub (9,600+ stars). At $89, it's the lowest-priced AI wearable recorder on the market, targeting developers, tinkerers, and privacy-conscious users who want full control over their data and integrations.

## Key modules

### Hardware
- **Omi Necklace** ($89) — BLE 5.3 + Wi-Fi 6 pendant, ~14hr battery (Dev Kit 2), MEMS microphone, silicone bumper with necklace loop
- **Omi Dev Kit 2** — improved battery density, more sensitive MEMS microphone, more durable casing, designed for embedded engineers building custom firmware
- **Firmware Developer Kit** — everything needed to flash, debug, and develop custom firmware

### Software
- **Mobile App** (iOS + Android) — recording, transcription, memories, action items, AI chat
- **Desktop App** — screen capture + online meeting recording (Zoom, Meet, Teams, Webex)
- **App Marketplace** — third-party apps (Telegram, Slack, GitHub, ClickUp, Notion, Dropbox, Zapier, etc.)

### AI Features
- **Memories** — AI-generated insights extracted from conversations (key takeaways, decisions, commitments)
- **Action Items** — auto-detected tasks with context from conversations
- **Conversations** — raw transcripts with speaker diarization (accuracy varies)
- **AI Chat** — query your conversation history (reliability reported as inconsistent)

## Pricing and limits

| Plan | Price | Cloud Minutes | Features |
|---|---|---|---|
| Basic (free) | $0 (device $89) | 1,200/month | Unlimited on-phone transcription, all features unlocked, recordings saved locally after cap |
| Unlimited | $19/mo or $199/yr | Unlimited | Same features — only difference is cloud listening cap removed |

**Key pricing facts:**
- Device is a one-time $89 purchase
- All features are available on the free plan — no feature gating
- The only paid difference is cloud processing minutes (1,200/mo free vs unlimited)
- Recordings continue after hitting the free cap but are stored locally only
- No per-seat pricing — it's per-device
- Dev Kit 2 is priced separately (check store)

## Integrations

### App Marketplace
- **Zapier** — 5,000+ app connections via marketplace integration app
- **Telegram** — conversation summaries to Telegram
- **Notion** — sync memories/notes to Notion
- **Slack** — post conversation summaries
- **GitHub** — create issues from action items
- **ClickUp** — push tasks
- **Dropbox** — export recordings
- **Google Calendar** — calendar-aware recording

### Native CRM
**None.** No native HubSpot, Salesforce, Pipedrive, or Attio connectors. CRM sync requires:
1. Custom webhook integration app (free to build)
2. Zapier marketplace app → CRM
3. Direct API integration using the Developer API

### Custom Apps
Two types:
1. **Prompt-Based Apps** — customize AI behavior via system prompts (no server needed). Use cases: fitness coach, meeting note formatter, custom memory extraction.
2. **Integration Apps** — connect to external services via webhooks. Triggers: memory creation, real-time transcript, chat tools, audio streaming.

## Data model (API)

### Base URL
```
https://api.omi.me/v1/dev
```

### Authentication
Bearer token in Authorization header:
```
Authorization: Bearer omi_dev_your_api_key_here
```
Obtain via: Omi app → Settings → Developer → Create Key

### Rate Limits
- 100 requests per minute per API key
- 10,000 requests per day per user
- Response headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

### Endpoints

**Memories** (AI-generated insights):
- `GET /v1/dev/user/memories` — list memories (paginated)
- `POST /v1/dev/user/memories` — create a single memory
- `POST /v1/dev/user/memories/batch` — create up to 25 memories at once

**Action Items** (auto-detected tasks):
- `GET /v1/dev/user/action-items` — list action items
- `POST /v1/dev/user/action-items` — create a single item
- `POST /v1/dev/user/action-items/batch` — create up to 50 items at once

**Conversations** (raw transcripts):
- `GET /v1/dev/user/conversations` — list conversations
- `POST /v1/dev/user/conversations` — create from text
- `POST /v1/dev/user/conversations/from-segments` — create from transcript segments (speaker-labeled)

**API Keys**:
- `GET /v1/dev/keys` — list all keys
- `POST /v1/dev/keys` — create new key
- `DELETE /v1/dev/keys/{key_id}` — revoke key

### HTTP Status Codes
200 (OK), 204 (No Content), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 422 (Unprocessable Entity), 429 (Rate Limited), 500 (Server Error)

### Error Format
```json
{
  "detail": "Error message"
}
```

### Webhook Triggers (via App Framework)
- **Memory triggers** — fire when a memory is created (conversation saved)
- **Real-time transcript** — process live audio streams during active conversations
- **Chat tools** — user invokes custom functions within Omi conversations
- **Audio streaming** — access raw audio bytes for custom processing

### Code Examples
cURL, Python (requests), JavaScript (fetch) examples in docs.

## Workflow setup

### Setting up your first Omi integration

1. **Get an API key**: Omi app → Settings → Developer → Create Key
2. **Test with cURL**:
   ```bash
   curl -H "Authorization: Bearer omi_dev_YOUR_KEY" \
     https://api.omi.me/v1/dev/user/memories
   ```
3. **Build an app**: Omi app → Explore → Create an App → select capabilities
4. **Test webhooks**: Use webhook.site for quick testing without server code
5. **Deploy**: Point webhook URL to your serverless function (Lambda, Cloud Run, etc.)

### Syncing conversations to an external system

1. **Create an Integration App** with Memory Trigger
2. **Set webhook URL** to your endpoint
3. **On trigger**: receive memory payload → call `GET /v1/dev/user/conversations` for full transcript → transform → push to destination (CRM, Slack, warehouse)
4. **For batch export**: use `GET /v1/dev/user/conversations` with pagination, respect 100 req/min limit

## Deep dives

### Open-source ecosystem
- **GitHub**: github.com/BasedHardware/omi — 9,600+ stars, 550+ open issues, very active development (multiple commits daily)
- **Firmware**: fully open-source, flashable via Dev Kit
- **Backend**: Python-based, deployable self-hosted
- **Mobile**: Flutter app (iOS + Android)
- **Contribution**: PRs welcome, active community

### Hardware comparison

| Feature | Omi | Plaud NotePin S | Bee |
|---|---|---|---|
| Price | $89 | ~$159 | $49.99 + $19/mo |
| Open-source | Yes (full stack) | No | No |
| Battery | ~14hr (DK2) | ~20hr | All-day |
| Free cloud mins | 1,200/mo | 300/mo | None (subscription required) |
| CRM native | None | None | None |
| API | REST (100 req/min) | Limited | None |
| Best for | Developers, tinkerers | Reliability-first users | Always-on memory |
| Status | Active | Active | Acquired by Amazon |

### Privacy and data
- Open-source means you can audit the entire codebase
- Local recording continues after cloud cap — data stays on device
- No enterprise compliance certifications documented (no SOC 2, HIPAA, GDPR certs mentioned)
- Free service model — privacy-conscious users should review data handling policies
