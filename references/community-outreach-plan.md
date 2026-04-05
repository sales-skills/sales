# Community Thread Response & Skill-Building Process

Plan for systematically finding community threads where our skills solve real problems, drafting helpful replies, and improving the process over time.

## Current State (2026-04-03)

### What we've built so far

1. **Step 1b in add-platform skill** — Problem discovery is now integrated into platform research. When adding a new platform, we search Reddit, G2, Shopify Community, etc. for real user pain before generating skills.

2. **Two-pass search approach** — First pass discovers problems (any thread age = signal for skill content). Second pass finds recent replyable threads (time-scoped, verified open).

3. **Two reply flavors**:
   - **Upstream threads** ("which email tool should I use?") — answer the problem with real advice, mention the platform as one option, link the strategy or platform skill
   - **Platform-specific threads** ("Omnisend automation not triggering") — answer the specific question, link the platform skill

4. **Skill backlog** (`references/skill-backlog.md`) — captures upstream problems that don't have dedicated skills yet

5. **Community reply drafts** saved to `/tmp/community-reply-{platform}-{n}.md`, opened in Chrome (Gary profile) for manual review and posting

### What we learned from the Omnisend experiment

#### Process wins
- Upstream problem searches ("which email marketing tool for Shopify") produce far more replyable threads than platform-name searches ("Omnisend problem")
- Shopify Community threads stay open for replies for a long time (found active threads from July 2025 still getting replies in March 2026)
- The skill enrichment loop works: discovered pain points → added to Gotchas/Troubleshooting → now the skill covers what people actually ask about

#### Process gaps
- **Reddit search is weak via WebSearch** — `site:reddit.com` queries return sparse results or get blocked. Need reddit-insights MCP set up for semantic search.
- **Thread recency verification is manual** — have to WebFetch each thread to check if it's still active. Should batch this.
- **No tracking of posted replies** — once we post, we have no record of what we posted where. Need a log.
- **No systematic schedule** — we do this ad-hoc during platform adds. Should also do periodic sweeps for existing skills.

---

## Omnisend Experiment — All Findings

### Threads found and verified

| # | Thread | URL | Last Reply | Replies | Status | Reply Drafted |
|---|--------|-----|-----------|---------|--------|--------------|
| 1 | Honest advice on email marketing tools for small Shopify stores | https://community.shopify.com/t/looking-for-honest-advice-on-email-marketing-tools-for-small-shopify-stores/571984/19 | 2026-03-27 | 19 | **Active, replyable** | `/tmp/community-reply-omnisend-3.md` |
| 2 | Can anyone suggest best email marketing for Shopify store | https://community.shopify.com/t/can-anyone-suggest-me-best-email-marketing-for-shopify-store/552024/22 | 2026-01-29 | 22 | **Active, replyable** | `/tmp/community-reply-omnisend-4.md` |
| 3 | How can I improve my Shopify store's email marketing performance? | https://community.shopify.com/t/how-can-i-improve-my-shopify-store-s-email-marketing-performance/574862 | 2025-11-11 | 2 | Likely replyable, ~5mo old | Not yet drafted |
| 4 | Sending Abandoned Cart mails to Non-Subscribers | https://community.shopify.com/c/ecommerce-marketing/sending-abandoned-cart-mails-to-non-subscribers/td-p/2146112 | 2025-09-15 | 13 | Unresolved, active as of Sep 2025 | Not yet drafted |
| 5 | Abandoned cart and checkout emails sent dropped (Omnisend + theme change) | https://community.shopify.com/t/abandoned-cart-and-checkout-emails-sent-dropped/414230 | 2025-05-15 | 3 | Unresolved, Omnisend-specific | Not yet drafted |
| 6 | Double order confirmation (Omnisend + Shopify POS) | https://community.shopify.com/t/omnisend-order-confirmation-and-shopify-pos-order-confirmation-is-double-sending/74130 | Old | Few | **Too old** | `/tmp/community-reply-omnisend-1.md` (not posted) |
| 7 | Subscriber count mismatch Omnisend vs Shopify | https://community.shopify.com/t/why-does-my-email-list-have-fewer-subscribers-in-shopify-than-in-omnisend/80639 | Old | Few | **Too old** | `/tmp/community-reply-omnisend-2.md` (not posted) |

### Skill enrichments made from discovered problems

Added to `skills/sales-omnisend/SKILL.md`:
- **Gotchas**: segment-based filter race condition, template customization limits, reporting depth vs Klaviyo
- **Troubleshooting**: expanded "Automation not triggering" (5-cause breakdown with Trigger Preview Tool), added "Double order confirmation emails", added "Subscriber count mismatch"

### Backlog entries added

| Problem | Source | Date |
|---------|--------|------|
| ESP comparison/selection for ecommerce (Omnisend vs Klaviyo vs Mailchimp) | G2, Klaviyo community, Nudgify Reddit roundup | 2026-04-03 |

---

## Plan: Improve the Process

### Phase 1 — Set up Reddit search (next session)

**Goal**: Get reddit-insights MCP working so we can do semantic Reddit searches instead of fragile `site:reddit.com` WebSearch queries.

**Steps**:
1. Sign up at https://reddit-insights.com and get API key
2. Add MCP server config (already have the skill installed, just need the key)
3. Test with: `reddit_search("best email marketing for Shopify store", limit=20)`
4. Compare results to what WebSearch found — should surface more threads, better relevance

**Why this matters**: Reddit threads are the highest-value reply targets. They stay open indefinitely, have high SEO, and the audience trusts peer recommendations. Our WebSearch approach returned almost nothing from Reddit.

### Phase 2 — Build a reply tracking log

**Goal**: Track what we've posted, where, and when — so we don't double-post and can measure if replies drive installs.

**File**: `references/community-replies.md`

**Format**:
```markdown
| Date | Platform | Thread URL | Reply Type | Skill Linked | Posted? | Notes |
|------|----------|-----------|------------|-------------|---------|-------|
| 2026-04-03 | Shopify Community | [link] | Upstream | sales-omnisend | Pending | Drafted in /tmp/community-reply-omnisend-3.md |
```

**Rules**:
- Add entry when reply is drafted
- Update "Posted?" column when actually posted
- This file should NOT be in .gitignore — it's useful project history

### Phase 3 — Systematic sweep for existing skills

**Goal**: Don't just discover threads during `add-platform` — periodically search for threads where our existing 50+ skills are useful.

**Approach**: Pick 5 skills per session. For each:
1. Identify the top 2-3 upstream problems the skill solves
2. Search for recent threads about those problems (Shopify Community, Reddit, Stack Overflow)
3. Verify threads are active (<6 months, still getting replies or unresolved)
4. Draft replies, open in browser for posting

**Priority order** (by expected thread volume) — see Phase 6 for which communities to search for each group:
1. Ecommerce email: sales-klaviyo, sales-mailchimp, sales-kit, sales-getresponse → Shopify Community, WordPress.org, Reddit
2. Outbound/prospecting: sales-apollo, sales-reply, sales-salesloft, sales-lemlist, sales-hunter → Reddit, Salesforce Trailblazer, Indie Hackers
3. Dev API tools: sales-sendgrid, sales-postmark, sales-mailgun, sales-customerio → Stack Overflow, Dev.to, GitHub Discussions
4. CRM/marketing automation: sales-brevo, sales-activecampaign, sales-braze, sales-iterable → HubSpot Community, Reddit
5. Enrichment/validation: sales-clay, sales-clearbit, sales-zerobounce, sales-zoominfo → Reddit, Salesforce Trailblazer
6. Ecommerce marketing: sales-omnisend (done), sales-getresponse, sales-iterable → Shopify Community, BigCommerce
7. Niche tools: sales-lobstr, sales-outscraper, sales-minelead, sales-skrapp, etc. → Reddit, Indie Hackers

**Search templates per skill** — pick the community that matches the skill's category:

General (all skills):
- Upstream: `reddit_search("{problem in user's words}")` or `"{problem}" site:reddit.com`
- Comparison: `"{platform} vs {competitor}" reddit` — great for upstream "which tool" threads

Ecommerce tools (Omnisend, Klaviyo, Mailchimp, etc.):
- `site:community.shopify.com "{platform}" OR "{problem}"`
- `site:wordpress.org "{platform}" OR "{problem}"` (WooCommerce)
- `site:support.bigcommerce.com "{platform}" OR "{problem}"`

CRM / marketing automation (HubSpot, ActiveCampaign, Brevo, etc.):
- `site:community.hubspot.com "{platform}" OR "{problem}"`
- `site:trailhead.salesforce.com "{platform}" OR "{problem}"`

Dev API tools (SendGrid, Postmark, Mailgun, etc.):
- `site:stackoverflow.com "{platform}"`
- `site:dev.to "{platform}"`
- Check GitHub Discussions on the platform's repos

SMB / startup tools:
- `site:indiehackers.com "{platform}" OR "{problem}"`
- `site:news.ycombinator.com "{platform}"`

### Phase 4 — Automate thread freshness checking

**Goal**: Instead of manually WebFetching every thread to check if it's open, batch-verify a list of URLs.

**Discourse forums (Make Community, n8n)**: Use the `.json` API — append `.json` to any thread URL to get structured data with `closed`, `created_at`, `reply_count`, `posts_count` fields. No HTML parsing needed. Tested and working on both Make Community and n8n Community (2026-04-04).

**Non-Discourse forums**: WebFetch individual thread pages and parse for close/lock indicators.

**JS-rendered forums (HubSpot/Khoros, Zapier/Insided, Trailblazer/Khoros)**: Currently blocked. Options to unblock:
1. **Firecrawl** (installed, untested) — renders JS before extracting content
2. **Headless browser MCP** — Puppeteer/Playwright as MCP server
3. **Community-specific APIs** — Khoros and Insided may have APIs behind authentication

**Approach**: Write a small script that:
1. Takes a list of thread URLs
2. For Discourse URLs: fetch `{url}.json` and read `closed` + `created_at` fields directly
3. For other URLs: WebFetch and extract last reply date from HTML
4. Flags threads that are <2 months old and still open
5. Outputs a filtered list of replyable threads

This could be a simple Python script in `scripts/check-threads.py` or integrated into the add-platform skill as a helper.

### Phase 5 — Reddit automation (optional, lower priority)

**Goal**: Use reddit-automation skill (already installed) to post replies directly from Claude Code via Rube MCP.

**Prerequisites**:
- reddit-insights MCP configured (Phase 1)
- Rube MCP configured for Reddit (need Cobalt API key)
- Careful tone calibration — Reddit is harsh on anything that smells like marketing

**Why lower priority**: Manual posting lets us quality-check every reply. Automating too early risks getting flagged as spam. Start manual, move to assisted posting once we have a feel for what works.

### Phase 6 — Expand to category-matched communities

**Goal**: Search the communities where each skill's audience actually hangs out, not just Reddit + Shopify Community.

**Prioritized community list** — pick based on which skills you're sweeping:

#### Tier 1 — Proven working, high volume, threads stay open
| Community | Platform | Best for skills | Search pattern | Verification method | Notes |
|-----------|----------|----------------|----------------|--------------------| ------|
| **Reddit** | Custom | All skills | `reddit_search()` or `site:reddit.com` | N/A (blocked without reddit-insights MCP) | Threads stay open indefinitely, high SEO. Currently blocked for automated access. |
| **Shopify Community** | Custom | Ecommerce (Omnisend, Klaviyo, Mailchimp, Kit) | `site:community.shopify.com` | WebFetch thread URL | Proven — threads active 9+ months |
| **Make Community** | Discourse | iPaaS/automation (ActiveCampaign, Klaviyo, any tool with Make integration) | `site:community.make.com` | `.json` API or WebFetch | Threads get closed via solved plugin — expect ~20% open rate on older threads. Rich integration threads but verify open status. |
| **Klaviyo Community** | Custom (Insided variant) | Ecommerce email/marketing (Klaviyo, Shopify integrations) | `site:community.klaviyo.com` | WebFetch thread URL (category pages JS-rendered) | Proven — active daily, threads stay open |
| **GitHub Issues** | Custom | Dev/API platforms (any with GitHub org) | `gh search issues` | `gh` CLI | Proven — always open, developer audience |
| **Stack Overflow** | Custom | API/dev platforms (SendGrid, Postmark, Mailgun, Customer.io) | `site:stackoverflow.com` | WebFetch | Technical audience, high SEO. Untested in our process. |

#### Tier 2 — Good signal, moderate volume, or blocked pending Firecrawl
| Community | Platform | Best for skills | Search pattern | Status | Notes |
|-----------|----------|----------------|----------------|--------|-------|
| **HubSpot Community** | Khoros | CRM, marketing automation (ActiveCampaign, Brevo) | `site:community.hubspot.com` | **Blocked (403)** — try Firecrawl | Massive volume if unblocked |
| **Salesforce Trailblazer** | Khoros | Enterprise sales (Salesloft, ZoomInfo, Seismic, 6sense) | `site:trailhead.salesforce.com` | **Blocked (JS-rendered)** — try Firecrawl | Enterprise audience if unblocked |
| **Platform-owned communities** | Varies | Platform-specific questions | `site:community.{domain}` | Test per-platform | Many platforms have their own forums (ActiveCampaign, Brevo, etc.) — test thread URLs directly |
| **n8n Community** | Discourse | Automation tools with n8n integration | `site:community.n8n.io` | `.json` API or WebFetch | Limited — auto-closes after ~3 months. Only target threads <3 months old |
| **Dev.to** | Custom | Developer-facing platforms (API-heavy tools) | `site:dev.to` | Untested | Tutorials and discussions, developer trust |

#### Tier 3 — Lower engagement or not suitable for tool-specific replies
| Community | Platform | Best for skills | Status | Notes |
|-----------|----------|----------------|--------|-------|
| **Zapier Community** | Insided | Automation tools | **Blocked (JS-rendered)** — try Firecrawl | Similar to Make Community but can't access |
| **WordPress.org forums** | Custom | WooCommerce tools | **Limited** — threads auto-close, most old | Only viable for very active plugins with recent threads |
| **Indie Hackers** | Custom | N/A | **Not viable for tool replies** | Strategy community — useful for problem signal, not for posting skill replies |
| **BigCommerce Community** | Custom | Ecommerce tools | Untested | Same pattern as Shopify, fewer threads |
| **Hacker News** | Custom | Open-source / dev tools | Untested | Hostile to marketing, loves open-source |
| **Quora** | Custom | Evergreen questions | Untested | Lower quality but high SEO |
| **G2 / Capterra reviews** | N/A | Problem signal only | N/A | Not replyable — use for problem discovery only |

#### Not viable
| Community | Notes |
|-----------|-------|
| **Twitter/X** | Hard to search systematically, replies get buried |
| **Product Hunt** | Spiky around launches, not ongoing |
| **Facebook Groups** | Hard to automate, requires group membership |

**Which skills map to which communities:**
- **Ecommerce email** (Omnisend, Klaviyo, Mailchimp, Kit, GetResponse): Shopify Community, WordPress.org, BigCommerce, Reddit
- **Outbound/prospecting** (Apollo, Reply, Salesloft, Lemlist, Hunter): Reddit r/sales r/coldemail, Salesforce Trailblazer, Indie Hackers
- **Enrichment/validation** (Clay, Clearbit, ZeroBounce, ZoomInfo): Reddit r/sales, HubSpot Community, Salesforce Trailblazer
- **Dev API tools** (SendGrid, Postmark, Mailgun, Customer.io): Stack Overflow, Dev.to, GitHub Discussions
- **Enterprise sales** (Salesloft, ZoomInfo, Seismic, 6sense): Salesforce Trailblazer, HubSpot Community
- **SMB / startup** (any platform): Indie Hackers, Hacker News, Reddit r/SaaS r/Entrepreneur

---

## Immediate Next Actions (next session)

1. **Post the two drafted Omnisend replies** — threads #1 and #2 above are fresh and open. Review `/tmp/community-reply-omnisend-3.md` and `/tmp/community-reply-omnisend-4.md`, post manually.

2. **Draft replies for threads #3-5** — the email marketing performance thread and abandoned cart threads are still viable.

3. **Set up reddit-insights MCP** — sign up, get API key, configure. This unblocks much better Reddit search.

4. **Create `references/community-replies.md`** — start the tracking log with the Omnisend entries.

5. **Pick next skill batch for sweep** — Klaviyo and Mailchimp are the obvious next targets (highest thread volume on Shopify Community).

---

## ActiveCampaign → Make Community Experiment (2026-04-04)

### Context

Originally planned to test HubSpot Community, but it returns 403 on all WebFetch requests. Pivoted to Make Community (community.make.com) — Discourse-based, fully automatable.

### Community profile: Make Community

- **URL**: community.make.com
- **Platform**: Discourse
- **WebFetch**: Works — full content returned
- **Reply boxes**: Present, open to registered users
- **Thread lifespan**: No auto-close observed (threads from 2024 still open)
- **Tone**: Technical, workflow-oriented, helpful community with active moderators
- **Best search patterns**: `site:community.make.com "{platform}" OR "{problem}"`
- **Audience**: Automation builders, agencies, technical marketers
- **Competitor mentions**: Tolerated — people discuss ActiveCampaign, Mailchimp, Klaviyo, etc. freely
- **Best for skills**: Any platform with Make/Zapier integration (most sales platforms)

### Threads found and verified

| # | Thread | URL | Posted | Replies | Status | Reply Drafted |
|---|--------|-----|--------|---------|--------|--------------|
| 1 | WhatsApp API + ActiveCampaign cart recovery | https://community.make.com/t/assistance-with-whatsapp-api-and-activecampaign-automation/70527 | 2025-02-19 | 0 | **Unresolved, replyable** | `/tmp/community-reply-activecampaign-1.md` |
| 2 | ActiveCampaign Analytics to Airtable | https://community.make.com/t/activecampaign-analytics/74504 | 2025-03-09 | 9 | Partially resolved | Not yet |
| 3 | Create campaign via AC API call | https://community.make.com/t/how-to-create-campaign-in-active-campaign-using-activecampaign-make-an-api-call-module/64594 | 2024-12-22 | 0 | Unresolved | Not yet |
| 4 | AC API call — dynamic tags | https://community.make.com/t/activecampaign-make-an-api-call/65861 | 2025-01-09 | 9 | Resolved | Not needed |

### Skill enrichments made

Added to `skills/sales-activecampaign/SKILL.md`:
- **Troubleshooting**: "Building WhatsApp/SMS cart recovery in external automation tools instead of natively" — users build complex Make/Zapier scenarios when AC's native WhatsApp channel + automation builder can handle it

### What we learned

1. **Make Community is a strong new channel** — Discourse-based, fully automatable, high density of platform-integration threads
2. **iPaaS communities surface "wrong tool for the job" problems** — users building complex middleware when native platform features exist. This is our sweet spot.
3. **HubSpot Community is blocked** — 403 on all requests. Added to `references/blocked-communities.md`
4. **Thread recency varies** — AC-specific threads cluster around 2024-2025, but upstream email automation threads are fresh (2026)

---

## Apollo → Indie Hackers Experiment (2026-04-04)

### Result: Not viable for tool-specific outreach

Indie Hackers is a strategy/founder community, not a tool Q&A community. Threads discuss *how to think about outbound* — cold email philosophy, copywriting frameworks, customer acquisition strategy. They don't ask "how do I configure Apollo" or "my CRM sync is broken."

### Community profile: Indie Hackers

- **URL**: indiehackers.com
- **WebFetch**: Works — full content returned
- **Reply boxes**: Present (requires sign-in)
- **Thread lifespan**: Very long — threads from 2023 still getting comments in 2026
- **Tone**: Founder-to-founder, strategic, experience-sharing
- **Audience**: Solo founders, indie makers, bootstrapped startups
- **Best for**: Upstream "how do I get customers" discussions — but these are strategy threads, not tool questions
- **NOT good for**: Platform-specific skill replies. Tool mentions happen in comments but the threads aren't asking for tool help.
- **Verdict**: Demote from outreach target. Useful for problem signal discovery (what founders struggle with) but not for posting skill replies.

### What we learned

1. Indie Hackers threads are strategic, not tactical — people discuss frameworks and philosophy, not tool configuration
2. Recent threads (Mar 2026) have engagement but are about cold email copywriting, not "which tool should I use"
3. Tool-specific Apollo questions would appear on Reddit r/sales or Apollo's own community — both currently blocked
4. Community is still valuable for discovering upstream problems to enrich skills, just not for posting replies

---

## Klaviyo → Klaviyo Community Experiment (2026-04-04)

### Context

Originally planned WordPress.org forums, but all Klaviyo plugin threads are 1-11 years old and auto-closed. Tested community.klaviyo.com — individual thread pages are publicly accessible despite category listing pages being JS-rendered. Active community with daily posting.

### Community profile: Klaviyo Community

- **URL**: community.klaviyo.com
- **Platform**: Custom forum (Insided/Gainsight)
- **WebFetch**: Works on individual thread URLs. Category listing pages are JS-rendered (no content in HTML), but thread URLs return full content
- **Reply boxes**: Present, open to registered users
- **Thread lifespan**: Threads stay open — no auto-close observed. Solved threads can still receive replies.
- **Tone**: Mix of beginners and experienced marketers. Community managers actively respond. Friendly, helpful.
- **Best search patterns**: `site:community.klaviyo.com "{problem}" {year}`, then browse category pages for recent threads not yet indexed
- **Audience**: E-commerce marketers, Shopify store owners, email/SMS marketers, agencies
- **Best for skills**: sales-klaviyo, sales-email-marketing, sales-deliverability, sales-checkout

### Threads found and verified

| # | Thread | URL | Posted | Replies | Status | Reply Drafted |
|---|--------|-----|--------|---------|--------|--------------|
| 1 | Popup not triggering in incognito (Chrome) but works in Safari | https://community.klaviyo.com/marketing-30/popup-not-triggering-in-incognito-chrome-but-works-in-safari-desktop-only-issue-19175 | 2026-04-01 | 4 | **Open, unresolved** | `/tmp/community-reply-klaviyo-1.md` |
| 2 | Action required Shopify integration | https://community.klaviyo.com/marketing-30/action-required-shopify-integration-19177 | 2026-04-01 | 2 | **Open, unresolved** | Not yet |
| 3 | 2 Questions about flow + missing profile filter | https://community.klaviyo.com/marketing-30/2-question-about-creating-a-certain-flow-and-also-a-missing-profile-filter-19152 | 2026-03-25 | 2 | **Open, unresolved** | Not yet |

### Skill enrichments made

Added to `skills/sales-klaviyo/SKILL.md`:
- **Troubleshooting**: "Klaviyo popup/form not triggering in Chrome but works in Safari" — duplicate `klaviyo.js` script loading causes race condition; Chrome's stricter execution exposes it
- **Troubleshooting**: "Shopify integration showing 'Action Required' and reconnection failing" — broken OAuth handshake after billing disruption; must initiate reconnection from Klaviyo, not Shopify App Store

### What we learned

1. **Klaviyo Community is a strong channel** — publicly accessible threads, active daily posting, mix of beginner and advanced questions
2. **Category pages are JS-rendered but individual threads work** — need to use WebSearch to discover thread URLs, then WebFetch individual threads to verify
3. **Problems cluster around Shopify integration** — broken OAuth, tracking events not syncing, duplicate scripts. These are exactly what our skill covers.
4. **Community members help each other** — not just Klaviyo staff. Good environment for skill replies that add structured troubleshooting.

---

## Salesloft → All Communities Blocked (2026-04-04)

### Result: No viable automatable community found

Every community where Salesloft users ask questions is blocked for automated access. Enterprise sales tools live in an ecosystem of JS-rendered forums (Khoros, custom) that WebFetch can't parse.

### Communities tested

| Community | Platform | Result |
|-----------|----------|--------|
| champions.salesloft.com | JS-rendered (custom) | Blocked — thread content loaded via JS, HTML is empty shell |
| HubSpot Community | Khoros | Blocked — 403 on all requests |
| Salesforce Trailblazer | Khoros | Blocked — JS-rendered |
| Reddit r/sales | Custom | Blocked — needs reddit-insights MCP |
| Make Community | Discourse | No Salesloft threads (wrong audience — automation builders, not sales reps) |
| Stack Overflow | — | No Salesloft questions found |
| Dev.to | — | Mentions only, no problem threads |
| G2 Reviews | Custom | 403 on WebFetch |
| GitHub Issues | — | Only feature requests (activepieces#12137), not usage questions |

### Problem signal found (from WebSearch, not fetchable threads)

Despite being unable to access threads, WebSearch surfaced real Salesloft problems:
- **A/B subject line confusion in cadences** — threaded emails referencing wrong variant
- **HubSpot-Salesloft integration limitations** — can't trigger cadences from HubSpot workflows, limited data sync
- **CRM sync issues** — contact sharing limitations between HubSpot and Salesloft
- **Email deliverability with automation** — emails auto-sent to spam

These could enrich the skill once we can verify threads are open and reply.

### What we learned

1. **Enterprise sales tools are a dead zone for our current process** — their users live on Khoros-powered forums (HubSpot, Trailblazer) and custom JS-rendered communities that WebFetch can't access
2. **Firecrawl is the critical unblock** — testing Firecrawl on champions.salesloft.com, community.hubspot.com, and trailhead.salesforce.com would unlock the entire enterprise tier
3. **Reddit r/sales is the other unblock** — enterprise sales reps discuss tools on Reddit, but we need reddit-insights MCP to search effectively
4. **Without Firecrawl or reddit-insights, enterprise platforms can only do GitHub Issues outreach** — which is developer-to-developer, not the sales rep audience

### Action items

- [ ] Test Firecrawl on champions.salesloft.com, community.hubspot.com, trailhead.salesforce.com
- [ ] Set up reddit-insights MCP to unlock Reddit r/sales, r/salesops
- [ ] Once either is unblocked, re-run Salesloft test

---

## Mailchimp → Multi-Community Experiment (2026-04-05)

### Context

Tested Mailchimp across Shopify Community, Make Community, Klaviyo Community, and WordPress.org forums. Mailchimp is well-known so threads were abundant, but many were old or closed.

### Communities tested

| Community | Threads Found | Open/Replyable | Notes |
|-----------|--------------|----------------|-------|
| Shopify Community | 21 | 2 | Upstream "which tool" threads active, platform-specific threads mostly old |
| Make Community | 14 | 1 | **4/5 recent threads were closed** — Discourse solved plugin closes threads on resolution. Much lower open rate than previously assumed |
| Klaviyo Community | 15 | 3 | Mostly Mailchimp→Klaviyo migration threads. Open but older (Mar 2025 and earlier) |
| WordPress.org | 14 | ~2 | Some 2025 threads, many auto-closed or old |

### Threads verified and viable

| # | Thread | URL | Last Activity | Status | Reply Drafted |
|---|--------|-----|---------------|--------|--------------|
| 1 | Which email marketing services work well with Shopify? | https://community.shopify.com/t/which-email-marketing-services-work-well-with-shopify/579971 | 2026-03-17 | **Open, upstream** | `/tmp/community-reply-mailchimp-1.md` |
| 2 | Mailchimp issue (archiving non-subscribed contacts) | https://community.make.com/t/mailchimp-issue/100870 | 2026-01-14 | **Open, unresolved** | `/tmp/community-reply-mailchimp-2.md` |

### Skill enrichments made

Added to `skills/sales-mailchimp/SKILL.md`:
- **Troubleshooting**: "Contact status confusion when automating via API or Make/Zapier" — 5 distinct contact statuses (subscribed, non-subscribed, transactional, cleaned, unsubscribed) cause filter mismatches in Make/Zapier modules; correct archive path via API

### What we learned

1. **Make Community threads close more than expected** — Discourse solved plugin marks threads as closed on resolution. 4/5 Mailchimp threads were closed. Previous assessment ("no auto-close") was wrong — updated Tier 1 notes and add-platform skill.
2. **Well-known platforms have too many old threads** — Mailchimp has been around forever, so most search results are years old. Time-scoping searches is critical.
3. **Klaviyo Community is a migration hub** — most Mailchimp mentions on Klaviyo Community are people migrating FROM Mailchimp. Good signal for enriching both skills' migration guidance.

---

## All Tests Summary (2026-04-05)

| Test | Skill | Original Community | Pivoted To | Result | Enrichments | Replies |
|------|-------|--------------------|------------|--------|-------------|---------|
| 1 | ActiveCampaign | HubSpot Community (blocked) | Make Community | Success | 1 Troubleshooting entry | 1 draft |
| 2 | Apollo | Indie Hackers | — | Not viable (strategy community) | 0 | 0 |
| 3 | Klaviyo | WordPress.org (old/closed) | Klaviyo Community | Success | 2 Troubleshooting entries | 1 draft |
| 4 | Salesloft | Trailblazer (blocked) | All blocked | Blocked | 0 (problem signal only) | 0 |
| 5 | Mailchimp | Multi-community | — | Success | 1 Troubleshooting entry | 2 drafts |

### Key takeaways

1. **Ecommerce tools have accessible communities** — Shopify Community, Klaviyo Community, Make Community all work. Ecommerce platforms are our strongest outreach channel.
2. **Enterprise tools are blocked** — HubSpot, Trailblazer, Champions.salesloft.com are all JS-rendered or 403. Need Firecrawl to unlock.
3. **iPaaS communities (Make) surface "wrong tool for the job" problems** — users building complex middleware when native features exist. This is our sweet spot.
4. **Make Community threads close more than expected** — solved plugin closes resolved threads. ~20% open rate on older threads. Still valuable but verify open status via `.json` API before drafting.
5. **Platform-owned communities are worth testing** — Klaviyo Community was initially written off but turned out to be fully accessible on individual thread URLs.
6. **Discourse JSON API is a fast verification shortcut** — `.json` endpoint on Make/n8n gives structured thread status without HTML parsing.
7. **Two unblocks would dramatically expand reach**: Firecrawl (enterprise communities) and reddit-insights MCP (Reddit).

---

## Files Reference

| File | Purpose |
|------|---------|
| `/Users/lars/.claude/skills/add-platform/SKILL.md` | Main skill — contains Step 1b problem discovery + community reply process |
| `references/skill-backlog.md` | Upstream problems without dedicated skills |
| `references/community-outreach-plan.md` | This file — process plan and findings |
| `skills/sales-omnisend/SKILL.md` | Enriched with discovered pain points |
| `/tmp/community-reply-omnisend-1.md` | Draft: double order confirmation (too old to post) |
| `/tmp/community-reply-omnisend-2.md` | Draft: subscriber count mismatch (too old to post) |
| `/tmp/community-reply-omnisend-3.md` | Draft: honest advice on email tools (**post this**) |
| `/tmp/community-reply-omnisend-4.md` | Draft: best email marketing for Shopify (**post this**) |
| `/tmp/community-reply-mailchimp-1.md` | Draft: which email marketing services for Shopify (**post this**) |
| `/tmp/community-reply-mailchimp-2.md` | Draft: Mailchimp archiving non-subscribed contacts via Make (**post this**) |
