import CodeMirror from 'codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/lint/lint';
import './scsslint';
import 'codemirror/addon/selection/active-line';
import config from '../../b/config';

import autoprefixer from './autoprefixer';


window.addEventListener('DOMContentLoaded', () => {
  const qs = document.querySelector.bind(document);
  const sass = new Sass();

  CodeMirror.registerHelper('lint', 'scss', function(text, options) {
    const found = [];
    if (!window.SCSSLint) return found;
    let results = SCSSLint.verify(text, options),
      messages = results.messages,
      message = null;
    for (let i = 0; i < messages.length; i++) {
      message = messages[i];
      const startLine = message.line - 1,
        endLine = message.line - 1,
        startCol = message.col - 1,
        endCol = message.col;
      found.push({
        from: CodeMirror.Pos(startLine, startCol),
        to: CodeMirror.Pos(endLine, endCol),
        message: message.message,
        severity: message.type
      });
    }
    return found;
  });

  const editor = CodeMirror.fromTextArea(qs('#editor'), {
    mode: 'text/x-scss',
    theme: 'default',
    tabSize: 2,
    lineNumbers: true,
    matchBrackets: true,
    gutters: ['CodeMirror-lint-markers'],
    showCursorWhenSelecting: true,
    autoCloseBrackets: true,
    lint: {
      options: {
        rules: {
          'hex-notation': 0
        }
      }
    },
    styleActiveLine: true
  });

  fetch('/scripts/sassData.json').then((response) => {
    response.json().then((json) => {
      sass.writeFile(json);
    });
  });

  const exSelect = qs('#example');
  const examples = {
    'default': [
      `@import "zusty";`
    ],
    'prefixless': [
      `$prefix: ""; // You can set the value of $prefix to anything you want like "zt-", leave blank for no prefix.`,
      ``,
      `@import "zusty";`
    ],
    'custom-variables': [
      `// First declare the variables`,
      `$primary-color: #7289da;`,
      `$primary-text-color: #FFF;`,
      `$primary-hovered-color: #6480e4;`,
      `$primary-color-light: hsla(227, 58%, 65%, 0.3);`,
      `// Go here for more variables - zustycss.com/docs/general/variables`,
      ``,
      `// Finally import zusty`,
      `@import "zusty";`
    ],
    'partial-import': [
      `// Method to import just what you need`,
      `// Declare your variables here`,
      `// Example`,
      `// $primary-color: #7289da;`,
      `// $primary-text-color: #FFF;`,
      `// $primary-hovered-color: #6480e4;`,
      `// $primary-color-light: hsla(227, 58%, 65%, 0.3);`,
      ``,
      `// Import necessary files`,
      `// Variables`,
      `@import "scss/core/var-only";`,
      `// Base styles`,
      `@import "scss/core/base-styles";`,
      `// Theme's CSS Variables`,
      `@import "scss/core/theme-colors-css";`,
      `// Reset`,
      `@import "scss/core/reset";`,
      `// Then import just what you need`,
      `// If you want button`,
      `@import "scss/elements/button";`,
      `// If you want radio`,
      `@import "scss/form/radio";`,
      `// If you just wanted text helpers then you whould have used`,
      `// @import "scss/helpers/text-helpers";`,
      `// But if you want all of a group, just omit the item name`,
      `// Like importing all of helpers`,
      `@import "scss/helpers/";`,
      `\n\n\n`
    ]
  }

  const doOnChange = () => editor.setValue(examples[exSelect.value].join('\n'));

  doOnChange();

  exSelect.addEventListener('change', doOnChange);

  window.download = () => {
    const errorView = qs('#errorView');

    const downloadBtn = qs('.downloadBtn');
    const btnText = qs('.downloadBtn > span:not(.zust-icon)');

    btnText.innerHTML = 'Processing';
    downloadBtn.classList.add('loading');

    sass.options({ style: Sass.style[qs('#outputStyle').value] });
    sass.compile(editor.getValue(), (result) => {
      if (result.status === 1) {
        errorView.querySelector('code').innerText = result.formatted;
        errorView.classList.remove('zust-hidden');
      } else {
        errorView.classList.add('zust-hidden');

        const copyrightHeaderless = result.text.replace(/(\/\*\!((.|\n)*)\*\/)/g, '');

        const prefixedCSS = autoprefixer.process(copyrightHeaderless, {}, {
          overrideBrowserslist: [
            'last 5 Chrome versions',
            'last 5 Firefox versions',
            'last 5 Explorer versions',
            'last 5 iOS versions',
            'last 5 Opera versions',
            'last 5 Safari versions',
            'last 5 Android versions',
            'last 5 Edge versions'
          ]
        }).css;

        const css = [
          `/*!`,
          ` * Zusty v${config.version}`,
          ` * Copyright (c) Sarsa Murmu 2019-present`,
          ` * Repository https://github.com/sarsamurmu/zusty`,
          ` * Licensed under The MIT License`,
          ` *\/\n`,
          prefixedCSS
        ].join('\n');

        const cssBlob = new Blob([css], { type: 'text/plain' });
        const hLink = document.createElement('a');
        hLink.href = URL.createObjectURL(cssBlob);
        hLink.setAttribute('download', 'zusty.css');
        document.body.appendChild(hLink);
        hLink.click();
        hLink.remove();
      }

      btnText.innerHTML = 'Download';
      downloadBtn.classList.remove('loading');
    })
  }
})
