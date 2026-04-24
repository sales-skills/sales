# Platform-Specific Call Review Guide

Detailed call review capabilities for each conversation intelligence and QA platform — how it records, scores, and surfaces coaching insights from sales calls.

## Table of contents

- [Revenue.io](#in-revenueio)
- [Seismic](#in-seismic)
- [ZoomInfo (Chorus)](#in-zoominfo-chorus)
- [Outdoo](#in-outdoo-formerly-meetrecord)
- [Jiminny](#in-jiminny)
- [Enthu.AI](#in-enthuai)
- [NICE CXone](#in-nice-cxone)
- [Sybill](#in-sybill)
- [Balto](#in-balto)
- [Weflow](#in-weflow)

### In Revenue.io

- **Conversation Intelligence (Orchestrate tier)**: Revenue.io records, transcribes, and AI-scores calls using 400+ criteria. Access call recordings and transcripts from within Salesforce — no separate tool needed.
- **AI summaries**: Automatic call summaries with action items, topics discussed, and key moments.
- **Scoring and review**: Managers can review AI-scored calls, filter by score range, and focus coaching on the lowest-scoring interactions. Scoring criteria are configurable.
- **Talk/listen ratio**: Track how much each participant spoke — useful for identifying reps who talk too much and don't listen.
- **Searchable call library**: Search across all recordings by keyword, topic, or deal — useful for finding examples of great discovery calls or objection handling.
- **Note**: Conversation Intelligence requires the Orchestrate tier (highest). Activate and Engage tiers include call recording but not AI scoring, summaries, or the searchable library.

### In Seismic

- **Meeting Intelligence**: Seismic records and transcribes sales meetings with AI-generated summaries, key moment detection, and action items. Available for Zoom, Teams, and other video platforms.
- **Coaching integration**: Meeting recordings tie directly into Seismic Learning — managers can create coaching moments from specific call segments and assign them as learning exercises.
- **Content recommendations**: After a meeting, Seismic's AI suggests follow-up content (case studies, one-pagers, proposals) based on topics discussed in the call.
- **Analytics**: Track talk ratio, question frequency, and topic coverage across the team. Identify coaching opportunities by comparing rep performance patterns.
- **Note**: Seismic's Meeting Intelligence is a newer module — if your team already uses Gong or Chorus for conversation intelligence, Seismic's meeting features complement rather than replace them (Seismic has a native Gong integration).

### In ZoomInfo (Chorus)
- **Call recording & transcription** — Chorus (acquired by ZoomInfo) records and transcribes sales calls with AI-powered analysis
- **Deal insights** — automatically tracks mentions of competitors, pricing discussions, next steps, objections, and decision criteria across all calls in a deal
- **Coaching metrics** — talk-to-listen ratio, longest monologue, question frequency, filler words. Manager dashboards show rep-level trends.
- **Smart Playlists** — curate collections of call moments (best discovery questions, great objection handling) for team training
- **CRM sync** — call summaries, key moments, and action items auto-logged to CRM opportunity records
- **Momentum** — ZoomInfo's deal intelligence layer uses Chorus data + CRM data + engagement signals to predict deal outcomes and flag risks
- **Integration with ZoomInfo data** — Chorus enriches call participants with ZoomInfo contact data, showing title, seniority, and buying role during playback

### In Outdoo (formerly MeetRecord)
- **Conversation Intelligence** — Outdoo records and transcribes calls with AI scoring on discovery, qualification, and negotiation. Intent trackers detect topics automatically. Transcripts split by intent and speaker (unique to Outdoo).
- **Buyer Intelligence** — Personality-based buyer profiles, sentiment recognition, risk appetite assessment, negotiation guidance generated from the call.
- **AI-based call scoring** — Rubric-based scoring against methodology criteria (MEDDIC, SPIN, BANT). Performance monitoring tracks rep improvement over time.
- **Closed-loop coaching** — Real call insights feed directly into AI Roleplay scenarios, so reps practice their specific weaknesses identified from call reviews.
- **CRM auto-fill** — Key call data (methodology fields, action items, next steps) auto-populates CRM fields via AI Docs (Premium+).
- **Integration**: Connects with Gong, Clari, Chorus, Fireflies, and Avoma for additional conversation intelligence data alongside Outdoo's own recording.

### In Jiminny
- **Call recording & transcription** — Jiminny records phone calls, video meetings, and emails with AI-powered transcription in 60+ languages. AI summaries and action items generated automatically.
- **Coaching-focused scoring** — Configurable call scoring criteria for structured review. Managers see per-rep trends over time.
- **Competitive intelligence** — Real-time tracking of competitor mentions across all recorded conversations. Useful for coaching reps on competitive differentiation.
- **CRM auto-logging** — Call summaries, scores, and action items sync to Salesforce, HubSpot, Zoho, Pipedrive, Close, Bullhorn, Copper, or Microsoft Dynamics automatically.
- **Pipeline context** — Revenue intelligence surfaces which deals are at risk, letting managers prioritize which call reviews will have the most impact on pipeline.
- **Note**: Jiminny's call scoring is more coaching-focused and accessible than Gong's deep analytics. Better for mid-market teams wanting structured coaching without Gong-level pricing.

### In Enthu.AI
- **100% auto-QA scoring** — Enthu scores every call against your custom QA scorecard (not sampling). Supervisors see calls ranked by priority with coaching moments flagged.
- **Custom scorecards** — Define evaluation criteria specific to your team: required disclosures, tone, script adherence, issue resolution, compliance. Mix binary and scaled criteria.
- **Sentiment analysis** — Tracks sentiment shifts during calls, identifies at-risk customer interactions and escalation-worthy moments.
- **Keyword tracking** — Monitor specific phrases, competitor mentions, and compliance language across all calls.
- **Compliance monitoring** — Auto-redacts PII from transcripts, checks script adherence, flags compliance violations.
- **Note**: Enthu.AI is best for contact center QA at small-to-mid scale — fast setup (hours not months), no minimums, affordable ($15-69/user/mo). Lacks Gong's deal intelligence and revenue forecasting. Stronger on QA automation than coaching depth.

### In NICE CXone

- **Quality Management (QM)**: CXone's built-in QM module (Essential Suite+ at $135/agent/mo) provides evaluation forms for structured call review, coaching workflows triggered by low scores, and supervisor workspace for real-time call monitoring.
- **Screen + voice recording**: Screen recording alongside voice recording gives full interaction visibility for call review — see what the agent was doing on-screen during the call, not just what they said.
- **Interaction Analytics**: Linguistic analysis on 100% of interactions (higher tiers) — sentiment tracking, topic detection, compliance markers across all calls.
- **AI analytics (Complete Suite)**: AI-driven sentiment analysis and trend discovery across the entire interaction library. Identify systemic issues (e.g., calls about a specific product issue trending up).
- **Reporting limitation**: CXone's native reporting is widely cited as hard to use. For coaching analytics, consider using Data Extraction APIs to push data to external BI tools (Tableau, Power BI) for better visualization.
- **Note**: CXone's QM is built-in but lighter than dedicated conversation intelligence tools. It handles structured evaluation and basic coaching workflows well but lacks AI-powered call scoring, methodology-based scoring (MEDDPICC/SPIN), and advanced coaching moment detection. For deeper call review analytics, layer Observe.AI, Balto, or Cresta on top of CXone.

### In Sybill

- **Magic Summaries**: Sybill automatically generates AI summaries after every call — includes key topics, action items, talking points, and deal-relevant data extraction. Summaries push to CRM and Slack.
- **Ask Sybill for call queries**: Query specific calls or patterns across calls using natural language — "What did [prospect] say about budget?" or "Which calls this week mentioned [competitor]?"
- **CRM Autofill** (Business+): Sybill extracts MEDDPICC/BANT/SPICED criteria from calls and auto-populates CRM fields. Managers can verify qualification data was captured correctly without re-listening.
- **Deal Workspace** (Business+): Pipeline view with deal health signals, activity timeline, and risk indicators — useful for identifying which deals need call review based on risk signals rather than random sampling.
- **Behavioral Insights / Buyer EQ** (Zoom only): Analyzes non-verbal cues (facial expressions, engagement patterns) during Zoom calls. Adds buyer sentiment scoring to call reviews. Takes ~30 min to process. Not available on Teams/Meet.
- **Follow-up drafting**: After reviewing a call, Sybill drafts a personalized follow-up email based on call content and the user's writing style.
- **Note**: Sybill's call review strengths are in deal extraction and pipeline intelligence, not in granular coaching metrics. For detailed talk-to-listen ratio, filler word tracking, or methodology scoring at Gong level, use this skill's framework with the Sybill transcript. Sybill's CRM Autofill (Business+, $90/user/mo) is the differentiator — it turns call reviews into CRM data automatically.

### In Balto

- **100% automated QA**: Balto scores every call against custom QA criteria in real-time — not post-call sampling. Supervisors see compliance adherence, script following, and coaching moments as they happen.
- **Real-time alerts**: Unlike post-call review tools, Balto alerts supervisors to at-risk calls while they're still in progress — enabling live intervention rather than after-the-fact coaching.
- **Call summaries**: Automatic AI-generated call summaries synced to Salesforce, HubSpot, or Dynamics 365. Includes key topics, compliance checks, and action items.
- **Coaching-ready insights**: Balto surfaces which agents need coaching, pulls the relevant call segments, and links them to specific guidance adherence data. Managers can prep coaching sessions without manually reviewing recordings.
- **Compliance audit trail**: Immutable, time-stamped logs of every compliance event — useful for regulated industries (financial services, insurance, healthcare) where call review has audit implications.
- **Note**: Balto's strength is real-time QA and in-call intervention, not post-call transcript analysis. For detailed post-call transcript review with MEDDPICC/SPIN scoring, use this skill's framework with transcripts. Balto complements post-call review by catching issues during the call that post-call review would find too late.

### In Weflow

- **Conversation Intelligence** ($39/user/mo): Weflow's AI notetaker joins Zoom, Teams, and Google Meet calls, records and transcribes in 96+ languages, then generates summaries, action items, and follow-up emails.
- **CRM auto-fill from calls**: AI extracts methodology fields (MEDDIC, BANT, custom frameworks) from call transcripts and writes them to Salesforce opportunity fields. Managers can verify what was discussed matches what's in the CRM without re-listening.
- **250+ pre-built AI prompts**: Ready-made prompts for extracting coaching-relevant data — objection handling, competitor mentions, next steps, discovery depth. Custom prompts also supported.
- **Coaching metrics**: Talk-to-listen ratio, key topics discussed, and objection moments surfaced per call.
- **Ask Weflow AI**: Query specific calls or patterns across all calls using natural language — "What did [prospect] say about our pricing?" or "Which calls this week had competitor mentions?"
- **Deal context**: Call review data feeds into Deal Intelligence (50+ AI health signals), so managers can prioritize which call reviews will have the most pipeline impact.
- **Salesforce-native**: All call data lives inside Salesforce — no separate tool or login needed. Works with existing Salesforce reports and dashboards.
- **Note**: Weflow's call review is strong on CRM data extraction and deal intelligence but lighter on dedicated coaching features compared to Gong's Smart Trackers or Outreach Kaia. For deep coaching analytics, pair Weflow's transcripts with this skill's scoring framework. Weflow's differentiator is that call review data automatically improves CRM data quality and forecast accuracy — the review isn't an isolated coaching exercise, it's part of a data pipeline.

### In Dialpad

- **AI Recaps**: Automatic post-call summaries with action items, key topics, and sentiment. Available on all plans. Provides a quick review without re-listening.
- **AI Transcription**: Real-time transcription powered by DialpadGPT during calls. Managers can read transcripts after the call for review. Accuracy varies with accents and background noise — use Company Dictionary for custom terms.
- **AI Scorecard**: Automated call scoring against custom criteria. Scores calls without manual review, surfacing calls that need attention.
- **AI Coaching Hub**: Sentiment analysis, CSAT tracking, and performance metrics. Managers can filter by sentiment to find problematic calls. Real-time coaching cards trigger during live calls.
- **Stats API**: Pull call analytics programmatically (async POST/GET pattern). Export call records with metadata for custom review dashboards.
- **Limitations**: Call review is part of the broader UCaaS/CCaaS platform — not a dedicated conversation intelligence tool. No methodology scorecards (MEDDIC/BANT/SPICED). No deal intelligence from calls. No CRM field auto-fill from transcripts. Transcription accuracy weaker than dedicated CI tools on accents and jargon. CRM logging requires Pro+ ($25/user/mo).
- **Best for**: Teams already on Dialpad for phones/contact center who want built-in call review without a separate tool. Contact center managers monitoring agent quality via sentiment and scorecards. Not ideal for sales teams needing deep deal-level call analysis — use Gong, Sybill, or Avoma instead.

### In Rafiki

- **Smart Call Scoring**: Automated scoring against MEDDIC, BANT, SPIN, or GAP frameworks — every call gets scored without manual review. Managers can filter by score range to find calls that need attention and skip well-executed ones.
- **Smart Call Summary**: AI-generated structured summaries with topics, objections, action items, and next steps. Quick way to review call content without re-listening.
- **Coaching playlists**: Organize scored calls into playlists by topic (objection handling, discovery, closing). Tag specific moments with coaching notes for 1:1 review sessions.
- **Ask Rafiki for call patterns**: Natural language search across all calls — "Which calls this week had pricing objections?" or "Show me calls where MEDDIC Metrics was missed." Surfaces patterns across multiple calls for systemic coaching.
- **Smart Follow-Up review**: AI-generated post-call emails tagged with key moments from the meeting — reviewing the follow-up email is a quick proxy for call quality review.
- **Note**: Rafiki's call review is strong on automated scoring and team-level patterns but lacks real-time in-call intervention (no live coaching cards or alerts during calls). Smart Call Scoring requires Premium ($49/user/mo). For real-time coaching during calls, use Balto or Cluely. For behavioral/body language analysis, use Sybill. Rafiki's strength for call review is affordable automated scoring + methodology adherence tracking at a fraction of Gong's price.
