# Security & Governance

> Security whitepaper summary, authentication, encryption, tenancy model, and audit capabilities.

## Security Principles

1. **Defense in depth** — Multiple security layers at every boundary
2. **Least privilege** — Minimum access required for each operation
3. **Zero trust** — Verify explicitly, never trust implicitly
4. **Secure by default** — Restrictive defaults, explicit opt-in for permissive modes

---

## Authentication

### Supported Methods

| Method | Use Case | Token Lifetime |
|--------|----------|----------------|
| **OAuth2 + PKCE** | User authentication, SSO | 1 hour (access), 30 days (refresh) |
| **API Keys** | Service-to-service, automation | Configurable (90 days default) |
| **JWT** | Stateless API access | 1 hour |
| **mTLS** | High-security integrations | Certificate validity |

### OAuth2 Flow

```
1. Authorization Request → IdP
2. User Authentication → IdP
3. Authorization Grant → Client
4. Token Exchange → IntegrateWise
5. Access Token + Refresh Token → Client
```

**Supported Identity Providers:**
- Google Workspace
- Microsoft Entra ID (Azure AD)
- Okta
- Auth0
- Custom SAML 2.0

### API Key Management

```typescript
interface APIKey {
  id: string;
  name: string;
  prefix: string;           // First 8 chars for identification
  scopes: string[];         // Allowed operations
  workspace_id: string;
  created_by: string;
  created_at: string;
  expires_at: string;
  last_used_at?: string;
  ip_allowlist?: string[];  // Optional IP restrictions
}
```

**Best Practices:**
- Rotate keys every 90 days
- Use minimum required scopes
- Enable IP allowlisting for production
- Store in secrets manager (Bitwarden recommended)

### JWT Structure

```json
{
  "header": {
    "alg": "RS256",
    "typ": "JWT",
    "kid": "key-2025-01"
  },
  "payload": {
    "iss": "https://auth.integratewise.com",
    "sub": "user_abc123",
    "aud": "https://api.integratewise.com",
    "exp": 1705315800,
    "iat": 1705312200,
    "workspace_id": "ws_123",
    "roles": ["operator"],
    "scopes": ["spine:read", "agents:execute"]
  }
}
```

---

## Authorization (RBAC/ABAC)

### Role-Based Access Control (RBAC)

| Role | Description | Typical Users |
|------|-------------|---------------|
| **Admin** | Full workspace control | Workspace owners, IT admins |
| **Operator** | Manage integrations, agents, templates | Power users, team leads |
| **Contributor** | Create and edit content, run agents | Team members |
| **Viewer** | Read-only access | Stakeholders, auditors |

### Permission Matrix

| Resource | Admin | Operator | Contributor | Viewer |
|----------|-------|----------|-------------|--------|
| **Integrations** | CRUD + Connect | Read + Configure | Read | Read |
| **Agents** | CRUD + Execute | CRUD + Execute | Execute | Read |
| **Templates** | CRUD + Install | Install + Configure | Use | Read |
| **Spine Entities** | CRUD | CRUD | CRUD | Read |
| **Render Outputs** | CRUD | CRUD | Create + Read | Read |
| **Settings** | Full | Limited | None | None |
| **Audit Logs** | Read + Export | Read | None | None |
| **API Keys** | CRUD | Read own | Read own | None |
| **Users** | CRUD | Read | None | None |

### Attribute-Based Access Control (ABAC)

Fine-grained policies based on attributes:

```yaml
# Example ABAC policy
policies:
  - name: "CS team can only access their accounts"
    effect: allow
    principals:
      role: contributor
      department: customer_success
    resources:
      type: health_metric
    conditions:
      - attribute: resource.account_owner_id
        operator: equals
        value: principal.user_id
        
  - name: "PII access requires elevated role"
    effect: deny
    principals:
      role: [contributor, viewer]
    resources:
      tags: [contains_pii]
    actions: [read, export]
```

### Scope Definitions

```typescript
type Scope = 
  // Spine
  | 'spine:read'
  | 'spine:write'
  | 'spine:delete'
  
  // Agents
  | 'agents:read'
  | 'agents:execute'
  | 'agents:manage'
  
  // Integrations
  | 'integrations:read'
  | 'integrations:configure'
  | 'integrations:connect'
  
  // Render
  | 'render:read'
  | 'render:create'
  | 'render:export'
  
  // Templates
  | 'templates:read'
  | 'templates:install'
  | 'templates:manage'
  
  // Admin
  | 'admin:users'
  | 'admin:settings'
  | 'admin:audit'
  | 'admin:billing';
```

See [RBAC/ABAC Reference](/docs/security/rbac-abac.md) for complete matrix.

---

## Tenancy Model

### Workspace Isolation

Each workspace is a complete isolation boundary:

```
┌─────────────────────────────────────────────────┐
│                  Organization                    │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────┐ │
│  │ Workspace A │  │ Workspace B │  │ Workspace│ │
│  │             │  │             │  │    C     │ │
│  │ ┌─────────┐ │  │ ┌─────────┐ │  │          │ │
│  │ │  Data   │ │  │ │  Data   │ │  │          │ │
│  │ │ (Spine) │ │  │ │ (Spine) │ │  │          │ │
│  │ └─────────┘ │  │ └─────────┘ │  │          │ │
│  │ ┌─────────┐ │  │ ┌─────────┐ │  │          │ │
│  │ │ Secrets │ │  │ │ Secrets │ │  │          │ │
│  │ └─────────┘ │  │ └─────────┘ │  │          │ │
│  └─────────────┘  └─────────────┘  └──────────┘ │
└─────────────────────────────────────────────────┘
```

**Isolation Guarantees:**
- Separate database schemas per workspace
- Separate encryption keys per workspace
- No cross-workspace data access
- Separate API rate limits
- Independent audit logs

### Data Residency

| Region | Location | Compliance |
|--------|----------|------------|
| US | us-east-1, us-west-2 | SOC 2, HIPAA eligible |
| EU | eu-west-1, eu-central-1 | GDPR, SOC 2 |
| APAC | ap-southeast-1 | SOC 2 |

**Configuration:**
```yaml
workspace:
  data_residency:
    primary_region: eu-west-1
    backup_region: eu-central-1
    processing_region: eu-west-1  # Where compute runs
    strict_residency: true         # Block cross-region processing
```

---

## Encryption

### In Transit

- **Protocol**: TLS 1.2+ (TLS 1.3 preferred)
- **Cipher suites**: ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-GCM-SHA256
- **Certificate**: 2048-bit RSA, SHA-256
- **HSTS**: Enabled with 1-year max-age

### At Rest

- **Algorithm**: AES-256-GCM
- **Key management**: AWS KMS / GCP Cloud KMS
- **Key rotation**: Automatic, every 365 days
- **Per-workspace keys**: Yes (Enterprise)

### Secrets Management

**Recommended Pattern (Bitwarden):**

```typescript
// Store secrets in Bitwarden, reference by ID
interface SecretReference {
  provider: 'bitwarden' | 'aws_secrets_manager' | 'hashicorp_vault';
  secret_id: string;
  version?: string;
}

// Example connector configuration
const hubspotConfig = {
  auth: {
    type: 'oauth2',
    client_id: 'hbsp_client_123',
    client_secret: {
      provider: 'bitwarden',
      secret_id: 'iw-hubspot-client-secret',
    },
  },
};
```

**Secret Lifecycle:**
1. Secrets never logged or exposed in UI
2. Encrypted at rest with workspace key
3. Decrypted only at point of use
4. Audit logged on access
5. Rotatable without downtime

---

## Audit Logging

### Event Categories

| Category | Events |
|----------|--------|
| **Authentication** | login, logout, token_refresh, mfa_challenge |
| **Authorization** | permission_granted, permission_denied, role_changed |
| **Data Access** | entity_read, entity_write, entity_delete, export |
| **Integration** | connected, disconnected, sync_started, sync_completed |
| **Agent** | invoked, approved, rejected, completed, failed |
| **Admin** | user_created, settings_changed, api_key_created |

### Audit Log Schema

```typescript
interface AuditLog {
  /** Workspace ID */
  workspace_id: string;
  
  /** Actor who performed the action */
  actor_id: string;
  
  /** Actor type */
  actor_type: 'user' | 'system' | 'agent' | 'api_key';
  
  /** Action performed */
  action_type: string;
  
  /** Resource type affected */
  resource_type: string;
  
  /** Resource ID affected */
  resource_id: string;
  
  /** Timestamp (ISO 8601) */
  timestamp: string;
  
  /** Request ID for correlation */
  request_id: string;
  
  /** Policy that authorized/denied */
  policy_id?: string;
  
  /** Outcome */
  outcome: 'success' | 'failure' | 'denied';
  
  /** Additional context */
  context?: {
    ip_address?: string;
    user_agent?: string;
    geo_location?: string;
    session_id?: string;
  };
  
  /** Changes made (for writes) */
  changes?: {
    before?: Record<string, unknown>;
    after?: Record<string, unknown>;
  };
}
```

### Retention & Export

| Tier | Retention | Export Formats |
|------|-----------|----------------|
| Free | 30 days | JSON |
| Pro | 90 days | JSON, CSV |
| Business | 1 year | JSON, CSV, SIEM |
| Enterprise | Custom (up to 7 years) | JSON, CSV, SIEM, S3 |

**Export API:**
```http
GET /v1/audit/export?start=2025-01-01&end=2025-01-31&format=csv
```

**SIEM Integration:**
- Splunk
- Datadog
- Sumo Logic
- Elastic

---

## Security Headers

All responses include:

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.integratewise.com
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## Compliance

### Regulatory Mapping

See [Regulatory Mapping Appendix](/docs/security/compliance-mapping.md) for:
- SOC 2 Type II control families
- ISO 27001 Annex A references
- GDPR data subject rights handling
- HIPAA safeguards (Business tier+)

### Certifications

| Certification | Status | Report |
|---------------|--------|--------|
| SOC 2 Type II | ✅ Certified | Available under NDA |
| ISO 27001 | ✅ Certified | Certificate available |
| GDPR | ✅ Compliant | DPA available |
| HIPAA | ✅ Eligible (Business+) | BAA available |

---

## Cross-References

- [RBAC/ABAC Matrix](/docs/security/rbac-abac.md)
- [Compliance Mapping](/docs/security/compliance-mapping.md)
- [Webhooks Security](/docs/webhooks/index.md)
- [API Authentication](/docs/api/index.md#authentication)
