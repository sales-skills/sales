---
name: sales-nice-cxone
description: "NICE CXone (Mpower) platform help — full CCaaS with omnichannel routing, WFM, quality management, AI analytics, digital engagement, and virtual agents. Use when setting up NICE CXone ACD routing or IVR, WFM forecasting and scheduling not working, quality management scorecards not scoring correctly, CXone Copilot freezing agent UI, comparing NICE CXone pricing tiers (Digital $71 to Complete $209/agent/mo), integrating CXone with Salesforce or other CRM, CXone reporting hard to understand, or audio quality issues on CXone calls. Do NOT use for building a general coaching program (use /sales-coaching) or reviewing a specific call transcript (use /sales-call-review)."
argument-hint: "[describe what you need help with in NICE CXone]"
license: MIT
version: 1.0.0
tags: [sales, contact-center, ccaas, qa, platform]
github: "https://github.com/nice-devone"
---

# NICE CXone Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) ACD routing, IVR, or omnichannel setup
   - B) Workforce management (WFM) — forecasting, scheduling, adherence
   - C) Quality management (QM) — scorecards, evaluations, coaching
   - D) CXone Copilot / AI features
   - E) Digital engagement (chat, email, social, SMS)
   - F) Recording (voice + screen)
   - G) Reporting and analytics
   - H) API integration or SDK setup
   - I) Pricing comparison or tier selection
   - J) Salesforce or CRM integration
   - K) Comparing CXone to another platform (Five9, Genesys, Talkdesk)
   - L) Other

2. **What's your current setup?**
   - A) Evaluating whether to buy
   - B) New — haven't started implementation
   - C) In implementation
   - D) Running but having issues
   - E) Expanding to new modules

3. **Contact center size?**
   - A) Small (< 50 agents)
   - B) Mid-size (50-200 agents)
   - C) Large (200-1,000 agents)
   - D) Enterprise (1,000+ agents)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific call transcript for coaching | `/sales-call-review {user's question}` |
| Choosing between note-taker/conversation intelligence platforms | `/sales-note-taker {user's question}` |
| General CRM/tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |
| Observe.AI overlay for contact center QA | `/sales-observe-ai {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — NICE CXone platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Tier selection framework:**
1. Digital-only teams → Digital Agent ($71/agent/mo)
2. Voice-only teams → Voice Agent ($94/agent/mo)
3. Mixed channels → Omnichannel Agent ($110/agent/mo)
4. Need QM/screen recording → Essential Suite ($135/agent/mo)
5. Need WFM → Core Suite ($169/agent/mo)
6. Need analytics + sentiment → Complete Suite ($209/agent/mo)
7. Negotiate 15-25% below list on multi-year contracts

**When comparing to competitors:**
- vs **Five9**: Five9 is strongest on intelligent IVR and virtual agents. CXone is broader (WFM + QM built-in vs Five9 add-ons). Five9 easier to implement for mid-market.
- vs **Genesys Cloud CX**: Most direct competitor at enterprise tier. Genesys stronger on AI-driven routing and predictive engagement. CXone stronger on WFM depth and breadth of digital channels. Similar pricing range.
- vs **Talkdesk**: Talkdesk deploys faster, better for mid-market. CXone has deeper WFM, more mature QM, broader integration ecosystem.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **UI freezes when Copilot is enabled.** Agents report severe UI freezes, delayed input, and unreliable call controls with Copilot active. Workflows return to normal when Copilot is disabled. Test Copilot with a small group before rolling out.
- **Reporting is hard to understand.** Users consistently cite reporting as the weakest module — confusing navigation, non-intuitive dashboard building, and limited out-of-box reports. Budget time for report customization.
- **Can't forecast DFO digital channels.** WFM forecasting only works for legacy email and chat — if you're using Digital First Omnichannel (DFO) chat and email, you cannot forecast those channels in CXone WFM.
- **Audio quality issues.** Crackling audio and diffused calls are reported. Often resolved by clearing browser cache/cookies, but recurs. Check WebRTC/browser compatibility.
- **Support can take weeks.** Without a dedicated Technical Account Manager (TAM), bug resolution and support tickets are slow. Consider TAM add-on for production environments.
- **Portal login issues.** Password-saving and SSO issues cause recurring monthly login problems. Keep backup admin access.
- **Pricing lacks transparency.** Six tiers from $71-$209/agent/mo, but feature breakdown across tiers is unclear. Get a detailed feature matrix before committing.

## Related skills

- `/sales-observe-ai` — Observe.AI platform help (enterprise QA overlay for CXone contact centers)
- `/sales-balto` — Balto platform help (real-time AI guidance that integrates with CXone)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI with CXone integration)
- `/sales-call-review` — Review specific calls and extract coaching insights
- `/sales-coaching` — Build coaching programs for contact center agents
- `/sales-note-taker` — Compare conversation intelligence tools or wire APIs into CRM
- `/sales-enthu` — Enthu.AI platform help (affordable contact center QA alternative)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing the right CXone tier
**User says**: "We have 150 agents handling phone and chat. Which CXone plan do we need?"
**Skill does**:
1. Identifies Omnichannel Agent ($110/agent/mo) as baseline for mixed channels
2. Asks if they need QM/screen recording (→ Essential $135) or WFM (→ Core $169)
3. Calculates annual cost range and suggests negotiation targets
4. Compares to Five9 and Genesys pricing for context
**Result**: Clear tier recommendation with cost estimate and negotiation guidance

### Example 2: CXone reporting not useful
**User says**: "Our managers can't get useful reports out of CXone — they're building everything in Excel instead"
**Skill does**:
1. Confirms reporting is a known weak point — non-intuitive dashboard building
2. Recommends using prebuilt data visualization dashboards (Omnichannel+ tiers)
3. Suggests Data Extraction APIs for pushing data to BI tools (Tableau, Power BI)
4. Points to Real-Time Data APIs for custom dashboards
**Result**: Reporting strategy that works around CXone's limitations

### Example 3: Comparing CXone to Five9
**User says**: "We're evaluating NICE CXone vs Five9 for our 300-agent contact center"
**Skill does**:
1. Compares pricing: CXone $110-$209/agent vs Five9 $175-$325/agent
2. Maps strengths: CXone WFM + QM depth vs Five9 IVR + virtual agent ease
3. Notes CXone's broader digital channel support (30+) vs Five9's AI focus
4. Recommends POC criteria and pilot approach
**Result**: Side-by-side comparison tailored to their scale

## Troubleshooting

### Copilot causing agent UI freezes
**Symptom**: Agent workspace becomes unresponsive, delayed input, call controls unreliable
**Cause**: CXone Copilot AI processing overloading the browser-based agent workspace
**Solution**: Disable Copilot for affected agents temporarily. Test with Chrome latest version and cleared cache. Reduce concurrent AI features. Report to NICE support with browser console logs. This is a known issue — monitor release notes for fixes.

### Audio quality degradation
**Symptom**: Crackling audio, diffused calls, agents and customers can't hear clearly
**Cause**: WebRTC issues, browser cache corruption, or network configuration
**Solution**: Clear browser cache and cookies. Test in incognito mode. Check bandwidth requirements (100 Kbps per concurrent call minimum). Verify WebRTC is not blocked by firewall. Switch browsers if issue persists (Chrome recommended).

### WFM can't forecast digital channels
**Symptom**: Forecasting module only shows legacy email/chat, not DFO channels
**Cause**: WFM forecasting doesn't support Digital First Omnichannel (DFO) channels yet
**Solution**: No native fix currently. Workaround: export DFO volume data via Data Extraction APIs and forecast externally (Excel, Tableau). Or use legacy channel routing for channels that need WFM forecasting.
