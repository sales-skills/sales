---
name: sales-seamless
description: "Seamless.AI platform help — Prospector, Buyer Intent, Job Changes, CRM Enrich, Pitch Intelligence, Engagement Hub (email, calling, social), AI Agents, Autopilot, Chrome extension, API. Use when asking 'how do I do X in Seamless.AI', configuring Seamless.AI settings, searching for contacts/companies, setting up Buyer Intent, using Pitch Intelligence, managing AI Agents, or using the Seamless.AI API. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts across tools (use /sales-enrich), interpreting buying signals across tools (use /sales-intent), cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), or sales content strategy (use /sales-content)."
argument-hint: "[describe what you need help with in Seamless.AI]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Seamless.AI Platform Help

Help the user with Seamless.AI platform questions — from contact/company search and Buyer Intent through Engagement Hub, AI Agents, Pitch Intelligence, CRM Enrich, Autopilot, Chrome extension, and API integration.

## Step 1 — Gather context

Ask the user:

1. **What area of Seamless.AI do you need help with?**
   - A) Prospector — searching for contacts and companies
   - B) Buyer Intent — tracking accounts showing buying signals
   - C) Job Changes — monitoring role changes for trigger-based outreach
   - D) CRM Enrich — enriching and cleaning CRM data
   - E) Pitch Intelligence — AI-powered messaging and talk tracks
   - F) Engagement Hub — email, calling, social selling
   - G) AI Agents — Outbound, Inbound, Ops, Marketing, Customer Success, Recruiting
   - H) Autopilot — automated list building and enrichment
   - I) Chrome Extension — finding contacts while browsing
   - J) API — programmatic access, search, enrichment
   - K) Integrations — CRM, Salesloft, Outreach, Zapier
   - L) Admin — credits, billing, team management
   - M) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Marketing
   - E) Founder / solo seller
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Building prospect lists across tools → `/sales-prospect-list`
- Enrichment strategy across tools → `/sales-enrich`
- Buying signal interpretation across tools → `/sales-intent`
- Cadence/sequence strategy → `/sales-cadence`
- Cross-platform deliverability → `/sales-deliverability`
- Sales content/battle cards strategy → `/sales-content`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Seamless.AI platform reference

### Data Engine

#### Prospector (Contact & Company Search)
- **What it is**: Real-time B2B contact and company search engine — 1.8B+ verified business emails, 414M+ mobile numbers, 100+ data points per profile
- **Contact search filters**: Name, company, title, seniority, department, industry, location, employee count, revenue, technologies, keywords, news mentions
- **Company search filters**: Company name, domain, industry, employee count, revenue range, location, technologies used
- **Real-time verification**: Emails and phones are verified at the point of reveal — not pre-cached stale data
- **Credits**: Each contact reveal costs 1 credit. Search/browse is free. Credits vary by plan.
- **Export**: Save to lists, export CSV, or push directly to CRM/engagement tools

#### Buyer Intent
- **What it is**: Identifies accounts actively researching topics related to your product category
- **How it works**: Monitors web-wide content consumption signals across 12,000+ intent topics
- **Setup**: Select intent topics relevant to your product/category → Seamless.AI scores accounts by research intensity
- **Use case**: Prioritize outreach to accounts showing buying behavior — layer intent on top of ICP filters for highest-quality lists
- **Best practice**: Combine Buyer Intent with Prospector filters to find the right contacts at accounts showing intent

#### Job Changes
- **What it is**: Tracks role changes for contacts in your CRM and saved lists
- **Signals**: New hires, promotions, company changes — all within 90 days
- **Use case**: New leaders make buying decisions in their first 90 days. Job changes are high-value trigger events for outreach.
- **Best practice**: Set up job change alerts for your champion contacts and target personas. Act within 30-60 days of the change.

#### CRM Enrich
- **What it is**: Automated enrichment of existing CRM records with fresh data — emails, phones, titles, firmographics
- **How it works**: Matches CRM records against Seamless.AI's database and fills in missing/stale fields
- **Supported CRMs**: Salesforce, HubSpot (native)
- **Use case**: Fix stale CRM data, fill in missing contact info, keep records current
- **Best practice**: Run CRM Enrich on segments rather than the entire database to conserve credits. Start with your active pipeline and highest-priority accounts.

#### Pitch Intelligence
- **What it is**: AI-powered messaging assistance — generates personalized talk tracks, email copy, and conversation starters based on prospect data
- **How it works**: Analyzes prospect profile, company data, news, and intent signals to generate relevant messaging
- **Use case**: Prep for calls, draft personalized emails, get conversation starters backed by data
- **Best practice**: Use Pitch Intelligence as a starting point, then customize. The AI generates relevant angles but your domain expertise adds the specificity that converts.

### Engagement Hub

#### Connect (Dialer)
- **What it is**: Built-in calling with click-to-dial, local presence dialing, and call recording
- **Key features**: Click-to-dial from any contact record, local area code matching, voicemail drop, call recording and logging
- **CRM sync**: Calls automatically logged to connected CRM

#### Emailing
- **What it is**: Send personalized emails directly from Seamless.AI
- **Key features**: Templates, merge fields, scheduling, tracking (opens/clicks)
- **Limitation**: Basic email sending — for complex multi-step sequences, export contacts to a dedicated tool (Salesloft, Outreach, Mailshake, etc.)

#### Calling
- **What it is**: Power dialer for high-volume calling
- **Key features**: Auto-dial through lists, disposition logging, voicemail drop

#### Social Selling
- **What it is**: LinkedIn integration for social outreach
- **Key features**: Profile insights, connection request templates, social engagement tracking

### AI Agents

Seamless.AI's AI Agents are purpose-built agents for specific sales/marketing functions:

- **Outbound Agent**: Automates prospecting, list building, and initial outreach
- **Inbound Agent**: Handles inbound lead qualification and routing
- **Ops Agent**: Automates CRM data hygiene and enrichment workflows
- **Marketing Agent**: Assists with campaign targeting and audience building
- **Customer Success Agent**: Monitors customer health signals and expansion opportunities
- **Recruiting Agent**: Finds and engages talent using the same B2B database

*Note: AI Agents are a newer feature (launched 2025). Capabilities and availability may vary by plan. Check with Seamless.AI support for current agent capabilities.*

### Automation Network

#### Autopilot
- **What it is**: Automated list building and enrichment — set criteria and Seamless.AI continuously finds and delivers new contacts matching your ICP
- **How it works**: Define your target criteria (title, industry, company size, etc.) → Autopilot runs in the background, building lists automatically
- **Use case**: Ongoing prospecting without manual search effort — "set and forget" list building
- **Credit usage**: Each contact found consumes credits. Set daily/weekly caps to control spend.

#### API
- **Base URL**: `https://api.seamless.ai/api/client/v1`
- **Auth**: API key (`Token: API_KEY` header) or OAuth 2.0 (`Authorization: Bearer ACCESS_TOKEN`)
- **Rate limit**: ~100 requests per 60 seconds per endpoint
- **Key endpoints**: Contact Search, Company Search, Contact Research (enrich), Company Research (enrich)
- **Full reference**: See `references/seamless-api-reference.md`

### Chrome Extension
- **What it is**: Browser extension that finds contact info while browsing LinkedIn, company websites, and other pages
- **Key features**: Find emails/phones from LinkedIn profiles, company pages, and news articles. One-click save to Seamless.AI lists or CRM.
- **Best practice**: Use on LinkedIn Sales Navigator for prospecting — view a profile, click the extension, get verified contact info instantly.

### Seamless.AI data model

| Entity | What it represents | Key relationships |
|---|---|---|
| **Contact** | A person with verified email/phone/profile data | Belongs to a Company, has Intent signals |
| **Company** | An organization with firmographic data | Has Contacts, has Technologies, has Intent |
| **List** | A saved collection of contacts | Contains Contacts |
| **Buyer Intent** | Topic-level research activity at a company | Linked to Company |
| **Job Change** | A role transition for a tracked contact | Linked to Contact |
| **Credit** | Unit of consumption for reveals | Consumed per Contact/Company reveal |

### Integrations

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

### Pricing (as of March 2026 — verify current pricing)

| Plan | Price | Credits | Key features |
|---|---|---|---|
| Free | $0 | 50 lifetime credits | Basic search, Chrome extension |
| Basic | $147/mo (annual) | 250/month | Contact search, email/phone reveals |
| Pro | ~$79-150+/user/mo (min 5 users) | ~1,000/day/user (expire daily) | Buyer Intent, Job Changes, Pitch Intelligence, Autopilot |
| Enterprise | Custom ($20K-$100K+/yr) | Custom | AI Agents, dedicated support, custom integrations |

*All paid plans are annual contracts with auto-renewal. 60-day cancellation notice required.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Seamless.AI
2. **Configuration recommendations** — specific settings to change
3. **Credit optimization** — how to maximize value from credit allocation
4. **Common pitfalls** — what can go wrong and how to avoid it
5. **Verification** — how to confirm the change worked
6. **For API questions** — always include a pointer: "For the full endpoint catalog, request/response schemas, and rate limits, see `references/seamless-api-reference.md`."

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't assume all features are available on all plans.** Buyer Intent, Job Changes, Pitch Intelligence, Autopilot, and AI Agents are Pro/Enterprise features. The Free plan gives only 50 lifetime credits (never refreshes). Always check the user's plan before recommending features.
- **Don't burn through daily credits.** Pro plan credits expire at midnight — unused credits don't roll over. Plan your prospecting sessions strategically. Don't reveal contacts you won't contact.
- **Don't skip CRM integration setup.** Seamless.AI's value multiplies when connected to your CRM. Without it, you're exporting CSVs manually. Set up Salesforce/HubSpot integration before building lists.
- **Don't use Seamless.AI's Engagement Hub for complex sequences.** The built-in emailing and calling tools are basic. For multi-step, multi-channel cadences, push contacts to Salesloft, Outreach, or another dedicated engagement tool.
- **Don't confuse annual contract terms.** Paid plans auto-renew for another 12 months unless you cancel 60+ days before renewal. This catches many users off guard.

## Step 5 — Related skills

- `/sales-prospect-list` — Build targeted prospect lists (platform-agnostic strategy)
- `/sales-enrich` — Enrich contacts across multiple providers (waterfall enrichment)
- `/sales-intent` — Interpret buying signals and prioritize accounts (cross-platform)
- `/sales-cadence` — Design multi-channel outbound cadences
- `/sales-deliverability` — Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-content` — Sales content management (battle cards, collateral)
- `/sales-integration` — Connect Seamless.AI to other tools
- `/sales-compete` — Competitive displacement campaigns
- `/sales-account-map` — Map buying committees at target accounts
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Finding contacts at target accounts
**User says**: "How do I find VP Engineering contacts at Series B SaaS companies in the US using Seamless.AI?"
**Skill does**:
1. Walks through Prospector search with filters: title = "VP Engineering", funding = Series B, industry = SaaS, location = US
2. Recommends saving as a dynamic list and layering Buyer Intent for prioritization
3. Explains credit costs for reveals and how to optimize
4. Suggests pushing results to CRM via native integration
**Result**: Targeted contact list with verified emails/phones, prioritized by intent signals

### Example 2: Setting up Buyer Intent
**User says**: "How do I set up Buyer Intent in Seamless.AI to find accounts researching sales tools?"
**Skill does**:
1. Confirms Pro/Enterprise plan (Buyer Intent is plan-gated)
2. Walks through intent topic selection — recommend specific topics over broad categories
3. Shows how to combine Intent with Prospector filters to find contacts at high-intent accounts
4. Suggests creating Autopilot rules to automatically build lists from intent signals
**Result**: Buyer Intent configured with relevant topics, integrated into prospecting workflow

### Example 3: API integration for automated enrichment
**User says**: "I want to use the Seamless.AI API to enrich contacts in my pipeline automatically"
**Skill does**:
1. Points to `references/seamless-api-reference.md` for full API docs
2. Explains Contact Research endpoint — submit contact data, poll for enriched results or receive via webhook
3. Recommends building a webhook handler for async result delivery
4. Warns about rate limits (100 req/60s) and credit consumption
**Result**: User understands the research/poll pattern and can build an automated enrichment pipeline

## Troubleshooting

### Low match rate on searches
**Symptom**: Seamless.AI returns few results for your search criteria
**Cause**: Filters too restrictive, or targeting a niche persona/industry with limited data coverage
**Solution**: Loosen one filter at a time — start with geography (expand regions), then title (add synonyms), then company size (widen range). Use broader department/seniority filters instead of exact titles. Check if the industry has good coverage in Seamless.AI's database.

### Credits running out too fast
**Symptom**: Hitting credit limits mid-day or mid-month
**Cause**: Revealing contacts without qualifying them first, or Autopilot set too aggressively
**Solution**: Browse/search before revealing — only use credits on contacts you'll actually reach out to. Set daily caps on Autopilot. Focus credit spend on Tier 1 accounts. Review credit usage in account settings.

### CRM sync not working
**Symptom**: Contacts pushed from Seamless.AI not appearing in CRM, or data not syncing
**Cause**: Integration not properly configured, field mapping issues, or CRM permissions
**Solution**: Check Settings > Integrations — verify OAuth connection is active. Review field mappings to ensure Seamless.AI fields map to the correct CRM fields. Check CRM user permissions — the connected user needs create/update rights on contact/lead objects.
