# NoteWave Platform Reference

## Overview

NoteWave (notewave.ai) by DOTFORGE LIMITED is an iOS AI note-taking app that records audio, transcribes in 100+ languages with speaker identification, and generates AI summaries, flashcards, and quizzes. Primarily targets students, professionals, researchers, and educators. Apple ecosystem only — no API, no CRM, no integrations.

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| Audio recording | One-tap recording of meetings, lectures, calls | UI-only |
| Transcription | AI-powered transcription in 100+ languages with speaker labels | UI-only |
| AI summaries | Automatic condensed summaries of recordings | UI-only |
| Flashcards & quizzes | Auto-generated study materials from transcripts | UI-only (Premium) |
| Chat with notes | Ask AI questions about your recordings/notes | UI-only (Premium) |
| YouTube import | Paste a YouTube URL → structured notes | UI-only |
| Document import | Upload PDFs, Word docs, presentations → structured notes | UI-only |
| Full-text search | Millisecond search across all transcripts and summaries | UI-only |

**No public API, no webhooks, no Zapier/Make integration, no MCP server.** All features are UI-only — there is no programmatic access to any NoteWave data.

## Pricing, limits & plan gates

| Tier | Price | What's included |
|---|---|---|
| Free | $0 | 3 notes total (not per month), basic transcription and summaries |
| Premium Weekly | $9.99/week | Unlimited notes, flashcards, quizzes, extended chat |
| Premium Monthly | $12.99/month | Same as weekly, better value |
| Premium Annual | $44.99/year | Same as monthly, best value (~$3.75/mo) |
| Premium Annual (higher) | $79.99/year | Feature differences between the two annual tiers are not clearly documented |

All subscriptions managed through Apple App Store. No team/enterprise pricing. No volume discounts.

**Plan gates:**
- Free: 3 notes ever, basic features
- Premium: Unlimited notes, flashcards, quizzes, extended AI chat, full document processing

## Integrations

**None.** NoteWave is a standalone iOS app with no integrations:
- No CRM connectors (no HubSpot, Salesforce, etc.)
- No Zapier/Make/n8n triggers or actions
- No Slack/Teams/email integrations
- No calendar sync (no auto-join for meetings)
- No export API — notes exist only within the app
- Apple Sign-in is the only authentication method

**Workarounds for getting data out:**
- Manual copy-paste of transcripts/summaries from the app
- Screenshot/screen recording of flashcards
- No bulk export option documented

## Data model

NoteWave uses Supabase for storage and Google Cloud AI for processing.

**Note object** (inferred from app behavior):
<!-- Constructed from app description — no API to verify against -->
```json
{
  "id": "uuid",
  "type": "recording | youtube | document",
  "title": "Meeting with team",
  "created_at": "2026-04-26T10:00:00Z",
  "transcript": {
    "segments": [
      {
        "speaker": "Speaker 1",
        "text": "Let's discuss the roadmap...",
        "start_ms": 0,
        "end_ms": 5200
      }
    ]
  },
  "summary": "Key discussion points: ...",
  "flashcards": [
    {"question": "What was decided about the roadmap?", "answer": "..."}
  ],
  "language": "en"
}
```

## Data handling & privacy

- **Audio files**: Deleted from servers immediately after transcription (typically within minutes)
- **Generated notes**: Retained for account lifetime
- **Diagnostic data**: Anonymized, retained up to 12 months
- **Processing**: Google Cloud AI (transcription/summarization)
- **Storage**: Supabase (US and EU data centers)
- **Push notifications**: Apple Push Notification Service
- **Subscription validation**: RevenueCat (entitlement status only)

## Platform requirements

- iPhone/iPad: iOS 15.1 or later
- Mac: macOS 12.0 or later, Apple M1 chip or later
- Apple Vision: visionOS 1.0 or later
- App size: 63.6 MB
- Developer: DOTFORGE LIMITED
- Initial release: December 12, 2025
- Current version: 1.0.5 (March 24, 2026)

## Selection comparison

| Factor | NoteWave | Fathom (free) | Notta (free) | Cleft Notes ($29/yr) |
|---|---|---|---|---|
| Price | $44.99-79.99/yr | Free (unlimited) | Free (120 min/mo) | $29/yr |
| Platforms | iOS/macOS only | Web, desktop, mobile | Web, desktop, mobile | Apple only |
| API | None | REST + webhooks | Zapier only | None |
| CRM | None | Business+ (HubSpot/SF) | Business+ (5 CRMs) | None |
| Languages | 100+ | 30+ | 58 | 20+ |
| Study features | Flashcards, quizzes | None | None | None |
| Meeting bot | None | Yes (auto-join) | Yes (Notta Bot) | None |
| Best for | Students, personal notes | Sales teams, budget | Multilingual teams | Apple note-taking |

**Pick NoteWave when**: You're an Apple-only user who wants a simple app combining meeting transcription with study features (flashcards/quizzes), you value privacy (audio deleted immediately), you need 100+ language support, or you're a student/researcher who wants to turn lectures into study materials.

**Avoid NoteWave when**: You need any integrations (CRM, Slack, Zapier), you need an API or webhooks, your team uses Android or Windows, you need a meeting bot that auto-joins Zoom/Meet/Teams, you need team collaboration features, or you're evaluating tools for a sales organization (use Fathom, Fireflies, or tl;dv instead).
