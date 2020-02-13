
<p align="center">
<img width="240" src="https://zustycss.com/resources/zusty.svg" alt="Zusty">
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

## Support Zusty CSS
You can support this framework just by leaving a star on its [GitHub Repository](https://github.com/sarsamurmu/zusty). Starring it would help make Zusty CSS getting known and it would motivate me to work on it.

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

<!-- Always get the latest version -->
<!-- Not recommended for production. It can break anytime -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty">
<!-- Other CSS down here -->
```

### Starter Template
This is the starter template that you can use to get started right away.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Required meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Zusty CSS -->
    <!-- Use specific version, so that your page will not break whenever Zusty CSS gets updated -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@<versionCode>">
    <!-- Other CSS down here -->

    <title>Base Page</title>
  </head>
  <body>
    <p>Base Page</p>
  </body>
</html>
```

## License
Zusty CSS is Licensed under the [MIT License](https://github.com/sarsamurmu/zusty/blob/master/LICENSE.md), webpages under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
