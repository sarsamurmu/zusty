window.addEventListener('DOMContentLoaded', () => {
  window.qs = document.querySelector.bind(document);

  let nav = qs('nav');

  window.isElementInViewport = (el) => {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  window.addEventListener('scroll', () => {
    if (isElementInViewport(qs('.hero > img'))) {
      nav.classList.add('hideLogo')
    } else {
      nav.classList.remove('hideLogo')
    }
  })
})
