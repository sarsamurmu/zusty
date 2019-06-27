# Zusty CSS Framework
[![Build Status](https://travis-ci.com/sarsamurmu/zusty.svg?branch=master)](https://travis-ci.com/sarsamurmu/zusty)
[![npm version](https://img.shields.io/npm/v/zusty.svg?color)](https://www.npmjs.com/package/zusty)

Power Packed CSS Framework for Building Beautiful Interfaces.

[Read The Docs](https://zustycss.com/docs)

## Usage
You can Use it in Many Ways. Here's it.
### CDN
Add this to top of all Stylesheets which are inside of `<head></head>`
```html
<!-- For This Version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@0.0.1" />

<!-- Always Get the Latest Version -->
<!-- Not Recommended for Production. It can Break Anytime -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty" />
<!-- Other CSS Goes Down Here -->
```
### npm
You can Simply Install it via npm
```shell
npm i zusty
```
Then in `<head></head>`, add this to top of your CSS Files
```html
<link rel="stylesheet" href="path/to/node_modules/zusty/dist/zusty.min.css" />
```

### Starter Template
This is the Starter Template that You can use to get started right away.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Required meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Zusty CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@0.0.1" />
    <!-- Other CSS Goes Down Here -->

    <title>Hello Zusty CSS</title>
  </head>
  <body>
    <p>My First Page Based on Zusty Framework</p>
  </body>
</html>
```
