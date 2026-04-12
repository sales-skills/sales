---
name: sales-neoreach
description: "NeoReach platform help — enterprise influencer marketing SaaS + managed services, 3M+ creator database with 40+ discovery filters, AI recommendation engine, fraud detection, campaign management (contracts, content tracking, payments), analytics (ROI, CPM, CPE, proprietary IMV metric), REST API (400+ data points, sponsorship pricing, audience matching, competitor spend), and optional managed campaign services. Use when NeoReach discovery isn't surfacing relevant creators, fraud scores look suspicious, campaign ROI or IMV numbers seem off, API integration isn't returning data, unsure whether to use managed services or self-serve, or need to compare NeoReach pricing with alternatives. Do NOT use for influencer marketing strategy across platforms (use /sales-influencer-marketing), TikTok marketing strategy (use /sales-tiktok-marketing), or gaming influencer marketing (use /sales-gaming-marketing)."
argument-hint: "[describe what you need help with in NeoReach]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, platform]
github: "https://github.com/neoreach"
---

# NeoReach Platform Help

Helps users configure and get the most out of NeoReach — enterprise influencer marketing platform combining SaaS tools with optional managed campaign services.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Influencer discovery and search
   - B) Campaign setup and management
   - C) Fraud detection and creator vetting
   - D) Analytics, reporting, or IMV metrics
   - E) API integration
   - F) Managed services vs self-serve decision
   - G) Pricing or plan evaluation
   - H) Something else — describe it

2. **What's your current NeoReach setup?**
   - A) Evaluating NeoReach (haven't signed up yet)
   - B) Just started — setting up for the first time
   - C) Active user — need help with a specific feature
   - D) Considering managed services vs self-serve SaaS

3. **What's your use case?**
   - A) Brand running influencer campaigns in-house
   - B) Agency managing multiple brand clients
   - C) Enterprise team integrating via API
   - D) Evaluating NeoReach vs alternatives

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a different skill, route:
- Influencer marketing strategy across platforms → `/sales-influencer-marketing`
- TikTok marketing strategy → `/sales-tiktok-marketing`
- Gaming influencer marketing → `/sales-gaming-marketing`
- Competitor platform help → hand off to that platform's skill (e.g., `/sales-creatoriq`, `/sales-modash`)

Otherwise, answer directly from the platform reference below.

## Step 3 — NeoReach platform reference

### Platform overview

NeoReach operates in three areas:
1. **SaaS platform** — self-serve influencer discovery, campaign management, analytics
2. **Data Intelligence API** — REST API with 400+ data points for enterprise integrations
3. **Managed services** — full-service campaign execution by NeoReach's team

### Influencer discovery

- **Database**: 3M+ indexed influencer profiles across Instagram, TikTok, YouTube, and other platforms
- **Search filters**: 40+ filters including keywords, social platform, audience demographics (age, gender, location, interests, income, occupation, marital/parental status), brand affinities, engagement metrics, and follower ranges
- **AI recommendation engine**: Learns from your selections and improves suggestions over time — the more you use it, the better it gets at matching creators to your brand
- **Lookalike search**: Find creators similar to ones already performing well
- **Conversation topics**: Search by what creators talk about, not just their bio or hashtags

### Fraud detection

- **Fake follower analysis**: Detects purchased followers, bot accounts, and artificially inflated engagement
- **Engagement authenticity**: Identifies engagement pods, comment spam, and coordinated artificial boosting
- **Audience verification**: Confirms audience demographics match what the creator claims
- **Always-on monitoring**: Continuous fraud checks, not just point-in-time snapshots

### Campaign management

- **Centralized hub**: Plan campaigns, coordinate influencer relationships, manage contracts, track deadlines, review posts, and track payment history in one place
- **Content tracking**: Monitor content progress from brief through publication
- **Contract management**: Handle agreements, deliverables, and timelines
- **Team collaboration**: Shared workspace across your organization
- **Payment tracking**: Track payment history and status per influencer

### Analytics and reporting

- **Influencer Media Value (IMV)**: NeoReach's proprietary ROI metric that estimates the media value of influencer content — used to demonstrate campaign ROI in terms stakeholders understand
- **Campaign metrics**: ROI, CPM, CPE, impressions, engagements at campaign, post, and influencer level
- **Audience exposure demographics**: Understand who you're actually reaching — age, gender, location breakdowns of the audience that saw your campaign content
- **Multi-influencer comparison**: Compare performance across creators within a campaign
- **Competitor spend analysis**: See what competitors are spending on influencer marketing (via API)

### API

NeoReach offers a REST API returning JSON data. Key capabilities:

- **Sponsorship pricing data** — historical and current influencer rates
- **Audience matching** — find creators whose audience matches your target demographics
- **Fast-growing influencer tracking** — identify rising creators before they're expensive
- **Competitor spend analysis** — monitor competitor influencer budgets
- **Historical price and ROI data** — benchmark rates and expected returns
- **Fraud detection** — programmatic access to fraud scoring
- **400+ custom data points** — integrate into in-house tools and dashboards

API access is enterprise-tier and requires a sales conversation. No public developer documentation is available — API specs and auth details are provided during onboarding.

### Managed services

For brands that want NeoReach's team to run campaigns end-to-end:

- **Campaign strategy** — NeoReach plans the influencer strategy based on your goals
- **Creator sourcing and vetting** — their team finds and vets creators using the platform's data
- **Outreach and negotiation** — NeoReach handles all creator communication
- **Content coordination** — review and approval workflows managed by their team
- **Reporting** — campaign performance reports delivered to your team
- **Minimum engagement**: $25K+ per managed campaign

### Pricing

*Best-effort from research — verify current pricing directly with NeoReach.*

| Tier | Price | Best for |
|---|---|---|
| Small team SaaS | ~$399/mo | Small teams needing basic discovery and campaign management |
| Full platform SaaS | ~$1,500/mo | Larger teams needing full analytics, API preview, and advanced features |
| Enterprise annual | $50K-$500K/yr | Large brands or agencies with custom requirements and API access |
| Managed campaigns | $25K+ per campaign | Brands wanting full-service campaign execution |

Plan-gated features (enterprise pricing required):
- Full API access with 400+ data points
- Competitor spend analysis
- Advanced audience matching
- Historical pricing data
- Custom integrations

### Supported platforms

- Instagram
- TikTok
- YouTube
- Additional platforms indexed but less prominently featured

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Discovery optimization** — how to use 40+ filters effectively, building lookalike audiences from top performers, leveraging the AI recommendation engine
2. **Fraud detection workflow** — using NeoReach's fraud tools as part of the vetting process, interpreting fraud scores, setting thresholds
3. **Campaign setup** — structuring campaigns in NeoReach, setting up tracking, managing multi-influencer campaigns
4. **API integration** — what's possible via API, planning an integration, working with NeoReach's team on API access
5. **Managed vs self-serve decision** — when managed services make sense vs running campaigns yourself
6. **Platform evaluation** — NeoReach vs alternatives based on use case, budget, and scale

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Enterprise pricing only.** NeoReach starts at ~$399/mo but enterprise API access and advanced features require $50K+/yr contracts. Not viable for small or medium businesses. If budget is under $5K/mo, look at Modash ($199/mo), Heepsy ($49/mo), or Afluencer (free tier).
- **No public API documentation.** Unlike platforms like Meltwater or CreatorIQ that publish API docs, NeoReach's API details are only available after signing an enterprise contract. You can't evaluate the API before committing.
- **Interface can be slow.** G2 reviewers report clunky interface and slow loading times, particularly when running complex searches with many filters. Plan extra time for discovery sessions.
- **Limited micro-influencer coverage.** NeoReach's 3M+ database skews toward larger creators. If your strategy focuses on nano/micro-influencers (under 50K followers), platforms like Heepsy (11M+ profiles) or Modash (350M+ profiles) may surface more options.
- **Managed services minimum is $25K+.** The managed campaign option is not available for smaller budgets. For sub-$25K managed influencer campaigns, consider Famesters or House of Marketers.
- **IMV metric is proprietary.** NeoReach's Influencer Media Value calculation is internal — you can't replicate or verify the methodology independently. Useful for internal reporting but may not satisfy external audit requirements.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, creator discovery, vetting, campaign tracking, ROI measurement
- `/sales-creatoriq` — CreatorIQ platform help — enterprise influencer OS, closest NeoReach competitor
- `/sales-modash` — Modash platform help — Shopify-focused influencer marketing, more accessible pricing
- `/sales-heepsy` — Heepsy platform help — budget-friendly influencer discovery
- `/sales-tiktok-marketing` — TikTok marketing strategy — organic, paid, influencer
- `/sales-gaming-marketing` — Gaming influencer marketing strategy
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Evaluate NeoReach vs alternatives
**User says**: "Is NeoReach worth it for our DTC brand doing $2M/yr?"
**Skill does**:
1. Asks about current influencer program maturity, budget, team size, and priorities
2. Compares NeoReach's enterprise positioning against their needs
3. If budget allows ($50K+/yr), highlights NeoReach's strengths: AI discovery, fraud detection, IMV analytics, managed services option
4. If budget is tight, recommends Modash or Creator.co as more accessible alternatives
5. Notes NeoReach's managed services option if they lack in-house expertise
**Result**: Clear recommendation with reasoning matched to their scale and budget

### Example 2: Set up fraud detection workflow
**User says**: "How do I use NeoReach to check if an influencer's followers are real?"
**Skill does**:
1. Walks through NeoReach's fraud detection features: fake follower analysis, engagement authenticity scoring, audience verification
2. Recommends a three-round vetting process: quick content scan → NeoReach fraud score check → deep audience demographic analysis
3. Sets thresholds: flag creators with >25% suspicious followers, engagement rates >10% (likely pods), or audience location mismatches
4. Notes that NeoReach's always-on monitoring catches changes over time, not just point-in-time
**Result**: Complete fraud detection workflow using NeoReach's built-in tools

### Example 3: Integrate NeoReach API
**User says**: "I want to pull NeoReach data into our internal dashboard"
**Skill does**:
1. Explains what's available via NeoReach's REST API: 400+ data points, sponsorship pricing, audience matching, competitor spend, fraud scoring
2. Notes that API access requires enterprise-tier contract — no public docs to evaluate beforehand
3. Recommends contacting NeoReach sales to request API documentation and sandbox access before committing
4. Suggests starting with a proof-of-concept using a small subset of endpoints to validate the integration fits their needs
**Result**: Clear path to API integration with realistic expectations about the onboarding process

## Troubleshooting

### Search results are too broad or irrelevant
**Symptom**: Discovery searches return thousands of creators that don't match your brand
**Cause**: Not using enough filters or relying on keyword search alone
**Solution**: Layer filters progressively — start with platform + follower range, then add audience demographics (location, age, gender), then content topics. Use the AI recommendation engine by favoriting good matches so it learns your preferences. Try lookalike search from your best-performing existing creators.

### Can't justify the cost to stakeholders
**Symptom**: NeoReach's enterprise pricing is hard to get approved internally
**Cause**: Influencer marketing ROI is often poorly measured, making it hard to justify platform spend
**Solution**: Use NeoReach's IMV metric to quantify campaign value in media-equivalent terms. Request a pilot campaign (managed or self-serve) to generate concrete ROI data before committing to an annual contract. Compare the cost against agency fees — $50K/yr for SaaS is cheaper than most agencies charging $25K+ per campaign.

### Managed service campaign didn't meet expectations
**Symptom**: NeoReach's managed team delivered a campaign but results were below target
**Cause**: Misaligned expectations, unclear brief, or wrong creator-brand fit
**Solution**: Review the original brief — were KPIs specific and measurable? Were target creators approved by your team before outreach? For future managed campaigns, request creator approval rights, set specific performance benchmarks upfront, and schedule mid-campaign check-ins to course-correct if content isn't resonating.
