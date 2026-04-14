# CDP Comparison & Selection Guide

## CDP Landscape Overview

Customer Data Platforms (CDPs) unify customer data from multiple sources into a single profile, then activate that data across marketing, sales, and service channels. There are 161+ CDP vendors — this guide covers the major categories and platforms.

## Platform Comparison

### By positioning

| CDP | Positioning | Best for | Implementation time |
|---|---|---|---|
| **Tealium** | Enterprise, marketer-friendly, tag management heritage | Large enterprises needing 1,300+ integrations and real-time activation | 4-12 weeks (with pro services) |
| **BlueConic** | Marketer-first, no-code segmentation | Mid-market marketing teams wanting self-serve audience building | 2-6 weeks |
| **Treasure Data** | Enterprise, AI/ML-native, SQL-based | Data-heavy enterprises with 400+ data sources needing AI pipelines | 8-12 weeks (with pro services) |
| **Segment** | Developer-first, event tracking | Product/engineering teams needing quick data routing | Days to 2 weeks |
| **mParticle** | Mobile-first, SDK-focused | Mobile app companies needing sophisticated SDK integrations | 2-4 weeks |
| **RudderStack** | Open-source, warehouse-native | Engineering teams wanting full control and self-hosting | 1-4 weeks |
| **Hightouch** | Reverse ETL, composable | Teams with existing data warehouses wanting activation without copying data | Days to 1 week |
| **Amperity** | Identity-focused, AI-powered | Retail/hospitality with massive fragmented customer databases | 8-16 weeks |

### By team ownership

| Team | Recommended CDPs | Why |
|---|---|---|
| **Marketing (no-code)** | BlueConic, Tealium AudienceStream | Visual segment builders, no SQL required |
| **Engineering (API-first)** | Segment, RudderStack, mParticle | Strong SDKs, quick implementation, developer docs |
| **Data (warehouse-centric)** | Treasure Data, Hightouch, Segment | SQL-based, warehouse integration, dbt compatibility |
| **Cross-functional** | Tealium, Segment | Both have marketer UIs and developer APIs |

### By scale

| Scale | Budget-friendly options | Enterprise options |
|---|---|---|
| **< 100K MAU** | Segment (free tier up to 1K MTU), RudderStack (open-source), BlueConic Pyxis (free 6 months) | - |
| **100K-1M MAU** | Segment, BlueConic Standard, RudderStack Pro | Tealium, mParticle |
| **1M+ MAU** | RudderStack Enterprise | Tealium, Treasure Data, Amperity |

## Pricing Comparison

| CDP | Pricing model | Entry point | Enterprise range |
|---|---|---|---|
| **Tealium** | Event-based, custom quotes | ~$149/mo (iQ only) | $50K-$200K+/yr |
| **BlueConic** | Profile-based | $750/mo (after 6-month Pyxis free) | $30K-$150K+/yr |
| **Treasure Data** | Custom quotes | Contact sales | $100K-$500K+/yr |
| **Segment** | MTU-based | Free (1K MTU), $120/mo (10K MTU) | $50K-$200K+/yr |
| **mParticle** | MTU-based, custom quotes | Contact sales | $50K-$200K+/yr |
| **RudderStack** | Event-based | Free (open-source), $250/mo (cloud) | $25K-$100K+/yr |
| **Hightouch** | Row-based sync | Free (1 destination), $350/mo | $20K-$80K+/yr |
| **Amperity** | Custom quotes | Contact sales | $200K-$1M+/yr |

*All pricing is approximate and subject to change. Verify with vendors.*

## Decision Framework

### Do you need a CDP?

**You likely need a CDP if:**
- Customer data lives in 10+ disconnected systems
- You need real-time audience activation (not just batch ETL)
- Marketing can't build segments without engineering tickets
- You need cross-channel identity resolution
- Compliance (GDPR/CCPA) requires centralized consent management

**You probably don't need a CDP if:**
- You have 3-5 tools with native integrations
- Batch processing (daily/weekly) is fast enough
- Your data warehouse + Zapier handles current needs
- You haven't solved basic data quality first (fix that with `/sales-data-hygiene`)

### Traditional vs composable CDP

| Approach | What it is | Pros | Cons |
|---|---|---|---|
| **Traditional CDP** (Tealium, BlueConic, Treasure Data) | Standalone platform that copies data into its own storage | Complete solution, marketer-friendly, vendor manages infrastructure | Data duplication, vendor lock-in, longer implementation |
| **Composable CDP** (Hightouch, Census, Tealium CloudStream) | Activates data directly from your existing warehouse | No data copying, warehouse is source of truth, faster start | Requires existing warehouse, less real-time capability, more technical |
| **Hybrid** (Tealium Composable + Real-Time, Segment + warehouse) | Real-time events + warehouse activation | Best of both worlds | More complex, higher cost |

### CDP evaluation checklist

1. **Data collection** — Can it collect from your sources? (web, mobile, server, IoT, offline)
2. **Identity resolution** — How does it merge profiles? Test with your data.
3. **Audience building** — Can marketing build segments without engineering?
4. **Activation** — Does it connect to your destination tools? Check specific connectors.
5. **Real-time** — Test end-to-end latency (ingestion → profile update → activation)
6. **Privacy** — Built-in consent management? GDPR/CCPA compliance features?
7. **Implementation** — What does the vendor estimate? Double it for reality.
8. **Total cost** — Base price + overage + professional services + internal team time

## Implementation Best Practices

1. **Start with one use case** — don't try to connect everything at once. Pick one high-value audience activation (e.g., abandoned cart → Facebook) and get it working in 4-6 weeks.
2. **Clean data first** — CDPs unify data, they don't clean it. Run `/sales-data-hygiene` on source systems before feeding them into the CDP.
3. **Test identity resolution with real data** — vendor demos use clean demo data. Your data has edge cases (shared devices, guest checkouts, call center overwrites).
4. **Plan for internal resources** — enterprise CDPs typically need 0.5-1 FTE for ongoing management.
5. **Negotiate overage caps** — event-based pricing can spike. Lock in volume commitments with caps on overage rates.
