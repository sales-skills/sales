---
name: sales-intent
description: "Interprets buying signals and prioritize accounts for outreach. Use when drowning in intent data and not sure what matters, can't tell which accounts to prioritize, buying signals aren't translating to pipeline, job change alerts are noisy, intent topics feel too broad, lead scores don't match actual deal quality, or not sure how to act on signals in outreach. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts (use /sales-enrich), ZoomInfo-specific intent config (use /sales-zoominfo), or general Apollo platform help (use /sales-apollo)."
argument-hint: "[describe the signals you're seeing or the accounts you want to prioritize]"
license: MIT
version: 1.0.0
tags: [sales, intent-data, buying-signals, prioritization]
---
# Read Buying Signals & Prioritize Accounts

Help the user interpret buying signals, score leads, and prioritize accounts for outreach based on signal strength. This skill is platform-agnostic but references Apollo.io (with Bombora/LeadSift intent data) as the primary tool. The same frameworks apply to ZoomInfo Intent, G2, 6sense, Demandbase, or any intent data provider.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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

## Step 2 — Signal taxonomy and prioritization framework

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 3 — Signal-to-action playbooks

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

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-qualified` — Qualified platform help (Signals buyer intent, Piper AI SDR for acting on intent)
- `/sales-prospect-list` — Build the prospect list to layer signals on top of
- `/sales-enrich` — Enrich signal-triggered contacts with verified contact info
- `/sales-cadence` — Design signal-specific outbound sequences
- `/sales-apollo` — Apollo intent configuration, topic setup, and workflow engine
- `/sales-deal-inspect` — Use signals to inform deal health assessment
- `/sales-tomba` — Tomba platform help (technology detection endpoint for technographic signals, similar domains for competitor mapping)
- `/sales-prospeo` — Prospeo platform help (company enrichment with tech stack detection, job postings as hiring signals)
- `/sales-hunter` — Hunter.io platform help (Signals for buying intent, TechLookup for technographic prospecting, Discover for company search)
- `/sales-seamless` — Seamless.AI platform help (Buyer Intent, Job Changes, Pitch Intelligence, Autopilot)
- `/sales-clearbit` — Clearbit platform help (Reveal for visitor identification, Enrichment, Prospector)
- `/sales-rb2b` — RB2B platform help (person-level visitor identification, Hot Pages, Identity Resolution API)
- `/sales-customersai` — Customers.ai platform help (B2C ecommerce identity resolution for Shopify + Klaviyo, X-Ray pixel, Alfred AI intent scoring)
- `/sales-6sense` — 6sense platform help (Signalverse intent data, predictive scoring, Sales Intelligence, AI Email Agents, advertising, orchestration)
- `/sales-g2` — G2 platform help (B2B software reviews, G2 Buyer Intent data, badges, profile optimization)
- `/sales-zoominfo` — ZoomInfo platform help (SalesOS, intent topics, Scoops)
- `/sales-clay` — Clay platform help (Signals, waterfall enrichment, Claygent, Email Sequencer, Ad Sync)
- `/sales-leadmagic` — LeadMagic platform help (Job Change Detector, Jobs Finder, Ads Intelligence, programmatic signal APIs)
- `/sales-adroll` — AdRoll platform help (RollWorks site visitor identification, account scoring, HubSpot integration)
- `/sales-b2b-advertising` — account-based advertising driven by intent signals
- `/sales-retargeting` — Retargeting strategy (website visitor retargeting as a signal-driven channel)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

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
