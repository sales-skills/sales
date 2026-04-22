---
name: sales-amical
description: "Amical platform help — open-source, local-first AI dictation app with Whisper STT, context-aware formatting, Ollama/OpenRouter LLM, MCP voice commands, and 100+ language support (MIT license). Use when setting up Amical on macOS or Windows for the first time, choosing between Whisper model sizes for accuracy vs speed, configuring Ollama for fully offline text formatting, context-aware formatting not adapting to the active application, microphone not switching or audio input issues, custom vocabulary not recognizing industry terminology, comparing Amical to Wispr Flow or Superwhisper for privacy-first dictation, or setting up voice commands with MCP integrations. Do NOT use for picking between meeting note-takers generally (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe your Amical question — setup, models, dictation, formatting, etc.]"
license: MIT
version: 1.0.0
tags: [sales, dictation, voice-to-text, open-source, privacy, local-first, platform]
github: "https://github.com/amicalhq/amical"
---

# Amical Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Installing Amical or first-time setup (macOS / Windows)
   - B) Whisper model selection (Tiny through Large v3 Turbo)
   - C) LLM configuration for text formatting (Ollama local vs OpenRouter cloud)
   - D) Context-aware formatting not working or wrong tone
   - E) Microphone switching or audio input issues
   - F) Custom vocabulary for industry terminology
   - G) Voice commands and MCP integrations
   - H) Comparing Amical to other dictation tools
   - I) Multi-language dictation or non-English issues

2. **Which platform are you on?**
   - A) macOS
   - B) Windows
   - C) iOS (beta)
   - D) Android (beta)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Amical to meeting note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — Amical platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, Whisper models, LLM providers, context-aware formatting, voice commands, MCP integration.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**First-time setup priority**: Install via `brew install --cask amical` (macOS) or download installer (Windows) → grant microphone + accessibility permissions → hold `fn` key and speak → text auto-pastes into active app.

**Model selection**: Tiny (78 MB) for speed-first. Base (148 MB) for balanced. Small (488 MB) for most users. Medium (1.5 GB) for high accuracy. Large v3 Turbo (1.5 GB) for near-max accuracy at faster speed. Large v3 (3.1 GB) for highest accuracy.

**Fully offline setup**: Download a Whisper model + configure Ollama for local LLM text formatting. No cloud calls, no API keys needed.

**Context-aware formatting**: Requires an LLM model configured (Ollama or OpenRouter). Without it, you get raw transcription only — no tone/format adaptation.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

- **Context-aware formatting requires LLM configuration** — many users expect formatting to work out of the box. Without Ollama or OpenRouter configured, Amical outputs raw Whisper transcription with no formatting, grammar correction, or tone adaptation.
- **Cannot switch microphones in-app (GitHub #137)** — the microphone selection UI doesn't work on some systems. Workaround: set preferred mic as system default in OS settings.
- **Japanese and non-English text formatting issues** — reported style/language changes (#111) and punctuation insertion problems (#88) for CJK languages. English formatting is most reliable.
- **Non-QWERTY keyboard layouts may conflict** — shortcut keys can collide with non-standard layouts (#89). Test your hotkey configuration after setup.
- **Real-time meeting transcription is planned, not shipped** — Amical is a dictation tool (hold-to-speak), not a continuous meeting recorder. If you need passive meeting recording, use a dedicated note-taker (Fathom, Meetily, Char).
- **No public API, no webhooks, no CRM integration** — Amical is a local desktop app. No programmatic access to transcription history beyond the app UI.
- **MCP voice commands are planned, not shipped** — the MCP integration for "say a command and it happens" is on the roadmap but not yet available.

## Related skills

- `/sales-note-taker` — Comparing Amical to meeting note-takers (Fathom, Fireflies, Avoma, Gong, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-meetily` — Meetily: MIT-licensed open-source meeting assistant with Whisper/Parakeet transcription
- `/sales-char` — Char: GPL-3.0 open-source bot-free AI meeting notepad with plugin SDK
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up fully offline dictation
**User says**: "I need voice-to-text that works 100% offline — no data leaving my machine."
**Skill does**:
1. Confirms Amical is free and MIT-licensed, runs entirely local
2. Guides through Whisper model download (recommends Small or Large v3 Turbo)
3. Configures Ollama as the LLM provider for context-aware text formatting
4. Tests with fn key hold → speak → release in a text editor
5. Notes that context-aware formatting (Gmail vs Slack tone) requires the LLM step
**Result**: Fully air-gapped dictation with intelligent formatting.

### Example 2: Context-aware formatting not working
**User says**: "I dictate into Gmail but the text isn't formatted professionally — it's just raw transcription."
**Skill does**:
1. Checks if an LLM provider is configured (Settings → AI Models)
2. Context-aware formatting is powered by the LLM, not the STT model
3. Guides through Ollama setup for local formatting or OpenRouter for cloud
4. Tests dictation in Gmail vs Slack to verify different tone adaptation
**Result**: Professional formatting in Gmail, casual in Slack, confirmed working.

### Example 3: Comparing Amical to Wispr Flow
**User says**: "Should I use Amical or Wispr Flow for daily dictation?"
**Skill does**:
1. Compares: Amical (free, open-source, local-first, MIT) vs Wispr Flow ($20/mo, cloud-based, polished UX)
2. Amical wins on: price (free), privacy (fully local), customization (Whisper model choice, LLM choice)
3. Wispr Flow wins on: polish (easier setup), cross-device sync, snippets/dictionary, consistent accuracy
4. Recommends Amical if privacy and cost matter most; Wispr Flow if UX polish and cloud sync matter
**Result**: Clear decision framework based on priorities.

## Troubleshooting

### Microphone not switching
**Symptom**: Selected a different microphone in Amical settings but it still uses the default.
**Cause**: Known bug (GitHub #137) — in-app microphone selection doesn't work on some systems.
**Solution**: Set preferred microphone as the system default in macOS System Settings → Sound → Input or Windows Settings → Sound → Input. Amical will use the OS default.

### Text not formatting or adapting to context
**Symptom**: Dictated text appears as raw transcription — no grammar correction, no tone adaptation for the active app.
**Cause**: No LLM provider configured. Context-aware formatting requires an AI model for post-processing.
**Solution**: Go to Settings → AI Models. Configure Ollama for local processing or add an OpenRouter API key for cloud LLMs. After configuration, dictate again — text should adapt to the active app context.

### Non-English transcription quality poor
**Symptom**: Transcription in Japanese, German, or other non-English languages has errors, wrong punctuation, or style changes.
**Cause**: Non-English language processing is less mature than English in both Whisper and the LLM formatting layer.
**Solution**: Use Whisper Large v3 (highest multilingual accuracy). For the LLM, use a model with strong multilingual support (e.g., GPT-4 via OpenRouter). For Japanese specifically, dedicated language shortcuts (GitHub #121) are a requested feature — not yet available.
