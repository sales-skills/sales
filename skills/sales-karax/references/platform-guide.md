<!-- Source: https://karax.ai, https://karax.ai/pricing, https://karax.ai/features, https://karax.ai/faq, https://karax.ai/blog/otter-ai-vs-fathom-vs-karaxai-best-ai-powered-meeting-tool -->

# KaraX.ai Platform Reference

## Overview

KaraX.ai is an agentic AI workspace that combines multi-LLM chat (Claude 4.5 Sonnet, Gemini 2.5 Flash, and 4 others on paid plans), real-time meeting transcription, and AI workflow automation across 800+ integrations — all from a single "OneChat" interface. Differentiator: intent-based computing where users describe outcomes and AI agents execute multi-step workflows across connected tools, replacing manual Zapier-style rule setups. Founded 2023 by C3ALabs, NYC. NVIDIA Inception member.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| OneChat AI Workspace | Unified AI chat interface with 6 LLM models, context-aware search across meetings/files/emails | UI (all plans, model count varies) |
| Meeting Transcription | Real-time transcription for Zoom, Google Meet, Microsoft Teams | UI (all plans, duration varies) |
| AI Summaries | Auto-extract decisions, action items, key points from meetings | UI (all plans) |
| AI Workflow Automation | Multi-step agentic workflows across connected tools — describe outcome, AI executes | UI (Pro+, tool count varies by plan) |
| AI Agents | Persistent context-aware agents that execute tasks across your tool stack | UI (Pro+) |
| Document Integration | Google Drive, OneDrive file connectivity and searchability | UI (Pro+) |
| Email Integration | Gmail, Outlook email thread context and search | UI (Pro+) |
| CRM Integration | Salesforce, HubSpot native connectors | UI (Business+) |
| Collaboration Tools | Notion, Linear, ClickUp, Trello, Jira, Slack integration | UI (Pro+) |
| Workflow Builder | Visual workflow builder for custom automation | UI (Business+) |
| API | None — no public API, no developer portal, no REST/GraphQL endpoints | N/A |
| Webhooks | None — no webhook system on any plan | N/A |

## Pricing, limits & plan gates

| Feature | Starter (Free) | Pro ($14.99/mo annual) | Business ($39.99/mo annual) | Enterprise (Custom) |
|---|---|---|---|---|
| AI Models | 2 (Claude 4.5 Sonnet, Gemini 2.5 Flash) | 6 models | All 6 + Private models | All |
| Daily AI Chats | 25 | 100 | 500 | Unlimited |
| Meeting capacity | 5 meetings/day, 30 min max each | 8 hours/day | 16 hours/day | Custom |
| App integrations | 4 apps | 800+ apps | 800+ apps + CRM | All |
| Tools per workflow | 3 | 5 | 8 + Workflow Builder | Unlimited |
| Data retention | 7 days | Unlimited | Unlimited | Unlimited |
| Encryption | AES-256 | AES-256 + TLS 1.3 | AES-256 + TLS 1.3 | Full E2EE |
| CRM (SF/HubSpot) | No | No | Yes | Yes |
| Monthly price (monthly billing) | $0 | $19.99 | $49.99 | Custom |

- Annual billing saves ~25% (9 months paid, 12 months received)
- No credit card required for Starter
- SOC 2 Type II, HIPAA compliant, GDPR-ready across all plans
- Enterprise adds: full E2EE, private AI models, custom infrastructure, dedicated support

## Integrations

**Meeting platforms (all plans):**
- Zoom
- Google Meet
- Microsoft Teams

**Productivity (Pro+):**
- Google Drive, OneDrive — file search and context
- Gmail, Outlook — email thread integration
- Notion, Linear, ClickUp, Trello, Jira — task/project management
- Slack — notifications and sharing

**CRM (Business+):**
- Salesforce — meeting summaries, action items, deal updates
- HubSpot — same as Salesforce

**Total: 800+ integrations on Pro+.** Appears to be a mix of native connectors and agentic AI-mediated connections (not traditional Zapier/Make — KaraX's AI agents handle the orchestration).

**No Zapier, no Make, no n8n, no iPaaS.** Automation is through the platform's own agentic AI, not external workflow tools.

## Data model

No public API — no programmatic data model. User-facing objects based on product documentation:

<!-- Constructed from marketing docs — verify against live product -->

**Meeting:**
```json
{
  "title": "Q2 Pipeline Review",
  "date": "2026-04-25T10:00:00Z",
  "platform": "zoom",
  "duration_minutes": 45,
  "transcript": "...",
  "summary": {
    "key_points": ["..."],
    "decisions": ["..."],
    "action_items": [
      {
        "description": "Follow up with ACME on pricing",
        "assignee": "Jane",
        "due_date": "2026-04-28"
      }
    ]
  }
}
```

**Workflow:**
```json
{
  "trigger": "meeting_ended",
  "description": "After each sales call, update Salesforce with notes and create ClickUp tasks for action items",
  "tools_used": ["salesforce", "clickup"],
  "status": "active"
}
```

## Quick-start recipes

Since KaraX has no public API, recipes are UI-workflow based using the OneChat interface.

### Recipe 1: Transcribe a Zoom sales call and auto-create tasks

1. Sign up at karax.ai (Starter is free)
2. Install the Chrome extension or desktop app (Windows/macOS/iOS/Android available)
3. Connect Zoom in OneChat settings
4. Join your Zoom call — KaraX auto-transcribes in real time
5. After the meeting, open OneChat and ask: "Create ClickUp tasks for all action items from my last meeting"
6. KaraX's AI agent extracts action items and creates tasks in connected ClickUp (Pro+ required)

**Gotchas:**
- Starter caps meetings at 30 min — upgrade to Pro for full sales calls
- ClickUp integration requires Pro plan ($14.99/mo)
- Transcripts auto-delete after 7 days on Starter

### Recipe 2: Auto-update Salesforce after meetings

1. Upgrade to Business plan ($39.99/mo) — CRM integration is not available on lower tiers
2. Connect Salesforce in OneChat settings
3. Describe the automation in OneChat: "After each meeting, log the summary and action items to the associated Salesforce opportunity"
4. KaraX's agentic AI handles the multi-step workflow: extract summary → match to SF contact/opportunity → update record
5. Verify by checking Salesforce activity feed

**Gotchas:**
- CRM integration is Business-only ($39.99/mo annual, $49.99/mo monthly)
- No API or webhook alternative — can't build a custom integration pipeline
- No Zapier/Make workaround since KaraX doesn't offer external iPaaS triggers

### Recipe 3: Multi-LLM research from meeting context

1. After a meeting, open OneChat
2. Ask a question that spans meeting context and external knowledge: "Based on today's call with ACME, draft a follow-up email addressing their budget concerns"
3. KaraX uses meeting transcript context + AI model to generate the email
4. Send via connected Gmail/Outlook, or copy to another tool
5. On Pro+, switch between 6 AI models to compare output quality

## Integration patterns

**No developer integration surface.** KaraX has no API, no webhooks, no OAuth flows, no SDK, and no MCP server. All automation is mediated through the platform's agentic AI interface:

- **CRM sync**: Describe the desired data flow in OneChat → AI agent executes → no field mapping configuration, no manual sync rules
- **Task creation**: AI extracts action items from transcripts → creates tasks in connected tools → no Zapier zap required
- **Search**: Context-aware search across meetings, emails, files in OneChat — no external search API

**For teams needing programmatic/developer access**, KaraX is not suitable. Recommend:
- Fathom (REST API, webhooks, MCP server)
- Fireflies (GraphQL API, webhooks)
- Grain (REST API, MCP server)

## Company & compliance

- **Company**: C3ALabs (d/b/a KaraX.ai)
- **HQ**: 211 E 43rd St, 7th Floor, Suite #549, New York, NY 10017
- **Founded**: 2023
- **NVIDIA Inception Program**: Member
- **Compliance**: SOC 2 Type II, HIPAA compliant, GDPR-ready
- **Encryption**: AES-256 (all plans), TLS 1.3 (Pro+), full E2EE (Enterprise)
- **Platforms**: Windows, macOS, iOS, Android, Chrome extension
- **Reviews**: 4.8/5 stars (127 reviews on website — no G2/Capterra presence found)
