# Sales Skills

A collection of custom Claude Code skills for sales workflows.

## Installation

Add this repository as a skill source in your Claude Code configuration:

```bash
claude skills add /path/to/sales
```

## Usage

Skills in this repo can be invoked as slash commands in Claude Code:

```
/skill-name [arguments]
```

## Structure

```
sales/
├── README.md
├── .claude/
│   └── skills/
│       └── your-skill.md    # Skill definitions
└── ...
```

## Creating a New Skill

1. Add a new `.md` file under `.claude/skills/`
2. Include frontmatter with the skill's name, description, and trigger conditions
3. Write the skill instructions in the body

## License

MIT
