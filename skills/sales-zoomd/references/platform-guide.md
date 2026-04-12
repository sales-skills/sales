# Zoomd Platform Reference

## Platform overview

Zoomd is a publicly traded (TSXV:ZOMD, OTC:ZMDTF) performance marketing and mobile user acquisition platform founded in 2012. It combines programmatic advertising, creator-generated content, influencer marketing, and AI-driven optimization (Albert.ai) into a unified platform. Zoomd provides access to 600+ media sources across 70+ markets, serving gaming, entertainment, e-commerce, and fintech verticals. Notable clients include Douglas, AIG, Amazon Music, OKX, ViX, BBVA, KFC, FREE NOW, Tipico, Fanatics, Lightricks, and Acorns.

## Key modules

### Mobile User Acquisition (UA)
Core offering — multi-channel app install campaigns across Meta, Google, TikTok, and 600+ programmatic sources through a single dashboard.
- AI-powered targeting identifies high-value users based on behavior and intent
- Real-time optimization across all channels
- Flexible KPI models: CPM, CPC, CPI, CPO, CPE
- Full MMP integration (AppsFlyer, Adjust, Branch, Kochava)

### Mobile DSP (Demand Side Platform)
Programmatic buying engine for mobile app and mobile web campaigns:
- Connected to 30+ major ad exchanges
- Real-time bidding with automatic bid adjustments
- Processes millions of ad opportunities daily
- Unified dashboard for both mobile app and mobile web
- Multi-touch attribution modeling
- Brand safety via curated exchange safelist (vetted publishers only)
- Geographic precision across 70+ markets with localized targeting

### Creator-Generated Content (CGC)
Authentic, influencer-driven content created by micro-creators:
- Video production for app promotion
- Performance-focused creator partnerships
- Content can be used across paid channels
- Integrated with UA campaigns for creative testing

### Influencer Marketing
Performance-based influencer campaigns:
- Combined with paid UA for full-funnel visibility
- Continuous AI optimization of influencer spend
- Integrated reporting alongside programmatic channels

### Albert.ai (acquired 2022)
Autonomous AI marketing platform for cross-channel campaign optimization:
- **Supported channels**: Google Ads, Facebook, Instagram, TikTok, YouTube, DV360, Bing
- Autonomously manages planning, setup, optimization, reporting, and media execution
- Intelligent cross-channel budget allocation
- Real-time campaign adjustments to protect ROI
- Audience segment analysis and automatic content/targeting personalization
- Designed as human-AI partnership — enhances marketers, doesn't replace them
- **Note**: Albert.ai focuses on paid social/search channels, not DSP inventory

### Digital 360
Full-funnel performance marketing suite combining all modules:
- UA + DSP + CGC + influencer + Albert.ai in one platform
- End-to-end campaign management
- Consolidated analytics and reporting

## Pricing and limits

Pricing is not publicly disclosed. Key details:
- **Performance-based model** — pay when platform delivers on chosen KPI
- **Flexible KPI selection**: CPM, CPC, CPI, CPO, CPE
- **Both managed and self-serve options available**
- Self-serve SaaS platform launched (announced via press release)
- No public rate cards or tier information
- Contact hq@zoomd.com or request demo for pricing

## Integrations

### Measurement Partners (MMPs)
- AppsFlyer
- Adjust
- Branch
- Kochava
- Third-party measurement integration support

### Media Partners
- **Walled gardens**: Meta (Facebook, Instagram), Google (DV360, Google Ads, Google Analytics 360), Apple Search Ads
- **Social**: TikTok, X (Twitter), Pinterest, Kwai
- **Premium**: Amazon DSP, Spotify, Twitch, Truth
- **Programmatic**: 30+ exchanges, SDK networks, ad networks
- **OEM/Device**: Device manufacturers and operators

### Albert.ai channels
- Google Ads
- Facebook & Instagram
- TikTok
- YouTube
- Bing
- DV360 (programmatic)

## Data model (no public API)

Zoomd does not expose a public API. Campaign management, reporting, and optimization are done through:
- Zoomd dashboard (self-serve)
- Account team (managed service)
- Albert.ai dashboard (for Albert campaigns)

Key metrics tracked:
- CPI (Cost Per Install)
- CPE (Cost Per Event)
- ROAS (Return on Ad Spend)
- Day 1, 7, 30 retention rates
- ARPU (Average Revenue Per User)
- Multi-touch attribution data

## Workflow setup

### Setting up a UA campaign
1. **Define objectives** — choose KPI model (CPI, CPE, ROAS), set budget, select target geos
2. **Configure MMP** — connect AppsFlyer/Adjust/Branch, set up postback events for install + downstream events
3. **Select channels** — choose media mix (Meta, Google, TikTok, programmatic DSP)
4. **Provide creatives** — upload ad assets or commission CGC from Zoomd's creator network
5. **Launch and optimize** — monitor via unified dashboard, let Zoomd/Albert.ai optimize across channels
6. **Iterate** — review performance by channel/geo/creative, shift budget to winners

### Setting up Albert.ai
1. **Connect ad accounts** — link Google Ads, Meta, TikTok accounts to Albert
2. **Define optimization goals** — ROAS target, CPA target, or volume target
3. **Set guardrails** — budget limits, channel constraints, geo restrictions
4. **Allow learning period** — Albert needs 2-4 weeks and 50+ conversion events per channel to optimize effectively
5. **Monitor but don't micromanage** — review Albert's allocation decisions weekly, intervene only on strategy changes

## Deep dives

### Managed vs self-serve
- **Managed service**: Zoomd's team runs campaigns, handles optimization, provides creative support. Best for teams without dedicated UA managers.
- **Self-serve DSP**: Direct control over bidding, targeting, and budget allocation. Best for teams with ad ops experience who want granular control.
- **Hybrid**: Use managed for initial setup and strategy, transition to self-serve as internal expertise grows.

### Fraud prevention
- Curated safelist of vetted exchanges (not open marketplace)
- Brand safety enforcement across all publishers
- Still relies on MMP-level fraud detection (AppsFlyer Protect360, Adjust Fraud Prevention Suite)
- Cross-check Zoomd reporting with MMP fraud reports

### Company history
- 2007: Moblin mobile marketing agency founded
- 2012: Zoomd founded
- 2017: Merger with Moblin
- 2019: IPO on TSX Venture Exchange (TSXV:ZOMD)
- 2020: Expanded to Brazil, Mexico; launched self-serve platform
- 2021: Acquired Performance Revenues (influencer marketing)
- 2022: Acquired Albert.ai (AI marketing platform)
- Awards: Top UA Company 2025, Top Mobile Marketing Company 2025, Top App Marketing Companies 2024, Top DSPs 2023

### Leadership
- Amit Bohensky — Chairman & Co-Founder
- Ido Almany — CEO
- Omri Argaman — CMO, CGO & Co-Founder
- Niv Sharoni — CTO & Co-Founder
- Tsvika Adler — CFO
- Yair Yaskerovitch — COO
- Nir Levy — VP R&D
- Daniel Avshalom — VP Media
- David Itzkowitz — Director of Performance
- Keren Shlush — Head of Marketing
- Sagi Weinberg — Sales Director
