const fs = require('fs');

var scssFile = fs.readFileSync('./zusty.scss').toString();
var packageJson = JSON.parse(fs.readFileSync('./package.json').toString());

scssFile = scssFile.replace(/v([\d\.]+)/g, `v${packageJson.version}`);

fs.writeFileSync('./zusty.scss', scssFile);
