# ZeroBounce Platform Guide

## Email Validation
- **What it is**: Validate email addresses in bulk (CSV upload) or in real-time (API), detecting 30+ email status types including invalid, spam traps, disposable, catch-all, abuse, and more
- **Accuracy**: 99.6% across all validation checks
- **Modes**: Bulk list cleaning (upload CSV) and real-time single-email API validation
- **Bulk workflow**: Upload CSV → ZeroBounce processes the list → download results with per-email status and sub-status
- **Real-time workflow**: Send a GET or POST request per email → receive instant validation result
- **Batch validation**: Validate up to 200 emails in a single API call via `POST /v2/validatebatch`
- **Best practices**: Always validate before sending campaigns. Re-validate lists older than 3 months — email addresses decay at ~2-3% per month. Remove invalid, spam trap, abuse, and disposable addresses. Handle catch-all addresses with AI Scoring for better precision.

## Email Finder
- **What it is**: B2B email discovery — provide a first name, last name, and company domain, and ZeroBounce returns the corporate email address
- **Credit cost**: 20 credits per successful find
- **Auto-verified**: Found emails are automatically validated — no separate verification step needed
- **Best practices**: Budget 20 credits per lookup when planning purchases. Combine with email validation for lists that mix known and unknown addresses. Use for targeted prospecting when you know the person and company.

## Email Scoring (AI)
- **What it is**: AI-powered catch-all validation and engagement scoring — goes beyond traditional validation to score catch-all addresses on a 1-10 scale
- **Why it matters**: Catch-all domains accept all emails at the SMTP level, so traditional validation cannot confirm individual mailbox existence. AI Scoring uses behavioral analysis to predict whether a specific address on a catch-all domain is real and engaged.
- **Score range**: 1-10 engagement score, where higher scores indicate more likely engagement
- **Use case**: After bulk validation flags addresses as "catch-all", run AI Scoring on those addresses to decide which are safe to email
- **Best practices**: Score all catch-all results from bulk validation. Set a threshold (e.g., 7+) for inclusion in campaigns. Monitor bounce rates for scored addresses and adjust your threshold over time.

## Activity Data
- **What it is**: Subscriber engagement tracking — check whether an email address has been active (opened or clicked emails) within configurable time windows
- **Time windows**: 30, 60, 90, 180, 365+ days
- **What it returns**: Whether the email address has shown engagement activity within the specified window
- **Use case**: Identify dormant subscribers before re-engagement campaigns. Suppress inactive addresses to protect sender reputation.
- **Best practices**: Check activity data before re-engagement campaigns to avoid emailing addresses that have been completely inactive. Use 90-day activity windows for standard campaigns, 365-day for win-back sequences.

## Inbox Placement Testing
- **What it is**: Test whether your emails land in inbox or spam across 100+ email configurations, with RFC compliance, DNS, and port checks
- **What it tests**: Inbox vs. spam placement across major providers (Gmail, Outlook, Yahoo, etc.), SPF/DKIM/DMARC compliance, RFC header validation, DNS configuration, port accessibility
- **Use case**: Before launching a major campaign, run an inbox placement test to catch deliverability issues. After making DNS or authentication changes, verify they're working correctly.
- **Best practices**: Test before every major campaign launch. Test after any DNS, SPF, DKIM, or DMARC changes. Compare results across providers to identify provider-specific issues.

## Blacklist Monitoring
- **What it is**: 24/7 monitoring of your sending IPs and domains across 200+ blacklist providers, with alerts when you get listed
- **Coverage**: 200+ blacklist providers, supports both IPv4 and IPv6
- **Alerts**: Immediate notification when your IP or domain appears on a blacklist
- **Use case**: Continuous reputation monitoring for sending infrastructure. Early warning system for deliverability problems.
- **Best practices**: Monitor all sending IPs and domains, not just the primary one. Act immediately on blacklist alerts — some blacklists auto-expire but others require manual delisting. Cross-reference blacklist hits with recent sending activity to identify the cause.

## DMARC Monitor
- **What it is**: Multi-domain DMARC monitoring with policy setup guidance and suspicious activity alerts
- **What it does**: Monitors DMARC reports for your domains, identifies unauthorized senders, alerts on suspicious activity, helps you move from p=none to p=quarantine to p=reject
- **Use case**: Ensure no one is spoofing your domain. Gradually tighten DMARC policy without breaking legitimate email flows.
- **Best practices**: Start with p=none to monitor without affecting delivery. Review DMARC reports weekly to identify all legitimate senders before tightening policy. Set up monitoring for all sending domains, including subdomains.

## Email Warmup
- **What it is**: Automated domain and IP reputation building through simulated engagement — ZeroBounce sends and receives emails on your behalf to build positive sending signals
- **How it works**: Automated engagement simulation — emails are sent from your account, opened, replied to, and removed from spam if they land there
- **Use case**: New domains or IPs that need reputation before high-volume sending. Domains that have been dormant. Recovery after a deliverability incident.
- **Best practices**: Start warmup 2-4 weeks before planned campaign launches. Don't send high-volume campaigns during warmup — let the warmup build reputation first. Combine with inbox placement testing to verify progress.

## Validation Statuses

| Status | Meaning | Action |
|---|---|---|
| **Valid** | Email exists and is deliverable | Safe to send |
| **Invalid** | Email does not exist or is undeliverable | Remove immediately — sending will hard bounce |
| **Catch-All** | Domain accepts all addresses — cannot confirm specific mailbox | Use AI Scoring to evaluate; include high-scoring addresses with monitoring |
| **Spam Trap** | Known spam trap address maintained by blocklist providers | Remove immediately — sending to spam traps severely damages sender reputation |
| **Abuse** | Address that has a history of marking emails as spam | Remove — sending risks spam complaints that hurt reputation |
| **Disposable** | Throwaway email from temporary email services | Remove — these expire quickly and indicate low-intent signups |
| **Unknown** | Could not determine status (server timeout, temporary error) | Retry later or exclude from campaigns — do not treat as valid |
| **Do Not Mail** | Catch-all for addresses you should not email (role-based, disposable, spam trap, etc.) | Remove from sending lists |

## API Quick Reference

| Feature | Details |
|---|---|
| **Base URL** | `https://api.zerobounce.net/v2/` (default) |
| **Regional URLs** | `https://api-us.zerobounce.net/v2/` (US), `https://api-eu.zerobounce.net/v2/` (EU) |
| **Bulk URL** | `https://bulkapi.zerobounce.net/v2/` |
| **Auth** | `api_key` query parameter on all requests |
| **Rate limit** | 80,000 requests/hour on credit-consuming endpoints |
| **SDKs** | 13 official SDKs (Python, Node.js, PHP, Java, C#, Ruby, Go, and more) |
| **API version** | REST v2 |

## Key API Endpoints

| Endpoint | Method | What it does |
|---|---|---|
| `/v2/validate` | GET | Validate a single email address in real-time |
| `/v2/validatebatch` | POST | Validate up to 200 emails in a single request |
| `/v2/sendfile` | POST | Upload a CSV for bulk validation (async) |
| `/v2/filestatus` | GET | Check the status of a bulk validation job |
| `/v2/getfile` | GET | Download results of a completed bulk validation |
| `/v2/deletefile` | GET | Delete a previously uploaded file |
| `/v2/getcredits` | GET | Check remaining credit balance |
| `/v2/getusage` | GET | Get credit usage statistics |
| `/v2/activity` | GET | Check email activity data for an address |

## Integrations

ZeroBounce integrates with 60+ platforms:

| Integration | Type | What it does |
|---|---|---|
| **HubSpot** | CRM / Marketing | Native integration — verify contacts directly in HubSpot |
| **Salesforce** | CRM | Verify lead and contact emails in Salesforce |
| **Mailchimp** | ESP | Clean Mailchimp audience lists before campaigns |
| **ActiveCampaign** | Marketing automation | Verify ActiveCampaign contacts |
| **Constant Contact** | ESP | Verify subscriber lists |
| **SendGrid** | ESP | Validate emails before sending via SendGrid |
| **Mailgun** | ESP | Verify emails in Mailgun lists |
| **Brevo** | ESP | Clean Brevo contact lists |
| **Klaviyo** | ESP | Verify Klaviyo subscriber lists |
| **Zapier** | Automation | Connect ZeroBounce to 2,000+ apps |
| **WordPress** | CMS | Plugin for form validation |
| **Shopify** | E-commerce | Verify customer email lists |
| **Pipedrive** | CRM | Verify Pipedrive contact emails |
| **Zoho** | CRM | Verify Zoho CRM contacts |

## Pricing (as of March 2026 — verify current pricing)

| Plan | Price | Credits | Notes |
|---|---|---|---|
| **Free** | $0/mo | 100 validations/month | No credit card required |
| **Pay-As-You-Go** | From $39 | 2,000 credits | One-time purchase, credits do not expire |
| **ZeroBounce ONE** | $99/mo | 25,000 credits/month | Subscription — includes all platform features |
| **Enterprise** | Custom | 1M+ credits | Custom pricing for high-volume users |

**Credit economics**:
- Email validation: 1 credit = 1 email validated (bulk or real-time)
- Email Finder: 20 credits per successful find
- Activity Data: Credits consumed per activity check
- AI Scoring: Credits consumed per scored email

## Security & Compliance

| Certification | Scope |
|---|---|
| **SOC 2 Type 2** | Organizational security controls, audited annually |
| **ISO-27001** | Information security management system |
| **GDPR** | EU data protection compliance |
| **HIPAA** | Healthcare data protection compliance |
| **CCPA** | California consumer privacy compliance |
