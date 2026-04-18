# Sales Note-Taker Platforms — Selection & API Reference

Per-platform detail for selection and backend API integration. Pricing is best-effort as of 2026-04 — verify on vendor site before quoting a customer.

**Platform details are split by buyer segment:**

| File | What's in it | Platforms |
|---|---|---|
| `platforms-smb.md` | Budget-friendly tools under ~$50/user/mo, strong free tiers | Fathom, Fireflies, Otter, MeetGeek, Tactiq, Granola, Wave, Bluedot, Notta, Sonnet, Supernormal, VoiceToNotes, Hedy, Colibri, Jamy |
| `platforms-midmarket.md` | Sales-focused CI with coaching, methodology, CRM enrichment | Avoma, tl;dv, Claap, Grain, Sembly, Read.ai, Fellow, Jamie, Krisp, Cluely, Lindy, Outdoo, Jiminny, Enthu.AI, Demodesk, Salesken |
| `platforms-enterprise.md` | Enterprise revenue intelligence ($1K+/user/yr) + bolt-on CI | Gong, Clari Copilot, + Salesloft Conversations, Chorus, Seismic, Revenue.io |
| `platforms-field.md` | In-person/field sales coaching and mobile recording | Rilla, Siro, Sales Ask, Omi |

**Read the file that matches the user's segment.** For comparison questions spanning segments, read multiple files.

## Quick comparison

| Platform | Category | Free tier | Starting paid | API | Webhooks | CRM depth | Best for |
|---|---|---|---|---|---|---|---|
| Fathom | AI note-taker | Yes (unlimited) | $16/mo | REST | Yes | Medium (Business+) | Budget-conscious SMB/indie sales |
| Fireflies.ai | AI note-taker | Yes (limited) | $10-$19/mo | GraphQL | Yes | Medium (Business+) | Mid-market, conversation search |
| Avoma | Meeting lifecycle | No | $19/seat | REST | Yes | Deep | Mid-market sales + CS, methodology |
| Gong | Revenue intelligence | No | ~$1,200-1,600/user/yr | REST | Yes (extensive) | Deep | Enterprise sales + coaching |
| Otter.ai | Transcription | Yes | $17-30/mo | REST (Enterprise beta) | Yes (Workspace) | Thin | General meetings, non-sales |
| Fellow | Meeting management | Yes (5 lifetime) | $7-15/user | REST | Yes (Zapier) | Medium (Business+) | Manager 1:1s, leadership meetings |
| Grain | AI meeting recorder | Yes (20 meetings) | $15-39/seat | REST (Business+) | Yes (Zapier) | Medium (Business+) | GTM teams, clip sharing, MCP |
| Sembly | Agentic meeting intelligence | No (trial only) | $17-39/user | Webhook-first | Yes | Medium (10 CRMs) | Professional services, deliverables, task automation |
| Read.ai | Meeting AI | Yes | $15-30/seat | Webhook-first | Yes | Medium | Engagement/sentiment analytics |
| MeetGeek | AI meeting assistant | Yes (3 hrs/mo) | $9.99/mo | REST | Yes | Medium (7 CRMs) | Teams wanting customizable templates, analytics, affordable pricing |
| Jamie | Bot-free AI note-taker | Yes (10 meetings) | €21/mo | REST | Yes (Plus+) | Medium (3 CRMs, Pro+) | Privacy-first EU teams, in-person meetings, bot-free recording |
| Krisp | Voice AI + note-taker | No (7-day trial) | $8/mo | Webhooks | Yes (Advanced+) | Medium (HubSpot Core+, SF Advanced+) | Noisy environments, noise cancellation + AI notes, SDK developers |
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
| Supernormal | AI agent for agencies | Yes (15 credits/mo) | $10-18/mo | None (Zapier only) | None | Medium (HubSpot/Salesforce/Pipedrive) | Agencies wanting AI-generated deliverables (decks, briefs, emails) from meetings |
| VoiceToNotes | Personal voice-to-text | Yes (10/day, 300 min/mo) | $1/mo | None (Pro Annual only, undocumented) | None | None | Ultra-cheap personal voice notes, HIPAA compliance, OCR |
| Outdoo | AI roleplay + coaching + revenue intelligence | Yes (limited) | ~$660-1,200/user/yr | REST (Enterprise only) | None documented | Deep (11 CRMs, auto-fill) | Closed-loop coaching: AI roleplay + real-call scoring + CRM auto-fill, mid-market Gong alternative |
| Jiminny | Conversation + revenue intelligence | No (14-day trial) | $83/mo (Recording) | REST (partial) | None documented | Deep (8 CRMs native) | Coaching-focused conversation intelligence, mid-market, no platform fee |
| Enthu.AI | Contact center QA + coaching | No (free trial) | ~$15-69/user/mo | Not published | Not published | Medium (HubSpot/Pipedrive/Bullhorn/Close) | Contact center QA auto-scoring on 100% of calls, compliance, affordable |
| Demodesk | AI sales meeting platform + coaching + agents | Yes (14-day trial) | €49/user/mo | REST (V2) | Yes (13 events) | Deep (Salesforce/HubSpot/Pipedrive) | AI-first conversation intelligence with autonomous agents, GDPR-native EU teams |
| Clari Copilot | Revenue CI + live coaching | No (30-day trial) | ~$60/user/mo | REST (Core API, Enterprise) | None documented | Deep (Salesforce/HubSpot/Pipedrive) | Enterprise CI tightly integrated with Clari revenue forecasting, real-time battlecards |
| Salesken | Real-time coaching + QA + revenue intel | No | ~$99/mo | Not published (Enterprise API) | Not published | Deep (Salesforce/HubSpot/Zoho native) | Real-time in-call coaching, 100% QA scoring, APAC/multilingual, field sales |
| Omi | Open-source AI wearable | Yes (1,200 min/mo) | $19/mo | REST | Yes (app marketplace) | None | All-day in-person capture, developer extensibility, lowest price ($89 hardware) |
