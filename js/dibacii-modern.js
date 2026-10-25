(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const navPanel = document.querySelector('.nav-panel');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Theme follows the operating system until the visitor chooses a preference.
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('dibacii-theme'); } catch (_) {}
  const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  root.dataset.theme = savedTheme || systemTheme;

  function updateThemeButton() {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.setAttribute('aria-label', 'Switch to ' + nextTheme + ' theme');
    themeToggle.setAttribute('title', 'Switch to ' + nextTheme + ' theme');
  }
  updateThemeButton();
  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('dibacii-theme', root.dataset.theme); } catch (_) {}
    updateThemeButton();
  });

  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navPanel.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navPanel.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Keep the site fully usable if a CDN or animation library is unavailable.
  if (reducedMotion || !window.gsap || !window.ScrollTrigger) {
    document.documentElement.classList.remove('js-motion');
    return;
  }

  document.documentElement.classList.add('js-motion');
  gsap.registerPlugin(ScrollTrigger);

  // Animate the restored, full-screen hero rather than the removed split-image layout.
  gsap.from('.legacy-hero .fade-ticker .big-text', {
    y: 28,
    opacity: 0,
    duration: 0.85,
    stagger: 0.14,
    ease: 'power3.out',
    delay: 0.12,
    clearProps: 'all'
  });
  gsap.from('.legacy-hero .legacy-hero-intro > *', {
    y: 18,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out',
    delay: 0.42,
    clearProps: 'all'
  });

  gsap.utils.toArray('.reveal').forEach(element => {
    gsap.fromTo(element,
      { y: 28, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.75, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        clearProps: 'transform'
      }
    );
  });

  gsap.utils.toArray('[data-parallax]').forEach(element => {
    const speed = Number(element.dataset.speed || 0.1);
    gsap.to(element, {
      yPercent: speed * -45,
      ease: 'none',
      scrollTrigger: {
        trigger: element.closest('section') || element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.7
      }
    });
  });

  // A restrained 3D tilt follows the pointer only on fine-pointer devices.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const visual = document.querySelector('.hero-visual');
    const image = document.querySelector('.hero-image-wrap');
    if (visual && image) {
      visual.addEventListener('pointermove', event => {
        const bounds = visual.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        gsap.to(image, { rotateY: x * 5, rotateX: y * -5, duration: 0.45, ease: 'power2.out', overwrite: true });
      });
      visual.addEventListener('pointerleave', () => gsap.to(image, { rotateY: 0, rotateX: 0, duration: 0.65, ease: 'power2.out' }));
    }
  }

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const sectionId = entry.target.id;
      if (!sectionId) return;
      navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === '#' + sectionId));
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
})();
