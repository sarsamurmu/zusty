---
title: Helpers
---

# Helpers
In Zusty There are Lots of powerful helpers or modifiers that you can use just by adding class or attribute. These are just low level utility classes.

---


## Display
If You want to expand/collapse something for any reason or for debugging purposes you can use following classes to any element:
- `zust-visible`{.class} : Add this class to forcibly make any element visible.
- `zust-hidden`{.class} : Add this class to hide any element.
- `zust-invisible`{.class} : Add this class to make any element invisible. Note that It will only make the element invisible, It means the element will be there and will take it's space.

### Based on Theme
If you want to expand/collapse any element on dark mode you can use:
- `zust-visible@dark`{.class} : Add this class to make any element visible on dark mode.
- `zust-hidden@dark`{.class} : Add this class to hide any element on dark mode.
- `zust-invisible@dark`{.class} : Add this class to make any element invisible on dark mode.

What if you want your Element to be only visible on Dark Mode? Simply add both `zust-hidden`{.class} and `zust-visible@dark`{.class} classes. Then see the magic. It's good when you want to change page content based on theme, like Pictures.

```html {snippet}
<span class="zust-hidden zust-visible@dark">Hey, Look at me I'm Visible, Thanks to Dark Mode.</span>
```

### Based on Breakpoint
It has support for [Breakpoints](../general/breakpoints).

If you want to show something only on certain breakpoint then add class `zust-visible@`{.class} then the Breakpoint name. In simple word the class name will be like this `{string}(zust-visible@){comment}(breakpoint-name)`.

```html {snippet}
<p class="zust-hidden zust-visible@small">I'm only Visible at Small Breakpoint</p>
```
`zust-hide`{.class} and `zust-invisible`{.class} applies in the same way.

### Display Types
You can also change the display type by adding any of these classes
- `zust-inline`{.class} : Sets the element's display to be inline.
- `zust-block`{.class} : Sets the element's display to be block.
- `zust-flex`{.class} : Sets the element's display to be flex.
- `zust-inline-block`{.class} : Sets the element's display to be inline-block.
- `zust-inline-flex`{.class} : Sets the element's display to be inline-flex.
- `zust-list-item`{.class} : Sets the element's display to be list-item.

### Display types in different breakpoint
Display Type has support for [Breakpoints](../general/breakpoints).

It's class name's structure will be like this `{comment}(display-type){string}(@){comment}(breakpoint-name)`.

Example. If I want to make an element's display type to list-item only in small breakpoint then I will add class `zust-list-item@small`{.class}.

```html {snippet}
<p class="zust-list-item@small">I am a list item only at Small breakpoint.</p>
```
---


## Margin and Padding
For utilities there are margin and padding control. add any of these classes

### Disabling Margin or Padding
- `zust-marginless`{.class} : In applied element, there will be no margin.
- `zust-paddingless`{.class} : In applied element, there will be no padding.

You can also trigger marginless or paddingless in any defined breakpoint, Because it has support for [Breakpoints](../general/breakpoints).

```html {snippet}
<p class="zust-m-4 zust-marginless@until-large">I've 4rem Margin by Default. But I will be marginless until large breakpoint.</p>
```

### Adding Margins
You can also add margin to a element. You have to just add a class and the class's Prefix is `zust-m-`{.class} then the value. The value is limited from 0 to 10, and it uses `rem`{.attr} as unit.

Example. If you add class `zust-m-1`{.class} to an element, the element's margin will be `1rem`{.attr} all sides.

Defining Side in Margin: You can Define Side for margin too. Use any of these prefixes
- `zust-m-t-`{.class} : For adding margin to top side.
- `zust-m-b-`{.class} : For adding margin to bottom side.
- `zust-m-l-`{.class} : For adding margin to left side.
- `zust-m-r-`{.class} : For adding margin to right side.
- `zust-m-x-`{.class} : For adding margin to left and right sides.
- `zust-m-y-`{.class} : For adding margin to top and bottom sides.

Example. If you want to add `2rem`{.attr} margin to top side, you will add class `zust-m-t-2`{.class}.

### Adding Paddings
Adding padding is same as margin just `-m-`{.class} will be replaced with `-p-`{.class}. Though I will cover it again.

Adding padding to a element is Super Easy. You have to just add a class and the class's prefix is `zust-p-`{.class} then the value. The value is limited from 0 to 10, and it uses `rem`{.attr} as unit.

Example. If you add class `zust-p-3`{.class} to an element, the element's margin will be `3rem`{.attr} all sides.

Defining side in padding: You can Define Side for padding too. Use any of these prefixes
- `zust-p-t-`{.class} : For adding padding to top side.
- `zust-p-b-`{.class} : For adding padding to bottom side.
- `zust-p-l-`{.class} : For adding padding to left side.
- `zust-p-r-`{.class} : For adding padding to right side.
- `zust-p-x-`{.class} : For adding padding to left and right sides.
- `zust-p-y-`{.class} : For adding padding to top and bottom sides.

Example. If You want to add `1rem`{.attr} padding to left side, you will add class `zust-p-l-1`{.class}.

---


## Float
Change Float just by adding class. `zust-left`{.class} for changing float to Left. `zust-right`{.class} for changing float to Right.

You can use class `zust-clearfix`{.class} for clearing floats of an item.

```html {snippet}
<p>Without Clearfix</p>
<div class='zust-bg-light'>
  <p>Clearfix clears floats of an element, floats are designed for paragraphs to control image.</p>
  <img class='zust-right' src='/resources/zusty.svg' width='80px'>
</div>
<p>As you can see the image is going out of its container.</p>
<br><br>

<p>With Clearfix</p>
<div class='zust-clearfix zust-bg-light'>
  <p>Clearfix clears floats of an element, floats are designed for paragraphs to control image.</p>
  <img class='zust-right' src='/resources/zusty.svg' width='80px'>
</div>
<p>Now it takes space from its container</p>
```
---


## Flexbox
Classes for working with flexbox.

If you want to learn more about Flexbox then [Read This](https://github.com/samanthaming/Flexbox30/blob/master/README.md){rel=noopener}.

To Justify
- `zust-justify-start`{.class}: justify-content to flex-start.
- `zust-justify-center`{.class}: justify-content to center.
- `zust-justify-end`{.class}: justify-content to flex-end.
- `zust-justify-around`{.class}: justify-content to space-around.
- `zust-justify-between`{.class}: justify-content to space-between.
- `zust-justify-evenly`{.class}: justify-content to space-evenly.

To Align
- `zust-align-start`{.class}: align-items to flex-start.
- `zust-align-center`{.class}: align-items to center.
- `zust-align-end`{.class}: align-items to flex-end.
- `zust-align-stretch`{.class}: align-items to stretch.
- `zust-align-baseline`{.class}: align-items to baseline.

Wraps
- `zust-nowrap`{.class}: flex-wrap to nowrap.
- `zust-wrap`{.class}: flex-wrap to wrap.
- `zust-wrap-reverse`{.class}: flex-wrap to wrap-reverse.

---


## Flip
Flip Any Element. Useful for Flipping Images and Icons.
- `zust-flip-horizontal`{.class} or `zust-flip-x`{.class} : Add this class to flip any element Horizontaly or by X-Axis.
- `zust-flip-vertical`{.class} or `zust-flip-y`{.class} : Add this class to flip any element Verticaly or by Y-Axis.

---


## Rotate
Rotate anything to predefined values. The values are 15, -15, 30, -30, 45, -45, 60, -60, 90, -90, 120, -120, 180, -180

Use them just by adding class `zust-rotate-`{.class} and then the value.

Example 1 - If you want to rotate something to 120 Deg, just add class `zust-rotate-120`{.class}. The element will be rotated 120 Deg.

Example 2 - If you want to rotate something to -90 Deg, just add class `zust-rotate--90`{.class}. The element will be rotated -90 Deg.

---


## Shape
There are several class which can help you Change Shape
- `zust-fullwidth`{.class} : Sets the element's width fill the rest of it's parent's width. It has support for [Breakpoints](../general/breakpoints).
- `zust-fullheight`{.class} : Sets the element's height fill the rest of it's parent's width. It has support for [Breakpoints](../general/breakpoints).
- `zust-rounded`{.class} : Sets the element's corner radius to full.
- `zust-semi-rounded`{.class} : Sets the element's corner radius to 10px, not completely rounded or sharp.
- `zust-radiusless`{.class} or `zust-sharp`{.class} : Sets the element's corner radius to 0, means completely radiusless.

---


## Text
Change Text Style just by using class
- `zust-text-bold`{.class} : Sets the element's text's font-weight to Bold
- `zust-text-normal`{.class} : Sets the element's text's font-weight to Normal
- `zust-text-light`{.class} : Sets the element's text's font-weight to Light
- `zust-text-italic`{.class} : Sets the element's text's style to Italic.
- `zust-text-underline`{.class} : Sets the element's text's style to underlined.
- `zust-text-small`{.class} : Sets the element's text size to Small
- `zust-text-medium`{.class} : Sets the element's text size to Medium
- `zust-text-large`{.class} : Sets the element's text size to Large
- `zust-text-xlarge`{.class} : Sets the element's text size to Extra Large
- `zust-unselectable`{.class} : Sets the text Unselectable.
- `zust-text-uppercase`{.class} : Sets the element's all text to be Uppercased.
- `zust-text-lowercase`{.class} : Sets the element's all text to be Lowercased.
- `zust-text-capitalize`{.class} : Sets the element's all text to be Capitalized, all word's first letter will be in Uppercase.
- `zust-text-smallcaps`{.class} : Sets the element's lowercase letter to small caps.
- `zust-text-justify`{.class} : Sets the element's text align to justify.
- `zust-text-no-wrap`{.class} or `zust-text-nowrap`{.class} : Sets the element's text's wrap to none or no-wrap.
- `zust-text-truncate`{.class} : Sets the element's text overflow to Ellipsis.
- `zust-text-family-inherit`{.class} : Sets the element's text font-family to inherit.
- `zust-text-size-inherit`{.class} : Sets the element's text font-size to inherit.
- `zust-text-no-decoration`{.class} : Sets the element's text decoration to none.
- `zust-text-breakable`{.class} : Sets the element's word wrap to be breakable.

```html {snippet}
<p class="zust-text-bold">Bold Text</p><b class="zust-text-normal">Normal Text</b>
<p class="zust-text-light">Light Text</p>
<p class="zust-text-italic">Italic Text</p>
<p class="zust-text-underline">Underlined Text</p>
<p class="zust-text-small">Small Text</p>
<p class="zust-text-medium">Medium Text</p>
<p class="zust-text-large">Large Text</p>
<p class="zust-text-xlarge">xLarge Text</p>
<p class="zust-text-unselectable">Unselectable Text</p>
<p class="zust-text-uppercase">UpPeRcAsE TeXt</p>
<p class="zust-text-lowercase">LoWeRcAsE TeXt</p>
<p class="zust-text-capitalize">capitalize text</p>
<p class="zust-text-justify">Justified Text. Justified texts make blank spaces to fill out the blank space. As you can see this text, this is also Justified. Resize window to see Effect.</p>
<p class="zust-text-no-wrap">No Wrap Texts do not respect it's container they will not break when necessary, they will keep going, going long.......... They are like ME (#_#-).</p>
<p class="zust-text-truncate">Truncate texts make ellipsis when there are no place available for them to stay.</p>
<p class="zust-text-family-inherit">Font Family Inherit</p>
<p class="zust-text-size-inherit">Font size Inherit</p>
<u class="zust-text-no-decoration">Text with No Decoration</u>
<p class="zust-text-breakable">Text with ability to break each letter. Some useless text necessary, so here it is useless text, ta da, Resize the window :D</p>
```

### Text Sizes
There are 10 Sizes that you can use to handle text size. Size numbers are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

To use it add class `{string}(zust-text@){comment}(size-number)`.

You can also use [Breakpoints](../general/breakpoints) with this.

### Superpowered
- `zust-text-centered`{.class} or `zust-text-center`{.class} : Sets the element's text alignment to Center. It can also be applied to any Parent Element, if applied to any Parent Element, the Parent Element's all Child will be Horizontaly centered.
- `zust-rtl`{.class} or `zust-text-rtl`{.class} or `zust-right-to-left`{.class} or `zust-text-right-to-left`{.class} : Sets the element's text alignment to Right. It can also be applied to any Parent Element, if applied to any Parent Element, the Parent Element's all Child will be Right Aligned.
- `zust-ltr`{.class} or `zust-text-ltr`{.class} or `zust-left-to-right`{.class} or `zust-text-left-to-right`{.class} : Sets the element's text alignment to Left. It can also be applied to any Parent Element, if applied to any Parent Element, the Parent Element's all Child will be Right Aligned.

---


## Colors
Change background or text color to some predefined colors.

General Colors are
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

It also includes `inverted` color, which alternates Background or Text color to dark and light. If you use this color to any element, in light theme the element's color will be dark-grey and in dark theme it will be whitesmoke.

<div class="color-block zust-bg-inverted">inverted</div>


### Background Color
You can set any element's Background Color just by adding a class. To set any element's background color, add class `zust-bg-`{.class} then the color name.

Example. If You want to set any element's Background Color to Pink, just add class `zust-bg-pink`{.class}.

If you want to set different Background Color in Dark Theme, add class `zust-bg-{comment}(color-name)@dark`{.string}.

Example. If you want to  set any element's background color to green in Dark Theme, add class `zust-dark-bg-green`{.class}.

```html {snippet}
<button class="zust-btn zust-custom zust-bg-pink zust-bg-green@dark">I am a Chameleon</button>
hidCode{{<p>Change the theme!</p>}}
```

Extra colors which are only available for Background Color are -
- `light`{.string} : Use this color to any element to make the element's background color to a lighter color than it's parent's background color.
- `default`{.string} : Use this color to any element to  make the element's background color to default to it's theme.

### Text Color
You can set any element's Text Color just by adding a class. To set any element's text color, add class `zust-text-`{.class} then the color name

Example. If You want to set any element's background color to red, just add class `zust-text-red`{.class}.

If you want to set different Text Color in Dark Theme, add class `zust-text-{comment}(color-name)@dark`{.string}.

Example. If you want to  set any element's text color to teal in Dark Theme, add class `zust-text-teal@dark`{.class}.

```html {snippet}
<p class="zust-text-red zust-text-teal@dark">This is a text</p>
```

### Text Power
- `pow-primary` : Use this color to any element to make the element's text color to Strongest/Powered Text Color.
- `pow-secondary` : Use this color to any element to make the element's text color to Second Strongest/Powered Text Color.
- `pow-tertiary` : Use this color to any element to make the element's text color to Third Strongest/Powered Text Color.

```html {snippet}
<p class="zust-text-pow-primary">Primary Text Color. You can See this Text's Color looks Completely Strong, More Powerful than Any Other Texts. This Text Color Apllies to Header Elements.</p>
<p class="zust-text-pow-secondary">Secondary Text Color. This Text's Color is not as Much Powerful as Primary Text Color, But it is Powerful than Tertiary Text Color. Weaker than Primary Text Color But Stronger than Teriary Text Color. This Text Color Apllies to Every Child Elements of Body.</p>
<p class="zust-text-pow-tertiary">Tertiary Text Color. As You can Notice This Text's Color is Weaker Than Any Other Text Color. I want more text or the demo will not be that much good, so I tried to Write more text. as You can see this is My Text. Yay!</p>
hidCode{{<p>NOTE: Text Sizes are just for demonstration</p>}}
```
---


## State
You can toogle any element's state by adding class `zust-hovered`{.class}, `zust-focused`{.class} and `zust-active`{.class}. It's good for debugging and/or toggling states using JavaScript.

```html {snippet}
<button class="zust-btn zust-success{{statetxt class=string:}}" hidCode{{id="stateButton"}}>I'm being Tested</button>
```
<p class="zust-form-el"><input class="zust-input" id="stateInput" type="text" placeholder="Type Class and Click Add"></p>
<button class="zust-btn" onclick="addState()">Add</button>

---


## Static
You can make any item static or unresponsive by adding class `zust-static`{.class}.

```html {snippet}
<button class="zust-btn zust-link">I'm Responsive :]</button>
<button class="zust-btn zust-link zust-static">I'm Unresponsive :[</button>
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
  var input = document.querySelector('#stateInput'),
      testButton = document.querySelector('#stateButton'),
      code = document.querySelector('[statetxt]');

  window.addState = () => {
    testButton.className = 'zust-btn zust-success ' + input.value;
    code.innerHTML = input.value.trim() === '' ? '' : ' ' + input.value;
  }
})
</script>
