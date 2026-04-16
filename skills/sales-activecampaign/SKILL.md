---
name: sales-activecampaign
description: "ActiveCampaign platform help — marketing automation and CRM for email, SMS, WhatsApp, landing pages, and sales pipelines. Use when automations aren't triggering correctly, CRM pipeline stages need restructuring, lead scores don't reflect real engagement, landing pages or forms aren't converting, email campaigns have low open rates or broken conditional content, or API calls to ActiveCampaign aren't working. Do NOT use for general email marketing strategy (use /sales-email-marketing), cross-platform email deliverability (use /sales-deliverability), email tracking strategy (use /sales-email-tracking), or lead scoring strategy (use /sales-lead-score)."
argument-hint: "[describe what you need help with in ActiveCampaign]"
license: MIT
version: 1.0.0
tags: [sales, marketing-automation, email-marketing, crm, platform]
github: "https://github.com/ActiveCampaign"
---
# ActiveCampaign Platform Help

Help the user with ActiveCampaign platform questions — from Automations and Email Marketing through CRM/Deals/Pipelines, Lead Scoring, SMS, WhatsApp, Landing Pages, Forms, Site Tracking, Transactional Email, Segmentation, Reporting, and AI/Active Intelligence. ActiveCampaign is an all-in-one marketing automation and CRM platform, founded in 2003 by Jason VandeBoom. Chicago-based, 180K+ businesses, 700+ employees. Offers email, SMS, WhatsApp, landing pages, lead scoring, deals/pipelines, and 900+ integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of ActiveCampaign do you need help with?**
   - A) Automations — visual workflow builder (triggers, branching, goals, split actions, wait steps)
   - B) Email Marketing — campaigns (broadcasts), A/B testing, conditional content, predictive sending
   - C) CRM / Deals / Pipelines — customizable pipelines and stages, deal tracking, tasks, win probability
   - D) Lead Scoring — AI-powered contact and deal scoring, multiple scoring models
   - E) SMS — automated SMS in workflows, SMS campaigns, two-way SMS
   - F) WhatsApp — WhatsApp messaging channel in automations
   - G) Landing Pages — 56 templates, drag-and-drop builder, form integration, custom domains
   - H) Forms — inline, floating bar, modal, floating box, conditional fields
   - I) Site Tracking — track website visits per contact, trigger automations based on site behavior
   - J) Transactional Email — Postmark-powered transactional email add-on
   - K) Segmentation — tag-based, list-based, engagement-based, behavioral, deal-based
   - L) Reporting — campaign analytics, automation reports, deal reports, attribution, custom reports
   - M) AI / Active Intelligence — predictive content, predictive sending, autonomous marketing workflows
   - N) Conversations — live chat and chatbot (legacy, being sunset)
   - O) API / Integrations — REST API, webhooks, 900+ integrations
   - P) Account / Billing — plans, pricing, contact-based billing
   - Q) Something else — describe it

2. **What's your role?**
   - A) Small business owner / solopreneur
   - B) Email / lifecycle marketer
   - C) Developer / engineer
   - D) Agency / freelancer
   - E) Sales / revenue operations
   - F) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- General email marketing strategy / best practices -> `/sales-email-marketing`
- Cross-platform email deliverability (not ActiveCampaign-specific) -> `/sales-deliverability`
- Email open/click tracking strategy -> `/sales-email-tracking`
- Lead scoring strategy / models (not ActiveCampaign-specific) -> `/sales-lead-score`
- Connecting ActiveCampaign to other tools via middleware -> `/sales-integration`
- Klaviyo-specific questions -> `/sales-klaviyo`
- Customer.io-specific questions -> `/sales-customerio`
- Mailchimp-specific questions -> `/sales-mailchimp`
- Postmark-specific questions -> `/sales-postmark`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — ActiveCampaign platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Building an automation workflow with lead scoring**:
   1. Navigate to Automations > Create an Automation > Start from Scratch (or choose a template)
   2. Set the trigger — e.g., "Submits a Form" for a lead capture form, or "Tag is Added" for a specific lead source tag
   3. Add an action to adjust the contact's lead score: Contacts > Adjust Score > select your scoring model and add points (e.g., +10 for form submission)
   4. Add a wait step: "Wait for conditions" > wait until the contact's lead score reaches your threshold (e.g., score >= 50)
   5. Add an if/else condition: check the contact's score — if score >= 50, route to the "sales-ready" path; otherwise, continue nurturing
   6. On the sales-ready path: create a deal in your pipeline (Actions > CRM > Add a Deal), assign it to a sales rep, send a notification email to the rep
   7. On the nurture path: send a series of educational emails with wait steps between them, adding lead score points for each email opened (+5) or link clicked (+10)
   8. Add a goal: "Deal is Won" — contacts who purchase skip ahead to the end of the automation
   9. Monitor: check automation reports for contacts entered, goal completion rate, and average time to goal

2. **Setting up a CRM pipeline with sales automation**:
   1. Navigate to Deals > Pipelines > Add Pipeline
   2. Define your stages — e.g., "New Lead", "Qualified", "Proposal Sent", "Negotiation", "Won", "Lost"
   3. Set stage widths (win probability) — each stage represents a percentage likelihood of closing (e.g., New Lead = 10%, Qualified = 30%, Proposal = 60%)
   4. Create custom deal fields for your business: deal source, product interest, contract length, etc.
   5. Build automations triggered by deal events:
      - "Deal Stage Changes to Qualified" > send a personalized email to the contact, create a task for the sales rep to schedule a call
      - "Deal Stage Changes to Proposal Sent" > wait 3 days > if deal is still in "Proposal Sent" stage, send a follow-up email and notify the rep
      - "Deal is Won" > add a "Customer" tag, move to onboarding automation, send a welcome email
      - "Deal is Lost" > add a "Lost Deal" tag, wait 30 days, send a re-engagement email
   6. Set up deal task templates: standard tasks for each stage (e.g., "Schedule discovery call" when entering Qualified stage)
   7. Monitor: use deal reports to track pipeline value, win/loss rates, and average deal duration per stage

3. **Creating a conditional content email campaign**:
   1. Navigate to Campaigns > Create a Campaign > Standard
   2. Select your target list or segment
   3. In the email designer, add a content block and click "Make Conditional"
   4. Define the condition: e.g., "Contact tag contains VIP" > show a VIP-exclusive offer; otherwise, show a standard offer
   5. Add multiple conditional blocks in the same email — e.g., different product recommendations based on custom fields (industry, product interest, location)
   6. Use dynamic personalization tags: `%FIRSTNAME%`, `%DEAL_VALUE%`, or any custom field with fallback values for missing data
   7. Set up A/B testing: test up to 5 subject line variants — ActiveCampaign sends each variant to a percentage of your list, then sends the winner to the rest
   8. Enable predictive sending (Pro+): let ActiveCampaign determine the optimal send time for each individual contact
   9. Review and send: preview conditional content for different contacts, verify personalization renders correctly, and schedule or send

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

1. **CRM is a PAID ADD-ON — "Pipelines" ($68/mo) or "Sales Engagement" (Pro+). Don't assume CRM features are included in base plans.** The Starter and Plus plans do not include CRM/deals/pipelines by default. You must purchase the "Pipelines" add-on ($68/mo, B2C-oriented) or upgrade to Pro with the "Sales Engagement" bundle (B2B-focused). If your user mentions deals or pipelines, verify they have the CRM add-on before advising on CRM features.
2. **Send limits are multipliers (10x/12x/15x contact count), NOT unlimited.** A 5K-contact Plus plan gets 50K emails/month. Exceeding the limit triggers overage charges. Unlike competitors that offer unlimited sends, ActiveCampaign caps email volume relative to your contact count. Calculate your monthly send volume before choosing a plan.
3. **All contacts count toward billing (Nov 2025 change) — unsubscribed, bounced, and unconfirmed contacts all count for new users.** This is a significant change from the previous model. Clean your lists aggressively by archiving or deleting contacts who have unsubscribed, bounced repeatedly, or never confirmed. Failing to clean lists means you pay for contacts you cannot email.
4. **Transactional email is a SEPARATE Postmark add-on — not included in any plan.** Do not confuse marketing emails (sent via ActiveCampaign automations/campaigns) with transactional emails (order confirmations, password resets, etc.). Transactional email requires a separate Postmark subscription. If a user needs transactional email, direct them to the Postmark add-on or `/sales-postmark`.
5. **API rate limit is only 5 req/sec — significantly lower than competitors (Klaviyo, Mailgun, etc.).** Batch operations carefully and implement retry logic with exponential backoff for HTTP 429 responses. For bulk imports or syncs, use ActiveCampaign's bulk import tools in the UI rather than hitting the API one contact at a time. Custom rate limits are available on request for Enterprise accounts.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Step 5 — Related skills

- `/sales-email-marketing` — Opt-in email marketing strategy across tools
- `/sales-deliverability` — Cross-platform email deliverability (SPF/DKIM/DMARC, warmup, inbox placement)
- `/sales-email-tracking` — Email engagement tracking strategy
- `/sales-lead-score` — Lead scoring models and strategy
- `/sales-integration` — Connect ActiveCampaign to CRM, e-commerce, or other tools
- `/sales-cadence` — Multi-touch sales cadence design and optimization
- `/sales-klaviyo` — Klaviyo platform help (primary ActiveCampaign competitor for e-commerce)
- `/sales-customerio` — Customer.io platform help (primary competitor for behavior-driven automation)
- `/sales-mailchimp` — Mailchimp platform help (primary competitor for email marketing)
- `/sales-postmark` — Postmark platform help (powers ActiveCampaign's transactional email)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Automation workflow with lead scoring
**User says**: "I want to build an automation that nurtures leads and hands them off to sales when they're ready. How do I use lead scoring in ActiveCampaign?"
**Skill does**:
1. Sets up a lead scoring model with point values: form submission (+10), email open (+5), link click (+10), pricing page visit (+20), webinar attendance (+15)
2. Creates an automation triggered by form submission — adds the contact to a nurture sequence and starts accumulating score
3. Sends a 4-email nurture series with wait steps (3 days between emails), each email building on the last: intro/welcome, educational content, case study, product demo invite
4. After each email interaction (open, click), the automation adjusts the lead score via score-adjustment actions
5. Adds a "Wait for conditions" step: wait until lead score >= 50 — contacts who engage heavily reach this threshold faster and skip remaining nurture emails
6. On the sales-ready path: creates a deal in the sales pipeline, assigns it to a rep based on round-robin or territory rules, sends the rep a notification with the contact's score breakdown and engagement history
7. Sets a goal of "Deal is Won" so contacts who convert early exit the automation cleanly
**Result**: User has a complete lead nurturing and scoring automation that qualifies leads based on engagement, automatically creates deals for sales-ready contacts, and tracks the entire funnel from first touch to closed deal

### Example 2: CRM pipeline setup with deal automation
**User says**: "We're a B2B SaaS company and want to set up our sales pipeline in ActiveCampaign. Can you help me configure the stages and automate follow-ups?"
**Skill does**:
1. Confirms the user has the CRM add-on (Pipelines or Sales Engagement) — if not, explains the add-on options and pricing ($68/mo for Pipelines, Pro+ for Sales Engagement)
2. Creates a pipeline with stages mapped to their B2B SaaS sales process: "Inbound Lead" (10%), "Discovery Call Scheduled" (20%), "Discovery Completed" (35%), "Proposal/Demo" (55%), "Negotiation" (75%), "Closed Won" (100%), "Closed Lost" (0%)
3. Sets up custom deal fields: Annual Contract Value, Product Tier (Starter/Pro/Enterprise), Decision Maker Name, Expected Start Date, Competitor Mentioned
4. Builds stage-change automations: when a deal moves to "Discovery Call Scheduled", create a task for the rep to send a pre-call questionnaire and add a calendar reminder; when a deal enters "Proposal/Demo", send the contact a personalized case study email based on their industry (using conditional content)
5. Creates a stale-deal automation: if a deal has been in any stage for more than 14 days without activity, notify the deal owner and send the contact a re-engagement email
6. Configures a "Closed Won" automation: tag the contact as "Customer", remove from marketing nurture automations, trigger an onboarding email sequence, notify the customer success team
7. Sets up a "Closed Lost" automation: tag with "Lost Deal" and the loss reason, wait 60 days, then enter a re-engagement nurture sequence
**Result**: User has a fully automated B2B SaaS sales pipeline with stage-based follow-ups, stale-deal alerts, and post-close workflows for both won and lost deals

### Example 3: Conditional content email campaign
**User says**: "I want to send a single email campaign but show different content to different segments — VIP customers should see an exclusive offer, and everyone else should see a standard promotion."
**Skill does**:
1. Creates a campaign targeting the full subscriber list (or a broad segment)
2. In the email designer, adds a conditional content block: condition = "Contact tag contains VIP" — shows a 30% exclusive VIP discount with personalized copy ("As one of our most valued customers...")
3. Adds the else branch: standard 15% promotion with general copy for non-VIP contacts
4. Adds a second conditional block for product recommendations: condition = custom field "Product Interest" equals "Software" shows software products; "Hardware" shows hardware products; default shows best-sellers
5. Inserts dynamic personalization: `%FIRSTNAME%` in the greeting (with fallback "there"), `%CITY%` in a location-relevant line (with fallback that omits the line)
6. Sets up A/B testing with 3 subject line variants: "Your exclusive deal inside", "Don't miss this, %FIRSTNAME%", and a curiosity-driven subject — test with 30% of the list, send winner to 70%
7. Enables predictive sending (Pro+) so each contact receives the email at their optimal engagement time
**Result**: User sends one campaign that dynamically personalizes content, offers, and product recommendations per contact — increasing relevance without creating multiple separate campaigns

## Troubleshooting

### Automation contacts stuck in a wait step and not progressing
**Symptom**: Contacts enter an automation but pile up at a "Wait" step and never move to the next action, even after the wait duration has passed or the wait condition appears to be met.
**Cause**: Most commonly, the wait condition is misconfigured — "Wait until conditions are met" steps require the condition to be checked against live contact data, and if the condition references a field or tag that is not being updated as expected, contacts wait indefinitely. Also, if the automation is set to "Once" entry and the contact previously completed it, they cannot re-enter.
**Solution**: Check the wait step configuration — click on the step and verify the condition logic. For "Wait until conditions" steps, confirm that the referenced field, tag, or score is actually being updated by another automation or manual process. Test by opening a stuck contact's profile, checking their current field values and tags, and comparing against the wait condition. If contacts should be able to re-enter, change the automation's entry setting from "Once" to "Multiple times." For time-based waits, verify the timezone setting matches your expectations.

### Lead scores not updating after contact engagement
**Symptom**: Contacts are opening emails and clicking links, but their lead scores remain at zero or do not increase as expected.
**Cause**: Lead scoring rules must be explicitly configured — ActiveCampaign does not automatically score contacts based on engagement unless you define the rules. Additionally, score adjustments within automations require an explicit "Adjust Score" action step; the scoring model's passive rules and automation-based adjustments are separate systems.
**Solution**: Navigate to Contacts > Scoring and verify your scoring model has rules defined for the engagement types you expect (email opens, clicks, site visits, form submissions). Check that each rule has the correct point value and conditions. If you are using automation-based scoring, verify that your automations include "Adjust Score" action steps at the appropriate points. Note that scoring model rules (passive) run automatically when conditions are met, while automation score adjustments only fire when a contact reaches that step in the automation. Use both for comprehensive scoring.

### Building WhatsApp/SMS cart recovery in external automation tools instead of natively
**Symptom**: User builds a complex multi-step Make or Zapier scenario with webhooks, HTTP modules, and conditional routers to orchestrate WhatsApp cart recovery from ActiveCampaign — e.g., webhook on tag addition, HTTP call to check tags, send WhatsApp template via API, parse button responses, implement delay loops.
**Cause**: They don't realize ActiveCampaign has native WhatsApp and SMS as automation action steps. You can trigger on tag addition, branch with if/else, add wait steps, and send WhatsApp templates all within a single ActiveCampaign automation — no external middleware needed for the core flow.
**Solution**: Build the flow inside ActiveCampaign's automation builder: create an automation triggered by "Tag Added: Abandoned Cart", add an if/else split checking for the "Buyer" tag, send a WhatsApp template message on the appropriate branch, add a wait step (e.g., 48 hours), and loop or exit based on conditions. Reserve Make/Zapier for actions ActiveCampaign can't do natively (updating external databases, triggering non-integrated services, custom reporting). For interactive WhatsApp buttons, use pre-approved WhatsApp message templates with quick-reply or call-to-action buttons configured in your WhatsApp Business account.

### Site tracking not recording visits for known contacts
**Symptom**: The site tracking script is installed on your website, but contact profiles show no page visit data, and site-visit-based automation triggers are not firing.
**Cause**: Site tracking requires the contact to be "identified" — ActiveCampaign associates site visits with a contact only after they click a link in an ActiveCampaign email (which appends a tracking parameter) or are identified via the JavaScript API. Anonymous visits are not attributed to contacts. Additionally, the site tracking code must be installed on every page you want to track.
**Solution**: Verify the site tracking code is installed correctly: check your website's HTML source for the ActiveCampaign tracking snippet (it should be in the `<head>` or before `</body>` on every page). Confirm your account ID in the snippet matches your ActiveCampaign account. To identify contacts, ensure your emails include tracked links (ActiveCampaign adds tracking parameters by default). For contacts who arrive via other channels (direct, organic search), use the JavaScript API to identify them after they submit a form: `vgo('setEmail', 'contact@example.com')`. Check a specific contact's profile to see if any page visits are recorded — if not, send yourself a test email, click a link, browse your site, and verify visits appear on your profile.
