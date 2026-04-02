# Declarative Sharing

> Share data products across Snowflake accounts with versioning, app roles, and object bundling — without the complexity of full native apps.

## Overview

This skill covers Declarative Sharing via Snowflake Application Packages with `TYPE=DATA`. It is the recommended default when sharing data across accounts, offering versioning, automatic consumer updates, and app-role-based access control — all without requiring a setup script or full Native App. It targets cross-account sharing scenarios where you need to bundle tables, views, Cortex Agents, semantic views, or notebooks into a governed, versioned data product.

## What It Does

- Create Application Packages with `TYPE=DATA` and release them as live versions consumers can subscribe to
- Bundle multiple object types into a single data product: tables, secure views, Cortex Agents, semantic views, UDFs, procedures, and notebooks
- Separate schemas automatically for shared-by-copy objects (agents, UDFs) vs shared-by-reference objects (tables, views) — which cannot coexist in the same schema
- Generate a valid `manifest.yml` following the required `shared_content → databases → schemas → objects` hierarchy
- Define app roles for granular consumer access control within the shared package
- Validate agent compatibility before sharing (flags unsupported configurations: custom warehouses, multi-database tools, custom query timeouts)
- Guide notebook cell metadata requirements so SQL cells don't break in consumer accounts

## When to Use

- Sharing data or AI assets with another Snowflake account (default recommendation over traditional shares)
- Bundling related objects — tables + agents + semantic views — into one versioned data product
- You need consumers to receive automatic updates when you release a new version
- You want app-role-based access control within the shared package, not just account-level grants

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install declarative

# Claude Code CLI
npx cortex-code-skills install declarative --claude
```

Once installed, describe what you want to share and with whom. The skill determines which objects need to be created (semantic views, agents, notebooks), organizes schemas correctly, reads the manifest template, and walks you through `CREATE APPLICATION PACKAGE` → `PUT manifest` → `RELEASE LIVE VERSION` with confirmation stops before any destructive or publishing actions.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `references/` | Canonical manifest.yml template, package-release.sql, and create-objects.sql — all must be read before authoring manifests or releasing packages |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
