# There's an AI for That (TAAFT) Platform Reference

## Platform overview

There's an AI for That (TAAFT) is the #1 AI tools aggregator by traffic and database size. Unlike category-browsing directories (Futurepedia, Altern), TAAFT uses a task-based discovery model — users type what they want to accomplish and get matched to AI tools that solve that problem. Founded and operated by Andrei, a solopreneur based in Bucharest, Romania. The platform functions as a media company generating revenue through submission fees, PPC ads, and newsletter sponsorships.

**Key stats:**
- 42,000+ AI tools indexed
- 1,000+ use cases/task categories
- ~3-4M monthly visits
- 1M+ newsletter subscribers
- DR76 (dofollow backlinks)
- Twitter: @theresanaiforit (platform), @imakecoolsites (Andrei)

## Submission process

### Paid submission ($347)

1. Go to theresanaiforthat.com/launch/
2. Submit your AI tool with name, URL, description, and category
3. Pay the $347 submission fee
4. Manual review by TAAFT staff (average 1-2 day turnaround)
5. If approved: permanent listing with dofollow backlink, estimated 700-10,000+ clicks
6. If rejected: automatic full refund

**TAAFT-first launch bonus**: If your tool hasn't appeared on any other platform before submitting to TAAFT, you automatically receive a $300 PPC credit bonus. This makes the effective cost just $47 + free Featured ad credits.

### Free submission (monthly X thread)

TAAFT runs a thread on X (Twitter) once a month where indie makers can submit their tool for free. One tool from each thread is chosen and listed for free. Low odds but zero cost.

### What's included in a listing

- Permanent tool page (listings don't expire)
- Dofollow backlink to your site (DR76)
- Searchable in TAAFT's task-based discovery
- Eligible for newsletter inclusion (editorial selection)
- Eligible for category/trending pages
- Screenshots, video embeds, and generation showcases

## Featured ads (PPC)

TAAFT offers a pay-per-click "Featured" section on the homepage and search results.

- **Pricing**: Bid-based — higher bids get higher position in the Featured section
- **Billing**: Pay per click (PPC model)
- **Placement**: Featured section is prominent on homepage and appears in relevant task searches
- **Clicks route through TAAFT**: Featured clicks go to a TAAFT page first (with tracking), then to your site

### Strategy for Featured ads

1. Start with a low bid to establish baseline CTR
2. Test different task categories — some categories have more search volume
3. Monitor which searches trigger your Featured ad
4. Increase bids on high-converting categories
5. Use the $300 TAAFT-first bonus credits to test without risk

## Highlighted listings

Separate from Featured ads — Highlighted listings make your organic listing visually stand out.

- **Pricing**: Not publicly listed (contact TAAFT)
- **Effect**: Your listing gets visual emphasis (highlighting) in organic results
- **Clicks go directly to your site** (unlike Featured ads which route through TAAFT)

## Newsletter

TAAFT's newsletter reaches 1M+ subscribers — one of the largest AI-focused newsletter audiences.

- Newsletter inclusion is editorial — you can't buy a spot directly
- Being listed on TAAFT makes you eligible for newsletter features
- The newsletter covers trending tools, new categories, and curated picks
- Separate newsletter sponsorship slots may be available (contact TAAFT for rates)

## ChatGPT plugin / API

TAAFT has a ChatGPT plugin with a public search API.

**Endpoint**: `GET https://theresanaiforthat.com/api/search/?q={query}`

**Response format** (JSON array):
```json
[
  {
    "name": "Example Name",
    "task": "Example Task",
    "url": "https://theresanaiforthat.com/ai/example/?ref=search&term=example&from=chatgpt",
    "use_case": "Example Use Case"
  }
]
```

**Auth**: Service-level bearer token (no user auth required)
**OpenAPI spec**: https://theresanaiforthat.com/openapi.json
**Contact for API**: plugin@theresanaiforthat.com

## TAAFT vs other AI directories

| Factor | TAAFT | Futurepedia | Altern | Toolify | PitchWall |
|---|---|---|---|---|---|
| Size | 42,000+ tools | 5,700+ tools | 10,000+ tools | 20,000+ tools | 65,000+ products |
| Traffic | ~3-4M/mo | ~2M/mo | ~5-28K/mo | High | Medium |
| DR | 76 | High (est.) | Unconfirmed | Varies | 60 (disputed) |
| Backlink | Dofollow | Dofollow | Dofollow | Varies | Disputed |
| Discovery | Task-based search | Category browse | Category browse (AI-only) | Trending/algorithm | AI product browse |
| Submission cost | $347 (free monthly thread) | $497 Verified | Free + featured tiers | Free | Free / $99 Premium |
| Newsletter | 1M+ subscribers | YouTube 2M+ subs | Weekly digest | Yes | 45K+ subscribers |
| Review | Manual (1-2 days) | 2 business days | Editorial (no SLA) | Unknown | 30+ days (free) |
| Best for | Maximum reach, task discovery | Education, YouTube exposure | Dev/AI agent tools | Trending tools | AI product discovery |
| Unique value | $300 first-launch PPC bonus | YouTube network, courses | Alternatives pages | Monthly visitor data | $1K Spotlight ads |

## Pricing summary

| Option | Cost | What you get |
|---|---|---|
| Standard submission | $347 | Permanent listing, dofollow backlink (DR76), 700-10K+ est. clicks, newsletter eligibility |
| TAAFT-first bonus | -$300 (credit) | PPC ad credits if your tool launches on TAAFT before any other platform |
| Featured (PPC) | Bid-based | Homepage + search Featured section, pay per click |
| Highlighted listing | Not public | Visual emphasis on organic listing, direct-to-site clicks |
| Free X thread | $0 | Monthly thread, one winner chosen |

## Integrations

- **ChatGPT plugin**: Search TAAFT's database from within ChatGPT
- **Verified/authentic indicators**: Tools can display verification badges
- **UTM tracking**: Featured and organic clicks include tracking parameters
- **No native CRM/Zapier integrations**: TAAFT is a directory, not a marketing automation platform

## Contact

- **Submission/listing**: theresanaiforthat.com/launch/
- **Featured ads**: theresanaiforthat.com/get-featured/
- **API/plugin**: plugin@theresanaiforthat.com
- **Founder (Andrei)**: Twitter DMs @imakecoolsites
- **Platform Twitter**: @theresanaiforit
