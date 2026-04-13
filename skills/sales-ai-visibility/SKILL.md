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

**Read `references/platform-guide.md`** for detailed monitoring frameworks, tool comparisons, citation analysis, improvement strategies, and measurement metrics.

*You no longer need the platform guide details — focus on the user's specific situation.*

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
- `/sales-yoast` — Yoast SEO platform help — llms.txt generation (Shopify), Schema Aggregation for AI. Install: `npx skills add sales-skills/sales --skills sales-yoast`
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
