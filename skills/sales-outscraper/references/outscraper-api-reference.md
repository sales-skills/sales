### Outscraper APIs — Comprehensive Reference

Outscraper provides a REST API for scraping Google Maps, Google Search, reviews from multiple platforms (Yelp, Trustpilot, G2, Glassdoor, Capterra, Tripadvisor), Amazon products, app store reviews, contact/email enrichment, geocoding, and more.

> **Note**: Best-effort from research — Outscraper's API docs are at https://app.outscraper.com/api-docs. Verify endpoints and parameters against the official documentation.

---

## Base URLs

```
Scraping API (primary):  https://api.app.outscraper.com
Scraping API (failover): https://api.app.outscraper.cloud
Scraping API (failover): https://api.outscraper.net
Catalog API:             https://api.outscraper.com
```

The scraping API and catalog API use different base URLs. If the primary scraping URL is unreachable, retry against the failover URLs in order.

---

### Authentication

#### API Key (scraping endpoints + free catalog endpoint)

API key passed via the `X-API-KEY` header. Obtain your key from your Profile page at https://auth.outscraper.com.

```bash
curl --request GET \
  --url "https://api.app.outscraper.com/maps/search?query=restaurants+new+york&limit=5" \
  --header "X-API-KEY: YOUR_API_KEY"
```

#### OAuth2 (paid catalog endpoint — `POST /businesses`)

The paid Business Catalog endpoint uses OAuth2 authorization code flow:

- **Authorization URL**: `https://api.outscraper.com/auth/oauth/authorize`
- **Token URL**: `https://api.outscraper.com/auth/oauth/token`
- **Scope**: `businesses.read`

Flow:
1. Redirect user to the authorization URL with `scope=businesses.read` and your `client_id`
2. User authorizes access — redirected back with an authorization code
3. Exchange the code for an access token at the token URL
4. Pass the access token as a Bearer token in requests to `POST /businesses`

```bash
curl --request POST \
  --url "https://api.outscraper.com/businesses" \
  --header "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{"filters": {"country_code": "US", "types": ["restaurant"]}, "limit": 10}'
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

#### 2. Business Catalog

Pre-built database of millions of businesses — instant results without scraping. Uses a different base URL: `https://api.outscraper.com`.

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/businesses` | OAuth2 (`businesses.read`) | Business catalog lookup (paid, full access) |
| POST | `/businesses-free` | API Key (`X-API-KEY`) | Business catalog lookup (free, max 1,000 results) |

Both endpoints accept the same request body:

**Top-level parameters**:

| Parameter | Type | Default | Description |
|---|---|---|---|
| `filters` | object | | Filtering criteria (see below) |
| `limit` | integer | `10` | Max results to return (free: max 50/page, 1,000 total) |
| `cursor` | string | | Cursor for pagination (from previous response's `next_cursor`) |
| `enrichments` | object | | Enrichments to apply (contacts_n_leads, company_insights) |
| `include_total` | boolean | `false` | Include total count of matching records (increases response time) |
| `fields` | array | all | Fields to include in response (e.g. `["name", "phone", "website", "city", "rating"]`) |

**`filters` object**:

| Parameter | Type | Description | Example |
|---|---|---|---|
| `os_ids` | string[] | Outscraper business IDs to look up directly | `["b3c1f2a0d9e84f0a6c3b9d2f4e7a1c90"]` |
| `country_code` | string | Two-letter country code | `"US"` |
| `states` | string[] | States/provinces | `["CA", "NY"]` |
| `cities` | string[] | Cities | `["Los Angeles", "New York"]` |
| `counties` | string[] | Counties/boroughs | `["Kings County"]` |
| `postal_codes` | string[] | ZIP/postal codes (full or partial) | `["10001", "90"]` |
| `name` | string | Business name filter (partial match) | `"Starbucks"` |
| `name_exclude` | boolean | Exclude businesses matching `name` | `true` |
| `types` | string[] | Business categories to include | `["restaurant", "cafe"]` |
| `ignore_types` | string[] | Business categories to exclude | `["bar", "night_club"]` |
| `rating` | string | Rating filter expression | `"4.5+"` |
| `reviews` | string | Review count filter | `"100+"` |
| `has_website` | boolean | Has a website | `true` |
| `domain` | string | Filter by website domain | `"example.com"` |
| `has_phone` | boolean | Has a phone number | `true` |
| `phone` | string | Phone number filter (partial match) | `"14155550123"` |
| `business_statuses` | string[] | Business status | `["operational"]` |
| `area_service` | boolean | Area service business flag | `false` |
| `verified` | boolean | Verified business | `true` |
| `geo_filters` | object[] | Geo filters (circle, polygon, bbox) | `[{"type": "circle", "lat": 34.05, "lng": -118.24, "radius_m": 2000}]` |
| `attributes` | string[] | Business attributes | `["wheelchair_accessible", "takes_reservations"]` |
| `located_os_id` | string | Filter by nearby/related location | |
| `broad_match` | boolean | Broader matching for text/category filters | `false` |
| `business_only` | boolean | Return only businesses (exclude other entities) | `true` |

**`enrichments` object**:

| Parameter | Type | Description |
|---|---|---|
| `contacts_n_leads` | object | Include contacts/leads. Sub-params: `contacts_per_company` (int, default 3), `emails_per_contact` (int, default 1) |
| `company_insights` | boolean/object | Include company insights (revenue, employees, industry, social profiles) |

**Example — Catalog lookup with enrichments (free tier)**:
```bash
curl --request POST \
  --url "https://api.outscraper.com/businesses-free" \
  --header "X-API-KEY: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "filters": {
      "country_code": "US",
      "states": ["NY"],
      "cities": ["New York", "Buffalo"],
      "types": ["restaurant", "cafe"],
      "has_website": true,
      "has_phone": true,
      "business_statuses": ["operational"]
    },
    "enrichments": {
      "contacts_n_leads": {
        "contacts_per_company": 2,
        "emails_per_contact": 1
      },
      "company_insights": true
    },
    "limit": 10,
    "fields": ["name", "phone", "website", "city", "state", "rating", "reviews", "subtypes", "business_status", "verified", "working_hours"]
  }'
```

**Response** (200 OK):
```json
{
  "has_more": true,
  "next_cursor": "NWY3NzViYzY0YzQ0ZTlhMGU3NWNhNDRh",
  "items": [
    {
      "name": "SPoT Coffee",
      "phone": "17163322299",
      "website": "http://www.spotcoffee.com/",
      "city": "Buffalo",
      "state": "NY",
      "rating": 4.2,
      "reviews": 1431,
      "subtypes": ["Cafe", "Breakfast Restaurant", "Lunch Restaurant"],
      "business_status": "operational",
      "verified": true,
      "working_hours": {
        "Monday": ["7AM-4PM"],
        "Tuesday": ["7AM-4PM"]
      },
      "enrichments": {
        "contacts_n_leads": {
          "contacts": [
            {
              "full_name": "Christopher Chase",
              "title": "cafe manager",
              "emails": ["chase@spotcoffee.com"],
              "socials": {"linkedin": "https://linkedin.com/in/christopher-chase-460b0b224"}
            }
          ],
          "emails": ["catering@spotcoffee.com"],
          "phones": ["17163322299"],
          "socials": {
            "facebook": "https://facebook.com/spotcoffeecafe",
            "linkedin": "https://linkedin.com/company/spot-coffee"
          }
        },
        "company_insights": {
          "industry": "RESTAURANTS",
          "employees": "51-200",
          "founded_year": 1996,
          "linkedin_company_page": "https://linkedin.com/company/spotcoffee"
        }
      }
    }
  ]
}
```

**Pagination**: Loop using `next_cursor` until `has_more` is `false`:
```bash
# Page 2
curl --request POST \
  --url "https://api.outscraper.com/businesses-free" \
  --header "X-API-KEY: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{"filters": {"country_code": "US", "types": ["restaurant"]}, "limit": 50, "cursor": "NWY3NzViYzY0YzQ0ZTlhMGU3NWNhNDRh"}'
```

---

#### 3. Google Maps

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

#### 4. Google Search

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

#### 5. Contacts & Enrichment

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

#### 6. Reviews (Multi-platform)

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

#### 7. Amazon

Scrape Amazon product listings and reviews.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/amazon/products-v2` | Amazon product search |
| GET | `/amazon/reviews` | Amazon product reviews |

**`GET /amazon/products-v2` parameters**: `query[]`, `limit`, `domain`, `postal_code`

**`GET /amazon/reviews` parameters**: `query[]`, `limit`, `sort`, `filter_by_reviewer`

---

#### 8. App Store Reviews

Scrape reviews from Google Play and Apple App Store.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/google-play/reviews` | Google Play reviews |
| GET | `/appstore/reviews` | Apple App Store reviews |

**Parameters**: `query[]`, `reviews_limit` (or `limit`), `sort`, `cutoff`

---

#### 9. YouTube

Scrape YouTube comments.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/youtube-comments` | YouTube video comments |

**Parameters**: `query[]`, `per_query`, `language`, `region`

---

#### 10. Geocoding

Forward and reverse geocoding.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/geocoding` | Forward geocoding (address to coordinates) |
| GET | `/reverse-geocoding` | Reverse geocoding (coordinates to address) |

**Parameters**: `query[]` (addresses for forward, lat/lng pairs for reverse)

---

#### 11. Other Endpoints

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

### Build a lead list from the Business Catalog
```bash
# Search for operational restaurants in NYC with contacts enrichment
curl --request POST \
  --url "https://api.outscraper.com/businesses-free" \
  --header "X-API-KEY: YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "filters": {
      "country_code": "US",
      "states": ["NY"],
      "cities": ["New York"],
      "types": ["restaurant"],
      "rating": "4.0+",
      "has_website": true,
      "has_phone": true,
      "business_statuses": ["operational"]
    },
    "enrichments": {
      "contacts_n_leads": {"contacts_per_company": 3, "emails_per_contact": 2},
      "company_insights": true
    },
    "limit": 50,
    "fields": ["name", "phone", "website", "city", "state", "rating", "reviews", "subtypes"]
  }'
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
