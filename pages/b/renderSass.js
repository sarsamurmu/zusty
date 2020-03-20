const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chokidar = require('chokidar');
const chalk = require('chalk');

const sass = require('node-sass');
const args = process.argv.splice(2, process.argv.length - 2);

const sassPath = `./src/stylesheets/*.scss`;
const sassImportPath = './src/stylesheets/imports/';

const renderFile = (filePath) => {
  const outputPath = filePath.replace('src', 'public').replace('.scss', '.css');

  try {
    const result = sass.renderSync({
      file: filePath,
      outputStyle: 'compressed'
    });

    fs.mkdirSync(path.dirname(outputPath), {
      recursive: true
    });

    fs.writeFileSync(outputPath, result.css.toString());

    console.log(chalk.green(`Rendered ${filePath} to ${outputPath}\n`));
  } catch (err) {
    console.log(chalk.red(err.formatted))
  }
}

if (args.includes('-w')) {
  chokidar.watch(sassPath).on('change', (filePath) => setTimeout(() => renderFile(filePath), 100)).on('ready', () => console.log(chalk.magenta(`Watching Sass files for change\n`)));

  chokidar.watch(sassImportPath).on('change', (filePath) => setTimeout(() => {
    console.log(chalk.blue(`Import changed ${filePath}\n`));

    glob.sync(sassPath).forEach(renderFile);
  }, 100));
} else {
  console.log(chalk.magenta(`Rendering Sass files\n`))

  glob.sync(sassPath).forEach(renderFile);
}
