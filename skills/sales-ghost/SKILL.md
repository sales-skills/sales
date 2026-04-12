---
name: sales-ghost
description: "Ghost platform help — publishing, newsletters, memberships, Stripe subscriptions, themes, Mailgun email delivery, Content API, Admin API, and migration. Use when Ghost newsletters aren't being delivered, Stripe payments aren't syncing with member status, Mailgun setup is failing, theme customization isn't working, migrating from Substack or WordPress, newsletter analytics look wrong, membership tiers aren't gating content correctly, or Ghost API calls are returning errors. Do NOT use for email marketing strategy (use /sales-email-marketing), newsletter monetization strategy (use /sales-newsletter), or growing your subscriber list (use /sales-audience-growth)."
argument-hint: "[describe what you need help with in Ghost]"
license: MIT
version: 1.0.0
tags: [sales, publishing, newsletter, membership, platform]
github: "https://github.com/TryGhost"
---

# Ghost Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Newsletter setup — Mailgun config, sending, delivery issues
   - B) Membership & subscriptions — Stripe integration, tiers, paid content gating
   - C) Content publishing — editor, scheduling, email-only posts, cards
   - D) Theme customization — Handlebars templates, custom settings, marketplace themes
   - E) Migration — from Substack, WordPress, Medium, Mailchimp, or other platforms
   - F) API integration — Content API, Admin API, webhooks, custom integrations
   - G) Analytics — newsletter open/click rates, member growth, engagement
   - H) Self-hosting — installation, updates, configuration, performance
   - I) Ghost(Pro) — plan selection, billing, limits, custom SSL
   - J) Something else

2. **How are you running Ghost?**
   - A) Ghost(Pro) managed hosting
   - B) Self-hosted (Docker, DigitalOcean, AWS, etc.)
   - C) Third-party managed host (MagicPages, Pikapods, etc.)
   - D) Haven't set up yet — planning

3. **What's your goal?** (describe your specific question or issue)

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

If the request maps to a strategy skill, route with the exact command:

| Problem domain | Route to |
|---|---|
| Email marketing strategy (sequences, segmentation, automation) | "This is an email marketing question — run: `/sales-email-marketing {user's question}`" |
| Newsletter monetization (paid tiers, finding sponsors) | "This is a monetization question — run: `/sales-newsletter {user's question}`" |
| Growing subscriber/member list | "This is a growth question — run: `/sales-audience-growth {user's question}`" |
| Membership site structure, course content, retention | "This is a membership question — run: `/sales-membership {user's question}`" |
| Email deliverability (SPF, DKIM, DMARC beyond Mailgun) | "This is a deliverability question — run: `/sales-deliverability {user's question}`" |
| Connecting Ghost to CRM or other tools via Zapier/API | "This is an integration question — run: `/sales-integration {user's question}`" |

If the question is Ghost-specific, continue to Step 3.

## Step 3 — Ghost platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, Mailgun setup, Stripe configuration, theme development, migration guides.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

For implementation questions, give step-by-step instructions tailored to their hosting type (Ghost(Pro) vs self-hosted). Reference the API docs in `references/ghost-api-reference.md` when they need programmatic access.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Starter plan has no paid subscriptions** — you need Publisher ($29/mo) or higher to accept payments from members. Starter only supports free newsletters.
2. **Mailgun is the only bulk email provider** — Ghost does not support SES, SendGrid, or other providers for newsletter sends. Self-hosters on small lists hit the Mailgun free tier limit (100 emails/day). Budget $15-35/mo for Mailgun on top of hosting.
3. **Stripe subscription sync can lag** — members who pay in Stripe may show as "free" in Ghost temporarily. Check the webhook connection in Ghost Admin → Integrations → Stripe if member statuses aren't updating.
4. **No digest/weekly newsletter** — Ghost sends one email per published post. There's no built-in way to batch multiple posts into a weekly digest. Workaround: manually create a weekly roundup post.
5. **Newsletter analytics are approximate** — open tracking relies on pixel loading (blocked by many email clients). Click tracking is more reliable. Don't make decisions based solely on open rates.
6. **Migration breaks embedded content** — Twitter/X embeds, custom HTML blocks, and some media may not render correctly in email after migrating from Substack or WordPress. Test email sends before going live.
7. **Theme changes require Handlebars knowledge** — Ghost uses Handlebars templating, not a visual drag-and-drop builder. Custom themes need HTML/CSS/Handlebars skills. Use marketplace themes if you don't code.
8. **Self-hosted requires CLI updates** — Ghost doesn't auto-update. Run `ghost update` via the Ghost CLI regularly. Skipping major versions can make upgrades painful.

## Related skills

- `/sales-newsletter` — Newsletter monetization (paid subscriptions, sponsorships, premium tiers, pricing strategy)
- `/sales-email-marketing` — Email marketing strategy (campaigns, automation, segmentation across platforms)
- `/sales-audience-growth` — Growing your subscriber/member list (lead magnets, cross-promotion, referrals)
- `/sales-membership` — Membership site strategy (course structure, retention, pricing models)
- `/sales-deliverability` — Email deliverability (SPF, DKIM, DMARC, domain warmup, inbox placement)
- `/sales-integration` — Connecting Ghost to CRM and other tools via Zapier, Make, or API
- `/sales-kit` — Kit platform help (alternative newsletter platform)
- `/sales-mailerlite` — MailerLite platform help (alternative newsletter/email platform)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Mailgun delivery issues
**User says**: "My Ghost newsletter emails aren't being delivered to subscribers"
**Skill does**: Checks Mailgun configuration in Ghost Admin, verifies domain DNS records (SPF, DKIM, CNAME), checks Mailgun dashboard for bounces/complaints, reviews Ghost(Pro) vs self-hosted differences, troubleshoots common Mailgun free tier limits
**Result**: User identifies the delivery bottleneck and fixes their Mailgun configuration

### Example 2: Setting up paid memberships
**User says**: "I want to charge $10/month for premium content on my Ghost blog"
**Skill does**: Confirms plan supports paid subscriptions (Publisher+), walks through Stripe Connect setup, configures membership tiers (free + paid), sets up content gating with the public preview card, creates an offer for founding members
**Result**: User has a working paid membership with Stripe billing and gated content

### Example 3: Migrating from Substack
**User says**: "I'm moving my newsletter from Substack to Ghost — how do I keep my subscribers?"
**Skill does**: Walks through Substack export, Ghost import process, Stripe subscription migration (if paid), DNS/domain transfer, URL redirect setup (Substack /p/ → Ghost slug), email template testing
**Result**: User migrates content, subscribers, and paid members with minimal disruption

## Troubleshooting

### Stripe payments not reflecting in Ghost
**Symptom**: Member pays in Stripe but Ghost shows them as "free"
**Cause**: Stripe webhook not connected or webhook events failing
**Solution**: Go to Ghost Admin → Settings → Membership → Stripe. Disconnect and reconnect Stripe. Check Stripe Dashboard → Developers → Webhooks for failed events. Ensure the webhook URL matches your Ghost domain.

### Newsletter shows 0% open rate
**Symptom**: Newsletter sent successfully but analytics show zero opens
**Cause**: Email clients blocking tracking pixels (Apple Mail Privacy Protection, Gmail proxy)
**Solution**: Open rates are increasingly unreliable. Focus on click rates instead. Check Mailgun dashboard for actual delivery stats. If Mailgun shows delivered but Ghost shows 0%, the tracking pixel may be stripped.

### Ghost(Pro) plan limits hit unexpectedly
**Symptom**: Can't add more members, newsletters, or staff users
**Cause**: Plan limits enforced — Starter: 1 staff/1 newsletter/1K members, Publisher: 3 staff/3 newsletters
**Solution**: Upgrade plan in Ghost Admin → Settings → Pro. If approaching member limits, clean up inactive free members or upgrade to Business tier.
