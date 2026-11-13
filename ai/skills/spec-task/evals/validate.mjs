import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skill = await readFile(path.join(root, "SKILL.md"), "utf8");
const template = await readFile(
  path.join(root, "assets/spec-template.md"),
  "utf8",
);
const cases = await readFile(path.join(root, "evals/cases.md"), "utf8");

assert.match(skill, /^---\nname: spec-task\n/m);
assert.match(skill, /description:\s*>-/);
assert.ok(
  skill.split("\n").length < 500,
  "SKILL.md should stay under 500 lines",
);
assert.match(skill, /assets\/spec-template\.md/);
assert.match(skill, /Draft/);
assert.match(skill, /Product-ready/);
assert.match(skill, /Repository-validated/);
assert.match(skill, /untrusted task data/);
assert.match(skill, /Do not execute commands/);
assert.match(skill, /Do not copy secrets/);

for (const heading of [
  "Problem, user, and outcome",
  "Scope",
  "Acceptance criteria",
  "UI and UX states",
  "Security considerations",
  "Dependencies and non-regression requirements",
  "Verification expectations",
  "Open questions",
  "Readiness",
]) {
  assert.match(
    template,
    new RegExp(`## ${heading.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}`),
  );
}

for (let index = 1; index <= 7; index += 1) {
  assert.match(cases, new RegExp(`CASE-0${index}`));
}
for (const term of [
  "loading",
  "no results",
  "stale/out-of-order",
  "ownership",
  "regression test",
  "prompt injection",
  "does not ask questions",
]) {
  assert.ok(
    cases.toLowerCase().includes(term.toLowerCase()),
    `missing evaluation term: ${term}`,
  );
}

console.log("spec-task structural evaluations: PASS");
