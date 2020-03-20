---
title: Text Helpers
---

# Text Helpers
Utility classes to change style of text.

---


## Common styles
Change text style just by using class
- `zust-text-bold`{.class} : Sets the element's text's font-weight to bold.
- `zust-text-normal`{.class} : Sets the element's text's font-weight to normal.
- `zust-text-light`{.class} : Sets the element's text's font-weight to light.
- `zust-text-italic`{.class} : Sets the element's text's style to italic.
- `zust-text-underline`{.class} : Sets the element's text's style to underlined.
- `zust-text-small`{.class} : Sets the element's text size to small.
- `zust-text-medium`{.class} : Sets the element's text size to medium.
- `zust-text-large`{.class} : Sets the element's text size to large.
- `zust-text-xlarge`{.class} : Sets the element's text size to extra large.
- `zust-unselectable`{.class} : Sets the text unselectable.
- `zust-text-uppercase`{.class} : Sets the element's all text to be uppercased.
- `zust-text-lowercase`{.class} : Sets the element's all text to be lowercased.
- `zust-text-capitalize`{.class} : Sets the element's all text to be capitalized, all word's first letter will be in uppercase.
- `zust-text-smallcaps`{.class} : Sets the element's lowercase letter to small caps.
- `zust-text-justify`{.class} : Sets the element's text align to justify.
- `zust-text-no-wrap`{.class} or `zust-text-nowrap`{.class} : Sets the element's text's wrap to none or no-wrap.
- `zust-text-truncate`{.class} : Sets the element's text overflow to ellipsis.
- `zust-text-family-inherit`{.class} : Sets the element's text font-family to inherit.
- `zust-text-size-inherit`{.class} : Sets the element's text font-size to inherit.
- `zust-text-no-decoration`{.class} : Sets the element's text decoration to none.
- `zust-text-breakable`{.class} : Sets the element's word wrap to be breakable.
- `zust-text-dropcap`{.class} : For adding dropcap to any paragraph.

```html {snippet}
<p class="zust-text-bold">Bold text</p><b class="zust-text-normal">Normal Text</b>
<p class="zust-text-light">Light text</p>
<p class="zust-text-italic">Italic text</p>
<p class="zust-text-underline">Underlined text</p>
<p class="zust-text-small">Small text</p>
<p class="zust-text-medium">Medium text</p>
<p class="zust-text-large">Large text</p>
<p class="zust-text-xlarge">xLarge text</p>
<p class="zust-text-unselectable">Unselectable text</p>
<p class="zust-text-uppercase">UpPeRcAsE TeXt</p>
<p class="zust-text-lowercase">LoWeRcAsE TeXt</p>
<p class="zust-text-capitalize">capitalize text</p>
<p class="zust-text-justify">Justified text. Justified texts make blank spaces to fill out the blank space. As you can see this text, this is also justified. Resize window to see effect.</p>
<p class="zust-text-no-wrap">No wrap texts do not respect it's container they will not break when necessary, they will keep going, going long...... They are kinda like me.</p>
<p class="zust-text-truncate">Truncate texts make ellipsis when there are no place available for them to stay.</p>
<p class="zust-text-family-inherit">Font family inherit</p>
<p class="zust-text-size-inherit">Font size inherit</p>
<u class="zust-text-no-decoration">Text with no decorations</u>
<p class="zust-text-breakable">Text with ability to break each letter. Let's fill it up with useless text so here's the useless text. Resize the window :D</p>
<p class="zust-text-dropcap">Dropcap paragraph. Ain't it looking good? Let's add some Lorem Ipsum thing. Nunc vulputate nisl vitae venenatis pulvinar. Etiam sed nisi ut est consectetur congue. Integer pellentesque augue erat, id auctor erat iaculis sed. Proin laoreet ipsum ac posuere tincidunt. Sed non sollicitudin dolor. Donec non quam neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus quis lacinia quam. Sed vehicula lorem non interdum bibendum. Morbi laoreet quis tortor a malesuada. Proin consequat justo eget dolor viverra, vitae euismod mauris bibendum.</p>
```

### Text sizes
There are 10 Sizes that you can use to handle text size. Size numbers are `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`.

To use it add class `{string}(zust-text-){comment}(size-number)`.

You can also use [Breakpoints](../general/breakpoints) with this.

```html {snippet}
<p class="zust-text-6">Text with size 6</p>
<p class="zust-text-6@large">Text with size 6 at large breakpoint</p>
```

### Superpowered
- `zust-text-centered`{.class} or `zust-text-center`{.class} : Sets the element's text alignment to center. It can also be applied to any parent element, if applied to any parent element, the parent element's all children will be horizontally centered.
- `zust-rtl`{.class} or `zust-text-rtl`{.class} or `zust-right-to-left`{.class} or `zust-text-right-to-left`{.class} : Sets the element's text alignment to right. It can also be applied to any parent element, if applied to any parent element, the parent element's all children will be right aligned.
- `zust-ltr`{.class} or `zust-text-ltr`{.class} or `zust-left-to-right`{.class} or `zust-text-left-to-right`{.class} : Sets the element's text alignment to left. It can also be applied to any parent element, if applied to any parent element, the parent element's all children will be right aligned.
