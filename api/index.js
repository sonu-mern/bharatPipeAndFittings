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

// Debug current directory structure
console.log('Current directory:', process.cwd());
console.log('API function directory:', __dirname);
console.log('Files in current directory:', fs.readdirSync('.'));

// Fix path resolution for Vercel
const resolve = (p) => {
  // Try different path strategies
  const paths = [
    path.resolve(__dirname, '..', p),
    path.resolve(process.cwd(), p),
    path.resolve(__dirname, '..', '..', p),
    path.resolve(process.cwd(), '..', p)
  ];

  for (const resolvedPath of paths) {
    console.log(`Trying path: ${p} -> ${resolvedPath}`);
    if (fs.existsSync(resolvedPath)) {
      console.log(`Found path: ${resolvedPath}`);
      return resolvedPath;
    }
  }

  console.log(`No path found for: ${p}`);
  return path.resolve(__dirname, '..', p); // fallback
};

// Serve static assets from client build
app.use('/assets', express.static(resolve('dist/client/assets'), { maxAge: '1y' }));

// Serve public files (including catalog.pdf)
app.use(express.static(resolve('public'), { maxAge: '30d' }));

// Serve client files
app.use(express.static(resolve('dist/client'), { index: false }));

// Handle static files explicitly with proper content types
app.get('/catalog.pdf', (req, res) => {
  console.log('Handling catalog.pdf request');

  const possiblePaths = [
    resolve('public/catalog.pdf'),
    resolve('dist/client/catalog.pdf'),
    path.resolve(process.cwd(), 'public/catalog.pdf'),
    path.resolve(process.cwd(), 'dist/client/catalog.pdf'),
    path.resolve(__dirname, '..', 'public/catalog.pdf'),
    path.resolve(__dirname, '..', 'dist/client/catalog.pdf'),
    path.resolve(process.cwd(), 'catalog.pdf'),
    path.resolve(__dirname, '..', 'catalog.pdf')
  ];

  for (const filePath of possiblePaths) {
    console.log(`Checking for catalog.pdf at: ${filePath}`);
    if (fs.existsSync(filePath)) {
      console.log(`Found catalog.pdf at: ${filePath}`);
      res.setHeader('Content-Type', 'application/pdf');
      return res.sendFile(filePath);
    }
  }

  console.log('catalog.pdf not found in any location');
  res.status(404).end('Catalog PDF not found');
});

// Handle site.webmanifest with proper content type
app.get('/site.webmanifest', (req, res) => {
  console.log('Handling site.webmanifest request');

  const possiblePaths = [
    resolve('public/site.webmanifest'),
    resolve('dist/client/site.webmanifest'),
    path.resolve(process.cwd(), 'public/site.webmanifest'),
    path.resolve(process.cwd(), 'dist/client/site.webmanifest'),
    path.resolve(__dirname, '..', 'public/site.webmanifest'),
    path.resolve(__dirname, '..', 'dist/client/site.webmanifest')
  ];

  for (const filePath of possiblePaths) {
    console.log(`Checking for site.webmanifest at: ${filePath}`);
    if (fs.existsSync(filePath)) {
      console.log(`Found site.webmanifest at: ${filePath}`);
      res.setHeader('Content-Type', 'application/manifest+json');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      return res.sendFile(filePath);
    }
  }

  console.log('site.webmanifest not found in any location');
  res.status(404).json({ error: 'Manifest not found' });
});

// Handle sitemap.xml with proper content type
app.get('/sitemap.xml', (req, res) => {
  console.log('Handling sitemap.xml request');

  const possiblePaths = [
    resolve('public/sitemap.xml'),
    resolve('dist/client/sitemap.xml'),
    path.resolve(process.cwd(), 'public/sitemap.xml'),
    path.resolve(process.cwd(), 'dist/client/sitemap.xml'),
    path.resolve(__dirname, '..', 'public/sitemap.xml'),
    path.resolve(__dirname, '..', 'dist/client/sitemap.xml')
  ];

  for (const filePath of possiblePaths) {
    console.log(`Checking for sitemap.xml at: ${filePath}`);
    if (fs.existsSync(filePath)) {
      console.log(`Found sitemap.xml at: ${filePath}`);
      res.setHeader('Content-Type', 'application/xml');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      return res.sendFile(filePath);
    }
  }

  console.log('sitemap.xml not found in any location');
  res.status(404).json({ error: 'Sitemap not found' });
});

// Handle robots.txt with proper content type
app.get('/robots.txt', (req, res) => {
  console.log('Handling robots.txt request');

  const possiblePaths = [
    resolve('public/robots.txt'),
    resolve('dist/client/robots.txt'),
    path.resolve(process.cwd(), 'public/robots.txt'),
    path.resolve(process.cwd(), 'dist/client/robots.txt'),
    path.resolve(__dirname, '..', 'public/robots.txt'),
    path.resolve(__dirname, '..', 'dist/client/robots.txt')
  ];

  for (const filePath of possiblePaths) {
    console.log(`Checking for robots.txt at: ${filePath}`);
    if (fs.existsSync(filePath)) {
      console.log(`Found robots.txt at: ${filePath}`);
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      return res.sendFile(filePath);
    }
  }

  console.log('robots.txt not found in any location');
  res.status(404).json({ error: 'Robots.txt not found' });
});

// Check for static files before SSR
app.use((req, res, next) => {
  const url = req.originalUrl;
  console.log(`Checking request for: ${url}`);

  // Check if it's a static file request (but not catalog.pdf, site.webmanifest, sitemap.xml, or robots.txt which we handle above)
  if (url.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|ttf|eot|xml|txt)$/i) &&
    !url.includes('catalog.pdf') &&
    !url.includes('site.webmanifest') &&
    !url.includes('sitemap.xml') &&
    !url.includes('robots.txt')) {
    console.log(`Static file request detected: ${url}`);

    // Try to find the file in public directory
    const publicPath = resolve('public');
    const filePath = path.join(publicPath, url);

    console.log(`Looking for file at: ${filePath}`);

    if (fs.existsSync(filePath)) {
      console.log(`Serving static file: ${filePath}`);
      return res.sendFile(filePath);
    }

    // Try in client assets
    const clientAssetsPath = resolve('dist/client/assets');
    const clientFilePath = path.join(clientAssetsPath, url.replace('/assets/', ''));

    console.log(`Looking for file in client assets: ${clientFilePath}`);

    if (fs.existsSync(clientFilePath)) {
      console.log(`Serving client asset: ${clientFilePath}`);
      return res.sendFile(clientFilePath);
    }

    // Try in client root
    const clientRootPath = resolve('dist/client');
    const clientRootFilePath = path.join(clientRootPath, url);

    console.log(`Looking for file in client root: ${clientRootFilePath}`);

    if (fs.existsSync(clientRootFilePath)) {
      console.log(`Serving client root file: ${clientRootFilePath}`);
      return res.sendFile(clientRootFilePath);
    }

    console.log(`Static file not found: ${url}`);
    return res.status(404).end('File not found');
  }

  next();
});

// SSR handling - only for HTML routes
app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    console.log(`Handling SSR request for: ${url}`);

    let template;
    let render;

    if (isProduction) {
      // Try to find the client index file
      const possiblePaths = [
        resolve('dist/client/index.html'),
        path.resolve(process.cwd(), 'dist/client/index.html'),
        path.resolve(__dirname, '..', 'dist/client/index.html'),
        path.resolve(process.cwd(), 'index.html'),
        path.resolve(__dirname, '..', 'index.html')
      ];

      let clientIndex = null;
      for (const possiblePath of possiblePaths) {
        console.log(`Checking for client index at: ${possiblePath}`);
        if (fs.existsSync(possiblePath)) {
          clientIndex = possiblePath;
          console.log(`Found client index at: ${clientIndex}`);
          break;
        }
      }

      if (!clientIndex) {
        console.error('Client index not found in any of the expected locations');
        throw new Error('index.html not found. Did you run `npm run build`?');
      }

      template = fs.readFileSync(clientIndex, 'utf-8');

      // Try to find the server entry file
      const serverEntryPaths = [
        resolve('dist/server/entry-server.js'),
        path.resolve(process.cwd(), 'dist/server/entry-server.js'),
        path.resolve(__dirname, '..', 'dist/server/entry-server.js'),
        path.resolve(process.cwd(), 'server/entry-server.js'),
        path.resolve(__dirname, '..', 'server/entry-server.js')
      ];

      let serverEntry = null;
      for (const possiblePath of serverEntryPaths) {
        console.log(`Checking for server entry at: ${possiblePath}`);
        if (fs.existsSync(possiblePath)) {
          serverEntry = possiblePath;
          console.log(`Found server entry at: ${serverEntry}`);
          break;
        }
      }

      if (!serverEntry) {
        console.error('Server entry not found in any of the expected locations');
        throw new Error('entry-server.js not found. Did you run `npm run build`?');
      }

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
