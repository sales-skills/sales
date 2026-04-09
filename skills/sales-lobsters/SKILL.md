---
name: sales-lobsters
description: "Lobsters (lobste.rs) platform help — invite-only computing-focused link aggregation community (10K+ daily views, est. 2012). Covers invitation system (public invite tree, 70-day new-user restrictions), posting norms (self-promotion <25% rule, release/show tags, anti-marketing culture), tagging system (50+ predefined tags), community moderation (public mod log, flagging, Hats system), and JSON API (read-only, append .json to any URL). Use when posting a developer tool or technical project on Lobsters, getting a Lobsters invite, understanding Lobsters norms, or comparing Lobsters vs Hacker News. Do NOT use for multi-directory launch coordination (use /sales-launch-directory). Do NOT use for Hacker News (use /sales-launch-directory for Show HN guidance)."
argument-hint: "[describe what you need help with on Lobsters]"
license: MIT
version: 1.0.0
tags: [sales, product-launch, startup, community, platform]
github: "https://github.com/lobsters/lobsters"
---

# Lobsters Platform Help

Helps with everything related to Lobsters (lobste.rs) — an invite-only, computing-focused link aggregation and discussion community. Founded by Joshua Stein (jcs) in July 2012, currently administered by Peter Bhat Harkins (pushcx). Open-source Rails app with 4,600+ GitHub stars.

## Step 1 — Gather context

Ask the user:

1. **What are you trying to do on Lobsters?**
   - A) Share my developer tool or project
   - B) Get an invitation to join
   - C) Share a blog post or technical article
   - D) Understand the community norms before posting
   - E) Compare Lobsters with Hacker News or other communities
   - F) Something else — describe it

2. **What's your product/project?**
   - A) Open-source developer tool
   - B) Commercial SaaS / developer tool
   - C) Blog post or technical writeup
   - D) Language/framework release
   - E) Not a product — just want to participate

3. **Are you already a Lobsters member?**
   - A) Yes — I have an account
   - B) No — I need an invitation
   - C) Not sure / just learned about it

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to another skill, route:
- Multi-directory launch planning → `/sales-launch-directory`
- Product Hunt launch → `/sales-producthunt`
- Hacker News Show HN → `/sales-launch-directory` (covers Show HN in third-party table)
- Indie Hackers engagement → `/sales-indiehackers`
- Landing page optimization → `/sales-checkout`

Otherwise, answer directly from the Lobsters knowledge below.

## Step 3 — Lobsters platform reference

### Platform overview

Lobsters is a computing-focused link aggregation and discussion site, similar to Hacker News but smaller, invite-only, and more focused on technical depth. The community actively resists marketing, self-promotion abuse, and off-topic content. It rewards deep technical content, open-source contributions, and genuine community participation.

**Key differences from Hacker News:**
- **Invite-only** — every member was invited by an existing member, with a public invitation tree
- **Mandatory tagging** — every submission gets categorized with predefined tags
- **Transparent moderation** — all mod actions are public with moderator identities disclosed
- **No shadow banning** — banned users are notified and bans are public
- **Hats system** — verified authority markers (e.g., project maintainer, company employee) for credible responses
- **Smaller, tighter community** — higher signal-to-noise ratio, but less traffic

### Invitation system

Lobsters is invite-only. The invite system exists for spam control and community acculturation, not elitism.

**How to get invited:**
1. **Ask someone you know** — the fastest path. If you recognize someone from the site, reach out directly.
2. **Invitation queue** — submit your name, email, and a brief note (GitHub profile, blog, etc.) at lobste.rs/invitations. Logged-in members can browse and invite from the queue.
3. **IRC/chat** — enter the community chat channel and ask. If someone's around, they'll vet you and send an invite.
4. **Be a content author** — if a link to your work was submitted to Lobsters, mention that in your invite request. The community actively wants content creators to join.

**New user restrictions (first 70 days):**
- Cannot send invitations
- Cannot submit from previously unseen domains
- Cannot flag content
- Cannot use certain tags: `meta`, `rant`, `job`, `ask`
- Green username identifies new members

**Accountability**: The public invitation tree means if you spam or misbehave, your inviter may lose invite privileges or face consequences. This creates natural self-policing.

### Posting norms and self-promotion

**The <25% rule**: Self-promotion should be less than a quarter of your total stories and comments. Authors participating genuinely in the community is welcomed — treating the site as a write-only announcement channel is not.

**What works on Lobsters:**
- Technical blog posts with real depth (design decisions, benchmarks, tradeoffs)
- Open-source project releases using the `release` tag
- "Ask" posts seeking community input on technical problems
- Content that would still be interesting 5-10 years from now

**What gets flagged or downvoted:**
- Product marketing disguised as technical content
- Commercial product announcements (use `release` tag sparingly — it's overwhelmingly for FLOSS)
- Entrepreneurship, management, company news, investing
- Low-effort link drops with no context
- Content marketing blog posts from companies

**The "authored by" signal**: When you submit your own content, it's marked "authored by" rather than "via". This is visible to the community — be honest about it. The community gives a tiny ranking boost to author-submitted content.

### Tagging system

All submissions must be tagged from a predefined list. Key tags for product/project sharing:

| Tag | Use for |
|---|---|
| `release` | Software releases (overwhelmingly FLOSS) |
| `show` | Show the community what you built |
| `ask` | Ask for feedback, advice, or recommendations |
| `practices` | Development practices, workflows, methodologies |
| `web` | Web development, browsers, HTTP |
| `rust`, `c++`, `python`, `javascript`, etc. | Language-specific content |
| `linux`, `networking`, `databases`, `security` | Domain-specific content |
| `vibecoding` | AI/LLM coding tools and workflows |

Multiple tags per submission are supported. Choose the most specific tags — good tagging increases visibility to interested readers.

### Moderation

- **Public mod log** — every action is visible with moderator identity
- **Flagging** requires 50+ karma. Two flags trigger mod review
- **Story flags**: Off-topic, Already Posted, Broken Link, Spam
- **Comment flags**: Off-topic, Me-too, Troll, Unkind, Spam
- **No shadow banning** — bans are explicit with notification
- **Less than 1% of content** gets flagged — the invite system handles most quality control

### Hats system

"Hats" are verified authority markers. If you're a maintainer of a project being discussed, or an employee of a relevant company, you can speak with a Hat that shows your affiliation. This adds credibility without requiring moderator intervention.

### API

Lobsters has an informal JSON API — read-only, no authentication:
- Append `.json` to any URL (e.g., `lobste.rs/newest.json`, `lobste.rs/~username.json`)
- 25 results per page with pagination
- Unofficial wrappers exist in Rust, Python, and Java
- No write API — you cannot post or comment programmatically

### Lobsters vs Hacker News

| Factor | Lobsters | Hacker News |
|---|---|---|
| Access | Invite-only | Open registration |
| Size | ~10K+ daily views | ~5M+ monthly visits |
| Focus | Computing/programming only | Tech + startups + general interest |
| Moderation | Public mod log, transparent | Opaque (dang) |
| Tags | Mandatory predefined tags | None |
| Self-promo | <25% rule, author-flagged | Informal, Show HN for launches |
| Tone | Technical, measured | Varies widely |
| Marketing tolerance | Very low — commercial content flagged | Low but higher than Lobsters |
| Backlink | DR unconfirmed | DR91 dofollow |
| Best for | Deep technical content, FLOSS releases | Broad tech launches, Show HN |

### Pricing

| Tier | Cost | What you get |
|---|---|---|
| Free (invite-only) | $0 | Full access — posting, commenting, voting, RSS, JSON API |

## Step 4 — Actionable guidance

Based on the user's situation:

**For sharing an open-source project:**
1. Get a Lobsters account (invitation queue or ask someone you know)
2. Spend 2-4 weeks participating genuinely — comment on others' posts, share interesting links you find
3. When ready, submit your project with the `release` or `show` tag + relevant technical tags
4. Write a substantive submission — not just a link, but context about what it does and why
5. Be present in the comments to answer questions — author engagement is expected and rewarded
6. Keep self-promotion under 25% of your total activity

**For sharing a commercial developer tool:**
1. **Be cautious** — Lobsters is hostile to commercial marketing. Your tool needs genuine technical merit.
2. Frame it as technical content, not an announcement — write about the engineering challenges, architecture decisions, or novel approach
3. Use a blog post format (e.g., "How we built X" or "Why we chose Y architecture") rather than a product page
4. If your tool is open-source or has an open-source component, lead with that
5. Engage genuinely in the community first — the <25% rule means you need ~3 non-promotional contributions for every 1 self-promotion

**For getting a Lobsters invite:**
1. Check the invitation queue at lobste.rs/invitations — submit your name, email, and a link to your GitHub/blog
2. If you have existing connections in the community, ask them directly
3. Join the IRC/chat channel and ask — be ready to explain who you are and what you'd contribute
4. If your content has been posted to Lobsters before, mention that — content creators are actively welcomed

## Gotchas

*Best-effort from research — review these, especially items about community norms that may shift.*

- **Invite-only is real.** You cannot create an account without an invitation. The invitation queue exists but can be slow — direct outreach to a member is faster.
- **Anti-marketing culture is strong.** Even well-intentioned product shares can get flagged if they feel like marketing. The community has discussed banning self-promotion entirely (consensus: don't ban it, but keep the <25% rule).
- **"Release" tag is for FLOSS.** Technically not restricted, but proprietary/commercial releases posted with the `release` tag are frequently flagged as spam.
- **70-day new user restrictions.** Fresh accounts can't submit from new domains, can't flag, can't use `meta`/`ask`/`job`/`rant` tags, and can't send invites. Plan accordingly — don't create an account and immediately try to post your product.
- **Your inviter is accountable.** If you abuse the platform, your inviter may face consequences. This means invite requests from obvious marketers are less likely to be fulfilled.
- **Traffic is modest.** ~10K daily views is small compared to Hacker News (~5M monthly). Set realistic expectations — Lobsters is a credibility and community play, not a traffic source.
- **DR is unconfirmed.** Lobsters' domain rating and dofollow/nofollow status haven't been independently verified in our research. Don't rely on it for SEO backlinks.
- **No public email.** The admin (pushcx) and founder (jcs) don't have public contact emails. Community contact happens through the site's chat or GitHub issues.

## Related skills

- `/sales-launch-directory` — Coordinate launches across 20+ directories including Lobsters. Install:
  `npx skills add sales-skills/sales --skills sales-launch-directory`
- `/sales-producthunt` — Product Hunt platform help (largest launch platform, DR91 dofollow)
- `/sales-indiehackers` — Indie Hackers platform help (founder community, 165K+ entrepreneurs)
- `/sales-peerlist` — Peerlist platform help (weekly Launchpad, 203K+ users)
- `/sales-devhunt` — DevHunt platform help (developer tools, GitHub-authenticated voting)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Share an open-source CLI tool on Lobsters
**User says**: "I built an open-source CLI tool for database migrations and want to share it on Lobsters"
**Skill does**:
1. Confirms this is ideal Lobsters content — FLOSS dev tool
2. Recommends getting an account via invitation queue with GitHub link
3. Advises 2-4 weeks of genuine participation before posting
4. Suggests `release` + `databases` + `cli` tags
5. Recommends writing a brief technical description, not just dropping a GitHub link
6. Emphasizes staying in comments to answer technical questions
**Result**: Complete Lobsters submission plan with community integration strategy

### Example 2: Understand Lobsters norms before posting
**User says**: "I just got a Lobsters invite — what do I need to know before posting?"
**Skill does**:
1. Explains the <25% self-promotion rule
2. Covers the 70-day new user restrictions (can't submit new domains, flag, or use certain tags)
3. Describes the tagging system and how to choose tags
4. Warns about the anti-marketing culture — frame technical content around engineering, not product
5. Recommends starting with comments and non-self-promotional links
**Result**: New member onboarding guide with specific dos and don'ts

### Example 3: Compare Lobsters and Hacker News for a dev tool launch
**User says**: "Should I post my developer tool on Lobsters or Hacker News?"
**Skill does**:
1. Compares the two: HN is open, much higher traffic (~5M/mo vs ~10K/day), broader audience
2. Lobsters is invite-only, technical-only, hostile to marketing, but higher signal-to-noise
3. For open-source tools: both work, Lobsters is more receptive if you participate first
4. For commercial tools: HN (Show HN) is more tolerant, Lobsters will likely flag
5. Recommends using both if possible — Lobsters for community credibility, HN for traffic
**Result**: Platform comparison with clear recommendation based on product type

## Troubleshooting

### Post flagged as spam or off-topic
**Symptom**: Submitted a project link and it was flagged or downvoted quickly
**Cause**: Lobsters has a low tolerance for marketing content. Common triggers: product page URL (not blog post), commercial tool without open-source component, account with no prior community participation, or using the `release` tag for a proprietary product.
**Solution**: Reframe the submission as technical content — write a blog post about the engineering behind it, not the product itself. Build community participation first (comments, sharing others' work). If your tool has an open-source component, lead with that. Respect the <25% self-promotion rule.

### Can't get a Lobsters invite
**Symptom**: Submitted to the invitation queue but haven't received an invite
**Cause**: The queue depends on existing members browsing it and choosing to invite you. If your profile/note doesn't signal genuine technical interest, members may skip you.
**Solution**: Make your invitation request compelling — link to your GitHub profile, blog, or a specific technical project. Mention if your content has been posted on Lobsters before. Try direct outreach: join the IRC/chat channel, or reach out to a Lobsters member you know. Having a visible technical presence online increases your chances.

### New account can't submit to a domain
**Symptom**: Trying to submit a link but getting an error about unseen domains
**Cause**: New users (first 70 days) cannot submit from domains that haven't been submitted before. This is a spam prevention measure.
**Solution**: Wait until the 70-day restriction lifts, or ask an established member to submit the link on your behalf. If the domain is your personal blog, this restriction is particularly frustrating — the workaround is to participate in other ways first.
