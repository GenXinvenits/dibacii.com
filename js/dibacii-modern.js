(() => {
  'use strict';

  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const navPanel = document.querySelector('.nav-panel');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Preserve the original header's viewport sizing, sticky transition, and mobile collapse behavior.
  const legacyHeader = document.getElementById('header');
  const legacyHeaderFixed = document.getElementById('header-body-fixed');
  const legacyFullscreen = document.querySelector('#header .full-screen-block');
  function sizeLegacyHeader() {
    if (!legacyFullscreen) return;
    legacyFullscreen.style.width = window.innerWidth + 'px';
    legacyFullscreen.style.height = window.innerHeight + 'px';
  }
  sizeLegacyHeader();
  window.addEventListener('resize', sizeLegacyHeader, { passive: true });

  let previousScroll = window.scrollY;
  window.addEventListener('scroll', () => {
    if (!legacyHeader || !legacyHeaderFixed) return;
    const currentScroll = window.scrollY;
    if (currentScroll > previousScroll && currentScroll > window.innerHeight - 105) {
      legacyHeader.classList.add('header-top-fixed');
      legacyHeaderFixed.classList.add('header-body-fixed');
    } else if (currentScroll < previousScroll && currentScroll < window.innerHeight - 105) {
      legacyHeader.classList.remove('header-top-fixed');
      legacyHeaderFixed.classList.remove('header-body-fixed');
    }
    previousScroll = currentScroll;
  }, { passive: true });

  document.querySelectorAll('#bs-example-navbar-collapse-1 ul li a').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('bs-example-navbar-collapse-1');
      if (collapse) collapse.classList.remove('in');
    });
  });

  if (window.jQuery && window.jQuery.fn.singlePageNav) {
    window.jQuery('.navbar-default #navbar-full').singlePageNav({
      currentClass: 'current',
      updateHash: true,
      speed: 1000,
      offset: 0,
      threshold: 0,
      filter: ':not(.external)',
      easing: 'swing'
    });
  }

  // Keep theme selection automatic so the original header remains completely unchanged.
  const themePreference = window.matchMedia('(prefers-color-scheme: light)');
  const applySystemTheme = () => { root.dataset.theme = themePreference.matches ? 'light' : 'dark'; };
  applySystemTheme();
  if (themePreference.addEventListener) themePreference.addEventListener('change', applySystemTheme);
  else if (themePreference.addListener) themePreference.addListener(applySystemTheme);

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Keep the site fully usable if a CDN or animation library is unavailable.
  if (reducedMotion || !window.gsap || !window.ScrollTrigger) {
    document.documentElement.classList.remove('js-motion');
    return;
  }

  document.documentElement.classList.add('js-motion');
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero-copy > *', {
    y: 24,
    opacity: 0,
    duration: 0.8,
    stagger: 0.11,
    ease: 'power3.out',
    delay: 0.12,
    clearProps: 'all'
  });
  gsap.from('.hero-image-wrap', {
    y: 30,
    opacity: 0,
    rotate: 5,
    duration: 1.1,
    ease: 'power3.out',
    delay: 0.22,
    clearProps: 'all'
  });
  gsap.from('.floating-card', {
    y: 18,
    opacity: 0,
    duration: 0.65,
    stagger: 0.14,
    delay: 0.65,
    ease: 'power2.out',
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
