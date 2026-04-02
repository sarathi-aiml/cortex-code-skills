# Skill Development

> Create, document, or audit skills for Cortex Code — build new skills from scratch, capture session workflows as reusable skills, or review existing skills against best practices.

## Overview

This skill is the meta-skill for building Cortex Code skills. It supports three workflows: creating a new skill from scratch with proper frontmatter, routing tables, stopping points, and output structure; summarizing an existing AI session into a parameterized, reusable skill; and auditing a skill against best practices to find gaps and suggest fixes. It loads `SKILL_BEST_PRACTICES.md` before every workflow to ensure consistent, high-quality skill output.

## What It Does

- Creates new skills with correct frontmatter (`name`, `description`, triggers), workflow routing, stopping points, and structured output sections
- Extracts reusable, parameterized skills from completed session transcripts — capturing what worked as a repeatable workflow
- Audits existing skills against Cortex Code best practices and returns concrete fixes
- Guides skill authors on strong domains for Snowflake and Cortex (SQL execution, Cortex Analyst, semantic views, dbt, data validation, schema design)

## When to Use

- You want to create a new Cortex Code skill and need the correct structure and conventions
- You just completed a useful AI-assisted workflow and want to turn it into a reusable, shareable skill
- You have an existing skill that feels incomplete, inconsistent, or hard to trigger reliably
- You're contributing to the Cortex Code skills collection and want to validate your skill before submission

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install skill_development

# Claude Code CLI
npx cortex-code-skills install skill_development --claude
```

Once installed, tell the AI what you want — "create a new skill for dynamic table monitoring", "turn this session into a skill", "audit my skill file and tell me what's wrong" — and it will load `SKILL_BEST_PRACTICES.md` first, detect your intent, and route to the create, summarize, or audit sub-skill accordingly.

## Files & Structure

| Subfolder / File | Purpose |
|-----------------|---------|
| `SKILL_BEST_PRACTICES.md` | Canonical best practices reference loaded before every workflow |
| `create-from-scratch` | Step-by-step workflow for authoring a new skill from zero |
| `summarize-session` | Extract and parameterize a completed session into a skill |
| `audit-skill` | Review an existing skill and return actionable improvement recommendations |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
