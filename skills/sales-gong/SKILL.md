---
name: sales-gong
description: "Gong platform help — Revenue AI OS with call recording, transcript analytics, Smart Trackers, coaching scorecards, deal boards, Gong Forecast, Gong Engage sequences, Gong Agents, REST API (3 req/sec, 10k/day), webhook automation rules with JWT signing, CRM sync (Salesforce/HubSpot/Dynamics), MCP support. Use when setting up Gong call recording or transcript analysis, Smart Trackers returning false positives or missing key moments, Gong API integration for transcript export or deal data, configuring webhook automation rules, Gong Forecast not matching pipeline reality, Gong Engage sequences slow or buggy, coaching scorecards not reflecting methodology, or CRM sync delays. Do NOT use for picking a note-taker (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your Gong question — e.g., 'Smart Trackers flagging too many false positives' or 'pipe transcripts to Snowflake via API']"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, revenue-intelligence, platform]
github: "https://github.com/gong-io"
---

# Gong Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Call recording, transcription, or Smart Tracker setup
   - B) API integration (transcripts, calls, deals, users)
   - C) Webhook automation rules
   - D) Gong Forecast module
   - E) Gong Engage (sequences/sales engagement)
   - F) Coaching scorecards and deal boards
   - G) CRM sync (Salesforce, HubSpot, Dynamics)
   - H) Pricing, plan selection, or ROI justification
   - I) Other

2. **What's your role?**
   - A) RevOps / admin configuring Gong
   - B) Developer integrating Gong API
   - C) Sales manager using coaching features
   - D) Rep using Gong day-to-day
   - E) Evaluating Gong vs alternatives

3. **Team size?**
   - A) <20 reps (may be overkill for Gong)
   - B) 20-100 reps (Gong sweet spot)
   - C) 100+ reps (enterprise)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking a note-taker (Gong vs Fathom vs Fireflies vs Avoma) | `/sales-note-taker {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific sales call for coaching | `/sales-call-review {user's question}` |
| Revenue forecasting strategy (not Gong Forecast module) | `/sales-forecast {user's question}` |
| General CRM-to-tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |
| Deal health inspection or MEDDPICC assessment | `/sales-deal-inspect {user's question}` |

Otherwise, answer directly below.

## Step 3 — Gong platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For Smart Tracker problems**: Start with fewer, more specific phrases (10-15 per tracker). Add negative examples to train the model. Review false positives weekly and refine. Expect 50-100 examples before accuracy improves meaningfully.

**For API integrations**: Queue all outbound calls — 3 req/sec is aggressive. Cache call metadata. Use webhooks for real-time, polling for backfill. The transcript endpoint is POST, not GET (common gotcha).

**For CRM sync**: Gong can only connect to one CRM at a time. Web conference calls appear in CRM within 15 minutes; config changes can take 2-24 hours. Initial sync can take up to 24 hours.

**For cost justification**: Frame ROI around coaching impact (ramp time reduction, win rate improvement) not feature count. Enterprise (100+ seats) sees best ROI. Mid-market (20-100) breaks even with high adoption. Under 20 reps, suggest Fathom or Fireflies instead.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Mandatory bundling (2024+)**: New contracts often require Forecast + Engage bundles at $250/user/month even if you only want conversation intelligence. Negotiate hard for CI-only pricing if that's all you need.
- **Transcript endpoint is POST, not GET.** Every other vendor uses GET for transcripts — Gong is the exception. This is the most common first-integration bug.
- **3 req/sec rate limit is real.** At 500 calls/day you'll hit it fast when fetching metadata + transcript + participants per call. Queue everything, cache aggressively, honor `Retry-After` headers.
- **Smart Trackers need 50-100 examples for accuracy.** Out of the box they rely on keyword matching, which generates high false-positive rates. Budget 40+ RevOps hours/month for training and tuning.
- **Gong Forecast is widely considered weak.** ~40% of Gong customers stack Clari on top for forecasting. If forecasting is your primary need, evaluate Clari first.
- **Gong Engage has known stability issues.** Multiple reviews report slowness and bugs. If sales engagement is your primary need, evaluate Salesloft or Outreach first.
- **CRM sync is one-way for many fields.** Gong logs activities (tasks/meetings) to CRM but does not auto-populate custom methodology fields, opportunity stages, or MEDDIC fields. You need automation rules or Zapier for that.
- **No bulk data export via UI.** Exporting calls requires downloading individually. For bulk access, you must build against the API — budget development time for this.
- **Support quality has declined (2024-2025).** Onboarding is often outsourced. Ticket resolution can take weeks. Factor in self-sufficiency when planning implementation.
- **Platform fee is mandatory.** $5K-$50K/year on top of per-user licensing, regardless of team size. This makes Gong disproportionately expensive for small teams.

## Related skills

- `/sales-note-taker` — Picking an AI note-taker (Gong vs Fathom vs Fireflies vs Avoma) or wiring its API into downstream systems
- `/sales-call-review` — Review a specific sales call for coaching or scoring
- `/sales-coaching` — Build coaching programs that consume Gong call data
- `/sales-forecast` — Revenue forecasting strategy (Gong Forecast is one tool, not the only approach)
- `/sales-deal-inspect` — Inspect deal health using Gong deal board data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-salesloft` — Salesloft platform help (Salesloft Conversations is an alternative to Gong for call intelligence)
- `/sales-zoominfo` — ZoomInfo platform help (Chorus is an alternative to Gong for conversation intelligence)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Smart Trackers returning false positives
**User says**: "Our Gong Smart Trackers keep flagging competitor mentions when the rep just says 'like' followed by a brand name — how do I reduce noise?"
**Skill does**:
1. Reads platform guide for Smart Tracker configuration details
2. Recommends switching from single-word triggers to multi-word phrases with context
3. Suggests adding negative example phrases to train the model
4. Advises a weekly review cadence for false positives (budget 2-3 hours/week)
5. Notes that 50-100 training examples are needed before accuracy improves meaningfully
**Result**: Specific tracker tuning plan with expected timeline

### Example 2: API integration for transcript pipeline
**User says**: "I need to pipe every Gong transcript into Snowflake for our BI team"
**Skill does**:
1. Reads platform guide and API reference for endpoint details
2. Recommends webhook-first architecture (automation rule fires on call processed)
3. Walks through the POST transcript endpoint (not GET — common gotcha)
4. Designs rate-limit-aware queueing (2 req/sec target against 3/sec limit)
5. Adds nightly reconcile job to catch missed webhooks
**Result**: Production-shaped pipeline architecture with specific endpoints and rate-limit design

### Example 3: Justifying Gong cost to leadership
**User says**: "My VP wants to know if Gong is worth $300K/year for 100 reps"
**Skill does**:
1. Reads platform guide pricing section for TCO breakdown
2. Frames ROI around coaching impact: ramp time reduction (target 20%), win rate improvement, deal velocity
3. Flags that ~40% of teams also add Clari for forecasting — factor that into TCO
4. Suggests piloting with 20-30 power users before full rollout
5. Provides Fathom/Fireflies as alternatives if the team can't justify enterprise pricing
**Result**: Balanced ROI analysis with honest caveats and alternatives

## Troubleshooting

### Smart Trackers miss important call moments
**Symptom**: Trackers configured for competitor mentions or pricing discussions but Gong doesn't flag them
**Cause**: Keyword-based matching without enough training data; context blindness (can't distinguish casual mention from active evaluation)
**Solution**: Add more phrase variations (50+ examples per tracker). Use multi-word phrases instead of single keywords. Review 10 calls manually to identify the actual language reps and prospects use — often different from what you'd expect.

### CRM sync shows calls but no transcript data
**Symptom**: Call activities appear in Salesforce/HubSpot but transcript summaries or AI insights are missing
**Cause**: Gong logs activities as tasks/meetings (metadata only). Transcript content and AI analysis don't sync natively to CRM fields.
**Solution**: Use Gong's webhook automation rules to push specific data points (key topics, action items) into CRM custom fields. For full transcript access in CRM, build against the API or use an iPaaS (Workato, Celigo) to bridge the gap.

### API returns 429 during transcript backfill
**Symptom**: Bulk historical transcript export hits rate limits within minutes
**Cause**: Parallel requests exceed 3 req/sec limit; daily 10K cap burns fast on large orgs
**Solution**: Queue outbound calls with a token-bucket rate limiter at 2 req/sec (leave headroom). Honor `Retry-After` headers. Paginate nightly rather than all at once. Cache call metadata so you don't re-fetch on every request.
