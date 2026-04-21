# Speakwise Platform Reference

## Platform overview

Speakwise is an iOS-native AI meeting assistant that transforms an iPhone into an in-person meeting recorder. It captures conversations, transcribes in 50+ languages with claimed 95% accuracy, extracts action items, generates AI summaries, and syncs everything to Notion. Built by TN Labs LLC, it targets individual professionals — sales reps, consultants, financial advisors — who need meeting documentation without the overhead of desktop tools or meeting bots. Privacy-first: on-device processing with end-to-end encryption.

**Key differentiators**: iOS-native with AirPods hands-free control, on-device processing (no cloud dependency for recording), deep Notion integration (82% of users cite this as their primary reason for choosing Speakwise), and extremely low price ($59.99/yr).

## Key modules

### Recording
- **Standard recording**: Tap to start, iPhone sits on table
- **AirPods hands-free**: Control recording via AirPods taps — discreet, no need to touch phone
- **Siri Shortcuts**: Automate recording start/stop with iOS Shortcuts
- **Background recording**: Continues recording during phone calls or when screen is locked
- **Discrete recording mode**: Minimized UI for privacy-conscious capture

### Transcription
- 50+ languages supported
- 95%+ accuracy in optimal conditions (quiet room, clear speech, iPhone within 3-6 feet)
- 92%+ accuracy in noisy environments with multiple speakers
- Advanced noise cancellation
- Multi-speaker separation and identification
- On-device processing option (no data sent to external servers)

### AI Intelligence
- **Meeting summaries**: AI-generated one-paragraph summaries
- **Action item extraction**: Automatically identified tasks with assignees
- **Decision highlighting**: Key decisions surfaced from the conversation
- **Follow-up email drafts**: AI-generated post-meeting emails
- **CRM-style contact notes**: Track conversations by person over time
- **Recurring meeting detection**: Recognizes recurring meetings and links them

### Notion Integration
- Native sync — recordings auto-create Notion pages
- Each page includes: full transcript, AI summary, action items (individually listed with assignees)
- Structured pages (not raw text dumps) — tagged by date and project
- Priority sync on Premium plan
- Recurring meeting detection groups related meetings

## Pricing and limits

| Feature | Free | Premium ($59.99/yr) |
|---|---|---|
| Recording | Yes | Yes |
| Transcription | Basic | Unlimited |
| AI summaries | Limited | Full |
| Action items | Limited | Full |
| Notion sync | Basic | Priority sync |
| Multilingual | Basic | Enhanced |
| Customer support | Standard | Priority |

- No team plans — designed for individual professionals
- No per-seat pricing — one flat annual fee
- No hidden fees, no team minimums, no complex licensing
- Free trial includes full access to all features

## Integrations

| Integration | Method | Notes |
|---|---|---|
| Notion | Native | Primary integration — auto-creates pages with transcript, summary, action items |
| Siri Shortcuts | Native | iOS automation for recording start/stop |
| AirPods | Native | Hands-free recording control |
| Apple Watch | Supported | Remote recording control |

**Not supported**: Salesforce, HubSpot, Pipedrive, Zapier, Make, n8n, Slack, or any CRM. No API, no webhooks, no third-party integrations beyond Notion.

## Data model

No public API — the data model is internal to the app. Key objects visible in the UI and Notion export:

- **Recording**: Audio file + metadata (date, duration, location)
- **Transcript**: Full text with timestamps and speaker labels
- **Summary**: AI-generated meeting summary
- **Action items**: Task list extracted from conversation (text + optional assignee)
- **Contact notes**: Per-person notes accumulated across meetings
- **Notion page**: Structured export containing all of the above

## Workflow setup

### Initial setup
1. Download Speakwise from the App Store (App ID: 6751740223)
2. Grant microphone permission when prompted
3. Optionally grant Siri Shortcuts permission
4. Connect Notion workspace: Settings → Notion → Authorize

### Recording a meeting
1. Open Speakwise before the meeting starts
2. Place iPhone face-down on the table between speakers
3. Tap record (or use AirPods gesture / Siri Shortcut)
4. Meeting auto-transcribes during or after recording
5. AI summary and action items generated automatically
6. Notion page created with all content

### Best practices for recording quality
- Place iPhone centrally, face-down on a hard surface (reduces table vibration noise)
- Keep iPhone within 3-6 feet of all speakers
- Reduce background noise (close doors, turn off music/TV)
- For AirPods mode: best when you're the primary speaker
- Set the primary language before recording multilingual meetings
- Test recording quality in your specific room before a critical meeting

## Deep dives

### On-device processing
Speakwise processes audio on the iPhone using on-device NLP. No audio is sent to external servers for processing. This provides:
- Privacy: conversations never leave the device
- Reliability: works without internet (though Notion sync requires connectivity)
- Speed: no upload/download latency
- Security: end-to-end encryption for any data that does transit

Trade-off: processing speed depends on iPhone model. Newer iPhones (A15+ chip) process faster. Older models may have noticeable delays for longer recordings.

### Speaker identification
Speakwise uses multi-speaker separation to identify different voices. Accuracy depends on:
- Number of speakers (2-3 is optimal, 5+ degrades noticeably)
- Voice distinctiveness (similar-sounding speakers confuse the model)
- Crosstalk (overlapping speech is the #1 accuracy killer)
- Distance from microphone (closer speakers are identified more reliably)

### Multilingual support
50+ languages supported. Best accuracy on:
- English (US, UK, Australian)
- Spanish, French, German, Italian, Portuguese
- Mandarin, Japanese, Korean
- Hindi, Arabic

Accuracy for less common languages may be lower. Code-switching (mixing languages mid-sentence) is supported but reduces accuracy.

### Limitations vs desktop note-takers
| Capability | Speakwise | Desktop note-takers (Otter, Fathom, etc.) |
|---|---|---|
| In-person meetings | Excellent | Limited (some have mobile apps) |
| Video calls (Zoom/Teams/Meet) | Not supported | Core use case |
| CRM integration | None (Notion only) | Salesforce, HubSpot, etc. |
| Team features | None | Shared workspaces, analytics |
| API/webhooks | None | REST, GraphQL, webhooks |
| Price | $59.99/yr | $10-$1,600/user/mo |
| Platform | iOS only | Cross-platform |
