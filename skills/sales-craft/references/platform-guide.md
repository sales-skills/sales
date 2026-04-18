# Craft Platform Reference

## Platform overview

Craft (craftflow.com, legal: Craft Technologies, Inc.) is an AI growth engine for home services companies, covering the full customer journey from inbound call to in-home appointment to post-appointment follow-up. Founded 2024 in New York. ~500 customers. 4.9/5.0 on G2. CEO: Tal Shub. Co-founder: Alex Wallish. Official ServiceTitan partner.

Key differentiator: Craft is the only home services platform that provides **real-time AI coaching during the appointment** — not 10-30 minutes after (Rilla, Siro) or between appointments via text (SalesAsk).

## Key modules

### Real-Time Field Sales Coaching (AI Ridealongs)

- Live AI guidance while reps conduct in-home sales visits
- < 5 second setup per appointment, 100% conversation coverage
- Identifies customer personality types and communication preferences in real-time
- Detects objections and buying signals as they happen
- Flags missed opportunities during the conversation
- While reps build estimates in their vehicle, AI analyzes what matters most to that customer and suggests how to present options
- Manager real-time alerts for coaching moments
- Revenue pattern analysis — what top performers do differently
- Automatic coaching distribution to replicate best practices
- Reported metrics: +43.9% close rate improvement, +31% revenue growth, 94% process adherence, 10x more coaching instances

### AI Call Center (24/7 Booking)

- AI handles inbound calls, chats, and messages 24/7
- Handles 95% of calls completely — including complex objections, edge cases, multi-step bookings
- Seamless transfer to human agents with full context when needed
- 91.4% booking rate reported, 11.2% booking rate increase after 3-6 months
- Smart capacity management — prioritizes incoming jobs by revenue potential
- Automatic call scoring of 100% of calls (not sampling) — compliance, QA criteria, sentiment
- Live CSR coaching — AI surfaces coaching moments in real-time, 2x faster coaching
- 70% QA cost reduction vs manual scoring
- Books directly in CRM, updates customer records, checks tech availability in real-time

### Revenue Recovery AI Agents

- Automatically follows up with missed opportunities, unsold estimates, and leads
- AI agents operate 24/7 with context awareness
- Remembers appointment details for personalized follow-up
- Nurtures leads until they're ready to buy
- Company reports: 1,729 jobs booked after hours, $42.15M revenue generated YTD

### Craft Intelligence

- Analyzes what top performers do differently across the team
- Revenue pattern analysis
- Coaches entire teams to replicate best practices
- Objective performance metrics for managers

## Pricing and limits

No public pricing page — all pricing is "contact for quote."

| Module | Estimated pricing | Notes |
|---|---|---|
| AI Call Center | Starting at $999/mo for unlimited calls | 24/7 coverage included |
| Field Sales Coaching | ~$2-3K/user/year (estimated from comparison articles) | Bundled with other modules |
| Revenue Recovery | Included in bundle | Not sold separately |
| Full platform | Contact for quote | Bundled pricing only — cannot buy modules separately |

Most organizations report positive ROI within the first month from increased booking rates alone.

**Plan-gated features**: Everything appears to be in one bundled tier (no free/starter/pro tiers). The platform is sold as an all-in-one growth engine.

**Comparison pricing**:
| Platform | Estimated annual cost (10 reps) | What's included |
|---|---|---|
| Craft | Contact for quote (~$20-30K est.) | Field coaching + call center + revenue recovery + intelligence |
| Rilla | $24,000+ | Field coaching only |
| Siro | $21,600 | Field coaching only |
| SalesAsk | $11,880 | Field + call center coaching |
| Gong | $100K+ | Enterprise conversation intelligence (not home services-specific) |

## Integrations

**Native two-way sync (official partners):**
- ServiceTitan (official partner — deepest integration)
- Salesforce
- HubSpot
- Jobber
- JobNimbus
- AccuLynx
- Housecall Pro
- Improveit 360
- i360
- RingCentral

Data syncs automatically. AI books directly in CRM, updates customer records, checks tech availability in real-time. CRM connection takes ~5 minutes during setup.

**No public API documentation.** Platform emphasizes pre-built integrations, not custom development.

## Target industries

HVAC, roofing, solar, plumbing, electrical, painting, windows/doors, garage doors, pest control, pool service, foundation repair, home remodeling

## Target audience segments

- **Growing teams** (3-50 reps) — scaling from manual coaching
- **Large organizations** (50+ reps) — standardizing coaching across locations
- **Franchises** — consistent coaching across franchise locations
- **Private equity platforms** — portfolio-wide coaching rollout

## Setup and implementation

- As quick as 1 hour for initial setup, 30-day full implementation roadmap
- CRM/calendar connection: 5 minutes
- Sales process upload: 2 minutes
- White-glove onboarding included
- Competitors (SalesAsk) claim 7-14 day implementation by comparison

## Compliance and data security

- All data encrypted, stored on U.S.-based servers
- Never shared with third parties
- Users maintain full control, can delete data anytime
- **Recording consent**: Legal nationwide. 11 states require customer notification: California, Connecticut, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Oregon, Pennsylvania, Washington

## Comparison: Craft vs competitors

| Feature | Craft | Rilla | Siro | SalesAsk |
|---|---|---|---|---|
| **Coaching timing** | Real-time during appointment | 10-30 min after | Halftime (mid-call summary) | Between appointments (text) |
| **Call center coaching** | Yes (AI CSR + live coaching) | No | No | Yes (Coach Dean) |
| **Revenue recovery** | Yes (AI agents) | No | No | No |
| **CRM integrations** | 10+ native (ServiceTitan official) | 5 via Merge | 6+ via Merge | ServiceTitan, Jobber, Housecall Pro, Salesforce, Lasso |
| **Public API** | No | No (Merge only) | REST API + Svix webhooks | No |
| **Pricing model** | Bundled (contact for quote) | Per-user annual | Per-user annual | Modular (contact for quote) |
| **Implementation** | 30 days (white-glove) | Not disclosed | Not disclosed | 7-14 days |
| **Founded** | 2024 | 2019 | ~2020 | ~2023 |
| **G2 rating** | 4.9/5.0 | Not widely reviewed | 5.0/5.0 (26 reviews) | Not widely reviewed |

## Deep dives

### Real-time coaching mechanics

The real-time coaching works by running AI analysis on the rep's device during the conversation. Key flow:

1. Rep starts the app before entering the home (< 5 sec setup)
2. AI listens to the conversation in real-time
3. During the conversation: identifies personality types, detects objections, flags buying signals
4. When customer raises an objection: provides exact objection handling guidance while the conversation is still happening
5. While rep builds estimate in vehicle: AI analyzes customer priorities and suggests option presentation strategy
6. After appointment: full transcript, scoring, and coaching insights synced to CRM

This is fundamentally different from Rilla/Siro (which process audio after the appointment and deliver feedback 10-30+ minutes later) and SalesAsk (which texts coaching feedback between appointments rather than during them).

### AI Call Center architecture

The AI CSR handles the full booking flow:
1. Answers inbound call/chat/message
2. Handles objections and edge cases (95% completely automated)
3. Checks technician availability in real-time via CRM
4. Books appointment directly in the scheduling system
5. Updates customer records
6. Scores the call automatically (compliance, QA, sentiment)
7. For the 5% requiring human help: transfers with full context

Supervisors get real-time coaching alerts and can intervene. The system scores 100% of calls (not a sample), reducing QA costs by an estimated 70%.
