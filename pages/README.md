# Zusty Pages
Includes all page for https://zustycss.com.

## Usage
Start Development
```bash
npm start
```
Build all pages
```bash
npm run build
```

## Document type
Pug is used as preprocessor for HTML pages. For Documentation Markdown is used, markdown is completely configurable that's why you can see some new syntax in markdown. You can find more about extra markdown syntax [here](https://github.com/sarsamurmu/zusty/blob/master/pages/Syntax.md).

## Files
### Docs
All file for a documentation page are parted over `src/docs/_includes/` as pug files and `src/docs/base.pug` file implements all those parted files. All documentation pages are written in markdown files and processed using [markdown-it](https://github.com/markdown-it/markdown-it/).

`src/docs/navigationData.json` includes the data for sidenav of documentation pages.

`src/docs/swBase.js` is the base version of service worker, which is injected with website's files' data for creating usable service worker.

### Scripts
`src/scripts/` include all script files. These are compiled with webpack for browser and saved to `public/scripts`.

### Stylesheets
`src/stylesheets` includes all stylesheets. All files are written in SCSS, these are processed by Sass and saved to `public/stylesheets`. `src/stylesheets/imports` includes all SCSS file which are imported by other SCSS files.

### Copied Files
All files inside of `tocopy` directory don't need processing, so they just get copied to the `public` directory.

### Build Files
All build scripts can be found on `b` directory. The `config.js` file in this directory contains some necessary data like `debug` and `version` number.
