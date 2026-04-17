---
name: sales-fellow
description: "Fellow platform help — AI meeting assistant with REST API for transcripts, agendas, action items, and meeting metadata. Use when Fellow AI notes missing action items or creating false ones, bot-free recording not notifying external participants, transcript export hard to find, CRM sync not pushing notes to HubSpot or Salesforce, Zapier triggers requiring manual kickoff, picking between Fellow Free vs Team vs Business vs Enterprise, enabling the Developer API in workspace settings, or building a Fellow transcript pipeline. Do NOT use for selecting between Fellow and competitors like Fathom/Fireflies/Gong (use /sales-note-taker) or reviewing specific call recordings (use /sales-call-review)."
argument-hint: "[describe what you need help with in Fellow]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-management, platform]
github: "https://github.com/fellowapp"
---

# Fellow Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated Fellow knowledge.

1. **What are you trying to do?**
   - A) Configure Fellow workspace/plan or understand pricing tiers
   - B) Build a backend integration (REST API, webhooks, Zapier)
   - C) Troubleshoot AI notes, action items, or transcript issues
   - D) Set up CRM sync (HubSpot/Salesforce) or project management integrations
   - E) Troubleshoot bot-based or bot-free recording
   - F) Evaluate Fellow vs alternatives — **route to `/sales-note-taker`**

2. **Which Fellow plan?**
   - A) Free (5 AI notes + 5 AI recordings lifetime)
   - B) Team ($7/user/mo annual) — 10 AI notes/recordings per user/month, API access
   - C) Business ($15/user/mo annual) — unlimited AI, CRM sync, keyword tracking
   - D) Enterprise ($25/user/mo annual) — analytics, redaction, provisioning

3. **If integrating, what's the destination?**
   - A) CRM (HubSpot, Salesforce)
   - B) Project management (Jira, Asana, Linear, Monday, Notion, Confluence)
   - C) Data warehouse or internal system (via API)
   - D) Slack / notifications
   - E) Zapier / n8n automation

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| User situation | Route to |
|---|---|
| "Fellow vs Fathom vs Fireflies — which should we pick" | `/sales-note-taker {question}` |
| "Review this Fellow recording and score it" | `/sales-call-review {question}` |
| "Build a coaching program using Fellow recordings" | `/sales-coaching {question}` |
| "Generic Zapier/Make/n8n workflow patterns" | `/sales-integration {question}` |
| Anything Fellow-platform-specific (API, pricing, CRM sync, bot behavior, templates) | Stay here |

When routing, use the exact command: `/sales-{skill} {user's original question}`.

## Step 3 — Fellow platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing tiers, integrations, plan-gated features, recording modes, template system.

**Read `references/fellow-api-reference.md`** for API docs — authentication, endpoints, audit logging, security model.

Answer using only the relevant section. Don't dump the entire reference.

## Step 4 — Actionable guidance

Once you have the relevant reference content:

1. **For API questions** — note that API requires Team+ plan, admin must enable in Workspace Settings > Security, each user creates their own key in User Settings > Developer Tools. Keys are user-scoped (same access as in-app).
2. **For CRM sync** — requires Business+ plan. Fellow auto-suggests CRM fields from meeting context. Native HubSpot/Salesforce sync; other CRMs via Zapier.
3. **For recording mode questions** — Fellow supports both bot-based (structured meetings, video playback) and bot-free (external calls, ad-hoc, in-person). Bot-free requires desktop app install. Bot-free has NO automated disclosure for external participants.
4. **For template questions** — 500+ templates exist but discovery is poor. Recommend pinning 3-5 org-wide templates (Business+) rather than browsing the full library.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there with today's date.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free plan is extremely limited.** 5 AI notes + 5 AI recordings for the lifetime of the account — not per month. Effectively a trial, not a usable free tier.
- **Bot-free recording has no automated participant disclosure.** Unlike bot-based mode (where the bot's presence signals recording), bot-free gives no notification to external participants — potential liability in two-party consent jurisdictions.
- **Zapier triggers often require manual kickoff.** The integration doesn't auto-trigger for all events — some Zaps need a manual push. Options are limited compared to native API.
- **CRM sync is Business+ only ($15/user/mo).** HubSpot and Salesforce native sync. AI-powered CRM field updates are Enterprise-only ($25/user/mo).
- **API keys are user-scoped.** Each key only accesses data the user can see in Fellow's UI. No workspace-wide admin key. For team-wide pipelines, each user must create their own key.
- **Transcript export is buried.** AI notes and agenda export are in the meeting view, but raw transcript export is in a separate menu. Not obvious on first use.
- **AI action items miss or hallucinate.** Multiple reviewers report the AI creates false action items from questions or discussion points, and misses actual commitments. Review AI-generated items before sharing.

## Related skills

- `/sales-note-taker` — Picking a note-taker (Fathom vs Fireflies vs Avoma vs Gong vs Otter vs Fellow vs Grain vs Sembly vs Read.ai) and cross-vendor integration patterns
- `/sales-call-review` — Review a specific Fellow recording and score against MEDDPICC/SPIN/Challenger
- `/sales-coaching` — Use Fellow recordings in coaching programs
- `/sales-integration` — Zapier/Make/n8n workflows to move Fellow data to other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: CRM sync not working
**User says**: "I set up Fellow but meeting notes aren't pushing to our HubSpot — what's wrong?"
**Skill does**:
1. Confirms the user is on Business+ plan (CRM sync is plan-gated)
2. Checks if HubSpot integration is connected in Fellow workspace settings
3. Walks through the auto-suggest flow — Fellow identifies deal updates, contact notes, next steps and suggests CRM fields
4. Notes that AI-powered CRM field updates (auto-fill without review) require Enterprise tier
**Result**: Identifies the plan gate or configuration gap preventing sync.

### Example 2: Building a transcript pipeline via API
**User says**: "I want to pull all Fellow transcripts into our data warehouse automatically"
**Skill does**:
1. Confirms Team+ plan (API access required) and admin has enabled Developer API
2. Walks through key creation in User Settings > Developer Tools
3. Recommends Zapier triggers for agendas/AI notes/transcripts as the simplest path (Business+)
4. For custom builds, points to REST endpoints at developers.fellow.ai — JSON responses with transcript text, speaker timestamps, agendas, metadata
5. Flags user-scoped keys — for team-wide ingestion, each user needs their own key
**Result**: Clear path from plan check to working pipeline architecture.

### Example 3: Bot keeps joining external calls
**User says**: "Fellow's bot is joining calls with prospects and it's awkward — can I stop it?"
**Skill does**:
1. Explains bot-based vs bot-free recording modes
2. Recommends bot-free for external/prospect calls — records locally without a visible bot
3. Warns that bot-free requires desktop app install and has no automated disclosure
4. Suggests setting bot-based for internal meetings only, bot-free for external
**Result**: Recording mode configured per call type with compliance awareness.

## Troubleshooting

### AI action items are wrong or missing
**Symptom**: Fellow generates action items that weren't discussed, or misses actual commitments
**Cause**: The AI infers action items from conversation patterns — questions and hypotheticals can be misinterpreted as commitments
**Solution**: Review AI-generated items before sharing. Edit or delete false ones. For critical meetings, supplement with manual action items in the agenda. The Business+ plan's structured templates help anchor the AI to actual agenda items.

### Can't find transcript export
**Symptom**: AI notes and agenda export fine, but can't find the raw transcript
**Cause**: Transcript export is in a different menu than AI notes export
**Solution**: From the meeting view, look for a separate transcript tab/section — it's not co-located with the AI notes export button. The API (`developers.fellow.ai`) provides programmatic access to transcripts in JSON if the UI export is too clunky.

### Zapier automation not triggering
**Symptom**: Fellow Zap is set up but doesn't fire when meetings end
**Cause**: Some Fellow Zapier triggers require manual action rather than auto-firing
**Solution**: Check if your specific trigger type (agenda, AI notes, transcript) supports automatic execution. For reliable automation, consider the Fellow REST API directly (Team+ plan) or n8n's Fellow integration. Zapier is available on Team, Business, and Enterprise plans.
