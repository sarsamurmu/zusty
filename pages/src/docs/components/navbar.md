---
title: Navbar
---

# Navbar
Flexible, responsive basic navbar.

---


## Structure

```html {raw}
<div class="nav-container">
  <nav role="navigation" class="zust-navbar">
    <!-- This is header, it includes button to expand nav, brand logo and brand title -->
    <div class="zust-header">
      <img src="/resources/zusty.svg">
      <span>Zusty CSS</span>
      <button class="zust-btn zust-transparent zust-menu-btn">
        <span class="zust-icon">
          <i class="zust-menu"></i>
        </span>
      </button>
    </div>

    <!-- Content includes options and action buttons -->
    <div class="zust-content">

      <!-- This is option. Each <a></a> is a option -->
      <div class="zust-options">
        <a href="#!">Get Started</a>
        <a href="#!">Download</a>
        <a href="#!">About</a>
      </div>

      <!-- Put all action buttons here -->
      <div class="zust-actions">
        <button class="zust-btn zust-transparent">Support</button>
        <button class="zust-btn zust-primary">Join Beta</button>
      </div>
    </div>
  </nav>
</div>
```

```html
<nav role="navigation" class="zust-navbar">

  <!-- This is header, it includes button to expand nav, brand logo and brand title -->
  <div class="zust-header">
    <img src="/resources/zusty.svg">
    <span>Zusty CSS</span>
    <button class="zust-btn zust-transparent zust-menu-btn">
      <span class="zust-icon">
        <i class="zust-menu"></i>
      </span>
    </button>
  </div>

  <!-- Content includes options and action buttons -->
  <div class="zust-content">

    <!-- This is option. Each <a></a> is a option -->
    <div class="zust-options">
      <a href="#!">Get Started</a>
      <a href="#!">Download</a>
      <a href="#!">About</a>
    </div>

    <!-- Put all action buttons here -->
    <div class="zust-actions">
      <button class="zust-btn zust-transparent">Support</button>
      <button class="zust-btn zust-primary">Join Beta</button>
    </div>
  </div>
</nav>
```
---



## Header
All header items are contained inside of `zust-header`{.class}. `zust-menu-btn`{.class} is button which will show up only on `until-large`{.tag} breakpoint, you can use it to trigger the navbar to expanded.

---


## Content
`zust-content`{.class} contains rest of navbar parts. `zust-options`{.class} contains all options as `a`{.tag} element. `zust-actions`{.class} contains all action buttons. `zust-content`{.class} changes layout on `until-large`{.tag} breakpoint.

---


## Trigger and selection
You've to add the JavaScript by yourself. Add class `zust-expanded`{.class} to `zust-navbar`{.class} expand the Navbar (only for `until-large`{.tag} breakpoint). Add class `zust-selected`{.class} or attribute `selected`{.attr} to any of `zust-option`{.class} child to set the item selected.

Here's a snippet to expand navbar with JavaScript.
```html
<nav role="navigation" class="zust-navbar">

  <!-- This is header, it includes button to expand nav, brand logo and brand title -->
  <div class="zust-header">
    <img src="/resources/zusty.svg">
    <span>Zusty CSS</span>
    <button class="zust-btn zust-transparent zust-menu-btn">
      <span class="zust-icon">
        <i class="zust-menu"></i>
      </span>
    </button>
  </div>

  <!-- Content includes options and action buttons -->
  <div class="zust-content">

    <!-- This is option. Each <a></a> is a option -->
    <div class="zust-options">
      <a href="#!">Get Started</a>
      <a href="#!">Download</a>
      <a href="#!">About</a>
    </div>

    <!-- Put all action buttons here -->
    <div class="zust-actions">
      <button class="zust-btn zust-transparent">Support</button>
      <button class="zust-btn zust-primary">Join Beta</button>
    </div>
  </div>
</nav>

<script>
  document.querySelectorAll('.zust-menu-btn').forEach((btn) => {
    btn.addEventListener('click', ()) => {
      // Check if the navbar is expanded
      if (!btn.closest('.zust-navbar').classList.contains('zust-expanded')) {
        // if the navbar is not expanded, make it expanded and toggle the icon
        btn.closest('.zust-navbar').classList.add('zust-expanded');
        btn.querySelector('.zust-icon i').classList.replace('zust-menu', 'zust-close');
      } else {
        // if the navbar is expanded, close the navbar and toggle the icon
        btn.closest('.zust-navbar').classList.remove('zust-expanded');
        btn.querySelector('.zust-icon i').classList.replace('zust-close', 'zust-menu');
      }
    });
  });
</script>
```
---


## With dropdown
You can even include [Dropdown](dropdown) in navbar. Just add it to `zust-options`{.class}.

```html {raw}
<div class="nav-container">
  <nav role="navigation" class="zust-navbar">

    <!-- This is header, it includes button to expand nav, brand logo and brand title -->
    <div class="zust-header">
      <img src="/resources/zusty.svg">
      <span>Zusty CSS</span>
      <button class="zust-btn zust-transparent zust-menu-btn">
        <span class="zust-icon">
          <i class="zust-menu"></i>
        </span>
      </button>
    </div>

    <!-- Content includes options and action buttons -->
    <div class="zust-content">

      <!-- This is option. Each <a></a> is a option -->
      <div class="zust-options">
        <a href="#!">Get Started</a>
        <a href="#!">Download</a>
        <a href="#!">About</a>

        <!-- You can also include Dropdowns -->
        <div class="zust-dropdown">
          <button class="zust-btn">More</button>
          <ul class="zust-items">
            <li>Report Bug</li>
            <li>New Features</li>
          </ul>
        </div>
      </div>

      <!-- Put all action buttons here -->
      <div class="zust-actions">
        <button class="zust-btn zust-transparent">Support</button>
        <button class="zust-btn zust-primary">Join Beta</button>
      </div>
    </div>
  </nav>
</div>
```
```html
<nav role="navigation" class="zust-navbar">

  <!-- This is header, it includes button to expand nav, brand logo and brand title -->
  <div class="zust-header">
    <img src="/resources/zusty.svg">
    <span>Zusty CSS</span>
    <button class="zust-btn zust-transparent zust-menu-btn">
      <span class="zust-icon">
        <i class="zust-menu"></i>
      </span>
    </button>
  </div>

  <!-- Content includes options and action buttons -->
  <div class="zust-content">

    <!-- This is option. Each <a></a> is a option -->
    <div class="zust-options">
      <a href="#!">Get Started</a>
      <a href="#!">Download</a>
      <a href="#!">About</a>

      <!-- You can also include Dropdowns -->
      <div class="zust-dropdown">
        <button class="zust-btn">More</button>
        <ul class="zust-items">
          <li>Report Bug</li>
          <li>New Features</li>
        </ul>
      </div>
    </div>

    <!-- Put all action buttons here -->
    <div class="zust-actions">
      <button class="zust-btn zust-transparent">Support</button>
      <button class="zust-btn zust-primary">Join Beta</button>
    </div>
  </div>
</nav>
```
---


## Flat
A navbar can be flat. Add class `zust-flat`{.class} for flat navbar.

```html {raw}
<div class="nav-container">
  <nav role="navigation" class="zust-navbar zust-flat">
    <div class="zust-header">
      <img src="/resources/zusty.svg">
      <span>Zusty CSS</span>
      <button class="zust-btn zust-transparent zust-menu-btn">
        <span class="zust-icon">
          <i class="zust-menu"></i>
        </span>
      </button>
    </div>

    <div class="zust-content">
      <div class="zust-options">
        <a href="#!">Get Started</a>
        <a href="#!">Download</a>
        <a href="#!">About</a>
      </div>

      <div class="zust-actions">
        <button class="zust-btn zust-transparent">Support</button>
        <button class="zust-btn zust-primary">Join Beta</button>
      </div>
    </div>
  </nav>
</div>
```

```html
<nav role="navigation" class="zust-navbar zust-flat">
  <div class="zust-header">
    <img src="/resources/zusty.svg">
    <span>Zusty CSS</span>
    <button class="zust-btn zust-transparent zust-menu-btn">
      <span class="zust-icon">
        <i class="zust-menu"></i>
      </span>
    </button>
  </div>

  <div class="zust-content">
    <div class="zust-options">
      <a href="#!">Get Started</a>
      <a href="#!">Download</a>
      <a href="#!">About</a>
    </div>

    <div class="zust-actions">
      <button class="zust-btn zust-transparent">Support</button>
      <button class="zust-btn zust-primary">Join Beta</button>
    </div>
  </div>
</nav>
```
---


## Right aligned
A navbar can be right aligned, just add class `zust-right-aligned`{.class} to `zust-navbar`{.class}

```html {raw}
<div class="nav-container">
  <nav role="navigation" class="zust-navbar zust-right-aligned">
    <div class="zust-header">
      <img src="/resources/zusty.svg">
      <span>Zusty CSS</span>
      <button class="zust-btn zust-transparent zust-menu-btn">
        <span class="zust-icon">
          <i class="zust-menu"></i>
        </span>
      </button>
    </div>

    <div class="zust-content">
      <div class="zust-options">
        <a href="#!">Get Started</a>
        <a href="#!">Download</a>
        <a href="#!">About</a>
      </div>
    </div>
  </nav>
</div>
```

```html
<nav role="navigation" class="zust-navbar zust-right-aligned">
  <div class="zust-header">
    <img src="/resources/zusty.svg">
    <span>Zusty CSS</span>
    <button class="zust-btn zust-transparent zust-menu-btn">
      <span class="zust-icon">
        <i class="zust-menu"></i>
      </span>
    </button>
  </div>

  <div class="zust-content">
    <div class="zust-options">
      <a href="#!">Get Started</a>
      <a href="#!">Download</a>
      <a href="#!">About</a>
    </div>
  </div>
</nav>
```


<script>
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.zust-menu-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!btn.closest('.zust-navbar').classList.contains('zust-expanded')) {
        btn.closest('.zust-navbar').classList.add('zust-expanded');
        btn.querySelector('.zust-icon i').classList.replace('zust-menu', 'zust-close');
      } else {
        btn.closest('.zust-navbar').classList.remove('zust-expanded');
        btn.querySelector('.zust-icon i').classList.replace('zust-close', 'zust-menu');
      }
    });
  });

  document.querySelectorAll('.zust-options > a').forEach((a) => {
    a.addEventListener('click', () => {
      a.closest('.zust-options').querySelectorAll('a').forEach((aN) => {
        aN.removeAttribute('selected');
      });
      a.setAttribute('selected', '');
    });
  });
})
</script>
