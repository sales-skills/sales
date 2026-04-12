---
name: sales-aisdr
description: "AiSDR platform help — AI-powered SDR that automates cold email and LinkedIn outreach with deeply researched personalization. Use when AiSDR campaigns aren't getting replies, emails landing in spam, HubSpot sync not working, prospect imports failing, not sure how message credits work, wondering if AiSDR is the right AI SDR tool, or reply rates are lower than expected. Do NOT use for general outbound cadence design (use /sales-cadence) or general email deliverability strategy (use /sales-deliverability)."
argument-hint: "[describe what you need help with in AiSDR]"
license: MIT
version: 1.0.0
tags: [sales, ai-sdr, outbound, cold-email, platform]
github: "https://github.com/aisdrapp"
---

# AiSDR Platform Help

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up my first AiSDR campaign
   - B) Improving reply rates on existing campaigns
   - C) Connecting AiSDR to my CRM (HubSpot/Salesforce/Pipedrive)
   - D) Understanding pricing, credits, or message limits
   - E) Email warmup or deliverability issues
   - F) Prospect list building or importing contacts
   - G) Comparing AiSDR to other AI SDR tools
   - H) Something else — describe it

2. **Which AiSDR plan are you on?**
   - A) Explore ($900/mo)
   - B) Grow ($2,500/mo)
   - C) Enterprise (custom)
   - D) Not yet a customer — evaluating

3. **What CRM do you use?** (HubSpot, Salesforce, Pipedrive, none)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

Based on the user's need, either answer directly from the reference below or hand off to a more appropriate skill:

| Need | Action |
|---|---|
| AiSDR-specific config, campaigns, warmup, integrations | Answer directly from Step 3 |
| General outbound cadence design (multi-platform) | Hand off: "This is a cadence/sequence design question — run: `/sales-cadence {your question}`" |
| Email deliverability strategy (SPF/DKIM/DMARC) | Hand off: "This is an email deliverability question — run: `/sales-deliverability {your question}`" |
| Building prospect lists beyond AiSDR's database | Hand off: "This is a prospect list building question — run: `/sales-prospect-list {your question}`" |
| Contact enrichment from other providers | Hand off: "This is an enrichment strategy question — run: `/sales-enrich {your question}`" |
| Meeting scheduling beyond Calendly integration | Hand off: "This is a meeting scheduling question — run: `/sales-meeting-scheduler {your question}`" |
| Lead scoring strategy | Hand off: "This is a lead scoring strategy question — run: `/sales-lead-score {your question}`" |

## Step 3 — AiSDR platform reference

### Platform overview

AiSDR is an AI-powered SDR that finds prospects, researches them individually, writes personalized cold email and LinkedIn outreach, and books meetings autonomously. Y Combinator-backed (2023), founded by Yuriy and Oleg Zaremba.

**Core philosophy**: Quality over quantity — AiSDR "targets pain and thinks before it sends" rather than blasting volume. Claims 1-3 meetings per 100 leads vs industry average of <1%.

### Key modules

| Module | What it does |
|---|---|
| AI Prospecting | Search 700M+ contact database, filter by persona, signals, and intent |
| AI Outreach | Auto-generate personalized cold emails and LinkedIn messages based on deep prospect research |
| AI Strategist | Builds personalized outreach strategies per prospect using company news, tech stack, job postings |
| Email Warmup | Built-in warmup for new email accounts (30-60 day ramp, automated) |
| Campaign Dashboard | Performance metrics, reply tracking, meeting tracking |
| CRM Sync | Bi-directional HubSpot sync; Salesforce and Pipedrive support |
| Meeting Booking | Calendly integration for automated scheduling |
| Call Integration | Aircall integration for call tracking alongside email/LinkedIn |

### Pricing and limits

*Best-effort from research — verify current pricing at aisdr.com/pricing.*

| Feature | Explore ($900/mo) | Grow ($2,500/mo) | Enterprise (custom) |
|---|---|---|---|
| AI messages | 1,200/mo | 4,500/mo | Custom |
| Lead search credits | 1,200/mo | 4,500/mo | Custom |
| Seats | Unlimited | Unlimited | Unlimited |
| Email + LinkedIn | Yes | Yes | Yes |
| HubSpot/Salesforce sync | Yes | Yes | Yes |
| Dedicated GTM engineer | Yes | Biweekly check-ins | Dedicated CS FTE |
| AI multimedia content | No | Yes | Yes |
| SOC 2 Type 2 | No | Yes | Yes |
| Website visitor identification | No | No | Yes |
| Custom playbooks | No | No | Yes |
| Billing | Quarterly | Quarterly | Custom |
| Annual discount | 20% | 20% | Negotiable |

Additional costs: extra domains $99/mo each.

Cost-per-message estimates: ~$0.75 (Explore), ~$0.56 (Grow). Cost-per-meeting: $140-$300 depending on execution quality.

### Integrations

| Integration | Details |
|---|---|
| HubSpot | Native bi-directional sync — import leads from HubSpot lists, sync all interactions back, use HubSpot custom properties for personalization |
| Salesforce | Supported (verify current depth of sync with AiSDR support) |
| Pipedrive | Supported (verify current depth of sync) |
| Calendly | Meeting booking — prospects can self-schedule directly from email |
| Aircall | Call tracking — logs call activity alongside email/LinkedIn engagement |
| Gmail | Email provider for sending |
| Outlook | Email provider for sending |

### Campaign setup workflow

1. **Connect email accounts** — link Gmail or Outlook accounts that will send outreach
2. **Enable warmup** — turn on automated warmup for each connected account (allow 30-60 days for new domains)
3. **Define ICP** — set target persona filters (title, seniority, industry, company size, signals)
4. **Build prospect list** — use AiSDR's 700M+ database or import from HubSpot
5. **Choose campaign type** — cold outbound, inbound follow-up, trigger-based, or re-engagement
6. **Configure AI Strategist** — provide context about your product, value props, pain points
7. **Set sending limits** — daily email volume, LinkedIn connection limits
8. **Launch and monitor** — track opens, replies, meetings in the dashboard
9. **Sync to CRM** — all activity and outcomes flow back to HubSpot automatically

### HubSpot integration deep dive

- **Import**: Sync HubSpot lists directly into AiSDR campaigns — no CSV exports needed
- **Enrich**: AiSDR enriches existing HubSpot records with additional data
- **Personalize**: Use HubSpot custom properties as personalization variables
- **Log**: All prospect interactions, lead insights, and engagement data sync back to HubSpot
- **Score**: AiSDR uses existing CRM data for lead scoring and campaign targeting

## Step 4 — Actionable guidance

Based on the user's specific situation, provide:

1. **Step-by-step instructions** tailored to their AiSDR plan and use case
2. **Configuration recommendations** — sending volume ramp schedule, ICP filter strategy, AI Strategist prompts
3. **Benchmark expectations** — what "good" looks like for their plan tier and use case
4. **Next steps** — what to do after initial setup (monitoring cadence, optimization triggers)

For campaign optimization:
- If reply rate < 2%: review AI Strategist context — are you giving it enough info about your value prop and target pain?
- If open rate < 30%: check warmup status, sending reputation, and subject line patterns
- If meetings < 1 per 100 leads: review ICP targeting — too broad or too narrow?

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **30-60 day warmup period is mandatory for new accounts.** Don't expect results in the first month — AiSDR ramps sending volume gradually. Rushing this tanks deliverability.
- **No phone dialer.** AiSDR is email + LinkedIn only. If your sales process requires phone touches, you'll need a separate tool (Aircall, Salesloft, Apollo) running alongside.
- **$2,700 minimum upfront commitment.** Quarterly billing at $900/mo minimum, no free trial. Ask for a demo and negotiate — annual contracts get 20% off.
- **Message credits are not emails — they're AI-generated messages.** 1,200 messages on Explore means 1,200 unique AI-written touchpoints, not 1,200 sends. Multi-step sequences consume multiple credits per prospect.
- **Website visitor identification is Enterprise-only.** If you need to see who's visiting your site, you'll need RB2B, Retention.com, or the Enterprise tier.
- **Limited customization on pre-built playbooks.** You can't build complex branching logic or custom signal-based triggers on Explore/Grow. If you need that level of control, evaluate whether AiSDR's AI-first approach fits or if you need a traditional sequence tool.
- **"Replacing your SDR" is the pitch — augmenting is usually the reality.** AiSDR handles the volume and research grunt work well. Complex deals, relationship building, and real-time objection handling still need humans.
- **Salesforce and Pipedrive integration depth varies.** HubSpot is the most mature integration. Verify current Salesforce/Pipedrive sync capabilities before committing.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-cadence` — Design multi-channel outbound cadences with timing, A/B testing, and content
- `/sales-deliverability` — Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-prospect-list` — Build targeted B2B prospect lists using multiple data sources
- `/sales-enrich` — Enrich contacts and companies with verified data from multiple providers
- `/sales-meeting-scheduler` — Schedule sales meetings with routing, round-robin, and CRM sync
- `/sales-lead-score` — Design and tune lead scoring models
- `/sales-coaching` — Sales coaching, onboarding, and rep enablement
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: First campaign setup
**User says**: "I just signed up for AiSDR Explore. How do I set up my first cold outbound campaign targeting VP Engineering at Series B startups?"
**Skill does**:
1. Walks through email account connection and warmup timeline
2. Configures ICP filters for VP Engineering + Series B + startup signals
3. Guides AI Strategist context input (product value prop, pain points)
4. Sets realistic expectations: 30-60 day warmup, then ~12 meetings per 1,200 messages at good execution
**Result**: Complete campaign setup plan with warmup timeline and optimization checkpoints

### Example 2: Low reply rates
**User says**: "My AiSDR campaigns are getting 35% open rate but only 1% reply rate. What's wrong?"
**Skill does**:
1. Diagnoses the gap (opens work, messages not resonating)
2. Recommends AI Strategist context improvements — more specific pain points, better value prop framing
3. Suggests ICP filter refinement — may be targeting too broadly
4. Sets benchmark: 2-3% reply rate is good for AI-generated cold outreach
**Result**: Prioritized optimization checklist

### Example 3: HubSpot integration
**User says**: "How do I sync my HubSpot lists into AiSDR and make sure responses flow back?"
**Skill does**:
1. Walks through HubSpot connection setup
2. Shows how to import HubSpot lists as campaign targets
3. Explains bi-directional sync — what data flows where
4. Covers using HubSpot custom properties for personalization
**Result**: Working HubSpot ↔ AiSDR integration with data flowing both directions

## Troubleshooting

### Emails going to spam during warmup
**Symptom**: Low open rates and emails landing in spam folders in the first weeks
**Cause**: Warmup not complete — sending volume too high too early, or domain reputation not established
**Solution**: Check warmup dashboard in AiSDR. Don't send cold outreach until warmup shows healthy reputation (typically 30-60 days). If warmup stalls, verify SPF/DKIM/DMARC records for your sending domain. See `/sales-deliverability` for domain authentication setup.

### AI-generated messages sound generic
**Symptom**: Prospects don't reply because messages feel templated despite "AI personalization"
**Cause**: AI Strategist lacks enough context about your product, value prop, and target persona pain points
**Solution**: Feed the AI Strategist more specific information: what exact problem you solve, for whom, with what result. Include customer case studies, specific metrics, and competitive differentiators. The more context you provide, the more specific the AI's research-based personalization becomes.

### HubSpot contacts not syncing
**Symptom**: HubSpot list imported but contacts don't appear in AiSDR campaign
**Cause**: Sync delay, filter mismatch, or missing required fields (email address)
**Solution**: Verify the HubSpot list has email addresses for all contacts. Check AiSDR's HubSpot integration settings for sync status. Allow 5-15 minutes for large lists. If contacts have invalid or catch-all emails, AiSDR's bounce verification may filter them out before adding to the campaign.
