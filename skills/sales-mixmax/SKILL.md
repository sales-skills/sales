---
name: sales-mixmax
description: "Mixmax platform help — sequences, email tracking, one-click meetings, rules engine, dialer, AI Compose, Salesforce/HubSpot integration, polls, reporting. Use when asking 'how do I do X in Mixmax', setting up Mixmax sequences, configuring Mixmax rules or automations, connecting Mixmax to Salesforce or HubSpot, using Mixmax scheduling, or troubleshooting Mixmax tracking. Do NOT use for general outbound cadence strategy (use /sales-cadence), cross-platform email deliverability (use /sales-deliverability), meeting scheduling strategy (use /sales-meeting-scheduler), email tracking strategy (use /sales-email-tracking), or connecting Mixmax to other tools via Zapier (use /sales-integration)."
argument-hint: "[describe what you need help with in Mixmax]"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Mixmax Platform Help

Help the user with Mixmax platform questions — from sequences and email tracking through one-click meetings, rules engine, dialer, AI Compose, Salesforce/HubSpot integration, polls, and reporting.

## Step 1 — Gather context

Ask the user:

1. **What area of Mixmax do you need help with?**
   - A) Sequences — multi-channel outreach campaigns (email, phone, LinkedIn, tasks)
   - B) Email Tracking — open, click, download, and RSVP tracking
   - C) Meeting Scheduling — one-click meetings, round-robin, inbound lead routing
   - D) Rules Engine — IF/THEN automations, Salesforce triggers, webhooks
   - E) Templates & Snippets — reusable email content with personalization
   - F) Dialer — in-Gmail calling with CRM and Gong logging
   - G) AI Features — AI Compose, Smart Send, AI sequence builder
   - H) Polls & Surveys — embedded one-click response polls in emails
   - I) Salesforce Integration — inbox sidebar, auto-create records, dynamic fields, advanced rules
   - J) HubSpot Integration — activity sync, list import, sidebar
   - K) Reporting — opens, clicks, bounces, replies, downloads, RSVPs
   - L) Admin — branding, team settings, compliance
   - M) API — programmatic access to sequences, messages, rules, contacts
   - N) Something else — describe it

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
- Outbound cadence strategy / sequence design → `/sales-cadence`
- Cross-platform email deliverability → `/sales-deliverability`
- Meeting scheduling strategy → `/sales-meeting-scheduler`
- Email tracking strategy → `/sales-email-tracking`
- Connecting Mixmax to other tools via Zapier → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Mixmax platform reference

Provide module-by-module guidance based on the user's area:

### Sequences
- **What it is**: Multi-channel outreach campaigns combining email, phone calls, LinkedIn Sales Navigator steps (InMail and connection requests), and manual tasks — all managed from Gmail
- **Key features**: AI sequence builder, sequence folders for organization, delegated sending (send on behalf of another rep), stage-level personalization, auto and manual steps
- **How it works**: Create a sequence with stages (steps). Each stage can be an automated email, a manual email, a phone call task, a LinkedIn action, or a custom task. Recipients progress through stages on a defined schedule.
- **Best practices**: Mix automated and manual steps for personalization at scale. Use sequence folders to organize by campaign type or persona. Leverage delegated sending for managers who want reps to send on their behalf.

### Email Tracking
- **What it is**: Real-time tracking of email opens, link clicks, file downloads, and RSVP responses — with desktop, email, and Slack notifications
- **Key features**: Per-email open/click/download/RSVP tracking, real-time desktop notifications, Slack notifications, engagement history per recipient
- **Limitations**: Tracking pixels are blocked by privacy tools (Apple Mail Privacy Protection, Hey, corporate proxies). Open tracking is increasingly unreliable — use click tracking and reply tracking as more reliable signals.
- **Best practices**: Don't over-rely on open data. Use tracking to prioritize follow-ups — if a prospect clicks a link or opens 3+ times, follow up quickly. Enable Slack notifications for real-time team visibility.

### Meeting Scheduling
- **What it is**: One-click meeting scheduling embedded directly in emails — recipients pick a time without leaving their inbox
- **Key features**: One-click meetings (propose times in-email), shared calendar scheduling, round-robin assignment, inbound lead routing, double-booking prevention, calendar integration
- **Meeting types**: One-click (propose specific times), scheduling link (share availability page), round-robin (distribute among team members)
- **Best practices**: Use one-click meetings for warm prospects (higher conversion than scheduling links). Set up round-robin for inbound lead routing. Enable double-booking prevention to avoid scheduling conflicts.

### Rules Engine
- **What it is**: IF/THEN automation engine for creating workflows triggered by email events, Salesforce object changes, or date fields
- **Basic rules**: Trigger on email opens, clicks, replies, downloads — then auto-add to sequence, create Salesforce task, send Slack notification, etc.
- **Advanced rules**: Trigger on Salesforce object changes (opportunities, accounts, custom objects), date-field triggers (e.g., renewal date approaching), webhook triggers
- **Webhook support**: Rules can fire webhooks to external endpoints, enabling integration with any system
- **Plan gating**: Basic rules available on SMB+. Advanced rules with Salesforce object triggers require Growth+CRM plan.
- **Best practices**: Start with simple rules (reply → notify Slack) before building complex Salesforce-triggered automations. Test rules with a small segment before applying broadly.

### Templates & Snippets
- **What it is**: Reusable email templates and text snippets with personalization — shared across teams
- **Key features**: Template library with personalization variables, snippet tags for quick insertion, team content sharing, template performance tracking
- **Snippets vs. templates**: Templates are full emails; snippets are reusable text blocks you insert into any email (like a paragraph about pricing or a CTA)
- **Best practices**: Track template performance in reporting to identify top performers. Use snippet tags to organize by category. Share winning templates across the team.

### Dialer
- **What it is**: Built-in calling directly from Gmail with automatic logging to CRM and Gong
- **Key features**: Click-to-call from Gmail, automatic call logging to Salesforce, Gong recording integration, call notes
- **Best practices**: Use the dialer as a sequence step for phone touches. Log call outcomes to track connect rates.

### AI Features
- **What it is**: AI-powered tools for email composition and send-time optimization
- **AI Compose**: Generate email drafts and subject lines from prompts or context
- **Smart Send**: AI determines the optimal send time for each recipient based on their engagement history
- **AI Sequence Builder**: Auto-generate multi-step sequences from a description of your target audience and goal
- **Best practices**: Use AI Compose for first drafts, then personalize. Let Smart Send optimize timing rather than guessing. Review AI-generated sequences before activating.

### Polls & Surveys
- **What it is**: Embedded polls and surveys in emails that recipients can answer with one click — no external links needed
- **Key features**: Single-question polls, multi-question surveys, one-click responses directly in the email, response tracking and aggregation
- **Best practices**: Use polls to qualify prospects (e.g., "Are you evaluating solutions this quarter?"). Keep polls to 1-2 questions for maximum response rate.

### Salesforce Integration
- **What it is**: Deep Salesforce integration with inbox sidebar, auto-record creation, dynamic fields, and advanced rules on SF objects
- **Key features**: Salesforce inbox sidebar (view CRM data from Gmail), auto-create leads/contacts from email, dynamic Salesforce fields in templates, advanced rules triggered by SF object changes (opportunities, accounts, custom objects)
- **Plan gating**: Basic Salesforce features on Growth plan. Advanced rules on Salesforce objects require Growth+CRM plan (~$89/user/mo).
- **Best practices**: Use the inbox sidebar to log activities without switching tabs. Set up auto-create for leads to eliminate manual data entry. Use SF-triggered rules to automate follow-ups on deal stage changes.

### HubSpot Integration
- **What it is**: Activity sync and list import between Mixmax and HubSpot
- **Key features**: Bi-directional activity sync, import HubSpot lists directly into Mixmax sequences, HubSpot sidebar in Gmail
- **Plan gating**: Requires Growth plan (~$65/user/mo).
- **Best practices**: Import HubSpot lists into sequences for targeted outreach. Use activity sync to keep HubSpot records up to date automatically.

### LinkedIn Sales Navigator
- **What it is**: Automated LinkedIn outreach as sequence steps — InMail messages and connection requests
- **Key features**: InMail as an automated sequence step, connection requests as sequence steps, integrated into multi-channel sequences
- **Requirements**: LinkedIn Sales Navigator license required separately
- **Best practices**: Use LinkedIn steps for prospects who don't respond to email. Place LinkedIn steps after 2-3 email touches. Personalize InMail — generic messages get ignored.

### Sidechat
- **What it is**: Invisible email collaboration — discuss emails with teammates without the recipient seeing the conversation
- **Best practices**: Use Sidechat to get manager input on important prospect emails before replying.

### Reporting
- **What it is**: Engagement analytics across emails, sequences, templates, and team performance
- **Key metrics**: Opens, clicks, bounces, replies, downloads, RSVPs — sliceable by template, sequence, recipient, team, and individual
- **Report views**: Individual performance, team comparison, sequence performance, template effectiveness
- **Best practices**: Review sequence reports weekly to identify underperforming stages. Compare template performance to standardize on what works. Use team reports for coaching.

### Custom Branding
- **What it is**: Add your company logo and branding to emails sent via Mixmax
- **Best practices**: Keep branding subtle — heavy logos can trigger spam filters and distract from the message.

### Mixmax data model

Core entities in the Mixmax platform — understand these to navigate the UI, build rules, and work with the API:

| Entity | What it represents | Key fields |
|---|---|---|
| **Sequence** | Multi-channel outreach campaign | _id, name, stages, recipients, folder |
| **Message** | Email (draft, scheduled, or sent) | _id, to/cc/bcc, subject, body (HTML), tracking flags, sent/scheduled timestamps |
| **Snippet** | Reusable email template / text block | _id, name, body, tags |
| **Rule** | IF/THEN automation or webhook | _id, triggers, actions |
| **Appointment Link** | Scheduling page for meetings | _id, type, availability |
| **Meeting Type** | Calendar meeting configuration | _id, name, duration, availability |
| **Contact** (deprecated) | Contact record | _id, email, name, notes |

### Mixmax API reference

For detailed API documentation including endpoints, authentication, message schema, and automation patterns, consult `references/mixmax-api-reference.md`.

**Quick reference**: Base URL `https://api.mixmax.com/v1/`, API key auth via `X-API-Token` header. Developer contact: developer@mixmax.com

### Pricing

| Plan | Price | Key features |
|---|---|---|
| **Free** | $0 | Basic tracking, scheduling |
| **SMB** | ~$29-34/user/mo | Sequences, shared calendars |
| **Growth** | ~$65/user/mo | HubSpot, AI features, round-robin, analytics |
| **Growth + CRM** | ~$89/user/mo | Salesforce integration, advanced rules on SF objects |
| **Enterprise** | Custom (typically $100-150/user/mo) | Custom terms, dedicated support |

*Pricing as of 2026 — verify current pricing at mixmax.com.*

### Integrations

- **Gmail** — Chrome extension, full inbox integration (all Mixmax features live inside Gmail)
- **Salesforce** — Inbox sidebar, auto-create records, dynamic fields, advanced rules (Growth+CRM plan)
- **HubSpot** — Activity sync, list import into sequences, sidebar (Growth plan)
- **LinkedIn Sales Navigator** — InMail and connection requests as automated sequence steps
- **Slack** — Real-time engagement notifications
- **Gong** — Dialer call recording sync
- **Zoom** — Meeting link generation
- **Webhooks** — Via rules engine for custom integrations

### Compliance

- **SOC 2 Type II** compliant — enterprise-grade security and data handling

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Mixmax
2. **Configuration recommendations** — specific settings to change, with navigation paths (typically via the Mixmax sidebar in Gmail or Mixmax dashboard)
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked as expected
5. **Plan check** — flag any features that require a specific plan tier before recommending them

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Mixmax is Gmail-only — there is no Outlook support.** Mixmax works exclusively as a Gmail/Google Workspace extension. Don't recommend Mixmax to users on Outlook or Microsoft 365. If they need Outlook support, suggest alternatives like Salesloft, Yesware, or Mailshake.
- **Salesforce advanced rules require Growth+CRM plan (~$89/user/mo).** Basic Salesforce sidebar and activity logging are on the Growth plan, but rules triggered by Salesforce objects (opportunities, accounts, custom objects) require Growth+CRM. Always ask about the user's plan before suggesting SF-triggered automations.
- **The Contacts API is deprecated.** Don't recommend building integrations against the `/contacts` endpoints. Use Salesforce or HubSpot as the contact source of truth instead. The contacts endpoints may be removed in a future API version.
- **API rate limits are undocumented.** Mixmax does not publish official rate limits. The API is described as "optimized for lightweight, real-time interactions" — it is NOT suitable for bulk exports or high-volume sync. Recommend building with conservative backoff and small batch sizes.
- **One-click meetings require the recipient's email client to render rich HTML.** If the recipient uses a plain-text email client or has images disabled, one-click meeting proposals won't render correctly. They'll fall back to a scheduling link, but the one-click experience is lost.

## Step 5 — Related skills

- `/sales-cadence` — Design outbound cadence strategy (platform-agnostic, works with Mixmax sequences)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-meeting-scheduler` — Meeting scheduling strategy and best practices (platform-agnostic)
- `/sales-email-tracking` — Email tracking strategy and best practices (platform-agnostic)
- `/sales-integration` — Connect Mixmax to other tools via Zapier, webhooks, or native integrations
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Multi-channel sequence setup
**User says**: "How do I set up a multi-channel sequence in Mixmax with email, phone, and LinkedIn?"
**Skill does**:
1. Explains Mixmax sequences as multi-channel campaigns with email, phone, LinkedIn Sales Navigator, and task steps
2. Walks through creating a sequence: name, stages, channel per stage, timing between stages
3. Explains how to add LinkedIn Sales Navigator steps (InMail and connection requests) as automated sequence stages
4. Notes that LinkedIn Sales Navigator license is required separately
**Result**: User has a multi-channel sequence with email, phone, and LinkedIn steps configured

### Example 2: Salesforce integration with advanced rules
**User says**: "I want to automatically add prospects to a Mixmax sequence when an opportunity moves to a specific stage in Salesforce"
**Skill does**:
1. States upfront that Salesforce object-triggered rules require Growth+CRM plan (~$89/user/mo)
2. Walks through creating an advanced rule: trigger on Salesforce Opportunity stage change → action: add related contact to sequence
3. Explains how to configure the rule trigger (Salesforce object, field, condition) and action (target sequence, recipient mapping)
4. Suggests testing with a single opportunity before applying broadly
**Result**: User has an advanced rule that auto-enrolls prospects into sequences based on Salesforce deal stage changes

### Example 3: API-driven recipient management
**User says**: "I want to use the Mixmax API to programmatically add recipients to a sequence"
**Skill does**:
1. Points to `references/mixmax-api-reference.md` for full API documentation
2. Explains API key authentication via the `X-API-Token` header
3. Walks through the workflow: GET /sequences to find the sequence ID → POST /sequences/:id/recipients to add recipients
4. Warns about undocumented rate limits and recommends conservative batching
**Result**: User understands the API workflow for adding recipients and the precautions needed

## Troubleshooting

### Email tracking not showing opens
**Symptom**: Emails show as sent but no open notifications appear
**Cause**: Recipient's email client blocks tracking pixels (Apple Mail Privacy Protection, corporate proxies), or tracking is not enabled for the message
**Solution**: Verify tracking is enabled in the Mixmax compose window before sending (tracking toggle should be on). Note that Apple Mail (iOS 15+) pre-loads images, which may inflate or block accurate tracking. For critical prospects, rely on click tracking (include a link) and reply tracking instead of open tracking. See `/sales-email-tracking` for a full tracking strategy.

### Salesforce rules not triggering
**Symptom**: Advanced rules configured to trigger on Salesforce object changes are not firing
**Cause**: Not on Growth+CRM plan, Salesforce connection expired or disconnected, rule conditions too narrow, or Salesforce sync delay
**Solution**: Confirm you are on the Growth+CRM plan (~$89/user/mo) — advanced Salesforce rules are not available on lower plans. Re-authorize the Salesforce connection in Mixmax settings. Check the rule conditions — test with a broad condition first, then narrow down. Allow up to a few minutes for Salesforce sync delays.

### Sequence emails landing in spam
**Symptom**: Recipients report sequence emails going to spam or not arriving
**Cause**: Domain not authenticated, sending too many emails too fast, or email content triggering spam filters
**Solution**: Verify custom sending domain with SPF/DKIM/DMARC authentication. Start with low volume and ramp up gradually. Avoid spam trigger words in subject lines and body. Use Smart Send to optimize send times. Check sender reputation at mail-tester.com. See `/sales-deliverability` for a comprehensive deliverability strategy.
