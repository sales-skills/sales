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

### Content taxonomy

Organize content along these dimensions:

- **By buyer journey stage**: Awareness → Consideration → Decision → Expansion
- **By persona**: C-suite, VP/Director, Manager, Individual contributor, Technical evaluator
- **By use case**: Prospecting, Discovery, Demo follow-up, Proposal, Objection handling, Competitive displacement, Renewal
- **By content type**: Battle card, One-pager, Case study, Deck, Playbook, Calculator, Template

### Content audit framework

| Metric | What to measure | Action threshold |
|---|---|---|
| **Usage rate** | % of content used by reps in last 90 days | <20% → archive or refresh |
| **Win correlation** | Content shared in won vs lost deals | Low correlation → rework messaging |
| **Time to find** | How long reps spend searching | >2 min → improve taxonomy/search |
| **Freshness** | Days since last update | >180 days → review and refresh |
| **Coverage gaps** | Personas/stages with no content | Any gap → prioritize creation |

### Content types deep dive

**Battle cards** — competitive intelligence one-pagers for reps:
- Structure: Overview → Strengths/Weaknesses → Landmines (questions to plant) → Objection responses → Win stories
- Update frequency: Monthly or on competitor changes
- Length: 1-2 pages max — reps won't read more

**One-pagers/datasheets** — product/feature summaries for buyers:
- Structure: Problem → Solution → Key features → Social proof → CTA
- One per product/use case/persona combination
- Include a clear "why us" differentiation section

**Case studies** — customer success stories:
- Structure: Challenge → Solution → Results (with metrics) → Quote
- Tag by industry, company size, use case, product
- Minimum 3 quantified results per case study

**Sales playbooks** — step-by-step guides for specific scenarios:
- Structure: When to use → Target persona → Discovery questions → Demo flow → Content to share → Objection handling → Next steps
- One per major use case or sales motion
- Include actual talk tracks, not just bullet points

**ROI calculators** — interactive tools for justifying purchase:
- Structure: Input fields (current metrics) → Calculations → Output (projected savings/gains)
- Must be defensible — use conservative assumptions
- Include methodology explanation for skeptical buyers

### Content governance

- **Ownership**: Every piece of content needs an owner (person responsible for updates)
- **Review cadence**: Quarterly for battle cards, semi-annual for case studies, annual for playbooks
- **Approval workflow**: Draft → Review (SME) → Approve (marketing) → Publish
- **Retirement policy**: Archive content unused for 6+ months; delete after 12 months archived
- **Version control**: Always publish the latest version; prevent reps from sharing outdated content

## Step 3 — Platform-specific guidance

### In Seismic

- **Content Library**: Organize with Content Profiles (metadata schemas) and Content Classes (taxonomy). Use Predictive Content to surface relevant content to reps based on deal context.
- **LiveDocs**: Auto-generate personalized one-pagers, proposals, and datasheets by pulling CRM data into templates. Use LiveDocs Express for quick generation, Process for approval workflows.
- **Analytics**: Track content usage, engagement (via LiveSend), and win correlation. Seismic's reporting shows which content is used in won deals.
- **Governance**: Use workspaces for content authoring with review/approval workflows before publishing to the library.

### In Allego

- **Content Library**: Centralized repository with AI-powered content recommendations. AI surfaces relevant content based on deal context, buyer persona, and sales stage.
- **Content sharing**: Share content via tracked links or Digital Sales Rooms. Track who opened, what they viewed, and time spent per item.
- **Agile content**: Quick-capture format for reps to share timely knowledge — competitive updates, win stories, product changes — without formal course creation. Peer content alongside formal library content.
- **Engagement analytics**: Track content usage, sharing activity, and engagement. Identify which content correlates with won deals.
- **Governance**: Version control, expiration dates, approval workflows. Content tagging drives AI recommendations — thorough metadata is critical.

### In Highspot

- **SmartPages**: Create curated content collections organized by sales play, persona, or deal stage.
- **Spots**: Organize content into browsable categories with role-based access.
- **Analytics**: Track pitch activity, content engagement, and scorecard metrics.
- **AI recommendations**: Highspot's AI surfaces relevant content based on CRM context.

### In Showpad

- **Content Management**: Organize with channels and collections. Tag content by buyer stage and persona.
- **Shared Spaces**: Create buyer-facing content rooms similar to Seismic DSRs.
- **Analytics**: Track content usage and engagement across the buyer journey.

### In Seamless.AI (Pitch Intelligence)

- **Pitch Intelligence**: AI-generated personalized talk tracks, email copy, and conversation starters based on prospect data, company news, and intent signals. Not a traditional content library — it's real-time AI-generated content.
- **Use case**: Pre-call prep (generate talk tracks based on the prospect's profile and company data), email personalization (AI drafts personalized angles), and competitive positioning (Pitch Intelligence pulls relevant differentiation based on the prospect's tech stack).
- **Limitation**: Pitch Intelligence generates individual prospect-level content, not reusable team-wide assets. For battle cards, playbooks, and shared content libraries, use Seismic, Highspot, or another enablement platform.
- **Best practice**: Use Pitch Intelligence as a personalization layer on top of your content library. It doesn't replace battle cards or case studies — it helps reps apply them to specific prospects.

### In Guru

- **Knowledge Cards**: Create bite-sized content cards for battle cards, objection handling, and product info.
- **Verification**: Built-in content verification workflow ensures cards stay current.
- **Browser extension**: Reps access content in-context without leaving their workflow.

### In Google Drive / SharePoint / Notion

- **Folder structure**: Mirror your taxonomy (by stage → by persona → by type). Use naming conventions religiously.
- **Limitations**: No engagement tracking, no content recommendations, no governance workflows. Workable for <20 reps but breaks down at scale.
- **Upgrade path**: When reps can't find content or you can't measure usage, it's time for a dedicated enablement platform.

## Step 4 — Actionable guidance

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

## Related skills

- `/sales-seismic` — Seismic platform help (for Seismic-specific content management setup)
- `/sales-allego` — Allego platform help (for Allego-specific content management and AI recommendations)
- `/sales-seamless` — Seamless.AI platform help (Pitch Intelligence for AI-generated prospect-level content)
- `/sales-coaching` — Sales coaching and training (content for onboarding and enablement programs)
- `/sales-compete` — Competitive displacement campaigns (battle cards and competitive content)
- `/sales-proposal-page` — Proposal page design (Qwilr proposals)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
