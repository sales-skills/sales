---
name: sales-monday-notetaker
description: "monday.com AI Notetaker platform help — native meeting recording, transcription, and action-item creation inside monday.com boards for Zoom/Meet/Teams. Use when deciding if monday's built-in notetaker is enough or if a dedicated tool like Fathom or Fireflies is better, setting up AI Notetaker with calendar auto-invite and Zoom bot permissions, turning meeting action items into monday.com board items automatically, querying meeting transcripts via the monday GraphQL API (notetaker.meetings endpoint), troubleshooting the notetaker bot not joining or recording, understanding AI credit costs for meeting transcription, or comparing monday Notetaker pricing on Pro vs Enterprise plans. Do NOT use for general note-taker comparison across many platforms (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in monday AI Notetaker]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-notes, platform]
github: "https://github.com/mondaycom"
---

# monday.com AI Notetaker Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your primary goal?**
   - A) Decide if monday's notetaker is sufficient or if I need a dedicated tool
   - B) Set up AI Notetaker (calendar connect, bot config, auto-invite)
   - C) Turn meeting action items into monday.com board items/subitems
   - D) Query meeting data via the monday GraphQL API
   - E) Understand pricing — AI credits, Pro vs Enterprise, add-on costs
   - F) Troubleshoot a specific issue (bot not joining, vague summaries, permissions)

2. **What meeting platforms do you use?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Multiple

3. **What monday.com plan are you on?**
   - A) Standard ($12/seat/mo) — AI Notetaker not available
   - B) Pro ($19/seat/mo)
   - C) Enterprise (custom)
   - D) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing many note-taker platforms broadly | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| monday.com board/workflow questions unrelated to notetaker | Suggest the user consult monday.com support |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — monday Notetaker platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, AI credits, integrations, workflow setup.

If the question involves the GraphQL API, also read `references/monday-notetaker-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Should you use monday's notetaker or a dedicated tool?**
- **Use monday Notetaker if**: you already pay for Pro/Enterprise, your team lives in monday.com, you want action items flowing directly into boards, and you don't need deep conversation analytics or coaching scorecards.
- **Use a dedicated tool if**: you need sophisticated summaries, speaker analytics, coaching/methodology scoring, cross-meeting search, or you're on Standard plan.

**Setup checklist:**
1. Confirm you're on Pro or Enterprise plan
2. Connect Google or Outlook calendar in monday.com
3. Configure auto-invite or manually invite the Notetaker bot per meeting
4. For Zoom: ensure your Zoom settings allow external bots/guests to join and record
5. After first meeting: check that action items appear and can be pushed to your board

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Requires Pro ($19/seat/mo) or Enterprise — not available on Standard or Basic.** The notetaker is a paid add-on on top of already-paid plans.
- **AI credits system adds hidden cost.** You get 500 free AI credits/month per account. If the notetaker consumes credits per meeting, costs add up. The cheapest paid AI credit plan is $200/month ($2,400/yr annual).
- **Summaries are vague compared to dedicated tools.** Multiple reviews note that monday's AI-generated summaries lack detail compared to Fathom, Fireflies, or tl;dv. Don't expect coaching-grade insights.
- **Zoom bot requires explicit recording permissions from the host.** If your Zoom settings block external bots or guests, the notetaker silently fails to join or record.
- **The Notetaker API requires API version 2026-04 or later.** Older API versions won't expose the `notetaker.meetings` query.
- **Early-stage product with minimal community validation.** Launched September 2025; zero G2/Capterra reviewers mention it across 23,000+ reviews. Expect rough edges.
- **monday.com explicitly disclaims performance warranties for the notetaker** in its terms — treat it as best-effort, not mission-critical.

## Related skills

- `/sales-note-taker` — Comparing AI meeting note-takers and conversation intelligence platforms (Fathom, Fireflies, Gong, etc.)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Deciding between monday Notetaker and a dedicated tool
**User says**: "We're on monday Pro and wondering if the built-in notetaker is good enough or if we should pay for Fathom or Fireflies."
**Skill does**:
1. Notes monday Notetaker is included with Pro (plus AI credit costs) — no extra per-seat fee
2. Compares: monday gives basic summaries + action items → board items; Fathom/Fireflies give detailed transcripts, conversation search, coaching scorecards, deeper CRM sync
3. If the team's primary need is "stop manual note-taking and create tasks from meetings" → monday Notetaker is sufficient
4. If the team needs analytics, coaching, or detailed searchable transcripts → recommend Fathom ($16-20/mo) or Fireflies ($10-19/mo) with monday.com Zapier integration
**Result**: Clear decision framework based on what the team actually needs from meeting AI.

### Example 2: Setting up auto-invite for Zoom meetings
**User says**: "How do I get the monday notetaker to automatically join all my Zoom calls?"
**Skill does**:
1. Walks through calendar connection (Settings → connect Google/Outlook calendar)
2. Enables auto-invite for all meetings or filtered by calendar/keyword
3. Flags Zoom prerequisite: Settings → Recording → allow external bots
4. Notes: host must grant recording permission when bot joins for the first time
**Result**: Working auto-join config with Zoom permission prerequisites covered.

### Example 3: Querying meeting transcripts via API
**User says**: "I want to pull all meeting transcripts from the last week via the monday API for our data warehouse."
**Skill does**:
1. Points to `notetaker.meetings` GraphQL query (API version 2026-04+)
2. Provides example query with `transcript`, `summary`, `action_items` fields
3. Notes cursor-based pagination (limit 1-100, use `page_info.cursor`)
4. Recommends storing raw JSON in S3/GCS and normalized rows in warehouse
5. Flags: no webhooks for meeting events — must poll
**Result**: Working API integration pattern with pagination and storage architecture.

## Troubleshooting

### Notetaker bot doesn't join the meeting
**Symptom**: You invited the notetaker but it never appears in the Zoom/Meet/Teams call
**Cause**: Most common: Zoom settings block external bots or guests from joining. Also: calendar not connected, meeting is on a platform not supported, or auto-invite filter excluded the meeting.
**Solution**: For Zoom, go to Settings → Recording → enable "Allow external bots to join meetings." For Google Meet, ensure the calendar invite includes the correct email. Verify your calendar is connected in monday.com settings. Check if auto-invite filters are excluding the meeting by keyword or calendar.

### Meeting summaries are too vague or generic
**Symptom**: The AI summary says something like "The team discussed project updates" without useful detail
**Cause**: monday's summarization model is early-stage and less detailed than dedicated tools. Short meetings (<10 min) produce particularly thin summaries.
**Solution**: Use the post-meeting AI chatbot to ask specific follow-up questions ("What were the action items?", "What did [person] say about the deadline?"). For critical meetings, consider pairing monday Notetaker with a dedicated tool — use monday for task creation and the dedicated tool for detailed transcripts.

### AI credits running out unexpectedly
**Symptom**: You hit the 500 free credit limit mid-month and AI features stop working
**Cause**: AI Notetaker likely consumes credits per meeting/minute alongside other monday AI features (formula builder, docs assistant, etc.)
**Solution**: Check AI credit usage in account settings. Prioritize: some AI features (Formula Builder, Docs Assistant, Deal Insights, Risk Insights) are free and don't consume credits. If notetaker is the primary credit consumer, evaluate whether the $200/mo AI credit plan is worth it vs. switching to a dedicated notetaker ($10-20/user/mo) that doesn't have credit limits.
