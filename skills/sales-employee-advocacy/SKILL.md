---
name: sales-employee-advocacy
description: "Employee advocacy strategy — turning employees into brand ambassadors on social media. Program design, tool comparison (Sprout Social Advocacy, Hootsuite Amplify, DSMN8, GaggleAMP, EveryoneSocial, Sociabble, PostBeyond, Haiilo), content curation, compliance controls, gamification, measuring earned media value, and driving participation. Use when employees aren't sharing company content on social, you need an advocacy program but don't know where to start, participation in an existing program is low, you can't measure whether advocacy is driving results, or you're worried about compliance risks from employee posts. Do NOT use for social media management (use /sales-social-media-management), influencer marketing with external creators (use /sales-influencer-marketing), or sales enablement content (use /sales-content)."
argument-hint: "[describe your employee advocacy question — e.g., 'how do I get employees to share company content' or 'which advocacy tool should I use']"
license: MIT
version: 1.0.0
tags: [sales, employee-advocacy, social-media, strategy]
---
# Employee Advocacy Strategy

Helps the user design and run employee advocacy programs — turning employees into brand ambassadors on social media through content curation, gamification, compliance controls, and measurable ROI.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Designing an employee advocacy program from scratch
   - B) Choosing an employee advocacy tool
   - C) Increasing employee participation in an existing program
   - D) Creating a content library for employees to share
   - E) Setting up compliance controls and brand guidelines
   - F) Measuring advocacy ROI and earned media value
   - G) Something else — describe it

2. **Company size and structure?**
   - A) Startup / small team (under 50 employees)
   - B) Mid-market (50-500 employees)
   - C) Enterprise (500+ employees)
   - D) Agency (managing for clients)

3. **Current state?**
   - A) No advocacy program yet
   - B) Informal — some employees share on their own
   - C) Have a program but low participation
   - D) Have a tool but want to switch or optimize

4. **Primary goal?**
   - A) Increase brand awareness and reach
   - B) Generate leads and pipeline
   - C) Support recruiting and employer brand
   - D) Amplify product launches and campaigns
   - E) All of the above

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a platform-specific skill, route:
- Sprout Social Employee Advocacy setup → `/sales-sproutsocial`
- Social media management (publishing, scheduling) → `/sales-social-media-management`
- Influencer marketing with external creators → `/sales-influencer-marketing`
- Sales enablement content management → `/sales-content`
- Content strategy and creation → `/content-strategy`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Employee advocacy strategy reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Program design** — goals, pilot group, content guidelines, launch plan
2. **Tool selection** — match to team size, existing tools, and budget
3. **Participation boost** — gamification, executive buy-in, content quality, friction reduction
4. **Content library** — what to include, how to curate, caption writing, refresh cadence
5. **Compliance** — brand guidelines, regulated industry requirements, GDPR
6. **ROI measurement** — EMV, adoption metrics, pipeline attribution

## Gotchas

*Best-effort from research — review these, especially items about platform capabilities and pricing that may change.*

- **Mandatory participation backfires.** Forcing employees to share makes content feel inauthentic and causes resentment. The best programs make sharing easy and rewarding, not required.
- **Content quality is the #1 participation driver.** If employees wouldn't share the content on their own, gamification won't fix it. Invest in creating genuinely shareable content — industry insights, team wins, and thought leadership outperform press releases.
- **Executive participation is non-negotiable.** If the CEO and VPs aren't sharing, employees won't either. Get leadership to commit before launching.
- **Don't expect instant scale.** Start with 20-50 enthusiastic employees, prove value, then expand. Company-wide launches have high initial sign-ups and low sustained engagement.
- **Advocacy tools add cost on top of social management.** Sprout Advocacy requires a Sprout subscription + advocacy add-on. DSMN8 is $5-8/user/month. For a 200-person program on DSMN8, that's $1,000-1,600/month. Budget accordingly.
- **Employees sharing identical content looks bad.** If 20 people post the same LinkedIn post with the same caption, it's obviously corporate. Use tools that generate personalized variations (DSMN8) or strongly encourage employees to edit captions.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-sproutsocial` — Sprout Social platform help — includes Employee Advocacy module setup and config
- `/sales-social-media-management` — Social media management strategy — publishing, scheduling, engagement, tool comparison
- `/sales-social-listening` — Social listening strategy — monitor how employee advocacy impacts brand mentions
- `/sales-content` — Sales content management — organize and distribute sales collateral
- `/sales-influencer-marketing` — Influencer marketing with external creators (not employees)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Design an employee advocacy program
**User says**: "I want to launch an employee advocacy program for our 200-person B2B company. Where do I start?"
**Skill does**:
1. Defines goals: brand awareness + lead generation
2. Recommends pilot group of 25-30 across sales, marketing, and leadership
3. Creates content guidelines and initial library of 20 shareable pieces
4. Recommends DSMN8 or GaggleAMP for B2B-focused structured activities
5. Outlines a 4-week launch plan with gamification
**Result**: Complete advocacy program design with tool recommendation and launch timeline

### Example 2: Boost low participation
**User says**: "We launched employee advocacy 3 months ago but only 15% of employees are sharing regularly"
**Skill does**:
1. Diagnoses common causes: content quality, executive participation, friction, awareness
2. Audits current content library — is it genuinely shareable?
3. Recommends quick wins: executive commitment, Slack integration, weekly leaderboard, content refresh
4. Designs a re-launch campaign with a 2-week contest
**Result**: Actionable plan to increase adoption from 15% to 30%+ within 6 weeks

### Example 3: Choose an advocacy tool
**User says**: "We use Hootsuite for social management. Should we use Amplify or a separate advocacy tool?"
**Skill does**:
1. Compares Hootsuite Amplify (integrated, simpler) vs. DSMN8 (AI personalization) vs. GaggleAMP (structured activities)
2. Evaluates trade-offs: integration convenience vs. feature depth
3. Recommends Amplify if ease of adoption is the priority, DSMN8 if AI personalization matters
4. Notes cost comparison: Amplify add-on vs. standalone tool pricing
**Result**: Clear recommendation based on their existing tool stack and priorities

## Troubleshooting

### Low employee participation after launch
**Symptom**: Initial sign-ups were strong but weekly sharing has dropped to under 20%
**Cause**: Content fatigue, no ongoing motivation, tool friction, or lack of visible leadership participation
**Solution**: Refresh the content library with new formats (short posts, images, polls). Launch a 2-week competition with meaningful prizes. Get the CEO to post and share the leaderboard. Reduce friction with push notifications and one-click sharing from mobile. Reframe the value: "build your LinkedIn presence" resonates more than "help marketing".

### Content looks robotic and corporate
**Symptom**: Employee posts all look identical, and connections are calling it out
**Cause**: Employees sharing pre-written captions without personalization
**Solution**: Switch to tools that generate unique caption variations per employee (DSMN8). Coach employees to add one personal sentence to every share. Remove the most corporate-sounding content from the library. Feature examples of good personalized shares.

### Can't prove ROI to leadership
**Symptom**: Program is running but leadership questions the investment
**Cause**: Not tracking the right metrics or connecting to business outcomes
**Solution**: Set up UTM tracking on all advocacy links. Calculate EMV monthly (total reach × industry CPM). Track clicks-to-website and compare to paid social cost-per-click. For B2B, track which deals had an advocacy touchpoint in the buyer journey via CRM attribution.
