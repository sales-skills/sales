---
name: sales-observe-ai
description: "Observe.AI platform help — enterprise contact center intelligence with Auto QA scoring on 100% of interactions, Agent Copilot real-time guidance, Coaching Copilot post-call performance management, VoiceAI and ChatAI virtual agents, screen recording, Insights Copilot. Use when setting up Observe.AI Auto QA scorecards for contact center agents, Agent Copilot not surfacing guidance during live calls, transcription accuracy issues or speaker attribution errors, comparing Observe.AI vs Balto or Cresta or CallMiner for contact center QA, integrating Observe.AI with Five9 or Amazon Connect or Talkdesk, or configuring compliance monitoring and regulatory audit trails. Do NOT use for building a general coaching program (use /sales-coaching) or reviewing a specific call transcript (use /sales-call-review)."
argument-hint: "[describe what you need help with in Observe.AI]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, contact-center, qa, platform]
---

# Observe.AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Auto QA scorecards and evaluation criteria
   - B) Configuring Agent Copilot for real-time guidance
   - C) Coaching Copilot — post-call performance management
   - D) VoiceAI or ChatAI virtual agent setup
   - E) CCaaS integration (Five9, Amazon Connect, Talkdesk, etc.)
   - F) API integration — pulling interactions, transcripts, evaluations
   - G) Comparing Observe.AI to another tool (Balto, Cresta, CallMiner, Enthu.AI)
   - H) Compliance monitoring and audit trails
   - I) Other

2. **What's your current setup?**
   - A) Evaluating whether to buy
   - B) New — haven't started implementation
   - C) In implementation (3-6 month timeline)
   - D) Running but having issues
   - E) Expanding to new modules (adding Agent Copilot, VoiceAI, etc.)

3. **What's your CCaaS/telephony?**
   - A) Five9
   - B) Amazon Connect
   - C) Talkdesk
   - D) NICE CXone
   - E) Genesys
   - F) Avaya
   - G) Twilio
   - H) 8x8
   - I) Other

4. **Contact center size?**
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

Otherwise, answer directly using the platform reference below.

## Step 3 — Observe.AI platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Implementation priority order:**
1. Connect your CCaaS first — call data must flow before anything else works
2. Configure Auto QA with a starter scorecard (5-8 criteria) — validate transcription accuracy on 50+ calls before trusting scores
3. Set coaching thresholds — which score ranges trigger supervisor alerts
4. Roll out Coaching Copilot for managers with coaching dashboards
5. Add Agent Copilot for real-time guidance once post-call QA is stable
6. VoiceAI/ChatAI agents last — these require the most tuning and governance setup

**When comparing to competitors:**
- vs **Balto**: Balto is stronger on real-time during-call guidance (sub-200ms), Observe.AI is stronger on post-call QA analytics and has broader AI agent capabilities. Balto deploys in 45-60 days vs Observe.AI's 3-6 months.
- vs **Cresta**: Similar enterprise scope. Cresta has Knowledge Agent (RAG from knowledge bases during calls) and stronger virtual agent capabilities. Observe.AI has stronger post-call QA and compliance audit trails.
- vs **Enthu.AI**: Enthu is faster to deploy (hours not months), cheaper (~$15-69/user/mo), and needs no minimums. Observe.AI is for enterprise scale (100+ agents) with deeper analytics and AI agent capabilities.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Transcription accuracy degrades with accents, background noise, and overtalk.** Validate accuracy on your actual call recordings before trusting Auto QA scores. Speaker attribution (agent vs customer) errors are a known pain point — test diarization quality early.
- **No public pricing.** All five tiers require "Talk to sales." Estimated $100-500/user/mo based on review sites. Get a direct quote — pricing varies by agent count, modules, and contract length.
- **Implementation takes 3-6 months** for full deployment. Unlike Enthu.AI (hours) or Balto (45-60 days), Observe.AI requires significant setup for CCaaS integration, QA calibration, and agent rollout.
- **Post-call analytics were the original focus.** Real-time Agent Copilot is newer — if real-time during-call coaching is your primary need, evaluate Balto or Cresta alongside Observe.AI.
- **API docs are JS-rendered and partially gated.** The Redoc page at api-docs.observe.ai exists but requires JavaScript rendering. Plan for limited self-serve API exploration — you may need to request the OpenAPI spec from your account team.
- **Call segmentation on long calls.** Users report that long calls get split into smaller segments, losing full context for QA scoring. Ask about segmentation behavior during evaluation.
- **EU AI Act (August 2026)** will require documenting how AI generates QA recommendations and giving agents the ability to challenge AI feedback. Discuss compliance readiness with Observe.AI before committing.

## Related skills

- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-coaching` — Build coaching programs, onboarding, role-plays, certifications
- `/sales-note-taker` — Compare AI note-takers and conversation intelligence tools or wire APIs into CRM
- `/sales-enthu` — Enthu.AI platform help (contact center QA, affordable alternative for smaller teams)
- `/sales-balto` — Balto platform help (real-time AI guidance for contact centers, fastest deployment)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI, broadest scope)
- `/sales-salesken` — Salesken platform help (real-time coaching + QA, multilingual, APAC focus)
- `/sales-gong` — Gong platform help (enterprise revenue intelligence, sales-focused CI)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Evaluating Observe.AI for a 500-agent contact center
**User says**: "We have 500 agents on Five9 and only review 2% of calls manually. Would Observe.AI help?"
**Skill does**:
1. Confirms Observe.AI's core value — Auto QA on 100% of calls vs manual sampling
2. Explains Five9 native integration and implementation timeline
3. Compares pricing and deployment vs alternatives (Balto, Cresta, Enthu.AI)
4. Recommends starting with Post-interaction AI tier, adding Agent Copilot later
**Result**: Clear evaluation framework with implementation roadmap

### Example 2: Transcription accuracy issues
**User says**: "Our Observe.AI transcripts are inaccurate — agents are being misscored because of bad transcription"
**Skill does**:
1. Identifies common causes: accents, background noise, overtalk, speaker diarization errors
2. Recommends reviewing Auto QA scorecard criteria — make criteria less transcript-dependent where possible
3. Suggests working with Observe.AI support on transcription model tuning
4. Notes workarounds: use sentiment/keyword tracking alongside transcript-based scoring
**Result**: Troubleshooting plan for transcription quality issues

### Example 3: Comparing contact center QA tools
**User says**: "Observe.AI vs Balto vs Cresta — which one for a 200-agent insurance call center?"
**Skill does**:
1. Maps each platform's strengths to insurance use case (compliance, real-time guidance, QA)
2. Recommends Observe.AI or Cresta for post-call QA depth, Balto for real-time compliance alerts
3. Compares pricing ranges and deployment timelines
4. Suggests evaluating all three in a pilot with 20-30 agents
**Result**: Side-by-side comparison tailored to regulated industry requirements

## Troubleshooting

### Auto QA scores seem inconsistent
**Symptom**: Similar calls getting very different auto-scores
**Cause**: Scorecard criteria may be too subjective for AI, or transcription errors are affecting scoring
**Solution**: Make each criterion specific and binary where possible. Review transcription accuracy on a sample of 50 calls — if diarization is wrong (agent words attributed to customer or vice versa), scores will be unreliable. Calibrate by having human QA reviewers score the same 20 calls and compare to Auto QA scores.

### Agent Copilot guidance not appearing during calls
**Symptom**: Agents don't see real-time prompts during live calls
**Cause**: CCaaS integration may not be streaming audio correctly, or Agent Copilot module isn't enabled on the tier
**Solution**: Verify your tier includes real-time AI (not just Post-interaction AI). Check CCaaS audio stream configuration — Agent Copilot needs live audio, not post-call recordings. Test with a single agent before rolling out to the floor.

### Long calls split into segments
**Symptom**: A single 45-minute call appears as multiple shorter interactions in Observe.AI
**Cause**: Call segmentation logic splitting on hold/transfer events or silence gaps
**Solution**: Review segmentation settings with your Observe.AI implementation team. For QA purposes, ensure scorecards account for segmented calls — a compliance disclosure at the start may not appear in a later segment.
