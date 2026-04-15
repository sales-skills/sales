# Beehiiv Platform Reference

## Platform overview

Beehiiv is an all-in-one newsletter platform built for growth, targeting independent creators, media companies, and publishers. Founded in 2021 by Tyler Denk (ex-Morning Brew), it differentiates from Substack with built-in growth tools (Boosts, referral programs, recommendations), a native ad network, 0% take rate on paid subscriptions, and more control over design and analytics. 135,000+ publishers, 400M+ unique monthly readers.

## Key modules

### Newsletter editor
- Drag-and-drop editor with pre-built templates
- AI-powered writing and content generation tools
- HTML and custom code blocks
- Content scheduling with timezone support
- A/B testing on subject lines and content
- Audio newsletter support (Max plan)
- RSS-to-send for automated content distribution (Max plan)
- Content tags for organization

### Website builder
- Custom websites with SEO optimization
- AI website designer
- Landing pages for subscriber acquisition
- Link-in-Bio pages
- Custom domains (all plans including free)
- Dynamic content targeting (Max plan)

### Audience growth tools
- **Boosts**: Marketplace where other newsletters promote yours for $1-$3/subscriber. Scale plan required.
- **Referral program**: Built-in milestone-based system (like Morning Brew's). Subscribers share a unique link, earn rewards at milestones. Scale plan required.
- **Recommendations**: Suggest other newsletters after opt-in (free mutual promotion). Available on all plans.
- **Subscribe forms and pop-ups**: Embeddable forms for any website.
- **Magic links**: Passwordless subscriber verification.
- **Verified clicks**: Track real engagement vs bot clicks.

### Monetization
- **Ad Network**: Beehiiv matches sponsors to your newsletter automatically. You approve/reject each ad. Revenue depends on list size, niche, and engagement. Scale plan required.
- **Paid subscriptions**: Premium tiers with paywall toggle per post. 0% beehiiv take rate (only Stripe fees ~2.9% + $0.30). Scale plan required.
- **Sponsorship storefront**: Self-serve sponsor booking page for direct deals. Max plan required.
- **Digital products**: Sell digital downloads to subscribers. Scale plan required.
- **Boosts (revenue side)**: Earn $1-$3 per subscriber when you promote other newsletters. Scale plan required.

### Email automations
- Triggered email flows based on subscriber events
- Segmentation by tags, engagement, custom fields, UTM parameters
- Surveys and polls for data collection (Scale plan)
- **Limitation**: Automations can only look back 30 days — can't trigger based on activity older than 30 days
- Available on Scale plan and above

### Analytics
- Campaign analytics (opens, clicks, unsubscribes) — all plans
- Advanced website analytics — Scale plan
- Subscriber engagement metrics
- A/B testing results
- Verified clicks (filters bot opens/clicks)
- Referral program analytics

### Podcasts
- Podcast hosting and distribution
- Audio newsletter creation (Max plan)

## Pricing and limits

| Feature | Launch (Free) | Scale ($43/mo) | Max ($96/mo) | Enterprise (Custom) |
|---|---|---|---|---|
| Subscribers | 2,500 | 100,000 | 100,000 | 100K+ |
| Email sends | Unlimited | Unlimited | Unlimited | Unlimited |
| Publications | 1 | 3 | 10 | Custom |
| Custom domain | ✓ | ✓ | ✓ | ✓ |
| API access | ✓ | ✓ | ✓ | ✓ |
| Recommendations | ✓ | ✓ | ✓ | ✓ |
| Ad Network | — | ✓ | ✓ | ✓ |
| Boosts | — | ✓ | ✓ | ✓ |
| Paid subscriptions | — | ✓ | ✓ | ✓ |
| Digital products | — | ✓ | ✓ | ✓ |
| Automations | — | ✓ | ✓ | ✓ |
| Webhooks | — | ✓ | ✓ | ✓ |
| Surveys & polls | — | ✓ | ✓ | ✓ |
| Teams | — | 3 seats | Unlimited | Unlimited |
| Human support | — | ✓ | Priority | VIP |
| Remove branding | — | — | ✓ | ✓ |
| Sponsorship storefront | — | — | ✓ | ✓ |
| Audio newsletters | — | — | ✓ | ✓ |
| RSS to send | — | — | ✓ | ✓ |
| Dynamic content | — | — | ✓ | ✓ |
| Getty images | — | — | ✓ | ✓ |
| Dedicated IP | — | — | — | ✓ |
| Send API | — | — | — | ✓ |
| SSO | — | — | — | ✓ |

**Subscriber-based pricing**: Scale and Max prices increase as subscriber count grows (tiered pricing within each plan). The base prices above are for the starting subscriber tier. At 100K subscribers, you must upgrade to Enterprise.

**Annual pricing** (saves ~12%): Scale $517/yr ($43/mo), Max $1,151/yr ($96/mo).

## Integrations

**Native**:
- Stripe (payments for paid subscriptions)
- Zapier (triggers: new subscriber, post sent, survey response, subscription upgrade/downgrade)
- Make (custom webhook module)

**API**: REST API v2 at `https://api.beehiiv.com/v2`. Bearer token auth. Available on all plans (except Send API which is Enterprise-only).

**Webhooks** (Scale+): Real-time notifications for subscription events (created, confirmed, deleted, upgraded, downgraded, paused, resumed), post events (sent, updated, scheduled), survey responses, and newsletter list subscription events.

**TypeScript SDK**: Official SDK at `github.com/beehiiv/typescript-sdk`.

## Data model

Key objects:
- **Publication**: Top-level container. Has subscribers, posts, automations, segments.
- **Subscription**: A subscriber's relationship to a publication. Has email, status (active/inactive/pending/validating/invalid), tier (free/premium), custom fields, UTM tracking, referral code.
- **Post**: Newsletter content. Has title, subtitle, blocks (structured content) or body_content (HTML), status, scheduling, recipients targeting, email/web/SEO settings.
- **Segment**: Filtered subscriber group based on tags, engagement, custom fields.
- **Automation**: Triggered email flow based on subscriber events.
- **Email Blast**: Sent email campaign with delivery/engagement stats.
- **Referral Program**: Subscriber referral tracking with milestone rewards.
- **Webhook**: Real-time event notification endpoint.

## Workflow setup

### Setting up paid subscriptions
1. Connect Stripe: Settings > Payments > Connect Stripe
2. Create premium tier: Settings > Subscription > Add tier (name, price, billing period)
3. Create premium content: New post > toggle paywall break in content
4. Announce to free subscribers: Send a post explaining the premium tier and what's behind the paywall
5. Track: Analytics > Revenue dashboard

### Setting up the referral program
1. Enable: Settings > Referral Program > Enable
2. Set milestones: Define reward tiers (e.g., 1 referral = exclusive content, 5 = merch, 10 = premium access)
3. Customize sharing: Edit the referral widget that appears in emails and on your website
4. Monitor: Analytics > Referral Program for top referrers and conversion rates

### Setting up the Ad Network
1. Requirements: Scale plan, 1,000+ subscribers, regular publishing cadence
2. Enable: Settings > Monetization > Ad Network
3. Review ads: Each ad placement is shown to you for approval before publishing
4. Track: Analytics > Ad Revenue for CPM, impressions, and earnings

## Deep dives

### Deliverability on shared infrastructure
Beehiiv sends from shared IP pools. This means your deliverability is partially affected by other senders on the platform. Mitigation:
- Set up a custom sending domain (available on all plans)
- Configure SPF, DKIM, and DMARC for your custom domain
- Maintain high engagement (clean inactive subscribers regularly)
- Use verified clicks to filter bot engagement from metrics
- Enterprise plan offers dedicated IP addresses for full control

### Migration from other platforms
Beehiiv supports importing subscribers and content from most platforms:
- **Substack**: Direct import tool (subscribers + content)
- **Mailchimp**: CSV export/import
- **Kit (ConvertKit)**: CSV export/import
- **Ghost**: CSV export/import + content migration

Key differences when migrating:
- beehiiv's automation is more limited than Kit/ActiveCampaign (30-day lookback)
- beehiiv's 0% take rate on paid subs beats Substack's 10%
- beehiiv has native ad network and Boosts that Substack/Ghost/Kit lack
- beehiiv branding removal requires Max plan ($96/mo)

### Partner Program (affiliate)
- 50% commission for 12 months on referred customers
- Available to anyone on an active beehiiv plan
- 60-day cookie window
- 30-day provisioning period after referral upgrades to paid
- Access via Partner Dashboard in top navbar
