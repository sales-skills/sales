---
name: sales-note-taker
description: "Sales meeting note-taker and conversation-intelligence strategy — platform selection (Fathom, Fireflies, Avoma, Gong, Otter, Fellow, Grain, Sembly, Read.ai, MeetGeek, Jamie, Krisp, Colibri, Cluely, Jamy, Wave, tl;dv, Claap, Tactiq, Granola, Hedy, Omi, Bluedot, Lindy, Notta, Rilla, Siro, Plaud, Speakwise, Sybill, Winn.ai, Sonnet, Supernormal, VoiceToNotes, Sonix, Outdoo, Jiminny, Enthu.AI, Demodesk, Clari Copilot, Salesken, Cresta, Balto, Observe.AI, Oliv, Weflow, Noota, Dialpad, Modjo, Verbit, Temi, Char, Amical, Handy, IRIS Clarity, Soz AI, Shadow, HappyScribe, Circleback, monday Notetaker, Memoro, MinutesLink, Voicenotes, Letterly, Cleft Notes, Coconote, HyNote AI, Backtrack, Superpowered, Noted, People.ai/Backstory, Scribbl, Audionotes, Bubbles, KUDO) plus backend API integration for auto-downloading transcripts into CRM, data warehouse, Slack, or internal tools. Use when choosing an AI note-taker, comparing pricing or features, deciding between webhook and polling, wiring transcripts into HubSpot or Salesforce, building a call-intelligence data pipeline, normalizing transcript formats, choosing a field sales CI tool, choosing a hardware AI voice recorder for in-person meetings, choosing a real-time playbook adherence tool, choosing a batch transcription tool (Sonix, TranscribeMe, Temi, Transkriptor, Rev, Trint), choosing an open-source self-hosted meeting recorder (Meetily), choosing an open-source bot-free local-first notepad (Char), choosing an open-source AI dictation tool (Amical), choosing an open-source cross-platform STT app (Handy), choosing a pure noise cancellation tool for call quality (IRIS Clarity), choosing a budget mobile-first transcription app with YouTube URL paste (Soz AI), choosing a bot-free note-taker with screen capture on macOS (Shadow), choosing a batch transcription tool with 120+ languages and human transcription option (HappyScribe), choosing a note-taker with cross-meeting AI search and webhook automations (Circleback), evaluating monday.com's built-in AI Notetaker vs a dedicated tool (monday Notetaker), choosing a GDPR-first German-hosted bot-free meeting assistant with Blueprints and offline mode (Memoro), choosing a budget note-taker with shareable summary links that don't require recipient sign-up (MinutesLink), choosing an AI voice note-taker with Ask AI search and Zapier automation for personal thought capture (Voicenotes), choosing a voice-to-polished-text tool with custom writing styles and one-time payment (AudioPen), choosing a template-driven voice note app with 100+ pre-made content formats and Zapier automation (TalkNotes), choosing a voice-to-content app with 25+ built-in rewrite formats and offline recording for content creators (Letterly), choosing an Apple-native voice-to-organized-notes app with on-device transcription and ADHD-friendly design (Cleft Notes), choosing a full-stack AI note-taker that handles audio, PDFs, YouTube, and web pages with flashcard and presentation generation (HyNote AI), choosing a Mac menu bar retroactive recorder that captures meetings you forgot to record (Backtrack), choosing a bot-free desktop note-taker with AI Templates and SOC-2/GDPR compliance (Superpowered), choosing an Apple-ecosystem voice recorder with timestamped audio-note linking and Apple Pencil support (Noted), choosing a Salesforce-native AI workspace with AI field updates and pipeline sheets that complements Gong (Scratchpad), evaluating a revenue intelligence platform with automatic activity capture and deal intelligence (People.ai/Backstory), choosing a bot-free Chrome extension note-taker for Google Meet with AI Copilot chat (Scribbl), choosing an affordable Gong alternative with MEDDIC/BANT/SPIN scoring and CRM auto-sync for SMB teams (Rafiki), choosing a multi-format voice note-taker with image/video/YouTube input and 100+ output templates (Audionotes), evaluating a usage-based revenue intelligence platform with 9 AI agents that ties conversations to pipeline and forecasting (MaxIQ/EchoIQ), choosing an async video messaging + meeting note-taker for teams that prioritize async collaboration over sales intelligence (Bubbles), or debugging rate limits and auth flows. Do NOT use for reviewing a single call for coaching (use /sales-call-review) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your note-taker selection or API integration question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, api, integration, strategy]
---

# Sales Note-Taker & Conversation-Intelligence Strategy

Help the user (a) pick the right AI meeting note-taker for their sales team, and/or (b) wire its API into downstream systems (CRM, warehouse, Slack, internal tools). This skill is tool-agnostic — it references specific platforms for selection and integration patterns but focuses on cross-vendor strategy.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Pick a note-taker for my team (selection/comparison)
   - B) Integrate an existing note-taker's API (transcripts → somewhere)
   - C) Both — evaluating a platform AND planning the integration
   - D) Debugging a specific API/webhook issue

2. **What's your use case?**
   - A) Sales org — discovery/demo calls, pipeline intelligence, coaching
   - B) Customer success — onboarding, QBRs, renewal health
   - C) Cross-functional — sales + CS + internal meetings
   - D) Specific workflow — e.g., auto-log transcripts to HubSpot, push action items to Slack, pipe everything to Snowflake

3. **If integrating, where are transcripts going?**
   - A) CRM (HubSpot, Salesforce, Attio, Pipedrive)
   - B) Data warehouse (Snowflake, BigQuery, Redshift, Databricks)
   - C) Internal app / database
   - D) Slack / notifications only
   - E) Multiple destinations (fan-out)

4. **Scale?**
   - A) <50 meetings/week (single team)
   - B) 50-500/week (mid-market sales org)
   - C) 500+/week (enterprise, multi-team)

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Salesloft Conversations config | `/sales-salesloft {user's question}` |
| ZoomInfo Chorus config | `/sales-zoominfo {user's question}` |
| Seismic Meeting Intelligence config | `/sales-seismic {user's question}` |
| Meeting scheduling (not note-taking) | `/sales-meeting-scheduler {user's question}` |

Otherwise, answer directly below.

## Step 3 — Platform reference

**Start with `references/platforms.md`** for the quick comparison table across all platforms.

Then read the detailed file matching the user's segment:

| Segment | File | When to read |
|---|---|---|
| SMB / budget | `references/platforms-smb.md` | Budget < $50/user/mo, small teams, free-tier shoppers |
| Mid-market / sales | `references/platforms-midmarket.md` | Sales-focused teams, methodology scorecards, coaching, CRM enrichment |
| Enterprise / revenue | `references/platforms-enterprise.md` | $1K+/user/yr budget, revenue intelligence, bolt-on CI |
| Field / in-person | `references/platforms-field.md` | In-person sales, field reps, mobile recording |

For comparison questions spanning segments (e.g., "Fathom vs Gong"), read both relevant files.

Answer using only the relevant section(s) — don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform reference — focus on the user's specific situation.

### Selection framework (if goal = selection)

Rank these in order for the user's context:

1. **Budget per seat** — Tactiq (free tier + $8-$12/mo) < Fathom (free tier + $16-$20/mo) < MeetGeek (free tier + $9.99-$17) < Fireflies ($10-$19) < Otter ($17-$30) < tl;dv (free tier + $18-$98/mo) < Avoma ($19-$79) < Claap ($24-$48/user/mo) < Gong ($1,200-$1,600/user/yr). Free tier only exists on Fathom, Fireflies, Otter, Read.ai, MeetGeek, tl;dv, Claap (very limited), Tactiq (very limited — 10 transcripts/mo).
2. **CRM depth** — Gong and Avoma have the deepest native CRM field-mapping and deal intelligence; Fathom Business, Fireflies Business, Fellow Business ($15/seat, HubSpot/Salesforce) are solid; Otter is thinnest.
3. **Coaching/QA features** — Gong > Avoma > tl;dv Business (MEDDIC/BANT/SPIN playbooks, aggregated insights) > Salesloft Conversations / Chorus > Fathom/Fireflies (basic scorecards only).
4. **API completeness** — Gong (richest, webhooks + REST) > Fireflies (GraphQL + webhooks) > Avoma (REST + webhooks) > Fathom (REST + webhooks) > Wave (REST + webhooks + MCP + semantic search, 60/min + 1K/day) > MeetGeek (REST + webhooks + MCP, all plans) > Jamie (REST + webhooks + MCP, Pro+) > Grain (REST, Business+) > Sembly (webhooks-first) > Read.ai (REST beta + MCP + webhooks) > tl;dv (REST v1alpha1 + webhooks + MCP, Pro+) > Granola (REST read-only + MCP beta, Business+, 5 req/sec, no webhooks) > Jamy (REST partial, 2 endpoints + webhooks). Otter is Enterprise-only API (beta).
5. **Compliance** — Gong, Avoma, Fireflies Business, Fathom Business all have SOC 2 + GDPR. For HIPAA/regulated industries, short-list drops to Gong, Avoma, Fireflies Enterprise.

**Quick picks:**
- Solo rep / tiny team on a budget → Fathom free tier
- SMB sales team, HubSpot/Salesforce-centric → Fathom Business or Fireflies Business
- Mid-market sales org wanting methodology + coaching → Avoma
- Enterprise revenue intelligence, high budget → Gong
- Enterprise CI + forecasting in one platform, Clari Core user → Clari Copilot ($60-110/user/mo)
- Non-sales general meeting transcription → Otter or Fellow
- Mid-market team wanting CRM auto-enrichment + deal scoring without Gong prices, especially in the lemlist ecosystem → Claap
- Mid-size team wanting customizable templates + analytics + affordable CRM sync → MeetGeek
- GTM team wanting shareable call clips + MCP AI workflows → Grain
- Real-time AI coaching during calls + cross-session intelligence + Apple Watch → Hedy
- Privacy-first EU team, in-person meetings, or bot-free non-negotiable → Jamie
- Noisy environments where call quality is the primary pain + AI notes as a bonus → Krisp
- Pure noise cancellation only (no notes/transcription), contact center, or SDK embedding → IRIS Clarity
- Real-time live transcription during calls + Sales Copilot with cue cards and objection handling → Colibri
- Real-time AI coaching overlay with knowledge base RAG and pre-call briefs → Cluely
- Multilingual team needing real-time translation in 100+ languages + cross-language search → Jamy
- In-person meetings, phone calls, cross-device recording, semantic search across history → Wave
- Free unlimited recordings + sales coaching with playbook monitoring (MEDDIC/BANT/SPIN) → tl;dv
- Zero-setup Chrome extension, bot-free, Google Meet-first, no API needed → Tactiq
- Bot-free AI notepad for VCs/product teams, privacy-sensitive contexts, HubSpot CRM → Granola
- Open-source wearable for all-day in-person capture, developer extensibility, lowest price ($89) → Omi
- Bot-free video recording with screen capture, Chrome-first teams, CRM auto-sync on Business plan → Bluedot
- Multilingual global team needing 58-language transcription + cross-meeting AI intelligence (Notta Brain) → Notta
- All-in-one AI assistant that handles email + meetings + calendar + custom workflows in a single tool → Lindy
- Individual professional recording in-person meetings on iPhone, Notion-centric workflow, ultra-low budget ($60/yr) → Speakwise
- Open-source self-hosted meeting recorder, 100% local processing, HIPAA/GDPR by architecture, developer extensibility → Meetily
- Open-source bot-free AI notepad with markdown output, 10 STT providers, plugin SDK, local-first with optional cloud → Char
- Open-source AI dictation with context-aware formatting, Whisper local STT, push-to-talk, free MIT license → Amical
- Open-source cross-platform STT with Whisper + Parakeet dual-engine, push-to-talk, 20k+ stars, free → Handy
- Polished hardware wearable for in-person meetings + phone calls (VCS), 112 languages, SOC 2/HIPAA, 1.5M+ users → Plaud
- Budget mobile-first transcription with 100+ languages, YouTube URL paste, subtitles, $9.99/mo unlimited → Soz AI
- Bot-free recording with screen capture (sees slides/demos), macOS-only, cheapest bot-free at $8/mo → Shadow
- Meeting notes + recruitment automation in one platform, EU compliance, broad ATS integration (15 platforms) → Noota
- In-person field sales coaching with virtual ridealongs, home services industry → Rilla
- Home services field + call center coaching with active AI feedback, ServiceTitan/Jobber/Housecall Pro → Sales Ask
- macOS sales team wanting auto-CRM update from calls without manual logging, domain templates (legal, medical, recruiting) → Sonnet
- Agency wanting AI-generated deliverables (pitch decks, briefs, emails) from client meetings, bot-free → Supernormal
- Ultra-cheap personal voice notes with HIPAA compliance, no meeting bot needed → VoiceToNotes
- Voice-to-polished-text with custom writing styles, one-time payment, solo professionals → AudioPen
- Template-driven voice-to-content with 100+ formats (blog, email, to-do), content creators → TalkNotes
- Voice-to-content with 25+ built-in rewrite formats (social posts, emails, journals), offline recording, 90+ languages → Letterly
- Apple-native on-device transcription, ADHD-friendly auto-organization with headings, cheapest annual plan ($29/yr), offline-capable → Cleft Notes
- Apple-ecosystem audio-note linking with timestamps, Apple Pencil drawing with Time Stroke, Intelligent Playback, students/professionals → Noted
- Batch transcription of uploaded audio/video files, multi-language translation, SRT/VTT subtitles, SOC 2/HIPAA → Sonix
- Human+AI hybrid transcription with 99% accuracy guarantee, HIPAA medical/legal, upload-only batch processing → TranscribeMe
- Enterprise AI+human transcription with live captioning, ADA/WCAG accessibility compliance, education/legal verticals → Verbit
- Budget one-off English batch transcription at $0.25/min, simplest possible API, Rev's automated engine → Temi
- Budget multilingual transcription (100+ languages) with meeting bot, subtitles, and sentiment analysis → Transkriptor
- Batch transcription + subtitles in 120+ languages with human transcription option, advanced subtitle editor, SOC 2/GDPR → HappyScribe
- Cross-meeting AI search + webhook automations, bot + botless recording, Slack huddles, MCP server for AI workflows → Circleback
- Mid-market team wanting CRM autofill + deal workspace + follow-up automation without Gong pricing → Sybill
- SMB team wanting Gong-level scoring (MEDDIC/BANT/SPIN) + CRM sync + deal intelligence at $19-49/user/mo → Rafiki
- Mid-market team wanting AI roleplay + real-call scoring + CRM auto-fill without Gong pricing → Outdoo
- GDPR-first German-hosted bot-free recording with Blueprints, offline mode, cross-platform (incl. Linux) → Memoro
- Budget note-taker with shareable summary links (no sign-up for recipients), Google Meet/Zoom, $9/mo → MinutesLink
- Mid-market team wanting coaching-focused conversation intelligence with wide CRM support (8 CRMs) without Gong pricing → Jiminny
- Small-to-mid contact center needing automated QA scoring on 100% of calls without Gong pricing → Enthu.AI
- Enterprise team wanting conversation intelligence tightly integrated with revenue forecasting (Clari Core) → Clari Copilot
- Real-time in-call coaching + QA automation + revenue intelligence in one platform, APAC/multilingual focus → Salesken
- Enterprise contact center (100+ agents) needing 100% auto QA with path to AI virtual agents → Observe.AI
- monday.com Pro/Enterprise team wanting basic meeting notes + action items flowing directly into boards without another tool → monday Notetaker
- Salesforce team already using Gong wanting a CRM overlay with AI field updates and modern pipeline views → Scratchpad
- Google Meet-only team wanting the simplest bot-free Chrome extension with AI Copilot chat and instant summaries → Scribbl
- Multi-format capture (voice + image + video + YouTube) with 100+ output templates and WhatsApp Bot, Notion auto-sync → Audionotes
- Async video messaging + meeting notes for design/product teams, no CRM needed, screen recording focus → Bubbles

### Integration patterns (if goal = API integration)

**Webhook-first vs polling — pick webhook whenever available.**

| Pattern | When to use | Trade-off |
|---|---|---|
| Webhook push (event-driven) | Default — when vendor offers `transcription.completed` or `meeting.ended` events | Must expose a public HTTPS endpoint; must handle retries, idempotency, signature verification |
| Polling (list + fetch) | Backup for vendors without webhooks (Otter API beta), or backfilling history | Wastes API calls, higher latency, hits rate limits faster |
| Hybrid | Webhook for real-time + periodic reconcile-poll to catch missed events | Best for production — covers webhook outages |

**Standard integration architecture (works across vendors):**

1. **Ingest** — Webhook receiver (Lambda/Cloud Run/serverless) validates HMAC signature, enqueues raw payload
2. **Fetch** — Worker pulls full transcript from API using `meeting_id` / `recording_id` from payload
3. **Normalize** — Map to a common schema: `{meeting_id, external_id, vendor, started_at, duration_s, participants[], transcript[{speaker, ts, text}], summary, action_items[], recording_url}`
4. **Persist** — Raw JSON to S3/GCS (audit trail) + normalized rows to warehouse + lightweight record to CRM
5. **Fan-out** — From the normalized layer, push to Slack / Salesforce opportunity / HubSpot deal / Notion / wherever

**Auth patterns:**

- **API key in header** — Fireflies, Fathom, Sembly, Read.ai, MeetGeek (simplest; rotate per-user or per-workspace)
- **OAuth 2.0** — Avoma, Gong (required for multi-tenant apps)
- **Workspace-scoped keys** — Otter (Enterprise only)

**Rate limits to design around:**

- Gong: 3 req/sec, 10k/day, ~1k/hr per key — batch transcript fetches, cache call metadata
- Fireflies: GraphQL complexity limits — don't request full transcript + audio URL in one query for 100 meetings
- Fathom: document per-key limits; paginate with cursor
- Avoma: standard REST pagination; webhooks preferred for volume
- Otter: Enterprise-only, undocumented beta limits — assume conservative

**Transcript format normalization:**

Every vendor returns a slightly different shape. Build a `normalize_transcript(vendor, payload)` function early. Common fields: `speaker` (email or display name), `timestamp_ms` (offset from start), `text`, `confidence` (optional). Fathom uses markdown export natively; Gong/Avoma return structured JSON with monologues; Fireflies returns sentences; Otter returns speaker-labeled paragraphs.

If you discover a gotcha, rate-limit ceiling, auth quirk, or vendor-specific payload oddity not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

- **Webhooks without signature verification are dangerous.** Every vendor offers HMAC or similar — Fireflies uses `x-hub-signature` (SHA-256), Gong signs with its own header, Avoma provides a secret. Always verify before trusting the payload.
- **"Transcript ready" ≠ "summary ready."** Vendors often fire the transcript webhook before AI summary/action-items are complete. Either wait for a separate `summary.completed` event (Fathom, Fireflies) or re-fetch a few minutes later.
- **Rate limits are the silent killer at scale.** Gong's 3 req/sec hits fast when you have 500 calls/day and need metadata + transcript + participants for each. Cache aggressively, use batch endpoints where available, and queue API calls instead of fanning out in parallel.
- **Otter's public API is Enterprise-only and in beta.** Do not plan a production integration on Otter's API unless you've confirmed Enterprise access. Zapier is the safer fallback for Otter.
- **Don't skip reconcile-polling.** Webhooks fail — network blips, deploy downtime, vendor-side bugs. Run a nightly job that lists meetings from the last 48h and fills gaps. This has saved every production integration we've seen.
- **PII and storage compliance.** Transcripts contain names, pricing, contract terms, sometimes PHI. If you're piping them to a warehouse, plan retention + access controls before the pipeline ships — not after Legal gets involved.
- **"Cheapest per seat" is misleading.** Fathom free looks great until you need Business-tier CRM sync; Fireflies Business limits monthly meetings per user. Price the plan you'd actually run, not the teaser.
- **Platform-specific conversation intelligence (Salesloft, Chorus, Seismic) ≠ replacement for a dedicated note-taker.** They're bolt-ons to existing tools. If you don't already use Salesloft/ZoomInfo/Seismic, don't buy them just for meeting recording — use a dedicated note-taker.

## Related skills

- `/sales-fathom` — Fathom platform help (REST API, webhook HMAC, OAuth, SDKs, MCP, pricing tiers)
- `/sales-fireflies` — Fireflies.ai platform help (GraphQL API, Webhooks V1 + V2, HMAC, AskFred, Real-time, MCP, rate limits per tier)
- `/sales-avoma` — Avoma platform help (REST API, webhooks, MEDDIC/BANT scorecards, Lead Router, pricing tiers)
- `/sales-gong` — Gong platform help (Revenue AI OS — call recording, Smart Trackers, coaching scorecards, deal boards, REST API, webhook automation, Forecast, Engage, MCP)
- `/sales-otter` — Otter.ai platform help (OtterPilot, live transcription, AI Chat, Zapier automation, CRM sync, pricing tiers)
- `/sales-fellow` — Fellow platform help (REST API, bot-based/bot-free recording, CRM sync, templates, pricing tiers)
- `/sales-grain` — Grain platform help (REST API, MCP Server for Claude/Cursor, video clips, Zapier automation, CRM sync, pricing tiers)
- `/sales-sembly` — Sembly platform help (agentic meeting intelligence, AI-generated deliverables, webhook automations, 10 native CRM connectors, pricing tiers)
- `/sales-read-ai` — Read.ai platform help (engagement/sentiment analytics, Search Copilot, REST API + MCP Server, webhook automations, CRM sync, pricing tiers)
- `/sales-meetgeek` — MeetGeek platform help (bot + no-bot recording, customizable templates, REST API with regional endpoints, MCP Server, 7 CRM connectors, conversation analytics)
- `/sales-jamie` — Jamie platform help (bot-free AI note-taker, REST API with personal/workspace keys, webhook automations, CRM sync to HubSpot/Salesforce/Attio, MCP server, EU privacy-first)
- `/sales-krisp` — Krisp platform help (noise cancellation + AI meeting notes, accent conversion, Voice AI SDK, webhook integrations, Call Center AI, pricing tiers)
- `/sales-colibri` — Colibri.ai platform help (real-time transcription, AI summaries, Sales Copilot with live guidance, conversation analytics, legal transcription, pricing tiers)
- `/sales-cluely` — Cluely platform help (real-time AI coaching overlay, pre-call briefs, knowledge base RAG, CRM sync via Merge.dev, coaching analytics, pricing tiers)
- `/sales-jamy` — Jamy.ai platform help (AI meeting assistant with real-time translation in 100+ languages, cross-language search, HubSpot CRM sync, API/webhooks, pricing tiers)
- `/sales-wave` — Wave platform help (mobile-first AI note-taker, REST API with semantic search and webhooks, MCP server, Voice ID, 76-language transcription, pricing tiers)
- `/sales-tldv` — tl;dv platform help (AI note-taker with unlimited free recordings, REST API v1alpha1, sales coaching with MEDDIC/BANT/SPIN playbooks, CRM sync, MCP server, pricing tiers)
- `/sales-claap` — Claap platform help (AI sales call assistant with no-bot recording, REST API + OAuth, CRM auto-enrichment, deal scoring, MCP connector, pricing tiers)
- `/sales-tactiq` — Tactiq platform help (Chrome extension bot-free note-taker, Zapier automation, native HubSpot/Salesforce/Pipedrive CRM sync, AI credits, pricing tiers)
- `/sales-hedy` — Hedy AI platform help (real-time AI meeting coach, REST API, webhooks, MCP server, Zapier/n8n automation, pricing tiers)
- `/sales-granola` — Granola platform help (bot-free AI notepad, REST API, MCP beta, HubSpot/Attio/Affinity CRM sync, Zapier automation, pricing tiers)
- `/sales-omi` — Omi AI platform help (open-source AI wearable necklace, Developer API, app marketplace with webhook integrations, in-person + online capture, pricing tiers)
- `/sales-bluedot` — Bluedot platform help (bot-free AI note-taker with video recording, Chrome extension + desktop/mobile apps, Svix webhooks, HubSpot/Salesforce CRM sync, screen recording, pricing tiers)
- `/sales-notta` — Notta platform help (AI meeting transcription in 58 languages, Notta Bot, Notta Brain cross-meeting AI, Zapier automation, CRM sync to Salesforce/HubSpot/Zoho/Freshsales/Salesflare)
- `/sales-lindy` — Lindy platform help (no-code AI agent builder — meeting notes are one module alongside email triage, calendar management, custom workflows, chatbots, AI phone agents)
- `/sales-rilla` — Rilla platform help (AI coaching for in-person/field sales, virtual ridealongs, mobile recording, CRM sync via Merge, home services focus)
- `/sales-salesask` — Sales Ask platform help (AI coaching for in-home + call center sales, Coach Dean active feedback, ServiceTitan/Jobber/Housecall Pro, home services focus)
- `/sales-sonnet` — Sonnet AI platform help (bot-free recording, auto-CRM update to HubSpot/Salesforce, domain templates for sales/legal/medical/recruiting, relationship tracker, concept maps)
- `/sales-supernormal` — Supernormal platform help (AI agent for agencies, bot-free recording, AI-generated deliverables from meetings, HubSpot/Salesforce/Pipedrive CRM sync, credit-based pricing)
- `/sales-voicetonotes` — VoiceToNotes platform help (ultra-cheap personal voice-to-text, HIPAA compliance, AI summaries/grammar/OCR, web + iOS + Android, no integrations)
- `/sales-outdoo` — Outdoo platform help (AI roleplay coaching, conversation intelligence, revenue intelligence, CRM automation, Open API, mid-market Gong alternative)
- `/sales-jiminny` — Jiminny platform help (conversation intelligence, revenue intelligence, coaching, 8 native CRM integrations, partial REST API, mid-market Gong alternative)
- `/sales-convin` — Convin platform help (contact center AI with 100% automated QA, Real-Time Assist, AI Phone Call agent, LMS, 70+ languages, no public API)
- `/sales-uniphore` — Uniphore platform help (enterprise Business AI Cloud — conversation intelligence, U-Assist real-time guidance, automated QA, CSATai, Emotion AI, ActionIQ CDP)
- `/sales-observe-ai` — Observe.AI platform help (enterprise contact center intelligence, 100% Auto QA, Agent Copilot, VoiceAI/ChatAI agents, 250+ integrations)
- `/sales-nice-cxone` — NICE CXone platform help (full CCaaS with built-in recording, QM, Interaction Analytics — evaluate whether built-in CI is sufficient or layer a dedicated tool on top)
- `/sales-enthu` — Enthu.AI platform help (contact center QA with auto-scoring on 100% of calls, agent coaching, compliance monitoring, affordable Gong/CallMiner alternative)
- `/sales-demodesk` — Demodesk platform help (AI conversation intelligence + coaching scorecards + autonomous AI agents, REST API V2, GDPR-native EU)
- `/sales-clari-copilot` — Clari Copilot platform help (real-time battlecards, live coaching, coaching scorecards, gametapes, Clari Core API, enterprise pricing)
- `/sales-speakwise` — Speakwise platform help (iOS-native in-person meeting recorder, on-device transcription, Notion integration, AirPods hands-free, 50+ languages, $59.99/yr)
- `/sales-sybill` — Sybill platform help (AI sales assistant — Magic Summaries, CRM Autofill, Deal Workspace, Ask Sybill, follow-up automation, pricing tiers)
- `/sales-salesken` — Salesken platform help (real-time in-call coaching, QA automation on 100% of calls, revenue intelligence, field sales analytics, multilingual, Salesforce/HubSpot/Zoho)
- `/sales-revenue-io` — Revenue.io platform help (Salesforce-native revenue orchestration, RingDNA dialer, Moments real-time coaching, CI on Orchestrate tier, no public API)
- `/sales-salesloft` — Salesloft Conversations (bolt-on conversation intelligence inside Salesloft)
- `/sales-zoominfo` — ZoomInfo Chorus (bolt-on conversation intelligence inside ZoomInfo)
- `/sales-seismic` — Seismic Meeting Intelligence (bolt-on inside Seismic)
- `/sales-rafiki` — Rafiki platform help (AI conversation intelligence with Smart Call Scoring MEDDIC/BANT/SPIN, CRM auto-sync, deal intelligence, role-play, $19-49/user/mo)
- `/sales-scratchpad` — Scratchpad platform help (Salesforce-native AI workspace — call recording, AI field updates, pipeline sheets, Hygiene Monitor, Gong integration)
- `/sales-laserfocus` — Laserfocus platform help (Salesforce overlay — Stacks, table views, bulk editing, precache technology, simpler/lighter than Scratchpad, YC "Inactive")
- `/sales-momentum` — Momentum platform help — AI revenue orchestration with optional CI add-on ($30/user/mo), automated CRM updates from calls, MEDDIC Autopilot (acquired by Salesforce Feb 2026)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-sonix` — Sonix platform help (batch AI transcription in 53+ languages, translation, SRT/VTT subtitles, video burn-in, REST API, SOC 2/HIPAA)
- `/sales-transcribeme` — TranscribeMe platform help (human+AI hybrid transcription, 99% accuracy on human tiers, HIPAA, REST API, .NET/Node.js SDKs)
- `/sales-verbit` — Verbit platform help (enterprise AI+human transcription, live captioning, accessibility compliance, Gen.V AI insights, REST API)
- `/sales-transkriptor` — Transkriptor platform help (AI transcription in 100+ languages, meeting bot, subtitles, sentiment analysis, REST API Enterprise-only, budget multilingual batch + live transcription)
- `/sales-temi` — Temi platform help (budget AI transcription at $0.25/min, Rev's engine, English-only, REST API, simplest batch transcription option)
- `/sales-noota` — Noota platform help (AI meeting assistant + recruitment automation, 7 CRMs, 15 ATS, voice agents, EU compliant)
- `/sales-dialpad` — Dialpad platform help (UCaaS + CCaaS, AI Recaps, AI Coaching Hub, Python SDK, Stats API)
- `/sales-meetily` — Meetily platform help (open-source local-first AI meeting assistant, Whisper/Parakeet transcription, Ollama summarization, MIT license, self-hosted)
- `/sales-char` — Char platform help (open-source bot-free AI notepad, formerly Hyprnote, 10 cloud STT providers + local Cactus, plugin SDK, automation hooks, GPL-3.0)
- `/sales-amical` — Amical platform help (open-source MIT AI dictation app, Whisper local STT, context-aware formatting, Ollama/OpenRouter LLM, push-to-talk voice-to-text)
- `/sales-handy` — Handy platform help (open-source cross-platform STT, Whisper + Parakeet dual-engine, push-to-talk, CLI flags, 20k+ GitHub stars)
- `/sales-plaud` — Plaud platform help (hardware AI voice recorder, NotePin/Note/Note Pro, VCS phone call recording, Developer API, 112-language transcription, pricing tiers)
- `/sales-iris-clarity` — IRIS Clarity platform help (bidirectional AI noise cancellation, Web SDK + Server SDK for embedding in VoIP apps, Talkdesk AppConnect, contact center audio quality)
- `/sales-sozai` — Soz AI platform help (mobile-first AI transcription, 100+ languages, YouTube URL paste, speaker diarization, subtitle generation, $9.99/mo unlimited)
- `/sales-shadow` — Shadow platform help (bot-free AI note-taker with audio + screen capture, macOS-only, on-device transcription, autopilot detection, $8/mo)
- `/sales-happyscribe` — HappyScribe platform help (batch AI + human transcription in 120+ languages, subtitle generation, REST API, 15+ export formats, SOC 2/GDPR)
- `/sales-circleback` — Circleback platform help (AI meeting notes, cross-meeting search, webhook automations with HMAC signing, MCP server, bot + botless recording, Slack huddles)
- `/sales-cirrus-insight` — Cirrus Insight platform help (Salesforce-native Meeting AI, Conversation Intelligence, Live Coaching, modular pricing)
- `/sales-monday-notetaker` — monday.com AI Notetaker platform help (native meeting recording inside monday.com, action items → board items, GraphQL API)
- `/sales-memoro` — Memoro platform help (German GDPR-first AI meeting assistant, bot-free local recording, customizable Blueprints, searchable Memories, 50+ language transcription, €0-42/mo)
- `/sales-minuteslink` — MinutesLink platform help (budget AI meeting note-taker, bot + Chrome extension recording, shareable summary links, Google Meet/Zoom, $0-24/mo)
- `/sales-audiopen` — AudioPen platform help (voice-to-polished-text with custom writing styles, SuperSummaries, one-time payment, Zapier automation)
- `/sales-talknotes` — TalkNotes platform help (AI voice note app, 100+ templates, Zapier automation, 50+ languages, subscription pricing)
- `/sales-letterly` — Letterly platform help (AI speech-to-content with 25+ rewrite formats, 90+ languages, offline recording, Zapier/webhooks, content creators)
- `/sales-cleftnotes` — Cleft Notes platform help (Apple-native AI voice-to-notes, on-device transcription, ADHD-friendly auto-organization, Obsidian/Notion sync, $0-29/yr)
- `/sales-noted` — Noted platform help (Apple-ecosystem voice recorder + note-taker, timestamped audio linking, AI Transcribe, Apple Pencil, $0-9.99/mo or $89.99 lifetime)
- `/sales-scribbl` — Scribbl platform help (bot-free Chrome extension AI note-taker for Google Meet, AI Copilot chat, instant summaries/action items, 40+ languages, $0-20/user/mo)
- `/sales-audionotes` — Audionotes platform help (multi-format AI note-taker — voice/text/image/video/YouTube, 100+ templates, WhatsApp Bot, webhook + Zapier + Notion sync, 80+ languages, $0-10.83/mo)
- `/sales-bubbles` — Bubbles platform help (async video messaging + AI meeting note-taker, screen recording, Zapier automation, no API/CRM, $0-18/mo)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: SMB team picking a note-taker on a budget
**User says**: "I run a 6-person SaaS sales team on HubSpot. Which AI note-taker should we pick — we don't want to pay Gong prices."
**Skill does**:
1. Rules out Gong (budget), Otter (thin CRM), Fellow (not sales-first)
2. Short-lists Fathom Business ($20/seat) and Fireflies Business ($19/seat) — both have HubSpot native sync
3. Recommends Fathom if the team values a generous free tier for individual reps and simpler setup; Fireflies if the team wants conversation search + topic analytics
4. Notes Avoma ($29/seat) as the upgrade path if they later want methodology scorecards (MEDDPICC/BANT)
**Result**: Clear 2-option shortlist with a decision tiebreaker, and an upgrade path.

### Example 2: Building a transcript pipeline to Snowflake
**User says**: "I need to pipe every Fireflies transcript into Snowflake so the data team can build dashboards. What's the architecture?"
**Skill does**:
1. Recommends webhook-first architecture (Fireflies `Transcription completed` event)
2. Sketches the flow: Fireflies webhook → API Gateway/Lambda → validate `x-hub-signature` → enqueue → worker calls `https://api.fireflies.ai/graphql` for full transcript → write raw JSON to S3 + normalized rows to Snowflake via Snowpipe
3. Flags GraphQL complexity limits — fetch transcript sentences in one query, fetch audio/summary separately
4. Adds nightly reconcile job that lists last 48h of meetings to catch missed webhooks
5. Points to `/sales-integration` if they want iPaaS (Workato, Boomi) instead of custom
**Result**: A production-shaped architecture with specific endpoints, known rate-limit pitfalls, and a reconcile safety net.

### Example 3: Webhook vs polling for Otter
**User says**: "We're on Otter and want transcripts in Slack within a minute of a call ending. Webhook or polling?"
**Skill does**:
1. Confirms Otter public API is Enterprise-only beta — asks if they have that tier
2. If yes: use Workspace Webhooks (they exist) — point directly at a Slack-forwarding service
3. If no Enterprise access: fall back to Zapier's Otter integration (pre-built Slack action)
4. Warns that Otter's beta API limits are undocumented — test end-to-end before committing
5. Suggests evaluating Fathom free tier or Fireflies free tier if the real requirement is "cheap + real-time + Slack"
**Result**: Grounded answer specific to Otter's reality, with a fallback if their tier doesn't support it.

## Troubleshooting

### Webhook fires but transcript is empty or truncated
**Symptom**: Payload arrives on `transcription.completed` but the transcript body is partial or blank
**Cause**: Most vendors fire the event as soon as ASR completes — AI summary, speaker diarization, and action items are still being generated on the vendor side
**Solution**: Either subscribe to a separate `summary.ready` / `processing.completed` event (Fathom, Fireflies offer one) or re-fetch from the meeting-detail endpoint 60-180 seconds after the initial webhook. Add a small queued retry with exponential backoff.

### Rate limits hitting 429 in production
**Symptom**: Gong or Fireflies returning 429 during transcript backfill or high-volume days
**Cause**: Backfilling in parallel or fanning out transcript fetches for every new webhook without queuing
**Solution**: Queue outbound API calls with a token-bucket rate limiter tuned below the published limit (e.g., 2 req/sec for Gong's 3/sec limit). Honor the `Retry-After` header, not a fixed sleep. Cache call metadata so you don't re-fetch it on every downstream consumer.

### Transcript format differs across vendors — downstream queries break
**Symptom**: A change from Fathom to Fireflies (or adding a second vendor) breaks every analytics query
**Cause**: No common schema — each vendor's payload is piped into the warehouse verbatim
**Solution**: Add a `normalize_transcript(vendor, payload)` step between ingest and warehouse. Store raw JSON in S3/GCS (audit/reprocessing), but write only the normalized schema to the warehouse. Common fields: `meeting_id, vendor, external_id, started_at, duration_s, participants[], transcript[{speaker, ts_ms, text}], summary_md, action_items[], recording_url`. When adding a new vendor, all you touch is the normalizer.
