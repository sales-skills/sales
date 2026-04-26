# Fyxer AI Platform Reference

## Overview

Fyxer AI is an AI email assistant that auto-organizes inboxes, drafts replies in the user's voice, and captures meeting notes with follow-up drafts. Targets time-poor professionals (sales, consulting, real estate). Gmail and Outlook only — no Apple Mail. Founded 2024, YC-backed, offices in NYC and London.

## Capabilities & automation surface

| Capability | Description | Automation |
|---|---|---|
| **Inbox organization** | Auto-categorizes emails into labels: To Respond, FYI, Comment, Notification, Meeting Update, Awaiting Reply, Actioned, Marketing | UI-only |
| **AI email drafting** | Generates reply drafts in user's voice from sent email history and thread context | UI-only |
| **Meeting notetaker** | Joins Google Meet, Teams, Zoom; transcribes, summarizes, generates follow-up drafts | UI-only |
| **Fyxer Chat** | Ask questions about inbox and meeting content (Professional+) | UI-only |
| **Calendar integration** | Reads availability, drafts scheduling emails, prevents double-booking | UI-only |
| **File upload training** | Upload company docs/style guides to improve AI accuracy (Professional+) | UI-only |

**No public API. No webhooks. No Zapier/Make integrations. No MCP server.** Everything requires manual interaction through Gmail/Outlook UI or the Fyxer web dashboard.

## Pricing, limits & plan gates

<!-- Pricing as of 2026-04 — verify at fyxer.com/pricing -->

| Plan | Annual billing | Monthly billing | Key features |
|---|---|---|---|
| **Starter** | $22.50/user/mo | $30/user/mo | 1 inbox + 1 calendar, drafts, notetaker |
| **Professional** | $37.50/user/mo | $50/user/mo | Multiple inboxes, Fyxer Chat, HubSpot, file uploads, onboarding specialist |
| **Enterprise** | Custom | Custom | SSO/SCIM, dedicated account manager, custom security |

**Plan gates that affect workflows:**
- **Single inbox limit (Starter)**: Cannot organize a second email account. Must upgrade to Professional for multi-inbox.
- **HubSpot integration (Professional+)**: The only CRM connector. No Salesforce, Pipedrive, or other CRM support on any plan.
- **Fyxer Chat (Professional+)**: Search across inbox and meetings. Starter users cannot query their data.
- **File upload (Professional+)**: Upload company docs to improve AI voice. Starter users rely only on sent email history.
- **SSO/SCIM (Enterprise only)**: Required for IT-managed team deployments.

**Free trial**: 7-14 days (sources vary), credit card required upfront, auto-converts to paid.

**Referral program**: $50 credit per invited user who signs up. No formal affiliate program.

## Integrations

| Integration | Direction | Notes |
|---|---|---|
| **Gmail** | Bidirectional | OAuth 2.0, reads inbox/sent, creates drafts (never sends) |
| **Outlook / M365** | Bidirectional | Microsoft Graph API, same capabilities as Gmail |
| **Google Meet** | Read | Notetaker joins and transcribes |
| **Microsoft Teams** | Read | Notetaker joins and transcribes |
| **Zoom** | Read | Requires separate connection from dashboard |
| **HubSpot** | Write (Professional+) | Contact/activity sync, details sparse |
| **Slack** | Write | Notifications (details sparse) |
| **Google Calendar** | Read | Via Gmail OAuth — availability, scheduling |
| **Outlook Calendar** | Read | Via Microsoft Graph — availability, scheduling |

**Not supported**: Apple Mail, Salesforce, Pipedrive, Close, Attio, Zapier, Make, n8n, any webhook or API integration.

## Data model

Fyxer has no public API, so no formal data model. The user-visible objects are:

**Email labels** (inbox organization):
- To Respond, FYI, Comment, Notification, Meeting Update, Awaiting Reply, Actioned, Marketing
- Labels are applied automatically; user corrections train the model

**Meeting notes** (notetaker output):
- Transcript (full text)
- Summary (AI-generated bullet points)
- Follow-up email drafts (auto-generated, editable)
- Action items (extracted from discussion)

**Draft replies** (email assistant output):
- AI-generated reply text in user's voice
- Always created as drafts — never auto-sent
- User reviews and sends manually

## Quick-start recipes

Since Fyxer has no API or automation surface, these are workflow recipes rather than code recipes.

### Recipe 1: Set up Fyxer for Gmail

1. Go to fyxer.com → Sign up → Start free trial
2. Connect Gmail account (OAuth consent screen — grant email + calendar permissions)
3. Wait 1-2 hours for initial inbox scan and categorization
4. Review categorized emails — manually move any mislabeled ones to correct labels
5. Continue correcting for 1-2 weeks — accuracy improves with feedback

### Recipe 2: Train Fyxer's voice for better drafts

1. Send 20-30 emails manually across different contexts (formal, casual, follow-up)
2. Fyxer analyzes your Sent folder to learn tone and style patterns
3. On Professional: upload company docs, email templates, and style guides via dashboard
4. Test by opening a received email → review AI draft → edit and send
5. Repeat — Fyxer refines its model with each edited/sent draft

### Recipe 3: Use meeting notetaker with Zoom

1. Ensure calendar is connected (Gmail or Outlook)
2. In Fyxer dashboard → Settings → Integrations → Connect Zoom
3. Fyxer automatically joins scheduled meetings (appears as a participant)
4. After meeting: notes + transcript + follow-up drafts delivered to inbox within ~5 minutes
5. Review follow-up drafts carefully — AI may misattribute statements or invent commitments

## Integration patterns

### CRM sync (limited)

Fyxer only integrates with HubSpot on Professional+. The sync appears to push meeting notes and email activity to HubSpot contacts, but details are sparse in their documentation. There is no:
- Field mapping configuration
- Conflict resolution
- Salesforce/Pipedrive/other CRM support
- API to build custom CRM sync

**Workaround for non-HubSpot CRMs**: Manually copy meeting notes or transcripts into your CRM. No automation path exists.

### Automation workarounds

Since Fyxer has no API, webhooks, or Zapier support:
- **Email forwarding rules**: Set up Gmail/Outlook rules to forward Fyxer's note emails to other tools (Slack channels, Notion, etc.)
- **IFTTT/Zapier on the email side**: Trigger automations from Fyxer's meeting note emails landing in your inbox (not from Fyxer itself)
- **Manual export**: Download transcripts one by one from the Fyxer dashboard

## Security & compliance

- SOC 2 Type II certified
- ISO 27001 compliant
- GDPR compliant
- HIPAA compliant (Enterprise)
- AES-256 encryption in transit and at rest
- OAuth 2.0 for all connections (never stores email passwords)
- Does not store email content post-draft generation (stated policy)
- Does not train public/third-party AI models on user data

## Competitive positioning

| Feature | Fyxer | Superhuman | Shortwave | SaneBox | alfred_ |
|---|---|---|---|---|---|
| Inbox organization | Auto-labels | Split Inbox | AI bundles | Smart folders | Auto-triage |
| AI drafting | Voice-trained | AI Write + Grammarly | Ghostwriter | No | Voice-trained |
| Meeting notes | Built-in | No | No | No | No |
| CRM integration | HubSpot only | SF/HubSpot/Pipedrive (Business+) | No | No | No |
| API/webhooks | None | MCP server only (Business+) | None | None | None |
| Starting price | $22.50/mo | $25/mo | $7/mo | $7/mo | $24.99/mo |
| Free plan | Trial only | Trial only | Trial only | Trial only | No |
| Calendar | Read-only | Read/write | No | No | Read/write |
