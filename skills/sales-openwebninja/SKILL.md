---
name: sales-openwebninja
description: "OpenWeb Ninja platform help — real-time public data API stack with 30+ APIs for web scraping, enrichment, and business data. Website Contacts Scraper (extract emails, phones, social links from any domain, 0.5-3s response), Email Search (find publicly available emails by query with optional domain filter, 1-2s response), Local Business Data (Google Maps businesses with 40+ fields — phone, website, email, ratings, reviews, hours, social links, photos, posts; nearby search, bulk search, reviews, photos, autocomplete), Social Links Search (find social media profiles for companies/people), Real-Time Web Search (Google SERP — organic results, AI Overviews, AI Mode, videos, places, news, knowledge graph, People Also Ask, up to 500 results, localized), JSearch (job postings from LinkedIn/Indeed/Glassdoor/ZipRecruiter — 200M+ listings, salary data), Product Data APIs (Amazon, eBay, Walmart, Costco — 35B+ listings, Google Lens, Reverse Image Search), Web Unblocker (fetch rendered HTML with rotating proxies and smart retries), Finance Data (stocks, crypto, forex), AI/LLM APIs (Google AI Mode, Gemini, ChatGPT, Copilot with web access). Use when asking 'how do I scrape contacts from a website with OpenWeb Ninja', extracting emails and phone numbers from domains, searching Google Maps for local business data, finding social media profiles, running web search via API, aggregating job postings, fetching product data, unblocking websites for scraping, or working with any OpenWeb Ninja API. Do NOT use for cross-platform enrichment strategy (use /sales-enrich), prospect list building strategy (use /sales-prospect-list), or connecting tools (use /sales-integration)."
argument-hint: "[describe what you need help with in OpenWeb Ninja]"
license: MIT
version: 1.0.0
tags: [sales, scraping, data-extraction, enrichment, platform]
---
# OpenWeb Ninja Platform Help

Help the user with OpenWeb Ninja platform questions — from Website Contacts Scraper and Email Search through Local Business Data, Real-Time Web Search, JSearch, Product Data APIs, Web Unblocker, and more. OpenWeb Ninja is a Sunnyvale-based real-time public data API stack with 30+ APIs, 50K+ subscribers, 1T+ monthly requests, and a 4.8/5 rating on G2. Each API is a separate product with its own subscription, endpoints, and rate limits, available via the app.openwebninja.com portal or RapidAPI marketplace.

## Step 1 — Gather context

Ask the user:

1. **What area of OpenWeb Ninja do you need help with?**
   - A) Website Contacts Scraper — extract emails, phone numbers, and social links from any website domain
   - B) Email Search — find publicly available email addresses by search query
   - C) Local Business Data — search Google Maps businesses with 40+ fields (phone, website, ratings, reviews, hours, emails, social links)
   - D) Social Links Search — find social media profiles for companies or people
   - E) Real-Time Web Search — Google SERP results (organic, AI Overviews, AI Mode, videos, places, news, knowledge graph)
   - F) JSearch — job postings aggregator (LinkedIn, Indeed, Glassdoor, ZipRecruiter — 200M+ listings)
   - G) Product Data APIs — Amazon, eBay, Walmart, Costco product data (35B+ listings)
   - H) Web Unblocker — fetch rendered HTML from any website with rotating proxies
   - I) Finance Data — real-time stocks, crypto, forex data
   - J) AI/LLM APIs — Google AI Mode, Gemini, ChatGPT, Copilot with web access
   - K) Other APIs — Zillow, Yelp, Trustpilot, Events, Waze, Local Rank Tracker, Books, Forums, Shorts, Image Search, News
   - L) Account / Billing — plans, pricing, API subscriptions
   - M) Something else — describe it

2. **What's your role?**
   - A) Sales / SDR / BDR
   - B) RevOps / Sales ops
   - C) Developer / engineer
   - D) Growth / marketing
   - E) Recruiter / talent acquisition
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Cross-platform enrichment strategy / multi-tool enrichment -> `/sales-enrich`
- Prospect list building strategy -> `/sales-prospect-list`
- Connecting OpenWeb Ninja to other tools via middleware -> `/sales-integration`
- Lobstr-specific questions -> `/sales-lobstr`
- Outscraper-specific questions -> `/sales-outscraper`
- Apollo-specific questions -> `/sales-apollo`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — OpenWeb Ninja platform reference

Provide module-by-module guidance based on the user's area:

### Website Contacts Scraper
- **What it does**: Extracts emails, phone numbers, and social profile links (Facebook, Instagram, Twitter, LinkedIn) from any website domain. Supports keyword/name-based website lookup with batching.
- **Response time**: 0.5-3 seconds per request
- **Key behavior**: Crawls the target domain in real time to discover publicly listed contact information — this is live scraping, not a pre-built database. Results vary based on what the website publicly exposes.
- **Use cases**: Enriching a list of target company domains with contact info, finding all publicly listed contact channels for a prospect, building outreach lists from website data

### Email Search
- **What it does**: Real-time web search for publicly available email addresses by query with an optional email domain filter. Returns an array of discovered email addresses.
- **Response time**: 1-2 seconds per request
- **Key behavior**: Searches the public web for indexed email addresses matching your query — results are limited to what is publicly available and indexed. This is not a verified email database; results should be validated before outreach.
- **Use cases**: Finding email addresses associated with a company name or person, discovering contact emails when you only have a name or keyword, supplementing other email finder tools with web-indexed results

### Local Business Data
- **What it does**: Search and retrieve businesses from Google Maps with 40+ fields including business ID, place ID, phone, website, address, ratings, review counts, opening hours, email contacts, social links, photos, reviews, and posts.
- **Supported operations**: Nearby search, bulk search, individual business details, reviews, photos, posts, autocomplete
- **Key behavior**: Each business returned in a search counts as a separate request against your quota — a search returning 20 businesses counts as 20 requests, not 1. Reviews, photos, and posts are separate endpoint calls.
- **Use cases**: Building local business prospect lists by category and geography, enriching account records with Google Maps data (ratings, reviews, hours), competitive analysis of businesses in a target area, finding business contact info (phone, email, website) at scale

### Social Links Search
- **What it does**: Finds social media profiles for companies or people across major platforms.
- **Use cases**: Enriching prospect records with social profile links, finding LinkedIn/Twitter profiles for outreach personalization, validating company identity across social platforms

### Real-Time Web Search
- **What it does**: Returns Google SERP results including organic results, AI Overviews, AI Mode (Gemini), videos, places, news, knowledge graph, People Also Ask, and related searches. Supports up to 500 results per query, localized by region and language.
- **Key behavior**: This is a SERP scraping API, not a traditional search engine — it fetches and structures Google's search results programmatically. Results include all SERP features (featured snippets, knowledge panels, etc.).
- **Use cases**: Competitive intelligence and brand monitoring, content research for sales enablement, finding prospects through search queries, monitoring industry news and trends at scale

### JSearch (Job Postings)
- **What it does**: Aggregates job postings from LinkedIn, Indeed, Glassdoor, ZipRecruiter, and more — 200M+ listings. Includes a Job Salary Data API.
- **Use cases**: Identifying companies that are hiring (buying signal for sales), researching target accounts' tech stack from job descriptions, competitive intelligence on hiring trends, recruiting and talent acquisition

### Product Data APIs
- **What it does**: Retrieves product data from Amazon, eBay, Walmart, and Costco — 35B+ product listings. Also includes Google Lens and Reverse Image Search.
- **Use cases**: Competitive pricing intelligence, market research for ecommerce prospects, identifying potential customers selling specific product categories

### Web Unblocker
- **What it does**: Fetches complete HTML of any website with JavaScript rendering, rotating proxies, and smart retries. Returns raw HTML, not structured data.
- **Key behavior**: This is a rendering/proxy service, not a scraper — you get raw HTML back and must parse it yourself. Use this when other APIs don't cover your target site, or when you need data from pages that block automated requests.
- **Use cases**: Accessing websites that block standard HTTP requests, scraping custom data from pages not covered by other OpenWeb Ninja APIs, fetching JavaScript-rendered content that requires a headless browser

### Finance Data
- **What it does**: Provides real-time data for stocks, cryptocurrency, and forex markets.
- **Use cases**: Monitoring prospect company stock performance as a conversation starter, tracking financial signals for target accounts, researching publicly traded prospects

### AI/LLM APIs
- **What it does**: Provides API access to Google AI Mode, Google Gemini, ChatGPT (unofficial), and Microsoft Copilot — all with web access capabilities.
- **Key behavior**: These are unofficial/wrapper APIs that provide programmatic access to AI services with web browsing. Availability and behavior may change without notice as underlying services update.
- **Use cases**: Automated research and summarization, generating insights from web data, augmenting sales intelligence workflows with AI analysis

### Other APIs
- **Zillow Real Estate** — property data and listings
- **Yelp Business Data** — business listings and reviews
- **Trustpilot Reviews** — company review data
- **Events Search** — discover events by keyword and location
- **Waze Data** — traffic and navigation data
- **Local Rank Tracker** — track local search rankings
- **Books Search** — book data aggregation
- **Forums Search** — search forum discussions
- **Shorts Search** — YouTube Shorts, TikTok, Instagram Reels
- **Image Search** — web image search results
- **News Data** — news article aggregation
- **Web Search Autocomplete** — search suggestion data

### Data model

| Object | Description | Key fields |
|--------|-------------|------------|
| **Business** | Google Maps business record | business_id, place_id, name, phone, website, address, latitude, longitude, ratings, review_count, opening_hours, email, social_links, photos, category |
| **Contact** | Scraped website contact info | email, phone, facebook, instagram, twitter, linkedin, domain |
| **Email** | Discovered email address | email, source, query, domain |
| **Review** | Business review | review_id, business_id, author, rating, text, date, language |
| **Photo** | Business photo | photo_id, business_id, url, caption |
| **Post** | Business post/update | post_id, business_id, text, date, media_url |
| **Search Result** | Web search result | title, url, snippet, position, domain, rich_snippet |
| **Job Listing** | Aggregated job posting | job_id, title, company, location, description, salary, source, date_posted, url |
| **Product** | Ecommerce product listing | product_id, title, price, rating, review_count, seller, url, image, platform |

### API quick reference

- **Access**: REST APIs via app.openwebninja.com portal or RapidAPI marketplace
- **Authentication**: API key header (exact header name depends on access method — RapidAPI uses `X-RapidAPI-Key`, direct portal may differ)
- **Format**: JSON responses
- **Key note**: Each API is a separate product with its own subscription, endpoints, and rate limits. You subscribe to each API individually.
- **Code samples available**: JavaScript/Node.js, Python, Java, Ruby, cURL
- **Key endpoints** (representative — each API has its own endpoint structure):
  - Website Contacts Scraper: domain-based contact extraction
  - Email Search: query-based email discovery with optional domain filter
  - Local Business Data: search, details, reviews, photos, posts, autocomplete
  - Real-Time Web Search: query with region/language localization, up to 500 results
  - JSearch: job search with filters, salary data
  - Web Unblocker: URL-based HTML fetching with JS rendering

### Integrations

| Category | Details |
|----------|---------|
| **Marketplaces** | RapidAPI marketplace, API.market, Datarade |
| **Direct API** | REST API via app.openwebninja.com portal with API key auth |
| **Languages** | Code samples for JavaScript/Node.js, Python, Java, Ruby, cURL |
| **CRM/Tools** | No native CRM integrations — API-only, requires custom integration or middleware (Zapier, Make, n8n) to connect to CRM, spreadsheets, or other tools |

### Pricing (USD, as of March 2026 — verify current pricing at openwebninja.com; each API has its own subscription)

| Plan | Price | Requests/mo | Rate limit | Key notes |
|------|-------|-------------|------------|-----------|
| **Free** | $0 | 50-500 (varies by API) | 1/sec | No credit card required, evaluation only |
| **Pro** | $25/mo | 10,000-20,000 | 5-10/sec | Per API subscription |
| **Ultra** | $75/mo | 50,000-100,000 | 10-20/sec | Per API subscription |
| **Mega** | $150/mo | 200,000-300,000 | 20-30/sec | Per API subscription |
| **Pay-as-you-go** | $0.001-0.005/req | — | 5/sec | Per-request billing |
| **Custom** | Contact sales | Custom | Custom | Higher volumes |

**Key pricing notes**:
- **Each API is a separate subscription** — subscribing to Local Business Data does not give you access to Email Search or Web Unblocker. Plan your budget across all the APIs you need.
- **Request limits and rate limits vary by API** — the Free tier for one API might offer 500 requests while another offers only 50. Always check the specific API's pricing page.
- **Pay-as-you-go is available per API** at $0.001-0.005 per request, offering flexibility for variable usage without committing to a monthly plan.
- **Costs can add up quickly** if you subscribe to multiple APIs — e.g., subscribing to Pro on 4 APIs = $100/mo.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Extracting contacts from a list of target company websites**:
   1. Use the Website Contacts Scraper API with each target domain to extract emails, phone numbers, and social links
   2. Expect 0.5-3 second response time per domain — for large lists, batch requests and respect rate limits (1/sec on Free, up to 30/sec on Mega)
   3. Results depend on what the website publicly exposes — some domains will return multiple emails and phone numbers, others may return nothing
   4. Supplement with Email Search API for domains that return no contacts — search by company name with optional domain filter
   5. Use Social Links Search to fill in LinkedIn, Twitter, and Facebook profiles for discovered contacts
   6. Export results to your CRM via custom API integration — OpenWeb Ninja has no native CRM connectors, so use middleware (Zapier, Make, n8n) or build a direct integration
   7. Verify discovered emails with a separate email verification service before outreach (OpenWeb Ninja does not include email verification)

2. **Building a local business prospect list from Google Maps**:
   1. Use the Local Business Data API to search by category and location (e.g., "dentists in Austin, TX")
   2. Each business returned counts as a separate request — a search returning 20 businesses uses 20 requests from your quota
   3. For each business, you get 40+ fields: phone, website, email, address, ratings, review count, opening hours, social links
   4. Use nearby search for geographic radius queries, or bulk search for larger area coverage
   5. Pull reviews for high-priority targets to understand their pain points and personalize outreach
   6. Enrich results with Website Contacts Scraper for additional email addresses not listed on Google Maps
   7. Export to spreadsheet or CRM — build a simple script or use middleware to format and push the data

3. **Running competitive intelligence via web search API**:
   1. Use Real-Time Web Search API with competitor names, product names, or industry keywords
   2. Retrieve up to 500 results per query — localize by region and language for market-specific intelligence
   3. Parse SERP features: AI Overviews for summarized competitive positioning, People Also Ask for common buyer questions, knowledge graph for company facts
   4. Monitor news results for competitor announcements, funding rounds, and product launches
   5. Track job postings via JSearch to identify competitor hiring patterns (expansion signals, tech stack changes)
   6. Combine with Product Data APIs for pricing intelligence on ecommerce competitors
   7. Set up automated monitoring by scheduling regular API calls and tracking changes over time

## Gotchas

> *Best-effort from research — review these, especially items about per-API subscriptions and pricing that may have changed.*

1. **Each API is a separate subscription — costs add up across multiple APIs.** OpenWeb Ninja is not a single platform subscription. If you need Website Contacts Scraper, Local Business Data, and Email Search, that is three separate subscriptions. Subscribing to Pro on all three costs $75/mo, not $25/mo. Audit which APIs you actually need before subscribing, and consider pay-as-you-go ($0.001-0.005/request) for APIs you use infrequently.

2. **Free tier is very limited (50-500 requests) and varies by API — it is evaluation-only.** Some APIs offer 500 free requests per month, others offer only 50. The free tier is rate-limited to 1 request per second and is not suitable for production use. Always check the specific API's free tier allocation before relying on it for testing.

3. **Rate limits vary by plan AND by API — do not assume uniform limits.** A Pro plan on one API might allow 5 requests/sec while Pro on another allows 10/sec. If you are integrating multiple APIs, you need to track rate limits per API independently. Exceeding rate limits returns errors, not queued requests.

4. **Local Business Data counts per business returned, not per search query.** A single search that returns 20 businesses consumes 20 requests from your quota. Large-area searches or broad categories can consume your monthly allocation quickly. Use specific categories and tight geographic filters to control request consumption. Monitor your usage dashboard closely during bulk operations.

5. **Web Unblocker returns raw HTML, not structured data — you must parse it yourself.** Unlike the other APIs that return structured JSON, Web Unblocker gives you the full rendered HTML of a page. You need your own parsing logic (BeautifulSoup, Cheerio, etc.) to extract useful data. Use the structured APIs (Local Business Data, Product Data, etc.) whenever they cover your target data — Web Unblocker is a fallback for sites not covered by specialized APIs.

6. **RapidAPI vs direct portal pricing may differ — compare before subscribing.** OpenWeb Ninja APIs are available both through the app.openwebninja.com portal and the RapidAPI marketplace. Pricing, rate limits, and plan tiers may not be identical across both platforms. If you are cost-sensitive, compare pricing on both before committing. Also note that RapidAPI uses its own API key header (`X-RapidAPI-Key`) while the direct portal may use a different authentication method.

7. **No native CRM integrations — OpenWeb Ninja is API-only.** Unlike platforms with built-in HubSpot/Salesforce connectors, OpenWeb Ninja requires custom integration work to push data into your CRM, spreadsheets, or other tools. Use middleware platforms (Zapier, Make, n8n) or build direct API integrations. Factor in this development effort when evaluating total cost of adoption.

8. **Email Search returns publicly indexed emails only — these are not verified.** The Email Search API discovers email addresses that are publicly available on the web. These emails are not verified for deliverability, may be outdated, and could include role-based addresses (info@, support@). Always run discovered emails through a separate verification service before using them for outreach. Combine with Website Contacts Scraper for more comprehensive coverage.

9. **Response times vary significantly by endpoint — plan your integration accordingly.** Website Contacts Scraper takes 0.5-3 seconds per request, Email Search takes 1-2 seconds, but Web Unblocker (with JS rendering) and Local Business Data (with full detail fetches) can take longer. For high-volume pipelines, implement async processing and queuing rather than synchronous request chains. Timeout settings should be generous (10+ seconds) to account for variability.

## Step 5 — Related skills

- `/sales-enrich` — Cross-platform data enrichment strategy (multi-tool enrichment workflows, waterfall enrichment)
- `/sales-prospect-list` — Prospect list building strategy and best practices
- `/sales-integration` — Connect OpenWeb Ninja to CRM, automation tools, or other platforms
- `/sales-lobstr` — Lobstr platform help (web scraping and data extraction)
- `/sales-outscraper` — Outscraper platform help (Google Maps scraping and business data)
- `/sales-apollo` — Apollo platform help (B2B database and sales engagement)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Building a prospect list from Google Maps for local sales outreach
**User says**: "I need to find all plumbing companies in Phoenix, AZ with their phone numbers and websites for my sales team to call."
**Skill does**:
1. Uses Local Business Data API to search for "plumbing" businesses in Phoenix, AZ
2. Explains that each business returned counts as a separate request — a search returning 50 plumbers uses 50 requests from the monthly quota
3. For each business, extracts key fields: business name, phone, website, address, ratings, review count, opening hours
4. Recommends filtering by rating (e.g., 3+ stars) and review count (e.g., 10+ reviews) to focus on established businesses worth calling
5. Supplements with Website Contacts Scraper on each business's website to find email addresses and social links not listed on Google Maps
6. Advises exporting to a spreadsheet or CRM via a simple script or middleware — no native CRM integration exists
7. Notes budget impact: 50 businesses + 50 website contact scrapes = 100 requests across two APIs
**Result**: User has a structured list of plumbing companies in Phoenix with phone, website, email, ratings, and review data ready for sales outreach

### Example 2: Enriching a target account list with contact information from websites
**User says**: "I have 200 company domains I want to scrape for email addresses and social media links. How do I set this up?"
**Skill does**:
1. Recommends Website Contacts Scraper API for bulk domain contact extraction — 200 domains at 0.5-3 seconds each, approximately 2-10 minutes total
2. Checks rate limit requirements: Free tier allows only 1/sec (200 domains = ~3.5 minutes minimum), Pro allows 5-10/sec (200 domains = ~20-40 seconds)
3. Recommends Pro plan ($25/mo, 10,000-20,000 requests) as the minimum viable plan for 200 domains with room for retries and supplementary lookups
4. Provides code pattern: iterate through domains, call the API for each, collect emails/phones/social links, handle errors and empty responses
5. For domains returning no contacts, falls back to Email Search API with company name queries — this is a separate API subscription
6. Advises combining results: merge Website Contacts Scraper results with Email Search results, deduplicate by email address
7. Notes that discovered emails are not verified — recommends running through an email verification service before outreach
**Result**: User has a plan and code approach for enriching 200 domains with contact data, with clear budget expectations and fallback strategy

### Example 3: Monitoring competitor job postings as sales signals
**User says**: "I want to track when competitor companies post new engineering jobs — it could signal they're building new products we should pitch against."
**Skill does**:
1. Uses JSearch API to search job postings by company name filtered to engineering roles — aggregates from LinkedIn, Indeed, Glassdoor, ZipRecruiter (200M+ listings)
2. Sets up a recurring search pattern: query each competitor weekly, compare results to previous week to identify new postings
3. Parses job descriptions for technology keywords, team size indicators, and product area mentions
4. Supplements with Real-Time Web Search API for press releases, blog posts, or news articles about the competitor's product direction
5. Uses Job Salary Data API to understand the seniority and budget level of new hires
6. Recommends storing results in a database or spreadsheet and flagging anomalies (sudden hiring surge, new tech stack mentions, new office locations)
7. Notes this requires two separate API subscriptions (JSearch + Real-Time Web Search) — budget accordingly
**Result**: User has an automated competitive intelligence workflow using job posting data as a leading indicator for product and sales strategy

## Troubleshooting

### Website Contacts Scraper returning empty results for a known company
**Symptom**: Calling the Website Contacts Scraper with a well-known company domain returns no emails, phone numbers, or social links.
**Cause**: The company may not list contact information prominently on their website, may use JavaScript-rendered contact forms instead of plain text emails, may use obfuscated email formats (e.g., "name [at] company [dot] com"), or may have recently redesigned their website. Some companies deliberately avoid listing direct contact info on public pages.
**Solution**: Try the Email Search API as a fallback — it searches the broader web, not just the company's website. Check if the domain redirects to a different URL (e.g., www vs non-www, or a parent company domain). Try the Social Links Search to find their social profiles, which may list contact info. For companies that heavily use JavaScript, the Web Unblocker API may capture content that the Website Contacts Scraper misses, though you will need to parse the HTML yourself.

### Local Business Data returning duplicate or outdated businesses
**Symptom**: Search results include duplicate entries for the same business (different place IDs) or businesses that have closed.
**Cause**: Google Maps data can contain duplicates when businesses have multiple listings (e.g., different departments, old and new listings). Closed businesses may remain in Google Maps data with a "permanently closed" status that needs to be checked in the response.
**Solution**: Deduplicate results by phone number or address, not just business name (franchises share names). Filter out businesses with a "permanently closed" or "temporarily closed" status field. Cross-reference with the business's website (via Website Contacts Scraper) to verify they are still operating. For high-value prospect lists, manually verify a sample of results before bulk outreach.

### Rate limit errors across multiple APIs
**Symptom**: Receiving 429 (Too Many Requests) errors when calling multiple OpenWeb Ninja APIs in a pipeline.
**Cause**: Each API has its own independent rate limit, but if you are calling multiple APIs in rapid succession from the same integration, you may be exceeding limits on one or more. Rate limits are per API and per plan — Free is 1/sec, Pro is 5-10/sec, and so on.
**Solution**: Implement per-API rate limiting in your code — track request timestamps for each API independently. Add exponential backoff with jitter on 429 responses. Consider upgrading the specific API that is bottlenecking your pipeline rather than upgrading all APIs. For complex pipelines hitting multiple APIs, use a queue-based architecture that respects each API's individual rate limit.
