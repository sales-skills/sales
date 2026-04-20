# Amplemarket Platform Reference

## Platform overview

Amplemarket is an AI-native all-in-one sales engagement platform that combines prospecting data (300M+ contacts), multichannel sequences (email, LinkedIn, phone, voice notes), intent signals, deliverability tools, and an AI copilot (Duo) into a single platform. Positioned as a replacement for the Apollo + Outreach + ZoomInfo stack. Target audience: mid-market to enterprise B2B sales teams (5-100+ reps). Founded in Portugal, HQ in San Francisco.

## Key modules

### Duo AI Sales Copilot
- AI agent that personalizes outreach at scale using prospect data, intent signals, and company context
- Generates email copy, LinkedIn messages, and call scripts tailored to each prospect
- Learns from engagement data to improve over time
- Available on all plans but quality improves with more data

### Searcher (B2B Database)
- 300M+ verified contacts, 70M+ updates weekly
- Advanced filters: industry (1000+ supported), department, job function, company size, funding stage, technologies, location
- Multi-step email verification (claimed <3% bounce rate on verified contacts)
- Phone number coverage varies (~12-60% depending on geography and seniority)
- Credit-based access: 0.5-1 email credit + 1 phone credit per reveal

### Multichannel Sequences
- Email, LinkedIn (connection requests, messages, InMail), phone, voice notes
- Conditional branching (if opened → do X, if no reply → do Y)
- A/B testing on email steps
- Sending schedules per timezone
- Unibox — unified inbox for managing all replies across channels
- Automated task creation for manual steps (calls, LinkedIn)

### Intent Signals
- Job change alerts (champions moving to new companies)
- Website visitor identification (requires tracking pixel)
- Funding events (Series A-E, acquisitions)
- Hiring signals (new SDR/AE postings = buying signal for sales tools)
- Competitive intelligence (prospects evaluating competitors)
- Social signals (LinkedIn engagement, Slack mentions)
- Custom Signals via webhook (`/custom_signals/{token}/entries`) — push any event data

### Deliverability Suite
- **Deliverability Booster** — AI-driven email warmup (2-4 week ramp recommended)
- **Domain Health Center** — SPF/DKIM/DMARC monitoring, reputation tracking, authentication checks
- **Inbox Placement Testing** — send test emails to see where they land (inbox, spam, promotions)
- **Spam Checker** — pre-send content analysis for spam triggers
- **Mailbox Rotation** — distribute volume across multiple mailboxes automatically
- **Mailbox Recommendation AI** — suggests which mailbox to use for each prospect based on deliverability history

### Analytics
- Sequence performance (open rates, reply rates, meeting booked rates)
- Rep activity dashboards
- A/B test results
- Deliverability metrics per domain/mailbox

## Pricing and limits

| Tier | Price | Users | Key features |
|---|---|---|---|
| Starter | $600/mo (annual) | 2 | Core sequences, Searcher, basic signals, email warmup |
| Growth | $2,000-5,000/mo (annual) | 5-15 | Duo AI, advanced signals, Unibox (add-on), more credits |
| Enterprise | Custom | 15+ | Dedicated CSM, custom integrations, SSO/SAML, API access |

- **All plans require annual commitment** — no monthly billing
- **Additional users**: ~$300-400/user/mo
- **Phone credit top-ups**: $0.50/credit
- **14-day free trial** available
- **Credit system**: Data access is credit-based. Email reveals cost 0.5-1 credit, phone reveals cost 1 credit. Credits reset monthly.

## Integrations

### Native CRM
- **Salesforce** — bi-directional API sync, field mapping for Leads/Contacts/Accounts, activity auto-logging
- **HubSpot** — bi-directional sync (every 3 hours), contact/company push-pull
- **Pipedrive** — bi-directional sync

### Automation
- **Zapier** — triggers and actions available
- **Custom Signals webhook** — push any external data into Amplemarket to trigger sequences

### Other
- LinkedIn Sales Navigator (recommended for social selling features)
- Salesfinity (power dialer integration)
- Polytomic (data pipeline)
- Albato (automation)

## Data model (API)

### Key objects
- **People** — contacts with email, phone, LinkedIn URL, company association
- **Companies** — org data with name, domain, LinkedIn URL, industry, headcount, funding, technologies, locations, revenue
- **Lead Lists** — collections of people for bulk operations
- **Sequences** — multichannel outreach workflows
- **Contacts** — people who've been contacted (different from People search results)
- **Calls** — logged calls with duration, transcription, recording, disposition
- **Tasks** — manual action items (calls to make, LinkedIn messages to send)
- **Mailboxes** — connected email accounts with daily limits

### Pagination
- Cursor-based: `page[size]`, `page[before]`, `page[after]`
- HAL-inspired `_links` object for navigation

### Errors
- Returned in `_errors` array with `code`, `title`, `detail`, `status`
- Common codes: `insufficient_credits`, `person_not_found`, `unauthorized`, `unsupported_value`, `missing_field`

## Workflow setup

### Setting up your first sequence

1. **Connect mailboxes** — Settings → Email → connect Gmail/Outlook accounts (minimum 2 recommended for rotation)
2. **Warm up domains** — enable Deliverability Booster, wait 2-4 weeks before high volume
3. **Build prospect list** — use Searcher with ICP filters, or upload CSV, or import from CRM
4. **Validate emails** — run the list through built-in validation before sequencing
5. **Create sequence** — choose channels (email + LinkedIn recommended), set timing, write copy (or let Duo generate)
6. **Set sending limits** — start at 50/day per mailbox, scale gradually (never exceed 400/day total per mailbox)
7. **Launch and monitor** — check Domain Health Center daily for first 2 weeks

### Setting up intent signals

1. **Install website pixel** — Settings → Signals → Website Visitors → copy tracking script
2. **Configure job change alerts** — mark existing contacts as "champions" to track moves
3. **Set up Custom Signals** — create a webhook token, push events from your product/website
4. **Build signal-triggered sequences** — create workflows that auto-add prospects to sequences based on signal type and strength

### CRM integration (Salesforce)

1. Settings → Integrations → Salesforce → Connect
2. Authorize OAuth flow
3. Configure field mapping for Leads, Contacts, and Accounts
4. Choose sync direction per field (Amplemarket → SF, SF → Amplemarket, or bi-directional)
5. Enable activity logging (emails sent, replies, meetings booked → Salesforce activities)
6. Test with a single contact before bulk sync

## Deep dives

### Deliverability best practices in Amplemarket

- **New domain setup**: Buy domain → set up SPF/DKIM/DMARC → enable Deliverability Booster → wait 3-4 weeks → run inbox placement test → start at 20/day → increase by 10/day per week
- **Mailbox rotation**: Connect 3-5 mailboxes per rep, Amplemarket auto-distributes
- **Monitoring**: Check Domain Health Center weekly. If deliverability score drops below 80%, pause sending immediately
- **Content rules**: No link-heavy emails (max 1 link), no images in first touch, keep under 150 words, personalize first line

### Enrichment credit optimization

- **Batch over individual**: Use `/people/enrichment-requests` (10K max) instead of individual `/people/find` calls
- **Phone credits are expensive**: Only reveal phone numbers for high-intent, high-value prospects
- **Email-only enrichment**: Costs 0.5-1 credit. Phone adds 1 credit. Plan accordingly
- **Validation before enrichment**: If you already have emails, validate first ($0 credits) before paying for re-enrichment
- **International contacts**: Expect lower accuracy. Budget for 10-20% higher bounce rates on non-US data
