# RB2B Platform Guide

## Data model

| Entity | Key | Attributes | Source |
|--------|-----|------------|--------|
| Person (US only) | pixel visit | full name, email, LinkedIn profile URL, job title, city/state, company name | Person-Level ID |
| Company (global) | pixel visit | company name, domain, industry, employee count, revenue range, location | Company-Level ID (Demandbase) |
| Page visit | URL + timestamp | page URL, visit time, visitor identity (person or company), referral source | Hot Pages |
| Hot Lead | filter match | visitors matching firmographic/demographic criteria (title, company size, industry) | Hot Leads |

## Person-Level Visitor ID

RB2B's core differentiator — identifies the **individual person** visiting your website (US traffic only):

1. **Install the RB2B pixel** — JavaScript snippet added to your website (similar to a Facebook pixel)
2. **Pixel fires on page load** — captures the visitor's IP and browser fingerprint
3. **RB2B matches to identity** — resolves to a real person with name, work email, LinkedIn URL, job title, company
4. **Data pushed to integrations** — visitor data sent to Slack, CRM, webhook, etc. in real-time

**Coverage**:
- Pro+ plan: 35-45% of US website visitors identified at person level
- Pro plan: lower match rate (volume-dependent)
- Free/Starter: company-level only

**US-only limitation**: Person-level ID only works for US-based visitors. This is a compliance decision (GDPR prohibits this in EU). Non-US traffic gets company-level ID only.

## Company-Level Visitor ID

Powered by **Demandbase** — identifies the company behind a website visit:

- Works **globally** (not limited to US)
- Available on all plans including Free
- Returns company name, domain, industry, employee count, revenue range, location
- Similar to Clearbit Reveal but included in RB2B at no extra cost

## Hot Pages

Flag specific pages as high-intent signals:

1. **Configure Hot Pages** in RB2B dashboard — select URLs that indicate buying intent (pricing, demo request, case studies, comparison pages)
2. **Visitors to Hot Pages get flagged** — these visitors are highlighted in your feed and alerts
3. **Use for prioritization** — sales team focuses on visitors who viewed high-intent pages

## Hot Leads

Filter identified visitors by firmographic and demographic criteria:

1. **Set filters** — job title, company size, industry, location, seniority
2. **Matching visitors surfaced** — only visitors matching your ICP appear in Hot Leads feed
3. **Reduce noise** — ignore visitors who don't match your target profile

## Traffic Insights

Dashboard analytics on your website visitors:
- Total visitors identified (person + company level)
- Traffic trends over time
- Top pages visited
- Top companies visiting
- Geographic breakdown

## Identity Resolution API

RB2B offers a **separate API product** at api.rb2b.com with credit-based pricing:

| Endpoint | Input | Output | Credits |
|----------|-------|--------|---------|
| IP → HEM | IP address | Hashed email (SHA256) | 1 |
| IP → Company | IP address | Company firmographics | 1 |
| IP → LinkedIn | IP address | LinkedIn profile URL | 1 |
| HEM → LinkedIn | Hashed email | LinkedIn profile URL | 1 |
| LinkedIn → Email | LinkedIn URL | Work email address | 1 |
| Email → LinkedIn | Email address | LinkedIn profile URL | 1 |
| Company → Firmographics | Company domain | Full firmographic data | 1 |
| MAID → HEM | Mobile ad ID | Hashed email | Coming soon |
| MAID → LinkedIn | Mobile ad ID | LinkedIn profile URL | Coming soon |

**API auth**: API key (passed as header)

**API pricing** (separate from pixel product):
| Credits | Price |
|---------|-------|
| 100 | $9 |
| 1,000 | $49 |
| 10,000 | $299 |
| 100,000 | $1,999 |
| 1,000,000 | $9,999 |

## Pricing (Pixel Product)

| Plan | Price/mo | Resolutions | Person-Level | Key features |
|------|----------|-------------|--------------|--------------|
| Free | $0 | 150 company | No | Company-level ID, Slack integration |
| Starter | $79 | 300 | Limited | Person-level ID, basic integrations |
| Pro | $149 | 600-2,500 | Yes | Hot Pages, Hot Leads, all integrations |
| Pro+ | $199 | 5,000+ | Yes (35-45%) | Highest match rate, priority support |

## Integrations

| Integration | Type | What it does |
|-------------|------|-------------|
| Slack | Native | Real-time alerts when visitors identified — includes name, company, title, LinkedIn |
| HubSpot | Native | Push identified visitors as contacts, create/update records |
| Salesforce | Native | Push to leads/contacts, match to existing accounts |
| Zapier | Triggers | New visitor identified → trigger any Zapier workflow |
| Make (Integromat) | Module | RB2B visitor data in automation scenarios |
| Webhooks | API | Push visitor data to any endpoint in real-time |
| Apollo.io | Native | Sync identified visitors to Apollo for sequencing |
| Outreach | Native | Push visitors to Outreach sequences |
| Salesloft | Native | Push visitors to Salesloft cadences |
| Clay | Native | Enrich RB2B visitors with Clay's waterfall enrichment |
| Smartlead | Native | Add identified visitors to Smartlead campaigns |

## Compliance

- **SOC2 Type II certified** — enterprise security standards
- **CCPA compliant** — California privacy law compliance
- **Person-level US-only** — GDPR compliance by not offering person-level ID in EU/UK
- **No cookie-based tracking** — uses deterministic identity resolution, not cookies
