# Salesroom Platform Reference

## Overview

Salesroom is an AI-powered video conferencing platform built from the ground up for sales teams. Unlike bot-based CI tools (Gong, Fathom, Fireflies) that join existing Zoom/Meet/Teams calls, Salesroom IS the meeting platform — sales reps send a Salesroom meeting link and conduct the entire call inside Salesroom's interface. This gives it native access to real-time coaching, live engagement metrics, and post-call analytics without a third-party bot. Founded by Roy Solomon (ex-Applause, acquired by Vista Equity) and Daria Danilina (ex-Dropbox/HSBC). $8.5M seed round (June 2022) from Craft Ventures, Village Global, Wndrco, Asymmetric Capital. Boston-based.

## Capabilities & automation surface

### Real-Time AI Coaching — UI-only
Live coaching prompts during sales calls. Battle cards surface when specific topics or competitor names are detected. Objection handling suggestions appear contextually. Speaker prompts guide conversation flow. All visible only to the rep, not the buyer.

### Buyer Engagement Scoring — UI-only
Real-time engagement metrics showing buyer attention and participation during the call. Analyzes facial expressions, speaking patterns, and interaction signals. Scores help reps adjust their approach mid-conversation. Post-call engagement summary available in dashboard.

### Meeting Summaries & Notes — UI-only
Automatic AI-generated summaries after every call. Includes key topics, action items, questions raised, and next steps. Summaries sync to connected CRM (HubSpot/Salesforce).

### Highlight Video Clips — UI-only
AI-generated video clips of key moments from the meeting. Shareable with team members for coaching or deal strategy. Used for post-call review and team collaboration.

### Call Scores — UI-only
AI-scored assessment of rep performance on each call. Includes metrics on airtime balance, question handling, engagement levels, and follow-up quality.

### Airtime Tracking — UI-only
Real-time display of talk-time distribution between rep and buyer. Helps reps maintain balanced conversations (ideal ratio varies by call type — discovery calls should be more buyer-heavy).

### Question Detection — UI-only
AI identifies questions asked during the meeting — both by the rep and the buyer. Highlights unanswered questions post-call. Useful for ensuring thorough follow-up.

### Sentiment Analysis — UI-only
Analyzes buyer tone and language for positive/negative/neutral sentiment during the call. Provides sentiment trajectory showing how buyer mood shifted throughout the conversation.

### Meeting Plans & Agendas — UI-only
Pre-meeting planning tools for structuring the call. Templates for different meeting types (discovery, demo, negotiation, QBR).

### CRM Auto-Update — UI-only (native integration)
Automatic logging of meeting details, summaries, notes, and engagement data to HubSpot or Salesforce. No manual CRM entry required after calls.

**Automation summary**: No public API, no webhooks, no MCP server. All features are UI-only. CRM sync is via native HubSpot/Salesforce integration (not API-accessible). No Zapier or Make modules available.

## Pricing and limits

*Best-effort as of 2026-04 — verify on salesroom.com.*

| Feature | Free | Pro ($49/mo) | Enterprise (custom) |
|---|---|---|---|
| Video meetings | Yes (limited) | Unlimited | Unlimited |
| Real-time coaching | Basic | Full | Full + custom |
| Battle cards | Limited | Full | Full + custom |
| Buyer engagement scoring | Basic | Full | Full |
| Meeting summaries | Yes | Yes | Yes |
| Highlight clips | Limited | Full | Full |
| Call scores | Basic | Full | Full |
| CRM sync (HubSpot/Salesforce) | Unknown | Yes | Yes |
| Team analytics | No | Yes | Yes + custom |
| Custom playbooks | No | Yes | Yes |
| Priority support | No | No | Yes |

**Plan gates to watch**: Free plan limits are not well-documented publicly. Enterprise pricing is custom — contact Salesroom sales. Specific feature limits per plan (e.g., number of battle cards, meeting minutes) are not published.

## Integrations

| Integration | Direction | What syncs |
|---|---|---|
| HubSpot | Salesroom → HubSpot | Meeting summaries, notes, engagement data, questions raised. Creates activity/event on contact/deal. HubSpot Marketplace app available. |
| Salesforce | Salesroom → Salesforce | Meeting events on opportunity/lead/contact after each meeting. |
| Zoom | Bidirectional | Calendar integration — can detect Zoom meetings. Salesroom positioning is to replace Zoom for sales calls, but integrates for transition period. |
| Slack | Salesroom → Slack | Meeting highlights, summaries, and notifications pushed to Slack channels. |
| Gong | Salesroom → Gong | Can push recordings to Gong for teams using Gong as their CI platform of record while using Salesroom for the meeting itself. |

**Not available**: Zapier, Make, n8n, custom webhooks, API, MCP, any iPaaS.

## Data model

No public API — data model is not externally documented. Key objects visible in the UI:

- **Meeting**: video call with participants, duration, recording, transcript
- **Engagement Score**: per-participant engagement metric (0-100 scale, derived from attention/interaction signals)
- **Summary**: AI-generated post-call summary with topics, action items, questions
- **Highlight Clip**: short video segment extracted from meeting
- **Call Score**: rep performance assessment
- **Battle Card**: coaching card with trigger keywords and response content
- **Playbook**: collection of battle cards and coaching rules

<!-- No JSON shapes available — no public API. Data model reconstructed from UI descriptions. -->

## Quick-start recipes

Since Salesroom has no API, these are UI-based workflows rather than code recipes.

### Recipe 1: Set up HubSpot sync for automatic meeting logging

1. **Trigger**: You want every Salesroom meeting to appear in HubSpot automatically.
2. **Steps**:
   - Go to Salesroom Settings → Integrations → HubSpot
   - Click "Connect" and authorize with your HubSpot account (requires admin or sales permissions)
   - Configure which data syncs: summaries, notes, engagement scores, questions
   - Meetings will create activities on matching HubSpot contacts (matched by participant email)
3. **Gotchas**: Contact must exist in HubSpot before the meeting for auto-matching. If the buyer's email isn't in HubSpot, the meeting may not associate correctly — create the contact first.

### Recipe 2: Configure battle cards for competitor objection handling

1. **Trigger**: You want coaching prompts when a buyer mentions a competitor.
2. **Steps**:
   - Go to Salesroom Settings → Coaching → Battle Cards
   - Create a new card for each competitor (e.g., "Zoom", "Gong", "Demodesk")
   - Add trigger keywords: competitor name, product names, related terms
   - Write the response content: key differentiators, objection responses, proof points
   - Test with an internal practice call before using with real prospects
3. **Gotchas**: Triggers rely on live transcription — speak clearly. Very short mentions may not trigger. Start with broad keywords and refine.

### Recipe 3: Share highlight clips with your team for deal strategy

1. **Trigger**: After a call, you want to share the key moment with your manager or team.
2. **Steps**:
   - Open the meeting in the Salesroom dashboard
   - Review AI-generated highlight clips (key moments auto-detected)
   - Click "Share" on the relevant clip
   - Choose destination: Slack channel, email, or copy link
   - Add context notes explaining why the clip matters
3. **Gotchas**: Clips take 10-15 minutes to generate after the call. Very short calls may not produce clips.

## Integration patterns

### CRM sync architecture
Salesroom uses native integration connectors, not API/webhook-based sync:
- **HubSpot**: Marketplace OAuth app. Syncs meeting activities to contact timeline. Matched by participant email.
- **Salesforce**: Creates events on opportunity/lead/contact records. Manual association may be needed if email matching fails.
- **Sync timing**: Not instant — expect 5-15 minutes after call ends for data to appear in CRM.
- **Conflict resolution**: Salesroom is write-only to CRM — it creates records, doesn't read or update existing ones.

### Workaround for missing API/webhooks
Since Salesroom has no API or webhooks:
- **Manual export**: Screenshot or copy meeting summaries from the dashboard
- **Slack as a proxy**: Push highlights to Slack, then use Slack's API/webhooks to trigger downstream automations (Zapier, Make, etc.)
- **Gong integration**: If you need API access to your conversation data, connect Salesroom → Gong, then use Gong's API for programmatic access
- **Feature request**: If API access is critical, contact Salesroom support to request it — small startups often prioritize based on customer demand

## Notable customers

Pleo (financial services), Twilio (cloud communications), Vesper (improved conversion rates via HubSpot integration).

## Competitive comparison

| Feature | Salesroom | Demodesk | Cluely | Gong |
|---|---|---|---|---|
| Meeting platform | Own platform | Own platform | Overlay on Zoom/Meet | Bot joins Zoom/Meet/Teams |
| Real-time coaching | Yes (native) | Yes (native) | Yes (overlay) | No (post-call only) |
| Buyer engagement scoring | Yes (live) | Limited | No | Post-call only |
| API | None | REST V2 | None | REST (extensive) |
| CRM depth | HubSpot/Salesforce | SF/HS/Pipedrive | Via Merge.dev | Deep (all major CRMs) |
| Pricing | Free / $49 / Custom | €49/user/mo | $20/mo | ~$1,200-1,600/user/yr |
| Buyer adoption risk | High (new platform) | High (new platform) | None (overlay) | None (bot) |
