---
name: sales-iris-clarity
description: "IRIS Clarity platform help — bidirectional AI noise cancellation for calls, Web SDK and Server SDK for embedding voice isolation in VoIP apps, enterprise contact center audio quality. Use when setting up IRIS Clarity desktop app for noise cancellation on calls, background noise ruining customer calls in a contact center, choosing between IRIS Clarity and Krisp for noise removal, embedding noise cancellation into a VoIP platform with the IRIS SDK, configuring IRIS Clarity for Talkdesk or 8x8 or RingCentral, troubleshooting IRIS Clarity not removing all noise, or evaluating IRIS Clarity pricing for a large team. Do NOT use for choosing between AI note-takers generally (use /sales-note-taker) or building with the Krisp Voice AI SDK specifically (use /sales-krisp)."
argument-hint: "[describe what you need help with in IRIS Clarity]"
license: MIT
version: 1.0.0
tags: [sales, noise-cancellation, voice-ai, sdk, platform]
github: "https://github.com/IRIS-AUDIO"
---

# IRIS Clarity Platform Help

## Step 1 — Gather context

If `references/learnings.md` exists, read it first for accumulated platform knowledge.

1. **Which IRIS product are you evaluating?**
   - A) IRIS Clarity desktop app (noise cancellation for calls)
   - B) IRIS SDK — embedding noise cancellation in my VoIP/CRM platform
   - C) Both — evaluating the app AND the SDK
   - D) Not sure — help me decide

2. **What's your goal?**
   - A) Set up or deploy IRIS Clarity for a team
   - B) Integrate the IRIS SDK into my product
   - C) Compare IRIS Clarity vs Krisp or other noise tools
   - D) Troubleshoot audio quality issues
   - E) Understand pricing for my team size

3. **What's your environment?**
   - A) Contact center / call center (100+ agents)
   - B) Mid-size sales team (10-100 people)
   - C) Small team / individual
   - D) Developer building a VoIP product

Skip-ahead rule: if the user's prompt already contains enough context, skip to Step 2.

## Step 2 — Route or answer directly

| Problem domain | Route to |
|---|---|
| Choosing between AI note-takers (not just noise cancellation) | `/sales-note-taker {user's question}` |
| Building with the Krisp Voice AI SDK specifically | `/sales-krisp {user's question}` |
| Reviewing a call for coaching or scoring | `/sales-call-review {user's question}` |
| General CRM/tool integration patterns | `/sales-integration {user's question}` |
| CCaaS platform selection (Talkdesk, 8x8, etc.) | `/sales-ccaas-selection {user's question}` |

Otherwise, answer directly below.

## Step 3 — IRIS Clarity platform reference

**Read `references/platform-guide.md`** for the full platform reference — modules, SDK details, pricing, integrations, deployment options.

Answer the user's question using only the relevant section. Don't dump the full reference.

## Step 4 — Actionable guidance

You no longer need the platform guide — focus on the user's specific situation.

**Quick decision framework:**
- **IRIS Clarity app** → best when noise cancellation is the primary need, no AI notes required, contact center environment
- **IRIS SDK** → best when embedding noise cancellation into your own product (WebRTC, VoIP platform, IVR)
- **Krisp instead** → better if you also need AI meeting transcription, summaries, accent conversion, or a wider integration ecosystem
- **Neither** → if your primary need is meeting notes/coaching, use a dedicated note-taker (Fathom, Fireflies, Gong)

If you discover a gotcha, workaround, or tip not covered in `references/learnings.md`, append it there.

## Gotchas

> *Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **No AI meeting notes or transcription.** IRIS Clarity is pure noise cancellation — it doesn't generate transcripts, summaries, or action items. If you need notes, pair it with a separate note-taker or use Krisp instead (which bundles both).
- **Pricing in GBP.** All prices are listed in British Pounds — £6.50/seat/mo annual (≈$8.25 USD). Enterprise pricing requires contacting sales.
- **SDK requires authentication token.** The IRIS Web SDK installs via npm with `IRIS_SDK_TOKEN` env var. Developer portal (developer.iris.audio) is login-gated — you must request access.
- **Enterprise tier starts at 100 seats.** Professional plan caps at 100 seats. Teams of 100+ must go Enterprise (custom pricing, annual commitment).
- **Won't cancel all noise.** IRIS Clarity removes most background noise but doesn't eliminate everything — very loud or unusual sounds (e.g., construction) may bleed through. Works best in typical office/home environments.
- **Desktop app only for end users.** No mobile app, no browser extension. The SDK enables browser-based deployment but requires developer integration.
- **VoIP compatibility varies.** Works with most platforms (Zoom, Teams, Meet, RingCentral, 8x8) but test with your specific VoIP stack before committing.
- **Talkdesk AppConnect integration available.** If you're on Talkdesk, IRIS Clarity has a native integration via AppConnect — no SDK work needed.

## Related skills

- `/sales-krisp` — Krisp platform help (noise cancellation + AI meeting notes, accent conversion, Voice AI SDK — the closest competitor)
- `/sales-note-taker` — Choosing between AI note-takers (Fathom, Fireflies, Gong, Krisp, etc.) and wiring transcripts into CRM/warehouse
- `/sales-ccaas-selection` — CCaaS platform comparison (Talkdesk, Genesys, NICE CXone, Five9 — IRIS Clarity integrates with these)
- `/sales-integration` — General CRM/tool integration patterns (Zapier, webhooks, iPaaS)
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skill sales-do`

## Examples

### Example 1: Contact center evaluating noise cancellation
**User says**: "Our agents are in a noisy open-plan office and customers keep complaining about background noise on calls. Should we use IRIS Clarity?"
**Skill does**:
1. Confirms IRIS Clarity's bidirectional noise cancellation is designed for exactly this — removes noise on both the agent and customer side
2. Checks their VoIP platform for native integration (Talkdesk AppConnect, or generic virtual audio device for others)
3. Notes the 14-day free trial for Professional plan, and that 100+ seats requires Enterprise
4. Compares to Krisp Call Center AI ($10/agent/mo, 40-seat min) which adds accent conversion and agent assist — IRIS is cheaper per seat but noise-only
**Result**: Clear recommendation with trial plan and competitor comparison.

### Example 2: Developer embedding noise cancellation in a VoIP app
**User says**: "I'm building a browser-based calling tool and want to add noise cancellation. How does the IRIS SDK work?"
**Skill does**:
1. Reads platform-guide.md SDK section — Web SDK uses WebRTC AudioWorkletProcessor
2. Walks through setup: npm install with IRIS_SDK_TOKEN, copy iris-awp to public dir, or use setup wizard
3. Explains 9-step implementation flow: instantiate → AudioContext (click event) → connect streams → activate → start/stop
4. Notes 18+ config params (audioWorkletPath, wasmPath, key, license, company, model, etc.)
5. Flags that developer portal is login-gated — request access at developer.iris.audio
**Result**: Concrete SDK implementation guidance with setup steps and config parameters.

### Example 3: Comparing IRIS Clarity vs Krisp
**User says**: "We're choosing between IRIS Clarity and Krisp for our 50-person sales team. What's the difference?"
**Skill does**:
1. Core difference: IRIS = pure noise cancellation, Krisp = noise cancellation + AI meeting notes + accent conversion
2. Pricing comparison: IRIS £6.50/seat/mo (~$8.25) vs Krisp $8/seat/mo (annual) for Core — very close on noise-only
3. If team needs meeting transcription/summaries → Krisp wins (IRIS has no note-taking)
4. If team only needs call quality improvement → IRIS is a strong option, especially with bidirectional noise cancellation
5. SDK comparison: both offer developer SDKs — IRIS (C++/Python/Node/WebRTC), Krisp (JS/WASM/desktop/mobile/server)
**Result**: Decision framework based on whether notes or pure noise cancellation is the priority.

## Troubleshooting

### IRIS Clarity not removing all background noise
**Symptom**: Some noise still audible during calls despite IRIS Clarity being active
**Cause**: AI noise cancellation works best on consistent background sounds (office chatter, HVAC, traffic). Sudden loud sounds or human voices close to the mic may not be fully suppressed.
**Solution**: Ensure the app is set to the correct audio device. Try adjusting the noise cancellation intensity if available. Use a directional microphone to give the AI a cleaner signal. For extreme noise environments, consider pairing with physical noise-canceling headphones.

### SDK authentication failing during npm install
**Symptom**: `npm install` fails with 401 or "token required" when installing the IRIS Web SDK
**Cause**: The IRIS SDK requires a valid `IRIS_SDK_TOKEN` environment variable set before installation.
**Solution**: Request SDK access at developer.iris.audio. Once approved, set the token: `export IRIS_SDK_TOKEN=your_token_here`. Alternatively, use the setup wizard: `npx @irisaudiotechnologies/iris-web-sdk setup-wizard`.

### Desktop app not working with VoIP platform
**Symptom**: IRIS Clarity installed but VoIP platform (Zoom, Teams, etc.) doesn't route audio through it
**Cause**: IRIS Clarity creates a virtual audio device — the VoIP platform must be configured to use it as input/output.
**Solution**: In your VoIP app's audio settings, select "IRIS Clarity" as both the microphone and speaker device. Restart the VoIP app after installing IRIS Clarity. If on Talkdesk, use the native AppConnect integration instead of the generic virtual device.
