---
name: sales-apollo-sequences
description: "Manages outbound sequences in Apollo.io — create, configure, optimize deliverability, and analyze performance. Use when Apollo emails are going to spam, sequence open rates are low, A/B tests aren't producing clear winners, mailboxes keep getting throttled, sequence stats don't look right, or emails just aren't sending. Do NOT use for designing cadence strategy and content (use /sales-cadence), general Apollo platform help (use /sales-apollo), or non-Apollo sequence tools (use /email-sequence)."
argument-hint: "[describe what you need — e.g., 'set up a new sequence' or 'fix my deliverability']"
license: MIT
version: 1.0.0
tags: [sales, outbound, sequences, cadence, platform]
github: "https://github.com/apolloio"
---
# Manage Apollo Sequences

Help the user create, configure, and optimize outbound sequences in Apollo.io — from sequence setup through deliverability management, A/B testing, and performance analysis. For cadence strategy and messaging content, use `/sales-cadence` — this skill covers the Apollo-specific execution layer.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Create a new sequence from scratch
   - B) Fix deliverability issues (emails going to spam, low open rates)
   - C) Set up A/B testing in a sequence
   - D) Analyze sequence performance and optimize
   - E) Configure mailboxes and sending settings
   - F) Troubleshoot a sequence that's not sending
   - G) Import a sequence from another tool
   - H) Other — describe it

2. **What's your current setup?**
   - How many mailboxes/email accounts are connected?
   - What's your daily sending volume per mailbox?
   - How long have the mailboxes been active?
   - Are SPF, DKIM, and DMARC configured for your sending domain?

3. **What Apollo plan are you on?**
   - Free (2 active sequences, limited features)
   - Basic (unlimited sequences, no A/B testing)
   - Professional (A/B testing, dialer, workflows)
   - Organization (advanced analytics, custom reports)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Sequence setup in Apollo

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

**Key settings — configure these for every sequence (non-negotiable):**

- **Stop on reply**: Always enable. Auto-pause the sequence when a prospect replies. There is zero reason to keep emailing someone who responded — it damages trust and wastes sends.
- **Stop on meeting booked**: Always enable. Once the goal is achieved, stop the sequence.
- **Business hours sending**: Always enable. Send during the recipient's business hours (typically 8am-6pm in their timezone). Emails arriving at 2am look automated and get buried.
- **Daily send limits**: Start conservative — 50-100 emails/day per mailbox for warm, established mailboxes. For new mailboxes, start at 20-30/day and ramp up over 2-3 weeks. Exceeding safe limits tanks sender reputation fast.
- **Delay between steps**: Use 2-3 business days between email steps. Shorter gaps feel aggressive; longer gaps lose momentum. Increase to 4-5 days after 3+ unreplied emails to avoid fatigue.
- **Sequence type**: Use **Automatic** for email-only sequences (hands-off, sends on schedule). Use **Manual** for multi-channel sequences that include calls or LinkedIn steps — Auto mode skips non-email steps entirely.

For full cadence strategy — including messaging arc, multi-channel touch patterns, and email copy — use `/sales-cadence`.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Gotchas

- **Don't launch sequences without verifying domain authentication.** Claude often generates sequence setup guides without checking SPF/DKIM/DMARC. Missing domain auth is the #1 cause of emails landing in spam. Check it before anything else.
- **Don't set high daily sending limits on new mailboxes.** New mailboxes must be ramped up gradually (20-30/day → 50-75/day over 2-3 weeks). Claude defaults to recommending 100+ sends/day, which will tank deliverability on a fresh mailbox.
- **Don't use Apollo's "Auto" sequence type for multi-channel cadences.** Auto sequences only work for email steps. If the cadence includes calls or LinkedIn touches, use "Manual" sequence type — otherwise those steps are skipped entirely.
- **Don't evaluate A/B tests too early.** Claude will analyze test results after 30-40 sends. You need at least 100 sends per variant for statistically meaningful results. Premature conclusions lead to wrong optimizations.
- **Don't ignore the Deliverability Command Center.** Apollo has a built-in deliverability monitoring dashboard that most users never check. It shows domain health, bounce rates, spam complaints, and sending patterns. Review it weekly.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-cadence` — **Handoff: for email copy strategy, A/B testing frameworks, and multi-channel cadence design beyond Apollo.** Once your Apollo sequence is configured, use `/sales-cadence` to write the actual email copy, design the messaging arc across steps, plan multi-channel touch patterns, and build A/B testing strategies for content. This skill handles Apollo execution; `/sales-cadence` handles the content and strategy layer.
- `/sales-apollo` — General Apollo platform help (CRM sync, credits, admin)
- `/sales-prospect-list` — Build the prospect list to add to your sequences
- `/sales-enrich` — Verify and enrich contact data before sequencing
- `/sales-salesloft` — If using Salesloft for sequences instead of Apollo
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up a new sequence
**User says**: "I need to set up a 5-step email sequence in Apollo for cold outbound to VP Marketing"
**Skill does**:
1. Configures sequence settings (auto type, business hours, stop on reply)
2. Sets up 5 steps with recommended timing gaps
3. Configures mailbox rotation across 3 connected email accounts
4. Walks through the deliverability checklist
**Result**: Sequence configured and ready for contacts — user runs `/sales-cadence` to write the actual email copy

### Example 2: Fixing deliverability
**User says**: "My Apollo sequence open rate dropped from 55% to 25% over the past month"
**Skill does**:
1. Checks domain authentication (SPF/DKIM/DMARC) status
2. Reviews sending volume and mailbox health in Deliverability Command Center
3. Identifies likely cause (sending volume spike, domain reputation issue, or content triggering spam filters)
4. Recommends remediation steps (reduce volume, warm up new mailbox, adjust content)
**Result**: Deliverability diagnosis with a recovery plan

### Example 3: A/B test setup
**User says**: "I want to A/B test my first email's subject line in Apollo"
**Skill does**:
1. Verifies the user is on Professional+ plan (A/B testing not available on Basic)
2. Walks through creating Variant B in the sequence editor
3. Sets 50/50 split and defines success metric (open rate for subject line tests)
4. Recommends waiting for 100+ sends per variant before evaluating
**Result**: A/B test configured with clear evaluation criteria

## Troubleshooting

### Sequence not sending
**Symptom**: Contacts added to sequence but no emails going out
**Cause**: Mailbox not connected, sequence paused, contact missing email, or daily limit reached
**Solution**: Check sequence status (active?), verify mailbox connection in Settings > Email, confirm contacts have email addresses, review daily send limits.

### Emails going to spam
**Symptom**: Open rates below 20%, recipients reporting spam
**Cause**: Missing domain auth, volume too high, spammy content, or domain reputation damage
**Solution**: Verify SPF/DKIM/DMARC. Reduce volume to 20-30/day per mailbox. Remove spam trigger words. Check domain reputation via Google Postmaster Tools.

### High bounce rate
**Symptom**: Bounce rate above 3%
**Cause**: Stale email data, unverified addresses, or catch-all domain issues
**Solution**: Stop the sequence immediately. Verify remaining contacts via `/sales-enrich`. Remove bounced contacts. Clean your list before resuming.
