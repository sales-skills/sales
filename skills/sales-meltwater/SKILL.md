---
name: sales-meltwater
description: "Meltwater platform help — media intelligence, social listening, media relations (journalist database + outreach), influencer marketing, social media management, consumer intelligence, Mira AI, API, and integrations. Use when Meltwater Explore searches return noisy results, media monitoring is missing coverage, journalist contacts are outdated, influencer campaigns aren't tracking properly, social publishing isn't scheduling, Meltwater API or Mira AI isn't returning expected data, or CRM/BI integrations aren't syncing. Do NOT use for cross-platform social listening strategy (use /sales-social-listening), cross-platform media relations strategy (use /sales-media-relations), cross-platform influencer marketing strategy (use /sales-influencer-marketing), or email deliverability (use /sales-deliverability)."
argument-hint: "[describe what you need help with in Meltwater]"
license: MIT
version: 1.0.0
tags: [sales, media-intelligence, social-listening, PR, platform]
github: "https://github.com/meltwater"
---
# Meltwater Platform Help

Help the user with Meltwater platform questions — from Explore searches and social listening through media relations, influencer marketing, social publishing, consumer intelligence, Mira AI, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Meltwater do you need help with?**
   - A) Explore — media monitoring, Boolean searches, news alerts, social listening
   - B) Media Relations — journalist database, contact lists, pitching, media outreach
   - C) Influencer Marketing — creator discovery, campaign management, reporting
   - D) Social Media Management — publishing, scheduling, engagement, content calendar
   - E) Consumer Intelligence — audience insights, market research, trend analysis
   - F) Analytics & Reporting — dashboards, custom reports, PR measurement, 360° reports
   - G) Mira AI — AI-powered insights, chat completions, MCP server integration
   - H) API & Integrations — Meltwater API, Power BI, Looker, Salesforce, HubSpot, Zapier
   - I) Admin — account settings, user management, API credentials, billing
   - J) Something else — describe it

2. **What's your role?**
   - A) PR / Communications
   - B) Marketing / Brand
   - C) Social media manager
   - D) Sales / Competitive intelligence
   - E) Analyst / Researcher
   - F) Developer / Integration engineer
   - G) Agency managing multiple clients
   - H) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Social listening strategy across tools → `/sales-social-listening`
- Media relations strategy across tools → `/sales-media-relations`
- Influencer marketing strategy across tools → `/sales-influencer-marketing`
- Email deliverability → `/sales-deliverability`
- Tool integration architecture → `/sales-integration`
- CRM data quality → `/sales-data-hygiene`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Meltwater platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Monitoring setup** — help build Boolean searches, configure alerts, set up dashboards
2. **Media outreach** — build contact lists, draft pitches, track coverage
3. **Influencer campaigns** — discover creators, plan campaigns, set up tracking
4. **Social publishing** — configure channels, build content calendar, set up workflows
5. **API integration** — authenticate, choose endpoints, build data pipelines
6. **Reporting** — design dashboards, configure scheduled reports, interpret metrics

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **No transparent pricing.** Meltwater sells exclusively through sales calls. Pricing ranges from ~$6,000/year to $50,000+/year depending on modules and seats. All contracts are annual — no monthly option. Negotiate before signing.
- **API access is plan-gated.** Which API features you can use and your usage limits depend on your Meltwater package. Mira API is sold as a separate add-on package.
- **Contract auto-renewal.** Meltwater contracts typically auto-renew. Cancel well before your renewal date — multiple reviewers report being locked into renewals after missing the cancellation window.
- **Media contact freshness varies.** Journalist contacts may be outdated, especially for niche beats or regional publications. Verify contact details before pitching — check the journalist's recent articles and social profiles.
- **Sentiment accuracy is imperfect.** Auto-detected sentiment is ~70-80% accurate. For critical reporting, manually review and correct sentiment on key mentions. Sarcasm, irony, and non-English content are common failure modes.
- **Boolean learning curve.** Effective monitoring requires well-crafted Boolean queries. Start with Meltwater's Boolean templates and refine — poorly constructed searches return noisy, irrelevant results (top user complaint).
- **Zapier integration is beta.** The Zapier connector has limited triggers and actions compared to native API integration. For production workflows, use the API directly.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-social-listening` — Cross-platform social listening and brand monitoring strategy
- `/sales-media-relations` — Cross-platform media relations, journalist outreach, and PR strategy
- `/sales-influencer-marketing` — Influencer marketing strategy across platforms
- `/sales-integration` — Connecting Meltwater to CRM, BI tools, and automation platforms
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Set up brand monitoring
**User says**: "I need to track mentions of my company across news and social media"
**Skill does**:
1. Helps build Boolean search queries for brand name + variations
2. Configures source filters (news, social, broadcast)
3. Sets up real-time alerts for high-priority mentions (crisis keywords)
4. Creates a dashboard with sentiment trends, top sources, and volume over time
**Result**: Complete monitoring setup with searches, alerts, and dashboard

### Example 2: Build a PR media list
**User says**: "I need to find tech journalists who cover AI startups for a product launch"
**Skill does**:
1. Searches the media contacts database by beat (AI, startups, technology)
2. Filters by publication tier and recent coverage topics
3. Builds a media list with personalized context for each journalist
4. Suggests pitch angle based on journalist's recent articles
**Result**: Targeted media list ready for outreach

### Example 3: Connect Meltwater to Power BI
**User says**: "I want to pull Meltwater monitoring data into our Power BI dashboards"
**Skill does**:
1. Walks through API credential setup in Meltwater
2. Configures the Power BI connector or API-based data pipeline
3. Maps Meltwater data fields to Power BI datasets
4. Sets up refresh schedule for automated updates
**Result**: Live Meltwater data flowing into Power BI dashboards

## Troubleshooting

### Monitoring returns too many irrelevant results
**Symptom**: Explore search returns clickbait articles, AI-generated SEO content, and unrelated mentions
**Cause**: Boolean search query is too broad, missing `NOT` exclusions
**Solution**: Add `NOT` terms to exclude common noise sources. Use `NEAR/n` proximity operators instead of `AND` to require terms to appear close together. Exclude specific domains that consistently produce irrelevant results. Use Meltwater's source quality filters to limit to trusted publications.

### Sentiment analysis is incorrect
**Symptom**: Mentions tagged as positive are actually negative, or vice versa
**Cause**: Automated sentiment analysis struggles with sarcasm, irony, industry jargon, and non-English content
**Solution**: For critical reports, manually review and correct sentiment on key mentions using tags. Set up a periodic sentiment audit process. Consider filtering by sentiment confidence score if available in your plan.

### API token not working
**Symptom**: API requests return 401 Unauthorized
**Cause**: Token expired, revoked, or missing from request header
**Solution**: Verify the token is included as an `apikey` header (not a query parameter or Bearer token). Check that the token hasn't been revoked in the Meltwater app. Create a new token under API Credentials if needed. Ensure requests use HTTPS — plain HTTP will fail.
