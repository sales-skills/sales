---
name: sales-sproutsocial
description: "Sprout Social platform help — Publishing, Smart Inbox, Analytics, Social Listening (add-on), Influencer Marketing, Employee Advocacy, AI Assist, API, Salesforce/HubSpot/Zendesk integrations. Use when Sprout Social posts aren't publishing on schedule, Smart Inbox is overwhelming and hard to triage, analytics reports don't show the metrics you need, social listening queries return too much noise, influencer campaigns in Sprout lack visibility, employee advocacy adoption is low, AI Assist suggestions feel off, CRM sync keeps disconnecting, or you're deciding between Sprout Social and Hootsuite/Buffer/Agorapulse. Do NOT use for social listening strategy across tools (use /sales-social-listening), influencer marketing strategy (use /sales-influencer-marketing), social media management strategy (use /sales-social-media-management), or employee advocacy strategy (use /sales-employee-advocacy)."
argument-hint: "[describe what you need help with in Sprout Social]"
license: MIT
version: 1.0.0
tags: [sales, social-media-management, platform]
github: "https://github.com/sproutsocial"
---
# Sprout Social Platform Help

Helps the user configure and get the most from Sprout Social — publishing, engagement, analytics, social listening, influencer marketing, employee advocacy, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Publishing & scheduling content
   - B) Smart Inbox & engagement
   - C) Analytics & reporting
   - D) Social Listening (add-on)
   - E) Influencer Marketing module
   - F) Employee Advocacy module
   - G) AI Assist features
   - H) Integrations (Salesforce, HubSpot, Zendesk, Slack)
   - I) API access and setup
   - J) Account admin, billing, or user management
   - K) Something else — describe it

2. **Which Sprout plan are you on?**
   - A) Standard ($199/seat/mo)
   - B) Professional ($299/seat/mo)
   - C) Advanced ($399/seat/mo)
   - D) Enterprise (custom)
   - E) Free trial / evaluating
   - F) Not sure

3. **Which social networks are you managing?**
   - A) Instagram + Facebook
   - B) LinkedIn + X/Twitter
   - C) TikTok
   - D) Pinterest, Reddit, Threads, Bluesky, WhatsApp
   - E) All of the above
   - F) Other — describe

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a strategy skill, route:
- Social listening strategy across tools → `/sales-social-listening`
- Influencer marketing strategy across platforms → `/sales-influencer-marketing`
- Social media management tool comparison → `/sales-social-media-management`
- Employee advocacy strategy → `/sales-employee-advocacy`
- Email marketing → `/sales-email-marketing`
- CRM data sync strategy → `/sales-integration`

Otherwise, answer directly from the platform knowledge below.

## Step 3 — Sprout Social platform reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Publishing setup** — connect profiles, configure optimal send times, set up approval workflows, plan content calendar
2. **Inbox management** — configure Smart Views, set up tagging taxonomy, enable collision detection, create saved replies
3. **Analytics** — build custom reports, set up competitor tracking, configure tag-based reporting, export to stakeholders
4. **Social listening** — create listening topics, configure alerts, set up competitive monitoring
5. **Influencer campaigns** — discover creators, set up campaigns, track deliverables, measure ROI
6. **Employee advocacy** — curate content, onboard employees, configure gamification, measure reach
7. **API** — generate token, authenticate, query endpoints, handle pagination
8. **CRM integration** — connect Salesforce/HubSpot/Zendesk, configure data sync

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and pricing that may change.*

- **Listening is a costly add-on.** Social listening is not included in any standard plan. It starts around $999/month on top of your per-seat cost. Budget for this separately — it's not a "just turn it on" feature.
- **Per-seat pricing adds up fast.** Every user needs their own seat ($199-$399/mo). A 5-person team on Professional = $1,500/month before add-ons. Many features (approval workflows, chatbot, API) require Advanced ($399/seat).
- **HubSpot integration requires Advanced plan.** The HubSpot Service Hub integration is only available on Advanced ($399/seat). Professional plan users cannot connect to HubSpot.
- **API requires Advanced plan.** No API access on Standard or Professional. If you need programmatic access, budget for Advanced from the start.
- **Annual contracts auto-renew.** Sprout requires 30 days' written notice before renewal date to cancel. Missing the window locks you into another year. Set a calendar reminder 45 days before renewal.
- **Listening is social-focused, not media-focused.** Sprout Listening monitors social networks and web conversations. It does not cover print, broadcast, or comprehensive news monitoring like Meltwater or Brandwatch. If you need full media intelligence, use Sprout for social + Meltwater for news.
- **Profile limits on Standard.** Standard plan includes only 5 social profiles. If you manage more, you need Professional (unlimited).
- **Influencer Marketing and Employee Advocacy are separate add-ons.** Neither is included in base plans. Both require separate contracts on top of per-seat pricing.
- **Mobile app has limitations.** Many users report the mobile experience is less capable than desktop — limited scheduling, slower load times, and some features unavailable. Don't rely on mobile for complex workflows.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-social-media-management` — Social media management strategy across tools — scheduling, publishing, engagement, analytics, tool comparison
- `/sales-social-listening` — Social listening strategy — tool comparison, monitoring setup, sentiment, crisis detection
- `/sales-influencer-marketing` — Influencer marketing strategy — discovery, vetting, campaign tracking, ROI
- `/sales-employee-advocacy` — Employee advocacy strategy — tool selection, content curation, gamification, compliance
- `/sales-integration` — Connect Sprout Social to CRM, helpdesk, BI tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Set up Sprout Social for a multi-brand team
**User says**: "I manage social for 3 brands and need to set up Sprout for my team of 4 people"
**Skill does**:
1. Recommends Professional plan for unlimited profiles
2. Creates Profile Groups for each brand
3. Configures Smart Inbox views per brand
4. Sets up tagging taxonomy for cross-brand reporting
5. Configures approval workflows if Advanced
**Result**: Multi-brand Sprout setup with organized workflows

### Example 2: Connect Sprout to Salesforce
**User says**: "I want our support team to see social messages in Salesforce Service Cloud"
**Skill does**:
1. Confirms Advanced plan requirement for full Service Cloud integration
2. Walks through Salesforce app installation and OAuth connection
3. Configures case creation rules from social messages
4. Sets up social profile linking to CRM contacts
5. Tests the integration with a sample message
**Result**: Social care messages flowing into Salesforce cases

### Example 3: Evaluate Sprout Social Listening
**User says**: "Is Sprout's listening add-on worth it or should I get a standalone tool?"
**Skill does**:
1. Clarifies their monitoring needs (social only vs. news + social)
2. Explains Sprout Listening strengths (integrated with publishing/engagement) and limitations (social-focused, no news/broadcast)
3. Compares cost: Sprout Listening add-on (~$999/mo) vs. Brand24 ($79/mo) vs. Mention ($41/mo)
4. Recommends Sprout Listening if they want everything in one platform, standalone tool if budget-constrained or need broader coverage
**Result**: Clear decision framework for listening tool investment

## Troubleshooting

### Scheduled posts not going live
**Symptom**: Posts scheduled in Sprout's calendar fail to publish at the scheduled time
**Cause**: Social account disconnection, expired OAuth tokens, post format violations (wrong aspect ratio, caption too long), or approval workflow stuck
**Solution**: Check the Publishing Calendar for failed post indicators. Go to Settings → Connected Profiles and verify all accounts show "Connected" status. Re-authenticate any disconnected profiles. Review the post against network-specific requirements (Instagram aspect ratios, X character limits). If using approval workflows, check if the post is stuck awaiting approval.

### Social accounts keep disconnecting
**Symptom**: Profiles show "disconnected" and need re-authentication frequently
**Cause**: OAuth token expiration (each network has different refresh policies), password changes, 2FA changes, or network API changes
**Solution**: Re-authenticate the profile in Settings → Connected Profiles. Ensure the authenticating user has admin access to the social account. For Facebook/Instagram, the authenticating user must be a Page admin. For LinkedIn, they must be a Super Admin of the Company Page. Avoid changing the authenticating user's password or 2FA without re-connecting immediately after.

### Reports don't show expected data
**Symptom**: Analytics reports show zeros, missing data, or unexpected gaps
**Cause**: Profile disconnection during the reporting period, data processing delays (up to 24-48 hours for some networks), or network API limitations
**Solution**: Check profile connection status during the reporting window. Note that X/Twitter historical data has API restrictions. Instagram Stories data is only available for 24 hours natively. Allow 24-48 hours for data processing before assuming data is missing. For cross-network reports, verify all target profiles are included in the report's profile selection.
