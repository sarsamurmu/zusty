---
title: Nav
---

# Nav
Alternative form of navigation.

---

## Structure
```html {snippet}
<ul class="zust-nav">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>
    Item 4
    <ul>
      <li>Item 4.1</li>
      <li>Item 4.2</li>
      <li>Item 4.3</li>
      <li>Item 4.4</li>
    </ul>
  </li>
  <li>Item 5</li>
  <li>Item 6</li>
</ul>
```
---


## Selection
To set an item selected, just add attribute `selected`{.attr} or class `zust-selected`{.class} to `li`{.tag}.

You need JavaScript to toggle between items. Here's an example.

```html {snippet}
<ul class="zust-nav">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>
    Item 4
    <ul>
      <li>Item 4.1</li>
      <li>Item 4.2</li>
      <li>Item 4.3</li>
      <li>Item 4.4</li>
    </ul>
  </li>
  <li>Item 5</li>
  <li>Item 6</li>
</ul>

noRender{{<script>
  // Add event listener to all `li`
  document.querySelectorAll('.zust-nav li').forEach((li) => {
    li.addEventListener('click', (e) => {
      // Don't add `selected` attribute if it contains nested list
      if (!e.target.querySelector('li')) {
        // Remove `selected` attribute from other `li`s
        e.target.closest('.zust-nav').querySelectorAll('li').forEach((aLi) => aLi.removeAttribute('selected'));
        // Add `selected` attribute to the `li` which is clicked
        e.target.setAttribute('selected', '');
      }
    })
  })
</script>}}
```


<script>
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', (e) => {
        if (!e.target.querySelector('li')) {
          e.target.closest('.zust-nav').querySelectorAll('li').forEach((aLi) => aLi.removeAttribute('selected'));
          e.target.setAttribute('selected', '');
        }
      })
    })
  })
</script>
