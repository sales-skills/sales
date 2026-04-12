---
name: sales-social-listening
description: "Social listening and brand monitoring strategy — monitoring, Boolean queries, sentiment, competitive intel, crisis detection, AI visibility monitoring, LLM brand mentions. Platform comparison (Meltwater, Brandwatch, Talkwalker, Brand24, Sprout Social, Mention, Hootsuite, BrandJet, Influencity), monitoring setup (keywords, sources, alerts), sentiment analysis, competitive benchmarking (share of voice), crisis detection (real-time alerts, escalation), consumer insights, and reporting. Use when you don't know what people are saying about your brand, competitors are getting mentioned more than you, negative sentiment is spiking and you need to understand why, you're missing PR crises until it's too late, you can't tell if your brand shows up in AI/LLM answers, or you need to pick the right social listening tool. Do NOT use for platform-specific config (use /sales-meltwater), influencer discovery (use /sales-influencer-marketing), social media publishing/scheduling, or SEO keyword research (use /sales-semrush)."
argument-hint: "[describe your social listening question — e.g., 'how do I track competitor mentions' or 'which social listening tool should I use']"
license: MIT
version: 1.0.0
tags: [sales, social-listening, brand-monitoring, media-intelligence, strategy]
---
# Social Listening & Brand Monitoring Strategy

Helps the user plan and execute social listening programs — from choosing the right tool and setting up monitoring through sentiment analysis, competitive intelligence, crisis detection, and reporting.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

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
- Sprout Social setup, config, or features → `/sales-sproutsocial`
- Brandwatch setup, config, or features → `/sales-brandwatch`
- Meltwater setup, config, or features → `/sales-meltwater`
- Influencity Monitoring or influencer marketing → `/sales-influencity`
- Influencer discovery or campaign tracking → `/sales-influencer-marketing`
- Email marketing analytics → `/sales-email-marketing`
- SEO keyword research → `/sales-semrush`
- Sales intent signals → `/sales-intent`
- GRIN social listening setup or configuration → `/sales-grin`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Social listening strategy reference

**Read `references/platform-guide.md`** for detailed platform comparison, monitoring setup, Boolean query guidance, sentiment analysis, competitive intelligence, crisis detection, consumer insights, and reporting frameworks.

*You no longer need the platform guide details — focus on the user's specific situation.*

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

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-sproutsocial` — Sprout Social platform help — Publishing, Smart Inbox, Analytics, Listening, Influencer, Advocacy, API
- `/sales-brandwatch` — Brandwatch platform help — Consumer Intelligence, Social Media Management, Influence, API
- `/sales-meltwater` — Meltwater platform help — monitoring, media relations, API, integrations
- `/sales-social-media-management` — Social media management strategy — publishing, scheduling, engagement, tool comparison
- `/sales-employee-advocacy` — Employee advocacy strategy — content curation, gamification, compliance
- `/sales-intent` — Buying intent signals and prioritization from monitoring data
- `/sales-influencity` — Influencity platform help — Monitoring module for brand tracking and competitor analysis
- `/sales-influencer-marketing` — Influencer discovery and campaign tracking
- `/sales-content` — Sales content management and strategy
- `/sales-brandjet` — BrandJet AI platform help — outreach, brand intelligence, AI monitoring
- `/sales-grin` — GRIN platform help — includes social listening with hashtag monitoring and brand mention alerts
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
