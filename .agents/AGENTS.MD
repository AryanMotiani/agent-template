# Repository Architecture & Rules (`CLAUDE.md`)

## a. How this Repo Works
- This workspace is a modular engineering environment optimized for clean backend microservices and data pipelines.
- **Directory Layout:**
  - `src/`: Core application modules.
  - `tests/`: Automated test suites accompanying every module.
  - `.claude/skills/`: Custom orchestration behaviors.

## b. Skill Routing Table
- User-Initiated Orchestration: `/kickoff` (Guides spec, validation definition, and lifecycle setup).
- Model-Initiated Utility Frameworks:
  - Use `mattpocock/skills/to-prd` for functional system design synthesis.
  - Use `mattpocock/skills/to-issues` for backlog distribution.
  - Use `mattpocock/skills/tdd` for execution tracking.

## c. Knowledge Architecture
- Core engineering truths and design patterns are maintained continuously in `CONTEXT.md`.
- Active feature backlogs are tracked via local markdown issue sheets or the repository issue management pipeline.

## d. Project Lifecycle
1. Alignment Interview (`/kickoff`)
2. Verification Definition
3. Task Deconstruction (`/to-issues`)
4. Red-Green-Refactor Implementation Loop (`/tdd`)

## e. Working Rules
- Hard Rule: Never skip writing a test case before building an API routing structure.
- Hard Rule: Never mutate `CLAUDE.md` or the core orchestration scripts autonomously. All workflow structural updates must be keyed in directly by the user.
