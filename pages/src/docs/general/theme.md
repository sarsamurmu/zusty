---
title: Theme
---

# Theme
In Zusty there are two themes by default, `light`{.class} and `dark`{.class}.
You can set theme by adding attribute `{class}(zust-theme)="{comment}(theme-name)"`.
Replace `theme-name`{.comment} &nbsp; with any theme name, `light`{.class} and `dark`{.class}.

You can change theme of any element by adding above attribute.
You can also add this attribute to a parent element to change the theme of it's child elements.

```html {snippet}
hidCode{{
<p>Try changing the theme</p>
}}

<div class="zust-bg-default" zust-theme="{{placetheme:light}}" style="padding: 10px; border-radius: 10px;" hidCode{{id='mySnippet'}}>
  <p>I've my own theme, yay!</p>
  <button class="zust-btn">Button</button>
  <p class="zust-form-el">
    <input class="zust-input" type="text" placeholder="Input">
  </p>

  <!-- If you use theme on any element, it will override it's parent's theme -->
  <button class="zust-btn" zust-theme="dark">I've my own power</button>
</div>
```

<button class="zust-btn" onclick="changeSnippetTheme()">Change theme</button>

If you want to change theme of your whole HTML then add this attribute to your page's `html`{.tag} tag.

<script>
window.addEventListener('DOMContentLoaded', () => {
  var snippet = document.querySelector('#mySnippet');
  var code = document.querySelector('[placetheme]');
  var snippetTheme = 'light';

  window.changeSnippetTheme = () => {
    if (snippetTheme === 'light') {
      snippet.setAttribute('zust-theme', 'dark');
      code.innerHTML = 'dark';
      snippetTheme = 'dark';
    } else if (snippetTheme === 'dark') {
      snippet.setAttribute('zust-theme', 'light');
      code.innerHTML = 'light';
      snippetTheme = 'light';
    }
  }
})
</script>
