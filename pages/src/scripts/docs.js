import 'prismjs';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/keep-markup/prism-keep-markup';

import docsearch from 'docsearch.js';
import offlineSearch from './offline-search';
import './worker';

import config from '../../b/config';

window.addEventListener('DOMContentLoaded', () => {
  // Enable DocSearch
  docsearch({
    apiKey: '2f2a38ea4a221f944f665b01d9887c98',
    indexName: 'zustycss',
    inputSelector: '#docSearch',
    debug: config.debug
  });

  // Enable Offline Search
  offlineSearch.initSearch();

  // Theme Control
  const metaColor = document.querySelector('meta[name=theme-color]');

  function toggleTheme() {
    if (localStorage.getItem('theme') === 'light') {
      metaColor.setAttribute('content', '#212121');
      document.documentElement.setAttribute('zust-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      metaColor.setAttribute('content', '#FFFFFF');
      document.documentElement.setAttribute('zust-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }
  window.toggleTheme = toggleTheme;

  // Searchbar
  window.isOnline = false;
  const searchContainer = document.querySelector('.search-container');
  const searchIgnore = searchContainer.querySelector('.input-box');
  const searchProvider = document.querySelector('#searchProvider');

  if (window.navigator.onLine) {
    window.isOnline = true;
  }

  doOnNetworkChange();

  window.addEventListener('online', () => {
    window.isOnline = true;
    doOnNetworkChange();
  });
  window.addEventListener('offline', () => {
    window.isOnline = false;
    doOnNetworkChange();
  });

  function doOnCheckChange() {
    let cls = 'zust-hidden';
    document.querySelector('#searchResult').innerHTML = '';
    if (searchProvider.checked) {
      document.querySelector('#docSearch').closest('div').classList.remove(cls);
      document.querySelector('#searchInput').classList.add(cls);
    } else {
      document.querySelector('#docSearch').closest('div').classList.add(cls);
      document.querySelector('#searchInput').classList.remove(cls);
    }
  }

  searchProvider.addEventListener('change', doOnCheckChange);

  function doOnNetworkChange() {
    let cls = 'zust-hidden';
    if (window.isOnline) {
      searchProvider.closest('label').classList.remove('zust-hidden');
    } else {
      searchProvider.checked = false;
      searchProvider.closest('label').classList.add('zust-hidden');
    }
    doOnCheckChange();
  }

  function showSearch() {
    searchContainer.classList.add('visible');
    if (window.isOnline) {
      setTimeout(function () {
         document.querySelector('#docSearch').focus();
      }, 100);
    } else {
      setTimeout(function () {
         document.querySelector('#searchInput').focus();
      }, 100);
    }
    body.classList.add('lock');
  }
  window.showSearch = showSearch;

  searchContainer.addEventListener('click', function () {
    hideSearch()
  });

  searchIgnore.addEventListener('click', function (e) {
    e.stopPropagation()
  });

  function hideSearch() {
    searchContainer.classList.remove('visible');
    body.classList.remove('lock');
    document.querySelector('#searchResult').innerHTML = '';
    document.querySelector('#searchInput').value = '';
  }
  window.hideSearch = hideSearch;

  // Navigation Things.....
  let sidenav = document.querySelector('.sidenav');
  let btmBar = document.querySelector('.bottombar');
  let dimmer = document.querySelector('.dimmer');
  let navopener = document.querySelector('.nav-opener');
  let navbacker = document.querySelector('.nav-backer');
  let body = document.querySelector('body');

  function showSidenav() {
    navopener.setAttribute('onclick', 'hideSidenav()');
    btmBar.classList.add('zust-flat');
    sidenav.classList.add('zust--visible');
    dimmer.classList.add('zust--visible');
    navopener.classList.add('zust--hidden');
    navbacker.classList.add('zust--visible');
    body.classList.add('lock');
  }
  window.showSidenav = showSidenav;

  function hideSidenav() {
    navopener.setAttribute('onclick', 'showSidenav()');
    btmBar.classList.remove('zust-flat');
    sidenav.classList.remove('zust--visible');
    dimmer.classList.remove('zust--visible');
    navopener.classList.remove('zust--hidden');
    navbacker.classList.remove('zust--visible');
    body.classList.remove('lock');
  }
  window.hideSidenav = hideSidenav;

  // Sidenav Items
  let navItemHome = sidenav.querySelector('.home-item-container');
  let navSubs = document.querySelector('.sub-item-container');

  // Activating the Current Page in Sidenav
  let pageURL =  window.location.pathname;

  // Back Button's Functionality
  function navBack() {
    clearSubs();
    navItemHome.classList.remove('zust--hidden');
    navSubs.classList.remove('zust--visible');
    navItemHome.querySelectorAll('a').forEach((a) => {
      a.removeAttribute('tabindex');
    });
  }
  window.navBack = navBack;

  // Sidenav Navigation

  // Destroy Other's Visibility
  function clearSubs() {
    navSubs.querySelectorAll('.sub-item[nav-item]').forEach((el) => {
      el.classList.remove('zust--visible')
    })
  }

  function firstBase() {
    navItemHome.classList.add('zust--hidden');
    navSubs.classList.add('zust--visible');
  }

  function disableHome() {
    navItemHome.querySelectorAll('a').forEach((a) => {
      a.setAttribute('tabindex', '-1');
    });
  }

  function showNavItem(item) {
    firstBase();
    navSubs.querySelector(`[nav-item="${item}"]`).classList.add('zust--visible');
    disableHome();
  }
  window.showNavItem = showNavItem;

  let nextDocContainer = document.querySelector('#nextPrevContainer .next');
  let prevDocContainer = document.querySelector('#nextPrevContainer .prev');

  let urlPaths = pageURL.replace('/docs/', '').split('/');
  if (navItemHome.querySelector(`[nav-item="${urlPaths[0]}"]`)) {
    let el = navItemHome.querySelector(`[nav-item="${urlPaths[0]}"]`);
    el.classList.add('zust-active');
    el.removeAttribute('href');
    nextDocContainer.remove();
    prevDocContainer.remove();
  } else {
    showNavItem(urlPaths[0]);
  }
  if (urlPaths[1]) {
    let el = navSubs.querySelector(`[nav-item="${urlPaths[0]}"] [nav-item="${urlPaths[1]}"]`);
    el.classList.add('zust-active');
    el.removeAttribute('href');
    if (el.nextSibling) {
      nextDocContainer.querySelector('.title').innerText = el.nextSibling.querySelector('span').innerHTML;
      nextDocContainer.href = el.nextSibling.href;
    } else {
      nextDocContainer.remove()
    }

    if (el.previousSibling && el.previousSibling.tagName.toLowerCase() === 'a') {
      prevDocContainer.querySelector('.title').innerText = el.previousSibling.querySelector('span').innerHTML;
      prevDocContainer.href = el.previousSibling.href;
    } else {
      prevDocContainer.remove()
    }
  }

  // Accordion
  let accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      let panel = accordion.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  document.querySelectorAll('body > h2, body > h3').forEach((el) => {
    el.setAttribute('id', el.innerHTML.toLowerCase().replace(/[ ]/g, '-'))
  });

  // Copy Anchor Link
  let anchorHeaders = document.querySelectorAll(['h1[id]', 'h2[id]', 'h3[id]', 'h4[id]']);

  anchorHeaders.forEach(function (element) {
    element.addEventListener('click', copyAnchor);
  });

  function copyAnchor() {
    let anchor = this.getAttribute('id');
    let ancLinkPrefix = window.location.href + '#';
    let text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = ancLinkPrefix + anchor;
    text.select();
    document.execCommand('copy', false);
    text.remove();
    showCopyToast();
  }

  let copyToast = document.querySelector('#copyToast');
  let prevToast = false;
  let toastTimeout;
  let showToastTimeout;

  function showCopyToast() {
    if (prevToast) {
      prevToast = true;
      clearTimeout(toastTimeout);
      clearTimeout(showToastTimeout);
      copyToast.classList.remove('zust--visible');
      showToastTimeout = setTimeout(function () {
        copyToast.classList.add('zust--visible');
        prevToast = false;

        toastTimeout = setTimeout(function (){
          copyToast.classList.remove('zust--visible');
          prevToast = false;
        }, 3000);
      }, 500);
    } else {
      prevToast = true;
      clearTimeout(toastTimeout);
      clearTimeout(showToastTimeout);
      copyToast.classList.add('zust--visible');
      toastTimeout = setTimeout(function (){
        copyToast.classList.remove('zust--visible');
        prevToast = false;
      }, 3000);
    }
  }

  // Launch and Copy Button
  let codeblocks = document.querySelectorAll('code[class*="html"]');

  let copyAbleCodeblocks = document.querySelectorAll('div.code > pre > code');

  copyAbleCodeblocks.forEach((codeblock) => {
    let makeCopyButton = true;

    if (codeblock.hasAttribute('nocopy')) {
      makeCopyButton = false;
    }

    if (makeCopyButton) {
      let copyButton = document.createElement('button');
      copyButton.setAttribute('aria-label', 'Copy Snippet to Clipboard');
      copyButton.setAttribute('zust-tooltip', 'Copy Snippet to Clipboard');
      copyButton.setAttribute('zust-tooltip-position', 'left');
      copyButton.setAttribute('zust-tooltip-type', 'primary');
      copyButton.innerHTML = `
      <span class='zust-icon'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path fill='none' d='M0 0h24v24H0V0z'></path>
          <path fill='currentColor' d='M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z'></path>
        </svg>
      </span>`;

      codeblock.closest('div[class*="code"]').appendChild(copyButton);
      copyButton.addEventListener('click', () => {
        let texts = codeblock.closest('pre').innerText;
        let textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.value = texts;
        console.log('Copied: \n \n' + texts);
        textarea.select();
        document.execCommand('copy', false);
        textarea.remove();
        showCopyToast();
      });
    }
  });

  window.launchSnippet = (html, host) => {
    let createEl = (name, props) => {
      let el = document.createElement(name);

      for (let p in props) {
        if (props.hasOwnProperty(p)) el[p] = props[p];
      }

      return el
    }

    let form;

    if (host === 'codepen') {
      let json = {
        html: html,
        head: `<meta charset='utf-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1'>\n<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/zusty@${config.version}'>`,
        editors: '100',
        css: '@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");\n* { font-family: "Varela Round", sans-serif }'
      };
      let jsonData = JSON.stringify(json);

      form = createEl('form', {
        action: 'https://codepen.io/pen/define',
        method: 'post',
        target: '_blank'
      });
      form.appendChild(createEl('input', {
        name: 'data',
        value: jsonData
      }));
    } else if (host === 'jsfiddle') {
      form = createEl('form', {
        action: 'https://jsfiddle.net/api/post/library/pure/',
        method: 'post',
        target: '_blank'
      });
      form.appendChild(createEl('textarea', {
        name: 'html',
        value: html
      }));
      // Other necessery elements
      form.appendChild(createEl('select', {
        name: 'panel_html',
        innerHTML: '<option value="0">HTML</option>'
      }));
      form.appendChild(createEl('select', {
        name: 'panel_js',
        innerHTML: '<option value="0">JavaScript</option>'
      }));
      form.appendChild(createEl('select', {
        name: 'panel_css',
        innerHTML: '<option value="0">CSS</option>'
      }));
      form.appendChild(createEl('textarea', {
        name: 'js',
        value: ''
      }));
      form.appendChild(createEl('textarea', {
        name: 'css',
        value: ''
      }));
      form.appendChild(createEl('input', {
        name: 'title',
        type: 'text',
        value: ''
      }));
      form.appendChild(createEl('textarea', {
        name: 'description',
        value: ''
      }));
      form.appendChild(createEl('input', {
        name: 'resources',
        type: 'text',
        value: `https://cdn.jsdelivr.net/npm/zusty@${config.version}/dist/zusty.min.css`
      }));
    }

    let submitButton = createEl('button', {
      type: 'submit'
    });

    form.appendChild(submitButton);
    document.querySelector('body').appendChild(form);
    submitButton.click();
    form.remove();
  }

  codeblocks.forEach((codeblock) => {
    let code = codeblock.innerText;

    let makeLaunchButton = true;
    if (codeblock.hasAttribute('nolaunch')) {
      makeLaunchButton = false;
    }

    if (makeLaunchButton) {
      let launchButton = document.createElement('button');

      launchButton.classList = 'launchBtn';
      launchButton.setAttribute('aria-label', 'Launch Snippet');
      launchButton.setAttribute('zust-tooltip', 'Launch Snippet');
      launchButton.setAttribute('zust-tooltip-position', 'left');
      launchButton.setAttribute('zust-tooltip-type', 'primary');
      launchButton.innerHTML = `
      <span class='zust-icon'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path fill='currentColor' d='M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z'></path>
        </svg>
      </span>`;

      codeblock.closest('div[class*="code"]').appendChild(launchButton);
      launchButton.addEventListener('click', () => {
        window.htmlSnippet = code;
        document.querySelector('#launcherModal').classList.add('zust-active');
        launchButton.blur();
        document.body.classList.add('lock');
      });
    }
  });

  // Add modal to document
  let launcherModal = new DOMParser().parseFromString(`
  <div id='launcherModal' class='zust-modal'>
    <div class='zust-content'>
      <header>
        <h2>Choose Editor</h2>
        <button class='zust-btn zust-close-btn zust-transparent'>
         <span class='zust-icon'><i class='zust-close'></i></span>
        </button>
      </header>
      <div>
        <div class='zust-flex zust-justify-evenly'>
          <img codepen src='/resources/codepen.svg' height='100px'>
          <img jsfiddle src='/resources/jsfiddle.svg' height='110px'>
        </div>
      </div>
    </div>
  </div>
  `, 'text/html').body.childNodes[0];

  document.body.appendChild(launcherModal);

  document.querySelector('#launcherModal').addEventListener('click', function () {
    this.classList.remove('zust-active');
    document.body.classList.remove('lock');
  });

  document.querySelector('#launcherModal .zust-content').addEventListener('click', (e) => {
    e.stopPropagation()
  });

  document.querySelectorAll('#launcherModal img').forEach((img) => {
    img.addEventListener('click', () => {
      if (img.hasAttribute('codepen')) {
        launchSnippet(htmlSnippet, 'codepen')
      } else if (img.hasAttribute('jsfiddle')) {
        launchSnippet(htmlSnippet, 'jsfiddle')
      }
    })
  });

  document.querySelector('#launcherModal button').addEventListener('click', function () {
    this.closest('.zust-modal').classList.remove('zust-active');
    document.body.classList.remove('lock');
  });

  let scrollPos = 0;

  function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
      btmBar.classList.remove('hidden');
    } else {
      btmBar.classList.add('hidden');
    }
    scrollPos = windowY;
  }

  window.addEventListener('scroll', checkPosition);
});
