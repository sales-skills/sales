<!-- Source: https://developers.fathom.ai (fetched 2026-04-16) -->
<!-- Index: https://developers.fathom.ai/llms.txt -->
<!-- OpenAPI spec: https://developers.fathom.ai/api-reference/openapi.yaml -->

# Fathom API Reference

All content below is copied verbatim from the official Fathom developer docs. To refresh, re-fetch the URL map at `https://developers.fathom.ai/llms.txt` and each `.md` page linked from there.

---


> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Api overview

This documentation describes Fathom's REST API.

## Authentication

All REST API resources are authenticated with API keys generated via the Fathom website's settings area.

## Rate limiting

We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs return a 429 status code. Calls to our APIs include headers indicating the current rate limit status.

### Global rate limits

Authenticated requests are subject to a global limit. This is the maximum number of calls that your account can make to the API per minute. Endpoints subject to rate limits may return the headers below.

| Header                | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `RateLimit-Limit`     | The maximum number of requests allowed in a time window     |
| `RateLimit-Remaining` | The number of requests remaining in the current time window |
| `RateLimit-Reset`     | The time remaining in the current time window               |

Currently, you are able to make a maximum of 60 calls to the API in a 60 second window.
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Generate an API key and make your first call

## Generate an API Key

<Card title="Get your Fathom API Key" icon="link" href="https://fathom.video/customize#api-access-header" arrow="true" cta="User Settings">
  Head to the API Access section of your User Settings and generate an API key.
</Card>

<Tip>API keys are created at the user level. This means your key can only access meetings recorded by you, or those shared to your Team. If you're an Admin, your API key does *not* provide access to other users' unshared meetings.</Tip>

## List recent meetings

List the 10 most recent meetings recorded by you or shared to your team.

<CodeGroup>
  ```cURL cURL theme={null}
  curl https://api.fathom.ai/external/v1/meetings \
       -H "X-Api-Key: YOUR_API_KEY"
  ```

  ```Python Python theme={null}
  import requests
  # List meetings (GET /meetings)
  response = requests.get(
    "https://api.fathom.ai/external/v1/meetings",
    headers={
      "X-Api-Key": "YOUR_API_KEY"
    },
  )
  print(response.json())
  ```

  ```Typescript TypeScript theme={null}
  // List meetings (GET /meetings)
  const response = await fetch("https://api.fathom.ai/external/v1/meetings", {
    method: "GET",
    headers: {
      "X-Api-Key": "YOUR_API_KEY"
    },
  });
  const body = await response.json();
  console.log(body);

  ```
</CodeGroup>

<Note>Replace `YOUR_API_KEY` with the API key you generated above.</Note>

<Accordion title="Here's an example response">
  ```json Example response theme={null}
  {
  "items": [
  {
    "title": "Quarterly Business Review",
    "meeting_title": "QBR 2025 Q1",
    "url": "https://fathom.video/xyz123",
    "share_url": "https://fathom.video/share/xyz123",
    "created_at": "2025-03-01T17:01:30Z",
    "scheduled_start_time": "2025-03-01T16:00:00Z",
    "scheduled_end_time": "2025-03-01T17:00:00Z",
    "recording_start_time": "2025-03-01T16:01:12Z",
    "recording_end_time": "2025-03-01T17:00:55Z",
    "meeting_type": "internal",
    "transcript_language": "en",
    "calendar_invitees": [
      {
        "is_external": false,
        "name": "Alice Johnson",
        "email": "alice.johnson@acme.com"
      }
    ],
    "recorded_by": {
      "name": "Alice Johnson",
      "email": "alice.johnson@acme.com",
      "team": "Marketing"
    },
    "transcript": [
      {
        "speaker": {
          "display_name": "Alice Johnson",
          "matched_calendar_invitee_email": "alice.johnson@acme.com"
        },
        "text": "Let's revisit the budget allocations.",
        "timestamp": "00:05:32"
      }
    ],
    "default_summary": {
      "template_name": "general",
      "markdown_formatted": "## Summary\nWe reviewed Q1 OKRs, identified budget risks, and agreed to revisit projections next month.\n"
    },
    "action_items": [
      {
        "description": "Email revised proposal to client",
        "user_generated": false,
        "completed": false,
        "recording_timestamp": "00:10:45",
        "recording_playback_url": "https://fathom.video/xyz123#t=645",
        "assignee": {
          "name": "Alice Johnson",
          "email": "alice.johnson@acme.com",
          "team": "Marketing"
        }
      }
    ],
    "crm_matches": {
      "contacts": [
        {
          "name": "Jane Smith",
          "email": "jane.smith@client.com",
          "record_url": "https://app.hubspot.com/contacts/123"
        }
      ],
      "companies": [
        {
          "name": "Acme Corp",
          "record_url": "https://app.hubspot.com/companies/456"
        }
      ],
      "deals": [
        {
          "name": "Q1 Renewal",
          "amount": 50000,
          "record_url": "https://app.hubspot.com/deals/789"
        }
      ],
      "error": "no CRM connected"
    }
  }
  ],
  "limit": 1,
  "next_cursor": "eyJwYWdlX251bSI6Mn0="
  }
  ```
</Accordion>

## Get next 10 meetings

Use the `next_cursor` from the previous response to get the next page of meetings.

<CodeGroup>
  ```cURL bash theme={null}
  curl https://api.fathom.ai/external/v1/meetings \
       -H "X-Api-Key: YOUR_API_KEY" \
       -d cursor=CURSOR_FROM_PREVIOUS_RESPONSE
  ```

  ```Python python theme={null}
  import requests
  cursor = "CURSOR_FROM_PREVIOUS_RESPONSE"
  response = requests.get(
    f"https://api.fathom.ai/external/v1/meetings?cursor={cursor}",
    headers={"X-Api-Key": "YOUR_API_KEY"}
  )
  ```

  ```Typescript TypeScript theme={null}
  const cursor = "CURSOR_FROM_PREVIOUS_RESPONSE";
  const response = await fetch(`https://api.fathom.ai/external/v1/meetings?cursor=${cursor}`, {
    headers: {"X-Api-Key": "YOUR_API_KEY"}
  });
  ```
</CodeGroup>

<Note>If you're using our [TypeScript or Python SDKs](/sdks), pagination is handled automatically - no need to manage cursors manually. See [SDK Pagination](/sdks/pagination) for examples.</Note>

## Find specific meetings and get their transcripts

Let's say you met with `john.doe@client.com` a couple times during August and want to pull those transcripts. Use filters to return just those meetings.

<CodeGroup>
  ```cURL cURL theme={null}
  curl https://api.fathom.ai/external/v1/meetings \
       -H "X-Api-Key: YOUR_API_KEY" \
       -d include_transcript=true \
       -d recorded_by[]=me@mydomain.com \
       -d created_after=2024-08-01T00:00:00Z \
       -d created_before=2024-09-01T00:00:00Z

  # include_transcript=true: get transcripts in the response
  # recorded_by[]=me@mydomain.com: meetings you recorded
  # created_after/before: August date range
  ```

  ```Python Python theme={null}
  import requests

  response = requests.get(
    "https://api.fathom.ai/external/v1/meetings",
    headers={"X-Api-Key": "YOUR_API_KEY"},
    params={
      "include_transcript": "true",  # get transcripts in the response
      "recorded_by[]": "me@mydomain.com",  # meetings you recorded
      "created_after": "2024-08-01T00:00:00Z",  # August 1st onward
      "created_before": "2024-09-01T00:00:00Z"  # before September 1st
    }
  )
  meetings = response.json()["items"]
  transcript = meetings[0]["transcript"]  # Get first meeting's transcript
  ```

  ```Typescript TypeScript theme={null}
  const params = new URLSearchParams({
    include_transcript: "true",  // get transcripts in the response
    "recorded_by[]": "me@mydomain.com",  // meetings you recorded
    created_after: "2024-08-01T00:00:00Z",  // August 1st onward
    created_before: "2024-09-01T00:00:00Z"  // before September 1st
  });
  const response = await fetch(`https://api.fathom.ai/external/v1/meetings?${params}`, {
    headers: {"X-Api-Key": "YOUR_API_KEY"}
  });
  const meetings = await response.json();
  const transcript = meetings.items[0].transcript;  // Get first meeting's transcript
  ```
</CodeGroup>

<Note>You can also fetch transcripts separately using the [/recordings/\{recording\_id}/transcript](/api-reference/recordings/get-transcript) endpoint. **OAuth apps** must use this approach since they can't use `include_transcript` or `include_summary`.</Note>

## Next steps

Now that you you've made your first API calls, time to go deeper:

<CardGroup cols={2}>
  <Card title="API documentation" icon="code" href="/api-overview">
    See all available endpoints and methods
  </Card>

  <Card title="Webhooks" icon="webhook" href="/webhooks">
    Set up a webhook
  </Card>

  <Card title="SDKs" icon="gear-code" href="/sdks">
    Use our Typescript or Python SDK
  </Card>

  <Card title="OAuth" icon="key" href="/oauth">
    Build a Fathom integration with OAuth
  </Card>
</CardGroup>
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Building with OAuth

> Launching an integration for mutual customers with Fathom? Let's get started!

## Integrating your app with Fathom

If you're developing a public app that you wish to integrate with Fathom, you should build it using OAuth.

OAuth apps are eligible for promotion by Fathom and can unlock visibility in our App Marketplace, as well as co-marketing opportunities. They are subject to review to ensure the best experience for all users.

## How to launch your app:

### 👀  Step 1: Check out Fathom’s partner enablement resources

Learn more about our product and scope out your integration opportunities:

* [Fathom Partner Demo Walkthrough](https://drive.google.com/file/d/1WKr6TWp01pxijE9OFjYsqVEseS3-ZcCJ/view)
* [Fathom’s Upcoming Webinars and Recordings](https://watch.getcontrast.io/fathom-ai)

### ✍️  Step 2: Register your app

<Card title="Register an OAuth App" icon="mail" arrow="true" href="https://fathom.video/marketplace_applications/new" horizontal>
  Configure your redirects and receive your OAuth credentials. (2 mins)
</Card>

### 🔑  Step 3: Configure OAuth Authentication

Once you have your OAuth credentials, [set up authentication](/sdks/oauth) using our SDK.

### 🔨  Step 4: Build it

See [what others have built](/inspiration) for proven integration patterns.

### 🚀  Step 5: Share your app with users!

You can access our [logo files and guidelines here](https://drive.google.com/drive/folders/1SFt_nmOiHolSOc6wA0CQRRNiqqmBjCic).

Reach out to [partners@fathom.video](mailto:partners@fathom.video) if you have any questions or need support on launch materials (ex: information for an integration listing on your site, amplification of a social post, etc.)

### 🌟  Step 6: Get featured

Each quarter, the Fathom team will review OAuth app integration usage. Once you have 20+ users, we will reach out to have you added to our own [Integration Listing Page](https://www.fathom.ai/integrations), connect via Crossbeam, and unlock co-marketing opportunities.

We can’t wait to partner with you!
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Webhooks

> Automatically trigger webhook events after your meetings

## About Webhooks in Fathom

Webhooks will send your meeting data (optionally including the summary, transcript, and action items) to a URL of your choice.

<Note>Webhooks can be set to fire after your own meetings and/or meetings that have been shared with you. Configure these triggers in your [Settings](https://fathom.video/customize#api-access-header), or when generating a webhook [via API](/api-reference/webhooks/create-a-webhook#body-triggered-for). </Note>

## Create a webhook

There are two ways to create a webhook:

#### Option 1 - in Settings

Webhooks can be configured in the [**API Access**](https://fathom.video/customize#api-access-header) section of your **User Settings**.

<Card title="How to create a webhook in Settings:" icon="link" href="https://fathom.video/customize#api-access-header" arrow="true" cta="Go to Settings">
  * Generate an API key, then go to **Manage** > **Add Webhook**
  * Enter a Destination URL
  * Select which new recordings should trigger webhooks
  * Select what data to include in the payload
</Card>

#### Option 2 - via API

You also have the option of creating and deleting webhooks with an API call.

[API docs: Create a webhook](/api-reference/webhooks/create-a-webhook).

<Info>Be sure the check the response body to confirm the webhook was created as expected. Webhooks created via API will also appear in your Settings. </Info>

## Test Your Webhook

To ensure your webhook is working as expected, you can record a brief, 2-minute meeting. Shortly after the meeting ends, your Destination URL should receive a webhook event.

For details on the webhook's payload, see our [API docs](/api-reference/webhook-payloads/new-meeting-content-ready).

<Tip>**Coming soon:** send a test payload from your Settings page</Tip>

## Verifying Webhooks

Webhook verification helps ensure that incoming requests to your endpoint are from Fathom and haven’t been altered.

Each webhook request sent from Fathom includes a signature in the request headers, which you can use to confirm the authenticity of the payload.

<Danger>To test webhooks locally or during development, you can skip verification—but don’t forget to add it back in before going live.</Danger>

### How to verify a webhook

#### Method 1 - SDK

If you're [using our SDK](/sdk), you can use the `verify_webhook` helper. Simply call:

<CodeGroup>
  ```javascript Typescript theme={null}
  Fathom.verifyWebhook(webhook_secret, request.headers, request.body)
  ```

  ```python Python theme={null}
  Fathom.verify_webhook(webhook_secret, request.headers, request.body)
  ```
</CodeGroup>

`webhook_secret` – Provided when you create the webhook (either in Settings or via the API).

`request.headers` – The HTTP headers from the incoming request, which include the signature Fathom sends.

`request.body` – The raw string body of the POST request.

#### Method 2 - Without the SDK

You can also verify incoming webhooks yourself using basic tools available in most programming languages.

Every webhook payload from Fathom includes three headers used for verification:

* `webhook-id` – The unique message identifier for the webhook message
* `webhook-timestamp` – Timestamp in seconds since epoch
* `webhook-signature` – The Base64 encoded list of signatures (space delimited), each prefixed with a version identifier

To verify the request:

1. Extract the `webhook-id`, `webhook-timestamp`, and `webhook-signature` from the request headers
2. Construct the signed content by concatenating the id, timestamp, and raw body, separated by periods: `${id}.${timestamp}.${body}` (be sure to use the **raw** body, before any JSON parsing)
3. Base64 decode the portion of your `webhook_secret` after the `whsec_` prefix (e.g., if your secret is `whsec_5WbX5kEWLlfzsGNjH64I8lOOqUB6e8FH`, use `5WbX5kEWLlfzsGNjH64I8lOOqUB6e8FH`)
4. Use the decoded secret to HMAC the signed content with SHA-256, then Base64-encode the result
5. Extract all signatures from the `webhook-signature` header (remove version prefixes like `v1,` before comparing)
6. Compare your calculated signature to each provided signature using a constant-time comparison method
7. Verify the timestamp is within your acceptable tolerance (typically 5 minutes) to prevent replay attacks
8. If any signature matches and the timestamp is valid, the webhook is authentic

Example:

<CodeGroup>
  ```javascript TypeScript theme={null}
  const crypto = require('crypto')

  function verifyWebhook(secret, headers, rawBody) {
    const webhookId = headers['webhook-id']
    const webhookTimestamp = headers['webhook-timestamp']
    const webhookSignature = headers['webhook-signature']

    // Verify timestamp (within 5 minutes)
    const timestamp = parseInt(webhookTimestamp, 10)
    const currentTimestamp = Math.floor(Date.now() / 1000)
    if (Math.abs(currentTimestamp - timestamp) > 300) {
      return false
    }

    // Construct signed content
    const signedContent = `${webhookId}.${webhookTimestamp}.${rawBody}`

    // Base64 decode the secret (part after whsec_)
    const secretBytes = Buffer.from(secret.split('_')[1], 'base64')

    // Calculate expected signature
    const expectedSignature = crypto
      .createHmac('sha256', secretBytes)
      .update(signedContent)
      .digest('base64')

    // Extract signatures from header (remove version prefixes)
    const signatures = webhookSignature.split(' ').map(sig => {
      const parts = sig.split(',')
      return parts.length > 1 ? parts[1] : parts[0]
    })

    // Constant-time comparison
    return signatures.some(sig =>
      crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(sig)
      )
    )
  }
  ```

  ```python Python theme={null}
  import hmac
  import hashlib
  import base64
  import time

  def verify_webhook(secret, headers, raw_body):
      webhook_id = headers.get('webhook-id')
      webhook_timestamp = headers.get('webhook-timestamp')
      webhook_signature = headers.get('webhook-signature')

      # Verify timestamp (within 5 minutes)
      timestamp = int(webhook_timestamp)
      current_timestamp = int(time.time())
      if abs(current_timestamp - timestamp) > 300:
          return False

      # Construct signed content
      signed_content = f"{webhook_id}.{webhook_timestamp}.{raw_body}"

      # Base64 decode the secret (part after whsec_)
      secret_bytes = base64.b64decode(secret.split('_')[1])

      # Calculate expected signature
      expected_signature = base64.b64encode(
          hmac.new(secret_bytes, signed_content.encode(), hashlib.sha256).digest()
      ).decode()

      # Extract signatures from header (remove version prefixes)
      signatures = []
      for sig in webhook_signature.split(' '):
          parts = sig.split(',')
          signatures.append(parts[1] if len(parts) > 1 else parts[0])

      # Constant-time comparison
      return any(
          hmac.compare_digest(expected_signature, sig) for sig in signatures
      )
  ```
</CodeGroup>
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# List meetings



## OpenAPI

````yaml /api-reference/openapi.yaml get /meetings
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths:
  /meetings:
    get:
      tags:
        - Meetings
      summary: List meetings
      operationId: listMeetings
      parameters:
        - in: query
          name: calendar_invitees_domains[]
          description: >
            Domains of the companies to filter by. Exact match.


            Pass the parameter once per value, e.g.

            `calendar_invitees_domains[]=acme.com&calendar_invitees_domains[]=client.com`.


            Returns meetings where any of the given company domains appear in
            the meeting.
          schema:
            type: array
            items:
              type: string
            example:
              - acme.com
              - client.com
          style: form
          explode: true
        - in: query
          name: calendar_invitees_domains_type
          description: >-
            Filter by whether calendar invitee list includes external email
            domains.
          schema:
            type: string
            enum:
              - all
              - only_internal
              - one_or_more_external
            default: all
        - in: query
          name: created_after
          description: >-
            Filter to meetings with created_at after this timestamp, e.g.
            `created_after=2025-01-01T00:00:00Z`.
          schema:
            type: string
        - in: query
          name: created_before
          description: >-
            Filter to meetings with created_at before this timestamp, e.g.
            `created_before=2025-01-01T00:00:00Z`.
          schema:
            type: string
        - in: query
          name: cursor
          description: Cursor for pagination.
          schema:
            type: string
        - in: query
          name: include_action_items
          description: Include the action items for each meeting.
          schema:
            type: boolean
            default: false
        - in: query
          name: include_crm_matches
          description: >-
            Include CRM matches for each meeting. Only returns data from your or
            your team's linked CRM.
          schema:
            type: boolean
            default: false
        - in: query
          name: include_summary
          description: >-
            Include the summary for each meeting. Unavailable for OAuth
            connected apps (use /recordings instead).
          schema:
            type: boolean
            default: false
        - in: query
          name: include_transcript
          description: >-
            Include the transcript for each meeting. Unavailable for OAuth
            connected apps (use /recordings instead).
          schema:
            type: boolean
            default: false
        - in: query
          name: recorded_by[]
          description: |
            Email addresses of users who recorded meetings.

            Pass the parameter once per value, e.g.
            `recorded_by[]=ceo@acme.com&recorded_by[]=pm@acme.com`.

            Returns meetings recorded by any of the specified users.
          schema:
            type: array
            items:
              type: string
              format: email
            example:
              - ceo@acme.com
              - pm@acme.com
          style: form
          explode: true
        - in: query
          name: teams[]
          description: |
            Team names to filter by.

            Pass the parameter once per value, e.g.
            `teams[]=Sales&teams[]=Engineering`.

            Returns meetings that belong to any of the specified teams.
          schema:
            type: array
            items:
              type: string
            example:
              - Sales
              - Engineering
          style: form
          explode: true
      responses:
        '200':
          description: Paginated list of meetings.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/MeetingListResponse'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '429':
          $ref: '#/components/responses/RateLimited'
components:
  schemas:
    MeetingListResponse:
      type: object
      required:
        - limit
        - next_cursor
        - items
      properties:
        limit:
          type: integer
          nullable: true
          example: 1
        next_cursor:
          type: string
          nullable: true
          example: eyJwYWdlX251bSI6Mn0=
        items:
          type: array
          items:
            $ref: '#/components/schemas/Meeting'
    Meeting:
      type: object
      required:
        - title
        - meeting_title
        - recording_id
        - url
        - share_url
        - created_at
        - scheduled_start_time
        - scheduled_end_time
        - recording_start_time
        - recording_end_time
        - calendar_invitees_domains_type
        - recorded_by
        - transcript_language
        - calendar_invitees
      properties:
        title:
          type: string
          example: Quarterly Business Review
        meeting_title:
          type: string
          example: QBR 2025 Q1
          description: Calendar event title.
          nullable: true
        recording_id:
          type: integer
          example: 123456789
          description: The ID of the meeting recording.
        url:
          type: string
          format: uri
          example: https://fathom.video/xyz123
        share_url:
          type: string
          format: uri
          example: https://fathom.video/share/xyz123
        created_at:
          type: string
          format: date-time
          example: '2025-03-01T17:01:30Z'
        scheduled_start_time:
          type: string
          format: date-time
          example: '2025-03-01T16:00:00Z'
        scheduled_end_time:
          type: string
          format: date-time
          example: '2025-03-01T17:00:00Z'
        recording_start_time:
          type: string
          format: date-time
          example: '2025-03-01T16:01:12Z'
        recording_end_time:
          type: string
          format: date-time
          example: '2025-03-01T17:00:55Z'
        calendar_invitees_domains_type:
          type: string
          enum:
            - only_internal
            - one_or_more_external
          example: one_or_more_external
        transcript_language:
          type: string
          example: en
        transcript:
          type: array
          items:
            $ref: '#/components/schemas/TranscriptItem'
          nullable: true
        default_summary:
          $ref: '#/components/schemas/MeetingSummary'
          nullable: true
        action_items:
          type: array
          items:
            $ref: '#/components/schemas/ActionItem'
          nullable: true
        calendar_invitees:
          type: array
          items:
            $ref: '#/components/schemas/Invitee'
        recorded_by:
          $ref: '#/components/schemas/FathomUser'
        crm_matches:
          $ref: '#/components/schemas/CRMMatches'
          nullable: true
    TranscriptItem:
      type: object
      required:
        - speaker
        - text
        - timestamp
      properties:
        speaker:
          $ref: '#/components/schemas/TranscriptItemSpeaker'
        text:
          type: string
          example: Let's revisit the budget allocations.
        timestamp:
          type: string
          pattern: ^\d{2}:\d{2}:\d{2}$
          description: Timestamp relative to the start of the meeting (HH:MM:SS).
          example: '00:05:32'
    MeetingSummary:
      type: object
      required:
        - template_name
        - markdown_formatted
      properties:
        template_name:
          type: string
          example: general
          nullable: true
        markdown_formatted:
          type: string
          example: >
            ## Summary

            We reviewed Q1 OKRs, identified budget risks, and agreed to revisit
            projections next month.
          description: Always displayed in English.
          nullable: true
    ActionItem:
      type: object
      required:
        - description
        - user_generated
        - completed
        - recording_timestamp
        - recording_playback_url
        - assignee
      properties:
        description:
          type: string
          example: Email revised proposal to client
          description: Always displayed in English.
        user_generated:
          type: boolean
          example: false
        completed:
          type: boolean
          example: false
        recording_timestamp:
          type: string
          pattern: ^\d{2}:\d{2}:\d{2}$
          description: Timestamp relative to the start of the recording (HH:MM:SS).
          example: '00:10:45'
        recording_playback_url:
          type: string
          format: uri
          example: https://fathom.video/xyz123#t=645
        assignee:
          $ref: '#/components/schemas/Assignee'
    Invitee:
      type: object
      required:
        - name
        - email
        - email_domain
        - is_external
      properties:
        name:
          type: string
          example: Alice Johnson
          nullable: true
        matched_speaker_display_name:
          type: string
          description: >
            (When `include_transcript` is `true`) The display_name matching this
            email address. Null if no exact match found.


            Only available for meetings after Feb 1, 2025.
          example: Alice Johnson
          nullable: true
        email:
          type: string
          format: email
          example: alice.johnson@acme.com
          nullable: true
        email_domain:
          type: string
          example: acme.com
          nullable: true
        is_external:
          type: boolean
          example: false
    FathomUser:
      type: object
      required:
        - name
        - email
        - email_domain
        - team
      properties:
        name:
          type: string
          example: Alice Johnson
        email:
          type: string
          format: email
          example: alice.johnson@acme.com
        email_domain:
          type: string
          example: acme.com
        team:
          type: string
          example: Marketing
          nullable: true
    CRMMatches:
      type: object
      nullable: true
      description: >
        CRM data linked to the meeting. Only returns data from your or your
        team's linked CRM.

        If no CRM is connected for the workspace, the `error` field will be
        populated.
      properties:
        contacts:
          type: array
          items:
            $ref: '#/components/schemas/CRMContactMatch'
        companies:
          type: array
          items:
            $ref: '#/components/schemas/CRMCompanyMatch'
        deals:
          type: array
          items:
            $ref: '#/components/schemas/CRMDealMatch'
        error:
          type: string
          nullable: true
          example: no CRM connected
    TranscriptItemSpeaker:
      type: object
      required:
        - display_name
      properties:
        display_name:
          type: string
          example: Alice Johnson
        matched_calendar_invitee_email:
          type: string
          nullable: true
          description: >
            The email address of the calendar invitee matching this speaker.
            Null if no exact match found.
          format: email
          example: alice.johnson@acme.com
    Assignee:
      type: object
      required:
        - name
        - email
        - team
      properties:
        name:
          type: string
          example: Alice Johnson
          nullable: true
        email:
          type: string
          format: email
          example: alice.johnson@acme.com
          nullable: true
        team:
          type: string
          example: Marketing
          nullable: true
    CRMContactMatch:
      type: object
      required:
        - name
        - email
        - record_url
      properties:
        name:
          type: string
          example: Jane Smith
        email:
          type: string
          format: email
          example: jane.smith@client.com
        record_url:
          type: string
          format: uri
          example: https://app.hubspot.com/contacts/123
    CRMCompanyMatch:
      type: object
      required:
        - name
        - record_url
      properties:
        name:
          type: string
          example: Acme Corp
        record_url:
          type: string
          format: uri
          example: https://app.hubspot.com/companies/456
    CRMDealMatch:
      type: object
      required:
        - name
        - amount
        - record_url
      properties:
        name:
          type: string
          example: Q1 Renewal
        amount:
          type: number
          description: The amount in dollars.
          example: 50000
        record_url:
          type: string
          format: uri
          example: https://app.hubspot.com/deals/789
  responses:
    BadRequest:
      description: Bad request - the query parameters were invalid.
    Unauthorized:
      description: Unauthorized - missing or invalid `Authorization` header.
    RateLimited:
      description: >-
        Rate limited - you have exceeded the rate limit for the requested
        endpoint. Check our [rate limiting](/api-reference#rate-limiting)
        documentation for more information.
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Get summary

> This endpoint has two behaviors depending on your request payload:
- If you send `destination_url`, the endpoint will behave in an asynchronous manner.
- If you do not send `destination_url`, the endpoint will return the data directly.




## OpenAPI

````yaml /api-reference/openapi.yaml get /recordings/{recording_id}/summary
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths:
  /recordings/{recording_id}/summary:
    get:
      tags:
        - Recordings
      summary: Get summary
      description: >
        This endpoint has two behaviors depending on your request payload:

        - If you send `destination_url`, the endpoint will behave in an
        asynchronous manner.

        - If you do not send `destination_url`, the endpoint will return the
        data directly.
      operationId: getRecordingSummary
      parameters:
        - name: recording_id
          in: path
          required: true
          description: The ID of the meeting recording to fetch the call summary for.
          schema:
            type: integer
            example: 123456789
        - in: query
          name: destination_url
          description: >-
            Destination URL for where we'll POST the call summary. If not sent,
            this endpoint will return the data directly.
          schema:
            type: string
            format: uri
            example: https://example.com/destination
      responses:
        '200':
          description: >-
            Either the destination URL for where we'll POST the call summary, or
            the summary for the recording.
          content:
            application/json:
              schema:
                anyOf:
                  - type: object
                    required:
                      - summary
                    properties:
                      summary:
                        $ref: '#/components/schemas/MeetingSummary'
                  - $ref: '#/components/schemas/CallbackResponse'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '429':
          $ref: '#/components/responses/RateLimited'
components:
  schemas:
    MeetingSummary:
      type: object
      required:
        - template_name
        - markdown_formatted
      properties:
        template_name:
          type: string
          example: general
          nullable: true
        markdown_formatted:
          type: string
          example: >
            ## Summary

            We reviewed Q1 OKRs, identified budget risks, and agreed to revisit
            projections next month.
          description: Always displayed in English.
          nullable: true
    CallbackResponse:
      type: object
      required:
        - destination_url
      properties:
        destination_url:
          type: string
          format: uri
          example: https://example.com/destination
  responses:
    BadRequest:
      description: Bad request - the query parameters were invalid.
    Unauthorized:
      description: Unauthorized - missing or invalid `Authorization` header.
    RateLimited:
      description: >-
        Rate limited - you have exceeded the rate limit for the requested
        endpoint. Check our [rate limiting](/api-reference#rate-limiting)
        documentation for more information.
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Get transcript

> This endpoint has two behaviors depending on your request payload:
- If you send `destination_url`, the endpoint will behave in an asynchronous manner.
- If you do not send `destination_url`, the endpoint will return the data directly.




## OpenAPI

````yaml /api-reference/openapi.yaml get /recordings/{recording_id}/transcript
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths:
  /recordings/{recording_id}/transcript:
    get:
      tags:
        - Recordings
      summary: Get transcript
      description: >
        This endpoint has two behaviors depending on your request payload:

        - If you send `destination_url`, the endpoint will behave in an
        asynchronous manner.

        - If you do not send `destination_url`, the endpoint will return the
        data directly.
      operationId: getRecordingTranscript
      parameters:
        - name: recording_id
          in: path
          required: true
          description: The ID of the meeting recording to fetch the transcript for.
          schema:
            type: integer
            example: 123456789
        - in: query
          name: destination_url
          description: >-
            Destination URL for where we'll POST the transcript. If not sent,
            this endpoint will return the data directly.
          required: false
          schema:
            type: string
            format: uri
            example: https://example.com/destination
      responses:
        '200':
          description: >-
            Either the destination URL for where we'll POST the transcript, or
            the transcript for the recording as an array.
          content:
            application/json:
              schema:
                anyOf:
                  - type: object
                    required:
                      - transcript
                    properties:
                      transcript:
                        type: array
                        items:
                          $ref: '#/components/schemas/TranscriptItem'
                  - $ref: '#/components/schemas/CallbackResponse'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '429':
          $ref: '#/components/responses/RateLimited'
components:
  schemas:
    TranscriptItem:
      type: object
      required:
        - speaker
        - text
        - timestamp
      properties:
        speaker:
          $ref: '#/components/schemas/TranscriptItemSpeaker'
        text:
          type: string
          example: Let's revisit the budget allocations.
        timestamp:
          type: string
          pattern: ^\d{2}:\d{2}:\d{2}$
          description: Timestamp relative to the start of the meeting (HH:MM:SS).
          example: '00:05:32'
    CallbackResponse:
      type: object
      required:
        - destination_url
      properties:
        destination_url:
          type: string
          format: uri
          example: https://example.com/destination
    TranscriptItemSpeaker:
      type: object
      required:
        - display_name
      properties:
        display_name:
          type: string
          example: Alice Johnson
        matched_calendar_invitee_email:
          type: string
          nullable: true
          description: >
            The email address of the calendar invitee matching this speaker.
            Null if no exact match found.
          format: email
          example: alice.johnson@acme.com
  responses:
    BadRequest:
      description: Bad request - the query parameters were invalid.
    Unauthorized:
      description: Unauthorized - missing or invalid `Authorization` header.
    RateLimited:
      description: >-
        Rate limited - you have exceeded the rate limit for the requested
        endpoint. Check our [rate limiting](/api-reference#rate-limiting)
        documentation for more information.
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# List team members



## OpenAPI

````yaml /api-reference/openapi.yaml get /team_members
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths:
  /team_members:
    get:
      tags:
        - Team Members
      summary: List team members
      operationId: listTeamMembers
      parameters:
        - in: query
          name: cursor
          description: Cursor for pagination.
          schema:
            type: string
        - in: query
          name: team
          description: Team name to filter by.
          schema:
            type: string
      responses:
        '200':
          description: Paginated list of team members.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TeamMemberListResponse'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '429':
          $ref: '#/components/responses/RateLimited'
components:
  schemas:
    TeamMemberListResponse:
      type: object
      required:
        - limit
        - next_cursor
        - items
      properties:
        limit:
          type: integer
        next_cursor:
          type: string
          nullable: true
        items:
          type: array
          items:
            $ref: '#/components/schemas/TeamMember'
    TeamMember:
      type: object
      required:
        - name
        - email
        - created_at
      properties:
        name:
          type: string
          example: Bob Lee
        email:
          type: string
          format: email
          example: bob.lee@acme.com
        created_at:
          type: string
          format: date-time
          example: '2024-06-01T08:30:00Z'
  responses:
    BadRequest:
      description: Bad request - the query parameters were invalid.
    Unauthorized:
      description: Unauthorized - missing or invalid `Authorization` header.
    RateLimited:
      description: >-
        Rate limited - you have exceeded the rate limit for the requested
        endpoint. Check our [rate limiting](/api-reference#rate-limiting)
        documentation for more information.
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# List teams



## OpenAPI

````yaml /api-reference/openapi.yaml get /teams
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths:
  /teams:
    get:
      tags:
        - Teams
      summary: List teams
      operationId: listTeams
      parameters:
        - in: query
          name: cursor
          description: Cursor for pagination.
          schema:
            type: string
      responses:
        '200':
          description: Paginated list of teams.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TeamListResponse'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '429':
          $ref: '#/components/responses/RateLimited'
components:
  schemas:
    TeamListResponse:
      type: object
      required:
        - limit
        - next_cursor
        - items
      properties:
        limit:
          type: integer
        next_cursor:
          type: string
          nullable: true
        items:
          type: array
          items:
            $ref: '#/components/schemas/Team'
    Team:
      type: object
      required:
        - name
        - created_at
      properties:
        name:
          type: string
          example: Sales
        created_at:
          type: string
          format: date-time
          example: '2023-11-10T12:00:00Z'
  responses:
    BadRequest:
      description: Bad request - the query parameters were invalid.
    Unauthorized:
      description: Unauthorized - missing or invalid `Authorization` header.
    RateLimited:
      description: >-
        Rate limited - you have exceeded the rate limit for the requested
        endpoint. Check our [rate limiting](/api-reference#rate-limiting)
        documentation for more information.
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Create a webhook

> Create a webhook to receive new meeting content.
At least one of `include_transcript`, `include_crm_matches`, `include_summary`, or `include_action_items` must be true.




## OpenAPI

````yaml /api-reference/openapi.yaml post /webhooks
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths:
  /webhooks:
    post:
      tags:
        - Webhooks
      summary: Create a webhook
      description: >
        Create a webhook to receive new meeting content.

        At least one of `include_transcript`, `include_crm_matches`,
        `include_summary`, or `include_action_items` must be true.
      operationId: createWebhook
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - destination_url
                - triggered_for
              additionalProperties: false
              properties:
                destination_url:
                  type: string
                  description: The URL to send the webhook to.
                  format: uri
                  example: https://example.com/webhook
                include_action_items:
                  type: boolean
                  description: Include the action items for each meeting.
                  default: false
                  example: true
                include_crm_matches:
                  type: boolean
                  description: >-
                    Include CRM matches for each meeting. Only returns data from
                    your or your team's linked CRM.
                  default: false
                  example: true
                include_summary:
                  type: boolean
                  description: Include the summary for each meeting.
                  default: false
                  example: true
                include_transcript:
                  type: boolean
                  description: Include the transcript for each meeting.
                  default: false
                  example: true
                triggered_for:
                  type: array
                  example:
                    - my_recordings
                    - my_shared_with_team_recordings
                    - shared_with_me_external_recordings
                  description: >
                    You must send at least one of the following types of
                    recordings to trigger on.

                    - `my_recordings`: Your private recordings, as well as those
                    you've shared with individuals. (On Team Plans, this
                    excludes recordings you've shared with any teams.)

                    - `shared_external_recordings`: Recordings shared with you
                    by other users. (For Team Plans, this does not include
                    recordings shared by other users on your Team Plan.)

                    - `my_shared_with_team_recordings`: (Team Plans only). All
                    recordings that you have shared with other teams (e.g.
                    Marketing or Sales). Recordings you've shared with
                    individuals but not with teams are not included.

                    - `shared_team_recordings`: (Team Plans only) All recordings
                    you can access from other users on your Team Plan, whether
                    shared with you individually or with your team.
                  items:
                    type: string
                    enum:
                      - my_recordings
                      - shared_external_recordings
                      - my_shared_with_team_recordings
                      - shared_team_recordings
      responses:
        '201':
          description: The created webhook.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Webhook'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '429':
          $ref: '#/components/responses/RateLimited'
components:
  schemas:
    Webhook:
      type: object
      required:
        - id
        - url
        - secret
        - created_at
        - include_transcript
        - include_crm_matches
        - include_summary
        - include_action_items
        - triggered_for
      properties:
        id:
          type: string
          example: ikEoQ4bVoq4JYUmc
        url:
          type: string
          format: uri
          example: https://example.com/webhook
        secret:
          type: string
          description: The secret used to verify the webhook signature.
          example: whsec_x6EV6NIAAz3ldclszNJTwrow
        created_at:
          type: string
          description: The date and time the webhook was created in ISO 8601 format.
          format: date-time
          example: '2025-06-30T10:40:46Z'
        include_transcript:
          type: boolean
          example: true
        include_crm_matches:
          type: boolean
          example: true
        include_summary:
          type: boolean
          example: true
        include_action_items:
          type: boolean
          example: true
        triggered_for:
          type: array
          example:
            - my_recordings
            - my_shared_with_team_recordings
            - shared_external_recordings
          items:
            type: string
            enum:
              - my_recordings
              - shared_external_recordings
              - my_shared_with_team_recordings
              - shared_team_recordings
  responses:
    BadRequest:
      description: Bad request - the query parameters were invalid.
    Unauthorized:
      description: Unauthorized - missing or invalid `Authorization` header.
    RateLimited:
      description: >-
        Rate limited - you have exceeded the rate limit for the requested
        endpoint. Check our [rate limiting](/api-reference#rate-limiting)
        documentation for more information.
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Delete a webhook

> Delete a webhook.



## OpenAPI

````yaml /api-reference/openapi.yaml delete /webhooks/{id}
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths:
  /webhooks/{id}:
    delete:
      tags:
        - Webhooks
      summary: Delete a webhook
      description: Delete a webhook.
      operationId: deleteWebhook
      parameters:
        - in: path
          name: id
          required: true
          description: The ID of the webhook to delete.
          schema:
            type: string
      responses:
        '204':
          description: The webhook was deleted successfully.
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'
        '404':
          $ref: '#/components/responses/NotFound'
        '429':
          $ref: '#/components/responses/RateLimited'
components:
  responses:
    BadRequest:
      description: Bad request - the query parameters were invalid.
    Unauthorized:
      description: Unauthorized - missing or invalid `Authorization` header.
    NotFound:
      description: Not found - the resource was not found.
    RateLimited:
      description: >-
        Rate limited - you have exceeded the rate limit for the requested
        endpoint. Check our [rate limiting](/api-reference#rate-limiting)
        documentation for more information.
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# New meeting content ready

> Webhook sent to the URL you register in Fathom settings.



## OpenAPI

````yaml /api-reference/openapi.yaml webhook newMeeting
openapi: 3.1.1
info:
  title: Fathom External API
  version: 1.0.0
  description: |
    The Fathom External API lets you poll meetings, teams, and team members, and
    optionally receive webhooks when content from a new meeting is ready.
servers:
  - url: https://api.fathom.ai/external/v1
security:
  - ApiKeyAuth: []
  - BearerAuth: []
paths: {}
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key
      description: |
        Include your API key in the `X-Api-Key` header of every request.
    BearerAuth:
      type: http
      scheme: bearer

````> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# SDK Introduction

> Get started with Fathom using our official TypeScript and Python SDKs

## Choose Your SDK

Get started in minutes with our official SDKs. They handle authentication, pagination, error handling, and all the complex stuff so you can focus on building amazing integrations.

<CardGroup cols={2}>
  <Card title="TypeScript SDK" icon="code" href="/sdks/typescript-installation" arrow="true" cta="Get Started">
    Full type safety, async/await support, and tree-shaking for optimal bundle sizes.
  </Card>

  <Card title="Python SDK" icon="python" href="/sdks/python-installation" arrow="true" cta="Get Started">
    Built with Pydantic for validation and supports both sync and async operations.
  </Card>
</CardGroup>
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Authentication

> Authenticate with the Fathom SDKs using API keys

## API Key Authentication

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: {
      apiKeyAuth: process.env.FATHOM_API_KEY_AUTH || ""
    }
  });
  ```

  ```python Python theme={null}
  from fathom_python import models, Fathom
  import os

  fathom = Fathom(security=models.Security(
      api_key_auth=os.getenv("FATHOM_API_KEY_AUTH", "")
  ))
  ```
</CodeGroup>

## Bearer Token Authentication

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: {
      bearerAuth: "YOUR_BEARER_TOKEN"
    }
  });
  ```

  ```python Python theme={null}
  from fathom_python import models, Fathom

  fathom = Fathom(security=models.Security(
      bearer_auth="YOUR_BEARER_TOKEN"
  ))
  ```
</CodeGroup>

## Security Schemes

| Name         | Type   | Environment Variable  |
| ------------ | ------ | --------------------- |
| `apiKeyAuth` | apiKey | `FATHOM_API_KEY_AUTH` |
| `bearerAuth` | http   | `FATHOM_BEARER_AUTH`  |

## Security Best Practices

* Use environment variables for credentials
* Use OAuth for multi-user integrations
* Rotate API keys regularly
* Monitor API usage
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Available Methods

> All available methods in the Fathom SDKs

## Available Methods

Both TypeScript and Python SDKs support all Fathom API operations.

### Core Methods

| TypeScript          | Python                | Description                                 |
| ------------------- | --------------------- | ------------------------------------------- |
| `listMeetings()`    | `list_meetings()`     | List meetings with filtering and pagination |
| `listTeams()`       | `list_teams()`        | List teams accessible to the user           |
| `listTeamMembers()` | `list_team_members()` | List members of a specific team             |
| `createWebhook()`   | `create_webhook()`    | Create webhook for real-time notifications  |
| `deleteWebhook()`   | `delete_webhook()`    | Delete an existing webhook                  |

### Quick Examples

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: { apiKeyAuth: "YOUR_API_KEY" }
  });

  // List meetings with filtering
  const meetings = await fathom.listMeetings({
    calendarInviteesDomains: [
      "acme.com",
      "client.com",
    ],
    recordedBy: [
      "ceo@acme.com",
      "pm@acme.com",
    ],
    teams: [
      "Sales",
      "Engineering",
    ],
  });

  // List teams
  const teams = await fathom.listTeams({});

  // Create webhook
  const webhook = await fathom.createWebhook({
    destinationUrl: "https://your-app.com/webhook",
    includeTranscript: true,
    includeCrmMatches: true
  });
  ```

  ```python Python theme={null}
  from fathom_python import models, Fathom

  with Fathom(security=models.Security(
      api_key_auth="YOUR_API_KEY"
  )) as fathom:
      # List meetings with filtering
      meetings = fathom.list_meetings(
          calendar_invitees_domains=[
              "acme.com",
              "client.com",
          ],
          recorded_by=[
              "ceo@acme.com",
              "pm@acme.com",
          ],
          teams=[
              "Sales",
              "Engineering",
          ],
          include_crm_matches=False,
          include_transcript=False,
          meeting_type=models.ListMeetingsMeetingType.ALL
      )

      # List teams
      teams = fathom.list_teams()

      # Create webhook
      webhook = fathom.create_webhook(
          destination_url="https://your-app.com/webhook",
          include_transcript=True,
          include_crm_matches=True
      )
  ```
</CodeGroup>

<Note>For complete parameter documentation including types, examples, and detailed descriptions, see [API Reference](/api-reference/meetings/list-meetings).</Note>
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Pagination

> Handle paginated responses with the Fathom SDKs

## Pagination

Both TypeScript and Python SDKs handle pagination automatically. The SDKs return paginated responses that you can iterate through to access all data.

### Basic Pagination

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });

  const result = await fathom.listMeetings({});

  for await (const page of result) {
    console.log(page);
  }
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models

  with Fathom(
      security=models.Security(
          api_key_auth="YOUR_API_KEY",
      ),
  ) as fathom:
      res = fathom.list_meetings()

      while res is not None:
          print(res)
          res = res.next()
  ```
</CodeGroup>

### Processing All Data

Here's how to collect all data from paginated responses:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  async function getAllMeetings() {
    const fathom = new Fathom({
      security: {
        apiKeyAuth: "YOUR_API_KEY"
      }
    });

    const result = await fathom.listMeetings({});
    const allMeetings: any[] = [];
    
    for await (const page of result) {
      if (page.items) {
        allMeetings.push(...page.items);
      }
    }
    
    console.log(`Total meetings: ${allMeetings.length}`);
    return allMeetings;
  }
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models

  def get_all_meetings():
      with Fathom(
          security=models.Security(
              api_key_auth="YOUR_API_KEY",
          ),
      ) as fathom:
          res = fathom.list_meetings()
          all_meetings = []
          
          while res is not None:
              all_meetings.extend(res.result.items)
              res = res.next()
          
          print(f"Total meetings: {len(all_meetings)}")
          return all_meetings
  ```
</CodeGroup>

### Pagination Best Practices

1. **Use async iteration (TypeScript)**: The `for await...of` syntax is the recommended way to handle pagination
2. **Use while loops (Python)**: The `while res is not None` pattern is the standard approach
3. **Process incrementally**: For large datasets, consider processing each page as it comes rather than collecting all data in memory
4. **Handle errors**: Wrap pagination in try-catch blocks for robust error handling (see [Error Handling](/sdks/error-handling))
5. **Respect rate limits**: The SDK handles [rate limiting](/api-overview#rate-limiting) automatically, but be mindful of API usage
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# OAuth

> Use OAuth authentication with the Fathom SDKs

## OAuth Authentication

<Note>
  OAuth users need to register an app with us before using this feature. Visit our [OAuth Setup Guide](/oauth) to get your client credentials and configure your redirect URL.
</Note>

Both TypeScript and Python SDKs support OAuth 2.0 authentication for building integrations that can be installed by multiple Fathom accounts.

***

### Step 1: Get Authorization URL

Using the `Client ID` and `Client Secret` you received when registering your app, generate an authorization URL that users will visit to grant your app access:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const url = Fathom.getAuthorizationUrl({
    clientId: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    redirectUri: 'https://your_redirect_url',
    scope: 'public_api',
    state: 'randomState123',
  });

  // Redirect user to this URL
  console.log(url);
  ```

  ```python Python theme={null}
  from fathom_python import Fathom

  url = Fathom.get_authorization_url(
      "YOUR_CLIENT_ID",  # client ID
      "your_redirect_url",
      "public_api",      # required scope
      "randomState123"
  )
  print(url)
  ```
</CodeGroup>

### Step 2: Handle OAuth Callback

After the user authorizes your app, they'll be redirected back to your redirect URI with an authorization code. Use this code to exchange it for access tokens:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  // User gets redirected here with code

  const tokenStore = Fathom.newTokenStore();  // demo only — use persistent store in production

  const fathom = new Fathom({
    security: Fathom.withAuthorization({
      clientId: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
      code: "AUTHORIZATION_CODE_FROM_CALLBACK",
      redirectUri: "https://your_redirect_url",
      tokenStore
    }),
  });

  // Now you can make requests and the SDK will refresh tokens as needed
  const result = await fathom.listMeetings({});
  ```

  ```python Python theme={null}
  from fathom_python import Fathom

  # User gets redirected back to your redirect URI with a code

  token_store = Fathom.new_token_store()  # demo only — use persistent store in production

  fathom = Fathom(security=Fathom.with_authorization(
      "YOUR_CLIENT_ID",                # client_id
      "YOUR_CLIENT_SECRET",            # client_secret
      "AUTHORIZATION_CODE_FROM_CALLBACK",  # code
      "your_redirect_uri",
      token_store
  ))

  result = fathom.list_meetings()
  print(result)
  ```
</CodeGroup>

<Note>
  newTokenStore() is an in-memory store — great for demos and quick starts. For production, you'll want a persistent TokenStore so users only need to install once.
</Note>

### Step 3: Token Management & Persistence

For production, you'll want to implement your own `TokenStore` that persists tokens to a database, cache, or file.

The SDK will automatically call your `set()` when new tokens are issued, and `get()` when it needs to reuse or refresh them.

#### Example: Python persistent store (SQLite)

<Note>
  This SQLite example is meant as a simple demo. In production, you’ll want to plug in whatever storage makes sense for your stack (e.g. Postgres, Redis, cloud secret store).
</Note>

```python theme={null}
import sqlite3

from fathom_python import Fathom

class SQLiteTokenStore(Fathom.TokenStore):
    def __init__(self, db_path="tokens.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        conn = sqlite3.connect(self.db_path)
        conn.execute("""
          CREATE TABLE IF NOT EXISTS fathom_tokens (
            id INTEGER PRIMARY KEY,
            token TEXT,
            refresh_token TEXT,
            expires INTEGER
          )
        """)
        conn.commit()
        conn.close()

    def get(self):
        conn = sqlite3.connect(self.db_path)
        row = conn.execute("SELECT token, refresh_token, expires FROM fathom_tokens WHERE id = 1").fetchone()
        conn.close()
        return {"token": row[0], "refresh_token": row[1], "expires": row[2]} if row else None

    def set(self, token, refresh_token, expires):
        conn = sqlite3.connect(self.db_path)
        conn.execute("""
          INSERT INTO fathom_tokens (id, token, refresh_token, expires)
          VALUES (1, ?, ?, ?)
          ON CONFLICT(id) DO UPDATE SET token=excluded.token,
                                        refresh_token=excluded.refresh_token,
                                        expires=excluded.expires
        """, (token, refresh_token, expires))
        conn.commit()
        conn.close()
```

**Usage:**

```python theme={null}
token_store = SQLiteTokenStore()
fathom = Fathom(security=Fathom.with_authorization(
    client_id,
    client_secret,
    authorization_code,
    redirect_uri,
    token_store
))
```

#### Further examples

For a real-world production example, see [how Pylon implemented OAuth and token storage](/inspiration/pylon) as part of their Fathom integration.

### Common Mistakes

* **Calling `tokenStore.get()` too early**
  Nothing will be there yet — tokens are only written after the SDK exchanges the authorization code.

* **Assuming tokens never expire**
  Access tokens are short-lived. Always persist the refresh token and let the SDK refresh automatically.

* **Using `newTokenStore()` in production**
  It’s an in-memory store for demos only. Use a persistent store (database, Redis, file, etc.) so tokens survive restarts.

### Manual Token Exchange (Optional)

If you prefer to handle the token exchange yourself (or to debug), you can call the OAuth token endpoint directly.

<Note>The SDK handles token exchange and refresh automatically. You only need this section if you’re debugging or implementing your own flow.</Note>

**Exchange authorization code for tokens:**

```bash theme={null}
curl -X POST https://api.fathom.ai/external/v1/oauth2/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code" \
  -d "code=AUTH_CODE" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=YOUR_REDIRECT_URI"
```

This returns a JSON object with both an `access_token` and a `refresh_token`.

**Refresh an expired access token:**

```bash theme={null}

curl -X POST https://api.fathom.ai/external/v1/oauth2/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=refresh_token" \
  -d "refresh_token=YOUR_REFRESH_TOKEN" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET"
```

This also returns a JSON object with both an `access_token` and a `refresh_token`. Use the new `access_token` in API requests. Store and use the new `refresh_token` the next time your access token expires. A `refresh_token` can only be used once. If it is unused, it stays valid until the user revokes access.

### OAuth Handler Examples

Complete OAuth flow implementations for web frameworks:

<CodeGroup>
  ```typescript Express.js theme={null}
  import express from 'express';
  import { Fathom } from 'fathom-typescript';

  const app = express();

  // OAuth initiation endpoint
  app.get('/auth/fathom', (req, res) => {
    const authUrl = Fathom.getAuthorizationUrl({
      clientId: process.env.FATHOM_CLIENT_ID!,
      clientSecret: process.env.FATHOM_CLIENT_SECRET!,
      redirectUri: 'https://your-app.com/auth/fathom/callback',
      scope: 'public_api',
      state: 'random_state_string',
    });

    res.redirect(authUrl);
  });

  // OAuth callback endpoint
  app.get('/auth/fathom/callback', async (req, res) => {
    const { code, state } = req.query;

    if (!code || typeof code !== 'string') {
      return res.status(400).send('Authorization code required');
    }

    try {
      const tokenStore = Fathom.newTokenStore();
      const fathom = new Fathom({
        security: Fathom.withAuthorization({
          clientId: process.env.FATHOM_CLIENT_ID!,
          clientSecret: process.env.FATHOM_CLIENT_SECRET!,
          code,
          redirectUri: 'https://your-app.com/auth/fathom/callback',
          tokenStore
        }),
      });

      // Test the connection
      const meetings = await fathom.listMeetings({});
      res.json({ success: true, meetingsCount: meetings.items?.length || 0 });
    } catch (error) {
      console.error('OAuth error:', error);
      res.status(500).send('OAuth authentication failed');
    }
  });

  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  ```

  ```python Flask theme={null}
  from flask import Flask, request, redirect, jsonify
  from fathom_python import Fathom
  import os

  app = Flask(__name__)

  # OAuth initiation endpoint
  @app.route('/auth/fathom')
  def auth_fathom():
      auth_url = Fathom.get_authorization_url(
          os.getenv('FATHOM_CLIENT_ID'),
          'https://your-app.com/auth/fathom/callback',
          'public_api',
          'random_state_string'
      )
      return redirect(auth_url)

  # OAuth callback endpoint
  @app.route('/auth/fathom/callback')
  def auth_fathom_callback():
      code = request.args.get('code')
      state = request.args.get('state')

      if not code:
          return 'Authorization code required', 400

      try:
          token_store = Fathom.new_token_store()
          fathom = Fathom(security=Fathom.with_authorization(
              os.getenv('FATHOM_CLIENT_ID'),
              os.getenv('FATHOM_CLIENT_SECRET'),
              code,
              'https://your-app.com/auth/fathom/callback',
              token_store
          ))

          # Test the connection
          meetings = fathom.list_meetings()
          return jsonify({
              'success': True,
              'meetingsCount': len(meetings.items) if meetings.items else 0
          })
      except Exception as e:
          print(f'OAuth error: {e}')
          return 'OAuth authentication failed', 500

  if __name__ == '__main__':
      app.run(port=3000)
  ```
</CodeGroup>

### OAuth Scopes

Currently, the only available scope is:

* `public_api` — Access to the Fathom API
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Error Handling

> Handle errors with the Fathom SDKs

## Error Handling

Both TypeScript and Python SDKs provide comprehensive error handling capabilities. The base error class is `FathomError` for both SDKs.

### Basic Error Handling

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';
  import * as errors from 'fathom-typescript/models/errors';

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });

  try {
    const result = await fathom.listMeetings({});
    for await (const page of result) {
      console.log(page);
    }
  } catch (error) {
    if (error instanceof errors.FathomError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, errors, models

  with Fathom(
      security=models.Security(
          api_key_auth="YOUR_API_KEY",
      ),
  ) as fathom:
      try:
          res = fathom.list_meetings()
          while res is not None:
              print(res)
              res = res.next()
      except errors.FathomError as e:
          print(f"Error: {e.message}")
          print(f"Status Code: {e.status_code}")
          print(f"Body: {e.body}")
          print(f"Headers: {e.headers}")
  ```
</CodeGroup>

### Handle Specific Status Codes

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';
  import * as errors from 'fathom-typescript/models/errors';

  async function handleSpecificErrors() {
    const fathom = new Fathom({
      security: {
        apiKeyAuth: "YOUR_API_KEY"
      }
    });

    try {
      const result = await fathom.listMeetings({});
      return result;
    } catch (error) {
      if (error instanceof errors.FathomError) {
        switch (error.statusCode) {
          case 401:
            console.log("Authentication failed. Check your API key.");
            break;
          case 403:
            console.log("Access forbidden. Check your permissions.");
            break;
          case 404:
            console.log("Resource not found.");
            break;
          case 429:
            console.log("Rate limit exceeded. Try again later.");
            break;
          default:
            if (error.statusCode >= 500) {
              console.log("Server error. Try again later.");
            } else {
              console.log(`Unexpected error: ${error.message}`);
            }
        }
      }
      return null;
    }
  }
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, errors, models

  def handle_specific_errors():
      with Fathom(
          security=models.Security(
              api_key_auth="YOUR_API_KEY",
          ),
      ) as fathom:
          try:
              res = fathom.list_meetings()
              return res
          except errors.FathomError as e:
              if e.status_code == 401:
                  print("Authentication failed. Check your API key.")
              elif e.status_code == 403:
                  print("Access forbidden. Check your permissions.")
              elif e.status_code == 404:
                  print("Resource not found.")
              elif e.status_code == 429:
                  print("Rate limit exceeded. Try again later.")
              elif e.status_code >= 500:
                  print("Server error. Try again later.")
              else:
                  print(f"Unexpected error: {e.message}")
              return None
  ```
</CodeGroup>

### Error Classes

**Primary error:**

* `FathomError`: The base class for HTTP error responses.

**Network errors (TypeScript):**

* `ConnectionError`: HTTP client was unable to make a request to a server.
* `RequestTimeoutError`: HTTP request timed out due to an AbortSignal signal.
* `RequestAbortedError`: HTTP request was aborted by the client.
* `InvalidRequestError`: Any input used to create a request is invalid.
* `UnexpectedClientError`: Unrecognised or unexpected error.

**Network errors (Python):**

* `httpx.RequestError`: Base class for request errors.
* `httpx.ConnectError`: HTTP client was unable to make a request to a server.
* `httpx.TimeoutException`: HTTP request timed out.

**Inherit from `FathomError`:**

* `ResponseValidationError`: Type mismatch between the response data and the expected model structure.
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Filtering

> Filter data with the Fathom SDKs

## Filtering Data

Both TypeScript and Python SDKs provide powerful filtering capabilities for retrieving specific data from the Fathom API.

### Basic Filtering

Start with simple single filters:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });

  // Filter by team only
  const result = await fathom.listMeetings({
    teams: ["Sales"]
  });

  for await (const page of result) {
    console.log(page);
  }
  ```

  ```python Python theme={null}
  from fathom_python import models, Fathom

  with Fathom(
      security=models.Security(
          api_key_auth="YOUR_API_KEY",
      ),
  ) as fathom:
      # Filter by team only
      res = fathom.list_meetings(
          teams=["Sales"]
      )

      while res is not None:
          print(res)
          res = res.next()
  ```
</CodeGroup>

### Filter by Meeting Type

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });

  async function getExternalMeetings() {
    const result = await fathom.listMeetings({
      meetingType: "external"
    });

    for await (const page of result) {
      console.log(page);
    }
  }
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models

  with Fathom(
      security=models.Security(
          api_key_auth="YOUR_API_KEY",
      ),
  ) as fathom:
      # Get only external meetings
      external_meetings = fathom.list_meetings(
          meeting_type=models.ListMeetingsMeetingType.EXTERNAL
      )

      while external_meetings is not None:
          print(external_meetings)
          external_meetings = external_meetings.next()
  ```
</CodeGroup>

### Include Transcript Data

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });

  async function getMeetingsWithTranscripts() {
    const result = await fathom.listMeetings({
      includeTranscript: true
    });

    for await (const page of result) {
      for (const meeting of page.items || []) {
        console.log(`Meeting: ${meeting.title}`);
        if (meeting.transcript) {
          console.log(`Transcript: ${meeting.transcript}`);
        }
      }
    }
  }
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models

  with Fathom(
      security=models.Security(
          api_key_auth="YOUR_API_KEY",
      ),
  ) as fathom:
      # Get meetings with transcript data
      meetings_with_transcripts = fathom.list_meetings(
          include_transcript=True
      )

      while meetings_with_transcripts is not None:
          for meeting in meetings_with_transcripts.items:
              if meeting.transcript:
                  print(f"Meeting: {meeting.title}")
                  print(f"Transcript: {meeting.transcript}")
          meetings_with_transcripts = meetings_with_transcripts.next()
  ```
</CodeGroup>

### Combining Multiple Filters

Combine multiple filters for precise queries:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from 'fathom-typescript';

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });

  async function getFilteredMeetings() {
    const result = await fathom.listMeetings({
      calendarInviteesDomains: [
        "acme.com",
        "client.com",
      ],
      recordedBy: [
        "ceo@acme.com",
        "pm@acme.com",
      ],
      teams: [
        "Sales",
        "Engineering",
      ],
      meetingType: "external",
      includeTranscript: true,
      includeCrmMatches: true
    });

    for await (const page of result) {
      for (const meeting of page.items || []) {
        console.log(`Meeting: ${meeting.title}`);
        console.log(`Recorded by: ${meeting.recordedBy?.name}`);
        if (meeting.crmMatches) {
          console.log(`CRM matches: ${meeting.crmMatches}`);
        }
      }
    }
  }
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models

  with Fathom(
      security=models.Security(
          api_key_auth="YOUR_API_KEY",
      ),
  ) as fathom:
      # Complex filtering with multiple criteria
      filtered_meetings = fathom.list_meetings(
          calendar_invitees_domains=[
              "acme.com",
              "client.com",
          ],
          recorded_by=[
              "ceo@acme.com",
              "pm@acme.com",
          ],
          teams=[
              "Sales",
              "Engineering",
          ],
          meeting_type=models.ListMeetingsMeetingType.EXTERNAL,
          include_transcript=True,
          include_crm_matches=True
      )

      while filtered_meetings is not None:
          for meeting in filtered_meetings.items:
              print(f"Meeting: {meeting.title}")
              print(f"Recorded by: {meeting.recorded_by.name}")
              if meeting.crm_matches:
                  print(f"CRM matches: {meeting.crm_matches}")
          filtered_meetings = filtered_meetings.next()
  ```
</CodeGroup>

### TypeScript Type Safety

The TypeScript SDK provides full type safety for filter parameters:

```typescript theme={null}
import { Fathom } from 'fathom-typescript';

const fathom = new Fathom({
  security: {
    apiKeyAuth: "YOUR_API_KEY"
  }
});

// TypeScript will provide autocomplete and type checking
async function typedFiltering() {
  const result = await fathom.listMeetings({
    // TypeScript will suggest available options
    meetingType: "external", // ✅ Valid
    // meetingType: "invalid" // ❌ TypeScript error
    includeTranscript: true,
    includeCrmMatches: false
  });

  for await (const page of result) {
    // TypeScript knows the structure of the response
    console.log(`Page has ${page.items?.length || 0} meetings`);
  }
}
```

<Note>For complete parameter documentation including types, examples, and detailed descriptions, see the [API Reference](/api-reference/meetings/list-meetings).</Note>
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Advanced Configuration

> Advanced options and configurations for the Fathom SDKs

## Advanced Configuration

Configure your SDK for production use with custom settings, debugging, and optimization.

### Server Selection

Override the default server URL when needed:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from "fathom";

  const fathom = new Fathom({
    serverUrl: "https://api.fathom.ai/external/v1",
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models
  import os

  with Fathom(
      server_url="https://api.fathom.ai/external/v1",
      security=models.Security(
          api_key_auth=os.getenv("FATHOM_API_KEY_AUTH", ""),
      ),
  ) as fathom:
      res = fathom.list_meetings()
      while res is not None:
          res = res.next()
  ```
</CodeGroup>

### Custom HTTP Client

Customize headers and other HTTP client settings:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from "fathom";

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models
  import httpx

  http_client = httpx.Client(headers={"x-custom-header": "someValue"})
  fathom = Fathom(client=http_client, security=models.Security(api_key_auth="YOUR_API_KEY"))
  ```
</CodeGroup>

### Standalone Functions (TypeScript Only)

Use standalone functions for bundle size optimization:

```typescript theme={null}
import { listMeetings } from "fathom";

const result = await listMeetings({
  security: {
    apiKeyAuth: "YOUR_API_KEY"
  }
});

for await (const page of result) {
  console.log(page);
}
```

#### Available Standalone Functions

* `createWebhook` - Create a webhook
* `deleteWebhook` - Delete a webhook
* `listMeetings` - List meetings
* `listTeamMembers` - List team members
* `listTeams` - List teams

### Retries (Python Only)

Configure retry strategies for production reliability:

```python theme={null}
from fathom_python import Fathom, models
from fathom_python.utils import BackoffStrategy, RetryConfig
import os

with Fathom(
    retry_config=RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False),
    security=models.Security(
        api_key_auth=os.getenv("FATHOM_API_KEY_AUTH", ""),
    ),
) as fathom:
    res = fathom.list_meetings()
    
    while res is not None:
        res = res.next()
```

### Resource Management (Python Only)

Use context managers for proper resource cleanup:

```python theme={null}
from fathom_python import Fathom, models
import os

def main():
    with Fathom(
        security=models.Security(
            api_key_auth=os.getenv("FATHOM_API_KEY_AUTH", ""),
        ),
    ) as fathom:
        # Rest of application here...
```

### Debugging

Enable debug logging during development:

<CodeGroup>
  ```typescript TypeScript theme={null}
  import { Fathom } from "fathom";

  const fathom = new Fathom({
    security: {
      apiKeyAuth: "YOUR_API_KEY"
    }
  });

  // Manual debug logging
  console.log('Making API request...');
  const result = await fathom.listMeetings({});
  console.log('Response received:', result);
  ```

  ```python Python theme={null}
  from fathom_python import Fathom, models
  import logging
  import os

  # Setup debug logging
  logging.basicConfig(level=logging.DEBUG)
  fathom = Fathom(debug_logger=logging.getLogger("fathom_python"))

  # Or enable via environment variable
  # export FATHOM_DEBUG=true

  with Fathom(
      security=models.Security(
          api_key_auth=os.getenv("FATHOM_API_KEY_AUTH", ""),
      ),
  ) as fathom:
      res = fathom.list_meetings()
      while res is not None:
          res = res.next()
  ```
</CodeGroup>

### Configuration Best Practices

1. **Use environment variables** for sensitive configuration
2. **Implement proper error handling** with try-catch blocks
3. **Use context managers (Python)** for resource cleanup
4. **Configure timeouts** appropriate for your use case
5. **Enable debugging** during development
6. **Use standalone functions (TypeScript)** for bundle optimization
7. **Configure retries** for production reliability
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# TypeScript Installation

> Install the Fathom TypeScript SDK

## How to Install

<CodeGroup>
  ```bash npm theme={null}
  npm install fathom-typescript
  ```

  ```bash yarn theme={null}
  yarn add fathom-typescript
  ```

  ```bash pnpm theme={null}
  pnpm add fathom-typescript
  ```
</CodeGroup>

<Note>This package is published with CommonJS and ES Modules (ESM) support.</Note>

## Requirements

For supported JavaScript runtimes, please consult the [RUNTIMES.md](https://github.com/fathom/fathom-typescript/blob/main/RUNTIMES.md) file in the SDK repository.

## Module Systems

The SDK supports both CommonJS and ES Modules:

<CodeGroup>
  ```typescript ES Modules (Recommended) theme={null}
  import { Fathom } from 'fathom-typescript';
  ```

  ```javascript CommonJS theme={null}
  const { Fathom } = require('fathom-typescript');
  ```
</CodeGroup>

## Quick Start

After installation, you can quickly test your setup:

```typescript theme={null}
import { Fathom } from 'fathom-typescript';

const fathom = new Fathom({
  security: {
    apiKeyAuth: "YOUR_API_KEY"
  }
});

const result = await fathom.listMeetings({});
console.log(result);
```

## Standalone Functions

All SDK methods are available as standalone functions, ideal for applications where bundle size is a concern:

```typescript theme={null}
import { listMeetings } from 'fathom-typescript';

const result = await listMeetings({
  security: {
    apiKeyAuth: "YOUR_API_KEY"
  }
});

for await (const page of result) {
  console.log(page);
}
```

### Available Standalone Functions

* `listMeetings` - List meetings
* `listTeams` - List teams
* `listTeamMembers` - List team members
* `createWebhook` - Create a webhook
* `deleteWebhook` - Delete a webhook

### Tree Shaking

When using a bundler, unused functionality will be excluded from the final bundle:

```typescript theme={null}
// Only listMeetings will be included in the bundle
import { listMeetings } from 'fathom-typescript';

// This won't be included if not used
// import { createWebhook } from 'fathom-typescript';
```

## Version Management

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage to a specific package version:

```json theme={null}
{
  "dependencies": {
    "fathom-typescript": "0.0.30"
  }
}
```
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Python Installation

> Install the Fathom Python SDK

## How to Install

<CodeGroup>
  ```bash pip theme={null}
  pip install fathom-python
  ```

  ```bash poetry theme={null}
  poetry add fathom-python
  ```

  ```bash uv theme={null}
  uvx --from fathom-python python
  ```
</CodeGroup>

## Requirements

The Python SDK supports Python 3.9+ and works with most modern Python environments.

## Module Systems

The Python SDK works with standard Python import syntax:

```python theme={null}
from fathom_python import models, Fathom
```

## IDE Support

For PyCharm users, install the [PyCharm Pydantic Plugin](https://docs.pydantic.dev/latest/integrations/pycharm/) for better integration with Pydantic models.

## Alternative Installation Methods

### Shell and Script Usage with `uv`

You can use this SDK in a Python shell with [uv](https://docs.astral.sh/uv/) and the `uvx` command:

<CodeGroup>
  ```shell Shell usage theme={null}
  uvx --from fathom-python python
  ```

  ```python Standalone script theme={null}
  #!/usr/bin/env -S uv run --script
  # /// script
  # requires-python = ">=3.9"
  # dependencies = [
  #     "fathom-python",
  # ]
  # ///

  from fathom_python import Fathom

  sdk = Fathom(
    # SDK arguments
  )

  # Rest of script here...
  ```
</CodeGroup>

Once that is saved to a file, you can run it with `uv run script.py` where `script.py` can be replaced with the actual file name.

## Quick Start

After installation, you can quickly test your setup:

```python theme={null}
from fathom_python import models, Fathom

with Fathom(
    security=models.Security(
        api_key_auth="YOUR_API_KEY",
    ),
) as fathom:
    result = fathom.list_meetings()
    print(result)
```

## Version Management

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage to a specific package version:

```bash theme={null}
pip install fathom-python==0.0.30
```

Or with poetry:

```bash theme={null}
poetry add fathom-python@0.0.30
```
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# TypeScript SDK Changes

> Breaking changes in TypeScript SDK version 0.0.30

## TypeScript SDK Breaking Changes

<Warning>Version 0.0.30 introduces breaking changes for the TypeScript SDK. Older versions continue to work but don't support OAuth.</Warning>

### Client Class Name Change

The client is now called `Fathom` instead of `FathomApi`.

#### Old Syntax

```typescript theme={null}
import { FathomApi } from 'fathom-typescript';

const fathom = new FathomApi("apikey");
```

#### New Syntax

```typescript theme={null}
import { Fathom } from 'fathom-typescript';

const fathom = new Fathom({security: {apiKeyAuth: "apikey"}});
```

### API Key Authentication Syntax

The API key authentication syntax has changed to support the new security model.

#### Old Syntax

```typescript theme={null}
import { FathomApi } from 'fathom-typescript';

const fathom = new FathomApi("your_api_key");
```

#### New Syntax

```typescript theme={null}
import { Fathom } from 'fathom-typescript';

const fathom = new Fathom({
  security: {
    apiKeyAuth: "your_api_key"
  }
});
```

### OAuth Support

Version 0.0.30 adds OAuth support, which requires the new client structure:

```typescript theme={null}
import { Fathom } from 'fathom-typescript';

// OAuth authorization URL generation
const url = Fathom.getAuthorizationUrl({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'https://your_redirect_url',
  scope: 'public_api',
  state: 'randomState123',
});

// OAuth client initialization
const tokenStore = Fathom.newTokenStore();
const fathom = new Fathom({
  security: Fathom.withAuthorization({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    code: "AUTHORIZATION_CODE_FROM_CALLBACK",
    redirectUri: "https://your_redirect_url",
    tokenStore: tokenStore
  }),
});
```

### Migration Guide

To migrate from an older version to 0.0.30:

1. **Update imports**:
   ```typescript theme={null}
   // Old
   import { FathomApi } from 'fathom-typescript';

   // New
   import { Fathom } from 'fathom-typescript';
   ```

2. **Update client initialization**:
   ```typescript theme={null}
   // Old
   const fathom = new FathomApi("your_api_key");

   // New
   const fathom = new Fathom({
     security: {
       apiKeyAuth: "your_api_key"
     }
   });
   ```

3. **Update method calls** (if any method signatures changed):
   ```typescript theme={null}
   // Method calls remain the same
   const result = await fathom.listMeetings({});
   ```

### Backward Compatibility

<Note>Older versions of the SDK continue to work with API key authentication, but they don't support OAuth features.</Note>

If you need to maintain compatibility with older code while adding OAuth support, you can:

1. **Pin to the old version** for existing applications
2. **Create a new integration** using version 0.0.30 for OAuth features
3. **Gradually migrate** existing code to the new syntax

### Version Pinning

We recommend pinning to a specific version to avoid unexpected breaking changes:

```json theme={null}
{
  "dependencies": {
    "fathom-typescript": "0.0.30"
  }
}
```

### What's New in 0.0.30

* ✅ OAuth 2.0 support
* ✅ Improved security model
* ✅ Better TypeScript types
* ✅ Enhanced error handling
* ✅ Standalone functions for bundle optimization
* ✅ Async iteration for pagination
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Python SDK Changes

> Breaking changes in Python SDK version 0.0.30

## Python SDK Breaking Changes

<Warning>Version 0.0.30 introduces breaking changes for the Python SDK. Older versions continue to work but don't support OAuth.</Warning>

### API Key Authentication Syntax

The API key authentication syntax has changed to support the new security model.

#### Old Syntax

```python theme={null}
from fathom_python import Fathom

fathom = Fathom("your_api_key")
```

#### New Syntax

```python theme={null}
from fathom_python import models, Fathom

fathom = Fathom(security=models.Security(api_key_auth="your_api_key"))
```

### OAuth Support

Version 0.0.30 adds OAuth support, which requires the new client structure:

```python theme={null}
from fathom_python import Fathom

# OAuth authorization URL generation
url = Fathom.get_authorization_url(
    "YOUR_CLIENT_ID",  # client ID
    "your_redirect_url",
    "public_api",  # required scope
    "randomState123"
)

# OAuth client initialization
token_store = Fathom.new_token_store()
fathom = Fathom(security=Fathom.with_authorization(
    "YOUR_CLIENT_ID",  # client_id
    "YOUR_CLIENT_SECRET",  # client_secret
    "AUTHORIZATION_CODE_FROM_CALLBACK",  # code
    'your_redirect_uri',
    token_store
))
```

### Migration Guide

To migrate from an older version to 0.0.30:

1. **Update imports**:
   ```python theme={null}
   # Old
   from fathom_python import Fathom

   # New
   from fathom_python import models, Fathom
   ```

2. **Update client initialization**:
   ```python theme={null}
   # Old
   fathom = Fathom("your_api_key")

   # New
   fathom = Fathom(security=models.Security(api_key_auth="your_api_key"))
   ```

3. **Update method calls** (if any method signatures changed):
   ```python theme={null}
   # Method calls remain the same
   result = fathom.list_meetings()
   ```

### Context Manager Usage

The new version encourages the use of context managers for proper resource management:

#### Old Usage

```python theme={null}
from fathom_python import Fathom

fathom = Fathom("your_api_key")
result = fathom.list_meetings()
print(result)
```

#### New Usage (Recommended)

```python theme={null}
from fathom_python import models, Fathom

with Fathom(
    security=models.Security(
        api_key_auth="your_api_key",
    ),
) as fathom:
    result = fathom.list_meetings()
    print(result)
```

### Asynchronous Support

Version 0.0.30 includes improved asynchronous support:

```python theme={null}
import asyncio
from fathom_python import models, Fathom

async def main():
    async with Fathom(
        security=models.Security(
            api_key_auth="your_api_key",
        ),
    ) as fathom:
        result = await fathom.list_meetings_async()
        print(result)

asyncio.run(main())
```

### Backward Compatibility

<Note>Older versions of the SDK continue to work with API key authentication, but they don't support OAuth features.</Note>

If you need to maintain compatibility with older code while adding OAuth support, you can:

1. **Pin to the old version** for existing applications
2. **Create a new integration** using version 0.0.30 for OAuth features
3. **Gradually migrate** existing code to the new syntax

### Version Pinning

We recommend pinning to a specific version to avoid unexpected breaking changes:

#### pip

```bash theme={null}
pip install fathom-python==0.0.30
```

#### requirements.txt

```
fathom-python==0.0.30
```

#### pyproject.toml (Poetry)

```toml theme={null}
[tool.poetry.dependencies]
fathom-python = "0.0.30"
```

### What's New in 0.0.30

* ✅ OAuth 2.0 support
* ✅ Improved security model
* ✅ Better Pydantic integration
* ✅ Enhanced error handling
* ✅ Context manager support
* ✅ Asynchronous operations
* ✅ Resource management improvements
* ✅ Better type hints

### Environment Variables

The new version supports environment variables for configuration:

```python theme={null}
import os
from fathom_python import models, Fathom

with Fathom(
    security=models.Security(
        api_key_auth=os.getenv("FATHOM_API_KEY_AUTH", ""),
    ),
) as fathom:
    result = fathom.list_meetings()
    print(result)
```

### Error Handling Improvements

The new version includes better error handling with specific error types:

```python theme={null}
from fathom_python import Fathom, errors, models

with Fathom(
    security=models.Security(
        api_key_auth="your_api_key",
    ),
) as fathom:
    try:
        result = fathom.list_meetings()
        print(result)
    except errors.FathomError as e:
        print(f"API Error: {e.message}")
    except errors.ResponseValidationError as e:
        print(f"Validation Error: {e.message}")
```
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview

> Connect your meeting data to LLMs using the Model Context Protocol

## How to Connect the Fathom MCP Server

Fathom now offers an official MCP (Model Context Protocol) server, allowing you to connect your Fathom meeting data to AI assistants like ChatGPT, Claude, and more. This guide walks you through setup on each supported platform.

## Choose your assistant

<div
  style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
gap: "1rem",
marginTop: "0.5rem",
}}
  className="not-prose"
>
  <a
    href="/mcp-docs/chatgpt"
    style={{
  display: "block",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  padding: "1.25rem",
  textDecoration: "none",
  color: "inherit",
}}
  >
    <img src="https://mintcdn.com/fathom-e4df0608/AEC-X4jFplvaRPpa/images/mcp-openai.svg?fit=max&auto=format&n=AEC-X4jFplvaRPpa&q=85&s=04f58adf9a687318bb186120a128fc96" width="24" height="24" alt="" style={{ display: "block", marginBottom: "0.75rem" }} data-path="images/mcp-openai.svg" />

    <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.35rem" }}>ChatGPT</div>

    <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.5, opacity: 0.72 }}>
      Connect to the Fathom app in ChatGPT
    </p>
  </a>

  <a
    href="/mcp-docs/claude"
    style={{
  display: "block",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "12px",
  padding: "1.25rem",
  textDecoration: "none",
  color: "inherit",
}}
  >
    <img src="https://mintcdn.com/fathom-e4df0608/AEC-X4jFplvaRPpa/images/mcp-claude.svg?fit=max&auto=format&n=AEC-X4jFplvaRPpa&q=85&s=d2f891fb486f17463e4b0df958c45507" width="24" height="24" alt="" style={{ display: "block", marginBottom: "0.75rem" }} data-path="images/mcp-claude.svg" />

    <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.35rem" }}>Claude</div>

    <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.5, opacity: 0.72 }}>
      Connect in the Claude web/desktop app, or as an MCP in Claude Code
    </p>
  </a>
</div>

## Use with other tools

Connect Fathom to any MCP-compatible tool using the server URL below, then authenticate to access your meeting data.

**MCP server URL:** `https://api.fathom.ai/mcp`
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Claude

> Connect Fathom to Claude on the web, in the desktop app, or via Claude Code

<h2 id="claude-web-app">Claude Web App (claude.ai)</h2>

An organization owner sets up the MCP connection as a **custom connector**. Once configured, team members can enable it individually from their integrations settings.

**Steps**

1. An organization owner navigates to the Integrations settings in Claude.
2. Create a new custom connector using the MCP URL: `https://api.fathom.ai/mcp`
3. Team members can then enable the Fathom connector from their own integrations page.

**Reference:** [Get started with custom connectors using remote MCP — Claude Help](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp#h_3d1a65aded)

<h2 id="claude-desktop">Claude Desktop</h2>

Claude Desktop loads MCP servers from a JSON config file. You’ll open that file through **Settings → Developer**, then add a small snippet so Fathom’s remote MCP endpoint is available in the app.

**Steps**

1. **Open Settings.** From the system menu bar, open the **Claude** menu (not the in-app settings) and choose **Settings…** On Windows, use the equivalent menu entry for Claude Desktop settings.
2. **Developer → Edit Config.** In the Settings window, open the **Developer** tab in the left sidebar, then click **Edit Config**. That opens (or creates) your MCP configuration file:
   * **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   * **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
3. **Add Fathom.** Merge the following into your config (or add under `mcpServers` if you already use other servers):

```json theme={null}
{
  "mcpServers": {
    "fathom": {
      "command": "npx",
      "args": [
        "mcp-remote@latest",
        "https://api.fathom.ai/mcp"
      ]
    }
  }
}
```

4. **Save** the file and **restart** Claude Desktop completely so it reloads MCP.

<Note>This setup uses the `mcp-remote` bridge via `npx`, which requires [Node.js](https://nodejs.org/) on your machine.</Note>

<h2 id="claude-code">Claude Code</h2>

Claude Code supports adding MCP servers directly from the command line. No config file editing is needed.

**Steps**

Run the following command in your terminal:

```bash theme={null}
claude mcp add fathom -- npx mcp-remote@latest https://api.fathom.ai/mcp
```

That’s it. The Fathom MCP server will now be available in your Claude Code sessions.
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# ChatGPT

> Connect Fathom to ChatGPT using the official Fathom app

### Steps:

1. Go to the **[Fathom app for ChatGPT](https://chatgpt.com/apps/fathom/asdk_app_69d88b99c5c481918e8da9225737e1e9)**.
2. Click **Connect** and complete the authorization prompts

That's it! Just type **@Fathom** to query your meetings.
> ## Documentation Index
> Fetch the complete documentation index at: https://developers.fathom.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Troubleshooting

> Common issues when connecting to the Fathom MCP server

## Connection

### Connection not working?

Make sure the MCP feature flag is enabled on your Fathom account. If you’re unsure, reach out to your Fathom admin or contact support.

### Claude Desktop / Claude Code not connecting?

Verify that Node.js is installed on your machine, as the `mcp-remote` bridge package requires it. You can check by running `node --version` in your terminal.

***

## Authentication

### Auth prompt?

When first connecting, you’ll be asked to authenticate with your Fathom account. Complete the sign-in flow and the connection will persist for future sessions.
