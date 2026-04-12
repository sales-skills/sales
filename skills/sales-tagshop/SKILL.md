---
name: sales-tagshop
description: "Tagshop.ai platform help — AI UGC video ad generator and shoppable social commerce galleries. Covers AI avatars (1000+ presenters), AI Twin (clone your voice/face), URL-to-Video, text-to-video, product video creation, auto-captions, campaign publishing (Facebook, Instagram, TikTok, YouTube), shoppable UGC galleries, AI product tagging, Shopify/WooCommerce/BigCommerce/Wix integration, and analytics. Use when you need video ads but don't have a production budget, AI Twin clones don't look or sound right, product page URLs aren't converting to usable videos, shoppable galleries aren't driving clicks, ecommerce integration isn't syncing products, or ad campaigns in Tagshop aren't performing. Do NOT use for ad campaign strategy (use /sales-retargeting or /sales-b2b-advertising), general content creation (use /sales-content), or email marketing (use /sales-email-marketing)."
argument-hint: "[describe what you need help with in Tagshop]"
license: MIT
version: 1.0.0
tags: [sales, ugc, video-ads, social-commerce, ecommerce, platform]
---
# Tagshop Platform Help

Helps the user with Tagshop.ai platform questions — from AI video ad creation and avatar setup through shoppable UGC gallery configuration, ecommerce integration, campaign publishing, and analytics.

## Step 1 — Gather context


If `references/learnings.md` exists, read it first for accumulated knowledge.

Ask the user:

1. **Which Tagshop product are you using?**
   - A) AI UGC Video Ads (ugc.tagshop.ai) — creating video ads with AI avatars
   - B) Shoppable UGC Galleries — embedding social content on your store
   - C) Both
   - D) Not sure yet — help me choose

2. **What do you need help with?**
   - A) Creating a video ad — script, avatar, product video
   - B) AI Twin — cloning your face/voice for brand consistency
   - C) URL-to-Video — converting product pages to video ads
   - D) Campaign publishing — pushing ads to Facebook/Instagram/TikTok/YouTube
   - E) Shoppable gallery setup — collecting and displaying UGC on your store
   - F) Ecommerce integration — connecting Shopify/WooCommerce/BigCommerce/Wix
   - G) Product tagging — tagging products in UGC content
   - H) Analytics — tracking performance and conversions
   - I) Pricing / plan selection
   - J) Something else — describe it

3. **What's your ecommerce setup?**
   - A) Shopify
   - B) WooCommerce
   - C) BigCommerce
   - D) Wix
   - E) Other / no store
   - F) Not applicable (ads only)

**If the user's request already provides most of this context, skip directly to the relevant step.** Lead with your best-effort answer using reasonable assumptions (stated explicitly), then ask only the most critical 1-2 clarifying questions at the end.

## Step 2 — Route or answer directly

If the request maps to a specialized skill, route:
- Ad campaign strategy / targeting / bidding → `/sales-retargeting` or `/sales-b2b-advertising`
- Sales content management → `/sales-content`
- Email marketing → `/sales-email-marketing`
- Ecommerce checkout optimization → `/sales-checkout`
- Tool integration architecture → `/sales-integration`

Otherwise, answer directly from platform knowledge below.

## Step 3 — Tagshop platform reference

### Product 1: AI UGC Video Ads

Tagshop's AI video ad generator turns scripts, product URLs, or text prompts into UGC-style video ads — no filming, actors, or editing required.

#### AI Avatars
- **1000+ digital presenters** powered by models like Runway and Wan 2
- Select by gender, age, ethnicity, style to match your target audience
- **Gesture & emotion control** — customize avatar animation for natural-looking presentation
- Multiple formats: vertical (9:16 for Reels/TikTok), horizontal (16:9 for YouTube), square (1:1 for feeds)

#### AI Twin
- **Clone your appearance and voice** for consistent brand representation
- Upload reference photos/video → Tagshop generates a digital twin
- Use your AI Twin across all future videos without re-filming
- Ideal for personal brands, founders, thought leaders who want face-on-camera without the production overhead

#### URL-to-Video
- Paste a product URL → Tagshop extracts product images, descriptions, features
- AI generates a video ad script and pairs it with an avatar
- Edit the generated script and visuals before rendering
- Supports any product page URL (Shopify, Amazon, WooCommerce, etc.)

#### Text/Script-to-Video
- Write or paste a script → select an avatar → generate video
- AI can generate scripts from a brief prompt if you don't have one
- Auto-captions with customizable themes, fonts, colors
- Built-in video editor for trimming, transitions, music

#### Campaign Publishing
- Publish directly to Facebook, Instagram, YouTube, TikTok from the dashboard
- Manage all campaigns from one place — no switching between ad platforms
- Track campaign performance within Tagshop

### Product 2: Shoppable UGC Galleries

Collect social media UGC and turn it into shoppable content on your ecommerce store.

#### Content Collection
- Pull content from Instagram (posts, Reels, Stories), TikTok, YouTube
- Collect by hashtag, mention, or specific accounts
- Automatic and manual content moderation options
- Content rights management — request permission from creators

#### Shoppable Product Tagging
- **AI-powered product tagging** — automatically matches UGC to your product catalog
- Manual tagging also available for precision
- Shoppable hotspots highlight tagged products for interactive browsing
- Click-through to product pages for purchase

#### Gallery Display
- Embed on homepage, product pages, or dedicated UGC pages
- Multiple layout options: grid, carousel, masonry, slider
- Responsive for mobile and desktop
- Customizable styling to match your brand

#### Ecommerce Integrations
- **Shopify**: Shopify app available ("Taggbox Shoppable Social UGC") — syncs product catalog, manages orders
- **WooCommerce**: Plugin for product catalog sync
- **BigCommerce**: Partner integration for inventory and order sync
- **Wix**: Design integration for ecommerce capabilities

#### Analytics
- Track clicks, conversions, engagement per gallery and per content piece
- Social insights — which content types drive the most sales
- CTR tracking per tagged product
- Revenue attribution (estimated — full measurement infrastructure is an industry gap)

### Pricing (AI UGC Video Ads)

*Best-effort — verify at tagshop.ai.*

| Plan | Monthly | Annual (60% off) | Credits | Videos | Key features |
|---|---|---|---|---|---|
| Free | $0 | — | 15 | Limited | Try it out |
| Starter | $23/mo | ~$11/mo | 50 | 5 | Basic avatars |
| Growth | $79/mo | ~$32/mo | 200 | 20 | More avatars, faster rendering |
| Scale | $199/mo | ~$80/mo | 500 | 50 | 4K export, priority rendering, full avatar library |
| Enterprise | Custom | Custom | Custom | 50+ | Dedicated support |

### Pricing (Shoppable UGC Galleries — Shopify App)

| Plan | Price | Feeds | Monthly views | Features |
|---|---|---|---|---|
| Free | $0 | 1 | 500 | Manual moderation |
| Starter | $19/mo | 2 | 10K | Auto moderation |
| Growth | $39/mo | 4 | 50K | Shoppable UGC |
| Advance | $99/mo | 10 | 1M | AI moderation |

### API

- API key available on Premium plan
- Full public API planned for Q3 2026
- Currently limited — most functionality is through the dashboard UI

## Step 4 — Actionable guidance

Based on the user's specific question:

1. **Step-by-step instructions** — walk through the task in Tagshop
2. **Creative best practices** — avatar selection, script writing, video length for each platform
3. **Common pitfalls** — what can go wrong and how to avoid it
4. **Platform-specific tips** — format/length requirements for Facebook, Instagram, TikTok, YouTube

### Video ad best practices by platform

| Platform | Format | Length | Tips |
|---|---|---|---|
| Facebook/Instagram Reels | 9:16 vertical | 15-30 sec | Hook in first 3 sec, captions on |
| TikTok | 9:16 vertical | 15-60 sec | Authentic UGC style, trending audio |
| YouTube Shorts | 9:16 vertical | 15-60 sec | Clear CTA at end |
| YouTube pre-roll | 16:9 horizontal | 15-30 sec | Skip-proof hook in 5 sec |
| Instagram feed | 1:1 square | 15-30 sec | Visual-first, less text |

## Gotchas

*Best-effort from research — review these, especially items about plan-gated features and integration gotchas that may be outdated.*

- **Don't confuse the two Tagshop products.** AI UGC Video Ads (ugc.tagshop.ai) and Shoppable UGC Galleries are separate products with separate pricing. Users asking about "Tagshop" may mean either one.
- **Free plan rendering is slow.** Starter and free plans have lower rendering priority. Videos can take significantly longer to generate. Upgrade to Growth+ for faster turnaround.
- **AI videos can trigger uncanny valley.** AI avatars look good but not perfect. For platforms where authenticity matters (TikTok, Instagram), test audience response — some audiences react negatively to AI-generated presenters. Mix AI and real UGC for best results.
- **Shoppable gallery conversion tracking is estimated.** Revenue attribution for UGC galleries is an industry-wide gap. Don't rely on Tagshop analytics as the sole conversion metric — cross-reference with your ecommerce platform's analytics and UTM parameters.
- **Shopify app reviews are mixed (3.1/5).** The Taggbox Shopify app has reports of account lockouts when exceeding plan limits and aggressive upgrade prompts. Understand your plan limits before going live.
- **AI Twin requires good source material.** Poor quality reference photos/video produce poor quality AI Twins. Use well-lit, front-facing, high-resolution source material.

- **Self-improving**: If you discover something not covered here, append it to `references/learnings.md` with today's date.

## Related skills

- `/sales-retargeting` — Retargeting strategy for the ads you create with Tagshop
- `/sales-checkout` — Optimize the product pages your shoppable galleries link to
- `/sales-content` — Sales content management and governance
- `/sales-integration` — Connect Tagshop with other tools
- `/sales-do` — Not sure which skill to use? The router matches any sales objective to the right skill. Install: `npx skills add sales-skills/sales --skills sales-do`

## Examples

### Example 1: Create a product video ad from a URL
**User says**: "I have a Shopify product page — how do I turn it into a video ad for Instagram Reels?"
**Skill does**:
1. Walks through URL-to-Video: paste the Shopify product URL into Tagshop
2. Reviews the AI-generated script and suggests edits for a 15-30 second Reel
3. Recommends avatar selection (match target audience demographics)
4. Sets format to 9:16 vertical with auto-captions enabled
5. Explains how to publish directly to Instagram from the Tagshop dashboard
**Result**: Product video ad ready for Instagram Reels, published from Tagshop

### Example 2: Set up shoppable UGC gallery on Shopify
**User says**: "I want to display Instagram UGC on my product pages with buy buttons"
**Skill does**:
1. Installs the Taggbox Shopify app and connects Instagram account
2. Configures content collection by hashtag and mentions
3. Sets up AI product tagging to match UGC to the product catalog
4. Embeds a shoppable gallery widget on product pages
5. Configures analytics tracking for clicks and conversions
**Result**: Shoppable UGC gallery on product pages with tagged products and analytics

### Example 3: Create an AI Twin for consistent brand videos
**User says**: "I'm a founder and want to create video ads featuring me without filming every time"
**Skill does**:
1. Explains AI Twin requirements — high-quality reference photos/video, well-lit, front-facing
2. Walks through AI Twin creation process in Tagshop
3. Shows how to use the AI Twin with different scripts for product launches, testimonials, ads
4. Recommends mixing AI Twin videos with real footage for authenticity
5. Sets up a workflow: write script → select AI Twin → generate → review → publish
**Result**: AI Twin created, reusable across all future video ads without re-filming

## Troubleshooting

### Video rendering takes too long
**Symptom**: Video stuck in rendering queue or taking hours to complete
**Cause**: Free and Starter plans have lower rendering priority. Complex videos with custom avatars take longer.
**Solution**: Check your plan's rendering priority tier. Growth and Scale plans have faster rendering. Simplify the video (shorter duration, fewer transitions) to reduce rendering time. Try during off-peak hours (early morning US time).

### Shoppable gallery not showing on store
**Symptom**: Gallery widget installed but not visible on the storefront
**Cause**: App embed not activated in Shopify theme, script blocked by theme or other apps, or plan view limit exceeded
**Solution**: In Shopify, go to Online Store > Themes > Customize and ensure the Taggbox app embed is toggled on. Check for JavaScript conflicts with other apps. Verify you haven't exceeded your plan's monthly view limit — the gallery hides when limits are hit (this is a common complaint in reviews).

### AI avatar looks unnatural
**Symptom**: Generated video has uncanny movement, lip sync issues, or robotic expressions
**Cause**: Avatar model limitations, poor script pacing, or mismatched avatar-to-audience fit
**Solution**: Try a different avatar from the library — quality varies across presenters. Shorten sentences in the script for better lip sync. Add pauses between key points. For AI Twin, ensure source material is high-quality. Consider using the avatar for voiceover with product footage instead of face-on-camera if realism is critical.
