# Repository Architecture & Rules (`CLAUDE.md`)

## a. How this Repo Works
- This workspace is a modular engineering environment optimized for clean backend microservices and data pipelines.
- **Directory Layout:**
  - `src/`: Core application modules.
  - `tests/`: Automated test suites accompanying every module.
  - `.agents/` or `.claude/`: Custom behaviors, commands, and templates. **Agent Instruction:** You MUST scan both `.agents/skills/` and `.claude/skills/` recursively, detect whichever directories exist in this workspace, and load all skills and rules from them.

## b. Skill Routing Table
- User-Initiated Orchestration: `kickoff` workflow (Guides planning, grilling, spec creation, and implementation lifecycle; supports starting from scratch or onboarding an existing codebase via `/wayfinder`, `/code-review`, `/grilling`, `/grill-with-docs`, and `/to-spec`).
- Model-Initiated Utility Frameworks:
  - Use `/to-spec` for functional system design synthesis.
  - Use `/to-tickets` for backlog distribution into tracer-bullet vertical slices.
  - Use `/implement` for execution (uses `/tdd` and `/code-review` internally).
  - Use `/wayfinder` for planning large efforts as a shared map of investigation tickets.
  - Use `/grilling` or `/grill-with-docs` for deep interview sessions.
  - Use `/prototype` for throwaway prototypes to answer design questions.

## c. Knowledge Architecture
- Core engineering truths and design patterns are maintained continuously in `CONTEXT.md`.
- Active feature backlogs are tracked via local markdown issue sheets or the repository issue management pipeline.

## d. Project Lifecycle
- **Starting from Scratch:**
  1. Project Scan & Vision Intake (read the project, ask the user for their idea, goals, priorities, and every detail)
  2. Big Decision Grilling (`/grilling` — resolve foundational project decisions: why, what stack, how)
  3. Planning & Exploration (`/wayfinder` — chart the map, surface remaining decisions)
  4. Deep Interview & Grilling (`/grilling` or `/grill-with-docs` — relentless Q&A to build shared understanding)
  5. Spec Synthesis (`/to-spec`)
  6. Task Deconstruction (`/to-tickets`)
  7. Implementation Loop (`/implement` → `/tdd` → `/code-review`)
- **Onboarding an Existing Project/Plan:**
  1. Codebase & Spec Onboarding (`kickoff` workflow)
     - Code understanding and review (`/code-review`)
     - Plan / documentation ingestion and grilling (`/grill-with-docs`)
     - Domain glossary extraction (`/ubiquitous-language`)
     - Active gap analysis & skepticism loop with the user
     - Sync decisions and rules into `CONTEXT.md`
  2. Spec Synthesis (`/to-spec`)
  3. Task & Gap Deconstruction (`/to-tickets`)
  4. Implementation Loop (`/implement` → `/tdd` → `/code-review`)

## e. Working Rules
- Hard Rule: Never skip writing a test case before building an API routing structure.
- Hard Rule: Never mutate `CLAUDE.md`/`AGENTS.MD`/`CONTEXT.md` or the core orchestration scripts autonomously. All workflow structural updates must be keyed in directly by the user.
