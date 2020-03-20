---
title: Card
---

# Card
Simple card.

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


## Flat card
There is flat card as well.

```html {snippet}
<div class="zust-card zust-flat">
  <h3>Cat</h3>
  <p>You can see cat almost everywhere. They are adorable.</p>
</div>
```
---


## With button
You can also add button to any card.

```html {snippet}
<div class="zust-card">
  <h3>Snake Game</h3>
  <p>Snake Game is the first and oldest mobile game I've ever played. It can be found on very old nokia phones.</p>
  <footer>
    <button class="zust-btn zust-transparent">Play</button>
    <button class="zust-btn zust-transparent">Download</button>
  </footer>
 </div>
```
---


## With fullwidth button
You can also use fullwidth buttons with card.

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
  <footer>
    <button class="zust-success zust-btn zust-fullwidth">Pay $25</button>
  </footer>
 </div>
```
---


## Landscape card
By default all cards are portrait. You can make them landscape.

```html {snippet}
<div class="zust-card zust-landscape">
  <p>Landscape cards are mainly for almost large text. As this text, this is quite Large. Don't you think so?</p>
</div>
```
---


## React on hover
If you want your cards to be reactive when hovered then you can use this. Just add class `zust-hoverable`{.class}.

```html {snippet}
<div class="zust-card zust-hoverable">
  <p>Hover over me then see the effect. Hope you like it. I am personally loving this.</p>
</div>
<div class="zust-card zust-flat zust-hoverable">
  <p>Hover effect also works well in flat cards. It works anyway.</p>
</div>
```
---


## Colors
You can use [Color Helper](../helpers/#colors) to color any card.

```html {snippet}
<div class="zust-card zust-bg-green">
  <p>Green card using color helper. It's awesome :P</p>
</div>
```
---


## RTL card
Cards can be RTL.

```html {snippet}
<div class="zust-card zust-rtl zust-landscape">
  <h2>RTL Card</h2>
  <p>This is a right to left card. Not that all people will use LTR card, that's why I made this :D</p>
  <footer>
    <button class="zust-btn zust-primary">Donate</button>
    <button class="zust-btn zust-transparent">Share</button>
  </footer>
</div>
```
---


## With container
You can place multiple cards inside Zusty's built-in container. You can use container helpers as well. They will break when necessary.

```html {snippet}
<div class="zust-container zust-f-centered">
  <div class="zust-card">
    <p class="zust-uppercase">info</p>
    <h3>A Simple Card</h3>
    <p>Card of Zusty CSS is quite good. It's made for better UX and UI. You can use it too.</p>
  </div>

  <div class="zust-card">
    <h3>Snake Game</h3>
    <p>Snake Game is the first and oldest mobile game I've ever played. It can be found on very old nokia phones.</p>
    <footer>
      <button class="zust-btn zust-transparent">Play</button>
      <button class="zust-btn zust-transparent">Download</button>
    </footer>
  </div>

  <div class="zust-card zust-landscape">
    <p>Landscape cards are mainly for almost large text. As this text, this is quite large. Don't you think so?</p>
  </div>

  <div class="zust-container">
    <div class="zust-card zust-hoverable">
      <p>Hover over me then see the effect. Hope you like it. I am personally loving this.</p>
    </div>
  </div>

  <div class="zust-card zust-bg-green">
    <p>Green card using color helper. It's awesome :P</p>
  </div>

  <div class="zust-card zust-rtl zust-landscape">
    <h2>RTL Card</h2>
    <p>This is a right to left card. Not that all people will use LTR card, that's why I made this :D</p>
    <footer>
      <button class="zust-btn zust-primary">Donate</button>
      <button class="zust-btn zust-transparent">Share</button>
    </footer>
  </div>
</div>
```
---


## Same height
Cards are of same height by default if you put them on container.

```html {snippet}
<div class="zust-container">
  <div class="zust-card">
    <h3>With less content</h3>
    <p>Just a line.</p>
    <footer>
        <button class="zust-btn zust-primary">Less</button>
    </footer>
  </div>

  <div class="zust-card">
    <h3>With more content</h3>
    <p>
      If a card contains more content than other cards then 
      other cards will increase their height to fill up and make same height.
    </p>
    <footer>
        <button class="zust-btn zust-link">More</button>
    </footer>
  </div>
</div>
```
