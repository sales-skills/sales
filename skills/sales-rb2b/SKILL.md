---
name: sales-rb2b
description: "RB2B platform help — Person-Level Website Visitor ID, Company-Level ID, Hot Pages, Hot Leads, Traffic Insights, Identity Resolution API, integrations. Use when you know companies visit your site but not which people, the RB2B pixel isn't identifying visitors, you need person-level ID not just company-level, Hot Pages aren't flagging high-intent visits, or you're comparing RB2B vs Clearbit Reveal for visitor identification. Do NOT use for visitor identification strategy across tools (use /sales-intent), enrichment strategy across tools (use /sales-enrich), building prospect lists across tools (use /sales-prospect-list), or lead scoring strategy (use /sales-lead-score)."
argument-hint: "[describe what you need help with in RB2B]"
license: MIT
version: 1.0.0
tags: [sales, visitor-identification, intent-data, enrichment, platform]
---
# RB2B Platform Help

Help the user with RB2B platform questions — Person-Level Website Visitor ID, Company-Level ID, Hot Pages, Hot Leads, Traffic Insights, Identity Resolution API, and integrations.

**Important context**: RB2B offers **person-level** visitor identification (US traffic only) — it identifies the individual visiting your site, not just the company. This is the key differentiator vs Clearbit Reveal, Leadfeeder, and other company-level-only tools. Company-level ID is powered by Demandbase and works globally.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

**What area of RB2B do you need help with?**
- a) Person-Level ID — identify individual visitors by name, email, LinkedIn
- b) Company-Level ID — identify companies visiting your site
- c) Hot Pages — flag high-intent page visits
- d) Hot Leads — filter visitors by firmographic/demographic criteria
- e) Traffic Insights — dashboard analytics on visitor activity
- f) Identity Resolution API — programmatic access to RB2B's data
- g) Integrations — connect RB2B to CRM, Slack, or other tools
- h) Pixel setup and installation
- i) Something else

**What's your primary use case?**
- a) Alert sales when target accounts or people visit the site
- b) Enrich anonymous traffic with contact data for outbound
- c) Build retargeting audiences from identified visitors
- d) Score and route leads based on website behavior
- e) API-based identity resolution for my own app
- f) Compare RB2B to other visitor ID tools

**What's your current stack?**
- a) HubSpot
- b) Salesforce
- c) Other CRM (Pipedrive, Close, etc.)
- d) Slack-only (no CRM)
- e) Custom app / API-only

## Step 2 — Route or answer directly

If the question is about **visitor identification strategy across tools** (not RB2B-specific) — hand off: "This is an intent signal strategy question — run: `/sales-intent {user's original question}`"
If the question is about **enrichment strategy across tools** — hand off: "This is an enrichment strategy question — run: `/sales-enrich {user's original question}`"
If the question is about **building prospect lists across tools** — hand off: "This is a prospect list building question — run: `/sales-prospect-list {user's original question}`"
If the question is about **lead scoring model design** — hand off: "This is a lead scoring strategy question — run: `/sales-lead-score {user's original question}`"
If the question is about **connecting RB2B to other tools** — hand off: "This is a tool integration question — run: `/sales-integration {user's original question}`"

Otherwise, answer directly using the reference below.

## Step 3 — RB2B platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### Setting up RB2B pixel

1. **Sign up** at rb2b.com and choose a plan
2. **Copy the pixel snippet** from your RB2B dashboard (Settings → Pixel)
3. **Add to your website** — paste in the `<head>` tag of every page (or use Google Tag Manager)
4. **Verify installation** — visit your own site and check the RB2B dashboard for the visit
5. **Configure Hot Pages** — mark your pricing, demo, and comparison pages as high-intent
6. **Set up Slack alerts** — connect Slack and choose a channel for visitor notifications
7. **Connect CRM** — push identified visitors to HubSpot or Salesforce

### Optimizing match rates

1. **Focus on US traffic** — person-level ID only works for US visitors; ensure your marketing drives US traffic if person-level ID is your goal
2. **Upgrade to Pro+** — 35-45% person-level coverage vs lower rates on other plans
3. **Use Hot Pages** — even if you can't ID everyone, Hot Pages ensures you catch high-intent visitors
4. **Combine with outbound** — use RB2B-identified visitors as warm leads for outbound sequences (they've already shown intent)

### RB2B + outbound workflow

1. **RB2B identifies visitor** on pricing page → pushes to Slack + CRM
2. **Sales rep reviews** the visitor's LinkedIn profile and company
3. **If ICP match** → add to outbound sequence in Apollo/Salesloft/Outreach
4. **Personalize outreach** — reference the specific page they visited ("I noticed you were looking at our enterprise pricing...")
5. **Time the outreach** — reach out within 24 hours of the visit for highest conversion

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and coverage rates that may be outdated.*

- **Person-level ID is US-only**: RB2B cannot identify individual visitors outside the US. If your audience is primarily international, you'll only get company-level data (powered by Demandbase). This is a hard compliance limitation, not a feature gap.
- **Free plan is company-level only**: The Free plan (150 resolutions) does NOT include person-level identification. You need a paid plan (Starter or above) for person-level ID. Don't assume the free trial shows person-level capabilities.
- **API is a separate product**: The Identity Resolution API at api.rb2b.com has its own credit-based pricing, completely separate from the pixel product pricing. Don't confuse pixel plan limits with API credits.
- **Match rates vary significantly**: The 35-45% person-level match rate is for Pro+ plans with sufficient US traffic. Lower plans and sites with more international/mobile/VPN traffic will see much lower rates. Set expectations accordingly.
- **Pixel requires JavaScript**: The RB2B pixel is a JavaScript snippet. It won't work on server-rendered pages that don't execute client-side JS, email tracking pixels, or native mobile apps. For those use cases, use the API product instead.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-intent` — Buying signals and visitor identification strategy across tools (RB2B is one option for visitor ID)
- `/sales-enrich` — Enrichment strategy across tools (RB2B API provides identity resolution)
- `/sales-prospect-list` — Build prospect lists from identified visitors and other sources
- `/sales-lead-score` — Score leads using RB2B visitor data + other signals
- `/sales-integration` — Connect RB2B to CRM, Slack, and other tools
- `/sales-clearbit` — Clearbit/Breeze Intelligence (competitor for company-level visitor ID via Reveal)
- `/sales-customersai` — Customers.ai platform help (B2C ecommerce visitor ID for Shopify + Klaviyo — different market than RB2B's B2B focus)
- `/sales-cadence` — Design outbound sequences for RB2B-identified visitors
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up person-level visitor identification
**User says**: "I want to know exactly who is visiting our pricing page so my SDRs can follow up — how do I set up RB2B?"
**Skill does**: Walks through pixel installation, Hot Pages configuration for the pricing page, Slack alert setup, explains person-level ID is US-only with 35-45% match rate on Pro+, recommends connecting to CRM for automatic lead creation, and suggests a follow-up workflow where SDRs reach out within 24 hours referencing the specific page visited
**Result**: Sales team gets real-time Slack alerts with visitor name, email, LinkedIn, and company when someone hits the pricing page

### Example 2: RB2B vs Clearbit Reveal comparison
**User says**: "We're currently using Clearbit Reveal for website visitor identification — should we switch to RB2B?"
**Skill does**: Compares person-level (RB2B) vs company-level only (Clearbit Reveal), explains RB2B's US-only limitation vs Reveal's global coverage, discusses pricing differences (RB2B $79-199/mo vs Clearbit credit-based), notes that Clearbit is now Breeze Intelligence (HubSpot lock-in), and recommends RB2B if US traffic is primary and person-level ID is the goal
**Result**: Clear comparison helping the user decide based on their traffic geography and identification depth needs

### Example 3: Connect RB2B to outbound sequences
**User says**: "How do I automatically add RB2B-identified visitors to my Apollo sequences?"
**Skill does**: Explains the native Apollo integration, walks through connecting RB2B to Apollo, recommends filtering with Hot Leads (ICP criteria) before pushing to sequences to avoid spamming non-ICP visitors, suggests using Hot Pages to only sequence visitors from high-intent pages, and shows how to personalize the sequence with visit context
**Result**: Automated pipeline from website visit → ICP filter → personalized outbound sequence

## Troubleshooting

### Pixel not tracking visitors
**Symptom**: RB2B dashboard shows zero visitors after installing the pixel
**Cause**: Pixel snippet not loading correctly, blocked by ad blockers, or installed on wrong pages
**Solution**: Verify the pixel is in the `<head>` tag using browser dev tools (Network tab → search for "rb2b"). Check that it's not blocked by your Content Security Policy. Test with ad blockers disabled. If using Google Tag Manager, ensure the tag fires on "All Pages" and the trigger is set to "Page View".

### Low person-level match rates
**Symptom**: Getting mostly company-level identifications, very few person-level matches
**Cause**: Traffic is primarily non-US, mobile, or VPN — person-level ID only works for US-based desktop/business IP visitors
**Solution**: Check your traffic geography in Google Analytics. If most traffic is international, person-level ID won't work for those visitors. Consider upgrading to Pro+ for higher US match rates (35-45%). If using ads, ensure US targeting. Note that mobile carrier IPs and VPN users can't be identified at person level.

### Duplicate or stale visitor data in CRM
**Symptom**: Same visitors appearing as new leads in CRM repeatedly, or outdated visitor data
**Cause**: CRM integration not deduplicating on email, or webhook pushing every page view as a new record
**Solution**: Configure your CRM integration to match on email address and update existing records rather than creating duplicates. In HubSpot/Salesforce, set the integration to "update if exists, create if new." If using webhooks with a custom integration, implement dedup logic on your end using the visitor's email as the unique key.
