# Snowflake Postgres

> Manage Snowflake Postgres instances — create, connect, diagnose, and export to data lake — entirely through Snowflake SQL.

## Overview

This skill covers the full operational lifecycle of Snowflake Postgres instances: provisioning, credential management, health diagnostics, and pg_lake data export to Iceberg/S3. It uses standard PostgreSQL configuration files (`~/.pg_service.conf`, `~/.pgpass`) for connection storage, ensuring compatibility with any PostgreSQL-native tooling. Credentials are never exchanged in chat.

## What It Does

- Creates, suspends, resumes, and describes Snowflake Postgres instances via SQL
- Manages connections using PostgreSQL-standard service files with SSL certificate verification
- Runs `pg_doctor`-style diagnostics: slow queries, cache hit rates, vacuum/bloat analysis, lock detection, and active query inspection
- Exports Postgres data to Iceberg tables or S3 via pg_lake storage integration
- Resets credentials and imports connection definitions without exposing secrets in chat

## When to Use

- You need to provision or manage a Snowflake Postgres instance
- You want to diagnose performance issues: slow queries, connection counts, dead rows, blocking locks
- You're setting up pg_lake to export Postgres data as Iceberg/Parquet to a data lake
- You need to rotate credentials or import an existing Postgres connection into a new environment

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install snowflake-postgres

# Claude Code CLI
npx cortex-code-skills install snowflake-postgres --claude
```

Once installed, the skill first checks for a saved connection via the `connect/SKILL.md` workflow, then loads sub-skills based on your intent (manage, diagnose, or export). Tell it what you want — for example, "show my Postgres instances" or "diagnose slow queries on my instance" — and it will route accordingly.

## Files & Structure

| Folder | Purpose |
|--------|---------|
| `connect/` | Connection setup using PostgreSQL service files and pgpass |
| `manage/` | Create, list, suspend, resume, describe instances |
| `diagnose/` | Health checks, slow query analysis, lock detection, vacuum/bloat |
| `pg-lake/` | Export data to S3/Iceberg via storage integration |
| `sql/` | Reusable SQL templates for Postgres operations |
| `scripts/` | Automation scripts for common workflows |
| `references/` | DDL quirks, connection options, SSL certificate handling |
| `tests/` | Validation tests for skill logic |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
