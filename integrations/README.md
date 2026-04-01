# Integrations

> Create, replace, alter, drop, describe, and show Snowflake integrations across API, catalog, external access, notification, security, and storage types.

## Overview

This skill is the entry point for all Snowflake integration management commands. It covers six integration types — API, catalog, external access, notification, security, and storage — and routes each SQL command (CREATE, ALTER, DROP, SHOW, DESCRIBE) to a dedicated sub-skill. Use it any time you need to set up or modify how Snowflake connects to external services, cloud storage, message queues, identity providers, or data catalogs.

## What It Does

- Creates and alters API integrations for AWS API Gateway, Azure API Management, Google Cloud API Gateway, and Git repositories
- Creates and alters catalog integrations for Apache Iceberg tables (AWS Glue, Object Store, Snowflake Open Catalog, Apache Iceberg REST, SAP Business Data Cloud)
- Creates and alters external access integrations to allow UDFs and procedures to reach external network locations
- Creates and alters notification integrations for cloud message queues (Azure Event Grid, Google Pub/Sub, Amazon SNS), email, and webhooks
- Creates and alters security integrations for SCIM, SAML2, OAuth, and API authentication with third-party identity providers
- Creates and alters storage integrations for Amazon S3, Google Cloud Storage, and Microsoft Azure Blob Storage

## When to Use

- You need to connect Snowflake to an external API, cloud storage bucket, or identity provider
- You're setting up an Iceberg table and need a catalog integration for your metastore
- You want to allow a UDF or stored procedure to make outbound network calls
- You need to configure SSO, SCIM provisioning, or OAuth for Snowflake access
- You need to create or update any Snowflake integration object via SQL

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install integrations

# Claude Code CLI
npx cortex-code-skills install integrations --claude
```

Once installed, describe what you want to do — "create a storage integration for S3", "set up an API integration for Azure API Management", "alter my notification integration to use a webhook" — and the skill will route to the matching sub-skill for that integration type and command.

## Files & Structure

Sub-skills are organized by integration type and SQL command. Key groupings:

| Category | Sub-skills |
|----------|-----------|
| General | `create-integration`, `alter-integration`, `show-integrations`, `describe-integration`, `drop-integration` |
| API | `create-api-integration`, `alter-api-integration` |
| Catalog | `create-catalog-integration`, `alter-catalog-integration`, `drop-catalog-integration`, `show-catalog-integrations`, `describe-catalog-integration` |
| External Access | `create-external-access-integration`, `alter-external-access-integration` |
| Notification | `create-notification-integration`, `alter-notification-integration`, `describe-notification-integration`, `show-notification-integrations` |
| Security | `create-security-integration`, `alter-security-integration`, `show-delegated-authorizations` |
| Storage | `create-storage-integration`, `alter-storage-integration` |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
