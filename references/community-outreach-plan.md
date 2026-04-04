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

**Priority order** (by expected thread volume):
1. Email marketing tools: sales-klaviyo, sales-mailchimp, sales-sendgrid, sales-brevo, sales-activecampaign
2. Outbound/prospecting: sales-apollo, sales-reply, sales-salesloft, sales-lemlist, sales-hunter
3. Enrichment/validation: sales-clay, sales-clearbit, sales-zerobounce, sales-zoominfo
4. Ecommerce marketing: sales-omnisend (done), sales-getresponse, sales-iterable, sales-customerio
5. Niche tools: sales-lobstr, sales-outscraper, sales-minelead, sales-skrapp, etc.

**Search templates per skill**:
- Upstream: `"{problem the skill solves}" site:reddit.com` / `reddit_search("{problem in user's words}")`
- Platform: `"{platform name}" help OR issue OR not working site:community.shopify.com` (or relevant community)
- Comparison: `"{platform} vs {competitor}" reddit` — great for upstream "which tool" threads

### Phase 4 — Automate thread freshness checking

**Goal**: Instead of manually WebFetching every thread to check if it's open, batch-verify a list of URLs.

**Approach**: Write a small script that:
1. Takes a list of thread URLs
2. Fetches each one
3. Extracts last reply date
4. Flags threads that are <6 months old and still active
5. Outputs a filtered list of replyable threads

This could be a simple Python script in `scripts/check-threads.py` or integrated into the add-platform skill as a helper.

### Phase 5 — Reddit automation (optional, lower priority)

**Goal**: Use reddit-automation skill (already installed) to post replies directly from Claude Code via Rube MCP.

**Prerequisites**:
- reddit-insights MCP configured (Phase 1)
- Rube MCP configured for Reddit (need Cobalt API key)
- Careful tone calibration — Reddit is harsh on anything that smells like marketing

**Why lower priority**: Manual posting lets us quality-check every reply. Automating too early risks getting flagged as spam. Start manual, move to assisted posting once we have a feel for what works.

### Phase 6 — Expand beyond Shopify Community + Reddit

**Goal**: Find threads on other platforms where our skills are useful.

**Sources to add**:
- **Stack Overflow** — for API/integration questions (sales-sendgrid, sales-postmark, sales-mailgun)
- **Indie Hackers** — for tool recommendation threads
- **Product Hunt discussions** — for newly launched competitor threads
- **G2 review responses** — some platforms let you respond to reviews
- **Twitter/X** — for real-time problem threads (harder to find, harder to reply helpfully)
- **Quora** — lower quality but high SEO, good for evergreen answers

---

## Immediate Next Actions (next session)

1. **Post the two drafted Omnisend replies** — threads #1 and #2 above are fresh and open. Review `/tmp/community-reply-omnisend-3.md` and `/tmp/community-reply-omnisend-4.md`, post manually.

2. **Draft replies for threads #3-5** — the email marketing performance thread and abandoned cart threads are still viable.

3. **Set up reddit-insights MCP** — sign up, get API key, configure. This unblocks much better Reddit search.

4. **Create `references/community-replies.md`** — start the tracking log with the Omnisend entries.

5. **Pick next skill batch for sweep** — Klaviyo and Mailchimp are the obvious next targets (highest thread volume on Shopify Community).

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
