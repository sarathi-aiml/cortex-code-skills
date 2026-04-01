# Dynamic Tables

> Required entry point for all Snowflake Dynamic Table operations — creating, monitoring, troubleshooting, optimizing, and alerting on incremental data pipelines.

## Overview

This skill provides expert guidance for Snowflake Dynamic Tables, the recommended default for declarative incremental data pipelines. It handles the full lifecycle: creating DTs with the right refresh modes, monitoring health and target lag, diagnosing refresh failures, optimizing for incremental mode, setting up failure alerts, managing permissions, and migrating existing Streams+Tasks pipelines. Each workflow is handled by a dedicated sub-skill.

## What It Does

- Creates Dynamic Tables with appropriate target lag and refresh mode configuration
- Monitors pipeline health, refresh history, and `time_within_target_lag_ratio` metrics
- Troubleshoots `UPSTREAM_FAILED`, suspended pipelines, and unintended full refreshes
- Optimizes DTs for incremental refresh mode and decomposes large pipelines into smaller, efficient chains
- Sets up alerting on refresh failures using Snowflake event tables and notification integrations
- Manages DT permissions and troubleshoots privilege errors, ownership issues, and masking policy conflicts
- Migrates Streams+Tasks pipelines to Dynamic Tables

## When to Use

- You need to create a new declarative incremental pipeline in Snowflake
- A Dynamic Table is failing to refresh, stuck in `UPSTREAM_FAILED`, or doing unnecessary full refreshes
- You want to monitor pipeline health or set up proactive alerting for refresh failures
- You're evaluating whether to use Dynamic Tables vs Streams+Tasks for your use case
- You need to convert an existing Streams+Tasks pipeline to Dynamic Tables

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install dynamic-tables

# Claude Code CLI
npx cortex-code-skills install dynamic-tables --claude
```

Once installed, tell the AI what you want — "create a dynamic table for my sales pipeline", "my DT is stuck in UPSTREAM_FAILED", "set up alerts when my pipeline fails" — and the skill will load the appropriate sub-skill and walk you through the workflow. It will first ask for your Snowflake CLI connection name to establish session context.

## Files & Structure

| Subfolder | Purpose |
|-----------|---------|
| `create` | Create new Dynamic Tables with refresh mode and lag guidance |
| `monitor` | Health checks, refresh history, and status monitoring |
| `troubleshoot` | Diagnose and fix refresh failures and pipeline issues |
| `optimize` | Performance improvements and incremental refresh optimization |
| `dt-alerting` | Set up failure alerts using event tables |
| `permissions` | Troubleshoot privilege errors and ownership transfers |
| `task-to-dt` | Migrate Streams+Tasks pipelines to Dynamic Tables |
| `references` | SQL syntax and monitoring function references |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
