---
title: Breadcrumb
---

## Breadcrumb
Basic Breadcrumb.

---


## Structure
```html {snippet}
<nav class="zust-breadcrumb" role="breadcrumb">
  <ul>
    <li>
      <a href="#!">First Page</a>
    </li>
    <li>
      <a href="#!">Second Page</a>
    </li>
    <li>
      <a href="#!">Third Page</a>
    </li>
    <!-- Add attribute `active` or class `zust-active` for active item -->
    <li active>
      <a>This Page</a>
    </li>
  </ul>
</nav>
```
---


## Styles
There are few styles that you can use with breadcrumb. Add any of these classes `zust-dot-separator`{.class}, `zust-pipe-separator`{.class}, `zust-pipe-separator`{.class}, `zust-angle-separator`{.class}, `zust-dash-separator`{.class}.

```html {snippet}
<nav class="zust-breadcrumb" role="breadcrumb">
  <ul>
    <li><a href="#!">First Page</a></li>
    <li><a href="#!">Second Page</a></li>
    <li><a href="#!">Third Page</a></li>
    <li active><a>This Page</a></li>
  </ul>
</nav>

<nav class="zust-breadcrumb zust-dot-separator" role="breadcrumb">
  <ul>
    <li><a href="#!">First Page</a></li>
    <li><a href="#!">Second Page</a></li>
    <li><a href="#!">Third Page</a></li>
    <li active><a>This Page</a></li>
  </ul>
</nav>

<nav class="zust-breadcrumb zust-pipe-separator" role="breadcrumb">
  <ul>
    <li><a href="#!">First Page</a></li>
    <li><a href="#!">Second Page</a></li>
    <li><a href="#!">Third Page</a></li>
    <li active><a>This Page</a></li>
  </ul>
</nav>

<nav class="zust-breadcrumb zust-angle-separator" role="breadcrumb">
  <ul>
    <li><a href="#!">First Page</a></li>
    <li><a href="#!">Second Page</a></li>
    <li><a href="#!">Third Page</a></li>
    <li active><a>This Page</a></li>
  </ul>
</nav>

<nav class="zust-breadcrumb zust-dash-separator" role="breadcrumb">
  <ul>
    <li><a href="#!">First Page</a></li>
    <li><a href="#!">Second Page</a></li>
    <li><a href="#!">Third Page</a></li>
    <li active><a>This Page</a></li>
  </ul>
</nav>
```
