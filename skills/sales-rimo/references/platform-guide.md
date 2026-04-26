# Rimo Voice Platform Reference

## Overview

Rimo Voice is a Japanese-origin AI meeting transcription and summarization tool built by Rimo LLC. Its primary differentiator is high-precision Japanese language processing (kanji, katakana, punctuation) with ISO 27001/27017 compliance and data stored exclusively in Japan GCP. Supports 20+ languages but is optimized for Japanese-first teams.

## Capabilities & automation surface

| Module | What it does | Automation surface |
|---|---|---|
| Bot recording | Joins Zoom/Teams/Meet/Webex meetings via calendar integration | UI-only (schedule via calendar or manual invite) |
| AI transcription | High-precision speech-to-text with speaker separation, noise/filler removal | UI-only (no API) |
| AI summaries | Generates discussion points, action items, customizable summary formats | UI-only — consumes AI credits |
| AI chat | Query meeting content with natural language questions | UI-only — consumes AI credits |
| Speaker separation | Voiceprint registration for automatic speaker attribution | UI-only |
| Dictionary | Register industry-specific terminology for better accuracy | UI-only |
| Collaborative editing | Real-time multi-user editing of transcripts/notes | UI-only |
| Data export | CSV, Excel, PDF export of transcripts | UI-only (manual export) |
| Slack notifications | Sends notification when meeting transcription completes | Built-in integration |
| Calendar integration | Google Calendar and Outlook for auto-scheduling bot | Built-in integration |

**No public API, no webhooks, no Zapier/Make connectors, no MCP server.**

## Pricing, limits & plan gates

All prices best-effort as of 2026-04 — verify on rimo.app.

### English pricing (rimo.app/en)

| Plan | Launch price | Regular price | AI credits | Key features |
|---|---|---|---|---|
| Solo | $9/mo | $18/mo | 100/mo | Unlimited transcription, bot recording, AI summaries, AI chat |
| Business | $15/mo | $30/mo | 1,000/mo | All Solo + team management, shared folders, team-wide analysis |

- Annual billing: up to 33% additional discount
- Free trial: no credit card required
- Launch pricing: 50% off, locked in while subscription is active

### Japanese pricing (rimo.app)

| Plan | Price | Key differences |
|---|---|---|
| Transcription | ¥1,650/mo | 2,100 min/mo, 30-day storage, no AI summaries |
| Pro | ¥4,950/mo | Unlimited, AI summaries, AI chat, 1,000 credits |
| Team | ¥6,600/mo | All Pro + team management, shared folders |
| Corporate | Custom (11+ seats) | All Team + usage logs, IP restrictions, SSO, invoice billing, unlimited storage |

### Plan gates

| Feature | Solo | Business | Corporate |
|---|---|---|---|
| Unlimited transcription | Yes | Yes | Yes |
| AI summaries | Yes | Yes | Yes |
| AI chat | Yes | Yes | Yes |
| Team management | No | Yes | Yes |
| Shared folders | No | Yes | Yes |
| Team-wide analysis | No | Yes | Yes |
| SAML/OIDC SSO | No | No | Yes |
| IP restrictions | No | No | Yes |
| Audit logging | No | No | Yes |
| Invoice billing | No | No | Yes |
| Unlimited data storage | No | No | Yes |

## Integrations

Rimo's integration surface is thin:

- **Calendar**: Google Calendar, Outlook — for auto-scheduling the recording bot
- **Meeting platforms**: Zoom, Microsoft Teams, Google Meet, Webex (bot joins meetings)
- **Notifications**: Slack, Email — notification when transcription completes
- **Export**: Manual CSV/Excel/PDF download

**No CRM connectors** (HubSpot, Salesforce, etc.)
**No iPaaS** (Zapier, Make, n8n)
**No API** (announced as "upcoming")

### Workarounds for integration needs

1. **Manual export** — Download CSV/Excel/PDF after each meeting and upload to CRM
2. **Slack notification → automation** — Use Slack's workflow builder or Zapier's Slack trigger to detect Rimo completion notifications and trigger downstream actions (lossy — no transcript data in the notification)
3. **Pair with another tool** — Use Rimo for Japanese-optimized transcription, then manually transfer key insights to a CRM or note system

## Data model

No API means no programmatic data model. Export formats:

**CSV export** contains:
- Meeting title, date, duration
- Speaker-labeled transcript segments
- Timestamps

**PDF export** contains:
- Formatted meeting summary
- Full transcript with speaker labels
- Action items (if generated)

<!-- No API — data model is export-only. Verify export field structure against actual exports. -->

## Security & compliance

| Certification | Status |
|---|---|
| ISO/IEC 27001 | Certified |
| ISO/IEC 27017 | Certified (cloud-specific) |
| Data hosting | Japan GCP exclusively |
| SSO | SAML and OIDC (Corporate plan) |
| IP restrictions | Corporate plan only |
| Audit logging | Corporate plan with timestamps |
| AI training | No user data used for AI training |

## Quick-start recipes

### Recipe 1: Set up Rimo for a Japanese sales team

**Trigger**: New team wants Japanese meeting transcription with compliance

**Steps**:
1. Sign up at rimo.app — start free trial (no credit card)
2. Connect Google Calendar or Outlook Calendar in Settings
3. Register custom terminology (product names, industry jargon) in the Dictionary
4. Register voiceprints for team members (Settings → Speaker Separation)
5. Schedule a test meeting — Rimo bot should auto-join
6. After meeting, review AI summary and transcript accuracy
7. Upgrade to Business plan ($15/mo) for team folders and shared access

**Gotchas**:
- Voiceprint registration requires each person to record a sample — do this before the first real meeting
- Dictionary entries improve accuracy for domain terms but take effect on new recordings only
- Bot may take 30-60 seconds to join after meeting starts

### Recipe 2: Export meeting data for manual CRM entry

**Trigger**: Need meeting insights in CRM but no API available

**Steps**:
1. After meeting completes, wait for Slack/email notification
2. Open the meeting in Rimo Voice web app
3. Review and edit the AI summary for accuracy
4. Click Export → select CSV or PDF
5. Open CRM (HubSpot/Salesforce) → find the contact/deal
6. Attach or paste the summary into the meeting notes field

**Gotchas**:
- CSV export includes raw transcript segments — useful for structured data entry
- PDF export is better formatted for attaching as a document
- AI summary quality depends on remaining AI credits — if depleted, only raw transcript is available

### Recipe 3: Optimize Japanese transcription accuracy

**Trigger**: Transcription quality isn't meeting expectations

**Steps**:
1. Register custom dictionary terms: company names, product names, industry acronyms
2. Register voiceprints for all regular meeting participants
3. Ensure microphone quality — Rimo removes noise but can't fix poor input
4. For in-person meetings with remote participants, use a conference speakerphone with directional mics
5. Review the first 2-3 meetings and correct errors — note patterns
6. If specific terms are consistently wrong, add phonetic hints in the dictionary

**Gotchas**:
- Non-Japanese speakers in a Japanese meeting may have lower accuracy — register them with voiceprints
- Background music or overlapping speakers degrade accuracy significantly
- Dictionary changes only apply to new recordings, not retroactively
