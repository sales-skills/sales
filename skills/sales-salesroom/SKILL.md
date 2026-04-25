---
name: sales-salesroom
description: "Salesroom platform help — AI-powered video conferencing built for sales with real-time coaching, buyer engagement scoring, battle cards, and CRM auto-update. Use when setting up Salesroom for your sales team, real-time coaching prompts not appearing during calls, buyer engagement scores not matching your read of the meeting, CRM updates not syncing to HubSpot or Salesforce after calls, choosing between Salesroom and Zoom with a separate note-taker, highlight clips not generating or sharing incorrectly, comparing Salesroom to Demodesk or Cluely for live coaching, or understanding Salesroom pricing tiers and free plan limits. Do NOT use for picking between note-takers generally (use /sales-note-taker) or building a coaching program (use /sales-coaching)."
argument-hint: "[describe your Salesroom question — setup, coaching, engagement scores, CRM sync, etc.]"
license: MIT
version: 1.0.0
tags: [sales, video-conferencing, conversation-intelligence, coaching, platform]
github: "https://github.com/salesroom"
---

# Salesroom Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What do you need help with?**
   - A) Setting up Salesroom or connecting CRM (HubSpot, Salesforce)
   - B) Real-time coaching, battle cards, or objection handling during calls
   - C) Buyer engagement scores or meeting analytics
   - D) Meeting summaries, highlight clips, or call scores
   - E) Integrations (Zoom, Slack, Gong, CRM sync)
   - F) Pricing, plan comparison, or upgrading
   - G) Troubleshooting (coaching not appearing, CRM not syncing, engagement scores off)

2. **Which Salesroom plan are you on?**
   - A) Free
   - B) Pro ($49/mo)
   - C) Enterprise (custom)
   - D) Not sure / evaluating

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing Salesroom to other note-takers or CI tools | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching feedback | `/sales-call-review {user's question}` |
| Building a coaching program using Salesroom data | `/sales-coaching {user's question}` |
| Revenue forecasting with deal data | `/sales-forecast {user's question}` |
| General CRM-to-tool integration patterns | `/sales-integration {user's question}` |
| HubSpot-specific configuration | `/sales-hubspot {user's question}` |
| Salesforce-specific configuration | `/sales-salesforce {user's question}` |

When routing, provide the exact command.

## Step 3 — Salesroom platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, known issues, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Setup priority**: Connect CRM first (HubSpot or Salesforce), then configure battle cards and playbooks, then set up Slack notifications for meeting highlights.

**Plan selection**: Free for solo evaluation. Pro ($49/mo) for full coaching + analytics + CRM sync. Enterprise for teams needing custom pricing and advanced configuration.

**Adoption tip**: Salesroom IS the video conferencing tool — buyers join your Salesroom meeting link instead of Zoom. Plan adoption carefully: brief internal team on the different UX, and prep buyers by framing it as "our meeting platform" not "a recorded call."

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Salesroom IS the meeting platform, not a bot.** Unlike Fathom/Fireflies/Gong that join Zoom/Meet/Teams as bots, Salesroom replaces your video conferencing tool entirely for sales calls. Buyers must join a Salesroom link.
- **Buyer adoption friction is the #1 risk.** Prospects may hesitate joining an unfamiliar video platform. Some will ask to switch to Zoom instead — have a strategy for this objection.
- **No public API, no webhooks, no MCP.** You cannot programmatically access meeting data, transcripts, or engagement scores. CRM sync is native only (HubSpot/Salesforce).
- **SSL certificate has been broken intermittently.** The salesroom.com website has had HTTPS issues — this doesn't affect the meeting platform itself but may concern security-conscious buyers evaluating the tool.
- **Limited integration ecosystem.** Only HubSpot, Salesforce, Zoom, Slack, and Gong. No Zapier, no Make, no custom webhook automations.
- **Small startup ($8.5M seed, 2022).** Evaluate vendor risk for enterprise deployment — check employee count and recent funding before committing a large team.

## Related skills

- `/sales-note-taker` — Comparing Salesroom to other note-takers (Fathom, Fireflies, Avoma, Gong, Demodesk, etc.) or wiring transcript APIs into CRM/warehouse
- `/sales-call-review` — Review a specific call for coaching feedback and scoring
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-cluely` — Real-time AI coaching overlay (Cluely works ON TOP of Zoom, vs Salesroom which replaces Zoom)
- `/sales-demodesk` — AI meeting platform with coaching + autonomous agents (closest competitor — also its own meeting platform)
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Choosing Salesroom vs Zoom + Gong
**User says**: "Should I use Salesroom instead of Zoom with Gong for my 8-person sales team?"
**Skill does**:
1. Frames the key tradeoff: Salesroom is one tool (simpler stack) but requires buyers to join an unfamiliar platform; Zoom + Gong keeps the familiar Zoom UX
2. Notes Salesroom Pro ($49/mo × 8 = $392/mo) is dramatically cheaper than Gong (~$1,200/user/yr)
3. Flags adoption risk: if your buyers are enterprise and expect Zoom/Teams, Salesroom may cause friction
4. Recommends Salesroom if: budget is tight, team is small, buyers are SMB/startup who don't mind a new link
**Result**: Clear decision framework with cost comparison and adoption risk assessment.

### Example 2: CRM sync not working after meetings
**User says**: "My Salesroom meetings aren't showing up in HubSpot after calls."
**Skill does**:
1. Checks that the HubSpot integration is connected (Salesroom has a HubSpot marketplace app)
2. Verifies the meeting was held on Salesroom (not Zoom — Salesroom only syncs its own meetings)
3. Checks that the contact exists in HubSpot (Salesroom matches by participant email)
4. Notes that sync may not be instant — check for delays
**Result**: Specific troubleshooting steps for HubSpot sync pipeline.

### Example 3: Setting up battle cards for objection handling
**User says**: "How do I set up battle cards in Salesroom so they pop up when a competitor is mentioned?"
**Skill does**:
1. Explains Salesroom's real-time coaching: battle cards trigger based on detected topics and keywords
2. Walks through configuration: create cards with competitor names as triggers, add objection responses
3. Notes that cards appear as prompts during the live call — only visible to the rep, not the buyer
4. Recommends testing with a practice call before using in a real meeting
**Result**: Step-by-step battle card setup with testing advice.

## Troubleshooting

### Buyer won't join Salesroom link
**Symptom**: Prospect asks to switch to Zoom or Teams instead of joining your Salesroom meeting.
**Cause**: Unfamiliar platform causes hesitation — enterprise buyers especially may have IT policies requiring approved video tools.
**Solution**: Frame proactively in the invite: "We use Salesroom for our meetings — it's a browser-based video platform, no download required." If pushback continues, offer Zoom as a fallback but note you'll lose real-time coaching and engagement insights. Consider keeping Zoom as backup for enterprise deals.

### Real-time coaching prompts not appearing
**Symptom**: Battle cards and coaching suggestions don't show during calls.
**Cause**: Coaching features require configuration — battle cards need keyword triggers, and the AI needs enough conversation context to generate suggestions.
**Solution**: Check that playbooks and battle cards are configured in settings. Ensure your microphone audio is clear (coaching relies on live transcription). Start with broader keyword triggers and narrow over time. Allow 1-2 minutes of conversation before expecting prompts.

### Meeting summaries or highlights missing
**Symptom**: After a call, no summary, highlight clips, or call score appears.
**Cause**: Processing takes time after the call ends. Also, very short calls (<5 minutes) may not generate full analytics.
**Solution**: Wait 10-15 minutes after the call ends. Check the Salesroom dashboard for the meeting record. If the meeting doesn't appear at all, verify it was held on Salesroom (not accidentally switched to Zoom). Contact support if meetings consistently fail to process.
