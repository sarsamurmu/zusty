const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chokidar = require('chokidar');
const chalk = require('chalk');
const browserSync = require('browser-sync');
const config = require('./config');

const pug = require('pug');
const minifyHtml = require('html-minifier').minify;
const args = process.argv.splice(2, process.argv.length - 2);

const pugFilePath = './src/**/*.pug';
const pugImportsPath = ['./src/docs/_includes/*.pug', './src/docs/base.pug', './src/**/_*.pug'];
const ignoredPaths = ['./src/docs/_includes/*', './src/docs/base.pug', './src/_includes/*', './src/**/_*'];

let renderFile = (filePath) => {
  let outputPath = filePath.replace('src', 'public').replace('.pug', '.html');

  config.navItems = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/docs/navigationData.json')).toString());
  config.canonical = outputPath.replace(/(\.\/)?public/g, 'https://zustycss.com').replace(/\\/g, '/').replace(/(\.html|\/index)/g, '');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  fs.writeFileSync(outputPath, minifyHtml(pug.compileFile(filePath)(config).replace(/\#\{(.*?)\}/g, (m, offset, s) => config[offset.trim()]), {
    minifyJS: true,
    minifyCSS: true
  }));

  console.log(chalk.green(`Rendered ${filePath} to ${outputPath}\n`));
}

if (args.includes('-w')) {
  chokidar.watch(pugFilePath, {
    ignored: ignoredPaths
  }).on('change', renderFile).on('ready', () => console.log(chalk.magenta(`Watching Pug files for change\n`)));

  chokidar.watch(pugImportsPath).on('change', (filePath) => {
    console.log(chalk.blue(`Import changed ${filePath}\n`));

    if (browserSync.has('default')) browserSync.get('default').pause();

    glob.sync(pugFilePath, { ignore: ignoredPaths }).forEach(renderFile);

    if (browserSync.has('default')) browserSync.get('default').resume();
  })
} else {
  console.log(chalk.magenta(`Rendering Pug files\n`));

  glob.sync(pugFilePath, { ignore: ignoredPaths }).forEach(renderFile);
}
