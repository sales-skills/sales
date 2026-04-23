---
name: sales-veloxy
description: "Veloxy platform help — Salesforce-native field sales enablement with predictive intelligence, geolocation route planning, email tracking, and mobile CRM. Use when configuring Veloxy for a field sales team, Veloxy emails stopped sending or email sync breaking, Veloxy geolocation not showing nearby leads, Veloxy mobile app crashing or lead status not updating, comparing Veloxy to Scratchpad or Weflow or Badger Maps for Salesforce field reps, Veloxy Lite drip campaigns not triggering, or evaluating field sales software for outside reps on Salesforce. Do NOT use for conversation intelligence or meeting recording (use /sales-note-taker) or general CRM selection (use /sales-crm-selection)."
argument-hint: "[describe what you need help with in Veloxy]"
license: MIT
version: 1.0.0
tags: [sales, field-sales, salesforce, platform]
---

# Veloxy Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What's your primary goal?**
   - A) Set up Veloxy for a field sales team
   - B) Fix an issue (email sync, geolocation, mobile app)
   - C) Compare Veloxy to alternatives (Scratchpad, Weflow, Badger Maps)
   - D) Configure email tracking or drip campaigns (Veloxy Lite)
   - E) Build reports or dashboards

2. **What Salesforce edition are you on?**
   - A) Professional
   - B) Enterprise
   - C) Unlimited / Performance
   - D) Not sure

3. **How does your team work?**
   - A) Field/outside sales — in-person meetings, driving between prospects
   - B) Inside sales — desk-based, phone/video calls
   - C) Hybrid — mix of field and inside

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| CRM comparison or switching CRMs | `/sales-crm-selection {user's question}` |
| General email tracking strategy | `/sales-email-tracking {user's question}` |
| Revenue forecasting methodology | `/sales-forecast {user's question}` |
| Meeting recording or conversation intelligence | `/sales-note-taker {user's question}` |
| Salesforce data quality or deduplication | `/sales-data-hygiene {user's question}` |
| Connecting Veloxy to other tools via Zapier/webhooks | `/sales-integration {user's question}` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — Veloxy platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, geolocation, email tracking, mobile app.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Field sales setup priorities:**
1. Connect Salesforce — verify edition compatibility (PE/EE/UE/PP/FE/DE all supported)
2. Set up email sync — Gmail or Outlook, verify bidirectional sync is working
3. Configure geolocation — set up route optimization, test nearby lead discovery
4. Deploy mobile app — install on reps' devices, test lead/contact access
5. Enable email tracking — if using Veloxy Lite, set up templates and drip campaigns

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API documentation.** Veloxy lists an API on AppExchange but has no published developer docs. If you need programmatic access, contact support@veloxy.io directly.
- **Email logging is limited to primary contacts.** Only emails with contacts already in your CRM get logged — if a prospect isn't in Salesforce yet, their emails won't sync automatically. Create the contact first.
- **Steep learning curve reported.** Multiple reviewers note they don't use all features. Start with email sync + geolocation, then layer in predictive intelligence and drip campaigns.
- **Veloxy Lite is a separate product.** Veloxy (field sales, $25/mo) and Veloxy Lite (email-focused, $35/mo) are different products with different pricing. Make sure you're buying the right one.
- **Gmail/Outlook sending limits still apply.** Veloxy sends from your real inbox — Gmail caps at 2,000/day, Outlook at 300/day for individual accounts. Drip campaigns count against these limits.
- **Acquired by Core Group ($18.7M).** Ownership change may affect roadmap, pricing, or support. Monitor for changes.

## Related skills

- `/sales-scratchpad` — Scratchpad platform help (Salesforce-native AI workspace — different approach: CRM overlay with AI field updates, pipeline sheets)
- `/sales-laserfocus` — Laserfocus platform help (Salesforce overlay — Stacks, table views, simpler/lighter than Scratchpad or Veloxy)
- `/sales-weflow` — Weflow platform help (Salesforce-native Revenue AI with conversation intelligence — has CI, Veloxy doesn't)
- `/sales-email-tracking` — Email tracking strategy across platforms
- `/sales-forecast` — Revenue forecasting and pipeline analysis
- `/sales-crm-selection` — CRM comparison and selection
- `/sales-data-hygiene` — CRM data quality and activity logging
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Veloxy for a field sales team
**User says**: "I manage 8 outside reps selling industrial equipment. They use Salesforce but hate the mobile app. Would Veloxy help?"
**Skill does**:
1. Reads platform guide — confirms Veloxy is built for exactly this: field reps on Salesforce
2. Highlights geolocation intelligence for route optimization between prospect sites
3. Notes mobile app (iOS/Android) provides Salesforce data access without the native Salesforce mobile experience
4. Recommends starting with Basic ($25/user/mo) and adding Lite ($35/user/mo) only if reps need drip campaigns
5. Warns about steep learning curve — suggests phased rollout starting with email sync + maps
**Result**: Clear recommendation with rollout strategy and cost estimate.

### Example 2: Email tracking not working
**User says**: "Veloxy stopped sending my scheduled emails last week. Support just keeps emailing me back and forth."
**Skill does**:
1. Checks common causes: Gmail/Outlook auth token expired, sending limit hit, template issues
2. Suggests re-authenticating email connection in Veloxy settings
3. Recommends testing with a manual send (no template) to isolate whether it's a template or connection issue
4. Notes the known "app glitches when sending without template" issue — if that's the case, create a minimal template as a workaround
5. Suggests escalating via phone support (510-402-6913) if email support isn't resolving it
**Result**: Structured debugging checklist with escalation path.

### Example 3: Comparing Veloxy to Scratchpad
**User says**: "My team is on Salesforce Enterprise. Should we use Veloxy or Scratchpad?"
**Skill does**:
1. Clarifies: Veloxy = field/outside sales (geolocation, route planning, mobile); Scratchpad = inside sales (pipeline views, AI field updates, call recording with Gong)
2. If the team is mostly in the field → Veloxy for geolocation and mobile CRM
3. If the team is desk-based → Scratchpad for pipeline management and CRM hygiene
4. If hybrid → could use both, but notes cost ($25/user/mo Veloxy + $29-49/user/mo Scratchpad)
5. Notes Veloxy has no conversation intelligence; Scratchpad integrates with Gong for CI
**Result**: Clear decision framework based on team's work style.

## Troubleshooting

### Veloxy emails stopped sending
**Symptom**: Scheduled emails or drip campaigns stop going out, no error message in the app
**Cause**: Gmail/Outlook OAuth token expired, inbox sending limit reached, or account-level block
**Solution**: Re-authenticate your email connection in Veloxy settings. Check your Gmail/Outlook sent folder to verify whether emails are actually leaving. If using drip campaigns, check if you hit Gmail's 2,000/day or Outlook's 300/day limit. If re-auth doesn't fix it, contact support at 510-402-6913 (phone tends to resolve faster than email).

### Mobile app can't update lead status
**Symptom**: Tapping to change a lead's status in the Veloxy mobile app does nothing or the app crashes
**Cause**: Known app stability issue reported by users. May be related to Salesforce field-level security or page layout restrictions.
**Solution**: Verify your Salesforce profile has write access to the Lead Status field. Try force-closing and reopening the app. If it persists, update to the latest app version and clear the app cache. As a workaround, update the status via Salesforce's mobile app or desktop.

### Geolocation not showing nearby leads
**Symptom**: The map view shows no leads or contacts near your current location
**Cause**: Location permissions not granted, or Salesforce address fields are empty/malformed
**Solution**: Verify Veloxy has location permissions (Settings > Privacy > Location Services on iOS). Check that your Salesforce leads/contacts have valid address data in the standard Mailing/Billing Address fields. Veloxy geocodes from Salesforce address fields — if those are empty, nothing will appear on the map.
