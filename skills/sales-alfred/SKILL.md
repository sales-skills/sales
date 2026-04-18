---
name: sales-alfred
description: "alfred_ (get-alfred.ai) platform help — AI executive assistant that autonomously triages email, drafts replies, extracts tasks, and manages calendar. Use when inbox is overwhelming and you need AI to triage email overnight, spending too much time on email replies and want AI drafting in your voice, need tasks auto-extracted from emails into a kanban board, want focus time protected on your calendar, need a daily brief of what matters today, or comparing alfred_ to Fyxer AI, Superhuman, Lindy, or Reclaim. Do NOT use for meeting recording or transcription (use /sales-note-taker) or meeting scheduling and booking pages (use /sales-meeting-scheduler)."
argument-hint: "[describe what you need help with in alfred_]"
license: MIT
version: 1.0.0
tags: [sales, ai-assistant, productivity, email, platform]
---

# alfred_ Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your goal?**
   - A) Deciding whether alfred_ is right for me (evaluation)
   - B) Setting up alfred_ (onboarding)
   - C) Getting more value from alfred_ (optimization)
   - D) Comparing alfred_ to alternatives
   - E) Something else

2. **What's your primary pain point?**
   - A) Email overload — too many emails, can't keep up
   - B) Context switching — jumping between email, calendar, tasks
   - C) Meeting prep — walking into meetings without context
   - D) Follow-up tracking — things falling through cracks
   - E) Task management — action items getting lost

3. **What email provider(s)?**
   - A) Gmail / Google Workspace
   - B) Outlook / Microsoft 365
   - C) Both

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Meeting recording, transcription, or AI meeting notes | `/sales-note-taker {user's question}` |
| Meeting scheduling, booking pages, round-robin | `/sales-meeting-scheduler {user's question}` |
| Building custom AI agent workflows (beyond email/calendar/tasks) | `/sales-lindy {user's question}` |
| CRM integration or automation | `/sales-integration {user's question}` |
| Email marketing campaigns to subscribers | `/sales-email-marketing {user's question}` |
| Cold email outreach | `/sales-cadence {user's question}` |

Otherwise, answer directly below.

## Step 3 — alfred_ platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, setup, and comparisons.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Evaluation framework:**
- alfred_ is best for solo professionals (founders, consultants, freelancers) drowning in email who want hands-off AI triage + reply drafting + task extraction
- It's NOT a CRM, not a team collaboration tool, not a meeting recorder — it's a personal AI executive assistant
- Compare cost ($24.99/month) vs time saved (claims 8-9 hours/week) vs human EA ($2K-5K/month)
- If you need CRM integration, custom workflows, or meeting notes — alfred_ alone won't cover it; pair with other tools or consider Lindy

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about integration limitations that may be outdated.*

- **No CRM integration.** alfred_ connects to Gmail/Outlook and Google/Outlook Calendar only. No Salesforce, HubSpot, Pipedrive, or any CRM connector. If you need CRM sync, you'll need a separate tool or manual process.
- **No public API.** You can't build automations on top of alfred_ or pipe its data elsewhere. It's a closed system.
- **Single pricing tier.** No team/enterprise plan — it's $24.99/month per person, period. No volume discounts.
- **No meeting recording.** alfred_ does pre-meeting briefings (pulling context from email history) but does NOT record, transcribe, or summarize meetings. Pair with a note-taker (Fathom, Granola, etc.) for that.
- **Reply drafts require review.** alfred_ drafts replies but you approve/edit before sending — it's not fully autonomous on outbound email.
- **OAuth scope.** alfred_ requires full Gmail/Outlook read+send access via OAuth. Some orgs may block this at the admin level.

## Related skills

- `/sales-lindy` — Lindy platform help — similar all-in-one AI assistant with meetings + custom workflows + 4,000+ integrations
- `/sales-note-taker` — AI meeting note-taker selection and API integration (Fathom, Fireflies, Gong, Otter, etc.)
- `/sales-meeting-scheduler` — Meeting scheduling strategy (booking pages, round-robin, no-show recovery)
- `/sales-integration` — Connect tools with webhooks, Zapier, Make, API pipelines
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Evaluating alfred_ for a solo founder
**User says**: "I'm a solo founder getting 100+ emails a day and I can't keep up. Would alfred_ help?"
**Skill does**: Confirms alfred_ is designed exactly for this — overnight triage, AI-drafted replies, task extraction. Walks through the 30-day free trial, what to expect in the first week (training period for voice matching), and realistic time savings. Notes the $24.99/month cost vs doing it manually.

### Example 2: alfred_ vs Lindy comparison
**User says**: "Should I use alfred_ or Lindy for email and calendar management?"
**Skill does**: Compares the two — alfred_ is a focused, opinionated AI EA ($24.99/month, works out of the box), while Lindy is a customizable agent builder ($49.99/month+, more powerful but requires setup). Recommends alfred_ if you want zero-config email triage, Lindy if you need custom workflows or meeting notes.

### Example 3: Missing CRM integration
**User says**: "Can alfred_ sync my email tasks to HubSpot?"
**Skill does**: Explains that alfred_ has no CRM integration — it manages tasks internally on its own kanban board. Suggests workarounds (manual export, or pairing with Zapier if alfred_ adds integration later). Routes to `/sales-integration` for CRM automation patterns.

## Troubleshooting

### Email replies don't sound like me
**Symptom**: AI-drafted replies feel generic or off-tone
**Cause**: alfred_ needs time to learn your writing style from sent emails
**Solution**: Use alfred_ for 1-2 weeks and actively edit drafts before sending — the AI learns from your edits. Focus on correcting tone/style rather than just content. If it persists, check that you've connected the right email account (it learns from your sent folder).

### Daily Brief not showing important emails
**Symptom**: The morning brief misses urgent items or surfaces low-priority ones
**Cause**: alfred_'s urgency detection is learning your priorities
**Solution**: Consistently act on important emails quickly and archive/ignore low-priority ones — alfred_ uses your behavior patterns to calibrate urgency. The first 1-2 weeks may require manual triage alongside alfred_.

### Can't connect work email (OAuth blocked)
**Symptom**: OAuth authorization fails or shows "admin approval required"
**Cause**: Google Workspace or Microsoft 365 admin has restricted third-party app access
**Solution**: Ask your IT admin to allowlist alfred_ (get-alfred.ai) in the Google Admin Console (Security → API Controls → App Access Control) or Azure AD (Enterprise Applications). alfred_ uses OAuth 2.0 with AES-256 encryption and user-level data isolation.
