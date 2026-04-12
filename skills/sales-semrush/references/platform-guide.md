# Semrush Platform Guide

## Core toolkits

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

## Pricing and plan limits

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

## API quick reference

- **Developer portal**: https://developer.semrush.com/
- **Auth**: API key (found in Subscription info > API units)
- **Pricing**: Unit-based — each request consumes API units, costs vary by endpoint
- **Access**: Business plan required (or separate API subscription)
- **Types**: Analytics API (domain/keyword reports), Projects API (position tracking, site audit), Listing Management API
- **MCP Server**: Available for Claude/Cursor integration — check Semrush docs for setup

For full API reference, see `references/semrush-api-reference.md`.

## Key integrations

- **Google**: Analytics, Search Console (native)
- **Project tools**: Trello, monday.com (native); Asana, Jira (via Zapier)
- **CRM**: Salesforce, HubSpot (via Zapier)
- **CMS**: Webflow (native)
- **Zapier**: Site Audit connector available on all plans (no API required)
- **AI**: MCP server for Claude Code / Cursor

## Semrush vs Ahrefs — quick comparison

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
