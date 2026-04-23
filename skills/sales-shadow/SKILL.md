---
name: sales-shadow
description: "Shadow platform help — bot-free AI meeting assistant capturing audio + screen on macOS, on-device transcription, autopilot meeting detection, AI summaries/action items/follow-up emails, Skills system for custom post-meeting tasks. Use when setting up Shadow for the first time, Shadow not detecting meetings automatically, Shadow using too much CPU or memory on Mac, Shadow speaker attribution is wrong, Shadow screen capture not working, Shadow free tier ran out of AI meetings, choosing between Shadow and Granola or Jamie or Bluedot for bot-free recording, or exporting Shadow notes to Markdown or Zapier. Do NOT use for choosing between all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your Shadow setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-assistant, bot-free, platform]
---

# Shadow Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Shadow (install, autopilot, first recording)
   - B) Troubleshooting an issue (stuck meetings, CPU, speaker labels)
   - C) Comparing Shadow to another bot-free tool (Granola, Jamie, Bluedot)
   - D) Exporting or integrating Shadow data (Markdown, Zapier, CRM)
   - E) Understanding pricing or plan limits

2. **What meeting platforms do you use?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Slack Huddles
   - E) Multiple / other (Webex, Discord)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just bot-free) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Shadow platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, integrations, workflows, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Download from shadow.do → grant macOS permissions (microphone, screen recording, accessibility)
2. Enable Autopilot for automatic meeting detection — test with a short call
3. Configure AI Skills for post-meeting tasks (summaries, action items, follow-ups)
4. Set up Markdown export or Zapier webhook if you need data in other tools

**Bot-free comparison quick guide:**
- Shadow vs Granola → Shadow captures screen + audio; Granola is audio-only notepad, $14/mo, simpler
- Shadow vs Jamie → Jamie supports Windows + in-person; Shadow is macOS-only but captures screen
- Shadow vs Bluedot → Bluedot has native HubSpot/Salesforce CRM sync; Shadow has no native CRM connectors

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Free tier is 25 lifetime AI meetings, not monthly.** After 25 meetings, transcription still works but AI features (summaries, action items, Skills) require Plus ($8/mo).
- **macOS only.** No Windows, no Linux, no mobile, no web app. If your team has mixed OS, Shadow won't work for everyone — consider Jamie (Windows + Mac) or Bluedot (Chrome extension, any OS).
- **No native CRM connectors.** Shadow doesn't sync directly to Salesforce or HubSpot. You can export to Markdown or use Zapier webhooks, but there's no structured CRM field mapping like Fathom Business or Fireflies Business.
- **Screen capture requires explicit macOS permissions.** If screen capture isn't working, check System Settings → Privacy & Security → Screen Recording. Some MDM-managed Macs block this.
- **No public API.** You cannot programmatically access Shadow transcripts or recordings. For API-driven pipelines, Fathom, Fireflies, or Gong are better choices.
- **AI processing uses external APIs.** Transcription is on-device, but summaries/action items use SOC 2-certified cloud APIs. For fully local processing, disable AI features.
- **"Shadow AI" enterprise governance concern.** Because Shadow runs invisibly (no bot in the meeting), IT teams may not know it's in use. In regulated industries, get IT approval before deploying.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-granola` — Granola platform help — bot-free AI notepad, REST API, MCP beta, HubSpot/Attio CRM sync
- `/sales-jamie` — Jamie platform help — bot-free AI note-taker, Windows + Mac, REST API, webhooks, CRM sync
- `/sales-bluedot` — Bluedot platform help — bot-free video recording, Chrome extension, Svix webhooks, HubSpot/Salesforce CRM sync
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Shadow for the first time
**User says**: "I just downloaded Shadow on my Mac. How do I get it to automatically record my Zoom calls?"
**Skill does**:
1. Walks through macOS permission grants (microphone, screen recording, accessibility)
2. Shows how to enable Autopilot mode for automatic meeting detection
3. Explains that Shadow captures both audio and screen content — no bot visible to other participants
4. Recommends a test call to verify everything works before relying on it for real meetings
**Result**: Shadow recording Zoom calls automatically without manual activation.

### Example 2: Shadow vs Granola for a sales team
**User says**: "My team of 5 SDRs needs a bot-free note-taker. Should we use Shadow or Granola?"
**Skill does**:
1. Confirms both are bot-free and macOS-compatible
2. Highlights Shadow's screen capture advantage (sees demos, slides, shared content)
3. Notes Granola's HubSpot/Attio CRM sync and REST API — Shadow lacks both
4. Flags that neither has deep CRM field mapping — if CRM sync is critical, recommends Fathom Business or Fireflies Business instead
**Result**: Shadow if screen capture matters; Granola if CRM sync matters; neither if deep CRM integration is required.

### Example 3: Free tier ran out
**User says**: "Shadow says I've used all my free AI meetings. What are my options?"
**Skill does**:
1. Explains the 25-meeting lifetime cap on AI features (not monthly)
2. Notes that recording and transcription still work — only AI summaries/action items/Skills are gated
3. Recommends Plus at $8/mo if Shadow is working well
4. Suggests Fathom free tier (unlimited AI meetings) as an alternative if budget is zero
**Result**: Clear upgrade path or free alternative.

## Troubleshooting

### Shadow not detecting meetings automatically
**Symptom**: Meetings start but Shadow doesn't begin recording
**Cause**: Autopilot may be disabled, or macOS permissions are missing
**Solution**: Open Shadow settings → enable Autopilot. Check System Settings → Privacy & Security → grant Microphone, Screen Recording, and Accessibility permissions to Shadow. Restart Shadow after granting permissions.

### Shadow using excessive CPU/memory
**Symptom**: Mac slows down when Shadow is running, fan spins up during meetings
**Cause**: On-device transcription is compute-intensive, especially on older Macs
**Solution**: Close unnecessary apps during meetings. If the problem persists, check that you're on the latest Shadow version — recent updates improved resource usage. On Intel Macs, performance may be noticeably worse than Apple Silicon.

### Speaker labels are wrong or missing
**Symptom**: Transcript attributes speech to the wrong person or shows "Unknown Speaker"
**Cause**: Speaker diarization is imperfect — no tool has fully solved this
**Solution**: Ensure each participant has a distinct audio source (not sharing a mic). Shadow improves accuracy over time as it learns voices. Manual corrections in the transcript help train the model.
