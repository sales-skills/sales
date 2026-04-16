---
name: sales-sms-marketing
description: "SMS marketing strategy — opt-in collection, compliance (TCPA/GDPR), campaign types, automation triggers, segmentation, timing, two-way messaging, MMS, and analytics. Covers strategy and implementation across Omnisend, Klaviyo, Attentive, Postscript, Brevo, ActiveCampaign, Mailchimp, and more. Use when SMS campaigns have low click-through rates, opt-in list growth has stalled, subscribers are opting out too fast, you're unsure if your SMS program is TCPA/GDPR compliant, automations aren't converting, or you don't know which SMS platform to pick. Do NOT use for email marketing (use /sales-email-marketing), push notifications (use /sales-push-notification), cold outbound sequences (use /sales-cadence), or platform-specific config (use /sales-omnisend, /sales-klaviyo, /sales-brevo, etc.). For Omnisend-specific help, use /sales-omnisend. For Klaviyo-specific help, use /sales-klaviyo."
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

## Step 3 — SMS marketing reference

**Read `references/platform-guide.md`** for detailed compliance requirements, campaign types, copy best practices, platform-specific guidance, timing, and metrics.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### SMS program launch checklist

1. **Set up compliance** — configure quiet hours, opt-out handling, sender identification
2. **Create opt-in forms** — multi-step popup (email → SMS), checkout checkbox, keyword opt-in
3. **Welcome SMS** — send immediately on opt-in with a discount or value
4. **Cart abandonment SMS** — set up automation (1 hour after cart creation, stop on purchase)
5. **Post-purchase SMS** — review request or cross-sell 7-14 days after delivery
6. **First campaign** — flash sale or exclusive offer to SMS list (test with a small segment first)
7. **Measure** — track opt-in rate, click rate, revenue per message, unsubscribe rate

## Gotchas

1. **SMS consent is separate from email consent.** Never send SMS to someone who only opted into email. This violates TCPA and can result in $500-$1,500 per message in fines. Always collect explicit SMS consent.
2. **Emojis triple your message cost.** A single emoji switches encoding from GSM-7 (160 chars) to Unicode (70 chars), potentially turning 1 segment into 3. Know the cost before adding that fire emoji.
3. **Carrier filtering is real.** US carriers (T-Mobile, AT&T, Verizon) actively filter marketing SMS. Avoid URL shorteners (bit.ly is flagged), ALL CAPS, excessive punctuation, and spammy language. Use your platform's built-in link shortener instead.
4. **SMS unsubscribes are final and expensive.** Unlike email where users might re-subscribe, SMS unsubscribes are permanent. Each lost subscriber cost you $2-$5+ to acquire. Quality over quantity — send fewer, better messages.
5. **International SMS costs vary wildly.** US: ~$0.01-$0.02/message. UK: ~$0.04. Australia: ~$0.06. Some countries: $0.10+. Always check per-country rates before launching international SMS campaigns.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

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
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

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
