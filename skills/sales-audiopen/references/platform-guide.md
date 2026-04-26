# AudioPen Platform Reference

## Platform overview

AudioPen is a voice-to-polished-text tool built by Louis Pereira (Nicheless Inc.) that transforms spoken thoughts into structured, professional writing. Unlike pure transcription tools, AudioPen actively rewrites and restructures your speech into clean prose matching a selected style. Available on iOS, Android, Mac, Chrome extension, and web. One-time payment model (no subscription). Target audience: professionals who think out loud — consultants, writers, healthcare workers, salespeople, freelancers, commuters. Over 200,000 active users. Featured in TechCrunch, Fast Company, Product Hunt.

## Key modules

### Voice Recording
- Record directly in browser, iOS/Android app, Mac app, or Chrome extension
- Up to 15 minutes per recording (Prime)
- Free tier: 10 notes, 3 minutes each
- Audio processed server-side — requires internet connectivity
- Voice notes auto-delete after processing for privacy
- All data encrypted at rest; not used for AI model training

### AI Rewriting
- Transcribes audio, then rewrites into polished text (not just transcription)
- Multiple built-in styles: formal email, bullet points, legal prose, social media post, etc.
- Output can be significantly different from literal words spoken — this is by design
- For verbatim transcript, use the "Transcript" style option

### Custom Writing Styles
- Create personalized styles with a text description
- Upload writing samples for AudioPen to match your voice
- Apply any style to new recordings or restyle existing notes
- Styles persist across sessions

### SuperSummaries
- Combine multiple notes into a single unified document
- Select which notes to include
- AI generates a coherent summary that synthesizes all selected notes
- Useful for trip reports, project summaries, weekly digests

### Restyle
- Rewrite existing notes in a different style without re-recording
- Useful when output doesn't match expectations — try a different style
- Output varies slightly each run (non-deterministic)

### Audio File Uploads (Prime)
- Upload pre-recorded audio files for processing
- Up to 100 files per 4-week rolling window
- Max 100MB per file
- Useful for processing recordings from other devices or apps

### Text Processing
- Upload and process text-based notes through AudioPen's styles
- Restyle written content the same way as voice recordings

## Pricing and limits

All pricing best-effort as of 2026-04. Verify at audiopen.ai. AudioPen uses a **one-time payment model** — no subscriptions, no auto-renewals.

| Plan | Price | Monthly equiv. | Recordings | Recording limit | Audio uploads | Zapier/Webhooks |
|---|---|---|---|---|---|---|
| Free | $0 | — | 10 notes | 3 min each | No | No |
| 3 Months | $33 | $11.00/mo | Unlimited | 15 min each | 100/4 weeks | Yes |
| 1 Year | $99 | $8.25/mo | Unlimited | 15 min each | 100/4 weeks | Yes |
| 2 Years | $159 | $6.63/mo | Unlimited | 15 min each | 100/4 weeks | Yes |

All paid plans (collectively called "Prime") include identical features. The only difference is duration.

## Integrations

### Zapier (Prime only)
- **Trigger**: "New Note" — fires instantly when a note is created
- Connects to 8,000+ apps via Zapier
- Popular automations: AudioPen → Notion page, Google Docs document, Google Sheets row, Gmail draft, Microsoft OneNote, Todoist task
- Zapier MCP server available for AI tool integration

### Webhooks (Prime only)
- Custom webhook support for routing notes to any endpoint
- Payload format and auth not publicly documented — test with a webhook catcher (e.g., webhook.site)

### No native integrations
- No native CRM connectors (HubSpot, Salesforce, etc.)
- No native Notion/Obsidian sync (unlike Voicenotes)
- No Slack integration
- All routing goes through Zapier or webhooks

### No public API
- No REST or GraphQL API documented
- No SDKs
- No MCP server (platform itself — Zapier MCP is Zapier's, not AudioPen's)

## Language support

- 58 input languages for recording
- 64 output languages for rewriting
- Translated output: record in one language, get polished text in another
- Multilingual support is a key differentiator vs simpler tools

## Comparison with Voicenotes

| Feature | AudioPen | Voicenotes |
|---|---|---|
| Core function | Voice → polished text (rewrites) | Voice → transcription + AI outputs |
| Pricing model | One-time payment ($33-$159) | Subscription ($14.99/mo or $99.99/yr) |
| Custom styles | Yes (descriptions + samples) | No |
| SuperSummaries | Yes | No (but has Threads) |
| Ask AI search | No | Yes |
| Obsidian/Notion sync | No (Zapier only) | Yes (native) |
| Zapier triggers | 1 (New Note) | 9 (per output type) |
| Meeting recording | No | Yes (calendar auto-join) |
| Speaker diarization | No | No |
| Team features | No | Yes (Teams plan) |
| Public API | No | No |
| MCP | No | Yes (Claude MCP) |
| Wearable support | No | Apple Watch, WearOS |

**Pick AudioPen when**: You want AI to rewrite and polish your speech (not just transcribe), you value custom writing styles, you prefer one-time payment over subscription, you primarily work solo, or you need multilingual output translation.

**Pick Voicenotes when**: You want semantic search across all notes (Ask AI), you need native Obsidian/Notion sync, you want meeting recording with calendar auto-join, you need more Zapier triggers for different output types, you want team collaboration, or you use Apple Watch/WearOS.

## Workflow examples

### Daily thought capture → Notion
1. Record thoughts in AudioPen (mobile or Chrome extension)
2. AudioPen rewrites into polished notes using your custom style
3. Zapier triggers on "New Note" → creates a Notion page with title and content
4. Review and organize in Notion

### Client meeting summaries
1. Dictate meeting recap in car after meeting (up to 15 min)
2. Apply "Meeting Summary" custom style (bullet points + action items)
3. Copy/paste or Zapier to CRM/email

### Conference note compilation
1. Record multiple voice notes throughout a multi-day event
2. Use SuperSummaries to combine all notes into one document
3. Restyle the combined document into a trip report format
4. Share or export
