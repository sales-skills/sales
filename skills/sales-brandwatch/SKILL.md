---
name: sales-brandwatch
description: "Brandwatch platform help — Consumer Intelligence (social listening, 100M+ sources, Boolean queries, sentiment, audience research), Social Media Management (formerly Falcon.io — content calendar, social inbox, publishing, engagement), Influencer Marketing (Influence module — discovery, campaigns), Search Intelligence (Trajaan — GenAI monitoring), and 6 REST APIs (Analysis, Consumer Research, Data Upload, Measure, Publish, Engage). Use when Brandwatch queries return too much noise, dashboards not showing the right data, social posts not publishing on schedule, Influence campaigns underperforming, Brandwatch API calls failing, or unsure why metrics look wrong. Do NOT use for social listening strategy across tools (use /sales-social-listening), influencer marketing strategy across tools (use /sales-influencer-marketing), media relations or journalist databases (use /sales-media-relations or /sales-meltwater), or AI visibility monitoring (use /sales-ai-visibility)."
argument-hint: "[describe what you need help with in Brandwatch]"
license: MIT
version: 1.0.0
tags: [sales, social-listening, consumer-intelligence, social-media-management, influencer-marketing, platform]
github: "https://github.com/BrandwatchLtd"
---
# Brandwatch Platform Help

Helps the user configure and use Brandwatch — from setting up monitoring queries and dashboards through social media management, influencer campaigns, API integration, and troubleshooting. Brandwatch is part of the Cision Group.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which Brandwatch module do you need help with?**
   - A) Consumer Intelligence — monitoring, queries, sentiment, dashboards, audience research
   - B) Social Media Management — content calendar, social inbox, publishing, engagement
   - C) Influencer Marketing (Influence) — creator discovery, campaigns
   - D) Search Intelligence — GenAI monitoring, search data
   - E) API integration — Consumer Research API, Data Upload, Publish, Engage, Measure
   - F) Integrations — Salesforce, Slack, CRM sync
   - G) Something else — describe it

2. **What's your role?**
   - A) Market researcher / consumer insights
   - B) Social media manager
   - C) PR / communications
   - D) Marketing / brand manager
   - E) Developer / data engineer
   - F) Agency managing multiple clients

3. **Current setup?**
   - A) New to Brandwatch — setting up for the first time
   - B) Already using Brandwatch — need help with a specific feature
   - C) Migrating from another tool
   - D) Evaluating Brandwatch vs competitors

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a strategy skill, route:
- Social listening strategy across tools → `/sales-social-listening`
- Influencer marketing strategy across tools → `/sales-influencer-marketing`
- Media relations or journalist databases → `/sales-media-relations`
- AI visibility monitoring (ChatGPT, Claude, Perplexity) → `/sales-ai-visibility`
- Connecting Brandwatch to other tools (Zapier, Make) → `/sales-integration`

Otherwise, answer directly from the platform reference below.

## Step 3 — Brandwatch platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Query setup** — design Boolean queries, configure sources, set up alerts and Signals
2. **Dashboard design** — build dashboards for their use case (executive reporting, competitive intel, crisis monitoring)
3. **Sentiment optimization** — configure custom rules, design manual review workflow
4. **Social management** — set up content calendar, configure inbox routing, design approval workflows
5. **API integration** — authenticate, retrieve mentions/analytics, upload custom data (see references/brandwatch-api-reference.md)
6. **Migration** — plan data export from current tool, query translation, team onboarding

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **Annual contracts with auto-renewal.** Brandwatch has been reported to auto-renew contracts without explicit notification. Verify renewal terms upfront, set calendar reminders 90 days before renewal, and get cancellation terms in writing before signing.
- **Social scheduling has no cross-posting.** Each post must have its channel and platform selected individually — you cannot schedule one post across multiple platforms simultaneously. Plan extra time for multi-channel publishing.
- **Sentiment accuracy is 60-75%, not higher.** Do not present AI sentiment scores as ground truth. Manual correction on high-impact mentions is essential. Non-English content and sarcasm degrade accuracy further.
- **Steep learning curve.** The platform has a complex UI with many modules. Budget 2-4 weeks for team onboarding. Request dedicated onboarding support from your account manager — do not rely solely on self-service docs.
- **Onboarding support varies.** Multiple users report that sales handoff to customer success is inconsistent. Escalate early if your account manager is unresponsive — ask for a technical implementation specialist.
- **Consumer Intelligence and Social Management are separate products.** They can be purchased independently. Features that span both (e.g., social inbox with listening data) require both subscriptions. Clarify exactly which modules are included in your contract.
- **Channels disconnect.** Social network connections can break periodically (common across all social management tools). Check channel health weekly, especially after social platform API updates. Reconnect promptly to avoid gaps in data.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-social-listening` — Social listening strategy across tools — choosing tools, monitoring setup, sentiment, competitive intel, crisis detection
- `/sales-influencer-marketing` — Influencer marketing strategy — creator discovery, vetting, campaign tracking, ROI
- `/sales-meltwater` — Meltwater platform help — media intelligence, social listening, media relations, API (direct competitor)
- `/sales-media-relations` — Media relations and PR strategy across tools
- `/sales-ai-visibility` — AI visibility monitoring — track brand mentions in ChatGPT, Claude, Perplexity, Gemini
- `/sales-integration` — Connect Brandwatch to CRM, BI tools, and other platforms via API/Zapier/Make
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up brand monitoring from scratch
**User says**: "I just got access to Brandwatch Consumer Intelligence. How do I set up monitoring for my SaaS brand?"
**Skill does**:
1. Designs Boolean queries: brand name (with variations), competitor names, industry terms, crisis keywords
2. Configures source selection and language/geography filters
3. Sets up a dashboard with volume trend, sentiment breakdown, top sources, and competitive SOV
4. Configures Signals for anomaly detection and Slack alert integration
5. Creates a daily digest and weekly stakeholder report schedule
**Result**: Complete monitoring setup with queries, dashboards, alerts, and reporting

### Example 2: Improve sentiment analysis accuracy
**User says**: "Our Brandwatch sentiment scores don't match reality — lots of sarcastic posts are showing as positive"
**Skill does**:
1. Explains the 60-75% accuracy baseline and why sarcasm is a known limitation
2. Creates custom sentiment rules for industry-specific terms and known sarcastic patterns
3. Designs a manual review workflow for high-impact mentions (top publications, viral posts)
4. Recommends focusing on sentiment trends over time rather than individual scores
5. Sets up a monthly accuracy audit process
**Result**: Improved sentiment accuracy workflow with custom rules and review process

### Example 3: Integrate Brandwatch API with a data pipeline
**User says**: "I need to pull Brandwatch mention data into our data warehouse for custom reporting"
**Skill does**:
1. Walks through OAuth 2.0 authentication (api-password grant type)
2. Shows how to retrieve mentions with filters (date range, sentiment, source)
3. Demonstrates pagination for large datasets
4. Suggests using the Python SDK (bcr-api) for automation
5. Points to references/brandwatch-api-reference.md for endpoint details
**Result**: Working API integration pulling mentions into their data pipeline

## Troubleshooting

### Sentiment analysis shows wrong results
**Symptom**: Many mentions are classified as positive when they're clearly negative (or vice versa)
**Cause**: Brandwatch sentiment accuracy is 60-75%. Sarcasm, irony, industry jargon, and non-English content reduce accuracy further.
**Solution**: Accept the accuracy ceiling. Create custom sentiment rules for industry terms. Manually correct high-impact mentions. Focus on sentiment trend direction (improving/declining) rather than absolute scores. For critical analysis, sample 50 mentions and manually verify — use this as your accuracy benchmark.

### Missing mentions that should appear in dashboards
**Symptom**: You discover brand mentions via other channels (email alerts, colleagues, direct social browsing) that don't appear in Brandwatch
**Cause**: Query too narrow (missing name variations), source coverage gaps (TikTok, some forums, private groups), or data ingestion delay
**Solution**: Audit your query — add misspellings, abbreviations, hashtags, product names, and executive names. Check which platforms Brandwatch monitors (no TikTok, limited forum coverage). Note that data ingestion can lag 15-60 minutes for some sources. Consider adding a second monitoring tool for gap coverage (Brand24 or Mention for affordable supplemental monitoring).

### Social channels keep disconnecting
**Symptom**: Posts fail to publish or inbox stops receiving messages because a social channel shows as disconnected
**Cause**: Social platform API token expiration, platform API changes, or permission changes on the social account
**Solution**: Check channel health in Settings → Channels weekly. Reconnect disconnected channels immediately — requires re-authenticating with the social platform. After major social platform updates (especially Meta/Instagram), proactively check all connections. Set up a weekly calendar reminder to verify channel status. If a channel disconnects repeatedly, contact Brandwatch support — it may be a platform-level API issue.
