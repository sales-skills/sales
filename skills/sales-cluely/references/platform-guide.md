# Cluely Platform Reference

## Platform overview

Cluely is a real-time AI meeting assistant that provides live coaching, answers, and notes during video calls via an invisible desktop overlay. Key differentiator: helps *during* the call, not after — real-time AI prompts with 300ms transcription latency. Also offers pre-call briefs, post-call analytics with missed opportunity detection, and a knowledge base with 1M token RAG context window. Targets sales teams, recruiters, consultants, and executives. Works via desktop app (Mac + Windows). Controversial "undetectable" positioning — the overlay can be hidden from screen sharing software on the $75/mo tier. Suffered a data breach in 2025 exposing 83K users.

## Key modules

### Live Insights
- Real-time AI answers during calls via Cmd/Ctrl+Enter
- Default actions: "What should I say next", "Follow up questions", "Fact check", "Who am I talking to", "Recap"
- Dynamic insights auto-detected from transcript (questions, keywords, suggestions)
- Keyboard shortcuts: Tab (accept top suggestion), Cmd+Enter (custom question), Cmd+Shift+Enter (stealth get answer), Cmd+\ (hide widget)
- Switchable modes (e.g., "Cluely for Sales")
- Toggle between live insights view and full transcript view

### Pre-Call Briefs
- Calendar-integrated meeting prep (Google Calendar only, no Outlook)
- Auto-identifies participants and researches professional backgrounds
- Pulls meeting history, agenda, relevant documents
- Generates suggested talking points and questions
- Updates automatically as meeting details change

### Meeting Notes
- Auto-generated transcripts and summaries
- Action items extraction
- Multi-device viewing (mobile, tablet, desktop)
- Shareable meeting notes
- 95% transcription accuracy claimed, 300ms latency
- 12+ language support (English, Chinese, Spanish, etc.)

### Coaching & Analytics
- Missed Opportunities Summary — post-call analysis of what could have been improved
- Sales Scorecards — define specific evaluation criteria
- Performance tracking — monitor team-wide metrics
- Trend analysis — track improvement over time
- Reps access via My Activity on enterprise.cluely.com
- Admins access Team Overview for all reps' missed opportunities

### Knowledge Base
- Upload company docs: PDF, DOC, DOCX, TXT, MD
- 1M token RAG context window
- Real-time retrieval during conversations
- Live Links — dynamic data from frequently-updated sources (requires backend config by Cluely team)
- Data Source Integrations — sync from CRM/ATS (request via enterprise@cluely.com)
- Team-level access controls and shared collaboration
- Usage analytics tracking knowledge utilization

### Undetectability ($75/mo tier only)
- Hidden from screen sharing software
- Never joins meetings as a bot
- Not visible in participant lists
- Not captured in external recordings
- Fully movable overlay window

## Pricing and limits

**Pricing as of 2026-04 — verify on cluely.com/pricing:**

| Plan | Monthly | Annual | AI responses | Meeting notes | Files | Key features |
|---|---|---|---|---|---|---|
| Free | $0 | $0 | Limited | Limited | 3 uploads | Basic customization, past meeting history |
| Pro | $20/mo | ~$19/mo (estimated) | Unlimited | Unlimited | Unlimited | Latest AI models, priority support |
| Pro + Undetectability | $75/mo | Unknown | Unlimited | Unlimited | Unlimited | Hidden from screen sharing software |
| Team | ~$99/seat/yr | ~$99/seat/yr | Unlimited | Unlimited | Unlimited | Shared playbooks, admin dashboards, SSO |

**Key plan gates:**
- Unlimited AI responses → Pro+ ($20/mo)
- Unlimited meeting notes → Pro+ ($20/mo)
- Undetectability during screen share → Pro + Undetectability ($75/mo)
- Shared playbooks, admin dashboards, SSO → Team (~$99/seat/yr)
- CRM/ATS integration via Merge.dev → Team/Enterprise

**Referral program:** $500 cash per referral (LinkedIn announcement, details may vary).

## Integrations

**Video conferencing:**
- Zoom
- Google Meet
- Microsoft Teams
- Webex
- Slack (huddles)

**CRM systems (via Merge.dev, Team/Enterprise):**
- HubSpot
- Salesforce
- Pipedrive
- Zoho CRM
- Additional options available

**ATS systems (via Merge.dev, Team/Enterprise):**
- Greenhouse
- Lever
- Workday
- BambooHR
- Additional options available

**Calendar:**
- Google Calendar only (no Outlook/Office 365)

**NOT available:**
- Public API — api.cluely.com exists but DNS doesn't resolve
- Webhooks — none
- Zapier — no integration
- Make/n8n — none
- Outlook calendar — not supported

## Workflow setup

### Setting up Cluely for a sales team
1. Download desktop app from cluely.com (Mac .dmg or Windows .exe)
2. Sign up and connect Google Calendar
3. Grant microphone + system audio permissions
4. Configure "Cluely for Sales" mode in Customization Suite
5. Upload battlecards, sales scripts, and product docs to Knowledge Base
6. Start a call — Live Insights overlay appears automatically
7. Use Cmd+Enter for custom questions during the call
8. Review meeting notes and missed opportunities after the call

### Setting up CRM integration (Team/Enterprise)
1. Access enterprise.cluely.com → Admin dashboard
2. Navigate to Merge.dev integration portal
3. Select CRM platform (HubSpot, Salesforce, etc.)
4. Input Account ID, API Key, and environment type
5. Test the connection
6. Configure data mapping:
   - Contact matching criteria (email, phone, name, company)
   - Activity types to sync
   - Sync frequency (immediate, hourly, daily)
7. Meeting notes automatically push summaries, action items, sentiment to CRM

### Setting up team coaching
1. Access enterprise.cluely.com → Team Overview
2. Define sales scorecards with specific evaluation criteria
3. Enable missed opportunity tracking for each rep
4. Reps review their insights via My Activity section
5. Admins review team-wide coaching metrics and trends

## Deep dives

### Knowledge Base optimization
- Upload all company battlecards, product documentation, and common objection responses
- Organize into folders for different use cases (competitor handling, pricing, technical questions)
- 1M token context window is substantial — prioritize quality over quantity
- RAG retrieval works best with clearly structured documents (headings, bullet points)
- Live Links for dynamic sources (help center, product KB) require Cluely backend setup — email enterprise@cluely.com

### Security considerations
- 2025 data breach: credentials in public GitHub repo exposed 83K users' interview data, screenshots, and transcripts
- Electron app vulnerability: any website could capture screenshots without user knowledge (reported mid-2025)
- System prompts stored in plaintext
- SOC 2 Type II compliance via Merge.dev for CRM integrations
- Evaluate current security posture before uploading sensitive company data
- Consider what data is captured: microphone audio, system audio, screen context

### Cluely vs competitors — key differences
- **Cluely vs traditional note-takers (Fathom, Fireflies, etc.)**: Cluely is real-time coaching, not post-call transcription. Different category — live overlay with AI prompts vs. passive recording with after-the-fact summaries.
- **Cluely vs Colibri Sales Copilot**: Both offer real-time coaching. Colibri has cue cards and sentiment analysis but no API. Cluely has a knowledge base RAG and pre-call briefs but a controversial security history.
- **Cluely vs Gong/Avoma coaching**: Gong and Avoma analyze calls after the fact for coaching insights. Cluely coaches during the call. Different timing, complementary use cases.
