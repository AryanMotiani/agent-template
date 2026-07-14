---
description: Full idea-to-project orchestration pipeline — wayfind, grill, spec, ticket, implement, review.
---

# /kickoff — Orchestrated Project Pipeline

This workflow chains the engineering skills into a complete idea → production pipeline. Execute each phase sequentially. **Never skip a phase or proceed without the user's explicit confirmation.**

> **Trigger:** `/kickoff`
> **Supports:** New projects from scratch AND existing codebase onboarding.

---

## 👋 Welcome & Plan Overview (Always Show First)

**When the user types `/kickoff`, you MUST begin by printing the following overview before doing anything else.** This is the user's first impression — make it clear, confident, and helpful.

1. **Greet the user** and explain what `/kickoff` does in one or two sentences:
   > "Welcome to SkilledAgent! `/kickoff` runs an end-to-end orchestration pipeline that takes your idea from a rough concept to working, test-driven code — using a curated set of engineering skills at each stage."

2. **Print the full phase plan**, showing which skill powers each phase:

   > **Here's the plan — the phases I'll walk you through:**
   >
   > | Phase | What happens | Skill used |
   > |---|---|---|
   > | 1. Wayfinder | Chart a decision map for your project | `/wayfinder` |
   > | 2. Code Review | Audit existing code (if applicable) | `/code-review` |
   > | 3. Grilling | Deep Q&A to reach shared understanding | `/grilling` + `/grill-with-docs` |
   > | 4. Spec Synthesis | Turn our discussion into a formal spec | `/to-spec` |
   > | 5. Ticket Breakdown | Break the spec into vertical-slice tickets | `/to-tickets` |
   > | 6. Implementation | Build each ticket with TDD | `/implement` + `/tdd` |
   > | 7. Code Review | Post-implementation audit | `/code-review` |
   > | 8. Suggestions | Holistic review & next steps | _(synthesis — no specific skill)_ |
   > | 9. Skill Discovery | Explore all 39 available skills | _(guided tour)_ |

3. **Explain how it works** so the user knows what to expect:
   > "At each phase, I'll **announce the exact skill** I'm about to use, explain **why** it's the right tool for that step, and **ask for your go-ahead** before proceeding. You're always in control — nothing runs silently."

4. **Ask if the user is ready** to begin Phase 1, or if they have questions first.

---

## 🧭 Mid-Workflow Skill Routing (Always Active)

**This rule is active throughout the ENTIRE workflow, not just at the end.**

At any point during the pipeline, if the user's prompt or the conversation context matches one of the skills below, you MUST proactively **suggest and explain** the relevant skill before continuing. Don't just use it silently — tell the user:

1. **What the skill does** (one sentence)
2. **Why it's relevant right now** (connect it to their current situation)
3. **How it works** (brief — what they'll experience)
4. **Ask if they want to use it**

### Trigger-to-Skill Routing Table

| User says / situation | Suggest this skill | Why |
|---|---|---|
| "something is broken", "this throws an error", "it's slow", "debug this" | `/diagnosing-bugs` | Structured 6-phase diagnosis loop — builds a feedback loop before hypothesizing, so you don't waste time guessing |
| "I want to report bugs", "let's do QA", "I found some issues" | `/qa` | Interactive QA session — you describe bugs conversationally and the agent files proper GitHub issues with domain language |
| "the architecture feels wrong", "this is getting messy", "how can I improve the code structure" | `/improve-codebase-architecture` | Scans for deepening opportunities, generates a visual HTML report, then grills through whichever one you pick |
| "I want to refactor this", "let's plan a refactor" | `/request-refactor-plan` | Creates a detailed refactor plan broken into tiny safe commits, then files it as a GitHub issue |
| "I need to research this", "look up how X works", "check the docs for Y" | `/research` | Spins up a background agent to investigate against primary sources (official docs, specs, source code) and saves findings as a markdown file |
| "I want to build a quick prototype", "let's test if this works", "what should this look like" | `/prototype` | Builds a throwaway prototype to answer a design question — either logic (terminal app) or UI (multiple variations) |
| "I want to automate this workflow", "what recurring tasks can I delegate" | `/loop-me` | Grills you about your recurring workflows and produces specs that an agent could implement without asking questions |
| "hand this off", "continue in a fresh session", "save context" | `/handoff` | Compacts the conversation into a handoff doc so a fresh agent can pick up where you left off |
| "help me design this module", "what should the interface look like" | `/codebase-design` + `/design-an-interface` | Deep module design vocabulary + parallel generation of radically different interface designs |
| "set up pre-commit hooks", "add formatting on commit" | `/setup-pre-commit` | Wires up Husky + lint-staged with Prettier, type checking, and tests |
| "I need a setup wizard", "walk me through configuring X" | `/wizard` | Generates an interactive bash wizard that walks you step-by-step through manual setup procedures |

**Example interaction:**
> User: "I think the auth module architecture is getting messy"
> Agent: "It sounds like you might benefit from `/improve-codebase-architecture`. This skill scans your codebase for architectural friction, generates a visual HTML report showing deepening opportunities (where shallow modules can be made deeper), and then we grill through whichever one you want to tackle. Want me to run it?"

---

## Phase 1: Wayfinder — Chart the Map

**Skill:** `/wayfinder`

> 🔧 **Announce to the user before starting:**
> "I'm now using **`/wayfinder`** — this skill charts a decision map of your project, surfacing unknowns and open decisions so we have a clear path forward."

The project starts as a loose idea wrapped in fog. Use the Wayfinder to find the way.

1. Run `/wayfinder` to chart a decision map.
2. Name the **destination** — what does "done" look like for this project?
3. Fan out **breadth-first** across the problem space: surface open decisions, unknowns, and the first steps takeable now.
4. If the idea fits in a single session (no fog), skip the map and proceed directly to Phase 3.
5. Otherwise, create the map issue with tickets, blocking edges, and fog.

**Exit criteria:** The user says "Map looks good" or the destination is clear enough to proceed.

---

## Phase 2: Code Review — Existing Codebase Audit (if applicable)

**Skill:** `/code-review`

> **Skip this phase** if starting from scratch with no existing code.

> 🔧 **Announce to the user before starting:**
> "I'm now using **`/code-review`** — this audits your existing code against both coding standards and any spec/PRD, so we know exactly where things stand before designing new work."

1. Ask the user for the fixed point (branch, commit, or tag) to compare against.
2. Run `/code-review` to audit the existing code along two axes:
   - **Standards:** Does the code follow documented coding standards?
   - **Spec:** Does the code match any existing spec/PRD?
3. Present findings to the user — these feed into the grilling phase.

**Exit criteria:** User acknowledges the review findings.

---

## Phase 3: Grilling — Deep Q&A Interview

**Skill:** `/grilling` + `/grill-with-docs` (uses `/domain-modeling` internally)

> 🔧 **Announce to the user before starting:**
> "I'm now using **`/grilling`** — this is the most critical phase. I'll interview you about every aspect of the project (architecture, edge cases, data models) so we reach complete shared understanding before writing any code."

This is the most critical phase. The goal is to reach **complete shared understanding** before any code is written.

1. Run `/grilling` (or `/grill-with-docs` if you want ADRs and glossary created as you go).
2. Interview the user **relentlessly** about every aspect of the project:
   - Architecture decisions, tech stack, data models
   - Edge cases, failure modes, concurrency strategies
   - Integration points, external dependencies
   - Testing strategy, acceptance criteria
3. Ask questions **one at a time**, waiting for each answer.
4. If a *fact* can be found by exploring the codebase, look it up — don't ask. The *decisions* are the user's.
5. Use findings from Phase 2 (code review) to ask sharper questions.
6. Generate / update `UBIQUITOUS_LANGUAGE.md` via `/domain-modeling`.

**Exit criteria:** Both you and the user agree: "We have reached a shared understanding." There should be ZERO ambiguity about what will be built and how.

---

## Phase 4: Spec Synthesis

**Skill:** `/to-spec`

> 🔧 **Announce to the user before starting:**
> "I'm now using **`/to-spec`** — this synthesizes everything we've discussed into a formal specification document, so there's a single source of truth before we break things into tickets."

1. Run `/to-spec` to synthesize everything from Phases 1–3 into a formal spec.
2. The spec includes: Problem Statement, Solution, User Stories, Implementation Decisions, Testing Decisions, Out of Scope.
3. Present the spec to the user for review.
4. Iterate until approved.

**Exit criteria:** User explicitly says "Spec approved."

---

## Phase 5: Ticket Breakdown

**Skill:** `/to-tickets`

> 🔧 **Announce to the user before starting:**
> "I'm now using **`/to-tickets`** — this breaks your approved spec into tracer-bullet, vertical-slice tickets with blocking edges, so each piece of work is independently buildable and testable."

1. Run `/to-tickets` to break the approved spec into tracer-bullet vertical-slice tickets.
2. Each ticket cuts through ALL layers (schema, API, UI, tests) — no horizontal slices.
3. Declare blocking edges between tickets.
4. Present the breakdown and quiz the user on granularity and dependencies.

**Exit criteria:** User approves the ticket breakdown.

---

## Phase 6: Implementation

**Skill:** `/implement` (uses `/tdd` and `/code-review` internally)

> 🔧 **Announce to the user before starting:**
> "I'm now using **`/implement`** — this works through each ticket using test-driven development (`/tdd` under the hood), writing tests first, then code, then refactoring. I'll also run `/code-review` checks as I go."

1. Work the **frontier** — pick the first ticket whose blockers are all done.
2. Run `/implement` for each ticket:
   - Use `/tdd` at pre-agreed seams (Red-Green-Refactor)
   - Run typechecking regularly
   - Run single test files regularly, full suite at the end
3. Commit work to the current branch after each ticket.
4. Clear context between tickets for fresh sessions.

**Exit criteria:** All tickets are implemented and passing.

---

## Phase 7: Post-Implementation Code Review

**Skill:** `/code-review`

> 🔧 **Announce to the user before starting:**
> "I'm now using **`/code-review`** again — this time to audit all the code we just wrote against both coding standards and the approved spec, catching anything that slipped through."

1. Run `/code-review` against the branch/commit where implementation started.
2. Review along both axes: Standards compliance and Spec conformance.
3. Address any findings — fix issues, then re-review if needed.

**Exit criteria:** Clean review on both axes.

---

## Phase 8: Suggestions & Next Steps

No specific skill — this is a synthesis phase.

1. Review the completed project holistically.
2. Present to the user:
   - **Current problems:** Any known issues, tech debt, or rough edges.
   - **Improvement ideas:** Performance optimizations, UX improvements, additional features.
   - **Architecture suggestions:** Refactoring opportunities, scalability concerns.
   - **Security considerations:** Potential vulnerabilities or hardening needed.
3. If the user wants to act on any suggestions, loop back to Phase 3 (Grilling) for the new work.

**Exit criteria:** User is satisfied or chooses to start a new `/kickoff` cycle for follow-up work.

---

## Phase 9: Skill Discovery — What Else Can You Do?

This is where you help the user **discover** the full power of the skill toolkit. Don't assume they know what's available — most users haven't read every skill file.

Present each skill group below with a **one-line explanation** and **when to use it**. Ask the user which ones interest them.

### 🔧 Maintenance & Quality

| Skill | What it does | Use when… |
|---|---|---|
| `/qa` | Interactive bug-reporting session — you talk, the agent files issues | You've been using the app and found bugs to report |
| `/improve-codebase-architecture` | Scans for shallow modules, generates HTML report, grills through fixes | The code works but feels messy or hard to navigate |
| `/diagnosing-bugs` | Structured 6-phase diagnosis with a feedback loop before hypothesizing | Something is broken and you can't figure out why |
| `/request-refactor-plan` | Plans a refactor as tiny safe commits, filed as a GitHub issue | You want to restructure code without breaking things |

### 🔄 Workflow Automation

| Skill | What it does | Use when… |
|---|---|---|
| `/loop-me` | Grills you about recurring tasks and produces implementable specs | You have repetitive work you want to automate |
| `/wizard` | Generates an interactive bash wizard for manual setup procedures | You need to guide someone through a multi-step setup |
| `/handoff` | Saves conversation context so a fresh agent can continue | You're running out of context window or switching sessions |

### 🧠 Design & Research

| Skill | What it does | Use when… |
|---|---|---|
| `/prototype` | Builds throwaway code to answer "does this logic work?" or "what should this look like?" | You're unsure about a design decision and want to test it fast |
| `/research` | Background agent investigates against primary sources | You need to look up docs, API behavior, or technical facts |
| `/codebase-design` | Deep module design vocabulary and principles | You're designing or refactoring module interfaces |

### 🛡️ Setup & Safety

| Skill | What it does | Use when… |
|---|---|---|
| `/setup-pre-commit` | Wires up Husky + lint-staged with Prettier, types, tests | You want code quality checks on every commit |
| `/setup-matt-pocock-skills` | Configures issue tracker and triage label vocabulary | First-time setup of the engineering skill ecosystem |
| `/git-guardrails-claude-code` | Blocks dangerous git commands (push, reset --hard, etc.) | You want safety rails on destructive git operations |

**Action:** Ask the user: *"Would you like to try any of these? I can explain any skill in more detail or run it right now."*

**Exit criteria:** User says they're done, or picks a skill to run.
