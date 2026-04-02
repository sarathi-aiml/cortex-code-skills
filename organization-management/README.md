# Organization Management

> Snowflake organization management — accounts, org users, org hub insights, org spending, security posture, and globalorgadmin operations.

## Overview

This skill is the router for all Snowflake organization-level operations. It covers account inventory and edition visibility, organization user and group lifecycle (create, import, troubleshoot), executive-level org hub insights (spending, security posture, reliability, MFA readiness), ORGANIZATION_USAGE view mapping, and globalorgadmin role management. Each intent routes immediately to a dedicated sub-skill that contains the full workflow and SQL.

## What It Does

- Lists accounts in the organization with edition, region, and role analytics
- Creates, alters, and drops organization users and organization user groups; sets visibility
- Imports organization user groups into accounts and resolves import conflicts
- Generates 30-day executive summaries covering org spending, cost drivers, security posture, reliability risks, login failures, and warehouse load
- Maps feature-to-view for ORGANIZATION_USAGE — identifies which views to query for billing, storage, and usage data and what role is required
- Explains and manages the globalorgadmin role: who has it, how to enable/disable it, and what permissions it grants

## When to Use

- You need a cross-account inventory of accounts, editions, and regions in your Snowflake organization
- You're managing organization users or groups and need to create, import, or troubleshoot user provisioning
- You want an executive-level 30-day summary of your org's spending, security posture, or reliability health
- You're building org-wide dashboards and need to know which ORGANIZATION_USAGE views to query
- You need to understand or manage the globalorgadmin / orgadmin role for your organization

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install organization-management

# Claude Code CLI
npx cortex-code-skills install organization-management --claude
```

Once installed, describe what you need — "show me a 30-day summary of my org", "list all accounts in my organization", "who has globalorgadmin", "I'm getting import conflicts for org users" — and the skill will detect intent and immediately load the matching sub-skill. This router itself contains no implementation details; all workflows live in the sub-skills.

## Files & Structure

| Subfolder | Purpose |
|-----------|---------|
| `accounts` | Account inventory, edition distribution, and role analytics |
| `org-hub` | 30-day executive org insights: spending, security, reliability, auth posture |
| `organization-users` | Create, import, and troubleshoot organization users and groups |
| `globalorgadmin` | Manage and explain the globalorgadmin role |
| `org-usage-view` | Map features to ORGANIZATION_USAGE views and required roles |
| `references` | Global guardrails and shared context for org management operations |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
