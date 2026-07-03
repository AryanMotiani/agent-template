## The Stress Test

**The Attack:**
Your desire to skip terminal commands completely and have the agent handle the GitHub repository creation purely through chat is a friction point. While advanced agents can execute terminal commands, relying on them to authenticate and handle remote Git operations dynamically often leads to hallucinated CLI arguments or authentication hangs. Second, your `/kickoff` workflow is currently hardcoded to force an interview (Phase 1). If you just dump a massive, pre-written PRD into the chat and say "use this," the agent might get confused between the hardcoded instruction to ask you questions and your new instruction to just read the document.

**The Verdict:**
Your plan **survives**, but your README needs conditional prompts. You must provide the agent with a specific "Bypass" prompt when you already have a PRD, instructing it to ingest your document, update `CONTEXT.md`, and skip the interview phase. Furthermore, since you want to learn deep backend and AI/ML architectures, your README must explicitly list the pedagogical laws you need to enforce on yourself so you don't forget to hold the agent accountable.

---

Here is your definitive, copy-paste `README.md` guide. It serves as your operational manual, outlining exactly how to start projects dynamically and reminding you of the engineering laws you must enforce.

Save this in your master template.

---

```markdown
# ⚙️ Agentic Skeleton: Operations & Command Guide

This document is your personal flight manual. It dictates how to initialize projects, route workflows, and enforce rigorous engineering standards using the Agent Skills architecture. 

---

## ⚖️ The Golden Laws (What You Must Enforce)

As the Orchestrator, you must constantly hold the AI accountable to these standards. If it violates them, halt execution. 

1. **The Pedagogical Mandate:** Your goal is mastery over deep backend systems and AI/ML architectures. If the agent outputs complex logic (e.g., tensor operations, advanced concurrency, or strict Pydantic validation), force it to explain the *why* before you accept the code.
2. **Anti-Vibe Coding:** Code is never written without a blueprint. The Red-Green-Refactor loop (`/tdd`) is absolute.
3. **Data Rigor:** Never accept flat database schemas. Enforce BCNF normalization and robust concurrency management (avoiding reader-writer starvation).
4. **Context Authority:** The agent is forbidden from silently changing its own rules. All updates to `CONTEXT.md` or `SKILL.md` must be transparent and verified by you.

---

## 🚀 Phase 0: Agent-Driven Initialization

If you want to skip manual terminal setup and let the AI handle the boilerplate, open a completely empty folder in your IDE, open your AI chat, and paste this exact prompt:

> **Prompt:** "I am starting a new project in this directory. Execute the following terminal commands to initialize the workspace:
> 1. Run `git init`.
> 2. Run `gh repo create [INSERT-PROJECT-NAME] --private --source=. --remote=origin` (I am already authenticated).
> 3. Run `npx skills@latest add mattpocock/skills` and ask me how to answer the interactive prompts.
> Do not generate any code yet."

---

## 🛤️ Phase 1: The Kickoff Routing

Choose your path based on what you have prepared.

### Path A: Starting from Scratch (Just an Idea)
You have a basic concept but need the agent to help you design the architecture. 

> **Prompt:** "I have a new project idea: [INSERT BRIEF IDEA]. Execute the `/kickoff` skill. Begin Phase 1 and interview me to define the tech stack, data isolation, and architecture."

### Path B: You Already Have a Draft PRD or Implementation Plan
You wrote the documentation beforehand, but it needs to be stress-tested for vulnerabilities before execution.

> **Prompt:** "I have drafted the core implementation plan for this project. 
> 
> [PASTE YOUR PRD/PLAN HERE]
> 
> Execute the `/kickoff` skill, but **modify Phase 1**: Read this document and act as a sharp, skeptical reviewer. Do not blindly accept my plan. Stress-test my architecture. Grill me on the loopholes, missing edge cases, concurrency risks, data isolation flaws, and impracticalities. Build the strongest case against my design. Ask me hard questions to ensure we are completely in sync. 
> 
> Once we have debated and resolved these flaws, update the draft, extract the Ubiquitous Language into `CONTEXT.md`, and then ask me for the Verification Metrics (Phase 2)."

---

## 🎯 Phase 2: Verification & Backlog

Once the alignment is complete (either via interview or ingestion), the agent will ask for your deterministic verification criteria. 

**Example responses to give the agent:**
* "API endpoints must pass 100% of test cases under 100ms."
* "The data ingestion pipeline must be completely decoupled from the user-facing API."
* "The database must strictly follow BCNF."

After you lock the criteria, authorize the agent to move forward:
> **Prompt:** "Verification criteria locked. Execute Phase 3 to finalize the PRD and run `/to-issues` to populate the backlog. Issue #1 must be the project directory scaffolding."

---

## 🛠️ Phase 3: Execution

With your GitHub/Linear issues created, drop into the strict engineering loop. Pick up the first issue and paste:

> **Prompt:** "The backlog is ready. Activate the `/tdd` skill to implement Issue #1. Follow the strict Red-Green-Refactor loop. Ensure all actions align with the architectural rules now defined in `CONTEXT.md`."

```