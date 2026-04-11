---
name: sales-social-listening
description: "Social listening and brand monitoring strategy — monitoring, Boolean queries, sentiment, competitive intel, crisis detection, AI visibility monitoring, LLM brand mentions. Platform comparison (Meltwater, Brandwatch, Talkwalker, Brand24, Sprout Social, Mention, Hootsuite, BrandJet), monitoring setup (keywords, sources, alerts), sentiment analysis, competitive benchmarking (share of voice), crisis detection (real-time alerts, escalation), consumer insights, and reporting. Use when setting up brand monitoring, choosing a social listening tool, tracking competitor mentions, measuring brand sentiment, detecting PR crises, analyzing consumer conversations, monitoring AI visibility, or tracking LLM brand mentions. Do NOT use for platform-specific config (use /sales-meltwater), influencer discovery (use /sales-influencer-marketing), social media publishing/scheduling, or SEO keyword research (use /sales-semrush)."
argument-hint: "[describe your social listening question — e.g., 'how do I track competitor mentions' or 'which social listening tool should I use']"
license: MIT
version: 1.0.0
tags: [sales, social-listening, brand-monitoring, media-intelligence, strategy]
---
# Social Listening & Brand Monitoring Strategy

Helps the user plan and execute social listening programs — from choosing the right tool and setting up monitoring through sentiment analysis, competitive intelligence, crisis detection, and reporting.

## Step 1 — Gather context

Ask the user:

1. **What do you need help with?**
   - A) Choosing a social listening tool
   - B) Setting up brand monitoring (keywords, sources, alerts)
   - C) Competitive intelligence / share of voice
   - D) Sentiment analysis and brand health tracking
   - E) Crisis detection and real-time alerts
   - F) Consumer insights and trend analysis
   - G) Reporting and stakeholder communication
   - H) Something else — describe it

2. **What's your primary use case?**
   - A) PR / Communications — tracking media coverage and brand perception
   - B) Marketing — understanding audience sentiment and campaign impact
   - C) Sales / Competitive intel — monitoring competitors and market signals
   - D) Product — tracking feature requests, complaints, and user feedback
   - E) Executive / C-suite — brand health dashboards and crisis alerts
   - F) Agency — managing monitoring for multiple clients

3. **Current setup?**
   - A) No monitoring in place yet
   - B) Manual monitoring (Google Alerts, manual social checks)
   - C) Using a tool — which one?
   - D) Evaluating tools / switching platforms

4. **Budget range?**
   - A) Free / minimal (under $100/mo)
   - B) Mid-market ($100-1,000/mo)
   - C) Enterprise ($1,000+/mo)
   - D) Not sure yet

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- Meltwater setup, config, or features → `/sales-meltwater`
- Influencer discovery or campaign tracking → `/sales-influencer-marketing`
- Email marketing analytics → `/sales-email-marketing`
- SEO keyword research → `/sales-semrush`
- Sales intent signals → `/sales-intent`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Social listening strategy reference

### Platform comparison

| Feature | Meltwater | Brandwatch | Talkwalker | Brand24 | Sprout Social | Mention | Hootsuite | BrandJet |
|---|---|---|---|---|---|---|---|---|
| **Channels** | News, social, print, broadcast, podcasts, forums | Social, news, blogs, forums, reviews | Social, news, blogs, forums, print | Social, news, blogs, forums, podcasts | Social, reviews | Social, news, blogs, forums | Social (30+ networks) | Social, news, AI assistants (ChatGPT, Claude, Perplexity, Gemini) |
| **Source volume** | 300K+ news sources, global | 100M+ sources | 150M+ websites + social | 25M+ online sources | Social-focused | Billions of sources | Social-focused | Social + AI visibility monitoring |
| **Sentiment** | Auto + manual correction | AI-powered, customizable | AI with image recognition | AI-powered | AI-powered | AI-powered | Basic | AI-powered |
| **Boolean queries** | Yes (advanced with NEAR/n) | Yes (advanced) | Yes (advanced) | Basic keyword matching | Basic keywords | Basic keywords | Basic keywords | Basic keywords |
| **Crisis detection** | Real-time alerts via email/Slack/Teams | Signals, anomaly detection | Real-time crisis alerts | Storm Alerts | Smart Inbox alerts | Real-time alerts | Basic alerts | Real-time alerts |
| **Media relations** | Built-in journalist database + pitching | No | No | No | No | No | No | No |
| **Influencer discovery** | Yes | Yes (via acquisition) | Yes | Basic | Yes | No | Yes (limited) | No |
| **Social publishing** | Yes | No | No | No | Yes (core strength) | No | Yes (core strength) | No |
| **Consumer intelligence** | Yes (audience insights, trends) | Yes (deep audience research) | Yes (conversation clusters) | Basic trends | Audience demographics | Basic | Basic | AI visibility insights |
| **API** | Yes (REST, streaming, MCP) | Yes (REST) | Yes (REST) | Yes (REST) | Yes (REST) | Yes (REST) | Yes (REST) | No (webhooks only) |
| **Starting price** | ~$6K/yr (sales call) | Enterprise pricing | Enterprise pricing | $79/mo | $199/mo (Social only) | $41/mo | $99/mo | $60/mo |
| **Best for** | Enterprise PR + comms teams needing news + social + media relations in one | Enterprise brands wanting deep consumer insights and data science | Global brands needing image recognition and visual analytics | SMBs and startups wanting affordable monitoring | Teams needing publishing + listening in one | Startups wanting simple, affordable monitoring | Teams already using Hootsuite for publishing | GTM teams wanting social listening + multi-channel outreach + AI visibility in one |

#### When to choose each platform

- **Meltwater** — best for enterprise PR and communications teams that need media monitoring (news + social + print + broadcast), a journalist database, and influencer marketing in one platform. Strongest news coverage globally. Highest price point.
- **Brandwatch** — best for enterprise brands that need deep consumer intelligence, audience research, and data science-level analysis. Strongest in social data volume and custom dashboards. Owned by Cision.
- **Talkwalker** — best for global brands that need visual analytics (image and video recognition for logo detection in visual content). Acquired by Hootsuite. Strong in multi-language sentiment analysis.
- **Brand24** — best for SMBs and startups that need affordable, easy-to-setup monitoring. Storm Alerts for anomaly detection. Good coverage-to-price ratio. Starts at $79/mo.
- **Sprout Social** — best for social media teams that want publishing, engagement, and listening in one tool. Social-focused (not strong for news monitoring). Starts at $199/mo for social management, listening is an add-on.
- **Mention** — best for startups and small teams wanting simple, affordable brand monitoring. Recently acquired by Agorapulse. $41/mo starting price.
- **Hootsuite** — best for teams already using Hootsuite for social publishing who want to add listening. Talkwalker acquisition added listening capabilities. Social-focused.
- **BrandJet** — best for GTM teams that want social listening + multi-channel outreach + AI visibility monitoring in one platform. Unique differentiator: tracks brand mentions in ChatGPT, Claude, Perplexity, and Gemini. Affordable starting at $60/mo. Less depth than enterprise tools but unified workflow from monitoring → outreach.

### Setting up monitoring

#### 1. Define what to monitor

Start with these monitoring categories:

| Category | What to track | Example keywords |
|---|---|---|
| **Brand** | Company name, product names, executive names, common misspellings | "Acme Corp", "AcmeCorp", "Acme software" |
| **Competitors** | Competitor names, their products, "vs" comparisons | "CompetitorA", "CompetitorA vs", "alternative to CompetitorA" |
| **Industry** | Industry terms, trends, pain points | "marketing automation", "email deliverability" |
| **Campaigns** | Campaign hashtags, landing page URLs, branded terms | "#AcmeLaunch", "acme.com/launch" |
| **Crisis** | Negative keywords combined with brand | "Acme" AND ("breach" OR "lawsuit" OR "outage" OR "scam") |

#### 2. Build effective queries

**Boolean best practices:**
- Use **exact phrases** in quotes: `"brand name"` not `brand name`
- Use **OR** for variations: `"Acme Corp" OR "AcmeCorp" OR "Acme software"`
- Use **NOT** to exclude noise: `"Acme" NOT "acme hardware" NOT "roadrunner"`
- Use **NEAR/n** (if supported) for proximity: `"data breach" NEAR/5 "Acme"` catches "Acme experienced a data breach" without matching unrelated uses
- **Test your queries** — run them and review the first 50 results. If >20% are irrelevant, refine.

**Common mistakes:**
- Too broad → drowning in irrelevant mentions
- Too narrow → missing important conversations
- Not accounting for misspellings, abbreviations, or nicknames
- Not excluding common false positives

#### 3. Configure sources and filters

- **Source selection**: Start with all sources, then narrow if noise is too high
- **Language filters**: Match your target markets
- **Geography**: Filter by country/region if you're a regional brand
- **Source quality**: Exclude low-authority sites if your tool supports it

#### 4. Set up alerts

| Alert type | Trigger | Delivery | Use case |
|---|---|---|---|
| **Real-time** | Any match on crisis keywords | Slack/Teams/email push | Crisis detection |
| **Threshold** | Volume spike (e.g., 3x normal) | Email + Slack | Anomaly detection |
| **Daily digest** | All new mentions since last digest | Email (morning) | Routine monitoring |
| **Weekly summary** | Aggregated metrics + top mentions | Email (Monday) | Stakeholder updates |

### Sentiment analysis

**What it measures**: Whether mentions are positive, negative, or neutral toward your brand.

**Accuracy expectations**: Most tools achieve 70-85% accuracy on English content. Lower for sarcasm, irony, slang, and non-English languages.

**Improving accuracy:**
- Manually correct sentiment on high-impact mentions (top publications, viral posts)
- Create custom sentiment rules for industry-specific terms (e.g., "aggressive" is positive in sales context)
- Review sentiment accuracy monthly — adjust rules as language evolves
- Track sentiment trends over time rather than individual mention scores

**Key metrics:**
| Metric | What it measures | Benchmark |
|---|---|---|
| **Net sentiment** | (Positive - Negative) / Total | Varies by industry, track trend |
| **Sentiment ratio** | Positive : Negative mentions | >3:1 is healthy for most brands |
| **Sentiment shift** | Change in net sentiment over time | Stable or improving = good |

### Competitive intelligence

**Share of Voice (SOV)**: Your brand's % of total conversation volume vs. competitors.

**Measuring SOV:**
1. Create identical monitoring queries for each competitor
2. Compare mention volume over the same time period
3. Track SOV trend monthly — are you gaining or losing conversation share?
4. Break SOV down by channel (news vs social), sentiment, and geography

**Competitive benchmarking checklist:**
- [ ] Mention volume compared to top 3-5 competitors
- [ ] Sentiment comparison — who has better perception?
- [ ] Share of voice trend — gaining or losing?
- [ ] Key topics/themes — what drives competitor mentions?
- [ ] Audience overlap — who's talking about both you and competitors?

### Crisis detection

**Setting up crisis monitoring:**

1. **Define crisis keywords** — combine brand name with negative terms:
   - `"Brand" AND ("breach" OR "hack" OR "leak" OR "outage" OR "down")`
   - `"Brand" AND ("lawsuit" OR "sued" OR "class action" OR "investigation")`
   - `"Brand" AND ("recall" OR "warning" OR "dangerous" OR "unsafe")`

2. **Set volume thresholds** — alert when mention volume exceeds 3x the daily average

3. **Configure escalation** — real-time alert → Slack → designated crisis team member

4. **Response workflow:**
   - Detect (automated alert) → Assess (severity, reach, source credibility) → Escalate (if high severity) → Respond (crafted statement) → Monitor (track response impact)

### Consumer insights

**Mining conversations for insights:**
- **Feature requests** — track "I wish [brand] had..." and "if only [product] could..."
- **Pain points** — monitor "[brand] doesn't..." and "[brand] is too..."
- **Purchase intent** — track "thinking of buying" and "anyone used [brand]?"
- **Competitor switching** — monitor "switching from [brand]" and "alternative to [brand]"

**Trend analysis:**
- Identify rising topics in your industry before competitors
- Track seasonal patterns in conversation volume
- Map conversations to product roadmap priorities

### Reporting

**For executives:**
- Brand health score (composite of sentiment, SOV, volume trend)
- Crisis summary (incidents, response time, resolution)
- Competitive positioning (SOV chart, sentiment comparison)
- Keep it to 1-2 pages, visual, trend-focused

**For marketing:**
- Campaign impact (mention volume + sentiment before/during/after)
- Content performance (what content drove the most conversation)
- Audience insights (who's talking, where, about what)
- Actionable recommendations

**For PR:**
- Media coverage (articles, reach, sentiment, tier breakdown)
- Journalist engagement (who covered you, relationship status)
- Message pull-through (did key messages appear in coverage?)
- Coverage vs. competitors

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Tool selection** — recommend the best tool for their use case, budget, and team
2. **Monitoring setup** — design keyword strategy, configure sources, set up alerts
3. **Competitive analysis** — build competitor tracking, measure share of voice
4. **Crisis plan** — configure detection, design escalation workflow
5. **Reporting** — design dashboards and reports for their stakeholders

## Gotchas

*Best-effort from research — review these, especially items about pricing and capabilities that may change.*

- **Enterprise tools lock you into annual contracts.** Meltwater, Brandwatch, and Talkwalker all require annual commitments with non-transparent pricing. Budget $6K-50K+/year. Negotiate hard before signing and clarify cancellation terms.
- **Sentiment analysis has a ceiling.** No tool exceeds ~85% accuracy on English text. Plan for manual review of high-impact mentions. Non-English, sarcasm, and industry jargon degrade accuracy further.
- **More sources ≠ better monitoring.** Noisy monitoring is worse than no monitoring. Start narrow, validate results, then expand. A focused query with 100 relevant mentions beats a broad one with 10,000 noisy ones.
- **Free tools have severe limitations.** Google Alerts and free tiers miss most social mentions, have no sentiment analysis, and provide no historical data. They're fine for awareness, not for strategic intelligence.
- **Social platform data access is shrinking.** X/Twitter, Reddit, and Meta regularly restrict API access. Tools that are official data partners (Meltwater is a Reddit data partner) have more reliable access. Check which platforms your tool can actually monitor.
- **ROI is hard to prove directly.** Social listening ROI is often indirect (faster crisis response, better content strategy, competitive awareness). Don't promise direct revenue attribution from listening alone.

## Related skills

- `/sales-meltwater` — Meltwater platform help — monitoring, media relations, API, integrations
- `/sales-intent` — Buying intent signals and prioritization from monitoring data
- `/sales-influencer-marketing` — Influencer discovery and campaign tracking
- `/sales-content` — Sales content management and strategy
- `/sales-brandjet` — BrandJet AI platform help — outreach, brand intelligence, AI monitoring
- `/sales-ai-visibility` — AI visibility monitoring — track what LLMs say about your brand
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Choose a social listening tool
**User says**: "I'm a PR manager at a mid-size SaaS company. I need to monitor our brand mentions across news and social. Budget is around $500/mo."
**Skill does**:
1. Evaluates budget constraint against platform pricing
2. Recommends Brand24 ($79/mo) for affordable monitoring with decent coverage, or Mention ($41/mo) for simpler needs
3. Notes that enterprise tools (Meltwater, Brandwatch) are out of budget range
4. Suggests trial periods to test coverage quality for their specific industry
**Result**: Clear recommendation matched to budget and use case

### Example 2: Set up competitive monitoring
**User says**: "I want to track how our brand is performing vs. three competitors in terms of online mentions and sentiment"
**Skill does**:
1. Designs monitoring queries for each brand (including name variations)
2. Sets up share of voice tracking across matched channels
3. Configures sentiment comparison dashboard
4. Creates a monthly competitive report template
**Result**: Competitive intelligence program ready to run

### Example 3: Build a crisis detection system
**User says**: "We need early warning if something negative goes viral about our company"
**Skill does**:
1. Defines crisis keyword combinations (brand + negative terms)
2. Configures real-time alerts with volume spike thresholds
3. Designs escalation workflow (detect → assess → escalate → respond → monitor)
4. Sets up a crisis dashboard with real-time metrics
**Result**: Crisis detection system with automated alerts and escalation plan

## Troubleshooting

### Monitoring returns too much noise
**Symptom**: Thousands of irrelevant mentions drowning out real brand conversations
**Cause**: Queries are too broad, missing NOT exclusions, or source filters are too wide
**Solution**: Review the top 50 mentions. Identify recurring false positive patterns (common words, unrelated companies with similar names, spam domains). Add NOT exclusions for each pattern. Narrow source filters. Consider using NEAR/n proximity operators if your tool supports them.

### Missing important mentions
**Symptom**: You find out about brand mentions from colleagues or customers, not from your monitoring tool
**Cause**: Queries are too narrow, missing name variations, or platform coverage gaps
**Solution**: Audit your keyword list — add misspellings, abbreviations, nicknames, hashtags, and executive names. Check which social platforms your tool actually monitors (some don't cover TikTok, Reddit, or forums). Consider adding a second tool for gap coverage.

### Stakeholders don't find reports useful
**Symptom**: Executives or team members ignore your social listening reports
**Cause**: Reports show data without actionable insights, or metrics don't connect to business outcomes
**Solution**: Lead with insights and recommendations, not raw numbers. Connect metrics to business outcomes (e.g., "negative sentiment spiked 40% after the pricing change — here's what customers are saying"). Tailor report depth to audience — executives want 1-page summaries, marketing wants detailed analysis.
