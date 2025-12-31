# Sprint Documentation

> Governed sprint planning and tracking documentation.

## Structure

```
docs/sprints/
├── README.md              # This file
├── CHANGELOG.md           # Auto-generated change log
├── current-sprint.json    # Current sprint pointer (publish-only updates)
├── _template.md           # Template for new sprints
└── sprint-YYYY-MM[-suffix].md  # Individual sprint documents
```

## Governance Model

### Branching

| Branch | Purpose | Protection |
|--------|---------|------------|
| `main` | Production/published | PR required, checks required, signed commits |
| `docs/sprints-staging` | Staging for review | PR required, checks required |
| Feature branches | Agent/human edits | None |

### Workflow

1. **Create feature branch** from `docs/sprints-staging`
2. **Edit sprint doc** following schema and conventions
3. **Open PR** to `docs/sprints-staging` with required template fields
4. **CI validates** schema, edit locks, conventional commits, concurrent edits
5. **Code Owner reviews** and approves
6. **Merge to staging** for preview
7. **Curated PR** promotes staging to `main` for publication

### Edit Locks

Sprint documents support edit locking to prevent conflicts:

```yaml
edit_lock: true
locked_by: "@username"
locked_until: "2025-01-15T18:00:00Z"
```

- CI blocks merges when `edit_lock: true` unless `locked_by` matches PR author
- Locks auto-expire after `locked_until` timestamp
- Remove lock when editing is complete

### Required PR Fields

All PRs modifying sprint docs must include:

- `sprint_id` - Which sprint is being modified
- `request_id` - Traceability identifier
- `actor_id` - Who/what is making the change
- `scope_lock_change` - Whether scope is being locked/unlocked
- `objectives_changed` - List of modified objectives
- `acceptance_criteria_changed` - List of modified criteria

### Conventional Commits

All commits must follow:

```
docs(sprint): <description>
docs(planning): <description>
```

Examples:
- `docs(sprint): add OBJ-003 for webhook hardening`
- `docs(sprint): mark AC-002 as passed`
- `docs(planning): update Q1 roadmap dependencies`

## Schema

Sprint documents require YAML front matter with:

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `sprint_id` | ✅ | string | Pattern: `sprint-YYYY-MM[-suffix]` |
| `title` | ✅ | string | 5-100 characters |
| `date_range_start` | ✅ | date | Sprint start (YYYY-MM-DD) |
| `date_range_end` | ✅ | date | Sprint end (YYYY-MM-DD) |
| `status` | ✅ | enum | planning, active, review, completed, cancelled |
| `owner` | ✅ | string | Sprint owner username |
| `objectives` | ✅ | array | At least one objective |
| `acceptance_criteria` | ✅ | array | At least one criterion |
| `scope_lock` | ❌ | boolean | Whether scope is frozen |
| `edit_lock` | ❌ | boolean | File lock status |
| `locked_by` | ❌ | string | Lock holder |
| `locked_until` | ❌ | datetime | Lock expiration |
| `changes` | ❌ | array | Change log entries |
| `links` | ❌ | array | Related links |

See [schema definition](/.github/schemas/sprint-doc.schema.json) for full specification.

## Publication

- Site publishes sprint pages **only from `main`**
- `docs/sprints-staging` is **preview-only**
- Publication occurs during **nightly window** or **manual trigger** after Code Owner approval
- `current-sprint.json` updates only on publish (not on every commit)

## Tagging

On sprint completion or scope freeze, create an immutable tag:

```bash
git tag sprint-2025-01-v1
git push origin sprint-2025-01-v1
```

Tag naming: `sprint-{id}-v{version}`

## Access Boundaries

| Path | Write Access | Coupled to Production |
|------|--------------|----------------------|
| `docs/sprints/**` | Agents + Humans (with review) | ❌ No |
| `docs/planning/**` | Agents + Humans (with review) | ❌ No |
| `app/**` | Platform team | ✅ Yes |
| `docs/api/**` | Platform team | ✅ Yes |

Sprint documentation changes do **not** trigger production deploys.

## Creating a New Sprint

1. Copy `_template.md` to `sprint-YYYY-MM.md`
2. Fill in front matter fields
3. Update objectives and acceptance criteria
4. Open PR with sprint template
5. Get Code Owner approval
6. Merge to staging, then to main

## Questions?

Contact @integratewise/maintainers or @integratewise/product-leads.
