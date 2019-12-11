const fs = require('fs');
const glob = require('glob');

const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

glob.sync('./public/stylesheets/*.css').forEach((filePath) => {
  postcss([ autoprefixer ]).process(fs.readFileSync(filePath).toString(), { from: undefined }).then((result) => {
    fs.writeFileSync(filePath, result.css);
  })
});
