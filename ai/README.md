# Reusable AI workflow skills

This directory contains portable, Markdown-first skills for the engineering
workflow. It is documentation and skill content, not an agent runtime,
scheduler, ticket integration, or application framework.

## Current skill

- [`skills/spec-task/SKILL.md`](skills/spec-task/SKILL.md) turns rough ideas,
  requirements, bugs, refactors, and roadmap items into testable product
  specifications.

The optional [`responsive-ui.md`](responsive-ui.md) guide contains
framework-agnostic implementation and verification guidance. `spec-task` may
use relevant local guidance when inspecting a target repository, but does not
force responsive-UI requirements onto tasks where they do not apply. Target
repositories remain responsible for their own product and design-system
conventions.

## Workflow handoff

```text
spec-task → implement-task → review-change + security-review → verification
                                                        ↓
                                      documentation reconciliation
```

`spec-task` owns product clarity and traceability, not implementation or
approval. Its portable contract is the handoff boundary:

- `implement-task` consumes the title, scope, non-goals, acceptance IDs,
  dependencies, assumptions, non-regression requirements, repository context,
  and verification expectations.
- `review-change` traces the diff and tests back to the stable acceptance IDs;
  it independently judges implementation quality and does not rewrite product
  intent.
- `security-review` evaluates the trust boundaries, permissions, untrusted
  inputs, sensitive data, AI/tool risks, and security scenarios recorded in the
  contract. It independently decides whether the change is safe.
- Verification records what actually ran. A specification never claims that
  code, security, or end-to-end checks passed.

No ticket server, database, CLI, runtime framework, or shared state is required.
