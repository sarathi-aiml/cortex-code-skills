# Openflow

> Manage Snowflake Openflow (NiFi-based) data integration — deploy connectors, check status, configure parameters, troubleshoot errors, and author custom flows.

## Overview

Openflow is Snowflake's NiFi-based product for data replication and transformation. This skill covers the full operational surface: deploying and upgrading connectors (PostgreSQL, MySQL, SQL Server, Salesforce, Kafka, SharePoint, and more), checking flow status, configuring parameters and credentials, diagnosing errors, and authoring custom NiFi flows. Operations are organized into three tiers — Primary (common tasks), Secondary (problem-solving), and Advanced (technical NiFi authoring) — so the AI routes to the right depth without over-complicating simple requests.

## What It Does

- Deploys, upgrades, starts, stops, and lists Openflow connectors for common data sources
- Checks connector health, error bulletins, and flow status
- Configures parameter contexts, credentials, and Snowflake destination authentication
- Diagnoses connection errors, runtime failures, pod crashes, and network access issues
- Manages advanced flow lifecycle: force stop, purge FlowFiles, version control, export/import
- Authors custom NiFi flows with processor CRUD, Expression Language, RecordPath, and Snowflake type mapping

## When to Use

- You need to replicate data from PostgreSQL, MySQL, Salesforce, Kafka, or another supported source into Snowflake
- An Openflow connector is failing, showing errors or bulletins, or not ingesting data as expected
- You need to update credentials, configure parameter contexts, or set up External Access Integrations for network connectivity
- You want to build a custom NiFi flow or modify an existing one at the processor level
- You need to export, import, version-control, or migrate an Openflow flow definition

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install openflow

# Claude Code CLI
npx cortex-code-skills install openflow --claude
```

Once installed, the skill will validate your Openflow session and profile before routing to any operation. Describe what you need — "deploy a PostgreSQL CDC connector", "my Salesforce connector has errors", "set up network access for my flow" — and it will detect intent, confirm with you before executing, and walk through the workflow step by step.

## Files & Structure

| Subfolder | Purpose |
|-----------|---------|
| `references` | Core guidelines, session management, connector workflows, platform diagnostics, NiFi technical references, and flow authoring patterns |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
