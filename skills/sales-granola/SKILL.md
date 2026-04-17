---
name: sales-granola
description: "Granola platform help — bot-free AI notepad for meetings, local audio capture (no bot joins calls), REST API at public-api.granola.ai/v1, MCP integration (beta), HubSpot/Attio/Affinity CRM sync, Zapier automation, pricing tiers (Free/Business $14/Enterprise $35). Use when setting up Granola for a sales team, configuring HubSpot CRM sync from meeting notes, building automations with the Granola API or Zapier triggers, choosing between Granola and other bot-free note-takers (Jamie, Krisp, Tactiq), troubleshooting blank notes or silent recording failures, or managing note sharing and privacy settings. Do NOT use for reviewing a single call for coaching (use /sales-call-review) or comparing note-taker platforms broadly (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Granola]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Granola Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your goal?**
   - A) Set up Granola for my team (onboarding, templates, sharing)
   - B) Integrate Granola with CRM or other tools (HubSpot, Zapier, API)
   - C) Troubleshoot an issue (blank notes, recording failures, privacy settings)
   - D) Evaluate Granola vs alternatives (Jamie, Fathom, Krisp, Tactiq)

2. **Which plan are you on?**
   - A) Basic (Free) — limited history, no integrations
   - B) Business ($14/user/mo) — unlimited history, integrations, Personal API
   - C) Enterprise ($35/user/mo) — SSO, Enterprise API, admin controls
   - D) Not sure / evaluating

3. **What meeting platform(s)?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Webex / Slack huddles
   - E) In-person (iOS app)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing note-taker platforms broadly (Granola vs Fathom vs Otter vs ...) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching or scoring | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| HubSpot platform config (not Granola-specific) | `/sales-hubspot {user's question}` |

When routing to another skill, provide the exact command.

## Step 3 — Granola platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, API, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities by team size:**
- Solo / 1-5 people → Free plan is fine for evaluation; upgrade to Business when you need CRM sync or unlimited history
- 5-50 people → Business plan; set up HubSpot integration, create shared folders per team, standardize templates
- 50+ people → Enterprise; SSO is gated at 50+ users, get admin controls for API key creation and sharing policies

**Template strategy:** Create templates for your top 3-5 meeting types (discovery, demo, 1:1, QBR, internal). Granola enhances notes based on the template structure — better templates = better AI output.

**Privacy checklist before rollout:** Disable model training opt-in (Settings → Privacy), review sharing defaults (notes are accessible via link by default), communicate to participants that audio is being captured locally.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Notes are shareable by default.** Every note gets a link that anyone can access. Review sharing settings before rolling out to a team — confidential meeting content may be exposed.
- **AI model training is opt-in by default.** Your meeting content is used for training unless you manually disable it in Settings → Privacy. Enterprise plan defaults to off.
- **No audio playback.** Granola doesn't record audio/video — it captures and discards after transcription. You cannot go back and listen to verify a transcript.
- **No speaker identification.** Transcripts don't label who said what (macOS shows microphone vs speaker; iOS shows diarization labels like "Speaker A"). Multi-person calls are harder to parse.
- **Silent recording failures.** If the OS audio pipeline breaks, Granola may produce blank notes with no error message. Check that Granola has audio permissions and restart before important calls.
- **No Android, no web version.** Mac + Windows + iOS only. Android users and browser-only teams are out.
- **HubSpot sync is manual per note.** One-click push, not automatic. You must click to send each note to the CRM contact record.
- **No native Salesforce.** Use Zapier to bridge — "Note Added to Granola Folder" or "Note Shared to Zapier" triggers.

## Related skills

- `/sales-note-taker` — Compare note-taker platforms, plan API integrations, build transcript pipelines
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-hubspot` — HubSpot platform help
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Granola for a sales team
**User says**: "I manage a 12-person sales team on HubSpot. How should I set up Granola?"
**Skill does**: Recommends Business plan ($14/user/mo), walks through HubSpot integration setup, suggests creating shared folders per team and templates for discovery/demo/QBR, flags the privacy defaults to fix before rollout.

### Example 2: Automating note export via Zapier
**User says**: "I want Granola meeting notes to automatically appear in a Slack channel and update Salesforce"
**Skill does**: Explains the two Zapier triggers (Note Added to Folder, Note Shared to Zapier), recommends the folder-based trigger for automation, walks through mapping note fields to Salesforce custom object via Zapier, and Slack channel posting.

### Example 3: Troubleshooting blank notes
**User says**: "Granola keeps giving me empty notes after meetings"
**Skill does**: Checks OS audio permissions, verifies Granola is capturing system audio (not just microphone), suggests restarting the app before meetings, flags that some virtual audio devices conflict with Granola's capture method.

## Troubleshooting

### Notes are blank after a meeting
**Symptom**: Meeting ends but Granola shows no transcript or empty enhanced notes
**Cause**: OS audio pipeline interrupted — virtual audio devices (VoiceMeeter, BlackHole), headphone switches mid-call, or missing audio permissions
**Solution**: Check System Settings → Privacy → Microphone (macOS) or Sound settings (Windows). Restart Granola before the meeting. Avoid switching audio devices during a call. Test with a short call first.

### HubSpot contact not found when pushing notes
**Symptom**: "No matching contact" error when trying to sync a note to HubSpot
**Cause**: Granola matches by meeting participant email — if the contact email in HubSpot doesn't match the calendar invite email, it won't find a match
**Solution**: Ensure the calendar invite includes the contact's email that matches their HubSpot record. If using Google Workspace, check that the meeting was created with the correct attendee emails.

### Transcript has garbled text in non-English sections
**Symptom**: Parts of the transcript are gibberish or obviously wrong when speakers switch languages
**Cause**: Custom vocabulary doesn't work with multi-language transcripts; Granola's ASR struggles with mid-conversation language switches
**Solution**: Set the primary language before the meeting. For bilingual meetings, expect lower accuracy on the secondary language. Consider Jamy.ai (100+ languages with real-time translation) for truly multilingual teams.
