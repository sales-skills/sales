---
name: sales-typeform
description: "Typeform platform help — conversational forms, surveys, quizzes, video forms, Workflow Builder, Embed SDK, Create/Responses/Webhooks API. Use when forms are hitting response limits and you need to optimize or upgrade, quiz funnel or lead magnet form isn't converting, Typeform integration with CRM or email platform isn't working, webhook isn't firing or payload is wrong, need to choose between Typeform plans, or embedding a typeform on your site looks broken. Do NOT use for general survey/feedback strategy (use /sales-customer-feedback) or full funnel architecture (use /sales-funnel)."
argument-hint: "[describe what you need help with in Typeform]"
license: MIT
version: 1.0.0
tags: [sales, forms, surveys, quizzes, platform]
github: "https://github.com/Typeform"
---

# Typeform Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

What are you trying to do with Typeform?

- A) **Build a form/survey/quiz** — new typeform, question types, logic jumps, design
- B) **Increase response rates** — form completion, UX optimization, question flow
- C) **Integrate with other tools** — CRM, email platform, Zapier, webhooks, API
- D) **Embed on my site** — Embed SDK, popup, slider, popover, hidden fields
- E) **Use the API** — Create API, Responses API, webhooks, programmatic form management
- F) **Fix a problem** — form not loading, responses missing, webhook failing, limits hit
- G) **Choose a plan** — pricing comparison, response limits, feature differences
- H) **Something else** — Workflow Builder, video forms, contacts, analytics

What plan are you on?
- A) Free (10 responses/mo)
- B) Basic ($28/mo, 100 responses/mo)
- C) Plus ($56/mo)
- D) Business ($91/mo)
- E) Growth Pro ($266/mo)
- F) Enterprise (custom)
- G) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General survey/feedback strategy (NPS, CSAT, VoC) | `/sales-customer-feedback` — covers survey design, response rate optimization, tool comparison |
| Full funnel architecture (not just the form step) | `/sales-funnel` — for end-to-end funnel strategy; come back for Typeform-specific form setup |
| Connecting Typeform to CRM/email/other tools | `/sales-integration` — covers webhook design, Zapier/Make, field mapping |
| Email marketing after form submission | `/sales-email-marketing` — for nurture sequences; Typeform handles the capture |
| Lead scoring from form submissions | `/sales-lead-score` — for scoring model design; Typeform provides the signal |
| Checkout optimization beyond forms | `/sales-checkout` — Typeform has Stripe integration but dedicated checkout tools are more capable |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

If the question is Typeform-specific, continue to Step 3.

## Step 3 — Typeform platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

If the question involves the API, also **read `references/typeform-api-reference.md`**.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Response limits**: Responses are shared across ALL forms on your account. Archive old forms, close completed campaigns, or upgrade. When you hit 100%, forms go Private automatically.
- **Logic jumps**: Use sparingly — complex branching is the #1 source of "form shows wrong question" bugs. Test each path after adding logic.
- **Embedding**: Use the Embed SDK (`@typeform/embed`) not raw iframes. The SDK handles responsive sizing, hidden fields, and load events.
- **Webhooks**: Must return 2XX within 30 seconds. For slow endpoints, acknowledge immediately and process async. Webhooks auto-disable after sustained failures.
- **API rate limit**: 2 requests/second per account across Create and Responses APIs. Queue requests if building batch operations.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Response limits are shared across ALL forms** — 100 responses/mo on Basic isn't 100 per form, it's 100 total. Multiple active campaigns burn through limits fast.
2. **Forms go Private when you hit the limit** — they automatically reopen when the next billing cycle starts or you upgrade. No warning before it happens.
3. **Webhooks auto-disable on sustained failures** — 100% failure rate within 24 hours (300+ attempts) or within 5 minutes (100+ attempts) disables the webhook silently.
4. **EU accounts use a different API base URL** — `api.eu.typeform.com` not `api.typeform.com`. Wrong endpoint = auth errors.
5. **2 requests/second rate limit** — applies per account, not per API key. Multiple integrations sharing one account can throttle each other.
6. **Webhook retry policy varies by error code** — 404/410: no retry, webhook disabled immediately. 429/408/503: retry every 2-3 min for 10 hours. Others: exponential backoff (5min → 4hrs).
7. **Removing Typeform branding requires a paid plan** — free and lower-tier plans show the Typeform badge.
8. **Python SDK is deprecated** — the official `typeform-python-sdk` is archived. Use the JS SDK (`@typeform/api-client`) or make direct REST calls.

## Related skills

- `/sales-customer-feedback` — Survey strategy, NPS/CSAT/CES, response rate optimization, VoC program design, tool comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-funnel` — Full funnel strategy — Typeform forms are the data capture step. Install: `npx skills add sales-skills/sales --skills sales-funnel`
- `/sales-jotform` — Jotform platform help — alternative form builder with payment forms, approval workflows, API. Install: `npx skills add sales-skills/sales --skills sales-jotform`
- `/sales-integration` — Connect Typeform to CRM, email, or other tools via webhooks, Zapier/Make, or API. Install: `npx skills add sales-skills/sales --skills sales-integration`
- `/sales-surveymonkey` — SurveyMonkey platform help — alternative survey tool with analytics, collectors, API. Install: `npx skills add sales-skills/sales --skills sales-surveymonkey`
- `/sales-qualtrics` — Qualtrics XM platform help — enterprise survey/experience management. Install: `npx skills add sales-skills/sales --skills sales-qualtrics`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Response limits hit mid-campaign

**User**: "I launched a customer survey and my Typeform just went Private after 3 days — I still need 200 more responses."

**Approach**: Your Basic plan has 100 responses/mo shared across all forms. Options: upgrade to Plus or Business for more responses, enable the auto-upgrade feature to automatically bump your plan when limits are reached, or close/archive other active typeforms that are consuming responses from the same pool. For future campaigns, estimate total expected responses before launch and pick the right plan tier.

### Example 2: Webhook not delivering to my endpoint

**User**: "I set up a webhook to send Typeform responses to my API but nothing is coming through."

**Approach**: Check the webhook status in Typeform settings — it may have been auto-disabled after repeated failures. Verify your endpoint returns a 2XX status within 30 seconds. Test with a simple endpoint like webhook.site first. If your endpoint is slow, return 200 immediately and process the payload async. Check whether you're using the correct webhook URL format and that your server accepts POST requests with JSON body.

### Example 3: Embedding a typeform with hidden fields for lead tracking

**User**: "I want to embed a Typeform on my landing page and pass UTM parameters as hidden fields so I know which campaign each lead came from."

**Approach**: Use the Embed SDK (`@typeform/embed`), not a raw iframe. Add hidden fields in your typeform (Settings → Hidden Fields → add `utm_source`, `utm_medium`, `utm_campaign`). In the embed code, pass the values: `createWidget("formId", { container, hidden: { utm_source: getParam("utm_source"), utm_medium: getParam("utm_medium"), utm_campaign: getParam("utm_campaign") } })`. The hidden field values appear in each response and can be pulled via the Responses API or sent to your CRM via webhook.

## Troubleshooting

### "My typeform went Private and responses stopped"

- You've hit your monthly response limit. Check Settings → Billing → Usage.
- Options: upgrade your plan, enable auto-upgrade (Settings → Billing → auto-upgrade), or archive inactive typeforms. Responses from all forms on the account share the same pool.
- Forms automatically become public again when the next billing cycle starts.

### "Webhook isn't firing on new responses"

- Check Settings → Connect → Webhooks → verify the webhook is enabled (not auto-disabled after failures).
- Test your endpoint independently — it must return a 2XX response within 30 seconds.
- 404/410 from your endpoint disables the webhook immediately with no retries. Fix the URL and re-enable.
- If using the EU data center, ensure your Typeform account region matches your API endpoint.

### "Typeform loads slowly or lags when editing"

- Complex forms with many logic jumps slow the editor. Simplify branching where possible.
- Large image/video attachments increase load time. Compress images before uploading.
- Clear browser cache and disable extensions — ad blockers and privacy extensions interfere with Typeform's editor and preview.
- If embedding, use the Embed SDK with lazy loading to defer form load until the user scrolls to it.
