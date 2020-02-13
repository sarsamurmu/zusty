---
title: Variables
extraHead: <link rel='stylesheet' href='/stylesheets/custom-theme.css'>
---

# Variables
There are lots of customizable variables in Zusty to use with SCSS pack. To use them just include them in your SCSS file before importing Zusty.

---


## Color variables
Zusty uses both SCSS variables and CSS variables for best customization.

For example. The SCSS variables are like this
```scss {nocopy}
$primary-color: hsl(162, 100%, 36%);
$primary-color-dark: lighten($primary-color, 4%);

$success-color: #70c51c;
$success-color-dark: lighten($success-color, 0%);
```
and this gets converted to CSS like this
```css {nocopy}
/* This is for light theme */
:root, [zust-theme="light"] {
  --primary-color: #00b881;
  --success-color: #70c51c;
}

/* This is for dark theme */
[zust-theme="dark"] {
  --primary-color: #00cc8f;
  --success-color: #70c51c;
}
```
and in Zusty CSS, if any item needs primary color, it will be used like this
```css {nocopy}
.my-item {
  background-color: var(--primary-color);
}
```
By using colors in this way, it's easy to change colors based on theme.

So, here are all override-able color variables. The given value is their default value.

```scss
// --------------
//  Theme Colors
// --------------

$primary-color: hsl(162, 100%, 36%);
$primary-color-dark: lighten($primary-color, 4%);
$primary-text-color: textForBg($primary-color);
$primary-text-color-dark: $text-dark;
$primary-hovered-color: darken($primary-color, 3%);
$primary-hovered-color-dark: darken($primary-color-dark, 3%);
$primary-color-light: transparentize($primary-color, 0.7);
$primary-color-light-dark: transparentize($primary-color-dark, 0.7);

$success-color: #70c51c;
$success-color-dark: lighten($success-color, 0%);
$success-text-color: textForBg($success-color);
$success-text-color-dark: $text-dark;
$success-hovered-color: darken($success-color, 3%);
$success-hovered-color-dark: darken($success-color-dark, 3%);
$success-color-light: transparentize($success-color, 0.7);
$success-color-light-dark: transparentize($success-color-dark, 0.7);

$warning-color: hsl(45, 100%, 51%);
$warning-color-dark: lighten($warning-color, 4%);
$warning-text-color: textForBg($warning-color);
$warning-text-color-dark: $text-dark;
$warning-hovered-color: darken($warning-color, 3%);
$warning-hovered-color-dark: darken($warning-color-dark, 8%);
$warning-color-light: transparentize($warning-color, 0.7);
$warning-color-light-dark: transparentize($warning-color-dark, 0.7);

$error-color: #FF6348;
$error-color-dark: lighten($error-color, 6%);
$error-text-color: textForBg($error-color);
$error-text-color-dark: $text-dark;
$error-hovered-color: darken($error-color, 6%);
$error-hovered-color-dark: darken($error-color-dark, 5%);
$error-color-light: transparentize($error-color, 0.7);
$error-color-light-dark: transparentize($error-color-dark, 0.7);

$link-color: hsl(210, 100%, 50%);
$link-color-dark: lighten($link-color, 18%);
$link-text-color: textForBg($link-color);
$link-text-color-dark: $text-dark;
$link-hovered-color: darken($link-color, 4%);
$link-hovered-color-dark: darken($link-color-dark, 5%);
$link-color-light: transparentize($link-color, 0.7);
$link-color-light-dark: transparentize($link-color-dark, 0.7);

// Base
$text-color-primary: hsl(0, 0%, 25%);
$text-color-primary-dark: hsl(0, 0%, 100%);
$text-color-secondary: hsl(0, 0%, 35%);
$text-color-secondary-dark: hsl(0, 0%, 85%);
$text-color-tertiary: hsl(0, 0%, 45%);
$text-color-tertiary-dark: hsl(0, 0%, 75%);
$body-bg-color: hsl(0, 0%, 100%);
$body-bg-color-dark: hsl(0, 0%, 13%);
$body-text-color: $text-color-secondary;
$body-text-color-dark: $text-color-secondary-dark;
$blockquote-line-color: hsl(0, 0%, 85%);
$blockquote-line-color-dark: hsl(0, 0%, 35%);
$divider-color: hsl(0, 0%, 90%);
$divider-color-dark: hsl(0, 0%, 30%);
$dimmer-bg-color: hsla(0, 0%, 0%, 0.6);
$dimmer-bg-color-dark: $dimmer-bg-color;
$light-color: rgba(144, 144, 144, 0.1);
$light-color-dark: rgba(144, 144, 144, 0.1);
$text-color-inverted: #FFFFFF;
$text-color-inverted-dark: #484848;
$bg-color-inverted: hsl(0, 0%, 13%);
$bg-color-inverted-dark: whitesmoke;
// Item Disabled
$item-disabled-bg-color: hsl(0, 0%, 93%);
$item-disabled-bg-color-dark: hsl(0, 0%, 20%);
$item-disabled-fg-color: hsl(0, 0%, 82%);
$item-disabled-fg-color-dark: hsl(0, 0%, 30%);

// --------------
//    Elements
// --------------

// Button
$button-bg-color: hsl(0, 0%, 100%);
$button-bg-color-dark: hsl(0, 0%, 15%);
$button-border-color: hsl(0, 0%, 90%);
$button-border-color-dark: hsl(0, 0%, 28%);
$button-hovered-border-color: hsl(0, 0%, 84%);
$button-hovered-border-color-dark: hsl(0, 0%, 35%);
$button-text-color: hsl(0, 0%, 40%);
$button-text-color-dark: hsl(0, 0%, 85%);
$button-focus-border-color: hsla(291, 64%, 42%, 0.14);
$button-focus-border-color-dark: hsla(291, 47%, 51%, 0.45);
$button-shadow-color: hsla(0, 0%, 84%, 0.87);
$button-shadow-color-dark: hsla(0, 0%, 30%, 0.87);

// Chip
$chip-bg-color: hsl(0, 0%, 97%);
$chip-bg-color-dark: hsl(0, 0%, 17%);

// Note Block
$note-block-bg-color: $light-color;
$note-block-bg-color-dark: $light-color-dark;
$note-block-line-color: $primary-color;
$note-block-line-color-dark: $primary-color-dark;

// Table
$table-border-color: hsl(0, 0%, 90%);
$table-border-color-dark: hsl(0, 0%, 25%);
$table-bg-color: hsl(0, 0%, 97%);
$table-bg-color-dark: hsl(0, 0%, 17%);
$table-hovered-bg-color: $table-border-color;
$table-hovered-bg-color-dark: $table-border-color-dark;
$table-header-bg-color: $body-bg-color;
$table-header-bg-color-dark: $body-bg-color-dark;
$table-header-text-color: $body-text-color;
$table-header-text-color-dark: $body-text-color-dark;
$table-footer-bg-color: $body-bg-color;
$table-footer-bg-color-dark: $body-bg-color-dark;
$table-footer-text-color: $body-text-color;
$table-footer-text-color-dark: $body-text-color-dark;

// Tooltip
$tooltip-bg-color: #FFF;
$tooltip-bg-color-dark: hsl(0, 0%, 26%);
$tooltip-text-color: $text-color-secondary;
$tooltip-text-color-dark: $text-color-secondary-dark;

// --------------
//     Form
// --------------

// Checkbox
$checkbox-border-color: hsl(0, 0%, 70%);
$checkbox-border-color-dark: hsl(0, 0%, 50%);
$checkbox-checked-border-color: $primary-color;
$checkbox-checked-border-color-dark: $primary-color-dark;
$checkbox-checkmark-color: $primary-text-color;
$checkbox-checkmark-color-dark: $primary-text-color-dark;
$checkbox-border-spread-color: $primary-color-light;
$checkbox-border-spread-color-dark: $primary-color-light-dark;

// Input
$input-bg-color: hsl(0, 0%, 97%);
$input-bg-color-dark: hsl(0, 0%, 10%);
$input-hovered-bg-color: hsl(0, 0%, 93%);
$input-hovered-bg-color-dark: hsl(0, 0%, 7%);
$input-text-color: hsl(0, 0%, 35%);
$input-text-color-dark: hsl(0, 0%, 85%);
$input-border-spread-color: hsl(187, 100%, 70%);
$input-border-spread-color-dark: hsl(187, 100%, 42%);
$input-placeholder-text-color: hsl(0, 0%, 46%);
$input-placeholder-text-color-dark: hsl(0, 0%, 46%);
// Input Append
$input-append-bg-color: hsl(0, 0%, 88%);
$input-append-bg-color-dark: hsl(0, 0%, 25%);
$input-append-fg-color: hsl(0, 0%, 50%);
$input-append-fg-color-dark: hsl(0, 0%, 70%);

// Radio
$radio-border-color: hsl(0, 0%, 70%);
$radio-border-color-dark: hsl(0, 0%, 50%);
$radio-selected-color: $primary-color;
$radio-selected-color-dark: $radio-selected-color;
$radio-border-spread-color: $primary-color-light;
$radio-border-spread-color-dark: $primary-color-light-dark;

// Slider/Range
$range-bg-color: hsl(0, 0%, 93%);
$range-bg-color-dark: hsl(0, 0%, 18%);

// Switch
$switch-fg-color: hsl(0, 0%, 85%);
$switch-fg-color-dark: hsl(0, 0%, 70%);
$switch-active-fg-color: #FFF;
$switch-active-fg-color-dark: $switch-active-fg-color;
$switch-bg-color: hsl(0, 0%, 100%);
$switch-bg-color-dark: hsl(0, 0%, 20%);
$switch-active-bg-color: $primary-color;
$switch-active-bg-color-dark: $switch-active-bg-color;
$switch-border-color: hsl(0, 0%, 90%);
$switch-border-color-dark: hsl(0, 0%, 30%);
$switch-active-border-color: transparentize($switch-active-bg-color, 0.6);
$switch-active-border-color-dark: $switch-active-border-color;
$switch-border-spread-color: transparentize($switch-active-bg-color, 0.3);
$switch-border-spread-color-dark: $switch-border-spread-color;

// Select
$select-bg-color: $input-bg-color;
$select-bg-color-dark: $input-bg-color-dark;
$select-hovered-bg-color: $input-hovered-bg-color;
$select-hovered-bg-color-dark: $input-hovered-bg-color-dark;
$select-text-color: $input-text-color;
$select-text-color-dark: $input-text-color-dark;
$select-border-spread-color: $input-border-spread-color;
$select-border-spread-color-dark: $input-border-spread-color-dark;

// Textarea
$textarea-bg-color: $input-bg-color;
$textarea-bg-color-dark: $input-bg-color-dark;
$textarea-hovered-bg-color: $input-hovered-bg-color;
$textarea-hovered-bg-color-dark: $input-hovered-bg-color-dark;
$textarea-text-color: $input-text-color;
$textarea-text-color-dark: $input-text-color-dark;
$textarea-border-spread-color: $input-border-spread-color;
$textarea-border-spread-color-dark: $input-border-spread-color-dark;

// --------------
//   Components
// --------------

// Badge
$badge-only-part-bg-color: $primary-color;
$badge-only-part-bg-color-dark: $primary-color-dark;
$badge-only-part-text-color: $primary-text-color;
$badge-only-part-text-color-dark: $primary-text-color-dark;
$badge-first-part-bg-color: rgba(144, 144, 144, 0.1);
$badge-first-part-bg-color-dark: $badge-first-part-bg-color;
$badge-first-part-text-color: $text-color-primary;
$badge-first-part-text-color-dark: $text-color-primary-dark;
$badge-last-part-bg-color: $badge-only-part-bg-color;
$badge-last-part-bg-color-dark: $badge-only-part-bg-color-dark;
$badge-last-part-text-color: $badge-only-part-text-color;
$badge-last-part-text-color-dark: $badge-only-part-text-color-dark;

// Breadcrumb
$breadcrumb-separator-color: hsl(0, 0%, 75%);
$breadcrumb-separator-color-dark: hsl(0, 0%, 55%);
$breadcrumb-item-color: $link-color;
$breadcrumb-item-color-dark: $link-color-dark;
$breadcrumb-item-hovered-color: $link-hovered-color;
$breadcrumb-item-hovered-color-dark: $link-hovered-color-dark;
$breadcrumb-item-active-color: $text-color-secondary;
$breadcrumb-item-active-color-dark: $text-color-secondary-dark;

// Cards
$card-bg-color: hsl(0, 0%, 100%);
$card-bg-color-dark: hsl(0, 0%, 17%);
$card-border-color: hsl(0, 0%, 88%);
$card-border-color-dark: hsl(0, 0%, 42%);

// Dialog
$modal-bg-color: hsl(0, 0%, 100%);
$modal-bg-color-dark: hsl(0, 0%, 26%);

// Dropdown
$dropdown-bg-color: hsl(0, 0%, 100%);
$dropdown-bg-color-dark: hsl(0, 0%, 17%);
$dropdown-border-color: hsl(0, 0%, 88%);
$dropdown-border-color-dark: hsl(0, 0%, 42%);
$dropdown-text-color: hsl(0, 0%, 26%);
$dropdown-text-color-dark: hsl(0, 0%, 88%);
$dropdown-option-hovered-color: hsl(0, 0%, 93%);
$dropdown-option-hovered-color-dark: hsl(0, 0%, 28%);
$dropdown-active-item-bg-color: $primary-color;
$dropdown-active-item-bg-color-dark: $primary-color-dark;
$dropdown-active-item-text-color: $primary-text-color;
$dropdown-active-item-text-color-dark: $primary-text-color-dark;

// Navbar
$navbar-bg-color: #FFF;
$navbar-bg-color-dark: hsl(0, 0%, 16%);
$navbar-shadow-color: hsla(0, 0%, 0%, 0.05);
$navbar-shadow-color-dark: hsla(0, 0%, 0%, 0.12);
$navbar-selected-item-color: $primary-color;
$navbar-selected-item-color-dark: $primary-color-dark;
$navbar-selected-item-bg-color: $primary-color;
$navbar-selected-item-bg-color-dark: $primary-color-dark;
$navbar-selected-item-text-color: $primary-text-color;
$navbar-selected-item-text-color-dark: $primary-text-color-dark;

// Pagination
$pagination-item-bg-color: $button-bg-color;
$pagination-item-bg-color-dark: $button-bg-color-dark;
$pagination-item-text-color: $button-text-color;
$pagination-item-text-color-dark: $button-text-color-dark;
$pagination-item-border-color: $button-border-color;
$pagination-item-border-color-dark: $button-border-color-dark;
$pagination-item-hovered-border-color: $button-hovered-border-color;
$pagination-item-hovered-border-color-dark: $button-hovered-border-color-dark;
$pagination-item-active-bg-color: $primary-color;
$pagination-item-active-bg-color-dark: $primary-color-dark;
$pagination-item-active-text-color: $primary-text-color;
$pagination-item-active-text-color-dark: $primary-text-color-dark;
$pagination-item-active-border-color: $transparent;
$pagination-item-active-border-color-dark: $transparent;

// Placeholder
$placeholder-color: transparentize($body-bg-color, 0.5);
$placeholder-color-dark: transparentize($body-bg-color-dark, 0.5);
$placeholder-holder-color: rgba(144, 144, 144, 0.2);
$placeholder-holder-color-dark: rgba(144, 144, 144, 0.2);

// Progress Bar
$progress-back-bg-color: hsl(0, 0%, 93%);
$progress-back-bg-color-dark: hsl(0, 0%, 18%);
$progress-back-text-color: $text-color-secondary;
$progress-back-text-color-dark: $text-color-secondary-dark;
$progress-bar-bg-color: $primary-color;
$progress-bar-bg-color-dark: $primary-color-dark;
$progress-bar-text-color: $primary-text-color;
$progress-bar-text-color-dark: $primary-text-color-dark;
$progress-bar-stripe-color: rgba(255, 255, 255, 0.15);
$progress-bar-stripe-color-dark: rgba(0, 0, 0, 0.08);

// Tabs
$tab-border-color: rgba(144, 144, 144, 0.2);
$tab-border-color-dark: $tab-border-color;
$tab-selected-item-color: $primary-color;
$tab-selected-item-color-dark: $primary-color-dark;
$tab-selected-item-text-color: $primary-text-color;
$tab-selected-item-text-color-dark: $primary-text-color-dark;
```
As you can see, simply use suffix `-dark`{.tag} for color in dark theme.

---


### What `textForBg()`{.attr} is?
If you're wondering what `textForBg()`{.attr} is then `textForBg()`{.attr} is one of Zusty's SCSS functions, it takes the color given and checks its luminance and returns dark text or white text color based on given color. It automates the process of choosing color for a background.

---


## Theme Colors
Most elements which have color variations, also includes theme colors.

Default theme colors are -
- primary
- success
- warning
- error
- link

You can also add extra theme color using SCSS List Function.

What If you want to add a theme color named `aquatic`{.attr} ? Here's the example -
```scss
// Arrange items in this pattern -
// name, color, text-color, hovered-color, light-color

$custom-colors: (
  ('aquatic', #02e5b8, #353535, #00cea5, hsla(168, 98%, 45%, 0.3)),
  ()
);

// Don't forget to add a blank () at last of custom-colors list if you've single item
```

Generated theme color's name will be `aquatic`.

It's background color will be `#02e5b8`{.attr}

It's text color will be `#353535`{.attr}

When the item is hovered it's color will be `#00cea5`{.attr}

Light color is a semi-transparent color which used by buttons and few other.

Here the light color is `hsla(168, 98%, 45%, 0.3)`{.attr}

Then if you compile the SCSS file, you can use that theme-color wherever color variations are supported.
```html {snippet nocopy nolaunch}
<button class="zust-btn zust-aquatic">Button</button><br>
<button class="zust-btn" zust-tooltip="Tooltip with Custom Theme" zust-tooltip-type="aquatic">Tooltip</button><br><br>
<p class="zust-form-el">
  <input class="zust-input zust-aquatic" type="text" value="Isn't it Awesome ?">
</p>
<div class="zust-progress zust-aquatic zust-m-x-0">
  <div class="zust-bar zust-striped zust-in-progress" value="50"></div>
</div>
```

If you want to add more theme colors. You can do so. Here we are adding an extra theme name `blurple`{.attr}
```scss
// Arrange items in this pattern -
// name, color, text-color, hovered-color, light-color

$custom-colors: (
  ('aquatic', #02e5b8, #353535, #00cea5, hsla(168, 98%, 45%, 0.3)),
  ('blurple', #7289da, #FFF, #6480e4, hsla(227, 58%, 65%, 0.3))
);

// Don't forget to add a blank () at last of custom-colors list if you've single item
```

```html {snippet nocopy nolaunch}
<button class="zust-btn zust-blurple">Button</button><br>
<button class="zust-btn" zust-tooltip="Tooltip with Custom Theme" zust-tooltip-type="blurple">Tooltip</button><br><br>
<p class="zust-form-el">
  <input class="zust-input zust-blurple" type="text" value="Isn't it Awesome ?">
</p>
<div class="zust-progress zust-blurple zust-m-x-0">
  <div class="zust-bar zust-striped zust-in-progress" value="50"></div>
</div>
```

---


## Property variables
So, you've learned about color variables, theme colors. Now you will learn about property variables.

Property variables are variables which contains CSS property's values. Editing them can change appearance of an element or of an component. Let's see which property variables are override-able. Note that, the given value is their default value.

```scss
// --------------
//    General
// --------------

// Prefix used for all Zusty's selectors
$prefix: 'zust-';

// Separator used for Conditions
$condition-separator: '\\@';

// Screen breakpoint sizes as of Chrome Dev Tools
$medium-breakpoint: 768px;
$large-breakpoint: 1024px;

// Font sizes
$xlarge-text: 2.2rem;
$large-text: 1.6rem;
$medium-text: 1rem;
$small-text: 0.8rem;

// z-indexes
$dropdown-z-index: 5;
$modal-z-index: 20;
$tooltip-z-index: 1;
$navbar-z-index: 4;

// Transition
$primary-transition: 0.2s;


// --------------
//    Elements
// --------------

// Body
$body-font-size: $medium-text;
$body-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

// Anchor
$anchor-border-width: 2px;

// Button
$button-margin: 0px 8px 8px 0px;
$button-border-radius: 6px;
$button-border-width: 2px;
$button-border-spread: 4px;
$button-outlined-border-width: 2px;

// Chip
$chip-border-radius: 1000px;
$chip-margin: 0 8px 8px 0;

// Icon
$icon-size-small: 0.8rem;
$icon-size-default: 1.2rem;
$icon-size-large: 1.6rem;
$icon-size-xlarge: 2rem;

// Note Block
$note-block-border-radius: 10px;
$note-block-margin: 20px 0;
$note-block-padding: 3px 18px;
$note-block-line-width: 4px;

// Progress Bar
$progress-bar-border-radius: 6px;

// Table
$table-cell-border-width: 2px;
$table-cell-padding: 5px 10px;

// Tooltip
$tooltip-margin: 10px;
$tooltip-translate: 20px;
$tooltip-font-size: 12px;
$tooltip-border-radius: 8px;
$tooltip-padding: 5px 10px;
$tooltip-shadow: 0 0 5px 0px hsla(0, 0%, 0%, 0.08);



// --------------
//   Container
// --------------

$container-margin: 5px;
$container-padding: 0px;
$container-column-margin: 10px;
$container-column-padding: 5px;



// --------------
//      Form
// --------------
$form-label-margin: 5px;
$form-label-font-size: $medium-text;
$form-help-margin: 5px;
$form-help-font-size: $small-text;

// Checkbox
$checkbox-margin: 0 0 6px 6px;
$checkbox-border-width: 2px;
$checkbox-border-radius: 8px;
$checkbox-padding: 10px;
$checkbox-label-margin: 8px;

// Input
$input-margin: 4px;
$input-border-radius: 8px;
$input-border-spread: 2px;

// Radio
$radio-margin: 0 0 6px 6px;
$radio-border-width: 2px;
$radio-border-radius: 100px;
$radio-padding: 10px;
$radio-label-margin: 8px;

// Range
$range-height: 5px;
$range-border-radius: 9999px;
$range-thumb-height: 18px;
$range-thumb-width: $range-thumb-height;
$range-thumb-border-radius: 6px;

// Select
$select-border-radius: $input-border-radius;
$select-border-spread: $input-border-spread;

// Switch
$switch-border-width: 2px;
$switch-border-radius: 100px;
$switch-margin: 0 0 8px 8px;
$switch-label-margin: 8px;

// Textarea
$textarea-border-radius: $input-border-radius;
$textarea-border-spread: $input-border-spread;



// --------------
//   Components
// --------------

// Badge
$badge-border-radius: 6px;
$badge-font-size: 0.8em;

// Breadcrumb
$breadcrumb-font-size: $medium-text;

// Cards
$card-border-radius: 10px;
$card-padding: 10px 20px;
$card-margin: 10px;
$card-max-width: 200px;
$card-min-width: 180px;
$card-box-shadow: 0 0 10px 0px hsla(0, 0%, 0%, 0.1);
$card-border-width: 2px;
$card-landscape-max-width: 350px;
$card-landscape-min-width: 260px;
$card-hover-translate: -8px;
$card-hovered-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);

// Dropdown
$dropdown-margin: 12px;
$dropdown-child-margin: 12px;
$dropdown-translate: 10px;
$dropdown-shadow: 0 3px 12px rgba(27, 31, 35, 0.04);
$dropdown-border-radius: 8px;
$dropdown-item-border-radius: 6px;
$dropdown-padding: 4px;
$dropdown-child-padding: 4px;
$dropdown-item-padding: 10px;
$dropdown-item-margin: 0px;

// Modal
$modal-border-radius: 14px;
$modal-transition: 0.3s;

// Navbar
$navbar-height: 60px;
$navbar-shadow: 0px 3px 3px var(--navbar-shadow-color);
$navbar-border-bottom-width: 2px;

// Pagination
$pagination-item-margin: 5px 10px;
$pagination-item-padding: 8px 12px;
$pagination-item-border-width: 2px;
$pagination-item-border-radius: 8px;

// Tabs
$tab-top-border-radius: 4px;
$tab-border-bottom-width: 2px;
```

---


## Extending breakpoints
Like theme colors, you can also make your own breakpoints. We will be using SCSS list function.

What if you want to make an breakpoint named `4k`{.attr}, with min-width of `2560px`{.attr}

```scss
// Arrange in this order -
// name, min-width, max-width

// If min-width or max-width don't exist then you can replace them with null

$custom-breakpoints: (
  ('4k', 2560px, null),
  ()
);

// Don't forget to add a blank () at last of custom-breakpoints list if you've single item
```

You can add more if you want to

```scss
// Arrange in this order -
// name, min-width, max-width

// If min-width or max-width don't exist then you can replace them with null

$custom-breakpoints: (
  ('4k', 2560px, null),
  ('uniqueDevice', 100px, 600px)
);

// Don't forget to add a blank () at last of custom-breakpoints list if you've single item
```

After compiling the SCSS you can use it wherever [Breakpoints](../general/breakpoints) are supported.
