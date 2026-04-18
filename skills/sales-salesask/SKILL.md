---
name: sales-salesask
description: "Sales Ask (Coach Dean) platform help — AI coaching for in-home/field sales and call center teams in home services (HVAC, roofing, plumbing, remodeling, dental). Use when reps miss upsells or skip financing options on in-home appointments, managers want virtual ridealongs without traveling to job sites, setting up Sales Ask with ServiceTitan or Jobber or Housecall Pro, close rate below 40% on in-home estimates, comparing Sales Ask vs Rilla vs Siro for field sales coaching, or reps not following the sales process consistently. Do NOT use for virtual/video meeting note-taking (use /sales-note-taker) or building a coaching program from scratch (use /sales-coaching)."
argument-hint: "[describe your Sales Ask question — e.g., 'connect Sales Ask to ServiceTitan' or 'reps skip financing options on HVAC estimates']"
license: MIT
version: 1.0.0
tags: [sales, field-sales, conversation-intelligence, coaching, home-services, platform]
---

# Sales Ask Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Sales Ask for my field sales team
   - B) CRM integration (ServiceTitan, Jobber, Housecall Pro, Salesforce, Lasso)
   - C) Understanding Coach Dean's coaching and scoring
   - D) Using virtual ridealongs or AI roleplay practice
   - E) Comparing Sales Ask to Rilla, Siro, or Craft
   - F) White-label / partner program questions
   - G) Troubleshooting recording, coaching, or billing issues

2. **What industry?**
   - A) HVAC
   - B) Roofing
   - C) Plumbing
   - D) Home building / remodeling
   - E) Windows & doors
   - F) Dental / DSO
   - G) Chimney services
   - H) Other home services

3. **Team size?**
   - A) Small team (<10 reps)
   - B) Mid-size (10-25 reps)
   - C) Large (25-50+ reps)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking a virtual/online meeting note-taker (not field sales) | `/sales-note-taker {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific recorded call for coaching | `/sales-call-review {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Sales Ask platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, CRM integrations, Coach Dean coaching, roleplay, virtual ridealongs, white-label program.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup**: Walk through app installation → recording consent setup (11 two-party states) → CRM connection (ServiceTitan/Jobber/Housecall Pro) → Coach Dean scorecard customization → first virtual ridealong.

**For CRM integration**: Sales Ask integrates natively with ServiceTitan, Jobber, and Housecall Pro — recordings link directly to revenue tickets. Salesforce and Lasso are also supported. The CRM connection proves ROI by matching coaching to actual job revenue.

**For coaching**: Coach Dean reviews 100% of interactions and texts reps specific feedback immediately. Customize the scoring criteria to match your sales process (e.g., did rep present financing? mention warranty? walk through options?). Use the AI roleplay Lab for practice between appointments.

**For comparison**: Sales Ask differentiates from Rilla and Siro on three axes: real-time coaching (not just post-appointment), native home services CRM integrations (ServiceTitan/Jobber/Housecall Pro vs generic CRM via Merge), and call center + field coverage (Rilla/Siro are field-only).

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about pricing and integration gotchas that may be outdated.*

- **Pricing is not public.** Team pricing estimated at $1,500-$5,000/month (~$42-208/user/month). No rigid seat minimums — flexible monthly plans available. Claims ~40% less than Rilla. Always get a custom quote.
- **No public API documentation.** Partner/reseller API access exists but is gated behind the partner program. Custom integrations beyond the supported CRMs require contacting Sales Ask directly.
- **11 U.S. states require recording consent.** California, Massachusetts, Connecticut, Florida, Maryland, Illinois, Washington, Montana, Pennsylvania, New Hampshire, Oregon. Sales Ask doesn't auto-handle consent — train reps to disclose.
- **Home services vertical only.** Sales Ask is purpose-built for trades — HVAC, roofing, plumbing, remodeling, dental. If your field sales team sells auto repair, solar, telecom, or political canvassing, Siro or Rilla may be a better fit.
- **Real-time coaching ≠ in-appointment live prompts.** "Real-time" means Coach Dean texts feedback between appointments, not that it whispers in a rep's ear during the conversation (Craft does that).
- **White-label is for coaches and agencies, not end-users.** The white-label program lets you resell Sales Ask under your brand — it's not a self-hosted version.

## Related skills

- `/sales-rilla` — Rilla platform help — direct competitor for field sales AI coaching, post-appointment analysis. Install: `npx skills add sales-skills/sales --skill sales-rilla -a claude-code -y`
- `/sales-siro` — Siro platform help — field sales AI coaching with Halftime real-time coaching. Install: `npx skills add sales-skills/sales --skill sales-siro -a claude-code -y`
- `/sales-craft` — Craft platform help — real-time in-appointment AI coaching + 24/7 AI call center + revenue recovery (the only tool that coaches live during the appointment). Install: `npx skills add sales-skills/sales --skill sales-craft -a claude-code -y`
- `/sales-note-taker` — Choosing an AI note-taker for virtual/video meetings (Fathom, Fireflies, Gong, etc.) and building transcript API pipelines. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code -y`
- `/sales-coaching` — Building coaching programs, onboarding, role-plays, certifications
- `/sales-call-review` — Reviewing a specific call recording for coaching feedback
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Setting up Sales Ask for an HVAC team
**User says**: "I manage 15 HVAC techs doing in-home estimates. How do I get Sales Ask set up?"
**Skill does**: Walks through app installation on each tech's phone, recording consent requirements for their state, ServiceTitan integration to link recordings to job tickets, Coach Dean scorecard customization for HVAC-specific steps (financing presentation, warranty mention, multi-option pricing), and setting up virtual ridealongs for the sales manager.

### Example 2: Reps keep missing upsell opportunities
**User says**: "My reps close okay but the average ticket is too low — they skip premium options and financing."
**Skill does**: Shows how Coach Dean flags missed upsells and financing skips automatically, walks through customizing the scoring criteria to weight these steps, explains how the AI texts the rep immediate feedback like "You skipped financing on this appointment — here's how to introduce it naturally", and shows pipeline analytics to track average ticket improvement over time.

### Example 3: Comparing Sales Ask vs Rilla vs Siro
**User says**: "Which tool should I pick for my roofing team — Sales Ask, Rilla, or Siro?"
**Skill does**: Compares pricing (~$42-208/user/mo Sales Ask vs ~$4K+/user/yr Rilla vs ~$3K+/user/yr Siro), coaching approach (Sales Ask has active AI coaching between appointments, Siro has Halftime mid-call coaching, Rilla is post-appointment only), CRM integrations (Sales Ask has native ServiceTitan/Jobber/Housecall Pro, Rilla/Siro use Merge for generic CRMs), and coverage (Sales Ask covers call center + field, Rilla/Siro are field-only).

## Troubleshooting

### Coach Dean feedback feels generic — not specific to my trade
**Symptom**: Coaching suggestions don't reference your specific products, pricing tiers, or common objections
**Cause**: Coach Dean's scoring criteria haven't been customized for your sales process
**Solution**: Work with Sales Ask's onboarding team to upload your sales script and configure custom scoring criteria. Define the specific steps your process requires (present 3+ options, mention financing, walk through warranty levels, address common objections by name). Coach Dean learns from your top performers' recordings over time.

### Recordings not linking to CRM job tickets
**Symptom**: Recordings exist in Sales Ask but aren't matched to ServiceTitan/Jobber/Housecall Pro jobs
**Cause**: CRM integration not properly configured, or appointment data doesn't match between systems
**Solution**: Verify the CRM connection in Sales Ask settings. Ensure appointments in your CRM have the correct date/time and rep assignment. Contact Sales Ask support if the matching logic isn't working — the integration should auto-match based on rep + time window.

### Close rate not improving despite coaching
**Symptom**: Team has been using Sales Ask for 60+ days but close rate hasn't moved
**Cause**: Reps may be ignoring Coach Dean feedback, or the scoring criteria don't target the actual gaps
**Solution**: Check if reps are opening Coach Dean's text messages (engagement tracking in the dashboard). Review pipeline analytics to see which specific steps reps are still skipping. Run virtual ridealongs on the bottom 3 performers to identify whether the issue is skill (they don't know how) or will (they know but don't do it). Adjust coaching focus accordingly.
