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

### Platform comparison

| Feature | Meltwater | Cision | Muck Rack | Prowly | Agility PR | BuzzStream |
|---|---|---|---|---|---|---|
| **Database size** | Large (global) | 850K+ contacts, 190 countries | Large (auto-verified) | 1M+ contacts | 1M+ contacts (99.6% accuracy) | None (BYO lists) |
| **Contact verification** | Manual curation | Manual + auto | Auto-verified from published articles | Auto-verified | Daily verification | N/A |
| **Outreach tools** | Built-in pitching + tracking | Built-in (CisionOne) | Built-in email pitching | Built-in email pitching | Built-in distribution | Outreach CRM + templates |
| **Media monitoring** | Full suite (news + social + broadcast) | CisionOne monitoring | News + social monitoring | Basic monitoring | Basic monitoring | No |
| **Social listening** | Yes | Limited | No | No | No | No |
| **Coverage tracking** | Comprehensive | Comprehensive | Auto-detected coverage | Basic | Basic | Link monitoring |
| **Influencer marketing** | Yes | No | No | No | No | No |
| **API** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Starting price** | ~$6K/yr (sales call) | ~$7K/yr (sales call) | ~$5K/yr (sales call) | $259/mo | ~$400/mo | $24/mo |
| **Best for** | Enterprise PR teams wanting monitoring + outreach + influencers | Largest database, global enterprise | Auto-verified contacts, AI features | Mid-market teams wanting simple pitching | Mid-market wanting verified contacts | Link builders and digital PR |

#### When to choose each platform

- **Meltwater** — best for enterprise PR teams that need media monitoring, journalist outreach, and influencer marketing in one platform. Strongest for teams that need social listening alongside media relations.
- **Cision** — best for the largest journalist database (850K+ contacts). Enterprise pricing. Strong for global PR campaigns across 190+ countries. Traditional industry leader.
- **Muck Rack** — best for auto-verified journalist contacts (pulled from published articles, not self-reported). AI-powered pitch writing. Strong for teams that value contact accuracy over database size. Backed by $180M investment.
- **Prowly** — best for mid-market teams wanting a modern, affordable alternative to Cision/Meltwater. 1M+ contacts at $259/mo. Owned by Semrush. Good for digital PR and link building.
- **Agility PR** — best for teams that prioritize contact accuracy (99.6% verified daily). Mid-market pricing. Good for teams that need reliable data without enterprise costs.
- **BuzzStream** — best for digital PR and link building teams. Not a journalist database — it's an outreach CRM for managing relationships. Lowest entry price at $24/mo. Bring your own contact lists.

### Building media lists

#### 1. Define your media target profile

| Factor | Questions to answer |
|---|---|
| **Beat** | What topics does your story fit? (AI, fintech, cybersecurity, etc.) |
| **Tier** | Tier 1 (NYT, WSJ, TechCrunch), Tier 2 (industry pubs), Tier 3 (blogs, newsletters)? |
| **Geography** | Local, national, international? Which markets matter? |
| **Format** | Print, online, broadcast, podcast? |
| **Audience** | Who reads/watches this outlet? Does it match your target customer? |

#### 2. Segment your list

- **Exclusive list** (1-3 journalists) — your top targets for an exclusive or embargo
- **Priority list** (10-20 journalists) — strong beat match, likely to cover
- **Broad list** (50-100+ journalists) — wider net for general awareness

#### 3. Research each journalist

Before adding anyone to your list:
- **Read their last 5-10 articles** — do they actually cover your topic?
- **Check their social profiles** — X/Twitter, LinkedIn for recent interests and takes
- **Look for preferences** — do they say "don't pitch me about X" or "DMs open"?
- **Verify contact info** — stale email = wasted pitch. Check publication masthead.
- **Note their angle** — are they critical? Promotional? Data-driven? Match your pitch style.

### Writing effective pitches

#### Subject line rules
- **Under 60 characters** — gets truncated on mobile otherwise
- **Specific, not clever** — "AI startup raises $5M to automate compliance" beats "The future of compliance is here"
- **No ALL CAPS, no exclamation marks** — journalist inbox filters catch these
- **Include the news hook** — what's the story? Lead with it.

#### Pitch structure

```
Subject: [Specific news hook in under 60 chars]

Hi [First name],

[1 sentence: why you're reaching out to THEM specifically — reference their recent article]

[2-3 sentences: the news/story — what, why it matters, why now]

[1 sentence: what you can provide — data, interview, demo, exclusive]

[Sign off with full name, title, company, phone]
```

**Total length: 150 words max.** Journalists get 50-100+ pitches daily. Respect their time.

#### Personalization that works

| Do | Don't |
|---|---|
| Reference a specific article they wrote | "I'm a big fan of your work" |
| Connect your story to their beat | "Our product is revolutionary" |
| Explain why their readers care | "I'd love to get our name out there" |
| Offer an exclusive or early access | "Please share with your followers" |

### Outreach sequences

#### Timing

| Day | Action |
|---|---|
| **Day 0** | Send initial pitch (Tue-Thu, 6-9 AM local time) |
| **Day 3** | Follow-up #1 — brief, add new angle or data point |
| **Day 7** | Follow-up #2 — last touch, offer to provide any additional info |
| **Stop** | After 2 follow-ups. More is spam. Move to next journalist. |

**Best days to pitch**: Tuesday through Thursday. Monday inboxes are buried. Friday pitches get lost over the weekend.

**Best time**: 6-9 AM in the journalist's timezone. They scan inboxes before the day fills up.

#### Embargoes and exclusives

- **Embargo** — share the news early with selected journalists, who agree not to publish until a set date/time. Gives them time to write a thorough story.
- **Exclusive** — offer the story to ONE publication first. Higher chance of coverage but limits initial reach.
- **When to use**: Product launches, funding announcements, research reports. Don't embargo routine news.
- **Rules**: Always confirm the journalist accepts the embargo before sharing details. Get it in writing (email is fine).

### Coverage tracking

#### What to track

| Metric | What it measures | How to get it |
|---|---|---|
| **Clip count** | Number of articles/mentions | Monitoring tools or manual search |
| **Reach** | Potential audience of the publication | Tool-provided or SimilarWeb estimates |
| **Domain authority** | SEO authority of covering publications | Moz/Ahrefs DA scores |
| **Sentiment** | Tone of coverage (positive/neutral/negative) | Manual review or tool-automated |
| **Message pull-through** | Did your key messages appear in the article? | Manual review against your message framework |
| **Share of voice** | Your coverage vs. competitors | Monitoring tool comparison |
| **Backlinks** | Links from coverage to your site | Ahrefs/Semrush backlink reports |

#### Alternatives to AVE (Advertising Value Equivalency)

AVE (multiplying ad rates by coverage area) is widely discredited. Use instead:
- **Earned media impressions** — total potential views based on publication audience
- **Domain authority of covering outlets** — SEO value of backlinks
- **Message pull-through rate** — % of coverage that includes your key messages
- **Share of voice change** — did your SOV increase after the campaign?
- **Website traffic from coverage** — UTM tracking or referral traffic in analytics

### In Cloutboost (Gaming PR)

Cloutboost offers PR services specifically for the gaming industry as part of their managed agency service:

- **Gaming media focus**: Specialized relationships with gaming press outlets, reviewers, and editors
- **Services**: Press release creation and distribution, review key management and distribution, press kit creation, media coverage tracking
- **Integrated with influencer campaigns**: PR runs alongside influencer marketing — one agency coordinates both earned media and creator partnerships for game launches
- **Best for**: Game publishers and studios who want gaming PR bundled with influencer marketing in a single agency relationship. Eliminates the need for a separate PR agency for gaming media.
- **Limitation**: Gaming-only. Not a journalist database — Cloutboost handles outreach directly as a managed service. No self-serve PR tools. Requires $5K+ managed service engagement.

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

## Related skills

- `/sales-meltwater` — Meltwater platform help — monitoring, media relations, influencer marketing, API
- `/sales-social-listening` — Cross-platform social listening and brand monitoring strategy
- `/sales-influencer-marketing` — Influencer marketing strategy (creator outreach is different from journalist outreach)
- `/sales-cadence` — Outbound sequence design (adaptable to PR outreach cadences)
- `/sales-cloutboost` — Cloutboost platform help — gaming PR, influencer discovery, campaign management
- `/sales-gaming-marketing` — Gaming influencer marketing strategy — streamer partnerships, game launch campaigns
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

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
