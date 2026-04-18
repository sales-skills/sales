---
name: sales-nooks
description: "Nooks platform help — AI-native sales engagement workspace with parallel dialer, multi-channel sequencing, real-time coaching, and waterfall enrichment. Use when SDR team needs to increase connect rates with parallel dialing, reps are getting numbers flagged as spam during cold calling, setting up multi-channel sequences across calls email SMS and social in Nooks, configuring AI coaching scorecards or roleplay scenarios, evaluating Nooks vs Orum vs Koncert for parallel dialing, prospects complain about awkward delay when answering parallel dialer calls, or setting up waterfall enrichment across multiple data providers. Do NOT use for building a general coaching program (use /sales-coaching) or general outbound cadence strategy (use /sales-cadence)."
argument-hint: "[describe what you need help with in Nooks]"
license: MIT
version: 1.0.0
tags: [sales, dialer, parallel-dialer, sequencing, coaching, platform]
github: "https://github.com/NooksApp"
---

# Nooks Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) AI Dialer setup (parallel dialing, power dialing, spam protection, local presence)
   - B) AI Sequencing (multi-channel outreach — calls, emails, SMS, social)
   - C) Signals & Intelligence (buyer intent, lead prioritization, account research)
   - D) AI Coaching (call scoring, roleplay, battlecards, virtual salesfloor)
   - E) Contact Data Enrichment (waterfall enrichment, number verification)
   - F) Integrations (CRM, SEP, data providers)
   - G) Comparing Nooks to another platform
   - H) Other

2. **What's your current setup?**
   - A) Evaluating Nooks — haven't started
   - B) Purchased but in implementation
   - C) Running but having issues
   - D) Expanding to additional modules or teams

3. **Current outbound stack?**
   - A) No dialer — manual dialing
   - B) Single-line power dialer (Kixie, JustCall, etc.)
   - C) Another parallel dialer (Orum, Koncert, etc.)
   - D) SEP only (Outreach, Salesloft, Apollo)
   - E) Nooks already — adding modules

4. **Team size?**
   - A) Solo / 1-3 reps
   - B) Small team (4-10 reps)
   - C) Mid-market (11-50 reps)
   - D) Enterprise (50+ reps)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General outbound cadence strategy (not Nooks-specific) | `/sales-cadence {user's question}` |
| Building a coaching program or training plan | `/sales-coaching {user's question}` |
| Contact enrichment strategy across multiple tools | `/sales-enrich {user's question}` |
| Building prospect lists from scratch | `/sales-prospect-list {user's question}` |
| Email deliverability (SPF/DKIM/DMARC, warmup) | `/sales-deliverability {user's question}` |
| General CRM/tool integration patterns | `/sales-integration {user's question}` |
| Buyer intent and signal interpretation | `/sales-intent {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — Nooks platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Implementation priority order:**
1. Connect your CRM (Salesforce/HubSpot) — Nooks needs activity data flowing before anything else works
2. Set up phone numbers and spam protection — register numbers with carriers, configure auto-rotation
3. Import prospects and configure enrichment — waterfall across data providers for verified mobiles
4. Start with power dialing before parallel — let reps learn the workflow on single-line first
5. Enable AI coaching after 2-3 weeks of call data — scorecards need conversation history to be useful
6. Add sequencing last — multi-channel cadences build on top of working dialing infrastructure

**When comparing to Orum:** Nooks is a unified workspace (dialer + sequencing + coaching + enrichment). Orum is dialer-focused with deeper telephony infrastructure (proprietary vs Nooks' Twilio-based). Orum offers 7 parallel lines vs Nooks' 5. Nooks is cheaper (~$5K/user/yr vs Orum ~$6-9.6K/user/yr).

**When comparing to Koncert:** Koncert offers more dialing modes (AI parallel, flow, agent-assisted). Nooks is more opinionated with a single integrated workflow. Koncert is better for teams wanting flexibility across different dialing motions.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Parallel dialing creates an answer delay.** When a prospect picks up, there's a brief delay before the rep connects. Multiple G2 reviews report this signals "spam call" to prospects and tanks connect-to-meeting rates. Consider power dialing for high-value prospects and parallel for volume.
- **Spam flagging can snowball.** Nooks uses Twilio numbers and NoMoRobo for monitoring, but independent testing suggests NoMoRobo isn't the most accurate. Numbers can get flagged across carriers without Nooks detecting it. Monitor connect rates daily — a sudden drop signals flagged numbers.
- **Limited to 5 parallel lines.** Orum offers 7, ServiceBell offers 9. If maximum simultaneous lines matters, evaluate competitors.
- **Prospect context is limited during parallel dialing.** When multiple prospects answer simultaneously, reps get minimal info about who picked up, forcing them to scramble for account details mid-call.
- **No public API documentation.** Platform mentions an "open API" but no public docs exist. Ask for API access and documentation during your evaluation.
- **Pricing is opaque.** ~$5,000/user/year is the reported baseline, but requires annual commitment. No month-to-month option. Volume discounts available for 20+ seats.

## Related skills

- `/sales-cadence` — Design multi-channel outbound cadences
- `/sales-coaching` — Sales coaching and training programs
- `/sales-enrich` — Contact enrichment across providers
- `/sales-prospect-list` — Build targeted prospect lists
- `/sales-deliverability` — Email deliverability and warmup
- `/sales-intent` — Buyer intent signals and lead prioritization
- `/sales-integration` — Connect tools with CRM and automations
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Evaluating Nooks for an SDR team
**User says**: "We have 15 SDRs making cold calls manually and want to 3x our dial volume"
**Skill does**:
1. Explains parallel dialing — 5 simultaneous lines, AI answer detection, auto-skip voicemails
2. Walks through spam protection setup — number rotation, carrier registration
3. Compares Nooks (~$5K/user/yr) vs Orum (~$6-9.6K/user/yr) vs power dialers (~$50-200/user/mo)
4. Recommends pilot approach — start 3-5 reps, measure connect rates for 2 weeks
**Result**: ROI analysis with competitor comparison and pilot plan

### Example 2: Connect rates dropping
**User says**: "Our Nooks connect rates dropped from 15% to 4% in the last two weeks"
**Skill does**:
1. Diagnoses likely spam flagging — check number reputation in Nooks dashboard
2. Walks through number rotation and re-registration process
3. Recommends reducing parallel lines temporarily and switching to local presence
4. Suggests checking call volume per number — 100-200 dials/day per number is the flagging threshold
**Result**: Spam remediation plan with monitoring checklist

### Example 3: Setting up multi-channel sequences
**User says**: "How do I set up a sequence in Nooks that combines calls, emails, and LinkedIn touches"
**Skill does**:
1. Walks through AI Sequencing setup — channel configuration, step ordering
2. Explains signal-based triggers for dynamic personalization
3. Covers integration with CRM for activity logging
4. Recommends call-first cadence pattern for parallel dialer teams
**Result**: Multi-channel sequence template with timing recommendations

## Troubleshooting

### Numbers getting flagged as spam
**Symptom**: Connect rates plummet, prospects report seeing "Spam Likely" or "Scam Likely" caller ID
**Cause**: High dial volume from the same numbers triggers carrier spam filters. Nooks uses Twilio numbers which are shared infrastructure, making them more susceptible to flagging.
**Solution**: Enable auto-rotation with at least 10 numbers per rep. Register all numbers with your business identity through carrier STIR/SHAKEN attestation. Reduce parallel lines from 5 to 3 temporarily. Monitor connect rates daily — anything below 10% signals reputation issues. Consider dedicated numbers instead of shared Twilio pool.

### Awkward delay on parallel dialer connects
**Symptom**: Prospects hear silence or a brief delay before the rep speaks, leading to immediate hang-ups
**Cause**: Parallel dialing requires AI to detect a live answer, then bridge the connection to the rep. This detection + bridging adds latency.
**Solution**: Train reps to have their opening line ready before the connection bridges. Use power dialing mode for high-value prospects where first impressions matter most. Set up a pre-recorded "connecting" sound if Nooks offers it. Accept that parallel dialing trades connect quality for volume — it's a strategic choice, not a bug.

### CRM activities not syncing
**Symptom**: Calls made in Nooks don't appear in Salesforce/HubSpot, or call notes/recordings are missing
**Cause**: CRM integration may not be fully configured, or field mapping is incomplete
**Solution**: Verify the CRM connection in Nooks settings — check OAuth permissions. Confirm field mappings for call outcome, duration, recording URL, and notes. Check for CRM duplicate contact records that prevent proper matching. Test with a single call and verify it appears in CRM within 5 minutes.
