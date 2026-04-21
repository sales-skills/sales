# Noota Platform Reference

## Platform overview

Noota is a Paris-based AI meeting assistant and recruitment automation platform. It records, transcribes, summarizes, and analyzes meetings across video calls, phone calls, and in-person conversations. The platform splits into two product lines: **Noota 360** (productivity — meeting notes, email automation, knowledge base) and **Noota Talent** (recruitment — AI sourcing, screening agents, outreach sequences). 200,000+ users across 5,000+ teams. Rated 4.8/5 on G2 (304 reviews), 4.9/5 on Trustpilot. EU AI Act, GDPR, ISO 27001, SOC 2 Type II, CCPA compliant. SecNumCloud-enabled architecture.

## Key modules

### AI Notetaker (Noota 360)
Records online meetings (Zoom, Teams, Google Meet, Webex), phone calls (Aircall, Ringover), and in-person meetings via mobile app. Automatic transcription in 50+ languages with AI-generated summaries, action items, and key takeaways. ~20 customizable summary templates. Chrome extension (NootEx) for manual recording and on-demand sharing. NooBot for automated post-meeting sharing to connected tools.

### Voice Agent (Noota 360 / Noota Talent)
Custom AI agents with realistic voices for:
- Candidate screening (24/7 via public links)
- Role-play simulations (sales calls, manager interviews)
- Outreach (multi-channel campaigns)

### Inbox Automation (Noota 360)
AI sorts incoming email, drafts replies based on communication patterns. Learns from user's writing style over time.

### Knowledge Base (Noota 360)
Unified search across all recorded conversations, emails, and meeting notes. Graph-based visualization of connections between conversations and contacts.

### ATS & CRM Automation (Noota 360 / Noota Talent)
100+ native integrations with browser-based automation. Auto-pushes summaries to CRM deals/contacts via email matching.

### Noota Talent — Recruitment Suite
- **Intake Agent**: Gathers detailed job requirements from hiring managers
- **AI Sourcing**: Generates up to 100 pre-qualified candidates in 30 seconds, scored against role specs
- **Outreach Sequences**: Multi-channel campaigns (email, LinkedIn, WhatsApp)
- **Screening Agents**: 24/7 candidate engagement via public links with personalized voice conversations
- **Role-Play Assessment**: Voice-based scenario simulations
- **Interview Assistant**: Recording, transcription, summarization, performance scorecards

## Pricing and limits

| Feature | Free | Pro ($19/mo annual) | Business ($39/mo annual) | Hiring Agent ($199/mo annual) | Enterprise (custom) |
|---|---|---|---|---|---|
| Recording minutes | 300/mo | 1,000/mo | Unlimited | Unlimited | Unlimited |
| Storage | 1 month | Longer | Unlimited | Unlimited | Unlimited |
| Max seats | 1 | 10 | Unlimited | Per-user | 50+ required |
| Custom summaries | ✓ | ✓ | ✓ | ✓ | ✓ |
| Chrome extension | ✓ | ✓ | ✓ | ✓ | ✓ |
| iOS & Android apps | ✓ | ✓ | ✓ | ✓ | ✓ |
| Email automation | — | ✓ | ✓ | ✓ | ✓ |
| Business phone calls | — | ✓ | ✓ | ✓ | ✓ |
| Unlimited integrations | — | ✓ | ✓ | ✓ | ✓ |
| Zapier & API | — | — | ✓ | ✓ | ✓ |
| Analytics | — | — | ✓ | ✓ | ✓ |
| AI sourcing (candidates/mo) | — | — | — | 500 | Unlimited |
| Screening interviews/mo | — | — | — | 500 | Unlimited |
| Email + LinkedIn outreach | — | — | — | ✓ | ✓ |
| Universal ATS integration | — | — | — | ✓ | ✓ |
| Custom integrations | — | — | — | — | ✓ |
| DPA, invoice billing | — | — | — | — | ✓ |
| Dedicated support | — | — | — | — | ✓ |

Monthly pricing: Pro $29/mo, Business $49/mo, Hiring Agent $299/mo. Annual saves up to 50%.

## Integrations

### Meeting / calling platforms
- Zoom, Microsoft Teams, Google Meet, Webex (video)
- Aircall, Ringover (VoIP/phone)

### CRM
- HubSpot, Salesforce, Pipedrive, Zoho, Zendesk, Monday, Dynamics 360
- Integration method: NooBot auto-share — sends summaries and links to matching deals/contacts via email lookup
- HubSpot: send summaries, create deals, link contacts via email
- Salesforce/Pipedrive: send summaries and links to specific deals

### ATS (Applicant Tracking Systems)
Mysolution, HireSweet, Workable, Tellent Recruitee, Flatchr, ADMen, Bullhorn, Boond Manager, SmartRecruiter, Intuition Software, BambooHR, Beetween, Greenhouse, ICMS, Tool4Staffing

### Productivity
- Email: Gmail, Outlook
- Notes: Notion, OneNote
- Storage: Google Drive, OneDrive
- Messaging: Slack
- Automation: Zapier (Business+ plan)

### Integration methods
1. **NootEx** (Chrome extension): Manual, on-demand sharing after meetings
2. **NooBot**: Automated sharing after meetings/file uploads to connected tools
3. **Zapier** (Business+): Workflow automation sending summaries to any Zapier-connected app
4. **API** (Business+): Programmatic access for custom integrations

## Data model (API — Business+ plan)

API details are limited — no public API documentation found. The API is available on Business+ plans and accessed through Zapier or direct API calls. Auth method and base URL are not publicly documented.

Known capabilities:
- Zapier triggers: meeting completed, summary generated
- Zapier actions: send summary to connected apps
- API access mentioned for custom integrations on Enterprise plan

## Workflow setup

### Initial setup (all plans)
1. Create account at app.noota.io
2. Connect Google Calendar or Outlook for auto-join
3. Install Chrome extension (NootEx) for manual recording
4. Install mobile app (iOS/Android) for in-person and phone recording
5. Configure summary template preferences (select from ~20 templates)

### CRM integration setup (Pro+ for integrations, Business+ for API)
1. Go to Settings → Integrations → select your CRM
2. Authorize the connection (OAuth for HubSpot/Salesforce/Pipedrive)
3. Enable NooBot for the CRM — toggle auto-share after meetings
4. NooBot matches meeting participants by email to CRM contacts/deals
5. Summaries, links, and action items auto-push to matching CRM records

### Recruitment setup (Hiring Agent plan)
1. Use Intake Agent to define job requirements with hiring managers
2. Run AI Sourcing to generate pre-qualified candidate lists (up to 100 in 30s)
3. Set up outreach sequences (email + LinkedIn + WhatsApp)
4. Create screening agent with public link for candidate self-scheduling
5. Connect ATS integration for report delivery
6. Review AI-generated scorecards and candidate reports

## Deep dives

### Security and compliance
- EU AI Act compliant
- GDPR compliant with EU data hosting
- ISO 27001 certified
- SOC 2 Type II certified
- CCPA compliant
- SecNumCloud-enabled architecture
- Double encryption for data at rest and in transit

### Affiliate and partner programs
- **Affiliate program**: 20% recurring commission via Tapfiliate on all referred sales; referrals get 10% discount on first order
- **Ambassador program**: Up to 30% commission + 20% promo code for affiliates
- **Reseller program**: Available with unique reseller offers
- **AppSumo Ambassador Program**: Additional tier with milestone rewards
- Signup: noota.tapfiliate.com or noota.io/partnerships

### Noota 360 vs Noota Talent
Noota 360 (productivity) and Noota Talent (recruitment) are separate product lines with separate pricing. A team can use both:
- 360 plans (Free/Pro/Business) cover meeting recording, transcription, email automation, CRM sync
- Hiring Agent plan covers AI sourcing, screening agents, outreach sequences, ATS integration
- Enterprise plan bundles everything with custom limits

### Known limitations
- Recording only works on Zoom, Teams, Google Meet, Webex, Aircall, Ringover — other platforms not supported
- Transcription struggles with numbers, percentages, and technical jargon
- Summary language detection occasionally fails in multilingual meetings
- Free plan has 1-month storage retention
- No public API documentation — developers must rely on Zapier or contact support for API access
- Mobile interface is functional but less polished than desktop
