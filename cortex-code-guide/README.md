# Cortex Code Guide

> Complete reference for Cortex Code (CoCo) — Snowflake's AI-powered coding assistant CLI — covering commands, shortcuts, configuration, skills, MCP integration, hooks, agents, sessions, and Snowflake-native tools.

## Overview
The Cortex Code Guide skill is a structured, navigable reference for the Cortex Code CLI. It routes questions to the right reference file across nine topic areas: slash commands, keyboard shortcuts, configuration, the skills system, MCP server integration, the hooks system, the agent and task system, Snowflake-native tools, and session management. Use it whenever you need to learn, troubleshoot, or extend Cortex Code behavior.

## What It Does
- Explains CLI startup options, non-interactive mode, and connection management
- Documents every slash command (`/plan`, `/bypass`, `/compact`, `/fork`, `/rewind`, `/diff`, `/agents`, etc.)
- Covers all keyboard shortcuts including `@` file completion, `#` Snowflake table syntax, `$` skill tagging, and `!` bash execution
- Details configuration via `~/.snowflake/cortex/settings.json` and environment variables
- Explains the skills system: installation, tagging with `$`, and authoring custom skills
- Describes MCP server setup, tool discovery, and integration patterns
- Documents hooks for pre/post action automation and the agent task system for background work
- Covers Snowflake-native tools: `snowflake_sql_execute`, `snowflake_object_search`, `ai_browser`, and more

## When to Use
- "How do I resume a previous session?" or "What does /compact do?"
- "How do I configure Cortex Code to use a different model?"
- "What is the #table syntax and how does it work?"
- "How do I add an MCP server to Cortex Code?"
- "How do I write a custom skill and install it?"
- "What keyboard shortcuts are available?"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install cortex-code-guide

# Claude Code CLI
npx cortex-code-skills install cortex-code-guide --claude
```

Once installed, ask any question about Cortex Code features or behavior. The skill routes to the relevant reference file (COMMANDS.md, SHORTCUTS.md, CONFIGURATION.md, SKILLS.md, MCP.md, HOOKS.md, AGENTS.md, SNOWFLAKE.md, or SESSIONS.md) and returns precise, actionable guidance.

## Files & Structure

| File | Description |
|------|-------------|
| `COMMANDS.md` | CLI flags and all slash commands |
| `SHORTCUTS.md` | Keyboard shortcuts and input modes |
| `CONFIGURATION.md` | settings.json and environment configuration |
| `SKILLS.md` | Skills system: install, tag, and author skills |
| `MCP.md` | MCP server setup and tool integration |
| `HOOKS.md` | Pre/post action hooks for automation |
| `AGENTS.md` | Agent and background task system |
| `SNOWFLAKE.md` | Snowflake-native tools reference |
| `SESSIONS.md` | Session management: resume, fork, rewind |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
