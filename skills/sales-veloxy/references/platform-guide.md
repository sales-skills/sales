# Veloxy Platform Reference

## Platform overview

Veloxy is a Salesforce-native field sales enablement platform built for outside sales reps and managers. It combines predictive sales intelligence, geolocation-based route planning, email sync/tracking, and mobile CRM access into a single platform that sits on top of Salesforce. Acquired by Core Group for $18.7M. Target audience: field/outside sales teams already using Salesforce who need better mobile access, route optimization, and automated activity logging. Rated 4.92/5 on Salesforce AppExchange (211 reviews).

## Key modules

### Predictive Selling & Sales Intelligence
- AI analyzes and prioritizes leads and contacts based on buyer intent signals
- Real-time actionable signals delivered across desktop and mobile devices
- Automatic scoring helps reps focus on highest-probability prospects
- Works by analyzing engagement patterns, CRM data, and activity history

### Geolocation Intelligence
- Route optimization for field reps — calculates most efficient driving paths between prospects
- Mobile lead discovery — find nearby leads/contacts on a map in real time
- Thematic mapping — visualize opportunities by deal size, stage, or custom criteria
- Requires valid address data in Salesforce Mailing/Billing Address fields

### Salesforce Email Sync
- Bidirectional real-time sync between Gmail/Outlook and Salesforce
- Automatically captures, creates, and updates Salesforce records from inbox
- Extends to iPhone, iPad, and Android — reps can work from email while Veloxy updates Salesforce
- Logs emails to Contact/Lead/Opportunity records in Salesforce

### Email Tracking & Templates (Veloxy Lite)
- Open and click tracking on all emails
- Email templates with merge fields
- Drip campaign automation — schedule multi-touch sequences
- 20+ email features including scheduling, tracking, and analytics
- Sends from your real inbox (Gmail/Outlook) — good for deliverability but subject to provider sending limits

### Dashboard & Reporting
- Email analytics — open rates, click rates, engagement patterns
- Sales analytics — activity metrics, pipeline health
- Pipeline management views
- Team performance tracking for managers

### Mobile Apps
- Native iOS (iPhone + iPad) and Android apps
- Full Salesforce CRM data access from mobile
- Calendar and contacts sync
- Adaptive notes for field visit documentation
- Push notifications for engagement events

## Pricing and limits

| Plan | Monthly | Annual savings | Key features |
|---|---|---|---|
| Veloxy Basic | $25/user/mo | ~45% | Predictive intelligence, geolocation, Salesforce sync, mobile app |
| Veloxy Lite | $35/user/mo | ~43% | Email-focused: drip campaigns, templates, tracking, 20+ email features |

- 15-day free trial for all products (no credit card required reported)
- Free-to-install on Salesforce AppExchange (payment required for Veloxy services)
- Support: phone (510-402-6913), email (support@veloxy.io), documentation, video tutorials

**Note**: Veloxy (field sales) and Veloxy Lite (email) are separate products. Unclear if they can be combined or if features overlap.

## Integrations

### Native
- **Salesforce**: All editions — Professional, Enterprise, Unlimited, Force.com, Developer, Performance. Lightning Ready. Real-time bidirectional API sync.
- **Gmail**: Email sync, send/receive tracking, contact/calendar sync
- **Microsoft Outlook**: Full email sync, works with Exchange Server and Office365
- **Microsoft Exchange Server**: Enterprise email connectivity
- **Office365**: Cloud email sync

### Mobile
- iOS (iPhone + iPad) via App Store
- Android via Google Play
- Apple Watch (not confirmed)

### Not available
- No Zapier/Make/n8n connectors found
- No native HubSpot, Pipedrive, or other CRM support — Salesforce only
- No webhook endpoints documented
- No MCP server

## Data model (API)

Veloxy has an API listed on Salesforce AppExchange ("API/Salesforce Platform API" system type) but no public API documentation is available. The API facilitates integration with Gmail, Exchange, Office365, and Outlook.

**No public developer docs, no OpenAPI spec, no Postman collection found.** Contact support@veloxy.io for API access details.

## Workflow setup

### Initial setup (field sales team)

1. **Install from AppExchange** — search "Veloxy" on Salesforce AppExchange, install for your org
2. **Connect email** — authenticate Gmail or Outlook account for each rep
3. **Verify Salesforce sync** — send a test email and confirm it logs to the correct Contact/Lead in Salesforce
4. **Configure geolocation** — ensure leads/contacts have valid address data in standard Salesforce address fields
5. **Deploy mobile app** — install Veloxy for Salesforce CRM on each rep's device (iOS/Android)
6. **Set up predictive intelligence** — configure buyer intent signals and lead prioritization (may require admin setup)
7. **Enable email tracking** — if using Veloxy Lite, set up templates and drip campaigns

### Drip campaign setup (Veloxy Lite)

1. Create email templates with merge fields for personalization
2. Build a drip sequence with timing between each email
3. Select target contacts/leads from Salesforce
4. Schedule the campaign — sends from your inbox (respect Gmail 2K/day, Outlook 300/day limits)
5. Monitor open/click rates in the Veloxy dashboard

## Deep dives

### Veloxy vs alternatives for Salesforce field teams

| Feature | Veloxy | Scratchpad | Weflow | Laserfocus | Badger Maps |
|---|---|---|---|---|---|
| Field sales / geolocation | Yes (core) | No | No | No | Yes (core) |
| Route optimization | Yes | No | No | No | Yes |
| Email sync to Salesforce | Yes (bidirectional) | No | Yes | No | Partial |
| Call recording / CI | No | Yes (via Gong) | Yes (built-in) | No | No |
| AI field updates | No | Yes (AI auto-fill) | Yes | No | No |
| Pipeline management | Basic | Yes (Sheets) | Yes (Deal Intelligence) | Yes (Stacks) | No |
| Mobile app quality | Strong | Basic | Good | No mobile | Good |
| Forecasting | Predictive signals | Via Salesforce | Deal forecasting | No | No |
| Pricing | $25-35/user/mo | $0-49/user/mo | $19-79/user/mo | $0-30/user/mo | Custom |
| Salesforce-only | Yes | Yes | Yes | Yes | No (multi-CRM) |

### When Veloxy is the right choice
- Team is primarily field/outside sales doing in-person meetings
- Reps need route optimization and nearby lead discovery
- The Salesforce mobile app is insufficient for field workflows
- Email tracking is needed but conversation intelligence is not
- Budget is moderate ($25-35/user/mo)

### When to look elsewhere
- Inside sales team that needs pipeline management → Scratchpad
- Team needs call recording and conversation intelligence → Weflow or Gong
- Multi-CRM environment (not just Salesforce) → Badger Maps
- Developer/API integration requirements → Veloxy has no public API docs
- Enterprise with SSO/SCIM/HIPAA requirements → not confirmed on Veloxy
