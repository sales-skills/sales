# CallMiner Platform Reference

## Platform overview

CallMiner Eureka is an enterprise AI-powered conversation intelligence and CX automation platform that captures and analyzes 100% of omnichannel customer interactions (voice, chat, email, social, video) to drive automated QA, agent coaching, compliance monitoring, and customer experience improvement. Primary audience is large enterprise contact centers in regulated industries (healthcare, finance, insurance, collections, energy, BPO). Key differentiator vs competitors: deepest post-call analytics and trend discovery at scale, strongest compliance/regulated-industry positioning. Weaker on real-time coaching vs newer platforms (Balto, Cresta, Observe.AI).

Notable customers: Dell, Walmart, Santander, Porsche, Mint Mobile, PennyMac, British Gas, Sirius XM, Carmax, Chick-fil-A.

## Key modules

### Capture
- **Record**: Audio capture from any telephony source
- **Screen Record**: Agent desktop recording for compliance and coaching
- **Redact**: Automatic PII/PCI data masking in audio and transcripts — detects and removes sensitive data (credit card numbers, SSNs, account numbers) from stored recordings and transcripts

### Intelligence
- **Analyze**: Core analytics engine — extracts insights from every interaction using categories (keyword/phrase rules), sentiment analysis, emotion detection, topic modeling, and custom scoring
  - **Categories**: Rule-based classifiers that tag interactions (e.g., "complaint about billing", "agent didn't verify identity"). These are the building blocks for scoring and alerting
  - **Scoring**: Weighted scorecard evaluation based on category matches — enables automated QA across 100% of interactions instead of manual sampling
  - **Sentiment/Emotion**: Tracks customer and agent sentiment arc throughout the conversation
- **Visualize**: Dashboards and reporting — trend analysis, drill-down from aggregate to individual interactions

### Augmentation
- **Coach**: Agent development platform — assigns coaching based on scorecard results, tracks improvement over time, creates coaching plans with specific focus areas
  - Coaching insights derived from Analyze scores — managers see which agents need help on which skills
  - Track coaching completion and impact on scores over time
- **RealTime**: Live call monitoring and alerting — triggers notifications and next-best-action guidance during active interactions
  - Set up alerts for compliance violations, escalation signals, or coaching moments
  - More limited than purpose-built real-time tools (Balto, Cresta) — CallMiner's strength is post-interaction analytics

### Automation
- **OmniAgent**: AI virtual agents for automated customer interactions
- **Outreach**: Customer engagement automation based on interaction insights
- **LiveTranslate**: Real-time multilingual translation during interactions

## Pricing and limits

CallMiner does not publish pricing. Enterprise-only with custom quotes.

**Licensing models** (two options):
1. **Hours-analyzed**: Annual inventory of interaction hours. Customer can use across voice and text. Better for organizations with predictable volume.
2. **Seat-based**: Based on max agents per day. Reduces management overhead from agent turnover. Better for large contact centers with high turnover.

**Price ranges** (best-effort from market research):
- Starting point: ~$1,000+/year for small deployments
- Average enterprise deployment: ~$102,000/year
- Large deployments: up to ~$140,000/year
- Three packaged bundles available, customizable with a la carte add-ons

**Key cost factors**: Number of interactions, number of channels (voice is more expensive than text), RealTime add-on, OmniAgent add-on, implementation services.

## Integrations

### CRM
- Salesforce — bidirectional data sync, interaction insights in CRM records
- Zendesk — conversation analytics combined with ticket data
- Oracle CX — intent, action, and emotion scoring

### Contact center / telephony (pre-built connectors)
- Amazon Connect, Avaya, Bright Pattern, Cisco, Five9, Genesys, Lifesize, LiveVox, RingCentral, Talkdesk, Twilio

### Speech recognition / transcription (OVTS — Open Voice Transcription Standard)
- AppTek, Deepgram, Google Cloud Speech-to-Text, Microsoft Azure Speech to Text, Nuance, SpeechMatics
- OVTS allows swapping transcription engines without changing the analytics layer

### Workforce optimization
- Calabrio, Alvaria, HP Qfiniti, NICE CXone, NTT TechnoCross, Verint

### Customer feedback / experience management
- InMoment, Medallia, Qualtrics, SMG

### Other
- CallRail (marketing call tracking), ServiceNow (workflow automation), Conexus (data integration)
- Boost.ai (chatbot), ASAPP (AI agent assist)

### Integration methods
1. **Open API**: Standards-based REST API for custom integrations
2. **Pre-built connectors**: Tested, maintained by CallMiner
3. **OVTS**: Plug in any transcription engine

## Data model

### Key concepts
- **Interaction**: A single customer-agent conversation (call, chat, email, etc.) — the atomic unit
- **Category**: A rule-based classifier applied to interactions (keywords, phrases, patterns)
- **Scorecard**: A weighted collection of categories used for QA evaluation
- **Score**: The result of applying a scorecard to an interaction (percentage-based)
- **Alert**: A real-time notification triggered when specific categories match during a live interaction
- **Coach Plan**: An agent development plan with focus areas derived from scorecard performance

### API collections
Two collections:
1. **Data APIs**: Export data out of CallMiner — scores, categories, interaction metadata, agent performance
2. **Ingestion APIs**: Import data into CallMiner — audio files, text transcripts, metadata for analysis

Authentication: API key
Developer portal: developer.callminer.com
Sandbox environment available for testing

## Workflow setup

### Workflow 1: Automated QA scoring (most common)
1. Define quality criteria — what does a "good" interaction look like? (greeting, verification, empathy, resolution, compliance)
2. Create categories for each criterion — keyword/phrase rules that detect presence or absence
3. Build a scorecard — assign weights to each category (e.g., compliance 30%, resolution 25%, empathy 20%, greeting 15%, wrap-up 10%)
4. Test against known interactions — run scorecard on a sample set, compare to manual QA scores
5. Calibrate — adjust category rules and weights until auto-scores align with human judgment
6. Deploy — apply scorecard to all interactions. Set up dashboards for QA team review
7. Iterate — refine weekly during the first quarter based on false positives/negatives

### Workflow 2: Compliance monitoring
1. Identify compliance requirements — PCI-DSS (no card numbers in audio), HIPAA (no PHI), TCPA (consent verification), FDCPA (collections rules)
2. Create categories for each violation type — detect specific non-compliant phrases or missing required disclosures
3. Configure Redact — set up automatic PII/PCI masking for audio and transcripts
4. Set up RealTime alerts — notify supervisors immediately when compliance violations detected during live calls
5. Build compliance dashboard — track violation rates by agent, team, and time period
6. Create coaching plans — route agents with repeated violations to targeted training

### Workflow 3: Agent coaching pipeline
1. Identify bottom performers — use Analyze scores to rank agents by overall quality
2. Diagnose skill gaps — which scorecard categories are they failing? (empathy? compliance? resolution?)
3. Create Coach plans — assign targeted coaching focused on specific weak categories
4. Track improvement — monitor score trends over coaching period
5. Celebrate improvement — use Visualize dashboards to show progress to agents and managers

## Deep dives

### Transcription engine selection
CallMiner's OVTS (Open Voice Transcription Standard) lets you plug in different ASR engines. This is a critical choice — accuracy affects all downstream analytics.

**Factors**:
- **Accent coverage**: Google and Azure handle diverse accents better. Nuance is strong for specific industries.
- **Industry jargon**: Deepgram and Nuance offer custom vocabulary training. Google offers adaptation.
- **Language support**: Azure and Google cover the most languages. AppTek specializes in specific language pairs.
- **Latency**: For RealTime use, lower latency matters. Deepgram and Azure are typically fastest.
- **Cost**: Varies significantly by engine and volume. Factor ASR cost into total CallMiner TCO.

**Recommendation**: Run a bake-off — send the same 100 representative calls through 2-3 engines and compare word error rate on your actual audio (your agents, your customers, your jargon).

### Category design best practices
- Start broad, then narrow — easier to split an overly broad category than to discover you missed interactions
- Use phrase variations — customers say "cancel my account", "I want to close", "shut it down", "get rid of it" — all mean the same thing
- Test exclusions — "I don't want to cancel" should NOT match a cancellation-intent category
- Use CallMiner's built-in language packs where available for common categories (sentiment, profanity, compliance)

### RealTime vs post-interaction trade-offs
- **RealTime**: Alerts during live calls. Good for compliance violations and escalation signals. Limited by processing latency and false-positive cost (interrupting agents for false alerts is disruptive).
- **Post-interaction (Analyze)**: Full analysis after the call. Much deeper analytics, trending, coaching. This is CallMiner's primary strength.
- **Recommendation**: Use RealTime only for high-severity compliance alerts (PCI violations, TCPA). Use post-interaction for everything else (QA scoring, coaching, CX insights). If you need robust real-time coaching, consider layering Balto or Cresta on top of CallMiner.
