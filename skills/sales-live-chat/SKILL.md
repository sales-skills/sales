---
name: sales-live-chat
description: "Live chat and chatbot for sales and support — widget setup, routing, chatbot flows, agent management, visitor tracking, chat-to-lead conversion, proactive messaging. Covers strategy and implementation across Brevo Conversations, Drift (Salesloft), Intercom, HubSpot, Crisp, LiveChat, Zendesk, Tidio, Freshdesk, ZoomInfo Chat, and Qualified. Use when chat widget not converting visitors, chatbot giving wrong answers or dead-ending, chats going to the wrong agent, not sure which live chat tool to pick, or visitors leaving before an agent responds. Do NOT use for email sequences (use /sales-cadence), email marketing (use /sales-email-marketing), or meeting scheduling (use /sales-meeting-scheduler). For platform-specific help, use /sales-brevo, /sales-salesloft, or /sales-swai."
argument-hint: "[describe your live chat or chatbot question or goal]"
license: MIT
version: 1.0.0
tags: [sales, live-chat, chatbot, support]
---
# Live Chat & Chatbot for Sales

Help the user with live chat and chatbot — from tool selection and widget setup through chatbot flow design, agent routing, visitor tracking, and chat-to-lead conversion. This skill is tool-agnostic but includes platform-specific guidance for Brevo Conversations, Drift (Salesloft), Intercom, HubSpot, Crisp, LiveChat, Zendesk, Tidio, Freshdesk, and ZoomInfo Chat.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Tool selection — choosing a live chat platform
   - B) Widget setup — installing and configuring the chat widget
   - C) Chatbot flows — building automated conversation flows
   - D) Agent routing — assigning chats to the right team members
   - E) Proactive messaging — triggering chat based on visitor behavior
   - F) Chat-to-lead conversion — capturing leads from conversations
   - G) Analytics — measuring chat performance and ROI
   - H) Integration — connecting chat to CRM, helpdesk, or other tools
   - I) Something else — describe it

2. **What's your primary use case?**
   - A) Sales — qualifying leads, booking demos, answering buyer questions
   - B) Support — resolving customer issues
   - C) Both sales and support
   - D) Self-service — chatbot only, no live agents

3. **What tool are you using (or considering)?**
   - A) Brevo Conversations
   - B) Drift (Salesloft)
   - C) Intercom
   - D) HubSpot
   - E) Crisp
   - F) LiveChat
   - G) Zendesk Chat
   - H) Tidio
   - I) Freshdesk / Freshchat
   - J) Not decided yet
   - K) Other

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Strategy and approach

### When to use live chat for sales

Live chat converts best when:
- **High-intent pages** — pricing, demo request, comparison pages
- **Complex products** — B2B SaaS, enterprise software, custom solutions
- **Time-sensitive decisions** — trial users, cart abandonment, upgrade moments
- **Account-based selling** — identified target accounts visiting your site

## Step 3 — Platform-specific guidance

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

### Implementation checklist

1. **Install widget** — add JavaScript snippet to your website (usually 1 line in `<head>`)
2. **Brand it** — match colors, logo, welcome message to your site
3. **Set business hours** — configure online/offline hours with appropriate messaging
4. **Build qualification bot** — create a 2-3 question flow for when agents are busy/offline
5. **Set up routing** — assign chats by page, visitor segment, or round-robin
6. **Connect CRM** — push qualified leads to your CRM automatically
7. **Add to high-intent pages** — pricing, demo, trial, comparison pages
8. **Train agents** — response templates, qualification criteria, escalation paths
9. **Measure** — track chat volume, response time, conversion rate, CSAT

## Gotchas

1. **Don't pop up chat on every page** — aggressive chat popups annoy visitors. Target high-intent pages only (pricing, demo, trial). Use passive widget on other pages.
2. **Don't build a 10-question chatbot** — long qualification flows have high drop-off. 2-3 questions max before routing to a human or offering to book a meeting.
3. **Don't forget offline hours** — if no agents are online and no chatbot is configured, visitors see a dead chat widget. Always have an offline message or email capture form.
4. **Don't ignore mobile** — chat widgets can obscure content on mobile. Test the experience on small screens and consider hiding or minimizing the widget on mobile.
5. **Don't skip CRM integration** — chat leads that don't get pushed to CRM get forgotten. Always connect chat to your lead management system.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-hubspot` — HubSpot platform help (live chat, Conversations inbox, chatbot builder)
- `/sales-qualified` — Qualified platform help (Piper AI SDR, Signals, Salesforce-native routing)
- `/sales-zoominfo` — ZoomInfo platform help (Chat, WebSights visitor identification)
- `/sales-getresponse` — GetResponse platform help (built-in live chat widget)
- `/sales-brevo` — Brevo platform help (Conversations live chat setup)
- `/sales-salesloft` — Salesloft/Drift platform help (enterprise sales chat)
- `/sales-sendpulse` — SendPulse platform help (live chat, unified inbox, bot-to-human handoff)
- `/sales-swai` — SWAI platform help (AI chat widget, autonomous lead qualification, Cal.com scheduling)
- `/sales-birdeye` — Birdeye platform help (webchat + messaging for multi-location businesses)
- `/sales-chatbot` — Chatbot design and automation
- `/sales-meeting-scheduler` — Book meetings from chat conversations
- `/sales-lead-routing` — Route chat-qualified leads to the right rep
- `/sales-lead-score` — Score chat leads based on qualification data
- `/sales-integration` — Connect chat tools with CRM and other systems
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up sales chat on pricing page
**User says**: "I want to add live chat on our pricing page to catch buyers who are comparing plans"
**Skill does**: Recommends proactive chat trigger (15 seconds on pricing page), qualification bot (company size, use case, timeline), routing to AE, and CRM push. Provides implementation steps for the user's chosen platform.
**Result**: Chat widget on pricing page with qualification flow, agent routing, and CRM integration

### Example 2: Building a lead qualification chatbot
**User says**: "We need a chatbot that qualifies visitors and books demos when our team is offline"
**Skill does**: Designs a 3-step bot flow (greeting → 2 qualifying questions → meeting booking or email capture). Covers offline handling, calendar integration, and fallback paths.
**Result**: Chatbot flow that qualifies and books meetings 24/7

### Example 3: Choosing a chat tool
**User says**: "We're a 10-person SaaS company using HubSpot CRM. Should we use HubSpot chat or Intercom?"
**Skill does**: Compares HubSpot native chat (free, CRM-integrated, basic bot) vs Intercom (more powerful bot, product tours, but expensive). Recommends HubSpot chat to start, upgrade to Intercom if they outgrow it.
**Result**: Clear recommendation with reasoning and migration path

## Troubleshooting

### Chat widget not appearing
**Symptom**: Widget doesn't show up on the website after installation
**Cause**: JavaScript snippet not loaded, ad blockers, content security policy, or conditional display rules
**Solution**: 1) Check browser console for JS errors. 2) Verify the snippet is in `<head>` or `<body>`. 3) Test in incognito mode (ad blockers). 4) Check CSP headers allow the chat provider's domain. 5) Review display rules — the widget may be hidden on certain pages.

### Low chat engagement
**Symptom**: Widget is live but very few visitors start conversations
**Cause**: Widget is too passive, on wrong pages, or proactive messages aren't compelling
**Solution**: 1) Add proactive messages on high-intent pages (pricing, demo). 2) Make the greeting contextual to the page. 3) Use a chatbot to initiate with a question, not just "Hi!" 4) Test button placement and color contrast.

### Chat leads not reaching CRM
**Symptom**: Conversations happen but leads don't appear in CRM
**Cause**: Integration not configured, mapping incorrect, or webhook failures
**Solution**: 1) Verify CRM integration is active in chat tool settings. 2) Check field mapping (email, name, company → CRM fields). 3) Test with a known lead and trace through both systems. 4) Check webhook/API logs for errors.
