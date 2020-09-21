#!/usr/bin/env node

import path from 'path';

import { argsSanitizer } from './procedures/argsSanitizer';
import { boilerplateTransporter } from './boilerplateTransporter';
import { boilerplates } from './boilerplates';


const [, pathProcess, ...args] = process.argv;

console.log('args: ', args);

const {command, sanitizer} = argsSanitizer(args);
const rootCwdFn = path.join.bind(process.cwd());
const {blName, inputedPath, fileNames} = sanitizer(rootCwdFn, args);

const boilerplatePath = boilerplates(blName);

console.log('extractPath: ', inputedPath);

boilerplateTransporter(command, inputedPath, boilerplatePath, fileNames)[command]();
