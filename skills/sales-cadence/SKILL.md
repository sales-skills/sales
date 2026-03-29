---
name: sales-cadence
description: "Design multi-channel outbound cadences with timing, A/B testing, and content. Use when building a Salesloft cadence, building a Mailshake campaign, building a Smartlead campaign, building a Lemlist sequence, building a Yesware campaign, building a Mixmax sequence, building a Reply.io sequence, building a Woodpecker campaign, building a Hunter.io campaign, building a Seamless.AI engagement sequence, designing an outbound sequence, planning touchpoint timing, writing cadence emails, creating call scripts, A/B testing subject lines, optimizing sequence performance, or planning multi-channel outreach. Do NOT use for general outreach message writing (use /sales-outreach), marketing cold email (use /cold-email), automated email flows (use /email-sequence), or general Salesloft platform help (use /sales-salesloft)."
argument-hint: "[describe campaign goal, target persona, channels, and constraints]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Design a Multi-Channel Outbound Cadence

Help the user design a complete outbound cadence for Salesloft, Mailshake, Smartlead, Lemlist, Yesware, or Hunter.io — from architecture and timing through full content for every step, A/B testing, and optimization benchmarks.

## Step 1 — Gather context

Ask the user:

1. **What's the campaign goal?**
   - A) Cold outbound — net-new prospects, no prior relationship
   - B) Inbound follow-up — responding to a lead that came in
   - C) Trigger-based — responding to a signal (job change, funding round, tech install, intent data)
   - D) Re-engagement — reviving a cold or stalled conversation
   - E) Expansion — reaching new contacts at existing customer accounts
   - F) Other — describe it

2. **Who is the target persona?** (title, seniority, industry, company size)

3. **What channels are available?**
   - A) Email only
   - B) Email + phone
   - C) Email + phone + LinkedIn
   - D) Email + phone + LinkedIn + video
   - E) Other combination — describe

4. **What constraints should I know about?**
   - Total duration (e.g., 14 days, 21 days, 30 days)
   - Max touches per week
   - Existing messaging or value props to incorporate
   - Compliance requirements (GDPR, CAN-SPAM, industry-specific)
   - Any channels to avoid or emphasize

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Cadence architecture

Design the cadence structure as a table:

| Day | Step | Channel | Action | Notes |
|-----|------|---------|--------|-------|
| 1   | 1    | Email   | Intro email (A/B subject lines) | Personalization Level 3+ |
| 1   | 2    | LinkedIn | Profile view + connection request | Same day as email |
| 3   | 3    | Phone   | Call attempt #1 + voicemail | Reference email |
| 4   | 4    | Email   | Follow-up email (value-add) | Different angle from Step 1 |
| ...  | ...  | ...     | ...    | ... |

### Design principles

- **Channel mixing**: Never send 3+ touches in the same channel consecutively. Alternate between email, phone, and LinkedIn.
- **Spacing**:
  - Days 1-7: Higher intensity (touch every 1-2 days) — this is when engagement peaks
  - Days 8-14: Medium intensity (every 2-3 days)
  - Days 15+: Lower intensity (every 3-4 days) — don't burn the prospect
- **Touch count by persona** (typical ranges — adjust based on persona, sales cycle, and industry norms):
  - C-suite / VP: 8-12 touches over 21-28 days (less aggressive, more spaced)
  - Director / Manager: 12-16 touches over 21-30 days (standard)
  - Individual contributor / practitioner: 10-14 touches over 14-21 days (shorter cycle)
- **Phone placement**: Always within 24 hours after an email so you can reference it ("I just sent you a note about...")
- **LinkedIn**: Use early for connection + later for social proof or content sharing. Don't be repetitive with email.
- **Final touch**: Always a "breakup" email — creates urgency without being pushy

## Step 3 — Write content for every step

For each step in the cadence, write the actual content:

### Email templates
For each email:
- **Subject line**: Provide A/B variants (Variant A and Variant B)
- **Body**: Full email text with personalization tokens in `{{brackets}}`
- **CTA**: Specific ask (meeting, reply, resource)
- Keep emails under 125 words for cold outbound, under 200 for warm follow-up

### Call scripts
For each call step:
- **Opening** (first 10 seconds — must earn the right to continue)
- **Reason for calling** (one sentence connecting to their world)
- **Key questions** (2-3 if they engage)
- **Ask** (meeting request with specific time)
- **Voicemail script** (under 30 seconds, always leave one)

### LinkedIn messages
- **Connection request note**: Under 300 characters, no selling
- **Follow-up InMail or message**: Reference a specific post, mutual connection, or insight about their company
- Keep LinkedIn casual and conversational — it's a social platform, not email

### Video guidance (if applicable)
- When to use: Steps 5+ when email hasn't gotten a response
- Duration: 60-90 seconds max
- Structure: Say their name, show you did research, one key insight, soft CTA

### In Mailshake
- Mailshake campaigns = cadences — a campaign has an initial message plus follow-ups
- Follow-up types: time-based (drip), reply-based, click-based (on-click message)
- Channel limitation: email-first; phone/LinkedIn steps tracked manually or via another tool
- A/B testing: available on higher plans — test subject lines and body content
- Recipient management: add via CSV or API; only email is required

### In Lemlist
- Lemlist sequences = multichannel campaigns — email, LinkedIn, phone, and WhatsApp steps on automated schedules
- True multichannel: LinkedIn steps (profile visit, connection request, message), in-app calling, WhatsApp (paid add-on $20/seat/month)
- LinkedIn steps require Multichannel Expert plan ($99/user/month) — Email Pro is email-only
- A/B testing: test subject lines, email body, and entire step variants
- AI personalization: AI-generated custom variables that research each lead (LinkedIn, website, news) for Level 3-4 personalization at scale
- LinkedIn safety: limit connection requests to 20-30/day, profile visits to 50-80/day to avoid account restrictions
- Inbox rotation: connect multiple email accounts and Lemlist distributes sends (5 accounts per user on top plan, $9 per additional)

### In Yesware
- Yesware campaigns = multi-channel sequences — email, phone call reminders, LinkedIn InMail, and custom tasks on automated schedules
- Sends from your inbox (Gmail/Outlook) — no third-party server, better deliverability
- Personalization: dynamic fields (merge variables) for automated personalization, individual email customization
- Recipient limits: 10/month (Free), 20/month (Pro), unlimited (Premium+)
- A/B testing: not natively supported in campaigns — test manually by creating variant campaigns
- Auto-removal: recipients who reply or book meetings are automatically removed from the campaign
- Templates: shared team templates (Premium+) for consistent messaging across reps
- Tracking: real-time open/click/attachment notifications to time follow-ups — see `/sales-email-tracking`

### In Smartlead
- Smartlead campaigns = sequences — a campaign has email steps with time delays between them
- Email-only by default; phone steps require SmartDialer, LinkedIn touchpoints via external tools
- A/B testing: built-in variant testing (up to 26 variants A-Z) for subject lines and email body
- SmartAgents: AI-powered personalization at scale — research prospects and generate custom email content per lead. Best for Level 3-4 personalization when sending to 100+ prospects.
- Lead management: leads tracked by interest status within campaigns (interested, not interested, not contacted, do not contact, wrong person, completed)

### In Mixmax
- **Where**: Sequences tab in Gmail sidebar or app.mixmax.com/dashboard/sequences
- **Channel support**: Email, phone (built-in dialer), LinkedIn (Sales Navigator InMail + connection requests), tasks
- **AI builder**: AI Compose generates sequence emails and subject lines; Smart Send picks optimal delivery times per recipient
- **Personalization**: Snippets (reusable templates), Salesforce/HubSpot dynamic fields, polls & surveys embedded in emails
- **A/B testing**: Test subject lines, body content, and send times within sequences
- **Stages**: Each sequence has ordered stages (email, call, LinkedIn, task); configure delay between stages
- **Recipient management**: Add recipients individually, from CSV, from Salesforce/HubSpot lists, or via API (`POST /sequences/:id/recipients`)
- **Delegated sending**: Send sequences on behalf of colleagues
- **Exit rules**: Auto-exit on reply, meeting booked, or custom rule trigger
- **Limits**: Recipient limits vary by plan; sequences are Gmail-native (subject to Gmail sending limits)
- **Reporting**: Opens, clicks, replies, bounces per stage and per recipient; team-level sequence analytics
- **Best practice**: Use Mixmax rules engine to auto-enroll contacts in sequences based on Salesforce triggers (e.g., new lead assigned → auto-enroll in introductory sequence)

### In Reply.io
- **Where**: Sequences tab in Reply.io dashboard (app.reply.io)
- **Channel support**: Email, LinkedIn (InMail, connection requests, profile views — $69/account add-on), calls ($29/account add-on), SMS ($29/account add-on), WhatsApp
- **Conditional sequences**: Unique feature — set up branching logic based on prospect actions (opened, clicked, replied) or data (title, industry). Different prospects can follow different paths within the same sequence.
- **AI sequence builder**: Jason AI can generate entire sequences based on your ICP and value prop
- **A/B testing**: Test subject lines, body content, and step variations within sequences
- **Stages**: Ordered steps with configurable delays; mix channels freely (e.g., email → LinkedIn → call → email)
- **Contact management**: Add contacts individually, from CSV, from Reply.io B2B database (1B+ contacts), from Salesforce/HubSpot, or via API
- **Exit rules**: Auto-pause on reply, meeting booked, or custom trigger; manual pause/resume per contact
- **Sending limits**: Per-mailbox daily limits; 10 mailboxes per user on Multichannel plan; respects provider sending limits (Gmail/Outlook)
- **Reporting**: Opens, clicks, replies, bounces per step and per contact; channel efficiency dashboard; team-level analytics
- **Best practice**: Use conditional branching to create a single sequence that handles multiple scenarios (e.g., if prospect opens but doesn't reply → add LinkedIn step; if prospect clicks → fast-track to call step)

### In Hunter.io
- **Where**: Campaigns tab in Hunter.io dashboard (hunter.io/campaigns)
- **Channel support**: Email only — no phone, LinkedIn, or task steps. For multi-channel cadences, use Hunter for email finding/verification and a dedicated tool for sending.
- **Campaign flow**: Create campaign → add recipients (from lead lists, CSV, or Domain Search results) → write email steps with follow-ups → set schedule → launch
- **Sending method**: Inbox-native — sends from connected Gmail/Outlook, not a third-party server
- **Follow-ups**: Time-based automatic follow-ups that stop when the recipient replies
- **A/B testing**: Basic variant testing available for subject lines and email body
- **Review queue**: Preview and edit individual emails before send (Growth+ plans) — useful for personalizing at scale
- **Tracking**: Open and click tracking with optional custom tracking domain
- **Sender limits**: Starter = 3 senders, Growth = 15, Scale = 40, Enterprise = unlimited
- **Best practice**: Hunter Campaigns is best for simple email-only sequences (1-3 steps) at low-to-medium volume. Its strength is the tight integration with Hunter's email finding and verification — find, verify, and send all in one platform. For complex multi-channel cadences or high volume, export verified leads to a dedicated tool.

### In Seamless.AI
- **Where**: Engagement Hub within Seamless.AI dashboard
- **Channel support**: Email (built-in), calling (Connect dialer with local presence), social selling (LinkedIn integration). Basic multi-channel capability.
- **Pitch Intelligence**: AI-generated personalized talk tracks and email copy based on prospect data, company news, and intent signals. Use for Level 3-4 personalization at scale.
- **Limitation**: Seamless.AI's Engagement Hub is basic compared to dedicated tools. For complex multi-step, multi-channel cadences with A/B testing and branching logic, export Seamless.AI contacts to Salesloft, Outreach, Mailshake, or another dedicated engagement tool.
- **Best practice**: Use Seamless.AI as the data layer (find contacts, verify data, detect intent) and a dedicated engagement tool for execution. Push contacts directly via native Salesloft/Outreach/Mixmax integrations.

### In Woodpecker
- **Where**: Campaigns tab in Woodpecker dashboard (app.woodpecker.co)
- **Channel support**: Email (native), LinkedIn (add-on at €29/account — connection requests, messages, profile visits), manual tasks
- **Condition-based campaigns**: If/then branching based on prospect behavior (opened, clicked, replied) or data — different prospects follow different paths
- **Campaign depth**: Up to 16 steps per campaign — significantly more than most competitors (typically 7-10)
- **A/B testing**: Up to 5 variants per step — test subject lines, body copy, and send times simultaneously
- **Personalization**: Custom fields, snippets, dynamic content based on prospect data
- **Auto-stop**: Automatically stops sequence when prospect replies or is marked as interested
- **Inbox rotation**: Distributes sending across multiple connected email accounts automatically — maintains per-account limits while increasing volume
- **Adaptive Sending**: Automatically adjusts send pace based on provider limits and engagement signals
- **Manual tasks**: Insert non-email tasks (calls, LinkedIn messages, research) as campaign steps
- **Reporting**: Opens, clicks, replies, bounces, interested rate per step and per campaign
- **Best practice**: Use condition-based branching to create a single campaign that handles multiple engagement scenarios. Leverage the 16-step depth for longer nurture sequences that most tools can't support.

### In Closum
- **Where**: Automations section in Closum dashboard (closum.com)
- **Channel support**: Email (native), SMS (from EUR 0.014/SMS), WhatsApp (automated messaging with intelligent flows), Telegram (automated alerts, document/image sharing), Web Push (browser notifications)
- **Automation builder**: Visual no-code workflow builder — triggers, conditions, waits, and multi-channel actions in a single flow
- **Triggers**: Form submission, tag added, lifecycle stage change, date-based, custom events
- **Actions**: Send email, send SMS, send WhatsApp, send Telegram, add tag, update contact field, wait, condition branch
- **Cross-channel**: Build journeys that span email → SMS → WhatsApp → Telegram → Web Push in a single automation — strongest omnichannel capability in this list
- **Personalization**: Dynamic fields (name, company, custom attributes) across all channels
- **Plan limits**: Zero/Growth: 1 automation; Advanced: 5 automations; add-on: EUR 5/mo per 5 additional automations
- **Best practice**: Closum's strength is omnichannel journeys for opt-in audiences. For cold outbound prospecting, use a dedicated cold email tool. For warm leads and existing customers, Closum's ability to combine email + SMS + WhatsApp in a single workflow is very effective for re-engagement and nurture.

### In Minelead
- **Where**: Campaigns section in Minelead dashboard (minelead.io)
- **Channel support**: Email only (via connected Gmail accounts)
- **Multi-account sending**: Connect multiple Gmail accounts and send campaigns via Round Robin — distributes sends across accounts to maintain per-account sending limits and improve deliverability
- **Recipient management**: Select recipients from Minelead CRM (lead collections), import from CSV, or use leads discovered through Minelead's domain search and Lead Finder
- **Built-in workflow**: Find emails (domain search) → Verify (email verifier) → Save to collection → Send campaign — all in one platform without switching tools
- **Plan limits**: Campaigns available on all plans. 1 credit per email sent. Free: 25 credits/mo. Enterprise: 200K credits/mo.
- **Best practice**: Minelead campaigns are best for simple email-only outreach where the list was built using Minelead's own discovery tools. For multi-channel cadences (email + LinkedIn + calls), complex sequences with conditional branching, or high-volume cold outbound, use a dedicated sequencing tool and use Minelead as the data source.

### In GetProspect
- **Where**: Cold Email Software section in GetProspect dashboard (getprospect.com)
- **Channel support**: Email only (Gmail, Outlook, or SMTP connection)
- **Sequence builder**: Add unlimited steps with configurable delays between each. Edit subject, body, attachments, unsubscribe link per step.
- **A/B testing**: Create multiple versions of subjects, messages, and CTAs per step. Compare opens, clicks, and responses to pick winners.
- **Auto-stop**: Automatically halts remaining sequence steps when a prospect replies or clicks a specific link — prevents over-sending.
- **Sending controls**: Configurable sending limits, randomized sending intervals, timezone-aware delivery. SPF/DKIM checks before sending.
- **Personalization**: Custom fields, prospect-specific merge variables (name, company, title, etc.), saved templates.
- **Lead sourcing**: Unique advantage — search GetProspect's 200M+ B2B database, verify emails, and send sequences all in one tool. No CSV export/import needed.
- **Team collaboration**: Shared templates, campaigns, and prospect lists. Activity visibility and ownership-based filtering.
- **CRM sync**: Native integrations with HubSpot, Salesforce, Pipedrive, Zoho, Outreach, Salesloft.
- **Best practice**: GetProspect is strongest when you use the full workflow — find → verify → sequence in one platform. For multi-channel cadences (email + LinkedIn + calls), complex conditional branching, or very high volume, use a dedicated sequencing tool and use GetProspect as the data source.

### Personalization framework
- **Level 1 (Minimum)**: First name, company name, title — the bare minimum
- **Level 2 (Standard)**: Industry reference, company-size-specific pain point
- **Level 3 (Strong)**: Something specific about their company (recent news, tech stack, job posting, quarterly results)
- **Level 4 (Elite)**: Personal insight (their LinkedIn post, podcast appearance, conference talk, published article)

Recommend Level 3+ for all touches in a cold outbound cadence. Level 2 is acceptable for re-engagement at scale.

For Level 3+ at scale (100+ prospects), consider AI personalization: Smartlead SmartAgents, Clay, or custom GPT workflows to research each prospect and generate personalized snippets for {{custom_field}} merge variables. This automates the research step that makes Level 3-4 feasible at volume.

## Step 4 — A/B testing plan

Design an A/B testing strategy:

| Test # | What to test | Variant A | Variant B | Metric | Min sample size |
|--------|-------------|-----------|-----------|--------|-----------------|
| 1      | Subject line (Step 1) | Pain-focused | Curiosity-based | Open rate | 100 sends each |
| 2      | CTA style (Step 1) | Specific time ask | Open-ended question | Reply rate | 100 sends each |
| 3      | Email length (Step 4) | Short (75 words) | Medium (125 words) | Reply rate | 100 sends each |

### A/B testing rules
- Test one variable at a time
- Run each test for at least 100 sends per variant (200+ preferred) before drawing conclusions
- Primary metric: positive reply rate (not just open rate)
- Wait at least 5 business days before evaluating results
- Roll the winner into the cadence and start the next test
- Always be testing something — cadences decay over time as messaging gets stale

## Step 5 — Metrics and optimization

Provide a benchmarks table:

| Metric | Good | Great | If below "Good"... |
|--------|------|-------|---------------------|
| Open rate | 40-50% | 50%+ | Fix subject lines, check deliverability, verify email addresses |
| Reply rate (total) | 8-12% | 15%+ | Improve personalization, test different angles, check targeting |
| Positive reply rate | 3-5% | 7%+ | Revisit value prop, check ICP fit, strengthen the ask |
| Meeting booked rate | 2-4% | 5%+ | Improve CTA clarity, offer more flexibility, add social proof |
| Bounce rate | <3% | <1% | Clean your list, use email verification tools, check domain health |
| Unsubscribe rate | <1% | <0.5% | Reduce frequency, improve relevance, check compliance |
| Call connect rate | 5-10% | 12%+ | Try different times of day, use local presence dialing, vary call days |

### Optimization cadence
- **Week 1-2**: Let the cadence run, gather baseline data
- **Week 3-4**: Analyze first A/B test results, implement winners
- **Monthly**: Review full-funnel metrics, retire underperforming steps, test new angles
- **Quarterly**: Major refresh — new messaging, updated case studies, seasonal angles

## Related skills

- `/sales-salesloft` — General Salesloft platform help (Rhythm, Analytics, Drift, admin)
- `/sales-outreach` — General outreach message writing (not cadence-specific)
- `/sales-call-review` — Review calls from your cadence to improve scripts
- `/cold-email` — Marketing-style cold email campaigns (not Salesloft cadences)
- `/email-sequence` — Automated email flows and drip campaigns
- `/sales-deliverability` — Email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-mailshake` — Mailshake platform help (campaigns, Lead Catcher, settings)
- `/sales-smartlead` — Smartlead platform help (campaigns, SmartSenders, SmartAgents, API)
- `/sales-lemlist` — Lemlist platform help (sequences, Lemwarm, LinkedIn automation, enrichment, API)
- `/sales-yesware` — Yesware platform help (campaigns, templates, Prospector, Meeting Scheduler)
- `/sales-mixmax` — Mixmax platform help (for Mixmax-specific setup)
- `/sales-reply` — Reply.io platform help (for Reply.io-specific setup)
- `/sales-woodpecker` — Woodpecker platform help (for Woodpecker-specific setup)
- `/sales-hunter` — Hunter.io platform help (Campaigns, Domain Search, Email Finder, Email Verifier)
- `/sales-seamless` — Seamless.AI platform help (Engagement Hub, Pitch Intelligence, contact data)
- `/sales-email-tracking` — Email engagement tracking — open/click/attachment signals for follow-up timing
- `/sales-closum` — Closum platform help (omnichannel: email, SMS, WhatsApp, Telegram, Web Push automations)
- `/sales-minelead` — Minelead platform help (email campaigns via Gmail round-robin, domain email search, lead finder, verifier)
- `/sales-getprospect` — GetProspect platform help (cold email sequences with A/B testing, 200M+ B2B database, email finder, verifier)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Gotchas

- **Don't make all touches email-only.** Claude defaults to generating email-heavy cadences. A real cadence needs channel mixing — if the user has phone and LinkedIn available, use them from the start, not as afterthoughts.
- **Don't space touches too close together.** Avoid scheduling touches less than 2 business days apart (except same-day email + LinkedIn on Day 1). Prospects need time to engage before you follow up.
- **Don't write generic "just checking in" follow-ups.** Every touch must add new value or a new angle. If you catch yourself writing "I wanted to follow up on my last email," rewrite it with a new hook.
- **Don't ignore timezone for call steps.** Phone calls placed outside business hours are wasted touches. If you know the prospect's timezone, note the best call windows (typically 8-10am and 4-6pm local time).
- **Don't generate a cadence without confirming channel availability first.** If the user didn't specify channels, ask — don't assume they have LinkedIn Sales Navigator or a phone dialer.

## Examples

### Example 1: Cold outbound cadence
**User says**: "Build a 21-day cold outbound cadence for VP Engineering at Series B SaaS companies. We have email, phone, and LinkedIn."
**Skill does**:
1. Designs a 14-step cadence architecture table with channel mixing
2. Writes full email copy with A/B subject lines, call scripts with voicemail, LinkedIn messages
3. Provides an A/B testing plan and benchmark metrics
**Result**: Complete cadence ready to import into Salesloft with content for every step

### Example 2: Cadence optimization
**User says**: "My cadence has 35% open rate but only 2% reply rate. What's wrong?"
**Skill does**:
1. Diagnoses the gap (subject lines work, body/CTA needs fixing)
2. Recommends specific changes to email body, personalization, and CTA
3. Designs an A/B test plan to validate improvements
**Result**: Prioritized optimization plan with testable hypotheses

## Troubleshooting

### Low open rates (<30%)
**Cause**: Subject lines aren't compelling, or deliverability issues
**Solution**: Test pain-focused vs. curiosity-based subject lines. Check domain reputation, SPF/DKIM records, and bounce rate. If bounce rate >3%, clean your list first.

### High open rate but low reply rate
**Cause**: Email body doesn't deliver on the subject line promise, CTA is weak or unclear, or personalization is too generic
**Solution**: Ensure the first sentence connects to the prospect's world. Make the CTA specific ("15 minutes Thursday?") not vague ("let me know if interested"). Increase personalization to Level 3+.

### Prospects engaging but not booking meetings
**Cause**: Too many touchpoints before the ask, or the ask is buried
**Solution**: Include a clear meeting CTA by Step 3. Use the phone step within 24 hours of an email open. Offer a specific time, not an open question.
