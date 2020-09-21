#!/usr/bin/env node

import path from 'path';
import namePathSn from './procedures/namePathSanitizer';

const [, pathProcess, ...args] = process.argv;

console.log('process.argv: ', process.argv);
console.log('process.cwd: ', process.cwd());
console.log('args: ', args);
console.log('pathProcess: ', pathProcess);
const rootFn = path.join.bind( process.cwd());
const namePath = namePathSn(rootFn, args);

console.log('namePath return: ', namePath);
console.log('index.ts args: ', args);
