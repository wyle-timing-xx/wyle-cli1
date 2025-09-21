const chalk = require('chalk');
const lolcatjs = require('@darkobits/lolcatjs');
const pkg = require('../package.json');

function showVersion() {
  console.log();
  
  // 彩虹渐变的CLI名称
  const title = lolcatjs.default.fromString(`
╔══════════════════════════════════════╗
║        🚀 ${pkg.name.toUpperCase()}   ║
╚══════════════════════════════════════╝
  `);
  
  console.log(title);
  
  // 版本信息
  console.log(chalk.cyan('📦 版本信息:'));
  console.log(`   ${chalk.yellow('版本:')} ${chalk.green.bold('v' + pkg.version)}`);
  console.log(`   ${chalk.yellow('描述:')} ${chalk.white(pkg.description)}`);
  console.log(`   ${chalk.yellow('作者:')} ${chalk.white(pkg.author)}`);
  console.log(`   ${chalk.yellow('许可:')} ${chalk.white(pkg.license)}`);
  
  console.log();
  
  // 系统信息
  console.log(chalk.cyan('🔧 环境信息:'));
  console.log(`   ${chalk.yellow('Node.js:')} ${chalk.green(process.version)}`);
  console.log(`   ${chalk.yellow('平台:')} ${chalk.green(process.platform)}`);
  console.log(`   ${chalk.yellow('架构:')} ${chalk.green(process.arch)}`);
  
  console.log();
  
  // 使用提示
  const helpText = `
${chalk.cyan('🎯 快速开始:')}
   ${chalk.gray('创建项目:')} ${chalk.green('wyle-gen create <project-name>')}
   ${chalk.gray('查看帮助:')} ${chalk.green('wyle-gen --help')}
   ${chalk.gray('简短命令:')} ${chalk.green('w-g create <project-name>')}

${chalk.cyan('🔗 更多信息:')}
   ${chalk.gray('文档:')} ${chalk.blue.underline('https://github.com/wyle-timing/wyle-cli')}
   ${chalk.gray('问题反馈:')} ${chalk.blue.underline('https://github.com/wyle-timing/wyle-cli/issues')}
  `;
  
  console.log(helpText);
  
  // 底部装饰
  const footer = lolcatjs.default.fromString('✨ 感谢使用，祝您开发愉快！ ✨');
  console.log(footer);
  console.log();
}

module.exports = {
  showVersion
};