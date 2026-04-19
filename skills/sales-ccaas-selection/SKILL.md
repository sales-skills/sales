---
name: sales-ccaas-selection
description: "CCaaS platform comparison and selection — choosing the right cloud contact center (Genesys Cloud CX, NICE CXone, Talkdesk, Five9, 8x8, Nextiva, Amazon Connect, Twilio Flex, Aircall, Dialpad). Use when comparing CCaaS platforms for a contact center, deciding between Genesys vs NICE CXone vs Talkdesk vs Five9, evaluating pricing tiers across contact center platforms, choosing a CCaaS for a specific team size or industry, migrating from on-prem (Avaya, Cisco, Mitel) to cloud contact center, or wondering which CCaaS has the best WFM or AI features. Do NOT use for platform-specific configuration help (use /sales-genesys, /sales-nice-cxone, or /sales-talkdesk) or for QA/coaching tool selection (use /sales-coaching)."
argument-hint: "[describe your CCaaS selection question — e.g., 'compare Genesys vs NICE CXone for 200 agents' or 'best CCaaS for healthcare contact center']"
license: MIT
version: 1.0.0
tags: [sales, contact-center, ccaas, strategy]
---

# CCaaS Platform Comparison & Selection

Help the user choose the right cloud contact center platform for their organization. This skill is tool-agnostic — it compares platforms on features, pricing, AI capabilities, integrations, and deployment to find the best fit.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

1. **What's driving the evaluation?**
   - A) Greenfield — building a new contact center
   - B) Migration from on-prem (Avaya, Cisco, Mitel, Genesys Engage)
   - C) Switching CCaaS providers (unhappy with current platform)
   - D) Adding capabilities (AI, WFM, digital channels) to current setup
   - E) Cost optimization — current platform too expensive

2. **Contact center size?**
   - A) Small (<50 agents)
   - B) Medium (50-200 agents)
   - C) Large (200-1000 agents)
   - D) Enterprise (1000+ agents)

3. **Must-have capabilities?** (select all)
   - A) Omnichannel (voice + digital channels)
   - B) Workforce management (WFM)
   - C) Quality management (QM) / auto QA
   - D) AI virtual agents / self-service
   - E) Real-time agent assist / copilot
   - F) Outbound dialer
   - G) Deep Salesforce integration
   - H) Compliance (HIPAA, PCI, FedRAMP)

4. **Budget range per agent/month?**
   - A) Under $100
   - B) $100-150
   - C) $150-250
   - D) Budget flexible — best fit matters more

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Genesys Cloud CX-specific configuration | `/sales-genesys {question}` |
| NICE CXone-specific configuration | `/sales-nice-cxone {question}` |
| Talkdesk-specific configuration | `/sales-talkdesk {question}` |
| QA tool layered on top of CCaaS (Observe.AI, Balto, Cresta) | `/sales-coaching {question}` |
| Calabrio ONE-specific WFM/QM/analytics questions | `/sales-calabrio {question}` |
| Connecting CCaaS to CRM or other tools | `/sales-integration {question}` |

If the question is about comparing or selecting CCaaS platforms, continue to Step 3.

## Step 3 — Platform comparison

**Read `references/platforms.md`** for detailed platform profiles, pricing, and comparison tables.

Use the user's context (size, budget, must-haves, industry) to narrow recommendations. Don't dump the full comparison — focus on the 2-3 platforms that fit best.

## Step 4 — Selection framework

**Shortlist by elimination:**

1. **Budget filter**: Eliminate platforms above budget ceiling
2. **Feature filter**: Eliminate platforms missing must-have capabilities
3. **Size filter**: Eliminate platforms mismatched to team size (e.g., Amazon Connect for 10 agents is overkill; Aircall for 1000 agents is undersized)
4. **Industry filter**: Regulated industries (healthcare, financial services) need HIPAA/PCI — eliminate non-compliant platforms
5. **Integration filter**: If Salesforce-native is required, prioritize platforms with deep Salesforce integration (Genesys CX Cloud, Talkdesk Service Cloud Voice, NICE CXone Data Cloud)

**Compare the finalists on:**
- Total cost of ownership (seat + telephony + add-ons + implementation)
- AI maturity (virtual agents, agent assist, predictive routing)
- WFM depth (forecasting accuracy, scheduling flexibility)
- Implementation timeline (weeks vs months)
- Ecosystem (marketplace apps, partner network)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially pricing details that may be outdated.*

- **Published pricing is rarely final** — all enterprise CCaaS vendors negotiate. Expect 15-30% discount on list price for multi-year, high-volume deals.
- **Telephony costs are always separate** — every platform charges for voice minutes on top of seat licenses. Model these separately.
- **AI features are typically top-tier or add-on** — don't compare base-tier prices and assume AI is included. Genesys CX 4, NICE Complete, Talkdesk Elite all gate AI differently.
- **WFM quality varies dramatically** — NICE CXone is the WFM market leader. Genesys Cloud CX is strong. Talkdesk and Five9 are improving but lighter. If WFM is critical, this is a differentiator.
- **Implementation timelines are real** — enterprise Genesys or NICE deployments take 3-6 months. Talkdesk and Five9 deploy faster (weeks to months). Amazon Connect and Twilio Flex are self-service but require engineering.
- **Don't compare apples to oranges** — Aircall and Dialpad are UCaaS+CCaaS combos, not pure CCaaS. Amazon Connect and Twilio Flex are developer platforms, not turnkey solutions. Compare within the same category.

## Related skills

- `/sales-zendesk` — Zendesk platform help (includes Contact Center add-on module)
- `/sales-helpdesk-selection` — Help desk platform comparison (if the user needs ticketing/support, not full CCaaS)
- `/sales-genesys` — Genesys Cloud CX platform help
- `/sales-nice-cxone` — NICE CXone platform help
- `/sales-talkdesk` — Talkdesk platform help
- `/sales-coaching` — Sales coaching, QA, and agent training strategy
- `/sales-calabrio` — Calabrio ONE — standalone WEM (WFM, QM, analytics) that layers on top of any CCaaS
- `/sales-observe-ai` — Observe.AI — layer auto QA on top of any CCaaS
- `/sales-balto` — Balto — real-time agent assist for contact centers
- `/sales-cresta` — Cresta — enterprise contact center AI
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do -a claude-code -y`

## Examples

**User prompt**: "We have 300 agents and need to move from Avaya to a cloud platform. We need WFM, QM, and Salesforce integration. Budget is $150/agent/month."
**Skill does**: Compares Genesys CX 3 ($155) and NICE CXone Core ($169) as the two platforms that fit all requirements at budget. Eliminates Talkdesk (WFM lighter), Five9 (third-party WFM), and Amazon Connect (requires engineering). Recommends POC with both.

**User prompt**: "Genesys vs NICE CXone — which is better for AI?"
**Skill does**: Compares AI capabilities head-to-head — Genesys CX 4 predictive routing and journey analytics vs NICE CXone Enlighten AI auto-scoring and workforce intelligence. Notes both gate AI behind top tiers. Recommends based on whether the user prioritizes routing AI (Genesys) or analytics AI (NICE).

**User prompt**: "We're a 20-person support team looking for our first contact center platform. Under $100/agent."
**Skill does**: Recommends Talkdesk Digital ($85), NICE Digital ($71), or Aircall as right-sized options. Steers away from Genesys and NICE enterprise tiers as overkill for 20 agents. Notes that at this size, UCaaS+CCaaS combos (Nextiva, 8x8) may offer better value.

## Troubleshooting

**All platforms look the same — how do I differentiate?**
Focus on three axes: (1) WFM depth — NICE > Genesys > rest, (2) AI maturity — Genesys predictive routing vs NICE Enlighten vs Five9 Genius AI, (3) time to value — Talkdesk/Five9 deploy in weeks, Genesys/NICE in months. Your team size and timeline will differentiate quickly.

**Vendor pricing is confusing — how do I compare total cost?**
Build a TCO model: (seat license x agents x 12) + (est. minutes x per-min rate x 12) + (add-ons) + (implementation one-time) + (premium support annual). Require vendors to quote TCO, not just seat price.

**We need HIPAA compliance — which platforms qualify?**
Genesys Cloud CX, NICE CXone, Five9, and Amazon Connect all offer HIPAA-eligible configurations with BAAs. Talkdesk offers Healthcare Experience Cloud. Verify BAA availability with each vendor for your specific deployment region.
