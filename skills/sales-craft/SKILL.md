---
name: sales-craft
description: "Craft platform help — AI growth engine for home services with real-time field sales coaching during in-home appointments, 24/7 AI call center with live CSR coaching, revenue recovery AI agents, Craft Intelligence analytics. Use when reps need live coaching during appointments not after, call center booking rates are too low, missed estimates and unsold jobs pile up without follow-up, comparing Craft vs Rilla vs Siro vs SalesAsk for home services coaching, setting up Craft with ServiceTitan or Salesforce, or wondering if bundled pricing is worth it. Do NOT use for virtual/video meeting note-taking (use /sales-note-taker) or building a coaching program from scratch (use /sales-coaching)."
argument-hint: "[describe your Craft question — e.g., 'is Craft worth it for my 20-rep HVAC team' or 'connect Craft to ServiceTitan']"
license: MIT
version: 1.0.0
tags: [sales, field-sales, call-center, coaching, home-services, platform]
---

# Craft Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Evaluating Craft for my team (pricing, fit, ROI)
   - B) Setting up Craft — CRM connection, sales process upload, onboarding
   - C) Real-time field sales coaching — how it works during appointments
   - D) AI Call Center — 24/7 booking, call scoring, CSR coaching
   - E) Revenue Recovery AI Agents — automated follow-up for missed opportunities
   - F) Comparing Craft to Rilla, Siro, or SalesAsk
   - G) CRM integration (ServiceTitan, Salesforce, HubSpot, Jobber, etc.)
   - H) Troubleshooting — coaching alerts not firing, CRM sync issues, implementation delays

2. **What industry?**
   - A) HVAC
   - B) Roofing / solar
   - C) Plumbing / electrical
   - D) Windows / doors / remodeling
   - E) Pest control / pool / garage doors
   - F) Other home services

3. **Team size?**
   - A) Small team (3-15 reps)
   - B) Growing team (15-50 reps)
   - C) Large organization (50+ reps)
   - D) Franchise / PE platform (multi-location)

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Picking a virtual/online meeting note-taker (not field sales) | `/sales-note-taker {user's question}` |
| Building a coaching program, training cadence, or onboarding plan | `/sales-coaching {user's question}` |
| Reviewing a specific recorded call for coaching | `/sales-call-review {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| CRM selection — which CRM to pick | `/sales-crm-selection {user's question}` |

Otherwise, answer directly below.

## Step 3 — Craft platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, real-time coaching mechanics, AI call center setup, revenue recovery agents.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For evaluation**: Craft is the only home services coaching platform that coaches reps live during the appointment (not 10-30 min after). It bundles field coaching + call center + revenue recovery — you can't buy modules separately. This makes it a strong fit for teams that need both CSR and field rep coaching, but overkill if you only need one.

**For setup**: CRM connection (5 min) → upload sales process (2 min) → white-glove onboarding → 30-day implementation roadmap. Expect full value in 30 days, not day one.

**For CRM integration**: Craft has native two-way sync with ServiceTitan, Salesforce, HubSpot, Jobber, JobNimbus, AccuLynx, Housecall Pro, Improveit 360, i360, RingCentral. The AI books directly in your CRM, updates customer records, and checks tech availability in real-time.

**For comparison**: See the comparison table in platform-guide.md. Key differentiator: Craft coaches in real-time during the appointment. Rilla/Siro deliver feedback 10-30 min after. SalesAsk texts feedback between appointments.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about pricing and bundled packaging that may be outdated.*

- **Bundled pricing only.** You can't buy field coaching or call center separately. If you only need one module, you're paying for features you won't use. Compare module-specific alternatives (Rilla/Siro for field-only, dedicated AI CSR for call center-only).
- **No public pricing page.** Call center starts at ~$999/mo for unlimited calls. Field coaching estimated ~$2-3K/user/year. Get a quote — actual pricing depends on team size and modules.
- **30-day implementation.** Competitors like SalesAsk claim 7-14 day setup. Craft's white-glove onboarding is thorough but slower. Plan for a month before expecting full ROI.
- **No public API.** Custom integrations beyond the supported CRMs aren't possible. If you need API access for custom workflows, check with Craft directly.
- **11 U.S. states require recording consent.** California, Connecticut, Florida, Illinois, Maryland, Massachusetts, Montana, New Hampshire, Oregon, Pennsylvania, Washington. Train reps to disclose recording before the conversation starts.
- **Founded 2024.** Newer entrant vs Rilla (2019) and Siro. Smaller customer base (~500) may mean less industry benchmarking data.

## Related skills

- `/sales-rilla` — Rilla platform help — field sales AI coaching with virtual ridealongs, post-appointment feedback. Install: `npx skills add sales-skills/sales --skill sales-rilla -a claude-code -y`
- `/sales-siro` — Siro platform help — field sales AI coaching with Halftime real-time mid-call coaching. Install: `npx skills add sales-skills/sales --skill sales-siro -a claude-code -y`
- `/sales-salesask` — Sales Ask platform help — field + call center AI coaching with Coach Dean active text feedback. Install: `npx skills add sales-skills/sales --skill sales-salesask -a claude-code -y`
- `/sales-coaching` — Building coaching programs, onboarding, role-plays, certifications
- `/sales-call-review` — Reviewing a specific call recording for coaching feedback
- `/sales-note-taker` — Picking an AI note-taker for virtual/video meetings and wiring transcript APIs
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

### Example 1: Evaluating Craft for an HVAC team
**User says**: "I have 20 HVAC techs doing in-home estimates. Is Craft worth the money vs Rilla?"
**Skill does**: Compares Craft's real-time coaching (live during appointment) vs Rilla's post-appointment feedback (10-30 min delay). Notes Craft bundles call center AI + field coaching + revenue recovery, while Rilla is field-only. Discusses pricing (~$2-3K/user/yr Craft bundled vs ~$4K/user/yr Rilla field-only). Recommends Craft if the user also needs CSR coaching, Rilla if field-only coaching is sufficient.

### Example 2: Setting up Craft with ServiceTitan
**User says**: "How do I connect Craft to my ServiceTitan account?"
**Skill does**: Explains Craft is an official ServiceTitan partner with native two-way sync. Walks through the 5-minute CRM connection flow, what data syncs (appointments, customer records, tech availability), and how the AI books directly in ServiceTitan.

### Example 3: Call center booking rates are low
**User says**: "Our CSRs are only booking 60% of inbound calls. Can Craft help?"
**Skill does**: Explains Craft's AI Call Center module — 24/7 AI booking with 91.4% reported booking rate, automatic call scoring of 100% of calls (not sampling), live CSR coaching, and smart capacity management. Notes the $999/mo starting price and that it comes bundled with field coaching and revenue recovery.

## Troubleshooting

### 30-day implementation feels too long
**Symptom**: Team is eager to start but Craft's onboarding takes a full month
**Cause**: White-glove implementation includes sales process upload, CRM integration, team training, and calibration
**Solution**: Ask your Craft onboarding manager to prioritize the module you need most (field coaching or call center). Some teams get partial value in week 1-2 while full calibration continues. If speed is critical, SalesAsk claims 7-14 day implementation.

### Real-time coaching alerts not appearing during appointments
**Symptom**: Rep has the app running but no coaching prompts appear during the conversation
**Cause**: App not foregrounded, poor cellular connection at job site, or sales process not yet uploaded/calibrated
**Solution**: Ensure the app is actively running (not backgrounded by OS). Check cellular signal strength. Verify the sales process upload completed during onboarding — real-time coaching requires the AI to know your specific sales flow to generate relevant prompts.

### CRM data not syncing — appointments or follow-ups missing
**Symptom**: Craft shows completed appointments but CRM doesn't reflect updated records
**Cause**: CRM integration not fully configured, field mapping mismatch, or sync delay
**Solution**: Check the CRM connection in Craft settings. Verify field mappings match your CRM's custom field names. Native integrations (ServiceTitan, Salesforce, HubSpot) should sync in near real-time. If sync is delayed, contact Craft support — they have white-glove implementation specifically for CRM setup.
