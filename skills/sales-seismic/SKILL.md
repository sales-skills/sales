---
name: sales-seismic
description: "Seismic platform help — Enablement Cloud, content management, Learning & Coaching, Aura AI, Digital Sales Rooms, Meeting Intelligence, LiveSend, LiveDocs, Programs, Seismic Exchange, API & integrations. Use when reps can't find the right content in Seismic, Learning paths have low completion rates, Digital Sales Rooms aren't getting buyer engagement, LiveSend links aren't being opened, LiveDocs templates are breaking, enablement programs aren't moving the needle, or Seismic CRM sync is out of date. Do NOT use for general sales content strategy (use /sales-content), sales coaching frameworks (use /sales-coaching), cross-platform deal room strategy (use /sales-deal-room), or connecting tools via Zapier (use /sales-integration)."
argument-hint: "[describe what you need help with in Seismic]"
license: MIT
version: 1.0.0
tags: [sales, enablement, content, platform]
github: "https://github.com/seismic"
---
# Seismic Platform Help

Help the user with Seismic platform questions — from content management and LiveDocs through Digital Sales Rooms, Learning & Coaching, Aura AI, Meeting Intelligence, LiveSend, Programs, API, and integrations.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What area of Seismic do you need help with?**
   - A) Content Management — library organization, workspaces, content profiles, permissions, version control
   - B) LiveDocs — dynamic document generation, templates, merge fields, Express vs Process
   - C) Learning & Coaching — training paths, lessons, quizzes, certifications, AI Role-Play (for frameworks, hand off: `/sales-coaching {your question}`)
   - D) Aura AI — AI copilot, content recommendations, search assistance, meeting prep
   - E) Digital Sales Rooms — buyer-facing microsites, stakeholder engagement, deal content curation
   - F) Meeting Intelligence — recording, AI summaries, key moments, action items
   - G) LiveSend — tracked content delivery, engagement analytics
   - H) Programs & Tasks — enablement program management, milestones, completion tracking
   - I) API & Integrations — REST API, webhooks, CRM sync, iPaaS (for cross-platform, hand off: `/sales-integration {your question}`)
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

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

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

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

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
