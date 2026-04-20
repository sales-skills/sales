# Platform-Specific Forecasting Guide

Forecasting capabilities and integration details for each platform that feeds into or supports revenue forecasting. Use this reference when the user's forecasting question involves a specific tool.

## Table of contents

- [Momentum](#in-momentum)
- [Oliv](#in-oliv)

### In Momentum

- **AI CRO Agent** (Transformation tier, $99/user/mo): Provides executive-level insights on pipeline health, account trends, and team performance. Auto-generates Executive Briefs summarizing forecast-relevant data across all calls and deals.
- **MEDDIC Autopilot**: Automatically extracts qualification data from calls and writes it to Salesforce. This feeds forecast accuracy — reps no longer estimate MEDDIC scores from memory; the AI captures what was actually said on calls.
- **AI Signals**: Detects deal risk signals from conversations — budget objections, timeline shifts, champion changes, competitor mentions. These signals inform which deals should be downgraded in the forecast.
- **Churn risk signals**: Customer Retention Agent detects churn indicators from CS calls. Feeds renewal forecasting accuracy — flagging at-risk renewals before they appear in pipeline metrics.
- **Deep Research**: Cross-deal AI analysis. Ask questions across all calls (e.g., "Which deals mentioned budget cuts this quarter?") and get AI-synthesized answers. Usage-based credits.
- **IQ Reports**: Aggregated intelligence dashboards showing pipeline trends, signal patterns, and team activity across calls.
- **Salesforce integration**: Real-time bi-directional sync means forecast data in Salesforce reflects actual call content, not stale rep-entered data. Auto-populated fields improve weighted pipeline accuracy.
- **Limitations**: Salesforce-only (no HubSpot or Pipedrive forecast integration). AI CRO Agent and Executive Briefs require Transformation tier ($99/user/mo). Deep Research is usage-based credits on top of subscription. Forecasting features depend on call data volume — small teams with few calls get less signal.
- **Best for**: Teams already using Momentum for CRM automation who want forecast accuracy improved by AI-extracted deal data. The forecasting value comes from cleaner CRM data (MEDDIC auto-fill, risk signals) rather than a separate forecasting module — Momentum makes the data feeding your forecast more reliable.

### In Oliv

- **Forecaster Agent** ($199/manager/mo): Generates weekly presentation-ready pipeline reports with AI commentary. Shows target vs actual, gap to goal, and deals likely to slip. Begins delivering reports immediately upon deployment — no 8-12 week implementation cycle.
- **Deal Insights module** ($29/user/mo): AI Deal Health Score for every opportunity. AI Deal Lifecycle Tracking shows where each deal sits and how it's progressing. Roll-up and aggregated forecasting across the pipeline. Win-loss analysis identifies patterns in closed deals.
- **Deal Driver Agent**: Identifies at-risk deals with specific remediation steps. Flags stalled opportunities and suggests actions — useful for forecast hygiene (downgrade deals that show risk signals before they slip).
- **CRM Manager Agent** (~$19/user/mo): Auto-populates CRM fields from conversation data. Improves forecast accuracy by ensuring CRM data reflects what was actually discussed on calls rather than stale rep estimates.
- **Cross-deal analysis**: Analyst Agent performs pattern analysis across all deals — useful for identifying systemic forecast risks (e.g., "3 deals in Stage 4 all mentioned budget cuts this quarter").
- **Two-way CRM integration**: Real-time bidirectional sync with Salesforce, HubSpot, Zoho, Freshworks, Copper, Close, Pipedrive, Dynamics 365. Forecast data in CRM reflects actual conversation content.
- **Limitations**: No public API — cannot export forecast data programmatically or build custom forecast dashboards. Forecaster Agent is $199/manager/mo on top of per-rep costs. Very early-stage platform (0 G2 reviews) — limited independent validation of forecast accuracy claims. No historical forecasting benchmarks published.
- **Best for**: Teams replacing expensive Gong + Clari stacks who want forecasting bundled with conversation intelligence at a fraction of the cost. The Forecaster Agent's instant deployment (vs 8-12 week Clari implementation) is useful for teams that need forecast visibility quickly. Multi-CRM support (8 CRMs) is an advantage over Momentum (Salesforce only).

### In Outreach

- **AI Forecasting** (Amplify Pro tier, ~$160/user/mo): Pipeline coverage analysis, gap-to-goal visibility, and AI-driven revenue predictions. Flexible rollup categories (commit, best case, pipeline). Manager override and submission workflows.
- **Deal velocity tracking**: Time-in-stage metrics, engagement trend analysis, and risk signal detection feed forecast accuracy. Stalled deals get flagged before they slip.
- **Pipeline views**: Customizable pipeline filters and rollups by team, stage, segment, or custom fields. Real-time aggregation across the org.
- **Kaia integration**: Conversation intelligence data (sentiment, topics discussed, next steps captured) enriches deal health scores, which feed forecast confidence.
- **CRM sync**: Bi-directional Salesforce sync means forecast data reflects actual deal state. Outreach deal data flows to Salesforce forecast views.
- **Reduces forecast prep time**: Vendor claims ~44% reduction in forecast prep time via automated pipeline rollups and AI-generated summaries.
- **Limitations**: Forecasting only available on Amplify Pro (~$160/user/mo) — not Core or Plus tiers. Annual contracts required. Outreach forecasting is newer than Clari/Gong Forecast — less battle-tested at enterprise scale. No standalone forecasting purchase — requires full Outreach platform.
- **Best for**: Teams already on Outreach for sequences who want forecasting integrated with engagement and conversation data in one platform. Avoids the need to stack a separate forecasting tool (Clari, Gong Forecast) alongside Outreach. If you need best-in-class standalone forecasting, Clari remains the category leader.
