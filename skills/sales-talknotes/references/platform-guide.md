# TalkNotes Platform Reference

## Platform overview

TalkNotes is an AI voice note app that converts speech into structured text using 100+ pre-made templates. Unlike pure transcription tools, TalkNotes focuses on transforming voice memos into specific content formats — blog outlines, emails, to-do lists, meeting notes, lecture summaries, and more. Available on iOS, Android, and web. Developed by Collin Brewer (Clutch Codeworks LLC). Target audience: content creators, professionals, students, and entrepreneurs who want to capture ideas by voice and get formatted output immediately.

## Key modules

### Voice recording
- Real-time voice-to-text transcription
- Background recording (continues when switching apps or locking screen)
- Siri shortcut integration for hands-free note creation (iOS)
- 50+ language support
- File upload — create notes from existing audio files (Plus+)

### AI templates (100+)
- Pre-made templates: meeting notes, blog outlines, email drafts, to-do lists, lecture summaries, social posts, interview notes, brainstorm sessions
- Custom note styles — create your own templates
- AI rewrites speech into the selected template format (not just verbatim transcription)

### AI Chat
- "Chat with your notes" feature (added v1.6.0)
- Ask questions about your recorded notes
- AI model selection available (v1.6.5+)

### AI summaries
- Automatic summarization of recordings
- Keyword extraction — identifies important phrases
- Concise key-takeaway generation

### Sharing & export
- Export formats: PDF, Markdown, plain text
- Share via email or direct URL links
- Shareable recorder link (Pro) — guests can record notes that appear in your account
- Up to 100 guest notes on Pro plan

## Pricing and limits

Pricing is best-effort as of 2026-04 — verify on talknotes.io/pricing.

| Feature | Free trial (7 days) | Plus (~$10/mo) | Pro (~$42-49/mo) |
|---|---|---|---|
| Duration | 7 days full access | Unlimited | Unlimited |
| Notes | Unlimited | Unlimited | Unlimited |
| Recording length | 20 min | 20 min | 2 hours (25 recordings) |
| File upload | Yes | Yes | Yes |
| Custom styles | Yes | Yes | Yes |
| AI Chat | Yes | Yes | Yes |
| Shareable recorder link | No | No | Yes |
| Guest notes | No | No | Up to 100 |
| Priority support | No | No | Yes |
| Apps | iOS, Android, web | iOS, Android, web | iOS, Android, web |

**Annual pricing**: Plus ~$5.75/mo billed annually. Pro pricing varies — check site.

**No permanent free tier.** The 7-day trial provides full access without a credit card, but after it expires you must subscribe.

**In-App Purchase options (iOS)**: $9.99, $19.99, $199.00 — exact mapping to plans may vary.

## Integrations

### Zapier
- **Trigger**: "Note Created" — fires when a new note is created
- **Actions**: None native — TalkNotes is trigger-only on Zapier
- Connects to 9,000+ apps via Zapier
- Common automations: TalkNotes → Notion (create page), TalkNotes → Google Docs, TalkNotes → Slack (post message), TalkNotes → Todoist (create task)

### Webhooks
- Webhook support available for automation
- Payload format and authentication not publicly documented
- Contact support@talknotes.io for webhook implementation details

### Export
- PDF, Markdown, plain text
- Manual export from app or web

### No native integrations
- No native CRM connectors
- No native Notion/Obsidian sync (unlike Voicenotes)
- No native Slack integration
- All automation flows through Zapier or webhooks

## API

**No public API.** TalkNotes does not publish REST API documentation. For API access requests, contact support@talknotes.io.

- No SDKs
- No MCP server
- No OpenAPI spec

## Workflow setup

### Basic voice capture workflow
1. Open TalkNotes on iOS, Android, or web
2. Tap record and speak your thoughts
3. Choose a template (blog post, email, to-do list, meeting notes, etc.)
4. AI transcribes and formats into the selected template
5. Review and edit the structured output
6. Export as PDF, Markdown, or text — or share via link

### Zapier automation setup
1. Create a new Zap in Zapier
2. Set trigger: TalkNotes → "Note Created"
3. Authorize your TalkNotes account
4. Set action: target app (Notion, Google Docs, Slack, etc.)
5. Map TalkNotes fields (title, content) to target fields
6. Test and activate

### Guest recording workflow (Pro)
1. Enable shareable recorder link in Pro settings
2. Share the link with guests (clients, interviewees)
3. Guests record voice notes via the link (no app install needed)
4. Notes appear in your TalkNotes account automatically
5. Process with templates as normal

## Deep dives

### Template selection strategy
- **Meeting notes**: Best for calls and meetings — extracts action items, decisions, key points
- **Blog outline**: Converts stream-of-consciousness into structured H2/H3 outline
- **Email draft**: Formats into professional email tone with subject line
- **To-do list**: Extracts tasks and deadlines from spoken input
- **Lecture summary**: Condenses educational content into study-friendly format
- **Custom styles**: Create when pre-made templates don't match your output format

### TalkNotes vs Voicenotes vs AudioPen

| Feature | TalkNotes | Voicenotes | AudioPen |
|---|---|---|---|
| Templates | 100+ pre-made | None (raw + summary) | Custom writing styles |
| Free tier | 7-day trial only | Yes (limited) | Yes (10 notes, 3 min) |
| Pricing model | Subscription | Subscription | One-time payment |
| Ask AI / search | AI Chat | Ask AI (semantic) | No |
| Zapier triggers | 1 (Note Created) | 9 triggers | 1 (New Note, Prime) |
| Native sync | None | Obsidian, Notion, Readwise | None |
| Speaker ID | No | No | No |
| Languages | 50+ | 100+ | 58 input / 64 output |
| Best for | Template-driven content creation | Personal knowledge + meeting notes | Polished writing output |

### Mobile app technical details
- iOS: 76.6 MB, iOS 13+, iPadOS 13+, macOS 12.0+ (M1+), visionOS 1.0+
- Android: Available on Google Play
- App Store rating: 4.4/5 (47 ratings)
- Latest version: 1.6.5 (May 2025) — Siri shortcut + AI model selection
