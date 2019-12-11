### Markdown
There are extra syntax that you can use with markdown.

---

### Attributes

You can easily add attribute because it uses [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs). See their [Readme](https://github.com/arve0/markdown-it-attrs/blob/master/README.md) for reference.

---

If you write this in markdown -
```md
`{someClass}(sample code)`
```
this will get converted to html like this - `<code><span class="someClass">sample code</span></code>`. Using this syntax you can create good looking example like `{string}(zust-hidden@){comment}(breakpoint-name)`.

---

### Raw HTML Block
If you write a HTML block, whenever a line of HTML breaks markdown will render `<br>` there, to prevent this you can write your HTML in a code block and add `raw` attribute to it. Like so

<pre><code>
```html {raw}
Your HTML
```
</code></pre>

Thus you can prevent `<br>` from being rendered unnecessarily

---

### Note Blocks

You can easily create note blocks by using this syntax

```md
::: type Header
Content
:::
```
`type` can be any of these - `primary`, `success`, `warning`, `error` and `link`.

---

### Creating HTML with JS
You can easily create HTML with JS in markdown by using this syntax.

<pre><code>
```js {execute}
// Do whatever here using JavaScript.
// But finally return a String;
// Like
let htmlStr = ``;

for (let i = 0; i < 10; i++) {
  htmlStr += `<p>I am nth ${i}</p>`
}

return htmlStr;
```
</code></pre>

---

End! Nothing More.
