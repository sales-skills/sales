---
name: sales-forecast
description: "Builds and validate revenue forecasts with pipeline coverage and gap analysis. Use when forecasting revenue, validating a commit, analyzing pipeline coverage, preparing for a forecast call, doing gap analysis, calculating weighted pipeline, or reviewing deal confidence levels. Do NOT use for individual deal analysis (use /sales-deal-inspect), portfolio pipeline management (use /sales-pipeline), or building outbound cadences (use /sales-cadence)."
argument-hint: "[describe scope, time period, known numbers, and primary concern]"
license: MIT
version: 1.0.0
tags: [sales, forecasting, pipeline, revenue]
---
# Build a Revenue Forecast

Help the user build and validate a revenue forecast — from category modeling through pipeline coverage analysis, deal-level inspection, and gap planning.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Scope:**
   - A) Individual rep forecast
   - B) Team / pod forecast
   - C) Regional forecast
   - D) Company-wide forecast

2. **Time period:**
   - Current quarter
   - Next quarter
   - Half / full year
   - Custom period

3. **What numbers do you have?** (provide what you know)
   - Quota / target
   - Closed-won so far this period
   - Commit (deals you're confident will close)
   - Best case (deals that could close with things going right)
   - Total open pipeline
   - Average sales cycle length
   - Historical win rate

4. **What's your primary concern?**
   - A) We're behind quota and need a gap plan
   - B) I need to validate my commit number
   - C) I need to present a forecast to leadership
   - D) Pipeline coverage feels thin
   - E) Too many deals are slipping from commit to best case
   - F) Other — describe it

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Forecast model

Build a forecast model table:

| Category | # Deals | Total Value | Win Probability | Weighted Value |
|----------|---------|-------------|-----------------|----------------|
| Closed Won | | | 100% | |
| Commit | | | 85-95% | |
| Best Case | | | 40-60% | |
| Pipeline (Stage 3+) | | | 15-30% | |
| Early Pipeline (Stage 1-2) | | | 5-10% | |
| **Upside** (not in pipeline yet) | | | 2-5% | |

*These are typical probability ranges — adjust based on the team's historical conversion data if available. Teams with strong qualification tend toward the higher end; teams early in building pipeline discipline should use the lower end.*

### Forecast summary

| Metric | Value |
|--------|-------|
| **Quota** | |
| **Closed Won** | |
| **Weighted forecast** (sum of weighted values) | |
| **Expected outcome** (most likely landing zone) | |
| **Gap to quota** | |
| **Coverage ratio** (total pipeline / remaining quota) | |
| **Commit coverage** (commit / remaining quota) | |

### Forecast scenarios
- **Worst case**: Closed Won + (Commit × 80%) — assumes some commit deals slip
- **Most likely**: Closed Won + (Commit × 90%) + (Best Case × 40%)
- **Best case**: Closed Won + (Commit × 95%) + (Best Case × 60%) + (Pipeline × 15%)

Present as a range: "Based on current pipeline, expect to land between $X (worst) and $Y (best), most likely around $Z."

## Step 3 — Pipeline coverage analysis

| Metric | Current | Benchmark | Status |
|--------|---------|-----------|--------|
| **Coverage ratio** (pipeline / quota) | | 3-4x for new business, 2-3x for expansion | Green/Yellow/Red |
| **Commit coverage** (commit / remaining gap) | | 1.0x+ means commit covers the gap | |
| **Average deal size** | | Compare to quota-required deal size | |
| **Average cycle length** | | Deals must have enough runway to close in period | |
| **Win rate** | | Historical vs. current period | |
| **Pipeline creation rate** | | $ created per week/month — is it accelerating or slowing? | |
| **Stage conversion rates** | | Stage 1→2, 2→3, 3→4, etc. — where are deals stalling? | |

### Coverage analysis rules
- **Coverage < 2x**: Critical — not enough pipeline to hit quota even optimistically. Immediate pipeline generation needed.
- **Coverage 2-3x**: Thin — likely to miss unless win rates are above average. Focus on deal acceleration and pipeline gen.
- **Coverage 3-4x**: Healthy for new business — focus on execution and deal quality.
- **Coverage 4x+**: Strong coverage — focus on deal progression and closing, not more pipeline.
- **Commit > remaining gap**: You have enough in commit to cover the gap. Focus shifts to deal execution and preventing slippage.
- **Deals closing after period end**: Flag any "commit" deals with close dates after the period ends — these aren't real commit.

## Step 4 — Deal-level inspection

For each deal in Commit and Best Case, create an inspection table:

| Deal | Value | Stage | Days in stage | Close date | Risk flags | Confidence |
|------|-------|-------|--------------|------------|-----------|------------|
| | | | | | | High/Med/Low |

### Risk flags to check
- Close date pushed more than once
- No activity in 14+ days
- Single-threaded (one contact)
- No compelling event
- In stage longer than 2x average
- Economic buyer not engaged
- Competitor mentioned but not addressed
- Budget not confirmed

### Recommendations per deal
For each deal, recommend one of:
- **Keep in Commit**: Strong deal, high confidence, clear path to close
- **Move to Best Case**: Has potential but too many open risks for commit
- **Move to Pipeline**: Significant unknowns — not ready for commit or best case
- **Pull in**: Deal could close faster than planned — what would accelerate it?
- **Push to next period**: Won't close this period — move out and plan accordingly
- **Qualify out**: Deal isn't real — remove from pipeline

## Step 5 — Gap plan

If there's a gap between the forecast and quota, build a plan to close it:

| Lever | Description | Potential value | Actions | Timeline |
|-------|-------------|----------------|---------|----------|
| **Pull-in** | Accelerate deals currently slated for next period | | Identify 2-3 deals that could close sooner with the right push (executive meeting, POC, special terms) | This week |
| **Accelerate stalls** | Reactivate stalled pipeline deals | | Re-engage with new value prop, bring in executive sponsor, offer assessment/workshop | 2 weeks |
| **Expansion** | Upsell/cross-sell existing customers | | Identify customers with low product adoption, recent growth, or upcoming renewal | 2-4 weeks |
| **New outbound** | Create new pipeline via outbound | | Blitz campaign to high-intent accounts, leverage trigger events (funding, hiring, tech changes) | 4-8 weeks |
| **Partner/referral** | Source deals through partners or referrals | | Activate partner relationships, request customer referrals, co-sell with tech partners | 2-6 weeks |

### For each lever, answer:
1. **How much can it realistically contribute?** (be conservative — gap plans are usually optimistic)
2. **What specific actions will you take this week?** (not "do more outbound" — specific companies, people, messages)
3. **Who owns it?** (rep, manager, SE, executive)
4. **When will you know if it's working?** (set a checkpoint date)

### Gap plan math
- **Gap**: Quota − (Closed Won + Weighted Commit + Weighted Best Case)
- **Gap plan target**: Gap × 1.5 (plan for more than you need, since not all levers will work)
- **Minimum viable gap close**: At least 50% of gap plan should come from Pull-in and Accelerate (fastest to materialize)

## Related skills

- `/sales-salesloft` — Salesloft Forecast module for submission workflows and AI-assisted predictions
- `/sales-deal-inspect` — Deep-dive on individual deals in your forecast
- `/sales-pipeline` — Portfolio-level pipeline management and deal prioritization
- `/sales-cadence` — Build outbound cadences for gap-plan pipeline generation
- `/sales-close` — Closing strategies for commit deals
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Gotchas

- **Don't use pipeline total without weighting by stage.** Claude will sometimes say "you have $2M in pipeline against a $1M quota, so you're covered." Raw pipeline total is meaningless — only weighted pipeline matters. Always apply stage-based win probabilities.
- **Don't assume historical win rates apply to the current quarter.** Win rates shift based on deal mix, market conditions, new competitors, and team changes. If the user provides historical rates, use them as a starting point but flag that current-quarter dynamics may differ.
- **Don't forget to account for slipped deals from last quarter.** Deals that pushed from last quarter inflate current-quarter pipeline but often have lower close probability (they already missed one deadline). Flag these and weight them more conservatively.
- **Don't ignore seasonality.** Q4 and fiscal year-end typically see higher close rates due to budget pressure. Q1 often sees longer cycles as budgets reset. Ask about the company's fiscal year when it matters.
- **Don't present a single forecast number without a range.** Always give worst/most likely/best case scenarios. A single number creates false precision and sets the user up for a bad forecast call.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Examples

### Example 1: Quarterly forecast build
**User says**: "Build my team's Q2 forecast. Quota is $2M, we've closed $800k, commit is $600k across 4 deals, best case is $400k, total pipeline is $1.8M, 6 weeks left."
**Skill does**:
1. Builds a forecast model with weighted values across all categories
2. Calculates coverage ratio (1.5x — flags as thin)
3. Presents worst/most likely/best case scenarios
4. Creates a gap plan with specific levers to close the gap
**Result**: Complete forecast ready for the leadership call, with a gap plan if needed

### Example 2: Commit validation
**User says**: "Validate my $500k commit — Deal A ($200k, negotiation, strong champion), Deal B ($150k, proposal, no EB meeting), Deal C ($150k, demo stage, verbal interest only)."
**Skill does**:
1. Inspects each deal against risk criteria
2. Recommends keeping Deal A in commit, moving Deal B to best case, moving Deal C to pipeline
3. Adjusts commit to $200-350k with reasoning
**Result**: Defensible commit number the rep can present to their manager

## Troubleshooting

### Don't have all the numbers
**Solution**: Start with what you know. The skill can build a useful forecast from just quota + closed-won + pipeline total. It will flag what's missing and estimate where possible. Even a rough forecast with assumptions stated is better than no forecast.

### Forecast keeps missing — always too optimistic
**Solution**: Apply stricter win probability weights. Most teams over-weight commit (use 85% not 95%) and best case (use 40% not 60%). Check for "commit creep" — deals that sit in commit for multiple forecast periods without closing. The deal-level inspection step catches these patterns.

### Gap plan feels unrealistic
**Solution**: Apply the 50% rule — at least half of gap plan value should come from pull-in and accelerate levers (fastest to materialize). New outbound takes 4-8 weeks to generate pipeline, so it won't help this quarter. Be conservative on each lever and plan for 1.5x the gap.
