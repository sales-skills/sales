# Cloutboost Platform Guide

## How Cloutboost works

Cloutboost operates as both a **self-serve platform (Portal)** and a **managed agency service**:

1. **Portal** — SaaS product for discovering gaming influencers, managing campaigns, and tracking performance
2. **Managed Service** — Cloutboost's team handles influencer selection, outreach, negotiation, content coordination, and reporting end-to-end

## Portal — Influencer Discovery

The Portal provides access to **1.5M+ gaming influencers** across YouTube, Twitch, and TikTok with daily-refreshed data.

**Basic search filters:**
- Followers / subscribers
- Average video views
- True reach
- Concurrent viewers (Twitch)
- Country and language
- Platform (YouTube, Twitch, TikTok)

**Advanced filters (game-specific):**
- Game genre
- Specific game titles played
- Email verification status
- Talent agency representation
- Content activity status
- Shorts ratio and upload frequency
- Video duration metrics

**Data sources:** Social media APIs (YouTube, Twitch), RAWG and IGDB game databases, public sources, and manual verification.

## Portal — Campaign Management

- Multi-stage workflow: influencer selection → outreach → scheduling → content production → review → publication
- Real-time tracking of outreach status, content submissions, and campaign milestones
- Direct content review and approval within the platform before publication
- Automated daily reporting from social media APIs

## Portal — Analytics & Reporting

- Near real-time reporting on reach, engagement, post performance, and costs
- Multi-metric influencer comparison
- CSV export (plan-dependent limits)
- Customized reporting based on KPIs that matter to each client

## Portal pricing

| Plan | Price | Users | Campaigns | CSV Exports |
|---|---|---|---|---|
| **Indie** | $279/yr | 2 | — | 2,500 |
| **Studio** | $519/yr | 10 | 10 | 5,000 |
| **Scale** | $1,029/yr | Unlimited | 50 | 10,000 |
| **Agency** | Custom | Unlimited | Unlimited | 15,000 |

## Managed service — Agency

Cloutboost's agency service handles full-cycle campaigns for brands with $5K+ budgets.

**Services included:**
- **Influencer campaigns** — AI-powered creator selection from the 1.5M+ database, outreach, negotiation, content coordination, and performance optimization
- **Retargeting** — repurposing influencer-generated content for paid ad campaigns. Claimed 3x higher CTR vs standard ads by retargeting users who engaged with influencer content
- **PR / Media Relations** — gaming press outreach, press releases, feature coverage, review key distribution, press kit creation

**Pricing models for managed service:**
| Model | How it works |
|---|---|
| **Pay Per Post** | Flat fee based on predicted engagement |
| **Pay Per View (CPV)** | Cost per view model |
| **Mixed Model** | Guaranteed payment + CPV with cap |
| **Sponsorship Package** | Integrated short or long-term sponsorship including cross-platform branding |

**Fee structure:** Project-based or monthly retainer.

## Retargeting with Cloutboost

Cloutboost's retargeting service repurposes influencer content for paid advertising:

1. **Content capture** — collect high-performing influencer videos, streams, and posts
2. **Audience building** — build retargeting audiences from users who watched, clicked, or engaged with influencer content
3. **Ad creation** — repurpose influencer content into ad formats (video ads, display, social)
4. **Campaign optimization** — optimize based on performance data, claimed 3x CTR improvement over standard creative

This bridges influencer marketing (awareness) with performance marketing (acquisition).

## PR services

Cloutboost's PR offering focuses specifically on gaming media:
- Press release creation and distribution to gaming outlets
- Review key management and distribution
- Press kit creation
- Media coverage tracking
- Relationship management with gaming journalists and editors

## API

Cloutboost has a Queryable API Server (v0.0.1) available at `api.portal.cloutboost.com`. Currently early-stage with minimal public documentation.

- **Status**: v0.0.1 — expect limited endpoints and possible breaking changes
- **Auth**: Not publicly documented — contact Cloutboost for access
- **Documentation**: Minimal — check with Cloutboost support for current endpoint availability

## Integrations

- Campaign ROI Calculator tool
- Google Analytics integration for measurement
- Social media API data feeds (YouTube, Twitch)
- RAWG and IGDB game databases for game metadata
