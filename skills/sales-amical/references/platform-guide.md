# Amical Platform Reference

## Platform overview

Amical is an open-source, local-first AI dictation application built with Electron + Next.js + TypeScript. It converts speech to text using Whisper models running locally, then uses an LLM (Ollama or OpenRouter) to apply context-aware formatting — adapting tone and structure based on which application is active (professional for Gmail, casual for Slack, clean for Cursor). Positioned as the free, privacy-first alternative to Wispr Flow ($20/mo) and Superwhisper.

**GitHub**: amicalhq/amical, 1.2k stars, MIT license, 423 commits, v1.2.0 (April 2026)
**Tech stack**: TypeScript (80.4%), C# (8.9%), Swift (7.3%), Electron, Next.js, TailwindCSS, Shadcn UI, Turborepo monorepo
**Target audience**: Professionals wanting faster text input via voice, developers, multilingual users, privacy-conscious users who don't want dictation data in the cloud

**Key differentiators**:
- Free and open-source (MIT license) — no subscription, no credits, no usage limits
- Local-first: Whisper runs on-device, no cloud required for STT
- Context-aware: LLM detects active app and adjusts formatting (professional email vs casual chat vs code comment)
- Model-flexible: choose Whisper model size (Tiny → Large v3) and LLM provider (Ollama local vs OpenRouter cloud)
- Multi-platform: Mac, Windows, iOS beta, Android beta

## How dictation works

1. Hold the `fn` key (or custom hotkey)
2. Speak naturally — Whisper transcribes locally in real-time
3. Release the key
4. LLM formats the text (grammar, punctuation, tone based on active app)
5. Formatted text auto-pastes into the active application

This is **push-to-talk dictation**, not continuous meeting recording. For passive meeting transcription, use Meetily, Char, or a dedicated note-taker.

## Key modules

### Speech-to-Text (Whisper)

Local Whisper models with no internet requirement:

| Model | Size | Use Case |
|---|---|---|
| Tiny | ~78 MB | Fastest, lower accuracy |
| Base | ~148 MB | Balanced speed and accuracy |
| Small | ~488 MB | Good accuracy for most use cases |
| Medium | ~1.5 GB | High accuracy |
| Large v3 | ~3.1 GB | Highest accuracy |
| Large v3 Turbo | ~1.5 GB | Near Large v3 accuracy at faster speed |

Setup: Settings → AI Models → Speech → download model → select via radio button. Multiple models can be downloaded and switched at any time.

### Text formatting (LLM)

Post-processing via LLM for grammar correction, filler removal, and context-aware formatting:

- **Ollama**: Run local LLMs on your machine for fully offline formatting. No API key needed.
- **OpenRouter**: Access cloud LLMs with your own API key. Routes to various providers.

Configuration: Settings → AI Models → choose provider.

**Without an LLM configured, you get raw Whisper output only** — no formatting, no grammar correction, no context adaptation.

### Context-aware formatting

When an LLM is configured, Amical detects the active application and adjusts output:
- **Gmail / email clients**: Professional tone, proper salutation/closing
- **Slack / Discord**: Casual tone, appropriate emoji usage
- **Cursor / IDE**: Clean code comments, technical phrasing
- **Instagram / social**: Casual with contextual emojis
- **Notion / docs**: Structured paragraphs, proper formatting
- **WhatsApp**: Conversational, brief

### Custom vocabulary

Add industry-specific terminology, proper nouns, and jargon that Whisper might otherwise miss or misspell. Configured in Settings.

### Voice commands (planned)

MCP (Model Context Protocol) integration for voice-controlled app commands — e.g., "Send hi to Jane on WhatsApp." Listed as planned, not shipped as of April 2026.

### Desktop widget

Floating widget for quick dictation without leaving the active app. Customizable hotkeys beyond the default `fn` key.

### Multi-language support

100+ languages and dialects via Whisper. Language auto-detection by default, with a feature request (#121) for dedicated shortcuts to bypass auto-detect for specific languages.

### Transcription history

Searchable history of past dictations with export capability.

## Pricing and limits

| Feature | Free (only tier) |
|---|---|
| Whisper STT (all model sizes) | Unlimited |
| Context-aware formatting | Yes (requires LLM) |
| Custom vocabulary | Yes |
| Multi-language (100+) | Yes |
| Desktop widget | Yes |
| Custom hotkeys | Yes |
| Transcription history | Yes |
| macOS + Windows | Yes |
| iOS / Android | Beta |

**Amical is completely free** — no paid tiers, no credits, no usage caps. The MIT license allows commercial use.

## Platform availability

- **macOS**: Stable release. Install via `brew install --cask amical` or download .dmg.
- **Windows**: Stable release. Download installer from website.
- **iOS**: Private beta (apply via website).
- **Android**: Private beta (apply via website).
- **Linux**: Not available (not on roadmap currently).

## System requirements

- macOS: requires microphone access + accessibility access permissions
- macOS security workaround: may need System Settings → Privacy & Security → "Open Anyway"
- Storage: ~200 MB app + 78 MB–3.1 GB per Whisper model downloaded
- RAM: 8 GB minimum, 16 GB recommended for Large v3

## Integrations

**Context-aware pasting** (not API integrations): Gmail, Slack, Notion, Discord, Cursor, Instagram, WhatsApp, Jira. Amical detects the active app and formats accordingly — it pastes into any application via OS-level text insertion.

**No native integrations**: No CRM connectors, no Zapier, no webhooks, no API.

## API status

**No public API.** No REST, no GraphQL, no webhooks, no developer portal. Amical is a local desktop application. Transcription history is only accessible through the app UI.

**No MCP server** for external tools (the MCP integration is for voice commands, not for exposing Amical data to other tools).

## Data storage

All data stored locally on device. No cloud sync. No data sent to external servers unless OpenRouter is configured for LLM (in which case only the text formatting request goes to the cloud — raw audio stays local).

## Workflow setup

### Fully local (air-gapped) setup
1. Install Amical (`brew install --cask amical` on macOS)
2. Grant microphone + accessibility permissions
3. Download a Whisper model (Settings → AI Models → Speech)
4. Install and configure Ollama for local LLM formatting
5. Hold `fn`, speak, release — text pastes into active app
6. Zero cloud dependency

### Cloud-enhanced setup
1. Install Amical
2. Download a Whisper model (STT stays local)
3. Add OpenRouter API key (Settings → AI Models) for cloud LLM formatting
4. Context-aware formatting uses cloud LLM — only formatted text requests go to cloud, raw audio stays local

## Known issues (from GitHub Issues, 33 open)

### Bugs
- **Can't change microphones** (#137) — in-app mic selector doesn't work on some systems
- **Notification sound timing** (#122) — sound plays at wrong time when mic is enabled
- **Japanese text formatting** (#111, #88) — unintended style/language changes, punctuation issues
- **Recording sound effects muted** (#105) — sound effects don't play when system audio muting is disabled
- **macOS clipboard handling** (#76) — clipboard content may not be preserved after paste
- **Non-QWERTY keyboard layouts** (#89) — shortcut keys conflict with non-standard layouts
- **Multi-monitor widget placement** (#106) — widget doesn't position correctly across monitors

### Requested features (not shipped)
- Real-time meeting transcription (#65)
- Custom system prompts for LLM formatting (#90)
- Auto-learn vocabulary from transcription history (#61)
- Moonshine Voice model support (#101)
- Intel NPU acceleration (#103)
- Dedicated language shortcuts (#121)
- Double-press shortcut keys (#118)
- Compact icon-only sidebar (#133)
- Hide main window on startup (#98)
- Preserve clipboard after pasting (#100)
