# DCM (Database Change Management)

> Required entry point for ALL DCM requests: create, modify, deploy, and manage Snowflake infrastructure-as-code projects using the Snowflake CLI `snow dcm` command and `manifest.yml` DEFINE syntax.

## Overview
The DCM skill guides you through Database Change Management projects — Snowflake's infrastructure-as-code approach for defining and deploying databases, schemas, tables, views, dynamic tables, tasks, warehouses, and roles via declarative `manifest.yml` files. It enforces a mandatory initialization sequence (CLI version check, syntax overview, roles-and-grants context) before any workflow begins, and routes to sub-skills for project creation, modification, deployment, and role/grant setup.

## What It Does
- Creates new DCM projects with the correct `manifest.yml` structure using `DEFINE TABLE`, `DEFINE SCHEMA`, and related declarative syntax
- Modifies existing DCM projects — with or without local source code on hand
- Deploys infrastructure changes to Snowflake using `snow dcm` with the three-tier role pattern
- Configures roles and grants following DCM best practices for privilege separation
- Sets up data quality expectations and data metric functions within DCM-managed objects
- Analyzes object dependencies and lineage within a DCM project before deployment

## When to Use
- "Create a new DCM project for my analytics database"
- "Add a new dynamic table to my existing DCM project"
- "Deploy my DCM changes to the production environment"
- "Set up roles and grants for my DCM project following the three-tier pattern"
- "Show me the dependencies between objects in my DCM manifest"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install dcm

# Claude Code CLI
npx cortex-code-skills install dcm --claude
```

Once installed, describe your DCM goal. The skill first checks your Snowflake CLI version (3.16+ required), loads the DCM syntax overview and roles-and-grants context, then routes to the correct sub-skill for your workflow. All `snow dcm` commands require an active Snowflake connection specified with `-c <connection>`.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `create-project/` | New DCM project scaffolding and manifest initialization |
| `modify-project/` | Editing existing manifests with or without local source |
| `deploy-project/` | Deployment workflows and pre-deploy validation |
| `roles-and-grants/` | Three-tier role pattern and privilege configuration |
| `reference/` | DCM syntax reference and DEFINE keyword documentation |
| `scripts/` | Helper scripts for DCM operations |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
