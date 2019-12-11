---
title: Modal
---

# Modal
Quite useful modal

---

## Structure
```html {snippet}
hidCode{{<button class="zust-btn" onclick="showModal('mainSample')">Show Modal</button>}}
<div class="zust-modal" hidCode{{id="mainSample" onclick="hideModal('mainSample')"}}>
  <div class="zust-content">
    <header>
      <img src="../../resources/zusty.svg">
      <h2>Zusty's Modal</h2>
      <button class="zust-btn zust-close-btn zust-transparent">
       <span class="zust-icon">
         <i class="zust-close"></i>
       </span>
      </button>
    </header>
    <div>
      <p>A Powerful Modal That you can Use in your Projects. You can do many things.</p>
      <p>What do you think?</p>
    </div>
    <footer>
      <button class="zust-btn zust-primary">Get it</button>
      <button class="zust-btn zust-transparent">Dismiss it</button>
    </footer>
  </div>
</div>
```
---


## Trigger
To trigger the modal add class `zust-active`{.class}. You have to add the JavaScript by yourself.

---


## Sample JavaScript
You have to trigger the modal using JavaScript. Here's an example.

```html
<div id="sampleModal" class="zust-modal">
  <div class="zust-content">
    <header>
      <h2>Modal</h2>
    </header>
    <div>
      <p>A Sample Modal</p>
    </div>
    <footer>
      <button onclick="hideModal('#sampleModal')" class="zust-btn zust-primary">Dismiss</button>
    </footer>
  </div>
</div>

<button class="zust-btn" onclick="showModal('#sampleModal')">Show Modal</button>

<script>
  // Function to Show modal
  function showModal(selector) {
    // We will pass the selector when calling this function
    document.querySelector(selector).classList.add('zust-active');
    // Set body's overflow to hidden to stop scroll
    document.querySelector('body').style.overflow = "hidden";
  }

  function hideModal(selector) {
    // Rollback to hide modal
    document.querySelector(selector).classList.remove('zust-active');
    document.querySelector('body').style.overflow = "hidden";
  }
</script>
```
---


## Header Image
You can also use icon font as header image. Just use icon instead of image.

```html {snippet}
hidCode{{
  <div class="zust-modal" id="modalFA" onclick="hideModal('modalFA')">
    <div class="zust-content">
      <header>
        <span class="zust-icon zust-text-success"><i class="fas fa-smile-wink"></i></span>
        <h2>Good Morning</h2>
      </header>
      <div>
        <p>Have a Great Day.</p>
      </div>
    </div>
  </div>
  <div class="zust-modal" id="modalMI" onclick="hideModal('modalMI')">
    <div class="zust-content">
      <header>
        <span class="zust-icon zust-text-error"><i class="material-icons">error</i></span>
        <h2>Oops.. A mistake in JS</h2>
      </header>
      <div>
        <p>Probably caused by a human.</p>
      </div>
    </div>
  </div>

  <button class="zust-btn" onclick="showModal('modalFA')">Font Awesome</button>
  <button class="zust-btn" onclick="showModal('modalMI')">Material Icon</button>
}}

<div class="zust-modal">
  <div class="zust-content">
    <header>
      <span class="zust-icon zust-text-success"><i class="fas fa-smile-wink"></i></span>
      <h2>Good Morning</h2>
    </header>
    <div>
      <p>Have a Great Day.</p>
    </div>
  </div>
</div>
```
---


## Long Content
If you want to contain large items you can contain them too

```html {snippet}
hidCode{{<button class="zust-btn" onclick="showModal('modalLongContent')">Show Modal</button>}}
<div class="zust-modal" hidCode{{id="modalLongContent" onclick="hideModal('modalLongContent')"}}>
  <div class="zust-content">
    <header>
      <h2>Long Contents</h2>
      <button class="zust-btn zust-close-btn zust-transparent" hidCode{{onclick="hideModal('modalLongContent')"}}>
       <span class="zust-icon">
         <i class="zust-close"></i>
       </span>
      </button>
    </header>
    <!-- Added Divider for Good Look-->
    <hr divider>
    <div>
      <p>Nunc vulputate nisl vitae venenatis pulvinar. Etiam sed nisi ut est consectetur congue. Integer pellentesque augue erat, id auctor erat iaculis sed. Proin laoreet ipsum ac posuere tincidunt. Sed non sollicitudin dolor. Donec non quam neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus quis lacinia quam. Sed vehicula lorem non interdum bibendum. Morbi laoreet quis tortor a malesuada. Proin consequat justo eget dolor viverra, vitae euismod mauris bibendum.</p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet justo euismod, tincidunt nisi id, cursus ligula. Phasellus iaculis consequat tortor, vitae porta quam lobortis ultrices. Duis tincidunt, ipsum et porttitor varius, sapien erat porttitor lacus, id fringilla erat lectus vitae lacus. Sed erat erat, convallis quis ultricies sit amet, tincidunt non lorem. Curabitur blandit, felis eu elementum porta, urna elit pharetra magna, in facilisis velit magna ut nisl. Mauris pharetra ultrices risus, vel ornare mauris placerat id. Cras vulputate turpis neque, nec bibendum erat hendrerit vel. Phasellus convallis mollis feugiat. Proin dictum nunc efficitur mauris commodo, eget accumsan turpis ornare. Proin fringilla quam orci, ut aliquet mi finibus eu. Nulla nec molestie libero. Suspendisse eros nunc, ullamcorper nec euismod facilisis, pharetra ac libero.</p>
      <p>Nam bibendum metus libero, quis rutrum metus condimentum id. Nam sed turpis tortor. Nullam gravida fermentum est iaculis euismod. Integer aliquet augue diam, sed porta enim feugiat id. Nulla ultrices placerat laoreet. Vestibulum tellus lectus, vulputate sit amet dui sit amet, vehicula vestibulum erat. Maecenas vulputate metus elementum vestibulum consequat. Pellentesque turpis nisi, rhoncus sit amet convallis a, eleifend vitae erat. Curabitur sed tellus scelerisque, feugiat lectus et, eleifend quam. Suspendisse id purus feugiat, mattis dui at, maximus erat. Duis mollis magna urna, a varius risus luctus quis. Mauris tortor justo, laoreet ut consequat ut, blandit a dolor. Suspendisse sed tincidunt nulla.</p>
    </div>
  </div>
</div>
```
---


## Sizes
There are three extra sizes. These sizes only works on desktop. Add any of these classes to modify size `zust-large`{.class}, `zust-xlarge`{.class}, `zust-full`{.class}.

```html {snippet}
hidCode{{<button class="zust-btn" onclick="showModal('modalLarge')">Show Large Modal</button>}}
<div class="zust-modal zust-large" hidCode{{id="modalLarge" onclick="hideModal('modalLarge')"}}>
  <div class="zust-content">
    <header>
      <h2>Large Modal</h2>
      <button class="zust-btn zust-close-btn zust-transparent">
       <span class="zust-icon" hidCode{{onclick="hideModal('modalLarge')"}}>
         <i class="zust-close"></i>
       </span>
      </button>
    </header>
    <div>
      <p>Nunc vulputate nisl vitae venenatis pulvinar. Etiam sed nisi ut est consectetur congue. Integer pellentesque augue erat, id auctor erat iaculis sed. Proin laoreet ipsum ac posuere tincidunt. Sed non sollicitudin dolor. Donec non quam neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus quis lacinia quam. Sed vehicula lorem non interdum bibendum. Morbi laoreet quis tortor a malesuada. Proin consequat justo eget dolor viverra, vitae euismod mauris bibendum.</p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet justo euismod, tincidunt nisi id, cursus ligula. Phasellus iaculis consequat tortor, vitae porta quam lobortis ultrices. Duis tincidunt, ipsum et porttitor varius, sapien erat porttitor lacus, id fringilla erat lectus vitae lacus. Sed erat erat, convallis quis ultricies sit amet, tincidunt non lorem. Curabitur blandit, felis eu elementum porta, urna elit pharetra magna, in facilisis velit magna ut nisl. Mauris pharetra ultrices risus, vel ornare mauris placerat id. Cras vulputate turpis neque, nec bibendum erat hendrerit vel. Phasellus convallis mollis feugiat. Proin dictum nunc efficitur mauris commodo, eget accumsan turpis ornare. Proin fringilla quam orci, ut aliquet mi finibus eu. Nulla nec molestie libero. Suspendisse eros nunc, ullamcorper nec euismod facilisis, pharetra ac libero.</p>
      <p>Nam bibendum metus libero, quis rutrum metus condimentum id. Nam sed turpis tortor. Nullam gravida fermentum est iaculis euismod. Integer aliquet augue diam, sed porta enim feugiat id. Nulla ultrices placerat laoreet. Vestibulum tellus lectus, vulputate sit amet dui sit amet, vehicula vestibulum erat. Maecenas vulputate metus elementum vestibulum consequat. Pellentesque turpis nisi, rhoncus sit amet convallis a, eleifend vitae erat. Curabitur sed tellus scelerisque, feugiat lectus et, eleifend quam. Suspendisse id purus feugiat, mattis dui at, maximus erat. Duis mollis magna urna, a varius risus luctus quis. Mauris tortor justo, laoreet ut consequat ut, blandit a dolor. Suspendisse sed tincidunt nulla.</p>
    </div>
  </div>
</div>

hidCode{{
  <button class="zust-btn" onclick="showModal('modalxLarge')">Show xLarge Modal</button>
  <div class="zust-modal zust-xlarge" id="modalxLarge" onclick="hideModal('modalxLarge')">
    <div class="zust-content">
      <header>
        <h2>xLarge Modal</h2>
        <button class="zust-btn zust-close-btn zust-transparent">
         <span class="zust-icon" onclick="hideModal('modalxLarge')">
           <i class="zust-close"></i>
         </span>
        </button>
      </header>
      <div>
        <p>Nunc vulputate nisl vitae venenatis pulvinar. Etiam sed nisi ut est consectetur congue. Integer pellentesque augue erat, id auctor erat iaculis sed. Proin laoreet ipsum ac posuere tincidunt. Sed non sollicitudin dolor. Donec non quam neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus quis lacinia quam. Sed vehicula lorem non interdum bibendum. Morbi laoreet quis tortor a malesuada. Proin consequat justo eget dolor viverra, vitae euismod mauris bibendum.</p>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet justo euismod, tincidunt nisi id, cursus ligula. Phasellus iaculis consequat tortor, vitae porta quam lobortis ultrices. Duis tincidunt, ipsum et porttitor varius, sapien erat porttitor lacus, id fringilla erat lectus vitae lacus. Sed erat erat, convallis quis ultricies sit amet, tincidunt non lorem. Curabitur blandit, felis eu elementum porta, urna elit pharetra magna, in facilisis velit magna ut nisl. Mauris pharetra ultrices risus, vel ornare mauris placerat id. Cras vulputate turpis neque, nec bibendum erat hendrerit vel. Phasellus convallis mollis feugiat. Proin dictum nunc efficitur mauris commodo, eget accumsan turpis ornare. Proin fringilla quam orci, ut aliquet mi finibus eu. Nulla nec molestie libero. Suspendisse eros nunc, ullamcorper nec euismod facilisis, pharetra ac libero.</p>
        <p>Nam bibendum metus libero, quis rutrum metus condimentum id. Nam sed turpis tortor. Nullam gravida fermentum est iaculis euismod. Integer aliquet augue diam, sed porta enim feugiat id. Nulla ultrices placerat laoreet. Vestibulum tellus lectus, vulputate sit amet dui sit amet, vehicula vestibulum erat. Maecenas vulputate metus elementum vestibulum consequat. Pellentesque turpis nisi, rhoncus sit amet convallis a, eleifend vitae erat. Curabitur sed tellus scelerisque, feugiat lectus et, eleifend quam. Suspendisse id purus feugiat, mattis dui at, maximus erat. Duis mollis magna urna, a varius risus luctus quis. Mauris tortor justo, laoreet ut consequat ut, blandit a dolor. Suspendisse sed tincidunt nulla.</p>
      </div>
    </div>
  </div>

  <button class="zust-btn" onclick="showModal('modalFull')">Show Full Modal</button>
  <div class="zust-modal zust-full" id="modalFull" onclick="hideModal('modalFull')">
    <div class="zust-content">
      <header>
        <h2>xLarge Modal</h2>
        <button class="zust-btn zust-close-btn zust-transparent">
         <span class="zust-icon" onclick="hideModal('modalFull')">
           <i class="zust-close"></i>
         </span>
        </button>
      </header>
      <div>
        <p>Mauris porttitor justo ultrices, placerat nunc et, finibus odio. Ut a arcu in odio pulvinar porttitor vitae ac diam. Vestibulum sit amet enim tempus, pharetra tellus et, egestas lorem. Fusce nibh ex, sollicitudin ut purus nec, vulputate porta dolor. Integer quis risus vitae risus tristique faucibus. In est neque, cursus quis dapibus et, aliquet et metus. Fusce nulla justo, tincidunt vel iaculis eu, pulvinar nec mi. Pellentesque auctor non nisl et dapibus. Quisque laoreet purus id dui commodo, ac maximus nisl porttitor. Quisque iaculis sapien nec ultrices eleifend. Morbi fringilla convallis quam id faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed neque eros, feugiat a pellentesque et, elementum cursus sapien. Pellentesque in ultrices magna. Quisque sed pharetra libero. Aliquam viverra arcu vitae est tempus imperdiet.</p>
        <p>Phasellus feugiat consectetur odio, et scelerisque augue ultricies non. Nunc placerat mauris non dui imperdiet viverra. Phasellus vel arcu tristique erat efficitur dapibus sed luctus eros. Etiam eget tincidunt nulla, ut venenatis ex. Fusce metus tellus, lacinia facilisis interdum vitae, iaculis sed arcu. Maecenas pharetra blandit metus, at mollis odio suscipit aliquet. Nullam placerat tincidunt risus vitae pellentesque. Sed pharetra imperdiet finibus. Aliquam laoreet odio sit amet commodo blandit. Vivamus lorem augue, pulvinar vitae tortor vitae, rhoncus semper libero.</p>
        <p>In sit amet tempus ante. Duis suscipit interdum arcu, sit amet blandit arcu. Sed mollis lacus est, sed elementum lectus maximus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero turpis, pellentesque id viverra quis, dictum rutrum elit. Suspendisse nec pellentesque mi, sit amet dapibus urna. Vivamus ac convallis metus, ut dignissim libero. Phasellus ornare, arcu id varius volutpat, magna arcu molestie nisi, eu posuere arcu risus a risus. Donec dictum blandit leo, eu finibus sapien iaculis eu. Vestibulum aliquam tortor erat, vitae varius magna efficitur eget. Nunc luctus scelerisque elit eu placerat.</p>
        <p>Ut ornare mi eu efficitur tincidunt. Quisque posuere viverra convallis. Nullam aliquam libero id est tempus, vitae ornare dui iaculis. Vivamus ut lorem ultrices, auctor odio eu, molestie metus. Pellentesque pretium porta lectus, quis faucibus eros aliquam sed. Vestibulum odio justo, bibendum a laoreet nec, consequat ac arcu. Nam et iaculis urna, nec hendrerit lectus. Sed vel mauris ornare, interdum lorem sed, lacinia orci. Duis ut dignissim justo, ac eleifend lectus. Sed pharetra hendrerit eros quis tincidunt. Aliquam posuere augue vitae libero faucibus, vitae consectetur orci convallis. Fusce quis mi mauris.</p>
        <p>Morbi non quam velit. Nam nec felis vel augue vehicula gravida in in nisl. Mauris porta, enim quis viverra ultrices, purus nunc tincidunt lectus, sed tincidunt diam massa quis arcu. Quisque posuere placerat dapibus. Ut ac facilisis enim. Pellentesque interdum justo sit amet ligula eleifend, sit amet sagittis justo laoreet. Sed vitae nulla eget neque cursus congue vel maximus sem. Phasellus efficitur, purus a ultrices condimentum, arcu dui faucibus nisl, et egestas metus sem sit amet leo. Fusce auctor felis felis, sed tincidunt dui eleifend in. Fusce fringilla velit at est blandit, a feugiat augue eleifend. Vestibulum et finibus urna. Mauris rhoncus felis non mattis luctus. Pellentesque placerat vestibulum lorem eu bibendum.</p>
        <p>Aliquam feugiat, orci ut rhoncus eleifend, sapien diam commodo ante, vel auctor nulla magna vehicula libero. Integer a fermentum justo, at rutrum sem. Aliquam vel tempor purus, et dapibus ipsum. Sed ac lacinia felis. Sed interdum arcu diam, sit amet consequat lacus elementum ac. Nunc ultrices justo at neque fermentum, nec finibus eros convallis. Praesent at lectus a est cursus malesuada. Cras finibus non nisi nec ullamcorper. Proin mollis felis at tincidunt iaculis. Mauris ut orci neque. Pellentesque sit amet enim non lacus dignissim fermentum. Sed ut dolor sit amet ligula rutrum mollis. Phasellus accumsan, est quis dictum viverra, ex ipsum bibendum leo, quis lacinia ligula lectus in lectus. Quisque auctor purus ut porta tempus. Donec ut odio consequat arcu dignissim tempus nec vel tellus.</p>
        <p>Phasellus vel mollis eros. Duis scelerisque metus eu facilisis interdum. Donec maximus metus vitae ante rhoncus, at porta ante lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nisi turpis, tempor et condimentum eu, suscipit sed enim. Proin dui nibh, ultrices ac tellus quis, tristique pharetra felis. Cras faucibus dolor vitae lacus gravida, non tempus nunc luctus. Suspendisse potenti. Sed dignissim ac risus sit amet scelerisque. Sed in sollicitudin odio, quis ornare mauris. Suspendisse ac facilisis quam. Praesent facilisis turpis sem, eget efficitur lectus faucibus at. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <p>Curabitur vulputate aliquet velit. Praesent egestas orci non purus congue fringilla. Suspendisse lobortis lorem id neque dignissim luctus. In hac habitasse platea dictumst. Curabitur tincidunt scelerisque lacus, feugiat bibendum magna semper ut. Ut ac tempor nisl, vel mollis dolor. Quisque fermentum sem rutrum nisl ornare ornare. Duis libero diam, gravida vel libero in, sollicitudin luctus nisl. Phasellus et nisl risus.</p>
        <h3>Did You Understand Anything?</h3>
      </div>
      <footer>
        <button onclick="hideModal('modalFull')" class="zust-btn zust-primary">Yes, I Understand and Please Continue</button>
      </footer>
    </div>
  </div>
}}
```

<script>
window.addEventListener('DOMContentLoaded', () => {
  let inner = document.querySelectorAll('.zust-content');
  let body = document.querySelector('body');

  inner.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.stopPropagation();
      });
    });

  window.showModal = (objectId) => {
    var el = document.getElementById(objectId);
    body.classList.add('lock');
    el.classList.add('zust-active');
  }

  window.hideModal = (objectId) => {
    var el = document.getElementById(objectId);
    el.classList.remove('zust-active');
    body.classList.remove('lock');
  }
})
</script>
