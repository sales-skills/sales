# Woodpecker Platform Guide

## Cold email campaigns
- **Condition-based campaigns**: If/then branching based on prospect behavior (opened, clicked, replied) or data attributes — far more flexible than linear sequences
- **Up to 16 steps per campaign** — more than most competitors
- **A/B testing**: Up to 5 variants per step (subject lines, body copy, send times)
- **Auto-stop on reply**: Campaign automatically pauses sending to a prospect when a reply is detected
- **Personalization**: Custom fields and snippets for dynamic content
- **Manual tasks**: Insert non-automated action steps (e.g., call, LinkedIn visit) into campaign sequences

## Deliverability toolkit
- **Bounce Shield**: Prevents sending to risky addresses, protects sender reputation by pre-validating before each send
- **Adaptive Sending**: Automatically adjusts send volume based on provider limits and engagement signals — throttles down when signals are negative
- **ESP Matching**: Matches your sending patterns to what email providers expect, reducing spam flags
- **Domain audit**: Checks SPF, DKIM, DMARC configuration with specific fix suggestions
- **Spam checker**: Highlights spammy words, broken links, and authentication issues before sending — catch problems pre-launch
- **Deliverability monitor**: Ongoing monitoring of inbox placement and sender reputation

## Email warmup
- **Free built-in warmup** powered by Mailivery — included in all plans
- **AI-driven interactions**: Opens, replies, marks as important, removes from spam — mimics real engagement
- **Ramp schedule**: Starts with a few emails/day, gradually ramps to a max of 50/day
- **Free plan**: 4 warmup slots included at no cost
- **Additional slots**: Available as an add-on at EUR 5 per account
- **Best practice**: Run warmup for 2+ weeks before launching campaigns from a new mailbox

## Email verification
- **Free catch-all verification** powered by Bouncer
- **Real-time list cleaning** before sending — automatic validation when prospects are added to campaigns
- **Reduces bounce rate** and protects sender reputation
- No additional cost — included in all plans

## Inbox rotation
- **Automatic distribution** of sending across multiple connected email accounts
- Woodpecker rotates which account sends each email in a campaign
- **Unlimited email accounts** on all plans — no per-seat or per-mailbox charges
- Helps maintain per-account sending limits while increasing total daily volume

## Centralized inbox
- **Unified view** of all replies from all connected mailboxes in one place
- **Auto-categorization**: Interested, auto-replied, bounced, out-of-office — no manual sorting
- **Filters**: By campaign, status, or mailbox
- **Reply directly** from the centralized inbox without switching accounts

## LinkedIn automation
- **Add-on**: EUR 29/month per LinkedIn account
- **Automated actions**: Connection requests, messages, and profile visits
- **Multichannel sequences**: LinkedIn steps woven into email campaign steps
- **Condition-based**: e.g., if email not opened -> send LinkedIn connection request
- Requires a connected LinkedIn account

## Lead Finder
- **B2B database** with 1B+ leads
- **Search filters**: Company, title, industry, location
- **Data credits system**: 400 free credits included, additional credits from EUR 28 per 2,000 credits
- **Direct export**: Export leads directly into Woodpecker campaigns — no CSV intermediary needed

## Agency panel
- **Add-on**: EUR 27/month per active client
- **Multi-client management** from a single dashboard
- **Per-client isolation**: Separate campaigns, prospects, mailboxes per client — no data bleed
- **Agency API**: HQ key + `x-company-id` header for programmatic client management
- **Per-company API keys**: Create API keys scoped to individual clients, manage mailboxes and campaigns across clients

## Data model

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

## API quick reference
- **Base URL**: `https://api.woodpecker.co/rest`
- **Auth**: `x-api-key` header
- **Versions**: V1 (stable), V2 (under development)
- **Key endpoints**: Campaigns, Prospects, Mailboxes, LinkedIn accounts, Inbox, Reports, Users, Manual tasks, Blacklist, Webhooks
- **Agency API**: HQ key + `x-company-id` header for multi-client access
- **Rate limits**: 1 concurrent request, queue of 6 (15-second timeout), unlimited monthly calls, HTTP 429 on overflow
- **Add-on required**: API & integrations add-on (EUR 20/mo) or active trial
- **Full reference**: See `references/woodpecker-api-reference.md`
- **Developer contact**: developers@woodpecker.co

## Pricing (as of 2026, EUR — verify current pricing at woodpecker.co)

| Tier | Contacted prospects/mo | Price |
|------|------------------------|-------|
| Free | 500 | EUR 0 |
| Tier 1 | 500 | EUR 35/mo |
| Tier 2 | 2,000 | EUR 67/mo |
| Tier 3 | 4,000 | EUR 99/mo |
| Enterprise | Unlimited | Custom |

**Add-ons**: LinkedIn (EUR 29/acct), Agency (EUR 27/client), API & integrations (EUR 20), warmup slots (EUR 5/acct), servers (EUR 59/server), Lead Finder (from EUR 28/2K credits). Annual billing saves 33%.

## Integrations
- **HubSpot**: Native integration (requires API & integrations add-on)
- **Pipedrive**: Native integration
- **Salesforce**: Via Zapier
- **Zapier**: Full integration — triggers and actions
- **Clay, Persana AI**: Native connectors
- **Calendly**: Meeting booking integration
- **Google Sheets**: Prospect import/export
