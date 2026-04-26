---
name: sales-sally
description: "Sally AI platform help — German-hosted GDPR-first AI meeting transcription and notes with 99+ language support, MCP server for Claude/ChatGPT/Cursor integration, meeting analytics, action item detection, and 8,000+ tool integrations via Zapier/Make/Power Automate/n8n. Use when setting up Sally AI bot for Zoom/Teams/Meet/Webex, Sally transcription accuracy is poor on technical terms, Sally MCP connector not connecting or token expired, Sally meeting summaries missing action items or decisions, Sally plan selection (Starter $10/Pro $40/Enterprise $79), Sally vs Fathom or Fireflies or tl;dv or Jamie for GDPR-compliant meeting notes, Sally CRM integration with HubSpot or Salesforce not syncing, Sally custom vocabulary not improving accuracy, or Sally mobile app recording quality for in-person meetings. Do NOT use for reviewing a single call for coaching (use /sales-call-review) or choosing between many note-takers without a Sally focus (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Sally AI]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-intelligence, platform]
---

# Sally AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

What are you trying to do with Sally?

1. **Set up or configure** — bot invitations, calendar sync, custom vocabulary, mobile app
2. **Fix a problem** — transcription quality, bot not joining, summaries missing info, CRM sync issues
3. **Compare or evaluate** — Sally vs other note-takers, plan selection, GDPR/compliance check
4. **Integrate or automate** — MCP connector, Zapier/Make workflows, CRM sync, Slack/Teams notifications
5. **Optimize usage** — meeting analytics, custom meeting types, AI chat, team workflows

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Choosing between many note-takers (not Sally-specific) | `/sales-note-taker [question]` |
| Reviewing a specific sales call for coaching | `/sales-call-review [question]` |
| Building a sales coaching program | `/sales-coaching [question]` |
| CRM integration strategy beyond Sally | `/sales-integration [question]` |
| Email deliverability or outbound sequences | `/sales-cadence [question]` |

When routing, provide the exact command.

## Step 3 — Sally AI platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, MCP setup, integration recipes, data model.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

Focus on the user's specific situation:

- **Plan selection**: Starter for occasional meetings (<20 hrs/mo), Pro for daily meeting teams needing unlimited minutes + analytics, Enterprise for on-premise or regulated industries
- **Accuracy tiers**: Bronze/Silver/Gold AI models map to 90.3%/94.1%/98.8% — upgrade plan if accuracy is critical
- **Integration path**: MCP for AI assistant queries, Zapier/Make for workflow automation, native CRM connectors for sales teams
- **GDPR advantage**: Germany-hosted, end-to-end encryption, works council compliant — strong fit for EU enterprises

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- Custom meeting types and AI chat per meeting require Pro ($40/mo) — Starter only gets Bronze AI and standard summaries
- MCP connector is **read-only** — you can query meetings/transcripts but cannot create, update, or delete anything via MCP
- Accuracy varies by AI model tier: Starter (90.3%) vs Pro (94.1%) vs Enterprise (98.8%) — significant gap for technical jargon
- Custom vocabulary helps with technical terms but accuracy ceiling is set by your plan's AI model tier
- On-premise deployment is Enterprise-only ($79/mo) — cannot self-host on lower plans
- Global AI chat (search across all meetings) requires Enterprise — Pro only gets per-meeting AI chat
- Upload limit: Starter 1 GB, Pro/Enterprise 5 GB — large video files may hit this quickly
- Partner program offers 25% commission but requires Certified Partner application

## Related skills

- `/sales-note-taker` — Comparing AI meeting note-takers across all platforms, API integration patterns, CRM sync architecture. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-call-review` — Reviewing and coaching from a specific sales call recording. Install: `npx skills add sales-skills/sales --skill sales-call-review -a claude-code`
- `/sales-integration` — Connecting tools via webhooks, Zapier, Make, or API pipelines. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User prompt**: "I need to set up Sally for my sales team of 15 reps — which plan and how do I get transcripts into HubSpot?"

**What the skill does**: Recommends Pro plan (unlimited minutes, custom meeting types for sales calls, AI chat per meeting), walks through HubSpot native integration setup, explains that CRM sync pushes meeting notes + action items automatically. Notes that custom vocabulary should be configured for industry-specific terms.

**User prompt**: "How do I connect Sally's MCP server to Claude Desktop so I can search past meetings?"

**What the skill does**: Reads platform-guide.md MCP section, provides the JSON config with endpoint URL and Bearer token setup steps, explains the 5 available tools (search_appointments, search_summaries, get_recordings, get_summary, get_transcription), notes read-only scope and token security best practices.

**User prompt**: "Sally is butchering technical terms in our engineering standups — names, acronyms, and framework names are all wrong"

**What the skill does**: Checks current plan tier (accuracy ceiling matters), recommends custom vocabulary setup for recurring terms, suggests upgrading to Pro/Enterprise for Silver/Gold AI model if on Starter. Notes that 90.3% accuracy on Starter vs 98.8% on Enterprise is a significant gap for jargon-heavy meetings.

## Troubleshooting

### Sally bot not joining meetings
**Symptom**: Bot doesn't appear in Zoom/Teams/Meet/Webex calls
**Solution**: Verify `invite@sally.io` is in the calendar invite (not just the meeting link). Check calendar integration (Outlook/Google/Apple) is connected in Settings. For Teams, ensure external guests are allowed in meeting policy.

### Transcription accuracy poor on technical terms
**Symptom**: Names, acronyms, product names consistently wrong
**Solution**: Add terms to custom vocabulary in Settings. Check your plan tier — Starter's Bronze AI (90.3%) struggles with jargon. Pro's Silver AI (94.1%) or Enterprise's Gold AI (98.8%) handles technical content significantly better.

### CRM sync not pushing meeting notes
**Symptom**: Sally transcribes and summarizes but notes don't appear in HubSpot/Salesforce/Dynamics
**Solution**: Check native CRM integration status in Settings → Integrations. Verify the CRM user has write permissions. For Zapier/Make workflows, check trigger configuration and field mapping. Sally pushes outbound to CRM — it does not pull data back.
