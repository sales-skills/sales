---
name: sales-ai-visibility
description: "AI visibility monitoring strategy — tracking what ChatGPT, Claude, Perplexity, Gemini, and other LLMs say about your brand. Covers manual monitoring (prompt templates), tool selection (BrandJet AI, Otterly.ai, Topify, Sight AI, LLMrefs, Semrush, Ahrefs Brand Radar, Meltwater), keyword and competitor tracking, understanding AI citations, improving AI visibility (content strategy, Reddit/forum presence, entity optimization), and measuring impact over time. Use when you don't know what ChatGPT or Perplexity says about your brand, competitors are showing up in AI answers but you're not, unsure which AI visibility tool to use, or want to improve how LLMs describe your product. Do NOT use for traditional social listening (use /sales-social-listening), SEO-specific help (use /sales-semrush), BrandJet platform help (use /sales-brandjet), or Meltwater platform help (use /sales-meltwater)."
argument-hint: "[describe your AI visibility question — e.g., 'what does ChatGPT say about my brand' or 'how do I improve my presence in AI search results']"
license: MIT
version: 1.0.0
tags: [sales, ai-visibility, brand-monitoring, llm, ai-search, strategy]
---
# AI Visibility Monitoring Strategy

Helps the user monitor and improve what AI models (ChatGPT, Claude, Perplexity, Gemini, and others) say about their brand — from manual prompt checks through tool selection, citation analysis, content strategy, and ongoing measurement. This skill is tool-agnostic and applies whether the user has no monitoring in place or is evaluating dedicated AI visibility platforms.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Checking what AI models currently say about my brand
   - B) Choosing an AI visibility monitoring tool
   - C) Improving my brand's presence in AI answers
   - D) Tracking competitors in AI search results
   - E) Understanding how LLM citations and mentions work
   - F) Setting up ongoing monitoring and measurement
   - G) Something else — describe it

2. **What's your current situation?**
   - A) Haven't checked AI models yet — starting from zero
   - B) Manually checking occasionally (copy-paste prompts)
   - C) Using a monitoring tool — which one?
   - D) Evaluating tools / comparing options

3. **What's your industry and brand type?**
   - A) B2B SaaS / tech
   - B) E-commerce / DTC
   - C) Agency / consultancy
   - D) Local business
   - E) Enterprise / large brand
   - F) Other — describe it

4. **Budget range?**
   - A) Free / manual only
   - B) Under $200/mo
   - C) $200-1,000/mo
   - D) Enterprise ($1,000+/mo)
   - E) Not sure yet

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- BrandJet AI setup, config, or features → `/sales-brandjet`
- Semrush AI Visibility Toolkit → `/sales-semrush`
- Meltwater ChatGPT monitoring → `/sales-meltwater`
- Traditional social listening (not AI-specific) → `/sales-social-listening`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — AI visibility strategy reference

### Why AI visibility matters

LLMs are becoming a primary discovery channel. Key facts:
- ChatGPT processes billions of queries daily; Perplexity, Claude, and Gemini handle millions more
- Google AI Overviews trigger on a large percentage of searches, often replacing traditional click-through results
- Most brand mentions in AI answers come from third-party pages (reviews, forums, articles), not your own site
- Only a small fraction of ChatGPT mentions include clickable citation links — most are text-only references
- AI answers vary by prompt wording, session, model version, and user context — there is no single "ranking"

### Manual monitoring approach

Before investing in tools, check what AI models say about your brand for free:

#### Prompt templates for brand audits

Use these across ChatGPT, Claude, Perplexity, and Gemini:

| Category | Prompt template |
|---|---|
| **Brand overview** | "What is [Brand]? What do they do and what are they known for?" |
| **Reputation** | "What do people think about [Brand]? What are the main pros and cons?" |
| **Comparison** | "How does [Brand] compare to [Competitor]?" |
| **Recommendation** | "What's the best [product category] for [use case]?" |
| **Alternatives** | "What are the best alternatives to [Brand]?" |
| **Reviews** | "Is [Brand] worth it? What do reviews say?" |
| **Industry** | "Who are the top [industry] companies/tools?" |

#### How to run a manual audit

1. **Pick 10-15 prompts** from the templates above, customized with your brand, competitors, and category
2. **Run each prompt** across at least 3 models (ChatGPT, Claude, Perplexity) — results differ between models
3. **Record for each response**: Was your brand mentioned? Positively or negatively? Were competitors mentioned instead? Was a citation link included?
4. **Repeat monthly** — AI models update their training data and retrieval sources, so answers change over time
5. **Track in a spreadsheet** — columns: date, model, prompt, mentioned (yes/no), sentiment (+/0/-), citation (yes/no), competitors mentioned, key quotes

#### Limitations of manual monitoring

- Time-consuming (15+ prompts × 3+ models = 45+ individual checks)
- Results vary per session — the same prompt can produce different answers minutes apart
- No historical trend data unless you track it yourself
- No automated alerts when answers change
- Cannot monitor at scale (hundreds of keywords, daily)

### Tool selection

| Tool | Models covered | Key strength | Pricing | Best for |
|---|---|---|---|---|
| **BrandJet AI** | ChatGPT, Claude, Perplexity, Gemini | Brand intelligence + social listening + AI monitoring in one | Varies (contact) | Brands wanting AI + social monitoring combined |
| **Otterly.ai** | ChatGPT, Perplexity, Google AI Overviews, Bing Copilot | Dedicated AI search monitoring with ranking tracking | From ~$49/mo | SEO teams adding AI search tracking |
| **Topify** | ChatGPT, Perplexity, Gemini | AI search visibility with keyword tracking | Varies | Marketing teams focused on AI search presence |
| **Sight AI** | ChatGPT, Claude, Perplexity, Gemini | Tracks mentions across conversational AI | Varies | Teams wanting broad LLM coverage |
| **LLMrefs** | Multiple LLMs | Maps SEO keywords to AI visibility | Varies | SEO-first teams bridging to AI monitoring |
| **Semrush** | ChatGPT, Google AI Overviews | AI Visibility Toolkit (part of larger SEO suite) | Part of Semrush plan (from $139/mo) | Teams already using Semrush for SEO |
| **Ahrefs Brand Radar** | AI search + Reddit | Tracks brands across AI and community platforms | Part of Ahrefs plan | Teams already using Ahrefs for SEO |
| **Meltwater** | ChatGPT | Enterprise media intelligence with ChatGPT monitoring | Enterprise pricing (~$6K+/yr) | Enterprise PR teams with existing Meltwater |

#### When to choose each approach

- **Manual only** — budget is zero, brand is small, checking monthly is enough. Use the prompt templates above.
- **BrandJet AI** — you want combined AI visibility and social listening in one tool, and you need coverage across multiple LLMs.
- **Otterly.ai** — your primary concern is AI search ranking (how often and where you appear in AI answers for target keywords).
- **Topify** — you want keyword-level AI search tracking with competitive benchmarking.
- **Sight AI** — you want broad coverage of conversational AI models with mention tracking.
- **LLMrefs** — you already have an SEO keyword strategy and want to see how those keywords translate to AI visibility.
- **Semrush AI Visibility** — you already use Semrush and want AI monitoring added to your existing SEO workflow without a new vendor.
- **Ahrefs Brand Radar** — you already use Ahrefs and want AI + Reddit monitoring integrated into your existing SEO tools.
- **Meltwater** — you are an enterprise with an existing Meltwater contract and want to add ChatGPT monitoring to your media intelligence.

### Understanding AI citations

LLMs handle citations differently than traditional search:

| Aspect | Traditional search | AI answers |
|---|---|---|
| **Format** | Blue links with URL | Inline text mention, sometimes with citation link |
| **Visibility** | Guaranteed click-through from results page | Often no link — brand is mentioned but not linked |
| **Control** | Optimize your page, influence ranking | Cannot directly control what the model says |
| **Consistency** | Same query = same results (mostly) | Same query can produce different answers each time |
| **Data source** | Your page content | Training data + retrieval from third-party pages |

**Types of AI brand mentions:**
1. **Named mention, no link** — the model mentions your brand by name but provides no URL. Most common type.
2. **Named mention with citation** — the model mentions your brand and includes a clickable source link. Less common. More likely in Perplexity and Google AI Overviews than ChatGPT.
3. **Category inclusion** — your brand appears in a list (e.g., "top CRM tools include Salesforce, HubSpot, and Pipedrive"). Common for "best of" prompts.
4. **Competitor comparison** — your brand is directly compared to a competitor. High-impact mention.
5. **Absence** — the model answers a question in your category without mentioning you at all. This is the most common and most important signal to track.

### Improving AI visibility

AI models pull information from training data and retrieval sources. You cannot optimize for AI the same way you optimize for Google, but you can influence what models learn about your brand:

#### Content strategy for AI visibility

1. **Create clear, factual content about your brand** — LLMs learn from web pages. Ensure your site clearly states what you do, who you serve, and how you compare. Use structured data (schema markup) so retrieval systems can parse your content.
2. **Build third-party presence** — most AI mentions come from third-party pages. Get reviewed on G2, Capterra, TrustRadius. Earn press coverage. Publish guest posts on authoritative sites.
3. **Invest in Reddit and forum presence** — Reddit is a key retrieval source for many AI models. Genuinely participate in relevant subreddits. Answer questions in your domain. Do not spam or astroturf.
4. **Publish comparison content** — create honest "Brand vs Competitor" pages. AI models often source from comparison content when users ask "which is better" prompts.
5. **Maintain Wikipedia and knowledge bases** — if your brand is notable enough for Wikipedia, ensure the article is accurate and current. AI models heavily weight Wikipedia and similar structured knowledge sources.

#### Entity optimization

- **Consistent naming** — use the same brand name format everywhere. If you are "Acme Corp", don't alternate between "Acme", "ACME Corp", and "Acme Corporation" across different pages.
- **Structured data** — implement Organization, Product, and Review schema markup on your site.
- **Knowledge panel** — claim your Google Knowledge Panel. This structured data feeds into AI models.
- **Wikidata** — ensure your brand has a Wikidata entry with accurate properties.

#### What does NOT work

- Keyword stuffing your own pages — AI models do not use keyword density signals
- Buying backlinks — AI retrieval cares about content quality and source authority, not link graphs
- Prompt injection or hidden text — models are trained to ignore manipulation attempts
- Expecting overnight results — training data updates are infrequent; retrieval source updates are faster but still not instant

### Measuring impact

#### Key metrics to track

| Metric | How to measure | Frequency |
|---|---|---|
| **Mention rate** | % of target prompts where your brand appears | Monthly |
| **Sentiment** | Positive / neutral / negative tone of AI responses about you | Monthly |
| **Citation rate** | % of mentions that include a clickable link to your site | Monthly |
| **Competitor mention rate** | How often competitors appear in your category prompts | Monthly |
| **Category ownership** | % of "best [category]" prompts where you appear in top 3 | Monthly |
| **Answer accuracy** | % of AI responses about your brand that are factually correct | Quarterly |

#### Setting up a measurement cadence

1. **Define your prompt set** — 20-30 prompts covering brand, category, comparison, and recommendation queries
2. **Choose your models** — at minimum ChatGPT and Perplexity; ideally also Claude and Gemini
3. **Run monthly audits** — either manually or via a monitoring tool
4. **Track trends** — month-over-month changes in mention rate, sentiment, and citation rate
5. **Report quarterly** — aggregate findings into a quarterly AI visibility report for stakeholders

### Limitations to be transparent about

- **No impression data** — unlike Google Search Console, there is no way to know how many people saw an AI answer mentioning your brand. You can track mention presence but not reach.
- **Non-deterministic answers** — the same prompt can produce different answers in different sessions. Any measurement is a sample, not a census.
- **Model updates change everything** — when a model updates its training data or retrieval system, your visibility can shift overnight. This is not something you can control or predict.
- **No official ranking** — there is no equivalent of "position 1" in AI answers. A brand can appear in one response and be absent in the next for the same prompt.
- **Retrieval vs training** — some mentions come from the model's training data (static, slow to change) and some from real-time retrieval (dynamic, changes with source content). You cannot tell which is which from the output.
- **Tool accuracy varies** — AI visibility tools are new and their data accuracy is evolving. Cross-reference tool data with manual spot-checks.

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Brand audit** — run the manual prompt templates across models, document findings, identify gaps
2. **Tool selection** — recommend the best tool for their use case, budget, and existing stack
3. **Monitoring setup** — design keyword strategy, configure competitor tracking, set measurement cadence
4. **Improvement plan** — content strategy, third-party presence, entity optimization, timeline
5. **Reporting** — design a quarterly AI visibility report for stakeholders
6. **Competitive analysis** — compare brand vs competitors across AI models, identify where competitors are mentioned and you are not

Provide specific, step-by-step recommendations. Include prompt templates where relevant. Set realistic expectations about timelines (months, not weeks) and the inherent variability of AI answers.

## Gotchas

*Best-effort from research — review these, especially items about pricing and capabilities that may change.*

- **AI visibility tools are a nascent category.** Most launched in 2024-2025. Features, pricing, and even company survival are in flux. Evaluate carefully and avoid long contracts.
- **No tool covers every model.** Most tools focus on ChatGPT and Perplexity. Coverage of Claude, Gemini, and others varies. Check which models a tool actually monitors before committing.
- **Manual checks are unreliable for trending.** Because AI answers vary per session, a single manual check does not represent what most users see. Tools that run hundreds of prompts and average results give a more accurate picture.
- **AI visibility and SEO are related but different.** Ranking #1 on Google does not guarantee AI models mention your brand. Conversely, AI models may mention brands that do not rank well in traditional search. Treat AI visibility as a separate channel.
- **Reddit presence matters more than you think.** Reddit is a retrieval source for ChatGPT, Perplexity, and Google AI Overviews. Genuine Reddit presence (not astroturfing) can directly influence what AI models say about your brand.
- **Do not expect click-through.** Most AI mentions do not include links. The value of AI visibility is brand awareness and consideration, not direct traffic. Measure accordingly.
- **Accuracy of AI responses about your brand is a real risk.** LLMs can hallucinate facts, attribute wrong features, or confuse your brand with a competitor. Regular audits catch errors before customers see them.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-brandjet` — BrandJet AI platform help — outreach, brand intelligence, AI monitoring
- `/sales-social-listening` — Social listening and brand monitoring strategy
- `/sales-semrush` — Semrush platform help — SEO, AI Visibility Toolkit
- `/sales-meltwater` — Meltwater platform help — media intelligence
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: First-time AI brand audit
**User says**: "I want to know what ChatGPT says about my SaaS product. I've never checked."
**Skill does**:
1. Provides customized prompt templates for the user's product category
2. Walks through running prompts across ChatGPT, Claude, and Perplexity
3. Gives a spreadsheet structure for tracking results (date, model, prompt, mentioned, sentiment, citations)
4. Identifies gaps — prompts where the brand is absent but competitors appear
**Result**: First baseline audit complete with documented findings and identified opportunities

### Example 2: Choose an AI visibility tool
**User says**: "I'm already using Semrush for SEO. Should I add a dedicated AI visibility tool or use Semrush's AI features?"
**Skill does**:
1. Explains what Semrush AI Visibility Toolkit covers and its limitations (primarily ChatGPT and Google AI Overviews)
2. Compares against dedicated tools like Otterly.ai and BrandJet AI for broader model coverage
3. Recommends starting with Semrush's built-in features since there is no additional cost, then evaluating a dedicated tool if coverage gaps emerge
4. Outlines what to measure in a 30-day evaluation period
**Result**: Clear decision framework matched to existing stack and needs

### Example 3: Improve AI visibility for a brand competitors dominate
**User says**: "When I ask ChatGPT for the best project management tools, our competitors show up but we don't. How do I fix this?"
**Skill does**:
1. Diagnoses likely causes — thin web presence, limited third-party coverage, weak entity signals
2. Designs a content strategy: comparison pages, G2/Capterra reviews, Reddit presence, structured data
3. Sets realistic timeline (3-6 months for training data impact, faster for retrieval-sourced changes)
4. Recommends monitoring specific "best [category]" prompts monthly to track progress
**Result**: Actionable improvement plan with realistic expectations and measurement cadence

## Troubleshooting

### AI models say inaccurate things about your brand
**Symptom**: ChatGPT or other models state wrong facts about your product — wrong pricing, features that do not exist, or confusion with another brand.
**Cause**: Training data includes outdated or incorrect information from third-party pages, or the model is hallucinating.
**Solution**: Update your own site with clear, structured, factual information. Correct inaccuracies on third-party sites (G2, Wikipedia, Crunchbase). Publish authoritative content that directly addresses the inaccuracy. For retrieval-based models (Perplexity, Google AI Overviews), corrections propagate faster. For training-data-based answers, you must wait for the next model update.

### Brand appears in one model but not others
**Symptom**: Perplexity mentions your brand consistently but ChatGPT does not, or vice versa.
**Cause**: Different models have different training data cutoffs, retrieval sources, and ranking algorithms. Perplexity relies heavily on real-time web retrieval. ChatGPT mixes training data with browsing. Claude uses training data primarily.
**Solution**: Investigate which sources each model draws from. For retrieval-heavy models (Perplexity), focus on current web presence and authoritative pages. For training-heavy models (ChatGPT, Claude), focus on building presence on high-authority sites that are likely in training data (Wikipedia, major publications, established review sites).

### Monitoring tool shows different results than manual checks
**Symptom**: Your AI visibility tool says you are mentioned 60% of the time, but when you manually check, you only see mentions 30% of the time.
**Cause**: Tools typically run hundreds of prompt variations and aggregate results. Manual checks are a small, non-representative sample. Additionally, tools may use API access which can produce different results than the consumer-facing chat interface.
**Solution**: Treat tool data as directional trends rather than absolute numbers. Use manual checks to validate qualitative aspects (sentiment, accuracy, context) rather than to verify quantitative metrics. Cross-reference multiple tools if accuracy is critical.
