---
name: sales-noted
description: "Noted platform help — Apple-ecosystem voice recorder + rich-text note-taker with timestamped audio linking, AI transcription, intelligent playback, and Apple Pencil support. Use when setting up Noted for recording lectures or meetings on iPad or iPhone, Noted transcription not working or hard to find in the UI, choosing between Noted and Cleft Notes or AudioPen or Voicenotes for personal voice capture on Apple devices, understanding Noted free vs Noted+ subscription vs lifetime pricing, or Apple Watch recording setup and iCloud sync issues. Do NOT use for choosing between all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your Noted setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, voice-recorder, apple, platform]
---

# Noted Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Noted (install, permissions, first recording)
   - B) Troubleshooting an issue (transcription, audio capture, iCloud sync)
   - C) Comparing Noted to another voice note app (Cleft Notes, AudioPen, Voicenotes)
   - D) Understanding pricing (free vs Noted+ vs lifetime)
   - E) Using Apple Pencil, Time Stroke, or drawing features

2. **What device are you primarily using?**
   - A) iPad (with or without Apple Pencil)
   - B) iPhone
   - C) Mac
   - D) Apple Watch
   - E) Multiple devices (iCloud sync)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just personal voice apps) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Noted platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, transcription workflow, device-specific details, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Install from App Store (iPhone/iPad/Mac) or download on Apple Watch
2. Create a note → tap the red record button to start simultaneous recording + note-taking
3. Every line typed during recording gets a timestamp — tap any timestamp during playback to jump to that moment
4. Enable iCloud sync in settings for cross-device access
5. Try Intelligent Playback to skip silence and noise in long recordings

**Personal voice app comparison quick guide:**
- Noted vs Cleft Notes → Noted is richer (drawing, Time Stroke, Apple Pencil, 18 languages); Cleft Notes is simpler with ADHD-friendly auto-organization and cheaper ($29/yr vs $79.99/yr)
- Noted vs AudioPen → AudioPen focuses on transforming voice into polished written content with custom styles; Noted is an audio-first notebook with timestamped playback
- Noted vs Voicenotes → Voicenotes has Ask AI search across all notes and Zapier automation; Noted has richer note-taking (drawings, Apple Pencil) but no integrations

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **AI Transcribe requires Noted+ subscription.** Free tier lets you record and take notes, but converting recordings to text requires the paid plan ($9.99/mo, $79.99/yr, or $89.99 lifetime).
- **Transcription is cloud-based.** On-device recording is local, but AI transcription uploads audio to Noted's servers. No offline transcription option.
- **Apple ecosystem only (mostly).** iPhone, iPad, Mac, Apple Watch, Apple Vision Pro. An Android version exists on Google Play but is secondary — feature parity is not guaranteed.
- **No API, no webhooks, no CRM, no Zapier.** Export options are PDF, TXT, M4A, and web links only. For automated workflows, use Voicenotes (Zapier) or AudioPen (Zapier + webhooks) instead.
- **Drawing/pencil features are basic.** iPad Apple Pencil support exists but is limited compared to dedicated handwriting apps like GoodNotes or Notability. Use Noted for audio-linked sketching, not as a full handwriting app.
- **Transcription UI is not obvious.** Multiple reviewers report difficulty finding the transcribe button. After recording, look for the AI Transcribe option in the note's menu — it's not prominently placed.
- **18-language support for transcription.** Fewer languages than competitors like Voicenotes (100+) or Notta (58). Check supported languages before committing if you work in multiple languages.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-cleftnotes` — Cleft Notes platform help — Apple-native voice-to-notes, ADHD-friendly, cheaper annual plan
- `/sales-audiopen` — AudioPen platform help — voice-to-polished-text with custom writing styles, one-time payment
- `/sales-voicetonotes` — VoiceToNotes platform help — ultra-cheap personal voice notes, HIPAA, AI summaries
- `/sales-backtrack` — Backtrack platform help — Mac menu bar retroactive recorder, rolling buffer
- `/sales-call-review` — Review a specific call for coaching
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Noted for lecture recording on iPad
**User says**: "I want to use Noted to record my university lectures on iPad with Apple Pencil. How do I set it up?"
**Skill does**:
1. Walks through installing from iPad App Store and creating a first note
2. Explains the timestamped workflow — every line written links to that moment in the recording
3. Shows how Apple Pencil drawing also gets timestamps via Time Stroke for playback replay
4. Recommends Intelligent Playback for reviewing long lectures — ML skips silence and noise
5. Notes that AI Transcribe requires Noted+ subscription
**Result**: iPad configured for timestamped lecture recording with Apple Pencil.

### Example 2: Noted vs Cleft Notes for personal voice notes
**User says**: "Should I use Noted or Cleft Notes for quick voice memos on my iPhone? I have ADHD and need things organized automatically."
**Skill does**:
1. Recommends Cleft Notes for ADHD use — auto-organization with headings and structure is its core feature
2. Notes Cleft Notes is cheaper ($29/yr vs $79.99/yr) and does on-device transcription (offline capable)
3. Explains Noted is better if the user wants audio playback with visual notes, Apple Pencil sketching, or Time Stroke
4. Flags that neither has CRM or Zapier integration
**Result**: Clear recommendation based on the user's ADHD-specific need.

### Example 3: Transcription not working
**User says**: "I recorded a meeting in Noted but I can't find how to get a transcript. Where is the transcribe button?"
**Skill does**:
1. Acknowledges this is a common complaint — the transcription UI is not prominently placed
2. Walks through finding AI Transcribe in the note's menu after recording
3. Notes that transcription requires Noted+ subscription — checks if the user has it
4. If the user is on the free tier, recommends upgrading or exporting the M4A audio to a free transcription service
**Result**: User finds the transcription feature or gets a workaround.

## Troubleshooting

### Can't find the transcription button
**Symptom**: Recording completed but no obvious way to transcribe it
**Cause**: AI Transcribe is tucked inside the note's options menu, not displayed as a primary action button
**Solution**: Open the recorded note, tap the menu/options icon (three dots or similar), and look for "AI Transcribe" or "Transcribe." This requires a Noted+ subscription. If you're on the free tier, export the audio as M4A and use a free transcription tool (Otter, Fathom, or VoiceToNotes free tiers).

### iCloud sync not working across devices
**Symptom**: Notes created on iPad don't appear on iPhone or Mac
**Cause**: iCloud sync may be disabled for Noted, or iCloud storage is full
**Solution**: Go to Settings → Apple Account → iCloud → Apps Using iCloud and ensure Noted is enabled. Check that you have available iCloud storage. Force-close and reopen Noted on both devices. If sync is delayed, wait a few minutes — large recordings take longer to upload.

### Recording quality is poor or has noise
**Symptom**: Playback has too much background noise or is hard to hear
**Cause**: Built-in device microphone picking up ambient noise, especially in lecture halls or open offices
**Solution**: Use Intelligent Playback to skip silence and noise automatically. For better input quality, use an external microphone or AirPods. Position the device closer to the speaker. If the recording is already saved, there's no post-recording noise reduction — export and use an external tool.
