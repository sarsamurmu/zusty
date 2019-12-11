---
title: Build a Theme
---

# Build a Theme
There two built-in themes (light & dark), you can customize them by using SCSS Variables. Even you can make a separate theme and use it on any site built on Zusty. Let's see how we can make a theme.

### Additional Requirements
None

---

## Building a Theme
### 1. Getting the file
Download [theme.css](https://cdn.jsdelivr.net/npm/zusty@0.0.2/dist/theme.css) to get the base theme with all variables.
### 2. Editing `theme.css`{.attr}
`theme.css`{.attr} looks like this -
```css
[zust-theme="light"] {
  --primary-color: #00b881;
  --primary-text-color: #FFFFFF;
  --primary-hovered-color: #00a876;
  --primary-color-light: rgba(0, 184, 129, 0.3);

  /* More Variables */
}
```
You've to change the selector `{attr}(zust-theme)="{string}(light)"` to whatever selector you want. We will use this selector to apply our theme.

Each CSS Variables stores a color for theme, you've to change them to match your theme.

If we change few variables, our file looks like this.
```css
/* Used custom selector. Any element with attribute `theme="bluish"` can use this theme. */

[theme="bluish"] {

  /* Changed Colors */
  --primary-color: #03a9f4;
  --primary-text-color: #FFFFFF;
  --primary-hovered-color: #01a4ef;
  --primary-color-light: hsla(199, 99%, 47%, 0.16);

  /* More Variables */
}
```
Like this, change all colors to the color you want for your theme.

---

## Using the Theme
Using theme is easy, just link the theme CSS file to HTML file and use the selector you determined for your theme in HTML Element.

Here's an example.
```html {nolaunch}
<!doctype html>
<!-- Applying the theme to HTML -->
<html theme="bluish">
  <head>
    <!-- Other link, meta tags -->
    <link rel="stylesheet" href="path/to/your/theme.css">
  </head>
  <body>
    <p>My page with new theme</p>
    <button class="zust-btn zust-primary">How I look like?</button>
  </body>
</html>
```
