# Birdeye Platform Reference

## Platform overview

Birdeye is the #1-rated (G2, 10 consecutive years) AI-powered reputation management and customer experience platform, purpose-built for multi-location businesses. It combines reviews, listings, social media, messaging, surveys, referrals, payments, and appointments into a single platform with BirdAI — autonomous AI agents that automate marketing workflows. Trusted by 200,000+ businesses including H&R Block, Aspen Dental, and Caesars Entertainment.

**Target audience**: Multi-location brands in healthcare, dental, automotive, financial services, retail, home services, and hospitality.

## Key modules

### Reviews
- **Automated review requests** via email, SMS, or in-person kiosk after service interactions
- **Review monitoring** across 200+ sites (Google, Yelp, Facebook, Healthgrades, industry-specific)
- **BirdAI review responses** — AI-generated responses customizable by tone, industry, and brand voice
- **Sentiment analysis** — NLP-powered analysis of review content to identify trends
- **Review widgets** — embeddable widgets for your website showing aggregate ratings
- **Google Rich Snippets** — structured data for star ratings in search results

### Listings
- **Sync to 50+ directories** — Google Business Profile, Yelp, Facebook, Bing, Apple Maps, and more
- **NAP consistency** — Name, Address, Phone verification and correction across all directories
- **Duplicate detection and suppression** — find and merge duplicate listings
- **Listing analytics** — track views, clicks, and direction requests per location
- **Bulk management** — update hours, descriptions, photos, and categories across all locations at once

### Social Media
- **Publishing and scheduling** — post to Google, Facebook, Instagram, LinkedIn, Twitter
- **Content calendar** — visual planning across locations and platforms
- **Engagement management** — respond to comments and DMs from unified inbox
- **Analytics** — track engagement, reach, and growth per platform and location

### Messaging
- **Unified inbox** — SMS, email, webchat, Facebook Messenger, Instagram DMs in one view
- **Webchat widget** — customizable chat bubble for your website
- **Chatbot** (Professional plan+) — automated responses, appointment scheduling, lead qualification
- **Mass texting** — broadcast SMS to customer segments
- **Video chat** — face-to-face communication for consultations
- **Two-way SMS** — conversational messaging with customers

### Surveys
- **NPS, CSAT, and custom surveys** — post-interaction feedback collection
- **Multi-channel delivery** — email, SMS, in-app, kiosk
- **Real-time alerts** — detractor alerts routed to managers for follow-up
- **Text analytics** — AI analysis of open-ended responses
- **Benchmarking** — compare scores across locations

### Referrals
- **Customer referral program** — incentivize existing customers to refer new ones
- **Tracking and attribution** — see which customers referred whom
- **Automated rewards** — trigger rewards when referrals convert
- **Multi-location support** — referral programs by location or region

### Payments
- **Text-to-pay** — send payment requests via SMS
- **Online payments** — collect payments through Birdeye's payment portal
- **Invoice management** — create and send invoices
- **Payment tracking** — monitor payment status across locations

### Appointments
- **Online booking** — customer-facing appointment scheduling
- **Calendar integration** — sync with Google Calendar, Outlook, PMS systems
- **Automated reminders** — SMS/email reminders to reduce no-shows
- **Multi-provider scheduling** — schedule across multiple providers/locations

### BirdAI (AI Agents)
- **Review response AI** — draft and publish responses matching your brand voice
- **Content generation** — AI-created social posts, survey questions, marketing copy
- **Insights AI** — analyze reviews, surveys, and listings data for actionable recommendations
- **Automated workflows** — AI agents that complete tasks autonomously (review responses, survey follow-ups, listing updates)

## Pricing and limits

*Pricing is not publicly listed — these are best-effort estimates from third-party research. Verify with Birdeye sales.*

| Plan | Price (estimated) | Key features |
|---|---|---|
| **Standard** | ~$349/mo ($299/mo annual) | Reviews, listings, messaging (live chat, no chatbot), social, surveys, reporting |
| **Professional** | ~$449/mo (annual) | Everything in Standard + webchat chatbot, advanced automation |
| **Premium** | Custom | Everything in Professional + advanced AI, dedicated support, custom integrations |

- **Pricing is per-location** — multi-location discounts apply (more locations = lower per-location cost)
- **Unlimited users and contacts** across all plans
- **Free trial** available
- **Annual contracts** are standard — monthly billing available at higher rates

## Integrations

**3,000+ integrations** via native connectors, open APIs, SFTP, and bulk upload.

**Key categories:**
- **Dental PMS**: Dentrix, Dentrix Ascend, Open Dental, Easy Dental, Dental4Windows, Maxident
- **Healthcare**: HIPAA-compliant, 20K+ healthcare practices, EHR/PMS connectors
- **CRM**: Salesforce, HubSpot
- **Automotive**: DealerSocket, CDK, Reynolds & Reynolds
- **Property Management**: AppFolio, Buildium, RentManager
- **Google**: Google Business Profile, Google Ads, Google Analytics
- **Social**: Facebook, Instagram, LinkedIn, Twitter, YouTube
- **Zapier**: Triggers and actions for custom workflows
- **API**: REST API with API key authentication

## Data model (API)

Birdeye offers a REST API with API key authentication.

**Authentication**: API key obtained from the Birdeye dashboard, included in request headers.

**Key API capabilities:**
- Review request automation
- Review monitoring and retrieval
- Listing management
- Contact/customer management
- Survey creation and response retrieval
- Reporting and analytics

**Rate limits**: Per API key, varies by plan. Default ~10,000 daily calls. Contact support for specific limits.

**Developer portal**: https://developers.birdeye.com/ (Apiary-hosted)

*Note: Full API endpoint documentation is behind authentication. The developer portal requires a Birdeye account to access complete endpoint reference. The information above is from support articles and third-party sources.*

## Workflow setup

### Review collection workflow (most common)
1. **Connect PMS/CRM** — integrate your practice management or CRM system to auto-import customer data after appointments
2. **Configure review request rules** — set timing (e.g., 1 hour after appointment), channel (SMS first, email fallback), and filtering (exclude certain appointment types)
3. **Customize request templates** — personalize with customer name, provider name, location, and direct review link
4. **Set up review monitoring** — configure alerts for new reviews across all platforms, with priority alerts for negative reviews
5. **Enable BirdAI responses** — configure AI response templates for positive reviews, queue negative reviews for human review
6. **Add review widgets** — embed aggregate ratings and recent reviews on your website

### Listings management workflow
1. **Audit current listings** — scan all directories for NAP inconsistencies
2. **Claim and verify** — ensure ownership of listings on Google, Yelp, Facebook, Bing
3. **Bulk update** — push correct information to all 50+ directories
4. **Set up monitoring** — alerts for when directories receive user-submitted edits
5. **Schedule regular audits** — monthly check for data drift

### Messaging setup
1. **Install webchat widget** — add JavaScript snippet to your website
2. **Configure unified inbox** — connect SMS, email, Facebook Messenger
3. **Set up routing** — assign conversations by location, department, or round-robin
4. **Build chatbot flows** (Professional+) — greeting, qualification, appointment booking, FAQ
5. **Configure business hours** — set online/offline hours with appropriate auto-responses
6. **Enable text-to-pay** — configure payment collection via SMS

## Deep dives

### Healthcare / dental specific
- **HIPAA compliance** — Birdeye signs BAAs (Business Associate Agreements). All data encrypted at rest and in transit.
- **Patient review requests** — triggered by appointment completion in PMS (Dentrix, Open Dental, etc.). Can filter by appointment type to avoid surveying sensitive visits.
- **Healthgrades, Vitals, RateMDs** — Birdeye monitors healthcare-specific review sites beyond Google/Yelp.
- **Provider-level reviews** — collect and display reviews for individual doctors/dentists, not just the practice.

### Multi-location management
- **Corporate vs location dashboards** — corporate sees aggregate metrics, location managers see their own data
- **Location groups** — organize locations by region, brand, or franchise for bulk actions
- **Benchmarking** — compare review volume, rating, response time, and NPS across locations
- **Role-based access** — restrict location managers to their own data while corporate sees everything

### Competitive intelligence
- **Competitor monitoring** — track competitor review volume, ratings, and sentiment
- **Market benchmarking** — compare your performance against local competitors and industry averages
- **Trend analysis** — identify seasonal patterns and emerging themes in your market

### Birdeye vs competitors

| Feature | Birdeye | Podium | Yext | Reputation.com |
|---|---|---|---|---|
| **Best for** | Multi-location, all-in-one | SMB, messaging-first | Enterprise listings | Enterprise reputation |
| **Reviews** | 200+ sites | Google + Facebook focus | Limited | 100+ sites |
| **Listings** | 50+ directories | Limited | 200+ directories | 100+ directories |
| **Messaging** | SMS, webchat, video | SMS-first, webchat | Limited | Limited |
| **Surveys** | NPS, CSAT, custom | Basic | Limited | Advanced |
| **Social** | Publishing + analytics | Limited | Limited | Publishing + analytics |
| **Pricing** | ~$299-449/mo/location | Custom (~$249-599/mo) | Custom (~$499+/mo) | Custom (enterprise) |
| **AI** | BirdAI (autonomous agents) | Basic AI replies | Yext AI Search | Basic AI |
