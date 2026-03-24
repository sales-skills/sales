---
name: sales-deal-room
description: "Design a Qwilr deal room for complex multi-stakeholder B2B deals. Use when setting up a deal room, building a Qwilr deal room, creating a digital sales room, managing a multi-stakeholder deal, building buyer enablement content, creating a mutual action plan, or packaging an enterprise deal."
argument-hint: "[describe the deal — type, stakeholders, stage, and what materials are needed]"
---

# Design a Qwilr Deal Room

Help the user architect a Qwilr deal room — a multi-page digital sales room for complex B2B deals with multiple stakeholders, long sales cycles, and lots of moving parts.

## When to use a deal room vs. a single proposal

| Scenario | Use |
|---|---|
| Simple deal, single decision-maker, straightforward pricing | Single proposal page (`/sales-proposal-page`) |
| Multiple stakeholders, complex evaluation, needs ongoing updates | Deal room (this skill) |
| Enterprise deal with procurement, legal, technical review | Deal room |
| Partner/channel deal with shared materials | Deal room |
| Expansion deal with existing customer needing executive buy-in | Deal room |

## Step 1 — Gather context

Ask the user:

1. **What type of deal is this?**
   - A) New logo — first time selling to this company
   - B) Expansion — upselling/cross-selling existing customer
   - C) Renewal — contract renewal with potential changes
   - D) Partner/channel deal — working through a partner
   - E) Other — describe it

2. **Who are the stakeholders?** (select all that apply)
   - A) Executive sponsor (C-suite / VP)
   - B) Economic buyer (budget holder)
   - C) Technical evaluator (engineering/IT)
   - D) End users / champions
   - E) Procurement / legal
   - F) External consultant or advisor
   - G) Other — describe

3. **What materials do you already have?**
   - A) Nothing yet — starting from scratch
   - B) We have a proposal/quote
   - C) We have a pitch deck
   - D) We have case studies and technical docs
   - E) We have most things, need to organize them

4. **What's the deal timeline?**
   - A) Trying to close this month
   - B) 1-3 month sales cycle
   - C) 3-6 month enterprise cycle
   - D) 6+ months

## Step 2 — Deal room architecture

Design the page-by-page structure. A deal room is a collection of Qwilr pages organized as a hub with linked sub-pages. The hub page is the "front door" that each stakeholder visits.

### Recommended structure

**Hub Page** (the main deal room page — everyone starts here)

| Section | Block Type | Content |
|---|---|---|
| Welcome header | Splash | Personalized greeting, company logos, deal room title |
| Navigation | Text + buttons | Links to each sub-page, organized by topic |
| Key contacts | Text + Image | Your team's contacts with photos and roles |
| Timeline snapshot | Text | High-level mutual action plan with key dates |
| Latest updates | Text | What's new since last visit (keep this updated) |

**Sub-pages** (linked from the hub — create based on what the deal needs):

| Page | Who it's for | Content |
|---|---|---|
| Executive Summary | Executive sponsor | Business case, ROI, strategic alignment |
| Technical Overview | Technical evaluator | Architecture, integrations, security, compliance |
| Proposal & Pricing | Economic buyer | Interactive quote block, pricing options, terms |
| Case Studies | All stakeholders | Relevant customer stories, metrics, testimonials |
| Implementation Plan | Technical + Ops | Timeline, phases, resource requirements, dependencies |
| Security & Compliance | IT / Legal / Procurement | Certifications, data handling, SLAs, DPA |
| Mutual Action Plan | All stakeholders | Shared timeline with milestones, owners, and status |
| FAQ & Objection Handling | Champions | Answers to common questions champions get asked internally |

### Adapting for deal type

- **New logo**: Heavier on Executive Summary, Case Studies, and Security. Include a "Why Us" page if competitive.
- **Expansion**: Lead with "Results So Far" page showing value delivered, then expansion scope.
- **Renewal**: Lead with partnership recap, then changes/additions for the new term.
- **Partner deal**: Include a partner-facing page with co-selling materials and margin details.

## Step 3 — Content briefs and hub page copy

### Hub page draft copy

Write the actual content for the hub/navigation page:

**Welcome section**: "Welcome to the [Company] + [Your Company] Deal Room. This is your central hub for everything related to our partnership. Below you'll find the key materials organized by topic — click into any section to dive deeper."

**Navigation section**: Create a card-style layout linking to each sub-page with a one-line description:

- **Executive Summary** — The business case for [solution]: ROI, strategic fit, and expected outcomes
- **Technical Overview** — Architecture, integrations, security posture, and compliance details
- **Proposal & Pricing** — Interactive pricing with options to customize your package
- **Case Studies** — How companies like yours achieved [specific outcome]
- **Implementation Plan** — Timeline, phases, and what we need from each team
- **Mutual Action Plan** — Our shared roadmap to getting this live by [target date]

**Key contacts section**: List 2-3 people from your team with name, title, photo placeholder, email, and one line about their role in this deal.

### Content briefs for sub-pages

For each sub-page, provide:
- **Audience**: Who this page is for and what they care about
- **Key message**: The one thing this page should communicate
- **Structure**: Section-by-section outline with recommended block types
- **Tone**: How formal/technical/executive the language should be
- **CTA**: What action the reader should take after this page

## Step 4 — Mutual action plan

Design the timeline page with milestones and owners:

| Milestone | Owner | Target Date | Status |
|---|---|---|---|
| Discovery & scoping complete | Both | [date] | Done |
| Technical evaluation | Buyer's IT team | [date] | In progress |
| Security review | Buyer's security | [date] | Not started |
| Proposal & pricing review | Economic buyer | [date] | Not started |
| Legal / contract review | Both legal teams | [date] | Not started |
| Executive sign-off | Executive sponsor | [date] | Not started |
| Contract signed | Both | [date] | Not started |
| Kickoff & implementation begins | Both | [date] | Not started |

Customize milestones based on the deal type and timeline. For faster deals, collapse steps. For enterprise deals, add procurement and compliance milestones.

## Step 5 — Analytics strategy

Set up engagement tracking per stakeholder by configuring webhooks for the deal room pages:

### Which events to watch per stakeholder

| Stakeholder | Watch for | What it means |
|---|---|---|
| Executive sponsor | Views Executive Summary page | They're engaged — or their EA is screening |
| Technical evaluator | Views Technical Overview, time on security page | Doing due diligence — prepare for technical questions |
| Economic buyer | Views Pricing page repeatedly | Evaluating cost — may need ROI reinforcement |
| Procurement/Legal | Views Security & Compliance page | Deal is in procurement — prepare for contract negotiation |
| New/unknown viewer | Views any page | Champion is sharing internally — the deal is expanding |

### Webhook setup for deal room

```bash
curl -X POST https://api.qwilr.com/v1/webhooks \
  -H "Authorization: Bearer $QWILR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-endpoint.com/qwilr-deal-room",
    "events": ["pageFirstViewed", "pageViewed", "pageAccepted", "pagePartiallyAccepted"]
  }'
```

Use view data to:
1. Identify which stakeholders are engaged and which aren't
2. Spot new stakeholders entering the evaluation
3. Time your follow-ups to when people are actively reviewing
4. Update your champion on who's looked at what

For full webhook and CRM automation setup, use `/sales-qwilr-automation`.

## Related skills

- `/sales-proposal-page` — Write a single proposal page (for simpler deals)
- `/sales-proposal-analytics` — Interpret engagement signals from deal room pages
- `/sales-qwilr-automation` — Automate deal room creation and CRM sync
- `/sales-proposal-template` — Create reusable deal room templates
- `/sales-close` — Closing strategies and mutual action plan tactics
