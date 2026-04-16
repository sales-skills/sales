---
name: sales-media-relations
description: "Media relations and PR outreach strategy across platforms — journalist databases, media list building, pitch writing, media outreach sequences, press coverage tracking, and earned media measurement. Covers platform comparison (Meltwater, Cision, Muck Rack, Prowly, Agility PR, BuzzStream), journalist research (beat coverage, recent articles, social profiles), media list building (segmentation, tiering, contact verification), pitch writing (subject lines, personalization, angles, timing), outreach sequences (initial pitch, follow-ups, exclusives, embargoes), coverage tracking (clip reports, reach, AVE alternatives, message pull-through), and PR measurement (earned media value, share of voice, sentiment). Use when journalists aren't responding to pitches, unsure which reporters cover your beat, press outreach isn't landing coverage, can't measure PR impact, or don't know which media database to pick. Do NOT use for platform-specific config (use /sales-meltwater), influencer outreach (use /sales-influencer-marketing), cold sales email outreach (use /sales-outreach or /sales-cadence), or social listening (use /sales-social-listening)."
argument-hint: "[describe your media relations question — e.g., 'how do I pitch tech journalists for our launch' or 'which journalist database should I use']"
license: MIT
version: 1.0.0
tags: [sales, PR, media-relations, journalist-outreach, strategy]
---
# Media Relations & PR Outreach Strategy

Helps the user plan and execute media relations programs — from choosing the right tool and building journalist lists through pitch writing, outreach, coverage tracking, and PR measurement.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Choosing a media relations / journalist database tool
   - B) Building a media list for a specific campaign
   - C) Writing a PR pitch or press release
   - D) Planning a press outreach sequence (timing, follow-ups, embargoes)
   - E) Tracking and reporting on press coverage
   - F) Measuring earned media and PR ROI
   - G) Something else — describe it

2. **What's the context?**
   - A) Product launch / announcement
   - B) Fundraising / funding news
   - C) Ongoing thought leadership / expert positioning
   - D) Crisis communications
   - E) Event / conference promotion
   - F) Industry research / data report
   - G) Other — describe it

3. **Current setup?**
   - A) No PR tools or processes in place
   - B) Manual outreach (Gmail, personal contacts)
   - C) Using a tool — which one?
   - D) Working with a PR agency
   - E) Evaluating tools / building an in-house PR function

4. **Budget range?**
   - A) Free / bootstrapped
   - B) SMB ($100-500/mo)
   - C) Mid-market ($500-2,000/mo)
   - D) Enterprise ($2,000+/mo)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Meltwater platform setup/config → `/sales-meltwater`
- Influencer outreach (not journalist) → `/sales-influencer-marketing`
- Cold sales email outreach → `/sales-outreach` or `/sales-cadence`
- Social listening / brand monitoring → `/sales-social-listening`
- Email deliverability for outreach → `/sales-deliverability`

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Media relations strategy reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Tool selection** — recommend the best platform for their budget, team size, and use case
2. **Media list** — build a targeted journalist list for their campaign
3. **Pitch writing** — draft personalized pitches with strong subject lines
4. **Outreach plan** — design a sequence with timing, follow-ups, and escalation
5. **Measurement** — set up coverage tracking and reporting

## Gotchas

*Best-effort from research — review these, especially items about pricing and capabilities that may change.*

- **Journalist databases go stale fast.** Journalists change beats, publications, and contact info constantly. Even "verified" databases have 5-15% stale contacts at any given time. Always verify before pitching.
- **Response rates are low.** Expect 5-15% response rates on cold pitches. Build your list at 5-10x your target coverage count. Personalization is the single biggest factor in response rates.
- **Enterprise tools require annual contracts.** Meltwater (~$6K/yr), Cision (~$7K/yr), and Muck Rack (~$5K/yr) all require annual commitments. No monthly options. Negotiate before signing.
- **69% of PR pros now use AI for pitching.** AI-generated pitches are common, and journalists can tell. Use AI for research and draft structure, but personalize the actual pitch yourself. Mass-generated pitches get ignored.
- **"PR tool" ≠ "social listening tool."** Meltwater combines both, but most PR tools (Cision, Muck Rack, Prowly) focus on journalist outreach and coverage tracking, not social listening. If you need both, evaluate them separately.
- **Source requests (HARO-style) are changing.** Connectively (formerly HARO) is the main platform where journalists request sources. Response competition is fierce — speed and relevance are everything.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-meltwater` — Meltwater platform help — monitoring, media relations, influencer marketing, API
- `/sales-social-listening` — Cross-platform social listening and brand monitoring strategy
- `/sales-influencer-marketing` — Influencer marketing strategy (creator outreach is different from journalist outreach)
- `/sales-cadence` — Outbound sequence design (adaptable to PR outreach cadences)
- `/sales-cloutboost` — Cloutboost platform help — gaming PR, influencer discovery, campaign management
- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamer partnerships, game launch campaigns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choose a PR tool
**User says**: "I'm starting an in-house PR function at a Series A startup. Budget is tight — maybe $300/mo. Which journalist database should I use?"
**Skill does**:
1. Evaluates budget against platform pricing
2. Recommends Prowly ($259/mo) as the best balance of database quality and affordability
3. Notes BuzzStream ($24/mo) as an outreach CRM if they already have contact lists
4. Suggests manual research + free tools (LinkedIn, publication mastheads) to supplement
**Result**: Clear tool recommendation with fallback options for tight budgets

### Example 2: Write a product launch pitch
**User says**: "I need to pitch TechCrunch about our new AI product that launches next month"
**Skill does**:
1. Identifies relevant TechCrunch reporters by beat (AI, startups, enterprise)
2. Researches their recent coverage for personalization hooks
3. Drafts a pitch with specific subject line, personalized opening, and news hook
4. Designs outreach timing (exclusive offer → broader pitch → follow-ups)
**Result**: Ready-to-send pitch with outreach plan

### Example 3: Measure PR campaign results
**User says**: "We got coverage from our launch last month — how do I measure if the PR campaign was worth it?"
**Skill does**:
1. Identifies available metrics based on their tools and tracking setup
2. Calculates coverage metrics: clip count, reach, domain authority, backlinks
3. Measures message pull-through rate across top coverage
4. Compares pre/post campaign share of voice and website referral traffic
**Result**: PR campaign report with concrete metrics and recommendations for next campaign

## Troubleshooting

### Pitches aren't getting responses
**Symptom**: Sending pitches to 50+ journalists but getting zero or near-zero responses
**Cause**: Generic pitches, wrong journalist-beat fit, bad timing, or pitching non-newsworthy content
**Solution**: Verify each journalist actually covers your topic (read their last 5 articles). Personalize every pitch with a specific reference to their work. Send Tue-Thu 6-9 AM local time. Check your subject line — is it specific and newsworthy? If the story itself isn't newsworthy (no data, no trend, no conflict), consider reframing or adding a news hook.

### Journalist database contacts are bouncing
**Symptom**: High bounce rate when sending pitches through your media relations tool
**Cause**: Stale contact data — journalists change beats, publications, and email addresses frequently
**Solution**: Before pitching, verify the journalist is still at the publication (check their recent bylines). Use your tool's verification features if available. For critical pitches, find the journalist on X/Twitter or LinkedIn and verify their current email. Build a "verified contacts" list that you maintain manually for your top 20 targets.

### Coverage is thin despite good response rate
**Symptom**: Journalists respond positively to pitches but few publish stories
**Cause**: The story lacks a strong enough hook, missing assets (data, quotes, images), or competing news crowded your story out
**Solution**: Provide complete press kits (data, quotes, images, b-roll) with every pitch. Offer exclusives to tier 1 targets. Time launches to avoid competing news (check news calendars). Follow up after interviews to provide any additional information needed. Consider adding a data angle — original research and statistics get more coverage.
