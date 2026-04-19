---
name: sales-momentum
description: "Momentum platform help — AI revenue orchestration with automated CRM updates, Slack Deal Rooms, MEDDIC Autopilot, AI coaching, churn signals, and executive briefs. Use when Salesforce fields never get updated after calls, deal rooms in Slack are noisy or disorganized, MEDDIC tracking is inconsistent across reps, post-call action items aren't making it into the CRM, you need churn risk signals from customer conversations, or AI coaching scores don't match what you see on calls. Do NOT use for building outbound sequences (use /sales-cadence) or picking an AI note-taker (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Momentum]"
license: MIT
version: 1.0.0
tags: [sales, revenue-orchestration, platform]
---

# Momentum Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need?**
   - A) Set up Momentum for the first time (integrations, permissions, workspace)
   - B) Configure AI agents (Deal Execution, Retention, CRO, Coaching)
   - C) Build workflow automations (Slack notifications, CRM updates, signals)
   - D) Set up MEDDIC Autopilot or qualification tracking
   - E) Configure Deal Rooms or Account Rooms in Slack
   - F) Troubleshoot an integration (Salesforce, Gong, Zoom, etc.)
   - G) Understand pricing tiers or feature gates
   - H) Use the API for custom integrations
   - I) Other

2. **Which Momentum plan are you on?**
   - A) Business ($69/user/mo)
   - B) Transformation ($99/user/mo)
   - C) Enterprise (custom)
   - D) Not sure / evaluating

3. **Which integrations are you using?**
   - A) Salesforce + Slack (core)
   - B) + Gong / Chorus / Clari
   - C) + Zoom / Google Meet / Teams
   - D) + Outreach / Salesloft
   - E) Other combination

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building outbound cadences/sequences | `/sales-cadence {question}` |
| Picking a note-taker / CI platform | `/sales-note-taker {question}` |
| Revenue forecasting strategy | `/sales-forecast {question}` |
| Sales coaching programs | `/sales-coaching {question}` |
| Individual deal inspection | `/sales-deal-inspect {question}` |
| Salesforce configuration | `/sales-salesforce {question}` |
| Gong platform questions | `/sales-gong {question}` |
| General tool integration | `/sales-integration {question}` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

## Step 3 — Momentum platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Start with the core loop**: Momentum's value is call → AI extraction → CRM update → Slack notification → workflow trigger. If any link in that chain is broken, the whole system underperforms.
- **Prioritize quick wins**: Autopilot for automatic CRM field capture is the fastest time-to-value. Set it up before building complex signal workflows.
- **Layer complexity gradually**: Start with call summaries → add MEDDIC Autopilot → add AI Signals → add Deal Rooms → add Executive Briefs.
- **Test with one team first**: Don't roll out workspace-wide. Pick one pod, validate the workflows, then expand.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Salesforce acquisition (Feb 2026)**: Momentum was acquired by Salesforce. Pricing, packaging, and integration depth may change as it merges into Agentforce/Slack. Verify current status before making purchasing decisions.
- **Business vs Transformation gate**: Executive Briefs, AI Coaching, and team performance analytics require Transformation ($99/user/mo). Business tier gets core AI + Deal Rooms only.
- **CI add-on is separate**: The Conversation Intelligence module (AI notetaker for Meet/Zoom, video library, SmartClips) costs an additional $30/user/mo on top of the base plan.
- **Rescheduled meetings need manual steps**: Momentum follows original calendar bookings — if a meeting is rescheduled, you may need to manually trigger re-capture.
- **Deep Research is usage-based**: Annual platform license + per-analysis credits. Budget separately from per-user costs.
- **API rate limit**: 100 requests per 15-minute window. Plan batch operations accordingly.
- **Salesforce is the only CRM**: No HubSpot, Pipedrive, or other CRM integration. Momentum is Salesforce-first (and now Salesforce-owned).

## Related skills

- `/sales-forecast` — Revenue forecasting and pipeline coverage analysis — Momentum feeds clean deal data into forecast models
- `/sales-coaching` — Sales coaching programs — Momentum's AI Coaching agent scores calls and identifies skill gaps
- `/sales-note-taker` — Picking or integrating an AI meeting note-taker — Momentum's CI add-on competes here
- `/sales-deal-inspect` — Deep-dive on individual deal health — Momentum's AI Signals flag at-risk deals
- `/sales-gong` — Gong platform help — Momentum integrates with Gong as a data source
- `/sales-salesloft` — Salesloft platform help — Momentum integrates with Salesloft calls
- `/sales-clari-copilot` — Clari Copilot platform help — Momentum integrates with Clari for pipeline intelligence
- `/sales-integration` — General CRM/tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM fields never get updated after calls
**User says**: "Our reps never update MEDDIC fields in Salesforce after calls. Can Momentum fix this?"
**Skill does**:
1. Explains MEDDIC Autopilot — AI listens to calls and auto-populates MEDDIC fields in Salesforce
2. Walks through setup: connect Salesforce, map MEDDIC fields to Salesforce custom fields, enable Autopilot
3. Recommends starting with 2-3 fields (Champion, Decision Criteria, Metrics) before adding all
4. Notes that Autopilot Classic handles one-off updates, Batch processes historical calls
**Result**: Automated MEDDIC tracking without reps manually typing anything

### Example 2: Too many Slack notifications from deal rooms
**User says**: "We set up Momentum Deal Rooms but the team is overwhelmed with notifications. How do we tune it?"
**Skill does**:
1. Reviews AI Signals configuration — shows how to adjust sensitivity thresholds
2. Recommends routing critical signals (churn risk, competitor mention) to the deal room, moving routine updates to a digest
3. Explains Smart Notifications filtering: by deal stage, deal size, or signal type
4. Suggests using Account Rooms for CS teams instead of mixing CS and sales signals
**Result**: Focused, actionable Slack notifications instead of noise

### Example 3: Evaluating Momentum's CI add-on vs standalone Gong
**User says**: "We already use Momentum for CRM automation. Should we add their CI module or keep Gong?"
**Skill does**:
1. Compares Momentum CI ($30/user/mo add-on) vs Gong (~$1,200-1,600/user/yr standalone)
2. Notes Momentum CI covers: recording, transcription, video library, SmartClips — but lighter on analytics than Gong
3. Key advantage of Momentum CI: native integration means call data flows directly into Momentum workflows without a separate integration
4. Key advantage of keeping Gong: deeper analytics, Smart Trackers, established coaching scorecards, larger ecosystem
5. Recommends: if you mainly need transcription + CRM automation, Momentum CI is sufficient. If coaching and analytics are primary, keep Gong.
**Result**: Clear decision framework based on which capabilities matter most

## Troubleshooting

### Salesforce fields not updating after calls
**Symptom**: Calls are recorded and summarized but MEDDIC/custom fields stay empty in Salesforce
**Cause**: Autopilot may not be mapped to the correct Salesforce fields, or the Salesforce integration permissions may be insufficient
**Solution**: Check Integrations → Salesforce → verify OAuth scope includes write access to the target fields. In Autopilot settings, confirm each AI-extracted field is mapped to the correct Salesforce custom field. Test with one call before batch-processing.

### Deal Room not creating automatically for new deals
**Symptom**: New opportunities in Salesforce don't trigger a Slack Deal Room
**Cause**: The automation rule may be filtering by deal stage or amount, or the Slack app may lack channel creation permissions
**Solution**: Check Workflow Automations → Deal Room triggers. Verify the Salesforce opportunity stage and amount thresholds match your pipeline. In Slack admin, confirm Momentum has `channels:manage` permission.

### AI coaching scores seem inaccurate
**Symptom**: Coaching Agent gives high scores to calls you'd rate as mediocre
**Cause**: Default scoring criteria may not match your team's methodology or standards
**Solution**: Customize the coaching evaluation criteria in the Coaching Agent settings. Add your specific methodology framework (MEDDIC, SPIN, Challenger) so the AI evaluates against your standards, not generic best practices. Review 5-10 scored calls to calibrate before rolling out to the team.
