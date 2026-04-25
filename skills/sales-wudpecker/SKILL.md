---
name: sales-wudpecker
description: "Wudpecker platform help — AI meeting note-taker with custom instructions, Ask Wudpecker AI Q&A, 39+ language transcription, Zoom/Meet/Teams bot, desktop + phone app for in-person recording, HubSpot/Salesforce CRM sync, Notion/Slack export. Use when setting up Wudpecker custom note templates or instructions, troubleshooting Wudpecker bot not joining meetings, choosing a Wudpecker plan (Free 10 meetings / Plus $19 / Pro $32), comparing Wudpecker to Fathom or Fireflies or tl;dv or Jamie for personalized meeting notes, fixing Wudpecker speaker identification mix-ups or transcript typos, setting up Wudpecker HubSpot or Notion integration, or using Ask Wudpecker for meeting insights. Do NOT use for general note-taker selection across many platforms (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Wudpecker]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, platform]
---

# Wudpecker Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Wudpecker (bot config, calendar sync, custom instructions)
   - B) Choosing a plan (Free vs Plus vs Pro)
   - C) Integrations (HubSpot, Notion, Slack, Google Docs)
   - D) Troubleshooting (bot not joining, transcript quality, speaker ID)
   - E) Comparing Wudpecker to another note-taker

2. **Which meeting platforms do you use?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Multiple / in-person meetings

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General note-taker comparison across many platforms | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program from call data | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific config beyond Wudpecker sync | `/sales-hubspot {user's question}` |

Otherwise, answer directly below.

## Step 3 — Wudpecker platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, custom instructions setup, and workarounds.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Plan selection**: Free tier (10 bot meetings/mo) is enough for individual reps with light meeting volume. Plus ($19/mo) is needed for HubSpot/Notion/Slack integrations and 30 meetings. Pro ($32/mo) only if you exceed 30 bot meetings/month.
- **Custom instructions**: Available on all plans including Free. The key differentiator — invest time crafting instructions for your meeting type (discovery call, demo, QBR). Specify structure, detail level, vocabulary.
- **In-person**: Desktop and phone app recording works on Free tier with unlimited in-person meetings.
- **No API**: There's no public API or webhooks. For automation, use Notion/Slack/HubSpot native integrations (Plus+) or manually export.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Bot visibility.** The Wudpecker notetaker bot joins as a visible participant. You can rename it on Plus+ but it's still a visible attendee — external-facing customers may notice.
- **2h15m meeting cap.** Recordings and transcription cut off at 2 hours 15 minutes. For longer workshops or all-day meetings, this is a hard limit.
- **HubSpot/Notion/Slack locked to Plus+.** Free tier has no integrations beyond the meeting platforms themselves.
- **No API or webhooks.** Cannot build custom automations or pipe transcripts to a data warehouse. If you need programmatic access, consider Fireflies or Fathom instead.
- **Speaker ID accuracy.** Users report speaker identification mix-ups, especially in larger meetings. Custom vocabulary helps with proper nouns but doesn't fix speaker diarization.
- **Single calendar per account.** You can only connect one calendar — if you have separate work calendars this is limiting.

## Related skills

- `/sales-note-taker` — Cross-platform note-taker selection and API integration strategy
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs from call data
- `/sales-integration` — General CRM/tool integration patterns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up custom note instructions for discovery calls
**User says**: "I want Wudpecker to generate structured discovery call notes with MEDDIC fields"
**Skill does**:
1. Reads platform guide for custom instructions setup
2. Walks through creating a custom template: structure (MEDDIC headings), detail level (capture verbatim quotes for pain/decision criteria), vocabulary (company-specific terms)
3. Recommends testing with 2-3 calls and iterating on the instructions
4. Notes that Ask Wudpecker can extract specific MEDDIC fields post-meeting if the template doesn't capture them perfectly
**Result**: Working custom instruction template for MEDDIC discovery calls.

### Example 2: Comparing Wudpecker to Fathom for a small sales team
**User says**: "Should my 4-person sales team use Wudpecker or Fathom? We use HubSpot."
**Skill does**:
1. Compares: Wudpecker Plus ($19/mo, 30 meetings, HubSpot sync) vs Fathom Business ($25/user/mo, unlimited meetings, deeper HubSpot field mapping)
2. Notes Wudpecker's advantage: custom instruction templates for personalized note structure, Ask Wudpecker for post-meeting Q&A
3. Notes Fathom's advantage: unlimited meetings, public API + webhooks for automation, AI Scorecards on Team+, deeper CRM field mapping
4. Recommends Fathom if they want API access or unlimited volume; Wudpecker if custom note formatting is their priority
**Result**: Clear comparison with decision criteria.

### Example 3: Exporting meeting notes to Notion automatically
**User says**: "How do I get Wudpecker notes into Notion automatically?"
**Skill does**:
1. Confirms user needs Plus plan ($19/mo) for Notion integration
2. Explains native Notion integration: notes auto-export after each meeting
3. Notes limitation: not available on Free tier — manual copy-paste is the fallback
4. If user needs more control (specific databases, custom properties), notes this isn't supported natively — suggest Zapier if available or manual workflow
**Result**: Clear integration path with plan requirement.

## Troubleshooting

### Bot not joining scheduled meetings
**Symptom**: Wudpecker bot doesn't appear in Zoom/Meet/Teams meetings
**Cause**: Calendar not synced, bot joining preferences set to "none", or meeting link not in the calendar event
**Solution**: Check calendar connection in settings. Verify bot joining preferences (Plus+ lets you choose external/internal/all/none). Ensure the meeting has a valid Zoom/Meet/Teams link in the calendar event. For unscheduled meetings, manually invite the bot (Plus+ feature).

### Speaker names showing as "Speaker 1, Speaker 2"
**Symptom**: Transcript doesn't identify speakers by name
**Cause**: Wudpecker hasn't learned participant voices yet, or meeting had many participants
**Solution**: Edit speaker names in the transcript after the meeting — Wudpecker learns from corrections over time. Add team members' names to custom vocabulary. For recurring meetings with the same participants, accuracy improves after a few sessions.

### Notes missing key details or containing errors
**Symptom**: AI-generated notes have typos, miss important points, or include irrelevant content
**Cause**: Default instructions don't match your meeting type, or audio quality was poor
**Solution**: Create custom instructions that specify exactly what to capture and how to structure it. Be explicit: "Capture all pricing discussions verbatim" or "Ignore small talk, focus on requirements." Use Ask Wudpecker post-meeting to extract specific details the notes missed.
