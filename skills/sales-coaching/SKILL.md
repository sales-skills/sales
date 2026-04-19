---
name: sales-coaching
description: "Sales coaching and training — onboarding new reps, skill development, role-play practice, coaching programs, certifications, manager coaching cadences, and measuring coaching impact. Use when new reps ramping too slowly, managers not sure how to coach effectively, role-plays feel awkward or unproductive, no structured way to certify reps, coaching efforts not moving pipeline metrics, or struggling to build a coaching culture. Do NOT use for reviewing specific sales call recordings (use /sales-call-review), Seismic-specific platform help (use /sales-seismic), Allego-specific platform help (use /sales-allego), or sales content creation (use /sales-content)."
argument-hint: "[describe your coaching question — e.g., 'build an onboarding program for new AEs' or 'create a coaching framework for frontline managers']"
license: MIT
version: 1.0.0
tags: [sales, coaching, training, onboarding, enablement]
---
# Sales Coaching & Training

Help the user build coaching programs, onboard new reps, run role-plays, design certification paths, and measure coaching impact. This skill is tool-agnostic and applies to any enablement platform (Seismic Learning, Allego, MindTickle, SalesHood, Brainshark), conversation intelligence tool (Gong, Chorus, Observe.AI), or manual approach.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need?**
   - A) Build a new rep onboarding program
   - B) Create a coaching framework for managers
   - C) Design role-play/practice exercises
   - D) Build certification or skill assessment paths
   - E) Improve ramp time for new hires
   - F) Measure coaching effectiveness
   - G) Other

2. **Team size and structure?**
   - A) Small team (<10 reps, player-coach manager)
   - B) Mid-size (10-50 reps, dedicated managers)
   - C) Large (50-200, enablement team)
   - D) Enterprise (200+, enablement org)

3. **Current coaching tools?**
   - A) Seismic Learning
   - B) Allego
   - C) Gong/Chorus (conversation intelligence)
   - D) MindTickle
   - E) Brainshark
   - F) SalesHood
   - G) LMS (generic)
   - H) Spreadsheets/manual
   - I) Nothing formal

4. **Sales methodology?**
   - A) MEDDPICC
   - B) SPIN
   - C) Challenger
   - D) Sandler
   - E) Value Selling
   - F) Custom/none

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Coaching strategy

### Onboarding program design

**30-60-90 day framework:**

**Days 1-30 (Learn):**
- Company/product knowledge (what we sell, who we sell to, how we win)
- Sales process and methodology
- Tool training (CRM, sales engagement, enablement platform)
- Shadow 5+ calls with top performers
- Complete product certification
- **Milestone**: Pass product knowledge assessment (80%+ score)

**Days 31-60 (Practice):**
- Role-play discovery calls, demos, and objection handling
- Make first prospecting calls with manager listening
- Run first demo (manager shadows)
- Complete methodology certification (MEDDPICC, SPIN, etc.)
- **Milestone**: Successfully run a discovery call solo with positive manager feedback

**Days 61-90 (Perform):**
- Own pipeline independently
- Close first deal (or advance first opportunity past discovery)
- Receive weekly 1:1 coaching from manager
- Peer coaching sessions
- **Milestone**: Hit 50%+ of monthly quota

### Manager coaching framework

**Weekly 1:1 coaching structure (30 min):**
1. **Pipeline review** (10 min) — review top 3-5 deals, identify risks, plan next actions
2. **Skill coaching** (15 min) — review one call/meeting, identify one skill to improve, practice
3. **Goal setting** (5 min) — one specific action item for the week

**Coaching models:**
- **GROW**: Goal → Reality → Options → Will — structured coaching conversation
- **SBI**: Situation → Behavior → Impact — for giving feedback
- **Ask-Tell-Ask**: Ask what they think → Share your observation → Ask how they'll apply it

**Monthly coaching cadence:**
| Activity | Frequency | Duration | Purpose |
|---|---|---|---|
| 1:1 coaching | Weekly | 30 min | Pipeline + skill development |
| Call review | Weekly | 15 min | Review 1 recorded call together |
| Role-play | Bi-weekly | 20 min | Practice specific scenarios |
| Skill assessment | Monthly | 30 min | Evaluate progress on skill goals |
| Peer coaching | Monthly | 45 min | Small group practice and feedback |

### Role-play design

- **Structure**: Scenario brief (2 min) → Role-play (5-10 min) → Self-assessment (2 min) → Coach feedback (5 min)
- **Scenarios to cover**: Cold call, Discovery call, Demo, Objection handling (top 5 objections), Negotiation, Executive conversation
- **Scoring**: Use a rubric (1-5 scale) on specific skills: questioning, listening, positioning, handling objections, next steps
- **AI role-play**: Seismic's Role-Play Agent and similar AI tools can simulate buyer conversations for practice without needing a live partner

### Certification paths

- **Product certification**: Knowledge assessment on features, use cases, competitive positioning
- **Methodology certification**: Demonstrate methodology application in role-play scenarios
- **Skill-based certification**: Tiered badges (Bronze/Silver/Gold) for specific skills (discovery, negotiation, etc.)
- **Renewal**: Certifications expire annually — re-certify to ensure skills stay current

## Step 3 — Platform-specific guidance

For platform-specific coaching guidance (Seismic Learning, Allego, Gong/Chorus, MindTickle, SalesHood, Outdoo, Jiminny, Revenue.io, Enthu.AI, Demodesk, Balto, Cresta, Nooks, Orum, Manual/Spreadsheet), see references/platforms.md.

## Step 4 — Measuring coaching impact

| Metric | What it measures | Target |
|---|---|---|
| Ramp time | Days from start to first quota attainment | Reduce by 20%+ |
| Time to first deal | Days from start to first closed-won | <90 days for new AEs |
| Quota attainment by cohort | % of quota hit by onboarding cohort | 70%+ by month 6 |
| Coaching session completion | % of scheduled 1:1s actually held | 90%+ |
| Certification pass rate | % passing on first attempt | 80%+ |
| Skill improvement score | Change in role-play/assessment scores over time | Positive trend |
| Rep retention | Turnover rate for coached vs uncoached reps | Lower for coached |

## Gotchas

- **Don't build an onboarding program without input from recent hires.** Claude tends to create theoretical programs. The best onboarding programs are designed with feedback from reps who completed onboarding in the last 6 months — they know what was missing.
- **Don't conflate coaching with training.** Training teaches knowledge (product, methodology). Coaching develops skills through practice and feedback. A rep who passed product training but can't run a discovery call needs coaching, not more training.
- **Don't skip the manager enablement.** Most coaching programs fail because managers aren't trained to coach. Build a "coaching the coaches" program before rolling out rep coaching at scale.
- **Don't make role-plays optional.** Reps avoid practice because it's uncomfortable. The best teams make role-play a required, scheduled activity — not a suggestion. Bi-weekly minimum.
- **Don't measure coaching by completion metrics alone.** 100% lesson completion doesn't mean reps are ready. Measure coaching impact by performance outcomes (ramp time, quota attainment, deal velocity) not just activity metrics.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-seismic` — Seismic platform help (for Seismic Learning, Role-Play Agent, and coaching features)
- `/sales-allego` — Allego platform help (for Modern Learning, AI Role-Play, and Conversation Intelligence)
- `/sales-gong` — Gong platform help (coaching scorecards, deal boards, Smart Trackers, conversation analytics)
- `/sales-rilla` — Rilla platform help (field sales AI coaching, virtual ridealongs, home services focus)
- `/sales-siro` — Siro platform help (field sales AI coaching, Halftime real-time coaching, multi-industry)
- `/sales-salesask` — Sales Ask platform help (field + call center AI coaching, Coach Dean active feedback, home services vertical)
- `/sales-craft` — Craft platform help (real-time in-appointment AI coaching, 24/7 AI call center, revenue recovery agents, home services)
- `/sales-outdoo` — Outdoo platform help (AI roleplay coaching, conversation intelligence, revenue intelligence, CRM automation, mid-market Gong alternative)
- `/sales-jiminny` — Jiminny platform help (coaching-focused conversation intelligence, revenue intelligence, 8 CRM integrations, mid-market Gong alternative)
- `/sales-enthu` — Enthu.AI platform help (contact center QA with auto-scoring, agent coaching, compliance monitoring, affordable Gong alternative)
- `/sales-demodesk` — Demodesk platform help (AI coaching scorecards, conversation intelligence, autonomous AI agents, GDPR-native)
- `/sales-clari-copilot` — Clari Copilot platform help (real-time battlecards, live coaching during calls, coaching scorecards, gametapes, enterprise CI)
- `/sales-revenue-io` — Revenue.io platform help (Salesforce-native, Moments real-time in-call coaching, AI scoring with 400+ criteria, Revenue Intelligence dashboards)
- `/sales-salesken` — Salesken platform help (AI conversation intelligence, real-time in-call coaching, QA automation on 100% of calls, multilingual transcription, APAC focus)
- `/sales-balto` — Balto platform help (real-time AI coaching for contact centers, automated QA, compliance monitoring)
- `/sales-cresta` — Cresta platform help (enterprise contact center AI — real-time agent assist, AI virtual agents, conversation intelligence, automated QA)
- `/sales-nooks` — Nooks platform help (AI parallel dialer with built-in call scoring, roleplay, battlecards, virtual salesfloor)
- `/sales-orum` — Orum platform help (AI parallel dialer with AI Coaching Suite, scorecards, roleplay, virtual salesfloor)
- `/sales-momentum` — Momentum platform help — AI revenue orchestration with Coaching Agent for data-driven call scoring, churn signals, and executive briefs (acquired by Salesforce Feb 2026)
- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-note-taker` — Picking an AI note-taker (Fathom, Fireflies, Avoma, Gong, etc.) or wiring its API to feed your coaching program
- `/sales-content` — Sales content for training and enablement programs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: 90-day onboarding program
**User says**: "Build a 90-day onboarding program for new AEs"
**Skill does**:
1. Creates a 30-60-90 framework with specific milestones per phase
2. Designs assessment gates at each phase transition (knowledge test, role-play pass, quota milestone)
3. Includes shadowing schedule, role-play exercises, and certification path
4. Defines measurable ramp metrics (time to first deal, quota attainment by month 6)
5. Recommends tools and tracking approach based on team size
**Result**: Full onboarding program with milestones, assessments, and a ramp measurement plan

### Example 2: Manager coaching framework
**User says**: "Create a coaching framework for our 8 frontline sales managers"
**Skill does**:
1. Designs a weekly 1:1 coaching structure (pipeline review + skill coaching + goal setting)
2. Introduces the GROW coaching model for structured coaching conversations
3. Builds a monthly coaching cadence (1:1s, call reviews, role-plays, peer coaching)
4. Includes a "coaching the coaches" enablement plan for managers who have never coached
5. Creates a coaching scorecard to track manager coaching effectiveness
**Result**: Complete coaching framework with cadence, models, and manager enablement plan

### Example 3: Seismic Learning role-plays
**User says**: "We're using Seismic Learning — how do I set up role-plays for objection handling?"
**Skill does**:
1. Walks through creating practice exercises with specific objection scenarios
2. Designs a scoring rubric for video/text submissions (1-5 on acknowledge, clarify, respond, check)
3. Explains how to use Seismic's AI Role-Play Agent for automated buyer simulation
4. Recommends tracking completion rates and correlating with call performance in Gong/Chorus
5. Sets up a bi-weekly role-play cadence with manager review
**Result**: Seismic Learning role-play setup guide with scenarios, scoring rubric, and AI practice configuration

## Troubleshooting

### New reps ramp too slowly
**Cause**: Onboarding is too knowledge-heavy and not enough practice
**Solution**: Add more role-plays, shadowing, and real-world exercises in weeks 2-4. Shift from 80/20 training-to-practice to 50/50 by day 15. Have new reps make their first prospecting calls by week 2 with a manager listening, not week 6.

### Managers skip coaching sessions
**Cause**: No accountability and no structure
**Solution**: Provide coaching templates so managers don't have to build the agenda from scratch. Make 1:1 completion a manager KPI reported to leadership. Train managers on the coaching framework — most skip sessions because they don't know what to do in them.

### Reps pass training but underperform
**Cause**: Assessment measures knowledge recall, not skill application
**Solution**: Add practical assessments (recorded role-plays scored on a rubric) alongside knowledge tests. A rep who can recite MEDDPICC but can't run a discovery call needs practice, not another quiz. Require role-play pass before certifying reps as "ramped."
