# Groove.cm Platform Guide

## GroovePages — Websites & Landing Pages

- Drag-and-drop page builder with mobile optimization
- SEO settings (meta titles, descriptions, OG tags)
- Custom domains and SSL
- Pre-built templates across niches
- Device-specific element visibility (show/hide on mobile vs desktop)
- Custom CSS and JavaScript injection
- Blog integration

**Key settings**: Page settings > SEO, Domain settings > Custom domain, Global styles > Fonts and colors

## GrooveFunnels — Sales Funnels

- Multi-step funnel builder with drag-and-drop
- Upsell/downsell pages with one-click purchase
- Order bump configuration on checkout pages
- A/B split testing for funnel pages
- Funnel analytics (conversion rates per step)
- Funnel templates by use case (webinar, product launch, lead magnet, tripwire)

**Key concepts**: Funnel steps (opt-in → sales page → checkout → upsell → thank you), conversion tracking between steps

## GrooveSell — Product Sales & Checkout

- Digital and physical product management
- Flexible pricing: one-time, subscription, payment plan, free, pay-what-you-want
- Checkout page customization
- Order bumps (additional offer on checkout page)
- Upsells and downsells (post-purchase offers)
- Coupon and discount codes
- Tax configuration
- Zero platform transaction fees (payment processor fees still apply)
- Affiliate tracking integration
- Webhooks for sales events: Sale, Refund, Failed Rebill, Cancellation

**Payment processors**: Stripe, PayPal, NMI, Authorize.net, Braintree

## GrooveMail — Email Marketing & Automation

- Email broadcasts (one-time sends to segments)
- Autoresponder sequences (time-based drip campaigns)
- Behavior-based automation (triggers: purchase, refund, form fill, abandoned cart, page visit, link click)
- Advanced segmentation (tags, email opens, link clicks, purchase history)
- Drag-and-drop email builder with templates
- SMS and voice broadcast messaging
- Form builder with 100+ templates
- Spam checker and deliverability tools
- Contact import/export

**Sending limits by plan** (as of March 2026 — verify current pricing):

| Plan | Contacts | Emails/month | Price |
|------|----------|-------------|-------|
| Free | 500 | 1,000–15,000 | $0 |
| Creator | 5,000 | 50,000 | $149/mo |
| Pro | 30,000 | Unlimited | $199/mo |
| Premium | 50,000 | Unlimited | $299/mo |

## GrooveAffiliate — Affiliate Program Management

- Affiliate registration and approval workflows
- Custom commission structures (percentage or fixed)
- Multi-tier commissions (affiliates earn on sub-affiliate sales)
- Cookie duration configuration
- Affiliate dashboard with performance metrics
- Payment tracking and payout management
- Promotional asset distribution (banners, swipe copy, links)
- Integration with GrooveSell (automatic tracking on all products)

## GrooveMember — Membership Sites & Courses

- Course builder with modules and lessons
- Drip content scheduling (release lessons over time)
- Multiple access levels (free, paid, VIP)
- Student progress tracking
- Quizzes and completion certificates
- Custom branding and domains
- Integration with GrooveSell for access control (purchase → auto-enroll)

## GrooveVideo — Video Hosting

- Video hosting with encoding
- HD and widescreen support
- Bulk upload
- Video analytics (plays, watch time, drop-off)
- Embeddable player with custom branding
- Storage limits by plan (100 GB on Pro)

## GrooveWebinar — Webinar Hosting

- Live webinars with attendee interaction
- Automated/evergreen webinars (pre-recorded, scheduled)
- Registration page builder
- Attendee management and reminders
- Screen sharing and presentation mode
- Chat and Q&A
- Integration with GrooveMail for follow-up sequences

## GrooveBlog — Blogging

- Blog creation with custom domains
- Unlimited posts
- SEO optimization per post
- Categories and tags
- Social sharing
- Integration with GroovePages for design consistency

## GrooveKart / GrooveStore — E-commerce

- Product catalog management
- Shopping cart and checkout
- Inventory tracking
- Shipping configuration
- Integration with GrooveSell for digital products

## GrooveProof — Social Proof

- Recent purchase notifications
- Visitor count displays
- Signup notifications
- Customizable notification appearance and timing

## Integrations

**Native**: All Groove apps are natively integrated with each other (GrooveSell → GrooveMail auto-sync, GrooveSell → GrooveAffiliate auto-tracking, GrooveSell → GrooveMember auto-enrollment).

**Zapier**: Groove.cm has a Zapier integration with triggers/actions for GrooveMail and GrooveSell. Connect to 8,000+ apps.

**Webhooks**: GrooveSell fires webhooks for: Sale, Refund, Failed Rebill, Cancellation. Configure via GrooveSell product settings.

**Payment processors**: Stripe, PayPal, NMI, Authorize.net, Braintree.

**Analytics**: Facebook Pixel, Google Analytics integration.

**No public REST API**: Groove.cm does not have a comprehensive public API. For custom integrations, use GrooveSell webhooks + Zapier.
