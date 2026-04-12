# Kit Platform Guide

## Key terminology

| Kit term | Common equivalent |
|---|---|
| Broadcast | One-off email campaign |
| Sequence | Drip campaign / autoresponder |
| Visual Automation | Automation workflow |
| Tag | Contact label |
| Segment | Dynamic filtered list |
| Creator Profile | Bio link / micro-website |
| Creator Recommendations | Cross-promotion network |
| Commerce | Digital product storefront |
| Subscriber | Contact / lead |

## Data model

| Object | Key fields | Notes |
|---|---|---|
| Subscriber | email, first_name, state, tags[], custom_fields{}, created_at | States: active, inactive, bounced, complained, cancelled |
| Broadcast | subject, content, sent_at, stats{} | A/B test subject lines (Creator+), content (Pro) |
| Sequence | name, steps[], subscriber_count | Drip campaigns with timed delays |
| Visual Automation | name, triggers[], actions[], rules[] | Canvas-based workflow builder |
| Tag | name, subscriber_count | Manual or automation-applied |
| Segment | name, conditions[] | Dynamic — auto-updates as subscribers match |
| Form | name, type, subscriber_count | Inline, modal, slide-in, or sticky bar |
| Landing Page | name, url, template | Hosted on Kit or custom domain |
| Product | name, price, type | Digital download or subscription |
| Purchase | product_id, subscriber_id, amount | E-commerce tracking |

## Plans and feature gates

| Feature | Newsletter (Free) | Creator ($33/mo) | Pro ($66/mo) |
|---|---|---|---|
| Subscribers | Up to 10,000 | 1,000+ (scales) | 1,000+ (scales) |
| Broadcasts | Unlimited | Unlimited | Unlimited |
| Sequences | No | Unlimited | Unlimited |
| Visual Automations | 1 | Unlimited | Unlimited |
| Landing pages & Forms | Unlimited | Unlimited | Unlimited |
| A/B testing (subject) | No | Yes | Yes |
| A/B testing (content) | No | No | Yes |
| Engagement scoring | No | No | Yes |
| Deliverability reporting | No | No | Yes |
| Newsletter referral system | No | No | Yes |
| Remove Kit branding | No | Yes | Yes |
| Integrations / apps | No | Yes | Yes |
| Team members | 1 | 1 | Unlimited |
| Commerce | Yes (0.6% fee) | Yes (0.6% fee) | Yes (0.6% fee) |

*As of April 2025 — verify current pricing at kit.com/pricing*

## API quick reference

- **Base URL**: `https://api.kit.com/v4/`
- **Auth**: OAuth 2.0 (PKCE for apps) or API key
- **Rate limit**: 120 requests per rolling 60-second window
- **Pagination**: Cursor-based
- **Webhooks**: subscriber_activate, subscriber_unsubscribe, subscriber_bounce, subscriber_complain, form_subscribe, course_subscribe, course_complete
- **Full reference**: See `references/kit-api-reference.md`

## Integrations

**Native apps (Creator+ plans)**:
- E-commerce: Shopify, WooCommerce, Gumroad, Stripe, PayPal
- Website: WordPress, Squarespace, Wix, Webflow
- Courses: Teachable, Thinkific, Circle
- Design: Canva
- Other: Substack (import)

**Via Zapier/Make**: 120+ additional integrations

**WordPress plugin**: Integrates with Elementor, Contact Form 7, WishList Member

## Broadcasts

- **Email designer**: 3 templates — Text-only, Classic, Modern
- **A/B testing**: Subject lines on Creator+, content on Pro
- **RSS campaigns**: Auto-send when new content published
- **Scheduling**: Send now, schedule, or optimize send time
- **Resend to unopens**: Re-send with different subject line

## Sequences

- **Timed delays**: Set days/hours between steps
- **Subscriber filters**: Skip steps based on tags, segments, custom fields
- **Exit conditions**: Remove from sequence on tag add/remove, purchase, or custom event
- **Multiple sequences**: A subscriber can be in multiple sequences simultaneously

## Visual Automations

- **Triggers**: Form subscribe, tag added/removed, custom field changed, purchase, link clicked, date-based
- **Actions**: Add/remove tag, subscribe to sequence, move to step, send email, set custom field, create delay, send webhook
- **Rules**: If/else branching based on subscriber data
- **Canvas**: Visual drag-and-drop builder

## Commerce

- **Digital products**: PDF, video, audio, zip — hosted on Kit
- **Subscriptions**: Recurring billing for paid newsletters or memberships
- **Paid recommendations**: Earn $1–$5+ per new subscriber referred from other creators
- **Transaction fee**: 0.6% on all sales (+ payment processor fees)
- **Payment processors**: Stripe (required for commerce)

## Creator Recommendations

- **How it works**: After a subscriber confirms opt-in, Kit shows recommendations for other creators
- **Paid recommendations**: Creators can pay $1–$5+ per subscriber acquired through recommendations
- **Free recommendations**: Cross-promote with aligned creators at no cost
- **Requirements**: Active Kit account with growing list
