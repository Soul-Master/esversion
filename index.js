#!/usr/bin/env node

const fs = require('fs');
const { getEcmaVersion } = require('detect-es-version');
const process = require('process');

const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath, 'utf-8');
const ecmaVersion = getEcmaVersion(fileContent);

console.log('ECMA Version:', ecmaVersion); // prints 2015