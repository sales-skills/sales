# KUDO Platform Reference

## Overview

KUDO (kudo.ai, formerly kudoway.com) is an enterprise platform for live speech translation and interpretation. It combines AI-powered speech translation (60+ languages, automated, 24/7) with a marketplace of 12,000+ human interpreters (200+ languages). Targets organizations hosting multilingual meetings, webinars, and events — internal or external, remote, hybrid, or in-person. Differentiator: human + AI hybrid model with enterprise compliance (SOC 2 Type 2, ISO 27001).

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| AI Speech Translation | Automated real-time translation in 60+ languages, available 24/7 | UI-only (no API to trigger/manage sessions) |
| Human Interpreter Marketplace | Book from 12,000+ interpreters covering 200+ languages and sign languages | UI-only (book via KUDO dashboard) |
| Real-time Captions | AI-translated captions in 60+ languages | UI-only (rendered in widget/app) |
| BYOI (Bring Your Own Interpreter) | Connect your own interpreters to the KUDO Interpreter Console | UI-only |
| Language Access Widget | Embeddable iframe for third-party platforms — streams translated audio to attendees | Widget Auto-Floor API (Window.postMessage — browser-level, not REST) |
| Native Teams Integration | Built-in Microsoft Teams app | UI-only |
| Zoom Integration | KUDO Marketplace connects to Zoom Business/Education/Enterprise/Pro accounts | UI-only |
| Up to 32 language channels per event | Spoken and sign languages | UI-only |

## Pricing, limits & plan gates

Pricing is usage-based and custom-quoted for all tiers. No self-serve purchase.

| Plan | Hours included | Best for |
|---|---|---|
| KUDO Pro | 75 hours | Occasional multilingual meetings |
| KUDO ProPlus | (not specified) | Regular multilingual teams |
| KUDO ProPlatinum | (not specified) | Frequent users |
| KUDO Enterprise | 1,000+ hours | Global orgs with continuous multilingual needs |

**Pricing model:**
- Based on meeting duration + number of languages selected
- All languages charged at the same rate (no rare-language surcharge)
- Pay-as-you-go available for ad-hoc events
- Annual plans for recurring organizational needs
- Three service components: Technology (platform license), Speech Translation (AI/human hours), Professional Services (support level)
- Custom plans available for volumes exceeding standard tiers

**Plan-gated features:**
- No public documentation on feature differences between Pro/ProPlus/ProPlatinum tiers
- Enterprise includes platform integrations, premium support, and custom onboarding
- All plans include both AI and human interpretation access

## Integrations

| Integration | Type | Direction | Notes |
|---|---|---|---|
| Microsoft Teams | Native app | Bidirectional (audio in, translated audio out) | Built-in integration — no widget needed |
| Zoom | Marketplace integration | Bidirectional | Requires Zoom Business/Education/Enterprise/Pro |
| Webex, BlueJeans | Widget embed | Audio in, translated audio out | Via Language Access Widget iframe |
| Hopin, On24, Bizzabo, Goldcast | Widget embed | Audio in, translated audio out | Via Language Access Widget iframe |
| Any web platform | Widget embed | Audio in, translated audio out | Custom iframe embedding |
| Verbit | Partner integration | Lead referral | Partner lead referral program |

**No Zapier, Make, or iPaaS integrations.** All automation is limited to the Widget Auto-Floor API for iframe communication.

## Data model

KUDO does not expose a public REST API. There are no programmatic data objects (contacts, meetings, transcripts) accessible via API.

**Widget Auto-Floor API (browser messaging):**

The only programmatic interface is the Auto-Floor API for the Language Access Widget. It uses `Window.postMessage()` for iframe ↔ host page communication:

```javascript
// Host page listens for KUDO widget messages
window.addEventListener('message', function(event) {
  // event.data contains: { floorMute: true/false }
  if (event.data && event.data.floorMute !== undefined) {
    if (event.data.floorMute) {
      // Attendee selected a language channel — mute floor audio
      muteFloorAudio();
    } else {
      // Attendee deselected language channel — unmute floor audio
      unmuteFloorAudio();
    }
  }
});
```
<!-- Constructed from support article description — verify against live widget implementation -->

**Purpose:** When an attendee chooses a translated language channel, the `floorMute: true` message tells the host page to lower/mute the original floor audio so it doesn't compete with the interpreted audio.

## Quick-start recipes

### Recipe 1: Embed KUDO widget on a custom event page

**Trigger:** You're hosting an event on a custom web platform and want attendees to access live interpretation.

**Steps:**
1. Get the widget embed URL from your KUDO dashboard for the specific session
2. Add an iframe element to your event page pointing to the KUDO viewer widget URL
3. Implement the Auto-Floor API listener to mute floor audio when attendees select a language channel
4. Test with a staging session before the live event

```html
<!-- Embed KUDO viewer widget -->
<iframe
  id="kudo-widget"
  src="https://your-kudo-session-url"
  allow="microphone; autoplay"
  style="width: 300px; height: 400px; border: none;"
></iframe>

<script>
// Auto-Floor API: mute floor audio when attendee picks a language
window.addEventListener('message', function(event) {
  if (event.data && event.data.floorMute !== undefined) {
    var floorAudio = document.getElementById('floor-audio');
    if (floorAudio) {
      floorAudio.muted = event.data.floorMute;
    }
  }
});
</script>
```
<!-- Constructed from support article description — verify embed URL format and iframe attributes against KUDO docs -->

**Gotchas:**
- The host page must allow iframes from KUDO's domain in its Content Security Policy
- `allow="microphone; autoplay"` is needed for audio playback in the iframe
- The widget supports up to 32 language channels per session

### Recipe 2: Set up Zoom integration for multilingual webinars

**Trigger:** You want to add KUDO interpretation to your Zoom webinars.

**Steps:**
1. Go to the KUDO Marketplace dashboard
2. Connect your Zoom account (requires Zoom Business/Education/Enterprise/Pro)
3. KUDO will surface eligible upcoming Zoom meetings/webinars
4. Book interpreters or enable AI translation for each session
5. Attendees access the interpretation via the KUDO interface during the Zoom call

**Gotchas:**
- Zoom free and Zoom Pro (without webinar add-on) may not support the full integration
- The KUDO integration uses Zoom's interpretation channels — attendees select their language from the Zoom interpretation panel
- Book interpreters at least 48 hours in advance for marketplace availability

### Recipe 3: Book a human interpreter for a rare language pair

**Trigger:** You need interpretation in a language not covered by AI (beyond the 60+ AI languages).

**Steps:**
1. Log in to the KUDO Marketplace
2. Search for your language pair (e.g., Swahili ↔ Portuguese)
3. Browse available interpreters — view profiles, certifications, rates
4. Book for your session date/time
5. The interpreter connects via the KUDO Interpreter Console — no travel needed

**Gotchas:**
- Rare language pairs may have limited interpreter availability — book 2-3 weeks ahead
- If no marketplace interpreter is available, use BYOI (Bring Your Own Interpreter) to connect your own
- All languages are charged at the same rate — no surcharge for rare languages

## Integration patterns

### Widget embedding pattern

KUDO's primary third-party integration pattern is iframe embedding:

1. **Embed**: Add KUDO viewer widget iframe to your page
2. **Listen**: Implement `window.addEventListener('message')` for Auto-Floor API events
3. **React**: Mute/unmute floor audio based on `floorMute` boolean
4. **Test**: Use a staging KUDO session to verify audio routing before production

This is a browser-level integration — there is no server-side API, no webhooks, no REST endpoints for meeting management.

### CRM integration

KUDO does not have native CRM integrations. Meeting data (attendees, languages used, interpreter hours) stays within the KUDO platform. For CRM logging, you would need to manually export usage reports from the KUDO dashboard.

## Compliance & security

- **SOC 2 Type 2** — 4th consecutive year of attestation (AICPA)
- **ISO/IEC 27001:2022** — transitioned to latest standard
- **AWS-hosted** — multi-tenant SaaS on Amazon Web Services
- **Formal ISMS** (Information Security Management System) independently audited

## Partner program

KUDO offers partnership tracks for:
- **Language Service Providers (LSPs)** — resell KUDO AI for one-to-many communication
- **AV Integrators** — add permanently-ready AI speech translation to installations, consumption-based pricing, annual recurring revenue
- **Technology Partners** — integrate KUDO into your platform
- Partner program page: kudo.ai/about/partners-resellers-program/
