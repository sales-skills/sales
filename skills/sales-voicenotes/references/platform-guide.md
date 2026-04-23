# Voicenotes Platform Reference

## Platform overview

Voicenotes is an AI-powered voice note and meeting transcription platform built by the team behind BuyMeACoffee.com. It lets users record thoughts on mobile (iOS, Android), web, Apple Watch, and WearOS, then transcribes them using GPT-4o and Claude 3.5 Sonnet. Key differentiators: "Ask AI" search across all notes, strong Zapier integration (9 triggers), native Obsidian/Notion/Readwise sync, and a meetings product for auto-joining and transcribing video calls. Target audience: individuals and small teams who capture ideas, journal, or take meeting notes — not primarily sales/coaching-focused.

## Key modules

### Voice Recording
- Record on iOS, Android, web, Apple Watch, WearOS
- Keyboard shortcuts on desktop: R to record, D to finish
- iPhone Action Button can launch recording
- Works with soft speech and moderate background noise
- Recordings stored in cloud, encrypted

### AI Transcription
- Powered by GPT-4o and Claude 3.5 Sonnet
- 100+ languages supported
- Auto-titling of notes
- Transcript regeneration available on web (not iOS)
- Single-speaker only — no diarization

### Ask AI
- Natural language Q&A across all your notes
- Uses LLM to search and synthesize answers
- Different from the search bar (which is keyword-based)
- Cannot scope queries by tag
- Cannot save AI responses as notes

### Related Notes
- AI surfaces connected notes using cosine similarity
- Uses Claude Haiku (lighter model)
- Quality degrades with bilingual notes or very long notes
- Known bugs when adding to threads

### Threads
- Group related notes together
- Add notes to existing threads
- Some bugs with Related Notes popup when threading

### Tags
- Manual tagging (no auto-tagging)
- No nested tags or boolean tag searches
- Special "Zapier" tag triggers Zapier automations
- Mobile tagging has known bugs — use web as fallback

### Meeting Recording
- Calendar integration: Google Calendar, Microsoft Outlook
- Auto-join meetings or manual recording
- Generates meeting reports with transcripts, summaries, action items
- Available on Individual and Teams plans

### AI Outputs
- Summaries — concise overview of recording content
- Main Points — key takeaways extracted
- To-Dos — action items from recordings
- Emails — draft emails generated from recordings
- Meeting Reports — structured meeting summaries

## Pricing and limits

All pricing best-effort as of 2026-04. Verify at voicenotes.com/pricing.

| Plan | Price | Recordings | Meetings | Key features |
|---|---|---|---|---|
| Free | $0 | Limited | Limited | Basic transcription, short recordings |
| Individual | $14.99/mo or $99.99/yr | Unlimited | Unlimited | Full AI features, Ask AI, all integrations |
| Teams | $49/mo + $9/member/mo | Unlimited | 10,000 min/mo | Team collaboration, shared workspace |

- Free tier is suitable for basic short voice notes
- Individual plan is the primary offering for solo users
- Teams plan includes unlimited users, usage-based meeting minutes

## Integrations

### Native integrations
- **Notion** — sync notes directly
- **Obsidian** — via official plugin (mysticcoders/voicenotes-sync), uses token-based auth from Obsidian integration settings page. Syncs transcripts, AI summaries, to-dos as markdown.
- **Readwise** — export highlights and notes
- **Todoist** — push to-dos from voice notes
- **Things 3** — push to-dos from voice notes
- **Google Calendar** — auto-detect and join meetings
- **Microsoft Outlook** — calendar integration for meetings
- **OpenClaw** — integration details limited

### Claude MCP
- Official MCP server for Claude Code and Claude Desktop
- Enables Claude to access and query Voicenotes data

### Zapier (primary automation path)
**Triggers** (9 available):
1. **Voicenote Created** — fires when a new note is recorded
2. **Voicenote Updated** — fires when a note is modified
3. **Voicenote Deleted** — fires when a note is removed
4. **Summary Created** — fires when AI summary is generated
5. **Main Points Created** — fires when key points are extracted
6. **To-Do Created** — fires when action items are detected
7. **Email Created** — fires when an email draft is generated
8. **Meeting Report Created** — fires when a meeting report is ready
9. **Attach Zapier Tag** — fires when the "Zapier" tag is attached to a note

**Common Zap patterns**:
- Summary Created → Notion page (auto-export summaries)
- To-Do Created → Todoist/Asana task
- Meeting Report Created → Slack message
- Attach Zapier Tag → CRM note (selective export)

### Webhooks
- Custom webhook support for integrating with your own applications
- Create and manage webhooks from Voicenotes settings
- Details on payload format and authentication not publicly documented

## Workflow setup

### Quick start: voice capture to Notion
1. Sign up at voicenotes.com, install mobile app
2. Record a voice note — transcription happens automatically
3. In Zapier, create a Zap: Trigger = "Summary Created" → Action = Notion "Create Page"
4. Map fields: title = note title, content = summary text
5. Test with a new recording

### Quick start: meeting notes
1. Connect Google Calendar or Outlook in Voicenotes settings
2. Voicenotes auto-detects upcoming meetings and offers to join
3. After the meeting, a report is generated with transcript + summary + action items
4. Use "Meeting Report Created" Zapier trigger to route reports to Slack/email/CRM

### Quick start: selective CRM export
1. Set up Zapier Zap: Trigger = "Attach Zapier Tag"
2. Action = create note/activity in your CRM (HubSpot, Salesforce, etc.)
3. After reviewing a voice note, add the "Zapier" tag to export only relevant notes to CRM
4. This prevents noise — only tagged notes flow to CRM

## Deep dives

### Privacy and security
- All notes encrypted in cloud
- Not used for AI training
- Only retrieved on authenticated requests
- No SOC 2 or HIPAA certifications documented
- EU data residency not confirmed

### Limitations to know
- No speaker diarization (single-speaker only)
- No public REST API — Zapier and webhooks are the only automation paths
- Search bar is keyword-only; use Ask AI for semantic queries
- No workspace separation (personal vs professional)
- Offline mode is unreliable — may lose recordings
- Code-switching (mixing languages) produces inconsistent transcription
- Cannot save Ask AI responses as notes or attach to threads
- No auto-tagging — all tagging is manual
- Related Notes feature uses basic cosine similarity, struggles with bilingual content

### Support channels
- Email: team@voicenotes.com
- Twitter: @voicenotesai
- Reddit: r/Voicenotesai
- Help center: help.voicenotes.com
