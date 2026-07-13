# ⚡ SkilledAgent — Elite Developer Agent Workspace

SkilledAgent is a next-generation AI developer workspace and orchestration engine. By bundling 39 pre-configured cognitive skills and dynamic workflows directly inside your repository, SkilledAgent bridges the gap between basic script generation and elite, test-driven systems engineering.

The entire system is contained natively in the `.agents/` directory, keeping your project root pristine. It can be easily added to any project or deleted entirely with a single command.

---

## ⚡ Quick Start (Get Running in 30 Seconds)

You can activate SkilledAgent in any project instantly. Just open your terminal in the project root and do:

```bash
# 1. Install SkilledAgent natively into your current project folder
npx skilledagent
```

Then, open your AI agent (like Gemini or Claude Code) and type:

```
/kickoff
```

**That's it!** The agent will instantly load the `.agents/` workflows and walk you through the 8-phase orchestration pipeline to bootstrap, structure, and write TDD-ready code for your features.

---

## ✨ Flagship features of SkilledAgent

*   **Orchestration, Not Just Automation:** SkilledAgent doesn't just run commands; it orchestrates the entire software development lifecycle end-to-end. It guides you from vague product ideas through architectural mapping, spec synthesis, automated ticket breakdown, TDD implementation, and post-implementation review.
*   **Dynamic Skill Selection & Sequencing:** Rather than following a rigid scripting path, SkilledAgent is truly agentic. Under the hood, it maintains a trigger-to-skill map. If you mention that database queries are slow, it immediately shifts context, explains, and proposes `/diagnosing-bugs`. If architecture feels messy, it suggests `/improve-codebase-architecture` to render an interactive HTML before-and-after visualization.
*   **Abstraction from Complexity:** You don't need to read dozens of skill files or understand which command does what. By running `/kickoff`, the workspace guides you through the complex skill repository, letting you focus on answering questions and approving decisions while the system chooses the right skills underneath.
*   **Rigorous Architectural Blueprinting:** SkilledAgent enforces system design rigor. Coding never begins without an approved spec (`/to-spec`) and a complete breakdown of vertical-slice, tracer-bullet tickets (`/to-tickets`).
*   **Conversational Grilling & Context Integration:** Through `/grilling` and `/grill-with-docs`, the agent will stress-test your design tree one question at a time. It identifies ambiguities, extracts a ubiquitous domain language dictionary, and writes it directly to `CONTEXT.md` before generating code.

---

## 📁 Repository structure

Once installed, your workspace is supercharged with:
*   `.agents/skills/` — 39 custom cognitive capabilities (e.g. `/wayfinder`, `/implement`, `/tdd`, `/code-review`, `/qa`, `/improve-codebase-architecture`).
*   `.agents/workflows/` — Orchestrated markdown workflows (like `/kickoff`) that chain skills together.
*   `.agents/CONTEXT.md` — The global source-of-truth for technical standards, ubiquitous language, and system design rules.
*   `.agents/AGENTS.MD` — The instruction manual for agent routing tables.
*   `.agents/AGENTS_README.md` — The operations & command guide.
*   `.agents/skills-lock.json` — Lockfile specifying installed capabilities.

---

## 🚀 How It Works (Next Steps)

After running the quick installation above, the `/kickoff` command turns the AI agent into an active collaborator. Instead of manual prompt-engineering, you get a fully structured, 8-phase pipeline that drives your idea from a tentative concept into a working, automated TDD implementation.

### Clean Removal
At any point, if you want to remove all agent behaviors and return to a standard codebase, just delete the `.agents/` folder. Absolutely zero config/cache files are left in your repository root:

*   **Linux / macOS:** `rm -rf .agents`
*   **PowerShell:** `Remove-Item -Recurse -Force .agents`
*   **Command Prompt:** `rmdir /s /q .agents`

---

For complete command details, refer to the operations guide at [.agents/AGENTS_README.md](.agents/AGENTS_README.md).
