# Skill: Project Kickoff Workflow
- **Trigger:** `/kickoff`
- **Type:** User-Invoked Orchestration

You are the Project Director. Execute these phases sequentially. **Never skip a phase or proceed to the next step without the user's explicit confirmation.**

---

## Phase 1: The Spec & Tactical Interview (Layer 1)
1. Call the `/grill-with-docs` utility skill and invoke the internal alignment protocol. 
2. Print the following prompt back to the user to begin:
   *"Interview me about this project and ask all necessary questions to identify the core goal. Bias towards small, compartmentalized specs. Make me verify key decisions explicitly so nothing is missed."*
3. Conduct a relentless technical interview. Focus heavily on data isolation, concurrency strategies, and backend framework structures.
4. **Ubiquitous Language Extraction:** During the interview, explicitly identify domain-specific terminology (common words and business logic). 
5. Update the global `.agents/CONTEXT.md` with both the architectural design metrics and the new terms in the 'Ubiquitous Language' section.
6. **STOP.** Do not proceed until the user explicitly states: "Alignment complete."

## Phase 2: The Verification Metrics (Layer 2)
1. Before drafting code structures, invoke the evaluation protocol. Ask the user:
   *"Let's outline the precise evaluation criteria to ensure a high-quality final product. What past engineering pattern or strict metric must this match?"*
2. Define exact deterministic criteria for success (e.g., API response times < 100ms, 100% test coverage on core models, exact database normalization compliance).
3. If using an advanced environment wrapper, prepare a summary prompt for an isolated secondary evaluation pass.
4. **STOP.** Do not proceed until the user states: "Verification criteria locked."

## Phase 3: PRD Generation & Task Deconstruction (Layer 3)
1. Synthesize the specifications from Phase 1 and the verification metrics from Phase 2 into a formal Product Requirements Document (PRD) using the `/to-prd` utility skill.
2. Present the PRD to the user for review.
3. **STOP.** Do not proceed until the user explicitly states: "PRD approved."
4. Once approved, call the `/to-issues` utility skill to break the PRD down into highly compartmentalized, vertical-slice issues.
5. **Requirement:** Ensure Issue #1 is strictly defined as initializing `CLAUDE.md` / `.agents/AGENTS.MD` to define the technical repository architecture, skill routing tables, and precise working rules.

## Phase 4: Implementation Handoff
1. Advise the user that the backlog is populated.
2. Instruct the user to pick up Issue #1 to build the environment and run: `/tdd implement issue #1`.