---
name: sales-forecast
description: "Build and validate revenue forecasts with pipeline coverage and gap analysis. Use when forecasting revenue, validating a commit, analyzing pipeline coverage, preparing for a forecast call, doing gap analysis, calculating weighted pipeline, or reviewing deal confidence levels."
argument-hint: "[describe scope, time period, known numbers, and primary concern]"
---

# Build a Revenue Forecast

Help the user build and validate a revenue forecast — from category modeling through pipeline coverage analysis, deal-level inspection, and gap planning.

## Step 1 — Gather context

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

*Win probabilities are defaults — adjust based on the user's historical data if available.*

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
