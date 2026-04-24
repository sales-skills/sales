---
name: sales-bubbles
description: "Bubbles platform help — async video messaging + AI meeting note-taker with screen recording, auto-join for Zoom/Meet/Teams, AI summaries and action items, and async video comments. Use when setting up Bubbles notetaker to auto-join meetings, configuring which meetings the Bubbles bot should join or skip, troubleshooting Bubbles recordings that lock after two weeks on the free plan, connecting Bubbles to Slack or Notion via Zapier automation, choosing between Bubbles Pro Personal and Pro Teams plans, comparing Bubbles to Loom or other async video tools, or evaluating whether Bubbles fits a sales team that needs CRM integration. Do NOT use for comparing AI note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Bubbles]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, async-video, screen-recorder, platform]
github: "https://github.com/usebubbles"
---

# Bubbles Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Bubbles notetaker (auto-join, recording, transcription)
   - B) Async video messaging (screen recordings, video replies, channels)
   - C) Configuring integrations (Slack, Notion, Zapier)
   - D) Troubleshooting (locked recordings, bot not joining, missing summaries)
   - E) Choosing a plan (Free vs Pro Teams vs Pro Personal) or comparing to alternatives

2. **What meeting platforms do you use?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Multiple platforms

3. **What's your team size?**
   - A) Solo / freelancer
   - B) 2 people
   - C) 3+ team members
   - D) Enterprise

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| General CRM/tool integration patterns | `/sales-integration [question]` |

If the question is Bubbles-specific, continue to Step 3.

## Step 3 — Bubbles platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, async video workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Meeting recording workflow**: Connect calendar → Notetaker auto-joins → AI generates summary + action items → view in workspace or receive via email/Slack
- **Async workflow**: Record screen/camera → share via link or channel → team replies with video/text comments
- **Plan selection**: Solo/freelancer → Pro Personal ($18/mo); 3+ team → Pro Teams ($12/user/mo); light use → Free (5 meetings/week, 30-min cap, 2-week lock)
- **Integration pattern**: Bubbles → Zapier "New Recording" trigger → route to Slack, Notion, Google Docs, or any connected app

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No CRM integrations** — Bubbles has no native connectors to HubSpot, Salesforce, or any CRM. If your team needs call data flowing into CRM, Bubbles is not the right tool. Consider Fathom Business, Fireflies Business, or Sybill instead.
- **English-only transcription** — no multilingual support. For multilingual teams, consider Notta (58 languages) or Jamy (100+ languages).
- **Free plan recordings lock after 2 weeks** — recordings become inaccessible after 14 days of inactivity. Pro plans remove this restriction.
- **No API** — no REST endpoints, no webhooks. Automation is Zapier-only. If you need a programmable integration, consider Fathom, Fireflies, or Wave.
- **No editable transcripts** — you cannot correct transcription errors after the fact.
- **5 meeting recordings/week on Free** — hits quickly for active teams. Pro removes this limit.
- **External collaborators need a Bubbles account** to leave video comments — this isn't obvious until someone tries to reply.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-integration` — Connect tools via Zapier, webhooks, or custom API pipelines. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Team choosing between Bubbles Free and Pro
**User says**: "I have a 5-person design team and we want to record our standups so people can watch async. Is Bubbles Free enough?"
**Skill does**: Explains Free limits — 5 meetings/week shared across the workspace, 30-min cap, recordings lock after 2 weeks. For a 5-person team with daily standups (5/week), Free barely covers it with zero margin. Recommends Pro Teams at $12/user/mo ($60/mo total) for unlimited recordings, no locking, and customizable bot settings.

### Example 2: Connecting Bubbles to Slack via Zapier
**User says**: "I want meeting summaries from Bubbles to post automatically in our #team-updates Slack channel"
**Skill does**: Walks through Zapier setup — trigger: Bubbles "New Recording" → action: Slack "Send Channel Message" with summary content. Notes that Zapier integration requires connecting via Settings → Integrations in Bubbles. Warns that the free Zapier plan limits to 100 tasks/month.

### Example 3: Evaluating Bubbles for a sales team
**User says**: "We're a 10-person sales team on HubSpot. Would Bubbles work for recording our discovery calls?"
**Skill does**: Flags the critical gap — Bubbles has no CRM integration whatsoever, no coaching/scoring features, and English-only transcription. For a HubSpot sales team, recommends Fathom Business ($25/user/mo, native HubSpot sync) or Fireflies Business ($19/user/mo, HubSpot + conversation search). Bubbles is better suited for async collaboration teams, not sales workflows.

## Troubleshooting

### Recordings locked and inaccessible
**Symptom**: Older recordings show as locked and can't be viewed or shared.
**Cause**: Free plan locks recordings after 2 weeks of inactivity ("Bubbles lock after 2 weeks").
**Fix**: Upgrade to any Pro plan to unlock all recordings permanently. No way to unlock individual recordings on Free — this is a hard plan gate.

### Notetaker bot not joining meetings
**Symptom**: Bubbles notetaker doesn't appear in a scheduled meeting.
**Cause**: On Free, the notetaker joins all meetings with 2+ invitees and supported links — but the meeting must have a supported platform link (Zoom, Meet, or Teams) in the calendar event. On Pro, you may have configured selective joining rules that exclude this meeting.
**Fix**: Check that the calendar event contains a valid meeting link. On Pro, review notetaker settings to ensure the meeting matches your join criteria (organizer, invitee count, specific calendars).

### Async video reply requires sign-up
**Symptom**: External collaborator clicks on a shared recording to reply but is prompted to create a Bubbles account.
**Cause**: Bubbles requires an account to leave video or text comments. Viewing is public, but replying requires auth.
**Fix**: No workaround — external collaborators must create a free Bubbles account to participate in discussions. If this is a dealbreaker for external sharing, consider Loom (allows comments without sign-up on Business plan).
