# Outdoo Platform Reference

## Platform overview

Outdoo (formerly MeetRecord, legal entity MeetRecord Inc.) is an AI roleplay, coaching, and revenue intelligence platform for customer-facing teams. Founded 2022, rebranded September 2025. Positioned as a mid-market Gong alternative with a unique "closed-loop coaching" approach: AI roleplay practice → real-call scoring → CRM automation → back to targeted practice. No platform fee (vs Gong's $10K). G2 rating 4.6/5 (125+ reviews), Gartner Digital Markets 4.9/5.

**Key differentiator**: Outdoo combines AI roleplay (Gong doesn't have this) with conversation intelligence and revenue intelligence in one platform, creating a closed loop between practice and performance.

## Key modules

### AI Roleplays
- Custom voice-based mock dials with AI buyer personas
- Gatekeeper simulation mode
- Multi-persona roleplays (multiple stakeholders in one scenario)
- Chat, video, and voice roleplay modes
- Background environments for immersive practice
- AI Bot builder with 1-click scenario variations
- Rubrics and AI call feedback with instant scoring
- Objection and question detection
- Sales readiness scoring
- Video AI Avatars (Premium+)

### AI Coaching
- Personalized micro-learning powered by real call data
- Courses with structured learning paths
- Gamified learning with leaderboards
- Performance monitoring and skill gap detection
- Closed-loop: real call insights feed targeted practice scenarios

### Conversation Intelligence
- AI scoring of discovery, qualification, and negotiation performance
- Transcript split by intent and speaker (Outdoo-only feature)
- AI-based Intent Trackers
- In-call Buyer Guide access
- Keyword and topic tracking
- Talk-to-listen ratio, monologue detection
- Call summaries and action items

### Revenue Intelligence (AI Deal Pulse)
- Pipeline health and forecasting analytics
- Deal acceleration tracking
- Win/loss analysis
- AI Playbooks for deal execution
- 3x more accurate forecasts (claimed)
- 54% faster deal velocity (claimed)

### Buyer Intelligence
- Personality-based buyer profiles
- In-call behavioral guidance (Do's & Don'ts)
- Role tagging and sentiment recognition
- Risk appetite assessment
- Negotiation guidance and closing strategy recommendations

### CRM Automation
- Two-way sync with Salesforce, HubSpot, Zoho, Pipedrive, Close, Dynamics 365, Attio, HighLevel, Monday, Keap, LeadSquared, FollowUpBoss
- Auto-fill custom fields using AI Docs
- Methodology-based extraction: MEDDIC, SPIN, BANT
- Custom field mapping by sales process

### AI Roleplay Hiring Assessments
- Evaluate candidates through simulated selling scenarios
- Standardized scoring rubrics for hiring
- Compare candidate performance against team benchmarks

## Pricing and limits

Outdoo has two product lines with separate pricing:

### AI Roleplay Plans
| Feature | Free | Premium | Enterprise |
|---|---|---|---|
| Price | Free | Custom | Custom |
| Unlimited roleplay bots | ✓ (Cold, Discovery + 11 more) | ✓ | ✓ |
| AI Bot builder + 1-click variations | ✓ | ✓ | ✓ |
| Rubrics & AI Call Feedback | ✓ | ✓ | ✓ |
| Objection & Question Detection | ✓ | ✓ |✓ |
| Performance Monitoring | ✓ | ✓ | ✓ |
| Assisted Evaluation | ✓ | ✓ | ✓ |
| Courses & Micro-Learning | — | ✓ | ✓ |
| Gatekeeper Simulation | — | ✓ | ✓ |
| Gamified Learning | — | ✓ | ✓ |
| Chat, Video Roleplay Modes | — | ✓ | ✓ |
| Background Environments | — | ✓ | ✓ |
| 15+ Call Recording Integrations | — | ✓ | ✓ |
| Multi-Persona Roleplays | — | ✓ | ✓ |
| Video AI Avatars | — | ✓ | ✓ |
| POC Available | — | — | ✓ |
| Professional Services | — | — | ✓ |
| Dedicated Account Manager | — | — | ✓ |
| 40+ LMS Integrations (SCORM) | — | — | ✓ |
| SSO & Advanced Security | — | — | ✓ |
| Private Cloud Storage | — | — | ✓ |
| Custom Branding | — | — | ✓ |
| Train your own AI Model | — | — | ✓ |

### Revenue Intelligence Plans
| Feature | Free | Premium | Enterprise |
|---|---|---|---|
| Price | Free | Custom | Custom |
| Call Recording & Analysis | Limited | Unlimited | Unlimited |
| Call Summary | ✓ | ✓ | ✓ |
| Buyer Persona Insights | ✓ | ✓ | ✓ |
| Objection Detection | ✓ | ✓ | ✓ |
| Deal Health Monitoring | — | ✓ | ✓ |
| Win/Loss Analysis | — | ✓ | ✓ |
| AI Playbooks | — | ✓ | ✓ |
| CRM Auto-fill | — | ✓ | ✓ |
| Performance Monitoring | — | ✓ | ✓ |
| SSO | — | — | ✓ |
| Developer APIs | — | — | ✓ |
| Dedicated CSM | — | — | ✓ |
| Private Cloud Storage | — | — | ✓ |
| MCP Server for AI Agents | — | — | ✓ |

**Billing model**: Pricing based on active recording users only. Unlimited viewer seats included. No platform fee, no support fee.

**Budget estimate** (from comparison data): ~$660-1,200/user/year. Verify directly — all tiers are custom-quoted.

## Integrations

### CRM (11 platforms)
Salesforce, HubSpot, Zoho CRM, Pipedrive, Close CRM, Microsoft Dynamics 365, Monday.com, Keap, LeadSquared, Attio, HighLevel

### Meeting tools
Google Meet, Microsoft Teams, Zoom, Zoom Phone

### Dialers (10 platforms)
Aircall, Dialpad, Close.io, CallRail, Outplay, RingCentral, HubSpot Dialer, Salesloft Dialer, Outreach Dialer, PrimeVox

### Conversation intelligence
Gong, Clari, Chorus (ZoomInfo), Fireflies, Avoma

### LMS (6 platforms)
TalentLMS, Docebo, Cornerstone OnDemand, DigitalChalk, Absorb LMS, Moodle

### Collaboration
Slack, Zapier

### Data warehouse
Snowflake

### Calendar
Google Calendar, Outlook Calendar

### Other
FollowUpBoss

**Total**: 120+ integrations across categories.

### Salesforce integration details
- Managed package from AppExchange with read+write access
- Auto-generates Outdoo conversation records linked to accounts, opportunities, contacts, leads
- AI Docs auto-fill for custom fields
- Bidirectional data sync for reporting

### HubSpot integration details
- Managed package with read+write access
- Auto-associates calls with deals and contacts
- AI Docs auto-fill for custom fields
- Bidirectional sync

## Data model (API)

### Authentication
- JWT Bearer token in Authorization header
- Generate tokens: Company Settings > Ecosystem > API Keys
- Tokens display once only — store securely
- Admin access required to create keys
- Tokens have configurable validity periods

### Base URL
`https://openapi.outdoo.ai/api/v1/`

### Key endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/conversations` | List conversations (paginated, filterable) |
| GET | `/conversations/filters` | Get conversations by saved filter ID |
| GET | `/conversation/{conversation_id}` | Fetch specific conversation details |
| GET | `/conversation/transcript/{conversation_id}` | Get conversation transcript |
| POST | `/conversation/create` | Upload manual conversation |
| GET | `/buyers` | List buyers (paginated, CRM-filterable) |
| GET | `/filters` | Fetch saved conversation filters |
| GET | `/workspaces` | List account workspaces |
| GET | `/users` | List all users |
| GET | `/users/{user_id}` | Get specific user details |
| POST | `/users/stats/` | Get user statistics |
| POST | `/interaction/stats/` | Get interaction statistics |
| GET | `/trackers/` | Fetch trackers (requires workspace_id) |
| GET | `/initiatives/` | Fetch initiatives (requires workspace_id) |
| GET | `/scorecards/` | Retrieve all scorecards |
| GET | `/health` | Health check (no auth) |
| GET | `/auth/health` | Health check with token validation |

### Pagination
- `page` (default: 1), `size`/`page_size` (max: 20, default: 10)
- `as_list` boolean (default: false) for response format

### API access
- **Enterprise-only** for direct API access
- Full ReDoc documentation at `https://openapi.outdoo.ai/redoc` (requires JavaScript)
- OpenAPI spec available at `https://openapi.outdoo.ai/openapi.json`
- All endpoints except `/health` require JWT Bearer token

## Workflow setup

### Setting up AI Roleplays for a sales team
1. Define buyer personas reflecting your actual customer base (industry, role, pain points)
2. Create scenarios for each sales stage (cold call, discovery, demo, negotiation)
3. Configure rubrics aligned to your sales methodology (MEDDIC, SPIN, etc.)
4. Enable gatekeeper simulation for cold calling practice (Premium+)
5. Set readiness score thresholds — reps must hit target before going live
6. Review performance monitoring to identify skill gaps
7. Create targeted micro-learning courses for common weaknesses

### Connecting CRM for auto-fill
1. Install the managed package (Salesforce AppExchange or HubSpot marketplace)
2. Grant read+write permissions to Outdoo
3. Work with your CSM to map AI Docs fields to CRM custom fields
4. Choose methodology (MEDDIC/SPIN/BANT) for extraction
5. Test on 5-10 calls to verify field accuracy
6. Roll out to the team with field mapping documentation

### Setting up closed-loop coaching
1. Enable call recording via meeting tool integration (Zoom/Teams/Meet)
2. Configure AI scoring rubrics for call quality
3. Set up AI Roleplays that target the skill gaps identified from real calls
4. Enable Performance Monitoring to track improvement over time
5. Create Courses for persistent skill gaps that need structured learning

## Deep dives

### Compliance & security
- SOC 2 Type II certified
- HIPAA compliant
- ISO 27001 certified
- Enterprise: private cloud storage, SSO, custom branding

### Partner program
- 15% recurring commission on referred clients (forever)
- Dedicated partner support and resources
- Signup: https://www.outdoo.ai/partners

### MCP Server (Enterprise only)
Enterprise plan includes MCP Server for AI Agents — enables Claude, Cursor, and other AI tools to access Outdoo data programmatically. Details undocumented publicly.

### Mobile app
Outdoo AI mobile app available for on-the-go access to roleplays, call reviews, and coaching content.
