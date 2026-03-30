### OpenWeb Ninja APIs — Sales-Relevant Reference

OpenWeb Ninja provides 30+ REST APIs for real-time public web data extraction, including contact scraping, email search, local business data, web search, and social profile discovery.

> **Note**: Best-effort from publicly available pages. OpenWeb Ninja docs are JS-rendered and couldn't be fully extracted. Official docs: https://www.openwebninja.com/documentation. Individual API pages: https://www.openwebninja.com/api/{api-name}. Also available on the RapidAPI marketplace.

---

## Base URL

```
Not confirmed — OpenWeb Ninja docs are JS-rendered and the exact base URL could not be extracted.
Check official documentation or your RapidAPI dashboard for the correct base URL.
```

---

### Authentication

**Gap**: The exact authentication header format is not confirmed from public docs. Most likely either:

- **RapidAPI**: `X-RapidAPI-Key` header (standard RapidAPI auth)
- **Portal (app.openwebninja.com)**: Likely a custom API key header

Check your account dashboard at https://app.openwebninja.com or your RapidAPI subscription for the correct auth method.

---

### Pricing Tiers

Most APIs share similar pricing tiers (exact allocations vary per API — see individual endpoints below):

| Tier | Price | Typical Allocation |
|---|---|---|
| Free | $0/mo | 50–500 requests/mo |
| Pro | $25/mo | 10K–20K requests/mo |
| Ultra | $75/mo | 50K–100K requests/mo |
| Mega | $150/mo | 200K–300K requests/mo |
| Pay-As-You-Go | Varies | Per-request pricing |

---

### Error Handling

Not documented in publicly available content. Standard HTTP status codes are expected. Check official docs for error response format and codes.

---

### Endpoints

---

#### 1. Website Contacts Scraper

Extract emails, phone numbers, and social media links from any domain.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes | Website domain to scrape |
| `query` | string | No | Keyword or name for targeted lookup |

**Response fields**:

| Field | Type | Description |
|---|---|---|
| `domain` | string | The scraped domain |
| `emails` | array | List of email objects with `value` and `sources` |
| `phone_numbers` | array | List of phone number objects with `value` and `sources` |
| `facebook` | string | Facebook profile URL |
| `instagram` | string | Instagram profile URL |
| `twitter` | string | Twitter/X profile URL |
| `linkedin` | string | LinkedIn profile URL |

**Rate limits**:

| Tier | Rate |
|---|---|
| Free | 1 req/sec |
| Pro | 5 req/sec |
| Ultra | 10 req/sec |
| Mega | 20 req/sec |

**Pricing**: Free 50/mo, Pro $25 (10K), Ultra $75 (50K), Mega $150 (200K), PAYG $0.005/req

---

#### 2. Email Search

Real-time web search for publicly available email addresses associated with a company or person.

**Parameters**:

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | string | Yes | Company name or person name to search |
| email domain filter | string | No | Filter results to a specific email domain |

**Response**: Array of email strings.

```json
["email1@domain.com", "email2@domain.com"]
```

**Response time**: 1–2 seconds

**Rate limits**: Same as Website Contacts Scraper (Free 1/sec, Pro 5/sec, Ultra 10/sec, Mega 20/sec)

**Pricing**: Free 50/mo, Pro $25 (10K), Ultra $75 (50K), Mega $150 (200K), PAYG $0.005/req

---

#### 3. Local Business Data (Google Maps)

Search and retrieve detailed business information from Google Maps. Multiple endpoints for different data types.

**Endpoints**:

| Endpoint | Description |
|---|---|
| Business Search | Search businesses by query and location |
| Nearby Search | Find businesses near a geographic point |
| Reviews | Retrieve business reviews |
| Photos | Retrieve business photos |
| Posts | Retrieve business posts |
| Autocomplete | Location/business autocomplete suggestions |
| Bulk Search | Batch business search |

**Response fields** (40+ fields per business):

| Field | Type | Description |
|---|---|---|
| `business_id` | string | Unique business identifier |
| `place_id` | string | Google Place ID |
| `google_mid` | string | Google Maps ID |
| `name` | string | Business name |
| `phone_number` | string | Business phone number |
| `full_address` | string | Complete address |
| `latitude` | float | Geographic latitude |
| `longitude` | float | Geographic longitude |
| `rating` | float | Average rating |
| `review_count` | int | Number of reviews |
| `opening_hours` | object | Business hours |
| `email` | string | Business email (if available) |
| `facebook` | string | Facebook URL |
| `instagram` | string | Instagram URL |
| `twitter` | string | Twitter/X URL |
| `linkedin` | string | LinkedIn URL |
| `photos` | array | Business photos |
| `reviews` | array | Business reviews |
| `posts` | array | Business posts |

**Rate limits**:

| Tier | Rate |
|---|---|
| Free | 1,000 req/hr |
| Pro | 5 req/sec |
| Ultra | 8 req/sec |
| Mega | 10 req/sec |

**Pricing**: Free 500 businesses/mo, Pro $25 (20K), Ultra $75 (100K), Mega $150 (300K), PAYG $0.004/business

---

#### 4. Real-Time Web Search

Google SERP results including organic results, knowledge graph, AI overviews, AI Mode, videos, places, news, People Also Ask, and related searches.

**Capabilities**:

- Up to 500 organic results per query
- Localized by region and language
- Bulk search support

**Result types**:

| Type | Description |
|---|---|
| Organic | Standard search results |
| Knowledge Graph | Entity/knowledge panel data |
| AI Overviews | Google AI-generated summaries |
| AI Mode | Google AI Mode results |
| Videos | Video results |
| Places | Local business results |
| News | News article results |
| People Also Ask | Related questions and answers |
| Related Searches | Suggested related queries |

**Response time**: 0.5–2 seconds

**Rate limits**:

| Tier | Rate |
|---|---|
| Free | 1 req/sec |
| Pro | 10 req/sec |
| Ultra | 20 req/sec |
| Mega | 30 req/sec |

**Pricing**: Free 100/mo, Pro $25 (10K), Ultra $75 (50K), Mega $150 (200K), PAYG $0.005/req

---

#### 5. Social Links Search

Find social media profiles for companies or people.

> **Gap**: Exact endpoint, parameters, and response format could not be confirmed from publicly available documentation. Check official docs at https://www.openwebninja.com/documentation for details.

---

#### 6. Web Unblocker

Fetch complete HTML from any webpage with JavaScript rendering, rotating proxies, and smart retries. Useful for scraping pages that block direct requests.

**Capabilities**:

- Full JavaScript rendering
- Rotating proxy infrastructure
- Smart retry logic
- Anti-bot bypass

---

#### 7. JSearch (Jobs API)

Access 200M+ job postings aggregated from LinkedIn, Indeed, Glassdoor, ZipRecruiter, and other major job boards. Companion Job Salary Data API available for compensation intelligence.

---

### Webhook Support

Not documented. No webhook or callback support found in publicly available content.

---

### Known Documentation Gaps

| Gap | Details |
|---|---|
| Base URL | Exact format not confirmed (JS-rendered docs) |
| Authentication | Header format not confirmed from public docs |
| Social Links Search | Endpoint details not found |
| Pagination | Format not documented in fetched content |
| Error codes | Not documented in fetched content |
| Webhook support | None documented |

---

## Quick Reference — Common Workflows

### Scrape contacts from a domain
```bash
# Exact URL format not confirmed — illustrative example
# Replace {base_url} and auth header with values from your dashboard
curl --request GET \
  --url "{base_url}/website-contacts?domain=example.com" \
  --header "X-RapidAPI-Key: yourApiKey"
```

**Response** (expected):
```json
{
  "domain": "example.com",
  "emails": [
    {"value": "john@example.com", "sources": ["https://example.com/contact"]},
    {"value": "sales@example.com", "sources": ["https://example.com/about"]}
  ],
  "phone_numbers": [
    {"value": "+1-555-0100", "sources": ["https://example.com/contact"]}
  ],
  "facebook": "https://facebook.com/example",
  "instagram": "https://instagram.com/example",
  "twitter": "https://twitter.com/example",
  "linkedin": "https://linkedin.com/company/example"
}
```

### Search for email addresses
```bash
curl --request GET \
  --url "{base_url}/email-search?query=Acme%20Corp" \
  --header "X-RapidAPI-Key: yourApiKey"
```

**Response** (expected):
```json
["john@acme.com", "sales@acme.com", "info@acme.com"]
```

### Search local businesses
```bash
curl --request GET \
  --url "{base_url}/local-business-search?query=coffee+shops&location=San+Francisco" \
  --header "X-RapidAPI-Key: yourApiKey"
```

**Response** (expected — partial):
```json
{
  "data": [
    {
      "business_id": "abc123",
      "name": "Blue Bottle Coffee",
      "full_address": "66 Mint St, San Francisco, CA 94103",
      "phone_number": "+1-555-0123",
      "rating": 4.5,
      "review_count": 1200,
      "email": "sf@bluebottle.com",
      "linkedin": "https://linkedin.com/company/blue-bottle-coffee"
    }
  ]
}
```

### Real-time web search
```bash
curl --request GET \
  --url "{base_url}/web-search?query=enterprise+SaaS+companies+Series+B&num=20" \
  --header "X-RapidAPI-Key: yourApiKey"
```
