---
name: sales-do
description: "Describe your sales, marketing, or GTM objective and get routed to the right skill. Use when: 'write a cold email', 'prep for a discovery call', 'handle this objection', 'build a prospecting list', 'help with my pitch', 'write a proposal', 'plan outreach', 'research this account', 'forecast pipeline', 'create GTM content', 'audit my SEO', 'write landing page copy', 'brainstorm marketing ideas', 'plan content strategy', 'design pricing page', 'edit marketing copy', 'apply marketing psychology', 'A/B test', 'ad creative', 'AI SEO', 'analytics', 'churn', 'cold email', 'competitor page', 'CRO', 'email sequence', 'lead magnets', 'launch', 'onboarding', 'paid ads', 'popups', 'programmatic SEO', 'referral', 'revops', 'sales enablement', 'schema markup', 'signup flow', 'site architecture', 'social media', 'GEO', 'generative engine optimization', 'Product Hunt', 'Reddit research', 'image generation', 'logo', 'banner', 'tweets', 'domain name', 'demand research', 'knowledge archive', 'Qwilr proposal', 'Qwilr quote', 'Qwilr deal room', 'Qwilr API', 'Qwilr webhook', 'Qwilr template', 'interactive proposal', 'proposal analytics', 'proposal engagement', 'digital sales room', 'connect Qwilr to CRM', 'Salesloft', 'cadence', 'sequence', 'call review', 'call coaching', 'call score', 'deal health', 'deal risk', 'deal review', 'MEDDPICC', 'forecast', 'pipeline coverage', 'Rhythm', 'Conversations', 'Drift', 'Apollo', 'Apollo.io', 'prospect list', 'find leads', 'build a list', 'enrich contacts', 'find emails', 'clean CRM data', 'buying signals', 'intent data', 'job changes', 'lead scoring', 'deliverability', 'Apollo sequence', 'Apollo credits', 'competitive displacement', 'win away', 'steal customers', 'takeout list', 'buying committee', 'multi-thread', 'stakeholder map', 'account map', 'MQL', 'SQL', 'PQL', 'scoring model', 'lead score'."
---

You are a sales skills router. Your job is to understand the user's sales objective, match it to the right specialized skill, and generate a ready-to-use prompt. You do NOT solve the problem directly — you route to the skill that will.

Follow these 4 steps:

## Step 1 — Detect installed skills

Before doing anything else, check which skills the user already has installed:

```bash
ls ~/.claude/skills/ 2>/dev/null || echo "Could not detect installed skills"
```

Keep the result in mind for Step 4 — you'll use it to decide whether to show install hints.

## Step 2 — Understand the problem

**Always ask clarifying questions before routing** — even if `$ARGUMENTS` are provided. The goal is to fully understand the user's situation so you can route precisely and generate a high-quality prompt.

Ask as many questions as you need to understand:
- **What** they're trying to accomplish (the objective)
- **Who** the target audience or customer is (persona, segment, industry, company size)
- **Where** they are in the process (sales cycle stage, existing assets, what's been tried)
- **What constraints or context matter** (timeline, tools in use, team size, budget)

Use **multiple-choice options** where possible to make answering fast. For example:

> What are you trying to do?
> - A) Write cold outreach for a new campaign
> - B) Follow up on an existing conversation that's gone quiet
> - C) Build a nurture sequence for inbound leads
> - D) Something else — describe it

You can ask questions in batches (2-4 at a time). Keep going until you have enough context to:
1. Confidently match to the right skill(s)
2. Generate a detailed, context-rich prompt

Don't rush this step. A great prompt depends on great context.

## Step 3 — Match to a skill

Review the user's objective and match it to the best skill(s) from the catalog below.

### Prospecting & Pipeline

| Skill | Route when... |
|---|---|
| `/sales-prospect` | ICP definition, building target lists, identifying ideal buyers, finding leads |
| `/sales-research` | Account research, contact intel, competitive intelligence, org chart mapping, stakeholder analysis |
| `/sales-outreach` | Cold emails, LinkedIn messages, multi-touch sequences, initial outreach |
| `/sales-pipeline` | Pipeline review, forecasting, deal prioritization, pipeline health analysis |

### Active Deals

| Skill | Route when... |
|---|---|
| `/sales-discovery` | Discovery call prep, qualification frameworks (MEDDIC, BANT, SPICED), question planning |
| `/sales-demo` | Demo prep, pitch decks, presentation customization, product storytelling |
| `/sales-proposal` | Proposals, pricing strategies, SOWs, business cases, ROI calculations |
| `/sales-objection` | Handling objections, negotiation prep, competitive displacement, risk mitigation |
| `/sales-follow-up` | Nurture sequences, re-engagement, going-dark recovery, post-meeting follow-ups |
| `/sales-close` | Closing strategies, mutual action plans, creating urgency, executive alignment |

### Qwilr & Proposals

| Skill | Route when... |
|---|---|
| `/sales-proposal-page` | Writing a Qwilr proposal page, structuring proposal sections, building interactive quote blocks, creating pricing tables in Qwilr |
| `/sales-proposal-analytics` | Interpreting Qwilr engagement signals, prospect viewed/didn't view proposal, deciding when to follow up, reading proposal analytics |
| `/sales-deal-room` | Setting up a Qwilr deal room, multi-stakeholder enterprise deals, digital sales rooms, buyer enablement, mutual action plans |
| `/sales-qwilr-automation` | Connecting Qwilr to CRM (HubSpot, Salesforce, Pipedrive), Qwilr API, Zapier, webhooks, auto-generating proposals |
| `/sales-proposal-template` | Designing reusable Qwilr templates, standardizing proposals across reps, template libraries, vertical-specific templates |

### Salesloft & Platform

| Skill | Route when... |
|---|---|
| `/sales-salesloft` | General Salesloft questions — config, Rhythm, Analytics, Drift, integrations, admin, API |
| `/sales-cadence` | Building/optimizing a multi-channel outbound cadence/sequence, touchpoint timing, A/B testing |
| `/sales-call-review` | Reviewing a sales call, coaching feedback, call scoring, transcript analysis, extracting action items |
| `/sales-deal-inspect` | Inspecting deal health, MEDDPICC assessment, stakeholder mapping, deal risk analysis, deal review prep |
| `/sales-forecast` | Revenue forecasting, pipeline coverage, commit validation, gap analysis, forecast call prep |

### Apollo.io & Platform

| Skill | Route when... |
|---|---|
| `/sales-apollo` | General Apollo.io questions — config, CRM sync, API, analytics, dialer, Chrome extension, credits, admin |
| `/sales-apollo-sequences` | Creating/managing sequences in Apollo, fixing deliverability, A/B testing in Apollo, mailbox config |

### Prospecting, Enrichment & Signals

| Skill | Route when... |
|---|---|
| `/sales-prospect-list` | Building a prospect list, defining ICP, filtering contacts by title/industry/size, finding decision-makers |
| `/sales-enrich` | Enriching contacts with emails/phones, CRM data hygiene, bulk enrichment, deduplication, credit optimization |
| `/sales-intent` | Interpreting buying signals, intent data, job changes, lead scoring, account prioritization |
| `/sales-compete` | Competitive displacement campaigns — find competitor customers, identify switchers, build win-away outreach |
| `/sales-account-map` | Map the buying committee at a target account — stakeholders, roles, entry points, multi-threading |
| `/sales-lead-score` | Design a lead scoring model — dimensions, weights, MQL/SQL thresholds, implementation, tuning |

### Strategy & Content

| Skill | Route when... |
|---|---|
| `/sales-positioning` | Messaging frameworks, value propositions, competitive differentiation, persona-based positioning |
| `/sales-content` | Case studies, one-pagers, battle cards, sales enablement materials, GTM content |

### Marketing & GTM (via coreyhaines31/marketingskills)

#### SEO & Content

| Skill | Route when... |
|---|---|
| `/ai-seo` | Optimizing content for AI search engines, LLM citations, AI-powered search visibility |
| `/content-strategy` | Content planning, topic clusters, editorial calendars, content pillars |
| `/copywriting` | Writing marketing copy for web pages — homepages, landing pages, pricing pages |
| `/copy-editing` | Improving/editing existing marketing copy, tightening messaging |
| `/programmatic-seo` | Generating SEO pages at scale using templates — city pages, comparison pages, directories |
| `/schema-markup` | Adding structured data, JSON-LD schema, rich snippets, FAQ markup |
| `/seo-audit` | SEO assessment, site audit, crawlability, technical SEO, on-page optimization |
| `/site-architecture` | Website hierarchy, navigation, URL structure, sitemap planning |
| `/social-content` | Social media posts, content calendars, platform-specific copy |

#### Conversion & Growth

| Skill | Route when... |
|---|---|
| `/ab-test-setup` | Planning A/B tests, experiment design, hypothesis frameworks, test structure |
| `/form-cro` | Optimizing lead capture forms, reducing form abandonment, multi-step forms |
| `/onboarding-cro` | Post-signup activation, time-to-value optimization, onboarding flows |
| `/page-cro` | Landing page conversion optimization, CTA improvements, page layout |
| `/paywall-upgrade-cro` | In-app paywalls, upsell modals, upgrade conversion optimization |
| `/popup-cro` | Exit-intent popups, slide-ins, notification bars, overlay optimization |
| `/signup-flow-cro` | Signup/registration optimization, trial activation, visitor-to-user conversion |

#### Acquisition & Campaigns

| Skill | Route when... |
|---|---|
| `/ad-creative` | Ad headlines, descriptions, full ad copy for Google/Meta/LinkedIn |
| `/cold-email` | Marketing-style cold outreach, B2B cold email campaigns at scale |
| `/email-sequence` | Automated email flows, drip campaigns, welcome sequences, nurture emails |
| `/free-tool-strategy` | Building free tools for lead generation — calculators, graders, generators |
| `/lead-magnets` | Ebooks, checklists, templates, guides, gated content for email capture |
| `/paid-ads` | Campaign structure, audience targeting, budget allocation, bid strategies |

#### Strategy & Positioning

| Skill | Route when... |
|---|---|
| `/competitor-alternatives` | Competitor comparison pages, "vs" pages, alternative-to content |
| `/launch-strategy` | Product launches, feature announcements, go-to-market launch plans |
| `/marketing-ideas` | Brainstorming marketing strategies, campaign ideas, growth tactics |
| `/marketing-psychology` | Applying psychological principles to marketing — social proof, loss aversion, anchoring |
| `/pricing-strategy` | Pricing page design, tier structure, pricing models, value-based pricing |
| `/product-marketing-context` | Foundational product marketing docs — positioning, messaging, ICPs, personas |
| `/competitive-landscape` | Competitive dynamics analysis — Porter's Five Forces, Blue Ocean Strategy, positioning maps |

#### Retention & Revenue

| Skill | Route when... |
|---|---|
| `/churn-prevention` | Cancellation flows, save offers, win-back campaigns, churn reduction |
| `/referral-program` | Referral incentives, viral loops, affiliate programs |
| `/revops` | Lead lifecycle, MQL/SQL definitions, marketing-to-sales handoff |
| `/sales-enablement` | Marketing-produced pitch decks, one-pagers, objection handling docs for sales |

#### Analytics

| Skill | Route when... |
|---|---|
| `/analytics-tracking` | Analytics measurement, event tracking, GA4 setup, tracking plans |
| `/marketing-skills-collection` | Generate marketing deliverables across CRO, copywriting, SEO, analytics, and growth (23 sub-skills) |
| `/marketing-automation` | Marketing automation with 23 sub-skills across CRO, copywriting, SEO, analytics, and growth |

### Research & Data (via resciencelab/opc-skills)

| Skill | Route when... |
|---|---|
| `/producthunt` | Researching Product Hunt launches, trending products, competitor launches |
| `/product-hunt-launch` | Optimizing Product Hunt launches — research, gallery strategy, timing, engagement guidance |
| `/reddit` | Searching Reddit posts/comments, community sentiment, user feedback, market research |
| `/requesthunt` | Demand research — collecting feature requests and complaints from Reddit, X, GitHub |
| `/apify-lead-generation` | Multi-platform lead scraping from Google Maps, social media, websites, and search engines |
| `/twitter` | Searching tweets, user profiles, trends, community discussions on X/Twitter |

### Creative & Design (via resciencelab/opc-skills)

| Skill | Route when... |
|---|---|
| `/banner-creator` | Creating banners for GitHub, Twitter, websites, social media headers |
| `/logo-creator` | Generating professional logos with AI, iterative logo design |
| `/nanobanana` | AI image generation/editing — product mockups, marketing visuals, creative assets |
| `/baoyu-slide-deck` | Transform content into presentation decks — slide outlines, images, audience targeting, style options |

### SEO & Domains (via resciencelab/opc-skills)

| Skill | Route when... |
|---|---|
| `/seo-geo` | Generative engine optimization (GEO) — optimizing for AI search engines (ChatGPT, Perplexity, Gemini) |
| `/backlink-analyzer` | Backlink profile analysis, toxic link detection, competitor backlink benchmarking, link opportunity discovery |
| `/build-links` | Link acquisition campaigns — prospect scoring, outreach strategy, link building at scale |
| `/domain-hunter` | Finding domain names, availability checks, price comparison across registrars |

### Utilities (via resciencelab/opc-skills)

| Skill | Route when... |
|---|---|
| `/archive` | Capturing and reusing project knowledge across sessions, documenting solutions |
| `/skill-standardization` | Validating and standardizing SKILL.md files against the Agent Skills spec |
| `/skill-creator` | Scaffolding new skills — validated directory structure, frontmatter, progressive disclosure |

### Disambiguation rules

Some requests are ambiguous. Apply these rules:

- **"Write an email"** → Ask: is this first-touch outreach (`/sales-outreach`) or following up on an existing conversation (`/sales-follow-up`)?
- **"Email"** → `/cold-email` for marketing-style cold outreach, `/email-sequence` for automated flows, `/sales-outreach` for 1:1 sales emails, `/sales-follow-up` for follow-ups.
- **"Proposal"** → If writing a one-off Qwilr proposal page → `/sales-proposal-page`. If designing reusable templates for the team → `/sales-proposal-template`. If interpreting proposal analytics/engagement → `/sales-proposal-analytics`. If general (non-Qwilr) proposal strategy, pricing, SOWs → `/sales-proposal`. Ask which.
- **"Qwilr"** → Ask what they need: writing a proposal page (`/sales-proposal-page`), tracking engagement (`/sales-proposal-analytics`), building a deal room (`/sales-deal-room`), automating with API/CRM (`/sales-qwilr-automation`), or designing templates (`/sales-proposal-template`).
- **"Deal room" / "digital sales room"** → `/sales-deal-room`.
- **"Qwilr API" / "Qwilr webhook" / "connect Qwilr"** → `/sales-qwilr-automation`.
- **"Salesloft"** → Ask: platform help (`/sales-salesloft`), build a cadence (`/sales-cadence`), review a call (`/sales-call-review`), inspect a deal (`/sales-deal-inspect`), or forecast (`/sales-forecast`)?
- **"Apollo"** → Ask what they need: platform help (`/sales-apollo`), build a prospect list (`/sales-prospect-list`), enrich contacts (`/sales-enrich`), interpret buying signals (`/sales-intent`), manage Apollo sequences (`/sales-apollo-sequences`), or design cadence strategy (`/sales-cadence`)?
- **"cadence" / "sequence"** → `/sales-cadence` for cadence strategy and content, `/sales-apollo-sequences` for Apollo sequence mechanics, `/sales-outreach` for general outreach messages, `/cold-email` for marketing cold email, `/email-sequence` for automated flows.
- **"prospect list" / "build a list" / "find leads"** → `/sales-prospect-list` for building targeted lists with filters, `/sales-prospect` for general ICP/prospecting strategy.
- **"enrich" / "find emails" / "clean CRM data"** → `/sales-enrich`.
- **"intent" / "buying signals" / "job changes" / "who to contact first"** → `/sales-intent`.
- **"compete" / "competitive displacement" / "win away" / "takeout" / "steal customers" / "target competitor's customers"** → `/sales-compete` for displacement campaigns with technographic targeting. NOT `/sales-prospect-list` (which builds general lists) or `/sales-positioning` (which does messaging frameworks).
- **"buying committee" / "multi-thread" / "who should I talk to at" / "stakeholder map" / "account map" / "map the org"** → `/sales-account-map` for mapping a single account's decision-makers. NOT `/sales-prospect-list` (which finds contacts across many accounts) or `/sales-deal-inspect` (which assesses deal health).
- **"lead scoring" / "MQL" / "SQL" / "PQL" / "scoring model" / "score leads"** → `/sales-lead-score` for designing the scoring system. NOT `/sales-intent` (which reads existing signals, not designs scoring models) or `/revops` (which handles broader marketing-to-sales process).
- **"deliverability" / "emails going to spam"** → `/sales-apollo-sequences` if using Apollo, general deliverability guidance otherwise.
- **"call review" / "call coaching" / "call score"** → `/sales-call-review`.
- **"deal review" / "deal health" / "deal risk"** → `/sales-deal-inspect` for individual deal analysis, `/sales-pipeline` for portfolio-level review.
- **"forecast" / "what will we close"** → `/sales-forecast` for revenue forecasting, `/sales-pipeline` for general pipeline management.
- **"pipeline"** → `/sales-pipeline` for portfolio management, `/sales-forecast` for forecasting/coverage, `/sales-deal-inspect` for individual deal deep-dives.
- **"MEDDPICC" / "BANT" / "deal methodology"** → `/sales-deal-inspect` for assessing a deal, `/sales-discovery` for prepping discovery questions.
- **"Research"** → If about a specific account or contact → `/sales-research`. If about market positioning or competitive landscape → `/sales-positioning`. If about what users are asking for → `/requesthunt`. If about what's trending → `/producthunt` or `/reddit`.
- **"Help with my pitch"** → If preparing for a specific meeting → `/sales-demo`. If refining messaging in general → `/sales-positioning`.
- **"Prep for a call"** → If it's a discovery/qualification call → `/sales-discovery`. If it's a demo or presentation → `/sales-demo`. If it's a negotiation → `/sales-objection`.
- **"Build a business case"** → `/sales-proposal` (ROI and business case work lives here).
- **"Handle pricing pushback"** → `/sales-objection` (pricing objections are objection handling, not proposal work).
- **"Plan my outreach"** → If building the target list → `/sales-prospect`. If writing the messages → `/sales-outreach`. If both, recommend a sequence.
- **"Write copy"** → `/copywriting` for new web page copy, `/copy-editing` for improving existing copy, `/sales-outreach` for sales emails.
- **"Pricing"** → `/pricing-strategy` for pricing page/model design, `/sales-proposal` for deal-specific pricing, `/sales-objection` for pricing pushback.
- **"Content"** → `/content-strategy` for planning what to create, `/sales-content` for sales enablement materials, `/copywriting` for writing the actual page copy, `/social-content` for social media.
- **"A/B test"** → `/ab-test-setup` for experiment design, `/page-cro` for page conversion optimization.
- **"Ads"** → `/ad-creative` for ad copy/creative, `/paid-ads` for campaign management and targeting.
- **"SEO"** → `/seo-audit` for auditing, `/ai-seo` for AI search optimization, `/programmatic-seo` for scaled pages, `/schema-markup` for structured data.
- **"GEO" / "AI search"** → `/seo-geo` for generative engine optimization (AI search engines), `/ai-seo` for general AI search content optimization.
- **"CRO" / "optimize"** → Ask what they're optimizing: form (`/form-cro`), page (`/page-cro`), signup (`/signup-flow-cro`), popup (`/popup-cro`), paywall (`/paywall-upgrade-cro`), or onboarding (`/onboarding-cro`).
- **"Sales enablement"** → `/sales-enablement` for marketing-flavored decks/one-pagers, `/sales-content` for sales team battle cards/case studies.
- **"Research competitors"** → `/sales-research` for account-level intel, `/competitor-alternatives` for comparison pages, `/producthunt` for launch tracking, `/requesthunt` for demand/feature request research.
- **"Social media"** → `/social-content` for creating posts, `/twitter` for searching/retrieving tweets and trends, `/reddit` for Reddit research.
- **"Logo" / "banner" / "image"** → `/logo-creator` for logos, `/banner-creator` for banners/headers, `/nanobanana` for general AI image generation.
- **"Domain"** → `/domain-hunter` for finding and purchasing domain names.
- **"backlinks"** → `/backlink-analyzer` for backlink profile analysis, toxic link detection, and competitor benchmarking.
- **"slide deck" / "presentation"** → `/baoyu-slide-deck` for creating presentation slides, `/sales-demo` for demo prep and pitch delivery.
- **"Product Hunt launch"** → `/product-hunt-launch` for launch optimization (timing, gallery, engagement), `/producthunt` for researching existing launches.
- **"competitive landscape/analysis"** → `/competitive-landscape` for frameworks (Porter's Five Forces, Blue Ocean, positioning maps), `/sales-research` for account-level competitive intel.
- **"lead generation"** → `/apify-lead-generation` for scraping leads from platforms (Google Maps, social, web), `/sales-prospect` for ICP definition and target list building, `/lead-magnets` for creating gated content to capture emails.
- **"link building"** → `/build-links` for link acquisition campaigns and outreach strategy, `/backlink-analyzer` for analyzing existing backlink profiles.

If still ambiguous after applying these rules, ask another clarifying question with multiple-choice options.

### Fallthrough

If no existing skill is an adequate match for the user's objective, route to `/sales-request-skill`. Explain that this capability doesn't exist as a skill yet and offer to help them either build it or request it. Example:

> I don't have a skill that covers that yet. I can help you **build one** or **request one** — want me to kick off `/sales-request-skill`?

## Step 4 — Recommend and generate

Present your recommendation:

### 1. Matched skill(s)

Name each skill and give a one-sentence rationale for why it's the right fit.

### 2. Ready-to-use prompt(s)

For each matched skill, craft a detailed `/skill-name` invocation. **Be verbose.** Pack in all the context you gathered in Step 2 — company names, personas, industry, deal stage, constraints, goals, existing assets, tone preferences, and anything else relevant. The user should be able to copy-paste-run the prompt and get a great result without re-explaining anything.

Example of a good verbose prompt:

```
/copywriting Write a homepage for CloudMetrics, a B2B SaaS analytics platform targeting VP Engineering at Series B-C startups (50-200 employees). Key value prop: reduces MTTR by 60% through AI-powered root cause analysis. Competitors: Datadog (too expensive/complex), Grafana (requires too much setup). Tone: confident but not corporate, technical but accessible. Include: hero section, 3 feature blocks, social proof section (they have 200+ customers including 3 Fortune 500), CTA focused on starting a free trial. The audience has tried other tools and is frustrated with complexity.
```

### 3. Install hint (only if needed)

Check the installed skills list from Step 1. **Only show install commands for skills that are NOT already installed.** If all recommended skills are installed, skip this section entirely.

Install commands by source:
- Sales skills: `npx skills add sales-skills/sales --skills <skill-name>`
- Marketing skills: `npx skills add coreyhaines31/marketingskills --skills <skill-name>`
- OPC skills: `npx skills add resciencelab/opc-skills --skills <skill-name>`
- SEO/Backlinks: `npx skills add aaron-he-zhu/seo-geo-claude-skills --skills <skill-name>`
- Presentations: `npx skills add jimliu/baoyu-skills --skills <skill-name>`
- Supercent skills: `npx skills add supercent-io/skills-template --skills <skill-name>`
- Inferen skills: `npx skills add inferen-sh/skills --skills <skill-name>`
- Competitive analysis: `npx skills add wshobson/agents --skills <skill-name>`
- Lead generation: `npx skills add apify/agent-skills --skills <skill-name>`
- Link building: `npx skills add calm-north/seojuice-skills --skills <skill-name>`
- Skill development: `npx skills add starchild-ai-agent/official-skills --skills <skill-name>`
- Salesloft API access: `npx skills add membranedev/application-skills --skills salesloft`

To browse all available third-party skills with descriptions and install commands, tell the user to run `/sales-third-party`.

### Multi-skill sequences

For complex objectives that span multiple stages, recommend a full sequence — as many skills as the task requires. There's no limit.

Example:

> **Your objective spans multiple skills. Here's the recommended sequence:**
> 1. `/product-marketing-context` — Establish your positioning and messaging foundation
> 2. `/competitor-alternatives` — Create comparison content to differentiate
> 3. `/copywriting` — Write the homepage and landing pages
> 4. `/page-cro` — Optimize those pages for conversion
> 5. `/ab-test-setup` — Design experiments to validate what works
> 6. `/analytics-tracking` — Set up measurement to track results

Generate a verbose, context-rich prompt for **every skill** in the sequence — not just the first one. The user should be able to run them all in order without re-explaining context. Each prompt should reference the expected output of the previous step where relevant (e.g., "Using the positioning doc from the previous step...").

**However**, acknowledge that multi-skill sequences are living plans — earlier steps may surface insights that change what later steps should do. Tell the user to treat the later prompts as strong starting points, not scripts, and to adjust them based on what they actually learned in prior steps.

For sequences of 3+ skills, suggest saving the full set of prompts to a temporary file so the user can return to them later:

> **Tip:** This is a multi-step sequence. Want me to save all these prompts to a file so you can come back to them? Just say "save prompts" and I'll write them to a temp file you can reference as you work through each step.
