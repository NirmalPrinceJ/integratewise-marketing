# IntegrateWise OS

> The operating system for integrated work. Connect tools, preserve context, automate intelligently.

[![CI](https://github.com/NirmalPrinceJ/integratewise-os/actions/workflows/ci.yml/badge.svg)](https://github.com/NirmalPrinceJ/integratewise-os/actions/workflows/ci.yml)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com/integratewize/integratewise-os)

## Overview

IntegrateWise OS provides a unified layer for connecting SaaS tools, normalizing data, and automating workflows while maintaining context across systems.

**Domains:**
- Marketing/Landing: [integratewise.co](https://integratewise.co)
- Application: [os.integratewise.online](https://os.integratewise.online)
- Preview: [preview.integratewise.co](https://preview.integratewise.co)

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        IntegrateWise OS                              │
│                                                                      │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌────────┐ │
│  │   Hub   │──▶│  Spine  │◀──│ Loader  │──▶│  Brain  │──▶│ Agents │ │
│  │ Gateway │   │  Data   │   │Transform│   │ Memory  │   │  Auto  │ │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘   └────────┘ │
│       │             │                            │             │     │
│       └─────────────┴────────────────────────────┴─────────────┘     │
│                              ↓                                       │
│                        ┌──────────┐                                  │
│                        │  Render  │                                  │
│                        │  Output  │                                  │
│                        └──────────┘                                  │
└─────────────────────────────────────────────────────────────────────┘
```

### Components

| Component | Purpose | Documentation |
|-----------|---------|---------------|
| **Hub** | Auth, routing, policy enforcement, audit | [Architecture](/docs/architecture/how-it-works.md) |
| **Spine** | Canonical data layer, entity normalization | [Schemas](/docs/spine/schemas.md) |
| **AI Loader** | Source extraction, transformation, validation | [Mappings](/docs/spine/mappings.md) |
| **Brain** | Short/long-term memory, entity linking | [Architecture](/docs/architecture/how-it-works.md) |
| **Agents** | Workflow automation, approval flows | [API](/docs/api/agents.md) |
| **Render** | Output generation, templates, exports | [Templates](/docs/templates/index.md) |

## Project Structure

```
/
├── app/                    # Next.js application pages
├── components/             # React components
├── lib/                    # Shared utilities
│   └── spine/              # Spine types and mappings
├── packages/
│   └── types/              # Shared TypeScript types
│       └── src/spine/      # Canonical Spine schemas
├── docs/                   # Documentation
│   ├── api/                # API reference
│   ├── architecture/       # Architecture docs
│   ├── integrations/       # Integration matrix
│   ├── lenses/             # Lens specifications
│   ├── security/           # Security & governance
│   ├── services/           # Professional services
│   ├── spine/              # Spine schemas & mappings
│   ├── sprints/            # Sprint documentation
│   ├── templates/          # Template specifications
│   └── webhooks/           # Webhook documentation
├── diagrams/               # PlantUML diagrams
├── examples/
│   ├── js/                 # JavaScript/TypeScript examples
│   └── python/             # Python examples
└── .github/
    ├── workflows/          # CI/CD workflows
    ├── ISSUE_TEMPLATE/     # Issue templates
    └── schemas/            # JSON schemas
```

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/NirmalPrinceJ/integratewise-os.git
cd integratewise-os

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Required
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional - for full functionality
# Secrets should be managed via Bitwarden/Doppler/Vercel Project Settings
# Do NOT commit actual secrets
```

## Documentation

| Topic | Link |
|-------|------|
| **Integrations** | [Integration Matrix](/docs/integrations/matrix.md) |
| **Full vs Render Only** | [Compare Modes](/docs/integrations/compare-modes.md) |
| **Architecture** | [How It Works](/docs/architecture/how-it-works.md) |
| **Spine Schemas** | [Canonical Entities](/docs/spine/schemas.md) |
| **Webhooks** | [Webhook Security](/docs/webhooks/index.md) |
| **API Reference** | [API Docs](/docs/api/index.md) |
| **Security** | [Security & Governance](/docs/security/index.md) |
| **Templates** | [Template Specs](/docs/templates/index.md) |
| **Services** | [Professional Services](/docs/services/index.md) |
| **CS Health** | [Lenses & Scoring](/docs/lenses/cs-health.md) |

## Sequence Flow

```
Source (Slack) → Hub (Auth/Route) → Loader (Transform) → Spine (Store)
                                                              ↓
Destination ← Render (Output) ← Agents (Execute) ← Brain (Context)
```

See [detailed sequence diagram](/diagrams/how-it-works.puml).

## Development

### Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript checks
```

### CI Checks

All PRs must pass:
- ESLint
- TypeScript type checking
- Build
- Schema validation
- Link checking
- Security scanning

## Contributing

1. Create a feature branch from `main`
2. Make changes following conventions
3. Open PR with required checklist
4. Wait for CI and code review
5. Merge after approval

### Commit Convention

```
feat(scope): description     # New feature
fix(scope): description      # Bug fix
docs(scope): description     # Documentation
refactor(scope): description # Code refactoring
```

For sprint documentation:
```
docs(sprint): description
docs(planning): description
```

## Security

- Report vulnerabilities to security@integratewise.com
- See [Security Documentation](/docs/security/index.md)
- SOC 2 Type II certified
- ISO 27001 certified

## License

Proprietary. All rights reserved.

---

**Links:**
- [Website](https://integratewise.co)
- [Documentation](https://docs.integratewise.co)
- [Status](https://status.integratewise.co)
- [Support](mailto:support@integratewise.com)
