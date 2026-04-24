---
name: sales-talo
description: "Talo platform help — real-time AI meeting translation via single bot for Zoom/Google Meet/Teams, powered by Palabra API with Python/JS/Java SDKs. Use when setting up Talo for multilingual sales calls, configuring real-time translation for international team meetings, choosing between Talo and other AI meeting translators (JotMe, KUDO, Interprefy, Langfinity, Transync AI), integrating Palabra speech-to-speech API into a custom app, building voice cloning or custom glossary workflows via API, or troubleshooting Talo bot not joining or translation quality issues. Do NOT use for choosing an AI meeting note-taker without translation needs (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your Talo setup, translation, or API question]"
license: MIT
version: 1.0.0
tags: [sales, meeting-translation, real-time-translation, platform]
github: "https://github.com/PalabraAI"
---

# Talo Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Set up Talo for my team's multilingual meetings
   - B) Compare Talo vs other meeting translation tools
   - C) Integrate Palabra's speech-to-speech API into my app
   - D) Troubleshoot a Talo issue (bot not joining, translation quality, billing)

2. **What's your meeting platform?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Custom app (API integration)

3. **Scale and languages?**
   - A) 1-2 language pairs, <20 meetings/month
   - B) 3-5 languages, 20-100 meetings/month
   - C) 5+ languages, 100+ meetings/month or live events

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing a meeting note-taker (not translation) | `/sales-note-taker {user's question}` |
| Reviewing a sales call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |
| Enterprise RSI with human interpreters | `/sales-kudo {user's question}` or `/sales-interprefy {user's question}` |

Otherwise, answer directly below.

## Step 3 — Talo platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, Palabra API integration recipes, code examples.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Selection framework** (if comparing tools):
1. **Budget** — Talo Starter $33/mo (120 min) vs JotMe $10/mo vs Transync AI $8.99/mo. Talo is premium-priced but includes SOC 2/ISO 27001.
2. **Bot vs bot-free** — Talo uses a single bot (visible to participants). Transync AI and JotMe are bot-free. Some organizations prohibit bots.
3. **API needs** — Talo/Palabra has the richest developer API (REST + WebSocket/WebRTC, Python/JS/Java SDKs). Most competitors have no API.
4. **Language count** — Talo 60+, JotMe 107, KUDO 200+, Langfinity 50+, Transync AI 60+.
5. **Enterprise compliance** — Talo (SOC 2 + ISO 27001), KUDO (SOC 2 + ISO 27001), Interprefy (ISO 27001). JotMe, Transync AI, Langfinity have no published certifications.

**Quick picks:**
- Enterprise meetings needing compliance + API → Talo
- Budget multilingual team → JotMe or Transync AI
- Enterprise events with human interpreters → KUDO or Interprefy
- Domain-specific terminology (manufacturing, safety) → Langfinity

If you discover a gotcha not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Talo is 7-8x more expensive per minute than JotMe.** Starter = $0.275/min ($33/120 min) vs JotMe ~$0.045/min. Justify the premium with SOC 2/ISO 27001 compliance needs, not just translation quality.
- **The bot is visible to all participants.** Unlike bot-free tools (Transync AI, JotMe), Talo's AI translator joins as a meeting participant. Some organizations block bots.
- **API pricing is separate from the meeting app.** Palabra API starts at $150/mo (Pro) — don't assume your $33/mo Talo plan includes API access.
- **Team plan is "coming soon."** As of 2026-04, only Starter, Pro, and Enterprise are live. Multi-seat purchases require Enterprise sales.
- **No CRM integration.** Talo translates meetings but doesn't transcribe to CRM. Pair with a note-taker (Fathom, Fireflies) if you need CRM sync.
- **No webhooks.** Palabra API has REST endpoints but no webhook/event system. You must poll or use the streaming API.
- **60 languages, not 100+.** JotMe covers 107, KUDO 200+. If you need rare languages, check the supported list first.

## Related skills

- `/sales-note-taker` — Compare all AI meeting note-takers and translation tools side by side. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-jotme` — JotMe platform help (budget AI translation + meeting notes, 107 languages, bot-free)
- `/sales-kudo` — KUDO platform help (enterprise AI + human interpretation, 200+ languages, SOC 2/ISO 27001)
- `/sales-interprefy` — Interprefy platform help (enterprise RSI + AI, 80+ platform integrations, REST API)
- `/sales-langfinity` — Langfinity platform help (domain-specific voice translation, AI voice avatars)
- `/sales-transync-ai` — Transync AI platform help (near-zero latency translation, bot-free, dual-screen)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Setting up Talo for a global sales team
**User says**: "I run sales calls with prospects in Japan, Germany, and Brazil. How do I set up Talo so everyone hears the call in their language?"
**Skill does**:
1. Confirms Talo supports Japanese, German, and Portuguese
2. Walks through: invite the Talo bot to Zoom/Meet/Teams, each participant selects their preferred language
3. Notes the single-bot architecture — one bot translates everyone, no per-language setup
4. Flags Starter plan limits (120 min/mo) — if running 10+ calls/month, recommend Pro ($100/mo, 400 min)
**Result**: Clear setup instructions with plan sizing guidance.

### Example 2: Integrating Palabra API for a custom conferencing app
**User says**: "I'm building a telehealth platform and need real-time translation. Can I use Talo's API?"
**Skill does**:
1. Points to Palabra API (Talo's parent), not Talo meeting app — API is separate
2. Shows streaming session creation via REST, then WebSocket/WebRTC connection for audio
3. Provides Python SDK quickstart with `PalabraAI().run(config)` pattern
4. Notes API pricing starts at $150/mo (Pro, 150 credits)
5. Flags HIPAA gap — Talo has SOC 2 but no published HIPAA certification. Recommend confirming with Palabra for telehealth compliance.
**Result**: Working integration path with pricing and compliance caveats.

### Example 3: Talo vs alternatives for a compliance-sensitive team
**User says**: "We need meeting translation but our security team requires SOC 2. What are our options?"
**Skill does**:
1. Short-lists SOC 2 certified: Talo (SOC 2 + ISO 27001), KUDO (SOC 2 + ISO 27001)
2. ISO 27001 only: Interprefy
3. Compares: Talo for daily meetings ($33-100/mo), KUDO for enterprise events (custom pricing + human interpreters)
4. Notes Talo's no-data-retention policy as an additional privacy advantage
**Result**: Compliance-filtered comparison with clear use-case segmentation.

## Troubleshooting

### Talo bot not joining the meeting
**Symptom**: You start a Zoom/Meet/Teams call but the Talo translator bot doesn't appear
**Cause**: Meeting link format, bot permissions, or platform-specific restrictions (some orgs block external bots)
**Solution**: Verify the meeting link is a standard join URL (not a personal room). Check that your meeting platform allows external participants/bots. For Teams, ensure guest access is enabled in admin settings. Try the 7-day free trial on a personal account first to isolate org-level blocks.

### Translation quality is poor for technical terms
**Symptom**: Industry jargon or product names are mistranslated or garbled
**Cause**: Generic translation models don't know domain-specific vocabulary
**Solution**: Use Palabra's Glossary API to create custom term lists. Upload a CSV with source→target term pairs. Glossary types: `translation` (override translations), `asr` (improve recognition), `asr_hot` (boost recognition for rare terms). This requires API access ($150+/mo).

### Overrunning minute limits on Starter plan
**Symptom**: Translation stops mid-meeting or you hit the 120-minute cap early in the month
**Cause**: Starter plan includes only 120 min/mo — a single 2-hour all-hands uses it all
**Solution**: Upgrade to Pro ($100/mo, 400 min) or buy extra minutes ($0.25/min on Pro). If usage is bursty (e.g., quarterly board meetings), consider staying on Starter and buying overages only when needed. Annual billing saves 20% on Pro ($80/mo).
