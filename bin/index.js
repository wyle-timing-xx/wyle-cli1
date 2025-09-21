#!/usr/bin/env node

const { program } = require('commander');
const { showVersion } = require('../lib/version');
const pkg = require('../package.json');

// 检查是否是版本参数
const args = process.argv.slice(2);
if (args.includes('-v') || args.includes('--version')) {
  showVersion();
  process.exit(0);
}

// 配置 Commander
program
  .name('wyle-gen')
  .description(pkg.description)
  .helpOption('-h, --help', '显示帮助信息');

// 主要命令
program
  .command('create <project-name>')
  .description('创建新的前端项目')
  .option('-t, --template <template>', '选择模板类型', 'react')
  .action((projectName, options) => {
    console.log(`创建项目: ${projectName}`);
    console.log(`模板: ${options.template}`);
    // 这里调用你的创建项目逻辑
    // require('../lib/create')(projectName, options);
  });

// 解析命令
program.parse();

// 如果没有参数，显示帮助
if (!process.argv.slice(2).length) {
  program.help();
}