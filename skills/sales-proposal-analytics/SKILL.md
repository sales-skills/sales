---
name: sales-proposal-analytics
description: "Interprets Qwilr engagement signals and decide what to do next. Use when a prospect viewed or didn't view a proposal, analyzing Qwilr analytics, understanding proposal engagement patterns, figuring out why a buyer went dark after a proposal, deciding when to follow up after sending a proposal, understanding read receipts on proposals, or seeing who viewed a Qwilr quote."
argument-hint: "[describe the engagement signals you're seeing — e.g., 'prospect viewed 3 times but hasn't accepted']"
version: 1.0.0
tags: [sales, proposal, analytics, engagement, qwilr]
---
# Interpret Qwilr Proposal Analytics

Help the user read Qwilr engagement signals and turn them into concrete next steps — follow-up messages, strategy adjustments, or deal actions.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **What are the analytics showing?**
   - A) Prospect viewed the proposal (single view)
   - B) Prospect viewed multiple times
   - C) Multiple people viewed it (committee/forwarded)
   - D) Prospect hasn't viewed it at all
   - E) Prospect viewed specific sections heavily (e.g., pricing)
   - F) Prospect partially accepted (selected some items, not all)
   - G) Prospect accepted the proposal
   - H) Other — describe the signals

2. **How long since you sent it?**
   - A) Less than 24 hours
   - B) 1-3 days
   - C) 4-7 days
   - D) More than a week
   - E) More than 2 weeks

3. **Deal context**:
   - What's the deal size and product/service?
   - Who's the buyer (title, decision-making authority)?
   - Is there a competitive situation?
   - What was the last conversation like before sending?

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end — don't gate your response behind gathering complete context.

## Step 2 — Signal interpretation

Interpret the engagement pattern using this framework:

### View patterns and what they mean

| Signal | Likely Meaning | Urgency |
|---|---|---|
| **Viewed once, briefly** | Skimmed it, may return later — or may not be prioritizing | Medium |
| **Viewed once, spent time on pricing** | Evaluating cost, possibly comparing to alternatives | High |
| **Viewed multiple times** | Actively considering, possibly building internal case | High |
| **Multiple unique viewers** | Being circulated to buying committee — deal is progressing | High |
| **Pricing section revisited 3+ times** | Price sensitivity or building a budget justification | High |
| **Executive summary skipped, jumped to pricing** | Buyer already understands the value, focused on cost | Medium |
| **Not viewed after 24h** | Email may not have landed, or not a priority right now | Medium |
| **Not viewed after 3+ days** | Delivery issue, lost priority, or buyer is going dark | High |
| **Viewed then went silent** | May be discussing internally, or lost momentum | Medium-High |
| **Partial acceptance** | Wants some items but not others — negotiation opportunity | High |

### Multiple-viewer analysis

When multiple people view the proposal:
- **2-3 viewers**: Normal buying committee circulation. The original contact is championing internally.
- **4+ viewers**: Larger committee than expected — deal may be more complex. Ask about procurement involvement.
- **New viewer after silence**: The proposal was forwarded up — a good sign, but the new viewer may need different framing.
- **Same person, different times**: They're returning to it — likely building a case or comparing options.

## Step 3 — Action plan

Based on the signals, provide concrete next steps:

### If viewed and engaged (positive signals)
1. **Don't jump in immediately** — let them finish evaluating (unless they've viewed 3+ times with no action)
2. **Send a value-add follow-up** — share a relevant case study, ROI data, or answer a question they didn't ask yet
3. **Offer to walk through it** — "I saw you've had a chance to review — want to jump on a quick call to walk through the pricing options?"

### If not viewed
1. **Check delivery** — confirm the email landed (check spam, verify address)
2. **Re-send with a different subject line** — the original email may not have cut through
3. **Try a different channel** — phone call (most direct), LinkedIn message (visible even if email is buried), text/SMS (if you have the number and the relationship supports it). Don't keep using the same channel that isn't working.
4. **Reduce friction** — "Here's the one-page summary" with a link back to the full proposal

### If pricing section is getting heavy attention
1. **Proactively address value** — send an ROI breakdown or case study showing cost justification
2. **Offer flexibility** — "I noticed you're reviewing the pricing — happy to discuss options that fit your budget"
3. **Don't discount preemptively** — let them raise the concern first

### If multiple stakeholders are viewing
1. **Ask your champion** — "It looks like a few people on your team are reviewing — should I put together a summary for the broader group?"
2. **Create stakeholder-specific content** — technical details for engineering, ROI for finance, timeline for ops
3. **Offer a group walkthrough** — bring all stakeholders into one call

### If buyer went dark
1. **Day 3-5**: Light touch — share something useful (article, case study), don't ask "did you see my proposal?"
2. **Day 7-10**: Direct but empathetic — "I know things get busy. Is this still a priority for Q2, or should we revisit later?"
3. **Day 14+**: Break-up email — "I don't want to keep following up if the timing isn't right. Should I close this out for now?"

## Step 4 — Draft follow-up messages

Write 1-2 follow-up messages tailored to the specific engagement pattern. Messages should:

- Reference the engagement signal *indirectly* (don't say "I see you viewed it 5 times" — that's creepy)
- Add value, not just ask for status
- Include a specific, low-friction CTA
- Match the tone of the deal stage (casual for early, professional for enterprise)

## Step 5 — Webhook setup guidance

Help the user set up real-time alerts for future proposals using Qwilr webhooks:

### Recommended webhook subscriptions

```bash
curl -X POST https://api.qwilr.com/v1/webhooks \
  -H "Authorization: Bearer $QWILR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-endpoint.com/qwilr-events",
    "events": ["pageFirstViewed", "pageViewed", "pageAccepted", "pagePartiallyAccepted"]
  }'
```

### Event-to-action mapping

| Webhook Event | Recommended Action |
|---|---|
| `pageFirstViewed` | Alert rep in Slack/email — prospect opened the proposal |
| `pageViewed` (repeat) | Log in CRM — track view count and timing |
| `pageAccepted` | Update CRM deal stage, notify rep, trigger onboarding |
| `pagePartiallyAccepted` | Alert rep — buyer selected some items, follow up on the rest |
| `pagePreviewAccepted` | Internal preview was accepted — ready for client review |

For full automation setup (CRM sync, Slack notifications, etc.), use `/sales-qwilr-automation`.

## Gotchas

- **Don't over-interpret a single page view.** One view could be the prospect, their EA, or an automated CRM preview. A single brief view doesn't mean "they're interested" — it means "someone opened the link." Wait for patterns (repeat views, time spent, multiple viewers) before drawing conclusions.
- **Don't treat all engagement signals equally.** Pricing section views are much higher signal than a quick skim of the cover page. Weight your interpretation toward the sections that indicate evaluation behavior (pricing, scope, case studies).
- **Don't recommend aggressive follow-up on automated CRM views.** Some CRMs and email tools auto-preview links, generating false "viewed" signals. If a view happens within seconds of sending with zero time on page, it's likely automated.
- **Don't tell the prospect you can see their views.** Saying "I noticed you looked at the pricing 3 times" is creepy and breaks trust. Reference engagement signals *indirectly* — "I wanted to see if you had questions about the pricing options."
- **Don't ignore time-of-day context.** A prospect reviewing a proposal at 10pm on a Sunday suggests they're doing personal due diligence, possibly building a case. A 30-second view during business hours is likely a quick skim between meetings.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-proposal-page` — Write or restructure the proposal itself
- `/sales-qwilr-automation` — Set up automated CRM sync and webhook workflows
- `/sales-follow-up` — General follow-up strategies (non-Qwilr-specific)
- `/sales-deal-room` — For complex deals that need a multi-page deal room
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`
