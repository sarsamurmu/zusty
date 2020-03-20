---
title: Input
---

# Input
Input with extra features.

---


## Structure
```html {snippet}
<p class="zust-form-el">
  <input class="zust-input" type="text" placeholder="This is an input">
</p>
```
If you keep the input without it's container there can be sizing issues so please use form element container for better responsiveness.

---


## Sizes
There are extra four size that you can use.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input zust-small" type="text" placeholder="Small">
</p>
<br>

<p class="zust-form-el">
  <input class="zust-input" type="text" placeholder="Normal">
</p>
<br>

<p class="zust-form-el">
  <input class="zust-input zust-large" type="text" placeholder="Large">
</p>
<br>

<p class="zust-form-el">
  <input class="zust-input zust-xlarge" type="text" placeholder="Extra Large">
</p>
```
---


## Colors
Input has all theme colors.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input zust-primary" type="text" placeholder="Primary">
</p>
<p class="zust-form-el">
  <input class="zust-input zust-success" type="text" placeholder="Success">
</p>
<p class="zust-form-el">
  <input class="zust-input zust-warning" type="text" placeholder="Warning">
</p>
<p class="zust-form-el">
  <input class="zust-input zust-error" type="text" placeholder="Error">
</p>
<p class="zust-form-el">
  <input class="zust-input zust-link" type="text" placeholder="Link">
</p>
```
---


## Disabled
You can also make an input disabled by adding attribute `disabled`{.attr}.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input" type="text" placeholder="I am disabled" disabled>
</p>
```
---


## Readonly
Input can be readonly by adding attribute `readonly`{.attr}.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input" type="text" readonly value="Me cannot be changed">
</p>
```
---


## Transparent
Input can be completely transparent, for this use `zust-transparent`{.class}.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input zust-transparent" type="text" value="It's a Transparent Input">
</p>
```
---


## With icon
You can also add icon to an input.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input zust-with-icon-left" type="text" placeholder="With icon left">
  <span class="zust-icon zust-left">
    <i class="fas fa-search"></i>
  </span>
</p>
<br>

<p class="zust-form-el">
  <input class="zust-input zust-with-icon-right" type="text" placeholder="With icon right">
  <span class="zust-icon zust-right">
    <i class="fas fa-grin"></i>
  </span>
</p>
<br>

<p class="zust-form-el">
  <input class="zust-input zust-with-icon-right" type="text" placeholder="I'm loading, right?">
  <span class="zust-icon zust-right">
    <i class="zust-spinner"></i>
  </span>
</p>
<br>

<p class="zust-form-el">
  <input class="zust-input zust-with-icon-both" type="text" placeholder="With icon both side">
  <span class="zust-icon zust-left">
    <i class="fab fa-github"></i>
  </span>
  <span class="zust-icon zust-right">
    <i class="fa fa-search"></i>
  </span>
</p>
```



## Validity
You can show if an input is valid or not by adding class `zust-check-validity`{.class}. Also You've to add `required`{.attr} attribute for better functionality. Input will change it's style to success if you do a valid input.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input zust-check-validity" type="email" placeholder="Enter Email" required>
</p>
```
---


## Show icon when valid
You can also show an icon when Input is valid. You have to just add class `zust-if-valid`{.class} to `zust-icon`{.class}. Icon will show up when minimum 3 character is entered.

```html {snippet}
<p class="zust-form-el">
  <input class="zust-input zust-check-validity zust-with-icon-right" type="text" placeholder="Enter Minimum 3 Char" required pattern=".{3,}">
  <span class="zust-icon zust-if-valid zust-text-success zust-right">
    <b class="material-icons">check</b>
  </span>
</p>
```
---


## Fullwidth
You can also make an input fullwidth, just add class `zust-fullwidth`{.class} to `zust-form-el`{.class}.

```html {snippet}
<p class="zust-form-el zust-fullwidth">
  <input class="zust-input" type="text" placeholder="Fullwidth Input">
</p>
```
---


## Grouping
You can also group input with some other element like buttons. See snippet below.

```html {snippet}
<div class="zust-el-group">
  <p class="zust-form-el">
    <input class="zust-input" type="search" placeholder="Search for Anything">
  </p>
  <button class="zust-btn zust-link" type="submit">Search</button>
</div>
```
---


## Prepends and appends
You can add prepends and appends to input too.

```html {snippet}
<div class="zust-el-group">
  <input class="zust-input" type="text" placeholder="Enter Email">
  <span class="zust-input-append">
    <span>@email.com</span>
  </span>
</div>

<div class="zust-el-group">
  <span class="zust-input-append zust-bg-twitter">
    <span class="zust-icon"><i class="fab fa-twitter"></i></span>
  </span>
  <input class="zust-input" type="text" placeholder="Enter Twitter Username">
</div>
```

Here's what more you can do.

```html {snippet}
<p>Enter Your Website Address</p>
<div class="zust-el-group">
  <span class="zust-input-append">
    <span>www.</span>
  </span>
  <p class="zust-form-el">
    <input class="zust-input zust-with-icon-right zust-check-validity" type="text" placeholder="Address" pattern=".{3,}" required>
    <span class="zust-if-valid zust-icon zust-text-success zust-right">
      <b class="material-icons">check</b>
    </span>
  </p>
  <button class="zust-btn zust-link" type="submit">Submit</button>
</div>
```
---


## Fullwidth Group
An input Group can also be fullwidth, add class `zust-fullwidth`{.class} to `zust-el-container`{.class} and add class `zust-fillup`{.class} to the `zust-form-el`{.class}.

```html {snippet}
<div class="zust-el-group zust-fullwidth">
  <p class="zust-form-el zust-fillup">
    <input class="zust-input" type="text" placeholder="Write A Message">
  </p>
  <button class="zust-btn zust-link">Send</button>
</div>
```
