
<p align="center">
<img width="240px" src="https://zustycss.com/docs/resource/zusty.svg" alt="Zusty">
<h1 align="center">Zusty CSS</h1>
</p>

<p align="center">
Power Packed CSS Framework for Building Beautiful Interfaces.
<br>
<a align="center" href="https://zustycss.com/docs">Read the Docs</a>
</p>


## Status
[![Build Status](https://github.com/sarsamurmu/zusty/workflows/Node%20CI/badge.svg)](https://github.com/sarsamurmu/zusty/actions?workflow=Node+CI)
[![npm version](https://img.shields.io/npm/v/zusty.svg?color)](https://www.npmjs.com/package/zusty)

## Usage
You can use it in many ways. Here's some.

### npm
You can simply install it via npm
```shell
npm i zusty
```
Then in `<head></head>`, add this to top of your CSS Files
```html
<link rel="stylesheet" href="path/to/node_modules/zusty/dist/zusty.min.css">
```

### CDN
Add this to top of all stylesheets which are inside of `<head></head>`. Replace `<versionCode>` with the version you want to use. Latest version is [![latest version](https://img.shields.io/badge/dynamic/json?color=&label=&query=%24.tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fsarsamurmu%2Fzusty%2Freleases%2Flatest)](https://www.npmjs.com/package/zusty)
```html
<!-- For specific version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@<versionCode>">

<!-- Always Get the Latest Version -->
<!-- Not Recommended for Production. It can Break Anytime -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty">
<!-- Other CSS Down Here -->
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
    <!-- Use versioned CSS, so that your page will not break anytime -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@<versionCode>">
    <!-- Other CSS Down Here -->

    <title>Base Page</title>
  </head>
  <body>
    <p>Base Page</p>
  </body>
</html>
```
