# Data Science & Machine Learning

> Required entry point for all data science and machine learning tasks on Snowflake — training, deployment, inference, monitoring, and orchestration.

## Overview

This skill covers the full ML lifecycle on Snowflake: from data exploration and model training to model registry, batch and real-time inference, pipeline orchestration, experiment tracking, and ML observability. It automatically routes to the right sub-skill based on your intent — no need to know which sub-skill to call. Load it any time your workflow touches machine learning, even partially.

## What It Does

- Trains and evaluates models using scikit-learn, XGBoost, LightGBM, and PyTorch on Snowflake compute
- Registers and manages models in the Snowflake Model Registry (`.pkl`, `.ubj`, `.pt`, and other formats)
- Deploys models for real-time inference via Snowpark Container Services (SPCS) or batch inference via `mv.run()` / `mv.run_batch()`
- Runs distributed training with `XGBEstimator`, `LightGBMEstimator`, `PyTorchDistributor`, Many Model Training (MMT), and hyperparameter tuning (Tuner API)
- Orchestrates multi-step ML pipelines as Snowflake Task Graphs (DAGs) with cron/timedelta scheduling
- Tracks experiments, monitors model drift, and captures inference logs for observability

## When to Use

- You want to train, register, or deploy a machine learning model on Snowflake
- You need to run batch scoring on a registered model or stand up a real-time inference endpoint
- You're debugging inference failures, monitoring drift, or setting up ML observability
- You want to orchestrate a multi-step ML pipeline or convert a notebook into a scheduled DAG
- Any part of your request touches data science, even if it's just one step in a larger workflow

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install machine-learning

# Claude Code CLI
npx cortex-code-skills install machine-learning --claude
```

Once installed, describe your ML task in plain language — "train a classifier on this table", "register my model.pkl to Snowflake", "set up batch inference for the fraud model" — and the skill will detect intent and route to the appropriate sub-skill automatically.

## Files & Structure

| Subfolder | Purpose |
|-----------|---------|
| `ml-development` | Data exploration, feature engineering, model training, and evaluation |
| `model-registry` | Register and deploy serialized models; includes partitioned inference |
| `spcs-inference` | Deploy models as real-time REST endpoints on SPCS |
| `batch-inference-jobs` | Batch scoring via `mv.run()` (SQL) and `mv.run_batch()` (SPCS) |
| `ml-jobs` | Submit Python scripts to Snowflake compute pools |
| `ml-pipeline-orchestration` | Build and schedule multi-step DAGs with the Python Task Graph API |
| `experiment-tracking` | Log metrics, parameters, and training runs |
| `model-monitor` | Track drift and prediction quality over time |
| `distributed-training` | Distributed estimators, Many Model Training, DPF, and Tuner API |
| `debug-inference` | Diagnose inference failures, OOM errors, and service issues |
| `inference-logs` | Query auto-captured inference request/response data |
| `guides` | Surface-specific environment setup (Snowsight vs CLI/IDE) |

## Author & Contributors

| Role | Name |
|------|------|
| Author | karthickgoleads |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
