---
name: sales-rudderstack
description: "RudderStack platform help — warehouse-native CDP, Event Streams, Reverse ETL, Transformations, Profiles, 200+ destinations, open-source. Use when setting up RudderStack SDKs or HTTP API, events not reaching destinations, Reverse ETL syncs failing or returning stale data, transformations throwing errors or dropping events, visitor profiles not merging across channels, choosing between RudderStack and Segment, or working with the RudderStack API. Do NOT use for general CDP comparison (use /sales-cdp) or CRM data dedup without RudderStack (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in RudderStack]"
license: MIT
version: 1.0.0
tags: [sales, cdp, event-streaming, reverse-etl, platform]
github: "https://github.com/rudderlabs"
---

# RudderStack Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up RudderStack (SDK installation, source/destination config)
   - B) Events not reaching a destination (debugging event delivery)
   - C) Reverse ETL — syncing warehouse data to business tools
   - D) Transformations — writing or debugging JavaScript/Python transforms
   - E) Profiles — identity resolution, customer 360, feature computation
   - F) API integration (HTTP API, Transformations API, Test API)
   - G) Choosing RudderStack vs Segment vs another CDP
   - H) Self-hosted (open-source) deployment or migration to cloud
   - I) Other — describe it

2. **What's your role?**
   - A) Developer — integrating via SDK or API
   - B) Data engineer — managing pipelines, warehouse sync, dbt
   - C) Marketing/growth — activating audiences, destination config
   - D) Admin — managing sources, destinations, users, billing

3. **Which RudderStack products are you using?**
   - A) Event Streams only (collecting and routing events)
   - B) Reverse ETL (warehouse → business tools)
   - C) Both Event Streams and Reverse ETL
   - D) Open-source self-hosted
   - E) Evaluating — haven't set up yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between CDPs | `/sales-cdp {user's question}` |
| CRM data dedup without RudderStack | `/sales-data-hygiene {user's question}` |
| Email marketing strategy | `/sales-email-marketing {user's question}` |
| Retargeting ad strategy | `/sales-retargeting {user's question}` |
| Contact enrichment | `/sales-enrich {user's question}` |
| Connecting RudderStack to other tools via Zapier/Make | `/sales-integration {user's question}` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's question}`"

## Step 3 — RudderStack platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, SDK setup, API endpoints, deployment options.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **For SDK setup**: Walk through source creation in the dashboard, write key + data plane URL config, SDK initialization, first event test
- **For event delivery issues**: Check Live Events in dashboard, verify destination is enabled, confirm API key/tracking ID, check server mode (normal vs degraded)
- **For Reverse ETL**: Help with source warehouse connection, SQL model or audience definition, destination mapping, sync schedule
- **For transformations**: Help write JavaScript/Python transform functions, debug errors, test with sample events
- **For Profiles**: Walk through identity resolution setup, trait computation, feature store configuration
- **For API integration**: Point to the right API (HTTP for ingestion, Transformations for CRUD, Test for validation)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **HTTP API max payload is 32 KB per call, 4 MB per batch** — exceeding silently drops events. Monitor payload sizes for events with large properties objects.

2. **Server degraded/maintenance mode stops processing** — if the server enters "degraded" mode it only logs events, doesn't process them. Fix by updating `recovery_data.json` and setting Mode to "normal", then restart.

3. **Destinations only support specific event types** — sending a `track` call to Salesforce (which only supports `identify`) returns "Message type not supported". Check destination docs for supported call types before configuring.

4. **Warehouse destination retries expire after 3 hours** — if a warehouse (Snowflake, BigQuery) is down for longer, staging files are stored but may need manual replay.

5. **Open-source lacks Profiles and some connectors** — identity resolution (Profiles) and certain premium connectors are cloud-only. Self-hosted users get Event Streams and Reverse ETL core.

6. **Steep learning curve for non-technical teams** — RudderStack is developer-first. Marketing teams needing no-code audience building may prefer BlueConic or Tealium AudienceStream.

## Related skills

- `/sales-cdp` — CDP comparison and selection strategy across Tealium, Segment, BlueConic, mParticle, Treasure Data, RudderStack
- `/sales-tealium` — Tealium platform help — enterprise CDP, iQ Tag Management, 1300+ connectors
- `/sales-blueconic` — BlueConic CDP — profile unification, segmentation, audience activation
- `/sales-treasuredata` — Treasure Data enterprise CDP — 400+ connectors, AI Marketing Cloud
- `/sales-integration` — Connect sales tools with webhooks, Zapier/Make, APIs
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment automation
- `/sales-retargeting` — Retargeting strategy — activate CDP audiences to ad platforms
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Events not reaching destination
**User says**: "I set up Google Analytics as a destination but no events are showing up."
**Skill does**: Walks through debugging — check Live Events for delivery status, verify GA tracking ID in destination config, confirm the source is sending the right event types GA supports, check for transformation errors filtering events.
**Result**: User identifies the misconfigured tracking ID and gets events flowing.

### Example 2: Setting up Reverse ETL
**User says**: "I have customer data in Snowflake and want to sync segments to Braze for marketing campaigns."
**Skill does**: Walks through Reverse ETL setup — connect Snowflake as a source, write a SQL model defining the audience segment, configure Braze as a Reverse ETL destination, map fields, set sync schedule.
**Result**: User has a working Reverse ETL pipeline syncing warehouse audiences to Braze.

### Example 3: RudderStack vs Segment
**User says**: "We're a 20-person engineering team evaluating RudderStack and Segment. We care about cost and data ownership."
**Skill does**: Routes to `/sales-cdp` for cross-platform comparison, noting RudderStack's 50-80% cost savings, open-source option for full control, and warehouse-native architecture vs Segment's larger ecosystem and marketer-friendly UI.
**Result**: User has a clear comparison framework for their evaluation.

## Troubleshooting

### Events not showing up in destination
**Symptom**: Events are sent from the SDK but never appear in the destination tool
**Cause**: Common causes — destination not enabled, wrong API key/tracking ID, event type not supported by destination, transformation filtering events, server in degraded mode
**Solution**: Check Live Events in the RudderStack dashboard for delivery status and error messages. Verify destination is enabled and credentials are correct. Check if the destination supports the event type you're sending (e.g., Salesforce only supports `identify`). Review any active transformations for filtering logic. Check server mode in `recovery_data.json`.

### Reverse ETL sync returning zero records
**Symptom**: Reverse ETL sync completes but no records are sent to the destination
**Cause**: SQL model query returns empty results, or the diff detection finds no changed records since last sync
**Solution**: Test the SQL model query directly in your warehouse to verify it returns results. For first syncs, ensure "full sync" mode is selected (not incremental). Check column mapping — the destination may require specific field names or formats.

### SDK initialization failing silently
**Symptom**: RudderStack SDK loads but no events are captured
**Cause**: Missing or incorrect write key, wrong data plane URL, content security policy blocking requests
**Solution**: Verify the write key matches the source in your RudderStack dashboard. Confirm the data plane URL is correct (cloud: `https://<your-dataplane>.dataplane.rudderstack.com`, self-hosted: your server URL). Check browser console for CSP violations or network errors. For mobile SDKs, ensure the SDK is initialized before any `track`/`identify` calls.
