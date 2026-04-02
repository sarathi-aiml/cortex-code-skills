# Snowpark Python

> Deploy Snowpark Python data pipelines, UDFs, UDAFs, UDTFs, and stored procedures to Snowflake using the Snowpark Python API and Snow CLI.

## Overview

This skill covers the full Snowpark Python development lifecycle: planning data pipelines, writing Snowpark DataFrame code, running and debugging locally with `uv`, and deploying as stored procedures via the Snow CLI. It targets data engineers building ETL/ELT workloads in Python that run directly inside Snowflake compute. The skill uses `uv` for dependency management and follows a structured project layout with separate source, test, and config layers.

## What It Does

- Plans and writes Snowpark Python data pipelines (load, transform, save to Snowflake tables or stages)
- Deploys Python code as Snowflake stored procedures (UDF, UDAF, UDTF, SP) using Snow CLI or direct registration
- Runs and iterates on code using `uv`, fixing errors and surfacing permission issues to `configs.sql`
- Generates `pyproject.toml`-based project scaffolding with proper `src/` layout and `tests/` structure
- Creates test data and `pytest` test code when explicitly requested

## When to Use

- You need to build a Snowpark Python ETL pipeline and deploy it as a stored procedure
- You want to register a Python UDF, UDAF, or UDTF in Snowflake
- You're migrating a SQL or Python script into a managed Snowpark deployment
- You need to debug a failing Snowpark pipeline or fix permission/configuration errors

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install snowpark

# Claude Code CLI
npx cortex-code-skills install snowpark --claude
```

Once installed, describe your pipeline or deployment need — for example, "build a Snowpark pipeline that loads CSV from a stage, joins with customers, and writes to GOLD.ORDERS" — and the skill will plan the steps, write the code, run it via `uv`, and walk you through deployment. Requires `uv` installed locally.

## Files & Structure

| Folder | Purpose |
|--------|---------|
| `references/` | Deployment reference (`snowpark-deployment.md`) covering Snow CLI, `snowflake.yml`, stored procedure registration |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
