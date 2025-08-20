// This file is the entry point for the server
// It sets up Babel to transpile JSX and ES modules on the fly

import 'ignore-styles';
import babelRegister from '@babel/register';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

babelRegister({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: [".js", ".jsx", ".ts", ".tsx"]
});

// Import the server code
import './server.js';