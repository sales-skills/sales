# reason8 Platform Guide

> Best-effort as of 2026-04. Verify on reason8.ai before quoting.

## Overview

reason8 (formerly Auroom) is an AI-powered meeting note-taker designed specifically for in-person meetings. Its differentiator is multi-smartphone audio capture — multiple attendees record on their own phones, and reason8 fuses the audio streams into a single transcript with better speaker separation and audio quality than a single-device recording.

**Company**: reason8 (originally Auroom), founded 2016, US-based. Appeared at TechCrunch Disrupt Berlin 2017. Patent-pending multi-device audio fusion approach.

**Target audience**: Project managers, executive assistants, business analysts, consultants — anyone who takes notes in face-to-face meetings.

## Core features

| Feature | Details |
|---|---|
| Multi-device recording | Multiple smartphones record the same meeting; audio streams are combined into one transcript |
| AI transcription | Speech-to-text with punctuation and speaker identification |
| AI summaries | Automated meeting summaries and minutes |
| Action item extraction | AI identifies tasks and follow-ups from the conversation |
| Highlight button | Tap during recording to mark important moments for easy review |
| Selective sharing | Share specific meeting segments with colleagues |
| Export | Transcript and summary export |
| Mobile apps | iOS and Android native apps |

## Pricing

| Plan | Price | Recording limit | Notes |
|---|---|---|---|
| Free | $0 | 15 min/meeting | Basic features, good for testing |
| Pro | ~$18.99-19.99/user/mo | Unlimited | Full transcription, summaries, action items, sharing |
| Enterprise | Custom | Unlimited | Contact reason8 for pricing |

Note: Pricing sources vary slightly ($18.99 on SourceForge, $19.99 on other listings). Verify on reason8.ai.

## Multi-device recording — how it works

1. All meeting participants open reason8 on their smartphones
2. Each person starts recording independently
3. reason8 combines audio from all devices into a single transcript
4. Speaker identification improves because each phone primarily captures the nearest speaker's voice
5. The fused transcript includes speaker labels, punctuation, and timestamps

**Best practices for multi-device recording**:
- Place each phone on the table near its owner, screen-up
- Ensure all devices have strong internet connectivity for upload
- Start recordings at approximately the same time
- The "host" device is the primary — ensure it has the best microphone quality

## Integrations

| Integration | Status |
|---|---|
| Slack | Documented |
| CRM (Salesforce, HubSpot, etc.) | None |
| Zapier / Make / n8n | None |
| API | None |
| Webhooks | None |
| Calendar sync | Not documented |

## Platform support

- **iOS**: Native app
- **Android**: Native app
- **Web**: Cloud dashboard for reviewing notes
- **Desktop**: Not documented
- **Language**: English only (per SourceForge)

## Competitive positioning

| Factor | reason8 | Speakwise | Wave | Omi | Plaud |
|---|---|---|---|---|---|
| In-person focus | Yes (primary) | Yes (primary) | Yes (one mode) | Yes (primary) | Yes (primary) |
| Multi-device recording | Yes (unique) | No | No | No | No |
| Price | $19.99/mo | $59.99/yr | $11.67/mo+ | $89 hardware + $0-19/mo | $127-189 hardware + $0-30/mo |
| API | None | None | REST + webhooks | REST | REST (private beta) |
| CRM | None | None (Notion only) | None (export only) | None | None (undocumented) |
| Video call recording | No | No | Yes (via desktop) | Yes (via desktop) | No |
| Hardware required | Smartphones (BYO) | iPhone (BYO) | Smartphones (BYO) | $89 wearable | $127-189 recorder |
| Languages | English only | 50+ | 76 | 20+ | 112 |

## Known limitations

- No public API or webhook support — no way to programmatically access transcripts
- No CRM integration — manual export required for any CRM workflow
- English-only language support limits international use
- Very limited independent reviews — hard to verify quality claims
- No video call integration — cannot join Zoom/Teams/Meet
- No desktop app for online meeting recording
- Free tier's 15-minute cap is impractical for business meetings
- No documented calendar sync or automatic meeting detection
