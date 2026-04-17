---
name: sales-cluely
description: "Cluely platform help — real-time AI meeting assistant with live coaching overlay, pre-call briefs, meeting notes, conversation analytics, and knowledge base RAG. Use when setting up Cluely for live AI prompts during sales calls, configuring the knowledge base with company docs for real-time RAG retrieval, connecting Cluely to HubSpot or Salesforce via Merge.dev, troubleshooting transcription accuracy or speaker attribution errors, comparing Cluely Pro vs Pro + Undetectability plans, or setting up team coaching scorecards and missed opportunity tracking. Do NOT use for choosing between AI note-takers across vendors (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Cluely]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, real-time-coaching, platform]
---

# Cluely Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which Cluely feature are you using (or evaluating)?**
   - A) Live Insights (real-time AI answers during calls)
   - B) Pre-Call Briefs (meeting prep with participant research)
   - C) Meeting Notes (transcripts and summaries)
   - D) Coaching & Analytics (missed opportunities, scorecards)
   - E) Knowledge Base (upload company docs for RAG)
   - F) CRM/ATS Integration (Merge.dev)
   - G) Not sure — help me pick a plan

2. **What's your goal?**
   - A) Set up or configure Cluely
   - B) Troubleshoot a problem
   - C) Compare plans or evaluate pricing
   - D) Integrate with CRM or other tools

3. **What plan are you on?**
   - A) Free (limited AI + notes)
   - B) Pro ($20/mo)
   - C) Pro + Undetectability ($75/mo)
   - D) Team ($99/seat/year)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between AI note-takers (Cluely vs Fathom vs Fireflies etc.) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a sales coaching program | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Cluely platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, integrations, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For Live Insights questions:** Use Cmd/Ctrl+Enter for custom questions, Tab to accept top suggestion. Configure "Cluely for Sales" mode. Upload company battlecards to the Knowledge Base so RAG surfaces them during competitor mentions.

**For CRM integration questions:** Cluely uses Merge.dev for CRM/ATS sync (HubSpot, Salesforce, Pipedrive, Zoho). Requires admin access + API credentials. Configure data mapping for contact matching and activity sync.

**For coaching setup:** Define sales scorecards in the admin dashboard. Enable missed opportunity tracking per rep. Review via Team Overview on enterprise.cluely.com.

**For knowledge base setup:** Upload PDF/DOC/TXT/MD files. 1M token RAG context window. Live links require backend config by Cluely team.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and security history that may be outdated.*

- **2025 data breach.** Cluely exposed 83K users' interview data via credentials left in a public GitHub repo. Evaluate their current security posture before uploading sensitive company docs.
- **Undetectability costs $75/mo.** The screen-share-invisible mode is only on Pro + Undetectability — Pro ($20/mo) is visible during screen shares.
- **Google Calendar only.** No Outlook/Office 365 calendar support as of 2026-04. Pre-call briefs won't work without Google Calendar.
- **No public API.** Cannot programmatically export transcripts or build custom integrations. CRM sync is Merge.dev only (enterprise).
- **Billing complaints.** Users report instant charges with no confirmation dialog when upgrading. Review the billing page carefully before clicking upgrade buttons.
- **Transcription accuracy issues.** Users report 5-10 second delays, wrong speaker attribution, and generic AI suggestions. Quality varies significantly by audio conditions.
- **Mac + Windows only.** No Linux support, no web app. Desktop client required.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across vendors, plan transcript API pipelines
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs
- `/sales-integration` — General CRM/tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up real-time coaching for a sales team
**User says**: "I want my reps to get live AI-powered tips during discovery calls when prospects mention competitors. How do I set that up in Cluely?"
**Skill does**: Walks through uploading competitor battlecards to the Knowledge Base, configuring the "Cluely for Sales" mode, setting up scorecards for competitor handling, and using Live Insights keyboard shortcuts during calls.

### Example 2: Connecting Cluely to Salesforce
**User says**: "How do I get Cluely meeting summaries to automatically appear in Salesforce?"
**Skill does**: Explains the Merge.dev integration path — accessing the portal via Cluely admin, authenticating with Salesforce API key, configuring contact matching and activity sync, and setting sync frequency (real-time vs hourly vs daily).

### Example 3: Evaluating plans for a solo founder
**User says**: "I'm a solo founder doing investor calls. Is the $75 plan worth it over the $20 one?"
**Skill does**: Explains that the only difference is undetectability during screen shares. If the user never shares their screen during calls, Pro at $20/mo is sufficient. Notes the free tier's limitations (limited AI responses and notes).

## Troubleshooting

### AI suggestions feel generic or irrelevant
**Symptom**: Live Insights gives vague, "GPT slop" answers that don't match the conversation
**Cause**: No company-specific context loaded; default AI mode without customization
**Solution**: Upload company docs, battlecards, and sales scripts to the Knowledge Base (1M token RAG window). Switch to "Cluely for Sales" mode. Define specific prompts and playbooks in the Customization Suite. Quality improves dramatically with context.

### Transcription attributes speech to wrong speaker
**Symptom**: Transcript shows the wrong person said something, or speakers are mixed up
**Cause**: Audio quality issues — poor microphone, echo, or multiple speakers on the same audio channel
**Solution**: Use a quality USB headset, not laptop mic. Ensure Cluely has correct audio device permissions (Settings > Audio). Check that both microphone and system audio capture are configured in audio settings. If using external speakers, switch to headphones to eliminate echo.

### Pre-call briefs not appearing
**Symptom**: No meeting prep briefs before scheduled calls
**Cause**: Calendar not connected or not syncing — only Google Calendar is supported
**Solution**: Go to Settings > Calendar Integration and connect your Google Calendar. Verify the calendar sync is active. Note: Outlook/Office 365 calendars are NOT supported. If you use Outlook, pre-call briefs won't work — request this feature from Cluely support.
