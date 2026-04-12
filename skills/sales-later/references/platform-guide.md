# Later Platform Guide

## Later Social — Scheduling & Publishing

### Supported networks and post types

| Network | Post types | Auto-publish | Notes |
|---|---|---|---|
| **Instagram** | Feed, Reels, Stories, Carousels | Yes (Business/Creator accounts) | Grid preview, first comment scheduling |
| **TikTok** | Video posts | Yes | Best time to post suggestions |
| **Facebook** | Posts, Reels | Yes | Pages only (not personal profiles) |
| **LinkedIn** | Posts | Yes | Personal + Company pages |
| **Pinterest** | Pins | Yes | Board selection, pin descriptions |
| **YouTube** | Shorts | Yes | Limited to Shorts |
| **Snapchat** | Stories | Yes | Business accounts |
| **Threads** | Text posts | Yes | Via Instagram connection |

### Social sets

Later pricing is based on "social sets" — one set = one account per supported platform. Plans include:

| Plan | Price (monthly) | Price (annual) | Social sets | Posts/profile/mo | Key features |
|---|---|---|---|---|---|
| **Starter** | $25/mo | ~$17/mo | 1 | 30 | Scheduling, Linkin.bio, basic analytics |
| **Growth** | $45/mo | ~$30/mo | 3 | 150 | Best time to post, full analytics, team features |
| **Advanced** | $80/mo | ~$53/mo | 6 | Unlimited | Unlimited posts, team roles, advanced analytics |

*Pricing is approximate and may change. Annual billing saves ~33%.*

Additional social sets can be purchased on any plan.

### Visual content calendar

- **Drag-and-drop** — move posts between time slots on the calendar
- **Grid preview** — see how Instagram feed posts will look in your 3×3 grid before publishing
- **Media library** — upload images and videos, organize with labels. Search and filter uploaded content.
- **Unsplash + Canva integration** — pull stock photos or design directly within Later
- **Saved captions** — reuse hashtag groups and caption templates

### Scheduling workflow

1. Upload media to the library (drag-and-drop, or from Canva/Unsplash)
2. Select time slot on the calendar (or use "Best time to post" suggestions)
3. Write caption, add hashtags, tag location
4. Preview in grid view (Instagram)
5. Schedule — auto-publishes at the set time

**Notification-based posting**: Some post types (Instagram Stories, carousels with certain features) may require a push notification to your phone to complete publishing manually.

## Linkin.bio

Linkin.bio turns your Instagram feed into a clickable, shoppable landing page.

### Setup

1. Connect your Instagram Business/Creator account
2. Customize your Linkin.bio page — logo, colors, button style
3. Add your Linkin.bio URL to your Instagram bio
4. Each scheduled post can have a clickable link that appears on the Linkin.bio page

### Shopify integration

- Connect Shopify store to tag products in posts
- Posts become shoppable — visitors click through to product pages
- Track clicks and conversions per post
- Sync product catalog automatically

### Features

- **Custom URL** — branded subdomain (yourname.later.com/linkinbio)
- **Link buttons** — add standalone links (website, other social, promotions)
- **Featured banner** — highlight a promotion or campaign at the top
- **Analytics** — clicks per post, total page views, top-performing links
- **Mobile-optimized** — responsive design for all devices

## Analytics

### Metrics available

| Metric | Starter | Growth | Advanced |
|---|---|---|---|
| Post performance (likes, comments, saves, shares) | Basic | Full | Full |
| Follower growth and demographics | No | Yes | Yes |
| Best time to post suggestions | No | Yes | Yes |
| Linkin.bio click tracking | Basic | Full | Full |
| Competitor analysis | No | No | Yes |
| Hashtag analytics | No | Yes | Yes |
| Story analytics | No | Yes | Yes |

### Best time to post

Available on Growth+ plans. Analyzes your audience's historical activity to suggest optimal posting times per network. Updated weekly as audience behavior changes.

## Team collaboration

- **User roles** — Owner, Admin, Contributor (plan-dependent)
- **Approval workflows** — available on Growth+ plans. Contributors draft, admins approve before scheduling.
- **Internal notes** — add context to scheduled posts for team visibility
- **Activity log** — track who scheduled, edited, or approved each post

## Later Influence

Later Influence (formerly Mavrck) is Later's enterprise influencer marketing platform, separate from Later Social.

### Core capabilities

- **Influencer discovery** — global Influencer Index with millions of profiles. Filter by audience demographics, historical performance, brand suitability, engagement. 20+ discovery criteria.
- **Risk evaluation** — scan creators for controversies, misinformation, competitor conflicts
- **Campaign management** — create campaigns, set briefs, manage deliverables, review content before publishing
- **Content review** — share drafts with stakeholders, write internal comments, approve/reject
- **Affiliate links** — create, share, and track affiliate links per influencer. Track clicks and sales.
- **Content syndication** — syndicate influencer content and reviews to ecommerce sites and retail partners
- **Analytics** — engagement, clicks, conversions, sales, Earned Media Value (EMV). Predictive performance and daily ROI tracking.
- **Reporting API** — programmatic access to campaign analytics (see API section)

### Later Influence pricing

Enterprise pricing — contact Later's sales team. Not bundled with Later Social plans.

## API — Later Influence Reporting API

Later's public API is the Influence Reporting API, designed for pulling campaign analytics into BI tools.

- **Authentication**: JWT (JSON Web Tokens) — exchange `clientId` and `clientSecret` for a token. Contact your Account Manager for credentials.
- **Documentation**: Available on SwaggerHub (link provided by Account Manager)
- **Capabilities**: Campaign performance, influencer performance, reporting data aggregation
- **Integrations**: Designed for Looker, Microsoft BI, Oracle Analytics Cloud, SAP Analytics Cloud, Tableau
- **No public scheduling API**: Later Social does not expose a public API for scheduling or content management.

## Integrations

| Integration | What it does |
|---|---|
| **Shopify** | Product sync for Linkin.bio, shoppable posts, click tracking |
| **Canva** | Design content within Later's media library |
| **Unsplash** | Free stock photos searchable from Later |
| **Google Drive** | Import media from Drive |
| **Dropbox** | Import media from Dropbox |
| **Social platforms** | Direct API connections for auto-publishing |
