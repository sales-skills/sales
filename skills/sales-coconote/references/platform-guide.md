# Coconote Platform Reference

## Platform overview

Coconote is an AI-powered note-taking app built by Quizlet Inc that records lectures and automatically generates structured study materials — study guides, flashcards, quizzes, and AI-narrated podcasts. Positioned as "the top rated AI note taker" with a 4.8/5 App Store rating (15,445 ratings). Primarily targets students who want to turn lecture recordings into active study materials without manual effort. Available on iOS, Android, web, macOS (M1+), Apple Watch, and Vision Pro.

## Key modules

### Voice Recording & Transcription
- Record lectures live or upload audio files
- Real-time transcription during recording
- Supports 100+ languages for transcription
- Works on iPhone, iPad, Android, web browser, Mac, Apple Watch, Vision Pro
- Background recording while switching apps

### AI Study Material Generation
- **Study guides**: Auto-generated structured summaries from recordings
- **Flashcards**: One set per recording for review
- **Quizzes**: Up to 15 questions per recording for self-testing
- **AI-narrated podcasts**: Convert notes into audio format for passive review
- Translation into 100+ languages

### AI Chat
- Natural language queries across all notes or scoped to specific folders
- Turns a folder of notes into a searchable knowledge base
- Ask questions about lecture content without re-reading notes

### Note Management
- Folder organization (by course, topic, semester)
- PDF export
- Shareable note links (public Coconote URLs)
- Bookmark flagging during recording

## Pricing and limits

All pricing best-effort as of 2026-04. Verify on coconote.app or App Store.

| Plan | Price | Notes |
|---|---|---|
| Free | $0 | Basic recording and transcription. Requires entering payment info for trial. |
| Pro (Monthly) | $9.99/mo or $19.99/mo | Full study material generation, AI chat, all features |
| Pro (Annual) | $99.99/yr or $129.99/yr | Same as monthly Pro, discounted |
| Family | $189.99 | Shared family plan |

**Note**: Multiple price points appear in the App Store — the exact feature gating between the $9.99 and $19.99 tiers is unclear. A 1-week free trial is available for Pro.

**Free tier limitations**:
- Basic recording and transcription only
- Study material generation may be limited or trial-gated
- Requires credit card entry (cancel before 7-day trial to stay free)

## Integrations

### None
Coconote has no third-party integrations:
- No Zapier connector
- No webhooks
- No public API or REST endpoints
- No CRM integration
- No Obsidian, Notion, or other note app sync
- Export limited to PDF and shareable Coconote links

### Workarounds
- Copy-paste note text manually into other apps
- Use PDF export → import into another tool
- Screenshot flashcards for use in other apps

## Data model

No public API — no documented data model. Notes, recordings, flashcards, and quizzes are stored within the Coconote ecosystem only.

## Workflow setup

### Lecture capture → study session
1. Open Coconote before class starts
2. Tap record — transcription runs in real-time
3. Flag important moments with bookmarks
4. After class: review auto-generated study guide
5. Test yourself with the quiz (15 questions)
6. Review flashcards for key terms

### Multi-course knowledge base
1. Create a folder per course
2. Record all lectures into the appropriate folder
3. Use AI chat scoped to a course folder to ask questions
4. Before exams: review study guides and run quizzes across multiple lectures

### Upload existing audio
1. Upload a pre-recorded audio file (lecture recording, podcast, etc.)
2. Coconote transcribes and generates study materials
3. Use AI chat to query the content

## Comparison with alternatives

| Feature | Coconote | Voicenotes | Cleft Notes | AudioPen | Otter.ai |
|---|---|---|---|---|---|
| Core function | Lecture → study materials | Voice → notes + AI search | Voice → organized markdown | Voice → polished text | Meeting → transcript |
| Target audience | Students | General / personal | Apple power users | Solo professionals | Business meetings |
| Pricing | Free / $9.99-19.99/mo | Free / $14.99/mo | Free / $29/yr | One-time $33-$159 | Free / $16.99/mo |
| Platforms | iOS, Android, web, Mac, Watch | iOS, Android, web, Watch | Apple only | iOS, Android, Mac, web | iOS, Android, web, Mac |
| Flashcards/Quizzes | Yes (auto-generated) | No | No | No | No |
| Study guides | Yes (auto-generated) | No | No | No | No |
| AI Chat | Yes (folder-scoped) | Yes (Ask AI) | Search only | No | Yes (AI Chat) |
| API | None | None | None | None | Enterprise only |
| Zapier | None | Yes (9 triggers) | Yes (Plus) | Yes (Prime) | Yes (Pro+) |
| CRM integration | None | None | None | None | Yes (Enterprise) |
| Obsidian/Notion sync | None | Yes | Yes (macOS) | No | No |
| Speaker diarization | Not documented | No | No | No | Yes |
| Offline recording | Not documented | No | Yes (on-device) | No | No |

**Pick Coconote when**: You're a student who wants auto-generated study materials (flashcards, quizzes, study guides) from lecture recordings. No other voice note tool generates active study aids automatically.

**Pick Voicenotes when**: You need cross-app integrations (Obsidian, Notion, Zapier), semantic search across notes (Ask AI), or meeting recording with calendar auto-join. More flexible for non-student use cases.

**Pick Cleft Notes when**: You're in the Apple ecosystem, want on-device transcription for privacy and offline, ADHD-friendly auto-organization, and the cheapest annual plan ($29/yr).

**Pick AudioPen when**: You want AI to rewrite and polish your speech into a specific writing style, prefer a one-time payment, and don't need study materials.

**Pick Otter.ai when**: You need business meeting transcription with CRM integration, speaker diarization, and team collaboration features.

## Developer info

- **Company**: Quizlet Inc (well-established education technology company)
- **GitHub**: https://github.com/quizlet
- **App Store ID**: 6479320349
- **Android**: Available on Google Play (requires Android 10+)
- **Support**: coconote.app/support (response times flagged as slow by users)
