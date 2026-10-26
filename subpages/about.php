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
  <nav class="about-sticky-menu" aria-label="Sticky navigation">
    <a class="about-menu-brand" href="home.php" aria-label="Dibacii home">dibacii<span>.</span></a>
    <a href="home.php">Home ↗</a>
    <a href="about.php" aria-current="page">About</a>
    <a href="home.php#services">Services ↗</a>
    <a href="home.php#portfolio">Works ↗</a>
    <a href="home.php#contact">Contact ↗</a>
  </nav>
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