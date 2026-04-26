---
name: sales-unboxd
description: "Unboxd platform help — AI email secretary that reads every email and extracts action items with deadlines into daily briefings, supports Gmail/Outlook/IMAP ($7.50-41.67/mo). Use when action items keep getting lost in email threads, spending too much time reading and triaging emails, daily briefing is missing important messages, credits are running out before the month ends, emails getting categorized into the wrong bucket, comparing Unboxd to Fyxer or Superhuman or SaneBox or Shortwave for inbox triage, or setting up Unboxd with multiple email accounts. Do NOT use for AI reply drafting or voice-trained email writing (use /sales-fyxer or /sales-superhuman). Do NOT use for choosing a meeting note-taker (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Unboxd]"
license: MIT
version: 1.0.0
tags: [sales, email-assistant, ai-assistant, inbox-triage, platform]
---

# Unboxd Platform Help

Helps with Unboxd — an AI email secretary that reads every email for you and extracts action items, highlights, and FYIs into structured daily briefings. Supports Gmail, Outlook, and IMAP.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What are you trying to do with Unboxd?**
   - A) Set up Unboxd for the first time
   - B) Fix categorization (emails in wrong bucket)
   - C) Manage credits / hitting daily limits
   - D) Configure multiple email accounts
   - E) Compare Unboxd to alternatives
   - F) Something else — describe it

2. **Which email provider(s)?**
   - A) Gmail / Google Workspace
   - B) Outlook / Microsoft 365
   - C) IMAP (other provider)
   - D) Multiple providers

3. **Which plan are you on (or considering)?**
   - A) Plus ($7.50/mo) — 2 accounts, 20 emails/day
   - B) Pro ($12.50/mo) �� 4 accounts, 50 emails/day
   - C) Ultra ($41.67/mo) — 8 accounts, 200 emails/day
   - D) Not sure / evaluating

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| AI-drafted email replies in your voice | `/sales-fyxer {question}` or `/sales-superhuman {question}` |
| Meeting note-taking or call recording | `/sales-note-taker {question}` |
| AI executive assistant (calendar + tasks + email) | `/sales-alfred {question}` |
| General AI email assistant comparison | `/sales-do AI email assistant selection` |

For Unboxd-specific questions, continue to Step 3.

## Step 3 — Unboxd platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, categorization logic, provider setup, and comparison data.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For **categorization issues**: Manually correct miscategorized emails — Unboxd learns from corrections over time
- For **credit management**: Check daily usage patterns, consider upgrading if consistently hitting limits
- For **missing action items**: Verify the sender isn't in your block list, check if the email was processed (credit used)
- For **multiple accounts**: Each plan tier limits connected accounts — Plus (2), Pro (4), Ultra (8)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and credit limits that may be outdated.*

- **Credit-based pricing with daily caps.** Plus plan processes only 20 emails/day (600/mo). High-volume inboxes will hit limits fast — important emails arriving after the daily cap won't be processed until the next day.
- **No API, no webhooks, no Zapier/Make.** Entirely closed ecosystem. You cannot export action items programmatically or integrate with task managers automatically.
- **No AI reply drafting.** Unboxd reads and categorizes — it does NOT write replies. If you need AI-drafted responses, pair it with Superhuman or Fyxer, or use a different tool entirely.
- **IMAP polling vs webhook.** Gmail and Outlook use real-time webhooks for email retrieval. IMAP uses periodic polling — expect delays for non-Gmail/Outlook providers.
- **Small startup (~1,000 users).** Limited community support, no G2/Capterra reviews. Evaluate stability risk for mission-critical email workflows.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-fyxer` ��� Fyxer AI platform help — AI email assistant with voice-trained reply drafting and meeting notes
- `/sales-superhuman` — Superhuman platform help — fastest AI email client with keyboard workflow and MCP server
- `/sales-alfred` — alfred_ platform help — AI executive assistant for email triage, tasks, and calendar
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Credits running out before month end
**User says**: "I'm on the Plus plan and I keep running out of Unboxd credits by the 15th. What should I do?"
**Skill does**:
1. Reads platform guide for credit system details
2. Explains Plus plan: 600 credits/mo, 20/day cap — if inbox receives 30+ emails/day, many go unprocessed
3. Suggests: upgrade to Pro (1,500 credits/mo, 50/day) or set up email filters to reduce noise before it reaches Unboxd
4. Notes that keyword/address blocking in Unboxd can prevent low-value emails from consuming credits
**Result**: Clear upgrade recommendation with workaround for staying on current plan

### Example 2: Comparing Unboxd vs Fyxer for a busy founder
**User says**: "I get 100+ emails a day and waste 2 hours reading them. Should I use Unboxd or Fyxer?"
**Skill does**:
1. Reads platform guide comparison section
2. Explains core difference: Unboxd extracts action items so you skip reading; Fyxer organizes inbox and drafts replies
3. Unboxd is better if: you mainly need to know what requires action, you want daily briefings, you use IMAP providers
4. Fyxer is better if: you need AI-drafted replies, you want meeting notes, you need HubSpot integration
5. Notes pricing: Unboxd Pro $12.50/mo (50 emails/day) vs Fyxer Starter $22.50/mo (unlimited emails)
6. For 100+ emails/day, user would need Unboxd Ultra ($41.67/mo) — at that price, Fyxer may be better value
**Result**: Nuanced comparison factoring in email volume and pricing

### Example 3: Setting up Unboxd with multiple email accounts
**User says**: "I want to connect my Gmail, Outlook, and Fastmail to Unboxd. How does that work?"
**Skill does**:
1. Reads platform guide for multi-account setup
2. Confirms Unboxd supports all three: Gmail via webhook, Outlook via webhook, Fastmail via IMAP
3. Notes IMAP (Fastmail) will poll periodically rather than real-time — expect delays
4. Checks plan: 3 accounts requires at least Pro ($12.50/mo, up to 4 accounts)
5. Explains daily credit limit is shared across all accounts — 50 emails/day total on Pro
**Result**: Setup guidance with provider-specific notes and plan requirement

## Troubleshooting

### Emails categorized into the wrong bucket
**Symptom**: Important client emails showing up in FYI instead of Action Items, or newsletters appearing as Highlights
**Cause**: Unboxd's AI categorization learns over time — early usage has lower accuracy, especially for ambiguous emails
**Solution**: Manually correct miscategorized emails consistently. Use keyword blocking to prevent known low-value senders from being processed. Check that the sender isn't in your block list if important emails aren't showing up at all. Give it 1-2 weeks of corrections before judging accuracy.

### Daily credit limit reached — important emails not processed
**Symptom**: Emails arriving after the daily cap go unprocessed until next day
**Cause**: Credit-based system processes emails in order received. On Plus plan (20/day), a busy morning can exhaust credits before afternoon emails arrive.
**Solution**: Upgrade plan (Pro = 50/day, Ultra = 200/day). Alternatively, set up pre-filters in Gmail/Outlook to route obvious newsletters and marketing emails to folders Unboxd doesn't monitor, preserving credits for important emails.

### IMAP provider emails delayed
**Symptom**: Emails from Fastmail, ProtonMail Bridge, or other IMAP providers take 15-30 minutes to appear in Unboxd briefings
**Cause**: IMAP uses periodic polling rather than real-time webhooks (Gmail/Outlook only get webhooks)
**Solution**: This is expected behavior — IMAP polling has inherent delays. If real-time processing is critical, consider using Gmail or Outlook as your primary account and forwarding IMAP emails there.
