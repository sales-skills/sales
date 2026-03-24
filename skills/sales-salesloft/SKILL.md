---
name: sales-salesloft
description: "Salesloft platform help — config, Rhythm, Conversations, Deals, Forecast, Analytics, Drift, integrations, admin, API. Use when asking 'how do I do X in Salesloft', configuring Salesloft settings, understanding Rhythm signals, setting up Analytics dashboards, managing Drift chatbots, or troubleshooting Salesloft integrations."
argument-hint: "[describe what you need help with in Salesloft]"
---

# Salesloft Platform Help

Help the user with Salesloft platform questions — from configuration and Rhythm signals through Analytics dashboards, Drift chatbots, and integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Salesloft do you need help with?**
   - A) Cadence — multi-channel outbound sequences (route to `/sales-cadence`)
   - B) Rhythm — AI-prioritized daily workflow and signals
   - C) Conversations — call recording, transcription, coaching (route to `/sales-call-review` for call reviews)
   - D) Deals — pipeline visibility and deal management (route to `/sales-deal-inspect` for deal analysis)
   - E) Forecast — revenue forecasting and pipeline coverage (route to `/sales-forecast`)
   - F) Analytics — reporting, dashboards, team performance
   - G) Drift — chatbots, live chat, conversational marketing
   - H) Admin — user management, settings, permissions, SSO
   - I) Integrations — CRM sync, API, webhooks, third-party tools
   - J) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Admin / IT
   - E) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

Note: If the user needs one of the specialized skills (Cadence, call review, deal inspection, forecasting), route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Cadence/sequence building → `/sales-cadence`
- Call review/coaching → `/sales-call-review`
- Deal health/risk analysis → `/sales-deal-inspect`
- Revenue forecasting → `/sales-forecast`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Salesloft platform reference

Provide module-by-module guidance based on the user's area:

### Rhythm
- **What it is**: AI-powered workflow engine that prioritizes daily seller actions based on buyer signals
- **Key concepts**: Rhythm signals, plays, focus zone, signal prioritization, Rhythm sidebar
- **Common configs**: Signal weighting, play creation, automation rules, Rhythm integration with Cadence
- **Metrics**: Signal-to-action rate, tasks completed, pipeline influenced by Rhythm
- **Best practices**: Trust the AI prioritization, customize signal weights for your sales motion, review Rhythm analytics weekly

### Analytics
- **What it is**: Built-in reporting and dashboards for team and individual performance
- **Key concepts**: Standard reports, custom reports, dashboard builder, team analytics, activity metrics
- **Common reports**: Activity leaderboard, cadence performance, pipeline creation, conversion rates, call metrics
- **Common configs**: Custom report builder, scheduled reports, export settings, team vs. individual views
- **Best practices**: Set up weekly automated reports, track leading indicators (activities) not just lagging (revenue), benchmark reps against team averages

### Drift (Conversational Marketing)
- **What concepts**: Chatbots, playbooks, live chat, meeting scheduling, site visitor identification
- **Common configs**: Bot playbook builder, routing rules, meeting calendar integration, ABM targeting, Fastlane for qualified leads
- **Metrics**: Conversations started, meetings booked via chat, bot deflection rate, response time
- **Best practices**: Use ABM targeting for high-value accounts, keep bot flows under 4 steps, always offer human handoff, A/B test opening messages

### Admin & Settings
- **User management**: Roles, permissions, teams, hierarchies
- **CRM sync**: Salesforce/HubSpot sync settings, field mapping, conflict resolution, sync frequency
- **SSO**: SAML configuration, provisioning
- **Data management**: Import/export, duplicate management, data hygiene
- **Common issues**: Sync conflicts, permission errors, API rate limits

### Integrations & API
- **Native integrations**: Salesforce, HubSpot, Slack, LinkedIn Sales Navigator, Drift, calendar sync
- **API basics**: REST API, authentication (OAuth 2.0), rate limits, common endpoints
- **Webhooks**: Available events, payload structure, retry logic
- **Common use cases**: CRM sync customization, custom reporting, workflow automation, data enrichment

### Conversations
- **What it is**: Call recording, transcription, and conversation intelligence
- **Key concepts**: Call recording, AI transcription, talk-to-listen ratio, topic detection, coaching playlists
- **Common configs**: Recording consent settings, transcription language, keyword tracking, coaching playlist setup
- **Best practices**: Create coaching playlists by topic/methodology, review calls with highest/lowest scores, use topic detection for competitive intel

### Deals
- **What it is**: Pipeline visibility and deal management with CRM sync
- **Key concepts**: Deal board, deal health scores, pipeline views, deal gaps, activity timeline
- **Common configs**: Deal stage mapping, health score criteria, pipeline views, required fields per stage
- **Best practices**: Review deal board weekly, address gaps flagged by health scores, ensure CRM sync is bidirectional

### Forecast
- **What it is**: Revenue forecasting with rollup, submission, and AI-assisted predictions
- **Key concepts**: Forecast categories (commit/best case/pipeline/omit), rollup hierarchy, submission workflow, AI forecast
- **Common configs**: Category definitions, submission cadence, rollup rules, override permissions
- **Best practices**: Submit forecasts weekly, use AI forecast as a benchmark, document override reasons

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Salesloft
2. **Configuration recommendations** — specific settings to change, with where to find them in the Salesloft UI (Settings > [section] > [page])
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked as expected

## Step 5 — Related skills

Point to related skills based on what they asked about:
- `/sales-cadence` — Design and optimize multi-channel outbound cadences
- `/sales-call-review` — Review sales calls and extract coaching insights
- `/sales-deal-inspect` — Inspect individual deal health and identify risks
- `/sales-forecast` — Build and validate revenue forecasts
- `/sales-outreach` — General outreach message writing (not Salesloft-specific)
- `/sales-pipeline` — Portfolio-level pipeline management and deal prioritization
