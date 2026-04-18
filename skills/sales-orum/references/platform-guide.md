# Orum Platform Reference

## Platform overview

Orum (orum.com) is an AI-powered calling performance system for sales development teams. Founded to solve the problem of low connect rates in outbound calling, Orum specializes exclusively in phone-based outbound — parallel and power dialing with AI-powered answer detection, coaching, and virtual salesfloor collaboration. Unlike all-in-one sales engagement platforms (Nooks, Outreach, Salesloft), Orum is dialer-only: no email sequencing, LinkedIn automation, or SMS. It integrates with your existing SEP and CRM stack. G2 rating: 4.6/5 across 779+ verified reviews. Claims AI trained on 1 billion+ real sales calls.

**Key differentiator:** Proprietary telephony infrastructure (not Twilio-based like most competitors) with millisecond-level AI answer detection across 20+ languages — distinguishing between human, screener, voicemail, and dial tree.

## Key modules

### Dialer
- **Parallel dialing**: Up to 5 simultaneous lines (Launch) or 10 (Ascend). AI detects live answers in milliseconds, auto-skips voicemails, gatekeepers, and bad numbers.
- **Power dialing**: Single-line mode for high-value prospects. Zero answer delay.
- **Mode switching**: Reps can toggle between parallel and power within the same session.
- **Voicemail drop**: Pre-recorded messages dropped automatically when voicemail is detected.
- **Voicemail sequencing**: Automated voicemail follow-up sequences (Ascend tier).
- **AI dial-tree navigation**: AI navigates phone trees automatically to reach the right person (Ascend tier).
- **Claims**: 10x more dials, 3x better connect rates, zero time wasted on voicemails/gatekeepers.
- **Hot Numbers**: Identifies numbers with higher historical connect rates — 22% average increase in connect rates.

### Call Intelligence
- **Spam detection & monitoring**: Automated reputation monitoring alerts reps of potential SPAM risks. Numbers monitored against carrier databases.
- **Number rotation**: Auto-rotates caller IDs to prevent overuse of any single number. 5 IDs on Launch, 10 on Ascend.
- **Country matching**: Matches outbound caller ID to prospect's country for local presence.
- **Boost Connect**: Caller ID reputation management — proactive monitoring and remediation.
- **STIR/SHAKEN compliance**: Grade A numbers from tier 1 telephony distributor. No number spoofing — only numbers your organization owns or has permission to use.
- **Call recording & transcription**: All calls recorded and transcribed with live transcription during calls.
- **AI objection detection**: Real-time flagging of objections during live calls (Ascend tier).
- **AI call summary**: Auto-generated post-call summaries (Ascend tier).
- **Call Library**: Searchable library of call recordings with customizable playlists and tagging.

### AI Coaching Suite (Ascend tier)
- **AI Scorecards**: Automated analysis of call recordings at scale. Custom rubrics for opening, discovery, objection handling, closing.
- **Coaching Portals**: Personalized coaching dashboards for each rep with actionable insights.
- **AI Roleplay**: Practice scenarios generated from real call patterns.
- **Live Listen**: Managers can shadow live calls and whisper-coach reps in real time.

### Virtual Salesfloor
- **Live leaderboards**: Real-time performance visibility across the team.
- **Team presence**: See who's dialing, who's on a call, and who's available.
- **Manager oversight**: Full visibility into team activity without being physically co-located.
- **Culture building**: Replicates in-office calling floor energy for remote teams.

### Data Enrichment
- **200 credits/rep/month** on Launch tier.
- **Unlimited** on Ascend tier.
- **Enrichment covers**: Phone number and email data for prospect records.

## Pricing and limits

- **Model**: Per-user, annual contracts mandatory. No monthly billing option.
- **Launch**: $250/user/month ($3,000/user/year)
  - Up to 5 parallel lines
  - 5 caller IDs per month
  - 200 data enrichment credits/rep/month
  - Basic AI automation and standard reporting
  - Standard support
- **Ascend**: ~$400-500+/user/month (~$5,400+/user/year, estimated — custom pricing)
  - Up to 10 parallel lines
  - 10 caller IDs per month
  - Unlimited data enrichment
  - AI Coaching Suite (scorecards, portals, roleplay)
  - Virtual salesfloor
  - AI objection detection, call summaries, dial-tree navigation, voicemail sequencing
  - Enterprise reporting and roles
  - Priority support
- **Enterprise**: Custom pricing, features, lines, and credits
- **Free trial**: Available but requires detailed signup form
- **International calling**: 160+ countries (Ascend tier and above)

### What's plan-gated (Launch → Ascend)

| Feature | Launch | Ascend |
|---|---|---|
| Parallel lines | 5 | 10 |
| Caller IDs/month | 5 | 10 |
| Data enrichment | 200 credits/rep/mo | Unlimited |
| AI Coaching Suite | ❌ | ✅ |
| AI objection detection | ❌ | ✅ |
| AI call summary | ❌ | ✅ |
| AI dial-tree navigation | ❌ | ✅ |
| Voicemail sequencing | ❌ | ✅ |
| International dialing | ❌ | ✅ |
| Virtual salesfloor | ❌ | ✅ |

## Integrations

### CRM
- **Salesforce**: Native bidirectional sync. Pull reports to start dialing, sync call outcomes/recordings/notes back automatically.
- **HubSpot**: Native integration. Call from lists, display prospect details during calls.

### Sales Engagement Platforms
- **Outreach**: Sync call activity, pull call tasks from Outreach sequences.
- **Salesloft**: Sync call activity and display prospect details.
- **Apollo**: Sync call activity and prospect details.
- **Gong**: Logs call outcomes and recordings automatically.

### Other
- **Webhooks**: Available for custom workflows.
- **No Zapier/Make**: No listed automation platform integrations.

## Competitive landscape

| Feature | Orum | Nooks | Koncert |
|---|---|---|---|
| Max parallel lines | 10 (Ascend) | 5 | Varies |
| Telephony | Proprietary | Twilio-based | Proprietary |
| Email sequencing | ❌ | ✅ | ❌ |
| SMS/LinkedIn | ❌ | ✅ | Limited |
| Contact enrichment | 200/mo (Launch) | Waterfall (9 providers) | ❌ |
| AI coaching | Ascend only | Built-in | ❌ |
| Virtual salesfloor | Ascend only | Built-in | ❌ |
| Pricing | $250-500+/user/mo | ~$417/user/mo | Custom |
| Annual contract | Required | Required | Required |
| AI answer detection | 20+ languages | AI-powered | AI-powered |

**Choose Orum when:** Your team already has Outreach/Salesloft for sequencing and wants the best dialing-only tool. You need more than 5 parallel lines. You want proprietary telephony (not Twilio).

**Choose Nooks when:** You want to consolidate dialer + sequencing + enrichment + coaching into one platform. Budget is tighter. 5 parallel lines is sufficient.

**Choose Koncert when:** You need flexibility across multiple dialing modes (AI parallel, flow, agent-assisted). Enterprise compliance requirements.

## Performance benchmarks (from research)

- **Parallel dialing connect-to-meeting rate**: ~3.8% (vs ~6.4% for power dialing)
- **Connect rate degradation**: Typically declines 3-6 months after deployment due to carrier spam flagging
- **Spam flagged number answer rate**: <5%
- **Hot Numbers feature**: 22% average increase in connect rates
- **Reported results**: 2x more meetings (OnBoard), 20% increase in meetings (Abnormal Security), 50% reduction in ramp time (Punch)
