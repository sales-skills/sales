# Nooks Platform Reference

## Platform overview

Nooks (nooks.ai) is an AI-native sales engagement workspace founded in 2020. It combines parallel dialing, multi-channel sequencing, real-time coaching, buyer signals, and contact enrichment into a single workspace. Positioned as a replacement for running separate dialer + SEP + enrichment + coaching tools. Targets SDR/BDR teams and sales leaders managing outbound operations. G2 Leader in AI-powered selling with 1000+ reviews (4.8/5 average). Built on Twilio telephony infrastructure.

**Key differentiator:** AI agents work alongside reps continuously — researching accounts, prioritizing leads, personalizing outreach, and providing real-time coaching — rather than bolting AI onto legacy workflows.

## Key modules

### AI Dialer
- **Parallel dialing**: Up to 5 simultaneous outbound lines. AI detects live answers in milliseconds, skips voicemails, phone trees, and bad numbers automatically.
- **Power dialing**: Single-line mode for high-value prospects where connection quality matters more than volume.
- **Claims**: 5x more dials, 3x more meetings vs traditional single-line dialers.
- **Spam protection**: Auto-rotation of 10 dial-from numbers, registered with carriers to your employer ID. NoMoRobo monitoring for number reputation. Local presence dialing.
- **Voicemail drop**: Pre-recorded voicemail messages dropped automatically when the dialer detects voicemail.
- **International calling**: API-based number provisioning in 45+ countries.
- **Call logging**: Automatic activity logging to connected CRM — outcome, duration, recording, notes.
- **Infrastructure**: Built on Twilio. Carrier-grade with claimed 99.99% uptime, instant call bridging, zero-latency audio.

### AI Sequencing
- **Multi-channel**: Outreach across calls, emails, SMS, and social (LinkedIn) in a single sequence.
- **Dynamic personalization**: AI auto-researches prospects and drafts hyper-personalized messages based on real-time buyer signals.
- **Signal-based triggers**: Sequences automatically adjust based on account activity — engagement, job changes, funding events, competitor usage.
- **Agentic optimization**: AI agents continuously optimize send times, channel mix, and messaging based on performance data.

### Signals & Intelligence
- **100+ pre-built signals**: CRM data, call transcripts, web-based intent, hiring activity, funding events, competitor usage, job changes.
- **Custom signal builder**: Create proprietary signals from your data sources.
- **Dynamic prospect lists**: Auto-updating lists based on signal combinations.
- **Account research automation**: AI researches accounts 24/7, surfacing relevant context before calls.
- **Lead prioritization**: AI ranks prospects by conversion likelihood based on signal strength.

### AI Coaching
- **Auto call scoring**: AI scores 100% of calls using custom scorecards. Peer benchmarking across the team.
- **AI roleplay**: Generates targeted roleplay scenarios based on real call patterns and upcoming prospect profiles.
- **Live battlecards**: Real-time competitive intelligence surfaced during conversations when competitors are mentioned.
- **Virtual salesfloor**: Remote team collaboration space. Managers can shadow live calls, whisper-coach reps, and build calling culture. Real-time leaderboards for gamification.
- **Call recording & transcription**: All calls automatically recorded and transcribed for review.

### Contact Data Enrichment
- **Waterfall enrichment**: Cascades across 9 data providers to find verified mobile numbers and emails: Apollo, Cognism, ContactOut, Datagma, Forager, LeadIQ, PDL (People Data Labs), Prospeo, ZoomInfo.
- **Automatic number verification**: Validates phone numbers before dialing to reduce bad-number waste.
- **Catch-all and verified emails**: Identifies and flags catch-all domains, prioritizes verified email addresses.

## Pricing and limits

- **Model**: Quote-based, per-seat, annual contracts required.
- **Reported pricing**: ~$5,000/user/year (~$417/month) at list price.
- **Professional tier**: ~$95-125/user/month on annual contracts (reported).
- **Enterprise tier**: ~$130-150+/user/month, custom pricing for 100+ seats (reported).
- **Volume discounts**: 10-20% for 20+ seats. Multi-year commitments unlock additional 10-20%.
- **No free tier**: Demo required to access trial.
- **Phone numbers**: Additional cost — ~$10-15/number/month via Twilio.
- **No month-to-month option**: Annual commitment minimum.
- **ROI threshold**: Generally recommended for teams with deal sizes above $15K and 10+ SDRs. Smaller teams may get better ROI from power dialers with clean mobile data.

### What's modular

Nooks offers 5 products that can be purchased individually or bundled:
1. AI Dialer
2. AI Sequencing
3. Signals and Intelligence
4. AI Coaching
5. Contact Data Enrichment

Bundled pricing is positioned as cheaper than buying separate dialer + SEP + enrichment + coaching tools (Outreach/Salesloft + Orum + ZoomInfo + Gong).

## Integrations

### CRM (native, two-way sync)
- **Salesforce** — activities, contacts, opportunities, custom fields
- **HubSpot** — activities, contacts, deals
- **Pipedrive** — contacts, activities

### Sales engagement platforms
- **Outreach** — sequence sync, activity logging
- **Salesloft** — cadence sync, activity logging
- **Apollo** — pull call tasks from Apollo Sequences into Nooks dialer, auto-log dispositions/recordings/notes back to Apollo

### Conversation intelligence
- **Gong** — Nooks is Gong Engage's first AI dialer integration. Call recordings and transcripts flow to Gong for analysis.

### Data providers (waterfall enrichment)
Apollo, Cognism, ContactOut, Datagma, Forager, LeadIQ, PDL (People Data Labs), Prospeo, ZoomInfo

### Other
- **LinkedIn** — social touches in sequences
- **Chilipiper** — routing integration
- Open API mentioned for custom integrations (no public docs)

## Data model

No public API documentation available. Key concepts from the platform:

- **Prospects**: Individual contacts with phone, email, company, title, signals
- **Accounts**: Company-level records aggregating prospects and signals
- **Sequences**: Multi-channel outreach programs with steps (call, email, SMS, social)
- **Call tasks**: Individual dial tasks pulled from sequences or imported from CRM/SEP
- **Signals**: Buyer intent indicators from CRM, web, third-party data
- **Scorecards**: Custom coaching rubrics for AI call scoring

## Workflow setup

### Setting up parallel dialing (most common workflow)

1. **Connect CRM** — authenticate Salesforce or HubSpot, map fields for bidirectional sync
2. **Provision phone numbers** — request numbers in your target area codes, register with carrier databases (STIR/SHAKEN attestation)
3. **Configure spam protection** — enable auto-rotation (minimum 10 numbers per rep), set up NoMoRobo monitoring, enable local presence
4. **Import prospects** — from CRM, CSV, or SEP. Enable waterfall enrichment to verify/find mobile numbers
5. **Create call lists** — filter by signals, priority, territory. Set daily dial targets
6. **Configure dialer settings** — parallel lines (start with 3, increase to 5 after reps are comfortable), voicemail drop messages, call dispositions
7. **Train reps on the UX** — call queue, prospect context panel, disposition workflow, CRM note entry
8. **Enable virtual salesfloor** — configure team rooms, manager shadowing, whisper coaching permissions

### Setting up AI coaching

1. **Accumulate call data** — need 2-3 weeks of recorded calls for AI to learn patterns
2. **Define scorecards** — custom rubrics (opening, discovery questions, objection handling, next steps, compliance)
3. **Enable auto-scoring** — AI scores every call against your scorecard, creates peer benchmarks
4. **Configure battlecards** — upload competitive intel that surfaces live when competitors are mentioned on calls
5. **Set up roleplay** — AI generates practice scenarios based on upcoming prospect profiles and common objection patterns
6. **Review analytics** — track rep improvement over time, identify coaching gaps, compare team performance

## Competitive landscape

| Feature | Nooks | Orum | Koncert | Trellus |
|---|---|---|---|---|
| Parallel lines | 5 | 7 | Varies by mode | Single-line + AI |
| Sequencing | Built-in multi-channel | No (requires SEP) | No (requires SEP) | No |
| Coaching | Built-in (scoring, roleplay, battlecards) | Basic analytics | Basic analytics | Real-time coaching overlay |
| Enrichment | Waterfall (9 providers) | No | No | No |
| Virtual salesfloor | Yes | Yes | No | No |
| Pricing | ~$5K/user/yr | ~$6-9.6K/user/yr | Custom | ~$1.2-3.6K/user/yr |
| Telephony | Twilio-based | Proprietary | Custom | Browser-based |
| Best for | All-in-one teams | Max dial volume | Multi-mode flexibility | Budget coaching |

## Customer results (claimed)

- **Greenhouse**: 70% increase in pipeline
- **HubSpot**: 67% more meetings, 24% pipeline uplift per BDR
- **Pendo**: 33% of meetings sourced from AI signals
- **Drata**: 25% increase in meetings booked
- **Coder**: 50% more opportunities

## Compliance

- SOC 2 (implied via trust center)
- GDPR compliance
- TCPA compliance for cold calling
- STIR/SHAKEN attestation support for carrier registration
