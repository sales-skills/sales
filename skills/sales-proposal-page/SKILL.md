---
name: sales-proposal-page
description: "Write and structure a Qwilr proposal page that closes deals. Use when writing a Qwilr proposal, structuring a proposal page, building a Qwilr quote, creating a pricing table, designing an interactive proposal, laying out a web proposal, or planning proposal page sections."
argument-hint: "[describe what you're proposing, to whom, and any Qwilr features to use]"
---

# Write a Qwilr Proposal Page

Help the user write and structure a Qwilr proposal page — from section planning through copy and interactive element configuration. Qwilr replaces static PDF proposals with interactive web-based pages that include quote blocks, embedded content, and real-time engagement tracking.

## Step 1 — Gather context

Ask the user:

1. **What are you proposing?** (product/service, scope, price range)
2. **Who is the buyer?** (title, company, industry, company size)
3. **Where is this deal?**
   - A) Early — they're evaluating options
   - B) Mid — they've seen a demo, now need a formal proposal
   - C) Late — verbal yes, need the paperwork
   - D) Renewal or expansion of existing deal
4. **Which Qwilr features do you want to use?**
   - A) Quote block with pricing table (interactive line items, optional add-ons)
   - B) Simple text-based proposal (no interactive pricing)
   - C) Full deal room with multiple pages (route to `/sales-deal-room` instead)
   - D) Not sure — recommend what fits

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Generate page blueprint

Design a section-by-section page structure mapped to Qwilr block types. A strong Qwilr proposal typically follows this flow:

| Section | Qwilr Block Type | Purpose |
|---|---|---|
| Cover / Hero | Splash block | First impression, prospect's name/logo, one-line value prop |
| Executive Summary | Text + Image block | Why this matters to *them* specifically (2-3 paragraphs max) |
| Problem & Solution | Text block or Accordion | Frame the pain, present your solution mapped to their needs |
| Scope of Work | Text block or Accordion | What's included, deliverables, timeline |
| Pricing | Quote block | Interactive pricing table with line items |
| Timeline & Milestones | Text block | Key dates, phases, dependencies |
| About Us / Team | Text + Image block | Credibility — relevant team members, case study snippets |
| Next Steps / CTA | Accept block | Clear call to action — accept the proposal, sign, or book a call |

Adapt this structure based on the deal context:
- **Early-stage deals**: Lead heavier on problem/solution, lighter on detailed scope
- **Late-stage deals**: Lead with scope and pricing, lighter on problem framing
- **Renewals/expansions**: Lead with results achieved, then expansion scope and pricing. Use Qwilr's `isOptional: true` on expansion line items (new modules, add-ons, additional seats) so the buyer can self-select what to add beyond the base renewal. This gives the CFO/budget holder control while making the upsell frictionless.
- **Technical buyers**: Add a technical architecture or integration section
- **Executive buyers**: Add an ROI/business case section

## Step 3 — Write the copy

Write actual copy for each section, not just placeholders. Follow these principles:

- **Executive Summary**: 2-3 paragraphs max. Lead with their problem, not your product. Reference specific things from their situation (company name, goals they mentioned, pain points from discovery).
- **Problem & Solution**: Mirror their language back to them. Map each pain point to a specific capability.
- **Scope**: Use clear deliverables with enough detail that both sides know what "done" looks like, but not so much that it reads like a contract.
- **Pricing copy**: Write the framing text above the quote block — this is where you anchor value before they see numbers.
- **CTA**: Be specific about what happens after they accept (kickoff call within 48 hours, implementation begins week of X, etc.).

Use `{{token}}` syntax for any fields the user might want to auto-populate via the Qwilr API later (e.g., `{{company_name}}`, `{{contact_first_name}}`, `{{deal_amount}}`).

## Step 4 — Configure interactive elements

If the proposal includes a quote block, design the pricing structure:

### Quote block configuration

- **Sections**: Group line items logically (e.g., "Platform License", "Implementation", "Add-Ons")
- **Line items**: Each item needs a name, description, and price
  - Use `fixedCost` type for most items
  - Mark add-ons as `isOptional: true` so the buyer can select/deselect
  - Set `quantity` ranges where buyers should choose volume (seats, units)
  - Apply discounts where appropriate (percentage or fixed amount)
- **Billing**: Specify `oneOff` or `recurring` (monthly/quarterly/annual) per item
- **Tax**: Include tax configuration if applicable

### Interactive features to consider

- **Optional line items**: Let buyers self-select add-ons — this increases deal size while giving them control
- **Quantity selectors**: For per-seat or per-unit pricing, let buyers adjust quantity
- **Discount display**: Show the discount visibly to reinforce the deal they're getting
- **Section subtotals**: Help buyers understand cost breakdown by category
- **Features lists**: Add feature descriptions to line items for context

## Step 5 — Generate API payload (optional)

If the user wants to create the page programmatically via the Qwilr API, generate the `POST /pages` JSON payload:

```json
{
  "name": "Proposal for {{company_name}}",
  "isPublished": false,
  "tags": ["proposal", "{{deal_stage}}"],
  "blocks": [
    {
      "savedBlockId": "<from GET /blocks/saved>",
      "tokens": {
        "company_name": "Acme Corp",
        "contact_first_name": "Jane"
      }
    }
  ],
  "quoteSections": [
    {
      "title": "Platform License",
      "items": [
        {
          "title": "Annual Platform License",
          "description": "Full access to all features",
          "type": "fixedCost",
          "fixedCost": { "amount": 24000, "currency": "USD" },
          "isOptional": false,
          "billing": { "type": "recurring", "frequency": "annual" }
        }
      ]
    }
  ]
}
```

Notes for the user:
- Run `GET /blocks/saved` first to discover available block IDs
- Set `isPublished: false` to review before sending
- Use `tokens` to substitute CRM data into the template
- Auth: `Authorization: Bearer <your-jwt-token>`
- Base URL: `https://api.qwilr.com/v1`

## Gotchas

- **Don't generate walls of text.** Qwilr is a visual, web-based platform — not a Word doc. Use Qwilr block types (Splash, Accordion, Quote blocks) to break up content. If a section runs longer than 3 paragraphs, restructure it into an Accordion or split it into sub-sections.
- **Don't forget the interactive pricing/quote block.** Claude defaults to writing pricing as plain text. Qwilr's quote block is the product's key differentiator — use it for any proposal that includes pricing. Configure line items, optional add-ons, and quantity selectors.
- **Don't skip the CTA.** Every proposal needs a clear call to action using Qwilr's Accept block. Don't end with "let us know your thoughts" — end with "Accept this proposal" or "Book your kickoff call."
- **Don't make the proposal too long.** Web proposals are not PDFs. Buyers skim. A strong Qwilr proposal is 5-8 sections. If it's longer, consider moving detailed content to a deal room (`/sales-deal-room`) instead.
- **Don't forget `{{token}}` placeholders.** If the proposal might be auto-generated via API later, use `{{company_name}}`, `{{contact_first_name}}`, etc. throughout — not hardcoded values.

## Related skills

- `/sales-proposal-analytics` — Track engagement after sending (who viewed, which sections, when to follow up)
- `/sales-qwilr-automation` — Automate proposal creation from CRM data via the Qwilr API
- `/sales-deal-room` — For complex multi-stakeholder deals that need multiple pages
- `/sales-proposal-template` — Design reusable templates for your whole team
- `/sales-proposal` — For general (non-Qwilr) proposal strategy and pricing
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`
