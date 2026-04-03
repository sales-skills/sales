# Platform-Specific Lead Scoring Guide

Detailed per-platform scoring setup — configuration, automation triggers, scoring rules, and best practices.

## Table of contents

- [In GetResponse](#in-getresponse)
- [In Kit](#in-kit)
- [In Clearbit](#in-clearbit)
- [In Clay](#in-clay)
- [In RB2B](#in-rb2b)
- [In 6sense](#in-6sense)
- [In ActiveCampaign](#in-activecampaign)

## In GetResponse
- **Contact scoring** (Marketer plan+ required): Assign points based on email engagement (opens, clicks), page visits (requires tracking snippet), purchases, tag additions, and custom field values. Score thresholds trigger automation actions.
- **Scoring rules**: Configure in Settings > Contact Scoring. Define point values for each action (e.g., +10 for open, +20 for click, +50 for purchase, -10 for 30-day inactivity). Rules recalculate periodically.
- **Automation triggers**: Use score changes as triggers in visual automation workflows — when score crosses a threshold, send a sales notification, add to a high-value segment, or trigger a targeted sequence.
- **Segmentation by score**: Create dynamic segments filtering by score range (e.g., "Hot leads: score > 50"). Use for targeted newsletters or automation entry.
- **Limitation**: Scoring is not available on Free or Starter plans. No built-in decay mechanism — build decay into automation workflows with scheduled score reductions.
- **Best practice**: Start with two dimensions — engagement scoring (opens, clicks, page visits) and e-commerce scoring (purchases, cart events). Use tag-based manual scoring as a workaround on Starter plan.

## In Kit
- **Engagement scoring** (Pro plan only, $66/mo): Kit assigns engagement scores to subscribers based on open/click activity. Not a full lead scoring system — more of an engagement health indicator.
- **No custom scoring rules**: Unlike ActiveCampaign or GetResponse, you can't define custom point values. Kit's scoring is automatic and based on email engagement only.
- **Segmentation by engagement**: Use engagement data to create segments (e.g., "engaged in last 30 days", "cold subscribers"). Use for targeted sends, list hygiene, and re-engagement campaigns.
- **Tag-based manual scoring**: On any plan, use Visual Automations to apply tags based on behavior (link clicked, form submitted, product purchased). Create segments combining tags as a DIY scoring workaround.
- **Best practice**: Use Kit's built-in engagement scoring for list hygiene (suppress cold subscribers). For actual lead scoring with firmographic + behavioral dimensions, export Kit subscriber data to your CRM or use a dedicated MAP (ActiveCampaign, HubSpot) with Kit as the email layer.

## In Clearbit
- **Enrichment as scoring fuel**: Clearbit enrichment provides the data dimensions needed for scoring — employee count, revenue, industry, tech stack, role, seniority, and location. These map directly to demographic and firmographic scoring attributes.
- **Real-time scoring on form submission**: Enrich leads in real time on form submission so you can score instantly before the lead hits your CRM. This enables immediate routing and follow-up for high-score leads.
- **Company type filtering**: Company type data (private, public, nonprofit) helps filter out non-buyers early. Subtract points for company types outside your ICP (e.g., -15 for nonprofit if you only sell to commercial companies).
- **Technographic scoring**: Tech stack data enables technographic scoring — score higher if a lead's company uses a competitor's tool (displacement opportunity) or complementary technology (integration fit). Example: +10 if they use a competing product, +5 if they use a tool you integrate with.
- **Behavioral scoring with Reveal**: Reveal identifies anonymous website visitors from target accounts, adding behavioral scoring signals (website visits from target accounts) before a lead even fills out a form. Feed Reveal data into your scoring model as an intent signal.
- **Combined person + company enrichment**: The combined endpoint returns both person and company data in one call, giving you demographic (role, seniority) and firmographic (employee count, revenue, industry) signals together for efficient scoring.
- **Breeze Intelligence in HubSpot**: If you use HubSpot, Breeze Intelligence (Clearbit's HubSpot-native product) auto-enriches contacts and companies, feeding directly into HubSpot's native lead scoring workflows without manual data piping.

## In Clay
- **Enrichment-powered scoring**: Use Clay's 150+ provider waterfall to enrich every lead with firmographic, technographic, and intent data — then score based on enriched attributes (company size, revenue, tech stack, job title seniority).
- **Claygent for custom scoring signals**: AI research agents can gather non-standard signals — check if a company uses a competitor's product, verify budget authority from org charts, assess tech stack fit.
- **Signal-based scoring**: Layer Clay Signals (job changes, funding, website visits) into scoring models as real-time triggers.
- **Workflow automation**: Build scoring logic directly in Clay tables using Sculptor — conditional formulas, weighted scoring, tier assignment. Push scores to CRM via bidirectional sync (Growth plan required).
- **Best for**: Teams wanting to build custom scoring models with rich, multi-source data without requiring a dedicated scoring platform.

## In RB2B
- **Person-level website visit signals**: RB2B identifies the individual visiting your site (US only), giving you person-specific behavioral signals — not just "someone from Company X visited." Use as a high-value behavioral scoring input: +15 for person-level identification on pricing page, +10 for other Hot Pages.
- **Hot Pages as scoring triggers**: Configure key pages (pricing, demo, case studies) as Hot Pages in RB2B. When an identified visitor hits a Hot Page, add behavioral points to their lead score. More specific than generic "website visit" signals.
- **Hot Leads for ICP pre-filtering**: RB2B's Hot Leads feature filters visitors by firmographic/demographic criteria before they even enter your scoring model. Use this as a pre-qualification step to only score visitors who match your ICP.
- **Real-time scoring**: RB2B pushes visitor data to CRM in real-time via webhooks or native integrations. Trigger immediate score recalculation when a high-value visitor is identified — no batch delay.
- **Company-level fallback**: For non-US traffic and unmatched visitors, RB2B provides company-level identification (via Demandbase). Score company-level visits lower than person-level visits (e.g., +5 for company-level vs +15 for person-level).

## In 6sense
- **Predictive scoring built-in**: 6sense's AI generates profile fit scores and buying stage predictions automatically — no manual scoring model needed. The AI analyzes firmographic fit, intent signals, and engagement patterns to classify accounts into buying stages (Awareness → Purchase) updated daily.
- **6QA (6sense Qualified Accounts)**: Customizable qualification criteria combining AI-driven intent + fit scores. 6QAs replace manual MQL/SQL definitions — accounts are flagged as qualified based on combined signal strength. Customize the 6QA thresholds to match your actual buying process.
- **Intent as a scoring dimension**: Signalverse intent data provides the behavioral scoring dimension — which topics are being researched, signal trend (increasing/stable/decreasing), and recency. Feed these into your scoring model as the highest-weight behavioral signals.
- **Profile fit as demographic/firmographic scoring**: 6sense automatically scores ICP fit based on firmographic and technographic attributes configured in your platform. This replaces manual demographic/firmographic scoring dimensions.
- **CRM integration for scoring**: 6sense scores sync to Salesforce/HubSpot — use them as inputs to CRM-native lead scoring workflows, or use 6sense scores directly as your scoring model (replacing CRM-built models).
- **Pricing note**: Predictive scoring requires a paid plan ($50K+/year). Free plan (50 credits/mo) does NOT include predictive features.

## In ActiveCampaign
- **Contact scoring**: Assign points based on email engagement (opens, clicks, replies), site visits, form submissions, tag additions, list membership, custom field values, and event tracking. Create multiple scoring models for different purposes (e.g., engagement score vs. fit score). Available on Plus+ plans.
- **Deal scoring**: Separate scoring for deals in your CRM pipeline — score based on deal value, stage, age, activity, and custom fields. Win probability predictions available on Pro+ plans.
- **Automation-based scoring**: Use automations to add/subtract points when contacts take actions. Example: +10 for visiting pricing page, +5 for opening email, -15 for no engagement in 30 days. Automations can also trigger when scores cross thresholds (e.g., score > 50 → notify sales, add to "hot leads" list).
- **Score decay**: Build decay into automations — schedule periodic score reductions for contacts who haven't engaged recently. No built-in automatic decay, so you must create "subtract points" automations on time-based triggers.
- **Threshold actions**: When a contact crosses a score threshold, automations can: send an internal notification to sales, add the contact to a CRM pipeline as a deal, move them to a new list, or trigger a targeted email sequence.
- **Segment by score**: Create segments based on score ranges (e.g., "Hot leads: score > 80", "Warm: 40-80", "Cold: < 40"). Use these for targeted campaigns and CRM prioritization.
- **Best practice**: Start with two scoring models — one for engagement (behavioral) and one for fit (demographic/firmographic). Use engagement score for sales follow-up triggers and fit score for segmentation. Review score distributions monthly — if most contacts cluster at similar scores, your model needs more differentiation.
