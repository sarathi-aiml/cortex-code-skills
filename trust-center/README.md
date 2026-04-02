# Trust Center

> Analyze, manage, and remediate Snowflake Trust Center security findings across scanners, CIS benchmarks, and threat intelligence packages.

## Overview

This skill is the single entry point for all Snowflake Trust Center work. It detects your intent — analyzing findings, reviewing scanner coverage, managing scanner configuration, or remediating a specific security issue — and routes to the appropriate sub-skill. It covers Security Essentials, Threat Intelligence, and CIS benchmark scanner packages, as well as at-risk entity analysis and finding-by-finding remediation guidance.

## What It Does

- Analyzes security findings by severity, trend, and category across your Snowflake account
- Reviews scanner inventory, coverage gaps, disabled scanners, and health checks
- Enables, disables, reschedules, and configures notifications for Trust Center scanners via API
- Provides step-by-step remediation for specific findings including SQL and verification steps
- Surfaces at-risk entities and suggested actions for CIS benchmark violations

## When to Use

- You want a snapshot of your Snowflake security posture (finding counts, severity distribution, trends)
- You need to know which scanners are running and which are disabled or misconfigured
- You want to enable a scanner, change its schedule, or update notification settings
- You have a specific Trust Center finding and need concrete steps to fix it

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install trust-center

# Claude Code CLI
npx cortex-code-skills install trust-center --claude
```

Once installed, describe what you want to do — for example, "show me my highest severity Trust Center findings" or "how do I fix the MFA enforcement finding" — and the skill will detect your intent and route to the right sub-workflow. If intent is unclear, it will ask you to choose from the four main workflows.

## Files & Structure

| Folder | Purpose |
|--------|---------|
| `findings-analysis/` | Finding counts, severity distribution, trends, and category breakdown |
| `scanner-analysis/` | Scanner inventory, coverage gaps, and health checks |
| `api-management/` | Enable/disable scanners, update schedules and notifications |
| `finding-remediation/` | Remediation steps, SQL, and verification for specific findings |
| `scanner-creation/` | Create custom scanners |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
