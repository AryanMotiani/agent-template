# Skill: Project Kickoff Workflow
- **Trigger:** `/kickoff`
- **Type:** User-Invoked Orchestration

You are the Project Director. Execute these phases sequentially. **Never skip a phase or proceed to the next step without the user's explicit confirmation.**

---

## Phase 1: Context Onboarding & Project Alignment

First, determine if you are starting from scratch or bootstrapping an existing project/plan:

### Path A: Starting from Scratch (No codebase/plan exists)
1. Print the following prompt to the user:
   *"Let's design your new project. I will interview you about the core goal and your preferred tech stack (languages, frameworks, database, testing setup). Please reply with a brief summary of what you want to build."*
2. Call the `/grill-with-docs` utility skill and conduct a relentless technical interview. Focus heavily on tech stack selection, data isolation, and concurrency strategies.
3. **Ubiquitous Language:** Extract domain-specific terminology (common words and business logic) and use the `/ubiquitous-language` skill to generate `UBIQUITOUS_LANGUAGE.md`.
4. Update the global `CONTEXT.md`:
   - Write the finalized languages, frameworks, database, and testing setup details into **Section 3: Technical Standards**.
   - Copy the architectural design metrics and Ubiquitous Language terms into their respective sections.
5. **STOP.** Do not proceed until the user explicitly says: "Alignment complete."

### Path B: Onboarding an Existing Codebase or Plan
Select this path if the user has already written code or drafted a blueprint/plan.
1. **Analyze Codebase:** Scan the codebase directories and source files (if code exists). Run `/code-review` and perform manual file inspection to understand the existing modules, structure, and current implementation state.
2. **Ingest Docs & Plan:** Ask the user to paste or point to their existing technical documents, blueprint, or PRD. Run `/grill-with-docs` against these documents to extract system objectives and architectural constraints.
3. **Extract Domain Language:** Call the `/ubiquitous-language` skill to scan the existing code, plans, and conversation context. Generate or update `UBIQUITOUS_LANGUAGE.md`.
4. **Skeptical Grilling & Critique:** Act as a sharp, highly skeptical reviewer. Critique both the existing codebase and the blueprint for architectural gaps:
   - Identify tech stack details, data isolation limits, BCNF violations, concurrency bottlenecks, or code smells.
   - List ambiguities, doubts, and points of confusion where context is missing.
   - Present these findings to the user as a set of sharp questions to grill them.
5. **Resolve & Update Context:** Use the user's answers to resolve confusion, finalize decisions, and update the global `CONTEXT.md`:
   - Write the confirmed tech stack languages, frameworks, database, and libraries into **Section 3: Technical Standards**.
   - Save the verified architecture standards and Ubiquitous Language terms in the other sections.
6. **STOP.** Do not proceed until the user explicitly says: "Alignment complete."

---

## Phase 2: The Verification Metrics (Layer 2)
1. Before drafting code structures or backlog items, invoke the evaluation protocol. Ask the user:
   *"Let's outline the precise evaluation criteria to ensure a high-quality final product. What past engineering pattern or strict metric must this match?"*
2. Define exact deterministic criteria for success (e.g., API response times < 100ms, 100% test coverage on core models, exact database normalization compliance).
3. If using an advanced environment wrapper, prepare a summary prompt for an isolated secondary evaluation pass.
4. **STOP.** Do not proceed until the user states: "Verification criteria locked."

---

## Phase 3: PRD Generation & Task Deconstruction (Layer 3)
1. Synthesize the specifications from Phase 1 and the verification metrics from Phase 2 into a formal Product Requirements Document (PRD) using the `/to-prd` utility skill.
2. Present the PRD to the user for review.
3. **STOP.** Do not proceed until the user explicitly states: "PRD approved."
4. Once approved, call the `/to-issues` utility skill to break the PRD down into highly compartmentalized, vertical-slice issues (including gaps identified during onboarding Path B).
5. **Requirement:** Ensure Issue #1 is strictly defined as initializing/updating `CLAUDE.md` / `AGENTS.md` to define the technical repository architecture, skill routing tables, and working rules.

---

## Phase 4: Implementation Handoff
1. Advise the user that the backlog is populated.
2. Instruct the user to pick up Issue #1 to build the environment and run: `/tdd implement issue #1`.