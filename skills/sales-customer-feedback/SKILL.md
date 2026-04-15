---
name: sales-customer-feedback
description: "Customer feedback, NPS, CSAT, CES, Voice of Customer strategy across platforms — survey design, response rate optimization, closed-loop feedback, text analytics, benchmarking, program governance. Use when NPS scores are stagnant, survey response rates are low, feedback isn't driving action, unsure which CX metric to use, need to design a VoC program, comparing feedback tools (Medallia vs Qualtrics vs SurveyMonkey vs Typeform), or customers feel over-surveyed. Do NOT use for product review collection like Trustpilot or G2 (use /sales-customer-reviews) or in-app message surveys (use /sales-in-app-messaging)."
argument-hint: "[describe your customer feedback or survey question]"
license: MIT
version: 1.0.0
tags: [sales, cx, nps, csat, voc, feedback, strategy]
---
# Customer Feedback & VoC Strategy

Help the user design, optimize, and act on customer feedback programs — from choosing the right CX metrics and survey tools through improving response rates, building closed-loop workflows, and proving ROI.

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Choosing a feedback tool / platform comparison
   - B) Designing a VoC program from scratch
   - C) Improving survey response rates
   - D) Choosing the right metric (NPS vs CSAT vs CES vs custom)
   - E) Closing the loop — turning feedback into action
   - F) Text analytics / making sense of open-ended responses
   - G) Executive reporting / proving CX ROI
   - H) Survey fatigue — customers feel over-surveyed
   - I) Something else — describe it

2. **What type of business?**
   - A) B2B SaaS
   - B) B2B enterprise / services
   - C) B2C ecommerce
   - D) B2C subscription
   - E) Financial services / healthcare / regulated
   - F) Other

3. **Current feedback tool?** (Medallia, Qualtrics, SurveyMonkey, Typeform, Delighted, AskNicely, Skeepers, none yet, other)

4. **What's your scale?** (monthly feedback volume: <100, 100-1K, 1K-10K, 10K+)

**If the user's request already provides enough context, skip to the relevant step.** Lead with your best-effort answer, then ask 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- Typeform platform questions → `/sales-typeform {your question}`
- SurveyMonkey platform questions → `/sales-surveymonkey {your question}`
- Qualtrics platform questions → `/sales-qualtrics {your question}`
- Medallia platform questions → `/sales-medallia {your question}`
- Skeepers Feedback Management → `/sales-skeepers {your question}`
- Pendo NPS/CSAT/PMF surveys → `/sales-pendo {your question}`
- Whatfix in-app NPS/usability surveys → `/sales-whatfix {your question}`
- Vitally NPS/surveys (within a Customer Success platform) → `/sales-vitally {your question}`
- ChurnZero NPS/CSAT/CES surveys → `/sales-churnzero {your question}`
- In-app NPS/CSAT surveys → `/sales-in-app-messaging {your question}`
- Product review collection (public reviews) → `/sales-customer-reviews {your question}`
- Email survey delivery optimization → `/sales-email-marketing {your question}`
- SMS survey delivery → `/sales-sms-marketing {your question}`

Otherwise, answer directly using the strategy guidance below.

## Step 3 — Feedback strategy

### CX metrics comparison

| Metric | Measures | Best for | Question | Scale |
|---|---|---|---|---|
| **NPS** | Loyalty / advocacy | Relationship health, benchmarking | "How likely are you to recommend us?" | 0-10 |
| **CSAT** | Satisfaction with a specific interaction | Transactional touchpoints | "How satisfied were you with...?" | 1-5 |
| **CES** | Effort required | Support, onboarding, self-service | "How easy was it to...?" | 1-7 |
| **Custom** | Whatever matters to you | Specific business outcomes | Tailored to your context | Varies |

**When to use which**:
- **NPS**: Quarterly/annual relationship surveys + post-major-milestone (onboarding complete, renewal)
- **CSAT**: After every service interaction (support ticket, sales call, delivery)
- **CES**: After self-service flows (help center, checkout, account changes)
- **Don't combine all three** in one survey — pick the right metric for each touchpoint

### Platform comparison

| Platform | Best for | Pricing | Key strength |
|---|---|---|---|
| **Medallia** | Enterprise, 10K+ responses/mo | Custom (high, EDR-based) | Real-time action management, DXA, AI analytics |
| **Qualtrics** | Enterprise, research-heavy orgs | Custom (high, seat + response) | Survey methodology depth, XM suite breadth |
| **SurveyMonkey** | SMB, quick surveys | From $25/mo | Ease of use, fast setup, affordable |
| **Typeform** | Design-focused, conversational surveys | From $25/mo | Beautiful UX, high completion rates |
| **Delighted** | Startup NPS/CSAT | From $224/mo | Simple, focused on CX metrics |
| **AskNicely** | Frontline team NPS | Custom | Frontline coaching + NPS in one |
| **CustomerGauge** | B2B account experience | Custom | Account-level NPS, revenue attribution |
| **Zonka Feedback** | Mid-market, multi-channel | From $49/mo | Strong offline/kiosk + digital |
| **Birdeye** | Multi-location service businesses | ~$299/mo/location | Integrated with reviews + messaging, healthcare PMS connectors |
| **Skeepers** | Ecommerce (reviews + feedback) | From ~3K EUR/mo | Combined reviews + NPS/CSAT in one platform |

**Decision framework**:
- **Just starting / <100 responses**: SurveyMonkey or Typeform — simple, affordable
- **Growing B2C**: Delighted or Zonka — focused CX metrics without enterprise complexity
- **B2B account health**: CustomerGauge — ties NPS to revenue by account
- **Enterprise program**: Medallia or Qualtrics — full VoC platforms with action management
- **Multi-location service business**: Birdeye — surveys integrated with reviews, messaging, and listings in one platform
- **Already using reviews platform**: Skeepers — adds NPS/CSAT to existing review collection

### Response rate optimization

**Benchmark response rates by channel:**
| Channel | Typical rate | Target |
|---|---|---|
| Email survey | 5-15% | 15-25% |
| SMS survey | 10-20% | 20-30% |
| In-app survey | 15-30% | 25-40% |
| Post-chat survey | 10-25% | 20-35% |

**Proven tactics (in priority order):**
1. **Shorten the survey** — 2-3 questions max for transactional, 8-12 max for relationship
2. **Send immediately** — within 1 hour of interaction for transactional surveys
3. **Use the right channel** — match the interaction channel (chat → in-app, phone → SMS, email → email)
4. **Personalize sender and subject** — personal name > company name, reference the interaction
5. **Embed the first question in the email** — 1-click NPS rating in the email body
6. **Throttle aggressively** — no more than 1 survey per customer per 90 days minimum
7. **Close the loop visibly** — customers who see action from their feedback are 2x more likely to respond next time

### Closed-loop feedback workflow

1. **Capture** → Feedback received (survey response, social mention, support interaction)
2. **Route** → Alert the right person based on score, topic, and customer segment
3. **Acknowledge** → Respond to the customer within 24-48 hours (especially detractors)
4. **Investigate** → Root cause analysis — is this a systemic issue or one-off?
5. **Act** → Fix the root cause, not just the symptom
6. **Report** → Track which issues were resolved and their impact on scores
7. **Communicate** → Tell customers what changed because of their feedback ("You said, we did")

### Proving CX ROI

- **Link NPS to revenue**: Promoters spend more / retain at higher rate than detractors
- **Track closed-loop impact**: Detractors who receive follow-up have higher retention
- **Calculate cost of inaction**: Revenue at risk from detractor accounts
- **Benchmark against industry**: Use published NPS benchmarks (Medallia, Qualtrics, Satmetrix)

## Step 4 — Actionable guidance

Focus on the user's specific situation: program design, survey design, tool setup, analysis, or closed-loop workflows. If you discover a tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about specific platform capabilities that may change.*

- **NPS is not a universal metric.** NPS measures loyalty/advocacy — it's meaningless for one-time transactions. Use CSAT or CES for transactional touchpoints.
- **Survey fatigue is the #1 silent killer.** Over-surveying depresses response rates AND scores. Implement strict throttling rules across ALL survey tools — many organizations have multiple teams surveying the same customers independently.
- **"Improving NPS" is not a goal.** NPS is a lagging indicator. Focus on fixing the drivers (product quality, support speed, onboarding friction) and the score follows.
- **Enterprise tools need enterprise budgets.** Medallia and Qualtrics cost $100K-$500K+/year with professional services. Don't buy an enterprise platform for SMB survey needs.
- **Text analytics varies wildly.** AI-powered text analysis from Medallia/Qualtrics is sophisticated. SurveyMonkey/Typeform text analysis is basic keyword matching. If open-ended analysis is critical, it influences tool choice.
- **Self-serve vs managed.** Medallia is heavily consulting-dependent. Qualtrics is more self-serve but still complex. SurveyMonkey/Typeform are fully self-serve. Match the tool to your team's technical capability.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-surveymonkey` — SurveyMonkey platform help (survey creation, collectors, analytics, API). Install: `npx skills add sales-skills/sales --skills sales-surveymonkey`
- `/sales-qualtrics` — Qualtrics XM platform help (CX/EX surveys, dashboards, API, Experience Agents). Install: `npx skills add sales-skills/sales --skills sales-qualtrics`
- `/sales-medallia` — Medallia platform help (Experience Cloud, DXA, contact center, APIs). Install: `npx skills add sales-skills/sales --skills sales-medallia`
- `/sales-skeepers` — Skeepers platform help (Feedback Management module for NPS/CSAT). Install: `npx skills add sales-skills/sales --skills sales-skeepers`
- `/sales-birdeye` — Birdeye platform help (surveys + reviews + messaging for multi-location businesses). Install: `npx skills add sales-skills/sales --skills sales-birdeye`
- `/sales-vitally` — Vitally platform help: Health Scores, NPS, Playbooks, Projects, API. Install: `npx skills add sales-skills/sales --skills sales-vitally`
- `/sales-churnzero` — ChurnZero platform help: Health Scores, Surveys (NPS/CSAT/CES), Plays, Journeys, API. Install: `npx skills add sales-skills/sales --skills sales-churnzero`
- `/sales-customer-success` — Customer success strategy: health scores, churn prevention, onboarding, expansion, CS platform comparison. Install: `npx skills add sales-skills/sales --skills sales-customer-success`
- `/sales-customer-reviews` — Product review collection strategy (different from feedback surveys — reviews are public, surveys are private). Install: `npx skills add sales-skills/sales --skills sales-customer-reviews`
- `/sales-pendo` — Pendo platform help (in-app NPS/CSAT/PMF surveys, product analytics, guides). Install: `npx skills add sales-skills/sales --skills sales-pendo`
- `/sales-in-app-messaging` — In-app NPS/CSAT surveys as part of in-app messaging strategy. Install: `npx skills add sales-skills/sales --skills sales-in-app-messaging`
- `/sales-typeform` — Typeform platform help — conversational forms, surveys, quizzes, API, Embed SDK. Install: `npx skills add sales-skills/sales --skills sales-typeform`
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Starting a VoC program from scratch

**User**: "I'm a B2B SaaS company with 500 customers. I have no feedback program. Where do I start?"

**Approach**: Start with two touchpoints — a quarterly relationship NPS survey (email, 3 questions: NPS + open-end + primary driver) and a post-support CSAT survey (triggered automatically after ticket closure). Use Delighted or SurveyMonkey to start — no need for enterprise tools at this scale. Set up a simple closed-loop: detractor alerts to CS team within 1 hour, follow-up call within 24 hours. Track NPS by cohort and segment. Graduate to Qualtrics or Medallia when you exceed 5K responses/month and need advanced analytics.

### Example 2: NPS scores are flat despite improvement efforts

**User**: "Our NPS has been stuck at 32 for three quarters. We've been fixing bugs and improving support response time but the score won't budge."

**Approach**: Dig into the drivers, not the score. Segment NPS by customer type, product line, and tenure. Run text analytics on detractor comments to identify the top 3 themes — they may not be bugs or support speed. Check if survey population is representative (are you only surveying after support interactions?). Look at passive scores (7-8) — converting passives to promoters is often easier than converting detractors. Check survey fatigue — stagnant scores can mean only your most engaged customers respond, creating a ceiling.

### Example 3: Choosing between Medallia and Qualtrics

**User**: "We're an enterprise with 50K customers across retail and digital channels. Should we go with Medallia or Qualtrics?"

**Approach**: Both are Gartner/Forrester leaders. Key differences: Medallia has built-in digital experience analytics (session replay, heatmaps) — Qualtrics requires a separate product. Medallia is stronger on real-time action management and contact center analytics. Qualtrics is stronger on survey methodology and research capabilities. Medallia is more consulting-dependent — expect higher professional services costs. Both are $200K+/year at enterprise scale. Request POCs from both and evaluate on: your team's technical capability (Qualtrics is more self-serve), your primary use case (action management vs research), and integration with your existing stack.

## Troubleshooting

### Survey response rates are below 5%

- **Audit survey length.** If your transactional survey has more than 3 questions, that's likely the problem. Cut to NPS + open-end only.
- **Check delivery timing.** Surveys sent days after an interaction get ignored. Automate delivery within 1 hour.
- **Test the email/SMS.** Send yourself a test — does it land in spam? Is the subject line compelling? Can you rate in-email without clicking through?
- **Audit throttling.** If customers receive surveys from multiple teams/touchpoints, they tune out. Implement cross-program throttling.

### Feedback isn't driving any action

- **Alerts aren't reaching the right people.** Route detractor alerts to the person who can act (frontline manager, account owner), not a shared inbox.
- **No accountability for follow-up.** Assign ownership and SLAs for detractor follow-up (24-hour response target). Track and report on closure rates.
- **Insights stay in the CX team.** Share verbatim customer comments (not just scores) with product, engineering, and leadership weekly. Real quotes drive action better than dashboards.

### Customers complain about being over-surveyed

- **Implement global throttling.** No customer should receive more than 1 survey per 90 days across ALL programs. This requires coordination across teams.
- **Switch to always-on channels.** Replace some surveys with passive feedback (in-app feedback button, website comment box, social listening). You get continuous signal without asking.
- **Communicate the value.** When you fix something based on feedback, tell customers: "Based on your feedback, we've improved X." This makes the next survey feel worthwhile.
