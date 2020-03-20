---
title: Divider
---

# Divider
Compact divider.

---


## Structure
```html {snippet}
<p>Simple divider</p>
<hr divider>
<p>With content</p>
<div divider><h3>Introduction</h3></div>
```
---


## Simple
Simple divider is just a `hr`{.tag} with attribute `divider`{.attr}.

```html {snippet}
<hr divider>
```
---


## With content
If you want content inside your divider you can use a `div`{.tag} with class `zust-divider`{.class} or attribute `divider`{.attr}.

```html {snippet}
<div divider>Any content Here</div>
```

More usages
```html {snippet}
<button class="zust-btn zust-link zust-fullwidth">Buy this</button>
<div divider><h3>OR</h3></div>
<button class="zust-btn zust-link zust-fullwidth">Sell this</button>
```
```html {snippet}
<div divider><h3>Like Heading</h3></div>
<p>This is my paragraph about Zusty CSS.</p>
```
---
