---
name: sales-sendr
description: "Sendr platform help — AI-powered personalized outreach with lipsync video, dynamic landing pages, lead finder (479M+ contacts), and campaign sequencing. Use when setting up Sendr campaigns, lipsync video audio is out of sync, Sendr credits burning too fast, Lead Finder or Data Studio buttons are greyed out, dynamic pages not rendering for prospects, Sendr API or webhook integration not working, or Sendr Zapier automations failing. Do NOT use for general outbound strategy without a platform (use /sales-cadence), or general deliverability without Sendr (use /sales-deliverability)."
argument-hint: "[describe what you need help with in Sendr]"
license: MIT
version: 1.0.0
tags: [sales, outreach, video-personalization, enrichment, platform]
---

# Sendr Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

Which area of Sendr do you need help with?

1. **Campaigns & sequences** — email campaigns, multi-step sequences, automation triggers
2. **Lipsync video** — recording, personalization, dynamic audio, video generation
3. **Dynamic pages** — personalized landing pages, GIFs, Chrome extension
4. **Lead Finder** — searching the 479M+ contact database, filters, ICP targeting
5. **Data Studio** — enrichment, email verification, personality analysis
6. **Automations** — Zapier flows, Make scenarios, webhook triggers, automation builder
7. **API & webhooks** — REST API, page generation, dynamic audio, video endpoints
8. **Billing & credits** — credit consumption, plan limits, upgrading
9. **Something else** — describe your situation

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| General outbound sequence strategy (not Sendr-specific) | `/sales-cadence` |
| Email deliverability fundamentals (SPF/DKIM/DMARC, warmup) | `/sales-deliverability` |
| Enrichment comparison across tools | `/sales-enrich` |
| Building prospect lists across tools | `/sales-prospect-list` |
| CRM selection or comparison | `/sales-crm-selection` |

When routing to another skill, provide the exact command: "This is a {problem domain} question — run: `/sales-{skill} {user's original question}`"

If the question is Sendr-specific, continue to Step 3.

## Step 3 — Sendr platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, pricing, integrations, data model, workflows.

Answer the user's question using only the relevant section. Don't dump the full reference.

For API questions, **also read `references/sendr-api-reference.md`** for endpoint details.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

- Start with the simplest solution before suggesting complex workflows
- Reference specific Sendr UI paths or API endpoints
- If a feature is plan-gated (e.g., API access requires Pro), mention which plan
- If you discover a gotcha or workaround not in `references/learnings.md`, append it there

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Credits don't roll over** — unused monthly credits expire at reset. Plan usage carefully
- **Each contact costs ~3 credits** — dynamic audio + website background + landing page each consume a credit. At Growth plan (2,500 credits), that's ~833 personalized contacts/month
- **Lipsync video is not true lip-sync** — the video zooms into a circular bubble over the prospect's website background during personalized audio. This masks the lack of mouth animation. Don't promise full deepfake-style lip-sync to prospects
- **No built-in email warmup** — Sendr relies on external sending tools (Apollo, Instantly, Smartlead) for actual email delivery and warmup. Sendr creates the personalized content; you send it through your existing stack
- **API requires Pro plan ($249/mo)** — Growth plan users can't access API or webhooks. The automation builder is also Pro-only
- **Lead Finder data is 479M+ contacts, refreshed monthly** — accuracy varies by region (US data stronger than international)
- **Support is chatbot-first** — human support may be slow for pre-seed startup (1-10 employees). Community at community.sendr.io exists but is small
- **AppSumo lifetime deal sold out Jan 2026** — new users are on monthly plans only ($97-$249/mo)

## Related skills

- `/sales-cadence` — Multi-channel outbound sequence strategy across all platforms
- `/sales-deliverability` — Email deliverability fundamentals and platform-specific warmup guides
- `/sales-enrich` — Contact enrichment comparison and workflows across all tools
- `/sales-prospect-list` — Building targeted B2B prospect lists across all platforms
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

**Example 1:** "My Sendr lipsync videos have audio out of sync — the prospect's name sounds delayed"

**Example 2:** "I'm burning through 2,500 credits in a week — how do I reduce credit consumption per contact?"

**Example 3:** "How do I use the Sendr API to auto-generate personalized pages when a lead enters my Clay workflow?"

## Troubleshooting

**Lipsync video audio out of sync**
- Sendr uses a zoom-out-to-bubble technique, not true lip animation — slight timing offsets are expected
- Try re-recording the base video with a clear pause where the personalized name will be inserted
- Use the dynamic audio endpoint to preview audio before generating video
- If using ElevenLabs voice ID, check that language code matches the audio content

**Lead Finder / Data Studio buttons greyed out**
- Verify your plan has remaining credits (check Settings → Usage)
- Some operations require specific credit types — lead search vs enrichment vs verification
- Clear browser cache and try again — Chrome extension state can get stale
- Contact support at hello@sendr.io if the issue persists after credit top-up

**Credits burning faster than expected**
- Each personalized contact consumes ~3 credits (dynamic audio + background + page)
- Batch-generate pages via API instead of one-by-one in the UI — API calls are more efficient
- Skip dynamic audio for lower-priority prospects — text-only pages cost fewer credits
- Monitor consumption in your dashboard — credits don't roll over at month end
