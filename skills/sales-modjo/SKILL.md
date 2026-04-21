---
name: sales-modjo
description: "Modjo platform help — EU-native AI revenue intelligence with call scoring, CRM auto-fill, deal intelligence, AI agents, and conversation library. Use when setting up Modjo CRM sync to Salesforce or HubSpot, call scoring not working or scores seem inaccurate, AI-generated follow-up emails sounding too robotic, configuring Modjo AI agents for custom workflows, choosing between Modjo and Gong or Avoma or Claap, CRM fields not auto-populating after calls, setting up Modjo API or webhooks, transcription quality issues with European languages, or understanding Modjo pricing and listener vs recording licenses. Do NOT use for picking between note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Modjo question — setup, CRM sync, scoring, pricing, etc.]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, revenue-intelligence, note-taker, platform]
---

# Modjo Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Modjo or connecting CRM (Salesforce, HubSpot, Pipedrive, Zoho, Sellsy, Dynamics)
   - B) Call Scoring, AI Insights, or Ask Modjo AI
   - C) CRM auto-fill configuration (field mapping, deal sync)
   - D) Email Follow-Up or conversation library management
   - E) API integration, webhooks, or MCP server setup
   - F) Pricing, license types, or evaluating Modjo
   - G) Troubleshooting (transcription issues, scoring problems, CRM not syncing)

2. **What's your team setup?**
   - A) Evaluating Modjo (haven't purchased yet)
   - B) Setting up — just signed the contract
   - C) Live — optimizing or troubleshooting
   - D) Integrating Modjo API into internal tools

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Modjo to other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using Modjo data | `/sales-coaching {user's question}` |
| Revenue forecasting with Modjo deal data | `/sales-forecast {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific configuration | `/sales-hubspot {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |

When routing, provide the exact command.

## Step 3 — Modjo platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Connect CRM first (Salesforce or HubSpot via native integration), then connect telephony/video systems, then configure AI scoring criteria, then set up Slack notifications. Start with default scoring before customizing AI agents.

**License selection**: Recording licenses for reps who make/take calls. Listener licenses (free) for managers and leadership who review calls. Budget based on recording seats only.

**GDPR advantage**: All data hosted in France (AWS Paris). If your org requires EU data sovereignty, Modjo is one of the few CI platforms that can guarantee it. Confirm data residency requirements with your DPO before choosing between Modjo and US-hosted alternatives.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No free trial or free plan** — you need a sales demo to get pricing. Budget ~€99/user/mo with a 15-seat minimum.
- **Annual contracts only** — no monthly billing. Factor in €2,000-€5,000 onboarding costs.
- **Listener licenses are free** — don't count managers and leadership in your recording seat estimate.
- **Transcription quality varies by language** — European languages (French, German, Spanish) work well. Less common languages may have accuracy issues. Test with real calls during evaluation.
- **AI-generated follow-up emails** can sound robotic — review and edit before sending. The email feature works better as a draft generator than auto-send.
- **Sentiment analysis is still maturing** — don't rely on it as the sole signal for deal health. Cross-reference with manual review.
- **Previous interactions feature was removed** — you can no longer flip through a customer's call history from within a single call view. Use the Library search instead.

## Related skills

- `/sales-note-taker` — Comparing note-takers, API integration patterns, transcript pipelines. Run: `/sales-note-taker compare Modjo vs Gong for my EU sales team`
- `/sales-coaching` — Building coaching programs using call data. Run: `/sales-coaching set up coaching with Modjo call scoring`
- `/sales-forecast` — Revenue forecasting with conversation intelligence. Run: `/sales-forecast improve forecast accuracy with Modjo deal intelligence`
- `/sales-call-review` — Reviewing a specific call for coaching. Run: `/sales-call-review review this discovery call`
- `/sales-integration` — Connecting Modjo to CRM, Slack, or data warehouse. Run: `/sales-integration connect Modjo webhooks to Snowflake`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing between Modjo and Gong
**User says**: "We're a 30-person sales team in Germany. Should we go with Modjo or Gong?"
**Skill does**:
1. Confirms EU data residency is a factor — Modjo hosts in France, Gong in the US
2. Compares pricing: Modjo ~€99/user/mo vs Gong ~$133/user/mo + $5K-50K platform fee
3. Notes Modjo includes onboarding in subscription; Gong charges $7,500+
4. Flags Gong's deeper analytics and forecasting module (if needed, ~40% of Gong customers stack Clari)
5. Recommends Modjo if GDPR compliance and cost are primary; Gong if deep enterprise analytics justify the premium

### Example 2: CRM fields not auto-filling
**User says**: "Modjo isn't auto-populating our Salesforce opportunity fields after calls"
**Skill does**:
1. Checks CRM integration status in Settings > Integrations
2. Verifies Salesforce field mapping — Modjo needs fields mapped before it can auto-fill
3. Confirms Chrome extension is installed (required for HubSpot; Salesforce uses native integration)
4. Checks if calls are being imported successfully (telephony/video integration must be active)
5. Suggests testing with a single call before bulk-enabling

### Example 3: Setting up Modjo API webhooks
**User says**: "I want to pipe Modjo call summaries into our Snowflake warehouse"
**Skill does**:
1. Reads API reference — confirms webhook events: `call_summarized`, `call_transcript_deleted`, `call_recording_deleted`
2. Sets up `call_summarized` webhook to post to an API Gateway endpoint
3. Validates webhook signatures using HMAC-SHA256: `SHA256(timestamp + JSON.stringify(payload) + secretToken)`
4. Worker calls POST `/v1/calls/exports` to fetch full transcript + summary
5. Writes normalized data to Snowflake via Snowpipe

## Troubleshooting

### Call scoring seems inaccurate or inconsistent
**Symptom**: AI scores don't match manager's assessment of call quality
**Cause**: Default scoring criteria may not align with your sales methodology or industry
**Solution**: Customize AI scoring criteria in Settings to match your specific qualification framework (MEDDIC, BANT, SPICED). Review and adjust scoring weights. Give the system 2-3 weeks of data before judging accuracy — AI scoring improves with more call volume.

### Transcription quality is poor for multilingual calls
**Symptom**: Transcripts have frequent errors, especially when reps switch between languages mid-call
**Cause**: Transcription models handle single-language calls better than code-switching
**Solution**: Set the primary language for each user's profile. For multilingual teams, test transcription quality with real calls before committing. If accuracy is critical, consider supplementing with manual review for key calls.

### Initial setup feels overwhelming
**Symptom**: Too many integrations and settings to configure at once
**Cause**: Modjo connects to CRM, telephony, video, email, and calendar — all at once
**Solution**: Phase the rollout: Week 1 = CRM + primary telephony. Week 2 = video conferencing. Week 3 = AI scoring customization. Week 4 = Slack notifications + API/webhooks. Don't try to configure everything on day one.
