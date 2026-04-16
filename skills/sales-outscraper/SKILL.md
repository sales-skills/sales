---
name: sales-outscraper
description: "Outscraper platform help — data extraction platform that scrapes Google Maps, reviews, and 50+ sources plus an instant Business Catalog database. Use when Google Maps scraping isn't returning enough businesses, reviews aren't extracting correctly, email/contact scraping misses results, company enrichment data is incomplete, email validation flags too many false positives, or the Outscraper API isn't working as expected. Do NOT use for general prospect list strategy (use /sales-prospect-list), cross-platform enrichment strategy (use /sales-enrich), or email deliverability strategy (use /sales-deliverability)."
argument-hint: "[describe what you need help with in Outscraper]"
license: MIT
version: 1.0.0
tags: [sales, scraping, google-maps, reviews, platform]
github: "https://github.com/outscraper"
---
# Outscraper Platform Help

Help the user with Outscraper platform questions — from Google Maps scraping and reviews extraction through email/contact scraping, lead enrichment, company insights, email validation, Amazon scraping, review platform scraping, geocoding, and API integration. Outscraper is a data extraction and enrichment platform that scrapes Google Maps, reviews, and 50+ internet sources. Founded in 2018 by Vlad May and Vlad Romanov, based in Bee Cave, TX. Used by 180K+ businesses.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Outscraper do you need help with?**
   - A) Google Maps scraping — search and extract business data (names, addresses, phones, ratings, hours, websites, categories)
   - B) Business Catalog — instant business database lookups by location, category, rating (pre-built database, not scraping)
   - C) Reviews extraction — Google Maps reviews, Yelp, Tripadvisor, G2, Trustpilot, Glassdoor, Capterra, App Store, Google Play
   - D) Email & contact scraping — extract emails and contact info from websites or domains
   - E) Lead enrichment — find emails, phones, social profiles for companies (Contacts & Leads)
   - F) Company insights — firmographic data, tech stack, social profiles
   - G) Email validation — verify email deliverability (valid/invalid/risky)
   - H) Amazon scraping — product data and customer reviews
   - I) Search scraping — Google Search (organic, ads, snippets, PAA), Google News
   - J) Geocoding — address validation, coordinate lookup, reverse geocoding
   - K) Integrations / API — REST API, webhooks, SDKs, Zapier, n8n, Pipedream
   - L) Account / Billing — pricing tiers, usage, free tier
   - M) Something else — describe it

2. **What's your role?**
   - A) Sales / business development
   - B) Marketing / growth
   - C) Developer / engineer
   - D) Data analyst / researcher
   - E) Agency / freelancer
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General prospect list strategy / building target lists -> `/sales-prospect-list`
- Cross-platform datan enrichment strategy -> `/sales-enrich`
- Email deliverability / verification strategy (not Outscraper-specific) -> `/sales-deliverability`
- Connecting Outscraper to CRM or other tools via middleware -> `/sales-integration`
- Apollo.io-specific questions -> `/sales-apollo`
- Hunter-specific questions -> `/sales-hunter`
- Prospeo-specific questions -> `/sales-prospeo`
- Seamless.AI-specific questions -> `/sales-seamless`
- Tomba-specific questions -> `/sales-tomba`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Outscraper platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Scraping Google Maps businesses for a target market**:
   1. Define your search queries — use "category, location" format (e.g., "dentists, Austin, TX" or "plumbers, 90210")
   2. For large areas, split by neighborhood or zip code to stay under the 500-result-per-query cap and get more comprehensive coverage
   3. Call `GET /google-maps-search` with your query array (up to 25 queries per request)
   4. Set `limit` parameter to control how many results per query (default 20, max 500)
   5. Results include name, address, phone, website, rating, review count, hours, categories, and place_id
   6. Use place_ids from results to follow up with reviews extraction or photos extraction
   7. Deduplicate across queries if your search areas overlap — Outscraper deduplicates within a request but not across separate requests

2. **Extracting and analyzing Google Maps reviews**:
   1. Get place_ids for target businesses (either from a previous Google Maps search or by looking them up manually)
   2. Call `GET /maps/reviews-v3` with place_ids, set `sort` (newest, most_relevant, highest_rating, lowest_rating)
   3. Use `cutoff` parameter to only get reviews after a specific date — useful for ongoing monitoring
   4. Set `reviewsLimit` to cap reviews per place (controls cost for businesses with thousands of reviews)
   5. Response includes author, rating, text, date, likes, and owner reply data
   6. For sentiment analysis, export reviews and analyze trends in ratings over time, common keywords, and response patterns

3. **Building a lead list with emails and contacts**:
   1. Start with Google Maps search to find businesses in your target market — extract business names, websites, and domains
   2. Pass the extracted domains to `GET /emails-and-contacts` to scrape email addresses from company websites
   3. For deeper enrichment, use `GET /contacts-and-leads` with company names or domains to find up to 3 contacts per company with names, titles, emails, and phone numbers
   4. Validate all collected emails using `GET /email-validator` before outreach — remove invalid and risky addresses
   5. Enrich company data with `GET /company-insights` for firmographics, tech stack, and social profiles to prioritize leads by ICP fit
   6. Export the combined dataset for import into your CRM or outreach tool

4. **Setting up webhook callbacks for async results**:
   1. Most Outscraper endpoints process asynchronously — they return a request ID immediately
   2. Instead of polling `GET /requests/{id}`, add the `webhook` parameter with your callback URL
   3. When the task completes, Outscraper POSTs the results to your webhook URL
   4. Your webhook endpoint should return a 200 status quickly — process the data asynchronously on your side
   5. For integration with Zapier, use the "Task Finished" trigger to kick off downstream workflows

5. **Building a lead list from the Business Catalog**:
   1. Choose your tier: use `POST /businesses-free` (API key) for testing or small lists up to 1,000 results, or `POST /businesses` (OAuth2) for full production access
   2. Define filters: set `country_code`, `states`/`cities`/`postal_codes` for geography, `types` for business category (e.g. `["restaurant", "cafe"]`), `rating` (e.g. `"4.0+"`), `has_website: true`, `has_phone: true` to ensure contactable businesses
   3. Add enrichments in the same request: `contacts_n_leads` with `contacts_per_company` and `emails_per_contact` to get decision-maker emails, plus `company_insights` for firmographics
   4. Use `fields` array to return only the columns you need — reduces response size and speeds up processing
   5. Paginate with `cursor` — each response includes `next_cursor` and `has_more`. Loop until `has_more` is false
   6. Results are instant (no async polling needed) — the catalog is a pre-built database, not a scraping job
   7. Validate enriched emails via `GET /email-validator` on the scraping API before outreach

6. **Using the Python SDK**:
   1. Install: `pip install outscraper`
   2. Initialize: `from outscraper import ApiClient; client = ApiClient(api_key='YOUR_KEY')`
   3. Google Maps search: `results = client.google_maps_search('restaurants, NYC', limit=100)`
   4. Reviews: `reviews = client.google_maps_reviews('place_id_here', reviews_limit=50, sort='newest')`
   5. Email validation: `results = client.emails_validator(['email@example.com'])`
   6. All SDK methods support batching — pass lists of queries for efficient processing

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **Google Maps queries are capped at 500 results per query — you won't get every business in a broad search.** If you search "restaurants, New York" you will get at most 500 results, not all restaurants in New York. To get comprehensive coverage, break queries into smaller geographic areas (zip codes, neighborhoods, boroughs) and deduplicate results across requests.
2. **Async results require polling or webhooks — don't expect instant results from the API.** Most endpoints return a request ID immediately. You must either poll `GET /requests/{id}` until the status is complete, or use the `webhook` parameter to receive results via callback. The Python SDK handles polling automatically, but raw API users need to implement this themselves.
3. **Email validation and contact enrichment are separate modules with separate costs — don't assume emails from Contacts & Leads are pre-validated.** The `/contacts-and-leads` endpoint finds emails but does not verify deliverability. Always run found emails through `/email-validator` before outreach to avoid bounces and protect your sender reputation.
4. **Rate limits are soft at ~20 QPS but batching is the real throughput lever — use the 25-query batch limit.** Instead of sending 25 individual requests, batch them into a single request with an array of up to 25 queries. This is more efficient and avoids hitting rate limits. For sustained high-volume usage, contact Outscraper to increase your QPS limit.
5. **Review scraping costs scale with volume — set reviewsLimit to control spend.** A single business may have tens of thousands of reviews. Without a `reviewsLimit` parameter, you could extract (and pay for) all of them. Always set a sensible limit unless you specifically need the full review history.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-prospect-list` — Build and refine prospect lists using data from Outscraper and other sources
- `/sales-enrich` — Cross-platform datan enrichment strategy (combine Outscraper with other enrichment tools)
- `/sales-deliverability` — Email deliverability and verification strategy (beyond Outscraper's email validation)
- `/sales-integration` — Connect Outscraper to CRM, automation, or other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Scraping local businesses for a sales territory
**User says**: "I need to build a list of all HVAC companies in the Dallas-Fort Worth metro area with their contact info and ratings."
**Skill does**:
1. Designs a query strategy: break DFW into specific cities and zip codes to maximize coverage beyond the 500-per-query limit — e.g., "HVAC, Dallas, TX", "HVAC, Fort Worth, TX", "HVAC, Arlington, TX", "HVAC, Plano, TX", "HVAC, Irving, TX", etc.
2. Calls `GET /google-maps-search` with batched queries (up to 25 per request), `limit=500` per query
3. Results include company name, full address, phone, website, Google rating, review count, business hours, and categories
4. Deduplicates results across queries using place_id as the unique key (same business may appear in overlapping geographic searches)
5. Follows up with `GET /emails-and-contacts` on extracted websites to find email addresses for outreach
6. Validates collected emails via `GET /email-validator` to remove invalid addresses before loading into CRM
**Result**: User has a comprehensive, deduplicated list of HVAC companies across DFW with verified contact info, ratings, and review counts — ready for CRM import and sales outreach

### Example 2: Competitive review analysis across platforms
**User says**: "I want to monitor what customers are saying about our top 3 competitors on Google Maps, Yelp, and Trustpilot."
**Skill does**:
1. Identifies place_ids for each competitor on Google Maps (from a search or manual lookup)
2. Sets up review extraction across three platforms: `GET /maps/reviews-v3` for Google Maps reviews, `GET /yelp/reviews` for Yelp reviews, `GET /trustpilot/reviews` for Trustpilot reviews
3. Uses `sort=newest` and `cutoff` date parameter to only pull recent reviews (e.g., last 90 days), controlling both relevance and cost
4. Sets `reviewsLimit=100` per business per platform to keep volumes manageable
5. Exports results as CSV for analysis — recommends looking at rating distribution over time, common complaint themes, and response rate/quality
6. Suggests setting up a recurring extraction (monthly or weekly) using Zapier or a cron job calling the API to track sentiment trends over time
**Result**: User has a structured dataset of recent competitor reviews across three platforms, enabling competitive intelligence on customer satisfaction, common pain points, and areas of opportunity

### Example 3: Enriching a target account list with firmographic data
**User says**: "I have a list of 200 company domains. I need to enrich them with employee count, industry, tech stack, and find decision-maker contacts."
**Skill does**:
1. Takes the 200 domains and batches them into requests of 25 each for `GET /company-insights` — 8 batched API calls total
2. Company Insights returns: industry, employee count range, revenue range, tech stack, social profiles, founding year, and headquarters location
3. Follows up with `GET /contacts-and-leads` using the same domains — returns up to 3 contacts per company with names, titles, emails, phones, and LinkedIn profiles
4. Prioritizes contacts by title relevance (e.g., VP Sales, Director of Operations, CTO depending on the user's target persona)
5. Validates all discovered emails via `GET /email-validator` — flags invalid and risky addresses for removal
6. Combines company firmographics and contact data into a single enriched dataset, ready for CRM import or outreach tool ingestion
**Result**: User has 200 accounts enriched with firmographic data and up to 600 verified decision-maker contacts — filtered by ICP criteria and ready for personalized outreach

## Troubleshooting

### Google Maps search returning fewer results than expected
**Symptom**: A query like "restaurants, New York" returns only 100–200 results when you expected thousands.
**Cause**: Google Maps limits the number of results shown for any given search query, and Outscraper is capped at 500 results per query. Broad queries in dense areas will hit this ceiling and miss many businesses.
**Solution**: Break your search into smaller, more specific geographic queries. Instead of "restaurants, New York", search by neighborhood or zip code: "restaurants, 10001", "restaurants, 10002", etc. Batch up to 25 of these queries per API request. Deduplicate the combined results using place_id as the unique identifier. For very large scraping projects, consider programmatically generating queries from a list of zip codes or neighborhood names to ensure full coverage.

### Async request stuck in processing or no results returned
**Symptom**: You submitted a request and received a request ID, but polling `GET /requests/{id}` keeps returning a "processing" status, or the task shows as complete but results are empty.
**Cause**: Large requests (many queries or high review limits) can take significant time to process. Empty results may indicate invalid inputs (wrong place_ids, unreachable domains) or the target data genuinely not existing (e.g., a business with no reviews).
**Solution**: For long-running tasks, use the `webhook` parameter instead of polling — you'll receive a POST callback when results are ready. Check your input data for validity: ensure place_ids are correct, URLs are accessible, and domains resolve. If using the Python SDK, increase the timeout or use async mode. For persistently stuck requests, check the Outscraper status page or contact support. Note that very large requests may be split into sub-tasks internally.

### Email validation returning "risky" for most addresses
**Symptom**: A high percentage of emails come back as "risky" rather than "valid" or "invalid" after running through `/email-validator`.
**Cause**: "Risky" typically means the mail server accepts all addresses (catch-all domain) or the SMTP check was inconclusive. Many corporate domains configure catch-all to accept mail at any address, making it impossible to confirm whether a specific mailbox exists. This is common with large enterprise domains.
**Solution**: "Risky" emails are not necessarily bad — many are deliverable. For catch-all domains, the email format may still be correct even though it cannot be verified at the SMTP level. Consider sending to risky emails with caution: include them in your outreach but monitor bounce rates closely. If bounce rates from risky addresses exceed 5%, remove them. For critical outreach, supplement Outscraper validation with a secondary validation service that uses additional signals like historical send data or social profile matching.
