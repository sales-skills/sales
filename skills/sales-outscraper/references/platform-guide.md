# Outscraper Platform Guide

## Google Maps Places
- **What it does**: Scrape business data from Google Maps — names, addresses, phone numbers, ratings, review counts, business hours, websites, categories, place IDs, coordinates, photos count, and more
- **Search methods**: Search by query (e.g., "restaurants in Austin, TX"), by place IDs, or by Google Maps URLs
- **Query format**: Category + location works best (e.g., "dentists, San Francisco, CA"). Supports multiple queries per request
- **Volume**: Up to 500 results per query. For larger volumes, split into more specific queries (by neighborhood, zip code, etc.)
- **Filters**: Filter by business status (open/closed), rating thresholds, review count minimums
- **Output fields**: name, full_address, city, state, zip, country, phone, website, rating, reviews_count, latitude, longitude, place_id, google_maps_url, business_hours, categories, verified, owner_title, price_range, and many more
- **Deduplication**: Outscraper automatically deduplicates results within a request

## Google Maps Reviews
- **What it does**: Extract reviews for specific businesses from Google Maps — author name, rating, review text, date, review ID, likes count, owner reply text and date
- **Input**: Pass place IDs, business names, or Google Maps URLs to specify which businesses to scrape reviews from
- **Sort options**: most_relevant, newest, highest_rating, lowest_rating
- **Filtering**: Set a cutoff date to only get reviews after a specific date, or set a reviews_limit per place to cap the number of reviews extracted
- **Review replies**: Captures owner/business reply text and reply date when present
- **Volume**: Can extract thousands of reviews per business — use reviews_limit to control volume and cost

## Google Maps Photos
- **What it does**: Extract photo URLs and metadata for Google Maps businesses
- **Use cases**: Competitive analysis, visual auditing, local SEO research

## Google Maps Directions
- **What it does**: Get route and traffic data between locations via Google Maps
- **Use cases**: Territory planning, delivery route optimization, travel time estimation

## Google Search
- **What it does**: Scrape Google Search results — organic listings, paid ads, featured snippets, People Also Ask (PAA), knowledge panels, local pack results
- **UULE support**: Pass UULE codes for location-specific results (simulate searching from any location without being there)
- **Output**: title, link, snippet, position, domain for organic results; question/answer pairs for PAA; ad copy and URLs for paid results
- **Pagination**: Control number of results pages to scrape

## Google Search News
- **What it does**: Scrape Google News search results — headlines, sources, dates, links
- **Use cases**: Media monitoring, competitor news tracking, industry trend research

## Business Catalog (Instant Database)
- **What it does**: Pre-built database of millions of businesses — instant results without scraping. Query by location, category, rating, and dozens of other filters. Two tiers: free and paid
- **Free tier** (`POST /businesses-free`): API key auth (`X-API-KEY`), max 50 results per page, 1,000 total results. Good for testing and lightweight apps
- **Paid tier** (`POST /businesses`): OAuth2 auth (authorization code flow, scope `businesses.read`), higher limits. Full access to all fields and enrichments
- **Base URL**: `https://api.outscraper.com` (different from the scraping API)
- **Filters**: `country_code`, `states`, `cities`, `counties`, `postal_codes`, `name` (with `name_exclude`), `types`/`ignore_types`, `rating` (e.g. `"4.5+"`), `reviews` (e.g. `"100+"`), `has_website`, `has_phone`, `domain`, `phone`, `business_statuses`, `area_service`, `verified`, `geo_filters` (circle/polygon/bounding box), `attributes` (e.g. `wheelchair_accessible`, `takes_reservations`), `located_os_id`, `broad_match`, `business_only`
- **Enrichments**: `contacts_n_leads` (with `contacts_per_company` and `emails_per_contact` sub-params) and `company_insights` (revenue, employee count, industry, social profiles)
- **Pagination**: Cursor-based — response includes `next_cursor` and `has_more`. Pass `cursor` in the next request. Limit 1–50 results per page
- **Field selection**: Pass a `fields` array to return only specific fields (e.g. `["name", "phone", "website", "city", "rating"]`)
- **Response fields**: name, phone, website, rating, reviews, subtypes, business_status, city, state, postal_code, country_code, time_zone, working_hours, photo, photos_count, menu_link, location_link, reviews_link, plus_code, verified, about (detailed attributes)
- **Use cases**: Build lead lists instantly without waiting for scraping jobs, filter businesses by precise criteria, enrich with contacts and company insights in a single request

## Emails & Contacts
- **What it does**: Scrape email addresses and contact information from websites or domains
- **Input**: Pass website URLs or domain names
- **Output**: Extracted email addresses, phone numbers, social media links found on the target websites
- **Use cases**: Building contact lists from company websites, lead generation from industry directories

## Contacts & Leads
- **What it does**: Find emails, phone numbers, and social profiles for companies — up to 3 contacts per company
- **Input**: Company names, domains, or LinkedIn URLs
- **Output**: Contact name, title, email, phone, LinkedIn profile, and other social profiles
- **Volume**: Returns up to 3 contacts per company

## Company Insights
- **What it does**: Enrich company data with firmographic information — industry, employee count, revenue range, tech stack, social profiles, founding year
- **Input**: Company names or domains
- **Output**: Comprehensive company profile including firmographics, technology stack, social media profiles
- **Use cases**: Account research, ICP matching, competitive intelligence

## Email Validation
- **What it does**: Verify email deliverability — returns valid, invalid, or risky status
- **Checks**: MX record validation, SMTP verification, disposable email detection, catch-all detection
- **Use cases**: Clean email lists before outreach, reduce bounce rates, protect sender reputation

## Phone Enrichment
- **What it does**: Whitepages-based phone number lookup — returns name, address, carrier, line type
- **Input**: Phone numbers
- **Output**: Owner name, address, carrier, line type (mobile/landline/VoIP)

## Amazon Products & Reviews
- **Products**: Scrape Amazon product data — title, price, rating, review count, ASIN, seller info, product features
- **Reviews**: Extract Amazon customer reviews — author, rating, title, text, date, verified purchase status
- **Use cases**: Competitor product research, pricing intelligence, customer sentiment analysis

## Review Platforms
- **Yelp**: Search businesses and extract reviews (Yelp search + Yelp reviews endpoints)
- **Tripadvisor**: Extract reviews from Tripadvisor listings
- **G2**: Extract software reviews from G2 profiles
- **Trustpilot**: Search Trustpilot business profiles and extract reviews (separate search and reviews endpoints)
- **Glassdoor**: Extract company reviews from Glassdoor
- **Capterra**: Extract software reviews from Capterra
- **Apple App Store**: Extract app reviews
- **Google Play**: Extract app reviews
- **Use cases**: Competitive intelligence, reputation monitoring, customer sentiment analysis, social proof gathering

## YouTube Comments
- **What it does**: Extract comments from YouTube videos — author, text, date, likes, reply count
- **Use cases**: Audience research, sentiment analysis, content strategy

## Geocoding / Reverse Geocoding
- **Geocoding**: Convert addresses to coordinates (latitude/longitude)
- **Reverse geocoding**: Convert coordinates to addresses
- **Use cases**: Address validation, location data enrichment, territory mapping

## Additional Modules
- **SimilarWeb**: Get website traffic estimates — monthly visits, traffic sources, geography, top pages
- **Company Website Finder**: Find company websites from company names
- **Yellow Pages Search**: Scrape business listings from Yellow Pages
- **Trustpilot Search**: Search and enrich Trustpilot business profiles
- **Whitepages**: Phone and address lookup via Whitepages data

## Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Place** | Google Maps business listing | name, full_address, phone, website, rating, reviews_count, place_id, latitude, longitude, categories, business_hours |
| **Review** | Customer review from any platform | author, rating, text, date, review_id, likes_count, owner_reply, owner_reply_date |
| **Contact** | Person associated with a company | name, title, email, phone, linkedin_url, company |
| **Company** | Enriched company profile | name, domain, industry, employees_count, revenue_range, tech_stack, social_profiles |
| **Email Validation Result** | Email verification outcome | email, status (valid/invalid/risky), mx_found, smtp_check, disposable, catch_all |
| **Search Result** | Google Search organic listing | title, link, snippet, position, domain |
| **Product** | Amazon or marketplace product | title, price, rating, reviews_count, asin, seller, features |
| **Geocode Result** | Address/coordinate mapping | address, latitude, longitude, place_id, formatted_address |
| **Business Catalog Record** | Instant business database record (not scraped) | name, phone, website, rating, reviews, subtypes, city, state, postal_code, country_code, business_status, verified, working_hours, enrichments (contacts_n_leads, company_insights) |
| **Task** | Async processing job | id, status, results_url, created_at, completed_at |

## API quick reference

- **Base URL (scraping)**: `https://api.app.outscraper.com` (primary), failover: `https://api.app.outscraper.cloud`, `https://api.outscraper.net`
- **Base URL (catalog)**: `https://api.outscraper.com` — used by Business Catalog endpoints only
- **Authentication (scraping)**: `X-API-KEY: {your_api_key}` header on all scraping requests
- **Authentication (catalog)**: API key for the free endpoint (`X-API-KEY` header); OAuth2 authorization code flow for the paid endpoint (authorization URL: `https://api.outscraper.com/auth/oauth/authorize`, token URL: `https://api.outscraper.com/auth/oauth/token`, scope: `businesses.read`)
- **Rate limits**: ~20 QPS soft limit (scalable on request for high-volume accounts)
- **Batching**: Up to 25 queries per request array — pass multiple queries in a single API call to reduce overhead
- **Async pattern**: Most endpoints return immediately with a request ID. Poll `GET /requests/{id}` for results, or use the `webhook` parameter to receive a POST callback when the task completes
- **Key endpoints**:
  - `POST /businesses` — Business Catalog lookup (paid, OAuth2) — instant database, not scraping
  - `POST /businesses-free` — Business Catalog lookup (free, API key) — max 1,000 results
  - `GET /google-maps-search` or `POST /google-maps-search` — Search Google Maps for businesses
  - `GET /maps/reviews-v3` — Extract Google Maps reviews
  - `GET /maps/photos-v3` — Extract Google Maps photos
  - `GET /maps/directions` — Get directions and traffic data
  - `GET /google-search-v3` — Scrape Google Search results
  - `GET /google-search-news` — Scrape Google News results
  - `GET /emails-and-contacts` — Scrape emails and contacts from websites
  - `GET /contacts-and-leads` — Find contacts for companies
  - `GET /company-insights` — Enrich company data
  - `GET /email-validator` — Validate email addresses
  - `GET /phones-enricher` — Phone enrichment (Whitepages)
  - `GET /amazon/products-v2` — Scrape Amazon products
  - `GET /amazon/reviews` — Scrape Amazon reviews
  - `GET /yelp-search` — Search Yelp businesses
  - `GET /yelp/reviews` — Extract Yelp reviews
  - `GET /tripadvisor/reviews` — Extract Tripadvisor reviews
  - `GET /trustpilot` — Search Trustpilot businesses
  - `GET /trustpilot/reviews` — Extract Trustpilot reviews
  - `GET /glassdoor/reviews` — Extract Glassdoor reviews
  - `GET /capterra-reviews` — Extract Capterra reviews
  - `GET /google-play/reviews` — Extract Google Play reviews
  - `GET /appstore/reviews` — Extract Apple App Store reviews
  - `GET /g2/reviews` — Extract G2 reviews
  - `GET /youtube-comments` — Extract YouTube comments
  - `GET /geocoding` — Geocode addresses
  - `GET /reverse-geocoding` — Reverse geocode coordinates
  - `GET /whitepages-phones` — Whitepages phone lookup
  - `GET /whitepages-addresses` — Whitepages address lookup
  - `GET /similarweb` — Get SimilarWeb traffic data
  - `GET /company-website-finder` — Find company websites
  - `GET /yellowpages-search` — Search Yellow Pages
  - `GET /tasks` — List UI tasks
  - `GET /requests` — Request history and results polling
- **SDKs**: Python (`pip install outscraper`), PHP, Node.js, Ruby, Go, Java
- **Docs**: outscraper.com/docs

## Integrations

| Category | Tools |
|----------|-------|
| **Automation** | Zapier (trigger on task finished; actions for Google Maps search, Google News, Amazon reviews), n8n, Latenode, Pipedream |
| **Export formats** | CSV, XLSX, JSON — downloadable from the UI or via API response |
| **Webhook** | `webhook` parameter on most endpoints — POST results to your URL when async task completes |

## Pricing (pay-as-you-go, no subscriptions — verify current pricing at outscraper.com)

| Tier | Price | Volume | Notes |
|------|-------|--------|-------|
| **Free** | $0 | 500 Google Maps records + 25 Google Search queries/month | Resets every 30 days |
| **Medium** | $0.002/record | 501–50K records | Per-record billing |
| **Business** | $0.001/record | 50K+ records | Volume discount tier |

**Key pricing notes**:
- Pay-as-you-go model — no monthly subscriptions, pay only for what you use
- Different modules have different per-record costs (Google Maps, reviews, email validation, etc. may vary)
- Tiers reset every 30 days
- Free tier is generous enough for testing and small projects
