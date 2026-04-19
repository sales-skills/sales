# Trellus Platform Reference

## Platform overview

Trellus (by Outpost Labs Inc.) is an AI-powered parallel dialer and real-time coaching tool for SDR teams. It runs as a Chrome extension that embeds directly inside existing sales engagement platforms (Salesloft, Outreach, HubSpot, Apollo) and CRMs (Salesforce, Zoho), eliminating tab-switching. Founded in 2022 (YC W22, New York), Trellus targets individual SDRs and small-to-mid-market sales teams with aggressive pricing and a lightweight deployment model.

Key differentiators vs competitors:
- **Chrome extension model** — no separate app, no IT deployment. Install and start dialing inside your existing SEP.
- **Price point** — individual plans at $34.99/mo (discounted) vs Nooks ~$5K/user/yr and Orum $250-500/user/mo.
- **Superhuman for LinkedIn** — unique consolidated LinkedIn inbox feature not offered by Nooks/Orum.
- **Voice agents** — AI practice bots for rep training and inbound call handling.

## Key modules

### Parallel Dialer
- Dials up to 5 lines simultaneously within supported SEPs
- Power dialing (single-line) available on lower tiers
- Voicemail drop automation
- Eliminates tab-switching — dialer lives inside Salesloft/Outreach/HubSpot/Apollo
- Call logging and disposition auto-synced to CRM
- Executes dial tasks from your SEP's task queue

### Real-time Coaching (Business tier)
- Live guidance during active calls — objection handling, competitor positioning, pacing cues
- Pre-built objection-handling scenarios
- Script adherence monitoring
- Customizable talk tracks per campaign/segment
- Sub-second latency coaching prompts

### Voice Agents
- **Sales practice agents**: Simulate prospect conversations for rep training and onboarding
- **Inbound handling**: AI agents for appointment setting, FAQ response, data collection, call routing
- Unlimited AI practice calls on Parallel tier and above
- Custom persona configuration for realistic roleplay

### Call Analytics & Scoring
- Automated QA on 100% of calls
- Performance metrics tracking per rep and team
- Gap analysis between top and bottom performers
- Structured data capture from conversations
- Custom scoring criteria

### Virtual Salesfloor
- Remote team collaboration environment
- Live call monitoring and shadowing
- Team leaderboards and gamification
- Structured call blitz support
- Win celebration features

### Superhuman for LinkedIn
- Consolidated inbox combining LinkedIn + Sales Navigator DMs
- Message snoozing and categorization
- Keyboard shortcuts for faster navigation
- Snippet auto-fill for common responses
- Conversation tracking and analysis

### Number Health
- Automatic spam list monitoring across carriers
- Number rotation automation to maintain high connect rates
- Pool of additional phone numbers included per plan (5 on Power, 8 on Parallel)
- Spam remediation workflows

## Pricing and limits

*Best-effort from research — pricing appears heavily discounted, confirm with Trellus directly.*

| Plan | Price | Original price | Key features |
|---|---|---|---|
| Free | $0/mo | — | Chrome extension, basic dialing |
| Power BYOD | $34.99/mo | $59.99/mo | Bring your own dialer, single-line power dialing, Superhuman for LinkedIn |
| Power | $34.99/mo | $99.99/mo | Power dialing in SEP, Google Sheets/Clay integration, voicemail drop, 5 additional numbers with spam remediation, Superhuman for LinkedIn |
| Parallel | $34.99/mo | $149.99/mo | Multi-line parallel dialing (up to 5 lines), voicemail drop, unlimited AI practice calls, 8 additional numbers with spam remediation, Superhuman for LinkedIn |
| Business | Custom | Custom | Everything in Parallel + real-time coaching, team analytics, conversational intelligence, custom reporting, AI modeling, customizable AI research |

**Plan-gated features:**
- Real-time coaching cues → Business only
- Team analytics and conversational intelligence → Business only
- AI practice calls (unlimited) → Parallel and above
- Parallel dialing → Parallel and above
- Number pool (spam remediation) → Power and above

## Integrations

**Sales Engagement Platforms (embedded dialing):**
- Salesloft
- Outreach
- Apollo
- Gong Engage
- VanillaSoft
- Amplemarket
- Lemlist

**CRMs:**
- Salesforce
- HubSpot
- Zoho
- Close
- Attio

**Other:**
- Google Sheets
- Clay
- Unify
- OpenPhone

Trellus claims 20+ dialer integrations and will build custom integrations within 1-2 days on request.

## Data model (API)

Trellus has a RESTful API at `https://api.bytrellus.com/v1`.

- **Authentication**: API key via `Authorization` header. Key is auto-generated on account creation, viewable in Account > Integrations.
- **Format**: JSON over HTTPS
- **Postman collection**: Available for download from the help center
- **Sandbox**: Separate sandbox environment with different base URL

*Full API docs at support.bytrellus.com were inaccessible (403). See `references/trellus-api-reference.md` for what was recoverable.*

## Workflow setup

### Setting up parallel dialing in Salesloft/Outreach

1. Install Trellus Chrome extension from Chrome Web Store
2. Navigate to your SEP (Salesloft, Outreach, etc.)
3. Trellus panel appears embedded in the SEP interface
4. Connect your CRM for call logging (Settings > Integrations)
5. Configure phone number pool (Settings > Number Health)
6. Enable parallel dialing mode (toggle in Trellus panel)
7. Load a cadence/task list in your SEP
8. Click dial — Trellus dials up to 5 numbers simultaneously
9. When a prospect answers, other lines disconnect and the call routes to you

### Setting up number health

1. Navigate to Number Health in Trellus settings
2. View spam status for each number in your pool
3. Enable auto-rotation — Trellus cycles through healthy numbers automatically
4. Set rotation frequency based on call volume
5. Monitor spam remediation dashboard for numbers flagged by carriers
6. Add new numbers as needed (5 included on Power, 8 on Parallel)

### Setting up voice agents for training

1. Navigate to Voice Agents in Trellus
2. Choose agent type: Practice (sales training) or Inbound (call handling)
3. For practice agents: configure prospect persona, objections, company context
4. Reps dial the practice agent and run through the scenario
5. AI scores the interaction and provides feedback
6. Review practice session analytics in the coaching dashboard

## Deep dives

### Trellus vs Nooks vs Orum comparison

| Feature | Trellus | Nooks | Orum |
|---|---|---|---|
| Parallel lines | Up to 5 | Up to 5 | Up to 10 |
| Pricing | ~$35/mo individual | ~$5K/user/yr | $250-500+/user/mo |
| Deployment | Chrome extension | Standalone app | Standalone app |
| Email/SMS sequencing | No | Yes | No |
| Data enrichment | No | Yes (9 providers) | No |
| Real-time coaching | Yes (Business tier) | Battlecards only | No |
| AI practice bots | Yes | Yes | Yes |
| Virtual salesfloor | Yes | Yes | Yes |
| LinkedIn tool | Yes (Superhuman) | No | No |
| Contract | Monthly available | Annual | Annual |
| Minimum seats | None | 5 | Varies |

**Choose Trellus when**: Budget-conscious, want monthly billing flexibility, need LinkedIn inbox management, already have a strong SEP for sequencing, want real-time coaching during calls.

**Choose Nooks when**: Need an all-in-one workspace (dialer + sequencing + enrichment + coaching), willing to pay premium for bundled features, have 5+ reps.

**Choose Orum when**: Need maximum parallel lines (10), high-volume dialing is the primary metric, willing to pay for dedicated infrastructure, want Boost Connect reputation management.

### SOC 2 Type II compliance

Trellus holds SOC 2 Type II certification. This covers:
- Data encryption in transit and at rest
- Access controls and authentication
- Monitoring and alerting
- Incident response procedures
- Vendor management

Relevant for enterprise procurement and security reviews.
