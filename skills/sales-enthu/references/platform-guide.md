# Enthu.AI Platform Reference

## Platform overview

Enthu.AI is an AI-powered conversation analytics platform positioned as "Agentic AI for Contact Center Intelligence." It targets small-to-mid contact centers, sales teams, BPOs, and consumer brands who need automated call QA without Gong-level pricing or 6-month implementations. Headquartered in Newark, Delaware.

Key differentiators vs enterprise tools (Gong, CallMiner, NICE):
- **Fast setup** — go live in hours, not weeks or months
- **No minimum commitments** — no minimum agent count, no long-term contracts required
- **100% call auto-scoring** — scores every call, not 2-5% sampling
- **Affordable** — starts at ~$15-69/user/mo vs Gong's $1,000+/agent/yr

## Key modules

### Auto QA with GenAI
- Automated quality assurance scoring on 100% of calls
- Custom scorecard builder — define evaluation criteria specific to your team
- AI scores calls against configured criteria: required disclosures, tone, script adherence, issue resolution
- Supervisors see every call scored, ranked by priority, and linked to coaching moments
- No manual sampling needed — the system surfaces the calls that need attention

### AI Transcription
- Automatic call transcription with multi-language support
- Speaker diarization (speaker separation)
- Keyword and phrase detection/tracking

### Agent Coaching
- Coaching moments flagged automatically from scored calls
- Per-agent performance tracking over time
- Manager dashboards showing team-wide coaching needs
- Connects QA scores to coaching workflows

### Sentiment Analysis
- Real-time sentiment detection during calls
- Tracks sentiment shifts and patterns
- Useful for identifying at-risk customers and escalation-worthy calls

### Compliance Monitoring
- Automated PII redaction — strips sensitive data from transcripts
- Script adherence checking
- Required disclosure verification
- Compliance violation flagging

### Reporting & Analytics
- Agent summary analytics and performance trends
- Call summary dashboards
- Real-time alerts for threshold violations
- Team-wide trend reporting

**Known limitation**: Reports lack drill-down by campaign or agent group. Users have requested more granular filtering.

## Pricing and limits

Pricing is not transparently published. Data from review sites (conflicting):

| Source | Price | Notes |
|---|---|---|
| SoftwareSuggest | $15/mo (Gold plan) | Single tier listed |
| SourceForge | $59/user/mo | Starting price |
| Zonka Feedback article | $69/user/mo | In comparison table |

**What's consistent across sources:**
- Free trial available
- No minimum agent commitments (unlike Gong, CallMiner, Tethr)
- Custom pricing based on agent count and call volume
- Subscription-based (monthly or annual)

**Recommendation**: Get a direct quote. Pricing appears to depend on team size, call volume, and contract length.

## Integrations

### Dialers / Telephony
- Aircall
- RingCentral
- Freshcaller
- Twilio
- GoToConnect
- Dialpad

### CRM
- HubSpot
- Pipedrive
- Bullhorn
- Close

### Meeting platforms
- Zoom
- Webex (via Webex App Hub)

### Custom integrations
- Enthu will build custom integrations for telephony platforms not in their supported list
- Built during onboarding at no extra charge
- Ingestion methods: direct API, SIP trunk recording, or post-call file upload

### Integration setup
- No coding required — pre-configured connectors
- Go live in days, not weeks
- Support via hello@enthu.ai

## API

**No public API documentation available.** Enthu.AI mentions "secure APIs and pre-built connectors" on their marketing site, but no published REST/GraphQL docs, no Postman collection, no OpenAPI spec found.

GetApp lists "API not available" — though this may be outdated.

If API access is critical for your use case, confirm availability and scope directly with Enthu's sales team before committing.

## Workflow setup

### Initial setup (recommended order)

1. **Connect your dialer** — Enthu needs call recordings flowing in. Connect Aircall, RingCentral, or whichever dialer you use. Verify calls are appearing in Enthu within a few hours.

2. **Build your first QA scorecard**
   - Start with 5-8 evaluation criteria
   - Mix binary (did/didn't) and scaled (1-5) criteria
   - Example criteria for a support team:
     - Greeting: Did the agent identify themselves and the company?
     - Problem identification: Did the agent confirm the customer's issue?
     - Resolution: Was the issue resolved or properly escalated?
     - Closing: Did the agent confirm satisfaction and offer further help?
     - Compliance: Were required disclosures made?

3. **Configure auto-scoring thresholds**
   - Set score ranges that trigger coaching alerts (e.g., <60% = needs review)
   - Rank calls by priority so managers focus on the most impactful coaching moments

4. **Enable agent self-review**
   - Give agents access to their own scored calls
   - Self-review before manager coaching sessions improves receptiveness

5. **Connect CRM** (after scoring is stable)
   - Push call insights to HubSpot or Pipedrive
   - Link scored calls to customer records

### Ongoing operations

- **Weekly**: Review auto-flagged calls, conduct coaching sessions based on scoring trends
- **Monthly**: Adjust scorecard criteria based on team performance data, calibrate scoring with managers
- **Quarterly**: Review team-wide trends, compare pre/post coaching performance

## Competitive positioning

| Feature | Enthu.AI | Gong | CallMiner | NICE CXone |
|---|---|---|---|---|
| Setup time | Hours | Weeks-months | Weeks-months | Weeks-months |
| Minimum commitment | None | $1,000+/agent/yr + setup fees | Minimum user count | Enterprise contracts |
| Auto QA scoring | 100% of calls | Sampling-based | 100% of calls | 100% of calls |
| Agent coaching | Yes | Yes (deeper) | Yes | Yes |
| Revenue intelligence | No | Yes (deal boards, forecasting) | No | No |
| API docs | Not published | Extensive REST + webhooks | Yes | Yes |
| Target market | SMB-mid contact centers | Enterprise sales | Enterprise contact centers | Enterprise contact centers |
| Compliance/PII redaction | Yes | Yes | Yes | Yes |
