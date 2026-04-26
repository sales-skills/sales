---
name: sales-saner
description: "Saner.AI platform help — ADHD-friendly AI personal assistant that auto-organizes notes, extracts tasks from email and docs, and creates daily plans with proactive AI scheduling. Use when notes are scattered across Notion, Evernote, and Google Drive and you need one searchable place, emails keep piling up and you can't extract action items fast enough, you want AI to plan your day based on task priority and effort, voice capture on mobile isn't transcribing or organizing correctly, the free plan voice recording limit is too short for your workflow, Gmail or Google Calendar integration won't connect or sync, or you're evaluating Saner.AI vs Motion vs Sunsama vs Reclaim for AI-powered daily planning. Do NOT use for AI calendar auto-scheduling with project management (use /sales-motion) or choosing a dedicated AI meeting note-taker (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Saner.AI]"
license: MIT
version: 1.0.0
tags: [sales, productivity, ai-assistant, platform]
---

# Saner.AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your Saner.AI challenge?**
   - A) Setting up Saner.AI for the first time (imports, connections)
   - B) Getting AI search and note synthesis to work better
   - C) Task management — extracting todos, daily planning
   - D) Voice capture or mobile app issues
   - E) Email/calendar integration problems
   - F) Evaluating Saner.AI vs alternatives
   - G) Something else

2. **How do you primarily use Saner.AI?**
   - A) Knowledge management (notes, search, synthesis)
   - B) Task management (daily planning, inbox processing)
   - C) Both — full second brain

3. **Which plan are you on?**
   - A) Free (30 AI messages/month)
   - B) Starter ($8-12/mo)
   - C) Standard ($16-20/mo)

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| AI calendar auto-scheduling with project management | `/sales-motion [question]` |
| Choosing a dedicated AI meeting note-taker | `/sales-note-taker [question]` |
| General tool integration patterns | `/sales-integration [question]` |
| Everything else | Answer directly using Step 3 |

When routing, provide the exact command.

## Step 3 — Saner.AI platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, imports, integrations, and workarounds for common issues.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For setup: recommend starting with one import source (e.g., Notion or Google Drive), get AI search working, then add email/calendar
- For task management: explain the inbox processing → daily plan → Focus Mode workflow
- For integration gaps: note there is no API, no webhooks, no Zapier — workarounds are Chrome extension capture and manual export
- For plan selection: Free is too limited for daily use (30 AI msgs/month); Starter is the sweet spot for solopreneurs; Standard only if voice capture is a core workflow

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No API, no webhooks, no Zapier.** Saner.AI is a closed ecosystem. You cannot programmatically create notes, extract tasks, or sync data with external tools. The only data paths are imports (one-time), connected services (Gmail/Drive/Slack/Calendar), and the Chrome extension.
- **Setup takes effort and has no guided onboarding.** Users report spending significant time configuring imports and connections with little in-app guidance. Start with one integration at a time.
- **Email/calendar linking is unreliable.** Multiple users report that connecting Gmail and Google Calendar "rarely works right." Disconnect and reconnect if sync stalls, and check OAuth permissions.
- **Free plan is effectively a trial.** 30 AI messages per month and 1-minute voice recording limit make the free tier impractical for daily use. Budget for Starter ($8/mo) minimum.
- **Mobile app lacks feature parity.** Some features available on web/Chrome are missing or buggy on iOS/Android. Use web for setup and configuration.
- **Still in beta.** Expect occasional bugs, slow imports, and evolving features. The product is actively developed but not yet stable.

## Related skills

- `/sales-motion` — Motion platform help (AI calendar + project management — more structured alternative)
- `/sales-reclaim` — Reclaim.ai platform help (AI calendar defense — lighter alternative with free tier)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Solopreneur setting up Saner.AI as a second brain
**User says**: "I have notes in Notion, Apple Notes, and Google Drive. How do I consolidate everything in Saner.AI?"
**Skill does**:
1. Reads platform-guide.md for import details
2. Recommends importing Notion first (best-supported), then Google Drive connection, then Apple Notes export
3. Explains that imports can be slow for 100+ files — do them in batches
4. Shows how to use Skai (personal AI) to search across all imported notes with natural language
5. Advises setting up the Chrome extension for ongoing web capture
**Result**: Phased import plan that avoids overwhelming the system

### Example 2: Extracting tasks from emails and creating daily plans
**User says**: "I get 50+ emails a day and can't keep track of action items. Can Saner.AI help?"
**Skill does**:
1. Explains the Gmail connection and how Saner.AI pulls emails into a unified inbox
2. Walks through the inbox processing workflow: AI suggests priority, extracts action items, creates tasks
3. Describes the Proactive AI daily planner that generates an optimal day schedule based on task priority and effort
4. Notes the limitation: email integration can be flaky — if emails stop syncing, disconnect/reconnect Gmail
5. Recommends Starter plan minimum for 30 AI messages/day (vs 30/month on Free)
**Result**: Working email-to-task-to-daily-plan workflow with realistic expectations

### Example 3: Evaluating Saner.AI vs Sunsama vs Motion
**User says**: "I'm a solo founder with ADHD. Should I use Saner.AI, Sunsama, or Motion?"
**Skill does**:
1. Compares approaches: Saner.AI is a knowledge-first assistant (notes + tasks + AI search), Sunsama is a mindful daily planner (guided ritual, integrations with Jira/Trello/Asana), Motion is an aggressive auto-scheduler (tasks placed on calendar, project management)
2. Notes Saner.AI's ADHD-specific design: Focus Mode, AI-suggested task prioritization, low-stimulation UX
3. Highlights key tradeoffs: Saner.AI has no API/Zapier (locked ecosystem), Sunsama has no AI search across notes, Motion has no note-taking
4. Pricing: Saner.AI $8-20/mo, Sunsama $16-20/mo, Motion $19-49/mo
5. Recommends Saner.AI if the primary pain is scattered notes + overwhelmed inbox; Sunsama if the pain is daily planning ritual; Motion if the pain is calendar chaos + project deadlines
**Result**: Clear decision framework based on the user's primary pain point

## Troubleshooting

### Gmail or Google Calendar won't connect
**Cause**: OAuth permission flow fails silently, or browser extensions block the popup
**Solution**: Try in an incognito/private window with no extensions. Ensure you're granting all requested permissions (read/write for Gmail, full access for Calendar). If it still fails, disconnect the account in Saner.AI settings, clear browser cache, and reconnect. Multiple users report this as a recurring issue — if it persists, contact support@saner.ai.

### Imported notes are slow or missing
**Cause**: Large imports (100+ files) from Notion, Obsidian, or Google Drive can take minutes to hours, and some files may fail silently
**Solution**: Import in batches of 50-100 files. After import, search for a known note title to verify it arrived. If files are missing, check that the source format is supported (PDF, Markdown, .docx work best). Notion exports can lose formatting — export as Markdown before importing.

### AI messages run out too quickly
**Cause**: Free plan has 30 AI messages/month (roughly 1/day). Starter has 30/day. Every search, synthesis, and task suggestion counts as a message.
**Solution**: Upgrade to Starter ($8/mo annual) for 30 messages/day — sufficient for most solopreneurs. On Free, save AI messages for search/synthesis and do manual task creation. On Standard ($16/mo), messages are effectively unlimited for normal use.
