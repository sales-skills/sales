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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

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
