---
name: sales-siro
description: "Siro platform help — AI field sales coaching via mobile recording, real-time Halftime mid-call coaching, automated CRM data capture, conversation analytics, follow-up draft generation. Use when setting up Siro for a field sales team, configuring Siro CRM integration with Salesforce or HubSpot via Merge, Siro recording quality or battery drain issues on job sites, building a custom integration with Siro's REST API and webhooks, comparing Siro vs Rilla vs SalesAsk for field sales coaching, or Siro coaching prompts feel too generic for your vertical. Do NOT use for virtual/video meeting note-taking (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your Siro question — e.g., 'set up Siro CRM sync with ServiceTitan' or 'battery drain during long HVAC appointments']"
license: MIT
version: 1.0.0
tags: [sales, field-sales, conversation-intelligence, coaching, platform]
---

# Siro Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Siro for my field sales team
   - B) CRM integration (Salesforce, HubSpot, Zoho, Pipedrive, Dynamics, SugarCRM)
   - C) Improving recording quality or reducing battery drain
   - D) Using Halftime real-time coaching or customizing scorecards
   - E) Building a custom API integration (webhooks, extractions, deep linking)
   - F) Comparing Siro to other field sales coaching tools (Rilla, SalesAsk, Craft)
   - G) Troubleshooting recording, processing, or billing issues

2. **What industry?**
   - A) Home services (HVAC, plumbing, electrical, pest)
   - B) Home improvement / remodeling / windows
   - C) Auto dealerships or auto repair
   - D) Solar / roofing
   - E) Telecom / door-to-door
   - F) Medical devices / healthcare
   - G) Political canvassing
   - H) Other field sales

3. **Team size?**
   - A) Small team (<10 reps)
   - B) Mid-size (10-50 reps)
   - C) Large (50+ reps)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking a virtual/online meeting note-taker (not field sales) | `/sales-note-taker {user's question}` |
| Building a coaching program or training cadence | `/sales-coaching {user's question}` |
| Reviewing a specific recorded call for coaching | `/sales-call-review {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

Otherwise, answer directly below.

## Step 3 — Siro platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, CRM integration via Merge, API endpoints, recording workflow, Halftime coaching, scorecard setup.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For setup**: Walk through mobile app installation → recording consent setup (11 two-party states) → CRM connection via Merge → scorecard customization → first Halftime coaching session.

**For CRM integration**: Siro uses Merge for standard CRMs (Salesforce, HubSpot, Zoho, Pipedrive, Dynamics, SugarCRM). For custom CRMs, use Siro's REST API — sync engagements and opportunities via PUT endpoints, then listen for `recordingProcessed` / `recordingLinked` webhooks. Entity extractions auto-populate CRM fields.

**For recording issues**: Check device placement (chest pocket or collar clip), ensure app is foregrounded, verify offline mode is working. Battery drain is expected for sustained recording — suggest a battery pack for all-day field work.

**For coaching**: Use Halftime for mid-call coaching. Customize scorecards to match your industry's sales process. Use "Ask Siro" for quick answers without reviewing full recordings.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about pricing and integration gotchas that may be outdated.*

- **Pricing is not public.** Estimated $200-350/rep/month (~$3,000+/user/year). Annual contract required, 5-10 user minimum. Setup fee $2,000-$5,000. Renewal price increases of ~15% reported.
- **Coaching prompts are horizontal, not vertical.** Siro's objection-handling suggestions are generic across industries. If your reps sell HVAC or roofing, you'll need to customize scorecards heavily — the defaults won't reference trade-specific pricing objections.
- **No call center coverage.** Siro only coaches in-person field sales. If your sales process starts with a CSR booking the appointment, that call isn't captured. Pair with a phone-based tool for full-funnel coaching.
- **11 U.S. states require recording consent.** California, Massachusetts, Connecticut, Florida, Maryland, Illinois, Washington, Montana, Pennsylvania, New Hampshire, Oregon. Siro doesn't auto-handle consent — train reps to disclose.
- **Battery drain is real.** Sustained mobile recording drains batteries fast. Recommend portable chargers for reps doing 4+ appointments per day.
- **Support tiers matter.** Starter/Professional plans get email-only support with 24-48 hour response. Enterprise gets a dedicated account manager.

## Related skills

- `/sales-salesask` — Sales Ask platform help — direct competitor for home services field + call center AI coaching with active Coach Dean feedback. Install: `npx skills add sales-skills/sales --skill sales-salesask -a claude-code -y`
- `/sales-rilla` — Rilla platform help — direct competitor for field sales AI coaching. Install: `npx skills add sales-skills/sales --skill sales-rilla -a claude-code -y`
- `/sales-note-taker` — Choosing an AI note-taker for virtual/video meetings (Fathom, Fireflies, Gong, etc.) and building transcript API pipelines. Install: `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code -y`
- `/sales-coaching` — Building coaching programs, onboarding, role-plays, certifications
- `/sales-call-review` — Reviewing a specific call recording for coaching feedback
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Setting up Siro for a roofing sales team
**User says**: "I run a roofing company with 8 field reps doing in-home estimates. How do I get Siro set up?"
**Skill does**: Walks through mobile app install, recording consent requirements for their state, CRM connection (ServiceTitan or Salesforce via Merge), scorecard customization for roofing-specific objections (price vs competitor, material choices, financing), and first Halftime coaching session setup.

### Example 2: Building a custom CRM integration
**User says**: "I use a custom CRM and need Siro data flowing into it automatically."
**Skill does**: Walks through Siro's REST API — creating an OAuth app, syncing engagements and opportunities via PUT endpoints, setting up webhooks for `recordingProcessed` events, extracting conversation data (decision maker, objections, next steps) via the entity extractions endpoint, and deep linking from CRM to Siro recordings.

### Example 3: Comparing Siro vs Rilla
**User says**: "Should I go with Siro or Rilla for my HVAC team?"
**Skill does**: Compares pricing (~$3K/user/yr Siro vs ~$4K/user/yr Rilla), coaching approach (Siro has Halftime real-time coaching, Rilla is post-appointment only), CRM integrations (both use Merge for 5+ CRMs), industry focus (Siro is multi-industry, Rilla dominates home services), offline capability (both work offline), and contract terms (both annual, both have minimums).

## Troubleshooting

### Coaching prompts feel generic — not relevant to my industry
**Symptom**: Siro's suggested rebuttals and coaching tips don't match your vertical's specific objections
**Cause**: Siro's default coaching is built for horizontal sales, not tailored to HVAC pricing pushback, roofing material objections, or auto repair upsells
**Solution**: Customize scorecards with your industry-specific criteria. Upload your sales script or top-performer recordings so Siro learns your process. Create custom evaluation criteria that match your objection categories.

### Battery dies before finishing daily appointments
**Symptom**: Phone runs out of battery during the 3rd or 4th appointment of the day
**Cause**: Sustained audio recording and processing drains mobile batteries quickly
**Solution**: Equip reps with portable battery packs. Disable unnecessary background apps during recording. On iPhone, use Low Power Mode between appointments (but turn it off before recording). Consider recording only the sales conversation portion, not the full visit.

### CRM data not syncing — recordings missing from opportunities
**Symptom**: Siro recordings exist but aren't linked to CRM opportunities
**Cause**: Engagement sync not configured, opportunity external IDs don't match, or webhook not firing
**Solution**: Verify the PUT `/v1/integrations/sync/engagements` is sending the correct `externalId` matching your CRM records. Check webhook delivery for `recordingLinked` events. If using Merge, verify Field Mapping configuration in the Merge dashboard. Test with a single appointment and confirm the webhook fires before rolling out to the team.
