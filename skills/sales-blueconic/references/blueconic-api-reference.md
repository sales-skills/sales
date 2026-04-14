<!-- Source: https://support.blueconic.com/en/collections/609503-developer-tools -->
<!-- Source: https://rest.apidoc.blueconic.com/ (OpenAPI portal — JS-rendered, partial) -->
<!-- Source: https://support.blueconic.com/en/articles/248051-javascript-front-end-api -->
<!-- Source: https://support.blueconic.com/en/articles/248060-the-blueconic-event-api -->
<!-- Source: https://support.blueconic.com/en/articles/248008-overview-blueconic-rest-api -->
<!-- Source: https://support.blueconic.com/en/articles/248009-using-the-blueconic-rest-api-v2 -->
<!-- Source: https://support.blueconic.com/en/articles/415706-blueconic-model-context-protocol-mcp -->

# BlueConic API Reference

## REST API v2

- **Spec URL**: https://rest.apidoc.blueconic.com (OpenAPI, version R100)
- **Base URL**: `https://{tenant}.blueconic.net/`
- **Auth**: OAuth 2.0 (client credentials flow or authorization code flow)
- **Format**: JSON only (XML not supported)
- **Encoding**: gzip by default, output minified. Add `?prettyPrint=true` for readable output.
- **Resources**: Visitor profiles, segments, interactions, audit events

### OAuth 2.0 Setup

1. Log into your BlueConic tenant
2. Navigate to Settings > Access management > Applications
3. Create an application with client credentials enabled
4. Grant desired read/write scopes
5. Copy the Client ID and Client Secret
6. Activate the application and save

### Supported OAuth 2.0 Flows

1. **Client credentials flow** — server-to-server, no user interaction
2. **Authorization code flow** — user-delegated access

> **Note**: The full endpoint reference (paths, request/response schemas, parameters) is hosted at the OpenAPI portal at `https://rest.apidoc.blueconic.com`. The portal is JavaScript-rendered and could not be fully captured here. Visit the portal directly for the complete API specification.

---

## JavaScript Front-End API

Main entry point: `window.blueConicClient` — injected globally when the BlueConic script loads. The `onBlueConicLoaded` event fires upon initialization.

### Initialization Pattern

```javascript
if (typeof window.blueConicClient !== 'undefined' &&
    typeof window.blueConicClient.event !== 'undefined' &&
    typeof window.blueConicClient.event.subscribe !== 'undefined') {
    // BlueConic loaded; proceed with API calls
} else {
    window.addEventListener('onBlueConicLoaded', function() {
        // BlueConic now available
    }, false);
}
```

### BlueConicClient Methods

#### Event & Interaction Management

| Method | Description | Returns |
|---|---|---|
| `createEvent(eventtype, interactionId, caller, onSuccess)` | Triggers events: CLICK, VIEW, CONVERSION, or custom types | Nothing |
| `doNotShowAgain(dialogueId)` | Marks a dialogue and variants to not display again | Nothing |
| `event.publish(eventName, eventContext)` | Publishes listening events; does not trigger dialogues | Nothing |
| `event.subscribe(eventName, handlerObject, handlerFunction)` | Subscribes to published events; fires immediately if already published | Nothing |

#### Profile Access

| Method | Description | Returns |
|---|---|---|
| `profile.getProfile()` | Returns current visitor's profile object | Profile |
| `profile.updateProfile(caller, onSuccess)` | Persists profile changes to server | Nothing |
| `profile.createProfile(caller, onSuccess)` | Creates new profile; abandons current one | Nothing |
| `profile.deleteProfile(caller, onSuccess)` | Deletes current profile; new one created on next page view | Nothing |

#### Data Retrieval

| Method | Description | Returns |
|---|---|---|
| `getProfileProperties(caller, onSuccess)` | Returns all profile property IDs, labels, and permission levels | resultMap |
| `getSegments()` | Returns array of Segment objects (requires "Expose segments" enabled) | Segment[] |
| `getInteractions()` | Returns dialogues/variants triggered for current page | Interaction[] |
| `getInteractionNamesById(variantId)` | Returns dialogue/variant info for given variant | Object |

#### Utilities

| Method | Description | Returns |
|---|---|---|
| `getBaseURL(interactionTypeId)` | Base URL for static resources | String |
| `getChannelId()` | Current channel ID | String |
| `getCurrentDate()` | Current date (simulated date in Journey Simulator) | Date |
| `getHostname()` | BlueConic hostname | String |
| `getIPAddress()` | Visitor IP address | String |
| `isInEditMode()` | True if edit mode is active | Boolean |
| `isInSimulatorMode()` | True if simulator is active | Boolean |
| `handlePageView()` | Re-evaluate connections/dialogues for current URL. Use after hash changes or SPA route changes. | Nothing |

#### JavaScript/CSS Loading

| Method | Description |
|---|---|
| `util.loadScript(library, caller, onSuccess)` | Loads JS library; absolute URLs only |
| `util.loadCSS(stylesheet)` | Loads CSS file; no callback |
| `util.log(message)` | Console log with "[BC]" prefix |

#### Email & Recommendations

| Method | Description |
|---|---|
| `mail.sendEmail(interactionId, onlyOnce)` | Sends email based on interaction parameters |
| `recommendation.getRecommendations(params, callback)` | Product recommendations with algorithms: RECENT_VIEW, RECENT_ENTRYPAGE, RECENT_CTR, SAME_CATEGORY, LOOK_ALIKE, RECENCY, INTEREST, COLLABORATIVE_FILTERING, RECENTLY_VIEWED |

### Profile Methods

Changes require `profile.updateProfile()` to persist.

| Method | Description | Returns |
|---|---|---|
| `getValue(property)` | First value (string) or null. Properties must be preloaded. | String/null |
| `getValues(property)` | All values as array | String[] |
| `setValue(property, value)` | Replace all values for property | Nothing |
| `setValues(property, values)` | Replace all values with array | Nothing |
| `addValue(property, value)` | Append value to property | Nothing |
| `incrementValue(property, value)` | Increment numeric property | Nothing |
| `loadValues(properties, caller, onSuccess)` | Async load specific properties | Nothing |
| `getId()` | BlueConic Profile ID | String |
| `getPropertyNames()` | Array of loaded property names | String[] |

#### Permission & Consent

| Method | Description |
|---|---|
| `permission.getLevel()` | Returns: DO_NOT_TRACK, ANONYMOUS, or PERSONAL |
| `permission.setLevel(level)` | Sets permission level |
| `permission.optin.addPlugin(plugin)` | Add plugin to opt-in list |
| `permission.optin.addProfileProperty(property)` | Add property to opt-in tracking |
| `permission.optout.addPlugin(plugin)` | Add plugin to opt-out list |
| `getPrivacyLegislation()` | Privacy legislation based on IP (e.g., 'GDPR') |
| `setPrivacyLegislation(legislation)` | Set profile's privacy legislation |
| `getConsentedObjectives()` | Array of consented objective IDs |
| `getRefusedObjectives()` | Array of refused objective IDs |
| `addConsentedObjective(objectiveId)` | Add to consented list |
| `addRefusedObjective(objectiveId)` | Add to refused list |

#### Timeline

| Method | Description |
|---|---|
| `timeline.createEvent(eventType, date, attributes, caller, onSuccess)` | Create timeline event (auto-generated UUID) |
| `timeline.createEventById(eventId, eventType, date, attributes, caller, onSuccess)` | Create timeline event with explicit ID |

### InteractionContext Methods

Context injected into `init(blueConicClient, interactionContext)`.

| Method | Description | Returns |
|---|---|---|
| `getBaseURL()` | Base URL for interaction type resources | String |
| `getConnection(id)` | Connection object linked as parameter | Connection |
| `getDOMElement()` | DOM Element for interaction position | Element/null |
| `getInteractionId()` | Interaction ID (needed for event triggers) | String |
| `getLocale()` | Resolved locale | String |
| `getName()` | Interaction name | String |
| `getParameters()` | Parameters as object with value arrays | Object |
| `getPosition()` | Interaction position | String |
| `getProfile()` | Visitor Profile object | Profile |
| `getType()` | "LISTENER", "GLOBALLISTENER", or "ACTION" | String |

### InteractionType Extension Pattern

```javascript
var InteractionTypeImpl = InteractionType.extend({
    getPreloadProperties: function() {
        return ['email', 'first_name']; // Preload in single HTTP call
    },
    init: function(blueConicClient, interactionContext) {
        this.bc = blueConicClient;
        this.ctx = interactionContext;
    },
    getContent: function() {
        return '<div id="my-interaction"></div>'; // Sync only, no external libs
    },
    onLoad: function() {
        // Main business logic — access APIs here
    },
    onUpdate: function() {
        // Called in Simulator when editor changes parameters
    }
});
```

### Standard BlueConic Events

- `onBeforePreListeners`
- `onReady`
- `PAGEVIEW`
- `onBeforeInteractions`
- `onEventReady`

---

## Event API

Custom events for tracking interactions beyond standard HTML events.

### Publishing events
```javascript
// Publish (for listeners, does NOT trigger dialogues)
window.blueConicClient.event.publish('play_button_clicked', ['my Homevideo']);

// Create trackable event (CAN trigger dialogues)
blueConicClient.createEvent('myCustomEvent', this, function(result) {
    console.log('event registered');
});
```

### Important
Events created with `createEvent()` must be registered in the BlueConic UI via an **Event Trigger Listener** before they can trigger dialogues. Type the exact event name in the "define event" input box.

---

## MCP Server (Model Context Protocol)

**Package**: `@blueconic/blueconic-mcp`

### Configuration

**Local clients** (Cursor, VS Code Copilot, Claude Desktop):
```json
{
  "mcpServers": {
    "blueconic": {
      "command": "npx",
      "args": ["@blueconic/blueconic-mcp"],
      "env": {
        "BLUECONIC_TENANT": "your-tenant.blueconic.net",
        "BLUECONIC_CLIENT_ID": "your-client-id",
        "BLUECONIC_CLIENT_SECRET": "your-client-secret"
      }
    }
  }
}
```

**Public HTTP endpoint**: `https://{tenant}.blueconic.net/mcp`

**n8n / alternative header**: `"X-BlueConic-Client-ID-Secret": "<client-ID>##<client-secret>"`

### Capabilities
- Read-only access to tenant's OpenAPI spec
- OAuth2 token-secured
- Natural language queries: "Get all segments", "Retrieve 1000 profiles from segment X"

---

## Mobile SDKs

| Platform | Docs | Custom Plugins |
|---|---|---|
| Android | [SDK docs](https://support.blueconic.com/en/articles/248014) | [Custom plugin](https://support.blueconic.com/en/articles/248019) |
| iOS | [SDK docs](https://support.blueconic.com/en/articles/248015) | [Custom plugin](https://support.blueconic.com/en/articles/248020) |
| React Native | [SDK docs](https://support.blueconic.com/en/articles/248017) | [Custom plugin](https://support.blueconic.com/en/articles/257415) |
| Flutter | [SDK docs](https://support.blueconic.com/en/articles/421790) | [Custom plugin](https://support.blueconic.com/en/articles/422209) |
| Roku (CTV) | [SDK docs](https://support.blueconic.com/en/articles/333943) | N/A |

---

## Python API (AI Workbench)

BlueConic provides a Python package for the AI Workbench environment.

- **Docs**: https://supportdocs.blueconic.com/python/
- **Package**: `blueconic` (PyPI)
- Used within BlueConic's Jupyter-based AI Workbench for custom ML models
