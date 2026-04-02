# Cortex Agent

> Required entry point for ALL Cortex Agent workflows: list, create, edit, delete, debug, evaluate, optimize, and observe agents — including Snowflake Intelligence (SI) powered by Cortex Agents.

## Overview
The Cortex Agent skill is the single gateway for every agent lifecycle operation on Snowflake. It loads a system-of-record and best-practices context at session start, then routes to focused sub-skills for create, edit, debug, evaluate, and optimize workflows. It prevents unsafe modifications by prompting users to clone production agents before making changes.

## What It Does
- Creates new Cortex Agents through a guided, best-practices-driven workflow
- Edits or modifies existing agents — with a production-safety clone prompt before any changes
- Runs formal evaluations and benchmarks against agent accuracy metrics
- Debugs individual queries or Snowflake Intelligence request IDs through root-cause analysis
- Manages evaluation datasets: curation, question addition, and dataset lifecycle
- Optimizes Cortex Search services and agent performance based on evaluation findings

## When to Use
- "Create a new Cortex Agent for my sales data" or "Set up an agent with Cortex Search"
- "Why did this agent response fail?" or "Debug SI request ID abc123"
- "Evaluate my agent — show accuracy metrics and failure patterns"
- "Edit the agent instructions for my support bot"
- "Optimize my Cortex Search service for better retrieval"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install cortex-agent

# Claude Code CLI
npx cortex-code-skills install cortex-agent --claude
```

Once installed, describe what you want to do with a Cortex Agent in plain English. The skill loads the agent system-of-record and best practices automatically, then routes to the correct sub-skill based on your intent (create, edit, debug, evaluate, etc.).

## Files & Structure

| Folder | Description |
|--------|-------------|
| `agent-system-of-record/` | Tracks all agents; required first load for every session |
| `best-practices/` | Agent development standards loaded at session start |
| `create-cortex-agent/` | Guided new-agent creation workflow |
| `edit-cortex-agent/` | Safe agent modification with production-clone prompts |
| `debug-single-query-for-cortex-agent/` | Single-query and SI request ID debugging |
| `evaluate-cortex-agent/` | Formal evaluation and benchmark workflows |
| `dataset-curation/` | Evaluation dataset creation and management |
| `optimize-cortex-agent/` | Agent and Cortex Search optimization |
| `adhoc-testing-for-cortex-agent/` | Interactive test-question sessions |
| `investigate-cortex-agent-evals/` | Deep-dive into evaluation results |
| `agent-observability-report/` | Observability and monitoring reports |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
