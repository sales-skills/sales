<!-- Source: https://laxis.com, https://laxis.com/pricing, G2/Capterra reviews, comparison articles -->

# Laxis Platform Reference

## Overview

Laxis is an AI meeting intelligence platform that combines meeting transcription/summarization with a universal voice keyboard for dictation across apps. Key differentiators: bot-free recording option (zero-footprint, no visible bot in meetings), 50+ professional report templates, a universal voice keyboard with verbal/precision cleanup, and a hardware ecosystem (OSO AI Earbuds, Panocore360 camera). Based in the US, used by 100K+ users across 4K+ organizations including Roche, Salesforce, Google, Cisco, Samsung, and Uber.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| Meeting Recording | Bot-free (zero-footprint) + optional AI assistant bot via calendar invite | UI (all plans) |
| Transcription | Real-time transcription with speaker identification | UI (all plans) |
| AI Summaries | Key points, decisions, action items from meetings | UI (all plans) |
| Report Templates | 50+ professional templates for structured meeting output | UI (Premium+) |
| LaxisChat | AI assistant to query meeting history and extract insights | UI (Premium+) |
| AI Writer | 40+ templates for content creation from meeting data | UI (Premium+) |
| AI Agent Mode | Automated content creation and follow-up generation | UI (Premium+) |
| Voice Keyboard | Universal dictation across any app (Slack, Gmail, Teams, Word, Notion) | UI (all plans, unlimited on Business+) |
| Verbal Cleanup | Auto-removes filler words ("um", "uh", "like") from dictation | UI (all plans) |
| Precision Cleanup | Removes repetition and redundancy from dictation | UI (all plans) |
| Custom Vocabulary | User-trained dictionary for domain-specific terms | UI (Premium+) |
| CRM Automation | Auto-sync summaries, action items, customer data to CRM | UI (Business+) |
| Synergy Radar | Org-wide trend identification across team meetings | UI (Business+) |
| File Upload | Process uploaded audio/video files | UI (all plans) |
| API | Full REST API access | Enterprise only |
| SSO | SAML/SSO integration | Enterprise only |

## Pricing, limits & plan gates

| Feature | Basic (Free) | Premium ($15.99/mo) | Business ($29.99/mo) | Enterprise (Custom) |
|---|---|---|---|---|
| Transcription | 300 min/mo | 2,000 min/mo | Unlimited | Custom volumes |
| Conversation history | 30 days | Unlimited | Unlimited | Unlimited |
| AI summaries | Basic | Full | Full | Full |
| Report templates | — | 50+ | 50+ | 50+ |
| LaxisChat AI | — | Yes | Yes | Yes |
| AI Writer (40+ templates) | — | Yes | Yes | Yes |
| AI Agent Mode | — | Yes | Yes | Yes |
| Voice keyboard | Basic | Yes | Unlimited | Unlimited |
| Custom vocabulary | — | Yes | Yes | Yes |
| CRM automation | — | — | HubSpot + Salesforce | Custom |
| App integrations | — | — | 7,000+ (Zapier) | Custom |
| Team admin | — | — | Yes | Yes |
| API access | — | — | — | Full |
| SSO | — | — | — | Yes |
| Private AI models | — | — | — | Yes |
| Data residency | — | — | — | Custom |
| MDM support | — | — | — | Yes |

- Annual billing saves 20%
- Business plan has a 14-day full-access trial
- Non-profit and education discounts available

## Integrations

**Native integrations:**
- HubSpot (Business+) — meeting summaries, action items, customer data sync to CRM
- Salesforce (Business+) — same as HubSpot
- Slack — share meeting notes and summaries
- Gmail — share via email
- Notion — export meeting notes
- Zapier (Business+) — 7,000+ app connections

**Meeting platform support:**
- Zoom (bot-free + bot-based)
- Google Meet (bot-free + bot-based, no audio recording — text only)
- Microsoft Teams (bot-free + bot-based)

**Hardware:**
- OSO AI Earbuds — in-person meeting capture with studio-quality audio
- Panocore360 — 360-degree meeting camera

**No webhooks, no Make/n8n, no native iPaaS beyond Zapier.**

## Data model

No public API — no programmatic data model. User-facing objects:

- **Meeting**: A recorded session with transcript, summary, report, and action items
- **Report**: AI-generated from 50+ professional templates (Premium+)
- **LaxisChat Thread**: AI Q&A interaction about meeting content
- **Voice Note**: Dictated text with cleanup applied
- **Workspace**: Team collaboration space organized by project or region

## Quick-start recipes

Since Laxis has no public API, recipes are UI-workflow based.

### Recipe 1: Record a Zoom sales call bot-free

1. Install the Laxis desktop app or Chrome extension
2. Open Laxis and select "Start Recording" before joining Zoom
3. Laxis captures audio directly from your device — no bot joins the call
4. After the meeting, open the Laxis dashboard to view transcript and AI summary
5. Select a report template (e.g., "Sales Call Summary") to generate structured output
6. Share via Slack, email, or export to Notion

### Recipe 2: Set up CRM automation to HubSpot

1. Upgrade to Business plan ($29.99/mo) — CRM sync is not available on lower tiers
2. In Laxis settings, connect your HubSpot account
3. Configure which data flows to CRM: meeting summaries, action items, customer insights
4. After each meeting, Laxis auto-syncs the selected data to the corresponding HubSpot contact/deal
5. Verify by checking HubSpot activity feed for the meeting participant

### Recipe 3: Use voice keyboard for email drafting

1. Enable voice keyboard in Laxis settings (available on all plans)
2. Open Gmail, Slack, or any text input field
3. Activate voice keyboard — speak naturally, including filler words
4. Verbal cleanup automatically removes "um", "uh", "like" from the output
5. For repetitive speech, enable precision cleanup to remove redundancy
6. Use text rewriting to adjust tone or translate to another language

## Company & compliance

- **Company**: Laxis, Inc.
- **HQ**: United States
- **User base**: 100,000+ users, 4,000+ organizations
- **Enterprise clients**: Ascension, Roche, Salesforce, Google, Cisco, Samsung, Accenture, Uber
- **Compliance**: "Enterprise Security & Compliance" on Enterprise tier — specifics not publicly documented. No confirmed SOC 2, HIPAA, or ISO 27001 certifications on public pages.
- **Platforms**: Windows, macOS, iOS, Android, Chrome extension
