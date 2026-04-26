# Simular (Sai) Platform Reference

## Overview

Simular builds autonomous AI desktop agents. The flagship product **Sai** is an always-on AI coworker that operates on a secure cloud virtual desktop, controlling apps and browsers via GUI interaction (clicking, typing, scrolling) like a human. Founded by ex-DeepMind/Google researchers, $21.5M Series A (Dec 2025). The open-source **Agent-S** framework has 10.9k GitHub stars.

## Products

| Product | What it is | Access |
|---|---|---|
| **Sai** | Cloud-based AI coworker — runs on private VM, controls apps/browsers 24/7 | sai.work (invitation-based) |
| **Simular Pro** | Local desktop automation agent for macOS | Download DMG, invitation for full access |
| **Simular Browser** | Python API for browser automation | `pip install pysimular` |
| **Agent-S** | Open-source computer use framework | `pip install gui-agents` (GitHub: simular-ai/Agent-S) |

## Capabilities & automation surface

| Capability | Description | Automation surface |
|---|---|---|
| Task execution | Describe task in plain English, agent executes autonomously | **Sai cloud** / **Simular Pro local** |
| GUI interaction | Click, type, scroll, drag across any desktop app | **Simulang scripting** |
| Perception | Read screen content, check element visibility, evaluate conditions | **Simulang** (`stateSatisfies`, `ConceptsExist`, `pageContent`) |
| File operations | Read/write files, clipboard, screenshots | **Simulang** |
| Google Sheets | Get/set cell values, read column headers | **Simulang** (built-in) |
| Browser automation | Programmatic browser control via Python | **Simular Browser API** (`pysimular`) |
| Custom skills | Reusable workflow templates, shareable with team | **Sai** (UI-based) |
| Workflow editor | Visual workflow creation (developer mode) | **Simular Pro** (Plus+) |

**Key limitation**: Simular operates by controlling the GUI — it does NOT have API integrations with other SaaS tools. No webhooks, no Zapier, no Make, no MCP server. It interacts with apps the same way a human would: opening them and clicking around.

## Pricing, limits & plan gates

| Feature | Trial (Free) | Starter/Plus ($20/mo/computer) | Pro ($500/mo/computer) | Enterprise (custom) |
|---|---|---|---|---|
| Credits | 7-day trial | 10,000 (reloadable) | Unlimited | Unlimited + managed scaling |
| Agents | 1 | 1 developer agent | 1 free deployment agent | Custom |
| Platform | macOS | macOS, Windows | + Virtual machines | All platforms, VMs, private cloud |
| Workflow editor | Limited | Developer Mode | Full | Advanced + custom extensions |
| Workflow sharing | None | Community Gallery | Private + Team | Team + Audit Logs |
| Simulang | Limited | Basic | Full support | Custom modules |
| Data retention | Standard | Standard | Zero retention from LLM providers | Configurable |
| Support | None | Community | Priority engineering | Dedicated account + engineering |
| Referral bonus | None | $10/signup | $100/signup | Co-marketing |
| Compliance | None | None | None | SOC2, HIPAA, SSO, RBAC |

**Plan selection guidance**:
- Trial is a 7-day test drive — limited features
- Starter ($20/mo) is the sweet spot for solopreneurs — enough credits for daily personal automation
- Pro ($500/mo) is for businesses running 24/7 workflows with team sharing and zero data retention
- Enterprise for compliance-heavy orgs (SOC2, HIPAA, SSO)

## Simulang API reference

Simulang is a JavaScript-based action framework for desktop automation. All actions are called as functions with named parameters.

<!-- Source: https://docs.simular.ai/simular-pro/simulang -->

### General actions

```javascript
// Execute a natural language task with step limit
Act({task: "Search for 'AI tools' on Google", maxSteps: 100})
```

### Application control

```javascript
// Open app or URL
Open({app: "Google Chrome", url: "https://example.com", waitForLoadComplete: true, waitTime: 0})
```

### Keyboard

```javascript
// Type text (withReturn sends Enter after)
Type({text: "Hello world", withReturn: false, waitTime: 0})

// Keyboard shortcut
Shortcut({key: "c", cmd: true})  // Cmd+C
```

### Mouse

```javascript
// Click an element — modes: default (text), "textAndScreenshot", "vision"
Click({
  at: "Submit button",
  mode: "default",          // or "vision" for visual targeting
  clickType: "left",        // "left", "right", "double"
  spatialRelation: "below", // closest, furthest, above, right, below, left, contains, containedIn, sameRow, sameColumn
  anchorConcept: "Contact Form",
  waitForLoadComplete: true
})

// Move cursor without clicking
Move({to: "Search box"})

// Drag element
Drag({to: "Trash folder", destinationApp: "Finder"})

// Scroll
Scroll({direction: "down", distance: 200})
```

### Perception & state

```javascript
// Check if a condition is true on screen (slower, more flexible)
let ready = stateSatisfies({condition: "The login form is visible"})

// Check if elements exist by text (faster)
let exists = ConceptsExist({concepts: ["Submit", "Cancel"]})

// Get structured page content (returns JSON + screenshot)
let content = pageContent({})

// Wait for elements to appear (10s timeout)
WaitForConcepts({concepts: ["Dashboard loaded"]})
```

### Text generation & vision

```javascript
// Query vision-language model about current screen
let answer = ask({prompt: "What is the total in the invoice?", context: [pageContent({})]})
```

### User interaction

```javascript
// Send message to user (optionally wait for confirmation or text input)
let confirmed = Respond({message: "About to send 50 emails. Proceed?", requireConfirm: true})
let input = Respond({message: "Enter your API key:", requireTextInput: true})
```

### File & clipboard

```javascript
CopyToClipboard({text: "Hello"})
let clip = GetFromClipboard({})
let data = ReadFile({path: "/path/to/file.txt"})
WriteToFile({text: "output", path: "result.txt", overwrite: false})
SaveScreenshot({fileName: "capture.png", directory: "/Desktop"})
```

### Google Sheets

```javascript
let value = GetGoogleSheetCellValue({cell: "A1"})
SetGoogleSheetCellValue({cell: "B2", value: "Done"})
let columns = GetGoogleSheetColumns({headers: ["Name", "Email", "Status"]})
```

### Advanced GUI

```javascript
// Query elements with spatial filtering
let elements = GetElements({
  elementRoles: ["button"],
  elementOverallDescription: "Submit",
  threshold: 0.75,
  spatialRelation: "below",
  anchorOverallDescription: "Form",
  returnType: "elementArray"  // "string", "stringArray", "strToElemDict"
})

// Get element attribute
let val = GetAttributeOfElement({
  elementRole: "textField",
  elementOverallDescription: "Email input",
  attribute: "value"  // "role", "description", "title", "value"
})

// Extract formatted content
let html = GetContent({inConcept: "Price table", format: "json"})  // "flat", "json", "xml", "xmlSlim"

// Table operations
let cells = GetCells({row: rowElement, column: colElement})
let cellVal = GetCellValue({cell: cellElement})
let label = GetCellLabel({cell: cellElement})  // Excel-style "B3"
let col = GetTableColumn({header: "Email"})
```

### Wait

```javascript
Wait({waitTime: 2, unit: "s"})  // "s" or "ms"
```

## Simular Browser Python API

```bash
pip install pysimular
```

```python
from pysimular import SimularBrowser

browser = SimularBrowser(
    "<path-to-simular-browser>/SimularBrowser.app"
)
response = browser.run("Search for AI tools on Google and return the top 3 results")
print(f"Response: {response}")
```

Requires macOS 15.0+ and Accessibility permissions enabled. SimularBrowser.app must be installed from simular.ai.

## Agent-S open-source framework

```bash
pip install gui-agents
brew install tesseract  # required dependency
```

Agent-S is the research framework behind Simular. It supports Linux, macOS, and Windows. Requires your own LLM API key (recommended: OpenAI gpt-5 + UI-TARS-1.5-7B grounding model).

Configuration:
```bash
--ground_provider <provider>
--ground_url <endpoint>
--ground_model <model>
--grounding_width <screen_width>
--grounding_height <screen_height>
```

**Agent-S is for researchers and developers who want to self-host.** For production use, Sai (cloud) or Simular Pro (local) are the supported products.

## Integrations

| Integration | How it works | Notes |
|---|---|---|
| Gmail | Sai opens Gmail in browser, reads/sends emails | GUI-based, not API |
| Slack | Sai opens Slack, reads/sends messages | GUI-based |
| Notion | Sai opens Notion, creates/edits pages | GUI-based |
| LinkedIn | Sai navigates LinkedIn, views profiles, sends messages | Careful with rate limits and detection |
| Google Calendar | Sai opens Calendar, creates/edits events | GUI-based |
| Google Sheets | Built-in Simulang actions for cell read/write | Direct integration (best supported) |
| GitHub | Sai opens GitHub, creates issues, reviews PRs | GUI-based |
| Figma | Sai opens Figma, inspects designs | GUI-based |
| Any web app | Sai can navigate any website | Via Open() + Click/Type |
| Any desktop app | Simular Pro can control any macOS app | Via Simulang |

**Key pattern**: Simular doesn't "integrate" with apps via APIs — it opens them and interacts via GUI. Google Sheets is the only exception with native Simulang actions. This means it can automate ANY app but is slower and more fragile than API-based automation.

## Quick-start recipes

### Recipe 1: Automated email labeling

```javascript
// Open Gmail, find emails matching criteria, apply label
Open({url: "https://mail.google.com"})
WaitForConcepts({concepts: ["Inbox"]})
Type({text: "from:newsletter@example.com", withReturn: true})
Wait({waitTime: 2, unit: "s"})

// Select all matching emails
Click({at: "Select all checkbox", spatialRelation: "above", anchorConcept: "emails list"})

// Apply label
Click({at: "Label icon"})
Click({at: "Newsletters"})

Respond({message: "Labeled all matching emails as Newsletters"})
```

### Recipe 2: Lead research from Google Sheets

```javascript
// Read prospect names from Sheet, research on LinkedIn
let columns = GetGoogleSheetColumns({headers: ["Name", "Company", "LinkedIn URL"]})
let name = GetGoogleSheetCellValue({cell: "A2"})
let company = GetGoogleSheetCellValue({cell: "B2"})

// Open LinkedIn and search
Open({url: "https://linkedin.com"})
WaitForConcepts({concepts: ["Search"]})
Click({at: "Search box"})
Type({text: name + " " + company, withReturn: true})
Wait({waitTime: 3, unit: "s"})

// Extract profile info
let profileInfo = ask({prompt: "What is this person's current title and company?", context: [pageContent({})]})

// Write back to sheet
SetGoogleSheetCellValue({cell: "D2", value: profileInfo})
Respond({message: "Researched " + name + ". Found: " + profileInfo})
```

### Recipe 3: Daily standup report compilation

```python
# Using Simular Browser Python API
from pysimular import SimularBrowser

browser = SimularBrowser("/Applications/SimularBrowser.app")

# Gather updates from multiple sources
slack_updates = browser.run(
    "Go to Slack, find the #engineering channel, "
    "and summarize the last 24 hours of messages"
)

github_prs = browser.run(
    "Go to GitHub, check our org's open PRs, "
    "and list any merged in the last 24 hours"
)

print(f"Slack summary: {slack_updates}")
print(f"GitHub PRs: {github_prs}")
```

## Benchmarks

| Benchmark | Score | Note |
|---|---|---|
| WebVoyager (browser use) | 90.1% | Industry-leading |
| OSWorld (computer use) | 72.6% | Surpasses human-level |
| AndroidWorld (smartphone) | 71.6% | Cross-platform |

These are Agent-S3 research benchmarks. Production reliability in Sai/Simular Pro varies by task complexity.
