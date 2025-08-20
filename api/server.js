// This file serves as the entry point for Vercel's serverless functions

import { createServer } from 'http';
import { parse } from 'url';
import serverless from './serverless.js';

// Create a server handler for local development
const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  serverless(req, res);
});

// Start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Export the serverless handler for Vercel
export default serverless;