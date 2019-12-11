---
title: Element Group
---

# Element Group
Container For Grouping up Elements.

---


You can make a group of items by using element group. To use it, make `div`{.tag} and add class `zust-el-group`{.class}. Then place the elements inside of that `div`{.tag}.

```html {snippet}
<div class="zust-el-group">
  <button class="zust-btn zust-primary">Item 1</button>
  <button class="zust-btn zust-primary">Item 2</button>
  <button class="zust-btn zust-primary">Item 3</button>
  <button class="zust-btn zust-primary">Item 4</button>
</div>
```

You can also group item's vertically, just add class `zust-vertical`{.class} to the `div`{.tag}.

```html {snippet}
<div class="zust-el-group zust-vertical">
  <button class="zust-btn zust-primary">Item 1</button>
  <button class="zust-btn zust-primary">Item 2</button>
  <button class="zust-btn zust-primary">Item 3</button>
  <button class="zust-btn zust-primary">Item 4</button>
</div>
```

You can even group up dropdowns as well.

```html {snippet}
<div class="zust-el-group">
  <button class="zust-btn zust-primary">Open</button>
  <div class="zust-dropdown">
    <button class="zust-btn zust-primary">
      <span class="zust-icon">
        <i class="zust-caret-down"></i>
      </span>
    </button>
    <ul class="zust-items">
      <li><span>Notepad</span></li>
      <li><span>Atom</span></li>
    </ul>
  </div>
</div>

<div class="zust-el-group">
  <div class="zust-dropdown">
    <button class="zust-btn zust-primary">
      <span class="zust-icon">
        <i class="zust-caret-down"></i>
      </span>
    </button>
    <ul class="zust-items">
      <li><span>Item 1</span></li>
      <li><span>Item Blah</span></li>
    </ul>
  </div>
  <button class="zust-btn zust-primary">After</button>
</div>
```
