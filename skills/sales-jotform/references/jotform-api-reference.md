<!-- Source: https://api.jotform.com/docs/ -->
# Jotform API Reference

## Base URLs
- Standard: `https://api.jotform.com`
- EU: `https://eu-api.jotform.com`
- HIPAA: `https://hipaa-api.jotform.com`

## Authentication
- **API Key (header)**: `APIKEY: {apiKey}` — recommended
- **API Key (query param)**: `?apiKey={apiKey}` — less secure, exposes key in logs
- Get your API key from: My Account → API section

## Rate Limits (daily)
- Free: 1,000 requests
- Bronze: 10,000
- Silver: 50,000
- Gold: 100,000
- Enterprise: 1,000,000

## Common Parameters
- `offset` — pagination offset (default: 0)
- `limit` — results per page (default: 20, max: 1000)
- `orderby` — sort field (e.g., `created_at`, `updated_at`)
- `status` — filter by status (`ACTIVE`, `ENABLED`, `DISABLED`, `DELETED`)

## Endpoints

### User
| Method | Path | Description |
|---|---|---|
| GET | `/user` | Get user account info |
| GET | `/user/forms` | List user's forms |
| GET | `/user/folders` | List user's folders |
| GET | `/user/invoices` | Get invoices |
| GET | `/user/history` | Get activity log |
| GET | `/user/settings` | Get account settings |
| POST | `/user/settings` | Update account settings |
| GET | `/user/subusers` | List sub-users |
| GET | `/user/usage` | Get usage stats (submissions, storage, API calls) |
| GET | `/user/reports` | List all reports |
| GET | `/user/submissions` | List all submissions across all forms |
| POST | `/user/register` | Register new user |
| POST | `/user/login` | User login |
| GET | `/v1/user/logout` | Logout |

### Forms
| Method | Path | Description |
|---|---|---|
| GET | `/form/{formID}` | Get form details |
| GET | `/form/{formID}/questions` | List all form questions |
| GET | `/form/{formID}/question/{questionID}` | Get specific question |
| GET | `/form/{formID}/properties` | Get form properties |
| GET | `/form/{formID}/files` | List uploaded files |
| GET | `/form/{formID}/submissions` | List form submissions |
| GET | `/form/{formID}/reports` | List form reports |
| GET | `/form/{formID}/webhooks` | List form webhooks |
| POST | `/form` | Create new form |
| PUT | `/form` | Update form |
| POST | `/form/{formID}/clone` | Clone a form |
| DELETE | `/form/{formID}` | Delete form |
| POST | `/form/{formID}/questions` | Add questions to form |
| PUT | `/form/{formID}/questions` | Batch update questions |
| POST | `/form/{formID}/question/{questionID}` | Update specific question |
| DELETE | `/form/{formID}/question/{questionID}` | Delete question |
| POST | `/form/{formID}/submissions` | Create new submission |
| PUT | `/form/{formID}/submissions` | Batch create submissions |
| POST | `/form/{formID}/webhooks` | Add webhook |
| DELETE | `/form/{formID}/webhooks/{webhookID}` | Delete webhook |
| POST | `/form/{formID}/reports` | Create report |

### Submissions
| Method | Path | Description |
|---|---|---|
| GET | `/submission/{submissionID}` | Get submission details |
| POST | `/submission/{submissionID}` | Edit submission |
| DELETE | `/submission/{submissionID}` | Delete submission |

### Folders
| Method | Path | Description |
|---|---|---|
| GET | `/folder/{folderID}` | Get folder details |
| POST | `/folder` | Create folder |
| PUT | `/folder/{folderID}` | Update folder |
| DELETE | `/folder/{folderID}` | Delete folder |

### Reports
| Method | Path | Description |
|---|---|---|
| GET | `/report/{reportID}` | Get report |
| DELETE | `/report/{reportID}` | Delete report |

### Labels
| Method | Path | Description |
|---|---|---|
| GET | `/user/labels` | List all labels |
| GET | `/label/{labelID}` | Get label details |
| GET | `/label/{labelID}/resources` | Get label resources |
| POST | `/label` | Create label |
| PUT | `/label/{labelID}` | Update label |
| PUT | `/label/{labelID}/add-resources` | Add resources to label |
| PUT | `/label/{labelID}/remove-resources` | Remove resources from label |
| DELETE | `/label/{labelID}` | Delete label |

### System
| Method | Path | Description |
|---|---|---|
| GET | `/system/plan/{planName}` | Get plan details and limits |

## SDKs
Official client libraries: Python, Node.js, PHP, Java, Go, C#, Ruby, Scala, Android, iOS, JavaScript

GitHub repos:
- `jotform/jotform-api-python`
- `jotform/jotform-api-nodejs`
- `jotform/jotform-api-php`
- `jotform/jotform-api-java`
- `jotform/jotform-api-go`
- `jotform/jotform-api-csharp`
- `jotform/jotform-api-ruby`
- `jotform/jotform-api-scala`
- `jotform/jotform-api-android`
- `jotform/jotform-api-ios`

## MCP Server
- `jotform/mcp-server` — Model Context Protocol server for AI integration
- Enables Claude/Cursor to interact with Jotform forms and submissions directly

## Webhook Payload
Webhooks send POST requests with `application/x-www-form-urlencoded` content type. Payload includes:
- `formID` — the form ID
- `submissionID` — the submission ID
- `rawRequest` — JSON string with all form field answers
- `pretty` — human-readable field labels and answers
- Individual form fields as key-value pairs

**Important**: Webhooks only fire on browser-submitted forms. API-created submissions (`POST /form/{formID}/submissions`) do NOT trigger webhooks.
