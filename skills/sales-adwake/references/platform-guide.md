# Adwake Platform Reference

## Platform overview

Adwake is a tech-enabled mobile app advertising company powered by Entravision (NYSE: EVC). It provides managed-service user acquisition, branding, and retargeting campaigns for mobile apps across 100+ markets. Adwake was formed in March 2024 by integrating Entravision Mobile Growth Solutions (MGS) with BCNMonetize (acquired May 2023), combining BCNMonetize's proprietary technology with MGS's global supply and operations infrastructure.

**Target audience**: App developers, mobile-first companies, and brands that want a managed advertising partner rather than running UA campaigns in-house. Strongest in gaming, travel, fintech, retail, and food/beverage verticals.

**Team**: ~70 employees. CEO: Emre Atalay (BCNMonetize co-founder). President: Lucas Ceballos.

## Key modules

### User Acquisition (UA)
- CPI/CPA-optimized app install campaigns
- Cross-platform campaign management across multiple ad networks
- Real-time reporting dashboard with multivariate testing
- AI-powered creative and channel optimization
- Data-driven predictions for performance optimization
- Goal: scale app installs while keeping acquisition costs efficient

### Branding
- Brand awareness campaigns to position apps as category leaders
- Top-of-mind brand recall campaigns
- Cross-platform reach across display, video, and social networks
- Focus on driving long-term brand equity, not just installs

### Retargeting
- In-app retargeting to re-engage lapsed users
- Focus on users who installed but haven't converted
- Boosting ROI and LTV from existing user base
- Audience segmentation based on in-app behavior

### Playback Rewards (acquired March 2026)
- Customer loyalty and rewards technology
- Scalable loyalty solutions with improved targeting
- Performance optimization for brand engagement
- Gamified reward experiences for user retention
- Integrated into Adwake's existing campaign infrastructure

## Pricing and limits

Adwake uses a **performance-based pricing model** — you pay for results (installs, conversions, actions), not impressions or clicks. There are no publicly listed self-serve pricing tiers.

Key pricing characteristics:
- No public self-serve signup — sales-led onboarding
- Pricing negotiated per client based on vertical, volume, and goals
- Minimum spend thresholds likely exist but are not published
- Performance-based means lower risk but less cost transparency

**CPI benchmarks** (industry-wide, not Adwake-specific):
- iOS average: $4.70 globally
- Android average: $3.40 globally
- APAC: $1.50-3.00
- EMEA: $2.00-4.00
- LATAM: $0.50-2.00
- North America: $2.50-5.00

## Integrations

### Mobile Measurement Partners (MMPs)
Adwake integrates with standard MMPs for attribution:
- AppsFlyer
- Adjust
- Branch
- Other standard MMPs

MMP integration is essential for:
- Accurate install attribution
- In-app event tracking (purchases, registrations, level completions)
- Fraud detection and prevention
- Cross-network deduplication

### Ad Networks
Adwake manages campaigns across multiple ad networks and exchanges (specific network list not publicly disclosed). Their proprietary technology handles:
- Cross-platform campaign distribution
- Real-time bid optimization
- Creative rotation and multivariate testing
- Channel allocation based on performance data

### Dashboard
Adwake provides a proprietary unified reporting dashboard:
- Real-time cross-platform campaign metrics
- Customized multivariate reporting
- Automation rules for campaign optimization
- Data-based predictions for creative and channel decisions
- Demo available at demo.adwake.ai

## Data model

No public API is available. Data access is through:
- Adwake's proprietary dashboard
- MMP reporting (AppsFlyer/Adjust/Branch)
- Account team reports and exports

## Workflow setup

### Getting started with Adwake

1. **Initial contact** — reach out via adwake.ai or sales team
2. **Discovery call** — Adwake assesses your app, vertical, markets, goals, and budget
3. **MMP setup** — configure MMP postbacks for Adwake attribution
4. **Campaign planning** — Adwake proposes strategy, creative approach, and KPIs
5. **Creative production** — provide or co-create ad creatives for multivariate testing
6. **Launch** — Adwake launches campaigns across optimized channel mix
7. **Optimization** — ongoing performance optimization through dashboard and account team
8. **Reporting** — regular performance reviews with account manager

### Campaign optimization cycle

1. **Analyze performance** — review CPI, CPA, ROAS, LTV by channel, geo, and creative
2. **Test creatives** — multivariate creative testing (A/B/C variants)
3. **Optimize audiences** — narrow or expand targeting based on conversion data
4. **Adjust channel mix** — shift budget toward highest-performing networks
5. **Scale winners** — increase spend on campaigns hitting KPI targets

## Deep dives

### Managed service vs self-serve comparison

| Factor | Adwake (managed) | Self-serve DSPs (Remerge, Liftoff) |
|--------|------------------|------------------------------------|
| Campaign setup | Adwake handles | You build campaigns |
| Creative optimization | Adwake manages | You manage A/B tests |
| Bid management | Adwake optimizes | You set and adjust bids |
| Reporting | Dashboard + account team | Real-time self-serve dashboards |
| API access | None | Available (Remerge Reporting API, etc.) |
| Control level | Lower | Higher |
| Expertise required | Lower | Higher (need UA manager) |
| Best for | Teams without in-house UA ops | Teams with dedicated UA expertise |
| Cost transparency | Performance-based (less transparent) | CPM/CPC visible, markup known |

### Vertical-specific considerations

**Gaming**: Highest UA volume, most competitive CPIs. Focus on Day-1/Day-7 retention and ROAS. Creative is critical — test gameplay videos, character-driven ads, reward previews.

**E-commerce/Retail**: Seasonal spikes require flexible budgets. Retargeting cart abandoners is high-value. Deep linking to specific products matters.

**Fintech**: Higher CPIs due to regulatory ad requirements and smaller addressable audience. Quality > quantity — focus on CPA for verified users, not raw installs.

**Travel**: Highly seasonal. Book campaigns around travel planning windows. Retargeting for booking abandonment is high-ROI.

**Food/Beverage/Delivery**: Location-based targeting critical. First-order CPA is the key metric. Retarget users who installed but haven't ordered.

### Recent developments

- **March 2026**: Entravision acquired Playback Rewards' core technology and product assets, integrating them into Adwake. This adds scalable customer loyalty solutions with improved targeting and performance optimization for brands.
- **March 2024**: Entravision MGS rebranded to Adwake, integrating BCNMonetize acquisition under one brand with proprietary tech-oriented approach.
- **May 2023**: Entravision acquired BCNMonetize, bringing proprietary ad tech and Barcelona-based engineering team.
