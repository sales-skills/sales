# QEval Platform Reference

## Platform overview

QEval is an AI-powered contact center quality monitoring platform by ETSLabs (part of Etech Global Services). Founded in 2003, headquartered in Nacogdoches, Texas. Processes 1B+ minutes of customer interactions per year, detecting 365M+ key moments every 5 minutes. Targets contact centers, BPOs, and customer service operations. ICMI-recognized for scaling quality monitoring in enterprise contact centers. 100+ team members across product, data science, and operations. 22 G2 reviews, 4.8/5 aggregate rating.

## Key modules

### AI Call Quality Monitoring
- 100% interaction analysis across voice, chat, email, social media, complaint handling
- Classification engine trained on 138M+ real conversations
- 94% automated scoring accuracy (zero manual intervention)
- Custom evaluation criteria and scorecards
- QA analyst productivity improvement of 65% (per QEval data)

### Conversational Analytics / Speech Analytics
- Real-time speech pattern and dialogue analysis
- AI-driven automated transcripts
- Keyword and phrase detection
- Sentiment analysis on customer interactions

### Agent Performance Management
- Individual contributor tracking and scoring
- KPI dashboards per agent
- Proactive performance alerts
- Direct feedback model for agent communication

### Voice of Customer (VoC) Analytics
- Customer sentiment extraction from interactions
- Trend identification across all customer touchpoints
- Customer experience management (CXM) end-to-end

### Compliance Monitoring
- 360-degree compliance monitoring
- Real-time alerts for critical compliance errors
- PCI-compliant data redaction
- Risk mitigation scoring per interaction
- Regulatory adherence tracking

### Integrated Coaching
- Agent training module
- Personalized coaching recommendations based on QA scores
- Direct feedback delivery to agents
- Coaching tied to specific interaction examples

### Reporting & Business Intelligence
- Custom dashboard creation
- Real-time performance alerts
- Contact center reporting and analytics
- Export capabilities for presentations
- Business intelligence analytics

## Pricing and limits

| Plan | Price | What's included |
|---|---|---|
| Manual | $40/user/month | Manual QA workflows, custom evaluation forms, calibration tools, basic reporting |
| AI | $100/user/month | Everything in Manual + automated 100% scoring, speech analytics, AI transcripts, sentiment analysis, compliance alerts |
| Enterprise | Custom | Volume discounts, dedicated support, custom integrations, SLA guarantees |

- No self-serve signup — demo required for all plans
- 30-day typical deployment timeline
- 24/7/365 support included on all plans
- Contact sales: +1-936-600-3483 / sales@QEvalpro.com

## Integrations

**Philosophy:** "Bring your own tech stack" — QEval integrates with existing infrastructure rather than replacing it.

**Integration methods:**
- API connections (details provided during onboarding, not publicly documented)
- SFTP file transfer
- Cloud storage connections

**Known CRM integrations:**
- HubSpot
- Freshworks CRM
- Other CRMs via custom API integration

**Connects with:**
- Call recording systems (any major platform)
- Telephony / dialing platforms
- Learning Management Systems (LMS)
- Workforce Management (WFM) tools
- Survey tools
- CRM platforms

**Partner integrations:**
- SymTrain (training simulation) — announced integration for QA-to-training pipeline

## Data model (limited — no public API docs)

QEval operates as a cloud-based SaaS platform at app.qevalpro.com. Key objects likely include:
- Interactions (calls, chats, emails with metadata)
- Evaluations (scorecard results per interaction)
- Agents (performance profiles, coaching history)
- Scorecards (evaluation criteria templates)
- Alerts (compliance violations, performance thresholds)

No public API documentation available. API access is provided during enterprise onboarding.

## Workflow setup

### Setting up automated QA scoring (AI plan)
1. **Define scorecards** — Create custom evaluation criteria matching your QA standards (compliance items, soft skills, process adherence)
2. **Connect call recording** — Integrate your recording platform via API or SFTP so QEval ingests 100% of interactions
3. **Configure AI scoring** — Map scorecard criteria to QEval's classification engine. Initial calibration uses your existing manually-scored evaluations as training data
4. **Set compliance alerts** — Define critical errors that trigger real-time notifications (missed disclosures, PCI violations, regulatory phrases)
5. **Calibrate** — Run 30-day parallel scoring (AI + human) on a sample. Adjust weights until AI scoring matches human evaluator standards within acceptable variance
6. **Go live** — Switch to full automated scoring with human review on flagged interactions only

### Setting up agent coaching
1. **Connect performance data** — Link QA scores to individual agent profiles
2. **Configure coaching triggers** — Set thresholds that automatically flag agents for coaching (e.g., QA score below 80% for 2+ weeks)
3. **Build coaching templates** — Create coaching session templates tied to specific scorecard criteria
4. **Enable direct feedback** — Turn on agent-facing dashboards so agents can see their scores and coaching recommendations
5. **Track impact** — Monitor coaching completion rates and correlate with QA score improvements over time

## Deep dives

### Calibration best practices
- Start with 50-100 manually scored interactions to establish baseline
- Compare AI vs human scores on the same interactions weekly for first 30 days
- Adjust scorecard weights for criteria where AI and human diverge most
- Use QEval's built-in calibration tools to align multiple human evaluators first, then calibrate AI against the aligned human standard
- Re-calibrate quarterly or whenever evaluation criteria change

### Compliance monitoring setup
- Define critical vs non-critical compliance items separately
- Critical errors (PCI, regulatory disclosures) should trigger immediate alerts
- Non-critical compliance items (greeting script, hold procedure) tracked in aggregate reporting
- Set up escalation workflows: alert → supervisor review → coaching session → re-evaluation
- Use QEval's risk mitigation scoring to prioritize which compliance gaps to address first

### Partner program
QEval offers reseller, affiliate, and strategic partner options. Contact CX@qevalpro.com for partnership inquiries. The program is designed for contact center consultants, technology integrators, and BPO providers who want to offer QA solutions to their clients.
