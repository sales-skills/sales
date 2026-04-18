---
name: sales-salesken
description: "Salesken platform help — AI-powered conversation intelligence with real-time in-call coaching, QA automation on 100% of calls, revenue intelligence with deal health and forecasting, field sales analytics, multilingual transcription, Salesforce/HubSpot/Zoho native CRM sync. Use when reps need live coaching prompts during calls, QA team wants to stop random call sampling and score every call automatically, compliance team needs automatic regulatory breach detection, managers can't see which deals are actually at risk, field sales team conversations aren't being captured, or real-time objection handling cues aren't reaching reps fast enough. Do NOT use for choosing between note-taker platforms (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe what you need help with in Salesken]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, coaching, platform]
---

# Salesken Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What module are you working with?**
   - A) Revenue Intelligence (deal health, forecasting, pipeline)
   - B) QA AI (call scoring, compliance, audit)
   - C) AI Sales Assistant (real-time coaching, CRM enrichment)
   - D) Meeting Note Taker (transcription, summaries, action items)
   - E) Field Sales Analytics (on-site conversation capture)
   - F) CRM integration or data flow setup
   - G) Comparing Salesken to alternatives

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between Salesken and other note-takers/CI platforms | `/sales-note-taker {user's question}` |
| Building a coaching program around call recordings | `/sales-coaching {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Revenue forecasting strategy (not Salesken-specific) | `/sales-forecast {user's question}` |
| General CRM integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |

When routing to another skill, provide the exact command.

## Step 3 — Salesken platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

**Module selection**: Revenue Intelligence for deal visibility and forecasting. QA AI for compliance-heavy orgs (banking, insurance, BPO). AI Sales Assistant for rep-facing real-time coaching. Note Taker for teams that just need transcription and CRM logging. Field Sales for on-site teams.

**Implementation approach**: Start with a pilot team (10-15 reps) on a single module. Standard CRM integrations deploy in days. Custom integrations need onboarding team support for field mapping.

If you discover a gotcha or workaround not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Pricing is opaque** — per-recorded-user license + platform fee. Starts ~$99/mo but varies by module, user count, and negotiation. Get a written quote before committing.
- **Dashboard can be slow under load** — reported lag during high-volume calling blocks, especially with real-time coaching active. Test during peak hours before org-wide rollout.
- **Call drops during live coaching** — some users report call interruptions when the real-time AI is actively providing prompts. Pilot thoroughly.
- **Too many features, steep learning curve** — multiple modules (Revenue Intelligence, QA, Sales Assistant, Note Taker, Field Sales) plus custom scoring parameters. Don't enable everything at once.
- **CRM custom integrations need onboarding team** — Salesforce, HubSpot, Zoho work natively out of the box. Legacy or regional CRMs require Salesken's team to build custom connectors.
- **No public API documentation** — a Postman collection exists but isn't publicly accessible. Enterprise customers get API-level flexibility for CRM data flows, but there's no self-service API docs page.
- **Multilingual support is a differentiator but language count isn't published** — Salesken supports multiple languages for transcription and coaching, but the exact list of supported languages isn't documented publicly.

## Related skills

- `/sales-note-taker` — Comparing Salesken to other conversation intelligence platforms (Gong, Avoma, Fireflies, Fathom, etc.)
- `/sales-coaching` — Building coaching programs that consume call data from Salesken or any CI tool
- `/sales-call-review` — Reviewing a specific recorded call for coaching insights
- `/sales-forecast` — Revenue forecasting strategy across tools
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up QA scoring for a BPO contact center
**User says**: "We run a 200-seat BPO and want to score every call automatically instead of random sampling. How do I set up Salesken QA?"
**Skill does**: Walks through QA AI module setup — custom performance parameters, compliance rule configuration, scoring thresholds, alerts for regulatory breaches, and reporting dashboards. Notes the per-recorded-user pricing model and recommends starting with a pilot team.

### Example 2: Real-time coaching for a mid-market sales team
**User says**: "My reps keep fumbling objections on demos. Can Salesken help during the actual call?"
**Skill does**: Explains the AI Sales Assistant module — real-time objection-handling prompts, talk track suggestions, sentiment cues. Covers CRM enrichment (auto-logs transcripts, summaries, action items). Warns about potential call dropout issues and recommends piloting with a small group first.

### Example 3: Comparing Salesken to Gong for revenue intelligence
**User says**: "We're evaluating Salesken vs Gong. We need deal health tracking and forecasting."
**Skill does**: Routes to `/sales-note-taker` for a full cross-platform comparison, noting that Salesken's Revenue Intelligence includes pipeline visibility, deal risk alerts, and forecasting at a lower price point than Gong (~$99/mo vs ~$1,600/user/yr), but Gong has deeper analytics and a larger ecosystem.

## Troubleshooting

### Dashboard slow during peak hours
**Symptom**: Insights and analytics take 10+ seconds to load during high-volume calling blocks
**Cause**: Real-time processing load during simultaneous coaching sessions
**Solution**: Stagger team calling blocks if possible. Use async review dashboards for bulk analysis instead of real-time views during peak hours.

### Real-time coaching prompts arriving late or dropping
**Symptom**: Reps report coaching cues appearing after the moment has passed, or the coaching overlay disconnecting mid-call
**Cause**: Network latency or platform load during high-volume periods
**Solution**: Ensure stable, low-latency internet connection. Test with a pilot group during peak hours. If persistent, raise with Salesken support — may need infrastructure optimization for your deployment.

### CRM sync not pushing data
**Symptom**: Transcripts, summaries, or deal risk scores not appearing in CRM records
**Cause**: Field mapping misconfiguration or sync delay (most syncs complete within minutes, but can delay)
**Solution**: Verify field mapping in Salesken admin. Check that the CRM integration is active and authorized. For custom field mapping, contact Salesken onboarding team. Native Salesforce/HubSpot/Zoho integrations should work within minutes.
