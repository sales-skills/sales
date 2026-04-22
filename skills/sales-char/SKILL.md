---
name: sales-char
description: "Char (formerly Hyprnote) platform help — open-source, bot-free, local-first AI meeting notepad with system audio capture, markdown output, plugin SDK, and optional cloud STT/LLM (GPL-3.0). Use when setting up Char on macOS for the first time, speaker identification not working in group meetings, configuring local-only transcription with Cactus or Ollama for full offline use, choosing between Char's cloud STT providers (Deepgram, AssemblyAI, Soniox, OpenAI, etc.), app not launching or bouncing on dock without opening, telemetry concerns with PostHog or Sentry in a local-first app, building a Char plugin or using the automation hooks system, comparing Char to Granola or Meetily or Fathom for privacy, or configuring the CLI for template management. Do NOT use for picking between note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Char question — setup, transcription, plugins, privacy, etc.]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, open-source, privacy, local-first, platform]
github: "https://github.com/fastrepl/char"
---

# Char Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Installing Char or first-time setup on macOS
   - B) Transcription provider selection (local Cactus vs 10 cloud STT providers)
   - C) LLM configuration (OpenRouter, BYOK, Ollama/LM Studio for offline)
   - D) Speaker identification not working in group meetings
   - E) Building a plugin or using automation hooks
   - F) CLI usage (template management, database operations)
   - G) Comparing Char to other note-takers
   - H) Privacy, telemetry, or GPL licensing questions

2. **Which plan are you on?**
   - A) Free (on-device transcription, BYOK)
   - B) Lite ($8/mo — cloud STT + LLM, speaker ID, integrations)
   - C) Pro ($25/mo — advanced sharing, team features, selective sync)
   - D) Team (custom)
   - E) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Char to other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — Char platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, STT/LLM providers, plugin SDK, hooks, CLI, integrations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**First-time setup priority**: Download from char.com → grant macOS audio permissions → select audio devices → test a short recording → choose STT provider (Cactus for local, Deepgram/AssemblyAI for cloud) → configure LLM (Ollama for offline, OpenRouter for cloud).

**Fully offline setup**: Free plan + Cactus local STT + Ollama local LLM. No cloud calls, no API keys needed.

**Speaker ID requires Lite+** — the Free plan does not include speaker identification. If group meeting attribution matters, budget for Lite ($8/mo) minimum.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Speaker identification is Lite+ only and still maturing** — multiple HN users reported it failing in group meetings. The team acknowledged outdated marketing. Test with your meeting size before committing.
- **"Local-first" includes telemetry by default** — Char ships with PostHog analytics and Sentry error tracking. Opt-out exists but isn't surfaced during onboarding. Check Settings → Privacy.
- **GPL-3.0 license has copyleft implications** — unlike MIT-licensed Meetily, corporate legal teams may flag GPL. Self-hosted enterprise use is fine; distributing modified binaries triggers copyleft.
- **macOS only until Q2 2026** — Windows and Linux builds are in progress but not publicly available yet. Don't plan a cross-platform deployment today.
- **Public REST API is "coming soon"** — no programmatic access to meetings/transcripts beyond the CLI `char db` commands. The hooks system (beforeListeningStarted, afterListeningStopped) is the only automation surface.
- **AudioTap API issues on some Macs** — M4 Pro Mini users reported the app bouncing on the dock without opening. No workaround beyond waiting for a fix.
- **CRM integrations are planned, not shipped** — HubSpot, Salesforce, Slack, Notion appear on the roadmap but are not available yet.

## Related skills

- `/sales-note-taker` — Comparing Char to other note-takers (Fathom, Fireflies, Avoma, Gong, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-meetily` — Meetily: MIT-licensed open-source alternative with Whisper/Parakeet transcription
- `/sales-granola` — Granola: another bot-free AI notepad, closed-source with HubSpot/Attio CRM sync
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up fully offline meeting notes
**User says**: "I need meeting transcription that works 100% offline — no data leaving my machine."
**Skill does**:
1. Confirms Char Free plan supports fully local operation
2. Guides through Cactus local STT engine setup (no API keys needed)
3. Configures Ollama as the LLM provider for local summarization
4. Tests with a short recording to verify end-to-end local processing
5. Notes that speaker identification requires Lite plan (cloud)
**Result**: Fully air-gapped meeting transcription and summarization.

### Example 2: Speaker identification not working
**User says**: "I have a 4-person team call and Char can't tell who said what."
**Skill does**:
1. Confirms the user is on Lite+ plan (speaker ID is plan-gated)
2. Explains speaker ID is still maturing — known issues with group meetings
3. Suggests workarounds: separate audio devices per speaker, post-meeting manual attribution
4. Notes this is a known pain point the Char team is actively improving
**Result**: Realistic expectations set, workarounds provided.

### Example 3: Building a custom plugin
**User says**: "I want to build a Char plugin that sends meeting summaries to Slack."
**Skill does**:
1. Reads the plugin SDK reference — plugins register as tabs via `window.__char_plugins.register()`
2. Notes that plugins are tab-based UI extensions, not background automations
3. For Slack integration, recommends the hooks system instead: `afterListeningStopped` hook triggers a shell script that reads the transcript and posts to Slack via webhook
4. Provides the hooks.json configuration path and format
**Result**: Correct architecture choice (hooks, not plugins) for the integration.

## Troubleshooting

### App bounces on dock but won't open
**Symptom**: Clicking Char shows a dock bounce animation but the window never appears, no error messages.
**Cause**: AudioTap API incompatibility on certain Mac models (particularly M4 Pro Mini reported).
**Solution**: Check GitHub Issues for your Mac model. Try running from Terminal (`/Applications/Char.app/Contents/MacOS/Char`) to see error output. Update to the latest version — AudioTap fixes ship frequently.

### Speaker identification fails in group meetings
**Symptom**: All speech attributed to one speaker or speakers randomly swapped.
**Cause**: Speaker diarization is still maturing in Char. System audio capture (vs per-participant streams) makes diarization harder.
**Solution**: Ensure you're on Lite+ plan (Free has no speaker ID). For critical meetings, consider a bot-based tool (Fathom, Fireflies) that captures per-participant audio streams for better diarization.

### Transcription quality poor or missing words
**Symptom**: Transcripts have gaps, wrong words, or low accuracy.
**Cause**: Local Cactus engine trades accuracy for privacy. Cloud providers vary in quality.
**Solution**: Switch from Cactus to a cloud STT provider (Deepgram or AssemblyAI recommended for accuracy). If staying local, ensure good microphone input and minimal background noise. Check that the correct audio device is selected in Settings.
