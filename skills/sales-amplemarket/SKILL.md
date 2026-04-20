---
name: sales-amplemarket
description: "Amplemarket platform help — AI-native all-in-one sales engagement with Duo AI copilot, 300M+ B2B contacts, multichannel sequences, intent signals, and deliverability suite. Use when setting up Amplemarket sequences, Amplemarket emails going to spam, Amplemarket credits burning fast, Amplemarket data enrichment not finding contacts, Amplemarket intent signals not triggering, or Amplemarket CRM sync issues with Salesforce or HubSpot. Do NOT use for general outbound strategy without a platform (use /sales-cadence), or general deliverability without Amplemarket (use /sales-deliverability)."
argument-hint: "[describe what you need help with in Amplemarket]"
license: MIT
version: 1.0.0
tags: [sales, engagement, enrichment, deliverability, platform]
github: "https://github.com/amplemarket"
---

# Amplemarket Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Which area of Amplemarket do you need help with?

1. **Sequences & outreach** — multichannel cadences, email/LinkedIn/phone steps, A/B testing
2. **Data & enrichment** — Searcher, people/company search, bulk enrichment, lead lists
3. **Deliverability** — warmup, domain health, inbox placement, spam checker, mailbox rotation
4. **Intent signals** — job changes, website visitors, funding events, competitive signals, Custom Signals
5. **Duo AI copilot** — AI personalization, agent configuration
6. **CRM integration** — Salesforce/HubSpot sync, field mapping, activity logging
7. **API & automation** — REST API endpoints, webhooks, Zapier
8. **Billing & credits** — understanding credit consumption, plan limits, overages
9. **Something else** — describe your situation

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General outbound sequence strategy (not Amplemarket-specific) | `/sales-cadence` |
| Email deliverability fundamentals (SPF/DKIM/DMARC, not platform-specific) | `/sales-deliverability` |
| Enrichment comparison across tools | `/sales-enrich` |
| Building prospect lists across tools | `/sales-prospect-list` |
| Understanding buyer intent signals generally | `/sales-intent` |
| CRM selection or comparison | `/sales-crm-selection` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

If the question is Amplemarket-specific, continue to Step 3.

## Step 3 — Amplemarket platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

For API questions, **also read `references/amplemarket-api-reference.md`** for endpoint details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- Start with the simplest solution before suggesting complex workflows
- Reference specific Amplemarket UI paths or API endpoints
- If a feature is plan-gated, mention which plan is required
- If you discover a gotcha or workaround not in `references/learnings.md`, append it there

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Annual contracts only** — no monthly billing at any tier. Minimum $600/mo (2 users), billed yearly
- **Credit system is confusing** — data access is credit-based, not unlimited. Phone credits cost $0.50 each. Monitor consumption in Settings → Usage to avoid surprise overages
- **HubSpot sync is 3-hour delay** — not real-time. Salesforce sync is closer to real-time but requires field mapping configuration
- **Sequence editing is clunky** — you can't edit steps in-place on live sequences. Clone the sequence, edit the clone, then pause/replace
- **International data accuracy is lower** — US data is ~95% accurate, international can be significantly worse. Validate emails before sending to non-US contacts
- **Deliverability Booster warmup takes 2-4 weeks** — don't launch high-volume campaigns on new domains immediately
- **People Search rate limit (300/min)** is stricter than general API limit (500/min) — batch searches accordingly
- **Duo Inbox is an add-on on Growth plan** — not included by default. Check your contract

## Related skills

- `/sales-cadence` — Multi-channel outbound sequence strategy across all platforms
- `/sales-deliverability` — Email deliverability fundamentals and platform-specific warmup guides
- `/sales-enrich` — Contact enrichment comparison and workflows across all tools
- `/sales-prospect-list` — Building targeted B2B prospect lists across all platforms
- `/sales-intent` — Buyer intent signals interpretation and routing strategy
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

**Example 1:** "My Amplemarket emails are landing in spam after I scaled from 50 to 200/day"

**Example 2:** "How do I set up Custom Signals to trigger sequences when a prospect visits our pricing page?"

**Example 3:** "I need to enrich 5,000 contacts with phone numbers via the API — what's the most credit-efficient approach?"

## Troubleshooting

**High bounce rates (20-30%)**
- Check Domain Health Center for authentication issues (SPF/DKIM/DMARC)
- Run inbox placement test before scaling volume
- Use the built-in email validation on lead lists before adding to sequences
- Reduce daily sending volume — Gmail/Outlook flag accounts sending >400/day
- For international contacts, validate with the `/email-validations` API endpoint before sequencing

**Credits burning faster than expected**
- Each People Search result consumes credits (0.5-1 email + 1 phone credit per find)
- Bulk enrichment is more efficient than individual searches — use `/people/enrichment-requests` (up to 10K per batch)
- Check Settings → Usage for per-endpoint breakdown
- Consider limiting phone number reveals to high-priority prospects only

**CRM sync not working / data not appearing**
- HubSpot syncs every 3 hours (not real-time) — wait before debugging
- Salesforce requires field mapping in Settings → Integrations → Salesforce
- Check that the field types match (text → text, number → number)
- Activity logging requires the rep's email to match in both systems
