---
name: sales-fyxer
description: "Fyxer AI platform help — AI email assistant that organizes your inbox, drafts replies in your voice, and takes meeting notes with auto follow-ups ($22.50-50/user/mo). Use when setting up Fyxer for Gmail or Outlook, email drafts sound robotic or miss context, inbox labels keep miscategorizing important emails, meeting notes are inaccurate or incomplete, comparing Fyxer to Superhuman or Shortwave or SaneBox, wondering if Fyxer is worth the price for inbox automation, or troubleshooting Fyxer performance issues. Do NOT use for choosing a dedicated meeting note-taker (use /sales-note-taker). Do NOT use for general AI agent building (use /sales-lindy)."
argument-hint: "[describe what you need help with in Fyxer AI]"
license: MIT
version: 1.0.0
tags: [sales, email-assistant, ai-assistant, meeting-notes, platform]
---

# Fyxer AI Platform Help

Helps with everything related to using Fyxer AI — an AI email assistant that auto-organizes your inbox, drafts replies in your communication style, and captures meeting notes with follow-up drafts. SOC 2 Type II, ISO 27001, GDPR, HIPAA compliant.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are you trying to do with Fyxer?**
   - A) Set up Fyxer for the first time (Gmail or Outlook)
   - B) Fix inbox organization / mislabeled emails
   - C) Improve AI draft quality (sounds robotic, wrong tone)
   - D) Use the meeting notetaker feature
   - E) Compare Fyxer to alternatives
   - F) Something else — describe it

2. **Which email provider?**
   - A) Gmail / Google Workspace
   - B) Outlook / Microsoft 365
   - C) Both

3. **Which plan are you on (or considering)?**
   - A) Free trial (haven't decided yet)
   - B) Starter ($22.50-30/mo) — single inbox
   - C) Professional ($37.50-50/mo) — multiple inboxes, Fyxer Chat, HubSpot
   - D) Enterprise (custom)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Choosing a meeting note-taker across platforms → "This is a note-taker selection question — run: `/sales-note-taker {user's original question}`"
- AI agent/workflow building → "Run: `/sales-lindy {user's original question}`"
- AI executive assistant comparison (alfred_ etc.) → "Run: `/sales-alfred {user's original question}`"
- CRM integration strategy → "Run: `/sales-integration {user's original question}`"

Otherwise, answer directly from the platform reference below.

## Step 3 — Fyxer platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, plan gates, integrations, training tips, and workarounds.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For improving draft quality:**
1. Send more emails manually first — Fyxer learns from your Sent folder
2. Upload company docs and style guides (Professional+ only)
3. Always review and edit drafts before sending — Fyxer never auto-sends
4. If tone is wrong after 2+ weeks, consider that your sent email history may not reflect your desired style

**For fixing inbox organization:**
1. Manually move mislabeled emails to the correct label — Fyxer learns from corrections
2. Whitelist important senders that keep getting buried
3. Give it 1-2 weeks of corrections before judging accuracy
4. Check if your email rules/filters conflict with Fyxer's labels

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and billing that may be outdated.*

- **No API, no webhooks, no Zapier.** Fyxer is entirely UI-driven — you cannot automate anything programmatically. No integration surface for developers.
- **Fyxer never auto-sends emails.** All drafts require manual review and send. This is by design but means it's an assistant, not an automation.
- **Credit card required for free trial.** Multiple users report unexpected charges ($30-900) when trials end. Set a calendar reminder to cancel if evaluating.
- **HubSpot is the only CRM integration** and requires Professional ($37.50+/mo). No Salesforce, Pipedrive, or other CRM support.
- **Single inbox on Starter.** If you need multiple inboxes organized, you must upgrade to Professional.
- **No Apple Mail support.** Gmail and Outlook only.
- **Meeting notetaker is secondary.** Fyxer's notes are less capable than dedicated tools like Fathom or Fireflies — consider a dedicated note-taker for sales call intelligence.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-note-taker` — Choose a dedicated AI meeting note-taker (Fathom, Fireflies, Otter, etc.). Install:
  `npx skills add sales-skills/sales --skill sales-note-taker -a claude-code`
- `/sales-alfred` — alfred_ AI executive assistant (email triage, reply drafting, task extraction)
- `/sales-lindy` — Lindy no-code AI agent builder (email, calendar, custom workflows)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Fyxer keeps mislabeling important client emails
**User says**: "Fyxer puts my client emails in FYI instead of To Respond — how do I fix this?"
**Skill does**:
1. Explains Fyxer's label categories (To Respond, FYI, Comment, Notification, etc.)
2. Advises manually moving mislabeled emails — Fyxer learns from corrections
3. Recommends whitelisting important sender domains
4. Notes it takes 1-2 weeks of consistent corrections for accuracy to improve
5. If accuracy doesn't improve, suggests checking email rule conflicts
**Result**: Troubleshooting plan for inbox mislabeling with realistic timeline expectations

### Example 2: Compare Fyxer to Superhuman for email productivity
**User says**: "Should I use Fyxer or Superhuman for managing my inbox?"
**Skill does**:
1. Compares: Fyxer focuses on AI drafting + organization + meeting notes, Superhuman focuses on speed + keyboard workflow + Split Inbox
2. Notes pricing: Fyxer $22.50-50/mo vs Superhuman $33/mo
3. Explains Fyxer learns your voice for drafts; Superhuman has AI Write with Grammarly
4. Notes Fyxer includes meeting notes; Superhuman is email-only
5. Recommends Fyxer if you want hands-off inbox sorting + meeting notes, Superhuman if you want speed + keyboard-driven workflow
**Result**: Clear comparison with recommendation based on workflow preference

### Example 3: Set up Fyxer meeting notetaker with Zoom
**User says**: "How do I get Fyxer to join my Zoom calls and take notes?"
**Skill does**:
1. Explains Fyxer connects to your calendar via Gmail/Outlook OAuth
2. Notes Zoom requires a separate connection from the Fyxer dashboard
3. Explains the notetaker joins scheduled meetings automatically and delivers notes + follow-up drafts to inbox
4. Warns that Fyxer's notes are basic compared to dedicated tools — no CRM sync, no deal intelligence
5. If user needs advanced meeting intelligence, routes to `/sales-note-taker`
**Result**: Setup steps with honest assessment of meeting notes capability

## Troubleshooting

### Email drafts sound robotic or get facts wrong
**Symptom**: AI-drafted replies don't match your tone, promise things you didn't agree to, or get dates/details wrong
**Cause**: Fyxer's voice model is trained on your sent email history. If your history is short, formal, or inconsistent, drafts will be poor. The AI can also "hallucinate" commitments or facts.
**Solution**: Always review every draft before sending — never trust blindly. Send more emails manually to build training data. On Professional, upload company docs and style guides. If drafts are consistently wrong after 2+ weeks of active use, the tool may not be a good fit for your communication style.

### Unexpected billing charges after free trial
**Symptom**: Charged $30-900 when free trial expired, even if you thought you canceled
**Cause**: Trial requires a credit card upfront and auto-converts to paid plan. Some users report charges even after attempting cancellation.
**Solution**: Set a calendar reminder 2 days before trial ends. Cancel from the Fyxer dashboard (Settings → Subscription). If incorrectly charged, contact support@fyxer.com immediately. If no response, dispute with your credit card company. Document everything.

### Dashboard slow or unresponsive
**Symptom**: Fyxer dashboard takes 30+ seconds to load, pages freeze, or show "not responding"
**Cause**: Known performance issues, especially after infrastructure incidents. Heavy inbox volumes can also cause slowdowns.
**Solution**: Try refreshing the browser, clearing cache, or switching browsers. Check Fyxer's status page or Twitter (@FyxerAI) for known outages. If Outlook integration is slowing down your email client, consider temporarily disabling Fyxer and re-enabling after the issue resolves.
