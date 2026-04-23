---
name: sales-memoro
description: "Memoro platform help — German GDPR-first AI meeting assistant with local device recording, customizable Blueprints, and searchable Memories. Use when setting up Memoro for a team, choosing between Memoro plans (Free/Plus/Pro/Ultra), Memoro transcription quality is poor or wrong language detected, Memoro Blueprints not producing the right output format, Memoro recordings not syncing across devices, comparing Memoro vs Jamie or Granola for bot-free EU-hosted recording, or evaluating GDPR-compliant meeting note-takers hosted in Germany. Do NOT use for reviewing a specific call for coaching (use /sales-call-review) or comparing note-takers broadly (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Memoro]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, conversation-intelligence, platform]
---

# Memoro Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Set up Memoro for my team or myself
   - B) Pick a plan (Free / Plus / Pro / Ultra)
   - C) Fix a transcription, sync, or Blueprint issue
   - D) Compare Memoro to another tool (Jamie, Granola, Fathom, etc.)
   - E) Integrate Memoro output into another tool or workflow

2. **What's your use case?**
   - A) Sales meetings (discovery, demos, deal reviews)
   - B) Internal meetings (standups, 1:1s, all-hands)
   - C) Education / university lectures
   - D) Field / in-person conversations
   - E) Voice notes and dictation

3. **What platforms do you record on?**
   - A) Zoom / Teams / Google Meet (virtual)
   - B) In-person (phone mic or desktop mic)
   - C) Phone calls
   - D) Mix of virtual and in-person
   - E) Audio file uploads (MP3, WAV)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| Comparing note-takers broadly (not just Memoro) | `/sales-note-taker {user's question}` |
| General tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

When routing to another skill, provide the exact command.

Otherwise, answer directly below.

## Step 3 — Memoro platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, Blueprints, Memories, integrations, and workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Plan selection:**
- Free (€0, 180 Mana/~75 min): try before buying, solo voice notes
- Plus (€9, 600 Mana): individual professional, a few meetings/week
- Pro (€23, 1,800 Mana): daily meeting recorder, team collaboration
- Ultra (€42, 4,800 Mana): heavy meeting load, manager recording all reports

**When to pick Memoro over alternatives:**
- GDPR compliance with German hosting is non-negotiable → Memoro or Jamie
- Bot-free recording required + you want cross-platform (macOS/Windows/Linux/mobile) → Memoro (Jamie is macOS/web only)
- Education, healthcare documentation, or construction field notes → Memoro targets these verticals
- Budget under €10/mo with decent transcription → Memoro Plus at €9/mo

**When to avoid Memoro:**
- You need CRM integration (HubSpot, Salesforce) → Fathom, Jamie, or Granola
- You need API/webhook automation → Fathom, Fireflies, or Wave
- You need sales-specific features (coaching, deal intelligence) → Gong, Avoma, or tl;dv
- You need English-only and cheapest possible → Fathom free tier

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No native CRM integrations.** Memoro has no HubSpot, Salesforce, or Pipedrive connector. Export is manual (Word, PDF, Markdown) or via API (undocumented).
- **API exists but is undocumented.** Memoro mentions API integration on its site but provides no public API docs. Contact support before building anything on it.
- **Mana-based pricing is confusing.** Minutes don't map 1:1 to Mana — the Free tier gives 180 Mana for ~75 minutes. Expect ~2.4 Mana per minute of audio.
- **No meeting platform auto-join.** Memoro records locally from your device mic — it won't auto-join Zoom/Teams/Meet like Fathom or Fireflies. You must start recording manually or use the app.
- **Limited third-party integrations.** No Zapier, no Make, no Slack integration documented. Team collaboration is internal to Memoro only.
- **Speaker recognition caps at 12.** For large meetings or webinars with many speakers, diarization may merge speakers.
- **AI summaries limited to 24 languages** while transcription supports 50+. If you need summaries in a less common language, check support first.

## Related skills

- `/sales-note-taker` — Compare AI note-takers broadly, or wire transcript APIs into downstream systems
- `/sales-jamie` — Jamie platform help — closest competitor (bot-free, EU-hosted, GDPR)
- `/sales-granola` — Granola platform help — bot-free AI notepad, HubSpot/Attio CRM sync
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: GDPR-compliant meeting notes for a German team
**User says**: "I need meeting notes for my team in Munich — GDPR is non-negotiable and we don't want a bot joining our calls."
**Skill does**:
1. Confirms Memoro fits: German hosting, GDPR-compliant, no bot, local recording
2. Recommends Pro plan (€23/mo) for daily meetings with team collaboration
3. Sets up Blueprint for their meeting type (e.g., "Meeting" Blueprint for multi-speaker standups)
4. Notes the limitation: no CRM sync, so they'll export to Markdown and paste or use a Zapier alternative
**Result**: Team records locally, gets structured German-language meeting notes with task detection.

### Example 2: Comparing Memoro vs Jamie for privacy-first teams
**User says**: "Should I use Memoro or Jamie? We're a 10-person EU startup."
**Skill does**:
1. Both are bot-free, EU-hosted, GDPR-compliant
2. Jamie advantage: CRM sync (HubSpot/Salesforce/Attio), API + webhooks, MCP server
3. Memoro advantage: cross-platform (Linux + mobile apps), cheaper entry (€9 vs €21/mo), education/field verticals, offline mode
4. Recommends Jamie if CRM integration matters; Memoro if budget and cross-platform are priorities
**Result**: Clear comparison with a decision tiebreaker based on their specific needs.

### Example 3: Fixing poor transcription quality
**User says**: "Memoro keeps transcribing my English meetings in German — how do I fix the language?"
**Skill does**:
1. Checks if auto-language detection is set — Memoro defaults to the app language
2. Recommends setting the recording language explicitly before starting
3. Suggests checking the Blueprint language settings
4. Notes that 50+ languages are supported for transcription but the app UI language may influence detection
**Result**: User configures explicit language selection and gets accurate English transcription.

## Troubleshooting

### Transcription in the wrong language
**Symptom**: Memoro transcribes in German (or another language) despite speaking English
**Cause**: Auto-language detection defaults to app/device language, which may be German for German users
**Solution**: Set the recording language explicitly in the Blueprint or recording settings before starting. If the issue persists, check device language settings.

### Recordings not syncing across devices
**Symptom**: A recording made on mobile doesn't appear on desktop
**Cause**: Sync requires internet connection — offline recordings queue until connectivity is restored
**Solution**: Ensure the device is connected to the internet and wait for sync to complete. Check that you're logged into the same account on both devices. Force-sync by opening the app and pulling to refresh.

### Blueprint output not matching expectations
**Symptom**: AI summary is too generic or missing key details
**Cause**: Using the default Blueprint for a specialized meeting type
**Solution**: Create a custom Blueprint tailored to your meeting format — specify the sections you want (decisions, action items, key quotes), the output language, and the level of detail. Test with a short recording first.
