# Build React App

> Build data-intensive Next.js applications connected to Snowflake — dashboards, analytics tools, admin panels, and customer-facing data products backed by real Snowflake tables.

## Overview
The Build React App skill walks you through creating a production-ready Next.js application with a live Snowflake data connection. It covers project scaffolding with TypeScript and Tailwind, Snowflake SDK integration with both SSO (local dev) and OAuth token (SPCS production) auth modes, and component setup using shadcn/ui and Recharts. No mock data — every app connects to real Snowflake tables from the start.

## What It Does
- Scaffolds a Next.js (TypeScript + Tailwind) project with the correct standalone output configuration for containerization
- Configures the Snowflake SDK connection with dual auth: External Browser SSO for local development, OAuth token injection for SPCS
- Sets up shadcn/ui component library and Recharts for data visualization
- Discovers relevant Snowflake tables and views using `snowflake_object_search` before writing any code
- Structures the project with proper API routes, components, and a shared Snowflake client library
- Produces a `Dockerfile` ready for deployment to SPCS via the `deploy-to-spcs` skill

## When to Use
- "Build a sales dashboard that reads from my Snowflake DWH"
- "Create an admin panel backed by Snowflake data"
- "I need a customer-facing analytics tool connected to live Snowflake tables"
- "Build a data explorer app for my team using Next.js"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install build-react-app

# Claude Code CLI
npx cortex-code-skills install build-react-app --claude
```

Once installed, describe the app you want to build and what Snowflake data it should use. The skill confirms requirements first, searches for relevant tables, then walks through scaffolding, Snowflake connection setup, component building, and local verification before handing off to `deploy-to-spcs` for production deployment.

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
