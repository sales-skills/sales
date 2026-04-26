# Liznr Platform Reference

## Overview

Liznr is an AI-powered meeting assistant from Liznr Labs (Bhopal, India) that provides real-time transcription, contextual intelligence, and action item extraction. Available as a Chrome extension, Edge add-on, and Microsoft Teams app. The AI assistant is branded "Lizy." Privacy-first design — data is not shared with external models.

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| Real-time transcription | Live transcription with speaker identification during meetings | UI-only |
| Meeting summaries | AI-generated key takeaways and organized notes | UI-only |
| Action item capture | Automated extraction and organization of tasks | UI-only (syncs to Jira/Slack/Notion/Trello) |
| Contextual intelligence | Live knowledge assistance — personalized references during meetings | UI-only |
| Multilingual transcription | Multiple language support with accent understanding | UI-only |
| Meeting recording search | Find specific information within past meeting recordings | UI-only |
| Jargon simplification | On-the-spot simplification of complex terminology | UI-only |
| Keyword highlights | Real-time highlighting of important terms | UI-only |

**All capabilities are UI-only.** Liznr has no public API, webhooks, or MCP server. All data access is through the web dashboard at dashboard.liznr.ai or through native integrations.

## Pricing, limits & plan gates

<!-- Pricing is best-effort as of 2026-04. SourceForge lists $9/mo starting. Detailed tiers not publicly documented. -->

| Tier | Price | Notes |
|---|---|---|
| Free trial | $0 | Limited-time exploration |
| Paid (starting) | $9/mo | Details not publicly documented — contact support@liznr.ai |

**Known limitations:**
- No pricing page with tier breakdown found publicly
- Free trial is time-limited (not feature-limited based on available info)
- Request current pricing and feature gates directly from Liznr

## Integrations

| Integration | Direction | Notes |
|---|---|---|
| Google Meet | Input | Via Chrome extension |
| Zoom | Input | Via Chrome extension (web client) |
| Microsoft Teams | Input | Via Teams marketplace app (WA200009491) |
| Jira | Output | Action items sync |
| Slack | Output | Summaries and action items |
| Notion | Output | Meeting notes export |
| Trello | Output | Task sync |
| Gmail | Input | Calendar event detection |
| Google Calendar | Input | Meeting scheduling awareness |
| Chrome | Platform | Extension for browser-based meetings |
| Microsoft Edge | Platform | Add-on for Edge-based meetings |

**No CRM integrations.** No HubSpot, Salesforce, Pipedrive, or other CRM connectors. Liznr focuses on task/collaboration tool sync.

**No iPaaS surface.** No Zapier triggers/actions, Make modules, or webhook endpoints documented.

## Data model

No public API means no documented data model. Based on the UI and integrations, the core objects are:

```json
// Meeting (inferred from UI)
{
  "meeting_id": "string",
  "title": "string",
  "date": "ISO 8601",
  "duration": "minutes",
  "platform": "google_meet | zoom | teams",
  "participants": [
    {"name": "string", "speaker_id": "string"}
  ],
  "transcript": [
    {"speaker": "string", "timestamp": "HH:MM:SS", "text": "string"}
  ],
  "summary": "string",
  "action_items": [
    {"description": "string", "assignee": "string", "synced_to": "jira | slack | notion | trello"}
  ],
  "keywords": ["string"]
}
```
<!-- Constructed from UI descriptions — no API to verify against -->

## Quick-start recipes

Since Liznr has no API, recipes focus on setup and workflow optimization.

### Recipe 1: Set up Liznr Chrome extension for Google Meet

1. Install the Liznr extension from the Chrome Web Store (ID: `bcdblleenbbbnincinihnpbmmdlojcjh`)
2. Click the extension icon → sign in or create account
3. Grant microphone permissions when prompted
4. Connect your Google Calendar in Liznr settings
5. Join a Google Meet call — Liznr should auto-activate
6. After the meeting, check dashboard.liznr.ai for transcript, summary, and action items

**Gotcha**: If the extension doesn't activate, check that it has the "Allow in Incognito" and "Site access" permissions properly configured.

### Recipe 2: Route action items from Liznr to Jira

1. In Liznr dashboard, go to Settings → Integrations
2. Connect your Jira workspace (authenticate with Atlassian account)
3. Configure default project and issue type for auto-created tasks
4. During/after meetings, action items detected by Liznr will sync as Jira issues
5. Review created issues in your Jira board — edit titles/descriptions as needed

**Gotcha**: Liznr's AI detection of action items depends on clear verbal cues ("Let's make sure to..." or "Action item: ..."). Vague tasks may not be captured.

### Recipe 3: Workaround for CRM sync via Slack → Zapier

Since Liznr has no direct CRM integration:

1. Connect Liznr to Slack (Settings → Integrations → Slack)
2. Configure Liznr to post meeting summaries to a dedicated Slack channel (e.g., `#meeting-notes`)
3. Create a Zapier zap: Trigger = "New Message in Channel" (Slack) → Action = "Create Note on Contact" (HubSpot/Salesforce)
4. Use Zapier's Formatter to extract key fields from the Liznr summary text

**Gotcha**: This is fragile — Liznr's summary format may change, breaking your Zapier parsing. If CRM sync is critical, consider switching to a platform with native CRM integration.

## Integration patterns

### No API — workaround options

Liznr offers no programmatic access. Available workarounds:

1. **Slack relay**: Liznr → Slack channel → Zapier/Make → destination (CRM, warehouse, etc.)
2. **Notion relay**: Liznr → Notion page → Notion API → custom processing
3. **Manual export**: Copy transcripts/summaries from dashboard.liznr.ai
4. **Browser automation** (not recommended): Puppeteer/Playwright against the dashboard — fragile, may violate ToS

### When to consider alternatives

If any of these are requirements, Liznr is not the right fit:

- **API access for custom integrations** → Fathom, Fireflies, MeetGeek, Wave
- **Native CRM sync** → Fathom Business, Fireflies Business, Avoma, tl;dv Business
- **Webhook-driven pipelines** → Fathom, Fireflies, Circleback, Wave
- **Compliance certifications (SOC 2, HIPAA)** → Fathom, Fireflies Enterprise, Gong
- **Enterprise SSO/SCIM** → Gong, Fireflies Enterprise, Avoma
