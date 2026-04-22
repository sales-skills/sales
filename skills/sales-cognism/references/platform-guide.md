# Cognism Platform Reference

## Platform overview

Cognism is a B2B sales intelligence platform headquartered in London, positioned as the European leader for contact data. It provides phone-verified mobile numbers (Diamond Data), Bombora-powered intent signals, CRM enrichment, and GDPR/DNC compliance across 13 European Do Not Call lists. Target audience: mid-market to enterprise sales and marketing teams, particularly those prospecting into UK/EMEA markets. Key differentiator: Diamond Data phone-verified mobiles with 98% claimed accuracy and 22% cold call connect rate (vs 14% industry average).

## Key modules

### Sales Intelligence (core)
- **Contact search**: Filter by job title, seniority, department, industry, company size, location, revenue, technologies used
- **Diamond Data**: Phone-verified mobile numbers — Cognism's human verification team calls numbers to confirm they reach the right person. Elevate plan only
- **Diamonds-on-Demand**: Concierge research service — submit a list of target contacts and Cognism manually verifies their mobile numbers. Elevate plan only
- **Intent signals**: Bombora-powered topic intent data showing which companies are actively researching topics relevant to your product. 8-15 configurable topics. Elevate plan only
- **Hiring & funding alerts**: Real-time signals for companies posting jobs or announcing funding rounds — both are buying indicators
- **Technographic data**: Technology stack installed at target companies

### Chrome Extension
- LinkedIn overlay showing Cognism data for profiles and company pages
- Export contacts directly to CRM (Salesforce, HubSpot, Pipedrive)
- Quick search without leaving LinkedIn
- Available on all plans

### Sales Companion (AI)
- AI-powered research assistant for account planning
- Surfaces relevant signals and talking points before calls
- Pulls from Cognism's data + public sources

### CRM Enrichment
- Automated enrichment of existing CRM records at scale
- HubSpot: 2-way sync (contacts, companies, tasks). CRM data import into Cognism for exclusion/filtering
- Salesforce: Export as Leads or Contacts with/without Accounts. Requires Professional+ edition
- Scheduled refresh to catch job changes and company updates
- Duplicate detection and merge recommendations

### Data-as-a-Service (DaaS)
- API access for programmatic data retrieval
- Search API: Find contacts/accounts by filters (20-100 per request, 1,000/min rate limit)
- Redeem API: Get full data for matched contacts based on entitlement
- Batch delivery options for large-volume needs
- Custom DaaS packages available for high-volume users

## Pricing and limits

Cognism uses custom quote-based pricing with a platform fee + per-seat model. No public list prices.

### Grow (Platinum) plan
- **Platform fee**: ~$15,000-$25,000/year
- **Per-user**: ~$1,500-$2,500/user/year
- **Includes**: B2B contact database (~25M contacts), email addresses, basic (non-verified) mobile numbers, Chrome Extension, standard CRM integrations
- **Does NOT include**: Diamond Data, Bombora intent data, Diamonds-on-Demand

### Elevate (Diamond) plan
- **Per-user**: ~$2,500+/user/year + separate platform fee
- **Adds**: Diamond Data phone-verified mobiles, Bombora intent data (8-15 topics), Diamonds-on-Demand concierge, expanded database (~50M contacts)

### Real-world pricing examples
- Grow for 5 users: ~$22,500/year
- Elevate for 5 users: ~$37,500/year (67% premium)
- Discounts of 28-52% are common (Vendr benchmarking) — never accept first quote

### Fair-use and limits
- "Unlimited" access has fair-use cap: ~2,000 records/user/month
- Bulk exports and API calls consume credits from a separate pool
- Intent data topic add-ons: $1,600-$6,000/year for 8-15 topics
- Auto-renewal with 10-15% annual price increases at renewal
- Onboarding fees may apply

## Integrations

### Native CRM integrations
| CRM | Sync type | Notes |
|---|---|---|
| Salesforce | Export (Leads/Contacts + Accounts) | Requires Professional+ edition. No Essentials support |
| HubSpot | 2-way sync | Contacts, Companies, Tasks. CRM data import for exclusion filters |
| Pipedrive | Export | Direct export from web app and Chrome Extension |
| Microsoft Dynamics 365 | Export | Standard integration |
| Bullhorn | Export | For recruitment teams |

### Sales engagement integrations
- Outreach — export enriched contacts directly into sequences
- Salesloft — export to cadences
- Both require separate platform subscriptions

### Other integrations
- Zapier — triggers and actions for workflow automation
- API — Search and Redeem endpoints for custom integrations

## Data model (API)

### Key objects
- **Contact**: Person record with name, title, email, phone, company, seniority, department
- **Account/Company**: Company record with name, industry, size, revenue, location, technologies
- **Entitlement**: Defines which data fields your subscription includes access to

### Search API
- Filter contacts/accounts by: job title, seniority level, department, industry, company size (headcount), company revenue, location (country/region/city), technologies used
- Returns 20-100 records per request
- Rate limit: 1,000 requests/minute
- Results are "preview" records — use Redeem API to get full data

### Redeem API
- Submit contact/account IDs from Search results
- Returns all fields included in your Entitlement
- Consumes credits from your allocation

## Workflow setup

### Workflow 1: EMEA cold calling with Diamond Data
1. Create a search in Cognism with target ICP filters (title, seniority, industry, location: UK/EU)
2. Filter for "Diamond verified" contacts only — these have phone-verified mobiles
3. Check DNC compliance — Cognism automatically flags contacts on 13 European DNC lists
4. Export to CRM (Salesforce/HubSpot) or sales engagement tool (Outreach/Salesloft)
5. Prioritize by intent signals if on Elevate plan — Bombora topics show active research
6. Dial verified numbers — expect 22% connect rate vs 14% with standard mobiles

### Workflow 2: CRM enrichment and maintenance
1. Connect CRM to Cognism (HubSpot 2-way sync or Salesforce export)
2. Import existing CRM contacts into Cognism for matching
3. Set up exclusion lists — prevent re-enriching customers, competitors, opted-out contacts
4. Run bulk enrichment on stale records (missing emails, outdated titles)
5. Schedule recurring enrichment to catch job changes (Cognism refreshes director-level data every 30 days)
6. Monitor fair-use cap — ~2,000 records/user/month

### Workflow 3: Intent-driven outbound (Elevate plan)
1. Configure 8-15 Bombora intent topics relevant to your product category
2. Set up alerts for intent topic surges — companies showing increased research activity
3. Combine with hiring signals (company posting roles your product supports) and funding events
4. Build priority lists of accounts showing multiple signal types
5. Use Diamond Data to find verified mobile numbers for decision-makers at surging accounts
6. Route high-intent accounts to reps for immediate outreach

## Deep dives

### Diamond Data verification process
Cognism's verification team manually calls mobile numbers to confirm they reach the correct person. This produces an industry-leading 98% accuracy rate for verified numbers. Numbers that can't be verified are flagged as "standard" (lower confidence). The verification focus is on director-level and above contacts in target markets, with EMEA coverage being the deepest.

### DNC compliance (13 European lists)
Cognism checks contacts against Do Not Call lists in: UK (TPS/CTPS), Germany, France, Spain, Italy, Ireland, Belgium, Netherlands, Sweden, Portugal, Croatia, and the US (Federal DNC). Contacts on DNC lists are flagged — they're still visible in search results but marked as "do not call" so teams can comply without losing visibility.

### Regional data quality comparison
| Region | Email accuracy | Phone accuracy | Notes |
|---|---|---|---|
| UK | High | Very high (Diamond Data) | Cognism's strongest market |
| Western Europe | High | High (Diamond Data) | Strong across DACH, France, Nordics |
| Eastern Europe | Medium | Medium | Less Diamond Data coverage |
| North America | Medium | Medium-Low | Notable gaps vs ZoomInfo, especially mid-market |
| APAC | Low-Medium | Low | Weakest region — validate before use |

### Cognism vs competitors positioning
| Factor | Cognism | ZoomInfo | Apollo |
|---|---|---|---|
| **Best region** | EMEA | North America | Global (breadth over depth) |
| **Phone verification** | Diamond Data (human-verified) | Phone-verified but lower connect rates | Pattern-matching |
| **DNC compliance** | 13 European lists | US Federal DNC | Basic |
| **Intent data** | Bombora (Elevate plan) | Bombora + proprietary | LeadSift (limited) |
| **Pricing** | $22K-37K/yr (5 users) | $25K+/yr | $49-119/user/mo |
| **Best for** | EMEA cold calling | US enterprise | SMB/startups |
