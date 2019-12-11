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


## Activating Column for All Breakpoints
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


## Column Sizes
You can Size Column by any of these classes:

- `zust-size-1-2`{.class} : Same as Half
- `zust-full`{.class} : Column will take the full space of it's container.

3 Parts
- `zust-size-1-3`{.class} : Same as One Third
- `zust-size-2-3`{.class} : Same as Two Third

4 Parts
- `zust-size-1-4`{.class} : Same as One Fourth
- `zust-size-3-4`{.class} : Same as Three Fourth

5 Parts
- `zust-size-1-5`{.class} : Same as One Fifth
- `zust-size-2-5`{.class} : Same as Two Fifth
- `zust-size-3-5`{.class} : Same as Three Fifth
- `zust-size-4-5`{.class} : Same as Four Fifth

12 Parts
- `zust-size-1-12`{.class} : Same as One Twelfth
- `zust-size-2-12`{.class} : Same as Two Twelfth
- `zust-size-3-12`{.class} : Same as Three Twelfth
- `zust-size-4-12`{.class} : Same as Four Twelfth
- `zust-size-5-12`{.class} : Same as Five Twelfth
- `zust-size-7-12`{.class} : Same as Seven Twelfth
- `zust-size-8-12`{.class} : Same as Eight Twelfth
- `zust-size-9-12`{.class} : Same as Nine Twelfth
- `zust-size-10-12`{.class} : Same as Ten Twelfth
- `zust-size-11-12`{.class} : Same as Eleven Twelfth

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


## Container in Different Breakpoint
By default Column Container only get activated from medium breakpoint and next. You can only activate the column container in different breakpoint if you want to, because it has support for [Breakpoints](../general/breakpoints). The base class name structure is `{string}(zust-active@){comment}(breakpoint-name)`.

Looks Like You're on Desktop. Try Resizing your browser's Window. :D {.zust-hidden .zust-visible@large}

Small Breakpoint

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

Medium Breakpoint

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

Until Large Breakpoint

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

Large Breakpoint

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


## Column Sizes on Different Breakpoint
You can set different column size in different breakpoint as well. Just use any of [Breakpoints](../general/breakpoints). The main structure will be like this `zust-{comment}(column-size)@{comment}(breakpoint-name)`{.string}.

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


## Column OffSet
Want a Gap Inside of Your Columns? Simply Add A Column and Just don't add Color to it.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-primary">Column</div>
  <div class="zust-column"></div>
  <div class="zust-column zust-bg-light-green">Column</div>
  <div class="zust-column zust-bg-light-blue">Column</div>
</div>
```
---


## Default Column Size
p You can make any column take it's default space by adding class `zust-default`{.class}.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-blue zust-default">Hola, How are you doing?</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>
```
---


## Default Column Size on Different Breakpoint
You can set default column sizing in different breakpoint. Use any of [Breakpoints](../general/breakpoints). Base Class name structure will be like `{string}(zust-default@){comment}(breakpoint-name)`.

```html {snippet}
<div class="zust-container zust-column zust-active@all">
  <div class="zust-column zust-bg-primary zust-default@medium">This Column will be Default only at Medium Breakpoint</div>
  <div class="zust-column zust-bg-light">Auto</div>
</div>
```
---


## Column Inside of Column
Yes, you can nest a column inside of another column. You have to just add `zust-container`{.class} class to a column element.

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


## Column Custom Activation
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
