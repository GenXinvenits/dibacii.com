(() => {
  'use strict';

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Run navigation background footage only on larger screens when motion is allowed.
  const navVideoQuery = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
  const headerVideos = [...document.querySelectorAll('#navbar-full .nav-panel-video')];
  function syncHeaderVideos() {
    const shouldPlay = navVideoQuery.matches;
    headerVideos.forEach(video => {
      video.autoplay = shouldPlay;
      if (shouldPlay) {
        const playback = video.play();
        if (playback && typeof playback.catch === 'function') playback.catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }
  syncHeaderVideos();
  if (navVideoQuery.addEventListener) navVideoQuery.addEventListener('change', syncHeaderVideos);
  else if (navVideoQuery.addListener) navVideoQuery.addListener(syncHeaderVideos);

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

  // Follow the device theme by default; remember a user's explicit switch.
  const themePreference = window.matchMedia('(prefers-color-scheme: light)');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const themeSwitcher = document.querySelector('.theme-switcher');
  let savedTheme = null;
  try { savedTheme = window.localStorage.getItem('dibacii-theme'); } catch (error) { /* Storage may be unavailable. */ }
  const setTheme = (theme, saveChoice = false) => {
    root.dataset.theme = theme;
    if (themeColorMeta) themeColorMeta.setAttribute('content', theme === 'light' ? '#f7f5f1' : '#111318');
    if (themeSwitcher) {
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      themeSwitcher.setAttribute('aria-label', 'Switch to ' + nextTheme + ' mode');
      themeSwitcher.setAttribute('title', 'Switch to ' + nextTheme + ' mode');
      themeSwitcher.setAttribute('aria-pressed', String(theme === 'light'));
      const icon = themeSwitcher.querySelector('.theme-switcher-icon');
      if (icon) icon.textContent = nextTheme === 'light' ? '☼' : '☾';
    }
    if (saveChoice) {
      try { window.localStorage.setItem('dibacii-theme', theme); } catch (error) { /* Keep the current-page choice if storage is unavailable. */ }
    }
  };
  setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (themePreference.matches ? 'light' : 'dark'));
  // Rotate through hero phrases with a type-and-erase effect.
  // The complete heading remains available to assistive technology via its aria-label.
  const typedHero = document.querySelector('.hero-typed[data-typing-phrases]');
  if (typedHero) {
    const phrases = (typedHero.dataset.typingPhrases || typedHero.textContent)
      .split('|')
      .map(phrase => phrase.trim())
      .filter(Boolean);
    if (phrases.length) {
      typedHero.textContent = phrases[0];
      if (!reducedMotion && phrases.length > 1) {
        const characters = phrase => Array.from(phrase);
        let phraseIndex = 0;
        let characterIndex = characters(phrases[0]).length;
        let deleting = true;
        typedHero.classList.add('is-typing');

        const animatePhrase = () => {
          const phraseCharacters = characters(phrases[phraseIndex]);
          if (!deleting) {
            if (characterIndex < phraseCharacters.length) {
              const nextCharacter = phraseCharacters[characterIndex++];
              typedHero.textContent += nextCharacter;
              const isPunctuation = /[.,!?;:]/u.test(nextCharacter);
              const isSpace = /\\s/u.test(nextCharacter);
              window.setTimeout(animatePhrase, isPunctuation ? 190 : (isSpace ? 72 : 42));
              return;
            }
            deleting = true;
            window.setTimeout(animatePhrase, 1850);
            return;
          }

          if (characterIndex > 0) {
            characterIndex--;
            typedHero.textContent = phraseCharacters.slice(0, characterIndex).join('');
            window.setTimeout(animatePhrase, 23);
            return;
          }

          phraseIndex = (phraseIndex + 1) % phrases.length;
          deleting = false;
          window.setTimeout(animatePhrase, 320);
        };

        window.setTimeout(() => {
          characterIndex = 0;
          typedHero.textContent = '';
          deleting = false;
          animatePhrase();
        }, 1500);
      }
    }
  }

  if (themePreference.addEventListener) {
    themePreference.addEventListener('change', event => {
      if (!savedTheme) setTheme(event.matches ? 'light' : 'dark');
    });
  } else if (themePreference.addListener) {
    themePreference.addListener(event => {
      if (!savedTheme) setTheme(event.matches ? 'light' : 'dark');
    });
  }
  if (themeSwitcher) {
    themeSwitcher.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
      savedTheme = nextTheme;
      setTheme(nextTheme, true);
    });
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Keep navigation state functional even when motion is disabled or animation CDNs fail.
  const legacyNavLinks = [...document.querySelectorAll('#navbar-full a[href^="#"]')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const sectionId = entry.target.id;
      if (!sectionId) return;
      legacyNavLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        const matches = targetId === '#' + sectionId || (targetId === '#portfolio' && sectionId === 'work');
        link.classList.toggle('is-active', matches);
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

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

  // Scroll-story transitions: fade each section in as it arrives, then out as the next takes over.
  // This stays in normal document flow, so links, anchors and long sections remain usable.
  const storySections = gsap.utils.toArray('.modern-content main > section');
  storySections.forEach((section, index) => {
    gsap.set(section, { opacity: 1 });
    section.classList.add('scroll-story-section');

    if (index > 0) {
      gsap.fromTo(section,
        { opacity: 0.2 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            end: 'top 28%',
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        }
      );
    }

    if (index < storySections.length - 1) {
      gsap.to(section, {
        opacity: 0.18,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom 35%',
          scrub: 0.8,
          invalidateOnRefresh: true
        }
      });
    }
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


})();
