import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const isProduction = process.env.NODE_ENV === 'production';
const app = express();
const port = process.env.PORT || 8010;
const resolve = (p) => path.resolve(__dirname, '..', p);

// Serve static assets
app.use('/assets', express.static(resolve('dist/assets'), { maxAge: '1y' }));

// Serve public files
app.use(express.static(resolve('public'), { maxAge: '30d' }));

// Serve index.html for root path
app.use(express.static(resolve('dist'), { index: false }));

// Everything else is handled by the SSR
app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    
    let template;
    let render;
    
    // In production, use the built files
    if (isProduction) {
      template = fs.readFileSync(resolve('dist/index.html'), 'utf-8');
      render = (await import(`file://${resolve('dist/server/entry-server.mjs')}`)).render;
    } else {
      // In development, use the source files directly
      template = fs.readFileSync(resolve('index.html'), 'utf-8');
      render = (await import(`file://${resolve('src/entry-server.jsx')}`)).render;
    }
    
    const context = {};
    const { html: appHtml, helmetContext } = render(url, context);
    
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

// No router middleware needed as we're using app directly

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});