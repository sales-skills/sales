# Bluedot Platform Reference

## Platform overview

Bluedot is a bot-free AI meeting note-taker that captures, transcribes, and summarizes conversations without deploying a bot participant. Uses Chrome extension, desktop apps (Mac/Windows), and mobile apps (iOS/Android) for recording. Differentiator: video recording is available on bot-free capture — most bot-free competitors are audio-only. Backed by Google, trusted by 50K+ companies including NYT, Etsy, Netflix, Salesforce, Pinterest. 4.9-star rating from 1,354+ reviews.

## Recording modes

- **Chrome extension** — primary recording method, works on Google Meet, Zoom, Teams, Webex, Slack Huddles. No bot joins calls, no calendar access required, no participant notification.
- **Desktop app** (Mac/Windows) — records any meeting platform. Known stability issue: may crash/drop after ~1 hour continuous recording.
- **Mobile app** (iOS/Android) — records in-person meetings, phone calls, and virtual meetings. Some reports of only capturing first 30 seconds of conversations.
- **File import** (Pro+) — upload MP4, MP3, M4A for transcription and summarization.
- **Screen recording** — records screen with webcam overlay (unique feature).

## AI features

- **Custom meeting templates** (Pro+) — define custom prompts and questions for AI to extract during meetings
- **AI Chat** — query insights across up to 10 meetings simultaneously
- **Meeting Insights** — talk ratio, monologue detection, question count analytics
- **Automated follow-up emails** — drafts follow-up emails matching your writing tone
- **Transcription** — 100+ languages, automatic speaker identification, filler word removal ("uhms" cleaned)
- **Inline commenting** — team can comment on transcripts and notes
- **Note reorganization** — AI can reorganize existing notes based on a different template

## Pricing and limits

| Plan | Monthly | Annual | Key limits |
|---|---|---|---|
| Free | $0 | - | 5 meetings lifetime, max 1hr per recording |
| Basic | $14/mo | $18/mo | Unlimited meetings (audio only), max 1hr, unlimited storage |
| Pro | $20/mo | $25/mo | Unlimited meetings (with video), unlimited duration, custom templates |
| Business | $32/mo | $39/mo | + HubSpot/Salesforce, unlimited imports, unlimited free members |
| Unlimited | Custom | - | + SSO, SCIM, all paid features across unlimited seats |

**Plan-gated features:**
- Video recording → Pro+
- Unlimited recording duration → Pro+
- Custom meeting templates → Pro+
- File imports (MP4/MP3/M4A) → Pro+
- Zoom & Google Drive import → Pro+
- HubSpot integration → Business+
- Salesforce integration → Business+
- Unlimited free members → Business+
- SSO / SCIM → Unlimited only
- Topic trackers → Business+ (coming soon)
- Public webhooks → Basic+

**Free plan details:** 5 meetings total for the lifetime of the account (not per month). Max 1 hour per recording. Includes Chrome extension, desktop app, mobile app, Zapier/Make support, Slack & Notion integration. No meeting imports. Effectively a trial, not a sustainable free tier.

## Integrations

### CRM integrations (Business+ only for HubSpot/Salesforce)
- **Salesforce** — auto-enriches contact deal records with meeting links and AI notes, syncs to right contacts/companies/deals
- **HubSpot** — syncs meeting notes and action items to contacts and deals
- **Pipedrive** — available (plan gate unclear)
- **Copper** — available (plan gate unclear)
- **Zoho** — available (plan gate unclear)

### Productivity integrations (all plans)
- **Slack** — share meeting summaries to channels
- **Notion** — push notes to Notion pages/databases
- **Google Drive** — save recordings and transcripts
- **Google Calendar** — auto-detect meetings, populate attendee data

### Automation
- **Zapier** — triggers/actions for meeting workflows (all plans)
- **Make** — integration support (all plans)

### Recruitment / HR
- **Greenhouse** — sync interview notes
- **Workday** — HR meeting workflows

## Webhook integration (Svix-powered)

**Setup path**: Account → Automation → Integrations → Webhook

**Trigger**: Fires once after summary and transcript have been generated (post-processing complete).

**Scope options:**
- **User-level (default)**: Only receives events for meetings recorded by the configuring user
- **Workspace-level**: Receives events for all users in workspace. Must request from Bluedot support. Priority rule: if a user has their own webhook, the workspace-wide webhook is ignored for that user.

**Endpoint configuration:**
- Provide a valid HTTPS URL that accepts POST requests
- Select which events trigger delivery (meeting completion is the primary event)
- Endpoint can be a server, FaaS (Lambda, Cloud Functions), testing tool (webhook.site), or integration platform

**Payload transforms:**
- Advanced tab → "Edit transformation" → custom JavaScript code
- Modify payload fields before delivery (reshape, filter, rename fields)

**Delivery:**
- Single delivery attempt per event
- Failed deliveries visible in Svix dashboard
- Manual replay available for failed deliveries
- No documented automatic retry chain or HMAC signature verification

**Attendee data:**
- Calendar integration must be connected for attendee email addresses to appear in webhook payloads

## Data model

No public API — data is accessible via webhook payloads and CRM sync. Key objects:
- **Meetings** — recording, transcript, AI summary, action items, attendees
- **Templates** — custom prompts/questions for AI extraction (Pro+)
- **Libraries** — shared team organization for meeting content
- **Insights** — talk ratio, monologue, question count per meeting

## Security and compliance

- **GDPR compliant** — data processing agreement available
- **CCPA compliant**
- **Encryption** — 256-bit AES at rest and in transit
- **SOC 2** — certification still pending (not yet achieved)
- **Cloud processing** — no offline/local processing option. All transcription and note generation requires cloud.

## Deep dives

### CRM auto-sync setup (Business+ only)

**Salesforce setup** (via help center: help.bluedothq.com/en/articles/11767933):
1. Connect Salesforce from Integrations settings
2. Bluedot auto-matches meetings to Salesforce contacts/companies/deals using attendee email addresses
3. Meeting link + AI summary pushed to the matched deal/contact record
4. Manual override available if auto-matching fails

**HubSpot setup:**
1. Connect HubSpot from Integrations settings
2. Similar auto-matching via attendee emails to HubSpot contacts/deals
3. Meeting notes and action items synced to associated records

### Zapier/Make automation patterns

Common workflows:
- Meeting completed → create task in Asana/Trello with action items
- Meeting completed → post summary to Slack channel
- Meeting completed → append to Google Sheet for reporting
- Meeting completed → create follow-up reminder in CRM

### In-person recording setup

1. Install Bluedot mobile app (iOS or Android)
2. Open app before or during in-person meeting
3. Tap record — app captures via device microphone
4. After meeting, transcript and summary generated in cloud
5. Notes accessible in Bluedot web/extension dashboard

**Known limitation**: Some users report mobile app capturing less than 30 seconds. Check app permissions (microphone always-on), background app restrictions, and battery optimization settings.
