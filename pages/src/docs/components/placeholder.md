---
title: Placeholder
---

# Placeholder
Placeholder for indicating loading items.

---

## Structure
```html {snippet}
<div class="zust-placeholder">
  <div class="zust-header"></div>
  <div class="zust-details">
    <div class="zust-image"></div>
    <div>
      <div class="zust-line"></div>
      <div class="zust-line"></div>
    </div>
  </div>
  <div class="zust-paragraph">
    <div class="zust-lines">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="zust-image"></div>
</div>
```
---


## Line
Make a line in placeholder by adding a `div`{.tag} with class `zust-line`{.class}.

```html {snippet}
<div class="zust-placeholder">
  <div class="zust-line"></div>
</div>
```
---


## Lines
You can make bunch of lines by adding a `div`{.tag} with class `zust-lines`{.class}. Add as much `div`{.tag} inside it as you want. A child `div`{.tag} makes a line.

```html {snippet}
<div class="zust-placeholder">
  <div class="zust-lines">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```
---


## Paragraph
You can make a paragraph by adding a `div`{.tag} with class `zust-paragraph`{.class} and add other contents inside it.

```html {snippet}
<div class="zust-placeholder">
  <div class="zust-paragraph">
    <div class="zust-lines">
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="zust-paragraph">
    <div class="zust-lines">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</div>
```
---


## Header
You can make a header by adding a `div`{.tag} with class `zust-header`{.class}.

```html {snippet}
<div class="zust-placeholder">
  <div class="zust-header"></div>
</div>
```
---


## Image
You can make an image by adding a `div`{.tag} with class `zust-image`{.class}.

```html {snippet}
<div class="zust-placeholder">
  <div class="zust-image"></div>
</div>
```
---


## Detail
You can make a detail item too. See the snippet below.

```html {snippet}
<div class="zust-placeholder">
  <div class="zust-details">
    <div class="zust-image"></div>
    <div>
      <div class="zust-line"></div>
      <div class="zust-line"></div>
    </div>
  </div>
</div>
```
---


## Custom
You can make any item with any size. Just set the item's CSS property `color`{.property} to `{function}(var)(--placeholder-holder-color)`.

---
