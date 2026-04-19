---
name: sales-trellus
description: "Trellus platform help — AI-powered parallel dialer with real-time coaching for SDR teams, embedded in existing SEPs/CRMs via Chrome extension. Use when setting up Trellus parallel or power dialer inside Salesloft Outreach HubSpot Apollo, reps not getting real-time coaching cues during cold calls, phone numbers getting flagged as spam while dialing, configuring Trellus voice agents for practice roleplay or inbound call handling, evaluating Trellus vs Nooks vs Orum vs Kixie for parallel dialing, Trellus LinkedIn inbox management with Superhuman, or connecting Trellus to Salesforce HubSpot or other CRMs. Do NOT use for building a general coaching program (use /sales-coaching) or general outbound cadence strategy (use /sales-cadence)."
argument-hint: "[describe what you need help with in Trellus]"
license: MIT
version: 1.0.0
tags: [sales, dialer, parallel-dialer, coaching, platform]
---

# Trellus Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Dialer setup (parallel dialing, power dialing, voicemail drop, Chrome extension)
   - B) Real-time coaching (objection handling, talk tracks, pacing cues)
   - C) Voice agents (AI practice bots, inbound call handling)
   - D) Call analytics & scoring (automated QA, performance metrics)
   - E) Virtual salesfloor (team monitoring, call blitzes, leaderboards)
   - F) Superhuman for LinkedIn (consolidated inbox, snippets, shortcuts)
   - G) Number health (spam remediation, number rotation)
   - H) Integrations (Salesloft, Outreach, HubSpot, Apollo, Salesforce, etc.)
   - I) Comparing Trellus to another platform
   - J) Pricing or plan questions
   - K) Other

2. **What's your current setup?**
   - A) Evaluating Trellus — haven't started
   - B) Installed Chrome extension but configuring
   - C) Running but having issues
   - D) Upgrading from Power to Parallel or Business tier

3. **Current outbound stack?**
   - A) No dialer — manual dialing
   - B) Single-line power dialer (Kixie, JustCall, etc.)
   - C) Another parallel dialer (Nooks, Orum, Koncert, etc.)
   - D) SEP only (Outreach, Salesloft, Apollo)
   - E) Trellus already — troubleshooting

4. **Team size?**
   - A) Solo / 1-3 reps
   - B) Small team (4-10 reps)
   - C) Mid-market (11-50 reps)
   - D) Enterprise (50+ reps)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program, onboarding, certifications | `/sales-coaching` — run: `/sales-coaching {user's question}` |
| Designing outbound cadences across channels | `/sales-cadence` — run: `/sales-cadence {user's question}` |
| Email deliverability, warmup, SPF/DKIM | `/sales-deliverability` — run: `/sales-deliverability {user's question}` |
| Building prospect lists, finding contacts | `/sales-prospect-list` — run: `/sales-prospect-list {user's question}` |
| CRM selection or migration | `/sales-crm-selection` — run: `/sales-crm-selection {user's question}` |
| Connecting Trellus to other tools via Zapier/webhooks | `/sales-integration` — run: `/sales-integration {user's question}` |
| Reviewing recorded sales calls | `/sales-call-review` — run: `/sales-call-review {user's question}` |

If the question is Trellus-specific, continue to Step 3.

## Step 3 — Trellus platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Choosing a tier**: Free → test Chrome extension fit. Power BYOD → already have a dialer, want coaching only. Power → single-line with number management. Parallel → multi-line + AI practice calls. Business → team analytics + custom coaching.
- **Implementation**: Install Chrome extension → connect SEP/CRM → configure number pool → enable coaching rules → train reps on coaching UI.
- **Optimizing connect rates**: Enable number rotation, monitor spam status dashboard, use local presence if available, dial during optimal windows.
- **Coaching adoption**: Start with 2-3 coaching triggers (objections, pacing) — too many causes alert fatigue. Review adoption metrics weekly.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Real-time coaching is Business tier only** — Power and Parallel tiers get the dialer but not live coaching cues during calls. Voice agent practice calls are available on Parallel.
- **Chrome extension dependency** — Trellus runs entirely as a Chrome extension embedded in your SEP/CRM. No desktop app, no mobile app. If Chrome crashes or updates break extensions, dialing stops.
- **Pricing is heavily discounted** — listed prices ($34.99/mo for all individual tiers) appear to be promotional. Original prices range $59.99-$149.99/mo. Confirm current pricing before committing.
- **5-line max on parallel** — Nooks also does 5, Orum does up to 10. If you need more lines, Trellus isn't the fit.
- **No email/SMS sequencing** — Trellus is phone + LinkedIn only. For multi-channel sequences, you need your SEP (Outreach, Salesloft) or a platform like Nooks that bundles sequencing.
- **Connection lag on parallel calls** — common to all parallel dialers. Prospects hear brief silence before the rep connects. Trellus claims low-latency infrastructure but test with your team before full rollout.
- **SOC 2 Type II certified** — enterprise security requirement met.

## Related skills

- `/sales-coaching` — Build coaching programs, onboarding, role-plays, certifications
- `/sales-cadence` — Design multi-channel outbound cadences
- `/sales-nooks` — Nooks platform help (parallel dialer + sequencing + enrichment)
- `/sales-orum` — Orum platform help (parallel dialer, up to 10 lines)
- `/sales-call-review` — Review recorded sales calls for coaching insights
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

**Example 1**: "My numbers keep getting flagged as spam when cold calling through Trellus"
→ Step 3 loads Number Health section. Walks through spam monitoring dashboard, number rotation settings, pool size recommendations, and STIR/SHAKEN compliance.

**Example 2**: "Should I use Trellus or Nooks for my 8-person SDR team?"
→ Step 3 loads comparison guidance. Compares parallel lines (both 5), pricing (Trellus ~$35/mo vs Nooks ~$5K/user/yr), feature scope (Trellus = dialer + coaching, Nooks = dialer + sequencing + enrichment + coaching), integration depth.

**Example 3**: "How do I set up Trellus voice agents for new hire training?"
→ Step 3 loads Voice Agents section. Covers AI practice bot configuration, custom prospect personas, scoring criteria, and ramp timeline.

## Troubleshooting

**Trellus Chrome extension not loading in my SEP**
Check Chrome extension permissions, ensure the SEP URL is in Trellus's allowed domains, try disabling other Chrome extensions that modify the page (ad blockers, other sales tools). Reinstall extension if needed.

**Parallel dialer calls dropping or prospects hearing silence**
Parallel dialing inherently has a brief connection delay. Ensure your internet connection is stable (wired preferred), close bandwidth-heavy apps, and check Trellus's latency dashboard. If lag exceeds 2 seconds consistently, contact support.

**Call analytics not syncing to CRM**
Verify CRM integration is connected in Trellus settings. Check that the CRM user has API permissions. Salesforce users: ensure the Trellus managed package is installed. HubSpot users: check that the Trellus app is authorized in Connected Apps.
