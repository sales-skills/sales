---
name: sales-sanebox
description: "SaneBox platform help — server-side AI email filtering that works behind-the-scenes with any email provider to sort low-priority messages into smart folders ($7-36/mo). Use when important emails keep getting buried under newsletters and noise, setting up SaneBox smart folders for inbox triage, SaneBlackHole not blocking unwanted senders, SaneBox folders keep reappearing after trying to remove them, comparing SaneBox to Fyxer or Superhuman or Shortwave for inbox management, choosing between Snack/Lunch/Dinner plans, or training SaneBox to recognize important senders. Do NOT use for AI reply drafting or email composition (use /sales-fyxer or /sales-superhuman). Do NOT use for choosing a meeting note-taker (use /sales-note-taker)."
argument-hint: "[describe what you need help with in SaneBox]"
license: MIT
version: 1.0.0
tags: [sales, email-assistant, inbox-triage, email-filtering, platform]
---

# SaneBox Platform Help

Helps with SaneBox — an AI email filtering service that works server-side via IMAP to sort low-priority emails into smart folders. Works with any email provider (Gmail, Outlook, iCloud, Yahoo, Fastmail, any IMAP). Reads metadata only, never stores email content.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What are you trying to do with SaneBox?**
   - A) Set up SaneBox for the first time
   - B) Fix filtering (important emails going to SaneLater)
   - C) Block unwanted senders (SaneBlackHole)
   - D) Configure snooze, reminders, or custom folders
   - E) Compare SaneBox to alternatives
   - F) Something else — describe it

2. **Which email provider(s)?**
   - A) Gmail / Google Workspace
   - B) Outlook / Microsoft 365
   - C) Apple iCloud
   - D) Other IMAP (Fastmail, Yahoo, etc.)
   - E) Multiple providers

3. **Which plan are you on (or considering)?**
   - A) Snack ($7/mo) — 1 account, 2 features
   - B) Lunch ($12/mo) — 2 accounts, 6 features
   - C) Dinner ($36/mo) — 4 accounts, all features
   - D) Not sure / evaluating

**If the user's request already provides most of this context, skip directly to the relevant step.**

## Step 2 — Route or answer directly

| If the question is about... | Route to... |
|---|---|
| AI-drafted email replies in your voice | `/sales-fyxer {question}` or `/sales-superhuman {question}` |
| Full AI email client (keyboard workflow, speed) | `/sales-superhuman {question}` |
| AI-native Gmail client (AI filters, Ghostwriter) | `/sales-shortwave {question}` |
| Action item extraction from emails | `/sales-unboxd {question}` |
| AI executive assistant (calendar + tasks + email) | `/sales-alfred {question}` |
| Meeting note-taking or call recording | `/sales-note-taker {question}` |

For SaneBox-specific questions, continue to Step 3.

## Step 3 — SaneBox platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, smart folders, training, and comparison data.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- For **mislabeled emails**: Drag emails back to Inbox — SaneBox retrains. Allow 1-2 weeks of corrections.
- For **SaneBlackHole issues**: Verify the sender is dragged into the SaneBlackHole folder (not just deleted). Check the 7-day review period hasn't been bypassed.
- For **folder clutter**: Disable unused Sane folders from the SaneBox dashboard (Settings → Folders). Folder removal takes 5-30 minutes to propagate.
- For **plan selection**: Start with Snack ($7/mo) for one account. Upgrade to Lunch ($12/mo) for reminders and a second account. Dinner ($36/mo) only if you need 4 accounts and SaneAttachments.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and billing that may be outdated.*

- **No API, no webhooks, no Zapier/Make.** SaneBox is entirely server-side — it creates IMAP folders and moves emails. No developer integration surface whatsoever.
- **Not an email client.** SaneBox works behind your existing email client. It doesn't replace Gmail, Outlook, or Apple Mail — it just sorts emails into folders.
- **No AI drafting.** SaneBox filters and sorts only. If you need AI-written replies, pair with Superhuman, Fyxer, or Shortwave.
- **Feature count is plan-gated.** Snack gives you only 2 features to choose from. SaneReminders requires Lunch ($12/mo). SaneAttachments requires Dinner ($36/mo).
- **Metadata only.** SaneBox reads sender, subject, and date headers — never email body content. Training is based on your folder-move behavior, not message content analysis.
- **Folders persist after cancellation.** SaneBox folders may reappear in Outlook and Apple Mail after unsubscribing. Manual folder deletion required.
- **14-day trial.** Free trial available; confirm whether credit card is required before signing up. 25% discount for education, nonprofit, and government.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-fyxer` — Fyxer AI email assistant (inbox organization, AI drafting, meeting notes). Install:
  `npx skills add sales-skills/sales --skill sales-fyxer -a claude-code`
- `/sales-superhuman` — Superhuman email client (keyboard-driven, MCP server, CRM integrations). Install:
  `npx skills add sales-skills/sales --skill sales-superhuman -a claude-code`
- `/sales-shortwave` — Shortwave AI-native Gmail client (AI filters, Ghostwriter, MCP consumer). Install:
  `npx skills add sales-skills/sales --skill sales-shortwave -a claude-code`
- `/sales-inbox-zero` — Inbox Zero open-source AI email assistant (auto-labeling, rules API/CLI, self-hostable, $18/mo or free). Install:
  `npx skills add sales-skills/sales --skill sales-inbox-zero -a claude-code`
- `/sales-clean-email` — Clean Email inbox cleanup (bulk actions, Auto Clean rules, Unsubscriber, $29.99/yr). Install:
  `npx skills add sales-skills/sales --skill sales-clean-email -a claude-code`
- `/sales-unboxd` — Unboxd AI email secretary (action item extraction, daily briefings)
- `/sales-alfred` — alfred_ AI executive assistant (email triage, reply drafting, task extraction)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Important client emails ending up in SaneLater
**User says**: "My client emails keep going to SaneLater instead of my inbox. How do I fix this?"
**Skill does**:
1. Reads platform guide for training mechanism
2. Explains SaneBox learns from behavior — drag the misfiltered emails from SaneLater back to Inbox
3. Notes retraining takes 1-2 weeks of consistent corrections
4. Suggests checking if existing email server rules/filters are conflicting with SaneBox
5. If the client is a new contact, explains SaneBox defaults unknown senders to SaneLater until trained
**Result**: Step-by-step retraining guidance with realistic timeline

### Example 2: Comparing SaneBox vs Superhuman for inbox management
**User says**: "Should I use SaneBox or Superhuman to manage email overload?"
**Skill does**:
1. Reads platform guide comparison section
2. Explains core difference: SaneBox is a background filter (any email client, any provider, $7/mo), Superhuman is a replacement email client (Gmail/Outlook only, $25+/mo)
3. SaneBox is better if: you love your current email client, use non-Gmail/Outlook providers, want the cheapest option
4. Superhuman is better if: you want AI drafting, keyboard-driven speed, CRM integration, MCP for Claude Code
5. Notes they can be used together — SaneBox filters in the background, Superhuman as your email client
**Result**: Clear comparison with recommendation based on needs and budget

### Example 3: Automating inbox triage with SaneBox (developer question)
**User says**: "Can I use the SaneBox API to build an email triage pipeline?"
**Skill does**:
1. Reads platform guide and API reference
2. Explains SaneBox has no public API, no webhooks, and no Zapier/Make integration
3. Notes the only "integration" is IMAP folder manipulation — SaneBox creates folders, you can read them via IMAP
4. Suggests workaround: use IMAP library (Python imaplib, Node.js imap) to monitor SaneLater folder contents programmatically
5. If user needs full API access, recommends alternatives: Superhuman MCP server, or building custom filtering with Gmail API + AI
**Result**: Honest "no API" answer with practical IMAP workaround and alternatives

## Troubleshooting

### Important emails going to SaneLater
**Symptom**: Client emails, time-sensitive messages, or emails from known contacts keep landing in SaneLater
**Cause**: SaneBox learns from behavior patterns. New contacts, infrequent senders, or contacts you rarely respond to quickly get routed to SaneLater.
**Solution**: Drag mislabeled emails from SaneLater back to Inbox — this retrains SaneBox. Be consistent for 1-2 weeks. Check your SaneBox dashboard for a "whitelist" or VIP sender option. Verify no email server rules or filters are interfering.

### SaneBlackHole not blocking sender / emails still arriving
**Symptom**: You dragged a sender into SaneBlackHole but still receive their emails
**Cause**: SaneBlackHole has a 7-day review period before permanent deletion. The sender may also be sending from multiple addresses or domains. Email server-level rules may be overriding SaneBox.
**Solution**: Check the SaneBlackHole folder for the 7-day review queue. Verify you dragged the email (not just deleted it). If the sender uses multiple addresses, blackhole each one. Check that no server-side rules are moving emails before SaneBox processes them.

### SaneBox folders reappearing after removal
**Symptom**: Deleted SaneLater/SaneNews folders keep coming back in Outlook or Apple Mail
**Cause**: SaneBox recreates its folders via IMAP. Deleting them client-side doesn't tell SaneBox to stop. This is the most common uninstall complaint.
**Solution**: Disable folders from the SaneBox dashboard (not your email client). Go to Settings → Folders and toggle off unwanted folders. If you've cancelled SaneBox entirely, contact support@sanebox.com to fully remove server-side folders. Folder changes take 5-30 minutes to propagate.
