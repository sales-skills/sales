# Demodesk Platform Reference

## Platform overview

Demodesk is an AI-powered sales meeting platform founded in 2018 in Munich, Germany (YC company). Positioned as an "Always-on AI Sales Team," it goes beyond conversation intelligence (like Gong) into autonomous action with AI agents. GDPR-native with EU-only data centers (Azure Frankfurt). ISO 27001:2022 certified. G2 rating: 4.9/5 (188+ reviews).

CEO: Veronika Wax. Available in 18 countries (DE, AT, CH, GB, US, CA, FR, IT, ES, NL, BE, DK, SE, NO, FI, PL, CZ, HU, RO).

## Key modules

### AI Assistant
- Records and transcribes conversations in 98 languages
- AI-powered call summaries generated after calls end
- Personalized follow-up email drafting
- CRM field updates without manual entry
- Q&A with AI about meeting content
- Fast processing — notes and transcripts available shortly after call ends

### AI Coach
- Custom scorecard creation (BANT, MEDDIC, SPIN templates available)
- Scores 1-5 per question with comments
- Performance dashboards tracking team improvement over time
- Deal risk identification from conversation patterns
- Speaker analytics: talk-to-listen ratio, engagement, words-per-minute

### AI Analyst
- Pipeline insights with real-time visibility
- Go-to-market strategy evaluation
- Product feedback collection across conversations
- "Ask AI Analyst" — natural-language queries about pipeline and performance
- Performance improvement recommendations

### AI CRM Concierge
- Zero-setup CRM updates — automatically detects which fields exist in your CRM
- Suggests field values from conversation content
- Human-in-the-loop verification before syncing (99-100% accuracy claimed)
- Works with Salesforce, HubSpot, Pipedrive

### AI Crew (add-on)
- Autonomous workflow agents triggered by custom logic and outcomes
- Stalled deal rescue — detects deals going dark and sends follow-ups
- Automated outreach based on conversation outcomes
- Tiered pricing: €299/mo (5,000 events), €999/mo (25,000 events)

### Mobile App
- Captures offline meetings, phone calls, and in-person conversations
- Cross-device sync

## Pricing and limits

| Plan | Price | Includes |
|---|---|---|
| Standard | €49/user/mo (annual) / €59/mo (monthly) | AI Assistant, AI Coach, AI Analyst, AI CRM Concierge |
| Enterprise | Custom | SSO, premium support, dedicated onboarding, custom AI agents |
| AI Crew (add-on) | €299/mo (5K events) or €999/mo (25K events) | Autonomous workflow agents |
| Viewer seats | Free | Non-sales team members can view recordings, transcripts, dashboards |

- 14-day free trial, no credit card required
- Annual billing saves ~20%
- Historical plan references: Scheduling plan (€29/user/mo) and Meeting plan (€79/user/mo) may still appear in some documentation — these were legacy plans before the AI-first rebrand

### Rate limits (API)
- Global: 120 requests/minute per API key
- Per-endpoint: 60 requests/minute per API key
- Listing endpoints: 20 requests/minute
- Returns 429 with optional Retry-After header

## Integrations

### CRM (native)
- **Salesforce** — auto-create events, field updates, scheduling button in Salesforce, duplicate meeting prevention
- **HubSpot** — auto-create/update contacts, companies, deals, activities; scheduling button; status monitoring (cancellations, rescheduling, no-shows)
- **Pipedrive** — native integration, activity sync

### Video conferencing
- Zoom, Microsoft Teams, Google Meet, Webex

### Dialers
- Aircall, RingCentral

### Calendar
- Google Calendar, Outlook

### Automation
- Make (Integromat), n8n, Zoho Flow, Slack

### Other
- Google Drive (recording storage)
- 30+ integrations total via marketplace (marketplace.demodesk.ai)

## Data model (API)

### Key objects

**Recording**: recordingToken (unique), recordingId, demoId, userId, name, status (pending/ready/failure/cancelled/expired), postprocessingStatus, durationMs, audioOnly flag, attendeeClassification, meetingLocation, participants array, engagement/feedback scores, groups

**Transcript**: language, paragraphs containing speaker info, sentences with timestamps (startInSeconds, endInSeconds, text)

**Summary**: summaryId, promptId, promptName, languageCode, content (plaintext + HTML), timestamps

**Scorecard**: template info, score (1-5), questions with criteria and comments, giver/receiver user IDs

**Meeting (scheduled_demo)**: token, hosts, participants, bookers, booking questions, event type, custom data

### Webhook events (13)
- Demo lifecycle: `demo.scheduled`, `demo.rescheduled`, `demo.handovered`, `demo.canceled`, `demo.started`, `demo.ended`
- Demo metadata: `demo.call_note_updated`, `demo.event_response_updated`
- Recording: `recording.uploaded`, `recording.transcription_postprocessed`

Webhook activation requires emailing support@demodesk.com with endpoint URLs.

## Workflow setup

### Recording and transcription pipeline
1. Connect calendar (Google Calendar or Outlook)
2. Demodesk auto-joins meetings and records (no bot announcement by default — handle consent)
3. After call ends, transcription processes (98 languages, auto-detected)
4. AI summary generated from transcript
5. Follow-up email drafted automatically
6. CRM fields updated via AI CRM Concierge (with human approval)

### Coaching scorecard setup
1. Go to Coaching > Scorecards > Create Template
2. Choose methodology (BANT, MEDDIC, SPIN) or create custom
3. Define questions/criteria with 1-5 scoring
4. Assign to team or individual reps
5. After calls, AI auto-scores and managers can review/adjust
6. Track improvement in Performance Dashboards

### API transcript download pipeline
1. Generate API key: Settings > Integrations > Other > Demodesk API
2. List recordings: `GET /api/v2/recordings?filter[postprocessing_status_eq]=done&filter[status_eq]=ready`
3. Paginate: follow `meta.nextCursor` until `meta.hasNext` is false
4. Batch download: `POST /api/v2/transcripts/batch` with up to 100 recordingTokens
5. Handle 202 (still processing) and 204 (too short/empty)
6. For real-time: use `recording.transcription_postprocessed` webhook

## Deep dives

### CRM integration details

**Salesforce**: Creates Event objects when meetings are scheduled. Populates host, participants, booker, booking questions, custom data. Auto-updates on cancellation/reschedule/no-show. Scheduling button embeds in Salesforce UI for Lead and Contact records. Duplicate meeting prevention available.

**HubSpot**: Creates/updates Contacts, Companies, Deals, and Activities. HubSpot Scheduling button available. Supports custom data mapping. Monitors meeting lifecycle (cancellations, rescheduling, no-shows).

**Pipedrive**: Activity sync with deal association.

### Migration from other platforms
Demodesk provides a guide for migrating historical recordings from other platforms (Gong, Chorus, etc.) — see help.demodesk.com for best practices. API v2 can be used to import recordings programmatically.

### Privacy and compliance
- GDPR-native (not retrofitted) — EU data centers only (Azure Frankfurt)
- ISO 27001:2022 certified
- No bot announcement by default — relies on users to gather consent
- Full Google account access required for calendar integration
- Data processing agreement available

### Affiliate/partner program
- Affiliate: 15% commission + free Demodesk licenses + knowledge center access
- Referral: €100 per intro call attended + €100 if referred company converts
- Contact: referrals@demodesk.com
- Partner marketplace: marketplace.demodesk.ai
