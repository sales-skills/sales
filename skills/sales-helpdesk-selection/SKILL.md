---
name: sales-helpdesk-selection
description: "Help desk and customer service platform comparison and selection — choosing the right ticketing and support platform (Zendesk, Freshdesk, Intercom, Help Scout, Zoho Desk, Front, Hiver, Jira Service Management, Gorgias, Tidio, HappyFox, Kustomer, LiveAgent, Crisp, Pylon). Use when comparing help desk platforms for a support team, deciding between Zendesk vs Freshdesk vs Intercom, evaluating which support tool fits your team size and budget, choosing a help desk for e-commerce or SaaS, migrating from one help desk to another, or wondering which platform has the best AI or automation. Do NOT use for platform-specific configuration (use /sales-zendesk or the relevant platform skill), CCaaS/contact center selection (use /sales-ccaas-selection), or live chat strategy (use /sales-live-chat)."
argument-hint: "[describe your help desk selection question — e.g., 'compare Zendesk vs Freshdesk for a 15-person support team' or 'best help desk for Shopify store']"
license: MIT
version: 1.0.0
tags: [sales, customer-service, help-desk, support, strategy]
---

# Help Desk & Customer Service Platform Comparison

Help the user choose the right help desk or customer service platform for their team. This skill is tool-agnostic — it compares platforms on features, pricing, AI capabilities, integrations, and ease of use to find the best fit.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

1. **What's driving the evaluation?**
   - A) Greenfield — setting up support for the first time
   - B) Switching — unhappy with current platform (which one?)
   - C) Scaling — outgrowing current tool, need more features
   - D) Cost — current platform too expensive
   - E) Consolidation — replacing multiple tools with one

2. **Team size?**
   - A) Solo / 1-3 agents
   - B) Small team (4-15 agents)
   - C) Mid-market (16-50 agents)
   - D) Large (51-200 agents)
   - E) Enterprise (200+ agents)

3. **Primary use case?**
   - A) SaaS / software support
   - B) E-commerce customer service
   - C) B2B support with account management
   - D) Internal IT / employee help desk
   - E) Multi-brand / multi-product support
   - F) Agency / BPO managing multiple clients

4. **Must-have features?** (pick all that apply)
   - A) AI / chatbot automation
   - B) Omnichannel (email + chat + phone + social)
   - C) Knowledge base / help center
   - D) Deep CRM integration (Salesforce, HubSpot)
   - E) E-commerce integration (Shopify, WooCommerce)
   - F) HIPAA / SOC 2 compliance
   - G) Shared inbox (Gmail/Outlook-based workflow)
   - H) Self-service portal
   - I) API / developer tools

5. **Budget range per agent/month?**
   - A) Free / under $20
   - B) $20-60
   - C) $60-120
   - D) $120+
   - E) Not sure

**Skip-ahead rule**: if the user's prompt already provides enough context, skip to Step 2.

## Step 2 — Compare and recommend

**Read `references/platforms.md`** for the full comparison — platform overviews, pricing, strengths, weaknesses, and best-fit scenarios.

### Quick decision matrix

| If you need... | Start with... | Why |
|---|---|---|
| Enterprise-grade with every feature | Zendesk Suite | Market leader, 1300+ apps, deepest integrations |
| Budget-friendly with free tier | Freshdesk | Strong feature set, free plan for up to 2 agents |
| Conversational / product-led support | Intercom | Best messenger UX, proactive messaging, product tours |
| Simple shared inbox | Help Scout or Hiver | Clean UI, feels like email, fast setup |
| E-commerce focused | Gorgias | Native Shopify/BigCommerce, order management in tickets |
| B2B with Slack/Teams support | Pylon or Front | Native channel support, account-level context |
| ITSM / dev team alignment | Jira Service Management | Jira integration, change management, CI/CD visibility |
| Budget all-in-one | Zoho Desk | Part of Zoho suite, free plan, low per-agent cost |
| SMB with chat focus | Tidio or Crisp | AI chatbot + live chat, affordable, easy setup |

### Key comparison dimensions

1. **Pricing model** — per agent vs per conversation vs free tier availability
2. **AI capabilities** — included vs add-on, quality of automation, chatbot sophistication
3. **Channel coverage** — email, chat, phone, social, messaging apps, in-app
4. **Ease of setup** — days vs weeks vs months to go live
5. **Integration depth** — native CRM/e-commerce connectors, API quality, marketplace size
6. **Scalability** — will it grow with you or require migration at a certain size?

## Step 3 — Actionable guidance

Based on the user's specific situation:

1. **Recommend 1-2 platforms** with clear reasoning tied to their requirements
2. **Call out deal-breakers** — features they need that a platform lacks or charges extra for
3. **Migration considerations** — if switching, what data can be migrated and what gets lost
4. **Trial strategy** — most platforms offer 14-30 day trials; suggest what to test during the trial
5. **Route to platform skill** — once they've chosen, hand off to the specific platform skill for setup help

## Gotchas

> *Best-effort from research — review these, especially items about pricing and feature availability that may be outdated.*

1. **Zendesk's real costs are 2-3x advertised** — AI, Copilot, QA, and WFM are all paid add-ons (~$25-50/agent each). Budget accordingly.
2. **"Free plans" are limited** — Freshdesk Free supports 2 agents, Zoho Desk Free supports 3 agents. They work for getting started but most teams outgrow them quickly.
3. **Intercom's conversation-based pricing** — costs vary with volume. Predictable for low-volume, expensive for high-volume support.
4. **Migration data loss** — ticket history usually migrates, but automation rules, macros, and SLA configurations typically need to be rebuilt manually.
5. **AI quality varies widely** — "AI-powered" is table stakes in marketing copy. Test with your actual ticket data during trials to evaluate classification accuracy and resolution quality.

## Related skills

- `/sales-zendesk` — Zendesk platform help (ticketing, Help Center, AI agents, API)
- `/sales-ccaas-selection` — CCaaS platform comparison for full contact centers
- `/sales-live-chat` — Live chat strategy across tools
- `/sales-chatbot` — Chatbot marketing and conversational automation
- `/sales-customer-success` — Customer success strategy
- `/sales-customer-feedback` — Customer feedback, NPS, CSAT, VoC
- `/sales-integration` — Connect help desk to CRM and other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: SaaS startup choosing first help desk
**User says**: "We're a 10-person SaaS startup with about 50 support tickets a day. We use HubSpot CRM. Need email + chat support with a knowledge base. Budget is under $50/agent."
**Skill does**: Compares Freshdesk (free tier → Growth $15), Help Scout ($22/user), and Intercom ($29/seat + conversation fees). Recommends Freshdesk Growth for budget or Help Scout for simplicity, both with HubSpot integration. Flags Intercom's variable pricing as a risk at their volume.

### Example 2: E-commerce migrating from email
**User says**: "We run a Shopify store doing 200 orders/day and we're managing support through Gmail. It's chaos. What should we use?"
**Skill does**: Recommends Gorgias ($10/50 tickets or $40/300 tickets) for native Shopify integration — order lookup, refund processing, and macro automation in tickets. Mentions Freshdesk and Zendesk as alternatives if they need non-e-commerce features.

### Example 3: Enterprise switching from Zendesk
**User says**: "Our Zendesk bill is $180K/year for 80 agents and we barely use Talk or Sell. What are our options?"
**Skill does**: Audits their usage pattern — if primarily ticketing + chat + knowledge base, compares Freshdesk Enterprise ($79/agent), Help Scout Plus ($44/user), and Front ($59/seat). Calculates annual savings. Flags migration complexity and suggests a phased pilot.

## Troubleshooting

### Not sure if I need a help desk or a contact center (CCaaS)
**Symptom**: Confused about whether to evaluate help desks or contact center platforms
**Cause**: Help desks handle ticketing, email, chat, knowledge base. CCaaS adds telephony, IVR, workforce management, quality management at scale.
**Solution**: If you have <50 agents and support is primarily email/chat with some phone, start with a help desk. If you have 50+ agents, dedicated phone queues, and need WFM/QA, evaluate CCaaS platforms via `/sales-ccaas-selection`.

### Worried about data migration
**Symptom**: Want to switch but afraid of losing ticket history and configurations
**Cause**: Most platforms support ticket/user data import but not automation rules
**Solution**: 1) Export tickets as CSV from current platform. 2) Most help desks have import tools or migration services. 3) Budget 2-4 weeks to rebuild automations, macros, and SLAs manually. 4) Consider running both platforms in parallel during transition.

### Can't justify the cost to leadership
**Symptom**: Leadership sees help desk as a cost center, not willing to invest
**Cause**: ROI of help desk isn't obvious without metrics
**Solution**: Track current support metrics (response time, resolution time, customer satisfaction) before implementing. Show projected improvement. Calculate cost of lost customers from poor support vs platform cost. Most platforms pay for themselves by reducing agent handle time 20-40%.
