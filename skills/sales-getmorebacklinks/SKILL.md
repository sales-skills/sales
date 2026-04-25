---
name: sales-getmorebacklinks
description: "GetMoreBacklinks platform help — managed directory submission service for startups. Use when deciding whether to pay for directory submissions vs doing it yourself, comparing GetMoreBacklinks plans (Starter $87 vs Business $187), setting expectations for DR improvement timeline, evaluating if a managed submission service is worth it for your budget, or troubleshooting why directory submissions didn't improve rankings. Do NOT use for DIY directory submission strategy (use /sales-launch-directory). Do NOT use for backlink analysis or SEO audits (use /sales-semrush)."
argument-hint: "[describe what you need help with — plan selection, expectations, DIY vs managed decision]"
license: MIT
version: 1.0.0
tags: [sales, seo, backlinks, directory-submission, platform]
---

# GetMoreBacklinks Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your goal?**
   - A) Improve domain rating / authority for a new site
   - B) Get backlinks to boost specific page rankings
   - C) Build social proof ("as seen on" directory listings)
   - D) Not sure — just heard directory submissions help SEO

2. **Where are you in the process?**
   - A) Considering GetMoreBacklinks but haven't purchased
   - B) Already purchased — waiting for delivery
   - C) Received submissions — evaluating results
   - D) Disappointed with results — troubleshooting

3. **What's your current domain rating?**
   - A) Brand new domain (DR 0-5)
   - B) Early stage (DR 5-20)
   - C) Established (DR 20-50)
   - D) Strong (DR 50+)
   - E) Not sure

4. **Budget and time?**
   - A) Have money, no time — want someone else to handle it
   - B) Have time, limited budget — willing to DIY
   - C) Want a mix — pay for bulk, DIY the important ones

**Skip-ahead rule**: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| DIY directory submission strategy | `/sales-launch-directory [your question]` |
| Specific directory platform help | `/sales-{platform} [your question]` (e.g., `/sales-producthunt`, `/sales-betalist`) |
| SEO audit or backlink analysis | `/sales-semrush [your question]` |
| Email deliverability for outreach | `/sales-deliverability [your question]` |
| Landing page optimization before submitting | Use `/audit-website [your URL]` |

If the question is about GetMoreBacklinks specifically, continue to Step 3.

## Step 3 — GetMoreBacklinks platform reference

**Read `references/platform-guide.md`** for the full platform reference — plans, pricing, submission process, what's included, and expected outcomes.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Decision framework: managed vs DIY**
- **Pay for managed** when: new to SEO, no time to research directories, want bulk submissions done quickly, budget > $100
- **DIY** when: you want control over which directories, have time to optimize each listing, want to target high-DR directories specifically, budget < $100
- **Hybrid**: Use GetMoreBacklinks for bulk lower-tier directories, manually submit to top-tier platforms (Product Hunt, BetaList, Indie Hackers) where listing quality matters

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **One-time fee per website** — each product/domain requires a separate purchase. Serial launchers should factor this into total cost.
- **14 working day delivery** — not calendar days. Expect ~3 weeks from purchase to completed submissions.
- **DR 30+ guarantee** is within 45 working days — don't expect immediate DR jumps. Backlinks take weeks to be crawled and indexed.
- **You don't choose the directories** (Starter/Advanced plans) — expert-curated selection. Business/Pro plans allow hand-picking.
- **Blog posts (Pro plan only)** — the 5 SEO blog posts are written for your site, not guest posts on other sites.
- **No API or self-service dashboard** — this is a done-for-you service, not a tool. Communication is via email.
- **Mixed trust scores online** — ScamAdviser and ScamDoc show low trust scores. Research and verify before purchasing large plans.

## Related skills

- `/sales-directory-submission` — Compare directory submission services (ListingBott, LaunchDirectories, SubmitSaaS, AutoSaaSLaunch, StartupSubmit, SubmitJuice). Install:
  `npx skills add sales-skills/sales --skill sales-directory-submission`
- `/sales-launch-directory` — DIY directory submission strategy across 30+ platforms. Covers which directories to submit to, in what order, and how to optimize listings. Install: `npx skills add sales-skills/sales --skill sales-launch-directory`
- `/sales-semrush` — Track your domain rating, backlinks, and keyword rankings after submissions
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Should I pay for directory submissions or do it myself?
**User says**: "I just launched a SaaS tool and I'm thinking about using GetMoreBacklinks. Is it worth $187 or should I just submit to directories myself?"
**Skill does**: Evaluates the user's time vs money tradeoff, explains what 200 submissions actually gets you (mostly low-to-mid DR directories), recommends a hybrid approach — DIY the top 10 high-DR directories with `/sales-launch-directory`, then consider GetMoreBacklinks for the long tail if time is scarce.

### Example 2: Setting expectations after purchase
**User says**: "I bought the Business plan. What should I expect for my DR and when?"
**Skill does**: Sets realistic expectations — DR improvement depends on starting point, most directory backlinks are low-to-mid authority so DR gains are gradual (typically single digits over 2-3 months), explains that 200 submissions doesn't mean 200 live backlinks immediately, recommends tracking with Semrush or Ahrefs.

### Example 3: Results seem underwhelming
**User says**: "Got my GetMoreBacklinks report back but my rankings haven't changed"
**Skill does**: Explains that directory backlinks are a long-term SEO signal, not a rankings shortcut. Checks whether the user verified the submissions are actually live and indexed. Recommends supplementing with higher-quality link building and content, routes to `/sales-semrush` for tracking.

## Troubleshooting

### DR hasn't improved after submissions
**Symptom**: Purchased a plan, received the report, but domain rating hasn't moved
**Cause**: Directory backlinks are mostly low-to-mid authority. DR improvements from directory submissions alone are typically small (2-15 points) and take 2-3 months to reflect in tools like Ahrefs/Semrush. Google needs to crawl and index each listing first.
**Solution**: Verify listings are live by spot-checking 10-15 URLs from the report. Check Google Search Console for new referring domains. Give it 60-90 days before evaluating. For faster DR gains, supplement with guest posts, content marketing, and PR.

### Not sure which plan to choose
**Symptom**: Confused between Starter ($87), Advanced ($127), Business ($187), and Pro ($247)
**Cause**: The plans differ primarily in submission count and whether you get to hand-pick directories
**Solution**: For most startups, Advanced ($127, 100 submissions) is the sweet spot — enough volume to move the needle without overpaying. Business ($187) adds hand-picking control. Pro ($247) only makes sense if you also need blog content. Starter ($87, 50 submissions) is fine for testing.

### Submissions not appearing in backlink checkers
**Symptom**: Report says submissions are complete but Ahrefs/Semrush doesn't show new backlinks
**Cause**: Backlink crawlers have delays. Ahrefs updates every 1-2 weeks, Semrush monthly. Some directory listings may not be crawled for weeks.
**Solution**: Wait 30-60 days, then re-check. Manually verify 5-10 listings from the report by visiting the URLs. If listings are live but not in backlink tools, they simply haven't been crawled yet. You can submit the directory listing URLs to Google Search Console's URL Inspection tool to speed up indexing.
