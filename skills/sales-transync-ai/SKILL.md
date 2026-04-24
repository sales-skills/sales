---
name: sales-transync-ai
description: "Transync AI platform help — real-time AI meeting translation with near-zero latency (<0.5s) dual-screen bilingual display across 60+ languages, AI voice broadcast, AI meeting notes with summaries, custom domain terminology via AI Assistant, system audio sharing (no bot/plugin) for Zoom/Teams/Meet/WhatsApp. Use when setting up Transync AI for multilingual meetings, Transync AI translation accuracy dropping with accents or technical terms, Transync AI dual-screen display not showing translations, Transync AI meeting notes not generating summaries, choosing between Transync AI Personal Premium vs Enterprise plan, Transync AI time card top-up running out mid-meeting, Transync AI voice broadcast not working, or Transync AI vs JotMe or Talo or Langfinity for real-time meeting translation. Do NOT use for general note-taker comparison across all platforms (use /sales-note-taker) or enterprise RSI with human interpreters (use /sales-kudo or /sales-interprefy)."
argument-hint: "[describe what you need help with in Transync AI]"
license: MIT
version: 1.0.0
tags: [sales, translation, meeting, platform]
---

# Transync AI Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Transync AI for meetings (Zoom, Teams, Meet, WhatsApp, in-person)
   - B) Choosing a plan (Free vs Personal Premium vs Enterprise vs Time Cards)
   - C) Improving translation accuracy (accents, technical terms, domain vocabulary)
   - D) Troubleshooting (audio not capturing, translations not displaying, billing issue)
   - E) Comparing Transync AI vs another translation tool

2. **What platforms are you translating on?**
   - A) Zoom
   - B) Microsoft Teams
   - C) Google Meet
   - D) WhatsApp voice calls
   - E) In-person meetings
   - F) Multiple platforms

3. **What languages do you need?**
   - A) Two languages (which pair?)
   - B) Multiple languages in the same meeting
   - C) Primarily Asian languages (Chinese, Japanese, Korean)
   - D) European languages

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing multiple note-taker/translation tools | `/sales-note-taker [your question]` |
| Enterprise RSI with human interpreters | `/sales-kudo [your question]` or `/sales-interprefy [your question]` |
| Voice-to-voice with domain-specific terminology | `/sales-langfinity [your question]` — similar niche |

When routing, provide the exact command.

## Step 3 — Transync AI platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, setup workflows, integration details, troubleshooting recipes.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **For setup**: Walk through platform-specific audio sharing steps (system audio → Transync listens)
- **For accuracy**: Configure AI Assistant with domain keywords before the meeting
- **For plan selection**: Match hours/month to meeting frequency — most teams underestimate by 2x
- **For enterprise**: Org knowledge base + volume discounts unlock at $1K annual spend
- **For comparison**: Focus on latency (<0.5s vs 3-4s for JotMe), language count, and whether they need human interpreters

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No API, no webhooks, no Zapier** — Transync AI is UI-only with no programmatic interface. You cannot automate transcript export or integrate with CRM/data pipelines.
- **40-minute free trial is one-time** — once exhausted, you must subscribe or buy a time card. There is no recurring free tier.
- **Time cards don't roll over** — purchased hours expire (check current terms). Enterprise overage deducts from the org pool automatically.
- **System audio sharing varies by OS** — macOS requires granting screen recording permission; Windows needs audio routing configuration. WhatsApp requires phone audio output to the device Transync is running on.
- **SOC 2 Type II and ISO 27001 are "in progress"** — not yet certified as of 2026-04. Verify current status before relying on these for compliance decisions.
- **No CRM integration** — meeting notes and transcripts stay inside Transync AI. Export is manual (copy/paste or download).
- **Accent accuracy degrades** — heavy accents, overlapping speakers, and noisy environments reduce translation quality. Use AI Assistant keywords to improve domain-specific accuracy.

## Related skills

- `/sales-note-taker` — Compare all AI meeting note-taker and translation platforms. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-jotme` — JotMe real-time translation + meeting notes (107 languages). Install: `npx skills add sales-skills/sales --skill sales-jotme -a claude-code`
- `/sales-langfinity` — Voice-to-voice AI meeting translation with domain terminology. Install: `npx skills add sales-skills/sales --skill sales-langfinity -a claude-code`
- `/sales-kudo` — Enterprise AI + human interpretation (200+ languages). Install: `npx skills add sales-skills/sales --skill sales-kudo -a claude-code`
- `/sales-interprefy` — Enterprise RSI + AI speech translation for events. Install: `npx skills add sales-skills/sales --skill sales-interprefy -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**Example 1** — "I need to set up Transync AI for my weekly Zoom calls with our Japan office"
→ Walk through Zoom audio sharing setup, recommend configuring AI Assistant with industry-specific Japanese vocabulary, suggest Personal Premium (10 hrs covers ~2.5 hrs/week of meetings).

**Example 2** — "Transync AI vs JotMe — which is better for real-time translation in meetings?"
→ Compare latency (<0.5s vs 3-4s), language coverage (60+ vs 107), pricing ($8.99/mo vs $10/mo), platform support, and note-taking features. JotMe has more languages; Transync has lower latency and dual-screen display.

**Example 3** — "Our enterprise team of 15 needs real-time translation for Teams meetings — what plan and how do we manage the hour pool?"
→ Enterprise at $24.99/seat/mo × 15 = $374.85/mo for 600 hrs total. Explain org-level hour pool, overage at $0.70/hr, volume discounts ($1K → 2%, $3K → 5%, etc.), and org knowledge base for domain terminology.

## Troubleshooting

**Translations not appearing / dual-screen blank**
Transync AI captures system audio — if it can't hear the meeting, no translation appears. On macOS, grant Screen Recording permission in System Settings → Privacy & Security. On Windows, ensure audio output is routed correctly. Test with a short meeting before the real one.

**Translation accuracy poor with technical terms**
Open AI Assistant before the meeting and add domain-specific keywords and context. For example, add "API endpoint", "microservices", "Kubernetes" for a tech meeting. The AI uses these to improve terminology accuracy. Accuracy also degrades with heavy accents — speak clearly and reduce background noise.

**Charged twice or billing issue**
Contact support@transyncai.com with screenshots of the duplicate charge and your account email. Include transaction IDs from your payment provider. Response times may vary — if no reply within 48 hours, try hello@transyncai.com as an alternative contact.
