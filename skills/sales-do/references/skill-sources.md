# Skill Sources

Repo mapping for skills `sales-do` may need to fetch from GitHub when not installed locally. Kept in sync with `skills/sales-third-party/SKILL.md`.

## How to use

Given a skill name, look it up in the **Overrides** table below to find its `{org}/{repo}` and `{branch}`. If the skill isn't listed, use the **Default**.

To read its `SKILL.md` from GitHub:

```
https://raw.githubusercontent.com/{org}/{repo}/{branch}/skills/{skill}/SKILL.md
```

To install:

```
npx skills add {org}/{repo} --skill {skill}
```

## Default

Any `sales-*` skill not listed below → **`sales-skills/sales`** (branch `main`, path `skills/{skill}/SKILL.md`).

## Overrides

| Repo | Branch | Skills |
|---|---|---|
| `coreyhaines31/marketingskills` | `main` | `ai-seo`, `content-strategy`, `copywriting`, `copy-editing`, `programmatic-seo`, `schema-markup`, `seo-audit`, `site-architecture`, `social-content`, `ab-test-setup`, `form-cro`, `onboarding-cro`, `page-cro`, `paywall-upgrade-cro`, `popup-cro`, `signup-flow-cro`, `ad-creative`, `cold-email`, `email-sequence`, `free-tool-strategy`, `lead-magnets`, `paid-ads`, `competitor-alternatives`, `launch-strategy`, `marketing-ideas`, `marketing-psychology`, `pricing-strategy`, `product-marketing-context`, `churn-prevention`, `referral-program`, `revops`, `sales-enablement`, `analytics-tracking` |
| `resciencelab/opc-skills` | `main` | `producthunt`, `reddit`, `requesthunt`, `twitter`, `banner-creator`, `logo-creator`, `nanobanana`, `seo-geo`, `domain-hunter`, `archive` |
| `aaron-he-zhu/seo-geo-claude-skills` | `main` | `backlink-analyzer` |
| `jimliu/baoyu-skills` | `main` | `baoyu-slide-deck` |
| `supercent-io/skills-template` | `main` | `marketing-skills-collection`, `marketing-automation`, `skill-standardization` |
| `wshobson/agents` | `main` | `competitive-landscape` |
| `calm-north/seojuice-skills` | `main` | `build-links` |
| `starchild-ai-agent/official-skills` | `main` | `skill-creator` |
| `apify/agent-skills` | `main` | `apify-lead-generation` |
| `inferen-sh/skills` | `main` | `product-hunt-launch` |
| `membranedev/application-skills` | `main` | `salesloft` (API access wrapper — distinct from `sales-salesloft`) |

## Maintenance

When `skills/sales-third-party/SKILL.md` adds, removes, or moves a skill, mirror the change here. The two files describe the same external surface — `sales-third-party` is the human-browsable catalog; this file is the machine-resolvable source map.
