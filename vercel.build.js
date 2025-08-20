// This file is used by Vercel to build the project
// It ensures that the server-side rendering works correctly

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
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
console.log('Executing vercel.build.js...');
console.log('Building client and server bundles...');
execSync('npm run build:client', { stdio: 'inherit' });
execSync('npm run build:server', { stdio: 'inherit' });

console.log('Listing contents of dist directory:');
execSync('dir /s /b dist', { stdio: 'inherit' });


// Clean up previous Vercel output directory if it exists
const vercelOutputDir = path.resolve(__dirname, '.vercel', 'output');
if (fs.existsSync(vercelOutputDir)) {
  fs.rmSync(vercelOutputDir, { recursive: true, force: true });
}

// Ensure the Vercel output directories exist
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
  console.log('Copying dist directory from:', distDir, 'to:', vercelStaticDir);
  copyDir(distDir, vercelStaticDir);
}

// Copy api directory to Vercel functions output
const apiSourceDir = path.resolve(__dirname, 'api');
const apiDestDir = path.resolve(vercelFunctionsDir, 'api');
if (fs.existsSync(apiSourceDir)) {
  console.log('Copying api directory to Vercel functions output...');
  copyDir(apiSourceDir, apiDestDir);
}


// Create config.json for Vercel output
const configContent = {
  version: 3,
  routes: [
    { "src": "/api/(.*)", "dest": "/api" },
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/functions/api/serverless.js" }
  ]
};

const configFilePath = path.resolve(vercelOutputDir, 'config.json');
fs.writeFileSync(configFilePath, JSON.stringify(configContent, null, 2));
console.log('Created config.json at:', configFilePath);

console.log('Vercel build completed successfully!');