---
name: sales-leadmagic
description: "LeadMagic platform help — Email Finder (97% accuracy), Email Validation (catch-all detection), Mobile Finder, Profile Search, Personal Email Finder, Company Search (firmographics), Technographics, Company Funding, Employee Finder, Role Finder, Job Change Detector, Jobs Finder, Google/Meta/B2B Ads Search, REST API (19 endpoints), MCP Server (Claude/Cursor/Windsurf), CLI. Use when asking 'how do I use LeadMagic', 'LeadMagic API', 'LeadMagic email finder', 'LeadMagic mobile finder', 'LeadMagic company search', 'LeadMagic ads intelligence', 'LeadMagic MCP', 'LeadMagic vs Apollo', 'LeadMagic vs Clay'. Do NOT use for enrichment strategy across tools (use /sales-enrich), prospect list strategy across tools (use /sales-prospect-list), intent signal strategy across tools (use /sales-intent), or competitive intelligence strategy across tools (use /sales-compete)."
argument-hint: "[describe what you need help with in LeadMagic]"
license: MIT
version: 1.0.0
tags: [sales, enrichment, email-finder, api, mcp, platform]
---
# LeadMagic Platform Help

Help the user with LeadMagic platform questions — from email/mobile finding and company enrichment through ads intelligence, job tracking, API integration, and MCP server setup for AI agents.

## Step 1 — Gather context

Ask the user:

1. **What area of LeadMagic do you need help with?**
   - A) Email Finder — finding verified work emails from name + company
   - B) Email Validation — verifying emails, catch-all detection, deliverability scoring
   - C) Mobile Finder — finding direct dial phone numbers
   - D) Profile Search — enriching contacts from LinkedIn/B2B profile URLs
   - E) Company Intelligence — company search, funding, technographics, competitors
   - F) Employee/Role Finder — discovering employees or specific roles at companies
   - G) Job Change Detector — tracking contacts changing jobs
   - H) Ads Intelligence — Google, Meta, B2B ad research
   - I) API Integration — REST API setup, authentication, endpoints
   - J) MCP Server — setting up LeadMagic tools in Claude, Cursor, Windsurf, VS Code
   - K) CLI — command-line usage
   - L) Credits & Billing — credit costs, plan optimization
   - M) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) RevOps / GTM Ops / GTM Engineer
   - C) Developer / Engineer
   - D) Marketing / Growth
   - E) Founder / solo seller
   - F) Agency
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Enrichment strategy / provider comparison → `/sales-enrich`
- Prospect list building strategy → `/sales-prospect-list`
- Intent signal strategy / prioritization → `/sales-intent`
- Competitive intelligence strategy → `/sales-compete`
- Email deliverability strategy → `/sales-deliverability`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly using the platform reference below.

## Step 3 — LeadMagic platform reference

### Core concepts

| Concept | What it is |
|---------|-----------|
| **Credit** | Currency for API calls. Different endpoints cost different amounts. You only pay for valid results — not_found results are free. |
| **API Key** | Authentication token passed as `X-API-Key` header. Get from Settings > API in your dashboard. |
| **MCP Server** | Model Context Protocol server that exposes all 19 LeadMagic tools to AI agents (Claude, Cursor, Windsurf, VS Code). |
| **CLI** | Command-line interface for running LeadMagic lookups from terminal. |

### Endpoints by category

#### People Data (10 endpoints)

| Endpoint | Path | Credits | What it does |
|----------|------|---------|-------------|
| **Email Finder** | `POST /v1/people/email-finder` | 1 | Name + domain → verified work email. 97% accuracy. |
| **Email Validation** | `POST /v1/people/email-validation` | 0.25 | Verify email deliverability. Returns `valid`, `invalid`, or `unknown`. Catch-all detection. |
| **Mobile Finder** | `POST /v1/people/mobile-finder` | 5 | Find direct dial mobile numbers for decision-makers. |
| **Profile Search** | `POST /v1/people/profile-search` | 1 | Enrich from LinkedIn/B2B profile URL — work history, education, skills. 300 req/min rate limit. |
| **Email to Profile** | `POST /v1/people/b2b-profile` | 10 | Work email → B2B profile URL and details. |
| **Profile to Email** | `POST /v1/people/b2b-profile-email` | 1-2 | B2B profile URL → work email. |
| **Personal Email Finder** | `POST /v1/people/personal-email-finder` | 1-2 | Find personal email addresses from B2B profiles. |
| **Role Finder** | `POST /v1/people/role-finder` | 1-2 | Find specific roles at a company (e.g., "VP Sales at Acme"). |
| **Employee Finder** | `POST /v1/people/employee-finder` | 0.05 | Discover employees at target companies. Low-cost bulk discovery. |
| **Job Change Detector** | `POST /v1/people/job-change` | 3 | Track when contacts change jobs. |

#### Company Data (4 endpoints)

| Endpoint | Path | Credits | What it does |
|----------|------|---------|-------------|
| **Company Search** | `POST /v1/companies/company-search` | 1-2 | Firmographics by domain, name, or LinkedIn URL — industry, size, revenue, location. |
| **Company Funding** | `POST /v1/companies/company-funding` | 4 | Funding rounds, investors, amounts, dates. |
| **Technographics** | via Company Search | incl. | Tech stack identification — what tools/technologies a company uses. |
| **Competitors Search** | via Company Search | incl. | Discover competitor companies in the same space. |

#### Jobs & Ads (4 endpoints)

| Endpoint | Path | Credits | What it does |
|----------|------|---------|-------------|
| **Jobs Finder** | `POST /v1/jobs/jobs-finder` | 1/result | Search job listings across industries. Filter by country, type, keywords. |
| **Google Ads Search** | `POST /v1/ads/google-ads-search` | 1/ad | Analyze competitor Google search ads — ad copy, keywords, landing pages. |
| **Meta Ads Search** | `POST /v1/ads/meta-ads-search` | 1/ad | Research Facebook/Instagram ads — creative, targeting, engagement. |
| **B2B Ads Search** | `POST /v1/ads/b2b-ads-search` | 1/ad | B2B advertising intelligence — display and social campaigns. |

#### Utility

| Endpoint | Path | Credits | What it does |
|----------|------|---------|-------------|
| **Get Credits** | `GET /v1/credits` | 0 | Check current credit balance. |
| **Job Countries** | `GET /v1/jobs/countries` | 0 | List available countries for job search. |
| **Job Types** | `GET /v1/jobs/job-types` | 0 | List available job type filters. |

### API quick reference

```bash
# Base URL
https://api.leadmagic.io

# Authentication — X-API-Key header
curl -X POST "https://api.leadmagic.io/v1/people/email-finder" \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{"first_name": "Jane", "last_name": "Doe", "company_name": "acme.com"}'

# Check credit balance
curl "https://api.leadmagic.io/v1/credits" \
  -H "X-API-Key: your_api_key"
```

- **Response format**: JSON, mix of snake_case and camelCase depending on endpoint
- **Response times**: <200ms average, <100ms for many endpoints
- **Uptime**: 99.9%
- **Failed lookups**: Return `null` — no credits charged

### MCP Server setup

LeadMagic provides an official MCP server with 19 tools for AI agents:

```bash
# Install
npx leadmagic-mcp

# Or add to Claude Code MCP config
# Settings > MCP Servers > Add:
# Name: leadmagic
# Command: npx leadmagic-mcp
# Env: LEADMAGIC_API_KEY=your_key
```

**Supported clients**: Claude Code, Cursor, Windsurf, VS Code, Continue.dev, ChatGPT

### Pricing & credits (as of April 2026 — verify current pricing)

| Plan | Price | Credits/mo | Per credit | Rollover |
|------|-------|-----------|-----------|----------|
| **Trial** | $0 | 100 | Free | No |
| **Basic** | $59.99/mo | 2,500 | ~$0.024 | No |
| **Essential** | $99.99/mo | 10,000 | ~$0.010 | Yes |
| **Growth** | $179.99/mo | 20,000 | ~$0.009 | Yes |
| **Advanced** | $259.99/mo | 30,000 | ~$0.008 | Yes |

- **Pay only for valid results** — not_found results cost 0 credits
- Credit rollover on Essential plan and above (up to plan limit)
- All plans include all 19 endpoints, API + CLI + MCP access, unlimited team members

### Integrations

**Data platforms**: Clay (native), Apollo, ZoomInfo, Databar
**Outbound tools**: Instantly, Smartlead
**CRM**: Salesforce
**Automation**: Zapier, Make, n8n
**AI agents**: Claude (MCP), Cursor (MCP), Windsurf (MCP), VS Code (MCP), ChatGPT
**CLI**: Direct command-line access

## Step 4 — Actionable guidance

When answering, always:

1. **Include credit costs** — every endpoint has different credit costs. Help users budget (e.g., "Finding emails for 1,000 leads = ~1,000 credits via Email Finder").
2. **Emphasize free failed lookups** — users only pay when data is found. This changes the ROI calculation vs flat-rate providers.
3. **Recommend the right endpoint** — Email Finder vs Profile to Email vs Personal Email Finder serve different use cases. Guide users to the cheapest path.
4. **Consider MCP for AI workflows** — if the user works in Claude, Cursor, or Windsurf, the MCP server gives them all 19 tools without writing code.
5. **Suggest Clay integration** — for waterfall enrichment, LeadMagic is one of Clay's 150+ providers. Users can combine LeadMagic with other providers for max coverage.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Mobile Finder costs 5x more than Email Finder.** At 5 credits per valid mobile number, mobile enrichment burns credits fast. Budget separately — 1,000 mobile lookups = 5,000 credits (assuming 100% hit rate; less in practice since failed lookups are free).

2. **Email to Profile is the most expensive endpoint at 10 credits.** Reverse lookups (email → B2B profile) are costly. If you already have LinkedIn URLs, use Profile Search (1 credit) instead.

3. **Basic plan credits don't roll over.** Only Essential ($99.99/mo) and above get rollover. If you're on Basic and don't use all 2,500 credits, they expire at month end.

4. **Field naming is inconsistent — mix of snake_case and camelCase.** Different endpoints return fields in different conventions. When parsing responses programmatically, don't assume consistent naming. Check the OpenAPI spec or test each endpoint.

5. **Rate limit on Profile Search is 300 req/min.** Most endpoints don't document rate limits publicly, but Profile Search is capped at 300 requests per minute. For bulk enrichment, throttle accordingly or use the Employee Finder endpoint for discovery.

## Step 5 — Related skills

- `/sales-enrich` — Enrichment strategy across all tools (for choosing providers, comparing approaches)
- `/sales-prospect-list` — Building targeted prospect lists (for list strategy beyond LeadMagic)
- `/sales-intent` — Buying signals and account prioritization (for signal strategy using Job Change Detector)
- `/sales-compete` — Competitive intelligence (for competitive strategy using ads intelligence)
- `/sales-deliverability` — Email deliverability (for validation strategy beyond LeadMagic)
- `/sales-integration` — Connecting tools with webhooks, Zapier, APIs
- `/sales-clay` — Clay platform help (LeadMagic is a native Clay provider for waterfall enrichment)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Finding work emails for a prospect list
**User says**: "I have 2,000 leads with names and company domains. How do I find their work emails with LeadMagic?"
**Skill does**: Recommends Email Finder endpoint (`POST /v1/people/email-finder`), shows curl example with first_name + last_name + company_name, calculates credit budget (~2,000 credits max, likely less since failed lookups are free), and suggests Essential plan ($99.99/mo, 10,000 credits) for headroom.
**Result**: API integration guide with credit budget and plan recommendation.

### Example 2: Setting up MCP server for Claude Code
**User says**: "I want to use LeadMagic tools directly in Claude Code for prospect research."
**Skill does**: Walks through MCP server setup — install via `npx leadmagic-mcp`, configure API key, shows example usage of find_email and search_company tools within Claude. Notes all 19 tools available.
**Result**: Working MCP setup with usage examples.

### Example 3: LeadMagic vs Apollo for enrichment
**User says**: "Should I use LeadMagic or Apollo for email finding? We do about 5,000 lookups a month."
**Skill does**: Compares LeadMagic's pay-per-result model (5,000 lookups @ ~$0.01 = ~$50-100/mo on Essential) vs Apollo's subscription model ($49/user/mo with credit limits). Notes LeadMagic's advantage in pay-only-for-found and API-first approach. Recommends LeadMagic for API/automation workflows, Apollo for teams wanting prospecting + outbound in one tool.
**Result**: Clear comparison with cost analysis and recommendation.

## Troubleshooting

### Email Finder returning null for many lookups
**Symptom**: Email Finder returns null (not_found) for 40%+ of lookups.
**Cause**: Input data quality issues — misspelled names, wrong company domains, people no longer at that company.
**Solution**: Validate company domains first with Company Search. Use LinkedIn URLs with Profile to Email for higher hit rates. For stale lists, run Job Change Detector first to identify who's moved. Combine with other providers (via Clay waterfall) for maximum coverage.

### Credits running out faster than expected
**Symptom**: Credit balance depleting before the billing cycle ends.
**Cause**: High-cost endpoints (Mobile Finder at 5 credits, Email to Profile at 10 credits) or ad search returning many results (1 credit per ad).
**Solution**: Audit endpoint usage in your dashboard. Favor low-cost endpoints (Email Finder at 1 credit, Employee Finder at 0.05 credits) where possible. Upgrade to Essential+ for credit rollover. Use Email Validation (0.25 credits) to pre-filter before running expensive lookups.

### MCP server not connecting
**Symptom**: LeadMagic tools not appearing in Claude Code or Cursor after MCP setup.
**Cause**: API key not set in environment, or MCP config syntax error.
**Solution**: Verify `LEADMAGIC_API_KEY` is set in your environment or MCP config. Test the API key with `curl https://api.leadmagic.io/v1/credits -H "X-API-Key: your_key"` — should return your balance. Check MCP config JSON syntax. Restart your editor after config changes.
