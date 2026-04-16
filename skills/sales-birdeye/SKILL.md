---
name: sales-birdeye
description: "Birdeye platform help — reviews, listings, social media, messaging, surveys, referrals, payments, and BirdAI for multi-location businesses. Use when review requests not generating responses, Google Business Profile listings out of sync, webchat not converting visitors, survey response rates low, unsure how to set up BirdAI automation, or comparing Birdeye vs Podium vs Yext vs Reputation.com. Do NOT use for ecommerce product review apps like Judge.me or Yotpo (use /sales-customer-reviews) or B2B software reviews on G2 (use /sales-g2)."
argument-hint: "[describe what you need help with in Birdeye]"
license: MIT
version: 1.0.0
tags: [sales, reputation, reviews, listings, platform]
---

# Birdeye Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Reviews — collecting, monitoring, or responding to reviews
   - B) Listings — syncing business info across directories
   - C) Messaging — webchat, SMS, unified inbox setup
   - D) Social media — publishing, scheduling, engagement
   - E) Surveys — NPS, CSAT, or custom surveys
   - F) Referrals — customer referral program setup
   - G) Payments — collecting payments via text
   - H) BirdAI — AI agent configuration, automated responses
   - I) Integrations — CRM, PMS, or API setup
   - J) Reporting / analytics
   - K) Something else — describe it

2. **How many locations?** 1, 2-10, 11-50, 50+

3. **What industry?** Healthcare/dental, automotive, financial services, home services, retail, hospitality, other

4. **Which Birdeye plan?** Standard, Professional, Premium, or not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Online reputation strategy across tools | `/sales-online-reputation {your question}` |
| Customer feedback / NPS / CSAT strategy | `/sales-customer-feedback {your question}` |
| Ecommerce product reviews (Shopify, etc.) | `/sales-customer-reviews {your question}` |
| SMS marketing strategy | `/sales-sms-marketing {your question}` |
| Social media management strategy | `/sales-social-media-management {your question}` |
| Live chat strategy across tools | `/sales-live-chat {your question}` |
| Chatbot flow design | `/sales-chatbot {your question}` |

If the question is Birdeye-specific, answer directly using the platform reference.

## Step 3 — Birdeye platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Reviews**: Design the review request flow (timing, channel, template), set up auto-responses with BirdAI, configure review monitoring alerts
- **Listings**: Audit current listing accuracy, set up sync, fix NAP inconsistencies
- **Messaging**: Configure unified inbox, set up webchat widget, design chatbot flow
- **Surveys**: Choose metric (NPS/CSAT/CES), design survey, set up triggers
- **Integrations**: Map data flow between Birdeye and CRM/PMS, configure API or native connector

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Pricing is per-location and not publicly listed.** Standard starts ~$349/mo ($299/mo annual). Professional ~$449/mo adds webchat chatbot. Multi-location discounts exist but must be negotiated.
- **Onboarding can be time-intensive.** Multiple reviewers report dozens of video calls and 100+ hours for multi-location setups. Plan for a dedicated onboarding period.
- **Integrations can break silently.** PMS/CRM connectors may stop syncing without notification. Set up a monthly audit to verify review requests are actually being sent.
- **Chatbot requires Professional plan.** The webchat chatbot (automated inquiry handling, appointment scheduling) is not available on Standard.
- **Annual contracts are standard.** Cancellation requests during contract have been reported as difficult. Get cancellation terms in writing before signing.
- **HIPAA compliance is built in.** Birdeye works with 20K+ healthcare practices — data is HIPAA-compliant, but verify BAA terms for your specific use case.

## Related skills

- `/sales-online-reputation` — Online reputation management strategy across all tools (monitoring, responding, review generation, listings, Google Business Profile). Install: `npx skills add sales-skills/sales --skill sales-online-reputation`
- `/sales-customer-reviews` — Product review collection strategy for ecommerce (Judge.me, Yotpo, Trustpilot, G2). Install: `npx skills add sales-skills/sales --skill sales-customer-reviews`
- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC strategy across tools. Install: `npx skills add sales-skills/sales --skill sales-customer-feedback`
- `/sales-live-chat` — Live chat and chatbot strategy across tools. Install: `npx skills add sales-skills/sales --skill sales-live-chat`
- `/sales-sms-marketing` — SMS marketing strategy across tools. Install: `npx skills add sales-skills/sales --skill sales-sms-marketing`
- `/sales-social-media-management` — Social media management strategy across tools. Install: `npx skills add sales-skills/sales --skill sales-social-media-management`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

**Example 1**: "I run 5 dental offices and reviews have dried up — patients aren't responding to our email requests anymore"
→ Audit review request timing (send within 1 hour of appointment), switch to SMS-first requests (3x higher response rate), personalize with patient name and provider, set up automated BirdAI responses to positive reviews to reduce staff workload.

**Example 2**: "Our Google Business Profile shows different hours at 3 of our 12 locations and I can't figure out where the bad data is coming from"
→ Check Birdeye Listings sync status for those locations, identify which directories are pushing stale data, use Birdeye's bulk listing update to correct NAP across all directories at once, set up alerts for listing changes.

**Example 3**: "I want to set up the webchat on our website but I'm not sure if we need the chatbot or just live chat"
→ If you're on Standard, you get live chat only (good for routing to agents during business hours). If you're on Professional, the chatbot can handle after-hours inquiries, schedule appointments, and qualify leads automatically. Recommend Professional if you get significant after-hours traffic.

## Troubleshooting

**Review requests not being sent**
- Check PMS/CRM integration status — connectors break silently. Go to Integrations → verify last sync date.
- Verify patient/customer records have valid email or mobile number.
- Check if review request rules are filtering out too many contacts (wrong status, wrong location, too recent).

**Listings showing wrong information**
- Birdeye syncs to directories but doesn't own them — Google, Yelp, Facebook can override with user-submitted edits.
- Check each directory's "suggest an edit" queue for pending changes.
- For Google Business Profile specifically, verify ownership and that no other tool is pushing conflicting data.

**BirdAI responses sounding generic**
- Review and customize the AI response templates — the defaults are broad. Add industry-specific language and your brand voice.
- Set up response rules: auto-respond to 4-5 star reviews, queue 1-3 star reviews for human review.
- Check if the AI is responding in the wrong language for your market.
