# Sales Content Platform Guide

## Content taxonomy

Organize content along these dimensions:

- **By buyer journey stage**: Awareness → Consideration → Decision → Expansion
- **By persona**: C-suite, VP/Director, Manager, Individual contributor, Technical evaluator
- **By use case**: Prospecting, Discovery, Demo follow-up, Proposal, Objection handling, Competitive displacement, Renewal
- **By content type**: Battle card, One-pager, Case study, Deck, Playbook, Calculator, Template

## Content audit framework

| Metric | What to measure | Action threshold |
|---|---|---|
| **Usage rate** | % of content used by reps in last 90 days | <20% → archive or refresh |
| **Win correlation** | Content shared in won vs lost deals | Low correlation → rework messaging |
| **Time to find** | How long reps spend searching | >2 min → improve taxonomy/search |
| **Freshness** | Days since last update | >180 days → review and refresh |
| **Coverage gaps** | Personas/stages with no content | Any gap → prioritize creation |

## Content types deep dive

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

## Content governance

- **Ownership**: Every piece of content needs an owner (person responsible for updates)
- **Review cadence**: Quarterly for battle cards, semi-annual for case studies, annual for playbooks
- **Approval workflow**: Draft → Review (SME) → Approve (marketing) → Publish
- **Retirement policy**: Archive content unused for 6+ months; delete after 12 months archived
- **Version control**: Always publish the latest version; prevent reps from sharing outdated content

## Platform-specific guidance

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
