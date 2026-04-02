# Snowflake Workspace Notebooks

> Create and edit Workspace notebooks (.ipynb files) for Snowflake — including SQL cells, Snowpark, and data analysis workflows.

## Overview

This skill handles the full lifecycle of Snowflake Workspace notebooks: creating new notebooks from scratch, editing existing ones, debugging issues, and converting Python or SQL scripts into notebook format. It targets Snowflake's Workspace notebook environment (nbformat 4.5+), not Snowsight notebooks. It solves the friction of getting notebook structure, cell types, and variable referencing exactly right for Snowflake's execution model.

## What It Does

- Creates Snowflake Workspace-compatible `.ipynb` files with correct nbformat 4.5+ structure and required cell `id` fields
- Uses SQL cells with `%%sql -r` cell referencing for standard queries — no manual connection code required
- Supports Jinja templating for parameterized SQL (Python variables passed into SQL cells)
- Generates dual-mode notebooks (run locally or in Workspace) only when explicitly requested
- Uploads completed notebooks to Snowflake Workspace via `cortex artifact create notebook` and generates direct deeplink URLs

## When to Use

- You need a new Snowflake Workspace notebook for data analysis, ETL, or reporting
- You have existing Python or SQL code you want converted to notebook format
- Your notebook is failing in Snowflake (missing cell IDs, wrong connection pattern, unsupported libraries)
- You want to run notebooks both locally and in Snowflake Workspace (dual-mode)

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install snowflake-notebooks

# Claude Code CLI
npx cortex-code-skills install snowflake-notebooks --claude
```

Once installed, describe what you want to build — for example, "Create a notebook that loads sales data from the ORDERS table and shows a daily revenue trend" — and the skill will generate a fully valid `.ipynb` file, validate it, and offer to upload it directly to your Snowflake Workspace.

## Files & Structure

| File | Purpose |
|------|---------|
| `SKILL.md` | Full skill instructions, notebook templates, cell patterns, and upload workflow |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
