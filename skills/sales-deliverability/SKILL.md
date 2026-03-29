---
name: sales-deliverability
description: "Email deliverability for outbound sales — domain authentication (SPF/DKIM/DMARC), mailbox warmup, sending limits, inbox placement, blacklist monitoring, sender reputation, custom tracking domains, and list hygiene. Use when setting up a new sending domain, warming up mailboxes, diagnosing spam/deliverability issues, recovering from blacklisting, scaling outbound volume, or switching email platforms. Do NOT use for cadence content and strategy (use /sales-cadence), Apollo sequence mechanics (use /sales-apollo-sequences), Mailshake platform help (use /sales-mailshake), Smartlead platform help (use /sales-smartlead), Lemlist platform help (use /sales-lemlist), Yesware platform help (use /sales-yesware), Mixmax-specific config (use /sales-mixmax), Reply.io-specific config (use /sales-reply), Woodpecker-specific config (use /sales-woodpecker), Hunter.io-specific config (use /sales-hunter), Mailmo-specific config (use /sales-mailmo), Tomba-specific config (use /sales-tomba), Prospeo-specific config (use /sales-prospeo), Seamless.AI-specific config (use /sales-seamless), SafetyMails-specific config (use /sales-safetymails), Mailchimp-specific config (use /sales-mailchimp), SendGrid-specific config (use /sales-sendgrid), Postmark-specific config (use /sales-postmark), Customer.io-specific config (use /sales-customerio), Mailgun-specific config (use /sales-mailgun), Klaviyo-specific config (use /sales-klaviyo), or ActiveCampaign-specific config (use /sales-activecampaign), or Outscraper-specific config (use /sales-outscraper), or Enrich.so-specific config (use /sales-enrichso)."
argument-hint: "[describe your deliverability situation — new domain, spam issues, warmup, scaling]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Email Deliverability for Outbound Sales

Help the user set up, diagnose, and optimize email deliverability — from domain authentication and warmup through inbox placement, reputation monitoring, and platform-specific configuration. This skill is tool-agnostic and covers Apollo, Mailshake, Salesloft, Lemlist, Yesware, Mixmax, Reply.io, Woodpecker, Hunter.io, Tomba, Prospeo, Seamless.AI, SafetyMails, and standalone tools.

## Step 1 — Gather context

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

### In Mailshake
- **Sending limits**: Configure per-sender daily limits in Settings > Senders
- **Sender rotation**: Add multiple senders to a campaign — Mailshake rotates automatically
- **Custom tracking domain**: Settings > Tracking Domain — add CNAME record
- **Warmup**: Mailshake doesn't have built-in warmup. Use Instantly or Warmbox alongside.
- **Bounce handling**: Auto-pauses recipients on hard bounce. Monitor in Activity > Bounces.

### In Apollo
- **Inbox Ramp Up**: Settings > Email > Inbox Ramp Up — Apollo's built-in warmup feature
- **Command Center**: Settings > Email > Deliverability — monitors sender health, SPF/DKIM status
- **Sending limits**: Settings > Email > Sending Limits — per-mailbox daily caps
- **Mailbox rotation**: Assign multiple mailboxes to a sequence — Apollo rotates sends
- **Custom tracking domain**: Settings > Email > Custom Tracking Domain

### In Salesloft
- **Email settings**: Settings > Email — configure sending windows, throttling, daily limits
- **Throttling**: Salesloft auto-throttles to prevent spikes. Configure max emails per hour.
- **Sender management**: Cadence settings > Sender — assign specific senders per cadence
- **Custom tracking domain**: Admin > Email > Custom Tracking Domain

### In Lemlist
- **Lemwarm**: Built-in warmup included with every seat at no extra cost. Enable per email account — set warmup to 30 emails/day for accounts <6 months, 40/day for older. Minimum 3-5 weeks before adding cold outbound. Monitor deliverability score (target 90+).
- **Inbox rotation**: Connect multiple email accounts to a sequence — Lemlist rotates sends automatically. Each account limited to plan allowance (5 per user on Multichannel Expert, $9 per additional inbox).
- **Domain auth**: Configure SPF/DKIM/DMARC and custom tracking domain before launching sequences. Lemlist Help Center has DNS configuration guides.
- **Sending limits**: Configure per-account daily limits. Recommended 30-50 cold emails/day per mailbox.

### In Yesware
- **Sends from your inbox**: Yesware campaigns send directly from Gmail/Outlook — no third-party server. This improves deliverability because emails appear as genuine 1:1 messages, not bulk sends.
- **No built-in warmup**: Since Yesware sends from your existing inbox, traditional warmup is less critical. However, if you're sending high-volume campaigns from a new email account, ramp up gradually (20/day → 50/day over 2-3 weeks).
- **Domain auth**: SPF/DKIM/DMARC should still be configured for your domain. Yesware inherits your inbox's auth settings.
- **Custom tracking domain**: Yesware uses its own tracking domain for open/click tracking. This is a shared domain — no custom tracking domain option.
- **Sending limits**: Governed by your email provider (Gmail ~400-500/day, Outlook ~1,000/day) plus Yesware plan limits on campaign recipients.
- **Key advantage**: Inbox-native sending means no separate IP reputation to manage and no relay server that could get blacklisted.
- **Key limitation**: No deliverability dashboard — Yesware doesn't report inbox placement rate, so you won't know how many emails landed in spam vs inbox.

### In Smartlead
- **SmartSenders**: Auto-provision mailboxes via Gmail/Outlook OAuth. Configure per-sender daily limits (recommend 30-50/day per mailbox for cold outbound).
- **SmartInfra**: Dedicated IPs with auto DNS/DKIM/DMARC configuration for high-volume senders. Evaluate when sending 1,000+ emails/day or managing multiple clients.
- **Ultra Premium Warmup**: Built-in warmup — enable per mailbox, minimum 2-3 weeks before campaign sends. Monitor warmup reputation score (target 80+ before activating).
- **SmartDelivery**: Inbox placement testing — send test emails to seed accounts and measure inbox vs spam placement. Run before launching campaigns and periodically during active sends.
- **Custom tracking domain**: Settings > Tracking Domain — add CNAME record for branded link tracking.

### In Mixmax
- **Sending method**: Gmail-native — emails send through the user's actual Gmail account (Google Workspace), not through Mixmax's servers. This means deliverability is tied to your Google Workspace domain reputation, not Mixmax's infrastructure.
- **SPF/DKIM/DMARC**: Managed at the Google Workspace level, not in Mixmax. Ensure your domain has SPF, DKIM, and DMARC configured in Google Workspace Admin > Apps > Google Workspace > Gmail > Authentication.
- **Custom tracking domains**: Available to reduce spam filtering on tracked links — configure in Mixmax settings. Uses CNAME record pointing to Mixmax's tracking servers.
- **No built-in warmup**: Mixmax does not have a warmup tool. Since it sends through Gmail, use a third-party warmup service (Lemwarm, Warmbox, Instantly) connected to your Google Workspace account if needed.
- **Sending limits**: Subject to Gmail/Google Workspace sending limits (2,000 emails/day for Workspace, 500/day for free Gmail). Mixmax sequences respect these limits automatically.
- **No deliverability dashboard**: Mixmax doesn't have a dedicated deliverability dashboard. Monitor bounce rates in sequence reporting; check Google Postmaster Tools for domain reputation.
- **Best practice**: Since Mixmax is Gmail-native, your Google Workspace domain health IS your Mixmax deliverability. Focus on Google Postmaster Tools, proper authentication, and keeping bounce rates under 2%.

### In Reply.io
- **Built-in warmup**: Peer-to-peer warmup service — uses real Reply.io user accounts (no free/temporary emails). The system opens, replies, marks as important, and removes from spam realistically. Enable in Settings > Email Accounts > Warmup.
- **Warmup timeline**: 2-3 weeks for new domains/mailboxes. Leave warmup running even after starting sequences to maintain reputation.
- **Domain health checker**: Dedicated tab in Reply.io that checks SPF, DKIM, DMARC, and MX records. Provides actionable fix suggestions for each issue.
- **Google Postmaster integration**: Reply.io pulls spam rate data directly from Google Postmaster Tools — monitor your spam rate without leaving the platform.
- **Branded links**: Custom tracking domains to replace Reply.io's default tracking domain — reduces spam filtering on tracked links. Configure in Settings > Branded Links.
- **Sending limits**: Respects Gmail/Outlook provider limits; configure per-mailbox daily caps. Use multiple mailboxes (up to 10/user on Multichannel plan) to increase volume safely.
- **Bounce handling**: Automatic bounce detection; bounced contacts are paused in sequences. Monitor bounce rate in sequence analytics — keep under 3%.
- **Best practice**: Enable warmup on every new mailbox before adding it to sequences. Use the domain health checker weekly. If spam rate exceeds 0.3% in Google Postmaster, pause sequences and investigate.

### In Woodpecker
- **Built-in warmup**: Free warmup powered by Mailivery — AI-driven interactions (opens, replies, marks as important, removes from spam). Starts with a few emails/day, ramps to max 50/day. Included in all plans (free plan: 4 warmup slots). Additional slots available at €5/account.
- **Bounce Shield**: Proactive protection that prevents sending to risky or invalid addresses before they bounce. Reduces bounce rate and protects sender reputation automatically.
- **Adaptive Sending**: Automatically adjusts sending volume and pace based on email provider limits and engagement signals. Prevents overloading mailboxes and triggering spam filters.
- **ESP Matching**: Matches your sending patterns to what email service providers expect from legitimate senders — improves inbox placement.
- **Email verification**: Free catch-all verification powered by Bouncer. Real-time list cleaning validates prospect emails when added to campaigns. Catches invalid addresses before sending.
- **Domain audit**: In-app tool that checks SPF, DKIM, DMARC configuration with actionable fix suggestions. Run before launching any campaign.
- **Spam checker**: Pre-send analysis that highlights spammy words, broken links, and authentication issues in your email content.
- **Deliverability monitor**: Ongoing monitoring of inbox placement and sender reputation. Alerts when metrics degrade.
- **Inbox rotation**: Distributes sends across multiple mailboxes to stay within per-account limits while maintaining volume. Unlimited email accounts on all plans.
- **Best practice**: Woodpecker has the most comprehensive built-in deliverability toolkit of any cold email tool. Enable warmup + Bounce Shield + Adaptive Sending on every account. Run domain audit before first campaign. Use the spam checker on every new email template.

### In Mailchimp (opt-in email marketing)
- **Domain authentication**: Settings > Domain > Authenticate. Mailchimp walks you through adding DKIM and SPF records. DMARC is recommended but configured at your DNS provider, not in Mailchimp.
- **Custom tracking domain**: Not available on Free or Essentials. Standard+ plans support custom domains for open/click tracking — reduces spam filtering on shared Mailchimp tracking domains.
- **Dedicated IP**: Available as an add-on for high-volume senders (typically 100K+ contacts). Shared IPs are fine for most users — Mailchimp manages shared IP reputation.
- **No built-in warmup**: Mailchimp doesn't have a warmup tool because it manages sender reputation via shared infrastructure. New accounts are gradually ramped by Mailchimp's system. If migrating a large list, import in batches (start with most engaged contacts).
- **Omnivore abuse prevention**: Mailchimp's automated system scans lists for quality issues (high bounce rates, spam traps, purchased lists). Lists that fail Omnivore checks get flagged or suspended — clean your list before importing.
- **Key deliverability tip**: Mailchimp bills for ALL contacts including unsubscribed. Unengaged contacts hurt deliverability AND cost money. Archive contacts who haven't opened in 90+ days to improve engagement ratios and reduce costs.
- **Best practice**: Use Mailchimp's built-in engagement segments to target only active subscribers. Run regular list cleaning campaigns. For transactional email (Mandrill), configure a separate sending domain to isolate marketing and transactional reputation.

### In SendGrid (Twilio)
- **Domain authentication**: Settings > Sender Authentication > Authenticate Your Domain. SendGrid provides CNAME records for DKIM and a TXT record for SPF. Validates automatically once DNS propagates. Branded links also configured here.
- **Reverse DNS (rDNS)**: Configure for dedicated IPs to associate your sending domain with your IP address — improves inbox placement and ISP trust. Available in Settings > Sender Authentication > Reverse DNS.
- **Dedicated IP**: Included on Pro+ (Email API) and Advanced+ (Marketing Campaigns) plans. Additional IPs at $30/mo each. Only recommended for 50K+ emails/month — below that volume, shared IP pools provide better reputation.
- **IP warmup**: Automated warmup available — SendGrid gradually increases volume over your dedicated IP. Manual warmup also supported for more control. Start at 50-100 emails/day, double every 2-3 days.
- **Email Validation API**: Real-time single-email validation (`POST /v3/validations/email`) — returns verdict (Valid/Risky/Invalid), score, and checks (disposable domain, role-based address, typo suggestions). Pro plan includes 2,500 validations/month, Premier includes 5,000. Additional validations at extra cost.
- **Suppressions management**: Automatic suppression of bounces, blocks, invalid emails, spam reports, and unsubscribes. Shared across Email API and Marketing Campaigns. Access via API (`/v3/suppression/*`) or dashboard.
- **Engagement quality score**: SendGrid provides an engagement quality score that measures your sending reputation based on bounce rates, spam complaints, and engagement metrics.
- **Custom tracking domain**: Configure a branded tracking domain for open/click tracking links — reduces spam filtering vs. shared SendGrid tracking domains. Settings > Sender Authentication > Link Branding.
- **Best practice**: Authenticate your domain before sending anything. If on a dedicated IP, use automated warmup. Use the Email Validation API to clean lists before importing. Monitor suppression lists regularly — high bounce or spam complaint rates trigger SendGrid's compliance review, which can suspend your account.

### In Postmark (ActiveCampaign)
- **Domain authentication**: Servers > Sender Signatures > Add Domain. Postmark provides DKIM (via CNAME) and Return-Path (for SPF alignment) DNS records. Verify with one click after DNS propagates.
- **DMARC Monitoring**: Free weekly DMARC report summaries at dmarc.postmarkapp.com — human-readable digests of complex DMARC XML reports. Paid add-on ($14/mo/domain) for detailed monitoring with API access.
- **No built-in warmup**: Postmark doesn't need traditional warmup because it uses shared IP pools with strict sender vetting. New accounts go through a vetting process — Postmark reviews your sending practices before fully activating your account. This vetting process is Postmark's alternative to warmup.
- **Dedicated IP**: Available as add-on ($50/mo per IP) but only recommended for 300K+ emails/month. Below that volume, Postmark's shared pools provide better deliverability because they maintain strict sender quality standards.
- **Sender vetting**: Postmark's key deliverability differentiator — they vet every sender before allowing full access. This keeps spammers off their infrastructure, which is why shared IPs have 98.7% inbox placement without dedicated IPs.
- **Message Streams**: Separate transactional and broadcast traffic onto different streams with isolated reputation. If broadcast emails damage reputation, transactional email delivery is unaffected.
- **Bounce management (Rebound)**: Automatic bounce processing — hard bounces are immediately suppressed, soft bounces retry then suppress. Suppression lists managed per message stream.
- **Quality requirements**: Spam complaint rate must stay below 0.1% (1 in 1,000) and bounce rate below 10%. Exceeding these triggers account review.
- **Best practice**: Use Postmark's free DMARC monitoring on all your sending domains (even non-Postmark ones). Set up separate message streams for transactional and broadcast from day one. Let Postmark's shared infrastructure handle deliverability — don't add a dedicated IP unless you're consistently above 300K/month.

### In Customer.io
- **Domain authentication**: Settings > Email > Sending Domains. Customer.io provides DKIM and SPF DNS records for your sending domain. Verify with one click after DNS propagation.
- **Dedicated sending infrastructure**: Premium and Enterprise plans include dedicated sending infrastructure for higher deliverability and reputation isolation.
- **No built-in warmup**: Customer.io doesn't have a warmup tool. For new domains, start with engaged segments and gradually expand audience size over 2-4 weeks.
- **Suppression management**: Automatic suppression of hard bounces and spam complaints. Unsubscribes managed per-subscription-topic (configurable subscription preferences page).
- **Engagement-based segmentation**: Build segments based on email engagement (opened, clicked, not opened in X days) — use these to exclude unengaged contacts and protect sender reputation.
- **Best practice**: Use Customer.io's engagement segments to target only active subscribers. Set up subscription topics to let users manage preferences instead of fully unsubscribing. Monitor bounce and spam rates in the analytics dashboard — Customer.io may restrict sending if complaint rates exceed acceptable thresholds.

### In Mailgun (Sinch)
- **Domain authentication**: Domains API (`POST /v3/domains`) generates SPF and DKIM DNS records. Verify with `PUT /v3/domains/{domain}/verify`. Both US (`api.mailgun.net`) and EU (`api.eu.mailgun.net`) regions available — choose at domain creation time, cannot change later.
- **Dedicated IPs**: Available on Scale+ plans at $59/mo per IP. Assign to domains via `POST /v3/domains/{domain}/ips`. New dedicated IPs require warmup — start with low volume and gradually increase over 2-4 weeks.
- **Mailgun Optimize** (separate add-on, $49+/mo): Inbox placement seed testing (test where emails land across ISPs), email validation (single + bulk CSV), sender reputation monitoring, blocklist alerts, and IP/domain health dashboards.
- **Email validation**: `GET /v4/address/validate` returns is_valid, result (deliverable/undeliverable/risky), risk score, and did_you_mean suggestions. Bulk validation via CSV upload. Customers report 21% lower bounce rates and 65% higher open rates after validation.
- **Suppressions management**: Automatic suppression of hard bounces, unsubscribes, and complaints. API endpoints for managing each suppression list (`GET/POST/DELETE /v3/{domain}/bounces`, `/unsubscribes`, `/complaints`). Whitelists to override suppressions.
- **No built-in warmup tool**: Mailgun doesn't have automated warmup. For new domains/IPs, manually ramp volume: start with 50-100/day to engaged recipients, increase 20-30% daily over 2-4 weeks.
- **Best practice**: Use Mailgun Optimize's inbox placement testing before major sends to catch deliverability issues proactively. Set up webhook monitoring for permanent_fail and complained events to catch reputation issues early. Use tags to segment sends and track deliverability metrics per tag.

### In Klaviyo
- **Domain authentication**: Settings > Email > Domains. Add your sending domain, Klaviyo provides DKIM and SPF DNS records. Shared sending infrastructure by default; dedicated sending domain available on higher tiers.
- **Dedicated sending infrastructure**: Available for high-volume accounts — contact Klaviyo support. Not self-serve on standard plans.
- **No built-in warmup**: Klaviyo doesn't have a warmup tool. For new domains or accounts, start by sending to your most engaged segments and gradually expand audience size over 2-4 weeks. Use engagement-based segments (opened/clicked in last 30/60/90 days) to protect reputation.
- **List hygiene**: Profile-based billing (all active profiles count) incentivizes cleaning — suppress hard bounces (automatic), remove unengaged profiles regularly. Use sunset flows to re-engage or suppress cold subscribers.
- **Smart Sending**: Global frequency cap prevents over-sending — if a profile received an email within a configurable window (default 16 hours), subsequent sends are skipped. Helps protect deliverability.
- **Engagement-based segmentation**: Build segments like "Engaged 30d" (opened or clicked in last 30 days) and "Never engaged" — use these to throttle sends and protect sender reputation.
- **Best practice**: Use Klaviyo's benchmarks feature to compare your deliverability metrics against industry peers. Monitor bounce rates and spam complaints in the Analytics dashboard. Set up a sunset flow to automatically suppress profiles that haven't engaged in 60-90 days.

### In ActiveCampaign
- **Domain authentication**: Settings > Advanced > Email Authentication. ActiveCampaign provides DKIM and SPF DNS records for your sending domain. DMARC setup recommended separately.
- **Dedicated IPs**: Available on Enterprise plan. Shared IPs on lower plans — ActiveCampaign manages sender reputation across shared pool.
- **No built-in warmup tool**: ActiveCampaign doesn't have automated warmup. For new domains, start with engaged segments and gradually expand audience size over 2-4 weeks. Use engagement-based automation triggers to target active contacts first.
- **Predictive sending**: AI-powered send time optimization — ActiveCampaign predicts the best send time per contact based on historical engagement. Available on Pro+ plans. Helps deliverability by sending when contacts are most likely to engage.
- **Engagement tagging**: Use automations to tag contacts by engagement level (active, passive, inactive). Build segments from these tags to exclude unengaged contacts from campaigns — protects sender reputation.
- **List hygiene**: ActiveCampaign charges per contact, incentivizing regular cleanup. Use engagement-based automations to identify and archive inactive contacts. Automatic hard bounce and spam complaint suppression.
- **Postmark integration**: ActiveCampaign acquired Postmark (2022) for transactional email. Use Postmark for transactional sends (98.7% inbox rate) and ActiveCampaign for marketing — keeps transactional reputation separate.
- **Best practice**: Use engagement-based segments to send only to active contacts. Set up a re-engagement automation for inactive contacts (no opens in 60-90 days) — if they don't re-engage, archive them. Monitor deliverability in Reports > Email Performance. Use Postmark for transactional email to protect your marketing sender reputation.

### In Mailmo (verification focus)
- **Email Verifier**: Real-time verification including format, domain, MX records, SMTP response, and catch-all detection.
- **Catch-all detection**: Mailmo's key differentiator — proprietary catch-all verification claims up to 100% accuracy for identifying valid mailboxes on catch-all domains. Standard verifiers mark all catch-all addresses as "risky"; Mailmo verifies the specific mailbox.
- **Bulk verification**: Upload CSV of emails for batch verification. Results downloadable with verification status per email.
- **No sending capability**: Mailmo is a finder/verifier only — no campaigns, no sending. Use it upstream to verify lists before importing into outbound tools.
- **Best practice**: Use Mailmo specifically for lists with high catch-all domain rates where other verifiers return inconclusive results. Its catch-all verification provides the most value on domains that other tools mark as "accept_all" or "risky."

### In Hunter.io (verification + campaigns)
- **Email Verifier**: Real-time SMTP/MX validation — checks format, domain, MX records, SMTP response, catch-all status, webmail detection, and disposable domain detection. Statuses: valid (safe to send), invalid (don't send), accept_all (use with caution), webmail, disposable, unknown.
- **Bulk verification**: Submit arrays of emails via `POST /email-verifier/bulk`. Async processing — check job status and retrieve results when complete.
- **Campaigns (inbox-native sending)**: Hunter Campaigns send from your connected Gmail/Outlook account — no third-party server. This improves deliverability since emails appear as genuine 1:1 messages.
- **Custom tracking domain**: Available in Campaign settings for branded open/click tracking — reduces spam filtering on tracked links.
- **No built-in warmup**: Hunter does not have a warmup tool. Since it sends through your inbox, use a third-party warmup service (Lemwarm, Warmbox, Instantly) if needed for new accounts.
- **Sending limits**: Subject to your email provider limits (Gmail ~500/day, Outlook ~1,000/day) plus Hunter plan sender limits (3/15/40/unlimited by plan).
- **Best practice**: Verify all emails with Hunter's Email Verifier before adding to campaigns. Set up custom tracking domain. For high-volume outbound, use Hunter for finding/verifying and export to a dedicated sending tool.

### In Seamless.AI (verification at reveal)
- **Real-time verification**: Seamless.AI verifies emails and phones at the point of reveal — not pre-cached stale data. This means freshly revealed contacts are already verified.
- **No standalone verification tool**: Seamless.AI does not offer a separate email verification service. Verification is built into the reveal process.
- **CRM Enrich**: When enriching CRM records, Seamless.AI provides fresh verified data — stale records get updated with current, verified contact info.
- **No sending infrastructure**: Seamless.AI's Engagement Hub sends emails but doesn't have dedicated deliverability tools (warmup, domain audit, bounce shield). For outbound at scale, export contacts to a dedicated tool with proper deliverability infrastructure.
- **Best practice**: Use Seamless.AI for data (verified contacts) and a dedicated engagement tool (Salesloft, Outreach, Mailshake, etc.) for sending. The native integrations make this push seamless.

### In SafetyMails (verification + list hygiene)
- **Bulk Email Verification**: Upload lists up to 2M emails via the panel. 19-step verification algorithm checks syntax, MX records, SMTP response, catch-all detection, spamtrap identification, disposable email detection (80+ services), role-based address detection, and domain typo correction. Results: Valid, Invalid, Catch-All, Disposable, Spamtrap, Role-Based, Syntax Error, Domain Error.
- **Real-Time API**: JavaScript embed for forms and landing pages — validates emails at point of capture in <1 second. Prevents invalid addresses from entering your database. Customizable error messages for branding. Supports WordPress, Google Tag Manager, RD Station, E-goi, and custom HTML forms.
- **Email Finder**: B2B corporate email lookup by first name + last name + domain. Every result is auto-verified. Costs 7 credits per found email, 1 credit for risky/invalid domain, 0 credits if not found.
- **No sending infrastructure**: SafetyMails is a verification/finder tool, not a sending tool. Use it upstream to clean lists before importing into outbound tools.
- **Credit economics**: 1 credit per email verified (bulk). Pay-as-you-go ($7.50/1,000 credits) or subscription ($6.80/mo/1,000 credits). Credits never expire. Free: 100 bulk credits + 1,000 API trial on signup.
- **Best practice**: Use SafetyMails for bulk list cleaning before campaigns. Its 19-step algorithm catches spamtraps and disposable emails that simpler verifiers miss. For ongoing form protection, embed the real-time API to prevent bad addresses at the source.

### In Enrich.so (verification focus)
- **Email Validation**: Verify email deliverability with catch-all detection via Enrich.so's API. Returns valid/invalid/risky status.
- **Disposable Email Check**: Detect temporary and spam email addresses — prevents wasting sends on throwaway accounts.
- **No sending infrastructure**: Enrich.so is an enrichment/verification tool, not a sending tool. Use it upstream to validate emails before importing into outbound tools.
- **Best practice**: Run enriched email lists through Enrich.so's email validation before importing into any sending tool. The disposable email check catches addresses that other verifiers miss. Combine with the reverse email lookup to verify that enriched contacts are real people at real companies.

### In Outscraper (verification focus)
- **Email Validator**: `GET /email-validator` — verify individual or batch email addresses (up to 25 per request). Returns deliverability status (valid/invalid/risky). Use after scraping contacts from Google Maps or websites to clean the list before sending.
- **Batch validation**: Outscraper's batching support (25 queries per request) and async processing with webhook callbacks makes it suitable for bulk validation workflows.
- **No sending infrastructure**: Outscraper is a data extraction/validation tool, not a sending tool. Use it upstream to verify emails before importing into outbound tools.
- **Best practice**: After scraping businesses from Google Maps and extracting contacts via Emails & Contacts or Contacts & Leads, run all discovered emails through the Email Validator before importing into your outbound tool. This catches invalid addresses from outdated websites and reduces bounce rates.

### In Prospeo (verification focus)
- **5-Step Email Verification**: Built into every enrichment — syntax check, domain/MX check, SMTP verification, catch-all detection, and result validation. Statuses: VERIFIED (safe to send) or NOT_VERIFIED (use with caution).
- **Pre-send verification**: Use `only_verified_email: true` on enrichment calls to only get records with verified emails — effectively a built-in verification gate.
- **Bulk verification**: Bulk Enrich Person (up to 50 per call) returns verification status on every email. Use to clean lists before importing into sending tools.
- **No sending capability**: Prospeo is an enrichment/verification tool, not a sending tool. Use it upstream to ensure you're sending to verified addresses.
- **Best practice**: Run your prospect list through Prospeo's Enrich Person with `only_verified_email: true` before importing into any outbound tool. Combine with Prospeo's company enrichment to validate that target companies are active and match your ICP.

### In Tomba (verification focus)
- **Email Verifier**: Real-time SMTP/MX validation — validates whether an email is deliverable before sending. Checks format, MX records, SMTP response, catch-all status, and disposable domain detection.
- **Bulk verification**: Verify up to 10,000 emails per batch. Async processing with webhook callbacks.
- **Domain Status**: Check if a domain is webmail or disposable — useful for list cleaning.
- **Verification statuses**: valid (safe to send), invalid (remove), accept_all (monitor closely), unknown (exclude from bulk campaigns).
- **Best practice**: Use Tomba's bulk verifier to clean lists before importing into any sending tool. Combine with domain search to ensure you're reaching real addresses. Tomba is a verification/enrichment tool, not a sending tool — use it upstream in your workflow.

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
- `/sales-prospect-list` — Build prospect lists with verified contacts
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
