#!/usr/bin/env node

import path from 'path';

import { argsSanitizer } from './procedures/argsSanitizer';
import { extract } from './extract';


const [, pathProcess, ...args] = process.argv;

console.log('process.cwd: ', process.cwd());
console.log('args: ', args);
console.log('pathProcess: ', pathProcess);
console.log('__dirname: ', __dirname);
console.log('__filename: ', __filename);

const extractSanitizer = argsSanitizer(args);
const rootCwdFn = path.join.bind(process.cwd());
const {blName, extractPath, fileNames} = extractSanitizer(rootCwdFn, args);

const copyPath = path.join(__dirname, '..', 'boilerplates', blName);

console.log('copyPath: ', copyPath);
console.log('extractPath: ', extractPath);

extract(extractPath, copyPath, fileNames);
