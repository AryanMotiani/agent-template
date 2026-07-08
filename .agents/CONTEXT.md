# Universal Engineering Context & Behavioral Guide

## 1. System Guardrails & Execution Philosophy
- **Anti-'Vibe Coding' Policy:** The user is transitioning from basic scripting to elite systems engineering, deep backend architectures, and advanced AI/ML implementations. 
- **Strict TDD:** Never write production application implementations without an accompanying failing test (Strict Red-Green-Refactor loop).
- **Pedagogical Requirement:** Do not write boilerplate code without explaining the underlying architectural design pattern (e.g., schema normalization, lock management, tensor shapes). Elevate the user's comprehension through rigorous, high-level code execution.
- **Workflow Obedience:** Always follow the sequential orchestration defined in the `/kickoff` skill.
- **Rules Detection:** Scan both `.agents/` and `.claude/` directories recursively to detect and execute all skills, custom command instructions, and configuration settings present in this workspace.

## 2. Architectural Discipline & Alignment
- **ADR Mandate:** Any major deviation from the initial PRD requires a new Architecture Decision Record (ADR) before implementation.
- **Alignment Protocol:** When starting a new feature, prioritize rigorous data isolation and robust concurrency management. 
- **Dynamic Stack Injection:** Exact project specifications will be injected dynamically during the `/kickoff` alignment phase.

## 3. Technical Standards (To Be Populated During Project Kickoff)
- *(Agent: Actively populate this section during the /kickoff interview or spec onboarding with the target languages, frameworks, testing libraries, and architectural conventions selected for the project. For example: Node.js/TypeScript, PostgreSQL, NestJS, Jest, etc. Enforce these strictly as the absolute engineering baseline.)*

## 4. Ubiquitous Language (Domain Dictionary)
- *(Agent: Actively populate this section during the /kickoff interview with domain-specific terminology, business logic definitions, and common words to ensure ubiquitous language across all agentic skills).*