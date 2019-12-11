// Getting Theme Data from URL
var aPageURL =  window.location.href;
var darkURL = aPageURL.includes("theme=dark");
var lightURL = aPageURL.includes("theme=light");

if (darkURL === true) { localStorage.setItem('theme', 'dark') }
if (lightURL === true) { localStorage.setItem('theme', 'light') }

const aCurrentTheme = localStorage.getItem('theme');
const aMetaTheme = document.querySelector('meta[name=theme-color]');

if (aCurrentTheme) {
  document.documentElement.setAttribute('zust-theme', aCurrentTheme);

  if (aCurrentTheme === "dark") {
    aMetaTheme.setAttribute('content', '#212121');
  }
} else {
  localStorage.setItem('theme', 'light');
}
