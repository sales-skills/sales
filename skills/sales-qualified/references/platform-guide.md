# Qualified Platform Reference

## Platform overview

Qualified is an enterprise agentic marketing platform built natively on Salesforce. Its flagship product is **Piper**, an AI SDR Agent that engages inbound website visitors in real time via chat, voice, and video, qualifies them using Salesforce CRM data, books meetings, and routes high-intent buyers to sales reps. Founded by Kraig Swensrud (ex-Salesforce CMO) and Sean Whiteley. Salesforce has signed a definitive agreement to acquire Qualified.

**Target audience**: Enterprise B2B SaaS companies with Salesforce CRM, marketing teams, demand gen, and sales development organizations.

## Key modules

### Piper AI SDR Agent

The core product — an AI SDR that works 24/7 across multiple channels:

- **Piper Conversations**: Real-time website engagement using text chat, voice, and video. Greets visitors, qualifies based on Salesforce data, routes to human reps when appropriate.
- **Piper Email**: Automated email nurture and follow-up messaging for inbound leads. Sends personalized follow-ups after website visits.
- **Piper Meetings**: Instant meeting scheduling — books demos and calls directly from chat conversations based on rep calendar availability.
- **Piper Offers**: Personalized content delivery — serves relevant case studies, whitepapers, or product info based on visitor profile and behavior.
- **Piper for Slack**: Sends real-time alerts to Slack when high-value visitors arrive, enables two-way conversation management from Slack.

### Qualified Signals

Buyer intent data that identifies which accounts are actively researching your product category:

- First-party signals from website engagement (pages visited, time on site, return visits)
- Third-party intent data via integrations (Bombora for topic-level research intent)
- Account-level scoring that combines multiple signal sources
- Trend detection — identifies accounts with increasing engagement over time

### Routing & Alerts

Sophisticated lead routing built on Salesforce data:

- **Account-based routing**: Matches visitors to existing Salesforce accounts and routes to the account owner
- **Territory-based routing**: Routes by geography, segment, or vertical using Salesforce assignment rules
- **Round-robin fallback**: Distributes unmatched visitors evenly across available reps
- **Real-time alerts**: Browser notifications, email alerts, Slack notifications, Microsoft Teams messages when target accounts visit
- **Mobile support**: Reps can engage visitors from mobile devices

### Segments & Live Streams

- **Segments**: Define visitor groups using Salesforce data (account tier, industry, revenue, existing opportunity status, ABM list membership)
- **Live Streams**: Real-time view of all website visitors with Salesforce context — see who's on your site right now, what company they're from, and their Salesforce history

## Pricing and limits

Qualified does not publish pricing. Three main tiers:

| Tier | Estimated annual cost | Key features |
|---|---|---|
| **Growth** | ~$42,000/yr | Piper Conversations, basic routing, Salesforce integration |
| **Premier** | ~$68,000/yr (list) | + Piper Email, Piper Meetings, Signals, advanced routing |
| **Enterprise/Ultimate** | $100,000+/yr | + Piper Offers, custom integrations, dedicated support, advanced analytics |

**Pricing factors**: Website traffic volume (more conversations = higher cost), number of user seats, Salesforce complexity, premium add-ons.

**Negotiation**: Most companies pay $40K-$50K/yr after negotiation for Premier. Implementation fees and premium support add to total cost.

**No free tier or self-serve plan.** All plans require a demo and custom quote.

## Integrations

### CRM (required)
- **Salesforce** (native, required) — Connected app, API user, managed package. Deep sync: Leads, Contacts, Accounts, Opportunities. Real-time bidirectional sync.

### Marketing Automation
- **Salesforce Pardot / MCAE** — Qualifies leads based on campaigns, landing pages, lead scoring
- **HubSpot Marketing** — Identifies visitors using HubSpot campaign data (CRM must still be Salesforce)
- **Marketo Engage** — Converts leads using Marketo profiles and engagement data
- **Eloqua** — Greets leads based on lead scoring, email campaigns, landing pages

### Sales Engagement
- **Outreach** — Welcomes visitors from Outreach sequences with custom greetings
- **Salesloft** — Engages prospects from Salesloft Cadences with real-time alerts
- **Gong** — Generates pipeline by greeting buyers from Gong Engage emails

### Account-Based Marketing (ABM)
- **6sense** — Identifies and engages target accounts with personalized conversations using 6sense intent data
- **Demandbase** — Routes target account buyers to dedicated sales reps using Demandbase account lists

### Account-Based Advertising
- **LinkedIn Ads** — Targets accounts with personalized ads, contextual chat referencing clicked campaigns
- **Google Ads** — Contextual conversation matching for SEM visitors
- **Facebook Ads** — Cross-channel engagement with Facebook campaign visitors
- **Metadata** — Serves personalized ads using Qualified Signals intent data

### Data Enrichment
- **Clearbit** — Enriches visitor profiles using reverse IP technology and company data
- **ZoomInfo** — Surfaces visitor details via ZoomInfo Enterprise and WebSights APIs

### Research Intent Data
- **Bombora** — Reveals account browsing behavior across 5,000+ sources and 10,000+ topics

### Alerts & Notifications
- **Slack** — Real-time alerts, two-way Piper conversation management
- **Microsoft Teams** — Customized Salesforce visitor insights pushed to team channels
- **Google Chrome** — Browser alerts when qualified visitors arrive
- **Gmail** — Email stakeholders with Salesforce visitor data

### Meetings & Calendars
- **Google Calendar** — Books meetings based on rep availability
- **Microsoft Outlook (Office 365)** — Automatic availability matching for scheduling

## Data model

Qualified operates as a Salesforce connected app. Key data flow:

- **Visitors** → identified via IP, cookies, UTM, email match, Clearbit/ZoomInfo enrichment
- **Conversations** → logged as Activities on the Lead/Contact record in Salesforce
- **Leads** → created or updated in Salesforce when Piper qualifies a visitor
- **Contacts** → matched to existing Contact records on known accounts
- **Accounts** → matched for routing decisions (account owner, territory, ABM list)
- **Opportunities** → can trigger different Piper behavior for existing opportunity contacts

### Reporting API

Qualified offers a Reporting API at `qualified.com/api` for pulling conversation and pipeline data into data warehouses or CDPs. Authentication and endpoint details require contacting Qualified — no public API reference is available.

## Implementation workflow

Typical 4-8 week deployment:

1. **Week 1-2: Salesforce setup**
   - Install Qualified managed package from AppExchange
   - Configure API user and connected app permissions
   - Map Salesforce fields (Lead, Contact, Account) to Qualified
   - Define which objects Qualified can create/update

2. **Week 2-3: Routing & segments**
   - Define visitor segments using Salesforce data (target accounts, industries, company size)
   - Configure routing rules (account owner → territory → round-robin)
   - Set up real-time alerts (Slack, email, browser, mobile)
   - Define business hours and offline behavior

3. **Week 3-5: Piper training**
   - Upload product documentation, FAQs, case studies to Piper's knowledge base
   - Configure persona settings (brand voice, qualification criteria, conversation style)
   - Set up qualification flows (what questions to ask, how to score responses)
   - Build meeting booking flow with calendar integration

4. **Week 5-6: Testing**
   - Test with internal visitors first (employees visiting the site)
   - Test routing with known accounts from Salesforce
   - Test Piper responses for common visitor scenarios
   - Test Salesforce record creation/update

5. **Week 6-8: Rollout & optimization**
   - Go live on high-intent pages first (pricing, demo request, product pages)
   - Monitor conversation quality and routing accuracy
   - Tune Piper's qualification criteria based on real data
   - Expand to additional pages as confidence grows

## Key differentiators

- **Salesforce-native**: Built by ex-Salesforce team, deepest Salesforce integration in the category
- **AI SDR (Piper)**: Not just a chatbot — an AI agent that qualifies, routes, books meetings, and follows up
- **Signals**: First-party + third-party buyer intent in one platform
- **Real-time routing**: Uses live Salesforce data for instant account matching and rep assignment
- **Enterprise focus**: Built for complex Salesforce orgs with territory management, named accounts, and multi-stakeholder deals

## Key limitations

- **Salesforce-only**: No HubSpot, Pipedrive, or other CRM support
- **Inbound-only**: No outbound sequences, cold email, or LinkedIn automation
- **Enterprise pricing**: $42K-$100K+/yr makes it inaccessible for SMBs
- **No public API docs**: Reporting API exists but documentation requires contacting Qualified
- **Setup complexity**: 4-8 week implementation, significant Salesforce admin involvement required
