---
name: sales-jotform
description: "Jotform platform help — form builder, payment forms, e-signatures, approval workflows, tables, PDF editor, app builder, API. Use when forms aren't submitting or showing 'Please Wait', conditional logic isn't triggering correctly, Stripe or PayPal payment integration won't connect, webhook isn't firing on API-created submissions, submission limits are hit and need to upgrade or optimize, approval workflow needs conditional branching, or not sure which Jotform plan fits. Do NOT use for full funnel strategy (use /sales-funnel) or general checkout optimization (use /sales-checkout)."
argument-hint: "[describe what you need help with in Jotform]"
license: MIT
version: 1.0.0
tags: [sales, forms, payments, workflows, platform]
github: "https://github.com/jotform"
---

# Jotform Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

What are you trying to do with Jotform?

- A) **Build a form** — new form, template selection, field types, conditional logic
- B) **Collect payments** — Stripe, PayPal, Square, or other gateway integration
- C) **Set up workflows** — approval chains, conditional branches, notifications
- D) **Use the API** — create forms/submissions programmatically, webhooks, SDK setup
- E) **Fix a problem** — form not submitting, payment failing, logic not working, limits hit
- F) **Integrate with other tools** — CRM sync, Zapier/Make, email platform, webhook to external system
- G) **Something else** — tables, PDF editor, app builder, reports, e-signatures

What plan are you on?
- A) Free (5 forms, 100 submissions/mo)
- B) Bronze (25 forms, 1K submissions/mo)
- C) Silver (50 forms, 2.5K submissions/mo)
- D) Gold (100 forms, 10K submissions/mo, HIPAA)
- E) Enterprise (unlimited forms, 10M submissions/mo)
- F) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Full funnel strategy (not just forms) | `/sales-funnel` — then come back for Jotform-specific form setup |
| Checkout optimization beyond forms | `/sales-checkout` — Jotform payment forms are simpler than dedicated checkout tools |
| Connecting Jotform to CRM/email/other tools | `/sales-integration` — covers webhook design, Zapier/Make, field mapping |
| Email marketing after form submission | `/sales-email-marketing` — for the nurture sequence; Jotform handles the capture |
| Lead scoring from form submissions | `/sales-lead-score` — for scoring model design; Jotform provides the signal |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

If the question is Jotform-specific, continue to Step 3.

## Step 3 — Jotform platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves the API, also **read `references/jotform-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Form design**: Start from a template (10,000+ available), then customize. Use conditional logic sparingly — conflicting show/hide conditions are the #1 support issue.
- **Payments**: Only one payment gateway per form. If you need both Stripe and PayPal, create two forms or use Jotform's built-in payment selector widget.
- **Submissions**: If hitting limits, archive old submissions or upgrade. Submissions count resets monthly.
- **API**: Webhooks only fire on form submit button — NOT on API-created submissions. If you need API-triggered notifications, poll the submissions endpoint or use a Zapier trigger instead.
- **Workflows**: Use If-Else condition elements for branching. Test each branch individually before adding complexity.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **One payment gateway per form** — you cannot have both Stripe and PayPal on the same form. Need both? Create separate forms or use Jotform's payment selector widget.
2. **Webhooks don't fire on API submissions** — submissions created via `POST /form/{formID}/submissions` do NOT trigger webhooks. Only form submit button clicks trigger them.
3. **Webhook 30-second timeout** — if your endpoint takes longer than 30 seconds to respond, the webhook will fail. Process async.
4. **Conditional logic conflicts** — multiple show/hide conditions on the same field can conflict silently. Test after every new condition.
5. **HIPAA requires Gold plan** — Gold (€129/mo) is the minimum for HIPAA compliance. Free through Silver plans cannot be used for PHI.
6. **Free plan: 5 forms, 100 submissions/mo** — this resets monthly but is strict. Archived submissions still count toward storage.
7. **EU API endpoint** — if your account is in the EU, use `eu-api.jotform.com` not `api.jotform.com`. Wrong endpoint = 401 errors.
8. **Form submission "Please Wait" freeze** — usually a browser issue. Clear cache, try incognito, disable extensions. If embedded, check for JavaScript conflicts with the host page.

## Related skills

- `/sales-funnel` — Full funnel strategy, page sequencing, and traffic-to-sale architecture.
- `/sales-checkout` — Checkout optimization — upsells, order bumps, payment plans, cart abandonment.
- `/sales-integration` — Connect Jotform to CRM, email, or other tools via webhooks, Zapier/Make, or API.
- `/sales-email-marketing` — Email marketing after form-based lead capture.
- `/sales-lead-score` — Lead scoring models using form submission data as behavioral signals.
- `/sales-lead-routing` — Route form submissions to the right sales rep or team.
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Payment form not connecting to Stripe

**User**: "I'm trying to add Stripe to my Jotform but when I click the Stripe icon nothing happens — just a spinning circle."

**Approach**:
1. Check browser — clear cache, try incognito mode, try a different browser.
2. Verify Stripe account is active and not in test mode (unless testing).
3. In Form Builder → Settings → Integrations → search "Stripe" → click to connect.
4. If spinning persists, disconnect any existing payment integration first (green dropdown → Disconnect), then reconnect Stripe.
5. Confirm the form has at least one payment field (Product List or Payment element) — Stripe won't connect to forms without a payment element.

### Example 2: Conditional logic showing wrong fields

**User**: "My form shows fields that should be hidden based on the dropdown selection."

**Approach**:
1. Go to Settings → Conditions → review all Show/Hide conditions.
2. Look for conflicting conditions — two conditions targeting the same field with different triggers.
3. Disable all conditions, then re-enable one at a time, testing after each.
4. If using "is equal to" conditions on dropdown fields, ensure the value matches exactly (case-sensitive).
5. Save and test in preview mode, not the builder view.

### Example 3: Setting up an approval workflow with conditional routing

**User**: "I need a purchase request form where orders over $500 go to a manager for approval and under $500 auto-approve."

**Approach**:
1. Create the purchase request form with an amount field.
2. Go to Workflows → create new workflow from the form.
3. Add an If-Else Condition element after the form submission trigger.
4. Set condition: "If [Amount field] is greater than 500" → route to Approval element (assign manager email).
5. Else branch → route to Email notification element (auto-approve, notify requester).
6. Add email notifications on both branches to confirm the outcome.

## Troubleshooting

### "Form stuck on 'Please Wait' after clicking submit"

- Most common cause: browser extension conflict or stale cache.
- Try: incognito mode, different browser, clear cache and cookies for jotform.com.
- If the form is embedded on another site, check for JavaScript errors in the browser console — host page scripts can interfere with Jotform's submission handler.
- If the issue is intermittent, check your submission count — hitting the monthly limit silently blocks new submissions on some plans.

### "Stripe/PayPal payment gateway won't connect"

- Log out of Jotform, clear browser cache, log back in, and retry the connection.
- Only one payment gateway per form — if another gateway is already connected, disconnect it first.
- Ensure your Stripe/PayPal account is fully activated (not just created) — unverified accounts can't connect.
- Try a different browser — Chrome extensions (especially ad blockers) can block the OAuth popup.

### "Webhook not firing after form submission"

- Verify the webhook URL is correct in Settings → Integrations → WebHooks.
- Test with a simple endpoint (e.g., webhook.site) to confirm Jotform is sending.
- If submissions are created via the API, webhooks will NOT fire — this is a known limitation. Use Zapier's "New Submission" trigger or poll the API instead.
- Check the 30-second timeout — if your endpoint is slow, the webhook will fail silently.
