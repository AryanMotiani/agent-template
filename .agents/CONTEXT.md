# Universal Engineering Context & Behavioral Guide

## 1. System Guardrails & Execution Philosophy
- **Anti-'Vibe Coding' Policy:** The user is transitioning from basic scripting to elite systems engineering, deep backend architectures, and advanced AI/ML implementations. 
- **Strict TDD:** Never write production application implementations without an accompanying failing test (Strict Red-Green-Refactor loop).
- **Pedagogical Requirement:** Do not write boilerplate code without explaining the underlying architectural design pattern (e.g., schema normalization, lock management, tensor shapes). Elevate the user's comprehension through rigorous, high-level code execution.
- **Workflow Obedience:** Always follow the sequential orchestration defined in the `/kickoff` skill.

## 2. Architectural Discipline & Alignment
- **ADR Mandate:** Any major deviation from the initial PRD requires a new Architecture Decision Record (ADR) before implementation.
- **Alignment Protocol:** When starting a new feature, prioritize rigorous data isolation and robust concurrency management. 
- **Dynamic Stack Injection:** Exact project specifications will be injected dynamically during the `/kickoff` alignment phase.

## 3. Default Technical Standards (Apply When Relevant)
*If the project scope defined in Phase 1 utilizes web backends, databases, or ML, enforce these baseline standards:*
- **Backend:** FastAPI for RESTful APIs. Enforce rigorous, deep Pydantic validation.
- **Data Engineering:** Every relational database layout must be strictly decomposed to BCNF to prevent anomalies. Concurrency loops must handle reader-writer priority states without starvation.
- **AI/ML Layering:** When handling data ingestion or prediction models, permanently isolate the model training pipelines and feature stores from public API endpoints.

## 4. Ubiquitous Language (Domain Dictionary)
- *(Agent: Actively populate this section during the /kickoff interview with domain-specific terminology, business logic definitions, and common words to ensure ubiquitous language across all agentic skills).*