---
name: sales-funnel
description: "Build and optimize sales funnels — strategy, structure, conversion optimization, A/B testing, and analytics. Use when building a funnel, optimizing conversion rates, designing upsell/downsell flows, choosing a funnel builder, or planning a launch funnel. Do NOT use for email marketing sequences (use /sales-email-marketing), checkout-specific optimization (use /sales-checkout), or webinar funnels (use /sales-webinar). For Groove-specific help, use /sales-groove."
argument-hint: "[describe your funnel goal — e.g., 'build a webinar registration funnel' or 'optimize my checkout conversion rate']"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Sales Funnel Builder & Optimizer

Build, structure, and optimize sales funnels across any platform. This skill covers funnel strategy, page architecture, conversion optimization, A/B testing, and analytics — tool-agnostic with platform-specific guidance where it matters.

---

## Step 1: Lead with Structure, Then Refine

**If the user's request already provides enough context to identify the funnel type, skip directly to the relevant funnel structure and start filling it in. Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.**

### Common Funnel Structures (Always Provide the Relevant Template)

When a user asks about building a funnel, immediately provide the concrete step-by-step structure for the relevant funnel type. Do not wait for answers before outlining the structure.

**Lead Magnet Funnel**:
1. **Traffic source** (ad, blog post, social media, SEO) →
2. **Opt-in / squeeze page** — Headline promising a specific outcome, 3-5 benefit bullets, email capture form, action-oriented CTA button →
3. **Thank-you / delivery page** — Deliver the asset (or confirm email delivery), set expectations for what happens next, optional tripwire offer ($7-$17) to offset ad costs →
4. **Follow-up email sequence** (3-5 emails): deliver value → build trust → introduce offer → overcome objections → CTA

**Lead magnet types** (choose based on audience and niche):
- **PDF guide / ebook**: Most common. Works when the topic needs depth. Example: "The Complete Guide to [X]."
- **Checklist / cheat sheet**: High conversion — low effort to consume. Example: "The 10-Point Launch Checklist."
- **Template / swipe file**: Extremely compelling because it's immediately usable. Example: "5 Cold Email Templates That Book Meetings."
- **Video training / mini-course**: Higher perceived value, builds more trust. Works for complex topics.
- **Quiz / assessment**: Interactive, generates personalized results. Great for segmentation. Example: "What's Your Marketing Score?"
- **Calculator / tool**: Solves a specific problem. Example: "ROI Calculator for [Your Product]."
- **Free trial / demo**: Best for SaaS — let the product sell itself.

The best lead magnets solve a specific, narrow problem quickly. "The Ultimate Guide to Marketing" converts poorly. "The 5-Minute Facebook Ad Audit Checklist" converts well. Specificity and speed-to-value beat comprehensiveness.

**Webinar Funnel**:
1. **Registration page** — Headline with specific promise, date/time, speaker credibility, registration form
2. **Confirmation + reminder sequence** — Confirmation page with calendar add, 3-4 reminder emails leading up to the event
3. **Live / replay page** — Webinar embed, chat/Q&A, CTA overlay at pitch point
4. **Follow-up sequence with offer** — Replay access, testimonials, objection handling, cart-close urgency

**Product Launch Funnel (PLF)**:
1. **Pre-launch content** — Squeeze page → PLC Video 1 (Opportunity) → Video 2 (Transformation) → Video 3 (Ownership) → Video 4 (The Offer)
2. **Cart open page** — Full long-form sales page with offer stack, testimonials, bonuses, countdown timer
3. **Sales page** — Price reveal, guarantee, FAQ, multiple CTAs
4. **Checkout** — Simplified order form, order bump offer
5. **Post-purchase upsell** — Complementary one-click upsell (1-2 OTOs max)

**Tripwire Funnel**:
1. **Opt-in page** — Free lead magnet offer
2. **Sales page** — Low-ticket offer ($7-$47) presented immediately after opt-in
3. **Order form + order bump** — Simple checkout with a complementary add-on
4. **Upsell / OTO page** — One-click upgrade to a higher-tier offer
5. **Thank-you page** — Delivery confirmation + next steps

**High-Ticket Application Funnel**:
1. **Landing page** — Outcome-driven headline, case studies, "Apply Now" CTA
2. **Application form** — Qualifying questions to filter serious prospects
3. **Booking page** — Calendar integration for scheduling a sales call
4. **Sales call** — Discovery + pitch (supported by a follow-up sequence)

**Sales Page Funnel**:
1. **Long-form sales page** — Full PAS or AIDA sales letter with offer stack, testimonials, and guarantee →
2. **Order / checkout page** — Simplified checkout with order bump offer →
3. **Upsell page(s)** — 1-2 one-click upsell or downsell offers →
4. **Thank-you / onboarding page** — Delivery confirmation, next steps, community invite

**Free Trial / Demo Funnel (SaaS)**:
1. **Landing page** — Problem-focused headline, product demo video or screenshots, CTA to start free trial →
2. **Sign-up / trial activation** — Minimal-friction registration (email + password, or SSO), immediate access to product →
3. **Onboarding sequence** — In-app guided tour + email sequence (5-7 emails over trial period: quick wins, key features, case studies) →
4. **Upgrade prompt sequence** — Trial-expiring reminders, ROI recap, plan comparison, limited-time upgrade incentive

### Gathering Additional Context

After providing the relevant funnel structure, refine your recommendations with these details as needed:

1. **Offer** — What are you selling, at what price point?
2. **Audience** — Who is the target buyer? Where are they in the awareness spectrum?
3. **Traffic source** — Where will traffic come from? (paid ads, organic, email list, affiliates, social media)
4. **Existing assets** — Do you already have landing pages, email sequences, lead magnets, videos, testimonials?
5. **Platform / tool** — Which funnel builder are you using or considering?
6. **Goal & timeline** — What does success look like? When do you need this live?
7. **Current metrics** — If optimizing an existing funnel, what are your current conversion rates at each step?

If the user skips details, make reasonable assumptions for a general B2B or B2C info-product funnel and state them explicitly.

---

## Step 2: Funnel Strategy

### Funnel Types & When to Use Each

| Funnel Type | Best For | Typical Price Point | Key Pages |
|---|---|---|---|
| **Lead Magnet** | List building, top-of-funnel | Free (email opt-in) | Opt-in page, thank-you page |
| **Tripwire** | Converting leads to buyers fast | $7–$47 | Opt-in, sales page, OTO, thank-you |
| **Webinar** | Courses, coaching, mid-to-high ticket | $297–$2,000 | Registration, confirmation, webinar, sales page, order |
| **Product Launch (PLF)** | Big reveals, course launches | $197–$2,000+ | Squeeze page, PLC videos (3–4), cart page, order |
| **Sales Page** | Direct product sales, info products | $47–$997 | Sales page, checkout, upsell, thank-you |
| **High-Ticket Application** | Coaching, consulting, done-for-you | $3,000–$50,000+ | Landing page, application form, booking page, sales call |
| **Free Trial / Demo (SaaS)** | SaaS, software, tools | $29–$299/mo | Landing page, sign-up, onboarding, upgrade prompts |
| **VSL (Video Sales Letter)** | Direct-response offers | $47–$497 | VSL page, order form, OTO |
| **Challenge** | Community-driven launches | $27–$497 (or free entry) | Registration, daily content pages, offer page |

### Conversion Benchmarks by Funnel Type

Use these as baselines — not guarantees. Benchmarks assume warm-to-lukewarm traffic:

| Funnel Step | Good | Great | Elite |
|---|---|---|---|
| **Opt-in page** | 25–35% | 35–50% | 50%+ |
| **Tripwire sales page** | 5–10% | 10–15% | 15%+ |
| **Webinar registration** | 20–30% | 30–45% | 45%+ |
| **Webinar show-up rate** | 25–35% | 35–50% | 50%+ |
| **Webinar pitch conversion** | 3–7% of registrants | 7–12% | 12%+ |
| **Sales page (cold traffic)** | 1–3% | 3–5% | 5%+ |
| **Sales page (warm traffic)** | 3–8% | 8–15% | 15%+ |
| **Order bump acceptance** | 15–25% | 25–40% | 40%+ |
| **Upsell/OTO acceptance** | 10–20% | 20–35% | 35%+ |
| **Application completion** | 30–50% | 50–70% | 70%+ |

---

## Step 3: Platform-Specific Guidance

### In Groove.cm (Detailed)

Groove.cm bundles funnel building, email, membership, and checkout into one ecosystem. Key components for funnels:

- **GroovePages** — Drag-and-drop page builder. Use "Funnel" mode (not "Site" mode) to create multi-step funnels with built-in page sequencing.
  - Create a new funnel project, then add pages as steps (opt-in, sales page, upsell, thank-you).
  - Use Groove's global blocks for consistent headers/footers across funnel steps.
  - Enable the built-in countdown timer element for urgency — it syncs across pages.
  - For split testing, duplicate a page within the funnel and use Groove's A/B test toggle. Traffic splits evenly by default.
- **GrooveSell** — Native checkout. Create products, then attach order forms directly to funnel pages. Set up order bumps and one-click upsells within GrooveSell (not GroovePages).
  - Upsell/downsell sequences are configured in GrooveSell under "Funnels" > "Upsell Flows."
  - Use GrooveSell's built-in affiliate program (GrooveAffiliate) for launch funnels.
- **GrooveMail** — Trigger post-funnel email sequences based on purchase or opt-in tags. Connect tags between GrooveSell and GrooveMail for segmentation.
- **GrooveMember** — If your funnel delivers a course or membership, GrooveMember handles access. Link product purchases in GrooveSell to membership levels.
- **Tips**: Groove's page load speed depends on image optimization — compress all images before uploading. Use Groove's built-in analytics (GroovePages > Stats) for page-level metrics, but supplement with Google Analytics or a pixel for traffic-source attribution.

### In ClickFunnels

- Use the funnel template library as a starting point — filter by funnel type (opt-in, sales, webinar, etc.).
- Each funnel step maps to a page. Drag to reorder steps in the funnel flow view.
- A/B split tests: click "Create Variation" on any funnel step. Set traffic split percentages.
- One-click upsells require Stripe or authorized.net with OTO enabled. Configure in the funnel step settings.
- Use the "Stats" tab for per-step conversion tracking. Add Facebook Pixel and Google Analytics via the tracking code settings.

### In GoHighLevel

- Build funnels under "Sites" > "Funnels." Add steps, assign templates or build from scratch.
- GoHighLevel excels at combining funnels with CRM pipelines — trigger automations when a contact hits a funnel step.
- Use "Workflows" (automations) to move contacts through pipeline stages based on funnel actions (opt-in, purchase, application submitted).
- Split testing is available per funnel step. Forms and surveys are native — useful for application funnels.
- Integrate with Stripe for payments. Upsell flows are configured via the order form settings.

### In Kartra

- Kartra's funnel builder ("Sequences") lets you visually map the entire funnel flow including conditional branching.
- Behavioral adaptive marketing: Kartra can show different page content based on tags, purchase history, or lead score.
- Helpdesks, memberships, and email are all native — strong for all-in-one setups.
- Use Kartra Checkouts for order bumps and upsells. Configure "Upsell/Downsell" under the product settings.
- Analytics: Kartra tracks end-to-end funnel metrics natively with revenue attribution.

### In WordPress (+ Elementor or Thrive)

- Use a dedicated funnel plugin: CartFlows, WooFunnels (FunnelKit), or Thrive Suite.
- **CartFlows / FunnelKit**: Create funnel flows (opt-in > sales > upsell > thank-you), assign page builder templates, connect to WooCommerce for checkout.
- **Thrive Architect + Thrive Optimize**: Build pages in Thrive, use Thrive Optimize for A/B testing. Pair with Thrive Leads for opt-in forms.
- **Elementor + third-party**: Build pages in Elementor, use a separate checkout (ThriveCart, SamCart) embedded via iframe or redirect.
- WordPress funnels require more setup but offer full control over hosting, speed, and SEO.

### In Other Tools

- **Unbounce / Leadpages**: Best for standalone landing pages and opt-in pages rather than full multi-step funnels. Use Unbounce Smart Traffic for AI-driven A/B testing. Connect to a separate checkout tool (ThriveCart, Stripe) and email tool.
- **Systeme.io**: Budget-friendly all-in-one. Supports funnels, email, courses, and checkout. Limited design flexibility but fast to launch.

---

## Step 4: Actionable Guidance

### Page Structure for Each Funnel Step

**Opt-in Page**
1. Headline: State the specific outcome the lead magnet delivers (not the format).
2. Subheadline: Reinforce with timeframe or ease — "in 15 minutes" or "without X."
3. Bullet points (3–5): Benefits, not features. Each bullet = one desirable outcome.
4. Opt-in form: Name + email minimum. Ask only for what you need.
5. CTA button: Action-oriented verb + outcome ("Get My Free Guide," not "Submit").
6. Social proof (optional): Subscriber count, testimonial, or trust logos.

**Sales Page (Long-Form)**
1. Pre-headline: Call out the audience ("Attention course creators...")
2. Headline: Big promise or pattern interrupt.
3. Story/problem section: Agitate the pain. Use the PAS (Problem-Agitate-Solution) or AIDA framework.
4. Solution introduction: Bridge from problem to your offer.
5. Offer stack: List everything included with perceived value for each item.
6. Testimonials/proof: Scatter throughout, not just in one section.
7. Price reveal + anchor: Show total value, then actual price.
8. Guarantee: Risk reversal — 30-day, 60-day, or conditional.
9. CTA: Repeat 2–3 times throughout the page.
10. FAQ: Handle top 5–7 objections.
11. Final CTA + urgency: Deadline, scarcity, or bonus expiration.

**Upsell / OTO Page**
1. Headline: "Wait! Your order is not complete..."
2. Short video or copy explaining the complementary offer.
3. One-click purchase button (no re-entering payment info).
4. "No thanks" decline link — always visible, never hidden.
5. Keep it short: 300–500 words max. The decision should take under 60 seconds.

**Thank-You / Confirmation Page**
1. Confirm what they just got and what happens next.
2. Set expectations for delivery (check email, access link, etc.).
3. Introduce the next step: book a call, join the community, share on social.
4. This page is underused — it's prime real estate for a soft upsell or referral ask.

### Copy Frameworks

- **PAS (Problem-Agitate-Solution)**: Name the problem, twist the knife, present the fix. Best for sales pages.
- **AIDA (Attention-Interest-Desire-Action)**: Hook, build curiosity, create want, prompt action. Best for shorter pages.
- **BAB (Before-After-Bridge)**: Show current state, paint the dream state, bridge with your offer. Best for opt-in pages and ads.
- **4 Ps (Promise-Picture-Proof-Push)**: Make a bold promise, paint the outcome, show proof it works, push to action. Best for VSLs.

### CTA Placement Rules

- First CTA: Above the fold or immediately after the headline/subheadline.
- Second CTA: After the main benefit section or proof section.
- Final CTA: At the bottom, paired with urgency or a guarantee reminder.
- Sticky CTA (mobile): Use a fixed bottom bar with the CTA button on mobile. Do not rely on in-page buttons alone.

### Mobile Optimization

- 60–80% of funnel traffic is mobile. Design mobile-first.
- Keep opt-in forms to 1–2 fields on mobile.
- Use large tap targets (min 44px height for buttons).
- Compress images to under 200KB per image. Use WebP format.
- Test page load speed: aim for under 3 seconds on 3G.
- Avoid pop-ups that block the full screen on mobile (Google penalizes these).

### A/B Testing Priorities

Test in this order (highest impact first):

1. **Headline** — The single biggest lever. Test completely different angles, not word swaps.
2. **CTA button** (text, color, placement) — Test action-oriented vs. benefit-oriented copy.
3. **Hero image or video** — Test video vs. static image, or different hero shots.
4. **Social proof placement** — Test above the fold vs. below.
5. **Price presentation** — Test payment plans vs. one-time, or different anchoring.
6. **Page length** — Test long-form vs. short-form (especially for cold vs. warm traffic).

### A/B Testing Methodology

Follow this framework for every test:

- **One variable at a time**: Change only one element per test. Testing headline AND CTA simultaneously gives you no idea which change caused the result.
- **Minimum sample size**: Aim for at least 100 conversions per variant (not 100 visitors — 100 conversions). For pages with 5% conversion rate, that means ~2,000 visitors per variant. Use a significance calculator (ABTestGuide, Evan Miller, or Optimizely) if unsure.
- **Statistical significance**: Wait for 95% confidence before declaring a winner. Do NOT call a test early because one variant "looks better" after a few days.
- **Run for full business cycles**: Run tests for at least 7 days to capture weekday vs. weekend variation, even if you hit sample size sooner.
- **Document and iterate**: Record every test result (variant, metric, sample size, winner, lift %). Build a testing backlog and always be running the next test.

### Analytics & Tracking

- Track these metrics at every funnel step: visitors, conversion rate, cost per conversion, revenue per visitor.
- Set up UTM parameters for every traffic source. Use consistent naming: `utm_source`, `utm_medium`, `utm_campaign`.
- Install a Facebook/Meta Pixel and Google Analytics 4 on all funnel pages. Fire standard events: `PageView`, `Lead`, `AddToCart`, `Purchase`.
- Calculate **Earnings Per Click (EPC)**: total revenue / total clicks to funnel. This is the master metric for paid traffic funnels.
- Calculate **Customer Acquisition Cost (CAC)**: total ad spend / number of customers. Compare to Customer Lifetime Value (LTV) — aim for 3:1 LTV:CAC minimum.

---

## Gotchas

1. **Do not recommend specific conversion rates as guaranteed outcomes.** Benchmarks vary wildly by niche, traffic temperature, and offer. Always frame them as baselines to test against, not promises.
2. **Do not design upsell flows with more than 2–3 OTOs.** Beyond that, buyer fatigue tanks conversions and increases refund rates. Keep it tight.
3. **Do not ignore page load speed.** A 1-second delay in load time can drop conversions by 7%. Always recommend image compression, lazy loading, and minimal scripts — especially for WordPress funnels.
4. **Do not assume the user's traffic is warm.** Cold traffic from paid ads converts very differently from an email list. Always ask about the traffic source and tailor page length, proof elements, and CTA aggression accordingly.
5. **Do not conflate funnel structure with email sequences.** The funnel is the page flow. Post-funnel email nurture and abandoned-cart recovery are separate concerns — point users to /sales-email-marketing for those.

---

## Related Skills

- `/sales-groove` — Groove.cm-specific page building, checkout, and membership setup
- `/sales-checkout` — Checkout page optimization, order bumps, payment processing
- `/sales-email-marketing` — Post-funnel email sequences, abandoned cart, nurture campaigns
- `/sales-webinar` — Webinar funnel strategy, registration, replay sequences
- `/sales-membership` — Membership site setup and retention funnels
- `/sales-do` — Route to any sales skill by describing what you need

---

## Examples

### Example 1: Build a Lead Magnet Funnel

**User**: "I want to build a lead magnet funnel for my free PDF guide on meal planning."

**Approach**:
1. Clarify the audience (busy parents? fitness enthusiasts?) and traffic source.
2. Recommend a 2-page funnel: opt-in page + thank-you page.
3. Opt-in page structure: headline focused on outcome ("Plan a Week of Healthy Meals in 10 Minutes"), 3–4 bullet points on what's inside, simple name + email form, CTA button ("Send Me the Free Guide").
4. Thank-you page: confirm delivery via email, introduce a tripwire offer ($7–$17 recipe bundle) to offset ad costs.
5. Platform: recommend based on user's existing tools. For beginners, Systeme.io (free tier) or Groove.cm.

### Example 2: Optimize a Low-Converting Sales Page

**User**: "My sales page converts at 1.2% — how do I improve it?"

**Approach**:
1. Ask for current metrics: traffic source, page length, offer, price, audience awareness level.
2. Compare 1.2% against benchmarks (cold traffic: 1–3% is normal; warm traffic: this is low).
3. Diagnose the most likely bottleneck: if traffic is warm and conversion is 1.2%, the page is underperforming — start with the headline and offer stack.
4. Recommend the testing priority order: headline first, then CTA, then social proof, then price presentation.
5. Provide specific headline formulas to test and suggest adding a video if there isn't one.
6. Check for mobile issues — ask if they've tested on phone.

### Example 3: Product Launch Funnel with Video Series

**User**: "Design a product launch funnel with a 4-video series leading to a cart open."

**Approach**:
1. Map the Jeff Walker PLF structure: squeeze page > PLC Video 1 > PLC Video 2 > PLC Video 3 > PLC Video 4 > Cart Open page > Cart Close page.
2. Each PLC (Pre-Launch Content) video page: video embed, key takeaway bullets below, comment section (optional), CTA to next video or to join the waitlist.
3. Video content arc: Video 1 = Opportunity (why now), Video 2 = Transformation (case studies), Video 3 = Ownership (how it works), Video 4 = The Offer (full pitch).
4. Cart open page: full long-form sales page with offer stack, testimonials, bonuses, countdown timer to cart close.
5. Email sequence: daily emails during PLC phase pointing to each video, then daily during cart-open with different angles (story, FAQ, objection handling, last chance).
6. Recommend platform based on needs — Groove.cm or ClickFunnels for the page flow, paired with their native or external email tool.

---

## Troubleshooting

### "My opt-in rate is below 20%"

- **Check the headline**: Is it promising a specific, desirable outcome? Vague headlines ("Get Our Free Guide") underperform specific ones ("The 5-Minute Morning Routine That Doubled My Energy").
- **Reduce form fields**: Every additional field beyond email drops conversion. Remove "phone" and "company" unless essential.
- **Match the ad to the page**: If running paid traffic, the opt-in page headline must mirror the ad copy. Disconnect = bounce.
- **Test the lead magnet name**: Sometimes the offer is good but the packaging is weak. Test different titles for the same asset.

### "People are adding to cart but not completing purchase"

- **Simplify the checkout**: Remove distractions, navigation, and unnecessary form fields. One-column layout, minimal steps.
- **Add trust signals**: SSL badge, money-back guarantee badge, payment logos (Visa, Mastercard, PayPal) near the payment fields.
- **Implement abandoned cart recovery**: Redirect to /sales-email-marketing for email and SMS follow-up sequences.
- **Test the price**: If cart abandonment is high, consider adding a payment plan option to reduce friction.

### "My upsell take rate is under 10%"

- **Check relevance**: The upsell must be a natural complement to what they just bought, not a random additional product.
- **Reduce price friction**: Price the upsell at 30–60% of the core offer. A $497 upsell after a $47 purchase feels jarring.
- **Simplify the decision**: One offer, one CTA, one clear benefit. Do not present multiple upsell options on the same page.
- **Add urgency**: "This offer is only available right now" — and mean it. Do not show the same "exclusive" upsell later in an email.
