## v1.2.0
### New
- Dropcap text helper
- Divider
- Placeholder items (lines, paragraph, image etc.)
- Avatar
- Flexbox direction and grow helper
- Snap container
- Nav
### Improvements
- Navbar items' hover color is now different for a11y.
- No need to use `zust-center` in card footer.
- Same height cards.
### Changes
**Variables changed**
|              From                 |                  To                |
|-----------------------------------|------------------------------------|
| `$button-focus-border-color`      | `$button-border-spread-color`      |
| `$button-focus-border-color-dark` | `$button-border-spread-color-dark` |

**Variables removed**
- `$navbar-height`

**Files renamed**
|                From                |               To             |
|------------------------------------|------------------------------|
| `scss/helpers/color-helper.scss`   | `scss/helpers/color.scss`    |
| `scss/helpers/general-helper.scss` | `scss/helpers/general.scss`  |
| `scss/helpers/text-helper.scss`    | `scss/helpers/text.scss`     |



## v1.1.3
#### New
- Right aligned Navbar

#### Fixes/Improvements
- Card - Now card hovers up on `focus-within`
- Tabs - Improved transition
- Radio - Improved transition
- Dropdown - Minor Improvements
- Whole refactorization of CSS variable usage

## v1.1.2
#### Fixes/Improvements
- Updated Facebook Color.
- Fixed Container Margin.
- Fixed Button's margin on fullwidth.

## v1.1.1
#### Fixes/Improvements
- Critical Bug Fix

## v1.1.0
#### New
- `zust-clearfix` as helper.
- Helpers to deal with Flexbox.
- Added Built-in Icons (Caret, Arrow, Menu, Close).

#### Fixes/Improvements
- Modal

#### Breaking Changes
- Column size modifier format changed. `zust-1-2` changed to `zust-size-1-2`, same change for others.
- Import path changed for importing all.<br>
Before:
```scss
@import 'node_modules/zusty/elements/a';
```
Now:
```scss
@import 'node_modules/zusty/elements/';
```



## v1.0.0
#### New
- Non-Prefixed Variant.
- Lots of Variable.
- Variable `$prefix` to change the prefix.
- Selector for breakpoints, like `zust-hidden@small`.
- The way breakpoint works, New breakpoint names.
- Helpers.
- Theme Colors.
##### Elements
- Spinners
- Ghost, Outlined and Floating Style in Buttons.
- Note-block
##### Form
- Radio
- Checkbox
- Switch
- Transparent Input and Textarea
- Inline Form
##### Components
- Breadcrumb
- Pagination
- Navbar
- Tabs
- Placeholder

#### Fixes/Improvements
- Base Style Improvements.
- Better Table as well as Scrollable Table.
- No longer have to use `zust-icon-btn` in button.
- Better Modal.
- Improved Chip.
- `zust-el-group` can now group dropdown.
- Tooltip now gets active on focus.
- Added Function to generate text color for a background-color.
- Added text color variable for theme-colors.
- Added basic icon to use with Select.

#### Breaking Changes
- Selector names, Breakpoint name, and format are changed. Here are a few examples -
```
Breakpoint Names
mobile  ->  small
tablet  ->  medium
touch   ->  until-large
desktop ->  large

Column
zust-all     ->  zust-active@all
zust-mobile  ->  zust-active@small
zust-tablet  ->  zust-active@medium
zust-touch   ->  zust-active@until-large
zust-desktop ->  zust-active@large

Modifier with Breakpoint Control
zust-modifier-breakpoint-name -> zust-modifier@breakpoint-name
Same for others...

Display Control based on Theme
zust-hidden-on-dark -> zust-hidden@dark
Same for others...

Color Control based on Theme
zust-dark-bg-blue     -> zust-bg-blue@dark
zust-dark-text-green  -> zust-text-green@dark
Same for others...
```

#### Doc
- Full Refactorization of Whole Docs.
- Better Performance.
- Small in Size.
- `Open in Codepen` and `Copy to Clipboard` Improvements.
- Better Mobile Support.
- Better and Cleaner Snippets.

## v0.0.1
- Initial Release.
- Made many Elements, Helpers, Components, etc.
