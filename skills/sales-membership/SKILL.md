---
name: sales-membership
description: "Builds and manage membership sites and online courses — course structure, content delivery, pricing models, retention, community, and platform selection. Use when members keep canceling, course completion rates are low, unsure how to price a membership, drip content isn't engaging subscribers, need to pick a course platform, or struggling to structure a membership site. Do NOT use for webinar-based selling (use /sales-webinar), checkout and payment setup (use /sales-checkout), email marketing to members (use /sales-email-marketing), or SendPulse-specific help (use /sales-sendpulse). For Groove-specific help, use /sales-groove."
argument-hint: "[describe your membership or course question — e.g., 'structure a 12-week course' or 'reduce membership churn']"
license: MIT
version: 1.0.0
tags: [sales, membership, courses, community]
---
# Membership Sites & Online Courses

You help users build, launch, and grow membership sites and online courses. You cover course design, content delivery strategy, pricing models, member retention, community building, and platform selection across GrooveMember, Kajabi, Teachable, Thinkific, Podia, Mighty Networks, Circle, Skool, WordPress (LearnDash/MemberPress), and Patreon.

---
## Step 1: Gather Context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Before recommending anything, ask clarifying questions to understand the situation:

- **Format**: Is this a standalone course, an ongoing membership, a community, or a hybrid?
- **Topic & niche**: What subject matter? How competitive is the space?
- **Audience level**: Beginners, intermediates, advanced practitioners, or mixed?
- **Pricing model**: One-time purchase, monthly subscription, annual plan, tiered access, or free with upsell?
- **Existing content**: Do they already have content (videos, PDFs, frameworks) or are they starting from scratch?
- **Existing audience**: Email list size, social following, current customers?
- **Tech stack**: Are they already on a platform? Do they need migration?
- **Revenue goal**: What's the target monthly/annual revenue?
- **Team**: Solo creator or team with support staff, video editors, community managers?

Do not skip this step. The right strategy depends heavily on the answers.

---
## Step 2: Strategy

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

---
## Step 3: Actionable Guidance

### Course Outline Template

Use this structure as a starting point:

```
Course: [Course Name]
Transformation: [What the student can do after completing the course]

Module 1: Foundation (Days 1–7)
  Lesson 1.1: [Topic] — [Outcome]
  Lesson 1.2: [Topic] — [Outcome]
  Lesson 1.3: [Topic] — [Outcome]
  Action item: [Specific deliverable]
  Milestone: [Badge/certificate/unlock]

Module 2: [Core Skill] (Days 8–14)
  ...

Module 3: [Application] (Days 15–21)
  ...

(Repeat for each module)

Final Module: Implementation & Next Steps
  Lesson: Putting it all together
  Lesson: Common mistakes and how to avoid them
  Lesson: What to do next
  Action item: Complete capstone project
  Milestone: Course completion certificate
```

### Lesson Format

Each lesson should follow this structure:

1. **Hook** (30 seconds): Why this lesson matters, what they will learn
2. **Core teaching** (5–12 minutes): The main content, with examples
3. **Summary** (1 minute): Key takeaways
4. **Action item**: One specific thing to do before the next lesson
5. **Supporting materials**: Downloadable worksheet, template, or checklist

### Drip Schedule Recommendations

- **12-week course**: Use 3–4 modules (each spanning 3–4 weeks), releasing 2–3 lessons per week within the active module. For example, a 4-module course releases Module 1 lessons over weeks 1–3, Module 2 over weeks 4–6, etc. This provides a clear thematic arc while maintaining weekly engagement.
- **Monthly membership**: Drop new content weekly (e.g., Tuesday video, Thursday resource). One major monthly drop (masterclass, guest expert).
- **Cohort-based**: All content for the current week available Monday. Live session midweek. Assignment due Friday.

### Onboarding Sequence

Create a 5-email onboarding sequence for new members:

1. **Immediately**: Welcome + login credentials + "start here" link
2. **Day 1**: Quick win lesson — guide them to the single most valuable piece of content
3. **Day 3**: Community introduction — prompt them to introduce themselves
4. **Day 5**: Progress check — ask if they completed the quick win, offer help
5. **Day 7**: Full orientation — overview of what's available, how to get the most value, upcoming live events

### Community Setup

- Choose between forum-style (Circle, Discourse), feed-style (Skool, Mighty Networks), or chat-style (Slack, Discord)
- Create clear categories/channels: Introductions, Wins, Q&A, Accountability, Off-Topic
- Seed activity yourself for the first 30 days — post daily, respond to every comment
- Appoint community champions or moderators early
- Run weekly engagement prompts or challenges

### Progress Milestones

- Completion badges at each module boundary
- Certificates at course completion (Teachable, Thinkific, and Kajabi offer built-in certificates)
- Unlock bonus content as a reward for completing milestones
- Leaderboards for community engagement (Skool has this built in)

### Win-Back Campaigns for Churned Members

- **Day 30 post-cancellation**: "We miss you" email with a summary of new content added since they left
- **Day 60**: Offer a limited-time discount to re-subscribe (e.g., 30% off for 3 months)
- **Day 90**: Final attempt with a compelling new feature, content drop, or bonus

---
## Gotchas

1. **Over-building before launching**: Do not build 12 modules before you have paying students. Launch with Module 1 ready and build as you go. Pre-selling validates demand.
2. **Underpricing**: New creators consistently price too low. Low prices attract less committed students with higher support demands. Test higher prices — conversion rate often stays the same.
3. **Ignoring onboarding**: Most churn happens in the first 30 days. If members do not engage in week 1, they are unlikely to stay. Invest heavily in the onboarding experience.
4. **No community, no retention**: Content alone is not enough for a membership. Members stay for the community and relationships. If you skip community, expect higher churn.
5. **Platform migration is painful**: Switching platforms means re-uploading content, migrating members, updating payment links, and risking broken access. Choose carefully upfront, but do not let analysis paralysis stop you from launching.

---
- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related Skills

- `/sales-getresponse` — GetResponse platform help (Course Creator, premium newsletters, webinars)
- `/sales-groove` — Groove.cm platform-specific guidance (GrooveMember, GrooveSell, GroovePages)
- `/sales-kit` — Kit platform help (paid newsletters, Commerce, Creator Recommendations)
- `/sales-sendpulse` — SendPulse platform help (EDU courses, Automation 360, email, chatbots)
- `/sales-ghost` — Ghost platform help (publishing, newsletters, memberships, Stripe, Mailgun, API, migration)
- `/sales-newsletter` — Newsletter monetization (paid subscriptions, sponsorships, premium tiers)
- `/sales-digital-products` — Selling digital products (ebooks, templates, courses)
- `/sales-checkout` — Payment pages, order bumps, upsells, and checkout optimization
- `/sales-email-marketing` — Email sequences, automations, and campaigns for member communication
- `/sales-webinar` — Webinar-based selling and live launch events
- `/sales-funnel` — Sales funnel strategy and funnel building
- `/sales-podia` — Podia platform help (courses, downloads, memberships, coaching, email)
- `/sales-payhip` — Payhip platform help (courses, memberships, coaching, digital downloads)
- `/sales-lemonsqueezy` — Lemon Squeezy platform help (subscription billing, license keys, tax compliance as MoR)
- `/sales-do` — Route to any sales skill by describing what you need

---
## Examples

### Example 1: Structuring a 12-Week Course

**User**: "I want to create a 12-week online course teaching freelancers how to land their first $5K client."

**Approach**:
- Model: One-time course with optional upsell to a monthly mastermind
- Structure: 4 modules (each spanning 3 weeks), 3–4 lessons per module, drip 1–2 lessons per week
- Pricing: $497 one-time (or 3 payments of $197)
- Platform: Teachable or GrooveMember depending on existing stack
- Key modules: Positioning, Portfolio, Outreach, Proposals, Closing, Delivery
- Quick win in Module 1: Rewrite their freelancer bio using the provided template
- Capstone: Submit a real proposal to a prospective client

### Example 2: Reducing Membership Churn

**User**: "My membership site has 40% annual churn. Members seem to disengage after month 3."

**Approach**:
- Diagnose: Run an exit survey to identify the top 3 cancellation reasons
- Onboarding: Audit the first-7-day experience — is there a clear quick win?
- Engagement: Add a weekly live call or challenge to re-engage members at the 60-day mark
- Annual push: Introduce an annual plan with 2 months free to lock in commitment
- Community: If no community exists, add one. If it exists, check if it is active or a ghost town
- Win-back: Launch a 30/60/90-day win-back email sequence for canceled members
- Target: Reduce monthly churn from ~4.2% to under 3% (which drops annual churn from 40% to ~31%)

### Example 3: Setting Up a Course in Groove

**User**: "I want to set up a course in Groove with drip content and two access levels — Basic and Premium."

**Approach**:
- In GrooveMember: Create a new membership site with two access levels (Basic, Premium)
- Basic gets Modules 1–4, Premium gets all 8 modules plus bonus resources
- Drip schedule: One module per week, starting from the member's signup date
- In GrooveSell: Create two products — Basic ($197) and Premium ($397) — and link each to the corresponding access level
- In GrooveMail: Set up an onboarding automation triggered by purchase, with drip reminder emails matching the content unlock schedule
- In GroovePages: Build a sales page with a comparison table showing Basic vs. Premium features

---
## Troubleshooting

### "Students aren't completing the course"

- **Check lesson length**: If videos exceed 15 minutes, break them into shorter segments. Completion drops sharply after 10 minutes.
- **Add action items**: Passive consumption leads to abandonment. Every lesson needs a concrete next step.
- **Use progress indicators**: Visible progress bars and completion percentages motivate continued engagement.
- **Send reminder emails**: Automated nudges for inactive students (e.g., "You're 60% done — keep going!") can re-engage dropoffs.

### "Members cancel after the first month"

- **Audit onboarding**: Did they log in? Did they consume the quick-win content? If not, the onboarding sequence failed.
- **Check value delivery**: Is there enough new content or activity each month to justify the recurring fee?
- **Survey churned members**: Ask directly. The top reasons are usually "didn't have time" (engagement problem), "not enough value" (content problem), or "too expensive" (positioning problem).
- **Introduce a commitment device**: Offer a discount for 3-month or annual prepayment to get past the first-month danger zone.

### "I can't decide which platform to use"

- **Already in Groove ecosystem**: Use GrooveMember. The native integration with GrooveSell and GrooveMail eliminates complexity.
- **Want all-in-one simplicity**: Kajabi if budget allows, Podia if budget is tight.
- **Community is the core value**: Skool or Mighty Networks.
- **Maximum control and ownership**: WordPress + LearnDash + MemberPress.
- **Just starting out, budget-conscious**: Thinkific (has a free plan) or Teachable (affordable starter plan).
- **Do not overthink it**: Pick a platform, launch, and migrate later if needed. Launching beats optimizing.
