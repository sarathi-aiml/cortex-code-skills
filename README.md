# Cortex Code Skills
A repository containing Cortex code skills, with a built-in CLI tool to install them into your project..

## Installation
You do not need to install this package locally to use it. You can run it directly using `npx`:

```bash
npx cortex-code-skills install <skill-name> [options]
```

---

## Usage Examples

### 1. Installing a skill for Cortex Code CLI (Default)
By default, the CLI installs the specified skill into the `.cortex/skills/<skill-name>` folder in your current working directory. 

**Command:**
```bash
npx cortex-code-skills install cost-intelligence
```
**Output Details:**
```text
Installing 'cost-intelligence' to /your/project/path/.cortex/skills/cost-intelligence...
Successfully installed 'cost-intelligence'.
```

### 2. Installing a skill for Claude Code CLI
If you want to install skills for the Claude Code CLI, simply append the `--claude` flag to your command. This will copy the skill contents to `.claude/skills/<skill-name>`.

**Command:**
```bash
npx cortex-code-skills install dashboard --claude
```
**Output Details:**
```text
Installing 'dashboard' to /your/project/path/.claude/skills/dashboard...
Successfully installed 'dashboard'.
```

### 3. Missing Skill Name Error
If you run the install command without providing a skill name, the CLI will output an error reminding you of the required arguments.

**Command:**
```bash
npx cortex-code-skills install
```
**Output Details:**
```text
Error: Please specify a skill name to install.
Usage: npx cortex-code-skills install <skill-name>
```

### 4. Skill Not Found Error
If you type an incorrect skill name or a skill that does not exist in this repository, it will alert you.

**Command:**
```bash
npx cortex-code-skills install invalid-skill
```
**Output Details:**
```text
Error: Skill 'invalid-skill' not found in the package. Check the skill name and try again.
```

---

## Available Skills
Here are a few examples of available skills in this repository:
- `cortex-agent`
- `cortex-code-guide`
- `cost-intelligence`
- `dashboard`
- `data-cleanrooms`
- `developing-with-streamlit`
- ...and many more! (There are over 30 valid skills available.)
