---
name: sales-inbox-zero
description: "Inbox Zero platform help — open-source AI email assistant that auto-labels your inbox, drafts replies in your voice, blocks cold emails, bulk unsubscribes, and exposes a REST API + CLI for automation rules ($18-42/mo, self-hostable, 10K+ GitHub stars). Use when setting up Inbox Zero for Gmail or Outlook, AI drafts don't sound like you after weeks of use, automation rules aren't firing or mislabeling emails, self-hosting setup fails with Docker or Google PubSub errors, comparing Inbox Zero to Fyxer or Superhuman or SaneBox or Shortwave for inbox management, managing email rules via the CLI or REST API from an AI coding agent, or choosing between Starter/Plus/Professional plans. Do NOT use for choosing a dedicated meeting note-taker (use /sales-note-taker). Do NOT use for AI executive assistant comparison (use /sales-alfred)."
argument-hint: "[describe what you need help with in Inbox Zero]"
license: MIT
version: 1.0.0
tags: [sales, email-assistant, ai-email, open-source, platform]
github: "https://github.com/elie222"
---

# Inbox Zero Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Ask the user:

1. **What are you trying to do with Inbox Zero?**
   - A) Set up Inbox Zero for the first time (hosted or self-hosted)
   - B) Fix inbox organization / mislabeled emails
   - C) Improve AI draft quality (sounds robotic, wrong tone)
   - D) Build automation rules (plain-English or API/CLI)
   - E) Bulk unsubscribe or archive
   - F) Compare Inbox Zero to alternatives
   - G) Self-hosting or Docker deployment issues
   - H) Something else — describe it

2. **Which email provider?**
   - A) Gmail / Google Workspace
   - B) Outlook / Microsoft 365
   - C) Other (IMAP — limited support)

3. **Which plan are you on (or considering)?**
   - A) Free trial (haven't decided yet)
   - B) Starter ($18/mo) — single account, basic automation
   - C) Plus ($28/mo) — 2 accounts, Slack, attachments
   - D) Professional ($42/mo) — team analytics, priority support
   - E) Self-hosted (free, BYO infrastructure)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Choosing a meeting note-taker → "Run: `/sales-note-taker {user's original question}`"
- AI executive assistant comparison (alfred_ etc.) → "Run: `/sales-alfred {user's original question}`"
- CRM integration strategy → "Run: `/sales-integration {user's original question}`"
- General email deliverability → "Run: `/sales-deliverability {user's original question}`"

Otherwise, answer directly from the platform reference below.

## Step 3 — Inbox Zero platform reference

**Read `references/platform-guide.md`** for the full platform reference — capabilities, pricing, data model, API endpoints, CLI usage, self-hosting, and integration recipes.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For improving draft quality:**
1. Send more emails manually — Inbox Zero learns from your sent history
2. Add context to your knowledge base (Plus+ only) — company info, style guides
3. Always review drafts before sending — the AI never auto-sends
4. Calendar integration improves drafts by factoring in your schedule

**For fixing automation rules:**
1. Write rules in plain English — be specific about conditions and actions
2. Test rules on a few emails before enabling broadly
3. Check the rule execution log to see which rules fired
4. If rules conflict, reorder by priority — first matching rule wins

**For self-hosting decisions:**
1. Self-hosting is free but requires Docker, Node.js v24+, PostgreSQL, and Google/Microsoft OAuth setup
2. You need Google PubSub for real-time Gmail push notifications — this is the most common setup failure
3. The hosted version ($18+/mo) skips all infrastructure complexity
4. Self-hosted gets the same features but you manage updates and uptime

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Gmail and Outlook only (hosted).** Despite being open-source, the hosted version only supports Gmail and Outlook. IMAP/SMTP support is the #1 requested feature but not yet shipped. Self-hosted users can attempt IMAP but it's experimental.
- **No Zapier, no Make, no MCP server.** The only programmatic interfaces are the REST API and CLI. If you need iPaaS connectivity, you'll need to build a custom webhook bridge.
- **Slack integration requires Plus ($28/mo).** Starter plan has no messaging integrations.
- **Attachment auto-filing requires Plus ($28/mo).** Google Drive and OneDrive filing is plan-gated.
- **Self-hosting requires Google PubSub.** The most common deployment failure is missing `GOOGLE_PUBSUB_TOPIC_NAME` — without it, real-time email processing won't work for Gmail.
- **API is rules + analytics only.** You cannot read/send/archive emails via the API — it manages automation rules and retrieves inbox stats.
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-fyxer` — Fyxer AI email assistant (inbox organization, voice-trained drafts, meeting notes, $22.50-50/mo). Install:
  `npx skills add sales-skills/sales --skill sales-fyxer -a claude-code`
- `/sales-superhuman` — Superhuman AI email client (keyboard workflow, Split Inbox, MCP server, $25-40/mo). Install:
  `npx skills add sales-skills/sales --skill sales-superhuman -a claude-code`
- `/sales-shortwave` — Shortwave AI-native Gmail client (AI filters, Ghostwriter, MCP consumer, $24-100/mo). Install:
  `npx skills add sales-skills/sales --skill sales-shortwave -a claude-code`
- `/sales-sanebox` — SaneBox server-side email filtering (smart folders, any email provider, $7-36/mo). Install:
  `npx skills add sales-skills/sales --skill sales-sanebox -a claude-code`
- `/sales-unboxd` — Unboxd AI email secretary (action item extraction, daily briefings, $7.50-41.67/mo). Install:
  `npx skills add sales-skills/sales --skill sales-unboxd -a claude-code`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do -a claude-code`

## Examples

### Example 1: Automation rules keep mislabeling client emails
**User says**: "I wrote a rule to label client emails as 'Priority' but it's also catching newsletters — how do I fix this?"
**Skill does**:
1. Reads the platform guide for rule syntax and execution logic
2. Explains that rules match in order — first match wins
3. Suggests adding an exclusion condition (e.g., "except from addresses containing 'newsletter' or 'noreply'")
4. Recommends testing the rule via CLI (`rules list --json`) to inspect current config
5. Notes that rules can be refined over time as the AI learns from corrections
**Result**: Targeted fix for rule mislabeling with CLI debugging approach

### Example 2: Managing rules via CLI from Claude Code
**User says**: "How do I use the Inbox Zero CLI to list and create automation rules from my AI coding agent?"
**Skill does**:
1. Reads the platform guide for CLI reference
2. Shows installation: `npm install -g @inbox-zero/api`
3. Shows auth: `export INBOX_ZERO_API_KEY=iz_...`
4. Shows `rules list --json` to inspect current rules
5. Shows `rules create` with a JSON rule definition from stdin
6. Notes `stats by-period --json` for inbox analytics
**Result**: Working CLI setup with code examples for AI agent integration

### Example 3: Comparing Inbox Zero to Superhuman
**User says**: "Should I use Inbox Zero or Superhuman? I'm a solopreneur on a budget."
**Skill does**:
1. Compares: Inbox Zero is open-source with API/CLI access at $18/mo (or free self-hosted); Superhuman is premium speed-focused at $25-40/mo
2. Notes Inbox Zero has bulk unsubscribe, cold email blocking, and plain-English rules; Superhuman has keyboard speed, Split Inbox, and MCP server
3. Notes Inbox Zero is self-hostable for $0; Superhuman is SaaS-only
4. Recommends Inbox Zero for budget-conscious users who want automation + open-source flexibility; Superhuman for speed-obsessed email power users
**Result**: Clear comparison with budget-aware recommendation

## Troubleshooting

### Self-hosting fails with PubSub errors
**Symptom**: Gmail emails aren't being processed after Docker deployment. Logs show PubSub topic errors.
**Cause**: `GOOGLE_PUBSUB_TOPIC_NAME` environment variable not set, or Google Cloud project doesn't have PubSub API enabled.
**Solution**: Create a PubSub topic in Google Cloud Console, set the env var in your `.env` file, and ensure the service account has `pubsub.publisher` and `pubsub.subscriber` roles. Restart the container after changes.

### Google sign-in fails with "Failed to fetch"
**Symptom**: Clicking "Sign in with Google" shows a network error or "Failed to fetch" message.
**Cause**: OAuth credentials misconfigured — redirect URI doesn't match your deployment URL, or Google OAuth consent screen isn't published.
**Solution**: In Google Cloud Console, verify the OAuth 2.0 redirect URI matches your app URL exactly (including trailing slash). For self-hosted, ensure `NEXTAUTH_URL` matches your deployment URL. Publish the OAuth consent screen (or add yourself as a test user while in testing mode).

### Automation rules not firing on new emails
**Symptom**: Rules are created but emails arrive without being labeled or acted on.
**Cause**: Rules require the AI to process each incoming email — processing can be delayed, or the rule conditions may not match the email content as expected.
**Solution**: Check rule execution history in the dashboard. Verify rule conditions match how the AI interprets the email (the AI reads subject + body, not just headers). Try simplifying the rule to a broader condition, confirm it fires, then narrow it down. For self-hosted, check that the webhook listener is receiving Gmail push notifications.
