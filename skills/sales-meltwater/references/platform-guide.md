# Meltwater Platform Guide

## Explore (Media Monitoring & Social Listening)

Explore is Meltwater's core monitoring module — it searches and analyzes mentions across news, social media, blogs, forums, print, broadcast, and podcasts.

**Key concepts:**
- **Searches** — saved Boolean queries that continuously monitor for matching content. Each search defines what you're tracking (brand name, competitor, topic).
- **Boolean operators** — `AND`, `OR`, `NOT`, `NEAR/n`, wildcards (`*`), exact phrases (`"..."`). Meltwater's Boolean supports proximity operators that most social tools don't.
- **Sources** — news (300K+ sources globally), social (Facebook, Instagram, X/Twitter, YouTube, Reddit, TikTok, forums, blogs), print, broadcast (TV/radio transcripts).
- **Alerts** — real-time email/Slack/Teams notifications when new mentions match a search.
- **Tags** — label mentions for manual categorization, sentiment correction, or campaign tracking.
- **Dashboards** — visual displays combining multiple searches into a single view with charts, word clouds, sentiment trends, top sources.

**Search best practices:**
- Start broad, then narrow — begin with brand name in quotes, add `NOT` terms to filter noise
- Use `NEAR/n` for context — `"data breach" NEAR/5 "company name"` catches relevant mentions without requiring exact phrase
- Create separate searches for brand, competitors, and industry topics
- Set up daily digest alerts for routine monitoring, real-time alerts for crisis keywords

**Sentiment analysis:**
- Auto-detected (positive, negative, neutral) with ~70-80% accuracy
- Manual override available — correct sentiment on individual mentions
- Sentiment trends over time show brand health trajectory

## Media Relations

Meltwater's media relations module provides a journalist database and outreach tools for PR teams.

**Key features:**
- **Media contacts database** — searchable database of journalists, editors, bloggers, and influencers with contact details, beat coverage, and recent articles
- **Media lists** — curated lists of relevant contacts for specific campaigns or ongoing relationships
- **Pitching** — send personalized pitches directly from Meltwater, track opens and clicks
- **Media requests** — monitor journalist queries and source requests
- **Coverage reports** — track which pitches resulted in coverage, measure earned media

**Contact management:**
- Filter by beat, publication, location, and recent coverage topics
- View journalist's recent articles to personalize outreach
- Track relationship history — past pitches, responses, coverage
- Export contacts for use in external email tools

## Influencer Marketing

Meltwater includes influencer discovery and campaign management capabilities.

**Key features:**
- **Influencer discovery** — search for creators by topic, platform, audience demographics, engagement metrics
- **Campaign management** — plan, execute, and track influencer campaigns
- **Reporting** — measure reach, engagement, EMV, and campaign ROI
- **Content tracking** — monitor influencer posts and stories

## Social Media Management (Engage)

Meltwater's Engage module handles social media publishing and community management.

**Key features:**
- **Publishing** — schedule and publish content across Facebook, Instagram, X/Twitter, LinkedIn, YouTube
- **Content calendar** — visual calendar for planning and coordinating posts across channels
- **Engagement** — unified inbox for responding to comments, messages, and mentions
- **Community management** — assign conversations to team members, track response times
- **Analytics** — channel-level performance metrics, audience growth, engagement rates

## Consumer Intelligence

Consumer Intelligence provides audience insights and market research capabilities.

**Key features:**
- **Audience segmentation** — build audience profiles based on social behavior, interests, and demographics
- **Trend analysis** — identify emerging topics, hashtags, and conversations in your market
- **Competitive intelligence** — benchmark brand perception against competitors
- **Market research** — understand consumer sentiment, preferences, and behavior patterns

## Analytics & Reporting

**Key features:**
- **Custom dashboards** — drag-and-drop widgets combining data from multiple searches and modules
- **360 reports** — comprehensive PR measurement combining earned, owned, and social metrics
- **Scheduled reports** — auto-generate and email reports on a recurring basis (daily, weekly, monthly)
- **Export** — PDF, PowerPoint, CSV, API
- **Metrics** — reach, impressions, engagement, sentiment, share of voice, message pull-through, AVE (deprecated but still available)

## Mira AI

Mira is Meltwater's AI assistant powered by generative AI. Available as both an in-app feature and an API.

**In-app:**
- Ask questions in natural language about your media data
- Generate summaries, identify themes, and surface insights
- Create report narratives from monitoring data

**Mira API:**
- **Endpoint**: Chat completions endpoint for integrating AI-powered media insights into custom applications
- **Modes**: Streaming and non-streaming responses
- **Citations**: Returns source citations for all AI-generated insights
- **MCP Server**: Exposed as a remote MCP server for easy integration with AI assistants and agents
- **Access**: Sold as a separate package — contact your account manager for pricing

## API & Integrations

**Meltwater API (`https://api.meltwater.com/v3/`):**
- **Auth**: API key via `apikey` header. Tokens created in the Meltwater app under API Credentials.
- **HTTPS required** — plain HTTP requests fail
- **OpenAPI spec** available for download (YAML format)

**API feature areas:**
| Area | What it does |
|---|---|
| **Listening** | Export, stream, and analyze mentions from searches |
| **Explore+** | Advanced search with custom fields and optimized queries |
| **Social Analytics** | Fetch content and metrics from owned social accounts |
| **Mira API** | AI-powered chat completions with media intelligence |
| **BYOC** | Import custom content into Meltwater for analysis |
| **Streaming** | Real-time mention streams via API |

**Access**: API features and usage limits depend on your Meltwater package. Check with your account manager.

For detailed endpoint documentation, see `references/meltwater-api-reference.md`.

**Native integrations:**
- **CRM**: Salesforce, HubSpot
- **Communication**: Slack, Microsoft Teams
- **BI**: Power BI (Desktop + Service), Looker Data Studio
- **Automation**: Zapier (beta)
- **Academy**: academy.meltwater.com for training and certification
- **Community**: help.meltwater.com for help articles
