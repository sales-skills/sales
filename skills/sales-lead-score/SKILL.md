---
name: sales-lead-score
description: "Design, weight, and tune a lead scoring model for your sales funnel. Use when building a lead scoring system, defining MQL/SQL criteria, assigning point values to lead attributes, setting up scoring in your CRM or MAP, tuning conversion thresholds, or deciding which signals should trigger sales follow-up. Do NOT use for reading existing buying signals (use /sales-intent), building prospect lists (use /sales-prospect-list), or marketing-to-sales handoff process design (use /revops)."
argument-hint: "[describe your product, sales motion, and current funnel]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Design a Lead Scoring Model

Help the user design, weight, and tune a lead scoring model — from defining scoring dimensions and assigning point values through setting MQL/SQL thresholds and implementing in their tools. This skill is tool-agnostic and applies to any CRM (Salesforce, HubSpot), MAP (Marketo, Pardot), or enrichment provider (Apollo, ZoomInfo, Clearbit).

## Step 1 — Gather context

Ask the user:

1. **What do you sell?**
   - Product/service category
   - Approximate ACV (affects scoring complexity — $5K ACV needs simpler scoring than $100K ACV)

2. **What's your sales motion?**
   - A) Inbound-led — most leads come from marketing (content, ads, events)
   - B) Outbound-led — SDRs/BDRs source most leads
   - C) Product-led growth (PLG) — users sign up and self-serve, sales engages at usage thresholds
   - D) Hybrid — mix of inbound, outbound, and PLG
   - E) Channel/partner — leads come through partners

3. **What tools do you use?**
   - CRM: Salesforce, HubSpot, Pipedrive, other
   - MAP: Marketo, HubSpot, Pardot, ActiveCampaign, other
   - Enrichment: Apollo, ZoomInfo, Clearbit, other
   - Product analytics (for PLG): Amplitude, Mixpanel, Heap, Segment, other

4. **Current scoring situation?**
   - A) Starting from scratch — no scoring model exists
   - B) Have a model but it's not working (describe symptoms)
   - C) Have a basic model, want to improve it
   - D) Rebuilding after ICP change or new product launch

5. **What does your funnel look like today?**
   - Monthly lead volume (rough)
   - Current MQL → SQL conversion rate (if known)
   - Current SQL → closed-won rate (if known)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Define scoring dimensions

Build a scoring model across four dimensions. Default weights are a starting point — tune based on your sales motion.

### Dimension 1: Demographic fit (default 25%)

Score how well the individual matches your buyer persona.

| Attribute | High score | Medium score | Low/negative score |
|---|---|---|---|
| **Job title** | Exact ICP title match (e.g., VP Engineering) | Adjacent title (Director of Engineering, Head of Platform) | Unrelated title (HR Manager when selling to Engineering) |
| **Seniority** | Decision-maker level for your product | Influencer level | Too junior to buy or influence |
| **Department** | Primary buying department | Adjacent department | Unrelated department |
| **Job function** | Direct match to problem you solve | Related function | No relevance |

**Example point values** (25 points max):
- Title exact match: 10 pts | Adjacent: 5 pts | No match: 0 pts
- Seniority match: 8 pts | Adjacent: 4 pts | Too junior: 0 pts
- Department match: 7 pts | Adjacent: 3 pts | Unrelated: 0 pts

### Dimension 2: Firmographic fit (default 25%)

Score how well the company matches your ICP.

| Attribute | High score | Medium score | Low/negative score |
|---|---|---|---|
| **Company size** | Sweet spot (e.g., 100-500 employees) | Adjacent range (50-100 or 500-1000) | Way outside range |
| **Industry** | Primary target industry | Adjacent industry | Industry you don't serve |
| **Revenue** | Revenue range that matches your pricing | Adjacent range | Can't afford your product |
| **Geography** | Primary market | Serviceable market | Unsupported region |
| **Tech stack** | Uses complementary technology | Neutral tech stack | Uses competing product (could be positive for displacement) |

**Example point values** (25 points max):
- Company size sweet spot: 8 pts | Adjacent: 4 pts | Outside: 0 pts
- Industry match: 7 pts | Adjacent: 3 pts | No match: 0 pts
- Revenue fit: 5 pts | Adjacent: 2 pts | Outside: 0 pts
- Geography: 3 pts | Serviceable: 1 pt | Unsupported: 0 pts
- Tech stack fit: 2 pts

### Dimension 3: Behavioral signals (default 30%)

Score what the lead is doing — this is the most predictive dimension for most teams.

| Signal | Points | Decay |
|---|---|---|
| **Requested demo/trial** | 15 pts | None — this is a hard conversion event |
| **Pricing page visit** | 10 pts | Decays to 5 after 14 days |
| **Multiple website visits (3+ in 7 days)** | 8 pts | Decays to 4 after 14 days |
| **Content download (ebook, whitepaper)** | 5 pts | Decays to 2 after 30 days |
| **Email engagement (open + click)** | 3 pts per engagement | Decays to 0 after 30 days |
| **Webinar/event attendance** | 8 pts | Decays to 4 after 30 days |
| **Intent data — researching your category** | 10 pts | Decays to 5 after 14 days (intent is perishable) |
| **G2/review site comparison views** | 8 pts | Decays to 4 after 14 days |

**For PLG/product-led motions**, add product usage signals:

| Signal | Points | Decay |
|---|---|---|
| **Signed up for free tier/trial** | 10 pts | None |
| **Completed onboarding** | 8 pts | None |
| **Hit usage threshold (e.g., 100 API calls, 5 team members)** | 15 pts | None |
| **Invited team members** | 10 pts | None |
| **Used premium feature (paywall hit)** | 12 pts | Decays to 6 after 30 days |
| **Daily active usage (5+ days in last 14)** | 10 pts | Rolling — recalculated weekly |

### Dimension 4: Timing signals (default 20%)

Score recency and urgency signals.

| Signal | Points | Decay |
|---|---|---|
| **New in role (<90 days)** | 10 pts | Decays to 5 after 90 days, 0 after 180 |
| **Recent funding** | 8 pts | Decays to 4 after 90 days |
| **Hiring for roles your product supports** | 6 pts | Decays to 3 after 30 days (job postings are time-sensitive) |
| **Company growth (20%+ headcount in 6 months)** | 5 pts | Decays to 2 after 90 days |
| **Competitor contract renewal window** | 10 pts | Decays to 0 after the window passes |

### Tuning weights by sales motion

| Motion | Demographic | Firmographic | Behavioral | Timing |
|---|---|---|---|---|
| **Inbound-led** | 20% | 20% | 40% | 20% |
| **Outbound-led** | 25% | 30% | 20% | 25% |
| **PLG** | 15% | 15% | 50% | 20% |
| **Enterprise/ABM** | 25% | 25% | 25% | 25% |

## Step 3 — Set thresholds & stages

### MQL/SQL threshold calibration

Start with these defaults, then tune based on conversion data:

| Threshold | Default | What it triggers |
|---|---|---|
| **MQL** (Marketing Qualified Lead) | Top 20% of scored leads | Marketing nurture intensifies, SDR notification |
| **SQL** (Sales Qualified Lead) | Top 5% of scored leads | SDR outreach, AE handoff, or sales follow-up |
| **PQL** (Product Qualified Lead, PLG only) | Usage threshold + firmographic fit | Sales outreach to active free users |

**How to set initial thresholds**:
1. Score your last 100 closed-won deals retroactively
2. Find the median score — this is roughly your SQL threshold
3. Set MQL at 60-70% of the SQL threshold
4. Adjust after 30 days of live data

### Scoring decay rules

Behavioral signals lose relevance over time. Implement decay to prevent score inflation:

- **Fast decay (7-14 days)**: Intent data, pricing page visits, comparison shopping
- **Medium decay (30 days)**: Content downloads, email engagement, webinar attendance
- **Slow decay (90 days)**: Job changes, funding events, hiring signals
- **No decay**: Demo requests, trial signups, firmographic/demographic fit

### Negative scoring

Subtract points for disqualifying signals:

| Signal | Points |
|---|---|
| Unsubscribed from emails | -20 pts |
| Competitor employee | -50 pts (or auto-disqualify) |
| Student/educational email (.edu) | -30 pts |
| Personal email (gmail, yahoo) for B2B product | -10 pts |
| Job title contains "intern" or "student" | -20 pts |
| Company size way below minimum | -15 pts |
| Bounced email | -10 pts |
| Marked as "do not contact" | Auto-disqualify |

## Step 4 — Implementation guide

### HubSpot

1. Properties > Create a custom "Lead Score" number property
2. Workflows > Create scoring workflows that add/subtract points based on triggers
3. For behavioral scoring, use "Contact activity" triggers (page views, form fills, email clicks)
4. For decay, create time-based workflows that reduce scores after X days
5. Set MQL lifecycle stage change when score exceeds threshold

### Salesforce

1. Setup > Lead Scoring (if using Einstein Lead Scoring) or custom fields + Process Builder/Flow
2. Create a "Lead Score" number field on Lead and Contact objects
3. Use Flow Builder to increment/decrement based on field changes and activities
4. For behavioral scoring, integrate with your MAP (Marketo, Pardot) which tracks engagement
5. Create assignment rules that route SQLs to the right rep

### Marketo

1. Admin > Scoring > New Scoring Model
2. Define demographic score (person attributes) and behavioral score (activities) separately
3. Set up smart campaigns that add/subtract points for each trigger
4. Configure scoring decay with scheduled batch campaigns
5. Sync score to Salesforce for routing and visibility

### Apollo

1. Use Apollo's built-in lead scoring (Settings > Scoring) for basic ICP fit scoring
2. For behavioral scoring, supplement with your MAP — Apollo's native scoring is primarily demographic/firmographic
3. Use Apollo's intent data as an input to behavioral scoring in your MAP
4. Export scored leads to your CRM for routing

#### In GetResponse
- **Contact scoring** (Marketer plan+ required): Assign points based on email engagement (opens, clicks), page visits (requires tracking snippet), purchases, tag additions, and custom field values. Score thresholds trigger automation actions.
- **Scoring rules**: Configure in Settings > Contact Scoring. Define point values for each action (e.g., +10 for open, +20 for click, +50 for purchase, -10 for 30-day inactivity). Rules recalculate periodically.
- **Automation triggers**: Use score changes as triggers in visual automation workflows — when score crosses a threshold, send a sales notification, add to a high-value segment, or trigger a targeted sequence.
- **Segmentation by score**: Create dynamic segments filtering by score range (e.g., "Hot leads: score > 50"). Use for targeted newsletters or automation entry.
- **Limitation**: Scoring is not available on Free or Starter plans. No built-in decay mechanism — build decay into automation workflows with scheduled score reductions.
- **Best practice**: Start with two dimensions — engagement scoring (opens, clicks, page visits) and e-commerce scoring (purchases, cart events). Use tag-based manual scoring as a workaround on Starter plan.

### Testing the model

Before going live:
1. **Backtest**: Score your last 6 months of leads retroactively. Check: do closed-won deals score higher than closed-lost?
2. **Threshold check**: At your proposed MQL threshold, what % of leads qualify? (Target: 15-25%)
3. **False positive check**: Sample 20 leads above MQL threshold — would a rep actually want to call them?
4. **False negative check**: Sample 20 closed-won deals — did they score above MQL before they closed?

## Step 5 — Tuning & maintenance

### Monthly review cadence

Every month, review:
1. **Conversion rates by score band**: Are high-score leads actually converting better?
2. **MQL → SQL conversion**: If below 30%, your MQL threshold is too low (too many bad MQLs)
3. **SQL → opportunity rate**: If below 50%, your SQL threshold is too low
4. **Score distribution**: Is the curve healthy or are most leads clustered at one score?
5. **Sales feedback**: Are reps ignoring MQLs? If so, the model isn't surfacing quality leads.

### Weight adjustment methodology

1. Export all leads from last 90 days with their scores and outcomes (converted vs not)
2. For each scoring dimension, calculate conversion rate by score band
3. If a dimension has no correlation with conversion → reduce its weight
4. If a dimension strongly correlates → increase its weight
5. Re-normalize so total weights = 100%

### Common failure modes

| Symptom | Cause | Fix |
|---|---|---|
| Too many MQLs, sales ignores them | MQL threshold too low | Raise threshold, add more behavioral weight |
| Too few MQLs, pipeline starving | Threshold too high or scoring too restrictive | Lower threshold, check if firmographic filters are too narrow |
| High-score leads don't convert | Demographic fit overweighted, behavioral underweighted | Increase behavioral weight, add decay to stale signals |
| Score inflation over time | No decay rules, points only go up | Implement decay on all behavioral signals |
| Model works for inbound, not outbound | Model only has behavioral signals | Add firmographic and timing dimensions |
| Sales and marketing disagree on MQL definition | Model built without sales input | Co-create thresholds with sales leadership, review monthly |

### Quarterly recalibration

Every quarter:
1. Re-run the backtest with latest data
2. Check if ICP has shifted (new verticals, new personas)
3. Review and update point values based on conversion data
4. Add/remove scoring signals based on new data sources
5. Validate thresholds still align with funnel capacity

### Platform-specific lead scoring

#### In ActiveCampaign
- **Contact scoring**: Assign points based on email engagement (opens, clicks, replies), site visits, form submissions, tag additions, list membership, custom field values, and event tracking. Create multiple scoring models for different purposes (e.g., engagement score vs. fit score). Available on Plus+ plans.
- **Deal scoring**: Separate scoring for deals in your CRM pipeline — score based on deal value, stage, age, activity, and custom fields. Win probability predictions available on Pro+ plans.
- **Automation-based scoring**: Use automations to add/subtract points when contacts take actions. Example: +10 for visiting pricing page, +5 for opening email, -15 for no engagement in 30 days. Automations can also trigger when scores cross thresholds (e.g., score > 50 → notify sales, add to "hot leads" list).
- **Score decay**: Build decay into automations — schedule periodic score reductions for contacts who haven't engaged recently. No built-in automatic decay, so you must create "subtract points" automations on time-based triggers.
- **Threshold actions**: When a contact crosses a score threshold, automations can: send an internal notification to sales, add the contact to a CRM pipeline as a deal, move them to a new list, or trigger a targeted email sequence.
- **Segment by score**: Create segments based on score ranges (e.g., "Hot leads: score > 80", "Warm: 40-80", "Cold: < 40"). Use these for targeted campaigns and CRM prioritization.
- **Best practice**: Start with two scoring models — one for engagement (behavioral) and one for fit (demographic/firmographic). Use engagement score for sales follow-up triggers and fit score for segmentation. Review score distributions monthly — if most contacts cluster at similar scores, your model needs more differentiation.

## Gotchas

- **Don't weight demographics too heavily.** Claude defaults to giving 50%+ weight to title/seniority because it's easy to match. But behavioral signals (what they're doing) are more predictive than demographics (who they are). Start with at least 30% behavioral weight.
- **Don't skip negative scoring.** A lead can have a perfect title at a perfect company but be a student, a competitor, or already unsubscribed. Negative scores prevent false positives that waste sales time and damage your credibility with the sales team.
- **Don't set static thresholds and forget them.** Scoring models drift as your ICP evolves and market conditions change. A model that was calibrated 6 months ago may be surfacing the wrong leads today. Review and recalibrate quarterly using actual conversion data.
- **Don't build the model in isolation.** Sales and marketing must agree on MQL/SQL definitions. A scoring model that marketing builds without sales input leads to "bad MQLs" complaints and erodes trust. Co-create with sales leadership and review together monthly.

## Related skills

- `/sales-intent` — Read buying signals that feed into your scoring model
- `/sales-prospect-list` — Build prospect lists to score
- `/sales-enrich` — Enrich leads with the demographic/firmographic data you need to score
- `/revops` — Design the broader marketing-to-sales handoff process around your scoring model
- `/sales-apollo` — Set up Apollo's native scoring features
- `/sales-activecampaign` — ActiveCampaign platform help (contact scoring, deal scoring, automation-based scoring with threshold triggers)
- `/sales-getresponse` — GetResponse platform help (contact scoring, automation-triggered scoring, engagement-based scoring)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Inbound B2B SaaS scoring model
**User says**: "Help me build a lead scoring model for our B2B SaaS product. We're inbound-heavy, $50K ACV."
**Skill does**:
1. Designs a 4-dimension model weighted for inbound (40% behavioral, 20% demographic, 20% firmographic, 20% timing)
2. Assigns point values for each attribute with specific thresholds
3. Sets MQL at ~60 points, SQL at ~85 points
4. Provides HubSpot/Salesforce implementation steps
5. Creates a testing and tuning plan
**Result**: Full scoring model with calibrated thresholds, implementation guide, and monthly review cadence

### Example 2: Fixing a broken scoring model
**User says**: "Our MQL-to-SQL conversion rate is 8%. Our scoring model isn't working."
**Skill does**:
1. Diagnoses likely causes (threshold too low, demographic overweighting, no decay)
2. Recommends scoring audit — backtest recent leads against outcomes
3. Proposes weight adjustments (increase behavioral, decrease demographic)
4. Suggests threshold recalibration based on conversion data
5. Creates a 30-day improvement plan with specific metrics to track
**Result**: Diagnosis of scoring model issues with specific fixes and a recalibration plan

### Example 3: PLG product usage scoring
**User says**: "We're a PLG company. How should product usage signals factor into lead scoring?"
**Skill does**:
1. Designs a behavioral-heavy model (50% behavioral including product signals)
2. Defines PQL criteria based on usage thresholds (API calls, team members, feature adoption)
3. Integrates product analytics events as scoring signals
4. Sets PQL threshold separately from MQL/SQL
5. Designs handoff trigger from product usage → sales outreach
**Result**: PLG-adapted scoring model with product event scoring, PQL definition, and sales handoff triggers

## Troubleshooting

### Sales says "these MQLs are garbage"
**Cause**: MQL threshold is too low, or the model overweights demographic fit without behavioral validation
**Solution**: Review the last 50 MQLs that sales rejected. Look for patterns — are they the wrong persona? Right persona but not engaged? Adjust the dimension that's causing false positives. Often the fix is adding a minimum behavioral score requirement on top of the overall threshold.

### Score inflation — everyone is an MQL
**Cause**: No decay rules, points only accumulate, never decrease
**Solution**: Implement decay on all behavioral signals (14-day for intent, 30-day for content, 90-day for timing). Run a one-time score recalculation after implementing decay.

### Model performs differently for different segments
**Cause**: One-size-fits-all model doesn't account for segment-specific buying patterns
**Solution**: Consider separate scoring models for distinct segments (enterprise vs SMB, inbound vs outbound). At minimum, adjust firmographic fit scoring to not penalize enterprise leads for different engagement patterns (they visit fewer pages but have higher deal sizes).
