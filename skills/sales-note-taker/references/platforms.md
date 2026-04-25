# Sales Note-Taker Platforms — Selection & API Reference

Per-platform detail for selection and backend API integration. Pricing is best-effort as of 2026-04 — verify on vendor site before quoting a customer.

**Platform details are split by buyer segment:**

| File | What's in it | Platforms |
|---|---|---|
| `platforms-smb.md` | Budget-friendly tools under ~$50/user/mo, strong free tiers | Fathom, Fireflies, Otter, MeetGeek, Tactiq, Granola, Wave, Bluedot, Notta, Sonnet, Supernormal, VoiceToNotes, Hedy, Colibri, Jamy, Temi, Char, HappyScribe, Voicenotes, AudioPen, TalkNotes, Letterly, Coconote, HyNote AI, Backtrack, JotMe, Audionotes, Bubbles, Wudpecker, Laxis, KaraX.ai, Dicte |
| `platforms-midmarket.md` | Sales-focused CI with coaching, methodology, CRM enrichment | Avoma, tl;dv, Claap, Grain, Sembly, Read.ai, Fellow, Jamie, Krisp, IRIS Clarity, Cluely, Lindy, Outdoo, Jiminny, Enthu.AI, Demodesk, Salesken, Oliv, Weflow, Scratchpad, Laserfocus, Noota, Dialpad, Winn.ai, Circleback |
| `platforms-enterprise.md` | Enterprise revenue intelligence ($1K+/user/yr) + bolt-on CI | Gong, Modjo, MaxIQ (EchoIQ), Clari Copilot, Verbit, + Salesloft Conversations, Chorus, Seismic, Revenue.io |
| `platforms-field.md` | In-person/field sales coaching and mobile recording | Rilla, Siro, Sales Ask, Speakwise, Omi, Plaud, reason8 |

**Read the file that matches the user's segment.** For comparison questions spanning segments, read multiple files.

## Quick comparison

| Platform | Category | Free tier | Starting paid | API | Webhooks | CRM depth | Best for |
|---|---|---|---|---|---|---|---|
| Fathom | AI note-taker | Yes (unlimited) | $16/mo | REST | Yes | Medium (Business+) | Budget-conscious SMB/indie sales |
| Fireflies.ai | AI note-taker | Yes (limited) | $10-$19/mo | GraphQL | Yes | Medium (Business+) | Mid-market, conversation search |
| Avoma | Meeting lifecycle | No | $19/seat | REST | Yes | Deep | Mid-market sales + CS, methodology |
| Gong | Revenue intelligence | No | ~$1,200-1,600/user/yr | REST | Yes (extensive) | Deep | Enterprise sales + coaching |
| MaxIQ (EchoIQ) | Revenue intelligence | Yes (30d/100hr) | Usage-based | Custom | Yes | Deep (Salesforce/HubSpot) | Unified revenue journey, usage-based pricing |
| Modjo | Revenue intelligence (EU) | No | ~€99/user/mo (~$1,300/yr) | REST | Yes (3 events) | Deep (6 CRMs) | EU teams needing GDPR-compliant CI + deal intelligence |
| Otter.ai | Transcription | Yes | $17-30/mo | REST (Enterprise beta) | Yes (Workspace) | Thin | General meetings, non-sales |
| Fellow | Meeting management | Yes (5 lifetime) | $7-15/user | REST | Yes (Zapier) | Medium (Business+) | Manager 1:1s, leadership meetings |
| Grain | AI meeting recorder | Yes (20 meetings) | $15-39/seat | REST (Business+) | Yes (Zapier) | Medium (Business+) | GTM teams, clip sharing, MCP |
| Sembly | Agentic meeting intelligence | No (trial only) | $17-39/user | Webhook-first | Yes | Medium (10 CRMs) | Professional services, deliverables, task automation |
| Read.ai | Meeting AI | Yes | $15-30/seat | Webhook-first | Yes | Medium | Engagement/sentiment analytics |
| MeetGeek | AI meeting assistant | Yes (3 hrs/mo) | $9.99/mo | REST | Yes | Medium (7 CRMs) | Teams wanting customizable templates, analytics, affordable pricing |
| Jamie | Bot-free AI note-taker | Yes (10 meetings) | €21/mo | REST | Yes (Plus+) | Medium (3 CRMs, Pro+) | Privacy-first EU teams, in-person meetings, bot-free recording |
| Krisp | Voice AI + note-taker | No (7-day trial) | $8/mo | Webhooks | Yes (Advanced+) | Medium (HubSpot Core+, SF Advanced+) | Noisy environments, noise cancellation + AI notes, SDK developers |
| IRIS Clarity | Noise cancellation only | No (14-day trial) | ~$8.25/mo (£6.50) | SDK only | No | Thin (Salesforce only) | Pure noise cancellation for contact centers, SDK for embedding in VoIP apps |
| Colibri | Real-time transcription + Sales Copilot | Yes (5 hrs/mo) | $16/mo | None | None | Thin (Salesforce Scale only) | Real-time live coaching during calls, legal transcription |
| Cluely | Real-time AI coaching overlay | Yes (limited) | $20/mo | None | None | Medium (via Merge.dev, Team+) | Real-time AI prompts during calls, knowledge base RAG, pre-call briefs |
| Jamy.ai | AI meeting assistant + translation | Yes (300 min/mo) | $14.99/mo | REST (partial) | Yes (Zapier/Make) | Thin (HubSpot only) | Multilingual teams needing real-time translation in 100+ languages |
| Wave | Mobile-first AI note-taker | Yes (30 min/mo) | $11.67/mo | REST | Yes (HMAC-SHA256) | None (export only) | In-person recording, phone calls, cross-device sync, semantic search |
| tl;dv | AI note-taker + sales coaching | Yes (limited) | $18-29/mo | REST (v1alpha1) | Yes (2 triggers) | Deep (Business+) | Free unlimited recordings, sales coaching with playbooks, aggregated insights |
| Claap | AI sales call assistant | Yes (limited) | $24/user/mo | REST + OAuth | Yes (HMAC) | Deep (Business+) | Sales teams wanting CRM auto-enrichment, deal scoring, lemlist ecosystem |
| Tactiq | Chrome extension note-taker | Yes (10 transcripts/mo) | $8/mo | None (Zapier only) | None | Medium (native HubSpot/Salesforce/Pipedrive) | Zero-setup bot-free transcription, Google Meet-first teams |
| Granola | Bot-free AI notepad | Yes (limited history) | $14/user/mo | REST (Business+) | None | Medium (HubSpot/Attio/Affinity, Business+) | Bot-free, AI-enhanced notes, VCs/product teams, privacy-sensitive contexts |
| Hedy | Real-time AI meeting coach | Yes (5 hrs/mo) | $12.99/mo | REST (Pro) | Yes (HMAC) | None (via Zapier/n8n) | Real-time coaching during calls, cross-session intelligence, Apple Watch |
| Bluedot | Bot-free AI note-taker | No (5 lifetime) | $14/mo | None (webhooks only) | Yes (Svix) | Medium (HubSpot/Salesforce, Business+) | Bot-free video recording, Chrome-first teams, screen recording |
| Notta | AI meeting transcription (58 languages) | Yes (120 min/mo) | $13.99/mo | None (Zapier only) | None (Zapier only) | Medium (5 CRMs, Business+) | Multilingual global teams, 58-language transcription |
| Lindy | AI agent builder (notes are one module) | Yes (free trial) | $49.99/mo | None | Inbound only | Indirect (via workflow) | All-in-one AI assistant (email + meetings + calendar + workflows) |
| Rilla | Field sales AI coaching | No | ~$199-349/rep/mo | None (via Merge) | Yes (Merge) | Medium (5 CRMs via Merge) | In-person field sales coaching, virtual ridealongs, home services |
| Siro | Field sales AI coaching | No | ~$200-350/rep/mo | REST + OAuth | Yes (Svix) | Medium (6 CRMs via Merge) | In-person field sales coaching, Halftime real-time coaching, multi-industry (auto, home services, telecom, political) |
| Sales Ask | Field sales AI coaching | No | ~$42-208/user/mo | None (partner-only) | None | Medium (ServiceTitan/Jobber/Housecall Pro/Salesforce/Lasso) | Home services field + call center coaching, active AI feedback, native trade CRM integrations |
| Sonnet | Bot-free AI note-taker + CRM | Yes (5 rec/mo) | $25/mo | None | None | Medium (HubSpot/Salesforce auto-update) | Bot-free CRM auto-update, domain templates (sales/legal/medical/recruiting) |
| AudioPen | Voice-to-polished-text | Yes (10 notes, 3 min) | $33/3mo one-time | None | Yes (Prime) | None | Solo professionals, custom writing styles, one-time payment |
| Supernormal | AI agent for agencies | Yes (15 credits/mo) | $10-18/mo | None (Zapier only) | None | Medium (HubSpot/Salesforce/Pipedrive) | Agencies wanting AI-generated deliverables (decks, briefs, emails) from meetings |
| Sonix | AI transcription + translation + subtitles | Yes (30 min trial) | $10/hr PAYG or $22/seat/mo + $5/hr | REST (Premium+) | Yes (Enterprise) | Thin (Salesforce only) | Batch media transcription, 53-language translation, SRT/VTT subtitles, HIPAA/SOC 2 |
| Transkriptor | AI transcription + meeting recording | Yes (~30 min/day) | $9.99/mo (Lite) | REST (Enterprise only) | Yes (Enterprise) | Shallow (HubSpot/Salesforce/Zoho listed, depth disputed) | Budget multilingual transcription (100+ languages), meeting bot, subtitles, sentiment analysis (Team) |
| VoiceToNotes | Personal voice-to-text | Yes (10/day, 300 min/mo) | $1/mo | None (Pro Annual only, undocumented) | None | None | Ultra-cheap personal voice notes, HIPAA compliance, OCR |
| Outdoo | AI roleplay + coaching + revenue intelligence | Yes (limited) | ~$660-1,200/user/yr | REST (Enterprise only) | None documented | Deep (11 CRMs, auto-fill) | Closed-loop coaching: AI roleplay + real-call scoring + CRM auto-fill, mid-market Gong alternative |
| Jiminny | Conversation + revenue intelligence | No (14-day trial) | $83/mo (Recording) | REST (partial) | None documented | Deep (8 CRMs native) | Coaching-focused conversation intelligence, mid-market, no platform fee |
| Enthu.AI | Contact center QA + coaching | No (free trial) | ~$15-69/user/mo | Not published | Not published | Medium (HubSpot/Pipedrive/Bullhorn/Close) | Contact center QA auto-scoring on 100% of calls, compliance, affordable |
| Attention | AI CI + CRM auto-update + coaching | No (free trial) | ~$59/user/mo | REST (v2) | Yes (workflow builder) | Deep (Salesforce/HubSpot, 2-way sync) | Real-time battlecards, 200+ integrations, coaching scorecards, MCP server, workflow builder |
| Sybill | AI sales assistant + deal execution | Yes (500 credits/wk) | $30/user/mo | REST (Enterprise only) | Yes (webhook automations) | Deep (4 CRMs: SF/HS/Zoho/Dynamics, Autofill Business+) | CRM autofill, deal workspace, Ask Sybill, follow-up automation, mid-market alternative to Gong |
| Demodesk | AI sales meeting platform + coaching + agents | Yes (14-day trial) | €49/user/mo | REST (V2) | Yes (13 events) | Deep (Salesforce/HubSpot/Pipedrive) | AI-first conversation intelligence with autonomous agents, GDPR-native EU teams |
| Clari Copilot | Revenue CI + live coaching | No (30-day trial) | ~$60/user/mo | REST (Core API, Enterprise) | None documented | Deep (Salesforce/HubSpot/Pipedrive) | Enterprise CI tightly integrated with Clari revenue forecasting, real-time battlecards |
| Salesken | Real-time coaching + QA + revenue intel | No | ~$99/mo | Not published (Enterprise API) | Not published | Deep (Salesforce/HubSpot/Zoho native) | Real-time in-call coaching, 100% QA scoring, APAC/multilingual, field sales |
| Proshort | Enablement-first CI + coaching | No | $75/user/mo | None | None | Deep (3 CRMs: SF/HS/Zoho) | AI Roleplay + in-call cues + Deal Agents, coaching-focused Gong alternative |
| ExecVision (Mediafly Coach360) | Coaching-first CI | No | ~$100-185/user/mo (suite-bundled) | Not public (enterprise-gated) | Not public | Deep (6 CRMs: SF/HubSpot/Pipedrive/Dynamics/SAP) | Structured coaching plans from call data, 59+ integrations, enablement/L&D teams |
| Speakwise | iOS in-person meeting recorder | Yes | $59.99/yr (~$5/mo) | None | None | None (Notion only) | iOS in-person recording, AirPods hands-free, Notion sync, cheapest option ($60/yr) |
| Omi | Open-source AI wearable | Yes (1,200 min/mo) | $19/mo | REST | Yes (app marketplace) | None | All-day in-person capture, developer extensibility, lowest price ($89 hardware) |
| Plaud | Hardware AI voice recorder | Yes (300 min/mo) | $99.99/yr | REST (private beta) | None (private beta) | None (undocumented) | In-person meetings + phone calls (VCS), polished hardware, 112 languages, SOC 2/HIPAA |
| Cresta | Enterprise contact center AI | No | ~$60K-$150K/yr | REST (behind auth) | Yes | Deep (10+ CRMs) | Enterprise contact center (100+ agents), AI virtual agents + real-time coaching + QA |
| Level AI | Contact center intelligence | No | ~$185/agent/mo | GraphQL (enterprise-gated) | Unknown | Thin (Salesforce only) | Mid-market contact center (100-1,000 agents), semantic QA + real-time assist + VoC |
| Momentum | AI revenue orchestration + CI add-on | No | $69-99/user/mo + $30 CI add-on | REST (X-API-Key, 100/15min) | No | Deep (Salesforce only) | CRM automation from calls, MEDDIC Autopilot, Slack Deal Rooms, acquired by Salesforce |
| Oliv | AI-native revenue intelligence | No (14-day trial) | $19-77/user/mo | None | None | Deep (8 CRMs) | Modular Gong alternative — buy only the agents you need, 13x cheaper than Gong |
| Scratchpad | Salesforce-native AI workspace | Yes (3 views, 100 credits/mo) | $19-49/user/mo | None | None | Deep (Salesforce only) | Salesforce CRM overlay, AI field updates, pipeline sheets, Gong integration (Team+) |
| Laserfocus | Salesforce UI overlay | Yes (2 stacks, limited) | $30/user/mo | None | None | Deep (Salesforce only) | Pure Salesforce UI simplification — Stacks, table views, bulk editing, precache (YC "Inactive") |
| Weflow | Salesforce-native Revenue AI | Yes (100 updates) | $19-79/user/mo | None | None | Deep (Salesforce only) | Salesforce teams wanting activity capture + CI + forecasting in one bundle at ~50% of Gong |
| Noota | AI meeting assistant + recruitment | Yes (300 min/mo) | $19/mo | REST (Business+) | Yes (Zapier) | Medium (7 CRMs: HS/SF/Pipedrive/Zoho/Zendesk/Monday/Dynamics) | Meeting notes + recruitment automation (sourcing, screening agents, voice agents), 50+ languages, EU compliant |
| Scribbl | Bot-free Chrome extension note-taker | Yes (15 meetings/mo) | $13/user/mo | None | None | Thin (Team plan only, unspecified) | Google Meet-first teams wanting simplest bot-free setup, AI Copilot chat |
| Dialpad | UCaaS + CCaaS with AI | No | $15-25/user/mo | REST + Python SDK | Yes (Event Subscriptions) | Medium (Pro+: SF/HS/Zendesk) | Unified phone/video/SMS/contact center with AI Recaps + coaching built in |
| Temi | Budget AI transcription (Rev's engine) | Yes (limited trial) | $0.25/min ($15/hr) PAYG | REST | Yes (callback_url) | None | Cheapest simple English-only batch transcription, one-off jobs |
| Winn.ai | Real-time playbook adherence + CRM auto-update | No | $69/seat/mo (Pro) | None | None | Medium (SF/HS, 25 fields Pro) | Real-time playbook enforcement, methodology tracking during calls, sales-only |
| Verbit | Enterprise AI+human transcription + captioning | No | $29/mo (Self-Service) or ~$33K/yr (Enterprise) | REST (5 API modules) | Not documented | None | Enterprise batch/live transcription, accessibility compliance (ADA/WCAG/CVAA), education/legal/media |
| Meetily | Open-source local-first AI note-taker | Yes (MIT, unlimited) | $10/user/mo (Pro) | Local REST only | No | None (planned) | Privacy-first self-hosted transcription, HIPAA/GDPR by architecture, open-source |
| Char | Open-source bot-free AI notepad | Yes (GPL-3.0, BYOK) | $8/mo (Lite) | CLI only (REST coming soon) | Hooks (2 events) | None (planned) | Privacy-first local-first markdown notes, open-source, 10 cloud STT providers |
| Amical | Open-source AI dictation | Yes (MIT, unlimited) | Free (no paid tier) | None | None | None | Privacy-first local dictation with context-aware formatting, open-source, Whisper STT |
| Handy | Open-source cross-platform STT | Yes (MIT, unlimited) | Free (no paid tier) | None (CLI flags only) | None | None | Privacy-first push-to-talk dictation, Whisper + Parakeet dual-engine, cross-platform (macOS/Windows/Linux), 20k+ GitHub stars |
| Shadow | Bot-free AI note-taker + screen capture | Yes (25 lifetime AI meetings) | $8/mo | None | None (Zapier webhook) | None | Bot-free audio + screen capture, macOS-only, on-device transcription, autopilot detection |
| Soz AI | Mobile-first AI transcription | Yes (30 min) | $9.99/mo | None | None | None | Budget mobile transcription, 100+ languages, YouTube URL paste, speaker diarization (10 speakers), subtitles |
| Circleback | AI meeting notes + search | No (7-day trial) | $20.83/mo | Webhooks + MCP | Yes (HMAC) | Medium (HS/SF/Attio) | Cross-meeting AI search, bot + botless recording, Slack huddles, webhook automations |
| Memoro | GDPR-first AI meeting assistant | Yes (75 min/mo) | €9/mo | Undocumented | None | None | Bot-free local recording, German hosting, Blueprints, offline mode, 50+ languages |
| HappyScribe | AI + human transcription + subtitles | Yes (10 min trial) | $17/mo ($8.50 annual) | REST (200 req/hr) | Yes (per-order URL) | None | Batch transcription in 120+ languages, subtitle generation, human transcription ($2/min), 15+ export formats |
| MinutesLink | AI meeting note-taker | Yes (10 meetings/mo) | $9/mo | None | None | None (Zapier only) | Budget Google Meet/Zoom teams wanting shareable summary links, no-signup sharing |
| Voicenotes | AI voice notes + meetings | Yes (basic) | $14.99/mo ($99.99/yr) | None (Zapier only) | Yes (custom) | None | Personal voice capture, Ask AI search, Obsidian/Notion sync, Apple Watch/WearOS, 100+ languages |
| monday Notetaker | Bolt-on AI note-taker (monday.com) | No (Pro+ required) | Add-on on Pro ($19/seat/mo) | GraphQL (2026-04+) | No | Deep (native boards) | monday.com teams wanting action items → board items, no extra tool |
| TalkNotes | AI voice note app (template-driven) | No (7-day trial) | ~$10/mo (Plus) | None (contact for access) | None (Zapier only) | None | Template-driven voice-to-content (100+ formats), content creators, 50+ languages |
| Letterly | AI speech-to-content (25+ rewrites) | Yes (limited) | $69 LTD (1 device) | None | Yes (custom) | None | Voice-to-content with 25+ rewrite formats, 90+ languages, offline recording, content creators |
| Cleft Notes | AI voice-to-organized-notes (Apple) | Yes (5 min, unlimited) | $29/yr (Plus) | None | None (Zapier only) | None | Apple-native on-device transcription, ADHD-friendly auto-organization, Obsidian/Notion sync, offline recording |
| Coconote | AI lecture → study materials (Quizlet) | Yes (basic) | $9.99/mo ($99.99/yr) | None | None | None | Student lecture capture, auto-generated flashcards/quizzes/study guides, AI chat across notes, 100+ languages |
| HyNote AI | Full-stack AI note-taker (audio/files/YouTube/web) | Yes | $6.66/mo ($79.99/yr) | None | None | Thin (Unlimited only) | Broadest input format coverage (audio + PDF + image + YouTube + web), multilingual, flashcards/quizzes/presentations/podcasts, HIPAA/GDPR |
| Superpowered | Bot-free AI note-taker (desktop) | Yes (1 cal, 1-mo history) | $25/mo | None | None | Medium (SF/HS, Pro only) | Bot-free device-audio capture, AI Templates, SOC-2/GDPR, Y Combinator-backed |
| Noted | Voice recorder + timestamped note-taker (Apple) | Yes | $9.99/mo ($79.99/yr, $89.99 LTD) | None | None | None | Timestamped audio-note linking, Apple Pencil drawing, Intelligent Playback, Apple Watch, 18 languages, students/professionals |
| Backtrack | Retroactive Mac menu bar recorder | Yes (1 hr buffer) | $9.99/mo | None | None | None | Mac users who forget to record, retroactive capture, bot-free, in-person + video calls |
| JotMe | Real-time AI translation + meeting notes | Yes (20 min translation) | $10/mo (annual) | None | None | None (Enterprise only) | Multilingual teams needing simultaneous interpretation in 107 languages, bot-free, conferences |
| KUDO | Enterprise AI + human interpretation | No | Custom (usage-based) | Widget API only | No | None | Enterprise multilingual events/conferences needing 200+ languages, human interpreters, SOC 2/ISO 27001 |
| Interprefy | Enterprise RSI + AI speech translation | No | Custom (hourly/daily/plan) | REST (JWT + token) | No | None | Enterprise multilingual events needing 80+ platform integrations, 6,000+ interpreters, ISO 27001 |
| Langfinity | Real-time voice-to-voice AI translation | Yes (Starter trial) | Pay-as-you-go (Starter) or subscription (Pro 20 hrs/yr, Business 100 hrs/yr) | None | None | None | Domain-specific voice translation (manufacturing, safety), AI voice avatars, Teams/Zoom/Meet, 50+ languages |
| Transync AI | Real-time AI translation + meeting notes | Yes (40 min one-time) | $8.99/mo (Personal Premium) | None | None | None | Near-zero latency (<0.5s) dual-screen bilingual display, AI voice broadcast, 60+ languages, bot-free system audio |
| Talo | Real-time AI meeting translation (single bot) | Yes (7-day trial) | $33/mo (Starter, 120 min) | REST + WebSocket/WebRTC (Palabra API, separate pricing) | No | None | Enterprise-grade single-bot translation for Zoom/Meet/Teams, 60+ languages, SOC 2/ISO 27001, voice cloning, Python/JS/Java SDKs |
| Audionotes | Multi-format AI note-taker (voice/text/image/video/YouTube) | Yes (1 min/note) | $129.99/yr (~$10.83/mo) | None (webhook + Zapier only) | Yes (fixed JSON) | None | Multi-format capture (voice + image + video + YouTube), 100+ templates, WhatsApp Bot, Notion sync, 80+ languages |
| Bubbles | Async video messaging + AI meeting notes | Yes (5 meetings/wk) | $12/user/mo (Teams) | None (Zapier only) | None | None | Async video collaboration + meeting recording in one tool, screen recording, SOC 2 Type II |
| Rimo | AI note-taker (JP-optimized) | Yes (trial) | $9/mo (launch) | None (upcoming) | None | None | Japanese-first teams needing ISO 27001/27017 compliance, Japan-hosted data |
| Wudpecker | AI note-taker (custom instructions) | Yes (10 meetings/mo) | $19/mo (Plus) | None | None | Medium (HubSpot/Salesforce, Plus+) | Custom note templates/instructions, Ask Wudpecker AI Q&A, 39+ languages, EU/GDPR |
| Sally AI | AI meeting assistant (GDPR-first) | Yes (30-day trial) | $10/mo (Starter) | MCP only (read-only) | None | Medium (7 CRMs native) | German-hosted GDPR, 99+ languages, tiered AI accuracy (90-98%), MCP server, 8,000+ integrations |
| Liznr | AI meeting assistant + contextual intelligence | Yes (free trial) | $9/mo | None | None | None (Jira/Slack/Notion/Trello only) | Budget contextual intelligence, Chrome/Edge/Teams, recruiting/legal/sales, India-based |
| Aviso AI | Revenue intelligence (AI-native forecasting + CI + deal intel) | No | ~$1,000/user/yr (custom) | None (Aviso Connect enterprise-managed) | None | Deep (9 CRMs) | End-to-end AI revenue OS — 100+ variable forecasting, 6-emotion CI, MIKI AI agents, relationship intelligence, enterprise-only |
| Salesroom | AI video conferencing for sales (own platform) | Yes | $49/mo (Pro) | None | None | Medium (HubSpot/Salesforce) | Real-time coaching + buyer engagement scoring on own video platform, replaces Zoom for sales calls |
| Laxis | AI meeting intelligence + voice keyboard | Yes (300 min/mo) | $15.99/mo | Enterprise only | None | Medium (HubSpot/Salesforce, Business+) | Bot-free recording + universal voice keyboard + hardware ecosystem (OSO earbuds), CRM sync on Business+ |
| KaraX.ai | Agentic AI workspace + meetings | Yes (25 chats/day, 5 meetings at 30 min) | $14.99/mo | None | None | Medium (SF/HubSpot, Business+) | Multi-LLM chat + meeting transcription + agentic workflow automation in one workspace, 800+ integrations |
| Dicte | EU privacy-first AI meeting assistant | Yes (120 min/mo) | €9.92/mo (annual) | None (Business/Enterprise only, undocumented) | None | None (Business/Enterprise only) | EU data residency, post-quantum encryption, open-source/EU AI models only, DicteBOX on-premises |
| reason8 | In-person meeting note-taker (multi-device) | Yes (15 min/meeting) | ~$19.99/mo | None | None | None | Multi-smartphone audio fusion for in-person meetings, patent-pending, speaker ID via multi-device, English only |
