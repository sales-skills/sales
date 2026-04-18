---
name: sales-enthu
description: "Enthu.AI platform help — contact center conversation intelligence with auto QA scorecards, agent coaching, compliance monitoring, and speech analytics. Use when setting up Enthu.AI QA scorecards for call center agents, calls not being scored or transcribed correctly, agents not seeing coaching insights from their calls, Enthu.AI integration with Aircall or RingCentral not syncing, comparing Enthu.AI vs Gong or CallMiner for contact center QA, or configuring sentiment analysis and keyword tracking. Do NOT use for building a general coaching program (use /sales-coaching) or reviewing a specific call transcript (use /sales-call-review)."
argument-hint: "[describe what you need help with in Enthu.AI]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, contact-center, qa, platform]
---

# Enthu.AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up QA scorecards and evaluation criteria
   - B) Configuring integrations (dialer, CRM, meeting platform)
   - C) Agent coaching workflows and performance tracking
   - D) Compliance monitoring and PII redaction
   - E) Reporting and analytics dashboards
   - F) Comparing Enthu.AI to another tool (Gong, CallMiner, Observe.AI)
   - G) Other

2. **What's your current setup?**
   - A) New to Enthu.AI — haven't started
   - B) Installed but not fully configured
   - C) Running but having issues
   - D) Evaluating whether to buy

3. **What's your dialer/telephony?**
   - A) Aircall
   - B) RingCentral
   - C) Freshcaller
   - D) Twilio
   - E) GoToConnect
   - F) Dialpad
   - G) Webex
   - H) Zoom
   - I) Other

4. **Team size?**
   - A) Small (<10 agents)
   - B) Mid-size (10-50 agents)
   - C) Large (50-200 agents)
   - D) Enterprise (200+)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific call transcript for coaching | `/sales-call-review {user's question}` |
| Choosing between note-taker/conversation intelligence platforms | `/sales-note-taker {user's question}` |
| General CRM/tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — Enthu.AI platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority order:**
1. Connect your dialer/telephony first — calls must flow in before anything else works
2. Build your QA scorecard with 5-8 evaluation criteria (start simple, add complexity later)
3. Configure auto-scoring thresholds — which score ranges trigger coaching alerts
4. Set up agent dashboards so reps can self-review before manager coaching
5. Connect CRM last — once scoring is stable, push insights to HubSpot/Pipedrive

**When comparing to Gong/enterprise tools:** Enthu.AI's advantage is speed-to-value (hours not months) and no minimum commitments. Trade-off is thinner deal intelligence and revenue forecasting — Enthu focuses on QA and coaching, not pipeline analytics.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API documentation.** Enthu mentions "secure APIs and pre-built connectors" but doesn't publish API docs. Custom integrations are built during onboarding — ask your account rep about specific integration needs before committing.
- **Pricing is opaque.** Published prices range from $15/mo to $69/user/mo across review sites. Get a direct quote — pricing appears to vary by agent count, call volume, and commitment length.
- **Custom integrations at no extra charge** — Enthu will build custom telephony integrations during onboarding if your dialer isn't in their supported list. This is a strong selling point but may add onboarding time.
- **100% auto-scoring vs sampling.** Enthu scores every call automatically — unlike tools that sample 2-5%. This means more coaching signal but also more noise. Set score thresholds to surface only the calls that need attention.
- **Reports lack drill-down by campaign or agent group.** Users report that while reports work well, filtering by campaign or agent group is limited. Work around this by using consistent naming conventions for teams.

## Related skills

- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-coaching` — Build coaching programs, onboarding, role-plays, certifications
- `/sales-note-taker` — Compare AI note-takers and conversation intelligence tools or wire APIs into CRM
- `/sales-jiminny` — Jiminny platform help (coaching-focused conversation intelligence, mid-market Gong alternative)
- `/sales-outdoo` — Outdoo platform help (AI roleplay coaching + conversation intelligence, mid-market Gong alternative)
- `/sales-gong` — Gong platform help (enterprise revenue intelligence, Smart Trackers, deal boards)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up QA scorecards
**User says**: "I just signed up for Enthu.AI and need to set up QA scorecards for my 15-person support team"
**Skill does**:
1. Walks through connecting their dialer first (Aircall/RingCentral/etc.)
2. Designs a starter scorecard with 5-8 evaluation criteria tailored to support calls
3. Recommends auto-scoring thresholds for flagging calls that need coaching
4. Sets up agent self-review dashboards
**Result**: Working QA scorecard with auto-scoring and coaching alerts

### Example 2: Comparing Enthu.AI vs Gong
**User says**: "Should I go with Enthu.AI or Gong for my 30-agent contact center?"
**Skill does**:
1. Compares on QA scoring, coaching, CRM depth, pricing, and setup time
2. Highlights Enthu's advantages (fast setup, no minimums, affordable) and gaps (no deal intelligence, limited API)
3. Recommends Enthu if primary need is QA + coaching, Gong if need revenue intelligence + pipeline analytics
**Result**: Clear decision framework based on their primary use case

### Example 3: Integration not syncing
**User says**: "Enthu.AI isn't pulling calls from our Aircall setup"
**Skill does**:
1. Checks common integration issues (API key permissions, call recording enabled in Aircall)
2. Verifies the dialer connection in Enthu.AI settings
3. Recommends contacting Enthu support if self-service troubleshooting fails (custom integration support included)
**Result**: Troubleshooting checklist for dialer integration issues

## Troubleshooting

### Calls not appearing in Enthu.AI
**Symptom**: Dialer is connected but calls don't show up for scoring
**Cause**: Call recording may not be enabled in the dialer, or the integration API key may lack permissions
**Solution**: Verify recording is enabled in your dialer settings (Aircall, RingCentral, etc.), re-check the API credentials in Enthu.AI's integration panel, and ensure the connected workspace matches your dialer workspace. If using a custom integration, contact Enthu support — custom integrations are built during onboarding and may need adjustment.

### QA scores seem inconsistent
**Symptom**: Similar calls getting very different auto-scores
**Cause**: Scorecard criteria may be too vague or overlapping, leading to inconsistent AI interpretation
**Solution**: Make each scorecard criterion specific and binary where possible (e.g., "Did the agent confirm the customer's name?" not "Was the opening professional?"). Start with 5 clear criteria and add complexity after calibrating on 50+ scored calls.

### Reports not showing team-level trends
**Symptom**: Can see individual agent scores but no team aggregation
**Cause**: Enthu's reporting has limited drill-down by campaign or agent group
**Solution**: Use consistent agent naming and team tags. Export data to a spreadsheet for team-level aggregation if built-in grouping is insufficient. Request team-level dashboards from your Enthu account rep — the product is actively adding reporting features.
