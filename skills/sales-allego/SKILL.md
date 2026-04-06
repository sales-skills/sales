---
name: sales-allego
description: "Allego platform help — AI-powered revenue enablement with Modern Learning (video training, AI role-play, conversation intelligence), Modern Content (AI-recommended content, centralized library), Digital Sales Rooms (buyer-facing deal portals), meeting recording, coaching scorecards. Use when asking 'how do I do X in Allego', configuring content management, setting up learning paths, building digital sales rooms, using conversation intelligence, running AI role-plays, or integrating Allego with Salesforce/HubSpot/Dynamics. Do NOT use for general sales content strategy (use /sales-content), sales coaching frameworks (use /sales-coaching), cross-platform deal room strategy (use /sales-deal-room), or connecting tools via Zapier (use /sales-integration)."
argument-hint: "[describe what you need help with in Allego]"
license: MIT
version: 1.0.0
tags: [sales, enablement, content, coaching, platform]
---
# Allego Platform Help

Help the user with Allego platform questions — from Modern Learning and AI role-play through Modern Content, Digital Sales Rooms, conversation intelligence, coaching scorecards, and CRM integrations.

## Step 1 — Gather context

Ask the user:

1. **What area of Allego do you need help with?**
   - A) Modern Learning — video training, interactive content, learning paths, certifications, compliance training
   - B) AI Role-Play — AI-powered practice simulations with automated grading and feedback
   - C) Conversation Intelligence — call recording, AI analysis, key moment detection, coaching scorecards
   - D) Modern Content — content library, AI-recommended content, content sharing, engagement tracking
   - E) Digital Sales Rooms — buyer-facing content portals, stakeholder engagement tracking
   - F) Coaching — coaching scorecards, skill tracking, manager coaching workflows
   - G) Integrations — Salesforce, HubSpot, Microsoft Dynamics, LMS, call recording, BI
   - H) Admin — user management, permissions, SSO, reporting
   - I) Mobile App — iOS/Android app, offline access
   - J) Something else — describe it

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

## Step 3 — Allego platform reference

Provide module-by-module guidance based on the user's area:

### Modern Learning

- **What it is**: Video-based training and coaching platform — reps learn through bite-sized video content, interactive exercises, and peer-shared best practices
- **Video-based content**: Create and share training videos — product demos, pitch practice, best-practice recordings from top performers. Reps can record, upload, and share video content.
- **Interactive learning**: Combine video, quizzes, documents, and practice exercises into structured learning paths. Supports SCORM content for compliance training.
- **Learning paths**: Ordered sequences of content modules grouped by topic, role, or milestone (e.g., "New AE Onboarding", "Product Launch Training", "Compliance Certification").
- **Certifications**: Completion-based credentials — learners earn certifications by finishing required paths and passing assessments. Track certification status across the team.
- **Collaborative learning**: Peer-to-peer knowledge sharing — reps share what's working (discovery questions, objection handling, competitive insights) in channels for team consumption.
- **Agile content**: Quick-capture format for sharing timely knowledge — competitive updates, win stories, product changes — that doesn't require formal course creation.
- **Best practices**: Use video for skills that are best demonstrated (demos, call handling). Keep modules under 5 minutes — attention drops after that. Leverage peer content alongside formal training for authentic learning.

### AI Role-Play

- **What it is**: AI-powered practice simulations where reps rehearse customer conversations, objection handling, and discovery calls against an AI buyer persona
- **How it works**: Configure scenarios with buyer persona, context, and evaluation criteria. The AI plays the buyer role, responds dynamically to the rep's approach, and provides automated scoring and feedback.
- **Automated grading**: AI evaluates rep performance against defined criteria — discovery depth, objection handling quality, messaging alignment, talk-to-listen ratio.
- **Scenario types**: Discovery calls, product demos, objection handling, executive conversations, competitive displacement, renewal/upsell conversations.
- **Feedback**: Detailed post-practice feedback highlighting strengths and areas for improvement. Managers can review AI-graded sessions and add their own coaching notes.
- **Best practices**: Start with common scenarios (top 5 objections, standard discovery). Require monthly practice sessions — reps who practice regularly outperform. Use AI grading to identify systematic skill gaps across the team.

### Conversation Intelligence

- **What it is**: AI-powered analysis of sales calls and meetings — captures, transcribes, and analyzes real conversations to extract coaching insights and deal intelligence
- **Recording**: Integrates with Zoom, Microsoft Teams, and other conferencing tools. Automatic recording with participant consent management.
- **AI analysis**: Post-call analysis including talk-to-listen ratio, question count, topic detection, competitor mentions, pricing discussions, and next steps.
- **Key moments**: AI identifies critical moments in conversations — objection handling, budget discussions, timeline commitments, champion signals, risk indicators.
- **Coaching scorecards**: Structured evaluation forms for managers to score calls against methodology criteria (MEDDPICC, SPIN, Challenger). Track improvement over time.
- **Deal intelligence**: Aggregate conversation data across the deal cycle — identify which topics were covered, which stakeholders were engaged, and where gaps exist.
- **Best practices**: Review at least 2 calls per rep per month. Focus coaching on specific moments rather than general feedback. Use conversation data to update training content with real-world examples.

### Modern Content

- **What it is**: Centralized content management with AI-powered recommendations — the right content surfaces to the right rep at the right time based on deal context and buyer signals
- **Content library**: Centralized repository for all sales collateral — battle cards, case studies, one-pagers, decks, videos, playbooks. Organized by category, persona, deal stage.
- **AI recommendations**: AI surfaces relevant content based on the sales situation — deal stage, buyer persona, industry, competitive landscape. Reduces time reps spend searching for content.
- **Content sharing**: Share content with prospects via tracked links. See who opened, what they viewed, and how long they spent on each page.
- **Engagement tracking**: Analytics on content effectiveness — which content gets shared, opened, and correlated with won deals.
- **Content governance**: Version control, expiration dates, approval workflows. Prevent reps from sharing outdated content.
- **Best practices**: Tag content thoroughly for AI recommendations to work. Review content engagement data monthly and retire low-performing assets. Combine formal content with peer-shared agile content for a complete picture.

### Digital Sales Rooms

- **What it is**: Buyer-facing content portals for sharing curated content with prospects — a personalized hub for each deal where sellers organize materials and track buyer engagement
- **Key features**: Custom branding, content curation by deal stage and buyer role, engagement tracking per stakeholder, mutual action plans.
- **Multi-stakeholder engagement**: Share the room with multiple buyers. Track which stakeholder views which content and when — identify champions and non-engaged decision-makers.
- **Content curation**: Organize content by buyer role (executive summary for C-suite, technical docs for IT, ROI calculators for finance). Update content as the deal progresses.
- **Engagement analytics**: See who opened the room, what they viewed, time per item, downloads. Use engagement signals for follow-up timing and stakeholder prioritization.
- **Best practices**: Create rooms early in the deal cycle. Add stakeholder-specific content sections. Monitor engagement daily during active deal stages. Use engagement gaps to identify risks.

### Allego data model

Core concepts — understand these to navigate the platform:

| Object | What it is | Key details |
|---|---|---|
| **Channel** | Organization unit for content and learning | Channels group related content for specific teams, topics, or programs |
| **Content Item** | Individual piece of content in the library | Videos, documents, quizzes, assessments, SCORM packages |
| **Learning Path** | Ordered sequence of content items | Assigned to users/groups with due dates and completion tracking |
| **Digital Sales Room** | Buyer-facing content portal | Per-deal, per-stakeholder engagement tracking |
| **Conversation** | Recorded and analyzed sales call | Transcription, AI analysis, coaching scorecard |
| **Scorecard** | Coaching evaluation form | Criteria-based scoring (methodology alignment, skill assessment) |
| **User/Group** | Platform users and teams | Role-based permissions, SSO, SCIM provisioning |

### Integrations

| Integration | Type | What it does |
|---|---|---|
| **Salesforce** | Native (AppExchange) | Content recommendations in SF, activity logging, deal context sync |
| **HubSpot** | Native | Content sharing, engagement tracking, CRM data sync |
| **Microsoft Dynamics** | Native | Content access within Dynamics, activity logging |
| **Microsoft Teams** | Native | Content discovery and sharing within Teams |
| **Zoom** | Native | Meeting recording and conversation intelligence |
| **Slack** | Native | Content sharing and notifications |
| **LMS systems** | Native | SCORM content import, completion sync |
| **Call recording** | Native | Integration with call recording services |
| **BI / Data warehouse** | Native | Advanced reporting and analytics export |

### API

- **Status**: Allego has an API but it is **not publicly documented**. The API portal (exp-build.allego.com/api/) appears to require customer authentication.
- **Authentication**: API key authentication (per third-party sources)
- **Webhooks**: Supported per documentation references
- **SDKs**: Referenced but not publicly available
- **Important**: If the user needs API help, recommend contacting their Allego CSM or support team for API documentation access. The API is not self-service discoverable.

### Pricing (as of April 2026 — verify current pricing)

- Custom-quoted, no self-serve pricing published
- Typically $15-30/user/month depending on modules and team size
- Plan tiers map to product modules:
  1. **Modern Learning with Conversation Intelligence** — training, video coaching, call analysis, AI role-play
  2. **Modern Content** — content management, AI recommendations, engagement tracking
  3. **Digital Sales Rooms** — buyer-facing content portals
  4. **Full Suite** — all modules combined
- Typical 3-year contracts billed annually; 2-year and 1-year options available
- 10-20% discounts for yearly subscriptions
- AI capabilities and customer support included at no extra cost
- Lower per-user pricing available for channel/partner users and non-revenue roles

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — numbered steps to accomplish their goal in Allego
2. **Configuration recommendations** — specific settings, channel organization, and permission setup
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Verification** — how to confirm the change worked
5. **For API questions** — note that API docs require customer access and recommend contacting Allego support

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't assume all modules are available.** Allego is sold in module tiers — Modern Learning, Modern Content, Digital Sales Rooms, or Full Suite. A customer on the Learning tier won't have Digital Sales Rooms. Always check what's in their package.
- **Don't recommend Allego for small teams or self-serve.** Allego is enterprise-focused with custom-quoted pricing and multi-year contracts. For teams under 20 reps, suggest lighter alternatives (Loom + Google Drive, or a tool with self-serve pricing).
- **Android app has stability issues.** Multiple users report crashes on opening, especially on newer Android versions. If a user reports mobile issues, acknowledge this is a known pattern and suggest checking for app updates or contacting Allego support.
- **Content findability depends on thorough tagging.** Allego's AI content recommendations only work well when content is properly tagged with metadata (persona, deal stage, product line). Without tags, reps fall back to manual search — and the search function is noted as a weakness.
- **Video player is basic compared to YouTube.** Users report limitations in video playback — no thumbnails when scrubbing, limited format support. Set expectations if the user is planning a video-heavy training program.
- **Don't confuse Allego with Seismic.** Both are revenue enablement platforms competing in the same Gartner Magic Quadrant. Allego is stronger in video-based learning and AI role-play. Seismic is stronger in LiveDocs (dynamic document generation) and has a more mature API. If the user asks about LiveDocs or document generation, they likely need `/sales-seismic`.

## Step 5 — Related skills

- `/sales-content` — Sales content strategy, organization, and distribution across tools
- `/sales-coaching` — Sales coaching frameworks, onboarding, and training programs
- `/sales-seismic` — Seismic platform help (competing enablement platform — LiveDocs, Aura AI, Seismic Learning)
- `/sales-deal-room` — Multi-stakeholder deal room strategy
- `/sales-call-review` — Sales call coaching and review
- `/sales-integration` — Connecting Allego to CRM and other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Setting up onboarding in Allego
**User says**: "How do I build a 90-day onboarding program for new AEs in Allego?"
**Skill does**:
1. Recommends structuring a Learning Path with 3 phases (Learn / Practice / Perform) mapped to 30/60/90 day milestones
2. Walks through creating channels for each phase with appropriate content types (videos, quizzes, SCORM)
3. Explains how to use AI Role-Play for discovery and objection handling practice at the Practice phase
4. Sets up certification gates at each phase transition
5. Recommends using Conversation Intelligence to evaluate real calls during the Perform phase
**Result**: Full onboarding program structure with learning paths, AI practice, and performance measurement

### Example 2: Digital Sales Room for enterprise deal
**User says**: "I want to create a Digital Sales Room for a deal with 4 stakeholders"
**Skill does**:
1. Walks through room creation — naming, branding, initial content selection
2. Recommends content curation by stakeholder role (executive summary, technical docs, ROI calculator, case studies)
3. Sets up per-stakeholder engagement tracking to identify champion signals
4. Suggests engagement-based follow-up triggers (alert when CFO opens pricing section)
**Result**: Configured Digital Sales Room with role-based content and stakeholder tracking

### Example 3: Coaching program with conversation intelligence
**User says**: "How do I use Allego's conversation intelligence to build a coaching program?"
**Skill does**:
1. Explains how to set up call recording with Zoom/Teams integration
2. Walks through creating coaching scorecards aligned to their sales methodology (MEDDPICC, SPIN, etc.)
3. Recommends a weekly call review cadence — managers score 2 calls per rep using scorecards
4. Shows how to use AI-identified key moments to focus coaching on specific skills
5. Connects coaching insights to AI Role-Play scenarios for targeted practice
**Result**: Coaching program with call recording, scorecards, AI-assisted review, and targeted practice

## Troubleshooting

### Content not surfacing in AI recommendations
**Symptom**: Reps aren't seeing relevant content suggestions — AI recommendations feel random or unhelpful
**Cause**: Content not tagged with sufficient metadata (persona, deal stage, product line, industry). AI recommendations depend on rich content tagging to match content to context.
**Solution**: Audit content tagging coverage — ensure every item has persona, deal stage, and product line tags at minimum. Review the taxonomy for consistency (e.g., don't use both "Enterprise" and "Large Business" as tags). Retag high-value content first and measure recommendation accuracy improvement.

### Mobile app crashing on Android
**Symptom**: App crashes immediately on opening or shows spinning wheel then closes
**Cause**: Known issue, particularly on newer Android versions and beta OS releases. Allego's team has acknowledged and added diagnostics.
**Solution**: Check for app updates (v8.15.1+ includes diagnostics). Clear app cache and data. If running a beta Android OS, try on a stable release. Contact Allego support with device model and Android version — they're actively tracking this issue.

### Reps not engaging with training content
**Symptom**: Low completion rates on learning paths, reps skip or rush through content
**Cause**: Content is too long, not relevant to their role, or there's no accountability for completion
**Solution**: Keep video modules under 5 minutes. Use peer-shared agile content alongside formal training — reps engage more with content from their peers. Add certification gates that block progression until assessments are passed. Make completion visible to managers via reporting. Celebrate completions and top performers.
