# CRM Platform Comparison Reference

Detailed comparison of CRM platforms for startups, organized by platform. Best-effort from research — pricing and features change frequently.

## Table of Contents

- [Decision Matrix](#decision-matrix)
- [Attio](#attio)
- [HubSpot](#hubspot)
- [Salesforce](#salesforce)
- [Folk](#folk)
- [Pipedrive](#pipedrive)
- [Close](#close)
- [Zoho CRM](#zoho-crm)
- [Salesflare](#salesflare)
- [Spreadsheets](#spreadsheets)

## Decision Matrix

| Criteria | Attio | HubSpot | Salesforce | Folk | Pipedrive | Close | Zoho |
|----------|-------|---------|------------|------|-----------|-------|------|
| **Best for** | Data-flexible startups | Inbound + marketing | Enterprise, complex orgs | Relationship-focused | Pipeline-focused sales | High-velocity outbound | Budget-conscious |
| **Team size sweet spot** | 3-50 | 1-500+ | 50-10,000+ | 1-20 | 3-50 | 5-50 | 3-100 |
| **Free tier** | Yes (3 users) | Yes (unlimited users) | No (14-day trial) | Yes (limited) | No (14-day trial) | No (14-day trial) | Yes (3 users) |
| **Data model flexibility** | Excellent (custom objects) | Rigid (fixed objects) | Excellent (but complex) | Tag/list-based | Fixed pipeline | Fixed pipeline | Good (custom modules) |
| **Marketing built-in** | No | Yes (strong) | Via Pardot/MCAE | Basic outreach | No | No | Yes (basic) |
| **API quality** | Excellent (REST, MCP) | Good (REST, GraphQL) | Extensive (SOAP, REST) | Basic | Good (REST) | Good (REST) | Good (REST) |
| **Learning curve** | Medium | Low-Medium | High | Low | Low | Low | Medium |
| **Automation** | Strong (workflow builder) | Strong (paid tiers) | Very strong | Basic | Good (paid tiers) | Good | Good |

## Attio

**Positioning**: AI-native CRM with a flexible, relational data model. Built for startups that want to structure their CRM like a product.

**Strengths**:
- Custom objects and relationships — model your business the way it actually works (investors, fundraising rounds, product feedback)
- Email and calendar sync auto-populates records from inbox history
- API-first with REST API, webhooks, and MCP server
- Modern UX — feels like a productivity tool, not enterprise software
- AI features (Ask Attio) for natural language queries
- Built-in enrichment from company and contact data

**Weaknesses**:
- No native marketing automation — need third-party tools
- Smaller integration ecosystem than HubSpot
- Steeper learning curve than simpler CRMs due to data model flexibility
- Teams that don't need custom objects are overserved

**Pricing** (best-effort):
- Free: 3 users, 50K records, 3 custom objects, 250 automation credits/mo
- Plus ($29/user/mo annual): Unlimited seats, 250K records, 5 objects, 1,500 credits
- Pro ($69/user/mo annual): Advanced automation, reporting, 10 objects
- Enterprise: Custom

**Best for**: Startups that want flexibility, plan to use the API, and don't need built-in marketing. Teams between seed stage and ~$5M ARR who want a modern CRM they won't outgrow quickly.

**Existing skill**: `/sales-attio` — full platform help including custom objects, pipelines, automations, API

## HubSpot

**Positioning**: All-in-one CRM + marketing + sales + service platform. The default choice for inbound-led startups.

**Strengths**:
- Genuinely useful free tier — unlimited users, contacts, visual pipeline, email logging, live chat
- Marketing Hub integration — email campaigns, forms, landing pages, SEO tools
- Huge ecosystem — 1,500+ app integrations
- HubSpot for Startups program — up to 90% off for eligible startups
- Excellent onboarding and documentation
- Large hiring pool — many marketers and sales ops people know HubSpot

**Weaknesses**:
- Steep pricing jump from free to paid (Starter $15/mo → Professional $800+/mo for Marketing Hub)
- Rigid data model — fixed contacts, companies, deals, tickets objects
- Feature gating pushes you to higher tiers quickly
- Gets expensive at scale (per-contact pricing for Marketing Hub)
- Vendor lock-in risk — workflows and automation logic don't export

**Pricing** (best-effort):
- Free: Unlimited users, basic CRM features
- Starter ($15/user/mo): Remove branding, simple automation, email sequences
- Professional ($800+/mo flat for Marketing Hub; $90/user/mo for Sales Hub): Full automation, custom reporting, sequences
- Enterprise ($3,600+/mo flat): Custom objects, advanced permissions, predictive lead scoring

**Best for**: Inbound-led startups that want marketing+sales in one platform. Teams that value ease of use and a large ecosystem over flexibility.

## Salesforce

**Positioning**: The enterprise CRM standard. Massive ecosystem, infinite customization, but significant complexity.

**Strengths**:
- Unlimited customization (custom objects, Apex code, Lightning components)
- Largest app marketplace (AppExchange — 7,000+ apps)
- Industry-specific solutions (Financial Services Cloud, Health Cloud, etc.)
- AI features (Einstein) with predictive scoring and conversation intelligence
- Most third-party tools integrate with Salesforce first
- Scales to thousands of users

**Weaknesses**:
- Requires a dedicated admin (often full-time) for meaningful customization
- Steep learning curve — training budget needed
- Expensive once you add modules ($25 → $100 → $165 → $330/user/mo)
- Slow to implement — 2-6 months for proper setup
- Rigid if you don't customize; overwhelming if you do
- Contract lock-in with annual commitments

**Pricing** (best-effort):
- Starter Suite ($25/user/mo): Basic CRM, 1 email/contact/day
- Professional ($100/user/mo): Pipeline management, forecasting
- Enterprise ($165/user/mo): Advanced customization, AI
- Unlimited ($330/user/mo): Full platform access

**Best for**: Teams past $5M ARR with 50+ employees that need complex workflows, multiple departments on one system, and have budget for a Salesforce admin. Not for early-stage startups.

## Folk

**Positioning**: Relationship-first CRM for small teams. Lightweight, fast to deploy, built around tags and lists.

**Strengths**:
- One-click LinkedIn import (Chrome extension)
- Tag-based organization — flexible, no rigid pipeline required
- Built-in AI for drafting icebreakers and follow-ups
- Native WhatsApp integration
- Mail merge with personalization variables
- Very fast onboarding (minutes, not days)
- Designed for non-salespeople (founders, BD, investors, recruiters)

**Weaknesses**:
- Limited automation compared to Attio or HubSpot
- Monthly message limits on outreach
- Not designed for large sales teams or complex deal stages
- No built-in phone/dialer
- Limited reporting and analytics
- Teams outgrow it around 20-50 people

**Pricing** (best-effort):
- Free: Limited contacts and features
- Standard ($24/user/mo annual): Full CRM, 500 messages/mo
- Premium ($44/user/mo annual): 1,000 messages/mo, advanced features
- Custom: Enterprise pricing

**Best for**: Solo founders, small teams under 10, relationship-heavy businesses (VCs, agencies, consultants, recruiters). Great as a first CRM for non-technical teams who find traditional CRMs intimidating.

## Pipedrive

**Positioning**: Pipeline-first CRM built by salespeople for salespeople. Simple, visual, activity-driven.

**Strengths**:
- Drag-and-drop pipeline — easiest visual deal management
- Activity-based selling — focuses reps on next actions
- Fast setup — productive in hours, not days
- AI sales assistant suggests next steps
- Good mobile app for field sales
- Affordable entry point

**Weaknesses**:
- No marketing automation
- Limited customization compared to Attio or Salesforce
- Reporting is basic on lower tiers
- No free tier (14-day trial only)
- Can feel limiting for complex B2B sales with multiple stakeholders

**Pricing** (best-effort):
- Essential ($14/user/mo annual): Basic pipeline, 3K deals
- Advanced ($29/user/mo annual): Email sync, automations
- Professional ($49/user/mo annual): Revenue forecasting, AI
- Power ($64/user/mo annual): Project planning, phone support
- Enterprise ($99/user/mo annual): Custom objects, advanced permissions

**Best for**: Outbound-heavy small teams (3-30 people) who want a simple, visual CRM focused on deal progression. SDR teams doing high-volume prospecting.

## Close

**Positioning**: CRM built for high-velocity inside sales. Calling, emailing, and sequencing in one tool.

**Strengths**:
- Built-in power dialer and VoIP — no separate calling tool needed
- Email sequences and templates native to the CRM
- Activity tracking and sales reporting
- Fast search and bulk actions
- Smart Views for dynamic lead lists
- Good for founder-led sales with heavy phone outreach

**Weaknesses**:
- No marketing automation or inbound tools
- Smaller integration ecosystem
- Not designed for field sales or complex enterprise deals
- Limited customization of the data model
- Phone features are US/Canada focused

**Pricing** (best-effort):
- Startup ($49/user/mo annual): Core CRM + calling
- Professional ($99/user/mo annual): Sequences, custom objects
- Enterprise ($139/user/mo annual): Predictive dialer, call coaching

**Best for**: Inside sales teams doing high-volume cold calling. Startups with SDRs running call-heavy outbound sequences. Not for teams that need marketing or complex enterprise deal management.

## Zoho CRM

**Positioning**: Most features per dollar. Part of a massive suite (40+ Zoho apps). Budget-friendly with serious depth.

**Strengths**:
- Very affordable — competitive with enterprise features at mid-market pricing
- Zoho One bundle ($45/user/mo for 45+ apps including CRM, email, analytics, etc.)
- Zia AI assistant for predictions and recommendations
- Custom modules and fields
- Blueprint process management (guided selling)
- Strong for businesses also using Zoho Books, Zoho Desk, Zoho Campaigns

**Weaknesses**:
- UI feels dated compared to Attio or HubSpot
- Overwhelming breadth — too many options for small teams
- Integration ecosystem outside Zoho is smaller
- Support quality varies by tier
- Occasional performance issues on larger data sets

**Pricing** (best-effort):
- Free: 3 users, basic CRM
- Standard ($14/user/mo annual): Scoring rules, workflows, dashboards
- Professional ($23/user/mo annual): SalesSignals, Blueprint
- Enterprise ($40/user/mo annual): Zia AI, multi-user portals
- Ultimate ($52/user/mo annual): Advanced analytics, data enrichment

**Best for**: Budget-conscious startups that need breadth of features. Teams already using other Zoho products. Small businesses that want enterprise-like features without enterprise pricing.

## Salesflare

**Positioning**: Automated CRM for small B2B teams. Minimal data entry — auto-enriches from email and calendar.

**Strengths**:
- Automatic data capture from inbox and calendar
- Auto-enrichment of company and contact data
- Built-in email tracking (opens, clicks)
- Simple pipeline management
- Good for founders who hate data entry

**Weaknesses**:
- Limited customization
- Small team focus — not designed to scale past 50 users
- Fewer integrations than major CRMs
- Basic reporting
- Less well-known — smaller community and ecosystem

**Pricing** (best-effort):
- Growth ($29/user/mo annual): Full CRM, email tracking
- Pro ($49/user/mo annual): Email sequences, custom dashboards
- Enterprise ($99/user/mo annual): Custom objects, audit log

**Best for**: Solo founders or tiny teams (1-5 people) who want automated data capture and hate manual CRM entry. B2B companies with a small number of high-value deals.

## Spreadsheets

**Positioning**: Not a CRM, but where most startups start. Free, familiar, flexible.

**When spreadsheets work**:
- Under 50 active contacts/accounts
- Solo founder or 1-2 people managing relationships
- Simple tracking needs (name, company, status, last contacted)
- No complex pipeline stages or automation needs

**When to graduate to a CRM**:
- More than 5 people touch customer data
- Follow-ups getting dropped
- No visibility into what teammates discussed with prospects
- You're maintaining multiple sheets that reference each other
- You need reporting or forecasting
- You're copy-pasting to create pipeline views

**Migration tips**:
- Clean your spreadsheet first — deduplicate, normalize company names and job titles
- Most CRMs import CSV directly — map columns to CRM fields
- Don't try to import everything — start with active deals and recent contacts
- Keep the spreadsheet read-only for 2 weeks as a fallback
