# Live Chat & Chatbot Platform Guide

## Chat-to-Lead Conversion Framework

1. **Identify** — track visitor identity (email, company via reverse IP, UTM source)
2. **Qualify** — chatbot asks qualifying questions before routing to agent (budget, timeline, role)
3. **Route** — send qualified leads to the right rep (by territory, deal size, product line)
4. **Convert** — book a meeting directly from chat (calendar integration)
5. **Capture** — push lead data to CRM automatically

## Chatbot Flow Design Principles

1. **Start with a greeting that matches the page context** — "Looking at our pricing?" not "Hi, how can I help?"
2. **Use buttons, not open text** — guide the conversation with multiple-choice options
3. **Qualify in 2-3 questions max** — don't interrogate visitors
4. **Always offer a human option** — "Talk to a person" should be available at every step
5. **Set expectations** — if agents are offline, say so and offer email/callback
6. **Personalize when possible** — use visitor name, company, or page context

## Tool Selection Framework

| Factor | Brevo | Drift | Intercom | HubSpot | Crisp | LiveChat | Qualified |
|---|---|---|---|---|---|---|---|
| **Best for** | All-in-one marketing + chat | Enterprise sales chat | Product-led growth | HubSpot ecosystem | SMB budget | Support-focused | Enterprise Salesforce |
| **Pricing** | Included in Brevo plans | $$$ (enterprise) | $$$  | Free (basic) to $$$ | Free to $$ | $$ | $$$$ ($42K-$100K+/yr) |
| **Chatbot** | Basic automation | AI + playbooks | AI + custom bots | Basic to advanced | Basic bot | Basic bot | Piper AI SDR |
| **CRM integration** | Built-in CRM | Salesforce, HubSpot | Own CRM | Native | Zapier | Zapier, native | Salesforce only (native) |
| **AI features** | Aura AI agent | AI chatbot, Bionic | Fin AI agent | AI assistant | AI bot | AI assist | Piper AI SDR (chat/voice/video) |
| **Meeting booking** | No native | Yes | Yes | Yes (HubSpot meetings) | No native | No native | Yes (Piper Meetings) |

## Platform-Specific Reference

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
- **Datan enrichment** — even if a visitor doesn't chat, WebSights captures their company info for follow-up
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

### In Qualified

Qualified is an enterprise agentic marketing platform built natively on Salesforce:

- **Piper AI SDR Agent**: AI-powered conversations that qualify visitors in real time using text, voice, and video. Piper works 24/7 and uses Salesforce CRM data to personalize every interaction.
- **Salesforce-native routing**: Matches visitors to existing Salesforce accounts and routes to the account owner. Territory-based and round-robin fallback routing built on Salesforce data.
- **Real-time alerts**: Slack, Teams, Chrome, Gmail, and mobile notifications when high-value visitors arrive.
- **Meeting booking**: Piper Meetings books demos directly from chat based on rep calendar availability (Google Calendar, Outlook).
- **Signals (buyer intent)**: First-party website engagement + third-party intent via Bombora for account-level scoring and prioritization.
- **Visitor identification**: Enriches anonymous visitors using Clearbit and ZoomInfo integrations. Segments visitors using Salesforce account data (tier, industry, revenue, opportunity status).
- **Advantage**: Deepest Salesforce integration in the category — built by ex-Salesforce team. AI SDR (not just chatbot) that qualifies, routes, books, and follows up.
- **Limitation**: Salesforce required (no HubSpot/Pipedrive). Enterprise pricing ($42K-$100K+/yr). Inbound only — no outbound sequences.
- **Best for**: Enterprise B2B SaaS with Salesforce CRM, high inbound traffic, complex routing needs.
- **Platform skill**: `/sales-qualified`

### In LiveChat / Zendesk / Tidio / Freshdesk
- **LiveChat**: Support-focused with ticketing integration. Good for support teams.
- **Zendesk Chat**: Part of Zendesk Suite — best if you're already on Zendesk for support.
- **Tidio**: Affordable with AI chatbot (Lyro). Good for e-commerce.
- **Freshdesk/Freshchat**: Part of Freshworks — good for support-first teams with sales needs.

## Key Metrics

| Metric | Benchmark | What it tells you |
|---|---|---|
| Chat-to-lead rate | 10-30% | How well chat qualifies visitors |
| First response time | < 30 seconds | Agent availability and speed |
| Resolution time | < 5 minutes (sales) | Efficiency of conversations |
| CSAT | > 85% | Quality of chat interactions |
| Meeting booked rate | 5-15% of chats | Chat-to-pipeline conversion |
