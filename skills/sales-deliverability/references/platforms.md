# Platform-Specific Deliverability Guide

Detailed per-platform deliverability configuration — sending limits, warmup, domain auth, custom tracking domains, and verification tools.

## Table of contents

- [In Mailshake](#in-mailshake)
- [In Apollo](#in-apollo)
- [In Salesloft](#in-salesloft)
- [In Lemlist](#in-lemlist)
- [In Yesware](#in-yesware)
- [In Smartlead](#in-smartlead)
- [In Mixmax](#in-mixmax)
- [In Reply.io](#in-replyio)
- [In Woodpecker](#in-woodpecker)
- [In Mailchimp (opt-in email marketing)](#in-mailchimp-opt-in-email-marketing)
- [In SendGrid (Twilio)](#in-sendgrid-twilio)
- [In Postmark (ActiveCampaign)](#in-postmark-activecampaign)
- [In Customer.io](#in-customerio)
- [In Mailgun (Sinch)](#in-mailgun-sinch)
- [In Klaviyo](#in-klaviyo)
- [In ActiveCampaign](#in-activecampaign)
- [In Mailmo (verification focus)](#in-mailmo-verification-focus)
- [In Hunter.io (verification + campaigns)](#in-hunterio-verification-campaigns)
- [In Seamless.AI (verification at reveal)](#in-seamlessai-verification-at-reveal)
- [In SafetyMails (verification + list hygiene)](#in-safetymails-verification-list-hygiene)
- [In Enrich.so (verification focus)](#in-enrichso-verification-focus)
- [In GetProspect (verification + sending)](#in-getprospect-verification-sending)
- [In Skrapp (verification focus)](#in-skrapp-verification-focus)
- [In Anymail Finder (verification focus)](#in-anymail-finder-verification-focus)
- [In Iterable (domain auth + dedicated IP)](#in-iterable-domain-auth-dedicated-ip)
- [In Braze (domain auth + dedicated IP + IP warming)](#in-braze-domain-auth-dedicated-ip-ip-warming)
- [In Brevo (domain auth + dedicated IP + warmup)](#in-brevo-domain-auth-dedicated-ip-warmup)
- [In Omnisend (domain auth + warmup + engagement lifecycle)](#in-omnisend-domain-auth-warmup-engagement-lifecycle)
- [In Kit (domain auth + engagement scoring)](#in-kit-domain-auth-engagement-scoring)
- [In GetResponse (domain auth + Perfect Timing)](#in-getresponse-domain-auth-perfect-timing)
- [In Snov.io (warmup + deliverability check)](#in-snovio-warmup-deliverability-check)
- [In ZeroBounce (validation + deliverability suite)](#in-zerobounce-validation-deliverability-suite)
- [In Minelead (verification focus)](#in-minelead-verification-focus)
- [In Outscraper (verification focus)](#in-outscraper-verification-focus)
- [In Prospeo (verification focus)](#in-prospeo-verification-focus)
- [In Tomba (verification focus)](#in-tomba-verification-focus)
- [In ZoomInfo (Engage)](#in-zoominfo-engage)
- [In SendPulse (verification + domain auth + dedicated IP)](#in-sendpulse-verification-domain-auth-dedicated-ip)
- [In LeadMagic](#in-leadmagic)
- [In AiSDR](#in-aisdr)
- [In BrandJet](#in-brandjet)

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

### In GetProspect (verification + sending)
- **Email Verifier**: Validate email deliverability with catch-all detection. 95% accuracy, 97% deliverability guarantee. Bulk verification available with separate verification credits. Useful for cleaning lists before importing into outbound tools.
- **SPF/DKIM checks**: GetProspect's cold email software checks your sending domain's SPF and DKIM configuration before sending — flags issues that would hurt deliverability.
- **Sending controls**: Configurable sending limits, randomized sending intervals, and timezone-aware delivery help maintain sender reputation and avoid spam filters.
- **Custom domain tracking**: Use your own domain for open/click tracking links instead of shared tracking domains — improves deliverability by avoiding association with other senders.
- **Auto-stop**: Sequences automatically stop when a prospect replies or clicks a specific link, preventing over-sending that harms reputation.
- **Best practice**: Use GetProspect's verifier to clean your prospect list before sequencing. The built-in cold email tool handles sending controls, but for dedicated warmup use a tool like Lemwarm or Mailwarm alongside GetProspect.

### In Skrapp (verification focus)
- **Email Verifier**: Single + bulk verification with 97% accuracy claim. Checks syntax, format, and mailbox validity. Detects personal and disposable addresses. 1 credit per verification — no charge for invalid results.
- **Bulk verification**: Upload CSV/Excel files for batch verification. Auto-maps columns to match email field. Export cleaned lists with validity status.
- **No sending infrastructure**: Skrapp is an email finding and verification tool — it doesn't send emails. Use the verifier upstream to clean lists before importing into your outbound tool (Mailshake, Lemlist, Smartlead, etc.).
- **Best practice**: Run prospect lists through Skrapp's verifier after email finding to catch any undeliverable addresses. Combine email finding + verification in a single workflow to maximize list quality before handoff to sending tools.

### In Anymail Finder (verification focus)
- **Email Verifier**: `POST /v5.1/verify-email` — returns valid/risky/invalid status. 0.2 credits per verification. Repeated verifications within 30 days are free. Webhook support via `x-webhook-url` header for async results.
- **Built-in verification on find**: Every email found via the Email Finder is automatically verified. Valid results (97%+ delivery guarantee) cost 1 credit; risky/not-found results are returned free. No separate verification step needed for newly found emails.
- **Bulk verification**: Include verification in bulk email search jobs (up to 100K rows). Async processing with webhook completion notifications. Credits charged on download.
- **No sending infrastructure**: Anymail Finder is a finding and verification tool — it doesn't send emails. Use it upstream to build and verify lists before importing into outbound tools.
- **Best practice**: Leverage the pay-only-for-verified model — risky results are free, so you can attempt finds broadly without wasting credits. Use the standalone verifier (0.2 credits) to re-check emails from other sources before sending.

### In Iterable (domain auth + dedicated IP)
- **Domain authentication**: Configure in Iterable Settings > Email. Add DNS records for SPF, DKIM, and custom return-path. Iterable provides the specific DNS records to add for your sending domain.
- **Dedicated IP**: Available on higher-tier plans. Request via your Iterable account manager. Dedicated IPs provide sender reputation isolation from other Iterable customers.
- **IP warming**: Iterable recommends gradual volume ramp on new dedicated IPs — start with most engaged segments, increase over 4-6 weeks. Follow their IP warming schedule documentation.
- **Custom tracking domain**: Set up a CNAME record for click/open tracking. Improves deliverability vs. shared tracking domains.
- **Sender authentication**: Verify sender email addresses and domains in Settings > Email before sending.
- **System webhooks for monitoring**: Configure system webhooks for bounce, complaint, and delivery events to monitor deliverability in real time.
- **Brand Affinity for list hygiene**: Use Brand Affinity labels to identify disengaged users (Negative, Never Engaged) and suppress them from campaigns to protect sender reputation.
- **Best practice**: Authenticate domains immediately. Request dedicated IP when consistently sending 100K+/month. Use Brand Affinity to exclude disengaged users from campaigns. Monitor bounce and complaint rates via system webhooks.

### In Braze (domain auth + dedicated IP + IP warming)
- **Domain authentication**: Configure in Braze dashboard under Settings > Email Preferences. Add DNS records for SPF (`include:spf.braze.com`), DKIM (CNAME records for Braze-specific selector), and custom return-path. Braze requires domain authentication before sending.
- **Dedicated IP**: Available on enterprise plans. Braze provisions dedicated sending IPs — request via your Braze account manager. Multiple IPs can be assigned to different IP pools for traffic segmentation.
- **IP pools**: Assign different sending domains and IPs to different IP pools — separate transactional from marketing, or separate brands. Configure in Settings > Email Preferences > IP Pools.
- **IP warming**: Braze provides IP warming schedules — start at low volume (5K-10K/day) and gradually increase over 4-6 weeks. Send to your most engaged users first. Braze's IP warming documentation provides day-by-day volume recommendations.
- **Custom tracking domain**: Required for click/open tracking. Set up a CNAME record pointing to Braze's tracking servers. Improves deliverability vs. shared Braze tracking domains.
- **Bounce handling**: Braze automatically suppresses hard bounces and manages soft bounce retry logic. Bounced users are marked in the dashboard.
- **Currents for monitoring**: Stream delivery events (sends, deliveries, bounces, spam complaints) to your data warehouse via Currents for custom deliverability dashboards.
- **Best practice**: Authenticate your domain and set up a custom tracking domain before sending. Request dedicated IPs once you're consistently sending 100K+/month. Use IP pools to separate transactional and marketing traffic. Monitor Currents delivery data for early warning signs.

### In Brevo (domain auth + dedicated IP + warmup)
- **Domain authentication**: Settings → Senders, Domains & Dedicated IPs → Domains. Add Brevo code (TXT record), DKIM (CNAME), and DMARC (TXT). SPF: `v=spf1 include:spf.brevo.com ~all`. Brevo uses Entri for automatic DNS configuration — or configure manually.
- **Dedicated IP**: Available on paid plans. Configure in Settings → Senders, Domains & Dedicated IPs. Associate with a subdomain dedicated only to Brevo sends (e.g., `mail.yourdomain.com`).
- **IP warmup**: Brevo recommends starting at 50-100 emails/day to engaged contacts, increasing volume gradually over 4-6 weeks. Send to your most engaged segment first, then expand.
- **DMARC compliance**: Required since Feb 2024 (Gmail/Yahoo) and May 2025 (Microsoft). Brevo supports DMARC monitoring — keep only one DMARC record with a `rua` tag.
- **Transactional vs marketing separation**: Brevo handles both transactional and marketing on the same platform but recommends separate sending domains/subdomains. Use a dedicated subdomain for transactional (e.g., `notify.yourdomain.com`) and another for marketing (e.g., `mail.yourdomain.com`).
- **Volume-based pricing**: Brevo charges by email volume, not contacts — unlimited contacts on all plans. Free plan caps at 300 emails/day.
- **Best practice**: Authenticate your domain immediately after account creation. Request a dedicated IP once you're consistently sending 50K+/month. Warm up the IP gradually. Use Brevo's engagement segmentation to exclude unengaged contacts from campaigns and protect sender reputation.

### In Omnisend (domain auth + warmup + engagement lifecycle)
- **Domain authentication**: Settings → Sender Domains. Add your sending domain, Omnisend provides SPF and DKIM DNS records. DMARC recommended with `p=none` and relaxed alignment to meet Gmail/Yahoo requirements.
- **Shared sending infrastructure**: Default. No self-serve dedicated IP — Omnisend manages shared IP reputation.
- **No built-in warmup tool**: Omnisend doesn't have automated warmup. For new domains or accounts migrating from another platform, start by sending to your most engaged segment and gradually expand audience over 2-4 weeks. Omnisend recommends a warmup schedule when switching platforms.
- **Lifecycle-based segmentation**: Auto-assigned lifecycle stages (New Subscriber, Active Customer, At Risk, Lapsed, Champions) — use these to target engaged contacts and suppress lapsed ones.
- **RFM scoring**: Built-in Recency-Frequency-Monetary scoring helps identify high-value contacts for targeted sends and low-engagement contacts for suppression.
- **Smart sending**: Contacts who received a message recently are skipped to prevent over-sending.
- **Contact-based billing**: Omnisend charges by contact count — incentivizes regular list cleaning. Remove hard bounces (automatic) and suppress unengaged contacts.
- **Best practice**: Authenticate your domain immediately. Send initial campaigns to your most engaged segment (opened/clicked in last 30 days). Use lifecycle stages to exclude Lapsed contacts from broadcasts. Clean your list quarterly — remove contacts inactive for 90+ days.

### In Kit (domain auth + engagement scoring)
- **Domain authentication**: Settings → Email → add and verify your sending domain. Kit generates DKIM records to add to DNS. SPF and DMARC setup recommended.
- **Infrastructure**: Kit uses SendGrid infrastructure for email delivery. Shared IP by default.
- **Dedicated IP**: Available on request for high-volume senders — contact Kit support. Requires warmup.
- **Double opt-in**: Enabled by default. Good for deliverability (reduces bounces and spam complaints) but reduces opt-in conversion by 10–20%. Can be disabled per form.
- **Engagement scoring** (Pro plan only): Subscriber engagement scoring helps identify cold subscribers for suppression. Use to segment sends and protect sender reputation.
- **Deliverability reporting** (Pro plan only): Dashboard showing inbox placement and engagement metrics.
- **List hygiene**: Use engagement-based segments to exclude subscribers who haven't opened in 90+ days. Kit bills by subscriber count — cleaning lists reduces costs too.
- **Email templates**: Kit intentionally limits templates to 3 (Text-only, Classic, Modern) — text-forward emails tend to have better deliverability than image-heavy designs.
- **Best practice**: Authenticate domain immediately after account creation. Keep double opt-in enabled for best deliverability. Use engagement scoring (Pro) to identify and suppress cold subscribers. Segment broadcasts to engaged subscribers only.

### In GetResponse (domain auth + Perfect Timing)
- **Domain authentication**: Settings → Email Addresses → add and verify your sending domain. GetResponse generates SPF (include record) and DKIM (TXT/CNAME) records to add to DNS. DMARC setup recommended.
- **Dedicated IP**: Available on MAX/Enterprise plans only. Lower-tier plans use shared IPs — GetResponse manages shared IP reputation.
- **Perfect Timing**: AI-based per-subscriber send time optimization. Analyzes each contact's engagement history and delivers at their individually optimal time. Enable per-newsletter for better inbox placement and engagement.
- **Time Travel**: Send at a specific local time regardless of subscriber timezone — avoids sending at 3 AM for international lists.
- **List hygiene**: Use engagement-based segmentation to exclude contacts who haven't opened in 90+ days. GetResponse billing is based on peak subscriber count — clean lists reduce costs too.
- **Contact scoring for hygiene** (Marketer+): Use scoring rules to identify unengaged contacts. Create automation workflows that tag or remove contacts when engagement scores drop below threshold.
- **E-commerce bounce management**: Shopify/WooCommerce integrations sync customer data — keep contact lists fresh with real purchase and engagement data.
- **Transactional email separation**: Transactional email is MAX-only. For Starter/Marketer/Creator users, use a separate transactional provider (SendGrid, Postmark) to keep transactional and marketing on different infrastructure.
- **Best practice**: Authenticate domain immediately after account creation. Use Perfect Timing for all newsletters. Segment by engagement and stop sending to 90+-day inactive contacts. On MAX, request dedicated IP and warm it up over 4-6 weeks.

### In Snov.io (warmup + deliverability check)
- **Email Warmup**: Automated inbox warming with large warm-up pool. Freemail support (Gmail, Outlook). Starter plan gets 3 warmup slots; Pro S+ gets unlimited. Gradually increases sending volume to build sender reputation.
- **Email Deliverability Check**: Inbox placement monitoring — checks whether emails land in inbox, spam, or promotions. Reputation diagnostics for sending domains.
- **Done-for-You Email Setup**: SPF/DKIM/DMARC configuration service — Snov.io's team configures domain authentication for you.
- **Email Verifier**: 98% accuracy, 7-tier verification with SMTP checks. Bulk verification via API (up to 10 per request). Returns smtp_status, is_valid_format, is_disposable, is_webmail, is_gibberish.
- **No standalone blacklist monitoring**: Unlike ZeroBounce, Snov.io doesn't offer 24/7 blacklist monitoring or DMARC monitor as separate tools. Deliverability monitoring is part of the campaign sending workflow.
- **Integrations**: Warmup and deliverability features are built into the platform — no separate setup for campaigns sent from Snov.io.
- **Best practice**: Enable warmup on all mailboxes before launching campaigns. Use the deliverability check to monitor inbox placement. Verify all prospect emails with the built-in verifier before adding to campaigns to reduce bounces.

### In ZeroBounce (validation + deliverability suite)
- **Email Validation**: 99.6% accuracy, 30+ email status types — valid, invalid, catch-all, spam trap, abuse, disposable, do_not_mail. Real-time API (`GET /v2/validate`) or batch (`POST /v2/validatebatch`, up to 200 emails). Bulk via CSV upload (`POST /v2/sendfile` on `bulkapi.zerobounce.net`).
- **AI Email Scoring**: Catch-all email scoring on a 1-10 scale — predicts likelihood the recipient exists behind a catch-all domain. Helps decide whether to send to catch-all addresses.
- **Activity Data**: Shows when an inbox was last active (30, 60, 90, 180, 365, 365+ days). Use to segment lists by engagement recency before sending.
- **Inbox Placement Testing**: Test across 100+ email configurations. RFC-based testing, DNS checks, port verification, DMARC analysis. 1 free test/month.
- **Blacklist Monitoring**: 24/7 monitoring across 200+ blacklist providers. Domain and IP (IPv4/IPv6) reputation tracking. Automated alerts.
- **DMARC Monitor**: Multi-domain DMARC monitoring, domain verification, policy setup, suspicious activity alerts, automated reporting.
- **Email Warmup**: Domain and IP reputation building with automated engagement simulation (opens, clicks, forwards). For new domains and problematic reputation repair.
- **Integrations**: 60+ native integrations (HubSpot, Mailchimp, Salesforce, ActiveCampaign, etc.) + Zapier (2,000+ apps). Real-time API for signup form validation.
- **Compliance**: SOC 2 Type 2, ISO-27001, GDPR/HIPAA/CCPA compliant. US and EU API endpoints for data residency.
- **Pricing**: Free 100/mo, PAYG $39/2K credits (~$0.02/credit), ZeroBounce ONE $99/mo for 25K. Credits never expire.
- **Best practice**: Use ZeroBounce as a comprehensive deliverability stack — validate lists before sending, monitor blacklists and DMARC continuously, score catch-all addresses with AI, and warm up new domains. The Activity Data API is unique for identifying dormant addresses that will hurt engagement metrics.

### In Minelead (verification focus)
- **Email Verifier**: `GET /v1/validate?email={email}` — checks form validity, MX records, SMTP response, catch-all detection, and webmail identification. Returns quality score (25-100%) with success/catch-all status. 1 credit per verification.
- **Disposable Email Detector**: `GET /v1/detect-disposable?email={email}` — returns disposability score (0-5), format validity, spam assessment, and DNS record statuses. Catches temporary/throwaway addresses.
- **Bulk verification**: Upload CSV for batch email verification. Plan limits: Free/Starter (50 rows), Pro (100), Business (1,000), Enterprise (unlimited).
- **No sending infrastructure for cold outbound**: Minelead has a campaigns feature for Gmail-based sending, but it's not a dedicated deliverability tool. Use the verifier/disposable detector upstream before importing into your primary outbound tool.
- **Best practice**: Run prospect lists through Minelead's verifier before importing into outbound tools. Combine domain search (to discover emails) with verification (to validate them) in a single workflow. The disposable email detector is especially useful for cleaning inbound/form-submitted lists.

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

### In ZoomInfo (Engage)
- **Email sending** — Engage sends outbound emails through connected email accounts (Gmail, Outlook, Exchange). Standard email deliverability best practices apply.
- **Sending limits** — Engage respects email provider sending limits. Configure daily send limits per mailbox in Engage settings.
- **Verified data advantage** — ZoomInfo's enriched contacts include verified email addresses, reducing bounce rates. Use ZoomInfo-enriched lists rather than scraped or purchased lists for better deliverability.
- **Email warm-up** — Engage does not include built-in warm-up. Use a third-party warm-up tool (Instantly, Warmbox, Mailreach) before ramping up Engage send volume from a new mailbox.
- **Domain authentication** — configure SPF, DKIM, and DMARC for all sending domains. This is done at the DNS/email provider level, not in ZoomInfo.
- **Custom tracking domain** — set up a custom tracking domain for open/click tracking to avoid shared tracking domain reputation issues.

### In SendPulse (verification + domain auth + dedicated IP)
- **Built-in email verifier**: Validate addresses before sending. Single email — `POST /verifier` checks syntax, domain, MX records, and mailbox existence. Bulk — `POST /verifier/mailing_lists/{id}` verifies an entire mailing list in one call.
- **Free tier**: 100 email verifications per month on the free plan. Sufficient for small lists; upgrade for higher volume.
- **Bounce management**: Hard bounces are automatically suppressed — SendPulse removes invalid addresses from future sends without manual intervention.
- **Reputation monitoring**: Sender domain reputation is tracked in the dashboard. Monitor reputation scores to catch issues before they affect inbox placement.
- **Dedicated IP**: Available on paid plans. Recommended once you exceed ~50k sends/month so your reputation isn't shared with other senders.
- **SPF/DKIM setup**: Configure SPF and DKIM records via Account Settings → Domain Authentication. SendPulse provides the exact DNS records to add.
- **Spam score checker**: The email editor includes a built-in spam score check — run it before every send to catch content-level red flags (spammy words, broken HTML, missing unsubscribe link).
- **Best practice**: Verify your list with the bulk verifier endpoint before launching a campaign, set up SPF/DKIM on day one, and use the spam score checker on every email. Move to a dedicated IP once volume justifies it.

### In LeadMagic

- **Email Validation endpoint**: `POST /v1/people/email-validation` — real-time SMTP verification returning `valid`, `invalid`, or `unknown` status with catch-all domain detection (0.25 credits per validation).
- **Pre-send validation**: Validate your entire prospect list before sending outbound campaigns. At 0.25 credits per validation, 10,000 validations = 2,500 credits (~$25 on Essential plan).
- **Catch-all detection**: Identifies catch-all domains where all emails appear valid but may not reach real inboxes — flag these for extra caution or lower-priority sending.
- **API-first**: REST endpoint at api.leadmagic.io — integrate validation into your outbound pipeline or use via MCP server in Claude Code.
- **Best for**: Teams wanting cheap, API-accessible email validation to clean lists before sending. Complements dedicated deliverability tools like ZeroBounce and SafetyMails.

## In AiSDR

- Built-in email warmup: automated warmup for all connected email accounts — runs automatically, no manual configuration needed
- Warmup timeline: 30-60 days for new accounts before reaching full sending capacity. AiSDR claims to ramp 73% faster than manual warmup
- During warmup: AiSDR sends warm-up emails from your connected accounts and manages replies/engagement automatically to build sender reputation
- Domain authentication: SPF, DKIM, and DMARC records must be configured for your sending domain before connecting to AiSDR — verify these first using `/sales-deliverability`
- Sending volume controls: AiSDR manages daily send volume per account automatically — starts low during warmup, increases based on engagement and reputation signals
- Bounce verification: AiSDR verifies prospect emails before sending — contacts with invalid or high-risk addresses are filtered out to protect sender reputation
- Extra domains: $99/mo each — use multiple domains to distribute sending volume and reduce per-domain reputation risk
- No custom tracking domain documentation found — check with AiSDR support
- Monitoring: performance dashboard shows open rates, reply rates, bounce rates, and meeting bookings. No public API for programmatic monitoring.
- Key deliverability limitation: AiSDR controls the sending infrastructure end-to-end — you can't configure sending schedules, IP rotation, or per-step timing like you can in Smartlead or Lemlist

## In BrandJet

- Built-in email warmup included on all plans — unlimited warmup, runs automatically when mailboxes are connected
- Custom tracking domain setup available — configure to improve deliverability and brand consistency
- Sending limits managed per-mailbox — platform controls daily send volume to protect sender reputation
- Domain authentication (SPF/DKIM/DMARC) required before sending — BrandJet validates your DNS records during mailbox setup
- Lead verification: BrandJet's 700M+ database includes verification status — use verified leads only to reduce bounce rates
- Unified inbox tracks bounces, opens, and replies across all channels — use bounce data to clean lists proactively
- No public API for deliverability metrics — monitor via the BrandJet dashboard or push events via webhooks
- Starter plan: 1,000 verified leads/mo; Pro plan: 10,000 verified leads/mo — plan lead volume to match sending capacity

