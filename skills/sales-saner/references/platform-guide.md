# Saner.AI Platform Reference

## Overview

Saner.AI is an AI personal assistant built specifically for ADHD users and knowledge workers. It consolidates notes, emails, tasks, and calendar into a single searchable workspace with a personal AI (Skai) that auto-organizes content, extracts action items, and generates daily plans. No API or developer surface — it's a closed, consumer-facing product.

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| Personal AI (Skai) | Natural language search and synthesis across all notes, emails, docs | **UI-only** |
| Note management | Create, organize, tag notes with AI-suggested categorization | **UI-only** |
| Voice capture | Record voice memos via mobile app or Chrome extension, auto-transcribed | **UI-only** |
| Task management | Create tasks manually or extract from emails/notes, AI prioritization | **UI-only** |
| Proactive AI planner | Generates daily optimal day plan based on task priority and effort | **UI-only** |
| Inbox processing | Unified inbox aggregating notes, emails, tasks with AI priority sorting | **UI-only** |
| Focus Mode | Single-task distraction-free mode with related note suggestions | **UI-only** |
| Import | Bulk import from Notion, Evernote, Apple Notes, Obsidian, PDF, Markdown, Word | **UI-only** (one-time) |
| Gmail connection | Pulls emails into unified inbox for task extraction | **Connected service** (read-only) |
| Google Drive connection | Indexes Drive docs for AI search | **Connected service** (read-only) |
| Slack connection | Pulls Slack messages for search/task extraction | **Connected service** (read-only) |
| Google Calendar connection | Shows calendar events, helps with daily planning | **Connected service** (read-only) |
| Chrome extension | Side panel for quick note capture from any webpage | **Browser extension** |
| Multi-AI models | Access to Skai (personal AI), GPT-4, Claude 3, Gemini Pro | **UI-only** (Standard plan) |

**Key limitation**: Every capability is UI-only or connected-service. There is no API, no webhooks, no Zapier/Make integration, and no MCP server. Data goes in but cannot be programmatically extracted.

## Pricing, limits & plan gates

| Feature | Free | Starter ($8/mo annual, $12/mo monthly) | Standard ($16/mo annual, $20/mo monthly) |
|---|---|---|---|
| AI messages | 30/month | 30/day | Unlimited (fair use) |
| Voice recording | 1 minute limit | Extended (limit unclear) | Unlimited |
| Storage | 100MB | 5GB | 100GB |
| AI models | Skai only | Skai + GPT-4 | All models (Skai, GPT-4, Claude 3, Gemini Pro) |
| Imports | All sources | All sources | All sources |
| Connected services | Gmail, Drive, Slack, Calendar | Same | Same + premium support |
| Chrome extension | Yes | Yes | Yes |
| Focus Mode | Yes | Yes | Yes |

**Plan selection guidance**:
- Free is effectively a trial — 30 AI messages/month is ~1/day, unusable for daily workflow
- Starter is the sweet spot for solopreneurs — 30 AI messages/day covers typical search, synthesis, and task planning
- Standard only justified if you need heavy voice capture, large file storage, or access to all AI models

**Early user discounts** may be available — check the pricing page.

## Integrations

| Integration | Direction | What it does |
|---|---|---|
| Gmail | Read | Pulls emails into unified inbox for AI processing and task extraction |
| Google Drive | Read | Indexes Google Docs/Sheets for AI search across your Drive |
| Slack | Read | Pulls messages for search and task extraction |
| Google Calendar | Read | Shows events in daily planner, helps AI schedule around meetings |
| Chrome extension | Write (to Saner) | Captures web content, notes, highlights into Saner.AI from any page |
| Notion (import) | One-time read | Bulk import of Notion pages/databases |
| Evernote (import) | One-time read | Bulk import of Evernote notebooks |
| Apple Notes (import) | One-time read | Bulk import (export from Apple Notes first) |
| Obsidian (import) | One-time read | Bulk import of Obsidian vault (Markdown) |

**No outbound integrations.** Data flows into Saner.AI but cannot be pushed to external tools. No CRM sync, no webhook notifications, no Zapier triggers/actions.

## Data model

Saner.AI doesn't expose a data model via API, but the core objects based on UI behavior are:

- **Notes** — text documents with AI-suggested tags, categories, and related note links
- **Tasks** — action items with priority, effort estimate, and due date. Can be created manually or extracted by AI from emails/notes
- **Inbox items** — unified feed of notes, emails, tasks ranked by AI priority
- **Daily plan** — AI-generated schedule for the day based on task priority, effort, and calendar events
- **Voice memos** — audio recordings with auto-transcription, stored as notes

<!-- No JSON shapes available — no API exposes these objects -->

## Workarounds for missing developer surface

Since there's no API, users needing automation have limited options:

1. **Chrome extension as input**: Use the side panel to manually capture content from other tools into Saner.AI
2. **Export**: Copy-paste or screenshot from Saner.AI into other tools (no bulk export documented)
3. **Gmail as bridge**: Since Saner.AI reads Gmail, you can email yourself content to get it into the system
4. **Feature requests**: Users have requested API/IFTTT on Product Hunt and OpenAI Community — the team may add this in the future

## Integration patterns

### Setting up Gmail connection
1. Go to Settings → Connected Accounts
2. Click "Connect Gmail"
3. Grant OAuth permissions (read access to emails)
4. Wait for initial sync (can take 10-30 minutes for large inboxes)
5. Emails appear in unified inbox for AI processing

**Common issue**: OAuth popup may be blocked by browser extensions. Use incognito window if connection fails.

### Importing from Notion
1. Export from Notion: Settings → Export → Markdown & CSV
2. In Saner.AI: Settings → Import → Select Notion
3. Upload the exported zip file
4. Wait for processing (100+ files may take several minutes)
5. Verify by searching for a known page title

**Common issue**: Notion database properties may not import cleanly. Export as Markdown for best results.

### Daily planning workflow
1. Morning: Open Saner.AI → check unified inbox
2. AI sorts inbox items by priority
3. Review and accept/modify AI task suggestions
4. Click "Plan My Day" for Proactive AI to generate daily schedule
5. Work through tasks using Focus Mode
6. End of day: check off completed tasks, carry over incomplete ones
