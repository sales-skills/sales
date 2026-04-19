<!-- Source: https://support.bytrellus.com/hc/en-us/sections/12324545330971-API-Dev-Documentation -->
<!-- Note: Full API docs at support.bytrellus.com returned 403 on fetch. Below is partial info recovered from search results and help center snippets. -->

# Trellus API Reference

## Overview

The Trellus API is a RESTful web service for developers and integrations to programmatically interact with Trellus account data and delivery management functionality. Nearly every bit of data exchanged between clients and the API is JSON over HTTPS.

## Base URL

```
https://api.bytrellus.com/v1
```

A sandbox environment is available with a different base URL (adjust the `baseURL` parameter in Postman if using sandbox).

## Authentication

Your API key is generated on successful creation of your Trellus account and can be viewed through the **Account Integrations** section in the dashboard.

A valid key must be provided with every request via HTTP header:

```
Authorization: <your-api-key>
```

## Getting Started

1. Generate/locate your API key in Account > Integrations
2. Download the Trellus Postman Collection from the help center
3. Import the collection into Postman
4. Set the `APIKey` variable to your key
5. If using sandbox, adjust the `baseURL` parameter

## Endpoints

*API docs were inaccessible (403 on support.bytrellus.com). Specific endpoints, parameters, and response formats are not documented here. Check the Postman collection or contact support@bytrellus.com for full API documentation.*

## Support

For API questions, feedback, or bug reports: support@bytrellus.com

## Documentation Links

- API Introduction: https://support.bytrellus.com/hc/en-us/articles/12325049210267-API-Introduction
- Getting Set Up: https://support.bytrellus.com/hc/en-us/articles/12325492513691-Getting-Set-Up-API
- Full API & Dev Docs: https://support.bytrellus.com/hc/en-us/sections/12324545330971-API-Dev-Documentation
