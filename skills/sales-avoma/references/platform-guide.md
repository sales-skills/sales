# Avoma Platform Reference

## Platform overview

Avoma is an all-in-one AI platform for revenue teams, covering the full meeting lifecycle: scheduling, AI note-taking, conversation intelligence, and revenue intelligence. Positioned as a mid-market alternative to Gong — more depth than Fathom/Fireflies, lower cost than Gong. Target audience: SaaS sales teams, customer success teams, and agencies with 10-100 reps.

## Key modules

### AI Meeting Assistant (included in all plans)
- Auto-joins and records Zoom, Google Meet, Microsoft Teams, GoToMeeting, BlueJeans, UberConference, Highfive, Lifesize
- Transcription in 40+ languages (70+ per pricing page)
- AI-generated notes with custom templates (10+ default, custom on Organization+)
- Smart chapters — automatic topic segmentation
- AI-generated follow-up email drafts
- Automatic CRM data entry (pushes meeting content to CRM fields)
- "Ask Avoma" AI copilot — ask questions about past meetings
- Pre-recorded upload: 5-20/user/month depending on tier

### Scheduler & Lead Router (Lead Router is $19/seat add-on)
- Unlimited 1:1 scheduling pages (all plans)
- Group and round-robin scheduling (Organization+)
- Advanced distribution rules
- Inbound routing — website form submissions → qualified → routed to correct rep
- Outbound handoff routing — SDR books meeting, routes to AE automatically
- Pushes contact + meeting data to HubSpot/Salesforce on booking

### Conversation Intelligence ($29/seat add-on)
- Live answer assistant — real-time objection handling suggestions during calls
- AI call scoring with custom scorecards
- Talk-pattern insights (talk/listen ratio, monologue length, filler words)
- Custom smart topic trackers (40+ default topics, custom on Organization+)
- Smart playlists — curated clips for training
- Activity and engagement analytics

### Revenue Intelligence ($29/seat add-on)
- Deal and churn risk alerts
- AI sales methodology scoring — MEDDIC, BANT, SPICED frameworks
- Pipeline review with automatic CRM field updates
- Revenue forecasting and reporting
- AI win-loss analysis

## Pricing and limits

*Best-effort as of 2026-04 — verify on avoma.com/pricing.*

### Core plans (per recorder seat/month)

| Plan | Annual | Monthly | Max seats | Key additions |
|------|--------|---------|-----------|---------------|
| Startup | $19 | $29 | 25 | AI Meeting Assistant, 1:1 scheduling, 10+ note templates, basic smart topics |
| Organization | $24 | $39 | 100 | Custom topics/templates, group/round-robin scheduling, API + webhooks, automation rules |
| Enterprise | $39 | $39 | Unlimited (10 min) | SSO (SAML/OIDC), HIPAA compliance, DPA, custom data retention, concierge onboarding, QBRs |

Free viewer seats available on all plans (view-only, no recording).

### Add-ons (per seat/month)

| Add-on | Annual | Monthly | What it unlocks |
|--------|--------|---------|-----------------|
| Conversation Intelligence | $29 | $35 | AI coaching, auto scoring, custom scorecards, smart playlists, live assistant |
| Revenue Intelligence | $29 | $35 | Deal risk alerts, methodology scoring, forecasting, win-loss, CRM field auto-updates |
| Lead Router | $19 | $25 | Form qualification, routing rules, SDR→AE handoff, custom assignment |

Bundle discounts: 10% with any 2 add-ons, 15% off all 3.

### Fully-loaded cost examples

| Scenario | Annual per seat |
|----------|----------------|
| Startup (base only) | $19/mo |
| Organization + Conversation Intelligence | $24 + $29 = $53/mo |
| Enterprise + all add-ons (15% bundle) | $39 + ($29+$29+$19)×0.85 = $39 + $65.45 ≈ $104/mo |

### Key limits

- Pre-recorded uploads: 5-20/user/month (tier-dependent)
- Recording storage: Unlimited
- API keys: max 5 per organization
- API rate limit: 60 requests/minute
- API access: Organization plan and above only
- 14-day free trial includes Organization plan features

## Integrations

### Video conferencing
Zoom, Google Meet, Microsoft Teams, GoToMeeting, Highfive, Lifesize, BlueJeans, UberConference

### CRM (bi-directional sync)
- **Salesforce** — meeting events, contact association, field mapping, deal updates
- **HubSpot** — contact creation, meeting association, bi-directional field sync
- **Pipedrive** — meeting sync, deal association
- **Zendesk Sell** — meeting sync
- **Zoho CRM** — meeting sync
- **Copper** — meeting sync

### Dialers
ZoomPhone, Salesloft, Kixie, Groove, RingCentral, Aircall, Outreach, Koncert

### Collaboration
Slack (meeting summaries, notifications), ClickUp (task sync)

### Automation
Zapier (triggers + actions)

### Calendar
Google Calendar, Microsoft Outlook, Microsoft Exchange

## Data model (API entities)

Based on the dev portal and help center:

- **Meetings** — the core entity; includes metadata (title, date, duration, participants), linked to recordings
- **Recordings** — audio/video capture of a meeting; can be auto-recorded or manually uploaded
- **Transcriptions** — speaker-diarized transcript of a recording
- **Notes** — AI-generated meeting notes, structured by template
- **Scorecards** — conversation intelligence scoring results (Conversation Intelligence add-on)
- **Webhooks** — event subscriptions for meeting lifecycle events

### Authentication
- Format: `CLIENT_KEY:CLIENT_SECRET` in the HTTP Authorization header
- Keys created in Settings → Organization → Developer (admin-only)
- Max 5 keys per organization
- Zapier uses separate Client Key and Client Secret fields

### Webhook events
- New note generated
- New meeting scheduled
- Meeting rescheduled
- Meeting cancelled (includes cancellation reason)

### Rate limits
- 60 requests per minute
- Standard REST pagination for list endpoints

## Workflow setup

### Getting started (new team)
1. Connect calendar (Google Calendar or Outlook)
2. Connect video platform (Zoom/Meet/Teams)
3. Connect CRM (Salesforce/HubSpot)
4. Set recording preferences (auto-join all external meetings, or specific calendars)
5. Configure note templates (use defaults or customize)
6. Invite team members (assign recorder vs viewer seats)

### Setting up MEDDIC scorecards
1. Ensure Conversation Intelligence add-on is active
2. Go to Settings → Conversation Intelligence → Scorecards
3. Select MEDDIC template (or create custom from scratch)
4. Configure topic trackers for each MEDDIC element:
   - Metrics → track mentions of ROI, KPIs, business impact numbers
   - Economic Buyer → track mentions of decision makers, budget holders
   - Decision Criteria → track evaluation criteria, requirements
   - Decision Process → track timeline, steps, stakeholders involved
   - Identify Pain → track pain points, challenges, current state
   - Champion → track internal advocate, sponsor mentions
5. Run scorecard on 10-20 historical calls to establish baseline
6. Adjust topic weights based on correlation with closed-won deals
7. Enable auto-scoring for all new calls

### CRM field mapping
1. Go to Settings → CRM → Field Mapping
2. Map Avoma fields to CRM fields (ensure type compatibility — text↔text, not text↔picklist)
3. Configure which meeting types trigger CRM updates (all vs. external only)
4. Test with one meeting before enabling org-wide
5. Monitor sync logs for failures

## Deep dives

### Avoma vs competitors — positioning context

| Dimension | Avoma | Fathom | Fireflies | Gong |
|-----------|-------|--------|-----------|------|
| Starting price | $19/seat | Free | $10/seat | ~$1,200/user/yr |
| Meeting lifecycle | Full (schedule→record→note→score→forecast) | Record→note→CRM | Record→note→search | Record→analyze→coach→forecast |
| CRM depth | Deep (bi-directional, auto-field-update) | Medium (Business+) | Medium (Business+) | Deep |
| Methodology scoring | MEDDIC, BANT, SPICED (add-on) | Basic AI scorecards | None | Advanced |
| API | REST, 60/min, Organization+ | REST, 60/min, all plans | GraphQL, 60/min Business+ | REST, 3/sec |
| Scheduler built-in | Yes (+ Lead Router add-on) | No | No | No |
| Target | Mid-market sales + CS | SMB, budget-conscious | Mid-market, search-first | Enterprise |

### Known reliability issues (from G2/review analysis, 2025-2026)

These are aggregated from user reviews — severity may vary:

| Issue | Reported rate | Worst platform | Workaround |
|-------|--------------|----------------|------------|
| Bot late join (5-15 min) | 48% | All | Set bot to join 2-3 min early if option exists |
| Bot mid-call drop | 31% | Teams (79%) | Dialer integration as fallback |
| Bot no-show | 27% | All | Enable recording failure notifications |
| Speaker misidentification | High | All | Train voice signatures |
| Transcription accuracy (accents) | High | All | Custom smart topics for domain terms |
| CRM sync delay (60+ min) | Medium | HubSpot | Don't rely on real-time; use webhooks |
