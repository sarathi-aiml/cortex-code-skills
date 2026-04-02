# Snowpark Connect

> Migrate and validate PySpark workloads to run on Snowflake using Snowpark Connect for Spark (SCOS).

## Overview

This skill handles PySpark-to-Snowflake migration via Snowpark Connect (SCOS). It detects whether the user wants to migrate code (convert PySpark/Databricks workloads) or validate a completed migration (verify compatibility and correctness). Each intent routes to a dedicated sub-skill with its own workflow, output format, and stopping points.

## What It Does

- Migrates PySpark and Databricks code to Snowpark Connect-compatible Python
- Updates import paths and API calls to SCOS equivalents
- Generates `_scos` suffixed output files with migration headers documenting changes made
- Validates completed SCOS migrations: checks compatibility, verifies correctness, produces pass/fail reports
- Analyzes Spark API compatibility against SCOS coverage

## When to Use

- You want to migrate PySpark or Databricks notebooks/scripts to run on Snowflake
- You've completed a SCOS migration and need to verify it's correct before production
- You need a compatibility analysis of your Spark code against Snowpark Connect support
- You're modernizing a data platform from Databricks or EMR to Snowflake

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install snowpark-connect

# Claude Code CLI
npx cortex-code-skills install snowpark-connect --claude
```

Once installed, describe your goal — for example, "migrate my PySpark ETL script to SCOS" or "validate my snowpark connect migration" — and the skill automatically routes to the correct sub-workflow. Migration produces converted `_scos` files; validation produces a structured pass/fail compatibility report.

## Files & Structure

| Folder | Purpose |
|--------|---------|
| `migrate-pyspark-to-snowpark-connect/` | Full migration workflow: convert PySpark imports, APIs, and patterns to SCOS |
| `validate-pyspark-to-snowpark-connect/` | Validation workflow: verify a completed migration for correctness and compatibility |
| `references/` | SCOS API compatibility reference and migration patterns |
| `scripts/` | Supporting automation scripts |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
