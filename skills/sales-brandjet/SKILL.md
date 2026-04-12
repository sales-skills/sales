---
name: sales-brandjet
description: "BrandJet AI platform help — multi-channel outreach sequences, unified inbox, brand monitoring, AI visibility tracking, lead discovery, social listening, email warmup, Artemis AI agent, and integrations. Use when asking 'how do I do X in BrandJet', configuring outreach workflows, setting up brand monitoring, managing multi-channel sequences, using the unified inbox, or tracking AI visibility. Do NOT use for designing cadence strategy (use /sales-cadence), cross-platform deliverability (use /sales-deliverability), social listening strategy (use /sales-social-listening), or enriching contacts (use /sales-enrich)."
argument-hint: "[describe what you need help with in BrandJet AI]"
license: MIT
version: 1.0.0
tags: [sales, outbound, multi-channel, outreach, brand-monitoring, ai-visibility, social-listening, platform]
---
# BrandJet AI Platform Help

Help the user with BrandJet AI platform questions — from multi-channel outreach and unified inbox through brand monitoring, AI visibility tracking, lead discovery, Artemis AI agent, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of BrandJet do you need help with?**
   - A) Multi-channel outreach — email, LinkedIn, Twitter/X, WhatsApp, Instagram, Telegram sequences
   - B) Unified inbox — managing replies across channels, AI sentiment categorization
   - C) Brand monitoring — tracking mentions across social media, news, forums
   - D) AI Visibility Monitoring — tracking brand mentions in ChatGPT, Claude, Perplexity, Gemini
   - E) Lead discovery — finding contacts from the 700M+ database, AI enrichment
   - F) Social listening — buyer intent signals, keyword tracking
   - G) Email warmup — warming up mailboxes for deliverability
   - H) Artemis AI agent — conversational AI for GTM workflows, autonomous channel responses
   - I) Integrations — Slack, HubSpot, Attio, Reddit, YouTube, webhooks
   - J) Team & admin — member access, role-based controls, billing, plan limits
   - K) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) Marketing / brand manager
   - D) RevOps / Sales Ops
   - E) Founder / solo seller
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Cadence strategy / sequence design → `/sales-cadence`
- Contact enrichment / data hygiene → `/sales-enrich`
- Cross-platform deliverability → `/sales-deliverability`
- Social listening strategy (platform-agnostic) → `/sales-social-listening`
- AI visibility strategy (platform-agnostic) → `/sales-ai-visibility`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — BrandJet platform reference

Provide module-by-module guidance based on the user's area:

### Multi-channel outreach
- **What it is**: Coordinated outreach sequences across email, LinkedIn, Twitter/X, WhatsApp, Instagram, and Telegram with a visual drag-and-drop workflow builder
- **Key concepts**: Multi-channel sequences = coordinated outreach flows across channels, steps = individual touchpoints, workflow builder = visual drag-and-drop editor for designing sequences
- **Channel support**: Email, LinkedIn, Twitter/X, WhatsApp, Instagram, Telegram — all managed from one interface
- **Best practices**: Start with 2-3 channels before adding more, personalize per channel (don't copy-paste the same message), stagger touchpoints to avoid overwhelming prospects

### Unified inbox
- **What it is**: A single inbox that aggregates replies from all outreach channels with AI-powered sentiment categorization
- **Key features**: View and respond to replies across all channels in one place, AI auto-categorizes sentiment (positive, negative, neutral, interested), filter by channel, campaign, or sentiment
- **Best practices**: Check the inbox daily, prioritize positive-sentiment replies, respond within 1 hour for best conversion rates

### Brand / social monitoring
- **What it is**: Tracks brand mentions across social media platforms, news sites, and forums in real time
- **Key features**: Monitor your brand, competitors, or industry keywords across social platforms, news, and forums. Get alerts for new mentions.
- **Best practices**: Set up monitoring for your brand name, product names, and top 2-3 competitors. Review mention sentiment weekly.

### AI Visibility Monitoring
- **What it is**: Tracks how and when your brand is mentioned in AI model responses — ChatGPT, Claude, Perplexity, Gemini
- **Key concepts**: Monitors what AI models say about your brand when users ask relevant questions. Tracks mention frequency, sentiment, and positioning relative to competitors.
- **Important**: Accuracy depends on query design — LLMs produce different answers depending on how the question is phrased. Test multiple query variations for reliable tracking.
- **Best practices**: Track 5-10 key queries your buyers would ask AI models, monitor weekly, compare your visibility against competitors

### Lead discovery
- **What it is**: Access to a 700M+ contact database with AI-powered enrichment for finding and qualifying prospects
- **Key features**: Search by industry, company size, title, location, and more. AI enrichment adds verified emails, phone numbers, and social profiles.
- **Plan limits**: Starter = 1K verified leads/month, Pro = 10K verified leads/month. These limits can exhaust quickly at high volume — plan your searches carefully.
- **Best practices**: Use tight filters to avoid burning through lead credits on low-quality matches, verify leads before adding to outreach sequences

### Social listening & buyer intent
- **What it is**: AI-identified purchase readiness signals from social media activity and keyword tracking
- **Key features**: Track keyword signals across social platforms. Starter = 10K keyword signals/month, Pro = 50K signals/month. Identify prospects showing buying intent.
- **Best practices**: Focus on high-intent keywords (competitor mentions, pain-point phrases, purchase-related terms), act on signals within 24-48 hours

### Email warmup
- **What it is**: Automated email warmup included in all plans — no additional cost, unlimited warmup accounts
- **Key features**: Gradually increases send volume on new mailboxes to build sender reputation. Included at no extra cost on all plans.
- **Best practices**: Warm up new mailboxes for at least 2-3 weeks before launching outreach. Don't skip warmup even if you have an established domain — new mailboxes need it.

### Artemis AI agent
- **What it is**: Conversational AI agent and MCP layer for executing GTM workflows through natural language commands
- **Key concepts**: "Artemis" = BrandJet's AI agent that controls the platform via conversation. Can execute multi-step workflows, set up sequences, and manage campaigns through natural language.
- **AI Agents**: Autonomous responders that can reply to social mentions and messages across channels without manual intervention
- **Important**: Artemis and the MCP layer are newer features — documentation may be limited. Start with simple workflows and build complexity gradually.

### Website analytics
- **What it is**: Built-in website visitor analytics to track traffic and engagement alongside outreach performance
- **Key features**: Track visitors, page views, and engagement metrics without needing a separate analytics tool

### Team management
- **What it is**: Role-based access controls for team members
- **Key features**: Invite team members, assign roles, control access to campaigns, leads, and settings

### Integrations
- **Native integrations**: Slack (notifications), HubSpot (CRM sync), Attio (CRM sync), Reddit (monitoring), YouTube (monitoring)
- **Webhooks**: Custom webhooks available for event-driven automation
- **No public API**: BrandJet does not have a documented public API. Integration is webhook-based — push events to your systems, but you cannot pull data programmatically.

### Pricing reference
- **Starter**: $60/month — 1K verified leads/month, 10K keyword signals, 1 social account included
- **Pro**: $200/month — 10K verified leads/month, 50K keyword signals, unlimited competitor tracking, priority support
- **Annual billing**: Saves 20%
- **Additional social accounts**: $17-20/month each beyond the included account
- **Free trial**: 7 days, no credit card required
- **AppSumo**: Lifetime deal available on AppSumo

### BrandJet data model

Core entities — understand these to navigate the platform:

| Entity | What it represents | Key relationships |
|---|---|---|
| **Sequence** | A multi-channel outreach workflow | Has Steps across channels, has Leads |
| **Lead** | A contact in the database | Belongs to Sequences, has Activity |
| **Step** | A touchpoint in a sequence (email, LinkedIn, etc.) | Belongs to a Sequence, targets a channel |
| **Inbox** | Unified reply aggregator | Collects replies from all channels |
| **Monitor** | A brand/keyword tracking configuration | Tracks mentions across platforms |
| **AI Agent** | An autonomous responder | Linked to channels, replies to mentions |

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in BrandJet
2. **Configuration recommendations** — specific settings to change, with navigation paths where known
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For integration questions** — note that BrandJet uses webhooks, not a public API. Design integrations around push events.

## Gotchas

- **No public API.** BrandJet integrates through webhooks only. You cannot pull data programmatically via REST API. Design automations around webhook push events to your systems.
- **Lead limits burn fast.** Starter gives 1K and Pro gives 10K verified leads per month. Broad, unfiltered searches can exhaust credits quickly. Always use tight filters and plan monthly usage.
- **LinkedIn automation requires gradual ramp-up.** New LinkedIn accounts sending too many connection requests or messages risk restrictions. Start with 10-15 actions/day and increase slowly over 2-3 weeks.
- **AI Visibility Monitoring accuracy varies.** LLMs give different answers depending on prompt phrasing, timing, and model version. Don't rely on a single query — test multiple variations and track trends over time, not individual responses.
- **Additional social accounts cost extra.** Only 1 social account is included on Starter. Each additional account is $17-20/month. Budget for this if you plan multi-platform monitoring.
- **Artemis MCP is new.** Documentation may be limited and features may change. Start with simple workflows before attempting complex multi-step automations.
- **The feature set is large.** New users can feel overwhelmed. Start with one module (outreach or monitoring) and expand once comfortable. Don't try to configure everything at once.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-cadence` — Design multi-channel outbound cadences (platform-agnostic strategy that works with BrandJet sequences)
- `/sales-deliverability` — Cross-platform email deliverability — SPF/DKIM/DMARC, warmup, inbox placement
- `/sales-social-listening` — Social listening strategy across platforms
- `/sales-enrich` — Enrich contacts with emails/phones before importing
- `/sales-ai-visibility` — AI visibility monitoring across LLMs (platform-agnostic strategy)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up multi-channel outreach
**User says**: "How do I create a sequence in BrandJet that uses email and LinkedIn?"
**Skill does**:
1. Walks through the visual workflow builder to create a new multi-channel sequence
2. Explains how to add email and LinkedIn steps with appropriate delays between touchpoints
3. Advises on LinkedIn ramp-up for new accounts to avoid restrictions
4. Recommends personalizing messaging per channel rather than using identical copy
**Result**: User has a multi-channel sequence configured with email and LinkedIn touchpoints and understands safe LinkedIn automation practices

### Example 2: Brand monitoring in AI models
**User says**: "I want to track whether ChatGPT and Claude mention my brand when users ask about our category"
**Skill does**:
1. Explains the AI Visibility Monitoring module and how it tracks mentions across ChatGPT, Claude, Perplexity, and Gemini
2. Guides setup of monitoring queries based on category-relevant questions buyers would ask
3. Warns that LLM responses vary by prompt phrasing — recommends testing multiple query variations
4. Suggests tracking competitors alongside their brand for relative positioning
**Result**: User has AI visibility monitoring configured with multiple query variations and understands the limitations of LLM response consistency

### Example 3: Managing lead credits efficiently
**User says**: "I'm on the Starter plan and already used half my leads this month. How do I make them last?"
**Skill does**:
1. Explains the 1K/month verified lead limit on Starter
2. Recommends tightening search filters (industry, company size, title) to reduce low-quality matches
3. Suggests qualifying leads with social listening signals before pulling verified contact info
4. Discusses upgrading to Pro (10K/month) if volume needs consistently exceed Starter limits
**Result**: User has a strategy for conserving lead credits and knows when upgrading makes sense

## Troubleshooting

### Overwhelmed by features
**Symptom**: New user unsure where to start — too many modules and settings
**Cause**: BrandJet combines outreach, monitoring, lead discovery, and AI agents in one platform
**Solution**: Pick one primary use case to start. For outreach-first users: set up email warmup, then create a single-channel email sequence, then expand to multi-channel. For monitoring-first users: configure brand monitoring, then add AI visibility tracking. Add modules one at a time.

### LinkedIn account restricted after automation
**Symptom**: LinkedIn shows warnings or temporarily restricts the account after starting BrandJet outreach
**Cause**: Too many automated actions too quickly on a new or low-activity LinkedIn account
**Solution**: Reduce daily LinkedIn actions to 10-15 per day. Warm up gradually over 2-3 weeks. Ensure the LinkedIn profile is complete and has regular organic activity. Pause automation until restrictions are lifted.

### Lead credits exhausted mid-month
**Symptom**: Ran out of verified leads before the billing cycle resets
**Cause**: Broad search filters pulling too many unqualified contacts, or high-volume prospecting on the Starter plan
**Solution**: Review search history and tighten filters for remaining campaigns. Use social listening signals to pre-qualify before pulling verified contact data. Consider upgrading to Pro for 10K leads/month if this is a recurring issue. Credits reset at the start of the next billing cycle.
