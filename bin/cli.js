#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../.agents');
const destDir = path.join(process.cwd(), '.agents');

if (fs.existsSync(destDir)) {
    console.error('Error: .agents directory already exists in this folder.');
    process.exit(1);
}

console.log('Scaffolding SkilledAgent agent workspace into your project...');

try {
    // Use native recursive fs.cpSync (available since Node 16.7.0)
    fs.cpSync(srcDir, destDir, { recursive: true });
    console.log('Successfully installed SkilledAgent!');
    console.log('\nTo get started, open your AI agent and run:');
    console.log('  /kickoff\n');
} catch (err) {
    console.error('Failed to copy files:', err);
    process.exit(1);
}
