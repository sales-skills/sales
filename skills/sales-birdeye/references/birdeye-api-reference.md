<!-- Source: https://support.birdeye.com/en/articles/12654181-birdeye-s-developer-portal + https://developers.birdeye.com/ -->

# Birdeye API Reference

## Overview

Birdeye's APIs are RESTful, built on HTTP with resource-oriented URLs, built-in HTTP capabilities for passing parameters and authentication, and standard HTTP response codes for errors.

## Authentication

- **Method**: API key-based authentication
- **Obtaining a key**: Generated via the Birdeye dashboard (Settings → API)
- **Usage**: Include the API key in request headers
- **Key is confidential** — do not expose in client-side code

## Rate limits

- Applied per API key
- Varies by account plan (example: some accounts have 10,000 daily calls)
- Exceeding limits returns an error response
- Contact Birdeye support to confirm your specific limits

## Developer portal

**URL**: https://developers.birdeye.com/

The developer portal is hosted on Apiary and contains the full endpoint documentation. A Birdeye account is required to access complete endpoint details.

## Known API capabilities

Based on support documentation and third-party sources, the API supports:

- **Review request automation** — trigger review requests programmatically
- **Review retrieval** — fetch reviews across monitored platforms
- **Customer/contact management** — create and update customer records
- **Listing management** — update business information across directories
- **Survey management** — create surveys and retrieve responses
- **Reporting** — pull analytics and performance data

## Integrations that use the API

The following platforms integrate with Birdeye via API:
- Encompass, JobNimbus, Simple Salon, Storage 360, Xplor
- Plus 3,000+ integrations via native connectors, open API, SFTP, and bulk upload

## Limitations

*The full API endpoint documentation (specific URLs, request/response schemas, parameter details) is behind authentication on the developer portal. The information above is compiled from public support articles and third-party sources. For complete endpoint reference, sign in to https://developers.birdeye.com/ with your Birdeye credentials.*
