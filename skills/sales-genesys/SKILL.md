---
name: sales-genesys
description: "Genesys Cloud CX platform help — enterprise CCaaS with AI-powered experience orchestration, omnichannel ACD routing (voice + digital), Architect IVR/flow builder, workforce management (WFM forecasting/scheduling/adherence), quality management (evaluations/scoring), predictive routing, agent assist, virtual agents, outbound dialer, Interaction Analytics, AppFoundry marketplace (450+ apps), REST Platform API with OAuth 2.0 and 15 regional endpoints, deep Salesforce integration (CX Cloud joint product + Service Cloud Voice BYOT), 4 tiers CX1 $75/CX2 $115/CX3 $155/CX4 $240 per user/mo + telephony minutes. Use when setting up Genesys Cloud routing or Architect flows, WFM forecasting not matching actual volume, quality management evaluations not triggering coaching, dropped calls or audio quality issues, comparing Genesys pricing tiers, integrating Genesys with Salesforce or ServiceNow, Genesys reporting hard to navigate, MFA management confusing, Genesys API integration, or evaluating enterprise CCaaS platforms. Do NOT use for building a general coaching program (use /sales-coaching) or comparing CCaaS platforms (use /sales-ccaas-selection)."
argument-hint: "[describe what you need help with in Genesys Cloud CX]"
license: MIT
version: 1.0.0
tags: [sales, contact-center, ccaas, platform]
github: "https://github.com/MyPureCloud"
---

# Genesys Cloud CX Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) ACD routing, IVR, or Architect flow configuration
   - B) Digital channels (email, chat, SMS, social, web messaging)
   - C) AI features — predictive routing, agent assist, virtual agents, journey analytics
   - D) Workforce management (WFM) — forecasting, scheduling, adherence
   - E) Quality management (QM) — evaluations, scoring, coaching workflows
   - F) Outbound dialer — campaigns, predictive/power/progressive modes
   - G) Reporting, analytics, or Interaction Analytics
   - H) Integrations — Salesforce, ServiceNow, AppFoundry, API
   - I) Pricing, tier selection, or billing
   - J) Admin — MFA, OAuth, user management, permissions
   - K) Other

2. **Current tier?**
   - A) CX 1 ($75 — voice only)
   - B) CX 2 ($115 — omnichannel)
   - C) CX 3 ($155 — + WFM + analytics)
   - D) CX 4 ($240 — + AI + journey orchestration)
   - E) Not sure / evaluating

3. **Contact center size?**
   - A) Small (<50 agents)
   - B) Medium (50-500 agents)
   - C) Large (500+ agents)
   - D) Evaluating / not yet deployed

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Coaching programs, rep onboarding, role-play | `/sales-coaching {question}` |
| Comparing CCaaS platforms (vs NICE CXone, Talkdesk, Five9) | `/sales-ccaas-selection {question}` |
| Reviewing a specific call transcript | `/sales-call-review {question}` |
| CRM data quality or deduplication | `/sales-data-hygiene {question}` |
| Connecting Genesys to other tools (Zapier, Make, iPaaS) | `/sales-integration {question}` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

If the question is Genesys-specific, continue to Step 3.

## Step 3 — Genesys Cloud platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Tier selection**: Match tier to actual needs — CX 1 is fine for voice-only, but WFM requires CX 3. AI features (predictive routing, agent assist) require CX 4. Don't overbuy.
- **Implementation**: Expect months for enterprise deployments. Start with voice routing, add channels incrementally. Use Genesys's PureBridge migration program if moving from on-prem.
- **API integration**: Use Platform Client SDKs (JS, Python, Java, Go, .NET, iOS) over raw REST for faster development. Regional base URLs matter — match to your org's region.
- **Cost management**: Watch telephony minute costs (separate from seat licenses). Named user licensing means you pay for inactive users too. Negotiate multi-year for better rates.
- **AppFoundry**: Check AppFoundry marketplace before building custom integrations — 450+ apps cover most common needs.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Telephony costs are separate** — seat licenses don't include voice minutes. Inbound DID ~$0.009/min, toll-free ~$0.015/min, outbound US ~$0.0119/min. Budget separately.
- **Named user licensing** — you pay for every licensed user whether they log in or not. No concurrent licensing option.
- **AI features are CX 4 only** — predictive routing, agent assist, journey analytics, and knowledge management all require the $240/user/mo tier. Usage-based AI add-ons cost extra.
- **WFM can't build multi-site schedules simultaneously** — build schedules for each site one at a time in the scenario.
- **Developer Center is JS-rendered** — API Explorer and docs require JavaScript. CLI tool (`gc`) available as alternative for scripting.
- **Service reliability** — 10 incidents in 90 days reported (6 major, 4 minor). UAE region experienced extended disruption. Monitor status.mypurecloud.com.
- **Implementation timeline** — enterprise deployments take months, not weeks. Budget for professional services or partner engagement.
- **OAuth Implicit Grant deprecation** — being removed May 2026. Migrate to Code Authorization or Client Credentials.

## Related skills

- `/sales-ccaas-selection` — Comparing Genesys vs NICE CXone vs Talkdesk vs Five9? The CCaaS selection skill walks through platform comparison.
- `/sales-coaching` — Building coaching programs, QA frameworks, or agent training? The coaching skill covers strategy across all platforms.
- `/sales-nice-cxone` — NICE CXone platform help
- `/sales-talkdesk` — Talkdesk platform help
- `/sales-observe-ai` — Observe.AI platform help — layer on top of Genesys for deeper auto QA
- `/sales-balto` — Balto platform help — real-time agent assist that integrates natively with Genesys
- `/sales-cresta` — Cresta platform help — enterprise contact center AI that integrates with Genesys
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

**User prompt**: "Our agents are dropping calls and customers complain about audio quality on Genesys Cloud"
**Skill does**: Walks through Genesys Cloud audio troubleshooting — WebRTC diagnostics, network requirements, QoS settings, edge server selection, and known service reliability issues.

**User prompt**: "We're on CX 2 and wondering if we need CX 3 — is the WFM worth the upgrade?"
**Skill does**: Compares CX 2 vs CX 3 features — WFM forecasting, scheduling, speech analytics, sentiment analysis — and helps evaluate ROI based on team size and current pain points.

**User prompt**: "How do I set up the Salesforce CX Cloud integration with Genesys?"
**Skill does**: Walks through CX Cloud from Genesys and Salesforce — joint product setup, Service Cloud Voice BYOT configuration, agent workspace within Salesforce, and AppFoundry connector options.

## Troubleshooting

**Dropped calls and audio quality issues**
Check WebRTC network requirements (UDP ports 16384-32768), edge server proximity, QoS configuration, and ISP throttling. Monitor status.mypurecloud.com for regional outages. Test with Genesys Network Readiness Assessment tool. Audio issues correlate with browser version — keep Chrome/Edge updated.

**Dashboard navigation confusing — can't find missed calls or texts**
Genesys Cloud UI organizes by interactions, not by channel. Use Performance > Interactions view with filters for missed/abandoned. For texts, check ACD > Digital > Message Interactions. Custom dashboards via Analytics API provide more flexible views than the built-in UI.

**MFA management — users locked out, can't clear devices**
Ensure admin has MFA management permissions (Directory > User > Edit MFA). For users who lost their MFA device, admin can reset via User Management > Users > find user > clear MFA. If globally disabled but offered individually, contact Genesys Product Support for reset.
