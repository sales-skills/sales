---
name: sales-meeting-ai
description: "Meeting.ai platform help — AI meeting notes with visual mind maps, 30+ language transcription with strong Southeast Asian accent support, speaker identification, Ask AI post-meeting Q&A, and multi-format export. Use when setting up Meeting.ai for Zoom, Google Meet, or Teams meetings, Meeting.ai mind map notes not displaying correctly or looking messy, choosing between Meeting.ai and Fathom or Fireflies or Otter for visual meeting notes, Meeting.ai transcription accuracy issues with accents or multiple languages, Meeting.ai export options or sharing meeting notes with teammates, or understanding Meeting.ai pricing and free trial limits. Do NOT use for comparing all AI note-takers (use /sales-note-taker) or reviewing a call for coaching (use /sales-call-review)."
argument-hint: "[describe your Meeting.ai setup or usage question]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, platform]
---

# Meeting.ai Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Setting up Meeting.ai (connecting to Zoom/Meet/Teams, first meeting)
   - B) Troubleshooting an issue (mind maps not rendering, transcription quality, export problems)
   - C) Comparing Meeting.ai to another note-taker (Fathom, Fireflies, Otter, MeetGeek)
   - D) Understanding pricing or plan limits
   - E) Sharing or exporting meeting notes

2. **How are you using Meeting.ai?**
   - A) Online meetings (Zoom, Google Meet, Teams)
   - B) In-person meetings (phone/tablet recording)
   - C) Uploading existing audio/video files
   - D) Multiple methods

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing all AI note-takers (not just Meeting.ai) | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM/tool integration (Zapier, webhooks) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Meeting.ai platform reference

**Read `references/platform-guide.md`** for the full platform reference — features, pricing, visual notes workflow, export options, limitations.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priorities:**
1. Sign up at meeting.ai — 7-day free trial available on web, iOS, and Android
2. Connect your calendar or join a meeting on Zoom/Meet/Teams to start recording
3. After the meeting, review the auto-generated mind map and AI summary
4. Use Ask AI to query specific meeting details or clarify action items
5. Export as PDF, image, or text — or share via secure link

**Visual note-taker comparison quick guide:**
- Meeting.ai vs Fathom → Fathom has a generous free tier with CRM sync (Business plan); Meeting.ai has unique visual mind maps but no CRM integration or API
- Meeting.ai vs Fireflies → Fireflies has a robust API, search across meetings, and CRM integrations; Meeting.ai is simpler with visual-first output
- Meeting.ai vs Otter → Otter has real-time collaboration, Salesforce/HubSpot sync, and OtterPilot; Meeting.ai differentiates on visual mind maps and multilingual accent support

If you discover a gotcha or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No API, no webhooks, no CRM integration.** Export is manual (PDF, image, text, secure link). For automated workflows, use Fathom, Fireflies, or MeetGeek instead.
- **Pricing is opaque.** No public pricing page with clear tiers. A free tier may exist, but limits are unclear. Start with the 7-day free trial to evaluate before committing.
- **No Zapier or Make integration.** There's no way to automate data flow out of Meeting.ai into other tools.
- **Visual mind maps are auto-generated.** You can't manually restructure or edit the mind map layout — the AI decides the hierarchy. If the output is messy, you'll need to export and reorganize manually.
- **Singapore-based company (BAHASALAB).** Data processing jurisdiction is Singapore. No documented SOC 2, HIPAA, or ISO 27001 compliance certifications — only "encrypted sharing and data protection."
- **Strongest for Southeast Asian accents.** The 30+ language transcription is particularly tuned for SEA accents. Performance on other regional accents is less documented.

## Related skills

- `/sales-note-taker` — Compare all AI note-takers, select the right one for your team, or plan an API integration pipeline
- `/sales-fathom` — Fathom platform help — free-tier leader with CRM sync and API
- `/sales-call-review` — Review a specific call for coaching
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Meeting.ai for Google Meet
**User says**: "I want to use Meeting.ai to take notes in my Google Meet calls. How do I set it up?"
**Skill does**:
1. Walks through signing up at meeting.ai and starting the free trial
2. Explains how to connect Meeting.ai to join Google Meet calls
3. Shows how mind maps and summaries are auto-generated after the meeting ends
4. Recommends reviewing the visual mind map first, then using Ask AI for specific questions
5. Notes export options: PDF, image, text, or shareable link
**Result**: User is set up to record Google Meet calls with visual notes.

### Example 2: Meeting.ai vs Fathom for a sales team
**User says**: "Should I use Meeting.ai or Fathom? I need to get meeting notes into HubSpot."
**Skill does**:
1. Recommends Fathom — it has native HubSpot integration on the Business plan ($25/user/mo annual)
2. Notes Meeting.ai has no CRM integration at all — notes can only be exported manually
3. Explains that Meeting.ai's differentiator is visual mind maps, not sales workflow integration
4. Suggests Meeting.ai for personal visual note-taking; Fathom for CRM-connected sales teams
**Result**: Clear recommendation based on CRM integration need.

### Example 3: Mind map notes look disorganized
**User says**: "The mind maps Meeting.ai generates from my meetings are messy and hard to follow. Can I fix them?"
**Skill does**:
1. Explains mind maps are auto-generated by AI and can't be manually restructured in-app
2. Suggests exporting as PDF or image and reorganizing in a dedicated mind map tool (Miro, XMind)
3. Recommends using the text summary view instead if the mind map isn't useful
4. Notes that shorter, more focused meetings tend to produce cleaner mind maps
**Result**: User understands the limitation and has workarounds.

## Troubleshooting

### Mind maps look cluttered or disorganized
**Symptom**: Visual mind map output from a long meeting is hard to read with too many branches
**Cause**: The AI attempts to capture all topics — longer meetings with many topic switches produce complex maps
**Solution**: Use the text summary view instead for long meetings. For future meetings, if mind maps are the goal, keep meetings shorter and more focused. Export the mind map as an image and reorganize manually in a visual tool if needed.

### Transcription quality is poor for non-SEA accents
**Symptom**: Transcription accuracy drops significantly for speakers with non-Southeast Asian accents
**Cause**: Meeting.ai's transcription is particularly optimized for SEA accents and multilingual switching common in that region
**Solution**: For English-dominant meetings with US/UK/EU accents, consider Fathom or Otter which have broader accent training data. If you need multilingual support outside SEA, test with a sample meeting during the free trial before committing.

### Can't find pricing or plan details
**Symptom**: No clear pricing page, unsure what you're paying for or what limits exist
**Cause**: Meeting.ai does not publish a traditional pricing page with tiered plans
**Solution**: Start with the 7-day free trial on web, iOS, or Android. After the trial, the app will prompt for subscription details. Contact support@meeting.ai directly for pricing clarification. Check the App Store or Google Play for in-app purchase prices which may reveal subscription tiers.
