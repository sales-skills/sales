# Scratchpad Platform Reference

## Platform overview

Scratchpad is an AI-powered workspace that sits between sales teams and Salesforce, designed to eliminate administrative work and improve CRM data quality. Unlike standalone revenue intelligence platforms (Gong, Clari), Scratchpad is a Salesforce overlay — it makes Salesforce easier to use rather than replacing it. The platform automates Salesforce updates from customer interactions (calls, emails, notes) while keeping Salesforce as the system of record. Target audience is sales teams, RevOps leaders, and sales managers on Salesforce who want better CRM adoption without forcing behavior change. 4.9-star rating from 1,470+ G2 reviews.

## Key modules

### Call Recorder & Notetaker
Records and transcribes conversations via Zoom, Google Meet, Microsoft Teams. Desktop app enables background recording — no meeting bot required for some configurations. Generates AI summaries, action items, and next steps from call content.

### AI Field Updates
Automatically extracts structured data from calls, emails, and notes to populate Salesforce fields. Supports methodology frameworks (MEDDPICC, SPICED, BANT, Command of the Message, custom). Two modes:
- **Propose**: AI suggests field values for rep review before writing to Salesforce
- **Direct apply**: AI writes values directly to Salesforce fields (configurable per field)

### Deal & Account Agent
Context-aware AI assistant with access to calls, emails, notes, documents, and custom prompts. Can answer questions about specific deals, prepare meeting briefs, and generate account summaries. Custom prompts allow tailoring to your sales methodology and terminology.

### Hygiene Monitor
Tracks CRM data quality across the team. Detects:
- Missing required fields on opportunities
- Stale deal data (no updates in X days)
- Overdue tasks
- Inconsistent data across related records
Enables fast resolution — click through from the hygiene alert to the Salesforce field that needs updating.

### Sales Sheets & Kanban
Modern pipeline views replacing native Salesforce list views. Spreadsheet-style editing and Kanban board views for pipeline management. Faster than native Salesforce for bulk field updates.

### Command HUD
Browser overlay accessible via a single keystroke from any web page. Update Salesforce fields, take notes, and manage tasks without switching to Salesforce or Scratchpad. Works across Chrome.

## Pricing and limits

All pricing as of 2026-04 — verify on scratchpad.com/pricing before quoting.

| Plan | Monthly (annual) | Monthly (monthly) | AI Credits | Key features |
|---|---|---|---|---|
| Free | $0 | $0 | 100/mo | 3 views, 10 hrs/mo recording, AI Field Updates, Deal Agent, Custom Prompts |
| Solo | $19/user | $24/user | 400/mo (4,800/yr) | Full workspace, Call Recorder + Notetaker, Hygiene Monitor, Advanced Controls, Prompt Insights |
| Team | $49/user | $62/user | 800/mo (9,600/yr, pooled) | All Solo + Gong integration, White-glove Agent Services, pooled credits |
| Enterprise | Custom | Custom | Unlimited | All Team + unlimited AI, white-glove Agent design/setup/tuning |

No setup fees, platform fees, or user minimums on self-serve tiers.

### Credit consumption

| Action | Credits |
|---|---|
| Single Salesforce field update | 1 |
| Multi-call field update | 5 |
| AI call summary | 1 |
| Record insights | 5 |

Credits are the primary usage constraint on Solo/Team plans. Monitor consumption to avoid hitting limits mid-month.

### Plan-gated features

- **Free**: Limited to 3 views, 10 hrs/mo recording, 100 credits/mo. No Hygiene Monitor, no Advanced Controls.
- **Solo**: Full workspace but credits are per-user (not pooled). No Gong integration.
- **Team**: Pooled credits across team. Gong integration. White-glove Agent Services.
- **Enterprise**: Unlimited credits. White-glove agent design, setup, and performance tuning.

## Integrations

| Integration | Type | Notes |
|---|---|---|
| Salesforce | Core (bi-directional) | API-based connection inheriting platform permissions. Salesforce is the system of record. |
| Zoom | Video conferencing | Call recording and transcription |
| Google Meet | Video conferencing | Call recording and transcription |
| Microsoft Teams | Video conferencing | Call recording and transcription |
| Gong | Conversation intelligence | Team plan+ — works alongside Gong, not replacing it |
| Chorus | Conversation intelligence | Integration for teams already on Chorus |
| Gmail | Email | Email content feeds AI Field Updates |
| Outlook | Email | Email content feeds AI Field Updates |
| Slack | Communication | Notifications and updates |

### What's NOT integrated
- No HubSpot, Dynamics, Pipedrive, or any non-Salesforce CRM
- No VoIP/SMS capture (phone calls not recorded)
- No Zapier/Make triggers or actions
- No public API or webhooks for custom integrations

## Data model

No public API — data flows through Scratchpad's UI into native Salesforce objects. All Scratchpad-captured data (activities, field updates, notes) lands in standard Salesforce objects and is queryable via SOQL/Salesforce API. Scratchpad inherits Salesforce field-level security and page layout permissions.

## Workflow setup

### Workflow 1: Deploy AI Field Updates
1. Connect Salesforce (OAuth, inherits user permissions)
2. Connect email (Gmail or Outlook)
3. Enable Call Recorder for video platforms (Zoom/Meet/Teams)
4. Configure which Salesforce fields AI should auto-populate
5. Choose mode per field: "propose" (human review) or "direct apply"
6. Set methodology framework (MEDDPICC/BANT/SPICED/custom)
7. Test with a few calls, review AI-proposed values
8. Gradually move high-confidence fields to "direct apply"

### Workflow 2: Set up Hygiene Monitor
1. Define required fields per opportunity stage
2. Set staleness thresholds (e.g., no update in 14 days = stale)
3. Configure overdue task detection rules
4. Review the hygiene dashboard weekly with team leads
5. Assign hygiene cleanup tasks to reps through Scratchpad

### Workflow 3: Pipeline management with Sales Sheets
1. Create views matching your sales workflow (by stage, by rep, by region)
2. Configure columns to show the Salesforce fields reps update most
3. Enable inline editing for quick field updates
4. Use Kanban view for visual pipeline management
5. Share views with managers for pipeline reviews

## Deep dives

### Sales methodology support
Scratchpad supports MEDDPICC, SPICED, BANT, Command of the Message, and custom frameworks. AI Field Updates extract methodology-relevant data from calls and populate corresponding Salesforce fields. Custom prompts in Deal & Account Agent can be tailored to your specific methodology terminology and qualification criteria.

### Security and compliance
- SOC 2 Type 2 compliant
- GDPR and CCPA aligned
- API-based Salesforce connection inheriting platform permissions and guardrails
- No data stored outside of Salesforce (for CRM data) — Scratchpad is a pass-through
- Call recordings stored in Scratchpad's infrastructure (verify retention policies)

### Comparison with Weflow
| Dimension | Scratchpad | Weflow |
|---|---|---|
| Core approach | CRM overlay / productivity | Revenue AI platform |
| Activity capture | Via recording + email | Server-side auto-sync (no extension needed) |
| Conversation intelligence | Built-in recorder | Built-in recorder (96+ languages) |
| Forecasting | No dedicated module | Deal Intelligence with forecast roll-ups |
| Pricing (full) | $49/user/mo (Team) | $79/user/mo (Full Bundle) |
| API | None | None (data in Salesforce) |
| Gong integration | Yes (Team+) | N/A (competes with Gong) |
| Best for | Teams wanting a better Salesforce UI + already have Gong | Teams wanting one tool for capture + CI + forecasting |

### Comparison with Gong
| Dimension | Scratchpad | Gong |
|---|---|---|
| Core approach | Salesforce overlay | Revenue intelligence platform |
| Pricing | $19-49/user/mo | ~$1,200-1,600/user/yr |
| API | None | REST + webhooks (richest in category) |
| Analytics depth | Basic (via Salesforce) | Deep (trackers, coaching, deal boards) |
| CRM coverage | Salesforce only | Salesforce, HubSpot, Dynamics, more |
| VoIP | No | Yes |
| Best for | Making Salesforce usable for reps | Enterprise revenue intelligence + coaching |

### Customer results (from testimonials)
- Settle: 6,000+ selling hours reclaimed annually, 80%+ Salesforce field completion
- MaintainX: MEDDPICC adoption from 70% to 90%+
- Recharge: 9,000+ Salesforce updates with AI, 455 hours/month saved
- Claims to shift seller focus from 35% to 85% on revenue-generating work
