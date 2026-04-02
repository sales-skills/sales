---
name: sales-apollo-sequences
description: "Manage outbound sequences in Apollo.io — create, configure, optimize deliverability, and analyze performance. Use when creating an Apollo sequence, fixing Apollo email deliverability, setting up A/B tests in Apollo, configuring Apollo mailboxes, analyzing Apollo sequence stats, or troubleshooting Apollo sending issues. Do NOT use for designing cadence strategy and content (use /sales-cadence), general Apollo platform help (use /sales-apollo), or non-Apollo sequence tools (use /email-sequence)."
argument-hint: "[describe what you need — e.g., 'set up a new sequence' or 'fix my deliverability']"
license: MIT
version: 1.0.0
tags: [sales, outbound, sequences, cadence, platform]
---
# Manage Apollo Sequences

Help the user create, configure, and optimize outbound sequences in Apollo.io — from sequence setup through deliverability management, A/B testing, and performance analysis. For cadence strategy and messaging content, use `/sales-cadence` — this skill covers the Apollo-specific execution layer.

## Step 1 — Gather context

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

### Creating a sequence

1. **Navigate**: Engage > Sequences > Create Sequence
2. **Name**: Use a descriptive name: `[Persona] - [Campaign type] - [Date]` (e.g., "VP Eng - Cold Outbound - Mar 2026")
3. **Settings to configure**:

**Key settings — configure these for every sequence (non-negotiable):**

- **Stop on reply**: Always enable. Auto-pause the sequence when a prospect replies. There is zero reason to keep emailing someone who responded — it damages trust and wastes sends.
- **Stop on meeting booked**: Always enable. Once the goal is achieved, stop the sequence.
- **Business hours sending**: Always enable. Send during the recipient's business hours (typically 8am-6pm in their timezone). Emails arriving at 2am look automated and get buried.
- **Daily send limits**: Start conservative — 50-100 emails/day per mailbox for warm, established mailboxes. For new mailboxes, start at 20-30/day and ramp up over 2-3 weeks. Exceeding safe limits tanks sender reputation fast.
- **Delay between steps**: Use 2-3 business days between email steps. Shorter gaps feel aggressive; longer gaps lose momentum. Increase to 4-5 days after 3+ unreplied emails to avoid fatigue.
- **Sequence type**: Use **Automatic** for email-only sequences (hands-off, sends on schedule). Use **Manual** for multi-channel sequences that include calls or LinkedIn steps — Auto mode skips non-email steps entirely.

**Full settings reference:**

| Setting | Recommended value | Why |
|---|---|---|
| **Sequence type** | Auto (for email-only) or Manual (if includes calls/LinkedIn) | Auto sends emails automatically; manual requires rep action per step |
| **Send as thread** | Yes for follow-ups, No for fresh angles | Threading increases reply association but can look automated |
| **Stop on reply** | Yes | Prevents embarrassing follow-ups after a reply |
| **Stop on meeting booked** | Yes | Same reason — stop once the goal is achieved |
| **Business hours only** | Yes — match prospect timezone | Emails sent at 2am look automated |
| **Exclude weekends** | Typically yes for B2B | Weekend sends have lower engagement in most B2B contexts |
| **Sending window** | 9am-11am or 1pm-3pm prospect local time | Align with when prospects check email — avoid lunch hour and end-of-day |
| **Throttle / max per day** | 50-75 emails/day per mailbox (mature); 20-30/day (new) | Exceeding these limits damages sender reputation |

### Recommended settings by sequence type

| Sequence type | Sequence mode | Stop on reply | Business hours | Sending window | Throttle |
|---|---|---|---|---|---|
| **Cold outbound (email-only)** | Auto | Yes | Yes — prospect timezone | 9am-11am | 50/day per mailbox |
| **Warm follow-up / inbound** | Auto | Yes | Yes | 8am-12pm | 75/day per mailbox |
| **Multi-channel (email + calls + LinkedIn)** | Manual | Yes | Yes | 9am-5pm | 30-50/day per mailbox |
| **Event/conference follow-up** | Auto | Yes | No (time-sensitive) | 7am-7pm | 75/day per mailbox |
| **Re-engagement (cold leads)** | Auto | Yes | Yes | 1pm-3pm | 30/day per mailbox |

Always enable **stop on reply** and **stop on meeting booked** — there is no sequence type where you want to keep emailing someone who already responded. For throttling, start conservatively and increase only after 2+ weeks of clean sending (bounce rate <3%, spam complaints near zero).

### Adding steps

| Step type | When to use | Apollo-specific notes |
|---|---|---|
| **Auto email** | Automated emails that send without rep action | Set sending window (9am-5pm prospect timezone) |
| **Manual email** | Emails that need personalization before sending | Appears as a task for the rep to complete |
| **Phone call** | Call steps (Professional+ plan) | Integrates with Apollo dialer; log call outcome |
| **LinkedIn** | Connection request, message, InMail | Creates a task — Apollo doesn't automate LinkedIn actions |
| **Custom task** | Any other action (send gift, research, internal follow-up) | Flexible — use for non-standard touches |

### Step timing

These are recommended defaults for Apollo step configuration. For full cadence strategy — including messaging arc, multi-channel touch patterns, and email copy — use `/sales-cadence`.

| Between steps | Recommended gap | Apollo setting |
|---|---|---|
| Step 1 → Step 2 | 2-3 business days | Set "Wait" between steps |
| Email → Phone | 0-1 days (same day or next) | Reference the email in the call |
| After no reply to 3 emails | 4-5 business days | Longer gap prevents fatigue |
| Before breakup email | 5-7 business days | Give them space before final touch |

## Step 3 — Deliverability management

### Domain authentication (required before sending)

| Record | What it does | How to verify |
|---|---|---|
| **SPF** | Authorizes Apollo to send on behalf of your domain | `dig TXT yourdomain.com` — look for `include:_spf.apollo.io` or your ESP |
| **DKIM** | Cryptographically signs emails to prove they're from you | Check in Settings > Email > Domain Authentication |
| **DMARC** | Tells receiving servers what to do with unauthenticated emails | Start with `p=none` for monitoring, move to `p=quarantine` after validation |

If any of these are missing, emails will land in spam regardless of content quality.

### Mailbox warmup checklist

New mailboxes (or mailboxes that haven't sent outbound before) must be warmed up before sequencing. Skipping warmup is the second most common deliverability killer after missing domain auth.

1. **Week 1**: Send 10-20 emails/day — personal, conversational emails to real contacts (colleagues, partners, existing customers). Use a warmup tool (Lemwarm, Warmbox, or Apollo's built-in warmup if available on your plan) to generate positive engagement signals automatically.
2. **Week 2**: Increase to 20-40 emails/day. Continue warmup tool usage. Monitor inbox placement rate — aim for >95% inbox (not spam). Monitor bounce rate and keep it under 3%. Track spam complaints — any spike means pause and investigate.
3. **Week 3**: Increase to 40-60 emails/day. Begin adding the mailbox to low-volume sequences (re-engagement or warm follow-up). Only proceed if warmup metrics remain healthy.
4. **Week 4**: If inbox placement is consistently >95%, ramp to full sending volume (50-75/day). Add to cold outbound sequences. **Do not start cold outbound sequences until warmup shows >95% inbox placement** — launching too early will burn the mailbox.

**Warmup rules**:
- Warm up new mailboxes for a minimum of 2-4 weeks before any cold outbound; 3-4 weeks is safer for brand-new domains
- Start with 10-20 emails/day, increase by 10-20/day each week
- Use a warmup tool (Lemwarm, Warmbox, or Apollo's built-in warmup) — manual warmup alone is not sufficient for cold outbound volumes
- Keep the warmup tool running even after you start sequencing — it maintains positive engagement signals
- Monitor bounce rate throughout warmup (keep under 3%) and watch for spam complaints — these are early warning signs
- If deliverability drops at any point, pause outbound and return to warmup-only for 1 week
- Never skip warmup for a mailbox on a new sending domain — domain age and reputation start at zero
- Don't start sequences until warmup shows >95% inbox placement consistently
- Enable Apollo's **Inbox Ramp Up** feature (Settings > Email > Inbox Ramp Up) as an additional safeguard

### Mailbox management

| Practice | Recommendation |
|---|---|
| **Mailboxes per sequence** | Rotate 3-5 mailboxes per sequence to distribute sending volume |
| **Daily send limit per mailbox** | Start at 20-30/day for new mailboxes, ramp to 50-75/day over 2-3 weeks |
| **Total daily volume** | Keep total sends across all sequences under 200/day per mailbox at peak |
| **Inbox Ramp Up** | Enable for any mailbox less than 3 months old (Settings > Email > Inbox Ramp Up) |
| **Mailbox rotation** | Apollo auto-rotates across connected mailboxes — connect multiple for redundancy |
| **Separate domain** | Consider a secondary sending domain (e.g., `outreach.yourcompany.com`) to protect your primary domain reputation |

### Deliverability checklist

- [ ] SPF, DKIM, DMARC all configured and passing
- [ ] Sending domain reputation is clean (check via Google Postmaster Tools, MXToolbox)
- [ ] Mailboxes warmed up (active for 2+ weeks with gradual volume increase)
- [ ] Daily send limits set conservatively (start low, ramp up)
- [ ] Inbox Ramp Up enabled for new mailboxes
- [ ] Email content avoids spam triggers (no all-caps subjects, minimal links, no attachments in cold emails)
- [ ] Unsubscribe link included (CAN-SPAM compliance)
- [ ] Bounce rate under 3% (clean list before sending)
- [ ] Monitor Apollo's Deliverability Command Center weekly

## Step 4 — A/B testing (Professional+ plan)

### What to test

| Test | Variant A | Variant B | Metric | Min sample |
|---|---|---|---|---|
| **Subject line** | Pain-focused | Curiosity-based | Open rate | 100 sends each |
| **Email length** | Short (75 words) | Medium (125 words) | Reply rate | 100 sends each |
| **CTA style** | Specific time ask | Open-ended question | Reply rate | 100 sends each |
| **Send time** | Morning (9-10am) | Afternoon (2-3pm) | Open rate | 100 sends each |
| **Personalization level** | Company mention only | Role-specific pain point | Reply rate | 100 sends each |

### Setting up A/B tests in Apollo

1. In your sequence, click the email step you want to test
2. Click "Add Variant" to create Variant B
3. Change one variable only (subject line OR body OR send time — not multiple)
4. Set the split percentage (50/50 for balanced testing)
5. Apollo automatically distributes and tracks per variant
6. Wait for at least 100 sends per variant before evaluating
7. Apollo will show open rate, reply rate, and click rate per variant

### Testing rules
- Test one variable at a time — multi-variable tests give muddy results
- Let tests run for at least 5 business days before drawing conclusions
- Primary metric: **positive reply rate** (not just opens — opens can be inflated by tracking pixels)
- Roll the winner into the sequence and start the next test
- Always be testing — messaging decays as prospects see similar patterns from other sellers
- For deeper A/B testing frameworks, email copy strategy, and multi-channel cadence design beyond Apollo's built-in testing, use `/sales-cadence`

## Step 5 — Sequence analytics

### Key metrics to monitor

| Metric | Healthy range | If below... |
|---|---|---|
| **Open rate** | 50-70% | Check subject lines, deliverability, and send times |
| **Reply rate** | 5-15% | Improve personalization, test different angles, check targeting |
| **Positive reply rate** | 2-5% | Revisit value prop, check ICP fit, strengthen CTA |
| **Bounce rate** | <3% | Clean list, verify emails before adding to sequence — see `/sales-enrich` |
| **Unsubscribe rate** | <1% | Reduce frequency, improve relevance, tighten targeting |
| **Meeting booked rate** | 1-3% | Improve CTA clarity, add social proof, follow up faster on positive replies |

### Analyzing in Apollo

1. **Sequence dashboard**: Engage > Sequences > select sequence > Analytics tab
2. **Step-by-step analysis**: See which steps have the highest drop-off — this tells you where the sequence is losing people
3. **Compare sequences**: Look at your top-performing vs. worst-performing sequences. What's different? (Targeting, messaging, timing)
4. **Rep-level analytics**: If multiple reps use the same sequence, compare performance to identify coaching opportunities

### Optimization cadence
- **Week 1-2**: Let the sequence run, gather baseline data
- **Week 3-4**: Analyze first A/B test results, implement winners
- **Monthly**: Review full-funnel metrics, retire underperforming steps
- **Quarterly**: Major refresh — new messaging, updated case studies, seasonal angles

## Gotchas

- **Don't launch sequences without verifying domain authentication.** Claude often generates sequence setup guides without checking SPF/DKIM/DMARC. Missing domain auth is the #1 cause of emails landing in spam. Check it before anything else.
- **Don't set high daily sending limits on new mailboxes.** New mailboxes must be ramped up gradually (20-30/day → 50-75/day over 2-3 weeks). Claude defaults to recommending 100+ sends/day, which will tank deliverability on a fresh mailbox.
- **Don't use Apollo's "Auto" sequence type for multi-channel cadences.** Auto sequences only work for email steps. If the cadence includes calls or LinkedIn touches, use "Manual" sequence type — otherwise those steps are skipped entirely.
- **Don't evaluate A/B tests too early.** Claude will analyze test results after 30-40 sends. You need at least 100 sends per variant for statistically meaningful results. Premature conclusions lead to wrong optimizations.
- **Don't ignore the Deliverability Command Center.** Apollo has a built-in deliverability monitoring dashboard that most users never check. It shows domain health, bounce rates, spam complaints, and sending patterns. Review it weekly.

## Related skills

- `/sales-cadence` — **Handoff: for email copy strategy, A/B testing frameworks, and multi-channel cadence design beyond Apollo.** Once your Apollo sequence is configured, use `/sales-cadence` to write the actual email copy, design the messaging arc across steps, plan multi-channel touch patterns, and build A/B testing strategies for content. This skill handles Apollo execution; `/sales-cadence` handles the content and strategy layer.
- `/sales-apollo` — General Apollo platform help (CRM sync, credits, admin)
- `/sales-prospect-list` — Build the prospect list to add to your sequences
- `/sales-enrich` — Verify and enrich contact data before sequencing
- `/sales-salesloft` — If using Salesloft for sequences instead of Apollo
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
