---
title: Tabs
---

# Tabs
Responsive, beautiful tabs.

---


## Structure
```html {snippet}
<div class="zust-tabs">
  <ul>
    <li selected>Apps</li>
    <li>Games</li>
    <li>Musics</li>
    <li>Movies</li>
    <li>Books</li>
    <li>TV Shows</li>
  </ul>
</div>
```
---


## Selection
To set an item selected, just add attribute `selected`{.attr} or class `zust-selected`{.class} to `li`{.tag}.

You need JavaScript to toggle between items. Here's an example.

```html {snippet}
<div class="zust-tabs">
  <ul>
    <li selected>Apps</li>
    <li>Games</li>
    <li>Musics</li>
    <li>Movies</li>
    <li>Books</li>
    <li>TV Shows</li>
  </ul>
</div>

<script>

  // Add Event Listener to all li
  document.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', () => {
      // Remove `selected` attribute from other `li`s
      li.closest('ul').querySelectorAll('li').forEach((otherLi) => {
        otherLi.removeAttribute('selected');
      });
      // Add attribute `selected` to the `li`
      li.setAttribute('selected', '');
    });
  });
</script>
```
---


## Alignments
There are three alignments that you can use with tabs. Add any of these classes - `zust-center-aligned`{.class}, `zust-right-aligned`{.class} or `zust-fullwidth`{.class}.

```html {snippet}
<div class="zust-tabs">
  <ul>
    <li selected>Apps</li>
    <li>Games</li>
    <li>Musics</li>
  </ul>
</div>
<br>

<div class="zust-tabs zust-center-aligned">
  <ul>
    <li>Apps</li>
    <li selected>Games</li>
    <li>Musics</li>
  </ul>
</div>
<br>

<div class="zust-tabs zust-right-aligned">
  <ul>
    <li>Apps</li>
    <li>Games</li>
    <li selected>Musics</li>
  </ul>
</div>
<br>

<div class="zust-tabs zust-fullwidth">
  <ul>
    <li selected>Apps</li>
    <li>Games</li>
    <li>Musics</li>
  </ul>
</div>
```
---


## With icon
Tabs can include icons, just put them inside of `li`{.tag}.

```html {snippet}
<div class="zust-tabs zust-fullwidth">
  <ul>
    <li selected>
      <span class="zust-icon">
        <i class="fas fa-book"></i>
      </span>
      <span>Books</span>
    </li>
    <li>
      <span class="zust-icon">
        <i class="fa fa-gamepad"></i>
      </span>
      <span>Games</span>
    </li>
    <li>
      <span class="zust-icon">
        <i class="fas fa-compact-disc"></i>
      </span>
      <span>Musics</span>
    </li>
  </ul>
</div>
```
---


## Line style
There is alternative line style for tabs, to use it, add class `zust-lined`{.class} to `zust-tabs`{.class}.

```html {snippet}
<div class="zust-tabs zust-lined zust-fullwidth">
  <ul>
    <li selected>Apps</li>
    <li>Games</li>
    <li>Musics</li>
  </ul>
</div>
```


<script>
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', () => {
      li.closest('ul').querySelectorAll('li').forEach((oLi) => {
        oLi.removeAttribute('selected')
      });
      li.setAttribute('selected', '');
    })
  })
})
</script>
