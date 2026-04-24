---
name: sales-interprefy
description: "Interprefy platform help — enterprise multilingual communication with RSI (Remote Simultaneous Interpretation), AI speech translation, and live captions across 80+ meeting/event platforms. Use when setting up Interprefy for a multilingual conference or meeting, choosing between Interprefy Inject vs Widget vs Virtual Cable vs Agent integration methods, audio delays or iframe not loading during live interpretation, comparing Interprefy vs KUDO vs Wordly vs Interactio for enterprise interpretation, understanding Interprefy pricing (hourly vs daily vs 12-month plans), or connecting Interprefy to Zoom, Teams, or a third-party event platform. Do NOT use for choosing between all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your Interprefy setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, interpretation, translation, platform]
github: "https://github.com/interprefy"
---

# Interprefy Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Interprefy for a meeting or event (first session, integration method)
   - B) Troubleshooting an issue (audio delays, widget not loading, app problems)
   - C) Comparing Interprefy to another interpretation tool (KUDO, Wordly, Interactio)
   - D) Understanding pricing (hourly vs daily vs plans)
   - E) Integrating Interprefy into a third-party event platform

2. **What's your meeting/event setup?**
   - A) Microsoft Teams
   - B) Zoom
   - C) Google Meet / Webex
   - D) Virtual event platform (ON24, Livestorm, Bizzabo, 6Connex, etc.)
   - E) In-person / hybrid event with streaming
   - F) Custom web platform

3. **AI translation or human interpreters?**
   - A) AI-only (80+ languages, automated)
   - B) Human interpreters (6,000+ network, spoken + sign language)
   - C) Both / not sure which I need

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just interpretation tools) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |
| KUDO-specific questions | `/sales-kudo {user's question}` |

Otherwise, answer directly below.

## Step 3 — Interprefy platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, API, integration methods.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Integration method selection:**
1. **Interprefy Inject** — best for seamless experience, translation delivered directly into the meeting platform's audio feed (no separate app needed)
2. **Interprefy Agent** — auto-joins meetings as a smart participant, attendees get QR code for language selection
3. **Interprefy Widget** — separate panel alongside your event, works with any platform
4. **Interprefy Virtual Cable** — works without changing existing AV setup, accessible via mobile app or web

**Interpretation tool comparison quick guide:**
- Interprefy vs KUDO — Both offer AI + human hybrid. KUDO has 12,000+ interpreter marketplace with widget embedding. Interprefy integrates with 80+ platforms via four integration methods (Inject/Widget/Agent/Virtual Cable). Choose based on integration needs and interpreter sourcing model
- Interprefy vs Wordly — Wordly is AI-only (no human interpreters), 60+ languages, package pricing. Choose Interprefy when you need human interpreters or sign language support
- Interprefy vs Interactio — Both enterprise RSI platforms. Interactio focuses on large-scale events with polling/analytics. Interprefy has broader platform integration (80+) and AI speech translation

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Pricing is 100% custom-quoted.** No public dollar amounts. Hourly, daily, or 12-month plan options — minimum 10 hours on plans. Contact sales for any pricing.
- **Widget embedding requires HTML/iframe skills.** G2 reviewers flag this — you may need a developer to embed the Interprefy widget on custom event platforms.
- **No Zapier/Make integration.** All automation is via the REST API (JWT auth). No iPaaS connectors.
- **Bluetooth headset issues on mobile app.** Reported on Android — the app requires Bluetooth permission to be granted, otherwise connected headsets may cause crashes.
- **ISO 27001 certified, end-to-end encryption.** Enterprise compliance — but verify data residency requirements for your region.
- **API is session management only.** You can create events, sessions, and login tokens via the API, but cannot control AI translation or book interpreters programmatically.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-kudo` — KUDO platform help — enterprise real-time AI speech translation + human interpreter marketplace
- `/sales-jotme` — JotMe platform help — real-time AI translation for daily meetings, 107 languages, $0-30/mo
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Interprefy for a Zoom webinar in 5 languages
**User says**: "I'm running a 500-person webinar on Zoom with English, Spanish, French, German, and Mandarin. How do I set up Interprefy?"
**Skill does**:
1. Recommends Interprefy Inject for Zoom — delivers translation directly into the Zoom audio feed
2. Explains that attendees choose their language channel without leaving Zoom
3. Notes AI speech translation covers all 5 languages (within the 80+ AI language set)
4. Recommends testing the integration before the live event
5. Mentions the option to add human interpreters for higher accuracy in critical sessions
**Result**: Zoom webinar configured with multilingual interpretation via Inject.

### Example 2: Automating event session creation via the API
**User says**: "I need to programmatically create interpretation sessions for our recurring weekly multilingual meetings. Can I use the Interprefy API?"
**Skill does**:
1. Confirms the REST API supports event and session creation (JWT auth)
2. Provides the endpoint pattern: `POST /api/v2/events/` then `POST /api/v2/sessions/` with language assignment
3. Shows auth flow: obtain JWT via `POST /token-auth/obtain/`, refresh before 7-day expiry
4. Notes login tokens can be generated via `POST /api/v2/logintokens/` for participant access
5. Warns that interpreter booking and AI translation toggle are UI-only — cannot be automated via API
**Result**: API automation plan for recurring session creation with known limitations.

### Example 3: Interprefy vs KUDO for a global sales kickoff
**User says**: "We need live interpretation for a 3-day global sales kickoff with 800 attendees in 10 languages. Interprefy or KUDO?"
**Skill does**:
1. Compares integration approaches — Interprefy offers 4 methods (Inject/Widget/Agent/Virtual Cable); KUDO offers native Teams/Zoom + embeddable widget
2. Notes interpreter sourcing: Interprefy has 6,000+ interpreters; KUDO has 12,000+ marketplace
3. Both offer AI + human hybrid — Interprefy AI covers 80+ languages, KUDO AI covers 60+
4. Both are ISO 27001 certified; KUDO also has SOC 2 Type 2
5. Recommends requesting quotes from both — pricing is custom for both platforms
**Result**: Side-by-side comparison with clear next steps for vendor evaluation.

## Troubleshooting

### Widget iframe not loading on event platform
**Symptom**: Interprefy widget shows blank or fails to render on your event platform
**Cause**: Content Security Policy (CSP) headers on the host page blocking the iframe, or cross-origin restrictions
**Solution**: Add Interprefy's domain to your platform's CSP `frame-src` directive. Verify the embed URL and session are active. Test in incognito to rule out browser extension conflicts. If your event platform doesn't support iframes, consider Interprefy Inject or Agent instead.

### Audio delays during interpretation
**Symptom**: Noticeable lag between the speaker and the translated audio
**Cause**: Network latency between speaker, Interprefy's cloud processing, and the interpreter or AI engine
**Solution**: Ensure stable internet for speakers and interpreters (wired preferred). AI translation typically has 1-3 second latency; human interpreters 3-7 seconds. If delays exceed 10 seconds, contact Interprefy support. Try Interprefy Inject (lowest latency) over Widget if possible.

### Microphone not detected on interpreter console
**Symptom**: Interpreter's microphone not recognized in the Interprefy soft console
**Cause**: Competing applications (Zoom, Skype, WhatsApp) holding the microphone, or browser permission denied
**Solution**: Follow the RRR Protocol — Restart All Lines (refresh icon), then Reload Browser, then Reopen Browser with cleared cache. Close all competing audio apps. Click the lock icon in the address bar to verify microphone permission is set to "Allow". Try a different USB port if using an external microphone.
