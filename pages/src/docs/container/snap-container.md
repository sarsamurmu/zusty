---
title: Snap Container
---

# Snap Container
Snappy container to showcase something like images, cards of features.

---


## Structure
```html {snippet}
<div class="zust-snap-container">
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 1</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 2</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 3</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 4</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 5</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 6</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 7</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 8</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 9</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 10</p></div>
  </div>
</div>
```
As you can see whenever you scroll items are getting snapped to center.

Each item is a `div`{.tag} with class `zust-snap-item`{.class}. All items are contained in a 
`div`{.tag} with class `zust-snap-container`{.class}.

---


## Snap type
Default snap type is center. But, you can set snap type of any item by adding class `zust-snap-start`{.class}, 
`zust-snap-center`{.class} or `zust-snap-end`{.class}.

You can set snap type of all items by adding any of those class to `zust-snap-container`{.class}.

```html {snippet}
<div class="zust-snap-container">
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 1</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 2</p></div>
  </div>
  <div class="zust-snap-item zust-snap-end">
    <div class="zust-card"><p>Snap set to end</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 4</p></div>
  </div>
  <div class="zust-snap-item zust-snap-start">
    <div class="zust-card"><p>Snap set to start</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 6</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 7</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 8</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 9</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 10</p></div>
  </div>
</div>
```
Snap set to end by adding class to `zust-snap-container`{.class}.

```html {snippet}
<div class="zust-snap-container zust-snap-end">
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 1</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 2</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 3</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 4</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 5</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 6</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 7</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 8</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 9</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 10</p></div>
  </div>
</div>
```
---


## Vertical
Snap container can be vertical. To use vertical layout, add class `zust-vertical`{.class} to `zust-snap-container`{.class}.

```html {snippet}
<div class="zust-snap-container zust-vertical" style="height: 300px;">
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 1</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 2</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 3</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 4</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 5</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 6</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 7</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 8</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 9</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 10</p></div>
  </div>
</div>
```
---


## Active at specific breakpoint
Snap container works best on device with touchscreen. You can activate snap container only for specific breakpoint by adding class `{string}(zust-active@){comment}(breakpoint-name)`, you can use any [Breakpoint](../general/breakpoints).

```html {snippet}
<div class="zust-snap-container zust-active@medium">
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 1</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 2</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 3</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 4</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 5</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 6</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 7</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 8</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 9</p></div>
  </div>
  <div class="zust-snap-item">
    <div class="zust-card"><p>Card 10</p></div>
  </div>
</div>
```
