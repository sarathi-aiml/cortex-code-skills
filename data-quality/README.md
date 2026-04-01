# Data Quality

> Schema-level data quality monitoring, table comparison, dataset popularity analysis, and ad-hoc column quality assessment using Snowflake Data Metric Functions (DMFs) and Access History.

## Overview

This skill monitors, analyzes, and enforces data quality across Snowflake schemas using Data Metric Functions (DMFs). It targets the common problem of understanding whether your data is trustworthy — surfacing failing metrics, quality trends, and regression signals. It also covers table comparison for migration validation and dataset popularity analysis for governance prioritization.

## What It Does

- Run schema-wide health checks and quality scoring using DMF results from `SNOWFLAKE.LOCAL.DATA_QUALITY_MONITORING_RESULTS()`
- Detect quality regressions, trends over time, and root causes for failing metrics
- Set up SLA alerting with Snowflake ALERT objects that trigger on DMF violations
- Compare two tables (dev vs prod, before vs after migration) to find row-level diffs and schema differences
- Profile columns and recommend which DMFs to attach, with generated DDL ranked by criticality
- Run ad-hoc one-time quality assessments using inline `SNOWFLAKE.CORE.*` functions — no DMF setup required
- Build circuit breakers that pause downstream pipelines when quality violations are detected
- Create custom DMFs for format validation, value range checks, and referential integrity

## When to Use

- You want to know if a schema's data can be trusted before a downstream report or pipeline runs
- A quality regression occurred and you need to trace what changed and when
- You are validating a data migration or reconciling dev vs prod tables
- You want to set up continuous DMF-based monitoring for a schema that has none yet

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install data-quality

# Claude Code CLI
npx cortex-code-skills install data-quality --claude
```

Once installed, ask about schema health ("can I trust my data in DB.SCHEMA?"), quality regressions, DMF setup, or table comparisons. The skill runs a preflight check first to detect whether DMFs are attached, then routes to the appropriate workflow — or offers an ad-hoc assessment if no DMFs exist yet.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `workflows/` | Individual workflow files: health scoring, root cause, regression detection, trend analysis, SLA alerting, table comparison, popularity, ad-hoc assessment, monitor recommendations, coverage gaps, circuit breaker, custom DMF patterns, expectations management |
| `templates/` | SQL templates referenced by workflows — one per query type (preflight, health snapshot, regression, alerts, etc.) |
| `reference/` | DMF concepts and best practices documentation |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
