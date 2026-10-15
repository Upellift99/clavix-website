/* ===========================================================
   Clavix — landing page scripts
   Vanilla JS, no dependencies, no trackers.
   =========================================================== */
(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open');
    });
    var closeMenu = function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    // Escape closes the open menu and hands focus back to the toggle.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { closeMenu(); toggle.focus(); }
    });
  }

  /* --- Active section highlight in nav --- */
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navAnchors.forEach(function (a) { a.classList.remove('active'); });
        var active = document.querySelector('.nav-links a[href="#' + e.target.id + '"]');
        if (active) active.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { navObs.observe(s); });
  }

  /* --- Reveal on scroll --- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Run the drag & drop demo loop only while it is on screen --- */
  var demo = document.querySelector('.flead-demo');
  if (demo && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { demo.classList.toggle('is-playing', e.isIntersecting); });
    }).observe(demo);
  } else if (demo) {
    demo.classList.add('is-playing');
  }

  /* --- Put the visitor's own OS first and name it on the hero button --- */
  function detectOS() {
    var p = ((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '') + ' ' + navigator.userAgent;
    if (/android|iphone|ipad|ipod/i.test(p)) return null; // phones get no desktop guess
    if (/win/i.test(p)) return 'windows';
    if (/mac/i.test(p)) return navigator.maxTouchPoints > 1 ? null : 'macos'; // iPadOS reports a Mac
    if (/linux|x11|cros/i.test(p)) return 'linux';
    return null;
  }
  var osNames = { linux: 'Linux', macos: 'macOS', windows: 'Windows' };
  var os = detectOS();
  var card = os && document.querySelector('.dl-card[data-card="' + os + '"]');
  function markYours() {
    card.classList.add('is-yours');
    var badge = card.querySelector('.dl-yours');
    if (badge) badge.hidden = false;
    var heroLabel = document.getElementById('hero-dl-label');
    if (heroLabel) heroLabel.textContent = 'Download for ' + osNames[os];
  }
  // Linux and Windows builds are x86_64 only: an ARM machine gets no "Your system" tag.
  var isArm = /aarch64|arm64|armv\d/i.test(navigator.userAgent);
  if (card && !isArm && os !== 'macos' && navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
    navigator.userAgentData.getHighEntropyValues(['architecture']).then(function (v) {
      if (v.architecture !== 'arm') markYours();
    }, markYours);
  } else if (card && (!isArm || os === 'macos')) {
    markYours();
  }

  /* --- Auto-resolve the latest release so download links never go stale --- */
  var repo = document.body.getAttribute('data-repo');
  var tagEl = document.getElementById('dl-tag');

  function osFromAsset(name) {
    if (/\.(AppImage|deb|rpm)$/i.test(name)) return 'linux';
    if (/\.(dmg|app\.tar\.gz)$/i.test(name)) return 'macos';
    if (/(-setup\.exe|\.msi|\.exe)$/i.test(name)) return 'windows';
    return null;
  }

  if (repo) {
    fetch('https://api.github.com/repos/' + repo + '/releases/latest', {
      headers: { 'Accept': 'application/vnd.github+json' }
    })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (rel) {
        // #dl-tag is already a link to /releases/latest; on failure it stays
        // that way, so there is no dead "loading…" text to clean up.
        if (tagEl && rel.tag_name) {
          tagEl.textContent = rel.tag_name;
          if (rel.html_url) tagEl.href = rel.html_url;
          var prefix = document.getElementById('dl-prefix');
          if (prefix) prefix.hidden = false;
          var dateEl = document.getElementById('dl-date');
          var when = rel.published_at && new Date(rel.published_at);
          if (dateEl && when && !isNaN(when)) {
            dateEl.textContent = ' · released ' + when.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
          }
        }
        var assets = rel.assets || [];
        // For each download link, find the matching asset by extension and
        // point straight at it; otherwise leave the /releases/latest fallback.
        document.querySelectorAll('.dl-links a[data-ext]').forEach(function (a) {
          var ext = a.getAttribute('data-ext');
          var match = assets.find(function (as) {
            return as.name.slice(-ext.length).toLowerCase() === ext.toLowerCase();
          });
          if (match && match.browser_download_url) a.href = match.browser_download_url;
          var sizeEl = a.querySelector('.dl-size');
          if (match && sizeEl && match.size) sizeEl.textContent = (match.size / 1048576).toFixed(0) + ' MB';
        });
        // List the SHA-256 GitHub computed for each asset, so a download can
        // be checked without leaving the page.
        var sums = document.getElementById('dl-sums');
        var withDigest = assets.filter(function (as) { return /^sha256:/.test(as.digest || ''); });
        if (sums && withDigest.length) {
          withDigest.forEach(function (as) {
            var li = document.createElement('li');
            var name = document.createElement('span');
            name.className = 'dl-sum-name';
            name.textContent = as.name;
            var hash = document.createElement('code');
            hash.textContent = as.digest.slice(7);
            li.appendChild(name);
            li.appendChild(hash);
            sums.appendChild(li);
          });
          sums.hidden = false;
        }
      })
      .catch(function () { /* keep the static links to the releases page */ });
  }
})();
