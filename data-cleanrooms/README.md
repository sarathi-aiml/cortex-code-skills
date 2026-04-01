# Data Clean Rooms

> Use for ALL Snowflake Data Clean Room (DCR) requests: browse collaborations, join invitations, register data offerings, run analysis templates, and create new collaborations via the DCR Collaboration API.

## Overview
The Data Clean Rooms skill drives every step of the Snowflake DCR Collaboration API — a fully symmetric, multi-party environment for secure data analysis without exposing raw data. It handles the full collaboration lifecycle: discovering what's installed, routing to the right sub-skill based on intent, and executing analysis or activation templates on behalf of any combination of owner, data provider, and analysis runner roles.

## What It Does
- Browses available collaborations, data offerings, and registered analysis templates
- Reviews and joins collaboration invitations from other parties
- Registers data offerings (datasets) and templates (analysis queries) into a collaboration
- Runs analysis templates including standard audience overlap, activation, and custom queries
- Creates new collaborations and defines invited parties with their roles
- Verifies DCR installation and surfaces prerequisite gaps before any operation

## When to Use
- "Show me all collaborations I'm part of" or "List available data offerings"
- "Join the collaboration invitation from Acme Corp"
- "Register my customer table as a data offering in collaboration X"
- "Run the audience overlap analysis between my data and the partner's dataset"
- "Create a new clean room collaboration with two external partners"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install data-cleanrooms

# Claude Code CLI
npx cortex-code-skills install data-cleanrooms --claude
```

Once installed, describe your DCR goal in plain English. The skill first verifies your DCR database is installed, then routes to the correct sub-skill (browse, review-join, register, run, or create) based on your request.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `browse/` | View collaborations, offerings, and templates |
| `review-join/` | Review and accept collaboration invitations |
| `register/` | Register data offerings and analysis templates |
| `run/` | Execute analysis and activation templates |
| `create/` | Create new collaborations and define party roles |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
