---
name: sales-chatbot
description: "Chatbot marketing and conversational automation — building chatbot flows, multichannel messaging (WhatsApp, Telegram, Facebook, Instagram, Viber, live chat), lead qualification bots, FAQ bots, and handoff to human agents. Use when website visitors leaving without engaging, WhatsApp or Telegram leads not getting qualified, bot flow feels broken or confusing, leads dropping off before reaching a human agent, or not sure how to automate conversations for sales. Do NOT use for live chat widget setup without bots (use /sales-live-chat), email sequences (use /sales-cadence), or SMS campaigns without conversational flow (use /sales-sms-marketing). For SendPulse-specific help, use /sales-sendpulse. For SWAI-specific help, use /sales-swai."
argument-hint: "[describe your chatbot or conversational automation question]"
license: MIT
version: 1.0.0
tags: [sales, chatbot, live-chat, conversational]
---
# Chatbot Marketing & Conversational Automation

Help the user build chatbot flows for sales, support, and marketing — across WhatsApp, Telegram, Facebook Messenger, Instagram, Viber, website live chat, and other messaging platforms.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

**What channel are you building for?**
- a) WhatsApp Business
- b) Telegram
- c) Facebook Messenger
- d) Instagram DMs
- e) Website live chat widget
- f) Viber
- g) Multiple channels / omnichannel
- h) Not sure yet — help me choose

**What's the bot's primary job?**
- a) Lead qualification — ask questions, score, route to sales
- b) FAQ / support — answer common questions automatically
- c) Product catalog / e-commerce — browse, recommend, purchase
- d) Appointment booking — schedule meetings or demos
- e) Welcome / onboarding — greet new subscribers, set expectations
- f) Re-engagement — win back inactive contacts
- g) Order tracking / transactional — status updates, notifications
- h) Full conversational sales funnel

**What's your technical comfort level?**
- a) No-code visual builder only
- b) Comfortable with webhooks and basic integrations
- c) Developer — want API-level control

## Step 2 — Strategy and approach

**Read `references/platform-guide.md`** for channel comparison, flow design principles, lead qualification frameworks, FAQ bot structure, platform-specific guidance (SendPulse, SWAI, ManyChat, Tidio, Intercom, Drift, HubSpot), bot-building steps, metrics benchmarks, and common mistakes.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 3 — Actionable guidance

Based on the user's channel and bot type, provide:

1. **Platform recommendation** — which chatbot platform fits their channel, budget, and technical level
2. **Flow design** — map the conversation for their specific use case (qualification, FAQ, e-commerce, booking)
3. **Integration setup** — connect bot to CRM, calendar, or e-commerce platform
4. **Testing plan** — how to test the bot before going live
5. **Optimization** — which metrics to track and how to iterate on drop-off points

## Gotchas

*Best-effort from research — review these, especially items about platform-specific rules that may change.*

- **WhatsApp 24-hour window is strict** — if you send a non-template message outside the window, it silently fails or gets your account flagged. Always check `last_activity` timestamp before sending.
- **Facebook/Instagram 24-hour rule** — similar to WhatsApp, Messenger has a 24-hour standard messaging window. Outside it, you need message tags (limited to specific use cases like confirmed event updates or account updates).
- **Template approval takes time** — WhatsApp message templates require Meta review (hours to days). Don't wait until launch day to submit templates.
- **Bot-to-human handoff state** — most platforms pause the bot during human chat but don't always resume correctly. Test the full cycle: bot → human → bot resumes.
- **Multi-channel subscriber identity** — a user on WhatsApp and Telegram is often two separate contacts in the platform. Merging/deduplication requires matching by phone or email.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Step 5 — Related skills

- `/sales-hubspot` — HubSpot platform help (chatbot builder, Conversations inbox, live chat)
- `/sales-qualified` — Qualified platform help (Piper AI SDR conversations, Salesforce-native chatbot)
- `/sales-sendpulse` — SendPulse platform help (chatbots across 7 channels, visual flow builder, Automation 360)
- `/sales-swai` — SWAI platform help (AI chat widget, autonomous lead qualification, Cal.com scheduling)
- `/sales-birdeye` — Birdeye platform help (webchat chatbot for multi-location businesses, appointment scheduling)
- `/sales-live-chat` — Live chat widget setup and optimization (non-bot focused)
- `/sales-sms-marketing` — SMS campaigns and automation (non-conversational)
- `/sales-cadence` — Multi-channel outbound sequences (email, call, social — structured outreach vs. conversational)
- `/sales-email-marketing` — Opt-in email marketing (broadcasts, automations, newsletters)
- `/sales-integration` — Connect chatbot platforms to CRM, helpdesk, and other tools
- `/sales-audience-growth` — Grow your subscriber base (pop-ups, lead magnets, opt-in forms — feed contacts into bot flows)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: WhatsApp lead qualification bot
**User says**: "I want to build a WhatsApp bot that qualifies leads for my SaaS product and books demos"
**Skill does**: Recommends WhatsApp Business API setup, designs a 4-step qualification flow (greeting → role question → team size → pain point), explains 24-hour window and template requirements, configures meeting booking via calendar link, sets up hot lead handoff to sales rep
**Result**: Working WhatsApp bot that qualifies inbound leads and books demos for qualified prospects

### Example 2: Multi-channel FAQ bot
**User says**: "We get the same 20 questions on our website, Facebook, and Instagram. Can I automate this?"
**Skill does**: Recommends a platform with multi-channel support (SendPulse, ManyChat, or Tidio), structures FAQ into 5 categories with sub-menus, configures fallback to human agent after 2 failed attempts, sets up the same flow across website widget + Facebook + Instagram
**Result**: FAQ bot deployed on 3 channels, reducing support ticket volume by handling common questions automatically

### Example 3: E-commerce abandoned cart recovery via Messenger
**User says**: "I want to send abandoned cart reminders through Facebook Messenger instead of email"
**Skill does**: Explains Messenger 24-hour window and checkbox plugin for opt-in, designs flow: 1hr reminder with product image → 24hr discount offer → fallback to email if no response, configures Shopify/WooCommerce webhook to trigger the flow, adds human handoff for purchase objections
**Result**: Messenger-based cart recovery flow that engages customers in a conversational format with higher open rates than email

## Troubleshooting

### Bot sends messages but users don't see them
**Symptom**: Messages show as "sent" in the platform but users report not receiving them
**Cause**: Usually a 24-hour window violation (WhatsApp/Messenger) or the user has blocked/muted the bot
**Solution**: Check if the message was sent outside the messaging window — use template messages instead. Verify the user hasn't blocked the bot. For WhatsApp, check your Business Manager quality rating — low quality can throttle delivery.

### Bot flow gets stuck in a loop
**Symptom**: Users report the bot keeps repeating the same message or cycling through the same steps
**Cause**: A condition in the flow always evaluates to the same branch, or a fallback routes back to the same step
**Solution**: Check condition logic — ensure variables are being set correctly. Add a loop counter (increment a variable each pass) and break out after 2-3 iterations with a human handoff.

### Human handoff doesn't work during business hours
**Symptom**: Bot transfers to human agent but nobody picks up, or the handoff action doesn't trigger
**Cause**: Business hours misconfigured, no agents online, or the handoff action isn't connected to the live chat queue
**Solution**: Verify business hours timezone settings. Ensure at least one agent is set to "available" in the live chat panel. Test the handoff action in preview mode to confirm it routes to the correct team/inbox.
