# Wudpecker Platform Reference

## Overview

Wudpecker is an AI meeting note-taker that differentiates on **custom instructions** — users tell the AI what to capture, how to structure it, and what vocabulary to use. Bot joins Zoom/Meet/Teams; desktop + phone app handles in-person recording. EU-based, GDPR compliant, AES-256 encryption, EU servers. 18,000+ users including TikTok, Salesforce, Nokia, Deliveroo, Google.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| Bot recording | Notetaker bot joins Zoom/Meet/Teams via calendar sync | UI — auto-join from calendar |
| Desktop/phone recording | Record in-person meetings via desktop or mobile app | UI — unlimited on all plans |
| Custom instructions | Tell Wudpecker what to capture, structure, detail level, vocabulary | UI — available on all plans |
| AI note generation | Generates structured notes from recording + custom instructions | UI — automatic post-meeting |
| Ask Wudpecker | AI Q&A on meeting content — ask follow-up questions, extract specific details | UI — 3 questions/recording (Free), unlimited (Plus+) |
| Transcription | 39+ language transcription with speaker identification | UI — automatic |
| Custom vocabulary | Teach proper spellings for names, products, jargon | UI — available on all plans |
| Text-to-table | Convert discussion points into structured tables | UI — available on all plans |
| Collections | Organize meetings into groups | UI — available on all plans |
| Action items | Auto-extract action items from meetings | UI — automatic |
| Meeting search | Search across all meeting transcripts and notes | UI — available on all plans |
| Share notes | Share via link or to other Wudpecker accounts | UI — available on all plans |
| Notion export | Auto-export notes to Notion | UI — Plus+ only |
| Slack export | Send notes/summaries to Slack channels | UI — Plus+ only |
| HubSpot sync | Sync meeting notes to HubSpot CRM | UI — Plus+ only |
| Salesforce sync | Sync meeting notes to Salesforce | UI — beta, Plus+ |
| Google Docs export | Export notes to Google Docs | UI — available on all plans |

**No public API, no webhooks, no MCP server.** All automation is through native integrations (Notion, Slack, HubSpot) on Plus+ plan.

## Pricing, limits & plan gates

All pricing as of 2026-04 — verify on wudpecker.io/pricing.

| | Free | Plus | Pro |
|---|---|---|---|
| **Price** | $0/mo | $19/mo ($15.20 annual) | $32/mo ($25.60 annual) |
| **Bot meetings/mo** | 10 | 30 | 100 |
| **In-person (app)** | Unlimited | Unlimited | Unlimited |
| **Ask AI questions** | 3 per recording | Unlimited | Unlimited |
| **Max meeting length** | 2h 15m | 2h 15m | 2h 15m |
| **Custom instructions** | Yes | Yes | Yes |
| **Custom vocabulary** | Yes | Yes | Yes |
| **Collections** | Yes | Yes | Yes |
| **Notion/Slack/HubSpot** | No | Yes | Yes |
| **Rename bot** | No | Yes | Yes |
| **Bot join preferences** | No | External/internal/all/none | External/internal/all/none |
| **Invite bot to unscheduled** | No | Yes | Yes |
| **Cloud storage** | Unlimited | Unlimited | Unlimited |
| **Calendars** | 1 | 1 | 1 |
| **Languages** | 39+ | 39+ | 39+ |

**Key limits:**
- Single calendar per account
- 2h 15m max per meeting (hard limit, all plans)
- No API access on any plan
- CRM/Notion/Slack integrations require Plus ($19/mo)
- Free trial: 2 weeks of Plus features, no credit card

## Integrations

### Meeting platforms
- **Zoom** — bot auto-joins from calendar
- **Google Meet** — bot auto-joins from calendar
- **Microsoft Teams** — bot auto-joins from calendar

### CRM
- **HubSpot** — native sync on Plus+ plan. Meeting notes and summaries pushed to contact/deal timeline
- **Salesforce** — beta integration on Plus+ plan. New CRM integrations in beta (team workspace)

### Productivity
- **Notion** — auto-export meeting notes to Notion pages (Plus+)
- **Slack** — send summaries and notes to channels (Plus+)
- **Google Docs** — export notes (all plans)

### Automation
No Zapier triggers/actions, no Make modules, no API. The only automation paths are:
1. Native integrations (HubSpot, Notion, Slack) on Plus+
2. Google Docs export + downstream automation from Google Workspace
3. Manual copy-paste

## Data model

No API means no programmatic data model. The internal objects are:

- **Meeting** — a recorded session with metadata (title, date, participants, duration, platform)
- **Transcript** — speaker-diarized text in 39+ languages
- **Notes** — AI-generated structured notes based on custom instructions
- **Action items** — extracted from meeting content
- **Collection** — user-created grouping of meetings
- **Custom instructions** — per-user templates for note generation
- **Custom vocabulary** — per-user dictionary for proper nouns

## Custom instructions setup

This is Wudpecker's primary differentiator. Instructions tell the AI:

1. **Structure**: What headings/sections to use (e.g., "Use MEDDIC headings: Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion")
2. **Detail level**: What to capture verbatim vs summarize (e.g., "Quote pricing discussions exactly, summarize small talk")
3. **Focus areas**: What to prioritize (e.g., "Focus on objections and competitor mentions")
4. **Vocabulary**: How to spell specific terms (e.g., "Always spell it 'HubSpot' not 'Hubspot'")
5. **Output format**: Tables, bullets, paragraphs (e.g., "Present action items as a checklist with owner and deadline")

**Best practices:**
- Create different instruction sets for different meeting types (discovery, demo, QBR, internal)
- Be specific — "Capture all competitor mentions with exact quotes" works better than "Note competitors"
- Use Ask Wudpecker post-meeting to extract anything the instructions missed
- Iterate after 2-3 meetings — refine instructions based on output quality

## Quick-start recipes

### Recipe 1: Set up discovery call notes with BANT framework

**Trigger**: You want structured discovery notes.

**Steps**:
1. Go to Settings → Custom Instructions
2. Add instruction set named "Discovery - BANT"
3. Paste template:
   ```
   Structure notes with these sections:
   - Meeting Overview (1-2 sentences)
   - Budget: Any mentions of budget, pricing sensitivity, current spend
   - Authority: Who are the decision makers? Who else needs to be involved?
   - Need: What pain points were discussed? Quote the prospect's exact words
   - Timeline: Any deadlines, urgency signals, or implementation timelines mentioned
   - Next Steps: Action items with owners
   - Competitor Mentions: Any tools or vendors the prospect mentioned
   ```
4. Set as default for external meetings

**Gotcha**: Instructions are per-user, not per-team. Each rep needs to set up their own.

### Recipe 2: Export meeting notes to HubSpot deal timeline

**Trigger**: You want meeting notes auto-logged in HubSpot.

**Steps**:
1. Upgrade to Plus plan ($19/mo)
2. Go to Settings → Integrations → HubSpot
3. Connect your HubSpot account (OAuth)
4. Enable auto-sync — notes will appear on contact/deal activity timeline after each meeting
5. Meeting summary, action items, and transcript link are included

**Gotcha**: You cannot customize which HubSpot fields get populated or create custom field mappings. It's a fixed format pushed to the activity timeline.

### Recipe 3: Record in-person meetings with the phone app

**Trigger**: You have in-person client meetings and want AI notes.

**Steps**:
1. Download Wudpecker phone app (iOS/Android)
2. Open the app before the meeting starts
3. Tap Record — works without any calendar event or bot
4. Meeting is transcribed, notes are generated using your custom instructions
5. Available in your Wudpecker dashboard alongside bot-recorded meetings

**Gotcha**: Phone app recording is unlimited on all plans (including Free). Audio quality depends on phone placement and room acoustics — test beforehand.

## Integration patterns

### CRM sync (HubSpot)
- **Direction**: Wudpecker → HubSpot (one-way push)
- **Data pushed**: Meeting summary, action items, transcript link
- **Sync timing**: Auto after meeting ends and notes are generated
- **Field mapping**: Fixed — no custom field mapping available
- **Conflict resolution**: N/A (append-only to activity timeline)

### Notion export
- **Direction**: Wudpecker → Notion (one-way push)
- **Data pushed**: Full meeting notes in configured structure
- **Sync timing**: Auto after meeting ends
- **Target**: Notion page (cannot target specific databases or set custom properties)

### No-API workarounds
If you need programmatic access to Wudpecker data:
1. **Google Docs export → Google Apps Script**: Export to Docs, then use Apps Script to parse and forward
2. **Notion export → Notion API**: Export to Notion, then use Notion's API to read and process
3. **Manual CSV**: No native export — copy-paste from dashboard
4. **Screen scraping**: Not recommended — no stable selectors

For teams needing API access, consider alternatives: Fathom (REST + webhooks), Fireflies (GraphQL + webhooks), or MeetGeek (REST + webhooks + MCP).
