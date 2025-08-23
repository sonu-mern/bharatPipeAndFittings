// Yeh file tumhare SSR server ke liye entry point hai
// Babel ko setup karta hai taaki JSX aur ES Modules transpile ho sake

import 'ignore-styles';
import { fileURLToPath } from 'url';
import path from 'path';
import babelRegister from '@babel/register';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

babelRegister({
  ignore: [/(node_modules)/], // spelling fix: node_module ❌ → node_modules ✅
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  extensions: [".js", ".jsx", ".ts", ".tsx"]
});

// Ab actual server ko import karo
import('./server.js').catch(err => {
  console.error("❌ Error starting server:", err);
});


