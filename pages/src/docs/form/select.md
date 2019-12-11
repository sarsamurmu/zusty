---
title: Select
---

## Select
Slightly Modified Select Element.

---


## Structure
```html {snippet}
<p class="zust-form-el">
  <select class="zust-select">
    <option>Select</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
</p>
```
---


## With Icon
Adding icon is as easy as `input`{.tag}.

```html {snippet}
<p class="zust-form-el">
  <select class="zust-select zust-with-icon-left">
    <option>With Icon Left</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-left"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-with-icon-right">
    <option>With Icon Right</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-with-icon-both">
    <option>With Icon Both</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-left"><i class="fas fa-grin"></i></span>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>
```
---


## Default Icon
It was hard to implement default icon for select. So, you've to add icon by yourself. There is built-in icon named `zust-angle-down`{.class}. You can use it without importing any web fonts or icons like FontAwesome.

```html {snippet}
<p class="zust-form-el">
  <select class="zust-select zust-with-icon-right">
    <option>With Default Icon</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right">
    <i class="zust-angle-down"></i>
  </span>
</p>
```
---


## Colors
You can use any of Theme Color with it.

```html {snippet}
<p class="zust-form-el">
  <select class="zust-select zust-primary zust-with-icon-right">
    <option>Primary</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-success zust-with-icon-right">
    <option>Success</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-warning zust-with-icon-right">
    <option>Warning</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-error zust-with-icon-right">
    <option>Error</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-link zust-with-icon-right">
    <option>Link</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>
```
---


## Sizes
There are extra three sizes as well.

```html {snippet}
<p class="zust-form-el">
  <select class="zust-select zust-small zust-with-icon-right">
    <option>Small</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-with-icon-right">
    <option>Normal</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-large zust-with-icon-right">
    <option>Large</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>

<p class="zust-form-el">
  <select class="zust-select zust-xlarge zust-with-icon-right">
    <option>xLarge</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>
```
---


## Disabled
Make a `select`{.tag} disabled by adding attribute `disabled`{.attr}.

```html {snippet}
<p class="zust-form-el">
  <select class="zust-select zust-with-icon-right" disabled>
    <option>Disabled</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>
```
---


## Fullwidth
If you want fullwidth select, you can do so. Just add class `zust-fullwidth`{.class} to `zust-form-el`{.class}.

```html {snippet}
<p class="zust-form-el zust-fullwidth">
  <select class="zust-select zust-with-icon-right">
    <option>Fullwidth</option>
    <option>What's an Option</option>
    <option>Geek</option>
    <option>Handmade</option>
  </select>
  <span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
</p>
```
---


## Multiple
To trigger multiple option choosing system in `select`{.tag} then simply add attribute `multiple`{.attr} to `select`{.tag}.

```html {snippet}
<p class="zust-form-el">
  <select multiple class="zust-select">
    <option>Multiple</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
    <option>Option 6</option>
    <option>Option 7</option>
    <option>Option 8</option>
    <option>Option 9</option>
    <option>Option 10</option>
  </select>
</p>
```
---


## Fixed Width
p Add class `zust-fixed`{.class} to prevent select from resizing itself. It's useful in group mode.

```html {snippet}
<p>Default</p>
<div class="zust-form-el">
  <select class="zust-select zust-large">
    <option>Large Text is Here Just For You. Resize Window.</option>
  </select>
</div>
<p>Fixed</p>
<div class="zust-form-el">
  <select class="zust-select zust-large zust-fixed">
    <option>Large Text is Here Just For You. Resize Window.</option>
  </select>
</div>
```
---


## Grouping
To group it with any element just contain it inside of `zust-el-group`{.class}.

```html {snippet}
<div class="zust-el-group">
  <div class="zust-form-el">
    <select class="zust-select zust-with-icon-right">
      <option>npm</option>
      <option>yarn</option>
      <option>bower</option>
    </select><span class="zust-icon zust-right"><i class="zust-angle-down"></i></span>
  </div>
  <div class="zust-form-el">
    <input class="zust-input" type="text" placeholder="Name">
  </div>
</div>
```
