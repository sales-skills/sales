---
name: sales-people-ai
description: "People.ai (now Backstory) platform help — automatic activity capture, deal intelligence, pipeline health, revenue forecasting, MCP integration, Salesforce/Dynamics/Oracle CRM sync. Use when reps aren't logging activities and CRM data is stale, deals are slipping without warning and you need early risk signals, forecast accuracy is poor because it's based on gut not data, evaluating People.ai vs Gong vs Clari vs Revenue.io for revenue intelligence, activity data isn't tying back to pipeline or revenue outcomes, or you want to connect People.ai to AI agents via MCP. Do NOT use for conversation intelligence with call recording and transcription (use /sales-gong or /sales-note-taker), building outbound sequences (use /sales-cadence), or general CRM data cleanup strategy (use /sales-data-hygiene)."
argument-hint: "[describe what you need help with in People.ai / Backstory]"
license: MIT
version: 1.0.0
tags: [sales, revenue-intelligence, activity-capture, deal-intelligence, forecasting, platform]
---

# People.ai (Backstory) Platform Help

People.ai rebranded to **Backstory** on April 21, 2026. Same platform, same data infrastructure, new name. This skill uses "People.ai" throughout since that's what most users search for.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which People.ai capability are you asking about?**
   - A) Activity Capture (auto-logging emails, calls, meetings → CRM)
   - B) Deal Intelligence (risk signals, stakeholder mapping, single-threading detection)
   - C) Pipeline & Forecasting (pipeline health, revenue predictions, coverage analysis)
   - D) MCP Integration (connecting AI agents to People.ai data)
   - E) CRM Sync & Data Quality (Salesforce/Dynamics/Oracle sync issues)
   - F) Pricing, plan selection, or comparison with another tool
   - G) Something else — describe it

2. **Which CRM are you on?**
   - A) Salesforce
   - B) Microsoft Dynamics
   - C) Oracle
   - D) Multiple CRMs

3. **How big is your sales team?**
   - A) Under 20 reps
   - B) 20-100 reps
   - C) 100-500 reps
   - D) 500+ reps

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Conversation intelligence / call recording / coaching | `/sales-gong [question]` or `/sales-note-taker [question]` |
| Revenue forecasting strategy across tools | `/sales-forecast [question]` |
| Deal health assessment methodology | `/sales-deal-inspect [question]` |
| CRM data quality strategy (not People.ai-specific) | `/sales-data-hygiene [question]` |
| Building outbound sequences | `/sales-cadence [question]` |

When routing, provide the exact command.

## Step 3 — People.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, integrations, MCP setup, pricing, known issues.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **Activity Capture setup**: Connect email (Gmail/Outlook) and calendar first — immediate value from auto-logging. Call integrations (Zoom/Teams) come second. Historical data analysis starts on day one (2 years back).
- **Deal Intelligence adoption**: Start with pipeline health dashboards for managers, then roll out risk alerts. Single-threading detection is the highest-signal feature for deal risk.
- **Forecast accuracy**: People.ai improves forecasts by replacing rep-entered data with activity-backed data. It doesn't generate forecast numbers — pair with CRM native forecasting or Clari for roll-ups.
- **MCP integration**: Connects to Claude, ChatGPT, Copilot. Useful for natural language queries against your revenue data. Enterprise tier required.
- **vs Gong**: People.ai captures activity data (emails, meetings, calendar); Gong captures conversation data (call recordings, transcripts). They're complementary, not competing. Many enterprises run both.
- **vs Clari**: Clari focuses on forecast roll-ups and submission workflows; People.ai focuses on the data layer (activity capture + deal intelligence). People.ai feeds Clari — they're often stacked.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

- **No call recording or transcription** — People.ai captures activity metadata (who emailed whom, which meetings happened, call duration) but does NOT record or transcribe calls. For call recording, use Gong, Fathom, or another CI tool.
- **Enterprise pricing only** — no public pricing, no free tier, no self-serve signup. Custom quotes based on team size and modules. Budget $50-100+/user/month based on market reports.
- **Salesforce sync delays** — activity data can take 1-2 days to fully process and appear in CRM. Don't expect real-time dashboards for call data.
- **Adoption requires executive sponsorship** — reps see People.ai as "management watching" if not positioned as a productivity tool. Frame as "no more manual CRM logging" not "we're tracking your activity."
- **Multi-CRM complexity** — supporting Salesforce + Dynamics across regions is a strength but adds implementation complexity. Plan for 2-4 week deployment per CRM instance.
- **Data quality depends on email/calendar hygiene** — People.ai can only associate activities with CRM records if contacts exist. Garbage contacts = garbage activity mapping.
- **Backstory rebrand (April 2026)** — all people.ai URLs redirect to backstory.ai. App login remains app.people.ai. Documentation and community content still references "People.ai."

## Related skills

- `/sales-gong` — Gong platform help (conversation intelligence — complementary to People.ai's activity capture)
- `/sales-note-taker` — Comparing AI note-takers or wiring their APIs into CRM/warehouse
- `/sales-forecast` — Revenue forecasting strategy, pipeline coverage, commit validation
- `/sales-deal-inspect` — Deal health assessment, stakeholder mapping, MEDDPICC extraction
- `/sales-data-hygiene` — CRM data quality, deduplication, enrichment strategy
- `/sales-coaching` — Building a sales coaching program, onboarding reps
- `/sales-scratchpad` — Scratchpad platform help (Salesforce-native AI workspace — lighter-weight alternative)
- `/sales-weflow` — Weflow platform help (Salesforce-native revenue AI with activity capture, CI, forecasting)
- `/sales-clari-copilot` — Clari Copilot platform help (conversation intelligence + Clari forecasting)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: CRM data is stale — reps don't log activities
**User says**: "Our Salesforce data is terrible. Reps don't log emails or meetings. We're evaluating People.ai to fix this."
**Skill does**:
1. Confirms People.ai's core value: automatic activity capture — every email, call, and meeting logged without rep action
2. Explains the deployment path: connect Gmail/Outlook → connect calendar → connect Zoom/Teams → 2 weeks to full visibility
3. Notes that People.ai captures 2 years of historical data on day one
4. Warns about contact matching: People.ai maps activities to CRM records, so contact data must be reasonably clean first
**Result**: Implementation plan with realistic timeline and prerequisites

### Example 2: People.ai vs Gong for a 50-person sales team
**User says**: "We're choosing between People.ai and Gong. 50 reps on Salesforce."
**Skill does**:
1. Clarifies they solve different problems: People.ai = activity data (emails, meetings, calendar); Gong = conversation data (call recordings, transcripts, coaching)
2. Notes many enterprises run both — People.ai feeds the data layer, Gong provides call-level insights
3. If budget allows one: Gong if coaching and call review are the priority; People.ai if CRM data quality and pipeline visibility are the priority
4. Flags pricing: both are enterprise-only with custom quotes
**Result**: Clear decision framework based on primary pain point

### Example 3: Connecting People.ai to Claude via MCP
**User says**: "We have People.ai and want to query our revenue data through Claude."
**Skill does**:
1. Confirms People.ai announced MCP integration in February 2026
2. Explains what it enables: natural language queries against structured CRM + unstructured conversation data
3. Notes enterprise tier is required for MCP access
4. Suggests example queries: "Which deals are single-threaded?" "Which accounts had declining engagement this quarter?"
**Result**: MCP setup guidance with practical query examples

## Troubleshooting

### Activity data not appearing in Salesforce
**Symptom**: Emails and meetings are happening but not showing in CRM
**Solution**: Check email/calendar connections in People.ai admin. Verify the contact exists in Salesforce — People.ai can only associate activities with known CRM records. Check sync status in the People.ai dashboard. Activity processing can take up to 24-48 hours for call data. If specific emails are missing, check if those email domains are excluded in sync settings.

### Low team adoption
**Symptom**: People.ai is deployed but reps ignore it / don't see value
**Solution**: Position as a productivity tool ("no more manual CRM logging"), not a tracking tool. Show reps their own data — "here are 15 hours you saved this month on data entry." Enable pipeline views that are faster than native Salesforce. Get manager buy-in to use People.ai data in 1:1s and forecast calls — once managers use it, reps follow.

### Inaccurate contact/account matching
**Symptom**: Activities are logged but associated with the wrong contacts or accounts
**Solution**: People.ai matches activities to CRM records based on email addresses and calendar invitees. If contacts have outdated email addresses in CRM, activities won't match correctly. Run a data hygiene pass on contact emails first (use `/sales-data-hygiene`). Check People.ai's matching rules — some require exact email match, others use domain-level inference.
