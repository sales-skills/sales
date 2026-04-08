---
name: sales-semrush
description: "Semrush platform help — the leading SEO and online visibility management platform (27B keywords, 43T backlinks, 808M domain profiles, 142 geo databases). Covers keyword research, site audits, rank tracking, backlink analysis, AI Visibility Toolkit (LLM citation tracking), Content Marketing Toolkit, Traffic & Market Analytics, Local SEO, Advertising Intelligence, Social Media Toolkit, and AI PR. Includes API integration (REST, unit-based consumption), Semrush One, and MCP server setup. Use when working with Semrush data, building SEO workflows, integrating Semrush API, or choosing between Semrush features. Do NOT use for general SEO strategy without Semrush context (use /seo-audit or /ai-seo). Do NOT use for link building strategy (use /build-links). Do NOT use for CRO (use /page-cro)."
argument-hint: "[describe what you need help with in Semrush]"
license: MIT
version: 1.0.0
tags: [sales, seo, marketing, platform]
github: "https://github.com/semrush"
---

# Semrush Platform Help

Helps with everything related to using Semrush — the leading SEO and online visibility platform with 27B keywords, 43T backlinks, and 808M domain profiles across 142 geo databases. Public company (NYSE: SEMR).

## Step 1 — Gather context

Ask the user:

1. **What are you trying to do in Semrush?**
   - A) Keyword research — finding or analyzing keywords
   - B) Site audit — running or interpreting technical SEO audits
   - C) Rank tracking — monitoring positions for keywords
   - D) Backlink analysis — analyzing link profiles or finding opportunities
   - E) Competitive analysis — benchmarking against competitors
   - F) Content marketing — topic research, content optimization
   - G) AI visibility — tracking LLM citations, AI search presence
   - H) Local SEO — Google Business Profile, directory management
   - I) Advertising — PPC research, ad intelligence
   - J) API integration — building automations with Semrush data
   - K) Something else — describe it

2. **What Semrush plan are you on?**
   - A) Pro ($139.95/mo) — keyword research, site audits, competitor analysis
   - B) Guru ($249.95/mo) — + historical data, Content Marketing Toolkit
   - C) Business ($499.95/mo) — + API access, Share of Voice, extended limits
   - D) Free trial / not subscribed yet
   - E) Not sure

3. **What's your experience level with Semrush?**
   - A) New — just getting started
   - B) Intermediate — use it regularly but have specific questions
   - C) Advanced — building automations or custom workflows

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- General SEO audit strategy → `/seo-audit` (third-party)
- AI search optimization strategy → `/ai-seo` or `/seo-geo` (third-party)
- Link building campaigns → `/build-links` (third-party)
- Backlink profile analysis → `/backlink-analyzer` (third-party)
- Landing page CRO → `/page-cro` (third-party)
- Programmatic SEO → `/programmatic-seo` (third-party)
- Content management for sales teams → `/sales-content`

Otherwise, answer directly from the Semrush knowledge below.

## Step 3 — Semrush platform reference

### Core toolkits

**SEO Toolkit** (all plans)
- **Keyword Magic Tool** — enter a seed keyword, get thousands of variations with volume, difficulty (KD%), intent, SERP features. Filter by question keywords, broad/phrase/exact match, include/exclude terms.
- **Keyword Overview** — deep dive on a single keyword: volume, trend, CPC, competition, SERP analysis, keyword variations.
- **Domain Overview** — one-domain snapshot: organic traffic, paid traffic, backlinks, top keywords, competitors.
- **Organic Research** — see any domain's organic keywords, positions, traffic estimates, competitors.
- **Site Audit** — crawl your site for 140+ technical SEO issues: broken links, crawl errors, HTTPS issues, Core Web Vitals, schema markup, internal linking. Generates a health score (0-100).
- **Position Tracking** — track daily rankings for your target keywords across devices and locations.
- **Backlink Analytics** — analyze any domain's backlink profile: referring domains, authority score, anchor text, new/lost links.
- **Backlink Audit** — identify toxic backlinks and generate disavow files.
- **Link Building Tool** — find prospects, manage outreach, track acquired links.

**AI Visibility Toolkit** (newer — check plan availability)
- **LLM Citation Tracking** — monitor when and how AI models (ChatGPT, Perplexity, Gemini) mention your brand.
- **Prompt-Level Visibility** — see which prompts trigger citations of your content.
- **AI Market Share** — benchmark your AI visibility against competitors.
- Tracks 213M+ LLM prompts across major AI platforms.

**Content Marketing Toolkit** (Guru+ plans)
- **Topic Research** — discover content ideas around any topic with questions, subtopics, and headlines.
- **SEO Content Template** — generate content briefs with target keywords, recommended length, readability, and semantically related words.
- **SEO Writing Assistant** — real-time content scoring for SEO, readability, tone, and originality.
- **Post Tracking** — monitor article performance (traffic, shares, backlinks).

**Traffic & Market Analytics** (add-on or Business plan)
- **Traffic Analytics** — estimate any website's traffic, sources, geo distribution, engagement metrics.
- **Market Explorer** — analyze market landscape, growth trends, audience overlap between competitors.
- **EyeOn** — automated competitor monitoring alerts.

**Local SEO Toolkit**
- **Listing Management** — distribute business info to 150+ directories (powered by Yext).
- **Map Rank Tracker** — track positions in local map packs.
- **Review Management** — monitor and respond to reviews across platforms.

**Advertising Toolkit**
- **Advertising Research** — see any domain's Google Ads keywords, ad copy, landing pages.
- **PLA Research** — analyze Shopping/PLA campaigns.
- **Display Advertising** — see competitors' display ad creatives and placements.

**Social Media Toolkit**
- **Social Poster** — schedule posts to Facebook, Twitter/X, Instagram, Pinterest, LinkedIn, Google Business Profile.
- **Social Tracker** — track engagement metrics across platforms.
- **Social Analytics** — audience demographics, engagement trends.

**AI PR Toolkit** (newer)
- **Media Discovery** — find journalists and media outlets by topic.
- **Press Pitch Generator** — AI-generated press pitches.
- **PR Monitoring** — track media mentions and brand coverage.

### Pricing and plan limits

| Feature | Pro ($139.95/mo) | Guru ($249.95/mo) | Business ($499.95/mo) |
|---|---|---|---|
| Keywords to track | 500 | 1,500 | 5,000 |
| Results per report | 10,000 | 30,000 | 50,000 |
| Projects | 5 | 15 | 40 |
| Pages to crawl/mo | 100,000 | 300,000 | 1,000,000 |
| Historical data | No | Yes | Yes |
| Content Marketing | No | Yes | Yes |
| API access | No | No | Yes |
| Share of Voice | No | No | Yes |

- All plans include SEO, advertising, and social media toolkits
- Annual billing saves ~16%
- Additional users: $45-100/mo per seat depending on plan
- 7-day free trial available

### API quick reference

- **Developer portal**: https://developer.semrush.com/
- **Auth**: API key (found in Subscription info > API units)
- **Pricing**: Unit-based — each request consumes API units, costs vary by endpoint
- **Access**: Business plan required (or separate API subscription)
- **Types**: Analytics API (domain/keyword reports), Projects API (position tracking, site audit), Listing Management API
- **MCP Server**: Available for Claude/Cursor integration — check Semrush docs for setup

For full API reference, see `references/semrush-api-reference.md`.

### Key integrations

- **Google**: Analytics, Search Console (native)
- **Project tools**: Trello, monday.com (native); Asana, Jira (via Zapier)
- **CRM**: Salesforce, HubSpot (via Zapier)
- **CMS**: Webflow (native)
- **Zapier**: Site Audit connector available on all plans (no API required)
- **AI**: MCP server for Claude Code / Cursor

### Semrush vs Ahrefs — quick comparison

| Factor | Semrush | Ahrefs |
|---|---|---|
| Database size | 27B keywords, 43T backlinks | 30B keywords, 35T backlinks |
| Strength | All-in-one: SEO + PPC + content + social + local + PR | Focused: SEO + content (deeper backlink index) |
| AI visibility | Yes (LLM citation tracking) | Limited |
| PPC research | Yes (comprehensive) | No |
| Social media | Yes (scheduling + tracking) | No |
| Content tools | Yes (Guru+ plans) | Yes (all plans) |
| Local SEO | Yes (listing management) | No |
| API pricing | Unit-based (Business plan) | Credits-based (all plans) |
| Starting price | $139.95/mo | $129/mo |

**Choose Semrush when**: you need an all-in-one marketing platform covering SEO + PPC + content + social + local. **Choose Ahrefs when**: you're focused purely on SEO and want the deepest backlink data.

## Step 4 — Actionable guidance

Based on the user's situation, provide specific Semrush workflows:

**For keyword research**: Use Keyword Magic Tool with seed keyword → filter by KD% (under 30 for easy wins), intent type (commercial/transactional for sales pages), and volume. Export to spreadsheet or use Keyword Manager to organize.

**For site audits**: Run Site Audit → sort issues by category (Errors > Warnings > Notices). Prioritize: crawlability errors first, then HTTPS issues, then Core Web Vitals, then internal linking. Re-crawl weekly to track progress.

**For rank tracking**: Set up Position Tracking project → add target keywords → set device (mobile/desktop) and location. Check Visibility % trend (more useful than individual positions). Set up alerts for position drops > 5 spots.

**For backlink analysis**: Backlink Analytics → compare your domain vs top 3 competitors. Look at referring domains growth rate, not total count. Use Backlink Gap to find domains linking to competitors but not you.

**For AI visibility**: AI Visibility Toolkit → check which LLM prompts mention your brand. Focus on prompts with commercial intent. Cross-reference with traditional SEO keywords to find gaps where you rank in Google but not in AI answers.

**For API integration**: Start with Domain Overview endpoint (lowest unit cost). Build keyword tracking automations with Position Tracking API. Use Zapier Site Audit connector for alert workflows (no API key needed).

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **API is Business plan only.** At $499.95/mo, API access is gated to the highest tier. The Zapier Site Audit connector works on all plans and doesn't require API keys — use it for basic automations.
- **Traffic estimates are estimates.** Semrush traffic numbers for competitor domains are modeled, not measured. They can be significantly off for niche sites or sites with unusual traffic patterns. Use them for directional comparison, not absolute numbers.
- **Keyword difficulty (KD%) is relative.** A KD of 30 means different things depending on your domain's authority. New sites should target KD < 20; established sites can go higher.
- **Content Marketing Toolkit requires Guru ($249.95/mo).** If you're on Pro and need content features, consider whether the upgrade is worth it vs using a dedicated content tool.
- **Historical data requires Guru+.** Pro plan only shows current data. For trend analysis or competitive historical research, you need at least Guru.
- **Unit costs vary widely by API endpoint.** Some endpoints cost 10 units, others cost 1,000+. Budget carefully and test with small queries first.
- **Free trial auto-renews.** Cancel before the 7-day trial ends to avoid charges. This is the #1 user complaint about Semrush on review sites.
- **Semrush One vs traditional plans.** Semrush One is a newer unified offering combining SEO + AI visibility. Pricing and feature sets may differ from the traditional Pro/Guru/Business tiers listed above.

## Related skills

- `/seo-audit` — General SEO audit strategy (third-party). Install:
  `npx skills add resciencelab/opc-skills --skills seo-audit`
- `/ai-seo` — AI search optimization strategy (third-party). Install:
  `npx skills add resciencelab/opc-skills --skills ai-seo`
- `/build-links` — Link building campaigns and outreach (third-party). Install:
  `npx skills add calm-north/seojuice-skills --skills build-links`
- `/backlink-analyzer` — Backlink profile analysis (third-party). Install:
  `npx skills add aaron-he-zhu/seo-geo-claude-skills --skills backlink-analyzer`
- `/page-cro` — Landing page conversion optimization (third-party)
- `/programmatic-seo` — Generate SEO pages at scale (third-party)
- `/sales-content` — Sales content management (Seismic, Allego, Highspot)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Find easy-win keywords for a new SaaS product
**User says**: "I just launched an AI scheduling tool. How do I find keywords I can actually rank for in Semrush?"
**Skill does**:
1. Opens Keyword Magic Tool with seed keyword "AI scheduling tool"
2. Filters by KD% < 30, volume > 100, commercial or transactional intent
3. Recommends looking at "Questions" tab for content opportunities
4. Suggests using Keyword Gap tool to compare against competitors
5. Advises organizing winners into Keyword Manager lists by topic cluster
**Result**: Actionable keyword list filtered for realistic ranking difficulty

### Example 2: Interpret a site audit and prioritize fixes
**User says**: "My Semrush site audit shows a health score of 62 with 847 issues. Where do I start?"
**Skill does**:
1. Explains the issue hierarchy: Errors (fix first) > Warnings > Notices
2. Recommends sorting by category: crawlability, HTTPS, performance, internal linking
3. Identifies the highest-impact fixes (e.g., broken internal links, redirect chains, missing meta descriptions)
4. Advises re-crawling weekly and tracking health score trend
5. Notes which issues affect Core Web Vitals (Google ranking factor)
**Result**: Prioritized fix list starting with highest-impact technical issues

### Example 3: Set up Semrush API integration for automated reporting
**User says**: "I want to build a weekly SEO report using the Semrush API. Where do I start?"
**Skill does**:
1. Confirms user has Business plan (required for API access)
2. Points to API key location (Subscription info > API units)
3. Recommends starting with Domain Overview endpoint (low unit cost)
4. Suggests Position Tracking API for keyword rankings
5. Warns about unit costs and recommends testing with small queries
6. Mentions MCP server as alternative for Claude Code users
**Result**: API integration plan with endpoint selection and cost management

## Troubleshooting

### Site audit shows different results than Google Search Console
**Symptom**: Semrush site audit flags issues that GSC doesn't, or vice versa
**Cause**: Semrush uses its own crawler (SemrushBot), which crawls differently than Googlebot. Crawl settings (depth, pages/crawl, JavaScript rendering) affect results.
**Solution**: In Site Audit settings, increase crawl depth and enable JavaScript rendering. Compare specific URLs, not aggregate numbers. GSC is ground truth for Google — use Semrush for broader technical issues GSC doesn't flag (broken internal links, redirect chains, image optimization).

### Keyword difficulty seems wrong — easy keywords are actually hard to rank for
**Symptom**: Targeted KD < 20 keywords but can't rank
**Cause**: KD% is based on the backlink profiles of current top-10 results, not your domain's authority. A new domain with DA 10 will struggle even with "easy" keywords if the top results have DA 50+.
**Solution**: Factor in your own domain authority. For new sites (DA < 20), target KD < 10 and long-tail keywords with 4+ words. Use Keyword Gap to find terms where weaker competitors rank — those are your realistic targets.

### API returning "limit exceeded" errors
**Symptom**: API requests fail with quota or unit errors
**Cause**: Each API endpoint consumes a different number of units. High-cost endpoints (backlink reports, bulk keyword data) can drain units quickly.
**Solution**: Check unit costs per endpoint in the API docs before building automations. Start with low-cost endpoints (Domain Overview = 10 units, Organic Positions = 10 units per row). Set up unit consumption alerts in your Semrush dashboard. Consider the Zapier Site Audit connector for workflows that don't need the full API.
