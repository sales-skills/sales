# Lindy Platform Reference

## Platform overview

Lindy (lindy.ai) is a no-code AI agent builder positioned as an "AI employee" that automates email, meetings, calendar, and custom workflows. Founded by Flo Crivello, it differentiates from traditional automation tools (Zapier, Make) by adding AI reasoning to workflows — agents can make judgment-based decisions rather than following rigid if-then rules. Target audience: professionals and teams looking to reduce administrative overhead with a single AI assistant, plus businesses building custom AI agents for sales, support, and operations.

## Key modules

### Email management
- Inbox triage — automatically categorizes, prioritizes, and flags important emails
- Draft composition in the user's writing style (learns from interaction history)
- Reply sending on behalf of the user
- Multi-inbox support (2-5 inboxes depending on plan)

### Meeting assistant
- Auto-join meeting recording (Zoom, Google Meet, Microsoft Teams)
- Real-time transcription and AI summaries
- Action item extraction
- Post-meeting follow-up drafts
- Pre-meeting prep briefings (participant research, context gathering)

### Calendar management
- Scheduling via natural language ("Reschedule my 2pm")
- Smart scheduling suggestions based on availability
- Calendar sync across Google Calendar and Outlook

### Task delegation
- Natural language commands via iMessage, SMS, Slack, email
- Ad hoc research and information retrieval
- File sharing and document lookup
- 24/7 asynchronous operation

### AI agent builder (workflow builder)
- Visual drag-and-drop workflow builder ("Lindies" = individual AI agents)
- **Triggers**: Email received, scheduled event, webhook, form submission, manual
- **Actions**: Send email, update CRM, HTTP Fetch (call any API), AI reasoning step, phone call, computer use
- **AI reasoning**: Agents can make context-aware decisions (vs. rigid rules in Zapier/Make)
- **HTTP Fetch action**: Call any external API with configurable URL, method, headers, body (static or AI-generated)
- **Societies**: Multiple agents working together, delegation based on rules
- 40+ pre-built templates (sales assistant, meeting notetaker, customer support, lead qualification, research assistant)
- Natural language agent creation — describe what you want and Lindy builds the workflow

### AI phone calls
- Inbound and outbound AI voice calls
- 30+ language support (Business+)
- Phone numbers and concurrent calls (plan-gated)
- Call transfers

### Knowledge base
- Upload documents for RAG (retrieval-augmented generation)
- Size limits: varies by plan (up to 50M chars on Business)
- Used by agents for context-aware answers

### Computer use
- Browser automation and screen interaction
- Pro plan ($99.99/mo) and above only

## Pricing and limits

*Best-effort as of 2026-04 — verify on lindy.ai/pricing before quoting.*

**Current pricing page tiers:**

| Tier | Cost/mo | Annual | Inboxes | Usage | Key gates |
|------|---------|--------|---------|-------|-----------|
| Plus | $49.99 | ~$41.67 (17% off) | 2 | Standard | Core features |
| Pro | $99.99 | ~$83.33 | 3 | 3x Plus | Computer use |
| Max | $199.99 | ~$166.67 | 5 | 7x Plus | Enhanced computer use |
| Enterprise | Custom | Custom | Team | Custom | SSO, SCIM, audit logs, HIPAA BAA, dedicated support |

**Credit-based pricing (from review sites — may be A/B tested or legacy):**

| Tier | Cost/mo | Credits/mo | Tasks | Knowledge base | Phone calls |
|------|---------|------------|-------|----------------|-------------|
| Free | $0 | 400 | ~40 | 1M chars | None |
| Starter | $19.99 | 2,000 | ~1,500 | - | - |
| Pro | $29.99-$49.99 | 3,000-5,000 | ~1,500 | 20M chars | 30/mo, 1 concurrent, English only |
| Business | $199.99 | 20,000 | - | 50M chars | Unlimited, 30+ languages |
| Enterprise | Custom | Custom | - | Unlimited | Unlimited, concurrent, call transfers |

**Credit consumption:**
- Simple automations: 1-3 credits
- AI-intensive tasks (Prompt AI mode, complex reasoning): 5-10+ credits
- Add-on: 1,000 credits for $10

**All plans include:** 7-day free trial, iMessage access, meeting recording, email management, hundreds of integrations.

**Compliance:** SOC 2 Type II, HIPAA, GDPR, PIPEDA, AICPA. AES-256 encryption. Enterprise BAA available. Data never sold or used for model training.

## Integrations

Lindy integrates with 4,000+ tools via Pipedream Connect:

**Email & communication:** Gmail, Outlook, Amazon SES, Slack, Slack Bot, Twilio, iMessage, SMS
**CRM & sales:** HubSpot, Salesforce, Zoho CRM, Pipedrive, Agile CRM
**Calendar & scheduling:** Google Calendar, Outlook Calendar, Calendly, Acuity Scheduling
**Project management:** Asana, Monday.com, Basecamp, Jira, Notion
**Customer support:** Zendesk, Zoho Desk, Freshdesk, LiveAgent, Intercom
**Data & analytics:** Airtable, Google Sheets, Amplitude
**Cloud storage:** Google Drive, Azure Storage, AWS S3
**Automation:** Zapier, Make (as integration targets)

**Custom API integration:** HTTP Fetch action supports any API with configurable:
- URL (static or dynamic from prior step outputs)
- HTTP method (GET, POST, PUT, DELETE, PATCH)
- Headers (Authorization, Content-Type, custom key-value pairs)
- Body (static JSON/XML or AI-generated via "Prompt AI" mode)
- Content-Type detection (auto, JSON, XML)

## API access

**No public developer API exists.** You cannot:
- Programmatically create or manage Lindies (agents)
- Trigger workflows from external systems via API
- Read workflow results or agent outputs via API
- Build integrations that embed Lindy

**What you CAN do:**
- Use the HTTP Fetch action from WITHIN Lindy to call external APIs
- Use webhooks as triggers (inbound) to start Lindy workflows
- Access Lindy via iMessage, SMS, Slack, or email for natural language commands

Documentation: https://docs.lindy.ai/

## Workflow setup

### Basic personal assistant (email + meetings)
1. Create account at lindy.ai (7-day free trial)
2. Connect email inbox (Gmail or Outlook)
3. Connect calendar (Google Calendar or Outlook)
4. Add phone number for iMessage/SMS access
5. Configure email triage preferences (what to flag, draft, ignore)
6. Enable meeting auto-join
7. Test: send yourself an email and verify Lindy triages it

### Custom AI agent workflow
1. Click + next to Lindies to create new agent
2. Choose "Start from scratch" or pick a template
3. Select a trigger (email received, scheduled, webhook, etc.)
4. Add action steps (send email, HTTP request, AI reasoning, etc.)
5. For HTTP requests: configure URL, method, headers, body
6. Test the workflow end-to-end
7. Activate and monitor credit consumption

### AI chatbot / customer support agent
1. Choose "Customer Support" template or start from scratch
2. Upload knowledge base documents (FAQs, product docs, help articles)
3. Configure trigger (website widget, email, messaging platform)
4. Set up fallback/escalation rules (when to hand off to human)
5. Test with sample queries
6. Deploy and monitor response quality

## Deep dives

### Credit optimization strategies
- Replace "Prompt AI" body mode with static JSON payloads for predictable API calls
- Use conditional logic to skip expensive AI reasoning when simple rules suffice
- Batch related operations into single workflow runs
- Monitor the credit dashboard to identify high-consumption agents
- Consider whether a simpler tool (Zapier, Make) handles the task without AI reasoning

### When Lindy vs dedicated tools
| Use case | Lindy advantage | Dedicated tool advantage |
|---|---|---|
| Meeting notes | One tool for email + meetings + calendar | Fathom/Fireflies have deeper CRM sync, better search, coaching features |
| Email automation | AI reasoning for complex triage | Zapier/Make more reliable for deterministic rules |
| Chatbot | Quick setup, knowledge base RAG | ManyChat/Intercom deeper multi-channel, analytics |
| Scheduling | Natural language via iMessage | Calendly/Chili Piper better booking pages, round-robin |
| Phone calls | AI voice agents built-in | Bland.ai/Vapi deeper voice AI customization |

### Partner/affiliate program
- Content Partner: 30% year 1, 15% year 2 (PartnerStack)
- Creator Partner: 40% year 1, lifetime commissions (PartnerStack)
- Service Partner: certified consultant program
- Apply at lindy.ai/partners
