<?php
$pageTitle = $pageTitle ?? 'Dibacii Technologies — Digital, Designed Better';
$pageDescription = $pageDescription ?? 'Dibacii Technologies brings strategy, design and technology together to build thoughtful digital experiences for growing businesses.';
$activePage = $activePage ?? '';
?>
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#111318">
  <meta name="description" content="<?= htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8') ?>">
  <meta name="color-scheme" content="dark light">
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg?v=2">
  <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/dibacii-modern.css">
  <link rel="stylesheet" href="/assets/css/dibacii-pages.css">
  <script>document.documentElement.classList.add('has-js');</script>
  <link rel="stylesheet" href="/assets/css/dibacii-loader.css">
</head>
<body>
  <div class="page-loader" id="page-loader" role="status" aria-live="polite" aria-label="Loading Dibacii Technologies">
    <div class="page-loader-content">
      <span class="brand-mark loader-brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
      <span class="brand-name loader-brand-name">dibacii<span>.</span><small>TECHNOLOGIES</small></span>
      <span class="loader-tagline">Digital, designed better.</span>
      <span class="loader-progress" aria-hidden="true"><span></span></span>
    </div>
  </div>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" id="header">
    <nav class="site-nav" aria-label="Main navigation">
      <a class="brand site-brand" href="/home/" aria-label="Dibacii Technologies home">
        <span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="brand-name">dibacii<span>.</span><small>TECHNOLOGIES</small></span>
      </a>
      <button class="site-nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav-links" aria-label="Open navigation"><span></span><span></span></button>
      <div class="site-nav-links" id="site-nav-links">
        <a class="<?= $activePage === 'home' ? 'is-active' : '' ?>" href="/home/">Home</a>
        <a class="<?= $activePage === 'about' ? 'is-active' : '' ?>" href="/about/">About</a>
        <a class="<?= $activePage === 'services' ? 'is-active' : '' ?>" href="/services/">Services</a>
        <a class="<?= $activePage === 'works' ? 'is-active' : '' ?>" href="/works/">Works</a>
        <a class="<?= $activePage === 'contact' ? 'is-active' : '' ?>" href="/contact/">Contact</a>
        <a class="site-nav-cta" href="/contact/">Start a project <span aria-hidden="true">↗</span></a>
      </div>
      <button class="theme-switcher" type="button" aria-label="Switch to light mode" title="Switch to light mode" aria-pressed="false"><span class="theme-switcher-icon" aria-hidden="true">☼</span></button>
    </nav>
  </header>
  <main id="main" class="modern-content page-content">
