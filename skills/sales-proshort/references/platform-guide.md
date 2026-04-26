# Proshort Platform Reference

## Overview

Proshort is an enablement-first revenue intelligence platform that converts call insights into contextual coaching moments. Founded 2022, headquartered in Cupertino CA with engineering in Bangalore. 35 employees, $8M seed funding, 100+ revenue teams. Positioned as a Gong alternative that emphasizes coaching and rep development over pure analytics.

## Capabilities & automation surface

| Capability | Description | Surface |
|---|---|---|
| Call Recording & Transcription | Records Zoom, Google Meet, Teams calls with AI transcription | UI + native CRM sync |
| AI Coaching (In-Call Cues) | Real-time objection handling prompts, compliance alerts during live calls | UI-only |
| AI Prep Cards | Pre-call recommended assets based on deal data and upcoming meetings | UI-only |
| AI Roleplay | Practice environment with scenarios built from real customer conversations, scored performance | UI-only |
| Auto CRM Sync | Pushes summaries, action items, coaching insights to Salesforce/HubSpot/Zoho (100% fill rate claimed) | Native CRM integration |
| Deal Risk Alerts | Slack notifications for stalled deals, missing stakeholders, at-risk pipeline | Slack integration |
| Deal Agents | Automated guidance before, during, and after customer interactions | UI-only |
| Skill Intelligence Dashboard | Rep-level performance scoring, skill gap analysis, coaching recommendations | UI-only |
| Snippet Library | Annotated call clips organized by persona, deal stage, competitor | UI-only |
| Auto Follow-Up Emails | AI-generated follow-up email drafts from call content | UI-only |
| Behavior Tracking | Analyzes calls, emails, CRM signals to identify winning patterns | UI-only |

**No public API. No webhooks. No MCP server.** All automation is through native integrations only. This is the key limitation — you cannot build custom integrations, pipe data to a warehouse, or programmatically access Proshort data.

## Pricing, limits & plan gates

<!-- Pricing from homepage — pricing page returns 404. Verify with Proshort sales. -->

| Plan | Price | Key inclusions |
|---|---|---|
| Professional | $75/user/mo | Core features: recording, transcription, AI coaching, CRM sync, Deal Agents, Roleplay, Slack alerts |
| Enterprise | Custom | Everything in Professional + dedicated support, 99.9% SLA, custom onboarding |

- No free tier documented
- No free trial documented (demo required via sales call)
- No platform fees or hidden costs (positioned against Gong's platform fee model)
- No per-seat minimums documented for Professional

**Competitive pricing context:**
| Platform | Price | Coaching | API |
|---|---|---|---|
| Rafiki | $19-49/user/mo | Scoring + role-play (Premium) | Enterprise-only |
| Outdoo | ~$55-100/user/mo | AI roleplay + scoring | Enterprise-only |
| Attention | ~$59/user/mo | Battlecards + scorecards | REST v2 |
| Proshort | $75/user/mo | AI Roleplay + in-call cues + Deal Agents | None |
| Gong | ~$100-133/user/mo | Coaching scorecards + call library | REST + webhooks |

## Integrations

| Category | Platforms | Data flow |
|---|---|---|
| Video conferencing | Zoom, Google Meet, Microsoft Teams | Inbound (recording) |
| CRM | Salesforce, HubSpot, Zoho | Bidirectional (sync summaries, action items, coaching insights to deal/opportunity records) |
| Email | Gmail, Outlook | Inbound (email signal tracking for behavior analysis) |
| Calendar | Google Calendar, Outlook Calendar | Inbound (meeting detection and auto-join) |
| Notifications | Slack | Outbound (deal risk alerts, follow-up reminders) |
| CI platform | Gong | Inbound (layer Proshort coaching on top of existing Gong CI) |

**No Zapier/Make/n8n connectors.** No iPaaS surface documented.

## Data model

No public API means no documented data model. Based on product description, the key objects are:

```json
// Meeting/Call (inferred from product behavior)
{
  "meeting_id": "string",
  "platform": "zoom | meet | teams",
  "participants": ["string"],
  "started_at": "ISO 8601",
  "duration_s": 1800,
  "transcript": "string (full text)",
  "summary": "string (AI-generated)",
  "action_items": ["string"],
  "coaching_insights": {
    "objection_handling_score": 0.85,
    "talk_ratio": 0.42,
    "questions_asked": 7
  }
}
<!-- Constructed from product description — no public API to verify -->
```

```json
// Deal Risk Alert (inferred from Slack integration)
{
  "deal_id": "string",
  "alert_type": "stalled | missing_stakeholder | at_risk",
  "message": "string",
  "deal_name": "string",
  "days_inactive": 14,
  "recommended_action": "string"
}
<!-- Constructed from product description — no public API to verify -->
```

## Quick-start recipes

Since Proshort has no public API, these recipes cover configuration workflows rather than code.

### Recipe 1: Set up Salesforce auto-sync

**Trigger**: After Proshort account setup
**Steps**:
1. Navigate to Proshort Settings → Integrations → Salesforce
2. Authorize via OAuth — grant read/write access to Opportunities, Contacts, Activities
3. Configure field mapping:
   - Map `summary` → Salesforce Activity Description
   - Map `action_items` → Salesforce Task records
   - Map `coaching_insights` → Custom fields (create custom fields first in SF)
4. Enable auto-sync on call completion
5. Test with a sample meeting — verify data appears on the Opportunity record

**Gotchas**: Custom field creation in Salesforce must happen before mapping. If fields don't exist, sync silently fails. No API to debug — check Proshort dashboard sync logs.

### Recipe 2: Configure AI Roleplay for onboarding

**Trigger**: New rep joins the team
**Steps**:
1. Build the snippet library first — tag 20+ top-performer calls by persona and deal stage
2. Navigate to Roleplay → Create Scenario
3. Select source calls that represent common objections and competitive situations
4. Set scoring criteria (talk ratio, question quality, objection handling)
5. Assign scenarios to new reps with target scores
6. Review Skill Intelligence Dashboard weekly for progress

**Gotchas**: Roleplay quality depends directly on snippet library quality. Start with competitive win calls — they produce the most relevant objection scenarios.

### Recipe 3: Set up Deal Risk Alerts in Slack

**Trigger**: Deals stalling in pipeline
**Steps**:
1. Navigate to Settings → Integrations → Slack
2. Authorize Proshort Slack app
3. Choose channel(s) for alerts (e.g., #deal-alerts, #sales-team)
4. Configure alert thresholds:
   - Days without activity (e.g., 7 days for SMB, 14 for Enterprise)
   - Missing stakeholder alerts (e.g., no economic buyer contact after discovery)
   - Budget/timeline signals from call analysis
5. Enable Deal Agents for automated next-step suggestions alongside alerts

**Gotchas**: Start with conservative thresholds — too many alerts cause alert fatigue. Tune weekly based on pipeline velocity.

## Integration patterns

### CRM sync architecture

Proshort's CRM sync is native and opaque — no API or webhook configuration required, but also no customization beyond field mapping in the UI.

**Sync behavior (from product description):**
- Syncs on call completion (not real-time during calls)
- Pushes to the matched Opportunity/Deal record based on participant email matching
- Auto-creates Activity/Task records for action items
- 100% field fill rate claimed — all mapped fields get populated

**Conflict resolution:** Not documented. If a CRM field already has data, behavior is unknown — test before rolling out to avoid overwriting manual entries.

**Limitations:**
- No bulk export or backfill capability documented
- No way to filter which calls sync (e.g., exclude internal meetings)
- No audit log for sync failures accessible via API

### Coaching data flow

```
Call Recording → AI Transcription → Coaching Insights
                                         ↓
                              Skill Intelligence Dashboard
                                         ↓
                              AI Roleplay Scenarios (fed by call library)
                                         ↓
                              Deal Risk Alerts → Slack
                                         ↓
                              CRM Auto-Sync → Salesforce/HubSpot/Zoho
```

## Security & compliance

| Certification | Status |
|---|---|
| SOC 2 Type 2 | Completed (most recent April 2025) |
| ISO 27001 | Completed (most recent April 2025) |
| GDPR | Compliant |
| HIPAA | Compliant |

- Hosted on Google Cloud Platform
- AES-256 encryption at rest (Google-managed keys, auto-rotated)
- Encryption in transit via Google's network-layer encryption
- No on-premises deployment option (cloud-only)

## Company details

- **Founded**: 2022
- **HQ**: Cupertino, California
- **Engineering**: Bangalore, India
- **Employees**: ~35
- **Funding**: $8M seed (2022)
- **CEO**: Gaurav Mishra (25 years sales leadership, ex-Salesforce/Oracle/PeopleSoft)
- **Customers**: 100+ revenue teams (case studies: RateGain, Increff, Aviz Networks)
