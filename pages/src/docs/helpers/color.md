---
title: Color Helpers
---

# Color Helpers
Color utility classes.

---


## Available Colors
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
