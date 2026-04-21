---
name: sales-deal-inspect
description: "Inspects deal health, map stakeholders, identify risks, and recommend next actions. Use when a deal feels stuck or at risk, you're not sure who the real decision-maker is, champion seems weak or disengaged, MEDDPICC gaps are unclear, a deal review is coming up and you need to prep, or you can't tell if a deal will actually close. Do NOT use for portfolio-level pipeline management (use /sales-pipeline), revenue forecasting (use /sales-forecast), or reviewing a specific sales call (use /sales-call-review)."
argument-hint: "[describe the deal — company, size, stage, timeline, and biggest concern]"
license: MIT
version: 1.0.0
tags: [sales, deal-management, pipeline, forecasting]
---
# Inspect a Deal

Help the user inspect an individual deal — score its health, identify risks, map stakeholders, and build a prioritized action plan.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Deal basics:**
   - Company name
   - Deal size (ACV or total contract value)
   - Current stage (e.g., Discovery, Demo, Proposal, Negotiation, Closed Won/Lost)
   - Expected close date
   - How long has it been in the current stage?

2. **Stakeholders:**
   - Who is your champion? How strong are they?
   - Have you met the economic buyer (person who signs the check)?
   - Who else is involved in the evaluation? (technical, legal, procurement, end users)

3. **What's your biggest concern about this deal?**
   - A) It's moving too slowly / stalled
   - B) I'm single-threaded (only talking to one person)
   - C) Competitor is in the mix
   - D) Budget hasn't been confirmed
   - E) Champion seems to be going dark
   - F) Close date keeps slipping
   - G) I don't know enough about their decision process
   - H) Something else — describe it

## Step 2 — Deal health scorecard

Score each dimension as Green (strong), Yellow (gaps), or Red (at risk):

| Dimension | Status | Evidence | Gap |
|-----------|--------|----------|-----|
| **Champion strength** | | Do you have an internal advocate who is actively selling on your behalf? Can they access power? | |
| **Economic buyer access** | | Have you met the person who controls the budget? Do they support this initiative? | |
| **Decision criteria** | | Do you know exactly what they're evaluating against? Are your strengths aligned to their criteria? | |
| **Decision process** | | Do you know every step from here to a signed contract? (Legal, procurement, board approval, etc.) | |
| **Compelling event** | | Is there a hard deadline driving urgency? (Contract expiry, board mandate, regulatory, fiscal year) | |
| **Competition** | | Do you know who else they're evaluating? What's your differentiation? | |
| **Budget** | | Has budget been allocated? Is it sufficient? Is there a procurement process? | |
| **Paper process** | | Do you know who signs, what approvals are needed, and the typical timeline for contracts? | |

**Overall health**: Count of Green/Yellow/Red → Assessment:
- 6+ Green: Strong deal — maintain momentum and close
- 4-5 Green: Solid but gaps to fill — prioritize the Yellows
- 2-3 Green: At risk — needs immediate action on Red items
- 0-1 Green: Critical — consider whether this deal is real

### MEDDPICC extraction table

| Element | What's known | What's missing | Priority to fill |
|---------|-------------|----------------|-----------------|
| **M**etrics | | | |
| **E**conomic Buyer | | | |
| **D**ecision Criteria | | | |
| **D**ecision Process | | | |
| **P**aper Process | | | |
| **I**mplicate the Pain | | | |
| **C**hampion | | | |
| **C**ompetition | | | |

## Step 3 — Risk analysis

### Top 3 risks

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | | High/Med/Low | High/Med/Low | Specific action to reduce this risk |
| 2 | | | | |
| 3 | | | | |

### Common risk patterns checklist

Check which patterns apply to this deal:

- [ ] **Single-threaded**: Only one contact engaged — if they leave or lose interest, deal dies
- [ ] **No compelling event**: No external deadline creating urgency — deals without compelling events slip indefinitely
- [ ] **Ghost champion**: Champion has gone quiet — may have lost internal support or hit resistance
- [ ] **Happy ears**: Prospect is saying all the right things but not taking action (no meetings booked, no docs shared, no stakeholders introduced)
- [ ] **Procurement black hole**: Deal entered procurement/legal with no visibility into timeline or process
- [ ] **Budget uncertainty**: "We have budget" but no specific number confirmed or PO process started
- [ ] **Moving goalposts**: Evaluation criteria keep changing or expanding — often means a competitor is influencing requirements
- [ ] **No-decision risk**: The biggest competitor is the status quo — prospect may decide to do nothing
- [ ] **Executive misalignment**: Your champion is bought in but their leadership doesn't see this as a priority
- [ ] **Zombie deal**: Deal has been in the same stage for 2x+ the average cycle time with no meaningful progression

## Step 4 — Prioritized action plan

| Priority | Action | Owner | Timeline | Purpose |
|----------|--------|-------|----------|---------|
| 1 | | Rep / Manager / SE | This week | |
| 2 | | | Next week | |
| 3 | | | This month | |
| 4 | | | Ongoing | |
| 5 | | | | |

Actions should be specific, not generic. Instead of "build executive relationship," write "Request a 15-minute call with CFO Jane Smith to discuss Q3 cost-reduction goals — ask your champion Sarah to make the intro by Friday."

### Action categories to consider
- **Multi-threading**: Get wider and higher in the account
- **Validation**: Confirm assumptions about budget, timeline, or decision process
- **Acceleration**: Moves that compress the timeline (POC, reference call, executive alignment)
- **De-risking**: Reduce competition, strengthen champion, address blockers
- **Commitment testing**: Ask for something that proves the deal is real (access to stakeholders, internal data, timeline commitment)

## Step 5 — Stakeholder map

| Name | Title | Role in deal | Engagement level | Relationship strength | Action needed |
|------|-------|-------------|-----------------|----------------------|--------------|
| | | Champion / EB / Tech Eval / End User / Blocker / Coach | High / Med / Low / None | Strong / Developing / Weak / Unknown | |

### Roles defined
- **Champion**: Actively sells internally on your behalf, has power or access to power
- **Economic Buyer (EB)**: Controls the budget, signs the contract
- **Technical Evaluator**: Assesses technical fit, integration, security
- **End User**: Will use the product day-to-day — their input matters for adoption
- **Blocker**: Actively or passively working against the deal
- **Coach**: Gives you information about the internal dynamics but doesn't actively champion

### Multi-threading guidance
- **Minimum viable deal team**: You need at least a Champion + Economic Buyer engaged. Champion without EB access = high risk.
- **How to go wide**: Ask your champion "Who else would need to be comfortable with this before you could move forward?" — then ask for introductions.
- **How to go high**: Offer an "executive alignment call" between your exec and theirs. Position it as ensuring strategic fit, not as a sales tactic.
- **Handling blockers**: Don't go around them — go through them. Understand their concerns, address them directly, and turn them into neutral or supportive.
- **Unknown stakeholders**: If you only know 1-2 people in a complex deal, there are almost certainly others influencing the decision. Ask: "Walk me through what happens after you say yes — who else touches this before it's approved?"

## Related skills

- `/sales-salesloft` — Salesloft Deals module for pipeline visibility and deal health scores
- `/sales-forecast` — Roll up deal assessments into forecast accuracy
- `/sales-pipeline` — Portfolio-level pipeline management and deal prioritization
- `/sales-discovery` — Prep discovery questions to fill MEDDPICC gaps
- `/sales-call-review` — Review the latest call on this deal for coaching insights
- `/sales-close` — Closing strategies and mutual action plans
- `/sales-weflow` — Weflow platform help (Salesforce-native Revenue AI with deal health signals, activity capture, conversation intelligence)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Gotchas

- **Don't rate champion strength without evidence.** Claude tends to mark champion as "Yellow" or "Red" based on vague signals. Ask specifically: "Has your champion introduced you to other stakeholders? Have they shared internal docs or timeline info?" No evidence = unknown, not weak.
- **Don't assume single-threaded is always bad.** For small deals (<$20k) with a single decision-maker, being single-threaded is normal and efficient. Multi-threading guidance applies primarily to complex, multi-stakeholder deals.
- **Don't confuse decision criteria with decision process.** Criteria = *what* they're evaluating (features, price, integrations). Process = *how* they'll decide (who approves, what steps, what timeline). Claude often conflates these — keep them separate in the MEDDPICC extraction.
- **Don't generate generic "follow up with the prospect" action items.** Every action must be specific: who, what, by when, and why. "Follow up" is not an action plan — "Ask Sarah to intro you to CFO by Friday so you can confirm budget before the board meeting" is.
- **Don't catastrophize a deal based on one missing MEDDPICC element.** Not every deal needs all 8 elements fully addressed. Prioritize based on deal stage and size.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Examples

### Example 1: Stalled deal diagnosis
**User says**: "My $120k deal has been stuck at proposal stage for 3 weeks. I haven't met the CFO and Gong is competing."
**Skill does**:
1. Creates a health scorecard flagging Economic Buyer (Red) and Competition (Yellow)
2. Identifies top risks: single-threaded without EB, competitor influence on criteria
3. Builds a prioritized action plan: get champion to intro CFO this week, prepare competitive differentiation
4. Maps known stakeholders and identifies who's missing
**Result**: Clear diagnosis with specific actions to unstick the deal

### Example 2: Deal review prep
**User says**: "Help me prepare for a deal review with my manager. $250k Fortune 500, strong champion, CIO attended demo, in POC, but legal hasn't started and close date is 6 weeks out."
**Skill does**:
1. Scores deal health showing strengths (champion, EB engagement, POC) and risks (legal timeline)
2. Creates MEDDPICC extraction showing Paper Process as the critical gap
3. Recommends actions to accelerate legal/procurement
**Result**: Deal review document the rep can present to their manager with clear next steps

## Troubleshooting

### Not enough deal information to assess
**Solution**: Use the MEDDPICC extraction table to structure what's known vs. unknown. Even partial information reveals where the biggest gaps are. The skill can work with whatever the user provides and will flag what's missing.

### Deal looks healthy but isn't progressing
**Solution**: Check for "happy ears" — the prospect says positive things but doesn't take action. Apply the commitment test: ask for something concrete (access to the EB, internal data, a specific next meeting date). If they won't commit, the deal health score should be downgraded regardless of what they say verbally.

### Too many risks identified — where to start
**Solution**: Focus on the top risk by likelihood x impact. The action plan is prioritized for this reason. As a rule of thumb: fix Red items before Yellow, and address Champion/EB gaps before anything else — without a champion and economic buyer, no other action matters.
