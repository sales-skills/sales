# Granola Platform Reference

## Platform overview

Granola is a bot-free AI notepad for meetings. Instead of sending a bot to join your call, it captures audio directly from your device, transcribes it, and enhances your notes with AI after the meeting. Positioned as the privacy-friendly alternative to bot-based tools (Fathom, Fireflies, Otter). Series C funded at $125M valuation. Major customers include PostHog, Intercom, Ramp, Linear, Brex, Replit, Vercel.

Target audience: Product teams, VCs, sales professionals, and anyone managing back-to-back meetings. Appeals to users who dislike meeting bots or work in sensitive contexts where a visible bot creates friction.

## Key modules

### AI Notepad
The core product. Take notes during a meeting in the notepad; after the meeting ends, Granola enhances them with context from the transcript. This is fundamentally different from pure transcription tools — Granola combines your human notes with the full transcript to produce structured, relevant output.

### AI Chat
Post-meeting conversational interface. Ask questions about the meeting ("what were the budget objections?", "summarize the technical requirements") and Granola answers from the transcript + notes. Cross-meeting chat lets you query across your entire meeting history.

### Templates
Customizable note templates for different meeting types: customer discovery, user interviews, 1-on-1s, sales calls, QBRs. Templates guide the AI enhancement — better template structure produces more useful output.

### Shared Folders
Organize notes into team folders. Share with colleagues for collaborative review. Used for team-wide meeting libraries.

## Pricing and limits

| Feature | Basic (Free) | Business ($14/user/mo) | Enterprise ($35/user/mo) |
|---|---|---|---|
| AI meeting notes | Yes | Yes | Yes |
| Meeting history | Limited (time-restricted) | Unlimited | Unlimited |
| AI chat (within + across meetings) | Yes | Yes | Yes |
| Shared folders | Yes | Yes | Yes |
| Custom templates | Yes | Yes | Yes |
| Multi-language support | Yes | Yes | Yes |
| Model training opt-out | Manual toggle | Manual toggle | Default off |
| CRM integrations (HubSpot, Attio, Affinity) | No | Yes | Yes |
| Slack, Notion integration | No | Yes | Yes |
| Zapier (8,000+ apps) | No | Yes | Yes |
| MCP integration (beta) | No | Yes | Yes |
| Personal API access | No | Yes | Yes |
| Enterprise API access | No | No | Yes |
| SSO (30+ providers) | No | No | Yes (50+ users required) |
| Admin controls (sharing, API) | No | No | Yes |
| Auto-deletion periods | No | No | Yes |
| Usage analytics | No | No | Yes |
| Priority support | No | No | Yes |

**Key gates:**
- Free → Business: integrations, unlimited history, API, MCP
- Business → Enterprise: SSO, admin controls, org-wide policies, Enterprise API
- SSO requires 50+ user minimum

## Integrations

### Native CRM
- **HubSpot** (Business+): Push notes to Contact records with one click. Manual per-note, not automatic. Maps to contact by calendar invite email.
- **Attio** (Business+): Native sync for modern CRM users.
- **Affinity** (Business+): Native sync for relationship intelligence.
- **Salesforce**: No native integration. Use Zapier — "Note Added to Granola Folder" or "Note Shared to Zapier" triggers → map to Salesforce objects.

### Productivity
- **Notion** (Business+): Push notes directly.
- **Slack** (Business+): Share notes to channels.

### Automation
- **Zapier** (Business+): Two triggers — "Note Added to Granola Folder" and "Note Shared to Zapier". Connect to 8,000+ apps including Salesforce, Linear, Asana, Jira, Monday.com.

### MCP (Beta)
- Available on Business+ plans. Enables AI assistants (Claude, Cursor) to access Granola meeting data.

### Meeting platforms
- Zoom, Google Meet, Microsoft Teams, Webex, Slack huddles
- iOS app for phone calls and in-person meetings

## Data model (API)

### Note object
- `id` — unique note identifier
- `title` — meeting title
- `owner` — note creator
- `summary` — AI-generated summary (only present if AI processing completed)
- `transcript` — array of transcript items (must request via `include=transcript`)

### Transcript items
- **macOS**: `{ speaker: { source: "microphone" | "speaker" }, text: string }` — only distinguishes local mic vs remote speaker audio
- **iOS**: `{ speaker: { source: "microphone", diarization_label: "Speaker A" | "Speaker B" | ... }, text: string }` — basic diarization labels

### Constraints
- API only returns notes with a generated AI summary and transcript
- Notes still being processed or never summarized won't appear in API responses

## API reference

**Base URL**: `https://public-api.granola.ai/v1`

**Authentication**: Bearer token — `Authorization: Bearer grn_YOUR_API_KEY`
- Create keys in desktop app: Settings → API → Create new key
- Enterprise: workspace admins can enable/disable Personal API key creation via "Allow personal API keys" toggle
- Personal API keys: rate limits applied per user
- Enterprise API keys: rate limits applied per workspace

### Endpoints

#### List Notes
```
GET /notes
```
Parameters:
- `created_after` (optional): ISO 8601 timestamp — only return notes created after this time
- `cursor` (optional): pagination cursor from previous response

Response:
```json
{
  "notes": [...],
  "hasMore": true,
  "cursor": "next_page_cursor_string"
}
```

#### Get Note
```
GET /notes/{note_id}
```
Parameters:
- `include` (optional): `transcript` — include full transcript in response

Response: Note object with `id`, `title`, `owner`, `summary`, `transcript[]`

### Rate limits
- **Burst**: 25 requests within 5 seconds
- **Sustained**: 5 requests/second maximum
- Exceeding returns HTTP 429 (Too Many Requests)
- Personal API keys: limits per user
- Enterprise: limits per workspace

### Error handling
- 429: Rate limited — back off and retry with exponential delay
- 401: Invalid or expired API key
- 404: Note not found or not yet processed (no AI summary)

<!-- Source: https://docs.granola.ai/introduction -->

## Workflow setup

### Workflow 1: Sales team onboarding
1. Everyone installs Granola (Mac/Windows) + iOS for phone calls
2. Admin creates shared folders: "Discovery Calls", "Demos", "QBRs"
3. Create templates for each meeting type (discovery template with MEDDIC fields, demo template with objection tracking, QBR template with health metrics)
4. Upgrade to Business plan for HubSpot integration
5. Train team: take light notes during calls → Granola enhances after → one-click push to HubSpot → review in shared folder

### Workflow 2: Zapier automation (CRM + Slack)
1. Create a Granola folder for the meeting type (e.g., "Customer Calls")
2. In Zapier: trigger = "Note Added to Granola Folder", select the folder
3. Action 1: Post summary to Slack channel (#sales-calls)
4. Action 2: Create/update Salesforce record (map note title → Activity Subject, summary → Activity Description)
5. Test with a real meeting; verify fields map correctly

### Workflow 3: API integration for custom pipeline
1. Generate API key in Settings → API → Create new key
2. Poll `GET /notes?created_after={last_check}` on a schedule (every 5-10 min)
3. For each note, fetch `GET /notes/{id}?include=transcript` for full transcript
4. Parse summary + transcript into your internal schema
5. Push to data warehouse, internal tools, or downstream processors
6. Store cursor for pagination; handle 429 with exponential backoff

## Deep dives

### Privacy and data controls
- **Sharing default**: Notes are accessible via link. Review before team rollout.
- **Model training**: Basic/Business plans opt users in by default. Toggle off in Settings → Privacy. Enterprise defaults to off with org-wide enforcement.
- **Participant consent**: Granola doesn't notify meeting participants that audio is being captured. Legal responsibility falls on the user to disclose.
- **Data residency**: Not documented. Enterprise may negotiate data handling terms.
- **Auto-deletion**: Enterprise only — set org-wide auto-deletion periods for notes.

### Bot-free architecture
Granola captures system audio on your device — it hooks into the OS audio pipeline rather than joining the call as a participant. This means:
- **No bot notification** to other participants
- **Works with any meeting platform** that plays audio through your device
- **Fails silently** if the audio pipeline breaks (device switch, virtual audio conflict, permission issue)
- **No video recording** — audio only, discarded after transcription
- **Cannot record meetings you're not on** — you must be a participant with audio playing through your device
