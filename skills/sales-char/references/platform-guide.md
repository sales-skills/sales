# Char Platform Reference

## Platform overview

Char (formerly Hyprnote, rebranded February 2026) is an open-source, local-first AI meeting notepad built with Tauri (Rust backend + React/TypeScript frontend). It captures system audio without joining meetings as a bot participant, generates real-time transcription, and produces AI-powered summaries stored as plain markdown files. Positioned for privacy-conscious professionals who want full data ownership. YC S25 company. GitHub: 8.3k stars, GPL-3.0 license.

**Target audience**: Knowledge workers, sales teams, engineers, consultants, researchers, journalists, and compliance-conscious organizations prioritizing privacy and data ownership.

**Key differentiators**:
- Bot-free: captures system audio directly, no meeting participant added
- Local-first: all data stored locally in SQLite + markdown files
- Open-source: full codebase inspectable, GPL-3.0
- Provider-flexible: 10 cloud STT providers, multiple LLM options, or fully local
- Markdown-native: notes are .md files, not a proprietary database

## Key modules

### Audio capture
- System audio tap — captures all audio going in and out of the computer
- No meeting bot, no calendar guests required
- Supports Zoom, Google Meet, Microsoft Teams, Webex
- Audio file import for processing existing recordings
- Audio player with playback rate controls (Lite+)

### Transcription
**Local STT**:
- Cactus engine — on-device, no API keys, fully offline
- Other local models via documentation at `/docs/developers/local-models/`

**Cloud STT providers (10 supported, BYOK)**:
- Deepgram, AssemblyAI, Soniox, Fireworks, OpenAI (batch), Gladia, ElevenLabs, DashScope/Qwen3-ASR, Mistral/Voxtral, pyannoteAI (batch)
- 45+ languages supported across providers

### AI summarization
- **OpenRouter**: cloud LLM routing with zero data retention (ZDR), routes to OpenAI/Anthropic/Google providers that don't retain data
- **BYOK**: direct API keys for OpenAI, Anthropic Claude, Google Gemini, Azure OpenAI, Azure AI Foundry
- **Local**: Ollama, LM Studio for fully offline summarization
- Custom templates for summary format

### Charlie (Beta)
AI assistant that answers questions about your notes and drafts follow-ups.

### Search
Tantivy (Rust full-text search engine) indexes notes locally. Documents indexed automatically during creation and editing.

### Sharing (Pro)
- Shareable links with DocSend-like controls
- View tracking (who viewed, when)
- Expiration dates
- Revoke access anytime

## Pricing and limits

| Feature | Free | Lite ($8/mo) | Pro ($25/mo or $250/yr) | Team (custom) |
|---|---|---|---|---|
| On-device transcription | Yes | Yes | Yes | Yes |
| Audio recordings + player | Yes | Yes | Yes | Yes |
| BYOK (bring your own key) | Yes | Yes | Yes | Yes |
| Export | Yes | Yes | Yes | Yes |
| Chat (Charlie) | Yes | Yes | Yes | Yes |
| Templates | Yes | Advanced | Advanced | Advanced |
| Contacts + calendar view | Yes | Yes | Yes | Yes |
| Transcript editor | Yes | Yes | Yes | Yes |
| Cloud STT + LLM | No | Yes | Yes | Yes |
| Speaker identification | No | Yes | Yes | Yes |
| Playback rate controls | No | Yes | Yes | Yes |
| Integrations | No | Yes | Yes | Yes |
| Folders view | No | Yes | Yes | Yes |
| Cloud sync | No | Yes | Selective | Selective |
| Shareable links | No | Yes | Advanced controls | Advanced controls |
| View tracking + expiration | No | No | Yes | Yes |
| Team features | No | No | No | Yes |
| Google Calendar | No | No | Yes | Yes |

**Platform availability**: macOS only (public beta). Windows and Linux scheduled Q2 2026.

**System requirements**: macOS 12.0+, Apple Silicon or Intel, 8GB RAM minimum (16GB recommended for local AI), ~200MB app + 50-100MB per hour of recordings, 5GB free space recommended.

## Integrations

**Current**:
- Apple Calendar / Google Calendar (Pro)
- Apple Contacts
- Obsidian (via local-rest-api community plugin)
- Markdown editors (VS Code, any .md-compatible app)

**Coming soon** (on roadmap, not shipped):
- HubSpot, Salesforce, Slack, Notion

**Meeting platforms**: Zoom, Google Meet, Microsoft Teams, Webex

## Developer features

### CLI (`char` command)
```
char [--no-color] [-v] [-q] [-h] [-V] <command>
```
- `char completions <SHELL>` — generate shell completions
- `char desktop` — open the desktop app or download page
- `char db [--base <DIR>] [--db-path <FILE>] <command>` — manage desktop SQLite data
  - `char db templates list` — list templates
  - `char db templates get <ID>` — fetch template by id
  - `char db templates upsert --id <ID> --title <TITLE> --sections-json <JSON>` — insert or update
  - `char db templates delete <ID>` — delete template

### Automation hooks
Config: `$HOME/Library/Application Support/hyprnote/hooks.json`

```json
{
  "version": 0,
  "hooks": {
    "afterListeningStopped": [{ "command": "./hooks/demo.sh" }],
    "beforeListeningStarted": [{ "command": "./hooks/setup.sh" }]
  }
}
```

Available events:
- `afterListeningStopped` — fires when recording stops
- `beforeListeningStarted` — fires when recording begins

Command-line args passed to scripts: `--resource-dir`, `--app-hyprnote`, `--app-meeting`

Multiple commands per event execute in parallel.

### Plugin SDK
Plugins add custom tabs to Char's UI. Structure:
- `plugin.json` — manifest (id, name, version, main)
- `dist/main.js` — IIFE bundle

Registration: `window.__char_plugins.register(id, { onload(ctx), onunload() })`

PluginContext API:
- `ctx.registerView(viewId, factory)` — register a React view
- `ctx.openTab(pluginId?, state?)` — open a tab programmatically

Globals: `window.__char_react` (shared React), `window.__char_plugins`

Install path (macOS): `~/Library/Application Support/com.hyprnote.dev/plugins/`

51 built-in plugins in the repository covering: audio, transcription, calendar, contacts, search, git, export, notifications, templates, and more.

### Deeplinks
Native deep-linking support documented at `/docs/developers/deeplinks/`.

### MCP server
Currently used for in-app support chat (GitHub issue search + Stripe billing). Not yet exposed as a general-purpose MCP server for external tools.

## API status

**Public REST API**: Marked "coming soon" on docs. Not available for external integrations.

**Current programmatic access**:
- CLI `char db` commands for template CRUD
- Automation hooks for event-driven scripts
- Plugin SDK for UI extensions
- Direct SQLite database access (local file)

## Data storage

- All notes, transcripts, and data stored locally in SQLite database
- Notes exported as plain markdown (.md) files
- Audio recordings stored locally
- Cloud sync (Lite+) is optional — select which notes to sync on Pro
- Tantivy full-text search index maintained locally

## Workflow setup

### Fully local (air-gapped) setup
1. Install Char from char.com (macOS)
2. Grant audio permissions (System Settings → Privacy & Security → Microphone)
3. Select Cactus as STT provider (Settings → Transcription)
4. Configure Ollama as LLM provider (Settings → Intelligence)
5. Test with a short recording
6. Notes stored locally as .md files — zero cloud dependency

### Cloud-enhanced setup (Lite plan)
1. Install and sign up for Lite ($8/mo)
2. Cloud STT auto-configured (Deepgram default)
3. Speaker identification enabled
4. Cloud sync for cross-device access
5. Shareable links for team collaboration

### Automation via hooks
1. Create hooks directory: `mkdir -p ~/hooks`
2. Write script (e.g., `~/hooks/post-meeting.sh`) that processes `--resource-dir`
3. Configure `hooks.json` at `~/Library/Application Support/hyprnote/hooks.json`
4. Script runs automatically after each recording stops
