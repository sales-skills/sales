# Platform-Specific Forecasting Guide

Forecasting capabilities and integration details for each platform that feeds into or supports revenue forecasting. Use this reference when the user's forecasting question involves a specific tool.

## Table of contents

- [Sybill](#in-sybill)
- [Momentum](#in-momentum)
- [Oliv](#in-oliv)
- [Weflow](#in-weflow)

### In Sybill

- **Deal Workspace** (Business+, $90/user/mo): Pipeline views with deal health signals, risk indicators, and activity timeline. Shows which deals are progressing, which are stalled, and which have risk signals from recent calls.
- **Ask Sybill for pipeline queries**: Natural language queries about pipeline health — "Which deals mentioned budget concerns this quarter?" or "Which Stage 3 deals haven't had a call in 2 weeks?" Cross-references calls, emails, CRM, and Slack data (Business+).
- **CRM Autofill for forecast accuracy** (Business+): Auto-populates CRM fields from calls using MEDDPICC/BANT/SPICED frameworks. Forecast accuracy improves because CRM data reflects what was actually discussed, not stale rep estimates.
- **Compound Intelligence**: Sybill's context graph connects conversations, deals, and outcomes over time. The more calls it processes, the better it identifies patterns that predict deal outcomes — useful for forecast risk signals.
- **Limitations**: No dedicated forecasting module like Clari or Gong Forecast. Sybill improves forecast inputs (cleaner CRM data, deal health signals) rather than generating forecast numbers. API/MCP (Enterprise only) required for exporting deal intelligence to external forecasting tools. No weighted pipeline automation — forecast logic must live in CRM or external BI.
- **Best for**: Teams wanting to improve forecast accuracy by having better CRM data quality and deal visibility. Sybill makes the data feeding your forecast more reliable — it's a forecast-enabler, not a standalone forecasting tool. Pair with CRM native forecasting or Clari for the full stack.

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

### In Weflow

- **Deal Intelligence & Forecasting** ($39/user/mo): 50+ AI-generated deal health signals, pipeline management views, automated forecast roll-ups, and AI prediction. Combines bottom-up, weighted, and AI forecasting methods. Real-time bi-directional Salesforce sync means forecast data lives in Salesforce — no separate system of record.
- **Activity Capture feeds forecast accuracy** ($19/user/mo): Server-side auto-sync of emails, meetings, and contacts into native Salesforce objects. Eliminates the "garbage in, garbage out" cycle — forecasts improve because CRM data reflects actual activities, not stale rep estimates.
- **Conversation Intelligence feeds deal signals** ($39/user/mo): AI extracts MEDDIC/BANT fields from calls and auto-fills Salesforce opportunity fields. Deal health signals come from actual call content, not rep self-reports.
- **Ask Weflow AI for pipeline queries**: Natural language queries — "Which Stage 3 deals haven't had a call in 2 weeks?" or "Which deals mentioned budget concerns this quarter?" Cross-references calls, activities, and CRM data.
- **Full bundle economics** ($79/user/mo): Activity capture + CI + forecasting. The forecasting module's accuracy depends on the data quality from the other two modules — buying all three together is the intended deployment.
- **Limitations**: Salesforce-only (no HubSpot or Dynamics forecasting). No public API — cannot export forecast data to external BI tools programmatically (data lives in Salesforce, queryable via SOQL). Not suited for complex enterprise forecast hierarchies at 1,000+ rep scale. Newer platform — less battle-tested at enterprise scale than Clari.
- **Best for**: Mid-market Salesforce teams (10-100 reps) where forecast inaccuracy traces back to stale CRM data. Weflow's approach is "fix the data first, then forecast" — the forecasting module is most powerful when paired with activity capture and CI. If you already have clean CRM data and need standalone forecasting, Clari or Gong Forecast may be better fits.

### In Dialpad

- **Dialpad Analytics**: Call volume, duration, disposition, and agent performance dashboards. Provides the data layer for understanding call activity trends — how many calls per rep, average handle time, call outcomes.
- **Stats API for custom reporting**: Async report generation (POST to create, GET to retrieve CSV). Two export types: Stats (aggregated data like call counts by status) and Records (per-call detail). Enables custom forecasting dashboards by feeding call activity data into BI tools.
- **AI Scorecard**: Automated call scoring can surface quality trends that correlate with pipeline outcomes. Not a forecasting tool itself, but provides signal for forecast accuracy.
- **Limitations**: Dialpad does NOT have a dedicated forecasting module. No pipeline analytics, deal health scoring, AI forecast predictions, or CRM-native forecast roll-ups. Analytics are limited to call activity metrics (volume, duration, outcomes), not revenue metrics (pipeline, stage progression, win rates). For revenue forecasting, use Clari, Gong Forecast, Weflow, or Salesforce native forecasting. Dialpad's analytics complement these tools by providing the call activity data layer.
- **Best for**: Teams using Dialpad as their phone system who want to feed call activity data into a separate forecasting tool. Not a standalone forecasting solution.
