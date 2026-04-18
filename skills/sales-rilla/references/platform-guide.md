# Rilla Platform Reference

## Platform overview

Rilla is conversation intelligence built specifically for outside/field sales. While most CI tools focus on phone and video calls, Rilla records in-person customer conversations via a mobile app and provides AI-powered coaching through virtual ridealongs. Founded by Sebastian Jimenez, backed by UiPath co-founder and others (~$10M+ raised). The platform is dominant in home services (HVAC, plumbing, roofing, solar, windows, dental, senior living) where sales reps do in-home presentations.

**Key differentiator**: Rilla replaces physical ridealongs — where a manager spends an entire day riding along with one rep — with 3-minute AI-analyzed virtual ridealongs, letting managers coach 25-30 reps/week instead of 6-7.

## Key modules

### Recording (mobile app)
- iOS and Android apps (`app.rillavoice.com` web portal)
- Reps record conversations during in-person appointments
- App runs in foreground during recording
- Recordings stored locally, uploaded when connectivity available
- Typical processing time: 15-30+ minutes after upload

### AI Transcription & Analysis
- Speech-to-text transcription of field conversations
- Speaker diarization (rep vs customer)
- AI summary of conversation key points
- Behavioral analysis: talk ratios, objection handling, script adherence
- Custom AI trained on company-specific sales processes

### Virtual Ridealongs
- Managers review AI-analyzed recordings in ~3 minutes
- Scorecard-based evaluation against company playbook
- If no formal script exists, AI learns from top performers
- Managers can leave coaching comments on specific moments

### Scorecard Customization
- Custom scorecards matching company sales process steps
- AI evaluates each recording against scorecard criteria
- Trend tracking across reps and time periods
- Identify coaching opportunities per rep

## Pricing and limits

**Pricing is not publicly listed — requires sales demo.** Best-effort estimates from review sites (2026):

| Aspect | Details |
|---|---|
| Per-user cost | ~$199-349/rep/month (~$4,000+/user/year) |
| Contract | Annual commitment required |
| Minimum users | Typically 5 licenses |
| Implementation fee | $1,500-$5,000 (varies by company size) |
| Free tier | None |
| Month-to-month | Not available |

**Plan-gated features** (based on review site reports):
- Base plan includes: field recording, AI transcription, basic scoring, mobile app
- Advanced features may require higher tiers: custom AI training, advanced analytics, multi-location management
- CRM integrations included (via Merge) — no separate integration fee reported

**Reported ROI metrics** (from case studies, not guaranteed):
- +40% average close rate increase
- +17% average ticket price increase
- 50% reduction in new rep training time
- 627% increase in individual rep monthly sales (best case)

## Integrations

### CRM integrations (via Merge unified API)
Rilla built on Merge's CRM Unified API for CRM connectivity. This means:
- **Supported CRMs**: Salesforce, HubSpot, Zoho CRM, Pipedrive, Microsoft Dynamics
- **Data models used**: Opportunities, Engagements, Engagement Types, Users
- **Bi-directional sync**: CRM appointment data enriches Rilla recordings; Rilla insights can flow back
- **Field Mapping**: Merge's Field Mapping accommodates custom CRM fields — each customer's CRM is different
- **Webhooks**: When an appointment field changes in CRM (date, status, etc.), Merge fires a webhook to Rilla in real-time
- **Adding new CRMs**: Initial Merge integration took ~1 week; each additional CRM takes ~hours

### Industry-specific integrations
- **ServiceTitan** — home services management platform (listed on ServiceTitan marketplace)
- **SPOTIO** — field sales management, territory mapping, route planning

### No public API
Rilla does not publish a developer API. All integrations go through:
1. Merge's unified API (for CRMs)
2. Native integrations (ServiceTitan, SPOTIO)
3. Contact Rilla for custom integration needs

## Recording setup and consent

### Device setup
- Install Rilla app on rep's phone (iOS or Android)
- Phone should be clipped to shirt collar/chest pocket during conversations
- App must be foregrounded during recording
- Recordings upload automatically when connectivity is available

### Recording consent (U.S.)
Recording in-person conversations is legal in all U.S. states, but **11 states require all-party consent** (customer must be notified):
- California, Massachusetts, Connecticut, Florida, Maryland, Illinois, Washington, Montana, Pennsylvania, New Hampshire, Oregon

Rilla does not auto-handle consent. Train reps to disclose recording at the start of every appointment in two-party consent states. Common approach: "I record our conversations so my team can make sure we're giving you the best service — is that okay with you?"

### Recording best practices
- **Placement**: Shirt collar clip or breast pocket — not in a bag, back pocket, or on a table far from the conversation
- **Noise**: In-person environments (basements, construction sites, outdoors) are noisier than video calls. Rilla handles moderate noise but accuracy drops with loud equipment
- **Battery**: Recording drains battery — ensure phone is charged before appointments (>50% recommended)
- **Multiple speakers**: Diarization works best with 2-3 speakers. Large group presentations may have speaker attribution errors

## Workflow setup

### Initial setup (~1hr 45min per Rilla)
1. Sign up for Rilla account (via demo/sales process)
2. Install mobile app on each rep's phone
3. Connect CRM via Merge dashboard (Salesforce, HubSpot, etc.)
4. Configure Field Mapping in Merge for custom CRM fields
5. Upload or define sales script/playbook for AI training
6. Customize scorecards to match sales process steps
7. Run test recording and verify transcription quality
8. Train managers on virtual ridealong workflow

### Daily workflow
1. Rep opens Rilla app before entering appointment
2. Rep discloses recording (if required by state law)
3. Rep conducts normal sales conversation — Rilla records
4. After appointment, recording uploads and processes (15-30+ min)
5. Manager receives notification of new recording
6. Manager conducts 3-minute virtual ridealong with AI analysis
7. Manager leaves coaching feedback on specific moments
8. Rep reviews coaching notes before next appointment

### Coaching workflow
1. Manager reviews 25-30 recordings/week via virtual ridealongs
2. AI flags high-impact coaching moments (missed objection handling, skipped script sections)
3. Scorecards show trends per rep over time
4. Manager prioritizes coaching for lowest-scoring areas
5. If no formal script exists, AI identifies patterns from top performers and surfaces them as coaching benchmarks

## Competitors and alternatives

| Tool | Price | Focus | Real-time? | Key difference |
|---|---|---|---|---|
| **Rilla** | ~$4K/user/yr | In-person field sales | No (post-appointment) | Virtual ridealongs, custom AI, home services focus |
| **Siro** | ~$3K/user/yr | In-person field sales | No (post-appointment) | Broader industry targets (political, medical, auto), offline recording |
| **SalesAsk (Dean)** | ~$1.8K/user/yr | Home services (phone + field) | No | Full lifecycle (CSR calls + field), lower price |
| **Craft** | Varies | In-home sales | Yes (during appointment) | Real-time coaching while rep is still with customer |
| **Leadbeam** | Varies | Field sales intelligence | No | Route optimization + CRM capture, not conversation coaching |
| **Gong** | ~$1.2-1.6K/user/yr | Phone/video calls | No | Enterprise revenue intelligence, not field sales |
