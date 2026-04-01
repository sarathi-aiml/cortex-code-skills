# dbt Projects on Snowflake

> Deploy and run dbt Core projects directly inside Snowflake as native objects using the `snow dbt` CLI and `EXECUTE DBT PROJECT` SQL.

## Overview

This skill covers Snowflake's native dbt integration — where dbt projects are deployed as first-class Snowflake objects and executed via SQL, not from a local terminal. It is scoped exclusively to the `snow dbt deploy` / `EXECUTE DBT PROJECT` workflow, which uses unique syntax that differs from standard dbt CLI commands. It does not apply to local dbt development (`dbt run`, `dbt build`, profiles.yml editing, or CI/CD pipelines).

## What It Does

- Deploy a dbt project to Snowflake as a native object using `snow dbt deploy` with optional external access integration
- Execute deployed projects with `snow dbt execute` or `EXECUTE DBT PROJECT` SQL, including model selection with `+target+` syntax
- Schedule deployed dbt projects using `CREATE TASK ... AS EXECUTE DBT PROJECT`
- Manage deployed project objects: list, describe, rename, add versions, drop
- Monitor execution logs, artifacts, and archive history for deployed projects
- Migrate existing dbt projects to Snowflake-native format, handling `env_var` conversions and project compatibility requirements
- Generate dbt documentation and data catalog for deployed projects

## When to Use

- You want to run dbt models inside Snowflake without a local dbt runner or CI/CD pipeline
- You see `snow dbt`, `EXECUTE DBT PROJECT`, or a dbt project object in a Snowflake schema
- You need to schedule a deployed dbt project with a Snowflake Task
- You are migrating a dbt project to the Snowflake-native format

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install dbt-projects-on-snowflake

# Claude Code CLI
npx cortex-code-skills install dbt-projects-on-snowflake --claude
```

Once installed, describe what you want to do with your dbt project — deploy it, run it, schedule it, or manage it. The skill detects your intent (DEPLOY / EXECUTE / MANAGE / SCHEDULE / MONITOR / MIGRATE) and loads the appropriate sub-skill with the exact `snow dbt` syntax required.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `deploy/` | Sub-skill for deploying dbt projects to Snowflake with `snow dbt deploy` |
| `execute/` | Sub-skill for running deployed projects, including docs generation (critical syntax) |
| `manage/` | Sub-skill for listing, describing, renaming, and dropping deployed project objects |
| `schedule/` | Sub-skill for creating Snowflake Tasks that execute deployed dbt projects |
| `monitoring/` | Sub-skill for accessing execution logs, artifacts, and archive data |
| `migrate/` | Sub-skill for migrating existing dbt projects to Snowflake-native format |
| `references/` | Supporting reference documentation |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
