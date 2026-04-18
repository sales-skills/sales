---
name: sales-rilla
description: "Rilla platform help — AI coaching for in-person/field sales via mobile recording, virtual ridealongs, AI transcription and analysis, scorecard customization, CRM sync (Salesforce/HubSpot/Zoho/Pipedrive/Dynamics via Merge), ServiceTitan/SPOTIO integrations, pricing tiers. Use when reps record in-person customer conversations and need coaching feedback, managers want virtual ridealongs instead of physical ride-alongs, field sales transcription accuracy is poor in noisy environments, setting up Rilla CRM integration with Salesforce or HubSpot, Rilla processing time is too slow after appointments, or comparing Rilla vs Siro vs SalesAsk for field sales coaching. Do NOT use for virtual/video meeting note-taking (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your Rilla question — e.g., 'transcription accuracy issues on HVAC job sites' or 'connect Rilla to HubSpot via Merge']"
license: MIT
version: 1.0.0
tags: [sales, field-sales, conversation-intelligence, coaching, platform]
---

# Rilla Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Rilla for my field sales team
   - B) CRM integration (Salesforce, HubSpot, Zoho, Pipedrive, Dynamics)
   - C) Improving transcription accuracy or recording quality
   - D) Coaching/scorecard customization — training the AI on my sales process
   - E) Comparing Rilla to other field sales coaching tools (Siro, SalesAsk, Craft)
   - F) Troubleshooting recording, processing, or billing issues

2. **What industry?**
   - A) Home services (HVAC, plumbing, electrical, pest)
   - B) Home building / remodeling
   - C) Automotive repair
   - D) Dental / senior living / healthcare
   - E) Solar / roofing / windows
   - F) Other field sales

3. **Team size?**
   - A) Solo rep or tiny team (<5)
   - B) Small team (5-15 reps)
   - C) Mid-size (15-50 reps)
   - D) Large (50+ reps)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking a virtual/online meeting note-taker (not field sales) | `/sales-note-taker {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific recorded call for coaching | `/sales-call-review {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Rilla platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, CRM integration via Merge, recording best practices, scorecard setup.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup**: Walk through mobile app installation → recording consent setup (11 two-party states) → CRM connection via Merge → scorecard customization → first virtual ridealong.

**For CRM integration**: Rilla uses Merge's CRM Unified API. The integration maps Opportunities, Engagements, Engagement Types, and Users. Field Mapping in Merge handles custom CRM fields. Webhooks fire on appointment field changes. Adding a new CRM takes hours, not weeks.

**For transcription issues**: Check device placement (chest pocket or clip, not in a bag), reduce background noise where possible, verify the app is foregrounded during recording.

**For coaching**: Upload your sales script or let Rilla learn from top performers. Customize scorecards to match your process steps. Use the 3-minute virtual ridealong format for daily coaching.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about pricing and integration gotchas that may be outdated.*

- **Pricing is not public.** Estimated $199-349/rep/month ($4K+/user/year). Annual contract required, 5-user minimum. Implementation fee $1,500-$5,000. Get a quote before budgeting.
- **No public API documentation.** CRM integrations go through Merge's unified API — you don't call Rilla's API directly. Custom integrations beyond the 5 supported CRMs require contacting Rilla.
- **11 U.S. states require recording consent.** California, Massachusetts, Connecticut, Florida, Maryland, Illinois, Washington, Montana, Pennsylvania, New Hampshire, Oregon. Rilla doesn't auto-handle consent — train reps to disclose.
- **No phone call recording.** Rilla records in-person conversations only. If reps also need phone/video recording, pair with a separate tool (Fathom, Fireflies, etc.).
- **Processing time can exceed 30 minutes.** Don't expect real-time coaching — feedback arrives after the appointment, not during.
- **Annual contract lock-in.** Multiple Capterra/G2 reviewers report billing issues after cancellation. Confirm cancellation terms in writing.

## Related skills

- `/sales-siro` — Siro platform help — direct competitor for field sales AI coaching with Halftime real-time coaching. Install: `npx skills add sales-skills/sales --skill sales-siro -a claude-code -y`
- `/sales-note-taker` — Choosing an AI note-taker for virtual/video meetings (Fathom, Fireflies, Gong, etc.) and building transcript API pipelines. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code -y`
- `/sales-coaching` — Building coaching programs, onboarding, role-plays, certifications
- `/sales-call-review` — Reviewing a specific call recording for coaching feedback
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Setting up Rilla for an HVAC team
**User says**: "I manage 12 HVAC techs doing in-home estimates. How do I get Rilla rolling?"
**Skill does**: Walks through mobile app install on each tech's phone, consent disclosure setup (checks the user's state), CRM connection to ServiceTitan or HubSpot via Merge, scorecard setup based on their estimate presentation flow, and first virtual ridealong workflow.

### Example 2: Transcription problems on noisy job sites
**User says**: "Rilla keeps getting words wrong when my reps are in basements with furnaces running."
**Skill does**: Recommends device placement (clip to shirt collar, not in pocket near tools), checks app version, suggests a test recording in a controlled environment to isolate noise vs placement, and explains processing-time expectations.

### Example 3: Comparing Rilla vs Siro
**User says**: "Should I go with Rilla or Siro for my roofing sales team?"
**Skill does**: Compares pricing (~$4K/user/yr Rilla vs ~$3K/user/yr Siro), CRM integrations (Rilla has 5 via Merge, Siro has ServiceTitan focus), coaching approach (both post-appointment, not real-time), industry fit, and contract terms. Notes that neither offers real-time in-appointment coaching (Craft does).

## Troubleshooting

### Transcription accuracy is poor — wrong words, speaker mix-ups
**Symptom**: Transcript shows incorrect words or attributes speech to the wrong person
**Cause**: Background noise (HVAC systems, power tools, traffic), device placed too far from conversation, or multiple overlapping speakers
**Solution**: Clip phone to shirt collar or chest pocket. Position device between rep and customer. In very noisy environments (active construction), consider pausing recording during loud work and resuming for the sales conversation portion.

### Recording not uploading or processing stalls
**Symptom**: App shows recording complete but no transcript appears, or processing exceeds 1 hour
**Cause**: Poor cellular/WiFi at job site, app backgrounded by OS, large file upload on slow connection
**Solution**: Ensure the app has background refresh enabled. Connect to WiFi before leaving the job site to trigger upload. If stuck, force-close and reopen the app — recordings are stored locally until uploaded.

### CRM data not syncing — appointments missing context
**Symptom**: Rilla recordings don't show CRM context (customer name, appointment type, products)
**Cause**: Merge webhook not configured, CRM fields not mapped, or appointment field names differ from Merge's expected schema
**Solution**: Check Merge dashboard for webhook delivery status. Verify Field Mapping configuration matches your CRM's custom field names. Test by modifying an appointment in CRM and confirming the webhook fires in Merge's logs.
