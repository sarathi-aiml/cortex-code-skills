# Iceberg

> The required entry point for all Apache Iceberg table workflows in Snowflake — catalog integrations, catalog-linked databases, external volumes, auto-refresh debugging, and Snowflake Intelligence over Iceberg data.

## Overview

This skill is the single entry point for working with Iceberg tables in Snowflake. It routes to the correct sub-skill based on your intent — whether you are connecting to an external catalog (AWS Glue, Databricks Unity Catalog, OpenCatalog/Polaris), setting up storage access via external volumes, auto-discovering tables into a catalog-linked database, or debugging stale data and refresh failures. It also covers enabling Snowflake Intelligence (natural language / text-to-SQL) over CLD Iceberg tables.

## What It Does

- Set up catalog integrations for AWS Glue IRC, Databricks Unity Catalog, and OpenCatalog/Polaris
- Create catalog-linked databases (CLD) that auto-discover and sync Iceberg tables from an external catalog
- Configure external volumes for S3, Azure Blob, and GCS storage — including IAM roles, trust policies, and `ALLOW_WRITES` setup
- Debug auto-refresh failures: stale data, STALLED/STOPPED refresh status, delta direct issues
- Enable Snowflake Intelligence over CLD Iceberg tables with semantic views and natural language querying
- Confirm detected intent before starting any workflow to avoid unnecessary setup work

## When to Use

- Connecting Snowflake to an external Iceberg catalog (Glue, Unity Catalog, Polaris/OpenCatalog)
- Creating a catalog-linked database to automatically discover and query Iceberg tables
- Troubleshooting `Access Denied` / 403 errors or stale data from an Iceberg table
- Setting up external volume storage permissions for Iceberg write access
- Querying Iceberg data with natural language via Snowflake Intelligence

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install iceberg

# Claude Code CLI
npx cortex-code-skills install iceberg --claude
```

Once installed, describe your goal — "connect to AWS Glue", "set up a catalog-linked database", "my Iceberg data is stale", or "I'm getting a 403 on external volume". The skill confirms the detected intent, then loads the appropriate sub-skill to execute the workflow step by step.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `catalog-integration/` | Sub-skills for AWS Glue IRC, Databricks Unity Catalog, and OpenCatalog/Polaris catalog integration setup |
| `catalog-linked-database/` | Sub-skill for creating and managing catalog-linked databases with auto-discover |
| `external-volume/` | Sub-skill for configuring S3/Azure/GCS external volumes, IAM trust policies, and write permissions |
| `auto-refresh/` | Sub-skill for diagnosing and resolving Iceberg auto-refresh failures and stale data |
| `cld-snowflake-intelligence/` | Sub-skill for enabling Snowflake Intelligence (text-to-SQL) over CLD Iceberg tables |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
