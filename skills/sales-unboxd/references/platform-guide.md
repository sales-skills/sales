# Unboxd Platform Reference

## Overview

Unboxd is an AI email secretary that reads every email and extracts action items with deadlines into structured daily briefings. Unlike Fyxer or Superhuman (which help you write replies faster), Unboxd's goal is to eliminate the need to open your inbox at all. Supports Gmail, Outlook/M365, and any IMAP provider. ~1,000 users as of early 2026.

## Capabilities & automation surface

| Capability | Description | Automation |
|---|---|---|
| **Action item extraction** | Identifies tasks with associated deadlines from email content (95%+ accuracy claimed) | UI-only |
| **Daily briefing** | Morning email summarizing important messages, action items, and highlights | UI-only (email delivery) |
| **Email categorization** | Auto-sorts into Action Items, Highlights, FYIs — no manual rules needed | UI-only |
| **Email summaries** | TLDR condensation of long threads | UI-only |
| **Noise filtering** | Separates critical messages from clutter (claims 88% of inbox is noise) | UI-only |
| **Privacy filtering** | Keyword and address blocking — filtered before AI processing | UI-only |
| **Multi-account** | Connect multiple email accounts (plan-gated: 2/4/8 accounts) | UI-only |

**No public API. No webhooks. No Zapier/Make integrations. No MCP server.** Everything is accessed through the Unboxd web dashboard and daily briefing emails.

## Pricing, limits & plan gates

<!-- Pricing as of 2026-04 — verify at unboxd.ai -->

| Plan | Annual billing | Accounts | Credits/mo | Daily limit | Key features |
|---|---|---|---|---|---|
| **Plus** | $7.50/mo ($89.99/yr) | 2 | 600 | 20 emails | Highlights, action items, daily briefing |
| **Pro** | $12.50/mo ($149.99/yr) | 4 | 1,500 | 50 emails | Same + more accounts and credits |
| **Ultra** | $41.67/mo ($499.99/yr) | 8 | 6,000 | 200 emails | Same + highest volume |

All plans: 7-day free trial, no credit card required, cancel anytime.

**Plan gates that affect workflows:**
- **Account limits**: Plus = 2 accounts, Pro = 4, Ultra = 8. Need more → contact support.
- **Daily email processing cap**: This is the real bottleneck. Plus processes only 20 emails/day — a busy inbox will hit this by mid-morning.
- **Monthly credit pool**: Even if you don't hit daily limits, the monthly pool can run out. 600 credits/mo on Plus = ~20 emails/day for 30 days with zero headroom.

**No referral or affiliate program found.**

## Integrations

| Integration | Method | Notes |
|---|---|---|
| **Gmail** | OAuth + webhooks | Real-time email retrieval |
| **Google Workspace** | OAuth + webhooks | Same as Gmail, works with org accounts |
| **Outlook / M365** | OAuth + webhooks | Real-time email retrieval |
| **IMAP/SMTP** | Periodic polling | Any provider (Fastmail, ProtonMail Bridge, Yahoo, etc.) — not real-time |

**Not supported**: Any CRM, Zapier, Make, n8n, webhooks (outbound), API, Slack, Notion, or any task management tool. Action items cannot be automatically exported.

## Data model

Unboxd has no public API, so no formal data model. The user-visible objects are:

**Email categories** (AI-assigned):
- **Action Items** — emails requiring a response or task, with extracted deadlines
- **Highlights** — important information you should know but don't need to act on
- **FYIs** — informational emails, CC'd threads, status updates
- **Noise** — newsletters, marketing, automated notifications (filtered out)

**Daily briefing** (delivered via email):
- Summary of action items with deadlines
- Key highlights
- Categorization stats (how many emails in each bucket)

**Privacy controls:**
- Keyword blocklist — emails containing specific keywords are never processed by AI
- Address blocklist — specific senders are excluded from AI processing
- Zero-access encryption — privacy filtering happens before AI processing

## Quick-start recipes

Since Unboxd has no API or automation surface, these are workflow recipes.

### Recipe 1: Set up Unboxd for Gmail

1. Go to unboxd.ai → Sign up (no credit card required for 7-day trial)
2. Connect Gmail account via OAuth consent
3. Unboxd begins processing incoming emails immediately via webhooks
4. First daily briefing arrives the next morning
5. Review categorization accuracy — manually correct any miscategorized emails
6. Set up keyword/address blocking for sensitive emails you don't want AI to process

### Recipe 2: Optimize credit usage on Plus plan

1. Set up Gmail/Outlook filters to auto-archive obvious noise (marketing, newsletters) BEFORE Unboxd processes them
2. In Unboxd: add address blocks for high-volume low-value senders
3. Add keyword blocks for automated notification patterns (e.g., "unsubscribe", "do not reply")
4. This reduces the number of emails consuming your 20/day credits
5. Monitor usage in the Unboxd dashboard — if consistently hitting limits, upgrade to Pro

### Recipe 3: Use Unboxd alongside Superhuman or Fyxer

Unboxd complements rather than replaces email clients:

1. **Unboxd** handles the reading/triage layer — tells you what needs action via daily briefing
2. **Superhuman or Fyxer** handles the writing/response layer — you open only the emails Unboxd flagged
3. Connect same email account to both tools (both use OAuth, no conflict)
4. Workflow: Morning briefing from Unboxd → open flagged emails in Superhuman → use AI Write for replies
5. This combo costs $7.50 (Unboxd Plus) + $25 (Superhuman Starter) = $32.50/mo

## Integration patterns

### Automation workarounds

Since Unboxd has no API, webhooks, or iPaaS support:
- **Forward daily briefings**: Set up Gmail/Outlook rules to forward Unboxd's daily briefing emails to Slack, Notion, or other tools
- **Manual action item transfer**: Copy action items from daily briefing into your task manager (Todoist, Linear, Asana)
- **Email-based triggers**: Use Zapier/IFTTT to trigger automations when Unboxd's daily briefing email arrives in your inbox (trigger on sender address)

### Pairing with other tools

| Goal | Pair with | How |
|---|---|---|
| AI reply drafting | Fyxer ($22.50/mo) or Superhuman ($25/mo) | Both tools connected to same inbox — Unboxd triages, other tool drafts |
| Task management | Todoist, Linear, Asana | Manual copy from daily briefing (no API path) |
| CRM logging | HubSpot via Fyxer Professional | Fyxer handles CRM sync; Unboxd handles triage |
| Meeting notes | Fathom, Fireflies, etc. | Separate tool — Unboxd is email-only |

## Competitive positioning

| Feature | Unboxd | Fyxer | Superhuman | SaneBox | Shortwave |
|---|---|---|---|---|---|
| Core approach | Reads emails, extracts actions | Organizes inbox, drafts replies | Fast email client, AI Write | Background smart folders | AI-native Gmail client |
| Action item extraction | Yes (with deadlines) | No | No | No | No |
| Daily briefing | Yes | No | No | No | No |
| AI reply drafting | No | Yes (voice-trained) | Yes (Grammarly) | No | Yes (Ghostwriter) |
| Meeting notes | No | Yes | No | No | No |
| Email providers | Gmail, Outlook, IMAP | Gmail, Outlook only | Gmail, Outlook only | Any (server-side) | Gmail only |
| API/webhooks | None | None | MCP server | None | None |
| Starting price | $7.50/mo | $22.50/mo | $25/mo | $7/mo | $7/mo |
| Free plan | 7-day trial (no CC) | Trial (CC required) | Trial only | Trial only | Trial only |

## Security & privacy

- Zero-access encryption architecture
- Privacy filtering happens before AI processing
- Keyword and address blocking for sensitive content
- No details on SOC 2, ISO 27001, or other compliance certifications (not published)
- Small startup — evaluate data handling practices carefully for regulated industries
