---
name: sales-customer-success
description: "Customer success strategy across platforms — health scores, churn prevention, onboarding playbooks, expansion revenue, QBRs, CS metrics, platform comparison. Use when health scores aren't predicting churn, customers are churning and you don't know why, onboarding takes too long, expansion revenue is flat, need to design CS playbooks, choosing between Vitally vs Gainsight vs ChurnZero vs Totango, NRR is declining, or building a CS team from scratch. Do NOT use for NPS/CSAT survey methodology (use /sales-customer-feedback) or ecommerce visitor identity resolution (use /sales-retention)."
argument-hint: "[describe your customer success question]"
license: MIT
version: 1.0.0
tags: [sales, customer-success, churn, retention, strategy]
---
# Customer Success Strategy

Help the user design, optimize, and scale customer success programs — from building health scores and churn playbooks through onboarding optimization, expansion strategy, and CS platform selection.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Building or fixing a health score model
   - B) Reducing churn — understanding why customers leave
   - C) Onboarding — accelerating time-to-value for new customers
   - D) Expansion — upsell, cross-sell, identifying growth opportunities
   - E) CS playbooks — designing automated workflows for key moments
   - F) Choosing a CS platform (Vitally, Gainsight, ChurnZero, etc.)
   - G) CS metrics — NRR, GRR, logo retention, time-to-value
   - H) QBRs / business reviews — structure, cadence, content
   - I) Building/scaling a CS team — hiring, book-of-business, ratios
   - J) Something else — describe it

2. **What type of business?**
   - A) B2B SaaS (self-serve / PLG)
   - B) B2B SaaS (sales-led, mid-market)
   - C) B2B SaaS (enterprise, high-touch)
   - D) B2B services / consulting
   - E) Other

3. **Current CS tooling?** (Vitally, Gainsight, ChurnZero, Totango, spreadsheets, CRM-only, none)

4. **Customer count and ACV?** (Rough ranges: <50 customers, 50-500, 500-5000, 5000+; ACV: <$5K, $5-50K, $50-500K, $500K+)

**If the user's request already provides enough context, skip to the relevant step.** Lead with your best-effort answer, then ask 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- Gainsight platform questions → `/sales-gainsight {your question}`
- Vitally platform questions → `/sales-vitally {your question}`
- Planhat platform questions → `/sales-planhat {your question}`
- ChurnZero platform questions → `/sales-churnzero {your question}`
- Totango platform questions → `/sales-totango {your question}`
- NPS/CSAT/CES survey methodology → `/sales-customer-feedback {your question}`
- Ecommerce visitor identity/retention → `/sales-retention {your question}`
- In-app messaging for onboarding → `/sales-in-app-messaging {your question}`
- Enterprise digital adoption (Whatfix) → `/sales-whatfix {your question}`
- CRM data quality for CS → `/sales-data-hygiene {your question}`

Otherwise, answer directly using the strategy guidance below.

## Step 3 — Customer success strategy

### Health score design

**The 4-metric framework** (start here, expand later):

| Category | What to measure | Signal type | Example indicators |
|---|---|---|---|
| **Product usage** | Are they using the product? | Leading | DAU/MAU ratio, key feature adoption, login frequency |
| **Engagement** | Are they talking to you? | Leading | Email opens, meeting attendance, support interactions |
| **Outcomes** | Are they getting value? | Lagging | Goal completion, ROI metrics, time-to-value |
| **Sentiment** | How do they feel? | Lagging | NPS score, CSAT trend, champion engagement |

**Weighting guidelines:**
- Weight product usage highest (40-50%) — it's the strongest churn predictor
- Don't weight NPS above 15-20% — it's a lagging indicator
- Adjust weights by segment — enterprise health depends more on champion engagement, PLG depends more on usage
- Don't change weights for 6-10 months after initial setup — you need stable data to validate

**Scoring model:**
- Use a 0-100 or 0-10 composite score
- Define thresholds: Green (healthy), Yellow (at-risk), Red (critical)
- Set thresholds based on actual churn data, not gut feel — run a retroactive analysis

### Churn prevention

**Early warning signals (by priority):**
1. **Champion leaves** — the single strongest churn predictor. Track job changes via LinkedIn/enrichment tools.
2. **Usage decline** — 20%+ drop in key feature usage over 2-4 weeks
3. **Support escalations** — increasing ticket volume or severity
4. **Engagement drop** — missing QBRs, not responding to emails, skipping training
5. **Contract/billing signals** — late payments, downgrade requests, procurement inquiries

**Response playbook by signal:**
| Signal | Response | Timeline |
|---|---|---|
| Champion left | Executive outreach + new champion identification | Within 48 hours |
| Usage declined 20%+ | CSM call + usage review + retraining offer | Within 1 week |
| Health score dropped to Yellow | Check-in email + value reaffirmation | Within 3 days |
| Health score dropped to Red | Executive sponsor escalation + save plan | Within 24 hours |
| Renewal < 90 days + Red health | Save team assembled (CS + Sales + Exec) | Immediately |

### Customer onboarding

**Time-to-value framework:**
1. **Define "first value"** — what's the moment the customer says "this is working"? Map it.
2. **Milestone-based progression** — don't use time-based milestones ("Week 2: do X"). Use outcome-based: "Complete when customer has sent their first campaign."
3. **Track onboarding health separately** — a new customer's health score is meaningless until they've activated. Use project completion % instead.

**Common onboarding stalls and fixes:**
- **Data migration stuck**: Offer white-glove migration for high-ACV accounts; self-serve import tools for low-ACV
- **Champion too busy**: Identify 2-3 stakeholders during kickoff, not just the champion
- **Technical blockers**: Engineering liaison on standby for first 30 days
- **No executive sponsor**: Get exec buy-in during handoff from sales

### Expansion revenue

**Expansion triggers:**
- Usage approaching plan limits (seats, API calls, storage)
- New department or team adopting the product
- Customer asking about features on higher tier
- Champion promoted (now has budget authority)
- Company raised funding or had strong earnings

**Expansion playbook:**
1. Identify the trigger signal (automated via CS platform or manual)
2. CSM validates the opportunity is real (not just a data blip)
3. Warm handoff to AE/AM with context package (usage data, stakeholder map, recommended package)
4. Joint call: CSM provides continuity, AE handles commercial

### CS platform comparison

| Platform | Best for | Pricing | Key strength |
|---|---|---|---|
| **Vitally** | Mid-market B2B SaaS, fast setup | Request pricing (3 tiers) | Modern UI, fast time-to-value, AI copilot |
| **Gainsight** | Enterprise, complex orgs | ~$30K+/year | Deepest feature set, Gartner #1 Leader |
| **ChurnZero** | Mid-market, real-time analytics | Custom | Customer Monitoring score (9.2/10), in-app engagement |
| **Totango** | Enterprise, quick implementation | ~$50K+/year | Modular SuccessBLOCs, quick deploy |
| **Custify** | SMB-mid, affordable | From ~$999/mo | Good value, lifecycle-focused |
| **Planhat** | Data-heavy teams | Custom | Strong data modeling, flexible health scores |

**Decision framework:**
- **< 50 customers, < $5K ACV**: Spreadsheets + CRM is fine. Don't buy a CS platform yet.
- **50-500 customers, $5-50K ACV**: Vitally or ChurnZero — fast setup, good mid-market fit
- **500+ customers, $50K+ ACV**: Gainsight or Totango — enterprise features, complex org support
- **PLG / tech-touch**: Vitally (Tech-Touch plan) or ChurnZero — automation-first design

### CS metrics

| Metric | Formula | Benchmark (B2B SaaS) | Why it matters |
|---|---|---|---|
| **NRR** (Net Revenue Retention) | (Start MRR + expansion - contraction - churn) / Start MRR | 100-120% | The single best CS metric — >100% means you grow even without new customers |
| **GRR** (Gross Revenue Retention) | (Start MRR - contraction - churn) / Start MRR | 85-95% | Shows retention without expansion masking churn |
| **Logo retention** | (Customers end - new) / Customers start | 85-95% | Raw customer count retention |
| **Time-to-value** | Days from contract signed to first value milestone | 14-60 days | Shorter = better retention + expansion |
| **CSAT / NPS** | Survey-based | NPS 30-50 | Sentiment indicator, not a target |

## Step 4 — Actionable guidance

Focus on the user's specific situation. If you discover a tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about CS metrics and platform capabilities that evolve quickly.*

- **Health scores are not a goal.** "Improve our health score" is meaningless. Health scores are diagnostic — fix the underlying drivers (usage, engagement, outcomes) and the score follows.
- **Don't automate empathy.** Automated check-ins are fine for tech-touch. For high-touch accounts, a human CSM call always outperforms a template email when health drops.
- **NRR masks churn.** A company with 130% NRR but 75% GRR is growing on the backs of a few expanding accounts while bleeding customers. Track both.
- **CS platforms need dedicated setup time.** Vitally is ~2-4 weeks. Gainsight is ~2-6 months. Budget accordingly.
- **Champion tracking is the most underrated CS activity.** Most churn happens 3-6 months after a champion leaves. Build a process to detect and respond to champion departures.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-vitally` — Vitally platform help: Health Scores, Playbooks, Projects, API, integrations. Install: `npx skills add sales-skills/sales --skills sales-vitally`
- `/sales-planhat` — Planhat platform help: Health Scores, Revenue Management, CRM Sync, Automation, MCP Server, API. Install: `npx skills add sales-skills/sales --skills sales-planhat`
- `/sales-churnzero` — ChurnZero platform help: Health Scores, Plays, Journeys, Renewal Hub, In-App WalkThroughs, Surveys, AI Agents, API. Install: `npx skills add sales-skills/sales --skills sales-churnzero`
- `/sales-gainsight` — Gainsight platform help: CS health scores, CTAs, playbooks, success plans, Journey Orchestrator, PX, Staircase AI, Skilljar, API. Install: `npx skills add sales-skills/sales --skills sales-gainsight`
- `/sales-customer-feedback` — NPS, CSAT, CES, VoC program design — survey methodology, response rates, closed-loop feedback. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-in-app-messaging` — In-app messages for onboarding tours, feature announcements, NPS surveys. Install: `npx skills add sales-skills/sales --skills sales-in-app-messaging`
- `/sales-totango` — Totango platform help: SuccessBLOCs, SuccessPlays, Health Scores, Customer Data Hub, Unison AI, Catalyst, API. Install: `npx skills add sales-skills/sales --skills sales-totango`
- `/sales-coaching` — Sales-to-CS handoff, coaching frameworks, onboarding reps. Install: `npx skills add sales-skills/sales --skills sales-coaching`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building a health score from scratch

**User**: "I'm a B2B SaaS with 200 customers, $20K ACV. I have no health scoring — where do I start?"

**Approach**: Start with the 4-metric framework. Pull product usage from Mixpanel/Amplitude (DAU/MAU ratio, key feature adoption), engagement from CRM (email opens, meeting attendance), outcomes from your product (goal completion), and sentiment from NPS surveys. Weight usage at 40%, engagement at 25%, outcomes at 25%, sentiment at 10%. Set initial thresholds: Green > 70, Yellow 40-70, Red < 40. Don't change weights for 6 months. After 6 months, run a retroactive analysis — did Red accounts actually churn? Adjust thresholds based on real data.

### Example 2: Churn spiked after a product change

**User**: "We shipped a major UI redesign last quarter and churn doubled. How do we recover?"

**Approach**: Segment churn by cohort — are churners concentrated in accounts that relied on the old UI heavily (power users) or across the board? Pull feature usage data pre/post redesign to identify which workflows broke. For active at-risk accounts: send a CSM-led re-onboarding invitation focused on the new workflows. For recently churned: reach out with a "we heard you" campaign offering guided migration + a concession. Long-term: implement a beta program for major changes so power users have transition time.

### Example 3: Choosing between Vitally and Gainsight

**User**: "We're 300 customers, $30K ACV, 5-person CS team. Vitally or Gainsight?"

**Approach**: At 300 customers and $30K ACV, you're solidly mid-market. Vitally is purpose-built for this — faster setup (2-4 weeks vs 2-6 months for Gainsight), modern UI that CSMs actually enjoy using, and the AI copilot adds immediate value for call prep and summaries. Gainsight has deeper features but most mid-market teams don't use them and end up paying for complexity they don't need. Recommendation: start with Vitally, evaluate Gainsight when you cross 1000+ accounts or need complex org hierarchy support. Request demos from both and evaluate on: time-to-value, CSM adoption (will your team actually use it?), and total cost including implementation.

## Troubleshooting

### Health scores don't correlate with actual churn

- **Retroactive analysis.** Pull 12 months of health score data and actual churn events. If Red accounts didn't churn and Green accounts did, your indicators are wrong.
- **Check data freshness.** If product usage data syncs daily but health scores update weekly, you're always behind. Match cadences.
- **Segment your model.** Enterprise accounts churn differently than SMB — a single health model may not work across segments.

### Onboarding is taking too long

- **Map the critical path.** Identify the 3-5 steps between "signed contract" and "first value moment." Everything else is optional.
- **Identify the bottleneck.** Is it data migration? Internal approvals? Training? Technical setup? Each has a different fix.
- **Set a time-to-value SLA.** "90% of customers reach first value within 14 days." Measure and report on it. What gets measured gets managed.

### CS team is reactive, not proactive

- **Automate the signal detection.** Use a CS platform (Vitally, Gainsight, ChurnZero) to surface at-risk accounts automatically instead of relying on CSMs to check manually.
- **Create a daily priority view.** Each CSM should start the day with a ranked list of accounts needing attention, ordered by health score and renewal date.
- **Ring-fence proactive time.** Block 2-3 hours daily for outreach to Yellow/Red accounts. If CSMs are 100% reactive (firefighting), no tool will fix it — it's a capacity problem.
