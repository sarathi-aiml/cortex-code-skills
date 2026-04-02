# Lineage

> Analyze data lineage and dependencies in Snowflake — impact analysis, root cause debugging, data discovery, and column-level tracing.

## Overview

This skill navigates Snowflake's data dependency graph to answer four core questions: what breaks if I change this object, why is this number wrong, which dataset should I use, and where does this column come from. It uses `SNOWFLAKE.CORE.GET_LINEAGE()` as the primary API for object and data-movement lineage, with `ACCOUNT_USAGE.OBJECT_DEPENDENCIES` and `ACCESS_HISTORY` as fallbacks. All queries are read-only and execute immediately without confirmation prompts.

## What It Does

- Runs downstream impact analysis to identify which views, tables, and dynamic tables depend on a given object — with risk tiers and affected user counts
- Traces upstream lineage to find root causes of incorrect data, recent schema changes, and data modification events
- Discovers and recommends trusted datasets based on provenance, usage frequency, and trust scoring against configurable schema patterns
- Traces column-level dependencies downstream (what uses this column) and upstream (where does this column come from)
- Handles privilege fallbacks gracefully: tries `GET_LINEAGE()` first, falls back to `OBJECT_DEPENDENCIES` or `GET_DDL()` on error

## When to Use

- You're about to change a table or column and need to know what downstream objects could break
- A report or metric is showing wrong values and you need to trace where the bad data entered the pipeline
- You want to find the most reliable dataset for a given analytical use case
- You need to understand the full transformation path of a specific column across your data layers
- You're assessing data trustworthiness before using a table for business reporting

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install lineage

# Claude Code CLI
npx cortex-code-skills install lineage --claude
```

Once installed, reference the object you want to analyze using `DATABASE.SCHEMA.TABLE` format (or add `.COLUMN` for column-level tracing) and describe what you need — "what depends on RAW_DB.SALES.ORDERS", "where does REVENUE.TOTAL_SALES come from", "which table should I use for customer analytics" — and the skill will execute the appropriate query and return formatted results immediately.

## Files & Structure

| Subfolder | Purpose |
|-----------|---------|
| `workflows` | Four workflow files: impact analysis, root cause, data discovery, column lineage |
| `templates` | SQL templates with placeholders for all four workflows, including fallback variants |
| `config` | `schema-patterns.yaml` for configuring trust tiers and risk scoring by schema name pattern |
| `reference` | Snowflake API reference, dynamic trust scoring documentation |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
