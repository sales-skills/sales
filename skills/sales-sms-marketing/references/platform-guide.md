# SMS Marketing Platform Guide

## SMS vs email — when to use which

| Factor | SMS | Email |
|---|---|---|
| **Open rate** | 95-98% | 20-25% |
| **Response time** | 90 seconds avg | Hours-days |
| **Best for** | Urgency, time-sensitive, short | Long-form, visual, detailed |
| **Cost** | $0.01-$0.05/message | $0.001-$0.01/message |
| **Opt-in bar** | Higher (phone number) | Lower (email address) |
| **Unsubscribe risk** | Higher per bad message | Lower per bad message |
| **Frequency** | 4-8x per month max | 2-4x per week |

## SMS compliance essentials

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

## Campaign types and when to use them

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

## SMS copy best practices

1. **Lead with value** — the offer or news, not the brand name
2. **Keep it short** — 160 characters (1 segment) is ideal. Over 160 splits into 2+ segments at higher cost.
3. **One CTA** — single link, single action
4. **Urgency when real** — "Today only," "Ends at midnight" (never fake urgency)
5. **Personalize** — first name, product name, order number
6. **Avoid ALL CAPS** — looks spammy, triggers carrier filtering
7. **Use MMS for visual products** — product images in MMS get 15-20% higher CTR
8. **Include opt-out** — "Reply STOP to unsubscribe" (required by TCPA)

## Character encoding

- **GSM-7 encoding**: 160 characters per segment — standard Latin alphabet, numbers, basic punctuation
- **Unicode (UCS-2)**: 70 characters per segment — triggered by emojis, accented characters, non-Latin scripts
- **Impact**: One emoji in a 150-character message turns it from 1 segment ($0.01) into 3 segments ($0.03)
- **Rule**: Use emojis sparingly and know the cost. Many brands skip emojis entirely in SMS.

## Platform-specific guidance

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

## Timing optimization

| Day | Best for | Time |
|---|---|---|
| **Tuesday–Thursday** | Promotional campaigns | 10am–12pm or 6–8pm local |
| **Friday** | Weekend sale preview | 11am–1pm local |
| **Saturday** | Flash sales, shopping | 10am–12pm local |
| **Avoid** | Monday (busy), Sunday (personal time) | Never before 9am or after 8pm |

## Frequency guidelines

- **Maximum**: 4-8 SMS per month for most brands
- **Minimum**: At least 2 per month — less and subscribers forget they opted in
- **Transactional**: No frequency limit (order updates, shipping)
- **Scale up gradually**: Start at 2/month, increase as you learn what resonates
- **Segment frequency**: VIP/engaged subscribers can tolerate more; casual subscribers less

## Key metrics

| Metric | Benchmark | What it means |
|---|---|---|
| **Click-through rate** | 15-30% | Message relevance and CTA effectiveness |
| **Opt-out rate** | <2% per campaign | Content quality and frequency appropriateness |
| **Revenue per message** | $0.10-$1.00+ | Varies widely by offer and audience |
| **Opt-in rate** | 5-15% (popup), 30-50% (checkout) | Opt-in form effectiveness |
| **List growth rate** | 10-20% monthly | Opt-in form visibility and offer strength |
| **Cost per conversion** | $0.50-$5.00 | Message cost vs revenue generated |
