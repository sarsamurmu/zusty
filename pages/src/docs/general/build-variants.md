---
title: Build Variants
---

# Build Variants
There are three build variants of Zusty CSS.

Variants are -
- Normal
- Prefixless
- CSS Variable - Parted

---

## Normal
Normal variant is the base version of Zusty CSS. If you're following Getting Started Guide then you're probably using base version.
### Usage
You can simply use it using jsDelivr CDN.
```html {nolaunch}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@#{version}">
```
or if you're using npm then
```html {nolaunch}
<link rel="stylesheet" href="path/to/node_modules/zusty/dist/zusty.min.css">
```
---


## Prefixless
Prefixless is same as Normal, just it has no prefix. So, you can use it without prefix like, `zust-hidden`{.class} can be used using `hidden`{.class}. Use it if you want to develop your page rapidly.
### Usage
If you want to use CDN
```html {nolaunch}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zusty@#{version}/dist/zusty.prefixless.css">
```
or if you're using npm
```html {nolaunch}
<link rel="stylesheet" href="path/to/node_modules/zusty/dist/zusty.prefixless.css">
```
---


## Parted - CSS Variables
If you're feeling adventurous you can use this variant.

All files are parted like below -
- `theme.css`{.attr} - CSS File containing only theme.
- `variables.css`{.attr} - CSS File containing only variables. All variables are CSS Variable in this file.
- `zusty.css`{.attr} or `zusty.min.css`{.attr} - The main CSS file. All variables are transfered to CSS Variables.
### Usage
You are going to change the file if you use it. For this reason, download it manually and link them all in HTML file. Files can be found [Here](https://github.com/sarsamurmu/zusty/tree/master/dist/parted).
