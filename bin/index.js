#!/usr/bin/env node

const commander = require('commander');

commander
  .version(require('../package.json').version)
  .description('Wyle CLI')
  .option('-v, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .parse(process.argv);