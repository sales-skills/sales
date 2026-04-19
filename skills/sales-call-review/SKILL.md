---
name: sales-call-review
description: "Reviews sales calls, extract coaching insights, and score against MEDDPICC/SPIN/Challenger. Use when a rep lost a deal and you want to understand why, call went sideways and need to debrief, not sure if rep is qualifying properly, need to pull action items from a recorded call, rep talking too much and not listening, or need to give structured feedback on a call. Do NOT use for prepping discovery questions (use /sales-discovery), general objection handling strategy (use /sales-objection), or deal-level risk analysis (use /sales-deal-inspect)."
argument-hint: "[paste transcript or describe the call — type, participants, outcome]"
license: MIT
version: 1.0.0
tags: [sales, coaching, call-recording, conversation-intelligence]
---
# Review a Sales Call

Help the user review a sales call — score it against best practices, identify key moments, extract coaching insights, and plan follow-up actions.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What type of call was this?**
   - A) Discovery / qualification call
   - B) Demo / product presentation
   - C) Negotiation / pricing discussion
   - D) Follow-up / check-in
   - E) Executive briefing
   - F) Technical deep-dive
   - G) Closing call
   - H) Other — describe it

2. **What feedback are you focused on?**
   - A) Overall call quality and coaching points
   - B) Specific methodology scoring (MEDDPICC, SPIN, Challenger)
   - C) Talk-to-listen ratio and engagement patterns
   - D) Objection handling moments
   - E) Next steps and commitment quality
   - F) All of the above

3. **Do you have a transcript or recording?**
   - A) Yes — I'll paste the transcript
   - B) Yes — I'll describe what happened
   - C) No — I want a general call review framework to use
   - D) I have Salesloft Conversations data (scores, topics, etc.)

4. **Who is providing/receiving feedback?**
   - A) Manager reviewing a rep's call
   - B) Rep self-reviewing their own call
   - C) Peer review / team coaching session
   - D) Preparing feedback for a 1:1

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Call scorecard

Use this scorecard as a framework — adapt the dimensions based on call type and what the user asked to focus on. Not every dimension applies to every call (e.g., objection handling may not come up in a first discovery call).

| Dimension | Score (1-5) | Evidence | Coaching note |
|-----------|-------------|----------|---------------|
| **Opening & rapport** | | Did they earn the right to continue in the first 30 seconds? | |
| **Discovery depth** | | Did they uncover real pain, impact, and urgency? Or stayed surface-level? | |
| **Active listening** | | Did they paraphrase, ask follow-ups, and build on what the prospect said? | |
| **Value articulation** | | Did they connect capabilities to the prospect's specific situation? | |
| **Objection handling** | | Did they acknowledge, clarify, and address objections effectively? | |
| **Next steps** | | Did they secure a specific, time-bound commitment? | |
| **Talk-to-listen ratio** | | Target: 40-60% talk for discovery, 60-70% for demos | |
| **Longest monologue** | | Target: under 2 minutes. Long monologues lose prospects. | |
| **Filler words** | | Excessive "um", "like", "you know", "basically" erode credibility | |

**Overall score**: Average of all dimensions → Rating:
- 4.5-5.0: Exceptional — use as a coaching example
- 3.5-4.4: Strong — one or two areas to sharpen
- 2.5-3.4: Developing — clear coaching priorities
- 1.0-2.4: Needs significant improvement — focus on fundamentals

### Methodology-specific scoring layers

**MEDDPICC layer** (if applicable):
| Element | Addressed? | What was uncovered | What's still missing |
|---------|-----------|-------------------|---------------------|
| Metrics | | | |
| Economic Buyer | | | |
| Decision Criteria | | | |
| Decision Process | | | |
| Paper Process | | | |
| Implicate the Pain | | | |
| Champion | | | |
| Competition | | | |

**SPIN layer** (if applicable):
| Question Type | Count | Quality (1-5) | Best example |
|--------------|-------|---------------|-------------|
| Situation | | | |
| Problem | | | |
| Implication | | | |
| Need-Payoff | | | |

**Challenger layer** (if applicable):
- Did they teach something the prospect didn't know? (Teach)
- Did they tailor the message to this specific stakeholder? (Tailor)
- Did they maintain control of the conversation and process? (Take Control)

## Step 3 — Key moments analysis

Identify and analyze the most important moments:

### Best moment
What was the single best thing the rep did on this call? Quote it if possible and explain why it worked.

### Missed opportunity
What was the biggest moment they could have capitalized on but didn't? What should they have said or done instead?

### Objection moments
For each objection that came up:
| Objection | How it was handled | Better approach | Rating (1-5) |
|-----------|-------------------|-----------------|---------------|

### Buying signals
List any positive signals the prospect gave (verbal or behavioral):
- Asking about implementation timeline
- Mentioning other stakeholders who should see this
- Asking about pricing/packaging
- Describing their current process in detail (shows trust)

### Risk signals
List any warning signs:
- Vague commitment to next steps
- "We'll get back to you" without a specific date
- Avoiding budget/authority questions
- Comparing to a competitor without being asked

## Step 4 — Coaching recommendations

Provide 3-5 specific, actionable coaching recommendations:

For each recommendation:
1. **What to improve**: Specific skill or behavior
2. **Why it matters**: Impact on deal outcomes
3. **How to practice**: Concrete drill or exercise
4. **Example**: What "great" sounds like for this specific situation

### Practice drills
- **Discovery depth drill**: Take a surface-level answer and practice asking 3 layers deeper. "You mentioned X. Help me understand — what's the impact of that on [metric]? If that continues for another quarter, what happens?"
- **Monologue breaker drill**: Practice delivering any point in under 60 seconds, then asking a question. Set a timer.
- **Objection sparring**: Role-play the top 3 objections from this call. Practice acknowledge → clarify → respond → check.
- **Next steps drill**: Practice ending every conversation with "Based on what we discussed, the logical next step is [specific]. Does [specific date/time] work for you to [specific action]?"

## Step 5 — Follow-up action items

Extract concrete action items from the call:

### Commitments made
List everything both sides committed to doing, with owners and deadlines.

### Unanswered questions
List questions the prospect asked that weren't fully answered, plus questions the rep should have asked but didn't.

### Stakeholders to engage
Who was mentioned on the call that needs to be brought into the process? What's the plan to reach them?

### Draft follow-up email
Write a follow-up email the rep can send within 24 hours:
- Recap what was discussed (in the prospect's language, not yours)
- Confirm next steps and dates
- Attach anything promised
- Add one piece of value not discussed on the call
- Keep it under 200 words

### Next call agenda
If a follow-up call was booked, draft a proposed agenda:
1. Recap and confirm any changes since last call
2. [Topic based on what was left unresolved]
3. [New topic to advance the deal]
4. Confirm next steps and timeline

### In Revenue.io

- **Conversation Intelligence (Orchestrate tier)**: Revenue.io records, transcribes, and AI-scores calls using 400+ criteria. Access call recordings and transcripts from within Salesforce — no separate tool needed.
- **AI summaries**: Automatic call summaries with action items, topics discussed, and key moments.
- **Scoring and review**: Managers can review AI-scored calls, filter by score range, and focus coaching on the lowest-scoring interactions. Scoring criteria are configurable.
- **Talk/listen ratio**: Track how much each participant spoke — useful for identifying reps who talk too much and don't listen.
- **Searchable call library**: Search across all recordings by keyword, topic, or deal — useful for finding examples of great discovery calls or objection handling.
- **Note**: Conversation Intelligence requires the Orchestrate tier (highest). Activate and Engage tiers include call recording but not AI scoring, summaries, or the searchable library.

### In Seismic

- **Meeting Intelligence**: Seismic records and transcribes sales meetings with AI-generated summaries, key moment detection, and action items. Available for Zoom, Teams, and other video platforms.
- **Coaching integration**: Meeting recordings tie directly into Seismic Learning — managers can create coaching moments from specific call segments and assign them as learning exercises.
- **Content recommendations**: After a meeting, Seismic's AI suggests follow-up content (case studies, one-pagers, proposals) based on topics discussed in the call.
- **Analytics**: Track talk ratio, question frequency, and topic coverage across the team. Identify coaching opportunities by comparing rep performance patterns.
- **Note**: Seismic's Meeting Intelligence is a newer module — if your team already uses Gong or Chorus for conversation intelligence, Seismic's meeting features complement rather than replace them (Seismic has a native Gong integration).

### In ZoomInfo (Chorus)
- **Call recording & transcription** — Chorus (acquired by ZoomInfo) records and transcribes sales calls with AI-powered analysis
- **Deal insights** — automatically tracks mentions of competitors, pricing discussions, next steps, objections, and decision criteria across all calls in a deal
- **Coaching metrics** — talk-to-listen ratio, longest monologue, question frequency, filler words. Manager dashboards show rep-level trends.
- **Smart Playlists** — curate collections of call moments (best discovery questions, great objection handling) for team training
- **CRM sync** — call summaries, key moments, and action items auto-logged to CRM opportunity records
- **Momentum** — ZoomInfo's deal intelligence layer uses Chorus data + CRM data + engagement signals to predict deal outcomes and flag risks
- **Integration with ZoomInfo data** — Chorus enriches call participants with ZoomInfo contact data, showing title, seniority, and buying role during playback

### In Outdoo (formerly MeetRecord)
- **Conversation Intelligence** — Outdoo records and transcribes calls with AI scoring on discovery, qualification, and negotiation. Intent trackers detect topics automatically. Transcripts split by intent and speaker (unique to Outdoo).
- **Buyer Intelligence** — Personality-based buyer profiles, sentiment recognition, risk appetite assessment, negotiation guidance generated from the call.
- **AI-based call scoring** — Rubric-based scoring against methodology criteria (MEDDIC, SPIN, BANT). Performance monitoring tracks rep improvement over time.
- **Closed-loop coaching** — Real call insights feed directly into AI Roleplay scenarios, so reps practice their specific weaknesses identified from call reviews.
- **CRM auto-fill** — Key call data (methodology fields, action items, next steps) auto-populates CRM fields via AI Docs (Premium+).
- **Integration**: Connects with Gong, Clari, Chorus, Fireflies, and Avoma for additional conversation intelligence data alongside Outdoo's own recording.

### In Jiminny
- **Call recording & transcription** — Jiminny records phone calls, video meetings, and emails with AI-powered transcription in 60+ languages. AI summaries and action items generated automatically.
- **Coaching-focused scoring** — Configurable call scoring criteria for structured review. Managers see per-rep trends over time.
- **Competitive intelligence** — Real-time tracking of competitor mentions across all recorded conversations. Useful for coaching reps on competitive differentiation.
- **CRM auto-logging** — Call summaries, scores, and action items sync to Salesforce, HubSpot, Zoho, Pipedrive, Close, Bullhorn, Copper, or Microsoft Dynamics automatically.
- **Pipeline context** — Revenue intelligence surfaces which deals are at risk, letting managers prioritize which call reviews will have the most impact on pipeline.
- **Note**: Jiminny's call scoring is more coaching-focused and accessible than Gong's deep analytics. Better for mid-market teams wanting structured coaching without Gong-level pricing.

### In Enthu.AI
- **100% auto-QA scoring** — Enthu scores every call against your custom QA scorecard (not sampling). Supervisors see calls ranked by priority with coaching moments flagged.
- **Custom scorecards** — Define evaluation criteria specific to your team: required disclosures, tone, script adherence, issue resolution, compliance. Mix binary and scaled criteria.
- **Sentiment analysis** — Tracks sentiment shifts during calls, identifies at-risk customer interactions and escalation-worthy moments.
- **Keyword tracking** — Monitor specific phrases, competitor mentions, and compliance language across all calls.
- **Compliance monitoring** — Auto-redacts PII from transcripts, checks script adherence, flags compliance violations.
- **Note**: Enthu.AI is best for contact center QA at small-to-mid scale — fast setup (hours not months), no minimums, affordable ($15-69/user/mo). Lacks Gong's deal intelligence and revenue forecasting. Stronger on QA automation than coaching depth.

### In Balto

- **100% automated QA**: Balto scores every call against custom QA criteria in real-time — not post-call sampling. Supervisors see compliance adherence, script following, and coaching moments as they happen.
- **Real-time alerts**: Unlike post-call review tools, Balto alerts supervisors to at-risk calls while they're still in progress — enabling live intervention rather than after-the-fact coaching.
- **Call summaries**: Automatic AI-generated call summaries synced to Salesforce, HubSpot, or Dynamics 365. Includes key topics, compliance checks, and action items.
- **Coaching-ready insights**: Balto surfaces which agents need coaching, pulls the relevant call segments, and links them to specific guidance adherence data. Managers can prep coaching sessions without manually reviewing recordings.
- **Compliance audit trail**: Immutable, time-stamped logs of every compliance event — useful for regulated industries (financial services, insurance, healthcare) where call review has audit implications.
- **Note**: Balto's strength is real-time QA and in-call intervention, not post-call transcript analysis. For detailed post-call transcript review with MEDDPICC/SPIN scoring, use this skill's framework with transcripts. Balto complements post-call review by catching issues during the call that post-call review would find too late.

## Related skills

- `/sales-jiminny` — Jiminny platform help (coaching-focused conversation intelligence, revenue intelligence, 8 CRM integrations)
- `/sales-gong` — Gong platform help (Smart Trackers, coaching scorecards, deal boards, transcript API)
- `/sales-note-taker` — Picking an AI note-taker (Fathom, Fireflies, Avoma, Gong, etc.) or wiring its API into CRM/warehouse for transcripts and summaries
- `/sales-salesloft` — Salesloft Conversations settings, coaching playlists, recording configuration
- `/sales-discovery` — Prep for the next discovery call with better questions
- `/sales-deal-inspect` — Assess overall deal health beyond just the call
- `/sales-objection` — Deep-dive on objection handling strategies
- `/sales-cadence` — Optimize outbound cadences based on call learnings
- `/sales-seismic` — Seismic platform help including Meeting Intelligence and content management
- `/sales-zoominfo` — ZoomInfo platform help (Chorus conversation intelligence, Momentum deal insights)
- `/sales-salesask` — Sales Ask platform help (field + call center AI coaching, Coach Dean active feedback, home services vertical)
- `/sales-outdoo` — Outdoo platform help (AI roleplay coaching, conversation intelligence, revenue intelligence, CRM automation, mid-market Gong alternative)
- `/sales-enthu` — Enthu.AI platform help (contact center QA with auto-scoring, agent coaching, compliance monitoring, affordable Gong alternative)
- `/sales-revenue-io` — Revenue.io platform help (Salesforce-native conversation intelligence, AI scoring with 400+ criteria, Orchestrate tier)
- `/sales-observe-ai` — Observe.AI platform help (enterprise contact center QA, 100% auto scoring, Agent Copilot, VoiceAI/ChatAI agents)
- `/sales-balto` — Balto platform help (real-time AI coaching for contact centers, automated QA, compliance monitoring)
- `/sales-salesken` — Salesken platform help (real-time in-call coaching, QA automation, revenue intelligence, multilingual transcription)
- `/sales-clari-copilot` — Clari Copilot platform help (real-time battlecards, live coaching, AI call summaries, deal intelligence)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Gotchas

- **Don't score a call without a transcript or detailed description.** Claude will confidently generate scores from thin air if given only "it was a discovery call." Push back and ask for specifics — what was said, how it ended, what objections came up.
- **Don't focus only on negatives.** Claude tends to generate long lists of improvements. Always lead with the best moment and what went well before coaching points. Reps shut down if feedback feels like a list of failures.
- **Don't apply MEDDPICC scoring to a first discovery call.** MEDDPICC elements like Paper Process and Competition are rarely uncovered in a first meeting. Score only the elements that were reasonable to address at this deal stage.
- **Don't ignore talk-to-listen ratio.** This is one of the most objective and actionable metrics. If the user provides a transcript, estimate the ratio. If they describe the call, ask about it directly.
- **Don't treat the scorecard as a final verdict.** A single call is a snapshot. Frame scores as "on this call" not "this rep is a 2/5 at discovery." Context matters — a rough call with a hostile prospect is different from a rough call with a warm lead.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Examples

### Example 1: Manager reviewing rep's discovery call
**User says**: "Review this discovery call — I talked for 70% of it, asked about their process, showed a quick demo, and ended with 'I'll send you info and we can reconnect next week.'"
**Skill does**:
1. Scores the call on all 9 dimensions (flags high talk ratio, surface discovery, vague next steps)
2. Identifies the missed opportunity to dig deeper when the prospect described their process
3. Provides 3 coaching recommendations with practice drills
4. Drafts a follow-up email and next call agenda
**Result**: Structured coaching feedback the manager can use in their 1:1

### Example 2: MEDDPICC scoring
**User says**: "Score my rep's call using MEDDPICC — they confirmed pain and got metrics, but didn't ask about decision process or economic buyer."
**Skill does**:
1. Creates a MEDDPICC extraction table showing Metrics and Implicate the Pain as partially addressed
2. Flags Decision Process, Economic Buyer, and Champion as critical gaps
3. Provides specific questions for the next call to fill each gap
**Result**: Clear MEDDPICC gap analysis with an actionable next-call plan

## Troubleshooting

### No transcript available
**Solution**: Have the rep describe what happened in detail — key moments, objections raised, how the call ended, and what was agreed. The skill can still provide a useful review from a narrative description, though transcript-based reviews are more precise.

### Rep is defensive about feedback
**Solution**: Use the "best moment" analysis first to lead with what went well. Frame coaching points as "opportunities" not "mistakes." Focus on 1-2 highest-impact areas rather than listing every issue. The self-review mode (Step 1, option B) helps reps build self-awareness before receiving external feedback.

### Scoring feels subjective
**Solution**: Ground every score in specific evidence from the call. Use the methodology layers (MEDDPICC, SPIN, Challenger) for more objective, criteria-based assessment. Compare scores across multiple calls to calibrate — a single call review is a snapshot, not a verdict.
