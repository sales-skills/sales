# Zendesk Platform Reference

## Platform overview

Zendesk is an enterprise-grade customer and employee service platform used by 100,000+ companies. It provides ticketing, knowledge base, live chat, voice, CRM, omnichannel messaging, AI agents, analytics, and a marketplace of 1,300+ apps. Positioned as the market leader for mid-market to enterprise customer service, competing primarily with Freshdesk (budget), Intercom (conversational), and Salesforce Service Cloud (enterprise CRM-native).

## Key modules

### Support (Ticketing)
- **Tickets**: Email, web form, social, phone — all channels create tickets
- **Triggers**: Event-based automation — fire on ticket create/update (e.g., assign to group when tag matches)
- **Automations**: Time-based rules — hourly scan checks conditions (e.g., close ticket after 72 hours of inactivity)
- **Macros**: Pre-built response templates agents apply with one click
- **Views**: Filtered ticket lists (e.g., "My open tickets", "Urgent unassigned")
- **Custom fields**: Add org-specific data to tickets, users, organizations
- **SLAs**: Service level agreements with first reply, next reply, and periodic update targets
- **Skills-based routing**: Route tickets to agents based on language, product expertise, etc. (Professional+)
- **Satisfaction ratings (CSAT)**: Built-in surveys sent after ticket resolution

### Guide (Help Center)
- **Knowledge base**: Public and internal articles organized by categories/sections
- **Community forums**: User discussion forums (Suite plans only)
- **AI search**: Generative search powered by knowledge base content
- **Multi-brand**: Up to 300 separate help centers (Enterprise)
- **Content Cues**: AI suggests which articles to create or update based on ticket patterns
- **Article versioning**: Track changes to knowledge base articles
- **Multilingual support**: Article translations (Professional+)

### AI Agents
- **Automated resolution**: AI handles customer queries end-to-end using knowledge base and configured intents
- **Generative replies**: AI generates responses from connected knowledge sources
- **Copilot**: Real-time agent assist — suggests responses, surfaces relevant articles, auto-fills ticket fields
- **Intent classification**: AI categorizes tickets by topic for routing and analytics
- **Note**: Most AI features require separate add-on purchases (~$50/agent/month each for Advanced AI and Copilot)

### Chat (Live Chat)
- **Web widget**: Embeddable chat widget for websites
- **Proactive messaging**: Trigger chat based on visitor behavior (page, time on site, URL)
- **Chat routing**: Round-robin, broadcast, or skills-based assignment
- **Shortcuts**: Pre-built responses for common chat interactions
- **Chat triggers**: Automated greetings based on conditions
- **Operating hours**: Online/offline scheduling with queue management

### Talk (Voice)
- **IVR**: Interactive voice response with multi-level menus
- **Call recording**: Automatic recording with consent options
- **Voicemail**: Automated transcription and ticket creation
- **Callback**: Queue callback requests during high volume
- **Routing**: Ring groups, overflow, and failover rules
- **Warm transfer**: Agent-to-agent transfer with context

### Sell (Sales CRM)
- **Pipeline management**: Customizable deal stages and pipeline views
- **Lead management**: Lead capture, scoring, and distribution
- **Email integration**: Gmail/Outlook sync with tracking
- **Task management**: Follow-up tasks with reminders
- **Smart Lists**: Dynamic contact/lead lists based on filters
- **Sales automation**: Triggers for email sequences, task creation, field updates

### Messaging (Omnichannel)
- **Unified inbox**: WhatsApp, Facebook Messenger, Instagram DM, SMS, Twitter DM in one view
- **Conversation API (Sunshine Conversations)**: Unify messaging channels programmatically
- **Proactive messaging**: Outbound messages via WhatsApp templates
- **Rich messaging**: Carousels, quick replies, forms in messaging channels
- **Bot integration**: AI agents work across all messaging channels

### Explore (Analytics)
- **Pre-built dashboards**: Ticket, chat, talk, and agent performance dashboards
- **Custom reports**: Build reports with drag-and-drop (Professional+)
- **Real-time dashboards**: Live queue and agent status monitoring (Professional+)
- **Scheduled exports**: Automated report delivery via email
- **Data export**: CSV/Excel export of report data

### Marketplace
- **1,300+ apps**: CRM connectors, productivity, analytics, e-commerce, communication
- **Top integrations**: Salesforce (bi-directional), HubSpot, Shopify, Jira, Slack, Zoom, Atlassian, PagerDuty
- **App framework**: Build custom apps using Zendesk Apps Framework (ZAF)

## Pricing and limits

### Customer Service Suite Plans (per agent/month, billed annually)

| Plan | Price | Key features |
|---|---|---|
| Support Team | $19 | Email + social ticketing, basic workflows, basic reporting |
| Suite Team | $55 | Omnichannel (email, chat, phone, social), 1 Help Center, essential AI agents, generative replies |
| Suite Growth | $89 | Multiple ticket forms, up to 5 Help Centers, SLAs, CSAT ratings |
| Suite Professional | $115 | Real-time dashboards, skills-based routing, HIPAA, custom analytics, multilingual content, sandbox |
| Suite Enterprise | $169 | Up to 300 Help Centers, custom roles, advanced data protection, audit logs, dynamic workspaces |

### Bundled Copilot Plans
| Plan | Price |
|---|---|
| Suite Professional + Copilot | $155 |
| Suite Enterprise + Copilot | $209 |

### Add-ons (per agent/month)
| Add-on | Price | What it does |
|---|---|---|
| Advanced AI Agents | ~$50 | Enhanced automated resolution, advanced intent detection |
| Copilot | ~$50 | Real-time agent assist, response suggestions, auto-triage |
| Quality Assurance (QA) | ~$35 | AI-powered QA scoring, conversation review |
| Workforce Management (WFM) | ~$25 | Forecasting, scheduling, adherence tracking |
| WFE Bundle (QA + WFM) | $50 | Both QA and WFM combined |
| Advanced Data Privacy | $50 | Enhanced encryption, data masking, access logs |
| Contact Center | $50 | Full CCaaS capabilities |

### Employee Service Suite Plans (per agent/month)
- Team: $29 | Growth: $59 | Professional: $115 | Enterprise: Custom

### Rate Limits by Plan
| Plan | Requests/minute |
|---|---|
| Team | 200 |
| Growth | 400 |
| Professional | 400 |
| Enterprise | 700 |
| Enterprise Plus / High Volume Add-on | 2500 |

## Integrations

### Native connectors
- **Salesforce**: Bi-directional sync — Salesforce Accounts/Contacts/Leads ↔ Zendesk Organizations/Users. Ticket data visible in Salesforce. Real-time sync.
- **HubSpot**: View ticket info and CSAT in HubSpot. Create lists/workflows based on ticket tags.
- **Shopify**: View customer orders in tickets. Process refunds/cancellations from Zendesk.
- **Jira**: Create Jira issues from Zendesk tickets. Bi-directional status sync.
- **Slack**: Ticket notifications, create tickets from Slack messages, collaborate on tickets in channels.

### Marketplace
- 1,300+ apps across categories: CRM, e-commerce, analytics, productivity, communication, surveys
- Free and paid apps available
- Custom app development via Zendesk Apps Framework (ZAF)

### API & webhooks
- REST API for all modules
- Webhooks for ticket events
- Zendesk Integration Services (ZIS) for complex integrations
- Postman workspace available

## Data model

### Core objects
- **Tickets**: Central object. Fields: subject, description, status (new/open/pending/hold/solved/closed), priority, type, assignee, group, tags, custom fields
- **Users**: Agents, admins, and end-users. Fields: name, email, phone, organization, role, tags
- **Organizations**: Group end-users by company. Fields: name, domain, tags, custom fields
- **Groups**: Organize agents by team/function for routing
- **Ticket Forms**: Different field layouts for different ticket types (Growth+)
- **Custom Objects**: Create custom data entities linked to tickets/users (Enterprise)

### Key relationships
- Tickets belong to a Requester (end-user) and optionally an Organization
- Tickets are assigned to an Assignee (agent) within a Group
- Organizations can auto-associate users by email domain
- Custom Objects can be linked via lookup relationship fields

## Workflow setup

### Setting up ticket routing
1. Create Groups for each team (e.g., Billing, Technical, Enterprise)
2. Add agents to appropriate groups
3. Create Triggers to route based on: ticket form, subject keywords, requester organization, custom field values, tags
4. Set trigger order — first matching trigger wins
5. Enable skills-based routing (Professional+) for language/product expertise matching

### Setting up SLAs
1. Go to Admin > Business rules > Service level agreements
2. Create policies in priority order (most specific first — first match wins)
3. Set targets for each metric: first reply time, next reply time, periodic update, requester wait time
4. Create Business Hours Schedules with correct timezone
5. Apply policies to conditions: priority, organization, ticket form, tags

### Setting up AI Agents
1. Connect knowledge sources (Help Center articles, external URLs)
2. Configure intents and training phrases for common topics
3. Set up handoff rules — when to escalate to human agent
4. Test with sample conversations and review logs
5. Monitor automated resolution rate and refine intents based on misclassifications

## Deep dives

### Salesforce integration
- Bi-directional sync: Accounts ↔ Organizations, Contacts/Leads ↔ Users
- Ticket sidebar in Salesforce shows open/recent tickets
- Can create Salesforce cases from Zendesk tickets
- Sync runs in background — can pause without notification (monitor health)
- Counts against both Zendesk and Salesforce API limits
- OAuth authentication — token can expire, requiring re-auth

### Cost optimization strategies
- **Audit add-on usage**: Check if Advanced AI, Copilot, QA, WFM are delivering measurable ROI
- **Right-size your plan**: Many teams on Enterprise only use Professional-level features. Check: do you use custom roles, 300+ help centers, dynamic workspaces, sandbox?
- **Light agents**: Use light agent licenses ($0) for non-support staff who only need to view and add internal notes — IT, engineering, product managers
- **Consolidate tools**: Zendesk Suite replaces standalone tools for ticketing, chat, phone, knowledge base. Check for redundant tool subscriptions.
- **Monitor per-agent costs**: Track total cost per agent including all add-ons. If exceeding $200/agent, re-evaluate whether each add-on is essential.
