// api/index.js - Vercel serverless function
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

// Fix path resolution for Vercel
const resolve = (p) => {
  // In Vercel, the working directory is set to dist, so we need to go up one level
  const resolvedPath = path.resolve(__dirname, '..', p);
  console.log(`Resolving path: ${p} -> ${resolvedPath}`);
  return resolvedPath;
};

// Serve static assets
app.use('/assets', express.static(resolve('client/assets'), { maxAge: '1y' }));

// Serve public files
app.use(express.static(resolve('public'), { maxAge: '30d' }));

// Serve client files
app.use(express.static(resolve('client'), { index: false }));

// SSR handling
app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    console.log(`Handling request for: ${url}`);

    let template;
    let render;

    if (isProduction) {
      // In Vercel, we're in the dist directory
      const clientIndex = resolve('client/index.html');
      console.log(`Looking for client index at: ${clientIndex}`);
      
      if (!fs.existsSync(clientIndex)) {
        console.error(`Client index not found at: ${clientIndex}`);
        throw new Error('client/index.html not found. Did you run `npm run build`?');
      }
      
      template = fs.readFileSync(clientIndex, 'utf-8');
      const serverEntry = resolve('server/entry-server.js');
      console.log(`Loading server entry from: ${serverEntry}`);
      render = (await import(`file://${serverEntry}`)).render;
    } else {
      template = fs.readFileSync(resolve('index.html'), 'utf-8');
      render = (await import(`file://${resolve('src/entry-server.jsx')}`)).render;
    }

    const context = {};
    const { html: appHtml, helmetContext } = render(url, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    const { helmet } = helmetContext || {};

    const html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace(
        '<!--head-tags-->',
        helmet
          ? `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`
          : ''
      );

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    console.error('❌ SSR Error:', e);
    console.error('Stack trace:', e.stack);
    res.status(500).end(`SSR Error: ${e.message}`);
  }
});

// Export for Vercel
export default app;
