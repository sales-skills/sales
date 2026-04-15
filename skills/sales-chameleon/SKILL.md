---
name: sales-chameleon
description: "Chameleon platform help — product tours, tooltips, microsurveys, launchers, HelpBar, interactive demos, A/B testing, Copilot AI, Ranger AI agent, automations. Use when product tours aren't showing or elements aren't targeting, users skip onboarding and activation is low, microsurvey response rates are low, not sure how to set up Chameleon tours or launchers, need to integrate Chameleon with Segment or analytics tools, or comparing Chameleon vs Pendo vs Appcues vs Whatfix. Do NOT use for push notifications (use /sales-push-notification) or email marketing automation (use /sales-email-marketing)."
argument-hint: "[describe what you need help with in Chameleon]"
license: MIT
version: 1.0.0
tags: [sales, digital-adoption, in-app, onboarding, platform]
github: "https://github.com/chamaeleonidae"
---

# Chameleon Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Chameleon (install, identify, first tour)
   - B) Product Tours — building, targeting, troubleshooting
   - C) Microsurveys — NPS, CSAT, feedback collection
   - D) Tooltips, Launchers, or HelpBar configuration
   - E) Interactive Demos or Banners/Checklists
   - F) Segmentation and targeting users
   - G) A/B testing or analytics
   - H) Integrations (Segment, HubSpot, Salesforce, analytics)
   - I) API or webhooks
   - J) Comparing Chameleon vs another tool
   - K) Something else — describe it

2. **What plan are you on?**
   - A) Startup ($279/mo)
   - B) Growth ($15K/yr)
   - C) Enterprise
   - D) Free/trial
   - E) Not sure

3. **What's the context?**
   - A) New to Chameleon — setting up from scratch
   - B) Already using it — optimizing or troubleshooting
   - C) Evaluating — comparing tools before buying

**Skip-ahead rule**: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| In-app messaging strategy (not Chameleon-specific) | `/sales-in-app-messaging [your question]` |
| NPS/CSAT/VoC program design | `/sales-customer-feedback [your question]` |
| Push notifications | `/sales-push-notification [your question]` |
| Email marketing automation | `/sales-email-marketing [your question]` |
| Connecting Chameleon to CRM/tools | `/sales-integration [your question]` |
| Comparing DAP tools broadly | `/sales-in-app-messaging [your question]` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Chameleon platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

For API questions, also **read `references/chameleon-api-reference.md`**.

## Step 4 — Actionable guidance

Focus on the user's specific situation. Key decision points:

- **Startup vs Growth**: If they need A/B testing, localization, unlimited surveys, or SAML SSO → Growth plan required ($15K/yr). Budget accordingly.
- **Element targeting**: Chameleon uses CSS selectors — if the app is a SPA with dynamic elements, recommend stable selectors (data attributes) over fragile class names.
- **MTU management**: Chameleon counts all identified users against MTU limits. Recommend filtering with `chmln.identify()` only for users who should see experiences.
- **No mobile**: Chameleon is web-only. For mobile in-app messaging, route to `/sales-in-app-messaging` for Braze/Iterable alternatives.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Steep pricing cliff.** Startup is $279/mo; Growth jumps to $15K/yr. There's no mid-tier. If you need A/B testing, rate limiting, or SAML SSO, you're on Growth. Budget for this early.
- **No native mobile.** Chameleon is web-only — no iOS/Android SDK. If you need mobile in-app messaging, you need a separate tool (Braze, Iterable, Pendo).
- **MTU counting includes inactive users.** Chameleon counts every user passed to `chmln.identify()`, even if they never see an experience. One Capterra reviewer was charged for 5,000 MTUs during beta with only 2 people testing. Filter carefully.
- **Element targeting breaks on SPA redesigns.** Tours/tooltips attached to CSS selectors break when the UI changes. Use stable `data-*` attributes. The Debugger tool helps diagnose missing elements.
- **A/B testing is Growth-only.** No experimentation on Startup plan. Workaround: manually split audiences with segments and compare, but it's manual.
- **SSO costs extra.** SAML 2.0 SSO is Growth+. Google SSO and 2FA available on Startup.
- **Microsurvey limits.** Startup: 5 microsurveys, 1 launcher. Growth: unlimited. Plan for this if running multiple feedback programs.
- **Localization is Enterprise-only.** No multi-language support on Startup or Growth.

## Related skills

- `/sales-in-app-messaging` — In-app messaging strategy across all platforms (Braze, Pendo, Appcues, Whatfix, Chameleon). Install: `npx skills add sales-skills/sales --skills sales-in-app-messaging`
- `/sales-pendo` — Pendo platform help (product analytics, guides, session replay, NPS). Install: `npx skills add sales-skills/sales --skills sales-pendo`
- `/sales-whatfix` — Whatfix platform help (enterprise DAP, Flows, Smart Tips, Mirror sandbox). Install: `npx skills add sales-skills/sales --skills sales-whatfix`
- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC strategy. Install: `npx skills add sales-skills/sales --skills sales-customer-feedback`
- `/sales-integration` — Connect sales tools with webhooks, Zapier, native integrations. Install: `npx skills add sales-skills/sales --skills sales-integration`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Tours not showing for specific users
**User says**: "I built a product tour in Chameleon but some users don't see it. How do I debug this?"
**Skill does**: Walks through the Debugger tool (browser console commands), verifying segment targeting, checking display limits, confirming `chmln.identify()` is passing required properties, and testing element targeting selectors.
**Result**: Systematic debugging checklist — segment match, display rules, element presence, SDK initialization

### Example 2: Choosing between Chameleon and Pendo
**User says**: "We're evaluating Chameleon vs Pendo for onboarding our SaaS users. Which one?"
**Skill does**: Compares Chameleon (deeper tour/tooltip customization, lower entry price, web-only) vs Pendo (retroactive analytics, mobile support, Resource Center, higher starting price). Asks about mobile needs, analytics requirements, and budget.
**Result**: Decision framework based on mobile need, analytics depth, budget, and team technical capability

### Example 3: Setting up microsurveys for NPS
**User says**: "How do I run an NPS survey inside our app using Chameleon microsurveys?"
**Skill does**: Explains microsurvey creation (NPS template), targeting (e.g., users with 30+ days tenure), rate limiting, response collection via API or webhook, and connecting responses to analytics tools via Segment.
**Result**: NPS microsurvey setup with targeting, throttling, and data pipeline to analytics

## Troubleshooting

### Tour elements not found / "missing element" error
**Symptom**: Tour step shows error or doesn't display because the target element can't be found
**Cause**: CSS selector changed (UI redesign, SPA route change), element not rendered yet, or element behind a lazy-loaded component
**Solution**: 1) Open Chameleon Debugger in browser console. 2) Check if the element exists on the page when the tour triggers. 3) Switch to stable `data-chameleon` attributes instead of class selectors. 4) For SPAs, use URL matching + element wait conditions. 5) Test on the exact page/state where the tour should appear.

### Chameleon builder not showing
**Symptom**: Installed Chameleon but can't see the builder overlay in your app
**Cause**: Script not loaded, domain not approved, ad blocker, or wrong environment
**Solution**: 1) Verify the Chameleon snippet is loading (check Network tab for `fast.chameleon.io`). 2) Approve your domain in Chameleon dashboard (Settings → Domains). 3) Disable ad blockers. 4) Ensure you're on a domain that matches your approved list, not localhost unless approved.

### High MTU count despite small user base
**Symptom**: Being charged for more MTUs than expected active users
**Cause**: `chmln.identify()` is called for every user who touches the app, including inactive, test, or bot users
**Solution**: 1) Only call `chmln.identify()` for users who should see experiences. 2) Filter out internal/test users before identify. 3) Use Chameleon's user cleanup or contact support to purge inactive profiles. 4) Monitor MTU count in dashboard and set alerts.
