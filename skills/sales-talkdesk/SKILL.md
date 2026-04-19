---
name: sales-talkdesk
description: "Talkdesk platform help — cloud contact center (CCaaS) with AI virtual agents, omnichannel routing, workforce management, and quality management. Use when setting up Talkdesk ACD routing or Studio IVR, calls keep dropping or audio quality is bad, AI features like Autopilot and CoPilot are expensive add-ons, comparing Talkdesk pricing tiers (Digital $85 to Industry $225/agent/mo), integrating Talkdesk with Salesforce Service Cloud Voice, Talkdesk reporting is hard to customize, WFM forecasting or scheduling not working, or implementation taking too long. Do NOT use for building a general coaching program (use /sales-coaching) or reviewing a specific call transcript (use /sales-call-review)."
argument-hint: "[describe what you need help with in Talkdesk]"
license: MIT
version: 1.0.0
tags: [sales, contact-center, ccaas, platform]
---

# Talkdesk Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) ACD routing, IVR (Studio), or call flow setup
   - B) Digital channels (email, chat, SMS, social messaging)
   - C) AI features — Autopilot (virtual agents), CoPilot (agent assist), Navigator (routing)
   - D) Quality management — QA scoring, evaluations
   - E) Workforce management — forecasting, scheduling, adherence
   - F) Outbound dialer or campaign management
   - G) Reporting and analytics
   - H) API integration or Connections setup
   - I) Pricing comparison or tier selection
   - J) Salesforce or CRM integration
   - K) Comparing Talkdesk to another platform (Five9, NICE CXone, Genesys)
   - L) Other

2. **What's your current setup?**
   - A) Evaluating whether to buy
   - B) New — haven't started implementation
   - C) In implementation
   - D) Running but having issues
   - E) Expanding to new modules

3. **Contact center size?**
   - A) Small (< 25 agents — consider Express free tier)
   - B) Mid-size (25-200 agents)
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
| Overlay QA tools for Talkdesk (Observe.AI, Balto, Cresta) | `/sales-observe-ai` or `/sales-balto` or `/sales-cresta` |
| Comparing to NICE CXone | `/sales-nice-cxone {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — Talkdesk platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Tier selection framework:**
1. Small US/Canada team (< 25 agents) → Express (free, 25 licenses)
2. Digital-only → Digital Essentials ($85/agent/mo)
3. Voice-only → Voice Essentials ($105/agent/mo)
4. Omnichannel + WFM + screen recording → Elite ($165/agent/mo)
5. Industry-specific (healthcare, banking, retail) → Experience Cloud ($225/agent/mo)
6. AI features (Autopilot, CoPilot, Navigator) are **paid add-ons** on all tiers — budget 20-60% above base price
7. All pricing assumes 3-year contract — negotiate 15-25% below list

**When comparing to competitors:**
- vs **Five9**: Five9 stronger on intelligent IVR and virtual agents, concurrent pricing model (cheaper for shift-based teams). Talkdesk deploys faster, more flexible with smaller teams, better industry-specific clouds.
- vs **NICE CXone**: CXone has deeper WFM, more mature QM, broader digital channels. Talkdesk easier to implement, better for mid-market. CXone stronger at enterprise scale.
- vs **Genesys Cloud CX**: Genesys stronger on AI-driven routing and predictive engagement. Talkdesk easier to deploy. Both Gartner Leaders. Similar enterprise pricing range.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **AI features are all expensive add-ons.** Autopilot, CoPilot, Navigator, and Interaction Analytics require separate quotes even on Elite ($165/agent/mo). Total costs typically climb 20-60% above listed per-agent price. Get an all-in quote before committing.
- **3-year contract required for listed pricing.** Shorter terms cost more. No publicly advertised volume discounts.
- **Telecom costs are separate.** PSTN usage, toll-free, and inbound numbers are billed in addition to per-user monthly fees. Budget for these on top of the agent license.
- **Implementation can take months.** Multiple reviews report 6-12+ months to go live with full implementation, with continued charges during setup. Define clear milestones and go-live criteria in contract.
- **Support tickets take 3-4 days.** For a call-center solution, this response time is unusually slow. Dedicated TAM add-on improves this but costs extra.
- **Call quality issues.** Dropped calls, crackling audio, and unclear error messages are consistently reported. Often related to WebRTC/browser issues — test in Chrome with cleared cache.
- **API access is restricted.** Only enterprise customers and AppConnect partners get API access — not included in base plans. Submit a request with account info.

## Related skills

- `/sales-nice-cxone` — NICE CXone platform help (primary CCaaS competitor)
- `/sales-observe-ai` — Observe.AI platform help (QA overlay that integrates with Talkdesk)
- `/sales-balto` — Balto platform help (real-time AI guidance for contact centers)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI)
- `/sales-call-review` — Review specific calls and extract coaching insights
- `/sales-coaching` — Build coaching programs for contact center agents
- `/sales-note-taker` — Compare conversation intelligence tools or wire APIs into CRM
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing the right Talkdesk tier
**User says**: "We have 80 agents handling phone and chat. Which Talkdesk plan do we need and what will it actually cost?"
**Skill does**:
1. Identifies Elite ($165/agent/mo) as baseline for omnichannel
2. Warns that AI features (Autopilot, CoPilot) are add-ons — budget $200-260/agent/mo all-in
3. Calculates annual cost range and suggests negotiation targets
4. Notes 3-year contract requirement and separate telecom fees
5. Compares to Five9 and NICE CXone pricing for context
**Result**: Clear tier recommendation with realistic all-in cost estimate

### Example 2: Talkdesk calls keep dropping
**User says**: "Our agents keep getting disconnected mid-call and the audio quality is terrible"
**Skill does**:
1. Confirms call quality issues are a known Talkdesk problem across reviews
2. Troubleshoots: browser cache/cookies, Chrome version, incognito mode test
3. Checks WebRTC and firewall configuration requirements
4. Recommends bandwidth verification (100 Kbps per concurrent call minimum)
5. Suggests opening a support ticket with browser console logs
**Result**: Systematic troubleshooting plan with fallback options

### Example 3: Comparing Talkdesk to Five9
**User says**: "We're evaluating Talkdesk vs Five9 for our 200-agent contact center with heavy outbound calling"
**Skill does**:
1. Notes Five9 is stronger for outbound-heavy (progressive dialer, TCPA compliance built-in)
2. Five9 concurrent pricing saves money for shift-based teams vs Talkdesk per-user
3. Talkdesk deploys faster and has industry-specific clouds (healthcare, banking)
4. Both Gartner Leaders — decision is about fit, not quality
5. Recommends POC criteria
**Result**: Side-by-side comparison tailored to their outbound-heavy use case

## Troubleshooting

### Calls dropping or audio quality issues
**Symptom**: Agents get disconnected, crackling audio, customers can't hear clearly
**Cause**: WebRTC issues, browser cache corruption, or network configuration
**Solution**: Clear browser cache and cookies. Test in incognito mode. Use Chrome (recommended). Check bandwidth (100 Kbps per concurrent call). Verify WebRTC isn't blocked by firewall. Check Talkdesk status page (status.talkdesk.com) for active incidents.

### Reporting is hard to customize
**Symptom**: Managers can't build useful reports, advanced features feel hidden
**Cause**: Reporting UI has a steep learning curve with non-intuitive navigation
**Solution**: Start with prebuilt reports before building custom. Use Explore API for programmatic data extraction to BI tools (Tableau, Power BI). Use Live API for real-time dashboards. Consider Data Extraction APIs for external analytics.

### Implementation taking too long
**Symptom**: Months into implementation, still not live, being charged during setup
**Cause**: Complex enterprise deployments with many modules, integrations, and customizations
**Solution**: Define clear go-live milestones in contract. Start with core voice before adding digital channels. Phase AI add-ons after core stabilization. Escalate to executive sponsor if timeline slips past contracted milestones. Get written go-live date commitment.
