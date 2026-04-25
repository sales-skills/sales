# Meeting.ai Platform Reference

## Overview

Meeting.ai is a Singapore-based AI meeting assistant that converts conversations into visual mind maps, AI summaries, and transcriptions. Its primary differentiator is the visual mind map output — most note-takers produce text summaries, Meeting.ai produces spatial diagrams. Strongest for SEA-region users needing multilingual transcription with accent support across 30+ languages.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| Visual Note Pro | Auto-converts meetings into mind maps and visual diagrams | UI-only |
| AI Summaries | Key points, decisions, action items extraction | UI-only |
| Transcription | 30+ language, speaker identification, 99% accuracy claimed | UI-only |
| Ask AI | Post-meeting Q&A — query meeting content for clarification | UI-only |
| Meeting Statistics | Duration, speaker talk time, engagement metrics | UI-only |
| Export | PDF, image, text, secure shareable links | UI-only |
| File Upload | Process uploaded audio/video files or Google Drive recordings | UI-only |

**No API, no webhooks, no programmatic access.** All features are UI-only — web, iOS, and Android apps.

## Pricing, limits & plan gates

Meeting.ai's pricing is not publicly documented in a standard tier breakdown. What's known:

- **7-day free trial** across all platforms (web, iOS, Android)
- **Free tier may exist** — some user reviews mention the app being free, but limitations are unclear
- **Subscription pricing** is likely available via App Store / Google Play in-app purchases
- **No published enterprise or team pricing**

For current pricing, check the iOS App Store or Google Play Store listing, or contact support@meeting.ai.

## Integrations

**Native integrations: None documented.**

- No CRM connectors (HubSpot, Salesforce, Pipedrive, etc.)
- No Zapier triggers or actions
- No Make modules
- No Slack/Teams bot integration
- No calendar sync documented beyond joining meetings on supported platforms

**Data flow is one-directional and manual:** Meeting.ai records → generates notes → user exports manually.

**Meeting platform support:**
- Zoom (bot joins meeting)
- Google Meet (bot joins meeting)
- Microsoft Teams (bot joins meeting)
- In-person (device microphone recording)
- File upload (audio/video files, Google Drive)

## Data model

No API means no programmatic data model. The user-facing objects are:

- **Meeting**: A recorded session with associated transcript, summary, mind map, and statistics
- **Mind Map**: Auto-generated visual diagram with topic nodes and hierarchical branches
- **Summary**: Text-based key points, decisions, and action items
- **Transcript**: Full text with speaker labels and timestamps
- **Statistics**: Duration, per-speaker talk time percentages

<!-- No JSON shapes available — no API exists -->

## Quick-start recipes

Since Meeting.ai has no API or integration surface, recipes are UI-workflow based:

### Recipe 1: Record a Zoom meeting with visual notes

1. Sign up at meeting.ai and start the 7-day free trial
2. Connect your calendar or paste a Zoom meeting link
3. Meeting.ai bot joins the Zoom call and records
4. After the meeting ends, open the Meeting.ai dashboard
5. Review the auto-generated mind map for topic hierarchy
6. Switch to the Summary tab for action items and key decisions
7. Use Ask AI to query: "What did [speaker] say about [topic]?"
8. Export as PDF for sharing or as text for pasting into other tools

### Recipe 2: Process an existing recording

1. Upload an audio or video file to Meeting.ai (or connect Google Drive)
2. Select the meeting language (or let auto-detect handle it)
3. Wait for processing — longer recordings take more time
4. Review the generated mind map and summary
5. Export in your preferred format

### Recipe 3: Workaround for CRM integration

Since Meeting.ai has no native CRM integration:

1. Record meeting in Meeting.ai
2. Export the summary as text
3. Manually paste into HubSpot/Salesforce meeting activity
4. Alternatively, use the secure share link and log it as a note URL in your CRM

**For automated CRM integration, consider Fathom (API + webhooks), Fireflies (API + native CRM), or MeetGeek (Zapier + CRM).**

## Integration patterns

**No programmatic integration patterns available.** Meeting.ai is a closed-loop product:

- No API for data extraction
- No webhooks for event-driven automation
- No OAuth for third-party app connections
- No bulk export or data portability features documented

**Workarounds:**
- Export meetings individually as PDF/text and import elsewhere
- Use the secure share link to reference meeting notes from other tools
- For teams needing automated pipelines, Meeting.ai is not suitable — evaluate platforms with API/webhook support

## Company & compliance

- **Company**: BAHASALAB AUTOMATION PTE. LTD.
- **Address**: 171 Tras Street, #04-175 Union Building, Singapore 079025
- **Contact**: support@meeting.ai
- **Compliance**: No documented SOC 2, HIPAA, ISO 27001, or GDPR certifications. Claims "encrypted sharing and data protection."
- **User base**: 500,000+ users claimed, 4.8/5 rating
