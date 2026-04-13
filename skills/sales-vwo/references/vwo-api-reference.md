<!-- Source: https://developers.vwo.com/reference/introduction-1, https://developers.vwo.com/v2/docs/fme-rest-apis, https://help.vwo.com/hc/en-us/articles/360020559993 -->

# VWO API Reference

## Overview

VWO API is organized around REST and encodes data in JSON. API access is available on the **Enterprise plan only**. For questions or new app development, contact api@vwo.com.

## Authentication

Generate API tokens at: `https://app.vwo.com/#/developers/tokens`

Select the appropriate permission level for your use case. Token is passed as a bearer token in the `Authorization` header.

## SDKs (Feature Management & Experimentation)

VWO FME SDKs are available for multiple languages, all hosted on GitHub under the Wingify organization (Apache 2.0 license):

| Language | Package | GitHub |
|---|---|---|
| Node.js / Browser JS | `vwo-fme-node-sdk` | github.com/wingify/vwo-fme-node-sdk |
| Python | `vwo-fme-python-sdk` | github.com/wingify/vwo-fme-python-sdk |
| Java | `vwo-fme-java-sdk` | github.com/wingify/vwo-fme-java-sdk |
| PHP | `vwo-fme-php-sdk` | github.com/wingify/vwo-fme-php-sdk |
| Ruby | `vwo-fme-ruby-sdk` | github.com/wingify/vwo-fme-ruby-sdk |
| Go | `vwo-fme-go-sdk` | github.com/wingify/vwo-fme-go-sdk |
| .NET | `vwo-fme-dotnet-sdk` | github.com/wingify/vwo-fme-dotnet-sdk |
| React (web) | `vwo-fme-react-sdk` | github.com/wingify/vwo-fme-react-sdk |
| Flutter | `vwo-fme-flutter-sdk` | github.com/wingify/vwo-fme-flutter-sdk |
| React Native | `vwo-fme-react-native-sdk` | github.com/wingify/vwo-fme-react-native-sdk |
| Android | `vwo-fme-android-sdk` | github.com/wingify/vwo-fme-android-sdk |
| iOS | `vwo-fme-ios-sdk` | github.com/wingify/vwo-fme-ios-sdk |

### OpenFeature Providers

| Language | GitHub |
|---|---|
| Node.js | github.com/wingify/vwo-openfeature-provider-node |
| Python | github.com/wingify/vwo-openfeature-provider-python |
| Java | github.com/wingify/vwo-openfeature-provider-java |
| Go | github.com/wingify/vwo-openfeature-provider-go |
| PHP | github.com/wingify/vwo-openfeature-provider-php |
| .NET | github.com/wingify/vwo-openfeature-provider-dotnet |

### MCP Server

`vwo-fme-mcp` — Model Context Protocol server for AI agent integration with VWO feature flags. GitHub: github.com/wingify/vwo-fme-mcp

### GitHub Action

`vwo-fme-github-action` — Evaluate feature flags in CI/CD pipelines. GitHub: github.com/wingify/vwo-fme-github-action

## FME REST APIs (Enterprise only)

### Feature Flag APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | Get All Feature Flags of a Workspace | Retrieve all feature flags configured within a workspace |
| GET | Get Details of a Specific Feature Flag | Fetch detailed information about a specific feature flag using its ID |
| POST | Create a Feature Flag | Create a new feature flag by specifying name, key, and configurations |
| PATCH | Update a Feature Flag | Modify existing flag attributes (name, description, tags, key) |

### Feature Flag Rules APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | Get Feature Flag Projects and Environments | Fetch the list of projects and environments a flag is assigned to |
| GET | Get All Feature Flag Rules | List all rules configured for a given feature flag |
| GET | Get Details of a Specific Feature Flag Rule | Access complete rule configuration details |
| POST | Create a Feature Flag Rule | Create a new rule with targeting conditions |
| PATCH | Update a Feature Flag Rule | Modify audience conditions, variations, or strategy |
| PATCH | Toggle Feature Flag Rule Status | Enable or disable rules without deletion |
| PATCH | Toggle Feature Flag Status for an Environment | Control flag activation per environment |
| DELETE | Delete a Feature Flag Rule | Permanently remove a rule from a flag |

## VWO Engage API

VWO Engage (web push notifications) has a separate API. See VWO Help Center for Engage-specific API key generation and endpoints.

## Segment Integration

Forward VWO experiment impressions to Segment using `@segment/analytics-next`. Package: `vwo-segment-analytics-next` on GitHub.

## Support

- API questions: api@vwo.com
- General support: support@vwo.com
- Developer docs: https://developers.vwo.com
- Help center: https://help.vwo.com
