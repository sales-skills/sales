# SurveyMonkey Platform Reference

## Platform overview

SurveyMonkey is the world's most popular online survey platform, serving 42 million+ users globally with 100 billion+ survey questions processed. Positioned as the accessible, SMB-friendly alternative to enterprise platforms like Qualtrics and Medallia. Owned by Momentive (rebranded back to SurveyMonkey in 2023). Target audience: individuals, small businesses, marketing teams, HR departments, researchers, and educators who need fast survey creation without enterprise complexity.

## Key modules

### Survey Builder
- **Question types**: Multiple choice, checkboxes, dropdown, matrix/rating scale, open-ended text, star rating, slider, Net Promoter Score, ranking, file upload, date/time, payment (Stripe), image choice, clickmap
- **Templates**: 200+ expert-designed templates by category (customer feedback, employee engagement, market research, education, healthcare, events)
- **Logic**: Question Skip Logic (skip forward based on one answer), Page Skip Logic (skip all respondents on a page), Advanced Branching (multi-condition paths based on multiple questions, custom variables, or contact data — paid plans only)
- **Randomization**: Randomize answer options within questions, randomize page order
- **Design**: Custom themes, logo, colors, fonts. Custom branding requires paid plan. Custom survey URL on Premier+.
- **Languages**: 50+ survey languages supported. Multilingual surveys on Team Premier+.

### Collectors (Distribution)
- **Web Link**: Shareable URL, no respondent tracking. Simplest method.
- **Email**: Built-in email collector with tracking (opens, clicks, bounces). Requires verified sender email. Supports invite, reminder, and thank-you messages. Anti-spam compliance required.
- **SMS**: Text message distribution with short survey links.
- **Social media**: Share links on Facebook, Twitter, LinkedIn.
- **Website embed**: Embed survey inline on a webpage.
- **Popup**: Popup invitation or popup survey on your website. Configurable sample rate, dimensions, styling.
- **QR code**: Generate QR codes linking to the survey.
- **Manual data entry**: Enter responses on behalf of respondents (phone surveys, paper surveys).

### Analytics & Reporting
- **Real-time results**: Responses update as they come in.
- **Filtering**: Filter by question, collector, completeness, date, custom data.
- **Cross-tabulation**: Compare answers across two questions side-by-side (paid plans).
- **Text analysis**: Word clouds, sentiment tags, AI thematic analysis (summarizes open-ended themes automatically).
- **Benchmarking**: Compare your results against SurveyMonkey's benchmarks for similar surveys.
- **Export**: PDF, Excel, CSV, SPSS. Export requires Advantage plan or higher.
- **Shared results**: Generate a shareable results URL for stakeholders (view-only).

### SurveyMonkey Audience
- Access to SurveyMonkey's panel of 175M+ respondents worldwide.
- Target by demographics, geography, profession, industry.
- Billed per response — NOT included in plan response limits.
- Pricing varies by targeting criteria and response count (typically $1-5+ per response).
- Useful for market research, concept testing, ad testing when you don't have your own audience.

### Team & Collaboration
- Shared survey library across team members.
- Collaborative editing (Team plans).
- Shared asset library (logos, themes, templates).
- Admin dashboard for team usage monitoring.
- Role-based permissions (Team Premier+).

## Pricing and limits

> *Pricing as of early 2026 — verify at surveymonkey.com/pricing as rates change frequently.*

| Plan | Price | Responses | Questions | Key features |
|---|---|---|---|---|
| **Basic (Free)** | $0 | 40/survey | 10/survey | Basic question types, SurveyMonkey branding, no export |
| **Standard Monthly** | $39/mo | 1,000/mo | Unlimited | Custom branding, data export, basic logic |
| **Advantage Annual** | $32/mo (billed annually) | 15,000/yr | Unlimited | Skip logic, A/B testing, cross-tabulation, data export |
| **Premier Annual** | $99/mo (billed annually) | 40,000/yr | Unlimited | Advanced branching, text analysis, phone support, custom URL |
| **Team Advantage** | ~$25-35/user/mo (annual, 3-user min) | 50,000/yr shared | Unlimited | Shared library, collaborative editing, admin controls |
| **Team Premier** | ~$55-75/user/mo (annual, 3-user min) | 100,000/yr shared | Unlimited | All Premier features + multilingual, custom branding, HIPAA compliance |
| **Enterprise** | Custom | Custom | Unlimited | SSO, API access, dedicated support, integrations, SLA |

**Overage**: Responses beyond plan limits cost $0.15 each.

**Plan-gated features to watch**:
- Data export: Advantage+
- Skip logic: Advantage+
- Advanced branching: Premier+
- Cross-tabulation: Advantage+
- Text analysis: Premier+
- API access: Enterprise (or private app with paid plan)
- HIPAA compliance: Team Premier+ (with BAA)
- Salesforce integration: Enterprise only
- SSO/SAML: Enterprise only

## Integrations

### Native integrations
- **CRM**: Salesforce (Enterprise only), HubSpot (via native connector)
- **Collaboration**: Slack, Microsoft Teams
- **Analytics**: Tableau, Power BI (via data export)
- **Marketing**: Mailchimp, Marketo, Pardot
- **Productivity**: Google Sheets, Microsoft Excel
- **Automation**: Zapier, Power Automate, Make

### Zapier triggers & actions
- **Triggers**: New survey response, new collector response
- **Actions**: Create collector, send survey invitation, create contact
- Common recipes: Survey response → Salesforce lead, Survey response → Slack notification, Survey response → Google Sheets row

### Webhooks
- Subscribe to events: `response_completed`, `response_disqualified`, `response_updated`, `collector_created`, `collector_updated`, `collector_deleted`
- Webhook callback receives a POST with event type, survey ID, response ID
- Subscription URL must be publicly accessible and return 2xx on HEAD request

### API
- REST v3, JSON responses, OAuth 2.0 authentication
- Base URL: `https://api.surveymonkey.com/v3/`
- EU datacenter: `https://api.eu.surveymonkey.com/v3/`
- See `references/surveymonkey-api-reference.md` for full endpoint documentation

## Data model

### Key objects and relationships
```
Account
  └── Surveys
        ├── Pages
        │     └── Questions (with answer options/rows/cols)
        ├── Collectors (weblink, email, sms, popup, embedded)
        │     ├── Messages (invite, reminder, thank_you)
        │     │     └── Recipients
        │     └── Responses
        └── Response data
              └── Pages → Questions → Answers

Contact Lists
  └── Contacts (email, phone, name, custom fields)
```

### Important IDs
- Survey ID, Page ID, Question ID — used to navigate survey structure
- Collector ID — used for distribution management
- Response ID — used for individual response operations
- Choice ID, Row ID, Col ID — used in answer data (matrix questions use row_id + col_id)

## Workflow setup

### Creating and distributing a survey
1. **Create survey**: Choose blank or template. Add questions, organize into pages.
2. **Add logic** (if needed): Set skip logic per question, or Advanced Branching for complex paths.
3. **Preview and test**: Use Preview mode to test all logic paths. Send test responses.
4. **Create collector**: Choose distribution method (email, web link, SMS, etc.).
5. **Configure collector**: Set close date, redirect URL, anonymous settings, response limit.
6. **Send/share**: Send email invitations, share web link, embed on website.
7. **Monitor**: Track response count, completion rate, and collector stats in real time.
8. **Analyze**: Use Analyze tab for charts, cross-tabs, and text analysis. Export as needed.

### Setting up email collector with tracking
1. Go to Collect Responses → Email.
2. Add recipients manually, from contacts, or paste email list.
3. Customize invitation email — personalize with merge fields (first name, etc.).
4. Schedule send or send immediately.
5. Set up reminder message — configure to auto-send to non-responders after X days.
6. Set up thank-you message — sent automatically after survey completion.
7. Monitor: track opens, clicks, bounces, opt-outs in collector stats.

### Integrating with Zapier
1. In Zapier, create new Zap with SurveyMonkey as trigger app.
2. Select trigger: "New Survey Response" or "New Response for Specific Collector."
3. Connect your SurveyMonkey account (OAuth flow).
4. Select the survey to monitor.
5. Configure action app (Salesforce, Slack, Google Sheets, etc.).
6. Map survey fields to action fields.
7. Test and activate.

## Deep dives

### Survey design best practices (in SurveyMonkey context)
- Keep surveys under 10 questions for transactional feedback, under 25 for research.
- Use SurveyMonkey's Question Bank for pre-validated, benchmarkable questions.
- Place demographic questions at the end (they're boring — don't lead with them).
- Use page breaks strategically — each page shows a progress bar update.
- Enable "Required" on key questions but sparingly — too many required questions cause abandonment.
- For NPS: use SurveyMonkey's built-in NPS question type — it auto-calculates your NPS score.

### Response rate optimization (SurveyMonkey-specific)
- **Embed first question in email**: Use the email collector's embedded question feature so respondents can answer the first question directly in the email.
- **Send reminders**: Set up automated reminders in the email collector for non-respondents (3-5 days after initial send).
- **Personalize**: Use custom variables and merge fields in invitations.
- **Mobile optimization**: SurveyMonkey surveys are mobile-responsive by default. Test on mobile before sending.
- **Timing**: Send business surveys Tue-Thu 10am-2pm local time. Consumer surveys perform well on weekday evenings and weekends.

### Data export and analysis
- **Export formats**: PDF (for sharing), Excel/CSV (for analysis), SPSS (for statistical software).
- **Bulk export**: Export all responses at once or filter by date range, collector, completion status.
- **API export**: Use `/v3/surveys/{id}/responses/bulk?simple=true` for machine-readable export with question text included.
- **Cross-tabulation**: Compare two questions side-by-side (e.g., satisfaction by department). Available on Advantage+.
- **Statistical significance**: SurveyMonkey highlights statistically significant differences in cross-tab results.
