# JotMe Platform Reference

## Platform overview

JotMe is a real-time AI translation and meeting intelligence platform that provides simultaneous interpretation, multilingual transcription, and AI-powered meeting notes across 107 languages. Unlike most meeting note-takers that focus on transcription and CRM sync, JotMe's primary differentiator is near-zero-latency live translation — making it the tool of choice for multilingual teams and international conferences. Bot-free: it captures system audio directly without joining the call as a participant.

Used by professionals at Toyota, Google, Netflix, Hitachi, and Mercari.

## Key modules

### Live Translation & Interpretation
- Real-time caption translation with contextual accuracy across 107 languages
- Simultaneous interpretation — near-zero delay between source speech and translated output
- Supports up to 10 languages simultaneously in a single session
- Speech-to-text without translation (transcription-only mode)

### AI Meeting Intelligence
- Automated meeting notes with action item extraction (consumes AI credits)
- Real-time AI summaries of complex discussions
- "Ask JotMe" — live search for meeting-related questions during or after the meeting
- Audio recording and storage (plan-dependent limits)

### Sharing & Distribution
- Shareable Translation Minutes via code, URL, QR code, or subtitle camera
- Live speech generation in target language (text + audio on mobile)
- Post-meeting summary sharing

### Custom Vocabulary
- Domain-specific terminology configuration
- Ensures industry jargon translates correctly (e.g., medical, legal, engineering terms)
- Slot limits vary by plan

## Pricing and limits

| Feature | Free | Pro ($20/mo, $10 annual) | Premium ($30/mo, $15 annual) | Enterprise (custom) |
|---|---|---|---|---|
| Translation minutes | 20/mo | 200/mo | 500/mo | Unlimited |
| AI credits | 5/mo | 20/mo | 50/mo | Unlimited |
| Transcription (desktop) | 50 min | 500 min | 2,000 min | Unlimited |
| Chrome Meet transcription | — | Unlimited | Unlimited | Unlimited |
| Recordings | Limited | Limited | Unlimited | Unlimited |
| Custom vocabulary slots | Limited | More | More | Unlimited |
| Team billing | No | No | No | Yes |
| Integrations (Slack/Docs/email) | No | No | No | Yes |

**Annual billing saves 50%** on Pro and Premium tiers.

Key limits to watch:
- Translation minutes and AI credits are separate pools — you can run out of one while the other remains
- Desktop transcription minutes are separate from Chrome extension transcription
- No rollover of unused minutes/credits

## Integrations

### Native apps
- **Desktop**: Mac and Windows
- **Mobile**: iPhone and Android
- **Browser**: Chrome extension (Google Meet only)

### Compatible meeting platforms
MS Teams, Zoom, Google Meet, Webex, Slack, Discord, WhatsApp, LINE, WeChat, YouTube

The desktop app works with any platform by capturing system audio. The Chrome extension is limited to Google Meet.

### Enterprise integrations (Enterprise plan only)
- Slack — push meeting summaries to channels
- Google Docs — export notes directly
- Email — automated summary distribution
- Custom workflow automation

### No public API
No documented REST API, no webhooks, no Zapier/Make connectors on self-serve plans. All automation is Enterprise-gated.

## Data model

No public API means no documented data model. Key concepts:
- **Translation Session**: A single recording/translation event
- **Translation Minutes**: Consumed per minute of active translation
- **AI Credits**: Consumed per AI feature use (summaries, notes, Ask JotMe)
- **Tokens**: Used for text-to-text translation (separate from speech translation)
- **Custom Vocabulary**: User-defined term pairs for domain accuracy

## Workflow setup

### Setting up live translation for a Zoom meeting

1. Download and install the JotMe desktop app (Mac or Windows)
2. Open JotMe and select source language (speaker's language) and target language
3. Join your Zoom meeting normally
4. Start translation in JotMe — it captures system audio directly (no bot)
5. Share the translation URL/QR code with attendees who need translated captions
6. After the meeting, access AI-generated notes and summaries (if AI credits available)

### Setting up for Google Meet (Chrome extension)

1. Install the JotMe Chrome extension from Chrome Web Store
2. Open Google Meet and join the meeting
3. Click the JotMe extension icon in the toolbar
4. Select source and target languages
5. Translation captions appear in real time — Pro/Premium get unlimited Chrome Meet transcription

### Conference/event setup

1. Use the desktop app or mobile app for in-person events
2. Configure custom vocabulary with industry-specific terms
3. Generate a QR code for attendees to access live translated captions on their devices
4. Use subtitle camera mode for live display on screens
5. Enterprise plan recommended for events (unlimited minutes, team billing)

## Deep dives

### Language coverage
107 languages including major Asian languages (Chinese, Japanese, Korean), European languages, Arabic, Hindi, and many others. Up to 10 languages can be active simultaneously in a single session.

### Audio capture method
JotMe uses system-level audio capture rather than joining as a meeting bot. This means:
- No "JotMe is recording" notification to other participants
- Works with any audio source on the device
- Requires proper audio routing (system audio must go through the device's output)
- May require granting accessibility/audio permissions on macOS

### Translation quality
Uses advanced multilingual speech recognition with contextual accuracy. Quality depends on:
- Audio clarity (headset/external mic recommended)
- Speaker pace (very fast speech may cause lag)
- Background noise levels
- Custom vocabulary configuration for domain-specific terms
