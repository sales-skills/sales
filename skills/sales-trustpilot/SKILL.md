---
name: sales-trustpilot
description: "Trustpilot platform help — review collection, TrustBox widgets, TrustScore, Google Seller Ratings, Invitation API, and ecommerce integrations. Use when Trustpilot reviews not showing on website, TrustBox widget not loading, TrustScore dropping unexpectedly, setting up automated review invitations, configuring Trustpilot Shopify or WooCommerce plugin, connecting Trustpilot API to your app, reviews being removed or flagged unfairly, or deciding if Trustpilot is worth the cost for your business. Do NOT use for review collection strategy across platforms (use /sales-customer-reviews) or scraping Trustpilot reviews (use /sales-outscraper)."
argument-hint: "[describe your Trustpilot question — e.g., 'TrustBox widget not appearing on my Shopify store' or 'how to set up automated review invitations via API']"
license: MIT
version: 1.0.0
tags: [sales, reviews, reputation, social-proof, platform]
github: "https://github.com/trustpilot"
---

# Trustpilot Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up review collection (invitations, automation)
   - B) Embedding TrustBox widgets on my website
   - C) Google Seller Ratings or Rich Snippets setup
   - D) Trustpilot API integration
   - E) Managing reviews (replying, flagging, moderation)
   - F) Understanding pricing / deciding if Trustpilot is right for me
   - G) Ecommerce plugin setup (Shopify, WooCommerce, Magento)
   - H) Product reviews (SKU-level)
   - I) Something else — describe it

2. **What's your current Trustpilot plan?** Free, Starter ($99/mo), Plus ($319/mo), Premium ($799/mo), Enterprise, or not sure

3. **What platform is your website on?** Shopify, WooCommerce, Magento, custom, or other

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Review collection strategy across tools | Run: `/sales-customer-reviews {user's question}` |
| Email deliverability for review invitations | Run: `/sales-deliverability {user's question}` |
| Scraping Trustpilot reviews | Run: `/sales-outscraper {user's question}` |
| Connecting Trustpilot to CRM/tools | Run: `/sales-integration {user's question}` |
| Checkout optimization with review widgets | Run: `/sales-checkout {user's question}` |

If the question is Trustpilot-specific, continue to Step 3.

## Step 3 — Trustpilot platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, TrustBox widgets, API quick ref.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

- **Free plan users**: Maximize the 50 monthly invitations — prioritize high-value customers, use manual invitation links, embed the free TrustBox widget
- **Starter/Plus users**: Set up automated invitations via ecommerce plugin, customize invitation timing, A/B test invitation emails
- **Premium/Enterprise users**: Use the API for custom integrations, product reviews, advanced analytics
- **All plans**: Reply to every negative review within 48 hours, report genuinely fake reviews with evidence

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API access is a paid add-on** — not included in any standard plan, must be purchased separately
- **Product reviews is a paid add-on** — separate from service reviews, requires additional purchase
- **Annual contracts only** — all paid plans require 12-month commitment, no month-to-month option
- **Per-domain pricing** — each domain needs its own plan; multi-brand businesses pay per domain
- **Review invitations are capped** — Free: 50/mo, Starter: 100/mo, Plus: 300/mo, Premium: 1000/mo
- **You don't own your review page** — reviews live at trustpilot.com/review/yourdomain, not on your site
- **Official Shopify app has 1.9-star rating** — many merchants use third-party alternatives (Wally, Trust.io) for better widget rendering
- **Review removal is slow** — disputing a review can take days to months; Trustpilot decides, not the business

## Related skills

- `/sales-customer-reviews` — Review collection strategy across all platforms (Judge.me, Yotpo, Okendo, etc.). Install: `npx skills add sales-skills/sales --skill sales-customer-reviews`
- `/sales-outscraper` — Scrape Trustpilot reviews (and Google, Yelp, G2) for analysis. Install: `npx skills add sales-skills/sales --skill sales-outscraper`
- `/sales-checkout` — Checkout and product page optimization with review widgets. Install: `npx skills add sales-skills/sales --skill sales-checkout`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

**Example 1**: "My TrustBox widget isn't showing up on my Shopify store — I added the code but it's blank."
→ Check: is the bootstrap script in the `<head>`? Is the TrustBox div in the visible body (not hidden by a theme section)? Try the Trustpilot Widgets Connector Shopify app instead of manual code. Clear cache and hard refresh. If using a single-page app, re-initialize the TrustBox after route changes.

**Example 2**: "I want to send review invitations automatically after each order — how do I set that up with the API?"
→ Walk through the Invitation API: POST to `/v1/private/business-units/{id}/email-invitations` with consumerEmail, senderEmail, and serviceReviewInvitation object. Set preferredSendTime for optimal delay (7-14 days post-delivery). Note: API access is a paid add-on.

**Example 3**: "We're a small SaaS company spending $319/month on Trustpilot Plus — is it worth it or should we switch?"
→ Evaluate: Are you using all 300 monthly invitations? Do you need product reviews (separate add-on)? Consider free alternatives like Google Business Profile for service reviews, or Judge.me/Loox if you're ecommerce. Trustpilot's value is strongest for service businesses wanting brand trust signals in Google Ads (Seller Ratings).

## Troubleshooting

**TrustBox widget not displaying**
- Verify the bootstrap script (`<script>` tag) is in the `<head>` — it must load before the TrustBox div
- Ensure the TrustBox div is in the visible page body, not inside a hidden section or commented-out block
- Check if Trustpilot itself is down (status.trustpilot.com)
- Temporarily disable other plugins to check for JavaScript conflicts
- Try the Trustpilot Widgets Connector app on Shopify instead of manual embed

**Reviews being removed or flagged unfairly**
- Trustpilot auto-detects reviews that violate guidelines — check if the review contained personal info, profanity, or was from an unverifiable purchase
- Use "Find Reviewer" to verify the review came from a real customer
- File a formal report through the Business dashboard with order evidence
- Escalate via LinkedIn if standard channels are unresponsive (multiple users report this works)

**Low TrustScore despite good recent reviews**
- TrustScore uses a weighted algorithm favoring recency, frequency, and Bayesian averaging
- Old negative reviews still count — respond to them professionally to mitigate impact
- Increase review volume: more recent positive reviews dilute older negatives faster
- Check if review invitations are actually being delivered (spam folder, deliverability issues)
