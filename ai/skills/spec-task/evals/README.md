# spec-task evaluations

These are deterministic, human-reviewable evaluation cases for the reusable
skill. They do not call an LLM, ticket system, repository service, or external
API.

## Run the structural validation

From the repository root:

```sh
npm run test:spec-task
```

The validator checks the skill metadata, template anchors, and presence of all
required evaluation cases. It does not judge the semantic quality of a model's
answer.

## Manual evaluation

1. Invoke `spec-task` with one case from [cases.md](cases.md).
2. Check that the output is a portable Markdown contract using
   `assets/spec-template.md`.
3. Compare the response with the good/bad signals for that case.
4. For cases with material ambiguity, verify that the status is `Draft` and the
   questions explain why the decisions matter.
5. For a complete spec, verify that the agent does not ask redundant questions.

The evaluation cases are intentionally small. Add a case only when it exposes a
repeatable quality or safety failure; do not turn this directory into a second
workflow engine.
