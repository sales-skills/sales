---
name: sales-proposal-template
description: "Design reusable Qwilr proposal templates for your whole sales team. Use when creating a proposal template, building a Qwilr template, standardizing proposals across reps, building a template library, enabling your team with templates, creating consistent proposals, or designing vertical-specific templates."
argument-hint: "[describe your team's needs — what you sell, deal types, what's broken today]"
---

# Design Reusable Qwilr Proposal Templates

Help the user design a system of reusable Qwilr templates that their whole sales team can use — with standardized structure, consistent branding, and token-ready fields for API/CRM auto-population.

## Step 1 — Gather context

Ask the user:

1. **What does your team sell?**
   - Product/service description, typical deal sizes, buyer personas

2. **How many distinct deal types do you have?**
   - A) One product, one buyer type — just need one template
   - B) 2-3 variations (e.g., SMB vs. enterprise, or different products)
   - C) 4+ variations (verticals, regions, product lines)
   - D) Not sure — help me figure it out

3. **What's broken with proposals today?**
   - A) Every rep builds from scratch — inconsistent quality
   - B) We have templates but they're outdated or hard to customize
   - C) Proposals take too long to create
   - D) Pricing is presented inconsistently
   - E) We're starting fresh — no templates exist yet

4. **How do you want reps to use these templates?**
   - A) Manually in Qwilr — pick a template, customize, send
   - B) Auto-generated from CRM data via API
   - C) Both — auto-generated with manual customization
   - D) Not sure — what do you recommend?

## Step 2 — Template strategy

Based on the context, design the template system:

### How many templates do you need?

Use the minimum number of templates that covers your deal types. A good rule of thumb:

| Scenario | Templates needed |
|---|---|
| One product, one buyer | 1 master template |
| One product, SMB + Enterprise buyers | 2 templates (different depth/formality) |
| Multiple products, same buyer | 1 template per product |
| Multiple products + buyer segments | Matrix — but cap at 5-6 and use conditional sections |

### Fixed vs. variable sections

Every template should have:

**Fixed sections** (same across all proposals):
- Company intro / "About Us" — consistent brand story
- Team / contact section — auto-populated per rep
- Legal / terms section — standard terms, rarely changed
- CTA / acceptance section — standard accept flow

**Variable sections** (customized per deal):
- Executive summary — tailored to each prospect's situation
- Problem/solution framing — adapted to the buyer's pain points
- Scope of work — specific to the deal
- Pricing / quote block — deal-specific line items and amounts

**Conditionally included sections** (used for some deals, not others):
- Case studies — pick the one most relevant to the prospect's industry
- Technical architecture — only for technical buyers
- ROI / business case — only for enterprise or executive buyers
- Security & compliance — only when procurement requires it

## Step 3 — Template blueprints

For each template, provide a detailed blueprint:

### Template blueprint format

**Template name**: [name]
**Use when**: [which deal type this is for]
**Audience**: [buyer persona]

| Section | Block Type | Fixed/Variable | Content notes |
|---|---|---|---|
| Cover | Splash | Variable | `{{company_name}}`, `{{contact_name}}`, custom headline |
| Executive Summary | Text | Variable | Rep writes this per deal — provide a fill-in-the-blank framework |
| Problem & Solution | Text | Semi-fixed | Template copy with `{{industry}}` and `{{pain_point}}` tokens |
| Scope of Work | Accordion | Variable | Rep customizes deliverables per deal |
| Pricing | Quote block | Variable | Pre-configured sections and line items, rep adjusts amounts |
| Case Study | Text + Image | Conditional | Library of 3-5 case studies, rep picks the most relevant |
| Timeline | Text | Semi-fixed | Standard phases with `{{start_date}}` token |
| About Us | Text + Image | Fixed | Same across all proposals |
| Team | Text + Image | Variable | Auto-populated with rep's info via `{{rep_name}}`, `{{rep_photo}}` |
| Next Steps | Accept block | Fixed | Standard acceptance flow |

### Copy frameworks for variable sections

For sections reps need to customize, provide fill-in-the-blank frameworks rather than leaving them blank:

**Executive Summary framework**:
> [Company] is [one-line description of their situation]. Based on our conversations with [contact name] and the [team/department], the key priorities are:
>
> 1. [Priority 1 — from discovery]
> 2. [Priority 2 — from discovery]
> 3. [Priority 3 — from discovery]
>
> This proposal outlines how [your company] will address these priorities with [solution overview], delivering [primary expected outcome] within [timeframe].

**Problem/Solution framework**:
> **The challenge**: [Industry] companies like [company] face [common challenge]. Specifically, [contact]'s team is dealing with [specific pain point from discovery].
>
> **Our approach**: [Solution] addresses this by [how it works], which means [outcome in their terms].

Provide similar frameworks for each variable section.

## Step 4 — Token design

Design the substitution tokens for API/CRM auto-population:

### Standard tokens (use across all templates)

| Token | Source | Example |
|---|---|---|
| `{{company_name}}` | CRM: Company name | Acme Corp |
| `{{contact_first_name}}` | CRM: Contact first name | Jane |
| `{{contact_last_name}}` | CRM: Contact last name | Smith |
| `{{contact_title}}` | CRM: Contact title | VP Engineering |
| `{{contact_email}}` | CRM: Contact email | jane@acme.com |
| `{{rep_name}}` | CRM: Deal owner name | Alex Johnson |
| `{{rep_title}}` | CRM: Deal owner title | Account Executive |
| `{{rep_email}}` | CRM: Deal owner email | alex@company.com |
| `{{deal_amount}}` | CRM: Deal amount | $48,000 |
| `{{close_date}}` | CRM: Expected close date | March 30, 2026 |

### Custom tokens (deal-type specific)

| Token | Source | Example |
|---|---|---|
| `{{industry}}` | CRM: Industry field | Financial Services |
| `{{company_size}}` | CRM: Employee count | 500 employees |
| `{{product_name}}` | CRM: Product field | Enterprise Plan |
| `{{seat_count}}` | CRM: Custom field | 25 seats |
| `{{pain_point}}` | Manual or CRM notes | Slow incident response times |
| `{{start_date}}` | CRM: Custom field | April 15, 2026 |

### Token guidelines for the team

- **Always auto-populate**: company_name, contact names, rep info, deal amount — these should never be manually entered
- **Semi-auto**: industry, company_size, product — auto-populated but rep should verify
- **Always manual**: executive summary, pain points, custom scope — these need human judgment
- **Fallback values**: Set sensible defaults for optional tokens so the page doesn't show raw `{{token}}` text if a field is empty

## Step 5 — Asset library and rollout

### Template asset library

Recommend supporting assets to create alongside templates:

- **Case study library**: 3-5 case studies tagged by industry/use case, stored as Qwilr saved blocks
- **Headshot library**: Professional photos of team members for the "Team" section
- **Logo library**: Customer logos for social proof sections
- **Quote block presets**: Pre-configured pricing structures for common deal types

### Team rollout plan

1. **Build**: Create templates in Qwilr using saved blocks
2. **Document**: Write a one-page guide per template — when to use it, which sections to customize, token reference
3. **Train**: Walk the team through 1-2 live examples in a 30-minute session
4. **Test**: Have 2-3 reps create proposals from the templates and collect feedback
5. **Iterate**: Refine based on rep feedback and buyer engagement data (via `/sales-proposal-analytics`)
6. **Automate**: Once templates are stable, connect to CRM for auto-generation (via `/sales-qwilr-automation`)

## Gotchas

- **Don't make templates too rigid.** Templates should give reps a strong starting point, not a straitjacket. If reps can't easily customize the executive summary, scope, and pricing for their specific deal, they'll stop using the template. Use fill-in-the-blank frameworks, not fixed copy.
- **Don't forget variable placeholders.** Every template should use `{{token}}` syntax for fields that will be auto-populated (company name, contact info, rep info, deal amount). Claude sometimes writes templates with hardcoded example values instead of tokens.
- **Don't design for one deal type when the team handles multiple.** Ask how many distinct deal types exist before building templates. A single template for "SMB SaaS" and "Enterprise Financial Services" will serve neither well. But also don't over-segment — most teams need 2-4 templates, not 15.
- **Don't forget mobile responsiveness.** Qwilr pages are web-based and will be viewed on phones and tablets. Avoid designs that depend on side-by-side layouts or wide tables that break on small screens. Test the template on mobile before rolling out.
- **Don't create templates without a rollout plan.** A great template that reps don't know about or don't know how to use is wasted effort. Always include guidance on when to use each template and how to customize the variable sections.

## Related skills

- `/sales-proposal-page` — Write a single proposal from scratch (not from template)
- `/sales-qwilr-automation` — Connect templates to CRM for auto-generation
- `/sales-proposal-analytics` — Track which templates get the best engagement
- `/sales-deal-room` — Design multi-page deal rooms (may need their own templates)
- `/sales-content` — General sales enablement content creation
