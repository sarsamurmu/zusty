
<p align="center">
<img width="240px" src="https://sarsamurmu.github.io/uses/zusty.svg" alt="Zusty">
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
Add this to top of all stylesheets which are inside of `<head></head>`
```html
<!-- For This Version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@0.0.2">

<!-- Always Get the Latest Version -->
<!-- Not Recommended for Production. It can Break Anytime -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty">
<!-- Other CSS Goes Down Here -->
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@0.0.2">
    <!-- Other CSS Goes Down Here -->

    <title>Hello Zusty CSS</title>
  </head>
  <body>
    <p>My First Page with Zusty CSS</p>
  </body>
</html>
```
