---
name: sales-content
description: "Sales content management — organizing, distributing, and measuring sales collateral (battle cards, one-pagers, case studies, decks, playbooks, ROI calculators). Also covers content governance, content audits, and sales-marketing alignment on content. Use when reps can't find the right content for deals, battle cards are outdated or missing, collateral is scattered across too many tools, no visibility into which content actually gets used, marketing creating content sales ignores, or unsure if content is helping win deals. Do NOT use for writing marketing copy (use /copywriting), Seismic-specific platform help (use /sales-seismic), Allego-specific platform help (use /sales-allego), proposal page design (use /sales-proposal-page), or email sequence copywriting (use /sales-cadence)."
argument-hint: "[describe your sales content question — e.g., 'organize our battle cards' or 'audit which content reps actually use']"
license: MIT
version: 1.0.0
tags: [sales, content, enablement, collateral]
---
# Sales Content Management

Help the user organize, distribute, measure, and govern sales collateral — from building a content library and creating battle cards through auditing content effectiveness and aligning marketing with sales on content needs. This skill is tool-agnostic and applies to any enablement platform (Seismic, Allego, Highspot, Showpad, Guru) or general-purpose tool (Google Drive, SharePoint, Notion).

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need to do?**
   - A) Build a content library from scratch
   - B) Organize/restructure existing content
   - C) Create specific content (battle card, one-pager, case study, playbook)
   - D) Audit content usage and effectiveness
   - E) Set up content governance/workflows
   - F) Improve content findability for reps
   - G) Other

2. **What types of content?**
   - A) Battle cards
   - B) One-pagers/datasheets
   - C) Case studies
   - D) Sales decks/presentations
   - E) Playbooks/guides
   - F) ROI calculators/tools
   - G) Email templates
   - H) All of the above

3. **Team size?**
   - A) Under 10 reps
   - B) 10-50
   - C) 50-200
   - D) 200+

4. **Current content tool?**
   - A) Seismic
   - B) Allego
   - C) Highspot
   - D) Showpad
   - E) Guru
   - F) Google Drive/SharePoint/Notion
   - G) No dedicated tool
   - H) Other

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Content strategy

**Read `references/platform-guide.md`** for detailed content taxonomy, audit framework, content type structures, governance model, and platform-specific guidance (Seismic, Allego, Highspot, Showpad, Guru, Google Drive/SharePoint/Notion).

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 3 — Actionable guidance

### Building a content library from scratch

1. **Audit**: Inventory all existing content across all locations (shared drives, email attachments, rep desktops, Slack messages). Expect to find 2-3x more content than anyone thinks exists.
2. **Score**: Rate each piece on usage (is it being shared?), freshness (when was it last updated?), and quality (is it on-message?). Archive anything that fails 2 of 3.
3. **Taxonomy**: Define your organizing structure — by buyer journey stage, then persona, then content type. Keep it to 3 levels max or reps won't navigate it.
4. **Migrate**: Move surviving content into your taxonomy. Re-tag and rename everything consistently. This is the hardest step — budget 2-4 weeks for a team of 50+ reps.
5. **Governance**: Assign owners, set review cadences, define the approval workflow. Without this, you'll be back to chaos in 6 months.
6. **Launch**: Train reps on the new library. Show them how to find content in <30 seconds. Get feedback in the first 2 weeks and adjust taxonomy based on search patterns.

### Content creation prioritization

Focus on the highest-impact content first:

1. **Decision stage** — battle cards, ROI calculators, competitive comparisons (these directly influence close rates)
2. **Proposal stage** — case studies, one-pagers, reference materials (buyers need validation before signing)
3. **Discovery stage** — playbooks, discovery question guides, demo frameworks (improve qualification)
4. **Awareness stage** — educational content, industry reports (lower priority for sales content; this is marketing's domain)

### Measuring content ROI

Tie content usage to pipeline and revenue metrics:

1. **Tag content per opportunity**: Track which content pieces are shared in each deal
2. **Win rate by content**: Compare win rates for deals where specific content was shared vs not shared
3. **Time-to-close impact**: Measure whether certain content accelerates deal velocity
4. **Rep adoption**: Track which reps use the content library and correlate with their performance
5. **Content-influenced pipeline**: Calculate total pipeline value of deals where content was shared

## Gotchas

- **Don't create content without talking to reps first.** Claude tends to suggest content based on marketing strategy. The most valuable content addresses what reps actually need — ask your top 5 performers what they wish they had.
- **Don't organize content by department (marketing, product, sales).** Organize by how reps search — by deal stage, persona, or use case. Nobody searches "marketing folder."
- **Don't skip the audit before building.** Most teams have 60%+ unused content. Building a new library on top of stale content makes findability worse, not better.
- **Don't create battle cards longer than 2 pages.** Reps need quick-reference cards they can scan in 30 seconds before a call. Long documents don't get used.
- **Don't forget to measure content effectiveness, not just usage.** A battle card used 100 times that doesn't improve win rates needs reworking. Track content's correlation with deal outcomes, not just downloads.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-seismic` — Seismic platform help (for Seismic-specific content management setup)
- `/sales-allego` — Allego platform help (for Allego-specific content management and AI recommendations)
- `/sales-seamless` — Seamless.AI platform help (Pitch Intelligence for AI-generated prospect-level content)
- `/sales-coaching` — Sales coaching and training (content for onboarding and enablement programs)
- `/sales-compete` — Competitive displacement campaigns (battle cards and competitive content)
- `/sales-proposal-page` — Proposal page design (Qwilr proposals)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Organizing a messy content library
**User says**: "I need to organize our sales content — we have 500+ docs scattered across Google Drive and no one can find anything"
**Skill does**:
1. Audits existing content, proposes taxonomy by stage/persona/type
2. Recommends scoring each piece on usage, freshness, and quality
3. Suggests migration plan with timeline based on team size
4. Sets up governance with owners, review cadences, and retirement policy
5. Recommends upgrading to a dedicated enablement platform for tracking
**Result**: Full content library build plan with taxonomy, migration steps, governance framework, and platform recommendation

### Example 2: Creating battle card templates
**User says**: "Create a battle card template for our top 3 competitors"
**Skill does**:
1. Provides battle card structure (Overview → Strengths/Weaknesses → Landmines → Objection responses → Win stories)
2. Recommends 1-2 page max length for rep usability
3. Sets monthly update cadence with assigned ownership
4. Includes competitive research framework for populating the cards
5. Suggests distribution strategy (enablement platform, Slack alerts on updates)
**Result**: Battle card template with structure, update cadence, ownership model, and distribution plan

### Example 3: Measuring content effectiveness
**User says**: "How do I measure which content actually helps close deals?"
**Skill does**:
1. Sets up content-to-deal correlation tracking (tag content shared per opportunity)
2. Defines key metrics: win rate by content piece, time-to-close impact, rep adoption
3. Distinguishes usage metrics (downloads, views) from effectiveness metrics (win correlation)
4. Recommends content-influenced pipeline calculation
5. Creates a quarterly content review process based on effectiveness data
**Result**: Content measurement framework with specific metrics, tracking approach, and review cadence

## Troubleshooting

### Reps don't use the content library
**Cause**: Content is hard to find, irrelevant, or outdated. Reps default to their own saved versions or ask colleagues directly.
**Solution**: Audit usage to identify what's being ignored. Simplify taxonomy to 3 levels max. Add search functionality. Involve reps in content creation — they're more likely to use content they helped shape. Survey top performers on what's missing.

### Marketing creates content reps don't want
**Cause**: Misalignment between what marketing thinks reps need and what they actually use in deals. Marketing often creates awareness-stage content when reps need decision-stage content.
**Solution**: Run a content needs survey with your top 10 performers. Compare against what marketing is producing. Create a shared content calendar with joint prioritization. Have reps review content before publishing.

### Content goes stale quickly
**Cause**: No governance process. Content is created and never updated. Competitive battle cards reference features from 2 years ago. Case studies cite customers who churned.
**Solution**: Assign an owner to every piece of content. Set review cadences (monthly for battle cards, quarterly for case studies). Automate expiration alerts — content not reviewed within its cadence gets flagged. Archive anything not updated within 2x its review cadence.
