<!-- Source: https://developers.cognism.com/ + https://help.cognism.com/hc/en-gb/sections/7700093324050-Cognism-API -->
<!-- Note: Primary API docs at developers.cognism.com are JS-rendered. This reference is compiled from help center articles and search results. Partial coverage — check developers.cognism.com for full endpoint specs. -->

# Cognism API Reference

## Overview

The Cognism API enables programmatic access to search, preview, and enrich Contacts and Accounts from the Cognism B2B database. The API reduces complexity when searching, simplifies data structure, and provides improved response times over previous versions.

## Authentication

- **Method**: API key (set up via Cognism admin panel)
- **Entitlements**: API access requires entitlements to be configured — these define which data fields are returned in Redeem responses
- **Setup**: Admin → Settings → API → Generate API Key → Configure Entitlements

## Base URL

Exact base URL not confirmed (JS-rendered docs). Likely `https://api.cognism.com/` — verify at developers.cognism.com.

## Core Endpoints

### Search API

Search for Contacts and Accounts in the Cognism database based on specified filters.

- **Rate limit**: 1,000 requests/minute
- **Records per request**: 20-100
- **Purpose**: Find contacts/accounts matching ICP criteria. Returns preview records (limited fields)
- **Filters available**: Job title, seniority, department, industry, company size, revenue, location, technologies

### Redeem API

Retrieve full data for contacts/accounts found via Search API.

- **Purpose**: Get all fields included in your Entitlement for specific contact/account IDs
- **Entitlement-gated**: Only returns fields your subscription includes
- **Credits**: Consumes credits from your allocation per redeemed record

## Data Model

### Contact fields (typical)
- Name (first, last)
- Job title
- Seniority level
- Department
- Email address
- Phone number(s) — standard and Diamond-verified
- Company name
- Company ID
- Location

### Account/Company fields (typical)
- Company name
- Industry
- Employee count / company size
- Revenue
- Location (HQ + offices)
- Technologies used
- Funding history

## Rate Limits

| Endpoint | Rate limit |
|---|---|
| Search API | 1,000 requests/minute |
| Records per search request | 20-100 |

## Fair-Use Limits

- ~2,000 records/user/month under "unlimited" plans
- Bulk exports and API calls may have separate credit pools
- Contact Cognism for DaaS packages with higher limits

## Integration Notes

- API key setup requires admin access
- Entitlements must be configured before API calls return full data
- OpenAPI/Swagger spec reportedly available (listed on apitracker.io) — check developers.cognism.com
- No public SDKs documented

## Gaps in this reference

- Exact endpoint paths not available (JS-rendered docs at developers.cognism.com)
- Request/response JSON schemas not documented here
- Error codes not available
- Pagination mechanism not confirmed
- Webhook support not confirmed

For complete API documentation, visit https://developers.cognism.com/ (requires browser — JS-rendered).
