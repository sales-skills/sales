---
name: sales-coaching
description: "Sales coaching and training — onboarding new reps, skill development, role-play practice, coaching programs, certifications, manager coaching cadences, and measuring coaching impact. Use when building an onboarding program, creating a coaching framework, running role-plays, designing certification paths, improving ramp time, building a coaching culture, or measuring coaching ROI. Do NOT use for reviewing specific sales call recordings (use /sales-call-review), Seismic-specific platform help (use /sales-seismic), or sales content creation (use /sales-content)."
argument-hint: "[describe your coaching question — e.g., 'build an onboarding program for new AEs' or 'create a coaching framework for frontline managers']"
license: MIT
metadata:
  author: sales-skills
  version: 1.0.0
---

# Sales Coaching & Training

Help the user build coaching programs, onboard new reps, run role-plays, design certification paths, and measure coaching impact. This skill is tool-agnostic and applies to any enablement platform (Seismic Learning, MindTickle, SalesHood, Brainshark), conversation intelligence tool (Gong, Chorus), or manual approach.

## Step 1 — Gather context

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
   - B) Gong/Chorus (conversation intelligence)
   - C) MindTickle
   - D) Brainshark
   - E) SalesHood
   - F) LMS (generic)
   - G) Spreadsheets/manual
   - H) Nothing formal

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

### In Seismic Learning (formerly Lessonly)

- **Lessons**: Create interactive lessons with text, video, images, and practice exercises. Assign to individuals or teams with due dates.
- **Practice exercises**: Built-in role-play with video/text submission. Manager reviews and scores responses.
- **Learning Paths**: Chain lessons into structured programs (onboarding, certification, skill tracks).
- **AI Role-Play Agent**: Generative AI simulates buyer conversations based on your content in Seismic. Provides instant feedback.
- **Reporting**: Track completion rates, assessment scores, and time-to-completion. Correlate with sales performance.
- **Integration**: Syncs with Salesforce for tying learning completion to rep performance metrics.

### In Gong / Chorus

- **Call coaching**: Review recorded calls with AI-generated insights (talk ratio, questions asked, topics discussed).
- **Scorecards**: Rate calls against methodology criteria. Track improvement over time.
- **Deal boards**: Coach on deal execution by reviewing conversation patterns across the deal cycle.
- **Limitations**: Great for call coaching but doesn't cover onboarding, certifications, or structured learning paths.

### In MindTickle

- **Sales readiness**: Combines content, training, and coaching in one platform.
- **Role-play**: AI-powered practice with scoring and feedback.
- **Ideal Rep Profile**: Benchmark skills against top performers.
- **Analytics**: Readiness index scores across the team.

### In SalesHood

- **Video coaching**: Reps record practice pitches for manager review.
- **Huddles**: Team coaching sessions with structured agendas.
- **Playbooks**: Step-by-step guides with embedded learning.

### Manual / Spreadsheet approach

- **Google Docs**: Create onboarding checklists and coaching templates. Works for <10 reps.
- **Spreadsheet tracker**: Track certification completion, role-play scores, coaching session notes.
- **Limitations**: No engagement tracking, no automated assignments, no AI practice. Breaks down fast above 10 reps.

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

## Related skills

- `/sales-seismic` — Seismic platform help (for Seismic Learning, Role-Play Agent, and coaching features)
- `/sales-call-review` — Review specific sales calls and extract coaching insights
- `/sales-content` — Sales content for training and enablement programs
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
