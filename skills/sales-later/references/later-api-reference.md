# Later Influence Reporting API Reference

## Overview

The Later Influence Reporting API provides programmatic access to campaign analytics and performance data. It's designed for integrating campaign metrics into third-party BI tools.

**Note**: Later Social (scheduling, Linkin.bio, content calendar) does not have a public API. Only Later Influence exposes an API.

## Authentication

- **Method**: JWT (JSON Web Tokens)
- **Flow**: Exchange `clientId` and `clientSecret` for a JWT token
- **Credentials**: Contact your Later Influence Account Manager to obtain `clientId` and `clientSecret`

## Documentation

- **Location**: SwaggerHub (URL provided by Account Manager upon credential issuance)
- **Format**: OpenAPI/Swagger specification

## Capabilities

The Reporting API enables programmatic retrieval of:

- **Campaign performance** — aggregate metrics across all campaigns
- **Influencer performance** — per-creator metrics within campaigns
- **Reporting data aggregation** — roll-up data for dashboards

### Metrics available via API

- Engagement (likes, comments, shares, saves)
- Clicks and conversions
- Sales attribution
- Earned Media Value (EMV)
- ROI tracking

## Supported BI integrations

The API is designed for integration with:
- Looker
- Microsoft Power BI
- Oracle Analytics Cloud
- SAP Analytics Cloud
- Tableau

## Rate limits

Not publicly documented. Contact your Account Manager for rate limit details.

## Webhooks

Not publicly documented for the Reporting API.

## SDK availability

No official SDKs documented. Use standard HTTP clients with JWT authentication.

## Gaps

- **No public scheduling API** — Later Social does not expose endpoints for creating, editing, or deleting scheduled posts
- **No content management API** — media library, Linkin.bio configuration, and calendar operations are UI-only
- **Credentials require sales relationship** — no self-serve API key provisioning
- **Full endpoint documentation is gated** — SwaggerHub docs are shared only after obtaining credentials
