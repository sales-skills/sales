---
name: sales-cirrus-insight
description: "Cirrus Insight platform help — Salesforce-native sales productivity with email/calendar sync, Meeting AI, Conversation Intelligence, Live Coaching, Smart Scheduler, and Buyer Signals. Use when Cirrus Insight sync keeps breaking or needing reinstall, emails not logging to Salesforce automatically, Cirrus Insight sidebar not loading in Gmail or Outlook, choosing between Cirrus Insight and Yesware or Mixmax or Revenue Grid for Salesforce email integration, setting up Cirrus Insight Meeting AI for prospect research, configuring Buyer Signals tracking, Email Blast campaign erroring out, or understanding Cirrus Insight modular pricing. Do NOT use for picking between note-takers generally (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your Cirrus Insight question — sync issues, pricing, Meeting AI, scheduling, etc.]"
license: MIT
version: 1.0.0
tags: [sales, salesforce, email-sync, conversation-intelligence, platform]
---

# Cirrus Insight Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Salesforce sync setup (email, calendar, tasks)
   - B) Sidebar not loading or disconnecting
   - C) Meeting AI or Conversation Intelligence
   - D) Calendar Scheduling or Smart Scheduler
   - E) Email Blast campaigns
   - F) Buyer Signals configuration
   - G) Pricing or module selection
   - H) API or webhook integration
   - I) Troubleshooting (sync breaks, reauthentication, plugin crashes)

2. **Which email client?**
   - A) Gmail
   - B) Outlook / Office 365
   - C) Both

3. **Which Cirrus Insight modules do you have?**
   - A) Just Salesforce Sync (Email/Calendar)
   - B) Sidebar + Sync
   - C) Full stack (Meeting AI, Buyer Signals, Scheduling, etc.)
   - D) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Cirrus Insight to other note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using CI call data | `/sales-coaching {user's question}` |
| Email open/click tracking strategy | `/sales-email-tracking {user's question}` |
| Meeting scheduling strategy (not CI-specific) | `/sales-meeting-scheduler {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |

When routing, provide the exact command.

## Step 3 — Cirrus Insight platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Module selection**: Start with Salesforce Email Sync ($5) + Sidebar ($11) as the foundation. Add Calendar Sync ($11) if reps use calendar heavily. Meeting AI ($13) and Buyer Signals ($10) are the highest-ROI add-ons for sales teams. Smart Scheduler ($20) only if you need intelligent lead routing. Email Blast ($12) only for personalized mass outreach.

**Billing strategy**: Annual billing saves 20% (10% billing + 10% term). Lock in 2-3 year terms for 30-40% savings if committed. Typical full-stack cost: ~$30-40/user/mo before discounts.

**Sync reliability**: If sync breaks repeatedly, check browser extension version, clear cache, re-authenticate Salesforce OAuth. Known issue: browser restarts can break the plugin — pin the extension and keep it updated.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Modular pricing adds up fast** — each feature is separate ($5-$20/user/mo). A full stack runs $30-40+/user/mo before Meeting Transcription ($15-$8.50/hr) and Live Coaching ($40-$28.50/hr) hourly charges.
- **Sync requires constant babysitting** — top user complaint is needing to uninstall/reinstall the plugin and re-sync email/calendar for sync to work properly.
- **Browser restarts kill the sidebar** — the Gmail/Outlook plugin frequently fails to load after restarting the browser. Pin the extension and check it's active.
- **Email Blast errors on large lists** — the campaign function frequently errors out on large recipient lists. Plan to send in smaller batches.
- **Authentication disconnects are frequent** — users report needing to reauthenticate multiple times per day during connectivity issues.
- **API is extremely limited** — only one endpoint (Calendar Scheduling views). No transcript download API, no email/activity API. Must be admin-enabled.
- **New version removed features** — Cirrus Insight replaced their legacy product with a new version that dropped capabilities some users relied on.

## Related skills

- `/sales-note-taker` — Comparing Cirrus Insight to other note-takers or wiring transcript APIs into CRM/warehouse
- `/sales-coaching` — Build coaching programs that consume call data from Conversation Intelligence
- `/sales-email-tracking` — Email open/click tracking strategy across platforms
- `/sales-meeting-scheduler` — Meeting scheduling strategy and booking page optimization
- `/sales-salesforce` — Salesforce-specific configuration and administration
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Sync keeps breaking
**User says**: "Cirrus Insight email sync to Salesforce keeps stopping — I have to uninstall and reinstall every few days."
**Skill does**:
1. Identifies this as the most common Cirrus Insight issue
2. Checks browser extension version and Salesforce OAuth connection status
3. Recommends: clear browser cache, remove and re-add the extension, re-authenticate Salesforce, check for browser extension conflicts
4. If persistent, suggests contacting Cirrus Insight support with sync logs
**Result**: Systematic troubleshooting steps for the sync reliability issue.

### Example 2: Choosing the right modules
**User says**: "I want Cirrus Insight for my 15-person sales team on Salesforce — which modules do I actually need?"
**Skill does**:
1. Recommends foundation: Email Sync ($5) + Sidebar ($11) + Calendar Sync ($11) = $27/user/mo
2. High-ROI add-ons: Meeting AI ($13) for automated prospect research, Buyer Signals ($10) for engagement tracking
3. Calculates: foundation + add-ons = $50/user/mo × 15 = $750/mo, minus 20% annual discount = $600/mo
4. Notes hourly-billed features (Transcription, Live Coaching) are separate and usage-based
**Result**: Module recommendation with cost math and discount strategy.

### Example 3: Email Blast not working
**User says**: "I tried sending an email blast to 500 contacts and it errored out halfway through."
**Skill does**:
1. Identifies this as a known Email Blast limitation with large lists
2. Recommends breaking into batches of 100-150 contacts
3. Suggests checking Salesforce daily email limits (may be hitting org-level caps)
4. If persistent, suggests using a dedicated email tool for large campaigns and reserving Email Blast for smaller targeted sends
**Result**: Workaround for the Email Blast scaling limitation.

## Troubleshooting

### Salesforce sync stops working and requires reinstall
**Symptom**: Email and calendar sync to Salesforce stops silently. Activities stop logging. Only fix is uninstalling and reinstalling the browser extension.
**Cause**: Browser extension state corruption, often triggered by browser restarts, Chrome updates, or Salesforce session expiry.
**Solution**: Clear browser cache and cookies for Cirrus Insight domains. Remove the extension completely, restart browser, reinstall from Chrome Web Store or Outlook Add-ins. Re-authenticate Salesforce. If recurring, check for conflicting browser extensions (other Salesforce tools, ad blockers) and ensure the extension is pinned and allowed to run in background.

### Sidebar says subscription expired but subscription is active
**Symptom**: The Cirrus Insight sidebar in Gmail/Outlook displays an "expired subscription" message even though billing is current.
**Cause**: UI bug related to license caching. The extension caches subscription status locally and sometimes fails to refresh.
**Solution**: Log out of Cirrus Insight within the extension, clear browser cache, log back in. If persists, have a Cirrus Insight administrator verify license assignment in the admin portal. Contact support if the issue recurs — multiple outreaches may be needed.

### Authentication keeps disconnecting
**Symptom**: Users must reauthenticate to Salesforce and/or email multiple times per day.
**Cause**: Salesforce OAuth token expiry, network instability, or Cirrus Insight server-side connectivity issues.
**Solution**: Check Salesforce Connected Apps settings — ensure the Cirrus Insight app has "Refresh Token is valid until revoked" policy. Verify network connectivity is stable. If it's a widespread issue across users, check Cirrus Insight's status page for outages. The issue tends to be intermittent and may resolve with browser/extension updates.
