<!-- Source: https://developer.whatfix.com/ and https://support.whatfix.com/docs/developer-guide -->
<!-- Note: API docs are JS-rendered and could not be fetched verbatim. This is a partial reference assembled from search results and support documentation snippets. Verify against developer.whatfix.com for complete details. -->

# Whatfix API Reference (Partial)

## Overview

Whatfix Developer APIs v1 allow you to exchange information between Whatfix and your web application or any 3rd party application. The APIs are built using REST principles and follow HTTP rules.

## Authentication

- **Method**: API key via header
- **Header**: `x-whatfix-integration-key`
- **Token generation**: Created manually from the Whatfix app dashboard (Settings → API Token)
- **Type**: Stateless — all requests validated against the API token
- **Note**: Some endpoints do not require authentication, but most do

## Base URL

Not publicly documented in a single location. Likely varies by deployment region. Check your Whatfix instance settings.

## Format

- **Output**: JSON
- **CORS**: Enabled — handles cross-origin requests

## API Capabilities

### Content Management
- Create, update, delete Flows
- Create, update, delete Smart Tips
- Manage Pop-ups and Beacons
- Manage Task Lists

### Content Tagging
- Apply and manage tags on content
- Tag types: Role, Page, Auto, Miscellaneous

### Enterprise Integration Attributes
- Manage user attributes for segmentation
- Sync external system data for content targeting

### Report Analytics
- Download analytics data via API
- Available metrics:
  - Number of queries served by Self Help
  - Number of times a Pop-up was shown
  - Number of times a Flow was played
  - Number of times a Smart Tip was shown
  - User engagement and completion data

## Integration Hub

The Integration Hub is a separate feature (not raw API) for creating integrations:
- Create custom uni- or bi-directional data flows
- Listen to multiple APIs and Webhooks from external apps
- Schedule integrations with configurable frequency
- Pre-built connectors for Salesforce, Oracle, SAP, Workday, Azure AD, etc.

## SDKs

Whatfix provides mobile SDKs for extending DAP to mobile apps:
- **Android**: `whatfix-android` (GitHub: github.com/whatfix/whatfix-android)
- **iOS**: Multiple packages — `Whatfix-iOS`, `core-ios`, `creator-ios`
- **Xamarin iOS**: `whatfix-xamarin-ios`

## Gaps in This Reference

- Complete endpoint URLs and paths not available (docs are JS-rendered at developer.whatfix.com)
- Request/response payload schemas not documented here
- Rate limits not publicly documented
- Error codes not available
- Pagination details unknown

For complete API documentation, visit https://developer.whatfix.com/ (requires browser — content is JavaScript-rendered).
