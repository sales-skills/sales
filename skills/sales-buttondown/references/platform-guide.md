# Buttondown Platform Reference

## Platform overview

Buttondown is a simple, privacy-first newsletter platform founded in 2017 by Justin Duke. It targets independent creators, developers, and writers who want a minimal tool with excellent API support and no platform fees on paid subscriptions (just Stripe's ~2.9% + $0.30). Buttondown is self-funded and independent — no VC, no growth-at-all-costs. It emphasizes doing less, better.

Key differentiators vs competitors:
- **API-first**: Every feature is available via REST API. Buttondown uses the same API internally to power its own UI.
- **Privacy-first**: No default tracking — analytics are opt-in. GDPR-compliant by design.
- **Markdown-native**: First-class Markdown editor (not bolted on).
- **No platform fee**: Paid subscriptions only charge Stripe's fee, not a percentage like Substack (10%) or Kit (0.6%).
- **Concierge migration**: Free, handled by Buttondown staff within one business day.

## Key modules

### Writing & publishing
- **Markdown editor**: Write in Markdown with live preview. Also supports rich text (WYSIWYG).
- **Scheduling**: Schedule emails for future delivery.
- **Email-to-send**: Send emails by emailing `newsletters@mg.buttondown.email`.
- **Hosted archives**: Public archive of past newsletters with optional paywall.
- **File attachments**: Attach files to emails (add-on: $9/mo).

### Subscriber management
- **Import/export**: CSV import with field mapping. Export anytime.
- **Tags**: Organize subscribers with tags for segmentation (add-on: $9/mo).
- **Segments**: Dynamic filtered groups based on tags, subscription status, metadata.
- **Custom metadata**: Store arbitrary key-value data on subscribers via API.
- **Subscriber states**: active, unactivated (pending double opt-in), unsubscribed, removed, spam-complained, hard-bounced.

### Paid subscriptions
- **Stripe integration**: Connect Stripe to accept payments. No Buttondown transaction fee.
- **Pricing models**: Fixed price, pay-what-you-want, free tier + paid tier.
- **Paywall toggle**: Per-email toggle to gate content behind paywall.
- **Subscriber types**: free, premium (paid), gifted.
- **Add-on cost**: $9/mo for paid subscriptions feature.

### Automations
- **Welcome sequences**: Automated emails sent to new subscribers on a schedule.
- **Tag-triggered flows**: Send emails when a tag is added/removed.
- **Surveys**: Collect subscriber feedback with built-in surveys (200% higher response rate than industry average, per Buttondown).
- **Add-on cost**: $29/mo for automations.

### RSS-to-email
- **Auto-send from RSS**: Automatically send newsletter when new RSS items appear.
- **Add-on cost**: $9/mo.

### Custom domains
- **Sending domain**: Send from your own domain (e.g., newsletter@yourdomain.com). Requires DNS setup (SPF/DKIM/DMARC).
- **Archive hosting**: Host your newsletter archive on your own domain. Add-on: $29/mo for custom domain archives.

### Analytics
- **Email performance**: Open rates, click rates, subscriber growth. Opt-in — not enabled by default.
- **Privacy-first**: No tracking pixels by default. Enable analytics only if you want it.
- **Add-on cost**: $9/mo for analytics.

### Comments & surveys
- **First-party comments**: Subscribers can comment on emails. Supports automation triggers (e.g., auto-tag commenters).
- **Surveys**: Inline surveys in emails with response tracking.
- **Add-on cost**: $9/mo for comments and surveys.

### Multiple newsletters
- **Separate newsletters**: Run multiple newsletters from one account. Each has its own subscriber list, archive, and settings.
- **Add-on cost**: $29/mo.

### Teams
- **Contributor accounts**: Unlimited contributors with permission controls (writer, editor, admin).
- **Add-on cost**: $79/mo.

### Whitelabeling
- **Remove Buttondown branding**: Remove all Buttondown branding from emails and archives.
- **Add-on cost**: $79/mo.

## Pricing and limits

| Plan | Price | Subscriber limit | Notes |
|---|---|---|---|
| Free | $0/mo | 100 | All base features, API access |
| Basic | $9/mo | 1,000 | |
| Standard | $29/mo | 5,000 | |
| Professional | $79/mo | 10,000 | |
| Advanced | $139/mo | 20,000 | |
| Enterprise | Custom | Unlimited | Custom pricing and support |

**Add-ons** (each costs extra per month):

| Add-on | Cost | What it unlocks |
|---|---|---|
| Tagging & segmentation | $9/mo | Tags, segments, filtered sends |
| Paid subscriptions | $9/mo | Stripe integration, paywalls, pricing tiers |
| Comments and surveys | $9/mo | First-party comment system, inline surveys |
| Analytics | $9/mo | Open/click tracking, subscriber growth charts |
| RSS-to-email | $9/mo | Auto-send from RSS feeds |
| Email attachments | $9/mo | Attach files to emails |
| Custom domain archives | $29/mo | Host archive on your domain |
| Multiple newsletters | $29/mo | Run multiple newsletters from one account |
| Automations | $29/mo | Welcome sequences, tag-triggered flows |
| Whitelabeling | $79/mo | Remove Buttondown branding |
| Teams | $79/mo | Contributor accounts with permissions |

**Sending limit**: Pricing assumes at most one email per day to your entire subscriber base. Higher frequency requires custom negotiation.

**Active subscribers only**: You only pay for subscribers actively receiving emails. Unsubscribed, bounced, and removed contacts don't count.

**Non-profit discount**: 501(c)(3) organizations get 50% off with proof of registration.

## Integrations

### Native integrations
- **Discord**: Post new emails to a Discord channel
- **Memberful**: Sync membership status with subscriber tags
- **YouTube**: Embed YouTube videos in emails
- **RSS**: Publish newsletter as RSS feed and consume RSS feeds

### Zapier
Buttondown has a native Zapier integration with:

**Triggers**: New subscriber, subscriber churn (paid), tag added/removed, new draft, survey response, email scheduled

**Actions**: Add tag, create email, remove tag

### Webhooks
Custom webhook endpoints for programmatic integrations. Events mirror Zapier triggers.

### API
Full REST API at `https://api.buttondown.com/v1/` — see `references/buttondown-api-reference.md` for details.

### CLI
Buttondown CLI tool for managing newsletters from the command line. Install from GitHub: `buttondown/cli`.

## Data model

| Object | Key fields | Notes |
|---|---|---|
| Email | id, subject, body, status, publish_date, email_type | Statuses: draft, scheduled, sent |
| Subscriber | id, email, tags[], metadata{}, subscriber_type, creation_date | Types: regular, premium, gifted, unactivated |
| Tag | id, name, subscriber_count | Used for segmentation |
| Automation | id, name, trigger, actions[] | Requires Automations add-on |
| Newsletter | id, name, description, api_key | For multi-newsletter accounts |

## Workflow setup

### Setting up a new newsletter
1. Sign up at buttondown.com/register
2. Configure newsletter name, description, and from address in Settings
3. (Optional) Set up custom sending domain: add SPF/DKIM DNS records per Settings → Domains
4. (Optional) Enable add-ons: Settings → Billing → Add-ons
5. Import subscribers: Subscribers → Import → upload CSV
6. Write first email: Emails → New → compose in Markdown or rich text
7. Send or schedule

### Setting up paid subscriptions
1. Enable Paid Subscriptions add-on ($9/mo): Settings → Billing → Add-ons
2. Connect Stripe: Settings → Paid Subscriptions → Connect Stripe
3. Set pricing: choose fixed price, pay-what-you-want, or tiered
4. Create a paywalled email: toggle the paywall switch when composing
5. Free subscribers see a truncated version with a subscribe CTA

### Setting up automations
1. Enable Automations add-on ($29/mo): Settings → Billing → Add-ons
2. Create a new automation: Automations → New
3. Choose trigger: new subscriber, tag added, survey response, etc.
4. Define email sequence with delays
5. Activate the automation

### Migrating from another platform
1. **Request concierge migration**: Email concierge@buttondown.com with your current platform and subscriber count
2. **Or self-serve**: Export CSV from old platform → Subscribers → Import → map fields
3. Set up domain authentication (SPF/DKIM) for your sending domain
4. Update any embedded forms or API integrations to point to Buttondown
5. Set up redirects from old archive URLs if applicable

## Deep dives

### API quick reference
- **Base URL**: `https://api.buttondown.com/v1/`
- **Auth**: `Authorization: Token {your_api_key}`
- **Context header** (multi-newsletter): `Buttondown-Context: {newsletter_name}`
- **API key permissions**: 8 categories (subscriber, email, sending, administrivia, automations, forms, styling, surveys), each configurable to write/read/none
- **Rate limits**: Generous, sufficient for most use cases
- **Available on all plans** including free

Key endpoints:
- `GET /v1/subscribers` — list subscribers
- `POST /v1/subscribers` — create subscriber
- `GET /v1/emails` — list emails
- `POST /v1/emails` — create/send email
- `GET /v1/tags` — list tags
- `POST /v1/tags` — create tag

See `references/buttondown-api-reference.md` for full endpoint documentation.

### Buttondown vs competitors

| Feature | Buttondown | Kit | Substack | Beehiiv | Ghost |
|---|---|---|---|---|---|
| **Free plan** | 100 subs | 10K subs | Unlimited | 2,500 subs | None (self-host free) |
| **Platform fee on paid subs** | 0% (Stripe only) | 0.6% + Stripe | 10% + Stripe | 0% (Scale plan) | 0% (Stripe only) |
| **Markdown editor** | Native | No | No | No | Yes |
| **API** | Full REST, all plans | REST v4, Creator+ | Limited | REST | Content + Admin APIs |
| **Automation** | Add-on ($29/mo) | Built-in (Creator+) | None | Built-in (Scale) | None |
| **Discovery network** | None | Creator Recs | Substack network | Boosts | None |
| **Analytics** | Opt-in add-on | Built-in | Built-in | Built-in | Built-in |
| **Custom domain** | Yes (sending + archive) | Yes (sending) | No | Yes (paid) | Yes |
| **Migration** | Free concierge | Self-serve | Self-serve | Self-serve | Self-serve |
| **Target user** | Devs, privacy-focused | Creators | Writers | Growth-focused | Publishers |

### GitHub resources
- **Org**: github.com/buttondown (22 public repos)
- **Bug tracker**: github.com/buttondown/bugs
- **CLI**: github.com/buttondown/cli
- **Themes**: github.com/buttondown/themes
- **Translations**: github.com/buttondown/translations
- **Discussions**: github.com/buttondown/discussions
