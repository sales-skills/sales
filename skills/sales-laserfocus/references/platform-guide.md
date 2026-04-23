# Laserfocus Platform Reference

## Platform overview

Laserfocus is a Salesforce overlay that simplifies CRM data entry and pipeline management for GTM teams. Built by a Y Combinator W20 team in Berlin, it positions itself as a way to "make Salesforce easy to use" — providing a lightweight UI layer over Salesforce without replacing the CRM. Unlike Scratchpad or Weflow, Laserfocus has no call recording, no conversation intelligence, and no forecasting modules — it's a pure interface simplification tool.

**Key differentiator**: Precache technology loads Salesforce data onto users' local machines for sub-100ms interaction times. No Salesforce data is stored on Laserfocus servers.

**Target audience**: Account executives, SDRs/BDRs, sales ops, and team leads on Salesforce who want a cleaner data entry experience.

**Company status**: YC W20, Berlin-based, 2-3 employees. YC lists the company status as "Inactive" — evaluate longevity risk. Founded 2019 by Daniel Dinh and Marc Hoeffl. Product Hunt #2 Product of the Day (July 2022, 355 upvotes).

## Key modules

### Stacks
Workflow containers that organize tasks and processes around deals. Users can create ad-hoc stacks for one-off work, share them with the team (Team plan only), and set automated stacks for recurring events like weekly pipeline reviews. This is Laserfocus's central organizational concept.

### Table views & bulk operations
Spreadsheet-like interface for viewing and editing Salesforce records. Supports cross-object field display (combine fields from different Salesforce objects in one view) and bulk editing of multiple records simultaneously. Can import existing Salesforce views directly.

### Field Groups
Custom field clusters organized by sales stage. Users combine fields from different Salesforce objects into reusable groups — e.g., a "Discovery" group showing BANT fields, a "Negotiation" group showing pricing/contract fields. Shareable across the team on Team plan.

### Task management
Inline task creation and assignment tied to deals. Activity timeline consolidates emails, calendar events, tasks, and notes with pinning functionality. Signal-based tasks (auto-generated from deal signals) available on Team plan only.

### Note templates
Pre-built templates for call notes, meeting summaries, and deal updates. Limited to 2 templates on Free tier, unlimited on Pro and Team.

### Advanced filtering & search
Salesforce-level filter logic with keyword quick search. Import existing Salesforce views and apply additional filters within Laserfocus.

## Pricing and limits

Pricing is best-effort as of 2026-04 — verify on vendor site before quoting.

| Feature | Free ($0) | Pro ($30/user/mo) | Team (custom) |
|---|---|---|---|
| Custom Stacks | 2 | Unlimited | Unlimited |
| Salesforce view imports | 2 | Unlimited | Unlimited |
| Stack Scheduling | 2 | Unlimited | Unlimited |
| Note templates | 2 | Unlimited | Unlimited |
| Custom Field Groups | 3 | Unlimited | Unlimited |
| Bulk edit records | 3 records max | Unlimited | Unlimited |
| Inline editing | Yes | Yes | Yes |
| Task management | Yes | Yes | Yes |
| Activity history | Yes | Yes | Yes |
| Calendar/email sync | Yes | Yes | Yes |
| Shared Slack channel | — | Yes | Yes |
| Video call support | — | Yes | Yes |
| Native phone integration | — | — | Yes |
| Salesloft/Outreach integration | — | — | Yes |
| Custom object integration | — | — | Yes |
| Org-level stacks/templates/field groups | — | — | Yes |
| Signal-based tasks | — | — | Yes |
| Automated workflows | — | — | Yes |
| Dedicated CSM | — | — | Yes |

YC companies receive 20% discount on Team plan for 6 months.

## Integrations

Very narrow integration surface — Salesforce-only by design:

- **Salesforce** — Primary and exclusive CRM integration (OAuth SSO). Bi-directional data sync through precache.
- **Salesloft** — Team plan only
- **Outreach** — Team plan only
- **Calendar sync** — All plans
- **Email sync** — All plans
- **Native phone** — Team plan only
- **Custom Salesforce objects** — Team plan only

No Slack integration (except shared Slack channel for Laserfocus support on Pro+). No HubSpot. No Zapier. No webhooks. No API.

## Security & compliance

- Salesforce OAuth SSO — no separate credentials needed
- GDPR compliant
- CCPA compliant
- Precache architecture: Salesforce data loaded onto user's local machine, not stored on Laserfocus servers
- No admin setup required for initial deployment — individual users can install independently

## Competitive positioning

| vs. | Laserfocus advantage | Competitor advantage |
|---|---|---|
| Scratchpad | Simpler, cheaper (Free + $30 vs $19-49), no AI credit complexity | Call recording, AI field updates, Hygiene Monitor, Deal Agent, Gong integration |
| Weflow | Much simpler, cheaper, no learning curve | Activity capture, CI, forecasting, Ask Weflow AI, 50+ deal signals |
| Dooly | Still independent (Dooly acquired by Salesloft) | Templates, playbooks, collaboration, larger ecosystem |
| Native Salesforce | Faster (precache), cleaner UI, stage-specific field layouts | Full feature set, no additional vendor risk, no extra cost |

## Known limitations

- No public API or developer extensibility
- No call recording or conversation intelligence
- No forecasting or revenue intelligence
- No collaboration features within the tool
- No mobile app
- No Slack integration
- Salesforce-only (no other CRM support)
- Very small team (2-3 employees, YC "Inactive")
