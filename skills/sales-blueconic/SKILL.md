---
name: sales-blueconic
description: "BlueConic platform help — Customer Data Platform (CDP), real-time profile unification, segmentation, personalization, audience activation, Jebbit Experiences, AI Workbench. Use when profiles aren't merging across channels, segments aren't syncing to ad platforms, BlueConic connections aren't importing or exporting data, you need help setting up BlueConic on a single-page app, consent and privacy objectives aren't working correctly, or you're choosing between BlueConic and another CDP. Do NOT use for general email marketing strategy (use /sales-email-marketing) or CRM data deduplication without BlueConic (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in BlueConic]"
license: MIT
version: 1.0.0
tags: [sales, cdp, personalization, platform]
github: "https://github.com/blueconic"
---

# BlueConic Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up BlueConic on my site (script tag, SPA, mobile SDK)
   - B) Profile unification / identity resolution
   - C) Segmentation and audience building
   - D) Connections — importing or exporting data to/from other tools
   - E) Personalization — dialogues, experiences, A/B testing
   - F) Jebbit Experiences (interactive content, quizzes, AI Shopping Assistant)
   - G) API integration (REST API v2, JavaScript front-end API, Event API)
   - H) MCP server setup for AI tools (Claude, Cursor, VS Code)
   - I) Privacy, consent management, GDPR/CCPA objectives
   - J) AI Workbench (Python, custom models)
   - K) Choosing BlueConic vs another CDP
   - L) Other — describe it

2. **What's your role?**
   - A) Marketer — I use the BlueConic UI
   - B) Developer — I'm integrating via API or SDK
   - C) Data/analytics — I work with segments, exports, or AI Workbench
   - D) Admin — I manage users, permissions, connections

3. **Which BlueConic plan are you on?**
   - A) Pyxis (free tier)
   - B) Standard
   - C) Professional
   - D) Enterprise
   - E) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Email campaign strategy | `/sales-email-marketing` — then come back for BlueConic segment activation |
| CRM data dedup without BlueConic | `/sales-data-hygiene` — BlueConic is a CDP, not a CRM dedup tool |
| Retargeting ad strategy | `/sales-retargeting` — then come back for BlueConic audience sync |
| Connecting BlueConic to other tools | Answer here using connections reference |
| Tool integration architecture | `/sales-integration` — for webhook/Zapier patterns beyond BlueConic connections |
| SMS/push strategy | `/sales-sms-marketing` or `/sales-push-notification` — BlueConic activates audiences, doesn't send messages |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — BlueConic platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, connections, workflows, JavaScript API, Event API, MCP server.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **For setup questions**: Walk through script tag placement, SPA handling (`handlePageView()`), or mobile SDK initialization
- **For identity resolution**: Explain profile merge rules, email-based vs cookie-based matching, cross-device stitching
- **For connections**: Identify the right connection type (named vs universal), configure import/export, set sync frequency
- **For segmentation**: Help build segments using behavioral + profile data, explain dynamic vs static segments
- **For API questions**: Point to the right API (REST v2 for server-side, JS front-end for client-side, Event API for custom events)
- **For MCP**: Walk through OAuth2 app creation, client credentials, tool configuration

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Identity resolution depends heavily on email** — if your visitors don't log in or provide email, profiles stay anonymous and fragmented. Progressive profiling (Jebbit Experiences) helps bridge this gap.

2. **SPA pages don't auto-trigger** — BlueConic doesn't detect client-side route changes. Call `blueConicClient.handlePageView()` after each navigation event in React/Angular/Vue apps.

3. **Pyxis free tier expires after 6 months** — then pricing starts at $750/month for 100K profiles. Plan capacity before the trial ends.

4. **No mobile access** — BlueConic's admin UI is desktop-only. You cannot manage segments or connections from a phone.

5. **Ease of Setup rated 6.7/10 on G2** — the platform is powerful but has a steep learning curve. Start with one use case (e.g., segment activation to one ad platform) before expanding.

6. **Profile limits are billed automatically** — if you exceed your subscription's profile threshold, you get charged overages. Monitor profile counts proactively.

7. **REST API v2 is OpenAPI-based, JSON-only** — XML is not supported. Default encoding is gzip, output is minified. Add `?prettyPrint=true` for readable responses.

8. **Connection sync is not real-time for all integrations** — some connections run on schedules (hourly, daily). Check the connection's sync frequency settings if data seems delayed.

## Related skills

- `/sales-cdp` — CDP comparison and selection strategy across Tealium, Segment, BlueConic, mParticle, Treasure Data
- `/sales-tealium` — Tealium CDP — Real-Time CDP, identity resolution, 1300+ connectors
- `/sales-treasuredata` — Treasure Data enterprise CDP — profile unification, 400+ connectors, AI Marketing Cloud
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment automation
- `/sales-retargeting` — Retargeting strategy, audience activation to ad platforms
- `/sales-integration` — Connect sales tools with webhooks, Zapier/Make, APIs
- `/sales-email-marketing` — Opt-in email marketing strategy across platforms
- `/sales-customerio` — Customer.io platform help (Journeys, Data Pipelines — often compared to BlueConic)
- `/sales-braze` — Braze platform help (Canvas Flow, Braze Data Platform — CDP-adjacent)
- `/sales-klaviyo` — Klaviyo platform help (Klaviyo Data Platform — CDP-adjacent for ecommerce)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Activating segments to ad platforms
**User says**: "I have customer segments in BlueConic but I can't get them into Facebook Ads for retargeting."
**Skill does**: Walks through the Facebook Advertising connection setup — configuring the connection, mapping BlueConic segments to Facebook Custom Audiences, setting sync frequency, and verifying audience match rates.
**Result**: User has BlueConic segments automatically syncing to Facebook Custom Audiences for retargeting.

### Example 2: Setting up BlueConic on a React SPA
**User says**: "BlueConic dialogues only fire on the first page load, not when I navigate between routes in my React app."
**Skill does**: Explains that SPAs need `blueConicClient.handlePageView()` called after each route change. Provides a React useEffect hook pattern that listens to route changes and triggers BlueConic re-evaluation.
**Result**: Dialogues and listeners fire correctly on every SPA route change.

### Example 3: Choosing BlueConic vs Segment
**User says**: "Should I use BlueConic or Twilio Segment as our CDP?"
**Skill does**: Compares positioning — BlueConic is marketer-first (no-code segmentation, personalization, audience activation), Segment is developer-first (event tracking, data routing, warehouse integration). Asks about team composition, technical resources, and primary use case to recommend.
**Result**: User has a clear recommendation based on their team and goals.

## Troubleshooting

### Profiles not merging across channels
**Symptom**: Same customer has multiple BlueConic profiles (one from web, one from email, one from mobile)
**Cause**: No shared identifier connecting the profiles. BlueConic merges on matched identifiers (typically email).
**Solution**: Implement progressive profiling to capture email from anonymous visitors. Use the JavaScript API `profile.setValue()` to set email when a user logs in or submits a form. Check profile merge rules in Settings.

### Connection not exporting data
**Symptom**: BlueConic connection shows as active but destination platform has no new data
**Cause**: Connection may be scheduled (not real-time), segment may be empty, or field mapping may be misconfigured
**Solution**: Check connection run history for errors. Verify the segment has profiles that match. Check field mapping — ensure BlueConic profile properties map to the correct fields in the destination. Run a manual export to test.

### JavaScript API not loading
**Symptom**: `window.blueConicClient` is undefined
**Cause**: BlueConic script hasn't loaded yet, or Content Security Policy is blocking it
**Solution**: Use the `onBlueConicLoaded` event listener pattern instead of checking for the client directly. If CSP is the issue, add a CSP nonce using BlueConic's nonce configuration. Check that the BlueConic script tag is present and not blocked by ad blockers.
