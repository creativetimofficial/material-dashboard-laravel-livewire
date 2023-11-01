<!DOCTYPE html>

<html
  lang="en"
  class="light-style layout-menu-fixed layout-compact"
  dir="ltr"
  data-theme="theme-default"
  data-assets-path="/assets/"
  data-template="horizontal-menu-template">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>LARAWIRE | @yield('title','')</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/assets/img/favicon/favicon.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="/assets/fonts.googleapis.com/index.html">
    <link rel="preconnect" href="/assets/fonts.gstatic.com/index.html" crossorigin>
    <link href="/assets/fonts.googleapis.com/css21eba.css?family=Inter:wght@300;400;500;600;700&amp;ampdisplay=swap" rel="stylesheet">

    @include('panel.css.styles')
    @livewireStyles()
    @stack('styles')
  </head>

  <body>
    <!-- Layout wrapper -->
    {{ $slot }}
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>

    <!--/ Layout wrapper -->

    <!-- Main JS -->
    @include('panel.js.scripts')
    @stack('scripts')
    <!-- Page JS -->
  </body>
</html>
