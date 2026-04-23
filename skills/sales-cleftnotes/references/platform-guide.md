# Cleft Notes Platform Reference

## Platform overview

Cleft Notes is an AI-powered voice-to-notes app built exclusively for Apple devices (iOS, iPadOS, macOS, Apple Watch, CarPlay). It uses on-device transcription to capture spoken thoughts and an AI Scribe to restructure rambling speech into organized, formatted notes with auto-generated headings. Marketed specifically toward neurodivergent users and "verbal thinkers" — people who think best by talking. Featured in Fast Company's "25 Best New Apps." 4.7/5 stars on the App Store (64 ratings). Privacy-first design with on-device transcription and encrypted storage.

## Key modules

### Voice Recording
- Record via iPhone, iPad, Mac, Apple Watch, or CarPlay
- Lock Screen widget and Action Button for one-tap capture
- On-device transcription — works offline
- Live transcription shows words as you speak
- Background recording continues when switching apps
- Free tier: 5-minute recording limit
- Plus: 30-minute recording limit

### AI Scribe
- Transforms raw transcription into structured notes with auto-generated headings
- Reorganizes content for readability — not a verbatim transcript by default
- Custom AI instructions (Plus) — tell the scribe how to format (bullet lists, specific heading styles, tone)
- Multi-language support for transcription and output

### Note Management
- Full visual markdown editor
- File and image attachments (Plus)
- Tags for organization
- Search and filters
- Archive functionality
- Spotlight Search integration (macOS/iOS)

### Sharing & Export
- Shareable public links — publish notes online
- Markdown export
- Copy in multiple formats
- Apple Shortcuts integration for custom export workflows

### Batch Processing
- Process multiple recordings at once
- Append to existing notes — add to a running document across sessions

## Pricing and limits

All pricing best-effort as of 2026-04. Verify at cleftnotes.com.

| Plan | Price | Monthly equiv. | Recording limit | Custom AI | Integrations | Attachments |
|---|---|---|---|---|---|---|
| Basic (Free) | $0 | — | 5 min | No | None | No |
| Plus (Monthly) | $9/mo | $9.00/mo | 30 min | Yes | Zapier, Obsidian, Notion | Yes |
| Plus (Annual) | $29/yr | $2.42/mo | 30 min | Yes | Zapier, Obsidian, Notion | Yes |

Annual Plus pricing ($29/yr) is heavily discounted from the listed $89/yr — making it one of the cheapest voice note tools in the category.

## Integrations

### Obsidian (Plus, macOS-only)
- Syncs new and updated notes as .md files to a local Obsidian vault
- Configure vault path in Settings → Integrations
- Only works on macOS — iOS/iPadOS recordings sync to Mac via iCloud first, then to Obsidian
- One-way: Cleft → Obsidian. Edits in Obsidian don't sync back

### Notion (Plus)
- Native one-way push — notes created in Cleft appear in a Notion database
- Connect via Settings → Integrations → Notion
- One-way: Cleft → Notion. Edits in Notion don't sync back

### Apple Notes
- Export individual notes to Apple Notes
- Manual per-note action, not automatic sync

### Apple Shortcuts
- Automations via Shortcuts app
- Trigger recordings, process notes, route output to other apps
- Useful for building custom workflows without Zapier

### Zapier (Plus)
- Automate Cleft with 8,000+ apps
- Trigger: new note created
- Popular flows: Cleft → Notion page, Cleft → Todoist task, Cleft → Google Docs, Cleft → Slack message

### Additional integrations (via export/Shortcuts)
- Task managers: Asana, ClickUp, Todoist, Trello, Things, TickTick, Microsoft To Do, Google Tasks, Jira
- Note apps: Craft, Reflect, Drafts
- AI tools: ChatGPT, Perplexity

### No public API
- No REST or GraphQL API
- No SDKs
- No MCP server
- OpenAPI spec referenced in docs (learn.cleftnotes.com) but not publicly accessible
- All automation goes through Zapier, Apple Shortcuts, or native integrations

## Compliance & privacy

- On-device transcription — audio data stays on device
- Encrypted storage
- GDPR compliant
- CCPA compliant
- WCAG 2.1 AA accessibility
- Data Processing Agreement available
- Vendor transparency documentation available

## Comparison with alternatives

| Feature | Cleft Notes | Voicenotes | AudioPen | TalkNotes |
|---|---|---|---|---|
| Core function | Voice → organized notes with headings | Voice → transcription + AI outputs | Voice → polished text (rewrites) | Voice → template-driven content |
| Pricing | Free / $29/yr (Plus) | Free / $14.99/mo ($99.99/yr) | One-time $33-$159 | ~$10/mo (Plus) |
| Platforms | Apple only (iOS/iPadOS/macOS/Watch) | iOS, Android, web, Watch, WearOS | iOS, Android, Mac, Chrome, web | iOS, Android, web |
| Transcription | On-device (offline) | Cloud-based | Cloud-based | Cloud-based |
| Auto-organization | Yes (headings, structure) | No | Yes (style-based rewriting) | Yes (template-based) |
| Custom AI instructions | Yes (Plus) | No | Yes (custom styles) | Yes (custom styles) |
| Ask AI / search | Search + filters | Yes (Ask AI semantic search) | No | AI Chat |
| Obsidian sync | Yes (macOS-only, Plus) | Yes (native) | No | No |
| Notion sync | Yes (one-way, Plus) | Yes (native) | No | No |
| Zapier | Yes (Plus) | Yes (9 triggers) | Yes (1 trigger, Prime) | Yes (1 trigger) |
| Meeting recording | No | Yes (calendar auto-join) | No | No |
| Speaker diarization | No | No | No | No |
| Apple Watch | Yes | Yes | No | No |
| Free tier | Yes (5 min, unlimited notes) | Yes (basic) | Yes (10 notes, 3 min) | No (7-day trial) |
| Public API | No | No | No | No |
| Offline recording | Yes (on-device) | No | No | No |
| ADHD-focused | Yes (core positioning) | No | No | No |

**Pick Cleft when**: You're in the Apple ecosystem, you want on-device transcription for privacy and offline use, you value auto-organization with headings over raw transcripts, you want the cheapest annual plan ($29/yr), you need Obsidian sync on macOS, or you specifically want an ADHD-friendly brain dump tool.

**Pick Voicenotes when**: You need cross-platform (Android), you want semantic search across all notes (Ask AI), you need meeting recording with calendar auto-join, you want more Zapier triggers (9 vs 1), or you need team collaboration features.

**Pick AudioPen when**: You want AI to rewrite and polish your speech into a specific writing style, you value custom writing styles with uploaded samples, or you prefer a one-time payment.

**Pick TalkNotes when**: You want 100+ pre-made content templates, you need a shareable recorder link for guest recordings, or you need Android support.

## Workflow examples

### Daily brain dump → Obsidian vault (macOS)
1. Speak freely into Cleft on iPhone (Lock Screen widget for speed)
2. AI Scribe organizes thoughts with headings and structure
3. Notes auto-sync to Obsidian vault as .md files on Mac
4. Review and link notes in Obsidian's graph view

### Meeting action items → Todoist
1. Record meeting notes in Cleft (up to 30 min on Plus)
2. AI Scribe generates organized summary with action items
3. Zapier triggers on new note → creates Todoist tasks from the note
4. Or use Apple Shortcuts to parse and route action items

### Walking idea capture → Notion project database
1. Record on Apple Watch or iPhone while walking
2. Cleft transcribes on-device and organizes
3. Notion integration auto-pushes note to project database
4. Review and categorize in Notion later

### Content drafting from voice
1. Use custom AI instructions (Plus) to tell the scribe: "Format as blog post outline with introduction, key points, and conclusion"
2. Record voice draft while commuting
3. Copy organized output to writing tool
4. Edit and publish
