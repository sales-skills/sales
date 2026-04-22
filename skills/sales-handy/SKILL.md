---
name: sales-handy
description: "Handy platform help — open-source, cross-platform speech-to-text desktop app with Whisper and Parakeet STT engines, push-to-talk voice-to-text, GPU acceleration, and Voice Activity Detection (MIT license, 20k+ GitHub stars). Use when setting up Handy on macOS, Windows, or Linux for the first time, choosing between Whisper and Parakeet models for accuracy vs speed, Bluetooth headset causing delayed transcription start, Handy crashing on startup or after macOS update, push-to-talk shortcut not working or conflicting with other apps, comparing Handy to Amical or Wispr Flow or Superwhisper for offline dictation, configuring Voice Activity Detection sensitivity, or running Handy headless with CLI flags for automation. Do NOT use for picking between meeting note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Handy question — setup, models, Bluetooth, shortcuts, etc.]"
license: MIT
version: 1.0.0
tags: [sales, dictation, voice-to-text, open-source, privacy, local-first, platform]
github: "https://github.com/cjpais/Handy"
---

# Handy Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Installing Handy or first-time setup (macOS / Windows / Linux)
   - B) Choosing between Whisper and Parakeet STT models
   - C) Bluetooth headset latency or audio input issues
   - D) Push-to-talk shortcut configuration or conflicts
   - E) Voice Activity Detection (VAD) sensitivity tuning
   - F) Running Handy headless or via CLI flags
   - G) Comparing Handy to other dictation tools
   - H) Crashes or startup issues

2. **Which platform are you on?**
   - A) macOS (Intel or Apple Silicon)
   - B) Windows (x64)
   - C) Linux (x64)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Handy to meeting note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — Handy platform reference

**Read `references/platform-guide.md`** for the full platform reference — STT models, installation, CLI flags, VAD configuration, known issues.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**First-time setup priority**: Install via `brew install --cask handy` (macOS), `winget install cjpais.Handy` (Windows), or download from GitHub releases (Linux) → grant microphone permissions → press global shortcut (default: configurable) → speak → release → text pastes into active app.

**Model selection**: Parakeet V3 for CPU-only machines (fast, auto language detection). Whisper Turbo for GPU machines (best accuracy/speed balance). Whisper Large for maximum accuracy when speed is not critical.

**Bluetooth fix**: If using wireless headphones (AirPods, etc.), expect 1-2s delay on first activation. Switch to a wired mic or USB mic for latency-sensitive use.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about platform limitations and OS-specific issues that may be outdated.*

- **Bluetooth headsets cause 1-2 second transcription delay** — the most reported issue. AirPods and other Bluetooth audio devices add latency before recording starts. Use a wired or USB microphone for instant response.
- **No custom dictionary support** — Whisper has no built-in vocabulary override. Company names, technical jargon, and proper nouns may be mis-transcribed. No workaround exists today (feature request).
- **Whisper models crash on certain Windows/Linux configs** — GPU-accelerated Whisper fails on some hardware. Fall back to Parakeet V3 (CPU-only) if Whisper crashes.
- **Linux support has compositor issues** — recording overlay is disabled by default on Linux. Wayland requires `wtype` or `dotool` for text pasting.
- **No API, no integrations, no CRM** — Handy is a local desktop app only. No webhooks, no Zapier, no CRM connectors. CLI flags (`--toggle-transcription`) are the only external control surface.
- **No LLM post-processing** — unlike Amical, Handy outputs raw STT text with no grammar correction or context-aware formatting. What Whisper/Parakeet outputs is what you get.

## Related skills

- `/sales-note-taker` — Comparing Handy to meeting note-takers (Fathom, Fireflies, Avoma, Gong, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-amical` — Amical: MIT-licensed open-source AI dictation with context-aware LLM formatting (closest competitor)
- `/sales-meetily` — Meetily: MIT-licensed open-source meeting assistant with Whisper/Parakeet transcription
- `/sales-char` — Char: GPL-3.0 open-source bot-free AI meeting notepad with plugin SDK
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up offline dictation on macOS
**User says**: "I want free voice-to-text on my Mac that works completely offline — no cloud."
**Skill does**:
1. Confirms Handy is free, open-source, and fully local — no internet required
2. Guides through `brew install --cask handy` and microphone permission grant
3. Recommends Parakeet V3 for CPU-only Macs or Whisper Turbo for Apple Silicon with GPU
4. Tests push-to-talk: press shortcut → speak → release → text pastes into active app
5. Notes there's no LLM formatting — if user wants grammar correction, suggests Amical as alternative
**Result**: Working offline dictation with model recommendation.

### Example 2: Bluetooth delay with AirPods
**User says**: "There's a 1-2 second delay before Handy starts transcribing when I use my AirPods."
**Skill does**:
1. Confirms this is a known Bluetooth latency issue acknowledged by the developer
2. Explains Bluetooth audio switches to SCO codec for microphone input, adding latency
3. Recommends switching to a wired or USB microphone for instant response
4. If wireless is mandatory, suggests starting transcription slightly before speaking
**Result**: Clear explanation and workaround for Bluetooth latency.

### Example 3: Comparing Handy to Amical
**User says**: "Should I use Handy or Amical for daily dictation?"
**Skill does**:
1. Compares: Handy (20k stars, Tauri/Rust, Whisper + Parakeet, cross-platform) vs Amical (1.2k stars, Electron, Whisper only, context-aware formatting)
2. Handy wins on: cross-platform (Linux support), STT engine choice (Parakeet V3 CPU option), larger community, lighter resource usage (Tauri vs Electron)
3. Amical wins on: LLM-powered context-aware formatting (Gmail vs Slack tone), grammar correction, custom vocabulary
4. Recommends Handy if raw speed and cross-platform matter; Amical if intelligent formatting matters
**Result**: Clear decision framework based on priorities.

## Troubleshooting

### Bluetooth headset delay
**Symptom**: 1-2 second pause before transcription begins when using wireless headphones.
**Cause**: Bluetooth audio switches to SCO (Synchronous Connection-Oriented) mode for microphone input, which adds latency as the codec negotiation happens.
**Solution**: Use a wired microphone or USB headset. If Bluetooth is required, start the push-to-talk shortcut 1-2 seconds before speaking. The developer has acknowledged this as a known limitation.

### Handy crashes on startup
**Symptom**: App crashes immediately or after selecting a Whisper model, especially on macOS Tahoe betas or certain Windows/Linux GPU configurations.
**Cause**: GPU-accelerated Whisper model initialization fails on unsupported hardware or beta OS versions.
**Solution**: Try Parakeet V3 (CPU-only, no GPU dependency). On macOS, check System Settings → Privacy & Security → "Open Anyway" if the app is blocked. On Windows, ensure WebView2 runtime is installed. Run with `--debug` flag to capture crash logs for GitHub issues.

### Text not pasting into active application (Linux)
**Symptom**: Transcription completes but text doesn't appear in the target application.
**Cause**: Linux Wayland compositors don't support the same text injection methods as X11. The recording overlay is disabled by default on Linux due to compositor focus issues.
**Solution**: Install `wtype` (Wayland) or `dotool` for text pasting support. If using X11, text pasting should work out of the box. Check that Handy has the necessary input permissions.
