(() => {
  'use strict';

  const root = document.documentElement;
  const pageLoader = document.getElementById('page-loader');
  const loaderStartedAt = performance.now();
  let loaderDismissed = false;
  const dismissPageLoader = () => {
    if (loaderDismissed) return;
    loaderDismissed = true;
    root.classList.add('is-loaded');
    if (pageLoader) {
      pageLoader.classList.add('is-leaving');
      window.setTimeout(() => {
        pageLoader.remove();
        root.classList.remove('has-js');
      }, 600);
    } else {
      root.classList.remove('has-js');
    }
  };
  const scheduleLoaderDismissal = () => {
    const remaining = Math.max(0, 720 - (performance.now() - loaderStartedAt));
    window.setTimeout(dismissPageLoader, remaining);
  };
  if (document.readyState === 'complete') scheduleLoaderDismissal();
  else window.addEventListener('load', scheduleLoaderDismissal, { once: true });
  // Never leave the visitor behind the loader if a remote asset stalls.
  window.setTimeout(dismissPageLoader, 8000);

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

  // Keep the original full-screen leaf navigation on the homepage; use its compact sticky state on About.
  const isAboutTransitionPage = document.body.classList.contains('about-transition-page');
  const legacyHeader = document.getElementById('header');
  const legacyHeaderFixed = document.getElementById('header-body-fixed');
  const legacyFullscreen = document.querySelector('#header .full-screen-block');

  if (isAboutTransitionPage) {
    if (legacyHeader) legacyHeader.classList.add('header-top-fixed', 'header-all-time-top-fixed');
    if (legacyHeaderFixed) legacyHeaderFixed.classList.add('header-body-fixed');
  } else {
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
  }


  // Sticky Services mega menu, separate from the full-screen leaf navigation.
  const stickyServiceItem=document.querySelector('#navbar-full > li.service');
  if(stickyServiceItem){
    const serviceAnchor=stickyServiceItem.querySelector(':scope > a');
    const sourceServices=stickyServiceItem.querySelector(':scope > .nav-leaf-services');
    const serviceNames=[['Websites & E-commerce','Design and development'],['Apps & Software','Digital tools and custom software'],['Branding & Logos','Identity and visual systems'],['UI/UX Design','Human-centered experiences'],['Digital Marketing','Campaigns and audience reach'],['SEO & Growth','Visibility and sustainable growth']];
    const icons=sourceServices?[...sourceServices.querySelectorAll('.nav-service-icon svg')]:[];
    const mega=document.createElement('div');mega.className='sticky-services-mega';mega.setAttribute('aria-label','Services menu');mega.setAttribute('role','group');
    serviceNames.forEach((item,index)=>{const link=document.createElement('a');link.href='#services';const icon=document.createElement('span');icon.className='mega-icon';if(icons[index])icon.innerHTML=icons[index].outerHTML;const copy=document.createElement('span');copy.className='mega-copy';const title=document.createElement('strong');title.textContent=item[0];const detail=document.createElement('small');detail.textContent=item[1];copy.append(title,detail);const arrow=document.createElement('span');arrow.className='mega-arrow';arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';link.append(icon,copy,arrow);mega.append(link);link.addEventListener('click',closeStickyServices);});
    stickyServiceItem.append(mega);serviceAnchor?.setAttribute('aria-haspopup','true');serviceAnchor?.setAttribute('aria-expanded','false');
    function closeStickyServices(){stickyServiceItem.classList.remove('sticky-services-open');serviceAnchor?.setAttribute('aria-expanded','false');}
    function openStickyServices(){if(!legacyHeader||!(legacyHeader.classList.contains('header-top-fixed')||legacyHeader.classList.contains('header-all-time-top-fixed')))return;stickyServiceItem.classList.add('sticky-services-open');serviceAnchor?.setAttribute('aria-expanded','true');}
    serviceAnchor?.addEventListener('click',event=>{if(!legacyHeader||!(legacyHeader.classList.contains('header-top-fixed')||legacyHeader.classList.contains('header-all-time-top-fixed')))return;event.preventDefault();stickyServiceItem.classList.contains('sticky-services-open')?closeStickyServices():openStickyServices();});
    document.addEventListener('pointerdown',event=>{if(!stickyServiceItem.contains(event.target))closeStickyServices();});document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeStickyServices();serviceAnchor?.focus();}});
    const stickyObserver=new MutationObserver(()=>{if(!legacyHeader?.classList.contains('header-top-fixed')&&!legacyHeader?.classList.contains('header-all-time-top-fixed'))closeStickyServices();});if(legacyHeader)stickyObserver.observe(legacyHeader,{attributes:true,attributeFilter:['class']});
  }

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
      const phraseColors = ['red', 'orange', 'blue'];
      let phraseIndex = 0;
      const applyPhraseColor = () => {
        typedHero.dataset.brandColor = phraseColors[phraseIndex % phraseColors.length];
      };
      applyPhraseColor();
      typedHero.textContent = phrases[0];
      if (!reducedMotion && phrases.length > 1) {
        const characters = phrase => Array.from(phrase);
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
          applyPhraseColor();
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

  // Make the footer back-to-top control reliable even when other scroll effects are active.
  document.querySelectorAll('.back-top').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const behavior = reducedMotion ? 'auto' : 'smooth';
      try {
        window.scrollTo({ top: 0, left: 0, behavior });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    });
  });

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

  // Animate the current #home hero markup (the old image/card hero was removed).
  gsap.from('.hero-left > *', {
    y: 24,
    opacity: 0,
    duration: 0.8,
    stagger: 0.11,
    ease: 'power3.out',
    delay: 0.12,
    clearProps: 'all'
  });


  // Keep storytelling sections in normal document flow and fully readable.
  // Only animate their inner content on entry; never fade entire sections while scrolling.
  gsap.utils.toArray('.reveal:not(.story-step)').forEach(element => {
    gsap.fromTo(element,
      { y: 28, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.75, ease: 'power2.out',
        scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        clearProps: 'transform'
      }
    );
  });

  // Storytelling: keep the feature visual in view while the narrative moves,
  // and tie the process steps to scroll progress rather than firing one-off fades.
  const storyFeature = document.querySelector('.story-feature');
  const storyImage = document.querySelector('.story-image img');
  if (storyFeature && storyImage && window.matchMedia('(min-width: 801px)').matches) {
    gsap.to(storyImage, {
      scale: 1.1,
      yPercent: -5,
      ease: 'none',
      scrollTrigger: {
        trigger: storyFeature,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.7,
        invalidateOnRefresh: true
      }
    });
  }

  const storyProcess = document.querySelector('.story-process');
  const storySteps = gsap.utils.toArray('.story-step');
  if (storyProcess && storySteps.length) {
    gsap.fromTo(storySteps,
      { y: 38, opacity: 0.35 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        ease: 'none',
        scrollTrigger: {
          trigger: storyProcess,
          start: 'top 78%',
          end: 'bottom 62%',
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      }
    );
  }

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
