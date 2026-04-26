# SaneBox Platform Reference

## Overview

SaneBox is a server-side AI email filtering service that connects to your email account via IMAP and automatically sorts low-priority messages into smart folders. It works with any email provider and any email client — no app to install. Reads email metadata only (sender, subject, date), never body content.

## Capabilities & automation surface

| Capability | Description | Surface |
|---|---|---|
| **SaneLater** | Routes low-priority emails out of inbox | IMAP folder (server-side) |
| **SaneBlackHole** | Permanently blocks senders (7-day review) | IMAP folder (server-side) |
| **SaneNews** | Dedicates folder for newsletters/mailing lists | IMAP folder (server-side) |
| **SaneCC** | Separates CC'd emails from direct messages | IMAP folder (server-side) |
| **SaneReminders** | Follow-up reminders when no reply received | UI + IMAP (Lunch+ plan) |
| **SaneAttachments** | Saves attachments to Dropbox/Google Drive | UI-only (Dinner plan) |
| **Snooze folders** | @SaneTomorrow, @SaneNextWeek, custom | IMAP folder (server-side) |
| **Custom Training folders** | User-created categories (e.g., "Family") | IMAP folder (server-side) |
| **Daily Digest** | Summary email of non-critical messages | Email delivery |
| **One-click unsubscribe** | Unsubscribe from mailing lists | UI-only |

**Developer surface: None.** No public API, no webhooks, no Zapier/Make modules, no MCP server. The only programmatic interface is reading IMAP folders that SaneBox creates.

## Pricing, limits & plan gates

| Plan | Monthly | Annual (~20% off) | Accounts | Features |
|---|---|---|---|---|
| Snack | $7/mo | ~$5.60/mo | 1 | 2 (choose from available features) |
| Lunch | $12/mo | ~$9.60/mo | 2 | 6 (adds SaneReminders, more folders) |
| Dinner | $36/mo | ~$28.80/mo | 4 | All features (SaneAttachments, full set) |

- 14-day free trial available
- 25% discount for education, nonprofit, and government
- No permanent free tier
- Additional accounts beyond plan limits: contact support
- Referral: both parties get $5 credit; existing subscribers earn free month on friend's subscription

**Plan-gated features:**
- **SaneReminders**: Lunch ($12/mo) or higher
- **SaneAttachments**: Dinner ($36/mo) only
- **Custom Snooze folders**: Available on all plans
- **SaneBlackHole**: Available on all plans

## Integrations

**Email providers supported:**
- Gmail / Google Workspace (OAuth)
- Microsoft 365 / Outlook (OAuth)
- Apple iCloud
- Yahoo Mail
- Fastmail
- Any IMAP, Exchange, or ActiveSync server

**Connection method:** IMAP IDLE — SaneBox "talks" to your email server and creates/manages folders server-side. If SaneBox goes offline, emails arrive in your inbox unsorted (graceful degradation).

**Cloud storage (SaneAttachments, Dinner only):**
- Dropbox
- Google Drive
- Other cloud platforms (unspecified)

**No iPaaS integration:** No Zapier triggers/actions, no Make modules, no webhooks, no API.

## Data model

SaneBox doesn't expose a data model — it operates via IMAP folders. The "objects" are:

```json
// IMAP folder structure created by SaneBox
{
  "folders": [
    "@SaneLater",
    "@SaneNews",
    "@SaneBlackHole",
    "@SaneCC",
    "@SaneTomorrow",
    "@SaneNextWeek",
    "@Sane3Days",
    "@Sane1Week",
    "@Sane1Month",
    "@SaneCustomFolder"
  ]
}
```
<!-- Constructed from docs — verify against live IMAP -->

Training happens by moving emails between folders:
- Move email from SaneLater → Inbox = "this sender is important"
- Move email from Inbox → SaneLater = "this sender is low priority"
- Move email to SaneBlackHole = "never show this sender again"

## Quick-start recipes

### Recipe 1: Monitor SaneLater folder via IMAP (Python)

SaneBox has no API, but you can read its folders via IMAP to build your own triage pipeline.

```python
import imaplib
import email

# Connect to your email server
imap = imaplib.IMAP4_SSL("imap.gmail.com")
imap.login("your-email@gmail.com", "your-app-password")

# Select the SaneLater folder
status, messages = imap.select("@SaneLater")
print(f"Messages in SaneLater: {messages[0].decode()}")

# Fetch latest 5 messages
status, data = imap.search(None, "ALL")
message_ids = data[0].split()[-5:]  # last 5

for msg_id in message_ids:
    status, msg_data = imap.fetch(msg_id, "(RFC822)")
    msg = email.message_from_bytes(msg_data[0][1])
    print(f"From: {msg['From']}, Subject: {msg['Subject']}")

imap.logout()
```

**Gotcha:** Gmail requires an App Password (not your regular password) with IMAP enabled in Gmail settings. For OAuth, use the `google-auth` library.

### Recipe 2: Auto-rescue important senders from SaneLater

```python
import imaplib
import email

IMPORTANT_DOMAINS = ["@client.com", "@partner.org", "@investor.io"]

imap = imaplib.IMAP4_SSL("imap.gmail.com")
imap.login("your-email@gmail.com", "your-app-password")
imap.select("@SaneLater")

status, data = imap.search(None, "UNSEEN")
for msg_id in data[0].split():
    status, msg_data = imap.fetch(msg_id, "(RFC822)")
    msg = email.message_from_bytes(msg_data[0][1])
    sender = msg["From"]

    if any(domain in sender for domain in IMPORTANT_DOMAINS):
        # Move to Inbox — this also retrains SaneBox
        imap.copy(msg_id, "INBOX")
        imap.store(msg_id, "+FLAGS", "\\Deleted")
        print(f"Rescued: {sender} — {msg['Subject']}")

imap.expunge()
imap.logout()
```

**Gotcha:** Moving emails via IMAP retrains SaneBox — it learns from the folder change. This is the only way to "integrate" with SaneBox programmatically.

### Recipe 3: Export Daily Digest senders (cURL + IMAP)

Since SaneBox sends a Daily Digest email, you can parse it to extract a list of filtered senders:

```bash
# No API — you'd fetch the digest email via IMAP and parse the HTML
# SaneBox digest arrives from digest@sanebox.com

# Using Python to find digest emails:
python3 -c "
import imaplib, email
imap = imaplib.IMAP4_SSL('imap.gmail.com')
imap.login('you@gmail.com', 'app-password')
imap.select('INBOX')
status, data = imap.search(None, 'FROM', 'digest@sanebox.com')
ids = data[0].split()
print(f'Found {len(ids)} digest emails')
imap.logout()
"
```

## Integration patterns

### IMAP folder monitoring (only viable pattern)

Since SaneBox has no API or webhooks, the only integration pattern is polling IMAP folders:

1. **Connect via IMAP** to your email server (not SaneBox)
2. **Poll @SaneLater** periodically (every 5-15 minutes)
3. **Process/rescue emails** based on your business logic
4. **Folder moves retrain SaneBox** — moving email from SaneLater to Inbox tells SaneBox the sender is important

**Limitations:**
- No real-time notifications (must poll)
- No access to SaneBox's classification confidence or reasoning
- No way to create or manage SaneBox settings programmatically
- Folder creation/deletion must be done via the SaneBox dashboard

### Pairing SaneBox with other tools

SaneBox works behind any email client, so it can complement:
- **Superhuman**: SaneBox filters server-side → Superhuman as your client for speed + AI Write
- **Fyxer**: SaneBox handles folder sorting → Fyxer handles AI drafting (both can connect to same account)
- **Shortwave**: Not recommended — Shortwave has its own AI filtering that may conflict

## Competitive positioning

| Feature | SaneBox | Fyxer | Superhuman | Shortwave | Unboxd |
|---|---|---|---|---|---|
| Core approach | Background smart folders | AI inbox org + drafts | Speed + keyboard + AI Write | AI-first Gmail client | Email secretary + action items |
| Works with any email provider | Yes (IMAP/Exchange/ActiveSync) | Gmail, Outlook only | Gmail, Outlook only | Gmail only | Gmail, Outlook, IMAP |
| Replaces email client | No (works behind any client) | No (layer on Gmail/Outlook) | Yes (full replacement) | Yes (full replacement) | No (separate briefing) |
| AI drafting | No | Yes (voice-trained) | Yes (Grammarly) | Yes (Ghostwriter) | No |
| Meeting notes | No | Yes | No | No | No |
| Action item extraction | No | No | No | No | Yes (with deadlines) |
| API/webhooks | None | None | MCP server | MCP consumer | None |
| CRM integration | No | HubSpot only | SF/HubSpot/Pipedrive | None native | No |
| Calendar | No | Read-only | Read/write | Read-only | No |
| Starting price | $7/mo | $22.50/mo | $25/mo | $24/mo | $7.50/mo |
| Free plan | 14-day trial | Trial (CC required) | Trial only | 14-day trial | 7-day trial |

## Security & privacy

- Google-verified security credentials
- Third-party security audits by Leviathan Security Group
- OAuth-based access control for Gmail/Outlook
- Encrypted account credentials
- **Metadata only**: reads sender, subject, date — never stores full email content or attachments
- No SOC 2, ISO 27001, or HIPAA certifications published

## Affiliate program

- Up to 30% lifetime commission via PartnerStack
- 90-day cookie (resets on re-click)
- Free SaneBox account after 3 conversions
- Referred customers get $25 credit
- Signup: https://www.sanebox.com/partners or partners@sanebox.com
