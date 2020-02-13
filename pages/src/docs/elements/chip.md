---
title: Chip
---

# Chip
Minimal chip for your needs.

---


## Structure
```html {snippet}
<!-- Simple-->
<div class="zust-chip">
  <span>Chip</span>
</div>

<!-- With icon-->
<div class="zust-chip">
  <span>With icon</span>
  <span class="zust-icon">
    <i class="material-icons">close</i>
  </span>
</div>

<!-- With image-->
<div class="zust-chip">
  <img src="/resources/profile.png">
  <span>With image</span>
</div>

<!-- With both-->
<div class="zust-chip">
  <img src="/resources/profile.png">
  <span>With both</span>
  <span class="zust-icon">
    <i class="material-icons">close</i>
  </span>
</div>
```
---


## Sizes
You can make the chip large or small by adding class `zust-large`{.class} or `zust-small`{.class}.

```html {snippet}
<!-- Large -->
<div class="zust-chip zust-large">
  <img src="/resources/profile.png">
  <span>Large chip</span>
  <span class="zust-icon">
    <i class="material-icons">close</i>
  </span>
</div>

<!-- Small -->
<div class="zust-chip zust-small">
  <img src="/resources/profile.png">
  <span>Small chip</span>
  <span class="zust-icon">
    <i class="material-icons">close</i>
  </span>
</div>
```



## Bunch of chip
If you are working with bunch of chip you can use Zusty's built-in container. They will break automatically when needed.

```html {snippet}
<div class="zust-container">
  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>One</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <span>Two</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Three</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <span>Four</span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Five</span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Six</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Seven</span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Eight</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <span>Nine</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Ten</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <span>Eleven</span>
  </div>

  <div class="zust-chip">
    <span>Twelve</span>
  </div>
</div>
```
