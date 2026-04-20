# Outreach Platform Reference

## Platform overview

Outreach (outreach.ai, formerly outreach.io) is an enterprise AI-powered sales execution platform. It combines sales engagement (sequences/cadences), conversation intelligence (Kaia), deal management, forecasting, and coaching into a single platform. Target audience: mid-market to enterprise sales teams (SDRs, AEs, managers, RevOps). Competes directly with Salesloft, and against point solutions like Gong (CI), Clari (forecasting), and Apollo (engagement).

## Key modules

### Sales Engagement (Sequences)
- Multi-channel sequences: email, phone, LinkedIn, custom tasks
- Rhythm AI: recommends daily actions, sequences, and touchpoints per rep
- A/B testing on email subject lines, body, and step variants
- Smart send windows based on prospect timezone and engagement history
- Automated task creation for manual steps (calls, LinkedIn touches)
- Prospect engagement signals (opens, clicks, replies) drive next-step logic

### Conversation Intelligence (Kaia)
- Joins and records live meetings (Zoom, Teams, Google Meet)
- Real-time transcription with speaker identification
- Content Cards: auto-surfaces battlecards/playbooks based on detected topics
- Action item capture: auto-extracts action items from conversation
- Post-call AI summaries with key moments highlighted
- Coaching markers: identifies talk-to-listen ratio, filler words, questions asked
- Meeting energy/sentiment detection

### Deal Management
- Deal health scoring with risk indicators
- Stakeholder mapping within opportunities
- Mutual Action Plans (shared between buyer and seller)
- Deal velocity tracking (time in stage, engagement trends)
- Pipeline views with customizable filters and rollups

### Forecasting
- AI-driven revenue forecasting
- Pipeline coverage analysis
- Gap-to-goal visibility
- Flexible rollup categories (commit, best case, pipeline)
- Manager override and submission workflows
- Reduces forecast prep time by ~44% (vendor claim)

### Coaching
- Rep performance dashboards with skills heatmaps
- Call scoring against customizable rubrics
- Kaia-powered coaching insights (real-time + post-call)
- Team benchmarking and peer comparison
- Coaching activity tracking for managers

### Account Management
- Account health scoring
- Engagement tracking across all contacts in an account
- Cross-functional orchestration (sales, success, accounts)
- Churn risk detection from engagement drops

## Pricing and limits

### Tiers (2026, approximate — quote-based)

| Tier | Price | Key features |
|------|-------|--------------|
| Amplify Core | ~$100/user/mo | Sequences, basic analytics, CRM sync |
| Amplify Plus | ~$130/user/mo | + Kaia CI, deal management, coaching |
| Amplify Pro | ~$160/user/mo | + Advanced forecasting, AI agents, full platform |

### Additional costs
- Implementation: $5,000–$25,000 depending on complexity
- Annual platform fee: $2,000–$5,000/year
- Professional services for CRM integration: varies
- Volume discounts at 20-25+ users, meaningful breaks at 50+, 100+, 250+
- Multi-year contracts (2-3 years) unlock 10-30% discounts

### Contract terms
- Annual commitment required — no monthly billing
- Auto-renewal with price escalation (reported by users)
- Early termination fees apply

### Rate limits
- API: 10,000 requests/hour per user
- Kaia recordings: 3 calls/second, 6,000 calls/day (org-level)
- OAuth token refresh: once per 60 seconds maximum

## Integrations

### Native CRM
- **Salesforce**: Deep bi-directional sync (leads, contacts, accounts, opportunities, tasks). Real-time. Custom field mapping. Most mature integration.
- **HubSpot**: Bi-directional sync for contacts, companies, deals. Lead activity sharing.
- **Microsoft Dynamics 365**: Supported, less documentation available.

### Meeting platforms (Kaia)
- Zoom, Microsoft Teams, Google Meet
- Kaia bot joins as participant, requires meeting platform permissions

### Communication
- Gmail, Microsoft Outlook (email send/receive)
- VoIP integrations for click-to-dial

### Automation
- **Zapier**: 5,000+ app connections, triggers and actions
- **Native webhooks**: Event-driven automation
- **REST API**: Full programmatic access (see API reference)

### Other
- LinkedIn Sales Navigator (InMail steps in sequences)
- Slack notifications
- Marketo, Pardot (marketing alignment)
- Chorus/Gong (legacy — many teams replacing with Kaia)

## Data model (API objects)

### Core objects
| Object | Description |
|--------|-------------|
| Prospect | Contact/lead with email, phone, social profiles |
| Account | Company with multiple prospects |
| Sequence | Multi-step cadence with steps and schedules |
| SequenceStep | Individual step within a sequence |
| SequenceState | Prospect's position/status within a sequence |
| Mailing | Individual email sent or scheduled |
| Call | Phone call record with disposition |
| Task | Manual action item for a rep |
| Opportunity | Deal/pipeline record |
| Template | Reusable email template with variables |

### Supporting objects
| Object | Description |
|--------|-------------|
| Mailbox | Connected email account for sending |
| MailAlias | Alternate sending address |
| Persona | Target persona for sequence targeting |
| Snippet | Reusable text block for templates |
| Webhook | Event subscription configuration |
| Import | Bulk data import job |
| AuditLog | Admin activity history |

## Workflow setup

### Setting up a new sequence
1. Navigate to Sequences → Create New
2. Choose sequence type (automated/semi-automated)
3. Add steps: email, call, LinkedIn, custom task
4. Configure timing between steps and send windows
5. Set A/B test variants on email steps (if desired)
6. Add prospects directly or from a saved filter
7. Activate the sequence — steps begin executing per schedule

### Configuring Kaia for meetings
1. Admin enables Kaia for the org (Settings → Kaia)
2. Connect meeting platforms (Zoom/Teams/Meet) with OAuth
3. Verify calendar sync is active for each user
4. Configure recording consent settings per region
5. Set up Content Cards (battlecards, playbooks) to surface during calls
6. Kaia bot auto-joins scheduled meetings with external participants

### Salesforce integration setup
1. Admin navigates to Settings → CRM → Salesforce
2. Authenticate with Salesforce admin credentials
3. Map Outreach objects → Salesforce objects (Prospect→Lead/Contact, Account→Account, etc.)
4. Configure sync direction per field (Outreach→SF, SF→Outreach, bi-directional)
5. Set conflict resolution rules (most recent wins, CRM wins, Outreach wins)
6. Enable activity logging (emails, calls, tasks → Salesforce activities)
7. Test sync with a small batch before full deployment

## Deep dives

### Deliverability in Outreach
- Mailbox health monitoring with sending limits per inbox
- Throttling controls (max emails/day, min delay between sends)
- Bounce detection and automatic prospect pausing
- No built-in email warmup — pair with third-party warmup tools (Instantly, Warmbox)
- Track domain reputation through Google Postmaster Tools externally
- Split sending across multiple mailboxes for volume

### Kaia real-time coaching
- Content Cards trigger based on keyword/topic detection during live calls
- Cards can contain: competitor battlecards, pricing objection responses, product specs
- Manager can listen live and provide real-time coaching via in-app messages
- Post-call: AI highlights key moments, generates summary, captures action items
- All recordings searchable by keyword, topic, speaker, or deal
- Talk-to-listen ratio, longest monologue, questions asked — tracked per rep

### Migration from Salesloft
- Export sequences, templates, and contact data from Salesloft
- Map field equivalents (Cadence→Sequence, Person→Prospect, etc.)
- Recreate templates with Outreach variable syntax ({{firstName}}, {{company}})
- Reconfigure CRM sync (Outreach uses different sync model)
- Plan 2-4 week parallel operation before full cutover
- Kaia replaces Salesloft Conversations for CI capability
