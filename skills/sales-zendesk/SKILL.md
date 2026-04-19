---
name: sales-zendesk
description: "Zendesk platform help — ticketing, Help Center knowledge base, AI agents, live chat, Talk voice, Sell CRM, omnichannel messaging, Explore analytics, Marketplace apps, REST API. Use when Zendesk tickets not routing correctly, AI agent misclassifying or giving wrong answers, help center articles not surfacing in search, live chat widget not converting, SLA badges not showing or breach timers wrong, Zendesk costs spiraling with add-ons, API rate limits being hit, or integrations not syncing with Salesforce or HubSpot. Do NOT use for help desk platform comparison (use /sales-helpdesk-selection), CCaaS platform selection (use /sales-ccaas-selection), or live chat strategy across tools (use /sales-live-chat)."
argument-hint: "[describe what you need help with in Zendesk]"
license: MIT
version: 1.0.0
tags: [sales, customer-service, help-desk, support, platform]
github: "https://github.com/zendesk"
---

# Zendesk Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What area of Zendesk do you need help with?**
   - A) Ticketing — triggers, automations, macros, views, ticket fields, SLAs
   - B) Help Center / Guide — knowledge base articles, community forums, AI search
   - C) AI Agents — automated resolution, copilot, generative replies
   - D) Chat — live chat widget, proactive messaging, routing
   - E) Talk (Voice) — IVR, call recording, voicemail, routing
   - F) Sell (CRM) — pipeline, leads, deals, sales automation
   - G) Messaging — WhatsApp, Facebook, Instagram, SMS omnichannel
   - H) Explore (Analytics) — dashboards, custom reports, SLA tracking
   - I) Marketplace & Integrations — Salesforce, HubSpot, Shopify, Jira, Slack
   - J) API & Development — REST API, webhooks, apps, ZIS
   - K) Admin — pricing, plans, add-ons, billing, user management
   - L) Something else — describe it

2. **What's your role?**
   - A) Support agent / team lead
   - B) Support manager / director
   - C) Admin / IT
   - D) Developer / RevOps
   - E) Founder / small team
   - F) Other

3. **What plan are you on?** (Support Team $19 / Suite Team $55 / Suite Growth $89 / Suite Professional $115 / Suite Enterprise $169)

**Skip-ahead rule**: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between Zendesk vs Freshdesk vs Intercom | `/sales-helpdesk-selection {question}` |
| Contact center / CCaaS selection | `/sales-ccaas-selection {question}` |
| Live chat strategy across tools | `/sales-live-chat {question}` |
| Chatbot flow design (non-Zendesk) | `/sales-chatbot {question}` |
| CRM comparison / selection | `/sales-crm-selection {question}` |
| Email deliverability | `/sales-deliverability {question}` |
| Sales coaching / call review | `/sales-coaching {question}` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Zendesk platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Ticket routing issues**: Check trigger conditions, order (triggers fire top-to-bottom), and automation vs trigger distinction (automations are time-based, triggers are event-based)
- **SLA problems**: Verify business hours schedule, check if SLA policies are applied in the correct order (first match wins), confirm the metric type (first reply vs next reply vs periodic update)
- **AI agent tuning**: Review conversation logs for misclassification patterns, adjust intents, add training phrases, check if the right knowledge sources are connected
- **Cost optimization**: Map features to actual plan needs — many teams overpay for Enterprise when Professional covers their needs. Evaluate whether AI/QA/WFM add-ons are delivering ROI
- **API integration**: Use API tokens for server-side, OAuth for client-side apps. Mind rate limits (200-2500 req/min by plan). Use incremental exports for bulk data, not list endpoints

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and add-on pricing that may be outdated.*

1. **Real costs are 2-3x advertised** — base plan prices don't include Advanced AI ($50/agent), Copilot ($50/agent), QA ($35/agent), or WFM ($25/agent). A team on Suite Pro at $115/agent can easily reach $225/agent with add-ons.
2. **AI features are mostly add-ons** — generative replies and AI copilot require separate purchases on most plans. Don't assume "AI" in marketing means AI is included in your plan.
3. **Triggers vs automations confusion** — triggers fire on ticket create/update (event-based), automations fire on time conditions (hourly scan). Mixing them up causes routing bugs.
4. **Zendesk's own support is slow** — widely reported across G2, Trustpilot, and community forums. Budget for self-service via their docs and community rather than relying on support tickets.
5. **Integration sync can pause silently** — Salesforce and HubSpot syncs can stop without admin notification. Monitor sync health proactively.
6. **Reporting is plan-gated** — real-time dashboards require Professional+. Custom Explore reports have limited customization on lower plans.
7. **API rate limits vary dramatically by plan** — Team gets 200 req/min, Enterprise gets 700, Enterprise Plus gets 2500. Hitting limits returns 429 with Retry-After header.
8. **256 API token limit** — accounts can maintain up to 256 active tokens. Must delete one to create a new one at capacity.

## Related skills

- `/sales-helpdesk-selection` — Comparing help desk platforms (Zendesk vs Freshdesk vs Intercom vs Help Scout)
- `/sales-ccaas-selection` — CCaaS platform comparison and selection
- `/sales-live-chat` — Live chat strategy across tools
- `/sales-chatbot` — Chatbot marketing and conversational automation
- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC
- `/sales-customer-success` — Customer success strategy
- `/sales-integration` — Connect Zendesk to CRM, e-commerce, and other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Ticket routing broken
**User says**: "Tickets from our enterprise customers keep going to the wrong team — they should go to our dedicated enterprise queue but they're landing in general support"
**Skill does**: Walks through trigger conditions (check organization tags, custom fields, or email domain), trigger ordering (first-match wins), and tests with a sample ticket to trace the routing path.

### Example 2: AI agent giving bad answers
**User says**: "Our AI agent keeps suggesting irrelevant help center articles when customers ask about billing"
**Skill does**: Reviews connected knowledge sources, checks intent training phrases, examines conversation logs for misclassification patterns, and recommends adding negative examples to improve classification.

### Example 3: Costs spiraling
**User says**: "We're on Suite Enterprise and our Zendesk bill is $5000/month for 20 agents — can we reduce this?"
**Skill does**: Audits which add-ons are active (AI, QA, WFM), checks if Enterprise features are actually used (custom roles, sandbox, 300 help centers), and recommends downgrading to Professional if advanced features aren't needed.

## Troubleshooting

### SLA badges not showing or breach timers wrong
**Symptom**: SLA indicators missing from tickets, or timers count through non-business hours
**Cause**: Business hours schedule misconfigured, SLA policy order wrong (first match wins), or metric type mismatch (first reply vs next reply)
**Solution**: 1) Check Admin > Business rules > SLAs — verify the policy matches the right conditions. 2) Check Admin > Business rules > Schedules — verify timezone and business hours. 3) SLA policies apply first-match, so put more specific policies above general ones.

### API rate limit errors (429)
**Symptom**: API calls returning 429 Too Many Requests
**Cause**: Exceeding plan-based rate limits (Team: 200/min, Pro: 400/min, Enterprise: 700/min)
**Solution**: 1) Check `X-Rate-Limit` and `Retry-After` response headers. 2) Use incremental exports for bulk data instead of list endpoints. 3) Implement exponential backoff. 4) Consider the High Volume Add-on (2500/min, requires 10+ agent seats).

### Salesforce sync not updating
**Symptom**: Ticket data not appearing in Salesforce, or Salesforce contacts not syncing to Zendesk
**Cause**: Sync can pause silently due to auth token expiration, field mapping errors, or API limits on either side
**Solution**: 1) Check Admin > Integrations > Salesforce — look for sync errors. 2) Re-authenticate if the OAuth token expired. 3) Verify field mappings match expected data types. 4) Check Salesforce API usage — Zendesk sync counts against Salesforce API limits too.
