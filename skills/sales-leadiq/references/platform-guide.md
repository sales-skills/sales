# LeadIQ Platform Reference

## Platform overview

LeadIQ is a Chrome extension-first B2B prospecting platform that helps SDRs and BDRs capture contact data from LinkedIn, enrich CRM records, track champion job changes, and write personalized outreach with AI. Founded in San Francisco, SOC 2 Type II certified, GDPR-compliant. Target audience: sales development teams at mid-market and enterprise companies.

## Key modules

### Prospector (Chrome Extension)
One-click contact capture from LinkedIn profiles, Sales Navigator, and other supported sites. Reveals email addresses and phone numbers, then pushes directly to CRM or sales engagement platforms. Works as a browser sidebar overlay.

### Champion Tracking
Monitors past contacts for job changes and sends real-time alerts when champions move to new companies. Enables reps to reconnect with warm contacts who already know the product. Unique differentiator — most enrichment tools don't track historical relationships.

### Scribe (AI Outreach Writer)
AI-powered email personalization engine. Generates first drafts of personalized cold emails based on prospect data. Users report needing 30-50% editing — treat as a starting point, not a finished email. Available on all paid plans.

### Lando Agent
Conversational AI interface that combines first-party CRM data with third-party intelligence. Accessible in the browser. Answers questions about prospects and accounts using both your data and LeadIQ's database.

### AI Account Prospecting (Enterprise only)
Automatically surfaces high-fit accounts based on your ICP definition and identifies key decision-makers. Requires Enterprise plan — Pro users must prospect manually through the Chrome Extension.

### CRM Enrichment
- **Salesforce**: Native Managed Package — direct integration, field mapping, duplicate detection via email/name/company domain matching. Requires Salesforce Professional or above.
- **HubSpot**: Connects through Workato middleware. Creates new contacts/companies when no match exists, updates existing records. Custom field mapping available.

## Pricing and limits

### Plans
| Plan | Price | Users | Credits/mo | Key limits |
|---|---|---|---|---|
| Free | $0 | 1 | 50 | Testing only — 50 credits is ~4 full contacts |
| Pro | ~$200/mo | Up to 5 | 200-6,750 (slider) | Annual billing saves ~25%. No AI Account Prospecting |
| Enterprise | Custom | Custom | Custom | Annual only. Adds AI Account Prospecting, governance, CSV enrichment, analytics |

### Credit economics
| Action | Credits |
|---|---|
| Email reveal | 1 |
| Phone number reveal | 10 |
| Email + phone | 11 |
| Account enrichment | 3 |

Credits do **not** roll over. Monthly plans expire monthly; annual plans expire at year-end.

### Rate limits (API)
- Free: 10 requests/minute
- Paid: 60 requests/minute

## Integrations

### Native
- **Salesforce**: Managed Package with bi-directional sync, field mapping, duplicate detection
- **Salesloft**: Direct push from Chrome Extension
- **Outreach**: Direct push from Chrome Extension
- **Gong**: Contact enrichment from call recordings
- **Groove by Clari**: Direct push

### Via middleware
- **HubSpot**: Through Workato
- **Zapier**: Triggers and actions for workflow automation
- **Workato**: Advanced integration recipes
- **Clay**: Data enrichment cascading

### Other integrations
- **Chili Piper**: Meeting scheduling from enriched contacts
- **Nooks**: Parallel dialer integration
- **Orum**: Parallel dialer integration

## Data model (API)

### Key objects
- **Person**: name, LinkedIn URL, current positions (company, title, dates), verified emails (status: verified/unverified/catchAll), phone numbers (type: mobile/direct/work), education, social profiles
- **Company**: name, domain, LinkedIn URL, industry, employee count, revenue range, technology stack, funding information, hierarchy
- **Position**: title, seniority level, department, start/end dates, company association

### Search dimensions
People can be searched/filtered by: job title, seniority level, role/function, company size, geography, technologies used, funding status, industry classification.

## Workflow setup

### Workflow 1: LinkedIn prospecting (most common)
1. Install Chrome Extension from chrome.google.com/webstore
2. Connect CRM (Salesforce managed package or HubSpot via Workato)
3. Navigate to LinkedIn profile or Sales Navigator search
4. Click LeadIQ sidebar to reveal contact data
5. One-click push to CRM or sales engagement tool
6. Use Scribe to draft personalized outreach

### Workflow 2: Champion tracking
1. Import existing contacts (past closed-won champions, former users)
2. LeadIQ monitors job changes automatically
3. Receive alerts when champions change roles
4. Review new company fit against ICP
5. Reach out with warm, personalized message via Scribe

### Workflow 3: API enrichment
1. Generate API key: Settings → API Keys
2. Use GraphQL endpoint: `https://api.leadiq.com/graphql`
3. Authenticate via HTTP Basic (API key as username, empty password)
4. Query `searchPeople` or `searchCompany` for individual lookups
5. Use `flatAdvancedSearch` or `groupedAdvancedSearch` for bulk prospecting
6. Submit corrections via `submitPersonFeedback` mutation

## Deep dives

### Salesforce integration troubleshooting
- Requires read/write permissions on all fields in Lead, Contact, and Account objects
- The stock Website field must be enabled on Lead, Contact, and Account — critical for duplicate detection
- If connection fails: check Setup → Apps → Connected Apps → OAuth Usage → unblock LeadIQ
- IP restrictions may block API calls — relax IP restrictions for LeadIQ or whitelist their IPs
- After any field/value changes in SFDC, click "Resync Team" to propagate changes to all users' LeadIQ instances

### Credit optimization strategy
- **Email-first approach**: Capture emails (1 credit) for all prospects. Only reveal phone numbers (10 credits) for high-priority contacts who haven't responded to email
- **Account screening**: Use account enrichment (3 credits) to validate company fit before spending credits on individual contacts
- **Batch planning**: With 200 credits/month on Pro, you get ~180 emails OR ~18 full contacts OR ~66 account checks. Plan around your weekly prospecting volume
- **Champion tracking ROI**: Job change alerts don't consume credits for detection — only when you reveal updated contact info. High-value, low-credit-cost feature

### Data quality expectations
- Email accuracy: Generally reliable, but pattern-guessing occurs (firstname.lastname@domain) for some contacts. Validate before large campaigns
- Phone accuracy: Known weakness — #1 user complaint. Mobile numbers may be personal cells, outdated, or wrong person entirely. Always cross-validate high-priority numbers
- Company data: Strong for US companies, weaker for EMEA. Technology stack and funding data available for enrichment
- Freshness: Data refreshes vary by contact profile prominence. Executive-level records update more frequently than individual contributors

### MCP Server
LeadIQ offers access via Model Context Protocol (MCP) — connects AI assistants, tools, and agents to LeadIQ's data. Check LeadIQ's developer docs for MCP setup instructions.
