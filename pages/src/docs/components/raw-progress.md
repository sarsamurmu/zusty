---
title: Raw Progress
---

# Raw Progress
Progress bar with lot of possibilities.

---


## Structure
```html {snippet}
<div class="zust-progress" value="10">
  <div class="zust-bar"></div>
</div>
```

Here `zust-progress`{.class} defines the whole progress bar, `zust-bar`{.class} is the value bar and `value`{.attr} is in percentage.

You can also set the value to the bar itself like
```html
<div class="zust-progress">
  <div class="zust-bar" value="10"></div>
</div>
```
the results will be same.

You can even use `width`{.attr} css property to set a bar's value, like so
```html {snippet}
<div class="zust-progress">
  <div class="zust-bar" style="width: 45.89%"></div>
</div>
```
---


## Sizes
There are extra five predefined sizes, predefined sizes are `zust-line`{.class}, `zust-thin`{.class} or `zust-narrow`{.class}, `zust-small`{.class}, `zust-large`{.class}, `zust-xlarge`{.class}. You can also set the size by yourself.

```html {snippet}
<p>Line</p>
<div class="zust-progress zust-line" value="10">
  <div class="zust-bar"></div>
</div>

<p>Thin/Narrow</p>
<div class="zust-progress zust-thin" value="20">
  <div class="zust-bar"></div>
</div>

<p>Small</p>
<div class="zust-progress zust-small" value="30">
  <div class="zust-bar"></div>
</div>

<p>Normal</p>
<div class="zust-progress" value="40">
  <div class="zust-bar"></div>
</div>

<p>Large</p>
<div class="zust-progress zust-large" value="50">
  <div class="zust-bar"></div>
</div>

<p>xLarge</p>
<div class="zust-progress zust-xlarge" value="60">
  <div class="zust-bar"></div>
</div>

<p>Custom</p>
<div class="zust-progress" style="height: 55px;" value="70">
  <div class="zust-bar"></div>
</div>
```
---


## Colors
It has support for theme colors. Also You can use [Color Helper](../helpers/#colors) or your own color.

```html {snippet}
<div class="zust-progress zust" value="10">
  <div class="zust-bar"></div>
</div>

<div class="zust-progress zust-success" value="20">
  <div class="zust-bar"></div>
</div>

<div class="zust-progress zust-error" value="30">
  <div class="zust-bar"></div>
</div>

<div class="zust-progress zust-warning" value="40">
  <div class="zust-bar"></div>
</div>

<div class="zust-progress zust-link" value="50">
  <div class="zust-bar"></div>
</div>

<p>Using Color Helper</p>
<div class="zust-progress zust-bg-blue" value="60">
  <div class="zust-bar zust-bg-pink"></div>
</div>

<p>Using Custom Color</p>
<div class="zust-progress" value="60" style="background-color: #00c969;">
  <div class="zust-bar" style="background-color: #00b0ff;"></div>
</div>
```

Style `zust-progress`{.class} to style the progress bar track. Style `zust-bar`{.class} to style the value bar.

---


## Text in value bar
You can also add text to value bar

```html {snippet}
<div class="zust-progress">
  <div class="zust-bar" value="20"><span>20%</span></div>
</div>
```

### Value bar text alignment
By default value bar's text are aligned middle. But, You can change the text alignment of value bar by adding any of these classes `zust-text-right`{.class}, `zust-text-left`{.class}.

```html {snippet}
<div class="zust-progress">
  <div class="zust-bar zust-text-right" value="60"><span>60%</span></div>
</div>

<div class="zust-progress">
  <div class="zust-bar zust-text-left" value="70"><span>70%</span></div>
</div>
```
---


## Multiple value bars
You can add multiple value bars to a progress bar.

```html {snippet}
<div class="zust-progress">
  <div class="zust-bar" value="15"></div>
  <div class="zust-bar zust-error" value="15"></div>
  <div class="zust-bar zust-success" value="25"></div>
  <div class="zust-bar zust-warning" value="20"></div>
</div>
```
---


## Progress Bar Alignment
You can change progress bar's alignment to right to left just by adding class `zust-rtl`{.class}.

```html {snippet}
<div class="zust-progress zust-rtl">
  <div class="zust-bar" value="40"></div>
</div>
```
---


## Striped progress bar
Make any progress bar striped by adding class `zust-striped`{.class}. You can also add this class to value bar.

```html {snippet}
<div class="zust-progress zust-striped">
  <div class="zust-bar" value="55"></div>
</div>

<p>To value bar</p>
<div class="zust-progress">
  <div class="zust-bar zust-striped" value="45"></div>
</div>
```
---


## In-progress
You can make progress bar show that it is in-progress just by adding class `zust-in-progress`{.class}. You can also add this class to value bar.

```html {snippet}
<div class="zust-progress zust-in-progress">
  <div class="zust-bar" value="40"></div>
</div>
<div class="zust-progress zust-striped zust-in-progress">
  <div class="zust-bar" value="30"></div>
</div>

<p>To Value Bar</p>
<div class="zust-progress">
  <div class="zust-bar zust-in-progress" value="70"></div>
</div>
<div class="zust-progress zust-striped">
  <div class="zust-bar zust-in-progress" value="80"></div>
</div>
```
---


## Indeterminate
You can make progress bar indeterminate just by adding class `zust-indeterminate`{.class}.

```html {snippet}
<div class="zust-progress zust-indeterminate">
  <div class="zust-bar"></div>
</div>
```
