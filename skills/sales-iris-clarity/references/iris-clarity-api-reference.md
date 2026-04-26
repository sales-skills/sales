<!-- Source: https://sdk.iris.audio/assets/iris-web-sdk/docs/1.4.1/index.html -->
<!-- Source: https://sdk.iris.audio/assets/iris-sdk/docs/iris-sdk-docs-3.0.1-2b9881c/html/index.html -->
<!-- Note: Developer portal (developer.iris.audio) is login-gated. Full API reference requires authenticated access. -->

# IRIS SDK API Reference

IRIS is an audio technology company which provides a wide range of software solutions designed to augment information consumed through audio.

## SDK Variants

### Web SDK (v1.4.1)
- **Package**: `@irisaudiotechnologies/iris-web-sdk`
- **Install**: npm with `IRIS_SDK_TOKEN` env var for authentication
- **Runtime**: WebRTC Audio Worklet Processor (browser-based)
- **Setup wizard**: `npx @irisaudiotechnologies/iris-web-sdk setup-wizard`

### Server SDK (v3.0.1)
- **Languages**: C++, Python, TypeScript/Node.js
- **Platforms**: Windows, macOS, Linux
- **Use cases**: Streaming, batch processing, IVR, transcription enhancement

## Web SDK — Installation

The SDK installs via npm using a token-authenticated URL from `sdk.iris.audio`. Set `IRIS_SDK_TOKEN` environment variable before installation.

### Manual setup
1. Relocate `iris-awp` directory to public folder
2. Download core SDK files via curl with authentication
3. Extract and organize WASM binaries in proper directory structure

### Automated setup
```bash
npx @irisaudiotechnologies/iris-web-sdk setup-wizard
```

## Web SDK — Configuration

### Required parameters
| Parameter | Type | Description |
|---|---|---|
| `audioWorkletPath` | string | Path to audio worklet processor files |
| `wasmPath` | string | Path to WASM binary files |
| `key` | string | Authentication key |
| `license` | string | License identifier |
| `company` | string | Company ID |
| `team` | string | Team identifier |
| `user` | string | User identifier |
| `model` | string | AI model type for processing |

### Optional parameters
| Parameter | Type | Description |
|---|---|---|
| `audioAnalytics` | boolean | Enable audio analytics data collection |
| `eventDetection` | boolean | Enable event detection |
| `sampleRate` | number | Audio sample rate |
| `instanceCount` | number | Number of processing instances |
| logging levels | various | Configure log verbosity |
| startup processing states | various | Initial processing state on start |

## Web SDK — Implementation Flow

### Step 1: Instantiation
Create SDK instance with required configuration (company ID, auth key/license, model type, team/user identifiers, file paths).

### Step 2: Audio Context
Initialize with AudioContext — **must be triggered by user click event** (usually at login), per Web Audio API requirements.

### Step 3: Stream Processing
Connect microphone and speaker streams through the SDK's processing chain.

### Step 4: Activation
Monitor readiness via callbacks or custom events before beginning processing.

### Step 5: Runtime Control
Start/stop calls and toggle processing on/off for individual streams.

### Step 6: Mix Adjustment
Set wet/dry ratios (0-1 scale) for processed vs. unprocessed audio.

## Web SDK — Key Methods

| Method | Description |
|---|---|
| `disconnect()` | Disconnect audio streams from processing |
| `release()` | Release SDK resources |
| `cleanup()` | Full memory cleanup |

## Server SDK — Structure

Documentation structure (v3.0.1):
- Quick start: License setup and general usage
- Usage guidance: SDK import, initialization, audio context management, parameter adjustment, audio processing, cleanup
- API Reference: C++, Python, TypeScript
- Example code: C++, Python, TypeScript
- Licensing information

**Note**: Full server SDK API reference (classes, methods, parameters) requires authenticated access to the documentation site. The index page confirms C++, Python, and TypeScript APIs are documented with example code for each.

## Cloud Deployment

- **Terraform**: Infrastructure-as-code deployment
- **Helm**: Kubernetes deployment
- **Docker**: Container-based deployment
- On-premises or cloud environments supported

## Authentication

- SDK token: `IRIS_SDK_TOKEN` environment variable for npm package access
- Runtime auth: `key` + `license` parameters in SDK configuration
- Developer portal: Login-gated at developer.iris.audio

## Support

- Developer portal: https://developer.iris.audio/
- Web SDK docs: https://sdk.iris.audio/assets/iris-web-sdk/docs/1.4.1/index.html
- Server SDK docs: https://sdk.iris.audio/assets/iris-sdk/docs/iris-sdk-docs-3.0.1-2b9881c/html/index.html
- Email: Support@shapedbyiris.com
- SDK contact: iris.audio/contactsdk
