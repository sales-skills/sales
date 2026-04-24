# MaxIQ Platform Reference

## Overview

MaxIQ (Gyaan AI Inc.) is an AI-native revenue intelligence platform that unifies conversation intelligence (EchoIQ), pipeline visibility (InspectIQ), revenue forecasting (ForecastIQ), and customer success (SuccessIQ, launching soon) into one system. Founded 2022, headquartered in Pune, India. Backed by Dell Technologies Capital and Intel Capital ($7.8M seed, March 2025). Differentiated by usage-based pricing (not per-seat) and revenue-context CI that ties every conversation to deal, account, and forecast data.

## Capabilities & automation surface

### EchoIQ — Conversation Intelligence

| Capability | Automation surface |
|---|---|
| Call recording & live transcription (Zoom, Teams) | Webhook-accessible (conversation events) |
| AI NoteTaker — links conversations to deals/accounts/forecasts | UI + CRM auto-sync |
| AI Summarizer — one-page briefs with decisions, risks, next steps | UI + Slack sync |
| AI Coach — reviews calls against sales methodology, coaching gaps | UI-only |
| AI Radar — keyword, competitor, and theme monitoring with alerts | UI + Slack alerts |
| AI Taskmaster — converts conversation moments into tasks with owners/deadlines | UI + CRM sync |
| AI Watchdog — monitors pipeline for stalls, slippage, single-threading | UI + alerts |
| AI Forecaster — adjusts win likelihood in real-time from call signals | UI + CRM sync |
| AI Revenue Planner — aggregates deal signals into forecasts | UI-only |
| AI Deal Mapper — maps buying groups, engagement heat | UI-only |
| Pre-meeting briefs with deal history and AI-generated talking points | UI-only |
| Post-meeting follow-up email generation | UI-only |
| Search Copilot — cross-conversation search across calls, emails, notes | UI-only |

### InspectIQ — Pipeline Visibility

| Capability | Automation surface |
|---|---|
| Real-time pipeline tracking and change detection | UI + Salesforce sync |
| Deal scoring and activity insights | UI-only |
| Gap, risk, and stall identification | UI + alerts |

### ForecastIQ — Revenue Forecasting

| Capability | Automation surface |
|---|---|
| Signal-based (not stage-based) forecasting | UI-only |
| AI-driven revenue predictions | UI + Salesforce sync |
| Risk identification and customizable GTM motions | UI-only |

### SuccessIQ — Customer Success (launching soon)

| Capability | Automation surface |
|---|---|
| Onboarding, adoption, and renewal workflows | UI-only |
| Churn prediction | UI-only |
| Sales-to-CS handoff with full journey visibility | UI-only |

## Pricing, limits & plan gates

**Pricing model**: Usage-based — pay per conversation captured and intelligence delivered, not per seat. No public pricing tiers.

| Plan | What's included | Notes |
|---|---|---|
| Startup Program | Free for 1 year | Available to qualifying startups |
| Standard | Usage-based pricing | Contact sales for quote |
| Enterprise | Custom pricing + SLA | Custom integrations, dedicated support |

**Key pricing notes:**
- No per-seat licensing — adoption rates reported >95% (vs industry 60-70%)
- Usage-based means costs scale with meeting volume — monitor usage dashboard
- EchoIQ freemium: 30 days or 100 hours free (per MaxIQ blog)
- InspectIQ and ForecastIQ availability may depend on plan — verify during evaluation

## Integrations

| Integration | Direction | What syncs |
|---|---|---|
| **Salesforce** | Bi-directional | Deals, contacts, activity, pipeline, forecast data |
| **HubSpot** | Bi-directional | Contacts, deals, activity (confirm feature parity) |
| **Slack** | One-way (push) | Deal updates, alerts, AI summaries, meeting briefs |
| **Zoom** | Ingest | Call recording and transcription |
| **Microsoft Teams** | Ingest | Call recording and transcription |
| **Google Calendar** | Sync | Meeting scheduling, auto-join triggers |
| **Gmail** | Sync | Email engagement tracking, follow-ups |
| **Google Drive** | Sync | Document auto-sync for deal assets |
| **Office 365** | Sync | Email, calendar, contacts |
| **Zapier** | Bi-directional | Custom workflows via triggers/actions |
| **Webhooks** | Push | Custom event notifications |
| **Custom APIs** | Varies | Available through enterprise arrangement |

## Data model

MaxIQ's data model centers on the "Revenue Journey" — connecting conversations to deals, accounts, and forecasts.

### Key objects

```json
// Conversation (EchoIQ)
{
  "conversation_id": "conv_abc123",
  "type": "meeting",          // meeting | email | slack
  "platform": "zoom",         // zoom | teams
  "participants": [
    {"name": "Jane Smith", "role": "rep", "email": "jane@company.com"},
    {"name": "Bob Chen", "role": "prospect", "title": "VP Engineering"}
  ],
  "deal_id": "deal_xyz789",   // auto-linked to CRM opportunity
  "account_id": "acct_456",
  "transcript": "...",
  "ai_summary": {
    "decisions": ["..."],
    "risks": ["..."],
    "next_steps": ["..."]
  },
  "ai_scores": {
    "methodology_alignment": 0.82,
    "risk_level": "medium",
    "win_likelihood_delta": -0.05
  },
  "tasks": [
    {"description": "Send pricing proposal", "owner": "jane@company.com", "deadline": "2026-04-28"}
  ],
  "keywords_detected": ["competitor_gong", "budget_concern"],
  "recorded_at": "2026-04-24T10:30:00Z"
}
```

<!-- Constructed from docs and marketing content — verify against live platform -->

```json
// Deal (InspectIQ)
{
  "deal_id": "deal_xyz789",
  "account": "Acme Corp",
  "stage": "Proposal",
  "amount": 150000,
  "close_date": "2026-06-30",
  "health_score": 72,
  "risk_signals": ["single_threaded", "budget_not_confirmed"],
  "conversation_count": 8,
  "last_activity": "2026-04-23T15:00:00Z",
  "forecast_category": "commit",
  "ai_win_likelihood": 0.68
}
```

<!-- Constructed from docs and marketing content — verify against live platform -->

## Quick-start recipes

### Recipe 1: Set up EchoIQ conversation capture

**Trigger**: New MaxIQ account, want to start recording sales calls

**Steps**:
1. Connect your calendar (Google Calendar or Office 365) in MaxIQ Settings → Integrations
2. Connect your meeting platform (Zoom and/or Teams) — authorize MaxIQ to join and record
3. Connect your CRM (Salesforce or HubSpot) — authorize bi-directional sync
4. Configure which meetings to capture: external only (recommended) or all meetings
5. Set up Slack integration for real-time deal updates and AI summaries

**Gotchas**:
- Zoom and Teams each require separate authorization
- Calendar sync must be active for auto-join to work
- Internal meetings will be captured unless explicitly excluded
- CRM field mapping requires initial configuration for custom fields

### Recipe 2: Configure AI Radar for competitor monitoring

**Trigger**: Sales team wants real-time alerts when competitors are mentioned on calls

**Steps**:
1. Navigate to EchoIQ → AI Radar configuration
2. Add competitor keywords (company names, product names, common nicknames)
3. Add theme keywords (budget concern, timeline shift, legal review, security audit)
4. Set alert routing: Slack channel, email, or in-app notification
5. Review and tune after 2 weeks — add keywords that surface in calls but weren't tracked

**Gotchas**:
- Start with 5-10 keywords, not 50 — too many creates noise
- Use variations (e.g., "Gong", "gong.io", "Gong Revenue Intelligence")
- AI Radar monitors across calls, emails, and Slack — not just meetings

### Recipe 3: Route deal signals to Slack via Zapier

**Trigger**: Revenue ops wants deal risk alerts in a dedicated Slack channel

Since MaxIQ doesn't have public API docs, use Zapier for automation:

1. In MaxIQ Settings → Integrations → Zapier, authenticate your MaxIQ account
2. Create a new Zap: Trigger = MaxIQ deal signal event
3. Add a Filter step: only proceed when risk_level = "high" or win_likelihood < 0.3
4. Action = Slack: Post to #deal-alerts channel with deal name, risk signal, and recommended action

**Gotchas**:
- Available Zapier triggers depend on your MaxIQ plan — verify during setup
- Webhook alternative: if Zapier triggers are limited, ask MaxIQ support about direct webhook endpoints for deal events
- Rate limits on Zapier side: 100 tasks/month on free tier

## Integration patterns

### CRM sync architecture

MaxIQ syncs conversation data to CRM in real-time:
- **Salesforce**: Bi-directional. Call summaries, AI-extracted MEDDIC fields, next steps, and deal signals write to opportunity records. Pipeline changes in Salesforce reflect in InspectIQ.
- **HubSpot**: Bi-directional. Activity logging, deal association. Feature parity with Salesforce integration not confirmed — verify during evaluation.
- **Conflict resolution**: MaxIQ's AI-generated data supplements CRM data, doesn't overwrite rep-entered fields (per default configuration). Admins can configure override rules.
- **Sync frequency**: Real-time for call summaries and tasks; batch for aggregate signals (pipeline health, forecast updates).

### Webhook patterns

MaxIQ supports webhooks for event notification. Available events and payload schemas are not publicly documented — request webhook documentation during contracting.

**Expected pattern** (based on similar CI platforms):
- Events: conversation processed, deal signal detected, task created, forecast updated
- Payload: JSON with event type, object data, and metadata
- Authentication: likely HMAC signature or shared secret — verify with MaxIQ

### Sales-to-CS handoff (SuccessIQ integration)

SuccessIQ (launching soon) will unify onboarding, adoption, and renewal workflows. The handoff pattern:
1. EchoIQ captures all pre-sale conversations
2. Deal closes in CRM → triggers handoff workflow
3. SuccessIQ receives full conversation history, deal context, and stakeholder map
4. CS team gets onboarding brief without re-asking discovery questions
