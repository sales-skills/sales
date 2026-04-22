# Winn.ai Platform Reference

## Platform overview

Winn.ai is a Revenue Execution Platform that provides real-time AI assistance during sales calls. Founded in 2021 (Tel Aviv, Israel), it differentiates from traditional conversation intelligence tools by focusing on in-call guidance rather than post-call analysis. Its proprietary "Vibe Selling" concept emphasizes playbook adherence, automated CRM updates, and live coaching — all happening during the meeting, not after. Target audience: mid-market to enterprise sales teams that need reps to follow methodology consistently. Key differentiator vs Gong: Winn.ai is built for real-time playbook enforcement during calls, while Gong centers on post-call analytics and leadership visibility. Key differentiator vs Sybill: Winn.ai tracks talking points live during the call; Sybill focuses on post-call CRM autofill and deal workspace. Listed on Azure Marketplace, Zoom Marketplace, and Product Hunt.

## Key modules

### Real-Time Playbook Adherence
Live in-call tracking of which talking points have been covered. The overlay shows the active playbook and checks off items as the rep discusses them. Supports built-in templates (MEDDIC, SPICED, BANT, Challenger, Gap Selling, Solution Selling) and custom playbooks.
- Available on all paid plans

### Automated CRM Updates
After calls, Winn.ai syncs captured data to Salesforce or HubSpot. Fields are populated based on what was discussed during the call, mapped through the playbook template.
- Pro: up to 25 CRM fields
- Enterprise: unlimited CRM fields
- Sync delay: seconds to 15 minutes

### AI Call Summaries
Auto-generated summaries after meetings including key topics, action items, and outcomes.
- Available on all paid plans

### AI Meeting Prep Briefs
Pre-call context documents generated before scheduled meetings. Includes relevant deal history and stakeholder context.
- Available on all paid plans

### Follow-Up Emails
AI-drafted personalized follow-up emails based on call content.
- Available on all paid plans

### Real-Time Data Capturing
35+ smart AI talking points on Pro, unlimited on Enterprise. Winn.ai listens for specific data points (budget, timeline, decision criteria) and captures them automatically.
- Pro: 35+ AI talking points
- Enterprise: unlimited

### Playbook Templates
Pre-built methodology templates that can be customized:
- MEDDIC / MEDDPICC
- SPICED
- BANT
- Challenger
- Gap Selling
- Solution Selling
- Custom templates

### Live Coaching (Enterprise only)
Real-time coaching suggestions during calls. Managers can see live call activity and provide guidance.

### Live Answers (Enterprise only)
AI-powered answers to rep questions during calls based on knowledge base content.

### AI Battle Cards (Enterprise only)
Competitive intelligence cards surfaced in real-time when competitors are mentioned during calls.

### Custom AI Digests (Enterprise only)
Configurable AI-generated reports and summaries tailored to leadership needs.

### Reporting & Analytics (Enterprise only)
Cross-team analytics on playbook adherence, methodology coverage, and rep performance.

### In-Meeting CRM Data Visibility (Enterprise only)
View CRM data about the account/opportunity directly in the Winn.ai overlay during the call.

### Opportunity Creation (Enterprise only)
Create new CRM opportunities directly from within Winn.ai during or after calls.

### Custom Objects (Enterprise only)
Map call data to custom CRM objects beyond standard fields.

## Pricing and limits

*Best-effort as of 2026-04 — verify on winn.ai.*

| Feature | Pro ($69/seat/mo, annual) | Enterprise (custom, 20+ seats) |
|---|---|---|
| Meetings | Unlimited | Unlimited |
| Playbooks | Unlimited | Unlimited |
| CRM auto-updates | Up to 25 fields | Unlimited fields |
| AI talking points | 35+ | Unlimited |
| Call summaries | Yes | Yes |
| Meeting prep briefs | Yes | Yes |
| Follow-up emails | Yes | Yes |
| Automated Slack updates | Yes | Yes |
| Live Coaching | No | Yes |
| Live Answers | No | Yes |
| AI Battle Cards | No | Yes |
| Reporting & Analytics | No | Yes |
| Custom AI Digests | No | Yes |
| In-meeting CRM visibility | No | Yes |
| Opportunity creation | No | Yes |
| Custom objects | No | Yes |
| SAML SSO (Okta) | No | Yes |
| Dedicated account manager | No | Yes |

No free tier. 14-day free trial available. Annual billing required on Pro.

Enterprise requires minimum 20 seats. Pricing is custom — contact sales.

## Integrations

### CRM
- **Salesforce** — auto-updates opportunity and contact fields based on call data
- **HubSpot** — auto-updates deal properties based on call data

### Meeting platforms
- **Zoom** — full support via Chrome extension
- **Google Meet** — full support via Chrome extension
- **Microsoft Teams** — full support via Chrome extension

### Communication
- **Slack** — automated post-call notifications and updates

### SSO (Enterprise only)
- **Okta** — SAML SSO for enterprise identity management

### Delivery
- **Chrome extension** — required for in-call overlay and real-time tracking

### AI
- **OpenAI** — powers AI features (summaries, coaching, data extraction)

## Data model

No public API. All integrations are through pre-built connectors. No webhook system, no developer API, no SDKs.

Key data captured per call:
- **Talking points covered** — which playbook items were discussed
- **Extracted fields** — budget, timeline, decision criteria, etc. (mapped to CRM fields)
- **Summary** — AI-generated meeting recap
- **Action items** — follow-up tasks identified during the call
- **Participants** — attendee list from the calendar invite

## Workflow setup

### Initial setup
1. Install Chrome extension from winn.ai or Chrome Web Store
2. Sign up and connect calendar (Google or Microsoft)
3. Connect CRM (Salesforce or HubSpot) from Settings
4. Select or customize a playbook template (MEDDIC, BANT, etc.)
5. Map playbook talking points to CRM fields
6. (Optional) Connect Slack for post-call notifications
7. Run a test call — verify the overlay appears and talking points are tracked

### Playbook configuration
1. Choose a built-in template or create custom
2. Define talking points for each methodology element
3. Map each talking point to the CRM field it should populate
4. Set priority/required talking points vs optional
5. Test with a real call — check that tracked items correctly populate CRM

### Team rollout
1. Start with 2-3 pilot reps for 1-2 weeks
2. Verify CRM data quality improves (spot-check populated fields)
3. Train the full team on the Chrome extension and playbook workflow
4. Monitor playbook adherence metrics (Enterprise) to identify reps who need help

## Deep dives

### Real-time vs post-call: understanding the Winn.ai model
Unlike most conversation intelligence tools that process recordings after the call, Winn.ai operates during the call. The Chrome extension overlay shows the active playbook, checks off talking points as they're discussed, and captures data in real-time. This means:
- Reps get immediate feedback on methodology coverage
- CRM fields start populating during/immediately after the call (with up to 15 min lag for full sync)
- No video recording is produced — there's no call library to review later
- The tool is more about discipline enforcement than retrospective analysis

### Winn.ai vs traditional CI tools
| Capability | Winn.ai | Gong/Chorus | Sybill |
|---|---|---|---|
| Real-time playbook tracking | Yes (core feature) | No (post-call) | No (post-call) |
| Video recording | No | Yes | No |
| CRM auto-update | Yes (25 fields Pro) | Yes | Yes (10 fields Business) |
| Live coaching | Yes (Enterprise) | No | No |
| Battle cards (real-time) | Yes (Enterprise) | No | No |
| Deal workspace | No | Yes (Gong) | Yes |
| Post-call analytics | Limited (Enterprise) | Deep | Medium |
| API | No | Yes | Enterprise only |
| Pricing | $69/seat/mo | ~$100-133/seat/mo | $30-90/seat/mo |

### Sales-only focus
Winn.ai is purpose-built for sales calls. It does not support:
- Customer success calls
- Internal meetings
- Support conversations
- General meeting transcription

If you need cross-functional meeting intelligence, use Fathom, Fireflies, or Otter instead.

### No public API implications
Without a public API, you cannot:
- Build custom integrations beyond Salesforce/HubSpot/Slack
- Export data to a data warehouse
- Connect to Zapier/Make directly
- Build internal dashboards from call data

For teams that need data pipelines and custom integrations, consider Gong (extensive REST API), Fathom (REST + webhooks + MCP), or Fireflies (GraphQL API).
