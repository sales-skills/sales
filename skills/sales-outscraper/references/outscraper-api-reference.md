### Outscraper APIs — Comprehensive Reference

Outscraper provides a REST API for scraping Google Maps, Google Search, reviews from multiple platforms (Yelp, Trustpilot, G2, Glassdoor, Capterra, Tripadvisor), Amazon products, app store reviews, contact/email enrichment, geocoding, and more.

> **Note**: Best-effort from research — Outscraper's API docs are at https://app.outscraper.com/api-docs. Verify endpoints and parameters against the official documentation.

---

## Base URLs

```
Primary:   https://api.app.outscraper.com
Failover:  https://api.app.outscraper.cloud
Failover:  https://api.outscraper.net
```

If the primary URL is unreachable, retry against the failover URLs in order.

---

### Authentication

API key passed via the `X-API-KEY` header. Obtain your key from your Profile page at https://auth.outscraper.com.

```bash
curl --request GET \
  --url "https://api.app.outscraper.com/maps/search?query=restaurants+new+york&limit=5" \
  --header "X-API-KEY: YOUR_API_KEY"
```

---

### Rate Limits

- **Soft limit**: ~20 requests per second (scalable on request)
- **Batching**: Most endpoints accept an array of queries (`query[]`), supporting up to 25 queries per request
- Contact Outscraper support to increase rate limits for high-volume use cases

---

### Async Pattern

Most scraping endpoints are asynchronous by default for large requests. The flow is:

1. **Submit request** — The endpoint returns a request ID immediately
2. **Poll for results** — Call `GET /requests/{id}` to check status and retrieve results
3. **Or use a webhook** — Pass a `webhook` URL parameter to receive results via POST when the task completes

Set `async_request=false` on supported endpoints to get synchronous (blocking) results for small queries.

---

### Common Parameters

These parameters are available across all scraping endpoints:

| Parameter | Type | Description |
|---|---|---|
| `async_request` | bool | Return immediately with request ID instead of waiting |
| `webhook` | string | URL to POST results to when async task completes |
| `fields` | string[] | Specify which fields to return in the response |
| `ui` | bool | Tag request as a UI task |
| `tag` | string | Tag for organizing requests |

---

### Pagination

- **Tasks/Requests endpoints**: Use `lastId` or `skip` + `pageSize` parameters
- **Scraping endpoints**: Use `limit` to control result count per query

---

### Error Handling

Standard HTTP status codes. On failure, the response includes:

```json
{
  "error": true,
  "errorMessage": "Description of the error"
}
```

**Common HTTP status codes**:

| Status | Meaning |
|---|---|
| 200 | Success |
| 202 | Accepted (async task queued) |
| 400 | Bad request — invalid parameters |
| 401 | Unauthorized — invalid or missing API key |
| 429 | Too many requests — rate limit exceeded |
| 500 | Internal server error |

---

### Endpoints

---

#### 1. Platform / Tasks

Manage and monitor your scraping tasks and request history.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | List UI tasks |
| GET | `/requests` | Request history |
| GET | `/requests/{id}` | Get request archive/results |

**Parameters for `/tasks`**: `query`, `lastId`, `pageSize`

**Parameters for `/requests`**: `type` (`running` or `finished`), `skip`, `pageSize`

---

#### 2. Google Maps

Search Google Maps places, extract reviews, photos, and directions.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/google-maps-search` | Search Google Maps places (v2) |
| GET | `/maps/search` | Google Maps search (v1) |
| GET | `/maps/reviews-v3` | Google Maps reviews |
| GET | `/maps/photos-v3` | Google Maps photos |
| GET | `/maps/directions` | Directions and traffic data |

**`POST /google-maps-search` parameters**:

| Parameter | Type | Description |
|---|---|---|
| `query[]` | string[] | Search queries (up to 25) |
| `limit` | int | Max results per query |
| `drop_duplicates` | bool | Remove duplicate places |
| `language` | string | Language code (e.g., `en`) |
| `region` | string | Region code (e.g., `US`) |
| `extract_contacts` | bool | Scrape emails/contacts from websites |
| `enrichment[]` | string[] | Additional enrichment options |

**`GET /maps/reviews-v3` parameters**:

| Parameter | Type | Description |
|---|---|---|
| `query[]` | string[] | Place IDs or search queries |
| `reviews_limit` | int | Max reviews per place |
| `limit` | int | Max places to process |
| `sort` | string | `most_relevant`, `newest`, `highest`, or `lowest` |
| `cutoff` | int | Unix timestamp — only return reviews newer than this |
| `language` | string | Language code |
| `region` | string | Region code |

**`GET /maps/directions` parameters**:

| Parameter | Type | Description |
|---|---|---|
| `query[]` | string[] | Origin-destination pairs |
| `departure_time` | string | Departure time |
| `finish_time` | string | End time for interval queries |
| `interval` | int | Interval between checks (minutes) |
| `travel_mode` | string | `best`, `driving`, `walking`, `bicycling`, or `transit` |

**Example — Google Maps search**:
```bash
curl --request GET \
  --url "https://api.app.outscraper.com/maps/search?query=coffee+shops+san+francisco&limit=10&language=en&region=US" \
  --header "X-API-KEY: YOUR_API_KEY"
```

**Response** (200 OK, synchronous):
```json
{
  "id": "request-id-123",
  "status": "Success",
  "data": [
    [
      {
        "name": "Blue Bottle Coffee",
        "full_address": "66 Mint St, San Francisco, CA 94103",
        "phone": "+14158438901",
        "site": "https://bluebottlecoffee.com",
        "type": "Coffee shop",
        "rating": 4.5,
        "reviews": 1234,
        "latitude": 37.7821,
        "longitude": -122.4056
      }
    ]
  ]
}
```

**Example — Google Maps reviews**:
```bash
curl --request GET \
  --url "https://api.app.outscraper.com/maps/reviews-v3?query=ChIJN1t_tDeuEmsRUsoyG83frY4&reviews_limit=20&sort=newest&language=en" \
  --header "X-API-KEY: YOUR_API_KEY"
```

**Response**:
```json
{
  "id": "request-id-456",
  "status": "Success",
  "data": [
    [
      {
        "name": "Business Name",
        "reviews_data": [
          {
            "author_title": "John D.",
            "review_rating": 5,
            "review_text": "Great experience!",
            "review_datetime_utc": "2026-03-15 10:30:00",
            "owner_answer": "Thank you!"
          }
        ]
      }
    ]
  ]
}
```

---

#### 3. Google Search

Scrape Google Search results and Google News.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/google-search-v3` | Google Search results |
| GET | `/google-search-news` | Google News search |

**Parameters**:

| Parameter | Type | Description |
|---|---|---|
| `query[]` | string[] | Search queries |
| `pages_per_query` | int | Number of result pages per query |
| `uule` | string | Location encoding for localized results |
| `language` | string | Language code |
| `region` | string | Region code |
| `tbs` | string | Time-based search filter (News only) |

---

#### 4. Contacts & Enrichment

Find and validate emails, phone numbers, company information, and leads.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/emails-and-contacts` | Scrape emails/contacts from websites |
| GET | `/contacts-and-leads` | Find leads for companies |
| GET | `/company-insights` | Company enrichment |
| GET | `/email-validator` | Validate email addresses |
| GET | `/phones-enricher` | Phone enrichment via Whitepages |
| GET | `/company-website-finder` | Find company websites |

**`GET /contacts-and-leads` parameters**:

| Parameter | Type | Description |
|---|---|---|
| `query[]` | string[] | Company names, domains, or LinkedIn URLs |
| `preferred_contacts` | string | Contact type preference |
| `contacts_per_company` | int | Max contacts to return per company |

**`GET /company-insights` parameters**:

| Parameter | Type | Description |
|---|---|---|
| `query[]` | string[] | Company names or domains |
| `enrichment[]` | string[] | Enrichment data types to include |

**Example — Emails and contacts**:
```bash
curl --request GET \
  --url "https://api.app.outscraper.com/emails-and-contacts?query=example.com&query=anothersite.com" \
  --header "X-API-KEY: YOUR_API_KEY"
```

**Response**:
```json
{
  "id": "request-id-789",
  "status": "Success",
  "data": [
    [
      {
        "query": "example.com",
        "emails": ["info@example.com", "sales@example.com"],
        "phones": ["+15551234567"],
        "socials": {
          "linkedin": "https://linkedin.com/company/example",
          "twitter": "https://twitter.com/example"
        }
      }
    ]
  ]
}
```

**Example — Email validation**:
```bash
curl --request GET \
  --url "https://api.app.outscraper.com/email-validator?query=test@example.com&query=invalid@fake-domain.xyz" \
  --header "X-API-KEY: YOUR_API_KEY"
```

**Response**:
```json
{
  "id": "request-id-012",
  "status": "Success",
  "data": [
    {
      "query": "test@example.com",
      "is_valid": true,
      "is_disposable": false,
      "is_role_based": false,
      "mx_found": true
    },
    {
      "query": "invalid@fake-domain.xyz",
      "is_valid": false,
      "is_disposable": false,
      "is_role_based": false,
      "mx_found": false
    }
  ]
}
```

**Example — Contacts and leads**:
```bash
curl --request GET \
  --url "https://api.app.outscraper.com/contacts-and-leads?query=outscraper.com&contacts_per_company=5" \
  --header "X-API-KEY: YOUR_API_KEY"
```

**Response**:
```json
{
  "id": "request-id-345",
  "status": "Success",
  "data": [
    [
      {
        "query": "outscraper.com",
        "contacts": [
          {
            "name": "Jane Smith",
            "title": "VP of Sales",
            "email": "jane@outscraper.com",
            "linkedin": "https://linkedin.com/in/janesmith"
          }
        ]
      }
    ]
  ]
}
```

---

#### 5. Reviews (Multi-platform)

Scrape reviews from Yelp, Tripadvisor, Trustpilot, G2, Glassdoor, and Capterra.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/yelp-search` | Yelp search |
| GET | `/yelp/reviews` | Yelp reviews |
| GET | `/tripadvisor/reviews` | Tripadvisor reviews |
| GET | `/trustpilot` | Trustpilot search |
| GET | `/trustpilot/reviews` | Trustpilot reviews |
| GET | `/g2/reviews` | G2 reviews |
| GET | `/glassdoor/reviews` | Glassdoor reviews |
| GET | `/capterra-reviews` | Capterra reviews |

**Common review parameters**:

| Parameter | Type | Description |
|---|---|---|
| `query[]` | string[] | Business names, URLs, or IDs |
| `limit` | int | Max results or reviews to return |
| `sort` | string | Sort order (varies by platform) |
| `cutoff` | int | Unix timestamp — only return reviews newer than this |

**Trustpilot-specific**: `skip`, `enrichment[]`, `languages`

---

#### 6. Amazon

Scrape Amazon product listings and reviews.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/amazon/products-v2` | Amazon product search |
| GET | `/amazon/reviews` | Amazon product reviews |

**`GET /amazon/products-v2` parameters**: `query[]`, `limit`, `domain`, `postal_code`

**`GET /amazon/reviews` parameters**: `query[]`, `limit`, `sort`, `filter_by_reviewer`

---

#### 7. App Store Reviews

Scrape reviews from Google Play and Apple App Store.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/google-play/reviews` | Google Play reviews |
| GET | `/appstore/reviews` | Apple App Store reviews |

**Parameters**: `query[]`, `reviews_limit` (or `limit`), `sort`, `cutoff`

---

#### 8. YouTube

Scrape YouTube comments.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/youtube-comments` | YouTube video comments |

**Parameters**: `query[]`, `per_query`, `language`, `region`

---

#### 9. Geocoding

Forward and reverse geocoding.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/geocoding` | Forward geocoding (address to coordinates) |
| GET | `/reverse-geocoding` | Reverse geocoding (coordinates to address) |

**Parameters**: `query[]` (addresses for forward, lat/lng pairs for reverse)

---

#### 10. Other Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/whitepages-phones` | Phone lookup via Whitepages |
| GET | `/whitepages-addresses` | Address lookup via Whitepages |
| GET | `/similarweb` | Website traffic data |
| GET | `/yellowpages-search` | Yellow Pages search |

**`GET /yellowpages-search` parameters**: `query[]`, `location`, `limit`, `region`

---

### Webhook Support

Pass `webhook=https://your-url.com/callback` on any async endpoint. When the task completes, Outscraper POSTs the JSON results to your URL.

```bash
curl --request GET \
  --url "https://api.app.outscraper.com/maps/search?query=dentists+chicago&limit=20&async_request=true&webhook=https://your-app.com/outscraper-callback" \
  --header "X-API-KEY: YOUR_API_KEY"
```

The initial response returns the request ID:
```json
{
  "id": "request-id-abc",
  "status": "Pending"
}
```

When complete, Outscraper POSTs the full results to your webhook URL.

---

## Quick Reference — Common Workflows

### Search Google Maps and extract contacts
```bash
# Search for businesses with contact extraction
curl --request GET \
  --url "https://api.app.outscraper.com/maps/search?query=marketing+agencies+austin+tx&limit=25&extract_contacts=true&language=en&region=US" \
  --header "X-API-KEY: YOUR_API_KEY"
```

### Collect reviews and poll for results
```bash
# Step 1: Submit async review request
curl --request GET \
  --url "https://api.app.outscraper.com/maps/reviews-v3?query=ChIJN1t_tDeuEmsRUsoyG83frY4&reviews_limit=100&sort=newest&async_request=true" \
  --header "X-API-KEY: YOUR_API_KEY"

# Step 2: Poll for results
curl --request GET \
  --url "https://api.app.outscraper.com/requests/REQUEST_ID_HERE" \
  --header "X-API-KEY: YOUR_API_KEY"
```

### Validate emails and find leads
```bash
# Step 1: Validate email addresses
curl --request GET \
  --url "https://api.app.outscraper.com/email-validator?query=lead@prospect.com&query=info@company.com" \
  --header "X-API-KEY: YOUR_API_KEY"

# Step 2: Find additional contacts at the company
curl --request GET \
  --url "https://api.app.outscraper.com/contacts-and-leads?query=prospect.com&contacts_per_company=10" \
  --header "X-API-KEY: YOUR_API_KEY"
```
