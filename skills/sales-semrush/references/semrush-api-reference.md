# Semrush API Reference

## Overview

Semrush provides REST APIs for accessing SEO, advertising, and market data programmatically.

- **Developer portal**: https://developer.semrush.com/
- **API docs**: https://developer.semrush.com/api/
- **Auth**: API key (found in Semrush dashboard → Subscription info → API units)
- **Access**: Business plan ($499.95/mo) required, or separate API subscription
- **Pricing model**: Unit-based — each request consumes API units, cost varies by endpoint
- **MCP Server**: Available for Claude Code / Cursor integration

## Authentication

All requests require an API key passed as a query parameter:

```
https://api.semrush.com/?type=domain_ranks&key={API_KEY}&export_columns=Db,Dn,Rk,Or,Ot,Oc,Ad,At,Ac&domain=example.com
```

## Analytics API

### Domain Reports

**Domain Overview** (~10 units)
```
GET https://api.semrush.com/?type=domain_ranks&key={KEY}&domain={domain}&export_columns=Db,Dn,Rk,Or,Ot,Oc,Ad,At,Ac&database={db}
```
Returns: organic keywords, organic traffic, paid keywords, paid traffic, backlinks count.

**Organic Positions** (~10 units per row)
```
GET https://api.semrush.com/?type=domain_organic&key={KEY}&domain={domain}&database={db}&export_columns=Ph,Po,Nq,Cp,Ur,Tr,Tc,Co,Nr&display_limit=10
```
Returns: keyword, position, volume, CPC, URL, traffic %, competition.

**Paid Search Positions**
```
GET https://api.semrush.com/?type=domain_adwords&key={KEY}&domain={domain}&database={db}
```
Returns: paid keywords, positions, ad copy, landing pages.

**Organic Competitors**
```
GET https://api.semrush.com/?type=domain_organic_organic&key={KEY}&domain={domain}&database={db}
```
Returns: competitor domains with overlap metrics.

### Keyword Reports

**Keyword Overview** (~10 units)
```
GET https://api.semrush.com/?type=phrase_all&key={KEY}&phrase={keyword}&database={db}&export_columns=Ph,Nq,Cp,Co,Nr,Td
```
Returns: volume, CPC, competition, number of results, trend.

**Related Keywords**
```
GET https://api.semrush.com/?type=phrase_related&key={KEY}&phrase={keyword}&database={db}
```
Returns: semantically related keywords with metrics.

**Keyword Difficulty**
```
GET https://api.semrush.com/?type=phrase_kdi&key={KEY}&phrase={keyword}&database={db}
```
Returns: keyword difficulty percentage (0-100).

### Backlink Reports

**Backlinks Overview**
```
GET https://api.semrush.com/analytics/v1/?key={KEY}&type=backlinks_overview&target={domain}
```
Returns: total backlinks, referring domains, referring IPs, authority score.

**Backlinks List**
```
GET https://api.semrush.com/analytics/v1/?key={KEY}&type=backlinks&target={domain}&display_limit=100
```
Returns: individual backlinks with source URL, anchor text, type (dofollow/nofollow), first/last seen.

### URL Reports

**URL Organic Positions**
```
GET https://api.semrush.com/?type=url_organic&key={KEY}&url={url}&database={db}
```
Returns: keywords a specific URL ranks for.

## Projects API

For managing Semrush projects (Position Tracking, Site Audit, etc.):

- **Base URL**: https://api.semrush.com/management/v1/
- **Position Tracking**: Create/manage tracking campaigns, retrieve ranking data
- **Site Audit**: Trigger crawls, retrieve audit results and issue lists

## Listing Management API

For local SEO directory management:

- **Manage business listings** across 150+ directories
- **Sync business information** (name, address, phone, hours)
- **Monitor listing accuracy** and resolve inconsistencies

## Databases

Semrush maintains 142 geo databases. Common ones:

| Code | Country |
|------|---------|
| us | United States |
| uk | United Kingdom |
| ca | Canada |
| au | Australia |
| de | Germany |
| fr | France |

Full list at: https://developer.semrush.com/api/v3/analytics/databases/

## Response Format

Default response is TSV (tab-separated values). Headers are in the first row:

```
Ph;Po;Nq;Cp;Ur;Tr;Tc;Co;Nr
seo tools;3;22200;4.46;https://example.com/seo;5234;3.12;0.89;342000000
```

## Unit Costs

Unit costs vary significantly by endpoint:

| Endpoint category | Approximate cost |
|---|---|
| Domain Overview | ~10 units |
| Organic/Paid Positions | ~10 units per row |
| Keyword Overview | ~10 units |
| Backlinks Overview | ~40 units |
| Backlinks List | ~50+ units |
| Bulk reports | 100-1,000+ units |

**Budget carefully.** A single backlink report with 1,000 results can cost 50,000+ units.

## Rate Limits

- No traditional requests-per-second rate limit documented
- Consumption is unit-based — once units are exhausted, requests fail
- Monitor usage in Semrush dashboard → Subscription info → API units
- Set up consumption alerts to avoid unexpected overages

## Zapier Integration (No API Key Required)

The **Site Audit** connector works on all Semrush plans via Zapier:
- Trigger: Site Audit completes, health score changes, new issues found
- Actions: Retrieve audit results, issue lists
- No API key or Business plan needed — uses OAuth through Zapier
