const fs = require('fs');
const glob = require('glob');
const path = require('path');
const chokidar = require('chokidar');

const args = process.argv.splice(2, process.argv.length - 2);

let dirToCopy = './tocopy/';

let copyFiles = () => {
  glob.sync(dirToCopy + '**/*.*').forEach((file) => {
    fs.mkdirSync(path.dirname(file.replace('tocopy', 'public')), {
      recursive: true
    });
    fs.copyFileSync(file, file.replace('tocopy', 'public'))
  });
}

if (args.includes('-w')) {
  chokidar.watch(dirToCopy).on('all', copyFiles);
} else {
  copyFiles();
  fs.copyFileSync('./node_modules/sass.js/dist/sass.js', './public/scripts/sass.js');
  fs.copyFileSync('./node_modules/sass.js/dist/sass.worker.js', './public/scripts/sass.worker.js');
  fs.copyFileSync('../dist/zusty.min.css', './public/resources/zusty.min.css');
}
