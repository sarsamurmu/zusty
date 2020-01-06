---
title: Radio
---

# Radio
Nothing much, Just Simple Radio.

---


## Structure
```html {snippet}
<label class="zust-radio">
  <input type="radio" name="someName">
  <span></span>
  <span>Choco</span>
</label>
<br>

<label class="zust-radio">
  <input type="radio" name="someName">
  <span></span>
  <span>Vanilla</span>
</label>
```
---


## Making Radio
The minimum code required to make a radio is:

```html {snippet}
<label class="zust-radio">
  <input type="radio" name="give-a-name">
  <span></span>
</label>
```
---


## Label
Adding label to a radio is super easy.

```html {snippet}
<label class="zust-radio">
  <input type="radio" name="give-a-name">
  <span></span>
  <span>This is the Label!</span>
</label>
```
---


## Colors
Radio supports all Theme Colors. Use any of them.

```html {snippet}
<label class="zust-radio">
  <input type="radio" name="give-a-name">
  <span></span>
  <span>Default</span>
</label>
<br>

<label class="zust-radio zust-success">
  <input type="radio" name="give-a-name">
  <span></span>
  <span>Success</span>
</label>
<br>

<label class="zust-radio zust-warning">
  <input type="radio" name="give-a-name">
  <span></span>
  <span>Warning</span>
</label>
<br>

<label class="zust-radio zust-error">
  <input type="radio" name="give-a-name">
  <span></span>
  <span>Error</span>
</label>
<br>

<label class="zust-radio zust-link">
  <input type="radio" name="give-a-name">
  <span></span>
  <span>Link</span>
</label>
```
---


## Selected or Checked
You can make a radio Selected/Checked by adding attribute `checked`{.attr} to `input`{.tag}.

```html {snippet}
<label class="zust-radio">
  <input type="radio" name="a-unique-name" checked>
  <span></span>
  <span>Checked</span>
</label>
<br>

<label class="zust-radio">
  <input type="radio" name="a-unique-name">
  <span></span>
  <span>Radio</span>
</label>
```
---


## Disabled
Radio can be disabled by adding attribute `disabled`{.attr} to `label`{.tag} and `input`{.tag}.

```html {snippet}
<label class="zust-radio" disabled>
  <input type="radio" name="give-a-name" disabled>
  <span></span>
  <span>Disabled</span>
</label>
```
---


## Rectangular Radio
You can make a radio rectangular by adding class `zust-rect`{.class} or `zust-rectangle`{.class}.

```html {snippet}
<label class="zust-radio zust-rectangle">
  <input type="radio" name="give-a-name">
  <span></span>
  <span>Rectangle</span>
</label>
```
---
