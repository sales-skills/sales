---
name: sales-dialpad
description: "Dialpad platform help — AI-native UCaaS + CCaaS with DialpadGPT, AI Recaps, AI Coaching Hub, contact center, voice, video, SMS, and 70+ integrations. Use when setting up Dialpad for a sales or support team, calls keep dropping or audio quality is bad, CRM integration not syncing calls or texts to Salesforce or HubSpot, AI transcription missing words or struggling with accents, configuring Dialpad contact center IVR or call routing, choosing between Dialpad Standard vs Pro vs Enterprise, comparing Dialpad to RingCentral or Nextiva or Zoom Phone, or debugging the Dialpad Python SDK or Stats API. Do NOT use for comparing CCaaS platforms generally (use /sales-ccaas-selection) or picking a note-taker for a sales team (use /sales-note-taker)."
argument-hint: "[describe your Dialpad question — setup, call quality, CRM sync, pricing, API, etc.]"
license: MIT
version: 1.0.0
tags: [sales, ucaas, ccaas, contact-center, voip, platform]
github: "https://github.com/dialpad"
---

# Dialpad Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Dialpad or connecting CRM (Salesforce, HubSpot, Zendesk)
   - B) Call quality issues (dropped calls, audio problems, mobile reliability)
   - C) AI features (Recaps, transcription, Coaching Hub, sentiment analysis)
   - D) Contact center setup (IVR, ACD, AI Agent, routing)
   - E) Integrations (CRM sync, Microsoft Teams, Google Workspace, API)
   - F) Pricing, plan comparison, or upgrading
   - G) API / SDK development (Stats API, SMS API, Python SDK, webhooks)

2. **Which Dialpad plan are you on?**
   - A) Standard ($15/user/mo)
   - B) Pro ($25/user/mo)
   - C) Enterprise (custom)
   - D) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Dialpad to other CCaaS platforms | `/sales-ccaas-selection {user's question}` |
| Comparing Dialpad to other note-takers/CI tools | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using Dialpad data | `/sales-coaching {user's question}` |
| Revenue forecasting with Dialpad analytics | `/sales-forecast {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific configuration | `/sales-hubspot {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |

When routing, provide the exact command.

## Step 3 — Dialpad platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Start with Standard to test voice quality and AI features. Upgrade to Pro when CRM integration is needed (Salesforce/HubSpot/Zendesk require Pro+). Enterprise only for 100+ users needing SSO and priority routing.

**Call quality**: Run Dialpad System Test first (Settings > System Test). Check network — parallel ring + Wi-Fi-to-LTE handoff cause most one-way audio. Disable Continuity Camera on Mac if using mobile + desktop simultaneously.

**CRM sync**: Pro plan required. Automatic call logging, contact sync, and click-to-dial from CRM. Texts sync inconsistently with some CRM connectors — verify SMS logging specifically.

**API development**: Use the Python SDK (`pip install dialpad`) for quick prototyping. Stats API is async — POST to start a report, wait 15-20s, then GET the result. Download the OpenAPI spec from `dialpad.com/static/openapi/platform-v1.0.json` for Postman.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **CRM integrations require Pro plan ($25/user/mo)** — Standard has no Salesforce, HubSpot, or Zendesk. Many users discover this after signup.
- **Standard plan limited to 1 user and 1 office** — it's effectively a solo plan, not a team plan. Teams start at Pro (3-user minimum).
- **Enterprise requires 100-user minimum** — no way to get SSO, priority routing, or 99.9% SLA with a smaller team.
- **Call quality degrades on Wi-Fi-to-LTE handoff** — parallel ring and sleep/wake transitions cause one-way audio or dropped calls. This is the #1 complaint on G2.
- **AI transcription struggles with accents and industry jargon** — use Company Dictionary (Admin > Company Dictionary) to add custom terms.
- **Stats API is async with caching** — POST creates a report, GET retrieves it. Wait 15-20s between. `is_today=true` results cached 30 min; `days_ago` cached 3 hrs.
- **Additional phone numbers cost $5-15/mo each** — not included in per-user pricing.
- **Billing disputes are common** — multiple reviews cite overcharging after cancellation. Document cancellation in writing.

## Related skills

- `/sales-ccaas-selection` — Comparing Dialpad to other contact center platforms (Genesys, NICE, Talkdesk, Five9)
- `/sales-note-taker` — Comparing Dialpad's AI Recaps to dedicated note-takers (Fathom, Gong, Fireflies, etc.)
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs using Dialpad AI Coaching Hub data
- `/sales-forecast` — Revenue forecasting with Dialpad analytics
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Calls dropping on mobile
**User says**: "My Dialpad calls keep cutting out when I walk between rooms — audio goes one-way then drops."
**Skill does**:
1. Identifies this as the Wi-Fi-to-LTE handoff issue (top G2 complaint)
2. Recommends running System Test to check baseline quality
3. Suggests disabling parallel ring if desktop and mobile are both active
4. Checks if Continuity Camera is enabled on Mac (known conflict)
**Result**: Network-specific troubleshooting steps for the handoff issue.

### Example 2: CRM calls not logging
**User says**: "I connected Dialpad to HubSpot but only some calls show up — texts never sync."
**Skill does**:
1. Confirms user is on Pro+ (CRM integration requires Pro)
2. Checks HubSpot integration version (v1 deprecated, v2 required)
3. Verifies contact matching — Dialpad logs calls to matched HubSpot contacts by phone number
4. Notes that SMS sync is inconsistent with some CRM connectors — recommends Zapier as workaround
**Result**: Specific steps to debug the HubSpot call logging pipeline.

### Example 3: Choosing between plans
**User says**: "We're a 15-person sales team evaluating Dialpad — is Standard enough?"
**Skill does**:
1. Rules out Standard immediately (1-user limit, no CRM integration)
2. Recommends Pro ($25/user/mo, $375/mo total) for CRM + 24/7 phone support
3. Notes Enterprise threshold is 100 users — not applicable for 15-person team
4. Calculates total cost with add-ons (extra numbers, meetings upgrade)
**Result**: Clear plan recommendation with cost math.

## Troubleshooting

### Dropped calls and one-way audio
**Symptom**: Calls drop mid-conversation or audio becomes one-way (you can hear them but they can't hear you).
**Cause**: Wi-Fi-to-LTE handoff, parallel ring conflict between desktop and mobile, or Continuity Camera on macOS stealing audio.
**Solution**: Run System Test (Settings > System Test). Disable parallel ring if both devices ring simultaneously. On Mac, disable Continuity Camera (System Settings > General > AirDrop & Handoff). If on VPN, exclude Dialpad traffic from the tunnel.

### AI transcription inaccurate for specific terms
**Symptom**: Transcription consistently gets company names, product terms, or acronyms wrong.
**Cause**: DialpadGPT doesn't know custom vocabulary by default. Accents and background noise compound the issue.
**Solution**: Add terms to Company Dictionary (Admin Settings > Company Dictionary). Use a quality headset with noise cancellation. Rate calls with 1-2 stars to flag quality issues for review.

### CRM integration not syncing
**Symptom**: Calls don't appear in Salesforce/HubSpot, or contact matching fails.
**Cause**: Standard plan (no CRM support), incorrect integration version, or phone numbers not matching CRM records.
**Solution**: Verify Pro+ plan. For HubSpot, ensure v2 integration is installed (v1 deprecated). Check that contact phone numbers in CRM match the numbers Dialpad sees. For Salesforce, verify the Dialpad managed package is installed and permissions are set.
