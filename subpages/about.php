<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#111318">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" type="image/svg+xml" href="../assets/img/favicon.svg?v=2">
  <title>About — Dibacii Technologies</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet/less" type="text/css" href="../assets/css/theme-style.less">
  <script src="../assets/js/vendor/less.js"></script>
  <link rel="stylesheet" href="../assets/css/dibacii-modern.css?v=20261026-about-transition">
  <script>document.documentElement.classList.add('has-js');</script>
  <style>
    body.about-transition-page { min-height:100vh; background:var(--bg); color:var(--text); }
    .about-sticky-menu { position:sticky; z-index:1000; top:12px; width:min(760px,calc(100% - 28px)); margin:12px auto 0; padding:7px; display:flex; align-items:center; justify-content:center; gap:6px; border:1px solid var(--line); border-radius:999px; background:color-mix(in srgb,var(--bg-elevated) 78%,transparent); box-shadow:0 12px 36px rgba(0,0,0,.16); backdrop-filter:blur(22px); -webkit-backdrop-filter:blur(22px); }
    .about-sticky-menu a { flex:1; min-width:0; display:flex; align-items:center; justify-content:center; min-height:42px; padding:0 12px; border-radius:999px; color:var(--muted); font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; white-space:nowrap; transition:background .25s,color .25s,transform .25s; }
    .about-sticky-menu a:hover,.about-sticky-menu a[aria-current="page"] { color:var(--text); background:var(--surface-strong); }
    .about-sticky-menu a[aria-current="page"] { color:var(--accent); }
    .about-sticky-menu .about-menu-brand { flex:0 0 auto; font-size:17px; letter-spacing:-.07em; text-transform:lowercase; color:var(--text); }
    .about-menu-brand span { color:var(--accent); }
    .about-page-intro { min-height:70vh; display:grid; place-items:center; padding:90px 24px 72px; }
    .about-page-intro-inner { width:min(1100px,100%); display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:clamp(30px,7vw,100px); }
    .about-page-kicker { color:var(--accent); font-size:11px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; }
    .about-page-intro h1 { margin:18px 0 0; font-size:clamp(42px,7vw,88px); line-height:.98; letter-spacing:-.065em; }
    .about-page-intro h1 span { color:var(--muted); }
    .about-page-visual { position:relative; height:clamp(300px,38vw,490px); }
    .about-page-visual img { position:absolute; display:block; object-fit:cover; border:1px solid var(--line); border-radius:14px; box-shadow:0 22px 65px rgba(0,0,0,.25); }
    .about-page-visual .v1 { width:43%;height:46%;left:2%;top:3%; }
    .about-page-visual .v2 { width:46%;height:32%;right:0;top:11%; }
    .about-page-visual .v3 { width:41%;height:31%;left:9%;bottom:4%; }
    .about-page-visual .v4 { width:36%;height:46%;right:8%;bottom:1%; }
    .about-page-grid-section { min-height:100vh; padding:90px 24px 120px; display:grid; align-items:center; }
    .about-page-grid-inner { width:min(1100px,100%); margin:auto; display:grid; grid-template-columns:.8fr 1fr; align-items:center; gap:clamp(35px,8vw,110px); }
    .about-page-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .about-page-grid .cell { min-height:220px; overflow:hidden; border-radius:12px; border:1px solid var(--line); background:var(--surface); }
    .about-page-grid img { width:100%; height:100%; min-height:220px; object-fit:cover; display:block; }
    .about-page-grid-copy h2 { font-size:clamp(36px,5vw,64px); line-height:1.03; letter-spacing:-.06em; margin:18px 0; }
    .about-page-grid-copy p { color:var(--muted); line-height:1.9; max-width:480px; }
    .about-page-grid-copy .tiny-index { color:var(--accent); font-size:11px; font-weight:700; letter-spacing:.18em; }
    ::view-transition-group(about-shared-1),::view-transition-group(about-shared-2),::view-transition-group(about-shared-3),::view-transition-group(about-shared-4) { animation-duration:.72s; animation-timing-function:cubic-bezier(.22,.75,.25,1); }
    ::view-transition-group(about-shared-2) { animation-delay:.05s; }
    ::view-transition-group(about-shared-3) { animation-delay:.1s; }
    ::view-transition-group(about-shared-4) { animation-delay:.15s; }
    @media(max-width:760px) {
      .about-sticky-menu { gap:2px; padding:5px; }
      .about-sticky-menu a { min-height:38px; padding:0 7px; font-size:9px; letter-spacing:.03em; }
      .about-sticky-menu .about-menu-brand { display:none; }
      .about-page-intro { min-height:auto; padding-top:76px; }
      .about-page-intro-inner,.about-page-grid-inner { grid-template-columns:1fr; }
      .about-page-visual { height:340px; }
      .about-page-grid-section { min-height:auto; padding-top:45px; }
      .about-page-grid .cell,.about-page-grid img { min-height:155px; }
    }
    @media(prefers-reduced-motion:reduce) { ::view-transition-group(about-shared-1),::view-transition-group(about-shared-2),::view-transition-group(about-shared-3),::view-transition-group(about-shared-4) { animation-duration:.01ms; } }
  </style>
</head>
<body class="about-transition-page">
<header id="header">
            <div class="full-screen-block">
                <div class="header-body" id="header-body-fixed">
                    <div id="container-fixed">
                        <nav class="navbar navbar-default light" role="navigation">

                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a href="home.php" class="header-logo brand" aria-label="Dibacii Technologies home"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span class="brand-name">dibacii<span>.</span><small>TECHNOLOGIES</small></span></a>
                            </div>

                            <!-- Collect the nav links, forms, and other content for toggling -->
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-right menu-item-5" id="navbar-full">
                                    <li class="home"><video class="nav-panel-video" muted playsinline loop autoplay preload="none" aria-hidden="true" poster="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"><source src="https://videos.pexels.com/video-files/32123122/13695244_3840_2160_25fps.mp4" type="video/mp4"></video><span class="bg-icon">1</span><span class="rotated-title">Home</span><div class="nav-leaf-copy"><span class="nav-leaf-eyebrow">DIGITAL, WITH INTENTION</span><p>Good ideas deserve room to grow. We turn bold thinking into thoughtful digital experiences that connect people and move brands forward.</p></div><a href="home.php#home">Home</a></li>
                                    <li class="about"><video class="nav-panel-video" muted playsinline loop autoplay preload="none" aria-hidden="true" poster="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"><source src="https://videos.pexels.com/video-files/33314914/14188117_2160_3840_25fps.mp4" type="video/mp4"></video><span class="bg-icon">2</span><span class="rotated-title">About</span><div class="nav-leaf-copy"><span class="nav-leaf-eyebrow">WHO WE ARE</span><p>We bring strategy, design and technology together to help ambitious businesses tell a clearer story and build meaningful digital experiences.</p></div><a href="about.php">About</a></li>                                            
                                    <li class="service"><video class="nav-panel-video" muted playsinline loop autoplay preload="none" aria-hidden="true" poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"><source src="https://videos.pexels.com/video-files/33193839/14146549_3840_2160_25fps.mp4" type="video/mp4"></video><span class="bg-icon">3</span><span class="rotated-title">Services</span><div class="nav-leaf-services" aria-label="Our core services">
  <span class="nav-service-category"><span class="nav-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg></span><span class="nav-service-label">Websites <small>&amp; E-commerce</small></span><span class="nav-service-arrow" aria-hidden="true">↗</span></span>
  <span class="nav-service-category"><span class="nav-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg></span><span class="nav-service-label">Apps <small>&amp; Software</small></span><span class="nav-service-arrow" aria-hidden="true">↗</span></span>
  <span class="nav-service-category"><span class="nav-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 14.4 9.6 21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z"/><path d="m19 3 .8 2.2L22 6l-2.2.8L19 9l-.8-2.2L16 6l2.2-.8L19 3Z"/></svg></span><span class="nav-service-label">Branding <small>&amp; Logos</small></span><span class="nav-service-arrow" aria-hidden="true">↗</span></span>
  <span class="nav-service-category"><span class="nav-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 9h18M9 9v12"/></svg></span><span class="nav-service-label">UI/UX <small>Design</small></span><span class="nav-service-arrow" aria-hidden="true">↗</span></span>
  <span class="nav-service-category"><span class="nav-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m3 11 18-6-6 18-3.5-8.5L3 11Z"/><path d="M11.5 14.5 16 10"/></svg></span><span class="nav-service-label">Digital <small>Marketing</small></span><span class="nav-service-arrow" aria-hidden="true">↗</span></span>
  <span class="nav-service-category"><span class="nav-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 17 9 11l4 4 8-9"/><path d="M15 6h6v6"/></svg></span><span class="nav-service-label">SEO <small>&amp; Growth</small></span><span class="nav-service-arrow" aria-hidden="true">↗</span></span>
</div><div class="nav-leaf-copy"><span class="nav-leaf-eyebrow">FROM IDEA TO IMPACT</span><p>Brand identity, web design, development and digital strategy — thoughtful services shaped around your goals, your audience and what comes next.</p></div><a href="home.php#services">Services</a></li>
                                    <li class="work"><video class="nav-panel-video" muted playsinline loop autoplay preload="none" aria-hidden="true" poster="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"><source src="https://videos.pexels.com/video-files/33532427/14259132_3840_2160_25fps.mp4" type="video/mp4"></video><span class="bg-icon">4</span><span class="rotated-title">Works</span><div class="nav-leaf-copy"><span class="nav-leaf-eyebrow">SELECTED WORK</span><p>A closer look at the ideas made real: considered visuals, purposeful interactions and digital experiences designed to make every detail count.</p></div><a href="home.php#portfolio">Works</a></li>
                                    <li class="contact"><video class="nav-panel-video" muted playsinline loop autoplay preload="none" aria-hidden="true" poster="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"><source src="https://videos.pexels.com/video-files/8632604/8632604-uhd_3840_2160_25fps.mp4" type="video/mp4"></video><span class="bg-icon">5</span><span class="rotated-title">Contact</span><div class="nav-leaf-copy"><span class="nav-leaf-eyebrow">LET’S MAKE SOMETHING MATTER</span><p>Have a project in mind or a challenge to solve? Tell us what you’re working toward and let’s explore what we can build together.</p></div><a href="home.php#contact">Contact</a></li>
                                </ul>

                            </div><!-- /.navbar-collapse -->
                        </nav>      
                    </div>

                </div>
            </div>
        </header>
  <main>
    <section class="about-page-intro" id="about-visual">
      <div class="about-page-intro-inner">
        <div>
          <p class="about-page-kicker">DIBACII TECHNOLOGIES · ABOUT</p>
          <h1>Good work<br>starts with<br><span>a better view.</span></h1>
        </div>
        <div class="about-page-visual" aria-label="Four creative visual studies">
          <img class="v1" id="about-hero-1" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=85" alt="">
          <img class="v2" id="about-hero-2" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=700&q=85" alt="">
          <img class="v3" id="about-hero-3" src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=700&q=85" alt="">
          <img class="v4" id="about-hero-4" src="https://images.unsplash.com/photo-1541701494587-cb585028ab42?auto=format&fit=crop&w=700&q=85" alt="">
        </div>
      </div>
    </section>
    <section class="about-page-grid-section" id="about-story">
      <div class="about-page-grid-inner">
        <div class="about-page-grid" aria-label="Creative image grid">
          <div class="cell" id="about-grid-wrap-1"><img id="about-grid-1" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=85" alt="Abstract digital artwork" loading="lazy"></div>
          <div class="cell" id="about-grid-wrap-2"><img id="about-grid-2" src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=700&q=85" alt="Colorful design study" loading="lazy"></div>
          <div class="cell" id="about-grid-wrap-3"><img id="about-grid-3" src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=700&q=85" alt="Abstract composition" loading="lazy"></div>
          <div class="cell" id="about-grid-wrap-4"><img id="about-grid-4" src="https://images.unsplash.com/photo-1541701494587-cb585028ab42?auto=format&fit=crop&w=700&q=85" alt="Colorful flowing forms" loading="lazy"></div>
        </div>
        <div class="about-page-grid-copy">
          <span class="tiny-index">01 / A DIFFERENT PERSPECTIVE</span>
          <h2>Make the transition feel natural.</h2>
          <p>This is a clean test page for the image-transition effect. Scroll down to watch the four visuals move from the opening composition into the grid, then scroll back up to reverse the movement.</p>
        </div>
      </div>
    </section>
  </main>
  <script src="../assets/js/vendor/jquery.js"></script>
  <script src="../assets/js/vendor/bootstrap.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
  <script src="../assets/js/dibacii-modern.js?v=20261026-about-sticky" defer></script>
  <script>
  (() => {
    const hero = [1,2,3,4].map(i => document.getElementById('about-hero-'+i));
    const cells = [1,2,3,4].map(i => document.getElementById('about-grid-wrap-'+i));
    const section = document.getElementById('about-story');
    const intro = document.getElementById('about-visual');
    if (!section || !intro || hero.some(x=>!x) || cells.some(x=>!x)) return;
    let atGrid = false, busy = false;
    const supports = typeof document.startViewTransition === 'function';
    function transition(toGrid) {
      if (busy || atGrid === toGrid) return;
      busy = true;
      const apply = () => {
        hero.forEach((img,i) => {
          img.style.opacity = toGrid ? '0' : '1';
          img.style.viewTransitionName = toGrid ? '' : 'about-shared-'+(i+1);
        });
        cells.forEach((cell,i) => { cell.style.viewTransitionName = toGrid ? 'about-shared-'+(i+1) : ''; });
      };
      const finish = () => { atGrid = toGrid; busy = false; };
      if (!supports || matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(); finish(); return; }
      const vt = document.startViewTransition(apply);
      vt.finished.then(finish).catch(finish);
    }
    new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting && e.intersectionRatio > .25) transition(true); }), {threshold:[.25,.4]}).observe(section);
    new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting && e.intersectionRatio > .35) transition(false); }), {threshold:[.35,.5]}).observe(intro);
  })();
  </script>
</body>
</html>