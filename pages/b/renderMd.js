const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chokidar = require('chokidar');
const chalk = require('chalk');
const browserSync = require('browser-sync');

const config = require('./config');

const pug = require('pug');
const args = process.argv.splice(2, process.argv.length - 2);

const md = require('markdown-it')({
  html: true,
  langPrefix: 'lang-',
  breaks: true
}).disable('code');
md.use(require('./mdPlugins'));
const metadataParser = require('markdown-yaml-metadata-parser');
const minifyHtml = require('html-minifier').minify;

const baseFile = './src/docs/base.pug'
const mdFilePath = `./src/docs/**/*.md`;
const pugImportsPath = ['./src/docs/_includes/*.pug', baseFile, './src/_mixins.pug'];

let pugFunc = pug.compileFile(baseFile);

let renderFile = (filePath) => {
  let outputPath = filePath.replace('src', 'public').replace('.md', '.html');
  let canonical = outputPath.replace(/(\.\/)?public/g, 'https://zustycss.com').replace(/\\/g, '/').replace(/(\.html|\/index)/g, '');
  let markdown = metadataParser(fs.readFileSync(filePath).toString());
  let renderedHTML = md.render(markdown.content.replace(/#{(.*?)}/g, (m, offset, s) => config[offset.trim()]));

  fs.mkdirSync(path.dirname(outputPath), {
    recursive: true
  });

  fs.writeFileSync(outputPath, minifyHtml(pugFunc({
    inner: renderedHTML,
    navItems: JSON.parse(fs.readFileSync('./src/docs/navigationData.json').toString()),
    ...markdown.metadata,
    ...config,
    canonical
  }), {
    minifyJS: true,
    minifyCSS: true
  }));

  console.log(chalk.green(`Rendered ${filePath} to ${outputPath}\n`));
}

if (args.includes('-w')) {
  chokidar.watch(mdFilePath).on('change', (filePath) => setTimeout(() => renderFile(filePath), 100)).on('ready', () => console.log(chalk.magenta(`Watching Markdown files for change\n`)));

  chokidar.watch(pugImportsPath).on('change', (filePath) => setTimeout(() => {
    console.log(chalk.blue(`Import changed ${filePath}\n`));

    if (browserSync.has('default')) browserSync.get('default').pause();

    pugFunc = pug.compileFile(baseFile);

    glob.sync(mdFilePath).forEach(renderFile);

    if (browserSync.has('default')) browserSync.get('default').resume();
  }, 100))
} else {
  console.log(chalk.magenta(`Rendering Markdown files\n`));

  glob.sync(mdFilePath).forEach(renderFile);
}
