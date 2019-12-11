window.addEventListener('load', () => {
  // Theme Control
  const toggleSwitch = document.querySelector('#themeSwitch');
  const currentTheme = localStorage.getItem('theme');
  const metaTheme = document.querySelector('meta[name=theme-color]');

  if (currentTheme) {
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  }

  window.switchTheme = () => {
    if (toggleSwitch.checked === true) {
      metaTheme.setAttribute('content', '#212121');
      document.documentElement.setAttribute('zust-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      metaTheme.setAttribute('content', '#FFFFFF');
      document.documentElement.setAttribute('zust-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  // Switch Theme Button
  window.toggleTheme = () => {
    switchTheme();
  }

  // Set SVG inside of Copy Button
  document.querySelectorAll('button[copybutton]').forEach((button) => {
    button.innerHTML = `
  <span class="zust-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
    </svg>
  </span>
  `;
  });

  window.copyID = (source) => {
    var item = document.getElementById(source);
    var text = document.createElement('textarea');
    document.body.appendChild(text);
    text.value = item.textContent;
    console.log("Copied: \n \n" + item.textContent);
    text.select();
    document.execCommand('copy', false);
    text.remove();
  }
})
