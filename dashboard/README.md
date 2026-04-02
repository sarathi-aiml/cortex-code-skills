# Dashboard

> Create, modify, and troubleshoot interactive dashboards with charts, tables, scorecards, and markdown widgets using the DashboardSpec JSON format.

## Overview
The Dashboard skill generates and edits `DashboardSpec` JSON objects for Snowflake's interactive dashboard system. It targets both local `.dash` files (viewable in Snowsight Workspaces) and streaming JSON responses for Snowflake Intelligence and Cortex. The skill handles everything from layout planning on a 12-column grid to writing SQL queries, defining interactive filter variables, and troubleshooting rendering issues.

## What It Does
- Generates complete `DashboardSpec` JSON objects with charts, tables, scorecards, and markdown widgets
- Plans 12-column grid layouts with semantically named widget IDs
- Adds interactive filter variables (selection, date range, text) with SQL parameter binding
- Modifies existing dashboards: add/remove/update widgets, fix queries, change layout
- Troubleshoots dashboard rendering or data display issues
- Supports executive KPI summaries, metric tracking, and multi-topic "show me everything about X" reports

## When to Use
- "Build an executive dashboard for my sales data with trend charts and KPI cards"
- "Add a bar chart widget to my existing dashboard"
- "Create a performance dashboard with region filter and week-over-week comparison"
- "Fix this dashboard — the table widget isn't showing data"
- "Show me everything about my warehouse usage in one view"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install dashboard

# Claude Code CLI
npx cortex-code-skills install dashboard --claude
```

Once installed, describe the data and layout you want. The skill gathers requirements, designs the widget structure, loads reference examples, and produces a ready-to-use `DashboardSpec` JSON. Save the output as a `.dash` file to view it in Snowsight, or use it directly in a Snowflake Intelligence response.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `references/` | Complete DashboardSpec examples and variable/filter syntax reference |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
