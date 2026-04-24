<!-- Source: https://developer.callminer.com/docs (JS-rendered — partial info only) -->
<!-- Additional source: https://apitracker.io/a/callminer -->
<!-- Additional source: https://www.macrosoftinc.com/callminer-ingestion-apis/ -->

# CallMiner API Reference

> **Note**: CallMiner's developer documentation at developer.callminer.com is JS-rendered and could not be fully fetched. This reference is compiled from available sources. For complete endpoint documentation, access the developer portal directly or request Swagger UI access from CallMiner.

## Overview

CallMiner's platform is entirely API-driven — every use case in the system can be achieved by calling one or a set of APIs. The API is split into two collections.

## API collections

### 1. Data APIs (export)
Export data out of CallMiner for reporting, analytics, or integration with external systems.

**Capabilities**:
- Export interaction scores and metadata
- Export category match results
- Export agent performance data
- Export scorecard results
- Export trend and aggregate analytics

### 2. Ingestion APIs (import)
Import data into CallMiner for analysis.

**Capabilities**:
- Ingest audio recordings (WAV, MP3, and other formats)
- Ingest text-based interactions (chat transcripts, emails, social media)
- Ingest metadata associated with interactions (agent ID, customer ID, call reason, queue, etc.)
- Bulk ingestion for batch processing

## Authentication

- **Method**: API key authentication
- **Key management**: API keys are provisioned through the CallMiner partner/developer portal
- **Registration**: Visit https://partner.callminer.com to register for developer access

## Developer resources

- **Developer portal**: https://developer.callminer.com/docs — documentation, code samples, support forum
- **Swagger UI**: Available after authentication — full endpoint documentation with request/response schemas
- **Sandbox environment**: Dedicated testing environment available for developers to test API calls without affecting production data
- **Support forum**: Developer community for connecting with CallMiner's API team

## Integration patterns

### Audio ingestion workflow
1. Obtain API key from developer portal
2. Upload audio file via Ingestion API with metadata (agent ID, customer ID, timestamp, queue)
3. CallMiner processes the audio through the configured transcription engine (OVTS)
4. Analytics (categories, scoring, sentiment) are applied automatically
5. Results available via Data API or in the Analyze UI

### Real-time alerting
- CallMiner's Real-time API supports alerting and next-best-action guidance during live interactions
- Alerts are pushed when configured categories match during a live call

### CRM integration
- Two-way data import/export with Salesforce, Zendesk, Oracle CX
- Interaction insights can be pushed to CRM records
- CRM data can be pulled into CallMiner for context enrichment

## Known limitations

- API documentation is not publicly browsable without authentication
- Rate limits are not publicly documented — contact CallMiner for specifics
- SDK availability is unconfirmed — API appears to be REST-only with no official client libraries
- Webhook support is mentioned but details require developer portal access
