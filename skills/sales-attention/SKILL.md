---
name: sales-attention
description: "Attention platform help — AI-native conversation intelligence with CRM auto-update, coaching scorecards (MEDDIC/BANT/custom), real-time battlecards, follow-up automation, Ask Attention AI, and workflow builder. Use when setting up Attention CRM auto-update for Salesforce or HubSpot, coaching scorecards not generating or scoring incorrectly, CRM fields not populating after calls, configuring Attention workflow automations or triggers, choosing between Attention and Gong or Sybill or Avoma, understanding Attention pricing tiers (Starter $59 vs Professional $149 vs Enterprise $399), setting up Attention API or MCP server integration, or Ask Attention returning unhelpful insights. Do NOT use for picking between note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Attention question — CRM sync, scorecards, pricing, API, workflows, etc.]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, note-taker, crm-autofill, coaching, platform]
---

# Attention Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Attention or connecting CRM (Salesforce, HubSpot)
   - B) Coaching scorecards (MEDDIC, BANT, custom frameworks)
   - C) CRM Auto-Update field mapping and sync
   - D) Follow-up emails, real-time battlecards, or AI agents
   - E) Workflow Builder (triggers, action steps, automations)
   - F) API integration, MCP server, or SCIM provisioning
   - G) Pricing, plan comparison, or upgrading
   - H) Troubleshooting (CRM sync issues, slow insights, bot problems)

2. **Which Attention plan are you on?**
   - A) Starter ($59/user/mo)
   - B) Professional ($149/user/mo)
   - C) Enterprise ($399/user/mo)
   - D) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Attention to other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using Attention data | `/sales-coaching {user's question}` |
| Revenue forecasting with Attention deal data | `/sales-forecast {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific configuration | `/sales-hubspot {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |

When routing, provide the exact command.

## Step 3 — Attention platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Connect video platform (Zoom/Meet/Teams) first, then CRM (Salesforce/HubSpot), then configure CRM field mappings, then set up coaching scorecards. Enable Slack integration for team notifications last.

**Plan selection**: Starter for small teams needing basic recording + AI coaching. Professional for custom scorecards and deeper analytics. Enterprise for AI agents, advanced integrations, and premium support.

**Workflow Builder**: Start with the "After call ends" trigger → CRM update action. Add follow-up email and Slack notification actions once the basic flow works.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **CRM sync can bug out intermittently** — users report occasional failures when pushing data to CRM. Check Attention's workflow run logs for delivery errors and retry manually.
- **Insight prompts are not fully customizable** — users wish for more control over what the AI extracts from calls. Use the Workflow Builder with custom Ask Attention prompts as a workaround.
- **AI agent features are still maturing** — smaller company working out bugs, especially on the agent builder side. Test automations thoroughly before scaling.
- **Pricing is hidden behind a sales call** — published figures ($59/$149/$399) are from third-party reviews and may not reflect current pricing or negotiated rates.
- **Only ~15 G2 reviews** — limited independent review coverage despite 4.9 rating. Cross-reference with other sources when evaluating.
- **Loading can be slow** — insight generation on complex calls may take time. Not real-time for all features.
- **Free trial available but no permanent free tier** — unlike Fathom or tl;dv, there's no ongoing free plan.

## Related skills

- `/sales-note-taker` — Comparing Attention to other note-takers (Fathom, Fireflies, Gong, Sybill, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-forecast` — Revenue forecasting and deal health assessment
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM fields not syncing after calls
**User says**: "Attention recorded my call but the MEDDIC fields didn't update in Salesforce."
**Skill does**:
1. Checks CRM field mapping configuration in Attention workspace settings
2. Verifies the Salesforce integration is connected and authorized
3. Checks workflow run logs for the specific call to identify sync errors
4. Confirms the call contained enough signal for MEDDIC extraction
**Result**: Specific troubleshooting steps for the CRM auto-update pipeline.

### Example 2: Setting up coaching scorecards
**User says**: "How do I create a custom scorecard that checks if reps ask about budget and timeline?"
**Skill does**:
1. Reads platform guide for scorecard template creation
2. Walks through creating criteria for budget discovery and timeline qualification
3. Recommends starting with a pre-built framework (BANT) and customizing from there
4. Notes that custom scorecards require Professional plan or above
**Result**: Step-by-step scorecard setup with framework selection guidance.

### Example 3: Choosing the right plan
**User says**: "Is Attention worth it compared to Sybill for a 20-person sales team?"
**Skill does**:
1. Routes to `/sales-note-taker` for cross-platform comparison
2. If user wants Attention-specific plan advice, compares Starter vs Professional vs Enterprise
3. Calculates cost at scale: 20 × $59 = $1,180/mo (Starter) vs 20 × $149 = $2,980/mo (Professional)
**Result**: Plan recommendation with cost math and feature comparison.

## Troubleshooting

### CRM auto-update failing or inconsistent
**Symptom**: Some calls update CRM fields correctly, others don't — no pattern visible.
**Cause**: Intermittent CRM sync bugs reported by multiple users. May also be caused by field mapping mismatches, expired OAuth tokens, or calls too short for meaningful extraction.
**Solution**: Check Attention workflow run logs for the failed calls. Verify CRM OAuth connection is active. Ensure field mappings match your CRM's actual field names (not display labels). For persistent issues, contact Attention support.

### Ask Attention returning generic or unhelpful answers
**Symptom**: Querying across calls gives vague responses that don't match what was discussed.
**Cause**: Ask Attention quality depends on having enough call data indexed. New accounts or teams with few recordings will get weaker results.
**Solution**: Allow the system to index more calls before relying on cross-call insights. Ask specific questions ("What objections came up in calls with [company] last month?") rather than broad ones. Use Ask Attention V2 endpoint if using the API.

### Slow loading when generating insights on a call
**Symptom**: After a call ends, insights and coaching scores take a long time to appear.
**Cause**: AI processing is asynchronous — complex or long calls take more time. This is expected behavior, not a bug.
**Solution**: Wait 5-15 minutes for most calls. For urgent follow-ups, use the email template feature which generates faster than full analysis. If consistently slow (30+ min), check with Attention support about processing queue status.
