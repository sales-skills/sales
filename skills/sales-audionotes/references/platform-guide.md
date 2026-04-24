# Audionotes Platform Reference

## Overview

Audionotes is a multi-format AI note-taker that converts voice recordings, text, images, video files, and YouTube links into organized, structured notes with AI-generated summaries. It targets professionals, content creators, medical/legal practitioners, and students who want to capture ideas by voice and get polished output through 100+ customizable templates. Differentiator: broadest input format coverage (voice + text + image + video + YouTube) with WhatsApp Bot for mobile-first capture.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| Voice recording | Record voice memos with auto-language detection (80+ languages) | UI (iOS/Android/Web) |
| Transcription | Convert audio to text, 95% accuracy under optimal conditions, 30+ languages | UI |
| AI summaries | Auto-generate summaries highlighting key ideas and action points | UI |
| Speaker recognition | Identify different speakers in recordings | UI |
| Custom templates | 100+ prompt options for output formatting (meeting minutes, SOAP notes, blogs, emails) | UI |
| Mind maps | Generate visual mind maps from notes | UI (Pro) |
| Image notes | Extract text and context from uploaded images | UI (Pro) |
| YouTube video notes | Paste YouTube URL → transcript + AI notes | UI (Pro) |
| File uploads | Upload audio/video files for transcription (3-hour limit, 500 MB) | UI (Pro) |
| WhatsApp Bot | Send voice/files via WhatsApp for transcription and summaries | UI (Pro) |
| Chat with notes | Query note content via AI chat | UI |
| Organization | Folders, tags, bookmarks, filters, sorting | UI |
| Zapier automation | "New Note V2" trigger → route to 8,000+ apps | **Zapier** (Pro) |
| Notion sync | Auto-sync all notes (new + existing) to Notion workspace | **Notion API** (Pro) |
| Webhook | Push new note JSON to any endpoint | **Webhook** (Pro) |
| Export/share | Share via WhatsApp, Slack, email, LinkedIn, or public pages | UI |

**No public REST API.** All programmatic access is through webhooks (push-only), Zapier, or Notion sync.

## Pricing, limits & plan gates

| Feature | Free | Pro ($129.99/yr, ~$10.83/mo) |
|---|---|---|
| Voice recording | 1 min/note | Unlimited |
| File uploads | N/A | Unlimited (3-hr limit, 500 MB) |
| YouTube video notes | N/A | Unlimited |
| Image notes | N/A | Yes |
| Mind maps | N/A | Yes |
| Zapier | N/A | Yes |
| Notion sync | N/A | Yes |
| Webhook | N/A | Yes |
| WhatsApp Bot | N/A | Yes |
| Note chatting | N/A | Yes |

**Enterprise/Custom**: Available for teams of 5+ users — contact sales.

**Key gate**: All integrations (Zapier, Notion, webhook) require Pro. The free plan is effectively a trial with the 1-minute limit.

## Integrations

### Notion (bidirectional-ish — Audionotes → Notion, auto-sync)

**Setup**: Integrations sidebar → Connect Notion → duplicate the provided template into your workspace.

**Fields synced per note**:
- Title
- Transcript
- AI Notes (content from template output)
- Created At
- Note Type (voice/text/image/video/youtube)
- Speaker Transcript

**Behavior**: All existing notes sync on first connection. New notes sync automatically. One-way (Audionotes → Notion), edits in Notion don't flow back.

### Zapier

**Setup**: Integrations sidebar → Connect Zapier → authenticate with API key + email.

**Available trigger**: `New Note V2` — fires when a new note is created.

**Trigger fields available** (based on webhook payload — Zapier maps from same data):

```json
{
  "noteId": "abc123",
  "createdAt": "2026-04-24T10:30:00Z",
  "noteType": "voice",
  "title": "Client meeting notes",
  "transcript": "Raw transcription text...",
  "content": "AI-generated summary/notes..."
}
```
<!-- Constructed from docs — verify against live API -->

**Common Zap recipes**:
- Audionotes → Google Sheets (log all notes)
- Audionotes → Slack (post summaries to a channel)
- Audionotes → Notion (alternative to native sync with more control)
- Audionotes → HubSpot (create activity note on contact)

### Webhook

**Setup**: Integrations sidebar → Webhook card → paste URL → Connect.

**Payload** (JSON, fixed structure):

```json
{
  "noteId": "string",
  "createdAt": "string",
  "noteType": "string",
  "title": "string",
  "transcript": "string",
  "content": "string"
}
```

**Behavior**:
- Fires on every new note created after connection
- Historical notes are NOT retransmitted
- Fixed payload — no field selection, no filtering
- No signature verification documented — no HMAC header
- No retry/delivery guarantee documented

### WhatsApp Bot (Pro only)

Send voice messages, audio files, or text to the Audionotes WhatsApp Bot. It transcribes and creates notes in your account. Useful for mobile-first capture when the app isn't convenient.

## Data model

Audionotes has a simple, flat data model. Notes are the primary object:

```json
{
  "noteId": "unique-note-identifier",
  "createdAt": "2026-04-24T10:30:00Z",
  "noteType": "voice | text | image | video | youtube",
  "title": "Auto-generated or user-set title",
  "transcript": "Raw transcription from audio/video, or extracted text from image",
  "content": "AI-generated output based on selected template"
}
```
<!-- Constructed from webhook docs — verify field names against live webhook payload -->

**Organization objects** (UI-only, not available via webhook/Zapier):
- **Folders**: Group notes by project or topic
- **Tags**: Label notes for filtering
- **Bookmarks**: Pin important notes

## Quick-start recipes

### Recipe 1: Voice notes → Notion knowledge base

**Trigger**: Record a voice note in Audionotes (any platform)
**Steps**:
1. Go to Integrations → Notion → Connect
2. Authorize Audionotes to access your Notion workspace
3. Duplicate the Audionotes template page into your target workspace
4. Record a voice note — it appears in Notion within seconds

**Gotcha**: All existing notes sync on first connection, which may flood your Notion workspace. Create a dedicated database first.

### Recipe 2: Voice notes → Slack channel via Zapier

**Trigger**: New Note V2 in Audionotes
**Steps**:
1. Create a Zap: Audionotes (trigger) → Slack (action)
2. Trigger: "New Note V2"
3. Action: "Send Channel Message" in Slack
4. Map fields: Title → message header, Content → message body
5. Test with a new voice recording

**Python equivalent using webhook**:

```python
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
SLACK_WEBHOOK = "https://hooks.slack.com/services/T.../B.../xxx"

@app.route("/audionotes-webhook", methods=["POST"])
def handle_note():
    note = request.json
    slack_msg = {
        "text": f"*{note['title']}*\n{note['content']}"
    }
    requests.post(SLACK_WEBHOOK, json=slack_msg)
    return jsonify({"ok": True}), 200
```

**Gotcha**: No HMAC signature verification available — consider IP allowlisting or a shared secret in a query parameter as a basic auth workaround.

### Recipe 3: Voice notes → HubSpot contact activity via webhook

**Trigger**: Webhook fires on new Audionotes note
**Steps**:
1. Set up webhook endpoint
2. Parse incoming JSON for `title`, `content`, `createdAt`
3. Match note to HubSpot contact (by keyword in title or a naming convention)
4. Create engagement/note via HubSpot API

```python
import requests

HUBSPOT_TOKEN = "pat-xxx"

def create_hubspot_note(contact_id: str, note_title: str, note_body: str):
    url = "https://api.hubapi.com/crm/v3/objects/notes"
    payload = {
        "properties": {
            "hs_note_body": f"<strong>{note_title}</strong><br>{note_body}",
            "hs_timestamp": "2026-04-24T10:30:00.000Z"
        },
        "associations": [{
            "to": {"id": contact_id},
            "types": [{"associationCategory": "HUBSPOT_DEFINED", "associationTypeId": 202}]
        }]
    }
    resp = requests.post(url, json=payload, headers={
        "Authorization": f"Bearer {HUBSPOT_TOKEN}",
        "Content-Type": "application/json"
    })
    resp.raise_for_status()
    return resp.json()
```

**Gotcha**: Audionotes doesn't include contact identifiers in the payload — you must build your own matching logic (e.g., include client name in the note title and parse it).

## Integration patterns

### Webhook listener pattern

```
Audionotes (new note) → POST JSON → Your endpoint → Parse → Route to destination
```

**No signature verification**: Unlike Fathom (Svix HMAC), Fireflies (`x-hub-signature`), or Circleback (HMAC-SHA256), Audionotes webhooks have no documented signature. Protect your endpoint with:
- Require HTTPS
- Add a shared secret as a query parameter (`?token=xxx`)
- IP allowlisting if Audionotes publishes origin IPs
- Rate limiting to prevent abuse

### Zapier-first pattern (recommended for non-developers)

```
Audionotes → Zapier "New Note V2" → Filter (by noteType) → Action (CRM/Slack/Sheets)
```

Use Zapier's built-in Filter step to route different note types to different destinations (e.g., voice notes → Slack, meeting notes → CRM).

## Affiliate program

- **Commission**: 30% on upgrades
- **Network**: Lemon Squeezy
- **Signup**: https://audionotes.lemonsqueezy.com/affiliates (or https://affiliates.lemonsqueezy.com/programs/audionotes)
- **Cookie duration**: Not documented
