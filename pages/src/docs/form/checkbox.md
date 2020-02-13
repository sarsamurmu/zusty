---
title: Checkbox
---

# Checkbox
Checkbox with better UI.

---


## Structure
```html {snippet}
<label class="zust-checkbox">
  <input type="checkbox">
  <span></span>
  <span>Buy Oranges</span>
</label>
<br>

<label class="zust-checkbox">
  <input type="checkbox">
  <span></span>
  <span>Call Dad</span>
</label>
```
---


## Minimum Code
The minimum code required to make a checkbox is

```html {snippet}
<label class="zust-checkbox">
  <input type="checkbox">
  <span></span>
</label>
```
---


## Label
You may have noticed, adding label is kinda easy.

```html {snippet}
<label class="zust-checkbox">
  <input type="checkbox">
  <span></span>
  <span>Label After</span>
</label>
<br>
<br>

<label class="zust-checkbox">
<span>Label Before</span>
  <input type="checkbox">
  <span></span>
</label>
```
---


## Colors
It includes all theme colors.

```html {snippet}
<label class="zust-checkbox">
  <input type="checkbox">
  <span></span>
  <span>Default</span>
</label>
<br>

<label class="zust-checkbox zust-success">
  <input type="checkbox">
  <span></span>
  <span>Success</span>
</label>
<br>

<label class="zust-checkbox zust-warning">
  <input type="checkbox">
  <span></span>
  <span>Warning</span>
</label>
<br>

<label class="zust-checkbox zust-error">
  <input type="checkbox">
  <span></span>
  <span>Error</span>
</label>
<br>

<label class="zust-checkbox zust-link">
  <input type="checkbox">
  <span></span>
  <span>Link</span>
</label>
<br>
```
---


## Disabled
You can make a checkbox disabled by adding attribute `disabled`{.attr} to `label`{.tag} and `input`{.tag}.

```html {snippet}
<label class="zust-checkbox" disabled>
  <input type="checkbox" disabled>
  <span></span>
  <span>Disabled</span>
</label>
```
---


## Checked
A checkbox can be checked by default. Add attribute `checked`{.attr} to the `input`{.tag} to achieve that.

```html {snippet}
<label class="zust-checkbox">
  <input type="checkbox" checked>
  <span></span>
  <span>Checked by Default</span>
</label>
```
---


## Outlined
There is also outlined checkboxes. You may need them, just add class `zust-outlined`{.class}.

```html {snippet}
<label class="zust-checkbox zust-outlined">
  <input type="checkbox" checked>
  <span></span>
  <span>Outlined</span>
</label>
```
---


## Circular
There is another style, circular style. To get this style add class `zust-circle`{.class}. You can even use it with outlined.

```html {snippet}
<label class="zust-checkbox zust-circle">
  <input type="checkbox" checked>
  <span></span>
  <span>Circular</span>
</label>
```
