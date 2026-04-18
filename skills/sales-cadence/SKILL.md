---
name: sales-cadence
description: "Designs multi-channel outbound cadences with timing, A/B testing, and content. Use when outbound sequences getting low reply rates, unsure how many touchpoints or what spacing to use, cadence emails sound generic, prospects ignoring calls, A/B tests not moving the needle, sequence performance plateauing, or not sure which channels to include in outreach. Do NOT use for general outreach message writing (use /sales-outreach), marketing cold email (use /cold-email), automated email flows (use /email-sequence), or general Salesloft platform help (use /sales-salesloft)."
argument-hint: "[describe campaign goal, target persona, channels, and constraints]"
license: MIT
version: 1.0.0
tags: [sales, outbound, sequences, cadence, multi-channel]
---
# Design a Multi-Channel Outbound Cadence

Help the user design a complete outbound cadence for Salesloft, Mailshake, Smartlead, Lemlist, Yesware, or Hunter.io — from architecture and timing through full content for every step, A/B testing, and optimization benchmarks.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's the campaign goal?**
   - A) Cold outbound — net-new prospects, no prior relationship
   - B) Inbound follow-up — responding to a lead that came in
   - C) Trigger-based — responding to a signal (job change, funding round, tech install, intent data)
   - D) Re-engagement — reviving a cold or stalled conversation
   - E) Expansion — reaching new contacts at existing customer accounts
   - F) Other — describe it

2. **Who is the target persona?** (title, seniority, industry, company size)

3. **What channels are available?**
   - A) Email only
   - B) Email + phone
   - C) Email + phone + LinkedIn
   - D) Email + phone + LinkedIn + video
   - E) Other combination — describe

4. **What constraints should I know about?**
   - Total duration (e.g., 14 days, 21 days, 30 days)
   - Max touches per week
   - Existing messaging or value props to incorporate
   - Compliance requirements (GDPR, CAN-SPAM, industry-specific)
   - Any channels to avoid or emphasize

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Cadence architecture

Design the cadence structure as a table:

| Day | Step | Channel | Action | Notes |
|-----|------|---------|--------|-------|
| 1   | 1    | Email   | Intro email (A/B subject lines) | Personalization Level 3+ |
| 1   | 2    | LinkedIn | Profile view + connection request | Same day as email |
| 3   | 3    | Phone   | Call attempt #1 + voicemail | Reference email |
| 4   | 4    | Email   | Follow-up email (value-add) | Different angle from Step 1 |
| ...  | ...  | ...     | ...    | ... |

### Design principles

- **Channel mixing**: Never send 3+ touches in the same channel consecutively. Alternate between email, phone, and LinkedIn.
- **Spacing**:
  - Days 1-7: Higher intensity (touch every 1-2 days) — this is when engagement peaks
  - Days 8-14: Medium intensity (every 2-3 days)
  - Days 15+: Lower intensity (every 3-4 days) — don't burn the prospect
- **Touch count by persona** (typical ranges — adjust based on persona, sales cycle, and industry norms):
  - C-suite / VP: 8-12 touches over 21-28 days (less aggressive, more spaced)
  - Director / Manager: 12-16 touches over 21-30 days (standard)
  - Individual contributor / practitioner: 10-14 touches over 14-21 days (shorter cycle)
- **Phone placement**: Always within 24 hours after an email so you can reference it ("I just sent you a note about...")
- **LinkedIn**: Use early for connection + later for social proof or content sharing. Don't be repetitive with email.
- **Final touch**: Always a "breakup" email — creates urgency without being pushy

## Step 3 — Write content for every step

For each step in the cadence, write the actual content:

### Email templates
For each email:
- **Subject line**: Provide A/B variants (Variant A and Variant B)
- **Body**: Full email text with personalization tokens in `{{brackets}}`
- **CTA**: Specific ask (meeting, reply, resource)
- Keep emails under 125 words for cold outbound, under 200 for warm follow-up

### Call scripts
For each call step:
- **Opening** (first 10 seconds — must earn the right to continue)
- **Reason for calling** (one sentence connecting to their world)
- **Key questions** (2-3 if they engage)
- **Ask** (meeting request with specific time)
- **Voicemail script** (under 30 seconds, always leave one)

### LinkedIn messages
- **Connection request note**: Under 300 characters, no selling
- **Follow-up InMail or message**: Reference a specific post, mutual connection, or insight about their company
- Keep LinkedIn casual and conversational — it's a social platform, not email

### Video guidance (if applicable)
- When to use: Steps 5+ when email hasn't gotten a response
- Duration: 60-90 seconds max
- Structure: Say their name, show you did research, one key insight, soft CTA

For platform-specific cadence implementation (Salesloft, Mailshake, Lemlist, Smartlead, Mixmax, Reply.io, Woodpecker, Hunter.io, Seamless.AI, Closum, Minelead, GetProspect, ZoomInfo, Snov.io, 6sense, Clay, BrandJet, AiSDR, Nooks), see references/platforms.md.

### Personalization framework
- **Level 1 (Minimum)**: First name, company name, title — the bare minimum
- **Level 2 (Standard)**: Industry reference, company-size-specific pain point
- **Level 3 (Strong)**: Something specific about their company (recent news, tech stack, job posting, quarterly results)
- **Level 4 (Elite)**: Personal insight (their LinkedIn post, podcast appearance, conference talk, published article)

Recommend Level 3+ for all touches in a cold outbound cadence. Level 2 is acceptable for re-engagement at scale.

For Level 3+ at scale (100+ prospects), consider AI personalization: Smartlead SmartAgents, Clay, or custom GPT workflows to research each prospect and generate personalized snippets for {{custom_field}} merge variables. This automates the research step that makes Level 3-4 feasible at volume.

## Step 4 — A/B testing plan

Design an A/B testing strategy:

| Test # | What to test | Variant A | Variant B | Metric | Min sample size |
|--------|-------------|-----------|-----------|--------|-----------------|
| 1      | Subject line (Step 1) | Pain-focused | Curiosity-based | Open rate | 100 sends each |
| 2      | CTA style (Step 1) | Specific time ask | Open-ended question | Reply rate | 100 sends each |
| 3      | Email length (Step 4) | Short (75 words) | Medium (125 words) | Reply rate | 100 sends each |

### A/B testing rules
- Test one variable at a time
- Run each test for at least 100 sends per variant (200+ preferred) before drawing conclusions
- Primary metric: positive reply rate (not just open rate)
- Wait at least 5 business days before evaluating results
- Roll the winner into the cadence and start the next test
- Always be testing something — cadences decay over time as messaging gets stale

## Step 5 — Metrics and optimization

Provide a benchmarks table:

| Metric | Good | Great | If below "Good"... |
|--------|------|-------|---------------------|
| Open rate | 40-50% | 50%+ | Fix subject lines, check deliverability, verify email addresses |
| Reply rate (total) | 8-12% | 15%+ | Improve personalization, test different angles, check targeting |
| Positive reply rate | 3-5% | 7%+ | Revisit value prop, check ICP fit, strengthen the ask |
| Meeting booked rate | 2-4% | 5%+ | Improve CTA clarity, offer more flexibility, add social proof |
| Bounce rate | <3% | <1% | Clean your list, use email verification tools, check domain health |
| Unsubscribe rate | <1% | <0.5% | Reduce frequency, improve relevance, check compliance |
| Call connect rate | 5-10% | 12%+ | Try different times of day, use local presence dialing, vary call days |

### Optimization cadence
- **Week 1-2**: Let the cadence run, gather baseline data
- **Week 3-4**: Analyze first A/B test results, implement winners
- **Monthly**: Review full-funnel metrics, retire underperforming steps, test new angles
- **Quarterly**: Major refresh — new messaging, updated case studies, seasonal angles

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-salesloft` — General Salesloft platform help (Rhythm, Analytics, Drift, admin)
- `/sales-deliverability` — Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-mailshake` — Mailshake platform help (campaigns, Lead Catcher, settings)
- `/sales-smartlead` — Smartlead platform help (campaigns, SmartSenders, SmartAgents, API)
- `/sales-lemlist` — Lemlist platform help (sequences, Lemwarm, LinkedIn automation, enrichment, API)
- `/sales-call-review` — Review calls from your cadence to improve scripts
- `/sales-email-tracking` — Email engagement tracking — open/click/attachment signals for follow-up timing
- `/sales-brandjet` — BrandJet AI platform help — multi-channel outreach, brand intelligence, AI monitoring
- `/sales-revenue-io` — Revenue.io platform help (Salesforce-native Guided Selling cadences, RingDNA dialer, Moments coaching)
- `/sales-nooks` — Nooks platform help (AI parallel dialer, multi-channel sequencing, coaching, waterfall enrichment)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill

## Gotchas

- **Don't make all touches email-only.** Claude defaults to generating email-heavy cadences. A real cadence needs channel mixing — if the user has phone and LinkedIn available, use them from the start, not as afterthoughts.
- **Don't space touches too close together.** Avoid scheduling touches less than 2 business days apart (except same-day email + LinkedIn on Day 1). Prospects need time to engage before you follow up.
- **Don't write generic "just checking in" follow-ups.** Every touch must add new value or a new angle. If you catch yourself writing "I wanted to follow up on my last email," rewrite it with a new hook.
- **Don't ignore timezone for call steps.** Phone calls placed outside business hours are wasted touches. If you know the prospect's timezone, note the best call windows (typically 8-10am and 4-6pm local time).
- **Don't generate a cadence without confirming channel availability first.** If the user didn't specify channels, ask — don't assume they have LinkedIn Sales Navigator or a phone dialer.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Examples

### Example 1: Cold outbound cadence
**User says**: "Build a 21-day cold outbound cadence for VP Engineering at Series B SaaS companies. We have email, phone, and LinkedIn."
**Skill does**:
1. Designs a 14-step cadence architecture table with channel mixing
2. Writes full email copy with A/B subject lines, call scripts with voicemail, LinkedIn messages
3. Provides an A/B testing plan and benchmark metrics
**Result**: Complete cadence ready to import into Salesloft with content for every step

### Example 2: Cadence optimization
**User says**: "My cadence has 35% open rate but only 2% reply rate. What's wrong?"
**Skill does**:
1. Diagnoses the gap (subject lines work, body/CTA needs fixing)
2. Recommends specific changes to email body, personalization, and CTA
3. Designs an A/B test plan to validate improvements
**Result**: Prioritized optimization plan with testable hypotheses

## Troubleshooting

### Low open rates (<30%)
**Cause**: Subject lines aren't compelling, or deliverability issues
**Solution**: Test pain-focused vs. curiosity-based subject lines. Check domain reputation, SPF/DKIM records, and bounce rate. If bounce rate >3%, clean your list first.

### High open rate but low reply rate
**Cause**: Email body doesn't deliver on the subject line promise, CTA is weak or unclear, or personalization is too generic
**Solution**: Ensure the first sentence connects to the prospect's world. Make the CTA specific ("15 minutes Thursday?") not vague ("let me know if interested"). Increase personalization to Level 3+.

### Prospects engaging but not booking meetings
**Cause**: Too many touchpoints before the ask, or the ask is buried
**Solution**: Include a clear meeting CTA by Step 3. Use the phone step within 24 hours of an email open. Offer a specific time, not an open question.
