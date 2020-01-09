---
title: Getting Started
---

# Getting Started
You can simply start using Zusty CSS, either using npm, CDN or by Downloading it.

## npm
You can simply install it via npm
```bash
npm i zusty
```
Then in `<head></head>`{.tag}, add this to top of your CSS Files.
```html {nolaunch}
<link rel="stylesheet" href="path/to/node_modules/zusty/dist/zusty.min.css">
```
---


## Using CDN
Add this to top of your all CSS Files in `<head></head>`{.tag}
```html {nolaunch}
<!-- For This Version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@#{version}">

<!-- Always Get the Latest Version -->
<!-- Not Recommended for Production. It can Break Anytime -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty">
<!-- Other CSS Goes Down Here -->
```
---


## Downloading CSS file
1\. Download the Unminified or Minified CSS.

<button class="zust-btn zust-link" onclick="download('https://cdn.jsdelivr.net/npm/zusty@#{version}/dist/zusty.css', 'zusty.css')">Zusty CSS</button> <button class="zust-btn zust-link" onclick="download('https://cdn.jsdelivr.net/npm/zusty@#{version}/dist/zusty.min.css', 'zusty.min.css')">Zusty CSS - Minified</button>

2\. Save it.

3\. Then include the CSS in your HTML's `<head></head>`{.tag}.
```html {nolaunch}
<link rel="stylesheet" href="path/to/zusty.min.css">
<!-- Other CSS Goes Down Here -->
```
---


## Starter Template
This is the starter template that you can use to get started right away.
```html {nolaunch}
<!doctype html>
<html>
  <head>
    <!-- Required meta Tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Zusty CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@#{version}">
    <!-- Other CSS Goes Down Here -->

    <title>Base Page</title>
  </head>
  <body>
    <h1>Base Page</h1>
  </body>
</html>
```
---

## Using prefixless
You would like to use the prefixless version, in prefixless version you can use classes without `zust-`{.class}, like `zust-hidden`{.class} can be used using `hidden`{.class}. [Use it](build-variants#prefixless).

<script>
window.addEventListener('DOMContentLoaded', () => {
  window.download = (link, fileName) => {
    fetch(link)
      .then((response) => response.text())
      .then((text) => {
        let textBlob = new Blob([text], { type: 'text/plain' });
        let hLink = document.createElement('a');
        hLink.href = URL.createObjectURL(textBlob);
        hLink.setAttribute('download', fileName);
        document.body.appendChild(hLink);
        hLink.click();
        hLink.remove();
      })
  }
})
</script>
