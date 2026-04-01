# Cortex AI Functions

> Use Snowflake Cortex AI Functions for text and image analytics — classify, extract, summarize, translate, embed, redact, parse documents, and run custom LLM prompts directly in SQL.

## Overview

This skill is the entry point for all Snowflake Cortex AI Function tasks. It detects your intent — whether you want to classify content, extract structured data from PDFs, run sentiment analysis, or process documents at scale — and routes you to the right function reference or workflow. It targets the full suite of `AI_*` SQL functions available in Snowflake Cortex.

## What It Does

- Route to the correct Cortex AI Function or workflow based on your described task
- Classify text or images into categories with `AI_CLASSIFY`
- Extract structured fields from text or documents with `AI_EXTRACT`
- Filter rows with natural language conditions using `AI_FILTER`
- Summarize and aggregate insights across many rows with `AI_SUMMARIZE_AGG` and `AI_AGG`
- Parse PDFs and images using `AI_PARSE_DOCUMENT` (OCR and structured extraction)
- Process documents at scale through the Document Intelligence workflow — with pricing displayed and test-before-batch safeguards
- Run custom LLM prompts in SQL using `AI_COMPLETE`

## When to Use

- You want to apply AI to a column of text, a set of documents, or image files stored on a Snowflake stage
- You need to process invoices, contracts, receipts, or forms and extract structured data
- You are unsure which Cortex AI Function fits your use case and want the AI to help you choose
- You need to classify, filter, translate, embed, or redact text directly in SQL

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install cortex-ai-functions

# Claude Code CLI
npx cortex-code-skills install cortex-ai-functions --claude
```

Once installed, describe what you want to do with your data — "extract fields from invoices on a stage", "classify support tickets", "summarize customer reviews". The skill detects your intent and either routes you directly to the right function reference or presents a menu of all available AI functions to help you choose.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `document-intelligence/` | End-to-end workflow for processing and extracting data from files at scale |
| `references/` | Per-function reference files: ai-classify.md, ai-extract.md, ai-filter.md, ai-parse-doc.md, ai-summ-agg.md, ai-complete.md |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
