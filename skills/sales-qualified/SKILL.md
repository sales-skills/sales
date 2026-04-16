---
name: sales-qualified
description: "Qualified platform help — Piper AI SDR Agent, conversational marketing, real-time website chat, meeting booking, buyer intent Signals, Salesforce-native routing. Use when Piper not engaging the right visitors, chat widget not converting to pipeline, routing rules sending leads to the wrong rep, Qualified Signals not surfacing high-intent accounts, meetings not booking through Piper, Salesforce sync issues with Qualified, or setting up Piper Conversations, Email, Meetings, or Offers. Do NOT use for outbound cold email sequences (use /sales-cadence) or non-Salesforce CRM setup (use /sales-attio or /sales-integration)."
argument-hint: "[describe what you need help with in Qualified]"
license: MIT
version: 1.0.0
tags: [sales, conversational-marketing, ai-sdr, platform]
---

# Qualified Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

**What do you need help with?**
- a) Piper AI SDR setup — configuring conversations, email, meetings, or offers
- b) Routing & alerts — making sure the right rep gets the right visitor
- c) Signals — understanding buyer intent data and account prioritization
- d) Salesforce integration — sync, field mapping, managed package
- e) Chat widget — installation, branding, proactive triggers
- f) Analytics & reporting — measuring pipeline impact, Reporting API
- g) Migration — moving from Drift, Intercom, or another chat tool
- h) Something else

**What's your Salesforce setup?**
- a) Salesforce Sales Cloud
- b) Salesforce + Pardot/MCAE
- c) Salesforce + HubSpot Marketing
- d) Salesforce + Marketo
- e) Not on Salesforce yet (Qualified requires Salesforce)

**What Qualified modules are you using?**
- a) Piper Conversations (chat, voice, video)
- b) Piper Email
- c) Piper Meetings
- d) Piper Offers
- e) Piper for Slack
- f) Signals (buyer intent)
- g) All / not sure
- h) Haven't started yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Outbound sequences / cold email | Run: `/sales-cadence {user's question}` |
| Email deliverability / warmup | Run: `/sales-deliverability {user's question}` |
| Lead scoring model design | Run: `/sales-lead-score {user's question}` |
| CRM data quality / dedup | Run: `/sales-data-hygiene {user's question}` |
| Meeting scheduling strategy (not Qualified-specific) | Run: `/sales-meeting-scheduler {user's question}` |
| Live chat strategy (not Qualified-specific) | Run: `/sales-live-chat {user's question}` |
| Chatbot flow design (not Qualified-specific) | Run: `/sales-chatbot {user's question}` |
| Buying signal interpretation (not Qualified-specific) | Run: `/sales-intent {user's question}` |

If the question is Qualified-specific, continue to Step 3.

## Step 3 — Qualified platform reference

**Read `references/platform-guide.md`** for the full platform reference — Piper modules, Signals, routing, Salesforce integration, pricing, implementation, and data model.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

1. **Identify the root cause** — is this a configuration issue, a strategy issue, or a Salesforce sync issue?
2. **Provide specific steps** — Qualified's UI changes, so describe the workflow (what to configure) not exact button locations
3. **Reference Salesforce objects** — Qualified creates/updates Lead, Contact, Account records. Always clarify which object the user should check.
4. **Suggest measurement** — how will they know the change worked? Which Qualified report or Salesforce dashboard to check.

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Salesforce is required.** Qualified does not work with HubSpot, Pipedrive, or any other CRM as the primary system. If the user isn't on Salesforce, redirect to `/sales-live-chat` or `/sales-chatbot` for alternatives.
- **Piper's brand voice needs training.** Out of the box, Piper gives generic responses. Upload product docs, FAQs, and brand guidelines to improve quality. Budget 2-4 weeks for tuning before expecting production-quality conversations.
- **Aggressive qualification filters kill pipeline.** Default scoring can disqualify leads a human SDR would nurture. Start with loose criteria and tighten over time based on data, not assumptions.
- **Implementation is not plug-and-play.** Expect 4-8 weeks for full deployment including Salesforce package install, field mapping, routing rules, Piper training, and testing. The Qualified CS team helps but don't underestimate the Salesforce admin time required.
- **Pricing is enterprise-only.** No public pricing — expect $42K-$100K+/year depending on traffic, seats, and modules. No free tier or self-serve plan.
- **No outbound.** Qualified handles inbound only. For outbound sequences, cold email, or LinkedIn automation, use Salesloft, Apollo, or other outbound tools alongside Qualified.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-live-chat` — Live chat strategy across all platforms (widget setup, chatbot flows, agent routing)
- `/sales-chatbot` — Chatbot marketing and conversational automation (WhatsApp, Telegram, Facebook, website)
- `/sales-meeting-scheduler` — Meeting scheduling strategy (Calendly, Chili Piper, booking page optimization)
- `/sales-intent` — Buying signal interpretation and account prioritization (6sense, ZoomInfo, Bombora)
- `/sales-lead-routing` — Lead routing and assignment rules (round-robin, territory, score-based)
- `/sales-salesloft` — Salesloft platform help (Drift is now part of Salesloft)
- `/sales-6sense` — 6sense platform help (integrates with Qualified for ABM intent data)
- `/sales-zoominfo` — ZoomInfo platform help (visitor identification, Chat)
- `/sales-integration` — Connect Qualified with other tools via webhooks, Zapier, native integrations
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Piper not engaging the right visitors
**User says**: "Piper is chatting with everyone who visits our site but our AEs are getting flooded with unqualified conversations"
**Skill does**: Reviews Qualified's segment configuration, recommends restricting Piper to high-intent pages (pricing, demo, comparison), configures visitor segments based on Salesforce account data (company size, industry, existing account status), sets up tiered engagement (Piper handles qualification, only routes matched accounts to human reps)
**Result**: Piper engages selectively, AEs only get conversations from target accounts on high-intent pages

### Example 2: Salesforce sync not creating leads
**User says**: "Visitors chat with Piper but no leads are showing up in Salesforce"
**Skill does**: Checks Qualified managed package installation, verifies API user permissions, reviews field mapping configuration, checks if Lead creation is enabled vs Contact-only mode, tests with a known visitor and traces through both systems
**Result**: Salesforce sync working with proper field mapping and Lead/Contact creation rules

### Example 3: Setting up Qualified Signals for account prioritization
**User says**: "I have Qualified Signals but I don't know how to use the intent data to prioritize which accounts to target"
**Skill does**: Explains Qualified Signals data (research topics, website engagement, third-party intent via Bombora), recommends combining Signals with Salesforce account data (revenue, industry, existing opportunity status), creates a tiered prioritization framework, sets up Slack alerts for high-intent target accounts
**Result**: Signal-based account prioritization with automated alerts for sales team

## Troubleshooting

### Piper giving generic or robotic responses
**Symptom**: Visitors complain that Piper sounds like a generic chatbot, not a knowledgeable SDR
**Cause**: Piper hasn't been trained on product-specific content, or persona settings are too broad
**Solution**: Upload product documentation, FAQ pages, case studies, and competitive positioning to Piper's knowledge base. Configure persona settings with specific brand voice guidelines. Test with real visitor scenarios and iterate on responses. Budget 2-4 weeks of tuning.

### Chat widget not appearing on certain pages
**Symptom**: Qualified widget shows on some pages but not others
**Cause**: JavaScript snippet conditional rules, content security policy, or page-specific display rules in Qualified
**Solution**: Check Qualified's page targeting rules — verify URL patterns match the pages where you want the widget. Check browser console for CSP errors blocking js.qualified.com. Verify the snippet is loaded on all pages (not just specific templates).

### Routing sending leads to wrong reps
**Symptom**: Website visitors being connected to the wrong sales rep or no rep at all
**Cause**: Routing rules misconfigured, Salesforce owner not syncing, or segment criteria not matching visitor data
**Solution**: Review routing rules in Qualified — check the priority order (account owner match → territory → round-robin fallback). Verify Salesforce account/lead owner data is syncing correctly. Test with a known account and trace the routing decision. Check that rep availability settings match business hours.
