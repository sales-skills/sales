---
name: sales-clean-email
description: "Clean Email platform help — cross-platform inbox cleanup tool with bulk actions, Auto Clean rules, True Unsubscriber, Smart Folders, and Privacy Monitor ($9.99/mo or $29.99/yr, works with Gmail/Outlook/Yahoo/iCloud/any IMAP). Use when inbox is overloaded with thousands of old emails and need bulk cleanup, newsletters and promotional emails burying important messages, setting up Auto Clean rules to automatically sort incoming emails, Unsubscriber not actually removing you from mailing lists, accidentally deleted important emails during bulk cleanup, email storage full and need to free space fast, comparing Clean Email to SaneBox or Unroll.me or Mailstrom for inbox cleanup, or Privacy Monitor alerting about data breaches. Do NOT use for AI email reply drafting or voice-trained composition (use /sales-fyxer or /sales-superhuman). Do NOT use for meeting note-taking (use /sales-note-taker)."
argument-hint: "[describe what you need help with in Clean Email]"
license: MIT
version: 1.0.0
tags: [sales, email-management, inbox-cleanup, unsubscribe, platform]
---

# Clean Email Platform Help

Helps with Clean Email — a cross-platform inbox cleanup tool that groups emails for bulk actions, automates inbox rules, unsubscribes from newsletters, and monitors for data breaches. Works with any email provider. Reads headers only (never email bodies).

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What are you trying to do with Clean Email?**
   - A) Clean up a massive email backlog (thousands of old emails)
   - B) Unsubscribe from newsletters and promotional emails
   - C) Set up Auto Clean rules for ongoing inbox management
   - D) Fix Auto Clean rules that aren't working right
   - E) Compare Clean Email to alternatives (SaneBox, Unroll.me, etc.)
   - F) Something else — describe it

2. **Which email provider(s)?**
   - A) Gmail / Google Workspace
   - B) Outlook / Microsoft 365
   - C) Yahoo / AOL
   - D) Apple iCloud
   - E) Other IMAP provider
   - F) Multiple providers

3. **How many email accounts do you need to manage?**
   - A) Just one
   - B) 2-5 (family or multiple personal accounts)
   - C) 6-10

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| AI-drafted email replies in your voice | `/sales-fyxer {question}` or `/sales-superhuman {question}` |
| Full AI email client (keyboard workflow, speed) | `/sales-superhuman {question}` |
| AI-native Gmail client (AI filters, Ghostwriter) | `/sales-shortwave {question}` |
| Background email filtering with smart folders | `/sales-sanebox {question}` |
| Action item extraction from emails | `/sales-unboxd {question}` |
| Open-source email assistant with API/CLI | `/sales-inbox-zero {question}` |
| Meeting note-taking or call recording | `/sales-note-taker {question}` |

For Clean Email-specific questions, continue to Step 3.

## Step 3 — Clean Email platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, Smart Folders, Auto Clean patterns, Unsubscriber details, and comparison data.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For **bulk cleanup**: Start with Cleaning Suggestions — review grouped bundles before acting. Use Smart Folders to find categories (Social, Shopping, Newsletters). Always review before deleting.
- For **unsubscribe issues**: Check back after 48 hours — many mailing lists have a grace period. Use the Block option for senders who ignore unsubscribe requests.
- For **Auto Clean tuning**: Start with conservative rules (archive, not delete). Test rules on old emails first before applying to new incoming mail.
- For **plan selection**: All features are included in every plan. The only difference is account count: 1, 5, or 10. Annual saves ~70%.
- For **privacy concerns**: Clean Email reads headers only (sender, subject, date, size) — never downloads email bodies or attachments.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about features and privacy claims that may be outdated.*

- **No API, no webhooks, no Zapier/Make.** Clean Email is a consumer tool with no developer integration surface. You cannot automate it programmatically.
- **Not an email client.** Clean Email manages and cleans your inbox but doesn't replace your email app. You still use Gmail, Outlook, Apple Mail, etc.
- **No AI drafting.** Clean Email sorts and cleans — it doesn't compose replies. For AI-written email, use Fyxer, Superhuman, or Shortwave.
- **Headers only, but cloud-processed.** Clean Email reads only email headers (not bodies) but processes them through its cloud servers. If that concerns you, InboxPurge is a client-side alternative.
- **Unsubscribe isn't instant.** Mailing lists have a 48-hour to 7-day grace period. Some ignore requests entirely — use Block as a fallback.
- **Bulk actions are irreversible.** Once you delete thousands of emails, they're gone (or in trash for 30 days depending on provider). Always use archive instead of delete until you're sure.
- **Free trial is limited.** You can clean up to 1000 emails free, no credit card required. After that, a paid plan is required.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-sanebox` — SaneBox server-side email filtering (smart folders, any email provider, $7-36/mo). Install:
  `npx skills add sales-skills/sales --skill sales-sanebox -a claude-code`
- `/sales-inbox-zero` — Inbox Zero open-source AI email assistant (auto-labeling, rules API/CLI, self-hostable, $18/mo or free). Install:
  `npx skills add sales-skills/sales --skill sales-inbox-zero -a claude-code`
- `/sales-fyxer` — Fyxer AI email assistant (inbox organization, AI drafting, meeting notes). Install:
  `npx skills add sales-skills/sales --skill sales-fyxer -a claude-code`
- `/sales-superhuman` — Superhuman email client (keyboard-driven, MCP server, CRM integrations). Install:
  `npx skills add sales-skills/sales --skill sales-superhuman -a claude-code`
- `/sales-shortwave` — Shortwave AI-native Gmail client (AI filters, Ghostwriter, MCP consumer). Install:
  `npx skills add sales-skills/sales --skill sales-shortwave -a claude-code`
- `/sales-unboxd` — Unboxd AI email secretary (action item extraction, daily briefings). Install:
  `npx skills add sales-skills/sales --skill sales-unboxd -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Overloaded inbox with 50,000 unread emails
**User says**: "I have 50K unread emails in Gmail and need to get to inbox zero. Where do I start?"
**Skill does**:
1. Reads platform guide for bulk cleanup workflow
2. Recommends starting with Cleaning Suggestions — Clean Email groups emails by sender/type for batch review
3. Suggests using Smart Folders (Social, Shopping, Newsletters) to find low-value categories to archive or delete in bulk
4. Warns: use archive not delete until confident; review grouped bundles before acting
5. Notes free trial covers 1000 emails — for 50K they'll need a paid plan ($29.99/yr for 1 account)
**Result**: Step-by-step bulk cleanup workflow with safety guardrails

### Example 2: Newsletters keep coming after unsubscribing
**User says**: "I used Clean Email to unsubscribe from a bunch of newsletters but some keep sending me emails"
**Skill does**:
1. Reads platform guide for Unsubscriber details
2. Explains the 48-hour to 7-day grace period for unsubscribe requests
3. Some senders ignore unsubscribe requests — recommends using the Block option in Clean Email
4. Suggests checking the Unsubscriber dashboard for status of pending requests
5. Notes: if emails persist after a week, the sender is non-compliant — Block is the only reliable fix
**Result**: Diagnosis of why unsubscribes fail with escalation path to blocking

### Example 3: Automating inbox cleanup programmatically (developer question)
**User says**: "Can I use the Clean Email API to build an automated inbox cleanup pipeline?"
**Skill does**:
1. Reads platform guide developer surface section
2. Explains Clean Email has no public API, no webhooks, and no Zapier/Make integration — it's a UI-only consumer tool
3. Suggests alternatives for programmatic inbox cleanup: Gmail API + custom scripts, Inbox Zero's REST API + CLI, or IMAP library (Python imaplib) for direct server access
4. If user just needs automated rules (not programmatic access), explains Auto Clean can handle most recurring cleanup tasks within Clean Email itself
**Result**: Honest "no API" answer with practical alternatives for developers

## Troubleshooting

### Auto Clean rules applying to wrong emails
**Symptom**: Auto Clean rules are archiving or deleting emails that shouldn't match the rule criteria
**Cause**: Rules based on sender domain or subject keywords can be too broad. A rule matching "newsletter" in the subject may catch important emails with "newsletter" mentioned in passing.
**Solution**: Review active Auto Clean rules and narrow the criteria. Use sender-specific rules (exact email address) instead of keyword-based rules. Test rules on existing emails before enabling for incoming mail. Pause overly aggressive rules and check what they've been catching.

### Unsubscriber not working for specific senders
**Symptom**: Used True Unsubscriber on a sender but emails keep arriving days later
**Cause**: Some mailing lists require a 48-hour to 7-day grace period. Others ignore unsubscribe requests entirely (non-CAN-SPAM-compliant senders). Some senders use multiple sending addresses.
**Solution**: Wait 7 days after unsubscribing. If emails persist, use Block in Clean Email to prevent delivery. Check if the sender is using different email addresses — you may need to block the domain. For persistent spam, report as spam in your email client too.

### Important emails accidentally deleted during bulk cleanup
**Symptom**: Used bulk delete on a Smart Folder or Cleaning Suggestion and lost important emails
**Cause**: Cleaning Suggestions group emails by pattern — individual important emails can get caught in a bulk action.
**Solution**: Check your email provider's Trash folder immediately — most providers retain deleted emails for 30 days. In future: use Archive instead of Delete for bulk actions. Always review the email list in a Cleaning Suggestion before confirming. Use the Preview feature to scan grouped emails before acting.
