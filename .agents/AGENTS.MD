# Repository Architecture & Rules (`CLAUDE.md`)

## a. How this Repo Works
- This workspace is a modular engineering environment optimized for clean backend microservices and data pipelines.
- **Directory Layout:**
  - `src/`: Core application modules.
  - `tests/`: Automated test suites accompanying every module.
  - `.agents/` or `.claude/`: Custom behaviors, commands, and templates. **Agent Instruction:** You MUST scan both `.agents/skills/` and `.claude/skills/` recursively, detect whichever directories exist in this workspace, and load all skills and rules from them.

## b. Skill Routing Table
- User-Initiated Orchestration: `/kickoff` (Guides spec, validation definition, and lifecycle setup; supports starting from scratch or onboarding an existing codebase/plan via `/code-review`, `/grill-with-docs`, `/ubiquitous-language`, and a skeptical critique to update context).
- Model-Initiated Utility Frameworks:
  - Use `mattpocock/skills/to-prd` for functional system design synthesis.
  - Use `mattpocock/skills/to-issues` for backlog distribution.
  - Use `mattpocock/skills/tdd` for execution tracking.

## c. Knowledge Architecture
- Core engineering truths and design patterns are maintained continuously in `CONTEXT.md`.
- Active feature backlogs are tracked via local markdown issue sheets or the repository issue management pipeline.

## d. Project Lifecycle
- **Starting from Scratch:**
  1. Alignment Interview (`/kickoff` Path A)
  2. Verification Definition
  3. Task Deconstruction (`/to-issues`)
  4. Red-Green-Refactor Implementation Loop (`/tdd`)
- **Onboarding an Existing Project/Plan:**
  1. Codebase & Spec Onboarding (`/kickoff` Path B)
     - Code understanding and review (`/code-review` / manual scan)
     - Plan / documentation ingestion and grilling (`/grill-with-docs`)
     - Domain glossary extraction (`/ubiquitous-language`)
     - Active gap analysis & skepticism loop with the user
     - Sync decisions and rules into `CONTEXT.md`
  2. Verification Definition
  3. Task & Gap Deconstruction (`/to-issues`)
  4. Red-Green-Refactor Loop (`/tdd`)

## e. Working Rules
- Hard Rule: Never skip writing a test case before building an API routing structure.
- Hard Rule: Never mutate `CLAUDE.md`/`AGENTS.MD`/`CONTEXT.md` or the core orchestration scripts autonomously. All workflow structural updates must be keyed in directly by the user.
