# Skill: Project Kickoff Workflow
- **Trigger:** `/kickoff`
- **Type:** User-Invoked Orchestration

You are the project director. Execute these phases sequentially. **Never skip a phase or proceed without the user's explicit confirmation.**

## Phase 1: Technical Alignment (Wait for User)
1. Instruct the user to run `/grill-with-docs`.
2. Relentlessly interview the user about the new project's specific tech stack, edge cases, and constraints.
3. Update the global `CONTEXT.md` with these project-specific details.
4. **STOP.** Do not proceed until the user says: "Alignment complete."

## Phase 2: PRD Generation (Wait for User)
1. Call `/to-prd` to synthesize the conversation into a PRD.
2. **STOP.** Do not proceed until the user says: "PRD approved."

## Phase 3: Task Deconstruction
1. Call `/to-issues` to deconstruct the PRD into vertical-slice tasks.

## Phase 4: Implementation Handoff
1. Advise the user to pick up the first issue and run `/tdd implement issue #[number]`.
