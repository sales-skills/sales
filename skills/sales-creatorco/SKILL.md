---
name: sales-creatorco
description: "Creator.co platform help — AI-powered influencer marketing connecting brands with 400M+ creators for campaign management, UGC, and affiliate tracking. Covers London AI agent (automated creator matching and outreach), campaign dashboard (briefs, approvals, content review, payouts), creator marketplace (creator.space), UGC with full usage rights, affiliate integrations (Impact, CJ, Awin, Rakuten), Deep Insights reports, Shopify product gifting, and performance analytics (ROAS, conversions). Use when setting up Creator.co campaigns, using London AI for creator discovery, managing creator relationships, configuring affiliate tracking, or choosing a Creator.co plan. Do NOT use for influencer analytics without Creator.co (use /sales-infludata), ad campaign strategy (use /sales-retargeting), or affiliate program design (use /sales-affiliate-program)."
argument-hint: "[describe what you need help with in Creator.co]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-marketplace, campaign-management, platform]
---
# Creator.co Platform Help

Helps the user with Creator.co platform questions — from AI-powered creator matching and campaign setup through UGC content management, affiliate tracking, product gifting, and performance reporting.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding creators — using London AI, search filters, marketplace
   - B) Campaign setup — briefs, goals, creator invites
   - C) Content management — approvals, UGC rights, repurposing
   - D) Affiliate tracking — setting up commission tracking, integrations
   - E) Product gifting — Shopify integration, shipping to creators
   - F) Reporting — ROAS, conversions, campaign performance
   - G) Creator vetting — Deep Insights, audience quality
   - H) Pricing / plan selection
   - I) Something else — describe it

2. **What platforms are your creators on?**
   - A) Instagram
   - B) TikTok
   - C) YouTube
   - D) Multiple

3. **What's your Creator.co plan?**
   - A) Self-Serve ($299/mo)
   - B) Managed ($2,199/mo)
   - C) Enterprise (custom)
   - D) Evaluating / not sure

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Influencer analytics / audience analysis without Creator.co → `/sales-infludata`
- Ad campaign strategy / retargeting → `/sales-retargeting` or `/sales-b2b-advertising`
- Affiliate program design (strategy, not Creator.co setup) → `/sales-affiliate-program`
- Email marketing to subscribers → `/sales-email-marketing`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge below.

## Step 3 — Creator.co platform reference

### London AI Agent

Creator.co's AI agent automates the influencer marketing workflow.

#### Automated creator matching
- Describe your ideal creator in natural language — London finds matches from 400M+ profiles
- AI considers audience demographics, content style, engagement patterns, brand fit
- Covers Instagram, TikTok, and YouTube creators
- Automatic outreach — London handles initial contact with matched creators

#### AI-generated campaign briefs
- Describe your campaign goals → London generates structured briefs
- Includes content guidelines, deliverables, timelines, and compensation details
- Creators receive clear expectations before accepting

#### Personalized outreach at scale
- London sends individualized messages to potential creators
- Tracks open rates and responses
- Handles follow-ups automatically

### Campaign Management

Centralized dashboard for running influencer campaigns end-to-end.

#### Campaign setup
- Create campaigns with goals, target audience, budget, and timeline
- Set deliverables: posts, stories, reels, videos, UGC
- Define content guidelines and brand requirements
- Choose campaign type: paid collaboration, product gifting, affiliate, or hybrid

#### Creator marketplace (creator.space)
- Creators browse and apply to brand campaigns
- Brands review applications with profile data and past work
- Two-sided: brands can also invite specific creators directly
- Creator profiles include past collaboration history and ratings

#### Content workflow
- Creators submit content for review before publishing
- Brand approval/revision cycle within the dashboard
- Content calendar view for scheduling
- All approved content stored in a content library

#### Payments
- Digital wallet system — brands load funds, creators get paid on completion
- Automated payment on deliverable approval
- Pay-per-creator model — "you only pay for creators you activate"
- Support for flat fees and performance-based compensation

### UGC with Full Usage Rights

Content created through Creator.co includes full usage rights by default.

- **No additional licensing fees** — repurpose UGC across ads, emails, landing pages, social
- Content library stores all campaign UGC for easy access
- Download original files for ad creative production
- Track which UGC performs best for reuse in future campaigns
- 8.2x average ROAS claimed when repurposing top-performing creator content

### Affiliate & Performance Tracking

Native integrations with major affiliate networks.

#### Affiliate network integrations
- **Impact** — commission tracking, attribution
- **CJ (Commission Junction)** — affiliate program management
- **Awin** — global affiliate network tracking
- **Rakuten** — performance marketing integration

#### Shopify integration
- Coupon code generation and tracking per creator
- Product gifting: ship products to creators directly from Shopify
- Shipment tracking within Creator.co
- Conversion attribution: track which creators drive sales

#### Performance analytics
- **Google Analytics** integration for website traffic attribution
- **Twitter/X pixel** tracking
- **Google Tag Manager** support
- Real-time ROAS, CPM, engagement, and conversion dashboards
- Customizable reporting views

### Deep Insights Reports

Detailed creator analytics for vetting before partnering.

- Audience demographics: age, gender, location, interests
- Engagement rate analysis and historical trends
- Content performance benchmarks
- Brand collaboration history
- Audience authenticity indicators

### Pricing

*Best-effort — verify at creator.co/pricing. Self-Serve and Managed require 3-month minimum.*

| Plan | Monthly | Annual (30% off) | Key features |
|---|---|---|---|
| Self-Serve | $299/mo | $199/mo | 400M+ creators, London AI, unlimited collaborations, real-time tracking |
| Managed | $2,199/mo | $1,499/mo | + Dedicated account manager, 5 collabs/mo, end-to-end management |
| Enterprise | Custom | Custom | + Strategic team, unlimited collabs, custom dashboards, events |

**Key plan differences:**
- **Self-Serve** — you run everything, AI assists with discovery and outreach
- **Managed** — Creator.co team runs campaigns for you, you approve content
- **Enterprise** — full strategic partnership with custom workflows

### API

- **No public API** — Creator.co does not offer a public API or developer portal
- All functionality is through the web dashboard
- Integrations are pre-built (Shopify, affiliate networks, analytics)

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Campaign setup checklist** — step-by-step from brief to launch
2. **Creator selection framework** — how to use Deep Insights to vet creators
3. **UGC repurposing strategy** — which content to reuse where for maximum ROAS
4. **Affiliate setup walkthrough** — connecting affiliate networks and tracking conversions
5. **Budget planning** — how to allocate between paid collabs, gifting, and affiliate

### Campaign launch checklist

| Step | What to do | Common mistake |
|---|---|---|
| 1. Define goals | Set specific KPIs (ROAS target, content pieces, reach) | Vague goals like "more awareness" |
| 2. Set budget | Load digital wallet, set per-creator budget | Not accounting for product gifting costs |
| 3. Create brief | Use London AI to generate, then customize | Overly restrictive creative guidelines |
| 4. Find creators | Let London match + browse marketplace applicants | Only using one channel (AI or marketplace) |
| 5. Vet creators | Check Deep Insights before activating | Skipping audience quality check |
| 6. Activate | Approve creators, ship products if gifting | Activating too many creators at once |
| 7. Review content | Approve/revise in dashboard | Slow approval delays campaign timeline |
| 8. Track performance | Monitor real-time dashboard | Not setting up attribution before launch |

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Creator quality varies on the marketplace.** Multiple reviewers note fake followers among marketplace creators. Always check Deep Insights reports before activating. Don't skip the audience authenticity check — Creator.co doesn't have built-in fake follower detection like some competitors (influData, Modash, HypeAuditor).
- **Engagement rate calculations may be off.** Trustpilot reviewers report that engagement rates change (usually decrease) when reconnecting accounts. Cross-reference Creator.co's engagement data with the creator's native platform analytics or a third-party tool.
- **3-month minimum commitment.** Both Self-Serve ($299/mo) and Managed ($2,199/mo) require a 3-month minimum. That's $897 or $6,597 minimum commitment before you can cancel.
- **"Unlimited collaborations" doesn't mean unlimited managed support.** Self-Serve gives unlimited creator activations but you manage everything yourself. Managed plan caps at 5 creator collaborations per month with account manager support.
- **Content compliance is manual.** There's no automated content compliance checking — you review every piece of content yourself. At scale (100+ creators), this becomes a bottleneck.
- **Login and dashboard issues reported.** G2 and Trustpilot reviewers mention occasional login failures and campaigns not loading. If campaigns won't display, try clearing cache, switching browsers, or contacting support.
- **Pricing has changed frequently.** Older reviews cite different prices ($460, $995, etc.). Always check creator.co/pricing for current rates.
- **No public API.** If you need programmatic access to campaign data or creator info, Creator.co doesn't offer it. Consider exporting reports manually or using their pre-built integrations.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across platforms (Modash, influData, Creator.co). Platform comparison, discovery, vetting, ROI tracking
- `/sales-modash` — Modash platform help — discovery, tracking, Shopify gifting, payments, API
- `/sales-infludata` — Influencer analytics, creator discovery, audience analysis, fake follower detection
- `/sales-affiliate-program` — Affiliate and creator partnership program design
- `/sales-tagshop` — UGC video ads and shoppable galleries for ecommerce
- `/sales-retargeting` — Retargeting strategy for campaign audiences
- `/sales-content` — Sales content management and governance
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Launch a product gifting campaign on Shopify
**User says**: "I want to send my new skincare product to 50 micro-influencers on Instagram and get UGC back"
**Skill does**:
1. Sets up a product gifting campaign with clear brief (deliverables: 1 Reel + 1 Story per creator)
2. Uses London AI to find skincare/beauty micro-influencers (10K-100K followers)
3. Configures Shopify integration for product shipping and coupon tracking
4. Sets up content approval workflow for reviewing UGC before posting
5. Explains UGC usage rights — all content can be repurposed for ads, email, landing pages
**Result**: 50 creators receive product, submit UGC for approval, brand gets full usage rights for ad creative

### Example 2: Set up affiliate tracking with Impact
**User says**: "How do I track which creators are actually driving sales? I use Impact for affiliates"
**Skill does**:
1. Walks through connecting Impact affiliate network in Creator.co settings
2. Configures unique tracking links and coupon codes per creator
3. Sets up Google Analytics integration for website attribution
4. Shows how to view conversion and ROAS data in the real-time dashboard
5. Explains how to identify top performers for repeat campaigns
**Result**: Full attribution pipeline from creator content → click → conversion with per-creator ROAS

### Example 3: Vet creators before activating
**User says**: "I have 20 applicants to my campaign — how do I pick the best ones?"
**Skill does**:
1. Opens Deep Insights for each applicant — reviews audience demographics, engagement, authenticity
2. Flags creators with suspicious engagement patterns or mismatched audience geography
3. Cross-references engagement rates with native platform data (Creator.co rates may differ)
4. Ranks applicants by audience quality × content relevance × brand fit
5. Recommends activating top 8-10 and waitlisting the rest
**Result**: Curated creator roster based on data, not follower count

## Troubleshooting

### Campaigns not loading after login
**Symptom**: You can log in but the campaign dashboard shows blank or fails to load
**Cause**: Known intermittent issue reported by multiple G2 and Trustpilot reviewers. May be browser cache, session issues, or platform-side bugs.
**Solution**: Clear browser cache and cookies, try incognito mode or a different browser. If the issue persists, contact Creator.co support. Some users report that campaigns load after waiting a few minutes and refreshing.

### Engagement rates look wrong or keep changing
**Symptom**: Creator's engagement rate in Creator.co doesn't match what you see on their actual profile, or it changes when you reconnect
**Cause**: Creator.co's engagement calculation methodology may differ from the platform's native stats. Reconnecting accounts can trigger recalculation with different data windows.
**Solution**: Use Deep Insights as a directional signal, not absolute truth. Cross-reference with the creator's native analytics (Instagram Insights, TikTok Analytics) or a third-party tool like influData. For critical decisions, ask the creator to share their native analytics screenshots.

### Creators with fake followers accepted to campaign
**Symptom**: Activated a creator who turned out to have inflated follower counts or bot engagement
**Cause**: Creator.co's marketplace is opt-in — creators self-apply without automated fraud screening. The platform lacks built-in fake follower detection.
**Solution**: Always review Deep Insights before activating. Look for: sudden follower spikes, engagement rates outside normal ranges (below 1% or above 10% for their size), audience geography mismatches. For high-stakes campaigns, cross-reference with a dedicated analytics tool like influData or HypeAuditor before committing budget.
