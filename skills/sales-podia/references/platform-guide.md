# Podia Platform Reference

## Platform overview

Podia is an all-in-one platform for solo creators, coaches, consultants, and entrepreneurs to build a website, sell digital products, and run email marketing — all from one dashboard. Founded in 2014 by Spencer Fry, Podia serves 150,000+ customers in 167 countries who've collectively earned $500M+. The platform emphasizes simplicity over feature depth, targeting creators who want to launch fast without managing multiple tools.

**Positioning**: "The all-in-one platform for teams of one." Competes with Teachable (course-focused), Kajabi (premium all-in-one), Thinkific (zero transaction fees), Gumroad (digital marketplace), and Skool (community-first).

## Key modules

### Website Builder
- Professionally designed templates, customizable without code
- Blogging with SEO settings (title, description, URL slug)
- Landing pages for individual products or lead magnets
- Custom domain support
- Podia branding removed on paid plans

### Online Store — Digital Products
- **Product types**: Online courses, digital downloads (ebooks, templates, audio, video), coaching sessions, webinars, memberships, bundles
- **Pricing options**: One-time payment, payment plans, subscriptions, pay-what-you-want, free
- **Checkout**: Fast single-page checkout, supports Stripe (all plans) and PayPal (Shaker only)
- **Payment methods**: Credit/debit cards, Google Pay, Apple Pay, iDEAL, Stripe Link
- **Upsells**: Add upsells to any product — shown after purchase. Cannot apply coupons during upsell checkout. Free products cannot be upsells.
- **Pre-sales**: Sell products before they're finished, collect payments, deliver when ready
- **Bundles**: Combine multiple products into a single purchase at a bundle price
- **Coupons**: Percentage or fixed amount discounts. **Cannot be edited after creation** — must archive and recreate.
- **20+ currencies** supported
- **Tax support**: Collects tax info, but creator is responsible for remitting taxes

### Online Courses
- Two-level structure: **Sections** (modules) → **Lessons** within each section
- Lesson types: Video, text, audio, files, embeds
- **Drip content**: Schedule lessons to unlock on a set number of days after purchase
- **Quizzes**: Multiple-choice only — no essays, fill-in-the-blank, or advanced assessments
- **Completion tracking**: Students see progress; creator sees completion analytics
- **No course templates** — content must be structured manually (unlike Kajabi's Product Blueprints)
- **No certificates** built-in — requires third-party service for custom certificates
- **No mobile app** — students access via mobile browser only

### Memberships
- Recurring subscription products with gated access
- Can bundle courses, downloads, and community access into a membership
- **Tiers**: Create multiple membership levels with different content access
- **Free trials**: Configurable trial period before first charge
- Subscription management: pause, cancel, upgrade paths for members

### Coaching
- Sell coaching sessions as products
- No built-in scheduling — use Calendly or similar and link from the product page
- One-on-one or group coaching packages
- Can bundle with courses or memberships

### Webinars
- Built-in webinar hosting
- Registration pages with email collection
- Replay access for registrants
- Can be sold as paid products or used as lead magnets

### Email Marketing
- **Broadcasts**: One-time email sends to segments
- **Automations**: Triggered by events (purchase, signup, tag added)
- **Segmentation**: Filter by product purchased, tag, signup date, email engagement
- **Forms**: Embedded signup forms for lead capture
- **Subscriber limits**: Free tier = 100 subscribers. Paid tiers scale with subscriber count:
  - 500: $7-9/mo
  - 1,500: $13-17/mo
  - 5,000: $29-36/mo
  - 10,000: $50-63/mo
  - 25,000: $79-99/mo
  - 50,000: $159-199/mo
  - 100,000: $330-413/mo
  - 300,000+: Contact Podia
- **Warmup period**: New accounts limited to 24-hour gaps between broadcasts
- **Custom domain email**: Requires DNS setup (SPF, DKIM, DMARC)
- **Limitations**: Basic compared to dedicated ESPs. No advanced automation branching, no visual workflow builder, limited A/B testing.

### Community
- Built-in community forum attached to products or memberships
- Discussion threads with text, images, links
- **Discord integration**: Auto-assign Discord roles on product purchase, auto-remove on cancellation (though removal can be unreliable)
- Can be free-standing or bundled with paid products

### Affiliate Marketing (Shaker only)
- Built-in affiliate program for your products
- Set commission rates per product (percentage or fixed)
- Affiliate dashboard with tracking links
- Automatic payout tracking
- **Shaker plan required** — not available on Mover
- For more sophisticated affiliate programs, integrate with Rewardful via Podia's Stripe connection

## Pricing and limits

| Feature | Mover ($39/mo / $33 yearly) | Shaker ($89/mo / $75 yearly) |
|---|---|---|
| Transaction fee | 5% | 0% |
| Products | Unlimited | Unlimited |
| Website | Yes | Yes |
| Custom domain | Yes | Yes |
| Email marketing | Yes (free 100 subs) | Yes (free 100 subs) |
| Blogging | Yes | Yes |
| PayPal | No | Yes |
| Affiliate marketing | No | Yes |
| Zapier actions | No (triggers only) | Yes |
| Product migrations | 20 products | 30 products |
| Support | 7-day | 7-day |

**30-day free trial** with full feature access on both plans.

**Break-even calculator**: Shaker is $50/mo more than Mover. At 5% fees, Shaker saves money when monthly revenue exceeds $1,000 ($1,000 × 5% = $50). Below $1,000/mo, Mover is cheaper despite the fee.

**Payment processing**: All plans pay standard Stripe fees (2.9% + $0.30 per transaction) separate from Podia's platform fees.

## Integrations

### Native integrations
- **Discord**: Auto-assign/remove roles based on product access
- **Stripe**: Payment processing (required)
- **PayPal**: Payment processing (Shaker only)

### Email marketing platform sync
Podia syncs subscribers/tags with:
- Mailchimp
- MailerLite
- Flodesk
- Kit (ConvertKit)
- ActiveCampaign
- GetResponse
- Drip
- AWeber

### Zapier
- **Triggers** (Mover + Shaker): New sale, new subscriber, community member cancels, tag added, blog post published
- **Actions** (Shaker only): Create subscriber, add tag, enroll in product
- No native webhooks — Zapier is the only automation path

### Analytics
- Built-in sales analytics, email engagement metrics, course completion tracking
- No native Google Analytics integration — add tracking code via custom code injection
- No native Facebook Pixel — add via custom code

## Workflow setup

### Setting up your first course
1. Create product → choose "Online course" type
2. Add sections (modules) — these are the top-level containers
3. Add lessons within each section — upload video, write text, attach files
4. Set pricing (one-time, payment plan, or subscription)
5. Configure drip schedule if desired (days after purchase)
6. Add an upsell (e.g., coaching add-on or premium bundle)
7. Customize the sales page — add testimonials, FAQs, curriculum preview
8. Set up post-purchase email automation (welcome + getting started)
9. Publish and share the sales page URL

### Setting up a membership
1. Create product → choose "Membership" type
2. Set subscription pricing (monthly, annual, or both)
3. Optionally configure a free trial period
4. Add content: link existing courses, downloads, or community access
5. Create tiered memberships by making separate products with different content bundles
6. Set up onboarding email sequence for new members
7. Configure cancellation flow and win-back emails

### Setting up affiliate marketing (Shaker)
1. Go to Settings → Affiliate Marketing
2. Enable the affiliate program
3. Set default commission rate (percentage or fixed amount per sale)
4. Share the affiliate signup link with potential affiliates
5. Affiliates get unique tracking links and a dashboard showing clicks, sales, and commissions
6. Track payouts manually — Podia tracks commissions but doesn't auto-pay affiliates

### Email marketing setup
1. Go to Email → Settings
2. Set your sender name and reply-to address
3. Configure custom domain (SPF, DKIM, DMARC records)
4. Create segments based on products, tags, or signup source
5. Build automations triggered by purchase, signup, or tag events
6. Start with broadcasts to test engagement before building complex automations
7. Monitor deliverability in Email → Analytics

## Podia's affiliate program (for promoting Podia itself)
- **Commission**: 20% recurring for 12 months
- **Signup**: https://www.podia.com/affiliates
- **Payout**: PayPal or direct deposit, 5th of month, 2-month delay
- **Cookie**: Not publicly disclosed
- **Rules**: No self-referrals
- **Refer-a-Creator**: Separate program for existing customers — account credit rewards
