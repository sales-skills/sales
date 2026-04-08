# Product Hunt GraphQL API Reference

## Overview

Product Hunt uses a GraphQL API (v2). All queries go through a single endpoint.

- **Endpoint**: `https://api.producthunt.com/v2/api/graphql`
- **Auth**: OAuth 2.0 or Developer Token
- **Rate limit**: 6,250 complexity points per 15 minutes
- **Explorer**: `https://api.producthunt.com/v2/docs` (interactive GraphQL explorer)

## Authentication

### Developer Token (simplest)

1. Go to `https://www.producthunt.com/v2/oauth/applications`
2. Create a new application
3. Copy the Developer Token
4. Use in header: `Authorization: Bearer {token}`

### OAuth 2.0

For user-context operations (posting, voting):

1. Register an OAuth application
2. Redirect user to: `https://api.producthunt.com/v2/oauth/authorize?client_id={id}&redirect_uri={uri}&response_type=code&scope=public+private`
3. Exchange code for token at: `POST https://api.producthunt.com/v2/oauth/token`

**Scopes**: `public` (read-only), `private` (read + write)

## Key Queries

### Get posts (launches)

```graphql
query {
  posts(order: RANKING, first: 20) {
    edges {
      node {
        id
        name
        tagline
        url
        votesCount
        commentsCount
        createdAt
        website
        thumbnail {
          url
        }
        topics {
          edges {
            node {
              name
            }
          }
        }
        makers {
          id
          name
          username
        }
      }
    }
  }
}
```

### Get a specific post

```graphql
query {
  post(slug: "your-product-slug") {
    id
    name
    tagline
    description
    url
    votesCount
    commentsCount
    reviewsRating
    website
    makers {
      id
      name
      username
    }
    comments(first: 50) {
      edges {
        node {
          body
          createdAt
          user {
            name
            username
          }
        }
      }
    }
  }
}
```

### Search posts

```graphql
query {
  posts(topic: "artificial-intelligence", order: VOTES, first: 10) {
    edges {
      node {
        name
        tagline
        votesCount
        url
      }
    }
  }
}
```

### Get topics

```graphql
query {
  topics(first: 50) {
    edges {
      node {
        id
        name
        slug
        postsCount
      }
    }
  }
}
```

### Get user profile

```graphql
query {
  user(username: "rrhoover") {
    id
    name
    username
    headline
    profileImage
    followersCount
    followingCount
    madePosts(first: 10) {
      edges {
        node {
          name
          tagline
          votesCount
        }
      }
    }
  }
}
```

## Rate Limiting

- Each query has a complexity cost based on fields requested and pagination depth
- Budget: 6,250 points per 15-minute window
- Response headers include remaining budget: `X-Rate-Limit-Remaining`
- Simple queries (single post lookup) cost ~5-10 points
- List queries with nested fields cost more (e.g., 20 posts with comments + makers ~ 100-200 points)

## Pagination

Uses Relay-style cursor pagination:

```graphql
query {
  posts(first: 20, after: "cursor_string") {
    edges {
      node { ... }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

## Common Patterns

### Monitor daily launches

Poll `posts(order: NEWEST)` filtered by today's date. No webhook support — use scheduled polling.

### Track competitor launches

Query by topic or search by keyword, then monitor votesCount and commentsCount over the 24-hour window.

### Export launch analytics

Query your post by slug, pull comments, votes over time (requires multiple polls), and makers list.

## Limitations

- **No webhooks**: Must poll for updates
- **No write operations via API for launches**: You cannot submit a product launch via the API — must use the web interface
- **Rate limits are per-application**: Shared across all users of your OAuth app
- **Historical data**: Some older posts may have incomplete data
- **No real-time ranking data**: The ranking algorithm is not exposed — you can only see votesCount and commentsCount, not the actual ranking score
