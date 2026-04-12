---
name: sales-sms-marketing
description: "SMS marketing strategy — opt-in collection, compliance (TCPA/GDPR), campaign types, automation triggers, segmentation, timing, two-way messaging, MMS, and analytics. Covers strategy and implementation across Omnisend, Klaviyo, Attentive, Postscript, Brevo, ActiveCampaign, Mailchimp, and more. Use when planning SMS campaigns, collecting SMS opt-ins, designing SMS automations, choosing an SMS platform, or ensuring SMS compliance. Do NOT use for email marketing (use /sales-email-marketing), push notifications (use /sales-push-notification), cold outbound sequences (use /sales-cadence), or platform-specific config (use /sales-omnisend, /sales-klaviyo, /sales-brevo, etc.). For Omnisend-specific help, use /sales-omnisend. For Klaviyo-specific help, use /sales-klaviyo."
argument-hint: "[describe your SMS marketing question or goal]"
license: MIT
version: 1.0.0
tags: [sales, sms, messaging, mobile-marketing]
---
# SMS Marketing

Help the user with SMS marketing strategy — from opt-in collection and compliance through campaign design, automation, segmentation, and analytics. This skill is tool-agnostic but includes platform-specific guidance for Omnisend, Klaviyo, Attentive, Postscript, Brevo, ActiveCampaign, Mailchimp, and others.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Strategy — planning an SMS marketing program from scratch
   - B) Opt-in collection — building an SMS subscriber list
   - C) Compliance — TCPA, GDPR, consent management
   - D) Campaign design — what to send, copy, CTAs
   - E) Automation — triggered SMS (cart abandonment, welcome, post-purchase)
   - F) Segmentation — targeting the right contacts for SMS
   - G) Timing & frequency — when and how often to text
   - H) Two-way messaging — conversational SMS
   - I) Analytics — measuring SMS performance
   - J) Tool selection — choosing an SMS marketing platform
   - K) Something else — describe it

2. **What's your business type?**
   - A) E-commerce / DTC brand
   - B) SaaS / software
   - C) Local business / retail
   - D) B2B services
   - E) Creator / media
   - F) Other

3. **What platform are you using (or considering)?**
   - A) Omnisend
   - B) Klaviyo
   - C) Attentive
   - D) Postscript
   - E) Brevo
   - F) ActiveCampaign
   - G) Mailchimp
   - H) Not decided yet
   - I) Other

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Strategy and approach

### When SMS marketing works best

SMS is highest-value for:
- **Time-sensitive offers** — flash sales, limited drops, expiring discounts
- **Transactional updates** — order confirmation, shipping, delivery
- **Cart abandonment** — 2-3x higher conversion than email for cart recovery
- **Welcome offers** — immediate discount delivery after opt-in
- **VIP/loyalty** — exclusive early access for top customers
- **Back-in-stock** — instant notification for high-demand products

SMS is lowest-value for:
- Long-form content (use email)
- Cold outreach (use email or LinkedIn)
- Non-time-sensitive announcements (use email or push)
- B2B enterprise sales (SMS is primarily B2C/DTC)

### SMS vs email — when to use which

| Factor | SMS | Email |
|---|---|---|
| **Open rate** | 95-98% | 20-25% |
| **Response time** | 90 seconds avg | Hours-days |
| **Best for** | Urgency, time-sensitive, short | Long-form, visual, detailed |
| **Cost** | $0.01-$0.05/message | $0.001-$0.01/message |
| **Opt-in bar** | Higher (phone number) | Lower (email address) |
| **Unsubscribe risk** | Higher per bad message | Lower per bad message |
| **Frequency** | 4-8x per month max | 2-4x per week |

### SMS compliance essentials

**TCPA (US)**:
- **Express written consent required** — checkbox, popup, or keyword opt-in with clear disclosure
- **Quiet hours** — no messages before 8 AM or after 9 PM recipient's local time
- **Opt-out** — must honor STOP/UNSUBSCRIBE immediately, reply confirming removal
- **Identification** — every message must identify the sender (brand name)
- **Penalties** — $500-$1,500 per unsolicited message

**GDPR (EU/UK)**:
- Requires explicit consent specifically for SMS marketing
- Right to withdraw consent at any time
- Must state the purpose at opt-in

**CTIA (US carrier guidelines)**:
- Message frequency disclosure at opt-in ("Up to 4 msgs/month")
- "Msg & data rates may apply" disclosure
- Privacy policy link at opt-in

**Consent collection best practices**:
- Use a dedicated SMS opt-in (don't bundle with email consent)
- Multi-step popup: collect email first, then ask for phone number with clear SMS disclosure
- Keyword opt-in: "Text JOIN to 55555" (for in-store, packaging, ads)
- Checkout opt-in: checkbox during purchase (high-intent, high conversion)
- Double opt-in: send confirmation SMS ("Reply YES to confirm") — reduces complaints

### Campaign types and when to use them

| Campaign Type | Trigger | Example | Frequency |
|---|---|---|---|
| **Welcome** | New SMS opt-in | "Thanks for joining! Here's 10% off: [link]" | Once |
| **Flash sale** | Manual / scheduled | "4-HOUR FLASH: 30% off everything. Shop now: [link]" | 1-2x/month |
| **Cart abandonment** | Cart created, not purchased | "You left something behind! Complete your order: [link]" | Per event |
| **Back-in-stock** | Product restocked | "Good news — [product] is back! Grab it: [link]" | Per event |
| **Order updates** | Order placed/shipped/delivered | "Your order shipped! Track it: [link]" | Per event |
| **Post-purchase** | X days after purchase | "How's your [product]? Leave a review: [link]" | Per order |
| **Win-back** | No purchase in 60-90 days | "We miss you! Here's 20% off your next order: [link]" | 1x per cycle |
| **VIP/loyalty** | Segment-based | "VIP early access: New collection drops in 1 hour: [link]" | 2-4x/month |
| **Birthday** | Date-based | "Happy birthday! Enjoy 25% off today only: [link]" | 1x/year |

### SMS copy best practices

1. **Lead with value** — the offer or news, not the brand name
2. **Keep it short** — 160 characters (1 segment) is ideal. Over 160 splits into 2+ segments at higher cost.
3. **One CTA** — single link, single action
4. **Urgency when real** — "Today only," "Ends at midnight" (never fake urgency)
5. **Personalize** — first name, product name, order number
6. **Avoid ALL CAPS** — looks spammy, triggers carrier filtering
7. **Use MMS for visual products** — product images in MMS get 15-20% higher CTR
8. **Include opt-out** — "Reply STOP to unsubscribe" (required by TCPA)

### Character encoding matters

- **GSM-7 encoding**: 160 characters per segment — standard Latin alphabet, numbers, basic punctuation
- **Unicode (UCS-2)**: 70 characters per segment — triggered by emojis, accented characters, non-Latin scripts
- **Impact**: One emoji in a 150-character message turns it from 1 segment ($0.01) into 3 segments ($0.03)
- **Rule**: Use emojis sparingly and know the cost. Many brands skip emojis entirely in SMS.

## Step 3 — Platform-specific guidance

### In Omnisend
- **SMS as part of omnichannel**: SMS, email, and web push in one platform — mix channels in automation workflows
- **SMS credits**: Pro plan includes credits; Standard plan requires paid add-on. Credits vary by country (US: ~$0.015/SMS, UK: ~$0.04/SMS)
- **Opt-in collection**: Multi-step popups (email → SMS), checkout opt-in, keyword opt-in
- **Automation**: SMS as a step in any workflow — cart abandonment, welcome, post-purchase, browse abandonment
- **Two-way SMS**: Contacts can reply; replies visible in Omnisend
- **MMS**: Supported — include images for product-focused messages
- **Compliance**: Built-in quiet hours, STOP keyword handling, consent tracking
- **Best for**: E-commerce brands on Shopify/WooCommerce who want email + SMS in one affordable platform
- **Platform skill**: `/sales-omnisend`

### In Klaviyo
- **SMS as a Flow step**: Add SMS/MMS steps to any Klaviyo Flow alongside email
- **Smart Sending**: Frequency cap prevents over-messaging across channels
- **Segmentation**: Use Klaviyo's predictive analytics (CLV, churn risk) to target SMS to highest-value contacts
- **Compliance**: Built-in TCPA compliance, quiet hours, double opt-in option
- **SMS attribution**: Revenue attribution per SMS message
- **Cost**: SMS included in Email + SMS plan ($35/mo for 500 profiles). Per-message cost on top.
- **Best for**: E-commerce brands (especially Shopify) already using Klaviyo for email who want to add SMS
- **Platform skill**: `/sales-klaviyo`

### In Attentive
- **SMS-first platform**: Purpose-built for SMS marketing (not email-first with SMS added on)
- **Two-way conversations**: Advanced conversational SMS with AI-powered responses
- **Subscriber growth tools**: Text-to-join, QR codes, social opt-in, checkout opt-in
- **Compliance**: Industry-leading TCPA compliance — built-in legal review of SMS content
- **Integrations**: Shopify, Salesforce Commerce Cloud, BigCommerce, Magento
- **Cost**: Enterprise pricing — contact for quote. Best for mid-market+ brands
- **Best for**: Brands where SMS is a primary revenue channel (fashion, beauty, food, beverage)

### In Postscript
- **Shopify-native**: Deep Shopify integration — purpose-built for Shopify stores
- **Revenue attribution**: Track revenue per SMS message and automation
- **Subscriber growth**: Popups, keywords, checkout, QR codes
- **Automation**: Cart abandonment, browse abandonment, welcome, post-purchase, win-back
- **Cost**: Free plan (up to 25 subscribers), Growth from $25/mo + per-message
- **Best for**: Shopify-only stores that want a dedicated SMS tool separate from their email platform

### In Brevo
- **Multi-channel**: SMS alongside email, WhatsApp, push in one workflow
- **Credits-based**: Buy SMS credits separately. Per-message cost varies by country.
- **Sender ID**: Customizable sender name/number (varies by country regulation)
- **Automation**: SMS as a step in Brevo's Journey workflows
- **Transactional SMS**: API for order confirmations, OTP, password resets
- **Best for**: Teams already on Brevo who want SMS without adding another vendor
- **Platform skill**: `/sales-brevo`

### In ActiveCampaign
- **SMS in automations**: Send SMS as automation workflow steps alongside email
- **Two-way SMS**: Receive replies and trigger automations from SMS responses
- **Compliance**: Built-in opt-out management
- **Limitation**: SMS is not available in all countries. Check ActiveCampaign's SMS country list.
- **Best for**: Teams already on ActiveCampaign who want basic SMS automation
- **Platform skill**: `/sales-activecampaign`

### In Mailchimp
- **SMS Marketing**: Add-on for paid plans ($20/1,000 credits)
- **37 countries supported**: Check Mailchimp's country availability list
- **Customer Journeys**: SMS as a step in Customer Journey Builder automations
- **Limitation**: Newer SMS product — less mature than Klaviyo/Attentive/Omnisend for SMS
- **Best for**: Teams already on Mailchimp who want basic SMS without switching platforms
- **Platform skill**: `/sales-mailchimp`

### In SendPulse
- **Bulk SMS campaigns**: Send personalized bulk SMS with merge fields (name, order details, custom variables)
- **Automation 360**: Trigger SMS from email events, chatbot events, CRM actions, and custom events — SMS lives alongside email, push, and chatbot in one automation flow
- **Sender ID registration**: Register a branded sender ID for recipient trust (availability varies by country regulation)
- **Contacts management**: Import/manage SMS contacts, maintain a blacklist, segment by engagement
- **API**: `POST /sms/send` (single/bulk), `GET /sms/campaigns` (list campaigns), `POST /sms/contacts/add` (add contacts) — full programmatic control
- **Delivery reports and analytics**: Per-campaign delivery, click, and cost reporting
- **200+ countries supported**: Wide international reach — check per-country rates before sending
- **Pay-per-message pricing**: No monthly SMS fee — you only pay per message sent, making it cost-effective for lower-volume or bursty senders
- **Best for**: Teams already using SendPulse for email/chatbots who want to add SMS without a new vendor, or businesses needing affordable international SMS
- **Platform skill**: `/sales-sendpulse`

## Step 4 — Actionable guidance

### SMS program launch checklist

1. **Set up compliance** — configure quiet hours, opt-out handling, sender identification
2. **Create opt-in forms** — multi-step popup (email → SMS), checkout checkbox, keyword opt-in
3. **Welcome SMS** — send immediately on opt-in with a discount or value
4. **Cart abandonment SMS** — set up automation (1 hour after cart creation, stop on purchase)
5. **Post-purchase SMS** — review request or cross-sell 7-14 days after delivery
6. **First campaign** — flash sale or exclusive offer to SMS list (test with a small segment first)
7. **Measure** — track opt-in rate, click rate, revenue per message, unsubscribe rate

### Timing optimization

| Day | Best for | Time |
|---|---|---|
| **Tuesday–Thursday** | Promotional campaigns | 10am–12pm or 6–8pm local |
| **Friday** | Weekend sale preview | 11am–1pm local |
| **Saturday** | Flash sales, shopping | 10am–12pm local |
| **Avoid** | Monday (busy), Sunday (personal time) | Never before 9am or after 8pm |

### Frequency guidelines

- **Maximum**: 4-8 SMS per month for most brands
- **Minimum**: At least 2 per month — less and subscribers forget they opted in
- **Transactional**: No frequency limit (order updates, shipping)
- **Scale up gradually**: Start at 2/month, increase as you learn what resonates
- **Segment frequency**: VIP/engaged subscribers can tolerate more; casual subscribers less

### Key metrics

| Metric | Benchmark | What it means |
|---|---|---|
| **Click-through rate** | 15-30% | Message relevance and CTA effectiveness |
| **Opt-out rate** | <2% per campaign | Content quality and frequency appropriateness |
| **Revenue per message** | $0.10-$1.00+ | Varies widely by offer and audience |
| **Opt-in rate** | 5-15% (popup), 30-50% (checkout) | Opt-in form effectiveness |
| **List growth rate** | 10-20% monthly | Opt-in form visibility and offer strength |
| **Cost per conversion** | $0.50-$5.00 | Message cost vs revenue generated |

## Gotchas

1. **SMS consent is separate from email consent.** Never send SMS to someone who only opted into email. This violates TCPA and can result in $500-$1,500 per message in fines. Always collect explicit SMS consent.
2. **Emojis triple your message cost.** A single emoji switches encoding from GSM-7 (160 chars) to Unicode (70 chars), potentially turning 1 segment into 3. Know the cost before adding that fire emoji.
3. **Carrier filtering is real.** US carriers (T-Mobile, AT&T, Verizon) actively filter marketing SMS. Avoid URL shorteners (bit.ly is flagged), ALL CAPS, excessive punctuation, and spammy language. Use your platform's built-in link shortener instead.
4. **SMS unsubscribes are final and expensive.** Unlike email where users might re-subscribe, SMS unsubscribes are permanent. Each lost subscriber cost you $2-$5+ to acquire. Quality over quantity — send fewer, better messages.
5. **International SMS costs vary wildly.** US: ~$0.01-$0.02/message. UK: ~$0.04. Australia: ~$0.06. Some countries: $0.10+. Always check per-country rates before launching international SMS campaigns.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-omnisend` — Omnisend platform help (SMS + email + push in one ecommerce platform)
- `/sales-klaviyo` — Klaviyo platform help (SMS + email for e-commerce, predictive analytics)
- `/sales-brevo` — Brevo platform help (SMS + email + WhatsApp + push)
- `/sales-activecampaign` — ActiveCampaign platform help (SMS in marketing automation)
- `/sales-mailchimp` — Mailchimp platform help (SMS add-on)
- `/sales-sendpulse` — SendPulse platform help (SMS + email + chatbots + Automation 360)
- `/sales-email-marketing` — Email marketing strategy (coordinate SMS + email cadence)
- `/sales-push-notification` — Push notification strategy (another engagement channel)
- `/sales-audience-growth` — Growing your subscriber list (feeds SMS opt-in)
- `/sales-checkout` — Checkout optimization (checkout is a key SMS opt-in point)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Launching SMS for a Shopify store
**User says**: "I run a Shopify clothing store on Omnisend. I want to start SMS marketing. Where do I begin?"
**Skill does**: Designs a launch plan — multi-step popup for SMS opt-in (collect email first, then phone), welcome SMS with 10% discount, cart abandonment SMS at 1 hour, and a weekly flash sale campaign. Explains Omnisend SMS credit costs and TCPA compliance setup. Recommends starting with 2 SMS/month and scaling based on engagement.
**Result**: User has an SMS launch plan with opt-in forms, 3 automations, and compliance configured

### Example 2: Choosing an SMS platform
**User says**: "We're on Klaviyo for email and considering adding SMS. Should we use Klaviyo SMS or switch to Attentive?"
**Skill does**: Compares Klaviyo SMS (integrated, simpler, lower cost, good for email+SMS in one place) vs Attentive (SMS-first, better conversational features, more growth tools, higher cost). At most volumes, recommends Klaviyo SMS to start — already integrated, no new vendor, predictive segments work across channels. Suggests evaluating Attentive if SMS becomes >20% of revenue.
**Result**: Clear recommendation with evaluation criteria for when to reconsider

### Example 3: SMS compliance audit
**User says**: "I want to make sure our SMS marketing is TCPA-compliant. What should I check?"
**Skill does**: Provides a TCPA compliance checklist — verifies opt-in collection method includes required disclosures, checks quiet hours configuration, confirms STOP keyword handling, reviews message content for sender identification, checks consent records are stored. Flags common violations (bundled email/SMS consent, missing frequency disclosure, no quiet hours).
**Result**: User has a complete TCPA compliance audit with specific items to fix

## Troubleshooting

### SMS messages not being delivered
**Symptom**: Messages show as sent but contacts report not receiving them
**Cause**: Carrier filtering, invalid phone numbers, or toll-free number not verified
**Solution**: Check for carrier filtering triggers (URL shorteners, spammy content, ALL CAPS). Verify phone numbers are valid and in E.164 format. If using a toll-free number (US), ensure it's verified with carriers. Check your platform's delivery reports for specific error codes.

### High opt-out rate (>5% per campaign)
**Symptom**: Significant unsubscribes after each SMS campaign
**Cause**: Sending too frequently, irrelevant content, or message expectations mismatch
**Solution**: Reduce frequency (max 4-8/month). Segment by purchase behavior — don't send the same message to everyone. Review opt-in disclosure — if you promised "exclusive offers" but send generic promos, there's a mismatch. Survey a sample of unsubscribers to understand the reason.

### Low click-through rate (<5%)
**Symptom**: Messages delivered but few clicks on links
**Cause**: Weak CTA, no urgency, link not compelling, or wrong audience segment
**Solution**: Lead with the value/offer, not the brand name. Add real urgency ("today only," "2 hours left"). Use MMS with product images for visual products. Test shorter messages (under 160 chars). Segment to people who recently browsed or purchased in the relevant category.
