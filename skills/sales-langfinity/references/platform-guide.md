# Langfinity Platform Reference

## Overview

Langfinity (formerly Byrdhouse AI, langfinity.ai) is a real-time voice-to-voice AI meeting translation platform. It translates speech during live video calls so participants can speak their own language while hearing others in theirs. Differentiator: domain-specific terminology customization (manufacturing, safety, technical) + AI voice avatars for natural-sounding dubbed output. Targets global teams with recurring multilingual meetings — lighter-weight than enterprise RSI platforms (KUDO, Interprefy).

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| Real-time voice-to-voice translation | AI translates spoken language to listener's preferred language in real-time | UI-only |
| AI voice avatars | Natural-sounding voiced translation (not just captions) — "dubs" the speaker | UI-only |
| Domain-specific terminology | Company/industry-specific language model fine-tuning for jargon, acronyms, technical terms | UI-only (contact sales) |
| Multi-speaker detection | Automatically identifies speakers and their languages without manual configuration | UI-only |
| Real-time multilingual captions | Live subtitle overlay in participants' preferred languages | UI-only |
| Multilingual meeting notes | Post-meeting transcripts, summaries, and notes generated in each participant's language | UI-only |
| Microsoft Teams integration | Native integration — works inside Teams meetings | UI-only |
| Zoom integration | Native integration — works inside Zoom meetings | UI-only |
| Google Meet integration | Native integration — works inside Google Meet meetings | UI-only |
| QR code event access | Event attendees scan a QR code to access translation without installing anything | UI-only |

**No public API, webhooks, MCP server, or iPaaS connectors.** All functionality is UI-driven. There is no programmatic access to meetings, transcripts, translations, or configuration.

## Pricing, limits & plan gates

Pricing details are partially obscured (JS-rendered pricing page). Best-effort from research:

| Plan | Pricing model | Minimum commitment | Languages | Participants |
|---|---|---|---|---|
| Starter | Pay-as-you-go | None | 1 language pair | Multiple per session |
| Pro | Subscription + volume discount | 20 hours/year | Up to 50 languages | Multiple per session |
| Business | Custom (contact sales) | 100 hours/year | Unlimited | Unlimited |

**Key pricing notes:**
- Free trial available on Starter plan
- Exact per-hour rates are not publicly documented — contact Langfinity sales
- Pro and Business likely include domain-specific terminology customization
- No self-serve purchase documented for Business tier

**Plan-gated features (inferred):**
- Starter: single language pair, pay-as-you-go, basic features
- Pro: multiple languages, volume discounts, likely domain customization
- Business: unlimited languages/participants, custom onboarding, dedicated support

## Integrations

| Integration | Type | Notes |
|---|---|---|
| Microsoft Teams | Native | Lowest latency option — built-in integration |
| Zoom | Native | Direct Zoom integration |
| Google Meet | Native | Direct Google Meet integration |

**No CRM integration.** No Salesforce, HubSpot, or any CRM connector.
**No Zapier/Make/iPaaS.** No automation connectors of any kind.
**No webhook or callback support.** Cannot trigger external actions from meeting events.

## Data model

Langfinity does not expose a public API. There are no programmatic data objects accessible externally.

**Post-meeting outputs (UI-only access):**

```json
// Representative structure — NOT from API docs
// Accessed through Langfinity dashboard only
{
  "meeting": {
    "date": "2026-04-24T14:00:00Z",
    "duration_minutes": 45,
    "platform": "teams",
    "languages_used": ["en", "de", "ja", "pt"]
  },
  "transcript": {
    "segments": [
      {
        "speaker": "Speaker 1",
        "language": "en",
        "text": "Let's review the tolerance stack-up analysis",
        "timestamp": "00:01:23"
      }
    ]
  },
  "summary": {
    "language": "en",
    "text": "Team reviewed Q2 manufacturing quality metrics..."
  },
  "notes": [
    {
      "language": "de",
      "text": "Team hat Q2 Fertigungsqualitätskennzahlen überprüft..."
    }
  ]
}
```
<!-- Constructed from product description — no API exists, this represents UI-accessible data -->

## Comparison with alternatives

| Feature | Langfinity | KUDO | Interprefy | JotMe | Jamy.ai |
|---|---|---|---|---|---|
| Languages | 50+ | 200+ (AI 60+) | 80+ AI, 100+ human | 107 | 100+ |
| Human interpreters | No | Yes (12,000+) | Yes (6,000+) | No | No |
| Voice-to-voice | Yes (AI avatars) | Yes (AI + human) | Yes (AI + human) | No (captions only) | No (captions only) |
| Domain customization | Yes | No (documented) | No (documented) | Yes (custom vocabulary) | No |
| API | None | Widget only | REST API v2 | None | REST (partial) |
| CRM integration | None | None | None | Enterprise only | HubSpot |
| Pricing entry point | Pay-as-you-go | Custom (min 75 hrs) | Custom (hourly/daily) | Free (20 min) | Free (300 min/mo) |
| Meeting notes | Yes (multilingual) | No | No | Yes | Yes |
| Best for | Daily team meetings with technical terminology | Enterprise events needing human interpreters | Large events needing API automation | Daily meetings with notes + translation | Teams needing CRM + translation |

## When to choose Langfinity

**Choose Langfinity when:**
- Your team has recurring multilingual meetings (not one-off events)
- You use Teams, Zoom, or Google Meet
- You need domain-specific terminology accuracy (manufacturing, safety, technical)
- You want voice-to-voice translation (not just captions)
- You don't need human interpreters or certified accuracy
- You don't need API/CRM integration

**Choose something else when:**
- You need certified human interpretation → KUDO or Interprefy
- You need API access or webhook automation → Interprefy (REST API v2)
- You need CRM sync from meetings → Jamy (HubSpot) or a dedicated note-taker
- You need 100+ languages → KUDO (200+), JotMe (107), or Jamy (100+)
- You're hosting large-scale events (500+ attendees) → KUDO or Interprefy
- You need meeting notes as the primary output (translation is secondary) → JotMe or Jamy
