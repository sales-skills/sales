# Unbounce Platform Reference

## Platform overview

Unbounce is a dedicated landing page builder and CRO platform for marketers who want to create, test, and optimize landing pages without developers. Founded in 2009, it pioneered the dedicated landing page builder category. Key differentiator: Smart Traffic, an AI-powered optimization engine that routes each visitor to the page variant most likely to convert them — delivering an average 30% lift vs traditional A/B testing.

**Target audience**: Digital marketers, PPC specialists, agencies, and growth teams running paid campaigns.

## Key modules

### Smart Builder
- Drag-and-drop page builder with 100+ industry-specific templates
- AI-suggested layouts based on industry and goal selection
- Section-based design (not pixel-perfect — sections snap into place)
- Mobile-responsive preview with separate mobile editing
- Custom CSS/JavaScript injection for advanced customization
- Global elements for consistent headers/footers across pages

### Classic Builder
- Legacy drag-and-drop builder with more granular control
- Pixel-level element positioning (vs section-based Smart Builder)
- Still supported but Smart Builder is recommended for new pages
- Some features (Smart Builder suggestions) are not available

### Smart Traffic (AI optimization)
- Automatically routes each visitor to the page variant most likely to convert them
- Analyzes visitor attributes: location, timezone, device type, browser, OS
- Uses contextual multi-armed bandit algorithm (not traditional A/B splits)
- Starts optimizing after ~50 visits; initial learning phase begins at 30 visitors
- Average 30% conversion lift vs traditional A/B testing (Unbounce's claim)
- Never stops learning — continuously adjusts routing
- **Requires Optimize plan ($249+/mo)**
- Cannot run simultaneously with manual A/B tests on the same page

### A/B Testing
- Create page variants and split traffic between them
- Tracks conversions per variant with statistical reporting
- Set traffic allocation percentages per variant
- **Requires Experiment plan ($149+/mo)**
- Best practice: test one variable at a time, wait for 100+ conversions per variant

### Smart Copy (AI copywriting)
- AI-powered copy generation for headlines, CTAs, product descriptions, ads
- 45+ content templates
- Built into the page builder and available as standalone Chrome extension and desktop app
- Originally acquired as Snazzy AI (2021)
- Available on all plans

### Dynamic Text Replacement (DTR)
- Dynamically swap text on landing pages based on URL parameters
- Primary use: match landing page headline to PPC ad copy automatically
- Format: `?keyword=value` appended to landing page URL
- Reduces need for separate pages per ad group
- **Requires Experiment plan ($149+/mo)**

### Popups & Sticky Bars
- 50+ popup and sticky bar templates
- Trigger types: page arrival, exit-intent, scroll depth, click, timed delay
- Target by URL, referrer, cookie, location, device
- Frequency controls (show once per session, once per X days)
- Deploy on any website via JavaScript embed code — not just Unbounce-hosted pages
- Available on all plans

### AMP Landing Pages
- Accelerated Mobile Pages — load in under 0.5 seconds on average
- 85% faster than standard Unbounce pages
- Ideal for mobile PPC campaigns where speed = Quality Score
- Limited customization compared to standard pages (AMP restrictions)

### Form Builder
- Drag-and-drop form fields
- Hidden fields for tracking (UTM parameters, referrer)
- Multi-step forms supported
- Form confirmation actions: redirect, show message, or popup
- Lead data accessible via API, webhooks, or CSV export

## Pricing and limits

*Best-effort from research — verify current pricing at unbounce.com/pricing*

| Plan | Monthly | Annual (per mo) | Visitors/mo | Key features |
|---|---|---|---|---|
| Build | $99 | $64 | Varies | Unlimited pages/popups, Smart Copy, basic integrations |
| Experiment | $149 | $99 | 30,000 | A/B testing, DTR, + everything in Build |
| Optimize | $249 | $161 | 50,000 | Smart Traffic AI, + everything in Experiment |
| Agency | Higher | Higher | 100,000+ | Unlimited collaborators, client management |
| Concierge | $649+ | Custom | Custom | Dedicated CSM, implementation services, flexible limits |

**All plans include**: Unlimited landing pages, unlimited popups & sticky bars, Smart Copy AI, free hosting, SSL, 100+ templates.

**Important pricing notes**:
- 14-day free trial available
- Exceeding visitor limits incurs a **30% overage penalty** on annual subscription
- Significant price increases reported (100-400%) — review current pricing before committing
- Annual plans are non-refundable — cancellation doesn't produce a refund for remaining months
- API access on all plans (OAuth credentials granted case-by-case)

## Integrations

### Native integrations
- **CRM**: Salesforce, HubSpot, Marketo
- **Email marketing**: Mailchimp, ActiveCampaign, AWeber, Constant Contact, Campaign Monitor
- **Analytics**: Google Analytics, Google Tag Manager, Facebook Pixel
- **Webhooks**: Send form submissions to any endpoint

### Zapier integrations
- 60+ pre-built "Zaps" available within Unbounce
- 900+ apps via Zapier's full marketplace
- **Triggers**: New form submission, new lead
- **Actions**: Create/update contact, add to list, send notification

### API
- REST API v0.4
- Base URL: `https://api.unbounce.com`
- Auth: API key (all plans) or OAuth 2.0 (case-by-case)
- Resources: accounts, sub-accounts, pages, leads, domains, form fields
- See `references/unbounce-api-reference.md` for full endpoint details

## Data model (API resources)

- **Account** → has many Sub-Accounts
- **Sub-Account** → has many Pages, Domains, Page Groups
- **Page** → has many Leads, Form Fields; belongs to Domain and Page Group
- **Lead** → form submission data; belongs to Page
- **Domain** → custom domains; has many Pages

## Workflow: Building a PPC landing page

1. **Create page**: Smart Builder → pick industry → select template → customize headline, copy, hero image, form
2. **Set up DTR** (Experiment+): Add `?keyword=` parameters matching your ad groups
3. **Mobile optimize**: Switch to mobile view → adjust layout, font sizes, CTA button size
4. **Add tracking**: Google Analytics, Facebook Pixel via script manager or Google Tag Manager
5. **Compress images**: Before uploading — TinyPNG, Squoosh, or ImageOptim
6. **Create variants** (Experiment+): Duplicate page, change headline or layout
7. **Enable Smart Traffic** (Optimize) or **A/B test** (Experiment): Choose one per page
8. **Publish**: Set custom domain, SSL auto-configured
9. **Monitor**: Dashboard shows visitors, conversions, conversion rate per variant

## Workflow: Setting up popups

1. **Create popup**: Choose template or start blank → design in builder
2. **Set trigger**: Exit-intent, scroll %, timed delay, or click
3. **Set targeting**: URL rules, device, referrer, location, frequency
4. **Add form**: Email capture field → connect to integration (Mailchimp, etc.)
5. **Get embed code**: Copy JavaScript snippet from Unbounce
6. **Install on site**: Paste in `<head>` of target pages
7. **Publish**: Activate the popup in Unbounce

## Deep dives

### Smart Traffic best practices
- Create 2-5 meaningfully different variants (different headlines, layouts, offers — not just color changes)
- Give each variant a clear hypothesis: "This variant targets price-sensitive visitors"
- Don't change variants while Smart Traffic is learning — it resets the algorithm
- Monitor per-variant performance weekly; remove consistently underperforming variants after 500+ visits
- Works best with 100+ daily visitors; below that, results take weeks to materialize

### Page speed optimization
- Average Unbounce page loads in 2.8 seconds (competitors are faster)
- Compress images to WebP, under 200KB each
- Defer non-essential scripts (chat widgets, heatmaps) — load async
- Use only necessary font weights (don't load 6 weights of a font)
- Remove unnecessary sections — simpler pages load faster and often convert better
- AMP pages for speed-critical PPC campaigns (0.5s average load)
- Minimize redirects — each adds an HTTP round trip
