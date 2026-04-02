# Semantic View

> The required entry point for all semantic view workflows — create, debug, optimize, and generate verified query representations (VQRs) for Cortex Analyst.

## Overview

This skill guides you through the full lifecycle of Snowflake semantic views used with Cortex Analyst. It covers creation, setup, auditing, VQR (verified query representation) suggestion generation, and SQL generation debugging. The skill enforces a mandatory initialization sequence to ensure logical vs. physical column mapping is understood before any changes are made to a semantic view.

## What It Does

- Creates and audits semantic views with correct logical/physical column mapping
- Generates VQR suggestions to seed verified queries for Cortex Analyst
- Debugs SQL generation failures from semantic view misconfiguration
- Validates semantic view structure and optimizes for query accuracy
- Manages session working directories and tracks time across multi-step workflows

## When to Use

- You need to create a new semantic view for Cortex Analyst from scratch
- A Cortex Analyst semantic view is generating wrong or failing SQL
- You want to add or improve verified query representations (VQRs)
- You need to audit an existing semantic view for correctness or coverage gaps

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install semantic-view

# Claude Code CLI
npx cortex-code-skills install semantic-view --claude
```

Once installed, provide the fully qualified semantic view name (`DATABASE.SCHEMA.VIEW_NAME`) and describe your goal. The skill will walk through mandatory initialization (loading core concepts and setup), then route you to the appropriate sub-workflow. Requires `snowflake-connector-python`, `pyyaml`, `tomli`, `urllib3`, and `requests`.

## Files & Structure

| Folder | Purpose |
|--------|---------|
| `creation/` | Guided workflow for building a new semantic view |
| `audit/` | Audit an existing semantic view for correctness |
| `debug/` | Diagnose and fix SQL generation failures |
| `optimization/` | Improve semantic view query performance and coverage |
| `vqr_suggestions/` | Generate verified query representations for Cortex Analyst |
| `validation/` | Validate semantic view structure and field mappings |
| `setup/` | Session initialization, working directory setup |
| `reference/` | Core concepts: logical/physical tables, semantic model rules |
| `scripts/` | `semantic_view_get.py` and `semantic_view_set.py` tooling |
| `upload/` | Upload semantic view artifacts to Snowflake |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
