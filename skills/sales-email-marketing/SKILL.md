---
name: sales-email-marketing
description: "Email marketing for opt-in subscribers — broadcasts, nurture sequences, automation, segmentation, and list management. Use when planning email campaigns, designing welcome sequences, setting up behavior-based automation, segmenting lists, improving open/click rates, or choosing an email marketing platform. Do NOT use for cold outbound email (use /sales-cadence), email deliverability/SPF/DKIM (use /sales-deliverability), transactional email (use /sales-transactional-email), connecting tools to CRM (use /sales-integration), or platform-specific config — use the dedicated platform skill instead (e.g., /sales-mailchimp, /sales-klaviyo, /sales-activecampaign, /sales-omnisend, /sales-brevo, /sales-kit, /sales-swai, etc.)."
argument-hint: "[describe your email marketing question — e.g., 'design a welcome sequence' or 'improve my open rates']"
license: MIT
version: 1.0.0
tags: [sales, email-marketing, newsletters, broadcasts, automation]
---
# Email Marketing for Opt-In Subscribers

Help the user plan, build, and optimize email marketing campaigns for subscribers who opted in — covering broadcasts, nurture sequences, automation workflows, segmentation, and list management across GrooveMail, Mailchimp, ActiveCampaign, ConvertKit, Klaviyo, and other platforms.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's the goal?**
   - A) Welcome / onboarding new subscribers
   - B) Nurture leads toward a purchase
   - C) Promote a launch, sale, or event
   - D) Re-engage inactive subscribers
   - E) Post-purchase retention / upsell
   - F) Cart abandonment recovery
   - G) General list management or segmentation
   - H) Other — describe it

2. **What does your list look like?**
   - Approximate list size
   - How subscribers joined (lead magnet, checkout, webinar, organic, etc.)
   - Current engagement level (healthy, declining, unknown)

3. **What platform are you using (or considering)?**
   - GrooveMail (Groove.cm), Mailchimp, ActiveCampaign, ConvertKit, Klaviyo, Drip, AWeber, GetResponse, Brevo (Sendinblue), HubSpot Marketing, or other

4. **What's your audience type?**
   - B2B or B2C
   - Product/service category
   - Typical buyer journey length

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Strategy

### Email types and when to use them

| Sequence Type | Trigger | Typical Length | Goal |
|---------------|---------|----------------|------|
| **Welcome series** | New subscriber opt-in | 3-7 emails over 7-14 days | Build trust, set expectations, deliver lead magnet, introduce offer |
| **Nurture sequence** | After welcome series or lead magnet download | 5-12 emails over 2-6 weeks | Educate, build authority, move toward purchase decision |
| **Promotional / broadcast** | Manual send or scheduled | 1-3 emails per campaign | Drive action on a specific offer, event, or announcement |
| **Re-engagement** | Inactivity trigger (30-90 days no opens) | 3-5 emails over 7-14 days | Win back attention or clean list |
| **Post-purchase** | Purchase confirmation | 3-7 emails over 14-30 days | Onboard, reduce refunds, drive reviews, upsell |
| **Cart abandonment** | Cart created but not completed | 2-4 emails over 24-72 hours | Recover the sale |

### Frequency planning

- **New subscribers (first 14 days)**: Daily or every-other-day is acceptable — engagement is highest right after opt-in
- **Active nurture**: 2-3 emails per week maximum
- **Ongoing broadcasts**: 1-2 per week for most lists; 3-4 per week only for media/content brands with high engagement
- **Re-engagement**: Condensed — every 2-3 days over 1-2 weeks, then remove or suppress non-responders

### Segmentation strategies

Segment by these dimensions (in priority order):

1. **Engagement level** — Active (opened/clicked in last 30 days), Warm (31-90 days), Cold (90+ days)
2. **Source / opt-in method** — Lead magnet topic, webinar attended, product interest shown
3. **Purchase history** — Never purchased, one-time buyer, repeat customer, VIP
4. **Behavior triggers** — Pages visited, links clicked, emails opened, products viewed
5. **Demographics / firmographics** — Industry, company size, role (B2B) or location, age, interests (B2C)

### Key metrics and benchmarks

| Metric | Healthy Range | Warning | Action Needed |
|--------|--------------|---------|---------------|
| **Open rate** | 20-25%+ | 15-20% | Below 15% |
| **Click rate** | 2-5%+ | 1-2% | Below 1% |
| **Click-to-open rate** | 10-15%+ | 5-10% | Below 5% |
| **Unsubscribe rate** | Below 0.3% | 0.3-0.5% | Above 0.5% |
| **Bounce rate** | Below 1% | 1-2% | Above 2% |
| **Spam complaint rate** | Below 0.05% | 0.05-0.1% | Above 0.1% |

These benchmarks vary by industry — e-commerce and media tend to have lower open rates but higher volume; B2B SaaS tends to have higher open rates on smaller, more targeted lists.

## Step 3 — Platform-specific guidance

For platform-specific email marketing configuration (automation builders, segmentation tools, campaign setup, and platform features), see `references/platforms.md`.

## Step 4 — Actionable guidance

### Subject line formulas

Use these proven patterns (A/B test two per send):

| Formula | Example |
|---------|---------|
| **Curiosity gap** | "The one thing killing your [desired outcome]" |
| **Benefit + specificity** | "How to [benefit] in [specific timeframe]" |
| **Question** | "Are you still [struggling with X]?" |
| **Social proof** | "How [name/company] got [specific result]" |
| **Urgency (use sparingly)** | "[X hours] left to grab [offer]" |
| **Personal / conversational** | "Quick question about your [topic]" |
| **List / number** | "5 [things] that [outcome]" |

Keep subject lines under 50 characters for mobile. Avoid ALL CAPS, excessive punctuation (!!!), and spam trigger words (free, guarantee, act now) in every email.

### Email copy structure

Follow this framework for most marketing emails:

1. **Hook (first 1-2 lines)** — Open with a question, story, bold claim, or relatable pain. This must earn the scroll.
2. **Bridge (2-4 lines)** — Connect the hook to the reader's situation. Build empathy or tension.
3. **Body (the value)** — Deliver the insight, story, tip, or offer. Keep paragraphs to 1-3 lines. Use white space aggressively.
4. **CTA (1 clear action)** — One primary call to action per email. Make it specific ("Download the template" not "Click here"). Button or text link — test both.
5. **P.S. (optional)** — Restate the CTA or add a secondary hook. P.S. lines are among the most-read parts of an email.

**Formatting rules:**
- 1-3 sentences per paragraph (mobile readability)
- Write at a 5th-8th grade reading level
- Use "you" more than "we" or "I"
- One idea per email — don't dilute with multiple topics

### CTA design

- **One primary CTA per email** — multiple CTAs reduce click rate
- Use action verbs: "Get the guide," "Start your trial," "Book your spot"
- Repeat the CTA 2-3 times in longer emails (top, middle, bottom)
- Buttons get higher click rates than text links in B2C; text links often outperform in B2B
- Create urgency when appropriate: "Spots are limited" (only if true)

### A/B testing

Test one variable at a time in this priority order:

1. **Subject line** (biggest impact on open rate) — test 2 variants on 20% of list, send winner to remaining 80%
2. **Send time** — test morning vs. afternoon, weekday vs. weekend
3. **CTA** — button vs. text link, placement, wording
4. **Email length** — short (under 150 words) vs. long (300+ words)
5. **From name** — brand name vs. personal name vs. personal + brand

Minimum sample size: 1,000 subscribers per variant for statistically meaningful results. Below that, test across multiple sends and look for patterns.

### Send time optimization

General benchmarks (always test for your specific audience):

| Audience | Best Days | Best Times |
|----------|-----------|------------|
| **B2B** | Tuesday, Wednesday, Thursday | 8-10 AM or 1-2 PM recipient's timezone |
| **B2C** | Tuesday, Thursday, Saturday | 10 AM, 1 PM, or 8 PM recipient's timezone |
| **E-commerce** | Thursday, Friday, Sunday | 10 AM or 7-9 PM recipient's timezone |

Send-time optimization features (available in most platforms) learn per-subscriber open patterns and deliver at the individually optimal time — enable this when available.

### List hygiene

Perform these maintenance tasks regularly:

- **Monthly**: Review bounce rates. Remove hard bounces immediately (most platforms do this automatically).
- **Quarterly**: Run a re-engagement campaign for subscribers who haven't opened in 60-90 days. Suppress or remove non-responders.
- **Before every large broadcast**: Exclude unengaged segments (90+ days no opens) to protect sender reputation.
- **Annually**: Full list audit — remove all contacts inactive for 12+ months, verify email addresses on segments with high bounce rates.
- **Ongoing**: Honor unsubscribes within 24 hours (legally required in most jurisdictions). Use double opt-in for new subscribers to ensure list quality from the start.

## Gotchas

1. **Sending to your full list every time destroys deliverability.** Always exclude unengaged subscribers from broadcasts. ISPs watch engagement ratios — low open rates on large sends trigger spam filtering for everyone on your list.
2. **Skipping the welcome sequence is the biggest missed revenue opportunity.** Welcome emails get 4x the open rate and 5x the click rate of regular broadcasts. If you're not sending a welcome series immediately after opt-in, you're losing your highest-engagement window.
3. **More emails is not always the problem when people unsubscribe.** Irrelevant emails cause more unsubscribes than high frequency. A daily email that's consistently valuable retains better than a weekly email that misses the mark. Segment and send relevant content rather than just reducing frequency.
4. **Automations without exit conditions create embarrassing moments.** If someone buys your product and then receives a sales email for that same product the next day, you've broken trust. Every automated sequence needs exit rules: remove/suppress when the desired action is taken.
5. **Importing a purchased or scraped list into your email marketing platform will get you banned.** Every major platform (Mailchimp, ActiveCampaign, ConvertKit, Klaviyo, GrooveMail) requires opt-in consent. Importing cold contacts results in high bounces, spam complaints, and account suspension. Use /sales-cadence for cold outbound instead.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- **/sales-getresponse** — GetResponse platform help (autoresponders, marketing automation, conversion funnels, webinars, course creator)
- **/sales-iterable** — Iterable platform help (Studio journeys, Campaigns, Handlebars templating, Brand Affinity, Smart Ingest, cross-channel)
- **/sales-braze** — Braze platform help (Canvas Flow, Campaigns, Liquid templating, BrazeAI, Content Cards, cross-channel)
- **/sales-brevo** — Brevo platform help (email, SMS, WhatsApp, push, automation, CRM)
- **/sales-transactional-email** — Transactional/triggered email delivery (order confirmations, password resets — not marketing)
- **/sales-groove** — Groove.cm platform-specific guidance (GrooveMail, GroovePages, GrooveSell, GrooveFunnels)
- **/sales-closum** — Closum platform help (omnichannel email, SMS, WhatsApp, Telegram, Web Push)
- **/sales-mailchimp** — Mailchimp platform help (email campaigns, Customer Journey Builder, SMS, audience management, API)
- **/sales-sendgrid** — SendGrid platform help (Email API, Marketing Campaigns, transactional email, dynamic templates)
- **/sales-postmark** — Postmark platform help (transactional email, broadcast message streams, templates)
- **/sales-customerio** — Customer.io platform help (behavior-driven Journeys, multi-channel automation, Data Pipelines)
- **/sales-mailgun** — Mailgun platform help (developer-first email API, mailing lists, templates, batch sending)
- **/sales-klaviyo** — Klaviyo platform help (e-commerce flows, predictive analytics, Shopify integration, multi-channel)
- **/sales-activecampaign** — ActiveCampaign platform help (visual automation builder, CRM, lead scoring, predictive sending)
- **/sales-kit** — Kit (formerly ConvertKit) platform help (Visual Automations, Sequences, Commerce, Creator Recommendations)
- **/sales-omnisend** — Omnisend platform help (email/SMS/push for ecommerce, Shopify/WooCommerce integration)
- **/sales-sendpulse** — SendPulse platform help (email, chatbots, SMS, web push, Automation 360)
- **/sales-chatbot** — Chatbot strategy and automation (SendPulse Automation 360 connects email flows to chatbot flows)
- **/sales-sms-marketing** — SMS marketing strategy (opt-in, compliance, campaigns, automation)
- **/sales-newsletter** — Newsletter monetization (paid subscriptions, sponsorships, premium tiers)
- **/sales-audience-growth** — Growing an email list (lead magnets, cross-promotion, referral programs)
- **/sales-digital-products** — Selling digital products (ebooks, courses, templates)
- **/sales-cadence** — Cold outbound email cadences and sequences (NOT opt-in marketing)
- **/sales-deliverability** — SPF, DKIM, DMARC, domain warm-up, and inbox placement
- **/sales-funnel** — Funnel strategy and page design (landing pages that feed your email list)
- **/sales-checkout** — Checkout optimization and post-purchase flows
- **/sales-do** — Route to any sales skill by describing what you need

## Examples

### Example 1: Welcome sequence design
**User**: "I just launched a lead magnet (PDF checklist for first-time homebuyers) and need a welcome sequence. I'm using Mailchimp with about 200 subscribers so far. B2C audience."

**What the skill does**: Designs a 5-7 email welcome sequence with specific timing, subject lines, and content outlines for each email. Starts with immediate lead magnet delivery, progresses through trust-building and education, and ends with a soft pitch for the user's core offer. Includes Mailchimp-specific setup instructions using Customer Journeys.

### Example 2: Diagnosing declining engagement
**User**: "My open rates dropped from 25% to 12% over the last 3 months. I send 3 broadcasts a week to my full list of 15,000 in ActiveCampaign."

**What the skill does**: Diagnoses the root cause (likely sending to the full list without segmenting by engagement, causing ISP reputation decline). Provides a recovery plan: segment by engagement, run a re-engagement campaign for cold subscribers, suppress non-responders, reduce send frequency to unengaged segments, and rebuild sender reputation gradually. Includes ActiveCampaign-specific steps.

### Example 3: Abandoned cart automation
**User**: "How do I set up abandoned cart emails in Groove?"

**What the skill does**: Walks through setting up a cart abandonment sequence in GrooveMail triggered by GrooveSell cart events. Covers timing (first email at 1 hour, second at 24 hours, third at 48-72 hours), content strategy for each email (reminder, social proof, urgency/incentive), and exit conditions (remove from sequence on purchase).

## Troubleshooting

### "My emails are going to spam / promotions tab"
- Check authentication first: SPF, DKIM, and DMARC must be configured (use /sales-deliverability for setup)
- Stop sending to your full list — segment by engagement and only send to subscribers who have opened in the last 60-90 days
- Reduce image-to-text ratio — image-heavy emails trigger spam filters
- Avoid spam trigger words in subject lines and body
- Ask engaged subscribers to move your email to their primary inbox and reply to it — this trains ISP algorithms
- If using a new domain or IP, warm up gradually: start with 100-200 of your most engaged subscribers and increase volume by 20-30% daily

### "My click rates are low even though open rates are fine"
- Open rate is healthy but click rate is below 2%: the problem is in your email body or CTA, not deliverability
- Check CTA clarity — is there one clear, specific action? Vague CTAs like "Learn more" underperform specific ones like "Download the 5-step checklist"
- Check CTA placement — put it above the fold (visible without scrolling) and repeat at the bottom
- Check relevance — are you sending the same content to your entire list? Segment by interest and personalize content
- Test button vs. text link CTAs — the winner varies by audience
- Shorten your emails — if readers lose interest before reaching the CTA, they won't click

### "People are unsubscribing at a high rate"
- Unsubscribe rate above 0.5% per send is a warning sign
- Check frequency first — if you recently increased send frequency, that's likely the cause. Offer a "reduce frequency" option instead of only unsubscribe
- Check relevance — are you sending the same content to everyone? Segment by interest, purchase history, or engagement level
- Check expectations — did subscribers know what they were signing up for? If your opt-in promised "weekly tips" and you're sending daily promotions, there's a mismatch
- Review recent content — did a specific email spike unsubscribes? Check if it was off-topic, overly salesy, or poorly targeted
- Add a preference center so subscribers can choose topics and frequency rather than unsubscribing entirely
