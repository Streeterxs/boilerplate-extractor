#!/usr/bin/env node

import path from 'path';

import namePathSn from './procedures/namePathSanitizer';
import copyDirectoryFiles from './procedures/copyDirectoryFiles';

const [, pathProcess, ...args] = process.argv;

console.log('process.cwd: ', process.cwd());
console.log('args: ', args);
console.log('pathProcess: ', pathProcess);
console.log('__dirname: ', __dirname);
console.log('__filename: ', __filename);

const rootCwdFn = path.join.bind(process.cwd());
const {blName, extractPath, fileNames} = namePathSn(rootCwdFn, args);

const copyPath = path.join(__dirname, '..', 'boilerplates', blName);

console.log('copyPath: ', copyPath);
console.log('extractPath: ', extractPath);

copyDirectoryFiles(extractPath, copyPath, fileNames);
