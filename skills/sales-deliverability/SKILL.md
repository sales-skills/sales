---
name: sales-deliverability
description: "Email deliverability for outbound sales — SPF/DKIM/DMARC authentication, mailbox warmup, inbox placement, sender reputation, and list hygiene. Use when emails are landing in spam, open rates dropped suddenly, a domain or IP got blacklisted, you're not sure if SPF/DKIM/DMARC is set up right, a new mailbox needs warming, bounce rates are too high, or volume scaling is hurting reputation. Do NOT use for cadence content/strategy (use /sales-cadence), Apollo sequences (use /sales-apollo-sequences), or platform-specific config — use the dedicated platform skill instead (e.g., /sales-mailshake, /sales-smartlead, /sales-lemlist, /sales-mailchimp, /sales-sendgrid, /sales-klaviyo, /sales-activecampaign, /sales-omnisend, /sales-brevo, etc.)."
argument-hint: "[describe your deliverability situation — new domain, spam issues, warmup, scaling]"
license: MIT
version: 1.0.0
tags: [sales, deliverability, email, spf, dkim, dmarc, warmup]
---
# Email Deliverability for Outbound Sales

Help the user set up, diagnose, and optimize email deliverability — from domain authentication and warmup through inbox placement, reputation monitoring, and platform-specific configuration. This skill is tool-agnostic and covers Apollo, Mailshake, Salesloft, Lemlist, Yesware, Mixmax, Reply.io, Woodpecker, Hunter.io, Tomba, Prospeo, Seamless.AI, SafetyMails, and standalone tools.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your situation?**
   - A) Setting up a new domain for cold outbound
   - B) Warming up a new mailbox / sender account
   - C) Emails going to spam — need to diagnose
   - D) Open rates dropped significantly
   - E) High bounce rates
   - F) Blacklisted — need to recover
   - G) Scaling sending volume (increasing daily sends)
   - H) Switching platforms (migrating senders)
   - I) Something else — describe it

2. **What's your current sending setup?**
   - Primary domain or dedicated outbound domain?
   - How many mailboxes / sender accounts?
   - Daily sending volume (current or target)?
   - How long have you been sending from this domain/mailbox?

3. **What tools are you using?**
   - A) Apollo.io
   - B) Mailshake
   - C) Salesloft
   - D) Lemlist
   - E) Yesware
   - F) Instantly / Smartlead
   - G) Mixmax
   - H) Reply.io
   - I) Woodpecker
   - J) HubSpot / Salesforce (direct sending)
   - K) Custom SMTP / other
   - L) Multiple tools — describe

4. **Domain authentication status?**
   - A) SPF/DKIM/DMARC all configured
   - B) Some configured, not sure which
   - C) Not configured / don't know
   - D) Using a new domain with nothing set up

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Domain authentication framework

Domain authentication is the foundation of deliverability. All three records must be properly configured.

### SPF (Sender Policy Framework)
- **What it does**: Tells receiving servers which mail servers are authorized to send on behalf of your domain
- **DNS record**: TXT record on your domain
- **Format**: `v=spf1 include:_spf.google.com include:mailshake.com ~all`
- **Key rules**: Only one SPF record per domain. Use `include:` for each authorized sender. Max 10 DNS lookups.
- **Common mistake**: Multiple SPF records (only the first is read), too many includes (exceeds lookup limit)

### DKIM (DomainKeys Identified Mail)
- **What it does**: Adds a cryptographic signature to outgoing emails proving they haven't been tampered with
- **DNS record**: TXT or CNAME record (format varies by provider)
- **Setup**: Each sending platform provides its own DKIM key. Add the record they give you to your DNS.
- **Common mistake**: Not adding DKIM for every sending platform. Each service needs its own DKIM record.

### DMARC (Domain-based Message Authentication, Reporting & Conformance)
- **What it does**: Tells receiving servers what to do with emails that fail SPF/DKIM checks
- **DNS record**: TXT record at `_dmarc.yourdomain.com`
- **Recommended start**: `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com` (monitor mode)
- **Progression**: none → quarantine → reject (move to reject after 2-4 weeks of clean monitoring)
- **Common mistake**: Jumping straight to `p=reject` before monitoring — this blocks legitimate emails

### Custom tracking domain
- **What it is**: A subdomain (e.g., `track.yourdomain.com`) for open/click tracking instead of shared tracking domains
- **Why it matters**: Shared tracking domains get flagged by spam filters. Custom domains protect your reputation.
- **Setup**: CNAME record pointing to your platform's tracking server

### Verification checklist
- [ ] SPF record includes all sending services
- [ ] DKIM configured for each sending platform
- [ ] DMARC record exists (start with p=none)
- [ ] Custom tracking domain configured
- [ ] Test with mail-tester.com (aim for 9+/10)
- [ ] Test with MXToolbox for DNS record validation

## Step 3 — Warmup strategy

New mailboxes and domains must be warmed up before sending at volume. Skipping warmup is the #1 cause of deliverability problems.

### Warmup schedule (new mailbox)

| Week | Daily sends | Notes |
|------|-------------|-------|
| 1 | 5-10 | Manual sends to engaged contacts, internal test sends |
| 2 | 15-25 | Mix of warm contacts and small cold batches |
| 3 | 30-40 | Gradual increase, monitor bounce/spam rates |
| 4 | 40-50 | Standard cold outbound volume |
| 5+ | 50-75 | Scale cautiously, never exceed provider limits |

**For new domains**: Add 2 extra weeks at the beginning (weeks 1-2 at 3-5 sends/day). New domains have zero reputation.

### Warmup tools
- **Smartlead Ultra Premium Warmup** — AI-driven warmup built into the Smartlead platform with exclusive warmup network. Unlike standalone tools, it's fully integrated with sender management and campaign scheduling.
- **Instantly** — automated warmup with real engagement (opens, replies, moves from spam)
- **Warmbox** — AI-powered warmup network
- **Lemwarm** — Lemlist's built-in warmup (included free with every seat, 10,000+ user network, deliverability scoring)
- **Mailwarm** — Standalone warmup service

These tools simulate real email conversations to build sender reputation. Run warmup for at least 2-3 weeks before adding cold outbound.

### Mailbox rotation
- **Why**: Distributing sends across multiple mailboxes protects each one's reputation and increases total volume
- **Rule of thumb**: 1 mailbox per 50-75 cold emails/day
- **Setup**: Connect multiple sender accounts in your platform and enable rotation/round-robin
- **Naming**: Use real names (jane@company.com), not generic addresses (sales@, outreach@)

## Step 4 — Platform-specific implementation

For platform-specific deliverability configuration (sending limits, warmup, domain auth, custom tracking domains, and verification tools), see `references/platforms.md`.

### Standalone tools (any platform)
- **MXToolbox**: DNS lookup, blacklist check, SPF/DKIM/DMARC validation
- **mail-tester.com**: Send a test email, get a deliverability score (aim for 9+/10)
- **SmartDelivery** (Smartlead): Inbox placement testing by provider (Gmail, Outlook, Yahoo)
- **GlockApps**: Inbox placement testing and spam filter analysis
- **Google Postmaster Tools**: Monitor Gmail-specific reputation (if targeting Gmail recipients)
- **Microsoft SNDS**: Monitor Outlook/Microsoft reputation

## Step 5 — Monitoring and recovery

### Key metrics to track

| Metric | Target | Action if exceeded |
|--------|--------|--------------------|
| Bounce rate | <3% | Pause sending, clean list, verify emails before next send |
| Spam complaint rate | <0.1% | Reduce volume, review content, check targeting |
| Open rate | >40% | Check deliverability (inbox vs spam), test subject lines |
| Unsubscribe rate | <1% | Review frequency, improve relevance |

### Blacklist check and delisting
1. **Check**: Use MXToolbox blacklist check or multirbl.valli.org to check your domain/IP
2. **Common blacklists**: Spamhaus, Barracuda, SORBS, SpamCop, CBL
3. **Delisting process**: Each blacklist has its own removal request form. Fix the root cause first (high bounces, spam complaints), then request removal.
4. **Timeline**: Most blacklists delist within 24-48 hours after request. Spamhaus can take longer.

### Reputation recovery
If your domain reputation is damaged:
1. **Stop all outbound** from the affected domain/mailbox immediately
2. **Diagnose**: Check bounce rate, spam complaints, blacklist status
3. **Fix root cause**: Clean list, fix auth, reduce volume
4. **Warmup again**: Treat the mailbox as new — follow the warmup schedule from Week 1
5. **Consider a new domain**: If reputation is severely damaged (blacklisted on 3+ lists), it may be faster to start a new outbound domain

### List hygiene
- **Verify before sending**: Use NeverBounce, ZeroBounce, SafetyMails, or BriteVerify before importing lists
- **Remove on bounce**: Hard bounces should be permanently removed, not just paused
- **Re-verify periodically**: Email addresses decay at ~25% per year. Re-verify lists older than 3 months.
- **Never use purchased lists**: Purchased lists have high bounce/spam rates and will destroy your reputation

## Gotchas

- **Don't skip warmup.** Every new mailbox needs 2-4 weeks of warmup before cold outbound. Sending 100 cold emails from a brand-new mailbox will land in spam immediately. Claude often generates "connect mailbox → start sending" workflows that skip this critical step.
- **Don't send from your primary domain.** Use a dedicated outbound domain (e.g., `outbound.yourcompany.com` or `yourcompanymail.com`). If your outbound domain gets blacklisted, your primary domain (and all company email) is protected.
- **Don't ignore bounces.** A bounce rate above 3% signals to email providers that you're sending to bad addresses. This damages reputation quickly. Pause the campaign, clean the list, and re-verify before resuming.
- **Don't use purchased or scraped lists.** These lists have high bounce rates, spam traps, and unengaged recipients. They will destroy your sender reputation within days. Always build lists from legitimate data providers and verify emails before sending.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-cadence` — Design outbound cadence strategy and content
- `/sales-smartlead` — Smartlead platform help (SmartSenders, SmartInfra, SmartDelivery, campaigns)
- `/sales-lemlist` — Lemlist platform help (sequences, Lemwarm, enrichment, LinkedIn automation)
- `/sales-mailshake` — Mailshake platform help (campaigns, Lead Catcher, settings)
- `/sales-apollo-sequences` — Apollo sequence mechanics and configuration
- `/sales-salesloft` — Salesloft platform help
- `/sales-agency-outbound` — Multi-client agency outbound — infrastructure, client isolation, warmup at scale
- `/sales-yesware` — Yesware platform help (inbox-native sending, campaigns, tracking)
- `/sales-mixmax` — Mixmax platform help (for Mixmax-specific setup)
- `/sales-reply` — Reply.io platform help (for Reply.io-specific setup)
- `/sales-woodpecker` — Woodpecker platform help (for Woodpecker-specific setup)
- `/sales-email-tracking` — Email engagement tracking — understand open/click accuracy and privacy limitations
- `/sales-enrich` — Verify and enrich contact emails before sending
- `/sales-tomba` — Tomba platform help (email verification, bulk verification, domain status checks)
- `/sales-prospeo` — Prospeo platform help (5-step email verification built into enrichment)
- `/sales-hunter` — Hunter.io platform help (Email Verifier, bulk verification, Campaigns with inbox-native sending)
- `/sales-mailmo` — Mailmo platform help (Email Verifier with catch-all detection, bulk verification)
- `/sales-seamless` — Seamless.AI platform help (real-time verified contacts, CRM Enrich, Engagement Hub)
- `/sales-safetymails` — SafetyMails platform help (19-step bulk verification, real-time API, Email Finder)
- `/sales-mailchimp` — Mailchimp platform help (email campaigns, Customer Journey Builder, domain auth, deliverability)
- `/sales-sendgrid` — SendGrid platform help (Email API, domain authentication, dedicated IPs, IP warmup, Email Validation API)
- `/sales-postmark` — Postmark platform help (transactional email, DMARC monitoring, sender vetting, message streams)
- `/sales-customerio` — Customer.io platform help (behavior-driven automation, domain auth, engagement segmentation)
- `/sales-mailgun` — Mailgun platform help (domain auth, dedicated IPs, Mailgun Optimize validation/inbox placement)
- `/sales-klaviyo` — Klaviyo platform help (domain auth, Smart Sending, engagement segmentation, benchmarks)
- `/sales-activecampaign` — ActiveCampaign platform help (domain auth, predictive sending, engagement tagging, Postmark integration)
- `/sales-outscraper` — Outscraper platform help (email validation, Google Maps scraping, contact extraction)
- `/sales-enrichso` — Enrich.so platform help (email validation, disposable email detection, reverse email lookup)
- `/sales-minelead` — Minelead platform help (email verification with quality scoring, disposable email detection, domain email search)
- `/sales-getprospect` — GetProspect platform help (email verifier with catch-all detection, SPF/DKIM checks, cold email sending controls)
- `/sales-skrapp` — Skrapp platform help (email verifier with 97% accuracy, personal/disposable detection, bulk verification)
- `/sales-anymailfinder` — Anymail Finder platform help (email verifier, 97%+ delivery guarantee on found emails, bulk verification, pay-only-for-verified model)
- `/sales-zerobounce` — ZeroBounce platform help (email validation 99.6% accuracy, AI scoring, activity data, inbox placement testing, blacklist monitoring, DMARC, warmup)
- `/sales-snov` — Snov.io platform help (email warmup, deliverability check, done-for-you email setup, email verifier 98% accuracy, multichannel campaigns)
- `/sales-iterable` — Iterable platform help (domain authentication, dedicated IPs, Brand Affinity for list hygiene, system webhooks)
- `/sales-braze` — Braze platform help (domain authentication, dedicated IPs, IP warming, IP pools, Currents delivery monitoring)
- `/sales-brevo` — Brevo platform help (domain authentication, dedicated IPs, warmup, transactional + marketing email)
- `/sales-getresponse` — GetResponse platform help (domain auth, Perfect Timing, contact scoring for list hygiene)
- `/sales-transactional-email` — Transactional email delivery strategy (separate from marketing deliverability)
- `/sales-prospect-list` — Build prospect lists with verified contacts
- `/sales-omnisend` — Omnisend platform help (domain auth, lifecycle segmentation, ecommerce email/SMS/push)
- `/sales-sendpulse` — SendPulse platform help (email verifier, bounce management, reputation monitoring, dedicated IP, spam score checker)
- `/sales-leadmagic` — LeadMagic platform help (email validation, catch-all detection, API-first verification)
- `/sales-zoominfo` — ZoomInfo platform help (Engage email configuration)
- `/sales-brandjet` — BrandJet AI platform help — multi-channel outreach, brand intelligence, AI monitoring
- `/sales-beehiiv` — Beehiiv platform help (shared IP deliverability, custom domains, engagement metrics)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: New domain setup
**User says**: "I'm setting up a new domain for cold outbound. What do I need to do?"
**Skill does**:
1. Recommends a dedicated outbound domain (separate from primary)
2. Provides SPF/DKIM/DMARC setup instructions with example DNS records
3. Outlines the warmup schedule (weeks 1-5)
4. Recommends warmup tools and verification steps
**Result**: User has a complete domain setup and warmup plan

### Example 2: Diagnosing a deliverability drop
**User says**: "My open rates dropped from 45% to 15%. I'm using 3 Apollo mailboxes at 50 emails/day each."
**Skill does**:
1. Identifies likely causes: reputation damage, blacklisting, or auth issues
2. Provides a diagnosis checklist: check blacklists via MXToolbox, verify SPF/DKIM/DMARC, review bounce rate, check sender reputation via Google Postmaster Tools (for Gmail recipients) and Microsoft SNDS (for Outlook recipients)
3. Recommends checking each mailbox's reputation individually — one bad mailbox can drag down the others. Use Google Postmaster Tools to see domain-level reputation and per-IP data.
4. Recommends volume reduction and re-warmup of affected mailboxes
5. Creates a recovery plan with timeline
**Result**: User has a diagnosis framework and recovery plan

### Example 3: Platform migration
**User says**: "Switching from Apollo to Mailshake. What do I need to do for deliverability?"
**Skill does**:
1. Verifies domain auth is platform-independent (SPF/DKIM may need updating for Mailshake)
2. Recommends adding Mailshake to SPF (`include:mailshake.com`) and configuring Mailshake-specific DKIM
3. **Recommends removing Apollo's SPF include and DKIM records** if you're fully migrating off Apollo — stale includes count toward SPF's 10-lookup limit and leaving them adds unnecessary DNS complexity
4. Advises warmup for new platform connection even if mailbox is established
5. Compares sending limit configuration between platforms
**Result**: User has a migration checklist covering auth updates for both platforms, warmup, and platform config

## Troubleshooting

### Emails landing in spam
**Symptom**: Recipients report emails in spam, or open rates are very low (<15%)
**Cause**: Missing/broken domain auth, poor sender reputation, content triggers, or shared tracking domain
**Solution**: Run full auth check (SPF/DKIM/DMARC). Test with mail-tester.com. Set up custom tracking domain. Check blacklists. If reputation is damaged, reduce volume and re-warmup.

### High bounce rate
**Symptom**: Bounce rate above 3%
**Cause**: Unverified email list, stale data, or sending to catch-all domains
**Solution**: Immediately pause affected campaigns. Run remaining list through email verification (NeverBounce, ZeroBounce). Remove all invalid addresses. Only resume with verified addresses.

### Blacklisted domain
**Symptom**: Widespread delivery failures, MXToolbox shows blacklist hits
**Cause**: High bounce rate, spam complaints, or sending to spam traps
**Solution**: Stop all sending. Identify and fix root cause. Submit delisting requests to each blacklist. Wait 24-48 hours. Re-warmup before resuming. If severely blacklisted, consider a new outbound domain.
