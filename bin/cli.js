#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const skillName = process.argv[3];

if (command !== 'install') {
  console.error('Usage: npx cortex-code-skills install <skill-name>');
  process.exit(1);
}

if (!skillName) {
  console.error('Error: Please specify a skill name to install.');
  console.error('Usage: npx cortex-code-skills install <skill-name>');
  process.exit(1);
}

const sourceDir = path.join(__dirname, '..', skillName);

if (!fs.existsSync(sourceDir)) {
  console.error(`Error: Skill '${skillName}' not found in the package. Check the skill name and try again.`);
  process.exit(1);
}

const isClaude = process.argv.includes('--claude');
const baseFolder = isClaude ? '.claude' : '.cortex';
const targetBaseDir = path.join(process.cwd(), baseFolder, 'skills');
const targetDir = path.join(targetBaseDir, skillName);

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log(`Installing '${skillName}' to ${targetDir}...`);
  copyDir(sourceDir, targetDir);
  console.log(`Successfully installed '${skillName}'.`);
} catch (error) {
  console.error(`Error installing skill: ${error.message}`);
  process.exit(1);
}
