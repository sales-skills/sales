---
name: sales-live-chat
description: "Live chat and chatbot for sales and support — widget setup, routing, chatbot flows, agent management, visitor tracking, chat-to-lead conversion, proactive messaging. Covers strategy and implementation across Brevo Conversations, Drift (Salesloft), Intercom, HubSpot, Crisp, LiveChat, Zendesk, Tidio, Freshdesk, and ZoomInfo Chat. Use when setting up live chat, building chatbot flows, optimizing chat-to-lead conversion, routing chats to agents, or choosing a live chat tool. Do NOT use for email sequences (use /sales-cadence), email marketing (use /sales-email-marketing), or meeting scheduling (use /sales-meeting-scheduler). For platform-specific help, use /sales-brevo, /sales-salesloft, or /sales-swai."
argument-hint: "[describe your live chat or chatbot question or goal]"
license: MIT
version: 1.0.0
tags: [sales, live-chat, chatbot, support]
---
# Live Chat & Chatbot for Sales

Help the user with live chat and chatbot — from tool selection and widget setup through chatbot flow design, agent routing, visitor tracking, and chat-to-lead conversion. This skill is tool-agnostic but includes platform-specific guidance for Brevo Conversations, Drift (Salesloft), Intercom, HubSpot, Crisp, LiveChat, Zendesk, Tidio, Freshdesk, and ZoomInfo Chat.

## Step 1 — Gather context

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

### Chat-to-lead conversion framework

1. **Identify** — track visitor identity (email, company via reverse IP, UTM source)
2. **Qualify** — chatbot asks qualifying questions before routing to agent (budget, timeline, role)
3. **Route** — send qualified leads to the right rep (by territory, deal size, product line)
4. **Convert** — book a meeting directly from chat (calendar integration)
5. **Capture** — push lead data to CRM automatically

### Chatbot flow design principles

1. **Start with a greeting that matches the page context** — "Looking at our pricing?" not "Hi, how can I help?"
2. **Use buttons, not open text** — guide the conversation with multiple-choice options
3. **Qualify in 2-3 questions max** — don't interrogate visitors
4. **Always offer a human option** — "Talk to a person" should be available at every step
5. **Set expectations** — if agents are offline, say so and offer email/callback
6. **Personalize when possible** — use visitor name, company, or page context

### Tool selection framework

| Factor | Brevo | Drift | Intercom | HubSpot | Crisp | LiveChat |
|---|---|---|---|---|---|---|
| **Best for** | All-in-one marketing + chat | Enterprise sales chat | Product-led growth | HubSpot ecosystem | SMB budget | Support-focused |
| **Pricing** | Included in Brevo plans | $$$ (enterprise) | $$$  | Free (basic) to $$$ | Free to $$ | $$ |
| **Chatbot** | Basic automation | AI + playbooks | AI + custom bots | Basic to advanced | Basic bot | Basic bot |
| **CRM integration** | Built-in CRM | Salesforce, HubSpot | Own CRM | Native | Zapier | Zapier, native |
| **AI features** | Aura AI agent | AI chatbot, Bionic | Fin AI agent | AI assistant | AI bot | AI assist |
| **Meeting booking** | No native | Yes | Yes | Yes (HubSpot meetings) | No native | No native |

## Step 3 — Platform-specific guidance

### In Brevo
- **Product**: Brevo Conversations — live chat + chatbot included in all Brevo plans
- **Widget**: Install JavaScript snippet on your website
- **Chatbot**: Automated messages triggered by page URL, time on page, visitor behavior
- **Agent management**: Set online/offline status, assign visitors to groups
- **API**: REST API for sending messages, managing automated messages, visitor assignment
- **Strength**: Included free with Brevo — no separate chat tool needed. Chat contacts sync to Brevo contact database automatically. Good for teams already using Brevo for email/CRM.
- **Limitation**: Less sophisticated chatbot flows than Drift or Intercom. No native meeting booking from chat.
- **Platform skill**: `/sales-brevo`

### In Drift (Salesloft)
- **Product**: Drift is now part of Salesloft — enterprise conversational sales platform
- **Playbooks**: Visual chatbot builder with qualification logic, routing, and meeting booking
- **AI**: Drift AI chatbot handles conversations when agents are offline
- **Revenue routing**: Route chats based on account data, deal size, territory
- **Strength**: Best for enterprise B2B sales with complex routing needs. Deep Salesforce integration.
- **Limitation**: Expensive — enterprise pricing only. Overkill for SMB.
- **Platform skill**: `/sales-salesloft`

### In Intercom
- **Product**: Customer messaging platform with chat, bots, help center
- **Fin AI**: AI agent that resolves support questions and qualifies leads
- **Custom bots**: Visual bot builder with conditional logic, API calls, and app integrations
- **Product Tours**: Guide users through your product from chat
- **Strength**: Best for product-led growth — combines support, sales, and onboarding in one tool. Strong for SaaS companies.
- **Limitation**: Pricing scales with contacts/conversations — can get expensive.

### In HubSpot
- **Product**: Live chat and chatbots built into HubSpot CRM
- **Chatflows**: Chatbot builder with branching logic, integrated with HubSpot CRM
- **Meeting booking**: Native calendar integration — book meetings directly from chat
- **Free tier**: Basic live chat included in HubSpot Free
- **Strength**: Best if you're already in the HubSpot ecosystem. Seamless CRM integration.
- **Limitation**: Advanced chatbot features require paid plans.

### In Crisp
- **Product**: Affordable multi-channel messaging (chat, email, SMS, WhatsApp)
- **Free tier**: 2 agents, basic chat
- **Strength**: Best value for SMBs — generous free tier, clean UI, multi-channel inbox.
- **Limitation**: Less sophisticated automation and AI than enterprise tools.

### In GetResponse

GetResponse includes a basic live chat widget as part of its all-in-one marketing platform:

- **Chat widget**: Embed on GetResponse landing pages or external websites. Captures visitor info for your contact list.
- **Automated greetings**: Configure welcome messages triggered by page visit or time on page.
- **Contact capture**: Chat conversations auto-create contacts in your GetResponse lists with conversation history.
- **Availability hours**: Set online/offline status with appropriate messaging.
- **Available on all paid plans**: No additional cost — included in Starter, Marketer, Creator, and MAX.
- **Limitation**: Basic functionality compared to dedicated tools (Drift, Intercom, Crisp). No chatbot flow builder, no AI-powered responses, no advanced routing rules, no native meeting booking. Best for simple lead capture — use a dedicated chat tool for complex sales chat workflows.
- **Best for**: GetResponse users who want basic website chat without adding another tool. Good for landing pages and simple lead qualification.
- **Platform skill**: `/sales-getresponse`

### In ZoomInfo (Chat)
- **Visitor identification** — ZoomInfo Chat identifies anonymous visitors using WebSights (IP-to-company matching) and enriches them with firmographic data before the conversation starts
- **Smart routing** — route conversations to the right sales rep based on account ownership, territory, or firmographic criteria. High-value accounts get human reps; others get bot.
- **Chatbot** — automated conversations triggered by visitor firmographics (e.g., show different bot flows for enterprise vs SMB visitors)
- **Meeting booking** — let qualified visitors book meetings directly from chat, synced to rep calendars
- **Data enrichment** — even if a visitor doesn't chat, WebSights captures their company info for follow-up
- **Integration** — chat transcripts and visitor data sync to Salesforce, HubSpot, and ZoomInfo CRM records
- **Advantage** — ZoomInfo Chat knows WHO is visiting (company, size, industry) before the chat starts, enabling personalized experiences. Most chat tools only see anonymous visitors until they self-identify.

### In SendPulse

SendPulse offers a full-featured live chat solution as part of its multi-channel marketing platform:

- **Website chat widget**: Customizable appearance and colors to match your brand. Pre-chat form captures visitor details before the conversation starts.
- **Unified inbox**: Conversations from Telegram, Facebook, WhatsApp, Instagram, Viber, and your website chat all appear in a single panel — agents never have to switch between apps.
- **Bot-to-human handoff**: SendPulse chatbots can handle initial qualification and transfer to a live agent seamlessly when the visitor needs human help.
- **Canned responses**: Pre-written quick replies for common questions — speeds up agent response time.
- **Visitor info panel**: Agents see pages viewed, location, and device info alongside the conversation for better context.
- **Business hours**: Configure online/offline hours. When agents are unavailable, an offline form collects messages for follow-up.
- **Mobile app**: Agents can respond from iOS or Android — useful for small teams without a dedicated support desk.
- **Free plan**: Live chat is included on SendPulse's free plan, making it accessible for startups and solopreneurs.
- **Best for**: Teams already using SendPulse for email or chatbots who want unified multi-channel conversations without adding a separate chat tool.
- **Platform skill**: `/sales-sendpulse`

### In SWAI

SWAI.ai includes an AI-powered chat widget as part of its Autonomous Revenue OS:

- **AI chat widget**: Embeddable chat for lead capture and qualification — AI handles conversations autonomously
- **Lead qualification**: AI agent asks qualifying questions and routes leads based on responses
- **Appointment booking**: Native Cal.com integration for scheduling meetings directly from chat
- **Always-on**: AI handles conversations 24/7 — no offline dead widget
- **Unified with campaigns**: Chat activity feeds into SWAI's CRM and triggers email/campaign follow-up automatically
- **Limitation**: Website-only chat (no WhatsApp, Messenger, or other channels). No visual chatbot flow builder. Less agent management features than dedicated tools (Intercom, Drift, LiveChat).
- **Best for**: Teams using SWAI for marketing automation who want an intelligent website chat without adding a separate tool.
- **Platform skill**: `/sales-swai`

### In LiveChat / Zendesk / Tidio / Freshdesk
- **LiveChat**: Support-focused with ticketing integration. Good for support teams.
- **Zendesk Chat**: Part of Zendesk Suite — best if you're already on Zendesk for support.
- **Tidio**: Affordable with AI chatbot (Lyro). Good for e-commerce.
- **Freshdesk/Freshchat**: Part of Freshworks — good for support-first teams with sales needs.

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

### Key metrics

| Metric | Benchmark | What it tells you |
|---|---|---|
| Chat-to-lead rate | 10-30% | How well chat qualifies visitors |
| First response time | < 30 seconds | Agent availability and speed |
| Resolution time | < 5 minutes (sales) | Efficiency of conversations |
| CSAT | > 85% | Quality of chat interactions |
| Meeting booked rate | 5-15% of chats | Chat-to-pipeline conversion |

## Gotchas

1. **Don't pop up chat on every page** — aggressive chat popups annoy visitors. Target high-intent pages only (pricing, demo, trial). Use passive widget on other pages.
2. **Don't build a 10-question chatbot** — long qualification flows have high drop-off. 2-3 questions max before routing to a human or offering to book a meeting.
3. **Don't forget offline hours** — if no agents are online and no chatbot is configured, visitors see a dead chat widget. Always have an offline message or email capture form.
4. **Don't ignore mobile** — chat widgets can obscure content on mobile. Test the experience on small screens and consider hiding or minimizing the widget on mobile.
5. **Don't skip CRM integration** — chat leads that don't get pushed to CRM get forgotten. Always connect chat to your lead management system.

## Related skills

- `/sales-zoominfo` — ZoomInfo platform help (Chat, WebSights visitor identification)
- `/sales-getresponse` — GetResponse platform help (built-in live chat widget)
- `/sales-brevo` — Brevo platform help (Conversations live chat setup)
- `/sales-salesloft` — Salesloft/Drift platform help (enterprise sales chat)
- `/sales-sendpulse` — SendPulse platform help (live chat, unified inbox, bot-to-human handoff)
- `/sales-swai` — SWAI platform help (AI chat widget, autonomous lead qualification, Cal.com scheduling)
- `/sales-chatbot` — Chatbot design and automation
- `/sales-meeting-scheduler` — Book meetings from chat conversations
- `/sales-lead-routing` — Route chat-qualified leads to the right rep
- `/sales-lead-score` — Score chat leads based on qualification data
- `/sales-integration` — Connect chat tools with CRM and other systems
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
