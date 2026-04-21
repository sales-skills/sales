---
name: sales-noota
description: "Noota platform help — AI meeting assistant + recruitment automation with transcription, summaries, voice agents, email automation, and ATS/CRM sync. Use when setting up Noota recording for Zoom/Teams/Meet/Webex, connecting Noota to HubSpot or Salesforce or Pipedrive, transcription quality is poor or needs manual cleanup, summaries appear in the wrong language, configuring Noota Talent for candidate screening, setting up voice agents for recruitment outreach, Noota bot not joining meetings, or choosing between Noota Pro and Business plans. Do NOT use for comparing AI note-takers across vendors (use /sales-note-taker) or reviewing a specific call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Noota]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, recruitment, platform]
---

# Noota Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Recording and transcription setup (online, phone, or in-person meetings)
   - B) CRM or ATS integration (HubSpot, Salesforce, Pipedrive, Greenhouse, etc.)
   - C) Noota Talent / recruitment automation (sourcing, screening, voice agents)
   - D) Email automation or inbox management
   - E) Pricing, plan selection, or feature comparison
   - F) Troubleshooting (transcription quality, bot issues, language problems)
   - G) API or Zapier automation

2. **Which Noota plan are you on?**
   - A) Free ($0 — 300 min/mo)
   - B) Pro ($19-29/mo — 1,000 min/mo, up to 10 seats)
   - C) Business ($39-49/mo — unlimited, Zapier & API, analytics)
   - D) Hiring Agent ($199-299/mo — sourcing + screening)
   - E) Enterprise (custom)
   - F) Not sure / evaluating

3. **What tools do you use?**
   - Meeting platform: Zoom, Teams, Meet, Webex, Aircall, Ringover
   - CRM: HubSpot, Salesforce, Pipedrive, Zoho, Zendesk, Monday, Dynamics 360
   - ATS (if recruiting): Greenhouse, Bullhorn, SmartRecruiter, Workable, BambooHR, etc.

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Noota vs other AI note-takers | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM integration patterns (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |
| HubSpot-specific platform help | `/sales-hubspot {user's question}` |
| Salesforce-specific platform help | `/sales-salesforce {user's question}` |

Otherwise, answer directly using the platform reference below.

## Step 3 — Noota platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority order:**
1. Connect calendar (Google Calendar or Outlook) first — this enables auto-join
2. Set up recording preferences (bot vs Chrome extension vs mobile app)
3. Configure summary templates for your meeting types
4. Connect CRM/ATS integration
5. Set up Zapier workflows if on Business+ plan

**Plan selection quick guide:**
- Solo user, light meeting load → Free (300 min/mo)
- Individual or small team wanting email automation + phone calls → Pro ($19/mo annual)
- Growing team needing unlimited recording, Zapier/API, analytics → Business ($39/mo annual)
- Recruiting team needing AI sourcing + screening → Hiring Agent ($199/mo annual)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **API and Zapier require Business plan ($39/mo+).** Free and Pro users cannot automate workflows via API or Zapier — only manual sharing via NootEx Chrome extension or NooBot auto-share.
- **Recording limited to Meet/Zoom/Teams/Webex + Aircall/Ringover.** Other meeting platforms (GoTo, BlueJeans, Dialpad) are not supported. Use the Chrome extension or mobile app as workarounds for unsupported platforms.
- **Transcription quality varies with audio conditions.** Numbers, percentages, and technical jargon are frequently misinterpreted. Plan for manual review of critical data points.
- **Summary language may not match the spoken language.** Noota sometimes generates summaries in a different language than the meeting was conducted in. Check language settings in your workspace preferences.
- **Free plan stores recordings for only 1 month.** Export or integrate before the retention window closes.
- **Noota Talent (Hiring Agent) is a separate pricing tier.** Productivity features (meeting notes, email automation) are on the 360 plans; recruitment automation (sourcing, screening, voice agents) requires the Hiring Agent plan at $199-299/mo.
- **Enterprise requires 50+ licenses minimum.** Custom integrations, DPA, invoice billing, and dedicated support are Enterprise-only.

## Related skills

- `/sales-note-taker` — Compare AI note-takers across vendors, plan API integrations for transcript pipelines
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Noota for a sales team
**User says**: "I manage a 12-person sales team on HubSpot. How do I get Noota set up so call summaries automatically go into HubSpot deals?"
**Skill does**:
1. Recommends Business plan (unlimited recording, CRM integrations, analytics for 12 seats)
2. Walks through HubSpot integration setup via NooBot — connect HubSpot, configure auto-share to send summaries and links to matching deals via email lookup
3. Notes that summary → deal linking works by matching participant email to HubSpot contact/deal
4. Suggests configuring summary templates optimized for sales calls (action items, next steps, objections)
**Result**: Automated meeting-to-CRM pipeline with deal-level summary logging.

### Example 2: Recruitment screening with voice agents
**User says**: "I want to use Noota to screen candidates 24/7 without my recruiters doing first-round calls. How does the voice agent work?"
**Skill does**:
1. Confirms Hiring Agent plan ($199/mo annual) is required for AI screening
2. Explains screening agent workflow: create job requirements via Intake Agent → generate public screening link → candidates self-schedule voice interviews → AI conducts structured interviews → generates scorecards
3. Notes 500 agent interviews/month limit on Hiring Agent plan
4. Walks through ATS integration to push candidate reports
**Result**: Clear setup path for automated candidate screening pipeline.

### Example 3: Transcription quality issues
**User says**: "Noota keeps getting numbers wrong in my financial review meetings — it transcribes '15%' as 'fifty percent' and dollar amounts are garbled."
**Skill does**:
1. Acknowledges this is a known limitation — ASR struggles with numbers and percentages
2. Recommends: speak numbers slowly and clearly, use screen sharing for data-heavy content
3. Suggests using custom summary templates that flag numerical data for manual review
4. Notes that summary templates can be configured to extract and highlight specific data types
**Result**: Workaround strategy for known transcription accuracy gaps.

## Troubleshooting

### Noota bot not joining meetings
**Symptom**: Bot doesn't appear in Zoom/Teams/Meet calls despite calendar connection
**Cause**: Calendar sync lost connection, meeting is on an unsupported platform, or the meeting was created after calendar sync last refreshed
**Solution**: Check calendar connection in Settings → Integrations. Verify the meeting platform is supported (Zoom, Teams, Meet, Webex). Try disconnecting and reconnecting your calendar. For ad-hoc meetings, use the Chrome extension to record manually.

### Summaries in the wrong language
**Symptom**: Meeting conducted in English but summary appears in French (or vice versa)
**Cause**: Noota's language detection sometimes picks the wrong language, especially in multilingual teams or when the workspace default language differs from the meeting language
**Solution**: Set the preferred summary language in your workspace settings. For individual meetings, you can re-generate the summary with a specific language selected. Check that your workspace language setting matches your team's primary meeting language.

### CRM integration not syncing summaries
**Symptom**: Summaries don't appear in HubSpot/Salesforce/Pipedrive deals after meetings
**Cause**: NooBot auto-share may not be configured, or the participant emails don't match CRM contacts
**Solution**: Verify NooBot is enabled and the CRM integration is connected in Settings → Integrations. Check that meeting participant emails match existing CRM contacts — Noota matches via email to find the right deal/contact. If using manual sharing via NootEx, make sure to click the share button after each meeting.
