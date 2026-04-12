# Seamless.AI Platform Guide

## Data Engine

### Prospector (Contact & Company Search)
- **What it is**: Real-time B2B contact and company search engine — 1.8B+ verified business emails, 414M+ mobile numbers, 100+ data points per profile
- **Contact search filters**: Name, company, title, seniority, department, industry, location, employee count, revenue, technologies, keywords, news mentions
- **Company search filters**: Company name, domain, industry, employee count, revenue range, location, technologies used
- **Real-time verification**: Emails and phones are verified at the point of reveal — not pre-cached stale data
- **Credits**: Each contact reveal costs 1 credit. Search/browse is free. Credits vary by plan.
- **Export**: Save to lists, export CSV, or push directly to CRM/engagement tools

### Buyer Intent
- **What it is**: Identifies accounts actively researching topics related to your product category
- **How it works**: Monitors web-wide content consumption signals across 12,000+ intent topics
- **Setup**: Select intent topics relevant to your product/category → Seamless.AI scores accounts by research intensity
- **Use case**: Prioritize outreach to accounts showing buying behavior — layer intent on top of ICP filters for highest-quality lists
- **Best practice**: Combine Buyer Intent with Prospector filters to find the right contacts at accounts showing intent

### Job Changes
- **What it is**: Tracks role changes for contacts in your CRM and saved lists
- **Signals**: New hires, promotions, company changes — all within 90 days
- **Use case**: New leaders make buying decisions in their first 90 days. Job changes are high-value trigger events for outreach.
- **Best practice**: Set up job change alerts for your champion contacts and target personas. Act within 30-60 days of the change.

### CRM Enrich
- **What it is**: Automated enrichment of existing CRM records with fresh data — emails, phones, titles, firmographics
- **How it works**: Matches CRM records against Seamless.AI's database and fills in missing/stale fields
- **Supported CRMs**: Salesforce, HubSpot (native)
- **Use case**: Fix stale CRM data, fill in missing contact info, keep records current
- **Best practice**: Run CRM Enrich on segments rather than the entire database to conserve credits. Start with your active pipeline and highest-priority accounts.

### Pitch Intelligence
- **What it is**: AI-powered messaging assistance — generates personalized talk tracks, email copy, and conversation starters based on prospect data
- **How it works**: Analyzes prospect profile, company data, news, and intent signals to generate relevant messaging
- **Use case**: Prep for calls, draft personalized emails, get conversation starters backed by data
- **Best practice**: Use Pitch Intelligence as a starting point, then customize. The AI generates relevant angles but your domain expertise adds the specificity that converts.

## Engagement Hub

### Connect (Dialer)
- **What it is**: Built-in calling with click-to-dial, local presence dialing, and call recording
- **Key features**: Click-to-dial from any contact record, local area code matching, voicemail drop, call recording and logging
- **CRM sync**: Calls automatically logged to connected CRM

### Emailing
- **What it is**: Send personalized emails directly from Seamless.AI
- **Key features**: Templates, merge fields, scheduling, tracking (opens/clicks)
- **Limitation**: Basic email sending — for complex multi-step sequences, export contacts to a dedicated tool (Salesloft, Outreach, Mailshake, etc.)

### Calling
- **What it is**: Power dialer for high-volume calling
- **Key features**: Auto-dial through lists, disposition logging, voicemail drop

### Social Selling
- **What it is**: LinkedIn integration for social outreach
- **Key features**: Profile insights, connection request templates, social engagement tracking

## AI Agents

Seamless.AI's AI Agents are purpose-built agents for specific sales/marketing functions:

- **Outbound Agent**: Automates prospecting, list building, and initial outreach
- **Inbound Agent**: Handles inbound lead qualification and routing
- **Ops Agent**: Automates CRM data hygiene and enrichment workflows
- **Marketing Agent**: Assists with campaign targeting and audience building
- **Customer Success Agent**: Monitors customer health signals and expansion opportunities
- **Recruiting Agent**: Finds and engages talent using the same B2B database

*Note: AI Agents are a newer feature (launched 2025). Capabilities and availability may vary by plan. Check with Seamless.AI support for current agent capabilities.*

## Automation Network

### Autopilot
- **What it is**: Automated list building and enrichment — set criteria and Seamless.AI continuously finds and delivers new contacts matching your ICP
- **How it works**: Define your target criteria (title, industry, company size, etc.) → Autopilot runs in the background, building lists automatically
- **Use case**: Ongoing prospecting without manual search effort — "set and forget" list building
- **Credit usage**: Each contact found consumes credits. Set daily/weekly caps to control spend.

### API
- **Base URL**: `https://api.seamless.ai/api/client/v1`
- **Auth**: API key (`Token: API_KEY` header) or OAuth 2.0 (`Authorization: Bearer ACCESS_TOKEN`)
- **Rate limit**: ~100 requests per 60 seconds per endpoint
- **Key endpoints**: Contact Search, Company Search, Contact Research (enrich), Company Research (enrich)
- **Full reference**: See `references/seamless-api-reference.md`

## Chrome Extension
- **What it is**: Browser extension that finds contact info while browsing LinkedIn, company websites, and other pages
- **Key features**: Find emails/phones from LinkedIn profiles, company pages, and news articles. One-click save to Seamless.AI lists or CRM.
- **Best practice**: Use on LinkedIn Sales Navigator for prospecting — view a profile, click the extension, get verified contact info instantly.

## Data Model

| Entity | What it represents | Key relationships |
|---|---|---|
| **Contact** | A person with verified email/phone/profile data | Belongs to a Company, has Intent signals |
| **Company** | An organization with firmographic data | Has Contacts, has Technologies, has Intent |
| **List** | A saved collection of contacts | Contains Contacts |
| **Buyer Intent** | Topic-level research activity at a company | Linked to Company |
| **Job Change** | A role transition for a tracked contact | Linked to Contact |
| **Credit** | Unit of consumption for reveals | Consumed per Contact/Company reveal |

## Integrations

| Integration | Type | What it does |
|---|---|---|
| Salesforce | Native (bi-directional) | Push contacts, enrich CRM records, sync activity |
| HubSpot | Native (bi-directional) | Push contacts, enrich CRM records, sync activity |
| Microsoft Dynamics | Native | Push contacts and enriched data |
| Zoho | Native | Push contacts |
| Keap (InfusionSoft) | Native | Push contacts |
| Pipedrive | Native | Push contacts |
| Salesloft | Native | Push contacts to cadences |
| Outreach | Native | Push contacts to sequences |
| Insightly | Native | Push contacts |
| Greenhouse | Native | Push contacts (recruiting use case) |
| Mixmax | Native | Push contacts |
| Zapier | Native | Connect to 8,000+ apps |
| Gmail/Outlook | Native | Email sending integration |

## Pricing (as of March 2026 — verify current pricing)

| Plan | Price | Credits | Key features |
|---|---|---|---|
| Free | $0 | 50 lifetime credits | Basic search, Chrome extension |
| Basic | $147/mo (annual) | 250/month | Contact search, email/phone reveals |
| Pro | ~$79-150+/user/mo (min 5 users) | ~1,000/day/user (expire daily) | Buyer Intent, Job Changes, Pitch Intelligence, Autopilot |
| Enterprise | Custom ($20K-$100K+/yr) | Custom | AI Agents, dedicated support, custom integrations |

*All paid plans are annual contracts with auto-renewal. 60-day cancellation notice required.*
