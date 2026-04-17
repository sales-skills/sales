# Tactiq Platform Reference

## Platform overview

Tactiq is a Chrome extension AI meeting note-taker that provides bot-free live transcription for Google Meet, Zoom, and Microsoft Teams. Unlike most competitors (Fathom, Fireflies, Gong), Tactiq doesn't send a bot to join your call — it runs as a browser extension that captures audio directly. This means no "bot joined the meeting" notification, but also no video/audio recording and no playback capability.

1M+ active users across 10,000+ companies. Chrome Web Store rating: 4.8 from 3,000+ reviews. Also available as Edge and Safari extensions.

**Key differentiator**: Bot-free, zero-setup — install the extension and it works immediately. No calendar integration or bot configuration needed.

**Key limitation**: Text-only transcription (no audio/video recording), no public API, limited AI credits on lower tiers.

## Key modules

### Live transcription
- Real-time text as people speak during Google Meet, Zoom, or MS Teams calls
- Speaker identification (labels who said what)
- 60+ language support (but requires manual language selection — no auto-detect)
- Works in Chrome, Edge, and Safari browsers

### AI summaries & prompts
- One-click meeting summary generation after calls
- Custom reusable AI prompts (ask questions about the meeting content)
- Action item extraction
- Follow-up email generation
- Meeting minutes generation
- Costs 1 AI credit per use (limited on Free and Pro plans)

### AI Workflows
- Automated post-meeting actions (push summary to Slack, create Linear issue, update HubSpot, save to Notion)
- Team-shareable workflow templates
- Triggered automatically when a meeting ends
- Available on all plans

### Recording uploads
- Upload pre-recorded audio/video files for transcription
- Available on all plans

## Pricing and limits

Pricing as of 2026-04 — verify on tactiq.io/buy before quoting.

| Feature | Free | Pro | Team | Business | Enterprise |
|---|---|---|---|---|---|
| Price (annual) | $0 | $8/user/mo | $16.67/user/mo | $29.16/user/mo | Custom |
| Price (monthly) | $0 | $12/user/mo | $20/user/mo | $40/user/mo | Custom |
| Transcripts/month | 10 | Unlimited | Unlimited | Unlimited | Unlimited |
| AI credits/month | 5 | 10 | Unlimited | Unlimited | Unlimited |
| AI Workflows | Yes | Yes | Yes | Yes | Yes |
| Transcript sharing/export | Yes | Yes | Yes | Yes | Yes |
| Recording uploads | Yes | Yes | Yes | Yes | Yes |
| Disable notifications | No | Yes | Yes | Yes | Yes |
| Pause auto-transcription | No | Yes | Yes | Yes | Yes |
| Priority support | No | No | Yes | Yes | Yes |
| Auto-share with team | No | No | Yes | Yes | Yes |
| Centralized billing | No | No | Yes | Yes | Yes |
| Data retention controls | No | No | No | Yes | Yes |
| AI meeting agents | No | No | No | Yes | Yes |
| SAML SSO | No | No | No | Yes | Yes |
| Dedicated success manager | No | No | No | Yes | Yes |
| Advanced data retention | No | No | No | No | Yes |
| Customizable SSO | No | No | No | No | Yes |
| Dedicated account manager | No | No | No | No | Yes |

**AI credits**: Each AI action (summary, custom prompt, action items) costs 1 credit. Free = 5/mo, Pro = 10/mo. Team and above = unlimited. Credits reset monthly — no rollover, no à la carte purchases.

**Plan recommendation by use case**:
- Evaluating Tactiq → Free (but 10 transcripts is very limiting)
- Individual user, mostly needs transcripts → Pro ($8/mo)
- Needs AI summaries on most calls → Team ($16.67/mo) — Pro's 10 AI credits won't last
- Team deployment with SSO → Business ($29.16/mo)
- 200+ users → Enterprise (custom)

## Integrations

### Native integrations
| Integration | What it does | Plan required |
|---|---|---|
| HubSpot | Sync meeting details and transcripts to CRM contacts | All plans |
| Salesforce | Share transcripts, streamline CRM updates | All plans |
| Pipedrive | Link transcripts to contacts and deals | All plans |
| Notion | Save transcripts to workspaces | All plans |
| Slack | Post meeting summaries, share details | All plans |
| Linear | Create issues from meeting action items | All plans |
| Confluence | Store transcripts and share highlights | All plans |
| Google Drive | Auto-store and organize transcripts | All plans |
| OneDrive | Store transcripts in Microsoft cloud | All plans |
| Google Calendar | View transcripts directly from calendar | All plans |
| Quip | Share transcriptions for collaboration | All plans |

### Zapier
- Trigger: "Transcription completed" — fires when a meeting transcript is ready
- Use for: pushing transcripts to any of 7,000+ apps Zapier supports
- Setup: Dashboard → Account & Settings → Integrations → Automation → Zapier
- Plan required: details unclear — likely Pro+

### AI Workflows
- Built-in automation system (no Zapier needed for supported integrations)
- Configure post-meeting actions: auto-share to Slack channel, create Linear issue, update HubSpot contact
- Team-shareable workflow templates
- Available on all plans

## API and developer access

**Tactiq has no documented public REST or GraphQL API.** This is a significant limitation compared to Fathom (REST + webhooks), Fireflies (GraphQL + webhooks), or Gong (REST + webhooks).

What exists:
- **API key auth** is referenced on apitracker.io, but no public documentation, base URL, or endpoint reference is available
- **Zapier integration** is the primary programmatic automation path
- **Zapier MCP server** exists (zapier.com/mcp/tactiq) — provides AI tool access through Zapier's MCP infrastructure, not a native Tactiq MCP server
- **GitHub org** (github.com/Tactiq-HQ): 9 public repos, but none are API client libraries or MCP servers — mostly internal/branding repos

**If you need a production API integration**, Tactiq is not the right platform. Consider Fathom (REST + webhooks + OAuth + TypeScript/Python SDKs), Fireflies (GraphQL + webhooks + MCP), or Gong (REST + webhooks + JWT signing) instead.

## Security and compliance

- SOC 2 Type II attestation
- ISO 27001 certification
- GDPR compliant
- HIPAA compliant
- Uses OpenAI's enterprise API (not ChatGPT consumer) — OpenAI does not use API-submitted data for model training
- Does not record audio — stores text transcripts only
- Chrome extension requires broad permissions ("read and change all data on all websites") — this is standard for meeting transcription extensions but may trigger IT security review

## Workflow setup

### Setting up Tactiq for the first time
1. Install the Chrome extension from the Chrome Web Store
2. Sign up for an account (free tier)
3. Join a Google Meet, Zoom (web client), or MS Teams meeting — Tactiq auto-starts transcription
4. After the meeting, view transcript in the Tactiq dashboard
5. Use AI prompts or one-click summary (costs 1 AI credit)

### Setting up a Zapier workflow (transcript → CRM)
1. Go to Dashboard → Account & Settings → Integrations → Automation → Zapier
2. Create a new Zap with trigger "Tactiq - Transcription completed"
3. Add action (e.g., Salesforce "Create Record" or HubSpot "Create Engagement")
4. Map transcript fields to CRM fields
5. Test and activate

### Setting up native HubSpot integration
1. Go to Dashboard → Account & Settings → Integrations
2. Select HubSpot → Authorize
3. Tactiq will automatically sync meeting details and transcripts to HubSpot contacts
4. Transcripts appear on the contact timeline

## Affiliate program

- **Commission**: 30% of subscription price for the first month
- **Network**: Rewardful (tactiq-partner.getrewardful.com)
- **Signup**: tactiq-partner.getrewardful.com/signup
- **Referral program**: 5 free meetings + 1 AI credit per successful referral
- **Contact**: legal@tactiq.io
