---
description: Full project pipeline — scan, vision intake, big decisions, wayfind, grill, spec, ticket, implement, review.
---

# kickoff — Orchestrated Project Pipeline

This workflow chains engineering skills into an idea → production pipeline. Perform phases sequentially. Do not proceed without user confirmation.

> **Trigger:** `kickoff`
> **Supports:** New projects and existing codebase onboarding.

---

## 👋 Welcome & Plan Overview (Always Show First)

When the user runs `kickoff`, print this overview first:

> "Welcome to SkilledAgent! `kickoff` runs a structured 12-phase orchestration pipeline to go from idea to test-driven production code."

**Phase Plan:**
| Phase | Goal | Skill |
|---|---|---|
| 0. Project Scan | Read and digest the project files | Filesystem scan |
| 1. User Vision Intake | Understand the user's idea, goals, and priorities | Open-ended prompt |
| 2. Big Decision Grilling | Resolve foundational project decisions | `/grilling` |
| 3. Wayfinder | Map remaining decisions/unknowns | `/wayfinder` |
| 4. Code Review | Audit existing code (if any) | `/code-review` |
| 5. Deep Grilling | Architecture & edge-case Q&A | `/grilling` + `/grill-with-docs` |
| 6. Spec Synthesis | Write formal specification document | `/to-spec` |
| 7. Ticket Breakdown | Break spec into vertical-slice task tickets | `/to-tickets` |
| 8. Implementation | Develop using TDD & code review checks | `/implement` + `/tdd` |
| 9. Code Review | Final post-implementation audit | `/code-review` |
| 10. Suggestions | Final review and recommendations | Synthesis |
| 11. Skill Discovery | Reference guide to other 39 tools | Tour |

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

## Phase 0: Project Scan — Read the Landscape

*No special skill — filesystem exploration*

> 🔧 **Announce before starting:** "I'm scanning your project directory to understand what's already here — files, folder structure, config, dependencies, and existing code — so I have full context before asking you anything."

1. Recursively scan the project directory: `src/`, config files (`package.json`, `tsconfig.json`, `.env`, etc.), README, existing documentation, test files, and any `.agents/` or `.claude/` configuration.
2. Summarize findings to the user:
   - What languages/frameworks are detected
   - What files/folders exist and their apparent purpose
   - Any existing tests, CI config, or deployment setup
   - Whether this appears to be a fresh project or an existing codebase
3. Present the summary and ask: "Is this picture accurate? Anything I missed or misread?"

**Exit criteria:** User confirms the scan is accurate, or corrects any misunderstandings.

---

## Phase 1: User Vision Intake — What Are You Building?

*No special skill — open-ended intake prompt*

> 🔧 **Announce before starting:** "Now I need to hear your vision. I'm going to ask you one big question, and I want you to tell me everything — your idea, how you want to build it, your priorities, and every technical and non-technical detail you can think of."

1. Ask the user:
   > "Tell me what you're trying to implement. Share your general idea of what you want to build and how, your priorities, and every technical and non-technical detail you can think of. Don't hold back — the more context I have, the better I can help."
2. Listen fully. Do not interrupt or start breaking things down yet.
3. Ask clarifying follow-ups **only** if something is genuinely unclear — but do not start grilling or making decisions yet.
4. Summarize back what you heard and confirm understanding.

**Exit criteria:** User confirms: "Yes, that's what I want to build."

---

## Phase 2: Big Decision Grilling — Foundational Questions

**Skill:** `/grilling`

> 🔧 **Announce before starting:** "Before I break this into parts, I need to resolve the **big foundational decisions** about this project. I'm going to grill you on the high-level questions that shape everything else. One question at a time."

1. Run `/grilling` focused exclusively on **project-level foundational decisions**.
2. Ask questions one at a time from these categories (skip any already answered in Phase 1):

   **Purpose & Problem:**
   - Why is this project being built? What problem does it solve?
   - Who are the target users/customers?
   - What does success look like? What are the success metrics?

   **Technical Stack:**
   - What programming language(s) and runtime?
   - What framework(s) — and why those over alternatives?
   - What database/data storage? SQL vs NoSQL vs something else?
   - What testing framework and testing philosophy?

   **Architecture:**
   - Monolith vs microservices vs serverless?
   - API-first or UI-first development?
   - Monorepo vs multi-repo?
   - What's the state management strategy (if frontend)?

   **Deployment & Infrastructure:**
   - Where does this run? Cloud provider / self-hosted / edge?
   - CI/CD pipeline — what does deployment look like?
   - What environments (dev, staging, prod)?

   **Constraints & Priorities:**
   - Budget constraints?
   - Timeline — when does this need to ship?
   - Team size — solo developer or team?
   - What's the #1 priority: speed to ship, code quality, scalability, or something else?

   **Business & Product:**
   - Is there a business model? Paid, free, freemium?
   - Are there compliance/legal requirements (GDPR, HIPAA, etc.)?
   - Security model — authentication, authorization?
   - Any third-party integrations required?

3. For each question, provide your recommended answer based on the project context.
4. Record all decisions. These will populate `CONTEXT.md` sections 3 and 4.

**Exit criteria:** All foundational decisions are resolved. User agrees the big picture is locked.

---

## Phase 3: Wayfinder — Chart the Map

**Skill:** `/wayfinder`

> 🔧 **Announce before starting:** "The big decisions are locked. Now I'm using **`/wayfinder`** to chart a decision map of remaining unknowns — the smaller decisions and investigations we need to resolve before implementation."

1. Chart decision map with `/wayfinder`, using all context from Phases 0-2.
2. Define destination (what does "done" look like?).
3. Fan out breadth-first across open decisions/unknowns. (Skip map if fully clear).
4. Create the tracker issue/tickets.

**Exit criteria:** User approves the map or destination is clear.

---

## Phase 4: Code Review — Existing Codebase Audit (if applicable)

**Skill:** `/code-review` *(Skip if starting from scratch)*

> 🔧 **Announce before starting:** "I'm using **`/code-review`** to audit existing code against standards and spec/PRD so we know what we are building upon."

1. Ask user for branch, commit, or tag to compare against.
2. Run `/code-review` (Standards and Spec axes).
3. Present findings, feeding them into the Grilling phase.

**Exit Criteria:** User acknowledges findings.

---

## Phase 5: Deep Grilling — Architecture & Edge-Case Q&A

**Skill:** `/grilling` + `/grill-with-docs`

> 🔧 **Announce before starting:** "I'm using **`/grilling`** to interview you on the detailed architecture, edge cases, and datastores. We must reach shared understanding before writing code."

1. Run `/grilling` (or `/grill-with-docs` for ADRs & glossary extraction).
2. Q&A on architecture, edge cases, concurrency, and validation. Ask questions one at a time.
3. Don't ask for facts discoverable in codebase; ask only for decisions.
4. Refine `UBIQUITOUS_LANGUAGE.md` using `/domain-modeling`.

**Exit Criteria:** Both agree: "We have reached shared understanding."

---

## Phase 6: Spec Synthesis

**Skill:** `/to-spec`

> 🔧 **Announce before starting:** "I'm using **`/to-spec`** to summarize our Q&A decisions and constraints into a formal spec document so outline is clear."

1. Run `/to-spec`. Include: Problem, Solution, User Stories, Architecture, Testing, Out of Scope.
2. Present spec for user review and iterate.

**Exit Criteria:** User says "Spec approved."

---

## Phase 7: Ticket Breakdown

**Skill:** `/to-tickets`

> 🔧 **Announce before starting:** "I'm using **`/to-tickets`** to partition the specification into independent vertical-slice tickets with blocking edges."

1. Run `/to-tickets` to split spec into end-to-end task tickets.
2. Ensure vertical slices (touches DB, logic, UI, and tests together).
3. Connect dependencies. Present breakdown to the user.

**Exit Criteria:** User approves breakdown.

---

## Phase 8: Implementation

**Skill:** `/implement` (uses `/tdd` and `/code-review`)

> 🔧 **Announce before starting:** "I'm using **`/implement`** to develop tickets test-first using `/tdd` (Red-Green-Refactor) and running code quality checks."

1. Pick first ticket whose blockers are resolved.
2. Run `/implement` using TDD at chosen integration seams.
3. Run types and tests file-by-file first, then run total suite.
4. Commit changes at ticket boundaries, then clear context.

**Exit Criteria:** All tickets are implemented, tested, and passing.

---

## Phase 9: Post-Implementation Code Review

**Skill:** `/code-review`

> 🔧 **Announce before starting:** "I'm using **`/code-review`** to audit all the new code block against rules and spec, ensuring nothing was missed."

1. Run `/code-review` comparing against the pre-implementation state.
2. Fix any warnings/violations reported.

**Exit Criteria:** Clean review on both Standards and Spec.

---

## Phase 10: Suggestions & Next Steps

*Synthesis phase (no special skill)*

1. Review the codebase/deliverable.
2. Report: current issues/debt, performance ideas, UX tweaks, and security hardening.
3. Loop back to Phase 5 (Deep Grilling) if acting on suggestions.

**Exit Criteria:** User is satisfied or decides to trigger a new `kickoff` loop.

---

## Phase 11: Skill Discovery — What Else Can You Do?

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
