import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

// Create serverless function handler
export default async function handler(req, res) {
  try {
    const url = req.url;
    
    // Serve static assets if the request is for a static file
    if (url.startsWith('/assets/')) {
      const filePath = path.join(process.cwd(), `dist${url}`);
      return res.sendFile(filePath);
    }
    
    // Serve public files
    if (url.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|pdf|txt|css|js)$/)) {
      const publicPath = path.join(process.cwd(), `dist${url}`);
      if (fs.existsSync(publicPath)) {
        return res.sendFile(publicPath);
      }
    }
    
    // For all other requests, use SSR
    const template = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8');
    const render = (await import(path.join(process.cwd(), 'dist', 'server', 'entry-server.mjs'))).render;
    
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
}