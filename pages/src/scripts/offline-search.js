import Fuse from 'fuse.js';

const search = {};
search.initSearch = () => {
  var options = {
    shouldSort: true,
    includeMatches: true,
    threshold: 0.7,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
    keys: [
      'level1.name',
      'level1.body',
      'level1.level2.name',
      'level1.level2.body',
      'level1.level2.level3.name',
      'level1.level2.level3.body'
    ]
  };

  var fuse;
  var searchIndex;
  var ready = false;

  fetch('/docs/data/searchIndex.json').then((response) => {
    response.json().then((json) => {
      searchIndex = json;
      ready = true;
      fuse = new Fuse(searchIndex, options);
    })
  });

  const searchInput = document.querySelector('#searchInput');
  const searchResult = document.querySelector('#searchResult');

  searchInput.addEventListener('input', function() {
    showResults();
  });

  const highlight = (matches, text, dontTruncate) => {
    let newText = '';
    let truncateOffset = 50;
    matches.forEach((match) => {
      if (match.value === text) {
        match.indices.forEach((index) => {
          const piece = text.substring(index[0], index[1]);
          const preEllipses = '';
          const textBefore = text.substring(Math.max(0, index[0] - truncateOffset), index[0]);
          let textAfter;
          if (dontTruncate) {
            textAfter = text.substring(index[1]);
          } else {
            textAfter = text.substring(index[1], Math.min(text.length - 1, index[1] + truncateOffset)) + ` ... `;
          }
          newText += `${preEllipses}${textBefore}<u>${piece}</u>${textAfter}`;
        });
      }
    });
    
    return newText.trim();
  }

  function showResults() {
    if (ready) {
      searchResult.innerHTML = '';

      var searchQuery = searchInput.value;
      var resultJSON = fuse.search(searchQuery);

      if (resultJSON.length === 0) {
        searchResult.innerHTML = `No result found for '${searchQuery}'`;
      }

      resultJSON.forEach((itemObject) => {
        var link = itemObject.item.link;
        var lvl1 = itemObject.item.level1;
        var
          headerAvail = false,
          subHeaderAvail = false,
          header2Avail = false,
          subHeader2Avail = false;
        var headerAttached = false;


        lvl1.forEach((lvl1item) => {
          var lvl1block = document.createElement('div');
          lvl1block.classList.add('item-level-1');

          var hHeader = highlight(itemObject.matches, lvl1item.name, true);
          if (hHeader.length !== 0) {
            headerAvail = true;
          }
          var header = document.createElement('a');
          header.innerHTML = hHeader;
          header.setAttribute('href', link);
          if (headerAvail) {
            lvl1block.appendChild(header);
            headerAttached = true;
          }

          var hSubheader = highlight(itemObject.matches, lvl1item.body);
          if (hSubheader.length !== 0) {
            var subheader = document.createElement('span');
            subheader.innerHTML = hSubheader;
            header.appendChild(subheader);
            subHeaderAvail = true;
          }

          if (lvl1item.level2) {
            var lvl2 = lvl1item.level2;

            lvl2.forEach((lvl2item) => {
              var lvl2block = document.createElement('a');
              lvl2block.classList.add('item-level-2');
              if (lvl2item.anchor) {
                lvl2block.setAttribute('href', link + '#' + lvl2item.anchor);
              }

              var hHeader = highlight(itemObject.matches, lvl2item.name, true);
              if (hHeader.length !== 0) {
                var lvl2Header = document.createElement('h4');
                lvl2Header.innerHTML = hHeader;
                lvl2block.appendChild(lvl2Header);
                header2Avail = true;
              }

              var hSubheader = highlight(itemObject.matches, lvl2item.body);
              if (hSubheader.length !== 0) {
                var lvl2Subheader = document.createElement('p');
                lvl2Subheader.innerHTML = hSubheader;
                lvl2block.appendChild(lvl2Subheader);
                subHeader2Avail = true;
              }

              if (hHeader.length !== 0 && hSubheader.length !== 0) {
                if (!headerAttached) {
                  header.innerHTML = lvl1item.name;
                  lvl1block.appendChild(header);
                }
                lvl1block.appendChild(lvl2block);
              }
            });
          }

          if (subHeaderAvail || header2Avail || subHeader2Avail) {
            searchResult.appendChild(lvl1block);
          }
        });
      });
    }

    if (searchInput.value.trim() === '') searchResult.innerHTML = '';
  }
}

export default search
