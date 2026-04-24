# ExecVision (Mediafly Coach360) Platform Reference

## Overview

ExecVision is a conversation intelligence platform focused on driving behavior change through call analysis, coaching workflows, and performance management. Founded in 2018, acquired by Mediafly in 2022, and rebranded as Coach360 within Mediafly's Revenue360 suite. Targets sales teams, customer experience departments, and contact centers — primarily mid-market to enterprise. Differentiator: coaching-first approach — the platform is built around translating call insights into structured coaching plans, not just surfacing analytics.

## Capabilities & automation surface

| Module | What it does | Automation |
|---|---|---|
| **Call recording & ingestion** | Captures calls from 38+ dialers/telephony systems and 9 web conferencing platforms. Supports file upload from AWS S3, Box, Dropbox, Google Drive. | API-accessible (ingestion) |
| **Transcription** | Automatic speech-to-text for ingested calls | API-accessible |
| **Conversation intelligence** | Keyword/phrase detection, talk ratio, sentiment analysis, topic extraction | API-accessible (read) |
| **Smart alerts** | Configurable alerts for coachable moments, conversation activity, keywords, account/opportunity events. Real-time or trend-based. | UI-only configuration, API-accessible (read) |
| **Performance dashboards** | Rep self-review, team comparisons, activity metrics vs. team averages | API-accessible (read) |
| **Coaching plans** | AI-recommended coaching plans based on identified performance gaps. Managers create individualized plans. | UI-only |
| **Conversation library** | Searchable repository of call clips for onboarding, best practices, peer learning | UI-only |
| **Scorecards** | Custom scoring criteria for call quality evaluation | UI-only |
| **QA & compliance** | Quality assurance scoring across interactions, compliance monitoring | UI-only |
| **Security & privacy** | SOC 2 Type II, GDPR compliant, SSO/SAML, role-based access | UI-only |

## Pricing, limits & plan gates

**Current status**: ExecVision is no longer sold standalone — it's Coach360 inside Mediafly's Revenue360 suite. No public pricing.

| Detail | What's known |
|---|---|
| Historical pricing | ~$100-185/user/month (pre-acquisition) |
| Current packaging | Bundled in Mediafly Revenue360 suite |
| Contract structure | Annual, custom quotes, contact sales |
| Free tier | None |
| Trial | Demo available on request |
| API access | Enterprise-gated — request during contract negotiation |

**Plan-gated features**: API access requires enterprise agreement. Advanced analytics and coaching modules may be tiered within Revenue360 — confirm with Mediafly sales.

## Integrations

ExecVision has 59+ native integrations across four categories:

### Dialers / Telephony (38)
8x8, Aircall, Amazon Connect, Avaya, Cisco, ConnectAndSell, Dialpad, DialSource, Fenero, Five9, FluentStream, FrontSpin, Fuze, Genesys, Groove, HostMyCalls, HubSpot, InsideSales.com (XANT), Interactive Intelligence, Kixie, Koncert, Mitel, Natterbox, NewVoiceMedia, NICE inContact, Outreach, RingCentral, RingDNA (Revenue.io), Salesforce, SalesLoft, Salesvue, ShoreTel, TalkDesk, Truly, Twilio, Velocify, Verint, XANT

### Web conferencing (9)
Amazon Chime, BlueJeans, ClearSlide, GoToMeeting, Join.Me, Microsoft Teams, UberConference, WebEx, Zoom

### CRMs (6)
HubSpot CRM, Microsoft Dynamics, Pipedrive, Salesforce, SAP, Home-grown (custom)

### File management (4)
Amazon Web Services (S3), Box, Dropbox, Google Drive

### Third-party recording (2)
Orecx, RedBox

**Data flow**: ExecVision primarily reads recordings from source systems (dialers, conferencing, storage) and writes coaching insights, scores, and alerts back to the platform. CRM integration is bidirectional — pull opportunity/account context, push call metadata and coaching outcomes.

**iPaaS**: No documented Zapier or Make support. Integration is primarily through native connectors and API.

## Data model

<!-- Constructed from docs — verify against live API -->

### Call / Interaction
```json
{
  "id": "call_abc123",
  "recording_source": "zoom",
  "participants": [
    {"name": "Jane Smith", "role": "rep", "email": "jane@company.com"},
    {"name": "John Doe", "role": "prospect", "email": "john@prospect.com"}
  ],
  "duration_seconds": 1847,
  "transcription_status": "completed",
  "talk_ratio": {"rep": 0.42, "prospect": 0.58},
  "sentiment": "positive",
  "keywords_detected": ["pricing", "implementation", "timeline"],
  "smart_alerts": ["coaching_moment_discovery"],
  "scorecard_score": 78,
  "crm_opportunity_id": "opp_xyz789",
  "created_at": "2026-04-20T14:30:00Z"
}
```

### Coaching Plan
```json
{
  "id": "plan_def456",
  "agent_id": "user_abc",
  "manager_id": "user_mgr",
  "status": "in_progress",
  "gaps_identified": ["low_discovery_question_count", "weak_objection_handling"],
  "action_items": [
    {"task": "Review 3 winning discovery calls from library", "due": "2026-04-25"},
    {"task": "Practice objection handling with peer role-play", "due": "2026-04-28"}
  ],
  "linked_calls": ["call_abc123", "call_abc456"],
  "created_at": "2026-04-21T09:00:00Z"
}
```

### Smart Alert
```json
{
  "id": "alert_ghi789",
  "type": "keyword_detected",
  "trigger": "competitor_mention",
  "keywords": ["Gong", "Chorus", "alternative"],
  "call_id": "call_abc123",
  "timestamp_in_call": 342,
  "severity": "medium",
  "fired_at": "2026-04-20T14:35:42Z"
}
```

## Quick-start recipes

### Recipe 1: Set up call ingestion from Zoom + Salesforce

**Trigger**: New team deploying ExecVision, needs Zoom recordings flowing in with CRM context.

**Steps**:
1. Admin → Integrations → Connect Zoom (OAuth, requires Zoom admin)
2. Admin → Integrations → Connect Salesforce (OAuth, field mapping)
3. Map Salesforce fields: Opportunity Name, Stage, Owner → ExecVision call metadata
4. Enable auto-recording in Zoom for all team meetings
5. Verify first call appears within 1-2 hours of recording completion

**Gotchas**:
- Zoom cloud recording must be enabled at the account level, not just the user level
- Salesforce field mapping errors fail silently — verify with a test call
- Historical recordings (pre-integration) won't auto-import — use file upload via S3/Box

### Recipe 2: Build a coaching plan from performance gaps

**Trigger**: Manager notices a rep's close rate dropped — wants data-driven coaching.

**Steps**:
1. Performance Dashboard → Select rep → Review last 30 days of call activity
2. Identify patterns: talk ratio, question count, keyword usage, scorecard scores
3. Compare against team averages — find the gap (e.g., discovery questions 40% below team avg)
4. Create Coaching Plan → Link 2-3 specific calls showing the gap
5. Add action items: review winning calls from library, practice with peer, check-in in 1 week
6. Set Smart Alert for the gap criteria to track improvement on future calls

**Gotchas**:
- Don't create coaching plans from a single bad call — look for patterns across 5+ calls
- Link specific call clips (with timestamps) so the rep sees exactly what to improve
- Set measurable targets in the plan — "improve discovery question count" is vague, "ask 4+ open-ended questions per discovery call" is actionable

### Recipe 3: Build an onboarding conversation library

**Trigger**: New reps joining — need a library of best-practice call examples.

**Steps**:
1. Identify top 5 call types new reps need to master (discovery, demo, objection handling, negotiation, close)
2. For each type, find 2-3 exemplary calls using search + scorecard scores
3. Create clips highlighting the key moments (not full 45-minute calls)
4. Organize into a playlist by call type
5. Add to onboarding coaching plan as required viewing with self-review questions

**Gotchas**:
- Keep clips under 5 minutes — new reps won't watch 30-minute recordings
- Include context notes on each clip: what to watch for, why this is a good example
- Update the library quarterly — stale examples lose credibility

## Integration patterns

### CRM sync
- **Direction**: Bidirectional — pull opportunity/account context from CRM, push call metadata and coaching outcomes back
- **Conflict resolution**: CRM is source of truth for deal data; ExecVision is source of truth for call analytics and coaching data
- **Sync frequency**: Near-real-time for new calls; batch for historical data
- **Field mapping**: Configured in admin → required fields: Opportunity ID, Stage, Owner. Optional: custom fields for coaching scores

### Call ingestion
- **Pattern**: ExecVision pulls recordings from connected sources (dialers, conferencing, file storage)
- **Processing time**: Typically 1-2 hours from recording completion to transcribed, analyzed, and searchable call
- **Retry behavior**: Failed ingestions retry automatically; check Admin → Ingestion Status for errors
- **Format**: Most common audio formats supported (WAV, MP3, M4A). Video files accepted from conferencing platforms.
