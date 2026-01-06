# IntegrateWise OS

The Productivity OS for Effortless Work. Connect your tools, preserve context, and automate workflows with AI agents.

## Overview

IntegrateWise OS sits on top of your existing tools—Notion, Coda, Slack, email, calendars, CRMs, billing tools, and AI apps—providing:

- **Spine**: Normalized data layer that preserves meaning across tools
- **Hub**: Secure routing, authentication, and policy enforcement
- **AI Loader**: One-click import that preserves context and logic
- **Brain**: Searchable memory for ideas and conversations
- **Agents**: Automated workflows with approvals and guardrails
- **Render**: Universal output (docs, emails, dashboards, reports)
- **Lenses**: Opinionated views (Personal, Work, Business Ops, CS Intelligence)

## Architecture

### Component Boundaries

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│  Hub    │────▶│  Spine  │────▶│  Brain  │
│(Auth/   │     │(Canonical│     │(Memory) │
│ Policy) │     │ Entities)│    │         │
└─────────┘     └─────────┘     └─────────┘
     │                │                │
     ▼                ▼                ▼
┌─────────┐     ┌─────────┐     ┌─────────┐
│ AI      │     │ Agents  │     │ Render  │
│ Loader  │     │(Workflow)│    │(Output) │
└─────────┘     └─────────┘     └─────────┘
```

### Sequence Flow

See [How It Works](./docs/architecture/how-it-works.md) for detailed sequence diagrams.

**Canonical Flow:**
```
Webhook → Hub (Auth/Policy) → AI Loader → Spine → Brain → Agents → Approval → Render → Audit
```

## Quick Start

### Prerequisites

- Node.js 18+ or Python 3.9+
- API key or OAuth2 credentials
- Workspace ID

### Installation

```bash
# Clone repository
git clone https://github.com/NirmalPrinceJ/integratewise-os.git
cd integratewise-os

# Install dependencies
npm install
# or
pip install -r requirements.txt
```

### Configuration

```bash
# Set environment variables
export INTEGRATEWISE_API_KEY=your-api-key
export INTEGRATEWISE_WORKSPACE_ID=your-workspace-id
export INTEGRATEWISE_BASE_URL=https://api.integratewise.co/v1
```

### Example Usage

**JavaScript/TypeScript:**
```javascript
import { IntegrateWiseClient } from '@integratewise/sdk';

const client = new IntegrateWiseClient({
  apiKey: process.env.INTEGRATEWISE_API_KEY
});

// List tasks
const tasks = await client.tasks.list({
  filter: { status: { eq: 'in_progress' } }
});
```

**Python:**
```python
from integratewise import IntegrateWiseClient

client = IntegrateWiseClient(api_key=os.environ.get('INTEGRATEWISE_API_KEY'))

# List tasks
tasks = client.tasks.list(filters={'status': {'eq': 'in_progress'}})
```

## Documentation

### Core Documentation

- [Spine Schemas](./docs/spine/schemas.md) - Canonical entity definitions
- [Architecture](./docs/architecture/how-it-works.md) - Component I/O and sequence flows
- [API Reference](./docs/api/index.md) - Complete API documentation
- [Webhooks](./docs/webhooks/index.md) - Webhook security and operations

### Integration Documentation

- [Integrations Matrix](./docs/integrations/matrix.md) - Connector capabilities
- [Compare Modes](./docs/integrations/compare-modes.md) - Full Integration vs Render Only
- [Spine Mapping Guides](./docs/spine/mapping-guides.md) - Connector-to-Spine mappings

### Security & Governance

- [Security Overview](./docs/security/index.md) - Authentication, authorization, encryption
- [RBAC & ABAC](./docs/security/rbac-abac.md) - Access control matrix

### Templates & Services

- [Templates](./docs/templates/index.md) - Installation-ready templates
- [Services](./docs/services/index.md) - Professional services packages

### Advanced Features

- [Lenses & CS Intelligence](./docs/lenses/index.md) - Opinionated views and health scoring
- [Evidence & Proof](./docs/evidence/index.md) - Case studies, gallery, demo

## Examples

### Example Integrations

See [examples](./examples/) directory for:
- Webhook verification (Node.js, Python)
- API client usage (JavaScript, Python)
- Template implementations

### Spine Schemas

See [packages/types/src/spine](./packages/types/src/spine/) for TypeScript schemas:
- Task
- Note
- Conversation
- Plan
- HealthMetric

### Transformation Examples

See [docs/spine/mapping-guides.md](./docs/spine/mapping-guides.md) for:
- Notion → Spine mappings
- Slack → Spine mappings
- HubSpot → Spine mappings
- Gmail → Spine mappings

## Development

### Project Structure

```
integratewise-os/
├── docs/                 # Documentation
│   ├── architecture/     # Architecture docs
│   ├── integrations/     # Integration docs
│   ├── security/         # Security docs
│   └── ...
├── packages/             # Shared packages
│   └── types/            # TypeScript types
├── examples/             # Code examples
│   ├── js/              # JavaScript examples
│   └── python/          # Python examples
├── diagrams/             # Architecture diagrams
└── .github/              # CI/CD workflows
```

### Local Development

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Run type checking
npm run typecheck

# Run tests
npm test
```

### CI/CD

See [.github/workflows](./.github/workflows/) for:
- Lint and type checks
- Security scanning
- Test execution
- Deployment workflows

## Contributing

### Issue Templates

See [.github/ISSUE_TEMPLATE](./.github/ISSUE_TEMPLATE/) for:
- Integration request template
- Bug report template
- Feature request template

### Integration Requests

When requesting a new integration, please provide:
- Tool name and API documentation
- Entities to sync (Tasks, Notes, Conversations, etc.)
- Mode (Full Integration or Render Only)
- Authentication method (OAuth2, API Key, etc.)
- Workflow use cases

## Security

### Security Headers

All endpoints include:
- `Content-Security-Policy`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`

### Reporting Security Issues

Please report security issues to: security@integratewise.co

## License

Proprietary - All rights reserved

## Links

- **Website**: https://integratewise.co
- **Documentation**: https://docs.integratewise.co
- **API**: https://api.integratewise.co/v1
- **Demo**: https://demo.integratewise.co

## See Also

- [Architecture Diagrams](./diagrams/) - PlantUML sequence diagrams
- [Spine Schemas](./packages/types/src/spine/) - TypeScript entity schemas
- [Examples](./examples/) - Code examples
