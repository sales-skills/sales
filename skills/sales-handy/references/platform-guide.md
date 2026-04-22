# Handy Platform Reference

## Platform overview

Handy is a free, open-source, cross-platform speech-to-text desktop application built with Tauri (Rust + React/TypeScript). It converts speech to text using local STT models (OpenAI Whisper or NVIDIA Parakeet) and auto-pastes the result into the active application. Positioned as "the most forkable STT app" — optimized for developer extensibility over polish. 20.4k GitHub stars, 1.7k forks, MIT-compatible license.

**Target audience**: Developers, privacy-conscious users, anyone wanting free offline dictation without subscriptions or cloud dependency.

**Key differentiators**:
- Free, open-source — no subscription, no credits, no usage limits
- Dual STT engine: Whisper (GPU-accelerated) + Parakeet V3 (CPU-only with auto language detection)
- Cross-platform: macOS (Intel + Apple Silicon), Windows (x64), Linux (x64)
- Tauri-based (Rust backend) — lighter than Electron alternatives
- CLI flags for headless/automated operation
- Voice Activity Detection (Silero VAD) filters silence automatically

## How dictation works

1. Press the global keyboard shortcut (configurable)
2. Speak — Silero VAD filters silence, only speech segments are processed
3. Release the shortcut (push-to-talk mode) or press again (toggle mode)
4. STT model transcribes the audio locally
5. Text auto-pastes into the active application

**Push-to-talk mode** (default): Hold shortcut → speak → release.
**Toggle mode**: Press shortcut to start → speak → press again to stop.

**Important**: Handy outputs raw STT text. There is no LLM post-processing, no grammar correction, and no context-aware formatting. What the STT model outputs is what gets pasted.

## STT models

### Whisper (OpenAI)

GPU-accelerated speech recognition. Multiple model sizes with accuracy/speed trade-offs:

| Model | Size | Speed | Accuracy | GPU required? |
|---|---|---|---|---|
| Small | ~500 MB | Fast | Good | Recommended |
| Medium | ~1.5 GB | Moderate | High | Recommended |
| Turbo | ~1.5 GB | Fast | Near-Large | Recommended |
| Large | ~3 GB | Slow | Highest | Required |

**Known issue**: Whisper models crash on certain Windows and Linux GPU configurations. This is a known bug with a "help wanted" label.

### Parakeet V3 (NVIDIA)

CPU-optimized speech recognition — no GPU required:

- ~5x real-time speed on mid-range hardware
- Automatic language detection (no manual language selection needed)
- Efficient for laptops and machines without dedicated GPUs
- V2 also available as fallback

**Recommendation**: Use Parakeet V3 on CPU-only machines or as fallback when Whisper crashes. Use Whisper Turbo on GPU machines for best accuracy/speed balance.

## Voice Activity Detection (Silero VAD)

Handy uses Silero's Voice Activity Detection to filter silence before STT processing:
- Only speech segments are sent to the STT model
- Reduces processing time and improves accuracy
- Sensitivity is configurable in settings
- Prevents empty/noise transcriptions

## Installation

### macOS
```
brew install --cask handy
```
Or download .dmg from [handy.computer](https://handy.computer) or GitHub releases.

Requirements:
- Microphone access permission
- May need System Settings → Privacy & Security → "Open Anyway" for unsigned builds
- Intel and Apple Silicon (universal binary)

### Windows
```
winget install cjpais.Handy
```
Or download installer from GitHub releases.

Requirements:
- WebView2 runtime (ships with Windows 11, may need manual install on Windows 10)
- x64 only

### Linux
Download from GitHub releases. x64 only.

Requirements:
- `wtype` (Wayland) or `dotool` for text pasting
- Recording overlay disabled by default due to compositor focus issues
- Limited Wayland support

## Configuration

- **Keyboard shortcut**: Configurable global hotkey for push-to-talk activation
- **Model selection**: Switch between Whisper variants and Parakeet V3
- **VAD sensitivity**: Adjust Voice Activity Detection threshold
- **Recording overlay**: Visual indicator during recording (disabled on Linux by default)
- **Output method**: Direct typing or clipboard paste
- **Push-to-talk vs toggle**: Choose activation mode

Settings accessible via app UI. Debug mode: `Cmd+Shift+D` (macOS) or `Ctrl+Shift+D` (Windows/Linux).

## CLI flags

Handy supports command-line flags for automation and headless operation:

### Remote control (send to running instance)
- `--toggle-transcription` — Start/stop recording
- `--toggle-post-process` — Toggle with post-processing
- `--cancel` — Cancel current transcription

### Startup flags
- `--start-hidden` — Launch without visible window (tray-only)
- `--no-tray` — Disable system tray icon
- `--debug` — Enable verbose logging
- `--help` — Show all available flags

These flags enable integration with external scripts, hotkey daemons, or automation tools.

## Pricing and limits

| Feature | Free (only tier) |
|---|---|
| All STT models (Whisper + Parakeet) | Unlimited |
| Push-to-talk dictation | Unlimited |
| Voice Activity Detection | Yes |
| Cross-platform (macOS/Windows/Linux) | Yes |
| CLI remote control | Yes |
| Custom keyboard shortcuts | Yes |

**Handy is completely free** — no paid tiers, no credits, no usage caps. Open-source.

## Integrations

**None.** Handy is a local desktop application with no native integrations:
- No API (REST, GraphQL, or otherwise)
- No webhooks
- No CRM connectors
- No Zapier/Make support
- No MCP server

The only external control surface is CLI flags for remote control of a running instance.

## System requirements

- **Storage**: ~100 MB app + 500 MB–3 GB per STT model downloaded
- **RAM**: 8 GB minimum, 16 GB recommended for Large models
- **GPU**: Optional but recommended for Whisper models (CUDA or Metal)
- **CPU**: Any modern x64 or ARM64 processor. Parakeet V3 runs well on CPU-only machines.

## Known issues (from GitHub Issues and HN discussion)

### Critical
- **Bluetooth headset latency** — 1-2 second delay before transcription starts with wireless audio devices. Developer acknowledged: "Bluetooth devices does not work super well at the moment."
- **Whisper crashes on certain GPU configs** — Windows and Linux users report crashes when loading Whisper models. Help wanted.

### Platform-specific
- **macOS Tahoe beta crashes** — reported on Tahoe 26.3 Beta 1
- **Windows WebView2 dependency** — not documented, causes silent failure on Windows 10 without WebView2
- **Linux text pasting** — requires `wtype` (Wayland) or `dotool`, not auto-detected
- **Linux recording overlay** — disabled by default due to compositor focus stealing

### Feature requests (not shipped)
- Custom dictionary/vocabulary for company names and technical terms
- Confidence scoring for uncertain words
- iOS application
- Meeting transcription mode (continuous recording)
- Text editing/correction after transcription
- Less capitalization/punctuation options
- Direct piping to Claude Code
- Command execution on Linux

## Developer information

**GitHub**: github.com/cjpais/Handy
**Tech stack**: Tauri (Rust backend + React/TypeScript frontend + TailwindCSS)
**Build**: See `BUILD.md` in repository
**Contributing**: See `CONTRIBUTING.md` in repository
**Stars**: 20.4k | **Forks**: 1.7k | **Open issues**: ~70 | **Commits**: 663+
