# AI Visibility Platform Guide

## Why AI Visibility Matters

LLMs are becoming a primary discovery channel. Key facts:
- ChatGPT processes billions of queries daily; Perplexity, Claude, and Gemini handle millions more
- Google AI Overviews trigger on a large percentage of searches, often replacing traditional click-through results
- Most brand mentions in AI answers come from third-party pages (reviews, forums, articles), not your own site
- Only a small fraction of ChatGPT mentions include clickable citation links — most are text-only references
- AI answers vary by prompt wording, session, model version, and user context — there is no single "ranking"

## Manual Monitoring Approach

Before investing in tools, check what AI models say about your brand for free:

### Prompt Templates for Brand Audits

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

### How to Run a Manual Audit

1. **Pick 10-15 prompts** from the templates above, customized with your brand, competitors, and category
2. **Run each prompt** across at least 3 models (ChatGPT, Claude, Perplexity) — results differ between models
3. **Record for each response**: Was your brand mentioned? Positively or negatively? Were competitors mentioned instead? Was a citation link included?
4. **Repeat monthly** — AI models update their training data and retrieval sources, so answers change over time
5. **Track in a spreadsheet** — columns: date, model, prompt, mentioned (yes/no), sentiment (+/0/-), citation (yes/no), competitors mentioned, key quotes

### Limitations of Manual Monitoring

- Time-consuming (15+ prompts x 3+ models = 45+ individual checks)
- Results vary per session — the same prompt can produce different answers minutes apart
- No historical trend data unless you track it yourself
- No automated alerts when answers change
- Cannot monitor at scale (hundreds of keywords, daily)

## Tool Selection

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

### When to Choose Each Approach

- **Manual only** — budget is zero, brand is small, checking monthly is enough. Use the prompt templates above.
- **BrandJet AI** — you want combined AI visibility and social listening in one tool, and you need coverage across multiple LLMs.
- **Otterly.ai** — your primary concern is AI search ranking (how often and where you appear in AI answers for target keywords).
- **Topify** — you want keyword-level AI search tracking with competitive benchmarking.
- **Sight AI** — you want broad coverage of conversational AI models with mention tracking.
- **LLMrefs** — you already have an SEO keyword strategy and want to see how those keywords translate to AI visibility.
- **Semrush AI Visibility** — you already use Semrush and want AI monitoring added to your existing SEO workflow without a new vendor.
- **Ahrefs Brand Radar** — you already use Ahrefs and want AI + Reddit monitoring integrated into your existing SEO tools.
- **Meltwater** — you are an enterprise with an existing Meltwater contract and want to add ChatGPT monitoring to your media intelligence.

## Understanding AI Citations

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

## Improving AI Visibility

AI models pull information from training data and retrieval sources. You cannot optimize for AI the same way you optimize for Google, but you can influence what models learn about your brand:

### Content Strategy for AI Visibility

1. **Create clear, factual content about your brand** — LLMs learn from web pages. Ensure your site clearly states what you do, who you serve, and how you compare. Use structured data (schema markup) so retrieval systems can parse your content.
2. **Build third-party presence** — most AI mentions come from third-party pages. Get reviewed on G2, Capterra, TrustRadius. Earn press coverage. Publish guest posts on authoritative sites.
3. **Invest in Reddit and forum presence** — Reddit is a key retrieval source for many AI models. Genuinely participate in relevant subreddits. Answer questions in your domain. Do not spam or astroturf.
4. **Publish comparison content** — create honest "Brand vs Competitor" pages. AI models often source from comparison content when users ask "which is better" prompts.
5. **Maintain Wikipedia and knowledge bases** — if your brand is notable enough for Wikipedia, ensure the article is accurate and current. AI models heavily weight Wikipedia and similar structured knowledge sources.

### Entity Optimization

- **Consistent naming** — use the same brand name format everywhere. If you are "Acme Corp", don't alternate between "Acme", "ACME Corp", and "Acme Corporation" across different pages.
- **Structured data** — implement Organization, Product, and Review schema markup on your site.
- **Knowledge panel** — claim your Google Knowledge Panel. This structured data feeds into AI models.
- **Wikidata** — ensure your brand has a Wikidata entry with accurate properties.

### What Does NOT Work

- Keyword stuffing your own pages — AI models do not use keyword density signals
- Buying backlinks — AI retrieval cares about content quality and source authority, not link graphs
- Prompt injection or hidden text — models are trained to ignore manipulation attempts
- Expecting overnight results — training data updates are infrequent; retrieval source updates are faster but still not instant

## Measuring Impact

### Key Metrics

| Metric | How to measure | Frequency |
|---|---|---|
| **Mention rate** | % of target prompts where your brand appears | Monthly |
| **Sentiment** | Positive / neutral / negative tone of AI responses about you | Monthly |
| **Citation rate** | % of mentions that include a clickable link to your site | Monthly |
| **Competitor mention rate** | How often competitors appear in your category prompts | Monthly |
| **Category ownership** | % of "best [category]" prompts where you appear in top 3 | Monthly |
| **Answer accuracy** | % of AI responses about your brand that are factually correct | Quarterly |

### Setting Up a Measurement Cadence

1. **Define your prompt set** — 20-30 prompts covering brand, category, comparison, and recommendation queries
2. **Choose your models** — at minimum ChatGPT and Perplexity; ideally also Claude and Gemini
3. **Run monthly audits** — either manually or via a monitoring tool
4. **Track trends** — month-over-month changes in mention rate, sentiment, and citation rate
5. **Report quarterly** — aggregate findings into a quarterly AI visibility report for stakeholders

### Limitations to Be Transparent About

- **No impression data** — unlike Google Search Console, there is no way to know how many people saw an AI answer mentioning your brand. You can track mention presence but not reach.
- **Non-deterministic answers** — the same prompt can produce different answers in different sessions. Any measurement is a sample, not a census.
- **Model updates change everything** — when a model updates its training data or retrieval system, your visibility can shift overnight. This is not something you can control or predict.
- **No official ranking** — there is no equivalent of "position 1" in AI answers. A brand can appear in one response and be absent in the next for the same prompt.
- **Retrieval vs training** — some mentions come from the model's training data (static, slow to change) and some from real-time retrieval (dynamic, changes with source content). You cannot tell which is which from the output.
- **Tool accuracy varies** — AI visibility tools are new and their data accuracy is evolving. Cross-reference tool data with manual spot-checks.
