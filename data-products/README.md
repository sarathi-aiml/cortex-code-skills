# Data Products

> Create organizational listings to share data products via the Snowflake Internal Marketplace — across accounts, with auto-generated metadata and cross-region fulfillment.

## Overview

This skill guides you through creating and publishing organizational listings in Snowflake's Internal Marketplace so data products can be shared across accounts within your organization. It solves the problem of cross-account data sharing with proper discovery controls, approval flows, and data dictionaries — going well beyond a simple `GRANT`. It targets the Snowflake Collaboration and Internal Marketplace platform.

## What It Does

- Discover all shareable objects in a schema (tables, views, semantic views, agents) and assemble them into a listing
- Auto-generate listing title, description, and data dictionary — no manual boilerplate required
- Configure discovery and access targets: all internal accounts or specific named accounts
- Handle cross-region auto-fulfillment setup when consumers are in different Snowflake regions
- Support approval-gated access with configurable `request_approval_type` and approver contacts
- Verify account names against `SHOW ACCOUNTS` output before use to prevent misconfiguration
- Flag unsupported Cortex Agent configurations (custom warehouse, multi-database tools) that block sharing

## When to Use

- You want to share tables, views, agents, or semantic views with another account in your Snowflake organization
- You need an internal data marketplace listing with versioning, approval flows, or data dictionary
- A user mentions "share to internal marketplace", "create a data product", or "share with other accounts"
- You do NOT need this skill for same-account role-based access — use `GRANT` for that

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install data-products

# Claude Code CLI
npx cortex-code-skills install data-products --claude
```

Once installed, tell the AI which objects you want to share and who should have access. The skill will ask for a contact email, determine the target accounts, auto-generate the listing metadata, and walk you through the `CREATE SHARE` → `CREATE ORGANIZATION LISTING` sequence with a confirmation stop before publishing.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `references/` | Supporting SQL and YAML reference templates for share and listing creation |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
