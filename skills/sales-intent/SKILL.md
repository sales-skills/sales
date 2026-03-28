---
name: sales-intent
description: "Interpret buying signals and prioritize accounts for outreach. Use when analyzing intent data, prioritizing accounts, reading buying signals, tracking job changes, using intent topics, scoring leads, deciding who to contact first, or building signal-based outreach workflows. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts (use /sales-enrich), or general Apollo platform help (use /sales-apollo)."
argument-hint: "[describe the signals you're seeing or the accounts you want to prioritize]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Read Buying Signals & Prioritize Accounts

Help the user interpret buying signals, score leads, and prioritize accounts for outreach based on signal strength. This skill is platform-agnostic but references Apollo.io (with Bombora/LeadSift intent data) as the primary tool. The same frameworks apply to ZoomInfo Intent, G2, 6sense, Demandbase, or any intent data provider.

## Step 1 — Gather context

Ask the user:

1. **What signals are you working with?**
   - A) Intent data (topics companies are researching)
   - B) Job change alerts (prospects who switched roles)
   - C) Funding/growth signals (recent raise, IPO, acquisition)
   - D) Hiring signals (job postings that indicate need for your product)
   - E) Technographic signals (adopted/removed a technology)
   - F) Engagement signals (website visits, content downloads, email opens)
   - G) All available signals — help me make sense of them
   - H) No signals set up yet — help me get started

2. **What's your goal?**
   - A) Prioritize my existing pipeline/list — who to contact first
   - B) Find new accounts showing buying behavior
   - C) Build a signal-based outreach workflow (automated)
   - D) Understand what my intent data is telling me
   - E) Set up intent/signal tracking for the first time

3. **What tools do you have for signal data?**
   - A) Apollo.io (Bombora/LeadSift intent)
   - B) ZoomInfo Intent
   - C) 6sense / Demandbase
   - D) G2 buyer intent
   - E) Bombora (direct)
   - F) CRM engagement data only
   - G) Multiple sources

4. **What do you sell?** (Brief description — this helps interpret which signals matter most for your product)

## Step 2 — Signal taxonomy

### Types of buying signals, ranked by strength

| Signal type | Strength | What it means | Example |
|---|---|---|---|
| **Direct intent** | Very high | Company is actively researching your category or competitor | Bombora shows "sales engagement platform" topic surge |
| **Job change — champion** | Very high | A former champion or user moved to a new company | Your power user just became VP Sales at a new company |
| **Competitive evaluation** | High | Prospect is evaluating your competitor | G2 comparison page views, review site activity |
| **Funding event** | High | Company raised money — has budget for new tools | Series B announced last week |
| **Hiring signal** | High | Company is hiring for roles your product supports | Posting for 5 SDRs (signal for sales tools) |
| **Job change — new leader** | Medium-high | New executive in a role that buys your product | New CRO started 30 days ago |
| **Technology change** | Medium | Adopted/removed a technology adjacent to yours | Installed Salesforce (could need sales tools) — use Hunter.io TechLookup, Tomba's Technology endpoint, Prospeo's company enrichment tech stack field, or Seamless.AI's technology filters to detect |
| **Company growth** | Medium | Headcount growth, office expansion, new markets | Employee count grew 40% in 6 months |
| **Content engagement** | Medium | Interacted with your content (webinar, whitepaper, blog) | Downloaded your ROI calculator |
| **Website visit** | Low-medium | Visited your website (may be casual research) | Pricing page visit |
| **Social engagement** | Low | Liked/commented on your company's posts | Liked a LinkedIn post |
| **Email open** | Low | Opened your email (could be accidental/automated) | Opened but didn't reply |

### Signal decay

Signals lose value over time:

| Signal age | Relevance |
|---|---|
| Last 7 days | Hot — act immediately |
| 8-30 days | Warm — still worth pursuing |
| 31-60 days | Cooling — use as context, not primary trigger |
| 60+ days | Stale — don't reference in outreach, may no longer be relevant |

## Step 3 — Prioritization framework

### Account scoring matrix

Score each account by combining signal strength and ICP fit:

| | Strong ICP fit | Moderate ICP fit | Weak ICP fit |
|---|---|---|---|
| **Multiple strong signals** | Priority 1 — Act today | Priority 2 — Act this week | Deprioritize — signals don't overcome bad fit |
| **One strong signal** | Priority 2 — Act this week | Priority 3 — Queue for next cycle | Skip |
| **Weak signals only** | Priority 3 — Queue for next cycle | Priority 4 — Monitor | Skip |
| **No signals** | Priority 4 — Standard outbound | Skip | Skip |

Key principle: **ICP fit is the floor, signals are the accelerator.** A perfect signal at a bad-fit company is still a bad prospect. A perfect-fit company with no signal is still worth contacting — just lower priority.

### Lead scoring model

Assign point values to build a composite score:

**Demographic fit (0-50 points)**:
- Title matches ICP persona: +20
- Seniority matches (Director+, VP+, C-suite): +10
- Department matches: +10
- Geography matches: +10

**Firmographic fit (0-30 points)**:
- Industry matches: +10
- Company size in range: +10
- Revenue in range: +5
- Technology fit: +5

**Signal score (0-50 points)**:
- Direct intent (category/competitor): +20
- Job change (champion): +20
- Funding event: +15
- Hiring signal: +10
- Technology change: +10
- Content engagement: +5
- Website visit: +5

**Total score interpretation**:
- 80+ = Priority 1 — immediate outreach
- 60-79 = Priority 2 — outreach this week
- 40-59 = Priority 3 — queue for next cycle
- <40 = Standard outbound or skip

### In Seamless.AI

Seamless.AI provides Buyer Intent and Job Changes as native features:
1. **Buyer Intent**: Select intent topics relevant to your product → Seamless.AI scores accounts by research intensity across 12,000+ topics. Combine with Prospector filters to find contacts at high-intent accounts.
2. **Job Changes**: Tracks role changes for contacts in your CRM and saved lists. New hires, promotions, and company changes within 90 days. High-value trigger events — new leaders buy in their first 90 days.
3. **Pitch Intelligence**: AI-generated messaging based on prospect data, company news, and intent signals — use for signal-informed outreach angles.
4. **Autopilot + Intent**: Set Autopilot to continuously build lists filtered by intent signals — automated signal-to-list workflow.
5. **Credit note**: Buyer Intent and Job Changes are Pro/Enterprise features. Free/Basic plans don't include these.

### In Apollo.io

Apollo integrates Bombora and LeadSift intent data:
1. **Set up intent topics**: Settings > Intent > select keywords and competitor names to track
2. **View intent scores**: Apollo scores companies on a scale based on frequency, trend, and recency of research activity
3. **Filter by intent**: Use intent as a search filter to find accounts actively researching your category
4. **Combine with ICP filters**: Layer intent on top of firmographic/demographic filters for highest-quality lists
5. **Job change tracking**: Apollo surfaces job changes for contacts in your CRM — new roles within 90 days

## Step 4 — Signal-to-action playbooks

### For each signal type, define the action:

**Direct intent detected** (company researching your category):
1. Identify the likely buyer (by title/role at that company)
2. Enrich contact info → `/sales-enrich`
3. Send personalized outreach referencing their challenge area (NOT "I see you're researching X" — that's creepy)
4. Messaging angle: lead with a relevant case study or insight about the problem they're researching

**Job change — former champion**:
1. Wait 30-60 days (let them settle in)
2. Send a congratulatory message — no pitch
3. Follow up 2-3 weeks later with a soft ask: "As you're getting set up, happy to share what worked at [their old company]"

**Job change — new leader**:
1. Research the new leader's background (LinkedIn, previous company)
2. New leaders make buying decisions in their first 90 days — timing is critical
3. Messaging angle: "New [title]s at companies like yours typically face [challenge]. Here's how we've helped others in your situation."

**Funding event**:
1. Act within 2 weeks of announcement (before competitors do)
2. Reference the funding specifically: "Congrats on the Series B"
3. Messaging angle: connect your product to what the funding is for (scaling team, entering new market, building infrastructure)

**Hiring signal**:
1. Identify what roles they're hiring for and why it matters
2. Messaging angle: "I noticed you're building out your [team]. Companies in that phase often need [your product] to [outcome]."

**Competitive evaluation**:
1. Highest urgency — they're actively comparing options
2. Lead with differentiation, not feature lists
3. Offer a rapid evaluation or proof of concept
4. Messaging angle: "If you're evaluating [category], here's what our customers say makes us different from [competitor]"

## Step 5 — Workflow automation

### Automated signal-to-sequence routing

Set up rules to automatically route signals into outreach:

| Signal trigger | Action | Sequence type |
|---|---|---|
| Intent score spikes (new) | Add to high-intent sequence | Aggressive — 5-7 touches over 14 days |
| Job change detected | Add to job change sequence | Warm — congratulations + soft pitch over 30 days |
| Funding announced | Add to funding sequence | Timely — reference funding, 4-5 touches over 10 days |
| Website pricing page visit | Notify rep in Slack | Manual follow-up — don't automate, too personal |
| Content download | Add to nurture sequence | Educational — 3-4 touches over 21 days |

### In Apollo.io
Use Apollo Workflows (Professional+ plan) to automate:
1. **Trigger**: Intent topic score increases, job change detected, or contact stage changes
2. **Action**: Add to sequence, create task, update field, send Slack notification
3. **Filter**: Only trigger for contacts matching your ICP criteria

## Gotchas

- **Don't treat all signals as equal.** Claude tends to list all available signals without weighting them. A Bombora intent spike is vastly more actionable than a LinkedIn post like. Use the signal strength ranking to prioritize.
- **Don't reference signals directly in outreach.** Never say "I saw you're researching sales engagement tools" or "I noticed you visited our pricing page." It's creepy and breaks trust. Use signals to inform your timing and angle, not your opening line.
- **Don't act on stale signals.** Intent data older than 30 days is context, not a trigger. A funding round from 6 months ago is not a reason to reach out "about your recent raise." Check signal dates.
- **Don't ignore ICP fit because a signal is strong.** A strong buying signal at a company that's too small, in the wrong industry, or in a geography you can't serve is still a bad prospect. Signal + fit = action. Signal alone ≠ action.
- **Don't automate outreach for high-value signals.** For direct intent, competitive evaluation, and champion job changes, manual personalized outreach dramatically outperforms automated sequences. Reserve automation for lower-strength signals (content downloads, website visits).

## Related skills

- `/sales-prospect-list` — Build the prospect list to layer signals on top of
- `/sales-enrich` — Enrich signal-triggered contacts with verified contact info
- `/sales-cadence` — Design signal-specific outbound sequences
- `/sales-apollo` — Apollo intent configuration, topic setup, and workflow engine
- `/sales-deal-inspect` — Use signals to inform deal health assessment
- `/sales-tomba` — Tomba platform help (technology detection endpoint for technographic signals, similar domains for competitor mapping)
- `/sales-prospeo` — Prospeo platform help (company enrichment with tech stack detection, job postings as hiring signals)
- `/sales-hunter` — Hunter.io platform help (Signals for buying intent, TechLookup for technographic prospecting, Discover for company search)
- `/sales-seamless` — Seamless.AI platform help (Buyer Intent, Job Changes, Pitch Intelligence, Autopilot)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Prioritizing accounts with intent data
**User says**: "I have 200 accounts in my territory. Apollo shows intent data on 40 of them. How do I prioritize?"
**Skill does**:
1. Builds a scoring matrix combining ICP fit + intent signal strength
2. Segments the 40 intent accounts into Priority 1 (act today), Priority 2 (this week), Priority 3 (next cycle)
3. Creates signal-specific messaging angles for each priority tier
4. Recommends ignoring intent at accounts that don't fit the ICP
**Result**: Prioritized account list with tailored approach per tier

### Example 2: Job change outreach strategy
**User says**: "Three of my former champions just changed jobs. How do I reach out?"
**Skill does**:
1. Recommends waiting 30-60 days for each (check start dates)
2. Designs a 3-touch sequence: congratulations → value reference → soft ask
3. Provides messaging templates that don't feel like a pitch
4. Sets up Apollo job change tracking for future alerts
**Result**: Warm outreach plan that preserves the relationship while opening a new opportunity

## Troubleshooting

### No intent data showing
**Cause**: Intent topics not configured, or plan doesn't include intent data
**Solution**: Check Settings > Intent in Apollo. Select relevant keywords and competitor names. Intent data requires a Professional or Organization plan with Bombora/LeadSift add-on.

### Too many signals — can't prioritize
**Cause**: Broad intent topics generating noise
**Solution**: Narrow intent topics to your specific category (not broad terms). Combine intent with ICP filters to reduce volume. Focus on signals with recency <14 days and trend direction "increasing."

### Signals don't match reality
**Cause**: Intent data measures content consumption, not purchase intent. A company researching "CRM" might be writing a blog post, not buying one.
**Solution**: Never rely on a single signal. Stack signals — intent + hiring + funding is much stronger than intent alone. Validate with a quick LinkedIn check before investing in personalized outreach.
