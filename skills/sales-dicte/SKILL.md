---
name: sales-dicte
description: "Dicte platform help — EU privacy-first AI meeting assistant with post-quantum encryption, on-device DicteBOX, and open-source/EU AI models only. Use when evaluating Dicte for GDPR-compliant meeting recording, setting up Dicte for multilingual transcription in French/German/Spanish/Italian/English, configuring customizable AI analysis SKILLs (SWOT, project reports, mind maps), needing on-premises meeting recording for regulated industries, or troubleshooting transcription accuracy on mobile recordings. Do NOT use for choosing between note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Dicte]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, privacy, platform]
---

# Dicte Platform Help

Help the user with Dicte platform questions — from setup and recording through AI analysis SKILLs, transcript management, privacy configuration, and enterprise deployment.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What area of Dicte do you need help with?**
   - A) Recording & transcription — one-tap recording, speaker identification, multilingual
   - B) AI SKILLs — SWOT analysis, project reports, mind maps, custom models
   - C) Privacy & compliance — GDPR, pseudonymization, encryption, data residency
   - D) Enterprise — DicteBOX on-premises, collaborative workspaces, SSO
   - E) Integrations — connecting Dicte to other tools (Business/Enterprise only)
   - F) Pricing & plan selection — which tier fits my needs
   - G) Something else — describe it

2. **What platform are you using?**
   - A) iOS
   - B) Android
   - C) Windows desktop
   - D) Mac desktop (beta)
   - E) Web app (app.dicte.ai)

3. **What's your team size?**
   - A) Solo / individual
   - B) Small team (2-10)
   - C) Department (10-50)
   - D) Enterprise (50+)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between note-takers generally | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Dicte platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, privacy architecture, integration options.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation.

**Evaluation framework:**
1. **Privacy requirements** — Is EU data residency mandatory? Do you need on-premises? Dicte's French-hosted servers + DicteBOX cover both.
2. **Language needs** — Dicte supports 5 languages (EN/FR/DE/ES/IT). If you need more, consider alternatives.
3. **Integration needs** — Dicte's integrations are Business/Enterprise only with no public API. If you need API/webhook access, evaluate alternatives.
4. **Analysis beyond transcription** — Dicte's AI SKILLs (SWOT, project reports) are unique. If you just need transcription, simpler tools may suffice.
5. **Budget** — Free tier gives 120 min/month. Plus at €9.92/mo (annual) is competitive for individuals.

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API or webhook documentation.** Integrations are Business/Enterprise only and details aren't published — contact Dicte sales for specifics before committing.
- **Limited language support.** Only 5 languages (EN, FR, DE, ES, IT) vs competitors offering 50-100+. Verify your languages are supported before evaluating.
- **Mac desktop app is beta.** Expect rough edges on macOS — iOS and Android are the most polished clients.
- **Audio quality sensitivity.** Transcription accuracy drops significantly with poor audio (background noise, speakerphone). Use close-mic recording when possible.
- **Free tier is 120 min/month.** That's roughly 4 half-hour meetings — teams will hit the cap quickly and need Plus or higher.
- **DicteBOX (on-premises) is Enterprise only.** The flagship privacy feature requires the highest tier with custom pricing.
- **Conversational AI agent is "coming soon."** The interactive transcript Q&A feature isn't GA yet — don't evaluate Dicte based on this capability.
- **Post-quantum encryption (Kyber) applies to data at rest only.** In-transit encryption uses standard TLS. The Kyber layer is forward-looking but doesn't change day-to-day security posture.

## Related skills

- `/sales-note-taker` — Compare Dicte against other AI note-takers, plan API integrations, or design a transcript pipeline
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: GDPR-compliant meeting recording for EU team
**User says**: "I need a meeting note-taker that keeps all data in the EU and uses only European AI models. Is Dicte a fit?"
**Skill does**: Confirms Dicte stores data on Scaleway servers in Paris under French jurisdiction, uses only open-source/EU AI models, pseudonymizes transcripts before processing, and offers post-quantum encryption at rest. Notes the DicteBOX on-premises option for maximum control on Enterprise tier. Flags the 5-language limitation if the team operates across more languages.

### Example 2: Setting up AI SKILLs for project meetings
**User says**: "How do I generate SWOT analyses from my recorded meetings in Dicte?"
**Skill does**: Explains that after recording, user selects a transcript and applies the SWOT Analysis SKILL from the processing menu. Notes that custom analysis models are a paid add-on on Business tier. Suggests also trying the Project Management Report SKILL for action items and timelines.

### Example 3: Evaluating Dicte's integration options for CRM sync
**User says**: "Can I automatically push Dicte transcripts to our Salesforce? We're on the Plus plan."
**Skill does**: Explains that integrations (APIs, CRM tools) are Business/Enterprise only — Plus doesn't include them. Recommends upgrading to Business tier or using a workaround (manual export). Notes that no public API documentation exists, so the user should contact Dicte sales for integration specifics. Suggests evaluating Fathom or Fireflies if affordable CRM sync is a requirement.

## Troubleshooting

### Transcription accuracy is poor
**Symptom**: Transcript has many errors, missed words, or incorrect speaker labels
**Cause**: Dicte's accuracy depends heavily on audio quality and speaker articulation. Background noise, speakerphone, or distant microphone placement degrades results.
**Solution**: Record with a close microphone (headset or lapel mic). In group settings, use a conference mic with good pickup. Check that you selected the correct language before recording. If accuracy remains poor, try re-recording a test meeting in a quiet environment to isolate the issue.

### Free tier running out too quickly
**Symptom**: Hitting the 120-minute monthly cap before month-end
**Cause**: 120 minutes is roughly 4x 30-minute meetings — teams and frequent meeting-goers exhaust this fast
**Solution**: Upgrade to Plus (€9.92/mo annual) for unlimited recording. If evaluating, prioritize recording only key meetings. Dicte doesn't offer rollover minutes.

### Desktop app not working on Mac
**Symptom**: Mac app crashes, fails to record, or has UI issues
**Cause**: The Mac app is in beta — known stability issues exist
**Solution**: Use the web app (app.dicte.ai) or iOS/Android as the primary client until the Mac app exits beta. Report issues to contact@dicte.ai.
