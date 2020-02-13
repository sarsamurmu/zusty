---
title: Button
---

# Button
Button of any type you want.

---


## Structure
```html {snippet}
<button class="zust-btn">Normal</button>
<!--
<input type="submit"> and <input type="reset"> are Deprecated.
Use <button type="submit"></button> and <button type="reset"></button> instead.
-->
<button class="zust-btn" type="submit">Submit</button>
<button class="zust-btn" type="reset">Reset</button>

<!--
If you want to use other element as button,
add attribute `role="button"` to the element
-->
<a class="zust-btn" role="button" tabindex="0">Anchor</a>
<span class="zust-btn" role="button" tabindex="0">Span</span>
```
::: link Accessibility Tip
To make accessible button, do any of the following
- Set the inner text of the button.
- If there is no text in the button (like button with just icon), set proper `aria-label`{.attr} attribute.
- If the you're using other element as button like `a`{.tag}, `span`{.tag}, `div`{.tag}, then add attribute `{attr}(role)="{string}(button)"` to the element and add attribute `{attr}(tabindex)="{string}(0)"` to make it focusable to user.
:::
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
You can set buttons color to any of theme colors. You can also use [Colors Helper](../helpers/#colors) to color them. To use custom color/color helper, you have to add class `zust-custom`{.class}.

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


## With icons
You can use icons with buttons.

```html {snippet}
<button class="zust-btn">
  <span class="zust-icon">
    <i class="fas fa-grin"></i>
  </span>
  <span>Grin</span>
</button>

<button class="zust-btn" aria-label="Filter">
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

<button class="zust-btn" aria-label="Wink icon button">
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
You can simply make any button disabled by adding attribute `disabled`{.attr}.

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


## Max padding
Max padding buttons have increased padding and less rounded corners. To use it add class `zust-max-pad`{.class} to `zust-btn`{.tag}.

```html {snippet}
<button class="zust-btn zust-primary">Normal</button>
<button class="zust-btn zust-primary zust-max-pad">Max padding</button>
```
---


## Shape
You can make button fullwidth, rounded, sharp, semi rounded. Thanks to [Shape Helper](../helpers/#shape).

```html {snippet}
<button class="zust-btn zust-primary zust-fullwidth">Fullwidth</button>
<button class="zust-btn zust-primary zust-rounded">Rounded</button>
<button class="zust-btn zust-primary zust-semi-rounded">Semi Rounded</button>
<button class="zust-btn zust-primary zust-sharp">Sharp</button>
```
---


## Group editing
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


## Bunch of buttons
You can use Zusty's built-in container to contain bunch of buttons. They will break whenever necessary.

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
  <span tabindex="0" role="button" class="zust-btn zust-primary">Toggle</span>
</label>
```
::: warning Important thing
Don't use `button`{.tag} in this scenario. You can use anything except `button`{.tag} here, like `span`{.tag}, `a`{.tag} etc. Also you have to use any of colored button. It will not work on default buttons.
:::

This makes better sense in button groups.

```html {snippet}
<p>Choose any one option below</p>
<div class="zust-el-group">
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span tabindex="0" role="button" class="zust-btn zust-link">Play</span>
  </label>
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span tabindex="0" role="button" class="zust-btn zust-link">Work</span>
  </label>
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span tabindex="0" role="button" class="zust-btn zust-link">Sleep</span>
  </label>
  <label class="zust-toggle-btn">
    <input type="radio" name="checkForBtn">
    <span tabindex="0" role="button" class="zust-btn zust-link">Dance</span>
  </label>
</div>
```
