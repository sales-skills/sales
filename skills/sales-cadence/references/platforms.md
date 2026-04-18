# Platform-Specific Cadence Implementation

Detailed per-platform cadence setup — campaign types, channel support, A/B testing, sending controls, and best practices.

## Table of contents

- [In Mailshake](#in-mailshake)
- [In Lemlist](#in-lemlist)
- [In Yesware](#in-yesware)
- [In Smartlead](#in-smartlead)
- [In Attio](#in-attio)
- [In Mixmax](#in-mixmax)
- [In Reply.io](#in-replyio)
- [In Hunter.io](#in-hunterio)
- [In Seamless.AI](#in-seamlessai)
- [In Woodpecker](#in-woodpecker)
- [In Closum](#in-closum)
- [In Minelead](#in-minelead)
- [In GetProspect](#in-getprospect)
- [In ZoomInfo (Engage)](#in-zoominfo-engage)
- [In Snov.io](#in-snovio)
- [In 6sense (AI Email Agents)](#in-6sense-ai-email-agents)
- [In Clay (Email Sequencer)](#in-clay-email-sequencer)
- [In AiSDR](#in-aisdr)
- [In Nooks](#in-nooks)
- [In Orum](#in-orum)

## In Mailshake
- Mailshake campaigns = cadences — a campaign has an initial message plus follow-ups
- Follow-up types: time-based (drip), reply-based, click-based (on-click message)
- Channel limitation: email-first; phone/LinkedIn steps tracked manually or via another tool
- A/B testing: available on higher plans — test subject lines and body content
- Recipient management: add via CSV or API; only email is required

## In Lemlist
- Lemlist sequences = multichannel campaigns — email, LinkedIn, phone, and WhatsApp steps on automated schedules
- True multichannel: LinkedIn steps (profile visit, connection request, message), in-app calling, WhatsApp (paid add-on $20/seat/month)
- LinkedIn steps require Multichannel Expert plan ($99/user/month) — Email Pro is email-only
- A/B testing: test subject lines, email body, and entire step variants
- AI personalization: AI-generated custom variables that research each lead (LinkedIn, website, news) for Level 3-4 personalization at scale
- LinkedIn safety: limit connection requests to 20-30/day, profile visits to 50-80/day to avoid account restrictions
- Inbox rotation: connect multiple email accounts and Lemlist distributes sends (5 accounts per user on top plan, $9 per additional)

## In Yesware
- Yesware campaigns = multi-channel sequences — email, phone call reminders, LinkedIn InMail, and custom tasks on automated schedules
- Sends from your inbox (Gmail/Outlook) — no third-party server, better deliverability
- Personalization: dynamic fields (merge variables) for automated personalization, individual email customization
- Recipient limits: 10/month (Free), 20/month (Pro), unlimited (Premium+)
- A/B testing: not natively supported in campaigns — test manually by creating variant campaigns
- Auto-removal: recipients who reply or book meetings are automatically removed from the campaign
- Templates: shared team templates (Premium+) for consistent messaging across reps
- Tracking: real-time open/click/attachment notifications to time follow-ups — see `/sales-email-tracking`

## In Smartlead
- Smartlead campaigns = sequences — a campaign has email steps with time delays between them
- Email-only by default; phone steps require SmartDialer, LinkedIn touchpoints via external tools
- A/B testing: built-in variant testing (up to 26 variants A-Z) for subject lines and email body
- SmartAgents: AI-powered personalization at scale — research prospects and generate custom email content per lead. Best for Level 3-4 personalization when sending to 100+ prospects.
- Lead management: leads tracked by interest status within campaigns (interested, not interested, not contacted, do not contact, wrong person, completed)

## In Mixmax
- **Where**: Sequences tab in Gmail sidebar or app.mixmax.com/dashboard/sequences
- **Channel support**: Email, phone (built-in dialer), LinkedIn (Sales Navigator InMail + connection requests), tasks
- **AI builder**: AI Compose generates sequence emails and subject lines; Smart Send picks optimal delivery times per recipient
- **Personalization**: Snippets (reusable templates), Salesforce/HubSpot dynamic fields, polls & surveys embedded in emails
- **A/B testing**: Test subject lines, body content, and send times within sequences
- **Stages**: Each sequence has ordered stages (email, call, LinkedIn, task); configure delay between stages
- **Recipient management**: Add recipients individually, from CSV, from Salesforce/HubSpot lists, or via API (`POST /sequences/:id/recipients`)
- **Delegated sending**: Send sequences on behalf of colleagues
- **Exit rules**: Auto-exit on reply, meeting booked, or custom rule trigger
- **Limits**: Recipient limits vary by plan; sequences are Gmail-native (subject to Gmail sending limits)
- **Reporting**: Opens, clicks, replies, bounces per stage and per recipient; team-level sequence analytics
- **Best practice**: Use Mixmax rules engine to auto-enroll contacts in sequences based on Salesforce triggers (e.g., new lead assigned → auto-enroll in introductory sequence)

## In Reply.io
- **Where**: Sequences tab in Reply.io dashboard (app.reply.io)
- **Channel support**: Email, LinkedIn (InMail, connection requests, profile views — $69/account add-on), calls ($29/account add-on), SMS ($29/account add-on), WhatsApp
- **Conditional sequences**: Unique feature — set up branching logic based on prospect actions (opened, clicked, replied) or data (title, industry). Different prospects can follow different paths within the same sequence.
- **AI sequence builder**: Jason AI can generate entire sequences based on your ICP and value prop
- **A/B testing**: Test subject lines, body content, and step variations within sequences
- **Stages**: Ordered steps with configurable delays; mix channels freely (e.g., email → LinkedIn → call → email)
- **Contact management**: Add contacts individually, from CSV, from Reply.io B2B database (1B+ contacts), from Salesforce/HubSpot, or via API
- **Exit rules**: Auto-pause on reply, meeting booked, or custom trigger; manual pause/resume per contact
- **Sending limits**: Per-mailbox daily limits; 10 mailboxes per user on Multichannel plan; respects provider sending limits (Gmail/Outlook)
- **Reporting**: Opens, clicks, replies, bounces per step and per contact; channel efficiency dashboard; team-level analytics
- **Best practice**: Use conditional branching to create a single sequence that handles multiple scenarios (e.g., if prospect opens but doesn't reply → add LinkedIn step; if prospect clicks → fast-track to call step)

## In Hunter.io
- **Where**: Campaigns tab in Hunter.io dashboard (hunter.io/campaigns)
- **Channel support**: Email only — no phone, LinkedIn, or task steps. For multi-channel cadences, use Hunter for email finding/verification and a dedicated tool for sending.
- **Campaign flow**: Create campaign → add recipients (from lead lists, CSV, or Domain Search results) → write email steps with follow-ups → set schedule → launch
- **Sending method**: Inbox-native — sends from connected Gmail/Outlook, not a third-party server
- **Follow-ups**: Time-based automatic follow-ups that stop when the recipient replies
- **A/B testing**: Basic variant testing available for subject lines and email body
- **Review queue**: Preview and edit individual emails before send (Growth+ plans) — useful for personalizing at scale
- **Tracking**: Open and click tracking with optional custom tracking domain
- **Sender limits**: Starter = 3 senders, Growth = 15, Scale = 40, Enterprise = unlimited
- **Best practice**: Hunter Campaigns is best for simple email-only sequences (1-3 steps) at low-to-medium volume. Its strength is the tight integration with Hunter's email finding and verification — find, verify, and send all in one platform. For complex multi-channel cadences or high volume, export verified leads to a dedicated tool.

## In Seamless.AI
- **Where**: Engagement Hub within Seamless.AI dashboard
- **Channel support**: Email (built-in), calling (Connect dialer with local presence), social selling (LinkedIn integration). Basic multi-channel capability.
- **Pitch Intelligence**: AI-generated personalized talk tracks and email copy based on prospect data, company news, and intent signals. Use for Level 3-4 personalization at scale.
- **Limitation**: Seamless.AI's Engagement Hub is basic compared to dedicated tools. For complex multi-step, multi-channel cadences with A/B testing and branching logic, export Seamless.AI contacts to Salesloft, Outreach, Mailshake, or another dedicated engagement tool.
- **Best practice**: Use Seamless.AI as the data layer (find contacts, verify data, detect intent) and a dedicated engagement tool for execution. Push contacts directly via native Salesloft/Outreach/Mixmax integrations.

## In Woodpecker
- **Where**: Campaigns tab in Woodpecker dashboard (app.woodpecker.co)
- **Channel support**: Email (native), LinkedIn (add-on at €29/account — connection requests, messages, profile visits), manual tasks
- **Condition-based campaigns**: If/then branching based on prospect behavior (opened, clicked, replied) or data — different prospects follow different paths
- **Campaign depth**: Up to 16 steps per campaign — significantly more than most competitors (typically 7-10)
- **A/B testing**: Up to 5 variants per step — test subject lines, body copy, and send times simultaneously
- **Personalization**: Custom fields, snippets, dynamic content based on prospect data
- **Auto-stop**: Automatically stops sequence when prospect replies or is marked as interested
- **Inbox rotation**: Distributes sending across multiple connected email accounts automatically — maintains per-account limits while increasing volume
- **Adaptive Sending**: Automatically adjusts send pace based on provider limits and engagement signals
- **Manual tasks**: Insert non-email tasks (calls, LinkedIn messages, research) as campaign steps
- **Reporting**: Opens, clicks, replies, bounces, interested rate per step and per campaign
- **Best practice**: Use condition-based branching to create a single campaign that handles multiple engagement scenarios. Leverage the 16-step depth for longer nurture sequences that most tools can't support.

## In Closum
- **Where**: Automations section in Closum dashboard (closum.com)
- **Channel support**: Email (native), SMS (from EUR 0.014/SMS), WhatsApp (automated messaging with intelligent flows), Telegram (automated alerts, document/image sharing), Web Push (browser notifications)
- **Automation builder**: Visual no-code workflow builder — triggers, conditions, waits, and multi-channel actions in a single flow
- **Triggers**: Form submission, tag added, lifecycle stage change, date-based, custom events
- **Actions**: Send email, send SMS, send WhatsApp, send Telegram, add tag, update contact field, wait, condition branch
- **Cross-channel**: Build journeys that span email → SMS → WhatsApp → Telegram → Web Push in a single automation — strongest omnichannel capability in this list
- **Personalization**: Dynamic fields (name, company, custom attributes) across all channels
- **Plan limits**: Zero/Growth: 1 automation; Advanced: 5 automations; add-on: EUR 5/mo per 5 additional automations
- **Best practice**: Closum's strength is omnichannel journeys for opt-in audiences. For cold outbound prospecting, use a dedicated cold email tool. For warm leads and existing customers, Closum's ability to combine email + SMS + WhatsApp in a single workflow is very effective for re-engagement and nurture.

## In Minelead
- **Where**: Campaigns section in Minelead dashboard (minelead.io)
- **Channel support**: Email only (via connected Gmail accounts)
- **Multi-account sending**: Connect multiple Gmail accounts and send campaigns via Round Robin — distributes sends across accounts to maintain per-account sending limits and improve deliverability
- **Recipient management**: Select recipients from Minelead CRM (lead collections), import from CSV, or use leads discovered through Minelead's domain search and Lead Finder
- **Built-in workflow**: Find emails (domain search) → Verify (email verifier) → Save to collection → Send campaign — all in one platform without switching tools
- **Plan limits**: Campaigns available on all plans. 1 credit per email sent. Free: 25 credits/mo. Enterprise: 200K credits/mo.
- **Best practice**: Minelead campaigns are best for simple email-only outreach where the list was built using Minelead's own discovery tools. For multi-channel cadences (email + LinkedIn + calls), complex sequences with conditional branching, or high-volume cold outbound, use a dedicated sequencing tool and use Minelead as the data source.

## In GetProspect
- **Where**: Cold Email Software section in GetProspect dashboard (getprospect.com)
- **Channel support**: Email only (Gmail, Outlook, or SMTP connection)
- **Sequence builder**: Add unlimited steps with configurable delays between each. Edit subject, body, attachments, unsubscribe link per step.
- **A/B testing**: Create multiple versions of subjects, messages, and CTAs per step. Compare opens, clicks, and responses to pick winners.
- **Auto-stop**: Automatically halts remaining sequence steps when a prospect replies or clicks a specific link — prevents over-sending.
- **Sending controls**: Configurable sending limits, randomized sending intervals, timezone-aware delivery. SPF/DKIM checks before sending.
- **Personalization**: Custom fields, prospect-specific merge variables (name, company, title, etc.), saved templates.
- **Lead sourcing**: Unique advantage — search GetProspect's 200M+ B2B database, verify emails, and send sequences all in one tool. No CSV export/import needed.
- **Team collaboration**: Shared templates, campaigns, and prospect lists. Activity visibility and ownership-based filtering.
- **CRM sync**: Native integrations with HubSpot, Salesforce, Pipedrive, Zoho, Outreach, Salesloft.
- **Best practice**: GetProspect is strongest when you use the full workflow — find → verify → sequence in one platform. For multi-channel cadences (email + LinkedIn + calls), complex conditional branching, or very high volume, use a dedicated sequencing tool and use GetProspect as the data source.

## In ZoomInfo (Engage)
- **Multi-step sequences** — email + call + LinkedIn steps with automated follow-up and configurable delays
- **Email templates** — personalization with ZoomInfo data fields (title, company, industry, tech stack), A/B testing
- **Power dialer** — built-in dialer with local presence, call recording, voicemail drop. Calls are a first-class step type.
- **Task management** — manual steps (LinkedIn connect, research) auto-create tasks with due dates
- **Data advantage** — sequences can target contacts discovered via ZoomInfo search, enriched with verified emails and direct dials. No need for separate enrichment before sequencing.
- **Intent-triggered sequences** — start sequences automatically when a target account shows intent spike. Configure in OperationsOS data orchestration.
- **Analytics** — per-step open/click/reply rates, sequence-level conversion, rep activity dashboards
- **CRM sync** — activity (emails, calls, tasks) auto-logged to Salesforce, HubSpot, or Dynamics

## In Snov.io
- **Where**: Campaigns section in Snov.io dashboard (app.snov.io)
- **Channel support**: Email (native) + LinkedIn automation (add-on at $69/mo per slot — profile views, connection requests, follow-ups)
- **Sequence builder**: Multichannel campaigns combining email drip sequences and LinkedIn steps. Unlimited campaigns, follow-ups, and senders on all paid plans.
- **A/B testing**: Split-test subject lines and email body content. Sentiment analysis on replies to gauge response quality.
- **AI Email Writer**: AI-powered email composition for campaign steps — generates personalized cold emails based on prospect data.
- **Sending controls**: Email warmup with large warm-up pool (freemail support), deliverability check for inbox placement monitoring, done-for-you SPF/DKIM/DMARC setup service.
- **Personalization**: Custom fields, merge variables, prospect-specific data from Email Finder and LinkedIn enrichment.
- **Lead sourcing**: Built-in Email Finder (domain search, name+domain, LinkedIn profile enrichment) and Email Verifier (98% accuracy, 7-tier verification). Find → verify → sequence in one platform.
- **CRM sync**: Native HubSpot, Pipedrive, Salesforce, Zoho CRM, Close CRM, Freshsales, Nutshell + 5,000+ via Zapier/Make.
- **API**: REST API with 33+ endpoints — campaign analytics, progress, replies, opens, clicks, sent emails, recipient status management. OAuth 2.0 auth, 60 req/min.
- **Best practice**: Snov.io's strength is the all-in-one workflow — find emails → verify → warm up → send multichannel campaigns → track in CRM. LinkedIn automation is a paid add-on ($69/mo per slot) — factor this into cost planning for multichannel cadences.

## In 6sense (AI Email Agents)

6sense's AI Email Agents (formerly Conversational Email) automate the entire email lifecycle with AI — not templates:
1. **AI-written emails**: Persona-driven agents craft unique, personalized emails using CRM data, Signalverse intent insights, and custom brand voice prompts. Not template swaps — original content per recipient.
2. **Automated follow-up**: Agents read replies, analyze response patterns, adjust messaging, and follow up intelligently without human intervention.
3. **Qualification & handoff**: AI determines interest level and qualification status, then routes qualified opportunities to sales reps at the right moment.
4. **Buying group targeting**: Engage multiple stakeholders at the same account — AI agents coordinate outreach across the buying committee.
5. **Deliverability infrastructure**: Custom AI email agent inboxes, contact validation rules, and security features for high inbox placement.
6. **Analytics**: Track agent performance across the entire journey — response rates, meeting bookings, lead qualification rates, and pipeline attribution.
7. **Important**: AI Email Agents are a separate add-on to 6sense, not included in all paid plans. Enterprise pricing. Best for teams already on 6sense who want AI-driven outbound integrated with their ABM data.

## In Clay (Email Sequencer)

- **What it is**: Clay's native Email Sequencer for multi-step outbound email campaigns. Available on Free plan and above.
- **Enrichment-powered personalization**: Unique advantage — every email can reference data from Clay's 150+ provider waterfall enrichment and Claygent AI research. Personalize with firmographic data, tech stack, recent funding, job changes, and custom research without manual work.
- **Signal-triggered sequences**: Combine with Clay Signals to auto-enroll prospects when they change jobs, get promoted, or when their company raises funding.
- **Features**: A/B testing, send scheduling, reply detection, auto-pause on reply.
- **Limitations**: Email-only — no phone, LinkedIn, or multi-channel steps. For full multi-channel cadences, push enriched data from Clay to Outreach, Salesloft, Apollo, or Lemlist.
- **Best for**: Teams already using Clay for enrichment who want lightweight outbound without adding another tool.

## In Attio

- **What it is**: Attio's built-in email sequences for outreach within the CRM. Available on Plus plan and above.
- **CRM-native personalization**: Sequences pull directly from CRM record attributes — no data sync needed. Any attribute on a Person, Company, or custom object can be used in email templates.
- **Features**: Multi-step sequences with configurable delays, open/click tracking, auto-pause on reply, personalization merge tags from CRM data.
- **Email sync required**: Must connect Gmail or Outlook account. Sequences send from your connected email, not a separate sending infrastructure.
- **Limitations**: Email-only — no phone, LinkedIn, or SMS steps. No dedicated warmup or deliverability tools. Limited A/B testing compared to dedicated outbound platforms.
- **Best for**: Teams already using Attio as their CRM who want simple email sequences without adding another tool. For complex multi-channel cadences, use a dedicated platform (Salesloft, Lemlist, Apollo) and sync data from Attio.

## In BrandJet

- BrandJet sequences = multi-channel workflows — visual drag-and-drop builder mixing Email, LinkedIn, Twitter/X, WhatsApp, Instagram, and Telegram steps
- AI Agents reply autonomously across all channels based on configured rules — stops sequence when reply detected
- Unified inbox aggregates replies from all channels with AI sentiment categorization
- Email warmup included on all plans (unlimited) — warmup runs automatically when mailboxes are connected
- Lead discovery from 700M+ contact database with AI enrichment — import leads directly into sequences
- Social listening triggers: create sequences triggered by buyer intent signals detected across social platforms
- Artemis MCP layer: build and launch sequences via natural language prompts instead of the visual builder
- No public API — use webhooks to push sequence events to external systems (Slack, HubSpot, Attio)
- Additional social accounts cost $17-20/mo each beyond included account
- LinkedIn automation: ramp up gradually for new accounts to avoid restrictions

## In AiSDR

- AiSDR is an AI SDR that automates the entire outbound cadence — prospecting, research, message writing, sending, and follow-up
- AI-generated outreach: the AI researches each prospect individually (company news, tech stack, job postings, LinkedIn) and writes unique messages — not template swaps
- Channels: email + LinkedIn only — no phone dialer or SMS. For voice touches, pair AiSDR with Aircall or a separate dialer
- Campaign types: cold outbound, inbound follow-up, trigger-based (signal-driven), re-engagement
- AI Strategist: configure your product value prop, target pain points, and messaging context — the AI uses this to generate relevant, personalized messages
- Follow-up: AI reads replies, analyzes tone, and adjusts follow-up messaging automatically
- Sending limits: managed per-account with daily volume controls — starts low during warmup, ramps gradually
- No manual sequence building: you don't build step-by-step cadences like in Salesloft or Lemlist — the AI decides timing, channel, and message content based on engagement signals
- HubSpot/Salesforce/Pipedrive sync: all activity (sends, opens, replies, meetings) logs to CRM automatically
- Meeting booking: Calendly integration — prospects can self-schedule directly from email
- Credits: 1,200 AI messages/mo (Explore $900/mo), 4,500 (Grow $2,500/mo). Each AI-generated touchpoint consumes one credit
- Best for: teams wanting fully autonomous outbound without building and managing sequences manually. Trade-off: less control over exact message content and timing vs traditional sequence tools

## In Revenue.io (Guided Selling)

- Revenue.io's cadence module is called **Guided Selling** — available on Engage tier and above
- Salesforce-native: cadences run inside Salesforce, not a separate system. Entry/exit criteria use standard or custom Salesforce fields
- Channels: email, phone (via RingDNA dialer), SMS, LinkedIn (tracked manually)
- Dynamic Lead Prioritization: AI surfaces highest-value prospects to work first — no manual list reordering
- Quick Actions: one-click task execution from the cadence view
- Opportunity playbooks: stage-specific cadences that trigger based on deal progression
- Re-engagement sequences: automated sequences for leads that went cold
- Task management caveat: Guided Selling creates its own tasks separate from native Salesforce tasks. Pick one system and suppress the other — running both confuses reps
- Email personalization: merge fields from Salesforce data, but no AI-generated copy (unlike AiSDR or Amplemarket)
- No A/B testing documented for cadence steps — test manually by running parallel cadences
- Best for: Salesforce-native teams wanting cadences, dialer, and coaching in one tool without stitching together Salesloft + Gong. Trade-off: less mature cadence builder than Salesloft Rhythm or Outreach, no multi-CRM support

## In Nooks

- **AI Sequencing module**: Multi-channel sequences combining calls, emails, SMS, and LinkedIn social touches in a unified workspace
- **Dynamic personalization**: AI auto-researches prospects and drafts hyper-personalized messages using real-time buyer signals (CRM data, job changes, funding events, competitor usage)
- **Signal-based triggers**: Sequences automatically adjust based on account activity — engagement signals can skip, delay, or accelerate sequence steps
- **Agentic optimization**: AI continuously optimizes send times, channel mix, and messaging based on performance data across the team
- **Call-first cadence pattern**: Nooks is built around the dialer, so sequences typically lead with calls (parallel or power dial) followed by email/SMS/social touches
- **CRM sync**: Activities auto-log to Salesforce, HubSpot, or Pipedrive. Call outcomes, recordings, and notes flow back to CRM contact records
- **SEP integration**: Pulls call tasks from Outreach, Salesloft, or Apollo sequences into the Nooks dialer, then logs results back
- **No standalone email warmup**: Nooks focuses on phone-first outbound. For email warmup, use a dedicated tool (Smartlead, Lemlist, etc.)
- **Best for**: SDR teams running high-volume outbound where cold calling is the primary channel. The parallel dialer is the core — sequencing wraps around it. Teams that are email-first should consider Outreach, Salesloft, or Apollo instead

## In Orum

- **Phone-only dialer**: Orum is a dedicated calling platform — no email sequencing, SMS, or LinkedIn automation. All multi-channel cadence steps must be handled by a separate SEP (Outreach, Salesloft, Apollo)
- **SEP integration**: Pulls call tasks from Outreach, Salesloft, or Apollo sequences. Call outcomes, recordings, and notes sync back automatically
- **Parallel dialing**: Up to 5 lines (Launch) or 10 lines (Ascend). AI detects live answers, auto-skips voicemails and phone trees
- **Power dialing**: Single-line mode for high-value prospects where connection quality matters more than volume
- **CRM sync**: Activities auto-log to Salesforce or HubSpot — outcome, duration, recording, notes
- **Voicemail sequencing**: Automated voicemail follow-up sequences (Ascend tier only)
- **No email warmup or deliverability**: Orum handles phone only. For email warmup, use your SEP or a dedicated tool
- **Best for**: Teams that already have Outreach/Salesloft for email sequences and want a dedicated, best-in-class dialing layer. Not suited for teams wanting a single tool for all channels — consider Nooks instead
