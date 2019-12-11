---
title: Button
---

# Button
Button of Anytype you want.

---


## Structure
```html {snippet}
<button class="zust-btn">Button</button>
<a class="zust-btn">a</a>
<!--
<input type="submit"> and <input type="reset"> are Deprecated.
Use <button type="submit"></button> and <button type="reset"></button> instead.
-->
<button class="zust-btn" type="submit">Submit</button>
<button class="zust-btn" type="reset">Reset</button>
<span class="zust-btn">Span</span>
```
---


## Sizes
You can size them easily just by adding class `zust-small`{.class}, `zust-ignored`{.class}, `zust-large`{.class} and `zust-xlarge`{.class}.

```html {snippet}
<button class="zust-btn zust-small">Small</button>
<button class="zust-btn">Normal</button>
<button class="zust-btn zust-large">Large</button>
<button class="zust-btn zust-xlarge">xLarge</button>
```
---


## Colors
You can set buttons color to any of Theme Colors. You can also use Colors Helper to color them. To use custom color/color helper, you have to add class `zust-custom`{.class}.

```html {snippet}
<button class="zust-btn zust-primary">Primary</button>
<button class="zust-btn zust-success">Success</button>
<button class="zust-btn zust-warning">Warning</button>
<button class="zust-btn zust-error">Error</button>
<button class="zust-btn zust-link">Link</button>
<button class="zust-btn zust-transparent">Transparent</button>
<button class="zust-btn zust-custom zust-bg-teal">Using Color Helper</button>
```
---


## With Icons
You can use icons with buttons

```html {snippet}
<button class="zust-btn">
  <span class="zust-icon">
    <i class="fas fa-grin"></i>
  </span>
  <span>Grin</span>
</button>

<button class="zust-btn">
  <span class="zust-icon">
    <i class="material-icons">filter</i>
  </span>
  <span>Filter</span>
</button>

<button class="zust-btn">
  <span class="zust-icon">
    <i class="zust-spinner"></i>
  </span>
  <span>Spinner</span>
</button>

<button class="zust-btn">
  <span class="zust-icon">
    <i class="fa fa-grin-wink"></i>
  </span>
</button>
```
---


## Floating
There are floating buttons as well. They look good as primary actions. Add class `zust-floating`{.class}.

```html {snippet}
<button class="zust-btn zust-floating">Default</button>
<button class="zust-btn zust-floating zust-primary">Primary</button>
<button class="zust-btn zust-floating zust-custom zust-bg-blue-grey">Custom</button>
```
---


## Outlined
You can get outlined button by using class `zust-outlined`{.class}. This only works with themed buttons.

```html {snippet}
<button class="zust-btn zust-outlined zust-primary">Primary</button>
<button class="zust-btn zust-outlined zust-link">Link</button>
```
---


## Ghost
There are even ghost buttons, use it by adding class `zust-ghost`{.class}. Like outlined it only works with theme buttons.

```html {snippet}
<button class="zust-btn zust-ghost zust-primary">Primary</button>
<button class="zust-btn zust-ghost zust-link">Link</button>
```
---


## Disabled
You can simply make any button disabled by adding attribute `disabled`{.class}.

```html {snippet}
<button class="zust-btn" disabled>
  <span>Disabled</span>
  <span class="zust-icon">
    <i class="fas fa-dizzy"></i>
  </span>
</button>

<button class="zust-btn zust-primary" disabled>Primary Disabled</button>
<button class="zust-btn zust-success" disabled>Success Disabled</button>
<button class="zust-btn zust-link" disabled>Link Disabled</button>
```
---


## Max Padding
Max padding buttons have increased padding and less rounded corner. To use it add class `zust-max-pad`{.class} to `zust-btn`{.tag}.

```html {snippet}
<button class="zust-btn zust-primary">Button</button>
<button class="zust-btn zust-primary zust-max-pad">Button</button>
```
---


## Shape
You can Make button fullwidth, rounded, sharp, semi rounded. Thanks to #[a(href='../helpers/#shape') Shape Helper].

```html {snippet}
<button class="zust-btn zust-primary zust-fullwidth">Fullwidth</button>
<button class="zust-btn zust-primary zust-rounded">Rounded</button>
<button class="zust-btn zust-primary zust-semi-rounded">Semi Rounded</button>
<button class="zust-btn zust-primary zust-sharp">Sharp</button>
```
---


## Group Editing
You can change size or appearance of all buttons easily by adding class to their parent. Add any of these classes to parent - `zust-btns-small`{.class}, `zust-btns-large`{.class}, `zust-btns-xlarge`{.class}, `zust-btns-fullwidth`{.class}, `zust-btns-custom`{.class}, `zust-btns-outlined`{.class}, `zust-btns-ghost`{.class}.

You can make a button ignore it's parent's style by adding class `zust-ignored`{.class} to the button itself.

```html {snippet}
<div class="zust-btns-large">
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn zust-ignored">Ignored Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
</div>
<br>
<br>
<div class="zust-text-center zust-btns-fullwidth">
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn zust-ignored">Ignored Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
</div>
```
---


## Grouping
You can also group buttons together. Just place them inside of `zust-el-group`{.class}.

```html {snippet}
<div class="zust-el-group">
  <button class="zust-btn zust-link">First</button>
  <button class="zust-btn zust-link">Second</button>
  <button class="zust-btn zust-link">Third</button>
  <button class="zust-btn zust-link">Fourth</button>
</div>
```
---


## Bunch of Buttons
You can use Zusty's Built-in Container to contain bunch of Buttons. They will break whenever necessary.

```html {snippet}
<div class="zust-container">
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
  <button class="zust-btn">Button</button>
</div>
```
---


## Toggle-able
A button can be toggle-able. See the snippet below.

```html {snippet}
<label class="zust-toggle-btn">
  <input type="checkbox">
  <a class="zust-btn zust-primary">Toggle</a>
</label>
```
::: warning Important Stuff
Don't use `button`{.tag} in this scenario. You can Use Anything Except `button`{.tag} here, Like `span`{.tag}, `a`{.tag} etc. Also You have to use any of colored button. It will not work on default buttons.
:::

This makes Better Sense in Button Groups.

```html {snippet}
<p>Choose Any one Option Below.</p>
<div class="zust-el-group">
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span class="zust-btn zust-link">Play</span>
  </label>
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span class="zust-btn zust-link">Work</span>
  </label>
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span class="zust-btn zust-link">Sleep</span>
  </label>
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span class="zust-btn zust-link">Dance</span>
  </label>
</div>
```
