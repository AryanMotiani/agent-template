# SkilledAgent

SkilledAgent is a local developer workspace and workflow manager for AI coding agents like Claude Code and Gemini CLI. It provides 39 pre-configured skills and structured markdown workflows directly inside your repository.

Instead of letting an AI agent make assumptions and write unstructured code, SkilledAgent guides it through a repeatable development lifecycle: planning, design, specification, implementation, testing, and review.

The entire workspace lives inside a `.agents/` directory. It does not modify your project configuration or root folder. You can remove it completely with a single command.

---

## Why SkilledAgent?

Most coding agents can generate code quickly. The harder part is deciding **what** to build and **how** to build it.

SkilledAgent provides a repeatable workflow that helps the agent:

- Understand the problem before writing code
- Ask questions instead of making assumptions
- Create a formal specification
- Split work into small, testable tasks
- Implement with test-driven development
- Review the result against the original spec

Instead of relying on one long prompt, the work is divided into clear phases. Each phase uses a specific skill, and the agent explains what it is doing and asks for your approval before moving forward.

---

## Quick Start

You can add SkilledAgent to any project directory in about 30 seconds.

### 1. Install the workspace

Run the package directly using `npx` to set up the workspace:

```bash
npx skilledagent
```

Or, if you want to lock the version in your project dependencies for a team setup:

```bash
npm i skilledagent
```

Both commands scaffold the `.agents/` directory into your project.

### 2. Run the initial setup

Open your terminal AI agent (Claude Code, Gemini CLI, or similar) and run:

```
/kickoff
```

---

## What happens after /kickoff?

The agent starts by showing you the complete plan: a table of every phase, which skill powers it, and what it does.

For every phase, the agent:

1. **Announces the skill** it is about to use
2. **Explains why** that skill is relevant to your situation
3. **Waits for your approval** before running it

Nothing happens silently. You stay in control throughout.

---

## The Kickoff Workflow

`/kickoff` runs a 9-phase pipeline that takes a project from idea to working, tested code.

### Phase 1 -- Wayfinder

Maps out the project. Identifies decisions, unknowns, and milestones so there is a clear path forward before any code is written.

**Skill:** `/wayfinder`

### Phase 2 -- Code Review (optional)

If you are working with an existing codebase, this phase audits it for design alignment and coding standards before changes are introduced.

**Skill:** `/code-review`

### Phase 3 -- Grilling

The agent interviews you about architecture, edge cases, data handling, and validation. It asks questions one at a time to uncover gaps and ambiguities in the plan. It also extracts domain terminology into a shared glossary so there is no confusion later.

**Skill:** `/grilling` + `/grill-with-docs`

### Phase 4 -- Spec Synthesis

Compiles everything discussed so far into a formal technical specification. This includes the problem statement, proposed solution, user stories, architecture, testing strategy, and what is explicitly out of scope.

**Skill:** `/to-spec`

### Phase 5 -- Ticket Breakdown

Splits the specification into small, independent tasks. Each task is a vertical slice that touches the database, logic, UI, and tests together. Dependencies between tasks are mapped out.

**Skill:** `/to-tickets`

### Phase 6 -- Implementation

Picks up each task in dependency order and implements it using test-driven development. Tests are written first, then the code to make them pass, then the code is cleaned up.

**Skill:** `/implement` + `/tdd`

### Phase 7 -- Post-Implementation Review

Reviews all new code against the original specification and coding standards. Catches anything that was missed or does not match what was agreed.

**Skill:** `/code-review`

### Phase 8 -- Suggestions

A final review of the codebase. Reports on current issues, technical debt, performance ideas, UX improvements, and security considerations. If you want to act on any suggestion, you can loop back to the grilling phase.

### Phase 9 -- Skill Discovery

Shows you the full catalog of available skills beyond the kickoff pipeline. You can try any of them immediately or save them for later.

---

## Features

### Local workspace

Everything is stored inside `.agents/`. Your project root stays clean. Delete the folder to remove SkilledAgent completely.

### Works with multiple coding agents

Compatible with Claude Code, Gemini CLI, Codex, and other agent tools that support markdown-based skills.

### Transparent workflow

Every skill is announced before it runs. The agent explains why it is using that skill and asks for your confirmation. You always know what is happening and why.

### Mid-workflow skill routing

If something comes up during the workflow (a bug, an architecture question, a need for research), the agent suggests the right skill for the situation. For example:

| Situation | Suggested skill |
|---|---|
| Something is broken or slow | `/diagnosing-bugs` |
| Architecture feels messy | `/improve-codebase-architecture` |
| Need to look up docs or APIs | `/research` |
| Want to test an idea quickly | `/prototype` |
| Planning a refactor | `/request-refactor-plan` |
| Need to hand off to a new session | `/handoff` |

### Test-driven development

Code is never written without tests. The agent follows a strict red-green-refactor loop: write a failing test, write the code to pass it, then clean up.

### Shared context

During the workflow, the agent builds a shared understanding of the project and stores it in `CONTEXT.md`. This includes the technology stack, architecture decisions, project terminology, and coding standards. Later skills reuse this information so you do not need to repeat yourself.

---

## Directory Structure

Once installed, the `.agents/` directory looks like this:

```
.agents/
  skills/              # 39 reusable skills
  workflows/           # Markdown workflows like /kickoff
  CONTEXT.md           # Shared project context, terminology, and standards
  AGENTS.MD            # Skill routing and workspace configuration
  AGENTS_README.md     # Detailed operations guide
  skills-lock.json     # Lockfile for installed skill versions
```

---

## CONTEXT.md

This file acts as the project's shared memory.

During the kickoff workflow, the agent populates it with:

- **Technical standards** -- languages, frameworks, testing libraries, and conventions
- **Ubiquitous language** -- domain-specific terms and definitions so the agent and developer use the same vocabulary
- **Architecture rules** -- design decisions and constraints that apply across the project

Skills read from this file automatically. Once your project context is established, you do not need to re-explain it in every conversation.

---

## Available Skills

SkilledAgent includes 39 skills organized by category. Each skill can be used independently or as part of `/kickoff`.

### Engineering

| Skill | What it does |
|---|---|
| `/tdd` | Test-driven development loops |
| `/code-review` | Reviews code against specs and standards |
| `/diagnosing-bugs` | Structured debugging for logic and performance issues |
| `/improve-codebase-architecture` | Scans for module coupling and generates a visual report |
| `/request-refactor-plan` | Plans safe refactoring as small, incremental commits |
| `/setup-pre-commit` | Configures Husky and lint-staged for commit-time checks |

### Planning and Design

| Skill | What it does |
|---|---|
| `/wayfinder` | Maps decisions and unknowns for large efforts |
| `/grilling` | Interview to stress-test a plan or design |
| `/grill-with-docs` | Same as grilling, but also creates ADRs and a glossary |
| `/to-spec` | Turns a discussion into a formal specification |
| `/to-tickets` | Breaks a spec into small implementation tasks |
| `/codebase-design` | Vocabulary for designing deep, well-encapsulated modules |
| `/design-an-interface` | Generates multiple interface designs for comparison |

### Productivity

| Skill | What it does |
|---|---|
| `/implement` | Implements tasks using TDD and code review |
| `/prototype` | Builds throwaway code to test an idea quickly |
| `/research` | Investigates a topic against primary sources |
| `/handoff` | Compresses context for a fresh agent session |
| `/qa` | Interactive bug reporting and issue filing |
| `/wizard` | Generates interactive CLI setup guides |

### Writing

| Skill | What it does |
|---|---|
| `/writing-fragments` | Explores raw material and fragments |
| `/writing-beats` | Structures material into a sequence of beats |
| `/writing-shape` | Shapes raw material into finished prose |
| `/edit-article` | Edits and improves article drafts |

---

## Removing SkilledAgent

SkilledAgent does not modify files outside `.agents/`. To remove it, delete the folder:

**Linux / macOS:**
```bash
rm -rf .agents
```

**Windows PowerShell:**
```powershell
Remove-Item -Recurse -Force .agents
```

**Windows Command Prompt:**
```cmd
rmdir /s /q .agents
```

---

## Contributing

GitHub: [github.com/AryanMotiani/SkilledAgent](https://github.com/AryanMotiani/SkilledAgent)

For the full operations guide, see [.agents/AGENTS_README.md](.agents/AGENTS_README.md).
