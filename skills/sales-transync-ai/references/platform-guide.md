# Transync AI Platform Reference

## Overview

Real-time AI meeting translation platform with near-zero latency (<0.5s), supporting 60+ languages and 1,770+ language pairs. Differentiator: dual-screen bilingual display showing original and translated speech side-by-side, plus AI voice broadcast. Targets multilingual business teams, foreign trade professionals, and cross-border freelancers.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| Real-time translation | Simultaneous bilingual speech-to-text translation with <0.5s latency | UI-only |
| Dual-screen display | Side-by-side original + translated text with speaker identification | UI-only |
| AI voice broadcast | Natural voice output in target language with multiple voice options | UI-only |
| AI meeting notes | Automatic transcription + translation + summary generation | UI-only |
| AI Assistant | Custom keywords and context for domain-specific terminology accuracy | UI-only |
| Speaker auto-detection | Identifies speakers and auto-detects source language | UI-only |
| Organization knowledge base | Shared terminology database across enterprise team (Enterprise only) | UI-only |

**No API, no webhooks, no SDK, no Zapier/Make integrations.** All interaction is through the desktop/mobile/web app. Transcript and note export is manual.

## Pricing, limits & plan gates

| Plan | Price | Monthly hours | Key features | Overage |
|---|---|---|---|---|
| Free | $0 | 40 min (one-time) | All core features, 60+ languages | N/A — must upgrade |
| Personal Premium | $8.99/mo | 10 hrs | All core features | Buy time cards |
| Enterprise | $24.99/seat/mo | 40 hrs/seat | Org management, knowledge base, compliance docs | $0.70/hr from org pool |

### Time cards (pay-as-you-go top-up)

| Hours | Price | Per-hour rate | Discount |
|---|---|---|---|
| 1 hr | $0.70 | $0.70 | — |
| 10 hrs | $7.99 | $0.80 | 7.7% |
| 30 hrs | $22.99 | $0.77 | 15.4% |
| 100 hrs | $69.99 | $0.70 | 23.3% |

### Enterprise volume discounts (annual spend thresholds)

| Annual spend | Discount |
|---|---|
| $1,000 | 2% |
| $3,000 | 5% |
| $5,000 | 8% |
| $10,000+ | 10% (maintained year-over-year) |

**Plan-gated features:**
- Organization knowledge base → Enterprise only
- Unified account management → Enterprise only
- GDPR/ISO 27001/SOC 2 Type II compliance documentation → Enterprise only (certifications in progress as of 2026-04)

## Integrations

Transync AI integrates with meeting platforms via **system audio sharing** — it listens to the device's audio output rather than joining as a bot or requiring a plugin.

| Platform | Integration method | Notes |
|---|---|---|
| Zoom | System audio capture | No bot joins the meeting — privacy-friendly |
| Microsoft Teams | System audio capture | Works with desktop app |
| Google Meet | System audio capture | Works via browser audio |
| WhatsApp | Device audio routing | Phone audio must route to Transync device |
| In-person | Device microphone | Place device near speakers |

**No CRM connectors.** No data export API. No Zapier/Make triggers or actions. Meeting notes and transcripts remain inside Transync AI — export is copy/paste or manual download.

## Data model

No API means no programmable data model. Key in-app objects:

- **Meeting**: Contains transcript, translations, speaker identification, timestamps
- **Meeting notes**: AI-generated summary with action items
- **AI Assistant context**: Custom keywords and domain terminology per user/org
- **Organization** (Enterprise): Shared knowledge base, seat management, usage pool

## Setup workflows

### Setting up for Zoom meetings (macOS)

1. Download Transync AI from https://www.transyncai.com/download/
2. Install and sign in
3. Grant **Screen Recording** permission: System Settings → Privacy & Security → Screen Recording → enable Transync AI
4. Start your Zoom meeting
5. Open Transync AI, select source and target languages
6. Transync AI captures system audio and displays dual-screen translations

### Setting up for Microsoft Teams (Windows)

1. Download and install from https://www.transyncai.com/download/
2. Sign in to Transync AI
3. Start your Teams meeting (desktop app)
4. Open Transync AI, select languages
5. Transync captures desktop audio output automatically

### Configuring AI Assistant for domain terminology

1. Open AI Assistant panel before the meeting
2. Add keywords: industry terms, product names, acronyms
3. Add context: brief description of meeting topic (e.g., "Manufacturing safety inspection meeting discussing PPE compliance")
4. The AI uses these to improve accuracy for domain-specific vocabulary

## Quick-start recipes

Since Transync AI has no API, these are UI workflow recipes rather than code recipes.

### Recipe 1: Weekly multilingual standup

**Trigger:** Recurring Zoom/Teams meeting with speakers in 2+ languages
**Steps:**
1. Create AI Assistant context with team-specific vocabulary
2. Enable AI meeting notes for automatic summaries
3. Share dual-screen view or enable AI voice broadcast for non-bilingual participants
4. After meeting, copy AI-generated summary and action items to your project tool
**Gotcha:** 10 hrs/mo on Personal Premium = ~2.5 hrs/week. If standups exceed this, buy a 10-hr time card ($7.99).

### Recipe 2: Enterprise deployment for global team

**Trigger:** 10+ seat team needing standardized translation
**Steps:**
1. Set up Enterprise org at $24.99/seat/mo
2. Build organization knowledge base with company-specific terminology
3. Each seat gets 40 hrs/mo — pool-level overage at $0.70/hr
4. Monitor usage to hit $1K annual spend threshold for 2% discount
**Gotcha:** Overage is deducted from the org automatically — set alerts to avoid surprise charges.

### Recipe 3: Conference/event translation

**Trigger:** Large meeting or event with multilingual audience
**Steps:**
1. For each language pair needed, set up a Transync AI instance
2. Share screen with dual-screen display for the audience
3. Enable AI voice broadcast so translated audio plays in real-time
4. Use AI meeting notes to generate multilingual summaries post-event
**Gotcha:** For events needing human interpreters or 80+ platform integrations, consider KUDO or Interprefy instead.

## Integration patterns

### Manual transcript export workflow

Since there's no API, the most common integration pattern is manual:

1. After meeting ends, open AI meeting notes in Transync AI
2. Copy the transcript/summary
3. Paste into CRM (HubSpot, Salesforce) meeting activity record
4. Paste action items into task management tool (Asana, Jira, Notion)

**Limitation:** This cannot be automated. If you need automated CRM sync, consider JotMe (Zapier), Fireflies.ai (API + webhooks), or Fathom (REST API + MCP).

## Competitive positioning

| Feature | Transync AI | JotMe | Langfinity | Talo |
|---|---|---|---|---|
| Latency | <0.5s | 3-4s | ~1s | ~1s |
| Languages | 60+ | 107 | 50+ | 60+ |
| Pricing (entry) | $8.99/mo | $10/mo | Pay-as-you-go | $33/mo |
| API | None | None | None | None |
| CRM integration | None | Enterprise only | None | None |
| Dual-screen | Yes | No | No | No |
| Voice broadcast | Yes | No | Yes (AI avatars) | No |
| Domain terminology | AI Assistant | Custom vocabulary | Domain-specific | No |
| Bot-free | Yes (system audio) | Yes (system audio) | Yes (native integration) | No (bot joins) |
