---
name: sales-execvision
description: "ExecVision (Mediafly Coach360) platform help — conversation intelligence with call recording, AI-powered coaching plans, performance dashboards, conversation library, and smart alerts. Use when ExecVision coaching plans aren't surfacing the right performance gaps, when call scoring or smart alerts aren't triggering correctly, when evaluating whether to stay on ExecVision after the Mediafly acquisition, when setting up ExecVision integrations with your CRM or dialer, when building a conversation library for onboarding new reps, or when comparing ExecVision to Gong, Rafiki, or Mindtickle. Do NOT use for CCaaS platform selection (use /sales-ccaas-selection) or platform-agnostic coaching strategy (use /sales-coaching)."
argument-hint: "[describe what you need help with in ExecVision]"
license: MIT
version: 1.0.0
tags: [sales, conversation-intelligence, coaching, platform]
github: "https://github.com/mediafly"
---

# ExecVision (Mediafly Coach360) Platform Help

Help the user with ExecVision / Mediafly Coach360 questions — from call recording and conversation intelligence through coaching plans, smart alerts, and integrations.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of ExecVision do you need help with?**
   - A) Call recording — ingestion from dialers, conferencing, file storage
   - B) Conversation intelligence — transcription, smart alerts, keyword tracking
   - C) Coaching — coaching plans, scorecards, performance dashboards
   - D) Conversation library — clips, playlists, onboarding libraries
   - E) QA & compliance — quality assurance scoring, compliance monitoring
   - F) Integrations — CRM, dialer, conferencing, API
   - G) Migration — evaluating post-acquisition options
   - H) Something else

2. **What's your role?**
   - A) Sales manager / team lead
   - B) Sales enablement / L&D
   - C) QA / compliance
   - D) IT / admin
   - E) Other

3. **What are you trying to accomplish?** (describe your specific goal or issue)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| CCaaS platform comparison/selection | `/sales-ccaas-selection {question}` |
| Sales coaching strategy (not ExecVision-specific) | `/sales-coaching {question}` |
| Connecting ExecVision to other tools (architecture) | `/sales-integration {question}` |
| AI meeting note-taker comparison | `/sales-note-taker {question}` |

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — ExecVision platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, coaching workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Step-by-step instructions** for their goal in ExecVision
2. **Configuration recommendations** — smart alert rules, scorecard criteria, coaching plan setup
3. **Common pitfalls** — what goes wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — note that API exists but is not publicly documented; recommend contacting Mediafly support

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **ExecVision is now Mediafly Coach360.** Acquired in 2022, folded into Revenue360 suite. The execvision.io domain still works but pricing and packaging are now bundled. If evaluating today, you're buying Mediafly Revenue360, not standalone ExecVision.
- **No public pricing.** Historical pricing was ~$100-185/user/month. Now bundled in Mediafly suite — contact sales for quotes. Negotiate hard on seat counts — Mediafly may offer volume discounts.
- **API exists but isn't publicly documented.** Developer resources exist (sandbox, endpoints), but you must request API access through your account team. No self-serve developer portal.
- **Filter UI is the top user complaint.** G2 reviews consistently mention difficulty using filters to find specific calls or segments. Build saved filter presets for common queries.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-coaching` — Sales coaching, QA, and agent training strategy (platform-agnostic)
- `/sales-note-taker` — Compare AI meeting note-takers and conversation intelligence tools
- `/sales-callminer` — CallMiner — enterprise conversation analytics (ExecVision alternative for QA)
- `/sales-observe-ai` — Observe.AI — contact center AI (ExecVision alternative)
- `/sales-gong` — Gong — revenue intelligence (enterprise alternative)
- `/sales-integration` — Connect ExecVision to CRM, dialers, or other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Building a coaching plan from call data
**User says**: "My reps keep losing deals after the demo — how do I use ExecVision to figure out what's going wrong?"
**Skill does**:
1. Reads platform guide for coaching and conversation intelligence modules
2. Recommends creating smart alerts for demo calls with specific outcome keywords
3. Walks through building a coaching plan: tag demo calls → review lost-deal patterns → create scorecard criteria → assign coaching plans targeting identified gaps
4. Suggests building a conversation library of winning vs. losing demo clips for team review
**Result**: User has a data-driven coaching workflow for post-demo improvement

### Example 2: Evaluating post-acquisition migration
**User says**: "We've been on ExecVision for two years — should we stay now that it's Mediafly, or switch to something else?"
**Skill does**:
1. Reads platform guide for current status and Mediafly positioning
2. Explains what changed: pricing now suite-bundled, product roadmap tied to Revenue360
3. Presents decision framework: stay if coaching/enablement is primary use case and current ROI is positive; evaluate alternatives if needing deeper deal intelligence (→ Gong) or more affordable CI (→ Rafiki, Avoma)
4. Notes migration considerations: data export, integration rewiring, rep retraining
**Result**: User has a clear framework for the stay-vs-migrate decision

### Example 3: Setting up call recording integrations
**User says**: "How do I get our Zoom and RingCentral calls into ExecVision?"
**Skill does**:
1. Reads platform guide for integration details
2. Lists native integrations: Zoom (web conferencing), RingCentral (dialer/telephony) — both supported natively
3. Walks through connection setup for each: admin permissions needed, recording format requirements, sync frequency
4. Notes gotcha: ensure recording is enabled at the platform level before connecting ExecVision
**Result**: User has both conferencing and telephony sources feeding into ExecVision

## Troubleshooting

### Can't find specific calls in the platform
**Symptom**: Searching for calls by keyword, rep, or date returns unexpected or empty results
**Cause**: Filter UI is unintuitive — users report difficulty combining multiple filter criteria correctly
**Solution**: Create saved filter presets for common queries (e.g., "Demo calls this week", "Lost deals by rep"). Use broad date ranges first and narrow down. If keyword search fails, check that transcription completed — calls still processing won't appear in search results.

### Unsure about Mediafly acquisition impact
**Symptom**: Existing ExecVision customer unsure what changes to expect, whether pricing will increase, whether features will be deprecated
**Cause**: Mediafly absorbed ExecVision into Coach360 within Revenue360 — limited public communication about product roadmap
**Solution**: Contact your Mediafly account team directly for roadmap visibility. Key questions to ask: (1) Will my contract terms change at renewal? (2) Which Revenue360 features are included vs. add-on? (3) Is there a migration timeline from legacy ExecVision UI? Document answers — they may differ from what's on the website.

### Coaching plans not driving behavior change
**Symptom**: Coaching plans are assigned but rep performance metrics aren't improving
**Cause**: Plans may be too generic, not tied to specific call evidence, or lacking follow-up accountability
**Solution**: Link coaching plans to specific call clips showing the gap. Set measurable targets (e.g., "discovery question count increases from 2 to 5 per call"). Schedule review checkpoints — don't assign and forget. Use performance dashboards to track trend, not point-in-time scores. If the platform data shows improvement but deals aren't closing, the coaching criteria may be wrong — revisit what you're measuring.
