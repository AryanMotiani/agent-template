# ⚙️ Agentic Skeleton: Operations & Command Guide

This directory contains all required AI skills, rules, and configuration. The following guide dictates how to use this template in your project.

> [!NOTE]
> This folder is designed to bootstrap AI-assisted development. All files live inside `.agents/` so you can easily remove the template from your project at any time.

---

## ⚖️ The Golden Laws (What You Must Enforce)

As the Orchestrator, you must constantly hold the AI accountable to these standards. If it violates them, halt execution. 

1. **The Pedagogical Mandate:** Your goal is mastery over deep backend systems and AI/ML architectures. If the agent outputs complex logic (e.g., tensor operations, advanced concurrency, or strict Pydantic validation), force it to explain the *why* before you accept the code.
2. **Anti-Vibe Coding:** Code is never written without a blueprint. The Red-Green-Refactor loop (`/tdd`) is absolute.
3. **Data Rigor:** Never accept flat database schemas. Enforce BCNF normalization and robust concurrency management (avoiding reader-writer starvation).
4. **Context Authority:** The agent is forbidden from silently changing its own rules. All updates to `.agents/CONTEXT.md` or the skills must be transparent and verified by you.

---

## 🚀 Scaffolding & Setup Guide

This operations guide is copied into your project's `.agents/` directory.

### What Gets Copied
The template scaffold includes:
* **AI Skills:** Pre-configured capabilities (located in `.agents/skills/`) for standard developer tasks.
* **CONTEXT.md:** Global rules, ubiquitous language, and system architecture definitions (located in `.agents/CONTEXT.md`).
* **AGENTS.MD:** Workspace mapping and skill routing tables (located in `.agents/AGENTS.MD`).
* **skills-lock.json:** Secure lockfile specifying installed capabilities (located in `.agents/skills-lock.json`).

> [!NOTE]
> The scaffold ONLY adds AI workflow and configuration files inside `.agents/`. Your project source code remains untouched, and the entire template can be cleaned up cleanly by deleting this folder.

---

## 🛤️ Choose Your Workflow

### Workflow A — New Project
If starting a brand new project in an empty directory:

1. **Initialize Directory & Git:**
   ```bash
   mkdir MyProject
   cd MyProject
   git init
   ```
2. **Scaffold the Workspace:**
   ```bash
   npx -y giget@latest github:AryanMotiani/agent-template/.agents .agents
   ```
   *(Note: Replace `AryanMotiani/agent-template` with your own repository path if you have forked or customized the template).*

---

### Workflow B — Existing Repository
If injecting the template into your primary project repository:

1. **Navigate to project directory:**
   ```bash
   cd your-existing-project-folder
   ```
2. **Download the Template Folder:**
   ```bash
   npx -y giget@latest github:AryanMotiani/agent-template/.agents .agents
   ```
   *(Note: Replace `AryanMotiani/agent-template` with your own repository path if you have forked or customized the template. Since everything is isolated within `.agents`, it will not conflict with or overwrite any root files, like your project's `README.md` or `.gitignore`!)*

---

## 🔍 Verification & First Steps

### 1. Verify Scaffolded Files
Confirm that your target project directory now contains the following:
```text
.agents/
  ├── skills/
  ├── CONTEXT.md
  ├── AGENTS.MD
  ├── AGENTS_README.md
  └── skills-lock.json
```
*(Note: The skills are copied directly into the project and should be available to your AI agent. If they are not detected immediately, reload the workspace or restart the AI session.)*

### 2. Initiate the Project Kickoff (`/kickoff`)
Once the folder has been scaffolded, open it in your IDE (e.g. VS Code, Cursor), and start the `/kickoff` skill. Paste this prompt into the AI agent chat:
> "I have a new project idea: `[INSERT YOUR PROJECT IDEA/CONCEPT]`. Run the `/kickoff` skill. Begin Phase 1 and interview me to define the tech stack, data isolation, and architecture."

This command launches the Project Director workflow:
* **The Spec & Tactical Interview:** The agent will grill you with questions to clarify database normalization, concurrency, and architecture rules, and automatically update `.agents/CONTEXT.md`.
* **Verification Metrics:** The agent will prompt you to set deterministic success criteria (concurrency thresholds, test coverage, etc.).
* **PRD & Backlog Generation:** Once the synthesized PRD is approved, the agent will convert it into an actionable task list and populate issues using `/to-issues`.

### 3. Implement Tasks under strict TDD
Once the backlog issues are generated, pick up the first task (e.g., Issue #1 scaffold) and trigger the code execution loop:
> "Let's resolve Issue #1. Activate the `/tdd` skill to implement it under the strict Red-Green-Refactor loop."

---

## 🗑️ How to Delete the Template
If you ever want to completely remove this scaffolding, its custom skills, and all AI rules from your repository, run:
```bash
rm -rf .agents
```
This leaves zero leftover files in your repository.
