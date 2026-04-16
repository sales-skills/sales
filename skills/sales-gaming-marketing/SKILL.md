---
name: sales-gaming-marketing
description: "Gaming influencer marketing strategy — finding gaming creators, streamer partnerships, game launch influencer campaigns, budget allocation for gaming, measuring gaming influencer ROI, and platform comparison. Covers creator discovery for gaming (YouTube, Twitch, TikTok, Kick), streamer outreach and negotiation, game key and early access gifting, launch timing and campaign sequencing, gaming-specific metrics (wishlists, installs, concurrent players, Steam traffic), content formats (Let's Play, first impressions, sponsored streams, gameplay trailers), and gaming influencer pricing. Use when you need streamers or gaming creators for a launch but don't know where to find them, unsure how much to budget for gaming influencer campaigns, can't tell if a gaming campaign actually drove wishlists or installs, or deciding between gaming influencer agencies. Do NOT use for Cloutboost-specific config (use /sales-cloutboost), Famesters-specific config (use /sales-famesters), general influencer marketing strategy (use /sales-influencer-marketing), or non-gaming influencer campaigns (use /sales-influencer-marketing)."
argument-hint: "[describe your gaming marketing question — e.g., 'how do I find Twitch streamers for my indie horror game' or 'what budget do I need for a Steam launch influencer campaign']"
license: MIT
version: 1.0.0
tags: [sales, gaming, influencer-marketing, streamer-partnerships, strategy]
---

# Gaming Influencer Marketing Strategy

Helps the user plan and execute influencer marketing campaigns specifically for video games — from finding gaming creators and negotiating streamer partnerships through game launch campaign sequencing, budget allocation, and gaming-specific ROI measurement.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What do you need help with?**
   - A) Finding gaming influencers or streamers for my game
   - B) Planning a game launch influencer campaign
   - C) Budgeting for gaming influencer marketing
   - D) Outreach and negotiation with gaming creators
   - E) Measuring gaming influencer campaign ROI
   - F) Choosing a gaming influencer agency or platform
   - G) Content strategy (what type of content to commission)
   - H) Something else — describe it

2. **What kind of game?**
   - A) PC (Steam, Epic, GOG)
   - B) Console (PlayStation, Xbox, Nintendo)
   - C) Mobile (iOS, Android)
   - D) Multi-platform
   - E) VR
   - F) Other — describe it

3. **What stage is the game in?**
   - A) Pre-announcement — building awareness
   - B) Wishlist phase — driving Steam wishlists
   - C) Launch week — maximizing day-one sales/installs
   - D) Post-launch — sustaining player base, DLC, updates
   - E) Live service / ongoing — seasonal content, events

4. **Budget range?**
   - A) Bootstrapped (game keys + early access only, no cash)
   - B) Small ($1K-5K)
   - C) Medium ($5K-25K)
   - D) Large ($25K-100K)
   - E) AAA ($100K+)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Cloutboost platform setup/config → `/sales-cloutboost`
- Famesters agency services → `/sales-famesters`
- General influencer marketing strategy (not gaming-specific) → `/sales-influencer-marketing`
- Retargeting influencer content for paid ads → `/sales-retargeting`
- PR and media relations for game launches → `/sales-media-relations`
- Community building on Reddit → relevant subreddit strategy

Otherwise, answer directly from the strategy knowledge below.

## Step 3 — Gaming influencer marketing reference

**Read `references/platform-guide.md`** for detailed module documentation, pricing, integrations, and data model.

*You no longer need the platform guide details — focus on the user's specific situation.*

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Creator discovery plan** — platform-by-platform search strategy for their game genre
2. **Launch campaign calendar** — week-by-week plan from pre-launch through post-launch
3. **Budget recommendation** — allocation across tiers, platforms, and content formats
4. **Outreach templates** — gaming-specific outreach for different creator tiers
5. **Measurement framework** — which metrics to track and how to set up attribution

## Gotchas

> *Best-effort from research — review these, especially items about pricing and agency capabilities that may change.*

- **Wishlists ≠ sales.** Industry average wishlist-to-purchase conversion is 15-25% on launch day. Don't equate wishlist count with revenue. A creator driving 5,000 wishlists at 20% conversion = 1,000 sales.
- **Gaming creators value authenticity over payment.** Many mid-tier gaming creators will turn down paid sponsorships if the game doesn't fit their channel. A genuine match matters more than budget. Focus on genre alignment first, then negotiate.
- **Twitch has a short content shelf life.** A sponsored Twitch stream generates views during the live broadcast + 24-48 hours of VOD views. YouTube videos have months or years of long-tail discovery. Budget accordingly.
- **Demo campaigns outperform wishlist-only campaigns.** If your game has a playable demo, lead with demo coverage. Creators playing a demo generates more authentic content than reacting to a trailer.
- **Steam algorithm amplifies external traffic.** Steam's discovery algorithm rewards games that drive traffic from external sources. Influencer campaigns can trigger a virtuous cycle where external traffic → Steam algorithm boost → organic discovery.
- **Nano creator volume beats single macro creator.** For indie games, 50 nano creators with game keys ($0 cost) often generate more total coverage and wishlists than a single $5K macro creator. Cast wide at the nano tier.
- **Keymailer and Woovit are free for key distribution.** Don't pay for nano-tier outreach. Use game key platforms where creators actively opt in to receive games in your genre.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Before recommending a specific platform skill

This skill covers a strategy domain across many platforms. **Before pointing the user to any specific platform skill** (any `/sales-{platform}` listed in `## Related skills`, e.g., `/sales-mailshake`, `/sales-klaviyo`, `/sales-apollo`), read that platform skill's actual `SKILL.md` first. The 1-line description in `## Related skills` is enough to *identify* a candidate — it's not enough to *commit* to it or to write a prompt that invokes it well.

**How to read it:**
- If `~/.claude/skills/{skill-name}/SKILL.md` exists locally, `Read` it.
- For `sales-*` skills, `WebFetch` directly from this repo: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/{skill-name}/SKILL.md` — e.g., for `sales-mailshake`: `https://raw.githubusercontent.com/sales-skills/sales/main/skills/sales-mailshake/SKILL.md`.
- For non-`sales-*` skills (third-party), look up `{org}/{repo}` in `~/.claude/skills/sales-do/references/skill-sources.md` if installed and fetch the same `skills/{skill-name}/SKILL.md` path under that repo.

**After reading,** ground your recommendation in something concrete from the SKILL.md (its scope, a sub-flow, its `argument-hint` shape, or a "Do NOT use for..." negative trigger). Align any generated invocation with the platform skill's `argument-hint`. If the platform skill turns out not to fit the user's situation, swap to another or handle the question here directly rather than recommending a poor fit.

## Related skills

- `/sales-cloutboost` — Cloutboost platform help — Portal discovery, campaign management, retargeting, PR
- `/sales-famesters` — Famesters platform help — full-cycle influencer agency (gaming, fintech, iGaming, apps), BuzzGuru analytics
- `/sales-influencer-marketing` — Influencer marketing strategy across platforms — platform comparison, creator vetting, ROI measurement
- `/sales-retargeting` — Retargeting strategy — repurpose influencer content for paid ads
- `/sales-media-relations` — Media relations strategy — gaming press outreach, press kits, coverage tracking
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Indie horror game launch on Steam
**User says**: "I'm launching an indie horror game on Steam in 6 weeks. Budget is $3K for influencer marketing. How should I approach this?"
**Skill does**:
1. Designs a 6-week launch sequence: keys to 50 nano creators now, 5-8 paid micro creators for first impressions at week -3, embargo'd review copies at week -1
2. Allocates budget: $2K on 5 micro YouTube creators ($400 each), $500 on 3 TikTok nano creators ($150 each), $500 reserve for launch-week Twitch streams
3. Recommends Keymailer for free nano-tier key distribution
4. Sets up measurement: Steam UTM links per creator, wishlist tracking dashboard
**Result**: User has a complete 6-week campaign plan with budget allocation and measurement framework

### Example 2: Mobile game influencer strategy
**User says**: "We're a mobile game studio launching a puzzle game on iOS and Android. We've never done influencer marketing. Where do we start?"
**Skill does**:
1. Explains that mobile game influencer marketing focuses on TikTok and YouTube (less Twitch, which skews PC/console)
2. Recommends starting with 20-30 TikTok nano creators for short-form gameplay clips at $50-150 each
3. Notes Cloutboost Portal filters can narrow to mobile game creators specifically
4. Designs a test campaign: $2K budget, 15 creators, track install attribution via unique promo codes or referral links
**Result**: User has a beginner-friendly mobile influencer strategy with specific next steps

### Example 3: Measure gaming influencer campaign ROI
**User says**: "We spent $15K on YouTube creators for our Steam launch. How do I tell if it worked?"
**Skill does**:
1. Identifies available data: Steam UTM links (if used), wishlist timeline vs video publish dates, total views + engagement
2. Calculates cost per wishlist and cost per install from available data
3. Benchmarks against industry averages ($0.50-3.00 per wishlist, 15-25% conversion)
4. Identifies which creators drove the most wishlists per dollar and recommends re-engaging top performers for post-launch content
**Result**: User has a concrete ROI analysis and knows which creators to invest in again

## Troubleshooting

### Influencer content didn't drive wishlists
**Symptom**: Creator videos got views but wishlist numbers didn't move
**Cause**: Missing attribution links, wrong audience-game fit, or content didn't include a clear call to action
**Solution**: Check if Steam UTM links were used — without them, wishlist attribution is impossible. Review the creator's audience demographics (PC gamers vs console/mobile). For future campaigns, require creators to include a Steam link in the description and verbally mention "link below to wishlist." Compare the wishlist timeline against video publish times to find the correlation, even without UTM tracking.

### Can't find creators in your niche genre
**Symptom**: Searching for creators who play your specific genre but finding very few
**Cause**: Niche genres (farming sim, city builder, visual novel) have fewer dedicated creators than mainstream genres (FPS, RPG, survival)
**Solution**: Broaden the search to adjacent genres. Look for creators who play similar games rather than the exact genre. Check Steam's "More Like This" for your game and search for creators who covered those titles. Use Keymailer — creators self-select into genres they want to cover, so niche matches are higher quality. Consider TikTok, where niche gaming content often has outsized reach relative to creator size.

### Gaming creators not responding to outreach
**Symptom**: Sending emails to 50+ creators but getting under 10% response
**Cause**: Generic outreach, wrong email address, or creator doesn't cover your genre
**Solution**: Verify genre alignment before reaching out (check their last 10 videos). Use their business email from YouTube's About page, not a guessed address. Lead with the game — attach a game key or demo link in the first email. Keep it to 3-4 sentences. Gaming creators get hundreds of pitches monthly — make yours easy to act on (key included, no lengthy briefs, no NDAs for initial contact).
