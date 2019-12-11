---
title: Pagination
---

# Pagination
Basic, Responsive Styled Pagination.

---


## Structure
```html {snippet}
<nav class="zust-pagination" role="pagination" aria-label="Pagination Navigation">
  <a class="zust-btn" href="#!">Prevoius</a>
  <a class="zust-btn" href="#!">Next</a>

  <!-- `ul.zust-items` for items container -->
  <ul class="zust-items">
    <!-- Use <a> with class `zust-item` or attribute `item` for a styled anchor. -->
    <!-- Add attribute `active` or class `zust-active` to <a> for active item -->
    <li>
      <a class="zust-item" aria-label="Jump to page 1">1</a>
    </li>
    <li>
      <a item aria-label="Jump to page 2">2</a>
    </li>
    <li>&hellip;</li>
    <li>
      <a item aria-label="Jump to page 7">7</a>
    </li>
    <li>
      <a item active aria-label="Current page is 8">8</a>
    </li>
    <li>
      <a item aria-label="Jump to page 9">9</a>
    </li>
    <li>&hellip;</li>
    <li>
      <a item aria-label="Jump to page 15">15</a>
    </li>
    <li>
      <a item aria-label="Jump to page 16">16</a>
    </li>
  </ul>
</nav>
```
And that's all about pagination. Nothing more left for now.
