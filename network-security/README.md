# Network Security

> Manage Snowflake network policies and network rules — create, modify, assign, and audit IP allowlists including hybrid policies with Snowflake-managed SaaS rules.

## Overview

This skill handles all Snowflake network access control tasks: listing existing policies and rules, checking which IPs are covered by Snowflake's pre-built SaaS rules (dbt, Tableau, Power BI, GitHub Actions, and more), creating custom network rules and hybrid policies, updating policies safely, and assigning policies to users or the account. It enforces correct creation order (rules before policies) and guides you through the SaaS coverage check workflow.

## What It Does

- Lists all network policies and network rules in the account
- Checks which IP addresses are covered by Snowflake-managed SaaS network rules in `SNOWFLAKE.NETWORK_SECURITY`
- Creates custom network rules with IP CIDR ranges and generates hybrid policies that combine custom rules with Snowflake SaaS rules
- Updates existing policies safely by handling the drop-recreate sequence required when a rule is attached to a policy
- Assigns and unassigns network policies at the user level or account level
- Queries assignment status via `ACCOUNT_USAGE.USERS` and `SHOW PARAMETERS`

## When to Use

- You need to restrict Snowflake access to specific IP ranges for your environment
- You're setting up a hybrid network policy that combines your internal IPs with Snowflake-managed SaaS rules for BI tools or ETL platforms
- You want to check which of your IPs are already covered by Snowflake's built-in SaaS rules before creating custom rules
- You need to assign or remove a network policy from a user or the entire account
- You're troubleshooting a connection failure that may be caused by a network policy

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install network-security

# Claude Code CLI
npx cortex-code-skills install network-security --claude
```

Once installed, describe your task — "list all network policies", "create a hybrid policy for my Tableau and dbt IPs", "assign a network policy to this user" — and the skill will walk you through the SaaS coverage check, rule creation, and policy assignment in the correct order.

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |
| Version | v1.0.0 |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
