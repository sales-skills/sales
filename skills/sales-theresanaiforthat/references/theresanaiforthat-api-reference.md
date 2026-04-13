<!-- Source: https://github.com/sisbell/chatgpt-plugin-store/blob/main/specs/theresanaiforthat.com.json -->
<!-- OpenAPI spec retrieved from ChatGPT plugin store archive -->

# There's an AI for That API Reference

## OpenAPI Specification

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "There's An AI For That",
    "version": "v1.0"
  },
  "servers": [
    {
      "url": "https://theresanaiforthat.com"
    }
  ],
  "paths": {
    "/api/search/": {
      "get": {
        "operationId": "searchQuery",
        "summary": "Search API",
        "parameters": [
          {
            "name": "q",
            "in": "query",
            "description": "Search query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "task": {
                        "type": "string"
                      },
                      "url": {
                        "type": "string"
                      },
                      "use_case": {
                        "type": "string"
                      }
                    }
                  },
                  "example": [
                    {
                      "name": "Example Name",
                      "task": "Example Task",
                      "url": "https://theresanaiforthat.com/ai/example/?ref=search&term=example&from=chatgpt",
                      "use_case": "Example Use Case"
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## Authentication

- **Type**: Service HTTP with bearer token
- **User authentication required**: No
- **OpenAPI spec URL**: https://theresanaiforthat.com/openapi.json

## Plugin manifest

- **Name (human)**: There's An AI For That
- **Name (model)**: theresanaiforthat
- **Description**: Find the right AI tools for any use case, from the world's largest database of AI tools.
- **Contact**: plugin@theresanaiforthat.com
- **Legal**: https://theresanaiforthat.com/terms/

## Endpoint details

### GET /api/search/

Search TAAFT's database of 42,000+ AI tools by task/query.

**Parameters:**
| Name | In | Type | Required | Description |
|---|---|---|---|---|
| q | query | string | Yes | Search query (task, problem, or use case) |

**Response (200):**
Array of matching AI tools:

| Field | Type | Description |
|---|---|---|
| name | string | Tool name |
| task | string | Task category the tool addresses |
| url | string | TAAFT tool page URL (includes referral tracking params) |
| use_case | string | Specific use case description |

**Notes:**
- Results are returned as a JSON array — the ChatGPT plugin reorders by relevance
- URLs include tracking parameters (`ref=search`, `term={query}`, `from=chatgpt`)
- The API powers the ChatGPT plugin for AI tool discovery
- No rate limit documentation is publicly available
