---
name: sales-bluedot
description: "Bluedot platform help — bot-free AI note-taker with video recording, Chrome extension + desktop/mobile apps, Svix webhooks, screen recording with webcam overlay. Use when setting up Bluedot for a sales team, configuring Bluedot webhook integrations, syncing Bluedot meeting notes to HubSpot or Salesforce, troubleshooting Bluedot desktop app crashes or recording drops, choosing between Bluedot plans (Free/Basic/Pro/Business), comparing Bluedot vs Fathom or Fireflies for bot-free recording, or debugging Bluedot Chrome extension issues in managed IT environments. Do NOT use for comparing all note-takers (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Bluedot]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Bluedot Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What are you trying to do?**
   - A) Set up Bluedot for my team (first-time setup)
   - B) Configure CRM sync (HubSpot/Salesforce/Pipedrive)
   - C) Set up webhook integrations for automation
   - D) Compare Bluedot plans or vs other tools
   - E) Troubleshoot a recording/extension/app issue
   - F) Something else

2. **Which plan are you on (or considering)?**
   - A) Free (5 lifetime meetings)
   - B) Basic ($14/mo — unlimited audio, no video)
   - C) Pro ($20/mo — video, custom templates, imports)
   - D) Business ($32/mo — HubSpot/Salesforce, unlimited imports)
   - E) Unlimited (custom — SSO/SCIM)
   - F) Not sure yet

3. **Which meeting platforms do you use?**
   - A) Google Meet
   - B) Zoom
   - C) Microsoft Teams
   - D) Webex
   - E) Slack Huddles
   - F) In-person meetings
   - G) Multiple

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all note-takers across vendors | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific questions beyond Bluedot sync | `/sales-hubspot {user's question}` |
| Salesforce-specific questions beyond Bluedot sync | `/sales-salesforce {user's question}` |

When routing to another skill, provide the exact command.

Otherwise, answer directly below.

## Step 3 — Bluedot platform reference

**Read `references/platform-guide.md`** for the full platform reference — pricing tiers, plan-gated features, webhook setup, CRM configuration, recording modes, AI features, and integration patterns.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Plan selection framework:**
- Solo user trying it out → Free (5 meetings) to test, then Basic ($14/mo) for unlimited audio
- Team wanting video recordings + custom templates → Pro ($20/mo)
- Sales team needing CRM auto-sync → Business ($32/mo) — this is the only plan with HubSpot/Salesforce
- Enterprise with SSO/SCIM requirements → Unlimited (custom pricing)

**Key decision points:**
- Video recording is Pro+ only — Basic is audio-only
- CRM sync is Business+ only — a significant jump from Pro ($20) to Business ($32)
- Custom templates require Pro+ — Basic uses default templates only
- File imports (MP4/MP3/M4A) require Pro+ — Basic can't import external recordings

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free plan is a trial, not a tier.** 5 meetings lifetime — once used, they're gone. Not comparable to Fathom's unlimited free recordings.
- **CRM sync requires Business plan ($32/mo).** HubSpot and Salesforce are only on Business+. Pipedrive/Copper/Zoho availability may vary by plan.
- **No public REST API.** Webhook-only integration via Svix. You can't programmatically query meetings, transcripts, or summaries — only receive pushes.
- **Chrome extension dependency.** Firefox and Safari are not supported. Desktop apps exist but the core experience is Chrome-first.
- **SOC 2 still pending.** GDPR + CCPA compliant with 256-bit AES encryption, but no SOC 2 cert yet.
- **No custom vocabulary.** Technical terms, acronyms, and industry jargon may be transcribed incorrectly.
- **Desktop app instability.** Reports of crashes/drops after ~1 hour of continuous recording.
- **Webhook fires once.** If your endpoint is down, you miss the event. Manual replay available in dashboard but no automatic retry chain documented.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, plan selection, API integration architecture
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Setting up Bluedot for a sales team
**User says**: "I want to record all our sales calls without a bot joining — which Bluedot plan do I need and how do I set it up?"
**Skill does**: Recommends Pro ($20/mo) for video recording or Business ($32/mo) if they need CRM sync, walks through Chrome extension install and calendar connection, explains the bot-free recording approach.

### Example 2: Webhook integration for CRM automation
**User says**: "I want Bluedot meeting notes to automatically push to our internal CRM via webhook — how do I set that up?"
**Skill does**: Walks through Svix webhook endpoint setup (Automation → Integrations → Webhook), explains user-level vs workspace-level scope, shows JavaScript transform option for payload reshaping, warns about single-fire delivery model.

### Example 3: Desktop app keeps crashing mid-recording
**User says**: "Bluedot desktop app drops after about an hour of recording — I keep losing meeting notes."
**Skill does**: Identifies known issue with long recordings, suggests using Chrome extension as primary (more stable), recommends splitting long meetings if using desktop, checks if they're on latest version.

## Troubleshooting

### Desktop app crashes/drops after ~1 hour
**Symptom**: Recording stops mid-meeting, notes are incomplete or missing
**Cause**: Known stability issue with long continuous recordings on desktop app
**Solution**: Use the Chrome extension as primary recorder (more stable). For meetings >1 hour, check for app updates. If issue persists, record via Chrome extension + use mobile app as backup for in-person portions.

### Chrome extension not recording in managed IT environment
**Symptom**: Extension can't be installed or doesn't activate during meetings
**Cause**: Corporate IT policies block Chrome extension installation or restrict extension permissions
**Solution**: Ask IT to whitelist the Bluedot extension ID (`aeeninnnlhgaojlolnbpljadhbionlal`). Alternatively, use the desktop app (Mac/Windows) which doesn't require Chrome extension permissions.

### Webhook endpoint not receiving events
**Symptom**: Configured webhook but no payloads arrive after meetings
**Cause**: Endpoint URL unreachable, wrong event subscription, or user-level scope mismatch
**Solution**: Verify endpoint accepts POST requests and returns 2xx. Check Svix dashboard for failed deliveries — use manual replay. Confirm the webhook was set up by the same user whose meetings you want to capture (user-level scope by default). For workspace-wide webhooks, contact Bluedot support.
