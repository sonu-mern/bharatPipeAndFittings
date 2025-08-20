// This file is used by Vercel to build the project
// It ensures that the server-side rendering works correctly

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to copy directory recursively
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

// Run the build commands
console.log('Building client and server bundles...');
execSync('npm run build:client', { stdio: 'inherit' });
execSync('npm run build:server', { stdio: 'inherit' });

// Ensure the Vercel output directories exist
const vercelOutputDir = path.resolve(__dirname, '.vercel', 'output');
const vercelStaticDir = path.resolve(vercelOutputDir, 'static');
const vercelFunctionsDir = path.resolve(vercelOutputDir, 'functions');

if (!fs.existsSync(vercelOutputDir)) {
  fs.mkdirSync(vercelOutputDir, { recursive: true });
}

if (!fs.existsSync(vercelStaticDir)) {
  fs.mkdirSync(vercelStaticDir, { recursive: true });
}

if (!fs.existsSync(vercelFunctionsDir)) {
  fs.mkdirSync(vercelFunctionsDir, { recursive: true });
}

// Copy dist directory to Vercel static output
const distDir = path.resolve(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  console.log('Copying dist directory to Vercel static output...');
  copyDir(distDir, vercelStaticDir);
}

// Copy api directory to Vercel functions output
const apiSourceDir = path.resolve(__dirname, 'api');
const apiDestDir = path.resolve(vercelFunctionsDir, 'api');
if (fs.existsSync(apiSourceDir)) {
  console.log('Copying api directory to Vercel functions output...');
  copyDir(apiSourceDir, apiDestDir);
}

console.log('Vercel build completed successfully!');