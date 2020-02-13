---
title: Column
---

## Column
Container with columns function. You can make any container a column container just by adding class `zust-column`{.class}.

---


## Structure
```html {snippet}
<div class="zust-container zust-column">
  <div class="zust-column zust-bg-red">1</div>
  <div class="zust-column zust-bg-pink">2</div>
  <div class="zust-column zust-bg-yellow">3</div>
  <div class="zust-column zust-bg-green">4</div>
  <div class="zust-column zust-bg-light-green">5</div>
  <div class="zust-column zust-bg-light-blue">6</div>
  <div class="zust-column zust-bg-blue">7</div>
</div>
```
Columns are activated from medium breakpoint to next. In small breakpoint it will be row. All are of same size.

---


## Activating column for all breakpoints
You can activate column for all breakpoints by adding class `zust-active@all`{.class}.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-red">1</div>
  <div class="zust-column zust-bg-pink">2</div>
  <div class="zust-column zust-bg-yellow">3</div>
  <div class="zust-column zust-bg-green">4</div>
  <div class="zust-column zust-bg-light-green">5</div>
  <div class="zust-column zust-bg-light-blue">6</div>
  <div class="zust-column zust-bg-blue">7</div>
</div>
```
---


## Column sizes
You can size column by any of these classes:

- `zust-size-1-2`{.class} : Same as half
- `zust-full`{.class} : Column will take the full space of it's container.

3 Parts
- `zust-size-1-3`{.class} : Same as one third
- `zust-size-2-3`{.class} : Same as two third

4 Parts
- `zust-size-1-4`{.class} : Same as one fourth
- `zust-size-3-4`{.class} : Same as three fourth

5 Parts
- `zust-size-1-5`{.class} : Same as one fifth
- `zust-size-2-5`{.class} : Same as two fifth
- `zust-size-3-5`{.class} : Same as three fifth
- `zust-size-4-5`{.class} : Same as four fifth

12 Parts
- `zust-size-1-12`{.class} : Same as one twelfth
- `zust-size-2-12`{.class} : Same as two twelfth
- `zust-size-3-12`{.class} : Same as three twelfth
- `zust-size-4-12`{.class} : Same as four twelfth
- `zust-size-5-12`{.class} : Same as five twelfth
- `zust-size-7-12`{.class} : Same as seven twelfth
- `zust-size-8-12`{.class} : Same as eight twelfth
- `zust-size-9-12`{.class} : Same as nine twelfth
- `zust-size-10-12`{.class} : Same as ten twelfth
- `zust-size-11-12`{.class} : Same as eleven twelfth

```html {snippet}
<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-4-5">4-5 </div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-3-4">3-4 </div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-2-3">2-3</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-3-5">3-5</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-1-2">1-2</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-2-5">2-5</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-1-3">1-3</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-1-4">1-4</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-blue zust-size-1-5">1-5</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>
```

12 Parts

```html {snippet}
<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-11-12">11-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-10-12">10-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-9-12">9-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-8-12">8-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-7-12">7-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-1-2">1-2</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-5-12">5-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-4-12">4-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-3-12">3-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-2-12">2-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>

<div class="zust-container zust-column">
  <div class="zust-column zust-bg-pink zust-size-1-12">1-12</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>
```
---


## Activate container in specific breakpoint
By default column container only get activated from medium breakpoint to next. You can only activate the column container in specific breakpoint if you want to, because it has support for [Breakpoints](../general/breakpoints). The base class name structure is `{string}(zust-active@){comment}(breakpoint-name)`.

Looks like you're on desktop. try resizing your browser's window. :D {.zust-hidden .zust-visible@large}

Small breakpoint

```html {snippet}
<div class="zust-container zust-column zust-active@small">
  <div class="zust-column zust-bg-red">1</div>
  <div class="zust-column zust-bg-pink">2</div>
  <div class="zust-column zust-bg-yellow">3</div>
  <div class="zust-column zust-bg-green">4</div>
  <div class="zust-column zust-bg-light-green">5</div>
  <div class="zust-column zust-bg-light-blue">6</div>
  <div class="zust-column zust-bg-blue">7</div>
</div>
```

Medium breakpoint

```html {snippet}
<div class="zust-container zust-column zust-active@medium">
  <div class="zust-column zust-bg-red">1</div>
  <div class="zust-column zust-bg-pink">2</div>
  <div class="zust-column zust-bg-yellow">3</div>
  <div class="zust-column zust-bg-green">4</div>
  <div class="zust-column zust-bg-light-green">5</div>
  <div class="zust-column zust-bg-light-blue">6</div>
  <div class="zust-column zust-bg-blue">7</div>
</div>
```

Until large breakpoint

```html {snippet}
<div class="zust-container zust-column zust-active@until-large">
  <div class="zust-column zust-bg-red">1</div>
  <div class="zust-column zust-bg-pink">2</div>
  <div class="zust-column zust-bg-yellow">3</div>
  <div class="zust-column zust-bg-green">4</div>
  <div class="zust-column zust-bg-light-green">5</div>
  <div class="zust-column zust-bg-light-blue">6</div>
  <div class="zust-column zust-bg-blue">7</div>
</div>
```

Large breakpoint

```html {snippet}
<div class="zust-container zust-column zust-active@large">
  <div class="zust-column zust-bg-red">1</div>
  <div class="zust-column zust-bg-pink">2</div>
  <div class="zust-column zust-bg-yellow">3</div>
  <div class="zust-column zust-bg-green">4</div>
  <div class="zust-column zust-bg-light-green">5</div>
  <div class="zust-column zust-bg-light-blue">6</div>
  <div class="zust-column zust-bg-blue">7</div>
</div>
```
---


## Different column size for different breakpoints
You can set different column size for different breakpoint as well. Just use any of [Breakpoints](../general/breakpoints). The main structure will be like this `zust-{comment}(column-size)@{comment}(breakpoint-name)`{.string}.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-teal zust-size-3-4@small zust-size-1-3@medium zust-size-4-12@large">
    <span>3-4 Small</span><br>
    <span>1-3 Medium</span><br>
    <span>4-12 Large</span>
  </div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>
```
---


## Column offset
Want a gap inside of your columns? Simply add a column and just don't add color to it.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-primary">Column</div>
  <div class="zust-column"></div>
  <div class="zust-column zust-bg-light-green">Column</div>
  <div class="zust-column zust-bg-light-blue">Column</div>
</div>
```
---


## Default column size
You can make any column take it's default space by adding class `zust-default`{.class}.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-blue zust-default">Hola, How are you doing?</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>
```
---


## Default column size for specific Breakpoint
You can set default column sizing for specific breakpoint. Use any of [Breakpoints](../general/breakpoints). Base class name structure will be like `{string}(zust-default@){comment}(breakpoint-name)`.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-primary zust-default@medium">This column will be default only at medium breakpoint</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>
```
---


## Column inside of another column
You can nest a column inside of another column. You have to just add `zust-container`{.class} class to a column element.

Resize for Fun! {.zust-hidden .zust-visible@large}

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-container zust-active@small">
    <div class="zust-column zust-bg-red">Col-1-Child-1</div>
    <div class="zust-column zust-bg-primary">Col-1-Child-2</div>
  </div>

  <div class="zust-column zust-container zust-active@medium">
    <div class="zust-column zust-bg-teal">Col-2-Child-1</div>
    <div class="zust-column zust-bg-pink">Col-2-Child-2</div>
  </div>

  <div class="zust-column zust-container zust-active@large">
    <div class="zust-column zust-bg-amber">Col-3-Child-1</div>
    <div class="zust-column zust-bg-light-green">Col-3-Child-2</div>
  </div>
</div>
```
---


## Column custom activation
You can also activate an column whenever you want. Add class `zust-custom`{.class}, it will reset column's activation breakpoint and whenever you want to activate it, just add class `zust-active`{.class}.

<button class="zust-btn" onclick="activateColumn()">Activate Column</button>
<button class="zust-btn" onclick="deactivateColumn()">Deactivate Column</button>

```html {snippet}
<div class="zust-container zust-column zust-custom{{clmnstate class=string:}}" hidCode{{id="customColumn"}}>
  <div class="zust-column zust-bg-red">1</div>
  <div class="zust-column zust-bg-pink">2</div>
  <div class="zust-column zust-bg-yellow">3</div>
  <div class="zust-column zust-bg-green">4</div>
  <div class="zust-column zust-bg-light-green">5</div>
  <div class="zust-column zust-bg-light-blue">6</div>
  <div class="zust-column zust-bg-blue">7</div>
</div>
```


<script>
window.addEventListener('DOMContentLoaded', () => {
  var column = document.querySelector('#customColumn');
  var state = document.querySelector('[clmnstate]');

  window.activateColumn = () => {
    column.classList.add('zust-active');
    state.innerHTML = ' zust-active';
  }

  window.deactivateColumn = () => {
    column.classList.remove('zust-active');
    state.innerHTML = '';
  }
});
</script>
