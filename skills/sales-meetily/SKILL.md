---
name: sales-meetily
description: "Meetily platform help — open-source, privacy-first AI meeting assistant with local Whisper/Parakeet transcription and Ollama summarization (MIT license). Use when setting up Meetily on macOS or Windows, transcription model not downloading or stuck on processing, microphone not being captured in meetings, choosing between Whisper and Parakeet models for accuracy vs speed, configuring Ollama or Claude or Groq for local summarization, audio device selection not saving after restart, comparing Meetily to Granola or Otter or Fathom for privacy, deploying Meetily self-hosted for an enterprise team, or importing existing audio files for batch transcription. Do NOT use for picking between note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Meetily question — setup, transcription, models, privacy, etc.]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, open-source, privacy, self-hosted, platform]
github: "https://github.com/Zackriya-Solutions/meetily"
---

# Meetily Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Installing Meetily or first-time setup (macOS / Windows / Linux Docker)
   - B) Transcription model selection (Whisper vs Parakeet, model sizes)
   - C) Summarization configuration (Ollama local, Claude, Groq, OpenRouter, custom endpoint)
   - D) Audio device or microphone issues
   - E) Importing existing audio/video files for batch transcription
   - F) Enterprise / self-hosted deployment (Docker, Azure, AWS, GCP)
   - G) Comparing Meetily to cloud-based alternatives
   - H) API usage (local FastAPI endpoints)

2. **Which edition are you on?**
   - A) Community (free, open-source)
   - B) Pro ($10/user/mo)
   - C) Enterprise (custom)
   - D) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Meetily to other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — Meetily platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, models, deployment, API endpoints.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**First-time setup priority**: Install the desktop app → let Parakeet Lightning download (required) → select audio devices → test a short recording → configure summarization provider (Ollama for fully local, Claude/Groq for quality).

**Model selection**: Parakeet Lightning for speed (4x faster than Whisper). Whisper large-v3 for maximum accuracy. Whisper tiny/base for low-spec machines (8GB RAM). For non-English, use Whisper (Parakeet is English-focused).

**Enterprise deployment**: Docker for Linux servers. Admin dashboard on Enterprise plan. Data never leaves the network — key selling point for regulated industries.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Parakeet Lightning must be installed even if you use another model** — the app forces Parakeet Lightning as a dependency. You cannot start recording without it downloaded and activated.
- **No cloud API** — Meetily's API is a local FastAPI server at `localhost:5167`. There's no hosted API for external integrations. All processing is on-device.
- **CRM integrations are planned, not available yet** — Salesforce, HubSpot, Notion, Slack are on the roadmap but not shipped. Don't buy Meetily expecting CRM sync today.
- **System requirements are real** — 8GB RAM minimum, 16GB recommended. GPU acceleration helps significantly. Low-spec machines will struggle with Whisper large-v3.
- **Pro features vs Community** — enhanced accuracy, advanced exports, speaker identification, and calendar integration require Pro ($10/user/mo). Community edition is fully functional for basic transcription.
- **macOS microphone permissions may not prompt** — some users report Meetily doesn't trigger the macOS permission dialog. You may need to manually add it in System Settings → Privacy & Security → Microphone.

## Related skills

- `/sales-note-taker` — Comparing Meetily to other note-takers (Fathom, Fireflies, Avoma, Gong, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up fully local transcription + summarization
**User says**: "I want Meetily to work 100% offline — no data leaving my machine."
**Skill does**:
1. Confirms Community edition works fully offline after initial model download
2. Guides through Parakeet Lightning or Whisper model download (one-time)
3. Configures Ollama as the summarization provider (local LLM)
4. Tests with a short recording to verify end-to-end local processing
**Result**: Fully air-gapped meeting transcription and summarization.

### Example 2: Choosing between Meetily and a cloud alternative
**User says**: "Should I use Meetily or Fathom for my 8-person sales team on HubSpot?"
**Skill does**:
1. Routes to `/sales-note-taker` for cross-platform comparison
2. Notes Meetily's key trade-off: maximum privacy but no CRM integration today
3. Recommends Fathom Business if HubSpot CRM sync is a hard requirement
4. Recommends Meetily if data sovereignty / HIPAA / self-hosted is the priority
**Result**: Clear decision framework based on CRM needs vs privacy requirements.

### Example 3: Transcription stuck on processing
**User says**: "I click stop recording but it just says 'processing recording' forever."
**Skill does**:
1. Checks which transcription model is selected — this is a known issue with Whisper models
2. Recommends switching to Parakeet Lightning (faster and more reliable)
3. If Whisper is required, suggests using a smaller model size (tiny/base instead of large-v3)
4. Checks available RAM and GPU — processing hangs often indicate insufficient resources
**Result**: Resolution path for the most common Meetily processing issue.

## Troubleshooting

### Transcription model not downloading or "not ready"
**Symptom**: App shows "Transcription model not ready" or download stalls.
**Cause**: Parakeet Lightning is a required dependency. Network issues or insufficient disk space (models are 100MB-3GB depending on size) can prevent download.
**Solution**: Check disk space (need 10GB minimum free). Verify internet connectivity for the initial download. Try the manual model download instructions in Meetily docs. If behind a corporate proxy, configure proxy settings before downloading.

### Microphone input not captured during meetings
**Symptom**: System audio and other participants are transcribed but your own voice is missing.
**Cause**: macOS doesn't always prompt for microphone permission when Meetily is installed. The app may not appear in System Preferences → Microphone.
**Solution**: Go to System Settings → Privacy & Security → Microphone and manually add Meetily. If it doesn't appear, try removing and reinstalling the app, then grant permission on first launch. On Windows, check Settings → Privacy → Microphone.

### Audio device settings reset after switching tabs
**Symptom**: You select a different microphone in Settings → Recordings → Default Audio Devices, get a "saved" confirmation, but settings revert.
**Cause**: Known bug in some Meetily versions where device preferences don't persist to storage.
**Solution**: Update to the latest version (check GitHub releases). As a workaround, set your preferred audio device as the system default in OS settings instead of relying on Meetily's in-app device selector.
