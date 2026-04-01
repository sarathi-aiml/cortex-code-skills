# Developing with Streamlit

> Create, edit, debug, style, and deploy Streamlit applications — including custom components, widget styling, performance optimization, and Snowflake-in-Streamlit deployment.

## Overview

This is a routing skill that directs you to specialized sub-skills for every aspect of Streamlit development. It covers the full lifecycle from scaffolding a new app to deploying it on Snowflake, with dedicated guidance for performance, layouts, theming, data display, multi-page architecture, and custom HTML/JS components. It targets both standalone Streamlit apps and Streamlit in Snowflake (SiS).

## What It Does

- Locate the correct entry-point file in a project and identify the app structure (single-page vs multi-page)
- Route to specialized references for: performance and caching, dashboard layouts, widget selection, CSS theming, data display, session state, chat UIs, and Snowflake connections
- Guide widget styling with CSS — button colors, backgrounds, custom themes — without breaking Streamlit's renderer
- Build custom components using `st.components.v2` (CCv2) for interactive elements not available as native widgets; flags deprecated v1 usage
- Optimize slow apps with `@st.cache_data`, `@st.cache_resource`, and `st.fragment` patterns
- Deploy Streamlit apps to Snowflake using Snowflake-in-Streamlit (SiS) configuration

## When to Use

- Building a new Streamlit dashboard or AI assistant interface
- Debugging session state bugs, slow reruns, or layout issues in an existing app
- Improving visual design — colors, backgrounds, widget styling, or custom themes
- Adding a custom interactive component (drag-and-drop, canvas, custom chart) that doesn't exist as a native widget
- Deploying a Streamlit app to Snowflake

## How to Use

Install this skill:
```bash
# Cortex Code CLI
npx cortex-code-skills install developing-with-streamlit

# Claude Code CLI
npx cortex-code-skills install developing-with-streamlit --claude
```

Once installed, describe what you want to build or fix — "make the buttons green", "my app reruns too slowly", "add a sidebar filter", "deploy to Snowflake". The skill locates your app file, identifies the task type, reads the appropriate sub-skill reference, and applies the guidance directly to your code.

## Files & Structure

| Folder | Description |
|--------|-------------|
| `references/` | Sub-skill references: performance.md, dashboards.md, design.md, selection-widgets.md, theme.md, layouts.md, data-display.md, multipage-apps.md, session-state.md, markdown.md, chat-ui.md, snowflake-connection.md, snowflake-deployment.md, custom-components-v2.md |
| `assets/` | Supporting assets for reference files |

## Author & Contributors

| Role | Name |
|------|------|
| Author | Sarathi Balakrishnan |
| Contributors | Malini, Sarathi |

---
*Part of the [Cortex Code Skills](https://github.com/sarathi-aiml/cortex-code-skills) collection · [Snowflake Cortex Docs](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-code)*
