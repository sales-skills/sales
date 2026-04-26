---
name: sales-bliro
description: "Bliro platform help — bot-free AI meeting assistant with CRM field-level sync, anonymous coaching, and in-person + online transcription. Use when setting up Bliro for a sales team, configuring Bliro CRM integration with Salesforce or HubSpot or SAP or Dynamics 365, building automations with the Bliro API or webhooks, troubleshooting Bliro speaker recognition accuracy, evaluating Bliro vs other bot-free note-takers (Jamie, Granola, Shadow, Memoro), or choosing a GDPR-compliant EU-hosted meeting assistant with ISO 27001 and SOC 2. Do NOT use for reviewing a single call for coaching (use /sales-call-review) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe what you need help with in Bliro]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, platform]
---

# Bliro Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Set up Bliro for my team (configuration, rollout)
   - B) Integrate Bliro with my CRM or downstream tools (API, webhooks)
   - C) Evaluate Bliro vs alternatives
   - D) Troubleshoot a specific Bliro issue

2. **Which CRM?**
   - A) Salesforce
   - B) HubSpot
   - C) SAP
   - D) Microsoft Dynamics 365
   - E) None / not relevant

3. **Meeting types?**
   - A) Online only (Zoom, Teams, Meet)
   - B) In-person only
   - C) Both online and in-person

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Comparing note-takers across vendors | `/sales-note-taker {user's question}` |
| General CRM-to-tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Meeting scheduling (not note-taking) | `/sales-meeting-scheduler {user's question}` |

Otherwise, answer directly below.

## Step 3 — Bliro platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, integration recipes, code examples.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Install desktop app (Windows/Mac) + iOS app for in-person meetings
2. Connect calendar (Google/Outlook) for automatic meeting detection
3. Configure CRM integration — map AI summary fields to CRM objects (Task/Event/Call for Salesforce, Activity Timeline for HubSpot)
4. Set up coaching playbooks if using the coaching module
5. For API consumers: upgrade to Unlimited (€89/mo) for API + webhook access

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API + webhooks require Unlimited plan (€89/mo).** Professional (€49/mo) includes CRM integration but no programmatic access. Budget accordingly.
- **Speaker recognition can be inaccurate.** G2 reviewers report occasional speaker misattribution — review and correct before syncing to CRM on important deals.
- **No MCP server.** Unlike Jamie, Circleback, or MeetGeek, Bliro has no MCP integration for AI coding agents. Use the REST API or webhooks instead.
- **API is currently read-only.** Only `GET /v3/calls` is documented — you can pull call data out but can't push data in or trigger actions via API.
- **German-language UI by default.** The platform originated in Germany. English UI is available but some help center articles are German-first.
- **Custom AI models are Enterprise-only.** Fine-tuning for industry-specific terminology requires Enterprise plan with custom pricing.

## Related skills

- `/sales-note-taker` — Compare Bliro against other AI meeting note-takers, or build a transcript data pipeline
- `/sales-coaching` — Build coaching programs that consume Bliro's anonymous coaching data
- `/sales-call-review` — Review a specific call for coaching
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Bliro CRM integration with Salesforce
**User says**: "I want Bliro to automatically update our Salesforce opportunities after every call."
**Skill does**:
1. Reads platform guide for Salesforce integration details
2. Explains Bliro saves AI notes as Task, Event, or Call objects on Opportunities, Accounts, or Contacts
3. Walks through field mapping configuration at `app.bliro.io/settings/integrations`
4. Notes that CRM integration requires Professional plan (€49/mo) minimum
**Result**: Working Salesforce auto-sync with field-level mapping.

### Example 2: Building a webhook pipeline from Bliro to a data warehouse
**User says**: "I need to pipe all Bliro call transcripts into BigQuery for analytics."
**Skill does**:
1. Reads API reference for webhook payload schema
2. Designs pipeline: Bliro webhook → Cloud Run → validate HMAC-SHA256 signature → extract `callData.transcriptChunks` and `callData.summaries` → write to BigQuery
3. Provides working Python webhook receiver with signature verification
4. Notes that webhooks require Unlimited plan (€89/mo) and deliver full transcript + summary in one payload
**Result**: Production webhook pipeline architecture with code.

### Example 3: Evaluating Bliro vs Jamie for an EU sales team
**User says**: "We need a GDPR-compliant bot-free note-taker. Bliro or Jamie?"
**Skill does**:
1. Routes to `/sales-note-taker` for cross-vendor comparison, but provides key differentiators first
2. Compares: both bot-free and EU-hosted. Bliro has deeper CRM integration (Salesforce, HubSpot, SAP, Dynamics 365) and coaching module. Jamie has MCP server, broader language support marketing, and lower entry price (€21/mo vs €49/mo for CRM features)
3. Recommends Bliro for teams prioritizing CRM automation and coaching; Jamie for teams wanting AI workflow extensibility via MCP
**Result**: Clear differentiation on the axes that matter for the decision.

## Troubleshooting

### Speaker recognition misattributing speakers
**Symptom**: Transcript shows wrong speaker names, especially in multi-participant calls
**Cause**: System audio capture doesn't have per-participant audio streams like bot-based tools do — speaker diarization relies on voice fingerprinting
**Solution**: Review and correct speaker labels before CRM sync on important deals. Use smaller meetings where possible. The iOS app may provide better diarization for in-person meetings since the microphone is closer.

### CRM fields not syncing after meetings
**Symptom**: Bliro records the meeting but CRM objects don't get updated
**Cause**: CRM integration requires Professional plan (€49/mo) minimum. Also check that calendar integration is connected (Bliro matches meetings to CRM records via calendar events)
**Solution**: Verify plan tier at `app.bliro.io/settings`. Ensure calendar (Google/Outlook) is connected. Check CRM field mappings at integration settings. If using Salesforce, verify the connected user has write access to Task/Event/Call objects.

### Webhook not firing after calls
**Symptom**: Webhook endpoint receives no POST requests after calls complete
**Cause**: Webhooks are deactivated by default when created. Also requires Unlimited plan (€89/mo)
**Solution**: Navigate to `app.bliro.io/orgs/settings/webhook`. Verify the webhook is activated (not just created). Use the "Test Webhook" button to verify endpoint connectivity. Ensure HTTPS with valid TLS 1.2+ certificate. Check that your endpoint returns 2xx status codes promptly.
