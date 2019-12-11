---
title: Chip
---

# Chip
Minimal Chip for Your Needs.

---


## Structure
```html {snippet}
<!-- Simple-->
<div class="zust-chip">
  <span>Chip</span>
</div>

<!-- With Icon-->
<div class="zust-chip">
  <span>With Icon</span>
  <span class="zust-icon">
    <i class="material-icons">close</i>
  </span>
</div>

<!-- With Image-->
<div class="zust-chip">
  <img src="/resources/profile.png">
  <span>With Image</span>
</div>

<!-- With Both-->
<div class="zust-chip">
  <img src="/resources/profile.png">
  <span>With Both</span>
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
  <span>Large Chip</span>
  <span class="zust-icon">
    <i class="material-icons">close</i>
  </span>
</div>

<!-- Small -->
<div class="zust-chip zust-small">
  <img src="/resources/profile.png">
  <span>Small Chip</span>
  <span class="zust-icon">
    <i class="material-icons">close</i>
  </span>
</div>
```



## Bunch of Chip
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
    <span>You</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>What</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">Zust</div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Kidding</span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Woo</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Wea</span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>Welp</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <span>Lens</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <img src="/resources/profile.png">
    <span>let</span>
    <span class="zust-icon">
      <i class="material-icons">close</i>
    </span>
  </div>

  <div class="zust-chip">
    <span>var</span>
  </div>

  <div class="zust-chip">
    <span>End</span>
  </div>
</div>
```
