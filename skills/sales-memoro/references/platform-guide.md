# Memoro Platform Reference

## Platform overview

Memoro is a German AI meeting assistant founded in 2023 in Konstanz, Germany. It transforms spoken conversations into structured notes, tasks, and insights — all processed with GDPR compliance and German-hosted infrastructure. Unlike bot-based note-takers (Fathom, Fireflies, Otter), Memoro records locally from the user's device mic without joining the meeting as a participant. Target audience includes education, office administration, construction/trades, and healthcare — broader than the typical sales-focused CI tool. 2,800+ users, 4.8/5 stars (523 reviews), 60 million words transcribed.

## Key modules

### Recording
- **Local recording**: Captures audio from device microphone — no bot joins the call
- **Audio upload**: Supports MP3, WAV, and other common audio formats
- **Offline mode**: Records without internet, syncs when connectivity is restored
- **Cross-platform**: iOS, Android, macOS, Windows, Linux, Web
- **Speaker recognition**: Identifies up to 12 distinct speakers

### Blueprints
Customizable templates that tell Memoro how to process recordings. Each Blueprint defines:
- Meeting type (e.g., Meeting, Interview, Lecture, Voice Note)
- Output sections (decisions, action items, key points, full transcript)
- Output language (24 AI summary languages)
- Level of detail

Built-in Blueprints:
- **Meeting Blueprint**: Optimized for multi-speaker meetings — generates structured protocols with speaker attribution
- **Interview Blueprint**: Optimized for two-person conversations — separates interviewer/interviewee content

Users can create custom Blueprints for specific meeting types.

### Memories
Searchable knowledge base of all processed recordings:
- **Insights**: Key points summarized chronologically
- **Summaries**: Auto-formatted as minutes, presentation, or form
- **Tasks**: Captures assignees, deadlines, and status
- **Transcripts**: Word-for-word records with speaker recognition
- **Full-text search**: Search across all past recordings
- **Topic detection**: Auto-tags recordings by subject
- **Sentiment analysis**: Detects emotional tone

### Export
- Formats: Word (.docx), PDF, Markdown
- No native CRM export or integration

## Pricing and limits

All prices in EUR/month. "Mana" is Memoro's internal currency — approximately 2.4 Mana per minute of audio.

| Tier | Price | Mana/month | ~Audio minutes | Key features |
|------|-------|------------|----------------|--------------|
| Free | €0 | 180 | ~75 min | Basic transcription, limited Blueprints |
| Plus | €9 | 600 | ~250 min | Enhanced capacity, full Blueprint access |
| Pro | €23 | 1,800 | ~750 min | Team collaboration, priority processing |
| Ultra | €42 | 4,800 | ~2,000 min | Highest capacity, all features |

**One-time "Mana Potion" purchases** available for overflow — buy extra Mana without upgrading your plan.

**No annual pricing documented** — all prices appear to be monthly.

## Integrations

### Current integrations
- **None documented.** Memoro does not list native integrations with CRM, calendar, Slack, Zapier, Make, or any third-party tools.
- Team collaboration is internal to the Memoro platform.
- Export is manual: Word, PDF, or Markdown files.

### API
- Memoro mentions "API integration" on its website but provides **no public API documentation**.
- No REST API docs, no GraphQL, no webhook documentation indexed.
- Contact kontakt@memoro.ai for API access inquiries.

### Workarounds for integration
- Export Markdown → paste into Notion, Google Docs, or a CRM notes field
- Export Word/PDF → attach to CRM records manually
- If API access is granted, build a custom sync — but expect undocumented endpoints

## Data model

Not publicly documented. Based on the UI:
- **Recording**: Audio file with metadata (date, duration, participants, Blueprint used)
- **Memory**: Processed output from a recording (transcript, summary, tasks, insights)
- **Blueprint**: Template defining how to process a recording
- **Mana**: Credit unit consumed by transcription/processing
- **Team**: Shared workspace for collaboration (Pro+ plans)

## Workflow setup

### Basic setup (individual)
1. Download the app for your platform (iOS/Android/macOS/Windows/Linux or use web)
2. Create an account at memoro.ai
3. Choose a Blueprint for your first recording (or use default "Meeting")
4. Start recording — either live mic capture or upload an audio file
5. Wait for processing — transcription + AI summary generate automatically
6. Review the Memory: edit transcript errors, check tasks, export if needed

### Team setup
1. Upgrade to Pro or Ultra plan
2. Invite team members via the Memoro team workspace
3. Create shared Blueprints for your recurring meeting types
4. Each member records their own meetings — results appear in the shared workspace
5. Use search to find information across all team recordings

### Optimizing transcription quality
1. Use a quality microphone — Memoro records from device mic, so audio quality matters
2. Set the correct language in Blueprint settings (don't rely on auto-detect if it misidentifies)
3. Minimize background noise — Memoro doesn't have built-in noise cancellation like Krisp
4. For multi-speaker meetings, ensure speakers are within mic range
5. For accented speech, test transcription quality before committing to a paid plan

## Deep dives

### GDPR compliance
- **Data hosting**: All data hosted in Germany (EU)
- **Encryption**: End-to-end encryption + SSL
- **Data processing**: Audio processed on Memoro's German servers
- **Company**: Memoro, Münzgasse 19, 78467 Konstanz, Germany
- **Contact**: kontakt@memoro.ai
- **GDPR statement**: "Made & hosted in Germany" — no US data transfer

### Language support
- **Transcription**: 50+ languages including European, Asian (Chinese, Japanese, Korean), Arabic, Hebrew
- **AI summaries**: 24 languages
- **Auto-detection**: Automatic language detection (can be overridden in Blueprint settings)
- **Multi-language**: Can handle mixed-language meetings to some extent

### Memoro vs similar tools

| Feature | Memoro | Jamie | Granola | Fathom |
|---------|--------|-------|---------|--------|
| Bot-free | Yes | Yes | Yes | No (bot joins) |
| EU hosted | Yes (Germany) | Yes (EU) | No (US) | No (US) |
| GDPR-first | Yes | Yes | No | No |
| CRM sync | No | Yes (3 CRMs) | Yes (3 CRMs) | Yes (Business) |
| API | Undocumented | REST + webhooks | REST + MCP | REST + webhooks |
| Free tier | 75 min/mo | 10 meetings | Limited history | Unlimited recordings |
| Cheapest paid | €9/mo | €21/mo | $14/mo | $16/mo |
| Platforms | All (incl. Linux) | macOS + Web | macOS + Windows | Web (all platforms) |
| Offline mode | Yes | No | Yes | No |
| Languages (transcription) | 50+ | 15+ | 16+ | 30+ |
| Speaker recognition | 12 speakers | Yes | Yes | Yes |
| Mana/credit system | Yes | No (meeting count) | No | No |

### Known limitations
- No native CRM, calendar, or Slack integration
- No public API documentation
- No sales-specific features (coaching, deal intelligence, pipeline analytics)
- Smaller user base (2,800 users) compared to established competitors
- No SOC 2 or HIPAA compliance documented — GDPR only
- No meeting platform auto-join (manual recording start required)
- Mana pricing model can be confusing for budgeting
