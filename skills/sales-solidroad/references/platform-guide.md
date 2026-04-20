# Solidroad Platform Reference

## Platform overview

Solidroad is an AI-powered quality management and training platform for CX teams. Founded in 2023 (YC W25), headquartered in Dublin with offices in San Francisco. 6-person team led by CEO Mark Hughes (ex-Intercom) and CTO Patrick Finlay (ex-Intercom, Monaru S19). Raised $6.5M seed + $25M Series A (April 2026, led by Hedosophia). SOC 2 + ISO 27001 certified.

Solidroad's key differentiator is the **closed-loop between QA and training**: automated quality scoring surfaces skill gaps, which automatically generate targeted training simulations. Most QA tools stop at scoring — Solidroad connects scoring to remediation.

## Key modules

### Interaction Review (Automated QA)
- Scores **100% of conversations** across phone, live chat, video, and email — no sampling
- AI applies custom quality rubrics uniformly, avoiding subjective human interpretation
- Each org defines its own criteria: tone, policy compliance, interaction standards
- Conversations analyzed in **80+ languages**
- Up to **90% reduction** in manual review hours, **20x increase** in coverage

### AI Training Simulations
- Generates **custom practice scenarios** from real conversation patterns and discovered skill gaps
- Multi-channel: phone, email, chat, video simulations
- Each simulation scored against custom scorecards with instant coaching feedback
- **SCORE methodology**: Scenario-based training framework for structured practice
- Reps practice in risk-free environment before engaging real customers

### Performance Analytics
- **IQS framework**: Internal Quality Score tracking across agents and teams
- Custom scorecards with weighted criteria
- Team-wide and individual agent dashboards
- Tracks improvement over time: ramp time, resolution speed, quality scores

### Unified QA for Human + AI Agents
- Single, consistent quality view across human agents AND AI agents (chatbots, virtual agents)
- Same rubrics applied to both — identifies where AI agents fail and where humans struggle
- This is Solidroad's positioning against tools that only monitor human agents

## Pricing and limits

| Tier | Price | Key features |
|---|---|---|
| Personal | ~$10/user/mo | Basic simulations and scoring |
| Team/Growth | ~$20-30/user/mo | Full QA, team analytics, integrations |
| Enterprise | ~$50/user/mo + custom | Dedicated CSM, SSO, custom rubrics |

- 14-day free trial with Growth-tier features
- No free version
- Contact sales for exact tier breakdown — pricing is not fully transparent on the website

## Integrations

### CRM / Service Platforms
- **Salesforce Service Cloud** — native connector
- **Zendesk** — native connector
- **Intercom** — native connector

### Telephony / Contact Center
- Genesys, Avaya, Cisco, Five9 — mentioned as integration targets
- Works within existing CX tech stack

### API
- **No public API documented.** SaaSworthy lists API support as "NA."
- All integrations through native connectors or custom integration via Solidroad team
- No known webhook support

## Key results (case studies)

| Customer | Result |
|---|---|
| Podium Corp | 800K+ conversations/mo processed, 33% faster issue resolution |
| Tech Mahindra | 50% reduction in onboarding time |
| Crypto.com | Go-live CSAT improved by 3% (above 90%) |
| General | Up to 90% reduction in manual review hours, 20x increase in QA coverage |

## Workflow setup

### Setting up Automated QA (Week 1-2)

1. **Connect your channels**: Link Solidroad to your CRM/CCaaS via native connectors
2. **Define scoring criteria**: Start with 3-5 binary, observable criteria (not subjective)
3. **Configure custom rubrics**: Weight criteria by importance (compliance vs tone vs resolution)
4. **Run parallel scoring**: Compare AI scores against manual supervisor scores for 2-4 weeks
5. **Calibrate**: Adjust criteria and weights based on calibration results
6. **Go live**: Enable automated scoring on 100% of conversations

### Setting up AI Training (Week 3-4)

1. **Review QA gaps**: Identify the top 3-5 skill gaps from automated scoring data
2. **Generate simulations**: Solidroad creates practice scenarios targeting those specific gaps
3. **Configure channels**: Set up phone, chat, and/or email practice as needed
4. **Assign to agents**: Route simulations to agents with relevant skill gaps
5. **Track improvement**: Monitor quality scores post-training to measure impact

### Closed-Loop Coaching Workflow

```
QA scores conversations → Gaps identified → AI generates targeted simulations
→ Agent practices → Re-scored on real conversations → Improvement measured
→ New gaps surface → New simulations generated → Continuous improvement
```

## Competitive positioning

| Platform | Focus | QA | Training | Real-time coaching | Pricing |
|---|---|---|---|---|---|
| **Solidroad** | QA + Training closed-loop | 100% automated | AI simulations | No | $10-50/user/mo |
| Observe.AI | Enterprise QA + virtual agents | 100% automated | No | Agent Copilot | ~$100-500/user/mo |
| Balto | Real-time guidance | 100% automated | No | Yes (<200ms) | ~$100-150/agent/mo |
| Cresta | Enterprise AI stack | 100% automated | No | Yes | $60K-$150K/yr |
| MaestroQA | Structured QA workflows | Sampling-based | No | No | ~$19/user/mo+ |
| Enthu.AI | Affordable QA | 100% automated | No | No | ~$15-69/user/mo |

**When to choose Solidroad:**
- You want QA AND training in one platform (closed-loop)
- You're a BPO or mid-large contact center (50+ agents)
- You need multi-channel training (not just phone)
- You want to measure training impact directly through QA scores

**When to choose something else:**
- You need real-time coaching during calls → Balto or Cresta
- You need pure QA without training → Observe.AI, MaestroQA, or Enthu.AI
- You need AI virtual agents → Observe.AI or Cresta
- You have <20 agents and need affordability → Enthu.AI

## Partner program

Solidroad runs a PartnerStack affiliate program:
- $100 per lead, $500 per closed-won deal
- 90-day cookie (resets on re-click)
- Signup: https://solidroad.partnerstack.com/
