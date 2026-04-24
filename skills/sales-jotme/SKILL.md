---
name: sales-jotme
description: "JotMe platform help — real-time AI translation and meeting intelligence with simultaneous interpretation in 107 languages, bot-free system audio capture, multilingual transcription, and AI meeting summaries. Use when setting up JotMe for live translation during multilingual meetings or conferences, JotMe translation minutes running out or credit limits confusing, choosing between JotMe and Jamy or Notta or Wordly for real-time meeting translation, understanding JotMe Free vs Pro vs Premium vs Enterprise pricing, or JotMe Chrome extension not capturing audio in Google Meet. Do NOT use for choosing between all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your JotMe setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, translation, platform]
github: "https://github.com/jotme"
---

# JotMe Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up JotMe (install, first translation session, device selection)
   - B) Troubleshooting an issue (audio capture, translation quality, credit usage)
   - C) Comparing JotMe to another real-time translation tool (Jamy, Notta, Wordly)
   - D) Understanding pricing (Free vs Pro vs Premium vs Enterprise)
   - E) Setting up for a conference or large event

2. **What platform are you translating on?**
   - A) Google Meet (Chrome extension)
   - B) Zoom (desktop app)
   - C) Microsoft Teams (desktop app)
   - D) In-person / mobile (iPhone or Android)
   - E) Other (Webex, Slack, Discord, WhatsApp, LINE, WeChat, YouTube)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just translation tools) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — JotMe platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, translation workflows, platform-specific setup.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Install the desktop app (Mac/Windows) or mobile app (iPhone/Android) — or Chrome extension for Google Meet
2. Start a translation session — select source and target languages
3. JotMe captures system audio directly (no bot joins) — ensure audio output routes through your device
4. Share translated captions with attendees via code, URL, QR code, or subtitle camera
5. Enable AI meeting notes for automatic summaries and action items (uses AI credits)

**Translation tool comparison quick guide:**
- JotMe vs Jamy → JotMe supports 107 languages with near-zero latency translation; Jamy has 100+ languages but is more meeting-notes-focused with CRM sync (HubSpot). Choose JotMe for translation-first, Jamy for notes-first with translation
- JotMe vs Notta → Notta has 58 languages and stronger transcription/CRM integrations; JotMe has nearly 2x language coverage and focuses on live interpretation. Choose JotMe for simultaneous interpretation, Notta for transcription + CRM
- JotMe vs Wordly → Wordly targets large events/webinars with usage-based pricing; JotMe targets daily meetings with subscription pricing. Choose JotMe for recurring team meetings, Wordly for one-off large conferences

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Translation minutes are metered, not unlimited.** Free gets 20 min/mo, Pro 200 min, Premium 500 min. Running out mid-meeting is a real risk — monitor usage before important calls.
- **AI credits are separate from translation minutes.** Meeting notes, AI summaries, and "Ask JotMe" all consume AI credits (Free: 5, Pro: 20, Premium: 50). You can exhaust credits while still having translation minutes left.
- **No public API.** Integrations (Slack, Google Docs, email) are Enterprise-only. No Zapier, no webhooks, no CRM sync on any self-serve plan.
- **Chrome extension is Google Meet only.** For Zoom, Teams, Webex, or other platforms, you must use the desktop app.
- **Real-time transcript scrolling is hard to follow.** Multiple reviewers report the live transcript updates too fast to read while it's being generated — use the post-meeting summary instead of trying to read in real time.
- **Enterprise pricing is not published.** You must contact sales for unlimited usage, team billing, and custom integrations.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-jamy` — Jamy.ai platform help — multilingual meeting notes with HubSpot CRM sync, 100+ languages
- `/sales-notta` — Notta platform help — 58-language transcription with CRM integrations
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up live translation for a multilingual team meeting
**User says**: "I need to translate a Zoom call from Japanese to English in real time for my global team. How do I set up JotMe?"
**Skill does**:
1. Walks through installing the JotMe desktop app (Chrome extension is Google Meet only)
2. Explains selecting Japanese as source and English as target language
3. Notes that JotMe captures system audio — no bot joins the Zoom call
4. Shows how to share translated captions via URL or QR code so team members can follow along
5. Warns about translation minute limits on the current plan
**Result**: Desktop app configured for Japanese → English Zoom translation.

### Example 2: Running out of translation minutes
**User says**: "I keep running out of JotMe translation minutes before my meetings are done. What are my options?"
**Skill does**:
1. Checks the user's current plan and usage pattern
2. Explains the minute allowances (Free: 20, Pro: 200, Premium: 500)
3. Recommends upgrading if usage consistently exceeds the current tier
4. Notes the annual billing discount (50% off) and Enterprise unlimited option
5. Suggests using transcription-only mode (separate allowance) for meetings that don't need translation
**Result**: Clear upgrade path or usage optimization strategy.

### Example 3: JotMe vs Jamy for multilingual sales team
**User says**: "Should I use JotMe or Jamy.ai for my sales team that has calls in English, Spanish, and Mandarin?"
**Skill does**:
1. Compares language coverage (JotMe 107 vs Jamy 100+) — both cover the user's three languages
2. Notes JotMe is translation-first with near-zero latency; Jamy is meeting-notes-first with translation as a feature
3. Flags that Jamy has HubSpot CRM sync; JotMe has no CRM sync except on Enterprise
4. If the team needs CRM integration, recommends Jamy; if they need the best live translation experience, recommends JotMe
**Result**: Clear recommendation based on CRM vs translation priority.

## Troubleshooting

### Translation quality drops mid-meeting
**Symptom**: Translations start accurate but become garbled or miss sentences
**Cause**: Background noise, multiple speakers talking over each other, or poor internet connectivity degrading the speech recognition
**Solution**: Use a headset or external microphone to improve audio input quality. Ensure only one person speaks at a time. Check internet connection stability — JotMe processes audio in the cloud. If using mobile, switch to Wi-Fi instead of cellular.

### Chrome extension not capturing audio in Google Meet
**Symptom**: JotMe Chrome extension installed but no translation appearing during a Google Meet call
**Cause**: Browser permissions not granted, or extension not activated for the current tab
**Solution**: Click the JotMe extension icon and ensure it has permission to access the tab's audio. Check Chrome settings → Extensions → JotMe → "Allow access to site data." Refresh the Google Meet tab after enabling. If still not working, try the desktop app instead — it captures system audio directly and works with any platform.

### AI credits exhausted but translation minutes remain
**Symptom**: Can still translate but AI meeting notes and "Ask JotMe" stop working
**Cause**: AI credits and translation minutes are separate allowances — AI features (notes, summaries, search) consume credits independently
**Solution**: Wait for the monthly credit reset, upgrade to a higher plan for more credits, or manually take notes instead of relying on AI summaries. Enterprise plan has unlimited credits.
