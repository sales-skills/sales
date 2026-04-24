---
name: sales-audionotes
description: "Audionotes platform help — multi-format AI note-taker that converts voice, text, images, video, and YouTube links into structured notes with AI summaries, 100+ output templates, and WhatsApp Bot. Use when setting up Audionotes for capturing voice memos and generating AI summaries or meeting minutes, configuring Zapier automations to route notes to CRM or project tools, connecting Audionotes to Notion for automatic note syncing, troubleshooting webhook payloads not arriving at your endpoint, fixing transcription accuracy issues with accented or specialized audio, or choosing between Audionotes Free and Pro plan. Do NOT use for comparing AI meeting note-takers across platforms (use /sales-note-taker) or reviewing a sales call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Audionotes]"
license: MIT
version: 1.0.0
tags: [sales, voice-notes, transcription, platform]
---

# Audionotes Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Audionotes (recording, transcription, templates)
   - B) Configuring integrations (Zapier, Notion, webhooks, WhatsApp)
   - C) Troubleshooting (transcription accuracy, missing notes, upload failures)
   - D) Choosing a plan (Free vs Pro vs Enterprise)

2. **What platform are you on?**
   - A) iOS
   - B) Android
   - C) Web
   - D) Multiple devices

3. **What's your primary use case?**
   - A) Personal voice journaling / thought capture
   - B) Meeting notes and action items
   - C) Content creation (blogs, social media, emails from voice)
   - D) Professional documentation (medical, legal, client notes)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| Comparing note-takers across platforms | `/sales-note-taker [question]` |
| Reviewing a specific sales call | `/sales-call-review [question]` |
| Sales coaching program design | `/sales-coaching [question]` |
| Connecting Audionotes to CRM via Zapier | `/sales-integration [question]` |

If the question is Audionotes-specific, continue to Step 3.

## Step 3 — Audionotes platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, webhook payload, Zapier triggers, Notion sync, templates.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- **Voice capture workflow**: Record → AI transcribes → AI generates summary/notes → organize with folders/tags → export or sync
- **Automation pattern**: Create note → webhook fires JSON payload to your endpoint / Zapier triggers "New Note V2" → route to destination
- **Notion workflow**: Connect Notion integration → all new + existing notes auto-sync (Title, Transcript, AI Notes, Created At, Note Type, Speaker Transcript)
- **Template strategy**: Use pre-built templates (meeting minutes, SOAP notes, blog drafts) or create custom prompts for consistent output formats

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public REST API** — automation is webhook + Zapier + Notion only. No programmatic way to list, search, or update notes. For API-driven workflows, consider Fireflies or Fathom.
- **Free plan caps at 1 minute per note** — effectively forces upgrade for any real use. Test with short recordings before committing to Pro.
- **Webhook payload is fixed and non-customizable** — you always get `{noteId, createdAt, noteType, title, transcript, content}`. No filtering by note type, no signature verification documented.
- **No CRM integrations** — no native HubSpot, Salesforce, or Pipedrive sync. Must build via Zapier or webhook → middleware → CRM.
- **Transcription accuracy drops on medical/specialized audio** — G2 reviewers report issues with domain-specific terminology. No custom vocabulary or glossary feature.
- **No real-time collaboration** — single-user only. Notes can be shared via public pages or export, but no live co-editing.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across platforms, choose the right one for your team, or wire transcripts into CRM. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-integration` — Connect Audionotes to your CRM, data warehouse, or other tools via Zapier or webhooks. Install: `npx skills add sales-skills/sales --skill sales-integration -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

**User**: "I want to record client meetings on my phone and have the notes auto-sync to Notion — how do I set that up?"
**Skill does**: Walks through Notion integration setup (Integrations → Connect → duplicate template), explains which fields sync (Title, Transcript, AI Notes, Speaker Transcript), notes that both existing and new notes sync automatically.

**User**: "How do I send Audionotes transcripts to my CRM via webhook?"
**Skill does**: Explains webhook setup (Integrations → Webhook → paste URL → Connect), shows the fixed JSON payload format, recommends building middleware to parse `content` field and POST to CRM API, warns about no signature verification.

**User**: "My Audionotes transcriptions are terrible for medical terminology — any fixes?"
**Skill does**: Explains no custom vocabulary feature exists, suggests speaking more slowly and clearly, recommends specialized medical transcription tools (Sonix with custom dictionary, TranscribeMe with human review) if accuracy is critical, notes the 95% accuracy claim assumes optimal conditions.

## Troubleshooting

### Webhook not firing or payload empty
**Symptom**: You set up a webhook URL but no data arrives at your endpoint after creating a note.
**Fix**: Verify the URL is publicly accessible (not localhost). Only notes created *after* connecting the webhook are sent — historical notes are not retransmitted. Check your server logs for incoming POST requests. The payload is always JSON with fixed fields (`noteId`, `createdAt`, `noteType`, `title`, `transcript`, `content`).

### Transcription accuracy is poor
**Symptom**: Words are garbled, domain-specific terms are wrong, or wrong language detected.
**Fix**: Ensure you're recording in a quiet environment — the 95% accuracy claim assumes optimal conditions. For accented speech, try selecting the specific language rather than relying on auto-detection. No custom vocabulary or glossary is available. For critical accuracy needs (medical, legal), consider Sonix or TranscribeMe instead.

### Zapier trigger not activating
**Symptom**: You connected Zapier but new notes don't trigger your Zap.
**Fix**: Verify your Audionotes API key and email are correctly entered in the Zapier account configuration. Use the "New Note V2" trigger (not the older version). Test with a new recording after connecting — existing notes won't trigger. Check Zapier's Task History for errors.
