# Apollo Sequences Platform Guide

## Sequence setup

### Creating a sequence

1. **Navigate**: Engage > Sequences > Create Sequence
2. **Name**: Use a descriptive name: `[Persona] - [Campaign type] - [Date]` (e.g., "VP Eng - Cold Outbound - Mar 2026")

### Full settings reference

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

### Adding steps

| Step type | When to use | Apollo-specific notes |
|---|---|---|
| **Auto email** | Automated emails that send without rep action | Set sending window (9am-5pm prospect timezone) |
| **Manual email** | Emails that need personalization before sending | Appears as a task for the rep to complete |
| **Phone call** | Call steps (Professional+ plan) | Integrates with Apollo dialer; log call outcome |
| **LinkedIn** | Connection request, message, InMail | Creates a task — Apollo doesn't automate LinkedIn actions |
| **Custom task** | Any other action (send gift, research, internal follow-up) | Flexible — use for non-standard touches |

### Step timing

| Between steps | Recommended gap | Apollo setting |
|---|---|---|
| Step 1 → Step 2 | 2-3 business days | Set "Wait" between steps |
| Email → Phone | 0-1 days (same day or next) | Reference the email in the call |
| After no reply to 3 emails | 4-5 business days | Longer gap prevents fatigue |
| Before breakup email | 5-7 business days | Give them space before final touch |

## Deliverability management

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

## A/B testing (Professional+ plan)

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

## Sequence analytics

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
