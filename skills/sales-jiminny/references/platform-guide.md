# Jiminny Platform Reference

## Platform overview

Jiminny is a conversation intelligence and revenue intelligence platform that captures emails, phone calls, and video conversations to extract actionable sales insights. Positioned as a coaching-focused, mid-market alternative to Gong — more accessible pricing without the $5K-50K platform fee, but less deep analytics and ecosystem breadth. SOC 2 Type II certified with GDPR/CCPA/HIPAA compliance.

**Target audience**: Mid-market sales teams (20-200 reps) wanting conversation intelligence and coaching without Gong-level pricing. Also used by customer success and revenue operations teams.

## Key modules

### AI Notetaker
- Automatic call recording and transcription (60+ languages)
- AI-generated summaries and action items
- Eliminates manual note-taking during calls
- Works across phone calls, video meetings, and emails

### Conversation Intelligence
- Extracts GTM insights from conversations
- Competitive intelligence — real-time visibility into competitor mentions during deals
- Topic tracking and keyword detection
- Cross-call analytics for identifying patterns

### Revenue Intelligence
- Pipeline management with real-time risk and opportunity identification
- Deal dynamics visibility — which deals are progressing, which are stalling
- Win/loss analysis from conversation patterns
- Board-ready revenue insights

### Sales Coaching
- Call scoring against configurable criteria
- Performance tracking over time
- Manager coaching tools with actionable insights from call analysis
- Team-wide benchmarking

### CRM Logging
- Automatic sync of call notes, summaries, and metadata to CRM
- Eliminates manual CRM data entry
- Activity timeline enrichment

## Pricing and limits

| Seat type | Price | What's included |
|---|---|---|
| Recording Seat | From $83/mo | Full recording, transcription, AI insights, CRM sync |
| Insights Seat | From $42/mo | View/listen/analyze calls recorded by others — no recording capability |
| Listener Seat | $0/mo | Playback access only |

- **Minimum contract**: 12 months
- **Billing**: Monthly or annual (discounted)
- **No platform fee** — unlike Gong's $5K-50K platform fee, Jiminny charges a one-time setup fee only
- **14-day free trial** available (no credit card required)

## Integrations

### CRM (native)
- **Salesforce** — deep integration, call transcripts synced to opportunity/contact records
- **HubSpot** — native integration, imports recorded outbound calls from HubSpot dialer every 30 minutes
- **Zoho** — native
- **Pipedrive** — native
- **Close** — native (also doubles as a dialer integration)
- **Bullhorn** — native (recruiting-focused CRM)
- **Copper** — native
- **Microsoft Dynamics** — native

### Dialers
- 8x8, Aircall, Apollo, Bloobirds, Close, Cloudcall, Cloudtalk, Connect and Sell, Dialpad, Five9, RingCentral

### Video conferencing
- Google Meet, Microsoft Teams

### Sales tools
- Amazon Connect, Outreach, Salesloft, Planhat

### Multi-currency support
Available with HubSpot CRM — multiple deal currencies managed natively.

## API

Jiminny offers a **partial REST API** with data returned in JSON format.

### Authentication
- API key generated via Organization Settings → General → API Key section
- **Admin/Owner access required** to generate keys
- Keys should be shared only through secure methods (1Password, Azure Secure Blob) — never via email

### Rate limits
- `getActivities` endpoint: **30 requests per minute**
- All other endpoints: **120 requests per minute**

### Data available via API
Each activity record contains:
- **Metadata**: title, host, participants, duration, date/time
- **Playback statistics**: listen count, coaching activity, automated call scoring
- **Coaching frameworks**: ratings, coach and coachee information
- **Transcriptions**: full call transcript
- **CRM data**: linked records and fields

### Download links
Video content and call recording download links are **active for 24 hours** once issued. Fetch and persist media promptly.

### Best practices
- Start with 500-1,000 activities per batch
- Pull data regularly in manageable increments rather than large annual dumps
- Queue requests to respect rate limits — use a token-bucket limiter

### API docs
- Help Center: https://help.jiminny.com/en/collections/9687417-jiminny-api
- Swagger UI: https://jiminny.github.io/customer-api-docs/ (JS-rendered — may require browser to view)

## Security and compliance

- **SOC 2 Type II** certified (annual audits)
- **GDPR**, **CCPA**, **HIPAA** compliant
- **256-bit AES** encryption for data in transit and at rest
- **AWS-hosted** with disaster recovery
- **SAML2 SSO** and role-based permissions
- **2FA** available
- **99.9% uptime** guarantee

## Workflow setup

### Initial setup
1. Create Jiminny account and configure organization settings
2. Connect your CRM (Salesforce/HubSpot/etc.) via native integration
3. Connect your dialer(s) — each dialer has its own integration setup
4. Connect calendar (Google Calendar) for meeting association
5. Assign seat types to team members (Recording for reps, Insights for managers)
6. Configure coaching frameworks and scoring criteria

### Recording workflow
1. Rep makes a call via connected dialer or joins a video meeting
2. Jiminny automatically records and transcribes the conversation
3. AI generates summary, action items, and coaching insights
4. Call data syncs to CRM automatically
5. Manager reviews calls via dashboard and provides coaching feedback

### Coaching workflow
1. Manager reviews call scores and identifies coaching opportunities
2. Uses Jiminny's coaching tools to annotate specific call moments
3. Shares coaching feedback with reps
4. Tracks improvement over time via performance dashboards

## Deep dives

### HubSpot integration details
- Jiminny imports recorded outbound calls made through the HubSpot dialer every 30 minutes
- Supports multi-currency deal management
- Call transcripts and summaries logged to contact/deal records
- Bi-directional sync for contact and deal data

### Salesforce integration details
- Call transcripts synced to opportunity and contact records
- Activity timeline enrichment
- Custom field mapping available
- Connected app authorization required

### Dialer integration architecture
Each supported dialer uses a different integration method:
- **Aircall**: Native webhook-based integration
- **Dialpad**: OAuth2-based connection (Jiminny maintains open-source OAuth2 libraries for many dialers)
- **RingCentral**: Native integration
- **Five9**: Native integration
- Not all dialers support all features — verify specific capabilities during evaluation

### Jiminny vs Gong comparison

| Dimension | Jiminny | Gong |
|---|---|---|
| Pricing | ~$83/mo per recording seat | ~$133/mo + $5K-50K platform fee |
| API | Partial REST, 30-120 req/min | Full REST, 3 req/sec, 10K/day, webhooks |
| CRM depth | 8 native CRMs | Salesforce/HubSpot/Dynamics (one at a time) |
| Analytics | Accessible coaching-first | Deep enterprise deal intelligence |
| Ecosystem | Mid-tier | Largest in category (230+ partners) |
| Compliance | SOC 2/GDPR/CCPA/HIPAA | SOC 2/GDPR/CCPA/HIPAA |
| Best for | Mid-market teams wanting coaching without Gong pricing | Enterprise teams needing deep revenue intelligence |

## Referral program

- **Earn 10% of annual contract value**, up to $5,000
- **$100 gift card** when referral books and attends a demo
- Signup: https://jiminny.com/referandearn

## Documented customer results

- 11% ARR growth (Connectd)
- 20% increase in average order value (Cision)
- 37% churn reduction (Lemon.io)
