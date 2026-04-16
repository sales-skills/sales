---
name: sales-mparticle
description: "mParticle platform help — hybrid CDP with real-time event streaming, identity resolution, audience activation, 300+ integrations. Use when mParticle SDK not sending events, identity resolution merging wrong profiles, audience not syncing to destination, connection setup taking too long, Events API returning errors, data plan validation failing, or comparing mParticle pricing tiers. Do NOT use for choosing between CDPs (use /sales-cdp) or CRM data cleanup (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in mParticle]"
license: MIT
version: 1.0.0
tags: [sales, cdp, data-platform, platform]
github: "https://github.com/mParticle"
---

# mParticle Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your situation?**
   - A) Setting up mParticle for the first time
   - B) SDK or API integration issues (events not sending, errors)
   - C) Identity resolution problems (wrong merges, duplicate profiles)
   - D) Audience/segmentation not working as expected
   - E) Connection to a destination failing or delayed
   - F) Data planning / schema validation issues
   - G) Privacy / DSR / compliance questions
   - H) Pricing, plan limits, or cost optimization
   - I) Migrating to/from mParticle
   - J) Other — describe it

2. **Which APIs/SDKs are you using?**
   - A) Web SDK
   - B) Mobile SDK (iOS, Android, React Native, Flutter)
   - C) Events HTTP API (server-side)
   - D) Platform API (account/workspace management)
   - E) Profile API (querying user profiles)
   - F) Data Planning API
   - G) IDSync API
   - H) Not sure / haven't started yet

3. **What's your mParticle pod?**
   - A) US1 (default)
   - B) US2
   - C) EU1
   - D) AU1
   - E) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between CDPs (mParticle vs Segment vs others) | `/sales-cdp {user's question}` |
| CRM data dedup without a CDP | `/sales-data-hygiene {user's question}` |
| Connecting mParticle to email platforms | `/sales-integration {user's question}` |
| Retargeting with mParticle audiences | `/sales-retargeting {user's question}` |
| Contact enrichment before feeding to mParticle | `/sales-enrich {user's question}` |

When routing, provide the exact command.

## Step 3 — mParticle platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API overview, workflows.

**Read `references/mparticle-api-reference.md`** for detailed API endpoints, authentication, request/response formats.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Quick decision framework:**
- **First-time setup**: Start with one data source (web or mobile SDK) → one destination. Get events flowing end-to-end before adding more sources.
- **SDK issues**: Check pod-specific endpoint, API key/secret pair, and that the SDK is initialized before logging events.
- **Identity problems**: Review your Identity Strategy in the dashboard. Test with `/identify` endpoint before relying on automatic resolution.
- **Audience sync delays**: Connections can take up to 48 hours on initial setup. Check connection status in the dashboard. Real-time forwarding ≠ real-time destination processing.
- **Cost optimization**: Monitor event volume in Usage dashboard. Use Data Plans to filter noise events before they count toward billing.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Connection setup can take up to 48 hours** — the UI shows "connected" but backend provisioning may still be running. Only a CSM will tell you this; it's not documented in-product.

2. **Calculated attributes are very basic** — no multiply, divide, or arithmetic operations. If you need complex computed fields, do them in your warehouse and sync back.

3. **Token expiry is 8 hours with no revocation** — Platform/Profile API OAuth tokens can't be revoked, only expire. Cache them and refresh proactively; initial token requests take 1-3 seconds.

4. **Pod-specific endpoints are required** — using the wrong regional endpoint (US1 vs US2 vs EU1 vs AU1) silently drops events. Verify your pod in Workspace Settings.

5. **Bulk events endpoint accepts up to 100 batches** — but returns 202 even if individual batches fail. Validate batch structure before sending; check quarantine for failures.

6. **Events API rate limit is 250 events/sec** — contact support for higher limits. No self-serve rate limit increases.

7. **Profile API has 15 RPS limit** — intended for testing, not production. Implement a backend personalization service as intermediary.

8. **No self-serve pricing** — enterprise-only, typically $40K-$375K+/year. Consumption-based on events, storage, and activation credits.

## Related skills

- `/sales-cdp` — CDP comparison and selection strategy — choosing between mParticle, Tealium, Segment, RudderStack, and others
- `/sales-tealium` — Tealium platform help — enterprise CDP with 1,300+ connectors and tag management
- `/sales-rudderstack` — RudderStack platform help — warehouse-native CDP, open-source, Reverse ETL
- `/sales-blueconic` — BlueConic CDP — marketer-first profile unification and audience activation
- `/sales-treasuredata` — Treasure Data enterprise CDP — AI Marketing Cloud, 400+ connectors
- `/sales-data-hygiene` — CRM data quality — clean your data before feeding it to mParticle
- `/sales-integration` — Tool integration — connecting mParticle to CRM, email, ad platforms
- `/sales-enrich` — Contact enrichment — augment mParticle profiles with third-party data
- `/sales-retargeting` — Retargeting strategy — activate mParticle audiences to ad platforms
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Events not reaching destination
**User says**: "I set up a Facebook connection in mParticle but no events are showing up in Facebook"
**Skill does**: Checks connection status (may take up to 48 hours), verifies pod-specific endpoint, confirms data filter settings aren't blocking the events, reviews connection configuration for correct Facebook credentials.
**Result**: User identifies that the connection was still provisioning and events flow after backend setup completes.

### Example 2: Identity resolution merging wrong profiles
**User says**: "mParticle is merging two different customers into one profile because they shared a device"
**Skill does**: Reviews Identity Strategy configuration, explains deterministic vs probabilistic matching, recommends switching to a stricter strategy that prioritizes authenticated identifiers over device IDs. Suggests testing with the `/identify` and `/search` endpoints.
**Result**: User adjusts their Identity Strategy to prevent false merges from shared devices.

### Example 3: Server-side event ingestion
**User says**: "How do I send purchase events from my backend to mParticle?"
**Skill does**: Walks through Events API setup — pod-specific endpoint, Basic auth with API key/secret, batch structure with commerce events, product actions. Recommends using `/v2/bulkevents` for efficiency and explains the 128KB batch size limit.
**Result**: User has working server-side event ingestion with proper authentication and batch formatting.

## Troubleshooting

### Events API returning 403
**Symptom**: Server-side events return 403 Forbidden
**Cause**: Wrong API key/secret pair, or using Platform API credentials instead of Events API credentials
**Solution**: Events API uses separate credentials from the Platform API. Go to Setup > Inputs > select your platform > copy the API Key and Secret specifically for that input. Use Basic auth, not OAuth.

### Audiences not syncing to destination
**Symptom**: Audience created in mParticle but destination shows no members
**Cause**: Connection provisioning delay, data filter blocking audience attributes, or destination credentials expired
**Solution**: Check connection status (allow up to 48 hours for new connections). Verify data filters aren't blocking user attributes or identities the destination needs. Re-authenticate the destination connection if credentials expired.

### Data Plan validation rejecting valid events
**Symptom**: Events quarantined even though they look correct
**Cause**: Schema mismatch between Data Plan version and actual event structure — often a property type mismatch or missing required field
**Solution**: Check quarantine for specific validation errors. Compare your event payload against the Data Plan's JSON Schema. Use the `/validate` endpoint to test batches before sending. Rate limits: 3,000 req/min per account, 6,000 req/min per org.
