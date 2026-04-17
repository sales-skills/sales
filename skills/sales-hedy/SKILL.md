---
name: sales-hedy
description: "Hedy AI platform help — real-time AI meeting coach with live coaching suggestions, transcription in 30+ languages, REST API at api.hedy.bot/v1, webhooks (HMAC-SHA256), MCP server, Zapier/n8n automation, pricing tiers (Free/Pro $12.99/Lifetime $299). Use when setting up Hedy for a sales team, configuring real-time coaching prompts and session contexts, building automations with the Hedy API or webhooks, connecting Hedy to CRM via Zapier or n8n, choosing between Hedy and other AI note-takers (Fathom, Granola, Cluely), troubleshooting iOS mic cutouts or Intel Mac crashes, or setting up the MCP server for Claude or ChatGPT. Do NOT use for reviewing a single call for coaching (use /sales-call-review) or comparing note-taker platforms broadly (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Hedy]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
github: "https://github.com/HedyAI"
---

# Hedy AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your goal?**
   - A) Set up Hedy for my team (onboarding, coaching prompts, session contexts)
   - B) Integrate Hedy with CRM or other tools (Zapier, n8n, API, webhooks)
   - C) Troubleshoot an issue (mic cutouts, sync problems, recording failures)
   - D) Evaluate Hedy vs alternatives (Fathom, Granola, Cluely, Krisp)

2. **Which plan are you on?**
   - A) Free — 5 hrs/mo, coaching limited to 30 min/session
   - B) Pro ($12.99/mo or $99.99/yr) — unlimited, API/webhooks/MCP
   - C) Lifetime ($299) — all Pro features, one-time payment
   - D) Not sure / evaluating

3. **What devices do you use?**
   - A) Mac + iPhone
   - B) Windows + Android
   - C) Cross-platform (multiple)
   - D) Apple Watch for in-person meetings

Skip-ahead rule: if the user's prompt already has enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| General CRM-to-tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| Comparing note-taker platforms broadly | `/sales-note-taker {user's question}` |

Otherwise, answer directly below.

## Step 3 — Hedy platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Install on your primary device first — Mac or iPhone. Enable cloud sync immediately so sessions appear across devices.
2. Create session contexts for recurring meeting types (discovery calls, demos, 1:1s) — these shape the real-time coaching suggestions.
3. If integrating with CRM: Pro plan required → set up Zapier or n8n with `session.ended` webhook → map transcript/summary/todos to CRM fields.
4. For in-person meetings: pair Apple Watch for glanceable coaching. Phone records audio, Watch shows suggestions.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API/webhooks/MCP are all Pro-only.** Free plan has zero programmatic access. No Zapier triggers work on Free either — webhooks power the Zapier integration.
- **No native CRM connectors.** Unlike Fathom/Fireflies/Gong, Hedy doesn't have a "connect to HubSpot" button. CRM sync requires Zapier, n8n, or custom API work.
- **Real-time coaching is limited to 30 min/session on Free.** After 30 minutes, transcription continues but coaching suggestions stop.
- **Webhook limit is 10 per account.** If you need multiple downstream destinations, fan out from a single webhook receiver rather than creating separate webhooks per destination.
- **Intel Macs may crash.** Hedy 3.x has known issues on older Intel-based Macs. Update to the latest version (3.0.7+) if experiencing freezing.
- **Phone call recording can't capture both sides through headphones.** Phone manufacturers block apps from listening to call audio via headphones — use speaker mode for phone call recording.
- **Web app is view-only.** Recording only works on native apps (Mac, Windows, iOS, Android). The web app is for reviewing transcripts and asking questions.
- **Cloud sync must be enabled for webhooks.** Without cloud sync, webhook events won't fire even on Pro.

## Related skills

- `/sales-note-taker` — Comparing note-taker platforms, backend API integration patterns, webhook vs polling architecture
- `/sales-fathom` — Fathom platform help (budget alternative with native CRM sync)
- `/sales-granola` — Granola platform help (bot-free AI notepad, similar privacy focus)
- `/sales-cluely` — Cluely platform help (real-time AI coaching overlay, similar coaching concept)
- `/sales-krisp` — Krisp platform help (noise cancellation + AI notes, similar device-level approach)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Hedy for a sales team
**User says**: "I want to use Hedy for my 4-person SDR team to get real-time coaching on discovery calls. We use HubSpot."
**Skill does**: Recommends Pro plan ($12.99/seat/mo), walks through creating a "Discovery Call" session context with qualification framework prompts, sets up Zapier webhook (session.ended → HubSpot create note on contact), notes the 30-min coaching limit on Free makes it unsuitable for SDR teams.

### Example 2: Building an n8n automation
**User says**: "I want meeting summaries and action items to automatically go to Slack and Notion after every call."
**Skill does**: Uses the Hedy n8n node (n8n-nodes-hedy) with session.ended webhook trigger, maps summary and todos to Slack channel post, maps full transcript + action items to Notion database row, notes that cloud sync must be enabled and Pro plan is required.

### Example 3: Choosing between Hedy and Granola
**User says**: "Should I use Hedy or Granola? I'm a VC taking partner meeting notes."
**Skill does**: Compares: both are bot-free and privacy-focused. Granola is a notepad that enhances YOUR notes with transcript context — better for VCs who want to type alongside. Hedy is a coach that proactively suggests what to say — better for structured conversations. Granola has native HubSpot/Attio sync; Hedy needs Zapier. Recommends Granola for the notepad workflow, Hedy if the user wants real-time prompts during pitch evaluations.

## Troubleshooting

### iOS mic cuts out mid-meeting
**Symptom**: Recording stops partway through a meeting on iPhone, resulting in partial or lost transcript
**Cause**: iOS background audio restrictions — other apps or system notifications can interrupt Hedy's mic access
**Solution**: Enable "Always Allow" microphone permission in iOS Settings → Hedy. Disable Focus/DND if it restricts background audio. Keep Hedy in the foreground or enable background audio in Hedy settings. If the issue persists, update to the latest app version.

### Mac app freezes on launch (Intel)
**Symptom**: System becomes unresponsive when launching Hedy on Intel-based Mac
**Cause**: Known compatibility issue with Hedy 3.x on older Intel processors
**Solution**: Update to Hedy 3.0.7 or later — the team released a targeted fix. If still frozen, force-quit (Cmd+Option+Esc), delete the app, reinstall the latest version from hedy.ai.

### Cloud sync not working between devices
**Symptom**: Sessions recorded on iPhone don't appear on Mac (or vice versa)
**Cause**: Cloud sync disabled or using different accounts on different devices
**Solution**: Verify cloud sync is enabled in Settings on both devices. Confirm you're logged into the same Hedy account. Check internet connectivity. If sessions are stuck, force a sync by opening the app on both devices simultaneously.
