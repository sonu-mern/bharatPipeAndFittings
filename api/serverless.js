// This file adapts the Express server to work in a serverless environment

import express from 'express';
import serverless from 'serverless-http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const app = express();

// Helper function to resolve paths
const staticRoot = path.resolve(__dirname, '../../static');

// Serve static assets
app.use('/assets', express.static(path.join(staticRoot, 'assets')));

// Serve public files
app.use(express.static(staticRoot));

// Ensure dist directory exists
const distDir = staticRoot;
if (!fs.existsSync(distDir)) {
  console.warn('Warning: dist directory not found at', distDir);
  // Create dist directory if it doesn't exist
  fs.mkdirSync(distDir, { recursive: true });
}

// Handle all other routes with SSR
app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    
    let template;
    const indexPath = path.join(staticRoot, 'index.html');
    console.log('Attempting to read index.html from:', indexPath);
    try {
      template = fs.readFileSync(indexPath, 'utf-8');
    } catch (error) {
      console.error('Error reading index.html:', error);
      return res.status(500).send('Error: Could not find index.html. Please ensure the build process completed successfully.');
    }
    
    let render;
    try {
      render = (await import(`${path.join(staticRoot, 'server/entry-server.mjs')}`)).render;
    } catch (error) {
      console.error('Error importing entry-server.mjs:', error);
      return res.status(500).send('Error: Could not load server renderer. Please ensure the build process completed successfully.');
    }
    
    const context = {};
    const { html: appHtml, helmetContext } = await render(url, context);
    
    // If there's a redirect from the StaticRouter context
    if (context.url) {
      return res.redirect(301, context.url);
    }
    
    // Get head tags from helmet
    const { helmet } = helmetContext;
    
    // Replace placeholders in the HTML template
    const html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace('<!--head-tags-->', helmet ? `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}` : '');
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    console.error(e);
    res.status(500).end(e.stack);
  }
});

// Export the serverless handler
export default serverless(app);