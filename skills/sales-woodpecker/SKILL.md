---
name: sales-woodpecker
description: "Woodpecker.co platform help — cold email campaigns, condition-based sequences, email warmup, Bounce Shield, Adaptive Sending, email verification, inbox rotation, centralized inbox, LinkedIn automation, Lead Finder, agency panel, API & webhooks. Use when asking 'how do I do X in Woodpecker', setting up Woodpecker campaigns, configuring Woodpecker warmup or deliverability, using Woodpecker's agency panel, or troubleshooting Woodpecker sending issues. Do NOT use for general outbound cadence strategy (use /sales-cadence), cross-platform email deliverability (use /sales-deliverability), email tracking strategy (use /sales-email-tracking), building prospect lists (use /sales-prospect-list), or connecting Woodpecker to other tools via Zapier (use /sales-integration)."
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

Provide module-by-module guidance based on the user's area:

### Cold email campaigns
- **Condition-based campaigns**: If/then branching based on prospect behavior (opened, clicked, replied) or data attributes — far more flexible than linear sequences
- **Up to 16 steps per campaign** — more than most competitors
- **A/B testing**: Up to 5 variants per step (subject lines, body copy, send times)
- **Auto-stop on reply**: Campaign automatically pauses sending to a prospect when a reply is detected
- **Personalization**: Custom fields and snippets for dynamic content
- **Manual tasks**: Insert non-automated action steps (e.g., call, LinkedIn visit) into campaign sequences

### Deliverability toolkit
- **Bounce Shield**: Prevents sending to risky addresses, protects sender reputation by pre-validating before each send
- **Adaptive Sending**: Automatically adjusts send volume based on provider limits and engagement signals — throttles down when signals are negative
- **ESP Matching**: Matches your sending patterns to what email providers expect, reducing spam flags
- **Domain audit**: Checks SPF, DKIM, DMARC configuration with specific fix suggestions
- **Spam checker**: Highlights spammy words, broken links, and authentication issues before sending — catch problems pre-launch
- **Deliverability monitor**: Ongoing monitoring of inbox placement and sender reputation

### Email warmup
- **Free built-in warmup** powered by Mailivery — included in all plans
- **AI-driven interactions**: Opens, replies, marks as important, removes from spam — mimics real engagement
- **Ramp schedule**: Starts with a few emails/day, gradually ramps to a max of 50/day
- **Free plan**: 4 warmup slots included at no cost
- **Additional slots**: Available as an add-on at EUR 5 per account
- **Best practice**: Run warmup for 2+ weeks before launching campaigns from a new mailbox

### Email verification
- **Free catch-all verification** powered by Bouncer
- **Real-time list cleaning** before sending — automatic validation when prospects are added to campaigns
- **Reduces bounce rate** and protects sender reputation
- No additional cost — included in all plans

### Inbox rotation
- **Automatic distribution** of sending across multiple connected email accounts
- Woodpecker rotates which account sends each email in a campaign
- **Unlimited email accounts** on all plans — no per-seat or per-mailbox charges
- Helps maintain per-account sending limits while increasing total daily volume

### Centralized inbox
- **Unified view** of all replies from all connected mailboxes in one place
- **Auto-categorization**: Interested, auto-replied, bounced, out-of-office — no manual sorting
- **Filters**: By campaign, status, or mailbox
- **Reply directly** from the centralized inbox without switching accounts

### LinkedIn automation
- **Add-on**: EUR 29/month per LinkedIn account
- **Automated actions**: Connection requests, messages, and profile visits
- **Multichannel sequences**: LinkedIn steps woven into email campaign steps
- **Condition-based**: e.g., if email not opened -> send LinkedIn connection request
- Requires a connected LinkedIn account

### Lead Finder
- **B2B database** with 1B+ leads
- **Search filters**: Company, title, industry, location
- **Data credits system**: 400 free credits included, additional credits from EUR 28 per 2,000 credits
- **Direct export**: Export leads directly into Woodpecker campaigns — no CSV intermediary needed

### Agency panel
- **Add-on**: EUR 27/month per active client
- **Multi-client management** from a single dashboard
- **Per-client isolation**: Separate campaigns, prospects, mailboxes per client — no data bleed
- **Agency API**: HQ key + `x-company-id` header for programmatic client management
- **Per-company API keys**: Create API keys scoped to individual clients, manage mailboxes and campaigns across clients

### Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| Campaign | Cold email sequence with steps | id, name, status, steps, prospects |
| Prospect | Contact record | id, email, firstName, lastName, company, status, tags |
| Mailbox | Connected email account | id, email, provider, warmupEnabled, dailyLimit |
| Campaign Step | Individual step in a campaign | id, campaignId, type (email/LinkedIn/task), variant, delay |
| Webhook | Event subscription | id, url, events, status |
| Blacklist | Blocked domains/emails | id, type (domain/email), value |
| LinkedIn Account | Connected LinkedIn profile | id, name, status |
| Manual Task | Non-automated action in campaign | id, type, prospectId, description |

### API quick reference
- **Base URL**: `https://api.woodpecker.co/rest`
- **Auth**: `x-api-key` header
- **Versions**: V1 (stable), V2 (under development)
- **Key endpoints**: Campaigns, Prospects, Mailboxes, LinkedIn accounts, Inbox, Reports, Users, Manual tasks, Blacklist, Webhooks
- **Agency API**: HQ key + `x-company-id` header for multi-client access
- **Rate limits**: 1 concurrent request, queue of 6 (15-second timeout), unlimited monthly calls, HTTP 429 on overflow
- **Add-on required**: API & integrations add-on (EUR 20/mo) or active trial
- **Full reference**: See `references/woodpecker-api-reference.md`
- **Developer contact**: developers@woodpecker.co

### Pricing (as of 2026, EUR — verify current pricing at woodpecker.co)

| Tier | Contacted prospects/mo | Price |
|------|------------------------|-------|
| Free | 500 | EUR 0 |
| Tier 1 | 500 | EUR 35/mo |
| Tier 2 | 2,000 | EUR 67/mo |
| Tier 3 | 4,000 | EUR 99/mo |
| Enterprise | Unlimited | Custom |

**Add-ons**: LinkedIn (EUR 29/acct), Agency (EUR 27/client), API & integrations (EUR 20), warmup slots (EUR 5/acct), servers (EUR 59/server), Lead Finder (from EUR 28/2K credits). Annual billing saves 33%.

### Integrations
- **HubSpot**: Native integration (requires API & integrations add-on)
- **Pipedrive**: Native integration
- **Salesforce**: Via Zapier
- **Zapier**: Full integration — triggers and actions
- **Clay, Persana AI**: Native connectors
- **Calendly**: Meeting booking integration
- **Google Sheets**: Prospect import/export

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
