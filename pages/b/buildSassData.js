const fs = require('fs');
const glob = require('glob');

let dataJson = {};

glob.sync('./node_modules/zusty/**/*.scss').forEach((path) => {
  dataJson[path.replace('./node_modules/zusty/', '')] = fs.readFileSync(path).toString();
});

fs.writeFileSync('public/scripts/sassData.json', JSON.stringify(dataJson));
