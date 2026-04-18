# Revenue.io Platform Reference

## Platform overview

Revenue.io (formerly ringDNA, founded 2013, HQ Los Angeles) is a Salesforce-native revenue orchestration platform that unifies dialing, sales engagement, conversation intelligence, real-time coaching, and AI into a single system. Unlike Gong (post-call analysis) or Salesloft (engagement-first), Revenue.io is built entirely on Salesforce's data model — all activity logs directly to CRM objects without sync or replication.

Target audience: Sales teams of 15+ reps running on Salesforce who want to consolidate dialer + engagement + coaching + analytics into one tool without creating a "shadow CRM."

## Key modules

### RingDNA Dialer (all tiers)
- Click-to-dial from any Salesforce record or Chrome page
- Global local presence dialing — shows a local area code to prospects
- Voicemail drop — pre-recorded voicemails sent with one click
- DialNext — automated sequential dialing through a list
- Call transfer (warm/cold) between reps
- Automatic call recording and activity logging to Salesforce
- CallerDNA — inbound routing based on Salesforce data

### Guided Selling (Engage tier+)
- Multi-channel cadences: email, phone, SMS, LinkedIn (tracked)
- Dynamic lead prioritization — AI surfaces highest-value prospects
- Quick Actions — one-click task execution
- Email/SMS sequencing with personalization
- Opportunity playbooks — stage-specific activities
- Re-engagement sequences for cold leads
- Centralized task management (separate from Salesforce tasks — see Gotchas)

### Moments — Real-Time Coaching (Engage tier+)
- In-call coaching notifications based on keywords, phrases, or deal stage
- Objection handling prompts delivered live during conversations
- Compliance alerts (e.g., don't mention competitor pricing)
- Process adherence monitoring — ensures reps follow the playbook
- Manager listen-in mode for live coaching

### Conversation Intelligence (Orchestrate tier)
- Automatic call recording, transcription, and AI scoring
- 400+ scoring criteria for automated call evaluation
- AI-generated call summaries and action items
- Topic and keyword detection across calls
- Talk/listen ratio and sentiment analysis
- Searchable call library with filters

### Revenue Intelligence (Orchestrate tier)
- Deal scoring and pipeline risk identification
- AI-driven revenue forecasting
- Hundreds of pre-built reports and dashboards
- Activity-to-outcome attribution
- Ask Revenue — natural language queries against sales data
- Agentic AI workflows for automated follow-ups

## Pricing and limits

Revenue.io uses custom, quote-based pricing. No prices are published on their website.

**Benchmark data (Vendr, 2025-2026):**
- Starting: ~$2,400/mo
- Median annual contract: ~$59,460
- Minimum recommended: 15+ seats
- Licensing: per-user, tiered by module

| Tier | Key additions | Best for |
|---|---|---|
| **Activate** | RingDNA Dialer, Moments coaching, CallerDNA, Local Presence, call recording, basic omnichannel (SMS/MMS/IVR) | SDR teams focused on connect rates |
| **Engage** | Everything in Activate + Guided Selling cadences, Dynamic Lead Prioritization, email/SMS sequencing, opportunity playbooks | Teams wanting structured outbound workflows |
| **Orchestrate** | Everything in Engage + Ask Revenue, Deal Scoring, AI summaries, AI Coaching Feedback, Revenue Intelligence Dashboard, Agentic AI, full Conversation Intelligence | Teams wanting AI-driven revenue execution |

## Integrations

**Native (Salesforce-based):**
- Salesforce (core — runs on SF data model)

**Communication:**
- Zoom, Microsoft Teams, Google Meet (video meeting recording)
- Gmail, Microsoft Outlook (email tracking)
- Google Calendar (meeting scheduling)

**Telephony:**
- Five9, Twilio (contact center integrations)

**Marketing automation:**
- HubSpot (bi-directional sync)
- Adobe Marketo Engage
- ActiveCampaign

**Data & intelligence:**
- Dun & Bradstreet (firmographics)
- 6sense (intent signals)

**Video & engagement:**
- Vidyard, Wistia

**Sales:**
- Qualified (conversational marketing)

**Infrastructure:**
- Google Cloud Platform
- Google Ads
- Nylas (universal email connectivity)

**No Zapier or Make integrations documented.** Custom integrations require working with Revenue.io support. No public API.

## Data model

Revenue.io stores data natively in Salesforce objects. Key objects:

- **Activity** — calls, emails, SMS logged as Salesforce Tasks or Events
- **Call Recording** — stored and accessible via Revenue.io UI, linked to Salesforce records
- **Cadence/Sequence** — Guided Selling cadences stored as Revenue.io custom objects in Salesforce
- **Scorecard** — AI-generated call scores linked to recordings
- **Dashboard** — Revenue Intelligence data surfaced via embedded analytics

Since everything lives in Salesforce, you can build Salesforce reports and dashboards on Revenue.io data using standard SOQL/reporting tools.

## Workflow setup

### Setting up the dialer
1. Install the Revenue.io managed package from Salesforce AppExchange
2. Install the RingDNA Chrome extension for click-to-dial
3. Configure call dispositions (keep to 3-5 options for speed)
4. Set up local presence numbers for target geographies
5. Configure CallerDNA routing rules for inbound calls
6. Test with a sandbox call before rolling out

### Setting up Guided Selling cadences
1. Define cadence steps — mix of email, phone, SMS, LinkedIn
2. Set entry criteria (Salesforce field values — standard or custom)
3. Configure exit criteria (replied, booked meeting, opted out)
4. Set up Dynamic Lead Prioritization rules
5. Assign cadences to rep groups
6. Monitor cadence performance in Revenue Intelligence dashboards

### Setting up Moments coaching
1. Define coaching triggers — keywords, phrases, or deal stage transitions
2. Create notification content — coaching tips, talk tracks, compliance alerts
3. Test triggers on sandbox calls with a colleague
4. Roll out to the team in phases — start with 3-5 triggers, expand based on feedback
5. Review trigger effectiveness monthly — remove triggers with low engagement

## Deep dives

### Salesforce-native architecture
Revenue.io's key differentiator is that it runs ON Salesforce, not alongside it. This means:
- No data sync delays — activity appears in Salesforce immediately
- No "shadow CRM" — reps don't need to log into a separate system
- Salesforce permissions, sharing rules, and profiles control Revenue.io access
- Standard Salesforce reports and dashboards work on Revenue.io data
- Changes to Salesforce objects (custom fields, page layouts) are reflected in Revenue.io

The trade-off: Revenue.io ONLY works with Salesforce. If you ever migrate off Salesforce, you lose Revenue.io.

### Revenue.io vs Gong
| Dimension | Revenue.io | Gong |
|---|---|---|
| Core approach | Real-time in-call coaching | Post-call analysis |
| CRM | Salesforce-native (no sync) | Syncs to Salesforce (shadow CRM) |
| Dialer | Built-in enterprise dialer | Basic dialer (added 2023) |
| Cadences | Built-in Guided Selling | No native engagement |
| Coaching | Live Moments + post-call scoring | Post-call coaching only |
| Analytics | Revenue Intelligence dashboards | Gong Insights |
| API | No public API | REST API available |
| Pricing | Custom (~$59K/yr median) | $1,200-1,600/user/yr + platform fee |
| Best for | Salesforce teams wanting all-in-one | Teams wanting best-in-class post-call CI |

### Revenue.io vs Salesloft
| Dimension | Revenue.io | Salesloft |
|---|---|---|
| CRM | Salesforce-only | Multi-CRM (Salesforce, HubSpot, Dynamics) |
| Real-time coaching | Moments (live prompts) | Post-call only |
| Dialer | Enterprise-grade built-in | Built-in |
| Engagement | Guided Selling cadences | Rhythm cadences (more mature) |
| CI quality | Full suite (Orchestrate) | Limited (acquired Drift for AI) |
| Best for | Salesforce-native all-in-one | Multi-CRM teams wanting engagement-first |
