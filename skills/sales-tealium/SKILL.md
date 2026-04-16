---
name: sales-tealium
description: "Tealium platform help — enterprise Customer Data Platform (CDP), Real-Time CDP, Composable CDP, iQ Tag Management, EventStream, AudienceStream, 1300+ connectors, identity resolution, consent management, V3 API. Use when setting up Tealium CDP, tags not firing or loading slowly, connectors failing or data not flowing to destinations, visitor profiles not merging across channels, identity resolution producing duplicate profiles, choosing between Tealium and Segment or mParticle, configuring EventStream or AudienceStream, or working with the Tealium V3 API. Do NOT use for general email marketing (use /sales-email-marketing) or CRM data dedup without Tealium (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in Tealium]"
license: MIT
version: 1.0.0
tags: [sales, cdp, tag-management, platform]
github: "https://github.com/tealium"
---

# Tealium Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Tealium (iQ Tag Management, utag.js, mobile SDK)
   - B) Identity resolution / visitor switching / profile merging
   - C) EventStream — server-side event processing, feeds, connectors
   - D) AudienceStream — audience segmentation, enrichments, badges
   - E) Connector Marketplace — setting up or troubleshooting a connector
   - F) API integration (Collect HTTP API v3, Visitor Profile API, Visitor Privacy API)
   - G) Composable CDP / CloudStream — warehouse integration (Snowflake, BigQuery, Databricks)
   - H) Consent management and privacy (GDPR, CCPA)
   - I) Tag performance — tags slowing down my site, rogue tags
   - J) Choosing Tealium vs another CDP (Segment, mParticle, BlueConic)
   - K) Other — describe it

2. **What's your role?**
   - A) Marketer — I use AudienceStream UI for segments and audiences
   - B) Developer — I'm integrating via API, SDK, or utag.js
   - C) Data/analytics — I work with EventStream, data layer, or warehouse sync
   - D) Admin — I manage users, publish profiles, configure connectors

3. **Which Tealium products are you using?**
   - A) iQ Tag Management only
   - B) AudienceStream CDP
   - C) EventStream API Hub
   - D) Composable / CloudStream (warehouse-native)
   - E) Full stack (iQ + AudienceStream + EventStream)
   - F) Evaluating — haven't purchased yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Email campaign strategy | `/sales-email-marketing` — then come back for Tealium audience activation |
| CRM data dedup without Tealium | `/sales-data-hygiene` — Tealium is a CDP, not a CRM dedup tool |
| Retargeting ad strategy | `/sales-retargeting` — then come back for Tealium audience sync |
| Connecting Tealium to other tools | Answer here using connector reference |
| Tool integration architecture | `/sales-integration` — for webhook/Zapier patterns beyond Tealium connectors |
| Choosing between CDPs | `/sales-cdp` — cross-platform CDP comparison and selection |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Tealium platform reference

**Read `references/platform-guide.md`** for the full platform reference — products, modules, pricing, integrations, data model, connector setup, identity resolution.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **For iQ setup**: Walk through utag.js installation, data layer definition, tag configuration, load rules
- **For identity resolution**: Explain Visitor Switching modes, cross-device stitching, anonymous-to-known progression
- **For connectors**: Identify the right connector, configure actions, map attributes, set frequency capping
- **For EventStream**: Help configure event feeds, filters, transformations, and connector triggers
- **For API questions**: Point to the right API (Collect v3 for ingestion, Visitor Profile for lookups, Visitor Privacy for GDPR)
- **For warehouse sync**: Walk through Composable CDP or CloudStream setup with Snowflake/BigQuery/Databricks

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Implementation takes weeks to months** — unlike Segment (days for POC), Tealium requires careful data layer planning, tag configuration, and connector mapping. Budget 4-12 weeks for a production deployment.

2. **Collect HTTP API rate limit is 100 events/sec** — this includes bulk events (10 per call × 10 calls = 100 events). Exceeding returns HTTP 429. For higher throughput, contact your account manager.

3. **JWT bearer tokens expire after 30 minutes** — cache and reuse the token until expiry. Re-authenticating too frequently triggers throttling.

4. **Identity resolution default configs often fail complex scenarios** — visitor switching with shared devices (householding) or guest transactions can blur individual profiles. Test identity rules in QA before production.

5. **Event-based pricing scales unpredictably** — costs increase significantly as event volumes rise. Monitor event counts and set alerts before hitting overage thresholds.

6. **iQ tags load asynchronously by default** — but third-party tags can still block page rendering. Use the tag timeout feature to cancel slow tags. Place analytics tags first in the load order.

7. **Connector retry logic is 1min → 5min → 30min** — if all three retries fail, the request is dropped. Monitor error rates in the connector dashboard. Errors above threshold trigger automatic throttling.

8. **Can't open two tabs in the admin UI simultaneously** — and the session frequently expires, requiring re-login. This is a known UX limitation.

## Related skills

- `/sales-cdp` — CDP comparison and selection strategy across Tealium, Segment, BlueConic, mParticle, Treasure Data
- `/sales-blueconic` — BlueConic CDP — profile unification, segmentation, audience activation
- `/sales-treasuredata` — Treasure Data enterprise CDP — profile unification, 400+ connectors, AI Marketing Cloud
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment automation
- `/sales-retargeting` — Retargeting strategy, audience activation to ad platforms
- `/sales-integration` — Connect sales tools with webhooks, Zapier/Make, APIs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Connector data not flowing
**User says**: "I set up a Facebook connector in EventStream but no audiences are appearing in Facebook Ads Manager."
**Skill does**: Walks through connector diagnostics — check the connector run history for errors, verify segment has matching profiles, confirm attribute mapping between Tealium and Facebook Custom Audiences, check sync frequency, and test with a manual trigger.
**Result**: User identifies the misconfigured field mapping and gets audiences flowing.

### Example 2: Tags slowing down the site
**User says**: "Our site load time increased by 3 seconds after we added Tealium iQ. How do I fix this?"
**Skill does**: Explains async loading best practices, tag timeout configuration, load rule optimization, and tag prioritization. Recommends moving high-priority analytics tags to the top and setting 5-second timeouts on slower vendor tags.
**Result**: User reduces tag-related page load impact from 3 seconds to under 500ms.

### Example 3: Choosing Tealium vs Segment
**User says**: "We're evaluating Tealium and Segment for our CDP. We have a 10-person marketing team and need audience activation."
**Skill does**: Routes to `/sales-cdp` for cross-platform comparison, noting Tealium's marketer-friendly AudienceStream vs Segment's developer-first approach, implementation timelines, and pricing models.
**Result**: User has a clear framework for choosing based on their team composition and use case.

## Troubleshooting

### Visitor profiles not merging across channels
**Symptom**: Same customer has multiple Tealium visitor profiles (one from web, one from mobile, one from email)
**Cause**: No shared identifier connecting the profiles. Visitor Switching requires a matched identifier (typically email or customer ID).
**Solution**: Implement progressive identification — capture email/login on web, pass customer ID in mobile SDK. Review Visitor Switching configuration in AudienceStream. Test merge rules in QA environment before deploying to production.

### Connector action failing with 429 errors
**Symptom**: Connector shows high error rate, destination system receiving no data
**Cause**: Tealium's overload protection is throttling due to destination rate limits being exceeded
**Solution**: Enable frequency capping on the connector action to spread requests over time. Check destination's rate limits and configure Tealium to stay within them. If the destination supports bulk endpoints, switch to batch mode.

### iQ utag.js not loading on SPA
**Symptom**: Tags fire on initial page load but not on subsequent route changes in React/Angular/Vue
**Cause**: Tealium doesn't detect client-side route changes by default
**Solution**: Call `utag.view(data_layer_object)` after each SPA route change. In React, use a `useEffect` hook that triggers on route change. Ensure the data layer object includes updated page_name and page_type values for each virtual page view.
