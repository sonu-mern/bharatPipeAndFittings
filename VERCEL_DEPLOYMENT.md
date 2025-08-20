# Deploying Bharat Pipe & Fittings to Vercel

This document provides instructions for deploying the SSR version of the Bharat Pipe & Fittings website to Vercel.

## Deployment Steps

1. **Connect your GitHub repository to Vercel**
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "Add New" > "Project"
   - Connect to your GitHub repository
   - Select the repository containing this project

2. **Configure the project**
   - Framework Preset: Other
   - Root Directory: Leave as default (./)
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**
   - Add any environment variables needed for your project
   - Make sure to set `NODE_ENV=production`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application

## How It Works

The deployment is configured to work with Server-Side Rendering (SSR) through:

- **vercel.json**: Configures build settings and routing
- **api/index.js**: Serverless function that handles SSR requests
- **api/serverless.js**: Adapts the Express server to work in a serverless environment

## Troubleshooting

If you encounter issues during deployment:

1. Check the Vercel build logs for errors
2. Ensure all dependencies are correctly installed
3. Verify that the serverless functions are correctly configured
4. Make sure the static assets are being served correctly

## Local Testing

To test the production build locally before deploying:

```bash
npm run build
npm run serve
```

This will build the client and server bundles and start the server locally.