---
name: sales-balto
description: "Balto platform help — contact center real-time AI guidance with live call coaching, automated QA on 100% of calls, compliance monitoring, and automatic call summarization to CRM. Use when agents aren't following compliance scripts and you need real-time enforcement, QA team is only sampling a fraction of calls and missing problems, new agent ramp time is too long and you want live guidance to accelerate it, need real-time PCI/HIPAA/regulatory scanning during calls, Balto prompts aren't triggering correctly or showing on the wrong screen, comparing Balto vs Observe.AI or CallMiner for contact center QA, or configuring Balto with Five9, Genesys, or Amazon Connect. Do NOT use for building a general coaching program (use /sales-coaching) or reviewing a specific call transcript (use /sales-call-review)."
argument-hint: "[describe what you need help with in Balto]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, contact-center, compliance, platform]
---

# Balto Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Real-Time Guidance setup (dynamic prompts, checklists, objection handling)
   - B) Real-Time QA configuration (automated scoring, compliance checks)
   - C) Coaching workflows (coachable moments, manager alerts)
   - D) Compliance monitoring (PCI, HIPAA, regulatory scanning)
   - E) Integrations (CCaaS, CRM, softphone)
   - F) Balto Notes (automatic call summarization to CRM)
   - G) Comparing Balto to another tool
   - H) Other

2. **What's your current setup?**
   - A) New to Balto — evaluating or haven't started
   - B) Purchased but in implementation (45-60 day window)
   - C) Running but having issues
   - D) Expanding to additional teams or modules

3. **What's your CCaaS / telephony?**
   - A) Five9
   - B) Genesys Cloud CX
   - C) Amazon Connect
   - D) Twilio Flex
   - E) Talkdesk
   - F) NICE CXone
   - G) Cisco UCCE/PCCE (on-prem)
   - H) Avaya Aura (on-prem)
   - I) Microsoft Teams
   - J) Other

4. **Team size?**
   - A) 50-100 agents
   - B) 100-500 agents
   - C) 500+ agents

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific call transcript for coaching | `/sales-call-review {user's question}` |
| Choosing between note-taker/conversation intelligence platforms | `/sales-note-taker {user's question}` |
| General CRM/tool integration patterns (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — Balto platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, compliance, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Implementation priority order:**
1. Connect your CCaaS/telephony first — Balto must hook into the audio stream before anything works
2. Deploy the Balto desktop app or browser extension to agent workstations
3. Build your first playbook — start with one high-value use case (compliance checklist or objection handling)
4. Configure Real-Time QA scoring criteria aligned to your existing QA rubric
5. Set up coaching alerts so managers get notified of coachable moments in real time
6. Enable Balto Notes for automatic call summarization to CRM last — after guidance is stable

**When comparing to Gong/enterprise CI tools:** Balto's differentiator is real-time, in-call guidance — it coaches agents during the conversation, not after. Trade-off is that Balto focuses on contact centers (not field sales or deal intelligence) and requires 50+ agents minimum with enterprise pricing.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API documentation.** API access is customer-only behind login at balto.ai/docs. REST + webhooks with API key auth, but no self-service docs to evaluate before buying. Ask your account rep for API scope during evaluation.
- **50+ agent minimum typical.** Balto targets mid-market to enterprise contact centers. Small teams under 50 agents are unlikely to get a contract or favorable pricing.
- **45-60 day implementation.** Unlike lightweight tools that go live in hours, Balto requires CCaaS integration, desktop deployment, playbook configuration, and training. Plan for a 2-month rollout.
- **Pricing is quote-based and enterprise-level.** Estimated ~$100-150/agent/month (~$1,200+/agent/year). Annual contracts, custom packaging. Get a written quote with module breakdown before committing.
- **On-prem telephony adds complexity.** Cisco UCCE/PCCE and Avaya Aura integrations work but require more implementation effort than cloud CCaaS platforms. Confirm your specific PBX version is supported.
- **Real-time guidance requires stable, low-latency network.** Balto claims <200ms latency for live prompts. Network issues can delay prompts past the useful moment or cause the overlay to disconnect.

## Related skills

- `/sales-coaching` — Sales coaching and training programs
- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-note-taker` — AI note-taker selection and API integration
- `/sales-enthu` — Enthu.AI platform help (affordable contact center QA alternative)
- `/sales-salesken` — Salesken platform help (real-time in-call coaching, multilingual, APAC focus)
- `/sales-clari-copilot` — Clari Copilot platform help (real-time battlecards, live coaching)
- `/sales-revenue-io` — Revenue.io platform help (Salesforce-native real-time coaching)
- `/sales-integration` — Tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Compliance script enforcement
**User says**: "Agents aren't following the compliance script on Medicare calls"
**Skill does**:
1. Sets up a Real-Time Guidance playbook with a Medicare compliance checklist
2. Configures required disclosures as mandatory checkpoints agents must hit during the call
3. Enables Real-Time QA to automatically flag calls where compliance items were missed
4. Sets up manager alerts for compliance violations detected in real time
**Result**: Live compliance enforcement with automatic violation detection and manager notification

### Example 2: QA coverage gaps
**User says**: "We're only QA-ing 2% of calls and missing problems"
**Skill does**:
1. Explains Balto's Real-Time QA module that scores 100% of calls automatically
2. Walks through configuring scoring criteria to match existing QA rubric
3. Sets up priority-ranked dashboards so QA team reviews the worst calls first, not random samples
4. Configures alerts for threshold violations (compliance breaches, low scores)
**Result**: Automated QA on every call with priority-based review queue replacing random sampling

### Example 3: Accelerating new agent ramp
**User says**: "New agents take 3 months to ramp and we need to cut that in half"
**Skill does**:
1. Configures Real-Time Guidance playbooks for common call scenarios new agents struggle with
2. Sets up dynamic objection handling prompts that appear when the AI detects customer pushback
3. Enables coaching alerts so managers can listen in and intervene on flagged calls
4. Tracks ramp metrics over time using QA scores to measure improvement
**Result**: Live in-call guidance that acts as a training wheel, with coaching triggers for manager intervention

## Troubleshooting

### Real-time guidance appearing on wrong monitor
**Symptom**: Balto overlay displays on the agent's secondary monitor instead of next to their softphone
**Cause**: Balto desktop app defaults to a monitor that may not match the agent's phone/browser layout
**Solution**: In the Balto desktop app settings, configure the display monitor preference. If using a browser extension, ensure it's pinned in the browser where the softphone runs. For VDI environments (Citrix, VMware), confirm the extension is installed inside the virtual desktop, not on the local machine.

### Balto not connecting to calls
**Symptom**: Balto app shows "disconnected" or no real-time prompts appear during live calls
**Cause**: CCaaS integration may not be passing the audio stream, or the agent's Balto client isn't authenticated
**Solution**: Verify the CCaaS integration is active in Balto admin (Five9, Genesys, etc.). Check that the agent is logged into the Balto desktop app with valid credentials. For on-prem telephony (Cisco, Avaya), confirm the SIP/CTI integration is routing audio correctly. Restart the Balto client and test with a known call.

### AI prompts too generic / not handling nuanced conversations
**Symptom**: Real-time guidance gives boilerplate suggestions that don't match the actual conversation context
**Cause**: Playbooks may be configured with broad triggers instead of specific conversation patterns
**Solution**: Review your playbook trigger conditions — use specific keyword phrases and conversation patterns rather than generic topics. Add branching logic for different customer scenarios. Use Balto Insights data to identify which prompts agents are dismissing (signal that they're not useful) and refine or remove them.
