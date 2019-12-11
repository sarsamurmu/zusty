---
title: Container Basic
---

# Container
Container Built on Flexbox for Flexible Layouts.

---


## Structure
```html {snippet}
<div class="zust-container">
  <!-- Add Your Items Here -->
  <button class="zust-btn">1</button>
  <button class="zust-btn">2</button>
  <button class="zust-btn">3</button>
  <button class="zust-btn">4</button>
  <button class="zust-btn">5</button>
  <button class="zust-btn">6</button>
  <button class="zust-btn">7</button>
  <button class="zust-btn">8</button>
  <button class="zust-btn">9</button>
  <button class="zust-btn">10</button>
  <button class="zust-btn">11</button>
  <button class="zust-btn">12</button>
  <button class="zust-btn">13</button>
  <button class="zust-btn">14</button>
  <button class="zust-btn">15</button>
  <button class="zust-btn">16</button>
  <button class="zust-btn">17</button>
  <button class="zust-btn">18</button>
  <button class="zust-btn">19</button>
  <button class="zust-btn">20</button>
</div>
```
---


## Usage
You can use container for containing bunch of items. Items will break whenever necessary.

---


## Aligning Items
You can Simply Align Items Inside of Container. Add Class  #[+class('zust-v-centered')] for aligning items Vertically Center and #[+class('zust-h-centered')] for aligning items Horizontally Center and  #[+class('zust-f-centered')] for aligning items both Horizontally and Vertically Center.

### Horizontally Centered
```html {snippet}
<div class="zust-container zust-h-centered">
  <button class="zust-btn">Button</button>
</div>
```

### Vertically Centered
```html {snippet}
<div class="zust-container zust-v-centered" style="height: 200px;">
  <button class="zust-btn">Button</button>
</div>
```

### Full Centered
```html {snippet}
<div class="zust-container zust-f-centered" style="height: 200px;">
  <button class="zust-btn">Button</button>
</div>
```
---


## More Positions
You can achieve more positions by using [Flexbox Utilities](../helpers/#flexbox).
