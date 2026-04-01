# Workload Performance Analysis

> Diagnose Snowflake query and warehouse performance problems using ACCOUNT_USAGE views — spilling, pruning, cache rates, clustering, search optimization, and query acceleration.

## Overview

This skill is a unified performance analysis entry point that routes to specialized sub-skills based on what you're investigating. It detects the entity type (a specific query ID, warehouse name, table, or performance pattern) and the right depth of analysis, then runs targeted ACCOUNT_USAGE queries to surface root causes. It also supports UI-injected context (when invoked from the Snowflake UI with query or warehouse context already loaded).

## What It Does

- Diagnoses query-level performance: execution plan issues, spilling, pruning inefficiency, and cache behavior
- Identifies recurring query patterns by parameterized hash for workload-level optimization
- Analyzes warehouse-level metrics: per-warehouse spill, prune ratios, and cache hit rates
- Identifies clustering key candidates, search optimization (SOS) candidates, and query acceleration (QAS) eligible queries
- Supports UI context mode — parses injected `${...}` variables directly instead of re-running SQL

## When to Use

- A specific query ID is slow and you need to understand why (spilling, poor pruning, etc.)
- You want to find the worst-performing recurring query patterns across a warehouse
- You need to identify which tables would benefit from clustering keys or search optimization
- You're evaluating query acceleration service (QAS) eligibility for a workload

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install workload-performance-analysis

# Claude Code CLI
npx cortex-code-skills install workload-performance-analysis --claude
```

Once installed, provide a query ID, warehouse name, table name, or describe what you're seeing — for example, "this query is spilling to remote storage" or "which tables should I cluster in ANALYTICS_WH" — and the skill detects the entity type and routes to the appropriate sub-skill for analysis and recommendations.

## Files & Structure

| Folder | Purpose |
|--------|---------|
| `query/` | Single query deep-dive: execution plan, spill, prune, cache |
| `query-pattern/` | Recurring query pattern analysis by parameterized hash |
| `warehouse/` | Per-warehouse performance metrics and health |
| `table/` | Table-level scan and clustering analysis |
| `spilling/` | Spill-to-disk and remote spill diagnostics |
| `pruning/` | Partition pruning efficiency analysis |
| `cache/` | Local disk and warehouse cache hit rate analysis |
| `qas/` | Query acceleration service eligibility assessment |
| `account/` | Account-wide workload summary |
| `semantic_model/` | Semantic model for Cortex Analyst integration |
| `references/` | ACCOUNT_USAGE view reference and query templates |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
