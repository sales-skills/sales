---
name: sales-account-map
description: "Maps the buying committee at a target account — identify decision-makers, influencers, champions, and blockers, then recommend a multi-threading strategy. Use when stuck single-threaded in a deal, don't know who the real decision-maker is, can't figure out the right entry point at a target account, deal stalled because you're not talking to enough people, or unsure how to map the buying committee. Do NOT use for building prospect lists across many accounts (use /sales-prospect-list), general account research (use /sales-research), deal health assessment (use /sales-deal-inspect), or ZoomInfo-specific org chart config (use /sales-zoominfo)."
argument-hint: "[name the target account and what you're selling]"
license: MIT
version: 1.0.0
tags: [sales, abm, account-based-marketing, buying-committee]
---
# Map the Buying Committee

Help the user map the full buying committee at a target account — identify who's involved in the purchase decision, what role each person plays, and how to multi-thread the account effectively. This skill is platform-agnostic but references Apollo.io as the primary data source for finding and enriching contacts. The same approach works with ZoomInfo, Cognism, LinkedIn Sales Navigator, or any contact database.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which account are you targeting?** (Company name, size, industry)

2. **What are you selling?**
   - Product/service category
   - Approximate deal size (affects committee size and complexity)
   - Which department does it primarily affect?

3. **Where are you in the process?**
   - A) Prospecting — haven't engaged anyone yet
   - B) Single-threaded — talking to one person, need to expand
   - C) Active deal — have some contacts, need to map the full committee
   - D) Stuck deal — need to find the missing stakeholder(s)

4. **What do you know already?**
   - Any existing contacts at the account?
   - Any org chart intel (reporting structure, team size)?
   - Any intel on their buying process?

5. **Company size?** (This determines committee complexity)
   - A) SMB (1-200 employees) — expect 1-3 decision-makers
   - B) Mid-market (200-2,000 employees) — expect 3-6 stakeholders
   - C) Enterprise (2,000+ employees) — expect 5-12+ stakeholders

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Identify the committee roles

Map expected roles using this framework:

### Buying committee roles

| Role | What they do | How to identify | Typical titles |
|---|---|---|---|
| **Economic Buyer** | Has budget authority, signs the check | Highest-ranking person in the buying org; often VP+ or C-suite | VP/SVP/CRO/CFO/CTO depending on what you sell |
| **Champion** | Wants your product to win, advocates internally | Has the problem you solve, engaged in conversations, asks for resources to share internally | Director/Senior Manager who owns the problem |
| **Technical Evaluator** | Vets the product technically | Asks detailed technical questions, runs POCs, owns integration | Architect, Staff Engineer, IT Manager, Solutions team |
| **User Buyer** | Will use the product daily | Cares about workflow, UX, and day-to-day impact | Individual contributors, team leads, end users |
| **Coach** | Gives you intel on internal politics and process | Usually someone you have a relationship with; may not have buying authority | Any level — could be a former customer, mutual connection, or friendly contact |
| **Gatekeeper/Blocker** | Can slow or kill the deal | Owns competing budget, prefers a competitor, or has political reasons to oppose | Procurement, Legal, IT Security, or a peer of the Champion who prefers the status quo |

### Scaling the committee by company size

| Company size | Roles to map | Contacts to find |
|---|---|---|
| **SMB (1-200)** | Economic Buyer + Champion (often the same person), maybe 1 Technical Evaluator | 2-3 contacts |
| **Mid-market (200-2,000)** | Economic Buyer, Champion, Technical Evaluator, 1-2 User Buyers | 4-6 contacts |
| **Enterprise (2,000+)** | All 6 roles, potentially multiple people per role (committee of 8-12+) | 6-12 contacts |

## Step 3 — Find the people

### Using Apollo People Search

For the target account, run a People Search with these filters:
- **Company**: Exact match on company name
- **Seniority**: Start broad (Manager+), then narrow based on what you sell
- **Department**: Filter to the relevant function (Engineering, Sales, Marketing, Finance, IT, etc.)
- **Title keywords**: Search for title patterns that match each committee role

### Interpreting org structure from data

Apollo (and most data providers) don't show reporting lines directly. Reconstruct the org chart by:

1. **Seniority mapping**: Group contacts by seniority level (C-suite → VP → Director → Manager → IC)
2. **Department clustering**: Group by department to see team structure
3. **Title analysis**: Look for "Head of" (usually reports to VP/C-suite), "Senior Director" (reports to VP), etc.
4. **Team size inference**: If a department has 3 Directors and 1 VP, the VP likely oversees them all

### Finding "hidden" influencers

The most important person in the deal often doesn't have an obvious title:
- **The IC who's actually the technical decision-maker**: Look for Staff/Principal Engineers, Distinguished Architects — they may not have "manager" in their title but their recommendation carries more weight than their manager's
- **The admin/EA who controls the executive's calendar**: Knowing who gates access to the Economic Buyer matters for enterprise deals
- **Recently promoted people**: Someone who just became a Director may be more open to new approaches than a 10-year VP

### Enrich contacts

For each committee member identified, enrich to get:
- Verified email address
- Direct phone number (for Economic Buyer and Champion at minimum)
- LinkedIn profile URL
- Job tenure (how long in current role — new leaders are more open to change)
- Previous companies (look for connections — did they use your product before?)

### In ZoomInfo
- **Org Charts** — ZoomInfo provides pre-built organizational charts showing reporting hierarchies. Available in SalesOS for any company in their database.
- **Buying committee identification** — filter contacts at a target account by department, seniority level, and management level to map economic buyer, champion, technical evaluator, and end users.
- **Scoops** — buying signals that reveal internal projects, vendor evaluations, and budget approvals — useful for identifying which stakeholders are involved in an active buying process.
- **Intent + Org Chart** — combine intent signals (which accounts are researching) with org charts (who the decision-makers are) for targeted multi-threading.
- **Engage integration** — once you've mapped the buying committee, push contacts directly to ZoomInfo Engage sequences for multi-threaded outreach.
- **API** — use Search Contacts with companyId + department/managementLevel filters to programmatically build buying committee maps.

## Step 4 — Map relationships & entry strategy

### Org chart reconstruction

Build a visual mental model of the account:

```
                    [Economic Buyer]
                     /           \
            [Champion]          [Potential Blocker]
            /        \                |
  [Tech Evaluator] [User Buyer]  [Their Champion]
```

### Choosing your entry point

| Situation | Recommended entry | Why |
|---|---|---|
| No existing contacts | Champion or Coach | They have the problem, they'll advocate. Going straight to the C-suite without context usually fails. |
| Have one contact | Ask them to introduce you up or across | Warm introductions convert 5-10x better than cold outreach |
| Active deal, single-threaded | Technical Evaluator or User Buyer | Expand laterally before going up — build consensus first |
| Stuck deal | Coach (for intel) or Economic Buyer (direct escalation) | Find out what's blocking before escalating |

### Multi-threading strategy

**The goal**: Engage 3+ contacts at different levels of the org before a decision is made. Single-threaded deals close at 1/3 the rate of multi-threaded deals.

**"Power line" vs "access line"** approach:
- **Power line** (top-down): Start with the Economic Buyer, get referred down. Works when you have executive relationships or strong brand recognition.
- **Access line** (bottom-up): Start with the Champion or User Buyer, build consensus, then get introduced up. Works for most sales teams.
- **Dual track**: Engage at both levels simultaneously — Champion builds internal case while you engage the Economic Buyer directly. Most effective for mid-market and enterprise.

### Threading sequence

1. **First contact**: Champion or Coach — validate the problem exists, get internal context
2. **Second contact**: Technical Evaluator — address feasibility, integration, security
3. **Third contact**: Economic Buyer — connect the problem to business outcomes they care about
4. **Ongoing**: User Buyers — build grassroots support, get feedback on demo/POC

Don't engage everyone at once — stagger over 2-3 weeks to avoid looking like you're carpet-bombing the account.

## Step 5 — Action plan

### Per-person outreach approach

Each committee member needs a different message:

| Role | Message focus | Tone | Channel |
|---|---|---|---|
| **Economic Buyer** | Business outcomes, ROI, strategic alignment | Executive-level, concise, metric-driven | Email or warm intro, then executive briefing |
| **Champion** | Problem validation, how you solve it, internal advocacy materials | Collaborative, detailed, give them ammo | Email + call + LinkedIn |
| **Technical Evaluator** | Integration, security, architecture, POC plan | Technical, specific, no hand-waving | Email + call, offer a technical deep-dive |
| **User Buyer** | Day-to-day impact, workflow improvements, ease of adoption | Practical, show-don't-tell | Demo, free trial, or sandbox |
| **Coach** | Gratitude, keep them informed, ask for intel on internal dynamics | Personal, relationship-first | Call or LinkedIn message |

### Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills for execution

- `/sales-cadence` — Design the multi-channel sequence for each committee member
- `/sales-discovery` — Prep discovery questions tailored to each role
- `/sales-deal-inspect` — Assess deal health once the committee is mapped
- `/sales-enrich` — Enrich all committee members with verified contact info
- `/sales-intent` — Check for buying signals at the account level
- `/sales-zoominfo` — ZoomInfo platform help (org charts, Scoops, Engage)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

### Ongoing committee monitoring

The committee isn't static. Monitor for:
- **New hires** in relevant departments (potential new stakeholder)
- **Departures** (if your Champion leaves, the deal may stall)
- **Title changes** (promotion = more authority, or reorganization = new dynamics)
- **Additional departments** getting involved (Legal, Procurement, IT Security often join late)

Set up Apollo alerts for the account to catch these changes.

## Gotchas

- **Don't go straight to the C-suite.** Claude defaults to recommending you email the CEO. Start with the Champion or Coach — someone who has the problem your product solves and will advocate internally. Cold-emailing the CEO of a 5,000-person company about your SaaS tool rarely works.
- **Don't treat titles as org chart.** A "Director" at a 50-person startup and a "Director" at a Fortune 500 are completely different levels of authority. Always factor in company size before mapping titles to committee roles.
- **Don't over-thread small accounts.** A 200-person company doesn't have a 7-person buying committee. Adapt the framework to company size — 2-3 contacts for SMB, 5-8 for mid-market, 8-12 for enterprise. Over-threading a small account feels like overkill and can backfire.
- **Don't assume the org chart is stable.** People change roles, teams reorg, companies restructure. Check job tenure and recent title changes in Apollo before building your map. A map based on 6-month-old data may be wrong.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Examples

### Example 1: Enterprise security product
**User says**: "Map the buying committee at Acme Corp for our security product"
**Skill does**:
1. Identifies company size (enterprise, 5,000 employees)
2. Maps expected committee: CISO (Economic Buyer), Director of Security (Champion), Security Architect (Technical Evaluator), SOC Analysts (User Buyers), VP Engineering (potential Blocker)
3. Finds contacts vian Apollo People Search filtered to Acme + Security/IT departments
4. Recommends entry via Director of Security (Champion), with dual-track approach to CISO
5. Creates per-person outreach plan with role-appropriate messaging
**Result**: Complete committee map with entry strategy and multi-threading plan

### Example 2: SMB selling
**User says**: "I'm selling to a 100-person startup. Who do I need to talk to?"
**Skill does**:
1. Scales the framework for SMB — 2-3 key contacts, not a 7-person committee
2. Identifies that the founder/CEO is likely both Economic Buyer and Champion at this size
3. Finds 2-3 relevant contacts (CEO, Head of Engineering, one IC user)
4. Recommends a simpler approach — single-threaded may be sufficient for SMB
**Result**: Right-sized committee map that doesn't over-complicate a simple buying process

### Example 3: Expanding a stuck deal
**User says**: "I have a champion at BigCo but the deal is stuck. Who else should I bring in?"
**Skill does**:
1. Diagnoses the stall — is it missing Economic Buyer support? Technical blocker? Internal politics?
2. Maps the existing committee contacts and identifies gaps
3. Recommends specific roles to add (likely Technical Evaluator or Economic Buyer)
4. Designs an expansion strategy using the Champion for warm introductions
**Result**: Committee gap analysis with specific people to engage and a path to unstick the deal

## Troubleshooting

### Can't find enough people at the target account
**Cause**: Small company, or data provider has limited coverage for that account
**Solution**: Try multiple data sources (Apollo + LinkedIn Sales Navigator). For small companies, the entire leadership team may be on the company's website. Ask your existing contact for org structure intel.

### Champion left the company
**Cause**: Job change — your internal advocate is gone
**Solution**: Two actions: (1) Reach out to the Champion at their new company — they're a warm lead there. (2) At the original account, find a new Champion quickly — the deal will stall without internal advocacy. Check who the Champion was working with and whether they share the same problem.

### Multiple people claim to be the decision-maker
**Cause**: Common in mid-market — titles overlap and authority is ambiguous
**Solution**: Ask the "budget question" — "Who would need to approve the budget for this?" and the "signature question" — "Whose signature goes on the contract?" The real Economic Buyer controls the money. Everyone else is an influencer, regardless of what they say.
