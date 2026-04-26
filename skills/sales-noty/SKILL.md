---
name: sales-noty
description: "Noty.ai platform help — Chrome extension AI meeting assistant for Google Meet and Zoom with Gemini-powered transcription, AI summaries, automatic action items with deadlines and assignees, and Gmail follow-ups. Use when setting up Noty.ai for a team, configuring Google Meet or Zoom transcription in Noty, troubleshooting missing or truncated meeting summaries, connecting Noty.ai to downstream tools via Zapier triggers, evaluating Noty.ai against other budget AI note-takers, or understanding Noty.ai's workspace and folder organization. Do NOT use for general AI note-taker selection across multiple platforms (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Noty.ai]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, transcription, platform]
github: "https://github.com/noty-ai"
---

# Noty.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your goal?**
   - A) Set up Noty.ai for my team (onboarding, workspace config)
   - B) Troubleshoot an issue (missing transcripts, short summaries, account problems)
   - C) Connect Noty.ai to other tools (Zapier, Google Docs, Gmail)
   - D) Evaluate Noty.ai vs other note-takers

2. **Which meeting platform?**
   - A) Google Meet
   - B) Zoom
   - C) Both

3. **Team size?**
   - A) Individual / solo
   - B) Small team (2-10)
   - C) Larger team (10+)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Noty.ai against multiple note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General webhook/Zapier integration patterns | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Noty.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, Zapier integration, data model, recipes.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Onboarding**: Install Chrome extension → connect Google Calendar → set auto-join for Google Meet or Zoom → configure workspace + folders for team
- **Maximizing summaries**: Use AI credits wisely (3 per meeting on Pro) — save credits for important meetings, rely on transcripts for routine calls
- **Team workflows**: Create shared Workspaces, organize by client/project in Folders, use Gmail follow-ups for action item accountability
- **Scaling limits**: 100 hrs/month on Pro — monitor usage if team has heavy meeting loads

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Google Meet + Zoom only.** No Microsoft Teams, Webex, or phone call support. If your team uses Teams, Noty.ai won't work.
- **3 AI credits per meeting on Pro.** Each "AI action" (summary, custom prompt, etc.) costs a credit. Heavy users may exhaust credits quickly on long meeting days.
- **Summaries can be very short for long meetings.** Multiple reviews report 1-2 sentence summaries for hour-long calls. Verify summary quality with your typical meeting length before committing.
- **No public API.** Zapier (3 triggers) is the only programmatic interface. No REST API, no webhooks, no MCP server.
- **Slack integration is still "upcoming."** Don't count on Slack integration being available.
- **Account deletion is reportedly difficult.** Multiple reviews cite friction when trying to delete accounts or remove data.
- **100 hours/month cap on Pro.** Teams with 8+ hours of daily meetings per person will hit this.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across all platforms, plan API integrations, build transcript pipelines
- `/sales-integration` — General tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Noty.ai for a small sales team
**User says**: "I want to set up Noty.ai for my 5-person team on Google Meet. How do we organize notes?"
**Skill does**: Walks through Chrome extension install for each team member, Google Calendar integration for auto-join, creating a shared Workspace, setting up Folders per client or deal stage, and configuring Gmail follow-ups for action item accountability.

### Example 2: Connecting Noty.ai to Notion via Zapier
**User says**: "How do I automatically send Noty meeting summaries to a Notion database?"
**Skill does**: Explains the "Summary Created" Zapier trigger, shows how to map Noty.ai summary fields to Notion database properties, and notes the limitation that only 3 Zapier triggers are available (no custom filtering server-side).

### Example 3: Troubleshooting short summaries
**User says**: "Noty.ai is giving me one-sentence summaries for my 45-minute sales calls."
**Skill does**: Checks if AI credits are being consumed, suggests verifying transcription completeness first (sometimes transcripts don't fully generate), recommends checking language settings, and notes this is a known issue from reviews — suggests trying "Custom Summary" feature with explicit instructions for more detail.

## Troubleshooting

### Meeting transcripts not generating
**Symptom**: After a Google Meet or Zoom call, no transcript appears in Noty.ai
**Cause**: Chrome extension may not have auto-joined the meeting, or the extension lost connection mid-call
**Solution**: Verify the Noty.ai Chrome extension is enabled and has permissions for the meeting platform. Check Google Calendar integration is active (auto-join requires it). For Zoom, ensure Noty.ai has the Zoom OAuth connection set up. If the problem persists, try manually starting transcription at the beginning of the call.

### Summaries are too short or generic
**Symptom**: AI-generated summaries are 1-2 sentences for 30-60 minute meetings
**Cause**: Known limitation — the Gemini-powered summarizer may produce terse output for certain meeting types
**Solution**: Try the "Custom Summary" feature with specific instructions (e.g., "Include all decisions, action items with owners, and key discussion points"). If custom summaries also fail, export the full transcript and use an external AI tool for summarization. Monitor AI credit usage — each custom summary attempt costs a credit.

### Can't delete account or remove data
**Symptom**: No visible account deletion option in settings, support slow to respond
**Cause**: Account deletion is not self-service — requires contacting support at info@noty.ai
**Solution**: Email info@noty.ai requesting account deletion and full data removal. Reference GDPR Article 17 (right to erasure) if in the EU. Expect 1-2 week response time based on user reports. Revoke Google Calendar and Zoom OAuth permissions immediately to stop new data collection while waiting.
