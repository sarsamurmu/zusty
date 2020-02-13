---
title: Customization SCSS
---

# Customization SCSS
Customizing Zusty is quite easy. There are two ways to customize, either using SCSS or CSS variable Pack. Here we are covering the part using SCSS.

---


## Prerequisite
1\. NodeJS. If you don't have Node.js installed then [Install it First](https://nodejs.org/en/download/).
2\. Basic knowledge about terminal.
3\. A cup of coffee. ☕ <br>

---


## Using Node Sass
### Basic setup
First make a directory/folder, open terminal, navigate to it.

Using Windows? Don't know how to navigate using terminal? Open your newly created folder. Hold shift then do right click, Click 'Open Command Window Here'. Yo, you've done the job. Keep following....

Initialize a new npm package by typing this command and pressing enter.
```bash
npm init -y
```
Then install necessary npm packages.
```bash
npm install zusty -D
npm install node-sass -D
```
---


### Make SCSS file
In that directory make an folder named `stylesheet`{.tag}, then in that folder make a file named `styles.scss`{.attr}.

You can find your directory like this
```
Project Directory
 |   package-lock.json
 |   package.json
 |
 +---stylesheet
 |      styles.scss
 |
 \---node_modules
     \---zusty
         |  zusty.scss
         +--dist
         +--scss
```
Now open `styles.scss`{.attr} file. We are going to overwrite few values. We have to just write those values before importing Zusty. Now let's add some custom values to variables. You can grab some variables from [Here](variables).
```scss
$primary-color: #1ABC9C;
$button-border-radius: 2px;
$input-border-spread: 6px;
$icon-size-default: 1.5rem;
// More variables with custom values here

// In the last line of your SCSS File, import Zusty

// IMPORTANT STUFF
// There are two way to import Zusty
// METHOD: 1. Import all of Zusty
// METHOD: 2. Import Part of Zusty. Useful if just want to take what you want.

// METHOD: 1. Import all of Zusty
// We will set the path to zusty.scss which is in node_modules/zusty/zusty.scss
@import "../node_modules/zusty/zusty.scss";
// End of METHOD: 1

// METHOD: 2. Just import what you need
// First of all import variables, base styles, theme color's css version and reset
@import "../node_modules/zusty/scss/core/var-only";
@import "../node_modules/zusty/scss/core/base-styles";
@import "../node_modules/zusty/scss/core/reset";
@import "../node_modules/zusty/scss/core/theme-colors-css";

// Then import just what you need
// If you just want buttons then
@import "../node_modules/zusty/scss/elements/button";

// What if you want all elements, omit the item name
@import "../node_modules/zusty/scss/elements/";

// You can find the file structure here - https://github.com/sarsamurmu/zusty
```
---


### Configure `package.json`{.attr}
Now we have made the our SCSS file with custom values. We have to do one more thing, we've to configure `package.json`{.attr}. Let's do this -
1\. Open `package.json`{.attr} file.
2\. Then change the file according to this -
```json
{
  "name": "mysampleproject",
  "version": "1.0.0",
  "description": "A sample project for working with Zusty CSS",
  "main": "stylesheet/styles.scss",
  "scripts": {
    "build": "node-sass --source-map true stylesheet/styles.scss stylesheet/styles.css",
    "start": "npm run build -- --watch"
  },
  "author": "Your Name",
  "devDependencies": {
    "zusty": "^#{version}"
  }
}
```
---


### Compile SCSS 🎉
Now open your terminal and run command
```bash
npm run build
```
It will compile your SCSS file and output it to `{tag}(stylesheet)/{attr}(styles.css)`
You can also run this in your terminal
```bash
npm start
```
By running this command node-sass will watch your files for changes and whenever it will detect change it will compile your file automatically.

### Enjoy your Coffee. ☕

By the way you can do the same thing with SCSS in [Download Page](/download){target="_blank"}.
