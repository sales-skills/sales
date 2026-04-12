# Seismic Platform Guide

## Content Management

- **What it is**: The core content library — a centralized repository where sales, marketing, and enablement teams store, organize, and distribute content to sellers
- **Key concepts**: Content items live in the Library (read-only for most users) and are authored/edited in Workspaces (draft/staging areas). Content Profiles define the metadata schema. Content Classes create taxonomy categories for organization and filtering.
- **Content Profiles**: Metadata schemas attached to content — define fields like product line, buyer persona, deal stage, region. These drive targeted content recommendations and search filtering.
- **Content Classes**: Taxonomy categories (e.g., Case Study, One-Pager, Battlecard, ROI Calculator). Used for organizing and filtering content in the library.
- **Permissions**: Role-based access at the workspace, folder, and content level. Control who can view, edit, publish, and manage content.
- **Version control**: Content items support versioning — track changes, revert to previous versions, and see who made edits.
- **Content sync**: Sync content from cloud storage (Google Drive, SharePoint, Dropbox) into the Seismic library. Changes in the source propagate to Seismic.
- **Publishing workflow**: Content is authored in Workspaces, reviewed/approved, then published to the Library for seller consumption.
- **Best practices**: Define content profiles before loading content — retrofitting metadata is painful. Use content classes consistently. Establish a governance model with clear ownership per content category.

## LiveDocs

- **What it is**: Dynamic document generation engine — templates with merge fields that pull data from CRM or other data sources to auto-generate personalized documents (proposals, contracts, one-pagers, pricing sheets)
- **LiveDocs Express**: Quick, single-step document generation. One API call or UI action generates the document immediately. Best for simple personalization (name, company, deal details).
- **LiveDocs Process**: Multi-step workflows with review and approval stages. Best for complex documents requiring multiple stakeholders to contribute or approve sections before finalizing.
- **Merge fields**: Template placeholders that map to data source fields. Can pull from Salesforce, HubSpot, Dynamics, or custom data sources.
- **Output formats**: PDF, PowerPoint, Word — depends on the template type.
- **Data sources**: CRM (Salesforce, HubSpot, Dynamics), custom APIs, CSV uploads, manual entry.
- **Best practices**: Start with LiveDocs Express for simple use cases — only use Process when you genuinely need multi-step review/approval. Test merge field mapping thoroughly before rolling out templates to the full team.

## Learning & Coaching

- **What it is**: Seismic Learning (formerly Lessonly) — built-in training and coaching platform for onboarding, skill development, and certification
- **Lessons**: Individual learning modules — can include text, video, images, quizzes, and practice exercises. Assigned to individuals or groups.
- **Learning paths**: Ordered sequences of lessons grouped by topic or role (e.g., "New AE Onboarding", "Product Launch Training").
- **Quizzes & assessments**: Knowledge checks within lessons. Multiple choice, free response, and scenario-based questions.
- **Certifications**: Completion-based credentials — learners earn certifications by finishing required lessons/paths and passing assessments.
- **AI Role-Play Agent**: AI-powered practice simulations where reps can rehearse customer conversations, objection handling, and discovery calls. The AI plays the buyer role and provides feedback.
- **Coaching scorecards**: Structured evaluation forms for managers to assess rep performance on calls, demos, or role-plays. Track scores over time.
- **Skill tracking**: Monitor individual and team proficiency across defined competencies. Identify skill gaps and target training.
- **Important note**: Seismic Learning was formerly Lessonly. Older documentation, blog posts, and API references may still use the Lessonly name. The Learning API endpoint may differ from the main Seismic API.

## Aura AI

- **What it is**: Seismic's AI copilot that works across the entire platform — content recommendations, search assistance, meeting prep, and learning assistance
- **Content recommendations**: AI-powered suggestions for the best content to share based on deal context, buyer persona, and deal stage.
- **Search assistance**: Natural language search across the content library — "find the latest case study for healthcare CFOs."
- **Meeting prep**: AI-generated briefing documents pulling relevant content, CRM data, and recent engagement history before a meeting.
- **Learning assistance**: AI helps learners find relevant training materials and provides contextual guidance during onboarding.
- **Availability**: Accessible in Slack and Microsoft Teams as a conversational copilot, plus embedded in the Seismic web and mobile apps.

## Digital Sales Rooms (DSR)

- **What it is**: Buyer-facing microsites for sharing curated content with prospects — a personalized portal for each deal where sellers organize and share relevant materials
- **Key features**: Custom branding, content curation per deal stage, per-stakeholder engagement tracking, mutual action plans.
- **Multi-threading**: Share the DSR with multiple stakeholders at the buying organization. Track which stakeholder views which content and when.
- **Engagement tracking**: See who opened the DSR, which content they viewed, time spent per item, download activity. Use engagement signals to prioritize follow-ups.
- **Content curation**: Organize content by deal stage, buyer role, or topic within the DSR. Update content as the deal progresses.
- **Best practices**: Create a DSR early in the deal cycle. Add stakeholder-specific content (technical docs for IT, ROI calculators for finance). Monitor engagement to identify champion vs. detractor behavior.

## Meeting Intelligence

- **What it is**: AI-powered meeting recording and analysis — captures sales meetings, generates summaries, identifies key moments, and extracts action items
- **Recording**: Integrates with Zoom, Microsoft Teams, and other video conferencing tools. Automatically records meetings when configured.
- **AI summaries**: Post-meeting summaries highlighting key discussion points, decisions, and next steps.
- **Key moment detection**: AI identifies important moments — pricing discussions, objection handling, competitor mentions, commitment signals.
- **Action items**: Automatically extracts action items from the conversation and assigns them to participants.
- **Integration**: Syncs meeting intelligence data to CRM for deal context. Links recordings to opportunities.

## LiveSend

- **What it is**: Tracked content delivery — send content to prospects and track their engagement in real time
- **Tracking capabilities**: Opens, time spent per page, pages viewed, downloads, forwards. Know exactly how a prospect engages with your content.
- **Analytics**: Content effectiveness reporting — which content gets the most engagement, which prospects are most engaged.
- **Notifications**: Real-time alerts when a prospect opens or engages with shared content. Trigger timely follow-ups.
- **Best practices**: Use LiveSend for high-value content shares (proposals, case studies, pricing). Monitor engagement within 24 hours to time follow-up calls when the prospect is actively reviewing.

## Programs & Tasks

- **What it is**: Enablement program management — create structured programs with tasks, milestones, deadlines, and analytics to drive adoption and behavior change
- **Programs**: Organized initiatives (e.g., "Q1 Product Launch Enablement", "New Hire Onboarding Program") with defined goals and timelines.
- **Tasks**: Individual action items within a program — can be learning assignments, content reviews, certifications, or custom actions.
- **Milestones**: Key checkpoints within a program — track progress toward completion.
- **Analytics**: Program completion rates, task completion by individual/team, time to completion, impact metrics.
- **Best practices**: Keep programs focused — 5-10 tasks max. Set realistic deadlines. Use analytics to identify stragglers early.

## Seismic Exchange

- **What it is**: App marketplace for extending the Seismic platform — third-party integrations, custom apps, and pre-built connectors
- **Categories**: CRM connectors, content creation tools, analytics extensions, communication integrations.
- **Custom apps**: Build custom integrations using the Seismic API and publish them to your organization's Exchange.

## Data Model

Core objects — understand these to navigate the platform and work with the API:

| Object | What it is | Key fields |
|---|---|---|
| **Content** | Item in the content library | id, name, type, contentProfileId, version, status |
| **Workspace** | Authoring/editing space for content | id, name, permissions, publishedContent |
| **LiveDoc** | Dynamic document template | id, name, mergeFields, dataSource, outputFormat |
| **Digital Sales Room** | Buyer-facing deal microsite | id, name, recipients, contentItems, analytics |
| **Lesson** | Learning module | id, title, type, content, assignees, completionRate |
| **Program** | Enablement program | id, name, tasks, milestones, analytics |
| **LiveSend Link** | Tracked content delivery | id, contentId, recipientEmail, views, timeSpent |

## API & Integrations

For detailed API documentation including all endpoints, authentication, rate limits, and webhook event payloads, consult `references/seismic-api-reference.md`.

**Quick reference**: Developer portal at developer.seismic.com, OAuth 2.0 authentication (multiple flows), rate limit ~100 req/min (varies by endpoint). Key capabilities: content management, engagement tracking, reporting, user/group management (SCIM), LiveDocs generation, search, webhooks.

**Always reference `references/seismic-api-reference.md`** when answering API questions — point the user to it for the full endpoint catalog, authentication details, and rate limit specifics.

## Native Integrations

| Integration | Type | What it does |
|---|---|---|
| **Salesforce** | Native | CRM sync, content recommendations in SF, activity logging |
| **HubSpot** | Native | Content sharing, engagement tracking, CRM data sync |
| **Microsoft Dynamics** | Native | Content access within Dynamics, activity logging |
| **Microsoft 365/Teams** | Native | Content access in Outlook/Teams, Aura AI in Teams |
| **Google Workspace** | Native | Google Slides integration, content discovery |
| **Slack** | Native | Aura AI copilot, content search and sharing |
| **Zoom** | Native | Meeting recording, intelligence, content sharing |
| **Gong** | Native | Call recording access, conversation intelligence |
| **Salesloft** | Native | Content insertion in sequences, engagement data |
| **Snowflake** | Native | Data warehouse for advanced reporting |
| **Tray.io / Workato** | iPaaS | Custom workflow automation |

## Pricing (as of March 2026 — verify current pricing)

- Enterprise-only, custom quotes — no self-serve pricing
- Typically $30-60/user/month, $20K-$120K+/year depending on modules and team size
- Multi-year contracts unlock 45-78% discounts
- ~4-month average onboarding with professional services included
- Features like Meeting Intelligence, Digital Sales Rooms, and LiveDocs may be separate add-ons or bundled depending on the contract
