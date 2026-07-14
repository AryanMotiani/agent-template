---
description: Full project pipeline — wayfind, grill, spec, ticket, implement, review.
---

# /kickoff — Orchestrated Project Pipeline

This workflow chains engineering skills into an idea → production pipeline. Perform phases sequentially. Do not proceed without user confirmation.

> **Trigger:** `/kickoff`
> **Supports:** New projects and existing codebase onboarding.

---

## 👋 Welcome & Plan Overview (Always Show First)

When the user runs `/kickoff`, print this overview first:

> "Welcome to SkilledAgent! `/kickoff` runs a structured 9-phase orchestration pipeline to go from idea to test-driven production code."

**Phase Plan:**
| Phase | Goal | Skill |
|---|---|---|
| 1. Wayfinder | Map project decisions/unknowns | `/wayfinder` |
| 2. Code Review | Audit existing code (if any) | `/code-review` |
| 3. Grilling | Deep Q&A to align details | `/grilling` + `/grill-with-docs` |
| 4. Spec Synthesis | Write formal specification document | `/to-spec` |
| 5. Ticket Breakdown | Break spec into vertical-slice task tickets | `/to-tickets` |
| 6. Implementation | Develop using TDD & code review checks | `/implement` + `/tdd` |
| 7. Code Review | Final post-implementation audit | `/code-review` |
| 8. Suggestions | Final review and recommendations | Synthesis |
| 9. Skill Discovery | Reference guide to other 39 tools | Tour |

> "Before starting each phase, I will **announce the skill** and **why** I select it. I will always ask for your confirmation before moving to the next phase."

---

## 🧭 Mid-Workflow Skill Routing (Always Active)

If context matches triggers below, suggest the skill and explain what it does, why it helps, and ask to use:

| Trigger / Situation | Suggest Skill | Purpose / Description |
|---|---|---|
| "broken", "throws error", "slow", "debug" | `/diagnosing-bugs` | 6-phase scientific debugging loop |
| "report bugs", "do QA", "found issues" | `/qa` | Interactive bug report & Github issue creator |
| "architecture messy", "code structure" | `/improve-codebase-architecture` | Scans for module debt, generates HTML report |
| "refactor", "plan a refactor" | `/request-refactor-plan` | Creates detailed, safe refactoring commits |
| "research", "look up docs", "check APIs" | `/research` | Background agent research of primary sources |
| "prototype", "test if this works/looks" | `/prototype` | Quick layout/logic mockups |
| "automate task", "recurring workflow" | `/loop-me` | Builds specs for repeating actions |
| "handoff", "fresh session", "save context" | `/handoff` | Compacts history for next session |
| "design module", "interface look like" | `/codebase-design` + `/design-an-interface` | API patterns + parallel mockup interface variations |
| "pre-commit hooks", "format on commit" | `/setup-pre-commit` | Wires up Husky + lint-staged (formatting/tests) |
| "setup wizard", "walk me through config" | `/wizard` | Generates interactive CLI setup scripts |

---

## Phase 1: Wayfinder — Chart the Map

**Skill:** `/wayfinder`

> 🔧 **Announce before starting:** "I'm using **`/wayfinder`** to chart a decision map of your project, surfacing unknowns so we have a clear path forward."

1. Chart decision map with `/wayfinder`.
2. Define destination (what does "done" look like?).
3. Fan out breadth-first across open decisions/unknowns. (Skip map if fully clear).
4. Create the tracker issue/tickets.

**Exit criteria:** User approves the map or destination is clear.

---

## Phase 2: Code Review — Existing Codebase Audit (if applicable)

**Skill:** `/code-review` *(Skip if starting from scratch)*

> 🔧 **Announce before starting:** "I'm using **`/code-review`** to audit existing code against standards and spec/PRD so we know what we are building upon."

1. Ask user for branch, commit, or tag to compare against.
2. Run `/code-review` (Standards and Spec axes).
3. Present findings, feeding them into the Grilling phase.

**Exit Criteria:** User acknowledges findings.

---

## Phase 3: Grilling — Deep Q&A Interview

**Skill:** `/grilling` + `/grill-with-docs`

> 🔧 **Announce before starting:** "I'm using **`/grilling`** to interview you on architecture, edge cases, and datastores. We must reach shared understanding before writing code."

1. Run `/grilling` (or `/grill-with-docs` for ADRs & glossary extraction).
2. Q&A on architecture, edge cases, concurrency, and validation. Ask questions one at a time.
3. Don't ask for facts discoverable in codebase; ask only for decisions.
4. Refine `UBIQUITOUS_LANGUAGE.md` using `/domain-modeling`.

**Exit Criteria:** Both agree: "We have reached shared understanding."

---

## Phase 4: Spec Synthesis

**Skill:** `/to-spec`

> 🔧 **Announce before starting:** "I'm using **`/to-spec`** to summarize our Q&A decisions and constraints into a formal spec document so outline is clear."

1. Run `/to-spec`. Include: Problem, Solution, User Stories, Architecture, Testing, Out of Scope.
2. Present spec for user review and iterate.

**Exit Criteria:** User says "Spec approved."

---

## Phase 5: Ticket Breakdown

**Skill:** `/to-tickets`

> 🔧 **Announce before starting:** "I'm using **`/to-tickets`** to partition the specification into independent vertical-slice tickets with blocking edges."

1. Run `/to-tickets` to split spec into end-to-end task tickets.
2. Ensure vertical slices (touches DB, logic, UI, and tests together).
3. Connect dependencies. Present breakdown to the user.

**Exit Criteria:** User approves breakdown.

---

## Phase 6: Implementation

**Skill:** `/implement` (uses `/tdd` and `/code-review`)

> 🔧 **Announce before starting:** "I'm using **`/implement`** to develop tickets test-first using `/tdd` (Red-Green-Refactor) and running code quality checks."

1. Pick first ticket whose blockers are resolved.
2. Run `/implement` using TDD at chosen integration seams.
3. Run types and tests file-by-file first, then run total suite.
4. Commit changes at ticket boundaries, then clear context.

**Exit Criteria:** All tickets are implemented, tested, and passing.

---

## Phase 7: Post-Implementation Code Review

**Skill:** `/code-review`

> 🔧 **Announce before starting:** "I'm using **`/code-review`** to audit all the new code block against rules and spec, ensuring nothing was missed."

1. Run `/code-review` comparing against the pre-implementation state.
2. Fix any warnings/violations reported.

**Exit Criteria:** Clean review on both Standards and Spec.

---

## Phase 8: Suggestions & Next Steps

*Synthesis phase (no special skill)*

1. Review the codebase/deliverable.
2. Report: current issues/debt, performance ideas, UX tweaks, and security hardening.
3. Loop back to Phase 3 (Grilling) if acting on suggestions.

**Exit Criteria:** User is satisfied or decides to trigger a new `/kickoff` loop.

---

## Phase 9: Skill Discovery — What Else Can You Do?

Present other skills in the kit, explain when to use them, and ask the user what interests them:

### 🔧 Other Skills Reference
| Skill | Use Case / What it does |
|---|---|
| `/qa` | Interactive bug reporting & GitHub issue creator |
| `/improve-codebase-architecture` | Maps module coupling, generates HTML report, details debt |
| `/diagnosing-bugs` | Structured 6-phase scientific debugging loop |
| `/request-refactor-plan` | Plans safe refactor steps as separate small commits |
| `/loop-me` | Builds specs to automate recurring workflow tasks |
| `/wizard` | Generates interactive CLI setup wizard guides |
| `/handoff` | Packs session context for clean handoff |
| `/prototype` | Builds throwaway code to verify UI designs/logic fast |
| `/research` | Background agent investigation of docs/apis |
| `/codebase-design` | Deep module design vocabulary rules |
| `/setup-pre-commit` | Configures Husky + lint-staged (format/lint on commit) |
| `/setup-matt-pocock-skills` | Configures repository issue tracker vocabulary |
| `/git-guardrails-claude-code` | Prevents hazardous git commands (force-push/delete) |

**Action:** Ask: *"Would you like to try any of these? I can explain any of them or run them now."*

**Exit criteria:** User finishes or picks a skill.
