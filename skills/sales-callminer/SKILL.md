---
name: sales-callminer
description: "CallMiner platform help — enterprise conversation analytics (Eureka) with omnichannel interaction capture, automated QA scoring, agent coaching, real-time alerts, compliance monitoring, and CX automation. Use when QA scoring is inconsistent or takes too long across agents, when needing to analyze 100% of customer interactions instead of sampling, when setting up automated compliance monitoring for regulated industries (healthcare, finance, collections), when CallMiner Coach scorecards aren't surfacing the right coaching moments, when CallMiner RealTime alerts aren't triggering during live calls, when ingesting audio or text into CallMiner via the Ingestion API, when CallMiner Analyze categories aren't matching expected interactions, or when evaluating CallMiner vs Observe.AI or NICE CXone analytics. Do NOT use for CCaaS platform selection (use /sales-ccaas-selection) or for sales-specific coaching strategy (use /sales-coaching)."
argument-hint: "[describe what you need help with in CallMiner]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, contact-center, qa, compliance, platform]
---

# CallMiner Platform Help

Help the user with CallMiner Eureka platform questions — from interaction capture and automated QA through agent coaching, real-time alerts, compliance monitoring, and API integration.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of CallMiner do you need help with?**
   - A) Capture — recording, screen capture, redaction setup
   - B) Analyze — categories, scoring, sentiment, topic extraction
   - C) Coach — agent scorecards, coaching plans, performance tracking
   - D) RealTime — live alerts, next-best-action, real-time guidance
   - E) Compliance — PCI/HIPAA monitoring, PII redaction, risk flagging
   - F) API — Ingestion API (audio/text in), Data API (insights out)
   - G) Integrations — CRM, CCaaS, WFM, transcription engine
   - H) OmniAgent / Outreach / LiveTranslate — automation modules
   - I) Admin — licensing, user management, permissions
   - J) Something else

2. **What's your role?**
   - A) QA Manager / QA Analyst
   - B) Contact center manager / supervisor
   - C) Compliance / risk officer
   - D) CX / VoC analyst
   - E) IT / admin / developer
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or issue)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| CCaaS platform comparison/selection | `/sales-ccaas-selection {question}` |
| Agent coaching strategy (not CallMiner-specific) | `/sales-coaching {question}` |
| Customer feedback / NPS / CSAT strategy | `/sales-customer-feedback {question}` |
| Connecting CallMiner to other tools (architecture) | `/sales-integration {question}` |

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — CallMiner platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API overview, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** for their goal in CallMiner
2. **Configuration recommendations** — specific settings, category rules, scoring criteria
3. **Common pitfalls** — what goes wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — point to `references/callminer-api-reference.md`

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Expect a 3-6 month ramp-up.** CallMiner is powerful but complex — building accurate categories, scoring models, and coaching workflows takes months. Don't expect instant ROI. Budget for dedicated analyst time during setup.
- **Auto-logout after 30 minutes is by design.** The session timeout is short and affects all open tabs simultaneously. Save work frequently. This is a known pain point with no user-configurable override.
- **Category tuning is iterative, not one-shot.** Initial category rules will have false positives/negatives. Plan for weekly refinement cycles during the first quarter. Test categories against known-good interactions before deploying to scoring.
- **Transcription engine choice affects everything downstream.** CallMiner supports multiple ASR engines (Deepgram, Google, Azure, Nuance) via OVTS. Accuracy varies by accent, industry jargon, and audio quality. Test multiple engines with your actual call recordings before committing.
- **Pricing is opaque — negotiate hard.** No public pricing. Average ~$102K/year but ranges widely. Seat-based vs. hours-analyzed licensing models have very different economics depending on your volume and agent count.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-coaching` — Sales coaching, QA, and agent training strategy (platform-agnostic)
- `/sales-ccaas-selection` — Compare CCaaS platforms (Genesys, NICE, Talkdesk, Five9, etc.)
- `/sales-observe-ai` — Observe.AI — contact center AI for QA and agent assist (CallMiner alternative)
- `/sales-cresta` — Cresta — enterprise contact center AI (CallMiner alternative)
- `/sales-balto` — Balto — real-time agent assist (CallMiner RealTime alternative)
- `/sales-convin` — Convin — conversation intelligence with auto QA
- `/sales-enthu` — Enthu.AI — contact center conversation intelligence
- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC strategy
- `/sales-integration` — Connect CallMiner to CRM, CCaaS, or other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Automated QA scoring setup
**User says**: "We're only scoring 2% of calls manually — how do I set up automated QA in CallMiner?"
**Skill does**:
1. Reads platform guide for Analyze and Coach modules
2. Explains category-based scoring — define quality criteria as categories, assign weights, auto-score 100% of interactions
3. Walks through creating a QA scorecard with weighted categories (compliance, empathy, resolution, script adherence)
4. Recommends starting with a calibration period comparing auto-scores to manual scores
**Result**: User has a plan to move from 2% manual sampling to 100% automated QA scoring

### Example 2: Compliance monitoring
**User says**: "We need to monitor all calls for PCI compliance — agents sometimes read back full card numbers"
**Skill does**:
1. Reads platform guide for compliance and Redact modules
2. Explains how to create categories detecting PCI-sensitive language patterns
3. Walks through Redact configuration for automatic PII masking in transcripts and audio
4. Recommends RealTime alerts for live intervention when PCI violations detected
**Result**: User has PCI compliance monitoring with auto-redaction and real-time agent alerts

## Troubleshooting

### Steep learning curve — don't know where to start
**Symptom**: Platform feels overwhelming, too many modules and configuration options
**Cause**: CallMiner is enterprise-grade — it's designed for dedicated analysts, not casual users
**Solution**: Start with ONE use case (e.g., automated QA on a single queue). Build 5-10 categories, validate against known interactions, then expand. CallMiner offers a sandbox environment for testing. Budget 3-6 months for the first production deployment. Request CallMiner's onboarding support — initial hand-holding is available.

### Categories not matching expected interactions
**Symptom**: Auto-scoring misses interactions that should match, or flags ones that shouldn't
**Cause**: Category rules are too narrow (missing synonyms/variations) or too broad (matching unrelated phrases)
**Solution**: Review the category's keyword/phrase rules. Use CallMiner's "Test" feature to run categories against a sample set. Add phrase variations and exclusions iteratively. Check transcription accuracy first — poor ASR = poor category matching regardless of rule quality.

### Pages timing out / session drops
**Symptom**: UI tabs time out and log you out across all open pages simultaneously
**Cause**: 30-minute session timeout is system-wide; one tab expiring kills all sessions
**Solution**: Save work frequently. Avoid having many tabs open simultaneously. If running long analysis queries, use the API (Data API) for batch exports instead of the UI. This is a known limitation — no workaround for extending the timeout.
