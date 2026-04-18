# alfred_ Platform Reference

## Platform overview

alfred_ (get-alfred.ai) is an AI executive assistant that autonomously manages email, calendar, and tasks. It targets solo professionals — founders, consultants, and independent operators — who spend 15-20 hours/week on email and scheduling. Priced at $24.99/month (or $249/year), it positions as a fraction of a human EA ($60K-150K/year) or virtual assistant service ($2K-5K/month).

## Key modules

### Email management
- **Overnight inbox triage**: alfred_ processes your inbox while you sleep, categorizing emails by urgency
- **AI-drafted replies**: Drafts responses in your voice — you review and send with one tap, or edit first
- **Follow-up tracking**: Monitors sent emails and alerts you when responses are overdue
- **Multi-account support**: Connect multiple Gmail and Outlook accounts into a single command center
- **Task extraction**: Automatically identifies action items in emails and converts them to tasks

### Calendar intelligence
- **Pre-meeting briefings**: Pulls context about attendees and topics from your email history before meetings
- **Focus time protection**: Identifies and protects blocks for deep work on your calendar
- **Meeting load scoring**: Rates your day's meeting density to help you manage energy
- **Schedule analysis**: Detects conflicts and suggests optimizations
- **Calendar-aware task scheduling**: Places tasks in available calendar slots

### Task management
- **Auto-extraction**: Tasks are automatically pulled from emails with source links
- **Kanban boards**: Visual project boards for organizing tasks
- **Context linking**: Every task links back to the source email for context
- **Priority surfacing**: Daily Brief highlights the 3-5 tasks that need your attention

### Daily Brief
- Morning summary of "3-5 things that need your brain today"
- Combines email urgencies, calendar events, and task deadlines
- Delivered via the app and optionally via SMS

### Additional features
- **SMS access**: Text the assistant to check schedule, get briefings, or quick-reply to emails
- **Notes capture**: Built-in note-taking linked to emails and meetings

## Pricing and limits

| Plan | Price | Notes |
|---|---|---|
| Monthly | $24.99/month | Single tier, all features included |
| Annual | $249/year (~$20.75/month) | Same features, ~17% discount |
| Trial | 30 days free | Full access, no credit card info on whether required |
| Guarantee | Full refund | If unsatisfactory |

**No tiered plans** — every user gets the same features. No per-seat pricing, no AI add-ons, no feature gates. This is unusual in the category where most competitors have 3-4 tiers.

**No usage limits documented** — no mention of email volume caps, task limits, or API rate limits.

## Integrations

**Supported (4 total):**
| Integration | What it does |
|---|---|
| Gmail | Full inbox access — triage, draft replies, task extraction, sent mail learning |
| Outlook | Same as Gmail — triage, drafts, tasks, learning |
| Google Calendar | Meeting prep briefings, focus time protection, schedule analysis |
| Outlook Calendar | Same as Google Calendar |

**Not supported:**
- No CRM (Salesforce, HubSpot, Pipedrive, etc.)
- No project management (Asana, Linear, Notion, Jira, etc.)
- No Zapier, Make, or webhook integrations
- No Slack or Teams
- No public API

This is the most limited integration set in the AI executive assistant category. Lindy has 4,000+ integrations; Reclaim.ai integrates with Asana, Todoist, Linear, Jira, Slack.

## Security

- OAuth 2.0 authentication for Gmail and Outlook
- AES-256 encryption
- User-level data isolation
- Data never used for model training
- Access revocable through email provider settings (Google Account → Security → Third-party apps, or Azure AD → My Apps)

## Competitive comparison

| Feature | alfred_ ($24.99/mo) | Fyxer AI ($30-50/mo) | Superhuman ($25-30/mo) | Lindy ($49.99/mo+) | Reclaim.ai (Free-$14/mo) |
|---|---|---|---|---|---|
| Email triage | Autonomous overnight | Auto-organize | Keyboard-shortcut speed | Custom AI agent | No |
| Reply drafting | AI in your voice | AI drafting | AI Compose | Custom agent | No |
| Task extraction | From emails → kanban | No | No | Custom agent | Yes (from calendar) |
| Calendar management | Focus time + prep | No | No | Custom agent | Smart scheduling |
| Meeting notes | No | Meeting notes | No | Yes (module) | No |
| CRM integration | No | No | No | Yes (4,000+) | No |
| API | No | No | No | Yes | Yes |
| Best for | Solo founder email overload | Email + meeting notes | Power email users | Custom AI workflows | Calendar optimization |

**When to choose alfred_:**
- You want zero-config email AI that works overnight without building anything
- You're a solo professional, not managing a sales team
- You don't need CRM integration or meeting recording
- You value simplicity over customizability

**When NOT to choose alfred_:**
- You need CRM sync — choose Lindy or a purpose-built tool
- You need meeting recording/transcription — choose Fathom, Granola, or another note-taker
- You need team features — alfred_ is individual-only
- You want to build custom workflows — choose Lindy
- You mainly need calendar optimization — choose Reclaim.ai (cheaper or free)

## Workflow setup

### Initial setup (day 1)
1. Sign up at get-alfred.ai — 30-day free trial
2. Connect your primary email (Gmail or Outlook) via OAuth
3. Connect your calendar (Google Calendar or Outlook Calendar)
4. alfred_ begins analyzing your sent emails to learn your voice and priorities

### First week
- alfred_ starts triaging your inbox overnight
- Review AI-drafted replies carefully and edit before sending — this trains the model
- Check the Daily Brief each morning
- Tasks will begin appearing on the kanban board from email action items

### Optimization (week 2+)
- Reply quality improves as alfred_ learns your editing patterns
- Urgency detection calibrates based on which emails you act on
- Focus time blocks appear on your calendar
- SMS access becomes useful for quick on-the-go checks

### Adding accounts
- Connect additional Gmail/Outlook accounts from the dashboard
- Each account gets its own triage but unified task board
