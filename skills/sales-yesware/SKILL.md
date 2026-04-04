---
name: sales-yesware
description: "Yesware platform help — email tracking, campaigns, templates, Prospector, Meeting Scheduler, Salesforce integration, reporting. Use when asking 'how do I do X in Yesware', configuring Yesware settings, setting up campaigns, managing templates, using Prospector, configuring Meeting Scheduler, or connecting to Salesforce. Do NOT use for building prospect lists (use /sales-prospect-list), enriching contacts (use /sales-enrich), designing cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), meeting scheduling strategy (use /sales-meeting-scheduler), or email tracking strategy (use /sales-email-tracking)."
argument-hint: "[describe what you need help with in Yesware]"
license: MIT
version: 1.0.0
tags: [sales, outbound, email-tracking, sequences, platform]
github: "https://github.com/Yesware"
---
# Yesware Platform Help

Help the user with Yesware platform questions — from email tracking and campaign setup through templates, Prospector, Meeting Scheduler, Salesforce integration, and reporting.

## Step 1 — Gather context

Ask the user:

1. **What area of Yesware do you need help with?**
   - A) Email Tracking — open, click, and attachment tracking notifications
   - B) Campaigns — creating and managing multi-channel sequences (route to `/sales-cadence` for strategy)
   - C) Templates — creating, sharing, and personalizing email templates
   - D) Prospector — finding B2B contacts from the built-in database
   - E) Meeting Scheduler — booking links, event types, Zoom integration
   - F) Contacts — managing and enriching prospect data
   - G) Reporting & Analytics — personal and team engagement reports
   - H) Salesforce Integration — bi-directional sync, inbox sidebar (Enterprise only)
   - I) Integrations — Gmail, Outlook, LinkedIn, Zoom, Zapier, DocSend
   - J) Admin — billing, plan features, account settings
   - K) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) RevOps / Sales Ops
   - D) Admin / IT
   - E) Founder / solo seller
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- List building / prospecting strategy → `/sales-prospect-list`
- Contact enrichment / data hygiene → `/sales-enrich`
- Cadence strategy / sequence design → `/sales-cadence`
- Cross-platform deliverability → `/sales-deliverability`
- Meeting scheduling strategy → `/sales-meeting-scheduler`
- Email tracking strategy → `/sales-email-tracking`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Yesware platform reference

Provide module-by-module guidance based on the user's area:

### Email Tracking
- **What it is**: Real-time notifications when recipients open emails, click links, or view attachments — powered by an invisible tracking pixel
- **Key features**: Per-email open/click tracking, real-time desktop notifications, engagement history per contact, attachment tracking (know when and how long they viewed)
- **How it works**: Yesware inserts an invisible pixel into outgoing emails. When the recipient's email client loads images, the pixel fires and Yesware records the open. Link clicks are tracked via redirect URLs.
- **Limitations**: Tracking pixels are blocked by privacy tools (Apple Mail Privacy Protection, Hey, corporate proxies). Open tracking is increasingly unreliable — use click tracking and reply tracking as more reliable engagement signals.
- **Best practices**: Don't over-rely on open data. Use tracking to prioritize follow-ups — if a prospect clicks a link or opens 3+ times, follow up quickly.

### Campaigns
- **What it is**: A campaign in Yesware is a multi-channel automated sequence — email steps plus phone call reminders, LinkedIn InMail tasks, and custom tasks (called "touches")
- **Key concepts**: Campaign = multi-channel sequence, Touch = a step in the campaign (email, phone, LinkedIn, or custom task), Recipient = a contact enrolled in a campaign
- **Touch types**: Email (sent automatically), Phone (reminder task), LinkedIn InMail (reminder task), Custom (any manual task)
- **Campaign recipient limits by plan**: Free = 10 recipients/month, Pro = 20 recipients/month, Premium = unlimited, Enterprise = unlimited
- **Best practices**: Start with 3-5 email touches and 1-2 phone touches. Space touches 2-3 business days apart. Personalize the first and last touches. Use merge fields for dynamic content.

### Templates
- **What it is**: Reusable email templates with dynamic personalization fields — available as personal or shared (team) templates
- **Template types**: Personal templates (visible only to you), Shared templates (visible to the team, requires Premium+)
- **Personalization**: Merge fields for dynamic content — {{first_name}}, {{company}}, {{title}}, and custom fields
- **Best practices**: Create templates for common scenarios (intro, follow-up, meeting request, breakup). Track template performance in reporting to identify top performers. Keep templates under 125 words for best engagement.

### Prospector
- **What it is**: Built-in B2B contact database with 100M+ contacts for finding new leads directly from within Yesware
- **Key features**: Search by company, title, industry, location, and other filters. Export contacts directly into Yesware campaigns.
- **How to use**: Access Prospector from the Yesware sidebar. Search by company name or domain, filter by title/seniority/department, and add matching contacts to a campaign or your contact list.
- **Data quality**: As with any B2B database, verify email addresses before high-volume outreach. Contact data can be stale — cross-reference with LinkedIn.

### Meeting Scheduler
- **What it is**: Booking link tool that lets prospects schedule meetings directly — integrates with your calendar and Zoom
- **Key features**: Custom booking pages, multiple event types (e.g., 15-min intro, 30-min demo), calendar integration, Zoom auto-link, buffer times between meetings
- **Event types by plan**: Free = 2 event types, Pro+ = unlimited event types
- **Setup**: Configure availability, connect calendar (Google/Outlook), connect Zoom for auto-generated meeting links, customize booking page branding
- **Best practices**: Include your booking link in email signatures and campaign emails. Offer multiple durations (15-min and 30-min). Set buffer times to avoid back-to-back calls.

### Contacts
- **What it is**: Integrated contact management within Yesware — view engagement history, enrichment data, and campaign activity per contact
- **Key features**: Contact profiles with full engagement timeline (opens, clicks, replies), enrichment data (title, company, phone), notes and tags
- **Contact enrichment**: Yesware can enrich contacts with additional data points (title, company, social profiles). For deeper enrichment, use `/sales-enrich`.

### Reporting & Analytics
- **What it is**: Personal and team-level engagement reports — track email performance, campaign results, and recipient engagement
- **Report types**: Personal Activity Report (your sends, opens, replies), Team Activity Report (compare team members, Premium+), Recipient Engagement Report (per-contact engagement), Campaign Report (campaign-level metrics)
- **Key metrics**: Emails sent, open rate, click rate, reply rate, meeting booked rate, campaign completion rate
- **Team reports**: Require Premium or Enterprise plan. Compare performance across reps, identify top templates, and track team-wide engagement trends.
- **Best practices**: Review reports weekly. Focus on reply rate and meetings booked — these are the metrics that correlate with pipeline. Use template reports to identify and scale what works.

### Salesforce Integration
- **What it is**: Bi-directional activity sync between Yesware and Salesforce — **Enterprise plan only ($65/mo)**
- **Key features**: Auto-log emails to Salesforce records (contacts, leads, opportunities), sync calendar events, Salesforce inbox sidebar (view CRM data from Gmail/Outlook), activity reporting in Salesforce
- **Salesforce inbox sidebar**: View Salesforce contact/lead/opportunity data directly in your inbox without switching tabs. Update fields, log notes, and create tasks from the sidebar.
- **Sync behavior**: Bi-directional — emails sent from Yesware log to Salesforce, and Salesforce data surfaces in Yesware's inbox sidebar
- **Setup**: Requires Enterprise plan. Connect via Settings > Integrations > Salesforce. Admin must authorize the Salesforce OAuth connection. Map Yesware fields to Salesforce fields.

### Yesware data model

Core entities — understand these to navigate the platform:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Campaign** | A multi-channel automated sequence | Has Touches (steps), has Recipients |
| **Touch** | A step in a campaign (email, phone, LinkedIn, custom) | Belongs to a Campaign |
| **Recipient** | A contact enrolled in a campaign | Belongs to a Campaign, has Activity |
| **Template** | A reusable email with merge fields | Used in Campaigns or standalone sends |
| **Contact** | A prospect with engagement history | Can be enrolled in Campaigns |
| **Meeting Type** | A booking link configuration | Has availability rules, calendar connection |
| **Report** | An engagement analytics view | Spans Campaigns, Contacts, Team |

### Pricing

| Plan | Price/mo (annual) | Key features |
|---|---|---|
| **Free Forever** | $0 | Basic tracking (<24hr history), 10 campaign recipients/mo, 2 meeting types |
| **Pro** | $15 | Unlimited tracking, 20 recipients/mo, personal reports |
| **Premium** | $35 | Unlimited campaigns/recipients, teams, shared templates, no Yesware branding |
| **Enterprise** | $65 | Salesforce sync, SSO, trusted IP ranges, dedicated CSM |

*Pricing as of 2025 — verify current pricing at yesware.com.*

### Integrations

- **Gmail** — Chrome extension, full inbox integration (tracking, templates, campaigns, sidebar)
- **Outlook** — Add-in, same feature set as Gmail extension
- **Salesforce** — Bi-directional activity sync (Enterprise plan only)
- **LinkedIn** — Prospect insights, LinkedIn InMail tasks in campaigns
- **Zoom** — Auto-generated meeting links for Meeting Scheduler
- **Zapier** — Limited automation triggers/actions (workaround for lack of API)
- **DocSend** — Attachment tracking integration
- **Clari** — Revenue operations data sync

### No Public API

**Yesware does NOT have a public API.** There are no REST endpoints, no developer documentation, and no programmatic access. All functionality is accessed through:
- Gmail Chrome extension or Outlook add-in
- Native Salesforce connector (Enterprise plan only)
- Zapier (limited triggers and actions)

If the user needs API-level automation, recommend evaluating platforms with public APIs (Mailshake, Apollo, Salesloft) or using Zapier as a workaround for basic automation needs.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Yesware
2. **Configuration recommendations** — specific settings to change, with navigation paths (typically via the Yesware sidebar in Gmail/Outlook)
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **Plan check** — flag any features that require a specific plan tier before recommending them

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No public API — don't suggest API solutions.** Yesware has no REST API, no developer docs, and no programmatic access. Don't recommend building integrations or scripts against Yesware. The only automation path is Zapier (limited) or the native Salesforce connector (Enterprise only).
- **Salesforce integration is Enterprise-only ($65/mo).** Don't recommend Salesforce sync features to users on Free, Pro, or Premium plans. Always ask about the user's plan before suggesting Salesforce-related workflows.
- **Campaign recipient limits are strict and plan-gated.** Free = 10 recipients/month, Pro = 20/month. Users on lower plans hit this wall fast. Unlimited recipients require Premium ($35/mo) or Enterprise ($65/mo). Always surface these limits when discussing campaigns.
- **Yesware is inbox-native — there is no standalone web app for campaigns.** All campaign creation and management happens inside the Gmail or Outlook extension. There is no separate yesware.com dashboard for building campaigns. Users expecting a standalone UI (like Mailshake or Apollo) will be confused.
- **Email tracking pixels are increasingly unreliable.** Apple Mail Privacy Protection (iOS 15+), Hey.com, and corporate email proxies pre-load or block tracking pixels. Open rates from these recipients are either inflated (Apple pre-loads all images) or zero (blocked). Advise users to treat open tracking as directional, not definitive, and rely more on click and reply metrics.

## Step 5 — Related skills

- `/sales-meeting-scheduler` — Meeting scheduling strategy and best practices (platform-agnostic)
- `/sales-email-tracking` — Email tracking strategy and best practices (platform-agnostic)
- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Yesware campaigns)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-prospect-list` — Build prospect lists to import into Yesware
- `/sales-enrich` — Enrich contacts with emails/phones before outreach
- `/sales-integration` — Connect Yesware to other tools via Zapier or native integrations
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill.

## Examples

### Example 1: Multi-channel campaign setup
**User says**: "How do I set up a multi-channel campaign in Yesware?"
**Skill does**:
1. Explains Yesware campaigns as multi-channel sequences with email, phone, LinkedIn, and custom touches
2. Walks through creating a campaign from the Gmail/Outlook sidebar — name, touches, timing
3. Explains how to add recipients individually or via bulk import
4. Notes campaign recipient limits by plan (10 free, 20 Pro, unlimited Premium+)
**Result**: User has a campaign created with multiple touch types and understands recipient limits

### Example 2: Salesforce integration
**User says**: "How do I connect Yesware to Salesforce?"
**Skill does**:
1. States upfront that Salesforce integration requires Enterprise plan ($65/mo)
2. Walks through the connection flow: Settings > Integrations > Salesforce > OAuth
3. Explains bi-directional sync — emails, calendar events, and tasks sync to Salesforce records
4. Highlights the Salesforce inbox sidebar for viewing CRM data from email
**Result**: User understands plan requirements and can set up the Salesforce connection

### Example 3: Prospector for finding leads
**User says**: "I want to use Yesware's Prospector to find leads — how does it work?"
**Skill does**:
1. Explains the 100M+ B2B contact database accessible from the Yesware sidebar
2. Walks through search filters — company, title, industry, location, seniority
3. Shows how to export found contacts into a campaign or contact list
4. Points to `/sales-prospect-list` for broader list-building strategy beyond Yesware
**Result**: User knows how to search, filter, and export contacts from Prospector

## Troubleshooting

### Email tracking not showing opens
**Symptom**: Emails show as sent but no open notifications appear
**Cause**: Recipient's email client blocks tracking pixels (Apple Mail Privacy Protection, corporate proxies), or tracking is not enabled for the email
**Solution**: Verify tracking is enabled in the Yesware sidebar before sending. Note that Apple Mail (iOS 15+) pre-loads images, which may inflate or block accurate tracking. For critical prospects, rely on click tracking (include a link) and reply tracking instead of open tracking. See `/sales-email-tracking` for a full tracking strategy.

### Campaign recipients not receiving emails
**Symptom**: Recipients added to a campaign but emails are not being sent
**Cause**: Campaign recipient limit reached for plan tier, campaign is paused/draft, or sender account disconnected
**Solution**: Check your plan's recipient limit (Free = 10/mo, Pro = 20/mo). Verify the campaign status is "active." Check Settings > Senders to confirm your email account is connected and authorized. If the limit is the issue, upgrade to Premium ($35/mo) for unlimited recipients.

### Salesforce sync not logging activities
**Symptom**: Emails sent from Yesware don't appear in Salesforce
**Cause**: Not on Enterprise plan, Salesforce connection expired, or sync mapping misconfigured
**Solution**: Confirm you are on the Enterprise plan ($65/mo) — Salesforce sync is not available on lower plans. Re-authorize the Salesforce connection in Settings > Integrations. Check field mapping to ensure Yesware activities are mapped to the correct Salesforce objects (Contact, Lead, or Opportunity).
