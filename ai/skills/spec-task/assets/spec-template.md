# [Task title]

Status: `Draft` | `Product-ready` | `Repository-validated`

## Problem, user, and outcome

- Problem:
- Primary user:
- Desired outcome:
- Current behavior:
- Desired behavior:

## Scope

### In scope

-

### Out of scope / non-goals

-

## Required behavior

Describe the normal flow, important alternate flows, persistence, ownership,
state transitions, and repeated-action behavior. For a bug or refactor, state
the existing behavior that must be preserved.

## Acceptance criteria

- **AC-001:** Given [condition], when [action], then [observable result].
- **AC-002:** Given [condition], when [action], then [observable result].

Keep IDs stable across revisions. Add criteria rather than renumbering existing
ones when the contract evolves.

## UI and UX states

### Applicable states

- Loading: [behavior or `Not applicable`]
- Empty/no results: [behavior or `Not applicable`]
- Error/recoverable failure: [behavior, retry, or `Not applicable`]
- Success/confirmation: [behavior or `Not applicable`]
- Disabled/submitting: [behavior or `Not applicable`]
- Validation: [rules and messages or `Not applicable`]
- Slow, stale, cancelled, or out-of-order data: [behavior or `Not applicable`]
- Navigation, refresh, and persistence: [behavior or `Not applicable`]

### Accessibility and responsive behavior

- Semantic structure and accessible names:
- Keyboard operation:
- Focus visibility, movement, and restoration:
- Status/error announcements:
- Responsive layout and large-data behavior:

## Security considerations

- Authentication/session assumptions:
- Authorization and ownership boundaries:
- Sensitive or personal information:
- Untrusted input/output handling:
- Read/write/delete/import/export permissions:
- Failure and information-disclosure behavior:
- Relevant threat scenarios and security tests:
- AI/LLM, tool, secret, prompt-injection, or side-effect risks:
- Elevated privileges, production access, destructive actions, or migrations:

Write `Not applicable` with a reason when a category does not apply. This is a
specification assessment, not a completed security review.

## Dependencies and non-regression requirements

### Dependencies

- Existing modules, APIs, data, packages, or external systems:
- Ordering or compatibility constraints:

### Must preserve

-

## Verification expectations

Map checks to acceptance criteria. State what the later implementation and
verification steps should run or inspect; do not claim that they already ran.

- AC-001:
- AC-002:
- Regression coverage:
- Integration/E2E or manual checks, when applicable:

## Validation Strategy

Use the least costly sufficient validation for each applicable acceptance
criterion and material risk. Use `Not applicable` with a reason; do not require
every method for every task.

| Criterion/risk | Test level (unit/component/integration/E2E/manual) | Real browser? | Responsive/viewports | Accessibility checks | UI states | Visual evidence | Other checks | Required evidence |
| -------------- | -------------------------------------------------- | ------------- | -------------------- | -------------------- | --------- | --------------- | ------------ | ----------------- |
| AC-001         |                                                    |               |                      |                      |           |                 |              |                   |

### Browser, responsive, and accessibility detail

- Supported devices/viewports supplied by the user:
- Representative viewports to examine, when applicable (for example,
  375px/768px/1280px):
- Real-browser flows and browser compatibility:
- Automated accessibility scan:
- Keyboard and focus checks:
- Zoom/reflow and manual screen-reader checks:

### UI states and visual evidence

- Loading:
- Empty:
- Error and validation:
- Success:
- Disabled/submitting:
- Screenshots, visual baseline comparison, or human/agent visual inspection:

### Other risk checks and completion evidence

- Performance:
- Security:
- Persistence and refresh:
- Concurrency and repeated actions:
- Required evidence before completion:

This section defines what later implementation and verification phases must run
or collect. Nothing here claims that checks have already executed.

## Repository context

Target repository: [name/path or `None supplied`]

Inspected sources:

-

Implementation constraints and unknowns:

-

## Assumptions

Confirmed requirements:

-

Safe assumptions:

-

## Open questions

List only unresolved decisions that materially affect scope, behavior, risk,
compatibility, UX, or verification.

1. [Question] — Why it matters: [impact]

## Handoff notes

- Intended implementation boundary:
- Traceability anchors: acceptance IDs `AC-...`
- Follow-up for `implement-task`:
- Follow-up for `review-change` / `security-review`:

## Readiness

`Draft` / `Product-ready` / `Repository-validated`

Reason:
