# Unbounce API Documentation

Source: https://developer.unbounce.com/

---

# Getting Started

Source: https://developer.unbounce.com/getting_started/

A new version of the Unbounce API (Beta) is now ready to be used! We are opening it up slowly but we would love to hear what you're ready to build and the plans that you have to better integrate Unbounce with other products.

---

# Authorization

There are two ways to authorize your application: using OAuth 2.0 tokens or an API key. Here's how to determine which option to use:

- If the request requires authorization for an individual's private data, let's say you want to build an application that will retrieve a user's Unbounce account information on their behalf, then the application must provide an OAuth 2.0 token.
- If the request doesn't require authorization from other users, let's say you only want to retrieve the data for a single account, then you only require an API key.

## API Keys

You can use HTTP Basic Auth to interact with our API via API keys. Use your Unbounce API Key as the username and nothing as the password.

```
curl -u API_KEY: -H "Accept: application/vnd.unbounce.api.v0.4+json" -X GET https://api.unbounce.com
```

All connections require encryption via SSL, so make sure you use the HTTPS protocol in your requests.

### Generate an API Key

Request API Access through the API Request form. Once you have access, you can create one or more API Keys within the app.

1. Log in to your Unbounce account and go to Manage Account
2. Click on API Access on the left sidebar menu
3. Create a new API Key
4. Test your new API Key by running:

```
curl -u API_KEY: -H "Accept: application/vnd.unbounce.api.v0.4+json" -X GET https://api.unbounce.com/accounts
```

Or alternatively, browse the API Console (https://developer.unbounce.com/console.html) and use your API Key as the username, leaving the password field blank.

### Permissions

API keys currently act like Unbounce account administrators, this means the API key allows the client application to view every resource that an administrator of your account can view:

- Accounts
- Sub Accounts or Clients
- Domains
- Page Groups
- Pages
- Leads
- Users

## OAuth

OAuth is a protocol that enables applications to act on behalf of their users. We use JSON Web Tokens (JWT) as the access tokens, which are valid only for a short time.

Once the access token expires, you can use a **refresh token** to request a new access token.

### Using OAuth

Once you have registered your OAuth Application and have received your Client ID and Client Secret:

1. Authorize your application:

```
https://api.unbounce.com/oauth/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=URL_ENCODED_CLIENT_REDIRECT_URI
```

2. The Unbounce API OAuth server will return a temporary authorization code to the callback URL you previously registered for your application. Keep note of this authorization code, as you'll be needing it in the coming steps.

3. Be sure that your application validates this authorization code to receive an access token. Send a POST request to:

```
https://api.unbounce.com/oauth/token
```

The request will need to contain the following parameters:

```
grant_type=authorization_code
client_id=CLIENT_ID
client_secret=CLIENT_SECRET
code=AUTHORIZATION_CODE
redirect_uri=CLIENT_REDIRECT_URI
```

The response will contain the **access token**, **expiration period** and a **refresh token**:

```json
{
  "access_token": "OAUTH_ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 600,
  "refresh_token": "OAUTH_REFRESH_TOKEN",
  "scope": "full",
  "created_at": 1646256888
}
```

**Note:** Currently only (default) **scope: "full"** is supported. Which provides access based on the user's credentials.

4. Now you can make requests to the server using your access token:

```
curl -X GET -H "Accept: application/vnd.unbounce.api.v0.4+json" -H "Authorization: Bearer OAUTH_ACCESS_TOKEN" https://api.unbounce.com/accounts
```

### Refreshing an OAuth Access Token

To obtain a new access token for the user, the application will need to use the refresh token. A new refresh token will also be issued at this time as well.

1. Send a POST request to:

```
https://api.unbounce.com/oauth/token
```

The request will need to contain the following parameters:

```
grant_type=refresh_token
client_id=CLIENT_ID
client_secret=CLIENT_SECRET
refresh_token=OAUTH_REFRESH_TOKEN
redirect_uri=CLIENT_REDIRECT_URI
```

The response will contain the **new access token**, **expiration period** and a **refresh token**:

```json
{
  "access_token": "OAUTH_ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 600,
  "refresh_token": "OAUTH_REFRESH_TOKEN",
  "scope": "full",
  "created_at": 1646256888
}
```

2. Now you can continue making requests to the server with the new access token:

```
curl -X GET -H "Accept: application/vnd.unbounce.api.v0.4+json" -H "Authorization: Bearer OAUTH_ACCESS_TOKEN" https://api.unbounce.com/accounts
```

### OAuth Permissions

OAuth tokens grant the same permissions that the user that is authenticating already has.

---

# Rate Limiting

To make the API fast for everybody, we have a rate limit of 500 requests per minute per user account and IP address. If you get a **status code 429** on your response, it means that you have exceeded this rate limit.

---

# Errors

Unbounce uses conventional HTTP response codes to indicate the success or failure of an API request.

## HTTP Response Codes

| Code | Status | Description |
|------|--------|-------------|
| 200 | OK | Successful request. |
| 400 | Bad Request | The request could not be understood, possible syntax malformation. |
| 401 | Unauthorized Request | The request requires user authentication. API Key or Access Token is missing. |
| 403 | Forbidden Access | The API Key is forbidden to access the resource, or the Access Token is bad or has expired. |
| 404 | Not Found | The server has not found anything matching the request-uri. |
| 409 | Version Conflict | The request could not be completed due to a conflict with the current state of the resource. |
| 429 | Too many requests | Too many request in a given amount of time. |
| 500 | Server Error | Something went wrong on Unbounce's end. |

---

# Versions

## 0.4

This is the latest version of our API. Optionally, you can pass in the explicit version of the API in the request header:

```
-H "Accept: application/vnd.unbounce.api.v0.4+json"
```

## 0.3

As of May 2018, the 0.3 version of our API is no longer accessible. If you had previously used this legacy version, you need to update your code to access the current version. Please find a reference of the changes below.

### Changes between 0.3 and 0.4

- Removed the endpoint to list all leads for a given sub-account (as of May 2018)
- Snake case property names: `{ "accountId" : 52 }` => `{ "account_id" : 52 }`
- Using string in favor of integer for ID fields: `{ "accountId" : 52 }` => `{ "account_id" : "52" }`
- page_uuid is renamed to page_id: `{ "page_uuid" : "abc-123" }` => `{ "page_id" : "abc-123" }`
- Omit optional properties instead of nullifying them: `{ "page_id" : "abc-123", "created_at" : null }` => `{ "page_id" : "abc-123" }`
- Replaced date format for consistency with query parameters: `{ "created_at" : "2015-12-16T00:34:47+00:00" }` => `{ "created_at" : "2015-12-16T00:34:47.000Z" }`
- Removed internal_page_id field from page tests
- Removed uuid field in sub_accounts
- Removed options from account and sub_account

---

# API Reference

Source: https://developer.unbounce.com/api_reference/

Base URL: `https://api.unbounce.com`

Date Format: RFC 5322, section 3.4.1, compliant date, formatted with: `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`

---

## Global API

Global API meta-information.

### GET /

Retrieve the global API meta-information.

**Response Body Schema:**

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Describes the main API entry points, supported formats and specification locations.",
  "type": "object",
  "additionalProperties": false,
  "required": ["documentation", "related", "specifications", "supported_formats"],
  "properties": {
    "documentation": {
      "type": "string",
      "format": "uri"
    },
    "related": {
      "type": "object",
      "additionalProperties": false,
      "required": ["accounts", "pages"],
      "properties": {
        "accounts": {
          "type": "string",
          "format": "uri"
        },
        "pages": {
          "type": "string",
          "format": "uri"
        }
      }
    },
    "specifications": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["href", "type", "version"],
        "properties": {
          "href": {
            "type": "string",
            "format": "uri"
          },
          "type": {
            "type": "string",
            "enum": ["raml"]
          },
          "version": {
            "type": "string"
          }
        }
      }
    },
    "supported_formats": {
      "type": "array",
      "item": {
        "type": "string"
      }
    }
  }
}
```

---

## Accounts

The accounts collection is the entry point to the rest of the Unbounce API. Your API key will give you access to all of the clients owned by your primary account.

### GET /accounts

Retrieve the accounts collection.

**Authentication Required**

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |

**Example Response:**

```json
{
    "accounts": [
        {
            "created_at": "2015-12-16T00:34:47.000Z",
            "id": "1456243",
            "name": "Corporate Cole's Account",
            "state": "active",
            "uuid": "f888109f-7851-4252-ad51-c432e0f37056",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_accounts__account_id_",
                "location": "https://api.unbounce.com/accounts/1456243",
                "related": {
                    "accounts": "https://api.unbounce.com/accounts",
                    "pages": "https://api.unbounce.com/accounts/1456243/pages",
                    "sub_accounts": "https://api.unbounce.com/accounts/1456243/sub_accounts"
                }
            }
        }
    ],
    "metadata": {
        "count": 1,
        "documentation": "https://developer.unbounce.com/api_reference/#id_accounts__account_id_",
        "location": "https://api.unbounce.com/accounts",
        "related": {
            "root": "https://api.unbounce.com/"
        }
    }
}
```

**Response Body Schema:**

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Collection of account entities.",
  "type": "object",
  "additionalProperties": false,
  "required": ["accounts", "metadata"],
  "properties": {
    "accounts": {
      "type": "array",
      "minItems": 0,
      "uniqueItems": true,
      "items": {
        "description": "Representation of a single account entity.",
        "type": "object",
        "additionalProperties": false,
        "required": ["created_at", "id", "metadata", "name", "state"],
        "properties": {
          "created_at": {
            "title": "Generic Date",
            "description": "RFC 5322, section 3.4.1, compliant date, formatted with: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
            "type": "string",
            "format": "date-time"
          },
          "id": { "type": "string" },
          "metadata": {
            "type": "object",
            "allOf": [
              {
                "title": "Entity Metadata",
                "type": "object",
                "required": ["location", "documentation"],
                "properties": {
                  "location": { "type": "string", "format": "uri" },
                  "documentation": { "type": "string", "format": "uri" },
                  "related": { "type": "object" }
                }
              },
              {
                "type": "object",
                "required": ["related"],
                "properties": {
                  "related": {
                    "type": "object",
                    "additionalProperties": false,
                    "required": ["pages", "accounts", "sub_accounts"],
                    "properties": {
                      "pages": { "type": "string", "format": "uri" },
                      "accounts": { "type": "string", "format": "uri" },
                      "sub_accounts": { "type": "string", "format": "uri" }
                    }
                  }
                }
              }
            ]
          },
          "name": { "type": "string" },
          "state": { "type": "string", "enum": ["active", "suspended"] }
        }
      }
    },
    "metadata": {
      "title": "Collection Metadata",
      "type": "object",
      "allOf": [
        {
          "title": "Entity Metadata",
          "required": ["location", "documentation"],
          "properties": {
            "location": { "type": "string", "format": "uri" },
            "documentation": { "type": "string", "format": "uri" },
            "related": { "type": "object" }
          }
        },
        {
          "type": "object",
          "required": ["count"],
          "properties": {
            "count": { "type": "integer" }
          }
        }
      ]
    }
  }
}
```

---

### GET /accounts/{account_id}

Retrieve the details of a single account.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| account_id | required | string |

**Example Response:**

```json
{
    "created_at": "2015-12-16T00:34:47.000Z",
    "id": "1456243",
    "name": "Corporate Cole's Account",
    "state": "active",
    "uuid": "f888109f-7851-4252-ad51-c432e0f37056",
    "metadata": {
        "documentation": "https://developer.unbounce.com/api_reference/#id_accounts__account_id_",
        "location": "https://api.unbounce.com/accounts/1456243",
        "related": {
            "accounts": "https://api.unbounce.com/accounts",
            "pages": "https://api.unbounce.com/accounts/1456243/pages",
            "sub_accounts": "https://api.unbounce.com/accounts/1456243/sub_accounts"
        }
    }
}
```

**Response Body Schema:** Single account entity. Required fields: `created_at`, `id`, `metadata`, `name`, `state`. State enum: `["active", "suspended"]`.

---

### GET /accounts/{account_id}/sub_accounts

Retrieve all sub-accounts for the specified account.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| account_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "metadata": {
        "count": 2,
        "documentation": "https://developer.unbounce.com/api_reference/#id_sub_accounts__sub_account_id_",
        "location": "https://api.unbounce.com/accounts/1456243/sub_accounts"
    },
    "sub_accounts": [
        {
            "account_id": "1456243",
            "created_at": "2015-12-16T00:34:47.000Z",
            "domains_count": 1,
            "id": "1552433",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_sub_accounts__sub_account_id_",
                "location": "https://api.unbounce.com/sub_accounts/1552433",
                "related": {
                    "domains": "https://api.unbounce.com/sub_accounts/1552433/domains",
                    "page_groups": "https://api.unbounce.com/sub_accounts/1552433/page_groups",
                    "pages": "https://api.unbounce.com/sub_accounts/1552433/pages"
                }
            },
            "name": "Default Client"
        },
        {
            "account_id": "1456243",
            "created_at": "2015-12-16T00:55:54.000Z",
            "domains_count": 1,
            "id": "1552463",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_sub_accounts__sub_account_id_",
                "location": "https://api.unbounce.com/sub_accounts/1552463",
                "related": {
                    "domains": "https://api.unbounce.com/sub_accounts/1552463/domains",
                    "page_groups": "https://api.unbounce.com/sub_accounts/1552463/page_groups",
                    "pages": "https://api.unbounce.com/sub_accounts/1552463/pages"
                }
            },
            "name": "Lumber James"
        }
    ]
}
```

**Response Body Schema:** Collection of sub-account entities. Required fields per sub-account: `created_at`, `domains_count`, `id`, `account_id`, `metadata`, `name`. Optional: `website`.

---

### GET /accounts/{account_id}/pages

Retrieve a list of all pages for the specified account.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| account_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "metadata": {
        "count": 3,
        "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
        "location": "https://api.unbounce.com/accounts/1456243/pages"
    },
    "pages": [
        {
            "created_at": "2015-12-16T00:59:29.000Z",
            "domain": "unbouncepages.com",
            "id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "last_published_at": "2015-12-16T01:02:23.000Z",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/form_fields",
                    "leads": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Forward Marketing Solutions",
            "state": "published",
            "sub_account_id": "1552433",
            "url": "http://unbouncepages.com/forward-marketing-solutions/",
            "variants_count": 0
        },
        {
            "created_at": "2015-12-16T01:01:28.000Z",
            "domain": "forward.corporatecole.com",
            "id": "26d2a10b-4b00-495d-b915-978dc5b3565f",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/form_fields",
                    "leads": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Mastering Leather E-Book",
            "state": "unpublished",
            "sub_account_id": "1552433",
            "url": "http://forward.corporatecole.com/mastering-leather-e-book/",
            "variants_count": 0
        },
        {
            "created_at": "2015-12-16T01:00:12.000Z",
            "domain": "ubacademy.wpengine.com",
            "id": "1db1f6cf-0ab1-4dc9-a2a9-57dc5c37f55d",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/1db1f6cf-0ab1-4dc9-a2a9-57dc5c37f55d",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/1db1f6cf-0ab1-4dc9-a2a9-57dc5c37f55d/form_fields",
                    "leads": "https://api.unbounce.com/pages/1db1f6cf-0ab1-4dc9-a2a9-57dc5c37f55d/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552463"
                }
            },
            "name": "Lumber James E-Book",
            "state": "unpublished",
            "sub_account_id": "1552463",
            "url": "http://ubacademy.wpengine.com/lumber-james-e-book/",
            "variants_count": 0
        }
    ]
}
```

**Page Entity Required Fields:** `created_at`, `domain`, `id`, `integrations`, `integrations_count`, `integrations_errors_count`, `metadata`, `name`, `state`, `sub_account_id`, `url`, `variants_count`

**Page Entity Optional Fields:** `last_published_at`, `tests`

**Page State Enum:** `["unpublished", "published"]`

**Page Tests Schema (when with_stats is true):**

```json
{
  "description": "Representation of a campaign experiment, aka a test.",
  "type": "object",
  "required": ["current"],
  "properties": {
    "current": {
      "oneOf": [
        { "type": "object", "additionalProperties": false },
        {
          "type": "object",
          "required": ["champion", "clicks", "conversion_rate", "conversion_rate_delta", "conversions", "form_submits", "has_results", "id", "losers", "visitors", "visits", "winner"],
          "properties": {
            "form_submits": { "type": "integer" },
            "visits": { "type": "integer" },
            "conversion_rate": { "type": "number" },
            "clicks": { "type": "integer" },
            "id": { "type": "string" },
            "conversions": { "type": "integer" },
            "losers": { "type": "string" },
            "has_results": { "type": "boolean" },
            "winner": { "type": "string" },
            "champion": { "type": "string" },
            "visitors": { "type": "integer" },
            "conversion_rate_delta": { "type": "number" }
          }
        }
      ]
    }
  }
}
```

**Integration Entity Required Fields:** `type` (string), `errors_count` (integer)

---

## Sub Accounts

Unbounce users can use sub-accounts to manage multiple projects or clients. Each sub-account has it's own collection of pages, domains and other objects. For interactive applications, you'd often want to allow users to select a particular sub-account to work with.

### GET /sub_accounts/{sub_account_id}

Retrieve the details of a single sub-account.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| sub_account_id | required | string |

**Example Response:**

```json
{
    "account_id": "1456243",
    "created_at": "2015-12-16T00:34:47.000Z",
    "domains_count": 1,
    "id": "1552433",
    "metadata": {
        "documentation": "https://developer.unbounce.com/api_reference/#id_sub_accounts__sub_account_id_",
        "location": "https://api.unbounce.com/sub_accounts/1552433",
        "related": {
            "domains": "https://api.unbounce.com/sub_accounts/1552433/domains",
            "page_groups": "https://api.unbounce.com/sub_accounts/1552433/page_groups",
            "pages": "https://api.unbounce.com/sub_accounts/1552433/pages"
        }
    },
    "name": "Default Client"
}
```

**Response Body Schema:** Representation of a sub-account entity (API sub-accounts are Unbounce Clients). Required fields: `created_at`, `domains_count`, `id`, `account_id`, `metadata`, `name`. Optional: `website`. Metadata related required: `pages`, `page_groups`, `domains`.

---

### GET /sub_accounts/{sub_account_id}/domains

Retrieve a list of all custom domains belonging to a given sub-account.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| sub_account_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "domains": [
        {
            "id": "1225953",
            "uuid": "9216b2e8-a57b-4b13-817b-24e53b55ac21",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_domains__domain_id_",
                "location": "https://api.unbounce.com/domains/1225953",
                "related": {
                    "account": "https://api.unbounce.com/accounts/1456243",
                    "pages": "https://api.unbounce.com/domains/1225953/pages",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "forward.corporatecole.com"
        }
    ],
    "metadata": {
        "count": 1,
        "documentation": "https://developer.unbounce.com/api_reference/#id_domains__domain_id_",
        "location": "https://api.unbounce.com/sub_accounts/1552433/domains",
        "related": {
            "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
        }
    }
}
```

**Domain Entity Required Fields:** `id`, `metadata`, `name`. Metadata related required: `pages`, `account`, `sub_account`.

---

### GET /sub_accounts/{sub_account_id}/page_groups

Retrieve a list of all page groups for a given sub-account.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| sub_account_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "metadata": {
        "count": 1,
        "documentation": "https://developer.unbounce.com/api_reference/#id_page_groups__page_group_id__pages",
        "location": "https://api.unbounce.com/sub_accounts/1552433/page_groups",
        "related": {
            "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
        }
    },
    "page_groups": [
        {
            "id": "849893",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_page_groups__page_group_id__pages",
                "related": {
                    "pages": "https://api.unbounce.com/page_groups/849893/pages",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Marketing Solutions"
        }
    ]
}
```

**Page Group Entity:** Required: `id`, `metadata`, `name`. Metadata related required: `pages`, `sub_account`.

---

### GET /sub_accounts/{sub_account_id}/pages

Retrieve a list of all pages for a given sub-account.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| sub_account_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "metadata": {
        "count": 2,
        "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
        "location": "https://api.unbounce.com/sub_accounts/1552433/pages",
        "related": {
            "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
        }
    },
    "pages": [
        {
            "created_at": "2015-12-16T00:59:29.000Z",
            "domain": "unbouncepages.com",
            "id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "last_published_at": "2015-12-16T01:02:23.000Z",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/form_fields",
                    "leads": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Forward Marketing Solutions",
            "state": "published",
            "sub_account_id": "1552433",
            "url": "http://unbouncepages.com/forward-marketing-solutions/",
            "variants_count": 0
        },
        {
            "created_at": "2015-12-16T01:01:28.000Z",
            "domain": "forward.corporatecole.com",
            "id": "26d2a10b-4b00-495d-b915-978dc5b3565f",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/form_fields",
                    "leads": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Mastering Leather E-Book",
            "state": "unpublished",
            "sub_account_id": "1552433",
            "url": "http://forward.corporatecole.com/mastering-leather-e-book/",
            "variants_count": 0
        }
    ]
}
```

---

## Domains

Customers can register custom domains with Unbounce, then publish pages to those domains.

### GET /domains/{domain_id}

Retrieve a custom domain that has been registered with Unbounce.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| domain_id | required | string |

**Example Response:**

```json
{
    "id": "1225953",
    "uuid": "9216b2e8-a57b-4b13-817b-24e53b55ac21",
    "metadata": {
        "documentation": "https://developer.unbounce.com/api_reference/#id_domains__domain_id_",
        "location": "https://api.unbounce.com/domains/1225953",
        "related": {
            "account": "https://api.unbounce.com/accounts/1456243",
            "pages": "https://api.unbounce.com/domains/1225953/pages",
            "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
        }
    },
    "name": "forward.corporatecole.com"
}
```

---

### GET /domains/{domain_id}/pages

Retrieve a list of all pages based on the domain.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| domain_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "metadata": {
        "count": 1,
        "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
        "location": "https://api.unbounce.com/domains/1225953/pages",
        "related": {
            "domain": "https://api.unbounce.com/domains/1225953"
        }
    },
    "pages": [
        {
            "created_at": "2015-12-16T01:01:28.000Z",
            "domain": "forward.corporatecole.com",
            "id": "26d2a10b-4b00-495d-b915-978dc5b3565f",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/form_fields",
                    "leads": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Mastering Leather E-Book",
            "state": "unpublished",
            "sub_account_id": "1552433",
            "url": "http://forward.corporatecole.com/mastering-leather-e-book/",
            "variants_count": 0
        }
    ]
}
```

---

## Pages

Access all pages for the authenticated principal. An authenticated principal is either an API Key, or an OAuth client. We provide this top-level resource specifically for OAuth clients. Any Unbounce customer can be invited to author or view a page on a different client than their own. The legacy Pages resource we provide doesn't allow for accessing these external pages. This top-level resource allows you to additionally filter pages based on the specified role.

### GET /pages

Retrieve a list of all pages.

**Authentication Required**

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |
| with_stats | boolean | | When true, include page stats for the collection. Example: `true` |
| role | one of `viewer`, `author` | | Restricts the scope of the returned pages. Example: `author` |

**Example Response:**

```json
{
    "metadata": {
        "count": 3,
        "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
        "location": "https://api.unbounce.com/pages"
    },
    "pages": [
        {
            "created_at": "2015-12-16T00:59:29.000Z",
            "domain": "unbouncepages.com",
            "id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "last_published_at": "2015-12-16T01:02:23.000Z",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/form_fields",
                    "leads": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Forward Marketing Solutions",
            "state": "published",
            "sub_account_id": "1552433",
            "url": "http://unbouncepages.com/forward-marketing-solutions/",
            "variants_count": 0
        }
    ]
}
```

---

### GET /pages/{page_id}

Retrieve a single page.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |

**Example Response:**

```json
{
    "created_at": "2015-12-16T00:59:29.000Z",
    "domain": "unbouncepages.com",
    "id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
    "integrations": [],
    "integrations_count": 0,
    "integrations_errors_count": 0,
    "last_published_at": "2015-12-16T01:02:23.000Z",
    "metadata": {
        "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
        "location": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
        "related": {
            "form_fields": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/form_fields",
            "leads": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/leads",
            "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
        }
    },
    "name": "Forward Marketing Solutions",
    "state": "published",
    "sub_account_id": "1552433",
    "tests": {
        "current": {
            "champion": "a",
            "clicks": 0,
            "conversion_rate": 33.33,
            "conversion_rate_delta": 0.0,
            "conversions": 1,
            "form_submits": 2,
            "has_results": false,
            "id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "losers": "",
            "visitors": 3,
            "visits": 3,
            "winner": ""
        }
    },
    "url": "http://unbouncepages.com/forward-marketing-solutions/",
    "variants_count": 0
}
```

---

### GET /pages/{page_id}/form_fields

Retrieve a full list of all form fields across all page variants of a specific page.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| include_sub_pages | boolean | | When true, include sub page form fields in the response. Example: `true` |

**Example Response:**

```json
{
    "form_fields": [
        {
            "id": "name",
            "name": "Name",
            "type": "text",
            "validations": {
                "required": false
            }
        },
        {
            "id": "email",
            "name": "Email",
            "type": "text",
            "validations": {
                "email": true,
                "required": false
            }
        },
        {
            "id": "phone_number",
            "name": "Phone Number",
            "type": "text",
            "validations": {
                "phone": true,
                "required": false
            }
        },
        {
            "id": "company",
            "name": "Company",
            "type": "text",
            "validations": {
                "required": false
            }
        }
    ],
    "metadata": {
        "count": 4,
        "documentation": "https://developer.unbounce.com/api_reference/#id_pages__page_id__form_fields",
        "location": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/form_fields",
        "related": {
            "page": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70"
        }
    }
}
```

**Form Field Entity Schema:**

```json
{
  "description": "Representation of a single form field entity.",
  "type": "object",
  "additionalProperties": true,
  "required": ["id", "name", "type"],
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "type": {
      "type": "string",
      "enum": ["text", "textarea", "checkbox", "radio", "hidden"]
    },
    "options": {
      "type": "array",
      "items": { "type": "string" }
    },
    "validations": {
      "type": "object",
      "additionalProperties": false,
      "required": ["required"],
      "properties": {
        "required": { "type": "boolean" },
        "email": { "type": "boolean" },
        "phone": { "type": "boolean" }
      }
    }
  }
}
```

---

## Leads

There are two sets of data associated with each lead; the form data submitted when the lead was collected, and any optional extra data provided by 3rd party integrations with Unbounce (such as lead scoring or social data). Fields within the form data collection use a normalized form of the form field name.

### GET /pages/{page_id}/leads

Retrieve a list of all leads for a given page (including AMP), pop-up, or sticky-bar.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "leads": [
        {
            "created_at": "2015-12-16T01:03:52.000Z",
            "extra_data": {
                "cookies": {
                    "hblid": ["OiOij7R1Z7bwg9ot9B51W1IaCW0EQIN2"],
                    "olfsk": "olfsk8370654808823019",
                    "ubvs": ["38.88.7.981440778907332600"],
                    "ubvt": ["38.88.7.981440778907332600"]
                },
                "request_id": "d7fa4e57-753d-4811-abc8-ad2f0dc742e1"
            },
            "form_data": {
                "company": ["Lumber James Canada"],
                "email": ["james@lumberjames.com"],
                "name": ["Lumber James"],
                "phone_number": ["7785669522"]
            },
            "id": "deadbeef-dead-beef-dead-beef00000075",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_leads__lead_id_",
                "location": "https://api.unbounce.com/leads/deadbeef-dead-beef-dead-beef00000075",
                "related": {
                    "page": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "page_id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "submitter_ip": "38.88.7.98",
            "variant_id": "a"
        },
        {
            "created_at": "2015-12-16T01:04:55.000Z",
            "extra_data": {
                "cookies": {
                    "hblid": ["OiOij7R1Z7bwg9ot9B51W1IaCW0EQIN2"],
                    "olfsk": "olfsk8370654808823019",
                    "ubvs": ["38.88.7.981440778907332600"],
                    "ubvt": ["38.88.7.981440778907332600"]
                },
                "request_id": "a2d1a185-7216-4749-b2f9-ca35c531cae4"
            },
            "form_data": {
                "company": ["Goingburger King"],
                "email": ["arthur.goingburger@king.com"],
                "name": ["Arthur Goingburger"],
                "phone_number": ["7789563222"]
            },
            "id": "deadbeef-dead-beef-dead-beef00000076",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_leads__lead_id_",
                "location": "https://api.unbounce.com/leads/deadbeef-dead-beef-dead-beef00000076",
                "related": {
                    "page": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "page_id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "submitter_ip": "38.88.7.98",
            "variant_id": "a"
        }
    ],
    "metadata": {
        "count": 2,
        "documentation": "https://developer.unbounce.com/api_reference/#id_leads__lead_id_",
        "location": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/leads",
        "related": {
            "page": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70"
        }
    }
}
```

**Lead Entity Schema:**

```json
{
  "description": "Representation of a single lead entity.",
  "type": "object",
  "additionalProperties": false,
  "required": ["created_at", "id", "extra_data", "form_data", "metadata", "page_id", "submitter_ip", "variant_id"],
  "properties": {
    "created_at": {
      "title": "Generic Date",
      "description": "RFC 5322, section 3.4.1, compliant date, formatted with: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
      "type": "string",
      "format": "date-time"
    },
    "id": { "type": "string" },
    "extra_data": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "rapleaf": { "type": "object" },
        "cookies": { "type": "object" },
        "request_id": { "type": "string" },
        "created_by": { "type": "string", "enum": ["api"] }
      }
    },
    "form_data": { "type": "object" },
    "metadata": {
      "type": "object",
      "allOf": [
        {
          "title": "Entity Metadata",
          "required": ["location", "documentation"],
          "properties": {
            "location": { "type": "string", "format": "uri" },
            "documentation": { "type": "string", "format": "uri" },
            "related": { "type": "object" }
          }
        },
        {
          "type": "object",
          "required": ["related"],
          "properties": {
            "related": {
              "type": "object",
              "additionalProperties": false,
              "required": ["page", "sub_account"],
              "properties": {
                "page": { "type": "string", "format": "uri" },
                "sub_account": { "type": "string", "format": "uri" }
              }
            }
          }
        }
      ]
    },
    "page_id": { "type": "string" },
    "submitter_ip": { "type": "string" },
    "variant_id": { "type": "string" }
  }
}
```

---

### POST /pages/{page_id}/leads

Create a new lead. New leads created via the API are marked distinctly from those created through the webapp. Leads created via the API will have a new attribute in their **extra_data** field:

```json
{ "created_by": "api" }
```

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |

**Example Request:**

```json
{
    "conversion": true,
    "visitor_id": "127.0.0.123543254378923893",
    "form_submission": {
        "variant_id": "a",
        "submitter_ip": "127.0.0.1",
        "form_data": {
            "first_name": "John",
            "last_name": "Doe",
            "email": "jqdoe@unbounce.com"
        }
    }
}
```

**Request Body Schema:**

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Representation of a new lead",
  "type": "object",
  "additionalProperties": false,
  "required": ["form_submission"],
  "properties": {
    "conversion": {
      "description": "Whether this lead should be marked as having converted or not.",
      "type": "boolean"
    },
    "form_submission": {
      "type": "object",
      "additionalProperties": false,
      "required": ["variant_id", "submitter_ip", "form_data"],
      "properties": {
        "variant_id": {
          "description": "The published page variant Id.",
          "type": "string"
        },
        "submitter_ip": {
          "description": "Originating IP address of the lead.",
          "type": "string"
        },
        "form_data": {
          "description": "Form fields and form values representing a lead.",
          "type": "object"
        }
      }
    },
    "visitor_id": {
      "description": "Unbounce's internal visitor ID for tracking the lead.",
      "type": "string"
    }
  }
}
```

---

### GET /pages/{page_id}/leads/{lead_id}

Get info of single Lead.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |
| lead_id | required | string |

**Response Body Schema:** Same as single lead entity (see Lead Entity Schema above).

---

### DELETE /pages/{page_id}/leads/{lead_id}

Delete a single Lead. Only available to the account owner.

**NOTE: this endpoint cannot be used with API keys (OAuth only)**

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |
| lead_id | required | string |

---

### POST /pages/{page_id}/lead_deletion_request

Creates a request to asynchronously delete one or more leads for a given page.

To check the status of the request, perform a GET request using the response body's `metadata.location` (See Example Response).

This endpoint is only available to the account owner. Deleted leads cannot be recovered.

**NOTE: this endpoint cannot be used with API keys (OAuth only)**

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |

**Example Request:**

```json
{"lead_ids": ["d07de003-6b3d-4603-bea2-3fc84075fc57"]}
```

**Request Body Schema:**

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Representation of a lead deletion request. Perform and create lead data deletion request. When all_leads is set and lead-ids are not provided, delete all leads of the page. When from ~ to datetime range is provided, only delete leads within the range.",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "lead_ids": {
      "type": "array",
      "description": "A list of lead ids to be deleted. If the lead ID(s) do not exist for the requested page, missing leads are skipped and no error will be reported.",
      "items": [{ "type": "string" }]
    },
    "all_leads": {
      "type": "boolean"
    },
    "from": {
      "type": "string",
      "format": "date-time"
    },
    "to": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

**Example Response:**

```json
{
  "id": "97f0351b-2744-4155-9349-552fca447650",
  "page_id": "9f01a369-642e-45ce-b342-b2d86746e7c4",
  "created_by": "23fe757a-65bf-4506-9b41-5eb11c620d4f",
  "created_at": "2018-10-11T21:36:14.433Z",
  "total_leads_deleted": 0,
  "status": "pending",
  "query": { "lead_ids": ["d07de003-6b3d-4603-bea2-3fc84075fc57"] },
  "completed_at": null,
  "metadata": {
    "location": "https://api.unbounce.com/pages/9f01a369-642e-45ce-b342-b2d86746e7c4/lead_deletion_request/97f0351b-2744-4155-9349-552fca447650"
  }
}
```

**Response Body Schema:**

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Representation of a lead deletion request.",
  "type": "object",
  "additionalProperties": true,
  "required": ["id", "created_by", "created_at", "completed_at", "total_leads_deleted", "status", "metadata"],
  "properties": {
    "id": { "type": "string" },
    "page_id": { "type": "string" },
    "created_by": { "type": "string" },
    "created_at": { "type": "string", "format": "date-time" },
    "completed_at": { "type": ["string", "null"], "format": "date-time" },
    "total_leads_deleted": { "type": "number" },
    "status": { "type": "string", "enum": ["completed", "failed", "pending"] },
    "metadata": {
      "type": "object",
      "required": ["location"],
      "properties": {
        "location": { "type": "string", "format": "uri" }
      }
    }
  }
}
```

---

### GET /pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}

This endpoint is used to retrieve the status of a leads_deletion_request.

The status of the request can be found in the response body (see Example Response).

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_id | required | string |
| lead_deletion_request_id | required | string |

**Example Response:**

```json
{
  "id": "97f0351b-2744-4155-9349-552fca447650",
  "page_id": "9f01a369-642e-45ce-b342-b2d86746e7c4",
  "created_by": "23fe757a-65bf-4506-9b41-5eb11c620d4f",
  "created_at": "2018-10-11T21:36:14.433Z",
  "total_leads_deleted": 0,
  "status": "pending",
  "query": { "lead_ids": ["d07de003-6b3d-4603-bea2-3fc84075fc57"] },
  "completed_at": null,
  "metadata": {
    "location": "https://api.unbounce.com/pages/9f01a369-642e-45ce-b342-b2d86746e7c4/lead_deletion_request/97f0351b-2744-4155-9349-552fca447650"
  }
}
```

**Response Body Schema:** Same as lead deletion request schema above. Status enum: `["completed", "failed", "pending"]`.

---

### GET /leads/{lead_id}

Retrieve a single lead.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| lead_id | required | string |

**Example Response:**

```json
{
    "created_at": "2015-12-16T01:03:52.000Z",
    "extra_data": {},
    "form_data": {
        "company": ["Lumber James Canada"],
        "email": ["james@lumberjames.com"],
        "name": ["Lumber James"],
        "phone_number": ["7785669522"]
    },
    "id": "deadbeef-dead-beef-dead-beef00000075",
    "metadata": {
        "documentation": "https://developer.unbounce.com/api_reference/#id_leads__lead_id_",
        "location": "https://api.unbounce.com/leads/deadbeef-dead-beef-dead-beef00000075",
        "related": {
            "page": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
        }
    },
    "page_id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
    "submitter_ip": "38.88.7.98",
    "variant_id": "a"
}
```

---

## Page Groups

Pages may optionally be organized into groups. Each page group provides a link to the pages it contains in its meta data collection.

### GET /page_groups/{page_group_id}/pages

Retrieve a list of all pages that belong to a given page group.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| page_group_id | required | string |

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_order | one of `asc`, `desc` | asc | Sort by creation date. Example: `desc` |
| count | boolean | | When true, don't return the response's collection attribute. Example: `true` |
| from | string | | Limit results to those created after from. Example: `2014-12-31T00:00:00.000Z` |
| to | string | | Limit results to those created before to. Example: `2014-12-31T23:59:59.999Z` |
| offset | integer | | Omit the first offset number of results. Example: `3` |
| limit | integer | 50 (max: 1000) | Only return limit number of results. Example: `100` |

**Example Response:**

```json
{
    "metadata": {
        "count": 2,
        "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
        "location": "https://api.unbounce.com/page_groups/849893/pages",
        "related": {
            "page_group": "https://api.unbounce.com/sub_accounts/1552433/page_groups"
        }
    },
    "pages": [
        {
            "created_at": "2015-12-16T00:59:29.000Z",
            "domain": "unbouncepages.com",
            "id": "a0a3ffdf-5965-4ef2-8414-8afcded91f70",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "last_published_at": "2015-12-16T01:02:23.000Z",
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/form_fields",
                    "leads": "https://api.unbounce.com/pages/a0a3ffdf-5965-4ef2-8414-8afcded91f70/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Forward Marketing Solutions",
            "state": "published",
            "sub_account_id": "1552433",
            "url": "http://unbouncepages.com/forward-marketing-solutions/",
            "variants_count": 0
        },
        {
            "created_at": "2015-12-16T01:01:28.000Z",
            "domain": "forward.corporatecole.com",
            "id": "26d2a10b-4b00-495d-b915-978dc5b3565f",
            "integrations": [],
            "integrations_count": 0,
            "integrations_errors_count": 0,
            "metadata": {
                "documentation": "https://developer.unbounce.com/api_reference/#id_pages",
                "location": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f",
                "related": {
                    "form_fields": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/form_fields",
                    "leads": "https://api.unbounce.com/pages/26d2a10b-4b00-495d-b915-978dc5b3565f/leads",
                    "sub_account": "https://api.unbounce.com/sub_accounts/1552433"
                }
            },
            "name": "Mastering Leather E-Book",
            "state": "unpublished",
            "sub_account_id": "1552433",
            "url": "http://forward.corporatecole.com/mastering-leather-e-book/",
            "variants_count": 0
        }
    ]
}
```

---

## Users

### GET /users/self

Retrieve the current user.

**Authentication Required**

**Example Response:**

```json
{
  "metadata": {
    "documentation": "https://developer.unbounce.com/api_reference/#id_users",
    "location": "https://api.unbounce.com/users/1460053",
    "related": {
      "sub_accounts": [
        "https://api.unbounce.com/sub_accounts/1552433",
        "https://api.unbounce.com/sub_accounts/1552463"
      ],
      "accounts": [
        "https://api.unbounce.com/accounts/1456243"
      ]
    }
  },
  "email": "corporate.cole@unbounce.com",
  "first_name": "Corporate Cole",
  "id": "1460053",
  "last_name": "Enterprises"
}
```

**Response Body Schema:**

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "User entity include accounts and sub-account data.",
  "type": "object",
  "additionalProperties": false,
  "required": ["id", "first_name", "last_name", "email", "metadata"],
  "properties": {
    "first_name": { "type": "string" },
    "last_name": { "type": "string" },
    "id": { "type": "string" },
    "email": { "type": "string", "format": "email" },
    "metadata": {
      "type": "object",
      "allOf": [
        {
          "title": "Entity Metadata",
          "required": ["location", "documentation"],
          "properties": {
            "location": { "type": "string", "format": "uri" },
            "documentation": { "type": "string", "format": "uri" },
            "related": { "type": "object" }
          }
        },
        {
          "type": "object",
          "required": ["related"],
          "properties": {
            "related": {
              "type": "object",
              "additionalProperties": false,
              "required": ["accounts", "sub_accounts"],
              "properties": {
                "accounts": {
                  "type": "array",
                  "minItems": 0,
                  "items": { "type": "string", "format": "uri" }
                },
                "sub_accounts": {
                  "type": "array",
                  "minItems": 0,
                  "items": { "type": "string", "format": "uri" }
                }
              }
            }
          }
        }
      ]
    }
  }
}
```

---

### GET /users/{user_id}

Retrieves a particular user.

**Authentication Required**

**URI Parameters:**

| Parameter | Required | Type |
|-----------|----------|------|
| user_id | required | string |

**Example Response:**

```json
{
  "metadata": {
    "documentation": "https://developer.unbounce.com/api_reference/#id_users",
    "location": "https://api.unbounce.com/users/1460053",
    "related": {
      "sub_accounts": [
        "https://api.unbounce.com/sub_accounts/1552433",
        "https://api.unbounce.com/sub_accounts/1552463"
      ],
      "accounts": [
        "https://api.unbounce.com/accounts/1456243"
      ]
    }
  },
  "email": "corporate.cole@unbounce.com",
  "first_name": "Corporate Cole",
  "id": "1460053",
  "last_name": "Enterprises"
}
```

**Response Body Schema:** Same as `/users/self` above.

---

# Complete Endpoint Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Global API meta-information |
| GET | `/accounts` | List all accounts |
| GET | `/accounts/{account_id}` | Get single account |
| GET | `/accounts/{account_id}/sub_accounts` | List sub-accounts for account |
| GET | `/accounts/{account_id}/pages` | List pages for account |
| GET | `/sub_accounts/{sub_account_id}` | Get single sub-account |
| GET | `/sub_accounts/{sub_account_id}/domains` | List domains for sub-account |
| GET | `/sub_accounts/{sub_account_id}/page_groups` | List page groups for sub-account |
| GET | `/sub_accounts/{sub_account_id}/pages` | List pages for sub-account |
| GET | `/domains/{domain_id}` | Get single domain |
| GET | `/domains/{domain_id}/pages` | List pages for domain |
| GET | `/pages` | List all pages (supports role filter) |
| GET | `/pages/{page_id}` | Get single page (includes test stats) |
| GET | `/pages/{page_id}/form_fields` | List form fields for page |
| GET | `/pages/{page_id}/leads` | List leads for page |
| POST | `/pages/{page_id}/leads` | Create a new lead |
| GET | `/pages/{page_id}/leads/{lead_id}` | Get single lead |
| DELETE | `/pages/{page_id}/leads/{lead_id}` | Delete a lead (OAuth only) |
| POST | `/pages/{page_id}/lead_deletion_request` | Bulk delete leads async (OAuth only) |
| GET | `/pages/{page_id}/lead_deletion_request/{lead_deletion_request_id}` | Check deletion request status |
| GET | `/leads/{lead_id}` | Get single lead (top-level) |
| GET | `/page_groups/{page_group_id}/pages` | List pages in page group |
| GET | `/users/self` | Get current user |
| GET | `/users/{user_id}` | Get specific user |

---

# Common Query Parameters (for collection endpoints)

| Parameter | Type | Default | Max | Description |
|-----------|------|---------|-----|-------------|
| sort_order | `asc` or `desc` | asc | | Sort by creation date |
| count | boolean | false | | When true, don't return the collection, only metadata with count |
| from | string (ISO date) | | | Limit results to those created after this date |
| to | string (ISO date) | | | Limit results to those created before this date |
| offset | integer | 0 | | Omit the first N results |
| limit | integer | 50 | 1000 | Only return this many results |

Additional parameters on specific endpoints:
- `GET /pages`: `with_stats` (boolean) - include page stats; `role` (one of `viewer`, `author`) - filter by role
- `GET /pages/{page_id}/form_fields`: `include_sub_pages` (boolean) - include sub page form fields

---

# Authentication Summary

All endpoints (except `GET /`) require authentication via one of:

1. **API Key** (HTTP Basic Auth): Use API key as username, blank password
   ```
   curl -u API_KEY: -H "Accept: application/vnd.unbounce.api.v0.4+json" https://api.unbounce.com/accounts
   ```

2. **OAuth 2.0 Bearer Token**:
   ```
   curl -H "Authorization: Bearer OAUTH_ACCESS_TOKEN" -H "Accept: application/vnd.unbounce.api.v0.4+json" https://api.unbounce.com/accounts
   ```

**OAuth-only endpoints** (cannot use API keys):
- `DELETE /pages/{page_id}/leads/{lead_id}`
- `POST /pages/{page_id}/lead_deletion_request`

**Rate Limit:** 500 requests per minute per user account and IP address (HTTP 429 when exceeded)

**API Version Header:** `Accept: application/vnd.unbounce.api.v0.4+json`

**Base URL:** `https://api.unbounce.com`

**Required Protocol:** HTTPS (SSL required)
