# Mixmax Platform Guide

## Sequences
- **What it is**: Multi-channel outreach campaigns combining email, phone calls, LinkedIn Sales Navigator steps (InMail and connection requests), and manual tasks — all managed from Gmail
- **Key features**: AI sequence builder, sequence folders for organization, delegated sending (send on behalf of another rep), stage-level personalization, auto and manual steps
- **How it works**: Create a sequence with stages (steps). Each stage can be an automated email, a manual email, a phone call task, a LinkedIn action, or a custom task. Recipients progress through stages on a defined schedule.
- **Best practices**: Mix automated and manual steps for personalization at scale. Use sequence folders to organize by campaign type or persona. Leverage delegated sending for managers who want reps to send on their behalf.

## Email Tracking
- **What it is**: Real-time tracking of email opens, link clicks, file downloads, and RSVP responses — with desktop, email, and Slack notifications
- **Key features**: Per-email open/click/download/RSVP tracking, real-time desktop notifications, Slack notifications, engagement history per recipient
- **Limitations**: Tracking pixels are blocked by privacy tools (Apple Mail Privacy Protection, Hey, corporate proxies). Open tracking is increasingly unreliable — use click tracking and reply tracking as more reliable signals.
- **Best practices**: Don't over-rely on open data. Use tracking to prioritize follow-ups — if a prospect clicks a link or opens 3+ times, follow up quickly. Enable Slack notifications for real-time team visibility.

## Meeting Scheduling
- **What it is**: One-click meeting scheduling embedded directly in emails — recipients pick a time without leaving their inbox
- **Key features**: One-click meetings (propose times in-email), shared calendar scheduling, round-robin assignment, inbound lead routing, double-booking prevention, calendar integration
- **Meeting types**: One-click (propose specific times), scheduling link (share availability page), round-robin (distribute among team members)
- **Best practices**: Use one-click meetings for warm prospects (higher conversion than scheduling links). Set up round-robin for inbound lead routing. Enable double-booking prevention to avoid scheduling conflicts.

## Rules Engine
- **What it is**: IF/THEN automation engine for creating workflows triggered by email events, Salesforce object changes, or date fields
- **Basic rules**: Trigger on email opens, clicks, replies, downloads — then auto-add to sequence, create Salesforce task, send Slack notification, etc.
- **Advanced rules**: Trigger on Salesforce object changes (opportunities, accounts, custom objects), date-field triggers (e.g., renewal date approaching), webhook triggers
- **Webhook support**: Rules can fire webhooks to external endpoints, enabling integration with any system
- **Plan gating**: Basic rules available on SMB+. Advanced rules with Salesforce object triggers require Growth+CRM plan.
- **Best practices**: Start with simple rules (reply → notify Slack) before building complex Salesforce-triggered automations. Test rules with a small segment before applying broadly.

## Templates & Snippets
- **What it is**: Reusable email templates and text snippets with personalization — shared across teams
- **Key features**: Template library with personalization variables, snippet tags for quick insertion, team content sharing, template performance tracking
- **Snippets vs. templates**: Templates are full emails; snippets are reusable text blocks you insert into any email (like a paragraph about pricing or a CTA)
- **Best practices**: Track template performance in reporting to identify top performers. Use snippet tags to organize by category. Share winning templates across the team.

## Dialer
- **What it is**: Built-in calling directly from Gmail with automatic logging to CRM and Gong
- **Key features**: Click-to-call from Gmail, automatic call logging to Salesforce, Gong recording integration, call notes
- **Best practices**: Use the dialer as a sequence step for phone touches. Log call outcomes to track connect rates.

## AI Features
- **What it is**: AI-powered tools for email composition and send-time optimization
- **AI Compose**: Generate email drafts and subject lines from prompts or context
- **Smart Send**: AI determines the optimal send time for each recipient based on their engagement history
- **AI Sequence Builder**: Auto-generate multi-step sequences from a description of your target audience and goal
- **Best practices**: Use AI Compose for first drafts, then personalize. Let Smart Send optimize timing rather than guessing. Review AI-generated sequences before activating.

## Polls & Surveys
- **What it is**: Embedded polls and surveys in emails that recipients can answer with one click — no external links needed
- **Key features**: Single-question polls, multi-question surveys, one-click responses directly in the email, response tracking and aggregation
- **Best practices**: Use polls to qualify prospects (e.g., "Are you evaluating solutions this quarter?"). Keep polls to 1-2 questions for maximum response rate.

## Salesforce Integration
- **What it is**: Deep Salesforce integration with inbox sidebar, auto-record creation, dynamic fields, and advanced rules on SF objects
- **Key features**: Salesforce inbox sidebar (view CRM data from Gmail), auto-create leads/contacts from email, dynamic Salesforce fields in templates, advanced rules triggered by SF object changes (opportunities, accounts, custom objects)
- **Plan gating**: Basic Salesforce features on Growth plan. Advanced rules on Salesforce objects require Growth+CRM plan (~$89/user/mo).
- **Best practices**: Use the inbox sidebar to log activities without switching tabs. Set up auto-create for leads to eliminate manual data entry. Use SF-triggered rules to automate follow-ups on deal stage changes.

## HubSpot Integration
- **What it is**: Activity sync and list import between Mixmax and HubSpot
- **Key features**: Bi-directional activity sync, import HubSpot lists directly into Mixmax sequences, HubSpot sidebar in Gmail
- **Plan gating**: Requires Growth plan (~$65/user/mo).
- **Best practices**: Import HubSpot lists into sequences for targeted outreach. Use activity sync to keep HubSpot records up to date automatically.

## LinkedIn Sales Navigator
- **What it is**: Automated LinkedIn outreach as sequence steps — InMail messages and connection requests
- **Key features**: InMail as an automated sequence step, connection requests as sequence steps, integrated into multi-channel sequences
- **Requirements**: LinkedIn Sales Navigator license required separately
- **Best practices**: Use LinkedIn steps for prospects who don't respond to email. Place LinkedIn steps after 2-3 email touches. Personalize InMail — generic messages get ignored.

## Sidechat
- **What it is**: Invisible email collaboration — discuss emails with teammates without the recipient seeing the conversation
- **Best practices**: Use Sidechat to get manager input on important prospect emails before replying.

## Reporting
- **What it is**: Engagement analytics across emails, sequences, templates, and team performance
- **Key metrics**: Opens, clicks, bounces, replies, downloads, RSVPs — sliceable by template, sequence, recipient, team, and individual
- **Report views**: Individual performance, team comparison, sequence performance, template effectiveness
- **Best practices**: Review sequence reports weekly to identify underperforming stages. Compare template performance to standardize on what works. Use team reports for coaching.

## Custom Branding
- **What it is**: Add your company logo and branding to emails sent via Mixmax
- **Best practices**: Keep branding subtle — heavy logos can trigger spam filters and distract from the message.

## Data Model

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

## API Reference

**For detailed API documentation including endpoints, authentication, message schema, and automation patterns, always consult `references/mixmax-api-reference.md`.** Point the user to this file for the full endpoint catalog, request/response schemas, and rate limit details.

**Quick reference**: Base URL `https://api.mixmax.com/v1/`, API key auth via `X-API-Token` header. Developer contact: developer@mixmax.com

## Pricing

| Plan | Price | Key features |
|---|---|---|
| **Free** | $0 | Basic tracking, scheduling |
| **SMB** | ~$29-34/user/mo | Sequences, shared calendars |
| **Growth** | ~$65/user/mo | HubSpot, AI features, round-robin, analytics |
| **Growth + CRM** | ~$89/user/mo | Salesforce integration, advanced rules on SF objects |
| **Enterprise** | Custom (typically $100-150/user/mo) | Custom terms, dedicated support |

*Pricing as of 2026 — verify current pricing at mixmax.com.*

## Integrations

- **Gmail** — Chrome extension, full inbox integration (all Mixmax features live inside Gmail)
- **Salesforce** — Inbox sidebar, auto-create records, dynamic fields, advanced rules (Growth+CRM plan)
- **HubSpot** — Activity sync, list import into sequences, sidebar (Growth plan)
- **LinkedIn Sales Navigator** — InMail and connection requests as automated sequence steps
- **Slack** — Real-time engagement notifications
- **Gong** — Dialer call recording sync
- **Zoom** — Meeting link generation
- **Webhooks** — Via rules engine for custom integrations

## Compliance

- **SOC 2 Type II** compliant — enterprise-grade security and data handling
