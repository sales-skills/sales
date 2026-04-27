# Clean Email Platform Reference

## Overview

Clean Email is a cross-platform inbox cleanup tool that groups emails for bulk actions, automates inbox management with rules, unsubscribes from newsletters, and monitors for data breaches. Works with any email provider that supports OAuth2 or IMAP. Reads email headers only — never downloads message bodies or attachments. Based in Los Angeles, 10+ years in operation, 4.5/5 stars from 3,300+ reviews.

## Capabilities & automation surface

| Capability | What it does | Access |
|---|---|---|
| **Smart Folders** | 33 pre-built categories (Social Networks, Online Shopping, Newsletters, Finance, Travel, etc.) that auto-group emails | UI-only |
| **Cleaning Suggestions** | AI-generated email bundles grouped by sender/pattern for batch review and action | UI-only |
| **Auto Clean** | Rule-based automation for incoming emails — archive, delete, move, label based on sender, subject, age, size | UI-only |
| **True Unsubscriber** | Sends unsubscribe requests on your behalf — follows links, fills forms, sends special requests | UI-only |
| **Screener** | Filters first-time senders — quarantines emails from unknown contacts for manual review | UI-only |
| **Privacy Monitor** | Checks if your email appears in known data breaches (similar to HaveIBeenPwned) | UI-only |
| **Bulk Actions** | Select groups of emails and apply actions: delete, archive, move, label, mark read/unread | UI-only |

**Developer surface: None.** No public API, no webhooks, no Zapier/Make integration, no MCP server. Clean Email is entirely a consumer UI tool. For programmatic inbox management, consider Inbox Zero (REST API + CLI), Gmail API directly, or IMAP library access.

## Pricing, limits & plan gates

All plans include the complete feature set. The only difference between tiers is the number of email accounts you can connect.

| Plan | Monthly | Annual | Accounts | Features |
|---|---|---|---|---|
| 1 Account | $9.99/mo | $29.99/yr (~$2.50/mo) | 1 | All |
| 5 Accounts | $19.99/mo | $49.99/yr (~$4.17/mo) | 5 | All |
| 10 Accounts | $29.99/mo | $99.99/yr (~$8.33/mo) | 10 | All |

- **Free trial**: Clean up to 1,000 emails free, no credit card required
- **Annual savings**: ~70% compared to monthly billing
- **No plan-gated features**: Every feature is available on every plan
- **Cancel anytime**: No long-term contracts

## Integrations

Clean Email has minimal integration surface — it connects directly to your email provider and works independently.

**Email provider connections:**
- **Gmail / Google Workspace**: OAuth2 authentication
- **Outlook / Microsoft 365**: OAuth2 authentication
- **Yahoo / AOL**: OAuth2 or app password
- **Apple iCloud**: App-specific password (generated in Apple ID settings)
- **Any IMAP provider**: Server credentials (Fastmail, ProtonMail Bridge, custom domains, etc.)

**No outbound integrations:**
- No Zapier triggers or actions
- No Make modules
- No webhooks
- No API for external systems
- No CRM connectors

**Platform apps:**
- Web app (any browser)
- iOS (iPhone/iPad)
- macOS (native app)
- Android

## Data model

Clean Email doesn't expose a data model via API. Internally, it works with email metadata:

```json
<!-- Constructed from docs — verify against live product -->
{
  "email_group": {
    "group_name": "LinkedIn Notifications",
    "sender_domain": "linkedin.com",
    "email_count": 342,
    "oldest": "2024-01-15",
    "newest": "2026-04-27",
    "total_size_mb": 28.4,
    "smart_folder": "Social Networks",
    "suggested_action": "archive"
  }
}
```

```json
<!-- Constructed from docs — verify against live product -->
{
  "auto_clean_rule": {
    "name": "Archive old social notifications",
    "conditions": {
      "sender_contains": "@linkedin.com",
      "older_than_days": 30
    },
    "action": "archive",
    "apply_to": "new_and_existing",
    "enabled": true
  }
}
```

## Quick-start recipes

Since Clean Email has no API, these are workflow recipes using the UI.

### Recipe 1: Nuclear inbox cleanup (50K+ emails)

**Goal**: Get from 50,000 unread to manageable inbox in under an hour.

1. **Sign up** at clean.email — free trial covers 1,000 emails, then $29.99/yr for 1 account
2. **Connect your email** via OAuth2 (Gmail/Outlook) or IMAP credentials
3. **Start with Smart Folders**:
   - Open "Social Networks" → Select All → Archive (or Delete)
   - Open "Notifications" → Select All → Archive
   - Open "Online Shopping" → Select emails older than 6 months → Delete
   - Open "Newsletters" → Review the list → Unsubscribe from unwanted, Archive the rest
4. **Use Cleaning Suggestions**: Review each AI-generated bundle — these group emails by sender/pattern. Accept or dismiss each suggestion.
5. **Set up Auto Clean rules** for future: Archive social notifications older than 7 days, move shopping receipts to a label

**Safety tip**: Use Archive instead of Delete for your first pass. You can always delete archived emails later.

### Recipe 2: Newsletter purge and ongoing control

**Goal**: Unsubscribe from all unwanted newsletters and prevent new ones from accumulating.

1. **Open Unsubscriber**: Shows all detected subscriptions
2. **For each subscription, choose**:
   - **Unsubscribe**: Sends cancellation request (48h-7d to take effect)
   - **Read Later**: Moves to a digest folder for batch reading
   - **Keep Newest**: Keeps only the most recent email from this sender
   - **Pause**: Temporarily stops emails (can resume later)
3. **Enable Screener**: Quarantines first-time senders for manual approval
4. **Create Auto Clean rule**: "If from newsletter domain AND older than 14 days → Archive"
5. **Check back in 1 week**: Block any senders who ignored the unsubscribe request

### Recipe 3: Programmatic inbox cleanup alternatives (for developers)

Since Clean Email has no API, here are developer alternatives:

**Gmail API (Python)**:
```python
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

creds = Credentials.from_authorized_user_file('token.json')
service = build('gmail', 'v1', credentials=creds)

# List emails from a sender
results = service.users().messages().list(
    userId='me',
    q='from:notifications@linkedin.com older_than:30d'
).execute()

# Batch delete
messages = results.get('messages', [])
if messages:
    service.users().messages().batchDelete(
        userId='me',
        body={'ids': [m['id'] for m in messages]}
    ).execute()
```

**IMAP (Python)**:
```python
import imaplib

mail = imaplib.IMAP4_SSL('imap.gmail.com')
mail.login('user@gmail.com', 'app-specific-password')
mail.select('INBOX')

# Search for old newsletter emails
_, data = mail.search(None, '(FROM "newsletter@example.com" BEFORE "27-Mar-2026")')
for num in data[0].split():
    mail.store(num, '+FLAGS', '\\Deleted')
mail.expunge()
```

**Inbox Zero CLI** (if you want a managed solution with API):
```bash
# Install Inbox Zero, then use its CLI for rule-based cleanup
# See /sales-inbox-zero for setup
```

## Integration patterns

### Using Clean Email alongside other email tools

Clean Email operates at the email provider level — it modifies your inbox directly via IMAP/OAuth. This means:

- **Compatible with any email client**: Use Clean Email for cleanup, Superhuman/Shortwave for daily email. Changes Clean Email makes (archive, delete, label) appear in all clients.
- **Compatible with SaneBox**: SaneBox creates folders server-side, Clean Email groups and cleans. They don't conflict, but overlapping Auto Clean rules and SaneBox filters can cause confusion.
- **Compatible with Inbox Zero**: Both connect via OAuth/IMAP. Run Clean Email for initial bulk cleanup, then Inbox Zero for ongoing AI-powered management with API access.

### Migration from Unroll.me

If switching from Unroll.me (privacy concerns):
1. Use Clean Email's Unsubscriber to re-unsubscribe from the same lists
2. Enable Screener to catch new subscription emails
3. Set up Auto Clean rules to replicate Unroll.me's "Rollup" digest behavior (move newsletters to a label, review daily)

## Comparison with alternatives

| Feature | Clean Email | SaneBox | Unroll.me | Inbox Zero |
|---|---|---|---|---|
| **Primary function** | Bulk cleanup + rules | AI triage + folders | Unsubscribe + digest | AI labels + rules + drafts |
| **Email providers** | Any (OAuth/IMAP) | Any (IMAP) | Gmail/Outlook only | Gmail/Outlook |
| **Reads email bodies** | No (headers only) | No (metadata only) | Yes (sells anonymized data) | Yes (for AI features) |
| **Auto rules** | Yes (Auto Clean) | Yes (smart folders) | No | Yes (plain-English) |
| **Unsubscribe** | Yes (True Unsubscriber) | No | Yes | Yes |
| **API** | None | None | None | REST API + CLI |
| **Best for** | Backlog cleanup | Ongoing triage | Quick unsubscribe (privacy risk) | Developer automation |
| **Pricing** | $29.99/yr | $84/yr (Snack) | Free (data-funded) | $216/yr (Starter) |
