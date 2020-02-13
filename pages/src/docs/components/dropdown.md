---
title: Dropdown
---

# Dropdown
Simple dropdown in easiest way possible with support for nested contents.

---


## Structure

```html {snippet}
<div class="zust-dropdown">
  <button class="zust-btn">
    <span>Open Dropdown</span>
    <span class="zust-icon"><i class="zust-angle-down"></i></span>
  </button>
  <ul class="zust-items">
    <li>Zusty</li>
    <li>Koat</li>
    <li>Items</li>
    <hr divider>
    <li>With More Inside
      <ul>
        <span>Features</span>
        <li>Awesome</li>
        <li>Flexible</li>
        <li>Easy</li>
      </ul>
    </li>
    <li>Demo</li>
  </ul>
</div>
```
---


## Trigger
You can alter the dropdown toggle by adding class `zust-hover`{.class} or `zust-active`{.class}. Use `zust-hover`{.class} to show the dropdown whenever mouse hovers over dropdown or dropdown button.

You can also add `zust-active`{.class} class to trigger the dropdown. It's for those who wants to trigger the dropdown using JavaScript.

```html {snippet}
<div class="zust-dropdown zust-hover">
  <button class="zust-btn">
    <span>Hover Over</span>
    <span class="zust-icon"><i class="zust-angle-down"></i></span>
  </button>
  <ul class="zust-items">
    <li>Look It worked!</li>
  </ul>
</div>
```

::: link For Mobile
If you want your dropdown to be mobile compatible, then `zust-hover`{.class} can make better sense and user experience.
:::
---


## Contents
You can add any type of contents inside of dropdown. Make any item an active item by adding attribute `active`{.attr} or adding class `zust-active`{.class}.

```html {snippet}
<div class="zust-dropdown">
  <button class="zust-btn">
    <span>Open Dropdown</span>
    <span class="zust-icon"><i class="zust-angle-down"></i></span>
  </button>
  <ul class="zust-items zust-text-center">
    <img src="/resources/zusty.svg" width="100px">
    <hr divider>
    <p>Any content.</p>
    <hr divider>
    <p>Just put contents inside of <code hidCode{{ inline class="tag"}}>ul</code>, zusty will do the rest.</p><br>
    <li>More..
      <ul>
        <p>How is it? Do you like it? Go on....</p>
      </ul>
    </li>
    <li active>Links
      <ul>
        <li>Twitter</li>
        <li>Github</li>
        <li>Facebook</li>
        <li>Linked In</li>
        <li class="zust-active">None</li>
      </ul>
    </li>
  </ul>
</div>
```
---


## Opening direction
There are total four opening direction for dropdown, not actually only dropdown, it will be dropup, dropleft and dropright.

These are the classes that you have to add -
- `zust-upside`{.class} : To make the dropdown open up side.
- `zust-leftside`{.class} : To make the dropdown open left side.
- `zust-rightside`{.class} : To make the dropdown open right side.

```html {snippet}
<div class="zust-flex zust-justify-between">
  <div class="zust-dropdown zust-rightside">
    <button class="zust-btn">
      <span>Right!</span>
      <span class="zust-icon"><i class="zust-angle-right"></i></span>
    </button>
    <ul class="zust-items zust-text-center">
      <li>
        Contents Here!
      </li>
    </ul>
  </div>

  <div class="zust-dropdown zust-upside">
    <button class="zust-btn">
      <span>Up!</span>
      <span class="zust-icon"><i class="zust-angle-up"></i></span>
    </button>
    <ul class="zust-items zust-text-center">
      <li>
        Contents Here!
      </li>
    </ul>
  </div>

  <div class="zust-dropdown zust-leftside">
    <button class="zust-btn">
      <span>Left!</span>
      <span class="zust-icon"><i class="zust-angle-left"></i></span>
    </button>
    <ul class="zust-items zust-text-center">
      <li>
        Contents Here!
      </li>
    </ul>
  </div>
</div>
```

### Opening direction of nested dropdowns
You can set the opening direction of nested dropdowns. Just add any of these class to the parent `li`{.tag} element of `ul`{.tag} child/children.

Just add any of these classes, which you need
- `zust-upside`{.class} : To make the nested dropdown open up side.
- `zust-downside`{.class} : To make the nested dropdown open down side.
- `zust-leftside`{.class} : To make the nested dropdown open left side.
- `zust-rightside`{.class} : To make the nested dropdown open right side.

```html {snippet}
<div class="zust-flex zust-justify-center">
  <div class="zust-dropdown">
    <button class="zust-btn"><span class="zust-icon"><i class="zust-angle-down"></i></button>
    <ul class="zust-items">
      <li>Default
        <ul>I want few more sentence. Can You tell me. I will really Appreciate it. See Ya!</ul>
      </li>
      <li class="zust-upside">Upside
        <ul>I want few more sentence. Can You tell me. I will really Appreciate it. See Ya!</ul>
      </li>
      <li class="zust-leftside">Leftside
        <ul>I want few more sentence. Can You tell me. I will really Appreciate it. See Ya!</ul>
      </li>
      <li class="zust-leftside zust-upside">Up-Left-Side
        <ul>I want few more sentence. Can You tell me. I will really Appreciate it. See Ya!</ul>
      </li>
    </ul>
  </div>
</div>
```

It will only make the first nested dropdown open any of these sides.

If you want to change opening direction for all nested dropdown then use
- `zust-nested-upside`{.class} : To make all nested dropdown open up side.
- `zust-nested-downside`{.class} : To make all nested dropdown open down side.
- `zust-nested-leftside`{.class} : To make all nested dropdown open left side.
- `zust-nested-rightside`{.class} : To make all nested dropdown open right side.

---


## Dropdown alignment
You can change the alignment of dropdowns just by adding class. It's only available for default downside and upside.

- `zust-left-aligned`{.class} : For left alignment. This is default.
- `zust-right-aligned`{.class} : For right alignment.
- `zust-center-aligned`{.class} : For center alignment.

```html {snippet}
<div class="zust-flex zust-justify-between">
  <div class="zust-dropdown zust-left-aligned zust-narrow">
    <button class="zust-btn zust-small">
      <span>Left Aligned</span>
      <span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items">
      <li>1</li>
      <li>2</li>
    </ul>
  </div>

  <div class="zust-dropdown zust-center-aligned zust-narrow">
    <button class="zust-btn zust-small">
      <span>Center Aligned</span>
      <span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items">
      <li>1</li>
      <li>2</li>
    </ul>
  </div>

  <div class="zust-dropdown zust-right-aligned zust-narrow">
    <button class="zust-btn zust-small">
      <span>Right Aligned</span>
      <span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items">
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</div>
```
---


## Sizes
::: warning
It might look ugly on small breakpoint. You shouldn't use large dropdowns on small breakpoint.
:::

There are extra four sizes as well. Add any of these classes - `zust-narrow`{.class}, `zust-small`{.class}, `zust-large`{.class}, `zust-xlarge`{.class}.

```html {snippet}
<div class="zust-flex zust-justify-between">
  <div class="zust-dropdown zust-narrow">
    <button class="zust-btn zust-small"><span>Narrow</span><span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items zust-text-center"><b>Size</b>
      <li>1em</li>
      <li>2em</li>
      <li>3em</li>
      <li>4em</li>
    </ul>
  </div>

  <div class="zust-dropdown zust-small">
    <button class="zust-btn zust-small"><span>Small</span><span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items zust-text-center"> <b>Birds</b>
      <li>Hawk</li>
      <li>Pigeon</li>
      <li>Peacock</li>
      <li>Eagle</li>
      <li>Crane</li>
    </ul>
  </div>

  <div class="zust-dropdown">
    <button class="zust-btn zust-small"><span>Normal</span><span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items zust-text-center"> <b>Heroes</b>
      <li>Spiderman</li>
      <li>Nova</li>
      <li>Powerman</li>
      <li>White Tiger</li>
      <li>Iron Fist</li>
    </ul>
  </div>

  <div class="zust-dropdown zust-large">
    <button class="zust-btn zust-small"><span>Large</span><span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items zust-text-center"> <b>Questions</b>
      <li>What is it?</li>
      <li>Why it is Cool?</li>
      <li>Who made it?</li>
      <li>Who ate my food!?</li>
      <li>Where is My Car?</li>
    </ul>
  </div>

  <div class="zust-dropdown zust-xlarge zust-right-aligned">
    <button class="zust-btn zust-small"><span>xLarge</span><span class="zust-icon"><i class="zust-angle-down"></i></span></button>
    <ul class="zust-items zust-text-center"><b>???????????</b>
      <li>???? ??</li>
      <li>?????!!!</li>
      <li>..!...???</li>
      <li>-_- &nbsp;&gt;-&gt;&nbsp; O_O &nbsp;&gt;-&gt;&nbsp; O_o &nbsp;&gt;-&gt;&nbsp; o_O </li>
      <li>|__|-----\(^_^)/-----|__|</li>
    </ul>
  </div>
</div>
```
---

### Sizes of nested dropdowns
If you want to change the size of nested dropdowns just add any of mentioned classes.

```html {snippet}
<div class="zust-dropdown">
  <button class="zust-btn"><span class="zust-icon"><i class="zust-angle-down"></i></span></button>
  <ul class="zust-items">
    <li class="zust-narrow">Narrow
     <ul>
       <li>1em</li>
       <li>2em</li>
       <li>3em</li>
       <li>4em </li>
     </ul>
    </li>
    <li class="zust-small">Small
      <ul>
        <li>Hawk</li>
        <li>Pigeon</li>
        <li>Peacock</li>
        <li>Eagle</li>
        <li>Crane</li>
      </ul>
    </li>
    <li>Normal
      <ul>
        <li>Spiderman</li>
        <li>Nova</li>
        <li>Powerman</li>
        <li>White Tiger</li>
        <li>Iron Fist</li>
      </ul>
    </li>
    <li class="zust-large">Large
      <ul>
        <li>What is it?</li>
        <li>Why it is Cool?</li>
        <li>Who made it?</li>
        <li>Who ate my food!?</li>
        <li>Where is My Car?</li>
      </ul>
    </li>
    <li class="zust-xlarge">xLarge
      <ul>
        <li>???? ??</li>
        <li>?????!!!</li>
        <li>..!...???</li>
        <li>-_- &nbsp;&gt;-&gt;&nbsp; O_O &nbsp;&gt;-&gt;&nbsp; O_o &nbsp;&gt;-&gt;&nbsp; o_O </li>
        <li>|__|-----\(^_^)/-----|__|</li>
      </ul>
    </li>
  </ul>
</div>
```
---


## Grouping
You can group dropdown with button using `zust-el-group`{.class}. See the snippet below.

```html {snippet}
<div class="zust-el-group">
  <button class="zust-btn zust-primary">Open</button>
  <div class="zust-dropdown">
    <button class="zust-btn zust-primary">
      <span class="zust-icon">
        <i class="zust-caret-down"></i>
      </span>
    </button>
    <ul class="zust-items">
      <li><span>Notepad</span></li>
      <li><span>Atom</span></li>
    </ul>
  </div>
</div>

<div class="zust-el-group">
  <div class="zust-dropdown">
    <button class="zust-btn zust-primary">
      <span class="zust-icon">
        <i class="zust-caret-down"></i>
      </span>
    </button>
    <ul class="zust-items">
      <li><span>Item 1</span></li>
      <li><span>Item Blah</span></li>
    </ul>
  </div>
  <button class="zust-btn zust-primary">After</button>
</div>
```
