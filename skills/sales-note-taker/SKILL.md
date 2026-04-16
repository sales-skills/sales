---
name: sales-note-taker
description: "Sales meeting note-taker and conversation-intelligence strategy — platform selection (Fathom, Fireflies, Avoma, Gong, Otter, Fellow, Grain, Sembly, Read.ai) plus backend API integration for auto-downloading transcripts, summaries, action items, and recordings into CRM, data warehouse, Slack, or internal tools. Use when choosing an AI note-taker for a sales team, comparing Fathom vs Fireflies pricing or features, deciding between webhook and polling for transcript ingestion, wiring meeting transcripts into HubSpot or Salesforce, building a call-intelligence data pipeline, normalizing transcript formats across multiple vendors, or debugging rate limits and auth flows in note-taker APIs. Do NOT use for reviewing a single call for coaching (use /sales-call-review) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your note-taker selection or API integration question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, api, integration, strategy]
---

# Sales Note-Taker & Conversation-Intelligence Strategy

Help the user (a) pick the right AI meeting note-taker for their sales team, and/or (b) wire its API into downstream systems (CRM, warehouse, Slack, internal tools). This skill is tool-agnostic — it references specific platforms for selection and integration patterns but focuses on cross-vendor strategy.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Pick a note-taker for my team (selection/comparison)
   - B) Integrate an existing note-taker's API (transcripts → somewhere)
   - C) Both — evaluating a platform AND planning the integration
   - D) Debugging a specific API/webhook issue

2. **What's your use case?**
   - A) Sales org — discovery/demo calls, pipeline intelligence, coaching
   - B) Customer success — onboarding, QBRs, renewal health
   - C) Cross-functional — sales + CS + internal meetings
   - D) Specific workflow — e.g., auto-log transcripts to HubSpot, push action items to Slack, pipe everything to Snowflake

3. **If integrating, where are transcripts going?**
   - A) CRM (HubSpot, Salesforce, Attio, Pipedrive)
   - B) Data warehouse (Snowflake, BigQuery, Redshift, Databricks)
   - C) Internal app / database
   - D) Slack / notifications only
   - E) Multiple destinations (fan-out)

4. **Scale?**
   - A) <50 meetings/week (single team)
   - B) 50-500/week (mid-market sales org)
   - C) 500+/week (enterprise, multi-team)

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Salesloft Conversations config | `/sales-salesloft {user's question}` |
| ZoomInfo Chorus config | `/sales-zoominfo {user's question}` |
| Seismic Meeting Intelligence config | `/sales-seismic {user's question}` |
| Meeting scheduling (not note-taking) | `/sales-meeting-scheduler {user's question}` |

Otherwise, answer directly below.

## Step 3 — Platform reference

For platform-by-platform detail — API type, auth, transcript/recording endpoints, webhook triggers, rate limits, pricing, and when to pick each — read `references/platforms.md`.

Answer using only the relevant section(s) — don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform reference — focus on the user's specific situation.

### Selection framework (if goal = selection)

Rank these in order for the user's context:

1. **Budget per seat** — Fathom (free tier + $16-$20/mo) < Fireflies ($10-$19) < Otter ($17-$30) < Avoma ($19-$79) < Gong ($1,200-$1,600/user/yr). Free tier only exists on Fathom, Fireflies, Otter, Read.ai.
2. **CRM depth** — Gong and Avoma have the deepest native CRM field-mapping and deal intelligence; Fathom Business, Fireflies Business, Fellow Business are solid; Otter is thinnest.
3. **Coaching/QA features** — Gong > Avoma > Salesloft Conversations / Chorus > Fathom/Fireflies (basic scorecards only).
4. **API completeness** — Gong (richest, webhooks + REST) > Fireflies (GraphQL + webhooks) > Avoma (REST + webhooks) > Fathom (REST + webhooks) > Grain/Sembly/Read.ai (webhooks-first). Otter is Enterprise-only API (beta).
5. **Compliance** — Gong, Avoma, Fireflies Business, Fathom Business all have SOC 2 + GDPR. For HIPAA/regulated industries, short-list drops to Gong, Avoma, Fireflies Enterprise.

**Quick picks:**
- Solo rep / tiny team on a budget → Fathom free tier
- SMB sales team, HubSpot/Salesforce-centric → Fathom Business or Fireflies Business
- Mid-market sales org wanting methodology + coaching → Avoma
- Enterprise revenue intelligence, high budget → Gong
- Non-sales general meeting transcription → Otter or Fellow

### Integration patterns (if goal = API integration)

**Webhook-first vs polling — pick webhook whenever available.**

| Pattern | When to use | Trade-off |
|---|---|---|
| Webhook push (event-driven) | Default — when vendor offers `transcription.completed` or `meeting.ended` events | Must expose a public HTTPS endpoint; must handle retries, idempotency, signature verification |
| Polling (list + fetch) | Backup for vendors without webhooks (Otter API beta), or backfilling history | Wastes API calls, higher latency, hits rate limits faster |
| Hybrid | Webhook for real-time + periodic reconcile-poll to catch missed events | Best for production — covers webhook outages |

**Standard integration architecture (works across vendors):**

1. **Ingest** — Webhook receiver (Lambda/Cloud Run/serverless) validates HMAC signature, enqueues raw payload
2. **Fetch** — Worker pulls full transcript from API using `meeting_id` / `recording_id` from payload
3. **Normalize** — Map to a common schema: `{meeting_id, external_id, vendor, started_at, duration_s, participants[], transcript[{speaker, ts, text}], summary, action_items[], recording_url}`
4. **Persist** — Raw JSON to S3/GCS (audit trail) + normalized rows to warehouse + lightweight record to CRM
5. **Fan-out** — From the normalized layer, push to Slack / Salesforce opportunity / HubSpot deal / Notion / wherever

**Auth patterns:**

- **API key in header** — Fireflies, Fathom, Sembly, Read.ai (simplest; rotate per-user or per-workspace)
- **OAuth 2.0** — Avoma, Gong (required for multi-tenant apps)
- **Workspace-scoped keys** — Otter (Enterprise only)

**Rate limits to design around:**

- Gong: 3 req/sec, 10k/day, ~1k/hr per key — batch transcript fetches, cache call metadata
- Fireflies: GraphQL complexity limits — don't request full transcript + audio URL in one query for 100 meetings
- Fathom: document per-key limits; paginate with cursor
- Avoma: standard REST pagination; webhooks preferred for volume
- Otter: Enterprise-only, undocumented beta limits — assume conservative

**Transcript format normalization:**

Every vendor returns a slightly different shape. Build a `normalize_transcript(vendor, payload)` function early. Common fields: `speaker` (email or display name), `timestamp_ms` (offset from start), `text`, `confidence` (optional). Fathom uses markdown export natively; Gong/Avoma return structured JSON with monologues; Fireflies returns sentences; Otter returns speaker-labeled paragraphs.

If you discover a gotcha, rate-limit ceiling, auth quirk, or vendor-specific payload oddity not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

- **Webhooks without signature verification are dangerous.** Every vendor offers HMAC or similar — Fireflies uses `x-hub-signature` (SHA-256), Gong signs with its own header, Avoma provides a secret. Always verify before trusting the payload.
- **"Transcript ready" ≠ "summary ready."** Vendors often fire the transcript webhook before AI summary/action-items are complete. Either wait for a separate `summary.completed` event (Fathom, Fireflies) or re-fetch a few minutes later.
- **Rate limits are the silent killer at scale.** Gong's 3 req/sec hits fast when you have 500 calls/day and need metadata + transcript + participants for each. Cache aggressively, use batch endpoints where available, and queue API calls instead of fanning out in parallel.
- **Otter's public API is Enterprise-only and in beta.** Do not plan a production integration on Otter's API unless you've confirmed Enterprise access. Zapier is the safer fallback for Otter.
- **Don't skip reconcile-polling.** Webhooks fail — network blips, deploy downtime, vendor-side bugs. Run a nightly job that lists meetings from the last 48h and fills gaps. This has saved every production integration we've seen.
- **PII and storage compliance.** Transcripts contain names, pricing, contract terms, sometimes PHI. If you're piping them to a warehouse, plan retention + access controls before the pipeline ships — not after Legal gets involved.
- **"Cheapest per seat" is misleading.** Fathom free looks great until you need Business-tier CRM sync; Fireflies Business limits monthly meetings per user. Price the plan you'd actually run, not the teaser.
- **Platform-specific conversation intelligence (Salesloft, Chorus, Seismic) ≠ replacement for a dedicated note-taker.** They're bolt-ons to existing tools. If you don't already use Salesloft/ZoomInfo/Seismic, don't buy them just for meeting recording — use a dedicated note-taker.

## Related skills

- `/sales-fathom` — Fathom platform help *(coming soon — in backlog)*
- `/sales-fireflies` — Fireflies.ai platform help *(coming soon — in backlog)*
- `/sales-avoma` — Avoma platform help *(coming soon — in backlog)*
- `/sales-gong` — Gong platform help *(coming soon — in backlog)*
- `/sales-otter` — Otter.ai platform help *(coming soon — in backlog)*
- `/sales-salesloft` — Salesloft Conversations (bolt-on conversation intelligence inside Salesloft)
- `/sales-zoominfo` — ZoomInfo Chorus (bolt-on conversation intelligence inside ZoomInfo)
- `/sales-seismic` — Seismic Meeting Intelligence (bolt-on inside Seismic)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: SMB team picking a note-taker on a budget
**User says**: "I run a 6-person SaaS sales team on HubSpot. Which AI note-taker should we pick — we don't want to pay Gong prices."
**Skill does**:
1. Rules out Gong (budget), Otter (thin CRM), Fellow (not sales-first)
2. Short-lists Fathom Business ($20/seat) and Fireflies Business ($19/seat) — both have HubSpot native sync
3. Recommends Fathom if the team values a generous free tier for individual reps and simpler setup; Fireflies if the team wants conversation search + topic analytics
4. Notes Avoma ($29/seat) as the upgrade path if they later want methodology scorecards (MEDDPICC/BANT)
**Result**: Clear 2-option shortlist with a decision tiebreaker, and an upgrade path.

### Example 2: Building a transcript pipeline to Snowflake
**User says**: "I need to pipe every Fireflies transcript into Snowflake so the data team can build dashboards. What's the architecture?"
**Skill does**:
1. Recommends webhook-first architecture (Fireflies `Transcription completed` event)
2. Sketches the flow: Fireflies webhook → API Gateway/Lambda → validate `x-hub-signature` → enqueue → worker calls `https://api.fireflies.ai/graphql` for full transcript → write raw JSON to S3 + normalized rows to Snowflake via Snowpipe
3. Flags GraphQL complexity limits — fetch transcript sentences in one query, fetch audio/summary separately
4. Adds nightly reconcile job that lists last 48h of meetings to catch missed webhooks
5. Points to `/sales-integration` if they want iPaaS (Workato, Boomi) instead of custom
**Result**: A production-shaped architecture with specific endpoints, known rate-limit pitfalls, and a reconcile safety net.

### Example 3: Webhook vs polling for Otter
**User says**: "We're on Otter and want transcripts in Slack within a minute of a call ending. Webhook or polling?"
**Skill does**:
1. Confirms Otter public API is Enterprise-only beta — asks if they have that tier
2. If yes: use Workspace Webhooks (they exist) — point directly at a Slack-forwarding service
3. If no Enterprise access: fall back to Zapier's Otter integration (pre-built Slack action)
4. Warns that Otter's beta API limits are undocumented — test end-to-end before committing
5. Suggests evaluating Fathom free tier or Fireflies free tier if the real requirement is "cheap + real-time + Slack"
**Result**: Grounded answer specific to Otter's reality, with a fallback if their tier doesn't support it.

## Troubleshooting

### Webhook fires but transcript is empty or truncated
**Symptom**: Payload arrives on `transcription.completed` but the transcript body is partial or blank
**Cause**: Most vendors fire the event as soon as ASR completes — AI summary, speaker diarization, and action items are still being generated on the vendor side
**Solution**: Either subscribe to a separate `summary.ready` / `processing.completed` event (Fathom, Fireflies offer one) or re-fetch from the meeting-detail endpoint 60-180 seconds after the initial webhook. Add a small queued retry with exponential backoff.

### Rate limits hitting 429 in production
**Symptom**: Gong or Fireflies returning 429 during transcript backfill or high-volume days
**Cause**: Backfilling in parallel or fanning out transcript fetches for every new webhook without queuing
**Solution**: Queue outbound API calls with a token-bucket rate limiter tuned below the published limit (e.g., 2 req/sec for Gong's 3/sec limit). Honor the `Retry-After` header, not a fixed sleep. Cache call metadata so you don't re-fetch it on every downstream consumer.

### Transcript format differs across vendors — downstream queries break
**Symptom**: A change from Fathom to Fireflies (or adding a second vendor) breaks every analytics query
**Cause**: No common schema — each vendor's payload is piped into the warehouse verbatim
**Solution**: Add a `normalize_transcript(vendor, payload)` step between ingest and warehouse. Store raw JSON in S3/GCS (audit/reprocessing), but write only the normalized schema to the warehouse. Common fields: `meeting_id, vendor, external_id, started_at, duration_s, participants[], transcript[{speaker, ts_ms, text}], summary_md, action_items[], recording_url`. When adding a new vendor, all you touch is the normalizer.
