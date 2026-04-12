# Perform[cb] Partner API Reference

## Overview

The Perform[cb] Partner API enables affiliates to automate campaign discovery, link generation, suppression list management, and reporting. Available in JSON and XML formats.

## Authentication

- **Method**: API Key + Account ID (query parameters)
- **Credentials location**: Platform settings → API Information section
- **Parameters**: `api_key` and `account_id` on every request

## Base URL

```
https://login.performcb.com/api/v7/performcb_api
```

## Endpoints

### FindMyApprovedCampaigns (v7)

Retrieve all campaigns you're approved to run.

**Parameters:**
- `api_key` (required) — your API key
- `account_id` (required) — your account ID
- `status` — filter by campaign status
- `campaign_type` — filter by campaign type
- `traffic_type` — filter by allowed traffic type
- `page` — pagination page number (default: 1)
- `paginate_by` — results per page (default: 1000)

**Response fields:**
- Campaign: ID, name, description, preview URL, status, operating system, country, pricing model, events
- Restrictions: allowed traffic types, blocked source IDs
- Payouts: first commissionable payout, main conversion payout, event-level payouts
- Tracking: click URL, impression pixel URL

### Create Links

Generate tracking links for approved campaigns.

### Pull Suppression Lists

Retrieve suppression/exclusion lists for compliance and targeting.

### Pull Reports

Access reporting data programmatically — conversions, clicks, revenue, by date range and segmentation.

## Data Formats

- **JSON** (recommended for modern integrations)
- **XML** (legacy support)

## Pagination

Use `page` and `paginate_by` parameters:
```
?page=1&paginate_by=1000
```

## Rate Limits

Not publicly documented. Best practice: cache campaign data locally and refresh periodically (daily or hourly) rather than making real-time calls on every user request.

## Webhooks

Not publicly documented. Use postback URLs for server-to-server conversion tracking instead.

## Postback URLs

Server-to-server conversion notification. Set up in your Perform[cb] dashboard under tracking settings. Supports dynamic macros for:
- Conversion ID
- Payout amount
- Sub-ID parameters
- Event type

## Notes

- Full API documentation requires an active Perform[cb] account (docs are behind login at login.performcb.com)
- The API is designed primarily for affiliate partners, not advertisers
- Rate limits and webhook support may be available but aren't publicly documented — check with your Account Manager
