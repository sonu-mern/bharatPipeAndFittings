// This file is used by Vercel to build the project
// It ensures that the server-side rendering works correctly

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Run the build commands
console.log('Building client and server bundles...');
execSync('npm run build:client', { stdio: 'inherit' });
execSync('npm run build:server', { stdio: 'inherit' });

// Ensure the api directory exists
const apiDir = path.resolve(process.cwd(), 'api');
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

console.log('Vercel build completed successfully!');