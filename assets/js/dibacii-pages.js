(() => {
  const toggle = document.querySelector('.site-nav-toggle');
  const links = document.querySelector('.site-nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      links.classList.toggle('is-open', !open);
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      links.classList.remove('is-open');
    }));
    document.addEventListener('click', event => {
      if (!toggle.contains(event.target) && !links.contains(event.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        links.classList.remove('is-open');
      }
    });
  }
})();
