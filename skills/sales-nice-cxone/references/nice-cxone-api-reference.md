<!-- Source: https://developer.niceincontact.com/API -->
<!-- Note: API developer portal provides category descriptions only. Specific endpoint URLs, parameters, and response schemas require navigating into each API group page, which is JS-rendered. This reference captures what's publicly available from the overview page. -->

# NICE CXone API Reference

## Base information

- **Developer portal**: https://developer.niceincontact.com/API
- **Protocol**: HTTPS only
- **Authentication**: OAuth 2.0, Access Key, or OpenID Connect — each request requires a valid API access token
- **Response format**: JSON (accept elements in any order, handle additional fields gracefully)
- **Access control**: Permissions configured in Security Profile (CXone Central) or UserHub Role

## API groups

### Authentication APIs
System resources required to login to the CXone platform. Retrieve API access tokens via OAuth2, Access Key, or OpenID Connect.

### Admin APIs
System resources: Agents, Skills, AddressBooks, Teams, Campaigns. CRUD operations on platform configuration.

### Agent APIs
Create, manage, and end agent sessions. Manage interactions across channels: Phone Calls, Chats, Emails, Voice Mails, SMS, and Work Items.

### Patron APIs
Build patron-facing (customer-facing) applications — callbacks, live chat requests, public-facing interfaces.

### Real-Time Data APIs
Access live platform data for dashboards, control panels, and leaderboards. Useful for building custom real-time monitoring.

### Reporting APIs
Access historical data and calculated metrics. For building custom reports and analytics outside CXone's native reporting.

### UserHub APIs
Access Key API documentation for UserHub authentication.

### Data Extraction APIs
Extract data from CXone for external reporting and BI tools (Tableau, Power BI, Snowflake).

### Media Playback APIs
Access CXone voice and screen recording media programmatically.

### Digital Engagement APIs
Third-party messaging application integrations — connect additional digital channels.

### Business Data APIs
Business data microservice access.

### WFM APIs
Individual agent schedule information — query and manage workforce schedules.

### Recording APIs
Manage voice and screen recording — start, stop, retrieve, delete recordings.

### Interaction Analytics APIs
Linguistic analytics on contact center interactions — sentiment, topics, compliance markers.

### Privacy APIs
Manage GDPR data erasure requests — find and delete personal data across CXone.

### Data Policies APIs
Create, search, and download data policy results.

## SDKs

| SDK | Repository | Stars | Language |
|---|---|---|---|
| Agent SDK | github.com/nice-devone/nice-cxone-agent-sdk | 7 | TypeScript |
| Chat Web SDK | github.com/nice-devone/nice-cxone-chat-web-sdk | 7 | TypeScript |
| Mobile SDK Android | github.com/nice-devone/nice-cxone-mobile-sdk-android | — | Kotlin |
| Mobile SDK iOS | github.com/nice-devone/nice-cxone-mobile-sdk-ios | — | Swift |

## Implementation notes

- Accept JSON elements in any order
- Additional response elements may be added to released APIs without notice
- Serialize collections even when elements are missing
- Data may be restricted by campaign and team configuration
- Rate limits not publicly documented per-endpoint — design conservatively with backoff
