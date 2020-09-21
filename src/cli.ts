#!/usr/bin/env node

const [,, ...args] = process.argv;

console.log('args: ', args);

export default args;