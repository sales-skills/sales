---
name: sales-chatbot
description: "Chatbot marketing and conversational automation — building chatbot flows, multichannel messaging (WhatsApp, Telegram, Facebook, Instagram, Viber, live chat), lead qualification bots, FAQ bots, and handoff to human agents. Use when asking 'how do I build a chatbot', 'WhatsApp bot', 'Telegram bot for sales', 'chatbot lead qualification', 'conversational marketing', 'live chat handoff'. Do NOT use for live chat widget setup without bots (use /sales-live-chat), email sequences (use /sales-cadence), or SMS campaigns without conversational flow (use /sales-sms-marketing). For SendPulse-specific help, use /sales-sendpulse."
argument-hint: "[describe your chatbot or conversational automation question]"
license: MIT
version: 1.0.0
tags: [sales, chatbot, live-chat, conversational]
---
# Chatbot Marketing & Conversational Automation

Help the user build chatbot flows for sales, support, and marketing — across WhatsApp, Telegram, Facebook Messenger, Instagram, Viber, website live chat, and other messaging platforms.

## Step 1 — Gather context

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

### Choosing the right channel

| Channel | Best for | Audience reach | Rich media | Session rules |
|---------|----------|---------------|------------|---------------|
| WhatsApp | High-intent B2C, transactional | 2B+ global users | Images, docs, buttons, lists | 24-hour window; templates outside window |
| Telegram | Tech-savvy audiences, communities | 800M+ users | Inline keyboards, files, polls | No session limits |
| Facebook Messenger | Broad B2C, retargeting | 1B+ users | Quick replies, carousels, webviews | 24-hour window; message tags for exceptions |
| Instagram DMs | D2C brands, influencer funnels | 2B+ users | Quick replies, stories triggers | 24-hour window |
| Website live chat | B2B lead capture, support | Your site visitors | Fully customizable | No limits — your widget |
| Viber | Eastern Europe, Southeast Asia | 260M+ users | Carousels, buttons | No strict window |

### Chatbot flow design principles

1. **Start with the happy path** — map the ideal conversation first, then add fallbacks
2. **Keep messages short** — 1-3 sentences per bubble, max 2 buttons per step on mobile
3. **Use buttons over free text** — structured input reduces misunderstanding and drop-off
4. **Always offer a human handoff** — "Talk to a person" option at every decision point
5. **Set expectations early** — "I'm a bot — I can help with X, Y, Z or connect you to our team"
6. **Respect platform rules** — WhatsApp and Messenger enforce 24-hour messaging windows; outside that, you need pre-approved templates
7. **Track key metrics** — bot activation rate, completion rate, handoff rate, CSAT

### Lead qualification bot framework

```
Greeting → Qualify (role, company size, need) → Score → Route
  ├── Hot lead → Instant handoff to sales rep
  ├── Warm lead → Book a demo link + add to nurture sequence
  └── Cold/unqualified → Helpful content + newsletter opt-in
```

**Qualification questions to ask (pick 2-3):**
- What brings you here today? (intent)
- What's your role? (authority)
- How many people on your team? (company size / fit)
- When are you looking to get started? (timeline)
- What's your biggest challenge with X? (pain point)

### FAQ bot structure

1. **Menu of topics** — 4-6 top categories as buttons
2. **Sub-menus** — 2-3 levels deep max before offering human handoff
3. **Fallback** — "I didn't understand that. Here are the topics I can help with: [menu]"
4. **Escalation** — after 2 failed attempts, auto-route to human agent

## Step 3 — Platform-specific guidance

### In SendPulse

SendPulse supports chatbots across 7 channels from a single visual flow builder:

**Supported channels:** Telegram, Facebook Messenger, WhatsApp Business, Instagram, Viber, Live Chat, and VKontakte.

**Building a flow:**
1. Go to **Chatbots** → select your connected channel → **Create Flow**
2. Use the visual drag-and-drop builder to add steps:
   - **Message** — text, images, files, buttons
   - **Condition** — branch based on user input, variable values, or tags
   - **Action** — set variables, add/remove tags, subscribe to mailing list, create CRM deal
   - **Filter** — segment by contact properties
   - **API Request** — call external APIs mid-flow
   - **AI Step** — use ChatGPT/AI to generate dynamic responses
   - **Delay** — wait before next step
   - **Random** — A/B test different paths
3. Set **triggers**: keywords, subscription, button click, or webhook
4. Test in the preview pane before publishing

**WhatsApp specifics:**
- Connect via WhatsApp Business API (requires verified Facebook Business Manager)
- 24-hour messaging window — free-form messages only within 24 hours of last user message
- Outside window: use pre-approved **template messages** (POST `/messenger/whatsapp/send_template`)
- Template categories: marketing, utility, authentication

**Live chat handoff:**
- Add an **"Open chat"** action step to transfer from bot to human agent
- Agents see conversations in SendPulse's **Live Chat** panel
- Bot pauses during human conversation; resumes if agent closes the chat
- Set business hours — outside hours, bot collects contact info for follow-up

**Automation 360 integration:**
- Trigger chatbot flows from Automation 360 workflows (e.g., abandoned cart → WhatsApp message)
- Use chatbot events as Automation 360 triggers (e.g., bot completed → add to email sequence)

**API endpoints for chatbot messaging:**
```
POST /messenger/telegram/send          # Send Telegram message
POST /messenger/facebook/send          # Send Facebook message
POST /messenger/whatsapp/send          # Send WhatsApp message (24hr window)
POST /messenger/whatsapp/send_template # Send WhatsApp template (outside window)
POST /messenger/instagram/send         # Send Instagram message
POST /messenger/viber/send             # Send Viber message
GET  /messenger/{platform}/contacts    # List subscribers per channel
```

**Pricing note:** Chatbot features are included in all SendPulse plans. WhatsApp conversations are billed per Meta's conversation-based pricing (marketing, utility, service categories).

> For full SendPulse platform setup, use `/sales-sendpulse`.

### In ManyChat

ManyChat is a dedicated chatbot platform focused on Instagram, Facebook Messenger, WhatsApp, Telegram, and SMS:

- **Flow Builder** — visual drag-and-drop with conditions, delays, smart delays, A/B splits
- **Keywords** — trigger flows based on specific words in user messages
- **Growth Tools** — QR codes, comment triggers (Instagram), m.me links, website widgets
- **Instagram automation** — auto-reply to story mentions, comments, and DMs; trigger flows from Reels comments
- **Shopify integration** — abandoned cart recovery, order confirmations, product recommendations via bot
- **Live chat** — pause bot, human takes over, resume bot when done
- **API**: REST API for sending messages, managing subscribers, and triggering flows programmatically

### In Tidio

Tidio combines live chat with AI chatbot (Lyro):

- **Lyro AI** — trains on your FAQ/help center content, answers questions automatically
- **Visual chatbot builder** — drag-and-drop flows for lead capture, FAQ, product recommendation
- **Channels**: website widget, Facebook Messenger, Instagram, email
- **Shopify/WooCommerce plugins** — product cards, order lookup in chat
- **Handoff** — seamless transfer from Lyro/bot to human agent with full conversation history

### In Intercom

Intercom's Fin AI Agent handles support and sales conversations:

- **Fin AI** — resolves support questions using your help center, previous conversations, and custom data
- **Custom Bots** — visual builder for lead qualification, routing, meeting booking
- **Channels**: website messenger, WhatsApp, Facebook, Instagram, SMS, email
- **Custom Actions** — call external APIs from within bot flows
- **Workflows** — automate routing, tagging, assignment based on bot conversation outcomes

### In Drift (Salesloft)

Drift (now part of Salesloft) focuses on B2B conversational marketing:

- **Playbooks** — target visitors by page, company, intent; show personalized bot greetings
- **Fastlane** — qualify known leads instantly via form-to-chat conversion
- **Meeting booking** — bot checks rep calendars and books meetings inline
- **Revenue orchestration** — bot data flows into Salesloft cadences and CRM

### In HubSpot

HubSpot's chatbot builder (included in free CRM):

- **Chatflows** — visual builder with if/then branching
- **Qualification** — ask questions, create/update contacts, route to owner
- **Meeting booking** — connect to HubSpot meetings tool
- **Knowledge base** — AI answers from your help articles (Service Hub Pro+)
- **Channels**: website, Facebook Messenger

## Step 4 — Actionable guidance

### Building your first bot (step-by-step)

1. **Define the goal** — one bot, one job (don't try to do everything in one flow)
2. **Map the conversation** — sketch on paper: greeting → questions → outcomes → handoff points
3. **Build the happy path** — create the flow for the ideal conversation first
4. **Add fallbacks** — what happens when the user says something unexpected?
5. **Set up handoff** — configure human takeover with business hours and offline message
6. **Test with real users** — recruit 5-10 people to test; watch for confusion points
7. **Iterate** — check completion rates; fix the step where most users drop off

### Metrics to track

| Metric | Target | What it tells you |
|--------|--------|-------------------|
| Activation rate | >60% | % of visitors who engage with bot |
| Completion rate | >40% | % who finish the flow |
| Handoff rate | 10-30% | Too low = bot may be blocking people; too high = bot isn't useful |
| Lead qualification rate | >20% | % of conversations producing qualified leads |
| CSAT / NPS | >4.0 / >50 | User satisfaction with bot experience |
| Response time (human) | <2 min | Speed of handoff when bot escalates |

### Common mistakes

- **Too many questions** — 3-4 qualification questions max before offering value or handoff
- **No escape hatch** — always let users reach a human; hiding the option kills trust
- **Generic greeting** — "Hi! How can I help?" loses to "Hey! Looking for [product category]? I can help you find the right fit in 30 seconds"
- **Ignoring platform rules** — sending promotional WhatsApp messages outside the 24-hour window gets your number banned
- **Not connecting to CRM** — bot conversations should create/update contacts and trigger follow-up sequences

## Gotchas

*Best-effort from research — review these, especially items about platform-specific rules that may change.*

- **WhatsApp 24-hour window is strict** — if you send a non-template message outside the window, it silently fails or gets your account flagged. Always check `last_activity` timestamp before sending.
- **Facebook/Instagram 24-hour rule** — similar to WhatsApp, Messenger has a 24-hour standard messaging window. Outside it, you need message tags (limited to specific use cases like confirmed event updates or account updates).
- **Template approval takes time** — WhatsApp message templates require Meta review (hours to days). Don't wait until launch day to submit templates.
- **Bot-to-human handoff state** — most platforms pause the bot during human chat but don't always resume correctly. Test the full cycle: bot → human → bot resumes.
- **Multi-channel subscriber identity** — a user on WhatsApp and Telegram is often two separate contacts in the platform. Merging/deduplication requires matching by phone or email.

## Step 5 — Related skills

- `/sales-sendpulse` — SendPulse platform help (chatbots across 7 channels, visual flow builder, Automation 360)
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
