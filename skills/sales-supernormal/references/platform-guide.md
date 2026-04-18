# Supernormal Platform Reference

## Platform overview

Supernormal is an AI platform for agencies and client-facing teams that captures meetings without a bot joining the call, then uses that context — along with uploaded files, emails, and documents — to generate client-ready deliverables. Originally a pure meeting note-taker, it has pivoted toward an "AI agent for agencies" positioning, with AI Agents that can create pitch decks, project briefs, follow-up emails, spreadsheets, and more from meeting context. 700K+ users. SOC 2 certified, AES-256 encryption.

## Key modules

### Desktop App (Bot-Free Capture)
- Records scheduled calls automatically without joining as a participant
- Runs in the background capturing system audio
- Manual "New note" option for in-person and ad-hoc conversations
- Supports Google Meet, Zoom, Microsoft Teams
- Mac and Windows

### AI Meeting Notes
- Automatic transcription in 60+ languages
- AI-generated summaries with action items and key discussion points
- Customizable note templates (paid plans)
- Custom vocabulary for industry-specific terminology (paid plans)
- Notes organized by project for contextual reference

### AI Agents
- Generate deliverables from simple natural-language requests
- Reference meeting transcripts, emails, and uploaded documents as context
- Create their own task lists and execute independently
- Deliverable types: follow-up emails, project briefs, strategic plans, pitch decks, presentations, research reports, mood boards, spreadsheets, slide decks, documents, images
- Export to Google Drive or other formats

### Norma (AI Assistant)
- Conversational AI assistant providing real-time insights during meetings
- Can answer questions and assist with brainstorming during calls

### Voice Agents
- AI participants that can actively participate in meetings
- Answer questions and provide assistance in real-time

## Pricing and limits

*Best-effort as of 2026-04 — pricing appears to be mid-transition. Verify on supernormal.com/pricing.*

### Help Center pricing (may be outdated)

| Tier | Price | Storage | AI Model | Key features |
|---|---|---|---|---|
| Starter | Free | 1,000 min/seat | GPT 3.5-Turbo | Basic integrations (Slack, Zoom), tasks, groups, Ask Norma |
| Pro | $10/mo ($18 monthly) | Unlimited | GPT 3.5-Turbo | Auto-sharing, templates, video recording, no daily credit limits, credit rollover |
| Business | $19/mo ($29 monthly) | Unlimited | GPT-4 | SSO, audit logs, data retention, custom templates, custom sections, custom bot naming, task automation, priority support, usage insights, meeting capture rules |

### Credit-based pricing (current pricing page)

| Tier | Credits | Daily limit | Key additions |
|---|---|---|---|
| Free | 15/month | 5/day | Desktop app, unlimited projects, MCP integration |
| Pro | 50/month | None | Credit rollover (up to 2 years), unlimited team seats, remove badge |
| Business | 50/month | None | SSO, audit logs, data retention, admin controls |

### Third-party reported pricing (may reflect older tiers)

- Free: 15 meetings/month, 30-day retention
- Starter: $16/month, unlimited recordings, 1-year retention, up to 10 users
- Pro: $25/month, unlimited templates, sentiment analysis, SSO, up to 100 users
- Enterprise: ~$40/user/month, private cloud, HIPAA/SOC2/GDPR, dedicated CSM

20% discount for annual billing across all plans.

## Integrations

### Native integrations
- **Meeting platforms**: Google Meet, Zoom, Microsoft Teams
- **Communication**: Slack (primary native integration)
- **CRM**: HubSpot (auto-sync recordings, notes, highlights to deals/contacts), Salesforce (auto-update leads and contacts), Pipedrive
- **Project management**: Asana (auto-send action items), Notion, Airtable, ClickUp, Linear
- **ATS**: Workable
- **Automation**: Zapier
- **AI**: MCP (Model Context Protocol) — mentioned on pricing page but no public documentation

### Missing integrations (commonly requested)
- No public REST/GraphQL API
- No webhook system for custom integrations
- No Make/n8n connectors
- No developer portal or API documentation

## Data model

No public API means no documented data model. Internally, Supernormal organizes:
- **Projects** — group meetings by client/initiative
- **Meetings** — individual captured sessions with transcript, summary, action items
- **Notes** — AI-generated or manual notes attached to meetings
- **Deliverables** — AI Agent outputs (decks, briefs, emails) linked to project context
- **Credits** — usage currency for meeting captures and AI Agent tasks

## Workflow setup

### Initial setup
1. Download desktop app (Mac or Windows)
2. Connect calendar (Google Calendar / Outlook)
3. Configure auto-capture settings (which meetings to record)
4. Create projects for each client/initiative
5. Set up Slack integration for team sharing

### Client deliverable workflow
1. Capture client call via desktop app (bot-free)
2. Review AI-generated notes and action items
3. Upload supporting files (brand guidelines, past work, brief docs)
4. Ask AI Agent: "Draft the follow-up email from today's call with [client]"
5. Review and export deliverable (Google Drive, PDF, etc.)
6. Share via Slack or directly to CRM

### CRM sync workflow
1. Connect HubSpot or Salesforce in Supernormal settings
2. Recordings, notes, and highlights auto-sync to matching deals/contacts
3. Action items can be pushed to CRM tasks
4. Review synced data in CRM for pipeline context

## Deep dives

### Bot-free vs bot recording
Supernormal offers two recording modes:
- **Desktop app (bot-free)**: Captures audio from your computer without any participant joining the call. Preferred for client meetings where a bot would be disruptive. Requires the desktop app running on your machine.
- **Bot mode**: An AI participant joins the meeting (visible to all participants). Enabled when you connect Zoom/Teams accounts. Can cause issues — bot may auto-join all calendar meetings.

**Recommendation**: Use desktop app (bot-free) for client calls. Reserve bot mode for internal meetings where visibility doesn't matter.

### AI Agent best practices
- Be specific in requests — reference which meeting, which client
- Upload context files (brand guidelines, past deliverables, templates) to improve output quality
- Start with simple deliverables (follow-up emails) before complex ones (pitch decks)
- Review all AI-generated client deliverables before sending — GPT 3.5-Turbo (Starter/Pro) produces lower quality than GPT-4 (Business)
- One credit per AI Agent task — plan credit usage around high-value outputs

### Competitive positioning
Supernormal's closest competitors for agency/deliverable use cases:
- **Sembly** — Also generates client deliverables (proposals, briefs, pitch decks). Stronger on API/webhooks (10 CRM connectors, MCP access). Weaker on deliverable variety.
- **Fathom** — Stronger on pure meeting notes and free tier (unlimited recordings). No AI agent/deliverable generation.
- **Fireflies** — Better API (GraphQL), conversation search, analytics. No AI agent/deliverable generation.
- **Fellow** — Better for internal meetings, 1:1s, and meeting management. Not agency-focused.
