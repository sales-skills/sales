# Sprout Social Platform Guide

## Data model and key concepts

| Concept | What it is |
|---|---|
| **Profile** | A connected social network account (Instagram Business, LinkedIn Page, etc.) |
| **Profile Group** | A collection of profiles for organizing by brand, region, or team |
| **Smart Inbox** | Unified inbox aggregating all messages, comments, mentions, and reviews across profiles |
| **Tag** | Custom labels for messages and posts — used for reporting, filtering, and workflow |
| **Task** | Internal assignments — route a message to a team member with notes and due date |
| **Publishing Calendar** | Visual calendar for scheduling, drafting, and reviewing posts across all profiles |
| **Optimal Send Times** | AI-recommended posting times based on your audience's engagement patterns |
| **Listening Topic** | A social listening query (Boolean or keyword-based) that monitors conversations — requires Listening add-on |
| **AI Assist** | AI-powered features for generating post copy, reply suggestions, tone adjustment, and alt text |

## Module breakdown by plan

| Module | Standard | Professional | Advanced | Enterprise |
|---|---|---|---|---|
| **Publishing** | 5 profiles | Unlimited profiles | Unlimited | Unlimited |
| **Smart Inbox** | Yes | Yes | Yes | Yes |
| **Analytics** | Standard reports | Custom reports, competitor reports | Premium Analytics available | Premium Analytics |
| **Social Listening** | Not included | Add-on | Add-on | Add-on (included in some contracts) |
| **Influencer Marketing** | Not included | Not included | Add-on | Add-on |
| **Employee Advocacy** | Not included | Not included | Add-on | Add-on |
| **AI Assist** | Basic | Enhanced | Full | Full |
| **Approval Workflows** | No | No | Yes | Yes |
| **Chatbot Builder** | No | No | Yes | Yes |
| **API Access** | No | No | Yes | Yes |
| **Salesforce Integration** | No | Contact (Sprout) | Full (Service Cloud) | Full |
| **HubSpot Integration** | No | No | Yes (Advanced only) | Yes |
| **Zendesk Integration** | No | No | Yes | Yes |

## Publishing

- **Content Calendar** — drag-and-drop scheduling across all connected profiles. Supports Instagram (feed, stories, reels), Facebook, LinkedIn, X, TikTok, Pinterest, Threads, Bluesky.
- **Optimal Send Times** — AI analyzes your audience engagement patterns and suggests best posting windows per network.
- **ViralPost** — automatically queues content at optimal times (Professional+).
- **Asset Library** — centralized media storage with image editing, Canva integration, and Adobe Express.
- **Approval Workflows** — multi-step content approval before publishing (Advanced+).
- **Bulk Scheduling** — CSV upload for scheduling posts in bulk.
- **URL Tracking** — auto-append UTM parameters to links for analytics attribution.
- **Campaigns** — group posts into campaigns for cross-channel performance tracking.

## Smart Inbox

- **Unified view** — all messages, comments, mentions, DMs, and reviews across every connected profile in one feed.
- **Message tagging** — apply custom tags for routing, reporting, and trend analysis.
- **Task assignment** — route messages to specific team members with internal notes.
- **Collision detection** — see when another team member is already replying to a message.
- **Smart Views** — filter inbox by profile, message type, tag, sentiment, or network.
- **AI-suggested replies** — AI Assist generates reply drafts based on conversation context.
- **Review management** — respond to Google, Facebook, Glassdoor, TripAdvisor, and Yelp reviews from Smart Inbox.
- **Saved Replies** — template library for common responses.
- **Conversation history** — see full message thread with a contact across channels.

## Analytics & reporting

- **Post Performance** — engagement, impressions, clicks, video views per post across networks.
- **Profile Performance** — audience growth, engagement rate, impressions trend per profile.
- **Cross-Network Reports** — aggregate metrics across all profiles and networks.
- **Competitor Reports** (Professional+) — compare your performance against competitors on public metrics.
- **Tag Reports** — analyze performance by tag to measure campaigns, content themes, or message categories.
- **Premium Analytics** (add-on) — customizable dashboards, presentation-ready exports, advanced filtering, cross-channel attribution.
- **Paid Performance** — Facebook and Instagram ad analytics alongside organic content.
- **Listening Reports** — sentiment trends, topic volume, share of voice (requires Listening add-on).

## Social Listening (add-on)

- **Topic Builder** — create listening queries with keywords, Boolean operators, source filters, and language/location targeting.
- **Sentiment Analysis** — AI-powered positive/negative/neutral classification with manual override.
- **Trend Analysis** — identify trending topics, hashtags, and conversations in your industry.
- **Competitive Listening** — track competitor mentions, sentiment, and share of voice.
- **Audience Insights** — demographics, interests, and behaviors of people discussing your topics.
- **Spike Alerts** — real-time notifications when conversation volume spikes (message spike alerts on Professional+).
- **Listening is social-focused** — monitors social networks and web. Not strong for news/broadcast/print (use Meltwater or Brandwatch for that).

## Influencer Marketing module (add-on)

- **Creator Discovery** — AI-powered search with Natural Language Creator Search, demographic filters, and audience analysis.
- **Brand Fit Scoring** — AI evaluates creator-brand alignment.
- **Creator CRM** — manage relationships, track outreach, store notes.
- **Campaign Management** — brief creators, track deliverables, measure performance.
- **Payments** — built-in creator payment processing.
- **Reporting** — EMV, engagement, reach, and ROI per creator and campaign.
- **Tagger acquisition** — Sprout acquired Tagger Media in 2023, integrating its influencer platform.

## Employee Advocacy module (add-on)

- **Content Curation** — marketing team curates shareable content for employees.
- **Content Suggestions** — AI-powered content recommendations for employees to share.
- **Compliance Controls** — pre-approved messaging, brand guidelines enforcement.
- **Gamification** — leaderboards, points, and recognition to drive participation.
- **Mobile App** — employees share content from their phones.
- **Analytics** — track employee reach, engagement, and earned media value.
- **SSO Integration** — connect to corporate identity providers.

## API

- **Plan requirement**: Advanced or Enterprise plan only.
- **Authentication**: Bearer token (API key generated in Settings → Global Features → API).
- **Key endpoints**:
  - `GET /v1/{customerId}/metadata/customer` — customer/profile metadata
  - `POST /v1/{customerId}/analytics/posts` — post-level analytics
  - `GET /v1/{customerId}/messages` — retrieve messages with filters
  - `POST /v1/{customerId}/messages` — create/publish posts
- **Rate limits**: Not publicly documented — Sprout recommends contacting support for guidance.
- **Webhooks**: Not available — use polling for message/analytics updates.
- **No implementation support**: Sprout does not assist with API implementation. Their support team can troubleshoot API behavior only.

## Integrations

| Integration | Plan | What it does |
|---|---|---|
| **Salesforce Service Cloud** | Advanced+ | Manage social care requests in Service Cloud, enrich CRM with social data |
| **Salesforce Sales Cloud** | Advanced+ | Link social profiles to leads/contacts, social signals in CRM |
| **HubSpot Service Hub** | Advanced only | Create support tickets from social messages, manage contacts |
| **Zendesk** | Advanced+ | Create Zendesk tickets from social messages |
| **Slack** | All plans | Push alerts, share posts and reports to Slack channels |
| **Tableau** | Advanced+ | Export analytics data to Tableau for BI dashboards |
| **Shopify** | All plans | Product tagging, social commerce features |
| **Canva** | All plans | Design assets directly in Sprout's composer |
| **Adobe Express** | All plans | Create and edit images in composer |
| **Google Analytics** | All plans | UTM tracking, traffic attribution |
| **Bitly** | All plans | URL shortening in posts |
