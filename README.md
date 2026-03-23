# Sales Skills

Claude Code skills for sales, marketing, and GTM workflows.

## Quick Start

```bash
npx skills add sales-skills/sales
```

## What is `sales-do`?

`/sales-do` is a router skill. Describe your sales objective in plain language and it matches you to the right specialized skill with a ready-to-use prompt. Think of it as the entry point — you don't need to memorize which skill does what.

```
/sales-do write a cold outbound sequence for CFOs at mid-market fintech companies
```

## Skills Catalog

### Prospecting & Pipeline

| Skill | What it does | Status |
|---|---|---|
| `/sales-prospect` | ICP definition, target lists, lead identification | Coming soon |
| `/sales-research` | Account/contact research, competitive intel, org charts | Coming soon |
| `/sales-outreach` | Cold emails, LinkedIn messages, multi-touch sequences | Coming soon |
| `/sales-pipeline` | Pipeline review, forecasting, deal prioritization | Coming soon |

### Active Deals

| Skill | What it does | Status |
|---|---|---|
| `/sales-discovery` | Discovery/qualification call prep, MEDDIC/BANT | Coming soon |
| `/sales-demo` | Demo prep, pitch decks, presentation customization | Coming soon |
| `/sales-proposal` | Proposals, pricing, SOWs, business cases, ROI | Coming soon |
| `/sales-objection` | Objection handling, negotiation prep | Coming soon |
| `/sales-follow-up` | Nurture, re-engagement, going-dark recovery | Coming soon |
| `/sales-close` | Closing strategies, mutual action plans, urgency | Coming soon |

### Strategy & Content

| Skill | What it does | Status |
|---|---|---|
| `/sales-positioning` | Messaging, value props, competitive differentiation | Coming soon |
| `/sales-content` | Case studies, one-pagers, battle cards, enablement | Coming soon |

### Marketing & GTM

> From [`coreyhaines31/marketingskills`](https://skills.sh/coreyhaines31/marketingskills). Install with: `npx skills add coreyhaines31/marketingskills`

| Skill | What it does | Status |
|---|---|---|
| `/seo-audit` | Comprehensive SEO auditing — crawlability, technical, on-page, content, authority | Available |
| `/copywriting` | Conversion-focused marketing copy for web pages (homepages, landing, pricing) | Available |
| `/copy-editing` | Systematic editing of existing marketing copy via "Seven Sweeps" framework | Available |
| `/content-strategy` | Content planning — pillars, topic clusters, buyer journey mapping | Available |
| `/marketing-ideas` | Brainstorm and prioritize marketing strategies (139 ideas across 17 categories) | Available |
| `/marketing-psychology` | 50+ mental models and psychological principles for marketing decisions | Available |
| `/pricing-strategy` | SaaS pricing design — packaging, metrics, price points, value-based pricing | Available |

### Router

| Skill | What it does | Status |
|---|---|---|
| `/sales-do` | Routes your objective to the right skill | Available |

## Usage Examples

```
# Route automatically
/sales-do prep for a discovery call with Acme Corp

# Or use skills directly
/sales-research Acme Corp
/sales-outreach cold email for VP Engineering at Series B startups
/sales-objection they say they already have a solution in place
```

## License

MIT
