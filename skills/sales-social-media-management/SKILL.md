---
name: sales-social-media-management
description: "Social media management strategy — publishing, scheduling, content calendars, engagement workflows, analytics, team collaboration, tool comparison (Sprout Social, Hootsuite, Buffer, Agorapulse, Sendible, Later, Brandwatch, Meltwater Engage, Influencity, Pallyy, Statusbrew, Sociality.io, Loomly, Planable). Use when social posts aren't getting engagement, you're spending too much time manually publishing, your content calendar is chaotic, you don't know when to post for best reach, DMs and comments are piling up unanswered, team approval workflows are slowing you down, or you can't prove social media ROI. Do NOT use for platform-specific config (use /sales-later, /sales-sproutsocial, /sales-meltwater, /sales-brandwatch, or /sales-influencity), social listening strategy (use /sales-social-listening), influencer marketing (use /sales-influencer-marketing), or paid social ads (use /sales-retargeting or /sales-b2b-advertising)."
argument-hint: "[describe your social media management question — e.g., 'which tool for my 3-person team' or 'how to set up a content approval workflow']"
license: MIT
version: 1.0.0
tags: [sales, social-media-management, publishing, scheduling, strategy]
---
# Social Media Management Strategy

Helps the user plan and execute social media management — from choosing the right tool and setting up publishing workflows through engagement management, analytics, and team collaboration.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Choosing a social media management tool
   - B) Setting up a publishing workflow and content calendar
   - C) Optimizing post timing and frequency
   - D) Managing engagement (inbox, comments, DMs)
   - E) Team collaboration and approval workflows
   - F) Analytics and reporting
   - G) Something else — describe it

2. **Team size and structure?**
   - A) Solo creator / founder
   - B) Small team (2-5 people)
   - C) Mid-size team (5-20 people)
   - D) Agency managing multiple clients
   - E) Enterprise with multiple brands/regions

3. **Which social networks?**
   - A) Instagram + Facebook (Meta-focused)
   - B) LinkedIn + X/Twitter (B2B-focused)
   - C) TikTok + YouTube (video-focused)
   - D) All major networks
   - E) Niche — Reddit, Pinterest, Threads, Bluesky

4. **Budget range?**
   - A) Free / under $30/mo
   - B) Mid-range ($30-200/mo)
   - C) Professional ($200-500/mo)
   - D) Enterprise ($500+/mo)
   - E) Not sure yet

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- Later setup, config, or features → `/sales-later`
- Sprout Social setup, config, or features → `/sales-sproutsocial`
- Meltwater Engage or social publishing in Meltwater → `/sales-meltwater`
- Brandwatch social media management → `/sales-brandwatch`
- Influencity Social Hub or influencer marketing → `/sales-influencity`
- Social listening (monitoring, sentiment, crisis) → `/sales-social-listening`
- Influencer marketing → `/sales-influencer-marketing`
- Employee advocacy → `/sales-employee-advocacy`
- Paid social advertising → `/sales-retargeting` or `/sales-b2b-advertising`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Social media management strategy reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Tool selection** — recommend the best platform for their team, budget, and needs
2. **Publishing setup** — content calendar, posting cadence, batch workflow, optimal timing
3. **Engagement workflow** — inbox management, triage, response time targets, saved replies
4. **Team setup** — roles, permissions, approval workflows, collaboration best practices
5. **Analytics** — key metrics, reporting cadence, proving ROI to stakeholders

## Gotchas

*Best-effort from research — review these, especially items about pricing and features that may change.*

- **Per-seat pricing can explode.** Sprout Social ($199-399/seat), Hootsuite ($99/mo base), and enterprise tools charge per user. A 5-person team on Sprout Professional = $1,500/month. Budget for team size, not just features.
- **"Social listening" means different things.** Sprout and Hootsuite call it social listening. But their listening is social-focused — it doesn't cover news, broadcast, or print. For full media monitoring, you need Meltwater or Brandwatch.
- **Free tiers are very limited.** Buffer's free plan covers 3 channels with basic scheduling. Most other tools' free tiers are trials, not permanent. Don't choose a tool based on free tier capabilities.
- **Network API changes break features.** Instagram, X, and TikTok regularly change their APIs. Features that work today (scheduling Reels, auto-publishing Stories) may break tomorrow. Choose tools with a track record of fast API adaptation.
- **Analytics don't aggregate perfectly.** Each network defines "engagement" and "impressions" differently. Cross-network comparison charts in any tool are approximations, not exact comparisons. Focus on trends within networks, not absolute cross-network numbers.
- **Approval workflows slow publishing.** They're essential for brand safety but can kill timeliness. Set up fast-track paths for time-sensitive content (trending topics, breaking news) alongside standard approval flows.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-later` — Later platform help — scheduling, visual planner, Linkin.bio, analytics, Later Influence
- `/sales-sproutsocial` — Sprout Social platform help — Publishing, Smart Inbox, Analytics, Listening, API
- `/sales-meltwater` — Meltwater platform help — media intelligence, social publishing (Engage), influencer marketing
- `/sales-brandwatch` — Brandwatch platform help — Social Media Management module, Consumer Intelligence
- `/sales-influencity` — Influencity platform help — influencer marketing + Social Hub (content calendar, inbox, approval workflows)
- `/sales-social-listening` — Social listening strategy — monitoring, sentiment, crisis detection, tool comparison
- `/sales-employee-advocacy` — Employee advocacy programs — content curation, gamification, compliance
- `/sales-influencer-marketing` — Influencer marketing strategy — discovery, vetting, campaigns, ROI
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Choose a social media management tool
**User says**: "I run marketing for a DTC brand with a 3-person team. We mostly post on Instagram and TikTok. Budget is around $100/month."
**Skill does**:
1. Evaluates budget constraint — eliminates Sprout ($597/mo for 3 seats)
2. Compares Agorapulse ($49/mo), Buffer (~$30/mo for 6 channels), and Later ($25/mo)
3. Recommends Agorapulse for the unified inbox and approval features, or Buffer if they just need simple scheduling
4. Notes Later if Instagram visual planning is their top priority
**Result**: Clear recommendation matched to budget, team size, and network focus

### Example 2: Set up a content calendar workflow
**User says**: "I need to plan and schedule content for 5 social channels, and my team keeps missing posts"
**Skill does**:
1. Designs a weekly content calendar with themes and posting cadence per channel
2. Recommends batch creation workflow (create content weekly, schedule in bulk)
3. Sets up queue-based scheduling with optimal send times
4. Adds content review checkpoints to prevent missed or duplicate posts
**Result**: Structured publishing workflow that prevents missed posts

### Example 3: Prove social media ROI to leadership
**User says**: "My CEO keeps asking what we're getting from social media and I don't know how to answer"
**Skill does**:
1. Identifies the key metrics that matter to leadership (reach, engagement, traffic, revenue)
2. Sets up UTM tracking for all social links
3. Designs a monthly executive dashboard: audience growth, engagement rate, traffic from social, conversions
4. Creates a comparison framework: social-driven revenue vs. equivalent paid media cost
**Result**: Executive-ready ROI reporting framework

## Troubleshooting

### Engagement dropping despite consistent posting
**Symptom**: Same posting frequency but impressions and engagement are declining
**Cause**: Algorithm changes, content fatigue, audience growth stalling, or posting at suboptimal times
**Solution**: Review content mix — increase engaging and educational content, reduce promotional. Test new content formats (Reels, carousels, polls). Check if posting times still align with audience activity. Experiment with posting frequency (sometimes less is more). Review competitor content for what's working in your space.

### Team members posting inconsistent content
**Symptom**: Brand voice varies across posts, off-brand content going live
**Cause**: No content guidelines, no approval workflow, too many people with publish access
**Solution**: Create a brand voice document with examples. Implement approval workflows (even a simple creator → reviewer → publish chain). Restrict publish access to trained team members. Use saved reply libraries for engagement responses.

### Can't justify the cost of a premium tool
**Symptom**: Team wants Sprout or Hootsuite but leadership won't approve the budget
**Cause**: Social ROI isn't visible to decision-makers, or the team hasn't quantified the time savings
**Solution**: Run a 30-day trial and document: hours saved per week, response time improvement, posts published vs. previous method. Calculate the hourly cost of manual work vs. tool cost. Present the comparison as cost-per-hour-saved, not just subscription price.
