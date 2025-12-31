## Sprint Documentation Change

### Metadata (Required)

| Field | Value |
|-------|-------|
| **sprint_id** | <!-- e.g., sprint-2025-01 --> |
| **request_id** | <!-- Auto-populated by agent or manual --> |
| **actor_id** | <!-- Username or agent ID --> |

### Change Summary

#### Scope Lock Change
- [ ] Yes - Scope lock status is being modified
- [x] No - Scope lock unchanged

#### Objectives Changed
<!-- List any objectives added, modified, or removed -->
- 

#### Acceptance Criteria Changed
<!-- List any acceptance criteria added, modified, or removed -->
- 

#### Links Touched
<!-- List any links added or modified -->
- 

### Validation Checklist (Required)

- [ ] **schema_valid** - YAML front matter validates against sprint-doc.schema.json
- [ ] **conventional_commit_used** - All commits use `docs(sprint):` or `docs(planning):` prefix
- [ ] **edit_lock_respected** - No locked files modified by unauthorized authors
- [ ] **reviewer_assigned** - Code Owner or Maintainer assigned for review
- [ ] **no_concurrent_conflicts** - No other open PRs modifying the same files

### Additional Context

<!-- Any additional information for reviewers -->

### Change Log Entry

This change will be auto-appended to the sprint document's Change Log section:

```yaml
- timestamp: <!-- Auto-populated -->
  author: <!-- PR author -->
  summary: <!-- PR title -->
  request_id: <!-- From metadata above -->
```

---

**For Reviewers:**
- [ ] Schema validation CI passed
- [ ] Edit lock check CI passed
- [ ] Conventional commits check CI passed
- [ ] Content review completed
- [ ] Ready to merge to staging/main
