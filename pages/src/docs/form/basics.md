---
title: Form Basics
---

# Form Basics
Basic Form Elements to know about.

---


## Form Item
Each form item should be seperated with a `div`{.tag} with class `zust-form-it`{.class}.

```html {snippet}
<form>
  <div class="zust-form-it">
    <label class="zust-label">Label Here</label>
    <p class="zust-form-el">
      <input class="zust-input" type="text" placeholder="Input">
    </p>
  </div>

  <div class="zust-form-it">
    <span class="zust-label">Choose an Option</span>
    <p class="zust-form-el">
      <select class="zust-select zust-with-icon-right">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <span class="zust-icon zust-right">
        <i class="zust-angle-down"></i>
      </span>
    </p>
  </div>
</form>
```
---


## Label and Help Text
For label text use class `zust-label`{.class}. For help text use class `zust-help`{.class}.

```html {snippet}
<form>
  <div class="zust-form-it">
    <label class="zust-label">Label Text Sample</label>
    <p class="zust-form-el">
      <input class="zust-input" type="text" placeholder="Just an Input">
    </p>
    <span class="zust-help">This is text for helping you with forms</span>
  </div>
</form>
```
---


## Grouping
You can use [Element Group](../container/element-group) to group up form elements.

```html {snippet}
<form>
  <div class="zust-form-it">
    <div class="zust-el-group">
      <p class="zust-form-el">
        <input class="zust-input" type="text" placeholder="Just an Input">
      </p>
      <button class="zust-btn zust-success" type="submit">Search It</button>
    </div>
  </div>
</form>
```
---


## Fillup Space
You can make a form element fill up the rest of space by adding class `zust-fullwidth`{.class} to `zust-el-group`{.class} and adding class `zust-fillup`{.class} to any form element, which you want to fill up the space.

```html {snippet}
<form>
  <div class="zust-form-it">
    <div class="zust-el-group zust-fullwidth">
      <p class="zust-form-el zust-fillup">
        <input class="zust-input" type="email" placeholder="Email Here">
      </p>
      <button class="zust-btn zust-link" type="submit">Submit</button>
    </div>
  </div>

  <div class="zust-form-it zust-fullwidth">
    <p class="zust-form-el zust-fillup">
      <input class="zust-input" type="email" placeholder="Email Here">
    </p>
    <button class="zust-btn zust-link" type="submit">Submit</button>
  </div>
</form>
```
---


## Inline Form
For Inline Form, just add class `zust-form-inline`{.class} to `zust-form-it`{.class} and put `zust-form-el`{.class} and `zust-help`{.class} to `zust-form-body`{.class}.

```html {snippet}
<form>
  <div class="zust-form-it zust-form-inline">
    <label class="zust-label">Name</label>
    <div class="zust-form-body">
      <p class="zust-form-el">
        <input class="zust-input" type="text" placeholder="Your Name">
      </p>
      <span class="zust-help">Enter your cool name</span>
    </div>
  </div>

  <div class="zust-form-it zust-form-inline">
    <label class="zust-label">Email</label>
    <div class="zust-form-body">
      <p class="zust-form-el">
        <input class="zust-input" type="email" placeholder="Your Email">
      </p>
    </div>
  </div>

  <div class="zust-form-it zust-form-inline">
    <label class="zust-label">Age</label>
    <div class="zust-form-body">
      <p class="zust-form-el">
        <select class="zust-select zust-with-icon-right">
          <option>20</option>
          <option>30</option>
          <option>40</option>
        </select>
        <span class="zust-icon zust-right">
          <i class="zust-angle-down"></i>
        </span>
      </p>
    </div>
  </div>
</form>
```
