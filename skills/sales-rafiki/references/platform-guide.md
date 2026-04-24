# Rafiki Platform Reference

## Overview

Rafiki (getrafiki.ai) is an AI-powered conversation intelligence and revenue intelligence platform for SMB and mid-market sales teams. Positioned as the most affordable Gong alternative — claims 99% of Gong's features at 25% of the price. Founded 2021, based in Covina, CA. 4.8/5 on G2 (~150 reviews), 500+ revenue teams.

## Capabilities & automation surface

### Notetaking Agent
Records, transcribes, and analyzes conversations across Zoom, Google Meet, Microsoft Teams, and phone calls. Identifies topics, questions, objections, action items, and next steps. Supports 55-60+ languages with speaker identification. **UI + native integrations** — no public API.

### Coaching Agent (Smart Call Scoring)
Auto-scores every call against custom or framework criteria. Built-in frameworks: MEDDIC, BANT, SPIN, GAP. Identifies coaching moments, tracks process adherence, highlights performance gaps. **Premium plan required.** UI-only — no API access to scoring data.

### Follow-Up Agent (Smart Follow Up)
Generates personalized post-call emails based on conversation content. Captures commitments and next steps. Tags key moments from the meeting. Maintains rep's voice and tone. Custom summary and follow-up formats on Premium. **UI + native integrations.**

### CRM Sync Agent
Auto-captures call data into CRM. Supported CRMs: Salesforce, HubSpot, Zoho CRM, Pipedrive, Freshworks, Monday.com. Logs contact fields, deal updates, notes, and methodology scores. Auto-capture of custom CRM fields (MEDDIC, BANT, SPIN, GAP) requires Premium. **Native integration — no API.**

### Revenue Agent (Deal Intelligence)
Surfaces at-risk deals, tracks buying signals, generates pipeline reports. Deal dashboard with forecasting insights on Premium. **UI-only.**

### Role Play Agent
AI-powered practice scenarios with instant scoring on five dimensions. Simulates buyer conversations for rep practice without needing a live partner. **UI-only.**

### Gen AI Reports
One-click revenue insights from complex sales data. Ask anything about deals, pipeline, or team performance. Premium plan — uses add-on credits. **UI-only.**

### Gen AI Search (Ask Rafiki)
Natural language queries across all conversations. Competitor mention tracking, objection identification, direct links to conversation moments. Premium plan — uses add-on credits. **UI-only.**

### Voice Agent (AI SDR) — Coming Soon
Autonomous outbound calling in 5+ languages, 24/7. Not yet released.

## Pricing, limits & plan gates

| Feature | Free | Starter ($19/user/mo) | Premium ($49/user/mo) | Enterprise (custom) |
|---|---|---|---|---|
| Recording | Yes | 8,000 min audio | Unlimited audio + video | Unlimited |
| Transcription | Yes | 2,000 min/mo | Unlimited | Unlimited |
| Smart Call Summary | Yes | Yes | Yes | Yes |
| Smart Follow-Up | Yes | Yes | Yes + custom formats | Yes |
| CRM summary sync | - | Yes | Yes | Yes |
| Smart Call Scoring | - | - | Yes (MEDDIC/BANT/SPIN/GAP) | Yes |
| Auto-capture CRM fields | - | - | Yes (custom fields) | Yes |
| Deal dashboard + forecasting | - | - | Yes | Yes |
| Gen AI Search | - | - | Add-on credits | Included |
| Gen AI Reports | - | - | Add-on credits | Included |
| API access | - | - | - | Yes |
| In-house deployment | - | - | - | Yes (GCP/AWS/Azure) |
| User limit | - | Up to 3 users | No minimum | Custom |

**Billing**: Annual ($19/$49) or Quarterly ($24/$59). 14-day free trial, no CC required. Free plan available after trial — recordings accessible for 1 year. 7-day refund window. Startup discounts available (help@getrafiki.ai).

**Languages**: 55-60+ languages for transcription and analysis.

**Apps**: iOS, Android, Windows, macOS, web.

## Integrations

| Integration | Type | Direction | Notes |
|---|---|---|---|
| Salesforce | Native CRM | Bidirectional | Summary sync (Starter+), field auto-capture (Premium+) |
| HubSpot | Native CRM | Bidirectional | Summary sync (Starter+), field auto-capture (Premium+) |
| Zoho CRM | Native CRM | Bidirectional | Summary sync (Starter+), field auto-capture (Premium+) |
| Pipedrive | Native CRM | Bidirectional | Summary sync (Starter+), field auto-capture (Premium+) |
| Freshworks | Native CRM | Write | Summary sync |
| Monday.com | Native CRM | Write | Summary sync |
| Zoom | Meeting platform | Read | Auto-join and record |
| Google Meet | Meeting platform | Read | Auto-join and record |
| Microsoft Teams | Meeting platform | Read | Auto-join and record |
| Aircall | Dialer | Read | Record phone calls |
| OpenPhone | Dialer | Read | Record phone calls |
| Slack | Communication | Write | Notifications, summaries |
| Salesloft | Sales engagement | Read/Write | Marketplace partner |
| Google Calendar | Calendar | Read | Auto-detect meetings |
| Outlook Calendar | Calendar | Read | Auto-detect meetings |

**No public API.** API is Enterprise-only for internal/BI applications. No webhook support documented for non-Enterprise plans.

**No MCP server.**

**No Zapier/Make integration documented** — automation requires Enterprise API or native integrations.

## Data model

Rafiki's data model is not publicly documented (no public API). Based on the product UI and help center:

```json
<!-- Constructed from product documentation — verify against live platform -->
{
  "meeting": {
    "id": "string",
    "title": "string",
    "date": "ISO-8601",
    "duration_minutes": 45,
    "platform": "zoom | google_meet | teams | phone",
    "participants": [
      { "name": "string", "email": "string", "role": "host | attendee" }
    ],
    "language": "en",
    "recording_url": "string",
    "transcript": [
      { "speaker": "string", "timestamp_ms": 0, "text": "string" }
    ],
    "summary": "string",
    "action_items": ["string"],
    "topics": ["string"],
    "objections": ["string"],
    "questions": ["string"]
  },
  "score": {
    "framework": "MEDDIC | BANT | SPIN | GAP | custom",
    "total_score": 85,
    "criteria": [
      { "name": "Metrics", "score": 4, "max": 5, "evidence": "string" }
    ]
  },
  "deal": {
    "crm_id": "string",
    "stage": "string",
    "health": "at_risk | on_track | strong",
    "signals": ["string"]
  }
}
```

## Quick-start recipes

### Recipe 1: Connect Rafiki to HubSpot and auto-sync call data

**Trigger**: New Rafiki account, want CRM sync
**Steps**:
1. Go to Rafiki Settings → Integrations → CRM
2. Select HubSpot, authenticate with OAuth
3. Map Rafiki fields to HubSpot contact/deal properties
4. Enable auto-sync for call summaries (Starter+) and custom fields (Premium+)
5. Make a test call and verify data appears on the HubSpot contact timeline

**Gotchas**:
- Custom field auto-capture (MEDDIC scores, etc.) requires Premium
- HubSpot custom properties must exist before Rafiki can write to them — create them in HubSpot first
- Sync may take a few minutes after call ends — not instant

### Recipe 2: Set up MEDDIC scoring for your team

**Trigger**: Sales manager wanting structured call scoring
**Steps**:
1. Go to Rafiki Settings → Call Scoring (requires Premium)
2. Select MEDDIC as the framework
3. Customize criteria weights — e.g., increase weight on "Economic Buyer" if that's your team's gap
4. Enable auto-scoring for all new calls
5. Review the Coaching dashboard for team-wide scoring trends
6. After 20+ scored calls, review accuracy and adjust criteria

**Gotchas**:
- Generic MEDDIC criteria may not match your process — customize early
- Scoring is based on what's discussed on the call — if reps confirm MEDDIC elements off-call, scores will look low
- Review outlier scores manually to calibrate AI accuracy

### Recipe 3: Use Ask Rafiki to find competitive intelligence across calls

**Trigger**: Want to understand what competitors are being mentioned
**Steps**:
1. Go to Ask Rafiki (Premium, uses add-on credits)
2. Query: "Which competitors are mentioned most frequently?"
3. Query: "What objections come up when [Competitor X] is mentioned?"
4. Query: "Which deals mentioned [Competitor X] and are still open?"
5. Use insights to build battlecards and update competitive positioning

**Gotchas**:
- Uses add-on credits — budget queries carefully
- Results are only as good as transcript quality — verify with call recordings for critical competitive intel

## Integration patterns

### CRM sync architecture
Rafiki's CRM sync is fully managed — no custom webhook or API integration needed (or possible without Enterprise). The native integration handles:
- **Call metadata** → CRM activity/timeline (all plans with CRM integration)
- **AI summaries** → CRM notes (Starter+)
- **Methodology scores** → CRM custom fields (Premium+)
- **Deal signals** → CRM opportunity updates (Premium+)

**Conflict resolution**: Rafiki writes to CRM fields — it doesn't read. If CRM fields are manually updated after Rafiki writes, the manual value persists until the next call triggers a new write.

### Enterprise API patterns
API is Enterprise-only and not publicly documented. For Enterprise customers:
- API access for internal applications and BI tools
- Contact sales@getrafiki.ai for documentation
- In-house deployment options: GCP, AWS, Azure

### Workarounds for non-Enterprise plans
- **Export**: Use Rafiki's built-in export features (if available) for manual data extraction
- **Slack notifications**: Push call summaries to Slack channels for downstream automation
- **CRM automation**: Use CRM-side automation (HubSpot Workflows, Salesforce Flows) triggered by Rafiki's CRM writes to fan out data to other systems
