---
name: sales-fathom
description: "Fathom AI note-taker platform help — REST API for pulling meeting transcripts, summaries, action items, and CRM matches into CRMs, data warehouses, or Slack. Use when transcripts not syncing to HubSpot/Salesforce, Fathom webhook signatures failing HMAC verification, bot blocked by Google Meet as a security risk, OAuth app can't include transcript inline, building a Fathom→Snowflake/BigQuery pipeline, rate-limited at 60 calls/minute, or picking between Fathom free tier vs Premium vs Team vs Business. Do NOT use for selecting between Fathom and competitors like Fireflies/Gong/Avoma (use /sales-note-taker) or reviewing specific call recordings (use /sales-call-review)."
argument-hint: "[describe what you need help with in Fathom]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, platform]
github: "https://github.com/fathomhq"
---
# Fathom Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated Fathom knowledge.

1. **What are you trying to do?**
   - A) Configure Fathom account/team/plan or understand pricing tiers
   - B) Build a backend integration (API, webhooks, OAuth, SDK)
   - C) Troubleshoot webhook delivery / HMAC signature verification
   - D) Push transcripts/summaries into CRM, data warehouse, or Slack
   - E) Troubleshoot bot joining / Google Meet security flag / Teams/Zoom capture
   - F) Evaluate Fathom vs alternatives — **route to `/sales-note-taker`**

2. **Which auth path?**
   - A) Personal API key (single user, `X-Api-Key` header)
   - B) OAuth 2.0 app (multi-tenant integration, Marketplace listing)
   - C) Not sure yet

3. **Which Fathom plan?**
   - A) Free
   - B) Premium ($20/mo, $16 annual) — for individuals
   - C) Team ($19/user/mo, 2-user min)
   - D) Business ($34/user/mo, 2-user min) — CRM sync
   - E) Special: Qualified Portfolio, nonprofit, Gong switchover

Skip-ahead rule: if the user's prompt already has the context, skip to Step 2.

## Step 2 — Route or answer directly

| User situation | Route to |
|---|---|
| "Fathom vs Fireflies vs Gong vs Avoma — which should we pick" | `/sales-note-taker {question}` |
| "Review this Fathom recording and score it" | `/sales-call-review {question}` |
| "Manager coaching program using Fathom recordings" | `/sales-coaching {question}` |
| "Build a generic Zapier/Make/n8n workflow" | `/sales-integration {question}` |
| Anything Fathom-platform-specific (API, webhooks, pricing, integrations, bot behavior) | Stay here |

When routing, use the exact command: `/sales-{skill} {user's original question}`.

## Step 3 — Fathom platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, integrations, plan-gated features, special programs.

**Read `references/fathom-api-reference.md`** for verbatim API docs — endpoints, request/response schemas, OAuth flow, webhook HMAC verification, rate limits, SDK methods.

Answer using only the relevant section. Don't dump the entire reference.

## Step 4 — Actionable guidance

Once you have the relevant reference content:

1. **For API/webhook questions** — give a concrete code snippet (cURL, Python, or TypeScript based on user's stack), note the auth header or OAuth scope required, and flag the 60-req/min rate limit if the operation loops over many recordings.
2. **For transcript pipeline design** — recommend webhook-first (create one via `POST /webhooks` with `include_transcript=true` and the right `triggered_for` array) and fall back to polling `GET /meetings?created_after=...&cursor=...` for backfill/reconciliation. For OAuth apps, always use the separate `GET /recordings/{id}/transcript` endpoint (the inline `include_transcript` param is disabled for OAuth).
3. **For plan/pricing questions** — Team/Business require a 2-user minimum and cap at max 3 CRM users per domain. CRM sync is Business-only.
4. **For bot/capture issues** — Google Meet has recently flagged Fathom's default bot mode as a security concern; point at the "Bot-free capture" setting or native Zoom/Teams recording integration as a workaround.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

*Best-effort from research (2026-04) — review pricing tier limits and plan-gated features before quoting customers.*

- **API keys are user-scoped, not workspace-scoped.** An admin's key only sees their own recordings plus team-shared ones — it does NOT unlock other users' unshared meetings. For team-wide access, use OAuth with each user's consent or list team members and have each authorize.
- **OAuth apps cannot use `include_transcript` or `include_summary` query params on `GET /meetings`.** Must fetch these separately via `GET /recordings/{recording_id}/transcript` and `GET /recordings/{recording_id}/summary`. Plan this into pipelines — it's 1 extra API call per meeting for OAuth builds.
- **Create-webhook requires at least one of `include_transcript`, `include_crm_matches`, `include_summary`, or `include_action_items`** to be `true`. An empty payload is rejected.
- **Rate limit is 60 calls/minute, user-based (not key-based).** Creating multiple API keys won't raise it. Bulk backfills must respect this — queue requests and handle `429` with the `RateLimit-Reset` header.
- **Webhook signatures use Svix-style HMAC-SHA256** with three headers (`webhook-id`, `webhook-timestamp`, `webhook-signature`). The secret string starts with `whsec_` — strip that prefix and base64-decode the remainder before HMACing. Signed content is `${id}.${timestamp}.${raw_body}`. Verify timestamp within 5 minutes to prevent replay.
- **Team/Business plans require 2-user minimum and cap at max 3 CRM users per domain.** This is a common surprise when quoting small teams.
- **SDK 0.0.30 introduced breaking changes** in both Python and TypeScript — if pinning an older version, consult `sdks/breaking-changes/*` before upgrading.
- **Google Meet security flag**: as of late 2025/early 2026 Google Meet flags Fathom's default bot mode as a security risk and may block it. Bot-free capture (native Zoom/Meet app integration) is the workaround.

## Related skills

- `/sales-note-taker` — Picking a note-taker (Fathom vs Fireflies vs Avoma vs Gong vs Otter vs Fellow vs Grain vs Sembly vs Read.ai) and cross-vendor integration patterns
- `/sales-call-review` — Review a specific Fathom recording and score against MEDDPICC/SPIN/Challenger
- `/sales-coaching` — Use Fathom recordings in coaching programs, onboarding, certifications
- `/sales-integration` — Zapier/Make/n8n workflows to move Fathom data to other tools
- `/sales-salesloft` — Pair Fathom meetings with Salesloft cadence engagement
- `/sales-zoominfo` — Alternative conversation intelligence via Chorus if Fathom doesn't fit
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Transcripts not arriving in Snowflake
**User says**: "I built a webhook receiver for Fathom but transcripts aren't showing up in Snowflake — webhooks hit but payload looks wrong"
**Skill does**:
1. Confirms webhook was created with `include_transcript=true` (otherwise payload has no transcript body)
2. Walks through HMAC verification (whsec_ prefix strip, signed content format, 5-min timestamp tolerance)
3. Recommends a reconcile-poll pattern: daily `GET /meetings?created_after={yesterday}` to catch any webhook deliveries that failed
4. Flags the 60-req/min rate limit — if reconciliation fetches many transcripts, queue with `Retry-After`
**Result**: Correct webhook payload shape + reconcile-poll fallback so no transcripts get lost.

### Example 2: Multi-tenant app OAuth design
**User says**: "Building a SaaS that lets each customer connect their Fathom — do I use API keys or OAuth?"
**Skill does**:
1. Recommends OAuth (API keys are user-scoped and don't scale to multi-tenant)
2. Lists the OAuth steps — register at `fathom.video/marketplace_applications/new`, exchange code for tokens, implement `TokenStore` with persistent storage (SQLite/Postgres/Redis), never use `newTokenStore()` in production
3. Flags that OAuth apps cannot use `include_transcript`/`include_summary` on the `/meetings` endpoint — must fetch per-recording, so plan for N extra calls per listing page
4. Notes `public_api` is currently the only OAuth scope
**Result**: OAuth architecture plan with token storage, redirect URI, and N+1 call pattern for transcripts.

### Example 3: Free tier vs Premium vs Team
**User says**: "We're 4 reps on Fathom free — what's the cheapest plan that gives us HubSpot sync?"
**Skill does**:
1. HubSpot sync requires Business tier ($34/user/mo, $25 annual)
2. 4 reps × $25 annual = $100/mo (not $20/mo as the free tier suggests)
3. Flags the 2-user minimum and max-3-CRM-users-per-domain caps
4. Suggests Qualified Portfolio Program (if they're VC-backed) — up to 2 years free
**Result**: Concrete monthly cost + applicable discount paths.

## Troubleshooting

### Webhook fires but signature verification fails
**Cause**: Not stripping `whsec_` prefix before decoding, or comparing raw bytes instead of base64-encoded strings
**Solution**: `base64.b64decode(secret.split('_')[1])` — HMAC the signed content `${webhook-id}.${webhook-timestamp}.${raw_body}` (must be raw body, NOT JSON-parsed-and-re-serialized), base64-encode the digest, compare against each signature in the `webhook-signature` header (strip version prefix `v1,` first). Verify timestamp within 5 minutes.

### `429 Too Many Requests` during bulk backfill
**Cause**: Exceeding the global 60 calls/minute per-user rate limit
**Solution**: Read the `RateLimit-Remaining` and `RateLimit-Reset` headers on every response. Queue requests at 1/second (max sustainable). For OAuth apps fetching N meetings + N transcripts + N summaries, that's 3N calls — budget accordingly. Adding more API keys to the same user account doesn't help (limit is user-based, not key-based).

### OAuth app transcripts are empty
**Cause**: OAuth apps cannot use `include_transcript=true` on `GET /meetings` — the field silently returns null
**Solution**: After listing meetings, fetch transcript per recording with `GET /recordings/{recording_id}/transcript`. Same for summary — use `GET /recordings/{recording_id}/summary`. Both endpoints support async mode via `destination_url` query param, which POSTs the result to your URL instead of returning inline (useful for large backfills that would otherwise time out).

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.
