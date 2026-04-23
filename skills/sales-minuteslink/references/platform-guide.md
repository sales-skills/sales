# MinutesLink Platform Reference

## Platform overview

MinutesLink is a budget AI meeting note-taker from Pandaverse OÜ (Estonia), founded September 2023. It records, transcribes, and summarizes Google Meet and Zoom calls using either an auto-join bot or a Chrome extension (bot-free). Key differentiator: shareable meeting summary links that recipients can view without creating an account. Targets solo sellers, small sales teams, HR/recruiting, remote managers, and students. ~50-100 employees, 4.9/5 stars (692 reviews on own site), 3.7/5 (The Business Dive review).

## Key modules

### Recording & transcription
- **Bot auto-join**: Connect Google Calendar → MinutesLink bot joins scheduled meetings automatically
- **Chrome extension**: Record without a bot in the call — captures audio via browser
- **Speaker labeling**: Identifies and labels speakers in transcript
- **Language support**: 50+ languages for transcription (marketing claims 100+ elsewhere)
- **Concurrent capture**: Pro/Business plans support recording multiple meetings simultaneously

### AI summaries & action items
- **Meeting recap reports**: Structured AI summaries with key topics and decisions
- **Action item extraction**: Identifies next steps and assigns to participants
- **Meeting chat**: Ask questions about past meetings using AI ("ask AI" feature)

### Collaboration & sharing
- **Public sharing**: Generate a link to share meeting notes — no sign-up required for recipients
- **Commenting**: Team members can annotate and discuss meeting notes
- **Note editing**: Edit AI-generated notes manually
- **Centralized organization**: All meetings stored and searchable in one place

### Planned features
- **Digital avatar**: Neural network-based feature that learns user communication patterns — not yet available
- **Microsoft Teams**: Support planned, no public timeline

## Pricing and limits

Pricing as of 2026-04 — verify on minuteslink.com before quoting.

| Plan | Monthly | Annual | Meetings/mo | Max duration | Concurrent | Priority support |
|------|---------|--------|-------------|--------------|------------|-----------------|
| Free | $0 | — | 10 | 60 min each | No | No |
| Pro | $16.99/mo | $9/mo | 30 | — | Yes | No |
| Business | $29.99/mo | $24/mo | 100 | — | Yes | Yes |

All plans include: transcriptions, AI summaries, unlimited recordings storage, meeting chat.

**Important**: Meeting limits are account-wide, not per-seat. A 4-person team on Free shares 10 total meetings/month.

**Annual discount**: Pro saves ~47% ($9 vs $16.99), Business saves ~20% ($24 vs $29.99).

## Integrations

### Native
- **Google Calendar**: Auto-sync for bot scheduling
- **Google Meet**: Full support (bot + extension)
- **Zoom**: Full support (bot + extension)
- **Microsoft Teams**: Planned, not available

### Via Zapier
- HubSpot CRM
- Salesforce CRM
- 5,000+ other apps through Zapier

### Not available
- No native CRM integrations (Zapier only)
- No Slack integration (Zapier only)
- No API or webhooks
- No Make/n8n integration

## Data model

No public API — no data model to document. Meeting data is accessible only through the MinutesLink web app and Zapier.

## Workflow setup

### Setting up bot auto-join
1. Sign up at minuteslink.com
2. Connect Google Calendar in settings
3. MinutesLink detects scheduled meetings with Google Meet or Zoom links
4. Bot auto-joins at meeting start time
5. After meeting ends: transcript, summary, and action items appear in dashboard

### Setting up Chrome extension (bot-free)
1. Install MinutesLink Chrome extension from Chrome Web Store
2. Join a Google Meet or Zoom meeting in Chrome
3. Click the extension icon to start recording
4. After meeting: transcript and summary generated automatically

### Sharing meeting notes externally
1. Open a completed meeting in MinutesLink
2. Click "Share" → generate public link
3. Send link to recipients — they can view notes without creating an account
4. Optional: add comments or edit notes before sharing

## Deep dives

### Compliance & security
- End-to-end encryption
- GDPR compliant
- CCPA compliant
- Company registered in Estonia (EU jurisdiction)
- 24-hour support response commitment for enterprise inquiries

### Affiliate program
- Signup: https://minuteslink.com/affiliate-program
- Referral gets 100% discount on first month of Pro
- Affiliate earns 100% of the referral's second payment
- Cash out via PayPal
- Dashboard for tracking referrals

### Limitations vs competitors
- **No API/webhooks**: Can't build custom transcript pipelines — Fathom, Fireflies, Wave all have REST APIs
- **No mobile app**: Desktop/web only — Wave, Omi, Plaud cover mobile
- **No coaching features**: No scorecards, talk ratio analytics, or deal intelligence — tl;dv, Avoma, Gong cover this
- **No MS Teams**: Blocks adoption for Teams-heavy orgs — most competitors support Teams
- **Basic AI notes**: Summaries are functional but less detailed than Fathom or Fireflies outputs
- **Meeting caps**: Hard monthly limits on all plans — Fathom free has unlimited recordings
