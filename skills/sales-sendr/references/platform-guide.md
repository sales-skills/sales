# Sendr Platform Reference

## Platform overview

Sendr is an AI-powered personalized outreach platform that combines lead discovery (479M+ B2B contacts), data enrichment, lipsync video personalization, dynamic landing pages, and campaign sequencing in one tool. Founded October 2023 in Devon, UK (1-10 employees, pre-seed). Positioned as an all-in-one replacement for separate data, enrichment, and video tools — a lighter alternative to Outreach.io or Salesloft for teams that want visual personalization at scale.

**Target audience:** SDR teams, agencies, recruiters, and growth-focused companies needing personalized video outreach at scale. Best fit for high-velocity teams where "human connection" is the bottleneck.

**Key differentiators:**
- Lipsync video personalization at scale (not manual Loom recordings)
- Dynamic landing pages that adapt per contact (prospect's website as background)
- Built-in lead database + enrichment (no separate Apollo/ZoomInfo subscription needed for basics)
- Credit-based pricing (pay for what you use, not per-seat)

## Key modules

### Lead Finder
- 479M+ global B2B contacts, refreshed monthly
- ICP-based filtering and intent signal targeting
- Personality analysis for outreach tone matching
- Export to Sheets (Sendr's internal data structure) or via API

### Data Studio
- Email verification and enrichment
- Contact cleaning and deduplication
- Personality analysis classification (e.g., "high green" personality)
- Bulk operations on Sheets

### Campaigns
- Email campaign sequencing with multi-step flows
- Adaptive sequences triggered by page visits, video views, buying signals
- Campaign status: DRAFT, ACTIVE, PAUSED
- Performance tracking and optimization

### Lipsync Video
- Record one base video, automatically personalize for hundreds of prospects
- Dynamic audio inserts prospect's name/company with AI voice
- Optional ElevenLabs voice ID integration for custom voices
- Video zooms to circular bubble over prospect's website during personalized audio (masks lack of true lip animation)
- Two modes: merge (audio overlay) and lipsync (full generation)

### Dynamic Pages
- Personalized landing pages generated per contact
- GIF previews for email embedding
- Custom templates with variables (tag, example, label, fallback)
- Chrome extension for on-demand page creation
- Screenshot of prospect's website as page background
- Webhook triggers on page visit, button click, video view

### Automations
- Pre-built Zapier workflows (GTM automation templates)
- Make integration
- No-code automation builder (Pro plan only)
- Webhook-based triggers for external tool integration

### Chrome Extension
- Create personalized pages directly from browser
- On-demand personalization while browsing prospect profiles

## Pricing and limits

| Plan | Monthly cost | Credits/mo | Lipsync videos/mo | Key features |
|---|---|---|---|---|
| **Growth** | $97 | 2,500 | 500 | Lead Finder, Data Studio, Dynamic Pages, Chrome Extension, 1 team invite |
| **Pro** | $249 | 20,000 | 1,000 | Everything in Growth + Automation Builder, API/Webhooks, unlimited team, custom domain |

**AppSumo lifetime deal** (sold out Jan 2026): $69-$399 one-time for 500-5,500 credits/mo and 200-750 lipsync videos/mo. Tiers 3-4 included API access.

**Credit economics:**
- Each fully personalized contact costs ~3 credits (dynamic audio + website background + page)
- Credits do NOT roll over month to month
- Lipsync video quota is separate from general credits
- Add-ons available beyond base plans

**Plan-gated features:**
- API and webhooks: Pro only
- Automation builder: Pro only
- Custom domains: Pro only
- Unlimited team invites: Pro only (Growth has 1 invite)

## Integrations

| Integration | Type | Details |
|---|---|---|
| HubSpot | Native | CRM sync |
| Zapier | Native | Pre-built flows for page generation, campaign triggers |
| Make | Native | Scenario-based automation |
| API | REST | OpenAPI 3.1.0 — Pro plan only |
| Webhooks | Outbound | Page visit, button click, video view events |
| Chrome Extension | Browser | On-demand personalization |

## Data model (API)

**Key objects:**
- **Sheets** — contact lists with rows and columns (similar to spreadsheets)
- **Campaigns** — email sequences with DRAFT/ACTIVE/PAUSED states
- **Page Templates** — reusable personalized page designs with variables
- **Webhooks** — event subscriptions for engagement tracking

**Authentication:** API key via `X-API-Key` header (generate from Sendr settings). Also supports Bearer JWT and session cookies.

**Base URL:** `https://api.sendr.io`

## Workflow setup

### Workflow 1: Personalized video outreach at scale
1. **Find leads** — use Lead Finder to search by ICP criteria
2. **Enrich** — run Data Studio to verify emails and add personality data
3. **Create template** — design a dynamic page template with video placeholder
4. **Record base video** — one take with clear pause for name insertion
5. **Generate** — batch-generate personalized pages + videos via API or UI
6. **Send** — embed GIF preview in email via your sending tool (Apollo, Instantly, etc.)
7. **Track** — monitor page visits, video views, button clicks via webhooks

### Workflow 2: API-driven page generation from Clay/n8n
1. **Set up Sendr API key** (Pro plan required)
2. **List templates** — `GET /api/v1/page-template/list`
3. **Get variables** — `GET /api/v1/page-template/{id}/variables`
4. **Generate page** — `POST /api/v1/enrichment/sendr-page` with variable values
5. **Receive webhook** — page URL and GIF returned for embedding in outreach

### Workflow 3: Dynamic audio personalization
1. **Record base audio** with placeholder words
2. **Generate dynamic audio** — `POST /api/v1/enrichment/dynamic-audio` with target/replacement words
3. **Optionally combine with video** — `POST /api/v1/enrichment/generate-video`
4. **Embed in page or email** — use GIF preview for email, full video on landing page

## Deep dives

### Credit optimization
- Skip dynamic audio for lower-priority prospects (text-only pages = fewer credits)
- Use API batch generation instead of UI one-by-one (more efficient)
- Focus lipsync videos on high-value prospects only (500-1,000/mo limit)
- Monitor Settings → Usage for per-operation credit breakdown

### Sending via external tools
Sendr doesn't send emails directly — it creates the personalized content. Common sending stacks:
- **Apollo** — use Sendr page URLs in Apollo sequence emails
- **Instantly** — embed Sendr GIFs in Instantly campaign steps
- **Smartlead** — include dynamic page links in Smartlead sequences
- **Lemlist** — pair Sendr video with Lemlist's own image personalization

### ISO 27001 & compliance
- ISO 27001 certified
- GDPR-aligned data handling
- B2B data compliance (479M+ contacts from compliant sources)
- 30-day data refresh cycle reduces stale/invalid contacts
