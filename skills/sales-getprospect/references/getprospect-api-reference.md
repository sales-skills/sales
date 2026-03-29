### GetProspect APIs — Comprehensive Reference

GetProspect provides a REST API for email discovery, email verification, lead/company search, contact and company management, list management, and LinkedIn-based prospecting.

> **Note**: Best-effort from research — full API docs at https://getprospect.readme.io/reference/introduction. Verify endpoints and parameters against the official documentation. The API is marked as "still under development" by GetProspect; endpoints and behavior may change.

---

## Base URL

```
https://api.getprospect.com
```

---

### Authentication

API key obtained from [app.getprospect.com/settings/api](https://app.getprospect.com/settings/api). Sent as an `apiKey` parameter or header on every request.

```bash
curl --request GET \
  --url "https://api.getprospect.com/api/v1/health/test" \
  --header "apiKey: yourApiKey"
```

---

### Rate Limits

Not publicly documented. Monitor usage through your GetProspect account dashboard. Contact GetProspect support for rate limit details.

---

### Response Format

All responses return JSON.

---

### Error Handling

Standard HTTP status codes. Common codes:

| Status | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request — invalid or missing parameters |
| 401 | Unauthorized — invalid or missing API key |
| 404 | Not found — no data for the given identifier |
| 500 | Internal server error |

---

### Endpoints

---

#### 1. Email Services

Discover, verify, and look up email addresses.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v2/email/find` | Find a professional email from name + domain (V2) |
| GET | `/api/v2/email/verify` | Verify email deliverability (V2) |
| GET | `/api/v1/email/find` | Find a professional email (legacy) |
| GET | `/api/v1/email/verify` | Verify email deliverability (legacy) |
| GET | `/api/v1/email/lookup` | Reverse email lookup — find person/company from an email address |

**`GET /api/v2/email/find` parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key |
| `firstName` | string | Yes | Person's first name |
| `lastName` | string | Yes | Person's last name |
| `domain` | string | Yes | Company domain |

**`GET /api/v2/email/verify` parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key |
| `email` | string | Yes | Email address to verify |

**`GET /api/v1/email/lookup` parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key |
| `email` | string | Yes | Email address to look up |

---

#### 2. Search

Search for leads, companies, and contacts across GetProspect's database.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/search/leads` | Search contacts with filters |
| POST | `/api/v1/search/companies` | Search companies with filters |
| GET | `/api/v1/search/linkedin` | Find contact from LinkedIn profile URL |
| GET | `/api/v1/search/fast` | Quick search for contacts and companies |

**`POST /api/v1/search/leads` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key (header or body) |
| `filters` | object | No | Search filter criteria (job title, location, industry, etc.) |
| `page` | int | No | Page number for pagination |
| `limit` | int | No | Results per page |

**`POST /api/v1/search/companies` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key (header or body) |
| `filters` | object | No | Company filter criteria (industry, size, location, etc.) |
| `page` | int | No | Page number for pagination |
| `limit` | int | No | Results per page |

**`GET /api/v1/search/linkedin` parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key |
| `url` | string | Yes | LinkedIn profile URL |

**`GET /api/v1/search/fast` parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key |
| `query` | string | Yes | Search query string |

---

#### 3. Contact Management

CRUD operations for managing contacts in your GetProspect account.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/contacts` | Create a new contact |
| GET | `/api/v1/contacts/{id}` | Get a single contact by ID |
| PATCH | `/api/v1/contacts/{id}` | Update a contact |
| DELETE | `/api/v1/contacts/{id}` | Delete a contact |
| POST | `/api/v1/contacts/search` | Search contacts in your account |
| POST | `/api/v1/contacts/{id}/companies` | Add companies to a contact |

**`POST /api/v1/contacts` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key (header or body) |
| `firstName` | string | No | Contact first name |
| `lastName` | string | No | Contact last name |
| `email` | string | No | Contact email address |
| `company` | string | No | Company name |
| `title` | string | No | Job title |
| `phone` | string | No | Phone number |

**`PATCH /api/v1/contacts/{id}` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key (header or body) |
| `firstName` | string | No | Updated first name |
| `lastName` | string | No | Updated last name |
| `email` | string | No | Updated email |
| `title` | string | No | Updated job title |

---

#### 4. Company Management

CRUD operations for managing companies in your GetProspect account.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/companies` | Search companies in your account |
| GET | `/api/v1/companies/{id}` | Get a single company by ID |
| PATCH | `/api/v1/companies/{id}` | Update a company |
| DELETE | `/api/v1/companies/{id}` | Delete a company |
| POST | `/api/v1/companies` | Create a new company |

**`POST /api/v1/companies` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key (header or body) |
| `name` | string | Yes | Company name |
| `domain` | string | No | Company domain |
| `industry` | string | No | Industry |
| `size` | string | No | Company size range |
| `location` | string | No | Company location |

---

#### 5. List Management

Manage contact lists for organizing and segmenting your prospects.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/lists` | Get all lists |
| POST | `/api/v1/lists` | Create a new list |
| DELETE | `/api/v1/lists` | Delete lists |
| POST | `/api/v1/lists/size` | Get list size (contact count) |
| PATCH | `/api/v1/lists/{id}` | Update a list |
| POST | `/api/v1/lists/{id}/contacts` | Add contacts to a list |
| GET | `/api/v1/lists/{id}/contacts` | Get contacts in a list |

**`POST /api/v1/lists` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key (header or body) |
| `name` | string | Yes | List name |

**`POST /api/v1/lists/{id}/contacts` parameters** (JSON body):

| Parameter | Type | Required | Description |
|---|---|---|---|
| `apiKey` | string | Yes | API key (header or body) |
| `contactIds` | array | Yes | Array of contact IDs to add |

---

#### 6. Utility

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/properties` | Retrieve all custom property definitions |
| GET | `/api/v1/health/test` | Health check — verify API connectivity |

---

### Webhook Support

Not documented. Check official docs for updates on webhook or callback support.

---

## Quick Reference — Common Workflows

### Find a professional email (V2)
```bash
curl --request GET \
  --url "https://api.getprospect.com/api/v2/email/find?firstName=John&lastName=Doe&domain=example.com" \
  --header "apiKey: yourApiKey"
```

### Verify an email (V2)
```bash
curl --request GET \
  --url "https://api.getprospect.com/api/v2/email/verify?email=john.doe@example.com" \
  --header "apiKey: yourApiKey"
```

### Reverse email lookup
```bash
curl --request GET \
  --url "https://api.getprospect.com/api/v1/email/lookup?email=john.doe@example.com" \
  --header "apiKey: yourApiKey"
```

### Search leads with filters
```bash
curl --request POST \
  --url "https://api.getprospect.com/api/v1/search/leads" \
  --header "apiKey: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{
    "filters": {
      "jobTitle": "VP Sales",
      "location": "United States"
    },
    "page": 1,
    "limit": 25
  }'
```

### Find contact by LinkedIn URL
```bash
curl --request GET \
  --url "https://api.getprospect.com/api/v1/search/linkedin?url=https://linkedin.com/in/johndoe" \
  --header "apiKey: yourApiKey"
```

### Create a contact
```bash
curl --request POST \
  --url "https://api.getprospect.com/api/v1/contacts" \
  --header "apiKey: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "company": "Acme Inc",
    "title": "VP of Sales"
  }'
```

### Create a list and add contacts
```bash
# Create list
curl --request POST \
  --url "https://api.getprospect.com/api/v1/lists" \
  --header "apiKey: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{"name": "Q1 Outreach"}'

# Add contacts to list
curl --request POST \
  --url "https://api.getprospect.com/api/v1/lists/{listId}/contacts" \
  --header "apiKey: yourApiKey" \
  --header "Content-Type: application/json" \
  --data '{"contactIds": ["contact-id-1", "contact-id-2"]}'
```

### Health check
```bash
curl --request GET \
  --url "https://api.getprospect.com/api/v1/health/test" \
  --header "apiKey: yourApiKey"
```
