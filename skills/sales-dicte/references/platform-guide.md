# Dicte Platform Reference

## Overview

Dicte is a privacy-first AI meeting assistant by Livdeo SAS (Besançon, France) that records, transcribes, and analyzes meetings using exclusively open-source or EU AI models. Differentiator: post-quantum encryption (Kyber), transcript pseudonymization, French-hosted servers, and an on-premises DicteBOX appliance for enterprises. Primary audience: EU businesses, regulated industries, privacy-conscious professionals.

## Capabilities & automation surface

| Capability | Description | Access |
|---|---|---|
| One-tap recording | Start recording meetings or voice notes with a single tap | UI-only (all plans) |
| AI transcription | Speaker-identified transcription in EN, FR, DE, ES, IT | UI-only (all plans) |
| AI SKILLs — Meeting minutes | Generate 2-pager and detailed meeting minutes from transcripts | UI-only (all plans) |
| AI SKILLs — SWOT analysis | Generate SWOT analysis from meeting discussions | UI-only (all plans) |
| AI SKILLs — Project management | Generate project reports with action items and timelines | UI-only (all plans) |
| AI SKILLs — Mind maps | Create visual mind maps from meeting content | UI-only (all plans) |
| Custom AI SKILLs | Create custom analysis models for specific business needs | UI-only (Business+, paid add-on) |
| Transcript editing | Edit transcripts post-recording | UI-only (all plans) |
| Conversational AI agent | Interactive Q&A on transcripts (voice + text) | UI-only (coming soon) |
| Transcript pseudonymization | Auto-remove PII before AI model processing | Automatic (all plans) |
| Collaborative workspaces | Shared team spaces for transcripts and reports | UI-only (Business+) |
| Integration capabilities | APIs, CRM tools, external system connections | API (Business/Enterprise, undocumented) |
| DicteBOX on-premises | Hardware appliance for fully local processing | Hardware (Enterprise only) |

## Pricing, limits & plan gates

| Plan | Price | Users | Recording | Storage | Key gates |
|---|---|---|---|---|---|
| Free | €0/mo | 1 | 120 min/month | France or EU | Core features only |
| Plus | €19.99/mo (€9.92 annual) | 1 | Unlimited (fair-use) | France or EU | Online subscription only |
| Business | Custom | 3+ | Unlimited | Configurable region | Custom SKILLs (paid add-on), collaborative workspaces, integrations, 3-level conversational agent, SSO |
| Enterprise | Custom | 10+ | Unlimited | On-premises available | DicteBOX, enterprise integration, dedicated support, SLA |

- **50% discount** when subscribing on Dicte WebApp (Plus plan)
- **40% discount** per user (Business plan)
- No public API rate limits documented — Business/Enterprise only
- Audio deleted after processing — no centralized audio storage

## Integrations

**Native integrations**: Business/Enterprise only. No public documentation on specific CRM connectors, webhook support, or iPaaS modules.

**No Zapier triggers/actions found.**
**No Make modules found.**
**No MCP server.**
**No public API documentation.**

For teams requiring CRM sync or webhook automation, contact Dicte sales (contact@dicte.ai) for integration specifics. If API/webhook access is a hard requirement, evaluate alternatives with documented APIs (Fathom, Fireflies, MeetGeek).

## Data model

No public API means no documented data model. Based on the product UI:

<!-- Constructed from product features — verify against live platform -->
```json
{
  "recording": {
    "id": "string",
    "title": "string",
    "created_at": "ISO 8601",
    "duration_s": 1800,
    "language": "en|fr|de|es|it",
    "status": "processing|completed"
  },
  "transcript": {
    "recording_id": "string",
    "segments": [
      {
        "speaker": "Speaker 1",
        "start_ms": 0,
        "end_ms": 5000,
        "text": "string"
      }
    ]
  },
  "analysis": {
    "recording_id": "string",
    "skill_type": "minutes|swot|project_management|mind_map|custom",
    "output": "markdown string"
  }
}
```

## Quick-start recipes

**No public API** — quick-start recipes cannot be provided with working code.

### Recipe 1: Manual transcript export workflow
**Use case**: Get Dicte transcripts into your CRM without API access
1. Record meeting in Dicte (mobile or web app)
2. Wait for transcription to complete
3. Open transcript in Dicte, edit if needed
4. Export/copy transcript text
5. Paste into CRM meeting record (HubSpot activity, Salesforce task)

### Recipe 2: Generate SWOT analysis from a sales meeting
1. Record the meeting with one-tap recording
2. Once transcription completes, open the transcript
3. Select the "SWOT Analysis" SKILL from the processing menu
4. Review the generated SWOT — Strengths/Weaknesses/Opportunities/Threats are extracted from discussion
5. Share or export the SWOT report

### Recipe 3: Request integration access (Business/Enterprise)
1. Contact Dicte sales at contact@dicte.ai
2. Specify: target system (CRM name), data flow direction (push transcripts out vs pull meeting data in), volume (meetings/month)
3. Ask for: API documentation, authentication method, available endpoints, webhook events
4. Negotiate integration scope during Business/Enterprise tier negotiation

## Integration patterns

**No public API or webhook documentation exists.** Integration patterns cannot be defined with specifics.

**Workaround patterns:**
- **Manual export**: Copy transcript text from Dicte UI → paste into CRM/Slack/Notion
- **Business tier integrations**: Contact sales for available connectors — likely REST API with API key auth based on "integration capabilities" mentioned in pricing
- **Enterprise DicteBOX**: On-premises deployment may offer local API access — confirm with Dicte engineering

**If CRM sync is critical**, evaluate platforms with documented APIs instead: Fathom (REST + webhooks), Fireflies (GraphQL + webhooks), MeetGeek (REST + webhooks + MCP). See `/sales-note-taker` for the full comparison.

## Privacy & security architecture

- **AI models**: Open-source or EU models only — no data sent to US-based AI providers
- **Transcript pseudonymization**: PII removed from transcripts before any AI model processing
- **Encryption at rest**: Post-quantum (Kyber) — future-proof against quantum computing attacks
- **Encryption in transit**: Standard TLS
- **Server location**: Scaleway data center, Paris, France (French jurisdiction)
- **Audio retention**: Audio deleted immediately after transcription — only text retained
- **Data residency**: France/EU for Free/Plus; configurable for Business; on-premises for Enterprise
- **DicteBOX**: Physical appliance for fully local processing — no data leaves the network
- **Livdeo commits**: No user content used to train/improve AI models without explicit consent
