---
name: sales-woodpecker
description: "Woodpecker.co platform help — cold email campaigns, condition-based sequences, email warmup, Bounce Shield, Adaptive Sending, email verification, inbox rotation, centralized inbox, LinkedIn automation, Lead Finder, agency panel, API & webhooks. Use when Woodpecker emails are landing in spam, campaign open rates are dropping, you're not sure how to set up condition-based sequences, warmup isn't improving deliverability, the agency panel isn't isolating client data properly, or Woodpecker sending has stopped unexpectedly. Do NOT use for general outbound cadence strategy (use /sales-cadence), cross-platform email deliverability (use /sales-deliverability), email tracking strategy (use /sales-email-tracking), building prospect lists (use /sales-prospect-list), or connecting Woodpecker to other tools via Zapier (use /sales-integration)."
argument-hint: "[describe what you need help with in Woodpecker]"
license: MIT
version: 1.0.0
tags: [sales, outbound, cold-email, deliverability, platform]
---
# Woodpecker.co Platform Help

Help the user with Woodpecker.co platform questions — from cold email campaign setup and condition-based sequences through deliverability tools, warmup, inbox rotation, LinkedIn automation, Lead Finder, agency panel, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Woodpecker do you need help with?**
   - A) Campaigns — creating condition-based sequences, A/B testing, follow-ups
   - B) Deliverability — Bounce Shield, Adaptive Sending, ESP Matching, domain audit, spam checker
   - C) Warmup — built-in email warmup powered by Mailivery
   - D) Agency panel — multi-client management, per-client isolation
   - E) Integrations / API — connecting to CRMs, webhooks, API automation
   - F) Lead Finder — B2B lead database, data credits
   - G) Inbox — centralized inbox, reply management, auto-categorization
   - H) LinkedIn automation — automated connection requests, messages, multichannel sequences
   - I) Something else — describe it

2. **What's your role?**
   - A) Admin / account owner
   - B) Sales rep / BDR / AE
   - C) Agency owner / account manager
   - D) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Outbound cadence strategy / sequence design -> `/sales-cadence`
- Cross-platform email deliverability -> `/sales-deliverability`
- Email tracking strategy -> `/sales-email-tracking`
- Building prospect lists -> `/sales-prospect-list`
- Connecting Woodpecker to other tools via Zapier or middleware -> `/sales-integration`
- Multi-client agency architecture (platform-agnostic) -> `/sales-agency-outbound`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Woodpecker platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Recommended setup order** for new accounts:
   1. Connect mailbox(es) (Gmail, Outlook, or SMTP)
   2. Enable warmup on all connected mailboxes
   3. Wait 2+ weeks for warmup to build reputation
   4. Set up domain authentication (SPF, DKIM, DMARC) — use Woodpecker's domain audit to verify
   5. Create your first campaign with condition-based steps
   6. Add prospects (manually, CSV, Lead Finder, or API)
   7. Run spam checker on your email copy
   8. Launch campaign

2. **Configuration recommendations**:
   - Enable Bounce Shield on all campaigns — there is no reason to skip it
   - Enable Adaptive Sending to let Woodpecker auto-throttle based on engagement
   - Set daily per-mailbox limits conservatively (30-50 for cold outbound)
   - Use inbox rotation with 3+ mailboxes to distribute volume
   - A/B test subject lines first, then body copy — test one variable at a time

3. **For API questions**: Always include a pointer — "For the full endpoint catalog, request/response schemas, and rate limits, see `references/woodpecker-api-reference.md`."

## Gotchas

> Best-effort from research — verify details against current Woodpecker documentation.

1. **API access is a paid add-on (EUR 20/mo)** — not included in base plans. Many users expect API access by default, but you need the API & integrations add-on or an active trial to use the API at all.
2. **LinkedIn automation is a separate add-on (EUR 29/LinkedIn account)** — not included in any plan tier. Each LinkedIn account you want to automate costs extra on top of your base plan.
3. **Woodpecker prices by "contacted prospects" not by user/seat** — every new person added to a campaign counts against your monthly limit, even if they don't receive all steps. Recontacting the same prospect in a different campaign counts again.
4. **The agency panel is per active client (EUR 27/client/mo)** — costs scale linearly with client count. Compare with Smartlead's flat agency pricing if managing many clients.
5. **Woodpecker's API has a strict 1-concurrent-request limit with a queue of only 6** — high-volume API integrations need careful throttling and retry logic. Requests beyond 6 queued return HTTP 429 immediately (15-second timeout per queued request).

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Woodpecker campaigns)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-email-tracking` — Email tracking strategy — open/click tracking, engagement signals
- `/sales-prospect-list` — Build prospect lists to import into Woodpecker
- `/sales-integration` — Connect Woodpecker to other tools via webhooks, Zapier, or API
- `/sales-agency-outbound` — Multi-client agency architecture — infrastructure, client isolation, onboarding
- `/sales-enrich` — Enrich contacts with emails/phones before importing into Woodpecker
- `/sales-smartlead` — Smartlead platform help (if evaluating alternatives to Woodpecker)
- `/sales-lemlist` — Lemlist platform help (if evaluating alternatives to Woodpecker)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install with `/install-skill sales-do` if you don't have it.

## Examples

### Example 1: Basic campaign setup with A/B testing
**User says**: "How do I set up a cold email campaign in Woodpecker with A/B testing and follow-ups?"
**Skill does**:
1. Walks through creating a new campaign with condition-based steps
2. Explains adding up to 16 steps with delays between them — initial email plus follow-ups
3. Shows how to create A/B test variants (up to 5 per step) for subject lines and body copy
4. Configures auto-stop on reply so prospects exit the sequence when they respond
5. Recommends connecting 3+ mailboxes with inbox rotation for volume distribution
**Result**: User has a multi-step campaign with A/B testing, follow-ups, and proper mailbox rotation configured

### Example 2: Deliverability audit
**User says**: "My Woodpecker emails are going to spam. How do I fix deliverability?"
**Skill does**:
1. Runs through Woodpecker's domain audit — checks SPF, DKIM, DMARC with fix suggestions
2. Verifies warmup status on all connected mailboxes — must be running 2+ weeks with healthy reputation
3. Enables Bounce Shield and Adaptive Sending if not already active
4. Uses spam checker to audit email copy for spammy words, broken links, and authentication issues
5. Recommends deliverability monitor for ongoing inbox placement tracking
**Result**: User has a complete deliverability diagnosis with specific fixes and ongoing monitoring

### Example 3: Agency panel configuration
**User says**: "I run an agency and need to manage 10 clients in Woodpecker"
**Skill does**:
1. Explains the agency panel add-on pricing (EUR 27/active client/mo = EUR 270/mo for 10 clients)
2. Walks through setting up per-client isolation — separate campaigns, prospects, and mailboxes
3. Shows the Agency API authentication pattern: HQ key + `x-company-id` header
4. Configures per-company API keys for any clients needing their own API access
5. Sets up a single-dashboard workflow for monitoring all 10 clients
**Result**: User has 10 isolated client workspaces with API access and centralized management

## Troubleshooting

### Emails going to spam
**Symptom**: Prospects report finding emails in spam, or reply rates are near zero despite high send volume
**Cause**: Missing or misconfigured domain authentication (SPF/DKIM/DMARC), insufficient warmup, spammy content, or sender reputation damage
**Solution**: Run Woodpecker's domain audit to check SPF/DKIM/DMARC — fix any issues flagged. Verify warmup has been running 2+ weeks on all mailboxes. Use the spam checker to audit email copy. Enable Bounce Shield and Adaptive Sending. If reputation is damaged, pause campaigns, run warmup-only for 2-3 weeks, then relaunch with lower volume. See `/sales-deliverability` for a comprehensive diagnosis framework.

### Low open rates
**Symptom**: Campaign open rates below 30%
**Cause**: Poor subject lines, bad send times, inbox placement issues, or stale prospect data
**Solution**: A/B test subject lines (use all 5 variant slots). Check deliverability — low opens often mean emails are landing in spam, not that prospects are ignoring them. Verify prospect emails with Woodpecker's built-in verification to remove invalid addresses. Test different send times and days. Use Adaptive Sending to let Woodpecker optimize send timing. If open rates are low across all variants, the issue is likely deliverability, not content.

### API 429 errors
**Symptom**: Frequent HTTP 429 (Too Many Requests) responses from the Woodpecker API
**Cause**: Exceeding the 1-concurrent-request limit or overflowing the 6-request queue
**Solution**: Woodpecker allows only 1 request at a time with a queue of 6 (15-second timeout per queued request). Implement strict request serialization — never send concurrent requests. Add retry logic with exponential backoff starting at 15 seconds. For bulk operations, batch where possible and process sequentially. If you need higher throughput, contact developers@woodpecker.co about rate limit increases. See `references/woodpecker-api-reference.md` for full rate limit details.
