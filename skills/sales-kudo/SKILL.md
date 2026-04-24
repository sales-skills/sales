---
name: sales-kudo
description: "KUDO platform help — enterprise real-time AI speech translation and human interpretation in 200+ languages, embeddable widget for any meeting platform, 12,000+ interpreter marketplace, SOC 2 Type 2 + ISO 27001. Use when setting up KUDO for multilingual meetings or conferences, choosing between AI speech translation and human interpreters on KUDO, KUDO embeddable widget not working on a third-party event platform, comparing KUDO vs Interprefy vs Wordly vs JotMe for live interpretation, understanding KUDO Pro vs ProPlus vs ProPlatinum vs Enterprise pricing, or embedding KUDO translation into a hybrid event workflow. Do NOT use for choosing between all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your KUDO setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, interpretation, translation, platform]
---

# KUDO Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up KUDO for a meeting or event (install, first session, interpreter booking)
   - B) Troubleshooting an issue (widget not loading, audio delays, interpreter audio quality)
   - C) Comparing KUDO to another live interpretation tool (Interprefy, Wordly, JotMe)
   - D) Understanding pricing (Pro vs ProPlus vs ProPlatinum vs Enterprise)
   - E) Embedding KUDO into a third-party platform or hybrid event

2. **What's your meeting/event setup?**
   - A) Microsoft Teams (native integration)
   - B) Zoom (marketplace integration)
   - C) Third-party event platform (Hopin, On24, Bizzabo, Goldcast, etc.)
   - D) In-person / hybrid event with streaming
   - E) Custom web platform (embeddable widget)

3. **AI translation or human interpreters?**
   - A) AI-only (60+ languages, automated, 24/7)
   - B) Human interpreters (200+ languages, marketplace booking)
   - C) Both / not sure which I need

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just interpretation tools) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |
| Meeting scheduling for multilingual teams | `/sales-meeting-scheduler {user's question}` |

Otherwise, answer directly below.

## Step 3 — KUDO platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, integrations, widget setup, interpreter marketplace.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Determine if you need AI translation (automated, 60+ languages, 24/7) or human interpreters (200+ languages, scheduled sessions)
2. For Teams meetings — use the native KUDO integration (no widget needed)
3. For Zoom — install via KUDO Marketplace Zoom integration
4. For other platforms — embed the KUDO Language Access Widget (iframe)
5. Test audio routing before live events — the Auto-Floor API automatically mutes floor audio when attendees select a language channel

**Interpretation tool comparison quick guide:**
- KUDO vs Interprefy → Both offer AI + human interpreter hybrid models. KUDO has a larger marketplace (12,000+ interpreters). Interprefy has 80+ AI languages, 100+ human-interpreted. Choose based on your interpreter network needs and pricing structure
- KUDO vs Wordly → Wordly is AI-only (no human interpreters), 60+ languages, package-based pricing. Choose KUDO when you need human interpreters for rare languages or certified accuracy; Wordly for cost-effective AI-only translation at scale
- KUDO vs JotMe → JotMe is a meeting note-taker with translation (107 languages, $10-30/mo). KUDO is enterprise interpretation (200+ languages, custom pricing). Choose JotMe for daily team meetings with translation; KUDO for large events, conferences, or when human interpreters are required

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

- **AI covers 60+ languages; human interpreters cover 200+.** If you need a rare language, you must book human interpreters — AI translation won't cover it.
- **Pricing is usage-based and custom-quoted.** No self-serve purchase for any tier. Contact KUDO for all plans (Pro through Enterprise). All languages are charged at the same rate regardless of rarity.
- **Widget requires iframe embedding.** For non-Teams, non-Zoom platforms, you embed the KUDO viewer widget as an iframe — this requires front-end access to your event platform.
- **Auto-Floor API uses Window.postMessage.** The widget communicates with the host page via browser messaging — not a REST API. You must add a `window.addEventListener` handler.
- **No public REST API for meeting management.** You cannot programmatically create/manage meetings or access transcripts via API. All configuration is UI-driven or via the widget.
- **SOC 2 Type 2 + ISO 27001 certified.** Enterprise-grade compliance on AWS — but verify data residency requirements for your region.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-interprefy` — Interprefy platform help — enterprise RSI + AI speech translation, 80+ platform integrations, REST API
- `/sales-jotme` — JotMe platform help — real-time AI translation for daily meetings, 107 languages, $0-30/mo
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up KUDO for a multilingual Zoom webinar
**User says**: "I'm hosting a webinar on Zoom with attendees who speak English, French, and Mandarin. How do I set up KUDO?"
**Skill does**:
1. Explains the Zoom Marketplace integration — connect your Zoom account to KUDO
2. Walks through booking interpreters or enabling AI translation for French and Mandarin channels
3. Notes that attendees choose their language channel in the KUDO interface
4. Warns about testing audio routing before the live event
5. Mentions that AI translation covers both French and Mandarin (within the 60+ AI language set)
**Result**: Zoom webinar configured with multilingual interpretation channels.

### Example 2: Embedding KUDO widget in a custom event platform
**User says**: "I need to add live translation to our Bizzabo event page. How does the KUDO widget work?"
**Skill does**:
1. Explains the KUDO Language Access Widget — an iframe embed that streams translated audio
2. Describes the Auto-Floor API (Window.postMessage) that auto-mutes floor audio when attendees choose a channel
3. Provides the implementation pattern: `window.addEventListener('message', handler)` to listen for `floorMute` events
4. Notes up to 32 languages per event are supported
5. Recommends testing in a staging environment before the live event
**Result**: Widget integration plan with Auto-Floor API implementation.

### Example 3: KUDO vs Interprefy for a global sales kickoff
**User says**: "We're planning a 500-person global sales kickoff in 8 languages. Should I use KUDO or Interprefy?"
**Skill does**:
1. Compares interpreter marketplace size (KUDO 12,000+ vs Interprefy global network)
2. Notes both offer AI + human hybrid — KUDO AI covers 60+ languages, Interprefy AI covers 80+
3. Explains pricing structures (both are usage-based, custom-quoted)
4. Flags that KUDO has the native Teams integration; Interprefy works across platforms too
5. Recommends requesting quotes from both and comparing total cost for the specific language combination
**Result**: Side-by-side comparison with clear next steps for vendor evaluation.

## Troubleshooting

### Audio delays during interpretation
**Symptom**: Noticeable lag between the speaker's voice and the interpreted audio channel
**Cause**: Network latency between the speaker, KUDO's cloud processing (AWS), and the interpreter or AI engine
**Solution**: Ensure all participants have stable internet (wired preferred over Wi-Fi for speakers and interpreters). For AI translation, latency is typically 1-3 seconds. For human interpreters, expect 3-7 seconds. If delays exceed 10 seconds, check with KUDO support for server-side issues. Consider using the native Teams integration (lowest latency) over the embeddable widget.

### Widget not loading on third-party platform
**Symptom**: KUDO widget iframe shows blank or fails to render on your event platform
**Cause**: Content Security Policy (CSP) headers on the host page blocking the KUDO iframe, or cross-origin restrictions
**Solution**: Add KUDO's domain to your platform's CSP `frame-src` directive. Verify the embed URL is correct and the session is active. Test in an incognito browser to rule out extension conflicts. Contact your event platform's support to confirm iframe embedding is supported.

### Interpreters not available for a rare language pair
**Symptom**: Cannot find interpreters for a specific language on the KUDO Marketplace
**Cause**: The 12,000+ marketplace covers 200+ languages but rare pairs may have limited availability
**Solution**: Submit a request to KUDO support at least 2-3 weeks before your event. KUDO can source interpreters outside the marketplace for uncommon languages. Alternatively, use BYOI (Bring Your Own Interpreter) — provide your own interpreter and they connect via the KUDO Interpreter Console. If the language is within AI's 60+ coverage, consider AI translation as a fallback.
