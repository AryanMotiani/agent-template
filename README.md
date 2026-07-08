# ⚙️ Agentic Skeleton: Operations & Command Guide

This repository contains pre-bundled AI skills and rules to bootstrap AI-assisted development.

To keep your root directory clean and make the template easily removable, the entire template resides inside the `.agents/` folder.

## 🚀 How to Install
Run the following command in the root of your project directory:

```bash
npx -y giget@latest github:AryanMotiani/agent-template/.agents .agents
```

This will download the `.agents/` folder into your project, containing all 39 custom pre-bundled skills, rules, and global configurations.

## 📁 Repository Structure
Once scaffolded, the workspace includes:
- `.agents/skills/` - Isolated custom skills (`/kickoff`, `/tdd`, `/to-prd`, `/to-issues`, etc.)
- `.agents/CONTEXT.md` - System context repository and domain terminology glossary
- `.agents/AGENTS.MD` - AI orchestration instructions & routing guides
- `.agents/README.md` - Detailed commands, workflows, and developer guide

## 🗑️ How to Uninstall
If you want to remove the template and all of its configurations completely from your project, simply run:

```bash
rm -rf .agents
```

For detailed usage, refer to the operations guide at [.agents/README.md](file:///c:/Users/Aryan/Desktop/agent-template/.agents/README.md).
