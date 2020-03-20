---
title: Getting Started
---

# Getting Started
You can simply start using Zusty CSS, either using npm, CDN or by downloading it.

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
Add this to top of your all CSS files in `<head></head>`{.tag}
```html {nolaunch}
<!-- For this version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@#{version}">

<!-- Always get the latest version -->
<!-- Not recommended for production. It can break anytime -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty">
<!-- Other CSS goes down here -->
```
---


## Downloading CSS file
1\. Download the unminified or minified CSS.

<button class="zust-btn zust-link" onclick="download('https://cdn.jsdelivr.net/npm/zusty@#{version}/dist/zusty.css', 'zusty.css')">Zusty CSS</button> <button class="zust-btn zust-link" onclick="download('https://cdn.jsdelivr.net/npm/zusty@#{version}/dist/zusty.min.css', 'zusty.min.css')">Zusty CSS - Minified</button>

2\. Save it.

3\. Then include the CSS in your HTML's `<head></head>`{.tag}.
```html {nolaunch}
<link rel="stylesheet" href="path/to/zusty.min.css">
<!-- Other CSS goes down here -->
```
---


## Starter template
This is the starter template that you can use to get started right away.
```html {nolaunch}
<!doctype html>
<html>
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Zusty CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@#{version}">
    <!-- Other CSS goes down here -->

    <title>Base Page</title>
  </head>
  <body>
    <h1>Base Page</h1>
  </body>
</html>
```
---

## Using prefixless
You would like to use the prefixless version, in prefixless version you can use classes without `zust-`{.class}, like `zust-hidden`{.class} can be used using `hidden`{.class}. See [how to use it](build-variants#prefixless).

<script>
window.addEventListener('DOMContentLoaded', () => {
  window.download = (link, fileName) => {
    fetch(link)
      .then((response) => response.text())
      .then((text) => {
        const textBlob = new Blob([text], { type: 'text/plain' });
        const hLink = document.createElement('a');
        hLink.href = URL.createObjectURL(textBlob);
        hLink.setAttribute('download', fileName);
        document.body.appendChild(hLink);
        hLink.click();
        hLink.remove();
      })
  }
})
</script>
