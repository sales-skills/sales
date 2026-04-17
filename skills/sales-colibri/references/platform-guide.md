# Colibri.ai Platform Reference

## Platform overview

Colibri.ai is a real-time meeting transcription and conversation intelligence platform. Its key differentiator is the Sales Copilot — live AI guidance during calls with cue cards, objection handling tips, and sentiment analysis. Also offers a Legal vertical for deposition transcription with professional transcriptionist review. Targets sales teams and legal professionals. Works via Chrome extension or native Zoom app. No public API or developer integration path.

## Key modules

### AI Notetaker
- Real-time live transcription (text appears as people speak, not after)
- AI-generated meeting summaries and action items (Pro+)
- Searchable call library with recordings, transcripts, and summaries
- Audio file upload and transcription
- Meeting agendas — pre-built or custom templates that auto-check items as mentioned
- Transcript export (copy/paste)

### Sales Copilot (Growth+)
- Real-time AI guidance during live calls
- Cue cards — surface relevant information when customers mention competitors or ask challenging questions
- Monologue alerts — notify reps when they talk too long
- Sentiment analysis — real-time customer engagement signal
- Battle card generation using generative AI
- Real-time manager alerts (Scale only)

### Conversation Intelligence (Growth+)
- Team performance dashboard
- Call analytics — talk ratios, trending topics, objection patterns
- Customer pain point tracking
- Team coaching insights

### Colibri Legal
- Live transcription for depositions and court reporting
- Professional transcriptionist review within 24 hours
- Legal-grade accuracy assurance

## Pricing and limits

**Pricing as of 2026-04 — verify on colibri.ai/pricing:**

| Plan | Monthly | Annual | Transcription | Max recording | Key features |
|---|---|---|---|---|---|
| Free | $0 | $0 | 5 hrs/mo | 40 min | Recording, live transcription (English), agendas, searchable library, audio uploads, Zoom app |
| Starter | $20/mo | $16/mo | 20 hrs/mo | 90 min | Everything in Free + smart agendas, advanced search, email support |
| Pro | $50/mo | $40/mo | Unlimited | 4 hrs | AI summaries, key point extraction, Slack, team workspace, priority support |
| Growth | $60/mo | $50/mo | Unlimited | 4 hrs | Sales Copilot (real-time guidance), analytics dashboard, cue cards, monologue alerts, sentiment analysis, free viewer accounts |
| Scale | $80/mo | $70/mo | Unlimited | Unlimited | Salesforce integration, custom language model, VIP onboarding, phone calls, real-time manager alerts, 3-year video storage |

**Key plan gates:**
- AI summaries → Pro+ ($40/mo annual)
- Slack integration → Pro+ ($40/mo annual)
- Sales Copilot / real-time guidance → Growth+ ($50/mo annual)
- Analytics dashboard → Growth+ ($50/mo annual)
- Salesforce integration → Scale only ($70/mo annual)
- Custom language model → Scale only ($70/mo annual)
- Phone call recording → Scale only ($70/mo annual)

**Storage:**
- Free/Starter: not specified
- Pro/Growth: 2 years video, unlimited audio
- Scale: 3 years video, unlimited audio

**Annual billing saves 15-20%.**

## Integrations

**Video conferencing:**
- Zoom — native app integration (auto-records hosted meetings)
- Google Meet — via Chrome extension
- Microsoft Teams — supported
- Webex — supported
- RingCentral — supported
- BlueJeans — supported
- GoToMeeting — supported
- UberConference — supported
- Any platform with dial-in numbers (phone recording on Scale)

**Business tools:**
- Slack — summary sharing (Pro+)
- Salesforce — call logging and CRM updates (Scale only)

**NOT available:**
- HubSpot — no integration at any tier
- Zapier — no integration
- Webhooks — none
- Public API — none
- Make/n8n — none

**Chrome extension** — works across web-based conferencing platforms

## Workflow setup

### Setting up Colibri for a team
1. **Sign up** at colibri.ai — free plan requires no credit card
2. **Install Chrome extension** from Chrome Web Store ("Colibri – AI Note Taking & Transcription App")
3. **Grant microphone permissions** in Chrome for the extension
4. **For Zoom**: Install the native Colibri Zoom app from the Zoom Marketplace
5. **Start a call** — Colibri auto-detects and begins transcribing
6. **Review** — after the call, find the transcript and summary in your Colibri library
7. **Share** — email summaries to participants (Pro+) or send to Slack (Pro+)

### Setting up Sales Copilot (Growth+)
1. Ensure you're on Growth or Scale plan
2. **Create cue cards** — define common objections, competitor mentions, and recommended responses
3. **Configure monologue alerts** — set the threshold for talk-time warnings (e.g., alert after 90 seconds)
4. **Enable sentiment analysis** — real-time visual indicator of customer engagement
5. **For managers (Scale)** — enable real-time manager alerts to get notified during critical moments in rep calls

### Integrating with Salesforce (Scale only)
1. Go to Colibri settings → Integrations → Salesforce
2. Authenticate with Salesforce OAuth
3. Configure auto-logging: choose which call data to push (transcript, summary, key points)
4. Calls are automatically logged as activities on the matching Contact/Lead/Opportunity

## Deep dives

### Sales Copilot best practices
- Keep cue cards focused — 5-10 per topic area (competitors, pricing objections, feature questions)
- Update cue cards monthly based on trending customer objections from the analytics dashboard
- Use monologue alerts as coaching tools — reps improve talk-time balance within 2-3 weeks
- Sentiment analysis is directional, not precise — use it as a conversation signal, not a score

### Legal transcription workflow
- Schedule deposition through Colibri Legal
- Colibri provides live transcription during the session
- Professional transcriptionist reviews and certifies within 24 hours
- Certified transcript delivered in standard legal format
- Pricing for Legal is separate from standard plans — contact Colibri for quotes

### Colibri vs competitors — integration gap
Colibri's biggest weakness compared to alternatives is its integration ecosystem:
- **No API** — cannot build custom integrations or data pipelines
- **No webhooks** — cannot trigger automated workflows on meeting events
- **Salesforce only on Scale** — $70/mo vs Fathom Business ($25/mo annual) or Fireflies Business ($19/mo annual)
- **No HubSpot** — the most popular SMB CRM has no integration path
- If CRM automation is critical, evaluate Fathom, Fireflies, or MeetGeek first
