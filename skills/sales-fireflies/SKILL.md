---
name: sales-fireflies
description: "Fireflies.ai platform help — AI meeting note-taker with GraphQL API, webhooks (V1 + V2), AskFred AI, real-time events, and Fred bot that joins Zoom/Meet/Teams to transcribe. Use when Fireflies transcripts not syncing to CRM, webhooks not firing or signatures failing HMAC verification, hitting 50 req/day or 60 req/min rate limits on the GraphQL API, building a transcript pipeline from Fireflies to Snowflake/BigQuery/warehouse, migrating from Webhooks V1 to V2, the Fireflies bot not joining calls or users wanting to disable auto-join, deciding between Free, Pro ($10), Business ($19), or Enterprise ($39) tier, or wiring AskFred or Real-time API into an internal app. Do NOT use for comparing Fireflies vs Fathom/Avoma/Gong or selecting a note-taker (use /sales-note-taker) or reviewing a single sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Fireflies]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, api, platform]
github: "https://github.com/firefliesai"
---

# Fireflies.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your goal?**
   - A) API integration (transcripts → CRM, warehouse, Slack, internal app)
   - B) Webhook setup or signature verification (V1 or V2)
   - C) Plan selection / pricing decision (Free, Pro, Business, Enterprise)
   - D) Bot / auto-join behavior (Fred joining or missing meetings, auto-join toggles)
   - E) AskFred AI, Real-time API, or MCP usage
   - F) Troubleshooting a specific error (auth_failed, rate limit, missing webhook)

2. **Who owns the meetings?**
   - A) Individual user (personal API key)
   - B) Team-wide (Enterprise Super Admin required for team webhooks)

3. **If API integration, destination?**
   - A) CRM (HubSpot, Salesforce) native sync
   - B) Warehouse (Snowflake, BigQuery, Redshift)
   - C) Slack / notifications
   - D) Custom app or database

Skip-ahead rule: if the prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Fireflies vs Fathom/Avoma/Gong/Otter, picking a note-taker | Run: `/sales-note-taker {user's original question}` |
| Reviewing a specific call for coaching or scoring | Run: `/sales-call-review {user's original question}` |
| Building a coaching program from call data | Run: `/sales-coaching {user's original question}` |
| General CRM integration patterns (iPaaS, Zapier, webhooks) across tools | Run: `/sales-integration {user's original question}` |

Otherwise, answer directly below.

## Step 3 — Fireflies platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, GraphQL data model, common workflows (CRM sync, warehouse pipeline, HMAC verification, Webhooks V2 migration).

**Read `references/fireflies-api-reference.md`** for verbatim GraphQL docs — every query, mutation, webhook schema, and SDK example. Grep for the specific operation you need (e.g., `transcripts(` or `uploadAudio` or `meeting.summarized`) rather than loading the whole file.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **API design rule of thumb**: GraphQL means you can request exactly the fields you need. Don't fetch `transcript.sentences` + `audio_url` + `summary` for 100 meetings in one query — GraphQL complexity limits bite. Fetch metadata in one query, then fetch transcripts per-meeting in response to webhooks.
- **Webhook choice**: For new integrations, use Webhooks V2 (`meeting.transcribed` + `meeting.summarized` events, granular subscription). V1 still works but only fires one event and uses a different payload shape.
- **Rate-limit sizing**: Free/Pro = 50 req/day — barely enough for backfills. Business/Enterprise = 60 req/min — the only realistic tier for a production pipeline. Anything beyond that needs queue-and-retry.
- **Team-wide webhooks** require Enterprise + Super Admin role. Without those, each user must configure their own webhook — doesn't scale.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research — review plan-gated features and integration details before quoting to a customer.*

- **Webhooks fire only for meeting owners** (`organizer_email`). If a non-owner attendee recorded the meeting via Fred, no webhook fires for them. Team-wide webhooks exist but require **Enterprise + Super Admin**.
- **V1 and V2 webhooks coexist.** Both use `X-Hub-Signature` with `sha256=<hex>` format, but V1 has one event (`Transcription completed`) with `meetingId/eventType` payload, while V2 supports `meeting.transcribed` and `meeting.summarized` with `meeting_id/event/timestamp`. Don't mix consumers.
- **`meeting.transcribed` ≠ `meeting.summarized`.** Transcript is ready before the AI summary is. Subscribe to both if you need action items / notes — or accept a 1-3 minute delay and fetch summary by polling after transcript.
- **Free and Pro tiers are capped at 50 API requests per day.** A single backfill of 500 historical meetings will hit this hard. Upgrade to Business or Enterprise for a 60 req/min ceiling.
- **Add to Live is 3 req per 20 min**, Share Meeting is 10 req/hour (up to 50 emails per request) — these are separate from the standard GraphQL limits.
- **Upload limits**: 200MB audio for all tiers; 100MB video on Free, 1.5GB video on paid tiers.
- **Bot auto-join complaints are common** — granting calendar access makes Fred auto-join every scheduled call. Users frequently ask how to disable this; point them to the Fireflies dashboard's Auto-join settings (calendar-level and meeting-level).
- **API key is user-scoped** — it only accesses meetings that user recorded or that were shared to them. For a shared team pipeline, use Super Admin.
- **10-second webhook response SLA** on V2. Non-2xx or a timeout marks delivery failed. Do not do heavy processing inside the webhook handler — enqueue and ack immediately.

## Related skills

- `/sales-note-taker` — Note-taker selection + cross-vendor integration patterns (Fathom, Fireflies, Avoma, Gong, Otter, Fellow, Grain, Sembly, Read.ai)
- `/sales-fathom` — Fathom platform help (REST API, Svix HMAC, OAuth, SDKs, MCP, pricing)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Transcripts not arriving in Snowflake after webhook event
**User says**: "My Fireflies webhook fires, but the transcript body is empty when I fetch it. What's wrong?"
**Skill does**:
1. Recognizes the classic "transcribed ≠ summarized" race — V1 webhook fires the moment ASR completes, often before AskFred summary is generated
2. Recommends migrating to Webhooks V2 and subscribing to `meeting.summarized` instead of (or in addition to) `meeting.transcribed` — then fetch transcript after summary event
3. Alternative: keep V1 and re-fetch from `transcript(id: ...)` query 60-180s after the webhook, with exponential backoff
4. Notes that V2 also gives timing-safe signature comparison headers (`sha256=<hex>` on `X-Hub-Signature`) — points to the Node/Python examples in `references/fireflies-api-reference.md`
**Result**: Root-caused the empty-transcript race, with two concrete fixes.

### Example 2: Picking a tier for a 30-person sales team with warehouse pipeline
**User says**: "We have 30 reps doing ~50 calls/week and want every transcript in BigQuery within 5 min. Which Fireflies tier?"
**Skill does**:
1. Rules out Free ($0) and Pro ($10/seat) — both capped at **50 API requests per day**, would break on day one of backfill
2. Recommends Business ($19/seat) for the 60 req/min ceiling, unlimited storage, and video recording
3. Flags that **team-wide webhooks require Enterprise + Super Admin** ($39/seat) — without it, each rep has to configure their own webhook
4. Suggests Enterprise if compliance (HIPAA, custom retention) or SSO/SCIM matters, otherwise Business with a shared team API key from the super-admin
5. Architecture sketch: Webhooks V2 `meeting.summarized` → Cloud Run → `transcripts(id: ...)` query → raw JSON to GCS + normalized rows to BigQuery via scheduled load
**Result**: Tier recommendation grounded in both pricing and the team-webhook gotcha.

### Example 3: Fred bot joining meetings nobody invited him to
**User says**: "Fireflies keeps joining meetings I didn't ask it to. How do I stop this?"
**Skill does**:
1. Explains the behavior — granting calendar access causes Fred to auto-join every scheduled meeting by default
2. Points to the Auto-join settings in the Fireflies dashboard: globally toggle off, or per-meeting toggle via calendar event title (`#noff`, `#onff`) or direct disable
3. For Teams/Zoom admins wanting to block Fred at org level: remove calendar OAuth scope, block the Fred user in Teams admin center, or use SSO to deprovision
4. Notes this is the #1 user complaint on G2/Reddit — not a bug, a default setting
**Result**: Tactical fix plus org-level block path.

## Troubleshooting

### Webhook doesn't fire at all
**Symptom**: A meeting completes, transcript is viewable in the dashboard, but no webhook POST is received.
**Cause**: The webhook is configured under a user account that isn't the meeting **owner** (`organizer_email`). Fireflies only fires for the owner.
**Solution**: Either (a) make the user with the configured webhook the organizer of the calendar event, or (b) upgrade to Enterprise and set up a Super Admin team-wide webhook that catches all org meetings regardless of owner. Verify your endpoint accepts POST with `Content-Type: application/json` and responds 2xx within 10 seconds.

### "auth_failed" or 401 on GraphQL calls
**Symptom**: `{"errors": [{"message": "auth_failed"}]}` on every request.
**Cause**: Authorization header missing, malformed, or using a rotated/expired key.
**Solution**: Confirm the header is exactly `Authorization: Bearer your_api_key` (note: word `Bearer` + space + key). Regenerate the key in dashboard → Integrations → Fireflies API if you suspect rotation. API keys are user-scoped — if you're trying to access a teammate's meetings, you need them shared to your account or a Super Admin key on Enterprise.

### Hitting 50 req/day on Free/Pro during a backfill
**Symptom**: After ~50 requests, every call returns a rate-limit error until the next day.
**Cause**: Free/Pro plans are intentionally capped at 50 requests **per day** (not per minute). This is not the same as Business's 60 req/min ceiling.
**Solution**: Either upgrade to Business ($19/seat/mo annual) for 60 req/min, or spread the backfill across multiple days using the `date_from`/`date_to` filter on `transcripts(...)`. For production pipelines, Business is effectively the minimum viable tier.
