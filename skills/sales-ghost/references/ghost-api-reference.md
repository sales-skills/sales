<!-- Source: https://docs.ghost.org/admin-api/ and https://docs.ghost.org/content-api/ -->
# Ghost API Reference

## Content API

### Overview
Ghost's Content API is a read-only RESTful service that delivers published content. It's fully cacheable with no rate limits.

### Authentication
- Base URL: `https://{domain}/ghost/api/content/`
- Auth: Query parameter `?key={content_api_key}`
- Keys are browser-safe (public data only)
- Create keys: Ghost Admin → Settings → Integrations → Add custom integration
- Version header: `Accept-Version: v{major}.{minor}`

### Endpoints

| Resource | Browse | Read by ID | Read by Slug |
|---|---|---|---|
| Posts | GET `/posts/` | GET `/posts/{id}/` | GET `/posts/slug/{slug}/` |
| Pages | GET `/pages/` | GET `/pages/{id}/` | GET `/pages/slug/{slug}/` |
| Authors | GET `/authors/` | GET `/authors/{id}/` | GET `/authors/slug/{slug}/` |
| Tags | GET `/tags/` | GET `/tags/{id}/` | GET `/tags/slug/{slug}/` |
| Tiers | GET `/tiers/` | — | — |
| Settings | GET `/settings/` | — | — |

### Common Parameters
- `include`: Comma-separated list of related resources (e.g., `include=tags,authors`)
- `fields`: Comma-separated list of fields to return
- `filter`: NQL filter (e.g., `filter=tag:getting-started`)
- `limit`: Number of results (default 15, use `all` for everything)
- `page`: Pagination page number
- `order`: Sort order (e.g., `order=published_at desc`)
- `formats`: Content format — `html`, `mobiledoc`, or `plaintext`

### Response Format
```json
{
  "posts": [{...}, {...}],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 15,
      "pages": 3,
      "total": 45,
      "next": 2,
      "prev": null
    }
  }
}
```

---

## Admin API

### Overview
The Admin API enables content creation and management. Everything Ghost Admin can do is possible through the API.

### Authentication Methods

**1. Integration Token (JWT)**
- Generate from Admin API key (format: `{id}:{secret}`)
- JWT Header: `{ "alg": "HS256", "kid": "{id}", "typ": "JWT" }`
- JWT Payload: `{ "iat": {now}, "exp": {now + 300}, "aud": "/admin/" }`
- Sign with hex-decoded secret using HMAC-SHA256
- Send as: `Authorization: Ghost {token}`

**2. Staff Access Token**
- Found in user settings within Ghost Admin
- Send as: `Authorization: Ghost {token}`
- Scoped to the individual user's permissions

### Endpoints

| Resource | Browse | Read | Add | Edit | Copy | Delete |
|---|---|---|---|---|---|---|
| Posts | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Pages | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Tags | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| Tiers | ✓ | ✓ | ✓ | ✓ | — | — |
| Newsletters | ✓ | ✓ | ✓ | ✓ | — | — |
| Offers | ✓ | ✓ | ✓ | ✓ | — | — |
| Members | ✓ | ✓ | ✓ | ✓ | — | — |
| Users | ✓ | ✓ | — | — | — | — |
| Images | — | — | Upload | — | — | — |
| Themes | — | — | Upload | — | — | Activate |
| Webhooks | — | — | ✓ | ✓ | — | ✓ |
| Site | — | ✓ | — | — | — | — |

### Common Parameters
Same as Content API: `include`, `fields`, `filter`, `limit`, `page`, `order`

### Content Formats
- Posts and Pages accept content in `mobiledoc` or `lexical` format
- The `source` parameter controls input format: `source=html` allows sending raw HTML that Ghost converts

### Creating a Post (example)
```json
POST /ghost/api/admin/posts/
{
  "posts": [{
    "title": "My Post",
    "html": "<p>Content here</p>",
    "status": "published",
    "tags": [{"name": "Getting Started"}],
    "newsletter": {"id": "newsletter-id"},
    "email_segment": "status:free"
  }]
}
```

### Creating a Member (example)
```json
POST /ghost/api/admin/members/
{
  "members": [{
    "email": "member@example.com",
    "name": "Jane Doe",
    "labels": [{"name": "VIP"}],
    "newsletters": [{"id": "newsletter-id"}]
  }]
}
```

### JavaScript SDK

**Content API Client**:
```javascript
const GhostContentAPI = require('@tryghost/content-api');
const api = new GhostContentAPI({
  url: 'https://yoursite.ghost.io',
  key: 'your-content-api-key',
  version: 'v5.0'
});
const posts = await api.posts.browse({limit: 5, include: 'tags,authors'});
```

**Admin API Client**:
```javascript
const GhostAdminAPI = require('@tryghost/admin-api');
const api = new GhostAdminAPI({
  url: 'https://yoursite.ghost.io',
  key: 'admin-api-key',
  version: 'v5.0'
});
await api.posts.add({title: 'New Post', html: '<p>Hello</p>'});
```

### Webhooks
Create via Admin API or Ghost Admin → Integrations:
- Events: `post.published`, `post.unpublished`, `member.added`, `member.updated`, `member.deleted`, `page.published`, `page.unpublished`
- Payload: JSON with the full resource object

### Error Codes
| Code | Meaning |
|---|---|
| 400 | Bad request — invalid JSON or missing required fields |
| 401 | Unauthorized — invalid or expired token |
| 403 | Forbidden — insufficient permissions |
| 404 | Not found — resource doesn't exist |
| 422 | Unprocessable entity — validation error |
| 429 | Too many requests — rate limited |

### Documentation
- Full docs: https://docs.ghost.org
- LLM-friendly index: https://docs.ghost.org/llms.txt
- API demos: https://github.com/TryGhost/api-demos
