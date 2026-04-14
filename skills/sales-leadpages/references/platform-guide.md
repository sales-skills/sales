# Leadpages Platform Reference

## Platform overview

Leadpages is a landing page builder and lead generation platform used by 466,000+ businesses. It's designed for small businesses, solopreneurs, agencies, and marketing teams who need to create high-converting landing pages without coding. Key differentiators: Leadmeter real-time conversion scoring, AI content generation, built-in lead enrichment, and Stripe payment collection directly on landing pages.

## Key modules

### Landing page builder
- Drag-and-drop visual editor with grid-based layout (elements snap to positions, not freeform)
- 250+ professionally designed templates across categories: lead capture, sales pages, event registration, consultation booking, thank-you pages
- Templates filterable by conversion rate and industry
- Mobile-responsive by default — separate mobile layout customization available
- Custom code injection (HTML, CSS, JavaScript) for advanced users
- SEO settings per page (title, meta description, OG tags)
- AI-powered content generation for headlines, body copy, and images
- **Leadmeter**: Real-time conversion scoring that analyzes your page and suggests specific improvements before publishing

### Pop-ups and alert bars
- Pop-up types: timed, exit-intent, scroll-triggered, click-triggered
- Alert bars: persistent top/bottom notification bars for site-wide promotions
- Deploy on any website via JavaScript embed code (not limited to Leadpages-hosted pages)
- Targeting: show/hide based on URL, device, new vs returning visitor
- Frequency capping to avoid showing the same pop-up repeatedly

### A/B testing (Pro plan only)
- Split test any landing page — create variants and set traffic distribution
- Test headlines, images, CTAs, layouts, or entirely different page designs
- Built-in reporting shows conversion rates per variant
- Cannot A/B test pop-ups or alert bars separately — only full landing pages
- **Not available on Standard plan** — this is the biggest plan-gated feature

### Lead enrichment
- Automatic data enrichment on form submissions — appends industry, company size, location, and other firmographic data
- Useful for lead routing and segmentation without asking extra form fields
- Enrichment depth and accuracy may vary — verify before using for critical decisions

### Payments (Stripe integration)
- Accept one-time and recurring payments directly on landing pages
- Stripe checkout embedded in Leadpages — no redirect required
- Digital product delivery, consultation booking with payment, donation pages
- Not a full e-commerce checkout (no order bumps, upsells, cart functionality) — for that, use ThriveCart or SamCart

### AI features
- AI headline and copy generator based on your offer description
- AI image creation for page visuals
- Leadmeter AI-powered conversion recommendations
- Blog content generation (if using Leadpages for blogging)

### Websites and blogs
- Full website builder (not just landing pages) — multi-page sites with navigation
- Blog functionality with SEO optimization
- Blog monetization features
- Client sub-accounts for agencies

## Pricing and limits

| Feature | Standard ($49/mo, $37/mo annual) | Pro ($99/mo, $74/mo annual) | Custom (contact sales) |
|---|---|---|---|
| Landing pages | 5 | Unlimited | Unlimited |
| Custom domains | 1 | 3 | More |
| Traffic & leads | Unlimited | Unlimited | Unlimited |
| A/B testing | No | Yes | Yes |
| Pop-ups & alert bars | Yes | Yes | Yes |
| Payments (Stripe) | Yes | Yes | Yes |
| AI features | Yes | Yes | Yes |
| Lead enrichment | Yes | Yes | Yes |
| Standard integrations | Yes | Yes | Yes |
| Advanced integrations (Salesforce, Marketo) | Add-on | Yes | Yes |
| Client sub-accounts | Yes | Yes | Yes |

- **14-day free trial** on all plans
- Annual billing saves ~25% vs monthly
- Page limits only count published pages — drafts don't count against the limit

## Integrations

### Native integrations (90+)
**Email marketing**: Mailchimp, ActiveCampaign, Klaviyo, AWeber, Campaign Monitor, Constant Contact, Kit (ConvertKit), GetResponse, Drip, MailerLite
**CRM**: HubSpot, Salesforce (Pro/add-on), Pipedrive, Zoho CRM, Keap (Infusionkeep)
**Payments**: Stripe (native checkout embed)
**Analytics**: Google Analytics, Facebook Pixel
**Automation**: Zapier (connects to 5,000+ apps), Make (Integromat)
**Webinar**: GoToWebinar, Zoom
**Other**: Google Sheets, Slack, WordPress plugin

### Zapier integration
- Trigger: New lead submitted on a Leadpages form
- Use Zapier for any tool without a native integration
- Common flows: Leadpages → CRM, Leadpages → Slack notification, Leadpages → Google Sheets

### WordPress plugin
- Publish Leadpages landing pages directly to your WordPress site
- Pages use your WordPress domain but Leadpages hosting/CDN
- Install plugin, connect account, assign pages to WordPress URLs

## Workflow setup

### Building a lead capture landing page
1. Choose a lead capture template (filter by conversion rate)
2. Customize: headline (specific outcome promise), 3-5 benefit bullets, form (email only for highest conversion), CTA button (action verb + outcome)
3. Run Leadmeter — address all red/yellow suggestions
4. Connect your email tool (native integration or Zapier)
5. Set up custom domain or use Leadpages subdomain
6. Publish and verify form submissions flow to email tool
7. If on Pro: create an A/B variant testing a different headline

### Setting up pop-ups on an external site
1. Create a new pop-up in Leadpages dashboard
2. Design: headline, form fields, CTA, image/no image
3. Set trigger: exit-intent (best for lead capture), timed delay (5-10s for returning visitors), scroll depth (50% for engaged readers)
4. Set targeting: which URLs, device type, frequency cap
5. Copy the JavaScript embed code
6. Paste in your website's `<head>` tag (or use Google Tag Manager)
7. Test in incognito mode — ad blockers can interfere

### Accepting payments on a landing page
1. Connect Stripe account in Leadpages settings → Integrations
2. Add a checkout widget to your landing page
3. Configure: product name, price, one-time or recurring, currency
4. Customize the checkout form fields
5. Set up a thank-you page with delivery instructions
6. Test with Stripe test mode before going live

## Deep dives

### Template selection strategy
- **Don't pick by aesthetics** — pick by goal. A "pretty" template that doesn't match your funnel step will underperform.
- **Lead capture pages**: Look for minimal distraction, single CTA, above-the-fold form. These convert highest.
- **Sales pages**: Long-form templates with testimonial sections, offer stacks, and multiple CTAs. Need more scrolling space.
- **Webinar registration**: Date/time prominent, speaker bio, agenda bullets, countdown timer.
- **Consultation booking**: Calendar integration or form with qualifying questions.
- Filter templates by conversion rate (Leadpages shows this) — start with proven performers and customize.

### Conversion optimization in Leadpages
1. **Leadmeter first**: Always run Leadmeter before publishing. It checks 8+ factors and gives actionable suggestions.
2. **One CTA per page**: Don't split attention. Every element should support the single conversion goal.
3. **Headline formula**: "[Specific outcome] + [timeframe or ease qualifier]" — e.g., "Get 50 More Leads This Month Without Paid Ads"
4. **Form fields**: Every additional field beyond email reduces conversions ~10%. Only ask for what you need at this stage.
5. **Social proof**: Add subscriber count, client logos, or one strong testimonial above the fold.
6. **Page speed**: Compress all images before uploading. Use JPG for photos, PNG for graphics with transparency. Aim for <200KB per image.
7. **Mobile check**: Preview on mobile — Leadpages auto-creates a mobile layout but always verify it looks right.

### Leadpages vs alternatives
| Feature | Leadpages | Unbounce | Instapage | ClickFunnels |
|---|---|---|---|---|
| Starting price | $49/mo | $99/mo | $79/mo | $97/mo |
| Landing pages (basic plan) | 5 | Unlimited | Unlimited | Unlimited |
| Freeform element placement | No (grid) | Yes | Yes | Yes |
| A/B testing (basic plan) | No | Yes | Yes | Yes |
| AI features | Yes | Smart Traffic | No | No |
| Multi-step funnels | No | No | No | Yes |
| Built-in checkout | Stripe only | No | No | Yes |
| Best for | SMB lead capture | CRO teams | Ad landing pages | Full funnels |

Leadpages wins on price and ease of use for simple lead capture pages. For complex funnels, freeform design, or basic-plan A/B testing, consider alternatives.
