---
name: sales-lindy
description: "Lindy platform help — no-code AI agent builder for email triage, meeting notes, calendar management, custom workflow automation, chatbots, and AI phone agents. Use when setting up Lindy agents for inbox management, meeting recording not working or transcripts missing, credits burning too fast and need to optimize usage, building custom AI workflows with triggers and actions, choosing between Lindy and a dedicated note-taker or automation tool, or debugging agent errors in multi-step workflows. Do NOT use for picking a dedicated AI note-taker across vendors (use /sales-note-taker) or general workflow automation without AI reasoning (use /sales-integration)."
argument-hint: "[describe what you need help with in Lindy]"
license: MIT
version: 1.0.0
tags: [sales, ai-agent, automation, note-taker, platform]
---

# Lindy Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up Lindy for email + meeting management (personal AI assistant)
   - B) Build a custom AI agent workflow ("Lindy") for a specific task
   - C) Fix an existing agent that's not working right
   - D) Understand pricing / credits / plan limits
   - E) Compare Lindy to another tool
   - F) Something else

2. **Which Lindy modules are you using?**
   - A) Email triage and drafting
   - B) Meeting recording and notes
   - C) Calendar management and scheduling
   - D) Custom workflow builder (triggers, actions, HTTP requests)
   - E) AI phone calls
   - F) Chatbot / customer support agent
   - G) Multiple / all of the above

3. **What plan are you on?**
   - A) Free / trial
   - B) Plus ($49.99/mo)
   - C) Pro ($99.99/mo)
   - D) Max ($199.99/mo)
   - E) Enterprise
   - F) Not sure

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking a dedicated AI note-taker (Fathom vs Fireflies vs Gong etc.) | `/sales-note-taker {user's question}` |
| General meeting scheduling strategy (Calendly, Chili Piper, etc.) | `/sales-meeting-scheduler {user's question}` |
| Building chatbot flows across WhatsApp/Telegram/Messenger | `/sales-chatbot {user's question}` |
| General CRM-to-tool integration patterns (Zapier, Make, iPaaS) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Lindy platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, workflow builder, credit system, and agent templates.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Credit optimization**: If credits are the concern, identify which actions consume the most credits and suggest simplifying workflows — use static payloads instead of "Prompt AI" mode, reduce unnecessary AI reasoning steps, batch operations where possible.

**Agent debugging**: If a workflow is failing, check trigger configuration first, then verify each action step has correct inputs from prior steps. Use Lindy's troubleshooting guide for common errors.

**Tool comparison**: If comparing Lindy to a specialized tool, emphasize that Lindy excels as a generalist AI assistant but dedicated tools (Fathom for note-taking, Calendly for scheduling, Zapier for simple automation) often outperform in their specific domain.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and credit consumption that may be outdated.*

- **Credits deplete faster than expected.** Simple workflows use 1-3 credits but AI-intensive tasks (Prompt AI body mode, complex reasoning, phone calls) consume 10+ credits per action. Monitor credit usage in the dashboard before building multi-step workflows.
- **Pricing page and review sites show different tier structures.** Lindy may be A/B testing or transitioning pricing models — the in-app pricing when you sign up is authoritative, not the marketing page.
- **Computer use is Pro+ only.** If your workflow requires browser automation or screen interaction, you need the Pro plan ($99.99/mo) or higher.
- **Complex multi-step workflows are unreliable.** Multiple reviews report "constant errors" when chaining 5+ actions with conditional logic. Start simple, test each step, then chain. Traditional automation tools (Make, n8n) are more reliable for deterministic multi-step flows.
- **No public developer API.** You cannot build ON Lindy — there's no REST API to programmatically create agents, trigger workflows externally, or read results. The HTTP Fetch action lets Lindy call OTHER APIs, not the reverse.
- **Cancellation process has complaints.** Multiple Trustpilot reviews report charges continuing after cancellation. Cancel through the web dashboard AND confirm via email to support@lindy.ai.
- **Inbox limits scale by plan.** Plus connects 2 inboxes, Pro 3, Max 5. If you need more email accounts, you need a higher tier.

## Related skills

- `/sales-note-taker` — Picking or integrating an AI meeting note-taker across 24+ platforms
- `/sales-meeting-scheduler` — Meeting scheduling strategy (Calendly, Chili Piper, booking pages, no-show reduction)
- `/sales-chatbot` — Chatbot marketing and conversational automation across channels
- `/sales-integration` — General tool integration patterns (Zapier, Make, webhooks, APIs)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Lindy as a personal AI assistant
**User says**: "I want Lindy to manage my inbox and take meeting notes — how do I set it up?"
**Skill does**:
1. Walks through account creation and 7-day free trial
2. Connects Gmail/Outlook inbox and Google Calendar
3. Configures email triage rules — what to flag, draft, or ignore
4. Enables meeting recording with auto-join settings
5. Sets up iMessage/Slack access for on-the-go delegation
6. Warns about credit consumption — suggests starting with Plus plan and monitoring usage before upgrading
**Result**: Fully configured personal AI assistant managing email and meetings

### Example 2: Credits burning too fast
**User says**: "I'm on the Pro plan and running out of credits by the 15th of every month"
**Skill does**:
1. Identifies high-credit-consuming actions (Prompt AI mode, phone calls, complex reasoning chains)
2. Suggests replacing "Prompt AI" body mode with static JSON payloads where possible
3. Recommends breaking complex agents into simpler, focused ones that use fewer reasoning steps
4. Calculates whether upgrading to Max ($199.99/mo, 7x usage) is more cost-effective than buying add-on credits ($10/1K)
5. Notes that simple trigger-action workflows (1-3 credits) vs AI-intensive tasks (10+ credits) — restructure workflows to minimize AI reasoning steps
**Result**: Credit optimization strategy with concrete actions to reduce consumption

### Example 3: Comparing Lindy to dedicated tools
**User says**: "Should I use Lindy for meeting notes or get Fathom?"
**Skill does**:
1. Notes Lindy is a generalist — meeting notes are one feature among email, calendar, workflows
2. Fathom is purpose-built for meeting notes — deeper CRM sync, better transcript search, dedicated coaching features, free tier with unlimited recordings
3. Lindy advantage: single tool for email + meetings + calendar + custom workflows
4. Fathom advantage: better note quality, native HubSpot/Salesforce field mapping, lower cost for notes-only use case
5. Recommends Fathom if meeting notes are the primary need, Lindy if they want an all-in-one AI assistant
**Result**: Clear comparison with recommendation based on primary use case

## Troubleshooting

### Agent workflow produces errors on multi-step automations
**Symptom**: Workflow runs the first 1-2 steps but fails on subsequent actions with vague error messages
**Cause**: AI reasoning between steps loses context, or dynamic data references from prior steps aren't structured as expected
**Solution**: Break complex workflows into smaller, focused agents. Use static/manual body mode instead of "Prompt AI" for predictable API payloads. Test each action step independently before chaining. Check that each action's output matches the expected input format of the next step.

### Meeting notes not appearing after calls
**Symptom**: Lindy was supposed to record a meeting but no transcript/notes appeared
**Cause**: Calendar sync disconnected, auto-join not enabled for that meeting type, or meeting platform (Zoom/Teams/Meet) blocked the bot
**Solution**: Verify calendar integration is active in Settings. Check that auto-join is enabled for the correct calendar. For Zoom, ensure "Only authenticated users can join" isn't blocking Lindy. For Teams, check org policies for external bot access. Try a test meeting to confirm the flow works end-to-end.

### Email drafts don't match your writing style
**Symptom**: Lindy's email drafts sound generic or don't match your tone
**Cause**: Lindy hasn't learned enough from your writing patterns yet, or the style training needs more examples
**Solution**: Provide explicit style instructions in your Lindy settings — tone (formal/casual), signature preferences, common phrases you use. Send more emails through Lindy and provide feedback (approve/edit/reject drafts) to train the model. It typically takes 20-30 interactions before style matching improves noticeably.
