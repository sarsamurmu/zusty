---
title: Helpers
---

# Helpers
In Zusty there are lots of powerful helpers or modifiers that you can use just by adding class or attribute. These are like low level utility classes.

---


## Display
If You want to expand/collapse something for any reason or for debugging purposes you can use following classes to any element:
- `zust-visible`{.class} : To forcibly make any element visible.
- `zust-hidden`{.class} : To hide any element.
- `zust-invisible`{.class} : To make any element invisible. Note that It will only make the element invisible, It means the element will be there and will take it's space.

### Based on theme
If you want to expand/collapse any element on dark mode you can use:
- `zust-visible@dark`{.class} : To make any element visible on dark mode.
- `zust-hidden@dark`{.class} : To hide any element on dark mode.
- `zust-invisible@dark`{.class} : To make any element invisible on dark mode.

What if you want your element to be only visible on dark mode? Simply add both `zust-hidden`{.class} and `zust-visible@dark`{.class} classes. Then see the magic. It's good when you want to change page content based on theme, like pictures.

```html {snippet}
<span class="zust-hidden zust-visible@dark">Hey, Look at me I'm Visible, Thanks to Dark Mode.</span>
```

### Based on breakpoint
It has support for [Breakpoints](../general/breakpoints).

If you want to show something only on certain breakpoint then add class `zust-visible@`{.class} then the breakpoint name. In simple words the class name will be like this `{string}(zust-visible@){comment}(breakpoint-name)`.

```html {snippet}
<p class="zust-hidden zust-visible@small">I'm only visible at small breakpoint</p>
```
`zust-hide`{.class} and `zust-invisible`{.class} applies in the same way.

### Display types
You can also change the display type by adding any of these classes
- `zust-inline`{.class} : Sets the element's display to be inline.
- `zust-block`{.class} : Sets the element's display to be block.
- `zust-flex`{.class} : Sets the element's display to be flex.
- `zust-inline-block`{.class} : Sets the element's display to be inline-block.
- `zust-inline-flex`{.class} : Sets the element's display to be inline-flex.
- `zust-list-item`{.class} : Sets the element's display to be list-item.

### Display types in different breakpoint
Display type has support for [Breakpoints](../general/breakpoints).

Its class name's structure will be like this `{comment}(display-type){string}(@){comment}(breakpoint-name)`.

Example. If you want to make an element's display type to list-item only in small breakpoint then you will add class `zust-list-item@small`{.class}.

```html {snippet}
<p class="zust-list-item@small">I am a list item only at small breakpoint.</p>
```
---


## Margin and padding
For utilities there are margin and padding control. add any of these classes

### Disabling margin or padding
- `zust-marginless`{.class} : In applied element, there will be no margin.
- `zust-paddingless`{.class} : In applied element, there will be no padding.

You can also trigger marginless or paddingless in any defined breakpoint, because it has support for [Breakpoints](../general/breakpoints).

```html {snippet}
<p class="zust-m-4 zust-marginless@until-large">I've 4rem margin by default. But I will be marginless until large breakpoint.</p>
```

### Adding margins
You can also add margin to a element. You have to just add a class and the class's prefix is `zust-m-`{.class} then the value. The value is limited from 0 to 10, and it uses `rem`{.attr} as unit.

Example. If you add class `zust-m-1`{.class} to an element, the element's margin will be `1rem`{.attr} all sides.

Defining side in margin: You can define side for margin too. Use any of these prefixes
- `zust-m-t-`{.class} : For adding margin to top side.
- `zust-m-b-`{.class} : For adding margin to bottom side.
- `zust-m-l-`{.class} : For adding margin to left side.
- `zust-m-r-`{.class} : For adding margin to right side.
- `zust-m-x-`{.class} : For adding margin to left and right sides.
- `zust-m-y-`{.class} : For adding margin to top and bottom sides.

Example. If you want to add `2rem`{.attr} margin to top side, you will add class `zust-m-t-2`{.class}.

### Adding paddings
Adding padding is same as margin just `-m-`{.class} will be replaced with `-p-`{.class}. Though I will cover it again.

Adding padding to a element is super easy. You have to just add a class and the class's prefix is `zust-p-`{.class} then the value. The value is limited from 0 to 10, and it uses `rem`{.attr} as unit.

Example. If you add class `zust-p-3`{.class} to an element, the element's margin will be `3rem`{.attr} all sides.

Defining side in padding: You can define side for padding too. Use any of these prefixes
- `zust-p-t-`{.class} : For adding padding to top side.
- `zust-p-b-`{.class} : For adding padding to bottom side.
- `zust-p-l-`{.class} : For adding padding to left side.
- `zust-p-r-`{.class} : For adding padding to right side.
- `zust-p-x-`{.class} : For adding padding to left and right sides.
- `zust-p-y-`{.class} : For adding padding to top and bottom sides.

Example. If you want to add `1rem`{.attr} padding to left side, you will add class `zust-p-l-1`{.class}.

---


## Float
Change float just by adding class. `zust-left`{.class} for changing float to left. `zust-right`{.class} for changing float to right.

You can use class `zust-clearfix`{.class} for clearing floats of an item.

```html {snippet}
<p>Without clearfix</p>
<div class='zust-bg-light'>
  <p>Clearfix clears floats of an element, floats are designed for paragraphs to control image.</p>
  <img class='zust-right' src='/resources/zusty.svg' width='80px'>
</div>
<p>As you can see the image is going out of its container.</p>
<br><br>

<p>With clearfix</p>
<div class='zust-clearfix zust-bg-light'>
  <p>Clearfix clears floats of an element, floats are designed for paragraphs to control image.</p>
  <img class='zust-right' src='/resources/zusty.svg' width='80px'>
</div>
<p>Now it takes space from its container</p>
```
---


## Flexbox
Utility classes for working with flexbox.

If you want to learn more about Flexbox then [Read This](https://github.com/samanthaming/Flexbox30/blob/master/README.md){rel=noopener}.

Justify
- `zust-justify-start`{.class}: justify-content to flex-start.
- `zust-justify-center`{.class}: justify-content to center.
- `zust-justify-end`{.class}: justify-content to flex-end.
- `zust-justify-around`{.class}: justify-content to space-around.
- `zust-justify-between`{.class}: justify-content to space-between.
- `zust-justify-evenly`{.class}: justify-content to space-evenly.

Align
- `zust-align-start`{.class}: align-items to flex-start.
- `zust-align-center`{.class}: align-items to center.
- `zust-align-end`{.class}: align-items to flex-end.
- `zust-align-stretch`{.class}: align-items to stretch.
- `zust-align-baseline`{.class}: align-items to baseline.

Wrap
- `zust-nowrap`{.class}: flex-wrap to nowrap.
- `zust-wrap`{.class}: flex-wrap to wrap.
- `zust-wrap-reverse`{.class}: flex-wrap to wrap-reverse.

---


## Flip
Flip any element. Useful for flipping images and icons.
- `zust-flip-horizontal`{.class} or `zust-flip-x`{.class} : Add this class to flip any element horizontally or by X-axis.
- `zust-flip-vertical`{.class} or `zust-flip-y`{.class} : Add this class to flip any element vertically or by Y-axis.

---


## Rotate
Rotate anything to predefined values. The values are `15`, `-15`, `30`, `-30`, `45`, `-45`, `60`, `-60`, `90`, `-90`, `120`, `-120`, `180`, `-180`.

Use them just by adding class `zust-rotate-`{.class} and then the value.

Example 1 - If you want to rotate something to 120 deg, just add class `zust-rotate-120`{.class}. The element will be rotated 120 deg.

Example 2 - If you want to rotate something to -90 deg, just add class `zust-rotate--90`{.class}. The element will be rotated -90 deg.

---


## Shape
There are several class which can help you change shape
- `zust-fullwidth`{.class} : Sets the element's width fill the rest of it's parent's width. It has support for [Breakpoints](../general/breakpoints).
- `zust-fullheight`{.class} : Sets the element's height fill the rest of it's parent's width. It has support for [Breakpoints](../general/breakpoints).
- `zust-rounded`{.class} : Sets the element's corner radius to full.
- `zust-semi-rounded`{.class} : Sets the element's corner radius to 10px, not completely rounded or sharp.
- `zust-radiusless`{.class} or `zust-sharp`{.class} : Sets the element's corner radius to 0, means completely radiusless.

---


## Text
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

---


## Colors
Change background or text color to some predefined colors.

General colors are
```js {execute}
var htmlStr = ``;
var colors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'grey',
  'blue-grey',
  'light-grey',
  'black',
  'white',
  'transparent'
]

var themeColors = [
  'primary',
  'warning',
  'error',
  'success',
  'link'
]

var gradientColors = [
  ['green-gradient', 'success-gradient'],
  ['amber-gradient', 'warning-gradient'],
  ['red-gradient', 'error-gradient'],
  ['blue-gradient', 'link-gradient']
]

var brandColors = [
  'facebook',
  'youtube',
  'twitter',
  'github'
]

colors.forEach((name) => htmlStr += `<div class="color-block zust-bg-${name}">${name}</div>`);

htmlStr += `<p>Theme Colors are</p>`;

themeColors.forEach((name) => htmlStr += `<div class="color-block zust-bg-${name}">${name}</div>`);

htmlStr += `<p>There are gradients. For now it's only four</p>`;

gradientColors.forEach((names) => htmlStr += `<div class="color-block zust-bg-${names[1]}">${names[0]} or ${names[1]}</div>`);

htmlStr += `<p>It also includes several brand colors</p>`;

brandColors.forEach((name) => htmlStr += `<div class="color-block zust-bg-${name}">${name}</div>`);

return htmlStr
```

It also includes `inverted` color, which alternates background or text color to dark and light. If you use this color to any element, in light theme the element's color will be dark-grey and in dark theme it will be whitesmoke.

<div class="color-block zust-bg-inverted">inverted</div>
<br>

### Background color
You can set any element's background color just by adding a class. To set any element's background color, add class `zust-bg-`{.class} then the color name.

Example. If You want to set any element's background color to pink, just add class `zust-bg-pink`{.class}.

If you want to set different background color in dark theme, add class `zust-bg-{comment}(color-name)@dark`{.string}.

Example. If you want to  set any element's background color to green in dark theme, add class `zust-dark-bg-green`{.class}.

```html {snippet}
<button class="zust-btn zust-custom zust-bg-pink zust-bg-green@dark">I am a chameleon</button>
hidCode{{<p>Change the theme!</p>}}
```

Extra colors which are only available as background color are -
- `light`{.string} : Use this color to any element to make the element's background color to a lighter color than it's parent's background color.
- `default`{.string} : Use this color to any element to make the element's background color to default to it's theme.

### Text color
You can set any element's text color just by adding a class. To set any element's text color, add class `zust-text-`{.class} then the color name

Example. If You want to set any element's background color to red, just add class `zust-text-red`{.class}.

If you want to set different text color in dark theme, add class `zust-text-{comment}(color-name)@dark`{.string}.

Example. If you want to  set any element's text color to teal in dark theme, add class `zust-text-teal@dark`{.class}.

```html {snippet}
<p class="zust-text-red zust-text-teal@dark">This is a text</p>
```

### Text Power
- `pow-primary` : Use this color to any element to make the element's text color to strongest/powered text Color.
- `pow-secondary` : Use this color to any element to make the element's text color to second strongest/powered text Color.
- `pow-tertiary` : Use this color to any element to make the element's text color to third strongest/powered text color.

```html {snippet}
<p class="zust-text-pow-primary">Primary text color. You can See this text's color looks completely strong, more powerful than any other texts. This text color applies to header elements.</p>
<p class="zust-text-pow-secondary">Secondary text color. This text's color is not as much powerful as primary text color, but it is powerful than tertiary text color. Weaker than primary text color but stronger than tertiary text color. This text color applies to every child elements of body.</p>
<p class="zust-text-pow-tertiary">Tertiary text color. As you can notice this text's color is weaker than any other text color. I want more text or the demo will not be that much good, so I tried to write more text. as you can see this is my text. Yay!</p>
```
---


## State
You can toggle any element's state by adding class `zust-hovered`{.class}, `zust-focused`{.class} and `zust-active`{.class}. It's good for debugging and/or toggling states using JavaScript.

```html {snippet}
<button class="zust-btn zust-success{{statetxt class=string:}}" hidCode{{id="stateButton"}}>I'm being Tested</button>
```
<p class="zust-form-el"><input class="zust-input" id="stateInput" type="text" placeholder="Type Class and Click Add"></p>
<button class="zust-btn" onclick="addState()">Add</button>

---


## Static
You can make any item static or unresponsive by adding class `zust-static`{.class}.

```html {snippet}
<button class="zust-btn zust-link">I'm responsive :]</button>
<button class="zust-btn zust-link zust-static">I'm unresponsive :[</button>
<br><br>

<p class="zust-form-el">
  <input class="zust-input" placeholder="I will respond :D">
</p>
<p class="zust-form-el">
  <input class="zust-input zust-static" placeholder="I will not respond ;_;">
</p>
```



<script>
window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#stateInput'),
      testButton = document.querySelector('#stateButton'),
      code = document.querySelector('[statetxt]');

  window.addState = () => {
    testButton.className = 'zust-btn zust-success ' + input.value;
    code.innerHTML = input.value.trim() === '' ? '' : ' ' + input.value;
  }
})
</script>
