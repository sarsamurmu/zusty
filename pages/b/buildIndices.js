const fs = require('fs')
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');
const chalk = require('chalk');
const config = require('./config');

const mainPath = 'public/docs';

var files = glob.sync('./' + mainPath + '/**/*.html', {
  ignore: './' + mainPath + '/**/index.html'
});

var index = 0;
var json = [];

files.forEach((file) => {
  var html = fs.readFileSync(file).toString();
  var qs = cheerio.load(html);

  var level1json = [];
  var level2json = [];
  var level3json = [];
  var level1index = 0;
  var level2index = 0;
  var level3index = 0;
  var lockCollect = false;

  json[index] = {};
  json[index]['link'] = file.replace('./', '');

  qs('body > h1').each((i, el) => {
    level1json[level1index] = {};
    level1json[level1index]['name'] = qs(el).text();
    level1json[level1index]['body'] = qs(el).next().text();

    // Loop Through All Elements Until Next Same Type of Selector
    qs(el).nextUntil('h1').each((i, el) => {

      // Excute when found Level 2 Selector
      var tagname = qs(el)[0];
      if (tagname.name === 'h2') {
        level2json[level2index] = {};
        if (qs(el).text() === 'Structure') {
          return;
        } else {
          level2json[level2index]['name'] = qs(el).text();
        }
        level2json[level2index]['anchor'] = qs(el).attr('id');
        level2json[level2index]['body'] = '';

        // Loop through all elements for text selector
        qs(el).nextUntil('h2').each((i, el) => {

          var tagname = qs(el)[0];
          // Excute when Found Level 3 Selector
          if (tagname.name === 'h3') {
            level3json[level3index] = {};
            level3json[level3index]['name'] = qs(el).text();
            level3json[level3index]['anchor'] = qs(el).attr('id');
            level3json[level3index]['body'] = '';

            // Loop through all elements for text selector
            qs(el).nextUntil('h3, h2').each((i, el) => {

              var tagname = qs(el)[0];
              // If found text Selector Collect the text
              if (tagname.name === 'p') {
                if (qs(el).text().trim() === '') return;
                level3json[level3index]['body'] += qs(el).text().replace('\n', '') + ' ';
              }
            });

            // Update the JSON
            level2json[level2index]['level3'] = level3json;
            // Increase Index of Level 2
            level3index += 1;
          }

          var tagname = qs(el)[0];
          if (tagname.name === 'h3') {
            lockCollect = true;
          }

          if (tagname.next) {
            if (tagname.next.name === 'h2') {
              lockCollect = false;
            }
          }

          // If found text Selector Collect the text
          if (tagname.name === 'p') {
            if (lockCollect === false) {
              if (qs(el).text().trim() === '') return;
              level2json[level2index]['body'] += qs(el).text().replace('\n', '') + ' ';
            }
          }
        });

        // Reset
        level3index = 0;
        level3json = [];
        // Update the JSON
        level1json[level1index]['level2'] = level2json;
        // Increase Index of Level 2
        level2index += 1;
      }
    });

    // Reset
    level2index = 0;
    level2json = [];
    json[index]['level1'] = level1json;
    level1index += 1;
  });

  index += 1;
});

var dataFileDir = path.resolve(`./${mainPath}/data/`);

fs.mkdirSync(dataFileDir, {
  recursive: true
})

fs.writeFileSync(path.join(dataFileDir, 'searchIndex.json'), JSON.stringify(json));

console.log(chalk.green(`Wrote indices successfully`));
