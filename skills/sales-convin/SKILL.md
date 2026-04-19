---
name: sales-convin
description: "Convin platform help — AI-powered contact center QA, coaching, and conversation intelligence. Use when setting up Convin automated QA scoring, Convin Real-Time Assist not surfacing prompts, Convin transcription missing speakers or inaccurate with accents, Convin audits hanging or calls delayed on dashboard, Convin AI Phone Call agent for outbound, Convin LMS agent training, or evaluating Convin vs Observe.AI vs Cresta vs Balto vs Enthu.AI for contact center QA. Do NOT use for CCaaS platform selection (use /sales-ccaas-selection) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe what you need help with in Convin]"
license: MIT
version: 1.0.0
tags: [sales, contact-center, qa, coaching, conversation-intelligence, platform]
---

# Convin Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need?**
   - A) Set up automated QA scoring
   - B) Configure Real-Time Assist for agents
   - C) Deploy AI Phone Call agent (outbound voicebot)
   - D) Set up agent coaching/LMS
   - E) Troubleshoot transcription accuracy
   - F) Integration with my CCaaS or CRM
   - G) Compare Convin to alternatives
   - H) Other

2. **Your contact center setup?**
   - A) Small (<50 agents)
   - B) Mid-size (50-350 agents)
   - C) Large (350+ agents)

3. **Current CCaaS?**
   - A) Amazon Connect
   - B) Avaya
   - C) 8x8
   - D) Bright Pattern
   - E) Aircall
   - F) Other / not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between CCaaS platforms | `/sales-ccaas-selection {user's question}` |
| Building a coaching program across tools | `/sales-coaching {user's question}` |
| Comparing note-taker / CI platforms | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Convin vs Observe.AI vs Cresta vs Balto | Answer directly — read `references/platform-guide.md` for competitive positioning |

## Step 3 — Convin platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, integrations, competitive positioning, workflow setup.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

**QA setup priority**: Start with 3-5 high-impact evaluation criteria, not 20. Convin's AI scoring works best with clear, binary criteria ("Did the agent verify the customer's identity?") rather than subjective ones ("Was the agent empathetic?"). Expand criteria after calibrating AI scores against manual QA for 2-4 weeks.

**Transcription accuracy**: If accuracy is poor with accents or mixed languages, request a custom model tuning from Convin support — their proprietary LLM can be fine-tuned per customer. Budget 2-3 weeks for tuning.

**Real-Time Assist rollout**: Pilot with 10-20 agents on a single queue before rolling out broadly. Monitor for "alert fatigue" — if agents start ignoring prompts, reduce trigger frequency and focus on highest-value moments (compliance, upsell, escalation).

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about integrations and feature availability that may be outdated.*

- **No public API.** All integrations go through Convin's pre-built connectors (30+ across CCaaS, CRM, dialers, HR, BI). Custom integrations have a ~3-day turnaround from Convin's team, but you can't build your own.
- **Transcription struggles with speaker separation.** Multiple G2/Capterra reviewers report the AI sometimes can't distinguish agent from customer voices, especially on poor-quality recordings. Verify diarization accuracy in your pilot before scaling QA.
- **Dashboard delays.** Calls don't always surface immediately — expect occasional delays of hours. Don't build real-time alerting workflows that depend on instant call availability.
- **AI scoring lacks explanations.** When the AI marks a criterion as "No," it doesn't always explain why. Supervisors may need to listen to the call to understand the score, which partially defeats the purpose of automated QA.
- **Steep initial learning curve.** Plan 2-4 weeks of admin training. The platform has many modules and configuration isn't intuitive out of the box.
- **Custom pricing only.** No self-serve plans — you must go through sales. A free tier exists but with limited features.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-observe-ai`, `/sales-cresta`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md`.

## Related skills

- `/sales-observe-ai` — Observe.AI platform help (100% Auto QA, Agent Copilot, VoiceAI/ChatAI agents, enterprise contact center intelligence)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI, real-time agent assist, Knowledge Agent, AI virtual agents)
- `/sales-balto` — Balto platform help (real-time AI guidance for contact centers, <200ms latency, compliance monitoring)
- `/sales-enthu` — Enthu.AI platform help (affordable contact center QA with auto-scoring, agent coaching)
- `/sales-salesken` — Salesken platform help (real-time in-call coaching, QA automation, multilingual, APAC focus)
- `/sales-verint` — Verint platform help (enterprise WEM/CX automation, Da Vinci AI bots, BYOT any-ACD)
- `/sales-calabrio` — Calabrio ONE platform help (standalone WEM with QM scorecards, WFM, interaction analytics)
- `/sales-nice-cxone` — NICE CXone platform help (full CCaaS with built-in QM, Interaction Analytics)
- `/sales-coaching` — Build coaching programs that consume QA and call data across any platform
- `/sales-note-taker` — Picking or integrating an AI meeting note-taker / conversation intelligence platform
- `/sales-ccaas-selection` — Comparing CCaaS platforms (Genesys vs NICE vs Talkdesk vs Five9)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up automated QA
**User says**: "I want Convin to score 100% of our support calls automatically"
**Skill does**:
1. Reads platform guide for QA module details
2. Recommends starting with 3-5 binary criteria (identity verification, greeting script, issue resolution confirmation)
3. Explains calibration: run AI scoring alongside manual QA for 2-4 weeks, compare scores, adjust criteria
4. Warns about the AI explanation gap — supervisors need a plan for reviewing disagreements
**Result**: Phased QA automation rollout plan with calibration timeline

### Example 2: Comparing Convin to Observe.AI
**User says**: "We're evaluating Convin vs Observe.AI for our 200-agent contact center"
**Skill does**:
1. Reads platform guide competitive section
2. Compares: Convin is India-based with strong APAC support and potentially lower pricing; Observe.AI has deeper virtual agent capabilities and US enterprise presence
3. Notes: Both offer 100% automated QA and real-time assist. Convin adds AI Phone Call agent (outbound voicebot); Observe.AI has VoiceAI/ChatAI agents
4. Recommends evaluating based on CCaaS compatibility, transcription accuracy for your languages, and pricing
**Result**: Side-by-side comparison with decision criteria specific to their setup

### Example 3: Troubleshooting transcription accuracy
**User says**: "Convin transcription is missing what our agents say, especially with Indian accents"
**Skill does**:
1. Identifies known speaker diarization issue from Gotchas
2. Recommends requesting custom model tuning from Convin support (2-3 week process)
3. Suggests checking audio quality at source — poor VoIP quality amplifies transcription issues
4. Notes that Convin's proprietary LLM supports 70+ languages and can be fine-tuned per customer
**Result**: Actionable fix path with expected timeline

## Troubleshooting

### Transcription not capturing agent voice
**Symptom**: Transcript shows customer speech but agent words are missing or garbled
**Cause**: Speaker diarization struggles with certain audio configurations (mono recordings, low bitrate, echo)
**Solution**: Ensure your CCaaS exports stereo recordings with separate agent/customer channels. If mono-only, request custom model tuning from Convin support. Check that microphone levels aren't drastically different between agent and customer.

### QA audits hanging or not showing results
**Symptom**: Audit tab shows loading spinner or blank results
**Cause**: Processing delays during high-volume periods, or scoring rules still in draft state
**Solution**: Verify scoring rules are published (not draft). Check if the issue is systemic (all calls) or specific to certain queues. For persistent hanging, escalate to Convin support — they can check backend processing queues.

### AI scoring disagrees with manual QA on subjective criteria
**Symptom**: AI marks "empathy" or "tone" criteria differently than human evaluators
**Cause**: Subjective criteria are inherently harder for AI to score consistently
**Solution**: Replace subjective criteria with observable behaviors: instead of "Was the agent empathetic?", use "Did the agent acknowledge the customer's frustration?" or "Did the agent use the customer's name?". Binary, observable criteria produce 80%+ AI-human agreement; subjective ones produce 50-60%.
