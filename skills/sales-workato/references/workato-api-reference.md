<!-- Source: https://docs.workato.com/workato-api.html, https://docs.workato.com/workato-api/resources.html -->

# Workato Developer API Reference

## Authentication

Bearer token authentication via API clients. Include `Authorization: Bearer <api_token>` header in all requests. Legacy API keys deprecated as of July 14, 2025.

**Requirements**: Root email, Environment admin role, or custom role with API platform privilege to generate tokens.

**Optional header**: `x-correlation-id` for request tracking.

## Base URLs

| Data Center | Base URL |
|---|---|
| US | `https://www.workato.com/api/` |
| EU | `https://app.eu.workato.com/api/` |
| JP | `https://app.jp.workato.com/api/` |
| SG | `https://app.sg.workato.com/api/` |
| AU | `https://app.au.workato.com/api/` |
| IL | `https://app.il.workato.com/api/` |
| CN | `https://app.workatoapp.cn/api/` |
| Developer Sandbox | `https://app.trial.workato.com/api/` |

## HTTP Response Codes

| Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Server Error |

## API Resources

### Agent Studio

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/agentic/genies` | List genies |
| POST | `/api/agentic/genies` | Create a genie |
| PUT | `/api/agentic/genies/:id` | Update a genie |
| GET | `/api/agentic/genies/:id` | Get genie by ID |
| DELETE | `/api/agentic/genies/:id` | Delete a genie |
| POST | `/api/agentic/genies/:id/start` | Start a genie |
| POST | `/api/agentic/genies/:id/stop` | Stop a genie |
| POST | `/api/agentic/genies/:id/assign_skills` | Assign skills to genie |
| POST | `/api/agentic/genies/:id/remove_skills` | Remove skills from genie |
| POST | `/api/agentic/genies/:id/assign_knowledge_bases` | Assign knowledge bases |
| POST | `/api/agentic/genies/:id/remove_knowledge_bases` | Remove knowledge bases |
| POST | `/api/agentic/genies/:id/assign_user_groups` | Assign user group access |
| POST | `/api/agentic/genies/:id/remove_user_groups` | Remove user group access |
| GET | `/api/agentic/knowledge_bases` | List knowledge bases |
| POST | `/api/agentic/knowledge_bases` | Create knowledge base |
| GET | `/api/agentic/knowledge_bases/:id` | Get knowledge base by ID |
| PUT | `/api/agentic/knowledge_bases/:id` | Update knowledge base |
| DELETE | `/api/agentic/knowledge_bases/:id` | Delete knowledge base |
| GET | `/api/agentic/knowledge_bases/:id/data_sources` | List data sources for KB |
| GET | `/api/agentic/knowledge_bases/:id/recipes` | List recipes for KB |
| GET | `/api/agentic/skills` | List skills |
| POST | `/api/agentic/skills` | Create a skill |
| GET | `/api/agentic/skills/:id` | Get skill by ID |

### MCP Servers

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/mcp/mcp_servers` | List MCP servers |
| POST | `/api/mcp/mcp_servers` | Create MCP server |
| GET | `/api/mcp/mcp_servers/:handle` | Get MCP server details |
| PUT | `/api/mcp/mcp_servers/:handle` | Update MCP server |
| DELETE | `/api/mcp/mcp_servers/:handle` | Delete MCP server |
| POST | `/api/mcp/mcp_servers/:handle/token_renew` | Renew auth token |
| POST | `/api/mcp/mcp_servers/:handle/assign_tools` | Assign tools |
| POST | `/api/mcp/mcp_servers/:handle/assign_user_groups` | Assign user groups |
| POST | `/api/mcp/mcp_servers/:handle/remove_user_groups` | Remove user groups |
| PUT | `/api/mcp/mcp_servers/:handle/update_folder` | Move to folder |
| GET | `/api/mcp/mcp_servers/:handle/server_policies` | Get server policies |
| PUT | `/api/mcp/mcp_servers/:handle/server_policies` | Update server policies |
| GET | `/api/mcp/mcp_servers/:handle/tools` | List tools |
| PUT | `/api/mcp/mcp_servers/:handle/tools/:id` | Update tool |
| DELETE | `/api/mcp/mcp_servers/:handle/tools/:id` | Delete tool |
| GET | `/api/mcp/user_groups` | List IdP user groups |

### Recipes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/recipes/:id` | Get recipe details |
| POST | `/api/recipes` | Create recipe |
| PUT | `/api/recipes/:id` | Update recipe |
| GET | `/api/recipes` | List recipes |
| PUT | `/api/recipes/:id/start` | Start recipe |
| PUT | `/api/recipes/:id/stop` | Stop recipe |
| DELETE | `/api/recipes/:id` | Delete recipe |
| POST | `/api/recipes/:recipe_id/reset_trigger` | Reset trigger |
| PUT | `/api/recipes/:recipe_id/connect` | Update connection |
| POST | `/api/recipes/:recipe_id/poll_now` | Activate polling trigger |
| GET | `/api/recipes/:recipe_id/versions` | Get versions |
| GET | `/api/recipes/:recipe_id/versions/:id` | Get version details |
| PATCH | `/api/recipes/:recipe_id/versions/:id` | Update version comment |
| GET | `/api/recipes/:recipe_id/health` | Get optimization report |
| POST | `/api/recipes/:recipe_id/health` | Queue performance scan |

### Jobs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/recipes/:recipe_id/jobs` | List jobs for recipe |
| GET | `/api/recipes/:recipe_id/jobs/:job_handle` | Get job metadata |
| POST | `/api/job/resume` | Resume job (via resume_token) |
| POST | `/api/recipes/:recipe_id/repeat_jobs` | Repeat specified jobs |

### Connections

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/connections` | List all connections |
| POST | `/api/connections` | Create connection |
| PUT | `/api/connections/:id` | Update connection |
| POST | `/api/connections/:id/disconnect` | Disconnect |
| DELETE | `/api/connections/:id` | Delete connection |

### Connectors

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/integrations` | List connectors with metadata |
| GET | `/api/integrations/all` | List all connectors (paginated) |

### Custom Connectors

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/custom_connectors` | Get custom connectors |
| POST | `/api/sdk/generate_schema/json` | Generate schema from JSON |
| POST | `/api/sdk/generate_schema/csv` | Generate schema from CSV |

### Data Tables

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/data_tables` | List data tables |
| GET | `/api/data_tables/:id` | Get table by ID |
| POST | `/api/data_tables` | Create table |
| PUT | `/api/data_tables/:id` | Update table |
| DELETE | `/api/data_tables/:id` | Delete table |
| POST | `/api/data_tables/:id/truncate` | Truncate table |
| POST | `/api/v1/tables/:id/query` | Query records |
| POST | `/api/v1/tables/:id/records` | Create record |
| PUT | `/api/v1/tables/:id/records/:rid` | Update record |
| DELETE | `/api/v1/tables/:id/records/:rid` | Delete record |
| POST | `/api/v1/tables/:id/fields/:fid/file` | Upload file |
| GET | `/api/v1/tables/:id/records/:rid/fields/:fid/file` | Download file |

### Event Streams

| Method | Endpoint | Description |
|---|---|---|
| POST | `event-streams.workato.com/api/v1/topics/:id/consume` | Consume messages |
| POST | `event-streams.workato.com/api/v1/topics/:id/publish` | Publish message |
| POST | `event-streams.workato.com/api/v1/batch/topics/:id/publish` | Batch publish |
| GET | `/api/event_streams/topics` | List topics |
| POST | `/api/event_streams/topics` | Create topic |
| GET | `/api/event_streams/topics/:id` | Get topic by ID |
| PUT | `/api/event_streams/topics/:id` | Update topic |
| PUT | `/api/event_streams/topics/:id/purge` | Purge topic |
| DELETE | `/api/event_streams/topics/:id` | Delete topic |

### API Platform

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/api_collections` | List API collections |
| POST | `/api/api_collections` | Create collection |
| GET | `/api/api_endpoints` | List endpoints in collection |
| PUT | `/api/api_endpoints/:id/enable` | Enable endpoint |
| PUT | `/api/api_endpoints/:id/disable` | Disable endpoint |
| GET | `/api/api_clients` | List API clients |
| POST | `/api/api_clients` | Create API client |
| GET | `/api/v2/api_clients/:id` | Get client by ID |
| PUT | `/api/v2/api_clients/:id` | Update client |
| DELETE | `/api/v2/api_clients/:id` | Delete client |
| GET | `/api/v2/api_clients/:id/api_keys` | List API keys |
| POST | `/api/v2/api_clients/:id/api_keys` | Create API key |
| PUT | `/api/v2/api_clients/:id/api_keys/:kid/enable` | Enable key |
| PUT | `/api/v2/api_clients/:id/api_keys/:kid/disable` | Disable key |
| PUT | `/api/v2/api_clients/:id/api_keys/:kid/refresh_secret` | Refresh secret |
| DELETE | `/api/v2/api_clients/:id/api_keys/:kid` | Delete key |
| GET | `/api/v2/api_portals` | List API portals |

### Projects & Deployment (RLCM)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | List projects |
| POST | `/api/folders` | Create project/folder |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| POST | `/api/projects/:id/build` | Build project |
| GET | `/api/project_builds/:id` | Get build status |
| POST | `/api/project_builds/:id/deploy` | Deploy build |
| POST | `/api/projects/:id/deploy` | Build + deploy |
| GET | `/api/deployments/:id` | Get deployment |
| GET | `/api/deployments` | List deployments |
| POST | `/api/deployments/:id/assign_reviewers` | Assign reviewers |
| POST | `/api/deployments/:id/submit_for_review` | Submit for review |
| POST | `/api/deployments/:id/approve` | Approve |
| POST | `/api/deployments/:id/reject` | Reject |
| POST | `/api/deployments/:id/deploy` | Deploy approved |

### Recipe Lifecycle Management

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/export_manifests/folder_assets` | View folder assets |
| POST | `/api/export_manifests` | Create export manifest |
| PUT | `/api/export_manifests/:id` | Update manifest |
| GET | `/api/export_manifests/:id` | View manifest |
| DELETE | `/api/export_manifests/:id` | Delete manifest |
| POST | `/api/packages/export/:manifest_id` | Export package |
| POST | `/api/packages/import/:folder_id` | Import package |
| GET | `/api/packages/:id` | Get package |
| GET | `/api/packages/:id/download` | Download package |

### Workspace & IAM

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users/me` | Get workspace details |
| GET | `/api/members` | List collaborators |
| POST | `/api/member_invitations` | Invite collaborator |
| PUT | `/api/members/:id` | Update roles |
| DELETE | `/api/members/:id` | Remove collaborator |
| GET | `/api/iam/users` | List IAM users |
| POST | `/api/iam/users` | Create users |
| PUT | `/api/iam/users/:id` | Update user |
| DELETE | `/api/iam/users/:id` | Delete user |
| GET | `/api/iam/user_groups` | List user groups |
| POST | `/api/iam/user_groups` | Create user group |

### Test Automation

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/test_cases/run_requests` | Run test cases |
| GET | `/api/test_cases/run_requests/:id` | Get test run status |
| GET | `/api/recipes/:recipe_id/test_cases` | Get test cases |

### Environment & Governance

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/properties` | List environment properties |
| POST | `/api/properties` | Upsert properties |
| POST | `/api/secrets_management/clear_cache` | Clear secrets cache |
| GET | `/api/activity_logs` | Get audit logs |
| GET | `/api/tags` | List tags |
| POST | `/api/tags` | Create tag |
| PUT | `/api/tags/:handle` | Update tag |
| DELETE | `/api/tags/:handle` | Delete tag |
| POST | `/api/tags_assignments` | Apply/remove tags |
