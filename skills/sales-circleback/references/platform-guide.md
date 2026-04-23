# Circleback Platform Reference

## Platform overview

Circleback is an AI meeting notes platform that automatically captures notes, action items, and provides searchable meeting intelligence across Zoom, Google Meet, Microsoft Teams, Slack huddles, and in-person conversations. It supports 100+ languages with speaker identification. Key differentiators: cross-meeting AI search, webhook-based workflow automations, and MCP server for AI tool integration (Claude, ChatGPT, Cursor, Raycast). Target audience: individual professionals and small-to-mid teams wanting automated meeting capture with downstream integrations. Founded as a VC-backed startup; competes in the mid-market segment against Fathom, Granola, tl;dv, and Fireflies.

## Key modules

### AI Meeting Notes
- Automatically generates structured notes from recorded meetings
- Action items extracted and assigned to attendees
- Notes in Markdown format
- No customizable templates — output format is fixed

### Meeting Search
- AI-powered search across all past conversations
- Contextual understanding (not just keyword matching)
- Search scope: individual meetings or all meetings

### Transcription
- 100+ language support
- Speaker identification and diarization
- State-of-the-art accuracy (degrades with overlapping speakers, conference rooms)

### Custom Insights
- User-defined insight extraction (e.g., "extract competitor mentions" or "summarize product feedback")
- Results included in webhook payload under `insights` object

### Workflow Automations
- Trigger webhooks after meetings based on configurable conditions
- Filter by meeting type, participants, tags, or other criteria
- Push to any endpoint — integrates with Zapier, Make, or custom services

### Recording
- **Bot-based**: Standard — bot joins the meeting as a participant
- **Botless**: Alternative method for less intrusive recording (platform-dependent)
- In-person recording via mobile app
- Meeting video and audio playback available
- Import past recordings for retroactive processing

## Pricing and limits

*Best-effort as of 2026-04 — verify on circleback.ai/pricing before quoting.*

| Feature | Individual | Team | Enterprise |
|---|---|---|---|
| Price (annual) | $20.83/user/mo | $25/user/mo | Custom |
| Price (monthly) | $25/mo | $30/user/mo | Custom |
| Unlimited meetings | Yes | Yes | Yes |
| AI notes + action items | Yes | Yes | Yes |
| Transcription + speaker ID | Yes | Yes | Yes |
| Automations (webhooks) | Yes | Yes | Yes |
| Meeting search | Yes | Yes (shared) | Yes |
| In-person recording | Yes | Yes | Yes |
| Import past recordings | Yes | Yes | Yes |
| 100+ language support | Yes | Yes | Yes |
| Custom AI insights | Yes | Yes | Yes |
| 1,000+ app integrations | Yes | Yes | Yes |
| Auto notes sharing | Yes | Yes | Yes |
| Shared meetings across team | — | Yes | Yes |
| AI search across shared meetings | — | Yes | Yes |
| Slack huddles support | — | Yes | Yes |
| Inline comments collaboration | — | Yes | Yes |
| Team settings (default/enforced) | — | Yes | Yes |
| Team automations | — | Yes | Yes |
| Centralized billing | — | Yes | Yes |
| Usage dashboard | — | Yes | Yes |
| Meeting participant customization | — | Yes | Yes |
| Access management controls | — | Yes | Yes |
| Custom data retention | — | Yes | Yes |
| Priority support | — | — | Yes |
| Onboarding support | — | — | Yes |
| Advanced security controls | — | — | Yes |

**Free trial**: 7 days, credit card required. No permanent free tier.

## Integrations

### CRM
- **HubSpot**: Native connector — sync meeting notes and action items to contacts/deals
- **Salesforce**: Native connector — log meeting activity and notes
- **Attio**: Native connector

### Calendar & Email
- Google Calendar, Gmail, Outlook — auto-detect and join scheduled meetings

### Productivity
- **Slack**: Notifications + Slack huddles recording (Team+)
- **Linear**: Push action items
- **Notion**: Push meeting notes
- **Monday.com**: Push meeting data
- **Zoho**: Integration available

### Automation
- **Zapier**: Via webhook triggers
- **Make (Integromat)**: Via webhook trigger module
- Webhook API for custom endpoints

### Developer
- **MCP Server**: `app.circleback.ai/api/mcp` — Streamable HTTP transport, OAuth authentication. Compatible with Claude, ChatGPT, Cursor, Raycast.
- **CLI**: Agent-friendly command-line access
- **Webhooks**: HMAC-SHA256 signed POST requests (see API reference)

## Data model (webhook API)

### Meeting object (webhook payload)

| Field | Type | Description |
|---|---|---|
| `id` | number | Meeting identifier — use to construct Circleback links |
| `name` | string | Meeting title from calendar |
| `createdAt` | string | ISO-8601 creation timestamp |
| `duration` | number | Meeting length in seconds |
| `url` | string \| null | Virtual meeting platform URL |
| `recordingUrl` | string \| null | Recording link — **expires after 24 hours** |
| `tags` | array | Applied tag names |
| `icalUid` | string \| null | Calendar event identifier |
| `attendees` | array | Objects with `name` and `email` fields |
| `notes` | string | Markdown-formatted meeting notes |
| `actionItems` | array | Objects with `id`, `title`, `description`, `assignee`, `status` |
| `transcript` | array | Segments with `speaker`, `text`, `timestamp` |
| `insights` | object | User-created insights organized by name |

### Webhook signature verification

Incoming requests include an `x-signature` header. Verify using HMAC-SHA256:

```typescript
import crypto from 'crypto';

function verifySignature(body: string, signature: string, secret: string): boolean {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}
```

The signing secret is provided during webhook configuration and prefixed with `whsec_`.

## Workflow setup

### Setting up a webhook automation

1. Open **Automations** in Circleback
2. Click **Create automation**
3. Add conditions to filter meetings (by participant, tag, calendar, etc.)
4. Click **Next**
5. Choose **Send webhook request**
6. Enter your endpoint URL
7. Select which meeting outcomes to include (notes, action items, transcript, insights)
8. Optionally test with the most recent meeting
9. Name the automation and click **Create**

### Connecting to HubSpot

1. Go to Settings → Integrations → HubSpot
2. Authorize the OAuth connection
3. Meeting notes and action items will auto-sync to associated contacts/deals
4. For custom field mapping: create a webhook automation → point to Zapier/Make → map fields to HubSpot deal properties

### Using the MCP server

1. Configure your MCP client (Claude, Cursor, Raycast, ChatGPT) with:
   - Transport: Streamable HTTP
   - URL: `https://app.circleback.ai/api/mcp`
   - Auth: OAuth (browser-based authorization flow)
2. Once connected, you can query meeting data, search across conversations, and access action items programmatically

## Deep dives

### Circleback vs competitors — positioning

| Feature | Circleback | Fathom | Granola | tl;dv |
|---|---|---|---|---|
| Free tier | No (7-day trial) | Yes (unlimited) | Yes (limited) | Yes (limited) |
| Starting paid | $20.83/mo | $16/mo | $14/user/mo | $18/mo |
| Bot-free option | Yes (secondary) | No (bot only) | Yes (primary) | No (bot only) |
| CRM depth | Medium (HS/SF/Attio) | Medium (Business+) | Medium (HS/Attio/Affinity) | Deep (Business+) |
| Webhooks | Yes (HMAC) | Yes (HMAC) | No | Yes |
| MCP server | Yes (OAuth) | No | Yes (beta) | Yes (Pro+) |
| Custom templates | No | No | Yes (AI notepad) | Yes |
| Meeting search | Yes (AI-powered) | Yes | No | Yes |
| Coaching features | No | Basic | No | Yes (MEDDIC/BANT/SPIN) |
| In-person recording | Yes (mobile) | No | Yes (macOS) | No |
| Slack huddles | Yes (Team+) | No | No | No |

### When to pick Circleback

- You need **cross-meeting AI search** with webhook automations
- You want **both bot-based and botless** recording options
- You need **Slack huddle** recording (Team plan)
- You want **MCP server** integration for AI-powered workflows
- You need **in-person recording** via mobile alongside virtual meetings
- Your CRM is HubSpot, Salesforce, or Attio

### When to avoid Circleback

- You need a **free tier** → Fathom, tl;dv, MeetGeek
- You need **coaching/methodology scorecards** → tl;dv, Avoma, Gong
- You need **customizable note templates** → tl;dv, Granola
- You need a **full REST API** for custom data pipelines → Fathom, Fireflies, Gong
- You need **deal intelligence / revenue forecasting** → Gong, Clari Copilot, Sybill
