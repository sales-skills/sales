<!-- Source: https://docs.plaud.ai (official, private beta) + https://github.com/arbuzmell/plaud-api (unofficial Python client) -->

# Plaud API Reference

## Official Developer Platform (private beta)

The Plaud Developer Platform at docs.plaud.ai is currently in private beta. Access requires contacting Plaud directly.

**Documented capabilities** (from docs.plaud.ai index):
- **Transcription** — convert audio to text with speaker diarization
- **File Management** — manage recordings and files
- **AI Summary** — generate structured summaries from transcripts
- **AI Workflow** — automate post-recording processing
- **Device Operation** — interact with Plaud hardware devices

**SDKs**: Android SDK, iOS SDK (Client SDK documentation available)

**Integration paths**:
1. **Embed Plaud** — integrate devices and backend pipelines into SaaS products
2. **OAuth integration** — access user Plaud accounts (waitlisted)

**OpenAPI spec**: Available in JSON format at docs.plaud.ai

**Contact for access**: developer platform page at plaud.ai/pages/developer-platform

---

## Unofficial Python Client (`plaud-api`)

**Disclaimer**: Reverse-engineered, not affiliated with Plaud Inc. Use at your own risk.

**Install**: `pip install plaud-api` (Python 3.10+)

### Authentication

Token resolution order:
1. Explicit `token=` parameter
2. `PLAUD_TOKEN` environment variable
3. `.env` file in current directory
4. `~/.config/plaud/token` file

**Obtaining a token**:
1. Visit web.plaud.ai
2. Open DevTools → Network tab
3. Find any api.plaud.ai request
4. Copy the Authorization header value (without "bearer " prefix)
5. Run `plaud auth setup`

### Endpoints

#### Recordings

| Method | Endpoint | Description |
|---|---|---|
| `client.recordings.list(limit=50)` | List recordings | Returns recent recordings, default limit 50 |
| `client.recordings.get(file_id)` | Get recording | Single recording by ID |
| `client.recordings.get_audio_url(file_id)` | Get audio URL | Returns S3 download URL |
| `client.recordings.upload(path, name=...)` | Upload file | Upload MP3/OPUS file |

#### Transcriptions

| Method | Endpoint | Description |
|---|---|---|
| `client.transcriptions.start(file_id, language="en")` | Start analysis | Begin transcription processing |
| `client.transcriptions.wait(file_id, timeout=600)` | Wait for completion | Block until transcription completes |
| `client.transcriptions.save_results(file_id, result)` | Save results | Persist transcription results |
| `client.transcriptions.get(file_id)` | Get transcript | Retrieve transcript segments |
| `client.transcriptions.get_summary(file_id)` | Get summary | Retrieve AI-generated summary |
| `client.transcriptions.get_status(file_id)` | Check status | Check analysis status |

#### Speakers

| Method | Endpoint | Description |
|---|---|---|
| `client.speakers.list()` | List speakers | All known speakers |
| `client.speakers.get_for_recording(file_id)` | Recording speakers | Speakers in a specific recording |
| `client.speakers.rename(file_id, old, new)` | Rename speaker | Rename a speaker label |

#### Tags

| Method | Endpoint | Description |
|---|---|---|
| `client.tags.list()` | List tags | All tags |
| `client.tags.get_recordings(tag_id)` | Tag recordings | Recording IDs in a tag |

### CLI Commands

```
plaud recordings list          # List recent recordings
plaud recordings get <id>      # Get recording details
plaud recordings upload <path> # Upload audio file
plaud recordings download <id> # Download recording audio
plaud transcription start <id> # Start transcription
plaud transcription status <id># Check transcription status
plaud transcription get <id>   # Get transcript
plaud transcription summary <id> # Get AI summary
plaud speakers list            # List all speakers
plaud speakers rename <id> <old> <new> # Rename speaker
plaud tags list                # List all tags
plaud auth setup               # Configure authentication
```

### Quick Example

```python
from plaud import PlaudClient

client = PlaudClient()

# List recent recordings
recordings = client.recordings.list(limit=5)

# Get transcript and summary for the latest recording
transcript = client.transcriptions.get(recordings[0].id)
summary = client.transcriptions.get_summary(recordings[0].id)

# Rename a speaker
client.speakers.rename(recordings[0].id, "Speaker 1", "John Smith")
```
