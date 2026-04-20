---
name: sales-secondbody
description: "SecondBody platform help — voice-first AI roleplay and coaching for sales teams. Use when reps need daily practice but managers can't coach everyone 1:1, onboarding new reps and want AI roleplay to build muscle memory faster, role-plays feel awkward and reps avoid them, need methodology-native scoring for SPIN or MEDDIC or Sandler, building a PIP with measurable practice thresholds, screening sales candidates with AI simulations, or evaluating SecondBody vs Hyperbound vs Second Nature vs Solidroad for AI roleplay. Do NOT use for general coaching strategy without a specific platform (use /sales-coaching)."
argument-hint: "[describe what you need help with in SecondBody]"
license: MIT
version: 1.0.0
tags: [sales, coaching, training, roleplay, platform]
---

# SecondBody Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need?**
   - A) Set up AI roleplay practice for reps
   - B) Configure Rory AI coach for daily coaching
   - C) Build manager analytics and team heatmaps
   - D) Design onboarding or certification programs
   - E) Set up gamification (streaks, leaderboards, VS Mode)
   - F) Integrate with call recording tools (Fathom, Aircall, Cloudtalk)
   - G) Evaluate SecondBody vs alternatives
   - H) Other

2. **Your team?**
   - A) Small team (<10 reps)
   - B) Mid-size team (10-50 reps)
   - C) Large team (50+ reps)
   - D) Just me (individual practice)

3. **Current tools?**
   - A) Fathom or other call recorder
   - B) Aircall / Cloudtalk / other dialer
   - C) Momentum.io
   - D) CRM (Salesforce/HubSpot) — note: SecondBody CRM integration is in development
   - E) None yet

**Skip-ahead rule**: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the user needs... | Route to... |
|---|---|
| General coaching strategy (not SecondBody-specific) | `/sales-coaching` — run: `/sales-coaching {user's question}` |
| Call recording review and scoring | `/sales-call-review` — run: `/sales-call-review {user's question}` |
| Picking a note-taker / conversation intelligence tool | `/sales-note-taker` — run: `/sales-note-taker {user's question}` |
| Contact center QA (not sales team) | `/sales-observe-ai` or `/sales-balto` or `/sales-solidroad` |
| Field sales coaching (in-person) | `/sales-rilla` or `/sales-siro` or `/sales-salesask` |

If the question is SecondBody-specific, continue to Step 3.

## Step 3 — SecondBody platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, workflows, data model.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Start small**: Launch with one team (SDRs or new hires), get 15-min daily practice habit established before expanding
- **Prioritize objections**: Use call recording integration (Fathom/Aircall) to identify real objections, then build roleplay scenarios around them
- **Track leading indicators**: Practice minutes per rep per week, streak length, methodology score trends — not just call outcomes
- **Manager enablement**: Use team heatmaps to focus 1:1 time on specific skill gaps instead of generic coaching
- **Gamification strategy**: Start with streaks (low friction), add VS Mode competitions only after habit is established

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **CRM integration not live yet** — Salesforce and HubSpot integrations are "in development." Use call recording integrations (Fathom, Aircall, Cloudtalk, Momentum.io) to bridge the gap.
- **Minute limits on Pro** — 120 min roleplay + 60 min coaching per month on Pro ($30/user/mo). For heavy-practice teams, this may run out mid-month.
- **Free tier is roleplay only** — unlimited seats get access to the roleplay platform, but AI coaching (Rory), custom personas, and objection library uploads require Pro.
- **Limited named customer references** — Cyera is the primary public reference. Ask for NDA-protected case studies during evaluation.
- **No public API** — no programmatic access. All interaction is through the web platform.
- **Young platform** — founded 2023, not yet in Gartner MQ. Evaluate carefully for enterprise requirements.

## Related skills

- `/sales-coaching` — General coaching strategy, onboarding programs, role-play design, certification paths. Install: `npx skills add sales-skills/sales --skill sales-coaching -a claude-code -y`
- `/sales-solidroad` — Solidroad platform help — AI QA + training for CX teams. Install: `npx skills add sales-skills/sales --skill sales-solidroad -a claude-code -y`
- `/sales-call-review` — Review sales calls, coaching feedback, call scoring. Install: `npx skills add sales-skills/sales --skill sales-call-review -a claude-code -y`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

**Example 1**: "My SDRs keep freezing when prospects say 'we already have a vendor' — how do I build practice around that?"

**Example 2**: "I'm onboarding 5 new AEs next month. How do I set up a 6-week ramp program with daily AI practice in SecondBody?"

**Example 3**: "We're evaluating SecondBody vs Hyperbound — our team is 15 SDRs doing cold calls. Which is better for us?"

## Troubleshooting

### AI roleplay doesn't feel realistic enough
**Symptom**: Reps say the AI responds generically or doesn't push back hard enough
**Solution**: Upload your own objection library from real call recordings (Pro feature). Connect Fathom or Aircall so objections are crowdsourced from actual prospect conversations. Build custom AI personas that match your buyer profile.

### Practice minutes running out mid-month
**Symptom**: Reps hit the 120-minute roleplay cap before month end
**Solution**: Focus sessions on 15-minute Call Blitz format (company recommendation). Prioritize high-impact scenarios (top 3 objections) over broad coverage. Consider enterprise tier for unlimited minutes.

### Managers can't see individual rep progress
**Symptom**: No visibility into who is practicing and who isn't
**Solution**: Use the team heatmap in Manager Analytics to see practice frequency and skill gaps by rep. Set up weekly coaching cadence based on heatmap data. Use streak and leaderboard data to identify engagement drops.
