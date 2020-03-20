import Fuse from 'fuse.js';

const search = {};
search.initSearch = () => {
  const options = {
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

  let fuse;
  let searchIndex;
  let ready = false;

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

  const highlight = (matches, text, shouldNotTruncate) => {
    let newText = '';
    const truncateOffset = 50;
    matches.forEach((match) => {
      if (match.value === text) {
        match.indices.forEach((index) => {
          const piece = text.substring(index[0], index[1]);
          const preEllipses = '';
          const textBefore = text.substring(Math.max(0, index[0] - truncateOffset), index[0]);
          let textAfter;
          if (shouldNotTruncate) {
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

  const showResults = () => {
    if (ready) {
      searchResult.innerHTML = '';

      const searchQuery = searchInput.value;
      const resultJSON = fuse.search(searchQuery);

      if (resultJSON.length === 0) {
        searchResult.innerHTML = `No result found for '${searchQuery}'`;
      }

      resultJSON.forEach((itemObject) => {
        const link = itemObject.item.link;
        const lvl1 = itemObject.item.level1;
        let
          headerAvail = false,
          subHeaderAvail = false,
          header2Avail = false,
          subHeader2Avail = false,
          headerAttached = false;


        lvl1.forEach((lvl1item) => {
          const lvl1block = document.createElement('div');
          lvl1block.classList.add('item-level-1');

          const hHeader = highlight(itemObject.matches, lvl1item.name, true);
          if (hHeader.length !== 0) {
            headerAvail = true;
          }
          const header = document.createElement('a');
          header.innerHTML = hHeader;
          header.setAttribute('href', link);
          if (headerAvail) {
            lvl1block.appendChild(header);
            headerAttached = true;
          }

          const hSubheader = highlight(itemObject.matches, lvl1item.body);
          if (hSubheader.length !== 0) {
            const subheader = document.createElement('span');
            subheader.innerHTML = hSubheader;
            header.appendChild(subheader);
            subHeaderAvail = true;
          }

          if (lvl1item.level2) {
            const lvl2 = lvl1item.level2;

            lvl2.forEach((lvl2item) => {
              const lvl2block = document.createElement('a');
              lvl2block.classList.add('item-level-2');
              if (lvl2item.anchor) {
                lvl2block.setAttribute('href', link + '#' + lvl2item.anchor);
              }

              const hHeader = highlight(itemObject.matches, lvl2item.name, true);
              if (hHeader.length !== 0) {
                const lvl2Header = document.createElement('h4');
                lvl2Header.innerHTML = hHeader;
                lvl2block.appendChild(lvl2Header);
                header2Avail = true;
              }

              const hSubheader = highlight(itemObject.matches, lvl2item.body);
              if (hSubheader.length !== 0) {
                const lvl2Subheader = document.createElement('p');
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
