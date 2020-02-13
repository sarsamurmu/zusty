---
title: Icons
extraHead: >
  <link rel="stylesheet" href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.css">
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v0.0.4/css/unicons.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <style>
    .my-icon {
      --icon-size: 30px;
    }
  </style>
---

# Icon
Powerful wrapper for almost all kind of icons. Now use icons with flexibility.

---


## Structure
```html {snippet}
<span class="zust-icon">
  <i class="fa fa-ice-cream"></i>
</span>
```
---


## Support
It has support for almost all kinds of icons.

```html {snippet}
<p>Font Awesome 5</p>
<span class="zust-icon">
  <i class="fa fa-ice-cream"></i>
</span>

<p>Material Icons</p>
<span class="zust-icon">
  <i class="material-icons">android</i>
</span>

<p>Material Design Icons</p>
<span class="zust-icon">
  <i class="mdi mdi-alpha-z-box"></i>
</span>

<p>Ionicons</p>
<span class="zust-icon">
  <i class="icon ion-ios-happy"></i>
</span>

<p>Unicons</p>
<span class="zust-icon">
  <i class="uil uil-code"></i>
</span>

<p>Raw SVG</p>
<span class="zust-icon">
  <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
    <path fill="currentColor" d="M19.44,5.34l-.06-.07a10,10,0,0,0-14.76,0l-.06.07A10,10,0,1,0,22,12,9.93,9.93,0,0,0,19.44,5.34ZM12,4a7.87,7.87,0,0,1,3.86,1H8.14A7.87,7.87,0,0,1,12,4ZM5.76,7H18.24a8,8,0,0,1,1.69,4H4.07A8,8,0,0,1,5.76,7ZM12,20a8,8,0,0,1-7.93-7H19.93A8,8,0,0,1,12,20ZM8,8A1,1,0,1,0,9,9,1,1,0,0,0,8,8Zm6,0a1,1,0,1,0,1,1A1,1,0,0,0,14,8Zm-3,9.93a1,1,0,0,0,.49.13,1,1,0,0,0,.87-.51A3,3,0,0,1,15,16a1,1,0,0,0,0-2,5,5,0,0,0-4.37,2.57A1,1,0,0,0,11,17.93Z"></path>
  </svg>
</span>
```
---


## Colors
You can use any of text color helper to color icons.

```html {snippet}
<span class="zust-icon zust-text-pink">
  <i class="fa fa-ice-cream"></i>
</span>
```
---


## Sizes
There are extra three predefined sizes. Use them by adding any of these classes - `zust-small`{.class}, `zust-large`{.class} and `zust-xlarge`{.class}.

```html {snippet}
<span class="zust-icon zust-small">
  <i class="fab fa-font-awesome-flag"></i>
</span>

<span class="zust-icon">
  <i class="fab fa-font-awesome-flag"></i>
</span>

<span class="zust-icon zust-large">
  <i class="fab fa-font-awesome-flag"></i>
</span>

<span class="zust-icon zust-xlarge">
  <i class="fab fa-font-awesome-flag"></i>
</span>
```
---


## Custom size
Icons are most important and most used element. There are no guarantee when you need custom size. So here comes the feature.

You can change icons size by using CSS variable, It's super easy. Use `--icon-size`{.class} to change the icon size. See the snippet below for better understanding.

```html {snippet}
noRender{{
<style>
  .my-icon {
    --icon-size: 30px;
  }
</style>
}}
<p>Using inline style</p>
<span class="zust-icon" style="--icon-size: 70px;">
  <i class="fa fa-bicycle"></i>
</span>

<p>Using CSS</p>
<span class="zust-icon my-icon">
  <i class="fa fa-book"></i>
</span>
```
---


## Spinner
You can wrap spinner inside icon. There are few more [Spinners](spinner).

```html {snippet}
<span class="zust-icon">
  <i class="zust-spinner"></i>
</span>
```
---


## Basic icons
It includes few necessary icons, made with pure CSS. They can be used everywhere.

```html {snippet}
<p>Caret</p>
<span class="zust-icon">
  <i class="zust-caret-down"></i>
</span>
<span class="zust-icon">
  <i class="zust-caret-up"></i>
</span>
<span class="zust-icon">
  <i class="zust-caret-right"></i>
</span>
<span class="zust-icon">
  <i class="zust-caret-left"></i>
</span>

<p>Angle</p>
<span class="zust-icon">
  <i class="zust-angle-down"></i>
</span>
<span class="zust-icon">
  <i class="zust-angle-up"></i>
</span>
<span class="zust-icon">
  <i class="zust-angle-left"></i>
</span>
<span class="zust-icon">
  <i class="zust-angle-right"></i>
</span>

<p>Menu & Close</p>
<span class="zust-icon" hidCode{{onclick="toggleIc(this)"}}>
  <i class="zust-menu"></i>
</span>
<span class="zust-icon" hidCode{{onclick="toggleIc(this)"}}>
  <i class="zust-close"></i>
</span>
```


<script>
window.addEventListener('DOMContentLoaded', function () {
  window.toggleIc = function (el) {
    if (el.querySelector('i').classList.contains('zust-menu')) {
      el.querySelector('i').classList.remove('zust-menu');
      el.querySelector('i').classList.add('zust-close');
    } else {
      el.querySelector('i').classList.remove('zust-close');
      el.querySelector('i').classList.add('zust-menu');
    }
  }
})
</script>
