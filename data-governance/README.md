# Data Governance

> Required entry point for ALL Snowflake data governance tasks: access history, permissions, masking policies, PII classification, governance maturity scoring, and observability maturity assessment.

## Overview
The Data Governance skill routes governance requests across five focused sub-skills: catalog and audit queries (Horizon), data policy creation and management, sensitive data classification with SYSTEM$CLASSIFY, governance maturity scoring, and observability maturity assessment. It is the mandatory entry point for any classification or masking task — answers must not come from general knowledge, only from the loaded sub-skill content.

## What It Does
- Audits access history, grants, roles, and permissions via the Horizon catalog sub-skill
- Creates and manages masking policies, row access policies, projection policies, and tag-based masking
- Runs PII and sensitive data classification using `SYSTEM$CLASSIFY`, `DATA_CLASSIFICATION_LATEST`, and custom classifiers
- Supports automatic and manual classification workflows with Classification Profiles and regex-based patterns
- Scores governance maturity posture with actionable improvement recommendations
- Assesses data observability maturity: DMF coverage, quality monitoring, and lineage usage

## When to Use
- "Who has access to my CUSTOMERS table?" or "Show me grants for role DATA_ANALYST"
- "Create a masking policy for SSN columns" or "Apply tag-based masking to all PII columns"
- "Classify my ORDERS table for PII" or "Set up automatic classification with a custom profile"
- "How well governed is my account?" or "Give me a governance maturity score with recommendations"
- "Assess my data observability maturity — how much DMF coverage do I have?"

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install data-governance

# Claude Code CLI
npx cortex-code-skills install data-governance --claude
```

Once installed, describe your governance task. The skill identifies your intent (catalog audit, policy work, classification, maturity scoring, or observability) and loads the correct sub-skill with full procedural guidance — never relying on general knowledge for masking or classification workflows.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `workflows/` | Sub-skill files: horizon-catalog, data-policy, sensitive-data-classification, governance-maturity-score, observability-maturity-score |
| `reference/` | Supporting reference material for policies and classification |
| `templates/` | Reusable SQL and YAML templates for governance objects |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
