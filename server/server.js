// server/server.js
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
const resolve = (p) => path.resolve(__dirname, '..', p);

// Serve static assets
app.use('/assets', express.static(resolve('dist/assets'), { maxAge: '1y' }));

// Serve public files
app.use(express.static(resolve('public'), { maxAge: '30d' }));

// Serve dist folder (no index by default)
app.use(express.static(resolve('dist'), { index: false }));

// SSR handling
app.use(async (req, res) => {
  try {
    const url = req.originalUrl;

    let template;
    let render;

    if (isProduction) {
      // check dist/client first, otherwise fallback dist/
      const clientIndex = resolve('dist/client/index.html');
      if (!fs.existsSync(clientIndex)) {
        throw new Error('dist/client/index.html not found. Did you run `npm run build`?');
      }
      template = fs.readFileSync(clientIndex, 'utf-8');
      render = (await import(`file://${resolve('dist/server/entry-server.mjs')}`)).render;
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
    res.status(500).end(e.stack);
  }
});

// 👉 For Vercel (no app.listen)
export default app;
