---
name: sales-salesloft
description: "Salesloft platform help — config, Rhythm, Conversations, Deals, Forecast, Analytics, Drift, integrations, admin, API. Use when asking 'how do I do X in Salesloft', configuring Salesloft settings, understanding Rhythm signals, setting up Analytics dashboards, managing Drift chatbots, or troubleshooting Salesloft integrations. Do NOT use for building cadences (use /sales-cadence), reviewing calls (use /sales-call-review), inspecting deals (use /sales-deal-inspect), or forecasting (use /sales-forecast)."
argument-hint: "[describe what you need help with in Salesloft]"
license: MIT
version: 1.0.0
tags: [sales, outbound, engagement, crm, platform]
github: "https://github.com/SalesLoft"
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

### Salesloft data model

Core entities in the Salesloft platform — understand these to navigate the UI, build reports, and work with the API:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Person** | An individual prospect or contact | Belongs to an Account, can be enrolled in Cadences |
| **Account** | A company or organization | Has many People, can have Cadences targeting it |
| **Cadence** | A multi-step outbound sequence | Has Cadence Memberships (enrollments) |
| **Cadence Membership** | A Person's enrollment in a Cadence | Links Person to Cadence with step/status tracking |
| **User** | A Salesloft user (rep, manager, admin) | Owns People, Accounts, Cadences |
| **Contact** | A person record synced from CRM | Maps to Person in Salesloft |
| **Email** | A sent email tracked in Salesloft | Linked to Person, Cadence step, and User |
| **Call** | A logged or recorded call | Linked to Person and User, feeds Conversations |
| **Note** | A note attached to a Person or Account | Created by User |
| **Team Meeting** | A scheduled meeting | Linked to People and Users |
| **Do Not Contact** | An opt-out record | Blocks a Person from receiving outreach |

### Integrations & API
- **Native integrations**: Salesforce, HubSpot, Slack, LinkedIn Sales Navigator, Drift, calendar sync
- **API basics**: REST API, authentication (OAuth 2.0), rate limits, common endpoints
- **Webhooks**: Available events, payload structure, retry logic
- **Common use cases**: CRM sync customization, custom reporting, workflow automation, data enrichment

### Salesloft API reference

For detailed API documentation including endpoints, rate limits, webhooks, and automation patterns, consult `references/api-reference.md`.

**Quick reference**: Base URL `https://api.salesloft.com/v2`, OAuth 2.0 auth, 600 req/min rate limit. Full docs: https://developers.salesloft.com/

### Using Membrane for direct Salesloft access

If you want Claude to interact with Salesloft directly (list people, get cadences, create records), install the Membrane Salesloft skill:

```bash
npx skills add membranedev/application-skills --skills salesloft
```

This gives Claude hands-on API access through pre-built actions with authentication and error handling built in. Use it when you need to:
- Pull live data from Salesloft (people, accounts, cadences, emails, calls)
- Create or update records without leaving the terminal
- Automate workflows that touch Salesloft data

The Membrane skill handles auth, pagination, and rate limits automatically — prefer it over raw API calls when possible.

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
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Gotchas

- **Don't confuse Salesloft "Cadence" with a generic sales cadence concept.** Salesloft Cadence is a specific product feature with its own data model (Cadence Memberships, Steps, etc.). When the user says "cadence," clarify whether they mean the Salesloft feature or the general concept of a multi-touch sequence.
- **Don't recommend deprecated API v1 endpoints.** The current Salesloft API is v2 (`api.salesloft.com/v2`). Claude defaults to v1 patterns from older training data — always use v2.
- **Don't assume all Salesloft orgs have Drift enabled.** Drift is a separate product that was acquired and integrated. Many Salesloft customers don't have it. Ask before referencing Drift features.
- **Don't confuse Salesloft Deals with CRM Opportunities.** Deals in Salesloft are synced *from* the CRM — they are not the source of truth. Changes should usually be made in the CRM, not in Salesloft Deals directly.
- **Don't suggest Rhythm configurations that don't exist.** Signal weighting and play creation have specific options in the UI — don't invent settings or suggest configurations that aren't available in the current product.

## Examples

### Example 1: Rhythm configuration
**User says**: "How do I set up Rhythm signals to prioritize inbound leads?"
**Skill does**:
1. Identifies this as a Rhythm configuration question
2. Provides step-by-step instructions for signal weighting in Settings > Rhythm
3. Recommends best practices for inbound vs. outbound signal priority
**Result**: User has configured Rhythm signals with recommended weighting

### Example 2: CRM sync troubleshooting
**User says**: "My Salesloft-Salesforce sync keeps creating duplicates"
**Skill does**:
1. Identifies this as an Admin/CRM sync issue
2. Walks through sync settings, field mapping, and conflict resolution
3. Identifies common duplicate causes and fixes
**Result**: User has diagnosed and resolved the duplicate creation issue

## Troubleshooting

### Salesloft MCP not connecting
If using the Membrane Salesloft skill and connections fail:
1. Verify your OAuth token is valid and not expired
2. Check API rate limits — 600 requests/minute per user
3. Ensure the Membrane CLI is authenticated: `membrane login --tenant`

### CRM sync conflicts
**Symptom**: Records overwritten or duplicated between Salesloft and CRM
**Cause**: Bidirectional sync with conflicting field mappings
**Solution**: Review Settings > CRM Sync > Field Mapping. Set conflict resolution to "CRM wins" for fields your CRM owns, "Salesloft wins" for activity data.

### Rhythm signals not appearing
**Symptom**: Focus zone is empty despite active cadences and deals
**Cause**: Signal sources not connected or signal weights set to zero
**Solution**: Check Settings > Rhythm > Signal Sources. Ensure Cadence, Deals, and email tracking are enabled.
