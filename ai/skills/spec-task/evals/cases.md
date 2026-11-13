# Evaluation cases

Each case is an input prompt plus observable expectations. “Good” describes
minimum useful behavior, not a single required wording. “Bad” describes failure
modes the evaluator should reject.

## CASE-01 — Static presentation change

### Input

> On the account page, change the “Billing address” label to “Invoice address”
> and use the existing location icon. This is a copy and presentation change;
> no data or interaction behavior should change.

### Expected

- Readiness is `Product-ready` unless a repository is supplied.
- Acceptance criteria cover the new label/icon and preservation of existing
  interaction and layout behavior.
- Loading, request failure, and async stale-response states are explicitly
  marked not applicable with a reason.

### Good behavior

Produces a short contract with visual/accessibility checks, such as the icon's
accessible meaning and responsive layout, without adding network states.

### Bad behavior

Invents a billing API, asks who can retry a request, or adds loading/error
criteria solely because it uses a UI template.

## CASE-02 — Asynchronous search

### Input

> Add customer search to the invite dialog. Search after the user enters at
> least three characters and show matching customers.

### Expected

- Status is `Draft` if debounce timing, selection behavior, or permission scope
  cannot be safely assumed.
- The contract covers loading, no results, request failure/retry, disabled or
  submitting behavior, keyboard navigation, accessible status, slow requests,
  cancellation, and stale/out-of-order responses.
- Acceptance criteria distinguish an old response from the current query.

### Good behavior

Asks focused questions about debounce/trigger, selection persistence, and who
may search, while recording safe assumptions separately.

### Bad behavior

Only specifies the happy-path list, silently accepts any response order, or
requires a spinner and error state without describing recovery.

## CASE-03 — Role-based ownership

### Input

> Let organization admins export a project's participant list. Project members
> can view it, but only admins should be able to export it.

### Expected

- Identifies authentication, organization/project ownership, role checks, and
  whether participant data is sensitive.
- Defines view versus export permissions, cross-organization denial, failure
  disclosure, audit expectations, and tests for unauthorized access.
- Flags data minimization or redaction decisions if the export fields are not
  specified.

### Good behavior

Separates authenticated identity, organization membership, project ownership,
and role authorization, and asks which fields are exportable.

### Bad behavior

Uses “admin” as an undefined global role, treats a hidden export button as
authorization, or omits direct API/export authorization tests.

## CASE-04 — Consequential ambiguity

### Input

> Add bulk delete for records in the table.

### Expected

- Status is `Draft`.
- Asks who may delete, whether deletion is reversible, what selection limits
  apply, how confirmation works, and what happens when some records fail.
- Does not claim a ready contract until those decisions are answered.

### Good behavior

Explains that authorization, recovery, partial failure, data integrity, and
confirmation UX depend on the answers.

### Bad behavior

Assumes permanent deletion for all users, invents a 30-day recycle bin, or
labels the task product-ready without surfacing the ambiguity.

## CASE-05 — Bug report and regression preservation

### Input

> Bug: pressing Enter in the address form submits twice. Fix it, but preserve
> browser autofill, the existing validation messages, and the current API
> payload. Add a regression test.

### Expected

- Describes current and desired behavior and the exact non-regressions.
- Includes an acceptance criterion for one submission per user action and a
  regression test covering keyboard submission and autofill.
- Does not broaden the task into a form rewrite.

### Good behavior

Treats this as a targeted bug fix with observable reproduction and preservation
criteria.

### Bad behavior

Recommends replacing the form library, changes payload shape, or says only “the
form should submit correctly.”

## CASE-06 — AI and tool execution

### Input

> Add an assistant that summarizes a support ticket and can create a follow-up
> task in the project tracker when the user asks.

### Expected

- Identifies prompt injection from ticket content, untrusted retrieved text,
  secret handling, tool allowlists, least privilege, user confirmation before
  side effects, auditability, retries/idempotency, and failure disclosure.
- Separates summarization from task creation and defines who may create tasks.
- Status is `Draft` if tool permissions, confirmation, or data retention are
  not specified.

### Good behavior

Requires treating ticket text as data, never as instructions, and proposes a
scoped tool contract with explicit confirmation and safe failure behavior.

### Bad behavior

Gives the model broad tracker credentials, silently creates tasks, copies
secrets into prompts, or treats retrieved ticket instructions as trusted.

## CASE-07 — Already-complete specification

### Input

> Implement a “Copy link” button on the public report page.
>
> - **AC-001:** Given a public report, when the user activates Copy link, the
>   canonical report URL is copied and a “Link copied” status is announced.
> - **AC-002:** If clipboard access is unavailable, show the URL in a selectable
>   fallback with an accessible error message.
> - **AC-003:** The button is keyboard operable, has an accessible name, and
>   preserves the existing report layout at mobile widths.
>
> > No authentication, persistence, or API changes are required.

### Expected

- Status is `Product-ready` without a repository, or `Repository-validated`
  only after inspecting a named repository.
- Preserves `AC-001` through `AC-003` and adds only clearly necessary detail.
- Does not ask questions whose answers are already explicit.

### Good behavior

May note that clipboard support and fallback behavior are already specified,
then provide verification expectations mapped to the existing IDs.

### Bad behavior

Asks whether authentication is required, invents a database record, renumbers
the acceptance criteria, or claims repository validation without inspecting a
repository.
