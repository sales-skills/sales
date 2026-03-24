---
name: sales-request-skill
description: "Request or contribute a new sales/marketing/GTM skill that doesn't exist yet. Use when no existing skill covers the user's need — helps them build the skill and submit a PR, or file an issue requesting it. Also use when the user says 'there should be a skill for this', 'can we make a skill', 'I want to contribute a skill', or 'none of the sales skills cover my use case'."
argument-hint: "[describe the missing capability]"
---

# Request or Build a Missing Sales Skill

The user needs a sales, marketing, or GTM capability that doesn't have a skill yet. Help them contribute it or request it.

**This skill always ends with a concrete action on GitHub:**
- **Path A (Build)**: Create the skill files, commit, push, and open a **pull request** to `sales-skills/sales`
- **Path B (Request)**: File a **GitHub issue** on `sales-skills/sales` describing what's needed

Do not stop at "here's what the PR/issue would look like" — actually create it using `gh pr create` or `gh issue create`.

## Step 1: Confirm the gap

If `$ARGUMENTS` is provided, use it. Otherwise ask: "What sales, marketing, or GTM capability do you need that isn't covered by an existing skill?"

Verify the request fits the sales/marketing/GTM domain. If it's outside scope entirely (e.g., "build a database migration tool"), say so and suggest appropriate tools instead.

Check the existing skills by reviewing the routing table in `skills/sales-do/SKILL.md` and listing installed skills in `~/.claude/skills/` to make sure there isn't already a skill that covers this. If there's a close match, suggest it instead.

Summarize back to the user:
- **What they need**: one sentence
- **Closest existing skill**: what's close but doesn't quite fit
- **Category**: which section it would belong in (Prospecting & Pipeline, Active Deals, Strategy & Content, Marketing & GTM, Research & Data, Creative & Design, etc.)

## Step 2: Choose a path

Ask the user:

> Would you like to:
> 1. **Build the skill** — I'll help you create it with proper structure and prepare a PR
> 2. **Request the skill** — I'll file a GitHub issue so the maintainers know it's needed

## Path A: Build the skill

### Use skill-creator if available

Check whether the `/skill-creator` skill is available. If available, delegate to it for the full create-test-iterate workflow.

When delegating to `/skill-creator`, provide this sales-specific context:

> **Repo conventions for this skill:**
> - Naming: `sales-<problem>` for sales skills, descriptive names for marketing/GTM skills (e.g., `cold-email`, `launch-strategy`)
> - Descriptions should use phrases salespeople and marketers actually say — "write a cold email", "prep for a discovery call", "handle this objection"
> - SKILL.md is the only required file — keep it focused and actionable
> - Skills should ask clarifying questions before acting (audience, stage, constraints)
> - Skills route through `/sales-do` — the description field determines when the router matches
>
> **Skill structure:**
> ```
> skills/<skill-name>/
> └── SKILL.md        # Main instructions (required)
> ```
>
> **SKILL.md body pattern** (follow what other skills in this repo do):
> 1. Step to gather context (ask 2-4 questions about the user's specific situation)
> 2. Implementation steps with actionable output
> 3. Templates or frameworks relevant to the problem domain
> 4. Output formatting guidance
> 5. Next steps pointing to related skills

Then let skill-creator run its workflow.

### If skill-creator is NOT available

Build the skill manually following the conventions above.

#### Write the SKILL.md

```yaml
---
name: <skill-name>
description: "<What problem it solves>. Use when <trigger phrases the user would say>."
argument-hint: "[brief hint about expected arguments]"
---
```

Read 2-3 existing skills in `skills/` to match the tone and structure. Key things to get right:

**Description field** — This is how the `/sales-do` router and Claude decide whether to use the skill. Be specific about trigger phrases. Include both what the skill does AND when to use it:

```yaml
# Bad: too vague
description: "Help with sales emails"

# Good: specific triggers, covers edge cases
description: "Write and optimize cold outbound email sequences. Use when writing first-touch cold emails, building multi-step outreach sequences, A/B testing subject lines, or improving reply rates on existing campaigns."
```

**Body** — Should follow the question-first pattern: gather context about the user's situation before producing output. Include templates, frameworks, or examples that make the output immediately useful.

#### Test the skill

Create 2-3 test prompts — realistic requests a salesperson or marketer would make. Run them with the skill active and verify the outputs are practical and actionable.

### Submit the PR

After creating the skill files, submit a pull request. Do all of these steps — don't stop at "here's what to do":

1. Update `skills/sales-do/SKILL.md` — add a row to the appropriate routing table
2. Update `README.md` — add a row to the appropriate catalog table
3. Create a branch: `git checkout -b add-<skill-name>`
4. Stage and commit: `git add skills/<skill-name>/ skills/sales-do/SKILL.md README.md && git commit -m "Add <skill-name> skill"`
5. Push: `git push -u origin add-<skill-name>`
6. Open the PR:

```bash
gh pr create \
  --repo sales-skills/sales \
  --title "Add <skill-name> skill" \
  --body "$(cat <<'EOF'
## Summary
- **Problem**: <what the user is solving>
- **Category**: <which section it belongs in>
- **Example invocation**: `/<skill-name> <example prompt>`

## Files
- `skills/<skill-name>/SKILL.md` — main instructions
- `skills/sales-do/SKILL.md` — routing table updated
- `README.md` — catalog table updated
EOF
)"
```

Return the PR URL to the user when done.

## Path B: Request the skill

File a GitHub issue on the repo. Do not just draft it — actually submit it:

```bash
gh issue create \
  --repo sales-skills/sales \
  --title "Skill request: <skill-name>" \
  --body "$(cat <<'EOF'
## Problem
<What the user is trying to do, in their words>

## Category
<Which section this fits in: Prospecting, Active Deals, Strategy, Marketing, Research, Creative, etc.>

## Example use case
<A concrete scenario where this skill would help>

## Suggested trigger phrases
<2-3 phrases a salesperson or marketer might say that should route to this skill>
EOF
)"
```

Return the issue URL to the user when done.

## Quality checklist

Before submitting a new skill (via PR or skill-creator), verify:

- [ ] Name follows repo conventions (`sales-<problem>` for sales, descriptive for marketing/GTM)
- [ ] Description includes specific trigger phrases a user would actually say
- [ ] SKILL.md asks clarifying questions before producing output
- [ ] Output is practical and actionable — not generic advice
- [ ] Routing table in `sales-do/SKILL.md` updated with new row
- [ ] README.md catalog table updated with new row
- [ ] Points to related skills where relevant
