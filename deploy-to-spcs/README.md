# Deploy to SPCS

> Deploy containerized applications to Snowflake using Snowpark Container Services — works with any Docker-based app regardless of language or framework.

## Overview

This skill walks you through the end-to-end process of deploying a Docker container to Snowpark Container Services (SPCS). It solves the common friction of pushing an image to the Snowflake image registry, configuring a compute pool, writing a service spec, and granting consumer access — consolidating what would otherwise require several `snow` CLI and SQL steps into a guided workflow. It targets any Docker-based application: Next.js, Python, Go, or otherwise.

## What It Does

- Verify Docker build readiness and confirm the app compiles for the `linux/amd64` platform
- Check for and create SPCS prerequisites: compute pool, image repository, and registry login
- Generate a `service-spec.yaml` with container spec, environment variables, resource requests/limits, and endpoint configuration
- Push the Docker image to the Snowflake image registry using `snow spcs image-registry` commands
- Create the SPCS service via SQL (`CREATE SERVICE`) and monitor startup status
- Configure consumer role access so other users or roles can reach the deployed service

## When to Use

- You have a working Dockerfile and want to host the app on Snowflake infrastructure
- You need to run a web application, API, or background service inside Snowflake's compute environment
- A user mentions SPCS, Snowpark Container Services, or "deploy to Snowflake" for a containerized app

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install deploy-to-spcs

# Claude Code CLI
npx cortex-code-skills install deploy-to-spcs --claude
```

Once installed, confirm your app has a working Dockerfile and tell the AI your target database, schema, and compute pool preferences. The skill steps through the deployment sequence with four confirmation checkpoints — at app build, SPCS prerequisites, deployment success, and consumer access — so nothing is created without your sign-off.

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
