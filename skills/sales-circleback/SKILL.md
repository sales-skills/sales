---
name: sales-circleback
description: "Circleback platform help — AI meeting notes with action items, cross-meeting search, and webhook automation for Zoom/Meet/Teams/Slack huddles. Use when setting up Circleback for a sales team with CRM sync to HubSpot or Salesforce, configuring webhook automations to push meeting data to external tools, troubleshooting speaker identification issues with overlapping speakers or conference rooms, comparing Circleback vs Fathom or Granola or tl;dv for bot-based vs botless note-taking, connecting Circleback MCP server to Claude or Cursor for AI workflows, debugging meeting bot joining unwanted recurring meetings, or choosing between Individual and Team plans for shared meeting access. Do NOT use for general note-taker comparison across many platforms (use /sales-note-taker) or reviewing a single call for coaching (use /sales-call-review)."
argument-hint: "[describe what you need help with in Circleback]"
license: MIT
version: 1.0.0
tags: [sales, note-taker, meeting-notes, platform]
---

# Circleback Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **What's your primary goal?**
   - A) Set up Circleback for my team (initial config, plan selection)
   - B) Configure automations and webhooks to push meeting data downstream
   - C) Connect Circleback to my CRM (HubSpot, Salesforce, Attio)
   - D) Use the MCP server with Claude, Cursor, or Raycast
   - E) Compare Circleback to alternatives for my use case
   - F) Troubleshoot a specific issue (transcription, bot, billing)

2. **What meeting platforms do you use?**
   - A) Zoom
   - B) Google Meet
   - C) Microsoft Teams
   - D) Slack huddles
   - E) In-person meetings
   - F) Multiple

3. **What plan are you on (or considering)?**
   - A) 7-day free trial
   - B) Individual ($20.83-$25/mo)
   - C) Team ($25-$30/user/mo)
   - D) Enterprise (custom)
   - E) Not sure yet

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Comparing many note-taker platforms broadly | `/sales-note-taker {user's question}` |
| Reviewing a specific call for coaching | `/sales-call-review {user's question}` |
| Building a coaching program | `/sales-coaching {user's question}` |
| General CRM-to-tool integration (Zapier, webhooks, iPaaS) | `/sales-integration {user's question}` |

When routing, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

Otherwise, answer directly below.

## Step 3 — Circleback platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, webhook data model, workflows.

If the question involves the webhook API or MCP server, also read `references/circleback-api-reference.md`.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Plan selection:**
- **Solo professional** → Individual ($20.83/mo annual, $25/mo monthly)
- **Small team wanting shared meetings + team automations** → Team ($25/mo annual, $30/mo monthly)
- **Enterprise with security/onboarding needs** → Enterprise (custom)

**Bot vs botless decision:**
- Bot-based: works across all platforms, most reliable, visible to participants
- Botless: less intrusive, but check platform compatibility and limitations

**Automation setup:**
1. Open Automations → Create automation
2. Set conditions to filter which meetings trigger it
3. Choose "Send webhook request" and enter your endpoint URL
4. Select meeting outcomes to include (notes, action items, transcript, etc.)
5. Test with most recent meeting before going live

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No free tier — only a 7-day trial requiring credit card.** Unlike Fathom or tl;dv, there's no ongoing free plan. Cancel before trial ends to avoid charges.
- **No customizable note templates.** Notes use a generic format — you can't define custom sections, headers, or output structure.
- **Recurring meetings may need manual approval.** The bot doesn't always auto-join recurring meetings — you may need to tick off individual occurrences.
- **Speaker identification degrades with overlapping speakers or conference room audio.** Best with individual headsets/mics.
- **Recording URL expires after 24 hours.** Webhook payloads include a `recordingUrl` that's only valid for 24h — download immediately if archiving.
- **Slack huddles support is Team plan only.** Individual plan doesn't include Slack huddle recording.
- **Cancellation can be slow.** Multiple users report delayed support responses for billing/cancellation issues.
- **MCP server uses OAuth, not API key.** Requires OAuth flow through app.circleback.ai — not a simple token.

## Related skills

- `/sales-note-taker` — Comparing AI meeting note-takers and conversation intelligence platforms (Fathom, Fireflies, Gong, etc.)
- `/sales-call-review` — Review a specific call for coaching
- `/sales-coaching` — Build coaching programs that consume call data
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Setting up Circleback for a sales team with HubSpot
**User says**: "I want to auto-log meeting notes and action items from Circleback into HubSpot deals after every sales call."
**Skill does**:
1. Recommends Team plan for shared meeting access across reps
2. Walks through native HubSpot integration setup (connect via Settings → Integrations)
3. For custom field mapping beyond native sync, sets up a webhook automation that POSTs meeting data to a middleware (Zapier/Make) which maps notes + action items to HubSpot deal properties
4. Notes: native integration handles basic sync; webhook + Zapier gives full control over field mapping
**Result**: Working pipeline from Circleback meetings to HubSpot deal records.

### Example 2: Comparing Circleback vs Granola for a privacy-conscious team
**User says**: "We don't want a bot joining our calls. Should we use Circleback or Granola?"
**Skill does**:
1. Notes Circleback offers botless mode but it's secondary to bot-based; Granola is bot-free by design
2. Compares: Granola ($14/user/mo Business) vs Circleback Team ($25/user/mo) — Granola is cheaper
3. Granola strengths: bot-free always, AI-enhanced notes you co-author, HubSpot/Attio/Affinity CRM sync
4. Circleback strengths: cross-meeting search, action item tracking, webhook automations, broader CRM support (HubSpot + Salesforce + Attio)
5. Recommends Granola for strict bot-free requirement; Circleback if they need automations and broader integrations
**Result**: Clear decision framework based on bot-free priority vs automation needs.

### Example 3: Webhook automation not sending data
**User says**: "I set up a Circleback webhook but nothing is arriving at my endpoint."
**Skill does**:
1. Checks: did you test with the most recent meeting? The test button sends a real payload
2. Verifies endpoint is publicly accessible HTTPS
3. Checks webhook conditions — are they filtering out the meetings you expect?
4. Verifies x-signature validation isn't rejecting payloads (check HMAC-SHA256 against signing secret with `whsec_` prefix)
5. Suggests checking Circleback automation logs for delivery status
**Result**: Systematic debugging of webhook delivery issues.

## Troubleshooting

### Speaker labels are wrong or mixed up
**Symptom**: Transcript attributes speech to the wrong person, especially in group calls
**Cause**: Circleback's speaker identification struggles with overlapping speakers, shared microphones, or conference room setups
**Solution**: Use individual headsets/mics for each participant. Ensure calendar invites have attendee emails (helps Circleback match speakers). For conference rooms, consider a dedicated speaker-tracking microphone. After the meeting, you can manually correct speaker labels in the Circleback editor.

### Bot joins unwanted meetings
**Symptom**: Circleback bot shows up in personal calls, internal 1:1s, or meetings you didn't want recorded
**Cause**: Auto-join is enabled broadly, and recurring meeting approval doesn't always stick
**Solution**: Review your meeting filter settings (Settings → Meeting Preferences). Exclude specific calendar event types or keywords. For recurring meetings, manually approve/deny individual occurrences. Consider using the botless option for sensitive meetings.

### Webhook payload missing transcript or action items
**Symptom**: Webhook fires but `transcript` array or `actionItems` array is empty
**Cause**: You may not have selected those outcomes when creating the automation, or the meeting was too short for AI to generate them
**Solution**: Edit the automation and ensure "Transcript" and "Action items" are selected in the outcomes step. For very short meetings (<2 min), Circleback may not generate full notes. Also check that `notes` field isn't empty — if it is, the meeting may not have been processed yet. Add a retry with 60-second delay to catch late processing.
