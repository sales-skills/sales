---
name: sales-plutoba
description: "PlutoBa platform help — AI influencer vetting and creator due diligence across TikTok, Instagram, and YouTube. Covers PlutoBa Score (7-dimension assessment), Deep Assessments (100+ posts, 300+ comments), fake follower detection, audience authenticity, brand safety risk scoring, rate benchmarking, AI-powered creator outreach, creator CRM, and campaign briefs. Use when worried an influencer's followers are fake, need to check if a creator is brand-safe before signing a deal, want to know what to pay an influencer, PlutoBa Score seems too low or too high, creator outreach templates aren't getting responses, unsure which PlutoBa plan fits your needs, or setting up PlutoBa for an agency with multiple brands. Do NOT use for influencer strategy across platforms (use /sales-influencer-marketing) or influencer discovery and search (use /sales-hypeauditor or /sales-modash)."
argument-hint: "[describe what you need help with in PlutoBa]"
license: MIT
version: 1.0.0
tags: [sales, influencer-marketing, creator-vetting, fraud-detection, brand-safety, platform]
---
# PlutoBa Platform Help

Helps the user with PlutoBa platform questions — from creator vetting and fake follower detection through brand safety analysis, rate benchmarking, and AI-powered outreach.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Vetting a creator — PlutoBa Score, fake followers, audience quality
   - B) Brand safety check — content risk, controversial topics, competitor mentions
   - C) Rate benchmarking — what to pay a creator based on their tier and niche
   - D) AI outreach — generating personalized creator outreach
   - E) Creator CRM — managing influencer relationships and campaigns
   - F) Campaign briefs — auto-generated briefs and deliverable recommendations
   - G) Agency setup — multi-brand workspaces, white-label reporting
   - H) Creator-side features — verified page, scam detection, inquiry management
   - I) Pricing and plan selection
   - J) Something else — describe it

2. **What's your role?**
   - A) Brand marketer / influencer marketing manager
   - B) Agency managing multiple clients
   - C) Creator evaluating brand inquiries
   - D) Other — describe it

3. **What plan are you on?**
   - A) Starter ($69/mo)
   - B) Growth ($159/mo)
   - C) Scale ($299/mo)
   - D) Agency ($499/mo) or Agency Scale ($999/mo)
   - E) Creator Free or Creator Pro ($89.99/yr)
   - F) Free trial / evaluating

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a strategy skill, route:
- Influencer marketing strategy across platforms → run: `/sales-influencer-marketing {user's question}`
- Influencer discovery and search (PlutoBa doesn't do discovery) → run: `/sales-hypeauditor {user's question}` or `/sales-modash {user's question}`
- TikTok marketing strategy → run: `/sales-tiktok-marketing {user's question}`
- Gaming influencer marketing → run: `/sales-gaming-marketing {user's question}`
- Ad campaign strategy → run: `/sales-retargeting {user's question}`
- Affiliate program design → run: `/sales-affiliate-program {user's question}`

Otherwise, answer directly from the platform reference below.

## Step 3 — PlutoBa platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, scoring dimensions, CRM features, agency setup, and creator-side features.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Score interpretation** — what the PlutoBa Score means, red flags to watch for, when to walk away
2. **Vetting workflow** — step-by-step for evaluating a specific creator
3. **Rate negotiation** — using benchmarks to negotiate fair pricing
4. **Outreach strategy** — getting higher response rates from creators
5. **Plan recommendation** — which tier fits their volume and team size

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **PlutoBa is NOT a discovery tool.** It vets creators you've already found. If you need to find creators, use a discovery platform (HypeAuditor, Modash, etc.) first, then vet shortlisted ones in PlutoBa.
- **Deep Assessments are limited and plan-gated.** Starter gets 15/mo, Growth 50, Scale 100. Standard assessments are less thorough. Budget your Deep Assessments for high-value partnerships only.
- **Creator CRM capacity varies dramatically by plan.** Starter: 25 creators, Growth: 100, Scale: 500. If you're an agency, you'll likely need the Agency tier.
- **No public API.** As of April 2026, PlutoBa has no documented public API. All interactions are through the web UI.
- **No native integrations documented.** No Shopify, CRM, or Zapier integrations found. Creator data lives in PlutoBa only.
- **Agency Add-on Packs stack.** Each $159/mo pack adds +3 brands, +120 standard, +60 deep, +3 workspaces, +3 team members. Multiple packs can be added.
- **Creator Pro is annual billing only.** $89.99/yr — no monthly option for the creator-facing paid tier.
- **Platform launched March 2026.** Very new — expect rapid feature changes. Verify current capabilities directly.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-influencer-marketing` — Influencer marketing strategy across all platforms — discovery, vetting, campaigns, ROI
- `/sales-hypeauditor` — HypeAuditor platform help — AI analytics, fraud detection (53 patterns, 95%+ accuracy), Discovery (223.6M+ profiles)
- `/sales-viralnation` — Viral Nation platform help — Secure AI brand safety, CreatorOS, talent representation
- `/sales-modash` — Modash platform help — Shopify-focused discovery, gifting, payments, API
- `/sales-creatoriq` — CreatorIQ platform help — enterprise influencer OS, SafeIQ, ExchangeIQ API
- `/sales-trendhero` — trendHERO platform help — Instagram analytics, AQS fake follower detection
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Check if an influencer's followers are real
**User says**: "A creator with 200K followers on TikTok wants $3,000 for a sponsored post — how do I check if they're legit?"
**Skill does**:
1. Runs the creator through a PlutoBa Deep Assessment
2. Explains the 7-dimension PlutoBa Score — what each dimension means for this creator
3. Highlights Audience Authenticity and Comment Authenticity scores as the key fraud indicators
4. Compares the $3,000 ask against PlutoBa's rate benchmarks for their tier
5. Recommends go/no-go based on the overall score and price-to-value ratio
**Result**: Data-backed decision on whether the creator's audience justifies the price

### Example 2: Brand safety check before a major campaign
**User says**: "We're a family brand and want to partner with a lifestyle creator — how do I make sure they won't embarrass us?"
**Skill does**:
1. Runs a Deep Assessment focusing on the Brand Safety dimension
2. Explains what PlutoBa scans: profanity, controversial topics, competitor mentions, red-flag content
3. Shows how to interpret the brand safety score (0-100)
4. Recommends checking Content Consistency too — erratic posting patterns can signal risk
5. Suggests setting a minimum brand safety threshold for all future partnerships
**Result**: Clear brand safety evaluation with a reusable vetting threshold

### Example 3: Agency setting up PlutoBa for multiple clients
**User says**: "I run an agency with 8 brand clients — which PlutoBa plan do I need?"
**Skill does**:
1. Compares Agency ($499/mo, 5 brands) vs Agency Scale ($999/mo, 15 brands)
2. Calculates that 8 brands needs Agency + 1 Add-on Pack ($499 + $159 = $658/mo) or Agency Scale ($999/mo for headroom)
3. Explains workspace isolation — each brand gets its own workspace with separate data
4. Notes white-label reporting, shared assessment credits, and role-based access
5. Recommends starting with Agency + Pack, upgrading to Scale when reaching 10+ brands
**Result**: Right-sized plan recommendation with cost calculation

## Troubleshooting

### PlutoBa Score seems surprisingly low for a popular creator
**Symptom**: A creator with high follower count gets a low PlutoBa Score (under 50)
**Cause**: High follower count doesn't mean high quality — the score weighs engagement authenticity, audience quality, and posting consistency, not just size
**Solution**: Check which of the 7 dimensions pulled the score down. Low Audience Authenticity suggests purchased followers. Low Engagement Quality suggests engagement pods or bots. Low Content Consistency suggests irregular posting. A low score on a "big" creator is PlutoBa working as intended.

### Deep Assessment quota running out too fast
**Symptom**: Hitting the Deep Assessment limit mid-month
**Cause**: Using Deep Assessments for initial screening instead of reserving them for shortlisted creators
**Solution**: Use Standard Assessments for initial screening and filtering. Reserve Deep Assessments for your top 3-5 candidates per campaign. Consider upgrading plans if your volume consistently exceeds your quota — quotas roll over for 1 month.

### Creator outreach getting low response rates
**Symptom**: AI-generated outreach messages aren't getting replies
**Cause**: Generic messaging, wrong creator-brand fit, or reaching creators who aren't open to partnerships
**Solution**: Use PlutoBa's AI outreach to generate personalized briefs referencing specific content the creator has posted. Check that the creator's audience demographics match your target market before reaching out. On Creator Pro, creators can set auto-acknowledgement and reply templates — so check if the creator is on PlutoBa and might auto-respond.
