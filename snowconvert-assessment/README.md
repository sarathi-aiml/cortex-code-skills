# SnowConvert Assessment

> Analyze migration workloads using SnowConvert reports to generate deployment waves, detect object exclusions, and assess dynamic SQL and ETL complexity before migrating to Snowflake.

## Overview

This skill processes SnowConvert CSV assessment outputs to produce structured migration plans. It routes to specialized sub-skills for wave generation, object exclusion detection, dynamic SQL pattern analysis, and SSIS/ETL assessment. The skill always presents a welcome message and confirms inputs before running any analysis, and it generates interactive HTML reports after each assessment run.

## What It Does

- Generates deployment waves from SnowConvert object metadata, with configurable wave count and prioritization rules
- Detects object exclusions and analyzes dependency graphs from `ObjectReferences.csv` and `TopLevelCodeUnits.csv`
- Analyzes dynamic SQL patterns from `Issues.csv` to identify high-risk migration objects
- Assesses ETL workloads (SSIS) using `ETL.Elements.csv` and `ETL.Issues.csv`
- Produces interactive HTML reports with wave summaries, object counts, and migration readiness metrics

## When to Use

- You have SnowConvert CSV outputs and need a structured deployment plan with ordered waves
- You want to understand which objects should be excluded or deprioritized before migrating
- You need to identify dynamic SQL patterns that require manual intervention during migration
- You're assessing an SSIS or ETL workload for Snowflake migration complexity

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install snowconvert-assessment

# Claude Code CLI
npx cortex-code-skills install snowconvert-assessment --claude
```

Once installed, provide the path to your SnowConvert reports directory and an output directory. The skill will confirm details and any specific goals (wave count limits, object prioritization) before running. Requires Python 3.11+ and `uv` (`brew install uv` or `pip install uv`).

## Files & Structure

| Folder | Purpose |
|--------|---------|
| `waves-generator/` | Deployment wave generation with configurable sizing and prioritization |
| `object_exclusion_detection/` | Detect and document objects to exclude from migration scope |
| `analyzing-sql-dynamic-patterns/` | Identify dynamic SQL patterns that need manual migration work |
| `etl-assessment/` | SSIS and ETL workload complexity assessment |
| `scripts/` | Python analysis scripts processing SnowConvert CSV outputs |
| `resources/` | Reference data and supporting assets |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
