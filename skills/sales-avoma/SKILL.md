---
name: sales-avoma
description: "Avoma platform help — AI Meeting Assistant, Scheduler, Lead Router, Conversation Intelligence, and Revenue Intelligence modules. Use when Avoma bot not joining calls or dropping mid-meeting, transcription inaccurate with accents or technical terms, meeting notes not syncing to HubSpot or Salesforce, setting up MEDDIC or BANT scorecards in Avoma, configuring Avoma API keys or webhooks for a transcript pipeline, evaluating Avoma Startup vs Organization vs Enterprise tiers, or debugging Avoma Lead Router form routing. Do NOT use for selecting between Avoma and competitors like Fathom/Fireflies/Gong (use /sales-note-taker) or reviewing specific call recordings (use /sales-call-review)."
argument-hint: "[describe what you need help with in Avoma]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, revenue-intelligence, platform]
---

# Avoma Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated Avoma knowledge.

1. **What are you trying to do?**
   - A) Configure Avoma account/team/plan or understand pricing tiers
   - B) Build a backend integration (API, webhooks, transcript pipeline)
   - C) Set up or tune AI scorecards (MEDDIC, BANT, SPICED)
   - D) Configure Lead Router (form qualification, round-robin, handoff)
   - E) Troubleshoot bot joining / recording / transcription issues
   - F) Push meeting data into CRM, warehouse, or Slack
   - G) Evaluate Avoma vs alternatives — **route to `/sales-note-taker`**

2. **Which Avoma plan?**
   - A) Startup ($19/seat) — AI Meeting Assistant only
   - B) Organization ($29/seat) — adds custom topics, API, group scheduling
   - C) Enterprise ($39/seat) — SSO, HIPAA, custom retention, concierge onboarding
   - D) Not sure yet

3. **Which add-ons (if any)?**
   - A) Conversation Intelligence ($29/seat) — AI coaching, scoring, playlists
   - B) Revenue Intelligence ($29/seat) — deal risk, forecasting, win-loss
   - C) Lead Router ($19/seat) — form routing, SDR→AE handoff
   - D) Multiple / all
   - E) None yet

Skip-ahead rule: if the user's prompt already has the context, skip to Step 2.

## Step 2 — Route or answer directly

| User situation | Route to |
|---|---|
| "Avoma vs Fireflies vs Gong — which should we pick" | `/sales-note-taker {question}` |
| "Review this Avoma recording and score it" | `/sales-call-review {question}` |
| "Build a coaching program using Avoma recordings" | `/sales-coaching {question}` |
| "Generic Zapier/Make/n8n workflow" | `/sales-integration {question}` |
| "Schedule meetings without Avoma" | `/sales-meeting-scheduler {question}` |
| Anything Avoma-platform-specific (API, webhooks, pricing, scorecards, bot, Lead Router) | Stay here |

When routing, use the exact command: `/sales-{skill} {user's original question}`.

## Step 3 — Avoma platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

If the question involves API endpoints or webhook payloads, also read `references/avoma-api-reference.md`.

## Step 4 — Actionable guidance

You no longer need the platform reference — focus on the user's specific situation.

- **Scorecard setup**: Start with a default methodology template (MEDDIC, BANT, SPICED), run it on 10-20 historical calls, then customize topic weights based on what actually predicts wins in your pipeline. Don't over-customize before you have baseline data.
- **CRM sync debugging**: Check Settings → CRM → Field Mapping. Avoma pushes to specific CRM fields — mismatched field types (text vs picklist) silently fail. Test with one meeting before enabling org-wide.
- **Bot reliability**: If the bot fails on Teams consistently (79% failure rate reported), switch to dialer integration or manual recording as fallback. Google Meet's March 2026 "potential risk" queue for third-party bots affects all vendors — host must manually approve.
- **API integration**: Use webhooks over polling. Queue outbound API calls — 60 req/min is tight at scale.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API access is Organization plan and above.** Startup plan has no API — you must upgrade to build integrations.
- **Advertised $19/seat is just the base.** Conversation Intelligence ($29) and Revenue Intelligence ($29) are separate add-ons. A fully-loaded seat costs $77-97/seat depending on billing cycle. Budget the plan you'd actually run.
- **Bot reliability issues are well-documented.** 73% of G2 reviewers report recorder failures — late joins (48%), mid-call drops (31%), complete no-shows (27%). Microsoft Teams has the worst failure rate (79%). Build fallback workflows.
- **CRM sync can delay 60+ minutes.** Some users report meeting notes taking an hour to appear in HubSpot/Salesforce. Don't rely on real-time CRM data from Avoma for time-sensitive workflows.
- **AI scoring requires configuration investment.** Default scorecards are generic — you need to customize topic trackers and weights to get value. Budget 2-4 weeks of tuning.
- **Annual contracts are inflexible.** Users report being unable to downgrade seat counts mid-contract. Right-size seats before committing annually.
- **Max 5 API keys per org.** Plan one key per integration, not per user. Regenerating a key immediately revokes all integrations using it.
- **Google Meet March 2026 bot-queue change affects all vendors.** Third-party bots now land in a "potential risk" queue. Hosts must manually approve. This is not Avoma-specific but hits Avoma users hard.

## Related skills

- `/sales-note-taker` — AI meeting note-taker selection & API integration strategy (Fathom vs Fireflies vs Avoma vs Gong vs others)
- `/sales-fathom` — Fathom platform help (REST API, webhooks, OAuth, SDKs, MCP)
- `/sales-fireflies` — Fireflies.ai platform help (GraphQL API, Webhooks, AskFred AI, MCP)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-meeting-scheduler` — Meeting scheduling tools (Calendly, Chili Piper, etc.)
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up MEDDIC scorecards
**User says**: "I want Avoma to automatically score every discovery call against our MEDDIC framework. How do I set this up?"
**Skill does**: Explains the Conversation Intelligence add-on requirement, walks through creating a custom scorecard with MEDDIC categories (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion), configuring smart topic trackers for each, and recommends running on 10-20 historical calls before tuning weights.

### Example 2: Building a transcript pipeline to Snowflake
**User says**: "I need every Avoma transcript piped into our Snowflake warehouse for analytics dashboards."
**Skill does**: Confirms Organization plan is required for API access, recommends webhook-first architecture (subscribe to note/meeting events), sketches the flow (Avoma webhook → Lambda/Cloud Run → validate → fetch full transcript via API → write to S3 raw + Snowflake normalized), warns about 60 req/min limit for backfills, and suggests nightly reconcile polling.

### Example 3: Bot not joining Teams calls
**User says**: "Avoma's bot keeps failing to join our Microsoft Teams meetings. Half my calls have no recording."
**Skill does**: Acknowledges the known Teams reliability issue (79% failure rate in reviews), suggests checking calendar permissions and Teams meeting settings, recommends dialer integration as fallback for critical calls, and notes the March 2026 Google Meet bot-queue change as context for cross-platform bot issues.

## Troubleshooting

### Bot not joining or dropping mid-call
**Symptom**: Avoma recorder shows "joining" but never appears, or drops partway through the call
**Cause**: Known reliability issue — affects 73% of users per reviews. Teams (79% failure rate) is worst, followed by Meet (71%), then Zoom (68%).
**Solution**: Verify calendar integration permissions, ensure the meeting invite has a video conferencing link (not phone-only). For Teams, check that external apps aren't blocked by IT policy. As a fallback, use Avoma's dialer integration (Aircall, RingCentral, etc.) which bypasses the bot entirely. Enable email notifications for recording failures so you can manually upload afterward.

### Transcription inaccurate with accents or technical vocabulary
**Symptom**: Speakers misidentified, technical terms garbled (e.g., "MEDDIC" → "med dick"), non-native speakers poorly transcribed
**Cause**: ASR model limitations with accents, background noise, and domain-specific vocabulary
**Solution**: Set up voice signatures for all regular participants (Settings → Profile → Voice Signature). Create custom smart topics with the correct spelling of technical terms — this helps the AI map garbled audio to the right concepts. For critical calls, review and correct the transcript within 24 hours while context is fresh.

### CRM fields not updating after meetings
**Symptom**: Meeting notes, action items, or scorecard data not appearing in Salesforce/HubSpot after a call
**Cause**: Field mapping mismatch (text field in Avoma → picklist in CRM), sync delay (up to 60 min), or CRM connection expired
**Solution**: Check Settings → CRM → Field Mapping for type mismatches. Verify the CRM connection is active (re-authenticate if expired). Test with a single meeting before enabling org-wide sync. If delays persist beyond 60 minutes, contact Avoma support — batch sync may be queued behind larger orgs.
