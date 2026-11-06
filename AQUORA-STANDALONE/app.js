'use strict';

const fs = require('fs');
const path = require('path');

// Standalone entry point
const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');
const localServer = path.join(__dirname, 'server.js');

if (fs.existsSync(standaloneServer)) {
  process.chdir(path.join(__dirname, '.next', 'standalone'));
  require(standaloneServer);
} else if (fs.existsSync(localServer)) {
  require(localServer);
} else {
  console.error('Error: Standalone server not found. Please run "npm run build" first.');
  process.exit(1);
}
