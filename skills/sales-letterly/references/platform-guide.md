# Letterly Platform Reference

## Platform overview

Letterly is an AI-powered speech-to-text app that transforms unstructured voice recordings into polished, formatted written content. Unlike pure transcription tools (Voicenotes) or rewriting tools (AudioPen), Letterly focuses on instant content reformatting — 25+ rewrite options turn a voice memo into a social post, formal email, to-do list, journal entry, or article outline within seconds. Available on iOS, Android, web, and macOS (Windows coming soon). 300,000+ users. 90+ languages with automatic detection. Targets content creators, entrepreneurs, journalists, and professionals who need quick, formatted output from spoken thoughts.

## Key modules

### Recording & capture
- **One-tap recording**: Widget for instant recording from home screen
- **Screen-off recording**: Continues recording with screen locked (mobile)
- **Offline recording**: Records without internet — processes when back online
- **Automatic language detection**: Recognizes 90+ languages without manual selection
- **15-minute session limit**: Each recording caps at 15 minutes — split longer sessions into multiple recordings

### AI rewriting
- **25+ built-in rewrite options**: Structured text, X/Twitter posts, formal emails, friendly messages, to-do lists, journal entries, meeting notes, blog drafts, video scripts, and more
- **Custom rewrites**: Create your own rewrite instructions for consistent output formatting
- **One-tap rewrite**: Select any rewrite option and get reformatted output in seconds
- **Translation**: Translate output into any supported language after rewriting

### Organization
- **Tags**: Tag-based note organization (no folders — tags are the primary organization method)
- **Cross-device sync**: Notes sync across iOS, Android, web, macOS via cloud
- **Dark/light mode**: UI theme support

### AI tool connections
Letterly can send notes directly to AI tools for further processing:
- Claude
- ChatGPT
- Cursor
- Perplexity
- Gemini
- Codex

## Pricing and limits

**AppSumo Lifetime Deal (primary pricing path)**:
- Plan 1 (1 device): ~~$200~~ → $69
- Plan 2 (2 devices): ~~$400~~ → $138
- Plan 3 (4 devices): ~~$800~~ → $207
- All plans: unlimited recordings, 27 rewrite options, 90+ languages, 15-min recording limit
- 60-day money-back guarantee

**Regular pricing**: Mobile app subscription model — exact tiers not publicly displayed on website. The AppSumo LTD is the most commonly purchased option based on review volume.

**Key limits**:
- 15-minute max recording per session (all plans)
- No audio file upload (must record in-app)
- Per-device licensing on LTD plans
- No team/workspace features

## Integrations

### Zapier
- Connects to 8,000+ apps via Zapier
- Trigger: Note Created (sends note text to connected apps)
- Use the Actions button inside any note to send via Zapier
- Some users report intermittent trigger reliability issues

### Webhooks
- Custom webhook support available
- Send notes to Google Docs, Notion, or any webhook-accepting endpoint
- Configured via the Actions button inside each note
- Payload format and authentication not publicly documented

### AI tool integrations
- Direct send to Claude, ChatGPT, Cursor, Perplexity, Gemini, Codex
- Useful for further processing, summarization, or expansion of voice-captured content

### No public API
- No REST API endpoints available
- No SDKs or MCP server
- Zapier + webhooks are the only integration paths

## Workflow setup

### Basic voice-to-content workflow
1. Open Letterly → tap record (or use widget for one-tap)
2. Speak your thoughts — unstructured is fine
3. Tap stop — AI transcribes automatically
4. Select a rewrite option (email, social post, to-do, etc.)
5. Copy the rewritten text or share directly

### Automated content pipeline
1. Record voice memo in Letterly
2. Inside the note, tap Actions → Zapier or Webhook
3. Zapier routes to: Buffer/Hootsuite (social), Google Docs (long-form), Notion (knowledge base), Slack (team updates)
4. For multi-destination fan-out, create multiple Zaps from the same trigger

### Multilingual content creation
1. Record in any of 90+ languages — auto-detected
2. Select rewrite option for formatting
3. Use translation feature to convert to target language
4. Copy or share the translated, formatted output

## Comparison with voice note competitors

| Feature | Letterly | AudioPen | TalkNotes | Voicenotes |
|---|---|---|---|---|
| Rewrite options | 25+ built-in | AI rewriting (custom styles) | 100+ templates | Summaries, to-dos, emails |
| Custom rewrites | Yes | Yes (writing samples) | Yes (custom styles) | No |
| Recording limit | 15 min | 15 min (Prime) | 20 min (Plus) / 2 hr (Pro) | Unlimited (paid) |
| Audio upload | No | Yes (Prime) | Yes | Yes |
| Search | No | No | AI Chat (v1.6.0+) | Ask AI (semantic) |
| Languages | 90+ | 58 input / 64 output | 50+ | 100+ |
| Pricing model | LTD $69+ or subscription | One-time $33-159 | Subscription ~$10-49/mo | Freemium $0-14.99/mo |
| Free tier | Yes (limited) | Yes (10 notes, 3 min) | No (7-day trial) | Yes |
| Zapier | Yes | Yes (Prime, 1 trigger) | Yes (1 trigger) | Yes (9 triggers) |
| Webhooks | Yes | Yes (Prime) | Yes | Yes |
| Native sync | None | None | None | Obsidian, Notion, Readwise |
| Platforms | iOS, Android, web, macOS | iOS, Android, Mac, Chrome, web | iOS, Android, web | iOS, Android, web, Apple Watch, WearOS |
| CRM integration | None | None | None | None |
| Speaker diarization | No | No | No | No |

### When to pick Letterly over alternatives
- **Over AudioPen**: When you want more built-in rewrite options (25+ vs style-based rewriting), need 90+ language support vs 58, or prefer the lifetime deal pricing model
- **Over TalkNotes**: When you want a permanent free tier (TalkNotes has 7-day trial only), need offline recording, or prefer built-in rewrite options over template-driven output
- **Over Voicenotes**: When you prioritize content reformatting (social posts, emails) over thought capture and search, or need offline recording

### When to avoid Letterly
- **Need search across notes** → Voicenotes (Ask AI semantic search)
- **Need audio file upload** → AudioPen, TalkNotes, Voicenotes
- **Need longer recordings** → TalkNotes Pro (2 hours), Voicenotes (unlimited)
- **Need native Obsidian/Notion sync** → Voicenotes
- **Need a public API** → Fathom, Fireflies, Wave
- **Need CRM integration** → Fathom Business, Sybill, tl;dv
- **Need speaker diarization** → Fireflies, Otter, Fathom
