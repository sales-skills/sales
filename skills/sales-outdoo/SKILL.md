---
name: sales-outdoo
description: "Outdoo (formerly MeetRecord) platform help — AI roleplay coaching, conversation intelligence, revenue intelligence, CRM automation, and hiring assessments. Use when setting up Outdoo AI roleplays or coaching programs, configuring Outdoo CRM auto-fill with MEDDIC/SPIN/BANT, connecting Outdoo to Salesforce or HubSpot, building integrations with the Outdoo Open API, comparing Outdoo vs Gong pricing or features, troubleshooting Outdoo speaker identification issues, or evaluating Outdoo for sales team readiness scoring. Do NOT use for general coaching program design (use /sales-coaching) or comparing standalone AI note-takers (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Outdoo]"
license: MIT
version: 1.0.0
tags: [sales, coaching, roleplay, conversation-intelligence, revenue-intelligence, platform]
---

# Outdoo Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up AI Roleplays (buyer personas, scenarios, gatekeeper simulation)
   - B) Configuring Conversation Intelligence (call scoring, intent trackers, transcripts)
   - C) Revenue Intelligence (deal health, forecasting, pipeline analytics)
   - D) CRM Automation (auto-fill fields, methodology extraction)
   - E) Integrations (Salesforce, HubSpot, Zapier, Open API)
   - F) AI Coaching (micro-learning, readiness scoring, gamified learning)
   - G) Hiring Assessments (roleplay-based candidate evaluation)
   - H) Comparing Outdoo to alternatives (Gong, Allego, Hyperbound)

2. **Which Outdoo plan are you on?**
   - A) Free (basic roleplays + limited call recording)
   - B) Premium (advanced coaching, 15+ integrations, courses)
   - C) Enterprise (SSO, MCP Server, Developer APIs, private cloud)
   - D) Evaluating — haven't decided yet

3. **What CRM do you use?**
   - A) Salesforce
   - B) HubSpot
   - C) Pipedrive / Close / Zoho / Dynamics 365 / Attio / HighLevel
   - D) None / other

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Building a coaching program or training cadence (tool-agnostic) | `/sales-coaching {user's question}` |
| Reviewing a specific call recording for coaching | `/sales-call-review {user's question}` |
| Comparing AI note-takers / conversation intelligence platforms | `/sales-note-taker {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Gong-specific questions | `/sales-gong {user's question}` |

When routing to another skill, provide the exact command.

## Step 3 — Outdoo platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, API quick ref, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Evaluation checklist:**
- Does your team need AI roleplay practice (Outdoo's differentiator vs Gong)?
- Is no-platform-fee important (Outdoo $0 vs Gong $10K)?
- Do you need LMS integration (Outdoo has 40+ SCORM integrations)?
- Does your team coach on real calls AND practice via roleplay (closed-loop)?

**Quick decision:**
- Outdoo over Gong when: roleplay/practice is a priority, budget matters, you want coaching + intelligence in one tool without $80K+/yr spend
- Gong over Outdoo when: you need the deepest conversation analytics, largest ecosystem, most mature forecasting, and budget isn't the constraint

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **MCP Server is Enterprise-only.** If you need AI agent access to Outdoo data (Claude, Cursor), you must be on Enterprise.
- **Developer APIs are Enterprise-gated.** Free and Premium plans can use Zapier but not the Open API directly.
- **CRM auto-fill methodology extraction (MEDDIC/SPIN/BANT) requires Premium+.** Free tier records calls but doesn't auto-populate CRM fields.
- **Non-English transcription has accuracy issues.** Portuguese specifically reported as problematic. Verify accuracy for your team's language before committing.
- **Speaker identification can misattribute.** You can reassign speakers after the fact, and accuracy has improved, but spot-check important calls.
- **Onboarding the CRM integration is not self-service.** Multiple reviewers report needing their CSM to help configure CRM sync — plan for this during rollout.
- **Pricing is custom/opaque.** No public per-seat pricing — budget ~$660-1,200/user/year based on comparison data. No platform fee (vs Gong's $10K).

## Related skills

- `/sales-coaching` — Build coaching programs, onboarding, role-plays, certifications
- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-note-taker` — Compare AI note-taker / conversation intelligence platforms or wire APIs
- `/sales-gong` — Gong platform help (Revenue AI OS, Smart Trackers, coaching scorecards)
- `/sales-integration` — General CRM/tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up AI roleplays for new hires
**User says**: "I want to use Outdoo to practice cold calls with my new SDRs before they go live"
**Skill does**:
1. Walks through creating custom roleplay scenarios for cold calling with buyer personas
2. Explains gatekeeper simulation mode for realistic practice
3. Shows how to set up rubric-based scoring for instant feedback
4. Connects roleplay scores to readiness scoring to determine when reps are ready for live calls

### Example 2: Outdoo vs Gong for a 30-person sales team
**User says**: "We're evaluating Outdoo and Gong — is Outdoo good enough for a mid-market team?"
**Skill does**:
1. Compares pricing (Outdoo ~$660-1,200/user/yr, no platform fee vs Gong ~$1,600/user/yr + $10K platform fee)
2. Highlights Outdoo's AI roleplay advantage (Gong has no roleplay)
3. Notes Gong's deeper analytics ecosystem and larger partner network
4. Recommends Outdoo if coaching + practice is the priority, Gong if deep analytics and forecasting matter more

### Example 3: Connecting Outdoo to Salesforce
**User says**: "How do I set up the Salesforce integration so call summaries auto-log to opportunities?"
**Skill does**:
1. Explains the managed package install from Salesforce AppExchange
2. Walks through linking Outdoo conversation records to accounts, opportunities, contacts, and leads
3. Shows how to configure AI Docs auto-fill for custom CRM fields
4. Notes that CRM integration setup typically needs CSM assistance

## Troubleshooting

### Speaker identification is wrong on calls
**Symptom**: AI attributes statements to the wrong speaker
**Cause**: Audio quality, similar voices, or multi-party calls confuse diarization
**Solution**: Reassign speakers manually in the transcript viewer after the call. Report persistent issues to support — the model improves with corrections. Ensure each participant has a distinct audio input (separate mics, not a shared speakerphone).

### CRM fields not auto-populating after calls
**Symptom**: Outdoo records calls but doesn't update Salesforce/HubSpot fields
**Cause**: AI Docs auto-fill needs to be configured per methodology (MEDDIC/SPIN/BANT) and mapped to specific CRM fields — this isn't automatic on install
**Solution**: Work with your Outdoo CSM to map methodology fields to CRM custom fields. Verify you're on Premium+ (free tier doesn't auto-fill). Check that the integration has read+write permissions in your CRM.

### Non-English calls transcribe poorly
**Symptom**: Transcripts in Portuguese, Spanish, or other languages have high error rates
**Cause**: AI transcription models are English-optimized; non-English accuracy varies
**Solution**: Test with a representative sample of calls in your language before rolling out. Report accuracy issues to support for model tuning. Consider using a dedicated multilingual transcription tool (Jamy, Notta) alongside Outdoo's coaching features if language accuracy is critical.
