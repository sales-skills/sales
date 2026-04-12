# Ghost Platform Reference

## Platform overview

Ghost is an open-source publishing platform built for independent creators, journalists, and publishers who want to own their audience and revenue. Founded by John O'Nolan in 2013, Ghost combines a modern content editor, native email newsletters, and Stripe-powered paid memberships in a single platform — with 0% transaction fees (just Stripe's ~2.9% + $0.30).

Ghost can be self-hosted for free or used via Ghost(Pro) managed hosting starting at $15/mo. The platform powers thousands of publications including major newsrooms and creator businesses.

## Key modules

### Content Editor
- Rich editor with 30+ content cards (images, galleries, video, audio, code blocks, bookmarks, callouts, toggles, header cards, buttons, email-only cards)
- Markdown support with keyboard shortcuts
- Email-only content: publish to newsletter without creating a web post
- Scheduling: set future publish dates
- Post visibility: public, members-only, paid-only, or specific-tier-only
- Public preview divider: control how much content appears before the paywall
- Card visibility controls: show/hide specific cards based on member status (free, paid, specific tier) or delivery channel (web, email)

### Email Newsletters
- Native newsletter sending (no external ESP required on Ghost(Pro))
- Self-hosted requires Mailgun integration for bulk sends
- Multiple newsletters per publication (Publisher plan: 3, Business: 10, Custom: unlimited)
- Audience segmentation: by newsletter subscription, access level, labels
- Customizable email template: header image, colors, typography
- Newsletter analytics: open rate, click rate, feedback (positive/negative reactions)
- Email-only posts: send to inbox without publishing to web

### Memberships & Subscriptions
- Built-in Stripe integration — 0% Ghost fee (just Stripe processing)
- Membership tiers: free + up to 10 paid tiers (Business plan)
- Pricing: monthly, yearly, or both per tier
- Content gating: paywall with public preview
- Offers: percentage or fixed-amount discounts with unique URLs
- Complimentary subscriptions: grant free access to paid tiers
- Member management: import/export, labels, activity log, email preferences
- Portal: customizable signup/login widget embedded on your site

### Themes & Design
- Handlebars templating engine
- 20+ official themes in marketplace
- Custom themes: upload ZIP in Ghost Admin or develop with Handlebars
- Theme settings: custom colors, fonts, layouts configurable in Ghost Admin
- GScan: theme validation tool (checks compatibility)
- Routes: custom URL structures via routes.yaml

### Integrations
- **Native**: Stripe (payments), Mailgun (bulk email)
- **Zapier**: Official integration — triggers: new member, member updated, member deleted, post published, page published
- **40+ integrations**: Slack, Discord, Google Analytics, Buffer, Discourse, Spotify, social media platforms
- **Custom integrations**: Create via Ghost Admin → Integrations → Add custom integration (generates Content API key + Admin API key)
- **Webhooks**: Configurable per integration — trigger on member/post/page events

### Analytics
- Built-in dashboard: total members, MRR, member growth over time
- Newsletter analytics per post: opens, clicks, feedback
- Post analytics: views (web), reading time, source attribution
- Member analytics: signup source, engagement history, subscription status

## Pricing and limits (Ghost(Pro))

| Feature | Starter ($15/mo) | Publisher ($29/mo) | Business ($199/mo) | Custom |
|---|---|---|---|---|
| Staff users | 1 | 3 | 15 | Unlimited |
| Members | 1,000 | 1,000 | 10,000 | Unlimited |
| Newsletters | 1 | 3 | 10 | Unlimited |
| Paid subscriptions | **No** | Yes | Yes | Yes |
| Premium tiers | — | 1 | 10 | Unlimited |
| Custom themes | No | Yes | Yes | Yes |
| File upload limit | 5 MB | 100 MB | 250 MB | 1 GB |
| Zapier integration | No | Yes | Yes | Yes |
| Custom SSL | No | No | +$50/mo | Included |
| Priority support | No | No | Yes | Yes |
| Dedicated IP | No | No | No | Yes |

*Prices shown are annual billing. Monthly billing is higher. All plans include: SSL, CDN, automated backups, device verification.*

**Self-hosted**: Free (open source, MIT license). You pay for hosting ($5-20/mo VPS) + Mailgun ($15-35/mo for newsletters). Full feature parity with Ghost(Pro) Business tier — no plan-gated features.

## Integrations

### Stripe (Payments)
- Connect via Ghost Admin → Settings → Membership → Connect to Stripe
- Test mode available for development
- Handles subscription billing, upgrades, downgrades, cancellations
- Webhook sync: Stripe events update Ghost member status automatically
- Supports coupon codes via Offers

### Mailgun (Email Delivery)
- Required for self-hosted newsletter sending
- Ghost(Pro) handles email delivery natively (Mailgun managed by Ghost)
- Setup: Ghost Admin → Settings → Email newsletter → Mailgun configuration
- Required fields: Mailgun domain, Mailgun API key, Mailgun base URL (US or EU)
- Free tier: 100 emails/day (insufficient for most newsletters)
- Recommended: Mailgun Foundation plan ($35/mo for 50K emails) or Flex ($0.80/1K emails after first 1K free)

### Zapier
- Official Ghost + Zapier integration (requires Publisher plan on Ghost(Pro))
- Triggers: New Member, Member Updated, Member Deleted, Post Published, Page Published
- Actions: Create Member
- Common Zaps: sync members to Mailchimp/ActiveCampaign, post to Slack on publish, add to Google Sheet

## Data model (API)

### Content API (read-only, key-based auth)
- **Posts**: id, title, slug, html, excerpt, feature_image, published_at, tags, authors, tiers (visibility)
- **Pages**: same structure as posts
- **Authors**: id, name, slug, profile_image, bio, url
- **Tags**: id, name, slug, description, feature_image
- **Tiers**: id, name, slug, monthly_price, yearly_price, currency, active
- **Settings**: site title, description, logo, navigation, timezone, locale

Base URL: `https://{domain}/ghost/api/content/`
Auth: `?key={content_api_key}` query parameter
All endpoints support: `include`, `fields`, `filter`, `limit`, `page`, `order`

### Admin API (JWT or Staff Token auth)
- **Posts**: CRUD + copy, supports mobiledoc/lexical format
- **Pages**: CRUD + copy
- **Tags**: CRUD
- **Tiers**: Browse, Read, Edit, Add
- **Newsletters**: Browse, Read, Edit, Add
- **Offers**: Browse, Read, Edit, Add
- **Members**: Browse, Read, Edit, Add (includes subscription data, labels, email preferences)
- **Users**: Browse, Read only
- **Images**: Upload
- **Themes**: Upload, Activate
- **Webhooks**: CRUD

Base URL: `https://{domain}/ghost/api/admin/`
Auth: JWT (from Admin API key) or Staff Access Token
JWT: HS256, 5-min expiry, audience `/admin/`

### JavaScript SDK
- `@tryghost/content-api` — Content API client
- `@tryghost/admin-api` — Admin API client

## Workflow setup

### Setting up a paid newsletter from scratch
1. Create Ghost site (Ghost(Pro) Publisher plan or self-hosted)
2. Connect Stripe: Settings → Membership → Connect to Stripe
3. Configure tiers: Settings → Membership → Customize Portal → set monthly/yearly prices
4. Configure Mailgun (self-hosted only): Settings → Email newsletter → Mailgun settings
5. Write first post, use the public preview divider to create a paywall
6. Set post visibility to "Paid members only" or specific tier
7. Publish — post goes to web + email newsletter simultaneously
8. Share portal signup link or embed signup form on external sites

### Migrating from Substack
1. Export from Substack: Settings → Export (CSV of subscribers + ZIP of posts)
2. Import posts: Ghost Admin → Settings → Migration → Substack
3. Import members: Ghost Admin → Members → Import (CSV)
4. If paid subscribers: migrate Stripe subscriptions using Ghost's Stripe migration tool
5. Set up URL redirects: Substack uses `/p/slug`, Ghost uses `/slug/` — configure redirects.yaml
6. Update DNS: point custom domain to Ghost
7. Test email sends to a small segment before full newsletter
8. Disable Substack custom email headers BEFORE migrating to avoid confusing paid subscribers

### Migrating from WordPress
1. Export from WordPress: Tools → Export (WordPress XML)
2. Import: Ghost Admin → Settings → Migration → WordPress
3. Review imported content for formatting issues (shortcodes won't convert)
4. Import subscribers separately via CSV
5. Set up URL redirects for changed permalink structure
6. Re-upload media if not migrated automatically

## Deep dives

### Mailgun configuration (self-hosted)
1. Create Mailgun account at mailgun.com
2. Add and verify your sending domain (e.g., mg.yourdomain.com)
3. Add DNS records: SPF (TXT), DKIM (TXT), CNAME (for tracking)
4. In Ghost config: set `mail.transport` to "SMTP" or use Mailgun API
5. In Ghost Admin: Settings → Email newsletter → enter Mailgun domain, API key, and base URL
6. Send a test email to verify delivery
7. Monitor: Mailgun dashboard shows delivery, bounces, complaints, opens, clicks

### Theme development
- Ghost themes use Handlebars templating (`.hbs` files)
- Key template files: `default.hbs` (layout), `index.hbs` (homepage), `post.hbs` (single post), `page.hbs` (pages), `tag.hbs` (tag archives), `author.hbs` (author pages)
- Custom helpers: `{{#foreach}}`, `{{#is}}`, `{{content}}`, `{{img_url}}`, `{{date}}`, etc.
- Custom settings: define in `package.json` under `config.custom` — editable in Ghost Admin
- Validate theme: `npx gscan /path/to/theme` before uploading
- Development: use `ghost install local` for a local dev environment

### Content gating patterns
- **Full paywall**: Set post visibility to "Paid members only" — entire post hidden from non-paying members
- **Partial paywall**: Use the public preview divider (`---`) to show intro content publicly, rest behind paywall
- **Tier-specific**: Set visibility to a specific paid tier — other paid tiers don't see it
- **Email-only**: Content sent to inbox only, never appears on website
- **Card visibility**: Use card visibility controls to show/hide specific blocks based on member status or delivery channel
