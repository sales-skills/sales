# Meetily Platform Reference

## Platform overview

Meetily (Meetly AI) is an open-source, privacy-first AI meeting assistant that records, transcribes, and summarizes meetings with 100% local processing. Built by Zackriya Solutions, it positions itself as the self-hosted alternative to Otter.ai, Fireflies.ai, Granola, and Fathom. MIT licensed with 121K+ downloads and 11K+ GitHub stars. Bot-free recording via system audio capture — no visible bot joins meetings.

**Target audience**: Privacy-conscious teams, healthcare/legal/financial/government orgs needing GDPR/HIPAA compliance, developers wanting extensibility, enterprises requiring self-hosted infrastructure.

## Key modules

### Transcription engine
- **Parakeet Lightning** (NVIDIA) — 4x faster than Whisper, English-focused, recommended default
- **Whisper models** (OpenAI via Whisper.cpp) — tiny, base, small, medium, large-v3. 95%+ accuracy for clear English audio. 99+ language support.
- Hardware acceleration: Apple Silicon Metal + CoreML on macOS, NVIDIA CUDA on Windows/Linux, AMD/Intel Vulkan
- Speaker diarization for multi-speaker meetings

### AI summarization
- **Ollama** — fully local LLM summarization (no internet required)
- **Claude** (Anthropic) — cloud summarization via API key
- **Groq** — fast cloud inference
- **OpenRouter** — access to multiple models
- **Custom endpoint** — any OpenAI-compatible API (LM Studio, Open WebUI, vLLM)

### Audio capture
- Bot-free system audio recording (captures all meeting platforms)
- Simultaneous microphone + system audio with intelligent ducking
- Clipping prevention
- Works with: Zoom, Google Meet, Microsoft Teams, Discord, Slack Huddles, Webex, any audio source

### Audio/video import
- 10+ format support: MP4, WAV, MP3, FLAC, and more
- Drag-and-drop import with automatic chunked transcription
- Retranscription — re-process any meeting with a different provider, model, or language

### Summary templates
- Create, edit, duplicate, import, and export custom templates
- Customizable output structure

### Export
- Markdown, Word (DOCX), PDF, plain text
- Search and replace across transcripts and summaries

## Pricing and limits

| Plan | Price | Key features |
|---|---|---|
| Community | Free (MIT license) | Core transcription, AI summaries, local recording, open-source |
| Pro | $10/user/mo ($120/yr) | Enhanced accuracy, advanced exports, speaker identification, calendar integration, automatic meeting detection |
| Enterprise | Custom | Admin dashboard, self-hosted deployment, dedicated support, SSO, data residency options |

14-day free trial for Pro. No credit card required.

**Hardware requirements**:
- Minimum: 8GB RAM, 4-core CPU, 10GB storage, Node.js 18+, Python 3.10+, FFmpeg
- Recommended: 16GB RAM, 8-core CPU, 50GB storage, GPU acceleration, SSD

## Integrations

### Current
- LLM providers: Ollama, Claude, Groq, OpenRouter, any OpenAI-compatible endpoint
- Export: Markdown, PDF, DOCX, plain text

### Planned (not shipped yet)
- Knowledge management: Obsidian, Notion, Confluence
- Communication: Slack, Teams, Discord
- CRM: Salesforce, HubSpot
- Project management: Jira, Asana, Monday.com
- RESTful API and webhook support for custom integrations

## Local API (FastAPI)

Meetily runs a local FastAPI backend. API docs available at `http://localhost:5167/docs` (Swagger UI).

- **Base URL**: `http://localhost:5167`
- **Auth**: None (local server, no authentication required)
- **Endpoints**: Upload audio, process recordings, retrieve transcripts and summaries
- **No cloud API** — all endpoints are local only. Cannot be called from external services unless you expose the port (not recommended without additional security).

## Tech stack

| Component | Technology |
|---|---|
| Framework | Tauri (desktop app) |
| Backend | Rust (45.4%) |
| Frontend | Next.js / TypeScript (29.7%) |
| AI processing | Python / FastAPI |
| Transcription | Whisper.cpp / NVIDIA Parakeet |
| Platforms | Windows (.exe), macOS (.dmg), Linux (Docker / source) |

## Deployment options

### Desktop (standard)
- Windows: Download x64-setup.exe from GitHub releases
- macOS: Install .dmg to Applications
- Linux: Build from source or Docker

### Self-hosted enterprise
- Docker containerization
- Deploy on Azure, AWS, GCP, or on-premises
- Admin dashboard for user management (Enterprise plan)
- European data residency available

### Build from source
- Requires Rust compiler, Node.js runtime, platform-specific build tools
- See `docs/BUILDING.md` in the repository

## Compliance

- GDPR compliant by architecture (data never leaves device)
- HIPAA ready (no cloud transmission)
- SOC 2 support available (Enterprise)
- ISO 27001 alignment (Enterprise)

## Workflow setup

### First meeting recording
1. Install Meetily from GitHub releases or meetily.ai
2. Wait for Parakeet Lightning model to download (required, ~500MB)
3. Select audio input device in Settings → Recordings → Default Audio Devices
4. Join your meeting on any platform (Zoom, Meet, Teams, etc.)
5. Click Record in Meetily — it captures system audio without joining as a bot
6. Click Stop when done — transcription processes locally
7. Configure summarization provider (Settings → Provider Configuration)
8. View AI summary, transcript, and preferences in the meeting details tabs

### Fully offline setup
1. Install Meetily
2. Download Whisper model of choice (for non-English or if Parakeet isn't sufficient)
3. Install Ollama and download a local LLM (e.g., llama3, mistral)
4. Set Ollama as the summarization provider in Meetily settings
5. Disconnect from internet — Meetily works fully offline after model downloads

### Batch transcription of existing recordings
1. Open Meetily
2. Drag and drop audio/video files (MP4, WAV, MP3, FLAC, etc.)
3. Files are automatically chunked and transcribed
4. Use Retranscription to re-process with a different model or language
