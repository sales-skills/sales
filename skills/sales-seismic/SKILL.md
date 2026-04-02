---
name: sales-seismic
description: "Seismic platform help — Enablement Cloud, content management, Learning & Coaching, Aura AI, Digital Sales Rooms, Meeting Intelligence, LiveSend, LiveDocs, Programs, Seismic Exchange, API & integrations. Use when asking 'how do I do X in Seismic', configuring Seismic content library, setting up Learning paths, building Digital Sales Rooms, using LiveSend tracking, generating LiveDocs, managing enablement programs, using Aura AI, or integrating Seismic with CRM. Do NOT use for general sales content strategy (use /sales-content), sales coaching frameworks (use /sales-coaching), cross-platform deal room strategy (use /sales-deal-room), or connecting tools via Zapier (use /sales-integration)."
argument-hint: "[describe what you need help with in Seismic]"
license: MIT
version: 1.0.0
tags: [sales, enablement, content, platform]
---
# Seismic Platform Help

Help the user with Seismic platform questions — from content management and LiveDocs through Digital Sales Rooms, Learning & Coaching, Aura AI, Meeting Intelligence, LiveSend, Programs, API, and integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Seismic do you need help with?**
   - A) Content Management — library organization, workspaces, content profiles, permissions, version control
   - B) LiveDocs — dynamic document generation, templates, merge fields, Express vs Process
   - C) Learning & Coaching — training paths, lessons, quizzes, certifications, AI Role-Play (route to `/sales-coaching` for frameworks)
   - D) Aura AI — AI copilot, content recommendations, search assistance, meeting prep
   - E) Digital Sales Rooms — buyer-facing microsites, stakeholder engagement, deal content curation
   - F) Meeting Intelligence — recording, AI summaries, key moments, action items
   - G) LiveSend — tracked content delivery, engagement analytics
   - H) Programs & Tasks — enablement program management, milestones, completion tracking
   - I) API & Integrations — REST API, webhooks, CRM sync, iPaaS (route to `/sales-integration` for cross-platform)
   - J) Seismic Exchange — app marketplace, third-party extensions
   - K) Admin — users, groups, SCIM provisioning, permissions, billing
   - L) Something else — describe it

2. **What's your role?**
   - A) Sales rep / AE / BDR
   - B) Sales manager / team lead
   - C) Enablement / L&D
   - D) RevOps / Sales Ops
   - E) Admin / IT
   - F) Marketing
   - G) Other

3. **What are you trying to accomplish?** (describe your specific goal or question)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

Note: If the user needs a specialized skill, route them there with a brief explanation of why that skill is a better fit.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Sales content strategy / organization → `/sales-content`
- Sales coaching frameworks / onboarding programs → `/sales-coaching`
- Cross-platform deal room strategy → `/sales-deal-room`
- Sales call coaching / review → `/sales-call-review`
- Content engagement tracking across tools → `/sales-email-tracking`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge using the reference below.

## Step 3 — Seismic platform reference

Provide module-by-module guidance based on the user's area:

### Content Management

- **What it is**: The core content library — a centralized repository where sales, marketing, and enablement teams store, organize, and distribute content to sellers
- **Key concepts**: Content items live in the Library (read-only for most users) and are authored/edited in Workspaces (draft/staging areas). Content Profiles define the metadata schema. Content Classes create taxonomy categories for organization and filtering.
- **Content Profiles**: Metadata schemas attached to content — define fields like product line, buyer persona, deal stage, region. These drive targeted content recommendations and search filtering.
- **Content Classes**: Taxonomy categories (e.g., Case Study, One-Pager, Battlecard, ROI Calculator). Used for organizing and filtering content in the library.
- **Permissions**: Role-based access at the workspace, folder, and content level. Control who can view, edit, publish, and manage content.
- **Version control**: Content items support versioning — track changes, revert to previous versions, and see who made edits.
- **Content sync**: Sync content from cloud storage (Google Drive, SharePoint, Dropbox) into the Seismic library. Changes in the source propagate to Seismic.
- **Publishing workflow**: Content is authored in Workspaces, reviewed/approved, then published to the Library for seller consumption.
- **Best practices**: Define content profiles before loading content — retrofitting metadata is painful. Use content classes consistently. Establish a governance model with clear ownership per content category.

### LiveDocs

- **What it is**: Dynamic document generation engine — templates with merge fields that pull data from CRM or other data sources to auto-generate personalized documents (proposals, contracts, one-pagers, pricing sheets)
- **LiveDocs Express**: Quick, single-step document generation. One API call or UI action generates the document immediately. Best for simple personalization (name, company, deal details).
- **LiveDocs Process**: Multi-step workflows with review and approval stages. Best for complex documents requiring multiple stakeholders to contribute or approve sections before finalizing.
- **Merge fields**: Template placeholders that map to data source fields. Can pull from Salesforce, HubSpot, Dynamics, or custom data sources.
- **Output formats**: PDF, PowerPoint, Word — depends on the template type.
- **Data sources**: CRM (Salesforce, HubSpot, Dynamics), custom APIs, CSV uploads, manual entry.
- **Best practices**: Start with LiveDocs Express for simple use cases — only use Process when you genuinely need multi-step review/approval. Test merge field mapping thoroughly before rolling out templates to the full team.

### Learning & Coaching

- **What it is**: Seismic Learning (formerly Lessonly) — built-in training and coaching platform for onboarding, skill development, and certification
- **Lessons**: Individual learning modules — can include text, video, images, quizzes, and practice exercises. Assigned to individuals or groups.
- **Learning paths**: Ordered sequences of lessons grouped by topic or role (e.g., "New AE Onboarding", "Product Launch Training").
- **Quizzes & assessments**: Knowledge checks within lessons. Multiple choice, free response, and scenario-based questions.
- **Certifications**: Completion-based credentials — learners earn certifications by finishing required lessons/paths and passing assessments.
- **AI Role-Play Agent**: AI-powered practice simulations where reps can rehearse customer conversations, objection handling, and discovery calls. The AI plays the buyer role and provides feedback.
- **Coaching scorecards**: Structured evaluation forms for managers to assess rep performance on calls, demos, or role-plays. Track scores over time.
- **Skill tracking**: Monitor individual and team proficiency across defined competencies. Identify skill gaps and target training.
- **Important note**: Seismic Learning was formerly Lessonly. Older documentation, blog posts, and API references may still use the Lessonly name. The Learning API endpoint may differ from the main Seismic API.

### Aura AI

- **What it is**: Seismic's AI copilot that works across the entire platform — content recommendations, search assistance, meeting prep, and learning assistance
- **Content recommendations**: AI-powered suggestions for the best content to share based on deal context, buyer persona, and deal stage.
- **Search assistance**: Natural language search across the content library — "find the latest case study for healthcare CFOs."
- **Meeting prep**: AI-generated briefing documents pulling relevant content, CRM data, and recent engagement history before a meeting.
- **Learning assistance**: AI helps learners find relevant training materials and provides contextual guidance during onboarding.
- **Availability**: Accessible in Slack and Microsoft Teams as a conversational copilot, plus embedded in the Seismic web and mobile apps.

### Digital Sales Rooms (DSR)

- **What it is**: Buyer-facing microsites for sharing curated content with prospects — a personalized portal for each deal where sellers organize and share relevant materials
- **Key features**: Custom branding, content curation per deal stage, per-stakeholder engagement tracking, mutual action plans.
- **Multi-threading**: Share the DSR with multiple stakeholders at the buying organization. Track which stakeholder views which content and when.
- **Engagement tracking**: See who opened the DSR, which content they viewed, time spent per item, download activity. Use engagement signals to prioritize follow-ups.
- **Content curation**: Organize content by deal stage, buyer role, or topic within the DSR. Update content as the deal progresses.
- **Best practices**: Create a DSR early in the deal cycle. Add stakeholder-specific content (technical docs for IT, ROI calculators for finance). Monitor engagement to identify champion vs. detractor behavior.

### Meeting Intelligence

- **What it is**: AI-powered meeting recording and analysis — captures sales meetings, generates summaries, identifies key moments, and extracts action items
- **Recording**: Integrates with Zoom, Microsoft Teams, and other video conferencing tools. Automatically records meetings when configured.
- **AI summaries**: Post-meeting summaries highlighting key discussion points, decisions, and next steps.
- **Key moment detection**: AI identifies important moments — pricing discussions, objection handling, competitor mentions, commitment signals.
- **Action items**: Automatically extracts action items from the conversation and assigns them to participants.
- **Integration**: Syncs meeting intelligence data to CRM for deal context. Links recordings to opportunities.

### LiveSend

- **What it is**: Tracked content delivery — send content to prospects and track their engagement in real time
- **Tracking capabilities**: Opens, time spent per page, pages viewed, downloads, forwards. Know exactly how a prospect engages with your content.
- **Analytics**: Content effectiveness reporting — which content gets the most engagement, which prospects are most engaged.
- **Notifications**: Real-time alerts when a prospect opens or engages with shared content. Trigger timely follow-ups.
- **Best practices**: Use LiveSend for high-value content shares (proposals, case studies, pricing). Monitor engagement within 24 hours to time follow-up calls when the prospect is actively reviewing.

### Programs & Tasks

- **What it is**: Enablement program management — create structured programs with tasks, milestones, deadlines, and analytics to drive adoption and behavior change
- **Programs**: Organized initiatives (e.g., "Q1 Product Launch Enablement", "New Hire Onboarding Program") with defined goals and timelines.
- **Tasks**: Individual action items within a program — can be learning assignments, content reviews, certifications, or custom actions.
- **Milestones**: Key checkpoints within a program — track progress toward completion.
- **Analytics**: Program completion rates, task completion by individual/team, time to completion, impact metrics.
- **Best practices**: Keep programs focused — 5-10 tasks max. Set realistic deadlines. Use analytics to identify stragglers early.

### Seismic Exchange

- **What it is**: App marketplace for extending the Seismic platform — third-party integrations, custom apps, and pre-built connectors
- **Categories**: CRM connectors, content creation tools, analytics extensions, communication integrations.
- **Custom apps**: Build custom integrations using the Seismic API and publish them to your organization's Exchange.

### Seismic data model

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

### API & Integrations

For detailed API documentation including all endpoints, authentication, rate limits, and webhook event payloads, consult `references/seismic-api-reference.md`.

**Quick reference**: Developer portal at developer.seismic.com, OAuth 2.0 authentication (multiple flows), rate limit ~100 req/min (varies by endpoint). Key capabilities: content management, engagement tracking, reporting, user/group management (SCIM), LiveDocs generation, search, webhooks.

**Always reference `references/seismic-api-reference.md`** when answering API questions — point the user to it for the full endpoint catalog, authentication details, and rate limit specifics.

### Native integrations

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

### Pricing (as of March 2026 — verify current pricing)

- Enterprise-only, custom quotes — no self-serve pricing
- Typically $30-60/user/month, $20K-$120K+/year depending on modules and team size
- Multi-year contracts unlock 45-78% discounts
- ~4-month average onboarding with professional services included
- Features like Meeting Intelligence, Digital Sales Rooms, and LiveDocs may be separate add-ons or bundled depending on the contract

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Seismic
2. **Configuration recommendations** — specific settings to change, with navigation paths where possible
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — always include a pointer: "For the full endpoint catalog, authentication details, and rate limits, see `references/seismic-api-reference.md`."

## Gotchas

- **Don't assume all features are available on every plan.** Seismic is enterprise-only with custom packaging — features like Meeting Intelligence, DSRs, and LiveDocs may be separate add-ons or included depending on the contract. Always check what's in the customer's specific package.
- **Don't confuse LiveDocs Express with LiveDocs Process.** Express is for quick, single-step document generation (one API call). Process is for multi-step workflows with review/approval stages. Claude tends to recommend Process for simple use cases where Express is sufficient.
- **Don't recommend Seismic for small teams or startups.** Seismic is enterprise-focused with $20K+ annual contracts and 4-month onboarding. For teams under 50 reps, suggest lighter alternatives (Guru, Google Drive with structure, Notion).
- **Don't forget that Seismic Learning was formerly Lessonly.** Older documentation, blog posts, and API references may still use the Lessonly name. The Learning API endpoint may differ from the main Seismic API.
- **Don't overlook the Seismic-Highspot merger.** Announced in late 2025, this merger may significantly change the platform's feature set, pricing, and integrations. Flag any Seismic recommendations as potentially affected by this consolidation.

## Step 5 — Related skills

- `/sales-content` — Sales content strategy, organization, and distribution across tools
- `/sales-coaching` — Sales coaching frameworks, onboarding, and training programs
- `/sales-deal-room` — Multi-stakeholder deal room strategy
- `/sales-call-review` — Sales call coaching and review
- `/sales-email-tracking` — Content engagement tracking
- `/sales-integration` — Connecting Seismic to CRM and other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Content library organization
**User says**: "How do I set up a content library structure in Seismic for our 200-person sales team?"
**Skill does**:
1. Recommends a content profile taxonomy aligned to buyer journey (persona, deal stage, product line, region)
2. Explains workspace vs library distinction — workspaces for authoring, library for consumption
3. Walks through permission model design — role-based access by team, region, or content category
4. Outlines content governance workflow — ownership, review cadence, archival policy
**Result**: User has a blueprint for content library structure with profiles, workspaces, permissions, and governance

### Example 2: Digital Sales Room for enterprise deal
**User says**: "I want to create a Digital Sales Room for an enterprise deal with 6 stakeholders"
**Skill does**:
1. Walks through DSR creation — naming, branding, initial content selection
2. Explains how to curate content by stakeholder role (executive summary for C-suite, technical docs for IT, ROI calculator for finance)
3. Sets up per-stakeholder engagement tracking to identify champion and detractor signals
4. Recommends follow-up triggers based on engagement patterns (e.g., alert when CFO views pricing sheet)
**Result**: User has a DSR configured for multi-stakeholder engagement with role-based content and tracking

### Example 3: API-driven LiveDocs generation
**User says**: "How do I use the Seismic API to auto-generate personalized proposals via LiveDocs?"
**Skill does**:
1. Points to `references/seismic-api-reference.md` for full API documentation
2. Explains LiveDocs Express endpoint for single-step generation vs Process for multi-step workflows
3. Walks through merge field mapping from CRM data source to template placeholders
4. Covers OAuth 2.0 authentication setup and output format options (PDF, PowerPoint, Word)
**Result**: User knows the API approach, auth method, Express vs Process distinction, and merge field mapping

## Troubleshooting

### Content not appearing for reps
**Symptom**: Reps can't find content in the library that marketing has uploaded
**Cause**: Content profiles not assigned, permissions restricting access, content still in workspace (not published), or targeted content rules excluding the user's segment
**Solution**: Check content profile assignment. Verify the user's role has access to the relevant folder/workspace. Confirm content is published to the library (not stuck in draft/review). Review targeted content rules to ensure the user's attributes match the targeting criteria.

### LiveDoc generation failing
**Symptom**: LiveDoc generation returns errors or produces documents with missing data
**Cause**: Merge field mapping broken, data source connection expired, template syntax error, or required CRM fields empty
**Solution**: Verify merge field mapping in the template settings — ensure each placeholder maps to a valid data source field. Check the data source connection (CRM auth may have expired). Validate template syntax in a test generation. Confirm the source CRM record has values for all required merge fields.

### Learning completion not syncing to CRM
**Symptom**: Reps complete lessons/certifications in Seismic Learning but completion status doesn't appear in Salesforce/CRM
**Cause**: Integration settings misconfigured, SCIM provisioning not mapping users correctly, or activity logging disabled
**Solution**: Check the Seismic-CRM integration settings — ensure Learning activity sync is enabled. Verify SCIM user provisioning is mapping Seismic Learning users to the correct CRM user records. Review the activity logging configuration to confirm completion events are included in the sync scope.
