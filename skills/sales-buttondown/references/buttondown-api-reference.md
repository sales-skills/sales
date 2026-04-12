<!-- Source: https://docs.buttondown.com/api-introduction, https://docs.buttondown.com/api-authentication, https://buttondown.com/features/api -->
<!-- Note: Full API docs at docs.buttondown.com are JS-rendered and couldn't be fully captured via WebFetch. This reference is compiled from available documentation pages and the features/api page. Refresh by visiting docs.buttondown.com directly. -->

# Buttondown API Reference

## Overview

Buttondown's API has been designed to be as RESTful and uninteresting as possible: if there's a primitive in Buttondown, you should have a nice interface for it, with the ability to retrieve, create, modify, and delete.

Every feature in Buttondown is built API-first — Buttondown uses the same API to power its own app. No second-class endpoints, no missing functionality, and no surprises. If you can click it, you can script it.

The API is available on **all pricing plans**, including free.

## Base URL

```
https://api.buttondown.com/v1/
```

## Authentication

Clients should authenticate by passing the token key in the `Authorization` HTTP header, prepended with the string `Token ` (note the trailing space!).

```
Authorization: Token 401f7ac837da42b97f613d789819ff93537bee6a
```

Find your API key at: https://buttondown.com/requests

### Multi-newsletter context

For accounts with multiple newsletters, include the `Buttondown-Context` header:

```
Buttondown-Context: my-newsletter-name
```

### Permission levels

Each API key supports eight distinct permission categories:
- subscriber
- email
- sending
- administrivia
- automations
- forms
- styling
- surveys

Each configurable to: **write** (full access), **read** (view-only), or **none** (blocked).

Attempting an operation without permission returns `403 Forbidden`.

## Rate limiting

The API is rate-limited to prevent abuse, but the limits are generous enough for most use cases.

## Key endpoints

### Subscribers

- `GET /v1/subscribers` — List all subscribers
- `POST /v1/subscribers` — Create a subscriber
- `GET /v1/subscribers/{id}` — Get a subscriber
- `PATCH /v1/subscribers/{id}` — Update a subscriber
- `DELETE /v1/subscribers/{id}` — Delete a subscriber

### Emails

- `GET /v1/emails` — List all emails
- `POST /v1/emails` — Create an email (draft or send)
- `GET /v1/emails/{id}` — Get an email
- `PATCH /v1/emails/{id}` — Update an email
- `DELETE /v1/emails/{id}` — Delete an email

### Tags

- `GET /v1/tags` — List all tags
- `POST /v1/tags` — Create a tag
- `GET /v1/tags/{id}` — Get a tag
- `PATCH /v1/tags/{id}` — Update a tag
- `DELETE /v1/tags/{id}` — Delete a tag

### Automations

- `GET /v1/automations` — List automations
- `POST /v1/automations` — Create an automation
- `GET /v1/automations/{id}` — Get an automation

### Newsletters

- `GET /v1/newsletters` — List newsletters
- `POST /v1/newsletters` — Create a newsletter

### Data exports

- `POST /v1/exports` — Request a data export
- `GET /v1/exports/{id}` — Get export status

## Code examples

### Python — Create a subscriber

```python
import requests

response = requests.post(
    "https://api.buttondown.com/v1/subscribers",
    headers={"Authorization": "Token YOUR_API_KEY"},
    json={
        "email": "reader@example.com",
        "tags": ["welcome-series"],
        "metadata": {"source": "website"}
    }
)
print(response.json())
```

### JavaScript — Send an email

```javascript
const response = await fetch("https://api.buttondown.com/v1/emails", {
    method: "POST",
    headers: {
        "Authorization": "Token YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        subject: "Weekly Update",
        body: "# Hello\n\nThis is a **Markdown** email.",
        status: "draft"  // or "about_to_send" to send immediately
    })
});
```

### cURL — List subscribers

```bash
curl -s https://api.buttondown.com/v1/subscribers \
  -H "Authorization: Token YOUR_API_KEY" | jq .
```

## Changelog

API changes are documented at: https://docs.buttondown.com/api-changelog
