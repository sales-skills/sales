---
name: sales-lead-routing
description: "Designs and implement lead routing and assignment rules — round-robin, territory-based, score-based, and account-based models. Use when leads going to the wrong reps, response time too slow, reps arguing over territory ownership, lead queue backing up, or routing rules breaking as the team grows. Do NOT use for lead scoring model design (use /sales-lead-score), CRM platform configuration (use /sales-apollo or /sales-salesloft), or marketing-to-sales handoff process (use /revops)."
argument-hint: "[describe your team structure, lead sources, and current routing]"
license: MIT
version: 1.0.0
tags: [sales, lead-routing, assignment, round-robin]
---
# Design Lead Routing Rules

Help the user design and implement lead routing — from choosing a routing model and defining assignment rules through platform implementation, speed-to-lead optimization, and capacity management. This skill is tool-agnostic and covers Salesforce, HubSpot, Salesloft, Apollo, and standalone routing tools.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your team structure?**
   - How many reps (SDRs, AEs, or both)?
   - Are reps specialized (by segment, territory, vertical) or generalist?
   - Any tiered seniority (senior reps vs junior)?

2. **Where do leads come from?**
   - A) Inbound (website forms, content, events)
   - B) Outbound (SDR-sourced, cold outbound)
   - C) Product-led (signups, trials, PQLs)
   - D) Partner/channel
   - E) Mix — describe

3. **How are leads routed today?**
   - A) Manual assignment (manager assigns)
   - B) Round-robin
   - C) Territory-based
   - D) CRM automation rules
   - E) No system — first come first served
   - F) Starting from scratch

4. **What tools do you use?**
   - CRM: Salesforce, HubSpot, Pipedrive, other
   - Sales engagement: Salesloft, Apollo, Mailshake, other
   - Routing tools: LeanData, Chili Piper, Distributely, none

5. **What's your lead volume?** (weekly or monthly inbound leads, rough estimate)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Routing model framework

Choose the right routing model based on team structure and lead characteristics.

### Decision matrix

| Model | Best for | Team size | Complexity | Speed-to-lead |
|-------|----------|-----------|------------|----------------|
| **Round-robin** | Equal distribution, generalist teams | Any | Low | Fast |
| **Territory-based** | Geographic or named-account specialization | 4+ reps | Medium | Fast |
| **Score-based** | Matching lead quality to rep skill | 6+ reps | High | Medium |
| **Account-based** | Named accounts with assigned owners | Any with ABM | Medium | Fast (if owner exists) |
| **Hybrid** | Complex orgs with multiple segments | 10+ reps | High | Varies |

### Round-robin
- **How it works**: Leads assigned in rotation to each rep equally
- **Variants**: Simple (A→B→C→A), weighted (A gets 40%, B gets 30%, C gets 30%), availability-aware (skip reps who are OOO)
- **Best for**: Small teams, equal lead quality, no specialization needed
- **Limitation**: Doesn't account for rep skill, lead quality, or territory

### Territory-based
- **How it works**: Leads assigned based on geographic region, industry vertical, or company size segment
- **Territory types**: Geographic (NA West, NA East, EMEA, APAC), vertical (Healthcare, FinTech, SaaS), segment (SMB, Mid-market, Enterprise)
- **Best for**: Teams with regional/vertical expertise, large enough to specialize
- **Limitation**: Uneven lead distribution if territories have different volumes

### Score-based
- **How it works**: High-score leads go to senior/experienced reps, lower-score leads go to SDRs for qualification
- **Tiers**: Hot (80+ score → senior AE), warm (50-79 → standard AE), cold (30-49 → SDR), below 30 → nurture/discard
- **Fallback rules**: Route unscored leads (missing data = no score) to SDRs for manual qualification. When a tier's rep pool is at capacity, overflow to the next tier down (e.g., hot leads overflow to standard AE pool if all senior AEs are maxed). Set per-rep capacity caps (e.g., max 30 leads/week) and auto-redistribute when a rep hits their cap.
- **Best for**: Teams with lead scoring in place (see `/sales-lead-score`), tiered rep experience
- **Limitation**: Requires a working scoring model; bad scores = bad routing

### Account-based
- **How it works**: Leads matched to existing account owners. Net-new accounts routed via other model.
- **Logic**: Check if lead's company matches an existing account → assign to account owner. If no match → fallback to round-robin or territory.
- **Best for**: ABM teams, named account strategies, preventing rep conflicts
- **Limitation**: Requires clean account data and dedup

## Step 3 — Design routing rules

### Priority waterfall

Build routing rules as a priority waterfall — the first matching rule wins:

| Priority | Rule | Example |
|----------|------|---------|
| 1 | **Existing account match** | Lead's company matches an owned account → route to account owner |
| 2 | **Named account list** | Company on target account list → route to assigned AE |
| 3 | **Score threshold** | Score ≥ 80 → route to senior AE pool |
| 4 | **Territory match** | Geography/segment matches territory → route to territory owner |
| 5 | **Round-robin fallback** | No other rule matched → round-robin across available reps |

### Speed-to-lead SLAs

Speed-to-lead is the most important metric in routing. Response time directly impacts conversion:

| Response time | Conversion impact |
|---------------|-------------------|
| < 5 minutes | 8x more likely to qualify vs 30 min |
| 5-30 minutes | Baseline |
| 30-60 minutes | 50% drop in qualification rate |
| > 1 hour | 80%+ drop |
| > 24 hours | Essentially dead — better to re-nurture |

**SLA recommendations by lead type**:
- Inbound demo request: < 5 minutes
- Inbound content download: < 1 hour
- PQL (product-led): < 15 minutes
- Outbound response/reply: < 1 hour
- Partner referral: < 30 minutes

### Overflow and fallback rules

What happens when the assigned rep can't respond in time:

| Scenario | Fallback |
|----------|----------|
| Rep doesn't respond within SLA | Escalate to manager + reassign to next available |
| Rep is OOO | Skip in rotation, assign to backup |
| Territory owner at capacity | Overflow to adjacent territory or SDR pool |
| No account owner exists | Fall through to round-robin |

### Conflict resolution

- **Multiple reps claim same lead**: Account owner wins. If no account owner, first-touch attribution.
- **Lead matches multiple territories**: Primary territory wins (define primary in territory rules).
- **Existing customer, new contact**: Route to account owner, not round-robin.
- **Recycled/re-engaged lead**: Route back to original owner if still on team, otherwise round-robin.

## Step 4 — Platform implementation

### Salesforce
1. **Assignment Rules**: Setup > Lead Assignment Rules — define criteria and assign to users or queues
2. **Queues**: Create lead queues for pools (SDR pool, AE pool, territory queues)
3. **Flow Builder**: For complex logic — score-based routing, account matching, SLA escalation
4. **Matching rules**: Setup > Duplicate Management > Matching Rules — match leads to existing accounts
5. **Escalation rules**: Setup > Escalation Rules — auto-escalate if not contacted within SLA
6. **Third-party**: LeanData or Distributely for advanced routing with visual rule builders

### HubSpot
1. **Lead rotation**: Settings > Users & Teams > Lead Rotation — built-in round-robin
2. **Workflows**: Automation > Workflows — build if/then routing logic based on properties
3. **Contact owner assignment**: Use workflow actions to set owner based on territory, score, or account
4. **SLA monitoring**: Create workflow to reassign if owner doesn't log activity within X hours
5. **Third-party**: Chili Piper for real-time scheduling + routing from forms

### Salesloft
- **Rhythm routing**: Rhythm prioritizes actions for reps — configure routing via CRM sync
- **Cadence assignment**: Auto-import leads into cadences based on CRM assignment
- **Round-robin**: Not native — handle in CRM, sync assignment to Salesloft

### Apollo
- **Sequence assignment**: Assign contacts to sequences owned by specific reps
- **CRM sync**: Apollo respects CRM ownership — route in CRM, sync to Apollo
- **Lists**: Create filtered lists per rep/territory, assign sequences accordingly

## Step 5 — Measurement

### Key metrics

| Metric | Target | What it tells you |
|--------|--------|-------------------|
| **Speed-to-lead** | < 5 min (inbound demo), < 1 hr (other) | Are reps responding fast enough? |
| **Lead acceptance rate** | > 80% | Are reps accepting or rejecting assigned leads? Low acceptance = bad targeting or routing |
| **Conversion by route** | Compare across models | Which routing path converts best? Identifies if certain territories or tiers underperform |
| **Capacity utilization** | 70-90% per rep | Are reps overloaded or underutilized? Adjust weights or territories |
| **Cherry-picking rate** | < 10% | Are reps ignoring low-score leads? May need to enforce SLAs or adjust scoring |

### Optimization cadence
- **Weekly**: Check speed-to-lead and acceptance rate
- **Monthly**: Review conversion by route, adjust weights or territories
- **Quarterly**: Full routing model review — does the model still match team structure and lead sources?

## Gotchas

- **Don't route without enrichment.** If leads arrive with just an email (e.g., from a form), enrich with company data before routing. Without company/title data, territory and score-based routing can't work. Use `/sales-enrich` to fill in gaps before routing.
- **Don't ignore speed-to-lead.** A perfect routing model with slow response is worse than a simple round-robin with fast response. If you can only optimize one thing, optimize speed-to-lead. The data is clear: 5 minutes vs 30 minutes is an 8x difference in qualification.
- **Don't overcomplicate before simple works.** Start with round-robin. Only add territory or score-based routing when you have data showing it improves conversion. Complexity increases maintenance burden and failure modes.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-lead-score` — Design the scoring model that feeds score-based routing
- `/sales-enrich` — Enrich leads with company/title data needed for routing rules
- `/sales-prospect-list` — Build prospect lists with pre-segmented territories
- `/revops` — Design the broader marketing-to-sales handoff process
- `/sales-cadence` — Design cadences for different route segments
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Round-robin for growing team
**User says**: "I have 8 SDRs and about 200 inbound leads per week. How should I route them?"
**Skill does**:
1. Recommends weighted round-robin as baseline (equal distribution initially)
2. Designs SLA rules: demo requests < 5 min, content leads < 1 hour
3. Adds overflow rules for when reps are at capacity or OOO
4. Provides HubSpot/Salesforce implementation steps
**Result**: Round-robin routing with SLAs and overflow handling

### Example 2: Territory routing
**User says**: "I need territory routing for 4 AEs: NA West, NA East, EMEA, and APAC."
**Skill does**:
1. Defines territory rules by geography (country/state mapping to each territory)
2. Handles named accounts that override geography
3. Adds fallback for leads with unknown geography
4. Provides CRM implementation steps
**Result**: Territory routing with named-account override and geographic fallback

### Example 3: Score-based tiered routing
**User says**: "I want to route high-score leads to senior reps and low-score leads to SDRs. We use HubSpot."
**Skill does**:
1. Defines score thresholds for tiered routing (hot/warm/cold)
2. Maps tiers to rep pools (senior AEs, standard AEs, SDRs)
3. Adds fallback for unscored leads
4. Provides HubSpot workflow implementation steps
**Result**: Tiered routing with score thresholds, rep pool assignment, and fallback rules

## Troubleshooting

### Leads sitting unworked
**Symptom**: Leads assigned but not contacted within SLA
**Cause**: Rep overload, no SLA enforcement, or leads assigned during off-hours
**Solution**: Add escalation rules — if no activity within SLA, reassign to next available. Implement capacity caps per rep. Route based on business hours/timezone.

### Uneven distribution
**Symptom**: Some reps have 3x the leads of others
**Cause**: Territory imbalance, weighted round-robin misconfigured, or account-matching sending too many leads to one owner
**Solution**: Audit territory volumes monthly. Adjust weights to normalize. Add capacity caps to prevent any single rep from getting more than X leads/day.

### Rep conflicts over lead ownership
**Symptom**: Multiple reps claiming the same lead or account
**Cause**: No account-matching step in routing, or duplicate accounts in CRM
**Solution**: Add account-matching as the first step in routing waterfall. Deduplicate accounts in CRM. Establish clear rules: account owner always wins for existing accounts.
