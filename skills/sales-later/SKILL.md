---
name: sales-later
description: "Later platform help — social media scheduling, visual content calendar, Linkin.bio shoppable pages, analytics, Later Influence (influencer discovery, campaign management, Reporting API). Use when Later posts not publishing on schedule, Linkin.bio links not working, unsure about best posting times, Later Influence campaigns underperforming, or Later Influence API not returning expected data. Do NOT use for social media management strategy or tool comparison (use /sales-social-media-management), influencer marketing strategy (use /sales-influencer-marketing), Sprout Social config (use /sales-sproutsocial), or social listening (use /sales-social-listening)."
argument-hint: "[describe what you need help with in Later]"
license: MIT
version: 1.0.0
tags: [sales, social-media, scheduling, influencer-marketing, platform]
github: "https://github.com/Latermedia"
---
# Later Platform Help

Helps the user with Later platform questions — from scheduling and visual content planning through Linkin.bio, analytics, Later Influence influencer campaigns, and the Reporting API.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which Later product are you using?**
   - A) Later Social — scheduling, content calendar, Linkin.bio, analytics
   - B) Later Influence — influencer discovery, campaigns, content review, reporting
   - C) Both — integrated workflow
   - D) Not sure yet — evaluating Later

2. **What do you need help with?**
   - A) Scheduling — publishing posts, queue, auto-publish
   - B) Visual planner — grid preview, content calendar, drag-and-drop
   - C) Linkin.bio — shoppable landing page, Shopify integration, click tracking
   - D) Analytics — post performance, follower growth, best time to post
   - E) Team — roles, permissions, approval workflows
   - F) Later Influence — influencer discovery, campaigns, content review
   - G) API — Later Influence Reporting API
   - H) Integrations — Shopify, Canva, Unsplash, social platform connections
   - I) Billing — plans, upgrades, social sets
   - J) Something else — describe it

3. **Which social networks?**
   - A) Instagram (primary focus)
   - B) TikTok
   - C) Facebook + Instagram (Meta)
   - D) LinkedIn
   - E) Pinterest
   - F) YouTube / Snapchat / Threads
   - G) All supported networks

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Choosing between Later vs Buffer vs Hootsuite → `/sales-social-media-management`
- Influencer marketing strategy (not Later-specific) → `/sales-influencer-marketing`
- Sprout Social config → `/sales-sproutsocial`
- Social listening / brand monitoring → `/sales-social-listening`
- Email marketing → `/sales-email-marketing`
- Paid social ads → `/sales-retargeting` or `/sales-b2b-advertising`

Otherwise, answer directly from the platform knowledge below.

## Step 3 — Later platform reference

### Later Social — Scheduling & Publishing

#### Supported networks and post types

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

#### Social sets

Later pricing is based on "social sets" — one set = one account per supported platform. Plans include:

| Plan | Price (monthly) | Price (annual) | Social sets | Posts/profile/mo | Key features |
|---|---|---|---|---|---|
| **Starter** | $25/mo | ~$17/mo | 1 | 30 | Scheduling, Linkin.bio, basic analytics |
| **Growth** | $45/mo | ~$30/mo | 3 | 150 | Best time to post, full analytics, team features |
| **Advanced** | $80/mo | ~$53/mo | 6 | Unlimited | Unlimited posts, team roles, advanced analytics |

*Pricing is approximate and may change. Annual billing saves ~33%.*

Additional social sets can be purchased on any plan.

#### Visual content calendar

- **Drag-and-drop** — move posts between time slots on the calendar
- **Grid preview** — see how Instagram feed posts will look in your 3×3 grid before publishing
- **Media library** — upload images and videos, organize with labels. Search and filter uploaded content.
- **Unsplash + Canva integration** — pull stock photos or design directly within Later
- **Saved captions** — reuse hashtag groups and caption templates

#### Scheduling workflow

1. Upload media to the library (drag-and-drop, or from Canva/Unsplash)
2. Select time slot on the calendar (or use "Best time to post" suggestions)
3. Write caption, add hashtags, tag location
4. Preview in grid view (Instagram)
5. Schedule — auto-publishes at the set time

**Notification-based posting**: Some post types (Instagram Stories, carousels with certain features) may require a push notification to your phone to complete publishing manually.

### Linkin.bio

Linkin.bio turns your Instagram feed into a clickable, shoppable landing page.

#### Setup

1. Connect your Instagram Business/Creator account
2. Customize your Linkin.bio page — logo, colors, button style
3. Add your Linkin.bio URL to your Instagram bio
4. Each scheduled post can have a clickable link that appears on the Linkin.bio page

#### Shopify integration

- Connect Shopify store to tag products in posts
- Posts become shoppable — visitors click through to product pages
- Track clicks and conversions per post
- Sync product catalog automatically

#### Features

- **Custom URL** — branded subdomain (yourname.later.com/linkinbio)
- **Link buttons** — add standalone links (website, other social, promotions)
- **Featured banner** — highlight a promotion or campaign at the top
- **Analytics** — clicks per post, total page views, top-performing links
- **Mobile-optimized** — responsive design for all devices

### Analytics

#### Metrics available

| Metric | Starter | Growth | Advanced |
|---|---|---|---|
| Post performance (likes, comments, saves, shares) | Basic | Full | Full |
| Follower growth and demographics | No | Yes | Yes |
| Best time to post suggestions | No | Yes | Yes |
| Linkin.bio click tracking | Basic | Full | Full |
| Competitor analysis | No | No | Yes |
| Hashtag analytics | No | Yes | Yes |
| Story analytics | No | Yes | Yes |

#### Best time to post

Available on Growth+ plans. Analyzes your audience's historical activity to suggest optimal posting times per network. Updated weekly as audience behavior changes.

### Team collaboration

- **User roles** — Owner, Admin, Contributor (plan-dependent)
- **Approval workflows** — available on Growth+ plans. Contributors draft, admins approve before scheduling.
- **Internal notes** — add context to scheduled posts for team visibility
- **Activity log** — track who scheduled, edited, or approved each post

### Later Influence

Later Influence (formerly Mavrck) is Later's enterprise influencer marketing platform, separate from Later Social.

#### Core capabilities

- **Influencer discovery** — global Influencer Index with millions of profiles. Filter by audience demographics, historical performance, brand suitability, engagement. 20+ discovery criteria.
- **Risk evaluation** — scan creators for controversies, misinformation, competitor conflicts
- **Campaign management** — create campaigns, set briefs, manage deliverables, review content before publishing
- **Content review** — share drafts with stakeholders, write internal comments, approve/reject
- **Affiliate links** — create, share, and track affiliate links per influencer. Track clicks and sales.
- **Content syndication** — syndicate influencer content and reviews to ecommerce sites and retail partners
- **Analytics** — engagement, clicks, conversions, sales, Earned Media Value (EMV). Predictive performance and daily ROI tracking.
- **Reporting API** — programmatic access to campaign analytics (see API section)

#### Later Influence pricing

Enterprise pricing — contact Later's sales team. Not bundled with Later Social plans.

### API — Later Influence Reporting API

Later's public API is the Influence Reporting API, designed for pulling campaign analytics into BI tools.

- **Authentication**: JWT (JSON Web Tokens) — exchange `clientId` and `clientSecret` for a token. Contact your Account Manager for credentials.
- **Documentation**: Available on SwaggerHub (link provided by Account Manager)
- **Capabilities**: Campaign performance, influencer performance, reporting data aggregation
- **Integrations**: Designed for Looker, Microsoft BI, Oracle Analytics Cloud, SAP Analytics Cloud, Tableau
- **No public scheduling API**: Later Social does not expose a public API for scheduling or content management.

### Integrations

| Integration | What it does |
|---|---|
| **Shopify** | Product sync for Linkin.bio, shoppable posts, click tracking |
| **Canva** | Design content within Later's media library |
| **Unsplash** | Free stock photos searchable from Later |
| **Google Drive** | Import media from Drive |
| **Dropbox** | Import media from Dropbox |
| **Social platforms** | Direct API connections for auto-publishing |

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Scheduling setup** — connect accounts, configure auto-publish, set timezone, plan content calendar
2. **Visual planning** — grid preview strategy, aesthetic feed planning, carousel sequencing
3. **Linkin.bio** — page setup, Shopify product tagging, link button configuration, click tracking
4. **Analytics** — interpreting metrics, best time to post, competitor benchmarking, reporting
5. **Team workflow** — roles, approval process, collaboration best practices
6. **Later Influence** — campaign setup, influencer discovery, content review workflow, API integration

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may change.*

- **Post limits on lower plans.** Starter gets 30 posts/profile/month — that's just 1/day. If you're posting across multiple networks, you'll hit the limit fast. Growth plan (150/profile/mo) is the practical minimum for active brands.
- **No social inbox.** Unlike Sprout Social, Hootsuite, or Agorapulse, Later has no unified inbox for managing DMs, comments, or mentions. You'll need to manage engagement natively on each platform.
- **Analytics gated to Growth+ plans.** Starter plan gets only basic post metrics. Best time to post, follower demographics, hashtag analytics, and story analytics all require Growth ($45/mo) or above.
- **Approval workflows require Growth+ plan.** If you need team content approval, Starter won't work. Teams that need approval should start on Growth at minimum.
- **No content recycling.** You can't reshare or automatically recycle old posts like some competitors (Buffer, SocialBee, MeetEdgar). Every post must be created fresh.
- **Image resizing not built in.** When scheduling to multiple networks simultaneously, Later doesn't resize images/videos to fit each platform's format. You'll need to crop/resize externally before uploading.
- **Platform connections require periodic re-authentication.** Social platform API tokens expire. You may need to reconnect accounts every few weeks, especially Instagram and TikTok. If posts start failing, check connection status first.
- **Notification-based posting for some formats.** Instagram Stories, certain carousel types, and some TikTok formats may require you to complete publishing manually via a push notification rather than auto-publishing.
- **Later Influence is separately priced.** It's an enterprise product — not included in Later Social plans. Contact sales for pricing.
- **Billing complaints are common.** Later has a 1.3/5 on Trustpilot driven by billing issues — unexpected renewals, charges after cancellation, strict no-refund policy. Review your subscription settings carefully and document any cancellation attempts.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-social-media-management` — Social media management strategy — publishing, scheduling, tool comparison (Later vs Buffer vs Hootsuite vs Sprout)
- `/sales-influencer-marketing` — Influencer marketing strategy — discovery, vetting, campaigns, ROI measurement
- `/sales-sproutsocial` — Sprout Social platform help — Publishing, Smart Inbox, Analytics, Listening
- `/sales-social-listening` — Social listening strategy — brand monitoring, sentiment analysis
- `/sales-employee-advocacy` — Employee advocacy programs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up Instagram scheduling
**User says**: "I just signed up for Later and want to start scheduling Instagram posts for my ecommerce brand"
**Skill does**:
1. Walks through connecting Instagram Business account
2. Sets up Linkin.bio with Shopify integration for shoppable posts
3. Configures content calendar with drag-and-drop scheduling
4. Shows grid preview workflow to plan aesthetic feed
5. Enables best time to post (Growth+ plan)
**Result**: Complete Instagram scheduling setup with shoppable Linkin.bio

### Example 2: Fix posts not auto-publishing
**User says**: "My scheduled posts keep showing up as notifications instead of auto-publishing"
**Skill does**:
1. Checks if account type is Business/Creator (required for auto-publish)
2. Verifies platform connection is active and not expired
3. Identifies post types that require notification-based publishing (Stories, certain carousels)
4. Walks through re-authenticating the Instagram connection
**Result**: Auto-publishing restored or notification-based workflow explained

### Example 3: Set up Later Influence campaign
**User says**: "I want to run an influencer campaign using Later Influence to promote our new product line"
**Skill does**:
1. Walks through Influencer Index discovery with relevant filters
2. Sets up campaign brief with deliverables and timeline
3. Configures content review workflow (draft → stakeholder review → approval)
4. Creates affiliate links per influencer for sales tracking
5. Sets up Reporting API connection to BI dashboard
**Result**: End-to-end influencer campaign with tracking and analytics

## Troubleshooting

### Posts failing or freezing during scheduling
**Symptom**: Scheduled posts show as "failed" or never publish
**Cause**: Expired platform connection, unsupported post format, or network API issue
**Solution**: Check connection status in Settings → Social Accounts. Reconnect if expired. Verify the post format is supported for auto-publish on that network. Try scheduling a simple image post first to isolate the issue. Check Later's status page for outages.

### Linkin.bio clicks not tracking correctly
**Symptom**: Linkin.bio shows fewer clicks than expected, or clicks don't match Google Analytics
**Cause**: UTM parameters not configured, ad blockers reducing tracking, or page not loading properly on mobile
**Solution**: Add UTM parameters to all Linkin.bio links (source=linkinbio, medium=social, campaign=your-campaign). Check that the page loads correctly on mobile. Compare Later's click data with GA4 link click events — Later counts page views while GA4 counts sessions, so some discrepancy is normal.

### Can't resize content for different platforms
**Symptom**: Posting to Instagram + TikTok + Facebook simultaneously but images/videos look cropped or wrong aspect ratio
**Cause**: Later doesn't auto-resize media for different platform requirements
**Solution**: Create platform-specific versions of your content before uploading. Key dimensions: Instagram feed (1080×1080 or 4:5), Instagram Stories/Reels (1080×1920), TikTok (1080×1920), Facebook (1200×630 for link posts, 1080×1080 for feed). Use Canva (integrated in Later) to quickly resize one design for all formats.
