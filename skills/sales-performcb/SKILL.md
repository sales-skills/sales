---
name: sales-performcb
description: "Perform[cb] platform help — Outcome Engine, PerformSHIELD fraud detection, CPA/CPS/CPL/CPC campaigns, partner API, reporting, lead rating, MMP integrations. Use when Perform[cb] campaigns aren't converting, PerformSHIELD is flagging legitimate traffic, partner payouts aren't processing, the Perform[cb] API isn't returning data, or tracking pixels aren't firing correctly. Do NOT use for affiliate program design strategy (use /sales-affiliate-program), general email deliverability (use /sales-deliverability), or building prospect lists (use /sales-prospect-list)."
argument-hint: "[describe what you need help with in Perform[cb]]"
license: MIT
version: 1.0.0
tags: [sales, affiliate-network, CPA, performance-marketing, platform]
github: "https://github.com/performcb"
---
# Perform[cb] Platform Help

Help the user with Perform[cb] platform questions — from Outcome Engine campaigns and PerformSHIELD compliance through partner API integration, reporting, and payout management.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your role with Perform[cb]?**
   - A) Marketer/advertiser — running campaigns to acquire users
   - B) Affiliate partner — promoting offers and monetizing traffic
   - C) Developer — integrating via the Partner API
   - D) Agency — managing campaigns for clients
   - E) Evaluating Perform[cb] — deciding whether to join
   - F) Other

2. **What area do you need help with?**
   - A) Campaigns — creating, managing, or optimizing CPA/CPS/CPL/CPC campaigns
   - B) PerformSHIELD — compliance, fraud detection, traffic quality audits
   - C) Reporting — dashboards, lead rating, value-based payouts, segmentation
   - D) Partner tools — tracking links, suppression lists, offer discovery
   - E) API — Partner API integration, campaign automation, report pulling
   - F) Payouts — payment schedules, minimum thresholds, commission structures
   - G) Integrations — MMP connections (Branch, Adjust, AppsFlyer, Kochava, Singular)
   - H) Getting started — application, approval process, first campaign setup
   - I) Something else

3. **What's your specific question or goal?**

**If the user's request already provides context, skip directly to the relevant section.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Affiliate program design / commission strategy → `/sales-affiliate-program`
- Email deliverability → `/sales-deliverability`
- Building prospect lists → `/sales-prospect-list`
- Contact enrichment → `/sales-enrich`
- Retargeting strategy → `/sales-retargeting`

Otherwise, answer directly using the reference below.

## Step 3 — Perform[cb] platform reference

### Platform Overview

Perform[cb] is the #1-ranked CPA network worldwide (six consecutive years per mThink Blue Book). Founded 2002, headquartered in Sarasota, FL. Operates as an outcome-based user acquisition platform connecting marketers (advertisers) with affiliate partners across 25+ digital channels.

**Key differentiator**: 90% of traffic comes from outside Facebook and Google — native, content, email, push, social, and display channels.

**Pricing models** (no activation fees):
- **CPA** (Cost Per Acquisition) — pay when a user completes a defined action
- **CPS** (Cost Per Sale) — pay on completed purchase
- **CPL** (Cost Per Lead) — pay on qualified lead submission
- **CPC** (Cost Per Click) — pay per click
- **CPI** (Cost Per Install) — pay per app install
- **CPE** (Cost Per Engagement) — pay per defined engagement event

### Outcome Engine

Perform[cb]'s proprietary AI-powered platform that:
- Optimizes campaign placement across 25+ channels in real-time
- Matches marketer KPIs with partner traffic sources
- Personalizes user acquisition campaigns to align with brand performance goals
- Manages budget allocation and bid optimization automatically

### PerformSHIELD — Fraud Detection & Compliance

Proprietary fraud-fighting technology processing 3,500+ audits monthly:
- Real-time traffic quality monitoring
- Bot detection and invalid traffic filtering
- Brand safety and compliance enforcement
- Source-level traffic quality scoring
- Automatic flagging and blocking of suspicious patterns
- Monthly compliance reports for advertisers

### Campaign Management

**For Marketers (Advertisers):**
1. Define your offer — action type (CPA/CPS/CPL), payout amount, targeting criteria
2. Set creative requirements — approved ad formats, landing pages, promotional guidelines
3. Configure lead rating — assign values to specific fields for value-based payouts
4. Segment traffic — by channel, device type, day-of-week, geography
5. Review PerformSHIELD reports — monitor traffic quality and compliance

**For Partners (Affiliates):**
1. Browse approved campaigns via dashboard or API (`FindMyApprovedCampaigns`)
2. Generate tracking links — unique click URLs and impression pixels per campaign
3. Assign custom tracking IDs for internal campaign tagging
4. Monitor performance — clicks, conversions, earnings, EPC in real-time
5. Manage traffic types — align allowed traffic types with campaign restrictions

### Reporting & Analytics

- **Custom dashboards** with real-time data
- **Traffic segmentation** — channel, device, day-of-week, geography
- **Lead rating** — assign quality scores to leads based on field values
- **Value-based payouts** — pay different amounts based on lead quality tiers
- **Event-level tracking** — track multiple conversion events per campaign
- **EPC (Earnings Per Click)** — key performance metric for affiliates

### Partner Payout Structure

- **Commission split**: Affiliates typically retain 70-80% depending on offer terms and traffic volume
- **Minimum payout**: $50
- **Payment methods**: Check, ACH, wire transfer, PayPal
- **Payment schedule**: Net-30 standard; weekly available for qualifying partners
- **Referral program**: Earn 5% additional commission on referred partner revenue; marketers earn 3% on referred advertiser spend for one year

### MMP Integrations

Perform[cb] integrates with industry-leading Mobile Measurement Partners:
- **Branch** — deep linking and attribution
- **Adjust** — mobile analytics and fraud prevention
- **AppsFlyer** — mobile attribution and analytics
- **Kochava** — real-time data solutions
- **Singular** — unified analytics platform

### Key Terminology

| Term | Meaning |
|---|---|
| Outcome Engine | Perform[cb]'s AI optimization platform |
| PerformSHIELD | Proprietary fraud detection and compliance system |
| Marketer | Advertiser running campaigns on Perform[cb] |
| Partner | Affiliate promoting offers |
| Lead rating | Assigning quality scores to leads for value-based payouts |
| EPC | Earnings Per Click — revenue per click metric |
| Sub-ID | Custom tracking parameter for affiliates |

For full API details, see [references/performcb-api-reference.md](references/performcb-api-reference.md).

## Step 4 — Actionable guidance

Based on the user's role and question, provide step-by-step guidance.

**For new marketers:**
1. Submit your campaign brief to your Account Manager
2. Define your target CPA/CPL and daily budget cap
3. Upload approved creative assets and landing page URLs
4. Set lead rating criteria if using value-based payouts
5. Launch with a test budget; review PerformSHIELD reports after 48 hours
6. Scale spend on high-quality traffic sources; pause underperformers

**For new affiliates:**
1. Apply at login.performcb.com — include your traffic sources and experience
2. Once approved, browse campaigns matching your traffic type
3. Generate tracking links via dashboard or API
4. Set up postback URLs for server-to-server conversion tracking
5. Start with a small test; monitor EPC and conversion rates
6. Scale winners; use the API to automate campaign discovery and link generation

**For developers integrating the API:**
1. Get your API Key and Account ID from the platform settings
2. Use the `FindMyApprovedCampaigns` endpoint to discover available offers
3. Filter campaigns by status, type, traffic type, and geography
4. Generate tracking links programmatically
5. Pull reports via the Reporting API for automated analytics
6. Set up postback URLs for real-time conversion notifications

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Approval isn't instant** — Perform[cb] reviews all partner applications manually. Include detailed traffic source information and past performance data in your application to speed approval.
2. **Traffic type restrictions vary by campaign** — each campaign specifies allowed and blocked traffic types. Sending traffic from a restricted source can result in reversed commissions and account warnings.
3. **PerformSHIELD audits happen continuously** — unlike networks that only review traffic after payout, Perform[cb] audits in real-time. Low-quality traffic gets flagged fast. This is a feature, not a bug — it protects both advertisers and affiliates.
4. **API docs require login** — the full API reference at login.performcb.com is behind authentication. You must have an active account to access complete endpoint documentation.
5. **Lead rating affects your effective payout** — if a marketer uses value-based payouts, your actual earnings per lead depend on the quality score your leads receive, not just the listed payout rate.
6. **$50 minimum payout** — earnings below $50 roll over to the next payment cycle. Factor this into your testing budget.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related Skills

- `/sales-affiliate-program` — Design affiliate programs, commission structures, recruitment strategies, and payout optimization
- `/sales-retargeting` — Retargeting strategy for driving users back after initial exposure
- `/sales-integration` — Connect Perform[cb] with your CRM, analytics, or automation tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Marketer launching their first CPA campaign
**User**: "I want to run a CPA campaign for my health & wellness brand on Perform[cb]. Where do I start?"

**Approach**: Walk through the marketer launch checklist. Start with defining the desired action (purchase, signup, trial) and target CPA. Recommend starting with a test budget of $500-$1,000 to establish baseline performance. Emphasize setting up lead rating early so you can differentiate high-value conversions from low-quality ones. Suggest scheduling a kickoff with their assigned Account Manager to align on creative guidelines and traffic source preferences.

### Example 2: Affiliate integrating the Partner API
**User**: "I want to automatically pull my approved campaigns and generate tracking links via the API."

**Approach**: Walk through the API setup: get API Key and Account ID from settings, call `FindMyApprovedCampaigns` with pagination, parse campaign data (click URL, payout, restrictions), and store locally. Show how to filter by status, traffic type, and pricing model. Note that the API supports both JSON and XML — recommend JSON for modern integrations. Suggest caching campaign data and refreshing daily rather than on every request.

### Example 3: Evaluating Perform[cb] vs other CPA networks
**User**: "Should I join Perform[cb] or MaxBounty as my first CPA network?"

**Approach**: Compare key factors: Perform[cb] is ranked #1 CPA network (mThink) with AI-powered optimization and strong fraud protection via PerformSHIELD. MaxBounty is known for easier approval and wider offer variety for beginners. Perform[cb]'s 90% non-Facebook/Google traffic is unique — better for affiliates not dependent on social/search. Recommend joining both if possible — each network has exclusive offers. Key questions: What's your traffic type? What vertical are you in? How much traffic volume can you drive?

## Troubleshooting

### Application got rejected
Perform[cb] has a selective approval process. Common rejection reasons: insufficient traffic volume details in application, no proven track record, or traffic sources that don't align with current campaign needs. Reapply with specific data — monthly traffic volume, top geos, past network earnings screenshots, and which verticals you specialize in. Reach out to the Partner Development Team directly with your application details.

### Conversions not tracking
Check three things: (1) Your tracking link is the correct click URL from the campaign, not a modified or cached version. (2) Your postback URL is set up correctly with the right macros for conversion ID and payout. (3) The campaign's allowed traffic types match your actual traffic source. If using an MMP (Branch, Adjust, etc.), verify the integration is passing the correct attribution parameters. Check the API for conversion event definitions — some campaigns require specific events beyond the initial click.

### Low EPC compared to listed payout
If your EPC is significantly lower than the campaign's listed payout, the issue is conversion rate, not payout manipulation. Check: (1) Traffic quality — are you sending the right audience? (2) Landing page match — does your pre-lander set correct expectations? (3) Geo mismatch — the campaign may convert better in specific countries. (4) Device targeting — some offers convert better on mobile vs desktop. Use the reporting dashboard to segment by device, geo, and day-of-week to identify patterns.
