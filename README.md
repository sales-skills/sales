# Sales Skills

Claude Code skills for sales, marketing, and GTM workflows.

## Quick Start

```bash
npx skills add sales-skills/sales
```

## What is `sales-do`?

`/sales-do` is a router skill — the single entry point for 40 skills in this repo + 53 third-party skills. Describe your objective in plain language and it matches you to the right specialized skill with a ready-to-use prompt. You don't need to memorize which skill does what.

```
/sales-do write a cold outbound sequence for CFOs at mid-market fintech companies
```

### How the workflow works

1. **You invoke the router** with a plain-language request (or no arguments at all).

2. **The router asks clarifying questions** — it always asks, even if you provided arguments. It needs to fully understand your situation: what you're trying to do, who the audience is, where you are in the process, and any constraints. Questions use multiple-choice options to make answering fast.

3. **The router detects your installed skills** — it checks `~/.claude/skills/` to see what you already have, so it only shows install commands for skills you're missing.

4. **The router matches and recommends** — it picks the best skill(s) and explains why. For complex objectives it recommends a full sequence of skills (no limit on how many).

5. **The router generates verbose, ready-to-use prompts** — for every recommended skill, it outputs a detailed `/skill-name` invocation packed with all the context you provided. You can copy-paste-run each prompt directly and get a great result without re-explaining anything.

### What it does NOT do

- It does **not** solve the problem itself — it never writes copy, audits SEO, or designs pricing. It only routes.
- It does **not** auto-invoke the target skill — you run the generated prompts yourself, so you stay in control.

### Example session

```
> /sales-do I need to launch our new product

Router asks:
  What kind of product?
  - A) SaaS / software
  - B) Physical product
  - C) Service / consulting

  Who is the target buyer?
  - A) SMB / startup founders
  - B) Mid-market (VP/Director level)
  - C) Enterprise (C-suite)
  - D) Consumer / B2C

  What assets do you already have?
  - A) Nothing yet — starting from scratch
  - B) We have positioning/messaging docs
  - C) We have a landing page but need the launch plan
  ...

Router recommends a 5-skill sequence:
  1. /product-marketing-context <verbose prompt with all your context>
  2. /launch-strategy <verbose prompt referencing step 1 output>
  3. /copywriting <verbose prompt for launch landing page>
  4. /email-sequence <verbose prompt for launch email campaign>
  5. /social-content <verbose prompt for launch social posts>
```

## Skills Catalog

### Prospecting & Pipeline

| Skill | What it does | Status |
|---|---|---|
| `/sales-prospect` | ICP definition, target lists, lead identification | Coming soon |
| `/sales-research` | Account/contact research, competitive intel, org charts | Coming soon |
| `/sales-outreach` | Cold emails, LinkedIn messages, multi-touch sequences | Coming soon |
| `/sales-pipeline` | Pipeline review, forecasting, deal prioritization | Coming soon |

### Active Deals

| Skill | What it does | Status |
|---|---|---|
| `/sales-discovery` | Discovery/qualification call prep, MEDDIC/BANT | Coming soon |
| `/sales-demo` | Demo prep, pitch decks, presentation customization | Coming soon |
| `/sales-proposal` | Proposals, pricing, SOWs, business cases, ROI | Coming soon |
| `/sales-objection` | Objection handling, negotiation prep | Coming soon |
| `/sales-follow-up` | Nurture, re-engagement, going-dark recovery | Coming soon |
| `/sales-close` | Closing strategies, mutual action plans, urgency | Coming soon |

### Qwilr & Proposals

| Skill | What it does | Status |
|---|---|---|
| `/sales-proposal-page` | Write and structure a Qwilr proposal page with interactive quote blocks | Available |
| `/sales-proposal-analytics` | Interpret Qwilr engagement signals and decide follow-up actions | Available |
| `/sales-deal-room` | Design multi-stakeholder Qwilr deal rooms for complex B2B deals | Available |
| `/sales-qwilr-automation` | Build automations connecting Qwilr to CRM via API, Zapier, or native integrations | Available |
| `/sales-proposal-template` | Design reusable Qwilr proposal templates for your whole sales team | Available |

### Salesloft & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-salesloft` | Salesloft platform help — config, Rhythm, Conversations, Drift, integrations | Available |
| `/sales-cadence` | Design multi-channel outbound cadences with timing, A/B testing, and content | Available |
| `/sales-call-review` | Review sales calls, extract coaching insights, score against MEDDPICC/SPIN | Available |
| `/sales-deal-inspect` | Inspect deal health, map stakeholders, identify risks, recommend next actions | Available |
| `/sales-forecast` | Build and validate revenue forecasts with pipeline coverage and gap analysis | Available |

### Apollo.io & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-apollo` | Apollo.io platform help — config, CRM sync, API, analytics, dialer, credits, admin | Available |
| `/sales-apollo-sequences` | Create and manage Apollo sequences — deliverability, A/B testing, mailbox config | Available |

### Mailshake & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-mailshake` | Mailshake platform help — campaigns, Lead Catcher, recipients, senders, API, webhooks | Available |

### Lemlist & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-lemlist` | Lemlist platform help — multichannel sequences, Lemwarm, People Database, enrichment, LinkedIn automation, calls, WhatsApp, API | Available |

### Smartlead & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-smartlead` | Smartlead platform help — campaigns, SmartSenders, SmartInfra, SmartAgents, SmartDialer, SmartDelivery, SmartProspect, API, agency/white-label | Available |

### Yesware & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-yesware` | Yesware platform help — email tracking, campaigns, templates, Prospector, Meeting Scheduler, Salesforce integration, reporting | Available |

### Mixmax & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-mixmax` | Mixmax platform help — sequences, email tracking, one-click meetings, rules engine, dialer, AI Compose, Salesforce/HubSpot integration, polls, reporting | Available |

### Reply.io & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-reply` | Reply.io platform help — multichannel sequences, Jason AI SDR, B2B database, email warmup, deliverability tools, unified inbox, analytics, Salesforce/HubSpot integration, agency features | Available |

### Woodpecker & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-woodpecker` | Woodpecker platform help — cold email campaigns, condition-based sequences, email warmup, Bounce Shield, Adaptive Sending, email verification, inbox rotation, centralized inbox, LinkedIn automation, Lead Finder, agency panel, API & webhooks | Available |

### Hunter.io & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-hunter` | Hunter.io platform help — Domain Search, Email Finder, Email Verifier, Campaigns, Discover, Signals, TechLookup, Leads, browser extension, MCP server, API & integrations | Available |

### Prospeo & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-prospeo` | Prospeo platform help — person enrichment, company enrichment, person/company search, bulk operations, Chrome extension, LinkedIn Sales Navigator extraction, 5-step email verification, API & integrations | Available |

### Tomba & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-tomba` | Tomba.io platform help — domain search, email finder, email verifier, enrichment, author finder, LinkedIn finder, phone finder, bulk operations, browser extensions, API & integrations | Available |

### Seismic & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-seismic` | Seismic platform help — Enablement Cloud, content management, Learning & Coaching, Aura AI, Digital Sales Rooms, Meeting Intelligence, LiveSend, LiveDocs, Programs, API & integrations | Available |

### Groove.cm & Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-groove` | Groove.cm platform help — GroovePages, GrooveFunnels, GrooveSell, GrooveMail, GrooveAffiliate, GrooveMember, GrooveVideo, GrooveWebinar, GrooveBlog, GrooveKart, GrooveProof | Available |

### Funnels, Email Marketing & Digital Sales

| Skill | What it does | Status |
|---|---|---|
| `/sales-funnel` | Build and optimize sales funnels — strategy, structure, conversion, A/B testing across ClickFunnels, GoHighLevel, Groove, and more | Available |
| `/sales-email-marketing` | Opt-in email marketing — broadcasts, nurture sequences, automation, segmentation across GrooveMail, Mailchimp, ActiveCampaign, and more | Available |
| `/sales-affiliate-program` | Design and manage affiliate programs — commissions, recruitment, tracking, payouts across GrooveAffiliate, PartnerStack, and more | Available |
| `/sales-webinar` | Webinar-based selling — live and evergreen strategy, presentation, follow-up across GrooveWebinar, Demio, WebinarJam, and more | Available |
| `/sales-membership` | Membership sites and online courses — structure, pricing, retention across GrooveMember, Kajabi, Teachable, and more | Available |
| `/sales-checkout` | Checkout optimization — upsells, order bumps, payment plans, cart abandonment across GrooveSell, ThriveCart, SamCart, and more | Available |
| `/sales-meeting-scheduler` | Schedule sales meetings — booking pages, round-robin, Calendly/Chili Piper, no-show reduction, meeting page conversion | Available |
| `/sales-email-tracking` | Email engagement tracking — open/click/attachment tracking, follow-up timing, Apple MPP, tracking accuracy | Available |

### Prospecting, Enrichment & Signals

| Skill | What it does | Status |
|---|---|---|
| `/sales-prospect-list` | Build targeted B2B prospect lists with ICP definition, filters, and segmentation | Available |
| `/sales-enrich` | Enrich contacts with emails/phones, CRM data hygiene, dedup, bulk enrichment | Available |
| `/sales-intent` | Interpret buying signals, intent data, job changes, lead scoring, account prioritization | Available |
| `/sales-compete` | Run competitive displacement campaigns — find competitor customers ready to switch | Available |
| `/sales-account-map` | Map the buying committee at a target account with multi-threading strategy | Available |
| `/sales-lead-score` | Design, weight, and tune a lead scoring model with MQL/SQL thresholds | Available |

### Cross-Platform

| Skill | What it does | Status |
|---|---|---|
| `/sales-deliverability` | Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement, blacklists, sender reputation | Available |
| `/sales-agency-outbound` | Multi-client outbound for agencies — infrastructure, client isolation, white-labeling, onboarding | Available |
| `/sales-lead-routing` | Design lead routing and assignment rules — round-robin, territory, score-based, account-based | Available |
| `/sales-integration` | Connect sales tools with webhooks, Zapier/Make, native integrations, and CRM sync | Available |

### Strategy & Content

| Skill | What it does | Status |
|---|---|---|
| `/sales-positioning` | Messaging, value props, competitive differentiation | Coming soon |

### Sales Enablement & Content

| Skill | What it does | Status |
|---|---|---|
| `/sales-content` | Organize, distribute, and measure sales collateral — battle cards, one-pagers, case studies, decks, playbooks, content governance | Available |
| `/sales-coaching` | Sales coaching and training — onboarding, role-play, coaching frameworks, certifications, ramp time optimization | Available |

### Marketing & GTM

> 33 marketing skills from [`coreyhaines31/marketingskills`](https://skills.sh/coreyhaines31/marketingskills).
> Install all: `npx skills add coreyhaines31/marketingskills`
> Install one: `npx skills add coreyhaines31/marketingskills --skills <skill-name>`

#### SEO & Content

| Skill | What it does | Status |
|---|---|---|
| `/ai-seo` | Optimize content for AI search engines and LLM citations | Available |
| `/content-strategy` | Plan content strategy and identify topics to cover | Available |
| `/copywriting` | Write marketing copy for homepages, landing pages, and sites | Available |
| `/copy-editing` | Edit, review, and improve existing marketing copy | Available |
| `/programmatic-seo` | Generate SEO pages at scale using templates | Available |
| `/schema-markup` | Add and optimize structured data markup | Available |
| `/seo-audit` | Audit and diagnose technical and on-page SEO issues | Available |
| `/site-architecture` | Plan website hierarchy, navigation, and URL structure | Available |
| `/social-content` | Create and schedule social media content | Available |

#### Conversion & Growth

| Skill | What it does | Status |
|---|---|---|
| `/ab-test-setup` | Plan, design, and implement A/B tests and experiments | Available |
| `/form-cro` | Optimize lead capture and contact forms | Available |
| `/onboarding-cro` | Optimize post-signup activation and time-to-value | Available |
| `/page-cro` | Increase conversions on marketing and landing pages | Available |
| `/paywall-upgrade-cro` | Optimize in-app paywalls and upsell modals | Available |
| `/popup-cro` | Create and optimize popups, modals, and overlays | Available |
| `/signup-flow-cro` | Optimize signup, registration, and trial activation | Available |

#### Acquisition & Campaigns

| Skill | What it does | Status |
|---|---|---|
| `/ad-creative` | Generate and scale ad headlines, descriptions, and full ads | Available |
| `/cold-email` | Write B2B cold outreach and follow-up sequences | Available |
| `/email-sequence` | Create automated email flows and drip campaigns | Available |
| `/free-tool-strategy` | Plan and build free marketing tools for lead generation | Available |
| `/lead-magnets` | Create and optimize lead magnets for email capture | Available |
| `/paid-ads` | Manage Google, Meta, LinkedIn, and Twitter ad campaigns | Available |

#### Strategy & Positioning

| Skill | What it does | Status |
|---|---|---|
| `/competitor-alternatives` | Create competitor comparison and alternative pages | Available |
| `/launch-strategy` | Plan product launches and feature announcements | Available |
| `/marketing-ideas` | Generate marketing inspiration and SaaS strategies | Available |
| `/marketing-psychology` | Apply behavioral science and mental models to marketing | Available |
| `/pricing-strategy` | Determine pricing, packaging, and monetization decisions | Available |
| `/product-marketing-context` | Create foundational product marketing documentation | Available |
| `/competitive-landscape` | Analyze competitive dynamics with Porter's Five Forces, Blue Ocean Strategy, and positioning maps | Available |

#### Retention & Revenue

| Skill | What it does | Status |
|---|---|---|
| `/churn-prevention` | Reduce churn through cancellation flows and save offers | Available |
| `/referral-program` | Build and optimize referral and affiliate programs | Available |
| `/revops` | Manage lead lifecycle and marketing-to-sales handoff | Available |
| `/sales-enablement` | Create pitch decks, one-pagers, and objection handling docs | Available |

#### Analytics

| Skill | What it does | Status |
|---|---|---|
| `/analytics-tracking` | Set up and audit analytics measurement and event tracking | Available |
| `/marketing-skills-collection` | Generate marketing deliverables across CRO, copywriting, SEO, analytics, and growth | Available |
| `/marketing-automation` | Marketing automation with 23 sub-skills across CRO, copywriting, SEO, analytics, and growth | Available |

### Research & Data

> 10 skills from [`resciencelab/opc-skills`](https://skills.sh/resciencelab/opc-skills).
> Install all: `npx skills add resciencelab/opc-skills`
> Install one: `npx skills add resciencelab/opc-skills --skills <skill-name>`

#### Research

| Skill | What it does | Status |
|---|---|---|
| `/producthunt` | Search and retrieve Product Hunt posts, topics, and collections | Available |
| `/product-hunt-launch` | Optimize Product Hunt launches with research, gallery strategy, and timing | Available |
| `/reddit` | Search and retrieve Reddit posts, comments, and subreddit info | Available |
| `/requesthunt` | Collect and analyze user feedback from Reddit, X, and GitHub | Available |
| `/apify-lead-generation` | Multi-platform lead scraping from Google Maps, social media, websites, and search engines | Available |
| `/twitter` | Search and retrieve tweets, user profiles, and trends from X | Available |

#### Creative & Design

| Skill | What it does | Status |
|---|---|---|
| `/banner-creator` | Generate professional banners for GitHub, Twitter, and websites | Available |
| `/logo-creator` | Generate professional logos with AI through iterative design | Available |
| `/nanobanana` | Generate and edit images using AI (Gemini image model) | Available |
| `/baoyu-slide-deck` | Transform content into professional presentation decks with customizable styles | Available |

#### SEO & Domains

| Skill | What it does | Status |
|---|---|---|
| `/seo-geo` | Optimize for AI search engines (GEO) and traditional search | Available |
| `/backlink-analyzer` | Analyze backlink profiles with toxic link detection and competitor benchmarking | Available |
| `/build-links` | Design link acquisition campaigns with prospect scoring and outreach strategy | Available |
| `/domain-hunter` | Find domain names with availability checks and price comparison | Available |

#### Utilities

| Skill | What it does | Status |
|---|---|---|
| `/archive` | Capture, index, and reuse project knowledge across sessions | Available |
| `/skill-standardization` | Validate and standardize SKILL.md files against the Agent Skills spec | Available |
| `/skill-creator` | Scaffold new skills with validated directory structure, frontmatter, and progressive disclosure | Available |

### Router

| Skill | What it does | Status |
|---|---|---|
| `/sales-do` | Routes your objective to the right skill | Available |
| `/sales-request-skill` | Build or request a skill that doesn't exist yet | Available |

## Usage Examples

```
# Route automatically
/sales-do prep for a discovery call with Acme Corp

# Or use skills directly
/sales-research Acme Corp
/sales-outreach cold email for VP Engineering at Series B startups
/sales-objection they say they already have a solution in place
```

## License

MIT
