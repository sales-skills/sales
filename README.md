# Sales Skills

**AI-powered sales copilot — hundreds of skills for prospecting, outbound, deals, proposals, and GTM. One install, one router.**

[![Skills](https://img.shields.io/badge/skills-hundreds-blue)](https://skills.sh/sales-skills/sales)
[![Platforms](https://img.shields.io/badge/platforms-dozens-green)](https://skills.sh/sales-skills/sales)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](LICENSE)
[![Install](https://img.shields.io/badge/install-npx%20skills%20add%20sales--skills%2Fsales-black)](https://skills.sh/sales-skills/sales)

<p align="center">
  <img src="assets/demo.gif" alt="Sales Skills demo — install, route, and run" width="600">
</p>

## Contents

- [Quick Start](#quick-start)
- [Why?](#why)
- [What is sales-do?](#what-is-sales-do)
- [Skills Catalog](#skills-catalog)
- [Usage Examples](#usage-examples)

## Quick Start and Best Practice for 99% of users

```bash
npx skills add sales-skills/sales --skill sales-do
```

Not sure which skill you need? Just run `/sales-do` and describe what you're trying to accomplish — it routes you to the right skill.

Want every skill at once?  You probably don't, there are hundreds, so it may overwhelm your context.  But if you want to sort throught them manually anyway...

```bash
npx skills add sales-skills/sales
```

YOLO Every skill for Claude Code, copy instead of symlink, no confirmation:

```bash
npx skills add sales-skills/sales --skill '*' -a claude-code --copy -y
```

## Why sales-do skill?

- You're copy-pasting the same cold email structure for every campaign
- You can't remember which tool does email validation vs enrichment vs deliverability
- You need to launch on Product Hunt, DevHunt, and 20 other directories but don't know what each one requires
- You want to build a prospect list but don't know whether to use Apollo, Clay, ZoomInfo, or Seamless
- You're spending more time figuring out _which_ tool to use than actually doing the work

One router skill (`/sales-do`) understands all available sales, marketing, ad network, influencer, CRM, and GTM skills and matches you to the right one based on what you're trying to accomplish.

## What is `sales-do`?

`/sales-do` is a router skill — the single entry point for hundreds of skills in this repo. Describe your objective in plain language and it matches you to the right specialized skill with a ready-to-use prompt. You don't need to memorize which skill does what.

```
/sales-do write a cold outbound sequence for CFOs at mid-market fintech companies
```

### How the workflow works

1. **You invoke the router** with a plain-language request (or no arguments at all).

2. **The router asks clarifying questions** — it needs to understand what you're trying to do, who the audience is, where you are in the process, and any constraints. Questions use multiple-choice options to make answering fast.

3. **The router checks strategy skills first** — before looking at individual platforms, it checks whether your problem maps to a **strategy skill**. Strategy skills are cross-platform coordinators that cover an entire problem domain (e.g., `/sales-deliverability` covers email deliverability across Apollo, Mailshake, Salesloft, Smartlead, etc.). If a strategy skill matches, you get routed there — and the strategy skill handles platform-specific routing internally. There are 40+ strategy skills covering problem domains from CRM selection to influencer marketing to help desk comparison.

4. **The router matches and recommends** — it picks the best skill and generates a detailed, ready-to-use `/sales-*` prompt packed with all the context you provided. You can copy-paste-run it directly and get a great result without re-explaining anything. For multi-step objectives, it recommends a sequence of skills.

### What it does NOT do

- It does **not** solve the problem itself — it never writes copy, audits SEO, or designs pricing. It only routes.
- It does **not** auto-invoke the target skill — you run the generated prompts yourself, so you stay in control.

### Example: strategy skill routing

```
> /sales-do we need a help desk — we're a 15-person SaaS team using HubSpot,
  budget is under $50/agent

Router responds:
  This is a help desk selection question — run:

  /sales-helpdesk-selection We're a 15-person SaaS team using HubSpot CRM.
  We need email + chat support with a knowledge base. Budget is under
  $50/agent/month. Compare our options.
```

The strategy skill (`/sales-helpdesk-selection`) then compares Zendesk, Freshdesk, Intercom, Help Scout, Gorgias, and others — factoring in your budget, CRM, and team size.

### Example: multi-skill sequence

```
> /sales-do I want to launch cold outbound — need a prospect list,
  verify emails, warm up a domain, then run a sequence

Router recommends a 4-skill sequence:
  1. /sales-prospect-list <prompt with ICP, filters, volume>
  2. /sales-enrich <prompt to verify/enrich the list>
  3. /sales-deliverability <prompt for domain warmup and DNS setup>
  4. /sales-cadence <prompt to design the outbound sequence>
```

## Skills Catalog

### Prospecting & Pipeline

| Skill | What it does |
|---|---|
| `/sales-prospect` | ICP definition, target lists, lead identification |
| `/sales-research` | Account/contact research, competitive intel, org charts |
| `/sales-outreach` | Cold emails, LinkedIn messages, multi-touch sequences |
| `/sales-pipeline` | Pipeline review, forecasting, deal prioritization |

### Active Deals

| Skill | What it does |
|---|---|
| `/sales-discovery` | Discovery/qualification call prep, MEDDIC/BANT |
| `/sales-demo` | Demo prep, pitch decks, presentation customization |
| `/sales-proposal` | Proposals, pricing, SOWs, business cases, ROI |
| `/sales-objection` | Objection handling, negotiation prep |
| `/sales-follow-up` | Nurture, re-engagement, going-dark recovery |
| `/sales-close` | Closing strategies, mutual action plans, urgency |

### Router

| Skill | What it does |
|---|---|
| `/sales-do` | Routes your objective to the right skill |
| `/sales-request-skill` | Build or request a skill that doesn't exist yet |


<details>
<summary><strong>Qwilr & Proposals</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-proposal-page` | Write and structure a Qwilr proposal page with interactive quote blocks |
| `/sales-proposal-analytics` | Interpret Qwilr engagement signals and decide follow-up actions |
| `/sales-deal-room` | Design multi-stakeholder Qwilr deal rooms for complex B2B deals |
| `/sales-qwilr-automation` | Build automations connecting Qwilr to CRM via API, Zapier, or native integrations |
| `/sales-proposal-template` | Design reusable Qwilr proposal templates for your whole sales team |

</details>

<details>
<summary><strong>Salesloft</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-salesloft` | Salesloft platform help — config, Rhythm, Conversations, Drift, integrations |
| `/sales-cadence` | Design multi-channel outbound cadences with timing, A/B testing, and content |
| `/sales-call-review` | Review sales calls, extract coaching insights, score against MEDDPICC/SPIN |
| `/sales-note-taker` | AI meeting note-taker / conversation-intelligence selection & API integration (Fathom, Fireflies, Avoma, Gong, Otter, Fellow, Grain, Sembly, Read.ai, MeetGeek, Jamie, Jamy, Wave, tl;dv, Claap, Sybill, Sonnet) |
| `/sales-fathom` | Fathom platform help — REST API, webhooks, OAuth, SDKs, MCP, transcript/summary export, CRM sync, pricing tiers |
| `/sales-fireflies` | Fireflies.ai platform help — GraphQL API, Webhooks V1 + V2, HMAC verification, AskFred AI, Real-time API, MCP, rate limits per tier, bot auto-join control |
| `/sales-avoma` | Avoma platform help — REST API, webhooks, MEDDIC/BANT/SPICED scorecards, Conversation + Revenue Intelligence, Lead Router, CRM sync, pricing tiers |
| `/sales-gong` | Gong platform help — Revenue AI OS, call recording, Smart Trackers, coaching scorecards, REST API, webhook automation, Forecast, Engage, MCP |
| `/sales-otter` | Otter.ai platform help — OtterPilot, live transcription, AI Chat, Zapier automation, CRM sync, pricing tiers |
| `/sales-fellow` | Fellow platform help — AI meeting assistant, REST API, bot-based/bot-free recording, CRM sync, templates, pricing tiers |
| `/sales-grain` | Grain platform help — AI meeting recorder, REST API, MCP Server for Claude/Cursor, video clips, Zapier automation, CRM sync, pricing tiers |
| `/sales-sembly` | Sembly platform help — agentic meeting intelligence, AI-generated deliverables, webhook automations, 10 native CRM connectors, Zapier/n8n, MCP, pricing tiers |
| `/sales-read-ai` | Read.ai platform help — meeting intelligence with engagement/sentiment analytics, Search Copilot, REST API + MCP Server, webhook automations, CRM sync, pricing tiers |
| `/sales-meetgeek` | MeetGeek platform help — bot + no-bot recording, customizable AI summary templates, REST API with regional endpoints, MCP Server, 7 CRM connectors, conversation analytics, pricing tiers |
| `/sales-jamie` | Jamie platform help — bot-free AI note-taker, REST API with personal/workspace keys, webhook automations, CRM sync to HubSpot/Salesforce/Attio, MCP server, EU privacy-first, pricing tiers |
| `/sales-krisp` | Krisp platform help — noise cancellation + AI meeting notes, accent conversion, Voice AI SDK, webhook integrations, Call Center AI, CRM sync, pricing tiers |
| `/sales-colibri` | Colibri.ai platform help — real-time transcription, AI summaries, Sales Copilot with live guidance, conversation analytics, legal transcription, pricing tiers |
| `/sales-cluely` | Cluely platform help — real-time AI coaching overlay, pre-call briefs, knowledge base RAG, CRM sync via Merge.dev, coaching analytics, pricing tiers |
| `/sales-jamy` | Jamy.ai platform help — AI meeting assistant with real-time translation (100+ languages), cross-language search, HubSpot CRM sync, API/webhooks, pricing tiers |
| `/sales-tldv` | tl;dv platform help — AI meeting note-taker with unlimited free recordings, REST API v1alpha1, sales coaching (MEDDIC/BANT/SPIN), CRM sync, MCP server, pricing tiers |
| `/sales-wave` | Wave platform help — mobile-first AI note-taker, REST API with semantic search and webhooks, MCP server, Voice ID, 76-language transcription, pricing tiers |
| `/sales-claap` | Claap platform help — AI sales call assistant with no-bot recording, REST API + OAuth, CRM auto-enrichment, deal scoring (SPICED/MEDDIC/BANT), MCP connector, pricing tiers |
| `/sales-tactiq` | Tactiq platform help — Chrome extension bot-free AI note-taker, live transcription (60+ languages), AI Workflows, Zapier automation, native HubSpot/Salesforce/Pipedrive CRM sync, pricing tiers |
| `/sales-hedy` | Hedy AI platform help — real-time AI meeting coach, REST API, webhooks, MCP server, Zapier/n8n automation, pricing tiers |
| `/sales-granola` | Granola platform help — bot-free AI notepad for meetings, REST API, MCP integration (beta), HubSpot/Attio/Affinity CRM sync, Zapier automation, pricing tiers |
| `/sales-omi` | Omi AI platform help — open-source AI wearable necklace ($89), Developer API, app marketplace with webhook integrations, in-person + online capture, pricing tiers |
| `/sales-bluedot` | Bluedot platform help — bot-free AI note-taker with video recording, Chrome extension + desktop/mobile apps, Svix webhooks, HubSpot/Salesforce CRM sync, screen recording, pricing tiers |
| `/sales-notta` | Notta platform help — AI meeting transcription in 58 languages, Notta Bot, Notta Brain cross-meeting AI, Zapier automation, CRM sync to Salesforce/HubSpot/Zoho/Freshsales/Salesflare, pricing tiers |
| `/sales-sonix` | Sonix platform help — AI transcription, translation, and subtitling for uploaded audio/video (53+ languages), REST API, SRT/VTT subtitles, video burn-in, Zapier, SOC 2/HIPAA, pricing tiers |
| `/sales-transcribeme` | TranscribeMe platform help — human+AI hybrid transcription (99% accuracy on human tiers), HIPAA compliance, REST API, Machine Express/First Draft/Standard/Verbatim tiers, translation, .NET/Node.js SDKs |
| `/sales-temi` | Temi platform help — budget AI transcription at $0.25/min (Rev's engine), English-only batch upload, REST API, Zapier/Make automation, mobile app |
| `/sales-transkriptor` | Transkriptor platform help — AI transcription in 100+ languages, meeting bot (Zoom/Meet/Teams), subtitles, sentiment analysis, REST API (Enterprise only), Zapier/Make, pricing tiers |
| `/sales-verbit` | Verbit platform help — enterprise AI+human transcription, live captioning, accessibility compliance (ADA/WCAG/CVAA), Gen.V AI insights, REST API (5 modules), education/legal/media/government verticals, pricing tiers |
| `/sales-lindy` | Lindy platform help — no-code AI agent builder for email triage, meeting notes, calendar management, custom workflow automation, chatbots, AI phone agents, 4,000+ integrations, credit-based pricing tiers |
| `/sales-alfred` | alfred_ platform help — AI executive assistant for autonomous email triage, reply drafting, task extraction, calendar management, $24.99/month single tier |
| `/sales-rilla` | Rilla platform help — AI coaching for in-person/field sales, virtual ridealongs, mobile recording, CRM sync via Merge, ServiceTitan/SPOTIO integrations, pricing tiers |
| `/sales-siro` | Siro platform help — AI field sales coaching, Halftime real-time mid-call coaching, mobile recording with offline mode, REST API + Svix webhooks, CRM sync via Merge, ServiceTitan/SalesRabbit/SPOTIO/FieldRoutes integrations, pricing tiers |
| `/sales-salesask` | Sales Ask (Coach Dean) platform help — AI coaching for in-home/field + call center sales in home services, active text feedback to reps, Process Adherence Scoring, virtual ridealongs, AI roleplay, ServiceTitan/Jobber/Housecall Pro/Salesforce integrations, white-label program |
| `/sales-sonnet` | Sonnet AI platform help — bot-free meeting recording with auto-CRM update (HubSpot/Salesforce), domain templates (sales/legal/medical/recruiting), concept maps, relationship tracker, macOS-only |
| `/sales-supernormal` | Supernormal platform help — AI agent for agencies, bot-free meeting capture, AI-generated deliverables (pitch decks, briefs, emails) from meetings, HubSpot/Salesforce CRM sync, credit-based pricing |
| `/sales-voicetonotes` | VoiceToNotes platform help — ultra-cheap AI voice-to-text ($1/mo unlimited), HIPAA/SOC 2 compliance, real-time transcription, AI summaries, grammar correction, OCR, web + iOS + Android, no integrations |
| `/sales-speakwise` | Speakwise platform help — iOS-native AI meeting assistant for in-person recording, on-device transcription (50+ languages), native Notion integration, AirPods hands-free, $59.99/yr |
| `/sales-noota` | Noota platform help — AI meeting assistant + recruitment automation with transcription, voice agents, email automation, 7 CRMs, 15 ATS integrations, EU compliant |
| `/sales-modjo` | Modjo platform help — EU-native AI revenue intelligence with call scoring, CRM auto-fill, deal intelligence, Ask Modjo AI, customizable AI agents, MCP server, GDPR-compliant EU hosting |
| `/sales-meetily` | Meetily platform help — open-source (MIT), privacy-first AI meeting assistant with 100% local Whisper/Parakeet transcription, Ollama summarization, bot-free recording, self-hosted deployment, HIPAA/GDPR by architecture |
| `/sales-char` | Char (formerly Hyprnote) platform help — open-source (GPL-3.0) bot-free local-first AI meeting notepad with system audio capture, markdown output, 10 cloud STT providers + local Cactus engine, plugin SDK, automation hooks, macOS |
| `/sales-amical` | Amical platform help — open-source (MIT) local-first AI dictation with Whisper STT, context-aware formatting, Ollama/OpenRouter LLM, push-to-talk voice-to-text, 100+ languages, Mac + Windows |
| `/sales-sybill` | Sybill platform help — AI sales assistant with Magic Summaries, CRM Autofill (MEDDPICC/BANT/SPICED), Deal Workspace, Ask Sybill, follow-up automation, Buyer EQ behavioral insights |
| `/sales-winn` | Winn.ai platform help — real-time AI sales assistant with playbook adherence tracking (MEDDIC/BANT/SPICED), automated CRM updates (Salesforce/HubSpot), live coaching (Enterprise), AI battle cards, meeting prep briefs, $69/seat/mo Pro |
| `/sales-outdoo` | Outdoo (formerly MeetRecord) platform help — AI roleplay coaching, conversation intelligence, revenue intelligence, CRM automation with MEDDIC/SPIN/BANT, 120+ integrations, Open API (Enterprise), mid-market Gong alternative |
| `/sales-jiminny` | Jiminny platform help — conversation intelligence, revenue intelligence, AI notetaker, sales coaching, automatic CRM logging, 8 native CRM integrations, partial REST API, mid-market Gong alternative |
| `/sales-enthu` | Enthu.AI platform help — contact center conversation intelligence with auto QA scorecards on 100% of calls, agent coaching, compliance monitoring, sentiment analysis, Aircall/RingCentral/HubSpot/Pipedrive integrations, affordable Gong/CallMiner alternative |
| `/sales-demodesk` | Demodesk platform help — AI-powered sales meeting platform with conversation intelligence, coaching scorecards, CRM auto-update, autonomous AI Crew agents, REST API V2, 98-language transcription, GDPR-native EU data centers |
| `/sales-clari-copilot` | Clari Copilot (formerly Wingman) platform help — real-time battlecards, live coaching, AI call summaries, coaching scorecards, gametapes, deal intelligence, Clari Core API, ~$60-110/user/mo |
| `/sales-revenue-io` | Revenue.io platform help — Salesforce-native revenue orchestration with RingDNA dialer, Guided Selling cadences, Moments real-time coaching, conversation intelligence, Revenue Intelligence dashboards, custom pricing ~$59K/yr |
| `/sales-salesken` | Salesken platform help — real-time in-call coaching, QA automation on 100% of calls, revenue intelligence, field sales analytics, multilingual, Salesforce/HubSpot/Zoho native CRM, ~$99/mo |
| `/sales-balto` | Balto platform help — real-time AI guidance for contact centers, automated QA on 100% of calls, compliance monitoring (PCI/HIPAA), coaching, call summarization, 50+ CCaaS/softphone integrations, ~$100-150/agent/mo |
| `/sales-genesys` | Genesys Cloud CX platform help — enterprise CCaaS with AI experience orchestration, omnichannel routing, Architect IVR, WFM, QM, predictive routing, AppFoundry marketplace (450+ apps), REST Platform API with 15 regional endpoints, deep Salesforce integration (CX Cloud), $75-$240/user/mo |
| `/sales-talkdesk` | Talkdesk platform help — cloud CCaaS with AI virtual agents (Autopilot), agent assist (CoPilot), omnichannel routing, WFM, QM, Studio IVR, 23 REST API specs, deep Salesforce integration (CTI + Service Cloud Voice), $85-$225/agent/mo |
| `/sales-nice-cxone` | NICE CXone (Mpower) platform help — full CCaaS with omnichannel routing, WFM, quality management, AI analytics, Interaction Analytics, AI Copilot, virtual agents, 16 REST API groups, deep Salesforce integration, $71-$209/agent/mo |
| `/sales-zendesk` | Zendesk platform help — ticketing, Help Center, AI agents, live chat, Talk voice, Sell CRM, omnichannel messaging, Explore analytics, 1300+ Marketplace apps, REST API (15+ API families), $19-$169/agent/mo + add-ons |
| `/sales-helpdesk-selection` | Help desk platform comparison and selection — Zendesk vs Freshdesk vs Intercom vs Help Scout vs Zoho Desk vs Front vs Hiver vs Jira Service Management vs Gorgias vs Tidio |
| `/sales-ccaas-selection` | CCaaS platform comparison and selection — Genesys vs NICE CXone vs Talkdesk vs Five9 vs 8x8 vs Nextiva vs Amazon Connect vs Twilio Flex vs Aircall vs Dialpad |
| `/sales-verint` | Verint Open Platform help — enterprise CX automation with Da Vinci AI bots (Quality Bot 100% QA, Coaching Bot real-time guidance, Wrap Up Bot, Exact Transcription 80+ languages), WFM, knowledge automation, IVA, speech/text analytics, 500+ adaptors, BYOT any-ACD, acquired Calabrio Feb 2026, custom enterprise pricing |
| `/sales-calabrio` | Calabrio ONE platform help — standalone WEM (WFM forecasting/scheduling, QM scorecards, interaction analytics, bot analytics, call recording) layered on top of any CCaaS (Amazon Connect, Genesys, NICE, Five9, Cisco, Avaya), WFM/Historical Data/HR APIs, ~$50-120/agent/mo (now part of Verint) |
| `/sales-playvox` | Playvox (by NICE) platform help — modular WEM with QA scorecards, WFM forecasting/scheduling, Performance Management, Coaching & eLearning, Agent Motivation gamification (leaderboards/badges/rewards), Zendesk/Salesforce/Five9/Genesys integrations, OAuth2 REST API, $30-90/agent/mo modular |
| `/sales-convin` | Convin platform help — AI-powered contact center QA with 100% automated scoring, Real-Time Assist agent coaching, AI Phone Call outbound voicebot, integrated LMS, proprietary LLM (70+ languages), 30+ integrations (8x8/Amazon Connect/Avaya/Aircall), custom pricing |
| `/sales-observe-ai` | Observe.AI platform help — enterprise contact center intelligence with 100% Auto QA, Agent Copilot real-time guidance, Coaching Copilot, VoiceAI/ChatAI virtual agents, Five9/Amazon Connect/Talkdesk/Avaya integrations, REST API, ~$100-500/user/mo |
| `/sales-qeval` | QEval platform help — AI-powered contact center QA with 100% automated scoring (94% accuracy), speech analytics, compliance monitoring, agent coaching, VOC analytics, CRM/telephony/WFM integrations via API/SFTP, Manual $40/user/mo, AI $100/user/mo |
| `/sales-uniphore` | Uniphore platform help — enterprise Business AI Cloud with conversation intelligence (U-Analyze), real-time agent assist (U-Assist), automated QA, CSATai predictive CSAT, Emotion AI, self-service IVA, ActionIQ CDP, Cisco/Avaya/Genesys/Amazon Connect/Five9/Twilio integrations, Zero Data AI sovereign deployment, custom enterprise pricing |
| `/sales-cresta` | Cresta platform help — enterprise contact center AI with real-time agent assist, AI virtual agents, conversation intelligence, automated QA, Knowledge Agent, Agent Operations Center, Five9/Amazon Connect/Genesys/NICE integrations, $60K-$150K/yr |
| `/sales-maestroqa` | MaestroQA platform help — conversation data QA with customizable scorecards, AI-powered coaching workflows, AskAI conversation analytics, reverse-ETL, chatbot QA, 60+ integrations (Zendesk/Freshdesk/Salesforce/Five9/Talkdesk/Snowflake), Rippit API, ~$19/user/mo starting |
| `/sales-craft` | Craft platform help — AI growth engine for home services with real-time in-appointment field coaching, 24/7 AI call center, revenue recovery agents, ServiceTitan/Salesforce/HubSpot/Jobber/AccuLynx/Housecall Pro integrations |
| `/sales-momentum` | Momentum platform help — AI revenue orchestration with automated CRM updates, Slack Deal Rooms, MEDDIC Autopilot, AI coaching, churn signals, executive briefs, $69-99/user/mo, acquired by Salesforce Feb 2026 |
| `/sales-oliv` | Oliv.ai platform help — AI-native revenue intelligence with modular agents (Notetaker, Meeting Insights, Deal Insights, CRM Manager, Forecaster), 8 CRM integrations, 42+ total integrations, $19-77/user/mo modular pricing |
| `/sales-weflow` | Weflow platform help — Salesforce-native Revenue AI with activity capture, conversation intelligence (96+ languages), deal intelligence & forecasting, Ask Weflow AI, Chrome Extension, Mobile Copilot, $19-79/user/mo |
| `/sales-dialpad` | Dialpad platform help — AI-native UCaaS + CCaaS with DialpadGPT, AI Recaps, AI Coaching Hub, contact center, voice, video, SMS, 70+ integrations, $15-25/user/mo |
| `/sales-deal-inspect` | Inspect deal health, map stakeholders, identify risks, recommend next actions |
| `/sales-forecast` | Build and validate revenue forecasts with pipeline coverage and gap analysis |

</details>

<details>
<summary><strong>Outreach & Sequence Platforms</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-apollo` | Apollo.io — config, CRM sync, API, analytics, dialer, credits, admin |
| `/sales-apollo-sequences` | Apollo sequences — deliverability, A/B testing, mailbox config |
| `/sales-mailshake` | Mailshake — campaigns, Lead Catcher, recipients, senders, API, webhooks |
| `/sales-lemlist` | Lemlist — multichannel sequences, Lemwarm, People Database, enrichment, LinkedIn automation, WhatsApp, API |
| `/sales-smartlead` | Smartlead — campaigns, SmartSenders, SmartInfra, SmartAgents, SmartDialer, API, agency/white-label |
| `/sales-yesware` | Yesware — email tracking, campaigns, templates, Prospector, Meeting Scheduler, Salesforce integration |
| `/sales-mixmax` | Mixmax — sequences, email tracking, one-click meetings, rules engine, dialer, AI Compose |
| `/sales-reply` | Reply.io — multichannel sequences, Jason AI SDR, B2B database, email warmup, unified inbox |
| `/sales-woodpecker` | Woodpecker — cold email campaigns, condition-based sequences, email warmup, Bounce Shield, LinkedIn automation |
| `/sales-snov` | Snov.io — AI-powered sales automation, email finder, multichannel campaigns, LinkedIn automation, Sales CRM |
| `/sales-aisdr` | AiSDR — AI-powered SDR, autonomous cold email + LinkedIn outreach, 700M+ contacts, email warmup, HubSpot integration |
| `/sales-qualified` | Qualified — Piper AI SDR Agent, agentic marketing, real-time website chat, Signals buyer intent, Salesforce-native routing |
| `/sales-nooks` | Nooks — AI-native parallel dialer workspace, multi-channel sequencing, AI coaching (scorecards, roleplay, battlecards, virtual salesfloor), waterfall enrichment (9 providers), ~$5K/user/yr |
| `/sales-outreach-io` | Outreach — sales engagement sequences, Kaia conversation intelligence, deal management, forecasting, coaching, REST API, Salesforce/HubSpot sync, ~$100-160/user/mo |
| `/sales-amplemarket` | Amplemarket — AI-native all-in-one (Duo AI copilot, 300M+ contacts, multichannel sequences, intent signals, deliverability suite), REST API, Salesforce/HubSpot sync, Starter $600/mo |
| `/sales-orum` | Orum — AI parallel dialer (up to 10 lines), AI Coaching Suite (scorecards, roleplay, coaching portals), virtual salesfloor, spam detection/number rotation, Salesforce/HubSpot/Outreach/Salesloft/Gong/Apollo integrations, Launch $250/user/mo / Ascend $400-500+/user/mo |
| `/sales-trellus` | Trellus — AI parallel dialer (up to 5 lines) with real-time coaching, Chrome extension embedded in Salesloft/Outreach/HubSpot/Apollo/Salesforce, voice agents for practice roleplay, virtual salesfloor, Superhuman for LinkedIn, number health/spam remediation, Free/$34.99/mo/custom, SOC 2 Type II, YC W22 |
| `/sales-sendr` | Sendr — AI-powered personalized outreach with lipsync video, dynamic landing pages, Lead Finder (479M+ contacts), Data Studio enrichment, campaign sequencing, API/webhooks, $97-249/mo |

</details>

<details>
<summary><strong>Email Finder & Verification</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-mailmo` | Mailmo — Email Finder, Email Verifier, catch-all detection, LinkedIn Chrome extension, bulk verification |
| `/sales-hunter` | Hunter.io — Domain Search, Email Finder, Email Verifier, Campaigns, Signals, TechLookup, MCP server, API |
| `/sales-prospeo` | Prospeo — person/company enrichment, LinkedIn Sales Navigator extraction, 5-step email verification, API |
| `/sales-tomba` | Tomba.io — domain search, email finder, email verifier, enrichment, author/LinkedIn/phone finder, API |
| `/sales-getprospect` | GetProspect — B2B email finder (200M+ contacts), LinkedIn extension, enrichment, cold email software, CRM |
| `/sales-skrapp` | Skrapp — B2B email finder (200M+ contacts), data enrichment, AI Fields, email verifier, LinkedIn extension |
| `/sales-anymailfinder` | Anymail Finder — email finder with 97%+ delivery guarantee, bulk search, GeoLead Finder, Chrome extension |
| `/sales-zerobounce` | ZeroBounce — email validation (99.6% accuracy), AI email scoring, inbox placement testing, blacklist monitoring |
| `/sales-minelead` | Minelead — B2B email finder (500M+ emails), lead finder, email verifier, disposable detector, campaigns, CRM |
| `/sales-safetymails` | SafetyMails — bulk email verification (19-step algorithm), real-time API, spamtrap/disposable detection |
| `/sales-openwebninja` | OpenWeb Ninja — 30+ real-time public data APIs, website contacts scraper, email search, local business data |
| `/sales-enrichso` | Enrich.so — LinkedIn enrichment, reverse email lookup, email/phone finder, company data, bulk enrichment |

</details>

<details>
<summary><strong>Data, Intelligence & Enrichment</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-seamless` | Seamless.AI — Prospector, Buyer Intent, Job Changes, CRM Enrich, Pitch Intelligence, AI Agents, API |
| `/sales-clearbit` | Clearbit (HubSpot) — Person/Company Enrichment, Reveal (IP-to-company), Prospector, Breeze Intelligence, API |
| `/sales-rb2b` | RB2B — Person-Level Website Visitor ID (US), Company-Level ID (global), Hot Pages, Identity Resolution API |
| `/sales-retention` | Retention.com — ecommerce identity resolution, anonymous visitor → email/SMS, abandonment recovery |
| `/sales-customersai` | Customers.ai — X-Ray identity resolution for Shopify + Klaviyo, Alfred AI intent scoring, Inboxer deliverability, ad retargeting recovery |
| `/sales-6sense` | 6sense — Signalverse Intent Data (1T+ signals), Predictive Analytics, Sales Intelligence, AI Email Agents |
| `/sales-clay` | Clay — Waterfall Enrichment (150+ providers), Claygent AI agents, Sculptor, Signals, CRM Sync |
| `/sales-leadmagic` | LeadMagic — Email Finder, Mobile Finder, Company Search, Job Change Detector, MCP Server, CLI |
| `/sales-outscraper` | Outscraper — Google Maps/Reviews scraping, email/contact extraction, multi-platform review scraping, API |
| `/sales-lobstr` | Lobstr.io — 50+ no-code scrapers (Google Maps, LinkedIn, Twitter, YouTube), MCP Server, Python SDK |
| `/sales-cognism` | Cognism — Diamond Data phone-verified mobiles, Bombora intent signals, CRM enrichment, Sales Companion AI, GDPR/DNC compliance, API (Search, Redeem) |
| `/sales-leadiq` | LeadIQ — Chrome extension LinkedIn prospecting, Scribe AI outreach, champion tracking (job change alerts), CRM enrichment (Salesforce native + HubSpot/Workato), GraphQL API |
| `/sales-zoominfo` | ZoomInfo — SalesOS, MarketingOS, OperationsOS, Copilot AI, API (search, enrich, lookup, bulk, webhooks) |

</details>

<details>
<summary><strong>CRM & Marketing Automation</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-crm-selection` | CRM comparison and selection — Attio vs HubSpot vs Salesforce vs Folk vs Pipedrive vs Close vs Zoho vs spreadsheets |
| `/sales-hubspot` | HubSpot — Smart CRM, Marketing/Sales/Service/Content/Data Hubs, Breeze AI, workflows, sequences, 2,000+ integrations, API |
| `/sales-salesforce` | Salesforce — Sales/Service/Marketing/Commerce Cloud, Data Cloud, Agentforce AI, Flows, Apex, AppExchange, REST API |
| `/sales-attio` | Attio — AI-native CRM with custom objects, deal pipelines, email sequences, automations, AI agents, API |
| `/sales-tableau` | Tableau — visual analytics, dashboards, Tableau Cloud/Server/Desktop, Prep, Pulse AI, Embedding API, REST API v3.28, MCP server |
| `/sales-mulesoft` | MuleSoft — Anypoint Platform, API-led connectivity, DataWeave, CloudHub, 450+ connectors, Composer, RPA, API Manager, Flex Gateway |
| `/sales-boomi` | Boomi — enterprise iPaaS, 1000+ connectors, API Management, Data Hub MDM, Flow low-code, Event Streams, B2B/EDI, AgentStudio AI agents |
| `/sales-workato` | Workato — enterprise iPaaS, 1200+ connectors, recipe automation, API Management, MCP Gateway, Agent Studio (Genies), Data Tables, Event Streams, Embedded iPaaS |
| `/sales-celigo` | Celigo — mid-market iPaaS, 1000+ connectors, AI error management, endpoint+flow pricing, NetSuite depth, API Management, B2B/EDI, Embedded iPaaS, Celigo Ora AI |
| `/sales-snaplogic` | SnapLogic — enterprise iPaaS, 1000+ Snap connectors, AgentCreator AI agents, SnapGPT pipeline copilot, API Management 3.0, ETL/ELT, Ultra Pipelines |
| `/sales-jitterbit` | Jitterbit — AI-infused Harmony iPaaS, 400+ connectors, Integration Studio + Design Studio, API Manager, App Builder, EDI/B2B, cloud/private/hybrid agents |
| `/sales-tray` | Tray.ai — enterprise iPaaS, 700+ connectors, Intelligent iPaaS, Merlin Agent Builder (OpenAI/Claude/Gemini/Llama, MCP), Tray Embedded (white-label for SaaS), Enterprise Core governance, GraphQL API, Connector Development Kit |
| `/sales-informatica` | Informatica IDMC — enterprise iPaaS + data management, Cloud Data Integration (CDI), Cloud Application Integration (CAI), API Center, Data Catalog, Data Quality, MDM, B2B Gateway, CLAIRE AI, IPU consumption pricing, REST API v2/v3 |
| `/sales-tibco` | TIBCO Cloud Integration — enterprise iPaaS with four pillars: Connect (TIBCO Scribe no-code), Develop (TIBCO Flogo event-driven), Integrate (TIBCO BusinessWorks hybrid), Automate (Cloud Live Apps citizen developer), plus TIBCO Cloud API Management, app-instance subscription tiers, regional APIs (AWS US/EU/AU, Azure US) |
| `/sales-activecampaign` | ActiveCampaign — marketing automation (900+ recipes), email marketing, CRM, multi-channel, 900+ integrations |
| `/sales-mailchimp` | Mailchimp — email campaigns, Customer Journey Builder, SMS, audience management, Mandrill, 300+ integrations |
| `/sales-closum` | Closum — omnichannel marketing automation: email, SMS, WhatsApp, Telegram, Web Push, AI assistant |
| `/sales-ghost` | Ghost — open-source publishing, native newsletters, paid memberships via Stripe, Content API, Admin API, themes, migration |
| `/sales-beehiiv` | Beehiiv — newsletter publishing, Boosts, Ad Network, referral programs, paid subscriptions, digital products, API |
| `/sales-buttondown` | Buttondown — simple newsletter publishing, paid subscriptions via Stripe, Markdown editor, automations, REST API, CLI, custom domains |
| `/sales-mailerlite` | MailerLite — email campaigns, automation, landing pages, signup forms, e-commerce, digital products, paid newsletters, API |
| `/sales-unbounce` | Unbounce — landing page builder, Smart Traffic AI, Smart Copy AI, A/B testing, DTR, popups, sticky bars, AMP pages, REST API |
| `/sales-leadpages` | Leadpages — landing page builder, pop-ups, alert bars, A/B testing, Leadmeter, lead enrichment, Stripe payments |
| `/sales-groove` | Groove.cm — GroovePages, GrooveFunnels, GrooveSell, GrooveMail, GrooveAffiliate, GrooveMember, GrooveWebinar |
| `/sales-brevo` | Brevo — email/SMS/WhatsApp campaigns, marketing automation, Sales CRM, Conversations, Loyalty, Aura AI |
| `/sales-iterable` | Iterable — cross-channel engagement, Studio journeys, Iterable AI, Smart Ingest, Snowflake sharing, API |
| `/sales-getresponse` | GetResponse — email marketing, visual automation, conversion funnels, landing pages, webinars, course creator |
| `/sales-braze` | Braze — Canvas Flow, multi-channel messaging, BrazeAI, Braze Data Platform, Catalogs, Feature Flags, API |
| `/sales-customerio` | Customer.io — Journeys, multi-channel (email, SMS, push, in-app, WhatsApp), Data Pipelines, Custom Objects |
| `/sales-klaviyo` | Klaviyo — AI-first B2C CRM for e-commerce, Flows, Predictive Analytics, multi-channel, CDP, AI Agents |
| `/sales-omnisend` | Omnisend — email campaigns, SMS, web push, automation workflows, Shopify/WooCommerce/BigCommerce |
| `/sales-sendpulse` | SendPulse — email marketing, Automation 360, chatbots, CRM, course builder, web push, SMS, MCP Server |
| `/sales-kit` | Kit (ConvertKit) — Visual Automations, Sequences, Broadcasts, landing pages, Commerce, API |
| `/sales-swai` | SWAI.ai — Autonomous Revenue OS, AI-driven campaigns, landing page builder, CRM, AI assistants |
| `/sales-adroll` | AdRoll — retargeting, display/social/CTV campaigns, dynamic retargeting, RollWorks ABM, attribution |
| `/sales-remerge` | Remerge — in-app retargeting DSP, audience segmentation, incrementality measurement, MMP integrations, Reporting API |
| `/sales-adwake` | Adwake — managed mobile app UA, branding, in-app retargeting, Playback Rewards loyalty, Entravision |
| `/sales-zoomd` | Zoomd — mobile UA across 600+ sources, mobile DSP, CGC creator content, Albert.ai AI optimization |
| `/sales-reddit-ads` | Reddit Ads — subreddit targeting, 12 ad formats, Reddit Pixel, CAPI, Lead Gen Ads, Business Manager |
| `/sales-jotform` | Jotform — form builder, payment forms, e-signatures, approval workflows, tables, PDF editor, app builder, REST API, MCP server |
| `/sales-typeform` | Typeform — conversational forms, surveys, quizzes, video forms, Workflow Builder, Embed SDK, Create/Responses/Webhooks API |
| `/sales-blueconic` | BlueConic — Customer Data Platform (CDP), profile unification, segmentation, audience activation, Jebbit Experiences, MCP server, REST API v2 |
| `/sales-treasuredata` | Treasure Data — enterprise AI-native CDP, profile unification, identity resolution, 400+ connectors, AI Marketing Cloud, Audience Studio, TD API |
| `/sales-tealium` | Tealium — enterprise CDP, Real-Time/Composable/Hybrid CDP, iQ Tag Management, EventStream, AudienceStream, 1300+ connectors, V3 API |
| `/sales-contentstack` | Contentstack — enterprise headless CMS, Content Management/Delivery APIs, GraphQL, Launch hosting, Automate workflows, Personalize, Brand Kit AI, Marketplace |
| `/sales-rudderstack` | RudderStack — warehouse-native CDP, Event Streams, Reverse ETL, Transformations, Profiles, 200+ destinations, open-source, HTTP API |
| `/sales-mparticle` | mParticle — hybrid CDP, real-time event streaming, identity resolution (IDSync), audience activation, 300+ integrations, Composable Audiences, AI/Cortex, Data Plans, 7 APIs |
| `/sales-cdp` | CDP comparison and selection strategy — Tealium, BlueConic, Segment, Treasure Data, mParticle, composable vs bundled |

</details>

<details>
<summary><strong>Transactional Email</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-sendgrid` | SendGrid (Twilio) — Email API, Marketing Campaigns, transactional email, dynamic templates, 7 SDKs |
| `/sales-postmark` | Postmark (ActiveCampaign) — transactional email API, SMTP relay, Message Streams, DMARC Monitoring |
| `/sales-mailgun` | Mailgun (Sinch) — transactional email API, SMTP relay, inbound routing, Mailgun Optimize, dedicated IPs |

</details>

<details>
<summary><strong>CRO & Experimentation</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-vwo` | VWO — A/B testing, multivariate tests, heatmaps, session recordings, personalization, feature flags, SDKs, REST API |

</details>

<details>
<summary><strong>Sales Enablement Platforms</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-seismic` | Seismic — Enablement Cloud, content management, Learning & Coaching, Aura AI, Digital Sales Rooms |
| `/sales-allego` | Allego — AI-powered revenue enablement, Modern Learning, Modern Content, Digital Sales Rooms |
| `/sales-altern` | Altern — curated AI tools directory (10,000+ tools, 100+ categories), listing optimization, dofollow backlinks |

</details>

<details>
<summary><strong>Media Intelligence & PR</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-meltwater` | Meltwater — media intelligence, social listening, media relations, influencer marketing, Mira AI, API |
| `/sales-brandwatch` | Brandwatch — Consumer Intelligence (100M+ sources), Social Media Management, Influence, 6 REST APIs |
| `/sales-brandjet` | BrandJet AI — multi-channel outreach, brand monitoring, AI visibility monitoring, Artemis MCP, unified inbox |
| `/sales-later` | Later — social media scheduling, visual planner, Linkin.bio, analytics, Later Influence (influencer campaigns, Reporting API) |
| `/sales-sproutsocial` | Sprout Social — Publishing, Smart Inbox, Analytics, Social Listening, Influencer Marketing, Employee Advocacy, API |
| `/sales-social-media-management` | Social media management strategy — publishing, scheduling, engagement, analytics, tool comparison |
| `/sales-employee-advocacy` | Employee advocacy strategy — content curation, gamification, compliance, tool comparison |
| `/sales-social-listening` | Social listening strategy — brand monitoring, sentiment analysis, competitive intelligence, crisis detection |
| `/sales-ai-visibility` | AI visibility monitoring — track brand mentions in ChatGPT, Claude, Perplexity, Gemini, AI Overviews |
| `/sales-media-relations` | Media relations strategy — journalist databases, PR pitching, press outreach, coverage tracking |

</details>

<details>
<summary><strong>Influencer Marketing</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-infludata` | influData — creator discovery (20M+ profiles), audience analysis, campaign management, social listening |
| `/sales-creatorco` | Creator.co — AI-powered influencer marketing, London AI agent (400M+ profiles), UGC, affiliate tracking |
| `/sales-modash` | Modash — influencer marketing for Shopify, creator discovery (350M+ profiles), audience analysis, API |
| `/sales-influencity` | Influencity — all-in-one influencer marketing, Discover (200M+ profiles), IRM, Campaigns, Social Hub |
| `/sales-hypefy` | Hypefy — AI-native influencer marketing, zero-subscription/pay-per-campaign, content review, payments |
| `/sales-ltk` | LTK — creator commerce, Brand Platform, LTK Connect, LTK Ads, LTK Boost, LTK AI |
| `/sales-tagshop` | Tagshop.ai — AI UGC video ad generator (1000+ avatars), shoppable UGC galleries |
| `/sales-skeepers` | Skeepers — UGC suite (Verified Reviews, Influencer Marketing, Feedback Management, Brand Communities) |
| `/sales-heepsy` | Heepsy — influencer discovery (11M+ profiles), analytics, campaign marketplace, CRM, Shopify integration |
| `/sales-creatoriq` | CreatorIQ — enterprise influencer OS, Creator Graph (~20M profiles), SafeIQ, BenchmarkIQ, ExchangeIQ API |
| `/sales-afluencer` | Afluencer — micro-influencer marketplace, Collab listings, Shopify/BigCommerce gifting, invitation credits |
| `/sales-collabstr` | Collabstr — influencer and UGC creator marketplace, vetted creators, escrow payments, campaign posting |
| `/sales-cloutboost` | Cloutboost — gaming influencer marketing platform (1.5M+ creators), Portal discovery, campaign management, retargeting, PR |
| `/sales-houseofmarketers` | House of Marketers — TikTok-focused agency (50K+ creators), influencer campaigns, paid ads, content creation, strategy |
| `/sales-neoreach` | NeoReach — enterprise influencer marketing (3M+ creators), AI discovery, fraud detection, IMV analytics, REST API, managed services |
| `/sales-famesters` | Famesters — full-cycle influencer agency (gaming, fintech, iGaming, apps), 1000+ brands, BuzzGuru analytics |
| `/sales-inbeat` | inBeat — creative growth agency (influencer, UGC, paid media, performance creative), free marketing toolkit (calculators, ad mockups) |
| `/sales-hypeauditor` | HypeAuditor — AI-powered influencer analytics (223.6M+ profiles), fraud detection (53 patterns, 95%+ accuracy), Discovery, Campaign Management, Market Analysis, API |
| `/sales-aspire` | Aspire (formerly AspireIQ) — word-of-mouth commerce for influencer marketing, product seeding (Shopify), affiliate tracking, UGC sourcing, paid social (TikTok Spark Ads, Meta), 170M+ profiles |
| `/sales-influencer-hero` | Influencer Hero — all-in-one influencer marketing (200M+ profiles), AI-personalized outreach (email + DMs), CRM, affiliate tracking (code leakage prevention), product gifting, UGC capture, API |
| `/sales-instajet` | InstaJet.io — Instagram Stories influencer marketplace (10K+ vetted creators, 50+ countries), escrow payments, managed service |
| `/sales-openinfluence` | Open Influence — AI-powered influencer agency + SaaS (image recognition search, 20M+ keywords, Mood Board, paid media amplification, Studio OI, 50+ countries) |
| `/sales-viralnation` | Viral Nation — enterprise influencer agency + SaaS (CreatorOS campaign management, Secure AI brand safety, talent representation, 35+ verticals) |
| `/sales-upfluence` | Upfluence — influencer and affiliate marketing for ecommerce (12M+ profiles), Live Capture (find influential customers), Jaice AI, commission-free affiliate tracking, Shopify/WooCommerce/BigCommerce, creator payments |
| `/sales-grin` | GRIN platform help — creator management, discovery, gifting, affiliate hub, social listening, Gia AI |
| `/sales-trendhero` | trendHERO — Instagram influencer analytics (95M+ profiles), Account Quality Score (AQS) fake follower detection, Ads Database (10M+ posts), audience overlap, REST API |
| `/sales-plutoba` | PlutoBa — AI influencer vetting (TikTok, Instagram, YouTube), 7-dimension PlutoBa Score, fake follower detection, brand safety, rate benchmarks, AI outreach |
| `/sales-tiktok-marketing` | TikTok marketing strategy — organic growth, paid ads, content creation, influencer strategy, algorithm, metrics |
| `/sales-gaming-marketing` | Gaming influencer marketing strategy — streamer partnerships, game launch campaigns, budget allocation, ROI |
| `/sales-influencer-marketing` | Influencer marketing strategy — platform comparison, creator discovery, vetting, campaign tracking |

</details>

<details>
<summary><strong>Gaming Marketing</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-cloutboost` | Cloutboost — gaming influencer marketing platform (1.5M+ creators), Portal discovery, campaign management, retargeting, PR |
| `/sales-famesters` | Famesters — full-cycle influencer agency (gaming, fintech, iGaming, apps), 1000+ brands, BuzzGuru analytics |
| `/sales-gaming-marketing` | Gaming influencer marketing strategy — streamer partnerships, game launch campaigns, budget allocation, ROI |

</details>

<details>
<summary><strong>Customer Experience & Feedback</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-qualtrics` | Qualtrics XM — CX/EX surveys, Strategy & Research, Experience Agents AI, dashboards, XM Directory, REST API v3, MCP servers |
| `/sales-medallia` | Medallia — Experience Cloud, NPS/CSAT/CES surveys, DXA, contact center intelligence, employee listening, REST + GraphQL APIs |
| `/sales-surveymonkey` | SurveyMonkey — survey creation, skip logic, email/SMS/web collectors, analytics, cross-tabulation, Audience panel, REST API v3 |
| `/sales-gainsight` | Gainsight — CS health scores, CTAs, playbooks, success plans, Journey Orchestrator, PX in-app engagement, Staircase AI, Skilljar, REST API |
| `/sales-vitally` | Vitally — AI-powered CS platform, Health Scores, Playbooks, Projects, Automation, AI copilot, NPS, REST API |
| `/sales-planhat` | Planhat — Agentic Customer Platform, Health Scores, Revenue Management, CRM Sync, Automation, MCP Server, REST API |
| `/sales-churnzero` | ChurnZero — Health Scores, Plays & Automation, Journeys, Renewal Hub, In-App WalkThroughs, Surveys, AI Agents, OData v4 API |
| `/sales-totango` | Totango — SuccessBLOCs, SuccessPlays, Health Scores, Customer 360, Customer Data Hub, Unison AI, Catalyst, REST API |
| `/sales-customer-success` | Customer success strategy — health scores, churn prevention, onboarding, expansion, CS platform comparison |
| `/sales-customer-feedback` | Customer feedback, NPS, CSAT, VoC strategy — survey design, response rates, closed-loop feedback, tool comparison |

</details>

<details>
<summary><strong>Customer Reviews & UGC</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-g2` | G2 — B2B software review marketplace, review campaigns, Buyer Intent data, badges/reports, profile optimization, API |
| `/sales-trustpilot` | Trustpilot — TrustBox widgets, TrustScore, review invitations, Google Seller Ratings, ecommerce plugins, API |
| `/sales-birdeye` | Birdeye — reviews, listings, social, messaging, surveys, referrals, payments, BirdAI for multi-location |
| `/sales-online-reputation` | Online reputation management strategy — review generation, response, listings, Google Business Profile, crisis response |
| `/sales-customer-reviews` | Product review collection, display, moderation, syndication — Judge.me, Loox, Okendo, Yotpo, Bazaarvoice |

</details>

<details>
<summary><strong>Launch Directories</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-producthunt` | Product Hunt — largest launch platform (DR91 dofollow, 5M+ visits/mo), Pro/Super Pro, GraphQL API |
| `/sales-betalist` | BetaList — pre-launch directory (DR67 dofollow, 30K+ newsletter), free or $129 Priority |
| `/sales-indiehackers` | Indie Hackers — largest founder community (165K+ entrepreneurs), DR75 nofollow |
| `/sales-peerlist` | Peerlist — professional network, weekly Launchpad, portfolio profiles, DR76 nofollow |
| `/sales-fazier` | Fazier — product discovery (DR81 dofollow), free/$19 Lite/$39 Premium/$99 Super |
| `/sales-uneed` | Uneed — social launchpad (DR74 dofollow), skip-the-line $29.99, Pro $89/yr |
| `/sales-tinylaunch` | TinyLaunch — weekly launches (DR60-71 dofollow for Top 3), $39 premium launch |
| `/sales-devhunt` | DevHunt — developer tool launches (DR57-62 dofollow), $49 featured |
| `/sales-openlaunch` | Open Launch — open-source PH alternative (DR65 dofollow), $12 Premium, $59 SEO Growth |
| `/sales-microlaunch` | MicroLaunch — month-long launch cycles, DR59+ dofollow, Pro Launch $39/mo |
| `/sales-tinystartups` | Tiny Startups — curated directory (DR50 dofollow), 17,500+ newsletter subscribers |
| `/sales-superlaunch` | Super Launch — 7 days on front page, DR59 paid dofollow, $49/mo advertising |
| `/sales-sideprojectors` | SideProjectors — project marketplace (DR69 dofollow), 24,600+ listings |
| `/sales-acquire` | Acquire.com — curated SaaS marketplace (formerly MicroAcquire), 500K+ verified buyers, $500M+ closed deals, NDA-gated listings, Escrow.com integration |
| `/sales-flippa` | Flippa — largest open marketplace since 2009 (SaaS, ecom, content, apps, domains), 39,805+ sold, tiered listing packages $29-$699, 3-10% success fees, auto-verification above $50K |
| `/sales-trustmrr` | TrustMRR — verified-revenue startup marketplace by Marc Lou, live Stripe/LemonSqueezy/Polar/Paddle/RevenueCat/Superwall/Creem/DodoPayment API verification (hourly), APA-only single-lump-sum deals via Escrow.com, Starter $29 / Growth $199 / Scale $499 boost tiers, 3% marketplace fee + escrow, public REST API |
| `/sales-ecomswap` | Ecomswap — boutique sell-side M&A advisory for profitable Shopify/FBA/DTC/SaaS/newsletter/content exits, $200K net-profit floor, SDE-based profit multiples, 50K+ pre-qualified buyer network with $2B+ capital, curated private listings, advertised 93% close rate / <2 month time-to-exit |
| `/sales-startupage` | StartuPage — founder-ecosystem platform (founded 2024), Stripe/LemonSqueezy/Polar/RevenueCat/Dodo-verified MRR leaderboard (Top Startups / Top Founders), founder + startup sub-page profiles, 4-track Opportunities marketplace (hiring / fundraising / co-founder / acquisitions), Free / Starter $5/mo / Growth $9/mo / Lifetime $179 |
| `/sales-arrfounder` | Arrfounder — social-proof founder-revenue directory (founded 2024 by @Folyd), 1000+ founders and 1500+ products auto-extracted from Twitter/X bios via AI, sortable leaderboards (ARR / followers / products / recently added), free Airtable submission with 24-48h manual approval, not a marketplace, no payment-provider API verification — complements TrustMRR / StartuPage |
| `/sales-side-project-valuation` | Side project valuation & sale strategy — pricing, revenue multiples, deal structuring, marketplace selection (Acquire.com, Flippa, TrustMRR, Ecomswap, StartuPage, 1Kprojects, Microns, Empire Flippers) |
| `/sales-launchingnext` | LaunchingNext — curated directory (DR51 dofollow, 45K+ startups), $149 Express |
| `/sales-pitchwall` | PitchWall — AI product directory (DR60, 65K+ products), free/$99 Premium |
| `/sales-futurepedia` | Futurepedia — largest AI tools directory (5,700+ tools, ~2M visits/mo), $247/$497 |
| `/sales-theresanaiforthat` | TAAFT — #1 AI tools directory (42,000+ tools, 3-4M visits/mo, DR76 dofollow), $347 listing, $300 first-launch PPC bonus |
| `/sales-topai` | TopAI.tools — curated AI tools directory (2,700+ tools, ~1-1.9M visits/mo), $39 Fast Track, $229 Boosted |
| `/sales-startupstash` | Startup Stash — curated tool directory (10K+ tools, DR65 nofollow) |
| `/sales-productburst` | ProductBurst — daily/weekly rankings (DR46 dofollow), no gatekeepers |
| `/sales-solopush` | SoloPush — indie maker launches (DR46-47 dofollow), free instant listing |
| `/sales-ctrlaltcc` | CtrlAlt.cc — startup tool directory (DA30 dofollow), $39 paid launch |
| `/sales-huzzler` | Huzzler — weekly launch competition, dofollow for winners only, Huzzler Black $79 |
| `/sales-firsto` | Firsto — fair launch platform (DR57+ dofollow), $19.90 Premium, $59.90 Pro |
| `/sales-openhunts` | OpenHunts — weekly Monday launches (DR50 dofollow), $9.90 Premium |
| `/sales-awesomeindie` | Awesome Indie — curated directory, free only, editorial review |
| `/sales-launchday` | LaunchDay — curated 24-hour events ($99), podcast interview, influencer promotion |
| `/sales-justgotfound` | JustGotFound — community-curated (DR23 dofollow), paid promotion $50-$500 |
| `/sales-launchcaster` | LaunchCaster — Web3 project discovery on Farcaster, wallet-connected voting |
| `/sales-saashunt` | SaaSHunt — AI-powered SaaS directory (DR49 dofollow), template-based submission |
| `/sales-resourcefyi` | Resource.fyi — curated tools directory (2,519+ resources), free submission |
| `/sales-launchvibe` | LaunchVibe — instant free submission (DR10 dofollow), XP gamification |
| `/sales-startupbase` | StartupBase — community-driven directory (DR39 dofollow), Spark newsletter |
| `/sales-getmorebacklinks` | GetMoreBacklinks — managed directory submission service ($87-$247), 50-200 directories, DR 30+ guarantee |
| `/sales-launch-directory` | Launch directory strategy — coordinates submissions across 22+ platforms, sequencing, backlink stacking |

</details>

<details>
<summary><strong>SEO & Visibility</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-semrush` | Semrush — leading SEO platform (27B keywords, 43T backlinks), AI Visibility Toolkit, MCP server, API |
| `/sales-yoast` | Yoast SEO — WordPress/Shopify SEO plugin (13M+ installs), content analysis, readability, schema, REST API, AI meta, llms.txt |

</details>

<details>
<summary><strong>Loyalty</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-loyaltylion` | LoyaltyLion — points, tiers, rewards, referrals, AI recommendations, Klaviyo Events, Shopify POS, API |

</details>

<details>
<summary><strong>Funnels, Email Marketing & Digital Sales</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-funnel` | Build and optimize sales funnels — strategy, structure, conversion, A/B testing |
| `/sales-email-marketing` | Opt-in email marketing — broadcasts, nurture sequences, automation, segmentation |
| `/sales-newsletter` | Newsletter monetization — paid subscriptions, sponsorships, ad sales, premium tiers |
| `/sales-paved` | Paved — newsletter sponsorship marketplace, Ad Network, Booker direct-deal management, Radar lead enrichment |
| `/sales-sparkloop` | SparkLoop — newsletter referral programs, paid recommendations, partner programs, cross-promotion, Upscribe widget, API |
| `/sales-audience-growth` | Grow an email list or newsletter audience — lead magnets, cross-promotion, referral programs |
| `/sales-digital-products` | Sell digital products — ebooks, templates, courses, downloads, pricing strategy |
| `/sales-affiliate-program` | Design and manage affiliate programs — commissions, recruitment, tracking, payouts |
| `/sales-performcb` | Perform[cb] — #1 CPA network, Outcome Engine AI optimization, PerformSHIELD fraud detection, Partner API |
| `/sales-fansrevenue` | FansRevenue — creator monetization through affiliate brand promotion, MyEroLink, Creator Academy, CrakRevenue network |
| `/sales-webinar` | Webinar-based selling — live and evergreen strategy, presentation, follow-up |
| `/sales-podia` | Podia — courses, downloads, memberships, coaching, webinars, email, communities, affiliates |
| `/sales-payhip` | Payhip — digital downloads, courses, memberships, coaching, store builder, affiliates, API |
| `/sales-gumroad` | Gumroad — digital products, subscriptions, license keys, Discover marketplace, email broadcasts, affiliates, API |
| `/sales-lemonsqueezy` | Lemon Squeezy — payments, subscriptions, tax compliance (MoR), license keys, checkout, email, affiliates, API |
| `/sales-membership` | Membership sites and online courses — structure, pricing, retention |
| `/sales-checkout` | Checkout optimization — upsells, order bumps, payment plans, cart abandonment |
| `/sales-meeting-scheduler` | Schedule sales meetings — booking pages, round-robin, Calendly/Chili Piper |
| `/sales-email-tracking` | Email engagement tracking — open/click/attachment tracking, follow-up timing |
| `/sales-transactional-email` | Transactional/triggered email — provider selection, API/SMTP, templates, deliverability |
| `/sales-live-chat` | Live chat and chatbot for sales — widget setup, chatbot flows, agent routing |
| `/sales-loyalty` | Customer loyalty programs — points, tiers, rewards, VIP programs, member engagement |
| `/sales-sms-marketing` | SMS marketing — opt-in collection, compliance (TCPA/GDPR), automation, two-way messaging |
| `/sales-data-hygiene` | CRM data quality — deduplication, record matching, data decay, enrichment automation |
| `/sales-b2b-advertising` | Account-based B2B advertising — display ads, retargeting, ABM, ad-to-pipeline attribution |
| `/sales-retargeting` | Retargeting — visitor retargeting, cart abandonment, dynamic ads, cross-channel |
| `/sales-push-notification` | Push notifications — opt-in optimization, rich push, segmentation, timing, deep linking |
| `/sales-pendo` | Pendo — product analytics, in-app guides, session replay, NPS/CSAT surveys, feature adoption, API |
| `/sales-chameleon` | Chameleon — AI product adoption platform, product tours, tooltips, microsurveys, launchers, HelpBar, A/B testing, Copilot AI, Ranger AI, REST API |
| `/sales-whatfix` | Whatfix — enterprise Digital Adoption Platform (DAP), in-app Flows, Smart Tips, Product Analytics, Mirror sandbox, Integration Hub |
| `/sales-in-app-messaging` | In-app messages — onboarding, feature announcements, surveys, promotions, triggers, digital adoption |
| `/sales-chatbot` | Chatbot marketing — chatbot flows, multichannel messaging, lead qualification, human handoff |

</details>

<details>
<summary><strong>Prospecting, Enrichment & Signals</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-prospect-list` | Build targeted B2B prospect lists with ICP definition, filters, and segmentation |
| `/sales-enrich` | Enrich contacts with emails/phones, CRM data hygiene, dedup, bulk enrichment |
| `/sales-intent` | Interpret buying signals, intent data, job changes, lead scoring, account prioritization |
| `/sales-compete` | Run competitive displacement campaigns — find competitor customers ready to switch |
| `/sales-account-map` | Map the buying committee at a target account with multi-threading strategy |
| `/sales-lead-score` | Design, weight, and tune a lead scoring model with MQL/SQL thresholds |

</details>

<details>
<summary><strong>Cross-Platform & Strategy</strong></summary>

| Skill | What it does |
|---|---|
| `/sales-deliverability` | Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement, blacklists, sender reputation |
| `/sales-agency-outbound` | Multi-client outbound for agencies — infrastructure, client isolation, white-labeling |
| `/sales-lead-routing` | Design lead routing and assignment rules — round-robin, territory, score-based |
| `/sales-integration` | Connect sales tools with webhooks, Zapier/Make, native integrations, and CRM sync |
| `/sales-positioning` | Messaging, value props, competitive differentiation |
| `/sales-content` | Organize, distribute, and measure sales collateral — battle cards, one-pagers, case studies |
| `/sales-coaching` | Sales coaching and training — onboarding, role-play, coaching frameworks, certifications |
| `/sales-solidroad` | Solidroad — AI QA + training closed-loop, 100% automated scoring, AI practice simulations from quality gaps, $10-50/user/mo |
| `/sales-secondbody` | SecondBody — voice-first AI roleplay, Rory AI coach, methodology scoring (SPIN/MEDDIC/Sandler), team heatmaps, gamification, unlimited seats $30/user/mo Pro |

</details>

<details>
<summary><strong>Marketing & GTM</strong> (33 skills from <code>coreyhaines31/marketingskills</code>)</summary>

> Install all: `npx skills add coreyhaines31/marketingskills`
> Install one: `npx skills add coreyhaines31/marketingskills --skill <skill-name>`

**SEO & Content**

| Skill | What it does |
|---|---|
| `/ai-seo` | Optimize content for AI search engines and LLM citations |
| `/content-strategy` | Plan content strategy and identify topics to cover |
| `/copywriting` | Write marketing copy for homepages, landing pages, and sites |
| `/copy-editing` | Edit, review, and improve existing marketing copy |
| `/programmatic-seo` | Generate SEO pages at scale using templates |
| `/schema-markup` | Add and optimize structured data markup |
| `/seo-audit` | Audit and diagnose technical and on-page SEO issues |
| `/site-architecture` | Plan website hierarchy, navigation, and URL structure |
| `/social-content` | Create and schedule social media content |

**Conversion & Growth**

| Skill | What it does |
|---|---|
| `/ab-test-setup` | Plan, design, and implement A/B tests and experiments |
| `/form-cro` | Optimize lead capture and contact forms |
| `/onboarding-cro` | Optimize post-signup activation and time-to-value |
| `/page-cro` | Increase conversions on marketing and landing pages |
| `/paywall-upgrade-cro` | Optimize in-app paywalls and upsell modals |
| `/popup-cro` | Create and optimize popups, modals, and overlays |
| `/signup-flow-cro` | Optimize signup, registration, and trial activation |

**Acquisition & Campaigns**

| Skill | What it does |
|---|---|
| `/ad-creative` | Generate and scale ad headlines, descriptions, and full ads |
| `/cold-email` | Write B2B cold outreach and follow-up sequences |
| `/email-sequence` | Create automated email flows and drip campaigns |
| `/free-tool-strategy` | Plan and build free marketing tools for lead generation |
| `/lead-magnets` | Create and optimize lead magnets for email capture |
| `/paid-ads` | Manage Google, Meta, LinkedIn, and Twitter ad campaigns |

**Strategy & Positioning**

| Skill | What it does |
|---|---|
| `/competitor-alternatives` | Create competitor comparison and alternative pages |
| `/launch-strategy` | Plan product launches and feature announcements |
| `/marketing-ideas` | Generate marketing inspiration and SaaS strategies |
| `/marketing-psychology` | Apply behavioral science and mental models to marketing |
| `/pricing-strategy` | Determine pricing, packaging, and monetization decisions |
| `/product-marketing-context` | Create foundational product marketing documentation |
| `/competitive-landscape` | Analyze competitive dynamics with Porter's Five Forces, Blue Ocean Strategy, and positioning maps |

**Retention & Revenue**

| Skill | What it does |
|---|---|
| `/churn-prevention` | Reduce churn through cancellation flows and save offers |
| `/referral-program` | Build and optimize referral and affiliate programs |
| `/revops` | Manage lead lifecycle and marketing-to-sales handoff |
| `/sales-enablement` | Create pitch decks, one-pagers, and objection handling docs |

**Analytics**

| Skill | What it does |
|---|---|
| `/analytics-tracking` | Set up and audit analytics measurement and event tracking |
| `/marketing-skills-collection` | Generate marketing deliverables across CRO, copywriting, SEO, analytics, and growth |
| `/marketing-automation` | Marketing automation with 23 sub-skills across CRO, copywriting, SEO, analytics, and growth |

</details>

<details>
<summary><strong>Research & Data</strong> (14 skills from <code>resciencelab/opc-skills</code>)</summary>

> Install all: `npx skills add resciencelab/opc-skills`
> Install one: `npx skills add resciencelab/opc-skills --skill <skill-name>`

**Research**

| Skill | What it does |
|---|---|
| `/producthunt` | Search and retrieve Product Hunt posts, topics, and collections |
| `/product-hunt-launch` | Optimize Product Hunt launches with research, gallery strategy, and timing |
| `/reddit` | Search and retrieve Reddit posts, comments, and subreddit info |
| `/requesthunt` | Collect and analyze user feedback from Reddit, X, and GitHub |
| `/apify-lead-generation` | Multi-platform lead scraping from Google Maps, social media, websites, and search engines |
| `/twitter` | Search and retrieve tweets, user profiles, and trends from X |

**Creative & Design**

| Skill | What it does |
|---|---|
| `/banner-creator` | Generate professional banners for GitHub, Twitter, and websites |
| `/logo-creator` | Generate professional logos with AI through iterative design |
| `/nanobanana` | Generate and edit images using AI (Gemini image model) |
| `/baoyu-slide-deck` | Transform content into professional presentation decks with customizable styles |

**SEO & Domains**

| Skill | What it does |
|---|---|
| `/seo-geo` | Optimize for AI search engines (GEO) and traditional search |
| `/backlink-analyzer` | Analyze backlink profiles with toxic link detection and competitor benchmarking |
| `/build-links` | Design link acquisition campaigns with prospect scoring and outreach strategy |
| `/domain-hunter` | Find domain names with availability checks and price comparison |

</details>

## Usage Examples

```
# Route automatically — don't know which skill? Just describe the problem
/sales-do I need to pick a CRM for my 8-person sales team

# Use platform skills directly
/sales-apollo my sequences aren't syncing to Salesforce
/sales-zendesk our SLA timers are counting through weekends

# Use strategy skills for cross-platform guidance
/sales-deliverability my cold emails are landing in spam
/sales-cadence design a 14-day outbound sequence for VP Engineering at fintech
/sales-helpdesk-selection we're on Gmail, 200 tickets/day, need to pick a help desk
```
