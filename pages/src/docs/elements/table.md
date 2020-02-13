---
title: Table
---

# Table
Minimal customizable table.

---


## Structure
```html {snippet}
<table class="zust-table zust-bottom-bordered">
  <!-- <thead></thead> is table header-->
  <thead>
    <!-- <tr></tr> Makes a row-->
    <tr>
      <!-- <th></th> is cell header -  Mostly with bold text-->
      <th>Name</th>
      <th>Job</th>
      <th>Score</th>
      <th>What they said</th>
    </tr>
  </thead>
  <!-- <tbody></tbody> is table body-->
  <tbody>
    <tr>
      <!-- <td></td> is simple table cell-->
      <td>Doxy</td>
      <td>Dev</td>
      <td>100</td>
      <td>I'm cool.</td>
    </tr>
    <!-- Add more <tr></tr> for more rows-->
    <tr>
      <td>Jane</td>
      <td>Gamer</td>
      <td>99</td>
      <td>Let's play game.</td>
    </tr>
    <tr>
      <td>Rob</td>
      <td>Racer</td>
      <td>98</td>
      <td>You're not faster than me.</td>
    </tr>
  </tbody>
  <!-- <tfoot></tfoot> is table footer. It's useful if your table is too long-->
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Score</th>
      <th>What they said</th>
    </tr>
  </tfoot>
</table>
```
---


## Borderless
A table is borderless by default. Only add class `zust-table`{.class} to make borderless table.

```html {snippet}
<table class="zust-table">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>
```
---


## Bordered
A table can be bordered, just add class `zust-bordered`{.class}.

```html {snippet}
<table class="zust-table zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>
```
---


## Bottom bordered
If you want an table with only bottom border then add class `zust-bottom-bordered`{.class}.

```html {snippet}
<table class="zust-table zust-bottom-bordered">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>
```
---


## Striped
You can also make a table striped, just add class `zust-striped`{.class}. For best look combine it with `zust-bordered`{.class}.

```html {snippet}
<table class="zust-table zust-striped zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>
```
---


## Hoverable
A table can be hoverable.

```html {snippet}
<table class="zust-table zust-hoverable zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>
```
---


## Fullwidth
A table can be fullwidth, to use add class `zust-fullwidth`{.class}.

```html {snippet}
<table class="zust-table zust-fullwidth zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>
```
---


## Scrollable
A table can be scrollable. Just put the table inside of `zust-table-container`{.class}. It's suggested that you should put long tables inside of table container.

```html {snippet}
<div class="zust-table-container">
  <table class="zust-table zust-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
        <td>Value</td>
      </tr>
    </tbody>
  </table>
</div>
```
---


## Text control
By default texts are aligned left. You can change it using text helper easily.

```html {snippet}
<p>Centered Text</p>
<table class="zust-table zust-text-center zust-fullwidth zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>


<p>Text in RTL</p>
<table class="zust-table zust-text-rtl zust-fullwidth zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronunciation</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>One</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Two</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Three</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Four</td>
    </tr>
  </tbody>
</table>
```
