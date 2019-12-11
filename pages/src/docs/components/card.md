---
title: Card
---

# Card
Simple Card

---


## Structure
```html {snippet}
<div class="zust-card">
  <p class="zust-uppercase">info</p>
  <h3>A Simple Card</h3>
  <p>Card of Zusty CSS is quite good. It's made for better UX and UI. You can use it too.</p>
  <!-- You can Put anything inside of it -->
</div>
```
---


## Flat Card
There are Flat Card as well.

```html {snippet}
<div class="zust-card zust-flat">
  <h3>Cat</h3>
  <p>You can see cat almost everywhere. They are adorable.</p>
</div>
```
---


## With Button
You can also add button to any card.

```html {snippet}
<div class="zust-card">
  <h3>Snake Game</h3>
  <p>Snake Game is the first and oldest mobile game I've ever played. It can be found on Very Old Nokia Phones.</p>
  <footer>
    <button class="zust-btn zust-transparent">Play</button>
    <button class="zust-btn zust-transparent">Download</button>
  </footer>
 </div>
```
---


## With Centered Button
You can make buttons center by adding class `zust-center`{.class} to `footer`{.tag}.

```html {snippet}
<div class="zust-card">
  <h1 class="zust-text-centered">$25</h1>
  <p>Pay to enjoy Premium Features.</p>
  <p>Pack Includes -</p>
  <ul>
    <li>Premium Icons</li>
    <li>Unique Stickers</li>
    <li>Limitless Power</li>
  </ul>
  <footer class="zust-center">
    <button class="zust-success zust-btn zust-fullwidth">Pay $25</button>
  </footer>
 </div>
```
---


## Landscape Card
By default all cards are Portrait. You can make them Landscape.

```html {snippet}
<div class="zust-card zust-landscape">
  <p>Landscape Cards are mainly for almost large text. As this Text, This is quite Large. Don't you think So???</p>
</div>
```
---


## React on Hover
If you want your cards to be reactive when hovered then you can use this. Just add class `zust-hoverable`{.class}.

```html {snippet}
<div class="zust-card zust-hoverable">
  <p>Hover Over Me Then See the Effect. Hope You Like it. I Personally loving this.</p>
</div>
<div class="zust-card zust-flat zust-hoverable">
  <p>Hover Effect also Works well in Flat Cards. It works anyway.</p>
</div>
```
---


## Colors
You can use [Color Helper](../helpers/#colors) to color any Cards.

```html {snippet}
<div class="zust-card zust-bg-green">
  <p>Green card Using Color Helper. It's awesome :P</p>
</div>
```
---


## RTL Card
Cards can Be RTL.

```html {snippet}
<div class="zust-card zust-rtl zust-landscape">
  <h2>RTL Card</h2>
  <p>This is a Right to Left card. Not that all peolpe will use LTR card, that's why I made This :D</p>
  <footer>
    <button class="zust-btn zust-primary">Donate</button>
    <button class="zust-btn zust-transparent">Share</button>
  </footer>
</div>
```
---


## With Container
You can Place multiple cards inside Zusty's Built-in container. You can use Container Helpers as well. They will break when necessary.

```html {snippet}
<div class="zust-container zust-f-centered">
  <div class="zust-card">
    <p class="zust-uppercase">info</p>
    <h3>A Simple Card</h3>
    <p>Card of Zusty CSS is quite good. It's made for better UX and UI. You can Use it too.</p>
  </div>

  <div class="zust-card">
    <h3>Snake Game</h3>
    <p>Snake Game is the first and oldest mobile game I've ever played. It can be found on Very Old Nokia Phones.</p>
    <footer>
      <button class="zust-btn zust-transparent">Play</button>
      <button class="zust-btn zust-transparent">Download</button>
    </footer>
  </div>

  <div class="zust-card zust-landscape">
    <p>Landscape Cards are mainly for almost large text. As this Text, This is quite Large. Don't you think So???</p>
  </div>

  <div class="zust-container">
    <div class="zust-card zust-hoverable">
      <p>Hover Over Me Then See the Effect. Hope You Like it. I Personally loving this.</p>
    </div>
  </div>

  <div class="zust-card zust-bg-green">
    <p>Green card Using Color Helper. It's awesome :P</p>
  </div>

  <div class="zust-card zust-rtl zust-landscape">
    <h2>RTL Card</h2>
    <p>This is a Right to Left card. Not that all peolpe will use LTR card, that's why I made This :D</p>
    <footer>
      <button class="zust-btn zust-primary">Donate</button>
      <button class="zust-btn zust-transparent">Share</button>
    </footer>
  </div>
</div>
```
