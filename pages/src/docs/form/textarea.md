---
title: Textarea
---

# Textarea
A simple textarea.

---


## Structure
```html {snippet}
<textarea class="zust-textarea" placeholder="Write up A Message Just for Me ;)"></textarea>
```
---


## Rows and columns
You can set a `textarea`{.tag}'s rows and columns by adding attribute `rows`{.attr} and `cols`{.attr}.

```html {snippet}
<textarea class="zust-textarea" rows="5" cols="20" placeholder="I have 5 Rows and 20 Columns"></textarea>
```
---


## Colors
It supports all theme colors.

```html {snippet}
<textarea class="zust-textarea zust-success">Success Color</textarea>
```
---


## Readonly
You can make a `textarea`{.tag} readonly by adding attribute `readonly`{.attr}.

```html {snippet}
<textarea class="zust-textarea" readonly rows="5">This is a text that you can just read. You can not change me.</textarea>
```
---


## Disabled
Want to make a textarea disabled? Just add attribute `disabled`{.attr}.

```html {snippet}
<textarea class="zust-textarea" disabled>I'm a disabled textarea.</textarea>
```
---


## Transparent
Textarea can be transparent. Add class `zust-transparent`{.class}.

```html {snippet}
<textarea class="zust-textarea zust-transparent">Am I not transparent?</textarea>
```
---


## Resize
You can control the ability of resizing of a `textarea`{.tag}. Add class `zust-v-resize`{.class} for only resizable vertically and/or add class `zust-h-resize`{.class} for only resizable horizontally.

If you want to completely disable the ability of resizing, then add class `zust-unresizable`{.class}.

```html {snippet}
<textarea class="zust-textarea zust-v-resize">I'm Only Resizable Vertically</textarea>
<textarea class="zust-textarea zust-h-resize">I'm Only Resizable Horizontally</textarea>
<textarea class="zust-textarea zust-unresizable">I'm Not Resizable</textarea>
```
---


## Responsive size
You can also make an textarea responsive by placing it inside of `zust-form-el`{.class} and adding class `zust-responsive`{.class} to `zust-form-el`{.class}.

```html {snippet}
<p class="zust-form-el zust-responsive">
  <textarea class="zust-textarea">Am I responsive? Try resizing me. I respect my parent container.</textarea>
</p>
```

::: link
Using responsive size is recommended over naked textarea, though it needs extra code but it is much more better than regular textarea.
:::
---


## Fullwidth
Make a textarea fullwidth by adding class `zust-fullwidth`{.class} to `zust-form-el`{.class}.

```html {snippet}
<p class="zust-form-el zust-fullwidth">
  <textarea class="zust-textarea">This is Fullwidth</textarea>
</p>
```
