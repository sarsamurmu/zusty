---
title: Switch
---

# Switch
Switch for On/Off States.

---


## Structure
```html {snippet}
<label class="zust-switch">
  <input type="checkbox">
  <span></span>
</label>
```
---


## Checkbox or Radio Input
You can use both.

If you want only one selected out of multiple switches then use radio. And don't forget to give them same `name`{.attr}.

```html {snippet}
<h3 class="zust-text-center">Choose Any one of Food</h3>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>Cheese</span>
  <label class="zust-switch">
    <input type="radio" name="food">
    <span></span>
  </label>
</div>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>Cake</span>
  <label class="zust-switch">
    <input type="radio" name="food">
    <span></span>
  </label>
</div>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>Pizza</span>
  <label class="zust-switch">
    <input type="radio" name="food">
    <span></span>
  </label>
</div>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>Pie</span>
  <label class="zust-switch">
    <input type="radio" name="food">
    <span></span>
  </label>
</div>
```

If you want all switches to be able to selected then use checkbox instead.

```html {snippet}
<h3 class="zust-text-center">Choose CSS Properties</h3>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>display</span>
  <label class="zust-switch">
    <input type="checkbox">
    <span></span>
  </label>
</div>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>background-color</span>
  <label class="zust-switch">
    <input type="checkbox">
    <span></span>
  </label>
</div>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>opacity</span>
  <label class="zust-switch">
    <input type="checkbox">
    <span></span>
  </label>
</div>

<div class="zust-container zust-v-centered" style="justify-content: space-between;"><span>transition</span>
  <label class="zust-switch">
    <input type="checkbox">
    <span></span>
  </label>
</div>
```
---


## Colors
It supports all Theme Colors. Use any of them.

```html {snippet}
<label class="zust-switch">
  <input type="checkbox">
  <span></span>
</label>

<label class="zust-switch zust-success">
  <input type="checkbox">
  <span></span>
</label>

<label class="zust-switch zust-warning">
  <input type="checkbox">
  <span></span>
</label>

<label class="zust-switch zust-error">
  <input type="checkbox">
  <span></span>
</label>

<label class="zust-switch zust-link">
  <input type="checkbox">
  <span></span>
</label>
```
---


## Label
Adding label to switch is as easy as radio. See snippet below.

```html {snippet}
<p>After Switch</p>
<label class="zust-switch">
  <input type="checkbox">
  <span></span>
  <span>Done</span>
</label>

<p>Before Switch</p>
<label class="zust-switch">
  <span>Is Done</span>
  <input type="checkbox">
  <span></span>
</label>

<p>Both</p>
<label class="zust-switch">
  <span>Off</span>
  <input type="checkbox">
  <span></span>
  <span>On</span>
</label>
```
---


## Selected
A Switch can be selected by default. Add attribute `checked`{.attr} to `input`{.tag} to make the switch selected by default.

```html {snippet}
<label class="zust-switch">
  <input type="checkbox" checked>
  <span></span>
  <span>Selected</span>
</label>
```
---


## Disabled
You can make a switch disabled by adding attribute `disabled`{.attr} to `label`{.tag} and `input`{.tag}.

```html {snippet}
<label class="zust-switch" disabled>
  <input type="checkbox" disabled>
  <span></span>
  <span>Disabled</span>
</label>
```
---


## Gummy Effect
Here it comes the special 'Gummy Effect'. Yes, this is made for better UI.

```html {snippet}
<label class="zust-switch zust-gummy">
  <input type="checkbox">
  <span></span>
</label>
```
