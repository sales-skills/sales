<!-- Source: https://docs.snaplogic.com/public-apis/public-apis-about.html -->
<!-- Note: Detailed per-endpoint specs are spread across multiple JS-rendered pages. This reference captures the API structure and categories from the documentation navigation. For full endpoint details, consult docs.snaplogic.com directly. -->

# SnapLogic Public APIs Reference

## Authentication

SnapLogic Platform authenticates API calls with:
- **Basic Authentication**: Username + password or API token over HTTPS
- **JWT (JSON Web Token)**: Recommended for production. Supports Okta and Microsoft Entra ID as identity providers.

All API calls require HTTPS.

## Base URL

Org-specific: `https://{pod}.snaplogic.com/api/1/rest/...`

Pod varies by region/instance (e.g., `elastic.snaplogic.com`).

## API Categories

### Activity APIs
- Retrieve activities in an Org/Environment
- Activity metadata reference

### API Management APIs (APIM 3.0)
- Create an API version from a project
- Delete API / Delete API version
- Publish / Unpublish / Deprecate / Retire API versions
- Migrate and Import/Export API versions
- Policy management (Export/Import)
- User approval workflows
- Response cache invalidation
- API Management logs retrieval
- Git operations (branch, checkout, pull, tag management)

### Asset APIs
- Project/space access control
- User privileges and ownership management
- Asset metadata operations

### Asset Catalog APIs
- Custom metadata operations
- Lineage retrieval
- Asset listings and search

### Log APIs
- Task log retrieval
- Execution history

### Runtime APIs
- Pipeline execution information
- Runtime metrics and performance data

### Pipeline APIs
- Pipeline quality assessment
- Pipeline metadata and configuration

### Task APIs
- Task enablement / disablement
- Snaplex assignment for tasks
- Task scheduling and management

### Project APIs
- Git branch creation
- Project creation from Git files
- Git checkout operations
- Change discarding
- Git pull operations
- Git tagging
- Repository status retrieval
- Asset copying between projects
- Project migration across environments
- Migration status tracking
- Project export/import capabilities
- Individual asset export/import
- Git tracking removal

### Snaplex APIs
- Node management (add/remove/restart)
- Snaplex configuration
- Version management
- Health and status monitoring

### Snap Statistics API
- Snap execution statistics retrieval
- Performance metrics per Snap

### User and Group APIs
- Account management (create/update/delete users)
- Group management (create/update/delete groups)
- Role assignment and permissions

## Rate Limits

Rate limits are not publicly documented with specific numbers. SnapLogic applies per-Org rate limiting on API calls. For high-volume API usage, contact SnapLogic Support to discuss limit adjustments.

## Response Format

All APIs return JSON responses over HTTPS.

## SDK and Tools

- **SnapLogic Public APIs**: REST APIs for programmatic management of the platform
- **Snap Developer Kit**: Java-based SDK for building custom Snaps (connector development)
- **GitHub**: https://github.com/SnapLogic — includes developer docs, demo Snap Packs, agent examples
- **Pipeline Linker**: Chrome extension for copying pipeline links (GitHub: SnapLogic/pipeline-linker)
