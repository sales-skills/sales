---
name: sales-orum
description: "Orum platform help — AI-powered parallel dialer for SDR teams with power and parallel dialing (up to 10 lines), AI Coaching Suite (scorecards, roleplay, coaching portals), virtual salesfloor, spam detection and number rotation, call intelligence. Use when setting up Orum parallel or power dialer for an SDR team, connect rates are dropping and numbers are getting flagged as spam, prospects hear awkward silence when answering parallel dialer calls, configuring Orum AI coaching scorecards or roleplay, evaluating Orum vs Nooks vs Koncert for parallel dialing, or setting up Orum integrations with Salesforce HubSpot Outreach Salesloft. Do NOT use for general outbound cadence strategy (use /sales-cadence) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe what you need help with in Orum]"
license: MIT
version: 1.0.0
tags: [sales, dialer, parallel-dialer, coaching, platform]
---

# Orum Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Dialer setup (parallel dialing, power dialing, number management, spam protection)
   - B) AI Coaching Suite (scorecards, coaching portals, roleplay)
   - C) Virtual Salesfloor (leaderboards, live listen, team visibility)
   - D) Call Intelligence (recordings, transcriptions, objection detection, call library)
   - E) Integrations (Salesforce, HubSpot, Outreach, Salesloft, Gong, Apollo)
   - F) Comparing Orum to another platform
   - G) Pricing or contract questions
   - H) Other

2. **What's your current setup?**
   - A) Evaluating Orum — haven't started
   - B) Purchased but in implementation
   - C) Running but having issues
   - D) Expanding to Ascend tier or adding modules

3. **Current outbound stack?**
   - A) No dialer — manual dialing
   - B) Single-line power dialer (Kixie, JustCall, etc.)
   - C) Another parallel dialer (Nooks, Koncert, etc.)
   - D) SEP only (Outreach, Salesloft, Apollo)
   - E) Orum already — troubleshooting

4. **Team size?**
   - A) Solo / 1-3 reps
   - B) Small team (4-10 reps)
   - C) Mid-market (11-50 reps)
   - D) Enterprise (50+ reps)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General outbound cadence strategy (not Orum-specific) | `/sales-cadence {user's question}` |
| Building a coaching program or training plan | `/sales-coaching {user's question}` |
| Contact enrichment strategy across multiple tools | `/sales-enrich {user's question}` |
| Building prospect lists from scratch | `/sales-prospect-list {user's question}` |
| Email deliverability (SPF/DKIM/DMARC, warmup) | `/sales-deliverability {user's question}` |
| General CRM/tool integration patterns | `/sales-integration {user's question}` |
| Buyer intent and signal interpretation | `/sales-intent {user's question}` |
| Comparing parallel dialers (Orum vs Nooks vs Koncert) | Answer directly — use platform guide comparison section |

Otherwise, answer directly using the platform reference below.

## Step 3 — Orum platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Implementation priority order:**
1. Connect your CRM (Salesforce/HubSpot) — Orum needs activity data flowing before anything else works
2. Set up phone numbers and spam protection — register numbers with carriers, configure auto-rotation, enable reputation monitoring
3. Start with power dialing — let reps learn the interface on single-line mode first
4. Move to parallel dialing after 1-2 weeks — start with 3 lines, increase to 5 as reps get comfortable
5. Enable AI Coaching Suite after 2-3 weeks of call data — scorecards need conversation history
6. Set up virtual salesfloor for team visibility and manager oversight

**When comparing to Nooks:** Orum is dialer-focused with deeper telephony infrastructure (proprietary vs Nooks' Twilio-based). Orum offers up to 10 parallel lines (Ascend) vs Nooks' 5. Orum is more expensive (~$3-6K/user/yr vs Nooks ~$5K/user/yr). Nooks is a unified workspace (dialer + sequencing + enrichment + coaching). Orum is phone-only — no email sequencing, SMS, or LinkedIn.

**When comparing to Koncert:** Koncert offers more dialing modes (AI parallel, flow, agent-assisted). Orum is simpler with power and parallel only. Koncert may suit teams wanting flexibility across dialing motions.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **1-2 second connection lag on parallel dialing.** When AI detects a live answer and bridges the rep, there's a noticeable delay. Prospects hear silence, assume robocall, and hang up. Orum's own data shows parallel converts connects to meetings at ~3.8% vs ~6.4% for power dialing — a 41% penalty per connect. Use power dialing for high-value prospects.
- **AI false-positive hangups.** The AI detection sometimes misinterprets a quick "Hello?" as voicemail and disconnects real prospects. When two prospects answer simultaneously, only one connects — the other gets dead air.
- **Numbers burn fast under parallel dialing.** High-volume, short-duration call patterns trigger carrier STIR/SHAKEN algorithms. Numbers flagged "Spam Likely" have 95%+ unanswered rate. Monitor Boost Connect reputation daily.
- **Annual contracts only.** No monthly billing. You're locked in from day one. Negotiate pilot terms before signing.
- **Phone-only platform.** No email sequences, LinkedIn automation, or SMS. You need separate tools for multi-channel outbound — budget an additional $100-300/user/month for SEP + data providers.
- **Launch tier limits data enrichment to 200 credits/rep/month.** If your team burns through enrichment credits, you'll need Ascend or a separate provider.
- **iOS 26 call screening.** Apple's AI screening intercepts unknown numbers before ringing. Parallel dialers can't respond to screening prompts — calls may disconnect before prospects see them.

## Related skills

- `/sales-nooks` — Nooks platform help (parallel dialer competitor)
- `/sales-cadence` — Design multi-channel outbound cadences
- `/sales-coaching` — Sales coaching and training programs
- `/sales-enrich` — Contact enrichment across providers
- `/sales-prospect-list` — Build targeted prospect lists
- `/sales-deliverability` — Email deliverability and warmup
- `/sales-integration` — Connect tools with CRM and automations
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Our numbers keep getting flagged as spam
**User says**: "Half our Orum numbers are showing up as Spam Likely and our connect rates tanked"
**Skill does**:
1. Diagnoses number reputation issues — check Boost Connect dashboard for flagged numbers
2. Walks through number rotation strategy — at least 10 numbers per rep, auto-rotate
3. Recommends reducing parallel lines from 5 to 3 temporarily
4. Explains STIR/SHAKEN compliance and carrier registration
**Result**: Number remediation plan with monitoring checklist

### Example 2: Evaluating Orum vs Nooks for SDR team
**User says**: "We have 20 SDRs and need a parallel dialer — should we go with Orum or Nooks?"
**Skill does**:
1. Compares parallel lines (Orum up to 10 vs Nooks 5), pricing (Orum $3-6K vs Nooks $5K/yr), and feature scope
2. Explains Orum is dialer-only while Nooks bundles sequencing + enrichment + coaching
3. Recommends Orum for teams with existing SEP (Outreach/Salesloft) who want best-in-class dialing
4. Recommends Nooks for teams wanting to consolidate tools into one workspace
**Result**: Side-by-side comparison with recommendation based on team's existing stack

### Example 3: Setting up AI coaching scorecards
**User says**: "How do I configure Orum's AI scorecards for my team?"
**Skill does**:
1. Explains AI Coaching Suite is Ascend-tier only — verify plan access
2. Walks through scorecard configuration — define rubrics for opening, discovery, objection handling, close
3. Recommends waiting 2-3 weeks after deployment for enough call data
4. Shows how to use coaching portals for manager-rep 1:1s
**Result**: Scorecard setup guide with rubric recommendations

## Troubleshooting

### Connect rates dropping after initial deployment
**Symptom**: Connect rates start strong (15-20%) but decline to 4-8% over 3-6 months
**Cause**: Carrier spam algorithms flag numbers with high-volume, short-duration call patterns. This is the #1 operational risk with parallel dialers — the pattern is inherent to how parallel dialing works.
**Solution**: Rotate at least 10 numbers per rep. Use Boost Connect to monitor reputation. Reduce parallel lines during decline periods. Register all numbers through STIR/SHAKEN attestation. Consider alternating between parallel and power dialing modes weekly. If connect rates don't recover, request new DIDs from Orum.

### Prospects hearing silence when they answer
**Symptom**: Prospects pick up and hear 1-2 seconds of dead air before the rep connects, leading to immediate hangups
**Cause**: Parallel dialing requires AI to detect a live answer, then bridge the call to the rep. Detection + bridging adds latency that doesn't exist in power dialing.
**Solution**: Train reps to have their opening line ready instantly. Use power dialing for high-value targets where first impressions matter. Accept that parallel dialing trades connect quality for volume — 3.8% connect-to-meeting vs 6.4% for power dialing. For strategic accounts, always power dial.

### CRM activities not syncing
**Symptom**: Calls made in Orum don't appear in Salesforce/HubSpot, or recordings are missing
**Cause**: Integration may not be fully configured, or field mapping is incomplete
**Solution**: Verify the CRM connection in Orum settings. Confirm field mappings for call outcome, duration, recording URL, and notes. Check for duplicate contact records in CRM that prevent matching. Test with a single call and verify it appears within 5 minutes. If using Outreach/Salesloft as intermediary, verify the SEP integration is syncing both directions.
