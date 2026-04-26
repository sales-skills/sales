<!-- Source: https://sanebox.atlassian.net/wiki/display/sanebox/SaneBox+API (JS-rendered, unfetchable) -->
<!-- Source: https://www.sanebox.com (no public API documented) -->

# SaneBox API Reference

## Status: No Public API

SaneBox does not offer a public REST API, webhooks, Zapier/Make integrations, or MCP server. A Confluence page exists at `sanebox.atlassian.net/wiki/display/sanebox/SaneBox+API` that suggests an OAuth-based API may have existed or be internal-only, but the page is JS-rendered and returns no API documentation.

## What IS available

### IMAP folder access (only programmatic surface)

SaneBox operates by creating and managing IMAP folders on your email server. These folders are accessible via standard IMAP libraries:

**Folder names created by SaneBox:**
- `@SaneLater` — low-priority emails
- `@SaneNews` — newsletters
- `@SaneBlackHole` — blocked senders (7-day review)
- `@SaneCC` — CC'd emails
- `@SaneTomorrow` — snoozed until tomorrow
- `@SaneNextWeek` — snoozed until next week
- `@Sane3Days`, `@Sane1Week`, `@Sane1Month` — snooze durations
- Custom `@Sane*` folders — user-created training folders

### Example: Read SaneLater via IMAP (cURL equivalent)

IMAP doesn't use cURL, but here's the simplest Python connection:

```python
import imaplib

imap = imaplib.IMAP4_SSL("imap.gmail.com")
imap.login("user@gmail.com", "app-password")
imap.select("@SaneLater")
status, data = imap.search(None, "ALL")
print(f"Emails in SaneLater: {len(data[0].split())}")
imap.logout()
```

### Gmail OAuth alternative

```python
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
import imaplib

# OAuth2 flow for Gmail
flow = InstalledAppFlow.from_client_secrets_file(
    "credentials.json",
    scopes=["https://mail.google.com/"]
)
credentials = flow.run_local_server()

imap = imaplib.IMAP4_SSL("imap.gmail.com")
imap.authenticate("XOAUTH2", lambda x: f"user=you@gmail.com\x01auth=Bearer {credentials.token}\x01\x01".encode())
imap.select("@SaneLater")
```

## Gaps

- **No endpoint documentation**: No REST endpoints, no base URL, no auth tokens
- **No webhook support**: No way to receive real-time notifications when SaneBox filters an email
- **No settings API**: Cannot create/delete folders, manage whitelist/blacklist, or change plan programmatically
- **No Zapier/Make**: No native iPaaS integration
- **No MCP server**: Cannot connect to Claude Code or other AI tools
- **Historical API**: The Confluence page may reference an internal or deprecated API — no public documentation confirms its availability

## Workarounds for developers

1. **IMAP polling**: Monitor SaneBox folders via IMAP every 5-15 minutes
2. **Gmail API**: Use Gmail API's `history.list` to detect when emails move to/from SaneBox folders
3. **Email forwarding rules**: Set up server-side forwarding rules to copy SaneLater contents to a webhook endpoint
4. **Pair with API-accessible tools**: Use SaneBox for filtering + Superhuman MCP or Gmail API for programmatic access
