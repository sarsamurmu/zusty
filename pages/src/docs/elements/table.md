---
title: Table
---

# Table
Minimal Customizable Table.

---


## Structure
```html {snippet}
<table class="zust-table zust-bottom-bordered">
  <!-- <thead></thead> is Table Header-->
  <thead>
    <!-- <tr></tr> Makes a Row-->
    <tr>
      <!-- <th></th> is Cell Header -  Mostly with Bold Text-->
      <th>Name</th>
      <th>Job</th>
      <th>Score</th>
      <th>What they Said</th>
    </tr>
  </thead>
  <!-- <tbody></tbody> is Table Body-->
  <tbody>
    <tr>
      <!-- <td></td> is Simple Table Cell-->
      <td>Doxy</td>
      <td>Dev</td>
      <td>100</td>
      <td>I'm cool.</td>
    </tr>
    <!-- Add more <tr></tr> For More Rows-->
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
  <!-- <tfoot></tfoot> is Table Footer. It's Useful if Your Table is too long-->
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Score</th>
      <th>What they Said</th>
    </tr>
  </tfoot>
</table>
```
---


## Borderless
A table is borderless by deafult. Only add class `zust-table`{.class} to make borderless table.

```html {snippet}
<table class="zust-table">
  <thead>
    <th>Number</th>
    <th>Pronounciation</th>
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
    <th>Pronounciation</th>
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


## Bottom Bordered
If You want an table with only bottom border then add class `zust-bottom-bordered`{.class}.

```html {snippet}
<table class="zust-table zust-bottom-bordered">
  <thead>
    <th>Number</th>
    <th>Pronounciation</th>
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
You can also make a table striped, just add class `zust-striped`{.class}. For Best Look combine it with `zust-bordered`{.class}.

```html {snippet}
<table class="zust-table zust-striped zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronounciation</th>
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
    <th>Pronounciation</th>
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
A fullwidth table please.. Here is it, just don't forget to add class `zust-fullwidth`{.class}.

```html {snippet}
<table class="zust-table zust-fullwidth zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronounciation</th>
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


## Text Control
By default texts are aligned left. You can change it using text helper easily.

```html {snippet}
<p>Centered Text</p>
<table class="zust-table zust-text-center zust-fullwidth zust-bordered">
  <thead>
    <th>Number</th>
    <th>Pronounciation</th>
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
    <th>Pronounciation</th>
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
