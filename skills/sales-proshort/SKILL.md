---
name: sales-proshort
description: "Proshort platform help — enablement-first conversation intelligence with contextual AI coaching, AI Roleplay, CRM auto-sync, deal risk alerts. Use when setting up Proshort call recording on Zoom/Meet/Teams, configuring AI Roleplay for rep onboarding, Proshort deal risk alerts not appearing in Slack, Proshort CRM auto-sync not populating Salesforce/HubSpot/Zoho fields, comparing Proshort vs Gong vs Avoma vs Rafiki for mid-market CI, choosing an enablement-first CI platform that combines coaching with call analysis, or evaluating Proshort pricing ($75/user/mo) against alternatives. Do NOT use for reviewing a single call for coaching (use /sales-call-review) or building a coaching program across tools (use /sales-coaching)."
argument-hint: "[describe what you need help with in Proshort]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, coaching, enablement, platform]
---

# Proshort Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Evaluate Proshort vs alternatives (selection/comparison)
   - B) Set up or configure Proshort (recording, CRM sync, coaching)
   - C) Troubleshoot an issue (alerts not firing, CRM fields not syncing, roleplay not working)
   - D) Understand pricing and plan differences

2. **What's your current setup?**
   - A) CRM: Salesforce / HubSpot / Zoho / Other
   - B) Video platform: Zoom / Google Meet / Teams
   - C) Team size and current CI tool (if any)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program across tools | `/sales-coaching {user's question}` |
| Comparing note-taker/CI platforms broadly | `/sales-note-taker {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Revenue forecasting strategy | `/sales-forecast {user's question}` |

Otherwise, answer directly below.

## Step 3 — Proshort platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, data model, and recipes.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Evaluation framework:**
1. **Budget** — $75/user/mo Professional, custom Enterprise. No free tier. Compare: Rafiki $19-49, Outdoo ~$55-100, Attention ~$59, Gong $100-133.
2. **Coaching depth** — AI Roleplay + in-call cues + snippet library + Skill Intelligence Dashboard. Stronger coaching than Gong/Avoma; weaker raw CI analytics than Gong.
3. **CRM integration** — Salesforce/HubSpot/Zoho auto-sync. 100% field fill rate claimed. No API for custom integrations.
4. **Compliance** — SOC 2 Type 2, ISO 27001, GDPR, HIPAA. Strong for regulated industries.
5. **Limitations** — No public API, no webhooks, no MCP server. All automation is through native integrations.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API or webhooks.** All integrations are native (Salesforce, HubSpot, Zoho, Slack, Gong). No way to build custom integrations or pipe data to a warehouse.
- **Pricing page returns 404.** The $75/user/mo Professional pricing comes from the homepage — verify with Proshort sales before committing.
- **No free tier or trial documented.** Unlike Rafiki (free tier + 14-day trial) or Fathom (unlimited free), Proshort requires a sales conversation.
- **"TodoFusion" appears in blog titles.** This appears to be a CMS artifact, not a separate product — don't confuse them.
- **Small review base.** No G2 reviews found — rely on case studies (RateGain, Increff, Aviz Networks) for social proof.
- **Gong integration listed.** Proshort integrates with Gong — suggests it can layer coaching on top of existing Gong CI, not just replace it.
- **Enterprise pricing is custom.** Includes dedicated support, 99.9% SLA — budget significantly above $75/user for Enterprise.

## Related skills

- `/sales-note-taker` — Compare Proshort against other CI platforms (Gong, Avoma, Rafiki, Fireflies, etc.)
- `/sales-coaching` — Build coaching programs that consume call data from Proshort or other CI tools
- `/sales-call-review` — Review a specific call for coaching
- `/sales-forecast` — Revenue forecasting and deal health
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Evaluating Proshort vs Gong for a mid-market team
**User says**: "We're a 20-rep SaaS team on HubSpot. Gong quoted us $1,400/user/yr. Is Proshort worth considering?"
**Skill does**:
1. Reads platform guide for pricing comparison: Proshort $75/user/mo ($900/yr) vs Gong $1,400/yr
2. Notes Proshort's coaching focus (AI Roleplay, contextual in-call cues) vs Gong's broader analytics
3. Flags that Proshort has no public API while Gong has REST + webhooks
4. Recommends Proshort if coaching/enablement is the priority; Gong if analytics/API/ecosystem matters more
**Result**: Clear comparison with a decision framework tied to the team's priorities.

### Example 2: Setting up CRM auto-sync with Salesforce
**User says**: "How do I get Proshort summaries and action items into Salesforce automatically?"
**Skill does**:
1. Reads platform guide for CRM sync section
2. Explains native Salesforce integration — auto-pushes summaries, action items, and coaching insights to opportunity records
3. Notes 100% field fill rate claim — no manual data entry needed
4. Warns there's no API fallback if native sync doesn't cover custom fields
**Result**: Setup guidance with realistic expectations about native integration limits.

### Example 3: Proshort AI Roleplay not scoring accurately
**User says**: "The AI Roleplay scores seem inconsistent — some reps get high scores on weak performances."
**Skill does**:
1. Reads platform guide for AI Roleplay section
2. Explains that roleplay scenarios are built from real customer conversations — check if the source calls are representative
3. Suggests calibrating with top-performer examples in the snippet library
4. Notes this is a known limitation of AI-scored roleplay across all platforms (Solidroad, SecondBody, Outdoo)
**Result**: Troubleshooting steps plus context that this is an industry-wide challenge.

## Troubleshooting

### CRM fields not populating after calls
**Symptom**: Proshort records and transcribes calls but Salesforce/HubSpot fields stay empty
**Cause**: CRM connection may not be fully authorized, or field mapping may not be configured
**Solution**: Re-authorize the CRM connection in Proshort settings. Verify field mappings match your CRM schema. Check that the recorded meeting was on a supported platform (Zoom/Meet/Teams). Note: there's no API to debug this programmatically — check Proshort's dashboard for sync status.

### Deal risk alerts not appearing in Slack
**Symptom**: Deals are clearly stalled but no Slack notifications arrive
**Cause**: Slack integration may not be connected, or alert thresholds may not match your deal velocity
**Solution**: Verify Slack workspace connection in Proshort settings. Check alert configuration — Deal Agents need to know what "stalled" means for your pipeline (days without activity, missing stakeholders, etc.). Start with default thresholds and tune from there.

### AI Roleplay scenarios feel generic
**Symptom**: Reps say roleplay doesn't match real customer conversations
**Cause**: Roleplay scenarios may be using default templates rather than your team's actual call library
**Solution**: Build the snippet library first — tag top-performer calls by persona, deal stage, and competitor. AI Roleplay quality improves as the call library grows. Feed recent competitive win/loss calls to get more relevant objection-handling scenarios.
