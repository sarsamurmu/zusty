const fs = require('fs');
const pkg = require('./package.json');

let scssFile = fs.readFileSync('./zusty.scss').toString();

scssFile = scssFile.replace(/v([\d\.]+)/g, `v${pkg.version}`);

fs.writeFileSync('./zusty.scss', scssFile);
