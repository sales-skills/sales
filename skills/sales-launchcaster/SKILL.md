---
name: sales-launchcaster
description: "LaunchCaster platform help — Web3 project discovery directory built on Farcaster ('Product Hunt for Web3'). Covers project submission via Farcaster casts, listing optimization for Web3 audience, voting mechanics (wallet-connected), newsletter exposure (LaunchCaster Weekly), and Farcaster Frame integration. Use when submitting a Web3 project to LaunchCaster, optimizing a LaunchCaster listing, understanding LaunchCaster voting, or launching on Farcaster via @launch. Do NOT use for non-Web3 product launches (use /sales-launch-directory). Do NOT use for Product Hunt (use /sales-producthunt)."
argument-hint: "[describe what you need help with on LaunchCaster]"
license: MIT
version: 1.0.0
tags: [sales, product-launch, startup, directory, platform, web3, farcaster]
---

# LaunchCaster Platform Help

Helps with everything related to using LaunchCaster — a Web3 project discovery platform built on Farcaster, positioning itself as "Product Hunt for Web3." Backed by Y Combinator (W21) and a16z crypto.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are you trying to do on LaunchCaster?**
   - A) Submit / launch my Web3 project
   - B) Get more votes on an existing launch
   - C) Understand how LaunchCaster works
   - D) Compare LaunchCaster to other launch platforms
   - E) Something else — describe it

2. **What type of Web3 project is it?**
   - A) DeFi protocol or token
   - B) NFT collection or marketplace
   - C) Farcaster Frame or client
   - D) Developer tool or API (onchain)
   - E) DAO tooling or governance
   - F) Consumer crypto app
   - G) Something else — describe it

3. **Do you have a Farcaster account?**
   - A) Yes — active Farcaster user
   - B) No — need to set one up first
   - C) Not sure what Farcaster is

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a different skill, route:
- Multi-directory launch strategy → `/sales-launch-directory`
- Product Hunt launch → `/sales-producthunt`
- General audience growth → `/sales-audience-growth`
- Email marketing for Web3 → `/sales-email-marketing`
- Landing page optimization → `/sales-checkout`

Otherwise, answer directly from the platform knowledge below.

## Step 3 — LaunchCaster platform reference

### How LaunchCaster works

LaunchCaster is a curated discovery platform for Web3 projects, tightly integrated with the Farcaster social protocol. Key mechanics:

**Submitting a launch:**
1. You must have a **Farcaster account** (requires an invite or onboarding via Warpcast)
2. Start a new Farcaster cast or reply to one, mentioning **`@launch`**
3. The LaunchCaster bot automatically picks up the cast and creates a launch listing
4. Your launch appears on launchcaster.xyz with its own page, vote count, and comment thread

**There is no web form or dashboard for submitting.** Everything flows through Farcaster casts. This is both the platform's strength (native to the Farcaster community) and its main barrier (you must be on Farcaster first).

**Voting:**
- Anyone can view launches on launchcaster.xyz
- To vote, connect a crypto wallet (wallet connect)
- Votes determine trending/top rankings
- Average LaunchCaster launch reportedly gets more upvotes than the average Product Hunt launch (smaller but more engaged community)

**Discovery:**
- Browse by: Trending, Top, New
- Newsletter: "LaunchCaster Weekly" delivers curated launches to subscribers
- Farcaster Frame launches get additional visibility within the Farcaster feed

### Platform data model

| Concept | Description |
|---|---|
| Launch | A project listing, created from a Farcaster cast mentioning @launch |
| Vote | Wallet-connected upvote on a launch |
| Comment | Discussion on a launch page (mirrors Farcaster thread) |
| Frame | Interactive Farcaster mini-app — launches that are Frames get enhanced display |
| LaunchPass | NFT-based access pass (ERC721 on Base) |

### Who uses LaunchCaster

- **Builders**: Farcaster developers, crypto/DeFi teams, NFT creators, onchain app builders
- **Audience**: 9,000+ builders, 1,000+ project launches, concentrated in the Farcaster/Base ecosystem
- **Niche**: Web3-only. Traditional SaaS, mobile apps, or non-crypto products are not a fit.

### Pricing

| Tier | Cost | What you get |
|---|---|---|
| Standard | Free | Full launch listing, voting, comments, newsletter eligibility |

There are no paid tiers. LaunchCaster is described as a "public good" for Web3 builders.

### Backlink value

| Metric | Value |
|---|---|
| Domain | launchcaster.xyz |
| DR/DA | Unconfirmed (.xyz domain, niche Web3 audience) |
| Dofollow | Unconfirmed — check your listing's HTML after submission |
| Traffic | Niche — primarily Farcaster community traffic |

**Backlink expectation**: LaunchCaster is not an SEO play. The value is community visibility within the Farcaster/Web3 ecosystem, not domain authority or search traffic.

### Tech stack (for developers)

- Frontend: NextJS (Vercel), GraphQL Apollo, RainbowKit (wallet auth)
- Backend: MongoDB, Redis, Neynar API (Farcaster Hub), Lens Protocol
- Smart contracts: ERC721 LaunchPass on Base (Hardhat)
- Storage: IPFS via Pinata
- Email: Customer.io
- Analytics: Segment

## Step 4 — Actionable guidance

### Optimizing your LaunchCaster listing

Since launches are created from Farcaster casts, your cast IS your listing. Optimize it:

| Element | Best practice |
|---|---|
| Cast text | Lead with what the project does, not what it is. "Find the best new DeFi yields across L2s" > "Introducing YieldFinder Protocol" |
| Link | Include a working URL to your project — this becomes the listing link |
| Visual | Attach an image or video showing the product in action. Farcaster supports rich media |
| Timing | Post when the Farcaster community is most active (US morning/early afternoon ET) |
| Frame | If your project is a Farcaster Frame, include the Frame URL — Frame launches get enhanced display |
| Thread | Reply to your own cast with additional context, screenshots, or demo links |

### Getting votes

- **Engage on Farcaster before launching** — build relationships in the community first. Cold launches from new accounts get minimal traction.
- **Share your launch cast** — recast it, mention it in relevant Farcaster channels
- **Ask for honest feedback** — the Web3 community responds to builders who are transparent about what they're building and why
- **Don't vote-brigade** — the community is small enough that inauthentic voting is noticed

### Prerequisites: Getting on Farcaster

If the user doesn't have a Farcaster account:
1. Download **Warpcast** (the primary Farcaster client) — warpcast.com
2. Create an account (requires a small onchain registration fee on Optimism)
3. Set up your profile — real name/project name, bio, avatar
4. Engage for at least a few days before launching — follow relevant accounts, cast about your project development, join conversations
5. When ready, cast mentioning `@launch` to submit your project

## Gotchas

*Best-effort from research — review these, especially items about platform status and Farcaster requirements that may have changed.*

- **Farcaster account required.** You cannot submit a project without a Farcaster account. This is the biggest barrier — if you're not already in the Farcaster ecosystem, there's onboarding friction (wallet, registration fee, community norms).
- **Company status: Inactive.** Launcher Labs (the company behind LaunchCaster) is marked as inactive on Y Combinator and was acquired by Orange DAO. The platform may still function, but active development and support are uncertain. Verify the platform is still accepting submissions before investing time.
- **Web3 projects only.** Traditional SaaS, mobile apps, or non-crypto products will not resonate with this audience. The entire community is crypto-native.
- **Small but engaged community.** 9,000 builders is much smaller than Product Hunt's millions. Set expectations accordingly — this is a niche community play, not a mass-market launch.
- **No editorial queue.** Launches are instant (via cast), but visibility depends entirely on community engagement. There's no curation team featuring your project.
- **Backlink value uncertain.** DR/DA for launchcaster.xyz is unconfirmed. Don't rely on this for SEO — the value is community discovery.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-launch-directory` — Multi-directory launch strategy across 30+ platforms (sequencing, backlink stacking, budget allocation)
- `/sales-producthunt` — Product Hunt platform help (largest launch platform, DR91 dofollow)
- `/sales-devhunt` — DevHunt platform help (developer tool launches, GitHub auth voting)
- `/sales-audience-growth` — Grow your email list and subscriber base
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install:
  `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Launch a Farcaster Frame on LaunchCaster
**User says**: "I built a Farcaster Frame for onchain voting and want to launch it on LaunchCaster"
**Skill does**:
1. Confirms user has an active Farcaster account
2. Recommends crafting a cast that leads with the problem ("governance votes are scattered across Discord, Snapshot, and Tally") not the solution
3. Advises including the Frame URL directly in the cast for enhanced display
4. Suggests timing the cast for peak Farcaster activity
5. Recommends engaging with voters in the thread to build momentum
**Result**: Launch listed on LaunchCaster with Frame integration, visible in both the directory and Farcaster feeds

### Example 2: Compare LaunchCaster to Product Hunt for a DeFi project
**User says**: "Should I launch my DeFi protocol on LaunchCaster or Product Hunt?"
**Skill does**:
1. Explains LaunchCaster is Web3-native (Farcaster community, wallet-connected voting) while Product Hunt is general audience
2. Recommends LaunchCaster first for crypto-native feedback and community validation
3. Suggests Product Hunt second for broader visibility, but warns DeFi products often underperform on PH
4. Notes LaunchCaster is free with no queue vs Product Hunt's 24-hour competitive window
5. Routes to `/sales-launch-directory` for a full multi-platform sequencing plan
**Result**: Clear decision framework with recommendation to do both, LaunchCaster first

### Example 3: Non-Web3 product considering LaunchCaster
**User says**: "I built a SaaS analytics tool — should I submit to LaunchCaster?"
**Skill does**:
1. Explains LaunchCaster is exclusively for Web3 projects — traditional SaaS won't fit the audience
2. Routes to `/sales-launch-directory` for a multi-directory strategy across 30+ general-purpose platforms
3. Recommends ProductBurst, Open Launch, and Uneed as better alternatives for SaaS tools
**Result**: Redirected to appropriate platforms, no wasted time on a mismatched directory

## Troubleshooting

### Can't submit — no Farcaster account
**Symptom**: Want to launch on LaunchCaster but don't have a Farcaster account
**Cause**: LaunchCaster requires Farcaster — there's no web form or alternative submission method
**Solution**: Download Warpcast, create an account (requires wallet + small registration fee on Optimism), and engage for a few days before launching. If the Farcaster onboarding friction is too high, skip LaunchCaster and use `/sales-launch-directory` for Web2-friendly alternatives.

### Launch posted but getting zero votes
**Symptom**: Cast with @launch went through, listing exists, but no votes
**Cause**: New Farcaster accounts with no community presence get minimal engagement. LaunchCaster doesn't feature or promote launches — visibility is entirely community-driven.
**Solution**: Build Farcaster presence first. Follow and engage with builders in your niche. Join Farcaster channels related to your project's domain. Recast your launch, share it in relevant channels, and ask for feedback (not just votes).

### Platform appears inactive or broken
**Symptom**: Features not working, no response from team, stale content on the site
**Cause**: Launcher Labs is marked as inactive on Y Combinator and was acquired by Orange DAO. Active development may have ceased.
**Solution**: Check if the @launch bot on Farcaster still responds to casts. If the platform is no longer functional, skip it and use other Web3-friendly directories or launch directly on Farcaster/Warpcast without the LaunchCaster wrapper. Use `/sales-launch-directory` for active alternatives.
