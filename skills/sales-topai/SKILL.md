---
name: sales-topai
description: "TopAI.tools platform help — curated AI tools directory (2,700+ tools, 120+ categories, ~1-1.9M monthly visits, daily updates). Covers free submission (48-hour review), Fast Track ($39, 24-48 hours, no queue), Boosted listing ($229, featured site-wide 7 days, top category spots), listing optimization for search visibility, and SEO backlink value. Use when submitting an AI tool to TopAI.tools, wondering if the $39 Fast Track is worth it, want a Boosted featured listing on TopAI.tools, comparing TopAI.tools with TAAFT or Futurepedia, or trying to optimize your TopAI.tools listing for clicks. Do NOT use for multi-directory launch coordination (use /sales-launch-directory). Do NOT use for other AI directories like TAAFT (use /sales-theresanaiforthat) or Futurepedia (use /sales-futurepedia)."
argument-hint: "[describe what you need help with on TopAI.tools]"
license: MIT
version: 1.0.0
tags: [sales, product-launch, startup, directory, platform, ai-tools]
---

# TopAI.tools Platform Help

Helps with everything related to using TopAI.tools — a curated AI tools directory with 2,700+ tools across 120+ categories, ~1-1.9M monthly visits, and daily updates. Uses a curated approval model with free and paid submission tiers.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are you trying to do on TopAI.tools?**
   - A) Submit my AI tool / get listed
   - B) Get a Boosted featured listing for maximum visibility
   - C) Understand the SEO and backlink value
   - D) Compare TopAI.tools with other AI directories
   - E) Something else — describe it

2. **What's your product?**
   - A) AI SaaS / web app
   - B) AI API / developer tool
   - C) AI agent / automation
   - D) AI content tool (writing, image, video)
   - E) AI coding tool / IDE assistant
   - F) Other AI tool — describe it

3. **What's your budget for this listing?**
   - A) $0 — free submission only
   - B) $39 for Fast Track (skip the queue)
   - C) $229 for Boosted (featured site-wide for 7 days)
   - D) Budget is flexible — optimize for results

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Multi-directory launch planning → `/sales-launch-directory`
- TAAFT-specific questions → `/sales-theresanaiforthat`
- Futurepedia-specific questions → `/sales-futurepedia`
- Altern-specific questions → `/sales-altern`
- PitchWall-specific questions → `/sales-pitchwall`
- Product Hunt launch → `/sales-producthunt`
- SEO strategy beyond directories → `/sales-semrush`

When routing, provide the exact command: "This is a multi-directory question — run: `/sales-launch-directory {user's original question}`"

Otherwise, answer directly from the platform reference below.

## Step 3 — TopAI.tools platform reference

**Read `references/platform-guide.md`** for the full platform reference — submission tiers, pricing, featured listings, optimization tips, and comparisons.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**For submitting a tool:**
1. Ensure your tool genuinely incorporates AI/ML features — non-AI tools are rejected (refund issued)
2. Write a clear, benefit-focused description — TopAI.tools uses AI-powered search, so optimize for discovery
3. Choose your tier: free (48-hour review), Fast Track $39 (24-48 hours, no queue), or Boosted $229 (7 days featured)
4. One payment secures a permanent listing — no recurring fees

**For maximizing the $229 Boosted listing:**
1. Coordinate with other directory submissions via `/sales-launch-directory`
2. Time your Boosted week to coincide with a Product Hunt launch or major update
3. Boosted gives top spots in category pages — pick accurate categories for maximum exposure
4. Use UTM parameters on your TopAI.tools listing URL to track referral conversions

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may be outdated.*

- **AI tools only.** Non-AI products are rejected with a full refund. Your tool must incorporate actual AI/ML features.
- **Listings are permanent.** One payment (or free approval) secures your spot indefinitely — no recurring fees or expiration.
- **Boosted is time-limited.** The $229 Boosted tier features you for 7 days only. After that, your listing reverts to standard visibility.
- **No public API.** Unlike TAAFT, TopAI.tools doesn't offer a public API or ChatGPT plugin for querying the directory.
- **Curated directory.** TopAI.tools reviews every submission (48-hour target). No instant self-publishing.
- **Search is AI-powered.** Listing descriptions should use natural language about what problems your tool solves, not keyword-stuffed feature lists.
- **No newsletter.** Unlike TAAFT (1M+ subscribers) or Futurepedia (YouTube 2M+), TopAI.tools doesn't have a known newsletter or content distribution channel beyond the directory itself.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-launch-directory` — Coordinate launches across 30+ directories including TopAI.tools. Install:
  `npx skills add sales-skills/sales --skill sales-launch-directory`
- `/sales-theresanaiforthat` — TAAFT (#1 AI directory, 42,000+ tools, 3-4M visits/mo, DR76 dofollow, $347)
- `/sales-futurepedia` — Futurepedia (5,700+ tools, ~2M visits/mo, $497 Verified, YouTube 2M+ subs)
- `/sales-altern` — Altern AI directory (10,000+ tools, free + featured tiers, dofollow backlinks)
- `/sales-pitchwall` — PitchWall (65K+ products, $99 Premium, 45K+ newsletter)
- `/sales-producthunt` — Product Hunt (DR91 dofollow, 5M+ visits/mo)
- `/sales-semrush` — SEO and online visibility platform (keyword research, backlink analysis)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Submit an AI tool to TopAI.tools
**User says**: "I built an AI meeting summarizer and want to get it listed on TopAI.tools"
**Skill does**:
1. Confirms the tool qualifies (AI-powered = yes)
2. Recommends Fast Track ($39) if they want it live within 24-48 hours without waiting
3. Advises writing a task-focused description: "Summarizes your Zoom and Google Meet calls into action items" not "GPT-4 powered meeting transcription platform"
4. Notes listings are permanent — one-time payment, no recurring fees
5. Suggests coordinating with other directory submissions via `/sales-launch-directory`
**Result**: Clear submission plan with pricing recommendation

### Example 2: Compare TopAI.tools with other AI directories
**User says**: "Should I pay $39 for TopAI.tools or $347 for TAAFT?"
**Skill does**:
1. Compares traffic: TAAFT ~3-4M/mo vs TopAI.tools ~1-1.9M/mo
2. Compares pricing: TopAI.tools Fast Track $39 vs TAAFT $347 (but TAAFT has $300 PPC bonus for first-launch, netting $47)
3. Notes TAAFT has DR76 dofollow backlink and 1M+ newsletter subscribers — bigger SEO and distribution value
4. Points out TopAI.tools is much cheaper entry point and listings are also permanent
5. Recommends both if budget allows — TopAI.tools as easy win, TAAFT for maximum reach
**Result**: Cost-benefit comparison with budget-aware recommendation

### Example 3: Get maximum visibility with Boosted listing
**User says**: "I want to go all-in on TopAI.tools with the Boosted listing"
**Skill does**:
1. Explains Boosted ($229) gives 7 days of site-wide featuring + top spots in category pages
2. Recommends timing the Boosted week to coincide with a Product Hunt launch or marketing push
3. Advises selecting the most relevant categories — Boosted amplifies category placement
4. Suggests tracking with UTM parameters to measure the 7-day ROI
5. Notes that after 7 days, listing reverts to standard — the permanent value is the directory listing itself
**Result**: Boosted strategy with timing and measurement plan

## Troubleshooting

### Submission not approved after 48+ hours
**Symptom**: Submitted (free or paid) but tool isn't listed yet
**Cause**: Manual review queue. Could be delayed due to volume, or tool may not meet AI-tool criteria.
**Solution**: Wait up to 5 business days. If still no update, email [email protected]. TopAI.tools issues full refunds if the tool isn't accepted. Ensure your tool clearly demonstrates AI/ML functionality.

### Listing gets few clicks despite being live
**Symptom**: Listed on TopAI.tools but referral traffic is minimal
**Cause**: TopAI.tools uses AI-powered search — your listing needs to match what users search for. Category placement also affects visibility.
**Solution**: Rewrite your description to lead with the problem your tool solves using natural language. Check which categories your tool appears in and ensure they're the most relevant ones. Consider the Fast Track or Boosted tier for enhanced visibility. For sustained traffic, pair with other directories via `/sales-launch-directory`.

### Not sure if TopAI.tools backlink is dofollow
**Symptom**: Listed but can't confirm backlink type for SEO
**Cause**: TopAI.tools' backlink type (dofollow vs nofollow) isn't consistently documented across sources.
**Solution**: After your listing goes live, inspect the HTML of your listing page — look for `rel="nofollow"` on your outbound link. If absent, it's dofollow. Use Ahrefs or Semrush to verify once indexed. The directory has Authority Score 48 (Semrush), so the backlink has moderate SEO value regardless of follow status.
