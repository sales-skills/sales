<!-- Source: https://docs.fireflies.ai (fetched 2026-04-16) -->

# Fireflies.ai API Reference

Verbatim copy of the public Fireflies.ai API documentation. Do not modify — refetch from source if updates are needed.


---

## Source file: getting-started_introduction.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Introduction

> Welcome to Fireflies public API documentation.

<Note>
  We are actively working to expose more functionality via our API. If you have specific requests,
  please [reach out to us](https://guide.fireflies.ai/).
</Note>

# Introduction

## Overview of the API

The Fireflies API is built on top of GraphQL, a powerful interface designed to provide you with efficient and flexible access to your data. This API allows you to retrieve exactly the data you need in a structured format. Whether you are building a web application, a mobile app, or a complex software system, our API caters to a wide range of data requirements.

Our API covers various functionalities, including queries for fetching data as well as uploading meeting audio. It is designed to be intuitive and easy to use, ensuring that you can start fetching and manipulating data with minimal setup.

## Advantages of Using GraphQL

**1. Precise Data Fetching:** One of the key strengths of GraphQL is its ability to return exactly what you request and nothing more. This precision eliminates the over-fetching of data, common in traditional REST APIs, leading to more efficient network utilization and faster response times.

**2. Single Endpoint:** Unlike REST APIs, which often require multiple endpoints for different data needs, GraphQL operates through a single endpoint. This simplification streamlines interactions with the API and makes maintaining and managing the API more straightforward.

**3. Flexibility and Scalability:** GraphQL APIs are incredibly flexible, allowing for queries that can evolve with your needs. This flexibility, combined with efficient data retrieval, makes GraphQL an ideal choice for both small projects and large-scale applications.

In the following sections, we will guide you through the essential components of our API, provide detailed examples, and offer best practices to help you make the most of our API. Whether you're a new user or an experienced developer, this documentation is designed to assist you in seamlessly integrating the API into your applications.

## Additional Resources

<CardGroup cols={2}>
  <Card title="Quickstart" icon="link" href="/getting-started/quickstart">
    Make your first request in under 5 minutes
  </Card>

  <Card title="Concepts" icon="link" href="/fundamentals/concepts">
    Foundational guide to the core aspects of the Fireflies API
  </Card>
</CardGroup>

---

## Source file: getting-started_quickstart.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Make your first request in under 5 minutes.

This guide provides step-by-step instructions to make your first query with our GraphQL API and demonstrates basic functionality.

## Step 1: Setting Up

Before diving into querying the API, it's essential to set up your environment correctly. This includes obtaining authentication credentials and configuring your development environment.

### Obtaining Authentication Credentials

To access our API, you will need an API key. Follow these steps to obtain your key:

1. Log in to your account at [app.fireflies.ai](https://app.fireflies.ai)
2. Navigate to the [Integrations](https://app.fireflies.ai/integrations) section
3. Click on [Fireflies API](https://app.fireflies.ai/integrations/custom/fireflies)
4. Copy and store your API key securely

<Note>
  It's crucial to handle your API key with the utmost care to ensure the security of your data. For
  more information on Authorization and best practices, visit
  [Authorization](/fundamentals/authorization)
</Note>

## Step 2: Making Your First Request

Execute a simple query to retrieve a list of users.

Replace `your_api_key` with your API key in the following requests

<CodeGroup>
  ```bash curl theme={null}
  curl \
     -X POST \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer your_api_key" \
     --data '{ "query": "{ users { name user_id } }" }' \
     https://api.fireflies.ai/graphql
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = {
      'query': '{ users { name user_id } }'
  }

  response = requests.post(url, json=data, headers=headers)
  print(response.json())
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: '{ users { name user_id } }'
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpHeaders;
  import java.nio.charset.StandardCharsets;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String url = "https://api.fireflies.ai/graphql";
          String json = "{\"query\":\"{ users { name user_id } }\"}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create(url))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json, StandardCharsets.UTF_8))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                  .thenApply(HttpResponse::body)
                  .thenAccept(System.out::println)
                  .join();
      }
  }
  ```
</CodeGroup>

<br />

<Note>
  When building GraphQL queries for this API, focus on precision and efficiency. Start with simple
  queries and gradually increase complexity. Ensure you only request the data you need to avoid
  over-fetching.

  * **Review the Schema Documentation**: For guidance, refer to the [Schema](/schema) section and use tools like GraphQL Playground for testing. Efficient queries lead to better performance and a smoother API experience.
</Note>

More details on building your GraphQL query are available [here](/graphql-api)

## Step 3: Analyzing the Response

You will receive a JSON response with the requested data. Example response:

<CodeGroup>
  ```bash curl theme={null}
  {
  	"data":
  	{
  		"users": [
  			{
  				"name":"Justin Fly",
  				"user_id":"example-id"
  			}
  		]
  	}
  }
  ```
</CodeGroup>

Continue to the next sections for more detailed examples and advanced usage instructions.

<Footer />

## Additional Resources

<CardGroup cols={2}>
  <Card title="Users" icon="link" href="/graphql-api/query/users">
    Query users using the API
  </Card>

  <Card title="Authorization" icon="link" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: getting-started_developer-program.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Join the Developer Program

> Join the Developer Program to build integrations with Fireflies.ai

## Overview

Welcome to the Fireflies.ai Developer Program! This exclusive program offers developers a chance to explore, test, and integrate with our APIs for a limited period of three months.

This program is tailored for developers eager to create seamless integrations and unlock the full capabilities of Fireflies.ai. Participants will gain access to premium features and higher rate limits, ensuring a swift and successful project development.

## Program Benefits

As a member of the Fireflies.ai Developer Program, you’ll enjoy:

* **Full Business Tier Access**: Complimentary access to all Business Tier features, tools, and resources
* **Integration Support**: Get guidance on how to connect the API seamlessly with your application
* **Enhanced API Access**: Enjoy expanded rate limits and access to premium features designed for high-demand integrations
* **Community and Updates**: Be part of our developer community and receive the latest updates, tutorials, and API news

## How to Apply

Interested in joining? Follow these simple steps to apply for the program:

1. **Fill Out the Application Form**: [Apply here](https://fireflies-developer.paperform.co)
2. **Verification**: Once you submit the form, our team will review your application. Please note that this process is manual and may take a few business days
3. **Approval Notification**: If your application is approved, you’ll receive a confirmation email with details about your program access

## Application Requirements

To qualify for the Developer Program, please ensure you have:

* **A clear project plan**: Briefly describe how Fireflies.ai will integrate with your application
* **A company email**: A company email is preferred for verification purposes
* **GitHub Repository**: Optionally, include a GitHub link to your code or previous work to help us understand your technical expertise
* **Additional Comments**: Any additional information that can help us assess your project’s alignment with our platform goals

## What to Do After You've Built Your Integration

Once you've successfully built your integration with Fireflies.ai, you can apply to be listed as an official partner integration. To get your integration listed, please submit the [Partner Submission Form](https://yhw88ruu.paperform.co/) or contact us at [partners@fireflies.ai](mailto:partners@fireflies.ai).

### Requirements for Listing as Partner Integration

To be listed as a partner integration, you'll need to provide:

1. **Your SOC2 report**: Security compliance documentation
2. **A public helpdesk article to assist users**: Documentation to help users set up and use your integration
3. **A support email for users to reach out**: Contact information for integration support
4. **A short and long description for the listing**: Marketing copy describing your integration
5. **Your company logo in SVG format**: High-quality logo for display on our integrations page

## Program Terms

* **Duration**: The complimentary Business Tier access lasts for three months from the date of approval
* **Feedback**: We may reach out for feedback to better understand your experience and how we can enhance our API

We look forward to seeing what you’ll build and are excited to support your development journey!

## Additional Resources

<CardGroup cols={2}>
  <Card title="Introduction" icon="link" href="/getting-started/introduction">
    Welcome to Fireflies public API documentation
  </Card>

  <Card title="Authorization" icon="link" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: getting-started_llm-development.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# LLM-based Development

> Enhance your AI coding experience with LLM readable documentation.

### Overview

Welcome to the guide on utilizing our specialized `llms.txt` files to enhance your LLM-based coding workflow. Whether you’re using Replit, Cursor, Devin, or any other AI coding tool, this page will assist you in leveraging our resources to debug and refine code generated by Fireflies.

Our platform seamlessly integrates with a variety of AI coding tools. While the generated code may not always be perfect, this guide outlines how to effectively use our `llms.txt` files to improve the debugging process, ensuring your development workflow remains smooth and efficient.

### How to Use `llms.txt` Files

#### For Tools with Limited Agentic Capabilities

If your coding tool does not support web querying or autonomous resource fetching:

* **Download the File**\
  Access the complete file by visiting [this link](https://docs.fireflies.ai/llms-full.txt) and download it to your local machine.

* **Upload and Debug**\
  Upload the downloaded file to your AI coding tool. Instruct your tool to analyze and debug the code using the content of this file. This manual intervention guides the tool in identifying and fixing errors in generated code.

#### For Advanced, Agentic Coding Tools

If your coding tool is sophisticated and capable of querying the web independently:

* **Provide the URL Directly**\
  Instead of downloading the full file, supply your tool with the URL [https://docs.fireflies.ai/llms-full.txt](https://docs.fireflies.ai/llms-full.txt).

* **Let It Decide**\
  Your advanced tool will automatically determine which parts of the file to use and where to look, streamlining the debugging process without additional manual steps.

### Additional Tips

* **Tool Configuration:** Ensure that your AI coding tool is configured to handle file uploads or URL-based inputs effectively.
* **Experiment and Adapt:** Different tools may interact with our resources in unique ways. Experiment with both methods to find the approach that best suits your workflow.
* **Support and Documentation:** If you encounter any challenges or need further assistance, please contact our support team.

Happy coding!

## Additional Resources

<CardGroup cols={2}>
  <Card title="MCP Configuration" icon="link" href="/getting-started/mcp-configuration">
    Connect your AI tools directly to your meeting data
  </Card>

  <Card title="Concepts" icon="link" href="/fundamentals/concepts">
    Foundational guide to the core aspects of the Fireflies API
  </Card>
</CardGroup>

---

## Source file: getting-started_mcp-configuration.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Server Configuration

> Connect your AI tools directly to your meeting data with Fireflies MCP Server.

### Overview

The Fireflies MCP Server enables AI tools to connect directly to your meeting data without switching platforms or copying transcript excerpts. This integration allows you to ask questions like "What were the main objections in this week's sales calls?" or "Create a summary of all product feedback from user interviews this month" directly from your AI coding tools.

### What is MCP?

Model Context Protocol (MCP) is an open standard that enables AI applications to securely connect to external data sources and tools. With Fireflies MCP Server, your AI tools can access meeting transcripts, summaries, action items, and insights directly from your Fireflies account.

### Getting Started

#### Prerequisites

* Active Fireflies.ai account
* AI tool that supports MCP (such as Claude, OpenAI Connector, Cursor, Devin, or other MCP-compatible applications)

#### Installation

1. **Configure your AI tool**
   Add the Fireflies MCP server to your AI tool's configuration. The remote server URL is [https://api.fireflies.ai/mcp](https://api.fireflies.ai/mcp) which uses OAuth with your Fireflies account. The exact steps depend on your specific AI application.

   For specific AI tools, you can also configure directly through:

   * [Claude Settings](https://claude.ai/settings/connectors)
   * [Devin MCP Marketplace](https://app.devin.ai/settings/mcp-marketplace/setup/fireflies)

2. **Use your Fireflies API key on Claude Desktop** (Optional):
   1. Add this config to your `claude_desktop_config.json` file:
      ```json theme={null}
      {
        "mcpServers": {
          "fireflies": {
            "command": "npx",
            "args": [
              "mcp-remote",
              "https://api.fireflies.ai/mcp",
              "--header",
              "Authorization: Bearer YOUR_API_KEY_HERE"
            ]
          }
        }
      }
      ```
   2. Get your API Key from Fireflies
      * Go to **Settings > Developer Settings** and **Copy your API key**
      * [See how to get your API key →](https://guide.fireflies.ai/hc/en-us/articles/360020249198-How-to-access-the-Fireflies-API-key)
      * Once you have the API key, paste it in your claude\_desktop\_config.json
      * Replace `YOUR_API_KEY_HERE` with your actual API key
   3. Restart Claude Desktop

3. **Start querying your data**
   Once configured, you can ask your AI tool questions about your meeting data directly.

### Use Cases

* **Sales Analysis**: "What were the common objections in this week's sales calls?"
* **Product Feedback**: "Summarize all product feedback from user interviews this month"
* **Meeting Insights**: "What action items were assigned to John across all meetings?"
* **Trend Analysis**: "How has customer sentiment changed over the past quarter?"

### Additional Resources

<CardGroup cols={2}>
  <Card title="MCP Tools" icon="tools" href="/mcp-tools/overview">
    Complete reference for all available MCP tools and their parameters
  </Card>

  <Card title="LLM-based Development" icon="link" href="/getting-started/llm-development">
    Enhance your AI coding experience with LLM readable documentation
  </Card>

  <Card title="Authorization" icon="lock" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: fundamentals_authorization.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Authorization

> Authenticating your requests with the Fireflies API

## Overview

The Fireflies API implements token-based authentication, which ensures that only authorized users can access certain data and functionalities.

### Token-Based Authentication

We use a standard bearer token authentication mechanism. This means that to make authorized requests to the API, you must include an `Authorization` header with a valid token.

### Acquiring a Token

Follow these steps to obtain your API key for the Fireflies API:

1. Log in to your account at [fireflies.ai](https://app.fireflies.ai)
2. Navigate to the [Integrations](https://app.fireflies.ai/integrations) section
3. Click on [Fireflies API](https://app.fireflies.ai/integrations/custom/fireflies)
4. Copy and store your API key securely

### Making an Authenticated Request

To make an authenticated request, add the `Authorization` header followed by the word `Bearer` and your API key.

### Example of an Authenticated Request Header

```plaintext theme={null}
Authorization: Bearer your_api_key
```

### Example request with Authorization header

<CodeGroup>
  ```curl curl theme={null}
   curl \
     -X POST \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer your_api_key" \
     --data '{ "query": "{ user { name integrations } }" }' \
     https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: '{ user { name integrations } }'
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = {
      'query': '{ user { name integrations } }'
  }

  response = requests.post(url, json=data, headers=headers)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.nio.charset.StandardCharsets;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String url = "https://api.fireflies.ai/graphql";
          String json = "{\"query\":\"{ user { name integrations } }\"}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create(url))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json, StandardCharsets.UTF_8))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                  .thenApply(HttpResponse::body)
                  .thenAccept(System.out::println)
                  .join();
      }
  }
  ```
</CodeGroup>

Ensure to replace `your_api_key` with your actual API key.

## Best Practices for Token Security

* **Keep it Secret:** Treat your API key like a password. Never expose it in client-side code or share it publicly.
* **Store Securely:** Store the API key securely in your application, ideally in environment variables or secure storage solutions.

<Warning>
  Improper handling of API keys can lead to security vulnerabilities. Always ensure API keys are
  used and stored securely.
</Warning>

## Troubleshooting

* **Invalid key:** If you receive an error regarding an invalid API key, verify that the API key hasn't expired and that it's correctly included in the request header.
* **Missing key:** Ensure that the `Authorization` header is present in your requests requiring authentication.

<Info>
  If you encounter issues with authentication or have questions about API key management, please
  contact our support team.
</Info>

## FAQ

<Accordion title="Why am I getting an 'auth_failed' error?">
  <p>This error can signal an issue in your Authorization header. Please ensure that you are including the `Authorization` header with the word `Bearer` and your API key.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Quickstart" icon="link" href="/getting-started/quickstart">
    Make your first request in under 5 minutes
  </Card>

  <Card title="Errors" icon="link" href="/fundamentals/errors">
    Error standards for the Fireflies API
  </Card>
</CardGroup>

---

## Source file: fundamentals_concepts.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# General concepts

> Foundational guide to the core aspects of the Fireflies API

## Overview

This section serves as a primer on the essential features of the Fireflies API. It covers the requirements to make authenticated requests to the Fireflies API, key GraphQL concepts and a breakdown of core components like queries, mutations, schema and data types.

### Host

The Fireflies API is hosted at [https://api.fireflies.ai](https://api.fireflies.ai)

### Authorization

The Fireflies API requires a valid API key for all requests. Please see [Authorization](/fundamentals/authorization) for more information

## GraphQL API Concepts

Welcome to our GraphQL API! GraphQL is a powerful query language designed for APIs, offering clients the ability to request exactly what they need and nothing more.

### Queries

Queries are used to fetch data in GraphQL. They are akin to the `GET` request in REST.
A basic query might look like this:

<Info>Queries are read-only and won’t modify your data.</Info>

```graphql graphql theme={null}
query {
  user(id: "1") {
    name
    email
  }
}
```

### Mutations

Mutations allow you to modify data – create, update, or delete.

<Warning>Mutations should be used with caution as they change server-side data.</Warning>

```graphql graphql theme={null}
mutation {
  setUserRole(user_id: "1", role: "user") {
    id
    name
  }
}
```

## Schema and Types

### Schema Definition

The schema defines the API's capabilities, including types, queries, mutations, and more.

<Tip>
  <h3>Understanding GraphQL Schema</h3>
  <p>The schema is a contract between client and server, defining how clients can access data.</p>
</Tip>

#### Data Types

**Standard Types:** Int, Float, String, Boolean, ID.

**Custom Types:** Defining complex data structures. Custom types are user-defined and can include combinations of standard types.

#### Best Practices

1. Optimize query performance by requesting for only necessary data.
2. Use variables in queries to enhance readability and flexibility

## Additional Resources

For more in-depth information, visit [GraphQL Documentation](https://graphql.org/learn/).

<CardGroup cols={2}>
  <Card title="Quickstart" icon="link" href="/getting-started/quickstart">
    Make your first request in under 5 minutes
  </Card>

  <Card title="Introspection" icon="link" href="/fundamentals/introspection">
    Query generation and API exploration
  </Card>
</CardGroup>

---

## Source file: fundamentals_errors.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Errors

> Error standards for the Fireflies API

## Overview

Understanding how errors are structured and returned by the Fireflies API is key to effectively handling and troubleshooting issues. This page outlines the common error format and details specific error types.

## Error schema

Our GraphQL API follows a standard format for returning errors. Errors are encapsulated within an `errors` array in the response body.

Please visit [Error codes](/miscellaneous/error-codes) to view explanations for error code types

<ResponseField name="message" type="String" required>
  Description of the error
</ResponseField>

<ResponseField name="code" type="String" required>
  Error code.
</ResponseField>

<ResponseField name="friendly" type="Boolean" required>
  `friendly === true` are safe to show to the frontend client. Unfriendly errors may have technical
  details that may not be useful to the UI layer.
</ResponseField>

<ResponseField name="extensions" type="Object">
  Contains useful metadata related to the error.

  Where relevant, includes field `helpUrls` pointing to relevant API documentation sections that explain the error and provide guidance on how to resolve it
</ResponseField>

```json Example theme={null}
{
  "data": {},
  "errors": [
    {
      "message": "Error description",
      "friendly": true,
      "code": "error_code",
      "extensions": {
        "helpUrls": [
          "https://docs.fireflies.ai/miscellaneous/error-codes#error_code"
        ],
        "code": "error_code",
        "status": http_status_code,
        "...otherFields": "..."
      }
    }
  ]
}
```

## Additional Resources

<CardGroup cols={2}>
  <Card title="Error Codes" icon="link" href="/miscellaneous/error-codes">
    Detailed error code reference
  </Card>

  <Card title="Authorization" icon="link" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: fundamentals_introspection.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Introspection

> Query generation and API exploration.

## Overview

Introspection is a feature that allows querying a GraphQL server to discover its schema. This capability is crucial for developers to understand available queries, mutations, and the structure of the data they can work with, facilitating seamless API interaction and exploration.

### Requirements

You will need a Fireflies.ai API key to use introspection. For more details, please visit [Authorization](/fundamentals/authorization#acquiring-a-token)

### Introspection using Apollo Sandbox

For introspection using our builtin Apollo Sandbox, visit [api.fireflies.ai/graphql](https://api.fireflies.ai/graphql) and enter your `api_key` in the Headers section as a Bearer token

### Introspection using Postman

Create a new Graphql Request in Postman with the url [api.fireflies.ai/graphql](https://api.fireflies.ai/graphql) and enter your `api_key` in the Headers section as a Bearer token

## Additional Resources

<CardGroup cols={2}>
  <Card title="Concepts" icon="link" href="/fundamentals/concepts">
    Foundational guide to the core aspects of the Fireflies API
  </Card>

  <Card title="Authorization" icon="link" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: fundamentals_limits.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Limits

> File size and API rate limits for the Fireflies API

## Overview

Understanding the limitations of our API is crucial for efficient and uninterrupted usage. Below
you'll find detailed information about the upload limits for different file types and the rate
limits applicable to various subscription plans.

## Upload Limits

The Fireflies API accommodates a range of file sizes for different user types. Here's a breakdown of the maximum file sizes for audio and video uploads:

| Upload Type | Free User Limit | Pro / Business / Enterprise Limit |
| ----------- | --------------- | --------------------------------- |
| Audio Files | Up to 200MB     | Up to 200MB                       |
| Video Files | Up to 100MB     | Up to 1.5GB                       |

### Understanding Upload Limits

* **Audio Files:** All users can upload an audio file no greater than 200MB, ensuring ample capacity for high-quality audio content.
* **Video Files for Free Users:** Free users have a maximum upload limit of 100MB for video files, suitable for short clips and previews.
* **Video Files for Pro/Business/Enterprise Users:** Higher-tier users can upload larger video files up to 1.5GB, accommodating longer and higher resolution content.

## API Rate Limits

To maintain the quality of service and availability for all users, our API enforces rate limits based on the type of subscription plan.

| Plan                  | API Rate Limit      |
| --------------------- | ------------------- |
| Free / Pro            | 50 requests per day |
| Business / Enterprise | 60 requests per min |

### Add to Live API Rate Limit

The Add to Live API has a rate limit of 3 requests per 20 minutes.

### Share Meeting API Rate Limit

The Share Meeting API has a rate limit of 10 requests per hour. Each request supports up to 50 email addresses.

### Navigating API Rate Limits

* **Free and Pro Plans:** These plans are ideal for light to moderate usage, with a cap of 50 API requests per day. This rate is suitable for testing and small-scale applications.
* **Business and Enterprise Plans:** Designed for more demanding use cases, these plans allow up to 60 requests per minute, providing ample capacity for larger applications and higher volume demands.

<strong>
  These limits are in place to ensure optimal performance and fair usage across our platform.
</strong>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Upload Audio" icon="link" href="/graphql-api/mutation/upload-audio">
    Use the API to upload audio to Fireflies.ai
  </Card>

  <Card title="Authorization" icon="link" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: fundamentals_super-admin.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Super Admin

> Fireflies Super Admin with advanced capabilities for querying your data

## Overview

The Super Admin API offers advanced features such as team-wide webhooks and privacy setting bypass, providing enhanced control and flexibility for managing your data. This is only available on the enterprise tier for company admins - [learn more](https://guide.fireflies.ai/hc/en-us/articles/30453010621585-Learn-about-the-Super-Admin-role).

## Super Admin Webhooks

The Super Admin webhook notifies you of all team meetings owned by your team, allowing you to automate workflows, integrate with other tools, and maintain an overview of your team's meetings with a single webhook.

### Setting up Super Admin Webhooks

Follow the steps below to set up the Super Admin webhook:

<Steps>
  <Step>Visit the [Fireflies.ai dashboard settings](https://app.fireflies.ai/settings)</Step>
  <Step>Navigate to the Developer settings tab</Step>
  <Step>Enter a valid https URL in the webhooks field and save</Step>
</Steps>

<Warning>
  It is highly suggested to use [webhook auth](/graphql-api/webhooks) to secure your servers.
</Warning>

### Privacy Settings Bypass

The Super Admin functionality allows you to bypass your team's privacy settings, allowing you to query all data in your team's account.

### Requirements

Super Admin API is only available to teams on the Enterprise plan. [Learn more here](https://guide.fireflies.ai/hc/en-us/articles/30453010621585-Learn-about-the-Super-Admin-role) and reach out to us with questions

## Additional Resources

<CardGroup cols={2}>
  <Card title="Webhooks" icon="link" href="/graphql-api/webhooks">
    Create notifications using webhooks
  </Card>

  <Card title="Authorization" icon="link" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: askfred_overview.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview

> Use AI to intelligently query and analyze your meeting transcripts with natural language

## What is AskFred?

AskFred is Fireflies' AI-powered meeting assistant that lets you ask natural language questions about your meeting transcripts. Query individual meetings or search across multiple meetings to get intelligent, context-aware answers.

<Note>
  **AI Credits Required** — Using AskFred through the API (including `createAskFredThread` and `continueAskFredThread`) requires AI credits. If your account does not have AI credits, you will receive a `require_ai_credits` error. Visit [Upgrade](https://app.fireflies.ai/upgrade) to add AI credits to your plan.
</Note>

### Key Capabilities

**Intelligent Q\&A** - Ask questions in natural language and receive comprehensive answers with smart follow-up suggestions

**Contextual Threads** - Maintain conversations where follow-up questions preserve context from previous exchanges

**Multi-Meeting Analysis** - Query across meetings using filters to identify patterns and aggregate insights

## API Operations

AskFred provides a comprehensive set of GraphQL operations:

### Queries

* [askfred\_threads](/graphql-api/query/askfred-threads) - List all conversation threads
* [askfred\_thread](/graphql-api/query/askfred-thread) - Get specific thread with full history

### Mutations

* [createAskFredThread](/graphql-api/mutation/create-askfred-thread) - Start a new conversation
* [continueAskFredThread](/graphql-api/mutation/continue-askfred-thread) - Add follow-up questions
* [deleteAskFredThread](/graphql-api/mutation/delete-askfred-thread) - Remove threads

## Next Steps

<CardGroup cols={2}>
  <Card title="Quickstart" icon="rocket" href="/askfred/quickstart">
    Create your first thread and start querying meetings
  </Card>

  <Card title="Use Cases" icon="lightbulb" href="/askfred/use-cases">
    Example questions and industry-specific scenarios
  </Card>
</CardGroup>

---

## Source file: askfred_quickstart.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Get started with AskFred in minutes - learn how to create threads and ask questions about your meetings

## Prerequisites

Before you begin, make sure you have:

1. **API Key**: Obtain your API key from [app.fireflies.ai/integrations](https://app.fireflies.ai/integrations/custom/fireflies)
2. **AI Credits**: Your account must have AI credits to use AskFred. Visit [Upgrade](https://app.fireflies.ai/upgrade) to add AI credits to your plan.
3. **Transcript ID** (optional): The ID of a meeting transcript you want to query

<Note>
  If you don't have a transcript ID, you can query across all your meetings using filters. See [Step 3](#step-3-query-across-meetings) below.
</Note>

## Step 1: Create Your First Thread

Start by asking a question about a specific meeting:

<CodeGroup>
  ```graphql GraphQL theme={null}
  mutation CreateThread {
    createAskFredThread(input: {
      query: "What were the main discussion points?",
      transcript_id: "your_transcript_id",
      response_language: "en",
      format_mode: "markdown"
    }) {
      message {
        id
        thread_id
        answer
        suggested_queries
      }
    }
  }
  ```

  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation CreateThread($input: CreateAskFredThreadInput!) { createAskFredThread(input: $input) { message { id thread_id answer suggested_queries } } }",
      "variables": {
        "input": {
          "query": "What were the main discussion points?",
          "transcript_id": "your_transcript_id",
          "response_language": "en",
          "format_mode": "markdown"
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript JavaScript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const mutation = `
    mutation CreateThread($input: CreateAskFredThreadInput!) {
      createAskFredThread(input: $input) {
        message {
          id
          thread_id
          answer
          suggested_queries
        }
      }
    }
  `;

  const variables = {
    input: {
      query: 'What were the main discussion points?',
      transcript_id: 'your_transcript_id',
      response_language: 'en',
      format_mode: 'markdown'
    }
  };

  axios
    .post(url, { query: mutation, variables }, { headers })
    .then(response => {
      console.log(response.data.data.createAskFredThread);
    })
    .catch(error => {
      console.error(error);
    });
  ```

  ```python Python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  mutation = """
  mutation CreateThread($input: CreateAskFredThreadInput!) {
    createAskFredThread(input: $input) {
      message {
        id
        thread_id
        answer
        suggested_queries
      }
    }
  }
  """

  variables = {
      'input': {
          'query': 'What were the main discussion points?',
          'transcript_id': 'your_transcript_id',
          'response_language': 'en',
          'format_mode': 'markdown'
      }
  }

  response = requests.post(
      url,
      json={'query': mutation, 'variables': variables},
      headers=headers
  )

  print(response.json())
  ```
</CodeGroup>

### Response

```json theme={null}
{
  "data": {
    "createAskFredThread": {
      "message": {
        "id": "msg_abc123",
        "thread_id": "thread_xyz789",
        "answer": "The main discussion points were:\n\n1. **Q4 Product Roadmap**: The team reviewed upcoming features...\n2. **Budget Allocation**: Discussion on resource allocation...\n3. **Timeline Concerns**: Several concerns about launch dates...",
        "suggested_queries": [
          "Can you elaborate on the timeline concerns?",
          "What features are prioritized for Q4?",
          "Who raised concerns about the budget?"
        ]
      }
    }
  }
}
```

## Step 2: Ask Follow-up Questions

Continue the conversation with context-aware follow-ups using the `thread_id` from the previous response:

<CodeGroup>
  ```graphql GraphQL theme={null}
  mutation ContinueThread {
    continueAskFredThread(input: {
      thread_id: "thread_xyz789",
      query: "Can you elaborate on the timeline concerns?"
    }) {
      message {
        answer
        suggested_queries
      }
    }
  }
  ```

  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation ContinueThread($input: ContinueAskFredThreadInput!) { continueAskFredThread(input: $input) { message { answer suggested_queries } } }",
      "variables": {
        "input": {
          "thread_id": "thread_xyz789",
          "query": "Can you elaborate on the timeline concerns?"
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript JavaScript theme={null}
  const variables = {
    input: {
      thread_id: 'thread_xyz789',
      query: 'Can you elaborate on the timeline concerns?'
    }
  };

  const mutation = `
    mutation ContinueThread($input: ContinueAskFredThreadInput!) {
      continueAskFredThread(input: $input) {
        message {
          answer
          suggested_queries
        }
      }
    }
  `;

  axios.post(url, { query: mutation, variables }, { headers })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  ```

  ```python Python theme={null}
  variables = {
      'input': {
          'thread_id': 'thread_xyz789',
          'query': 'Can you elaborate on the timeline concerns?'
      }
  }

  mutation = """
  mutation ContinueThread($input: ContinueAskFredThreadInput!) {
    continueAskFredThread(input: $input) {
      message {
        answer
        suggested_queries
      }
    }
  }
  """

  response = requests.post(
      url,
      json={'query': mutation, 'variables': variables},
      headers=headers
  )

  print(response.json())
  ```
</CodeGroup>

## Step 3: Query Across Meetings

Analyze patterns across multiple meetings using filters:

<CodeGroup>
  ```graphql GraphQL theme={null}
  mutation CrossMeetingAnalysis {
    createAskFredThread(input: {
      query: "What customer concerns were raised this month?",
      filters: {
        start_time: "2024-03-01T00:00:00Z",
        end_time: "2024-03-31T23:59:59Z",
        participants: ["customer@example.com"]
      }
    }) {
      message {
        answer
        suggested_queries
      }
    }
  }
  ```

  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation CrossMeetingAnalysis($input: CreateAskFredThreadInput!) { createAskFredThread(input: $input) { message { answer suggested_queries } } }",
      "variables": {
        "input": {
          "query": "What customer concerns were raised this month?",
          "filters": {
            "start_time": "2024-03-01T00:00:00Z",
            "end_time": "2024-03-31T23:59:59Z",
            "participants": ["customer@example.com"]
          }
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```
</CodeGroup>

<Note>
  For more details on available filters and parameters, see the [createAskFredThread](/graphql-api/mutation/create-askfred-thread) documentation.
</Note>

## Step 4: List Your Threads

Retrieve all your conversation threads:

<CodeGroup>
  ```graphql GraphQL theme={null}
  query GetThreads {
    askfred_threads {
      id
      title
      transcript_id
      created_at
    }
  }
  ```

  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "query { askfred_threads { id title transcript_id created_at } }"
    }' \
    https://api.fireflies.ai/graphql
  ```
</CodeGroup>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Explore Use Cases" icon="lightbulb" href="/askfred/use-cases">
    Discover common scenarios and example questions
  </Card>

  <Card title="API Reference" icon="book" href="/graphql-api/mutation/create-askfred-thread">
    Explore all available parameters and options
  </Card>
</CardGroup>

---

## Source file: askfred_use-cases.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Use Cases

> Common use cases and example questions for AskFred - meeting summaries, action items, decisions, and more

## Overview

AskFred can help you extract insights from your meetings across a wide range of use cases. This page provides practical examples of questions you can ask for different scenarios.

## Common Use Cases

<AccordionGroup>
  <Accordion title="Meeting Summaries" icon="file-lines">
    Extract quick overviews and highlights from your meetings.

    **Example Questions:**

    * "Provide a brief summary of this meeting"
    * "What were the key takeaways?"
    * "Give me the highlights in 3 bullet points"
    * "Summarize the discussion about the product launch"
    * "What was the meeting about in one sentence?"

    **Best for:**

    * Daily standups
    * Client meetings
    * Team retrospectives
    * Board meetings
  </Accordion>

  <Accordion title="Action Item Tracking" icon="list-check">
    Identify tasks, responsibilities, and deliverables.

    **Example Questions:**

    * "What action items were assigned?"
    * "What are my action items from this week's meetings?"
    * "Who is responsible for the product roadmap?"
    * "List all open tasks and their owners"
    * "What are the deadlines mentioned in this meeting?"
    * "What tasks were assigned to the engineering team?"

    **Best for:**

    * Sprint planning
    * Project kickoffs
    * Weekly team syncs
    * Customer success calls
  </Accordion>

  <Accordion title="Decision Documentation" icon="gavel">
    Track important decisions and their rationale.

    **Example Questions:**

    * "What decisions were made about the budget?"
    * "What was decided regarding the new feature?"
    * "List all decisions with their rationales"
    * "What was the outcome of the pricing discussion?"
    * "Who made the final decision on the launch date?"
    * "What alternatives were considered before the decision?"

    **Best for:**

    * Strategy meetings
    * Leadership discussions
    * Product planning
    * Architecture reviews
  </Accordion>

  <Accordion title="Participant Insights" icon="users">
    Understand individual contributions and perspectives.

    **Example Questions:**

    * "What did John contribute to the discussion?"
    * "What concerns did the customer raise?"
    * "Summarize the CEO's main points"
    * "What feedback did the design team provide?"
    * "What questions did stakeholders ask?"
    * "Who disagreed with the proposal and why?"

    **Best for:**

    * Performance reviews
    * Client feedback analysis
    * Team collaboration assessment
    * Stakeholder management
  </Accordion>

  <Accordion title="Cross-Meeting Analysis" icon="chart-line">
    Identify patterns and trends across multiple meetings.

    **Example Questions:**

    * "How has customer sentiment changed over the last month?"
    * "What topics have been discussed most frequently?"
    * "Track the progress of Project X across all meetings"
    * "What are recurring issues in sprint retrospectives?"
    * "How has the team's velocity changed this quarter?"
    * "What concerns keep coming up in client calls?"

    **Best for:**

    * Quarterly reviews
    * Customer health monitoring
    * Team performance tracking
    * Product roadmap planning
  </Accordion>

  <Accordion title="Information Extraction" icon="filter">
    Pull specific data points and details from meetings.

    **Example Questions:**

    * "Extract all mentioned dates and deadlines"
    * "List all metrics and KPIs discussed"
    * "What tools or technologies were mentioned?"
    * "Find all budget figures discussed"
    * "What email addresses or contact information was shared?"
    * "What URLs or resources were mentioned?"

    **Best for:**

    * Meeting notes compilation
    * Documentation updates
    * Contact management
    * Resource tracking
  </Accordion>
</AccordionGroup>

## Industry-Specific Examples

<Accordion title="Sales Use Cases" icon="hand shake">
  **Discovery Calls:**

  * "What pain points did the prospect mention?"
  * "What is their current solution and why are they looking to change?"
  * "What is their timeline for making a decision?"

  **Deal Reviews:**

  * "What objections were raised during the demo?"
  * "Who are the decision-makers mentioned?"
  * "What competitive solutions are they considering?"

  **Pipeline Analysis:**

  * "What deals progressed this week?"
  * "What common objections are we seeing across calls?"
  * "Which prospects mentioned budget concerns?"
</Accordion>

<Accordion title="Product Use Cases" icon="box">
  **Feature Discussions:**

  * "What user problems are we trying to solve?"
  * "What alternatives did we consider?"
  * "What were the technical constraints mentioned?"

  **Roadmap Planning:**

  * "What features were prioritized for next quarter?"
  * "What customer feedback influenced our decisions?"
  * "What dependencies were identified?"

  **User Research:**

  * "What frustrations did users mention?"
  * "What features did users request most?"
  * "How do users currently solve this problem?"
</Accordion>

<Accordion title="Customer Success Use Cases" icon="headset">
  **Onboarding:**

  * "What questions did the customer ask during onboarding?"
  * "What features are they most interested in?"
  * "What integration requirements did they mention?"

  **Health Monitoring:**

  * "What concerns has the customer raised recently?"
  * "How has their sentiment changed over time?"
  * "What success metrics are they tracking?"

  **Escalations:**

  * "What issues were reported in the last month?"
  * "How quickly were problems resolved?"
  * "What patterns exist in customer complaints?"
</Accordion>

<Accordion title="Engineering Use Cases" icon="code">
  **Technical Planning:**

  * "What technical decisions were made?"
  * "What are the architectural concerns?"
  * "What dependencies block this feature?"

  **Sprint Retrospectives:**

  * "What went well this sprint?"
  * "What blockers did the team face?"
  * "What process improvements were suggested?"

  **Code Reviews:**

  * "What security concerns were raised?"
  * "What performance considerations were discussed?"
  * "What refactoring opportunities were identified?"
</Accordion>

## Advanced Query Patterns

### Time-Based Analysis

```graphql theme={null}
mutation TimeBasedQuery {
  createAskFredThread(input: {
    query: "How have customer satisfaction levels changed since last quarter?",
    filters: {
      start_time: "2024-01-01T00:00:00Z",
      end_time: "2024-03-31T23:59:59Z"
    }
  }) {
    message { answer }
  }
}
```

### Participant-Focused Queries

```graphql theme={null}
mutation ParticipantQuery {
  createAskFredThread(input: {
    query: "What feedback has the executive team provided on our product strategy?",
    filters: {
      participants: ["ceo@company.com", "cto@company.com"],
      start_time: "2024-03-01T00:00:00Z"
    }
  }) {
    message { answer }
  }
}
```

### Topic Tracking

```graphql theme={null}
mutation TopicTracking {
  createAskFredThread(input: {
    query: "Track all discussions about the new pricing model",
    filters: {
      start_time: "2024-01-01T00:00:00Z"
    }
  }) {
    message { answer suggested_queries }
  }
}
```

## Additional Resources

<CardGroup cols={2}>
  <Card title="AskFred Overview" icon="circle-info" href="/askfred/overview">
    Learn about AskFred's key capabilities
  </Card>

  <Card title="API Reference" icon="book" href="/graphql-api/mutation/create-askfred-thread">
    Explore all available parameters and options
  </Card>
</CardGroup>

---

## Source file: examples_overview.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview

> Library of API usecases

## Overview

This part of the documentation is designed to provide developers with practical insights into integrating and maximizing the Fireflies.ai API in various applications.

By visiting our Replit page at Fireflies.ai on Replit, you can directly access and interact with these examples, making your learning process interactive and engaging.

## Fireflies.ai Replit

Explore a wide array of examples where we have created code snippets that allows you to interact with the Fireflies API.

To view, please visit [replit.com/@firefliesai](https://replit.com/@firefliesai)

You can also view the list of examples at the links [Basic examples](/examples/basic) and [Advanced examples](/examples/advanced)

## Additional Resources

<CardGroup cols={2}>
  <Card title="Basic examples" icon="link" href="/examples/basic">
    Basic usage examples
  </Card>

  <Card title="Advanced examples" icon="link" href="/examples/advanced">
    Advanced usage examples
  </Card>
</CardGroup>

---

## Source file: examples_basic.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Basic

> Library of basic usage examples

## Overview

Explore basic usage examples for the Fireflies.ai API to get you started quickly. These basic usage examples simplify interact with the API through Javascript code.

## Basic examples

Basic examples that allow you to perform basic operations with the Fireflies.ai API, like fetching transcripts or setting user role.

1. [Create soundbite from meeting](https://replit.com/@firefliesai/Firefliesai-Create-soundbite-from-a-meeting?v=1)
2. [Set user role](https://replit.com/@firefliesai/Firefliesai-Set-user-role?v=1)
3. [Upload audio](https://replit.com/@firefliesai/Firefliesai-Upload-audio?v=1)
4. [Download meeting video](https://replit.com/@firefliesai/Firefliesai-Download-video-from-meeting?v=1)
5. [Get audio/video url](https://replit.com/@firefliesai/Firefliesai-Get-audiovideo-url?v=1)
6. [Get transcript summary](https://replit.com/@firefliesai/Firefliesai-Get-transcript-summary-from-a-meeting?v=1)

## Fireflies.ai Replit

Explore the complete list of usage examples at [replit.com/@firefliesai](https://replit.com/@firefliesai)

## Additional Resources

<CardGroup cols={2}>
  <Card title="Advanced examples" icon="link" href="/examples/advanced">
    Advanced usage examples
  </Card>

  <Card title="Quickstart" icon="link" href="/getting-started/quickstart">
    Make your first request in under 5 minutes
  </Card>
</CardGroup>

---

## Source file: examples_advanced.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Advanced

> Library of advanced usage examples

## Overview

Explore advanced usage examples that build on top of the Fireflies.ai API. This page is regularly updated

### [Find questions from external participants](https://replit.com/@firefliesai/Firefliesai-Find-questions-from-external-participants?v=1)

This replit allows you to query questions asked by participants who do not belong to your organization. It can be useful in deriving insights and analysis for client calls, interviews, etc.

### [Fetch meetings from multiple users](https://replit.com/@firefliesai/Firefliesai-Fetch-meetings-for-multiple-users?v=1)

This replit allows you to fetch meetings from multiple users by providing it a list of API keys. Please read our privacy policy and terms of usage for more details

### [Verify webhook requests](https://replit.com/@firefliesai/Firefliesai-Verifying-webhook-requests?v=1)

This replit allows you to verify webhook requests by checking the signature and the payload.

## Fireflies.ai Replit

Explore the complete list of usage examples at [replit.com/@firefliesai](https://replit.com/@firefliesai)

## Additional Resources

<CardGroup cols={2}>
  <Card title="Basic examples" icon="link" href="/examples/basic">
    Basic usage examples
  </Card>

  <Card title="Webhooks" icon="link" href="/graphql-api/webhooks">
    Create notifications using webhooks
  </Card>
</CardGroup>

---

## Source file: graphql-api_webhooks.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Webhooks

> Webhook events for the Fireflies.ai API

## Overview

Webhooks enable your application to set up event based notifications. In this section, you'll learn how to configure webhooks to receive updates from Fireflies.

## Events supported

The webhooks support the following events:

* Transcription complete: Triggers when a meeting has been processed and the transcript is ready for viewing

<Note>
  Fireflies sends webhook notifications as POST requests to your specified endpoint. Each request
  contains a JSON payload with information about the event that occurred.
</Note>

## Saving a webhook

Follow the instructions below to save a webhook URL that sends notifications for all subscribed events. This webhook will only be fired for meetings that you own.

<Steps>
  <Step>Visit the [Fireflies.ai dashboard settings](https://app.fireflies.ai/settings)</Step>
  <Step>Navigate to the Developer settings tab</Step>
  <Step>Enter a valid https URL in the webhooks field and save</Step>
</Steps>

You may test your webhook using the upload audio API or by uploading through the dashboard at [app.fireflies.ai/upload](https://app.fireflies.ai/upload)

## Upload audio webhook

You can also include a webhook URL as part of an upload audio request. This is different from the saved webhook as it will only send notifications for that singular audio upload request.

<CodeGroup>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation($input: AudioUploadInput) { uploadAudio(input: $input) { success title message } }",
      "variables": {
        "input": {
          "url": "https://url_to_the_audio_file",
          "title": "title of the file",
          "webhook": "https://url_for_the_webhook"
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const input = {
    url: 'https://url_to_the_audio_file',
    title: 'title of the file',
    webhook: 'https://url_for_the_webhook'
  };
  const data = {
    query: `       mutation($input: AudioUploadInput) {
          uploadAudio(input: $input) {
            success
            title
            message
          }
        }
      `,
    variables: { input }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  input_data = {
  	"url": "https://url_for_audio_file",
  	"title": "title of the file",
  	"webhook": "https://url_for_the_webhook"
  }

  data = {
  	'query': '''
  		mutation($input: AudioUploadInput) {
  			uploadAudio(input: $input) {
  				success
  				title
  				message
  			}
  		}
  	''',
  	'variables': {'input': input_data}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
  public static void main(String[] args) throws IOException, InterruptedException {
  HttpClient client = HttpClient.newHttpClient();

  	String json = "{"
  		+ "\"query\":\"mutation($input: AudioUploadInput) { uploadAudio(input: $input) { success title message } }\","
  		+ "\"variables\":{"
  		+ "\"input\": {"
  			+ "\"url\":\"https://url_for_audio_file.com\","
  			+ "\"title\":\"title of the file\","
  			+ "\"webhook\":\"https://url_for_the_webhook\""
  		+ "}"
  		+ "}"
  	+ "}";


  	HttpRequest request = HttpRequest.newBuilder()
  			.uri(URI.create("https://api.fireflies.ai/graphql"))
  			.header("Content-Type", "application/json")
  			.header("Authorization", "Bearer your_api_key")
  			.POST(BodyPublishers.ofString(json))
  			.build();

  	client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
  		.thenApply(HttpResponse::body)
  		.thenAccept(System.out::println)
  		.join();
      }

  }
  ```
</CodeGroup>

## Webhook Authentication

Webhook authentication ensures that incoming webhook requests are securely verified before processing. This allows consumers to trust that webhook events originate from a secure and verified source.

### How It Works

Each webhook request sent from the server includes an `x-hub-signature` header containing a SHA-256 HMAC signature of the request payload. This signature is generated using a secret key known only to the server and your application.

When the consumer receives a webhook, they can use the signature provided in the `x-hub-signature` header to verify that the request has not been tampered with. This is done by computing their own HMAC signature using the shared secret key and comparing it to the signature included in the header.

### Saving a secret

1. Go to the settings page at [app.fireflies.ai/settings](https://app.fireflies.ai/settings)
2. Navigate to the **Developer Settings** tab
3. You can either:
   * Enter a custom secret key of 16-32 characters in the input field
   * Click on the refresh button to generate a random secret key
4. Click Save to ensure the secret gets updated
5. Make sure to store this secret key securely, as it will be used to authenticate incoming webhook requests

### Verifying the Signature

1. **Receive the Webhook**:

   * Each request will include the payload and an `x-hub-signature` header

2. **Verify the Signature**:
   * Compute the HMAC SHA-256 signature using the payload and the shared secret key
   * Compare the computed signature to the `x-hub-signature` header value
   * If they match, the request is verified as authentic. If they do not match, treat the request with caution or reject it

By verifying webhook signatures, consumers can ensure that webhook events received are secure and have not been altered during transmission

### See it in action

To see webhook authentication in action, you can view an example at [Fireflies.ai Verifying Webhook Requests](https://replit.com/@firefliesai/Firefliesai-Verifying-webhook-requests#index.js). This example demonstrates how to receive a webhook, compute the HMAC SHA-256 signature, and verify it against the `x-hub-signature` header to ensure the request's authenticity.

## Webhook Schema

<ParamField path="meetingId" type="String" required>
  Identifier for the meeting / transcript that the webhook has triggered for. MeetingId and
  TranscriptId are used interchangeably for the Fireflies.ai Platform.
</ParamField>

<ParamField path="eventType" type="String">
  Name of the event type that has been fired against the webhook
</ParamField>

<ParamField path="clientReferenceId" type="ID">
  Custom identifier set by the user during upload. You may use this to identify your uploads in your
  events.
</ParamField>

## Example Payload

```json theme={null}
{
  "meetingId": "ASxwZxCstx",
  "eventType": "Transcription completed",
  "clientReferenceId": "be582c46-4ac9-4565-9ba6-6ab4264496a8"
}
```

## FAQ

<Accordion title="Why am I not receiving webhook requests">
  <p>There may be multiple reasons why you are not receiving webhook requests. Please go through the following checklist:</p>

  <ul>
    <li>Webhooks are only fired for meeting owners, referred to in the API as the `organizer_email.` Ensure that you have correctly setup the webhooks for the meeting owner.</li>
    <li>Ensure that your webhook is setup as a POST request</li>
    <li>If you have setup secret verification, ensure that you are correctly verifying the request by checking the example implementation [here](https://replit.com/@firefliesai/Firefliesai-Verifying-webhook-requests?v=1).</li>
  </ul>

  <p>Team-wide webhooks are only supported for the Enterprise tier with the Super Admin role. This allows you to setup one webhook for all meetings owned by your team. Details [here](/fundamentals/super-admin).</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Super Admin" icon="link" href="/fundamentals/super-admin">
    Fireflies Super Admin with advanced capabilities
  </Card>

  <Card title="Upload Audio" icon="link" href="/graphql-api/mutation/upload-audio">
    Use the API to upload audio to Fireflies.ai
  </Card>
</CardGroup>

---

## Source file: graphql-api_webhooks-v2.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Webhooks V2

> Configure event-driven webhooks with granular event subscriptions using Webhooks V2

## Overview

Webhooks V2 provides an improved webhook system with granular event subscriptions and enhanced security. You can subscribe to specific meeting lifecycle events and receive real-time notifications at your configured endpoint.

<Note>
  Webhooks V2 replaces the legacy webhook system. If you are currently using [Webhooks V1](/graphql-api/webhooks), we recommend migrating to V2 for a better experience.
</Note>

## Events Supported

Webhooks V2 supports the following events:

| Event Name            | Description                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| `meeting.transcribed` | Triggers when a meeting has been transcribed and the transcript is ready |
| `meeting.summarized`  | Triggers when a meeting summary has been generated                       |

<Note>
  You can subscribe to one or more events per webhook. Only events you subscribe to will be delivered.
</Note>

## Setting Up Webhooks V2

<Steps>
  <Step>Visit the [Webhooks V2 configuration page](https://app.fireflies.ai/integrations/api/webhook)</Step>
  <Step>Enter a valid HTTPS URL that accepts POST requests in the **Webhook URL** field</Step>
  <Step>Optionally, enter a **Signing Secret** for payload signature verification</Step>
  <Step>Select the **events** you want to subscribe to</Step>
  <Step>Save your configuration</Step>
</Steps>

## Webhook Payload

Each webhook notification is sent as a `POST` request with a JSON payload containing the following fields:

<ParamField path="event" type="String" required>
  The event type that triggered the webhook (e.g., `meeting.transcribed`, `meeting.summarized`)
</ParamField>

<ParamField path="timestamp" type="Number" required>
  Unix timestamp in milliseconds indicating when the event was fired
</ParamField>

<ParamField path="meeting_id" type="String" required>
  Identifier for the meeting that the event relates to. This is the same as the transcript ID used throughout the Fireflies API.
</ParamField>

<ParamField path="client_reference_id" type="String">
  Custom identifier set by you during upload. Use this to correlate webhook events with your uploads.
</ParamField>

### Example Payloads

**Meeting Transcribed**

```json theme={null}
{
  "event": "meeting.transcribed",
  "timestamp": 1710876543210,
  "meeting_id": "ASxwZxCstx",
  "client_reference_id": "be582c46-4ac9-4565-9ba6-6ab4264496a8"
}
```

**Meeting Summarized**

```json theme={null}
{
  "event": "meeting.summarized",
  "timestamp": 1710876789456,
  "meeting_id": "ASxwZxCstx"
}
```

## Webhook Authentication

Webhooks V2 uses HMAC-SHA256 signatures to verify that webhook payloads originate from Fireflies and have not been tampered with in transit.

### How It Works

Each webhook request includes an `X-Hub-Signature` header containing a SHA-256 HMAC signature of the request body. The signature is computed using the signing secret you configured during setup.

The signature format is:

```
sha256=<hex-encoded-hmac-sha256-digest>
```

### Verifying the Signature

<Steps>
  <Step>Extract the `X-Hub-Signature` header from the incoming request</Step>
  <Step>Compute the HMAC-SHA256 digest of the raw request body using your signing secret</Step>
  <Step>Prefix the hex-encoded digest with `sha256=`</Step>
  <Step>Compare the computed signature with the header value using a timing-safe comparison</Step>
</Steps>

### Verification Examples

<CodeGroup>
  ```javascript node.js theme={null}
  const crypto = require('crypto');

  function verifyWebhookSignature(payload, signature, secret) {
    const expectedSignature =
      'sha256=' +
      crypto.createHmac('sha256', secret).update(payload, 'utf8').digest('hex');

    const sigBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expectedSignature);

    if (sigBuffer.length !== expectedBuffer.length) {
      return false;
    }

    return crypto.timingSafeEqual(sigBuffer, expectedBuffer);
  }

  // Express.js example
  app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
    const signature = req.headers['x-hub-signature'];
    const payload = req.body.toString();

    if (!verifyWebhookSignature(payload, signature, 'your_signing_secret')) {
      return res.status(401).send('Invalid signature');
    }

    const event = JSON.parse(payload);
    console.log('Received event:', event.event, 'for meeting:', event.meeting_id);

    res.status(200).send('OK');
  });
  ```

  ```python python theme={null}
  import hmac
  import hashlib
  from flask import Flask, request

  app = Flask(__name__)

  def verify_webhook_signature(payload, signature, secret):
      expected = 'sha256=' + hmac.new(
          secret.encode('utf-8'),
          payload,
          hashlib.sha256
      ).hexdigest()

      return hmac.compare_digest(expected, signature)

  @app.route('/webhook', methods=['POST'])
  def webhook():
      signature = request.headers.get('X-Hub-Signature', '')
      payload = request.get_data()

      if not verify_webhook_signature(payload, signature, 'your_signing_secret'):
          return 'Invalid signature', 401

      event = request.get_json()
      print(f"Received event: {event['event']} for meeting: {event['meeting_id']}")

      return 'OK', 200
  ```

  ```java java theme={null}
  import javax.crypto.Mac;
  import javax.crypto.spec.SecretKeySpec;
  import java.security.MessageDigest;

  public class WebhookVerifier {

      public static boolean verifySignature(String payload, String signature, String secret)
              throws Exception {
          Mac mac = Mac.getInstance("HmacSHA256");
          mac.init(new SecretKeySpec(secret.getBytes("UTF-8"), "HmacSHA256"));

          byte[] hash = mac.doFinal(payload.getBytes("UTF-8"));
          StringBuilder hex = new StringBuilder();
          for (byte b : hash) {
              hex.append(String.format("%02x", b));
          }

          String expected = "sha256=" + hex.toString();
          return MessageDigest.isEqual(
              expected.getBytes("UTF-8"),
              signature.getBytes("UTF-8")
          );
      }
  }
  ```
</CodeGroup>

## Request Headers

Each webhook delivery includes the following headers:

| Header            | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `Content-Type`    | `application/json`                                             |
| `User-Agent`      | `Fireflies-Webhook/1.0`                                        |
| `X-Hub-Signature` | HMAC-SHA256 signature (only if a signing secret is configured) |

## Delivery Behavior

* Webhooks are sent as `POST` requests to your configured URL
* Your endpoint must respond with a `2xx` status code within **10 seconds** to be considered successful
* If your endpoint does not respond in time or returns a non-`2xx` status code, the delivery is marked as failed

## Migrating from Webhooks V1

If you are using the legacy webhooks system, here is a summary of the key differences:

| Feature          | Webhooks V1                              | Webhooks V2                                                               |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| Configuration    | Developer Settings page                  | [Dedicated setup page](https://app.fireflies.ai/integrations/api/webhook) |
| Events           | Single event (`Transcription completed`) | Multiple events (`meeting.transcribed`, `meeting.summarized`)             |
| Event selection  | All events                               | Granular event subscriptions                                              |
| Payload format   | `meetingId`, `eventType`                 | `meeting_id`, `event`, `timestamp`                                        |
| Signature header | `X-Hub-Signature`                        | `X-Hub-Signature`                                                         |
| Signature format | `sha256=<hex>`                           | `sha256=<hex>`                                                            |

### Migration Steps

<Steps>
  <Step>Go to the [Webhooks V2 setup page](https://app.fireflies.ai/integrations/api/webhook)</Step>
  <Step>Enter your existing webhook URL</Step>
  <Step>If you used a signing secret, enter it in the **Signing Secret** field</Step>
  <Step>Select the events you want to subscribe to (choose `meeting.transcribed` for equivalent V1 behavior)</Step>
  <Step>Save and update your webhook consumer to handle the new payload format and signature header</Step>
</Steps>

## FAQ

<Accordion title="What is the difference between meeting.transcribed and meeting.summarized?">
  `meeting.transcribed` fires when the raw transcript is ready and available for viewing. `meeting.summarized` fires after the AI-generated summary (including action items, notes, and other insights) has been processed.
</Accordion>

<Accordion title="Can I subscribe to multiple events?">
  Yes. You can select one or more events during setup. Only events you subscribe to will trigger webhook deliveries.
</Accordion>

<Accordion title="Why am I not receiving webhook notifications?">
  <ul>
    <li>Webhooks are only fired for meetings you own (i.e., you are the <code>organizer\_email</code>).</li>
    <li>Ensure your endpoint accepts POST requests and responds with a 2xx status code within 10 seconds.</li>
    <li>Verify that you have subscribed to the correct events.</li>
    <li>If using signature verification, ensure your signing secret matches what is configured.</li>
  </ul>
</Accordion>

<Accordion title="Do I need to migrate from Webhooks V1?">
  Webhooks V1 continues to work. However, V2 offers granular event subscriptions, so we recommend migrating when convenient.
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Webhooks V1" icon="link" href="/graphql-api/webhooks">
    Legacy webhook documentation
  </Card>

  <Card title="Upload Audio" icon="link" href="/graphql-api/mutation/upload-audio">
    Use the API to upload audio to Fireflies.ai
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_transcript.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Transcript

> Querying transcript details

## Overview

The transcript query is designed to fetch details associated with a specific transcript ID.

## Arguments

<ParamField path="id" type="String" required />

## Schema

Fields available to the [Transcript](/schema/transcript) query

## Usage Example

```graphql theme={null}
query Transcript($transcriptId: String!) {
  transcript(id: $transcriptId) {
    id
    dateString
    privacy
    analytics {
      sentiments {
        negative_pct
        neutral_pct
        positive_pct
      }
      categories {
        questions
        date_times
        metrics
        tasks
      }
      speakers {
        speaker_id
        name
        duration
        word_count
        longest_monologue
        monologues_count
        filler_words
        questions
        duration_pct
        words_per_minute
      }
    }
    speakers {
      id
      name
    }
    sentences {
      index
      speaker_name
      speaker_id
      text
      raw_text
      start_time
      end_time
      ai_filters {
        task
        pricing
        metric
        question
        date_and_time
        text_cleanup
        sentiment
      }
    }
    title
    host_email
    organizer_email
    calendar_id
    user {
      user_id
      email
      name
      num_transcripts
      recent_meeting
      minutes_consumed
      is_admin
      integrations
    }
    fireflies_users
    participants
    date
    transcript_url
    audio_url
    video_url
    duration
    meeting_attendees {
      displayName
      email
      phoneNumber
      name
      location
    }
    meeting_attendance {
      name
      join_time
      leave_time
    }
    summary {
      keywords
      action_items
      outline
      shorthand_bullet
      overview
      bullet_gist
      gist
      short_summary
      short_overview
      meeting_type
      topics_discussed
      transcript_chapters
    }
    cal_id
    calendar_type
    meeting_info {
      fred_joined
      silent_meeting
      summary_status
    }
    apps_preview {
      outputs {
        transcript_id
        user_id
        app_id
        created_at
        title
        prompt
        response
      }
    }
    meeting_link
    is_live
    channels {
      id
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	--data '{ "query": "query Transcript($transcriptId: String!) { transcript(id: $transcriptId) { title id } }", "variables": { "transcriptId": "your_transcript_id" } }' \
  	https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: 'query Transcript($transcriptId: String!) { transcript(id: $transcriptId) { title id } }',
    variables: { transcriptId: 'your_transcript_id' }
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = '{"query": "query Transcript($transcriptId: String!) { transcript(id: $transcriptId) { title id } }", "variables": {"transcriptId": "your_transcript_id"}}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"query Transcript($transcriptId: String!) { transcript(id: $transcriptId) { title id } }\", \"variables\": {\"transcriptId\": \"your_transcript_id\"}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "transcript": {
        "title": "Weekly sync",
        "id": "transcript-id",
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `transcript` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found (transcript)">
  <p>The transcript ID you are trying to query does not exist or you do not have access to it.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcripts" icon="link" href="/graphql-api/query/transcripts">
    Querying list of transcripts
  </Card>

  <Card title="Update Meeting Title" icon="link" href="/graphql-api/mutation/update-meeting-title">
    Use the API to update meeting titles
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_transcripts.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Transcripts

> Querying list of transcripts

## Overview

The transcripts query is designed to fetch a list of transcripts against input arguments.

## Arguments

<ParamField path="title" type="String">
  <b>This field is deprecated. Please use `keyword` instead.</b>

  Title of the transcript

  This argument is mutually exclusive with `keyword` field

  The maximum allowable length for this field is `256` characters.
</ParamField>

<ParamField path="keyword" type="String">
  Allows searching for keywords in meeting title and/or words spoken during the meeting

  This argument is mutually exclusive with `title` field

  The maximum allowable length for this field is `255` characters.
</ParamField>

<ParamField path="scope" type="TranscriptsQueryScope">
  Specify the scope for keyword search.

  If scope is provided, `keyword` becomes a required field

  Defaults to `TITLE` if no value is provided

  The available options for this field are:

  * `title`: Search within the title.
  * `sentences`: Search within the [sentences](/schema/sentence).
  * `all`: Search within title and sentences.
</ParamField>

<ParamField path="fromDate" type="DateTime">
  Return all transcripts created after `fromDate`. The `fromDate` parameter accepts a date-time
  string in the ISO 8601 format, specifically in the form `YYYY-MM-DDTHH:mm.sssZ`. For example, a
  valid timestamp would be `2024-07-08T22:13:46.660Z`.
</ParamField>

<ParamField path="toDate" type="DateTime">
  Return all transcripts created before `toDate`. The `toDate` parameter accepts a date-time string
  in the ISO 8601 format, specifically in the form `YYYY-MM-DDTHH:mm.sssZ`. For example, a valid
  timestamp would be `2024-07-08T22:13:46.660Z`.
</ParamField>

<ParamField path="date" type="Float">
  <b> This field is deprecated. Please use `fromDate` and `toDate` instead.</b>

  Return all transcripts created within the date specified. Query input value must be in milliseconds.
  For example, you can use the JavaScript `new Date().getTime()` to get the datetime in milliseconds
  which should look like this `1621292557453`. The timezone for this field is UTC +00:00

  For more details regarding time since [EPOCH](https://currentmillis.com/)
</ParamField>

<ParamField path="limit" type="Int">
  Number of transcripts to return. Maxiumum 50 in one query
</ParamField>

<ParamField path="skip" type="Int">
  Number of transcripts to skip.
</ParamField>

<ParamField path="host_email" type="String">
  Filter all meetings accordingly to meetings that have this email as the host.
</ParamField>

<ParamField path="organizer_email" type="String">
  <b>This field is deprecated. Please use `organizers` instead.</b>
  Filter meetings that have this email as the organizer.
</ParamField>

<ParamField path="participant_email" type="String">
  <b>This field is deprecated. Please use `participants` instead.</b>
  Filter meetings that contain this email as an attendee.
</ParamField>

<ParamField path="user_id" type="String">
  [User id](/schema/user). Filter all meetings that have this user ID as the organizer or participant.
</ParamField>

<ParamField path="mine" type="Boolean">
  Filter all meetings that have the API key owner as the organizer.
</ParamField>

<ParamField path="organizers" type="[String]">
  Filter meetings that have any of these emails as organizers. Accepts an array of email addresses.

  Cannot be combined with the deprecated `organizer_email` or `participant_email` fields.

  Each email must be valid and 256 characters or fewer.
</ParamField>

<ParamField path="participants" type="[String]">
  Filter meetings that contain any of these emails as attendees. Accepts an array of email addresses.

  Cannot be combined with the deprecated `organizer_email` or `participant_email` fields.

  Each email must be valid and 256 characters or fewer.
</ParamField>

<ParamField path="channel_id" type="String">
  Filter meetings that belong to a specific channel. Accepts a single channel ID.

  The channel ID must be a valid string and 256 characters or fewer.
</ParamField>

## Schema

Fields available to the [Transcript](/schema/transcript) query

## Usage Example

```graphql theme={null}
query Transcripts(
  $title: String
  $date: Float
  $limit: Int
  $skip: Int
  $hostEmail: String
  $participantEmail: String
  $organizers: [String]
  $participants: [String]
  $userId: String
  $channelId: String
) {
  transcripts(
    title: $title
    date: $date
    limit: $limit
    skip: $skip
    host_email: $hostEmail
    participant_email: $participantEmail
    organizers: $organizers
    participants: $participants
    user_id: $userId
    channel_id: $channelId
  ) {
    id
    analytics {
      sentiments {
        negative_pct
        neutral_pct
        positive_pct
      }
      categories {
        questions
        date_times
        metrics
        tasks
      }
      speakers {
        speaker_id
        name
        duration
        word_count
        longest_monologue
        monologues_count
        filler_words
        questions
        duration_pct
        words_per_minute
      }
    }
    sentences {
      index
      speaker_name
      speaker_id
      text
      raw_text
      start_time
      end_time
      ai_filters {
        task
        pricing
        metric
        question
        date_and_time
        text_cleanup
        sentiment
      }
    }
    title
    speakers {
      id
      name
    }
    host_email
    organizer_email
    meeting_info {
      fred_joined
      silent_meeting
      summary_status
    }
    calendar_id
    user {
      user_id
      email
      name
      num_transcripts
      recent_meeting
      minutes_consumed
      is_admin
      integrations
    }
    fireflies_users
    participants
    date
    transcript_url
    audio_url
    video_url
    duration
    meeting_attendees {
      displayName
      email
      phoneNumber
      name
      location
    }
    meeting_attendance {
      name
      join_time
      leave_time
    }
    summary {
      keywords
      action_items
      outline
      shorthand_bullet
      overview
      bullet_gist
      gist
      short_summary
      short_overview
      meeting_type
      topics_discussed
      transcript_chapters
    }
    cal_id
    calendar_type
    apps_preview {
      outputs {
        transcript_id
        user_id
        app_id
        created_at
        title
        prompt
        response
      }
    }
    meeting_link
    is_live
    channels {
      id
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer your_api_key" \
      --data '{ "query": "query Transcripts($userId: String) { transcripts(user_id: $userId) { title id } }" }' \
      https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: 'query Transcripts($userId: String) { transcripts(user_id: $userId) { title id } }',
    variables: { userId: 'your_user_id' }
  };
  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = '{"query": "query Transcripts($userId: String) { transcripts(user_id: $userId) { title id } }", "variables": {"userId": "user_id"}}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
      public static void main(String[] args) throws Exception {
          HttpClient client = HttpClient.newHttpClient();
          String json = "{\"query\":\"query Transcripts { transcripts { title id } } \"}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "transcripts": [
  		{
  			"title": "Weekly sync",
  			"id": "transcript-id",
  		},
  		{
  			"title": "ClientMeeting.mp3",
  			"id": "transcript-id-2",
  		}
  	]
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `transcripts` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found (user)">
  <p>The user ID you are trying to query does not exist or you do not have access to it.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Querying transcript details
  </Card>

  <Card title="Upload Audio" icon="link" href="/graphql-api/mutation/upload-audio">
    Use the API to upload audio to Fireflies.ai
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_user.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# User

> Querying user details

## Overview

The user query is designed to fetch details associated with a specific user id.

## Arguments

<ParamField path="id" type="String" />

<Note>
  `id` is an optional argument. Not passing an ID to this query will return user details for the
  owner of the API key
</Note>

## Schema

Fields available to the [User](/schema/user) query

## Usage Example

```graphql theme={null}
query User($userId: String!) {
  user(id: $userId) {
    user_id
    recent_transcript
    recent_meeting
    num_transcripts
    name
    minutes_consumed
    is_admin
    integrations
    email
    user_groups {
      id
      name
      handle
      members {
        user_id
        first_name
        last_name
        email
      }
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	--data '{ "query": "query User($userId: String!) { user(id: $userId) { name integrations } }", "variables": { "userId": "your_user_id" } }' \
  	https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: 'query User($userId: String!) { user(id: $userId) { name integrations } }',
    variables: { userId: 'your_user_id' }
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = '{"query": "query User($userId: String!) { user(id: $userId) { name integrations } }", "variables": {"userId": "your_user_id"}}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"query User($userId: String!) { user(id: $userId) { name integrations } }\", \"variables\": {\"userId\": \"your_user_id\"}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "user": {
        "name": "Justin Fly",
        "integrations": ["string"],
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `user` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found (user)">
  <p>The user ID you are trying to query does not exist.</p>
</Accordion>

<Accordion title="not_in_team">
  <p>The user ID you are trying to query is not in your team.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Users" icon="link" href="/graphql-api/query/users">
    Querying list of users
  </Card>

  <Card title="UserGroups" icon="link" href="/graphql-api/query/user-groups">
    Querying user groups
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_users.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Users

> Querying list of users

## Overview

The users query is designed to fetch a list of all users within the team. You can also view this list on your dashboard at [app.fireflies.ai/team](http://app.fireflies.ai/team)

## Schema

Fields available to the [User](/schema/user) query

## Usage Example

```graphql theme={null}
query Users {
  users {
    user_id
    email
    name
    num_transcripts
    recent_meeting
    minutes_consumed
    is_admin
    integrations
    user_groups {
      id
      name
      handle
      members {
        user_id
        first_name
        last_name
        email
      }
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	--data '{ "query": "{ users { name integrations } }" }' \
  	https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: '{ users { name integrations } }'
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = '{"query": "{ users { name integrations } }"}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"{ users { name integrations } }\"}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "users": [
        {
          "name": "Justin Fly",
          "integrations": []
        },
        {
          "name": "Peter Fire",
          "integrations": []
        }
      ]
    }
  }
  ```
</ResponseExample>

## Additional Resources

<CardGroup cols={2}>
  <Card title="User" icon="link" href="/graphql-api/query/user">
    Querying user details
  </Card>

  <Card title="Set User Role" icon="link" href="/graphql-api/mutation/set-user-role">
    Use the API to set user roles
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_user-groups.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# UserGroups

> Querying user groups

## Overview

The user\_groups query is designed to fetch a list of all user groups within the team. This query allows you to retrieve information about user groups including their members.

## Arguments

<ParamField path="mine" type="Boolean">
  `mine` is an optional boolean argument. If set to `true`, returns only user groups that the
  current user belongs to. If not provided or set to `false`, returns all user groups in the team.
</ParamField>

## Schema

Fields available to the [UserGroup](/schema/user-groups) query

## Usage Example

```graphql theme={null}
query UserGroups($mine: Boolean) {
  user_groups(mine: $mine) {
    id
    name
    handle
    members {
      user_id
      first_name
      last_name
      email
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	--data '{ "query": "{ user_groups { name handle members { first_name last_name email } } }" }' \
  	https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: '{ user_groups { name handle members { first_name last_name email } } }'
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = '{"query": "{ user_groups { name handle members { first_name last_name email } } }"}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"{ user_groups { name handle members { first_name last_name email } } }\"}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "user_groups": [
        {
          "id": "group_123",
          "name": "Engineering Team",
          "handle": "engineering",
          "members": [
            {
              "user_id": "user_456",
              "first_name": "John",
              "last_name": "Doe",
              "email": "john.doe@example.com"
            },
            {
              "user_id": "user_789",
              "first_name": "Jane",
              "last_name": "Smith",
              "email": "jane.smith@example.com"
            }
          ]
        },
        {
          "id": "group_124",
          "name": "Sales Team",
          "handle": "sales",
          "members": [
            {
              "user_id": "user_101",
              "first_name": "Bob",
              "last_name": "Johnson",
              "email": "bob.johnson@example.com"
            }
          ]
        }
      ]
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `user_groups` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="not_authorized">
  <p>You do not have permission to access user groups for this team.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Users" icon="link" href="/graphql-api/query/users">
    Querying list of users
  </Card>

  <Card title="User" icon="link" href="/graphql-api/query/user">
    Querying user details
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_active-meetings.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Active Meetings

> Query active meetings in progress

## Overview

The active\_meetings query is designed to fetch a list of meetings that are currently active (in progress). This endpoint allows you to monitor ongoing meetings for users in your team.

## Arguments

<ParamField path="email" type="String">
  Filter active meetings by a specific user's email address.

  **Permission requirements:**

  * **Regular users**: Can only query their own active meetings (must pass their own email or omit this field)
  * **Admins**: Can query active meetings for any user in their team

  If this field is omitted, the query returns active meetings for the authenticated user.

  The email must be valid and belong to a user in the same team as the requester.
</ParamField>

<ParamField path="states" type="[MeetingState]">
  Filter active meetings by their state. Accepts an array of [MeetingState](/schema/enum/meeting-state) values.

  **Possible values:**

  * `active`: Meetings that are currently in progress
  * `paused`: Meetings that have been paused

  If this field is omitted, the query returns meetings in both `active` and `paused` states by default.
</ParamField>

## Schema

Fields available to the [ActiveMeeting](/schema/active-meeting) query

## Usage Example

```graphql theme={null}
query ActiveMeetings($email: String, $states: [MeetingState!]) {
  active_meetings(input: { email: $email, states: $states }) {
    id
    title
    organizer_email
    meeting_link
    start_time
    end_time
    privacy
    state
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer your_api_key" \
      --data '{ "query": "query ActiveMeetings { active_meetings { id title organizer_email meeting_link start_time } }" }' \
      https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: 'query ActiveMeetings { active_meetings { id title organizer_email meeting_link start_time } }'
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = '{"query": "query ActiveMeetings { active_meetings { id title organizer_email meeting_link start_time } }"}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
      public static void main(String[] args) throws Exception {
          HttpClient client = HttpClient.newHttpClient();
          String json = "{\"query\":\"query ActiveMeetings { active_meetings { id title organizer_email meeting_link start_time } } \"}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "active_meetings": [
        {
          "id": "meeting-id-1",
          "title": "Team Standup",
          "organizer_email": "user@example.com",
          "meeting_link": "https://zoom.us/j/123456789",
          "start_time": "2024-01-15T10:00:00.000Z",
          "state": "active"
        },
        {
          "id": "meeting-id-2",
          "title": "Client Review",
          "organizer_email": "user@example.com",
          "meeting_link": "https://meet.google.com/abc-defg-hij",
          "start_time": "2024-01-15T14:30:00.000Z",
          "state": "paused"
        }
      ]
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `active_meetings` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found (user)">
  <p>The user email you are trying to query does not exist or is not in the same team as the requesting user.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>You do not have permission to query active meetings for other users. Regular users can only query their own active meetings. Admin privileges are required to query other users' active meetings.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcripts" icon="link" href="/graphql-api/query/transcripts">
    Query completed meetings and transcripts
  </Card>

  <Card title="Add to Live Meeting" icon="link" href="/graphql-api/mutation/add-to-live">
    Join an active meeting with Fireflies.ai bot
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_analytics.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Analytics

> Querying conversation and meeting analytics for teams and users

## Overview

The analytics query fetches detailed conversation and meeting metrics for teams and users across a specified date range.

## Arguments

<ParamField path="start_time" type="String">
  The `start_time` parameter filters results starting from a specific datetime (ISO 8601 format).
</ParamField>

<ParamField path="end_time" type="String">
  The `end_time` parameter filters results up to a specific datetime (ISO 8601 format).
</ParamField>

## Schema

Fields available to the [Analytics](/schema/analytics) query.

## Usage Example

```graphql theme={null}
query Analytics($startTime: String, $endTime: String) {
  analytics(start_time: $startTime, end_time: $endTime) {
    team {
      conversation {
        average_filler_words
        average_filler_words_diff_pct
        average_monologues_count
        average_monologues_count_diff_pct
        average_questions
        average_questions_diff_pct
        average_sentiments {
          negative_pct
          neutral_pct
          positive_pct
        }
        average_silence_duration
        average_silence_duration_diff_pct
        average_talk_listen_ratio
        average_words_per_minute
        longest_monologue_duration_sec
        longest_monologue_duration_diff_pct
        total_filler_words
        total_filler_words_diff_pct
        total_meeting_notes_count
        total_meetings_count
        total_monologues_count
        total_monologues_diff_pct
        teammates_count
        total_questions
        total_questions_diff_pct
        total_silence_duration
        total_silence_duration_diff_pct
      }
      meeting {
        count
        count_diff_pct
        duration
        duration_diff_pct
        average_count
        average_count_diff_pct
        average_duration
        average_duration_diff_pct
      }
    }
    users {
      user_id
      user_name
      user_email
      conversation {
        talk_listen_pct
        talk_listen_ratio
        total_silence_duration
        total_silence_duration_compare_to
        total_silence_pct
        total_silence_ratio
        total_speak_duration
        total_speak_duration_with_user
        total_word_count
        user_filler_words
        user_filler_words_compare_to
        user_filler_words_diff_pct
        user_longest_monologue_sec
        user_longest_monologue_compare_to
        user_longest_monologue_diff_pct
        user_monologues_count
        user_monologues_count_compare_to
        user_monologues_count_diff_pct
        user_questions
        user_questions_compare_to
        user_questions_diff_pct
        user_speak_duration
        user_word_count
        user_words_per_minute
        user_words_per_minute_compare_to
        user_words_per_minute_diff_pct
      }
      meeting {
        count
        count_diff
        count_diff_compared_to
        count_diff_pct
        duration
        duration_diff
        duration_diff_compared_to
        duration_diff_pct
      }
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer your_api_key" \
      --data '{ "query": "query Analytics($startTime: String, $endTime: String) { analytics(start_time: $startTime, end_time: $endTime) { team { conversation { average_filler_words } } } }", "variables": { "startTime": "2024-01-01T00:00:00Z", "endTime": "2024-01-31T23:59:59Z" } }' \
      https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query:
      'query Analytics($startTime: String, $endTime: String) { analytics(start_time: $startTime, end_time: $endTime) { team { conversation { average_filler_words } } } }',
    variables: { startTime: '2024-01-01T00:00:00Z', endTime: '2024-01-31T23:59:59Z' }
  };
  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = '{"query": "query Analytics($startTime: String, $endTime: String) { analytics(start_time: $startTime, end_time: $endTime) { team { conversation { average_filler_words } } } }", "variables": {"startTime": "2024-01-01T00:00:00Z", "endTime": "2024-01-31T23:59:59Z"}}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
      public static void main(String[] args) throws Exception {
          HttpClient client = HttpClient.newHttpClient();
          String json = "{\"query\":\"query Analytics($startTime: String, $endTime: String) { analytics(start_time: $startTime, end_time: $endTime) { team { conversation { average_filler_words } } } }\", \"variables\":{\"startTime\":\"2024-01-01T00:00:00Z\", \"endTime\":\"2024-01-31T23:59:59Z\"}}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "analytics": {
        "team": {
          "conversation": {
            "average_filler_words": 15
          }
        }
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `analytics` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="paid_required (business_or_higher)">
  <p>You need to be on a Business or higher plan to query analytics.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>The user does not have admin privileges to view analytics for team.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcripts" icon="link" href="/graphql-api/query/transcripts">
    Querying list of transcripts
  </Card>

  <Card title="Users" icon="link" href="/graphql-api/query/users">
    Querying list of users
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_apps.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# AI Apps

> Querying list of AI App outputs

## Overview

The apps query fetches the results of the AI App for all the meetings it ran successfully.

## Arguments

<ParamField path="app_id" type="String">
  The `app_id` parameter retrieves all outputs against a specific AI App.
</ParamField>

<ParamField path="transcript_id" type="String">
  The `transcript_id` parameter retrieves all outputs against a specific meeting/transcript.
</ParamField>

<ParamField path="skip" type="Int">
  Number of records to skip over. Helps paginate results when used in combination with the `limit` param.
</ParamField>

<ParamField path="limit" type="Int">
  Maximum number of `apps` outputs to fetch in a single query. The default query fetches 10 records, which is the maximum for a single request.
</ParamField>

## Schema

Fields available to the [AI Apps](/schema/apps) query

## Usage Example

```graphql theme={null}
query GetAIAppsOutputs($appId: String, $transcriptId: String, $skip: Float, $limit: Float) {
  apps(app_id: $appId, transcript_id: $transcriptId, skip: $skip, limit: $limit) {
    outputs {
      transcript_id
      user_id
      app_id
      created_at
      title
      prompt
      response
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer your_api_key" \
      --data '{ "query": "query GetAIAppsOutputs($transcriptId: String) { apps(transcript_id: $transcriptId) { outputs { transcript_id user_id app_id created_at title prompt response } } }", "variables": { "transcriptId": "your_transcript_id" } }' \
      https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: 'query GetAIAppsOutputs($transcriptId: String) { apps(transcript_id: $transcriptId) { outputs { transcript_id user_id app_id created_at title prompt response } } }',
    variables: { transcriptId: 'your_transcript_id' }
  };
  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = '{"query": "query GetAIAppsOutputs($transcriptId: String) { apps(transcript_id: $transcriptId) { outputs { transcript_id user_id app_id created_at title prompt response } } }", "variables": {"transcriptId": "transcript_id"}}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
      public static void main(String[] args) throws Exception {
          HttpClient client = HttpClient.newHttpClient();
          String json = "{\"query\":\"query GetAIAppsOutputs($transcriptId: String) { apps(transcript_id: $transcriptId) { outputs { transcript_id user_id app_id created_at title prompt response } } } \", \"variables\":{\"transcriptId\":\"transcript_id\"}}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "apps": [
  		{
  			"transcript_id": "transcript-id",
  			"user_id": "user-id",
  			"app_id": "app-id",
  			"title": "Weekly sync"
  		}
  	]
    }
  }
  ```
</ResponseExample>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Querying transcript details
  </Card>

  <Card title="Transcripts" icon="link" href="/graphql-api/query/transcripts">
    Querying list of transcripts
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_bite.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Bite

> Querying bite details

## Overview

The bite query is designed to fetch details associated with a specific bite ID.

## Arguments

<ParamField path="id" type="ID" required>
  Unique identifier of the bite
</ParamField>

## Schema

Fields available to the [Bite](/schema/bite) query

## Usage Example

```graphql theme={null}
query Bite($biteId: ID!) {
  bite(id: $biteId) {
    transcript_id
    name
    id
    thumbnail
    preview
    status
    summary
    user_id
    start_time
    end_time
    summary_status
    media_type
    created_at
    created_from {
      description
      duration
      id
      name
      type
    }
    captions {
      end_time
      index
      speaker_id
      speaker_name
      start_time
      text
    }
    sources {
      src
      type
    }
    privacies
    user {
      first_name
      last_name
      picture
      name
      id
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	--data '{ "query": "query Bite($biteId: ID!) { bite(id: $biteId) { user_id name status summary } }", "variables": { "biteId": "your_bite_id" } }' \
  	https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: 'query Bite($biteId: ID!) { bite(id: $biteId) { user_id name status summary } }',
    variables: { biteId: 'your_bite_id' }
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = '{"query": "query Bite($biteId: ID!) { bite(id: $biteId) { user_id name status summary } }", "variables": {"biteId": "your_bite_id"}}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"query Bite($biteId: ID!) { bite(id: $biteId) { user_id name status summary } }\", \"variables\": {\"biteId\": \"your_bite_id\"}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "bite": {
        "user_id": "user-id",
        "id": "bite-id",
      }
    }
  }
  ```
</ResponseExample>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Bites" icon="link" href="/graphql-api/query/bites">
    Querying list of bites
  </Card>

  <Card title="Create Bite" icon="link" href="/graphql-api/mutation/create-bite">
    Use the API to create a bite
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_bites.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Bites

> Querying list of bites

## Overview

The bites query is designed to fetch a list of bites against input arguments.

## Arguments

<ParamField path="mine" type="Boolean" required>
  The `mine` parameter, when set to true, fetches results specific to the owner of the API key
</ParamField>

<ParamField path="transcript_id" type="ID">
  You can use `transcript_id` to query all bites against a specific transcript.
</ParamField>

<ParamField path="my_team" type="Boolean">
  The `my_team` parameter, when set to true, fetches results for the owner of the API key
</ParamField>

<ParamField path="limit" type="Int">
  Maximum number of bites to fetch in a single query. Maximum of 50
</ParamField>

<ParamField path="skip" type="Int">
  Number of records to skip over. Helps paginate results when used in combination with the `limit`
  param.
</ParamField>

## Schema

Fields available to the [Bites](/schema/bite) query

## Usage Example

```graphql theme={null}
query Bites($mine: Boolean) {
  bites(mine: $mine) {
    transcript_id
    name
    id
    thumbnail
    preview
    status
    summary
    user_id
    start_time
    end_time
    summary_status
    media_type
    created_at
    created_from {
      description
      duration
      id
      name
      type
    }
    captions {
      end_time
      index
      speaker_id
      speaker_name
      start_time
      text
    }
    sources {
      src
      type
    }
    privacies
    user {
      first_name
      last_name
      picture
      name
      id
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	--data '{ "query": "query Bites($mine: Boolean) { bites(mine: $mine) { user_id name end_time } }", "variables": { "mine": true } }' \
  	https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: 'query Bites($mine: Boolean) { bites(mine: $mine) { user_id name end_time } }',
    variables: { mine: true }
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = '{"query": "query Bites($mine: Boolean) { bites(mine: $mine) { user_id name end_time } }", "variables": {"mine": true }}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"query Bites($mine: Boolean) { bites(mine: $mine) { user_id name end_time } }\", \"variables\": {\"mine\": true}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "bites": [
  		{
  			"user_id": "user-id",
  			"id": "bite-id",
      	},
  		{
  			"user_id": "user-id",
  			"id": "bite-id-2",
      	}
  	]	
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `bites` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="args_required">
  <p>You must provide at least one of the following arguments: `mine`, `transcript_id`, `my_team` to the bites query</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Bite" icon="link" href="/graphql-api/query/bite">
    Querying bite details
  </Card>

  <Card title="Create Bite" icon="link" href="/graphql-api/mutation/create-bite">
    Use the API to create a bite
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_channel.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Channel

> Querying channel details

## Overview

The channel query is designed to fetch details of a specific channel by its ID. The user must have access to the channel (either it's a public channel in their team, or they are a member of the private channel).

## Arguments

<ParamField path="id" type="ID!" required>
  The unique identifier of the channel to fetch.
</ParamField>

## Schema

Fields available to the [Channel](/schema/channel) query

## Usage Example

```graphql theme={null}
query Channel($channelId: ID!) {
  channel(id: $channelId) {
    id
    title
    is_private
    created_by
    created_at
    updated_at
    members {
      user_id
      email
      name
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer your_api_key" \
      --data '{ "query": "query Channel($channelId: ID!) { channel(id: $channelId) { id title is_private members { user_id email } } }", "variables": { "channelId": "your_channel_id" } }' \
      https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: 'query Channel($channelId: ID!) { channel(id: $channelId) { id title is_private members { user_id email } } }',
    variables: { channelId: 'your_channel_id' }
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = '{"query": "query Channel($channelId: ID!) { channel(id: $channelId) { id title is_private members { user_id email } } }", "variables": {"channelId": "your_channel_id"}}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"query Channel($channelId: ID!) { channel(id: $channelId) { id title is_private members { user_id email } } }\", \"variables\": {\"channelId\": \"your_channel_id\"}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "channel": {
        "id": "channel-id-1",
        "title": "Engineering",
        "is_private": false,
        "members": [
          {
            "user_id": "user-id-1",
            "email": "john@example.com",
            "name": "John Doe"
          },
          {
            "user_id": "user-id-2",
            "email": "jane@example.com",
            "name": "Jane Smith"
          }
        ]
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `channel` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found (Channel)">
  <p>The channel ID you are trying to query does not exist or you do not have access to it.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Channels" icon="link" href="/graphql-api/query/channels">
    Query list of channels
  </Card>

  <Card title="Channel Schema" icon="link" href="/schema/channel">
    Schema for Channel
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_channels.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Channels

> Querying list of channels

## Overview

The channels query is designed to fetch a list of channels accessible to the authenticated user. This includes public channels in the user's team and private channels where the user is a member.

## Arguments

This query does not require any arguments.

## Schema

Fields available to the [Channel](/schema/channel) query

## Usage Example

```graphql theme={null}
query Channels {
  channels {
    id
    title
    is_private
    created_by
    created_at
    updated_at
    members {
      user_id
      email
      name
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer your_api_key" \
      --data '{ "query": "query Channels { channels { id title is_private members { user_id email } } }" }' \
      https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: 'query Channels { channels { id title is_private members { user_id email } } }'
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = '{"query": "query Channels { channels { id title is_private members { user_id email } } }"}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
      public static void main(String[] args) throws Exception {
          HttpClient client = HttpClient.newHttpClient();
          String json = "{\"query\":\"query Channels { channels { id title is_private members { user_id email } } }\"}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "channels": [
        {
          "id": "channel-id-1",
          "title": "Engineering",
          "is_private": false,
          "members": [
            {
              "user_id": "user-id-1",
              "email": "john@example.com",
              "name": "John Doe"
            },
            {
              "user_id": "user-id-2",
              "email": "jane@example.com",
              "name": "Jane Smith"
            }
          ]
        },
        {
          "id": "channel-id-2",
          "title": "Private Project",
          "is_private": true,
          "members": [
            {
              "user_id": "user-id-1",
              "email": "john@example.com",
              "name": "John Doe"
            }
          ]
        }
      ]
    }
  }
  ```
</ResponseExample>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Channel" icon="link" href="/graphql-api/query/channel">
    Query a single channel by ID
  </Card>

  <Card title="Channel Schema" icon="link" href="/schema/channel">
    Schema for Channel
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_contacts.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Contacts

> Querying list of contacts

## Overview

The contacts query is designed to fetch a list of all contacts associated with the authenticated user. Contacts are people who have participated in meetings with the user, and include information such as email, name, profile picture, and the date of their last meeting together.

## Schema

Fields available to the [Contact](/schema/contact) query

## Usage Example

```graphql theme={null}
query Contacts {
  contacts {
    email
    name
    picture
    last_meeting_date
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	--data '{ "query": "{ contacts { email name picture last_meeting_date } }" }' \
  	https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: '{ contacts { email name picture last_meeting_date } }'
  };

  axios
    .post(url, data, { headers: headers })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }
  data = '{"query": "{ contacts { email name picture last_meeting_date } }"}'

  response = requests.post(url, headers=headers, data=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"{ contacts { email name picture last_meeting_date } }\"}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "contacts": [
        {
          "email": "john.doe@example.com",
          "name": "John Doe",
          "picture": "https://example.com/photo.jpg",
          "last_meeting_date": "2024-12-05"
        },
        {
          "email": "jane.smith@example.com",
          "name": "Jane Smith",
          "picture": null,
          "last_meeting_date": "2024-11-28"
        }
      ]
    }
  }
  ```
</ResponseExample>

## Additional Resources

<CardGroup cols={2}>
  <Card title="User" icon="link" href="/graphql-api/query/user">
    Querying user details
  </Card>

  <Card title="Users" icon="link" href="/graphql-api/query/users">
    Querying list of users
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_live_action_items.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Live Action Items

> Query live action items for a meeting

## Overview

The `live_action_items` query allows you to fetch action items for a live meeting. This includes both action items automatically created by Fireflies during the meeting and action items created via the `createLiveActionItem` mutation.

## Arguments

<ParamField path="meeting_id" type="ID!" required>
  The ID of the meeting to fetch live action items for
</ParamField>

## Response

Returns an array of `LiveActionItem` objects with the following fields:

<ResponseField name="name" type="String">
  Name of the person who the action item is associated with
</ResponseField>

<ResponseField name="action_item" type="String!">
  The action item text
</ResponseField>

## Usage Example

To fetch live action items for a meeting:

```graphql theme={null}
query LiveActionItems($meeting_id: ID!) {
  live_action_items(meeting_id: $meeting_id) {
    name
    action_item
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "query LiveActionItems($meeting_id: ID!) { live_action_items(meeting_id: $meeting_id) { name action_item } }",
      "variables": {
        "meeting_id": "your_meeting_id"
      }
    }'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `query LiveActionItems($meeting_id: ID!) {
      live_action_items(meeting_id: $meeting_id) {
        name
        action_item
      }
    }`,
    variables: {
      meeting_id: 'your_meeting_id'
    }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = {
      'query': '''
        query LiveActionItems($meeting_id: ID!) {
          live_action_items(meeting_id: $meeting_id) {
            name
            action_item
          }
        }
      ''',
      'variables': {
          'meeting_id': 'your_meeting_id'
      }
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json()['data'])
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"query LiveActionItems($meeting_id: ID!) { live_action_items(meeting_id: $meeting_id) { name action_item } }\", \"variables\": {\"meeting_id\": \"your_meeting_id\"}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "live_action_items": [
        {
          "name": "John Doe",
          "action_item": "Follow up with the client about the proposal"
        },
        {
          "name": "Jane Smith",
          "action_item": "Schedule a follow-up meeting for next week"
        }
      ]
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `live_action_items` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found">
  <p>The meeting with the specified ID was not found or you do not have access to it.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>You do not have permission to view action items for this meeting. Only the meeting organizer or team admin can view live action items.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Create Live Action Item" icon="link" href="/graphql-api/mutation/create-live-action-item">
    Create action items during a live meeting
  </Card>

  <Card title="Update Meeting State" icon="link" href="/graphql-api/mutation/update-meeting-state">
    Pause or resume recording for a live meeting
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_rule-executions-by-meeting.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Rule Executions by Meeting

> Query rule execution logs grouped by meeting for team automation workflows

## Overview

The `rule_executions_by_meeting` query retrieves rule execution logs grouped by meeting. This allows you to see which automation rules were triggered for each meeting and what actions were taken.

<Note>
  This query requires an **Enterprise** plan. See [pricing](https://fireflies.ai/pricing) for more
  details.
</Note>

## Arguments

<ParamField path="limit" type="Int" default="10">
  Maximum number of meeting groups to return. Must be between 1 and 50.
</ParamField>

<ParamField path="cursor" type="String">
  Pagination cursor for fetching the next page of results. Use the `next_cursor` value from a
  previous response.
</ParamField>

<ParamField path="logs_per_meeting" type="Int" default="5">
  Maximum number of execution logs to return per meeting. Must be between 1 and 20.
</ParamField>

<ParamField path="filters" type="RuleExecutionFiltersInput">
  Optional filters to narrow down the results.

  <Expandable title="Filter properties">
    <ParamField path="rule_id" type="String">
      Filter by a specific rule ID.
    </ParamField>

    <ParamField path="meeting_id" type="String">
      Filter by a specific meeting ID.
    </ParamField>

    <ParamField path="date_from" type="String">
      Filter executions from this date (ISO 8601 format).
    </ParamField>

    <ParamField path="date_to" type="String">
      Filter executions up to this date (ISO 8601 format).
    </ParamField>

    <ParamField path="is_test" type="Boolean">
      Filter by test evaluations. When `true`, returns only test logs. When `false`, returns only production logs. When not provided, returns all logs.
    </ParamField>
  </Expandable>
</ParamField>

## Response Fields

<ResponseField name="meetings" type="[RuleExecutionMeetingGroup]">
  List of meeting groups with their rule executions.

  <Expandable title="Meeting group properties">
    <ResponseField name="meeting_id" type="String">
      The unique identifier of the meeting.
    </ResponseField>

    <ResponseField name="meeting" type="RuleExecutionMeeting">
      Meeting details including `id`, `title`, and `organizer_email`.
    </ResponseField>

    <ResponseField name="resource_attributes" type="RuleExecutionResourceAttributes">
      Additional meeting attributes like `host`, `attendees`, `user_group_ids`, and `host_user_group_ids`.
    </ResponseField>

    <ResponseField name="executions" type="[RuleExecution]">
      List of rule executions for this meeting.

      <Expandable title="Execution properties">
        <ResponseField name="extension_id" type="String">
          The rule ID that was executed.
        </ResponseField>

        <ResponseField name="extension_title" type="String">
          The name of the rule that was executed.
        </ResponseField>

        <ResponseField name="stopped_at" type="String">
          Timestamp when the rule execution completed (ISO 8601 format).
        </ResponseField>

        <ResponseField name="user_name" type="String">
          Name of the meeting organizer.
        </ResponseField>

        <ResponseField name="share" type="RuleExecutionShare">
          Share action details with `group_ids`.
        </ResponseField>

        <ResponseField name="channel" type="RuleExecutionChannel">
          Channel routing action details with `channel_id`.
        </ResponseField>

        <ResponseField name="meeting_privacy" type="RuleExecutionMeetingPrivacy">
          Privacy update action details with `privacy`.
        </ResponseField>
      </Expandable>
    </ResponseField>
  </Expandable>
</ResponseField>

<ResponseField name="has_more" type="Boolean">
  Indicates if there are more results available.
</ResponseField>

<ResponseField name="next_cursor" type="String">
  Cursor to use for fetching the next page of results.
</ResponseField>

## Usage Example

```graphql theme={null}
query RuleExecutionsByMeeting($limit: Int, $filters: RuleExecutionFiltersInput) {
  rule_executions_by_meeting(limit: $limit, filters: $filters) {
    meetings {
      meeting_id
      meeting {
        id
        title
        organizer_email
      }
      executions {
        extension_id
        extension_title
        stopped_at
        user_name
        share {
          group_ids
        }
        channel {
          channel_id
        }
        meeting_privacy {
          privacy
        }
      }
    }
    has_more
    next_cursor
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer your_api_key" \
      --data '{ "query": "query { rule_executions_by_meeting(limit: 5, filters: { is_test: false }) { meetings { meeting_id meeting { title } executions { extension_title stopped_at } } has_more next_cursor } }" }' \
      https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key',
  };

  const data = {
    query: `query RuleExecutionsByMeeting($limit: Int, $filters: RuleExecutionFiltersInput) {
      rule_executions_by_meeting(limit: $limit, filters: $filters) {
        meetings {
          meeting_id
          meeting { title }
          executions { extension_title stopped_at }
        }
        has_more
        next_cursor
      }
    }`,
    variables: {
      limit: 5,
      filters: { is_test: false },
    },
  };

  axios
    .post(url, data, { headers: headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  query = '''
  query RuleExecutionsByMeeting($limit: Int, $filters: RuleExecutionFiltersInput) {
    rule_executions_by_meeting(limit: $limit, filters: $filters) {
      meetings {
        meeting_id
        meeting { title }
        executions { extension_title stopped_at }
      }
      has_more
      next_cursor
    }
  }
  '''

  data = {
      'query': query,
      'variables': {
          'limit': 5,
          'filters': { 'is_test': False }
      }
  }

  response = requests.post(url, headers=headers, json=data)
  print(response.json())
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;

  public class ApiRequest {
      public static void main(String[] args) throws Exception {
          HttpClient client = HttpClient.newHttpClient();
          String json = "{\"query\":\"query { rule_executions_by_meeting(limit: 5, filters: { is_test: false }) { meetings { meeting_id meeting { title } executions { extension_title stopped_at } } has_more next_cursor } }\"}";
          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(HttpRequest.BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "rule_executions_by_meeting": {
        "meetings": [
          {
            "meeting_id": "01K8DV541XM97WMGRCX66TPSWG",
            "meeting": {
              "title": "Weekly Team Sync"
            },
            "executions": [
              {
                "extension_title": "Auto-share with Sales Team",
                "stopped_at": "2024-01-15T14:30:00.000Z"
              },
              {
                "extension_title": "Route to #meetings channel",
                "stopped_at": "2024-01-15T14:30:01.000Z"
              }
            ]
          }
        ],
        "has_more": true,
        "next_cursor": "1705329001000_01K8DV541XM97WMGRCX66TPSWG"
      }
    }
  }
  ```
</ResponseExample>

## Pagination

Use cursor-based pagination to fetch additional results:

```graphql theme={null}
query {
  rule_executions_by_meeting(limit: 10, cursor: "1705329001000_01K8DV541XM97WMGRCX66TPSWG") {
    meetings {
      meeting_id
    }
    has_more
    next_cursor
  }
}
```

## Error Codes

List of possible error codes that may be returned by the `rule_executions_by_meeting` query. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="paid_required (enterprise)">
  <p>You need to be on an Enterprise plan to query rule execution logs.</p>
</Accordion>

<Accordion title="service_unavailable">
  <p>The rules service is temporarily unavailable. Please try again later.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcripts" icon="link" href="/graphql-api/query/transcripts">
    Querying list of transcripts
  </Card>

  <Card title="Analytics" icon="link" href="/graphql-api/query/analytics">
    Querying meeting analytics
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_askfred-thread.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# AskFred Thread

> Get a specific AskFred conversation thread with all its messages

## Overview

The `askfred_thread` query retrieves a specific AskFred conversation thread by its ID, including the complete message history. This query provides full details about a thread including all questions asked, answers received, and suggested follow-up queries.

## Arguments

<ParamField path="id" type="String" required>
  The unique identifier of the AskFred thread to retrieve
</ParamField>

## Schema

Fields available to the [AskFredThread](/schema/askfred-thread) query:

* `id`: Unique identifier for the thread
* `title`: Thread title
* `transcript_id`: Associated transcript/meeting ID (if applicable)
* `user_id`: ID of the user who created the thread
* `created_at`: Timestamp when the thread was created
* `messages`: Array of [AskFredMessage](/schema/askfred-message) objects containing:
  * `id`: Message identifier
  * `thread_id`: Parent thread ID
  * `query`: The question asked
  * `answer`: The AI-generated response
  * `suggested_queries`: Array of suggested follow-up questions
  * `status`: Message processing status (processing, completed, failed)
  * `error`: Error message if the query failed
  * `created_at`: When the message was created
  * `updated_at`: When the message was last updated

## Usage Example

```graphql theme={null}
query GetAskFredThread($threadId: String!) {
  askfred_thread(id: $threadId) {
    id
    title
    transcript_id
    user_id
    created_at
    messages {
      id
      thread_id
      query
      answer
      suggested_queries
      status
      error
      created_at
      updated_at
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "query GetThread($id: String!) { askfred_thread(id: $id) { id title transcript_id messages { query answer suggested_queries status } } }",
      "variables": {
        "id": "thread_abc123"
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const threadId = 'thread_abc123';

  const data = {
    query: `
      query GetAskFredThread($id: String!) {
        askfred_thread(id: $id) {
          id
          title
          transcript_id
          user_id
          created_at
          messages {
            id
            query
            answer
            suggested_queries
            status
            created_at
          }
        }
      }
    `,
    variables: {
      id: threadId
    }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.error(e);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  thread_id = 'thread_abc123'

  query = '''
      query GetAskFredThread($id: String!) {
          askfred_thread(id: $id) {
              id
              title
              transcript_id
              user_id
              created_at
              messages {
                  id
                  query
                  answer
                  suggested_queries
                  status
                  created_at
              }
          }
      }
  '''

  variables = {
      'id': thread_id
  }

  data = {
      'query': query,
      'variables': variables
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "askfred_thread": {
        "id": "thread_abc123",
        "title": "What were the action items from the Q4 planning meeting?",
        "transcript_id": "transcript_xyz789",
        "user_id": "user_123",
        "created_at": "2024-03-15T10:30:00Z",
        "messages": [
          {
            "id": "msg_001",
            "query": "What were the action items from the Q4 planning meeting?",
            "answer": "Based on the Q4 planning meeting, here are the key action items:\n\n1. **Product Development** - Sarah to finalize the feature roadmap by March 20th\n2. **Marketing Campaign** - John to prepare Q4 marketing strategy presentation by March 25th\n3. **Budget Review** - Finance team to provide updated budget allocations by March 18th\n4. **Customer Success** - Emma to compile customer feedback report by end of week",
            "suggested_queries": [
              "Who is responsible for the product roadmap?",
              "What is the timeline for the marketing strategy?",
              "What were the budget concerns discussed?"
            ],
            "status": "completed",
            "created_at": "2024-03-15T10:30:00Z"
          },
          {
            "id": "msg_002",
            "query": "What were the budget concerns discussed?",
            "answer": "The main budget concerns discussed in the meeting were:\n\n1. **Resource Allocation** - Need to balance investment between product development and marketing\n2. **Headcount** - Discussion about hiring 3 new engineers vs 2 engineers and 1 marketing specialist\n3. **Tool Costs** - Review of current software subscriptions to identify cost-saving opportunities\n4. **Travel Budget** - Proposed 20% reduction in Q4 travel budget due to increased virtual meeting effectiveness",
            "suggested_queries": [
              "What was the final decision on headcount?",
              "Which software subscriptions were identified for review?",
              "How much is the current travel budget?"
            ],
            "status": "completed",
            "created_at": "2024-03-15T10:32:00Z"
          }
        ]
      }
    }
  }
  ```
</ResponseExample>

## Related

<CardGroup cols={2}>
  <Card title="List All Threads" icon="link" href="/graphql-api/query/askfred-threads">
    Get a summary of all your threads
  </Card>

  <Card title="Continue Thread" icon="link" href="/graphql-api/mutation/continue-askfred-thread">
    Add a follow-up question to this thread
  </Card>
</CardGroup>

---

## Source file: graphql-api_query_askfred-threads.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# AskFred Threads

> Get a summary of all AskFred conversation threads for the current user

## Overview

The `askfred_threads` query retrieves a summary of all AskFred conversation threads belonging to the authenticated user. This query provides a lightweight overview of threads without including the full message history, making it ideal for listing and browsing conversations.

## Arguments

<ParamField path="transcript_id" type="String">
  Filter threads to only those associated with a specific transcript ID
</ParamField>

## Schema

Fields available to the [AskFredThreadSummary](/schema/askfred-thread-summary) query:

* `id`: Unique identifier for the thread
* `title`: Thread title (typically derived from the first question)
* `transcript_id`: Associated transcript/meeting ID (if applicable)
* `user_id`: ID of the user who created the thread
* `created_at`: Timestamp when the thread was created

## Usage Example

```graphql theme={null}
query GetAskFredThreads {
  askfred_threads {
    id
    title
    transcript_id
    user_id
    created_at
  }
}
```

### With Filter

```graphql theme={null}
query GetFilteredThreads($transcriptId: String) {
  askfred_threads(transcript_id: $transcriptId) {
    id
    title
    transcript_id
    user_id
    created_at
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "query { askfred_threads { id title transcript_id user_id created_at } }"
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `
      query GetAskFredThreads {
        askfred_threads {
          id
          title
          transcript_id
          user_id
          created_at
        }
      }
    `
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.error(e);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  query = '''
      query GetAskFredThreads {
          askfred_threads {
              id
              title
              transcript_id
              user_id
              created_at
          }
      }
  '''

  data = {
      'query': query
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "askfred_threads": [
        {
          "id": "thread_abc123",
          "title": "What were the action items from the Q4 planning meeting?",
          "transcript_id": "transcript_xyz789",
          "user_id": "user_123",
          "created_at": "2024-03-15T10:30:00Z"
        },
        {
          "id": "thread_def456",
          "title": "Summary of customer feedback discussions",
          "transcript_id": null,
          "user_id": "user_123",
          "created_at": "2024-03-14T14:20:00Z"
        }
      ]
    }
  }
  ```
</ResponseExample>

## Related

<CardGroup cols={2}>
  <Card title="Get Thread Details" icon="link" href="/graphql-api/query/askfred-thread">
    Retrieve complete thread with message history
  </Card>

  <Card title="Create Thread" icon="link" href="/graphql-api/mutation/create-askfred-thread">
    Start a new AskFred conversation
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_add-to-live.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Add to Live

> Use the API to add the Fireflies.ai bot to an ongoing meeting

## Overview

The `addToLiveMeeting` mutation allows you to add the Fireflies.ai bot to an ongoing meeting. It is rate limited to 3 requests per 20 minutes.

## Arguments

<ResponseField name="meeting_link" type="String!" required>
  A valid http URL for the meeting link, i.e. gooogle meet, zoom, etc
</ResponseField>

<ResponseField name="title" type="String">
  Title or name of the meeting, this will be used to identify the transcribed file. If title is not
  provided, a default title will be set automatically

  Maximum length is 256 characters.
</ResponseField>

<ResponseField name="meeting_password" type="String">
  Password for the meeting, if applicable.

  Maximum length is 32 characters.
</ResponseField>

<ResponseField name="duration" type="Int">
  Meeting duration in minutes. Defaults to 60 minutes if
  param is not provided

  Minimum is 15 and maximum is 120.
</ResponseField>

<ResponseField name="language" type="String">
  Language of the meeting. Defaults to English if not provided. For a complete list of language codes, please view [Language Codes](/miscellaneous/language-codes)

  Maximum length is 5 characters.
</ResponseField>

<ResponseField name="attendees" type="[Attendee]">
  Array of [Attendees](/schema/input/attendee) for expected meeting participants.
</ResponseField>

## Usage Example

To upload an audio file, provide the necessary input parameters to the mutation. Here's an example of how this mutation could be used:

```graphql theme={null}
mutation AddToLiveMeeting($meetingLink: String!) {
  addToLiveMeeting(meeting_link: $meetingLink) {
    success
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation AddToLiveMeeting($meetingLink: String!) { addToLiveMeeting(meeting_link: $meetingLink) { success } }",
      "variables": {
        "meetingLink": "https://meet.google.com/code-here"
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `  mutation AddToLiveMeeting($meetingLink: String!) {
  				addToLiveMeeting(meeting_link: $meetingLink) {
  					success
  				}
  			}
      `,
    variables: { meetingLink: 'https://meet.google.com/code-here' }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }


  data = {
  	'query': '''
  		mutation AddToLiveMeeting($meetingLink: String!) {
  			addToLiveMeeting(meeting_link: $meetingLink) {
  				success
  			}
  		}
  	''',
  	'variables': {'meetingLink': 'https://meet.google.com/code-here'}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
  	public static void main(String[] args) throws IOException, InterruptedException {
  		HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"mutation AddToLiveMeeting($meetingLink: String!) { addToLiveMeeting(meeting_link: $meetingLink) { success } }\", \"variables\": {\"meetingLink\": \"https://meet.google.com/code-here\"}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "addToLiveMeeting": {
        "success": true,
      }
    }
  }
  ```
</ResponseExample>

## FAQ

<Accordion title="Why am I getting a 'too_many_requests' error?">
  <p>The `addToLive` mutation has a limit of 3 requests per 20 minutes.</p>

  You may view API Rate limits [here](/fundamentals/limits).
</Accordion>

## Error Codes

List of possible error codes that may be returned by the `addToLiveMeeting` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="too_many_requests">
  <p>You have exceeded the rate limit for the `addToLiveMeeting` mutation. It is limited to 3 requests per 20 minutes. Please try again later.</p>
</Accordion>

<Accordion title="invalid_language_code">
  <p>The language code you provided is invalid. Please refer to the [Language Codes](/miscellaneous/language-codes) page for a list of valid language codes.</p>
</Accordion>

<Accordion title="unsupported_platform">
  <p>The meeting platform URL provided is not supported. Please use a supported meeting platform such as Zoom, Google Meet, Microsoft Teams, etc.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Upload Audio" icon="link" href="/graphql-api/mutation/upload-audio">
    Use the API to upload audio to Fireflies.ai
  </Card>

  <Card title="Webhooks" icon="link" href="/graphql-api/webhooks">
    Create notifications using webhooks
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_confirm-upload.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Confirm Upload

> Confirm a direct file upload and start transcription

<Warning>
  This API is not generally available. Access requires whitelisting. Please contact Fireflies support to request access.
</Warning>

## Overview

The `confirmUpload` mutation confirms that a file has been successfully uploaded to the pre-signed URL and triggers the transcription process. This is the second step in the direct upload flow.

**Upload Flow:**

1. Call [createUploadUrl](/graphql-api/mutation/create-upload-url) to get a pre-signed upload URL
2. Upload your file directly to the URL using an HTTP PUT request
3. Call `confirmUpload` to confirm the upload and start transcription

## Arguments

<ParamField path="input" type="ConfirmUploadInput" required>
  <Expandable>
    <ResponseField name="meeting_id" type="String" required>
      The meeting ID returned from the `createUploadUrl` mutation. This identifies which upload session to confirm.
    </ResponseField>
  </Expandable>
</ParamField>

## Response

<ResponseField name="success" type="Boolean">
  Indicates whether the confirmation was successful and transcription has been queued.
</ResponseField>

<ResponseField name="meeting_id" type="String">
  The meeting ID for the confirmed upload.
</ResponseField>

<ResponseField name="message" type="String">
  A message describing the result of the confirmation.
</ResponseField>

## Usage Example

```graphql theme={null}
mutation confirmUpload($input: ConfirmUploadInput!) {
  confirmUpload(input: $input) {
    success
    meeting_id
    message
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation($input: ConfirmUploadInput!) { confirmUpload(input: $input) { success meeting_id message } }",
      "variables": {
        "input": {
          "meeting_id": "abc123def456"
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const input = {
    meeting_id: 'abc123def456'
  };

  const data = {
    query: `
      mutation($input: ConfirmUploadInput!) {
        confirmUpload(input: $input) {
          success
          meeting_id
          message
        }
      }
    `,
    variables: { input }
  };

  axios
    .post(url, data, { headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  input_data = {
      "meeting_id": "abc123def456"
  }

  data = {
      'query': '''
          mutation($input: ConfirmUploadInput!) {
              confirmUpload(input: $input) {
                  success
                  meeting_id
                  message
              }
          }
      ''',
      'variables': {'input': input_data}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "confirmUpload": {
        "success": true,
        "meeting_id": "abc123def456",
        "message": "Audio upload confirmed. Transcription has been queued."
      }
    }
  }
  ```
</ResponseExample>

## Complete Upload Flow Example

Here's a complete example showing the entire upload flow:

```javascript theme={null}
const axios = require('axios');
const fs = require('fs');

const API_URL = 'https://api.fireflies.ai/graphql';
const API_KEY = 'your_api_key';

async function uploadAudioFile(filePath, title) {
  const fileBuffer = fs.readFileSync(filePath);
  const fileSize = fileBuffer.length;
  
  // Step 1: Get the signed upload URL
  const createUrlResponse = await axios.post(API_URL, {
    query: `
      mutation($input: CreateUploadUrlInput!) {
        createUploadUrl(input: $input) {
          upload_url
          meeting_id
          expires_at
        }
      }
    `,
    variables: {
      input: {
        content_type: 'audio/mpeg',
        file_size: fileSize,
        title: title
      }
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  
  const { upload_url, meeting_id } = createUrlResponse.data.data.createUploadUrl;
  console.log('Got upload URL for meeting:', meeting_id);
  
  // Step 2: Upload the file to the signed URL
  await axios.put(upload_url, fileBuffer, {
    headers: {
      'Content-Type': 'audio/mpeg'
    }
  });
  console.log('File uploaded successfully');
  
  // Step 3: Confirm the upload
  const confirmResponse = await axios.post(API_URL, {
    query: `
      mutation($input: ConfirmUploadInput!) {
        confirmUpload(input: $input) {
          success
          meeting_id
          message
        }
      }
    `,
    variables: {
      input: {
        meeting_id: meeting_id
      }
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  
  console.log('Upload confirmed:', confirmResponse.data.data.confirmUpload);
  return meeting_id;
}

// Usage
uploadAudioFile('./meeting-recording.mp3', 'Team Standup')
  .then(meetingId => console.log('Transcription started for:', meetingId))
  .catch(err => console.error('Upload failed:', err));
```

## Error Codes

<Accordion title="object_not_found (UploadSession)">
  The upload session was not found or has expired. Upload sessions expire after 1 hour. You need to call `createUploadUrl` again to get a new upload URL.
</Accordion>

<Accordion title="object_not_found (Audio/Video)">
  The file was not found in storage. Make sure you have successfully uploaded the file to the signed URL before calling this mutation.
</Accordion>

## Important Notes

* Upload sessions expire after **1 hour**. If you don't confirm within this time, you'll need to start over with a new `createUploadUrl` call.
* Make sure the file upload to the signed URL completes successfully before calling `confirmUpload`.
* The `meeting_id` must match the one returned from `createUploadUrl`.
* Only the user who created the upload session can confirm it.

## Additional Resources

<CardGroup cols={2}>
  <Card title="Create Upload URL" icon="link" href="/graphql-api/mutation/create-upload-url">
    Generate a pre-signed URL for uploads
  </Card>

  <Card title="Webhooks" icon="link" href="/graphql-api/webhooks">
    Receive notifications when transcription completes
  </Card>

  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Query the transcript after processing
  </Card>

  <Card title="Upload Audio (URL)" icon="link" href="/graphql-api/mutation/upload-audio">
    Alternative: Upload audio via public URL
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_continue-askfred-thread.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Continue AskFred Thread

> Continue an existing AskFred conversation with follow-up questions

## Overview

The `continueAskFredThread` mutation allows you to add follow-up questions to an existing AskFred conversation thread. This maintains the context of previous questions and answers, enabling more sophisticated multi-turn conversations about your meeting data.

## Arguments

<ParamField path="input" type="ContinueAskFredThreadInput">
  <Expandable>
    <ResponseField name="thread_id" type="String" required>
      The ID of the existing thread to continue
    </ResponseField>

    <ResponseField name="query" type="String" required>
      Your follow-up question or query. Maximum 2000 characters.
    </ResponseField>

    <ResponseField name="response_language" type="LanguageCode">
      Language code for the response (e.g., 'en' for English, 'es' for Spanish). See [Language Codes](/miscellaneous/language-codes) for full list.
    </ResponseField>

    <ResponseField name="format_mode" type="FormatMode">
      Response format: 'markdown' for rich formatting or 'plaintext' for simple text
    </ResponseField>
  </Expandable>
</ParamField>

## Returns

Returns an `AskFredResponse` object containing the generated message with the answer to your follow-up query.

## Usage Example

```graphql theme={null}
mutation ContinueThread($input: ContinueAskFredThreadInput!) {
  continueAskFredThread(input: $input) {
    message {
      id
      thread_id
      query
      answer
      suggested_queries
      status
      created_at
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation ContinueThread($input: ContinueAskFredThreadInput!) { continueAskFredThread(input: $input) { message { id thread_id query answer suggested_queries status } } }",
      "variables": {
        "input": {
          "thread_id": "thread_abc123",
          "query": "Can you provide more details about the budget allocation?",
          "response_language": "en",
          "format_mode": "markdown"
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const input = {
    thread_id: "thread_abc123",
    query: "Can you provide more details about the budget allocation?",
    response_language: "en",
    format_mode: "markdown"
  };

  const data = {
    query: `
      mutation ContinueAskFredThread($input: ContinueAskFredThreadInput!) {
        continueAskFredThread(input: $input) {
          message {
            id
            thread_id
            query
            answer
            suggested_queries
            status
            created_at
          }
        }
      }
    `,
    variables: { input }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.error(e);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  input_data = {
      "thread_id": "thread_abc123",
      "query": "Can you provide more details about the budget allocation?",
      "response_language": "en",
      "format_mode": "markdown"
  }

  query = '''
      mutation ContinueAskFredThread($input: ContinueAskFredThreadInput!) {
          continueAskFredThread(input: $input) {
              message {
                  id
                  thread_id
                  query
                  answer
                  suggested_queries
                  status
                  created_at
              }
          }
      }
  '''

  data = {
      'query': query,
      'variables': {'input': input_data}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "continueAskFredThread": {
        "message": {
          "id": "msg_003",
          "thread_id": "thread_abc123",
          "query": "Can you provide more details about the budget allocation?",
          "answer": "Certainly! Here are the detailed budget allocations discussed in the meeting:\n\n## Q4 Budget Breakdown ($150K Total)\n\n### Engineering (60% - $90K)\n- **Infrastructure Improvements**: $30K\n  - Cloud services optimization\n  - Database scaling\n  - Security enhancements\n- **Feature Development**: $45K\n  - Mobile app features: $25K\n  - API v2 development: $20K\n- **Technical Debt**: $15K\n  - Code refactoring\n  - Legacy system migration\n\n### Design & UX (25% - $37.5K)\n- **User Research**: $10K\n- **Design System Updates**: $15K\n- **Prototype Development**: $12.5K\n\n### Marketing & Growth (15% - $22.5K)\n- **Content Creation**: $7.5K\n- **Paid Acquisition Tests**: $10K\n- **Partnership Development**: $5K\n\nThe CFO emphasized maintaining a 10% contingency within each category for unexpected costs.",
          "suggested_queries": [
            "Who is responsible for managing each budget category?",
            "What are the key milestones for the infrastructure improvements?",
            "How will the budget be tracked and reported?"
          ],
          "status": "completed",
          "created_at": "2024-03-15T10:35:00Z"
        }
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

<Accordion title="object_not_found">
  <p>The specified thread\_id does not exist or you don't have access to it</p>
</Accordion>

<Accordion title="require_ai_credits">
  <p>You have insufficient AI credits to continue the thread. Please upgrade your plan or purchase additional credits.</p>
</Accordion>

<Accordion title="invalid_language_code">
  <p>The language code you provided is invalid. Please refer to the [Language Codes](/miscellaneous/language-codes) page for a list of valid language codes.</p>
</Accordion>

## Related

<CardGroup cols={2}>
  <Card title="View Thread" icon="link" href="/graphql-api/query/askfred-thread">
    Get complete thread with all messages
  </Card>

  <Card title="Create New Thread" icon="link" href="/graphql-api/mutation/create-askfred-thread">
    Start a new conversation thread
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_create-askfred-thread.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create AskFred Thread

> Create a new AskFred conversation thread with a question about your meetings

## Overview

The `createAskFredThread` mutation allows you to start a new AskFred conversation by asking questions about your meeting transcripts. You can ask about a specific meeting or search across multiple meetings using filters. AskFred uses AI to analyze your meeting data and provide intelligent, context-aware answers.

## Arguments

<ParamField path="input" type="CreateAskFredThreadInput">
  <Expandable>
    <ResponseField name="query" type="String" required>
      Your question or query about the meeting(s). Maximum 2000 characters.
    </ResponseField>

    <ResponseField name="transcript_id" type="String">
      ID of a specific transcript/meeting to query. If provided, the question will be answered based only on this meeting.
    </ResponseField>

    <ResponseField name="filters" type="AskFredMeetingFiltersInput">
      Filters to search across multiple meetings. Only used if transcript\_id is not provided.

      <Expandable>
        <ResponseField name="start_time" type="String">
          Filter meetings from this date/time (ISO 8601 format). Cannot be more than 1 year in the past. If not provided, defaults to 30 days before end\_time.
        </ResponseField>

        <ResponseField name="end_time" type="String">
          Filter meetings until this date/time (ISO 8601 format). If not provided, defaults to today.
        </ResponseField>

        <ResponseField name="channel_ids" type="[String]">
          Filter by specific channel/integration IDs
        </ResponseField>

        <ResponseField name="organizers" type="[String]">
          Filter by meeting organizer email addresses
        </ResponseField>

        <ResponseField name="participants" type="[String]">
          Filter by participant email addresses
        </ResponseField>

        <ResponseField name="transcript_ids" type="[String]">
          Filter by specific transcript IDs
        </ResponseField>
      </Expandable>
    </ResponseField>

    <ResponseField name="response_language" type="LanguageCode">
      Language code for the response (e.g., 'en' for English, 'es' for Spanish). See [Language Codes](/miscellaneous/language-codes) for full list.
    </ResponseField>

    <ResponseField name="format_mode" type="FormatMode">
      Response format: 'markdown' for rich formatting or 'plaintext' for simple text
    </ResponseField>
  </Expandable>
</ParamField>

## Returns

Returns an `AskFredResponse` object containing the generated message with the answer to your query.

## Usage Example

### Query a Specific Meeting

```graphql theme={null}
mutation CreateThreadForMeeting($input: CreateAskFredThreadInput!) {
  createAskFredThread(input: $input) {
    message {
      id
      thread_id
      query
      answer
      suggested_queries
      status
      created_at
    }
  }
}
```

### Query Across Multiple Meetings

```graphql theme={null}
mutation CreateThreadWithFilters($input: CreateAskFredThreadInput!) {
  createAskFredThread(input: $input) {
    message {
      id
      thread_id
      query
      answer
      suggested_queries
      status
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation CreateThread($input: CreateAskFredThreadInput!) { createAskFredThread(input: $input) { message { id thread_id query answer suggested_queries status } } }",
      "variables": {
        "input": {
          "query": "What were the main decisions made in the product planning meeting?",
          "transcript_id": "transcript_xyz789",
          "response_language": "en",
          "format_mode": "markdown"
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  // Example 1: Query a specific meeting
  const inputForSpecificMeeting = {
    query: "What were the action items discussed?",
    transcript_id: "transcript_xyz789",
    response_language: "en",
    format_mode: "markdown"
  };

  // Example 2: Query across meetings with filters
  const inputWithFilters = {
    query: "What customer concerns were raised this week?",
    filters: {
      start_time: "2024-03-10T00:00:00Z",
      end_time: "2024-03-17T00:00:00Z",
      participants: ["customer@example.com"]
    },
    response_language: "en",
    format_mode: "markdown"
  };

  const data = {
    query: `
      mutation CreateAskFredThread($input: CreateAskFredThreadInput!) {
        createAskFredThread(input: $input) {
          message {
            id
            thread_id
            query
            answer
            suggested_queries
            status
            created_at
          }
        }
      }
    `,
    variables: { input: inputForSpecificMeeting }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.error(e);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  # Example 1: Query a specific meeting
  input_specific = {
      "query": "What were the action items discussed?",
      "transcript_id": "transcript_xyz789",
      "response_language": "en",
      "format_mode": "markdown"
  }

  # Example 2: Query across meetings with filters
  input_filtered = {
      "query": "What customer concerns were raised this week?",
      "filters": {
          "start_time": "2024-03-10T00:00:00Z",
          "end_time": "2024-03-17T00:00:00Z",
          "participants": ["customer@example.com"]
      },
      "response_language": "en",
      "format_mode": "markdown"
  }

  query = '''
      mutation CreateAskFredThread($input: CreateAskFredThreadInput!) {
          createAskFredThread(input: $input) {
              message {
                  id
                  thread_id
                  query
                  answer
                  suggested_queries
                  status
                  created_at
              }
          }
      }
  '''

  data = {
      'query': query,
      'variables': {'input': input_specific}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "createAskFredThread": {
        "message": {
          "id": "msg_001",
          "thread_id": "thread_new123",
          "query": "What were the main decisions made in the product planning meeting?",
          "answer": "Based on the product planning meeting transcript, here are the main decisions made:\n\n## Product Roadmap\n- **Q4 Focus**: Prioritize mobile app improvements and API v2 development\n- **Feature Freeze**: No new features after November 15th to focus on stability\n\n## Resource Allocation\n- **Team Expansion**: Approved hiring 2 senior engineers and 1 UX designer\n- **Budget**: Allocated $150K for Q4 development initiatives\n\n## Timeline\n- **Beta Release**: Scheduled for December 1st\n- **Public Launch**: Targeted for January 15th\n\n## Strategic Partnerships\n- **Integration Partners**: Approved partnerships with Slack and Microsoft Teams\n- **API Access**: Will provide early access to 5 strategic partners",
          "suggested_queries": [
            "What specific mobile app improvements were discussed?",
            "Who will be responsible for the API v2 development?",
            "What were the concerns raised about the timeline?"
          ],
          "status": "completed",
          "created_at": "2024-03-15T10:30:00Z"
        }
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

<Accordion title="invalid_arguments">
  <p>Validation error occurred. Common causes:</p>

  <ul>
    <li>Query exceeds 2000 character limit or is empty</li>
    <li>Both transcript\_id and filters are provided (only one is allowed)</li>
    <li>start\_time is more than 1 year in the past</li>
    <li>start\_time is not before end\_time</li>
  </ul>
</Accordion>

<Accordion title="object_not_found">
  <p>The specified transcript\_id does not exist or you don't have access to it</p>
</Accordion>

<Accordion title="require_ai_credits">
  <p>You don't have access to AI credits. Upgrade your plan to use AskFred.</p>
</Accordion>

<Accordion title="invalid_language_code">
  <p>The provided response\_language code is not supported. See <a href="/miscellaneous/language-codes">Language Codes</a> for valid options.</p>
</Accordion>

## Related

<CardGroup cols={2}>
  <Card title="Continue Thread" icon="link" href="/graphql-api/mutation/continue-askfred-thread">
    Add follow-up questions to continue the conversation
  </Card>

  <Card title="List Threads" icon="link" href="/graphql-api/query/askfred-threads">
    View all your AskFred conversation threads
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_create-bite.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create bite

> Use the API to create a bite

## Overview

The `createBite` mutation allows you to create a bite through the API.

## Arguments

<ParamField path="transcript_id" type="ID" required>
  ID of the transcript
</ParamField>

<ParamField path="name" type="String">
  Name of the bite

  Maximum length is 256 characters.
</ParamField>

<ParamField path="start_time" type="Float" required>
  Start time of the bite in seconds
</ParamField>

<ParamField path="end_time" type="Float" required>
  End time of the bite in seconds
</ParamField>

<ParamField path="media_type" type="String">
  Type of the bite, either 'video' or 'audio'
</ParamField>

<ParamField path="privacies" type="[String]">
  Array specifying the visibility of the Soundbite. Possible values are 'public', 'team', and
  'participants'. For example, \["team", "participants"] indicates visibility to both team members
  and participants, while \["public"] denotes full public access.
</ParamField>

<ParamField path="summary" type="String">
  Summary for the bite

  Maximum length is 500 characters.
</ParamField>

## Usage Example

To create a bite, provide the necessary input parameters to the mutation. Here's an example of how this mutation could be used:

```graphql theme={null}
mutation Mutation($transcriptId: ID!, $startTime: Float!, $endTime: Float!) {
  createBite(transcript_id: $transcriptId, start_time: $startTime, end_time: $endTime) {
    status
    name
    id
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	-d '{
  		"query": "mutation CreateBite($transcriptId: ID!, $startTime: Float!, $endTime: Float!) { createBite(transcript_id: $transcriptId, start_time: $startTime, end_time: $endTime) { summary status id } }",
  		"variables": {
  			"transcriptId": "your_transcript_id",
  			"startTime": 0,
  			"endTime": 5
  		}
  	}'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `mutation CreateBite($transcriptId: ID!, $startTime: Float!, $endTime: Float!) {
  			createBite(transcript_id: $transcriptId, start_time: $startTime, end_time: $endTime) {
  				summary
  				status
  				id
  			}
  		}`,
    variables: { transcriptId: 'your_transcript_id', startTime: 0, endTime: 5 }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = {
      'query': '''
       	mutation CreateBite($transcriptId: ID!, $startTime: Float!, $endTime: Float!) {
  			createBite(transcript_id: $transcriptId, start_time: $startTime, end_time: $endTime) {
  				summary
  				status
  				id
  			}
  		}
      ''',
      'variables': {
          'transcriptId': "your_transcript_id",
          'startTime': 0,
  		'endTime': 5
      }
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json()['data'])
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"mutation CreateBite($transcriptId: ID!, $startTime: Float!, $endTime: Float!) { createBite(transcript_id: $transcriptId, start_time: $startTime, end_time: $endTime) { summary status id } }\", \"variables\": {\"transcriptId\": \"your_transcript_id\", \"startTime\": 0, \"endTime\": 5}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "createBite": {
        "name": "bite-name",
        "status": "pending",
      }
    }
  }
  ```
</ResponseExample>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Bites" icon="link" href="/graphql-api/query/bites">
    Querying list of bites
  </Card>

  <Card title="Bite" icon="link" href="/graphql-api/query/bite">
    Querying bite details
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_create-live-action-item.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create Live Action Item

> Use the API to create an action item during a live meeting

## Overview

The `createLiveActionItem` mutation allows you to create an action item during a live meeting through the API. The action item is created using natural language processing via Fred, Fireflies' AI assistant.

This mutation is rate-limited to 10 requests per hour across all user tiers. It also requires AI credits to be available on the user's account.

## Arguments

<ParamField path="input" type="CreateLiveActionItemInput!" required>
  Input object containing the meeting ID and prompt for the action item. See [CreateLiveActionItemInput](/schema/input/create-live-action-item-input) for details.
</ParamField>

## Response

<ResponseField name="success" type="Boolean!">
  Whether the action item was created successfully
</ResponseField>

## Usage Example

To create a live action item, provide the meeting ID and a natural language prompt:

```graphql theme={null}
mutation CreateLiveActionItem($input: CreateLiveActionItemInput!) {
  createLiveActionItem(input: $input) {
    success
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation CreateLiveActionItem($input: CreateLiveActionItemInput!) { createLiveActionItem(input: $input) { success } }",
      "variables": {
        "input": {
          "meeting_id": "your_meeting_id",
          "prompt": "Follow up with the client about the proposal"
        }
      }
    }'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `mutation CreateLiveActionItem($input: CreateLiveActionItemInput!) {
      createLiveActionItem(input: $input) {
        success
      }
    }`,
    variables: {
      input: {
        meeting_id: 'your_meeting_id',
        prompt: 'Follow up with the client about the proposal'
      }
    }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = {
      'query': '''
        mutation CreateLiveActionItem($input: CreateLiveActionItemInput!) {
          createLiveActionItem(input: $input) {
            success
          }
        }
      ''',
      'variables': {
          'input': {
              'meeting_id': 'your_meeting_id',
              'prompt': 'Follow up with the client about the proposal'
          }
      }
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json()['data'])
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"mutation CreateLiveActionItem($input: CreateLiveActionItemInput!) { createLiveActionItem(input: $input) { success } }\", \"variables\": {\"input\": {\"meeting_id\": \"your_meeting_id\", \"prompt\": \"Follow up with the client about the proposal\"}}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "createLiveActionItem": {
        "success": true
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `createLiveActionItem` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found">
  <p>The meeting with the specified ID was not found or you do not have access to it.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>You do not have permission to create action items for this meeting. Only the meeting organizer or team admin can create live action items.</p>
</Accordion>

<Accordion title="insufficient_ai_credits">
  <p>Your account does not have sufficient AI credits to perform this operation. Please upgrade your plan or purchase additional credits.</p>
</Accordion>

<Accordion title="too_many_requests">
  <p>You have exceeded the rate limit for this mutation. The limit is 10 requests per hour. Please wait before making additional requests.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Live Action Items" icon="link" href="/graphql-api/query/live-action-items">
    Query live action items for a meeting
  </Card>

  <Card title="Update Meeting State" icon="link" href="/graphql-api/mutation/update-meeting-state">
    Pause or resume recording for a live meeting
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_create-live-soundbite.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create Live Soundbite

> Use the API to create a soundbite during a live meeting

## Overview

The `createLiveSoundbite` mutation allows you to create a soundbite during a live meeting through the API. The soundbite is created using natural language processing via Fred, Fireflies' AI assistant.

<Note>
  **Rate Limit:** This mutation is rate-limited to 10 requests per hour across all user tiers. If you exceed this limit, you will receive a `too_many_requests` error with a `retryAfter` timestamp indicating when you can make requests again.

  **AI Credits:** This mutation requires AI credits to be available on the user's account.
</Note>

## Arguments

<ParamField path="input" type="CreateLiveSoundbiteInput!" required>
  Input object containing the meeting ID and prompt for the soundbite. See [CreateLiveSoundbiteInput](/schema/input/create-live-soundbite-input) for details.
</ParamField>

## Response

<ResponseField name="success" type="Boolean!">
  Whether the soundbite was created successfully
</ResponseField>

## Usage Example

To create a live soundbite, provide the meeting ID and a natural language prompt:

```graphql theme={null}
mutation CreateLiveSoundbite($input: CreateLiveSoundbiteInput!) {
  createLiveSoundbite(input: $input) {
    success
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation CreateLiveSoundbite($input: CreateLiveSoundbiteInput!) { createLiveSoundbite(input: $input) { success } }",
      "variables": {
        "input": {
          "meeting_id": "your_meeting_id",
          "prompt": "Create a soundbite from the last 2 minutes"
        }
      }
    }'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `mutation CreateLiveSoundbite($input: CreateLiveSoundbiteInput!) {
      createLiveSoundbite(input: $input) {
        success
      }
    }`,
    variables: {
      input: {
        meeting_id: 'your_meeting_id',
        prompt: 'Create a soundbite from the last 2 minutes'
      }
    }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = {
      'query': '''
        mutation CreateLiveSoundbite($input: CreateLiveSoundbiteInput!) {
          createLiveSoundbite(input: $input) {
            success
          }
        }
      ''',
      'variables': {
          'input': {
              'meeting_id': 'your_meeting_id',
              'prompt': 'Create a soundbite from the last 2 minutes'
          }
      }
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json()['data'])
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"mutation CreateLiveSoundbite($input: CreateLiveSoundbiteInput!) { createLiveSoundbite(input: $input) { success } }\", \"variables\": {\"input\": {\"meeting_id\": \"your_meeting_id\", \"prompt\": \"Create a soundbite from the last 2 minutes\"}}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "createLiveSoundbite": {
        "success": true
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `createLiveSoundbite` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found">
  <p>The meeting with the specified ID was not found or you do not have access to it.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>You do not have permission to create soundbites for this meeting. Only the meeting organizer or team admin can create live soundbites.</p>
</Accordion>

<Accordion title="insufficient_ai_credits">
  <p>Your account does not have sufficient AI credits to perform this operation. Please upgrade your plan or purchase additional credits.</p>
</Accordion>

<Accordion title="too_many_requests">
  <p>You have exceeded the rate limit of 10 requests per hour. Wait until the time specified in the `retryAfter` field before making additional requests.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Create Bite" icon="link" href="/graphql-api/mutation/create-bite">
    Create a soundbite for a completed meeting
  </Card>

  <Card title="Update Meeting State" icon="link" href="/graphql-api/mutation/update-meeting-state">
    Pause or resume recording for a live meeting
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_create-upload-url.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create Upload URL

> Generate a pre-signed URL for direct audio/video file uploads

<Warning>
  This API is not generally available. Access requires whitelisting. Please contact Fireflies support to request access.
</Warning>

## Overview

The `createUploadUrl` mutation generates a pre-signed URL that allows you to upload audio or video files directly to Fireflies.ai storage. This is useful when you want to upload files from your own infrastructure without exposing them via a public URL.

This mutation is part of a two-step upload flow:

1. Call `createUploadUrl` to get a pre-signed upload URL
2. Upload your file directly to the URL using an HTTP PUT request
3. Call [confirmUpload](/graphql-api/mutation/confirm-upload) to confirm the upload and start transcription

## Arguments

<ParamField path="input" type="CreateUploadUrlInput" required>
  <Expandable>
    <ResponseField name="content_type" type="String" required>
      The MIME type of the file being uploaded. Must be one of the supported audio or video formats. See [Supported Content Types](#supported-content-types) below.
    </ResponseField>

    <ResponseField name="file_size" type="Int" required>
      The size of the file in bytes. Used for validation against plan limits. Maximum 2GB for video files (paid users) or 400MB for audio files.
    </ResponseField>

    <ResponseField name="title" type="String">
      Title or name of the meeting. This will be used to identify the transcribed file. Maximum 256 characters.
    </ResponseField>

    <ResponseField name="custom_language" type="String">
      Specify a custom language code for your meeting, e.g. `es` for Spanish or `de` for German. For a complete list of language codes, please view [Language Codes](/miscellaneous/language-codes). Maximum 5 characters.
    </ResponseField>

    <ResponseField name="attendees" type="[Attendee]">
      An array of [Attendee](/schema/input/attendee) objects. This is relevant if you have active integrations like Salesforce, Hubspot etc. Fireflies uses the attendees value to push meeting notes to your active CRM integrations. Maximum 100 attendees.
    </ResponseField>
  </Expandable>
</ParamField>

## Response

<ResponseField name="upload_url" type="String">
  The pre-signed URL to upload your file to. Use an HTTP PUT request with the file content as the body.
</ResponseField>

<ResponseField name="meeting_id" type="String">
  The unique identifier for the meeting. Use this ID when calling `confirmUpload`.
</ResponseField>

<ResponseField name="expires_at" type="String">
  ISO 8601 timestamp indicating when the upload URL expires. URLs are valid for 1 hour.
</ResponseField>

## Usage Example

```graphql theme={null}
mutation createUploadUrl($input: CreateUploadUrlInput!) {
  createUploadUrl(input: $input) {
    upload_url
    meeting_id
    expires_at
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation($input: CreateUploadUrlInput!) { createUploadUrl(input: $input) { upload_url meeting_id expires_at } }",
      "variables": {
        "input": {
          "content_type": "audio/mpeg",
          "file_size": 10485760,
          "title": "Team Meeting Recording"
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const input = {
    content_type: 'audio/mpeg',
    file_size: 10485760,
    title: 'Team Meeting Recording'
  };

  const data = {
    query: `
      mutation($input: CreateUploadUrlInput!) {
        createUploadUrl(input: $input) {
          upload_url
          meeting_id
          expires_at
        }
      }
    `,
    variables: { input }
  };

  axios
    .post(url, data, { headers })
    .then(result => {
      console.log(result.data);
      
      // Step 2: Upload the file to the signed URL
      const { upload_url, meeting_id } = result.data.data.createUploadUrl;
      // Use fetch or axios to PUT your file to upload_url
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  input_data = {
      "content_type": "audio/mpeg",
      "file_size": 10485760,
      "title": "Team Meeting Recording"
  }

  data = {
      'query': '''
          mutation($input: CreateUploadUrlInput!) {
              createUploadUrl(input: $input) {
                  upload_url
                  meeting_id
                  expires_at
              }
          }
      ''',
      'variables': {'input': input_data}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      result = response.json()
      print(result)
      
      # Step 2: Upload the file to the signed URL
      upload_url = result['data']['createUploadUrl']['upload_url']
      meeting_id = result['data']['createUploadUrl']['meeting_id']
      # Use requests.put() to upload your file to upload_url
  else:
      print(response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "createUploadUrl": {
        "upload_url": "https://storage.googleapis.com/...",
        "meeting_id": "abc123def456",
        "expires_at": "2024-01-15T12:00:00.000Z"
      }
    }
  }
  ```
</ResponseExample>

## Uploading the File

After receiving the signed URL, upload your file using an HTTP PUT request:

```bash theme={null}
curl -X PUT \
  -H "Content-Type: audio/mpeg" \
  --data-binary @your-audio-file.mp3 \
  "https://storage.googleapis.com/..."
```

```javascript theme={null}
const fs = require('fs');
const axios = require('axios');

const fileBuffer = fs.readFileSync('your-audio-file.mp3');

await axios.put(uploadUrl, fileBuffer, {
  headers: {
    'Content-Type': 'audio/mpeg'
  }
});
```

```python theme={null}
with open('your-audio-file.mp3', 'rb') as f:
    file_data = f.read()

response = requests.put(
    upload_url,
    data=file_data,
    headers={'Content-Type': 'audio/mpeg'}
)
```

After the upload completes successfully, call [confirmUpload](/graphql-api/mutation/confirm-upload) to start transcription.

## Supported Content Types

### Audio Formats

| MIME Type        | Extension |
| ---------------- | --------- |
| `audio/mpeg`     | .mp3      |
| `audio/mp3`      | .mp3      |
| `audio/wav`      | .wav      |
| `audio/x-wav`    | .wav      |
| `audio/vnd.wave` | .wav      |
| `audio/x-m4a`    | .m4a      |
| `audio/mp4`      | .m4a      |
| `audio/ogg`      | .ogg      |
| `audio/webm`     | .webm     |
| `audio/aac`      | .aac      |
| `audio/x-aac`    | .aac      |
| `audio/aac-adts` | .aac      |
| `audio/amr`      | .amr      |
| `audio/opus`     | .opus     |
| `audio/3gpp`     | .3gp      |

### Video Formats

| MIME Type         | Extension |
| ----------------- | --------- |
| `video/mp4`       | .mp4      |
| `video/webm`      | .webm     |
| `video/quicktime` | .mov      |
| `video/x-m4v`     | .m4v      |
| `video/mpeg`      | .mpeg     |
| `video/x-msvideo` | .avi      |
| `video/ogg`       | .ogv      |
| `video/3gpp`      | .3gp      |

## File Size Limits

| File Type | User Plan | Maximum Size |
| --------- | --------- | ------------ |
| Audio     | All plans | 400 MB       |
| Video     | Free      | 200 MB       |
| Video     | Paid      | 2 GB         |

## Error Codes

<Accordion title="paid_required">
  This mutation requires a paid plan (Pro or higher). Free plan users cannot use direct file uploads.
</Accordion>

<Accordion title="invalid_arguments">
  The content type is not supported, or the file size exceeds the allowed limit for your plan.
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Confirm Upload" icon="link" href="/graphql-api/mutation/confirm-upload">
    Confirm the upload and start transcription
  </Card>

  <Card title="Upload Audio (URL)" icon="link" href="/graphql-api/mutation/upload-audio">
    Alternative: Upload audio via public URL
  </Card>

  <Card title="Webhooks" icon="link" href="/graphql-api/webhooks">
    Receive notifications when transcription completes
  </Card>

  <Card title="Language Codes" icon="link" href="/miscellaneous/language-codes">
    Supported language codes for transcription
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_delete-askfred-thread.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Delete AskFred Thread

> Delete an AskFred conversation thread and all its messages

## Overview

The `deleteAskFredThread` mutation allows you to permanently delete an AskFred conversation thread along with all its associated messages. This action is irreversible.

## Arguments

<ParamField path="id" type="String" required>
  The unique identifier of the AskFred thread to delete
</ParamField>

## Returns

Returns the deleted `AskFredThread` object if successful, allowing you to confirm the deletion details.

## Usage Example

```graphql theme={null}
mutation DeleteThread($id: String!) {
  deleteAskFredThread(id: $id) {
    id
    title
    transcript_id
    user_id
    created_at
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation DeleteThread($id: String!) { deleteAskFredThread(id: $id) { id title transcript_id created_at } }",
      "variables": {
        "id": "thread_abc123"
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const threadId = 'thread_abc123';

  const data = {
    query: `
      mutation DeleteAskFredThread($id: String!) {
        deleteAskFredThread(id: $id) {
          id
          title
          transcript_id
          user_id
          created_at
        }
      }
    `,
    variables: { id: threadId }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log('Thread deleted:', result.data);
    })
    .catch(e => {
      console.error('Error deleting thread:', e);
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  thread_id = 'thread_abc123'

  query = '''
      mutation DeleteAskFredThread($id: String!) {
          deleteAskFredThread(id: $id) {
              id
              title
              transcript_id
              user_id
              created_at
          }
      }
  '''

  variables = {
      'id': thread_id
  }

  data = {
      'query': query,
      'variables': variables
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print('Thread deleted:', response.json())
  else:
      print('Error:', response.text)
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "deleteAskFredThread": {
        "id": "thread_abc123",
        "title": "What were the action items from the Q4 planning meeting?",
        "transcript_id": "transcript_xyz789",
        "user_id": "user_123",
        "created_at": "2024-03-15T10:30:00Z"
      }
    }
  }
  ```
</ResponseExample>

## Important Notes

<Warning>
  Deletion is permanent and cannot be undone
</Warning>

## Error Codes

<Accordion title="object_not_found">
  <p>The specified thread ID does not exist or you don't have access to it</p>
</Accordion>

## Related

<CardGroup cols={2}>
  <Card title="List Threads" icon="link" href="/graphql-api/query/askfred-threads">
    View all your threads before deletion
  </Card>

  <Card title="View Thread Details" icon="link" href="/graphql-api/query/askfred-thread">
    Review thread content before deletion
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_delete-transcript.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Delete Transcript

> Use the API to manage transcript deletion

## Overview

The `deleteTranscript` mutation is designed to delete a specific transcript by its ID.

<Note>
  **Rate Limit:** This mutation is rate-limited to 10 requests per minute across all user tiers. If you exceed this limit, you will receive a `too_many_requests` error with a `retryAfter` timestamp indicating when you can make requests again.
</Note>

## Arguments

<ParamField path="id" type="String" required>
  Transcript ID
</ParamField>

## Usage Example

To delete a transcript, provide the unique id of the transcript as an argument to the mutation. The returned subfields will be from the deleted transcript. Here’s an example of how this mutation could be used:

```graphql theme={null}
mutation deleteTranscript($id: String!) {
  deleteTranscript(id: $id) {
    id
    title
    host_email
    organizer_email
    fireflies_users
    participants
    date
    transcript_url
    audio_url
    duration
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{"query": "mutation($transcriptId: String!) { deleteTranscript(id: $transcriptId) { title date duration organizer_email } }", "variables": {"transcriptId": "your_transcript_id"}}' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };
  const data = {
    query: `
        mutation($transcriptId: String!) {
          deleteTranscript(id: $transcriptId) {
            title
            date
            duration
            organizer_email
          }
        }
      `,
    variables: { transcriptId: 'transcript_id' }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = {
      'query': '''
          mutation($transcriptId: String!) {
            deleteTranscript(id: $transcriptId) {
              title
              date
              duration
              organizer_email
            }
          }
      ''',
      'variables': {'transcriptId': 'your_transcript_id'}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)


  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
      public static void main(String[] args) throws IOException, InterruptedException {
          HttpClient client = HttpClient.newHttpClient();

          String json = "{\"query\":\"mutation($transcriptId: String!) { deleteTranscript(id: $transcriptId) { title date duration organizer_email } }\",\"variables\":{\"transcriptId\":\"your_transcript_id\"}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "deleteTranscript": {
        "duration": "1",
        "date": 1699570138000,
        "organizer_email": "justin@fly.ai",
        "title": "Video title"
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `deleteTranscript` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="require_elevated_privilege">
  <p>The user does not have admin privileges to delete the transcript.</p>
</Accordion>

<Accordion title="too_many_requests">
  <p>You have exceeded the rate limit of 10 requests per minute. Wait until the time specified in the `retryAfter` field before making additional requests.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcripts" icon="link" href="/graphql-api/query/transcripts">
    Querying list of transcripts
  </Card>

  <Card title="Update Meeting Privacy" icon="link" href="/graphql-api/mutation/update-meeting-privacy">
    Update meeting privacy
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_revoke-shared-meeting-access.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Revoke Shared Meeting Access

> Use the API to revoke shared access to a meeting transcript

## Overview

The `revokeSharedMeetingAccess` mutation revokes a previously shared user's access to a meeting transcript.

## Arguments

<ParamField path="input" type="RevokeSharedMeetingAccessInput" required>
  The revocation details. See [RevokeSharedMeetingAccessInput](/schema/input/revoke-shared-meeting-access-input).
</ParamField>

## Usage Example

To revoke shared access, provide the meeting ID and the email address of the user whose access you want to revoke.

```graphql theme={null}
mutation RevokeSharedMeetingAccess($input: RevokeSharedMeetingAccessInput!) {
  revokeSharedMeetingAccess(input: $input) {
    success
    message
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	-d '{
  		"query": "mutation($input: RevokeSharedMeetingAccessInput!) { revokeSharedMeetingAccess(input: $input) { success message } }",
  		"variables": {
  			"input": {
  				"meeting_id": "your_meeting_id",
  				"email": "user@example.com"
  			}
  		}
  	}'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  };

  const data = {
    query: `
      mutation($input: RevokeSharedMeetingAccessInput!) {
        revokeSharedMeetingAccess(input: $input) {
          success
          message
        }
      }
    `,
    variables: {
      input: {
        meeting_id: 'your_meeting_id',
        email: 'user@example.com'
      }
    }
  };

  const response = await axios.post(url, data, { headers });
  console.log(response.data);
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  }

  data = {
    'query': '''
      mutation($input: RevokeSharedMeetingAccessInput!) {
        revokeSharedMeetingAccess(input: $input) {
          success
          message
        }
      }
    ''',
    'variables': {
      'input': {
        'meeting_id': 'your_meeting_id',
        'email': 'user@example.com'
      }
    }
  }

  response = requests.post(url, json=data, headers=headers)
  print(response.json())
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class RevokeSharedMeetingAccessExample {
      public static void main(String[] args) throws IOException, InterruptedException {
          HttpClient client = HttpClient.newHttpClient();

          String json = "{"
              + "\"query\":\"mutation($input: RevokeSharedMeetingAccessInput!) { revokeSharedMeetingAccess(input: $input) { success message } }\","
              + "\"variables\":{"
              + "\"input\":{"
              + "\"meeting_id\":\"your_meeting_id\","
              + "\"email\":\"user@example.com\""
              + "}"
              + "}"
              + "}";

          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "revokeSharedMeetingAccess": {
        "success": true,
        "message": "Revoked meeting access"
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `revokeSharedMeetingAccess` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found (transcript)">
  <p>The specified transcript could not be found or you do not have access to it.</p>
</Accordion>

<Accordion title="object_not_found (shared meeting access)">
  <p>The specified email does not have shared access to this meeting.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>The user must be either the meeting owner or a team admin to revoke shared access.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Share Meeting" icon="link" href="/graphql-api/mutation/share-meeting">
    Share a meeting with external users
  </Card>

  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Query transcript details including shared\_with
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_set-user-role.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Set User Role

> Use the API to set user roles

## Overview

The `setUserRole` mutation allows for the updating of a user's role within a team.

## Arguments

<ParamField path="user_id" type="String" required>
  The unique identifier of the user.
</ParamField>

<ParamField path="role" type="Role" required>
  The [Role](/schema/input/role) to be assigned to the user. Valid types for user are `admin` and
  `user`
</ParamField>

## Usage Example

To set a user's role, provide the user's ID and the desired role as arguments to the mutation. Here's an example of how this mutation could be used:

```graphql theme={null}
mutation setUserRole($userId: String!, $role: Role!) {
  setUserRole(user_id: $userId, role: $role) {
    id
    name
    email
    role
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	-d '{
  		"query": "mutation($user_id: String!, $role: Role!) { setUserRole(user_id: $user_id, role:$role) { name is_admin } }",
  		"variables": {
  			"user_id": "your_user_id",
  			"role": "admin"
  		}
  	}'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `mutation Mutation($userId: String!, $role: Role!) {
  		setUserRole(user_id: $userId, role: $role) {
  		  name
  		  is_admin
  		}
  	  }`,
    variables: { userId: 'your_user_id', role: 'admin' }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = {
      'query': '''
        mutation($user_id: String!, $role: Role!) {
          setUserRole(user_id: $user_id, role:$role) {
            name
            is_admin
          }
        }
      ''',
      'variables': {
          'user_id': "your_user_id",
          'role': "admin"
      }
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json()['data'])
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"mutation SetUserRole($user_id: String!, $role: Role!) { setUserRole(user_id: $user_id, role: $role) { name is_admin } }\", \"variables\": {\"user_id\": \"your_user_id\", \"role\": \"admin\"}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }

  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "setUserRole": {
        "name": "Justin Fly",
        "is_admin": "true",
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `setUserRole` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found (team)">
  <p>This may indicate that you are not a part of any team. Please contact support if you encounter this error</p>
</Accordion>

<Accordion title="not_in_team">
  <p>The user ID you are trying to query is not in your team.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>The user does not have admin privileges to set the user role.</p>
</Accordion>

<Accordion title="admin_must_exist">
  <p>The team must have at least one admin. Please add an admin to the team or contact support if you encounter this error.</p>
</Accordion>

<Accordion title="invalid_args">
  <p>An invalid argument was provided to the mutation for the `role` field. Please check the arguments you are providing and try again.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Users" icon="link" href="/graphql-api/query/users">
    Querying list of users
  </Card>

  <Card title="User" icon="link" href="/graphql-api/query/user">
    Querying user details
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_share-meeting.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Share Meeting

> Use the API to share meeting transcripts with external users via email

## Overview

The `shareMeeting` mutation shares a meeting transcript with one or more users by email. Shared users receive access to view the transcript without needing to be on the same team.

## Arguments

<ParamField path="input" type="ShareMeetingInput" required>
  The sharing configuration. See [ShareMeetingInput](/schema/input/share-meeting-input).
</ParamField>

## Usage Example

To share a meeting, provide the meeting ID and an array of email addresses. You can optionally set an expiry period.

```graphql theme={null}
mutation ShareMeeting($input: ShareMeetingInput!) {
  shareMeeting(input: $input) {
    success
    message
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	-d '{
  		"query": "mutation($input: ShareMeetingInput!) { shareMeeting(input: $input) { success message } }",
  		"variables": {
  			"input": {
  				"meeting_id": "your_meeting_id",
  				"emails": ["user@example.com"],
  				"expiry_days": 7
  			}
  		}
  	}'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  };

  const data = {
    query: `
      mutation($input: ShareMeetingInput!) {
        shareMeeting(input: $input) {
          success
          message
        }
      }
    `,
    variables: {
      input: {
        meeting_id: 'your_meeting_id',
        emails: ['user@example.com'],
        expiry_days: 7
      }
    }
  };

  const response = await axios.post(url, data, { headers });
  console.log(response.data);
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  }

  data = {
    'query': '''
      mutation($input: ShareMeetingInput!) {
        shareMeeting(input: $input) {
          success
          message
        }
      }
    ''',
    'variables': {
      'input': {
        'meeting_id': 'your_meeting_id',
        'emails': ['user@example.com'],
        'expiry_days': 7
      }
    }
  }

  response = requests.post(url, json=data, headers=headers)
  print(response.json())
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ShareMeetingExample {
      public static void main(String[] args) throws IOException, InterruptedException {
          HttpClient client = HttpClient.newHttpClient();

          String json = "{"
              + "\"query\":\"mutation($input: ShareMeetingInput!) { shareMeeting(input: $input) { success message } }\","
              + "\"variables\":{"
              + "\"input\":{"
              + "\"meeting_id\":\"your_meeting_id\","
              + "\"emails\":[\"user@example.com\"],"
              + "\"expiry_days\":7"
              + "}"
              + "}"
              + "}";

          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "shareMeeting": {
        "success": true,
        "message": null
      }
    }
  }
  ```
</ResponseExample>

## FAQ

<Accordion title="Who can share a meeting?">
  <p>Only the meeting owner or a team admin (in the same team as the owner) can share a meeting.</p>
</Accordion>

<Accordion title="What happens if the user is already invited?">
  <p>The mutation returns `success: false` with a message indicating that the invitees are already invited.</p>
</Accordion>

<Accordion title="How many emails can I share with at once?">
  <p>You can share with up to 50 email addresses per request.</p>
</Accordion>

## Rate Limits

The `shareMeeting` mutation is rate-limited to **10 requests per hour** per user, in addition to the general API rate limits.

## Error Codes

List of possible error codes that may be returned by the `shareMeeting` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found">
  <p>The specified transcript could not be found or you do not have access to it.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>The user must be either the meeting owner or a team admin to share the meeting.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Revoke Shared Meeting Access" icon="link" href="/graphql-api/mutation/revoke-shared-meeting-access">
    Revoke shared access to a meeting
  </Card>

  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Query transcript details including shared\_with
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_update-meeting-channel.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Meeting Channel

> Use the API to update meeting channel assignments

## Overview

The `updateMeetingChannel` mutation allows for batch updating the channel assignment of multiple meeting transcripts. This operation requires admin privileges within the team or ownership of the meetings. You can update 1–5 transcripts at once with all-or-nothing semantics—if any transcript fails validation, none are updated.

## Arguments

<ParamField path="input" type="UpdateMeetingChannelInput" required>
  The channel assignment to be applied to the specified transcripts. See [UpdateMeetingChannelInput](/schema/input/update-meeting-channel-input).
</ParamField>

## Usage Example

To update meeting channels, provide an array of transcript IDs (1–5 items) and a single channel ID as arguments to the mutation. Here's an example of how this mutation could be used:

```graphql theme={null}
mutation UpdateMeetingChannel($input: UpdateMeetingChannelInput!) {
  updateMeetingChannel(input: $input) {
    id
    title
    channels {
      id
    }
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	-d '{
  		"query": "mutation($input: UpdateMeetingChannelInput!) { updateMeetingChannel(input: $input) { id title channels { id } } }",
  		"variables": {
  			"input": {
  				"transcript_ids": ["transcript_id_1", "transcript_id_2"],
  				"channel_id": "channel_id"
  			}
  		}
  	}'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  };

  const data = {
    query: `
      mutation($input: UpdateMeetingChannelInput!) {
        updateMeetingChannel(input: $input) {
          id
          title
          channels {
            id
          }
        }
      }
    `,
    variables: {
      input: {
        transcript_ids: ['transcript_id_1', 'transcript_id_2'],
        channel_id: 'channel_id'
      }
    }
  };

  const response = await axios.post(url, data, { headers });
  console.log(response.data);
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  }

  data = {
    'query': `
      mutation($input: UpdateMeetingChannelInput!) {
        updateMeetingChannel(input: $input) {
          id
          title
          channels {
            id
          }
        }
      }
    `,
    'variables': {
      'input': {
        'transcript_ids': ['transcript_id_1', 'transcript_id_2'],
        'channel_id': 'channel_id'
      }
    }
  }

  response = requests.post(url, json=data, headers=headers)
  print(response.json())
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;
  import java.net.http.HttpResponse.BodyHandlers;

  public class UpdateMeetingChannelExample {
      public static void main(String[] args) throws IOException, InterruptedException {
          HttpClient client = HttpClient.newHttpClient();

          String json = "{"
              + "\"query\":\"mutation($input: UpdateMeetingChannelInput!) { updateMeetingChannel(input: $input) { id title channels { id } } }\","
              + "\"variables\":{"
              + "\"input\":{"
              + "\"transcript_ids\":[\"transcript_id_1\",\"transcript_id_2\"],"
              + "\"channel_id\":\"channel_id\""
              + "}"
              + "}"
              + "}";

          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "updateMeetingChannel": [
        {
          "id": "transcript_id_1",
          "title": "Weekly Sync",
          "channels": [
            {
              "id": "channel_id"
            }
          ]
        },
        {
          "id": "transcript_id_2",
          "title": "Product Review",
          "channels": [
            {
              "id": "channel_id"
            }
          ]
        }
      ]
    }
  }
  ```
</ResponseExample>

## FAQ

<Accordion title="Who has permission to update meeting channels?">
  <p>Only users with admin privileges or meeting owners can update meeting channels. All specified meetings must be owned by users in your team.</p>
</Accordion>

<Accordion title="How many transcripts can I update at once?">
  <p>You can update between 1 and 5 transcripts in a single mutation call. If you need to update more transcripts, make multiple mutation calls.</p>
</Accordion>

<Accordion title="What happens if the operation fails for one transcript?">
  <p>The mutation uses all-or-nothing semantics. If any transcript fails validation (not found, no access, or permission denied), none of the transcripts will be updated. All transcripts must pass validation for the update to succeed.</p>
</Accordion>

<Accordion title="Can a meeting belong to multiple channels?">
  <p>No, a meeting can only belong to one channel at a time. This mutation sets the meeting's channel to the specified value, replacing any previous channel assignment.</p>
</Accordion>

<Accordion title="Is the response order guaranteed to match the input order?">
  <p>No, the response order is not guaranteed to match the input order of transcript\_ids. If you need to correlate responses with inputs, use the id field in the response.</p>
</Accordion>

## Error Codes

List of possible error codes that may be returned by the `updateMeetingChannel` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="require_elevated_privilege">
  <p>The user must be either the meeting owner or a team admin to update meeting channels.</p>
</Accordion>

<Accordion title="object_not_found (transcript)">
  <p>One or more specified transcripts could not be found or you do not have access to them.</p>
</Accordion>

<Accordion title="invalid_arguments">
  <p>The input failed validation. Common causes include: empty transcript\_ids array, more than 5 transcript\_ids, or missing/empty channel\_id.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Querying transcript details
  </Card>

  <Card title="Update Meeting Title" icon="link" href="/graphql-api/mutation/update-meeting-title">
    Update meeting titles
  </Card>

  <Card title="Update Meeting Privacy" icon="link" href="/graphql-api/mutation/update-meeting-privacy">
    Update meeting privacy
  </Card>

  <Card title="Transcripts" icon="link" href="/graphql-api/query/transcripts">
    Querying list of transcripts
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_update-meeting-privacy.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Meeting Privacy

> Use the API to update meeting privacy settings

## Overview

The `updateMeetingPrivacy` mutation allows for updating the privacy setting of a meeting transcript. This operation requires admin privileges within the team or ownership of the meeting.

## Arguments

<ParamField path="input" type="UpdateMeetingPrivacyInput" required>
  The privacy setting to be assigned to the meeting / transcript. See [UpdateMeetingPrivacyInput](/schema/input/update-meeting-privacy-input).
</ParamField>

## Usage Example

To update a meeting's privacy setting, provide the transcript ID and the new privacy level as arguments to the mutation. Here's an example of how this mutation could be used:

```graphql theme={null}
mutation UpdateMeetingPrivacy($input: UpdateMeetingPrivacyInput!) {
  updateMeetingPrivacy(input: $input) {
    id
    title
    privacy
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	-d '{
  		"query": "mutation($input: UpdateMeetingPrivacyInput!) { updateMeetingPrivacy(input: $input) { id title privacy } }",
  		"variables": {
  			"input": {
  				"id": "your_transcript_id",
  				"privacy": "teammates"
  			}
  		}
  	}'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  };

  const data = {
    query: `
      mutation($input: UpdateMeetingPrivacyInput!) {
        updateMeetingPrivacy(input: $input) {
          id
          title
          privacy
        }
      }
    `,
    variables: {
      input: {
        id: 'your_transcript_id',
        privacy: 'teammates'
      }
    }
  };

  const response = await axios.post(url, data, { headers });
  console.log(response.data);
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  }

  data = {
    'query': `
      mutation($input: UpdateMeetingPrivacyInput!) {
        updateMeetingPrivacy(input: $input) {
          id
          title
          privacy
        }
      }
    `,
    'variables': {
      'input': {
        'id': 'your_transcript_id',
        'privacy': 'teammates'
      }
    }
  }

  response = requests.post(url, json=data, headers=headers)
  print(response.json())
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;
  import java.net.http.HttpResponse.BodyHandlers;

  public class UpdateMeetingPrivacyExample {
      public static void main(String[] args) throws IOException, InterruptedException {
          HttpClient client = HttpClient.newHttpClient();

          String json = "{"
              + "\"query\":\"mutation($input: UpdateMeetingPrivacyInput!) { updateMeetingPrivacy(input: $input) { id title privacy } }\","
              + "\"variables\":{"
              + "\"input\":{"
              + "\"id\":\"your_transcript_id\","
              + "\"privacy\":\"teammates\""
              + "}"
              + "}"
              + "}";

          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "updateMeetingPrivacy": {
        "id": "your_transcript_id",
        "title": "Meeting Title",
        "privacy": "teammates"
      }
    }
  }
  ```
</ResponseExample>

## FAQ

<Accordion title="Who has permission to update meeting privacy?">
  <p>Only users with admin privileges or meeting owners can update meeting privacy settings. The meeting owner also needs to be in your team.</p>
</Accordion>

<Accordion title="What privacy levels are available?">
  <p>Available privacy levels are: link (anyone with link), owner (meeting owner only), participants (meeting participants only), teammatesandparticipants (teammates and participants), teammates (teammates only).</p>
</Accordion>

## Error Codes

List of possible error codes that may be returned by the `updateMeetingPrivacy` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="require_elevated_privilege">
  <p>The user must be either the meeting owner or a team admin to update meeting privacy.</p>
</Accordion>

<Accordion title="object_not_found (transcript)">
  <p>The specified transcript could not be found or you do not have access to it</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Querying transcript details
  </Card>

  <Card title="Update Meeting Title" icon="link" href="/graphql-api/mutation/update-meeting-title">
    Use the API to update meeting titles
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_update-meeting-state.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Meeting State

> Use the API to pause or resume recording for a live meeting

## Overview

The `updateMeetingState` mutation allows you to pause or resume recording for a live meeting through the API. This is useful for controlling the Fireflies bot during an active meeting.

This mutation is rate-limited to 10 requests per hour across all user tiers.

## Arguments

<ParamField path="input" type="UpdateMeetingStateInput!" required>
  Input object containing the meeting ID and action to perform. See [UpdateMeetingStateInput](/schema/input/update-meeting-state-input) for details.
</ParamField>

## Response

<ResponseField name="success" type="Boolean!">
  Whether the action was executed successfully
</ResponseField>

<ResponseField name="action" type="MeetingStateAction!">
  The action that was executed
</ResponseField>

## Usage Example

To update the meeting state, provide the meeting ID and the desired action:

```graphql theme={null}
mutation UpdateMeetingState($input: UpdateMeetingStateInput!) {
  updateMeetingState(input: $input) {
    success
    action
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation UpdateMeetingState($input: UpdateMeetingStateInput!) { updateMeetingState(input: $input) { success action } }",
      "variables": {
        "input": {
          "meeting_id": "your_meeting_id",
          "action": "pause_recording"
        }
      }
    }'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const data = {
    query: `mutation UpdateMeetingState($input: UpdateMeetingStateInput!) {
      updateMeetingState(input: $input) {
        success
        action
      }
    }`,
    variables: {
      input: {
        meeting_id: 'your_meeting_id',
        action: 'pause_recording'
      }
    }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  data = {
      'query': '''
        mutation UpdateMeetingState($input: UpdateMeetingStateInput!) {
          updateMeetingState(input: $input) {
            success
            action
          }
        }
      ''',
      'variables': {
          'input': {
              'meeting_id': 'your_meeting_id',
              'action': 'pause_recording'
          }
      }
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json()['data'])
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;

  public class ApiRequest {
      public static void main(String[] args) {
          HttpClient client = HttpClient.newHttpClient();
          String jsonRequest = "{\"query\": \"mutation UpdateMeetingState($input: UpdateMeetingStateInput!) { updateMeetingState(input: $input) { success action } }\", \"variables\": {\"input\": {\"meeting_id\": \"your_meeting_id\", \"action\": \"pause_recording\"}}}";
          HttpRequest request = HttpRequest.newBuilder()
              .uri(URI.create("https://api.fireflies.ai/graphql"))
              .header("Content-Type", "application/json")
              .header("Authorization", "Bearer your_api_key")
              .POST(BodyPublishers.ofString(jsonRequest))
              .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "updateMeetingState": {
        "success": true,
        "action": "pause_recording"
      }
    }
  }
  ```
</ResponseExample>

## Error Codes

List of possible error codes that may be returned by the `updateMeetingState` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="object_not_found">
  <p>The meeting with the specified ID was not found or you do not have access to it.</p>
</Accordion>

<Accordion title="require_elevated_privilege">
  <p>You do not have permission to control this meeting. Only the meeting organizer or team admin can update the meeting state.</p>
</Accordion>

<Accordion title="too_many_requests">
  <p>You have exceeded the rate limit for this mutation. The limit is 10 requests per hour. Please wait before making additional requests.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Create Live Action Item" icon="link" href="/graphql-api/mutation/create-live-action-item">
    Create action items during a live meeting
  </Card>

  <Card title="Create Live Soundbite" icon="link" href="/graphql-api/mutation/create-live-soundbite">
    Create soundbites during a live meeting
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_update-meeting-title.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Meeting Title

> Use the API to update meeting titles

## Overview

The `updateMeetingTitle` mutation allows for updating the title of a meeting transcript. This operation requires admin privileges within the team.

## Arguments

<ParamField path="input" type="UpdateMeetingTitleInput" required>
  The new title to be assigned to the meeting / transcript.
</ParamField>

## Usage Example

To update a meeting title, provide the transcript ID and the new title as arguments to the mutation. Here's an example of how this mutation could be used:

```graphql theme={null}
mutation UpdateMeetingTitle($input: UpdateMeetingTitleInput!) {
  updateMeetingTitle(input: $input) {
    title
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST https://api.fireflies.ai/graphql \
  	-H "Content-Type: application/json" \
  	-H "Authorization: Bearer your_api_key" \
  	-d '{
  		"query": "mutation($input: UpdateMeetingTitleInput!) { updateMeetingTitle(input: $input) { title } }",
  		"variables": {
  			"input": {
  				"id": "your_transcript_id",
  				"title": "New Title"
  			}
  		}
  	}'
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  };

  const data = {
    query: `
      mutation($input: UpdateMeetingTitleInput!) {
        updateMeetingTitle(input: $input) {
          title
        }
      }
    `,
    variables: {
      input: {
        id: 'your_transcript_id',
        title: 'New Title'
      }
    }
  };

  const response = await axios.post(url, data, { headers });
  console.log(response.data);
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'
  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_api_key'
  }

  data = {
    'query': `
      mutation($input: UpdateMeetingTitleInput!) {
        updateMeetingTitle(input: $input) {
          title
        }
      }
    `,
    'variables': {
      'input': {
        'id': 'your_transcript_id',
        'title': 'New Title'
      }
    }
  }

  response = requests.post(url, json=data, headers=headers)
  print(response.json())
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;
  import java.net.http.HttpResponse.BodyHandlers;

  public class UpdateMeetingTitleExample {
      public static void main(String[] args) throws IOException, InterruptedException {
          HttpClient client = HttpClient.newHttpClient();

          String json = "{"
              + "\"query\":\"mutation($input: UpdateMeetingTitleInput!) { updateMeetingTitle(input: $input) { title } }\","
              + "\"variables\":{"
              + "\"input\":{"
              + "\"id\":\"your_transcript_id\","
              + "\"title\":\"New Title\""
              + "}"
              + "}"
              + "}";

          HttpRequest request = HttpRequest.newBuilder()
                  .uri(URI.create("https://api.fireflies.ai/graphql"))
                  .header("Content-Type", "application/json")
                  .header("Authorization", "Bearer your_api_key")
                  .POST(BodyPublishers.ofString(json))
                  .build();

          client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
              .thenApply(HttpResponse::body)
              .thenAccept(System.out::println)
              .join();
      }
  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "updateMeetingTitle": {
        "title": "New Title"
      }
    }
  }
  ```
</ResponseExample>

## FAQ

<Accordion title="Who has permission to update meeting titles?">
  <p>Only users with admin privileges can update meeting titles. The meeting owner also needs to be in your team.</p>
</Accordion>

## Error Codes

List of possible error codes that may be returned by the `updateMeetingTitle` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="require_elevated_privilege">
  <p>The user does not have admin privileges to update meeting titles.</p>
</Accordion>

<Accordion title="object_not_found (transcript)">
  <p>The specified transcript could not be found or you do not have access to it</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Transcript" icon="link" href="/graphql-api/query/transcript">
    Querying transcript details
  </Card>

  <Card title="Update Meeting Privacy" icon="link" href="/graphql-api/mutation/update-meeting-privacy">
    Update meeting privacy
  </Card>
</CardGroup>

---

## Source file: graphql-api_mutation_upload-audio.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Upload Audio

> Use the API to upload audio to Fireflies.ai

## Overview

The `uploadAudio` mutation allows you to upload audio files to Fireflies.ai for transcription.

## Arguments

<ParamField path="input" type="AudioUploadInput">
  <Expandable>
    <ResponseField name="url" type="String" required>
      The url of media file to be transcribed. It MUST be a valid https string and publicly accessible to enable us download the audio / video file. Double check to see if the media file is downloadable and that the link is not a preview link before making the request. The media file must be either of these formats - mp3, mp4, wav, m4a, ogg
    </ResponseField>

    <ResponseField name="title" type="String">
      Title or name of the meeting, this will be used to identify the transcribed file
    </ResponseField>

    <ResponseField name="webhook" type="String">
      URL for the webhook that receives notifications when transcription completes
    </ResponseField>

    <ResponseField name="custom_language" type="String">
      Specify a custom language code for your meeting, e.g. `es` for Spanish or `de` for German. For a complete list of language codes, please view [Language Codes](/miscellaneous/language-codes)
    </ResponseField>

    <ResponseField name="save_video" type="Boolean">
      Specify whether the video should be saved or not.
    </ResponseField>

    <ResponseField name="attendees" type="[Attendees]">
      An array of objects containing meeting [Attendees](#). This is relevant if you have active integrations like Salesforce, Hubspot etc. Fireflies uses the attendees value to push meeting notes to your active CRM integrations where notes are added to an existing contact or a new contact is created. Each object contains -

      * displayName
      * email
      * phoneNumber
    </ResponseField>

    <ResponseField name="client_reference_id" type="String">
      Custom identifier set by the user during upload. You may use this to identify your uploads in your webhook
      events.
    </ResponseField>

    <ResponseField name="bypass_size_check" type="Boolean">
      Bypasses the internal file size validation that normally rejects audio files smaller than 50kb. Set to true if you need to process very short audio clips.
    </ResponseField>

    <ResponseField name="download_auth" type="DownloadAuthInput">
      Authentication configuration for downloading the media file. Use this when your audio/video file requires authentication (bearer token or basic auth). If not provided, defaults to no authentication (publicly accessible URL). See [DownloadAuthInput](/schema/input/download-auth-input) for details.
    </ResponseField>
  </Expandable>
</ParamField>

## Usage Example

To upload a file, provide the necessary input parameters to the mutation. Here's an example of how this mutation could be used:

```graphql theme={null}
mutation uploadAudio($input: AudioUploadInput) {
  uploadAudio(input: $input) {
    success
    title
    message
  }
}
```

<RequestExample>
  ```bash curl theme={null}
  curl -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer your_api_key" \
    -d '{
      "query": "mutation($input: AudioUploadInput) { uploadAudio(input: $input) { success title message } }",
      "variables": {
        "input": {
          "url": "https://url-to-the-audio-file",
          "title": "title of the file",
          "attendees": [
            {
              "displayName": "Fireflies Notetaker",
              "email": "notetaker@fireflies.ai",
              "phoneNumber": "xxxxxxxxxxxxxxxx"
            },
            {
              "displayName": "Fireflies Notetaker 2",
              "email": "notetaker2@fireflies.ai",
              "phoneNumber": "xxxxxxxxxxxxxxxx"
            }
          ]
        }
      }
    }' \
    https://api.fireflies.ai/graphql
  ```

  ```javascript javascript theme={null}
  const axios = require('axios');

  const url = 'https://api.fireflies.ai/graphql';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_api_key'
  };

  const input = {
    url: 'https://url-to-the-audio-file',
    title: 'title of the file',
    attendees: [
      {
        displayName: 'Fireflies Notetaker',
        email: 'notetaker@fireflies.ai',
        phoneNumber: 'xxxxxxxxxxxxxxxx'
      },
      {
        displayName: 'Fireflies Notetaker 2',
        email: 'notetaker2@fireflies.ai',
        phoneNumber: 'xxxxxxxxxxxxxxxx'
      }
    ]
  };
  const data = {
    query: `       mutation($input: AudioUploadInput) {
          uploadAudio(input: $input) {
            success
            title
            message
          }
        }
      `,
    variables: { input }
  };

  axios
    .post(url, data, { headers: headers })
    .then(result => {
      console.log(result.data);
    })
    .catch(e => {
      console.log(JSON.stringify(e));
    });
  ```

  ```python python theme={null}
  import requests

  url = 'https://api.fireflies.ai/graphql'

  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_api_key'
  }

  input_data = {
  	"url": "https://url_for_audio_file",
  	"title": "title of the file",
  	"attendees": [
  		{
  			"displayName": "Fireflies Notetaker",
  			"email": "notetaker@fireflies.ai",
  			"phoneNumber": "xxxxxxxxxxxxxxxx"
  		},
  		{
  			"displayName": "Fireflies Notetaker 2",
  			"email": "notetaker2@fireflies.ai",
  			"phoneNumber": "xxxxxxxxxxxxxxxx"
  		}
  	]}

  data = {
  	'query': '''
  		mutation($input: AudioUploadInput) {
  			uploadAudio(input: $input) {
  				success
  				title
  				message
  			}
  		}
  	''',
  	'variables': {'input': input_data}
  }

  response = requests.post(url, headers=headers, json=data)

  if response.status_code == 200:
      print(response.json())
  else:
      print(response.text)
  ```

  ```java java theme={null}
  import java.io.IOException;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.net.http.HttpRequest.BodyPublishers;
  import java.net.http.HttpResponse.BodyHandlers;

  public class ApiRequest {
  public static void main(String[] args) throws IOException, InterruptedException {
  HttpClient client = HttpClient.newHttpClient();

  	String json = "{"
  		+ "\"query\":\"mutation($input: AudioUploadInput) { uploadAudio(input: $input) { success title message } }\","
  		+ "\"variables\":{"
  		+ "\"input\": {"
  			+ "\"url\":\"https://url_for_audio_file.com\","
  			+ "\"title\":\"title of the file\","
  			+ "\"attendees\":["
  			+ "{"
  				+ "\"displayName\": \"Fireflies Notetaker\","
  				+ "\"email\": \"notetaker@fireflies.ai\","
  				+ "\"phoneNumber\": \"xxxxxxxxxxxxxxxx\""
  			+ "},"
  			+ "{"
  				+ "\"displayName\": \"Fireflies Notetaker 2\","
  				+ "\"email\": \"notetaker2@fireflies.ai\","
  				+ "\"phoneNumber\": \"xxxxxxxxxxxxxxxx\""
  			+ "}"
  			+ "]"
  		+ "}"
  		+ "}"
  	+ "}";


  	HttpRequest request = HttpRequest.newBuilder()
  			.uri(URI.create("https://api.fireflies.ai/graphql"))
  			.header("Content-Type", "application/json")
  			.header("Authorization", "Bearer your_api_key")
  			.POST(BodyPublishers.ofString(json))
  			.build();

  	client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
  		.thenApply(HttpResponse::body)
  		.thenAccept(System.out::println)
  		.join();
      }

  }
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={null}
  {
    "data": {
      "uploadAudio": {
        "success": true,
        "title": "title of the file",
        "message": "Uploaded audio has been queued for processing."
      }
    }
  }
  ```
</ResponseExample>

## Authenticated Downloads

The `download_auth` field allows you to upload audio/video files that require authentication. This is useful when your media files are hosted on private servers or behind authentication.

### Bearer Token Authentication

Use bearer token authentication when your media URL requires an `Authorization: Bearer <token>` header:

```graphql theme={null}
mutation {
  uploadAudio(input: {
    url: "https://example.com/protected-audio.mp3"
    title: "Protected Meeting Recording"
    download_auth: {
      type: bearer_token
      bearer: {
        token: "your-bearer-token-here"
      }
    }
  }) {
    success
    message
  }
}
```

### Basic Authentication

Use basic authentication when your media URL requires username and password:

```graphql theme={null}
mutation {
  uploadAudio(input: {
    url: "https://example.com/protected-audio.mp3"
    title: "Protected Meeting Recording"
    download_auth: {
      type: basic_auth
      basic: {
        username: "your-username"
        password: "your-password"
      }
    }
  }) {
    success
    message
  }
}
```

**Note:** The username is optional for basic auth. If not provided, only the password will be used.

## FAQ

<Accordion title="Can I upload a file directly from my machine?">
  <p>Audio upload only works with publicly accessible URLs or URLs with supported authentication (bearer token or basic auth). We cannot accept files hosted on your local machine.</p>
</Accordion>

<Accordion title="I don't want to expose my audio files to the public internet. How can I upload them to Fireflies.ai safely?">
  <p>You have two options:</p>

  <ol>
    <li><strong>Signed URLs:</strong> Use signed URLs with short expiry times (e.g., AWS S3 presigned URLs, Google Cloud Storage signed URLs)</li>
    <li><strong>Authenticated Downloads:</strong> Use the <code>download\_auth</code> field to provide bearer token or basic authentication credentials. Fireflies will use these credentials when downloading your media file.</li>
  </ol>
</Accordion>

<Accordion title="What authentication methods are supported?">
  <p>Fireflies supports two authentication methods for downloading media files:</p>

  <ul>
    <li><strong>Bearer Token:</strong> Adds <code>Authorization: Bearer \<token></code> header when downloading</li>
    <li><strong>Basic Auth:</strong> Adds <code>Authorization: Basic \<base64(username:password)></code> header when downloading</li>
  </ul>

  <p>If your media file is publicly accessible, you don't need to provide <code>download\_auth</code>.</p>
</Accordion>

## Error Codes

List of possible error codes that may be returned by the `uploadAudio` mutation. Full list of error codes can be found [here](/miscellaneous/error-codes).

<Accordion title="paid_required (pro_or_higher)">
  <p>You may receieve this error when uploading audio files or querying `audio_url` field.</p>
  <p>Free plan users cannot upload audio files. Please upgrade to a paid plan to upload audio files.</p>
</Accordion>

<Accordion title="paid_required (business_or_higher)">
  <p>You may receieve this error when querying `video_url` field.</p>
  <p>Free/pro plan users cannot query `video_url` field. Please upgrade to a Business or Enterprise plan to query `video_url` field.</p>
</Accordion>

<Accordion title="payload_too_small">
  <p>The audio file is too short to be processed. Please ensure the audio file is at least 50kb in size.</p>
</Accordion>

<Accordion title="invalid_language_code">
  <p>The language code you provided is invalid. Please refer to the [Language Codes](/miscellaneous/language-codes) page for a list of valid language codes.</p>
</Accordion>

## Additional Resources

<CardGroup cols={2}>
  <Card title="Webhooks" icon="link" href="/graphql-api/webhooks">
    Create notifications using webhooks
  </Card>

  <Card title="Add to Live" icon="link" href="/graphql-api/mutation/add-to-live">
    Use the API to add the Fireflies.ai bot to an ongoing meeting
  </Card>
</CardGroup>

---

## Source file: integrations_zapier.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Zapier

> Set up webhooks with Zapier to automatically fetch transcripts

## Overview

Connect Fireflies [webhooks](/graphql-api/webhooks) to Zapier to automatically fetch transcripts when meetings are processed. This guide creates a two-step Zap:

1. **Trigger** — receive a webhook notification when a meeting is transcribed
2. **Action** — use the `meetingId` from the webhook to fetch the transcript via the [GraphQL API](/graphql-api/query/transcript)

## Prerequisites

* A Fireflies.ai account with [webhook access](/graphql-api/webhooks)
* A [Zapier](https://zapier.com) **paid plan** (Professional or above — Webhooks by Zapier is not available on the free tier)
* Your Fireflies [API key](https://app.fireflies.ai/settings)

## Step 1: Create the Zapier webhook trigger

<Steps>
  <Step title="Create a new Zap">
    Log in to [Zapier](https://zapier.com) and click **Create**.
  </Step>

  <Step title="Select trigger">
    Search for **Webhooks by Zapier** → choose **Catch Hook**.
  </Step>

  <Step title="Skip Configure">
    Leave the **Pick off a Child Key** field blank and click **Continue**.
  </Step>

  <Step title="Copy the webhook URL">
    On the **Test** tab, copy the generated URL (e.g. `https://hooks.zapier.com/hooks/catch/123456/abcdef/`). You'll paste this into Fireflies next.
  </Step>
</Steps>

## Step 2: Add the webhook URL in Fireflies

<Steps>
  <Step title="Open Developer settings">
    Go to [Fireflies settings](https://app.fireflies.ai/settings) → **Developer settings** in the left sidebar.
  </Step>

  <Step title="Configure the webhook">
    Under **Webhook**, click **Configure** and fill in:

    * **Webhook URL** — paste the Zapier URL from Step 1
    * **Trigger when transcription is completed** — check this box
  </Step>

  <Step title="Save">
    Click **Save**.
  </Step>
</Steps>

## Step 3: Test the connection

<Steps>
  <Step title="Listen for a test event">
    In Zapier, click **Test trigger**. Then [upload a short audio file](https://app.fireflies.ai/upload) in Fireflies to generate a webhook event.
  </Step>

  <Step title="Verify the payload">
    Zapier should receive a payload like:

    ```json theme={null}
    {
      "meetingId": "ASxwZxCstx",
      "eventType": "Transcription completed"
    }
    ```

    The `meetingId` is the transcript ID you'll use next.
  </Step>
</Steps>

## Step 4: Fetch the transcript

Add a second step to your Zap that calls the Fireflies GraphQL API with the `meetingId`.

<Steps>
  <Step title="Add action">
    Click **+** → search **Webhooks by Zapier** → select **Custom Request**.
  </Step>

  <Step title="Configure the request">
    * **Method**: `POST`
    * **URL**: `https://api.fireflies.ai/graphql`
    * **Headers**:

    | Key           | Value                 |
    | ------------- | --------------------- |
    | Content-Type  | application/json      |
    | Authorization | Bearer YOUR\_API\_KEY |
  </Step>

  <Step title="Set the request body">
    In the **Data** field, enter:

    ```json theme={null}
    {
      "query": "query Transcript($transcriptId: String!) { transcript(id: $transcriptId) { id title date organizer_email participants transcript_url duration summary { overview action_items shorthand_bullet short_summary } sentences { speaker_name text start_time end_time } } }",
      "variables": {
        "transcriptId": "{{meetingId}}"
      }
    }
    ```

    <Note>
      Do **not** type `{{meetingId}}` literally. Use Zapier's **Insert Data** picker to select **Meeting Id** from the trigger step — the field should show a data pill, not raw text.
    </Note>
  </Step>

  <Step title="Test">
    Click **Test step**. You should see the transcript data in the response.
  </Step>
</Steps>

## Step 5: Extend your Zap

With transcript data flowing into Zapier, add more steps to automate your workflow:

* **Slack** — post meeting summaries to a channel
* **Google Sheets** — log meeting details in a spreadsheet
* **Asana / Jira / Trello** — create tasks from action items
* **Email** — send recaps to attendees
* **Salesforce / HubSpot** — push notes to your CRM

## Customizing the query

Modify the GraphQL query in Step 4 to fetch only the fields you need. See the [Transcript schema](/schema/transcript) for all available fields.

Example with speaker analytics and AI filters:

```graphql theme={null}
query Transcript($transcriptId: String!) {
  transcript(id: $transcriptId) {
    id
    title
    summary {
      overview
      action_items
    }
    analytics {
      speakers {
        name
        duration
        words_per_minute
      }
    }
    sentences {
      speaker_name
      text
      ai_filters {
        task
        question
        sentiment
      }
    }
  }
}
```

## Troubleshooting

<AccordionGroup>
  <Accordion title="Zapier is not receiving events">
    * Check the webhook URL is saved in [Developer settings](https://app.fireflies.ai/settings)
    * Ensure **Trigger when transcription is completed** is checked
    * The URL must start with `https://`
    * Try uploading a test file at [app.fireflies.ai/upload](https://app.fireflies.ai/upload)
  </Accordion>

  <Accordion title="Transcript query returns null">
    * Verify you're using the correct `meetingId` from the webhook
    * Check your API key hasn't expired
  </Accordion>

  <Accordion title="Authorization error">
    * Ensure the header is `Bearer YOUR_API_KEY` (with a space after `Bearer`)
    * The API key must belong to the account that owns the webhook
  </Accordion>
</AccordionGroup>

## Resources

<CardGroup cols={2}>
  <Card title="Webhooks" icon="bell" href="/graphql-api/webhooks">
    Webhook events and authentication
  </Card>

  <Card title="Transcript query" icon="file-lines" href="/graphql-api/query/transcript">
    Full query reference
  </Card>

  <Card title="Transcript schema" icon="database" href="/schema/transcript">
    All available fields
  </Card>
</CardGroup>

---

## Source file: mcp-tools_overview.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Tools

> Complete reference for all available tools in the Fireflies MCP Server

## Overview

The Fireflies MCP (Model Context Protocol) Server provides tools for searching and retrieving meeting transcripts, summaries, and user data. All tools are read-only and operate within your authenticated Fireflies account.

For setup and configuration instructions, see [MCP Server Configuration](/getting-started/mcp-configuration).

## Available Tools

### Meeting & Transcript Tools

<ParamField path="fireflies_search" type="Tool">
  **Description:** Advanced search for meeting transcripts using mini grammar syntax.

  **Parameters:**

  * `query` (string, required) - Search query with grammar syntax
  * `format` (string) - Response format: "toon" (default), "json", or "text"

  **Query Grammar:**

  * `keyword:"term"` - Search keywords
  * `scope:title|sentences|all` - Search scope
  * `from:YYYY-MM-DD` - Filter from date
  * `to:YYYY-MM-DD` - Filter to date
  * `limit:N` - Max results (50)
  * `skip:N` - Pagination offset
  * `organizers:email1,email2` - Filter by organizers
  * `participants:email1,email2` - Filter by participants
  * `mine:true|false` - User's meetings only

  **Example:**

  ```json theme={null}
  {
    "query": "keyword:\"performance\" scope:sentences from:2024-12-01 limit:20"
  }
  ```
</ParamField>

<ParamField path="fireflies_get_transcripts" type="Tool">
  **Description:** Query multiple meetings with structured filters. Returns metadata and summaries.

  **Parameters:**

  * `keyword` (string) - Search term (max 255 chars)
  * `scope` (enum) - "title", "sentences", or "all"
  * `fromDate` (string) - ISO date (YYYY-MM-DD)
  * `toDate` (string) - ISO date (YYYY-MM-DD)
  * `limit` (number) - Max results (max 50)
  * `skip` (number) - Pagination offset
  * `organizers` (array) - Organizer emails
  * `participants` (array) - Participant emails
  * `mine` (boolean) - Only user's meetings
  * `format` (string) - "toon" (default), "json", or "text"

  **Example:**

  ```json theme={null}
  {
    "keyword": "product roadmap",
    "fromDate": "2024-12-01",
    "limit": 20
  }
  ```

  **Returns:** Meeting IDs, titles, dates, participants, summaries (excludes detailed transcript content).
</ParamField>

<ParamField path="fireflies_get_transcript" type="Tool">
  **Description:** Fetch detailed transcript by ID with sentences, speakers, and timestamps. Excludes summary data.

  **Parameters:**

  * `transcriptId` (string, required) - Meeting ID

  **Example:**

  ```json theme={null}
  {
    "transcriptId": "meeting-id-12345"
  }
  ```

  **Returns:** Sentences with speaker attribution, timestamps, analytics, and metadata.
</ParamField>

<ParamField path="fireflies_fetch" type="Tool">
  **Description:** Retrieve complete meeting data including transcript, summary, and metadata.

  **Parameters:**

  * `id` (string, required) - Meeting ID

  **Example:**

  ```json theme={null}
  {
    "id": "meeting-id-12345"
  }
  ```

  **Returns:** Complete meeting data with transcript content, summary, analytics, and metadata.
</ParamField>

<ParamField path="fireflies_get_summary" type="Tool">
  **Description:** Fetch meeting summary by ID with action items, keywords, and overview. Excludes transcript content.

  **Parameters:**

  * `transcriptId` (string, required) - Meeting ID

  **Example:**

  ```json theme={null}
  {
    "transcriptId": "meeting-id-12345"
  }
  ```

  **Returns:** Keywords, action items, overview, topics discussed, meeting type, and outline.
</ParamField>

### User & Team Tools

<ParamField path="fireflies_get_user" type="Tool">
  **Description:** Fetch user account details. Returns authenticated user if no ID provided.

  **Parameters:**

  * `userId` (string, optional) - User ID (omit for current user)

  **Example:**

  ```json theme={null}
  {
    "userId": "user-id-12345"
  }
  ```

  **Returns:** User ID, email, name, transcript count, recent meeting date, minutes consumed, admin status, and integrations.
</ParamField>

<ParamField path="fireflies_get_usergroups" type="Tool">
  **Description:** Fetch user groups for the authenticated user or team.

  **Parameters:**

  * `mine` (boolean) - true for user's groups only, false (default) for all team groups

  **Example:**

  ```json theme={null}
  {
    "mine": false
  }
  ```

  **Returns:** Group ID, name, handle, members with emails and roles.
</ParamField>

<ParamField path="fireflies_get_user_contacts" type="Tool">
  **Description:** Fetch contact list sorted by most recent meeting date.

  **Parameters:**

  * `format` (string) - "toon" (default), "json", or "text"

  **Example:**

  ```json theme={null}
  {
    "format": "json"
  }
  ```

  **Returns:** Contact emails, names, profile pictures, and last meeting dates.
</ParamField>

## Tool Comparison Matrix

| Tool                          | Content Type      | Summary | Parameters           | Best For                              |
| ----------------------------- | ----------------- | ------- | -------------------- | ------------------------------------- |
| `fireflies_search`            | Multiple meetings | ✅ Yes   | Complex grammar      | Advanced filtering with mini grammar  |
| `fireflies_get_transcripts`   | Multiple meetings | ✅ Yes   | Structured params    | Structured queries with clear filters |
| `fireflies_get_transcript`    | Single meeting    | ❌ No    | Meeting ID only      | Full conversation with timestamps     |
| `fireflies_fetch`             | Single meeting    | ✅ Yes   | Meeting ID only      | Complete meeting data in one call     |
| `fireflies_get_summary`       | Single meeting    | ✅ Yes   | Meeting ID only      | Quick insights and action items       |
| `fireflies_get_user`          | User data         | N/A     | Optional user ID     | Profile and account information       |
| `fireflies_get_usergroups`    | Team data         | N/A     | Optional mine filter | Team structure and membership         |
| `fireflies_get_user_contacts` | Contact list      | N/A     | Optional format      | Recent interaction history            |

## Response Formats

Several tools support multiple response formats via the `format` parameter:

* **toon** (default) - Token-efficient format optimized for AI model consumption
* **json** - Standard JSON format for programmatic processing
* **text** - Human-readable text format for display

## Common Workflows

### Search and Retrieve Pattern

1. Use `fireflies_search` or `fireflies_get_transcripts` to find relevant meetings
2. Extract meeting IDs from results
3. Use `fireflies_fetch` to get complete details, or:
   * Use `fireflies_get_transcript` for conversation only
   * Use `fireflies_get_summary` for insights only

### Team Analysis Pattern

1. Use `fireflies_get_usergroups` to get team structure
2. Extract member emails from target groups
3. Use `fireflies_get_transcripts` with `participants` filter
4. Optionally use `fireflies_get_user` for individual member details

### Contact-Based Search Pattern

1. Use `fireflies_get_user_contacts` to get contact list
2. Find target contact by name or email
3. Use `fireflies_get_transcripts` with contact email in `participants`
4. Retrieve detailed transcripts or summaries as needed

## Getting Started

To use these tools:

1. **Configure MCP Server** - Add Fireflies MCP Server to your AI application
   * Remote server URL: `https://api.fireflies.ai/mcp`
   * Supports OAuth or API key authentication

2. **Authenticate** - Use OAuth flow or provide API key in configuration

3. **Invoke Tools** - Call tools using their standardized names with JSON parameters

For detailed setup instructions, see [MCP Server Configuration](/getting-started/mcp-configuration).

## Additional Resources

<CardGroup cols={2}>
  <Card title="MCP Configuration" icon="gear" href="/getting-started/mcp-configuration">
    Set up the Fireflies MCP Server in your AI application
  </Card>

  <Card title="GraphQL API" icon="code" href="/graphql-api/query/transcripts">
    Direct GraphQL API access for custom integrations
  </Card>

  <Card title="Authorization" icon="lock" href="/fundamentals/authorization">
    Learn about API authentication and security
  </Card>

  <Card title="LLM Development" icon="robot" href="/getting-started/llm-development">
    Enhance AI coding experience with Fireflies data
  </Card>
</CardGroup>

---

## Source file: realtime-api_overview.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview

> Learn about Fireflies.ai's Realtime API for live transcription

The Fireflies.ai Realtime API allows your application to receive **live transcription events** over WebSockets. This enables building interactive features such as live captioning, transcription overlays, and real-time analysis as users speak.

<Warning>
  The Realtime API is currently in <b>beta</b>. Features and endpoints may change. We welcome your feedback as we continue to improve this API.
</Warning>

## How It Works

The Realtime API uses WebSocket connections to deliver transcription data as it's generated.

## Flow

1. **Authenticate**: Connect using a valid API token and transcript ID.
2. **Listen**: Once connected, you'll start receiving transcription events in real time.
3. **React**: Update your UI or process transcription events as they arrive.

## Features

* **Low Latency**: Data is streamed as soon as it’s transcribed.
* **Event-Based**: Receive structured events for easy handling.
* **Token-Based Authentication**: Secure connections with scoped access.
* **Incremental Transcription**: Receive transcript segments progressively.

## Additional Resources

<CardGroup cols={2}>
  <Card title="Active Meetings" icon="link" href="/graphql-api/query/active-meetings">
    Query meetings currently in progress
  </Card>

  <Card title="Event Schema" icon="link" href="/realtime-api/event-schema">
    Schema for Realtime Events
  </Card>
</CardGroup>

---

## Source file: realtime-api_getting-started.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Getting Started

> Learn how to connect to Fireflies.ai's Realtime API for live transcription

## Overview

This guide shows you how to connect to the Fireflies.ai Realtime API and start receiving transcription events in real time.

## Endpoint

```text theme={null}
wss://api.fireflies.ai
```

## Requirements

You'll need the following:

* A valid API token
* A `transcriptId` (or meeting ID)

<Tip>
  Use the [Active Meetings](/graphql-api/query/active-meetings) query to discover meetings currently in progress and get their IDs for connecting to the Realtime API.
</Tip>

## Connecting via Socket.IO

Use the Socket.IO client to connect and listen for events.

```ts theme={null}
import { io } from 'socket.io-client';

const socket = io('wss://api.fireflies.ai', {
  path: '/ws/realtime',
  auth: {
    token: 'Bearer <YOUR_API_TOKEN>',
    transcriptId: '<TRANSCRIPT_ID>'
  }
});

socket.on('auth.success', data => {
  console.log('Authenticated:', data);
});

socket.on('auth.failed', err => {
  console.error('Authentication failed:', err);
});

socket.on('connection.error', err => {
  console.error('Connection error:', err);
});

socket.on('connection.established', () => {
  console.log('Connection established');
});

socket.on('transcription.broadcast', event => {
  console.log('Transcript event:', event);
});
```

## Auth Parameters

| Field          | Type   | Description                     |
| -------------- | ------ | ------------------------------- |
| `token`        | string | Your API access token           |
| `transcriptId` | string | ID of the meeting or transcript |

If authentication fails, the server emits an `auth.failed` event and disconnects the socket.

See [Authorization](/fundamentals/authorization)

## Additional Resources

<CardGroup cols={2}>
  <Card title="Overview" icon="link" href="/realtime-api/overview">
    Overview of Realtime API
  </Card>

  <Card title="Active Meetings" icon="link" href="/graphql-api/query/active-meetings">
    Query meetings currently in progress
  </Card>

  <Card title="Authorization" icon="link" href="/fundamentals/authorization">
    Authenticating your requests with the Fireflies API
  </Card>
</CardGroup>

---

## Source file: realtime-api_event-schema.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Event Schema

> Reference for all events emitted by the Fireflies.ai Realtime API

# Event Reference

This page documents the events you may receive from the Fireflies.ai Realtime API WebSocket.

## Event List

| Event Name                | Description                                                                     |
| ------------------------- | ------------------------------------------------------------------------------- |
| `auth.success`            | Emitted when authentication succeeds.                                           |
| `auth.failed`             | Emitted when authentication fails. The socket will disconnect after this event. |
| `connection.established`  | Emitted when the connection is successfully established.                        |
| `connection.error`        | Emitted when there is a connection or authorization error.                      |
| `transcription.broadcast` | Emitted for every new transcription segment or update.                          |

## RealtimeTranscriptionEvent

<ResponseField name="transcript_id" type="String">
  The unique identifier for the transcript / meeting
</ResponseField>

<ResponseField name="chunk_id" type="String">
  The unique identifier for the transcription segment (chunk). You may use this field to deduplicate transcription events. If the transcription is being updated, it will contain the same chunk\_id as the previous event. A new transcription will have a different chunk\_id
</ResponseField>

<ResponseField name="text" type="String">
  The transcribed text for this segment.
</ResponseField>

<ResponseField name="speaker_name" type="String">
  The name of the speaker for this segment.
</ResponseField>

<ResponseField name="start_time" type="Float">
  The start time (in seconds)
</ResponseField>

<ResponseField name="end_time" type="Float">
  The end time (in seconds)
</ResponseField>

## Example Payload

```json theme={null}
{
  "transcript_id": "abc123",
  "chunk_id": "chunk_001",
  "text": "Hello world",
  "speaker_name": "Alice",
  "start_time": 0.0,
  "end_time": 1.25
}
```

## Additional Resources

<CardGroup cols={2}>
  <Card title="Getting Started" icon="link" href="/realtime-api/getting-started">
    Getting started with Realtime API
  </Card>

  <Card title="Sentence" icon="link" href="/schema/sentence">
    Schema for Sentence
  </Card>
</CardGroup>

---

## Source file: miscellaneous_error-codes.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Error codes

> Error codes and their explanations

## Overview

This page lists the error codes and their corresponding reasons for the Fireflies.ai API. You can refer to this page to understand the meaning and possible causes of different error codes that you may encounter while using the API. It provides a comprehensive reference for troubleshooting and resolving issues. Please visit [Errors](/fundamentals/errors) page for more details

## API Errors

### `invalid_arguments`

Returned when invalid arguments are passed to a query or mutation

```json theme={null}
{
  "errors": [
    {
      ... other fields for error
      "message": "Invalid argument(s) were provided",
      "code": "invalid_arguments",
      "extensions": {
        "code": "invalid_arguments",
        "status": 400,
        "metadata": {
          "fields": [
            {
              "name": "fromDate",
              "message": "fromDate must be a Date instance",
              "constraints": [
                {
                  "type": "isDate",
                  "message": "fromDate must be a Date instance"
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
```

### `object_not_found`

Returned when the subject of your query or mutation is not found. For example, querying a non-existent userId would throw an `object_not_found` error of the type `User`

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "User not found",
      "code": "object_not_found",
      "extensions": {
        "code": "object_not_found",
        "status": 404,
        "metadata": {
          "objectType": "User"
        }
      }
    }
  ],
}
```

### `forbidden`

Returned when you are not allowed to perform an action

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "You are not authorized to perform this action",
      "code": "forbidden",
      "extensions": {
        "code": "forbidden",
        "status": 403,
      }
    }
  ]
}
```

### `paid_required`

Returned when you are required to be subscribed to a paid plan for the Fireflies.ai platform. The error will also mentioned the required `tier` for such actions. For example, making a request to `uploadAudio` as a free user will throw a `paid_required` error with tier `pro_or_higher`, which means that you need to be subscribed to a Pro or Higher plan to perform this action

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "You need to be subscribed to a paid plan to perform this action",
      "code": "paid_required",
      "extensions": {
        "code": "paid_required",
        "status": 403,
        "metadata": {
          "tier": "pro_or_higher"
        },
      }
    }
  ]
}
```

### `not_in_team`

Returned when you are attempting to query against a `userId` that is not a part of your team

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "You do not have permissions for this team",
      "code": "not_in_team",
      "extensions": {
        "code": "not_in_team",
        "status": 403,
      }
    }
  ]
}
```

### `require_elevated_privilege`

Returned when you are attempting to perform admin actions as a non-admin user

```json theme={null}
{
  "errors": [
    {
	  .. other fields for error
      "message": "You do not have permission to perform this action",
      "code": "require_elevated_privilege",
      "extensions": {
        "code": "require_elevated_privilege",
        "status": 403,
      }
    }
  ]
}
```

### `account_cancelled`

Returned when your account has been cancelled due to non-payment or some other reason. Please contact support if you think this is a mistake

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "Your account is inactive. If this is not expected, please contact support",
      "code": "account_cancelled",
      "extensions": {
        "code": "account_cancelled",
        "status": 403,
      }
    }
  ]
}
```

### `args_required`

Returned when your query or mutation is missing one or more required arguments. The property `extesions.metadata.fields` will provide the list of fields that have this constraints

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "You must provide one of the following: mine, transcript_id, my_team",
      "code": "args_required",
      "extensions": {
        "code": "args_required",
        "status": 400,
        "metadata": {
          "fields": [
            "mine",
            "transcript_id",
            "my_team"
          ]
        },
      }
    }
  ]
}
```

### `too_many_requests`

Returned when you have been rate-limited due to making too many requests. The field `extensions.metadata.retryAfter` mentions the `retryAfter` time

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "Too many requests. Please retry after 2:45:45 AM (UTC)",
      "code": "too_many_requests",
      "extensions": {
        "code": "too_many_requests",
        "status": 429,
        "metadata": {
          "retryAfter": 1720651545066
        }
      }
    }
  ]
}
```

### `payload_too_small`

Returned when the content size for `uploadAudio` mutation is too small. Upload files larger than `50kb` to avoid this error

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "Content size is too small. Please upload files larger than 50kb",
      "code": "payload_too_small",
      "extensions": {
        "code": "payload_too_small",
        "status": 400,
      }
    }
  ]
}
```

### `request_timeout`

Returned when your request has taken too long to respond.

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "Request timed out. Please try again or contact support",
      "code": "request_timeout",
      "extensions": {
        "code": "request_timeout",
        "status": 408,
      }
    }
  ]
}
```

### `invalid_language_code`

Returned when an invalid language code has been passed to a query or mutation

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "Language code is invalid or not supported. Please refer to API docs for supported languages",
      "code": "invalid_language_code",
      "extensions": {
        "code": "invalid_language_code",
        "status": 400,
      }
    }
  ]
}
```

### `admin_must_exist`

Returned when you are attempting to call `setUserRole` for a single member team

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "You must have at least one admin your team",
      "code": "admin_must_exist",
      "extensions": {
        "code": "admin_must_exist",
        "status": 400,
      }
    }
  ]
}
```

### `unsupported_platform`

Returned when an unsupported meeting platform URL is provided to the `addToLiveMeeting` mutation

```json theme={null}
{
  "errors": [
    {
      ... other fields for error
      "message": "The meeting platform is not supported. Please use a supported meeting platform URL.",
      "code": "unsupported_platform",
      "extensions": {
        "code": "unsupported_platform",
        "status": 400,
      }
    }
  ]
}
```

### `require_ai_credits`

Returned when you have insufficient AI credits to perform AI-powered operations like AskFred queries. You may need to upgrade your plan or purchase additional credits.

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "You do not have sufficient AI credits to perform this action",
      "code": "require_ai_credits",
      "extensions": {
        "code": "require_ai_credits",
        "status": 402,
        "helpUrls": [
          "https://app.fireflies.ai/upgrade"
        ]
      }
    }
  ]
}
```

### `invariant_violation`

Returned when an internal invariant is violated (unexpected internal state).

This typically indicates a bug and is not actionable by clients.

Please contact support if you receive this error.

```json theme={null}
{
  "errors": [
    {
	  ... other fields for error
      "message": "Something unexpected happened. Please try again",
      "code": "invariant_violation",
      "extensions": {
        "code": "invariant_violation",
        "status": 500,
      }
    }
  ]
}
```

---

## Source file: miscellaneous_language-codes.md

> ## Documentation Index
> Fetch the complete documentation index at: https://docs.fireflies.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Language codes

> Language code abbreviations for the Fireflies.ai API

## Overview

This page lists the language codes supported by the Fireflies.ai API. You may use these codes with the `uploadAudio` or `addToLive` functionality to specify custom languages for your meetings. Each language entry includes the language name and its corresponding code, providing a quick and easy reference.

## References

* [Add to Live](/graphql-api/mutation/add-to-live)
* [Upload Audio](/graphql-api/mutation/upload-audio)

## Codes

```json theme={null}
[
  {
    "languageName": "Arabic",
    "languageCode": "ar"
  },
  {
    "languageName": "Bulgarian",
    "languageCode": "bg"
  },
  {
    "languageName": "Chinese",
    "languageCode": "zh"
  },
  {
    "languageName": "Croatian",
    "languageCode": "hr"
  },
  {
    "languageName": "Czech",
    "languageCode": "cs"
  },
  {
    "languageName": "Danish",
    "languageCode": "da"
  },
  {
    "languageName": "Dutch",
    "languageCode": "nl"
  },
  {
    "languageName": "English",
    "languageCode": "en"
  },
  {
    "languageName": "US English",
    "languageCode": "en-US"
  },
  {
    "languageName": "Australia English",
    "languageCode": "en-AU"
  },
  {
    "languageName": "UK English",
    "languageCode": "en-GB"
  },
  {
    "languageName": "Finnish",
    "languageCode": "fi"
  },
  {
    "languageName": "French",
    "languageCode": "fr"
  },
  {
    "languageName": "German",
    "languageCode": "de"
  },
  {
    "languageName": "Hebrew",
    "languageCode": "he"
  },
  {
    "languageName": "Hindi",
    "languageCode": "hi"
  },
  {
    "languageName": "Hungarian",
    "languageCode": "hu"
  },
  {
    "languageName": "Indonesian",
    "languageCode": "id"
  },
  {
    "languageName": "Italian",
    "languageCode": "it"
  },
  {
    "languageName": "Japanese",
    "languageCode": "ja"
  },
  {
    "languageName": "Korean",
    "languageCode": "ko"
  },
  {
    "languageName": "Malay",
    "languageCode": "ms"
  },
  {
    "languageName": "Norwegian",
    "languageCode": "no"
  },
  {
    "languageName": "Polish",
    "languageCode": "pl"
  },
  {
    "languageName": "Portuguese",
    "languageCode": "pt"
  },
  {
    "languageName": "Romanian",
    "languageCode": "ro"
  },
  {
    "languageName": "Russian",
    "languageCode": "ru"
  },
  {
    "languageName": "Slovak",
    "languageCode": "sk"
  },
  {
    "languageName": "Spanish",
    "languageCode": "es"
  },
  {
    "languageName": "Latin American Spanish",
    "languageCode": "es-419"
  },
  {
    "languageName": "Swedish",
    "languageCode": "sv"
  },
  {
    "languageName": "Tamil",
    "languageCode": "ta"
  },
  {
    "languageName": "Thai",
    "languageCode": "th"
  },
  {
    "languageName": "Filipino",
    "languageCode": "tl"
  },
  {
    "languageName": "Turkish",
    "languageCode": "tr"
  },
  {
    "languageName": "Ukrainian",
    "languageCode": "uk"
  },
  {
    "languageName": "Vietnamese",
    "languageCode": "vi"
  }
]
```
