---
title: Tooltip
---

# Tooltip
Better tooltip for better UX.

---


## Structure
```html {snippet}
<button class="zust-btn" zust-tooltip="A compact tooltip">Tooltip</button>
```
---


## Usage
You can use this tooltip simply by adding attribute `zust-tooltip`{.attr} and setting this attribute's value to tooltip text. This works in almost every elements.

---


## Positions
To set position of tooltip add attribute `{attr}(zust-tooltip-position)="{comment}(position)"`.

The positions are `top`{.class}, `bottom`{.class}, `left`{.class}, `right`{.class}, `top-left`{.class}, `top-right`{.class}, `bottom-left`{.class}, `bottom-right`{.class}.

```html {snippet}
<button class="zust-btn" zust-tooltip="Is this a Tooltip? (O_o)" zust-tooltip-position="top">Tooltip</button>
```
---


## Colors
You can set tooltip color to any of theme color. Add attribute `{attr}(zust-tooltip-type)="{comment}(theme-color-name)"`.

```html {snippet}
<button class="zust-btn" zust-tooltip="You're successful in making tooltip" zust-tooltip-type="success" zust-tooltip-position="bottom-left">Success Tooltip</button>
```
---


## Custom activation
You can activate the tooltip by adding class `zust-tooltip-active`{.class}.

---


## Visibility based on breakpoint
You can set visibility tooltip based on breakpoint, Your tooltip will be only visible on that breakpoint. For this add attribute `{attr}(zust-tooltip-visibility)="{comment}(breakpoint-name)"`. Get breakpoint names from [Here](../general/breakpoints).

```html {snippet}
<button class="zust-btn" zust-tooltip-visibility="small" zust-tooltip="So, You're using small device right now? Are you using Web Inspector? Thinking......" zust-tooltip-position="top-left">Small Breakpoint Tooltip 🤔</button>
```
