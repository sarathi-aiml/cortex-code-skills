# Cost Intelligence

> Use for ALL Snowflake cost and billing questions: spending, credits, compute, storage, budgets, resource monitors, anomalies, query costs, and top spenders.

## Overview
The Cost Intelligence skill routes every Snowflake cost and billing question to the right query pattern or sub-skill. It targets `SNOWFLAKE.ACCOUNT_USAGE` views directly — bypassing semantic views entirely — and covers everything from per-warehouse credit burn to serverless task metering, budget lifecycle management, and anomaly detection.

## What It Does
- Identifies top spenders, expensive queries, and query patterns grouped by parameterized hash
- Breaks down credits by service type: warehouses, serverless tasks, Snowpipe, Cortex/AI, and storage
- Tracks week-over-week and month-over-month cost trends and surfaces spending spikes
- Manages Snowflake Budgets (account budget and custom budgets) with correct class-instance syntax
- Routes anomaly detection and alert configuration to the `anomaly-insights` sub-skill

## When to Use
- "Who is spending the most this month?" or "Show me the most expensive queries"
- "Why did my credits spike last week?" or "Compare this month to last month"
- "Create a budget for warehouse X with a $500 threshold" or "Show all budget instances"
- "What are my Cortex/AI costs?" or "Break down serverless task credits"
- "Set up an anomaly notification for unusual spending"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install cost-intelligence

# Claude Code CLI
npx cortex-code-skills install cost-intelligence --claude
```

Once installed, ask any Snowflake cost or billing question in plain English. The skill routes your request to the correct `ACCOUNT_USAGE` query template or sub-skill automatically — no need to specify view names or query patterns yourself.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `references/queries/` | Pre-built query templates: warehouses, users, trends, serverless, storage, overview |
| `skills/anomaly-insights/` | Sub-skill for anomaly detection, alerts, and notification setup |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
