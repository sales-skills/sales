---
name: sales-compete
description: "Run competitive displacement campaigns — find competitor customers, identify those ready to switch, and build targeted outreach with displacement-specific messaging. Use when targeting a competitor's install base, building a competitive takeout list, finding companies evaluating alternatives, or designing win-away campaigns. Do NOT use for general prospect list building (use /sales-prospect-list), competitive positioning/messaging frameworks (use /sales-positioning), or general outreach writing (use /sales-outreach)."
argument-hint: "[name the competitor and your product/value prop]"
license: MIT
version: 1.0.0
tags: [sales, competitive-intelligence, displacement, win-loss]
---
# Competitive Displacement Campaigns

Help the user find competitor customers, identify those ready to switch, and build targeted outreach with displacement-specific messaging. This skill is platform-agnostic but references Apollo.io's technographic and intent data as the primary source. The same frameworks apply to ZoomInfo, G2, BuiltWith, HG Insights, or any technographic/intent provider.

## Step 1 — Gather context

Ask the user:

1. **Which competitor are you targeting?**
   - Name the specific competitor (or competitors) whose customers you want to win
   - If targeting multiple, rank them — start with one

2. **What do you sell, and what's the primary displacement angle?**
   - A) Price — your product is more cost-effective
   - B) Features — you do something they can't
   - C) UX/ease of use — you're simpler to adopt and use
   - D) Support/service — you provide better support or faster response times
   - E) Performance/scale — you handle their workload better
   - F) Multiple angles — describe them

3. **What data sources do you have access to?**
   - A) Apollo.io (technographic + intent data)
   - B) ZoomInfo (technographic + intent)
   - C) G2 (comparison page visits, reviews)
   - D) BuiltWith / HG Insights (tech installs)
   - E) LinkedIn Sales Navigator
   - F) CRM data (existing competitive deals)
   - G) None yet — recommend one

4. **What's your ICP?** (Overlay on top of the competitor's installed base — not every competitor customer is a good fit for you)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Identify the installed base

Use technographic filters to find companies using the competitor's product:

### Technographic search strategy

- **Apollo**: Search > Technologies filter > search for competitor name. Apollo tracks 10,000+ technologies. Use "is any of" to capture multiple product names (e.g., "Datadog" AND "Datadog APM" AND "Datadog Infrastructure")
- **ZoomInfo**: Similar technographic filters under Advanced Search
- **BuiltWith/HG Insights**: Deeper technographic data, especially for web technologies
- **G2**: Export companies that visited your competitor's G2 profile or comparison pages

### Layer firmographic filters

Don't target the entire installed base — narrow to your ICP:
- **Company size**: Match your sweet spot (competitor may serve SMB to enterprise; you may only win in mid-market)
- **Industry**: Focus on verticals where your displacement angle resonates strongest
- **Geography**: Match your coverage area
- **Revenue/funding**: Ensure they can afford your product

### Accuracy expectations

| Data source | Accuracy | Lag | Best for |
|---|---|---|---|
| Apollo technographic | 70-80% | 3-6 months | Broad installed base discovery |
| BuiltWith/HG Insights | 80-90% | 1-3 months | Web/SaaS technology detection |
| G2 visitor data | High intent signal | Real-time | Active evaluators |
| CRM win/loss data | 100% (your data) | Current | Known competitive encounters |

## Step 3 — Find displacement signals

Layer signals on top of the installed base to identify companies ready to switch:

### Signal types, ranked by displacement readiness

| Signal | Source | Readiness level | What it means |
|---|---|---|---|
| **Researching alternatives** | Intent data (Apollo/Bombora), G2 comparison views | Very high | Actively evaluating — act fast |
| **New leader hired** | Job change alerts (Apollo, LinkedIn) | High | New VP/CTO in first 90 days = re-evaluation window |
| **Contract renewal timing** | Industry knowledge, sales intel | High | 60-90 days before renewal is the sweet spot |
| **Hiring for roles your product replaces** | Job postings (Apollo, LinkedIn) | Medium-high | Building capacity = potential dissatisfaction with current tool |
| **Competitor mentioned in negative context** | G2 reviews, Reddit, social | Medium | Public dissatisfaction, but may not be actively looking |
| **Funding event** | Apollo, Crunchbase | Medium | New budget to re-evaluate stack |
| **Technographic change** | Apollo, BuiltWith | Medium | Removing adjacent tools may signal broader stack re-evaluation |

### Signal stacking

Multiple signals compound readiness. Score each prospect:

| Signals present | Priority | Action |
|---|---|---|
| 3+ signals (e.g., new CTO + researching alternatives + contract renewal) | Immediate | Direct outreach, top of queue |
| 2 signals (e.g., new leader + hiring) | High | Prioritized outreach within 1-2 weeks |
| 1 strong signal (researching alternatives) | Medium-high | Standard outreach cadence |
| 1 weak signal (funding, tech change) | Medium | Add to nurture, monitor for additional signals |
| ICP fit only, no signals | Low | Long-term nurture, not active outreach |

## Step 4 — Build the displacement list

### Tiered output

| Tier | Criteria | Volume target | Outreach approach |
|---|---|---|---|
| **Tier 1 — Active** | ICP fit + 2+ displacement signals | 10-15% of base | Hyper-personalized, multi-channel, reference specific signals |
| **Tier 2 — Primed** | ICP fit + 1 signal or very strong fit | 25-35% of base | Personalized at segment level, competitor-aware messaging |
| **Tier 3 — Latent** | ICP fit, no active signal | 50-60% of base | Nurture content, thought leadership, not direct displacement pitch |

### Per-prospect messaging angles

For each Tier 1 prospect, identify the specific displacement angle:

| Prospect situation | Messaging angle |
|---|---|
| New leader (first 90 days) | "As you evaluate your stack..." — frame as helping them succeed in their new role |
| Researching alternatives | "I noticed companies like yours are evaluating [category]..." — don't reveal your data source |
| Hiring for roles your product addresses | "I see you're scaling [function]..." — position as enabling growth, not replacing tools |
| Negative competitor reviews | "Many [competitor] customers tell us..." — reference common pain points, not specific reviews |
| Contract renewal approaching | "Before you renew..." — create urgency around the renewal window |

### Competitive battle card framework

For the outreach team, create a quick-reference battle card:

1. **Their pitch**: What the competitor says about themselves (1-2 sentences)
2. **Their weakness**: Where they genuinely fall short (be honest, not FUD)
3. **Your differentiator**: What you do that they can't or won't (specific, provable)
4. **Proof point**: Customer story, benchmark, or data point that proves it
5. **Landmine question**: A question the prospect should ask the competitor that exposes the weakness

## Step 5 — Displacement playbooks

Design signal-specific outreach strategies:

### Playbook: New leader (job change)

- **Timing**: Wait 30-60 days after start date (let them get settled, but before they've committed to the existing stack)
- **Entry point**: Congratulate → offer industry insight → soft ask
- **Don't**: Pitch immediately. They're drinking from a firehose.
- **Sequence**: 5-touch over 3 weeks — see `/sales-cadence` for detailed design

### Playbook: Active evaluator (researching alternatives)

- **Timing**: Immediately — they're in-market now
- **Entry point**: Lead with value, not "I saw you're looking at alternatives"
- **Don't**: Reference the intent data directly. It's creepy.
- **Sequence**: 4-touch over 2 weeks, faster pace — see `/sales-cadence`

### Playbook: Contract renewal window

- **Timing**: 60-90 days before estimated renewal
- **Entry point**: "Before you auto-renew, here's what's changed in [category]..."
- **Don't**: Assume you know their renewal date. Use it as a hypothesis.
- **Sequence**: 6-touch over 4 weeks — longer cadence to build case before deadline

### Playbook: Long-time user, general dissatisfaction

- **Timing**: Ongoing nurture until a trigger event occurs
- **Entry point**: Thought leadership, not direct pitch — "Here's what best-in-class [function] teams do differently"
- **Don't**: Trash the competitor. They've used it for years and may have champions internally.
- **Sequence**: Monthly nurture touchpoint — see `/sales-cadence`

### Related skills

- `/sales-prospect-list` — Build general prospect lists (non-competitive)
- `/sales-cadence` — Design the multi-channel sequence for displacement outreach
- `/sales-objection` — Handle "we're happy with [competitor]" and loyalty objections
- `/sales-intent` — Interpret buying signals beyond competitive displacement
- `/sales-positioning` — Develop competitive messaging frameworks
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Gotchas

- **Don't trash-talk the competitor in outreach.** Lead with your value, not their flaws. Negative selling triggers defensiveness — especially if the prospect chose the competitor and feels personally attached to the decision.
- **Don't assume technographic data is real-time.** Tech installs in Apollo and similar tools can be 3-6 months stale. A company may have already switched away from the competitor, or the install may be a free tier/trial they never actually use. Always validate with additional signals.
- **Don't target the entire installed base.** Most competitor users are happy — or at least not unhappy enough to switch. Blasting 10,000 competitor customers with "switch to us" messages wastes effort and damages your brand. Focus on those with displacement signals.
- **Don't forget switching costs.** The prospect isn't just evaluating your product vs. the competitor — they're evaluating your product vs. the competitor PLUS the pain of migrating. Address migration support, onboarding help, and data transfer upfront or the prospect won't engage.

## Examples

### Example 1: Targeting Datadog customers
**User says**: "Help me take customers away from Datadog"
**Skill does**:
1. Clarifies the user's product, displacement angle (price, simplicity, or specific capability)
2. Builds a technographic search for Datadog users within ICP
3. Layers intent signals (researching "Datadog alternatives", new engineering leaders, hiring SREs)
4. Creates tiered displacement list with per-prospect messaging angles
5. Designs signal-specific outreach playbooks
**Result**: Targeted displacement campaign with tiered list, battle card, and signal-specific sequences

### Example 2: Prioritizing known competitor customers
**User says**: "I know 50 companies use [competitor]. Which ones should I target first?"
**Skill does**:
1. Applies signal stacking to all 50 accounts
2. Scores and ranks by displacement readiness
3. Creates a prioritized hit list with specific outreach approach per tier
**Result**: Prioritized list with clear "start here" guidance and per-account messaging angles

### Example 3: New CTO at a competitor account
**User says**: "A competitor's customer just hired a new CTO. How do I approach?"
**Skill does**:
1. Identifies the job change displacement playbook
2. Recommends 30-60 day timing, congratulate-first approach
3. Designs the outreach sequence with CTO-relevant messaging
4. Suggests what NOT to do (don't pitch immediately, don't trash their current stack)
**Result**: Timed outreach plan for the new leader displacement window

## Troubleshooting

### Technographic data shows few results
**Cause**: Competitor's technology isn't well-tracked in your data provider, or they use a private/custom deployment
**Solution**: Try multiple data sources (Apollo + BuiltWith + G2). Use competitor name in intent topics as an alternative signal. Check CRM win/loss data for known competitive encounters.

### High intent but no responses
**Cause**: Messaging is too aggressive ("switch from X") or too generic (doesn't address the prospect's specific situation)
**Solution**: Revisit messaging angles — lead with the prospect's pain, not your product. Test whether softening the competitive angle improves response rates. Consider whether the intent signal was false positive.

### Competitor customers say "we're happy"
**Cause**: They may genuinely be happy, or they're brushing you off because the pitch wasn't relevant
**Solution**: Shift from displacement to education — share thought leadership that makes them question whether "happy" means "optimal." Use `/sales-objection` for handling the loyalty objection specifically.
